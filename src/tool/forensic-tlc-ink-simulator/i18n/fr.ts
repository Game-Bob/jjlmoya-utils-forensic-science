import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-chromatographie-couche-mince-ccm-encre';
const title = 'Simulateur de Chromatographie sur Couche Mince (CCM) d\'Encre Forensique';
const description = 'Simulez la chromatographie sur couche mince d\'encres d\'écriture suspectes, visualisez le développement du front de solvant, séparez les bandes de pigments et calculez les valeurs de Rf exactes pour chaque pigment.';

const howTo = [
  {
    name: 'Choisir l\'encre suspecte ou le stylo de comparaison',
    text: 'Sélectionnez l\'encre de la demande de rançon ou le profil d\'un stylo suspect. Chaque encre contient un ensemble différent de colorants avec une polarité et une affinité spécifiques pour la phase stationnaire.',
  },
  {
    name: 'Sélectionner la phase mobile',
    text: 'Modifiez le système de solvants pour observer comment la polarité du solvant altère le développement capillaire et la migration relative de chaque bande de colorant.',
  },
  {
    name: 'Développer la plaque de CCM',
    text: 'Déplacez le curseur de temps de développement et observez le front de solvant monter sur la plaque tandis que les bandes séparées apparaissent au-dessus de la ligne de dépôt.',
  },
  {
    name: 'Lire le tableau des Rf',
    text: 'Comparez la distance de chaque pigment avec la distance du front de solvant. Le simulateur calcule le Rf en divisant la distance du pigment par la distance du front.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Que signifie Rf en chromatographie sur couche mince ?',
    answer: 'Le Rf est le rapport de front (ou facteur de rétention): la distance parcourue par le composé divisée par la distance parcourue par le front de solvant depuis la même ligne de dépôt. C\'est une valeur sans unité qui varie normalement de 0 à 1.',
  },
  {
    key: 'faq-2',
    question: 'La CCM peut-elle prouver que deux échantillons d\'encre proviennent du même stylo ?',
    answer: 'Non. La CCM peut montrer si les profils de colorants sont cohérents ou incohérents, mais l\'attribution de la source exige des méthodes de comparaison validées, des contrôles, de la documentation et l\'interprétation d\'un expert.',
  },
  {
    key: 'faq-3',
    question: 'Pourquoi le changement de solvant modifie-t-il le profil des bandes ?',
    answer: 'Les colorants se répartissent différemment entre la phase stationnaire et la phase mobile. Un solvant ayant une meilleure affinité de polarité peut entraîner un colorant plus loin, augmentant ainsi sa valeur de Rf.',
  },
  {
    key: 'faq-4',
    question: 'Pourquoi la ligne de dépôt est-elle importante ?',
    answer: 'La distance du front de solvant et celle du pigment doivent toutes deux être mesurées à partir de la ligne de dépôt. Mesurer depuis le bas de la plaque produit des valeurs de Rf incorrectes.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Chambre de chromatographie sur couche mince avec plaque de développement',
    rulerAria: 'Règle millimétrée virtuelle pour mesurer le front de solvant et les bandes de pigments',
    rulerMarks: '80,60,40,20,0',
    units: 'Système d\'unités',
    metric: 'Métrique',
    imperial: 'Impérial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Échantillon d\'encre',
    ransomNote: 'Encre suspecte de la lettre de rançon',
    bluePen: 'Stylo à bille bleu saisi',
    blackPen: 'Stylo à bille noir saisi',
    gelPen: 'Stylo gel saisi',
    solventSystem: 'Phase mobile',
    ethanolWater: 'Éthanol / eau',
    butanolAcetic: 'Butanol / acide acétique',
    isopropanolAmmonia: 'Isopropanol / ammoniaque',
    developmentTime: 'Temps de développement',
    frontDistance: 'Parcours du solvant',
    matchScore: 'Similitude du profil',
    solventFront: 'Front de solvant',
    originLine: 'Ligne de dépôt',
    pigment: 'Bande de pigment',
    pigmentCyanDye: 'colorant cyan',
    pigmentVioletDye: 'colorant violet',
    pigmentGrayCarrier: 'support gris',
    pigmentNavyDye: 'colorant bleu marine',
    pigmentYellowDye: 'colorant jaune',
    pigmentRedDye: 'colorant rouge',
    pigmentBlueDye: 'colorant bleu',
    pigmentDarkBinder: 'liant sombre',
    pigmentTealDye: 'colorant vert d\'eau',
    pigmentMagentaDye: 'colorant magenta',
    pigmentGelBinder: 'liant gel',
    distance: 'Distance',
    rfValue: 'Valeur de Rf',
    disclaimer: 'Simulation éducative uniquement. La comparaison forensique d\'encres nécessite les documents originaux, des méthodes de laboratoire validées, des étalons de référence et des examinateurs de documents qualifiés.',
  },
  seo: [
    {
      type: 'title',
      text: 'Chromatographie sur couche mince pour la comparaison forensique des encres',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Simulateur pédagogique',
      title: 'Ce que ce simulateur CCM d\'encre vous aide à comprendre',
      html: 'Cet outil explique comment la <strong>chromatographie sur couche mince des encres d\'écriture</strong> permet de séparer un trait d\'encre visible en plusieurs bandes de colorants. Il est conçu pour les étudiants en sciences forensiques, les apprentis examinateurs de documents et toute personne cherchant à comprendre comment les valeurs de Rf sont calculées à partir d\'une plaque CCM développée.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d bande / d solvant', label: 'formule du rapport de front', icon: 'mdi:division' },
        { value: '4', label: 'profils d\'encre comparés', icon: 'mdi:pen' },
        { value: '3', label: 'phases mobiles simulées', icon: 'mdi:flask-outline' },
        { value: '2', label: 'affichages métriques et impériaux', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist pour des mesures CCM correctes',
      items: [
        'Tracez la ligne de dépôt au-dessus du niveau du solvant avant de lancer le développement.',
        'Retirez la plaque avant que le solvant n\'atteigne le bord supérieur.',
        'Marquez le front de solvant immédiatement, car il s\'évapore et devient vite invisible.',
        'Mesurez le parcours du pigment et celui du solvant depuis la même ligne de dépôt.',
        'Indiquez les valeurs de Rf en mentionnant le système de solvants, le type de plaque, les conditions de développement et les contrôles.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ce que la CCM peut appuyer',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'La CCM peut montrer si les encres suspectes et connues présentent un comportement de séparation des colorants similaire dans les mêmes conditions.',
          points: ['Comparaison de dépistage', 'Visualisation du profil des colorants', 'Documentation du Rf', 'Sélection d\'échantillons pour tests de confirmation'],
        },
        {
          title: 'Ce que la CCM ne peut pas pouver seule',
          icon: 'mdi:alert-circle-outline',
          description: 'La CCM seule ne peut pas identifier de manière unique un stylo, dater un document ou prouver l\'identité de l\'auteur.',
          points: ['Pas d\'attribution exclusive de source', 'Pas d\'identification du scripteur', 'Pas de conclusion d\'ancienneté par défaut', 'Ne remplace pas les protocoles validés'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Question courante', 'Concept CCM impliqué', 'Réponse détaillée'],
      rows: [
        ['Comment calcule-t-on le Rf ?', 'Distance du colorant divisée par la distance du front de solvant.', 'Mesurez les deux distances depuis la ligne de dépôt, puis divisez. Le résultat n\'a pas d\'unité.'],
        ['Pourquoi les encres se séparent-elles ?', 'Différents colorants ont des affinités distinctes pour les phases stationnaire et mobile.', 'Un simple trait écrit peut contenir plusieurs colorants qui migrent à des vitesses différentes.'],
        ['Deux stylos peuvent-ils avoir le même profil CCM ?', 'Oui, des formulations similaires peuvent produire des profils très proches.', 'La similitude soutient la cohérence chimique, non l\'individualisation à un seul stylo.'],
        ['Pourquoi ma valeur de Rf a-t-elle changé ?', 'Le solvant, la plaque, l\'humidité, la saturation, la température et la taille du dépôt affectent la migration.', 'Les valeurs de Rf ne sont comparables que si les conditions sont contrôlées et documentées.'],
      ],
    },
    {
      type: 'title',
      text: 'Comment le simulateur modélise la séparation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le modèle décrit le mouvement du front de solvant comme un processus d\'ascension capillaire qui ralentit avec le temps, tandis que chaque colorant se voit attribuer une valeur de Rf basée sur deux propriétés simplifiées: son affinité pour le solvant mobile et sa correspondance de polarité avec la phase mobile sélectionnée. C\'est une approche délibérément éducative plutôt que de la chimie instrumentale avancée, mais elle préserve la relation fondamentale à assimiler: le solvant migre en premier, les colorants se partagent entre les phases, et le Rf est calculé d\'après les distances parcourues.',
    },
    {
      type: 'paragraph',
      html: 'La chromatographie sur couche mince est une technique analytique largement acceptée dans les laboratoires de police scientifique en raison de sa simplicité, de sa rapidité et de sa rentabilité. Dans le cadre de l\'examen de documents, elle est principalement utilisée pour comparer la composition des colorants de différents échantillons d\'encre. Les experts prélèvent un minuscule échantillon d\'encre sur le document suspect à l\'aide d\'un scalpel ou d\'une aiguille creuse, le dissolvent dans un solvant approprié tel que la pyridine ou le méthanol, puis le déposent sur la plaque de CCM aux côtés d\'encres de référence.',
    },
    {
      type: 'paragraph',
      html: 'Une fois la plaque développée dans une chambre fermée, les composants individuels de l\'encre se séparent en fonction de leur partage de distribution différentiel entre la phase stationnaire de gel de silice et la phase mobile du solvant. Le chromatogramme obtenu fournit une empreinte visuelle de l\'encre, affichant des bandes de couleurs distinctes à des hauteurs spécifiques. Les examinateurs de documents calculent ensuite le rapport de front pour chaque bande de colorant visible, ce qui permet de déterminer si l\'encre suspecte est chimiquement cohérente avec un instrument d\'écriture saisi ou si elle correspond à une marque et une formule connues dans une base de données de référence.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Phase stationnaire', definition: 'Le revêtement de la plaque CCM, généralement du gel de silice, qui interagit avec les composés et ralentit leur progression.' },
        { term: 'Mobile phase', definition: 'Le système de solvants qui monte le long de la plaque en entraînant les constituants des colorants.' },
        { term: 'Ligne de dépôt', definition: 'La ligne tracée au crayon sur laquelle l\'échantillon d\'encre est appliqué avant le développement.' },
        { term: 'Front de solvant', definition: 'Le point le plus haut atteint par la phase mobile avant le retrait de la plaque.' },
        { term: 'Valeur de Rf', definition: 'Le rapport de front (retention factor): distance de migration du composé divisée par la distance de migration du front de solvant.' },
      ],
    },
    {
      type: 'tip',
      title: 'Conseil pratique d\'interprétation',
      html: 'Dans l\'examen forensique de documents, une non-concordance est particulièrement utile car elle permet d\'exclure une formulation de stylo suspecte. Un profil CCM identique est moins catégorique: il indique que les échantillons sont chimiquement cohérents dans ces conditions, pas qu\'ils proviennent nécessairement du même stylo.',
    },
    {
      type: 'proscons',
      title: 'Forces et limites de la comparaison d\'encres par CCM',
      items: [
        { pro: 'Rapide, peu coûteuse et visuellement intuitive pour séparer les colorants d\'encre.', con: 'Généralement destructive, car un micro-échantillon doit être prélevé sur le document.' },
        { pro: 'Les valeurs de Rf fournissent un cadre structuré pour comparer échantillons suspects et connus.', con: 'Les valeurs de Rf varient en fonction du solvant, de la plaque, de l\'humidité et des conditions de développement.' },
        { pro: 'Utile comme méthode de dépistage avant des analyses plus avancées.', con: 'Ne permet pas de conclure de manière unique à la source du stylo sans preuves complémentaires.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Mise en garde forensique',
      title: 'Ne pas surestimer la chromatographie des encres',
      html: 'Une simulation sur navigateur ne peut pas examiner le papier, l\'âge de l\'encre, la chimie d\'extraction, la qualité de la plaque, la contamination ou les confirmations instrumentales. Utilisez-la pour assimiler la logique de mesure et les limites d\'interprétation, puis fiez-vous aux méthodes validées d\'examen forense de documents pour les preuves réelles.',
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
