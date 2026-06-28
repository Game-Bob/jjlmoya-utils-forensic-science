import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analyseur-origine-motifs-incendie';
const title = 'Analyseur d\'origine par motifs d\'incendie';
const description = 'Cartographiez les motifs en V, la carbonisation profonde, les ombres de suie et les indicateurs de brûlure nette sur un plan de pièce, puis projetez des vecteurs de propagation du feu pour estimer la zone d\'origine la plus probable.';

const howTo = [
  {
    name: 'Importer un plan de scène',
    text: 'Faites glisser une image du plan dans l\'espace de travail ou chargez-la depuis le disque avant de placer des vecteurs de preuve.',
  },
  {
    name: 'Cliquer pour ouvrir le sélecteur radial de preuves',
    text: 'Placez le pointeur sur une marque de brûlure, ouvrez le menu radial contextuel et choisissez le type d\'indicateur directement sur la carte.',
  },
  {
    name: 'Glisser pour affiner les vecteurs et observer la convergence',
    text: 'Étendez chaque vecteur de propagation avec ancrage sur le canevas et observez le champ de probabilité se recalculer en temps réel à mesure que les preuves s\'accumulent.',
  },
  {
    name: 'Exporter l\'instantané technique',
    text: 'Générez un rapport structuré avec les coordonnées d\'origine, la confiance, la variance, l\'état des couches et l\'ensemble complet des vecteurs pour examen ultérieur.',
  },
];

