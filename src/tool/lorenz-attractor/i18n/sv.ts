const slug = 'lorenzattraktor';
const title = 'Lorenz attraktor Kaossimulator Fjarilseffekten i 3D';
const description = 'Utforska kaosteori med denna interaktiva 3D Lorenz-attraktor-simulering. Visualisera fjarilseffekten.';

const howTo = [
  {
    "name": "Rotera vyn",
    "text": "Klicka och dra i 3D-visningen for att rotera attraktorn."
  },
  {
    "name": "Justera reglagen",
    "text": "Andra parametrarna Sigma, Rho and Beta for att se kaotiska skiften."
  },
  {
    "name": "Observera avvikelsen",
    "text": "Se hur avstandet mellan de tva banorna vaxer exponentiellt."
  },
  {
    "name": "Pausa och aterstall",
    "text": "Anvand knapparna for att pausa simuleringen eller aterstalla standardvarden."
  }
];

const faq = [
  {
    "question": "Vad ar Lorenz-attraktorn?",
    "answer": "Lorenz-attraktorn ar en uppsattning kaotiska losningar till Lorenz-systemet."
  },
  {
    "question": "Vad ar Fjarilseffekten?",
    "answer": "Det kansliga beroendet av startforhallanden i icke-lineara system."
  },
  {
    "question": "Vad betyder parametrarna?",
    "answer": "Sigma representerar Prandtl-talet, Rho Rayleigh-talet, och Beta ett geometriskt forhallande."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Kopierat",
  "noHistory": "Ingen historik",
  "load": "Ladda",
  "delete": "Ta bort",
  "title": "Lorenz-attraktor",
  "subTitle": "Deterministiskt Kaos",
  "parameterControls": "Systemparametrar",
  "simulationSpeed": "Hastighet (dt)",
  "initialPerturbation": "Initial Storning (dx)",
  "trajectories": "Banor",
  "distance": "Divergensavstand",
  "exponentialGrowth": "Exponentiell Divergens",
  "resetDefault": "Reset",
  "clearPath": "Clear",
  "play": "Resume",
  "pause": "Pause",
  "coords": "Koordinater",
  "divergenceExplanation": "Divergensgrafen visar det euklidiska avstandet mellan de tva banorna over tid."
},
  seo: [
    { type: 'title', text: "Deterministiskt Kaos: Forsta Lorenz-ekvationerna", level: 2 },
    { type: 'paragraph', html: "Lorenz-systemet ar en milstolpe inom icke-linjar dynamik och kaosteori. Det harrorde ursprungligen fran 1963 av meteorologen och matematikern <strong>Edward Lorenz</strong>, och modellen foddes ur en forenklad representation av atmosfarisk konvektion. Lorenz foresenklade de komplexa stromningsdynamikekvationerna till tre kopplade ordinara differentialekvationer. Hans upptackt att dessa enkla deterministiska ekvationer kunde producera komplext, icke-periodiskt och kaotiskt beteende forandrade var forstaelse av fysikaliska system." },
    { type: 'paragraph', html: "Systemet definieras av tre kopplade differentialekvationer som foljer en koordinat i det tredimensionella fasrummet over tid:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Beskriver hastigheten for det konvektiva rorelsemonstret. Parametern &sigma; (Prandtl-tal) representerar kvoten av vatskornas viskositet och varmeledningsformaga.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Representerar temperaturskillnaden mellan uppatstigande och nedgatende konvektionsstrommar. &rho; (Rayleigh-tal) representerar den konvektiva uppvarmningens intensitet.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Spar distorsionen av det vertikala temperaturprofilet. &beta; ar det geometriska aspektforhallandet for den konvektiva cellen.",
      ],
    },
    { type: 'title', text: "Fjariilseffekten: Kanslighet for Begynnelsevilkor", level: 3 },
    { type: 'paragraph', html: "Det definierande draget hos kaotiska system ar deras <strong>kanslighet for begynnelsevilkor</strong>, populart kand som <strong>Fjariilseffekten</strong>. Denna simulator demonstrerar detta genom att kora tva banor (T1 i cyan och T2 i rosa) med en minimal separation. Initialt foljer de nastan samma vag. Efter en kort tid forstarker de icke-linjara termerna skillnaden och banorna avviker fullstandigt." },
    {
      type: 'table',
      headers: ["Parameter","Standardvarde","Fysisk Kontext","Beteende vid Andring"],
      rows: [
        ["&sigma; (Sigma)","10.0","Prandtl-tal","Bestammer vatskornas inre friktion. Hogre varden paскоrar reaktionen av hastighetsforandringar i forhallande till temperaturgradienter."],
        ["&rho; (Rho)","28.0","Rayleigh-tal","Huvuddrivaren for kaos. Under &rho; = 1 ar ursprunget den enda stabila punkten. Vid &rho; = 28 ar systemet fullstandigt kaotiskt."],
        ["&beta; (Beta)","8/3 (2.667)","Geometriskt Aspektforhallande","Styr bredd-till-hojd-forhallandet for konvektionscellerna. Modifierar skalan och rotationshastigheten for banorna."],
      ],
    },
    { type: 'title', text: "Fasrum, Underfunderliga Attraktorer och Fraktaler", level: 3 },
    { type: 'paragraph', html: "I klassisk fysik stabiliseras banor i fasta punkter eller upprepas som gransscykler. Lorenz-systemet gor ingendera: banan slingrar sig oandligt i tre dimensioner utan att korsas, och bildar en <strong>underlig attraktor</strong> med fraktal geometri (Hausdorff-dimension ungefar 2,06)." },
    { type: 'title', text: "Tillämpningar av Kaosteorin inom Vetenskapen", level: 3 },
    { type: 'paragraph', html: "Lärdomarna från Lorenz-attraktorn sträcker sig långt bortom väderprognoser och har påverkat många moderna studieområden:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologi:</strong> Faststallde de grundlaggande gransserna for vaderforutsagbarhet, vilket ledde till ensembleprognoseringmetoder.",
      "<strong>Kryptografi:</strong> Den deterministiska men ooversattliga naturen hos kaotiska banor anvands for att generera sakra pseudo-slumptal.",
      "<strong>Kardiologi:</strong> Anvands for att modellera hjartritmer, dar friska hjartan uppvisar kaotiska egenskaper.",
      "<strong>Teknik:</strong> Hjalper till att utforma stabila konstruktioner genom att analysera och undvika kaotisk resonans i hangbroar.",
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
