# Journal des modifications — audit SEO / GEO

Tous les chemins ci-dessous sont relatifs au dossier du site. Les prix du photobooth et des autres locations n'ont pas été changés.

| Fichier | Action | Motif |
|---|---|---|
| `src/components/QuoteForm.tsx` | Modifié | Sélection multiple des nouvelles locations ; exclusivité entre 1 ou 2 PartyBox ; les équipements sont transmis dans le champ de précisions de l'API existante. |
| `src/app/globals.css` | Modifié | Cases à cocher lisibles sur mobile/desktop. |
| `src/data/seo/cities.json` | Modifié | Retrait de la page locale demandée ; maintien de Blois, Tours et Amboise. |
| `next.config.js` | Modifié | Redirection permanente depuis l'ancienne page retirée pour éviter une 404. |
| `src/app/contact/page.tsx` | Modifié | Zone d'intervention commerciale sans mention géographique retirée. |
| `src/app/locations-evenementielles/page.tsx` | Modifié | Présentation plus directe des prix et des conditions. |
| `src/components/LocationsPreview.tsx` | Modifié | Images produit dédiées et libellés moins ambigus sur l'accueil. |
| `src/data/locations.json` | Modifié | Images dédiées ; conservation exacte de tous les prix. |
| `src/app/conseils/[slug]/page.tsx` | Modifié | Cas d'usage supplémentaires, liens de conversion, retrait des anciennes mentions commerciales. |
| `src/app/photobooth/[city]/page.tsx` | Modifié | Enrichissement prudent de 5 pages locales, sans inventer de références clients ou de lieux partenaires. |
| `src/lib/seo-utils.ts` | Modifié | Zone commerciale cohérente avec la communication retenue. |
| `src/components/Testimonials.tsx` | Modifié | Accès honnête aux avis Google, sans note simulée. |
| `public/images/{livre-or-audio,jbl-partybox-320,micros-sans-fil}.webp` | Ajoutés | Visuels réutilisés depuis l'archive V21 de ce projet, à remplacer par des photos dont les droits sont confirmés. |
| `AUDIT-SEO-GEO-2026-10-17.md` | Créé | Rapport chiffré et limites des vérifications. |
| `SUIVI-30-60-90-JOURS.md` | Créé | Protocole de suivi et indicateurs. |
| `DEPLOIEMENT.md` | Créé | Mode d'emploi VS Code → GitHub → Vercel. |

L'archive repose explicitement sur **la V20 demandée**, avec intégration ponctuelle des trois images déjà préparées en V21. Si des changements ont été faits ultérieurement dans le dépôt Git local, comparer les différences avant de remplacer les fichiers.
