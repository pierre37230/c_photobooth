# Audit SEO, référencement local, IA et conversion — C Photobooth
**Date :** 17 octobre 2026 • **Base de code :** archive `CPhotobooth-V20-a-tester.zip` • **Publication :** aucune.  
**Période des données GSC / GA4 :** 19 juillet – 16 octobre 2026 inclus.

## Synthèse exécutive
**Priorité 1 — Mesurer les devis réels.** Le connecteur GA4 renvoie **0 événement clé** et seulement 6 types d'événements (`page_view`, `first_visit`, `session_start`, `user_engagement`, `scroll`, `click_cta_header`). Le code émet un événement `generate_lead` après confirmation serveur de Resend, mais la mesure n'est pas démontrée dans les données historiques : nouveau code, consentement obligatoire, possible absence d'événement marqué comme clé. À vérifier en temps réel après le déploiement avec consentement, puis marquer `generate_lead` comme événement clé dans GA4. Le nombre de vrais devis n'est **pas** 0 par déduction de ce rapport.

**Priorité 1 — Cibler la requête de Tours.** Search Console : `location photobooth tours` = **129 impressions / 2 clics / position moyenne 36,54**. Page `/photobooth-tours` = **524 impressions / 4 clics / CTR 0,76 % / position moyenne 32,43**. La page existe et a des métadonnées pertinentes, mais se concentre surtout sur la livraison, alors que la requête est d'abord commerciale. Il est recommandé d'ajouter une présentation visuelle du produit, des formules et des preuves clients sur cette URL, sans cannibaliser l'accueil ni créer dix pages de même intention.

**Priorité 1 — Refondre prudemment les pages locales.** Les pages `/photobooth/[city]` sont presque identiques sauf la ville et la distance. Sur GSC, Amboise a **6 clics et 79 impressions**, Joué-lès-Tours **1 clic et 87 impressions**, Saint-Avertin **0 clic et 22 impressions**, Sainte-Maure-de-Touraine **2 clics et 15 impressions**. Leur suppression sans analyse serait dangereuse. Les pages Amboise, Blois, Joué-lès-Tours, Saint-Avertin et Montrichard ont été enrichies de conseils locaux prudents. Une rationalisation future doit reposer sur les résultats par URL, pas sur un seuil arbitraire.

**Priorité 2 — Consolidation www / sans www.** Search Console signale `https://cphotobooth.fr/` avec **405 impressions / 9 clics** et `https://www.cphotobooth.fr/` avec **327 impressions / 5 clics**. Il s'agit de données historiques et non d'une preuve que deux versions de l'accueil restent indexables aujourd'hui. L'archive applique une redirection non-www vers www dans Next et une canonical www. Vérifier la réponse HTTP réelle pour HTTP, HTTPS, www et sans www, et l'unicité de la canonical sur la page déployée.

**Priorité 2 — SEO / information commerciale.** L'archive V20 présente des informations sur le photobooth, les prestations complémentaires, les tarifs centralisés et des contenus conseils. Plusieurs contenus restaient génériques ou insuffisamment orientés vers l'organisation concrète d'un événement. Les guides ont été prolongés par des scénarios « mariage » et « soirée / entreprise » et des liens contextuels vers les offres.

**Priorité 2 — Livres d'or / enceintes / devis.** La V20 proposait des locations complémentaires mais le formulaire ne permettait pas de sélectionner plusieurs produits. Ajout de cases multiples : livre d'or audio, 1 PartyBox 320 ou pack 2 (choix exclusifs entre eux), micros. La liste choisie est incluse dans les précisions transmises à l'API existante. Tarifs en `src/data/locations.json`, **inchangés** : 49 / 59 / 99 / 25 €. Les illustrations de la V20 ont été remplacées par les trois visuels déjà présents dans l'archive V21 de ce même projet. Vérifier les droits de réutilisation des images commerciales.

## Données vérifiées (90 jours)

### Google Search Console : requêtes
| Requête | Impressions | Clics | CTR | Position moyenne |
|---|---:|---:|---:|---:|
| location photobooth tours | 129 | 2 | 1,55 % | 36,54 |
| photobooth | 37 | 1 | 2,70 % | 39,46 |
| location photobooth | 21 | 1 | 4,76 % | 8,86 |
| location photobooth indre | 18 | 1 | 5,56 % | 19,94 |
| location borne photo tours | 10 | 0 | 0 % | 64 |

