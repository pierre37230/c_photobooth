# Tarifs des locations complémentaires — validés

- Livre d’or audio : 49 € seul / 29 € avec photobooth
- Une JBL PartyBox 320 : 59 € seule / 39 € avec photobooth
- Deux JBL PartyBox 320 : 99 € seules / 69 € avec photobooth
- Deux micros : 25 € seuls / 15 € avec photobooth

Modifier uniquement `src/data/locations.json` : `price` = location seule, `priceWithPhotobooth` = tarif combiné.
Le tarif combiné s'applique dans le formulaire après sélection explicite d'une formule photobooth ; tant que le client hésite, le prix seul est montré. Les prix indiqués dans le devis restent soumis à confirmation de disponibilité et de livraison.

## Vérifications
Avant publication, lancer `npm ci`, `npm run check`, `npm test`, `npm run build`. Tester un devis avec une formule, un devis sans formule et les deux variantes PartyBox. Ne pas publier les secrets `.env`.
