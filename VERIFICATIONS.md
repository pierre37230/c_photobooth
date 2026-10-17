# Vérifications — 17 octobre 2026

## Effectuées

- Installation depuis le package-lock existant avec npm ci ; aucun nouveau paquet applicatif ajouté.
- npm run check : vérification TypeScript réussie.
- npm run test : catalogue et calculs, seuils 20/40/60 km, hors zone, papier ignoré en Digitale, prix JSON-LD.
- API : configuration absente, origine invalide, données invalides, champ piège, fournisseur en erreur, timeout simulé, succès simulé, limite par instance. Aucun email réel envoyé.
- Composants React en environnement simulé : refus, acceptation et retrait de consentement ; aucun script GA4 avant accord ; préremplissage de la formule ; email manuel sans appel API ; repli sur erreur ; événement generate_lead seulement après succès. Ces essais utilisent react-test-renderer dans un outillage temporaire séparé, non ajouté au projet.
- npm run build : compilation de production et génération statique réussies sur Next.js 14.2.35.
- Contrôle des 28 pages HTML générées hors erreur/redirection : un H1 par page, destinations internes existantes, images référencées présentes, 50 blocs JSON-LD syntaxiquement valides ; pas de script externe GA4 au chargement initial.
- Six photos : 7 170 229 octets originaux contre 675 876 octets pour les versions WebP (−90,6 %). Ce chiffre porte sur les fichiers, pas sur un score PageSpeed.

## Limites et vérifications avant production

- Pas de contrôle visuel sur navigateur disponible ici. Tester desktop/mobile sur la Preview Vercel avec la liste d’INTEGRATION.md.
- Pas de mesure Lighthouse, Core Web Vitals ou trafic réel.
- Pas de test de délivrabilité email : compte Resend non configuré. Le formulaire fonctionne immédiatement en préparation d’email manuel, clairement annoncée.
- Pas d’envoi sur GitHub, pas de publication Vercel, pas de vérification du lien Git/Vercel dans le compte.
- Pas de contrôle Search Console ni validation Google Rich Results ; JSON-LD testé syntaxiquement et par cohérence, sans promesse de résultat enrichi.
- Les essais React sont des tests de composants, pas une simulation complète de navigateur.
- Avertissement non bloquant du build : base Browserslist ancienne. La version majeure Next.js reste celle du projet ; une migration majeure doit être traitée séparément.

Le prochain contrôle concret est la prévisualisation Vercel, avant fusion vers la branche de production.
