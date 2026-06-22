const slug = 'calculateur-survie-atmosphere-planetaire';
const title = 'Calculateur de Survie en Atmosphere Planetaire';
const description = 'Combien de temps pouvez-vous survivre sans combinaison spatiale sur Mars, Venus, Titan, Jupiter ou l\'Everest? Ce calculateur interactif estime le temps de survie humaine non protegee a partir de la pression, de la temperature, de l\'oxygene, du dioxyde de carbone, de la toxicite et des risques de vent.';

const howTo = [
  {
    name: 'Choisissez une destination pour charger des donnees atmospheriques reelles',
    text: 'Selectionnez Mars, Venus, Titan, Jupiter ou le sommet de l\'Everest comme parametre predefini pour definir instantanement des valeurs realistes de pression, de temperature, de melange de gaz et de vent pour cet environnement.',
  },
  {
    name: 'Modifiez les conditions pour explorer le point de bascule',
    text: 'Deplacez les curseurs de pression, de temperature, d\'oxygene et de dioxyde de carbone pour voir quel danger devient mortel en premier. De petits changements peuvent completement deplacer le facteur limitant.',
  },
  {
    name: 'Lisez l\'horloge de survie et le maillon le plus faible',
    text: 'Le minuteur montre le temps estime avant l\'apparition d\'un stress biologique severe. L\'etiquette du facteur limitant vous indique exactement quel danger constitue la menace la plus urgente a ce moment.',
  },
  {
    name: 'Comparez les dangers visuellement sur la carte des risques',
    text: 'Les branches radiales et le graphique chronologique montrent comment la pression, la chaleur, le froid, l\'hypoxie, la toxicite et le vent contribuent chacun au risque total au fil du temps.',
  },
];

