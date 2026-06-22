import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulator-natuurlijke-selectie-genetische-drift';
const title = 'Simulator voor natuurlijke selectie en genetische drift';
const description =
  'Bekijk in realtime hoe selectiedruk, mutatie, drift en voortplanting allelfrequenties veranderen.';

const howTo = [
  { name: 'Populatie kiezen', text: 'Kies een kleine of grote populatie om het effect van steekproefgrootte te zien.' },
  { name: 'Selectie en drift instellen', text: 'Verhoog selectiedruk of drift om andere evolutiepaden te zien.' },
];

const faq = [
  { question: 'Wat is het verschil tussen natuurlijke selectie en genetische drift?', answer: 'Natuurlijke selectie is niet willekeurig. Gunstige eigenschappen worden vaker. Genetische drift is een willekeurige verandering van allelfrequenties.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populatiegrootte',
    generations: 'Generaties',
    mutationRate: 'Mutatiesnelheid',
    selectionPressure: 'Selectiedruk',
    driftIntensity: 'Driftintensiteit',
    alleleCount: 'Startallelen',
    innovationRate: 'Innovatiesnelheid',
    run: 'Simulatie starten',
    dominantTrait: 'Dominante eigenschap',
    fitness: 'Eindfitness',
    diversity: 'Genetische diversiteit',
    evolutionConsole: 'Evolutieconsole',
    populationLabel: 'Populatie',
    aliveLabel: 'levend',
    alleleCountsLabel: 'Aantal allelen',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Populatie',
  },
  seo: [
    { type: 'title', text: 'Natuurlijke selectie vs genetische drift: evolutie begrijpen met een levende populatie', level: 2 },
    { type: 'paragraph', html: 'Deze simulator helpt je om selectie en drift visueel en praktisch te begrijpen.' },
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
