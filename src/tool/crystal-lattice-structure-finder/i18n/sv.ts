import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'utforskare-av-kristallgitterstruktur';
const title = 'Utforskare av kristallgitterstruktur';
const description = 'Utforska enkel kubisk, kubisk ytcentrerad (FCC/KYC) och hexagonal tätpackad (HCP) enhetscell med en interaktiv 3D-visare, packningsfaktor, koordinationstal och teoretisk densitetsberäknare.';

const howTo = [
  {
    name: 'Välj ett gitter eller material',
    text: 'Börja med en strukturfamilj som enkel kubisk, FCC eller HCP, eller välj en förinställning för ett verkligt material för att ladda dess gitterkonstant och atom- eller formelmassa.',
  },
  {
    name: 'Rotera enhetscellen',
    text: 'Dra i vinkel- och zoomreglagen för att inspektera vilka atomer som sitter i hörn, på ytor eller inuti den konventionella cellen.',
  },
  {
    name: 'Läs av packning och densitet',
    text: 'Jämför packningsfaktor, koordinationstal, antal atomer per cell, cellmassa, cellvolym och teoretisk densitet för den valda strukturen.',
  },
  {
    name: 'Testa egna konstanter',
    text: 'Redigera gitterparametern a, c/a-förhållandet och massan för att se hur den teoretiska densiteten förändras när kristallen expanderar, drar ihop sig eller ändrar sammansättning.',
  },
];

