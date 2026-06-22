const slug = 'lorenzattractor';
const title = 'Lorenz attractor Chaos Simulator Het Vlindereffect in 3D';
const description = 'Verken chaostheorie met deze interactieve 3D Lorenz-attractor simulatie. Visualiseer het vlindereffect.';

const howTo = [
  {
    "name": "Draai het canvas",
    "text": "Klik en sleep in de 3D-viewport om de attractor te roteren."
  },
  {
    "name": "Pas de sliders aan",
    "text": "Wijzig de Sigma, Rho en Beta parameters om de chaos te beinvloeden."
  },
  {
    "name": "Observeer de divergentie",
    "text": "Zie hoe de afstand tussen de twee banen exponentieel groeit."
  },
  {
    "name": "Pauzeer en reset",
    "text": "Gebruik de knoppen om de simulatie te pauzeren of te resetten."
  }
];

const faq = [
  {
    "question": "Wat is de Lorenz-attractor?",
    "answer": "De Lorenz-attractor is een verzameling chaotische oplossingen van het Lorenz-systeem."
  },
  {
    "question": "Wat is het Vlindereffect?",
    "answer": "De gevoelige afhankelijkheid van beginvoorwaarden in niet-lineaire systemen."
  },
  {
    "question": "Wat betekenen de parameters?",
    "answer": "Sigma is het Prandtl-getal, Rho het Rayleigh-getal en Beta de geometrische verhouding."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopieert",
  "noHistory": "Geen geschiedenis",
  "load": "Laden",
  "delete": "Verwijderen",
  "title": "Lorenz-attractor",
  "subTitle": "Deterministische Chaos",
  "parameterControls": "Systeemparameters",
  "simulationSpeed": "Snelheid (dt)",
  "initialPerturbation": "Initiele Verstoring (dx)",
  "trajectories": "Banen",
  "distance": "Divergentie-afstand",
  "exponentialGrowth": "Exponentiele Divergentie",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Coordinaten",
  "divergenceExplanation": "De divergentiegrafiek toont de Euclidische afstand tussen de twee banen over de tijd."
},
  seo: [
    { type: 'title', text: "Deterministisch Chaos: De Lorenz-vergelijkingen begrijpen", level: 2 },
    { type: 'paragraph', html: "Het Lorenz-systeem is een mijlpaal in de niet-lineaire dynamica en de chaostheorie. Oorspronkelijk afgeleid in 1963 door de meteoroloog en wiskundige <strong>Edward Lorenz</strong>, ontstond het model uit een vereenvoudigde weergave van atmosferische convectie. Lorenz vereenvoudigde de complexe vloeistofdynamica tot drie gekoppelde gewone differentiaalvergelijkingen. Zijn ontdekking dat deze eenvoudige, deterministische vergelijkingen hoogcomplex, niet-periodiek en chaotisch gedrag konden produceren, veranderde ons begrip van fysische systemen." },
    { type: 'paragraph', html: "Het systeem wordt gedefinieerd door drie gekoppelde differentiaalvergelijkingen die een coordinaat in de driedimensionale faseruimte in de tijd volgen:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Beschrijft de snelheid van convectieve beweging. De parameter &sigma; (Prandtl-getal) staat voor de verhouding van vloeistofviscositeit tot warmtegeleiding.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Stelt het temperatuurverschil voor tussen stijgende en dalende convectiestromen. &rho; (Rayleigh-getal) representeert de convectieve verwarmingsintensiteit.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Volgt de vervorming van het verticale temperatuurprofiel. &beta; is de geometrische aspectverhouding van de convectiecel.",
      ],
    },
    { type: 'title', text: "Het Vlindereffect: Gevoelige Afhankelijkheid van Beginwaarden", level: 3 },
    { type: 'paragraph', html: "De bepalende eigenschap van chaotische systemen is hun <strong>gevoelige afhankelijkheid van begincondities</strong>, populair bekend als het <strong>Vlindereffect</strong>. Dit simulatieprogramma illustreert dit door twee trajecten (T1 in cyaan en T2 in roze) gelijktijdig te laten lopen met een minimaal verschil. Aanvankelijk volgen ze vrijwel hetzelfde pad. Na korte tijd versterken de niet-lineaire termen het verschil en divergeren de paden volledig." },
    {
      type: 'table',
      headers: ["Parameter","Standaardwaarde","Fysische Context","Gedrag bij Wijziging"],
      rows: [
        ["&sigma; (Sigma)","10.0","Prandtl-getal","Bepaalt de interne wrijving van de vloeistof. Hogere waarden versnellen de reactie van snelheidsveranderingen op temperatuurgradienten."],
        ["&rho; (Rho)","28.0","Rayleigh-getal","Belangrijkste aandrijver van chaos. Onder &rho; = 1 is de oorsprong het enige stabiele punt. Bij &rho; = 28 is het systeem volledig chaotisch."],
        ["&beta; (Beta)","8/3 (2.667)","Geometrische Aspectverhouding","Beheert de breedte-hoogteverhouding van de convectiecellen. Wijzigt de schaal en rotatiesnelheid van de banen."],
      ],
    },
    { type: 'title', text: "Faseruimte, Vreemde Attractoren en Fractalen", level: 3 },
    { type: 'paragraph', html: "In de klassieke fysica stabiliseren trajecten in vaste punten of herhalen ze zich als limietcycli. Het Lorenz-systeem doet geen van beide: het pad kronkelt oneindig in drie dimensies zonder zichzelf ooit te kruisen, en vormt een <strong>vreemde aantrekker</strong> met een fractale geometrie (Hausdorff-dimensie circa 2,06)." },
    { type: 'title', text: "Toepassingen van de Chaostheorie in de Wetenschap", level: 3 },
    { type: 'paragraph', html: "De lessen van de Lorenz-aantrekker reiken veel verder dan weersvoorspelling en hebben veel moderne vakgebieden beinvloed:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologie:</strong> Stelde de fundamentele limieten van weersvoorspelbaarheid vast, wat leidde tot ensemble-voorspellingsmethoden.",
      "<strong>Cryptografie:</strong> De deterministische maar onvoorspelbare aard van chaotische banen wordt gebruikt om veilige pseudo-willekeurige sleutels te genereren.",
      "<strong>Cardiologie:</strong> Gebruikt om hartritmen te modelleren, waarbij gezonde harten chaotische kenmerken vertonen.",
      "<strong>Techniek:</strong> Helpt stabiele constructies te ontwerpen door chaotische resonantie in hangbruggen en mechanische systemen te analyseren en te vermijden.",
      ],
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
      description: description,
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
