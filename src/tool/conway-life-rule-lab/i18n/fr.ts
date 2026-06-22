import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'laboratoire-regles-jeu-vie-conway';
const title = 'Laboratoire de règles du Jeu de la Vie de Conway';
const description = 'Jouez, modifiez et comparez des automates cellulaires de type Conway avec règles B/S, motifs de départ, métriques en direct et grille responsive.';

const howTo = [
  {
    name: 'Ensemencer le plateau',
    text: 'Choisissez un motif comme un planeur, un pulsar ou le canon de Gosper, placez-le sur la grille ou générez une population aléatoire.',
  },
  {
    name: 'Lancer la simulation',
    text: 'Utilisez les contrôles de lecture, pause, pas et tempo pour observer l\'évolution des naissances, morts, densité et stabilité.',
  },
  {
    name: 'Changer la règle',
    text: 'Changez les préréglages ou tapez une règle B/S comme B3/S23, B36/S23 ou B3678/S34678 pour comparer différents automates.',
  },
];

const faq = [
  {
    question: 'Qu\'est-ce que la notation B/S dans le Jeu de la Vie ?',
    answer: 'La notation B/S liste les nombres de voisins qui creent une nouvelle cellule vivante et les nombres qui permettent a une cellule vivante existante de survivre. Le Jeu de la Vie de Conway est B3/S23: les cellules mortes naissent avec exactement trois voisins, et les cellules vivantes survivent avec deux ou trois voisins.',
  },
  {
    question: 'Pourquoi cet outil s\'appelle laboratoire de règles plutôt que simulateur ?',
    answer: 'La règle classique de Conway est incluse, mais le simulateur est conçu pour comparer des familles d\'automates cellulaires de type Life. Modifier les comptes de naissance et de survie change le comportement à long terme, produisant des réplicateurs, des vagues, des îles gelées, une croissance chaotique ou l\'extinction.',
  },
  {
    question: 'Que signifie la stabilité dans le simulateur ?',
    answer: 'La stabilité estime combien la colonie a changé lors de la dernière génération. Une stabilité élevée signifie peu de cellules nées ou mortes par rapport à la population ; une faible stabilité signifie que le plateau est turbulent ou se réorganise rapidement.',
  },
  {
    question: 'Le plateau a-t-il des bords ?',
    answer: 'La simulation utilise un enroulement toroidal: le bord gauche se connecte au bord droit et le haut se connecte au bas. Cela maintient les motifs se deplacant naturellement sans disparaitre aux bords.',
  },
  {
    question: 'Puis-je dessiner mon propre motif de départ ?',
    answer: 'Oui. Mettez la simulation en pause et cliquez ou tapez sur les cellules du plateau pour les basculer. Vous pouvez combiner des cellules dessinées à la main avec des motifs intégrés et lancer le résultat sous n\'importe quel préréglage de règle.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Grille d\'automates cellulaires de type Life',
    play: 'Lire',
    pause: 'Pause',
    step: 'Pas',
    clear: 'Toile vierge',
    randomize: 'Aléatoire',
    ruleLabel: 'Notation de règle',
    ruleHelp: 'Naissance / survie',
    speedLabel: 'Tempo',
    densityLabel: 'Densité initiale',
    patternLabel: 'Motif',
    placePattern: 'Placer le motif',
    generation: 'Génération',
    population: 'Population',
    density: 'Densité',
    stability: 'Stabilité',
    births: 'Naissances',
    deaths: 'Morts',
    achievementsLabel: 'Journal de laboratoire',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oscillation de période 2 détectée',
    achievementImmortal: 'Immortel',
    achievementImmortalDescription: 'Génération 500 atteinte avec stabilité totale',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Une graine aléatoire clairsemée a dépassé 1 000 cellules vivantes',
    presetClassic: 'Conway classique',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Jour et nuit',
    patternGlider: 'Planeur',
    patternGosper: 'Canon de Gosper',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Signal de colonie',
    statusFrozen: 'stable',
    statusGrowing: 'expansion',
    statusFading: 'déclin',
    statusChaotic: 'volatile',
    invalidRule: 'Utilisez une notation B/S comme B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Simulateur du Jeu de la Vie de Conway avec règles modifiables', level: 2 },
    { type: 'paragraph', html: 'Ce laboratoire de règles vous permet d\'exécuter l\'automate cellulaire classique et de modifier et comparer ses règles. Le plateau prend en charge le dessin direct, le placement de motifs, les graines aléatoires, l\'inspection pas à pas, le tempo variable et les mesures en direct pour la population, la densité, les naissances, les morts et la stabilité.' },
    { type: 'title', text: 'Comment les règles B/S changent le jeu', level: 3 },
    { type: 'paragraph', html: 'Les automates cellulaires de type Life sont souvent écrits en <strong>notation B/S</strong>. Le côté B définit combien de voisins vivants une cellule morte a besoin pour naître ; le côté S définit combien de voisins une cellule vivante a besoin pour survivre. La règle originale de Conway, <strong>B3/S23</strong>, est célèbre car elle se situe dans une région étroite entre extinction et croissance incontrôlée.' },
    { type: 'title', text: 'Lire les métriques en direct', level: 3 },
    { type: 'paragraph', html: 'La population et la densité montrent combien de cellules sont vivantes, mais elles ne racontent pas toute l\'histoire. Les naissances et les morts exposent le niveau d\'activité actuel, tandis que la stabilité estime si la colonie se stabilise dans un oscillateur, se fige dans des structures statiques ou reste turbulente.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
