import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-entropie-seconde-loi';
const title = 'Simulateur d\'Entropie et de la Deuxième Loi de la Thermodynamique';
const description = 'Regarde des chambres de particules chaude et froide se mélanger, s\'égaliser et faire monter l\'entropie avec un simulateur visuel de diffusion et un graphique d\'entropie en direct.';

const howTo = [
  {
    name: 'Régler les températures gauche et droite',
    text: 'Choisis une chambre froide et une chambre chaude pour créer un déséquilibre thermique initial. Des écarts plus grands rendent l\'approche irréversible vers l\'équilibre plus facile à voir.',
  },
  {
    name: 'Ajuster l\'ouverture de la barrière',
    text: 'Ouvre ou rétrécit le passage entre les deux chambres. Une ouverture plus large permet aux particules et à l\'énergie de diffuser plus rapidement, donc la courbe d\'entropie monte plus vite.',
  },
  {
    name: 'Observer la boîte à particules',
    text: 'Les particules bleues représentent un mouvement de faible énergie et les particules oranges un mouvement de haute énergie. À mesure que les collisions et les traversées s\'accumulent, la boîte devient plus mélangée et moins ordonnée.',
  },
  {
    name: 'Lire le graphique d\'entropie',
    text: 'Suis comment le mélange spatial et l\'égalisation thermique se combinent en un seul score d\'entropie croissant. La courbe vise à construire une intuition pour comprendre pourquoi les systèmes isolés évoluent vers des macroétats plus probables.',
  },
];

