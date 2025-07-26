import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(request: NextRequest) {
  try {
    const { priceId, customerId, successUrl, cancelUrl } = await request.json();

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      );
    }

    console.log(`🎯 Creating Stripe checkout session for price: ${priceId}`);

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      customer: customerId,
      metadata: {
        plan: priceId,
        source: 'SAINTSAL_PLATFORM'
      },
      subscription_data: {
        metadata: {
          platform: 'SAINTSAL_COOKIN_KNOWLEDGE'
        }
      }
    });

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('🚨 Stripe API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get all products and prices
    const prices = await stripe.prices.list({
      active: true,
      expand: ['data.product'],
    });

    const plans = prices.data.map(price => ({
      id: price.id,
      amount: price.unit_amount,
      currency: price.currency,
      interval: price.recurring?.interval,
      product: {
        name: (price.product as Stripe.Product).name,
        description: (price.product as Stripe.Product).description,
      }
    }));

    return NextResponse.json({
      success: true,
      plans,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('🚨 Stripe GET Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch pricing plans',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Handle Stripe webhooks
export async function PUT(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing Stripe signature' },
        { status: 400 }
      );
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log(`🎣 Stripe webhook received: ${event.type}`);

    // Handle different event types
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`✅ Payment successful for session: ${session.id}`);
        // TODO: Update user subscription status in database
        break;

      case 'customer.subscription.updated':
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`🔄 Subscription updated: ${subscription.id}`);
        // TODO: Update subscription status in database
        break;

      case 'customer.subscription.deleted':
        const deletedSub = event.data.object as Stripe.Subscription;
        console.log(`🗑️ Subscription cancelled: ${deletedSub.id}`);
        // TODO: Handle subscription cancellation
        break;

      default:
        console.log(`📨 Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('🚨 Stripe Webhook Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Webhook processing failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
