export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'technical' | 'logistics' | 'wedding' | 'business';
}

export const globalFAQs: FAQItem[] = [
  {
    question: 'Combien coûte la location d\'un photobooth à Tours ?',
    answer: 'Nos tarifs pour la location de photobooth à Tours sont transparents et affichés publiquement. Pour un weekend 48h, comptez 229€ pour la formule Digitale (photos illimitées en ligne), 289€ pour la formule Impression (avec 200 tirages papier), ou 339€ pour la formule Complète (400 impressions + template personnalisé + livraison gratuite jusqu\'à 20km). Pour un événement en semaine, nos formules soirée démarrent à 124€. Tous nos tarifs incluent le matériel premium, l\'assistance 7j/7, et la récupération garantie de toutes vos photos.',
    category: 'pricing'
  },
  {
    question: 'Quelle est la différence entre vos formules Digitale, Impression et Complète ?',
    answer: 'La Formule Digitale (229€) offre l\'essentiel : photobooth en bois artisanal, photos illimitées disponibles en ligne après l\'événement, et assistance complète. La Formule Impression (289€) ajoute 200 impressions papier instantanées et une imprimante professionnelle. La Formule Complète (339€) inclut 400 impressions, un template photo entièrement personnalisé à votre événement, et la livraison gratuite jusqu\'à 20km de Tours. Chaque formule monte en gamme tout en conservant la qualité du matériel et du service.',
    category: 'pricing'
  },
  {
    question: 'Livrez-vous dans toute l\'Indre-et-Loire ?',
    answer: 'Oui, nous livrons votre photobooth dans tout le département de l\'Indre-et-Loire (37). Tours et son agglomération bénéficient d\'une livraison très rapide. La livraison est gratuite jusqu\'à 20km de Tours avec notre formule Complète. Au-delà, les frais sont de 39€ (jusqu\'à 20km avec autres formules), 45€ (20-40km), ou 60€ (40-60km). Le retrait express à Tours reste gratuit quelle que soit votre commune. Nous intervenons régulièrement à Amboise, Chinon, Vouvray, Azay-le-Rideau, et dans tous les coins du 37.',
    category: 'logistics'
  },
  {
    question: 'L\'installation du photobooth est-elle compliquée ?',
    answer: 'Non, l\'installation est ultra-simple et prend seulement 2 minutes ! Vous posez la borne sur une surface plane, vous la branchez sur une prise électrique standard, et c\'est terminé. Aucune compétence technique requise, aucun montage complexe. Nous fournissons un guide papier illustré étape par étape et des vidéos explicatives accessibles par QR code depuis votre smartphone. Votre témoin, un membre de votre famille, ou n\'importe quel invité débrouillard peut s\'en charger sans difficulté.',
    category: 'technical'
  },
  {
    question: 'De combien d\'espace ai-je besoin pour installer le photobooth ?',
    answer: 'Pour une installation optimale, nous recommandons un espace de 3 mètres de large sur 2,5 mètres de profondeur. Cet espace permet à vos invités de se positionner confortablement devant la borne et de prendre des photos de groupe sans être serrés. Le photobooth en lui-même mesure environ 50cm de large et nécessite simplement une surface plane et stable. Si votre espace est plus restreint, contactez-nous pour étudier les possibilités d\'adaptation.',
    category: 'technical'
  },
  {
    question: 'Le photobooth nécessite-t-il une alimentation électrique ?',
    answer: 'Oui, notre photobooth nécessite une prise électrique standard 220V pour fonctionner. Nous fournissons une rallonge électrique de 10 mètres qui permet une installation flexible dans votre salle. Le photobooth consomme très peu d\'électricité et peut rester branché toute la journée sans problème. Assurez-vous simplement qu\'une prise soit accessible à proximité de l\'emplacement souhaité.',
    category: 'technical'
  },
  {
    question: 'Combien de photos peut-on prendre avec votre photobooth ?',
    answer: 'Avec toutes nos formules, les photos sont illimitées pendant toute la durée de votre location. Vos invités peuvent se faire photographier autant de fois qu\'ils le souhaitent, sans aucune restriction. En moyenne, lors d\'un mariage de 100 invités, entre 300 et 600 photos sont prises. Chaque session photo dure environ 30 secondes, permettant un flux continu. Toutes les photos sont ensuite disponibles via un lien de téléchargement sécurisé.',
    category: 'general'
  },
  {
    question: 'Comment récupère-t-on les photos après l\'événement ?',
    answer: 'Après votre événement, vous recevez toutes les photos par deux moyens : un lien de téléchargement sécurisé envoyé par email dans les 48h suivant l\'événement, vous permettant de télécharger l\'intégralité des photos en haute qualité. Vous pouvez ensuite partager ce lien avec vos invités. Les photos restent disponibles en ligne pendant 6 mois minimum. Nous conservons également une sauvegarde de secours pendant 1 an.',
    category: 'general'
  },
  {
    question: 'Peut-on personnaliser les photos avec nos prénoms et date ?',
    answer: 'Oui ! Nous proposons un service de personnalisation complet des impressions photo. Vous pouvez ajouter vos prénoms, la date de votre événement, un message personnalisé, votre logo ou un motif de votre choix sur le template des photos. Cette personnalisation est incluse dans notre formule Complète, ou disponible en option à 10€ pour les autres formules. Nous créons un design unique adapté à votre événement et le validons avec vous avant le jour J.',
    category: 'general'
  },
  {
    question: 'Que se passe-t-il en cas de problème technique pendant l\'événement ?',
    answer: 'Votre tranquillité d\'esprit est notre priorité. En cas de problème technique, nous assurons une assistance téléphonique immédiate 7 jours sur 7. Notre équipe peut vous guider à distance pour résoudre la plupart des situations rapidement. Tous nos photobooths sont testés et vérifiés avant chaque location. Nous disposons également d\'un stock de matériel de remplacement et faisons notre maximum pour garantir le bon déroulement de votre événement.',
    category: 'technical'
  },
  {
    question: 'Le photobooth fonctionne-t-il en extérieur ?',
    answer: 'L\'installation en extérieur est possible sous certaines conditions strictes. Le photobooth doit être impérativement protégé des intempéries (pluie, vent fort, soleil direct intense) et nécessite une surface plane et stable. Nous recommandons fortement l\'installation sous un barnum, une tente, une pergola ou un auvent. Une prise électrique accessible est indispensable. Pour les événements en extérieur, prévoyez toujours un plan B en intérieur en cas de conditions météo défavorables.',
    category: 'technical'
  },
  {
    question: 'Fournissez-vous des accessoires pour le photobooth ?',
    answer: 'Oui, nous fournissons un kit d\'accessoires de base avec chaque location : chapeaux, lunettes fantaisie, moustaches, panneaux avec messages amusants, etc. Ces accessoires ajoutent une touche ludique et créative aux photos de vos invités. Si vous souhaitez des accessoires personnalisés ou thématiques (champêtre, bohème, vintage, années 80...), nous pouvons vous conseiller des fournisseurs ou vous proposer des options sur mesure.',
    category: 'general'
  },
  {
    question: 'Quel est le délai de réservation recommandé ?',
    answer: 'Pour un mariage ou événement majeur à Tours, nous recommandons de réserver au minimum 6 à 8 semaines à l\'avance, surtout pour les weekends de mai à septembre qui sont très demandés. Cette anticipation vous garantit la disponibilité et vous permet de bénéficier de notre accompagnement personnalisé. Pour les événements d\'entreprise en semaine, 3 à 4 semaines suffisent généralement. En cas de besoin urgent, contactez-nous même à la dernière minute.',
    category: 'logistics'
  },
  {
    question: 'Le photobooth remplace-t-il le photographe de mariage ?',
    answer: 'Non, le photobooth ne remplace pas votre photographe professionnel mais le complète parfaitement. Votre photographe capture les moments officiels, les émotions et l\'ambiance générale de votre mariage avec un œil artistique. Le photobooth, lui, offre une animation ludique qui permet à vos invités de créer leurs propres souvenirs spontanés et amusants. Les deux prestations sont complémentaires : le photographe documente votre histoire, le photobooth crée l\'interaction et l\'amusement.',
    category: 'wedding'
  },
  {
    question: 'Quelle est la différence entre votre photobooth et les modèles bas de gamme ?',
    answer: 'Notre photobooth se distingue sur plusieurs points essentiels : fabrication artisanale française en bois massif véritable (pas de plastique importé), véritable appareil photo professionnel intégré (pas une webcam), qualité d\'image exceptionnelle digne d\'un studio photo, structure robuste conçue pour durer des années, assistance téléphonique 7j/7 pendant votre location, et récupération garantie de toutes vos photos. Les photobooths bas de gamme utilisent du matériel importé de qualité moyenne, des webcams avec rendu médiocre, et offrent souvent un service minimal.',
    category: 'general'
  },
  {
    question: 'Peut-on ajouter des impressions supplémentaires si on en manque ?',
    answer: 'Oui, nous proposons des packs d\'impressions supplémentaires : 100 impressions pour 39€ ou 200 impressions pour 60€. Ces packs sont disponibles uniquement avec les formules Impression et Complète (qui incluent l\'imprimante). Vous pouvez commander ces packs lors de votre réservation initiale si vous anticipez un grand nombre d\'invités, ou nous contacter pendant votre location si vous constatez que vous allez manquer d\'impressions.',
    category: 'pricing'
  },
  {
    question: 'Y a-t-il une caution à verser ?',
    answer: 'Non, nous ne demandons pas de caution. La confiance est réciproque. Nous attendons simplement que vous preniez soin du matériel comme si c\'était le vôtre. En cas de casse ou de dégradation volontaire (heureusement rarissime), nous facturerons les réparations au coût réel. Mais dans l\'immense majorité des cas, tout se passe parfaitement bien.',
    category: 'general'
  },
  {
    question: 'Combien de temps faut-il pour installer et retirer le photobooth ?',
    answer: 'L\'installation prend seulement 2 minutes : vous posez la borne, vous la branchez, c\'est prêt. Le retrait est encore plus rapide : vous débranchez, vous rangez les accessoires dans le sac fourni, terminé. Cette simplicité est un de nos grands atouts : vous n\'avez pas besoin de mobiliser quelqu\'un pendant 30 minutes pour un montage compliqué. Deux minutes avant le début de votre événement, c\'est opérationnel.',
    category: 'technical'
  },
  {
    question: 'Acceptez-vous les paiements par carte bancaire ?',
    answer: 'Actuellement, nous acceptons les paiements par virement bancaire (à privilégier) ou en espèces lors d\'un rendez-vous à Tours. Le paiement par carte bancaire n\'est pas disponible pour le moment. Lors de la réservation, nous demandons un acompte de 30% par virement, puis le solde avant le retrait ou la livraison. Pour les entreprises, facturation professionnelle systématique.',
    category: 'pricing'
  },
  {
    question: 'Les photos sont-elles de bonne qualité même en cas de faible luminosité ?',
    answer: 'Oui ! Notre photobooth intègre un véritable appareil photo professionnel avec un système d\'éclairage étudié qui garantit des photos de qualité quelle que soit la luminosité ambiante. Que votre événement se déroule en plein jour, en intérieur peu éclairé, ou en soirée dans le noir complet, le résultat sera toujours optimal. Le flash intégré et l\'appareil photo de qualité font toute la différence par rapport aux webcams qui dépendent totalement de la lumière ambiante.',
    category: 'technical'
  }
];

