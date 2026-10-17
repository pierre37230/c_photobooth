# Mesurer les résultats à 30, 60 et 90 jours

**Mesure avant/après :** comparer des périodes de même longueur et idéalement comparables en calendrier. Le trafic événementiel est saisonnier. Conserver la référence GSC/GA4 du 19/07 au 16/10/2026 et mesurer des fenêtres glissantes de 28 jours après le déploiement.

## J+30 — Validité et mesure
- Confirmer en Search Console que le sitemap est lu, et examiner **Indexation > Pages**. Lister les raisons d'exclusion, URL par URL ; ne pas supposer qu'une URL de sitemap est indexée.
- Sur les requêtes `location photobooth tours`, `photobooth mariage tours`, `location photobooth amboise`, `photobooth blois` : suivre impressions, clics, CTR et position moyenne ; comparer avec le point de départ, sans chercher une tendance fiable sur 1–2 clics.
- Dans GA4 DebugView, vérifier l'envoi de `generate_lead` **uniquement après succès réel** et en faire un événement clé. Vérifier également le consentement et l'absence de données personnelles dans les événements.
- Mesurer les demandes effectives reçues dans la boîte mail ; conserver un décompte indépendant pour vérifier la qualité de la mesure GA4.
- Tester Core Web Vitals mobile (LCP, INP, CLS), performance du formulaire et conformité des métadonnées.

## J+60 — Compréhension des intentions
- Comparer performances des pages `/photobooth-tours`, `/photobooth-mariage-tours`, `/photobooth-amboise`, `/tarifs`, `/locations-evenementielles`, `/conseils/*` ; contrôler CTR et évolution des requêtes locales.
- Relever les demandes de devis envoyées, devis qualifiés et réservations conclues (données commerciales, hors GA4 si non connectées).
- Tester CTA depuis l'accueil, les fiches produit et les guides. Réécrire les passages insuffisamment utiles en fonction des questions réelles des prospects.
- Contrôler l'intégrité des avis Google si un widget autorisé a été ajouté : synchronisation, quota et affichage sur mobile.

## J+90 — Ajuster les investissements
- Comparer conversion visite → demande → réservation par canal (Organic Search, Direct, AI Assistant, autres). Noter l'incertitude si les effectifs sont faibles.
- Identifier les pages locales avec trafic confirmé et contenu distinctif. Consolider ou `noindex` uniquement les pages peu utiles **après** examen des clics/impressions/URLs et des redirections possibles.
- Réévaluer contenus mariage, entreprises et produits complémentaires ; publier de nouveaux contenus uniquement en présence de questions non traitées.
- Examiner les variations saisonnières, locales, la vitesse mobile et l'effet des avis plutôt que de promettre une hausse chiffrée artificielle.

**Tableau de bord minimal :** Date | URL | Requête | Impressions | Clics | CTR | Position | Sessions organiques | Sessions IA | Devis GA4 | Devis reçus | Réservations | Chiffre d'affaires attribuable (si connu).
