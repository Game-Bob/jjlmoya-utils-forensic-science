const description = 'Modélisez le paradoxe de Fermi avec les paramètres de l\'équation de Drake, les filtres évolutionnaires, la durée de vie des signaux et une projection temporelle des civilisations détectables de la Voie lactée.';
const slug = 'laboratoire-filtre-paradoxe-fermi';
const title = 'Laboratoire du Filtre du Paradoxe de Fermi';

const howTo = [
  {
    name: 'Estimer le pipeline de Drake',
    text: 'Déplacez les curseurs de formation stellaire, de planète habitable, de vie, d\'intelligence et de technologie pour définir la fréquence à laquelle la Voie lactée produit des civilisations détectables.',
  },
  {
    name: 'Définir la force du filtre',
    text: 'Augmentez le filtre évolutionnaire pour que l\'effondrement, l\'autodestruction, l\'instabilité écologique ou les goulots d\'étranglement technologiques éliminent plus rapidement les civilisations.',
  },
  {
    name: 'Comparer durée de vie et horizon',
    text: 'Utilisez ensemble la durée de vie du signal et l\'horizon de projection. Une courte durée de vie peut rendre une galaxie silencieuse même si des civilisations naissent régulièrement.',
  },
  {
    name: 'Lire la courbe temporelle',
    text: 'Le graphique montre les civilisations détectables au fil du temps, rendant la coexistence et l\'extinction visibles au lieu de réduire le paradoxe de Fermi à un seul chiffre.',
  },
];

