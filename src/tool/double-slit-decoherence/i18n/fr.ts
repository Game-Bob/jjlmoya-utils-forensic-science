import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-double-fente-decoherence';
const title = 'Simulateur d\'Expérience des Fentes de Young et Décohérence';
const description = 'Activez et désactivez des détecteurs de chemin pour voir l\'interférence quantique se transformer en deux bandes de particules dans un simulateur visuel à double fente.';

const howTo = [
  {
    name: 'Commencez avec le détecteur désactivé',
    text: 'Laissez le détecteur de chemin désactivé et observez l\'écran former des franges d\'interférence claires et sombres à partir d\'amplitudes de probabilité cohérentes.',
  },
  {
    name: 'Augmentez la force du détecteur',
    text: 'Montez le contrôle du détecteur pour introduire une information de chemin. Plus le détecteur devient fort, plus la cohérence diminue et les franges s\'estompent.',
  },
  {
    name: 'Modifiez la géométrie des fentes',
    text: 'Ajustez l\'écartement et la largeur des fentes pour voir comment la géométrie modifie l\'espacement des franges, la largeur de l\'enveloppe et la distribution finale sur l\'écran.',
  },
  {
    name: 'Lisez les métriques en direct',
    text: 'Utilisez la visibilité des franges, l\'information de chemin et la cohérence pour relier le motif visuel à l\'histoire de la mesure quantique.',
  },
];

const faq = [
  {
    question: 'Pourquoi le motif change-t-il quand les détecteurs sont allumés ?',
    answer: 'Un détecteur qui peut révéler quelle fente la particule a utilisée détruit la relation de phase entre les deux alternatives. Sans cette cohérence, les deux chemins de probabilité n\'interfèrent plus et l\'écran se rapproche de deux larges bandes de particules.',
  },
  {
    question: 'Ce simulateur signifie-t-il que la conscience effondre la fonction d\'onde ?',
    answer: 'Non. Le simulateur se concentre sur l\'information physique de chemin et la décohérence. Un détecteur, l\'environnement ou toute interaction qui rend le chemin distinguable peut supprimer l\'interférence sans nécessiter d\'observateur conscient.',
  },
  {
    question: 'Qu\'est-ce que la visibilité des franges ?',
    answer: 'La visibilité des franges compare les régions claires et sombres sur l\'écran. Une visibilité élevée signifie un fort contraste d\'interférence. Une visibilité basse signifie que les espaces sombres se sont remplis et que le motif se comporte davantage comme deux flux de particules indépendants.',
  },
  {
    question: 'Est-ce un solveur complet de mécanique quantique ?',
    answer: 'Non. C\'est un modèle éducatif qui mélange une enveloppe d\'interférence à double fente avec un contrôle de décohérence. Il est conçu pour expliquer visuellement l\'effet de mesure, et non pour remplacer une simulation de l\'équation de Schrödinger pour un appareil réel.',
  },
  {
    question: 'Pourquoi l\'écartement des fentes affecte-t-il l\'espacement des franges ?',
    answer: 'Un écartement plus grand crée une différence de phase plus rapide à travers l\'écran, donc les bandes claires et sombres se rapprochent. Un écartement plus petit écarte davantage les franges.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Appareil à double fente',
    controls: 'Contrôles de la double fente',
    results: 'Résultats de la double fente',
    kicker: 'Contrôle de mesure',
    detectorToggle: 'Activer le détecteur de chemin',
    detectorStrength: 'Force du détecteur',
    slitSeparation: 'Écartement des fentes',
    slitWidth: 'Largeur de fente',
    unobserved: 'Non observé',
    observed: 'Observé',
    waveMode: 'Interférence',
    particleMode: 'Bandes de particules',
    fringeVisibility: 'Visibilité des franges',
    whichPath: 'Info de chemin',
    coherence: 'Cohérence',
    readoutNote: 'L\'interférence subsiste quand les deux chemins restent indiscernables. La mesure rend l\'information de chemin disponible et l\'écran perd ses franges sombres.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur d\'expérience des fentes de Young avec décohérence et détection de chemin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur à double fente transforme l\'expérience quantique classique en un modèle visuel interactif. Avec le détecteur désactivé, l\'écran affiche un motif d\'interférence: des bandes claires et sombres produites parce que les deux chemins possibles restent cohérents. Quand un détecteur de chemin est ajouté, le motif se transforme progressivement en deux larges bandes de particules car les alternatives de chemin deviennent distinguables.',
    },
    {
      type: 'paragraph',
      html: 'L\'outil est conçu pour les apprenants qui cherchent une explication claire de pourquoi l\'observation modifie le résultat des fentes de Young. Il évite la phrase vague "l\'observateur change la réalité" et se concentre sur l\'idée physiquement utile: l\'interférence nécessite des alternatives indiscernables, tandis que la mesure et l\'intrication avec l\'environnement suppriment la relation de phase nécessaire aux franges.',
    },
    {
      type: 'title',
      text: 'Comment lire le simulateur',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Contrôle ou métrique', 'Ce qu\'il modifie', 'Ce qu\'il faut observer'],
      rows: [
        ['Profondeur d\'itération', 'Quantité d\'information de chemin disponible', 'Des valeurs plus élevées réduisent la visibilité des franges.'],
        ['Écartement des fentes', 'Distance entre les ouvertures', 'Un écartement plus large resserre les bandes d\'interférence.'],
        ['Visibilité des franges', 'Contraste clair/sombre', 'Un chiffre élevé indique une interférence cohérente.'],
        ['Cohérence', 'Relation de phase entre les chemins', 'La cohérence chute lorsque le chemin devient distinguable.'],
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