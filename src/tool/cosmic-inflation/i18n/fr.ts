import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculateur-inflation-cosmique';
const description = 'Calculez l expansion exponentielle de l univers primitif pendant l epoque de l inflation cosmique.';
const title = 'Calculateur d Inflation Cosmique: Expansion de l Univers Primitif';

const howTo = [
  {
    name: 'Selectionner les valeurs',
    text: 'Faites glisser les curseurs pour voir les resultats.',
  },
  {
    name: 'Comparer les facteurs d echelle',
    text: 'Observez de combien d ordres de grandeur l espace s est etendu.',
  },
  {
    name: 'Analyser la distorsion dynamique',
    text: 'Le canevas montre l expansion de l espace.',
  },
];

const faq = [
  {
    "question": "Qu est-ce que l inflation cosmique et pourquoi s est-elle produite?",
    "answer": "L inflation cosmique est une theorie qui postule une expansion ultra-rapide et exponentielle de l espace dans les toutes premieres fractions de seconde de l univers, precisement vers 10^-36 secondes apres le Big Bang. Elle s est produite parce qu un champ scalaire theorique, appele inflaton, se trouvait dans un etat de haute densite d energie de faux vide, ce qui a genere une pression negative et une force gravitationnelle repulsive qui a etire le tissu de l espace-temps."
  },
  {
    "question": "Que signifie le nombre d e-folds?",
    "answer": "Le nombre d e-folds mesure la duree de la phase d expansion exponentielle. Un e-fold represente le temps au cours duquel la taille de l univers est multipliee par le nombre d Euler (environ 2,718). Si l univers subit N e-folds, son facteur d echelle augmente d un facteur de e^N. Les modeles cosmologiques standards exigent au moins 50 a 60 e-folds pour resoudre correctement les problemes de platitude et de l horizon."
  },
  {
    "question": "Comment l inflation resout-elle le probleme de l horizon?",
    "answer": "Le probleme de l horizon demande pourquoi des regions extremement eloignees de l univers ont des temperatures de rayonnement de fond cosmique de micro-ondes presque identiques, alors que la vitesse de la lumiere ne leur aurait pas permis d interagir pour atteindre l equilibre. L inflation resout cela en montrant que, avant l expansion exponentielle, tout l univers observable etait une minuscule region en equilibre thermique causalement connectee, qui a ete instantanement etiree au-dela de l horizon visuel."
  },
  {
    "question": "Qu est-ce que le probleme de la platitude et comment est-il resolu?",
    "answer": "La densite d energie de l univers actuel est extremement proche de la densite critique, ce qui signifie que l espace est plat avec une marge d erreur minimale. Sans inflation, toute deviation initiale de la platitude aurait grandi de facon exponentielle avec le temps, necessitant un reglage fin impossible lors du Big Bang. L inflation etire la courbure spatiale si violemment que toute courbure initiale est diluee, tout comme la surface d une sphere geante semble plate localement."
  },
  {
    "question": "Qu est-ce que le processus de rechauffement ou reheating?",
    "answer": "Le rechauffement est la transition thermique qui marque la fin de l inflation. Pendant l inflation, l univers se refroidit a des temperatures proches du zero absolu en raison de l expansion exponentielle du volume. Lorsque le champ de l inflaton se desintegre au minimum de son potentiel, son energie restante se deverse dans l espace sous forme de particules du Modele Standard a travers des interactions quantiques, remplissant le cosmos d un plasma chaud et dense qui initie la phase traditionnelle du Big Bang."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculateur d Inflation Cosmique',
    efoldsLabel: 'Nombre d e-folds (N)',
    energyLabel: 'Echelle d Energie Initiale (GeV)',
    scaleFactorResult: 'Croissance du Facteur d Echelle',
    reheatingTempResult: 'Temperature de Rechauffement Estimee',
    chartTitle: 'Distorsion du Tissu Espace-Temps',
    presetGuth: 'Standard (Guth)',
    presetChaotic: 'Chaotique',
    presetExtreme: 'Limites Extremes',
    efoldsTooltip: 'Les modeles typiques predisent entre 50 et 60 e-folds.',
    energyTooltip: 'L echelle GUT est d environ 10^16 GeV.',
    scaleFactorTooltip: 'Represente le facteur d expansion total.',
    reheatingTooltip: 'La temperature a la fin de l inflation.',
    analogyInsuff: 'Inflation moderee. Cette expansion est insuffisante.',
    analogyProton: 'L univers s est étendu de la taille d un proton a celle d une galaxie en une fraction de seconde.',
    analogyObservable: 'L univers s est étendu d une echelle subatomique a une taille superieure a l univers observable en 10^-32 secondes.',
  },
  seo: [
  {
    "type": "title",
    "text": "COSMOLOGIE: La theorie de l inflation cosmique et l expansion de l espace-temps",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "L inflation cosmique represente le pilier fondamental reliant la physique des particules a l astrophysique d observation. Proposee au debut des annees 1980 par des physiciens comme Alan Guth et Andrei Linde, cette theorie postule que l univers primitif a subi une phase d expansion exponentielle alimentee par la densite d energie d un champ scalaire appele inflaton. Cette expansion a augmente le volume de l univers d un facteur d au moins 10^26 en une fraction minuscule de seconde, resolvant les paradoxes profonds du modele classique du Big Bang et fournissant le cadre theorique pour la formation de la structure cosmique."
  },
  {
    "type": "title",
    "text": "Comparaison des modeles et parametres d inflation",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Differents potentiels pour le champ de l inflaton produisent des taux d expansion et des temperatures de rechauffement distincts. Voici les caracteristiques des principaux modeles simules dans ce calculateur:"
  },
  {
    "type": "table",
    "headers": [
      "Modele d Inflation",
      "Plage d e-folds (N)",
      "Echelle d Energie (GeV)",
      "Resultat Physique et Dynamique"
    ],
    "rows": [
      [
        "<strong>Guth Standard</strong>",
        "50 - 60",
        "10^16",
        "Resout la platitude et l horizon; l inflation se termine par la nucleation de bulles dans une transition de phase lente."
      ],
      [
        "<strong>Inflation Chaotique (Linde)</strong>",
        "60 ou plus",
        "10^16",
        "L inflaton descend doucement un potentiel parabolique simple; evite les problemes de transition de phase abrupte."
      ],
      [
        "<strong>Limites Extremes</strong>",
        "90 ou plus",
        "10^19 (Planck)",
        "Energies proches de la limite de gravite quantique; etirement massif de l espace-temps primordial."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Resolution des problemes du Big Bang classique",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Avant le developpement de l inflation, la cosmologie classique du Big Bang souffrait de graves incoherences theoriques. Le probleme de l horizon, decoulant de l homogeneite du fond diffus cosmologique, et le probleme de la platitude, associe a la densite critique de l espace, suggeraient la necessite de conditions initiales extremement improbables. L inflation resout naturellement ces deux difficultes en etirant une micro-region thermiquement homogene et en aplatissant dynamiquement la geometrie spatiale locale. De plus, elle dilue la concentration de monopoles magnetiques qui auraient du se former en abondance dans l univers primitif."
  },
  {
    "type": "title",
    "text": "Preuves astronomiques d observation du modele inflationnaire",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "La theorie de l inflation cosmique n est pas seulement une elegante construction mathematique; elle dispose de solides preuves indirectes confirmees par des satellites spatiaux tels que COBE, WMAP et Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Homogeneite du CMB:</strong> Le rayonnement de fond cosmique de micro-ondes montre une temperature uniforme avec des variations de seulement 1 partie pour 100,000 sur des cotes opposes du ciel visible.",
      "<strong>Geometrie Plate:</strong> Les mesures de la courbure de l univers confirment qu il est spatialement plat avec une marge d erreur de moins de 1%, ce qui est coherent avec un etirement inflationniste massif.",
      "<strong>Absence de Monopoles:</strong> Explique de facon logique l absence totale de monopoles magnetiques stables de grande masse dans notre univers observable.",
      "<strong>Spectre de Fluctuations:</strong> Les anisotropies observees dans le fond cosmique montrent un indice spectral legerement inferieur a 1, exactement comme le predisent les modeles d inflaton a roulement lent."
    ]
  },
  {
    "type": "title",
    "text": "Fluctuations quantiques et les germes des galaxies",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "L aspect le plus extraordinaire de l inflation cosmique est sa capacite a agir comme un microscope cosmique. Les fluctuations quantiques microscopiques du champ de l inflaton se sont etirees a des echelles astronomiques pendant la periode d expansion exponentielle. A la fin de l inflation, ces fluctuations se sont figees sous forme de variations de densite de matiere (perturbations primordiales). Ces differences de densite ont servi de germes gravitationnels qui, sur des milliards d annees, ont attire la matiere pour donner naissance aux premieres etoiles, galaxies, amas de galaxies et a la grande toile cosmique que nous observons aujourd hui."
  }
],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
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
