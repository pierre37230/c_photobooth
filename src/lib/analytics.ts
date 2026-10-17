export const CONSENT_KEY = 'cphotobooth_analytics_consent_v1';
export function hasAnalyticsConsent() {
  try { const value=JSON.parse(localStorage.getItem(CONSENT_KEY)||'null'); return value?.choice==='accepted' && Date.now()-value.at<180*24*60*60*1000; } catch { return false; }
}
declare global { interface Window { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[]; } }
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && hasAnalyticsConsent() && typeof window.gtag === 'function') window.gtag('event',eventName,params??{});
}
