import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-microkristallijne-drugstest-simulator';
const title = 'Forensische Microkristallijne Drugstest Simulator';
const description = 'Simuleer educatieve microkristallijne drugsscreeningspatronen door verdachte gereguleerde stoffen te combineren met klassieke forensische reagentia en vergelijk kristalvorm, groeisnelheid en polarisatielichtrespons.';

const howTo = [
  {
    name: 'Kies een verdacht monster',
    text: 'Selecteer cocaïne, heroïne, amfetamine of methamphetamine om een educatief profiel voor het onbekende materiaal te laden.',
  },
  {
    name: 'Breng een microkristallijn reagens aan',
    text: 'Schakel tussen platinachloride, goudchloride en Dragendorff-reagens om te zien hoe de chemie van het reagens de kristalmorphologie verandert.',
  },
  {
    name: 'Pas de gesimuleerde polarisatie aan',
    text: 'Verschuif de polarisatieregelaar om het dubbelbrekende contrast in het virtuele microscoopveld te verhogen of te verlagen.',
  },
  {
    name: 'Vergelijk het referentie-achtige resultaat',
    text: 'Gebruik het kristalvormlabel, de match-score, de groeisnelheid en de interpretatienotitie om te bepalen of het patroon referentie-achtig, gedeeltelijk of niet-specifiek is.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Zijn microkristallijne tests bevestigend voor illegale drugs?',
    answer: 'Nee. Microkristallijne tests zijn vermoedelijke of vergelijkende screeningsinstrumenten. Echte identificatie van in beslag genomen drugs moet gevalideerde protocollen volgen die geschikte controles en bevestigende instrumentele methoden zoals GC-MS, LC-MS of infraroodspectroscopie omvatten.',
  },
  {
    key: 'faq-2',
    question: 'Waarom produceren verschillende reagentia verschillende kristalvormen?',
    answer: 'Het reagens vormt zouten, complexen of neerslagen met functionele groepen in de doelverbinding. Oplosbaarheid, zuursterkte, concentratie, onzuiverheden en droogsnelheid beïnvloeden of de waargenomen kristalvorm verschijnt als naalden, rozetten, prisma\'s, plaatjes of zwakke verstrooiing.',
  },
  {
    key: 'faq-3',
    question: 'Wat voegt gepolariseerd licht toe aan microkristallijn onderzoek?',
    answer: 'Gepolariseerd licht kan het contrast verhogen en dubbelbreking onthullen, waardoor randen, vertakkingen en de interne kristalstructuur gemakkelijker te vergelijken zijn. Het neemt de noodzaak van referentiestandaarden en controles niet weg.',
  },
  {
    key: 'faq-4',
    question: 'Waarom kan een positief ogend patroon nog steeds misleidend zijn?',
    answer: 'Versnijdingsmiddelen, mengsels, gedegradeerd materiaal, ouderdom van het reagens, contaminatie en verwachtingen van de analist kunnen allemaal ambigue of overlappende morfologieën veroorzaken. Daarom moeten vermoedelijke resultaten voorzichtig worden geïnterpreteerd.',
  },
  {
    key: 'faq-5',
    question: 'Kan deze simulator een onbekende stof identificeren?',
    answer: 'Nee. Het is een educatieve visualisatie van algemene morfologische concepten. Het kan geen echt bewijsmateriaal testen, chemie meten of een laboratoriumconclusie formuleren.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Gepolariseerde microscoop',
    canvasAria: 'Geanimeerd microkristallijn groeiveld',
    sample: 'Verdacht monster',
    sampleCocaine: 'Cocaïne',
    sampleHeroin: 'Heroïne',
    sampleAmphetamine: 'Amfetamine',
    sampleMethamphetamine: 'Methamphetamine',
    reagent: 'Reagentiarek',
    reagentPlatinum: 'Platinachloride',
    reagentGold: 'Goudchloride',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Gepolariseerd contrast',
    confidence: 'Overeenkomst',
    growth: 'Groei',
    birefringence: 'Dubbelbr.',
    regrow: 'Kristallen opnieuw laten groeien',
    warningLabel: 'Forensische waarschuwing',
    warningTitle: 'Screeningwaarschuwing',
    matchReference: 'Referentie-achtig',
    matchPartial: 'Gedeeltelijke match',
    matchNonSpecific: 'Niet-specifiek',
    habitFeatheryNeedles: 'Veerachtige naaldbundels',
    habitRosettes: 'Stervormige rozetten',
    habitBranchingPrisms: 'Vertakte prisma\'s',
    habitPlates: 'Dunne plaatjes',
    habitWeakScatter: 'Spärliche niet-specifieke verstrooiing',
    cueCocainePlatinumChloride: 'Veerachtige en vertakte naaldbundels zijn het verwachte educatieve patroon voor cocaïne met platinachloride.',
    cueCocaineGoldChloride: 'Goudchloride kan vertakte oranjebruine kristallen vormen, maar het patroon is minder specifiek dan met platinachloride.',
    cueCocaineDragendorff: 'Dragendorff geeft hier een zwakke alkaloïdereactie; morfologie mag alleen als screeningsinformatie worden behandeld.',
    cueHeroinPlatinumChloride: 'Plaatachtige afzettingen kunnen verschijnen, maar deze combinatie is geen sterke bevestigende educatieve match.',
    cueHeroinGoldChloride: 'Rozetclusters en afgeronde stervormen zijn het referentie-achtige heroïnepatroon in deze simulator.',
    cueHeroinDragendorff: 'Dragendorff produceert oranje vertakte prisma\'s die consistent zijn met een alkaloïdenscreening, geen identiteitsbewijs.',
    cueAmphetaminePlatinumChloride: 'Snel vertakkende prisma\'s suggereren een stimulansachtig educatief patroon onder het gekozen reagens.',
    cueAmphetamineGoldChloride: 'Spärliche kristallisatie betekent dat de visuele bevinding als niet-specifiek moet worden gerapporteerd.',
    cueAmphetamineDragendorff: 'Naaldenwaaiers groeien snel en zijn nuttig voor het aanleren van vermoedelijke amfetaminevergelijkingen.',
    cueMethamphetaminePlatinumChloride: 'Gepolariseerde rozetten kunnen zich vormen, maar het resultaat blijft een vermoedelijke morfologievergelijking.',
    cueMethamphetamineGoldChloride: 'Dunne plaatvormen zijn zichtbaar, hoewel overlap met andere verbindingen de specificiteit beperkt.',
    cueMethamphetamineDragendorff: 'Dichte oranje vertakte prisma\'s bieden de sterkste educatieve match voor methamphetamine in deze set.',
    disclaimer: 'Uitsluitend educatief screeningsmodel. Echte drugidentificatie vereist gevalideerde referentiestandaarden, reagenscontroles, chain of custody en bevestigende instrumentele analyse.',
  },
  seo: [
    {
      type: 'title',
      text: 'Microkristallijne Drugstesten in de Forensische Wetenschap',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Educatieve simulator',
      title: 'Waar deze microkristallijne simulator voor dient',
      html: 'Dit hulpmiddel legt uit hoe klassieke forensische microkristallijne tests herkenbare kristalvormen kunnen produceren nadat een verdachte drug is gemengd met een reagens. Het helpt studenten om <strong>kristalmorfologie</strong>, groeisnelheid en gepolariseerd lichtcontrast te vergelijken zonder het browserresultaat als bewijs te behandelen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'educatieve monsterprofielen', icon: 'mdi:flask-outline' },
        { value: '3', label: 'traditionele reagensopties', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'kristalvormen gemodelleerd', icon: 'mdi:shape-outline' },
        { value: '0', label: 'juridische identificatieclaims', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Hoe de Kristalvorm te Interpreteren',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Praktische vergelijkingschecklist',
      items: [
        'Begin met een bekende referentiestandaard en een blanco reagenscontrole voordat u een onbekende stof vergelijkt.',
        'Noteer het reagens, de concentratie, de druppelgrootte, de droogtijd, de temperatuur en de vergroting van de microscoop.',
        'Vergelijk eerst de algehele vorm: naalden, rozetten, plaatjes, prisma\'s, vertakkingen of zwakke verstrooiing.',
        'Behandel gedeeltelijke of schaarse groei als reden voor verder testen, niet als een betrouwbare identificatie.',
      ],
    },
    {
      type: 'table',
      headers: ['Waargenomen kristalvorm', 'Veelgestelde vragen van gebruikers', 'Voorzichtige interpretatie'],
      rows: [
        ['Veerachtige naalden', 'Lijkt dit op cocaïne met platinachloride?', 'Het kan een nuttige educatieve match zijn, maar mengsels en reagenscondities kunnen de vorm veranderen.'],
        ['Rozetten', 'Zijn stervormige kristallen diagnostisch?', 'Rozetten kunnen een vergelijking ondersteunen wanneer de controles overeenkomen, maar ze zijn alleen niet voldoende.'],
        ['Vertakte prisma\'s', 'Waarom groeien stimulansscreenings vaak zo snel?', 'Sommige zouten nucleëren snel en vertakken zich naarmate het oplosmiddel verdampt; snelheid is ondersteunend, niet bevestigend.'],
        ['Zwakke verstrooiing', 'Betekent een zwak patroon dat er geen drug aanwezig is?', 'Nee. Lage concentratie, onzuiverheden, verouderd reagens of slechte voorbereiding kunnen de kristalgroei onderdrukken.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Microkristallijne screening helpt bij',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Snelle visuele vergelijking wanneer een getrainde analist controles en referentiematerialen gebruikt.',
          points: ['Demonstraties in de klas', 'Morfologische woordenschat', 'Vermoedelijke triage', 'Vergelijking van reageereffecten'],
        },
        {
          title: 'Microkristallijne screening vervangt niet',
          icon: 'mdi:alert-circle-outline',
          description: 'Gevalideerde bevestigende chemie voor een echte conclusie over in beslag genomen drugs.',
          points: ['Instrumentele bevestiging', 'Geaccrediteerde procedures', 'Matrixspecifieke validatie', 'Documentatie van onzekerheid'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wetenschappelijke Achtergrond over Microkristallijn Testen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microkristallijne tests vertegenwoordigen een historische en zeer gevoelige klasse van chemische screeningstests die door forensisch chemici worden gebruikt om verdachte gereguleerde stoffen te identificeren. Wanneer een kleine hoeveelheid van een drugsmakelijk monster in een zuur wordt opgelost en wordt gecombineerd met een specifiek zwaar metaalreagens, zoals goudchloride of platinachloride, slaat een coördinatiecomplex of onoplosbaar zout neer. De moleculaire structuur van de drug bepaalt de groeisnelheid, oriëntatie en symmetrie van de resulterende kristallen, wat leidt tot kenmerkende microscopische vormen of kristalvormen.',
    },
    {
      type: 'paragraph',
      html: 'Het analyseren van deze vormen onder een gepolariseerde lichtmicroscoop stelt forensisch onderzoekers in staat om optische eigenschappen zoals dubbelbreking te observeren, waarbij het kristal licht in twee stralen splitst, wat levendige kleuren en een hoog contrast oplevert. Hoewel instrumentele methoden zoals gaschromatografie-massaspectrometrie microkristallijne tests voor bevestigende identificatie grotendeels hebben vervangen, blijft microkristallijne screening een gewaardeerde techniek vanwege de snelheid, de lage kosten en het vermogen om optische isomeren te scheiden die met andere middelen moeilijk te onderscheiden zijn.',
    },
    {
      type: 'paragraph',
      html: 'In educatieve settings helpt het simuleren van deze reacties studenten om de relatie tussen chemische reagentia en fysieke kristalmorfologie te begrijpen. Door te observeren hoe cocaïne, heroïne en verschillende amfetaminen reageren op verschillende reagentia, leren studenten dat een enkele positieve test geen definitieve forensische conclusie is. Juiste drugsscreeningsprotocollen vereisen het vergelijken van onbekende monsters met bekende referentiematerialen en het uitvoeren van blanco reagentia om de geldigheid en specificiteit van de waargenomen kristalpatronen te garanderen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kristalvorm', definition: 'De zichtbare vorm of groeiwijze van een kristal, zoals naalden, plaatjes, prisma\'s of rozetten.' },
        { term: 'Nucleatie', definition: 'De eerste vorming van minuscule kristalcentra van waaruit grotere structuren groeien.' },
        { term: 'Dubbelbreking', definition: 'Optisch gedrag waardoor kristallen helderder of gekleurd kunnen lijken onder gepolariseerd licht.' },
        { term: 'Vermoedelijke test', definition: 'Een screeningstest die een mogelijke klasse of verbinding suggereert, maar de identiteit op zichzelf niet bewijst.' },
        { term: 'Referentiestandaard', definition: 'Een bekend materiaal dat onder dezelfde omstandigheden is getest om het onbekende patroon te vergelijken.' },
      ],
    },
    {
      type: 'tip',
      title: 'Best practice voor echt bewijsmateriaal',
      html: 'Gebruik microkristalmorfologie als één onderzoekslijn. Een betrouwbare werkstroom omvat blanco testen, positieve controles, documentatie van reagensouderdom, onafhankelijke beoordeling indien nodig en bevestigende tests onder een geaccepteerd drugsschema.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Forensische waarschuwing',
      title: 'Een mooi kristal is geen wettelijke identificatie',
      html: 'De simulator scheidt bewust een visuele overeenkomstscore van een forensische conclusie. De echte praktijk moet rekening houden met mengsels, versnijdingsmiddelen, contaminatie, reagensprestaties, training van de analist en gevalideerde laboratoriumprocedures.',
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
