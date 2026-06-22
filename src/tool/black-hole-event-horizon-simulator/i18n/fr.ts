import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-horizon-evenements';
const title = 'Simulateur de l\'horizon des événements d\'un trou noir';
const description = 'Explorez l\'horizon des événements d\'un trou noir avec des calculs interactifs: masse, distance orbitale, dilatation du temps, sphère de photons, vitesse de libération et rayon de Schwarzschild.';

const howTo = [
  {
    name: 'Choisissez la masse du trou noir',
    text: 'Déplacez le curseur de masse d\'un trou noir stellaire à un trou noir supermassif et observez le rayon de Schwarzschild évoluer en temps réel.',
  },
  {
    name: 'Approchez la sonde de l\'horizon',
    text: 'Ajustez la distance en rayons de Schwarzschild pour comparer une orbite extérieure sécurisée, la région de la sphère de photons et le bord de l\'horizon.',
  },
  {
    name: 'Inspectez les effets relativistes',
    text: 'Consultez la vitesse de libération, la dilatation gravitationnelle du temps, le décalage vers le rouge et la période orbitale pour comprendre pourquoi l\'intuition classique s\'effondre près de l\'horizon.',
  },
  {
    name: 'Comparez les rayons caractéristiques',
    text: 'Utilisez les anneaux guides de l\'horizon, de la sphère de photons et de l\'ISCO pour visualiser les différentes frontières autour d\'un trou noir sans rotation.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que l\'horizon des événements d\'un trou noir ?',
    answer: 'L\'horizon des événements est la limite où la vitesse de libération atteint la vitesse de la lumière. Une fois qu\'un objet le franchit, aucun signal se déplaçant à la vitesse de la lumière ou en dessous ne peut revenir vers l\'univers extérieur.',
  },
  {
    question: 'Que signifie le rayon de Schwarzschild ?',
    answer: 'Le rayon de Schwarzschild est le rayon de l\'horizon des événements pour un trou noir sans rotation ni charge électrique. Il croît linéairement avec la masse: doubler la masse double le rayon de l\'horizon.',
  },
  {
    question: 'Qu\'est-ce que la sphère de photons ?',
    answer: 'La sphère de photons est une région située à 1,5 rayon de Schwarzschild où la lumière peut orbiter autour du trou noir sur une trajectoire instable. De petites perturbations font que les photons s\'échappent vers l\'extérieur ou tombent vers l\'intérieur.',
  },
  {
    question: 'Qu\'est-ce que l\'ISCO ?',
    answer: 'ISCO signifie "Innermost Stable Circular Orbit" (orbite circulaire stable la plus interne). Pour un trou noir sans rotation, elle se situe à 3 rayons de Schwarzschild, ou 6 rayons gravitationnels, et marque la dernière orbite circulaire stable pour les particules massives.',
  },
  {
    question: 'Pourquoi la dilatation du temps augmente-t-elle près de l\'horizon ?',
    answer: 'Dans la géométrie de Schwarzschild, les horloges situées plus profondément dans le champ gravitationnel marquent le temps plus lentement par rapport à des observateurs éloignés. Le facteur affiché tend vers zéro à mesure que la sonde s\'approche de l\'horizon.',
  },
  {
    question: 'Ce simulateur peut-il modéliser un trou noir en rotation ?',
    answer: 'Non. Il utilise la solution de Schwarzschild, qui suppose l\'absence de rotation et de charge électrique. Les trous noirs astrophysiques réels tournent souvent, et cette rotation modifie la taille de l\'horizon, la position de l\'ISCO et le comportement du disque d\'accrétion.',
  },
  {
    question: 'Pourquoi les trous noirs supermassifs sont-ils moins "violents" à l\'horizon ?',
    answer: 'Le gradient de marée à l\'horizon diminue à mesure que la masse du trou noir augmente. Un petit trou noir stellaire peut étirer violemment les objets près de l\'horizon, tandis qu\'un trou noir supermassif peut présenter un gradient local beaucoup plus doux à cette limite.',
  },
  {
    question: 'La visualisation montre-t-elle une image réelle d\'un trou noir ?',
    answer: 'Il s\'agit d\'un diagramme pédagogique et non d\'une observation par lancer de rayons. Les anneaux et le disque sont mis à l\'échelle des rayons de Schwarzschild simplifiés pour faciliter la comparaison des zones physiques.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Carte du champ de l\'horizon',
    visualCaption: 'La sonde se déplace dans la géométrie de Schwarzschild mise à l\'échelle. Les anneaux guides brillants marquent l\'horizon, la sphère de photons et l\'orbite circulaire stable la plus interne.',
    controlsTitle: 'Contrôles du trou noir',
    eventHorizon: 'Horizon des événements',
    photonSphere: 'Sphère de photons',
    isco: 'ISCO',
    rsLabel: 'Rayon de Schwarzschild',
    diameterLabel: 'Diamètre',
    timeLabel: 'Dilatation du temps',
    redshiftLabel: 'Décalage vers le rouge',
    statusSafe: 'Hors de la région d\'orbite stable',
    statusPhoton: 'Dans la zone de la sphère de photons',
    statusInside: 'À la limite de l\'horizon',
    diameter: 'Diamètre de l\'horizon',
    lightCrossing: 'Temps de traversée de la lumière',
    timeDilation: 'Rythme de l\'horloge vs observateur lointain',
    redshift: 'Décalage vers le rouge gravitationnel',
    mass: 'Masse du trou noir',
    distance: 'Distance de la sonde',
    speed: 'Vitesse orbitale de la sonde',
    escapeVelocity: 'Vitesse de libération',
    orbitalPeriod: 'Période orbitale de la sonde',
    tidalGradient: 'Gradient de marée',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'masses solaires',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 masses solaires',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur d\'horizon des événements: rayon de Schwarzschild, sphère de photons et dilatation du temps',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur transforme les concepts fondamentaux des trous noirs de Schwarzschild en un modèle visuel interactif. Modifiez la masse, déplacez la sonde et comparez la réponse de l\'horizon, de la sphère de photons, de l\'ISCO, de la vitesse de libération, du décalage vers le rouge gravitationnel et de la dilatation du temps.',
    },
    {
      type: 'paragraph',
      html: 'Conçu pour les étudiants en astronomie, les enseignants et les curieux, cet outil dépasse la simple formule statique. Il relie les données numériques à un diagramme spatial pour illustrer pourquoi l\'horizon n\'est pas une surface matérielle, pourquoi les photons suivent une orbite instable et pourquoi le mouvement circulaire stable s\'arrête avant l\'horizon.',
    },
    {
      type: 'title',
      text: 'Comment le rayon de l\'horizon est calculé',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour un trou noir sans rotation ni charge, le rayon de l\'horizon est le <strong>rayon de Schwarzschild</strong>. Il est calculé via la formule <strong>Rs = 2GM / c^2</strong>, où G est la constante gravitationnelle, M la masse du trou noir et c la vitesse de la lumière. Une masse solaire correspond à un rayon d\'environ 2,95 km.',
    },
    {
      type: 'paragraph',
      html: 'Comme le rayon de Schwarzschild varie linéairement avec la masse, un trou noir de 10 masses solaires a un rayon d\'environ 29,5 km, tandis qu\'un trou noir supermassif comme Sagittarius A* (4 millions de masses solaires) atteint environ 11,8 millions de kilomètres. Le curseur utilise une échelle logarithmique pour couvrir ces ordres de grandeur.',
    },
    {
      type: 'table',
      headers: ['Région', 'Rayon (en Rs)', 'Signification'],
      rows: [
        ['Horizon des événements', '1.0 Rs', 'Frontière unidirectionnelle où la vitesse de libération égale celle de la lumière.'],
        ['Sphère de photons', '1.5 Rs', 'Orbite circulaire instable pour la lumière.'],
        ['ISCO', '3.0 Rs', 'Orbite circulaire stable la plus interne pour les particules massives.'],
        ['Champ faible', '6 Rs et +', 'La gravité reste forte, mais les orbites circulaires sont stables.'],
      ],
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
      applicationCategory: 'ScientificApplication',
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