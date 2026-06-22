import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'epidemie-sir-simulator';
const title = 'Epidemie SIR simulator';
const description = 'Ontdek hoe een ziekteverwekker zich verspreidt met een interactief SIR-model dat R0, dodelijkheid, vaccinatie, infectieuze periode, piekbelasting en transmissiecurves in realtime aanpast.';

const howTo = [
  {
    name: 'Stel het reproductiegetal in',
    text: 'Verplaats de R0-schuifknop om in te stellen hoeveel secundaire infecties een besmettelijk persoon veroorzaakt in een volledig vatbare populatie.',
  },
  {
    name: 'Voeg vaccinatie en vaccinwerkzaamheid toe',
    text: 'Verhoog de vaccinatiegraad of werkzaamheid om beschermde personen uit de vatbare groep te verwijderen en het effectieve reproductiegetal te verlagen.',
  },
  {
    name: 'Pas dodelijkheid en infectieduur aan',
    text: 'Wijzig het dodelijkheidspercentage en het aantal besmettelijke dagen om te zien hoe ernstige uitkomsten en het verloop van de curve reageren.',
  },
  {
    name: 'Lees de SIR-curves',
    text: 'Gebruik de grafiek en de daginspectie om vatbare, geïnfecteerde, herstelde en geschatte sterftecurves te vergelijken tijdens de gesimuleerde uitbraak.',
  },
];

