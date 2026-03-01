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

  // 2. Liste des pages statiques à NE PAS rewriter
  const staticPages = [
    '/photobooth-tours',
    '/photobooth-mariage-tours',
    '/photobooth-entreprise-tours',
    '/prix-photobooth-tours',
  ];

  // 3. Rewrite /photobooth-[ville] → /photobooth/[ville]
  if (pathname.startsWith('/photobooth-') && !staticPages.includes(pathname)) {
    // Extraire le slug de la ville
    const citySlug = pathname.replace('/photobooth-', '');
    
    // Créer l'URL de destination
    const url = request.nextUrl.clone();
    url.pathname = `/photobooth/${citySlug}`;
    
    // IMPORTANT: Rewrite (pas redirect)
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf :
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation images)
     * - favicon.ico, icon.png
     */
    '/((?!_next/static|_next/image|favicon.ico|icon.png).*)',
  ],
};