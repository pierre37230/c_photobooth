import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Location Photobooth Mariage à Tours (37) | CPhotobooth',
  description: 'Louez un photobooth premium pour votre mariage à Tours et en Indre-et-Loire. 200 impressions incluses, installation simple, livraison possible. Devis rapide.',
  keywords: [
    'photobooth mariage Tours',
    'borne photo mariage 37',
    'location photobooth mariage Indre-et-Loire',
    'animation mariage Tours',
    'photobooth mariage Centre-Val de Loire',
    'borne photo mariage Tours',
    'location borne photo 37',
  ],
  alternates: {
    canonical: 'https://www.cphotobooth.fr/photobooth-mariage-tours',
  },
  openGraph: {
    title: 'Location Photobooth Mariage à Tours (37) | CPhotobooth',
    description: 'Louez un photobooth premium pour votre mariage à Tours et en Indre-et-Loire. 200 impressions incluses, installation simple, livraison possible.',
    url: 'https://www.cphotobooth.fr/photobooth-mariage-tours',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://www.cphotobooth.fr/images/photobooth-mariage.jpg',
        width: 1200,
        height: 630,
        alt: 'Photobooth mariage Tours',
      },
    ],
  },
};

export default function PhotoboothMariagePage() {
  const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.cphotobooth.fr/#organization',
    name: 'CPhotobooth',
    image: 'https://www.cphotobooth.fr/images/hero.jpg',
    url: 'https://www.cphotobooth.fr',
    telephone: siteData.contact.phone,
    email: siteData.contact.email,
    priceRange: '229€-339€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tours',
      addressRegion: 'Centre-Val de Loire',
      postalCode: '37000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.3941,
      longitude: 0.6848,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Tours',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Indre-et-Loire',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '19:00',
    },
  };

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Location de photobooth pour mariage',
    provider: {
      '@id': 'https://www.cphotobooth.fr/#organization',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 47.3941,
        longitude: 0.6848,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Formules photobooth mariage',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Formule Digitale Mariage',
            description: 'Location photobooth weekend avec photos numériques illimitées',
          },
          price: '229',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Formule Impression Mariage',
            description: 'Location photobooth weekend avec 200 impressions papier incluses',
          },
          price: '289',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Formule Complète Mariage',
            description: 'Location photobooth weekend avec 400 impressions et template personnalisé',
          },
          price: '339',
          priceCurrency: 'EUR',
        },
      ],
    },
  };

  const jsonLdFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Combien coûte une location de photobooth pour un mariage à Tours ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nos tarifs pour la location de photobooth mariage à Tours démarrent à 229€ pour la formule Digitale (weekend 48h, photos illimitées en ligne). La formule Impression à 289€ inclut 200 impressions papier instantanées. Notre formule Complète à 339€ comprend 400 impressions, un template personnalisé avec vos prénoms, et la livraison gratuite jusqu\'à 20km de Tours. Ces tarifs incluent l\'installation, le guide complet, et l\'assistance téléphonique 7j/7 pendant votre événement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Livrez-vous dans toute l\'Indre-et-Loire pour les mariages ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous livrons votre photobooth dans tout le département de l\'Indre-et-Loire (37). Nous intervenons à Tours, Joué-lès-Tours, Saint-Pierre-des-Corps, Amboise, Chinon, Loches, Montbazon, Azay-le-Rideau et toutes les communes du 37. La livraison jusqu\'à 20km de Tours est incluse dans notre formule Complète. Au-delà, les frais de livraison sont de 39€ (<20km), 45€ (20-40km) ou 60€ (jusqu\'à 60km). Nous pouvons également intervenir dans les départements limitrophes pour votre mariage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien d\'espace faut-il prévoir pour installer le photobooth lors d\'un mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour une installation optimale de notre photobooth lors de votre mariage, nous recommandons un espace de 3 mètres de large sur 2,5 mètres de profondeur minimum. Cet espace permet à vos invités de se positionner confortablement devant la borne et de prendre des photos de groupe sans être à l\'étroit. Le photobooth en lui-même mesure environ 50cm de large et nécessite simplement une surface plane et stable. Si vous disposez d\'un espace plus restreint, contactez-nous pour étudier les possibilités d\'adaptation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le photobooth nécessite-t-il une alimentation électrique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, notre photobooth nécessite une prise électrique standard 220V pour fonctionner. Nous fournissons une rallonge électrique de 10 mètres qui permet une installation flexible dans votre salle de réception. Le photobooth consomme très peu d\'électricité et peut rester branché toute la journée sans problème. Assurez-vous simplement qu\'une prise soit accessible à proximité de l\'emplacement souhaité. En cas de doute sur l\'installation électrique de votre lieu de réception, n\'hésitez pas à nous contacter.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on personnaliser les impressions photo pour notre mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolument ! Nous proposons un service de personnalisation complet des impressions photo pour votre mariage. Vous pouvez ajouter vos prénoms, la date de votre mariage, un message personnalisé, votre logo ou motif favori sur le template des photos. Cette personnalisation est incluse dans notre formule Complète, ou disponible en option à 10€ pour les autres formules. Nous créons un design unique qui s\'intègre parfaitement au thème et aux couleurs de votre mariage. Les templates sont validés avec vous avant l\'événement pour garantir un rendu parfait.',
        },
      },
      {
        '@type': 'Question',
        name: 'Que se passe-t-il en cas de problème technique pendant le mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Votre tranquillité d\'esprit est notre priorité. En cas de problème technique pendant votre mariage, nous assurons une assistance téléphonique immédiate 7 jours sur 7. Notre équipe peut vous guider à distance pour résoudre la plupart des situations en quelques minutes. Si le problème persiste, nous intervenons sur place dans l\'heure ou nous remplaçons le matériel défectueux. Tous nos photobooths sont testés et vérifiés avant chaque location. Nous disposons également d\'un stock de matériel de remplacement pour garantir le bon déroulement de votre événement.',
        },
      },
      {
        '@type': 'Question',
        name: 'Combien de photos peut-on prendre pendant un mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Avec toutes nos formules, les photos sont illimitées pendant toute la durée de votre location (48h pour un weekend de mariage). Vos invités peuvent se faire photographier autant de fois qu\'ils le souhaitent, sans aucune restriction. En moyenne, lors d\'un mariage avec 100 invités, entre 300 et 600 photos sont prises. Chaque session photo dure environ 30 secondes, permettant un flux continu sans temps d\'attente. Toutes les photos prises sont ensuite mises à votre disposition via un lien de téléchargement sécurisé ou par email.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on installer le photobooth en extérieur pour un mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'L\'installation en extérieur est possible sous certaines conditions. Le photobooth doit être protégé des intempéries (pluie, vent fort, soleil direct intense) et nécessite une surface plane et stable. Nous recommandons fortement l\'installation sous un barnum, une tente ou une pergola. Une prise électrique doit également être accessible. Pour les mariages en extérieur, nous conseillons de prévoir un plan B en intérieur en cas de conditions météo défavorables. L\'installation en extérieur fonctionne particulièrement bien pour les cocktails et vins d\'honneur en journée, puis un déplacement en intérieur pour la soirée.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quel est le délai de réservation pour un photobooth de mariage à Tours ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous recommandons de réserver votre photobooth au minimum 2 mois à l\'avance pour les mariages, surtout pour les weekends de mai à septembre qui sont très demandés. Cette anticipation vous garantit la disponibilité et vous permet de bénéficier de notre accompagnement personnalisé dans la préparation de votre événement. Pour les mariages hors saison (octobre à avril), un délai de 3 à 4 semaines est généralement suffisant. En cas de besoin urgent, contactez-nous même à la dernière minute, nous ferons notre maximum pour vous accommoder.',
        },
      },
      {
        '@type': 'Question',
        name: 'Le photobooth remplace-t-il le photographe de mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non, le photobooth ne remplace pas votre photographe professionnel mais le complète parfaitement. Votre photographe capture les moments officiels, les émotions et l\'ambiance générale de votre mariage avec un œil artistique. Le photobooth, lui, offre une animation ludique qui permet à vos invités de créer leurs propres souvenirs spontanés et amusants, souvent avec des accessoires. Les deux prestations sont complémentaires : le photographe documente votre histoire, le photobooth crée l\'interaction et l\'amusement. Beaucoup de couples choisissent d\'avoir les deux pour une couverture complète de leur mariage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Fournissez-vous des accessoires pour le photobooth mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous fournissons un kit d\'accessoires de base avec chaque location : chapeaux, lunettes fantaisie, moustaches, panneaux avec messages amusants, etc. Ces accessoires ajoutent une touche ludique et créative aux photos de vos invités. Si vous souhaitez des accessoires personnalisés ou thématiques (champêtre, bohème, vintage...), nous pouvons vous conseiller des fournisseurs ou vous proposer des options sur mesure. Vous pouvez également apporter vos propres accessoires pour créer une ambiance unique qui correspond au thème de votre mariage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Comment récupérer toutes les photos après le mariage ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Après votre mariage, vous recevez toutes les photos par deux moyens : un lien de téléchargement sécurisé envoyé par email dans les 48h suivant l\'événement, vous permettant de télécharger l\'intégralité des photos en haute qualité. Avec nos formules Premium et Complète, vous recevez également une clé USB contenant toutes les photos. Vous pouvez ensuite partager ce lien avec vos invités pour qu\'ils puissent télécharger les photos où ils apparaissent. Les photos restent disponibles en ligne pendant 6 mois minimum. Nous conservons également une sauvegarde pendant 1 an.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      <article>
        <section className="section">
          <div className="container">
            <div className="section-title">
              <h1>Location Photobooth Mariage à Tours</h1>
              <p>Immortalisez votre jour J avec une borne photo premium fabriquée en France</p>
            </div>

            {/* SECTION PRINCIPALE ENRICHIE SEO */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Pourquoi louer un photobooth pour votre mariage à Tours ?</h2>
              
              <p>
                Vous organisez votre <strong>mariage à Tours</strong> ou dans l'<strong>Indre-et-Loire</strong> et cherchez une animation originale qui marquera les esprits ? 
                La <strong>location d'un photobooth</strong> s'impose comme l'une des animations phares des mariages modernes dans la région Centre-Val de Loire. 
                Bien plus qu'un simple appareil photo automatisé, notre <strong>borne photo premium</strong> devient le point de rendez-vous incontournable de votre réception, 
                créant une ambiance conviviale et des souvenirs instantanés que vos invités chériront longtemps après votre grand jour.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Une animation qui complète parfaitement votre photographe</h3>
              
              <p>
                Votre <strong>photographe de mariage</strong> capture avec art les moments officiels, les émotions fortes et l'ambiance générale de votre célébration. 
                Le <strong>photobooth</strong>, lui, offre une dimension interactive et spontanée totalement complémentaire. Pendant que votre photographe professionnel 
                immortalise la cérémonie, les portraits de couple et les instants clés, le photobooth permet à vos invités de devenir acteurs de leurs propres souvenirs. 
                Ils se laissent aller, sortent les accessoires loufoques, créent des mises en scène improvisées et repartent avec des <strong>tirages photo instantanés</strong> 
                personnalisés à vos prénoms et à la date de votre mariage.
              </p>

              <p>
                Cette complémentarité est particulièrement appréciée lors des temps morts naturels d'un mariage : pendant le cocktail de vin d'honneur, entre les plats du repas, 
                ou en début de soirée dansante. Le photobooth maintient l'animation et l'énergie festive constante, évitant les moments creux qui peuvent parfois s'installer 
                lors d'une longue journée de célébration.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Un souvenir tangible pour chaque invité</h3>
              
              <p>
                À l'ère du tout numérique, offrir un <strong>souvenir physique</strong> à vos invités prend une dimension particulière. Nos formules avec <strong>impressions papier</strong> 
                permettent à chaque convive de repartir avec un tirage photo de qualité professionnelle, personnalisé aux couleurs de votre mariage. Ces petites photos format 10x15cm 
                trouvent naturellement leur place sur les réfrigérateurs, les bureaux, ou dans les albums souvenirs. Elles deviennent des rappels tangibles de ce moment de partage, 
                bien plus durables qu'une simple photo perdue dans les méandres d'un smartphone.
              </p>

              <p>
                Pour votre mariage à Tours ou en Indre-et-Loire, nos <strong>photobooths artisanaux en bois</strong> s'intègrent élégamment à tous les styles de décoration : 
                mariage champêtre dans une grange rénovée, réception élégante dans un château de la Loire, célébration bohème en plein air, ou soirée moderne dans un lieu contemporain. 
                Le bois véritable et la finition soignée de nos bornes apportent une touche chaleureuse et premium qui s'harmonise parfaitement avec l'esthétique de votre événement.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Qualité professionnelle et fiabilité</h3>
              
              <p>
                Contrairement aux photobooths bas de gamme équipés de simples webcams, notre matériel intègre un <strong>véritable appareil photo professionnel</strong> qui garantit 
                une qualité d'image exceptionnelle. Chaque cliché bénéficie d'une netteté, d'une colorimétrie et d'un rendu dignes d'un studio photo. L'éclairage étudié, le cadrage 
                optimisé et la résolution élevée font toute la différence : vos invités repartent avec de vraies belles photos, pas des images pixelisées de mauvaise qualité.
              </p>

              <p>
                La <strong>fiabilité</strong> est notre priorité absolue pour votre mariage. Chaque photobooth est testé et vérifié avant d'être livré. Nous utilisons du matériel 
                professionnel robuste, conçu pour fonctionner sans interruption pendant toute la durée de votre événement. Notre assistance téléphonique 7j/7 et notre stock de matériel 
                de secours vous garantissent une tranquillité d'esprit totale. Depuis notre lancement, nous maintenons un taux de satisfaction de 100% sur les mariages dans la région 
                tourangelle.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Installation simple et autonomie totale</h3>
              
              <p>
                L'un des grands avantages de notre service de <strong>location de photobooth à Tours</strong> est la simplicité d'installation. Vous récupérez la borne à notre point 
                de retrait à Tours le vendredi (pour un mariage le samedi), et vous la restituez tranquillement le lundi. Cette formule weekend 48h vous offre une flexibilité totale 
                et vous évite toute pression horaire.
              </p>

              <p>
                L'installation sur votre <strong>lieu de réception en Indre-et-Loire</strong> ne prend que 2 minutes : vous posez la borne sur une surface plane, vous la branchez 
                sur une prise électrique standard, et c'est terminé ! Aucune compétence technique n'est requise. Nous fournissons un guide d'installation illustré et des vidéos 
                explicatives consultables depuis votre smartphone. Votre témoin, un membre de votre famille ou n'importe quel invité débrouillard peut s'en charger sans difficulté.
              </p>

              <p>
                Une fois en place, le photobooth fonctionne de manière totalement autonome. L'interface tactile intuitive guide naturellement vos invités à travers le processus : 
                positionnement devant la borne, choix du nombre de photos, décompte visuel avant le déclenchement, visualisation du résultat, et impression automatique. Même les 
                invités les moins technophiles l'utilisent sans hésitation. Cette autonomie vous permet de profiter pleinement de votre mariage sans vous préoccuper de l'animation.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Trois formules adaptées à chaque budget</h3>
              
              <p>
                Nous avons conçu trois <strong>formules de location photobooth mariage</strong> pour répondre à tous les besoins et tous les budgets dans le département du 37. 
                Notre <strong>Formule Digitale à 229€</strong> offre l'essentiel : photos illimitées pendant 48h, envoi de toutes les photos par lien de téléchargement après 
                l'événement, et notre célèbre borne en bois fabrication française. C'est le choix idéal pour les couples qui privilégient le digital et souhaitent maîtriser leur budget.
              </p>

              <p>
                La <strong>Formule Impression à 289€</strong> ajoute la magie du tangible avec 200 impressions papier 10x15cm incluses et une imprimante professionnelle intégrée. 
                C'est notre formule la plus populaire pour les mariages car elle combine la praticité du numérique et le plaisir de repartir avec un tirage photo personnalisé. 
                Vos invités adorent cette dimension concrète qui leur permet de ramener immédiatement un souvenir chez eux.
              </p>

              <p>
                Notre <strong>Formule Complète à 339€</strong> représente le summum de l'expérience photobooth mariage : 400 impressions au total (largement suffisant pour un mariage 
                de 80 à 120 invités), template photo entièrement personnalisé avec vos prénoms, date et design personnalisé, et livraison gratuite jusqu'à 20km de Tours. C'est le 
                choix premium pour les couples qui veulent offrir la meilleure expérience possible à leurs invités.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Le photobooth, créateur d'ambiance et de liens</h3>
              
              <p>
                Au-delà de l'aspect technique, le <strong>photobooth de mariage</strong> joue un rôle social crucial dans votre réception. Il devient naturellement un point de 
                rassemblement où les invités se retrouvent, discutent, rient ensemble en attendant leur tour. Les groupes se forment spontanément, mélangeant amis de la mariée et 
                famille du marié, collègues et cousins éloignés. Ces interactions créent ou renforcent des liens entre vos invités, contribuant à l'atmosphère chaleureuse et 
                conviviale que vous souhaitez pour votre mariage.
              </p>

              <p>
                L'effet est particulièrement visible lors du vin d'honneur et en début de soirée, moments où certains invités ne se connaissent pas encore bien. Le photobooth 
                offre un prétexte naturel pour engager la conversation, partager un moment de complicité, et créer ensemble des souvenirs mémorables. Les accessoires fournis 
                (chapeaux, lunettes, moustaches, panneaux humoristiques) brisent la glace et invitent à la légèreté et à la spontanéité.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Personnalisation et cohérence avec votre thème de mariage</h3>
              
              <p>
                Votre <strong>mariage à Tours</strong> a une identité unique, un thème particulier, des couleurs choisies avec soin. Notre service de <strong>personnalisation 
                des templates photo</strong> vous permet d'intégrer parfaitement le photobooth dans votre univers visuel. Nous créons un design sur mesure qui reprend vos prénoms, 
                votre date, vos couleurs, et même des éléments graphiques de votre faire-part ou de votre décoration.
              </p>

              <p>
                Cette personnalisation transforme chaque tirage photo en un véritable faire-part souvenir. Vos invités ne repartent pas avec une simple photo générique, mais avec 
                un élément de votre identité de couple, une pièce unique qui raconte votre histoire. C'est cette attention aux détails qui fait la différence et qui fait de notre 
                service de location un choix premium pour votre mariage en Indre-et-Loire.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Tendances mariage 2024-2025 en région Centre-Val de Loire</h3>
              
              <p>
                Les mariages évoluent, et les attentes des couples également. En 2024-2025, nous observons plusieurs tendances fortes dans la région de Tours et l'Indre-et-Loire. 
                Le retour au local et à l'artisanal est très marqué : les couples privilégient les prestataires de proximité et les productions françaises, comme notre photobooth 
                fabriqué artisanalement en bois massif en France.
              </p>

              <p>
                L'authenticité et l'expérience invité sont au cœur des préoccupations. Plus qu'une simple réception, les mariés veulent créer une véritable expérience mémorable 
                pour leurs convives. Le photobooth s'inscrit parfaitement dans cette tendance en offrant une animation interactive, ludique et participative qui transforme les 
                invités en acteurs de la fête plutôt qu'en simples spectateurs.
              </p>

              <p>
                La dimension écologique prend également de l'importance. Notre approche de location (plutôt que d'achat et jetable) s'inscrit dans une logique de consommation 
                responsable. La fabrication en bois durable, la longévité du matériel conçu pour durer des années, et notre circuit court (fabrication et location locale) 
                correspondent aux valeurs des couples conscients de leur impact environnemental.
              </p>

              <h3 style={{ marginTop: '2rem', fontSize: '1.25rem' }}>Conseils pour choisir votre prestataire photobooth à Tours</h3>
              
              <p>
                Face à la multiplication des offres de <strong>location de photobooth en Indre-et-Loire</strong>, voici quelques critères essentiels pour faire le bon choix. 
                Premièrement, vérifiez la qualité du matériel : privilégiez les bornes équipées de vrais appareils photo plutôt que de webcams basiques. La différence de 
                qualité d'image est flagrante et vos invités le remarqueront immédiatement.
              </p>

              <p>
                Deuxièmement, assurez-vous de la fiabilité et de l'expérience du prestataire. Demandez des références, consultez les avis clients, vérifiez leur présence 
                dans la durée. Un mariage est un événement unique où aucune erreur n'est permise. Un prestataire établi, avec un historique de réussites et une bonne 
                réputation locale, vous garantit la tranquillité d'esprit.
              </p>

              <p>
                Troisièmement, évaluez le service client et l'accompagnement : le prestataire est-il disponible pour répondre à vos questions ? Propose-t-il une assistance 
                le jour J en cas de problème ? Fournit-il un matériel de remplacement ? La qualité du service fait souvent la différence entre une prestation correcte et 
                une expérience vraiment exceptionnelle.
              </p>

              <p>
                Enfin, comparez les formules et la transparence tarifaire. Méfiez-vous des offres trop alléchantes qui cachent souvent des frais supplémentaires ou un 
                matériel de qualité médiocre. Un tarif clair, détaillé, sans surprise, avec toutes les prestations incluses, témoigne du professionnalisme et du sérieux 
                du prestataire.
              </p>
            </div>

            {/* SECTION FORMULES MARIAGE */}
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nos formules mariage</h2>
              <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', color: 'var(--text-light)' }}>
                Trois formules pensées spécialement pour les mariages à Tours et en Indre-et-Loire. 
                Location weekend 48h, photos illimitées, installation ultra-simple.
              </p>
              <div className="grid grid-3">
                {siteData.pricingWeekend.map((plan, index) => (
                  <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                    {plan.popular && <div className="plan-badge">⭐ Idéal mariage</div>}
                    <h3>{plan.name}</h3>
                    <div className="price">
                      <span className="old-price">{plan.oldPrice}</span>
                      <span className="amount">{plan.price}</span>
                      <span className="duration">{plan.duration}</span>
                      <span className="savings">Économisez {plan.savings}</span>
                    </div>
                    <ul className="features">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <Link href="/tarifs" className="btn btn-primary">
                      Voir les détails
                    </Link>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/tarifs" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                  → Découvrez tous nos tarifs photobooth mariage
                </Link>
              </p>
            </div>

            {/* SECTION FONCTIONNEMENT */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Comment fonctionne la location ?</h2>
              <div className="grid grid-2" style={{ marginTop: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>1. Réservation en ligne</h3>
                  <p>
                    Réservez votre photobooth en quelques clics sur notre site ou par téléphone. 
                    Nous vous conseillons de <strong>réserver 2 mois à l'avance</strong> pour les mariages, 
                    surtout en haute saison (mai-septembre). Un acompte de 30% sécurise votre date.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>2. Personnalisation</h3>
                  <p>
                    Si vous choisissez un <strong>template personnalisé</strong>, nous créons ensemble le design 
                    de vos photos : vos prénoms, date, couleurs de votre mariage, logo ou motif. 
                    Validation du design 2 semaines avant le grand jour.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>3. Retrait à Tours</h3>
                  <p>
                    <strong>Retrait express vendredi</strong> à Tours (adresse communiquée à la réservation). 
                    Nous vous remettons le photobooth, le guide papier, et vous montrons rapidement le fonctionnement. 
                    Option <Link href="/tarifs" style={{ color: 'var(--accent)' }}>livraison disponible</Link> dès 39€.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>4. Installation simple</h3>
                  <p>
                    Sur votre lieu de réception, posez la borne, branchez-la, c'est prêt ! Installation en 2 minutes, 
                    aucune compétence technique requise. <strong>Guide vidéo accessible depuis votre téléphone</strong>. 
                    Assistance 7j/7 si besoin.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>5. Photos illimitées</h3>
                  <p>
                    Pendant votre mariage, vos invités profitent du photobooth autant qu'ils veulent. 
                    <strong>Photos illimitées</strong>, impressions instantanées (formules Impression et Complète), 
                    accessoires fournis pour s'amuser.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>6. Restitution lundi</h3>
                  <p>
                    Retour du matériel le <strong>lundi suivant</strong> au même point à Tours. 
                    Pas de stress, pas de pression horaire. Vous recevez toutes les photos par email 
                    sous 48h + clé USB avec formules Premium/Complète.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION ZONE D'INTERVENTION */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Zone d'intervention en Indre-et-Loire</h2>
              <p>
                Nous intervenons sur <strong>Tours et dans tout le département de l'Indre-et-Loire (37)</strong> pour 
                livrer votre photobooth de mariage. Notre zone de service couvre l'ensemble de la région Centre-Val de Loire.
              </p>
              
              <h3 style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Villes principales desservies</h3>
              <p>
                <strong>Tours</strong> (centre-ville, Tours-Nord, Tours-Sud) • <strong>Joué-lès-Tours</strong> • 
                <strong>Saint-Pierre-des-Corps</strong> • <strong>Saint-Avertin</strong> • <strong>La Riche</strong> • 
                <strong>Chambray-lès-Tours</strong> • <strong>Ballan-Miré</strong> • <strong>Saint-Cyr-sur-Loire</strong> • 
                <strong>Fondettes</strong> • <strong>Amboise</strong> • <strong>Montbazon</strong> • <strong>Vouvray</strong> • 
                <strong>Azay-le-Rideau</strong> • <strong>Langeais</strong> • <strong>Chinon</strong> • <strong>Loches</strong> • 
                <strong>Descartes</strong> • <strong>Ligueil</strong> • <strong>Sainte-Maure-de-Touraine</strong>
              </p>

              <h3 style={{ fontSize: '1.25rem', marginTop: '2rem' }}>Lieux de réception populaires</h3>
              <p>
                Nous livrons régulièrement nos photobooths dans les <strong>châteaux de la Loire</strong>, 
                <strong>domaines viticoles</strong>, <strong>fermes rénovées</strong>, <strong>salles des fêtes</strong>, 
                <strong>manoirs</strong>, <strong>orangeries</strong>, et tous types de <strong>lieux de réception 
                pour mariages</strong> en Indre-et-Loire.
              </p>

              <div style={{ background: 'var(--background-light)', padding: '1.5rem', borderRadius: '8px', marginTop: '2rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Tarifs de livraison</h4>
                <ul style={{ lineHeight: '2', color: 'var(--text-light)' }}>
                  <li>✅ <strong>Gratuit jusqu'à 20km de Tours</strong> (formule Complète)</li>
                  <li>📍 Moins de 20km : 39€ (autres formules)</li>
                  <li>📍 20 à 40km : 45€</li>
                  <li>📍 Jusqu'à 60km : 60€</li>
                  <li>💡 Retrait gratuit à Tours (toutes formules)</li>
                </ul>
              </div>

              <p style={{ marginTop: '1.5rem' }}>
                Votre lieu de réception n'est pas dans la liste ? <Link href="/contact" style={{ color: 'var(--accent)', fontWeight: '600' }}>Contactez-nous</Link>, 
                nous étudierons votre demande avec plaisir.
              </p>
            </div>

            {/* SECTION FAQ COMPLÈTE */}
            <div className="card" style={{ marginBottom: '3rem' }}>
              <h2>Questions fréquentes sur la location photobooth mariage</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                Toutes les réponses à vos questions sur notre service de location de photobooth pour mariage à Tours et en Indre-et-Loire.
              </p>

              <div style={{ maxWidth: '900px' }}>
                {/* FAQ Items */}
                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Combien coûte une location de photobooth pour un mariage à Tours ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Nos tarifs pour la location de photobooth mariage à Tours démarrent à <strong>229€</strong> pour la formule Digitale 
                    (weekend 48h, photos illimitées en ligne). La formule Impression à <strong>289€</strong> inclut 200 impressions papier instantanées. 
                    Notre formule Complète à <strong>339€</strong> comprend 400 impressions, un template personnalisé avec vos prénoms, et la livraison 
                    gratuite jusqu'à 20km de Tours. Ces tarifs incluent l'installation, le guide complet, et l'assistance téléphonique 7j/7 pendant 
                    votre événement. Découvrez le détail complet sur notre <Link href="/tarifs" style={{ color: 'var(--accent)' }}>page tarifs</Link>.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Livrez-vous dans toute l'Indre-et-Loire pour les mariages ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Oui, nous livrons votre photobooth dans tout le département de l'Indre-et-Loire (37). Nous intervenons à Tours, Joué-lès-Tours, 
                    Saint-Pierre-des-Corps, Amboise, Chinon, Loches, Montbazon, Azay-le-Rideau et toutes les communes du 37. La livraison jusqu'à 20km 
                    de Tours est incluse dans notre formule Complète. Au-delà, les frais de livraison sont de 39€ (<20km), 45€ (20-40km) ou 60€ 
                    (jusqu'à 60km). Nous pouvons également intervenir dans les départements limitrophes pour votre mariage.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Combien d'espace faut-il prévoir pour installer le photobooth lors d'un mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Pour une installation optimale de notre photobooth lors de votre mariage, nous recommandons un espace de <strong>3 mètres de large 
                    sur 2,5 mètres de profondeur minimum</strong>. Cet espace permet à vos invités de se positionner confortablement devant la borne et 
                    de prendre des photos de groupe sans être à l'étroit. Le photobooth en lui-même mesure environ 50cm de large et nécessite simplement 
                    une surface plane et stable. Si vous disposez d'un espace plus restreint, contactez-nous pour étudier les possibilités d'adaptation.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Le photobooth nécessite-t-il une alimentation électrique ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Oui, notre photobooth nécessite une <strong>prise électrique standard 220V</strong> pour fonctionner. Nous fournissons une rallonge 
                    électrique de 10 mètres qui permet une installation flexible dans votre salle de réception. Le photobooth consomme très peu d'électricité 
                    et peut rester branché toute la journée sans problème. Assurez-vous simplement qu'une prise soit accessible à proximité de l'emplacement 
                    souhaité. En cas de doute sur l'installation électrique de votre lieu de réception, n'hésitez pas à nous contacter.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Peut-on personnaliser les impressions photo pour notre mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Absolument ! Nous proposons un service de <strong>personnalisation complète des impressions photo</strong> pour votre mariage. 
                    Vous pouvez ajouter vos prénoms, la date de votre mariage, un message personnalisé, votre logo ou motif favori sur le template des photos. 
                    Cette personnalisation est incluse dans notre formule Complète, ou disponible en option à 10€ pour les autres formules. Nous créons un 
                    design unique qui s'intègre parfaitement au thème et aux couleurs de votre mariage. Les templates sont validés avec vous avant l'événement 
                    pour garantir un rendu parfait.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Que se passe-t-il en cas de problème technique pendant le mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Votre tranquillité d'esprit est notre priorité. En cas de problème technique pendant votre mariage, nous assurons une <strong>assistance 
                    téléphonique immédiate 7 jours sur 7</strong>. Notre équipe peut vous guider à distance pour résoudre la plupart des situations en quelques 
                    minutes. Si le problème persiste, nous intervenons sur place dans l'heure ou nous remplaçons le matériel défectueux. Tous nos photobooths 
                    sont testés et vérifiés avant chaque location. Nous disposons également d'un stock de matériel de remplacement pour garantir le bon 
                    déroulement de votre événement.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Combien de photos peut-on prendre pendant un mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Avec toutes nos formules, les photos sont <strong>illimitées</strong> pendant toute la durée de votre location (48h pour un weekend de mariage). 
                    Vos invités peuvent se faire photographier autant de fois qu'ils le souhaitent, sans aucune restriction. En moyenne, lors d'un mariage avec 
                    100 invités, entre 300 et 600 photos sont prises. Chaque session photo dure environ 30 secondes, permettant un flux continu sans temps d'attente. 
                    Toutes les photos prises sont ensuite mises à votre disposition via un lien de téléchargement sécurisé ou par email.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Peut-on installer le photobooth en extérieur pour un mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    L'installation en extérieur est possible sous certaines conditions. Le photobooth doit être <strong>protégé des intempéries</strong> (pluie, 
                    vent fort, soleil direct intense) et nécessite une surface plane et stable. Nous recommandons fortement l'installation sous un barnum, une 
                    tente ou une pergola. Une prise électrique doit également être accessible. Pour les mariages en extérieur, nous conseillons de prévoir un plan B 
                    en intérieur en cas de conditions météo défavorables. L'installation en extérieur fonctionne particulièrement bien pour les cocktails et vins 
                    d'honneur en journée, puis un déplacement en intérieur pour la soirée.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Quel est le délai de réservation pour un photobooth de mariage à Tours ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Nous recommandons de réserver votre photobooth au minimum <strong>2 mois à l'avance</strong> pour les mariages, surtout pour les weekends 
                    de mai à septembre qui sont très demandés. Cette anticipation vous garantit la disponibilité et vous permet de bénéficier de notre 
                    accompagnement personnalisé dans la préparation de votre événement. Pour les mariages hors saison (octobre à avril), un délai de 3 à 4 semaines 
                    est généralement suffisant. En cas de besoin urgent, contactez-nous même à la dernière minute, nous ferons notre maximum pour vous accommoder.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Le photobooth remplace-t-il le photographe de mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Non, le photobooth ne remplace pas votre photographe professionnel mais le <strong>complète parfaitement</strong>. Votre photographe capture 
                    les moments officiels, les émotions et l'ambiance générale de votre mariage avec un œil artistique. Le photobooth, lui, offre une animation 
                    ludique qui permet à vos invités de créer leurs propres souvenirs spontanés et amusants, souvent avec des accessoires. Les deux prestations 
                    sont complémentaires : le photographe documente votre histoire, le photobooth crée l'interaction et l'amusement. Beaucoup de couples choisissent 
                    d'avoir les deux pour une couverture complète de leur mariage.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Fournissez-vous des accessoires pour le photobooth mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Oui, nous fournissons un <strong>kit d'accessoires de base</strong> avec chaque location : chapeaux, lunettes fantaisie, moustaches, panneaux 
                    avec messages amusants, etc. Ces accessoires ajoutent une touche ludique et créative aux photos de vos invités. Si vous souhaitez des accessoires 
                    personnalisés ou thématiques (champêtre, bohème, vintage...), nous pouvons vous conseiller des fournisseurs ou vous proposer des options sur mesure. 
                    Vous pouvez également apporter vos propres accessoires pour créer une ambiance unique qui correspond au thème de votre mariage.
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                    Comment récupérer toutes les photos après le mariage ?
                  </h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Après votre mariage, vous recevez toutes les photos par deux moyens : un <strong>lien de téléchargement sécurisé</strong> envoyé par email 
                    dans les 48h suivant l'événement, vous permettant de télécharger l'intégralité des photos en haute qualité. Avec nos formules Premium et Complète, 
                    vous recevez également une clé USB contenant toutes les photos. Vous pouvez ensuite partager ce lien avec vos invités pour qu'ils puissent 
                    télécharger les photos où ils apparaissent. Les photos restent disponibles en ligne pendant 6 mois minimum. Nous conservons également une 
                    sauvegarde pendant 1 an.
                  </p>
                </div>
              </div>

              <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/faq" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                  → Voir toutes nos questions fréquentes
                </Link>
              </p>
            </div>

            {/* SECTION CTA FINALE */}
            <div style={{ textAlign: 'center', background: 'var(--background-light)', padding: '3rem 2rem', borderRadius: '12px' }}>
              <h2>Réserver votre photobooth pour votre mariage à Tours</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                Envie d'ajouter cette animation premium à votre mariage ? Contactez-nous pour vérifier les disponibilités 
                et recevoir votre devis personnalisé gratuit sous 24h.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">
                  Demander un devis gratuit
                </Link>
                <Link href="/galerie" className="btn btn-secondary">
                  Voir la galerie
                </Link>
              </div>
              <p style={{ marginTop: '1.5rem', color: 'var(--text-light)', fontSize: '0.95rem' }}>
                📞 {siteData.contact.phone} • 📧 {siteData.contact.email}
              </p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}