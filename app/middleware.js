import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Define the secret used to sign the JWT
const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req) {
  // Get the token from the request cookies
  const token = await getToken({ req, secret });

  // Check if the user is authenticated
  if (!token && req.nextUrl.pathname.startsWith('/upload')) {
    // Redirect unauthenticated users to the login page
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return NextResponse.next();
}
