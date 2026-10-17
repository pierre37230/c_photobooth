# Activation de l’envoi des devis (Resend + Vercel)

1. Vérifier que **cphotobooth.fr** est marqué Verified sur Resend.
2. Projet **cphotobooth** > Settings > Environment Variables sur Vercel :
   - `RESEND_API_KEY` = clé privée Resend (déjà configurée).
   - `QUOTE_FROM_EMAIL` = `CPhotobooth <devis@cphotobooth.fr>` (valeur sans guillemets).
   - Les deux variables doivent concerner les mêmes environnements (Production ; Preview si utilisé).
3. Les demandes sont adressées à `contact@cphotobooth.fr` (dans `src/data/siteData.ts`). L’adresse de départ `devis@cphotobooth.fr` n’a pas besoin d’une boîte aux lettres pour expédier, mais les réponses seront dirigées vers l’adresse de contact.
4. Redéployer la version contenant cette intégration : `git add .`, `git commit -m "Envoi direct Resend pour les devis"`, `git push`. Les variables ne sont appliquées qu’aux nouveaux déploiements.
5. Avant déploiement : `npm run check`, `npm test`, `npm run build`. Vérifier aussi visuellement les pages `contact` et `conseils`.
6. Effectuer **un test réel** avec votre propre adresse, sur un déploiement de prévisualisation si possible ; contrôler les emails reçus et les journaux Resend. Une compilation réussie ne prouve pas que les courriels sont livrés.

La demande est envoyée au professionnel en premier, puis un accusé au client est tenté. Si l’accusé échoue, le site confirme simplement la transmission du devis. La protection anti-spam intégrée reste élémentaire : pour la production, envisager un contrôle anti-bot et une limite partagée (la mémoire par instance n’est pas une protection distribuée).

**Ne jamais** mettre la clé API dans Git, un champ `NEXT_PUBLIC_` ni l’envoyer par message.
