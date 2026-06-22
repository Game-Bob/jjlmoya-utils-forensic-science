import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulering-av-naturligt-urval-genetisk-drift';
const title = 'Simulering av naturligt urval och genetisk drift';
const description =
  'Se i realtid hur selektionstryck, mutation, genetisk drift och reproduktion ändrar allelfrekvenser.';

const faq = [
  {
    question: 'Vad är skillnaden mellan naturligt urval och genetisk drift?',
    answer: 'Naturligt urval är en icke-slumpmässig process där fördelaktiga egenskaper blir vanligare på grund av sin fitness. Genetisk drift är däremot en slumpmässig förändring av allelfrekvenser i en population, som inte beror på egenskaperas anpassningsvärde.'
  },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populationsstorlek',
    generations: 'Generationer',
    mutationRate: 'Mutationshastighet',
    selectionPressure: 'Selektionstryck',
    driftIntensity: 'Driftintensitet',
    alleleCount: 'Startalleler',
    innovationRate: 'Innovationshastighet',
    run: 'Starta simulering',
    dominantTrait: 'Dominerande egenskap',
    fitness: 'Slutlig fitness',
    diversity: 'Genetisk variation',
    evolutionConsole: 'Evolutionskonsol',
    populationLabel: 'Population',
    aliveLabel: 'levande',
    alleleCountsLabel: 'Allelräkning',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Population',
  },
  seo: [
    { type: 'title', text: 'Naturligt urval vs genetisk drift: förstå evolution med en levande population', level: 2 },
    { type: 'paragraph', html: 'Denna simulator hjälper dig att se skillnaden mellan selektion och drift på ett tydligt sätt genom levande visualisering.' },
  ],
  faq,
  bibliography,
  howTo: [],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: [] },
  ],
};