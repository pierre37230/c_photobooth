# CPhotobooth — refonte ciblée

Voir `INTEGRATION.md` pour l’installation et la mise en ligne sur le projet Vercel existant.

## Modifier les tarifs

Éditer uniquement `src/data/tarifs.json`. Les nombres sont en euros, sans symbole € ni guillemets.
`weekend` : weekend / 48h. `soiree` : soirée en semaine. `livraison` : prix de chaque zone. `options` : packs et personnalisation.

Les prix des cartes, du simulateur, des guides, des FAQ, des titres/descriptions et des données structurées se calculent à partir de ce fichier.

Exemple : changer `weekend.impression` de 329 à 349, enregistrer, exécuter `npm run build`, puis envoyer le commit vers GitHub. Vercel reconstruit les pages. Google et les IA peuvent conserver temporairement leurs anciennes informations en cache.

## Développement

Node.js compatible avec Next.js 14, npm. Dépendances verrouillées dans package-lock.json.

```sh
npm ci
npm run dev
npm run check
npm run build
```

Les données de tarifs : `src/data/tarifs.json`.
Les coordonnées : `src/data/siteData.ts`.
Les villes : `src/data/seo/cities.json`.
Les textes des guides : `src/app/conseils/[slug]/page.tsx`.
Le formulaire : `src/components/QuoteForm.tsx`.
La mesure GA4 avec accord préalable : `src/components/AnalyticsConsent.tsx`.

Pas de changement de domaine, de DNS ni de boîte email.
