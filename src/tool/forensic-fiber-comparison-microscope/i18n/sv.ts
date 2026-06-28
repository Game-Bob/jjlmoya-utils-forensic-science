import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'adliell-fiberjamforelse-mikroskop';
const title = 'Simulator för adliell fiberjämförelse under mikroskop';
const description = 'Skapa en profil för en ifrågasatt textilfiber, jämför den med kända referenser och tolka morfologi, polarisation samt UV-Vis-färgspektrum.';

const howTo = [
  {
    name: 'Skapa den ifrågasatta fiberns profil',
    text: 'Ange material, diameter, tvinningsriktning, polarisationssvar och färgprofil för den säkrade fibern.',
  },
  {
    name: 'Välj en känd jämförelsefiber',
    text: 'Välj en fiber från ett misstänkt plagg till höger, till exempel bomull, ull, polyester oder nylon.',
  },
  {
    name: 'Justera fokus och polarisation',
    text: 'Dra i skärpereglaget och rotera polarisatorn för att observera skärpa, ytmönster och dubbelbrytning.',
  },
  {
    name: 'Jämför morfologi och UV-Vis-spektrum',
    text: 'Använd morfologipoängen, spektrumpoängen, den kombinerade matchningen och absorptionskurvorna för att avgöra om proverna stämmer överens eller är tydligt olika.',
  },
];

