import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulator-natuerliche-selektion-genetische-drift';
const title = 'Simulator fur naturliche Selektion und genetische Drift';
const description =
  'Beobachte in Echtzeit, wie Selektionsdruck, Mutation, Drift und Fortpflanzung die Allelfrequenzen verandern.';

const howTo = [
  { name: 'Population festlegen', text: 'Wahle eine kleine oder große Population, um den Einfluss der Stichprobe zu sehen.' },
  { name: 'Selektion und Drift einstellen', text: 'Erhohe den Selektionsdruck oder die Drift, um andere Evolutionsverlaufe zu sehen.' },
  { name: 'Generationen beobachten', text: 'Starte die Simulation und vergleiche dominantes Merkmal, Fitness und Vielfalt uber die Zeit.' },
  { name: 'Ergebnisse deuten', text: 'Nutze die Metriken, um zu verstehen, wann Anpassung gewinnt und wann Zufall dominiert.' },
];

const faq = [
  { question: 'Was ist der Unterschied zwischen naturlicher Selektion und genetischer Drift?', answer: 'Naturliche Selektion ist nicht zufallig. Vorteilhafte Merkmale werden haufiger. Genetische Drift ist eine zufallige Veranderung der Allelfrequenzen, besonders stark in kleinen Populationen.' },
  { question: 'Warum verandern sich kleine Populationen schneller?', answer: 'Bei wenigen Individuen hat Zufall einen großeren Einfluss auf die nachste Generation.' },
  { question: 'Kann Drift Selektion ubertreffen?', answer: 'Ja. Ein vorteilhaftes Merkmal kann durch Zufall verschwinden, wenn die Drift stark genug ist.' },
  { question: 'Was bedeutet Fitness in diesem Simulator?', answer: 'Fitness ist eine vereinfachte Kennzahl dafur, wie gut die Population an die Umgebung angepasst ist.' },
  { question: 'Warum ist die Populationsgroße so wichtig?', answer: 'Sie bestimmt, wie stark Zufall die Allelfrequenzen beeinflusst.' },
  { question: 'Wann sollte ich diesen Simulator benutzen?', answer: 'Wenn du die Intuition hinter Evolution verstehen willst, besonders den Unterschied zwischen Selektion und Drift.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug,
  title,
  description,
  ui: {
    population: 'Populationsgroße',
    generations: 'Generationen',
    mutationRate: 'Mutationsrate',
    selectionPressure: 'Selektionsdruck',
    driftIntensity: 'Driftintensitat',
    alleleCount: 'Startallele',
    innovationRate: 'Innovationsrate',
    run: 'Simulation starten',
    dominantTrait: 'Dominantes Merkmal',
    fitness: 'Endfitness',
    diversity: 'Genetische Vielfalt',
    evolutionConsole: 'Evolution-Konsole',
    populationLabel: 'Population',
    aliveLabel: 'lebend',
    alleleCountsLabel: 'Allelzahlen',
    alleleDefault: 'Allel 1',
    populationValueLabel: 'Population',
  },
  seo: [
    { type: 'title', text: 'Naturliche Selektion vs genetische Drift: Evolution mit einer lebenden Population verstehen', level: 2 },
    { type: 'paragraph', html: 'Wenn du naturliche Selektion vs genetische Drift verstehen willst, liefert dir dieser Simulator die fehlende visuelle Ebene.' },
    { type: 'title', text: 'Was die Regler bedeuten', level: 3 },
    { type: 'paragraph', html: 'Naturliche Selektion erhoht die Haufigkeit vorteilhafter Merkmale. Genetische Drift verandert Allelfrequenzen zufallig.' },
    { type: 'paragraph', html: 'Beide Krafte wirken gleichzeitig. In großen Populationen dominiert oft Selektion; in kleinen kann Zufall nutzliche Merkmale auslosen.' },
    { type: 'title', text: 'Wie man die Ergebnisse liest', level: 3 },
    { type: 'paragraph', html: 'Die Live-Metriken zeigen das dominante Allel, die genetische Vielfalt, die Endfitness und ob die Population wachst oder kollabiert.' },
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
