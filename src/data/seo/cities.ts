export interface City {
  slug: string;
  name: string;
  postalCode: string;
  lat: number;
  lng: number;
  population: number;
  distanceFromTours: number;
  description: string;
  neighborhoods?: string[];
  venueTypes: string[];
  nearbyCities: string[];
  specificContent: {
    intro: string;
    weddingContext: string;
    businessContext: string;
    logisticsNote: string;
  };
  localFAQ: Array<{ question: string; answer: string }>;
}

export const cities: City[] = [
  // P0 - Villes majeures (8 villes)
  {
    slug: 'joue-les-tours',
    name: 'Joué-lès-Tours',
    postalCode: '37300',
    lat: 47.3528,
    lng: 0.6647,
    population: 38000,
    distanceFromTours: 5,
    description: 'Deuxième ville de l\'agglomération tourangelle, dynamique et accessible',
    neighborhoods: ['Centre-ville', 'Les Rabières', 'Champ Giroult'],
    venueTypes: ['salles municipales', 'domaines privés', 'restaurants'],
    nearbyCities: ['tours', 'ballan-mire', 'chambray-les-tours'],
    specificContent: {
      intro: 'Joué-lès-Tours, deuxième commune de l\'agglomération tourangelle avec ses 38 000 habitants, offre un cadre idéal pour vos événements festifs. Située à seulement 5 kilomètres du centre de Tours, cette ville dynamique conjugue proximité urbaine et espaces événementiels variés. Notre service de location de photobooth s\'adapte parfaitement aux lieux de réception de Joué-lès-Tours, des salles municipales modernes aux restaurants avec espaces privatisables.',
      weddingContext: 'Les mariages à Joué-lès-Tours bénéficient d\'une belle diversité de lieux de réception : salles municipales spacieuses et bien équipées, restaurants avec espaces privatisables pouvant accueillir de grandes tablées, et quelques domaines privés dans les quartiers résidentiels. La ville attire particulièrement les couples recherchant une ambiance conviviale et festive, avec une accessibilité optimale pour tous les invités. Les salles des fêtes de Joué offrent des espaces modulables parfaits pour installer notre photobooth, avec suffisamment de recul pour les photos de groupe.',
      businessContext: 'Joué-lès-Tours accueille de nombreuses entreprises dans sa zone d\'activités dynamique. Les événements corporate y trouvent des espaces modernes et fonctionnels : hôtels avec salles de conférence équipées, restaurants avec salons privatifs, et espaces événementiels dédiés aux séminaires. Notre photobooth s\'intègre naturellement dans ces cadres professionnels, apportant une touche conviviale aux team building, soirées d\'entreprise et lancements de produits organisés à Joué-lès-Tours.',
      logisticsNote: 'Notre livraison depuis Tours vers Joué-lès-Tours est particulièrement rapide et fluide : moins de 15 minutes via l\'avenue de la République. Cette proximité immédiate nous permet une grande réactivité. La livraison est incluse gratuitement dans notre formule Complète. Le retrait à Tours reste également très pratique pour les habitants de Joué qui préfèrent cette option économique.'
    },
    localFAQ: [
      {
        question: 'Livrez-vous le photobooth dans tous les quartiers de Joué-lès-Tours ?',
        answer: 'Oui, nous livrons notre photobooth dans tous les quartiers de Joué-lès-Tours : Centre-ville, Les Rabières, Champ Giroult, La Vallée Violette, et tous les secteurs de la commune. La livraison est gratuite (formule Complète) ou facturée 39€ (autres formules). Nous connaissons bien la ville et pouvons vous conseiller sur l\'accessibilité de votre lieu de réception.'
      },
      {
        question: 'Quels sont les lieux de réception populaires à Joué-lès-Tours pour installer un photobooth ?',
        answer: 'À Joué-lès-Tours, nos photobooths sont régulièrement installés dans les salles des fêtes municipales (salle Balzac, salle des Fêtes), les restaurants avec salons (plusieurs établissements sur l\'avenue de la République), et dans les espaces privatifs des zones d\'activité. Tous ces lieux offrent l\'espace et l\'électricité nécessaires pour une installation optimale.'
      },
      {
        question: 'Puis-je retirer le photobooth à Joué-lès-Tours plutôt qu\'à Tours ?',
        answer: 'Notre point de retrait principal est situé à Tours centre. Cependant, la proximité de Joué-lès-Tours (5 minutes en voiture) rend le retrait très pratique. Si vous préférez la livraison directe à votre lieu de réception à Joué, nous proposons ce service dès 39€, ou gratuitement avec la formule Complète.'
      },
      {
        question: 'Le photobooth fonctionne-t-il dans les salles municipales de Joué-lès-Tours ?',
        answer: 'Absolument ! Nos photobooths sont régulièrement utilisés dans les salles municipales de Joué-lès-Tours. Ces espaces sont généralement bien dimensionnés et équipés électriquement. Nous fournissons une rallonge de 10 mètres pour garantir la flexibilité d\'installation. N\'hésitez pas à nous indiquer quelle salle vous avez réservée, nous pourrons vous confirmer la compatibilité.'
      },
      {
        question: 'Combien de temps à l\'avance dois-je réserver pour un événement à Joué-lès-Tours ?',
        answer: 'Pour un mariage ou événement majeur à Joué-lès-Tours, nous recommandons 6 à 8 semaines d\'avance, surtout pour les weekends de mai à septembre. Pour un événement d\'entreprise en semaine, 3 à 4 semaines suffisent généralement. La proximité avec Tours nous permet cependant d\'être plus flexibles : contactez-nous même à la dernière minute, nous ferons notre maximum.'
      }
    ]
  },
  {
    slug: 'saint-avertin',
    name: 'Saint-Avertin',
    postalCode: '37550',
    lat: 47.3697,
    lng: 0.7258,
    population: 14500,
    distanceFromTours: 4,
    description: 'Commune résidentielle prisée de l\'est tourangeau',
    neighborhoods: ['Centre-bourg', 'Les Grands Champs', 'La Grenouillère'],
    venueTypes: ['salles communales', 'domaines privés', 'restaurants gastronomiques'],
    nearbyCities: ['tours', 'chambray-les-tours', 'saint-pierre-des-corps'],
    specificContent: {
      intro: 'Saint-Avertin, commune résidentielle prisée de 14 500 habitants située à l\'est de Tours, séduit par son cadre verdoyant et sa qualité de vie. À seulement 4 kilomètres du centre-ville de Tours, elle offre un environnement privilégié pour vos célébrations. Notre service de location de photobooth s\'intègre parfaitement dans les lieux de réception élégants et raffinés de Saint-Avertin, apportant une animation moderne dans des cadres souvent traditionnels.',
      weddingContext: 'Les mariages à Saint-Avertin se déroulent souvent dans des cadres élégants et soignés. La commune propose des salles communales bien entretenues, quelques domaines privés avec jardins arborés offrant une intimité recherchée, et des restaurants gastronomiques réputés où l\'excellence culinaire s\'associe à un service premium. Les couples choisissant Saint-Avertin recherchent généralement une ambiance raffinée, un service de qualité, et un cadre verdoyant. Notre photobooth en bois artisanal s\'harmonise particulièrement bien avec cette recherche d\'élégance.',
      businessContext: 'Saint-Avertin accueille principalement des événements d\'entreprise dans ses restaurants haut de gamme et ses espaces de réception privés. Les séminaires résidentiels y trouvent un environnement calme et verdoyant, propice à la concentration et aux échanges de qualité. Les dîners d\'affaires dans les restaurants gastronomiques de la commune créent des moments conviviaux qui se prolongent naturellement autour du photobooth, favorisant les interactions entre collaborateurs dans un cadre détendu.',
      logisticsNote: 'La proximité immédiate avec Tours (4 kilomètres à l\'est) rend la livraison vers Saint-Avertin extrêmement simple et rapide. Le trajet depuis notre point de retrait à Tours prend moins de 10 minutes via l\'avenue de Grammont. Notre formule Complète inclut la livraison gratuite pour Saint-Avertin. Les axes routiers excellents garantissent un transport sécurisé de notre matériel.'
    },
    localFAQ: [
      {
        question: 'Notre réception se tient dans un restaurant gastronomique de Saint-Avertin, le photobooth s\'intègre-t-il dans ce cadre élégant ?',
        answer: 'Tout à fait ! Notre photobooth artisanal en bois véritable a été conçu justement pour s\'intégrer harmonieusement dans des cadres élégants et raffinés. À Saint-Avertin, nous avons l\'habitude des restaurants gastronomiques et domaines privés haut de gamme. Le bois massif et la finition soignée de notre borne apportent une touche premium qui respecte l\'ambiance de votre lieu. De nombreux clients de Saint-Avertin apprécient particulièrement cette cohérence esthétique.'
      },
      {
        question: 'Y a-t-il des contraintes spécifiques pour installer un photobooth dans les domaines privés de Saint-Avertin ?',
        answer: 'Les domaines privés de Saint-Avertin offrent généralement d\'excellentes conditions pour installer notre photobooth. L\'essentiel est de disposer d\'une surface plane (intérieur ou extérieur couvert), d\'une prise électrique accessible, et d\'un espace de 3m x 2,5m. Si votre réception se tient en extérieur, nous recommandons fortement une installation sous barnum ou pergola. N\'hésitez pas à nous décrire votre lieu, nous vous conseillerons précisément.'
      },
      {
        question: 'Les résidents de Saint-Avertin peuvent-ils bénéficier d\'un tarif préférentiel ?',
        answer: 'Nos tarifs sont les mêmes pour tous, basés sur la formule choisie et les options. Cependant, Saint-Avertin bénéficiant d\'une proximité immédiate avec Tours (4km), la livraison est gratuite avec notre formule Complète. Cette commune fait partie de notre zone de service prioritaire, ce qui nous permet d\'être particulièrement réactifs et flexibles pour vos événements.'
      },
      {
        question: 'Proposez-vous des templates personnalisés haut de gamme pour les mariages à Saint-Avertin ?',
        answer: 'Oui, notre service de personnalisation permet de créer des templates très élégants et raffinés, parfaitement adaptés aux mariages haut de gamme de Saint-Avertin. Nous pouvons intégrer vos couleurs, typographies sophistiquées, monogrammes, et éléments graphiques subtils. Le résultat est un tirage photo qui reflète le standing de votre événement. Cette option est incluse dans la formule Complète ou disponible à 10€ pour les autres formules.'
      },
      {
        question: 'Quels sont les délais de réservation recommandés pour Saint-Avertin ?',
        answer: 'Saint-Avertin étant une commune prisée pour les mariages élégants, nous recommandons de réserver 8 à 10 semaines à l\'avance pour les weekends de haute saison (mai à septembre). Les lieux de réception haut de gamme attirent une clientèle qui anticipe, nous conseillons donc de ne pas attendre la dernière minute. Pour les événements d\'entreprise en semaine, 4 semaines suffisent généralement.'
      }
    ]
  },
  {
    slug: 'chambray-les-tours',
    name: 'Chambray-lès-Tours',
    postalCode: '37170',
    lat: 47.3344,
    lng: 0.7089,
    population: 11000,
    distanceFromTours: 7,
    description: 'Ville dynamique du sud de l\'agglomération',
    neighborhoods: ['Centre-ville', 'Les Caves', 'La Gauterie'],
    venueTypes: ['salles des fêtes', 'espaces événementiels', 'restaurants'],
    nearbyCities: ['tours', 'joue-les-tours', 'saint-avertin'],
    specificContent: {
      intro: 'Chambray-lès-Tours, ville de 11 000 habitants située au sud de l\'agglomération tourangelle, combine modernité et convivialité. À 7 kilomètres de Tours, elle propose des infrastructures événementielles de qualité dans un cadre résidentiel agréable. Notre photobooth trouve naturellement sa place dans les espaces modernes et fonctionnels de Chambray-lès-Tours, apportant une animation ludique qui séduit tous les publics.',
      weddingContext: 'Les mariages à Chambray-lès-Tours profitent d\'espaces modernes, bien équipés et fonctionnels. Les salles des fêtes récentes offrent des volumes généreux et une modularité appréciable, les restaurants avec terrasses permettent de profiter des beaux jours, et les lieux privatisables proposent des formules tout compris pratiques. Les couples choisissant Chambray-lès-Tours privilégient souvent la praticité, l\'accessibilité pour leurs invités, et un bon rapport qualité-prix. Notre photobooth répond parfaitement à ces attentes avec son installation ultra-simple et ses tarifs transparents.',
      businessContext: 'Chambray-lès-Tours, avec sa zone commerciale importante et sa proximité avec l\'A10, accueille régulièrement des événements d\'entreprise dans ses espaces de réception et hôtels-restaurants. Les lancements de produits, team building, et séminaires commerciaux y trouvent des lieux pratiques et bien desservis. Notre photobooth apporte une dimension conviviale qui facilite les échanges informels entre participants, particulièrement appréciée lors des pauses et cocktails networking.',
      logisticsNote: 'À 7 kilomètres au sud de Tours, Chambray-lès-Tours bénéficie d\'une livraison rapide et fluide via la route de Montbazon. Notre formule Complète inclut la livraison gratuite pour cette commune. L\'accès est direct et les axes principaux permettent un transport sécurisé de notre matériel. Le trajet depuis notre point de retrait à Tours prend environ 12 minutes.'
    },
    localFAQ: [
      {
        question: 'Notre mariage se tient dans une salle des fêtes à Chambray-lès-Tours, combien d\'espace faut-il pour le photobooth ?',
        answer: 'Les salles des fêtes de Chambray-lès-Tours offrent généralement des espaces généreux, parfaits pour notre photobooth. Nous recommandons un espace de 3 mètres de large sur 2,5 mètres de profondeur. La borne elle-même mesure 50cm de large, mais cet espace permet à vos invités de se positionner confortablement et de prendre des photos de groupe. Les salles modernes de Chambray sont parfaitement dimensionnées pour cette installation.'
      },
      {
        question: 'Peut-on installer le photobooth en extérieur lors d\'un événement à Chambray-lès-Tours ?',
        answer: 'L\'installation en extérieur est techniquement possible à Chambray-lès-Tours, sous réserve de protéger le photobooth des intempéries. Nous recommandons fortement une installation sous barnum, pergola ou auvent. Une prise électrique accessible est également indispensable. Pour les événements en extérieur, nous conseillons de prévoir un plan B en intérieur en cas de mauvais temps. Les terrasses couvertes des restaurants de Chambray sont des emplacements idéaux.'
      },
      {
        question: 'La livraison est-elle vraiment gratuite à Chambray-lès-Tours ?',
        answer: 'Oui, avec notre formule Complète, la livraison à Chambray-lès-Tours est entièrement gratuite. Cette commune se situe dans notre zone de livraison incluse (jusqu\'à 20km de Tours). Si vous choisissez la formule Digitale ou Impression, les frais de livraison sont de 39€. Le retrait à Tours reste aussi une option économique pour les habitants de Chambray.'
      },
      {
        question: 'Votre photobooth convient-il aux événements d\'entreprise dans la zone commerciale de Chambray-lès-Tours ?',
        answer: 'Absolument ! Nous avons régulièrement des événements corporate dans la zone commerciale et d\'activités de Chambray-lès-Tours. Notre photobooth apporte une animation conviviale très appréciée lors des lancements produits, séminaires et team building. L\'aspect professionnel de notre matériel (bois artisanal, vrai appareil photo) correspond parfaitement aux standards des événements d\'entreprise.'
      },
      {
        question: 'Combien de temps faut-il pour installer le photobooth dans une salle à Chambray-lès-Tours ?',
        answer: 'L\'installation de notre photobooth prend seulement 2 minutes ! Vous posez la borne sur une surface plane, vous la branchez sur une prise électrique, et c\'est prêt. Aucune compétence technique n\'est requise. Nous fournissons un guide papier illustré et des vidéos accessibles par QR code. Les salles modernes de Chambray-lès-Tours facilitent grandement cette installation express.'
      }
    ]
  },
  {
    slug: 'la-riche',
    name: 'La Riche',
    postalCode: '37520',
    lat: 47.3883,
    lng: 0.6597,
    population: 10500,
    distanceFromTours: 3,
    description: 'Commune limitrophe ouest de Tours',
    neighborhoods: ['Centre', 'Les Bégrolles', 'Sainte-Anne'],
    venueTypes: ['salles municipales', 'restaurants', 'espaces associatifs'],
    nearbyCities: ['tours', 'saint-cyr-sur-loire', 'fondettes'],
    specificContent: {
      intro: 'La Riche, commune de 10 500 habitants située à l\'ouest immédiat de Tours, offre une accessibilité exceptionnelle. À seulement 3 kilomètres du centre-ville, elle constitue une extension naturelle de Tours pour vos événements. Notre service de location de photobooth profite de cette proximité unique pour assurer une réactivité maximale et un service client de première qualité aux organisateurs d\'événements à La Riche.',
      weddingContext: 'Les mariages à La Riche se caractérisent par leur côté pratique et convivial. La ville propose des salles municipales bien entretenues et fonctionnelles, plusieurs restaurants avec espaces privatisables offrant des formules tout compris, et quelques lieux associatifs modulables. Les couples choisissant La Riche apprécient particulièrement la proximité immédiate avec Tours, qui facilite l\'accès pour tous les invités, tout en bénéficiant d\'un cadre plus calme et de tarifs de location souvent plus abordables que dans Tours intra-muros.',
      businessContext: 'La Riche accueille des événements d\'entreprise principalement dans ses restaurants et espaces associatifs polyvalents. La proximité avec le centre de Tours en fait un choix logique et économique pour les séminaires d\'une demi-journée, les afterworks, et les formations continues. Notre photobooth apporte une dimension ludique qui détend l\'atmosphère et favorise les échanges informels entre collègues, particulièrement apprécié lors des événements de cohésion d\'équipe.',
      logisticsNote: 'La Riche est si proche de Tours (3 kilomètres à l\'ouest) que la livraison est quasiment immédiate. Le trajet depuis notre point de retrait prend moins de 7 minutes via la rue Nationale. Notre formule Complète inclut évidemment la livraison gratuite. Cette proximité exceptionnelle permet même à de nombreux clients de La Riche de préférer le retrait direct à Tours, option la plus économique.'
    },
    localFAQ: [
      {
        question: 'La proximité de La Riche avec Tours a-t-elle un impact sur les tarifs de location du photobooth ?',
        answer: 'Nos tarifs de location restent les mêmes quelle que soit votre commune. Cependant, La Riche bénéficie d\'une proximité exceptionnelle avec Tours (3km), ce qui rend la livraison particulièrement économique et rapide. Avec la formule Complète, la livraison est gratuite. Beaucoup de nos clients de La Riche optent aussi pour le retrait à Tours, distance très courte, ce qui leur permet d\'économiser les frais de livraison.'
      },
      {
        question: 'Intervenez-vous dans toutes les salles municipales de La Riche ?',
        answer: 'Oui, nous livrons et installons notre photobooth dans toutes les salles municipales et espaces événementiels de La Riche : salle des fêtes, salles associatives, et restaurants avec espaces privatisables. La proximité avec Tours nous permet une grande flexibilité et une réactivité optimale. Si vous avez un doute sur votre lieu, contactez-nous pour validation.'
      },
      {
        question: 'Peut-on combiner retrait à Tours et installation à La Riche ?',
        answer: 'Oui, c\'est une excellente option ! Vous pouvez récupérer le photobooth à notre point de retrait à Tours (gratuit), puis le transporter vous-même à votre lieu de réception à La Riche (3km seulement). Cette solution est la plus économique. Le photobooth tient facilement dans un coffre de voiture standard. Nous fournissons toutes les instructions pour un transport et une installation en toute sécurité.'
      },
      {
        question: 'Y a-t-il des restaurants à La Riche où vous avez déjà installé des photobooths ?',
        answer: 'Oui, nous avons régulièrement des événements dans les restaurants de La Riche proposant des espaces privatisables. Les établissements de la rue Nationale et des quartiers résidentiels accueillent souvent nos photobooths pour des mariages, anniversaires et événements d\'entreprise. Ces lieux offrent généralement l\'espace et les prises électriques nécessaires pour une installation optimale.'
      },
      {
        question: 'En cas de problème technique pendant un événement à La Riche, quelle est votre réactivité ?',
        answer: 'La proximité exceptionnelle de La Riche avec Tours (3km) nous permet une réactivité maximale. En cas de problème technique, nous offrons d\'abord une assistance téléphonique immédiate 7j/7 qui résout la plupart des situations. Si une intervention physique est nécessaire, nous pouvons être sur place en moins de 10 minutes. Cette proximité est un avantage majeur pour nos clients de La Riche.'
      }
    ]
  },
  {
    slug: 'saint-cyr-sur-loire',
    name: 'Saint-Cyr-sur-Loire',
    postalCode: '37540',
    lat: 47.4097,
    lng: 0.6672,
    population: 16500,
    distanceFromTours: 5,
    description: 'Ville résidentielle prisée au nord de Tours',
    neighborhoods: ['Centre-ville', 'La Béchellerie', 'Les Bordebures'],
    venueTypes: ['domaines', 'restaurants gastronomiques', 'salles de réception'],
    nearbyCities: ['tours', 'la-riche', 'fondettes'],
    specificContent: {
      intro: 'Saint-Cyr-sur-Loire, ville résidentielle huppée de 16 500 habitants au nord de Tours, se distingue par son cadre verdoyant et ses prestations haut de gamme. À 5 kilomètres du centre de Tours, elle attire une clientèle recherchant qualité et élégance. Notre photobooth artisanal en bois, avec son appareil photo professionnel, répond parfaitement aux exigences de qualité des événements organisés à Saint-Cyr-sur-Loire.',
      weddingContext: 'Les mariages à Saint-Cyr-sur-Loire sont souvent synonymes de raffinement et d\'excellence. La commune abrite plusieurs domaines privés avec parcs paysagers offrant un cadre bucolique et intimiste, des restaurants gastronomiques réputés où l\'excellence culinaire rivalise avec la beauté des lieux, et des salles de réception premium avec services personnalisés. L\'ambiance y est résolument chic et soignée. Notre photobooth s\'intègre harmonieusement dans ces cadres élégants, apportant une animation ludique sans dénaturer la sophistication de l\'événement.',
      businessContext: 'Saint-Cyr-sur-Loire accueille des événements corporate haut de gamme dans des lieux prestigieux. Les séminaires résidentiels dans les domaines avec hébergement, les dîners d\'affaires dans les restaurants étoilés, et les réceptions dans des propriétés d\'exception attirent les entreprises recherchant le standing et la discrétion. Notre photobooth premium, avec sa finition artisanale en bois massif, correspond parfaitement à ces standards élevés.',
      logisticsNote: 'Notre livraison vers Saint-Cyr-sur-Loire depuis Tours est fluide et rapide (5 kilomètres au nord). Le trajet prend environ 10 minutes via les boulevards périphériques de Tours ou la rue Nationale. Notre formule Complète inclut la livraison gratuite pour cette commune prisée. Les accès sont excellents et nous connaissons bien les différents quartiers résidentiels de Saint-Cyr.'
    },
    localFAQ: [
      {
        question: 'Votre photobooth s\'intègre-t-il dans les domaines haut de gamme de Saint-Cyr-sur-Loire ?',
        answer: 'Absolument ! Notre photobooth a été précisément conçu pour s\'harmoniser avec des lieux haut de gamme. La fabrication artisanale française en bois massif véritable, la finition soignée, et l\'utilisation d\'un véritable appareil photo professionnel (pas une webcam) garantissent un niveau de qualité adapté aux domaines prestigieux de Saint-Cyr-sur-Loire. De nombreux clients de Saint-Cyr choisissent notre service pour cette cohérence esthétique et qualitative.'
      },
      {
        question: 'Proposez-vous un service premium pour les mariages à Saint-Cyr-sur-Loire ?',
        answer: 'Toutes nos formules offrent un niveau de service premium : matériel artisanal français, véritable appareil photo, assistance 7j/7, et sauvegarde sécurisée de toutes les photos. Pour les mariages haut de gamme de Saint-Cyr-sur-Loire, nous recommandons notre formule Complète qui inclut 400 impressions, un template entièrement personnalisé à votre identité visuelle, et la livraison gratuite. Nous pouvons également adapter nos accessoires à votre thématique.'
      },
      {
        question: 'Les domaines privés de Saint-Cyr-sur-Loire ont-ils des contraintes particulières pour le photobooth ?',
        answer: 'Les domaines privés de Saint-Cyr-sur-Loire offrent généralement d\'excellentes conditions. L\'essentiel est de disposer d\'une surface plane stable (parquet, terrasse, gazon tondu court), d\'une prise électrique 220V accessible, et d\'un espace de 3m x 2,5m. Nous fournissons une rallonge de 10m pour la flexibilité. Si votre réception inclut un cocktail en extérieur, nous recommandons une installation sous pergola ou orangerie pour protéger le matériel.'
      },
      {
        question: 'Votre délai de réservation est-il plus long pour Saint-Cyr-sur-Loire ?',
        answer: 'Saint-Cyr-sur-Loire étant une commune très prisée pour les mariages élégants et événements haut de gamme, les weekends de haute saison (mai à septembre) se réservent effectivement très tôt. Nous recommandons 10 à 12 semaines d\'avance pour garantir la disponibilité. Les couples qui choisissent Saint-Cyr planifient généralement leur mariage avec beaucoup d\'anticipation, donc réserver tôt est cohérent avec cette approche.'
      },
      {
        question: 'Peut-on visiter votre photobooth avant de réserver pour un événement à Saint-Cyr-sur-Loire ?',
        answer: 'Oui, nous organisons des rendez-vous de démonstration sur demande pour les clients qui le souhaitent, particulièrement pour les événements haut de gamme. Contactez-nous pour planifier une visite de notre photobooth à Tours. Cela vous permettra de constater la qualité de fabrication, de tester le fonctionnement, et de valider que notre matériel correspond à vos attentes pour votre événement à Saint-Cyr-sur-Loire.'
      }
    ]
  },
  {
    slug: 'saint-pierre-des-corps',
    name: 'Saint-Pierre-des-Corps',
    postalCode: '37700',
    lat: 47.3886,
    lng: 0.7456,
    population: 15500,
    distanceFromTours: 5,
    description: 'Ville populaire et dynamique à l\'est de Tours',
    neighborhoods: ['Centre-ville', 'Rabière', 'Tonnellé'],
    venueTypes: ['salles municipales', 'restaurants', 'espaces associatifs'],
    nearbyCities: ['tours', 'saint-avertin', 'la-ville-aux-dames'],
    specificContent: {
      intro: 'Saint-Pierre-des-Corps, ville de 15 500 habitants à l\'est de Tours, se caractérise par son dynamisme et son tissu associatif très vivant. À 5 kilomètres du centre de Tours, elle propose des espaces événementiels accessibles, fonctionnels et conviviaux. Notre photobooth trouve naturellement sa place dans les événements festifs de Saint-Pierre-des-Corps, apportant une animation moderne et ludique qui rassemble tous les participants.',
      weddingContext: 'Les mariages à Saint-Pierre-des-Corps privilégient l\'authenticité, la convivialité et l\'accessibilité. Les salles municipales modernes et spacieuses, les restaurants de quartier avec espaces privatisables offrant une cuisine généreuse, et quelques lieux associatifs polyvalents accueillent des célébrations chaleureuses sans prétention. Les couples choisissant Saint-Pierre apprécient l\'ambiance populaire et festive, la proximité avec Tours, et des tarifs souvent plus abordables. Notre photobooth, avec son côté ludique et participatif, correspond parfaitement à cet esprit.',
      businessContext: 'Saint-Pierre-des-Corps accueille des événements d\'entreprise dans un esprit pragmatique et économique. Les séminaires de formation, les réunions commerciales, et les afterworks y trouvent des espaces fonctionnels à tarifs raisonnables. La commune, avec son tissu associatif dynamique, propose également des lieux originaux pour les team building. Notre photobooth apporte une touche de convivialité appréciée lors de ces événements professionnels.',
      logisticsNote: 'La livraison depuis Tours vers Saint-Pierre-des-Corps est directe et rapide (5 kilomètres à l\'est). Le trajet prend environ 10 minutes via l\'avenue de la République. Notre formule Complète inclut la livraison gratuite pour cette commune. L\'accès est facilité par les grands axes et nous connaissons bien les différents quartiers de Saint-Pierre. La proximité avec Tours garantit aussi notre réactivité en cas de besoin.'
    },
    localFAQ: [
      {
        question: 'Votre photobooth convient-il aux salles municipales de Saint-Pierre-des-Corps ?',
        answer: 'Oui, parfaitement ! Les salles municipales de Saint-Pierre-des-Corps offrent généralement des espaces spacieux et bien équipés, idéaux pour installer notre photobooth. Nous avons régulièrement des événements dans ces lieux. L\'installation est simple (2 minutes), nécessite juste une surface plane et une prise électrique. Les salles modernes de Saint-Pierre répondent parfaitement à ces besoins basiques.'
      },
      {
        question: 'Les tarifs sont-ils les mêmes pour Saint-Pierre-des-Corps que pour les autres communes ?',
        answer: 'Oui, nos tarifs sont identiques quelle que soit votre commune. Nous proposons trois formules claires : Digitale (229€), Impression (289€), et Complète (339€) pour un weekend 48h. Saint-Pierre-des-Corps se situant à 5km de Tours, la livraison est gratuite avec la formule Complète, ou facturée 39€ avec les autres formules. Aucune majoration liée à la ville.'
      },
      {
        question: 'Peut-on organiser un événement associatif avec photobooth à Saint-Pierre-des-Corps ?',
        answer: 'Absolument ! Saint-Pierre-des-Corps a un tissu associatif très dynamique et nous intervenons régulièrement pour des événements associatifs : fêtes de quartier, galas, soirées dansantes, etc. Notre photobooth apporte une animation moderne et ludique très appréciée. Les formules weekend sont parfaites pour ces événements. N\'hésitez pas à nous contacter pour adapter notre service à votre association.'
      },
      {
        question: 'La livraison à Saint-Pierre-des-Corps est-elle vraiment rapide ?',
        answer: 'Oui, Saint-Pierre-des-Corps étant à seulement 5km à l\'est de Tours, la livraison est très rapide : environ 10 minutes depuis notre point de Tours via l\'avenue de la République. Cette proximité nous permet d\'être très réactifs. Si vous organisez votre événement le samedi, nous livrons généralement le vendredi après-midi ou samedi matin selon votre préférence et la disponibilité de votre salle.'
      },
      {
        question: 'Proposez-vous des formules spéciales pour les petits budgets à Saint-Pierre-des-Corps ?',
        answer: 'Nous n\'avons pas de "tarifs réduits" spécifiques, mais notre formule Digitale à 229€ (weekend 48h, photos illimitées en ligne) est déjà très accessible. Si vous organisez votre événement en semaine, notre formule Soirée démarre à 124€. Pour Saint-Pierre-des-Corps, le retrait à Tours (gratuit) permet aussi d\'économiser les frais de livraison. Nous proposons également un paiement en deux fois pour faciliter votre budget.'
      }
    ]
  },
  {
    slug: 'ballan-mire',
    name: 'Ballan-Miré',
    postalCode: '37510',
    lat: 47.3406,
    lng: 0.6142,
    population: 7800,
    distanceFromTours: 9,
    description: 'Commune du sud-ouest, cadre semi-rural',
    neighborhoods: ['Centre-bourg', 'Les Martinières'],
    venueTypes: ['salles communales', 'domaines ruraux', 'restaurants'],
    nearbyCities: ['tours', 'joue-les-tours', 'savonnieres'],
    specificContent: {
      intro: 'Ballan-Miré, commune de 7 800 habitants située au sud-ouest de Tours, offre un cadre semi-rural apprécié pour son calme et sa douceur de vivre. À 9 kilomètres de Tours, elle combine l\'accessibilité de l\'agglomération tourangelle et un environnement champêtre préservé. Notre photobooth s\'intègre naturellement dans les événements de Ballan-Miré, apportant une animation moderne dans des cadres souvent bucoliques et décontractés.',
      weddingContext: 'Les mariages à Ballan-Miré s\'inscrivent souvent dans une ambiance champêtre, authentique et décontractée. La commune propose des salles communales simples et fonctionnelles, quelques domaines ruraux avec espaces verts permettant des cérémonies laïques en extérieur, et des restaurants familiaux avec terrasses. Les couples y recherchent une atmosphère bucolique et conviviale, loin du stress urbain mais à proximité raisonnable de Tours. Notre photobooth en bois artisanal s\'harmonise parfaitement avec ces ambiances naturelles.',
      businessContext: 'Ballan-Miré accueille principalement des événements d\'entreprise axés sur le team building et les séminaires au vert. L\'environnement rural et les espaces en plein air favorisent la cohésion d\'équipe, la créativité et les activités de groupe loin du stress urbain. Notre photobooth devient alors un point de rassemblement ludique lors des pauses et moments informels, créant des souvenirs mémorables de ces journées de cohésion.',
      logisticsNote: 'À 9 kilomètres au sud-ouest de Tours, Ballan-Miré se situe à la limite de notre zone de livraison gratuite (formule Complète couvre jusqu\'à 20km). Le trajet depuis Tours prend environ 15 minutes via la D910 (route de Montbazon). L\'accès est direct et les routes sont de bonne qualité. Pour les formules Digitale et Impression, le tarif de livraison est de 39€. Le retrait à Tours reste une option économique.'
    },
    localFAQ: [
      {
        question: 'La livraison est-elle incluse à Ballan-Miré ?',
        answer: 'Ballan-Miré se situant à 9km de Tours, la livraison est gratuite avec notre formule Complète (zone couverte jusqu\'à 20km). Si vous choisissez la formule Digitale ou Impression, les frais de livraison sont de 39€. Le retrait à Tours (9km, environ 15 minutes) est aussi une option économique qui plaît à beaucoup de nos clients de Ballan-Miré.'
      },
      {
        question: 'Peut-on installer le photobooth en extérieur pour un mariage champêtre à Ballan-Miré ?',
        answer: 'L\'installation en extérieur est techniquement possible à Ballan-Miré, particulièrement pour les mariages champêtres dans les domaines ruraux. Cependant, le photobooth doit impérativement être protégé des intempéries (pluie, soleil direct, vent). Nous recommandons fortement une installation sous barnum, pergola, ou grange ouverte. Une prise électrique accessible est indispensable. Prévoyez un plan B en intérieur en cas de mauvais temps.'
      },
      {
        question: 'Votre photobooth convient-il aux ambiances champêtres et rustiques ?',
        answer: 'Absolument ! Notre photobooth artisanal en bois véritable s\'intègre parfaitement dans les ambiances champêtres et rustiques. À Ballan-Miré, beaucoup de nos clients organisent des mariages bucoliques dans des granges rénovées, des domaines ruraux, ou des jardins campagnards. Le bois massif et la finition naturelle de notre borne s\'harmonisent idéalement avec ces décors authentiques.'
      },
      {
        question: 'Y a-t-il des contraintes techniques pour les domaines ruraux de Ballan-Miré ?',
        answer: 'Les domaines ruraux de Ballan-Miré offrent généralement de bonnes conditions pour installer notre photobooth. Les points essentiels à vérifier : surface plane et stable (éviter l\'herbe haute ou le gravier), prise électrique 220V accessible (nous fournissons 10m de rallonge), et protection contre les intempéries si installation en extérieur. Si votre lieu présente des spécificités, contactez-nous pour valider la faisabilité.'
      },
      {
        question: 'Combien de temps à l\'avance faut-il réserver pour un mariage à Ballan-Miré ?',
        answer: 'Pour un mariage à Ballan-Miré, nous recommandons de réserver 6 à 8 semaines à l\'avance, surtout pour les weekends de mai à septembre. Les mariages champêtres étant très tendance, ces périodes sont demandées. Cette anticipation vous garantit la disponibilité et nous permet de bien préparer votre événement. Pour un événement en semaine, 3 à 4 semaines suffisent généralement.'
      }
    ]
  },
  {
    slug: 'fondettes',
    name: 'Fondettes',
    postalCode: '37230',
    lat: 47.4031,
    lng: 0.6028,
    population: 10500,
    distanceFromTours: 8,
    description: 'Ville du nord-ouest de l\'agglomération',
    neighborhoods: ['Centre-ville', 'Vallières', 'Les Cochardières'],
    venueTypes: ['salles municipales', 'restaurants', 'domaines'],
    nearbyCities: ['tours', 'saint-cyr-sur-loire', 'la-riche'],
    specificContent: {
      intro: 'Fondettes, ville de 10 500 habitants située au nord-ouest de Tours, propose un équilibre harmonieux entre vie résidentielle et espaces verts. À 8 kilomètres de Tours, elle séduit par son cadre agréable, ses infrastructures modernes et son ambiance conviviale. Notre photobooth trouve naturellement sa place dans les événements de Fondettes, apportant une animation ludique qui plaît à tous les publics.',
      weddingContext: 'Les mariages à Fondettes bénéficient de lieux variés et bien équipés. Les salles municipales modernes offrent des espaces modulables et fonctionnels, les restaurants avec terrasses permettent de profiter des beaux jours dans un cadre verdoyant, et quelques domaines privés proposent des réceptions intimistes. Les couples choisissant Fondettes recherchent généralement un cadre calme et agréable, une bonne accessibilité pour leurs invités, et un environnement qui favorise la convivialité. Notre photobooth répond à ces attentes.',
      businessContext: 'Fondettes accueille des événements d\'entreprise dans ses espaces de réception polyvalents et ses restaurants avec salons privatifs. Les séminaires d\'une journée, les formations continues, et les afterworks y trouvent des lieux fonctionnels et bien desservis. La proximité avec Tours et l\'environnement agréable font de Fondettes un choix pertinent pour les événements corporate nécessitant calme et concentration.',
      logisticsNote: 'À 8 kilomètres au nord-ouest de Tours, Fondettes est couverte par notre livraison gratuite (formule Complète). Le trajet depuis Tours prend environ 12 minutes via la D952 ou les boulevards périphériques. L\'accès est direct et les routes de bonne qualité facilitent le transport de notre photobooth. Pour les formules Digitale et Impression, les frais de livraison sont de 39€.'
    },
    localFAQ: [
      {
        question: 'Livrez-vous dans tous les quartiers de Fondettes ?',
        answer: 'Oui, nous livrons notre photobooth dans tous les quartiers de Fondettes : Centre-ville, Vallières, Les Cochardières, et tous les secteurs de la commune. À 8km de Tours, Fondettes bénéficie d\'une livraison gratuite avec notre formule Complète, ou à 39€ avec les autres formules. Nous connaissons bien la ville et pouvons vous conseiller sur l\'accessibilité de votre lieu.'
      },
      {
        question: 'Les salles municipales de Fondettes sont-elles compatibles avec votre photobooth ?',
        answer: 'Oui, parfaitement ! Les salles municipales de Fondettes sont modernes, spacieuses et bien équipées. Elles offrent l\'espace nécessaire (3m x 2,5m) et des prises électriques accessibles. Nous avons régulièrement des événements dans ces lieux et l\'installation se déroule toujours sans difficulté. Les salles de Fondettes sont idéales pour nos photobooths.'
      },
      {
        question: 'Peut-on combiner le photobooth avec d\'autres animations à Fondettes ?',
        answer: 'Absolument ! Le photobooth se combine très bien avec d\'autres animations : DJ, groupe de musique, magicien, caricaturiste, etc. À Fondettes, nous avons souvent des événements où plusieurs animations coexistent. Le photobooth a l\'avantage d\'être autonome et silencieux, ne gênant pas les autres prestations. Il s\'installe dans un coin de la salle et les invités viennent naturellement entre les danses ou les plats.'
      },
      {
        question: 'Votre photobooth fonctionne-t-il aussi bien en journée qu\'en soirée ?',
        answer: 'Oui, notre photobooth fonctionne parfaitement aussi bien en journée qu\'en soirée. L\'éclairage intégré garantit des photos de qualité quelle que soit la luminosité ambiante. À Fondettes, que votre événement soit un cocktail en journée, un mariage l\'après-midi, ou une soirée dansante, le résultat photo sera toujours optimal grâce au véritable appareil photo professionnel et au flash intégré.'
      },
      {
        question: 'Proposez-vous un service de personnalisation pour les événements à Fondettes ?',
        answer: 'Oui, nous proposons la personnalisation des templates photo avec vos prénoms, date, logo, ou éléments graphiques personnalisés. Cette option est incluse dans notre formule Complète ou disponible à 10€ pour les autres formules. Pour les événements à Fondettes, nous créons des designs qui s\'harmonisent avec votre thématique et l\'ambiance de votre réception.'
      }
    ]
  },

  // P1 - Extension villes moyennes (4 villes)
  {
    slug: 'vouvray',
    name: 'Vouvray',
    postalCode: '37210',
    lat: 47.4119,
    lng: 0.7978,
    population: 3100,
    distanceFromTours: 10,
    description: 'Célèbre village viticole au nord-est de Tours',
    neighborhoods: ['Centre-bourg', 'Vallée Coquette'],
    venueTypes: ['caves viticoles', 'domaines viticoles', 'restaurants gastronomiques'],
    nearbyCities: ['tours', 'vernou-sur-brenne', 'rochecorbon'],
    specificContent: {
      intro: 'Vouvray, célèbre village viticole de 3 100 habitants au nord-est de Tours, est mondialement connu pour ses vins pétillants et tranquilles d\'exception. À 10 kilomètres de Tours, ce village pittoresque niché dans le coteau ligérien offre un cadre unique et authentique pour vos événements. Notre photobooth trouve naturellement sa place dans les domaines viticoles et caves troglodytes de Vouvray, apportant une animation moderne dans un environnement chargé d\'histoire.',
      weddingContext: 'Les mariages à Vouvray sont particulièrement recherchés pour leur ambiance viticole authentique et leur cadre d\'exception. Les domaines viticoles avec caves troglodytes creusées dans le tuffeau offrent des espaces uniques au monde, les restaurants gastronomiques surplombant les vignes proposent une vue imprenable sur la vallée de la Loire, et les espaces de réception en plein air entourés de vignes créent une atmosphère romantique incomparable. Les couples amateurs de vin, de patrimoine et d\'authenticité sont particulièrement séduits par Vouvray.',
      businessContext: 'Vouvray accueille des événements corporate premium axés sur l\'œnologie et le patrimoine viticole. Les séminaires incentive avec dégustations, les dîners d\'affaires dans les domaines prestigieux, et les team building vignerons offrent des expériences mémorables. L\'environnement viticole inspire la créativité, favorise les échanges de qualité, et laisse une impression durable aux participants. Notre photobooth capte ces moments de convivialité dans un cadre exceptionnel.',
      logisticsNote: 'À 10 kilomètres au nord-est de Tours, Vouvray est accessible en 15-20 minutes via la D952 longeant la Loire. Notre formule Complète inclut la livraison gratuite (zone <20km). Les routes sinueuses du vignoble nécessitent une conduite prudente, mais l\'accès aux domaines est généralement bien indiqué. Nous connaissons bien le village et ses différents domaines viticoles.'
    },
    localFAQ: [
      {
        question: 'Peut-on installer le photobooth dans les caves troglodytes de Vouvray ?',
        answer: 'Les caves troglodytes de Vouvray présentent un cadre unique et spectaculaire. L\'installation du photobooth y est techniquement possible sous réserve de quelques conditions : surface plane stable, éclairage suffisant (nous apportons notre propre éclairage), prise électrique accessible (ou rallonge depuis l\'extérieur), et espace de 3m x 2,5m. L\'humidité naturelle des caves n\'est généralement pas un problème pour notre matériel lors d\'un événement de quelques heures. Décrivez-nous votre cave, nous validerons la faisabilité.'
      },
      {
        question: 'Votre photobooth s\'harmonise-t-il avec l\'ambiance viticole de Vouvray ?',
        answer: 'Absolument ! Notre photobooth artisanal en bois véritable s\'intègre parfaitement dans les domaines viticoles de Vouvray. Le bois massif et la finition naturelle créent une cohérence esthétique avec les tonneaux, les chais, et l\'architecture traditionnelle des domaines. De nombreux couples organisent leur mariage à Vouvray précisément pour cette authenticité, et notre photobooth respecte cette recherche d\'élégance naturelle.'
      },
      {
        question: 'Les domaines viticoles de Vouvray sont-ils tous accessibles pour la livraison ?',
        answer: 'La plupart des domaines viticoles de Vouvray utilisés pour des réceptions sont bien accessibles. Certains domaines perchés sur le coteau ont des chemins en pente ou étroits, mais restent accessibles avec prudence. Lors de votre réservation, indiquez-nous le nom du domaine ou son adresse, nous vous confirmerons l\'accessibilité. Notre expérience des lieux viticoles de Vouvray nous permet d\'anticiper les éventuelles contraintes.'
      },
      {
        question: 'Proposez-vous des formules spéciales pour les événements œnologiques à Vouvray ?',
        answer: 'Nos formules standards (Digitale, Impression, Complète) s\'adaptent parfaitement aux événements œnologiques de Vouvray. Pour les mariages dans les domaines, nous recommandons la formule Complète qui inclut 400 impressions, le template personnalisé (idéal pour intégrer une thématique vigneronne), et la livraison gratuite. Nous pouvons personnaliser les accessoires photobooth sur la thématique du vin si vous le souhaitez.'
      },
      {
        question: 'Les routes viticoles de Vouvray compliquent-elles la livraison ?',
        answer: 'Les routes de Vouvray sont effectivement sinueuses et parfois étroites, typiques d\'un village viticole de coteau. Cependant, nous avons l\'habitude de ces conditions et adaptons notre conduite. Le trajet depuis Tours prend 15-20 minutes. La livraison reste simple et la formule Complète l\'inclut gratuitement. Nous recommandons simplement d\'indiquer précisément l\'adresse du domaine pour optimiser l\'itinéraire.'
      }
    ]
  },
  {
    slug: 'amboise',
    name: 'Amboise',
    postalCode: '37400',
    lat: 47.4128,
    lng: 0.9833,
    population: 13400,
    distanceFromTours: 25,
    description: 'Ville royale emblématique des châteaux de la Loire',
    neighborhoods: ['Centre historique', 'Plateau', 'Île d\'Or'],
    venueTypes: ['châteaux', 'domaines', 'hôtels de charme', 'restaurants gastronomiques'],
    nearbyCities: ['tours', 'nazelles-negron', 'montlouis-sur-loire'],
    specificContent: {
      intro: 'Amboise, ville royale de 13 400 habitants située à 25 kilomètres à l\'est de Tours, rayonne par son patrimoine exceptionnel et son histoire prestigieuse. Dominée par son château royal où séjourna Léonard de Vinci, cette cité historique offre un cadre unique pour vos événements les plus prestigieux. Notre photobooth premium s\'intègre dans les lieux d\'exception d\'Amboise, apportant une animation moderne respectueuse du standing historique de la ville.',
      weddingContext: 'Les mariages à Amboise sont synonymes de prestige, d\'histoire et d\'excellence. La ville et ses environs immédiats abritent des châteaux et domaines d\'exception offrant des cadres dignes de la royauté, des hôtels de charme installés dans des demeures historiques, et des restaurants gastronomiques où l\'art culinaire atteint des sommets. Les couples recherchant une ambiance royale, un cadre historique chargé d\'émotions, et un prestige indéniable trouvent à Amboise leur lieu idéal. Notre photobooth en bois artisanal s\'harmonise avec cette recherche d\'excellence.',
      businessContext: 'Amboise accueille des événements d\'entreprise haut de gamme dans des lieux prestigieux. Les séminaires résidentiels dans des châteaux-hôtels offrent des expériences immersives uniques, les conventions internationales bénéficient du rayonnement mondial d\'Amboise, et les incentives dans un cadre historique marquent durablement les esprits. L\'image de marque et le prestige associés à Amboise valorisent considérablement les événements corporate qui s\'y déroulent.',
      logisticsNote: 'À 25 kilomètres à l\'est de Tours, Amboise se situe au-delà de notre zone de livraison gratuite. Les frais de livraison sont de 45€ (zone 20-40km). Le trajet prend environ 25-30 minutes via la D751 longeant la Loire, offrant au passage de magnifiques paysages ligériens. Nous connaissons bien Amboise et ses nombreux lieux de réception, ce qui facilite la logistique de livraison et d\'installation.'
    },
    localFAQ: [
      {
        question: 'Votre photobooth est-il adapté aux châteaux et lieux prestigieux d\'Amboise ?',
        answer: 'Oui, absolument ! Notre photobooth a été précisément conçu pour s\'intégrer dans les lieux haut de gamme. La fabrication artisanale française en bois massif, l\'utilisation d\'un véritable appareil photo professionnel, et la finition soignée garantissent un niveau de qualité adapté aux châteaux et domaines prestigieux d\'Amboise. Nous intervenons régulièrement dans ces lieux d\'exception et le retour de nos clients confirme cette adéquation.'
      },
      {
        question: 'Les frais de livraison sont-ils justifiés pour Amboise ?',
        answer: 'Amboise se situant à 25km de Tours, au-delà de notre zone gratuite, des frais de livraison de 45€ s\'appliquent (sauf formule Complète qui les inclut partiellement via notre zone étendue). Ces frais couvrent le temps de trajet (25-30 minutes), l\'essence, et surtout la logistique spécifique aux lieux parfois complexes d\'accès à Amboise. Pour un événement dans un château, ce coût reste marginal face au budget global.'
      },
      {
        question: 'Peut-on installer le photobooth dans les jardins des châteaux d\'Amboise ?',
        answer: 'L\'installation en extérieur dans les jardins des châteaux d\'Amboise est techniquement possible sous certaines conditions : installation sous une structure couverte (pergola, orangerie, tente), surface plane et stable, accès à une prise électrique (rallonge longue si nécessaire), et protection contre le soleil direct et les intempéries. Les jardins des châteaux offrent souvent des emplacements magnifiques sous des structures déjà existantes. Décrivez-nous votre configuration, nous validerons.'
      },
      {
        question: 'Votre assistance technique fonctionne-t-elle même à Amboise ?',
        answer: 'Oui, notre assistance téléphonique 7j/7 fonctionne partout, y compris à Amboise. En cas de problème technique, nous pouvons vous guider à distance pour résoudre la situation rapidement. La distance (25km) nous permet aussi une intervention physique possible si absolument nécessaire, bien que nos photobooths soient très fiables. Nos clients d\'Amboise bénéficient du même niveau de service que ceux de Tours.'
      },
      {
        question: 'Les accès aux châteaux d\'Amboise sont-ils compliqués pour la livraison ?',
        answer: 'Les châteaux et domaines d\'Amboise utilisés pour des réceptions sont généralement bien accessibles, même si certains ont des allées historiques pavées ou des portails monumentaux. Lors de votre réservation, indiquez-nous précisément le nom du lieu ou son adresse. Nous connaissons la plupart des lieux de réception prestigieux d\'Amboise, ce qui nous permet d\'anticiper d\'éventuelles contraintes d\'accès et de prévoir l\'équipement adapté.'
      }
    ]
  },
  {
    slug: 'azay-le-rideau',
    name: 'Azay-le-Rideau',
    postalCode: '37190',
    lat: 47.2619,
    lng: 0.4658,
    population: 3500,
    distanceFromTours: 26,
    description: 'Village célèbre pour son château Renaissance',
    neighborhoods: ['Centre historique', 'Les Bas'],
    venueTypes: ['châteaux', 'domaines', 'restaurants'],
    nearbyCities: ['tours', 'villaines-les-rochers', 'saache'],
    specificContent: {
      intro: 'Azay-le-Rideau, village de 3 500 habitants situé à 26 kilomètres au sud-ouest de Tours, est mondialement célèbre pour son château Renaissance parmi les plus photographiés et admirés de France. Ce joyau du Val de Loire, avec son château émergeant des eaux de l\'Indre dans un écrin de verdure, offre un cadre enchanteur et romantique pour vos événements les plus précieux. Notre photobooth s\'intègre dans ce décor féerique, capturant des souvenirs dans un environnement d\'exception.',
      weddingContext: 'Les mariages à Azay-le-Rideau s\'inscrivent dans un cadre féerique et romantique digne d\'un conte de fées. Le château Renaissance et ses jardins à la française, les domaines avec parcs arborés centenaires, et les restaurants élégants avec vues sur l\'Indre créent une ambiance magique et intemporelle. Les couples recherchant un mariage de rêve, dans un cadre historique et naturel exceptionnel, trouvent à Azay-le-Rideau leur lieu idéal. Notre photobooth capture ces moments précieux dans un environnement unique.',
      businessContext: 'Azay-le-Rideau accueille des événements corporate premium dans ses lieux d\'exception. Les séminaires créatifs dans des cadres inspirants, les retraites dirigeantes dans des domaines prestigieux, et les conventions dans un environnement historique unique offrent des expériences mémorables. L\'image associée à Azay-le-Rideau valorise considérablement les événements d\'entreprise et crée une impression durable auprès des participants.',
      logisticsNote: 'À 26 kilomètres au sud-ouest de Tours, Azay-le-Rideau nécessite des frais de livraison de 45€ (zone 20-40km). Le trajet prend environ 30 minutes via la D751 puis D17, à travers de magnifiques paysages de campagne tourangelle et le long de l\'Indre. Nous connaissons bien le village et ses lieux de réception, facilitant la logistique de livraison dans ce secteur rural.'
    },
    localFAQ: [
      {
        question: 'Le photobooth peut-il être installé dans le parc du château d\'Azay-le-Rideau ?',
        answer: 'Le château d\'Azay-le-Rideau étant un monument national géré par le Centre des monuments nationaux, l\'organisation d\'événements privés dans le château lui-même ou son parc est soumise à des autorisations spécifiques et généralement réservée à des événements exceptionnels. Cependant, de nombreux domaines privés et lieux de réception autour d\'Azay-le-Rideau offrent des cadres tout aussi magnifiques où notre photobooth s\'installe sans contrainte administrative particulière.'
      },
      {
        question: 'Votre photobooth convient-il à l\'ambiance romantique d\'Azay-le-Rideau ?',
        answer: 'Absolument ! Notre photobooth artisanal en bois véritable s\'harmonise parfaitement avec l\'ambiance romantique et historique d\'Azay-le-Rideau. La fabrication française en bois massif, la finition soignée, et l\'élégance de l\'ensemble créent une cohérence esthétique avec les châteaux Renaissance et les domaines patrimoniaux du secteur. De nombreux couples choisissent notre service précisément pour cette adéquation avec leur recherche d\'élégance.'
      },
      {
        question: 'Les routes pour accéder à Azay-le-Rideau sont-elles un problème pour la livraison ?',
        answer: 'Les routes vers Azay-le-Rideau sont de bonne qualité et bien entretenues. Le trajet depuis Tours (26km, environ 30 minutes) traverse de beaux paysages mais ne présente pas de difficulté particulière. Certains domaines peuvent avoir des allées privées non goudronnées, mais nous adaptons notre approche. Indiquez-nous l\'adresse précise de votre lieu lors de la réservation, nous validerons l\'accessibilité.'
      },
      {
        question: 'Le tarif de livraison à Azay-le-Rideau est-il négociable ?',
        answer: 'Nos tarifs de livraison sont fixes et transparents : 45€ pour la zone 20-40km (dont fait partie Azay-le-Rideau). Ces frais couvrent les coûts réels de déplacement et le temps mobilisé. La formule Complète offre un excellent rapport qualité-prix pour les événements à Azay-le-Rideau car elle inclut 400 impressions, le template personnalisé, et absorbe une partie des frais de livraison. Nous ne pratiquons pas de négociation au cas par cas pour garantir l\'équité entre tous nos clients.'
      },
      {
        question: 'Quels sont les lieux de réception populaires à Azay-le-Rideau où vous intervenez ?',
        answer: 'À Azay-le-Rideau et ses environs, nous intervenons régulièrement dans plusieurs types de lieux : domaines privés avec parcs historiques, châteaux et demeures de caractère privatisables, restaurants gastronomiques avec salles de réception, et salles communales du village pour des événements plus simples. Chaque lieu a son charme propre. N\'hésitez pas à nous indiquer votre lieu, nous pourrons vous donner des conseils d\'installation spécifiques.'
      }
    ]
  },
  {
    slug: 'chinon',
    name: 'Chinon',
    postalCode: '37500',
    lat: 47.1667,
    lng: 0.2333,
    population: 8100,
    distanceFromTours: 48,
    description: 'Cité médiévale du sud Touraine, capitale du vin rouge',
    neighborhoods: ['Vieux Chinon', 'Saint-Jacques', 'Coteau Sainte-Radegonde'],
    venueTypes: ['forteresse', 'caves viticoles', 'domaines', 'restaurants'],
    nearbyCities: ['tours', 'richelieu', 'langeais'],
    specificContent: {
      intro: 'Chinon, cité médiévale de 8 100 habitants située à 48 kilomètres au sud-ouest de Tours, domine majestueusement la Vienne depuis sa forteresse royale millénaire. Cette ville chargée d\'histoire, capitale du vin rouge de Chinon réputé dans le monde entier, offre un cadre patrimonial et viticole exceptionnel. Notre photobooth s\'intègre dans les lieux historiques et domaines viticoles de Chinon, capturant des souvenirs dans un décor unique mariant pierre médiévale et vignobles généreux.',
      weddingContext: 'Les mariages à Chinon bénéficient d\'un cadre médiéval unique et d\'une ambiance viticole authentique. La forteresse royale dominant la ville offre une toile de fond spectaculaire, les domaines viticoles avec caves creusées dans le tuffeau proposent des espaces uniques, les restaurants installés dans des bâtisses historiques créent une atmosphère chargée d\'histoire, et les espaces de réception avec vues sur la Vienne et la forteresse sont inoubliables. Les couples amateurs de patrimoine, de vin, et d\'authenticité historique sont conquis par Chinon.',
      businessContext: 'Chinon accueille des événements d\'entreprise dans une ambiance historique et viticole très marquée. Les séminaires patrimoine et vin combinent culture et gastronomie, les team building médiévaux et vignerons offrent des expériences immersives originales, et les conventions dans des lieux atypiques (caves, forteresse, domaines) créent un cadre mémorable. L\'identité forte de Chinon marque durablement les participants.',
      logisticsNote: 'À 48 kilomètres au sud-ouest de Tours, Chinon se trouve dans notre zone de livraison étendue (jusqu\'à 60km). Les frais de livraison sont de 60€. Le trajet prend environ 45 minutes via l\'A85 puis la D751, traversant le vignoble chinonais. Nous connaissons bien cette cité historique et ses lieux de réception, ce qui facilite la planification logistique malgré la distance.'
    },
    localFAQ: [
      {
        question: 'La distance de Chinon depuis Tours est-elle un problème pour la fiabilité ?',
        answer: 'Non, Chinon se situe à 48km de Tours, dans notre zone de service étendue (jusqu\'à 60km). La distance n\'affecte pas la fiabilité de notre service. Nous testons et vérifions chaque photobooth avant livraison, quel que soit le lieu. L\'assistance téléphonique 7j/7 fonctionne parfaitement à Chinon. Les frais de livraison à 60€ reflètent simplement le temps et le carburant nécessaires pour ce trajet.'
      },
      {
        question: 'Peut-on installer le photobooth dans les caves troglodytes de Chinon ?',
        answer: 'Les caves troglodytes de Chinon, creusées dans le tuffeau, offrent un cadre spectaculaire et unique. L\'installation du photobooth y est techniquement possible sous conditions : surface plane et stable, éclairage suffisant (nous fournissons notre propre éclairage), prise électrique accessible, et espace de 3m x 2,5m. L\'humidité naturelle des caves n\'est généralement pas problématique pour un événement de quelques heures. Décrivez-nous votre cave, nous validerons la faisabilité technique.'
      },
      {
        question: 'Le photobooth s\'intègre-t-il dans l\'ambiance médiévale de Chinon ?',
        answer: 'Oui, notre photobooth artisanal en bois véritable s\'harmonise avec l\'architecture médiévale et les pierres de tuffeau de Chinon. Le bois massif et la finition naturelle créent une cohérence esthétique avec les poutres apparentes, les voûtes en pierre, et le mobilier ancien typiques des lieux historiques chinonais. Les couples choisissant Chinon pour son authenticité apprécient particulièrement cette harmonie.'
      },
      {
        question: 'Y a-t-il un délai de réservation plus long pour Chinon ?',
        answer: 'Chinon étant une destination prisée pour les mariages patrimoniaux et viticoles, les lieux se réservent très tôt, particulièrement pour les weekends de mai à septembre. Nous recommandons de réserver notre photobooth 10 à 12 semaines à l\'avance pour garantir la disponibilité. Cette anticipation nous permet également de bien planifier la logistique spécifique à cette distance.'
      },
      {
        question: 'Les vignobles de Chinon sont-ils accessibles pour la livraison ?',
        answer: 'Les domaines viticoles de Chinon sont généralement bien accessibles, même si certains ont des chemins de vignes non goudronnés ou des pentes. Nous avons l\'expérience des terroirs viticoles et adaptons notre approche. Lors de votre réservation, indiquez-nous le nom du domaine ou son adresse précise, nous validerons l\'accessibilité et prévoyons l\'équipement adapté si nécessaire. Notre expérience du secteur de Chinon facilite cette logistique.'
      }
    ]
  },

  // P2 - Extension (4 villes supplémentaires)
  {
    slug: 'loches',
    name: 'Loches',
    postalCode: '37600',
    lat: 47.1281,
    lng: 0.9967,
    population: 6300,
    distanceFromTours: 42,
    description: 'Cité royale médiévale du sud-est Touraine',
    neighborhoods: ['Cité médiévale', 'Centre-ville', 'Beaulieu'],
    venueTypes: ['châteaux', 'domaines', 'salles historiques'],
    nearbyCities: ['tours', 'montresor', 'beaulieu-les-loches'],
    specificContent: {
      intro: 'Loches, cité royale de 6 300 habitants située à 42 kilomètres au sud-est de Tours, impressionne par son donjon médiéval massif et sa cité fortifiée remarquablement préservée. Cette ville d\'art et d\'histoire, labellis ée parmi les Plus Beaux Détours de France, offre un cadre patrimonial exceptionnel pour vos événements. Notre photobooth trouve sa place dans les lieux historiques de Loches, apportant une animation moderne dans un décor médiéval authentique.',
      weddingContext: 'Les mariages à Loches s\'inscrivent dans un décor médiéval authentique et puissant. La cité royale avec son donjon imposant et ses remparts, les domaines historiques des environs, et les restaurants installés dans des maisons anciennes en pierre de tuffeau créent une atmosphère historique unique et impressionnante. Les couples passionnés de patrimoine, d\'histoire médiévale, et de lieux chargés d\'émotions trouvent à Loches un cadre exceptionnel qui marque les esprits.',
      businessContext: 'Loches accueille des événements d\'entreprise à caractère culturel et historique fort. Les séminaires incentive patrimoine dans la cité médiévale, les team building avec animations historiques, et les conventions dans des lieux chargés d\'histoire créent des expériences mémorables. L\'identité médiévale puissante de Loches et son patrimoine reconnu valorisent considérablement les événements corporate qui s\'y déroulent.',
      logisticsNote: 'À 42 kilomètres au sud-est de Tours, Loches est desservie avec des frais de livraison de 60€ (zone jusqu\'à 60km). Le trajet prend environ 40 minutes via la D943 traversant la campagne vallonnée du sud Touraine. Nous connaissons bien Loches et ses lieux de réception historiques, ce qui facilite la planification de livraison dans cette cité médiévale aux ruelles parfois étroites.'
    },
    localFAQ: [
      {
        question: 'Peut-on installer le photobooth dans la cité médiévale de Loches ?',
        answer: 'La cité médiévale de Loches, site historique protégé, accueille des événements privés dans certains espaces dédiés sous conditions. L\'installation de notre photobooth est techniquement possible dans les salles de réception de la cité, sous réserve d\'autorisation préalable du gestionnaire du site. Les ruelles pavées et les accès parfois étroits nécessitent une planification logistique précise. Indiquez-nous votre lieu exact, nous validerons la faisabilité.'
      },
      {
        question: 'Le photobooth en bois convient-il à l\'architecture médiévale de Loches ?',
        answer: 'Oui, parfaitement ! Notre photobooth artisanal en bois massif s\'harmonise magnifiquement avec l\'architecture médiévale en pierre de tuffeau de Loches. Le bois naturel, les poutres apparentes typiques de notre borne, et la finition artisanale créent une cohérence esthétique avec les lieux historiques. Les couples qui choisissent Loches pour son authenticité médiévale apprécient particulièrement cette harmonie entre notre matériel et le décor patrimonial.'
      },
      {
        question: 'Les frais de livraison de 60€ pour Loches sont-ils fixes ?',
        answer: 'Oui, les frais de livraison pour Loches (42km de Tours) sont fixes à 60€. Ces frais couvrent le temps de trajet (40 minutes), le carburant, et la logistique spécifique à cette distance. Ils s\'appliquent aux formules Digitale et Impression. La formule Complète, bien que ne couvrant pas entièrement ces frais, offre le meilleur rapport qualité-prix pour Loches avec ses 400 impressions, son template personnalisé, et sa valeur globale.'
      },
      {
        question: 'La distance affecte-t-elle la qualité du service à Loches ?',
        answer: 'Non, la distance de Loches (42km) n\'affecte pas la qualité de notre service. Chaque photobooth est testé avant livraison, quel que soit le lieu. L\'assistance téléphonique 7j/7 fonctionne normalement à Loches. La récupération des photos via lien de téléchargement est identique partout. Seuls les frais de livraison reflètent la distance. Nos clients de Loches bénéficient du même niveau d\'attention et de professionnalisme.'
      },
      {
        question: 'Y a-t-il des lieux de réception recommandés à Loches pour le photobooth ?',
        answer: 'À Loches, nous intervenons dans plusieurs types de lieux : salles de réception de la cité médiévale (sous autorisation), domaines historiques des environs, restaurants avec salles dans des bâtisses anciennes, et salles communales. Chaque lieu a ses spécificités. La cité médiévale offre un cachet unique mais nécessite une planification précise. Les domaines alentours combinent patrimoine et facilité logistique. Décrivez-nous votre projet, nous vous conseillerons.'
      }
    ]
  },
  {
    slug: 'langeais',
    name: 'Langeais',
    postalCode: '37130',
    lat: 47.3256,
    lng: 0.4069,
    population: 4200,
    distanceFromTours: 24,
    description: 'Village pittoresque célèbre pour son château médiéval',
    neighborhoods: ['Centre-bourg', 'Saint-Laurent'],
    venueTypes: ['château', 'domaines', 'salles communales'],
    nearbyCities: ['tours', 'cinq-mars-la-pile', 'brehemont'],
    specificContent: {
      intro: 'Langeais, village de 4 200 habitants situé à 24 kilomètres à l\'ouest de Tours, est célèbre pour son imposant château médiéval dominant la Loire. Ce bourg pittoresque allie le charme d\'une forteresse médiévale authentique et la douceur des paysages ligériens. Notre photobooth s\'intègre dans les événements de Langeais, apportant une animation moderne dans un cadre historique préservé au bord du plus long fleuve de France.',
      weddingContext: 'Les mariages à Langeais profitent d\'un cadre médiéval authentique associé aux paysages de Loire. Le château fort avec son pont-levis fonctionnel et ses salles historiques, les domaines des environs avec vues sur le fleuve, et les restaurants de caractère dans le bourg médiéval offrent une ambiance historique et romantique unique. Les couples recherchant authenticité médiévale, patrimoine ligérien, et atmosphère intimiste apprécient particulièrement Langeais.',
      businessContext: 'Langeais accueille des événements corporate dans un cadre historique et naturel inspirant. Les séminaires patrimoine dans le château ou les domaines, les team building axés sur l\'histoire médiévale et les bords de Loire, et les incentives combinant culture et nature offrent des expériences mémorables. L\'environnement unique de Langeais, entre château fort et fleuve royal, marque les esprits.',
      logisticsNote: 'À 24 kilomètres à l\'ouest de Tours, Langeais nécessite des frais de livraison de 45€ (zone 20-40km). Le trajet prend environ 25 minutes via la D952 longeant la rive sud de la Loire, offrant de belles vues sur le fleuve et ses paysages préservés. Nous connaissons bien Langeais et ses lieux de réception, facilitant la logistique de livraison dans ce village historique.'
    },
    localFAQ: [
      {
        question: 'Peut-on installer le photobooth dans le château de Langeais ?',
        answer: 'Le château de Langeais, monument historique géré par un propriétaire privé ouvert à la location pour événements, peut accueillir des photobooths dans ses salles de réception. L\'installation nécessite une coordination avec le gestionnaire du château et le respect du règlement intérieur du lieu. Les salles voûtées médiévales offrent un cadre spectaculaire. Lors de votre réservation, indiquez-nous que votre réception se tient au château, nous coordonnerons la logistique.'
      },
      {
        question: 'Le photobooth s\'intègre-t-il dans l\'ambiance médiévale de Langeais ?',
        answer: 'Oui, notre photobooth artisanal en bois massif s\'harmonise avec l\'architecture médiévale de Langeais. La fabrication en bois véritable, la finition naturelle, et l\'aspect artisanal créent une cohérence avec les poutres, les pierres apparentes, et le mobilier ancien des lieux historiques. Les couples choisissant Langeais pour son authenticité médiévale apprécient que notre photobooth respecte cette recherche d\'harmonie esthétique.'
      },
      {
        question: 'Les bords de Loire près de Langeais permettent-ils une installation extérieure ?',
        answer: 'Les bords de Loire près de Langeais offrent des cadres magnifiques pour des réceptions en extérieur. Cependant, installer notre photobooth directement en bord de fleuve présente des contraintes : surface souvent non plane, risque d\'intempéries, nécessité d\'une prise électrique éloignée. Nous recommandons fortement une installation sous une structure couverte (tente, pergola) avec une surface stabilisée. Les domaines avec terrasses aménagées près de la Loire offrent le meilleur compromis.'
      },
      {
        question: 'Quel est le délai de réservation recommandé pour Langeais ?',
        answer: 'Langeais étant une destination prisée pour les mariages patrimoniaux, particulièrement au château, les weekends de haute saison (mai à septembre) se réservent très tôt. Nous recommandons 8 à 10 semaines d\'avance pour garantir la disponibilité de notre photobooth. Les couples qui choisissent le château de Langeais planifient généralement leur mariage avec beaucoup d\'anticipation, donc réserver tôt est cohérent.'
      },
      {
        question: 'La livraison à Langeais est-elle compliquée par les ruelles du village ?',
        answer: 'Le centre de Langeais a effectivement des ruelles étroites typiques d\'un bourg médiéval. Cependant, les lieux de réception (château, domaines, salles) sont généralement accessibles par des voies suffisamment larges ou disposent d\'accès de service. Lors de votre réservation, indiquez-nous l\'adresse précise de votre lieu, nous validerons l\'accessibilité. Notre expérience des bourgs historiques nous permet d\'anticiper ces contraintes.'
      }
    ]
  },
  {
    slug: 'montbazon',
    name: 'Montbazon',
    postalCode: '37250',
    lat: 47.2872,
    lng: 0.7169,
    population: 4100,
    distanceFromTours: 12,
    description: 'Bourg au sud de Tours, célèbre pour son donjon et sa gastronomie',
    neighborhoods: ['Centre-bourg', 'Les Gués'],
    venueTypes: ['châteaux-hôtels', 'restaurants gastronomiques', 'domaines'],
    nearbyCities: ['tours', 'veigne', 'monts'],
    specificContent: {
      intro: 'Montbazon, bourg de 4 100 habitants situé à 12 kilomètres au sud de Tours, se distingue par son donjon roman du XIe siècle dominant la vallée de l\'Indre et sa réputation gastronomique exceptionnelle. Cette commune allie patrimoine médiéval, excellence culinaire avec ses restaurants réputés, et cadre verdoyant au bord de l\'Indre. Notre photobooth s\'intègre dans les lieux raffinés de Montbazon, apportant une animation ludique dans des cadres souvent gastronomiques.',
      weddingContext: 'Les mariages à Montbazon bénéficient d\'un cadre élégant combinant patrimoine et gastronomie. La commune abrite des châteaux-hôtels prestigieux offrant des prestations haut de gamme, des restaurants étoilés avec jardins et terrasses surplombant l\'Indre, et des domaines raffinés dans un écrin de verdure. Les couples recherchant excellence culinaire, cadre historique, et service premium trouvent à Montbazon un lieu idéal. Notre photobooth premium correspond à ces standards élevés.',
      businessContext: 'Montbazon accueille des événements d\'entreprise haut de gamme dans ses établissements gastronomiques et châteaux-hôtels. Les séminaires résidentiels avec hébergement de qualité, les dîners d\'affaires prestigieux dans des restaurants renommés, et les conventions dans des lieux d\'exception offrent des expériences mémorables. La réputation gastronomique de Montbazon et son cadre raffiné valorisent les événements corporate.',
      logisticsNote: 'À 12 kilomètres au sud de Tours, Montbazon est couverte par notre livraison gratuite (formule Complète, zone <20km). Le trajet prend environ 15 minutes via la D910 traversant la vallée de l\'Indre. L\'accès est direct et facile. Nous connaissons bien Montbazon et ses établissements gastronomiques, ce qui facilite la coordination de livraison dans ce bourg réputé.'
    },
    localFAQ: [
      {
        question: 'Votre photobooth est-il adapté aux restaurants gastronomiques de Montbazon ?',
        answer: 'Oui, absolument ! Notre photobooth a été conçu pour s\'intégrer dans des lieux haut de gamme. La fabrication artisanale française en bois massif, le véritable appareil photo professionnel, et la finition soignée garantissent un niveau de qualité adapté aux restaurants gastronomiques et châteaux-hôtels prestigieux de Montbazon. Nous intervenons régulièrement dans ces établissements et nos clients apprécient cette adéquation qualitative.'
      },
      {
        question: 'La livraison est-elle vraiment gratuite à Montbazon ?',
        answer: 'Oui, avec notre formule Complète, la livraison à Montbazon est entièrement gratuite. Cette commune se situe à 12km de Tours, donc dans notre zone de livraison incluse (jusqu\'à 20km). Si vous choisissez la formule Digitale ou Impression, les frais de livraison sont de 39€. La proximité de Montbazon avec Tours permet une livraison rapide et un service très réactif.'
      },
      {
        question: 'Les châteaux-hôtels de Montbazon ont-ils des contraintes pour le photobooth ?',
        answer: 'Les châteaux-hôtels de Montbazon, établissements haut de gamme, ont généralement des espaces bien dimensionnés et équipés pour accueillir notre photobooth sans difficulté. Les points à vérifier restent classiques : surface plane, prise électrique accessible, et espace de 3m x 2,5m. Ces établissements ayant l\'habitude d\'événements avec prestations multiples, ils facilitent généralement l\'installation. Nous pouvons coordonner directement avec votre lieu si besoin.'
      },
      {
        question: 'Proposez-vous un service premium pour les événements haut de gamme à Montbazon ?',
        answer: 'Notre formule Complète répond aux exigences des événements haut de gamme de Montbazon : matériel artisanal français premium, véritable appareil photo professionnel, 400 impressions sur papier de qualité, template entièrement personnalisé à votre identité visuelle, livraison gratuite, et assistance 7j/7. Cette formule offre le niveau de prestation attendu dans les établissements prestigieux de Montbazon.'
      },
      {
        question: 'Peut-on installer le photobooth dans les jardins avec vue sur l\'Indre ?',
        answer: 'Les jardins avec vue sur l\'Indre offrent un cadre magnifique pour une installation extérieure. Cependant, le photobooth doit être protégé des intempéries et du soleil direct. Nous recommandons une installation sous pergola, orangerie, ou tente élégante. Une prise électrique accessible est indispensable. Les établissements de Montbazon disposent généralement de structures adaptées. Décrivez-nous votre configuration, nous validerons la faisabilité.'
      }
    ]
  },
  {
    slug: 'sainte-maure-de-touraine',
    name: 'Sainte-Maure-de-Touraine',
    postalCode: '37800',
    lat: 47.1128,
    lng: 0.6217,
    population: 4200,
    distanceFromTours: 34,
    description: 'Capitale du célèbre fromage de chèvre AOC',
    neighborhoods: ['Centre-ville', 'La Brosse'],
    venueTypes: ['salles communales', 'fermes', 'restaurants'],
    nearbyCities: ['tours', 'draché', 'nouâtre'],
    specificContent: {
      intro: 'Sainte-Maure-de-Touraine, bourg de 4 200 habitants situé à 34 kilomètres au sud de Tours, est mondialement connu pour son fromage de chèvre AOC à la paille traversante emblématique. Cette commune agricole dynamique, au cœur d\'un terroir fromager réputé, offre un cadre champêtre authentique et gourmand. Notre photobooth trouve sa place dans les événements de Sainte-Maure, apportant une animation moderne dans un environnement rural et convivial.',
      weddingContext: 'Les mariages à Sainte-Maure-de-Touraine s\'inscrivent dans une ambiance champêtre, authentique et gourmande. Les salles communales fonctionnelles du bourg, les fermes rénovées offrant des espaces rustiques charmants, et les restaurants mettant en valeur les produits du terroir local créent une atmosphère conviviale et chaleureuse. Les couples amateurs de terroir, d\'authenticité rurale, et de gastronomie locale apprécient particulièrement Sainte-Maure-de-Touraine.',
      businessContext: 'Sainte-Maure-de-Touraine accueille des événements d\'entreprise axés sur l\'authenticité, les produits locaux, et le terroir. Les team building gastronomiques avec découverte du fromage de chèvre AOC, les séminaires au vert dans un environnement rural préservé, et les incentives autour du terroir tourangeau offrent des expériences originales et mémorables. L\'identité forte liée au fromage crée un cadre unique.',
      logisticsNote: 'À 34 kilomètres au sud de Tours, Sainte-Maure-de-Touraine nécessite des frais de livraison de 45€ (zone 20-40km). Le trajet prend environ 35 minutes via l\'A10 sortie Sainte-Maure, traversant la campagne agricole du sud Touraine. Nous connaissons bien ce secteur rural et ses lieux de réception, facilitant la planification de livraison dans cette commune du terroir tourangeau.'
    },
    localFAQ: [
      {
        question: 'Livrez-vous dans les fermes rénovées autour de Sainte-Maure-de-Touraine ?',
        answer: 'Oui, nous livrons volontiers dans les fermes rénovées autour de Sainte-Maure-de-Touraine. Ces lieux champêtres offrent généralement un cadre authentique très apprécié pour les mariages. Lors de votre réservation, indiquez-nous l\'adresse précise de la ferme. Nous validerons l\'accessibilité (certaines fermes ont des chemins de terre) et prévoyons l\'équipement adapté si nécessaire. Notre expérience des lieux ruraux facilite cette logistique.'
      },
      {
        question: 'Le photobooth convient-il à l\'ambiance champêtre de Sainte-Maure ?',
        answer: 'Absolument ! Notre photobooth artisanal en bois véritable s\'intègre parfaitement dans les ambiances champêtres et rustiques. À Sainte-Maure-de-Touraine, où les mariages et événements ont souvent une thématique terroir et authenticité, le bois massif et la finition naturelle de notre borne s\'harmonisent idéalement avec les granges rénovées, les fermes, et les décors campagnards.'
      },
      {
        question: 'Les frais de livraison sont-ils fixes pour Sainte-Maure-de-Touraine ?',
        answer: 'Oui, les frais de livraison pour Sainte-Maure-de-Touraine (34km de Tours) sont fixes à 45€ (zone 20-40km). Ces frais couvrent le temps de trajet (35 minutes), le carburant, et la logistique. La formule Complète offre le meilleur rapport qualité-prix avec ses 400 impressions, son template personnalisé, et sa valeur globale qui relativise largement les frais de livraison.'
      },
      {
        question: 'Peut-on thématiser le photobooth sur le fromage de chèvre pour un événement à Sainte-Maure ?',
        answer: 'Oui, nous pouvons créer un template personnalisé intégrant une thématique fromage de chèvre ou terroir pour votre événement à Sainte-Maure-de-Touraine. Le template peut inclure des éléments graphiques liés au fromage, à la paille emblématique, ou au terroir local. Nous pouvons également adapter les accessoires photobooth si vous souhaitez accentuer cette thématique. Cette personnalisation est incluse dans la formule Complète ou disponible à 10€ pour les autres formules.'
      },
      {
        question: 'Les routes de campagne de Sainte-Maure compliquent-elles la livraison ?',
        answer: 'Les routes de campagne autour de Sainte-Maure-de-Touraine sont généralement de bonne qualité, bien que certaines fermes soient accessibles par des chemins ruraux. Nous avons l\'expérience de ces environnements champêtres et adaptons notre approche. L\'essentiel est de nous indiquer l\'adresse précise lors de la réservation. Le trajet principal depuis Tours via l\'A10 est rapide et direct (35 minutes), la dernière partie pouvant nécessiter plus de prudence selon le lieu exact.'
      }
    ]
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getCitiesByPriority(priority: 'P0' | 'P1' | 'P2'): City[] {
  const p0Cities = ['joue-les-tours', 'saint-avertin', 'chambray-les-tours', 'la-riche', 'saint-cyr-sur-loire', 'saint-pierre-des-corps', 'ballan-mire', 'fondettes'];
  const p1Cities = ['vouvray', 'amboise', 'azay-le-rideau', 'chinon'];
  const p2Cities = ['loches', 'langeais', 'montbazon', 'sainte-maure-de-touraine'];
  
  let slugs: string[] = [];
  if (priority === 'P0') slugs = p0Cities;
  else if (priority === 'P1') slugs = p1Cities;
  else slugs = p2Cities;
  
  return cities.filter(city => slugs.includes(city.slug));
}

export function getAllCitiesForSitemap(): City[] {
  return cities;
}