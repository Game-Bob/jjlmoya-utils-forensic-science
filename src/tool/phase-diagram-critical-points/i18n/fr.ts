import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagramme-de-phases-point-critique-visualiseur';
const title = 'Diagramme de Phases et Visualiseur du Point Critique';
const description = 'Explorez les régions solide, liquide, gazeuse et supercritique sur un diagramme de phases pression-température interactif avec des marqueurs de point triple et de point critique.';

const howTo = [
  {
    name: 'Choisir une substance',
    text: 'Passez de l\'eau au dioxyde de carbone puis à l\'azote pour voir comment les points triples et critiques réels reconfigurent la carte des phases.',
  },
  {
    name: 'Modifier la température et la pression',
    text: 'Utilisez les curseurs pour placer l\'échantillon sur le plan pression-température. Le diagramme met à jour la région de phase active et le marqueur d\'échantillon en direct.',
  },
  {
    name: 'Observer le halo critique',
    text: 'Déplacez-vous vers l\'extrémité de la limite vapeur-liquide pour voir la chaleur latente s\'estomper et la distinction liquide-gaz se fondre en un fluide supercritique.',
  },
  {
    name: 'Lire le panneau pédagogique',
    text: 'Utilisez l\'étiquette de phase, l\'indicateur de chaleur latente et les affichages de points pour relier le diagramme visuel au vocabulaire thermodynamique.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce qu\'un diagramme de phases ?',
    answer: 'Un diagramme de phases indique quel état de la matière est stable pour différentes combinaisons de température et de pression. Les lignes de démarcation marquent les conditions où deux phases peuvent coexister en équilibre.',
  },
  {
    question: 'Que se passe-t-il au point critique ?',
    answer: 'Au point critique, la limite vapeur-liquide prend fin. Au-dessus de la température et de la pression critiques, le matériau devient un fluide supercritique et il n\'y a plus de distinction nette entre liquide et gaz.',
  },
  {
    question: 'Pourquoi l\'eau a-t-elle une ligne de fusion différente ?',
    answer: 'L\'eau est inhabituelle car la glace est moins dense que l\'eau liquide près du point de fusion. L\'augmentation de la pression favorise la phase liquide plus dense, donc la limite solide-liquide a une pente négative, contrairement à celle de nombreuses autres substances.',
  },
  {
    question: 'Les courbes tracées sont-elles exactes en laboratoire ?',
    answer: 'Non. L\'outil utilise des courbes simplifiées ancrées sur des valeurs publiées de point triple et de point critique. Il est conçu pour l\'apprentissage conceptuel, pas pour le génie des procédés ou les calculs de sécurité.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Commandes du diagramme de phases',
    substance: 'Substance',
    units: 'Unités',
    scientificUnits: 'Scientifiques (K, MPa)',
    metricUnits: 'Métriques (°C, kPa)',
    imperialUnits: 'Impériales (°F, psi)',
    temperature: 'Température',
    pressure: 'Pression',
    diagram: 'Diagramme de phases pression-température',
    sample: 'État de l\'échantillon',
    phase: 'Phase stable',
    triplePoint: 'Point triple',
    criticalPoint: 'Point critique',
    vaporCurve: 'Limite vapeur-liquide',
    meltingLine: 'Limite solide-liquide',
    latentHeat: 'Contraste de chaleur latente',
    criticalProximity: 'Proximité critique',
    coordinates: 'Coordonnées',
    solid: 'Solide',
    liquid: 'Liquide',
    gas: 'Gaz',
    supercritical: 'Supercritique',
    low: 'faible',
    high: 'élevé',
    reset: 'Réinitialiser',
    interpretation: 'Interprétation',
    note: 'Les lignes de démarcation marquent la coexistence ; les régions marquent la phase la plus stable pour les conditions sélectionnées.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualiseur interactif de diagramme de phases pour points triples, courbes d\'ébullition et points critiques',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce visualiseur de diagramme de phases transforme un graphique abstrait pression-température en une carte interactive. Choisissez une substance, déplacez la température et la pression, et voyez si l\'échantillon est prédit pour se comporter comme un solide, un liquide, un gaz ou un fluide supercritique.',
    },
    {
      type: 'title',
      text: 'Comment lire le diagramme pression-température',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Caractéristique', 'Signification', 'Observation'],
      rows: [
        ['Point triple', 'Solide, liquide et gaz coexistent', 'La jonction à basse température.'],
        ['Courbe vapeur-liquide', 'Équilibre d\'ébullition', 'La ligne reliant le point triple au point critique.'],
        ['Limite solide-liquide', 'Équilibre de fusion', 'La limite séparant solide et liquide.'],
        ['Point critique', 'Fin de la limite vapeur-liquide', 'Extrémité où la chaleur latente s\'estompe.'],
        ['Région supercritique', 'Fluide dense unique', 'Zone haute température/pression.'],
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