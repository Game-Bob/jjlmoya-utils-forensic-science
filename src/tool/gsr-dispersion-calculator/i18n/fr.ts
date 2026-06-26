import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculateur-distance-tir-dispersion-gsr';
const title = 'Calculateur de Distance de Tir par Dispersion des GSR';
const description = 'Simulez les motifs éducatifs de dispersion des résidus de tir (GSR) sur une cible selon la distance de tir, le type de munition, la densité et les effets thermiques.';

const howTo = [
  {
    name: 'Régler la distance de tir',
    text: 'Ajustez le curseur de distance depuis le tir de contact jusqu\'à trois mètres pour observer comment le dépôt concentré et altéré par la chaleur se transforme en un champ de particules dispersé.',
  },
  {
    name: 'Choisir un profil de munition',
    text: 'Sélectionnez un profil (pistolet 9 mm, revolver .38 ou fusil de chasse calibre 12) pour modifier le nombre de particules, le facteur de dispersion et la portée thermique de la simulation.',
  },
  {
    name: 'Analyser la cible et le cône de dispersion',
    text: 'Utilisez la cible textile pour évaluer la densité et la répartition radiale des particules, et observez le cône latéral pour comprendre l\'expansion physique du panache de tir.',
  },
  {
    name: 'Interpréter la catégorie de distance',
    text: 'Consultez la classification de la zone et les observations attendues. Le résultat décrit la signification pédagogique des tirs de contact, de contact étroit, à courte portée et à longue portée.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'La dispersion des résidus de tir peut-elle déterminer une distance exacte ?',
    answer: 'Non. Les motifs de GSR permettent d\'estimer une plage de distance approximative, et non une valeur absolue. Une conclusion rigoureuse exige l\'examen de l\'arme, des munitions, du support, de l\'angle et la réalisation de tirs de comparaison dans des conditions contrôlées.',
  },
  {
    key: 'faq-2',
    question: 'Pourquoi les tirs à bout portant provoquent-ils plus de suie et de brûlures ?',
    answer: 'À très courte distance, les gaz brûlants, la suie, la poudre non consumée et les particules métalliques de l\'amorce frappent la cible avant que le panache ne se soit dilaté et refroidi, entraînant noircissement, brûlures et déchirures.',
  },
  {
    key: 'faq-3',
    question: 'Quels éléments chimiques caractérisent les résidus d\'amorce ?',
    answer: 'L\'analyse classique des GSR cible les particules contenant du plomb, du baryum et de l\'antimoine. Bien que les munitions modernes sans plomb modifient ce profil, les examens par MEB-EDS évaluent conjointement la morphologie et la chimie des particules.',
  },
  {
    key: 'faq-4',
    question: 'Pourquoi le simulateur utilise-t-il une distribution radiale gaussienne ?',
    answer: 'La distribution gaussienne est une approximation pédagogique utile car la majorité des particules se concentre près du centre du panache. En réalité, le vent, l\'angle d\'impact ou le type de textile peuvent introduire des asymétries.',
  },
  {
    key: 'faq-5',
    question: 'Ce calculateur peut-il servir à un rapport d\'expertise judiciaire ?',
    answer: 'Non. C\'est un outil didactique. Une expertise médico-légale doit s\'appuyer sur des protocoles de laboratoire validés, des contrôles de qualité, des tirs de comparaison physiques et l\'évaluation par un expert qualifié.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Distance de tir',
    units: 'Système d\'unités',
    metric: 'Métrique',
    imperial: 'Impérial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Profil de munition',
    ammoPistol9mm: 'Pistolet 9 mm',
    ammoRevolver38: 'Revolver .38',
    ammoShotgun12: 'Fusil calibre 12',
    target: 'Cible textile',
    cone: 'Panache de résidus',
    canvasAria: 'Dispersion des particules de résidus de tir sur la cible textile',
    rangeStripAria: 'Catégories de distance',
    category: 'Interprétation de la portée',
    categoryContactLabel: 'Tir de contact / embouchure sur support',
    categoryNearContactLabel: 'Tir à bout portant / zone de brûlure',
    categoryCloseRangeLabel: 'Tir à courte portée / zone de tatouage',
    categoryDistantLabel: 'Tir à longue portée ou indéterminée',
    density: 'Densité de particules',
    thermal: 'Effet thermique',
    radius: 'Rayon estimé du motif',
    radiusSuffix: 'de rayon',
    expected: 'Observation attendue',
    expectedContact: 'Un dépôt central très dense, une empreinte de la bouche de l\'arme, un noircissement de suie, des déchirures et des altérations thermiques sont attendus dans la zone cible.',
    expectedNearContact: 'Une forte concentration de suie et de grains de poudre reste centrée autour de l\'orifice, avec un halo radial étroit mais visible.',
    expectedCloseRange: 'Le tatouage de poudre et les résidus métalliques s\'élargissent en un anneau mesurable ; les effets thermiques et la suie deviennent négligeables.',
    expectedDistant: 'Les particules sont rares et très dispersées. Une conclusion sur la distance requiert des analyses chimiques, de la microscopie et des tirs de comparaison.',
    contact: 'Contact',
    near: 'Bout portant',
    close: 'Courte portée',
    distant: 'Longue portée',
    disclaimer: 'Modèle didactique uniquement. La détermination de la distance de tir par les GSR exige des tirs d\'essai contrôlés, des comparaisons physiques et des méthodes chimiques validées.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimation de la Distance de Tir à Partir des Motifs de GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Modèle éducatif',
      title: 'Ce que ce calculateur explique',
      html: 'Ce calculateur de dispersion des GSR illustre si un motif de résidus correspond à un tir de contact, à bout portant, à courte portée ou à longue portée. Il est destiné à l\'apprentissage des principes de <strong>détermination de la distance de tir</strong>, non à l\'émission d\'expertises réelles.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'distance de tir simulée', icon: 'mdi:ruler' },
        { value: '4', label: 'catégories de portée expliquées', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'profils de munition comparés', icon: 'mdi:ammunition' },
        { value: '2', label: 'systèmes d\'unités: métrique et impérial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Comment Lire le Motif Simulé',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Liste de validation rapide',
      items: [
        'Une suie centrale dense, des brûlures, des déchirures ou une empreinte de bouche indiquent un tir de contact ou à bout portant.',
        'Un centre sombre compact entouré de grains de poudre suggère une distance très courte, nécessitant des tirs de comparaison pour la préciser.',
        'Un tatouage dispersé avec peu de suie correspond généralement à un tir à courte portée, hors de portée des effets thermiques.',
        'L\'absence de résidus visibles n\'exclut pas la présence de GSR ; les analyses microscopiques et chimiques restent indispensables.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ce que l\'outil permet d\'illustrer',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Il montre graphiquement la relation entre distance de tir, densité de résidus, étalement des particules et effets de chaleur.',
          points: ['Démonstration en classe', 'Explications techniques', 'Vocabulaire médico-légal', 'Comparaison métrique/impérial'],
        },
        {
          title: 'Ce qu\'il ne peut pas prouver',
          icon: 'mdi:alert-circle-outline',
          description: 'Il ne peut pas identifier la distance réelle d\'un tir sans l\'analyse physique des scellés.',
          points: ['Pas d\'analyse de pièces réelles', 'Pas de confirmation chimique', 'Pas de tirs avec l\'arme en cause', 'Pas de valeur juridique'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Question fréquente', 'Indice clé du motif', 'Réponse technique'],
      rows: [
        ['À quoi ressemble un tir de contact ?', 'Dépôt massif de suie, brûlure, déchirure en croix ou empreinte de bouche.', 'L\'interprétation d\'un contact est probable, mais l\'élasticité du support et les gaz de tir peuvent en modifier l\'aspect.'],
        ['Quelle était la distance de l\'arme ?', 'Résidus denses autour de l\'entrée avec un halo compact de poudre.', 'Le motif permet de formuler une hypothèse de portée, mais un tir de comparaison est indispensable.'],
        ['Qu\'est-ce que le tatouage de poudre ?', 'Incrustations ponctuelles de grains de poudre non consumés avec peu de suie.', 'Sa dispersion varie selon la munition, le tissu, l\'angle d\'incidence et les obstacles intermédiaires.'],
        ['Les résidus s\'effacent-ils avec la distance ?', 'Particules très rares et absence de motif visible macroscopiquement.', 'Les indices visibles diminuent, mais les particules d\'amorce peuvent être prélevées et détectées au microscope.'],
      ],
    },
    {
      type: 'title',
      text: 'Physique et Modélisation Mathématique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le simulateur applique une distribution radiale de type gaussien pour positionner les particules autour de l\'impact. Les courtes distances produisent des dépôts étroits et denses ; les longues distances augmentent l\'écartement et réduisent la densité moyenne. Le modèle sépare le dépôt de suie des particules d\'amorce métalliques car le noircissement thermique a une portée beaucoup plus limitée.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Résidus de tir (Gunshot Residue): particules issues de l\'amorce, de la poudre, du projectile et des gaz de combustion.' },
        { term: 'Noircissement', definition: 'Dépôt carboné de suie visible principalement lors de tirs de contact ou à très courte distance.' },
        { term: 'Tatouage', definition: 'Incrustations punctiformes de grains de poudre non ou partiellement consumés dans la surface cible.' },
        { term: 'Empreinte de bouche', definition: 'Marque physique laissée sur la cible par la pression et la chaleur de la bouche du canon.' },
        { term: 'Tir de comparaison', definition: 'Tir expérimental réalisé à des distances connues avec l\'arme et les munitions du dossier sur un support identique.' },
      ],
    },
    {
      type: 'title',
      text: 'Catégories de Portée et Observations Typiques',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Classe de portée', 'Observations courantes', 'Limites de l\'interprétation'],
      rows: [
        ['Contact', 'Dépôt central massif, suie, brûlure, déchirure, empreinte de canon.', 'La tension du support et les effets des gaz de tir peuvent considérablement modifier la morphologie du trou.'],
        ['Bout portant', 'Suie dense et halo serré de grains de poudre autour de l\'entrée.', 'Des vêtements amples ou un obstacle intermédiaire peuvent intercepter le dépôt de particules.'],
        ['Courte portée', 'Tatouage de poudre, particules dispersées sans suie marquante.', 'Une même distance produit des motifs distincts selon que la cible est du coton, du denim, de la peau ou du papier.'],
        ['Longue portée', 'Résidus visibles rares, dispersion étendue ou absence de motif macroscopique.', 'L\'analyse microscopique et chimique devient déterminante à mesure que les signes visuels s\'estompent.'],
      ],
    },
    {
      type: 'tip',
      title: 'Conseil pratique d\'analyse',
      html: 'Interprétez toujours la distance de tir sous forme de <strong>plage comparative</strong> et jamais comme une valeur métrique fixe. Les conclusions fiables reposent sur l\'étalonnage expérimental avec des cibles de comparaison.',
    },
    {
      type: 'title',
      text: 'Protocole de Prélèvement et de Lecture des Motifs',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Documenter la nature du support cible, son tissage, sa couleur, son épaisseur et son état de tension.',
        'Noter la marque et le modèle de l\'arme, la longueur du canon, le type de munition, la poudre et d\'éventuels accessoires de bouche.',
        'Photographier le motif avec un témoin métrique, un éclairage adapté et les indications de traçabilité.',
        'Rechercher séparément la suie, les brûlures, la poudre non consumée, la collerette d\'essuyage et les déchirures.',
        'Procéder systématiquement à des tirs de comparaison avant de proposer un intervalle de distance.',
      ],
    },
    {
      type: 'proscons',
      title: 'Simulation virtuelle vs analyse balistique de laboratoire',
      items: [
        { pro: 'Permet de visualiser facilement l\'effet de la distance sur la dispersion des résidus.', con: 'Ne prend pas en compte les spécificités de l\'arme, du lot de munitions ou du tissu.' },
        { pro: 'Explicite les différences conceptuelles entre les catégories de portée.', con: 'Ne remplace pas les tests chimiques ni la microscopie électronique à balayage (MEB-EDS).' },
        { pro: 'Sensibilise aux limites physiques de l\'interprétation visuelle directe.', con: 'Dépourvu de valeur médico-légale sans validation scientifique et expertise sur pièces.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Mise en garde médico-légale',
      title: 'Exclusion d\'usage judiciaire',
      html: 'Un modèle logiciel ne peut se substituer aux pièces à conviction physiques. Il ne peut évaluer l\'état de conservation de l\'arme, la chimie des poudres, les obstacles ou la qualité des prélèvements. Cette page a une visée didactique ; référez-vous aux laboratoires agréés pour toute expertise réelle.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
