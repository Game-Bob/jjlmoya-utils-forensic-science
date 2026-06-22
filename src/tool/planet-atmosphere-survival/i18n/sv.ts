import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planet-atmosfar-overlevnad-kalkylator';
const title = 'Planetatmosfar Overlevnadskalkylator';
const description = 'Hur lange kan du overleva utan rymddrakt pa Mars, Venus, Titan, Jupiter eller Everest? Denna interaktiva kalkylator uppskattar oskyddad manniskas overlevnadstid baserat pa tryck, temperatur, syre, koldioxid, toxicitet och vindfaror.';

const howTo = [
  {
    name: 'Valj en destination for att ladda verkliga atmosfarsdata',
    text: 'Valj Mars, Venus, Titan, Jupiter eller forinstallningen for Everesttoppen for att omedelbart stalla in realistiska tryck-, temperatur-, gasblandnings- och vindvarden for den miljon.',
  },
  {
    name: 'Justera forhallanden for att utforska tippningspunkten',
    text: 'Flytta reglagen for tryck, temperatur, syre och koldioxid for att se vilken fara som blir dodlig forst. Sma forandringar kan helt forskjuta den begransande faktorn.',
  },
  {
    name: 'Las overlevnadsklockan och den svagaste lanken',
    text: 'Timern visar den uppskattade tiden innan allvarlig biologisk stress uppstar. Etiketten for begransande faktor berattar exakt vilken fara som ar det mest angelagna hotet just nu.',
  },
  {
    name: 'Jamfor faror visuellt pa riskkartan',
    text: 'De radiella ekrarna och tidslinjediagrammet visar hur tryck, varme, kyla, hypoxi, toxicitet och vind var och en bidrar till den totala risken over tid.',
  },
];

