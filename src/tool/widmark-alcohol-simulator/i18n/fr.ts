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
    question: 'Qu\'est-ce que la formule de Widmark et comment est-elle utilisée en médecine légale ?',
    answer: 'La formule de Widmark est un modèle mathématique développé par Erik M. P. Widmark en 1932. Elle estime la concentration d\'alcool dans le sang en fonction de la masse d\'alcool consommée, du poids corporel, d\'un facteur de distribution (r) et d\'une élimination linéaire au fil du temps. Les toxicologues légistes utilisent cette formule pour effectuer des calculs rétrogrades afin d\'estimer le taux d\'alcoolémie d\'un suspect au moment d\'un accident ou d\'une infraction.',
  },
  {
    key: 'faq-2',
    question: 'Comment la nourriture affecte-t-elle la courbe de taux d\'alcoolémie ?',
    answer: 'La nourriture dans l\'estomac ralentit la vidange gastrique, ce qui empêche l\'alcool de passer rapidement dans l\'intestin grêle, le site principal d\'absorption. Dans notre simulation, ce retard est modélisé en réduisant la constante de vitesse d\'absorption (ka), ce qui décale le pic d\'alcoolémie et réduit considérablement sa valeur maximale.',
  },
  {
    key: 'faq-3',
    question: 'Pourquoi l\'élimination de l\'alcool suit-elle une cinétique d\'ordre zéro ?',
    answer: 'La plupart des médicaments sont éliminés selon une cinétique de premier ordre (proportionnelle à la concentration). L\'alcool suit une cinétique d\'ordre zéro car l\'enzyme principale responsable de son métabolisme, l\'alcool déshydrogénase (ADH), est saturée à des concentrations très basses (environ 0,02 g/L). Ainsi, le foie métabolise l\'alcool à une vitesse maximale constante.',
  },
  {
    key: 'faq-4',
    question: 'Quels facteurs biologiques influencent le facteur de distribution r de Widmark ?',
    answer: 'Le facteur r représente le rapport entre l\'eau corporelle et le poids total. L\'éthanol étant hydrophile et lipophobe, il se dissout uniquement dans l\'eau. Comme le tissu musculaire contient beaucoup d\'eau et le tissu adipeux très peu, les personnes ayant une masse grasse plus élevée ou un état de déshydratation présentent un volume de distribution plus petit, ce qui augmente le taux d\'alcoolémie.',
  },
  {
    key: 'faq-5',
    question: 'Puis-je utiliser ce simulateur pour prouver légalement que je pouvais conduire ?',
    answer: 'Non. Ce simulateur est un outil éducatif. Dans la réalité, la génétique enzymatique, l\'état de santé du foie, les médicaments, la fatigue et les repas réels créent des variations majeures. Vous ne devez jamais vous fier à un modèle mathématique pour évaluer votre aptitude à conduire.',
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
      text: 'Toxicologie médico-légale et pharmacocinétique de l\'éthanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La compréhension de l\'<strong>absorption, de la distribution et de l\'élimination de l\'éthanol</strong> est essentielle en médecine légale et pour la reconstruction des accidents de la route. Lorsque de l\'alcool est consommé, il descend par l\'œsophage jusqu\'à l\'estomac, où une faible fraction est absorbée. Cependant, la majeure partie de l\'absorption s\'effectue dans le duodénum et l\'intestin grêle en raison de leur grande surface. La vitesse de vidange gastrique est le facteur limitant principal, ce qui explique pourquoi la présence de nourriture réduit et retarde le pic de la courbe de taux d\'alcoolémie.',
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur interactif implémente les équations classiques d\'Erik M. P. Widmark avec un modèle compartimental continu sur 12 heures. En ajustant le poids, le sexe et l\'hydratation, les utilisateurs visualisent l\'accumulation et le déclin linéaire de la concentration d\'alcool.',
    },
    {
      type: 'title',
      text: 'Dérivation mathématique de l\'équation de Widmark',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'équation fondamentale de Widmark calcule la concentration d\'alcool dans le sang en supposant une absorption instantanée: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Ici, <em>A</em> est la masse d\'éthanol pur en grammes, <em>W</em> est le poids corporel en kg, et <em>r</em> est le facteur de distribution (volume de distribution). La variable <em>&beta;</em> représente le taux d\'élimination par heure et <em>t</em> est le temps écoulé.',
    },
    {
      type: 'paragraph',
      html: 'Pour convertir le volume de boisson en grammes d\'alcool pur, on multiplie le volume en millilitres par le degré d\'alcool (ABV) et par la densité de l\'éthanol (0,8 g/ml). Par exemple, 330 ml de bière à 5% contient 13,2 g d\'éthanol. Cette masse est diluée dans l\'eau corporelle totale du sujet. Le simulateur adapte le facteur r selon le sexe (0,68 pour les hommes et 0,55 pour les femmes) et le niveau d\'hydratation.',
    },
    {
      type: 'title',
      text: 'Facteurs physiologiques influençant le volume de distribution',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le volume de distribution de l\'éthanol dépend de la composition corporelle. L\'éthanol est hydrophile et se répartit dans l\'eau corporelle. Les muscles contiennent environ 75% d\'eau, tandis que le tissu adipeux en contient très peu. Ainsi, un sujet musclé aura un facteur r plus grand et un pic d\'alcoolémie plus faible qu\'un sujet de même poids ayant plus de masse grasse. La déshydratation diminue l\'eau corporelle totale, ce qui rétrécit le volume de distribution et augmente le pic de concentration pour une même dose.',
    },
    {
      type: 'table',
      headers: ['Variable physiologique', 'Mécanisme biologique', 'Effet pharmacocinétique', 'Implications médico-légales'],
      rows: [
        ['Poids corporel', 'Détermine la masse totale du pool d\'eau corporelle.', 'Inversement proportionnel à la concentration maximale d\'alcool.', 'Établit la base de dilution pour les calculs rétrogrades.'],
        ['Sexe biologique', 'Influence le ratio muscle/graisse typique.', 'Le facteur r est plus bas chez les femmes (0,55), augmentant le pic.', 'Explique la susceptibilité physique accrue chez les femmes.'],
        ['Hydratation', 'Modifie le volume d\'eau libre dans le corps.', 'La déshydratation baisse r de 0,05, élevant la courbe.', 'Ajuste la tolérance mathématique selon l\'état physique.'],
        ['Contenu gastrique', 'La nourriture ralentit la vidange de l\'estomac.', 'Diminue la vitesse d\'absorption ka, aplatissant le pic.', 'Explique les taux bas après des repas copieux.'],
      ],
    },
    {
      type: 'title',
      text: 'Cinétique d\'élimination d\'ordre zéro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une fois dans le sang, l\'éthanol est métabolisé par le foie, principalement par l\'alcool déshydrogénase (ADH). Cette enzyme se sature à des taux très bas (0,02 g/L), ce qui produit une cinétique d\'élimination d\'ordre zéro: le foie élimine une quantité fixe d\'alcool par heure, quelle que soit la quantité ingérée. La vitesse d\'élimination moyenne acceptée est de 0,15 g/L par heure, ce qui engendre la décroissance linéaire caractéristique sur le graphique.',
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
