import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export { stripePromise }

// Stripe Price IDs
export const STRIPE_PRICES = {
  FREE: process.env.NEXT_PUBLIC_STRIPE_FREE_PRICE_ID!,
  PRO: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID!,
  UNLIMITED: process.env.NEXT_PUBLIC_STRIPE_UNLIMITED_PRICE_ID!,
  WHITE_LABEL: process.env.NEXT_PUBLIC_STRIPE_WHITE_LABEL_PRICE_ID!,
  CUSTOM: process.env.NEXT_PUBLIC_STRIPE_CUSTOM_PRICE_ID!
}

// Create Stripe checkout session
export const createCheckoutSession = async (priceId: string, userId: string) => {
  const response = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId,
      userId,
      successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/workspace?success=true`,
      cancelUrl: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to create checkout session')
  }

  return response.json()
}
