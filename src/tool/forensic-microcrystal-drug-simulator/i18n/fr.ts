import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-test-drogue-microcristallin';
const title = 'Simulateur Forensique de Test Microcristallin de Drogues';
const description = 'Simulez les profils d\'identification microcristalline des drogues en combinant des substances suspectes avec des réactifs classiques et en comparant le faciès cristallin, la vitesse de croissance et la biréfringence.';

const howTo = [
  {
    name: 'Choisir un échantillon suspect',
    text: 'Sélectionnez la cocaïne, l\'héroïne, l\'amphétamine ou la méthamphétamine pour charger un profil pédagogique de la substance inconnue.',
  },
  {
    name: 'Appliquer un réactif microcristallin',
    text: 'Basculez entre le chlorure de platine, le chlorure d\'or et le réactif de Dragendorff pour observer comment la chimie du réactif modifie la morphologie des cristaux.',
  },
  {
    name: 'Ajuster la polarisation simulée',
    text: 'Déplacez le contrôle de polarisation pour augmenter ou réduire le contraste biréfringent dans le champ du microscope virtuel.',
  },
  {
    name: 'Comparer le résultat obtenu',
    text: 'Utilisez le faciès cristallin, le score de correspondance, la vitesse de croissance et la note d\'interprétation pour décider si le profil est similaire à la référence, partiel ou non spécifique.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Les tests microcristallins sont-ils confirmatifs pour les drogues illégales?',
    answer: 'Non. Les tests microcristallins sont des outils de dépistage présomptif ou comparatif. L\'identification réelle des drogues saisies doit suivre des protocoles validés comprenant des contrôles appropriés et des méthodes instrumentales confirmatives telles que la GC-MS, la LC-MS ou la spectroscopie infrarouge.',
  },
  {
    key: 'faq-2',
    question: 'Pourquoi différents réactifs produisent-ils des formes cristallines différentes?',
    answer: 'Le réactif forme des sels, des complexes ou des précipités avec les groupes fonctionnels du composé cible. La solubilité, la force de l\'acide, la concentration, les impuretés et la vitesse de séchage influencent l\'apparition du faciès observé sous forme d\'aiguilles, de rosettes, de prismes, de plaques ou de faible dispersion.',
  },
  {
    key: 'faq-3',
    question: 'Qu\'apporte la lumière polarisée à l\'examen microcristallin?',
    answer: 'La lumière polarisée peut augmenter le contraste et révéler la biréfringence, ce qui facilite la comparaison des contours, des ramifications et de la structure interne des cristaux. Elle ne dispense pas de l\'utilisation de normes de référence et de contrôles.',
  },
  {
    key: 'faq-4',
    question: 'Pourquoi un profil d\'apparence positive peut-il être trompeur?',
    answer: 'Les agents de coupe, les mélanges, les matières dégradées, l\'âge du réactif, la contamination et les attentes de l\'analyste peuvent produire des morphologies ambiguës ou chevauchantes. C\'est pourquoi les résultats présomptifs doivent être interprétés avec prudence.',
  },
  {
    key: 'faq-5',
    question: 'Ce simulateur peut-il identifier une substance inconnue?',
    answer: 'Non. Il s\'agit d\'une modélisation éducative des concepts courants de morphologie. Il ne peut pas tester de vraies preuves, mesurer des paramètres chimiques ou formuler des conclusions de laboratoire.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Microscope polarisé',
    canvasAria: 'Champ de croissance microcristalline animé',
    sample: 'Échantillon suspect',
    sampleCocaine: 'Cocaïne',
    sampleHeroin: 'Héroïne',
    sampleAmphetamine: 'Amphétamine',
    sampleMethamphetamine: 'Méthamphétamine',
    reagent: 'Étagère de réactifs',
    reagentPlatinum: 'Chlorure de platine',
    reagentGold: 'Chlorure d\'or',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Contraste polarisé',
    confidence: 'Correspondance',
    growth: 'Croissance',
    birefringence: 'Biréfr.',
    regrow: 'Regénérer les cristaux',
    warningLabel: 'Prudence forensique',
    warningTitle: 'Mise en garde de dépistage',
    matchReference: 'Type référence',
    matchPartial: 'Match partiel',
    matchNonSpecific: 'Non spécifique',
    habitFeatheryNeedles: 'Faisceaux d\'aiguilles plumeuses',
    habitRosettes: 'Rosettes en étoile',
    habitBranchingPrisms: 'Prismes ramifiés',
    habitPlates: 'Plaques minces',
    habitWeakScatter: 'Dispersion éparse non spécifique',
    cueCocainePlatinumChloride: 'Les faisceaux d\'aiguilles plumeuses et ramifiées constituent le profil pédagogique attendu pour la cocaïne avec le chlorure de platine.',
    cueCocaineGoldChloride: 'Le chlorure d\'or peut former des cristaux ramifiés orange-brun, mais ce profil est moins spécifique que celui obtenu avec le chlorure de platine.',
    cueCocaineDragendorff: 'Le réactif de Dragendorff donne ici une faible réaction aux alcaloïdes; la morphologie doit être traitée uniquement comme une information de dépistage.',
    cueHeroinPlatinumChloride: 'Des dépôts en forme de plaques peuvent apparaître, mais cette association ne constitue pas un profil pédagogique de confirmation solide.',
    cueHeroinGoldChloride: 'Les grappes de rosettes et les étoiles arrondies représentent le profil d\'héroïne de type référence dans ce simulateur.',
    cueHeroinDragendorff: 'Le réactif de Dragendorff produit des prismes ramifiés orange compatibles avec un dépistage d\'alcaloïdes, et non une preuve d\'identité.',
    cueAmphetaminePlatinumChloride: 'Des prismes à ramification rapide suggèrent un profil pédagogique de type stimulant sous le réactif choisi.',
    cueAmphetamineGoldChloride: 'Une cristallisation éparse signifie que le résultat visuel doit être signalé comme non spécifique.',
    cueAmphetamineDragendorff: 'Les projections d\'aiguilles croissent rapidement et sont utiles pour enseigner les comparaisons présomptives de l\'amphétamine.',
    cueMethamphetaminePlatinumChloride: 'Des rosettes polarisées peuvent se former, mais le résultat reste une comparaison morphologique présomptive.',
    cueMethamphetamineGoldChloride: 'Des formes de plaques minces sont visibles, bien que le chevauchement avec d\'autres composés limite la spécificité.',
    cueMethamphetamineDragendorff: 'Des prismes ramifiés orange denses fournissent la correspondance pédagogique la plus solide pour la méthamphétamine dans cet ensemble.',
    disclaimer: 'Modèle de dépistage éducatif uniquement. L\'identification réelle des drogues nécessite des étalons de référence validés, des contrôles de réactifs, une chaîne de traçabilité et des analyses instrumentales confirmatives.',
  },
  seo: [
    {
      type: 'title',
      text: 'Tests de Drogues Microcristallins en Sciences Forensiques',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulateur pédagogique',
      title: 'Objectif de ce simulateur microcristallin',
      html: 'Cet outil explique comment les tests microcristallins forensiques classiques peuvent produire des faciès de cristaux reconnaissables après le mélange d\'une drogue suspecte avec un réactif. Il aide les étudiants à comparer la <strong>morphologie des cristaux</strong>, la vitesse de croissance et le contraste sous lumière polarisée sans traiter le résultat du navigateur comme une preuve.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'profils d\'échantillons didactiques', icon: 'mdi:flask-outline' },
        { value: '3', label: 'options de réactifs traditionnels', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'faciès cristallins modélisés', icon: 'mdi:shape-outline' },
        { value: '0', label: 'revendications d\'identification légale', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Comment Interpréter le Faciès Cristallin',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Liste de contrôle pratique pour la comparaison',
      items: [
        'Commencez par un étalon de référence connu et un contrôle de réactif à blanc avant de comparer un échantillon inconnu.',
        'Enregistrez le réactif, la concentration, la taille de la goutte, le temps de séchage, la température et le grossissement du microscope.',
        'Comparez d\'abord le faciès général: aiguilles, rosettes, plaques, prismes, ramifications ou faible dispersion.',
        'Considérez une croissance partielle ou éparse comme un motif de tests supplémentaires, et non comme une identification confiante.',
      ],
    },
    {
      type: 'table',
      headers: ['Faciès observé', 'Questions fréquentes des utilisateurs', 'Interprétation prudente'],
      rows: [
        ['Aiguilles plumeuses', 'Cela ressemble-t-il à de la cocaïne avec du chlorure de platine?', 'Cela peut être une correspondance pédagogique utile, mais les mélanges et les conditions du réactif peuvent modifier le faciès.'],
        ['Rosettes', 'Les cristaux en étoile sont-ils diagnostiques?', 'Les rosettes peuvent appuyer une comparaison lorsque les contrôles correspondent, mais elles ne suffisent pas à elles seules.'],
        ['Prismes ramifiés', 'Pourquoi les dépistages de stimulants croissent-ils souvent rapidement?', 'Certains sels nucléent rapidement et se ramifient à mesure que le solvant s\'évapore; la vitesse est un indice de soutien, non confirmatif.'],
        ['Faible dispersion', 'Un profil faible signifie-t-il qu\'aucune drogue n\'est présente?', 'Non. Une faible concentration, des impuretés, un réactif vieilli ou une mauvaise préparation peuvent bloquer la croissance des cristaux.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Le dépistage microcristallin aide à',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Comparaison visuelle rapide lorsqu\'un analyste qualifié utilise des contrôles et des matériaux de référence.',
          points: ['Démonstrations en classe', 'Vocabulaire de morphologie', 'Triage présomptif', 'Comparaison de l\'effet des réactifs'],
        },
        {
          title: 'Le dépistage microcristallin ne remplace pas',
          icon: 'mdi:alert-circle-outline',
          description: 'Chimie confirmative validée pour une conclusion réelle sur une drogue saisie.',
          points: ['Confirmation instrumentale', 'Procédures accréditées', 'Validation spécifique à la matrice', 'Documentation des incertitudes'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Contexte Scientifique sur les Tests Microcristallins',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les tests microcristallins représentent une classe historique et hautement sensible de tests de dépistage chimique utilisés par les chimistes forensiques pour identifier les substances contrôlées suspectes. Lorsqu\'une petite quantité d\'un échantillon de drogue est dissoute dans un acide et combinée avec un réactif spécifique de métaux lourds, tel que le chlorure d\'or ou le chlorure de platine, un complexe de coordination ou un sel insoluble précipite. La structure moléculaire de la drogue dicte le taux de croissance, l\'orientation et la symétrie des cristaux résultants, produisant des formes ou faciès microscopiques distinctifs.',
    },
    {
      type: 'paragraph',
      html: 'L\'analyse de ces faciès sous un microscope à lumière polarisée permet aux examinateurs forensiques d\'observer des propriétés optiques telles que la biréfringence, où le cristal divise la lumière en deux rayons, créant des couleurs vives et un contraste élevé. Bien que les méthodes instrumentales telles que la chromatographie en phase gazeuse-spectrométrie de masse aient largement remplacé les tests microcristallins pour l\'identification confirmative, le dépistage microcristallin reste une technique appréciée en raison de sa rapidité, de son faible coût et de sa capacité à séparer des isomères optiques qui peuvent être difficiles à différencier par d\'autres moyens.',
    },
    {
      type: 'paragraph',
      html: 'Dans les environnements éducatifs, la simulation de ces réactions aide les étudiants à comprendre la relation entre les réactifs chimiques et la morphologie physique du cristal. En observant comment la cocaïne, l\'héroïne et diverses amphétamines réagissent à différents réactifs, les étudiants apprennent qu\'un seul test positif ne constitue pas une conclusion forensique finale. Les protocoles de dépistage des drogues appropriés nécessitent de comparer les échantillons inconnus à des matériaux de référence connus et d\'effectuer des blancs de réactifs pour garantir la validité et la spécificité des profils cristallins observés.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Faciès cristallin', definition: 'La forme visible ou le mode de croissance d\'un cristal, tel que des aiguilles, des plaques, des prismes ou des rosettes.' },
        { term: 'Nucléation', definition: 'La formation initiale de minuscules centres cristallins à partir desquels des structures plus grandes se développent.' },
        { term: 'Biréfringence', definition: 'Comportement optique qui peut faire apparaître les cristaux plus brillants ou colorés sous lumière polarisée.' },
        { term: 'Test présomptif', definition: 'Un test de dépistage qui suggère une classe ou un composé possible mais ne prouve pas l\'identité par lui-même.' },
        { term: 'Étalon de référence', definition: 'Un matériau connu testé dans les mêmes conditions pour comparer le profil inconnu.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bonnes pratiques pour les preuves réelles',
      html: 'Utilisez la morphologie microcristalline comme une ligne d\'enquête. Un flux de travail fiable comprend des blancs, des contrôles positifs, la documentation de l\'âge du réactif, un examen indépendant si nécessaire et des tests confirmatifs dans le cadre d\'un protocole accepté de drogues saisies.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Prudence forensique',
      title: 'Un joli cristal n\'est pas une identification légale',
      html: 'Le simulateur sépare délibérément le score de correspondance visuelle d\'une conclusion forensique. Le travail de cas réel doit tenir compte des mélanges, des agents de coupe, de la contamination, des performances des réactifs, de la formation de l\'analyste et des procédures de laboratoire validées.',
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
