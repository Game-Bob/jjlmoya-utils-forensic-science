import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-alcoholemie-widmark';
const title = 'Simulateur de Taux d\'Alcoolémie Widmark';
const description = 'Simulez l\'absorption, la distribution et l\'élimination de l\'alcool dans le corps humain à l\'aide de la formule de Widmark et de la cinétique du métabolisme d\'ordre zéro.';

const howTo = [
  {
    name: 'Configurer le profil physique du sujet',
    text: 'Ajustez le poids corporel, le sexe biologique et le niveau d\'hydratation. Ces variables déterminent le facteur de Widmark (r) qui dicte le volume de distribution.',
  },
  {
    name: 'Définir l\'état de réplétion de l\'estomac',
    text: 'Choisissez entre estomac vide, repas léger ou repas complet. Cela influence la constante de vitesse d\'absorption (ka) et aplatit la courbe de concentration d\'alcool.',
  },
  {
    name: 'Ajouter des boissons à la chronologie',
    text: 'Entrez le volume individuel, le pourcentage d\'alcool par volume (degré) et l\'heure de consommation relative.',
  },
  {
    name: 'Analyser la courbe d\'alcoolémie résultante',
    text: 'Consultez le graphique pour voir la concentration d\'alcool dans le sang pendant 12 heures.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Qu\'est-ce que la formule de Widmark ?',
    answer: 'La formule de Widmark est un modèle mathématique développé par le chimiste suédois Erik M. P. Widmark. Elle estime la concentration d\'alcool dans le sang en fonction de la masse d\'alcool consommée, du poids corporel, d\'un facteur de distribution par genre (r) et d\'une élimination linéaire au fil du temps.',
  },
  {
    key: 'faq-2',
    question: 'Comment la nourriture affecte-t-elle l\'alcoolémie ?',
    answer: 'La nourriture ralentit la vidange gastrique, retardant l\'entrée de l\'alcool dans l\'intestin grêle. Dans la simulation, cela réduit la constante d\'absorption (ka), aplatissant et retardant le pic d\'alcoolémie.',
  },
  {
    key: 'faq-3',
    question: 'Pourquoi l\'élimination de l\'alcool est-elle linéaire ?',
    answer: 'Contrairement à d\'autres substances, l\'alcool est métabolisé par cinétique d\'ordre zéro parce que les enzymes du foie se saturent très vite. Il est donc éliminé à un taux constant, typiquement 0,15 g/L par heure.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil du sujet',
    weight: 'Poids (kg)',
    sex: 'Sexe biologique',
    male: 'Homme',
    female: 'Femme',
    hydration: 'Niveau d\'hydratation',
    hydrationLow: 'Faible',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Élevé',
    stomachState: 'Contenu de l\'estomac',
    stomachEmpty: 'Vide (Absorption rapide)',
    stomachLight: 'Repas léger (Absorption moyenne)',
    stomachFull: 'Repas complet (Absorption lente)',
    drinksTimeline: 'Chronologie de consommation',
    addDrink: 'Ajouter une boisson',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Degré (% vol)',
    drinkTime: 'Temps (Heure)',
    drinksList: 'Boissons consommées',
    remove: 'Supprimer',
    beer: 'Bière (330ml, 5%)',
    wine: 'Vin (150ml, 12%)',
    spirits: 'Spiritueux (40ml, 40%)',
    peakBac: 'Pic de BAC',
    timeToSober: 'Temps de dégrisement',
    sober: 'Sobre',
    currentBac: 'BAC actuel',
    drivingLimitAlert: 'Statut légal de conduite',
    safeLimit: 'Sous la limite',
    warningLimit: 'Avertissement dépassé',
    dangerLimit: 'Danger dépassé',
    graphTitle: 'Taux d\'alcoolémie sur 12 heures',
    timeAxisLabel: 'Temps (Heures)',
    bacAxisLabel: 'Alcoolémie (g/L)',
    legalLimitText: 'Limite de conduite standard',
    noDrinksText: 'Ajoutez des boissons pour simuler la courbe.',
    hours: 'heures',
    soberStatus: 'Sobre dans {time} heures',
    neverSober: 'Dépasse 12 heures',
    noteDisclaimer: 'Simulation éducative uniquement. Ne pas conduire après avoir consommé de l\'alcool.',
    noteWidmark: 'Basé sur l\'équation de Widmark et une élimination hépatique d\'ordre zéro.',
  },
  seo: [
    {
      type: 'title',
      text: 'Toxicologie médico-légale: Le simulateur d\'alcoolémie Widmark',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur illustre les processus physiologiques de l\'<strong>absorption, de la distribution et de l\'élimination de l\'éthanol</strong> dans le corps humain.',
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
