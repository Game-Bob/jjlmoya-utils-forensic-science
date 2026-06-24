import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensisk-biologisk-konsbestamning-morfologi-skalle-baechen-bayesiansk-modell';
const title = 'Forensisk Antropologisk Könbestämmare';
const description = 'Uppskatta biologiskt kön från kranie- och bäckenmorfologi med hjälp av en bayesiansk sannolikhetsmodell.';

const howTo = [
  {
    name: 'Välj anatomisk region att analysera',
    text: 'Bestäm om du vill analysera bäckenet, kraniet eller båda. Att utvärdera båda områdena ökar noggrannheten och tillförlitligheten för den slutliga biologiska könsbestämningen.',
  },
  {
    name: 'Utvärdera varje morfologiskt drag',
    text: 'Undersök benproverna och betygsätt nyckelindikatorerna på en skala från 1 (hyperfeminin) till 5 (hypermaskulin) baserat på visuella landmärken.',
  },
  {
    name: 'Ange poäng i den bayesianska motorn',
    text: 'Använd skjutreglagen för att ange poängen för varje drag. Klassificeraren uppdaterar automatiskt posterior-sannolikheten för manliga och kvinnliga kategorier.',
  },
  {
    name: 'Tolka sannolikhetsresultaten',
    text: 'Granska den slutliga konfidensindikatorn, den dominerande könsklassificeringen och läs de forensiska diagnostiska anteckningarna för att förstå de biologiska variationerna.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Vad är Phenice-metoden vid könsbestämning av bäckenet?',
    answer: 'Phenice-metoden, publicerad av T. W. Phenice 1969, fokuserar på tre specifika bäckenegenskaper: den ventrala bågen, den subpubiska konkaviteten och den mediala aspekten av ramus ischiopubicus. Det förblir en av de mest pålitliga morfologiska metoderna inom forensisk antropologi, med noggrannhetssiffror som överstiger 95 procent när den tillämpas på välbevarade skelettdelar.',
  },
  {
    key: 'faq-2',
    question: 'Varför föredras bäckenet framför kraniet för könsuppskattning?',
    answer: 'Bäckenet är den mest könsdimorfa delen av det mänskliga skelettet eftersom det återspeglar funktionell anpassning för barnafödande hos kvinnor. Evolutionärt tryck har format det kvinnliga bäckenet att vara bredare, grundare och ha bredare vinklar än det manliga bäckenet, medan kranie-dimorfism främst är relaterad till allmän kroppsstorlek och muskelutveckling.',
  },
  {
    key: 'faq-3',
    question: 'Hur uppskattar den bayesianska klassificeraren könssannolikhet?',
    answer: 'Vår klassificerare använder en bayesiansk uppdateringsmodell. Den antar en a priori-sannolikhet på 50 procent för båda könen. För varje anatomisk markör som poängsätts multiplicerar modellen a priori-sannolikheten med sannolikheten att erhålla just den poängen i manliga jämfört med kvinnliga populationer.',
  },
  {
    key: 'faq-4',
    question: 'Vad representerar poängen 3 i morfologisk analys?',
    answer: 'Poängen 3 representerar en obestämd eller neutral morfologi. Detta indikerar att draget uppvisar egenskaper som ligger mitt i spektrumet av mänsklig könsdimorfism, och visar varken typiskt kvinnliga (1-2) eller typiskt manliga (4-5) drag.',
  },
  {
    key: 'faq-5',
    question: 'Kan denna modell könsbestämma skelettdelar från barn?',
    answer: 'Nej. Morfologisk könsbestämning är mycket opålitlig för barn och ungdomar före puberteten, eftersom de morfologiska egenskaper som skiljer manliga och kvinnliga skelett inte utvecklas fullt ut förrän efter puberteten. Forensiska antropologer förlitar sig i allmänhet på genetiska tester eller dentala indikatorer för barn.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Bäckenmorfologi',
    craniumRegion: 'Kraniemorfologi',
    subpubicAngle: 'Subpubisk Vinkel',
    subpubicAngleDesc: 'Vinkeln som bildas under blygdbensfogen.',
    subpubicAngleFem: 'Bred U-formad vinkel (>90°)',
    subpubicAngleMasc: 'Smal V-formad vinkel (<70°)',
    sciaticNotch: 'Stora Inskärningen',
    sciaticNotchDesc: 'Den stora inskärningen (sciatic notch) i bakre ilium.',
    sciaticNotchFem: 'Bred och grund inskärning',
    sciaticNotchMasc: 'Smal och djup inskärning',
    ventralArc: 'Ventral Båge',
    ventralArcDesc: 'Benkam som löper över främre pubis.',
    ventralArcFem: 'Tydlig upphöjd benkam',
    ventralArcMasc: 'Saknad eller mycket svag linje',
    preauricularSulcus: 'Preaurikulär Fåra',
    preauricularSulcusDesc: 'Fåra intill sakroiliakaleden.',
    preauricularSulcusFem: 'Djup, gropig fåra',
    preauricularSulcusMasc: 'Saknad eller helt slät',
    mastoidProcess: 'Mastoidutskott',
    mastoidProcessDesc: 'Benutskott bakom hörselgången.',
    mastoidProcessFem: 'Litet och kort utskott',
    mastoidProcessMasc: 'Stort och långt utskott',
    supraorbitalRidge: 'Supraorbitalbåge',
    supraorbitalRidgeDesc: 'Framskjutande av ögonbrynsbågen (glabella).',
    supraorbitalRidgeFem: 'Slät, platt panna',
    supraorbitalRidgeMasc: 'Framträdande, utskjutande båge',
    mentalEminence: 'Hakutskott',
    mentalEminenceDesc: 'Hakans form och framträdande karaktär.',
    mentalEminenceFem: 'Rundad, spetsig haka',
    mentalEminenceMasc: 'Bred, fyrkantig haka',
    nuchalCrest: 'Nackkam',
    nuchalCrestDesc: 'Benkammar på baksidan av kraniet.',
    nuchalCrestFem: 'Slät nackyta',
    nuchalCrestMasc: 'Grov, hake-liknande nackutskott',
    selectOption: 'Välj poäng...',
    score1: '1 - Hyperfeminin',
    score2: '2 - Feminin',
    score3: '3 - Obestämd',
    score4: '4 - Maskulin',
    score5: '5 - Hypermaskulin',
    notEvaluated: 'Ej utvärderad',
    resultsTitle: 'Resultat av Könsbestämning',
    femaleProbLabel: 'Sannolikhet Kvinna',
    maleProbLabel: 'Sannolikhet Man',
    predominantLabel: 'Dominerande Klassificering',
    confidenceLabel: 'Konfidens för Uppskattning',
    weakConf: 'Svag (Få indikatorer utvärderade)',
    moderateConf: 'Moderat',
    strongConf: 'Stark',
    femaleClass: 'Kvinna',
    maleClass: 'Man',
    indeterminateClass: 'Obestämd',
    noteNoData: 'Vänligen utvärdera minst en anatomisk markör för att påbörja beräkningarna.',
    noteTriageOnly: 'Detta är ett pedagogiskt screeningverktyg. Formell forensisk bedömning kräver metrisk analys och granskning av flera experter.',
    noteBayesianEst: 'Sannolikheter beräknas dynamiskt med hjälp av en icke-parametrisk bayesiansk sannolikhetsmatris.',
    pelvicTitle: 'Referensguide för Bäcken',
    cranialTitle: 'Referensguide för Kranium',
    pelvisDesc: 'Det kvinnliga bäckenet är anpassat för barnafödande, vilket resulterar i bredare strukturer och flackare vinklar. Det manliga bäckenet är mer robust, smalt och vertikalt orienterat.',
    cranialDesc: 'Det manliga kraniet är i allmänhet större och mer robust, med större mastoidutskott, framträdande ögonbrynsbågar och grova muskelfästen. Det kvinnliga kraniet är mer gracilt, med slätare nackkam och rundad haka.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introduktion till osteologisk könsbestämning inom forensisk antropologi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att uppskatta biologiskt kön är ett av de primära stegen i att upprätta en biologisk profil för okända skelettrester inom forensisk antropologi, toxikologi och arkeologi. Tillsammans med kroppslängd, ålder vid dödstillfället och populationstillhörighet hjälper könsuppskattning till att begränsa sökandet efter försvunna personer. Mänskliga skelett uppvisar könsdimorfism, vilket är de fysiska skillnaderna mellan hanar och honor av en art. Denna dimorfism återspeglas i både storlek (robusticitet kontra gracilitet) och form (särskilt bäckenanpassningar relaterade till förlossning).',
    },
    {
      type: 'paragraph',
      html: 'Detta interaktiva verktyg gör det möjligt för forensiska studenter, rättsläkare och praktikanter att utvärdera morfologiska landmärken på bäckenet och kraniet. Genom att ange poäng baserat på visuella guider kan användare observera hur enskilda benmarkörer bidrar till en kumulativ statistisk modell.',
    },
    {
      type: 'title',
      text: 'Bäckendimorfism och Phenice-metoden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bäckenet är allmänt erkänt som den mest exakta regionen i skelettet för biologisk könsbestämning. Kvinnliga bäcken är bredare, har en större förlossningskanal, en bredare sciatic notch och en subpubisk vinkel som överstiger nittio grader. Omvänt kännetecknas manliga bäcken av smala, V-formade subpubiska vinklar och en smal sciatic notch. Phenice-metoden fokuserar på tre specifika egenskaper hos blygdbenet: den ventrala bågen, den subpubiska konkaviteten und den mediala aspekten av ramus ischiopubicus. Förekomsten av en välavgränsad ventral båge är en exceptionellt stark indikator på kvinnligt kön, medan dess frånvaro är typisk för män.',
    },
    {
      type: 'title',
      text: 'Kraniedimorfism und robusthetsmarkörer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När bäckenben saknas eller är dåligt bevarade fungerar kraniet som det primära alternativet för könsuppskattning. Kranieutvärdering baseras på robusticitet, eftersom manliga kranier i allmänhet uppvisar mer uttalade muskelfästen och större benutskott på grund av hormondrivna utvecklingsskillnader. Mastoidutskottet bakom örat är större och bredare hos män. Supraorbitalbågen eller glabella är framträdande och utskjutande hos män, medan den förblir slät och vertikal hos kvinnor. Hakan (mental eminence) tenderar att vara fyrkantig och bred hos män, medan kvinnor uppvisar en mer rundad, spetsig hakstruktur.',
    },
    {
      type: 'table',
      headers: ['Anatomiskt landmärke', 'Kvinnliga egenskaper (Poäng 1-2)', 'Manliga egenskaper (Poäng 4-5)', 'Forensiskt värde'],
      rows: [
        ['Subpubisk vinkel', 'Bred, trubbig vinkel (ofta över 90 grader).', 'Smal, spetsig vinkel (vanligtvis under 70 grader).', 'Högsta individuella diagnostiska värde för könsbestämning av bäckenet.'],
        ['Sciatic Notch', 'Bred, grund inskärning som liknar en U-form.', 'Smal, djup inskärning som liknar en tumform.', 'Extremt hållbar markör, ofta bevarad i fragmenterade rester.'],
        ['Mastoidutskott', 'Litet, kort och skjuter ut minimalt under hörselgången.', 'Stort, långt och skjuter ut betydligt nedåt.', 'Pålitlig kraniemarkör, resistent mot vittring.'],
        ['Supraorbitalbåge', 'Slät, platt glabella med en vertikal pannprofil.', 'Framträdande, utskjutande båge med en sluttande panna.', 'Skiljer robusta manliga kranier från gracila kvinnliga kranier.'],
      ],
    },
    {
      type: 'title',
      text: 'Bayesiansk matematisk modellering i morfologisk klassificering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditionella forensiska bedömningar förlitar sig ofta på subjektiv klassificering, vilket kan leda till observatörsbias. Modern forensisk antropologi införlivar statistiska sannolikhetsmodeller för att kvantifiera osäkerhet. Bayesiansk statistik är idealisk för detta ändamål, då den utgår från en lika a priori-sannolikhet (50 procent man, 50 procent kvinna) och uppdaterar denna allteftersom nya bevis läggs till. När bäckendrag visar en mycket kvinnlig morfologi (bred subpubisk vinkel, poäng 1), stiger sannolikheten för kvinnlig klassificering och åsidosätter mellanliggande eller motstridiga markörer i kraniet.',
    },
    {
      type: 'paragraph',
      html: 'Denna digitala simulator implementerar en icke-parametrisk bayesiansk motor. Beräkningarna ger en sannolikhet i procent snarare än ett binärt resultat, vilket stämmer överens med moderna forensiska riktlinjer som betonar rapportering av konfidensintervall och felmarginaler i domstolsvittnesmål. Klassificeringens konfidens beror på antalet landmärken som utvärderas, där poäng från både bäcken- och kranieområden ger de mest robusta resultaten.',
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
