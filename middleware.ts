import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Create response
  const response = NextResponse.next();

  // Add compression-related headers
  response.headers.set('Vary', 'Accept-Encoding');
  
  // Add cache control based on path
  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith('/_next/static/')) {
    // Static assets - long cache with compression
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (pathname.startsWith('/api/')) {
    // API routes - no cache but allow compression
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  } else if (pathname.match(/\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico)$/)) {
    // Static files - medium cache
    response.headers.set('Cache-Control', 'public, max-age=86400');
  } else {
    // HTML pages - short cache
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files are handled by Next.js)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