const faq = [
  {
    question: 'Kan en manniska overleva pa Mars utan rymddrakt?',
    answer: 'Nej. Mars har extremt lagt tryck (mindre an 1% av jordens), nastan inget andningsbart syre och en atmosfar som till storsta delen bestar av koldioxid. Medvetsloshet skulle intraffa inom sekunder och allvarlig skada inom nagra minuter utan tryck- och syrestod.',
  },
  {
    question: 'Varfor ar atmosfartrycket sa kritiskt for manniskans overlevnad?',
    answer: 'Under Armstrong-gransen (cirka 6,3 kPa) kan vatten koka vid kroppstemperatur. Lågt tryck forhindrar ocksa syre fran att komma in i blodomloppet aven om luften ar 100% syre. Det ar darfor tryck ar en av de snabbaste dodliga farorna.',
  },
  {
    question: 'Vilken planet har den mest overlevnadsbara atmosfaren?',
    answer: 'Bland destinationerna i solsystemet ar jorden pa hog hojd (Everest) den mest overlevnadsbara, men fortfarande farlig utan acklimatisering. Titan ar den minst fientliga av de andra alternativen eftersom dess tryck ar hanterbart, men det saknar syre och ar kryogent kallt. Ingen planet eller manne utover jorden har en andningsbar atmosfar.',
  },
  {
    question: 'Ar Venus varre pa grund av varme eller tryck?',
    answer: 'Bada ar extrema pa ytan. Venus har krossande tryck (92 ganger jordens) och en yttemperatur hetare an en koksugn. Dessa faror verkar tillsammans sa verktyget markerar bada som omedelbara dominerande hot.',
  },
  {
    question: 'Varför har Titan en langre overlevnadsuppskattning an Mars?',
    answer: 'Titan har en tat atmosfar, sa tryck i sig ar inget omedelbart problem. Overlevnadstiden begransas av extrem kyla (cirka -180°C) och den fullstandiga avsaknaden av syre. Mars misslyckas med tryck forst, Titan misslyckas med temperatur.',
  },
  {
    question: 'Vilka ar de viktigaste dodorsakerna i rymden utan drakt?',
    answer: 'De snabbaste dodarna ar vakuumexponering (tryckforlust som orsakar ebullism och hypoxi inom sekunder), foljt av extrem temperatur, toxisk gassammansattning och vinddriven varmeforlust. Kalkylatorn spårar alla sex farokategorier.',
  },
  {
    question: 'Ar detta verktyg lampligt for rymduppdragsplanering?',
    answer: 'Nej. Det ar en pedagogisk modell som anvander forenklade biologiska trosklar. Verklig dekompression, hypoxi, toxisk gas, termisk skada och riskanalys for uppdrag kraver expertmedicinsk och teknisk utvardering for sakerhet.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Atmosfarisk riskkarta',
    timeline: 'Biologisk risktdslinje',
    controls: 'Atmosfarkontroller',
    destination: 'Destination',
    pressure: 'Tryck',
    temperature: 'Temperatur',
    oxygen: 'Syre',
    co2: 'Koldioxid',
    limitingFactor: 'Begransande faktor',
    verdict: 'Dom',
    exposureSummary: 'Exponeringssammanfattning',
    atmosphericModel: 'Atmosfärisk exponeringsmodell',
    survivalEnvelope: 'överlevnadshölje',
    survival: 'Överlevnad',
    mode: 'Läge',
    metric: 'Metrisk',
    imperial: 'Imperial',
    unitSystem: 'Enhetssystem',
    vitalStress: 'vital stress',
    timeLabel: 'tid',
    estimatedSurvival: 'uppskattad överlevnad',
    hazardPressure: 'Tryck',
    hazardTemperature: 'Temperatur',
    hazardOxygen: 'Syre',
    hazardToxicity: 'Toxicitet',
    hazardWind: 'Vind',
    presetMars: 'Mars',
    presetVenus: 'Venus yta',
    presetTitan: 'Titan',
    presetJupiter: 'Jupiters molntäcke',
    presetEverest: 'Jorden, Everest topp',
    noteMars: 'Nästan vakuum, extrem kyla och nästan inget syre.',
    noteVenus: 'Krossande tryck och ugnsvärme dominerar omedelbart.',
    noteTitan: 'Tät kvävehaltig luft men dödlig kyla och inget syre.',
    noteJupiter: 'Väterik atmosfär, svår kyla och våldsamma vindar.',
    noteEverest: 'Överlevbart för tränade klättrare, men hypoxi och kyla är allvarliga.',
    verdictSeconds: 'Sekunder',
    verdictMinutes: 'Minuter',
    verdictHours: 'Timmar',
    verdictExtended: 'Risk för långvarig exponering',
  },
  seo: [
    {
      type: 'title',
      text: 'Planetatmosfar Overlevnadskalkylator: Hur Lange Kan Du Overleva Utan Rymddrakt pa Mars, Venus, Titan eller Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om du plotsligt exponerades for en annan planets atmosfar utan rymddrakt, hur lange skulle du overleva? Denna kalkylator uppskattar oskyddad manniskas overlevnadstid pa Mars, Venus, Titan, Jupiter och Everest genom att simulera sex faror: totaltryck, syretillgang, temperatur, koldioxidkoncentration, toxisk kemi och vindstress. Den besvarar de fragor som rymdentusiaster och studenter fragar oftast: vilken planet dodar dig snabbast, vilken fara ar det verkliga hotet och vad skulle du behova for att overleva.',
    },
    {
      type: 'paragraph',
      html: 'Resultatet ar en pedagogisk uppskattning, inte en siffra for uppdragsplanering. Den ar utformad for att hjalpa till att jamfora varfor olika varldar ar farliga pa mycket olika satt. Mars misslyckas med tryck och hypoxi inom sekunder. Venus kombinerar krossande tryck med ugnsvarme. Titan ar kryogen och har inget syre. Gasjattars molnskikt lagger till toxiska sammansattningar och overljudsvindar. Varje miljo lara nagot annorlunda om vad som gor jorden unikt beboelig.',
    },
    {
      type: 'title',
      text: 'Vilken Planet Har Den Mest Overlevnadsbara Atmosfaren?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bland destinationerna i denna kalkylator ar jordens hoghojdsmiljoer (som Everesttoppen) de mest overlevnadsbara, men fortfarande farliga utan forberedelse. Bland andra planeter har Titan det mest forlatande trycket men misslyckas med temperatur och syre. Ingen annan destination an jorden erbjuder for narvarande en andningsbar atmosfar. Kalkylatorn hjalper dig att exakt se varfor varje varld misslyckas och vilken fara som forst passerar den kritiska troskeln.',
    },
    {
      type: 'title',
      text: 'Hur Varje Fara Paverkar Kroppen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tryck (lågt):</strong> under 6,3 kPa kan kroppsvatskor koka (ebullism). Aven ovanfor det forhindrar lagt tryck syreupptagning. Detta ar den snabbaste dodaren i narmare vakuummiljoer.',
        '<strong>Tryck (hogt):</strong> extremt tryck komprimerar andningsgaser, okar risken for kvavenarkos och kan mekaniskt skada lungor och bihalor.',
        '<strong>Syrepartialtryck:</strong> andningsbart syre beror pa bade gasprocenten och totaltrycket. En tunn atmosfar kan ha 21% syre anda orsaka hypoxi.',
        '<strong>Temperatur (varme):</strong> over cirka 60°C borjar proteindenaturering och organsvikt snabbt. Venus yttemperatur overstiger 460°C.',
        '<strong>Temperatur (kyla):</strong> under fryspunkten intraffar frostskador och hypotermi. Vid kryogena temperaturer som Titans -180°C ar vavnadsfrysning nastan omedelbar.',
        '<strong>Koldioxidtoxicitet:</strong> CO2 over cirka 5% orsakar yrsel, huvudvark och medvetsloshet. Manga planetatmosf arer bestar mestadels av CO2.',
        '<strong>Tok-sisk kemi:</strong> svavelforeningar, ammoniak, metan och vate kan vara frtande, kvardrojande eller kemiskt farliga.',
        '<strong>Vind:</strong> hoga vindar paskyndar varmeforlust genom konvektion, orsakar vindkyla, blast skrot och kan fysiskt destabilisera en person.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Varfor Lågt Tryck Dodar Fore Nagot Annat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars har ett yttryck pa cirka 0,6 kPa, långt under Armstrong-gransen pa 6,3 kPa dar vatten kan koka vid kroppstemperatur. Oskyddad exponering skulle orsaka ebullism, snabb hypoxi och medvetloshet inom 15 sekunder. Aven om kylan (genomsnitt -60°C) och den koldioxidrika atmosfaren tas med i berakningen dominerar tryck och syrebrist tidslinjen. En funktionell tryckklades och syretillforsel ar det absoluta minimum for overlevnad pa Mars.',
    },
    {
      type: 'title',
      text: 'Venus: Extremt Tryck Och Varme Som Verkar Tillsammans',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Venus yta har ett tryck pa 92 jordatmosf arer (cirka 9,3 MPa, motsvarande 900 meter under vatten) och en yttemperatur pa 462°C. Atmosfaren bestar till 96% av koldioxid med moln av svavelsyra. Dessa faror verkar samtidigt snarare an sekventiellt: tryck krossar, varme tillagar och CO2 forgiftar. I denna kalkylator ar Venus den enda destinationen dar flera faror passerar den dodliga troskeln nastan samtidigt.',
    },
    {
      type: 'title',
      text: 'Titan: Det Vanligaste Trycket I Solsystemet Utanfor Jorden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturnus manne Titan ar ovanlig eftersom dess yttryck (cirka 147 kPa, eller 1,45 ganger jordens) faktiskt ar inom ett omrade som en manniska kan tolerera. Inget tryckdrakl skulle behovas for enbart den variabeln. Titan har dock i princip inget syre, en yttemperatur pa -179°C och en metan-kvavreatmosfar. Kalkylatorn visar tryck som hanterbart, men temperatur och syrebrist dominerar omedelbart. Titan ar en paminnelse om att overlevnad beror pa hela faroprofilen, inte bara en matning.',
    },
    {
      type: 'title',
      text: 'Hur Man Tollar Overlevnadstimern Och Riskkartan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Overlevnadstimern uppskattar intervallet innan allvarlig biologisk stress uppstar hos en oskyddad person. Etiketten for begransande faktor identifierar vilken fara som forst passerar den kritiska troskeln. De radiella faroekrarna visar den relativa allvarlighetsgraden for var och en av de sex overvakade farorna, och tidslinjediagrammet visar hur kombinerad risk ackumuleras under exponeringsfönstret. Dessa visuella verktyg hjalper dig att med ett ogonkast se varfor en viss miljo ar farlig och vilket skyddssystem som skulle betyda mest.',
    },
    {
      type: 'table',
      headers: ['Destination', 'Dodliga faror', 'Snabbaste hotet', 'Vad en drakt maste atgarda'],
      rows: [
        ['Mars', 'Narmare vakum, hypoxi, kyla, CO2', 'Tryck < Armstrong-grans', 'Tryckklades, syre, termisk isolering'],
        ['Venus yta', 'Krossande tryck, 462°C varme, CO2, svavelsyra', 'Tryck och varme samtidigt', 'Tung kylning, tryckskrov, andningsapparat'],
        ['Titan', 'Inget syre, -179°C kyla, metan', 'Temperatur och hypoxi', 'Syre tillforsel, extremt termiskt skydd'],
        ['Jupiter molnskikt', 'Inget syre, vaterik, kyla, hog vind', 'Hypoxi och brist pa andningsbar gas', 'Forseglat andningssystem, termisk kontroll'],
        ['Everesttoppen', 'Hypoxi, kyla, vind', 'Syrepartialtryck for lagt', 'Syremask, kallvadersutrustning, acklimatisering'],
      ],
    },
    {
      type: 'title',
      text: 'Vad Skulle Kravas For Att Overleva Utan Rymddrakt?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistiskt sett tillater ingen kand kropp i solsystemet forutom jorden oskyddad manniskas overlevnad i mer an nagra fa minuter, och de flesta dodar inom sekunder. Vardet av denna kalkylator ligger inte i att hitta en saker planet, utan i att forsta de specifika skalen till varfor varje miljo ar fientlig. Denna kunskap styr utbildning inom planetvetenskap, design av rymdhabitat, prioriteter for astronauttraning och sokandet efter potentiellt beboeliga exoplaneter dar en atmosfar faktiskt skulle kunna stodja liv.',
    },
    {
      type: 'list',
      items: [
        '<strong>Anvand den for larande:</strong> se hur forandring av en variabel, som att fordubbla trycket pa Mars, forandrar overlevnadsfönstret.',
        '<strong>Anvand den for jamforelse:</strong> jamfor varfor Titan ger mer tid an Venus trots att bada ar ooverlevnadsbara.',
        '<strong>Anvand den for diskussion:</strong> utforska vad en terraformad atmosfar skulle behova for att na andningsbara forhallanden.',
        '<strong>Anvand den inte for verkliga beslut:</strong> kalkylatorn anvander forenklade trosklar. Akutplanering kraver professionell flygmedicin.',
      ],
    },
    {
      type: 'title',
      text: 'Viktiga Begransningar Och Pedagogiskt Syfte',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verklig overlevnad beror pa individuell halsa, kladsel, anstrangningsniva, fuktighet, solstralning, dekompressionshistorik, andningsgasblandning, raddningstidpunkt och manga andra variabler. Planetara atmosfarsdata varierar ocksa med hojd, arstid och matkalla. Detta verktyg anvander forenklade biologiska trosklar och representativa miljodata for vetenskapsutbildning. Den ar utformad for att hjalpa studenter, larare, rymdentusiaster och vetenskapsforfattare att forsta planetar beboelighet, inte for att vaga verkliga rymdoperationer.',
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