const faq = [
  {
    question: 'Vad är en enhetscell i ett kristallgitter?',
    answer: 'En enhetscell är den minsta återkommande tredimensionella lådan som kan täcka rummet för att bygga kristallen. Dess atomer kan vara delade med grannceller, så nettantalet atomer per cell kan vara lägre än antalet sfärer som ritas på gränserna.',
  },
  {
    question: 'Varför har FCC och HCP samma packningsfaktor?',
    answer: 'FCC och ideal HCP är båda tätpackade arrangemang av lika stora sfärer. De staplar täta triangulära lager i olika sekvenser, ABCABC för FCC och ABAB för HCP, men båda fyller cirka 74 procent av utrymmet med atomer.',
  },
  {
    question: 'Hur beräknas teoretisk densitet?',
    answer: 'Beräknaren dividerar massan inuti en enhetscell med enhetscellens volym. Cellmassan kommer från atomer eller formelenheter per cell multiplicerat med molmassa och dividerat med Avogadros konstant.',
  },
  {
    question: 'Varför kan uppmätt densitet skilja sig från det teoretiska resultatet?',
    answer: 'Verkliga prover kan innehålla vakanser, föroreningar, porer, korngränser, isotopblandningar, temperaturexpansion eller flera faser. Det teoretiska värdet antar en perfekt kristall med den valda gitterkonstanten.',
  },
  {
    question: 'Är halit verkligen ett FCC-metallgitter?',
    answer: 'Nej. Halit är jonisk bergssalt, inte en metall. Förinställningen använder dess konventionella FCC-härledda cell eftersom NaCl har fyra formelenheter per kubisk cell, vilket gör den användbar för densitetsberäkningsövning.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Interaktiv kristallin enhetscell',
    material: 'Material',
    lattice: 'Gitter',
    rotation: 'Rotation',
    zoom: 'Zoom',
    latticeA: 'Gitter a',
    cRatio: 'c/a-förhållande',
    molarMass: 'Molmassa',
    atomsPerCell: 'Atomer per cell',
    packingFactor: 'Packningsfaktor',
    coordination: 'Koordination',
    density: 'Densitet',
    cellVolume: 'Cellvolym',
    cellMass: 'Cellmassa',
    radius: 'Atomradie',
    cornerAtoms: 'Hörnatomer',
    faceAtoms: 'Ytatomer',
    interiorAtoms: 'Inre atomer',
    materialNote: 'Materialanteckning',
    formula: 'Formel',
    resetView: 'Återställ vy',
    crystalProperties: 'Kristallegenskaper',
    physicalMetrics: 'Fysikaliska mått',
    latticeSimpleCubic: 'Enkel kubisk',
    latticeFcc: 'Kubisk ytcentrerad (FCC)',
    latticeHcp: 'Hexagonal tätpackad (HCP)',
    shortSc: 'EK',
    shortFcc: 'FCC',
    shortHcp: 'HCP',
    materialCopper: 'Koppar',
    materialCopperNote: 'Vanlig FCC-metal med hög elektrisk ledningsförmåga.',
    materialAluminum: 'Aluminium',
    materialAluminumNote: 'Lätt FCC-metal som används som densitetsreferens i klassrummet.',
    materialPolonium: 'Alfa-polonium',
    materialPoloniumNote: 'Sällsynt exempel på en elementär enkel kubisk kristall.',
    materialMagnesium: 'Magnesium',
    materialMagnesiumNote: 'HCP-metal med c/a-förhållande nära idealpackning.',
    materialTitanium: 'Alfa-titan',
    materialTitaniumNote: 'HCP-fas av titan vid rumstemperatur.',
    materialHalite: 'Halitapproximation',
    materialHaliteNote: 'Bergssalt modelleras via dess konventionella FCC-cell med fyra NaCl-formelenheter.',
    shortSimpleCubic: 'SC',
    shortFaceCenteredCubic: 'FCC',
    shortHexagonalClosePacked: 'HCP',
    shortBodyCenteredCubic: 'BCC',
    shortDiamondCubic: 'DC',
    shortRockSalt: 'NaCl',
    shortCesiumChloride: 'CsCl',
    shortZincBlende: 'ZnS',
    shortWurtzite: 'WZ',
    shortPerovskite: 'ABO3',
    shortRutile: 'TiO2',
    latticeBodyCenteredCubic: 'Kubisk rymdcentrerad',
    latticeCesiumChloride: 'Cesiumklorid',
    latticeDiamondCubic: 'Diamantkubisk',
    latticeFaceCenteredCubic: 'Kubisk ytcentrerad',
    latticeHexagonalClosePacked: 'Hexagonal tätpackad',
    latticePerovskite: 'Kubisk perovskit',
    latticeRockSalt: 'Bergsalt',
    latticeRutile: 'Rutil',
    latticeWurtzite: 'Wurtzit',
    latticeZincBlende: 'Zinkblände',
    materialAlphaIron: 'Alfa-järn',
    materialAlphaIronNote: 'Kubisk rymdcentrerad järnfas vid rumstemperatur.',
    materialTungsten: 'Volfram',
    materialTungstenNote: 'Tät BCC-refraktärmetall med mycket hög smältpunkt.',
    materialSilicon: 'Kisel',
    materialSiliconNote: 'Diamantkubisk halvledare som används i integrerade kretsar.',
    materialDiamond: 'Diamant',
    materialDiamondNote: 'Kovalent kolnätverk i diamantkubisk struktur.',
    materialCesiumChloride: 'Cesiumklorid',
    materialCesiumChlorideNote: 'Interpenetrerande enkel kubisk jonstruktur med åttafaldig koordination.',
    materialZincSulfide: 'Zinksulfid',
    materialZincSulfideNote: 'Sfalerit, även kallad zinkblände, med tetraedrisk koordination.',
    materialGalliumNitride: 'Galliumnitrid',
    materialGalliumNitrideNote: 'Wurtzit-halvledare som används i LED och kraftelektronik.',
    materialStrontiumTitanate: 'Strontiumtitanat',
    materialStrontiumTitanateNote: 'Kubisk perovskitoxid som används som substrat och dielektrisk modell.',
    materialRutileTitania: 'Rutil-titania',
    materialRutileTitaniaNote: 'Rutil-TiO2-struktur med oktaedrisk titankoordinering.',
  },
  seo: [
    {
      type: 'title',
      text: 'Utforskare av kristallgitterstruktur för enhetsceller, packningsfaktor och densitet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna utforskare av kristallgitterstruktur hjälper till att koppla bilden av en enhetscell med de beräkningar som studenter och materialforskare vanligtvis behöver. Du kan inspektera enkel kubisk, kubisk ytcentrerad (FCC/KYC) och hexagonal tätpackad (HCP) struktur, och sedan beräkna packningsfaktor, koordinationstal, antal atomer per cell, atomradie från gitterparameter, cellvolym, cellmassa och teoretisk densitet från förinställningar av verkliga material eller egna värden.',
    },
    {
      type: 'paragraph',
      html: 'Den interaktiva visaren är designad för en vanlig svårighet inom kristallografi: atomer på gränserna syns, men bara en bråkdel av varje gränsatom tillhör den valda cellen. Genom att rotera modellen blir skillnaden mellan hörnpositioner, ytpositioner och inre positioner lättare att se innan du använder den numeriska formeln.',
    },
    {
      type: 'title',
      text: 'Jämförelse av enkel kubisk, FCC och HCP',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Struktur', 'Nettatomer per cell', 'Koordinationstal', 'Packningsfaktor', 'Typiska exempel'],
      rows: [
        ['Enkel kubisk', '1', '6', '52,36%', 'Alfa-polonium är det klassiska elementära exemplet.'],
        ['Kubisk ytcentrerad', '4', '12', '74,05%', 'Koppar, aluminium, nickel, silver, guld och många formbara metaller.'],
        ['Hexagonal tätpackad', '6', '12', '74,05%', 'Magnesium, alfa-titan, zink, kobolt och beryllium.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Enkel kubisk packning är lätt att visualisera eftersom atomerna rör vid varandra längs kubens kant och varje hörnatom bidrar med en åttondel till cellen. FCC lägger till atomer i mitten av varje yta, så atomerna rör vid varandra längs ytdiagonalerna och nettoantalet blir fyra atomer per konventionell kubisk cell. HCP använder hexagonala lager istället för en kubisk låda, men ideal HCP når samma tätpackningsgräns som FCC.',
    },
    {
      type: 'title',
      text: 'Formel för packningsfaktor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Packningsfaktor är andelen av enhetscellens volym som upptas av hårda sfäriska atomer. Den beräknas som <strong>APF = volym av atomer i cellen / enhetscellens volym</strong>. För enkel kubisk blir detta pi / 6 eftersom en atom med radie a/2 får plats i den kubiska cellen. FCC och ideal HCP når båda cirka 0,7405, vilket är den maximala packningsfraktionen för lika stora sfärer.',
    },
    {
      type: 'paragraph',
      html: 'Packningsfaktor är inte samma sak som densitet. APF beskriver hur effektivt identiska sfärer fyller utrymme, medan densitet också beror på molmassa och gitterdimensioner. En lätt HCP-metall och en tung FCC-metall kan ha liknande packningsfaktorer men mycket olika densiteter.',
    },
    {
      type: 'title',
      text: 'Formel för teoretisk densitet som används av beräknaren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beräknaren använder <strong>rho = nM / (NA Vcell)</strong>. I denna ekvation är <strong>n</strong> antalet atomer eller formelenheter per cell, <strong>M</strong> är molmassan i gram per mol, <strong>NA</strong> är Avogadros konstant och <strong>Vcell</strong> är enhetscellens volym i kubikcentimeter. Kubiska celler använder a^3. Hexagonala celler använder (3 sqrt(3) / 2) a^2 c, där c anges via c/a-förhållandet.',
    },
    {
      type: 'paragraph',
      html: 'Eftersom gitterkonstanter vanligtvis anges i ångström, omvandlar beräknaren ångström till centimeter innan densiteten beräknas. En liten förändring i gitterkonstanten kan märkbart påverka densiteten eftersom volymen skalas med tredje potensen för kubiska celler.',
    },
    {
      type: 'title',
      text: 'Hur man använder gitterförinställningar för metaller och mineraler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Koppar och aluminium:</strong> jämför två FCC-metaller med samma netto antal atomer per cell men olika molmassor och gitterkonstanter.',
        '<strong>Magnesium och alfa-titan:</strong> inspektera HCP-packning och se hur c/a-förhållandet ändrar den hexagonala cellvolymen.',
        '<strong>Alfa-polonium:</strong> studera den sällsynta enkla kubiska strukturen och dess lägre packningseffektivitet.',
        '<strong>Halit:</strong> öva på formelenhetsdensitet med en mineral-liknande konventionell NaCl-cell istället för en enelementsmetall.',
      ],
    },
    {
      type: 'title',
      text: 'Begränsningar hos en modell med hårda sfärer för enhetscellen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg använder idealiserade geometriska modeller. Verkliga kristaller har elektrondensitet istället för hårda gränser, och gitterkonstanter förändras med temperatur, tryck, sammansättning och defekter. Joniska och kovalenta kristaller kan också kräva basatomer, partiella ockupationer och symmetrioperationer som går utöver de tre undervisningsstrukturer som visas här.',
    },
    {
      type: 'paragraph',
      html: 'Använd resultaten för utbildning, snabba uppskattningar och jämförelse av vanliga gitterfamiljer. För publiceringsbar kristallografi, verifiera gitterparametrar, fas, stökiometri och platsockupation från primära diffraktionsdata eller en kurerad kristallografisk databas.',
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
      applicationCategory: 'EducationalApplication',
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
