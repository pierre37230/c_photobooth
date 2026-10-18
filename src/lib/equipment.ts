import equipment from '@/data/locations.json';
export { equipment };
export type EquipmentId = (typeof equipment.items)[number]['id'];
export function normalizeEquipment(ids: string[]) {
  const valid = [...new Set(ids.filter(id => equipment.items.some(i => i.id === id)))];
  // Mutually exclusive choices for 1 vs 2 speakers.
  if (valid.includes('partybox-1') && valid.includes('partybox-2')) return valid.filter(id => id !== 'partybox-1');
  return valid;
}
export function equipmentAmount(ids: string[], bundled: boolean) {
  return normalizeEquipment(ids).reduce((sum, id) => {
    const item = equipment.items.find(i => i.id === id);
    return sum + (item ? (bundled ? item.priceWithPhotobooth : item.price) : 0);
  }, 0);
}