const faq = [
  {
    question: 'Un etre humain peut-il survivre sur Mars sans combinaison spatiale?',
    answer: 'Non. Mars a une pression extremement basse (moins de 1 % de celle de la Terre), presque pas d\'oxygene respirable et une atmosphere principalement composee de dioxyde de carbone. La perte de conscience surviendrait en quelques secondes et des blessures graves en quelques minutes sans support de pression et d\'oxygene.',
  },
  {
    question: 'Pourquoi la pression atmospherique est-elle si cruciale pour la survie humaine?',
    answer: 'En dessous de la limite d\'Armstrong (environ 6,3 kPa), l\'eau peut bouillir a la temperature du corps. Une pression basse empeche egalement l\'oxygene de penetrer dans le sang, meme si l\'air est compose a 100 % d\'oxygene. C\'est pourquoi la pression est l\'un des dangers mortels les plus rapides.',
  },
  {
    question: 'Quelle planete a l\'atmosphere la plus habitable?',
    answer: 'Parmi les destinations du Systeme Solaire, la Terre a haute altitude (Everest) est la plus habitable, bien que toujours dangereuse sans acclimatation. Titan est la moins hostile des autres options car sa pression est gerable, mais il manque d\'oxygene et est cryogeniquement froid. Aucune planete ou lune autre que la Terre n\'a d\'atmosphere respirable.',
  },
  {
    question: 'Venus est-elle pire a cause de la chaleur ou de la pression?',
    answer: 'Les deux sont extremes a la surface. Venus a une pression ecrasante (92 fois celle de la Terre) et une temperature de surface plus chaude qu\'un four de cuisine. Ces dangers agissent ensemble, donc l\'outil signale les deux comme des menaces dominantes immediates.',
  },
  {
    question: 'Pourquoi Titan a-t-il une estimation de survie plus longue que Mars?',
    answer: 'Titan a une atmosphere dense, donc la pression en elle-meme n\'est pas un probleme immediat. Le temps de survie est limite par le froid extreme (environ -180 degres C) et l\'absence complete d\'oxygene. Mars echoue sur la pression, Titan echoue sur la temperature.',
  },
  {
    question: 'Quelles sont les principales causes de mort dans l\'espace sans combinaison?',
    answer: 'Les tueurs les plus rapides sont l\'exposition au vide (perte de pression provoquant l\'ebullisme et l\'hypoxie en quelques secondes), suivis par la temperature extreme, la composition de gaz toxiques et la perte de chaleur due au vent. Le calculateur suit les six categories de dangers.',
  },
  {
    question: 'Cet outil est-il adapte a la planification de missions spatiales?',
    answer: 'Non. C\'est un modele educatif qui utilise des seuils biologiques simplifies. L\'analyse reelle de la decompression, de l\'hypoxie, des gaz toxiques, des lesions thermiques et des risques de mission necessite une evaluation experte en medecine et en ingenierie pour la securite.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Carte des risques atmospheriques',
    timeline: 'Chronologie des risques biologiques',
    controls: 'Controles de l\'atmosphere',
    destination: 'Destination',
    pressure: 'Pression',
    temperature: 'Temperature',
    oxygen: 'Oxygene',
    co2: 'Dioxyde de carbone',
    limitingFactor: 'Facteur limitant',
    verdict: 'Verdict',
    exposureSummary: "Résumé d'exposition",
    atmosphericModel: "Modèle d'exposition atmosphérique",
    survivalEnvelope: "enveloppe de survie",
    survival: 'Survie',
    mode: 'Mode',
    metric: 'Métrique',
    imperial: 'Impérial',
    unitSystem: "Système d'unités",
    vitalStress: 'stress vital',
    timeLabel: 'temps',
    estimatedSurvival: 'survie estimée',
    hazardPressure: 'Pression',
    hazardTemperature: 'Température',
    hazardOxygen: 'Oxygène',
    hazardToxicity: 'Toxicité',
    hazardWind: 'Vent',
    presetMars: 'Mars',
    presetVenus: "Surface de Vénus",
    presetTitan: 'Titan',
    presetJupiter: "Couche nuageuse de Jupiter",
    presetEverest: "Terre, sommet de l'Everest",
    noteMars: "Presque le vide, froid extrême et presque pas d'oxygène.",
    noteVenus: 'Pression écrasante et chaleur de four dominent immédiatement.',
    noteTitan: "Air dense d'azote mais froid mortel et pas d'oxygène.",
    noteJupiter: 'Atmosphère riche en hydrogène, froid sévère et vents violents.',
    noteEverest: "Survivable pour les alpinistes entraînés, mais hypoxie et froid sont graves.",
    verdictSeconds: 'Secondes',
    verdictMinutes: 'Minutes',
    verdictHours: 'Heures',
    verdictExtended: "Risque d'exposition prolongée",
  },
  seo: [
    {
      type: 'title',
      text: 'Calculateur de Survie en Atmosphere Planetaire: Combien de temps pouvez-vous survivre sans combinaison spatiale sur Mars, Venus, Titan ou Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si vous etiez soudainement expose a l\'atmosphere d\'une autre planete sans combinaison spatiale, combien de temps survivriez-vous? Ce calculateur estime le temps de survie humaine non protegee sur Mars, Venus, Titan, Jupiter et l\'Everest en simulant six dangers: pression totale, disponibilite d\'oxygene, temperature, concentration de dioxyde de carbone, chimie toxique et contrainte du vent. Il repond aux questions que les passionnes d\'espace et les etudiants posent le plus souvent: quelle planete vous tue le plus vite, quel danger est la veritable menace, et de quoi auriez-vous besoin pour survivre.',
    },
    {
      type: 'paragraph',
      html: 'Le resultat est une estimation educative, pas un nombre pour la planification de mission. Il est concu pour aider a comparer pourquoi differents mondes sont dangereux de manieres tres differentes. Mars echoue sur la pression et l\'hypoxie en quelques secondes. Venus combine une pression ecrasante avec une chaleur de four. Titan est cryogenique et n\'a pas d\'oxygene. Les couches nuageuses des geantes gazeuses ajoutent des compositions toxiques et des vents supersoniques. Chaque environnement enseigne quelque chose de different sur ce qui rend la Terre uniquement habitable.',
    },
    {
      type: 'title',
      text: 'Quelle planete a l\'atmosphere la plus habitable?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Parmi les destinations de ce calculateur, les environnements de haute altitude de la Terre (comme le sommet de l\'Everest) sont les plus habitables, bien que toujours dangereux sans preparation. Parmi les autres planetes, Titan a la pression la plus clemente mais echoue sur la temperature et l\'oxygene. Aucune destination autre que la Terre n\'offre actuellement d\'atmosphere respirable. Le calculateur vous aide a voir exactement pourquoi chaque monde echoue et quel danger franchit le premier le seuil critique.',
    },
    {
      type: 'title',
      text: 'Comment chaque danger affecte le corps',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pression (basse):</strong> en dessous de 6,3 kPa, les liquides corporels peuvent bouillir (ebullisme). Meme au-dessus, une pression basse empeche l\'absorption d\'oxygene. C\'est le tueur le plus rapide dans les environnements de quasi-vide.',
        '<strong>Pression (haute):</strong> une pression extreme comprime les gaz respiratoires, augmente le risque de narcose a l\'azote et peut endommager mecaniquement les poumons et les sinus.',
        '<strong>Pression partielle d\'oxygene:</strong> l\'oxygene respirable depend a la fois du pourcentage de gaz et de la pression totale. Une atmosphere tenue peut contenir 21 % d\'oxygene et pourtant provoquer une hypoxie.',
        '<strong>Temperature (chaleur):</strong> au-dessus d\'environ 60 degres C, la denaturation des proteines et la defaillance organique commencent rapidement. La temperature de surface de Venus depasse 460 degres C.',
        '<strong>Temperature (froid):</strong> en dessous de zero, les gelures et l\'hypothermie s\'installent. A des temperatures cryogeniques comme les -180 degres C de Titan, le gel des tissus est presque immediat.',
        '<strong>Toxicite du dioxyde de carbone:</strong> le CO2 au-dessus d\'environ 5 % provoque des etourdissements, des maux de tete et une perte de conscience. De nombreuses atmospheres planetaires sont principalement composees de CO2.',
        '<strong>Chimie toxique:</strong> les composes soufres, l\'ammoniac, le methane et l\'hydrogene peuvent etre corrosifs, asphyxiants ou chimiquement dangereux.',
        '<strong>Vent:</strong> les vents forts accelerent la perte de chaleur par convection, provoquent un refroidissement eolien, projetent des debris et peuvent destabiliser physiquement une personne.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Pourquoi la basse pression tue avant tout le reste',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars a une pression de surface d\'environ 0,6 kPa, bien en dessous de la limite d\'Armstrong de 6,3 kPa ou l\'eau peut bouillir a la temperature du corps. Une exposition non protegee provoquerait un ebullisme, une hypoxie rapide et une perte de conscience en moins de 15 secondes. Meme si le froid (moyenne de -60 degres C) et l\'atmosphere riche en dioxyde de carbone sont pris en compte, la pression et la privation d\'oxygene dominent la chronologie. Un vetement de pression fonctionnel et une alimentation en oxygene sont le minimum absolu pour survivre sur Mars.',
    },
    {
      type: 'title',
      text: 'Venus: Pression extreme et chaleur agissant ensemble',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La surface de Venus a une pression de 92 atmospheres terrestres (environ 9,3 MPa, equivalent a etre a 900 metres sous l\'eau) et une temperature de surface de 462 degres C. L\'atmosphere est composee a 96 % de dioxyde de carbone avec des nuages d\'acide sulfurique. Ces dangers agissent simultanement plutot que sequentiellement: la pression ecrase, la chaleur cuit et le CO2 empoisonne. Dans ce calculateur, Venus est la seule destination ou plusieurs dangers franchissent le seuil mortel presque au meme instant.',
    },
    {
      type: 'title',
      text: 'Titan: La pression la plus accueillante du Systeme Solaire en dehors de la Terre',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La lune de Saturne, Titan, est inhabituelle car sa pression de surface (environ 147 kPa, soit 1,45 fois celle de la Terre) est en fait dans une plage qu\'un humain pourrait tolerer. Aucune combinaison de pression ne serait necessaire pour cette seule variable. Cependant, Titan n\'a essentiellement pas d\'oxygene, une temperature de surface de -179 degres C et une atmosphere de methane et d\'azote. Le calculateur montre la pression comme gerable, mais la temperature et la privation d\'oxygene dominent immediatement. Titan rappelle que la survie depend de l\'ensemble du profil de danger, pas d\'une seule mesure.',
    },
    {
      type: 'title',
      text: 'Comment interpreter l\'horloge de survie et la carte des risques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'horloge de survie estime l\'intervalle avant l\'apparition d\'un stress biologique severe chez une personne non protegee. L\'etiquette du facteur limitant identifie quel danger franchit le premier le seuil critique. Les branches de danger radiales montrent la gravite relative de chacun des six dangers suivis, et le graphique chronologique affiche comment le risque combine s\'accumule au cours de la fenetre d\'exposition. Ces outils visuels vous aident a voir d\'un coup d\'oeil pourquoi un environnement donne est dangereux et quel systeme de protection compterait le plus.',
    },
    {
      type: 'table',
      headers: ['Destination', 'Dangers mortels', 'Menace la plus rapide', 'Ce qu\'une combinaison doit corriger'],
      rows: [
        ['Mars', 'Quasi-vide, hypoxie, froid, CO2', 'Pression < limite d\'Armstrong', 'Vetement de pression, oxygene, isolation thermique'],
        ['Surface de Venus', 'Pression ecrasante, chaleur de 462 degres C, CO2, acide sulfurique', 'Pression et chaleur simultanement', 'Refroidissement lourd, coque de pression, appareil respiratoire'],
        ['Titan', 'Pas d\'oxygene, froid de -179 degres C, methane', 'Temperature et hypoxie', 'Alimentation en oxygene, protection thermique extreme'],
        ['Couche nuageuse de Jupiter', 'Pas d\'oxygene, riche en hydrogene, froid, vent fort', 'Hypoxie et manque de gaz respirable', 'Systeme respiratoire etanche, controle thermique'],
        ['Sommet de l\'Everest', 'Hypoxie, froid, vent', 'Pression partielle d\'oxygene trop basse', 'Masque a oxygene, equipement pour le froid, acclimatation'],
      ],
    },
    {
      type: 'title',
      text: 'Que faudrait-il pour survivre sans combinaison spatiale?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistiquement, aucun corps connu du Systeme Solaire autre que la Terre ne permet la survie humaine non protegee pendant plus de quelques minutes, et la plupart tuent en quelques secondes. La valeur de ce calculateur n\'est pas de trouver une planete sure, mais de comprendre les raisons specifiques pour lesquelles chaque environnement est hostile. Cette connaissance guide l\'education en sciences planetaires, la conception d\'habitats spatiaux, les priorites de formation des astronautes et la recherche d\'exoplanetes potentiellement habitables ou une atmosphere pourrait reellement soutenir la vie.',
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisez-le pour apprendre:</strong> voyez comment changer une variable, comme doubler la pression sur Mars, modifie la fenetre de survie.',
        '<strong>Utilisez-le pour comparer:</strong> contrastez pourquoi Titan donne plus de temps que Venus malgre le fait que les deux soient invivables.',
        '<strong>Utilisez-le pour discuter:</strong> explorez ce qu\'une atmosphere terraformee necessiterait pour atteindre des conditions respirables.',
        '<strong>Ne l\'utilisez pas pour des decisions reelles:</strong> le calculateur utilise des seuils simplifies. La planification d\'urgence necessite une medecine aerospatiale professionnelle.',
      ],
    },
    {
      type: 'title',
      text: 'Limites importantes et objectif educatif',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La survie reelle depend de la sante individuelle, des vetements, du niveau d\'effort, de l\'humidite, du rayonnement solaire, des antecedents de decompression, du melange de gaz respiratoire, du delai de sauvetage et de nombreuses autres variables. Les donnees atmospheriques planetaires varient egalement selon l\'altitude, la saison et la source de mesure. Cet outil utilise des seuils biologiques simplifies et des donnees environnementales representatives pour l\'education scientifique. Il est concu pour aider les etudiants, les enseignants, les passionnes d\'espace et les redacteurs scientifiques a comprendre l\'habitabilite planetaire, et non pour guider des operations spatiales reelles.',
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
