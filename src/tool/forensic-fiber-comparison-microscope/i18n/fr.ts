import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'microscope-comparaison-fibres-forensiques';
const title = 'Simulateur de microscope de comparaison des fibres forensiques';
const description = 'Établissez le profil d\'une fibre textile suspecte, comparez-la à des références connues et interprétez la morphologie, la polarisation et le spectre de colorant UV-Vis.';

const howTo = [
  {
    name: 'Établir le profil de la fibre suspecte',
    text: 'Définissez la matière, le diamètre, le sens de torsion, la réponse à la polarisation et le profil de colorant de la fibre récupérée.',
  },
  {
    name: 'Choisir une fibre de comparaison connue',
    text: 'Sélectionnez sur la droite une fibre de vêtement suspect, comme le coton, la laine, le polyester ou le nylon.',
  },
  {
    name: 'Ajuster la mise au point et la polarisation',
    text: 'Déplacez le curseur de mise au point et faites pivoter le polariseur pour observer la netteté, les crêtes de surface et la biréfringence.',
  },
  {
    name: 'Comparer la morphologie et les spectres UV-Vis',
    text: 'Utilisez le score de morphologie, le score de spectre, la correspondance combinée et les courbes d\'absorption pour déterminer si les échantillons sont cohérents ou nettement différents.',
  },
];

