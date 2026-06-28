import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensische-vezelvergelijking-microscoop';
const title = 'Forensische vezelvergelijking microscoopsimulator';
const description = 'Stel het profiel van een betwiste textielvezel op, vergelijk deze met bekende referenties en interpreteer morfologische, polarisatie- en UV-Vis-absorptiegegevens.';

const howTo = [
  {
    name: 'Stel het profiel van de betwiste vezel samen',
    text: 'Stel het materiaal, de diameter, de twistrichting, de polarisatiereactie en het kleurstofprofiel in voor de gevonden vezel.',
  },
  {
    name: 'Kies een bekende vergelijkingsvezel',
    text: 'Selecteer aan de rechterkant een vezel van een verdacht kledingstuk, zoals katoen, wol, polyester of nylon.',
  },
  {
    name: 'Pas focus en polarisatie aan',
    text: 'Verschuif de focusregelaar en roteer de polarisator om scherpte, oppervlakterichels en dubbelbreking te observeren.',
  },
  {
    name: 'Vergelijk morfologie en UV-Vis-spectra',
    text: 'Gebruik de morfologiescore, spectrumscore, gecombineerde overeenkomst en absorptiecurven om te bepalen of de monsters consistent of duidelijk verschillend zijn.',
  },
];

const faq = [
  {
    question: 'Kan vezelmicroscopie het exacte kledingstuk identificeren waar een vezel vandaan komt?',
    answer: 'Meestal niet. Vezelvergelijking kan consistentie of verschillen aantonen tussen een betwiste vezel en een bekend textiel, maar toeschrijven aan een individuele bron vereist zorgvuldige context, gevalideerde methoden en vaak aanvullende chemische of instrumentele analyses.',
  },
  {
    question: 'Waarom wordt gepolariseerd licht gebruikt bij vezelvergelijking?',
    answer: 'Gepolariseerd licht helpt bij het onthullen van dubbelbreking, uitdovingsgedrag en structurele verschillen tussen natuurlijke en synthetische vezels. Synthetische vezels vertonen vaak een sterkere polarisatiereactie vanwege de moleculaire uitlijning.',
  },
  {
    question: 'Wat voegt het UV-Vis-spectrum toe?',
    answer: 'Hoewel microscopie de vorm en het optische gedrag beschrijft, kan UV-Vis-absorptie het gedrag van kleurstoffen vergelijken over verschillende golflengten. Vergelijkbare vezels met verschillende kleurstoffen kunnen hierdoor duidelijk worden onderscheiden in het spectrale diagram.',
  },
  {
    question: 'Waarom worden de resultaten getoond als scores in plaats van een definitieve identificatie?',
    answer: 'Forensisch sporenonderzoek moet proportioneel worden gerapporteerd. De scores zijn educatieve samenvattingen van morfologische en kleurstofovereenkomst, geen laboratoriumconclusie of juridisch oordeel.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtuele forensische microscoop met gedeeld beeld die twee textielvezels vergelijkt',
    chartAria: 'UV-Vis-absorptiediagram dat de kleurstofspectra van de betwiste en bekende vezel vergelijkt',
    questionedSample: 'Betwist monster',
    fixedEvidence: 'Vastgesteld spoor',
    builderSummaryDefault: 'Katoen / 18 µm / onregelmatig / indigo',
    customQuestionedLabel: 'Betwiste vezel uit de zaak',
    material: 'Materiaal',
    cotton: 'Katoen',
    woolMaterial: 'Wol',
    polyesterMaterial: 'Polyester',
    nylonMaterial: 'Nylon',
    materialcotton: 'katoen',
    materialwool: 'wol',
    materialpolyester: 'polyester',
    materialnylon: 'nylon',
    twist: 'Twist',
    irregularTwist: 'Onregelmatig',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diameter',
    polarResponse: 'Polarisatiereactie',
    dyeProfile: 'Kleurstofprofiel',
    indigoDye: 'Indigo',
    crimsonDye: 'Karmijnrood',
    navyDye: 'Marineblauw',
    violetDye: 'Violet',
    dyeindigo: 'indigo',
    dyecrimson: 'karmijnrood',
    dyenavy: 'marineblauw',
    dyeviolet: 'violet',
    knownSample: 'Bekende vergelijking',
    questionedCotton: 'Betwiste blauwe katoenvezel',
    suspectCotton: 'Verdachte katoenvezel van shirt',
    wool: 'Rode wollen truivezel',
    polyester: 'Marineblauwe polyester jasvezel',
    nylon: 'Violette nylon voeringvezel',
    focus: 'Fijnfocus',
    polarizer: 'Polarisatorhoek',
    morphology: 'Morfologie',
    spectrum: 'UV-Vis',
    birefringence: 'Dubbelbreking',
    combinedMatch: 'Gecombineerde overeenkomst',
    uvVisTitle: 'UV-Vis-absorptie-overlay',
    statusStrong: 'Hoge consistentie',
    statusPartial: 'Gemengde vergelijking',
    statusDifferent: 'Uitsluiting ondersteund',
    verdictStrong: 'De betwiste en bekende vezels zijn zeer consistent in diameter, twist, optisch gedrag en kleurstofspectrum. In een echte zaak wordt dit gerapporteerd als ondersteuning voor een mogelijke gemeenschappelijke textielbron, niet als individuele identificatie.',
    verdictPartial: 'De vergelijking is gemengd. Sommige klassekenmerken komen overeen, maar morfologie, kleurstofreactie of dubbelbreking laten voldoende verschillen zien waardoor meer onderzoek vereist is voor een voorzichtige associatie.',
    verdictDifferent: 'De vezels zijn niet consistent over de belangrijkste klassekenmerken. Het gesimuleerde resultaat ondersteunt de uitsluiting van dit bekende textiel als de waarschijnlijke bron van de betwiste vezel.',
    disclaimer: 'Uitsluitend educatieve simulatie. Echte forensische vezelvergelijking vereist gevalideerde microscopie, controles, documentatie, maatregelen tegen contaminatie, collegiale toetsing en gekwalificeerde sporeninterpretatie.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensische vezelvergelijking met gedeeld-beeldmicroscopie en UV-Vis-spectra',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Educatieve simulator',
      title: 'Wat deze virtuele vezelmicroscoop demonsteert',
      html: 'Deze simulator modelleert de praktische werkstroom achter <strong>forensische vezelvergelijking</strong>: beschrijf de betwiste textielvezel, vergelijk deze met een bekende referentie, pas de focus aan, roteer de polarisatiefilters en vergelijk de kleurstofreactie met een vereenvoudigde UV-Vis-absorptiecurve. Het is ontworpen voor studenten forensisch onderzoek, niet voor echte beslissingen in strafzaken.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 velden', label: 'gedeeld microscoopbeeld', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'zichtbaar spectrumbereik', icon: 'mdi:chart-bell-curve' },
        { value: '4 klassen', label: 'katoen, wol, polyester, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'polarisatierotatie', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Essentiële waarnemingen bij de vergelijking van textielvezels',
      items: [
        'Meet of schat de vezeldiameter en noteer natuurlijke variaties langs de vezelstreng.',
        'Noteer twistrichting, oppervlakterichels, merg-achtige kenmerken, matteringsdeeltjes en aanwijzingen over de dwarsdoorsnede indien beschikbaar.',
        'Gebruik gepolariseerd licht om dubbelbreking, uitdovingsgedrag en helderheidsveranderingen tijdens rotatie te vergelijken.',
        'Vergelijk de kleur microscopisch en gebruik instrumentele kleurstofgegevens wanneer de zaak grotere discriminatie vereist.',
        'Rapporteer of de bevindingen consistent, verschillend of onbeslist zijn; vermijd bewoordingen die zonder ondersteuning duiden op een uniek kledingstuk.',
      ],
    },
    {
      type: 'table',
      headers: ['Waarneming', 'Welke vraag helpt het beantwoorden', 'Beperking'],
      rows: [
        ['Diameter en morfologie', 'Zijn de vezels fysiek vergelijkbaar?', 'Productievariatie kan overlappen tussen verschillende kledingstukken.'],
        ['Twist en oppervlaktedetails', 'Komen natuurlijke of synthetische kenmerken overeen?', 'Beschadiging, uitrekking en montage kunnen het uiterlijk veranderen.'],
        ['Gepolariseerd lichtgedrag', 'Komen de optische eigenschappen overeen?', 'Dubbelbreking is klasse-bewijs, geen unieke signatuur.'],
        ['UV-Vis-kleurstofspectrum', 'Zijn de kleurstoffen consistent?', 'Vergelijkbare kleurstoffen kunnen dicht bij elkaar liggen; extractie en instrumentinstellingen zijn van belang.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Wat consistentie ondersteunt',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Meerdere onafhankelijke klassekenmerken komen overeen tussen de betwiste en bekende vezel.',
          points: ['Vergelijkbaar diameterbereik', 'Zelfde algemene vezeltype', 'Vergelijkbaar polarisatiegedrag', 'Overlappende absorptiepieken van de kleurstof'],
        },
        {
          title: 'Wat uitsluiting ondersteunt',
          icon: 'mdi:close-circle-outline',
          description: 'Er treedt een duidelijk, herhaalbaar verschil op in een kenmerk dat overeen zou moeten komen voor een gemeenschappelijke textielbron.',
          points: ['Verschil tussen natuurlijk en synthetisch', 'Afwijkende twist of oppervlaktemorfologie', 'Sterk afwijkend kleurstofspectrum', 'Incompatibel gedrag onder dubbelbreking'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe het simulatiemodel werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het model maakt gebruik van een kleine referentiedatabase met waarden voor diameter, twistrichting, vezelklasse, dubbelbreking, kleurstoffamilie en UV-Vis-absorptiepunten. De betwiste vezel is door de gebruiker te configureren, zodat de vergelijkingsscore reageert op het profiel van de zaak in plaats van op een vastgesteld klaslokaalmonster. De microscoopweergave reageert vervolgens op de focus en polarisatorhoek, zodat studenten kunnen zien waarom optische instellingen belangrijk zijn.',
    },
    {
      type: 'paragraph',
      html: 'De polarisatorregeling is vooral nuttig voor synthetische vezels. Aan polyester en nylon zijn sterkere dubbelbrekingswaarden toegewezen, zodat hun helderheid zichtbaarder verandert als de polarisator draait. Natuurlijk katoen en wol reageren ook, maar het gesimuleerde effect is subtieler. Dit weerspiegelt de didactische gedachte dat moleculaire oriëntatie en vezelstructuur het optische gedrag beïnvloeden.',
    },
    {
      type: 'paragraph',
      html: 'Het UV-Vis-diagram is een vereenvoudigde overlay, geen vervanging voor een spectrofotometer. In echt sporenonderzoek kan kleurstofvergelijking microspectrofotometrie, dunnelaagchromatografie, extractiechemie, referentiecontroles en gedocumenteerde meetonzekerheid vereisen. Het diagram is bedoeld om te leren waarom twee vezels die er onder een microscoop hetzelfde uitzien, toch kunnen verschillen in kleurstofchemie.',
    },
    {
      type: 'paragraph',
      html: 'Forensisch onderzoekers moeten elke stap van het vezelanalyseproces documenteren. Dit omvat het maken van gedetailleerde foto\'s, het vastleggen van metingen en het bijhouden van de keten van bewaring voor alle fysieke bewijsstukken. De simulator helpt studenten het belang te begrijpen van systematische documentatie en objectieve vergelijking in het forensische werk. Door interactie met verschillende instellingen kunnen gebruikers leren hoe het lichtpad, de dikte van het monster och de concentratie van de kleurstof de spectrale curven en het fysieke uiterlijk beïnvloeden.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Betwiste vezel', definition: 'Een vezel die is veiliggesteld op een plaats delict, slachtoffer, verdachte, gereedschap, voertuig of ander object waarvan de herkomst onbekend is.' },
        { term: 'Bekende vezel', definition: 'Een referentievezel verzameld van een textiel of object voor vergelijking met het betwiste monster.' },
        { term: 'Dubbelbreking', definition: 'Optisch gedrag waarbij een materiaal verschillende brekingsindices heeft, afhankelijk van de lichtrichting of polarisatie.' },
        { term: 'UV-Vis-spectrum', definition: 'Een diagram dat laat zien hoe sterk een kleurstof of materiaal absorbeert bij verschillende golflengten.' },
        { term: 'Klassekenmerk', definition: 'Een eigenschap die bewijsmateriaal kan associëren met een groep mogelijke bronnen in plaats van met één unieke bron.' },
      ],
    },
    {
      type: 'tip',
      title: 'Interpretatietip voor studenten',
      html: 'Een hoge gelijkenisscore moet worden gelezen als <strong>consistentie</strong>, niet als identiteit. Sporenonderzoek is het sterkst wanneer microscopie, chemie, transfercontext, persistentie, veiligstellingsmethode en contaminatiecontroles allemaal in dezelfde richting wijzen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Houd de conclusie binnen de grenzen van het bewijs',
      html: 'Een microscoop in de browser kan een vezelovereenkomst niet valideren. Formele rapporten moeten de waarnemingen, vergelijkingsbasis, beperkingen en de mate van ondersteuning beschrijven zonder de toeschrijving aan de bron te overdrijven.',
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
