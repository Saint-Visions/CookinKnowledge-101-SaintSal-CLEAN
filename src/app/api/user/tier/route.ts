import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../../../lib/supabase';

export async function GET(req: NextRequest) {
  try {
    // Get user from session/auth
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ 
        tier: 'free', 
        messageCount: 0 
      });
    }

    // Extract user ID from auth (this would be your auth logic)
    const userId = extractUserFromAuth(authHeader);
    
    if (!userId) {
      return NextResponse.json({ 
        tier: 'free', 
        messageCount: 0 
      });
    }

    // Get user tier from Supabase
    const { data: user, error } = await supabase
      .from('users')
      .select('tier, message_count, stripe_customer_id, subscription_id, subscription_status')
      .eq('id', userId)
      .single();

    if (error || !user) {
      console.log('🚨 User not found, defaulting to free tier');
      return NextResponse.json({ 
        tier: 'free', 
        messageCount: 0 
      });
    }

    return NextResponse.json({
      tier: user.tier || 'free',
      messageCount: user.message_count || 0,
      stripeCustomerId: user.stripe_customer_id,
      subscriptionId: user.subscription_id,
      subscriptionStatus: user.subscription_status
    });

  } catch (error) {
    console.error('🚨 Error fetching user tier:', error);
    return NextResponse.json({ 
      tier: 'free', 
      messageCount: 0 
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { tier, messageCount } = await req.json();
    
    // Get user from session/auth
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const userId = extractUserFromAuth(authHeader);
    if (!userId) {
      return NextResponse.json({ error: 'Invalid auth' }, { status: 401 });
    }

    // Update user tier in Supabase
    const { data, error } = await supabase
      .from('users')
      .update({ 
        tier: tier,
        message_count: messageCount,
        updated_at: new Date().toISOString()
      })
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      console.error('🚨 Error updating user tier:', error);
      return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      tier: data.tier,
      messageCount: data.message_count
    });

  } catch (error) {
    console.error('🚨 Error updating user tier:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

// Helper function to extract user from auth header
function extractUserFromAuth(authHeader: string): string | null {
  try {
    // This is a placeholder - implement your auth logic here
    // Could be JWT decode, session lookup, etc.
    const token = authHeader.replace('Bearer ', '');
    
    // For now, return a mock user ID
    // In production, you'd decode the JWT or validate the session
    if (token) {
      return 'user_123'; // Replace with actual user extraction
    }
    
    return null;
  } catch (error) {
    console.error('🚨 Error extracting user from auth:', error);
    return null;
  }
}
