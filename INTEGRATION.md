# Intégrer la refonte dans votre site actuel

## Ce qui est prêt

Version préparée à partir de l’archive transmise le 17 octobre 2026. Le projet reste en Next.js 14, pour votre hébergement Vercel existant. Les URL actuelles et les redirections ont été conservées. Aucun déploiement ni push GitHub n’a été effectué par cette préparation.

Dépôt retrouvé dans votre projet : https://github.com/pierre37230/c_photobooth

Le fonctionnement prévu est : **VS Code (modifier) → GitHub (envoyer les fichiers) → Vercel (compiler et publier)**. Vérifiez dans les réglages Git du projet Vercel que ce dépôt est toujours connecté et quelle branche est utilisée pour la production. La branche `main` était celle du projet fourni ; ce réglage Vercel n’a pas été consulté directement.

## 1. Préparer une intégration réversible

1. Décompressez le ZIP en dehors de votre dossier de travail actuel.
2. Ouvrez votre dossier habituel `c_photobooth` dans VS Code. Il doit contenir `package.json`, `src` et `public`.
3. Sauvegardez vos modifications locales éventuelles avant de continuer. Si vous avez fait des changements après l’archive fournie, comparez-les avec `MODIFICATIONS.md` avant de remplacer les fichiers concernés.
4. Dans le terminal de VS Code, vérifiez le dépôt avec `git remote -v` et les modifications avec `git status`.
5. Une fois votre travail local sauvegardé et la branche habituelle à jour, créez une branche :

```sh
git switch -c refonte-ciblee-2026-10
```

6. Copiez **le contenu** du dossier `c-photobooth-site` décompressé dans votre dossier actuel. Acceptez le remplacement des fichiers du même nom. Ne placez pas le dossier entier comme sous-dossier du projet.
7. Conservez votre dossier `.git`, votre éventuel `.vercel` et vos fichiers `.env.local`. Ils ne sont pas livrés dans cette archive. Ne supprimez pas votre projet ou ses réglages.

La copie est additive : aucun ancien fichier n’a besoin d’être supprimé pour utiliser cette version. Les anciens fichiers de données SEO ont été remplacés par des exports de compatibilité, afin de ne pas conserver de tarifs obsolètes.

## 2. Tester localement

Dans le terminal, à la racine où se trouve `package.json` :

```sh
npm ci
npm run test
npm run build
npm run dev
```

Ouvrez http://localhost:3000. La dernière commande reste active ; `Ctrl+C` l’arrête.

Vérifiez sur ordinateur puis sur téléphone / écran étroit :

- Accueil : photo visible, boutons lisibles, galerie.
- Tarifs : weekend 259 / 329 / 399 €, soirée 139 / 199 / 259 €.
- Simulateur : prix recalculé quand vous changez formule, livraison ou options.
- Bouton d’une formule : choix prérempli sur Contact.
- Formulaire : préparation d’un email, texte complet, possibilité de copie.
- Menu mobile, questions/réponses, bouton d’appel.
- Cookies : Refuser, accepter et rouvrir les réglages depuis le pied de page.
- Une page locale, les trois guides et les liens du pied de page.

## 3. Envoyer sur une prévisualisation Vercel

Dans « Contrôle de code source » de VS Code, relisez la liste des modifications. N’ajoutez aucun secret ni fichier `.env.local`.

Vous pouvez utiliser les boutons de VS Code pour indexer les fichiers modifiés, créer un commit puis publier la branche. Ou utiliser le terminal :

```sh
git add src public scripts package.json package-lock.json next.config.js tsconfig.json README.md INTEGRATION.md MODIFICATIONS.md VERIFICATIONS.md .env.example
git commit -m "Refonte ciblée : tarifs centralisés, devis, SEO et consentement"
git push -u origin refonte-ciblee-2026-10
```

Si un fichier de la liste n’existe pas dans votre copie, n’inventez pas de chemin : utilisez la sélection des fichiers dans VS Code. `.env.example` contient uniquement des valeurs vides et des explications.

Vercel crée normalement une **Preview** pour cette branche si le dépôt est connecté et les prévisualisations activées. Ouvrez le lien depuis l’onglet Deployments du projet existant. Testez cette version avant de fusionner.

N’ajoutez pas un nouveau projet Vercel et ne modifiez pas vos DNS : ce n’est pas nécessaire pour cette refonte. Ne touchez pas aux réglages de réception email Infomaniak.

## 4. Mettre en production

Sur GitHub, créez une Pull Request de `refonte-ciblee-2026-10` vers votre branche de production (habituellement `main`). Après validation de la Preview, fusionnez la Pull Request. Si l’intégration Git est active, Vercel reconstruit et publie alors votre site actuel.

Si vous préférez les boutons VS Code, « Synchroniser » envoie les commits de la branche ouverte : vérifiez donc la branche affichée avant de cliquer.

En cas de problème, utilisez le retour à un déploiement précédent dans Vercel pour rétablir rapidement la version précédente, puis annulez le commit de fusion dans GitHub pour garder les sources cohérentes. Ne faites pas de `reset --hard` ni de push forcé.

Référence : https://vercel.com/docs/git

## 5. Modifier les prix plus tard : un seul fichier

Ouvrez **`src/data/tarifs.json`** dans VS Code. Tous les montants sont des nombres en euros, sans symbole € et sans guillemets.