const faq = [
  {
    question: 'La microscopie des fibres peut-elle identifier le vêtement exact dont provient une fibre ?',
    answer: 'Généralement non. La comparaison des fibres peut montrer la cohérence ou les différences entre une fibre suspecte et un textile connu, mais l\'attribution à une source individuelle nécessite un examen minutieux du contexte, des méthodes validées et souvent des analyses chimiques ou instrumentales complémentaires.',
  },
  {
    question: 'Pourquoi utiliser la lumière polarisée pour la comparaison des fibres ?',
    answer: 'La lumière polarisée permet de révéler la biréfringence, le comportement d\'extinction et les différences structurelles entre fibres naturelles et synthétiques. Les fibres synthétiques présentent souvent une réponse de polarisation plus forte en raison de l\'orientation de leurs molécules.',
  },
  {
    question: 'Qu\'apporte le spectre UV-Vis ?',
    answer: 'Alors que la microscopie décrit la forme et le comportement optique, l\'absorbance UV-Vis permet de comparer le comportement des colorants sur différentes longueurs d\'onde. Des fibres similaires dotées de colorants différents peuvent ainsi se distinguer nettement sur le tracé spectral.',
  },
  {
    question: 'Pourquoi les résultats sont-ils présentés sous forme de scores plutôt que d\'identification définitive ?',
    answer: 'Les indices matériels en criminalistique doivent faire l\'objet de rapports proportionnés. Les scores sont des résumés pédagogiques de la similitude morphologique et spectrale, et non des conclusions de laboratoire ou des avis juridiques.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Microscope médico-légal virtuel à champ divisé comparant deux fibres textiles',
    chartAria: 'Graphique d\'absorbance UV-Vis comparant les spectres de colorant de la fibre suspecte et de la fibre connue',
    questionedSample: 'Échantillon suspect',
    fixedEvidence: 'Indice récupéré fixe',
    builderSummaryDefault: 'Coton / 18 µm / irrégulier / indigo',
    customQuestionedLabel: 'Fibre suspecte du dossier',
    material: 'Matière',
    cotton: 'Coton',
    woolMaterial: 'Laine',
    polyesterMaterial: 'Polyester',
    nylonMaterial: 'Nylon',
    materialcotton: 'coton',
    materialwool: 'laine',
    materialpolyester: 'polyester',
    materialnylon: 'nylon',
    twist: 'Torsion',
    irregularTwist: 'Irrégulier',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diamètre',
    polarResponse: 'Réponse polar',
    dyeProfile: 'Profil de colorant',
    indigoDye: 'Indigo',
    crimsonDye: 'Cramoisi',
    navyDye: 'Bleu marine',
    violetDye: 'Violet',
    dyeindigo: 'indigo',
    dyecrimson: 'cramoisi',
    dyenavy: 'bleu marine',
    dyeviolet: 'violet',
    knownSample: 'Comparaison connue',
    questionedCotton: 'Fibre de coton bleue suspecte',
    suspectCotton: 'Fibre de coton de la chemise suspecte',
    wool: 'Fibre de pull en laine rouge',
    polyester: 'Fibre de veste en polyester bleu marine',
    nylon: 'Fibre de doublure en nylon violet',
    focus: 'Mise au point fine',
    polarizer: 'Angle du polariseur',
    morphology: 'Morphologie',
    spectrum: 'UV-Vis',
    birefringence: 'Biréfringence',
    combinedMatch: 'Match combiné',
    uvVisTitle: 'Superposition d\'absorbance UV-Vis',
    statusStrong: 'Haute cohérence',
    statusPartial: 'Comparaison mitigée',
    statusDifferent: 'Exclusion étayée',
    verdictStrong: 'La fibre suspecte et la fibre connue sont hautement cohérentes en matière de diamètre, de torsion, de comportement optique et de spectre de colorant. Dans un cas réel, cela serait présenté comme un soutien à une origine textile commune potentielle, et non comme une identification individuelle.',
    verdictPartial: 'La comparaison est mitigée. Certaines caractéristiques de classe concordent, mais la morphologie, la réponse du colorant ou la birrefringence laissent subsister suffisamment de différences pour qu\'un examen plus approfondi soit nécessaire avant d\'envisager une quelconque association.',
    verdictDifferent: 'Les fibres ne sont pas cohérentes par rapport aux principales caractéristiques de classe. Le résultat simulé étaye l\'exclusion de ce textile connu en tant que source probable de la fibre suspecte.',
    disclaimer: 'Simulation pédagogique uniquement. La comparaison réelle de fibres médico-légales nécessite une microscopie validée, des contrôles, une documentation, des mesures de protection contre les contaminations, une réévaluation par les pairs et l\'interprétation d\'un expert en micro-traces.',
  },
  seo: [
    {
      type: 'title',
      text: 'Comparaison médico-légale des fibres par microscopie à champ divisé et spectres UV-Vis',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulateur pédagogique',
      title: 'Ce que démontre ce microscope virtuel de comparaison des fibres',
      html: 'Ce simulateur modélise la démarche pratique de la <strong>comparaison de fibres médico-légales</strong>: décrire la fibre textile suspecte, la comparer à une référence connue, ajuster la mise au point, tourner les filtres polarisants et analyser la réponse du colorant avec une courbe d\'absorbance UV-Vis simplifiée. Il est conçu pour les étudiants en analyse des micro-traces et non pour la prise de décision sur de vrais dossiers.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 champs', label: 'vue divisée du microscope', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'gamme de spectre visible', icon: 'mdi:chart-bell-curve' },
        { value: '4 classes', label: 'coton, laine, polyester, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'rotation du polariseur', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Observations fondamentales dans la comparaison des fibres textiles',
      items: [
        'Mesurer ou estimer le diamètre de la fibre tout en notant les variations naturelles le long du brin.',
        'Noter le sens de torsion, les crêtes de surface, la présence d\'une moelle, les particules de délustration et les indices de section transversale si disponibles.',
        'Utiliser la lumière polarisée pour comparer la biréfringence, le comportement d\'extinction et les changements de luminosité sous rotation.',
        'Comparer la couleur au microscope, puis analyser les informations de colorants par méthode instrumentale si le cas exige un niveau de distinction supérieur.',
        'Indiquer si les résultats sont cohérents, différents ou non concluants ; éviter les formulations qui suggèrent une source de vêtement unique sans preuve à l\'appui.',
      ],
    },
    {
      type: 'table',
      headers: ['Observation', 'Question à laquelle elle répond', 'Limite'],
      rows: [
        ['Diamètre et morphologie', 'Les fibres sont-elles physiquement similaires ?', 'Les variations de fabrication peuvent se chevaucher d\'un vêtement à l\'autre.'],
        ['Torsion et détails de surface', 'Les caractéristiques naturelles ou synthétiques correspondent-elles ?', 'L\'usure, l\'étirement et le montage peuvent altérer l\'apparence.'],
        ['Réponse en lumière polarisée', 'Les propriétés optiques correspondent-elles ?', 'La biréfringence constitue une preuve de classe et non une signature unique.'],
        ['Spectre de colorant UV-Vis', 'Les colorants sont-ils cohérents ?', 'Des colorants similaires peuvent sembler identiques ; l\'extraction et les réglages de l\'appareil sont déterminants.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ce qui soutient la cohérence',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Plusieur caractéristiques de classe indépendantes concordent entre la fibre suspecte et la fibre connue.',
          points: ['Plage de diamètres comparable', 'Même type général de fibre', 'Comportement de polarisation similaire', 'Pics d\'absorbance du colorant superposés'],
        },
        {
          title: 'Ce qui soutient l\'exclusion',
          icon: 'mdi:close-circle-outline',
          description: 'Une différence nette et répétable apparaît dans une caractéristique qui devrait correspondre pour une source textile commune.',
          points: ['Incohérence entre fibre naturelle et synthétique', 'Torsion ou morphologie de surface différente', 'Spectre de colorant nettement différent', 'Réponse de biréfringence incompatible'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fonctionnement du modèle de simulation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le modèle contient une petite base de données de référence comprenant le diamètre, le sens de torsion, la classe de fibre, la biréfringence, la famille de colorants et les points d\'absorbance UV-Vis. La fibre suspecte est configurable par l\'utilisateur, de sorte que le score de comparaison s\'adapte au profil du cas plutôt qu\'à un exemple de classe figé. L\'affichage microscopique réagit à la mise au point et à l\'angle du polariseur afin de montrer aux étudiants l\'importance des réglages optiques.',
    },
    {
      type: 'paragraph',
      html: 'Le contrôle du polariseur est particulièrement utile pour les fibres synthétiques. Le polyester et le nylon possèdent des valeurs de biréfringence plus élevées, de sorte que leur luminosité change plus visiblement lorsque le polariseur tourne. Le coton naturel et la laine réagissent également, mais l\'effet simulé est plus subtil. Cela illustre le concept pédagogique selon lequel l\'orientation moléculaire et la structure de la fibre influencent le comportement optique.',
    },
    {
      type: 'paragraph',
      html: 'Le graphique UV-Vis est une superposition simplifiée et ne remplace pas un spectrophotomètre. Dans la pratique réelle des micro-traces, la comparaison des colorants peut nécessiter une microspectrophotométrie, une chromatographie sur couche mince, une chimie d\'extraction, des contrôles de référence et une incertitude documentée. Le graphique sert à enseigner pourquoi deux fibres d\'apparence similaire sous un microscope peuvent néanmoins être différenciées par la chimie de leurs colorants.',
    },
    {
      type: 'paragraph',
      html: 'Les examinateurs légistes doivent documenter chaque étape du processus d\'analyse des fibres. Cela comprend la prise de photographies détaillées, l\'enregistrement des mesures et le maintien d\'une chaîne de contrôle pour toutes les preuves physiques. Le simulateur aide les étudiants à comprendre l\'importance d\'une documentation systématique et d\'une comparaison objective dans le travail médico-légal. En interagissant avec différents paramètres, les utilisateurs peuvent apprendre comment le trajet de la lumière, l\'épaisseur de l\'échantillon et la concentration du colorant affectent les courbes spectrales et l\'apparence physique.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fibre suspecte', definition: 'Fibre récupérée sur une scène, une victime, un suspect, un outil, un véhicule ou tout autre objet dont l\'origine est inconnue.' },
        { term: 'Fibre connue', definition: 'Fibre de référence prélevée sur un textile ou un objet connu en vue d\'être comparée à l\'échantillon suspect.' },
        { term: 'Biréfringence', definition: 'Comportement optique dans lequel un matériau présente des indices de réfraction différents selon la direction de la lumière ou sa polarisation.' },
        { term: 'Spectre UV-Vis', definition: 'Graphique montrant l\'intensité avec laquelle un colorant ou un matériau absorbe la lumière à différentes longueurs d\'onde.' },
        { term: 'Caractéristique de classe', definition: 'Propriété permettant d\'associer un indice à un groupe de sources potentielles plutôt qu\'à une source unique et spécifique.' },
      ],
    },
    {
      type: 'tip',
      title: 'Conseil d\'interprétation pour les étudiants',
      html: 'Un score de similarité élevé doit être interprété comme une <strong>cohérence</strong> et non comme une identité absolue. Les micro-traces sont plus probantes lorsque la microscopie, la chimie, le contexte de transfert, la persistance, le mode de prélèvement et les contrôles de contamination convergent tous dans le même sens.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Garder la conclusion dans les limites des éléments disponibles',
      html: 'Un microscope sur navigateur ne peut valider une correspondance de fibres. Les rapports officiels doivent décrire les observations, les critères de comparaison, les limites et le degré de soutien sans surestimer l\'attribution de la source.',
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