const faq = [
  {
    question: 'Les motifs de brûlure peuvent-ils prouver le point exact où un incendie a débuté ?',
    answer: 'Non. Les motifs d\'incendie aident à générer et tester des hypothèses d\'origine, mais la ventilation, l\'extinction, la charge combustible, l\'embrasement généralisé et les perturbations post-incendie peuvent déformer les motifs. La détermination réelle de l\'origine exige une enquête systématique.',
  },
  {
    question: 'Pourquoi les motifs en V sont-ils importants dans l\'enquête incendie ?',
    answer: 'Les motifs en V reflètent souvent la propagation ascendante et vers l\'extérieur des flammes sur les surfaces verticales. Ils peuvent pointer vers une zone d\'origine plus basse, mais doivent être comparés à d\'autres preuves avant de tirer des conclusions.',
  },
  {
    question: 'Qu\'indique la carbonisation profonde ?',
    answer: 'La carbonisation profonde peut indiquer un chauffage plus long, un flux thermique plus élevé ou des effets de combustible. C\'est un contexte utile, mais elle n\'indique pas automatiquement l\'origine car les matériaux se carbonisent à des vitesses différentes.',
  },
  {
    question: 'Pourquoi utiliser plusieurs vecteurs plutôt qu\'une seule flèche ?',
    answer: 'Un motif unique peut être trompeur. Plusieurs vecteurs indépendants réduisent l\'influence d\'un mur endommagé, d\'un seul paquet de combustible ou d\'un seul chemin de ventilation.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Espace de travail forensique interactif pour dessiner des vecteurs de propagation du feu',
    vPattern: 'Motif en V',
    deepChar: 'Carbonisation profonde',
    sootShadow: 'Ombre de suie',
    cleanBurn: 'Brûlure nette',
    loadPlan: 'Charger le plan',
    generateReport: 'Générer le rapport',
    pointerLabel: 'Pointeur',
    resetVectors: 'Réinitialiser',
    estimatedOrigin: 'Origine estimée',
    visibleLayers: 'Couches de preuves visibles',
    vectorsLabel: 'VECTEURS',
    confidenceLabel: 'CONFIANCE',
    varianceLabel: 'VARIANCE',
    modeLabel: 'MODE',
    guideSummary: 'Comment utiliser cet outil',
    flowPanelTitle: 'Flux de travail',
    legendPanelTitle: 'Légende des preuves',
    readoutPanelTitle: 'Panneau de résultats',
    flow1Kicker: 'ÉTAPE 1',
    flow1Icon: '1',
    flow1Title: 'Charger',
    flow1Text: 'Téléverser le plan de scène',
    flow2Kicker: 'ÉTAPE 2',
    flow2Icon: '2',
    flow2Title: 'Choisir l\'indice',
    flow2Text: 'Cliquer sur la marque de brûlure',
    flow3Kicker: 'ÉTAPE 3',
    flow3Icon: '3',
    flow3Title: 'Glisser le vecteur',
    flow3Text: 'Viser la direction du feu',
    flow4Kicker: 'ÉTAPE 4',
    flow4Icon: '4',
    flow4Title: 'Lire le résultat',
    flow4Text: 'Vérifier le pied de page + exporter',
    basicsTitle: 'Ce que vous devez faire en premier',
    basicsIntro: 'Chargez un plan clair, ne marquez que les motifs que vous pouvez justifier et répartissez les vecteurs sur différentes surfaces au lieu de répéter le même indice.',
    indicatorsTitle: 'Ce que chaque type de preuve signifie',
    vPatternShort: 'Brûlure murale s\'ouvrant vers le haut',
    vPatternExplain: 'Un motif en V est la forme de brûlure ascendante et vers l\'extérieur souvent observée sur un mur. Il peut suggérer que la chaleur et les flammes sont montées d\'une zone plus basse, mais ne constitue pas une preuve automatique de l\'origine exacte.',
    deepCharShort: 'Zone brûlée plus fort ou plus longtemps',
    deepCharExplain: 'La carbonisation profonde signifie qu\'un matériau semble plus brûlé, noirci ou consumé dans une zone qu\'autour. Elle peut indiquer un chauffage plus long ou plus intense, mais le type de combustible et l\'épaisseur du matériau comptent beaucoup.',
    sootShadowShort: 'Fumée bloquée ou redirigée',
    sootShadowExplain: 'Une ombre de suie est une zone protégée ou différemment noircie qui suggère qu\'un objet, une surface ou un flux d\'air a modifié la façon dont la suie s\'est déposée. Elle peut aider à reconstruire ce qui était présent ou comment la fumée s\'est déplacée.',
    cleanBurnShort: 'Moins de suie dû à la chaleur ou au flux d\'air',
    cleanBurnExplain: 'La brûlure nette est une zone où la suie semble plus claire, éliminée ou absente parce que la chaleur, la ventilation ou l\'exposition directe aux flammes l\'a affectée différemment. C\'est utile, mais toute zone propre ne marque pas l\'origine.',
    resultsTitle: 'Comment lire le résultat',
    resultsIntro: 'Utilisez le pied de page comme vérification rapide de votre cartographie, pas comme conclusion forensique définitive.',
    resultsPoint1: 'Combien de lignes de preuve sont actives.',
    resultsPoint2: 'Avec quelle force les vecteurs actifs concordent.',
    resultsPoint3: 'Quelle est encore l\'étendue de la zone d\'origine.',
    resultsPoint4: 'Ce que l\'outil attend de vous ensuite.',
    awaitingVector: 'En attente de vecteur',
    selectIndicator: 'Sélectionner l\'indicateur',
    refiningVector: 'Affinage du vecteur',
    needsMoreVectors: 'Plus de vecteurs nécessaires',
    wideArea: 'Zone d\'origine large',
    focusedArea: 'Zone d\'origine concentrée',
    dropPlan: 'Déposez l\'image du plan ou cliquez pour téléverser',
    needsMoreVectorsText: 'Dessinez au moins deux flèches directionnelles claires. Trois observations indépendantes ou plus rendent généralement la convergence beaucoup plus facile à interpréter.',
    wideAreaText: 'Les lignes projetées se croisent, mais la dispersion reste large. Dans une scène réelle, comparez la ventilation, la charge combustible, les effets d\'extinction et les témoignages avant de réduire l\'origine.',
    focusedAreaText: 'Les vecteurs convergent vers une zone compacte. Considérez ceci comme un signal pédagogique fort pour le développement d\'hypothèses d\'origine, pas comme une conclusion forensique définitive.',
    disclaimer: 'Simulation éducative uniquement. L\'enquête réelle sur l\'origine et la cause d\'un incendie doit suivre les guides reconnus, les protocoles de sécurité sur scène, les normes de documentation et l\'examen qualifié par des experts.',
  },
  seo: [
    {
      type: 'title',
      text: 'Analyse interactive de l\'origine d\'un incendie à partir de vecteurs de motifs de brûlure',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Simulateur pédagogique',
      title: 'Ce qu\'enseigne cet analyseur d\'origine par motifs d\'incendie',
      html: 'Cet outil de navigateur montre comment les enquêteurs raisonnent à partir de motifs physiques d\'incendie vers une <strong>zone d\'origine</strong> probable. Les utilisateurs cartographient les preuves visibles, dessinent des vecteurs directionnels de propagation et observent la convergence ou la dispersion des lignes projetées. Le modèle est intentionnellement éducatif: il enseigne la géométrie et l\'interprétation des motifs, pas la détermination légale des causes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 couches', label: 'Motif V, carbonisation, suie, brûlure nette', icon: 'mdi:layers-triple' },
        { value: 'Plan 2D', label: 'plan structurel de la pièce', icon: 'mdi:floor-plan' },
        { value: '3+ flèches', label: 'observations recommandées', icon: 'mdi:vector-line' },
        { value: '0-100 %', label: 'saisie de confiance', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Un flux de travail discipliné pour l\'interprétation des motifs d\'incendie',
      items: [
        'Commencez par la sécurité, la préservation de la scène, les photos, les croquis et la documentation systématique avant d\'interpréter les motifs.',
        'Séparez les types de motifs pour que les dommages en V, la profondeur de carbonisation, le dépôt de suie et la brûlure nette ne soient pas réduits à une seule hypothèse.',
        'Dessinez des indicateurs directionnels uniquement là où le motif physique soutient une direction de propagation défendable.',
        'Cherchez la convergence entre des observations indépendantes plutôt que de vous fier aux dommages les plus spectaculaires.',
        'Utilisez la zone d\'origine estimée comme hypothèse à tester contre les combustibles, les sources d\'allumage, la ventilation, les preuves électriques et les témoignages.',
      ],
    },
    {
      type: 'table',
      headers: ['Motif', 'Valeur potentielle', 'Principale précaution'],
      rows: [
        ['Motif en V', 'Peut suggérer une propagation ascendante et vers l\'extérieur depuis une zone plus basse.', 'Peut être altéré par la ventilation, l\'embrasement généralisé, la géométrie des murs et l\'extinction.'],
        ['Carbonisation profonde', 'Peut indiquer une exposition prolongée à la chaleur ou une combustion intense.', 'Le type de combustible et l\'épaisseur du matériau affectent fortement la profondeur de carbonisation.'],
        ['Ombre de suie', 'Peut révéler des zones protégées, le placement d\'objets ou les effets de flux d\'air.', 'Le déplacement de meubles ou l\'activité d\'extinction peuvent modifier l\'interprétation.'],
        ['Brûlure nette', 'Peut montrer une chaleur élevée, une ventilation ou une combustion en phase avancée.', 'N\'identifie pas automatiquement le premier matériau enflammé.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Meilleures hypothèses d\'origine',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Les meilleures hypothèses expliquent plusieurs observations simultanément.',
          points: ['Les vecteurs indépendants convergent', 'Les preuves correspondent aux chemins de ventilation connus', 'Les paquets de combustible sont pris en compte', 'Les origines alternatives sont activement testées'],
        },
        {
          title: 'Hypothèses d\'origine faibles',
          icon: 'mdi:alert-circle-outline',
          description: 'Les hypothèses faibles reposent souvent sur un seul motif sans tester les facteurs de distorsion.',
          points: ['Une seule zone carbonisée est traitée comme preuve', 'L\'embrasement généralisé est ignoré', 'Les dommages d\'extinction ne sont pas documentés', 'Les preuves de source d\'allumage sont supposées'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment fonctionne le modèle vectoriel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chaque flèche est traitée comme une ligne projetée de propagation du feu. L\'estimateur calcule les intersections de lignes par paires, filtre les points qui tombent dans une limite raisonnable du plan, fait la moyenne des croisements restants et rapporte un rayon basé sur la dispersion de ces intersections. Un petit rayon avec plusieurs vecteurs produit un signal de convergence plus fort. Le modèle d\'intersection fonctionne en résolvant les équations paramétriques de deux lignes partant de leurs marqueurs de preuve respectifs. Lorsque deux vecteurs pointent vers une région commune, leur point de croisement théorique apporte une coordonnée au groupe de moyennage. Plus il y a de vecteurs indépendants qui participent, plus l\'estimateur peut filtrer les croisements éloignés du groupe principal, réduisant ainsi l\'influence d\'une observation isolée qui pourrait être mal orientée ou mal interprétée.',
    },
    {
      type: 'paragraph',
      html: 'Cette approche géométrique reflète un exercice de classe: elle aide les étudiants à comprendre pourquoi l\'analyse d\'origine s\'améliore lorsque les observations proviennent de différentes surfaces et types de motifs. Elle expose également un problème courant: les flèches peuvent se croiser même lorsque l\'interprétation sous-jacente est mauvaise, le centre mathématique ne doit donc jamais remplacer le jugement de la science du feu. Dans une enquête réelle, les praticiens comparent le résultat tracé avec les chemins de ventilation, la répartition de la charge combustible, les dommages structurels et les témoignages avant de traiter toute coordonnée comme une origine probable. L\'outil encourage cette habitude en affichant la variance à côté du point estimé, rappelant aux utilisateurs qu\'un groupe serré d\'intersections n\'est aussi solide que la qualité des observations qui l\'ont produit.',
    },
    {
      type: 'paragraph',
      html: 'Au-delà de la logique d\'intersection de base, l\'estimateur applique une contrainte de limite pour que les croisements situés bien au-delà du plan de la pièce soient exclus. Cela empêche les valeurs aberrantes d\'entraîner le centre moyenné vers des emplacements impossibles. Le rayon final représente l\'écart-type des coordonnées de croisement restantes, donnant une mesure directe de la cohérence avec laquelle les vecteurs actifs concordent. Un rayon inférieur à dix pour cent de l\'étendue du plan indique une forte convergence. Un rayon dépassant un quart du plan signale que les preuves ne soutiennent pas encore une origine concentrée, et des observations supplémentaires ou meilleures sont nécessaires avant de tirer des conclusions.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Zone d\'origine', definition: 'La région générale où les preuves disponibles suggèrent que l\'incendie a commencé.' },
        { term: 'Motif en V', definition: 'Un motif d\'incendie qui apparaît souvent comme un dommage ascendant et vers l\'extérieur sur une surface verticale.' },
        { term: 'Brûlure nette', definition: 'Une zone plus claire ou plus propre causée lorsque la suie est brûlée ou non déposée dans des conditions de chaleur élevée ou de flux d\'air.' },
        { term: 'Ombre de suie', definition: 'Une zone de suie protégée ou déposée différemment qui peut préserver des informations sur les objets, le flux d\'air ou l\'exposition à la chaleur.' },
        { term: 'Convergence vectorielle', definition: 'Le regroupement d\'indicateurs directionnels projetés autour d\'une région commune.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Prudence forensique',
      title: 'Ne transformez pas la convergence en certitude',
      html: 'Un groupe d\'intersections serré n\'est utile que lorsque les observations sont valides. Les enquêtes réelles doivent tenir compte de la ventilation, de l\'embrasement généralisé, des paquets de combustible, des systèmes électriques, des preuves d\'appareils, des témoignages, de l\'extinction et de la perturbation de la scène.',
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
