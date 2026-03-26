declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Émet un événement GA4.
 * Ne fait rien si gtag n'est pas chargé (SSR, blocage pub, etc.).
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params ?? {});
  }
}