const faq = [
  {
    question: 'Pourquoi l\'entropie augmente-t-elle dans ce simulateur ?',
    answer: 'L\'état de départ est artificiellement ordonné: un côté est plus froid, l\'autre plus chaud. Une fois que la barrière permet l\'échange, il y a beaucoup plus d\'arrangements mélangés que d\'arrangements séparés, donc le système se dirige naturellement vers le macroétat overwhelmingly le plus probable.',
  },
  {
    question: 'Cela prouve-t-il exactement la deuxième loi ?',
    answer: 'Non. C\'est un modèle didactique de particules, pas un code de laboratoire de dynamique moléculaire. Il capture l\'intuition centrale derrière la diffusion irréversible et l\'égalisation thermique, ce qui correspond à l\'intention de recherche de la plupart des utilisateurs lorsqu\'ils demandent pourquoi l\'entropie tend à augmenter.',
  },
  {
    question: 'Que signifient entropie spatiale et entropie thermique ici ?',
    answer: 'L\'entropie spatiale mesure la répartition uniforme des particules entre les chambres gauche et droite. L\'entropie thermique dans ce simulateur mesure la petitesse de l\'écart d\'énergie entre les deux moitiés. Le score total combine les deux pour que les utilisateurs puissent voir le mélange et le flux de chaleur simultanément.',
  },
  {
    question: 'Pourquoi les particules continuent-elles de bouger même près de l\'équilibre ?',
    answer: 'L\'équilibre ne signifie pas que le mouvement s\'arrête. Il signifie que le déséquilibre macroscopique disparaît. Les molécules continuent de bouger, de collisionner et d\'échanger de l\'énergie, mais il ne reste plus de direction persistante à grande échelle à exploiter.',
  },
  {
    question: 'L\'entropie peut-elle jamais diminuer momentanément ?',
    answer: 'Dans les systèmes microscopiques, de petites fluctuations sont possibles. Cet outil visuel lisse ces fluctuations et met l\'accent sur la tendance statistique globale: dans un grand système isolé, les états ordonnés de faible entropie sont bien moins probables que les états mélangés.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Mélange irréversible',
    results: 'Résultats du simulateur d\'entropie',
    particleBox: 'Boîte de diffusion de particules',
    barrier: 'Barrière',
    entropyGraph: 'Graphique de l\'entropie au fil du temps',
    liveTrace: 'Tracé en direct',
    highEntropy: 'élevée',
    midEntropy: 'moyenne',
    lowEntropy: 'faible',
    controls: 'Commandes du simulateur d\'entropie',
    leftTemperature: 'Température gauche',
    rightTemperature: 'Température droite',
    gateAperture: 'Ouverture de la barrière',
    pause: 'Pause',
    reset: 'Réinitialiser',
    resume: 'Reprendre',
    totalEntropy: 'Entropie totale',
    particleBalance: 'Particules gauche/droite',
    spatialEntropy: 'Entropie spatiale',
    thermalEntropy: 'Entropie thermique',
    energyGap: 'Écart d\'énergie',
    noteLabel: 'Interprétation',
    stateGradient: 'Gradient',
    stateMixing: 'Mélange',
    stateEquilibrium: 'Équilibre',
    note: 'La probabilité du macroétat tend vers le désordre maximal.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur d\'entropie pour la deuxième loi de la thermodynamique et la diffusion irréversible',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilise ce simulateur d\'entropie pour visualiser l\'une des idées les plus importantes de la physique: les systèmes isolés évoluent d\'états artificiellement ordonnés vers des états mélangés plus probables. Au lieu de lire une définition statique de l\'entropie, tu peux voir en temps réel une chambre chaude et une chambre froide échanger des particules et de l\'énergie pendant qu\'une courbe en direct suit la montée du désordre.',
    },
    {
      type: 'paragraph',
      html: 'Cet outil est conçu pour l\'intention de recherche la plus courante derrière des questions telles que "pourquoi l\'entropie augmente", "comment fonctionne la deuxième loi" et "qu\'est-ce que la diffusion thermique". L\'objectif n\'est pas seulement de donner un slogan sur le désordre, mais de relier l\'entropie à la probabilité, au flux de chaleur, au mélange et à l\'équilibre d\'une manière immédiatement visible.',
    },
    {
      type: 'title',
      text: 'Ce que la deuxième loi de la thermodynamique signifie en pratique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La deuxième loi dit que pour un système isolé, les processus spontanés se dirigent vers des macroétats d\'entropie plus élevée. Dans le langage courant, cela signifie qu\'un arrangement thermique fortement organisé, comme des particules chaudes d\'un côté et froides de l\'autre, ne reste pas séparé à moins qu\'un travail ne soit continuellement fourni pour le maintenir.',
    },
    {
      type: 'paragraph',
      html: 'Cela ne se produit pas parce que la matière "préfère le chaos" dans un sens mystique. Cela se produit parce qu\'il existe énormément plus de configurations microscopiques correspondant à un état mélangé qu\'à un état séparé. L\'entropie relie donc la thermodynamique au dénombrement: plus le nombre de microétats compatibles est grand, plus l\'entropie est grande.',
    },
    {
      type: 'title',
      text: 'Comment fonctionne ce simulateur de diffusion d\'entropie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La boîte à particules démarre dans une configuration de faible entropie avec un déséquilibre de température de part et d\'autre d\'une barrière. Lorsque le passage entre les chambres est ouvert, les particules traversent, entrent en collision et transportent l\'énergie d\'un côté à l\'autre. La simulation suit deux ingrédients intuitifs: l\'<strong>entropie spatiale</strong>, qui augmente à mesure que les particules deviennent moins ségréguées, et l\'<strong>entropie thermique</strong>, qui augmente à mesure que les distributions d\'énergie gauche et droite deviennent moins différentes.',
    },
    {
      type: 'paragraph',
      html: 'Le score d\'entropie total affiché à l\'écran est un indicateur didactique construit à partir de ces deux ingrédients. Ce n\'est pas une fonction d\'état de laboratoire et il ne prétend pas reproduire la mécanique statistique complète. Son but est d\'aider les utilisateurs à développer une intuition correcte: le flux de chaleur irréversible et la diffusion déplacent le système vers l\'équilibre parce que l\'équilibre correspond à beaucoup plus de configurations accessibles.',
    },
    {
      type: 'table',
      headers: ['Signal visuel', 'Ce qu\'il représente', 'Pourquoi c\'est important'],
      rows: [
        ['Particules bleues vs oranges', 'Énergie cinétique relative', 'Montre que les différences de température sont en réalité des différences de mouvement microscopique moyen.'],
        ['Ouverture de la barrière', 'Facilité d\'échange entre les chambres', 'Permet de voir pourquoi le taux de diffusion change lorsque la voie de transport est modifiée.'],
        ['Indicateur d\'entropie spatiale', 'Uniformité de la répartition des particules', 'Explique que le simple mélange rend déjà le macroétat plus probable.'],
        ['Indicateur d\'entropie thermique', 'Taille de l\'écart énergétique gauche-droite', 'Montre que l\'équilibre ne concerne pas seulement la position mais aussi le partage de l\'énergie.'],
        ['Courbe d\'entropie', 'Tendance au fil du temps', 'Transforme l\'idée abstraite d\'irréversibilité en un processus de relaxation unidirectionnel visible.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi l\'entropie peut augmenter même si chaque particule obéit à un mouvement simple',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les étudiants supposent souvent que la deuxième loi nécessite de la friction, une intention ou une "force spéciale de la flèche du temps". Le point le plus profond est statistique. Chaque particule suit des règles locales, mais lorsque de nombreuses particules interagissent, le nombre de macroétats mélangés domine complètement le nombre de macroétats ordonnés. Le système passe donc presque tout son temps dans des configurations mélangées et seulement une fraction extrêmement minime dans des configurations bien séparées.',
    },
    {
      type: 'paragraph',
      html: 'C\'est pourquoi une goutte de colorant se diffuse dans l\'eau, pourquoi une pièce s\'égalise en température après l\'extinction d\'un radiateur, et pourquoi un objet chaud refroidit au contact d\'un objet plus froid. Le processus inverse n\'est pas interdit par le mouvement newtonien au sens microscopique strict, mais il est si statistiquement improbable pour les grands systèmes qu\'il n\'est effectivement jamais observé à l\'échelle humaine.',
    },
    {
      type: 'title',
      text: 'Entropie, équilibre et idées reçues courantes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>L\'entropie n\'est pas simplement le "désordre" :</strong> l\'idée plus précise est le nombre de configurations microscopiques compatibles avec la même description macroscopique.',
        '<strong>L\'équilibre ne signifie pas l\'immobilité :</strong> les particules continuent de bouger constamment, mais leurs déséquilibres à grande échelle s\'annulent.',
        '<strong>Le flux de chaleur est directionnel parce que la probabilité est directionnelle :</strong> il existe infiniment plus de façons de partager l\'énergie que de la maintenir nettement séparée.',
        '<strong>Une faible entropie n\'est pas impossible :</strong> elle nécessite simplement des contraintes, une préparation ou un travail provenant de l\'extérieur du système isolé.',
        '<strong>Ce simulateur est qualitatif :</strong> il donne une intuition physique, pas une calorimétrie exacte, des fonctions de partition ou des coefficients de transport moléculaire.',
      ],
    },
    {
      type: 'title',
      text: 'Quand utiliser ce simulateur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilise-le pour des démonstrations en classe, des révisions de physique, l\'enseignement de la chimie, la rédaction scientifique et des explications conceptuelles rapides. Il est particulièrement utile lorsque quelqu\'un comprend que la chaleur va du chaud vers le froid mais ne voit pas encore comment cela se relie à la probabilité, au dénombrement des macroétats et à la deuxième loi de la thermodynamique.',
    },
    {
      type: 'paragraph',
      html: 'Si ton objectif est un calcul thermodynamique rigoureux pour un gaz réel, un cycle de moteur ou un système de laboratoire, tu auras besoin d\'équations d\'état, de conditions limites et de paramètres expérimentaux. Si ton objectif est l\'intuition pour savoir pourquoi la diffusion est irréversible et pourquoi l\'entropie tend à augmenter, ce simulateur est construit exactement pour répondre à cette question.',
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
