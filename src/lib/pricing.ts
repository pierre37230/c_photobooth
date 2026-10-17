import prices from '@/data/tarifs.json';
export { prices };
export type Period = 'weekend' | 'soiree';
export type Formula = 'digitale' | 'impression' | 'complete';
export const formatPrice = (amount: number) => `${amount.toLocaleString('fr-FR')} €`;
export const formulaNames: Record<Formula, string> = { digitale: 'Digitale', impression: 'Impression', complete: 'Complète' };
export const formulas: Formula[] = ['digitale', 'impression', 'complete'];
export function includedPrints(period: Period, formula: Formula): number {
  return prices.impressionsIncluses[period][formula];
}
export function contactLink(formula: Formula, period: Period = 'weekend') {
  return `/contact?formule=${formula}&duree=${period}`;
}
export function deliveryPrice(km: number, formula: Formula): number | null {
  if (km < 0 || !Number.isFinite(km) || km > 60) return null;
  if (formula === 'complete' && km <= prices.inclus.livraisonCompleteKm) return 0;
  if (km <= 20) return prices.livraison.jusqua20km;
  if (km <= 40) return prices.livraison.de20a40km;
  return prices.livraison.de40a60km;
}
export function estimatePrice(period: Period, formula: Formula, km: number | null, extra: 0 | 100 | 200, custom: boolean) {
  const delivery = km === null ? 0 : deliveryPrice(km, formula);
  if (delivery === null) return null;
  const prints = formula === 'digitale' ? 0 : extra === 100 ? prices.options.impressions100 : extra === 200 ? prices.options.impressions200 : 0;
  return prices[period][formula] + delivery + prints + (custom && formula !== 'complete' ? prices.options.personnalisation : 0);
}
export function plans(period: Period) {
  return formulas.map(id => ({
    id, name: `Formule ${formulaNames[id]}${period === 'soiree' ? ' Soirée' : ''}`,
    price: formatPrice(prices[period][id]),
    duration: period === 'weekend' ? 'Weekend ou 48h en semaine' : 'Soirée en semaine uniquement',
    popular: id === 'impression', includesDelivery: id === 'complete',
    features: [
      'Photobooth en bois fabriqué en France',
      'Appareil photo intégré et photos numériques illimitées',
      'Photos disponibles après votre événement',
      ...(id === 'digitale' ? ['Sans impressions papier'] : [`${includedPrints(period, id)} impressions papier 10 × 15 cm`, 'Imprimante professionnelle incluse']),
      ...(id === 'complete' ? ['Cadre photo personnalisé inclus', `Livraison incluse jusqu’à ${prices.inclus.livraisonCompleteKm} km de Tours`] : ['Retrait à Tours • livraison en option']),
      'Guide d’installation et assistance téléphonique',
    ],
  }));
}
