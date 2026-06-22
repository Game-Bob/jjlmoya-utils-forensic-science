const description = 'Analysez si notre réalité est une simulation en utilisant l\'argument du trilemme de Nick Bostrom. Calculez la probabilité existentielle avec 4 paramètres clés.';
const slug = 'calculateur-probabilite-simulation';
const title = 'Calculateur de Probabilité de Simulation: Vivez vous dans un univers virtuel ?';
const howTo = [
    {
      name: 'Ajuster le progrès technologique',
      text: 'Estimez la probabilité que l\'humanité atteigne le niveau post-humain. 50% est neutre ; augmentez si vous pensez que l\'IA et l\'informatique continueront de progresser de façon exponentielle.',
    },
    {
      name: 'Fixer le taux de survie',
      text: 'Considérez la probabilité que l\'humanité ne s\'autodétruise pas. Tenez compte des guerres, du changement climatique, des pandémies. Valeurs élevées = optimisme sur notre avenir.',
    },
    {
      name: 'Évaluer l\'intérêt pour la simulation',
      text: 'Si l\'humanité atteignait le niveau post-humain, voudrait-elle créer des simulations de son passé ? Considérez les motivations: recherche scientifique, divertissement, préservation historique.',
    },
    {
      name: 'Interpréter le résultat',
      text: 'Observez comment les probabilités changent. Les résultats > 90% suggèrent que la simulation est presque inévitable si les hypothèses sont vérifiées. Jouez avec les paramètres pour explorer différents avenirs.',
    },
  ];
