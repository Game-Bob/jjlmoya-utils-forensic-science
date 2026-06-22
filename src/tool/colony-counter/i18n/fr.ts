const howTo = [
    {
      name: 'Préparer l\'image de la boîte',
      text: 'Placez votre boîte de Pétri sur un fond sombre ou utilisez un rétro-illuminateur pour que les colonies contrastent clairement.',
    },
    {
      name: 'Identifier les types de colonies',
      text: 'Utilisez différentes couleurs de marqueur pour grouper les colonies selon leur morphologie, couleur ou taille.',
    },
    {
      name: 'Marquer chaque colonie',
      text: 'Cliquez sur chaque colonie visible. L\'outil numérotera automatiquement chaque clic pour éviter les répétitions ou les colonies oubliées.',
    },
    {
      name: 'Calculer la concentration finale',
      text: 'Entrez le volume ensemencé et le facteur de dilution pour obtenir le résultat final en UFC/ml ou UFC/g.',
    },
  ];
const faq = [
    {
      question: 'Qu\'est-ce que le comptage UFC?',
      answer: 'Les Unités Formant Colonies (UFC) est une mesure qui estime le nombre de cellules bactériennes ou fongiques viables dans un échantillon. On suppose que chaque colonie visible provient d\'une seule cellule ou d\'un groupe de cellules.',
    },
    {
      question: 'Pourquoi un compteur numérique est-il mieux qu\'un comptage manuel?',
      answer: 'Le comptage numérique évite l\'erreur humaine de "perdre le compte" lors du marquage visuel des colonies. Notre outil permet également de différencier les types de colonies par couleurs, facilitant l\'analyse des boîtes mixtes.',
    },
    {
      question: 'Comment les UFC par millilitre sont-elles calculées?',
      answer: 'Le nombre de colonies comptées est multiplié par le facteur de dilution inversé. Par exemple, si vous comptez 30 colonies dans une dilution 1:100, l\'échantillon original contient 3000 UFC/ml.',
    },
    {
      question: 'Quand une boîte est-elle considérée comme "non comptable"?',
      answer: 'En microbiologie standard, s\'il y a plus de 250-300 colonies, la boîte est considérée comme trop peuplée (Trop Nombreuses à Compter, TNTC) et les données ne sont pas fiables en raison de la concurrence entre colonies.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'compteur-colonies';
const title = 'Compteur de Colonies: Outil Numérique de Comptage CFU pour Boîtes de Pétri';
const description = 'Outil numérique pour compter les colonies bactériennes sur boîtes de Pétri. Différenciez les types, évitez les erreurs et calculez l\'UFC avec précision.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Cliquez pour télécharger votre boîte de Pétri',
    uploadSubtitle: 'Téléchargez une photo de votre boîte et commencez à compter les colonies',
    currentModeLabel: 'Mode Actuel',
    typeA: 'Type A',
    typeB: 'Type B',
    colonyType: 'Type de Colonie',
    counting: 'Comptage',
    totalCFU: 'Total UFC',
    undo: 'Annuler le dernier',
    clearAll: 'Effacer Tout',
    infoClick: 'Cliquez sur la plaque pour marquer les colonies',
    infoChange: 'Changez de type avant de marquer',
    confirmClear: 'Êtes-vous sûr de vouloir effacer toutes les colonies marquées ?',
  },
  seo: [
    {
      type: 'title',
      text: 'Microbiologie Numérique: Comptage Précis des Colonies',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le comptage des colonies bactériennes sur boîtes de Pétri est une technique fondamentale en microbiologie. Traditionnellement effectué avec un compteur manuel et un marqueur, il est facile de perdre le compte ou de marquer deux fois la même colonie. Cet outil numérique élimine ces erreurs et permet une différenciation visuelle entre les types de colonies.',
    },
    {
      type: 'title',
      text: 'Pourquoi le Comptage des Colonies est Important',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le nombre de colonies sur une boîte est directement proportionnel à la concentration de micro-organismes viables dans l\'échantillon d\'origine. Ces données sont critiques pour:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contrôle de la Qualité Alimentaire:</strong> Détecter la contamination bactérienne.',
        '<strong>Recherche Pharmaceutique:</strong> Évaluer l\'efficacité des antibiotiques.',
        '<strong>Diagnostic Clinique:</strong> Quantifier les infections dans les échantillons de patients.',
        '<strong>Biotechnologie:</strong> Optimiser les cultures de production de protéines recombinantes.',
      ],
    },
    {
      type: 'title',
      text: 'Unités Formant Colonies (UFC)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Chaque colonie visible sur une boîte est supposée provenir d\'une seule cellule viable. C\'est pourquoi elles sont appelées <strong>UFC</strong> (Unités Formant Colonies) ou <strong>CFU</strong> en anglais (Colony Forming Units).',
    },
    {
      type: 'paragraph',
      html: '<strong>Formule de Concentration:</strong><br><code>UFC/mL = (Colonies Comptées × Facteur de Dilution) / Volume Ensemencé</code>',
    },
    {
      type: 'title',
      text: 'Bonnes Pratiques de Comptage',
      level: 3,
    },
    {
      type: 'title',
      text: 'Plage Comptable',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'La plage idéale pour un comptage manuel est de <strong>30 à 300 colonies</strong> par boîte. En dessous de 30, l\'erreur statistique est trop élevée. Au-dessus de 300, les colonies commencent à fusionner et la distinction individuelle devient impossible.',
    },
    {
      type: 'title',
      text: 'Types de Colonies',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Sur des milieux sélectifs ou différentiels, il est courant de voir plusieurs morphologies de colonies:',
    },
    {
      type: 'list',
      items: [
        '<strong>Type A (Bleu-Vert):</strong> Grandes colonies mucoïdes, typiques des bactéries Gram négatives fermentant le lactose.',
        '<strong>Type B (Rose/Violet):</strong> Petites colonies translucides, non-fermentantes.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Notre outil permet de différencier jusqu\'à deux types de colonies avec des couleurs distinctes, facilitant le comptage différentiel sans besoin de marqueurs physiques.',
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

