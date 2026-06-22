import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'limite-de-roche-calculatrice-disruption-satellite';
const title = 'Calculatrice de la Limite de Roche et Simulateur de Disruption de Satellite';
const description = 'Calculez la limite de Roche pour les planètes et lunes, comparez les distances de rupture fluide et rigide, et visualisez comment les forces de marée transforment un satellite en système d\'anneaux.';

const howTo = [
  {
    name: 'Choisissez le corps primaire',
    text: 'Sélectionnez la planète dont la gravité étire le satellite. La calculatrice charge son rayon, sa densité et sa masse pour les estimations de la limite de Roche et de la période orbitale.',
  },
  {
    name: 'Sélectionnez le type de satellite',
    text: 'Choisissez une lune glacée, une lune rocheuse, un tas de débris ou un corps riche en fer. La densité et la cohésion interne modifient la limite de rupture.',
  },
  {
    name: 'Déplacez le curseur orbital',
    text: 'Faites glisser la distance orbitale vers l\'intérieur ou l\'extérieur. Le disque visuel indique si le satellite est en dehors de la limite de Roche, la frôle, se fragmente ou devient un anneau.',
  },
  {
    name: 'Comparez les limites',
    text: 'Utilisez les relevés pour comparer la limite de Roche fluide classique avec l\'estimation rigide inférieure et la limite opératoire ajustée par cohésion.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que la limite de Roche ?',
    answer: 'La limite de Roche est la distance d\'un corps primaire massif à laquelle les forces de marée sur un corps orbitant plus petit deviennent assez fortes pour surpasser l\'autogravité du corps inférieur. À l\'intérieur de cette limite, un satellite faible ou fluide peut être disloqué.',
  },
  {
    question: 'Pourquoi y a-t-il des limites de Roche fluide et rigide ?',
    answer: 'Un satellite fluide se déforme facilement, donc les marées peuvent amplifier son allongement et le disloquer plus loin de la planète. Un satellite rigide peut résister à la déformation grâce à sa résistance matérielle, donc l\'estimation rigide simple place la rupture plus près du primaire.',
  },
  {
    question: 'Est-ce que toute lune à l\'intérieur de la limite de Roche devient instantanément des anneaux ?',
    answer: 'Non. La disruption réelle dépend de la rotation, de la composition, des fissures, de la porosité, du réchauffement, des impacts et de la résistance du matériau. Cet outil montre la limite gravitationnelle classique et utilise une bande de transition pour communiquer le risque plutôt qu\'un interrupteur instantané.',
  },
  {
    question: 'Pourquoi les anneaux de Saturne sont-ils liés à la physique de la limite de Roche ?',
    answer: 'Les anneaux de Saturne occupent une région où le matériel glacé peut persister sous forme de particules au lieu de s\'accréter en une grande lune. La limite de Roche aide à expliquer pourquoi les particules des anneaux restent dispersées près de la planète.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Corps primaire',
    satelliteType: 'Type de satellite',
    orbitDistance: 'Distance orbitale',
    rocheBoundary: 'Limite de Roche',
    fluidLimit: 'Limite fluide',
    rigidLimit: 'Limite rigide',
    activeLimit: 'Limite active',
    safetyRatio: 'Rapport de sécurité',
    orbitalPeriod: 'Période orbitale',
    tidalStress: 'Contrainte de marée',
    ringFormation: 'Formation d\'anneaux',
    stable: 'Orbite stable',
    grazing: 'Effleurement de marée',
    fragmenting: 'Fragmentation',
    ring: 'Système d\'anneaux',
    km: 'km',
    hours: 'h',
    density: 'Densité',
    cohesion: 'Cohésion',
    planetRadius: 'Rayon planétaire',
    reset: 'Réinitialiser',
    closePass: 'Passage rapproché',
    moonTrack: 'Trace lunaire',
    debrisTrack: 'Trace de débris',
    primaryEarth: 'Terre',
    primaryMars: 'Mars',
    primaryJupiter: 'Jupiter',
    primarySaturn: 'Saturne',
    primaryNeptune: 'Neptune',
    satelliteIcyMoon: 'Lune glacée',
    satelliteRockyMoon: 'Lune rocheuse',
    satelliteRubblePile: 'Agrégat de débris',
    satelliteIronCore: 'Lune riche en fer',
    cohesionFluid: 'Fluide',
    cohesionFractured: 'Fracturé',
    cohesionRigid: 'Rigide',
  },
  seo: [
    {
      type: 'title',
      text: 'Formule de la Limite de Roche, Signification et Comment Utiliser Cette Calculatrice',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>limite de Roche</strong> est la distance orbitale minimale à laquelle un satellite maintenu principalement par sa propre gravité peut orbiter un corps plus grand sans être déchiré par les forces de marée. Les gens la recherchent généralement pour savoir si une lune, une comète, un astéroïde ou un scénario artificiel survivrait à une approche rapprochée d\'une planète, ou si le matériel se disperserait en un anneau. Cette calculatrice répond à cette question en combinant le rayon planétaire, la densité planétaire, la densité du satellite et la résistance interne approximative du satellite.',
    },
    {
      type: 'paragraph',
      html: 'L\'idée clé est simple: la gravité n\'est pas également forte partout sur le satellite. Le côté proche est attiré plus fortement que le côté lointain, créant une force d\'étirement. Si cet étirement de marée est plus fort que l\'autogravité et la cohésion matérielle du satellite, le corps peut se fissurer, perdre de la masse et finalement se fragmenter. La limite de Roche n\'est donc pas seulement une distance; c\'est une comparaison entre la contrainte de marée externe et la liaison interne.',
    },
    {
      type: 'title',
      text: 'Équations de la Limite de Roche Utilisées par la Calculatrice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour un satellite fluide ou très faible, l\'approximation classique est <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. Pour un satellite rigide, une approximation courante est <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. Dans ces équations, <strong>d</strong> est la limite de Roche mesurée depuis le centre de la planète, <strong>R</strong> est le rayon du corps primaire, <strong>rho_M</strong> est la densité du corps primaire et <strong>rho_m</strong> est la densité du satellite.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rayon du primaire:</strong> Les plus grandes planètes créent une plus grande distance de Roche même lorsque la densité est similaire.',
        '<strong>Densité du primaire:</strong> Un primaire plus dense augmente l\'intensité de la marée à un multiple donné de son rayon.',
        '<strong>Densité du satellite:</strong> Un satellite plus dense a une autogravité plus forte, donc il peut survivre plus près de la planète.',
        '<strong>Résistance du satellite:</strong> Un objet fluide, glacé, fracturé ou en tas de débris se disloque plus loin qu\'un objet rigide compact.',
      ],
    },
    {
      type: 'table',
      headers: ['Modèle', 'Forme de la formule', 'Utilisation', 'Signification du résultat'],
      rows: [
        ['Limite de Roche fluide', '2.44 R (rho_M / rho_m)^(1/3)', 'Lunes glacées, corps fondus, tas de débris, comètes faibles', 'La distance de rupture conservative pour les objets qui se déforment facilement.'],
        ['Limite de Roche rigide', '1.26 R (rho_M / rho_m)^(1/3)', 'Corps rocheux denses ou métalliques avec résistance matérielle', 'Une estimation inférieure plus proche où la résistance du matériel retarde la disruption.'],
        ['Affichage ajusté par cohésion', 'Entre les cas fluide et rigide', 'Comparaison rapide de scénarios dans ce simulateur', 'Une ligne de risque pratique pour le type de satellite sélectionné, pas un interrupteur universel de loi naturelle.'],
      ],
    },
    {
      type: 'title',
      text: 'Exemple: Pourquoi une Lune Glacée Près de Saturne est Vulnérable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturne est beaucoup moins dense que la Terre, mais elle est énorme. Un satellite glacé de faible densité a une autogravité faible comparée à une lune rocheuse compacte, donc le rapport de densités place encore la limite de Roche fluide loin des sommets nuageux de Saturne. C\'est une raison pour laquelle la physique de la limite de Roche est centrale pour comprendre pourquoi Saturne peut maintenir un vaste système d\'anneaux brillants composé principalement de particules glacées plutôt qu\'une grande lune réassemblée.',
    },
    {
      type: 'paragraph',
      html: 'Si vous choisissez Saturne et une lune glacée dans la calculatrice, puis faites glisser l\'orbite vers l\'intérieur, surveillez le rapport de sécurité. Au-dessus de <strong>1.00x</strong>, l\'orbite sélectionnée est en dehors de la limite de Roche active. Près de <strong>1.00x</strong>, la lune est dans une région d\'effleurement de marée où la perte de masse ou la fissuration devient plausible. En-dessous de <strong>1.00x</strong>, la visualisation évolue vers des arcs de fragments et la formation d\'anneaux car le modèle sélectionné prédit une disruption.',
    },
    {
      type: 'title',
      text: 'Comment Interpréter le Rapport de Sécurité',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le <strong>rapport de sécurité</strong> est la distance orbitale actuelle divisée par la limite de Roche sélectionnée. Un rapport de <strong>1.25x</strong> signifie que l\'orbite est 25% plus loin que l\'estimation de rupture active. Un rapport de <strong>1.00x</strong> signifie que l\'orbite est exactement sur la limite de Roche sélectionnée. Un rapport de <strong>0.80x</strong> signifie que le satellite est bien à l\'intérieur de la zone de disruption sélectionnée.',
    },
    {
      type: 'table',
      headers: ['Rapport de sécurité', 'État affiché', 'Lecture pratique'],
      rows: [
        ['Au-dessus de 1.12x', 'Orbite stable', 'Le satellite est en dehors de la limite de Roche choisie pour ce modèle simplifié.'],
        ['1.00x à 1.12x', 'Effleurement de marée', 'L\'objet est assez proche pour que la déformation, la fissuration ou la perte de surface puissent compter.'],
        ['0.78x à 1.00x', 'Fragmentation', 'L\'autogravité n\'est plus suffisante dans le modèle sélectionné; des courants de débris sont plausibles.'],
        ['En-dessous de 0.78x', 'Système d\'anneaux', 'Le corps original est représenté comme du matériel dispersé suivant des orbites voisines.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'La lecture de la période orbitale est incluse car les approches rapprochées ne concernent pas seulement la distance. Le matériel à l\'intérieur de la zone de disruption suit des orbites rapides et légèrement différentes. Une fois que les fragments se séparent, le cisaillement orbital les disperse autour de la planète, tandis que les collisions aplatissent et trient les débris en un disque semblable à un anneau.',
    },
    {
      type: 'title',
      text: 'Pourquoi la Limite de Roche Peut Créer des Anneaux',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsqu\'un satellite se brise en dehors de la limite de Roche, les fragments peuvent éventuellement entrer en collision et se réaccumuler en une plus petite lune. À l\'intérieur de la limite de Roche, les fragments proches ne peuvent pas facilement fusionner en un corps autogravitant stable car les forces de marée continuent de séparer le matériel. Le résultat peut être un anneau de longue durée, surtout lorsque les débris sont glacés, collisionnels et continuellement agités par de petites lunes ou des résonances.',
    },
    {
      type: 'paragraph',
      html: 'La formation d\'anneaux est graduelle. Une lune disloquée s\'allonge d\'abord, puis perd des particules et des fragments plus grands. Ces fragments occupent des rayons orbitaux légèrement différents, donc ils dérivent en avant ou en arrière les uns des autres. Avec le temps, les collisions amortissent le mouvement vertical et le matériel se stabilise en un disque mince. C\'est pourquoi le simulateur montre une transition d\'une lune unique à des arcs puis à un anneau complet plutôt que de traiter la rupture comme une explosion instantanée.',
    },
    {
      type: 'title',
      text: 'Limites Importantes de Cette Calculatrice de la Limite de Roche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calculatrice est conçue pour une intuition scientifique rapide, pas pour une conception de mission haute-fidélité. Les satellites réels sont affectés par la rotation, l\'excentricité orbitale, la stratification interne, la résistance à la traction, la porosité, la température, le réchauffement de marée, les fractures antérieures, les impacts et les résonances avec d\'autres lunes. Un tas de débris en rotation sur une orbite excentrique peut se comporter différemment d\'une roche monolithique froide sur une orbite circulaire, même si leurs densités moyennes semblent similaires.',
    },
    {
      type: 'list',
      items: [
        '<strong>Utilisez la limite fluide</strong> lorsque l\'objet est faible, glacé, fondu, hautement fracturé ou fait d\'agrégat meuble.',
        '<strong>Utilisez la limite rigide</strong> comme estimation inférieure pour les corps compacts avec une résistance interne significative.',
        '<strong>Lisez la limite active</strong> comme la limite de travail choisie par le simulateur pour le type de satellite sélectionné.',
        '<strong>N\'interprétez pas le résultat</strong> comme une prédiction exacte pour une lune réelle nommée sans un modèle géophysique détaillé.',
      ],
    },
    {
      type: 'title',
      text: 'Questions Courantes Auxquelles Cet Outil Aide à Répondre',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilisez cet outil lorsque vous voulez estimer des questions telles que: À quelle distance une lune peut-elle s\'approcher de la Terre avant de se briser ? Pourquoi les anneaux de Saturne sont-ils à l\'intérieur d\'une région de limite de Roche ? Une lune rocheuse survivrait-elle plus près qu\'une lune glacée ? Comment la densité modifie-t-elle la limite de Roche ? Quelle est la différence entre la limite de Roche fluide et rigide ? Les contrôles sont construits autour de ces comparaisons, donc changer une variable montre immédiatement comment la distance de rupture, le rapport de sécurité et la visualisation de formation d\'anneaux réagissent.',
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
