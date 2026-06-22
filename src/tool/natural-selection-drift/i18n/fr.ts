import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulateur-selection-naturelle-derive-genetique';
const title = 'Simulateur de selection naturelle et de derive genetique';
const description =
  'Observez en temps reel comment la pression de selection, la mutation, la derive et la reproduction modifient les frequences alleliques.';

const howTo = [
  {
    name: 'Definir la population',
    text: 'Choisissez une petite ou une grande population pour voir comment la taille de l echantillon change la stabilite evolutive.',
  },
  {
    name: 'Regler selection et derive',
    text: 'Augmentez la pression de selection pour favoriser un trait, ou augmentez la derive pour laisser le hasard prendre le dessus.',
  },
  {
    name: 'Observer les generations',
    text: 'Lancez la simulation et comparez trait dominant, fitness et diversite au fil du temps.',
  },
  {
    name: 'Interpreter les resultats',
    text: 'Utilisez les metriques finales pour comprendre quand l adaptation gagne et quand la fluctuation aleatoire domine.',
  },
];

const faq = [
  {
    question: 'Quelle est la difference entre selection naturelle et derive genetique ?',
    answer:
      'La selection naturelle est un processus non aleatoire ou les traits qui ameliorent la survie ou la reproduction deviennent plus frequents. La derive genetique est un changement aleatoire des frequences alleliques, surtout visible dans les petites populations.',
  },
  {
    question: 'Pourquoi les petites populations changent elles plus vite ?',
    answer:
      'Avec moins d individus, l echantillonnage aleatoire a un effet plus important. Les evenements fortuits deplacent donc plus fortement les frequences d une generation a l autre.',
  },
  {
    question: 'La derive peut elle depasser la selection ?',
    answer:
      'Oui. Si la derive est assez forte, un trait avantageux peut disparaitre par hasard, surtout lorsque la population est petite ou que la pression de selection est faible.',
  },
  {
    question: 'Que signifie fitness dans ce simulateur ?',
    answer:
      'Fitness est une note simplifiee qui represente a quel point la population est adaptee a l environnement choisi. C est une metrique pedagogique, pas une mesure de laboratoire.',
  },
  {
    question: 'Pourquoi la taille de la population est elle si importante ?',
    answer:
      'La taille de la population determine a quel point le tirage aleatoire affecte les frequences alleliques. Dans les grandes populations, la selection est plus visible car le bruit s annule. Dans les petites, le hasard peut dominer un trait utile.',
  },
  {
    question: 'Quand utiliser ce simulateur plutot qu une explication theorique ?',
    answer:
      'Utilisez le lorsque vous voulez comprendre l intuition de l evolution, surtout la difference entre une force directionnelle comme la selection et une force stochastique comme la derive.',
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Taille de la population',
    generations: 'Generations',
    mutationRate: 'Taux de mutation',
    selectionPressure: 'Pression de selection',
    driftIntensity: 'Intensite de derive',
    alleleCount: 'Alleles initiaux',
    innovationRate: 'Taux d innovation',
    run: 'Lancer la simulation',
    dominantTrait: 'Trait dominant',
    fitness: 'Fitness finale',
    diversity: 'Diversite genetique',
    evolutionConsole: 'Console evolutive',
    populationLabel: 'Population',
    aliveLabel: 'vivants',
    alleleCountsLabel: 'Comptage des alleles',
    alleleDefault: 'Allele 1',
    populationValueLabel: 'Population',
  },
  seo: [
    {
      type: 'title',
      text: 'Selection naturelle vs derive genetique: comprendre l evolution avec une population vivante',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Si vous essayez de comprendre selection naturelle vs derive genetique, ce simulateur apporte la couche visuelle qui manque souvent. Au lieu d une definition statique, vous voyez une population evoluer en temps reel pendant que la pression de selection, la mutation, la derive et la reproduction interagissent.',
    },
    {
      type: 'title',
      text: 'Ce que signifient les controles et pourquoi ils comptent',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'La selection naturelle est la partie non aleatoire de l evolution. Elle augmente la frequence des traits qui ameliorent la survie ou la reproduction. La derive genetique est la partie aleatoire. Elle modifie les frequences alleliques car tous les individus ne contribuent pas de la meme facon a la generation suivante.',
    },
    {
      type: 'paragraph',
      html:
        'L idee cle est que ces deux forces agissent en meme temps. La selection pousse la population dans une direction, alors que la derive peut l entrainer ailleurs. Dans les grandes populations, la selection domine souvent. Dans les petites, le hasard peut effacer un trait utile ou fixer un trait neutre.',
    },
    {
      type: 'title',
      text: 'Comment lire les resultats de la simulation',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Les metriques en direct vous aident a interpreter le systeme au fur et a mesure. Le trait dominant indique quel allele mene. La diversite genetique montre la variation restante. La fitness finale resume l adaptation de la population a l environnement choisi. Et les compteurs de vivants et de population indiquent si la lignee croît ou s effondre.',
    },
    {
      type: 'title',
      text: 'Pourquoi la taille de la population change l histoire',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pression de selection:</strong> a quel point l environnement recompense un trait par rapport a un autre et a quelle vitesse cet avantage se propage.',
        '<strong>Intensite de derive:</strong> combien de bruit aleatoire affecte la population a chaque generation.',
        '<strong>Taux de mutation:</strong> a quelle frequence une nouvelle variation entre dans le systeme.',
        '<strong>Nombre d alleles:</strong> combien d alleles explicites sont presents au depart et combien de variantes nouvelles peuvent apparaitre.',
        '<strong>Diversite genetique:</strong> pourquoi la variation est la matiere premiere de l evolution.',
      ],
    },
    {
      type: 'paragraph',
      html:
        'Le resultat est une facon rapide et utile de comprendre l evolution sans se limiter a des definitions abstraites. Si vous cherchez un simulateur qui explique la selection naturelle, la derive genetique, la mutation, la reproduction et pourquoi un meme point de depart peut mener a des resultats differents, cet outil est concu pour cela.',
    },
    {
      type: 'title',
      text: 'Exemples rapides a tester',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Objectif', 'A modifier', 'Ce que vous devriez voir'],
      rows: [
        [
          'Montrer la victoire de la selection',
          'Augmenter la pression de selection et reduire la derive',
          'Un allele doit dominer avec le temps et la diversite baissera plus lentement',
        ],
        [
          'Montrer le hasard qui prend le dessus',
          'Reduire la population et augmenter la derive',
          'Les frequences doivent osciller de facon imprevisible',
        ],
        [
          'Montrer de nouvelles mutations',
          'Augmenter mutation et innovation',
          'De nouveaux alleles apparaitront et le classement changera plus souvent',
        ],
      ],
    },
    {
      type: 'paragraph',
      html:
        'Cette combinaison de visuels en direct, de classement explicite des alleles et de metriques en temps reel rend le simulateur utile a la fois pour enseigner et pour expliquer les compromis evolutifs sans detour.',
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
      applicationCategory: 'EducationalApplication',
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
