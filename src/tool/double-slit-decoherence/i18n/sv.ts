import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dubbelspalt-dekoherens-simulator';
const title = 'Dubbelspaltexperiment och Dekoherens Simulator';
const description = 'Slå på och av vilken-väg-detektorer för att se kvantinterferens blekna till två partikelband i en visuell dubbelspaltsimulator.';

const howTo = [
  {
    name: 'Börja med detektorn avstängd',
    text: 'Lämna vilken-väg-detektorn inaktiverad och se hur skärmen bildar ljusa och mörka interferensfransar från koherenta sannolikhetsamplituder.',
  },
  {
    name: 'Öka detektorstyrkan',
    text: 'Höj detektorkontrollen för att introducera vilken-väg-information. När detektorn blir starkare minskar koherensen och fransarna försvinner.',
  },
  {
    name: 'Ändra spaltgeometrin',
    text: 'Justera spaltavstånd och spaltbredd för att se hur geometrin förändrar fransavståndet, enveloppbredden och den slutliga distributionen på skärmen.',
  },
  {
    name: 'Läs de levande mätvärdena',
    text: 'Använd fransynlighet, vilken-väg-information och koherens för att koppla det visuella mönstret till kvantmätningshistorien.',
  },
];

const faq = [
  {
    question: 'Varför ändras mönstret när detektorer slås på?',
    answer: 'En detektor som kan avslöja vilken spalt partikeln använde förstör fasrelationen mellan de två alternativen. Utan den koherensen interfererar de två sannolikhetsvägarna inte längre och skärmen närmar sig två breda partikelband.',
  },
  {
    question: 'Betyder denna simulator att medvetandet kollapsar vågfunktionen?',
    answer: 'Nej. Simulatorn fokuserar på fysisk vilken-väg-information och dekoherens. En detektor, miljön eller varje interaktion som gör skillnaden på vägen kan undertrycka interferens utan att kräva en medveten observatör.',
  },
  {
    question: 'Vad är fransynlighet?',
    answer: 'Fransynlighet jämför ljusa och mörka områden på skärmen. Hög synlighet innebär stark interferenskontrast. Låg synlighet innebär att de mörka luckorna har fyllts i och mönstret beter sig mer som två oberoende partikelströmmar.',
  },
  {
    question: 'Är detta en fullständig kvantmekaniklösare?',
    answer: 'Nej. Det är en pedagogisk modell som blandar ett dubbelspalts interferensenvelopp med en dekoherenskontroll. Den är byggd för att förklara mäteffekten visuellt, inte för att ersätta en Schrödingerekvationssimulering för en verklig apparat.',
  },
  {
    question: 'Varför påverkar spaltavståndet fransavståndet?',
    answer: 'Större avstånd skapar en snabbare fasskillnad över skärmen, så ljusa och mörka band kommer närmare varandra. Mindre avstånd sprider ut fransarna längre ifrån varandra.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Dubbelspaltapparat',
    controls: 'Dubbelspaltkontroller',
    results: 'Dubbelspaltresultat',
    kicker: 'Mätkontroll',
    detectorToggle: 'Aktivera vilken-väg-detektor',
    detectorStrength: 'Detektorstyrka',
    slitSeparation: 'Spaltavstånd',
    slitWidth: 'Spaltbredd',
    unobserved: 'Oobserverad',
    observed: 'Observerad',
    waveMode: 'Interferens',
    particleMode: 'Partikelband',
    fringeVisibility: 'Fransynlighet',
    whichPath: 'Vilken-väg-info',
    coherence: 'Koherens',
    readoutNote: 'Interferens överlever när båda vägarna förblir osärskiljbara. Mätning gör väginformation tillgänglig och skärmen förlorar sina mörka fransar.',
  },
  seo: [
    {
      type: 'title',
      text: 'Dubbelspaltexperiment: Simulator med dekoherens och vilken-väg-detektion',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna dubbelspalt-simulator förvandlar det klassiska kvantexperimentet till en interaktiv visuell modell. Med detektorn avstängd visar skärmen ett interferensmönster: ljusa och mörka band uppstår eftersom de två möjliga vägarna förblir koherenta. När en vilken-väg-detektor läggs till förvandlas mönstret gradvis till två breda partikelband eftersom vägalternativen blir särskiljbara.',
    },
    {
      type: 'title',
      text: 'Vad dubbelspaltexperimentet demonstrerar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Kontroll eller mätvärde', 'Vad den ändrar', 'Vad du ska titta efter'],
      rows: [
        ['Detektorstyrka', 'Tillgänglig vilken-väg-information', 'Högre värden minskar fransynligheten och förstärker partikelmönstret.'],
        ['Spaltavstånd', 'Avståndet mellan öppningarna', 'Större avstånd gör interferensbanden tätare på skärmen.'],
        ['Fransynlighet', 'Kontrast mellan ljusa och mörka skärmområden', 'Ett högt tal betyder att koherent interferens är synlig.'],
        ['Koherens', 'Fasrelation mellan vägarna', 'Koherensen sjunker när detektorn gör vägarna särskiljbara.'],
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
      description,
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
        text: step.text,
      })),
    },
  ],
};