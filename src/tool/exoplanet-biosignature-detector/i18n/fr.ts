import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'detecteur-biosignatures-exoplanetes';
const title = 'Détecteur de biosignatures d\'exoplanètes';
const description = 'Alignez les raies d\'absorption de l\'oxygène, du méthane et de l\'ozone dans un spectre de transmission exoplanétaire simulé. Estimez l\'habitabilité biologique, le risque de contamination par des technosignatures et la probabilité de faux positifs à partir des indices spectraux.';

const howTo = [
  {
    name: 'Choisissez l\'étoile hôte',
    text: 'Sélectionnez une naine K, une étoile de type solaire ou une naine M. Le type d\'étoile influence significativement le risque de faux positifs, car le flux ultraviolet, les éruptions et la photochimie atmosphérique altèrent l\'interprétation des niveaux d\'oxygène et d\'ozone.',
  },
  {
    name: 'Alignez les raies spectrales',
    text: 'Ajustez les curseurs de l\'oxygène, du méthane et de l\'ozone jusqu\'à ce que les marqueurs d\'absorption observés correspondent aux bandes de référence du spectre simulé.',
  },
  {
    name: 'Réglez le bruit et le contexte atmosphérique',
    text: 'Augmentez le bruit instrumental pour tester la fiabilité du signal. Ajustez la vapeur d\'eau et le dioxyde de carbone pour simuler une atmosphère plus humide, sèche, dense ou complexe sur le plan photochimique.',
  },
  {
    name: 'Interprétez les indices d\'habitabilité',
    text: 'Comparez les scores biologiques, technologiques et d\'habitabilité. Un résultat probant exige la présence de plusieurs gaz en déséquilibre, et non la simple observation d\'une raie isolée.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce qu\'une biosignature en spectroscopie exoplanétaire ?',
    answer: 'Une biosignature est une caractéristique détectable à distance pouvant résulter de processus biologiques. Dans les spectres atmosphériques, les candidats les plus pertinents incluent l\'oxygène, l\'ozone, le méthane, la vapeur d\'eau et les combinaisons de gaz qui devraient chimiquement réagir entre eux, à moins qu\'un processus ne maintienne leur abondance en permanence.',
  },
  {
    question: 'Pourquoi l\'association oxygène-méthane est-elle si révélatrice ?',
    answer: 'L\'oxygène et le méthane réagissent chimiquement. Leur présence simultanée à des niveaux significatifs indique un déséquilibre chimique, un signal bien plus fort de vie potentielle que la simple détection d\'un gaz isolé. Le simulateur accorde donc une pondération supérieure à ce couple.',
  },
  {
    question: 'L\'oxygène peut-il constituer un faux positif ?',
    answer: 'Absolument. L\'oxygène peut être généré par des processus abiotiques comme la perte d\'eau, la photolyse, des échanges volcaniques ou des environnements stellaires à fort rayonnement UV. C\'est pourquoi l\'outil évalue le risque de faux positifs plutôt que de considérer l\'oxygène comme une preuve définitive.',
  },
  {
    question: 'Pourquoi distinguer l\'ozone de l\'oxygène ?',
    answer: 'L\'ozone est un sous-produit photochimique de l\'oxygène doté de signatures spectrales très marquées. Il sert d\'indicateur indirect de l\'oxygène, particulièrement lorsque les bandes directes de O2 sont difficiles à isoler. Son interprétation dépend toutefois étroitement du contexte atmosphérique.',
  },
  {
    question: 'Que représente l\'indice technologique ?',
    answer: 'Il s\'agit d\'un score d\'alerte spéculatif signalant des cas où le spectre est si énergétique, bruité ou chimiquement atypique qu\'une origine artificielle ne peut être catégoriquement exclue. Ce n\'est pas une preuve de détection.',
  },
  {
    question: 'S\'agit-il d\'un modèle réel de récupération de données ?',
    answer: 'Non. Il s\'agit d\'un simulateur pédagogique traduisant les concepts clés de la spectroscopie en un modèle de notation interactif. Les modèles scientifiques réels reposent sur le transfert radiatif complexe, la correction des contaminations stellaires, la modélisation des nuages et l\'inférence bayésienne.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualisation du spectre de transmission exoplanétaire',
    starClass: 'Étoile hôte',
    starK: 'Naine K calme',
    starSun: 'Étoile G de type solaire',
    starM: 'Naine M active',
    noise: 'Bruit instrumental',
    oxygenLine: 'Marqueur oxygène',
    methaneLine: 'Marqueur méthane',
    ozoneLine: 'Marqueur ozone',
    waterVapor: 'Contexte vapeur d\'eau',
    carbonDioxide: 'Contexte CO2',
    habitabilityIndex: 'Indice d\'habitabilité',
    biologicalIndex: 'Biologique',
    technologicalIndex: 'Technologique',
    falsePositiveRisk: 'Risque de faux positif',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Conclusion',
    dataLive: 'Synthèse de données en temps réel',
    percentUnit: '{value} %',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Alignez les marqueurs spectraux pour évaluer les indices atmosphériques.',
    verdictWeak: 'Le spectre est faible: les raies ne justifient pas encore une interprétation biologique.',
    verdictPromising: 'Le spectre est prometteur: plusieurs marqueurs de biosignature sont partiellement alignés.',
    verdictStrong: 'Le spectre est robuste: l\'oxygène, le méthane et l\'ozone forment un signal cohérent de déséquilibre.',
    verdictAmbiguous: 'Le signal est intéressant mais ambigu: les risques de faux positifs stellaires ou atmosphériques restent élevés.',
  },
  seo: [
    {
      type: 'title',
      text: 'Détecteur de biosignatures d\'exoplanètes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le détecteur de biosignatures d\'exoplanètes est un simulateur spectroscopique interactif permettant d\'explorer la signature lumineuse des gaz liés à la vie traversant une atmosphère lointaine. Plutôt que de fournir une réponse binaire pour une seule molécule, l\'outil vous invite à aligner les caractéristiques d\'absorption de l\'oxygène, du méthane et de l\'ozone, tout en pondérant les résultats selon le bruit, la vapeur d\'eau, le dioxyde de carbone et l\'activité de l\'étoile hôte.',
    },
    {
      type: 'paragraph',
      html: 'C\'est là le défi majeur de l\'exobiologie: l\'oxygène, le méthane ou l\'ozone sont autant d\'indices fascinants, mais aucun ne suffit à lui seul comme preuve. Les découvertes les plus convaincantes combinent plusieurs gaz, un contexte physique rigoureux et une élimination soigneuse des causes non biologiques. Le simulateur rend ces analyses accessibles au travers d\'une interface de type laboratoire.',
    },
    {
      type: 'title',
      text: 'Comment la spectroscopie de transmission révèle les gaz atmosphériques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsqu\'une planète transite devant son étoile, une infime partie de la lumière stellaire est filtrée par son atmosphère. Les molécules absorbent certaines longueurs d\'onde, créant des creux caractéristiques dans le spectre. En comparant ces creux aux mesures de laboratoire, les astronomes peuvent inférer la composition atmosphérique, bien que les nuages, les brumes, la température et le bruit instrumental complexifient cette tâche.',
    },
    {
      type: 'title',
      text: 'Oxygène, méthane et ozone: un signal combiné',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Oxygène O2 :</strong> Sur Terre, la photosynthèse maintient des taux élevés, mais un oxygène abiotique peut s\'accumuler dans des scénarios planétaires spécifiques.',
        '<strong>Méthane CH4 :</strong> D\'origine biologique, géologique ou météoritique, il gagne en pertinence lorsqu\'il est détecté conjointement avec des agents oxydants.',
        '<strong>Ozone O3 :</strong> Produit par photochimie à partir de l\'oxygène, il est souvent plus facile à détecter dans certaines bandes spectrales, offrant un indice indirect précieux.',
        '<strong>Eau et CO2 :</strong> L\'eau favorise l\'habitabilité, tandis que le CO2 aide à modéliser l\'effet de serre et la photochimie, aidant ainsi à identifier les faux positifs.',
      ],
    },
    {
      type: 'title',
      text: 'L\'enjeu des faux positifs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une détection élevée d\'oxygène ne prouve pas nécessairement la vie. La perte d\'eau, la photodissociation ou le volcanisme peuvent produire des niveaux d\'oxygène trompeurs. Les naines M sont particulièrement complexes en raison de leurs éruptions stellaires. L\'indicateur de faux positif augmente si le bruit de l\'instrument ou le contexte physique rend l\'explication biologique incertaine.',
    },
    {
      type: 'table',
      headers: ['Signal détecté', 'Interprétation', 'Prudence'],
      rows: [
        ['O2 uniquement', 'Atmosphère riche en oxygène', 'Origine abiotique possible (perte d\'eau, photochimie)'],
        ['CH4 uniquement', 'Atmosphère réductrice ou géologie active', 'Pas une preuve solide de vie biologique'],
        ['O2 + CH4', 'Déséquilibre chimique', 'Requiert une analyse approfondie et une vérification des contaminations'],
        ['O2 + O3 + Eau', 'Contexte de type terrestre', 'Attention aux nuages et à l\'activité stellaire résiduelle'],
      ],
    },
    {
      type: 'title',
      text: 'Indices d\'habitabilité biologique et technologique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'indice biologique privilégie le déséquilibre chimique (O2 + CH4), tout en intégrant l\'ozone et l\'eau. L\'indice technologique reste volontairement spéculatif: il signale des atmosphères si anormales, énergétiques ou bruyantes que des pollutions artificielles ou des modifications délibérées doivent être envisagées avant de confirmer une origine biologique.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez cet outil comme une aide au raisonnement critique. Une évaluation scientifique réelle compare de nombreux modèles, intègre les spectres stellaires, corrige les biais instrumentaux et calcule rigoureusement les incertitudes. La valeur pédagogique réside dans cette rigueur: aligner les preuves, vérifier le contexte et rester vigilant face aux faux positifs.',
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