Les positions moyennes ne sont pas des positions fixes. Les requêtes de faible volume ont de fortes variations. Les exports ne représentent pas forcément 100 % des requêtes, Google filtrant notamment certaines données.

### Google Search Console : pages
| URL | Impressions | Clics | CTR | Position moyenne |
|---|---:|---:|---:|---:|
| https://cphotobooth.fr/ | 405 | 9 | 2,22 % | 7,12 |
| https://www.cphotobooth.fr/ | 327 | 5 | 1,53 % | 23,76 |
| /photobooth-tours | 524 | 4 | 0,76 % | 32,43 |
| /photobooth-mariage-tours | 265 | 1 | 0,38 % | 47,72 |
| /photobooth-joue-les-tours | 87 | 1 | 1,15 % | 15,00 |
| /photobooth-amboise | 79 | 6 | 7,59 % | 25,54 |
| /photobooth-entreprise-tours | 68 | 0 | 0 % | 53,59 |
| /tarifs | 64 | 0 | 0 % | 48,36 |

### Google Analytics 4 : acquisition et événements
| Canal | Sessions | Utilisateurs actifs | Événements clés |
|---|---:|---:|---:|
| Direct | 91 | 67 | 0 |
| Organic Search | 45 | 38 | 0 |
| AI Assistant | 12 | 11 | 0 |
| Organic Social | 4 | 4 | 0 |
| Referral | 1 | 1 | 0 |
| Unassigned | 3 | 3 | 0 |

**Total des lignes par canal : 156 sessions**. Événements : `page_view` 268, `session_start` 153, `first_visit` 121, `user_engagement` 59, `scroll` 40 et `click_cta_header` 3. Les totaux de sessions et `session_start` peuvent diverger selon traitement et définitions ; cela ne démontre pas à lui seul un dysfonctionnement.

Pages d'entrée : `/` 94 sessions, `/tarifs` 14, `/photobooth-tours` 10, `/photobooth-amboise` 8, `/contact` 4, plus paramètres et autres pages. Les sessions depuis les assistants IA sont **une donnée d'attribution GA4**, pas une preuve que ChatGPT émet systématiquement des recommandations.

### Indexation : limite importante
Les connexions exploitées donnent les performances de recherche, **pas un export détaillé de l'indexation page par page** (raisons « explorée actuellement non indexée », « découverte », « dupliquée », etc.). Le sitemap n'est pas une preuve d'indexation ; vérifier *Indexation > Pages* et *Inspection d'URL* dans Search Console. Aucune quantité de pages indexées n'a été inventée.

## Audit des fichiers et contrôles techniques

