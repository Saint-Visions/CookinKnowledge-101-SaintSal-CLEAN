import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.redirect(`${request.nextUrl.origin}/auth/error`);
    }

    // Exchange code for session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Auth callback error:', error);
      return NextResponse.redirect(`${request.nextUrl.origin}/auth/error`);
    }

    // Redirect to dashboard on success
    return NextResponse.redirect(`${request.nextUrl.origin}/dashboard`);
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(`${request.nextUrl.origin}/auth/error`);
  }
}
