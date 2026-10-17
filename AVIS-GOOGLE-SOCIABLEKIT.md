# Widget des avis Google – SociableKIT

Widget public intégré sur la page d'accueil dans `src/components/Testimonials.tsx`.

- Identifiant du widget : `25722904`
- Source du script : `https://widgets.sociablekit.com/google-reviews/widget.js`
- Chargement côté navigateur, après hydratation Next.js avec `next/script`.
- Un lien vers les avis Google reste accessible lorsque le widget ne charge pas (bloqueur, quota, indisponibilité du prestataire).
- La note et le nombre d'avis ne sont pas codés en dur. Leur affichage dépend de la configuration réelle de SociableKIT.
- Ne pas ajouter de fausses évaluations ni de balisage `AggregateRating` à partir d'avis dont le droit d'usage n'est pas vérifié.

## Test avant publication

1. `npm run check`, `npm test`, puis `npm run build`.
2. Ouvrir `http://localhost:3000`, défiler jusqu'à « Les avis de nos clients sur Google ».
3. Vérifier le contenu, le responsive, la note et l'identité de C Photobooth dans le widget.
4. Vérifier l'affichage sur téléphone sans bloqueur de publicité ; contrôler le quota gratuit dans le tableau de bord SociableKIT.
5. Ne pas publier si les avis affichés correspondent à un autre établissement.