- **Next.js 16 / React 19** : App Router, pages dynamiques via `params: Promise<...>`, métadonnées dynamiques, routes et redirections. `npm run build` doit être effectué sur l'ordinateur du propriétaire.
- **Robots** : route `src/app/robots.ts` avec `allow /`, exclusion `/api/` et `/admin/` et référence du sitemap. La consultation du `robots.txt` public via le service de navigation n'a pas abouti (erreur technique du récupérateur) : **à vérifier avec `curl`/navigateur**.
- **Sitemap** : `src/app/sitemap.ts` génère les pages commerciales, conseils et villes ; la nouvelle page de ville supprimée des données n'est plus proposée. Les redirections et la route `/prix-photobooth-tours` ne doivent pas être des cibles d'indexation. Une consultation directe du sitemap public a également échoué dans le récupérateur ; vérifier les statuts HTTP réels.
- **Canonical** : les pages principales utilisent des canoniques absolues www. Les pages villes publient la canonical de l'URL courte `/photobooth-<ville>` ; les URL internes `/photobooth/<ville>` redirigent vers la version courte. Vérifier l'unicité des canoniques dans le DOM publié.
- **Titres / descriptions / H1** : métadonnées dédiées sur les principaux parcours inspectés, H1 visibles ; titres des pages villes composés avec la ville. Revoir après publication les snippets effectivement générés par Google ; un titre renseigné ne garantit pas son affichage dans la SERP.
- **Schema.org** : `LocalBusiness`/`ProfessionalService`, `Service`, `FAQPage` et `OfferCatalog` dans le code. Les données de contact/zone doivent toujours correspondre au réel. **Aucun `aggregateRating` inventé.** Tester les URL publiées avec Rich Results Test et Schema Markup Validator ; une donnée structurée valide ne garantit pas un extrait enrichi.
- **Tarifs** : `src/data/tarifs.json` (photobooth) et `src/data/locations.json` (prestations supplémentaires) restent les sources centrales. Aucun prix changé dans cet audit. Le devis commercial définitif est confirmé avant réservation.
- **Images** : les JPG originaux de galerie peuvent atteindre ~1,6 Mo chacun, tandis que les versions WebP utilisées sont souvent ~110–150 Ko. Les visuels complémentaires ont été remplacés par des fichiers dédiés. Vérifier Web Vitals réels sur mobile après publication.
- **Analytics / confidentialité** : chargement GA4 conditionné par un choix explicite ; `generate_lead` existe côté client après réponse positive de l'API Resend. Vérifier le consentement, les événements en mode DebugView, et la déclaration de collecte de données dans la politique de confidentialité. Ne pas transmettre noms, emails ou téléphones à GA4.
- **API de devis** : contrôle de champs et de domaine, honeypot, quota mémoire opportuniste et Resend ; l'expéditeur et la clé viennent de variables Vercel. Ce quota n'est pas partagé entre toutes les instances serverless et ne doit pas être décrit comme une protection anti-spam exhaustive. Faire un test de demande réelle. Les contenus saisis dans les emails méritent une revue de sécurité complémentaire avant de fortes campagnes d'acquisition.
- **Liens internes** : vérification statique des `href="/..."` directs, aucun chemin manquant parmi 14 chemins distincts inspectés. Un crawl de rendu JS et de tous les liens dynamiques reste à effectuer, cette vérification n'étant pas exhaustive.
- **V20 vs public** : la consultation de l'accueil public présente des offres Digitale 259 €, Impression 329 €, Complète 399 €, les pages tarifs/galerie/conseils/devis. Des résultats Google indexés plus anciens affichent des montants 279/329/399 : **ne pas supposer que le résultat ancien reflète le site actuel**. La V20 embarque aussi les prestations complémentaires et le nouveau ciblage Blois, à tester avant publication.

## SEO local et référencement via les IA
Éviter les pages de ville génériques copiées, le bourrage de mots-clés et les fausses promesses (« meilleur », « premier » ou « recommandé par l'IA »). Publier des réponses concrètes : prix, options, livraison selon adresse, photos réelles, conditions de location, disponibilité et coordonnées vérifiables. Vérifier la cohérence Google Business Profile / site, les avis authentiques et les coordonnées de contact. Les robots des services IA peuvent accéder aux contenus publics selon leurs propres règles ; **aucune optimisation ne garantit une recommandation IA**.

## Avis Google : limite actuelle
Le lien vers la fiche Google est prévu sans usurper une note. **Aucun widget SociableKIT n'est opérationnel sans l'identifiant/code public du widget fourni après sa création**. N'ajouter ni faux avis, ni note figée. Vérifier le coût réel / quota / branding au moment de l'intégration, le consentement et le comportement à expiration des vues gratuites.

## Vérifications de publication restant obligatoires
1. `npm ci`, `npm run check`, `npm test`, `npm run build` dans le dépôt de travail sur Windows (tests de compilation non réalisés dans cet environnement faute d'une dépendance npm en cache).
2. Tester **sur un déploiement Vercel Preview** : formulaire de devis avec un ou plusieurs équipements, réception email et accusé client ; vérifier options, disponibilité et prix sur les pages.
3. Tester mobile + desktop, liens, menu, cookies, pas de décalage excessif ; évaluer Lighthouse mobile et métriques réelles dans PageSpeed Insights.
4. Vérifier `robots.txt`, `sitemap.xml`, canonical, redirections `www`, `prix-photobooth-tours` et anciennes villes, et résultats du Rich Results Test.
5. Recontrôler Search Console (Indexation + pages) et GA4 (DebugView, événement `generate_lead` marqué comme clé) après mise en ligne.

**Statut : archive prête à tester, pas certifiée prête à publier sans tests d'exécution.**
