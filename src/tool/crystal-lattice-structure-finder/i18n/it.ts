import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'esploratore-struttura-reticolo-cristallino';
const title = 'Esploratore di struttura del reticolo cristallino';
const description = 'Esplora le celle elementari cubica semplice, cubica a facce centrate ed esagonale compatta con un visualizzatore 3D interattivo, fattore di impaccamento atomico, numero di coordinazione e calcolatore di densità teorica.';

const howTo = [
  {
    name: 'Scegli un reticolo o un materiale',
    text: 'Parti da una famiglia di strutture come cubica semplice, CFC o EC, oppure seleziona un preset di materiale reale per caricare la sua costante reticolare e la massa atomica o formula.',
  },
  {
    name: 'Ruota la cella elementare',
    text: 'Trascina i comandi di angolazione e zoom per ispezionare quali atomi si trovano sui vertici, sulle facce o all\'interno della cella convenzionale.',
  },
  {
    name: 'Leggi impaccamento e densità',
    text: 'Confronta il fattore di impaccamento atomico, il numero di coordinazione, gli atomi per cella, la massa della cella, il volume della cella e la densità teorica per la struttura selezionata.',
  },
  {
    name: 'Prova costanti personalizzate',
    text: 'Modifica il parametro reticolare a, il rapporto c/a e la massa per osservare come cambia la densità teorica quando il cristallo si espande, si contrae o cambia composizione.',
  },
];