const faq = [
    {
      question: 'Qu\'est-ce que l\'argument de Bostrom exactement ?',
      answer: 'Nick Bostrom propose que si une civilisation post-humaine possède une puissance de calcul suffisante, elle pourrait créer des millions de simulations d\'univers antérieurs. Si cela se produit, le nombre d\'êtres simulés serait massivement supérieur à celui des êtres biologiques originaux. Par conséquent, statistiquement, vous avez plus de chances d\'être simulé qu\'original.',
    },
    {
      question: 'Des probabilités élevées signifient-elles que nous sommes définitivement une simulation ?',
      answer: 'Non. Des probabilités élevées suggèrent qu\'il s\'agit d\'une possibilité sérieuse à envisager, mais ce n\'est pas une preuve. L\'argument repose sur des suppositions concernant l\'avenir de la technologie qui pourraient ne pas se réaliser.',
    },
    {
      question: 'Quel effet cela aurait-il de savoir que nous sommes une simulation ?',
      answer: 'Sur le plan philosophique, beaucoup soutiennent que cela ne change rien de fondamental. Si vous et vos proches êtes simulés ensemble, vos expériences, vos émotions et vos relations restent réels pour vous. C\'est l\'expérience vécue qui compte, pas le substrat.',
    },
    {
      question: 'Existe-t-il des preuves scientifiques que nous sommes dans une simulation ?',
      answer: 'Il n\'existe aucune preuve concluante. Certains physiciens soulignent des anomalies en mécanique quantique (quantification, intrication) comme de possibles "optimisations informatiques", mais ce sont des interprétations spéculatives.',
    },
    {
      question: 'Quelle valeur dois-je attribuer à "N" (échelle de simulation) ?',
      answer: 'Cela dépend de vos convictions sur l\'avenir de l\'informatique. Des valeurs faibles (100-1000) supposent des limites de ressources. Des valeurs élevées (millions) supposent une puissance de calcul pratiquement illimitée. La plupart des discussions scientifiques utilisent des valeurs entre 1000 et 1 billion.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copié',
    noHistory: 'Pas d\'historique',
    load: 'Charger',
    delete: 'Supprimer',
    simulationParameters: 'Paramètres de Simulation',
    fpLabel: 'fp',
    fpSub: 'Progrès Technologique',
    flLabel: 'fl',
    flSub: 'Survie de l\'Espèce',
    fiLabel: 'fi',
    fiSub: 'Intérêt pour la Simulation',
    nLabel: 'N',
    nSub: 'Échelle de Simulation',
    probabilityTitle: 'Probabilité de Simulation',
    trilemmaResult: 'Verdict du Trilemme',
    scenario1: 'Scénario 1: Extinction',
    scenario2: 'Scénario 2: Désintérêt',
    scenario3: 'Scénario 3: Nous sommes simulés',
    fpDescription: 'Probabilité que l\'humanité atteigne la capacité technique de simuler des univers avec conscience.',
    flDescription: 'Probabilité d\'éviter l\'effondrement (extinction, guerre) avant d\'atteindre le niveau post-humain.',
    fiDescription: 'Pourcentage de civilisations avancées qui décident de créer des simulations de leurs ancêtres.',
    nDescription: 'Nombre de mondes simulés que chaque civilisation avancée exécute généralement simultanément.',
    verdictDetail: 'Les données suggèrent qu\'il est extrêmement probable que votre conscience soit un processus logiciel.',
  },
  seo: [
    {
      type: 'title',
      text: 'Vivons-nous dans une simulation ? La science derrière l\'argument de Nick Bostrom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'idée que notre réalité puisse être une construction artificielle, une simulation informatique extrêmement avancée, est passée de la science-fiction à un débat philosophique et scientifique sérieux. En 2003, le philosophe Nick Bostrom de l\'Université d\'Oxford a publié un article intitulé <em>"Vivez-vous dans une simulation informatique ?"</em>, dans lequel il propose un argument trilemmatique qui défie notre perception de l\'existence.',
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur de probabilité de simulation utilise les paramètres clés dérivés de l\'hypothèse de Bostrom pour estimer les chances que votre conscience soit, en fait, le résultat d\'un processus logiciel exécuté par une civilisation post-humaine.',
    },
    {
      type: 'title',
      text: 'Les piliers de l\'argument de la simulation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'argument de Bostrom ne dit pas que nous sommes dans une simulation, mais qu\'au moins une des trois propositions suivantes est presque certainement vraie :',
    },
    {
      type: 'list',
      items: [
        '<strong>Extinction prématurée :</strong> L\'espèce humaine s\'éteindra avant d\'atteindre une étape post-humaine capable de réaliser des simulations d\'ancêtres.',
        '<strong>Désintérêt technologique :</strong> Toute civilisation post-humaine n\'aura aucun intérêt à exécuter des simulations de ses ancêtres pour des raisons éthiques ou récréatives.',
        '<strong>Simulation omniprésente :</strong> Presque certainement, nous vivons dans une simulation parce que le nombre d\'esprits simulés dépasse massivement celui des esprits biologiques originaux.',
      ],
    },
    {
      type: 'title',
      text: 'Comment interpréter les paramètres',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour utiliser cet outil correctement, il est essentiel de comprendre ce que représentent les variables du modèle :',
    },
    {
      type: 'table',
      headers: ['Variable', 'Concept', 'Signification'],
      rows: [
        ['<strong>fp</strong>', 'Progrès technologique', 'Probabilité qu\'une civilisation atteigne la capacité de simuler des esprits.'],
        ['<strong>fl</strong>', 'Taux de survie', 'Probabilité que la civilisation ne s\'autodétruise pas avant d\'en arriver là.'],
        ['<strong>fi</strong>', 'Intérêt pour la simulation', 'Pourcentage de civilisations qui décident d\'utiliser leur pouvoir pour créer des mondes virtuels.'],
        ['<strong>N</strong>', 'Échelle de simulation', 'Nombre total de simulations qu\'une seule civilisation post-humaine créerait.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi la probabilité est-elle généralement si élevée ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si l\'on suppose qu\'une civilisation post-humaine disposerait d\'une puissance de calcul immense (comme celle d\'une sphère de Dyson ou d\'un cerveau de Jupiter), le nombre <strong>N</strong> (simulations) pourrait se compter par milliards. Si <em>N</em> est très grand, même avec de faibles valeurs d\'intérêt (<em>fi</em>), le nombre d\'êtres simulés dépassera par ordres de grandeur les êtres originaux.',
    },
    {
      type: 'title',
      text: 'Preuves et limites de l\'informatique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De la physique quantique à la cosmologie, certains scientifiques cherchent des "glitches" ou des limites dans la résolution de notre réalité. Si l\'univers a une longueur minimale (longueur d\'un Planck) ou des comportements qui ressemblent à des optimisations de code (comme l\'intrication quantique), l\'hypothèse gagne des adeptes dans le domaine de la physique numérique.',
    },
    {
      type: 'title',
      text: 'Réflexion éthique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si nous découvrions que nous sommes une simulation, notre morale changerait-elle ? Pour Bostrom, ce qui importe, c\'est l\'expérience de la conscience. Un esprit simulé souffre et aime de la même manière qu\'un esprit biologique.',
    },
    {
      type: 'title',
      text: 'Cas d\'utilisation du calculateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Éducation scientifique :</strong> Comprendre les modèles probabilistes appliqués à la cosmologie.',
        '<strong>Philosophie contemporaine :</strong> Explorer le trilemme de Bostrom de manière interactive.',
        '<strong>Futurologie :</strong> Analyser l\'impact du taux de survie de l\'espèce sur notre destin.',
        '<strong>Curiosité existentielle :</strong> Évaluer vos propres convictions sur l\'avenir de la technologie.',
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

