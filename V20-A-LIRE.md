# CPhotobooth — version V20 à tester avant production

## Modifications
- Ajustement de la largeur de mise en page sur grand écran.
- Trois guides existants enrichis en informations pratiques, chiffres explicatifs et rappels des limites des offres.
- Section de locations complémentaires et page `/locations-evenementielles`. Les tarifs sont **provisoires** et modifiables dans `src/data/locations.json`.
- Visuel d’ambiance généré (pas une photo contractuelle, ne pas le présenter comme le matériel réellement fourni).
- Secteurs Blois, Montrichard et Saint-Georges-sur-Cher ajoutés au maillage local, sans inventer de distance ni de forfait de livraison.
- Liens vers les avis Google ; aucune note ou commentaire n'a été inventé. Le lien fourni doit être testé dans le navigateur.

## Points indispensables avant mise en ligne
1. `npm install`, `npm run check`, `npm test`, `npm run build`.
2. Vérifier les formules, les délais et surtout les frais de retrait/livraison : l'ancien code continue d’utiliser des distances **depuis Tours** sur les pages historiques, ce qui devra être revu si le point réel de départ est désormais Saint-Georges-sur-Cher.
3. Confirmer les modèles et tarifs : micros photographiés JBL tandis que la demande mentionne EasySing. La V20 affiche simplement « pack 2 micros sans fil ».
4. Tester toutes les pages sur desktop et mobile.
5. Ne pas ajouter `RESEND_API_KEY` ou `.env.local` à Git.
6. Vérifier le lien vers la fiche Google et choisir plus tard une intégration autorisée Google Places avec mentions d’attribution : le lien court n’était pas consultable automatiquement.
7. Les tarifs provisoires sont explicitement signalés et doivent être confirmés avant publicité.
8. Search Console : soumettre `https://www.cphotobooth.fr/sitemap.xml`, inspecter les nouvelles pages, suivre l'indexation et la performance.

## Installation
Copier cette archive dans le projet Git **sans effacer `.git` ni les secrets locaux** ; contrôler `git status`, puis tester localement avant de committer. La V20 n'est pas une validation de la fonctionnalité mail sur un serveur réel.
