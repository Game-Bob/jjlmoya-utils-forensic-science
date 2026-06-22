import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'epidemi-sir-simulator';
const title = 'Epidemi SIR simulator';
const description = 'Utforska smittspridning med en interaktiv SIR-modell som justerar R0, dödlighet, vaccination, smittsam period, toppbelastning och transmissionskurvor i realtid.';

const howTo = [
  {
    name: 'Stall in reproduktionstalet',
    text: 'Flytta R0-reglaget för att visa hur manga sekundara infektioner en smittsam person skulle orsaka i en helt mottaglig population.',
  },
  {
    name: 'Lagg till vaccination och vaccinverkningsgrad',
    text: 'Oka vaccinationstackningen eller verkningsgraden för att ta bort skyddade personer från den mottagliga poolen och sanka det effektiva reproduktionstalet.',
  },
  {
    name: 'Justera dödlighet och smittsam period',
    text: 'Andra dodlighetsprocenten och antalet smittsamma dagar för att se hur allvarliga utfall och kurvans tidsforlopp paverkas.',
  },
  {
    name: 'Las av SIR-kurvorna',
    text: 'Anvand diagrammet och daginspektoren för att jamfora kurvor för mottagliga, smittade, aterhamtade och beraknade dödsfall under det simulerade utbrottet.',
  },
];

