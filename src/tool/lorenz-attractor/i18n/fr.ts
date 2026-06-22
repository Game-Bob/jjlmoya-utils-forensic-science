import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'attracteur-de-lorenz';
const title = 'Simulateur de Chaos de l\'Attracteur de Lorenz: L\'Effet Papillon en 3D';
const description = 'Explorez la théorie du chaos avec cette simulation interactive 3D de l\'attracteur de Lorenz. Visualisez l\'effet papillon.';

const howTo = [
  {
    name: 'Faire pivoter le canevas',
    text: 'Cliquez et faites glisser sur la fenêtre 3D pour faire pivoter l\'attracteur.'
  },
  {
    name: 'Ajuster les curseurs',
    text: 'Modifiez les paramètres Sigma, Rho et Beta pour observer la transition vers le chaos.'
  },
  {
    name: 'Observer la divergence',
    text: 'Observez comment l\'écart entre les deux trajectoires augmente de manière exponentielle.'
  },
  {
    name: 'Pause et réinitialisation',
    text: 'Utilisez les commandes pour mettre en pause la simulation ou la réinitialiser.'
  }
];

const faq = [
  {
    question: 'Qu\'est-ce que l\'attracteur de Lorenz ?',
    answer: 'L\'attracteur de Lorenz est un ensemble de solutions chaotiques du système de Lorenz, un modèle mathématique tridimensionnel décrivant le comportement des fluides en convection.'
  },
  {
    question: 'Qu\'est-ce que l\'effet papillon ?',
    answer: 'C\'est la sensibilité extrême aux conditions initiales, où une infime variation produit des effets divergents au cours du temps.'
  },
  {
    question: 'Que représentent les paramètres ?',
    answer: 'Sigma (σ) est le nombre de Prandtl (viscosité/conductivité thermique), Rho (ρ) le nombre de Rayleigh (intensité du chauffage convectif) et Beta (β) le rapport d\'aspect géométrique de la cellule convective.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copié',
    noHistory: 'Aucun historique',
    load: 'Charger',
    delete: 'Supprimer',
    title: 'Attracteur de Lorenz',
    subTitle: 'Chaos Déterministe',
    parameterControls: 'Paramètres du Système',
    simulationSpeed: 'Vitesse (dt)',
    initialPerturbation: 'Perturbation Initiale (dx)',
    trajectories: 'Trajectoires',
    distance: 'Distance de Divergence',
    exponentialGrowth: 'Divergence Exponentielle',
    resetDefault: 'Réinitialiser',
    clearPath: 'Effacer',
    play: 'Reprendre',
    pause: 'Pause',
    coords: 'Coordonnées',
    divergenceExplanation: 'Le graphique de divergence montre la distance euclidienne entre les deux trajectoires au fil du temps.'
  },
  seo: [
    { type: 'title', text: "Chaos Déterministe: Comprendre les Équations de Lorenz", level: 2 },
    { type: 'paragraph', html: "Le système de Lorenz est une formulation historique en dynamique non linéaire et en théorie du chaos. Initialement dérivé en 1963 par le météorologue et mathématicien <strong>Edward Lorenz</strong>, le modèle est né d'une représentation simplifiée de la convection atmosphérique. Sa découverte que ces équations simples et déterministes pouvaient produire un comportement complexe, non périodique et chaotique a transformé notre compréhension des systèmes physiques." },
    { type: 'title', text: "L'Effet Papillon: Sensibilité aux Conditions Initiales", level: 3 },
    { type: 'paragraph', html: "La caractéristique principale des systèmes chaotiques est leur <strong>sensibilité aux conditions initiales</strong>, popularisée sous le nom d'<strong>Effet Papillon</strong>. Dans ce simulateur, deux trajectoires (T1 en cyan et T2 en rose) partent avec une séparation minimale. Après un court délai, les termes non linéaires amplifient la différence et les chemins divergent complètement." },
    {
      type: 'table',
      headers: ["Paramètre", "Valeur Standard", "Signification Physique"],
      rows: [
        ["σ (Sigma)", "10.0", "Nombre de Prandtl: friction interne du fluide."],
        ["ρ (Rho)", "28.0", "Nombre de Rayleigh: intensité du chauffage convectif."],
        ["β (Beta)", "8/3", "Rapport d'aspect: échelle et vitesse de rotation des orbites."]
      ],
    },
    { type: 'title', text: "Espace des Phases, Attracteurs Étranges et Fractales", level: 3 },
    { type: 'paragraph', html: "En physique classique, les trajectoires se stabilisent en points fixes ou répètent le même chemin. Le système de Lorenz ne fait ni l'un ni l'autre: la trajectoire tourne infiniment dans l'espace des phases sans jamais se croiser, formant un <strong>attracteur étrange</strong> avec une géométrie fractale." }
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
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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