export const weddingSpecificFAQs: FAQItem[] = [
  {
    question: 'Combien d\'impressions faut-il prévoir pour un mariage de 100 invités ?',
    answer: 'Pour un mariage de 100 invités, nous recommandons entre 300 et 400 impressions. En moyenne, chaque invité fera 2 à 3 passages au photobooth et voudra 1 à 2 tirages. Notre formule Complète avec 400 impressions est donc idéale pour un mariage de cette taille. Si votre mariage est plus intime (60-80 invités), la formule Impression avec 200 tirages peut suffire. Pour plus de 120 invités, envisagez d\'ajouter un pack d\'impressions supplémentaires.',
    category: 'wedding'
  },
  {
    question: 'À quel moment de la journée de mariage le photobooth est-il le plus utilisé ?',
    answer: 'Le photobooth connaît généralement trois pics d\'utilisation lors d\'un mariage : pendant le vin d\'honneur (les invités arrivent progressivement et cherchent une activité), en début de soirée après le repas (les invités sont détendus et ont envie de s\'amuser avant la danse), et pendant les pauses entre les danses. Il est moins utilisé pendant le repas assis (normal) et en toute fin de soirée (fatigue). Cette répartition naturelle évite les files d\'attente.',
    category: 'wedding'
  },
  {
    question: 'Peut-on utiliser le photobooth pendant la cérémonie laïque ?',
    answer: 'Nous déconseillons d\'utiliser le photobooth pendant la cérémonie elle-même, qu\'elle soit laïque ou religieuse. La cérémonie est un moment solennel et intime qui mérite l\'attention complète des invités. Le photobooth risquerait de créer une distraction. En revanche, juste après la cérémonie, pendant le cocktail ou la séance photo des mariés, le photobooth est parfait pour occuper vos invités.',
    category: 'wedding'
  },
  {
    question: 'Les mariés doivent-ils passer au photobooth ?',
    answer: 'Ce n\'est absolument pas obligatoire, mais nous le recommandons ! Une photo des mariés seuls au photobooth, avec accessoires ou sans, devient souvent une des photos préférées du mariage. C\'est un moment décontracté qui contraste avec les photos officielles du photographe. Beaucoup de couples choisissent de faire une première photo ensemble pour "lancer" l\'animation et montrer l\'exemple aux invités. Timing idéal : début du vin d\'honneur ou début de soirée.',
    category: 'wedding'
  },
  {
    question: 'Le photobooth fonctionne-t-il dans les châteaux et domaines ?',
    answer: 'Oui, absolument ! Notre photobooth en bois artisanal s\'intègre parfaitement dans les châteaux et domaines élégants de l\'Indre-et-Loire. La fabrication en bois massif et la finition soignée créent une harmonie esthétique avec ces lieux prestigieux. Les seuls prérequis sont classiques : surface plane, prise électrique accessible, et espace de 3m x 2,5m. Les châteaux habitués aux événements disposent généralement de tout le nécessaire. Nous intervenons régulièrement dans les plus beaux lieux de la région.',
    category: 'wedding'
  }
];

