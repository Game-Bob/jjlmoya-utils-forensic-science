import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'planeet-atmosfeer-overleving-calculator';
const title = 'Planeetatmosfeer Overlevingscalculator';
const description = 'Hoelang kun je overleven zonder ruimtepak op Mars, Venus, Titan, Jupiter of de Everest? Deze interactieve calculator schat de onbeschermde menselijke overlevingstijd in op basis van druk, temperatuur, zuurstof, koolstofdioxide, toxiciteit en windgevaren.';

const howTo = [
  {
    name: 'Kies een bestemming om echte atmosfeergegevens te laden',
    text: 'Selecteer Mars, Venus, Titan, Jupiter of de Everest-voorinstelling om direct realistische druk-, temperatuur-, gasmengsel- en windwaarden voor die omgeving in te stellen.',
  },
  {
    name: 'Pas omstandigheden aan om het kantelpunt te verkennen',
    text: 'Beweeg de schuifregelaars voor druk, temperatuur, zuurstof en koolstofdioxide om te zien welk gevaar als eerste dodelijk wordt. Kleine veranderingen kunnen de beperkende factor volledig verschuiven.',
  },
  {
    name: 'Lees de overlevingstimer en de zwakste schakel',
    text: 'De timer toont de geschatte tijd voordat ernstige biologische stress optreedt. Het label voor de beperkende factor vertelt je precies welk gevaar op dit moment de meest urgente bedreiging vormt.',
  },
  {
    name: 'Vergelijk gevaren visueel op de risicokaart',
    text: 'De radiale spaken en de tijdlijngrafiek laten zien hoe druk, hitte, kou, hypoxie, toxiciteit en wind elk bijdragen aan het totale risico in de loop van de tijd.',
  },
];

