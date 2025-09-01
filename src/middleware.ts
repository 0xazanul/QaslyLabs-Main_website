import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers);
  
  // Add cache control headers for static assets
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set compression and caching headers
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    // Static assets - long cache
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (request.nextUrl.pathname.startsWith('/public/')) {
    // Public assets - long cache
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (request.nextUrl.pathname.startsWith('/_next/image')) {
    // Images - long cache
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else {
    // HTML pages - shorter cache
    response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
  }

  // Enable compression hints
  response.headers.set('Vary', 'Accept-Encoding');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
