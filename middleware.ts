import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirection permanente non-www → www
  if (request.headers.get('host')?.startsWith('cphotobooth.fr')) {
    const url = request.nextUrl.clone();
    url.host = 'www.cphotobooth.fr';
    return NextResponse.redirect(url, 301);
  }

  // Rewrite /photobooth-[ville] → /photobooth/[ville]
  // Exception : /photobooth-tours reste une page statique
  if (pathname.startsWith('/photobooth-') && pathname !== '/photobooth-tours') {
    const city = pathname.replace('/photobooth-', '');
    const url = request.nextUrl.clone();
    url.pathname = `/photobooth/${city}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)',
  ],
};