const faq = [
  {
    question: 'Kan een mens overleven op Mars zonder ruimtepak?',
    answer: 'Nee. Mars heeft een extreem lage druk (minder dan 1% van die van de Aarde), vrijwel geen ademhalingszuurstof en een grotendeels uit koolstofdioxide bestaande atmosfeer. Bewustzijnsverlies zou binnen seconden optreden en ernstig letsel binnen minuten zonder druk- en zuurstofondersteuning.',
  },
  {
    question: 'Waarom is atmosferische druk zo kritiek voor menselijk overleven?',
    answer: 'Onder de Armstrong-limiet (ongeveer 6,3 kPa) kan water koken bij lichaamstemperatuur. Lage druk voorkomt ook dat zuurstof in de bloedbaan terechtkomt, zelfs als de lucht 100% zuurstof is. Dat is waarom druk een van de snelste dodelijke gevaren is.',
  },
  {
    question: 'Welke planeet heeft de meest overlevingsvriendelijke atmosfeer?',
    answer: 'Van de bestemmingen in het zonnestelsel is de Aarde op grote hoogte (de Everest) het meest overlevingsvriendelijk, hoewel nog steeds gevaarlijk zonder acclimatisatie. Titan is het minst vijandig van de andere opties omdat de druk beheersbaar is, maar het mist zuurstof en is cryogeen koud. Geen enkele planeet of maan buiten de Aarde heeft een ademhalingsatmosfeer.',
  },
  {
    question: 'Is Venus erger vanwege hitte of druk?',
    answer: 'Beide zijn extreem aan het oppervlak. Venus heeft een verpletterende druk (92 keer die van de Aarde) en een oppervlaktetemperatuur heter dan een keukenoven. Deze gevaren werken samen, dus de tool markeert beide als onmiddellijke dominante bedreigingen.',
  },
  {
    question: 'Waarom heeft Titan een langere overlevingsschatting dan Mars?',
    answer: 'Titan heeft een dichte atmosfeer, dus druk zelf is geen onmiddellijk probleem. De overlevingstijd wordt beperkt door extreme kou (ongeveer -180°C) en het volledige gebrek aan zuurstof. Mars faalt op druk, Titan faalt op temperatuur.',
  },
  {
    question: 'Wat zijn de belangrijkste doodsoorzaken in de ruimte zonder pak?',
    answer: 'De snelste moordenaars zijn blootstelling aan vacuüm (drukverlies dat binnen seconden ebullisme en hypoxie veroorzaakt), gevolgd door extreme temperatuur, toxische gassamenstelling en windgedreven warmteverlies. De calculator volgt alle zes gevarencategorieën.',
  },
  {
    question: 'Is deze tool geschikt voor ruimtemissieplanning?',
    answer: 'Nee. Het is een educatief model dat gebruikmaakt van vereenvoudigde biologische drempels. Echte decompressie-, hypoxie-, toxisch gas-, thermisch letsel- en missierisicoanalyses vereisen deskundige medische en technische evaluatie voor veiligheid.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Atmosferische risicokaart',
    timeline: 'Biologische risicotijdlijn',
    controls: 'Atmosfeerregelaars',
    destination: 'Bestemming',
    pressure: 'Druk',
    temperature: 'Temperatuur',
    oxygen: 'Zuurstof',
    co2: 'Koolstofdioxide',
    limitingFactor: 'Beperkende factor',
    verdict: 'Oordeel',
    exposureSummary: 'Blootstellingssamenvatting',
    atmosphericModel: 'Atmosferisch blootstellingsmodel',
    survivalEnvelope: 'overlevingsomhulsel',
    survival: 'Overleving',
    mode: 'Modus',
    metric: 'Metrisch',
    imperial: 'Imperiaal',
    unitSystem: 'Eenhedenstelsel',
    vitalStress: 'vitale stress',
    timeLabel: 'tijd',
    estimatedSurvival: 'geschatte overleving',
    hazardPressure: 'Druk',
    hazardTemperature: 'Temperatuur',
    hazardOxygen: 'Zuurstof',
    hazardToxicity: 'Toxiciteit',
    hazardWind: 'Wind',
    presetMars: 'Mars',
    presetVenus: 'Venusoppervlak',
    presetTitan: 'Titan',
    presetJupiter: 'Jupiterwolkendek',
    presetEverest: 'Aarde, Everesttop',
    noteMars: 'Bijna vacuüm, extreme kou en bijna geen ademende zuurstof.',
    noteVenus: 'Verpletterende druk en ovenhitte domineren onmiddellijk.',
    noteTitan: 'Dichte stikstoflucht maar dodelijke kou en geen zuurstof.',
    noteJupiter: 'Waterstofrijke atmosfeer, strenge kou en hevige wind.',
    noteEverest: 'Overleefbaar voor getrainde klimmers, maar hypoxie en kou zijn ernstig.',
    verdictSeconds: 'Seconden',
    verdictMinutes: 'Minuten',
    verdictHours: 'Uren',
    verdictExtended: 'Risico op langdurige blootstelling',
  },
  seo: [
    {
      type: 'title',
      text: 'Planeetatmosfeer Overlevingscalculator: Hoe Lang Kun Je Overleven Zonder Ruimtepak op Mars, Venus, Titan of Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Als je plotseling zonder ruimtepak aan de atmosfeer van een andere planeet zou worden blootgesteld, hoe lang zou je dan overleven? Deze calculator schat de onbeschermde menselijke overlevingstijd op Mars, Venus, Titan, Jupiter en de Everest door zes gevaren te simuleren: totale druk, zuurstofbeschikbaarheid, temperatuur, koolstofdioxideconcentratie, toxische chemie en windstress. Het beantwoordt de vragen die ruimtefanaten en studenten het vaakst stellen: welke planeet doodt je het snelst, welk gevaar is de echte bedreiging, en wat zou je nodig hebben om te overleven.',
    },
    {
      type: 'paragraph',
      html: 'Het resultaat is een educatieve schatting, geen missieplanningsgetal. Het is ontworpen om te helpen vergelijken waarom verschillende werelden op heel verschillende manieren gevaarlijk zijn. Mars faalt binnen seconden op druk en hypoxie. Venus combineert verpletterende druk met ovemhitte. Titan is cryogeen en heeft geen zuurstof. Gasreuzenwolkenlagen voegen toxische samenstellingen en supersonische winden toe. Elke omgeving leert iets anders over wat de Aarde uniek bewoonbaar maakt.',
    },
    {
      type: 'title',
      text: 'Welke Planeet Heeft de Meest Overlevingsvriendelijke Atmosfeer?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Van de bestemmingen in deze calculator zijn de omgevingen op grote hoogte van de Aarde (zoals de Everest-top) het meest overlevingsvriendelijk, hoewel nog steeds gevaarlijk zonder voorbereiding. Van de andere planeten heeft Titan de meest vergevingsgezinde druk, maar faalt op temperatuur en zuurstof. Geen enkele bestemming buiten de Aarde biedt momenteel een ademhalingsatmosfeer. De calculator helpt je precies te zien waarom elke wereld faalt en welk gevaar als eerste de kritieke drempel overschrijdt.',
    },
    {
      type: 'title',
      text: 'Hoe Elk Gevaar het Lichaam Beïnvloedt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Druk (laag):</strong> onder 6,3 kPa kunnen lichaamsvloeistoffen koken (ebullisme). Zelfs daarboven voorkomt lage druk zuurstofopname. Dit is de snelste moordenaar in bijna-vacuümomgevingen.',
        '<strong>Druk (hoog):</strong> extreme druk comprimeert ademhalingsgassen, verhoogt het risico op stikstofnarcose en kan mechanische schade aan longen en sinussen veroorzaken.',
        '<strong>Zuurstofpartiaaldruk:</strong> ademhalingszuurstof hangt af van zowel het gaspercentage als de totale druk. Een dunne atmosfeer kan 21% zuurstof hebben en toch hypoxie veroorzaken.',
        '<strong>Temperatuur (hitte):</strong> boven ongeveer 60°C beginnen eiwitdenaturatie en orgaanfalen snel. De oppervlaktetemperatuur van Venus overschrijdt 460°C.',
        '<strong>Temperatuur (kou):</strong> onder het vriespunt treden bevriezing en onderkoeling op. Bij cryogene temperaturen zoals -180°C van Titan is weefselbevriezing bijna onmiddellijk.',
        '<strong>Koolstofdioxidetoxiciteit:</strong> CO2 boven ongeveer 5% veroorzaakt duizeligheid, hoofdpijn en bewustzijnsverlies. Veel planetaire atmosferen bestaan grotendeels uit CO2.',
        '<strong>Toxische chemie:</strong> zwavelverbindingen, ammoniak, methaan en waterstof kunnen corrosief, verstikkend of chemisch gevaarlijk zijn.',
        '<strong>Wind:</strong> hoge wind versnelt warmteverlies door convectie, veroorzaakt windchill, blaast puin en kan een persoon fysiek destabiliseren.',
      ],
    },
    {
      type: 'title',
      text: 'Mars: Waarom Lage Druk Doodt Voordat Iets Anders Dat Doet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mars heeft een oppervlaktedruk van ongeveer 0,6 kPa, ver onder de Armstrong-limiet van 6,3 kPa waar water kan koken bij lichaamstemperatuur. Onbeschermde blootstelling zou ebullisme, snelle hypoxie en bewustzijnsverlies binnen 15 seconden veroorzaken. Zelfs als de kou (gemiddeld -60°C) en de met koolstofdioxide verrijkte atmosfeer worden meegewogen, domineren druk en zuurstofgebrek de tijdlijn. Een functioneel drukkledingstuk en zuurstoftoevoer zijn het absolute minimum om te overleven op Mars.',
    },
    {
      type: 'title',
      text: 'Venus: Extreme Druk en Hitte Die Samenwerken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het oppervlak van Venus heeft een druk van 92 aardatmosferen (ongeveer 9,3 MPa, gelijk aan 900 meter onder water) en een oppervlaktetemperatuur van 462°C. De atmosfeer bestaat voor 96% uit koolstofdioxide met wolken van zwavelzuur. Deze gevaren werken gelijktijdig in plaats van opeenvolgend: druk verplettert, hitte kookt en CO2 vergiftigt. In deze calculator is Venus de enige bestemming waar meerdere gevaren bijna op hetzelfde moment de dodelijke drempel overschrijden.',
    },
    {
      type: 'title',
      text: 'Titan: De Vriendelijkste Druk in het Zonnestelsel Buiten de Aarde',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De maan Titan van Saturnus is ongebruikelijk omdat de oppervlaktedruk (ongeveer 147 kPa, of 1,45 keer die van de Aarde) zich daadwerkelijk binnen een bereik bevindt dat een mens kan verdragen. Er zou voor die variabele alleen geen drukpak nodig zijn. Titan heeft echter vrijwel geen zuurstof, een oppervlaktetemperatuur van -179°C en een methaan-stikstofatmosfeer. De calculator toont druk als beheersbaar, maar temperatuur en zuurstofgebrek domineren onmiddellijk. Titan herinnert ons eraan dat overleving afhangt van het hele gevarenprofiel, niet slechts van één meting.',
    },
    {
      type: 'title',
      text: 'Hoe de Overlevingstimer en Risicokaart te Interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De overlevingstimer schat het interval voordat ernstige biologische stress optreedt bij een onbeschermd persoon. Het label van de beperkende factor geeft aan welk gevaar als eerste de kritieke drempel overschrijdt. De radiale gevarenspaken tonen de relatieve ernst van elk van de zes gevolgde gevaren, en de tijdlijngrafiek laat zien hoe het gecombineerde risico zich ophoopt gedurende het blootstellingsvenster. Deze visuele hulpmiddelen helpen je in één oogopslag te zien waarom een bepaalde omgeving gevaarlijk is en welk beschermend systeem het meest zou uitmaken.',
    },
    {
      type: 'table',
      headers: ['Bestemming', 'Dodelijke gevaren', 'Snelste bedreiging', 'Wat een pak moet oplossen'],
      rows: [
        ['Mars', 'Bijna-vacuüm, hypoxie, kou, CO2', 'Druk < Armstrong-limiet', 'Drukkleding, zuurstof, thermische isolatie'],
        ['Venus oppervlak', 'Verpletterende druk, 462°C hitte, CO2, zwavelzuur', 'Druk en hitte gelijktijdig', 'Zware koeling, drukhul, ademhalingsapparatuur'],
        ['Titan', 'Geen zuurstof, -179°C kou, methaan', 'Temperatuur en hypoxie', 'Zuurstofvoorziening, extreme thermische bescherming'],
        ['Jupiter wolkenlaag', 'Geen zuurstof, waterstofrijk, kou, hoge wind', 'Hypoxie en gebrek aan ademhalingsgas', 'Vergrendeld ademhalingssysteem, thermische regeling'],
        ['Everest top', 'Hypoxie, kou, wind', 'Zuurstofpartiaaldruk te laag', 'Zuurstofmasker, koudweeruitrusting, acclimatisatie'],
      ],
    },
    {
      type: 'title',
      text: 'Wat Zou Er Nodig Zijn om Zonder Ruimtepak te Overleven?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistisch gezien staat geen enkel bekend hemellichaam in het zonnestelsel behalve de Aarde onbeschermde menselijke overleving voor meer dan een paar minuten toe, en de meeste doden binnen seconden. De waarde van deze calculator ligt niet in het vinden van een veilige planeet, maar in het begrijpen van de specifieke redenen waarom elke omgeving vijandig is. Deze kennis stuurt planetairwetenschappelijk onderwijs, ontwerp van ruimtehabitats, prioriteiten voor astronautentraining en de zoektocht naar potentieel bewoonbare exoplaneten waar een atmosfeer daadwerkelijk leven zou kunnen ondersteunen.',
    },
    {
      type: 'list',
      items: [
        '<strong>Gebruik het voor leren:</strong> zie hoe het veranderen van één variabele, zoals het verdubbelen van de druk op Mars, het overlevingsvenster verandert.',
        '<strong>Gebruik het voor vergelijking:</strong> vergelijk waarom Titan meer tijd geeft dan Venus, hoewel beide niet overleefbaar zijn.',
        '<strong>Gebruik het voor discussie:</strong> verken wat een geterraformeerde atmosfeer nodig zou hebben om ademhalingscondities te bereiken.',
        '<strong>Gebruik het niet voor echte beslissingen:</strong> de calculator gebruikt vereenvoudigde drempels. Noodplanning vereist professionele ruimtevaartgeneeskunde.',
      ],
    },
    {
      type: 'title',
      text: 'Belangrijke Beperkingen en Educatief Doel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Echt overleven hangt af van individuele gezondheid, kleding, inspanningsniveau, vochtigheid, zonnestraling, decompressiegeschiedenis, ademhalingsgasmengsel, reddingstijdstip en vele andere variabelen. Planetaire atmosfeergegevens variëren ook per hoogte, seizoen en meetbron. Deze tool gebruikt vereenvoudigde biologische drempels en representatieve omgevingsgegevens voor wetenschapseducatie. Het is ontworpen om studenten, docenten, ruimtefanaten en wetenschapsschrijvers te helpen planetaire bewoonbaarheid te begrijpen, niet om daadwerkelijke ruimteoperaties te begeleiden.',
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
