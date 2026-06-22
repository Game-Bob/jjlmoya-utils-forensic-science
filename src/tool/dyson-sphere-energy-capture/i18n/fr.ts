import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-energie-sphere-dyson';
const title = 'Simulateur de Capture d\'Énergie d\'une Sphère de Dyson';
const description = 'Estimez des conceptions d\'essaim, d\'anneau, de coque et de nuage de statites de Dyson pour différentes étoiles. Calculez la puissance capturée, le rayon orbital, la masse de matériau et la couverture nécessaire pour atteindre une échelle de Kardashev cible.';

const howTo = [
  {
    name: 'Choisissez un type d\'étoile',
    text: 'Commencez avec une naine M, une étoile semblable au Soleil, une étoile de type A, une géante rouge ou une géante bleue. Le simulateur utilise des valeurs représentatives de luminosité et de masse pour estimer le rayon du collecteur et la période orbitale.',
  },
  {
    name: 'Sélectionnez l\'architecture de la mégastructure',
    text: 'Comparez un essaim de Dyson, un anneau équatorial, une coque rigide ou un nuage de miroirs statites. Chaque conception a une efficacité de capture, une densité de matériau et des hypothèses de stabilité différentes.',
  },
  {
    name: 'Réglez la couverture et la température de fonctionnement',
    text: 'Augmentez la couverture pour capturer plus de puissance stellaire, puis ajustez la température de fonctionnement pour rapprocher ou éloigner les collecteurs de l\'étoile.',
  },
  {
    name: 'Choisissez une cible Kardashev',
    text: 'Utilisez le curseur de cible pour voir quelle partie de l\'étoile doit être couverte pour atteindre un objectif de puissance à l\'échelle d\'une civilisation.',
  },
];

