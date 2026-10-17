# Mettre en ligne sans prendre de risque

## 1. Sauvegarder et intégrer
1. Sauvegarder le projet local actuellement fonctionnel et sa branche Git ; la source de cette archive est la **V20**, et non automatiquement l'état courant de ton dépôt Git.
2. Dans VS Code, ouvrir le dossier qui contient déjà `.git`. **Ne pas supprimer ce dossier**. Faire une copie ou une branche avant de remplacer les fichiers.
3. Copier le contenu de cette archive dans le projet (écraser les fichiers de même nom), en conservant tes `.env.local`, `.git`, configurations privées et clés API ; ne jamais les ajouter au ZIP ou à Git.
4. Consulter `MODIFICATIONS-AUDIT.md` et inspecter les écarts par `git diff --stat` / `git diff`.

## 2. Tester
Dans PowerShell, au niveau du `package.json` :
```
npm ci
npm run check
npm test
npm run build
npm run dev
```
Vérifier `/`, `/tarifs`, `/contact`, `/conseils`, chaque guide, `/photobooth-tours`, `/photobooth-amboise`, `/photobooth-blois`, `/locations-evenementielles`, `/robots.txt`, `/sitemap.xml`.
Tester réellement le devis avec livre d'or + pack 2 enceintes + micros. Vérifier l'email reçu chez C Photobooth et l'accusé client. Les clés `RESEND_API_KEY` et `QUOTE_FROM_EMAIL` sont des variables côté serveur déjà mises sur Vercel, pas dans Git.

## 3. Publier prudemment
Sur une branche de test : `git switch -c audit-seo-v20`, puis `git add .`, `git commit -m "Audit SEO et amélioration conversion"`, `git push -u origin audit-seo-v20`.
Vercel doit créer une **Preview** si les intégrations Git sont actives. Vérifier ses journaux, routes et formulaires. Attention, la preview n'a la clé Resend que si les variables sont configurées pour Preview, et les tests doivent éviter tout envoi intempestif.
Après validation, fusionner dans `main` via GitHub ou la procédure habituelle ; le push main déclenche le déploiement de production. Vérifier le statut `Ready`.

## 4. Après publication
- Inspection URL dans Search Console pour les pages prioritaires modifiées ; (re)soumettre le sitemap si nécessaire.
- Tester `https://www.cphotobooth.fr` puis 301 depuis `https://cphotobooth.fr`, et les anciennes URL redirigées.
- Vérifier GA4 `generate_lead` dans DebugView puis marquer comme événement clé. Contrôler l'arrivée des vrais mails de devis.
- Examiner `SUIVI-30-60-90-JOURS.md`.

**Ne jamais utiliser `git push --force` pour cette opération.**
