# CPhotobooth V23 — Consolidation technique, commerciale, SEO et GEO

**Base utilisée :** l'archive `site V22 léger.zip` transmise par le propriétaire. Les montants sont ceux de cette archive, pas d'éventuelles modifications locales postérieures.

## Priorité 1 — fiabilité des données et devis

- `src/data/tarifs.json` : quantités d'impressions dupliquées supprimées (`inclus.impression` et `inclus.complete`) ; elles proviennent désormais exclusivement de `impressionsIncluses` via `includedPrints(...)`.
- Contenu corrigé dans le Hero, l'accueil, les pages mariage et FAQ, et les guides.
- Prix de livraison : logique **strictement conservée**. La Complète n'ajoute rien jusqu'à 20 km ; au-delà, prix complet de la tranche de livraison (45 € puis 60 €), sans déduction.
- `src/data/conditions.json` : centralisation des règles commerciales validées : 30 % d'acompte, solde à J-1, caution photobooth 900/1200 € par chèque ou virement uniquement, politique d'annulation J-60.
- `src/components/QuoteForm.tsx` : vrais champs indépendants pour zone, tirages, cadre, matériel, période, formule et événement ; conservation des paramètres depuis le simulateur, estimation cohérente, affichage distinct des tarifs matériels seuls et groupés quand la formule est indécise.
- `src/components/PricingSimulator.tsx` : ajout matériel avec tarifs groupés et transmission de la sélection complète à `/contact`.
- `src/app/api/devis/route.ts` : validation stricte des dates, emails, champs, équipements et options ; calcul de l'estimation sur le serveur à partir des JSON ; nettoyage du texte d'entête ; limiteur en mémoire conservé comme simple protection d'appoint ; tests de flux mail avec simulation.
- Attention : en cas de **matériel loué seul**, les frais de livraison et le dépôt de garantie restent sur devis. La grille de livraison photobooth n'est pas automatiquement réutilisée.

## Priorité 2 — parcours client

- Nouvelle page `/conditions-location` : acompte, solde, caution, annulation et livraison, avec réserve explicite des droits légaux.
- Nouvelle page `/photobooth-anniversaire-tours` à contenu spécifique, avec suppression de l'ancienne redirection.
- Nouvelle page commerciale locale `/location-livre-or-audio-tours`.
- Nouvelle page commerciale locale `/location-enceinte-soiree-tours`.
- Page entreprise enrichie avec formules Weekend / 48h ; préselection du type d'événement dans le formulaire.
- Galerie : retrait des affirmations erronées selon lesquelles les photos proviendraient d'événements clients ; améliorations des textes alternatifs.
- Authentiques avis Google : aucun faux avis, aucune note inventée. Widget SociableKIT chargé seulement si le visiteur le demande, avec lien officiel visible en permanence.

## Priorité 3 — SEO et GEO

- `/photobooth-tours` réécrite en **page locale commerciale** : prestations, appareil Canon, ordinateur/écran tactile, éclairage LED, DNP RX1HS, trois formules, tarifs, livraison et parcours mariage/anniversaire/entreprise.
- Ajout d'un tableau HTML natif des formules et tirages sur `/tarifs`, en plus des cartes existantes.
- Nouvelle section éditoriale réutilisable consacrée aux caractéristiques techniques confirmées.
- Trois nouveaux guides : checklist mariage, organisation d'un livre d'or audio, choix des enceintes pour soirée.
- FAQ enrichie de questions précises sur la technique, l'acompte, la caution, l'annulation et les matériels seuls.
- JSON-LD `Service` / `Offer` basé sur le catalogue pour les nouvelles pages produits ; `LocalBusiness` amélioré sans inventer d'adresse postale à Tours ni de note Google.
- Sitemap enrichi des nouvelles pages ; **aucune suppression/redirection des pages villes existantes** en l'absence de données Search Console fraîches URL par URL.

## Hygiène technique

- En-têtes HTTP sobres : `nosniff`, politique Referrer, Permissions-Policy, protection anti-framing.
- Suppression du fichier `public/favicon.zip` et du cache build TypeScript livré dans la V22.
- Tests de prix préservés et étendus ; aucun tarif numérique fixé arbitrairement dans les vérifications de catalogue.

## Contrôles et limitations

Voir `VERIFICATIONS-V23.md`. Les fichiers TypeScript ont passé une vérification de syntaxe, les contrôles catalogue passent, et des scénarios d'API ont été validés dans une simulation sans envoyer de vrais emails. **La compilation complète Next.js n'a pas été exécutée avec succès ici**, car npm n'a pas pu installer l'intégralité des dépendances (`undici-types` absent du cache et accès registre indisponible). La publication requiert impérativement les commandes `npm ci`, `npm run check`, `npm test`, `npm run build` sur votre machine.

## Points nécessitant validation avant contractualisation ou publication

1. CGV complètes et obligations réglementaires (notamment droit de rétractation, médiation, gestion de la caution, annulation du loueur, dommages, force majeure) : faire vérifier juridiquement la formulation proposée.
2. Caution pour équipements loués **sans photobooth** : montant et délai de restitution non communiqués ; laissés à déterminer sur devis.
3. Modalités de remboursement du virement de caution, restitution du chèque, délais et cas de retenue : non communiqués.
4. Conditions exactes de mise à disposition des enregistrements du livre d'or audio : à confirmer.
5. Protection globale contre les envois automatiques de devis : envisager les protections WAF de Vercel ou Turnstile validé côté serveur ; la Map par instance n'est pas suffisante face à des attaques distribuées.
6. Profil SociableKIT : vérifier qu'il pointe bien sur l'établissement et qu'il synchronise les vrais avis avant d'activer l'affichage intégré.
7. Référencement local : avant d'indexer, fusionner ou rediriger des pages communes, examiner la Search Console URL/requête, les liens entrants et la qualité rédactionnelle.
8. Confronter les montants V22 aux tarifs réellement souhaités et vérifier les éventuelles modifications postérieures chez vous.
