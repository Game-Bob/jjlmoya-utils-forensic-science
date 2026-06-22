import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculateur-demi-vie-desintegration-radioactive';
const title = 'Calculateur de demi vie et de désintégration radioactive';
const description = 'Simulez la désintégration radioactive avec des isotopes réels, la formule de demi-vie, un champ atomique stochastique, la quantité restante et l\'activité relative.';

const howTo = [
  { name: 'Choisir un isotope', text: 'Commencez avec le carbone 14, l\'iode 131, l\'uranium 238, le technétium 99m ou le radon 222. Chaque preset charge une demi-vie réaliste et le contexte scientifique dans lequel il est couramment utilisé.' },
  { name: 'Régler la taille de l\'échantillon et le temps', text: 'Ajustez le nombre d\'atomes représentés et faites avancer le temps pour voir comment la fraction restante suit la loi exponentielle de la demi-vie.' },
  { name: 'Comparer le calcul exact et le hasard atomique', text: 'Utilisez le résultat déterministe comme valeur attendue, puis observez le champ atomique pour comprendre pourquoi les petits échantillons fluctuent autour de la courbe théorique.' },
  { name: 'Interpréter l\'activité', text: 'L\'activité diminue dans la même proportion que les noyaux non désintégrés. L\'indicateur montre donc le taux de rayonnement restant par rapport à l\'échantillon initial.' },
];

const faq = [
  { question: 'Que signifie demi-vie ?', answer: 'La demi-vie est le temps nécessaire pour que la moitié des noyaux instables d\'un échantillon se désintègrent en moyenne. Après une demi-vie, il reste 50 %, après deux il reste 25 %, et après trois il reste 12,5 %.' },
  { question: 'Pourquoi le champ atomique ne correspond-il pas toujours au pourcentage exact ?', answer: 'La désintégration radioactive est probabiliste. La formule donne la fraction attendue pour un très grand échantillon, tandis que le champ simule des atomes individuels avec des seuils aléatoires. Les petits échantillons montrent naturellement du bruit statistique.' },
  { question: 'L\'indicateur d\'activité correspond-il aux atomes restants ?', answer: 'Pour un isotope unique, l\'activité est proportionnelle au nombre de noyaux non désintégrés. S\'il reste 30 % des atomes, l\'activité instantanée est également d\'environ 30 % de l\'activité initiale.' },
  { question: 'Ce calculateur peut-il servir pour la datation au radiocarbone ?', answer: 'Oui, pour des calculs conceptuels. La datation au carbone 14 compare l\'activité restante avec celle d\'une matière vivante, mais une datation de laboratoire corrige aussi les courbes de calibration, la contamination et la préparation de l\'échantillon.' },
  { question: 'Chaque isotope se désintègre-t-il en un seul produit stable ?', answer: 'Pas toujours. Certains isotopes se désintègrent par chaînes avec plusieurs produits fils. Cet outil modélise la demi-vie de l\'isotope parent, la grandeur la plus utile pour estimer les noyaux parents restants et l\'activité.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotope',
    sampleAtoms: 'Atomes de l\'échantillon',
    elapsedTime: 'Temps écoulé',
    halfLife: 'Demi-vie',
    remaining: 'Restant',
    decayed: 'Désintégré',
    activity: 'Activité relative',
    timeUnit: 'Unité de temps',
    expectedCurve: 'Courbe attendue',
    atomField: 'Champ atomique',
    presetUse: 'Usage courant',
    oneHalfLife: '1 demi-vie',
    twoHalfLives: '2 demi-vies',
    fourHalfLives: '4 demi-vies',
    custom: 'Personnalisé',
    liveAtoms: 'Atomes actifs',
    decayedAtoms: 'Atomes désintégrés',
    resetSeed: 'Nouveau motif atomique',
  },
  seo: [
    { type: 'title', text: 'Calculateur de demi-vie radioactive: atomes restants, activité et exemples d\'isotopes', level: 2 },
    { type: 'paragraph', html: 'Utilisez ce calculateur de désintégration radioactive pour estimer la part restante d\'un isotope instable après une durée donnée. Il répond aux intentions de recherche les plus courantes: trouver la formule de demi-vie, l\'appliquer à des isotopes réels, comparer les noyaux parents restants aux noyaux désintégrés et comprendre pourquoi l\'activité baisse avec l\'âge de l\'échantillon.' },
    { type: 'title', text: 'Formule de désintégration radioactive utilisée', level: 3 },
    { type: 'paragraph', html: 'La formule est <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> est le nombre initial de noyaux parents, <strong>N(t)</strong> le nombre attendu après le temps <strong>t</strong>, et <strong>T1/2</strong> la demi-vie. Le rapport <strong>t / T1/2</strong> indique combien de demi-vies se sont écoulées.' },
    { type: 'table', headers: ['Temps écoulé', 'Facteur', 'Noyaux parents restants', 'Activité relative'], rows: [['0 demi-vie', '(1/2)^0', '100%', '100%'], ['1 demi-vie', '(1/2)^1', '50%', '50%'], ['2 demi-vies', '(1/2)^2', '25%', '25%'], ['3 demi-vies', '(1/2)^3', '12,5%', '12,5%'], ['5 demi-vies', '(1/2)^5', '3,125%', '3,125%'], ['10 demi-vies', '(1/2)^10', '0,098%', '0,098%']] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};