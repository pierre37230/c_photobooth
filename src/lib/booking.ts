import terms from '@/data/conditions.json';
import { formatPrice } from '@/lib/pricing';
export { terms };
export const depositAmount = (total: number) => Math.round(total * terms.depositPercent) / 100;
export const cautionText = (withPrinter: boolean) => formatPrice(withPrinter ? terms.cautionWithPrinter : terms.cautionWithoutPrinter);
export function validEventDate(value: string, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T12:00:00Z`);
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const max = new Date(today); max.setUTCFullYear(max.getUTCFullYear() + 3);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value && parsed >= today && parsed <= max;
}