const faq = [
  {
    question: 'Quelle est la différence entre une sphère de Dyson et un essaim de Dyson ?',
    answer: 'Une sphère de Dyson rigide est une coque continue autour d\'une étoile, tandis qu\'un essaim de Dyson est une grande collection de collecteurs orbitaux indépendants. La plupart des discussions d\'ingénierie favorisent les essaims car une coque solide serait structurellement instable et extrêmement intensive en matériaux.',
  },
  {
    question: 'Comment le simulateur choisit-il le rayon optimal ?',
    answer: 'Il estime la distance à laquelle les collecteurs rayonnant des deux côtés atteignent la température de fonctionnement sélectionnée sous la luminosité stellaire choisie. Les collecteurs plus chauds peuvent orbiter plus près, tandis que les collecteurs plus froids nécessitent des rayons plus grands.',
  },
  {
    question: 'Que signifie la notation Kardashev ici ?',
    answer: 'La valeur Kardashev est calculée à partir de la puissance capturée en utilisant la forme logarithmique commune K = (log10(P) - 6) / 10, où P est la puissance en watts. Une valeur proche de K1 représente une utilisation d\'énergie à l\'échelle planétaire, tandis que K2 s\'approche de la production stellaire complète.',
  },
  {
    question: 'La masse de matériau est-elle réaliste ?',
    answer: 'C\'est une estimation éducative de premier ordre basée sur la surface du collecteur, la densité surfacique et un facteur de stabilité. Les conceptions réelles nécessiteraient du maintien en station, du transport d\'énergie, des pertes minières, de la redondance, du rejet de chaleur et une infrastructure de fabrication.',
  },
  {
    question: 'Pourquoi les étoiles brillantes nécessitent-elles des systèmes de collecteurs aussi grands ?',
    answer: 'Les étoiles de haute luminosité repoussent le rayon thermique sécurisé vers l\'extérieur. Cela augmente la surface nécessaire pour une fraction de couverture donnée, donc la demande de matériau peut augmenter plus rapidement que la puissance capturée ne le laisse intuitivement penser.',
  },
  {
    question: 'Une civilisation peut-elle atteindre le type II de Kardashev avec une couverture partielle ?',
    answer: 'Oui, si l\'étoile hôte est assez brillante et les collecteurs efficaces. Autour d\'une étoile semblable au Soleil, atteindre près du type II nécessite de capturer une grande fraction de la luminosité solaire, mais autour d\'étoiles plus lumineuses, le même objectif de puissance peut nécessiter une fraction de couverture plus faible.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisation du collecteur Dyson',
    starType: 'Type d\'étoile',
    structureType: 'Structure',
    coverage: 'Couverture du collecteur',
    operatingTemp: 'Température de fonctionnement',
    kardashevTarget: 'Cible Kardashev',
    kardashevRating: 'Notation actuelle',
    capturedPower: 'Puissance capturée',
    optimalRadius: 'Rayon optimal',
    targetCoverage: 'Couverture cible',
    materialMass: 'Masse de matériau',
    captureMeter: 'Progrès vers la cible',
    statusReady: 'Ajustez le système pour estimer la demande du collecteur.',
    statusUnderbuilt: 'La couverture est inférieure à la cible de Kardashev choisie. Ajoutez des collecteurs ou choisissez une étoile plus brillante.',
    statusBalanced: 'La couverture et la puissance stellaire sont proches de l\'objectif civilisationnel choisi.',
    statusExtreme: 'Cette configuration dépasse la cible. Elle capture une puissance énorme, mais la demande en matériaux augmente vite.',
    orbitalPeriod: 'Période orbitale',
    collectorArea: 'Surface du collecteur',
    mercuryMasses: '{value} masses de Mercure',
    kilograms: '{value} kg',
    daysUnit: '{value} jours',
    starMDwarf: 'Naine M',
    starSun: 'Étoile de type G comme le Soleil',
    starA: 'Étoile de type A',
    starRedGiant: 'Géante rouge',
    starBlueGiant: 'Géante bleue',
    structureSwarm: 'Essaim de Dyson',
    structureRing: 'Anneau équatorial',
    structureShell: 'Coque rigide',
    structureStatite: 'Nuage de miroirs statites',
  },
  seo: [
    { type: 'title', text: 'Simulateur de Capture d\'Énergie d\'une Sphère de Dyson', level: 2 },
    { type: 'paragraph', html: 'Une sphère de Dyson n\'est pas seulement une image de science-fiction d\'une étoile à l\'intérieur d\'une coque. C\'est une famille de concepts possibles de mégastructure pour intercepter la luminosité stellaire: des essaims de satellites, des anneaux équatoriaux, des nuages minces de miroirs et la fameuse mais problématique coque rigide. Ce simulateur transforme ces idées en nombres afin que vous puissiez comparer comment le type d\'étoile, la température du collecteur, la couverture et la conception de la structure modifient le budget énergétique.' },
    { type: 'paragraph', html: 'Le calculateur estime la puissance capturée, le rayon thermique orbital, la surface du collecteur, la période orbitale, la masse de matériau et la couverture nécessaire pour un objectif d\'échelle Kardashev choisi. Il est conçu pour les étudiants, les constructeurs de mondes, les communicateurs scientifiques et tous ceux qui cherchent à comprendre pourquoi les civilisations de type II sont difficiles: le défi n\'est pas seulement la puissance, mais aussi la surface, la chaleur, l\'exploitation minière, la stabilité et la logistique orbitale.' },
    { type: 'title', text: 'Comment le rayon de Dyson est estimé', level: 3 },
    { type: 'paragraph', html: 'Le rayon optimal est calculé à partir de la luminosité stellaire et de la température de fonctionnement du collecteur. Un collecteur proche d\'une étoile brillante reçoit un flux intense et doit fonctionner chaud ou rejeter d\'énormes quantités de chaleur. S\'éloigner réduit le stress thermique, mais la surface du collecteur requise croît avec le carré de la distance. Ce compromis explique pourquoi la même fraction de couverture peut être modeste autour d\'une naine M faible et énorme autour d\'une géante bleue.' },
    { type: 'title', text: 'Essaim de Dyson, Anneau, Coque et Nuage de Statites: Comparaisons', level: 3 },
    {
      type: 'list', items: [
        '<strong>Essaim de Dyson :</strong> de nombreux collecteurs orbitaux indépendants. C\'est l\'architecture à grande échelle la plus plausible car elle peut être construite progressivement et ne nécessite pas de coque stellaire rigide.',
        '<strong>Anneau équatorial :</strong> une bande de collecteurs plus étroite avec une efficacité de couverture plus faible. Il est plus facile à imaginer comme première mégastructure, mais ne peut pas capturer la production stellaire complète sans devenir un essaim plus large.',
        '<strong>Coque rigide :</strong> visuellement iconique mais mécaniquement défavorable. Une coque autour d\'une étoile a de graves problèmes de stabilité et de matériau, donc le simulateur lui attribue une masse élevée et une stabilité faible.',
        '<strong>Nuage de miroirs statites :</strong> réflecteurs ultralégers maintenus partiellement par la pression de radiation. Il réduit la demande de matériau mais a une tolérance thermique plus faible et des exigences de contrôle exigeantes.',
      ],
    },
    { type: 'title', text: 'Couverture nécessaire pour l\'échelle Kardashev', level: 3 },
    { type: 'paragraph', html: 'L\'échelle Kardashev exprime la consommation énergétique d\'une civilisation de manière logarithmique. Dans cet outil, les watts capturés sont convertis en une notation K en utilisant K = (log10(P) - 6) / 10. Un essaim de Dyson partiel autour du Soleil peut dépasser la consommation énergétique humaine actuelle de plusieurs ordres de grandeur bien avant d\'atteindre le statut complet de type II. Le résultat de couverture cible montre la fraction de luminosité stellaire qui doit être interceptée pour l\'objectif sélectionné.' },
    {
      type: 'table', headers: ['Choix de conception', 'Avantage principal', 'Principal goulot d\'étranglement'], rows: [
        ['Essaim de Dyson', 'Constructible par étapes avec orbites indépendantes', 'Contrôle du trafic et transport d\'énergie'],
        ['Anneau équatorial', 'Surface initiale plus faible et géométrie plus simple', 'Couverture limitée'],
        ['Coque rigide', 'Interception maximale dans un diagramme simple', 'Instabilité structurelle et masse énorme'],
        ['Nuage de statites', 'Très faible densité surfacique', 'Maintien en station précis et limites thermiques']
      ]
    },
    { type: 'title', text: 'Masse de matériau et vérification de l\'exploitation minière', level: 3 },
    { type: 'paragraph', html: 'L\'estimation du matériau multiplie la surface du collecteur par une densité surfacique supposée et un facteur de stabilité de conception. Elle rapporte intentionnellement la masse en masses de Mercure lorsque le nombre devient astronomique, car de nombreuses discussions sur les essaims de Dyson imaginent démanteler de petites planètes ou des astéroïdes pour obtenir des matières premières. Même les collecteurs minces deviennent massifs lorsqu\'ils sont répartis sur des échelles d\'unités astronomiques.' },
    { type: 'paragraph', html: 'Utilisez le résultat comme un guide d\'ordre de grandeur plutôt que comme un plan. La véritable ingénierie des mégastructures nécessiterait des modèles de dommages par radiation, des cycles thermiques, l\'évitement de collisions, le contrôle d\'attitude, le transport d\'énergie, le rendement de fabrication et l\'évolution orbitale à long terme. La valeur du simulateur est de rendre visibles les premières contraintes immédiatement.' }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};