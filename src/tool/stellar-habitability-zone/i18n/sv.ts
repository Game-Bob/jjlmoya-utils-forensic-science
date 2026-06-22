import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'habitable-zon-simulator';
const description = 'Beräkna och visualisera den habitabla zonen (Guldlockszonen) runt olika typer av stjärnor med hjälp av stjärn- och planetkonfigurationer.';
const title = 'Stellär Habitable Zone Simulator: Hitta Guldlockszoner';

const howTo = [
  {
    name: 'Välj en stjärnförinställning',
    text: 'Välj en stjärntyp från blå jättar till röda dvärgar för att ladda fysiska standardegenskaper som massa, luminositet och temperatur.',
  },
  {
    name: 'Justera planetära parametrar',
    text: 'Ändra planetens omloppsavstånd (halva storaxeln), albedo och atmosfärens växthuseffekt med de interaktiva skjutreglagen.',
  },
  {
    name: 'Analysera omloppsbana och habitabilitet',
    text: 'Observera planetens omloppsbana runt stjärnan i realtid. Kontrollera om jämvikts- och yttemperaturerna tillåter flytande vatten.',
  },
];

const faq = [
  {
    question: 'Vad är den cirkumstellära habitabla zonen?',
    answer: 'Den cirkumstellära habitabla zonen (ofta kallad Guldlockszonen) är regionen runt en stjärna där planetens yttemperatur är tillräcklig för att upprätthålla flytande vatten under ett givet atmosfärstryck. Den definieras av konservativa och optimistiska gränser baserat på stjärnans luminositet och effektiva temperatur.',
  },
  {
    question: 'Hur påverkar stjärnans luminositet den habitabla zonen?',
    answer: 'Stjärnans luminositet bestämmer stjärnans totala energiproduktion. Hetare och mer massiva stjärnor (som O-, B- eller A-stjärnor) är extremt ljusstarka, vilket placerar deras habitabla zoner mycket längre bort. Svalare, mindre massiva stjärnor (som K- eller M-typ röda dvärgar) har låg luminositet, vilket flyttar deras habitabla zoner extremt nära stjärnan.',
  },
  {
    question: 'Vad är skillnaden mellan jämvikts- och yttemperatur?',
    answer: 'Jämviktstemperaturen är den teoretiska temperatur en planet skulle ha om man antar att den fungerar som en svartkropp som absorberar stjärnstrålning och strålar tillbaka den till rymden. Yttemperaturen inkluderar växthuseffekten från planetens atmosfär, som stänger in värme och värmer upp planeten ytterligare.',
  },
  {
    question: 'Varför är albedo viktigt för planetär habitabilitet?',
    answer: 'Albedo är måttet på planetens ytas reflektionsförmåga. Ett högre albedo (nära 1.0) innebär att planeten reflekterar mer av det infallande stjärnljuset, vilket kyler ner den. Ett lägre albedo betyder att mer strålning absorberas, vilket höjer dess totala temperatur.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Stellär Habitable Zone Simulator',
    starPresetsLabel: 'Spektralförinställningar',
    customStarHeader: 'Stellära Parametrar',
    starTemperature: 'Effektiv Temperatur (K)',
    starLuminosity: 'Luminositet (L/L⊙)',
    starMass: 'Massa (M/M⊙)',
    starRadius: 'Radie (R/R⊙)',
    planetHeader: 'Planetära Parametrar',
    planetDistance: 'Omloppsavstånd (AE)',
    planetAlbedo: 'Bondalbedo',
    greenhouseDelta: 'Växthusuppvärmning (K)',
    resultsHeader: 'Simuleringsresultat',
    stellarFluxResult: 'Mottagen Stellär Flux',
    eqTempResult: 'Jämviktstemperatur',
    surfTempResult: 'Beräknad Yttemperatur',
    orbitPeriodResult: 'Omloppstid',
    orbitVelocityResult: 'Banhastighet',
    hzLimitsHeader: 'Gränser för habitabel zon',
    innerLimit: 'Konservativ Inre Gräns',
    outerLimit: 'Konservativ Yttre Gräns',
    optInnerLimit: 'Optimistisk Inre Gräns',
    optOuterLimit: 'Optimistisk Yttre Gräns',
    orbitCanvasTitle: 'Interaktiv Banvisualisering',
    statusLabel: 'Habitabilitetsstatus',
    statusTooHot: 'FÖR VARMT (Vatten förångas)',
    statusHabitable: 'HABITABEL (Flytande vatten möjligt)',
    statusTooCold: 'FÖR KALLT (Vatten fryser)',
    statusExplanation: 'Baserat på konservativa gränser ligger denna planet inom den angivna habitabla zonens status.',
    unitsLabel: 'Enhetssystem',
    unitsScientific: 'Vetenskaplig',
    unitsImperial: 'Imperial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGI: Fysiken bakom stellära habitabla zoner',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sökandet efter liv utanför jorden börjar med att förstå de fysikaliska förhållanden som krävs för flytande vatten. Astrobiologer använder matematiska modeller för att kartlägga gränserna för habitabla zoner runt olika stjärntyper. Denna simulator använder Kopparapu et al. (2013) modeller för att uppskatta energiflödet som planeter tar emot och avgöra om de ligger i Guldlockszonen. Den habitabla zonen definieras som den region där en planet med jordmassa och en CO2-H2O-N2-atmosfär kan upprätthålla flytande vatten på sin yta.',
    },
    {
      type: 'title',
      text: 'Matematiska Formler och Atmosfärisk Fysik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gränserna för den habitabla zonen bestäms genom att beräkna det effektiva stellära flödet (Seff) som krävs för att utlösa skenande eller maximala växthusförhållanden. Ekvationen för Seff beror på stjärnans effektiva temperatur (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>där T* = Teff - 5780 K, och koefficienterna (a, b, c, d) är empiriskt härledda från 1D strålnings-konvektiva klimatmodeller. När Seff har beräknats ges omloppsavståndet d i astronomiska enheter (AE) av:<br><br>d = sqrt(L / Seff)<br><br>där L är stjärnans luminositet i förhållande till solen. Planetens jämviktstemperatur (Teq) beräknas under antagandet av en sfärisk svartkropp i termisk jämvikt:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>där R* är stjärnradien, A är planetens bondalbedo och S är det mottagna stellära flödet i enheter av jordens solkonstant.',
    },
    {
      type: 'title',
      text: 'Spektralklassificering och Habitabla Gränser',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stellära egenskaper varierar kraftigt mellan spektralklasser. Här är en sammanfattning av typiska egenskaper och gränser för den habitabla zonen (HZ):',
    },
    {
      type: 'table',
      headers: [
        'Spektralklass',
        'Temperatur (K)',
        'Luminositet (L/L⊙)',
        'HZ Inre Gräns (AE)',
        'HZ Yttre Gräns (AE)',
      ],
      rows: [
        ['Typ O Jätte', '40 000', '100 000', '300.0', '530.0'],
        ['Typ B Jätte', '20 000', '1 000', '30.1', '53.2'],
        ['Typ A Sirius', '8 500', '20.0', '4.2', '7.4'],
        ['Typ F Procyon', '6 500', '2.5', '1.5', '2.6'],
        ['Typ G Solen', '5 778', '1.0', '0.95', '1.67'],
        ['Typ K Dvärg', '4 500', '0.15', '0.37', '0.65'],
        ['Typ M Dvärg', '3 200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Spektralklassens inverkan på habitabilitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Varje spektralklass skapar en unik strålnings- och gravitationsmiljö för sina planeter:<br><br><strong>O- och B-typ stjärnor:</strong> Dessa massiva blå stjärnor avger intensiv ultraviolett (UV) strålning och har extremt korta livslängder (tiotals miljoner år). Flytande vatten skulle kunna existera på deras yttre världar, men livet skulle ha otillräcklig tid att utvecklas innan stjärnan exploderar i en supernova.<br><br><strong>A- och F-typ stjärnor:</strong> Dessa stjärnor är ljusstarkare och hetare än solen. Deras habitabla zoner är breda och ligger långt ut, vilket minimerar effekterna av bunden rotation. Höga nivåer av nära UV-strålning kan dock orsaka allvarliga skador på organiska molekyler utan ett skyddande ozonskikt.<br><br><strong>G-typ stjärnor (solliknande):</strong> Genom att tillhandahålla en stabil ljusstyrka under miljarder år utgör dessa stjärnor de primära målen för sökandet efter liv. Deras strålning matchar standardkraven för biokemi.<br><br><strong>K-typ stjärnor (orange dvärgar):</strong> Anses av många astrobiologer vara de "superhabitabla" värdarna. Orange dvärgar lever i tiotals miljarder år, avger mindre skadlig UV än G-typ stjärnor och är inte lika benägna till de allvarliga utbrott som förknippas med yngre M-dvärgar.<br><br><strong>M-typ stjärnor (röda dvärgar):</strong> De vanligaste stjärnorna i galaxen. Eftersom deras habitabla zoner ligger extremt nära (vanligtvis < 0,2 AE), är planeter benägna att drabbas av bunden rotation (ena sidan är permanent vänd mot stjärnan). Dessutom producerar aktiva M-dvärgar högenergetiska stjärnvindar och utbrott som kan slita bort planetära atmosfärer.',
    },
    {
      type: 'title',
      text: 'Kritiska Faktorer i Planetära Habitabla Miljöer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En planets fysiska miljö formas av flera variabler utöver bara avståndet från dess värdstjärna:',
    },
    {
      type: 'list',
      items: [
        '<strong>Atmosfärisk Växthuseffekt:</strong> Naturliga växthusgaser höjer yttemperaturen över svartkroppens jämviktsnivå. Terrestra planeter kräver kol-silikatcykler för att stabilisera atmosfärisk CO2 och reglera temperaturer över geologiska tidsskalor.',
        '<strong>Planetär Bondalbedo:</strong> Hög reflektionsförmåga (på grund av moln, inlandsisar eller sulfataerosoler) kyler planeten, medan lågt albedo (mörka jordar, vattenområden) fångar upp mer stjärnenergi.',
        '<strong>Magnetfält:</strong> En stark planetär magnetosfär skyddar atmosfären från stjärnvindar, vilket förhindrar icke-termisk atmosfärisk flykt och vattenförlust.',
        '<strong>Köldfällans Dynamik:</strong> Köldfällans effekt i den övre atmosfären förhindrar att vattenånga når höga höjder där stjärnans UV-strålning skulle dissociera den till väte och syre.',
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
