import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'simulateur-ligne-becke-indice-refraction-verre';
const title = 'Simulateur d\'indice de réfraction et de ligne de Becke pour le verre forensique';
const description = 'Simulez la méthode de la ligne de Becke pour la comparaison forensique des verres en chauffant un liquide d\'immersion, en faisant correspondre les indices de réfraction et en observant la disparition du halo brillant.';

const howTo = [
  {
    name: 'Sélectionner un profil de verre suspect',
    text: 'Choisissez un profil de référence de verre commun tel que le silico-sodo-calcique, le borosilicate, le cristal de plomb ou le verre à vitre trempé.',
  },
  {
    name: 'Ajuster la température de la platine chauffante',
    text: 'Déplacez le curseur de température pour modifier l\'indice de réfraction du liquide d\'immersion virtuel.',
  },
  {
    name: 'Observer le mouvement de la ligne de Becke',
    text: 'Utilisez le contrôle de direction de mise au point pour voir si la ligne brillante se déplace vers l\'intérieur, l\'extérieur ou disparaît presque au point de correspondance.',
  },
  {
    name: 'Lire la différence d\'indice',
    text: 'Comparez l\'IR du liquide, l\'IR du verre, le delta d\'IR et le pourcentage de correspondance pour comprendre pourquoi le halo s\'estompe à proximité de l\'accord d\'indice.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que la ligne de Becke dans l\'analyse forensique du verre ?',
    answer: 'La ligne de Becke est un halo brillant observé près de la frontière entre un fragment de verre et un liquide d\'immersion lorsque leurs indices de réfraction diffèrent. Son mouvement lors de la mise au point aide à déterminer quel matériau possède l\'indice de réfraction le plus élevé.',
  },
  {
    question: 'Pourquoi le chauffage du liquide d\'immersion est-il important ?',
    answer: 'L\'indice de réfraction de nombreux liquides d\'immersion diminue lorsque la température augmente. En chauffant le liquide jusqu\'à ce que son indice corresponde à celui du verre, le contraste à la frontière s\'estompe et le bord du fragment devient difficile à voir.',
  },
  {
    question: 'L\'indice de réfraction peut-il identifier à lui seul la source d\'un verre ?',
    answer: 'Non. L\'indice de réfraction peut soutenir la comparaison et l\'exclusion de classe, mais l\'interprétation forensique de la source prend également en compte la composition élémentaire, l\'épaisseur, la couleur, le contexte de rupture, les contrôles, l\'incertitude et les procédures de laboratoire validées.',
  },
  {
    question: 'Que signifie la disparition de la ligne de Becke ?',
    answer: 'Cela signifie que le liquide et le verre ont des indices de réfraction très similaires dans ces conditions simulées. En microscopie réelle, la disparition est évaluée avec un contrôle de température calibré et des matériaux de référence.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vue de microscope virtuel montrant un fragment de verre dans un liquide d\'immersion',
    units: 'Système d\'unités de température',
    metric: 'Métrique',
    imperial: 'Impérial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Verre de référence',
    sodaLime: 'Verre d\'emballage silico-sodo-calcique',
    borosilicate: 'Verre de laboratoire borosilicate',
    leadCrystal: 'Cristal de plomb décoratif',
    tempered: 'Verre à vitre trempé',
    stageTemperature: 'Température de la platine',
    focusDirection: 'Direction de la mise au point',
    focusRaised: 'Relever la mise au point',
    focusLowered: 'Abaisser la mise au point',
    liquidRi: 'IR liquide',
    glassRi: 'IR verre',
    deltaRi: 'Delta d\'IR',
    matchMeter: 'Correspondance IR',
    canvasHalo: 'halo de Becke visible',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'bord presque assorti',
    interpMatched: 'La frontière est proche de la correspondance optique. Dans un test réel de la ligne de Becke, c\'est la région où le halo devient faible et le bord du fragment est le plus difficile à localiser.',
    interpGlassHigher: 'Le verre a l\'indice de réfraction le plus élevé. Avec une mise au point relevée, le comportement de la ligne de Becke indique que la lumière se concentre vers le côté verre de la frontière.',
    interpLiquidHigher: 'Le liquide d\'immersion a l\'indice de réfraction le plus élevé. Le halo se déplace vers le côté liquide jusqu\'à ce que la température rapproche l\'indice du liquide de celui du verre.',
    disclaimer: 'Simulation éducative uniquement. La comparaison forensique réelle du verre nécessite un équipement d\'indice de réfraction calibré, des étalons connus, des rapports d\'incertitude et une interprétation qualifiée.',
  },
  seo: [
    {
      type: 'title',
      text: 'Test de l\'indice de réfraction par la ligne de Becke pour le verre forensique',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulateur d\'enseignement',
      title: 'Ce que démontre ce simulateur d\'IR de verre',
      html: 'Ce simulateur montre pourquoi un fragment de verre devient plus ou moins visible dans l\'huile d\'immersion à mesure que l\'indice de réfraction du liquide approche de celui du verre. Il est conçu pour les étudiants en sciences forensiques qui apprennent la <strong>microscopie de la ligne de Becke</strong>, la correspondance d\'IR sur platine chauffante et les limites des preuves de comparaison de verre.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n verre - n liquide', label: 'contraste d\'indice affiché', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'plage de la platine chauffante', icon: 'mdi:thermometer' },
        { value: '4', label: 'profils de verre', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'unités de température convertibles', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Liste de contrôle pratique pour l\'observation de la ligne de Becke',
      items: [
        'Utilisez un fragment de verre propre et petit, entièrement immergé dans un liquide d\'indice de réfraction approprié.',
        'Faites la mise au point légèrement au-dessus et au-dessous de la frontière et observez de quel côté la ligne brillante semble se déplacer.',
        'Augmentez la température lentement près du point de correspondance estimé car la ligne peut s\'estomper sur une plage étroite.',
        'Enregistrez la température, le type de liquide, l\'étalon d\'étalonnage, le comportement de correspondance observé et l\'incertitude.',
        'Traitez l\'IR comme une preuve de classe: une non-correspondance peut exclure, tandis qu\'une correspondance nécessite un contexte supplémentaire.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ce que la comparaison d\'IR peut soutenir',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'L\'indice de réfraction peut aider à comparer des fragments de verre suspects avec du verre de référence connu dans des conditions contrôlées.',
          points: ['Comparación de características de clase', 'Exclusion lorsque l\'IR diffère clairement', 'Dépistage avant l\'analyse élémentaire', 'Enseignement du comportement de la frontière optique'],
        },
        {
          title: 'Ce que l\'IR ne peut pas prouver à lui seul',
          icon: 'mdi:alert-circle-outline',
          description: 'Un IR correspondant n\'identifie pas de manière unique une vitre, une bouteille, une vitre de véhicule ou une source de scène de crime.',
          points: ['Pas d\'attribution de source individuelle par elle-même', 'Pas de reconstruction sans le contexte de la scène', 'Ne remplace pas les contrôles', 'Pas de conclusion juridique à partir d\'un modèle sur navigateur'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Question de l\'utilisateur', 'Concept de microscopie', 'Réponse détaillée'],
      rows: [
        ['Pourquoi le bord brillant se déplace-t-il ?', 'Réfraction à une frontière entre deux indices de réfraction.', 'La ligne de Becke a tendance à se déplacer vers le matériau ayant l\'indice de réfraction le plus élevé lorsque la mise au point est relevée.'],
        ['Pourquoi le bord disparaît-il ?', 'Correspondance d\'indice.', 'Lorsque l\'IR du verre et du liquide sont presque égaux, le contraste à la frontière diminue et le halo devient faible.'],
        ['Pourquoi chauffer le liquide ?', 'Coefficient thermique de l\'IR.', 'L\'IR du liquide simulé diminue avec la température, permettant une correspondance avec différents types de verre.'],
        ['Une correspondance est-elle concluante ?', 'Limitation des preuves de classe.', 'Une correspondance soutient uniquement la cohérence ; de nombreux objets en verre peuvent partager un IR similaire.'],
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnement du modèle de simuation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le modèle attribue à chaque profil de verre un indice de réfraction de référence et traite le liquide d\'immersion comme un milieu sensible à la température. À mesure que la platine chauffante se réchauffe, l\'indice du liquide diminue selon un coefficient thermique fixe. Le simulateur calcule ensuite la différence entre l\'IR du verre et celui du liquide, en utilisant cette différence pour contrôler la luminosité du halo, le décalage du halo, le pourcentage de correspondance et le message d\'interprétation.',
    },
    {
      type: 'paragraph',
      html: 'Le champ de vision du microscope est intentionnellement qualitatif. Il ne cherche pas à tracer chaque trajet optique. Au lieu de cela, il préserve la relation pédagogique essentielle: un fort contraste d\'IR produit une frontière brillante ; un faible contraste produit une frontière faible ; et près du point de correspondance, le bord du verre peut sembler disparaître dans le liquide.',
    },
    {
      type: 'paragraph',
      html: 'Dans les laboratoires forensiques professionnels, l\'étalonnage de la platine chauffante est effectué à l\'aide d\'échantillons de verre de référence à l\'indice de réfraction connu. Étant donné que l\'indice de réfraction du liquide d\'immersion varie de manière prévisible en fonction de la température (généralement désigné par dn/dT), la température exacte à laquelle la ligne de Becke disparaît permet au scientifique de calculer l\'indice de réfraction du verre à quatre décimales près. Ce simulateur modélise ce comportement dépendant de la température à l\'aide d\'une formule linéaire, permettant aux étudiants de s\'exercer à trouver le point de correspondance exact en contrôlant soigneusement la platine chauffante.',
    },
    {
      type: 'paragraph',
      html: 'Lors de l\'analyse des preuves liées au verre, l\'indice de réfraction est considéré comme une preuve caractéristique de classe. Bien qu\'un indice de réfraction correspondant entre un fragment de la scène de crime et les vêtements d\'un suspect soit cohérent avec une source commune, il n\'identifie pas la source de manière unique car de nombreux objets en verre partagent des valeurs d\'indice de réfraction identiques. Par conséquent, les experts forensiques doivent interpréter les résultats correspondants de manière conservatrice, en signalant la correspondance en termes de cohérence tout en soulignant qu\'une attribution définitive de la source n\'est pas possible sur la seule base des propriétés optiques.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Indice de réfraction', definition: 'Mesure de la capacité d\'un matériau à dévier la lumière par rapport au vide.' },
        { term: 'Liquide d\'immersion', definition: 'Liquide aux propriétés optiques connues utilisé pour entourer un fragment lors de la comparaison microscopique d\'IR.' },
        { term: 'Ligne de Becke', definition: 'Ligne brillante ou halo observé à une frontière lorsque deux matériaux transparents ont des indices de réfraction différents.' },
        { term: 'Point de correspondance', definition: 'Plage de température où le liquide d\'immersion et le verre ont presque le même indice de réfraction.' },
        { term: 'Preuve de classe', definition: 'Preuve qui peut associer un élément à un groupe de sources possibles plutôt qu\'à une source unique unique.' },
      ],
    },
    {
      type: 'tip',
      title: 'Conseil d\'interprétation pour les étudiants',
      html: 'Dans les preuves liées au verre, une non-correspondance nette de l\'IR est souvent plus puissante qu\'une correspondance car elle permet d\'exclure une source proposée. Une correspondance est utile, mais sa force dépend des données de population, de la précision des mesures, de la composition élémentaire et du contexte de l\'affaire.',
    },
    {
      type: 'proscons',
      title: 'Forces et limites du test d\'IR du verre par la ligne de Becke',
      items: [
        { pro: 'Rapide, visuel et excellent pour enseigner la comparaison de matériaux transparents.', con: 'Le jugement de l\'observateur et la technique de mise au point peuvent affecter le mouvement apparent de la ligne.' },
        { pro: 'La correspondance de température peut estimer l\'IR avec une précision utile lorsqu\'elle est calibrée.', con: 'Le contrôle thermique, le vieillissement du liquide, la contamination et les étalons sont importants dans le travail réel.' },
        { pro: 'Utile pour exclure des fragments de verre ayant des propriétés optiques clairement différentes.', con: 'Ne peut pas individualiser une source sans preuves analytiques et contextuelles plus larges.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Garder la conclusion proportionnelle',
      title: 'Mantén la conclusión proporcional',
      html: 'Une simulation de la ligne de Becke sur navigateur est un outil d\'apprentissage, pas une méthode de laboratoire. L\'interprétation formelle des preuves liées au verre doit reposer sur des instruments validés, des procédures écrites, des enregistrements d\'étalonnage, des estimations d\'incertitude, des examens par les pairs et une formulation de rapport appropriée à la juridiction.',
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
      applicationCategory: 'ForensicApplication',
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
