import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensisk-verktygsspar-reffling-jamforare';
const title = 'Forensisk jämförare för verktygsspårsreffling';
const description = 'Ladda upp misstänkta och kända verktygsspårsbilder, justera dem i ett delat jämförelsemikroskop och inspektera refflingens kontinuitet med visuella kontroller.';

const howTo = [
  {
    name: 'Ladda jämförelsebilderna',
    text: 'Ladda upp en känd testspårsbild och en misstänkt spårsbild från ditt eget fallmaterial, dina anteckningar eller ditt övningsset.',
  },
  {
    name: 'Flytta jämförelsedelningen',
    text: 'Dra över den optiska visaren för att exponera mer av det kända eller det misstänkta spåret medan båda proverna hålls i samma fält.',
  },
  {
    name: 'Justera förskjutning, rotation, zoom och kontrast',
    text: 'Använd mikrometerkontrollerna för att flytta och rotera det misstänkta spåret, och justera sedan zoom, kontrast och ljusstyrka så att svaga refflor förblir synliga.',
  },
  {
    name: 'Exportera jämförelsevy',
    text: 'När den visuella inriktningen är klar, exportera en PNG-vy för diskussion, klassrumsgranskning eller fallanteckningar.',
  },
];

const faq = [
  {
    question: 'Vad är en forensisk verktygsspårsjämförelse?',
    answer: 'Forensisk verktygsspårsjämförelse undersöker spår som uppstår när ett verktyg kommer i kontakt med, skär, skrapar, bänder eller trycker mot en annan yta. Granskare jämför klasskaraktäristika, spårkvalitet och mikroskopiska refflingsdetaljer mellan misstänkta spår och kända testspår.',
  },
  {
    question: 'Kan detta onlineverktyg identifiera det exakta verktyget som gjorde ett spår?',
    answer: 'Nej. Denna arbetsyta är till för visuell inriktning och utbildning. Den beräknar inte källtillskrivning, sannolikhet, felmarginal eller en automatiserad forensisk slutsats.',
  },
  {
    question: 'Varför är förskjutning, rotation och zoom viktiga vid jämförelse av verktygsspår?',
    answer: 'Små skillnader i verktygsvinkel, tryck, skala, kameraposition och lateral placering kan göra att liknande refflingsmönster ser felaktiga ut. Kontroller för förskjutning, rotation och zoom hjälper till att placera två bilder i ett jämförbart läge.',
  },
  {
    question: 'Vilka bilder fungerar bäst för visuell inriktning av verktygsspår?',
    answer: 'Använd skarpa, välbelysta bilder tagna så rakt framifrån som möjligt, med tillräcklig överlappning i spårområdet. Undvik kraftig oskärpa, extrem bländning, perspektivförvrängning och bilder där refflingsområdet är för kort eller skadat för att jämföras.',
  },
  {
    question: 'Vad bör en användare dokumentera efter att ha riktat in två verktygsspårsbilder?',
    answer: 'Dokumentera källan för varje bild, om den är misstänkt eller känd, de inriktningsinställningar som använts, eventuella bildjusteringar som tillämpats, synliga områden av överensstämmelse eller avvikelse samt bildkvalitetens begränsningar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Delad jämförelsemikroskopvy av kända och misstänkta verktygsspårsrefflor',
    splitLabel: 'Flytta jämförelsedelning',
    units: 'Förskjutningens enhetssystem',
    metric: 'Metrisk',
    imperial: 'Imperial',
    toolProfile: 'Verktygsprofil',
    loadImages: '1. Ladda',
    alignImage: '2. Rikta misstänkt bild',
    adjustImage: '3. Finjustera synlighet',
    outputControls: 'Utmatningskontroller',
    demoOptions: 'Demoalternativ',
    uploadKnown: 'Känd/testbild',
    uploadQuestioned: 'Misstänkt bild',
    noFile: 'Ingen bild laddad',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Skruvmejselspets',
    prybar: 'Kofotskant',
    boltCutter: 'Bultsaxkäft',
    offset: 'Horisontell förskjutning',
    rotation: 'Vinkelrotation',
    zoom: 'Bildzoom',
    contrast: 'Kontrast',
    brightness: 'Ljusstyrka',
    microns: 'mikrometer',
    thousandths: 'tusenladd',
    degrees: 'grader',
    correlation: 'Läge / poäng',
    verdictStrong: 'stark inriktning',
    verdictPartial: 'delvis inriktning',
    verdictWeak: 'svag inriktning',
    center: 'Centrera',
    fineTip: 'fina släplinjer',
    wideEdge: 'bred komprimering',
    crushJaw: 'parade klämryggar',
    grid: 'Rutnät',
    exportImage: 'Exportera vy',
    exportFilename: 'verktygsspar-jamforelsevy.png',
    phaseFit: 'Fasanpassning',
    rotationFit: 'Rotationsanpassning',
    knownMark: 'Känt testspår',
    questionedMark: 'Misstänkt spår',
    reliefGraph: 'Digitaliserad mikroytsrelief',
    visualMode: 'Visuell',
    visualVerdict: 'manuell jämförelse',
    visualInterpretation: 'Endast visuell inriktning. Ingen automatiserad forensisk slutsats beräknas.',
    interpMatch: 'Demoförhandsvisning. Ladda upp bilder för att jämföra verkliga spår.',
    interpPossible: 'Demoförhandsvisning. Justera inriktningen eller ladda upp bilder.',
    interpMismatch: 'Demoförhandsvisning. Centrera om eller ladda upp bilder.',
    disclaimer: 'Endast visuell arbetsyta.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensiskt verktygsspårs-jämförelsemikroskop online',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Visuell arbetsyta',
      title: 'Jämför misstänkta och kända verktygsspårsbilder i din webbläsare',
      html: 'Denna jämförelsearbetsyta för verktygsspår låter dig ladda upp två bilder, placera dem i ett delat jämförelsemikroskoplayout och justera det misstänkta spåret tills refflor, skrapmärken, tryckmärken eller mikroskopiska linjer kan inspekteras sida vid sida. Den är utformad för studenter i forensisk vetenskap, instruktörer, utredare och juridiska team som behöver ett tydligt sätt att förklara <strong>jämförelse av kända mot misstänkta verktygsspår</strong> utan att installera specialistprogramvara för mikroskopi.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 uppladdningar', label: 'kända och misstänkta bilder', icon: 'mdi:image-plus' },
        { value: 'delad vy', label: 'layout för jämförelsemikroskop', icon: 'mdi:compare-horizontal' },
        { value: 'inriktning', label: 'kontroller för förskjutning, rotation och zoom', icon: 'mdi:axis-arrow' },
        { value: 'PNG-export', label: 'spara jämförelsevyn', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'När denna jämförelsearbetsyta för verktygsspår är användbar',
      items: [
        'Lära ut hur jämförelsemikroskop placerar ett känt testspår bredvid ett misstänkt spår.',
        'Förbereda klassrumsdemonstrationer med verkliga bilder eller övningsbilder av verktygsspår.',
        'Förklara varför inriktning, skala, rotation, belysning och kontrast påverkar tolkningen av refflor.',
        'Skapa en ren visuell illustration eller bild för fallanteckningar som visar den inriktade vyn utan att påstå en automatiserad identifiering.',
        'Granska bildkvaliteten innan man beslutar om ett spår är lämpligt för en formell laboratoriejämförelse.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man jämför verktygsspårsbilder online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Börja med att ladda en bild av ett <strong>känt testspår</strong> och en bild av ett <strong>misstänkt spår</strong>. Ett känt spår produceras vanligtvis under kontrollerade förhållanden med ett specifikt verktyg. Ett misstänkt spår är det spår som säkrats från en brottsplats, ett föremål, en dörrkarm, ett lås eller något annat föremål vars ursprung är okänt. Syftet med arbetsytan är inte att avgöra identitet automatiskt, utan att placera de två bilderna i ett användbart visuellt förhållande så att användaren kan inspektera kontinuitet och avvikelser.',
    },
    {
      type: 'paragraph',
      html: 'Efter att båda bilderna har laddats, använd delningsreglaget för att exponera mer eller mindre av någon av sidorna. Justera den horisontella förskjutningen för att synkronisera refflornas faser, rotera sedan den misstänkta bilden för att kompensera för kameravinkel eller verktygsvinkel. Zoom hjälper till när de två bilderna har tagits med olika förstoringar. Kontrast och ljusstyrka hjälper till att avslöja svaga repor eller ytliga spår, men dessa justeringar bör dokumenteras eftersom de ändrar bildens visade utseende.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Vad arbetsytan kan hjälpa dig att se',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'En bra delad vy gör det lättare att inspektera om två spår delar en jämförbar visuell struktur efter en noggrann inriktning.',
          points: ['Liknande refflings- eller ryggriktning', 'Kontinuitet över flera angränsande detaljer', 'Skal- och rotationsskillnader som behöver korrigeras', 'Områden där spårkvaliteten är tillräckligt stark för att inspekteras', 'Uppenbara avvikelser i klasskaraktäristika som kan avsluta jämförelsen tidigt'],
        },
        {
          title: 'Vad den inte kan bevisa',
          icon: 'mdi:alert-circle-outline',
          description: 'Detta webbläsarverktyg är inte ett validerat forensiskt identifieringssystem och bör inte användas som ett sådant.',
          points: ['Ingen automatiserad slutsats om samma källa', 'Ingen slumpmässig matchningssannolikhet', 'Ingen populationsfrekvensuppskattning', 'Inget substitut för granskning av originalbeviset', 'Ingen ersättning för laboratoriets kvalitetssäkring eller kollegial granskning'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Kontroll', 'Vad den ändrar', 'Varför det är viktigt'],
      rows: [
        ['Ladda känd/testbild', 'Laddar kontroll- eller referensspåret.', 'Den kända sidan bör komma från ett dokumenterat testspår eller övningsexempel.'],
        ['Ladda misstänkt bild', 'Laddar spåret vars ursprung är okänt.', 'Denna sida flyttas och justeras för att söka efter en jämförbar orientering.'],
        ['Delningshandtag', 'Ändrar hur mycket av varje bild som är synlig.', 'En flyttbar delning hjälper till att kontrollera om linjer fortsätter visuellt över gränsen.'],
        ['Horisontell förskjutning', 'Flyttar den misstänkta bilden åt vänster eller höger.', 'Små laterala förskjutningar kan bringa motsvarande refflor i eller ur fas.'],
        ['Rotation', 'Roterar den misstänkta bilden.', 'Verktygsvinkel, kameravinkel och montering kan skapa vinkelavvikelser mellan bilderna.'],
        ['Zoom', 'Ändrar den visade förstoringen.', 'Olika bildskalor måste göras jämförbara innan detaljer bedöms.'],
        ['Kontrast och ljusstyrka', 'Justerar den visade synligheten.', 'Refflor med låg kontrast kan bli lättare att se, men justeringar bör noteras.'],
        ['Exportera vy', 'Sparar en PNG-fil av den aktuella inriktningen.', 'Användbart för klassrumsgranskning, anteckningar, diskussioner eller rapporter som tydligt anger begränsningar.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Bildkvalitet',
      title: 'En dålig bild kan göra en bra jämförelse omöjlig',
      html: 'Verktygsspårsjämförelse beror kraftigt på bildkvaliteten. Oskärpa, bländning, komprimeringsartefakter, starka skuggor, perspektivförvrängning och mycket korta refflingssekvenser kan alla skapa missledande visuella intryck. Om ett spår inte kan orienteras, skalas och belysas tydligt kan den lämpliga slutsatsen vara att bilden är olämplig för en meningsfull jämförelse.',
    },
    {
      type: 'summary',
      title: 'Praktisk checklista innan två spår jämförs',
      items: [
        'Bekräfta vilken bild som är det misstänkta spåret och vilken som är det kända testspåret.',
        'Kontrollera att båda bilderna visar samma allmänna spårtyp, verktygets kontaktyta och arbetsytans orientering.',
        'Undvik att jämföra enstaka isolerade linjer; leta efter sekvenser av angränsande detaljer som kvarstår över en användbar längd.',
        'Använd kontrast och ljusstyrka konservativt och dokumentera när bildförbättring har tillämpats.',
        'Exportera endast den inriktade vyn som en illustration av vad som visades, inte som ett bevis på identitet.',
      ],
    },
    {
      type: 'title',
      text: 'Kända mot misstänkta verktygsspår',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ett misstänkt verktygsspår säkras vanligtvis från ett föremål inblandat i en incident, till exempel ett brytmärke på en dörr, ett snitt på en tråd, ett skrapmärke på metall eller ett tryckmärke på en mjukare yta. Ett känt spår produceras från ett misstänkt verktyg under kontrollerade eller dokumenterade förhållanden. I formellt forensiskt arbete överväger granskare om klasskaraktäristika är konsekventa innan de lägger tid på fina refflingsdetaljer. Om klasskaraktäristika inte stämmer överens är mikroskopisk likhet i ett litet område inte tillräckligt för att stödja en koppling.',
    },
    {
      type: 'paragraph',
      html: 'Webbläsarens arbetsyta är avsiktligt konservativ. Den hjälper dig att rikta in bilder och diskutera visuella detaljer, men den modellerar inte verktygsslitage, underklasskaraktäristika, deformation av underlaget, tillverkningsmärken, granskartrösklar, mätosäkerhet eller felmarginaler. Ett ansvarsfullt arbetsflöde behandlar den exporterade bilden som ett kommunikationshjälpmedel, inte som ett identifieringsresultat.',
    },
    {
      type: 'proscons',
      title: 'Styrkor och begränsningar med verktygsspårsjämförelse online',
      items: [
        { pro: 'Snabbt sätt att ladda två bilder och inspektera inriktningen utan att installera skrivbordsprogramvara.', con: 'Webbläsarvyn är inte ett kalibrerat forensiskt jämförelsemikroskop.' },
        { pro: 'Användbart för att lära ut hur delad vy och orientering påverkar vad en användare ser.', con: 'Bildförbättring kan förbättra synligheten men kan också förändra hur detaljer framstår.' },
        { pro: 'Exporterade PNG-vyer är användbara för anteckningar, diskussioner och visuella förklaringar.', con: 'En exporterad vy bevarar inte hela beviskontexten, metadata eller förvaringskedjan.' },
        { pro: 'Fungerar med verkliga användaruppladdade bilder istället för enbart syntetiska spår.', con: 'Verktyget kan inte avgöra om två spår kom från samma verktyg.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Misstänkt spår', definition: 'Ett spår som säkrats från ett föremål eller en plats vars ursprung är okänt.' },
        { term: 'Känt testspår', definition: 'Ett kontrollerat spår gjort med ett specifikt verktyg för jämförelse med det misstänkta spåret.' },
        { term: 'Reffling', definition: 'En mikroskopisk linje eller rygg som skapas när ett verktygs yta glider över ett annat material.' },
        { term: 'Klasskaraktäristika', definition: 'Egenskaper som delas av en grupp verktyg, såsom bladbredd, allmän form eller verktygstyp.' },
        { term: 'Individuella karaktäristika', definition: 'Fina ytstrukturer som kan uppstå genom tillverkning, användning, skada eller slitage.' },
        { term: 'Underklasskaraktäristika', definition: 'Egenskaper som delas av en undergrupp av verktyg på grund av tillverkningsprocesser; de kan komplicera tolkningen av ursprung.' },
        { term: 'Lämplighet', definition: 'En bedömning av om ett spår innehåller tillräcklig kvalitet och mängd detaljer för att stödja en jämförelse.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bra söktermer som denna sida är utformad för att besvara',
      html: 'Användare som letar efter den här typen av arbetsyta söker ofta efter fraser som <strong>jämförelsemikroskop för verktygsspår online</strong>, <strong>forensisk refflingsjämförelse</strong>, <strong>kända mot misstänkta verktygsspår</strong>, <strong>jämför verktygsspår från bilder</strong> och <strong>forensisk jämförelsemikroskopsimulator</strong>. Sidan är byggd kring dessa verkliga uppgifter: ladda upp, rikta in, inspektera, dokumentera och förstå begränsningar.',
    },
    {
      type: 'table',
      headers: ['Vanlig användarfråga', 'Kort svar'],
      rows: [
        ['Kan jag ladda upp mina egna verktygsspårsbilder?', 'Ja. Verktyget är utformat kring användaruppladdade kända och misstänkta bilder.'],
        ['Avgör appen om båda spåren matchar?', 'Nein. Den stöder endast visuell inriktning och gör ingen forensisk ursprungsslutsats.'],
        ['Varför rör sig den misstänkta bilden istället för båda?', 'Att hålla den kända sidan stabil gör det lättare att dokumentera hur den misstänkta bilden justerades.'],
        ['Kan jag använda den för skjutvapen- eller hylsspår?', 'Den kan hjälpa till att demonstrera bildinriktningskoncept, men skjutvapen- och patronjämförelse kräver disciplinspecifika procedurer och validerad granskning.'],
        ['Kan jag inkludera den exporterade PNG-bilden i mina anteckningar?', 'Ja, om den tydligt beskrivs som en illustrativ vy som skapats med visuella justeringskontroller.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensisk försiktighet',
      title: 'Använd ett försiktigt språk när du beskriver jämförelser av verktygsspår',
      html: 'Undvik att göra en visuell inriktning till en starkare slutsats än vad bevisen stöder. Lämpligt språk beror på jurisdiktion, laboratoriepolicy, validering, bildkvalitet, granskarens bedömning och fallkontext. Detta onlineverktyg bör beskrivas som ett visuellt jämförelsehjälpmedel, inte som en validerad metod för att individualisera ett verktyg.',
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