const faq = [
  {
    question: 'Kan fibermikroskopi identifiera exakt vilket plagg en fiber kommer ifrån?',
    answer: 'Oftast inte. Fiberjämförelse kan visa överensstämmelse eller skillnader mellan en ifrågasatt fiber och ett känt textilmaterial, men en individuell källa kräver noggrann kontextuell analys, validerade metoder och ofta ytterligare kemisk eller instrumentell analys.',
  },
  {
    question: 'Varför används polariserat ljus vid fiberjämförelse?',
    answer: 'Polariserat ljus hjälper till att avslöja dubbelbrytning, utsläckningsbeteende och strukturella skillnader mellan naturliga och syntetiska fibrer. Syntetiska fibrer uppvisar ofta ett starkare polarisationssvar på grund av molekylär orientering.',
  },
  {
    question: 'Vad tillför UV-Vis-spektret?',
    answer: 'Medan mikroskopi beskriver form och optiska egenskaper, kan UV-Vis-absorbans jämföra färgbeteende över olika våglängder. Liknande fibrer med olika färgämnen kan därmed skiljas åt tydligt i spektrumdiagrammet.',
  },
  {
    question: 'Varför visas resultaten som poäng snarare än en slutgiltig identifiering?',
    answer: 'Adliella spårbevis ska rapporteras med lämpliga reservationer. Poängen är pedagogiska sammanfattningar av likhet i morfologi och färg, inte en laboratoriekonklusion eller ett juridiskt utlåtande.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtuellt adliellt mikroskop med delat synfält som jämför två textilfibrer',
    chartAria: 'UV-Vis-absorbansdiagram som jämför färgspektrum för den ifrågasatta och den kända fibern',
    questionedSample: 'Ifrågasatt prov',
    fixedEvidence: 'Säkrat spårbevis',
    builderSummaryDefault: 'Bomull / 18 µm / oregelbunden / indigo',
    customQuestionedLabel: 'Ifrågasatt fiber från fallet',
    material: 'Material',
    cotton: 'Bomull',
    woolMaterial: 'Ull',
    polyesterMaterial: 'Polyester',
    nylonMaterial: 'Nylon',
    materialcotton: 'bomull',
    materialwool: 'ull',
    materialpolyester: 'polyester',
    materialnylon: 'nylon',
    twist: 'Tvinning',
    irregularTwist: 'Oregelbunden',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diameter',
    polarResponse: 'Polarisationssvar',
    dyeProfile: 'Färgprofil',
    indigoDye: 'Indigo',
    crimsonDye: 'Karmosin',
    navyDye: 'Marinblå',
    violetDye: 'Violett',
    dyeindigo: 'indigo',
    dyecrimson: 'karmosin',
    dyenavy: 'marinblå',
    dyeviolet: 'violett',
    knownSample: 'Känd referens',
    questionedCotton: 'Ifrågasatt blå bomullsfiber',
    suspectCotton: 'Bomullsfiber från misstänkt skjorta',
    wool: 'Fiber från röd ylletröja',
    polyester: 'Fiber från marinblå polyesterjacka',
    nylon: 'Fiber från violett nylonfoder',
    focus: 'Fininställning',
    polarizer: 'Polarisatorvinkel',
    morphology: 'Morfologi',
    spectrum: 'UV-Vis',
    birefringence: 'Dubbelbrytning',
    combinedMatch: 'Kombinerad matchning',
    uvVisTitle: 'Överlagring av UV-Vis-absorbans',
    statusStrong: 'Hög överensstämmelse',
    statusPartial: 'Blandat resultat',
    statusDifferent: 'Stöd för uteslutning',
    verdictStrong: 'Den ifrågasatta och den kända fibern visar hög överensstämmelse i diameter, tvinning, optiska egenskaper och färgspektrum. I ett verkligt fall rapporteras detta som stöd för ett möjligt gemensamt textilursprung, inte som en definitiv identifiering.',
    verdictPartial: 'Resultatet är blandat. Vissa klasskaraktäristika stämmer överens, men morfologi, färgsvar eller dubbelbrytning uppvisar tillräckligt stora skillnader för att kräva ytterligare undersökning innan någon koppling kan göras.',
    verdictDifferent: 'Fibrerna stämmer inte överens i centrala klasskaraktäristika. Det simulerade resultatet stöder en uteslutning av detta kända textilmaterial som källa till den ifrågasatta fibern.',
    disclaimer: 'Endast i utbildningssyfte. Verklig adliell fiberjämförelse kräver validerad mikroskopi, kontroller, dokumentation, kontamineringsskydd, kollegial granskning och kvalificerad spårtolkning.',
  },
  seo: [
    {
      type: 'title',
      text: 'Adliell fiberjämförelse med delat mikroskopfält och UV-Vis-spektrum',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Utbildningssimulator',
      title: 'Vad detta virtuella fibermikroskop demonstrerar',
      html: 'Denna simulator modellerar det praktiska arbetsflödet vid <strong>adliell fiberjämförelse</strong>: beskriv den ifrågasatta textilfibern, jämför den med en känd referens, justera skärpan, rotera polarisationsfilter och jämför färgämnets absorption med en förenklad UV-Vis-absorbanskurva. Den är avsedd för studenter i spårvetenskap, inte för beslut i verkliga brottsfall.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 fält', label: 'delat synfält i mikroskop', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'synligt spektralområde', icon: 'mdi:chart-bell-curve' },
        { value: '4 klasser', label: 'bomull, ull, polyester, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'polarisatorrotation', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Centrala observationer vid jämförelse av textilfibrer',
      items: [
        'Mät eller uppskatta fiberdiametern och notera naturliga variationer längs fibertråden.',
        'Dokumentera tvinningsriktning, ytmönster, märgstrukturer, matteringspartiklar och tvärsnittsdetaljer om tillgängligt.',
        'Använd polariserat ljus för att jämföra dubbelbrytning, utsläckning och ljusstyrkeförändringar under rotation.',
        'Jämför färg under mikroskop och använda instrumentella färgdata när fallet kräver högre urskiljning.',
        'Rapportera om resultaten stämmer överens, är olika eller är oavgörbara; undvik formuleringar som antyder ett unikt plagg utan tillräckligt underlag.',
      ],
    },
    {
      type: 'table',
      headers: ['Observation', 'Vad den hjälper till att besvara', 'Begränsning'],
      rows: [
        ['Diameter and morfologi', 'Är fibrerna fysiskt lika?', 'Variationer i tillverkningen kan överlappa mellan olika plagg.'],
        ['Tvinning och ytdetaljer', 'Stämmer naturliga eller syntetiska drag överens?', 'Skador, töjning och preparering kan förändra utseendet.'],
        ['Svar under polariserat ljus', 'Stämmer de optiska egenskaperna överens?', 'Dubbelbrytning är klassbevis, inte en unik signatur.'],
        ['UV-Vis-färgspektrum', 'Är färgämnena konsistenta?', 'Liknande färgämnen kan ge närliggande kurvor; extraktion och instrumentinställningar påverkar.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vad som stöder överensstämmelse',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Flera oberoende klasskaraktäristika stämmer överens mellan den ifrågasatta och den kända fibern.',
          points: ['Jämförbart diameterintervall', 'Samma allmänna fibertyp', 'Likartat polarisationsbeteende', 'Överlappande absorbanstoppar för färgämnet'],
        },
        {
          title: 'Vad som stöder uteslutning',
          icon: 'mdi:close-circle-outline',
          description: 'En tydlig och repeterbar skillnad visar sig i en egenskap som borde stämma överens vid ett gemensamt ursprung.',
          points: ['Motsägelse mellan naturlig och syntetisk', 'Avvikande tvinning eller ytmorfologi', 'Tydligt avvikande färgspektrum', 'Oförenligt dubbelbrytningssvar'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur simuleringsmodellen fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Modellen innehåller en liten referensdatabas med värden för diameter, tvinningsriktning, fiberklass, dubbelbrytning, färgämnesgrupp och UV-Vis-absorbanspunkter. Den ifrågasatta fibern kan ställas in av användaren så att jämförelsepoängen reagerar på fallets profil snarare än ett fast prov. Den visuella mikroskopbilden reagerar på fokus och polarisatorvinkel så att studenter kan förstå varför optiska inställningar är viktiga.',
    },
    {
      type: 'paragraph',
      html: 'Polarisatorreglaget är särskilt användbart för syntetiska fibrer. Polyester och nylon har tilldelats högre värden för dubbelbrytning, vilket gör att deras ljusstyrka förändras mer märkbart när polarisatorn roteras. Naturlig bomull och ull reagerar också, men effekten är mer dämpad. Detta visar den pedagogiska poängen att molekylär orientering och fiberstruktur påverkar det optiska beteendet.',
    },
    {
      type: 'paragraph',
      html: 'UV-Vis-diagrammet är en förenklad illustration, inte en ersättning för en riktig spektrofotometer. I adliell spåranalys kräver färgjämförelse mikrospektrofotometri, tunnskiktskromatografi, extraktionskemi, referenskontroller och dokumenterad mätosäkerhet. Diagrammet finns till för att visa varför två fibrer som ser lika ut i mikroskop ändå kan skiljas åt genom färgkemi.',
    },
    {
      type: 'paragraph',
      html: 'Adliella undersökare måste dokumentera varje steg i fiberanalysprocessen. Detta inkluderar att ta detaljerade fotografier, registrera mätningar och upprätthålla en obruten kedja av förvaring för alla fysiska bevis. Simulatorn hjälper studenter att förstå vikten av systematisk dokumentation och objektiv jämförelse i adliellt arbete. Genom att interagera med olika inställningar kan användare lära sig hur ljusväg, provtjocklek och färgkoncentration påverkar spektralkurvorna och det fysiska utseendet.',
    },
    {
      type: 'paragraph',
      html: 'Adliella undersökare måste dokumentera varje steg i fiberanalysprocessen. Detta inkluderar att ta detaljerade fotografier, registrar mätningar och upprätthålla en obruten kedja av förvaring för alla fysiska bevis. Simulatorn hjälper studenter att förstå vikten av systematisk dokumentation och objektiv jämförelse i adliellt arbete. Genom att interagera med olika inställningar kan användare lära sig hur ljusväg, provtjocklek och färgkoncentration påverkar spektralkurvorna och det fysiska utseendet.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ifrågasatt fiber', definition: 'En fiber säkrad från en brottsplats, ett offer, en misstänkt, ett verktyg eller liknande vars ursprung är okänt.' },
        { term: 'Känd fiber', definition: 'En referensfiber insamlad från ett känt textilmaterial eller föremål för jämförelse med det ifrågasatta provet.' },
        { term: 'Dubbelbrytning', definition: 'Optiskt fenomen där ett material har olika brytningsindex beroende på ljusets riktning eller polarisation.' },
        { term: 'UV-Vis-spektrum', definition: 'Ett diagram som visar hur starkt ett färgämne eller material absorberar ljus vid olika våglängder.' },
        { term: 'Klasskaraktäristikum', definition: 'En egenskap som kan associera ett spårbevis med en grupp möjliga källor snarare än en specifik källa.' },
      ],
    },
    {
      type: 'tip',
      title: 'Tolkningstips för studenter',
      html: 'En hög likhetspoäng ska tolkas som <strong>överensstämmelse</strong>, inte identitet. Spårbevis är som starkast när mikroskopi, kemi, överföringskontext, persistens, säkringsmetod och kontamineringskontroller alla pekar åt samma håll.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Håll slutsatsen inom bevisets gränser',
      html: 'Ett mikroskop i webbläsaren kan inte validera en fibermatchning. Formella rapporter ska beskriva observationerna, jämförelseunderlaget, begränsningarna och stödnivån utan att överdriva kopplingen till källan.',
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