export const businessSpecificFAQs: FAQItem[] = [
  {
    question: 'Proposez-vous des tarifs dégressifs pour plusieurs événements d\'entreprise ?',
    answer: 'Oui, pour les entreprises organisant plusieurs événements dans l\'année ou nécessitant plusieurs photobooths simultanément, nous proposons des tarifs dégressifs sur devis. Par exemple, si vous prévoyez 5 séminaires dans l\'année, nous pouvons établir un tarif préférentiel global. Contactez-nous avec votre calendrier prévisionnel d\'événements pour étudier un partenariat avantageux.',
    category: 'business'
  },
  {
    question: 'Peut-on utiliser les photos du photobooth pour notre communication d\'entreprise ?',
    answer: 'Oui, vous pouvez utiliser les photos prises au photobooth pour votre communication d\'entreprise (site web, réseaux sociaux, newsletter, rapports annuels) sous réserve d\'avoir obtenu l\'accord préalable des personnes photographiées. Lors de votre événement, nous vous recommandons d\'informer les participants que les photos pourront être utilisées à des fins de communication corporate et de prévoir une mention dans vos conditions de participation ou un panneau informatif. Le template personnalisé avec votre logo garantit que chaque photo porte votre identité de marque.',
    category: 'business'
  },
  {
    question: 'Fournissez-vous une facture conforme pour les services comptables ?',
    answer: 'Oui, nous fournissons systématiquement une facture détaillée conforme aux exigences comptables des entreprises. La facture mentionne clairement la prestation, la date, le montant HT/TTC, la TVA, nos coordonnées complètes avec SIRET, et toutes les informations légales nécessaires. Le paiement peut être effectué par virement bancaire depuis le compte de votre entreprise. Nous pouvons adapter la facturation à vos contraintes administratives spécifiques.',
    category: 'business'
  }
];

export function getFAQsByCategory(category: FAQItem['category']): FAQItem[] {
  return [...globalFAQs, ...weddingSpecificFAQs, ...businessSpecificFAQs].filter(
    faq => faq.category === category
  );
}

export function getAllFAQs(): FAQItem[] {
  return [...globalFAQs, ...weddingSpecificFAQs, ...businessSpecificFAQs];
}