```json
"weekend": {
  "digitale": 259,
  "impression": 329,
  "complete": 399
}
```

Pour passer Impression weekend à 349 €, remplacez uniquement `329` par `349` dans ce bloc. Ne changez pas le même nombre ailleurs. Le bloc `soiree` est indépendant.

- `livraison` : prix de chaque tranche de distance.
- `options` : 100/200 tirages supplémentaires et cadre personnalisé.
- `inclus` : quantités de tirages et rayon de livraison incluse. Pour un changement de structure d’offre, relisez aussi les titres et les textes de conseils ; leur sujet « 200 ou 400 » est éditorial.

Enregistrez, lancez `npm run test` et `npm run build`, puis envoyez le commit. Les cartes, le simulateur, les montants dans les guides, FAQ, métadonnées et schémas se mettront à jour au déploiement. Les moteurs peuvent garder un ancien extrait jusqu’à une nouvelle exploration.

Le build vérifie que les valeurs du catalogue sont numériques et cohérentes. Ne mettez pas de commentaire dans le fichier JSON. Utilisez un point pour des centimes : `329.50`.

## 6. Formulaire : fonctionnement immédiat et option d’envoi direct

### Sans configuration supplémentaire

Le visiteur remplit ses informations. Le site prépare un email avec la formule et les options. Il ouvre sa messagerie ou copie le texte, puis envoie lui-même à `contact@cphotobooth.fr`.

Le site affiche clairement **« pas encore envoyée »**. Il ne prétend pas avoir reçu une demande avant son envoi. Aucune nouvelle boîte email ni compte externe n’est nécessaire dans ce mode.

### Envoi direct facultatif

L’API d’envoi via Resend est implémentée, mais **aucune clé n’est configurée et aucun email de test n’a été envoyé**.

Pour l’activer :

1. Configurez votre propre compte d’envoi Resend et un domaine expéditeur validé. Consultez ses conditions et tarifs.
2. Préférez un sous-domaine d’envoi dédié ; ne remplacez pas les enregistrements MX/SPF/DKIM existants de votre boîte Infomaniak. Toute configuration DNS doit être vérifiée spécifiquement.
3. Dans le projet Vercel existant, ajoutez `RESEND_API_KEY` et `QUOTE_FROM_EMAIL` dans les variables d’environnement. La seconde doit être une adresse expéditrice autorisée par Resend. La destination des devis reste `contact@cphotobooth.fr`.
4. Ajoutez les variables à l’environnement souhaité (Preview pour tester, puis Production) et redéployez.
5. Envoyez vous-même une demande de test depuis la Preview. Vérifiez la réception, le dossier spam et la réponse à l’adresse du visiteur.

La clé doit rester côté serveur. N’utilisez pas de nom `NEXT_PUBLIC_*` et ne la placez pas dans `tarifs.json` ou dans GitHub.

En cas d’échec, le formulaire conserve le texte et propose l’envoi manuel. La protection comprend validation, contrôle d’origine, champ piège, idempotence de l’envoi et limitation opportuniste par instance. Cette dernière n’est pas globale entre les fonctions Vercel : complétez la protection dans le pare-feu Vercel selon votre trafic avant de promouvoir l’envoi direct à grande échelle.

Documentation : https://resend.com/docs/api-reference/emails/send-email

## 7. Analytics

L’identifiant GA4 existant est conservé. Analytics est chargé après accord, jamais au premier affichage avant choix. Les visiteurs peuvent retirer leur accord depuis le pied de page. Aucune coordonnée ou texte de devis n’est envoyé dans les événements ajoutés.

Événements : `quote_form_start`, `quote_draft_created`, `quote_email_open`, `pricing_quote_click`, `click_tel`, `click_mail`, clics des boutons de navigation. `generate_lead` est émis uniquement après acceptation par le service d’envoi direct, pas lors de la préparation d’un email.

Une acceptation par le prestataire d’envoi ne garantit pas la délivrabilité finale en boîte de réception. Le mode manuel ne permet pas de compter des emails effectivement envoyés. Ne considérez pas `quote_draft_created` comme une réservation.

La collecte soumise à consentement peut réduire les visites mesurées par rapport à l’ancien chargement systématique. Ce changement de mesure n’est pas forcément une baisse réelle du trafic.

## 8. Informations métier restant à confirmer

Cette livraison n’invente pas de nouveaux avis, partenaires, événements réalisés ni prestations. Elle conserve le témoignage et les photos fournis.

À valider avec vos documents : identité/adresse du siège et identifiant à neuf chiffres (affiché comme SIREN, pas SIRET), point réel de retrait à Tours, organisation livraison/installation/récupération, horaires, politique de conservation, conditions de paiement et d’annulation. Les engagements incertains (clé USB, formule Premium inexistante, durées de conservation des photos, interventions régulières dans des lieux non documentés) ont été remplacés par une confirmation lors de la réservation.

La politique de confidentialité a été alignée sur le fonctionnement livré, mais elle ne remplace pas la validation de vos pratiques internes et contrats de sous-traitance.

Les pages locales conservent leurs URL pour éviter des suppressions sans données Search Console. Elles ont été recentrées sur la logistique ; ajoutez ensuite des exemples réels pour les différencier davantage. Les trois nouveaux guides sont reliés depuis l’accueil et le pied de page et présents dans le sitemap. Aucun classement Google ou citation IA n’est garanti.
