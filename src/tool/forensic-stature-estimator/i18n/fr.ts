import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estimateur-de-stature-legale-calculateur-trotter-gleser';
const title = 'Estimateur de Stature Médico Légale';
const description = 'Estimez la stature d\'un individu à partir de la mesure des os longs à l\'aide des formules de régression linéaire de Trotter et Gleser, en tenant compte du sexe, de l\'origine et de l\'âge.';

const howTo = [
  {
    name: 'Sélectionner l\'os et les variables',
    text: 'Choisissez l\'os long à mesurer (Fémur, Tibia, Humérus, Fibula, Radius ou Ulna) ainsi que le sexe biologique, l\'origine ancestrale et l\'âge du sujet.'
  },
  {
    name: 'Mesurer la longueur de l\'os',
    text: 'Ajustez le curseur sur la planche ostéométrique virtuelle pour spécifier la longueur maximale de l\'os en centimètres.'
  },
  {
    name: 'Calculer la stature estimée',
    text: 'Le calculateur applique les équations de régression de Trotter-Gleser, en déduisant 0,06 cm par an pour les sujets âgés de plus de 30 ans.'
  },
  {
    name: 'Analyser les intervalles',
    text: 'Consultez la stature estimée, l\'erreur type (SEE) et l\'intervalle de prédiction à 95%.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Comment fonctionnent les formules de Trotter et Gleser ?',
    answer: 'Elles utilisent la régression linéaire pour modéliser la relation entre la stature en vie et la longueur maximale des os longs. En entrant la longueur, la formule applique les coefficients spécifiques selon le sexe et l\'origine issus de collections de référence.'
  },
  {
    key: 'faq-2',
    question: 'Pourquoi le sexe et l\'origine sont-ils requis ?',
    answer: 'Les proportions du corps humain varient selon le sexe et la population géographique. Les hommes et les femmes possèdent des ratios membres-stature distincts, tout comme les populations d\'origines géographiques différentes.'
  },
  {
    key: 'faq-3',
    question: 'Pourquoi y a-t-il un facteur de correction d\'âge ?',
    answer: 'La taille diminue après 30 ans en raison du tassement des disques intervertébraux et des changements posturaux. Trotter et Gleser préconisent de soustraire 0,06 cm par an après 30 ans pour estimer la taille au moment du décès.'
  },
  {
    key: 'faq-4',
    question: 'Qu\'est-ce que l\'erreur type de l\'estimation (SEE) ?',
    answer: 'Le SEE mesure la dispersion des valeurs réelles autour de la droite de régression. Il quantifie la marge d\'erreur de la prédiction pour un os donné.'
  },
  {
    key: 'faq-5',
    question: 'Quels os longs offrent les estimations les plus fiables ?',
    answer: 'Les membres inférieurs, fémur et tibia, sont les plus précis car ils contribuent directement à la taille du corps. Les membres supérieurs ont des erreurs types plus élevées.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Estimateur de Stature Médico Légale',
    desc: 'Simulez les mesures sur une planche ostéométrique et estimez la stature par régression linéaire.',
    configTitle: 'Configuration Ostéométrique',
    boneLabel: 'Spécimen Osseux',
    lengthLabel: 'Longueur de l\'Os',
    unitLabel: 'Unité Système',
    metricOption: 'Métrique (cm)',
    imperialOption: 'Impérial (pouces)',
    sexLabel: 'Sexe Biologique',
    ancestryLabel: 'Origine Ancestrale',
    ageLabel: 'Âge au Décès (ans)',
    maleOption: 'Masculin',
    femaleOption: 'Féminin',
    whiteOption: 'Blanc / Caucasien',
    blackOption: 'Noir / Afro-américain',
    asianOption: 'Asiatique / Mongoloïde',
    femurName: 'Fémur (Os de la cuisse)',
    tibiaName: 'Tibia (Os du tibia)',
    humerusName: 'Humérus (Os du bras)',
    fibulaName: 'Fibula (Péroné)',
    radiusName: 'Radius (Os de l\'avant-bras)',
    ulnaName: 'Ulna (Cubitus)',
    resultsTitle: 'Résultats de l\'Estimation',
    estimateLabel: 'Stature Estimée',
    errorLabel: 'Erreur Type (SEE)',
    rangeLabel: 'Intervalle de Prédiction (95%)',
    formulaLabel: 'Équation de Régression',
    formulaBoneFactor: 'Facteur Osseux',
    formulaConstant: 'Constante',
    formulaAgeCorrection: 'Correction d\'Âge',
    formulaStdError: 'Erreur Type (SEE)',
    fallbackAlert: 'Aucune équation directe de Trotter-Gleser n\'existe pour les femmes asiatiques; les formules pour femmes blanches sont appliquées par défaut.',
    boardInstructions: 'Faites glisser le curseur ou saisissez la valeur pour mesurer l\'os.',
    rulerLabelMetric: 'Échelle Métrique (mm)',
    rulerLabelImperial: 'Échelle Impériale (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Guide Complet sur l\'Estimation de la Stature en Anthropologie Médico-Légale',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'L\'estimation de la stature représente un composant fondamental du profil biologique en anthropologie physique, bioarchéologie et médecine légale. Lors de la découverte de restes squelettiques, reconstituer la stature du vivant de l\'individu aide les enquêteurs à croiser les fichiers de personnes disparues. La stature est estimée en mesurant la longueur maximale des os longs, fortement corrélée à la taille totale du corps.'
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur de planche ostéométrique numérique permet d\'explorer les modèles de régression linéaire de Mildred Trotter et Goldine C. Gleser. En configurant le type d\'os, le sexe biologique, l\'origine et l\'âge, les utilisateurs analysent comment les proportions corporelles influencent les constantes mathématiques de prédiction.'
    },
    {
      type: 'title',
      text: 'Comprendre les Formules de Régression de Trotter-Gleser',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter et Goldine C. Gleser ont publié leurs équations majeures en 1952 et 1958. Les formules prennent la forme linéaire: Stature = (Pente × Longueur de l\'os) + Constante ± Erreur Type. Les proportions variant selon le sexe et l\'origine, des équations spécifiques sont appliquées.'
    },
    {
      type: 'table',
      headers: ['Spécimen d\'Os Long', 'Modèle Homme Blanc', 'Modèle Femme Blanche', 'Utilité et Fiabilité Médico-Légale'],
      rows: [
        ['Fémur (Os de la cuisse)', 'Stature = 2.32 × Fémur + 65.53 ± 3.94 cm', 'Stature = 2.47 × Fémur + 54.10 ± 3.72 cm', 'Fiabilité maximale. Le fémur est le principal os porteur du membre inférieur, lié directement à la taille.'],
        ['Tibia (Os du tibia)', 'Stature = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Stature = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Grande fiabilité. Attention à bien exclure la malléole interne conformément au protocole original de Trotter.'],
        ['Fibula (Péroné)', 'Stature = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Stature = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Très fiable, mais la fibula est grêle et souvent fragmentée dans les contextes archéologiques.'],
        ['Humérus (Os du bras)', 'Stature = 2.89 × Humérus + 78.10 ± 4.57 cm', 'Stature = 3.36 × Humérus + 57.97 ± 4.45 cm', 'Fiabilité modérée. Les membres supérieurs ne portent pas le poids du corps et présentent des marges plus larges.'],
        ['Radius (Os de l\'avant-bras)', 'Stature = 3.79 × Radius + 79.42 ± 4.66 cm', 'Stature = 4.74 × Radius + 54.93 ± 4.45 cm', 'Faible fiabilité en raison d\'une variabilité accrue du développement de l\'avant-bras.']
      ]
    },
    {
      type: 'title',
      text: 'Diminution de la Stature due à l\'Âge et Corrections',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La stature adulte n\'est pas immuable. À partir de 30 ans, le corps humain subit un tassement lié aux disques intervertébraux et à la posture. Pour corriger l\'estimation squelettique, Trotter et Gleser recommandent de soustraire 0,06 cm pour chaque année au-delà de 30 ans: Perte = 0,06 × (Âge - 30).'
    },
    {
      type: 'title',
      text: 'Écarts Méthodologiques de la Mesure du Tibia',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Une célèbre divergence concerne le protocole de mesure de la tibia par Trotter. En 1952, la malléole interne était exclue, mais incluse en 1958. L\'application erronée des formules de 1952 sur un tibia mesuré avec malléole entraîne une surestimation systématique.'
    },
    {
      type: 'title',
      text: 'Tendances Séculaires et Données Historiques',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Les sujets de l\'échantillon d\'origine étant nés au XIXe et début XXe siècle, les formules reflètent les conditions d\'alors. L\'évolution séculaire positive a augmenté la stature moyenne contemporaine. Les praticiens complètent donc Trotter-Gleser avec des logiciels modernes comme FORDISC.'
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
      description,
      applicationCategory: 'ForensicApplication',
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