const faq = [
  {
    question: 'Que calcule ce simulateur du paradoxe de Fermi ?',
    answer: 'Il combine les termes de l\'équation de Drake avec un filtre de survie et un horizon temporel pour estimer combien de civilisations technologiques pourraient être détectables au même moment dans la Voie lactée.',
  },
  {
    question: 'S\'agit-il d\'une prédiction de véritables civilisations extraterrestres ?',
    answer: 'Non. C\'est un modèle exploratoire. L\'intérêt est de voir comment les hypothèses interagissent: une galaxie peut produire beaucoup de civilisations au cours de l\'histoire tout en n\'ayant que très peu qui chevauchent la nôtre.',
  },
  {
    question: 'Qu\'est-ce que le Grand Filtre ?',
    answer: 'Le Grand Filtre est l\'idée qu\'une ou plusieurs étapes entre la chimie simple et une civilisation technologique durable sont extrêmement improbables ou dangereuses.',
  },
  {
    question: 'Pourquoi la durée de vie du signal est-elle si importante ?',
    answer: 'La détectabilité dépend du chevauchement. Une civilisation qui émet pendant seulement quelques siècles peut être réelle mais invisible pour une autre civilisation observant à une époque différente.',
  },
  {
    question: 'Comment choisir les fractions de vie et d\'intelligence ?',
    answer: 'Utilisez des valeurs faibles pour un scénario pessimiste de vie rare et des valeurs plus élevées pour explorer la possibilité que la biologie ou l\'intelligence émerge souvent sur des mondes habitables stables.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Projection des civilisations détectables au fil du temps',
    metricsLabel: 'Mesures du modèle de Fermi',
    controlsLabel: 'Contrôles du modèle de Fermi',
    birthRate: 'Taux de naissance',
    peakCivilizations: 'Pic de civilisations',
    finalCivilizations: 'Civilisations finales',
    silenceScore: 'Score de silence',
    starFormationRate: 'Taux de formation stellaire',
    habitableFraction: 'Fraction de planètes habitables',
    lifeFraction: 'Fraction d\'émergence de la vie',
    intelligenceFraction: 'Fraction d\'intelligence',
    technologyFraction: 'Fraction de technologie',
    signalLifetime: 'Durée de vie du signal',
    filterSeverity: 'Sévérité du filtre',
    horizonYears: 'Horizon de projection',
    maxLabel: 'max',
    yearUnit: 'a',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Un simulateur pratique du paradoxe de Fermi pour les hypothèses de l\'équation de Drake',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le paradoxe de Fermi demande pourquoi le ciel nocturne semble silencieux si la Voie lactée contient des centaines de milliards d\'étoiles et de nombreuses planètes. Cet outil transforme cette question en un modèle interactif en combinant l\'équation de Drake avec des filtres évolutionnaires et une projection temporelle des civilisations détectables.',
    },
    {
      type: 'paragraph',
      html: 'Au lieu de fournir une seule estimation statique, le simulateur montre comment des civilisations peuvent naître, devenir détectables et disparaître avant qu\'une autre société ait la chance de les entendre. Ce problème de temporalité est central pour le SETI, car deux cultures technologiques doivent se chevaucher dans l\'espace, le temps et le comportement des signaux.',
    },
    {
      type: 'title',
      text: 'Comment le modèle utilise les paramètres de l\'équation de Drake',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les premiers contrôles représentent un pipeline de Drake simplifié. La formation stellaire fournit de nouveaux systèmes stellaires. Une fraction de ces systèmes forme des planètes habitables, une fraction des planètes habitables développe la vie, une fraction des mondes vivants produit l\'intelligence et une fraction des espèces intelligentes devient détectable par la technologie.',
    },
    {
      type: 'table',
      headers: ['Contrôle', 'Signification', 'Effet'],
      rows: [
        ['Taux de formation stellaire', 'Nouvelles étoiles par an dans la Voie lactée', 'Augmente ou réduit l\'offre brute de systèmes possibles'],
        ['Fraction de planètes habitables', 'Part des systèmes avec des mondes stables où la chimie de l\'eau liquide pourrait persister', 'Détermine quelle partie de la galaxie entre dans le pipeline biologique'],
        ['Fraction d\'émergence de la vie', 'Probabilité que la vie simple commence sur un monde habitable', 'Teste les hypothèses de vie rare par rapport à vie courante'],
        ['Fraction d\'intelligence', 'Probabilité que la vie fasse évoluer une cognition capable de technologie', 'Représente les goulots d\'étranglement biologiques et écologiques'],
        ['Fraction de technologie', 'Probabilité que l\'intelligence produise des signaux détectables', 'Capture les choix culturels, techniques et de communication'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les filtres peuvent rendre une galaxie active vide en apparence',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le curseur de sévérité du filtre condense de nombreux points de défaillance possibles en une seule pression de survie: impacts d\'astéroïdes, climats instables, autodestruction, effondrement des ressources, risque lié à l\'intelligence artificielle ou tout autre goulot d\'étranglement qui raccourcit la phase détectable. Un filtre fort ne signifie pas que les civilisations n\'apparaissent jamais. Cela signifie qu\'elles restent rarement visibles longtemps.',
    },
    {
      type: 'paragraph',
      html: 'Cette distinction est importante. La Voie lactée pourrait avoir produit des milliers d\'espèces technologiques au fil du temps tout en ne laissant presque aucun voisin actif pendant notre propre étroite fenêtre d\'écoute. Le graphique rend cette différence visible en traçant les civilisations détectables sur l\'horizon de projection choisi.',
    },
    {
      type: 'title',
      text: 'Interpréter le score de silence',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le score de silence augmente lorsque le nombre final de civilisations détectables en chevauchement est faible. Un silence élevé ne prouve pas que les humains sont seuls ; il montre que les hypothèses choisies rendent la non-détection peu surprenante. Un silence faible signifie que le modèle s\'attend à une galaxie plus bruyante, donc l\'absence de preuve devient plus intéressante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Taux de naissance élevé et filtre faible :</strong> une galaxie peuplée où le silence du SETI est plus difficile à expliquer.',
        '<strong>Taux de naissance élevé et filtre fort :</strong> de nombreuses civilisations apparaissent, mais peu survivent assez longtemps pour se chevaucher.',
        '<strong>Fractions biologiques faibles :</strong> la vie ou l\'intelligence est rare, donc le silence peut émerger avant même que la technologie n\'entre en jeu.',
        '<strong>Durée de vie du signal courte :</strong> des civilisations peuvent exister mais émettre trop brièvement pour qu\'un contact soit probable.',
      ],
    },
    {
      type: 'title',
      text: 'Cas d\'usage pour l\'enseignement, le débat et l\'intuition SETI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le Laboratoire du Filtre du Paradoxe de Fermi est utile dans les cours d\'astronomie, les discussions d\'astrobiologie, la communication scientifique et les débats philosophiques sur l\'avenir de l\'humanité. Il aide à séparer trois questions souvent mélangées: à quelle fréquence les civilisations naissent, combien de temps elles restent détectables et si leurs chronologies chevauchent la nôtre.',
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
