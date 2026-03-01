import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  // 1. Redirection permanente non-www → www
  if (host === 'cphotobooth.fr' || host.startsWith('cphotobooth.fr:')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = 'www.cphotobooth.fr';
    return NextResponse.redirect(url, 301);
  }

  // 2. Rewrite /photobooth-[ville] → /photobooth/[ville]
  // SAUF /photobooth-tours et /photobooth-mariage-tours et /photobooth-entreprise-tours
  const staticPages = [
    '/photobooth-tours',
    '/photobooth-mariage-tours', 
    '/photobooth-entreprise-tours',
  ];

  if (pathname.startsWith('/photobooth-') && !staticPages.includes(pathname)) {
    const city = pathname.replace('/photobooth-', '');
    const url = request.nextUrl.clone();
    url.pathname = `/photobooth/${city}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon.png|api).*)',
  ],
};