const faq = [
  {
    question: 'Cos\'è una cella elementare in un reticolo cristallino?',
    answer: 'Una cella elementare è il più piccolo parallelepipedo tridimensionale che si ripete per riempire lo spazio e costruire il cristallo. I suoi atomi possono essere condivisi con le celle vicine, quindi gli atomi netti per cella possono essere inferiori al numero di sfere disegnate sui bordi.',
  },
  {
    question: 'Perché CFC ed EC hanno lo stesso fattore di impaccamento?',
    answer: 'CFC ed EC ideale sono entrambi disposizioni compatte di sfere uguali. Impilano strati triangolari densi in sequenze diverse, ABCABC per il CFC e ABAB per l\'EC, ma entrambi riempiono circa il 74 percento dello spazio con atomi.',
  },
  {
    question: 'Come viene calcolata la densità teorica?',
    answer: 'Il calcolatore divide la massa all\'interno di una cella elementare per il volume della cella. La massa della cella deriva dal numero di atomi o unità di formula per cella moltiplicato per la massa molare e diviso per la costante di Avogadro.',
  },
  {
    question: 'Perché la densità misurata può differire dal risultato teorico?',
    answer: 'I campioni reali possono contenere vacanze, impurità, pori, bordi di grano, miscele isotopiche, dilatazione termica o fasi multiple. Il valore teorico presuppone un cristallo perfetto con la costante reticolare selezionata.',
  },
  {
    question: 'L\'alite è davvero un reticolo metallico CFC?',
    answer: 'No. L\'alite è un sale gemma ionico, non un metallo. Il preset utilizza la sua cella convenzionale derivata dal CFC perché NaCl ha quattro unità di formula per cella cubica, il che la rende utile per esercitarsi nel calcolo della densità.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerLabel: 'Cella cristallina interattiva',
    material: 'Materiale',
    lattice: 'Reticolo',
    rotation: 'Rotazione',
    zoom: 'Zoom',
    latticeA: 'Costante reticolare a',
    cRatio: 'Rapporto c/a',
    molarMass: 'Massa molare',
    atomsPerCell: 'Atomi per cella',
    packingFactor: 'Fattore di impaccamento',
    coordination: 'Coordinazione',
    density: 'Densità',
    cellVolume: 'Volume della cella',
    cellMass: 'Massa della cella',
    radius: 'Raggio atomico',
    cornerAtoms: 'Atomi ai vertici',
    faceAtoms: 'Atomi sulle facce',
    interiorAtoms: 'Atomi interni',
    materialNote: 'Nota sul materiale',
    formula: 'Formula',
    resetView: 'Reimposta vista',
    crystalProperties: 'Proprietà del cristallo',
    physicalMetrics: 'Metriche fisiche',
    latticeSimpleCubic: 'Cubica semplice',
    latticeFcc: 'Cubica a facce centrate',
    latticeHcp: 'Esagonale compatta',
    shortSc: 'SC',
    shortFcc: 'CFC',
    shortHcp: 'EC',
    materialCopper: 'Rame',
    materialCopperNote: 'Metallo CFC comune con elevata conducibilità elettrica.',
    materialAluminum: 'Alluminio',
    materialAluminumNote: 'Metallo CFC leggero usato come riferimento di densità nei libri di testo.',
    materialPolonium: 'Polonio alpha',
    materialPoloniumNote: 'Raro esempio di cristallo elementare a cubica semplice.',
    materialMagnesium: 'Magnesio',
    materialMagnesiumNote: 'Metallo EC con rapporto c/a vicino all\'impaccamento ideale.',
    materialTitanium: 'Titanio alpha',
    materialTitaniumNote: 'Fase EC a temperatura ambiente del titanio.',
    materialHalite: 'Alite (approssimazione)',
    materialHaliteNote: 'Il salgemma è modellato tramite la sua cella convenzionale CFC con quattro unità di formula NaCl.',
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
    latticeBodyCenteredCubic: 'Cubica a corpo centrato',
    latticeCesiumChloride: 'Cloruro di cesio',
    latticeDiamondCubic: 'Cubica del diamante',
    latticeFaceCenteredCubic: 'Cubica a facce centrate',
    latticeHexagonalClosePacked: 'Esagonale compatta',
    latticePerovskite: 'Perovskite cubica',
    latticeRockSalt: 'Salgemma',
    latticeRutile: 'Rutilo',
    latticeWurtzite: 'Wurtzite',
    latticeZincBlende: 'Blenda di zinco',
    materialAlphaIron: 'Ferro alfa',
    materialAlphaIronNote: 'Fase del ferro cubica a corpo centrato a temperatura ambiente.',
    materialTungsten: 'Tungsteno',
    materialTungstenNote: 'Metallo refrattario BCC denso con punto di fusione molto alto.',
    materialSilicon: 'Silicio',
    materialSiliconNote: 'Semiconduttore cubico del diamante usato nei circuiti integrati.',
    materialDiamond: 'Diamante',
    materialDiamondNote: 'Rete covalente di carbonio nella struttura cubica del diamante.',
    materialCesiumChloride: 'Cloruro di cesio',
    materialCesiumChlorideNote: 'Struttura ionica cubica semplice interpenetrata con coordinazione otto.',
    materialZincSulfide: 'Solfuro di zinco',
    materialZincSulfideNote: 'Sfalerite, detta anche blenda di zinco, con coordinazione tetraedrica.',
    materialGalliumNitride: 'Nitruro di gallio',
    materialGalliumNitrideNote: 'Semiconduttore wurtzite usato in LED ed elettronica di potenza.',
    materialStrontiumTitanate: 'Titanato di stronzio',
    materialStrontiumTitanateNote: 'Ossido perovskitico cubico usato come substrato e modello dielettrico.',
    materialRutileTitania: 'Titania rutilo',
    materialRutileTitaniaNote: 'Struttura TiO2 rutilo con coordinazione ottaedrica del titanio.',
  },
  seo: [
    {
      type: 'title',
      text: 'Esploratore di struttura del reticolo cristallino per celle elementari, fattore di impaccamento e densità',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo esploratore di struttura del reticolo cristallino aiuta a collegare l\'immagine di una cella elementare con i calcoli di cui studenti e scienziati dei materiali hanno solitamente bisogno. Puoi ispezionare le strutture cubica semplice, cubica a facce centrate ed esagonale compatta, quindi calcolare il fattore di impaccamento atomico, il numero di coordinazione, gli atomi per cella, il raggio atomico dal parametro reticolare, il volume della cella, la massa della cella e la densità teorica da preset di materiali reali o input personalizzati.',
    },
    {
      type: 'paragraph',
      html: 'Il visualizzatore interattivo è progettato per la difficoltà comune in cristallografia: gli atomi ai bordi sono visibili, ma solo una frazione di ciascun atomo di bordo appartiene alla cella selezionata. Ruotare il modello rende la differenza tra i siti di vertice, i siti di faccia e i siti interni più facile da vedere prima di utilizzare la formula numerica.',
    },
    {
      type: 'title',
      text: 'Cubica semplice, CFC ed EC a confronto',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Struttura', 'Atomi netti per cella', 'Numero di coordinazione', 'Fattore di impaccamento atomico', 'Esempi tipici'],
      rows: [
        ['Cubica semplice', '1', '6', '52,36%', 'Il polonio alpha è l\'esempio elementare classico.'],
        ['Cubica a facce centrate (CFC)', '4', '12', '74,05%', 'Rame, alluminio, nichel, argento, oro e molti metalli duttili.'],
        ['Esagonale compatta (EC)', '6', '12', '74,05%', 'Magnesio, titanio alpha, zinco, cobalto e berillio.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'L\'impaccamento cubico semplice è facile da visualizzare perché gli atomi si toccano lungo il bordo del cubo e ogni atomo di vertice contribuisce per un ottavo alla cella. Il CFC aggiunge atomi al centro di ciascuna faccia, quindi gli atomi si toccano lungo le diagonali delle facce e il conteggio netto diventa quattro atomi per cella cubica convenzionale. L\'EC usa strati esagonali invece di una scatola cubica, ma l\'EC ideale raggiunge lo stesso limite di impaccamento compatto del CFC.',
    },
    {
      type: 'title',
      text: 'Formula del fattore di impaccamento atomico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il fattore di impaccamento atomico è la frazione del volume della cella elementare occupata da atomi sferici rigidi. Si calcola come <strong>APF = volume degli atomi nella cella / volume della cella elementare</strong>. Per la cubica semplice diventa pi / 6 perché un atomo di raggio a/2 si inserisce nella cella cubica. Il CFC e l\'EC ideale raggiungono entrambi circa 0,7405, che è la frazione di impaccamento massima per sfere uguali.',
    },
    {
      type: 'paragraph',
      html: 'Il fattore di impaccamento non è la stessa cosa della densità. L\'APF descrive quanto efficientemente sfere identiche riempiono lo spazio, mentre la densità dipende anche dalla massa molare e dalle dimensioni del reticolo. Un metallo EC leggero e un metallo CFC pesante possono avere fattori di impaccamento simili ma densità molto diverse.',
    },
    {
      type: 'title',
      text: 'Formula della densità teorica usata dal calcolatore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il calcolatore usa <strong>rho = nM / (NA Vcella)</strong>. In questa equazione, <strong>n</strong> è il numero di atomi o unità di formula per cella, <strong>M</strong> è la massa molare in grammi per mole, <strong>NA</strong> è la costante di Avogadro e <strong>Vcella</strong> è il volume della cella elementare in centimetri cubi. Le celle cubiche usano a^3. Le celle esagonali usano (3 sqrt(3) / 2) a^2 c, con c fornito tramite il rapporto c/a.',
    },
    {
      type: 'paragraph',
      html: 'Poiché le costanti reticolari sono solitamente tabulate in ångström, il calcolatore converte gli ångström in centimetri prima di calcolare la densità. Una piccola variazione della costante reticolare può influenzare notevolmente la densità perché il volume scala con la terza potenza per le celle cubiche.',
    },
    {
      type: 'title',
      text: 'Come usare i preset di reticolo per metalli e minerali',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rame e alluminio:</strong> confronta due metalli CFC con lo stesso numero netto di atomi per cella ma masse molari e costanti reticolari diverse.',
        '<strong>Magnesio e titanio alpha:</strong> esamina l\'impaccamento EC e osserva come il rapporto c/a modifica il volume della cella esagonale.',
        '<strong>Polonio alpha:</strong> studia la rara struttura cubica semplice e la sua minore efficienza di impaccamento.',
        '<strong>Alite:</strong> esercitati con la densità su unità di formula usando una cella convenzionale di NaCl di tipo minerale invece di un metallo a elemento singolo.',
      ],
    },
    {
      type: 'title',
      text: 'Limiti di un modello a sfera rigida della cella elementare',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento usa modelli geometrici idealizzati. I cristalli reali hanno densità elettronica anziché confini rigidi, e le costanti reticolari cambiano con temperatura, pressione, composizione e difetti. I cristalli ionici e covalenti possono anche richiedere atomi di base, occupazioni parziali e operazioni di simmetria che vanno oltre le tre strutture didattiche mostrate qui.',
    },
    {
      type: 'paragraph',
      html: 'Usa i risultati per scopi educativi, stime rapide e confronto tra famiglie reticolari comuni. Per la cristallografia pubblicabile, verifica i parametri reticolari, la fase, la stechiometria e l\'occupazione dei siti da dati di diffrazione primari o da un database cristallografico curato.',
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
