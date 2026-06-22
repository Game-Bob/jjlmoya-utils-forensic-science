import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualisateur-paradoxe-jumeaux';
const title = 'Visualisateur du Paradoxe des Jumeaux: Dilatation du Temps en Relativité Restreinte';
const description = 'Visualisez comment la relativité restreinte fait qu\'un jumeau voyageant rapidement revient plus jeune que le jumeau resté sur Terre.';

const howTo = [
  {
    name: 'Régler la vitesse du vaisseau spatial',
    text: 'Utilisez le curseur de vitesse pour choisir une fraction de la vitesse de la lumière et observez l\'augmentation du facteur de Lorentz.',
  },
  {
    name: 'Choisir la durée de mission dans le référentiel terrestre',
    text: 'Ajustez le nombre d\'années qui s\'écoulent pour le jumeau restant sur Terre pendant le voyage complet aller et retour.',
  },
  {
    name: 'Comparer les horloges et les lignes d\'univers',
    text: 'Lisez l\'écart d\'âge, le temps écoulé dans le vaisseau, la distance dans le référentiel terrestre et la ligne d\'univers incurvée qui marque le changement de référentiel inertiel du jumeau voyageur.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que le paradoxe des jumeaux en relativité restreinte?',
    answer: 'Le paradoxe des jumeaux est une expérience de pensée dans laquelle un jumeau voyage dans l\'espace à vitesse relativiste et revient sur Terre plus jeune que le jumeau resté à la maison. Il semble paradoxal car chaque jumeau peut initialement décrire l\'autre comme en mouvement, mais le jumeau voyageur change de référentiel inertiel lors du demi-tour, de sorte que les deux chemins à travers l\'espace-temps ne sont pas symétriques.',
  },
  {
    question: 'Pourquoi le jumeau voyageur vieillit-il moins?',
    answer: 'En relativité restreinte, le temps propre écoulé dépend du chemin à travers l\'espace-temps. Une horloge se déplaçant à vitesse v par rapport à un observateur inertiel tic plus lentement d\'un facteur gamma de Lorentz. Le voyageur accumule moins de temps propre le long des trajets aller et retour que le jumeau sédentaire accumule sur Terre.',
  },
  {
    question: 'Est-ce que l\'accélération cause la différence d\'âge?',
    answer: 'L\'accélération est importante car elle permet au voyageur d\'inverser sa direction et de retrouver la Terre, mais l\'écart d\'âge est calculé à partir du chemin complet dans l\'espace-temps, pas seulement de l\'accélération. Même si le demi-tour était très bref, le chemin du voyageur contiendrait toujours moins de temps propre que le chemin terrestre.',
  },
  {
    question: 'Que signifie le facteur de Lorentz gamma?',
    answer: 'Le facteur de Lorentz gamma est égal à 1 divisé par la racine carrée de 1 moins v au carré sur c au carré. Il indique à quel point les intervalles de temps, les longueurs et les énergies diffèrent entre référentiels inertiels. Aux vitesses quotidiennes gamma vaut presque 1, mais près de la vitesse de la lumière il augmente fortement.',
  },
  {
    question: 'Cet effet peut-il être mesuré dans la vie réelle?',
    answer: 'Oui. La dilatation du temps a été mesurée avec des particules rapides, des horloges atomiques embarquées sur des avions, des systèmes de synchronisation satellitaires et des accélérateurs de particules. Le paradoxe des jumeaux utilise une histoire de voyage extrême, mais l\'effet d\'horloge sous-jacent est une partie régulièrement vérifiée de la physique moderne.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualisation spatio-temporelle du paradoxe des jumeaux',
    controlsTitle: 'Contrôles du paradoxe des jumeaux',
    worldlineLabel: 'Diagramme de ligne d\'univers pour le jumeau terrestre et le jumeau voyageur',
    earthTwin: 'Age du jumeau terrestre',
    travelingTwin: 'Age du voyageur',
    presetCruise: 'Croisiere',
    presetRelativistic: 'Relativiste',
    presetExtreme: 'Extreme',
    velocityLabel: 'Vitesse du vaisseau',
    earthYearsLabel: 'Temps ecoule sur Terre',
    ageGapLabel: 'Écart d\'âge à la réunion',
    gammaLabel: 'Facteur de Lorentz',
    shipTimeLabel: 'Temps propre du voyageur',
    distanceLabel: 'Distance jusqu\'au demi-tour',
    yearsUnit: 'ans',
    yearsShortUnit: 'ans',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculateur du Paradoxe des Jumeaux pour la Relativité Restreinte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le visualisateur du paradoxe des jumeaux transforme l\'une des idées les plus célèbres de la relativité restreinte en un diagramme spatio-temporel interactif. Réglez la vitesse d\'un vaisseau spatial comme fraction de la vitesse de la lumière, choisissez combien d\'années s\'écoulent sur Terre, et le calculateur calcule le facteur de Lorentz, le temps propre du voyageur, l\'écart d\'âge à la réunion et la distance aller jusqu\'au point de demi-tour. La disposition visuelle sépare l\'horloge terrestre de l\'horloge du vaisseau afin que l\'asymétrie soit visible au lieu d\'être cachée dans des formules.',
    },
    {
      type: 'title',
      text: 'Comment le calcul fonctionne',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La quantité centrale est le facteur de Lorentz: gamma = 1 / sqrt(1 - v^2 / c^2). Pour un simple voyage aller-retour à vitesse de croisière constante, le temps vécu par le voyageur est la durée de mission dans le référentiel terrestre divisée par gamma. La différence entre ces deux durées est l\'écart d\'âge lors de la réunion des jumeaux. L\'outil montre également la distance de demi-tour dans le référentiel terrestre, qui est la moitié du temps terrestre total multipliée par la vitesse du vaisseau en années-lumière par an.',
    },
    {
      type: 'table',
      headers: ['Vitesse', 'Facteur de Lorentz', 'Rythme de l\'Horloge du Voyageur', 'Signification Physique'],
      rows: [
        ['0.50c', '1.155', '86.6% du rythme terrestre', 'Un effet relativiste notable mais modéré.'],
        ['0.86c', '1.960', '51.0% du rythme terrestre', 'Le voyageur vieillit environ deux fois moins vite durant la croisière.'],
        ['0.98c', '5.025', '19.9% du rythme terrestre', 'La dilatation extrême du temps domine le résultat de la mission.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi la situation n est pas symetrique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'À première vue, chaque jumeau peut dire que l\'autre bouge, ce qui rend le résultat apparemment contradictoire. La résolution est que le jumeau terrestre reste approximativement dans un référentiel inertiel, tandis que le jumeau voyageur part, inverse sa direction et revient. Ce changement de référentiel inertiel donne au voyageur un chemin différent à travers l\'espace-temps. La ligne d\'univers dessinée par cet outil se plie au moment du demi-tour, tandis que la ligne d\'univers du jumeau terrestre reste droite.',
    },
    {
      type: 'title',
      text: 'Lecture du diagramme de ligne d univers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une ligne d\'univers est une carte d\'un objet à travers l\'espace-temps plutôt qu\'à travers l\'espace seul. Dans ce visualisateur, la ligne verticale de la Terre représente le jumeau qui reste à la maison. Le chemin rouge incliné représente le voyageur quittant la Terre et y revenant. L\'augmentation de la vitesse incline le chemin du voyageur de manière plus dramatique et réduit la quantité de temps propre accumulé sur l\'horloge du vaisseau spatial.',
    },
    {
      type: 'list',
      items: [
        '<strong>Écart d\'âge:</strong> à quel point le voyageur est plus jeune à la réunion.',
        '<strong>Facteur de Lorentz:</strong> le multiplicateur qui relie le temps du référentiel terrestre au temps propre du voyageur.',
        '<strong>Temps propre du voyageur:</strong> le temps réel écoulé mesuré par une horloge à bord du vaisseau spatial.',
        '<strong>Distance jusqu\'au demi-tour:</strong> la distance aller dans le référentiel terrestre avant que le voyageur n\'inverse sa route.',
      ],
    },
    {
      type: 'title',
      text: 'Preuves pratiques de la dilatation du temps',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le paradoxe des jumeaux est une expérience de pensée claire, mais la dilatation du temps n\'est pas spéculative. Les muons créés dans la haute atmosphère survivent assez longtemps pour atteindre le sol car leurs horloges en mouvement sont dilatées du point de vue terrestre. Les expériences d\'horloges atomiques à bord d\'avions et la navigation satellitaire de précision nécessitent également des corrections relativistes. Les mêmes mathématiques derrière ce visualisateur font partie de l\'infrastructure de chronométrage utilisée par les systèmes GPS modernes.',
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
