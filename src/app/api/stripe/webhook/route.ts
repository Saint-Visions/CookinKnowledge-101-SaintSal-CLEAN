import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { supabase } from '../../../../../lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err) {
    console.error(`🚨 Webhook signature verification failed:`, err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  console.log(`📧 Received ${event.type} event`);

  try {
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionChange(event.data.object as Stripe.Subscription);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionCancellation(event.data.object as Stripe.Subscription);
        break;

      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object as Stripe.PaymentIntent);
        break;

      case 'payment_intent.payment_failed':
        await handlePaymentFailure(event.data.object as Stripe.PaymentIntent);
        break;

      default:
        console.log(`📝 Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(`🚨 Error processing webhook:`, error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;
  const subscriptionId = subscription.id;
  const status = subscription.status;

  // Determine tier based on price ID
  const tier = getPriceIdToTier(subscription.items.data[0]?.price?.id);

  try {
    // Update user in Supabase
    const { error } = await supabase
      .from('users')
      .update({
        tier: tier,
        stripe_customer_id: customerId,
        subscription_id: subscriptionId,
        subscription_status: status,
        updated_at: new Date().toISOString()
      })
      .eq('stripe_customer_id', customerId);

    if (error) {
      console.error('🚨 Error updating user subscription:', error);
      return;
    }

    console.log(`✅ Updated user to ${tier} tier (${status})`);

  } catch (error) {
    console.error('🚨 Error in handleSubscriptionChange:', error);
  }
}

async function handleSubscriptionCancellation(subscription: Stripe.Subscription) {
  const customerId = subscription.customer as string;

  try {
    // Downgrade user to free tier
    const { error } = await supabase
      .from('users')
      .update({
        tier: 'free',
        subscription_status: 'canceled',
        updated_at: new Date().toISOString()
      })
      .eq('stripe_customer_id', customerId);

    if (error) {
      console.error('🚨 Error downgrading user:', error);
      return;
    }

    console.log(`⬇️ Downgraded user to free tier`);

  } catch (error) {
    console.error('🚨 Error in handleSubscriptionCancellation:', error);
  }
}

async function handlePaymentSuccess(paymentIntent: Stripe.PaymentIntent) {
  console.log(`💰 Payment succeeded: ${paymentIntent.id}`);
}

async function handlePaymentFailure(paymentIntent: Stripe.PaymentIntent) {
  console.log(`❌ Payment failed: ${paymentIntent.id}`);
}

function getPriceIdToTier(priceId?: string): string {
  const tierMap: Record<string, string> = {
    // Map your actual Stripe price IDs to tiers
    'price_unlimited_monthly': 'unlimited',
    'price_core_monthly': 'core', 
    'price_pro_monthly': 'pro',
    'price_whitelabel_monthly': 'whitelabel',
    'price_custom_monthly': 'custom',
  };

  return tierMap[priceId || ''] || 'free';
}
