const slug = 'meteoritsimulator';
const description = 'Simulera asteroidnedslag med verklig fysik. Beräkna energi, krater, värmestrålning och chockvåg. Skulle du överleva Chicxulub?';
const title = 'Meteoritsimulator: Apokalypskalkylator';
const howTo = [
    {
      name: 'Välj projektilstorlek',
      text: 'Ange asteroidens diameter, från en liten 10-meters meteorit till en 10-kilometers planetdödare.',
    },
    {
      name: 'Konfigurera hastighet och vinkel',
      text: 'Justera hastigheten och ankomstvinkeln (45° är det statistiskt mest sannolika värdet).',
    },
    {
      name: 'Definiera asteroidens natur',
      text: 'Välj om asteroiden består av sten, järn eller is för att beräkna kraterdjupet korrekt.',
    },
    {
      name: 'Analysera överlevnadsdomen',
      text: 'Dra asteroiden till kartan och ange hur långt bort du är för att se effekterna av strålning, jordbävning och chockvåg.',
    },
  ];
const faq = [
    {
      question: 'Hur beräknas nedslagsenergin?',
      answer: 'Den primära energin är kinetisk: (1/2) * massa * hastighet². Vi använder realistiska densiteter (t.ex. 3000 kg/m³ för stenasteroider) och typiska hastigheter vid inträde i atmosfären (11 till 72 km/s). Den resulterande energin mäts i megaton TNT.',
    },
    {
      question: 'Vad är en termisk chockvåg?',
      answer: 'När asteroiden kommer in i atmosfären komprimerar den luften så våldsamt att det skapas ett eldklot som är tusen gånger ljusare än solen. Den resulterande värmestrålningen kan orsaka tredje gradens brännskador och sätta skogar i brand milar från nedslaget.',
    },
    {
      question: 'Varför skapar vissa asteroider inga kratrar?',
      answer: 'Mindre stenar (<50m) splittras och exploderar vanligtvis i atmosfären på grund av lufttrycket (Airburst), som hände i Tjeljabinsk. Energin frigörs som en kraftfull tryckchockvåg, men den träffar inte marken som en solid kropp.',
    },
    {
      question: 'Vad är den verkliga sannolikheten för ett nedslag?',
      answer: 'Små nedslag (som i Ryssland 2013) sker varje decennium. Katastrofala nedslag (Tunguska-stil) sker vartannat århundrade. En global utdöendehändelse som Chicxulub sker ungefär var 100 miljonte år.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopierad',
    noHistory: 'Ingen historik',
    load: 'Ladda',
    delete: 'Radera',
    activateGPS: 'Aktivera GPS',
    analysisLabel: 'Analys',
    dragToMap: 'DRA TILL KARTA',
    diameterLabel: 'Diameter',
    velocityLabel: 'Hastighet',
    typeLabel: 'Typ',
    historicalData: 'Historiska data',
    composition: 'Sammansättning',
    rock: 'Sten',
    iron: 'Järn',
    ice: 'Is',
    clearAll: 'Rensa allt',
    searching: 'Söker...',
    gpsActive: 'GPS aktiv',
    gpsError: 'GPS-fel',
    verdictSafe: 'SÄKER ZON',
    verdictSafeSub: 'Inga hot',
    verdictShock: 'CHOCKVÅG',
    verdictShockSub: 'Strukturella skador',
    verdictBurned: 'VÄRMESTRÅLNING',
    verdictBurnedSub: 'Extrem fara',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Direktträff',
    presetAerial: 'Luftexplosion',
    presetForest: 'Skog',
    presetComet: 'Komet',
    presetELE: 'E.L.E. (Massutdöende)',
  },
  seo: [
    {
      type: 'title',
      text: 'När himlen faller: Den kosmiska apokalypsens fysik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroider är inte bara rymdstenar. De är kosmiska kulor som färdas i 20 km/s, kapabla att frigöra mer energi än alla kärnvapen på planeten tillsammans. Denna simulator översätter abstrakt fysik till påtagliga mänskliga konsekvenser.',
    },
    {
      type: 'title',
      text: 'Domedagsekvationen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Allt börjar med kinetisk energi: <strong>E = ½mv²</strong>. En 100 meters asteroid som färdas i 20 km/s frigör ungefär 0,5 megaton TNT. Som jämförelse var Hiroshimabomben 0,015 megaton.',
    },
    {
      type: 'paragraph',
      html: 'Men storleken skalar exponentiellt. Ett objekt som är 10 gånger större har 1 000 gånger mer volym (och massa), vilket frigör energi motsvarande <strong>500 megaton</strong>. Chicxulub, dinosauriedödaren, frigjorde motsvarande <strong>100 miljoner megaton</strong>.',
    },
    {
      type: 'paragraph',
      html: 'En asteroid på 1 km som träffar jorden skulle frigöra mer energi än alla planetens kärnvapen om de detonerades samtidigt.',
    },
    {
      type: 'title',
      text: 'Förödelsens anatomi: Apokalypsens koncentriska lager',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kratern (Ground Zero):</strong> Kraterns diameter skalar med E^0.3. Ett nedslag på 1 megaton skapar en ~1 km stor krater. Allt inuti förångas omedelbart.',
        '<strong>Värmestrålning (Blixten):</strong> Eldklotet sänder ut intensiv infraröd strålning. Vid avstånd på E^0.41 km antänds kläder och huden får tredje gradens brännskador.',
        '<strong>Chockvåg (Hammaren):</strong> Övertrycksvågen färdas i supersonisk hastighet. Vid 1 psi krossas glas. Vid 5 psi kollapsar byggnader.',
        '<strong>Jordbävning (Det seismiska ekot):</strong> Nedslaget genererar globala seismiska vågor. Chicxulub orsakade en jordbävning med magnitud 11, vilket sprängde Richterskalan.',
      ],
    },
    {
      type: 'title',
      text: 'Historiska nedslag: Lärdomar från det förflutna',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Plats & År', 'Storlek', 'Energi', 'Effekter'],
      rows: [
        ['Tjeljabinsk, Ryssland (2013)', '20 meter', '500 kiloton', 'Chockvåg vid 100 km, 1 500 skadade, krossade fönster'],
        ['Tunguska, Sibirien (1908)', '50-60 meter', '10-15 megaton', 'Jämnade 2 000 km² skog med marken, 80 miljoner träd fällda'],
        ['Chicxulub, Mexikanska golfen (66 milj. år sedan)', '10 km', '100 miljoner megaton', 'Utdöende av 75 % av livet på jorden'],
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
        text: step.text,
      })),
    },
  ],
};


