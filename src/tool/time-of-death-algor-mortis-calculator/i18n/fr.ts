import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'calculateur-heure-deces-algor-mortis';
const title = 'Calculateur de l Heure de Deces par Algor Mortis';
const description = 'Estimez l intervalle post mortem et l heure probable du deces grace au nomogramme de Henssge et a la thermometrie cadaverique.';

const howTo = [
  { name: 'Saisir les temperatures rectale et ambiante', text: 'Entrez la temperature rectale profonde mesuree sur les lieux et la temperature ambiante moyenne.' },
  { name: 'Renseigner la masse corporelle et le facteur', text: 'Indiquez le poids corporel en kilogrammes et choisissez le coefficient d isolation vestimentaire ou aquatique.' },
  { name: 'Indiquer l heure de la prise de mesure', text: 'Saisissez l heure exacte du releve de temperature ou cliquez sur Heure actuelle.' },
  { name: 'Analyser l intervalle et la courbe thermique', text: 'Consultez l intervalle post mortem calcule, la fenetre horaire a 95 pour cent et la trajectoire de refroidissement.' }
];

const faq = [
  { question: 'Qu est-ce que l Algor Mortis en medecine legale?', answer: 'L Algor Mortis designe le refroidissement physique progressif du corps apres l arret cardio-circulatoire jusqu a l equilibre thermique ambiant.' },
  { question: 'Pourquoi le nomogramme de Henssge est-il privilegie?', answer: 'Parce qu il integre le plateau thermique initial et la decroissance bi-exponentielle en fonction du poids et de l isolation vestimentaire.' },
  { question: 'Quelle est la precision de l estimation thermometrique?', answer: 'Dans des conditions standards controlees, l intervalle de confiance a 95 pour cent est d environ plus ou moins 2.8 heures pendant les dix premieres heures.' },
  { question: 'Qu est-ce que le plateau thermique post mortem?', answer: 'C est la periode initiale de 1 a 3 heures apres le deces durant laquelle la temperature rectale centrale diminue tres lentement.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Estimateur de l Intervalle Post Mortem et Nomogramme de Henssge',
    disclaimer: 'Outil de simulation pédagogique et académique. Les conclusions médico-légales officielles nécessitent une autopsie judiciaire complète et l analyse des rigidités.',
    unitSystemLabel: 'Système d unités',
    unitMetricLabel: 'Métrique',
    unitImperialLabel: 'Impérial',
    presetsHeader: 'Scénarios médico-légaux types',
    presetCustom: 'Paramètres personnalisés',
    presetNakedCalm: 'Nu dans une pièce calme (20°C)',
    presetDressedIndoor: 'Habillé en intérieur (19.5°C)',
    presetWinterOutdoor: 'Extérieur en hiver (4°C)',
    presetSubmergedWater: 'Immergé dans l eau calme (12°C)',
    presetHeavyDuvet: 'Sous couette épaisse au lit (18°C)',
    inputsHeader: 'Mesures thermiques et paramètres du site',
    rectalTempLabel: 'Temp. rectale centrale',
    ambientTempLabel: 'Temp. ambiante',
    bodyWeightLabel: 'Poids corporel',
    factorLabel: 'Facteur correctif environnemental',
    measurementTimeLabel: 'Heure de la mesure',
    factorNaked: 'Nu dans l air calme',
    factorLightClothes: 'Vêtements légers (1-2 couches)',
    factorStandardClothes: 'Vêtements standards (3-4 couches)',
    factorHeavyWinter: 'Vêtements chauds d hiver',
    factorLightBlanket: 'Lit avec couverture légère',
    factorHeavyDuvet: 'Lit avec couette en duvet épaisse',
    factorStillWater: 'Immergé dans l eau stagnante',
    factorFlowingWater: 'Immergé dans l eau courante froide',
    factorWetClothing: 'Vêtements mouillés avec vent',
    factorMovingAir: 'Air en mouvement avec ventilateur',
    resultsHeader: 'Analyse de l intervalle post mortem',
    estimatedPmiLabel: 'Temps écoulé depuis le décès',
    deathWindowLabel: 'Fenêtre horaire probable',
    confidenceMarginLabel: 'Marge de confiance (95%)',
    coolingPhaseLabel: 'Phase thermodynamique',
    coolingRateLabel: 'Taux instantané de perte thermique',
    glaisterEstimateLabel: 'Comparaison avec règle de Glaister',
    chartHeader: 'Courbe de refroidissement bi exponentielle de Henssge',
    chartXAxis: 'Heures post mortem',
    chartYAxis: 'Température corporelle',
    chartNowMarker: 'Mesure effectuée',
    chartPlateauMarker: 'Plateau initial',
    phasePlateau: 'Phase de plateau',
    phaseDescent: 'Décroissance exponentielle',
    phaseEquilibrium: 'Équilibre thermique',
    phaseHyperthermia: 'Alerte hyperthermie pré-mortem',
    hoursUnit: 'heures',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Réinitialiser',
    nowBtn: 'Heure actuelle',
    coreThermometerLabel: 'Température centrale',
    baselineAmbientLabel: 'Seuil ambiant',
    referenceBodyTempLabel: 'Température référence'
  },
  seo: [
    { type: 'title', text: 'Principes Physiques du Refroidissement Cadavérique et Datation de la Mort', level: 2 },
    { type: 'paragraph', html: 'L estimation du délai post mortem représente une des problématiques majeures de la médecine légale moderne lors de la découverte d un corps. <strong>Algor Mortis</strong> caractérise la déperdition thermique progressive subie par le corps humain dès l arrêt circulatoire irréversible jusqu à l établissement d un équilibre thermique total avec le milieu environnant. Grâce à la mesure de la température rectale profonde et aux lois physiques de la thermodynamique, les praticiens légistes sont en mesure de circonscrire scientifiquement la fenêtre temporelle du décès.' },
    { type: 'diagnostic', variant: 'info', title: 'Comportement Thermodynamique Post Mortem', html: 'Le refroidissement du cadavre ne suit pas une trajectoire rectiligne uniforme. Il débute par une phase de latence essentielle appelée <em>plateau thermique</em>, suivie d une chute exponentielle rapide puis d une décélération progressive en asymptote.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Référence centrale normothermique' },
      { value: '±2.8 h', label: 'Marge statistique à 95%' },
      { value: 'Bi Exponentiel', label: 'Modèle mathématique de Henssge' }
    ] },
    { type: 'title', text: 'L Equation Bi Exponentielle de Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Les formules linéaires historiques simplifiées, comme la règle de Glaister, supposaient une perte constante de 0.83 degré Celsius par heure. Cependant, cette méthode empirique sommaire néglige la corpulence, l épaisseur des vêtements et l existence incontournable du plateau thermique initial.' },
    { type: 'code', ariaLabel: 'Equation de Henssge', code: 'Q = (T_rectale - T_ambiante) / (37.2 - T_ambiante)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (PoidsCorporel^0.625 * FacteurCorrection) - 0.0284' },
    { type: 'paragraph', html: 'Le professeur Claus Henssge a formulé une équation transcendantale à deux exponentielles décrivant simultanément le gradient de surface cutané et la capacité thermique du noyau viscéral profond, garantissant une estimation médico-légale très robuste.' },
    { type: 'title', text: 'Facteurs de Correction Environnementaux et Vestimentaires', level: 3 },
    { type: 'paragraph', html: 'Le taux de transfert thermique par conduction, convection et rayonnement dépend étroitement de la corpulence, des courants d air ambiants et des couches de tissus protecteurs.' },
    { type: 'table', headers: ['Situation sur la Scène', 'Facteur Cf', 'Impact Physique'], rows: [
      ['Nu dans l air calme', '1.0', 'Rayonnement standard et convection naturelle libre'],
      ['Vêtements légers (1-2 couches)', '1.1', 'Légère réduction de la perte convective cutanée'],
      ['Vêtements de ville normaux (3-4 couches)', '1.2', 'Barrière thermique modérée sur le tronc'],
      ['Vêtements chauds d hiver', '1.4', 'Isolation élevée piégeant l air chaud'],
      ['Sous une couette épaisse au lit', '1.8', 'Forte rétention thermique retardant le refroidissement'],
      ['Immergé dans l eau calme', '0.5', 'Conductivité thermique de l eau 24 fois plus forte que l air'],
      ['Immergé dans l eau courante froide', '0.35', 'Convection forcée accélérant la perte de chaleur']
    ] },
    { type: 'title', text: 'Phases Thermodynamiques du Refroidissement', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Le Plateau Thermique Initial', description: 'Pendant les 1 à 3 premières heures, la température rectale profonde varie peu pendant que la peau se refroidit.', points: ['Mise en place du gradient noyau écorce', 'Sous-estimation par les règles linéaires', 'Modélisé par le terme -0.25 exp(-5kt)'] },
      { title: 'La Décroissance Exponentielle Rapide', description: 'Une fois le gradient établi, la déperdition calorique se produit à vitesse maximale dépendante du poids.', highlight: true, points: ['Sensibilité analytique maximale', 'Intervalle de confiance le plus étroit', 'Fenêtre idéale pour la thermométrie'] }
    ] },
    { type: 'title', text: 'Recommandations Pratiques de Prise de Température', level: 3 },
    { type: 'list', items: [
      '<strong>Mesurer la température rectale profonde:</strong> introduire la sonde thermométrique étalonnée à 8 ou 10 cm dans le rectum.',
      '<strong>Mesurer la température ambiante près du corps:</strong> placer le capteur à moins de 10 cm du cadavre.',
      '<strong>Vérifier la stabilité thermique du lieu:</strong> noter le chauffage, les fenêtres ouvertes ou l ensoleillement direct.',
      '<strong>Évaluer l humidité des vêtements:</strong> les textiles mouillés augmentent fortement l évaporation.'
    ] },
    { type: 'summary', title: 'Synthèse Méthodologique', items: [
      'Le nomogramme de Henssge est le standard scientifique validé pour la datation de la mort.',
      'Toujours exprimer le résultat sous la forme d un intervalle probabiliste avec écarts-types.',
      'Croiser impérativement la thermométrie avec la rigidité cadavérique et les lividités.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
