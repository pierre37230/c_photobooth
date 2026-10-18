# V23 — Validation avant publication

## Vérifications exécutées lors de la préparation

- Le fichier ZIP V22 contient bien les images `/images/photobooth-vrai.webp`, `photobooth-4.webp` et `photobooth-6.webp` (l'alerte Gemini provenait d'une archive plus légère/incomplète).
- Les scripts `scripts/check-catalogue.cjs` et `scripts/test-core.cjs` sont bien présents ; ils n'ont pas été supprimés.
- `node scripts/check-catalogue.cjs` : OK.
- Analyse syntaxique TypeScript de tous les fichiers TS/TSX avec TypeScript 5.8 : OK.
- Simulation isolée de l'API avec un module NextRequest/NextResponse minimal : calculs, validation des dates et emails, refus d'origine, limites, réponses Resend simulées, OK. **Ce test n'est pas une preuve d'une compilation Next.js complète ni un envoi réel.**
- `npm run check` : impossible dans l'environnement de préparation, car l'installation npm complète échoue et les définitions `@types/node`/`@types/react`/`@types/react-dom` ne sont pas disponibles. Tester dans le vrai projet avant publication.

## Procédure sur votre ordinateur (dossier Git courant)

1. Sauvegarder les fichiers actuels. Décompresser le ZIP puis copier son contenu dans le dossier Git existant. **Ne pas supprimer `.git`, `.env.local`, vos secrets ni les prix éventuellement modifiés depuis la V22.**
2. Vérifier `src/data/tarifs.json`, `src/data/locations.json`, `src/data/conditions.json`.
3. Terminal PowerShell : `npm ci`, `npm run check`, `npm test`, `npm run build`.
4. Contrôler sur localhost l'accueil, `/photobooth-tours`, `/tarifs`, `/contact`, `/photobooth-anniversaire-tours`, `/locations-evenementielles`, `/conditions-location`, les nouvelles pages livre d'or et enceintes, les pages guides et la galerie.
5. Faire un devis **sans validation d'envoi** depuis `/tarifs` avec une formule Complète et une adresse dans la zone 20–40 km : le supplément de livraison doit être le **tarif intégral 45 €**. Refaire un devis incluant livre d'or + matériel, et un devis matériel seul ; les tarifs doivent correspondre à `locations.json`.
6. Vérifier le formulaire : date passée rejetée ; demande matériel seul sans produit refusée ; choix de simulateur transmis dans les champs distincts ; pas de prix réduit si « formule à conseiller » tant que le photobooth n'est pas confirmé.
7. Si possible, faire une demande de devis test réelle sur une preview Vercel avec Resend activé, vérifier réception professionnelle et accusé client, puis s'assurer que l'événement `generate_lead` est envoyé en GA4 après consentement et marqué en événement clé.
8. Vérifier le widget SociableKIT avec la fiche Google Business Profile ; tant qu'il n'est pas confirmé, garder le lien externe de secours. **N'ajouter aucun avis en dur sans authenticité vérifiée.**
9. Publier uniquement après succès des tests sur le code installé et vérification des écrans mobile/ordinateur.

## Conditions commerciales présentes dans la V23

- Acompte **30 %** à la réservation ; solde **70 %** au plus tard la veille.
- Caution **900 € sans imprimante / 1 200 € avec imprimante**, **chèque ou virement uniquement**, jamais espèces.
- Annulation **plus de 60 jours avant : acompte remboursé** ; annulation **à partir de J-60 : acompte conservé**, sous réserve des droits légaux. Aucun autre frais d'annulation automatique ajouté.
- Livraison formule Complète incluse jusqu'à **20 km** ; au-delà **tarif entier de la zone**, non diminué de 39 €.

## Points laissés volontairement ouverts

- Validation juridique du contrat/CGV, nature exacte du droit de rétractation selon le contrat, remboursement/encaissement de la caution, responsabilités en cas de dégâts, force majeure, médiation de consommation et modalités d'annulation par le professionnel.
- Contrôle du site publié et indexation réelle dans Search Console ; aucune URL locale n'a été supprimée faute de données page par page.
- WAF/Turnstile ou limitation persistante à configurer pour l'API si le volume ou le risque d'abus le justifie ; le limiteur en mémoire n'est **pas global** dans les fonctions serverless Vercel.
- Référence exacte du reflex Canon, dimensions du photobooth et format exact des bandes : aucune donnée chiffrée inconnue n'a été inventée.
- Conditions de livraison propres au matériel seul (sur devis, pas la grille photobooth automatique).
- Cohérence des prix : seule l'archive V22 fournie sert de source ; si vos tarifs ont changé plus tard, vérifier et recopier les valeurs courantes **avant publication**.
