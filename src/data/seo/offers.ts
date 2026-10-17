import { plans, type Period } from '@/lib/pricing';
export interface Offer { name: string; slug: string; price: string; duration: string; popular?: boolean; features: string[]; includesDelivery?: boolean; category: 'weekend' | 'evening'; }
function offers(period: Period): Offer[] { return plans(period).map(p => ({ ...p, name: p.name.replace('Formule ', ''), slug: `${p.id}-${period}`, category: period === 'weekend' ? 'weekend' : 'evening' })); }
export const weekendOffers = offers('weekend');
export const eveningOffers = offers('soiree');
export const getAllOffers = () => [...weekendOffers, ...eveningOffers];
export const getOfferBySlug = (slug: string) => getAllOffers().find(o => o.slug === slug);
