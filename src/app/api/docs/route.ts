import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const docs = {
      title: 'SAINTSAL™ COOKIN\' KNOWLEDGE API Documentation',
      version: '2.0',
      description: 'Comprehensive API documentation for the SaintVision AI platform',
      baseUrl: process.env.NEXT_PUBLIC_APP_URL,
      endpoints: {
        ai: {
          url: '/api/ai',
          methods: ['GET', 'POST'],
          description: 'AI processing and chat completions',
          authentication: 'Required',
          examples: {
            chat: {
              method: 'POST',
              body: {
                message: 'Hello SaintSal',
                model: 'gpt-4o',
                useAzure: false
              }
            }
          }
        },
        stripe: {
          url: '/api/stripe',
          methods: ['GET', 'POST', 'PUT'],
          description: 'Payment processing and subscription management',
          authentication: 'Required',
          examples: {
            createCheckout: {
              method: 'POST',
              body: {
                priceId: 'price_1RINIMFZsXxBWnjQEYxlyUIy',
                successUrl: 'https://saintvisionai.com/success',
                cancelUrl: 'https://saintvisionai.com/pricing'
              }
            }
          }
        },
        auth: {
          url: '/api/auth',
          methods: ['GET', 'POST'],
          description: 'Authentication and user management',
          authentication: 'Optional',
          provider: 'NextAuth.js'
        }
      },
      features: [
        '🤖 AI-powered chat completions',
        '💳 Stripe payment processing',
        '🔐 Secure authentication',
        '📊 Real-time analytics',
        '🔄 Webhook handling',
        '📱 Mobile-optimized responses'
      ],
      integrations: {
        openai: {
          status: 'Active',
          models: ['gpt-4o', 'gpt-3.5-turbo']
        },
        azure: {
          status: 'Active',
          deployment: process.env.AZURE_OPENAI_DEPLOYMENT_NAME
        },
        stripe: {
          status: 'Active',
          mode: 'Live'
        },
        supabase: {
          status: 'Active',
          url: process.env.NEXT_PUBLIC_SUPABASE_URL
        },
        twilio: {
          status: 'Active',
          phone: process.env.TWILIO_PHONE_NUMBER
        },
        builder: {
          status: 'Active',
          cms: 'Builder.io'
        }
      },
      rateLimit: {
        requests: '1000 per hour',
        burst: '100 per minute'
      },
      support: {
        email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
        slack: 'Available via webhook',
        documentation: 'Real-time updates'
      }
    };

    return NextResponse.json(docs, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      }
    });

  } catch (error) {
    console.error('🚨 Docs API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate documentation',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
