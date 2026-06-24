import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'kalkylator-alkoholkoncentration-widmark';
const title = 'Widmarks Promille Simulator';
const description = 'Simulera kroppens upptag, distribution och förbränning av alkohol med Widmarks formel.';

const howTo = [
  {
    name: 'Ställ in fysiska parametrar',
    text: 'Ange vikt, biologiskt kön samt vätskenivå. Dessa parametrar beräknar Widmark-faktorn (r) som anger fördelningsvolymen för alkohol i kroppen.',
  },
  {
    name: 'Välj magsäckens innehåll',
    text: 'Välj tom mage, lätt måltid eller full måltid. Detta justerar absorptionshastigheten (ka) för att simulera matens dämpande effekt på alkoholkurvan.',
  },
  {
    name: 'Lägg till drycker i tidslinjen',
    text: 'Lägg till drycker genom att specificera volym i milliliter, alkoholhalt (ABV) samt tidpunkten för konsumtionen relativt starttiden.',
  },
  {
    name: 'Analysera kurvan för promillehalt',
    text: 'Följ promillehalt (BAC) över 12 timmar. Jämför högsta värde, tid till maxpromille och tid till nykterhet mot körkortsgränser.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Vad är Widmarks formel och hur används den inom rättsmedicin?',
    answer: 'Widmarks formel är en matematisk modell framtagen av Erik M. P. Widmark år 1932. Den uppskattar blodalkoholkoncentrationen baserat på mängd ren alkohol, kroppsvikt, en fördelningsfaktor (r) samt linjär förbränning. Rättstoxikologer använder den för retroaktiva beräkningar efter olyckor.',
  },
  {
    key: 'faq-2',
    question: 'Hur påverkar mat i magen formen på alkoholkurvan?',
    answer: 'Mat i magen fördröjer magsäckstömningen till tunntarmen där det huvudsakliga alkoholupptaget sker. I simulationen minskas absorptionshastigheten (ka), vilket flyttar kurvans topp senare i tiden samt sänker det maximala promillevärdet markant.',
  },
  {
    key: 'faq-3',
    question: 'Varför sker alkoholens nedbrytning via nollte ordningens kinetik?',
    answer: 'De flesta substanser bryts ned via första ordningens kinetik. Alkohol följer nollte ordningens kinetik eftersom enzymet alkoholdehydrogenas (ADH) i levern mättas vid mycket låga promillenivåer (ca 0,02 g/L). Levern förbränner därför alkohol med en konstant maxhastighet.',
  },
  {
    key: 'faq-4',
    question: 'Vilka biologiska faktorer skapar variation i Widmarks r-faktor?',
    answer: 'R-faktorn motsvarar andelen kroppsvatten i förhållande till totalvikt. Eftersom alkohol är hydrofilt fördelar det sig bara i kroppsvatten. Muskler innehåller mycket vatten medan fettvävnad knappt har något. Dehydrering eller hög fettprocent ger lägre r-faktor och högre BAC.',
  },
  {
    key: 'faq-5',
    question: 'Kan jag använda denna simulator för att bevisa att jag är körklar?',
    answer: 'Absolut inte. Simulatorn är endast avsedd för utbildning. Individuell enzymgenetik, leverhälsa, mediciner och matintag ger stora variationer i praktiken. Förlita dig aldrig på en matematisk formel för att bedöma din körförmåga.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profil',
    weight: 'Vikt (kg)',
    sex: 'Biologiskt kön',
    male: 'Man',
    female: 'Kvinna',
    hydration: 'Vätskenivå',
    hydrationLow: 'Låg',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Hög',
    stomachState: 'Magsäckens innehåll',
    stomachEmpty: 'Tom (Snabb)',
    stomachLight: 'Lätt måltid (Medel)',
    stomachFull: 'Full måltid (Långsam)',
    drinksTimeline: 'Konsumtionsförlopp',
    addDrink: 'Lägg till dryck',
    drinkVolume: 'Volym (ml)',
    drinkAbv: 'Alkoholhalt (% vol)',
    drinkTime: 'Tid (Timme)',
    drinksList: 'Konsumerade drycker',
    remove: 'Ta bort',
    beer: 'Öl (330ml, 5%)',
    wine: 'Vin (150ml, 12%)',
    spirits: 'Sprit (40ml, 40%)',
    peakBac: 'Högsta BAC',
    timeToSober: 'Tid till nykter',
    sober: 'Nykter',
    currentBac: 'Aktuell BAC',
    drivingLimitAlert: 'Körstatus',
    safeLimit: 'Under gränsen',
    warningLimit: 'Varningsgräns överskriden',
    dangerLimit: 'Farogräns överskriden',
    graphTitle: 'Blodalkoholkoncentration under 12 timmar',
    timeAxisLabel: 'Tid (Timmar)',
    bacAxisLabel: 'Promille (g/L)',
    legalLimitText: 'Lagstadgad gräns',
    noDrinksText: 'Lägg till drycker för att simulera.',
    hours: 'timmar',
    soberStatus: 'Nykter om {time} tim.',
    neverSober: 'Överstiger 12t',
    noteDisclaimer: 'Endast för utbildningsändamål. Kör aldrig alkoholpåverkad.',
    noteWidmark: 'Baserad på Widmarks ekvation och linjär leverförbränning.',
  },
  seo: [
    {
      type: 'title',
      text: 'Rättstoxikologi och Etylalkoholens Farmakokinetik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Förståelse för <strong>upptag, fördelning och förbränning av etanol</strong> är ett grundkrav inom rättsmedicin och trafikolycksrekonstruktion. Efter konsumtion förs alkohol via matstrupen till magsäcken där en liten andel tas upp direkt. Huvuddelen av upptaget sker dock i tunntarmen på grund av dess mycket stora yta. Magsäckstömningens hastighet är den begränsande faktorn vilket förklarar varför mat i magen dämpar promillekurvan avsevärt.',
    },
    {
      type: 'paragraph',
      html: 'Denna interaktiva simulator implementerar Erik M. P. Widmarks klassiska formler kombinerat med en kontinuerlig kompartmentmodell över 12 timmar. Genom att ställa in profilparametrar kan användaren följa ackumulation och linjär förbränning.',
    },
    {
      type: 'title',
      text: 'Matematisk härledning av Widmarks formel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Widmarks ekvation beräknar den teoretiska promillehalten vid direkt upptag: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Här är <em>A</em> alkoholmängd i gram, <em>W</em> kroppsvikt i kg och <em>r</em> Widmarks fördelningsfaktor. Parametern <em>&beta;</em> anger förbränningstakten per timme och <em>t</em> är tiden sedan upptaget startade.',
    },
    {
      type: 'paragraph',
      html: 'Dryckesvolym omvandlas till ren alkohol i gram genom att multiplicera volym (ml) med alkoholhalt (ABV) samt etanolens densitet (0,8 g/ml). En 330 ml öl på 5% innehåller 13,2 g alkohol. Detta fördelas i kroppsvattnet. Simulatorn justerar r-faktorn baserat på biologiskt kön (0,68 för män, 0,55 för kvinnor) samt hydratation.',
    },
    {
      type: 'title',
      text: 'Fysiologiska variabler och fördelningsvolym',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Etanolens fördelningsvolym styrs av kroppssammansättningen. Alkohol är hydrofilt och fördelar sig enbart i kroppsvatten. Muskler består till ca 75% av vatten medan fettvävnad saknar vatten. En muskulös person har en högre r-faktor och får därmed lägre maxpromille än en person med mer fettvävnad vid samma vikt. Dehydrering minskar kroppsvattnet och höjer maxpromillen.',
    },
    {
      type: 'table',
      headers: ['Fysiologisk variabel', 'Biologisk mekanism', 'Farmakokinetisk effekt', 'Rättsmedicinsk betydelse'],
      rows: [
        ['Kroppsvikt', 'Bestämmer totala volymen kroppsvatten.', 'Omvänt proportionell mot högsta promille BAC.', 'Utgör basen för rättsmedicinska efterkalkyler.'],
        ['Biologiskt kön', 'Styr den normala fördelningen av muskler och fett.', 'Faktorn r är lägre hos kvinnor (0,55) än män (0,68).', 'Förklarar biologiskt högre känslighet hos kvinnor.'],
        ['Vätskenivå', 'Ändrar tillgängligt fritt vatten i vävnaderna.', 'Dehydrering sänker r med 0,05 vilket höjer kurvan.', 'Används för att korrigera beräkning vid ansträngning.'],
        ['Magsäckens status', 'Mat fördröjer tömning till tunntarmen.', 'Minskar absorptionskonstanten ka och plattar till toppen.', 'Förklarar låg promille trots hög konsumtion efter mat.'],
      ],
    },
    {
      type: 'title',
      text: 'Nedbrytningstakt: Nollte ordningens kinetik i levern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Efter att alkoholen nått blodet bryts den ner i levern av enzymet alkoholdehydrogenase (ADH). Detta enzym mättas vid mycket låga nivåer (0,02 g/L) vilket ger nollte ordningens kinetik. Det innebär att levern förbränner en fast mängd alkohol per timme oavsett berusningsgrad. Det standardiserade medelvärdet (&beta;<sub>60</sub>) är 0,15 g/L per timme vilket ger den linjära minskningen på grafen.',
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