const faq = [
  {
    question: 'Vad visar en SIR-modell?',
    answer: 'En SIR-modell delar upp en population i mottagliga, smittade och aterhamtade grupper. Den uppskattar hur manniskor forflyttar sig mellan dessa grupper över tid nar smittspridning och aterhamtning sker.',
  },
  {
    question: 'Hur forandrar vaccination kurvan?',
    answer: 'Vaccination minskar den mottagliga populationen nar den forhindrar infektion. I denna simulator sanker effektiv vaccination det effektiva reproduktionstalet och kan minska eller fordroja smitt-toppen.',
  },
  {
    question: 'Ar R0 samma sak som Re?',
    answer: 'Nej. R0 beskriver smittspridning i en helt mottaglig population. Re ar det effektiva reproduktionstalet efter att immunitet, vaccination eller beteendeforandringar har minskat antalet personer som kan smittas.',
  },
  {
    question: 'Varfor nar den smittade kurvan en topp och faller sedan?',
    answer: 'Den smittade kurvan faller nar varje smittsam person genererar farre nya infektioner an antalet personer som lamnar den smittade gruppen genom aterhamtning eller död. Minskad mottaglighet ar den framsta drivkraften i en grundläggande SIR-modell.',
  },
  {
    question: 'Kan detta forutsaga ett verkligt epidemiforlopp?',
    answer: 'Det ar ett utbildnings- och scenariosverktyg, inte en prognos. Verkliga utbrott kraver åldersstruktur, kontaktnatverk, geografi, rapporteringsforseningar, forandrat beteende, varianter, avtagande immunitet och kalibrerade data.',
  },
  {
    question: 'Vad ar skillnaden mellan attackrate och topp smittade?',
    answer: 'Attackrate mater den totala andelen av befolkningen som nagonsin smittas under utbrottet. Topp smittade mater det maximala antalet samtidigt smittsamma personer vid en given tidpunkt. En lag topp garanterar inte en lag attackrate och vice versa.',
  },
  {
    question: 'Vad innebar Re under 1 visuellt?',
    answer: 'Nar Re faller under 1 genererar varje smittsam person i genomsnitt farre an en ny infektion. I diagrammet stiger den smittade kurvan aldrig brant och kan minska omedelbart från startfrot, vilket betyder att utbrottet inte kan upprathalla sig sjalvt.',
  },
  {
    question: 'Hur paverkar den smittsamma perioden utbrottet?',
    answer: 'En längre smittsam period forlanger tiden under vilken varje smittad person kan överföra patogenen. Detta stracker utbrottets tidslinje, fordrojer toppen och kan för samma R0 ge en bredare kurva med lagre topphojd.',
  },
  {
    question: 'Varfor paverkar inte dödligheten den smittade kurvan?',
    answer: 'I denna SIR-modell paverkar dödlighet endast dodsantalet som forgrenas från den aterhamtade gruppen. Det aterkopplas inte till smittspridning eftersom dodsfal och aterhamtning båda tar bort personer från den smittsamma poolen i samma takt.',
  },
  {
    question: 'Vad ar troskeln för flockimmunitet?',
    answer: 'Troskeln för flockimmunitet ar den andel av befolkningen som maste vara immun för att Re ska falla under 1. Den approximeras som 1 - 1/R0. För massling med R0 runt 12 ar troskeln över 91%. För sasongsinfluensa med R0 runt 1,3 ar troskeln nara 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Live epidemiscenario',
    curveChart: 'SIR-transmissionskurvor',
    inspectDay: 'Inspektera simuleringsdag',
    legend: 'Kurvforklaring',
    susceptible: 'Mottagliga',
    infected: 'Smittade',
    recovered: 'Aterhamtade eller immuna',
    deaths: 'Dodsfal',
    controls: 'Epidemikontroller',
    modelName: 'Fackmodell',
    peakInfected: 'Topp smittade',
    peakDay: 'Toppdag',
    attackRate: 'Attackrate',
    estimatedDeaths: 'Beraknade dodsfal',
    r0: 'Grundlaggande reproduktionstal R0',
    lethality: 'Dodlighet',
    vaccination: 'Vaccinationstackning',
    vaccineEffectiveness: 'Vaccinverkningsgrad',
    infectiousDays: 'Smittsam period',
    initialInfected: 'Initialt smittade',
    dayLabel: 'Dag',
    daysUnit: 'dagar',
    infectiousLabel: 'smittsamma',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Epidemi SIR-simulator för R0, vaccination, dödlighet och transmissionskurvor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna epidemi SIR-simulator later dig utforska hur en patogen sprids genom en population nar mottagliga personer smittas och sedan lamnar den smittsamma gruppen genom aterhamtning eller död. Den ar utformad för studenter, vetenskapskommunikatorer, folkhalsointresserade och alla som vill ha en snabb visuell forklaring till varfor sma förändringar i smittspridning eller immunitet kan omforma ett utbrott.',
    },
    {
      type: 'paragraph',
      html: 'De interaktiva reglagen fokuserar pa de variabler man oftast vill testa: <strong>R0</strong>, dödlighet, vaccinationstackning, vaccinverkningsgrad, smittsam period och initial andel smittade. Diagrammet uppdateras omedelbart sa att kurvorna för mottagliga, smittade, aterhamtade, immuna och dodsfal kan jamforas som ett sammanhangande epidemisystem.',
    },
    {
      type: 'title',
      text: 'Hur SIR-modellen fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En grundläggande SIR-modell delar upp populationen i tre huvudfack. <strong>S</strong> ar mottagliga personer som fortfarande kan smittas. <strong>I</strong> ar för narvarande smittsamma personer som kan överföra patogenen. <strong>R</strong> ar personer som inte längre ar smittsamma eftersom de har aterhamtat sig, fatt immunitet eller annars lamnat transmissionskedjan. Denna simulator sparar aven beraknade dodsfal som en allvarlig utfallsgren från den grupp som lamnar infektion.',
    },
    {
      type: 'paragraph',
      html: 'Transmissionshastigheten ar kopplad till R0 och den smittsamma perioden. Om R0 ar hogt eller personer forblir smittsamma under längre tid genereras fler nya infektioner innan den smittade gruppen krymper. Om vaccination tar bort tillrackligt manga personer från den mottagliga poolen sjunker det effektiva reproduktionstalet och utbrottstoppen kan bli mycket mindre.',
    },
    {
      type: 'table',
      headers: ['Reglage', 'Vad det andra', 'Typisk kurveffekt'],
      rows: [
        ['R0', 'Transmissionspotential innan immunitet beaktas', 'Hogre R0 far den smittade kurvan att stiga snabbare och na en högre topp.'],
        ['Vaccinationstackning', 'Andel personer som flyttas ur den mottagliga poolen nar de skyddas', 'Hogre tackning sanker Re och kan plana ut utbrottet.'],
        ['Vaccinverkningsgrad', 'Hur mycket vaccination forhindrar infektion i denna forenklade modell', 'Hogre verkningsgrad gör samma tackning mer skyddande.'],
        ['Smittsam period', 'Genomsnittlig tid som personer forblir smittsamma', 'Langre infektion ändrar tidsforloppet och kan förlänga utbrottet.'],
        ['Dodlighet', 'Andel personer som lamnar infektion och raknas som dodsfal', 'Hogre dödlighet hojjer dodskurvan utan att direkt öka smittspridningen.'],
      ],
    },
    {
      type: 'title',
      text: 'R0, Re och intuition för flockimmunitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 ar det genomsnittliga antalet sekundara fall som orsakas av en smittsam person i en helt mottaglig population. Re, det effektiva reproduktionstalet, ar lagre nar vissa personer redan ar immuna, vaccinerade, isolerade eller pa annat satt inte tillgangliga för infektion. I denna simulator minskar effektiv vaccination direkt mottagligheten, sa det visade Re sjunker nar det skyddade andelen o kar.',
    },
    {
      type: 'paragraph',
      html: 'En vanlig approximation för flockimmunitet ar <strong>1 - 1 / R0</strong>. För ett R0 pa 3 ar troskeln cirka 66,7% effektiv immunitet. Simulatorn hjälper till att göra denna troskel konkret: nar effektiv vaccination ligger under troskeln kan utbrott fortfarande vaxa; nar den ar över troskeln har smittspridning svarigt att upprathalla sig sjalv.',
    },
    {
      type: 'title',
      text: 'Vad toppen för smittade innebar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Topp smittade ar det maximala antalet personer som ar samtidigt smittsamma i den simulerade populationen. Det ar ofta viktigare ur operativ synpunkt an totala infektioner eftersom sjukhus, laboratorier, isoleringsprogram och smittspaningsteam upplever tryck från samtidiga aktiva fall. Att sanka toppen kan vara avgörande aven om den slutliga attackrate inte reduceras till noll.',
    },
    {
      type: 'paragraph',
      html: 'Attackrate uppskattar andelen av hela befolkningen som smittas under hela forloppet. En hög attackrate innebar att patogenen nadde manga manniskor innan mottagligheten var uttommad eller kontrollerad. En lag attackrate innebar att immunitet, vaccination eller svag smittspridning forhindrade omfattande spridning.',
    },
    {
      type: 'title',
      text: 'Verkliga R0-varden och vad de innebar för flockimmunitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det grundläggande reproduktionstalet R0 ar inte en fast biologisk konstant för en patogen. Det beror pa kontaktmonster, befolkningstathet, kulturella vanor och miljofaktorer. Samma virus kan ha olika R0-varden i en tat stad jamfort med ett landsbygdsomrade, eller under en arstid med mer inomhuskontakt. Vardena nedan ar illustrativa referensintervall från publicerade studier.',
    },
    {
      type: 'table',
      headers: ['Patogen', 'Typiskt R0-intervall', 'Flockimmunitetstrskel (1 - 1/R0)', 'Viktigaste overforingsegenskap'],
      rows: [
        ['Sasongsinfluensa', '1,2 - 1,4', '17% - 29%', 'Kort smittsam period, sasongsvariation'],
        ['SARS-CoV-2 (urfaderlig)', '2,0 - 3,0', '50% - 67%', 'Presymptomatisk smittspridning, aerosolvagar'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Okad virusmangd, snabbare spridning'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87% - 92%', 'Immunundandragande, ovre luftvagstropism'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Fekal-oral vag, lång asymtomatisk utsondring'],
        ['Smittkoppor', '5,0 - 7,0', '80% - 86%', 'Uttotad genom global vaccinationskampanj'],
        ['Massling', '12,0 - 18,0', '92% - 94%', 'Extremt smittsam, luftburen, lång smittsam period'],
        ['Kikhosta', '12,0 - 17,0', '92% - 94%', 'Avtagande immunitet mojliggor aterkommande infektioner'],
      ],
    },
    {
      type: 'paragraph',
      html: 'En hög flockimmunitetstrskel innebar inte automatiskt att vaccination ar meningslost nar tackningen ligger under troskeln. Aven partiell immunitet saktar ner smittspridningen, sanker toppen, minskar allvarliga utfall och koper tid för halso- och sjukvarden. Simulatorn visar denna effekt nar du flyttar vaccinationsreglaget genom mellanliggande varden.',
    },
    {
      type: 'title',
      text: 'Hur det effektiva reproduktionstalet Re förändras under ett utbrott',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re ar det effektiva reproduktionstalet vid en given tidpunkt under utbrottet. Till skillnad från R0, som forutsatter en helt mottaglig population, tar Re hansyn till immunitet, vaccination och andra faktorer som minskar mottagligheten. I denna simulator beräknas Re som <strong>R0 x (1 - skyddad andel)</strong>, dar den skyddade andelen ar den del av befolkningen som ar effektivt immun genom vaccination.',
    },
    {
      type: 'paragraph',
      html: 'Re-vardet som visas i simulatorns rubrik uppdateras nar du flyttar reglagen. Nar Re ligger över 1 vaxer utbrottet. Nar det faller under 1 genererar varje smittad person i genomsnitt farre an en ny infektion, och epidemin kan inte upprathalla sig sjalv. Detta ar karninsikten bakom epidemikontroll: att fa och hålla Re under 1 genom immunitet, beteende eller interventioner.',
    },
    {
      type: 'title',
      text: 'Attackrate, toppbelastning och vad de avslojar om utbrottets allvarlighetsgrad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Attackrate ar andelen av den totala befolkningen som smittas under hela det simulerade utbrottet. Det ar det mest citerade sammanfattande mattet efter en epidemivag. En hög attackrate innebar att patogenen smittade de flesta mottagliga personer innan uttunning eller kontroll stoppade smittspridningen. En lag attackrate innebar att immunitet, vaccination eller i sig svag smittspridning forhindrade omfattande infektion.',
    },
    {
      type: 'paragraph',
      html: 'Topp smittade - det maximala antalet samtidigt smittsamma personer - ar viktigare för kortvarigt tryck pa halso- och sjukvarden. En vag med en moderat attackrate men en mycket hög, skarp topp kan överbelasta sjukhus aven om totala antalet fall inte ar extremt. Omvant kan en långsam, utplanad kurva ha en liknande attackrate utspridd över manga veckor, vilket ger halso- och sjukvarden tid att hantera fallen. Detta ar varfor folkhalsoansvariga betonar att <strong>plan ut kurvan</strong> ar ett operativt mal skilt från att forhindra alla infektioner.',
    },
    {
      type: 'title',
      text: 'Att plana ut kurvan och halso- och sjukvardens kapacitet i SIR-modellen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den smittade kurvan i en SIR-modell kan tolkas som antalet personer som samtidigt behover vard. I ett verkligt utbrott drar varje person som behover en sjukhussang, syrgasstod eller intensivvard pa en andlig mangd resurser. Nar den smittade kurvan stiger högre an den tillgangliga kapaciteten ökar dödligheten från alla orsaker eftersom systemet inte kan ge adekvat vard.',
    },
    {
      type: 'paragraph',
      html: 'Vaccination planar i denna modell ut kurvan genom att ta bort personer från den mottagliga poolen innan de kan smittas. Att minska R0 genom andra åtgärder - munskydd, ventilation, distansering, testning, isolering - skulle ocksa sanka toppen i en mer komplett modell. Simuleringen gör mekanismen synlig: nar effektiv vaccinationstackning o kar krymper toppen, flyttas senare eller forsvinner helt.',
    },
    {
      type: 'title',
      text: 'Matematiken bakom SIR-modellen visualiserad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I SIR-modellen beror antalet nya infektioner per tidssteg pa tre storheter: transmissionshastigheten <strong>beta</strong>, det aktuella antalet smittsamma personer <strong>I</strong> och andelen av den effektiva populationen som fortfarande ar mottaglig <strong>S/N</strong>. Produkten <strong>beta x I x S/N</strong> kallas infektionskraften. Varje dag avgör denna kraft hur manga mottagliga personer som flyttas in i facket för smittade.',
    },
    {
      type: 'paragraph',
      html: 'Personer lamnar facket för smittade med aterhamtningshastigheten <strong>gamma = 1 / smittsam period</strong>. Balansen mellan infektionskraften och aterhamtningshastigheten avgör om epidemin vaxer eller krymper. Nar beta x S/N overstiger gamma, overgar nya infektioner aterhamtningarna och utbrottet expanderar. Nar den mottagliga andelen S/N har sjunkit tillrackligt mycket dominerar gamma och utbrottet drar ihop sig.',
    },
    {
      type: 'paragraph',
      html: 'Parametern <strong>beta</strong> syns inte direkt i granssnittet. Istallet harleds den från R0 och den smittsamma perioden genom sambandet <strong>beta = R0 x gamma</strong>. Detta ar varfor andringar av R0 eller den smittsamma perioden ger liknande men inte identiska kurvformer. Bada parametrarna paverkar infektionskraften, men den smittsamma perioden stracker ocksa utbrottets tidsaxel.',
    },
    {
      type: 'title',
      text: 'Hur du anvander simulatorn för larande och undervisning',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Jamfor hög- och lag-R0-scenarier:</strong> stall R0 till 1,5 (sasongsinfluensaniva) och sedan till 6,0 (fore-vaccinationspolioniva). Lag marke till hur topphojd, topptidpunkt och attackrate förändras aven nar alla andra reglage ar identiska.',
        '<strong>Utforska troskeln för flockimmunitet:</strong> börja med R0 pa 3,0 och ingen vaccination. Notera attackrate. Lagg sedan till vaccinationstackning tills Re faller under 1. Jamfor toppen och attackrate vid tackning strax under och strax över troskeln.',
        '<strong>Testa effekten av långsam vs. snabb respons:</strong> stall in vaccinationstackning pa olika nivåer och observera nar toppen intraffar. Hogre tackning minskar inte bara topphojden utan forsar ofta ocksa toppen, vilket koper tid för halso- och sjukvardsforberedelser.',
        '<strong>Separera dödlighet från smittspridning:</strong> stall dödligheten till 0% och observera den smittade kurvan. Stall sedan dödligheten till 10% utan att andra ovriga installningar. Den smittade kurvan förändras inte, men dödstalet stiger. Detta visar varfor case fatality rate och transmissionshastighet ar separata epidemiologiska dimensioner.',
        '<strong>Undersok effekten av smittsam period:</strong> jamfor en smittsam period pa 4 dagar med en pa 18 dagar vid samma R0. Den längre perioden stracker kurvan, forsenar toppen och ger en längre men lagre vag.',
        '<strong>Klassrumsovning - hitta troskeln:</strong> be studenterna hitta den minimivaccinationstackning som far Re under 1 för ett givet R0, och jamfor sedan resultatet med formeln 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Nar och varfor du ska anvanda denna simulator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Epidemiologistudenter:</strong> koppla det matematiska SIR-ramverket till interaktiva kurvformer innan ni arbetar med differentialekvationer eller programmerar egna modeller.',
        '<strong>Vetenskapskommunikatorer och journalister:</strong> generera plotter, skarmdumpar eller live-forklaringar som visar varfor R0, vaccination och smittsam period spelar roll för utbrottets förlopp.',
        '<strong>Folkhalsointresserade:</strong> testa hur olika interventionskombinationer flyttar epidemitoppen och attackrate för att utveckla intuition om avvagningarna vid utbrottsrespons.',
        '<strong>Alla som ar nyfikna pa epidemimatematik:</strong> utforska SIR-modellen utan att behova skriva kod eller installera programvara. Varje reglage uppdaterar diagrammet i realtid.',
      ],
    },
    {
      type: 'title',
      text: 'Modellutokningar: SEIR, SIRS och vidare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Denna simulator anvander en grundläggande SIR-struktur. Flera vanliga utokningar ökar realismen. En <strong>SEIR-modell</strong> lagger till ett exponerat (E) fack för personer som ar smittade men annu inte smittsamma, vilket representerar inkubationstiden. Den exponerade gruppen forsenar epidemitoppen utat jamfort med SIR-modellen eftersom infektioner tillbringar tid i latentfasen innan de bidrar till smittspridning.',
    },
    {
      type: 'paragraph',
      html: 'En <strong>SIRS-modell</strong> tillater aterhamtade individer att forlora immunitet över tid och atervanda till det mottagliga facket. Detta modellerar patogener som kikhosta eller SARS-CoV-2 med avtagande immunitet och ger ihallande eller aterkommande utbrottsvagor. En <strong>aldersstrukturerad modell</strong> delar upp populationen i åldersgrupper med olika kontaktmatriser och allvarlighetsprofiler, vilket ar nodvandigt för sjukdar dar barn och äldre har mycket olika utfall.',
    },
    {
      type: 'paragraph',
      html: 'Andra utokningar lagger till geografisk spridning (metapopulationsmodeller), beteendeförändring (adaptiva kontaktfrekvenser), stokastiskt brus (för sma populationer dar slumpmassig utdodning spelar roll) och interventionstidpunkt (skolnedstangningar, nedstangningar, reserestriktioner som slas pa och av). Varje utokning tillfor komplexitet som ar nodvandig för prognoser men kan dölja de centrala transmissionsdynamiker som den grundläggande SIR-modellen illustrerar pa ett rent satt.',
    },
    {
      type: 'title',
      text: 'Begransningar hos denna epidemisimulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detta ar en kompakt deterministisk SIR-modell. Den innehaller inte åldersgrupper, hushallsstruktur, skolor, resor, superspridning, inkubationsperioder, asymtomatisk smittspridning, sasongsvariation, varianter, avtagande immunitet, beteendeforandringar, testningsforseningar eller halso- och sjukvardsinterventioner som slas pa och av över tid. Dessa detaljer ar nodvandiga för verkliga prognoser.',
    },
    {
      type: 'paragraph',
      html: 'Modellen forutsatter en valblandad population dar varje mottaglig person har lika stor sannolikhet att fa kontakt med varje smittsam person. Verkliga populationer har kontaknatverk med stark klustring, aldersassortativitet, geografisk struktur och individuell variation i smittsamhet. Dessa egenskaper kan skapa långsammare initial tillvaxt, superspridningshandelser och heterogena utbrottsmonster som en homogen modell inte fangar.',
    },
    {
      type: 'paragraph',
      html: 'Anvand simulatorn för att första mekanismer och jamfora scenarier, inte för att fatta medicinska, politiska eller krissbeslut. Verklig epidemibedomning kraver overvakningsdata, lokal kontext, osakerhetsanalys och specialistmodellering inom epidemiologi.',
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
