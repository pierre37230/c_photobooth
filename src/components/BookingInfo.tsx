import Link from 'next/link';
import { terms } from '@/lib/booking';
import { formatPrice } from '@/lib/pricing';
export default function BookingInfo({ compact = false }: {compact?: boolean}) {
 return <div className="card content-block"><h2>Réserver en toute clarté</h2>
 <p>Après confirmation de disponibilité et acceptation du devis : <strong>{terms.depositPercent} % d’acompte</strong> à la réservation, puis le <strong>solde au plus tard la veille</strong> de l’événement.</p>
 <p>Dépôt de garantie : <strong>{formatPrice(terms.cautionWithoutPrinter)} sans imprimante</strong> ou <strong>{formatPrice(terms.cautionWithPrinter)} avec imprimante</strong>, par chèque ou virement uniquement.</p>
 {!compact && <p>Annulation plus de {terms.refundUntilDaysBefore} jours avant la date : acompte remboursé. À partir de J-{terms.refundUntilDaysBefore} : acompte conservé, sous réserve des droits légaux applicables. Aucune pénalité supplémentaire n’est prévue dans ce barème.</p>}
 <p><Link className="text-link" href="/conditions-location">Consulter les conditions de réservation et d’annulation →</Link></p></div>;
}