const faq = [
  {
    question: 'Wat laat een SIR-model zien?',
    answer: 'Een SIR-model verdeelt een populatie in vatbare, geïnfecteerde en herstelde groepen. Het schat hoe mensen in de loop van de tijd tussen deze groepen bewegen terwijl transmissie en herstel plaatsvinden.',
  },
  {
    question: 'Hoe verandert vaccinatie de curve?',
    answer: 'Vaccinatie vermindert de vatbare populatie wanneer het infectie voorkomt. In deze simulator verlaagt effectieve vaccinatie het effectieve reproductiegetal en kan de infectiepiek worden verkleind of uitgesteld.',
  },
  {
    question: 'Is R0 hetzelfde als Re?',
    answer: 'Nee. R0 beschrijft verspreiding in een volledig vatbare populatie. Re is het effectieve reproductiegetal nadat immuniteit, vaccinatie of gedragsveranderingen het aantal mensen dat geïnfecteerd kan worden hebben verminderd.',
  },
  {
    question: 'Waarom stijgt en daalt de geïnfecteerdencurve?',
    answer: 'De geïnfecteerdencurve daalt wanneer elke besmettelijke persoon minder nieuwe infecties genereert dan het aantal mensen dat de geïnfecteerde groep verlaat door herstel of sterfte. Uitputting van de vatbare groep is de belangrijkste drijfveer in een basis SIR-model.',
  },
  {
    question: 'Kan dit een echte epidemie voorspellen?',
    answer: 'Het is een leer- en scenariotool, geen voorspelling. Echte uitbraken hebben leeftijdsstructuur, contactnetwerken, geografie, rapportagevertragingen, veranderend gedrag, varianten, afnemende immuniteit en gekalibreerde data nodig.',
  },
  {
    question: 'Wat is het verschil tussen attack rate en piek geïnfecteerden?',
    answer: 'Attack rate meet het totale aandeel van de populatie dat ooit is geïnfecteerd aan het einde van de uitbraak. Piek geïnfecteerden meet het maximale aantal mensen dat tegelijkertijd besmettelijk is. Een lage piek garandeert geen lage attack rate en vice versa.',
  },
  {
    question: 'Wat betekent Re onder 1 visueel?',
    answer: 'Wanneer Re onder 1 zakt, genereert elke besmettelijke persoon gemiddeld minder dan een nieuwe infectie. In de grafiek stijgt de geïnfecteerdencurve nooit steil en kan vanaf de start direct dalen, wat betekent dat de uitbraak zichzelf niet in stand kan houden.',
  },
  {
    question: 'Hoe beïnvloedt de infectieuze periode de uitbraak?',
    answer: 'Een langere infectieuze periode verlengt de tijd waarin elke geïnfecteerde persoon de ziekteverwekker kan overdragen. Dit rekt de tijdlijn van de uitbraak, stelt de piek uit en kan bij dezelfde R0 een bredere curve met een lagere piekhoogte produceren.',
  },
  {
    question: 'Waarom verandert dodelijkheid de geïnfecteerdencurve niet?',
    answer: 'In dit SIR-model beïnvloedt dodelijkheid alleen het sterftecijfer dat aftakt van de herstelde groep. Het heeft geen terugkoppeling naar transmissie omdat sterfgevallen en herstel beide mensen uit de infectieuze groep verwijderen in hetzelfde tempo.',
  },
  {
    question: 'Wat is de groepsimmuniteitsdrempel?',
    answer: 'De groepsimmuniteitsdrempel is het deel van de populatie dat immuun moet zijn om Re onder 1 te krijgen. Het wordt benaderd als 1 - 1/R0. Voor mazelen met een R0 rond 12 is de drempel meer dan 91%. Voor seizoensgriep met een R0 rond 1,3 is de drempel bijna 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Live epidemie scenario',
    curveChart: 'SIR-transmissiecurves',
    inspectDay: 'Inspecteer simulatie dag',
    legend: 'Curvelegenda',
    susceptible: 'Vatbaar',
    infected: 'Geïnfecteerd',
    recovered: 'Hersteld of immuun',
    deaths: 'Sterfgevallen',
    controls: 'Epidemie-instellingen',
    modelName: 'Compartmentmodel',
    peakInfected: 'Piek geïnfecteerden',
    peakDay: 'Piekdag',
    attackRate: 'Attack rate',
    estimatedDeaths: 'Geschatte sterfgevallen',
    r0: 'Basaal reproductiegetal R0',
    lethality: 'Dodelijkheid',
    vaccination: 'Vaccinatiegraad',
    vaccineEffectiveness: 'Vaccinwerkzaamheid',
    infectiousDays: 'Infectieuze periode',
    initialInfected: 'Initiële geïnfecteerden',
    dayLabel: 'Dag',
    daysUnit: 'dagen',
    infectiousLabel: 'besmettelijk',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Epidemie SIR simulator voor R0, vaccinatie, dodelijkheid en transmissiecurves',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze epidemie SIR-simulator laat zien hoe een ziekteverwekker zich door een populatie verspreidt wanneer vatbare mensen geïnfecteerd raken en de infectieuze groep verlaten door herstel of sterfte. Het is ontworpen voor studenten, wetenschapscommunicators, volksgezondheidsleerlingen en iedereen die snel visueel inzicht wil krijgen in waarom kleine veranderingen in transmissie of immuniteit een uitbraak kunnen hervormen.',
    },
    {
      type: 'paragraph',
      html: 'De interactieve instellingen richten zich op de variabelen die mensen het vaakst willen testen: <strong>R0</strong>, dodelijkheid, vaccinatiegraad, vaccinwerkzaamheid, infectieduur en het initiële percentage geïnfecteerden. De grafiek wordt direct bijgewerkt zodat de vatbare, geïnfecteerde, herstelde, immuune en sterftecurves als een samenhangend epidemisch systeem kunnen worden vergeleken.',
    },
    {
      type: 'title',
      text: 'Hoe het SIR-model werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een basis SIR-model verdeelt de populatie in drie hoofdcompartimenten. <strong>S</strong> zijn vatbare mensen die nog geïnfecteerd kunnen worden. <strong>I</strong> zijn momenteel besmettelijke mensen die de ziekteverwekker kunnen overdragen. <strong>R</strong> zijn mensen die niet langer besmettelijk zijn omdat ze hersteld zijn, immuniteit hebben verworven of anderszins uit de transmissieketen zijn verwijderd. Deze simulator houdt ook geschatte sterfgevallen bij als een ernstige uitkomsttak van de groep die de infectie verlaat.',
    },
    {
      type: 'paragraph',
      html: 'De transmissiesnelheid is gekoppeld aan R0 en de infectieuze periode. Als R0 hoog is of mensen langer besmettelijk blijven, worden er meer nieuwe infecties gegenereerd voordat de geïnfecteerde groep krimpt. Als vaccinatie voldoende mensen uit de vatbare groep verwijdert, daalt het effectieve reproductiegetal en kan de uitbraakpiek veel kleiner worden.',
    },
    {
      type: 'table',
      headers: ['Instelling', 'Wat het verandert', 'Typisch curve-effect'],
      rows: [
        ['R0', 'Transmissiepotentieel voordat immuniteit wordt meegerekend', 'Hogere R0 laat de geïnfecteerdencurve sneller stijgen en hoger pieken.'],
        ['Vaccinatiegraad', 'Aandeel mensen dat uit de vatbare groep wordt verwijderd wanneer beschermd', 'Hogere graad verlaagt Re en kan de uitbraak afvlakken.'],
        ['Vaccinwerkzaamheid', 'Hoezeer vaccinatie infectie voorkomt in dit vereenvoudigde model', 'Hogere werkzaamheid maakt dezelfde vaccinatiegraad beschermender.'],
        ['Infectieuze periode', 'Gemiddelde tijd dat mensen besmettelijk blijven', 'Langere infectie verandert de timing en kan de uitbraak verlengen.'],
        ['Dodelijkheid', 'Aandeel mensen dat de infectie verlaat en als overleden wordt geteld', 'Hogere dodelijkheid verhoogt de sterftecurve zonder direct de transmissie te verhogen.'],
      ],
    },
    {
      type: 'title',
      text: 'R0, Re en groepsimmuniteit inzichtelijk',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 is het gemiddelde aantal secundaire gevallen veroorzaakt door een besmettelijk persoon in een volledig vatbare populatie. Re, het effectieve reproductiegetal, is lager wanneer sommige mensen al immuun, gevaccineerd, geïsoleerd of anderszins niet beschikbaar zijn voor infectie. In deze simulator vermindert effectieve vaccinatie de vatbaarheid direct, zodat de weergegeven Re daalt naarmate de beschermde dekking stijgt.',
    },
    {
      type: 'paragraph',
      html: 'Een veelgebruikte benadering voor groepsimmuniteit is <strong>1 - 1 / R0</strong>. Bij een R0 van 3 ligt de drempel op ongeveer 66,7% effectieve immuniteit. De simulator maakt deze drempel tastbaar: wanneer effectieve vaccinatie onder de drempel ligt, kunnen uitbraken nog groeien; wanneer deze erboven ligt, kan transmissie zich moeilijk handhaven.',
    },
    {
      type: 'title',
      text: 'Wat het piekcijfer van geïnfecteerden betekent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Piek geïnfecteerden is het maximale aantal mensen dat gelijktijdig besmettelijk is in de gesimuleerde populatie. Het is vaak operationeel belangrijker dan het totale aantal infecties omdat ziekenhuizen, laboratoria, isolatieprogramma\'s en contactonderzoeksteams druk ervaren door gelijktijdige actieve gevallen. Het verlagen van de piek kan belangrijk zijn, zelfs wanneer de uiteindelijke attack rate niet tot nul wordt teruggebracht.',
    },
    {
      type: 'paragraph',
      html: 'De attack rate schat het aandeel van de totale populatie dat geïnfecteerd is aan het einde van de simulatie. Een hoge attack rate betekent dat de ziekteverwekker veel mensen heeft bereikt voordat de vatbaarheid was uitgeput of onder controle gebracht. Een lage attack rate betekent dat immuniteit, vaccinatie of zwakke transmissie wijdverspreide verspreiding heeft voorkomen.',
    },
    {
      type: 'title',
      text: 'R0-waarden uit de praktijk en wat ze betekenen voor groepsimmuniteit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het basale reproductiegetal R0 is geen vaste biologische constante voor een ziekteverwekker. Het hangt af van contactpatronen, bevolkingsdichtheid, culturele gewoonten en omgevingsfactoren. Hetzelfde virus kan verschillende R0-waarden hebben in een dichte stad versus een landelijk gebied, of in een seizoen met meer binnenruimte. De onderstaande waarden zijn illustratieve referentiebereiken uit gepubliceerde studies.',
    },
    {
      type: 'table',
      headers: ['Ziekteverwekker', 'Typisch R0-bereik', 'Groepsimmuniteitsdrempel (1 - 1/R0)', 'Belangrijkste transmissiekenmerk'],
      rows: [
        ['Seizoensgriep', '1,2 - 1,4', '17% - 29%', 'Korte infectieuze periode, seizoensvariatie'],
        ['SARS-CoV-2 (ancestraal)', '2,0 - 3,0', '50% - 67%', 'Pre-symptomatische transmissie, aerosolroutes'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Verhoogde virale lading, snellere verspreiding'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87% - 92%', 'Immuunevasion, bovenste luchtwegtropisme'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Fecaal-orale route, lange asymptomatische uitscheiding'],
        ['Pokken', '5,0 - 7,0', '80% - 86%', 'Uitgeroeid door wereldwijde vaccinatiecampagne'],
        ['Mazelen', '12,0 - 18,0', '92% - 94%', 'Extreem besmettelijk, luchtgedragen, lange infectieuze periode'],
        ['Kinkhoest', '12,0 - 17,0', '92% - 94%', 'Afnemende immuniteit laat herhaalde infecties toe'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Een hoge groepsimmuniteitsdrempel betekent niet automatisch dat vaccinatie zinloos is wanneer de dekking onder de drempel ligt. Zelfs gedeeltelijke immuniteit vertraagt transmissie, verlaagt de piek, vermindert ernstige uitkomsten en koopt tijd voor de gezondheidszorg. De simulator laat dit effect zien wanneer u de vaccinatieschuifknop door tussenliggende waarden beweegt.',
    },
    {
      type: 'title',
      text: 'Hoe het effectieve reproductiegetal Re verandert tijdens een uitbraak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re is het effectieve reproductiegetal op een bepaald punt in de uitbraak. In tegenstelling tot R0, dat uitgaat van een volledig vatbare populatie, houdt Re rekening met immuniteit, vaccinatie en alle andere factoren die de vatbaarheid verminderen. In deze simulator wordt Re berekend als <strong>R0 x (1 - beschermde fractie)</strong>, waarbij de beschermde fractie het aandeel van de populatie is dat door vaccinatie effectief immuun is.',
    },
    {
      type: 'paragraph',
      html: 'De Re-waarde in de simulatorheader wordt bijgewerkt wanneer u de instellingen wijzigt. Wanneer Re boven 1 blijft, groeit de uitbraak. Wanneer Re onder 1 zakt, genereert elke geïnfecteerde persoon gemiddeld minder dan een nieuwe infectie en kan de epidemie zichzelf niet in stand houden. Dit is het kerninzicht achter epidemiebestrijding: Re onder 1 brengen en houden door immuniteit, gedrag of interventies.',
    },
    {
      type: 'title',
      text: 'Attack rate, piekbelasting en wat ze onthullen over uitbraakernst',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De attack rate is het deel van de totale populatie dat gedurende de gehele gesimuleerde uitbraak is geïnfecteerd. Het is de meest gebruikte samenvattende maat na een epidemische golf. Een hoge attack rate betekent dat de ziekteverwekker de meeste vatbare mensen heeft geïnfecteerd voordat uitputting of controle de transmissie stopte. Een lage attack rate betekent dat immuniteit, vaccinatie of inherent zwakke transmissie wijdverspreide infectie heeft voorkomen.',
    },
    {
      type: 'paragraph',
      html: 'Piek geïnfecteerden - het maximale aantal mensen dat gelijktijdig besmettelijk is - is belangrijker voor de druk op de gezondheidszorg op korte termijn. Een golf met een matige attack rate maar een zeer hoge, scherpe piek kan ziekenhuizen overweldigen, zelfs als het totale aantal gevallen niet extreem is. Omgekeerd kan een langzame, afgeplatte curve een vergelijkbare attack rate hebben die over vele weken is gespreid, waardoor het gezondheidssysteem de tijd heeft om gevallen te behandelen. Dit is waarom volksgezondheidsfunctionarissen <strong>de curve afvlakken</strong> benadrukken als een operationeel doel dat losstaat van het voorkomen van alle infecties.',
    },
    {
      type: 'title',
      text: 'Curve afvlakken en zorgcapaciteit in het SIR-model',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De geïnfecteerdencurve in een SIR-model kan worden geïnterpreteerd als het aantal mensen dat gelijktijdig zorg nodig heeft. In een echte epidemie doet elke persoon die een ziekenhuisbed, zuurstofondersteuning of intensive care nodig heeft een beroep op een beperkte hoeveelheid middelen. Wanneer de geïnfecteerdencurve hoger stijgt dan de beschikbare capaciteit, neemt de sterfte door alle oorzaken toe omdat het systeem geen adequate zorg kan bieden.',
    },
    {
      type: 'paragraph',
      html: 'Vaccinatie vlakt in dit model de curve af door mensen uit de vatbare groep te verwijderen voordat ze geïnfecteerd kunnen raken. Het verlagen van R0 door andere maatregelen - mondkapjes, ventilatie, afstand houden, testen, isolatie - zou ook de piek verlagen in een uitgebreider model. De simulatie maakt het mechanisme zichtbaar: naarmate de effectieve vaccinatiegraad stijgt, krimpt de piek, verschuift naar later of verdwijnt volledig.',
    },
    {
      type: 'title',
      text: 'De wiskunde achter het SIR-model gevisualiseerd',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In het SIR-model hangt het aantal nieuwe infecties per tijdstap af van drie grootheden: de transmissiesnelheid <strong>beta</strong>, het huidige aantal besmettelijke mensen <strong>I</strong> en de fractie van de effectieve populatie die nog vatbaar is <strong>S / N</strong>. Het product <strong>beta x I x S / N</strong> wordt de infectiedruk genoemd. Elke dag bepaalt deze druk hoeveel vatbare mensen naar het geïnfecteerde compartiment verhuizen.',
    },
    {
      type: 'paragraph',
      html: 'Mensen verlaten het geïnfecteerde compartiment met de herstelsnelheid <strong>gamma = 1 / infectieuze periode</strong>. De balans tussen de infectiedruk en de herstelsnelheid bepaalt of de epidemie groeit of krimpt. Wanneer beta x S / N groter is dan gamma, overtreffen nieuwe infecties het herstel en breidt de uitbraak zich uit. Wanneer de vatbare fractie S / N voldoende is gedaald, domineert gamma en trekt de uitbraak samen.',
    },
    {
      type: 'paragraph',
      html: 'De parameter <strong>beta</strong> is niet direct zichtbaar in de interface. In plaats daarvan wordt deze afgeleid van R0 en de infectieuze periode via de relatie <strong>beta = R0 x gamma</strong>. Daarom produceert het wijzigen van R0 of de infectieuze periode vergelijkbare maar niet identieke curvevormen. Beide parameters beïnvloeden de infectiedruk, maar de infectieuze periode rekt ook de tijdas van de uitbraak uit.',
    },
    {
      type: 'title',
      text: 'Hoe deze simulator te gebruiken voor leren en lesgeven',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Vergelijk hoge versus lage R0-scenario\'s:</strong> stel R0 in op 1,5 (seizoensgriepbereik) en vervolgens op 6,0 (pre-vaccinatie poliobereik). Merk op hoe piekhoogte, piektiming en attack rate veranderen, zelfs wanneer alle andere instellingen identiek zijn.',
        '<strong>Verken de groepsimmuniteitsdrempel:</strong> begin met R0 op 3,0 en geen vaccinatie. Noteer de attack rate. Voeg vervolgens vaccinatiegraad toe tot Re onder 1 zakt. Vergelijk de piek en attack rate bij vaccinatiegraad net onder en net boven de drempel.',
        '<strong>Test het effect van langzame versus snelle respons:</strong> stel de vaccinatiegraad op verschillende niveaus in en observeer wanneer de piek optreedt. Een hogere graad vermindert niet alleen de piekhoogte, maar stelt deze meestal uit, wat tijd koopt voor voorbereiding van de gezondheidszorg.',
        '<strong>Scheid dodelijkheid van transmissie:</strong> stel dodelijkheid in op 0% en observeer de geïnfecteerdencurve. Stel dodelijkheid vervolgens in op 10% zonder andere instellingen te wijzigen. De geïnfecteerdencurve verandert niet, maar het dodental stijgt. Dit toont aan waarom het case-fatality rate en de transmissiesnelheid verschillende epidemiologische dimensies zijn.',
        '<strong>Onderzoek het effect van de infectieuze periode:</strong> vergelijk een infectieuze periode van 4 dagen met een periode van 18 dagen bij dezelfde R0. De langere periode rekt de curve, stelt de piek uit en produceert een langere maar lagere golf.',
        '<strong>Klasoefening - vind de drempel:</strong> vraag studenten om de minimale vaccinatiegraad te vinden die Re onder 1 brengt voor een gegeven R0 en vergelijk het resultaat met de formule 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Wanneer en waarom deze simulator te gebruiken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Epidemiologiestudenten:</strong> verbind het wiskundige SIR-raamwerk met interactieve curvevormen voordat u met differentiaalvergelijkingen werkt of eigen modellen programmeert.',
        '<strong>Wetenschapscommunicators en journalisten:</strong> genereer grafieken, screenshots of live uitleg die tonen waarom R0, vaccinatie en infectieuze periode van belang zijn voor uitbraaktrajecten.',
        '<strong>Volksgezondheidsleerlingen:</strong> test hoe verschillende combinaties van interventies de epidemische piek en attack rate verschuiven om intuïtie te ontwikkelen over de afwegingen bij uitbraakbestrijding.',
        '<strong>Iedereen die nieuwsgierig is naar epidemiewiskunde:</strong> verken het SIR-model zonder code te hoeven schrijven of software te installeren. Elke instelling werkt de grafiek in realtime bij.',
      ],
    },
    {
      type: 'title',
      text: 'Modeluitbreidingen: SEIR, SIRS en verder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze simulator gebruikt een basis SIR-structuur. Verschillende veelvoorkomende uitbreidingen voegen realisme toe. Een <strong>SEIR-model</strong> voegt een blootgesteld (E) compartiment toe voor mensen die wel geïnfecteerd zijn maar nog niet besmettelijk, wat de incubatieperiode vertegenwoordigt. De blootgestelde groep stelt de epidemische piek naar buiten uit in vergelijking met het SIR-model omdat infecties tijd in de latente fase doorbrengen voordat ze bijdragen aan transmissie.',
    },
    {
      type: 'paragraph',
      html: 'Een <strong>SIRS-model</strong> laat herstelde personen na verloop van tijd immuniteit verliezen en terugkeren naar het vatbare compartiment. Dit modelleert ziekteverwekkers zoals kinkhoest of SARS-CoV-2 met afnemende immuniteit en produceert aanhoudende of terugkerende uitbraakgolven. Een <strong>leeftijdsgestratificeerd model</strong> verdeelt de populatie in leeftijdsgroepen met verschillende contactmatrices en ernstprofielen, wat essentieel is voor ziekten waarbij kinderen en ouderen zeer verschillende uitkomsten hebben.',
    },
    {
      type: 'paragraph',
      html: 'Andere uitbreidingen voegen geografische verspreiding (metapopulatiemodellen), gedragsverandering (adaptieve contactpercentages), stochastische ruis (voor kleine populaties waar willekeurig uitsterven een rol speelt) en interventietiming (schoolsluitingen, lockdowns, reisbeperkingen die aan en uit gaan) toe. Elke uitbreiding voegt complexiteit toe die essentieel is voor voorspellingen, maar de kern van de transmissiedynamiek die het basis SIR-model helder illustreert, kan vertroebelen.',
    },
    {
      type: 'title',
      text: 'Beperkingen van deze epidemie-simulator',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dit is een compact deterministisch SIR-model. Het bevat geen leeftijdsgroepen, huishoudstructuur, scholen, reizen, superspreading, incubatieperioden, asymptomatische transmissie, seizoensinvloeden, varianten, afnemende immuniteit, gedragsveranderingen, testvertragingen of volksgezondheidsinterventies die in de loop van de tijd aan en uit gaan. Deze details zijn essentieel voor echte voorspellingen.',
    },
    {
      type: 'paragraph',
      html: 'Het model gaat uit van een goed gemengde populatie waarin elke vatbare persoon een gelijke contactkans heeft met elke besmettelijke persoon. Echte populaties hebben contactnetwerken met sterke clustering, leeftijdsassortativiteit, geografische structuur en individuele variatie in besmettelijkheid. Deze kenmerken kunnen langzamere initiële groei, superspreading-gebeurtenissen en heterogene uitbraakpatronen creëren die een homogeen model niet vastlegt.',
    },
    {
      type: 'paragraph',
      html: 'Gebruik de simulator om mechanismen te begrijpen en scenario\'s te vergelijken, niet om medische, beleids- of noodbeslissingen te nemen. Beoordeling van echte epidemieën vereist surveillancedata, lokale context, onzekerheidsanalyse en specialistische epidemiologische modellering.',
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
