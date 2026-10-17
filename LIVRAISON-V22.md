# V22 — tarifs avec ou sans photobooth

## Changements
- `src/data/locations.json` : ajout `priceWithPhotobooth` aux quatre locations ; prix de location seule inchangés.
- `src/components/LocationsPreview.tsx` : quatre cartes plus visibles sur l'accueil, avec les deux prix et un lien vers le devis.
- `src/app/locations-evenementielles/page.tsx` : les deux grilles de prix sur chaque produit.
- `src/components/QuoteForm.tsx` : choix explicite « sans photobooth » ; prix combinés uniquement lorsqu'une formule photobooth est sélectionnée ; choix incompatibles des deux formats d'enceintes toujours mutuellement exclusifs ; récapitulatif des options/prix envoyé dans la demande.
- `src/app/api/devis/route.ts` : accepte les demandes de matériel sans photobooth.
- `scripts/check-catalogue.cjs` : contrôles des huit prix d'équipements.

## Avant publication
Le projet provient de l'archive « Audit SEO V20 avec Avis Google » et non d'un clone automatique de ton dépôt GitHub. Vérifier que les éventuelles modifications locales plus récentes ne sont pas écrasées. Sauvegarder avant copie. Ne pas supprimer `.git` ou `.env.local`.

Tester `npm ci`, `npm run check`, `npm test`, `npm run build`, `npm run dev`. Tester en particulier `/contact` avec une formule choisie puis « sans photobooth », ainsi que la sélection d'une puis deux enceintes.

Le build n'a pas pu être exécuté ici : `npm ci --offline` a échoué en raison d'un paquet absent du cache (`undici-types`). Les vérifications JSON et le contrôle du catalogue ont réussi.

Le widget SociableKIT 25722904 est conservé, mais reste soumis à la synchronisation du fournisseur.
