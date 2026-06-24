import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-geslachtsbepaling-schedel-bekken-morfologie-bayesiaans-model';
const title = 'Forensische Antropologische Geslachtsbepaler';
const description = 'Schat het biologische geslacht in op basis van schedel- en bekkenmorfologie met behulp van een bayesiaans kansmodel.';

const howTo = [
  {
    name: 'Selecteer de te analyseren anatomische regio',
    text: 'Beslis of u het bekken, de schedel of beide wilt analyseren. Het evalueren van beide gebieden verhoogt de nauwkeurigheid en betrouwbaarheid van de uiteindelijke biologische geslachtsbepaling.',
  },
  {
    name: 'Beoordeel elk morfologisch kenmerk',
    text: 'Onderzoek de botpreparaten en scoor de belangrijkste indicatoren op een schaal van 1 (hyperfeminien) tot 5 (hypermasculien) op basis van visuele herkenningspunten.',
  },
  {
    name: 'Voer de scores in de Bayesiaanse module in',
    text: 'Gebruik de schuifregelaars om de score voor elk kenmerk in te voeren. De classifier bijwerkt automatisch de posterior-waarschijnlijkheid voor mannelijke en vrouwelijke categorieën.',
  },
  {
    name: 'Interpreteer de waarschijnlijkheidsresultaten',
    text: 'Bekijk de uiteindelijke betrouwbaarheidsindicator, de overheersende geslachtsklassificatie en lees de forensische diagnostische notities om de biologische variaties te begrijpen.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Wat is de Phenice-methode bij geslachtsbepaling via het bekken?',
    answer: 'De Phenice-methode, gepubliceerd door T. W. Phenice in 1969, richt zich op drie specifieke bekkenkenmerken: de ventrale boog, de subpubische concaviteit en het mediale aspect van de ramus ischiopubicus. Het blijft een van de meest betrouwbare morfologische methoden in de forensische antropologie, met nauwkeurigheidspercentages van meer dan 95 procent bij goed geconserveerde skeletresten.',
  },
  {
    key: 'faq-2',
    question: 'Waarom heeft het bekken de voorkeur boven de schedel voor geslachtsschatting?',
    answer: 'Het bekken is het meest seksueel dimorfe deel van het menselijk skelet omdat het de functionele aanpassing voor de bevalling bij vrouwen weerspiegelt. Evolutionaire druk heeft het vrouwelijke bekken gevormd om breder, ondieper en met grotere hoeken te zijn dan het mannelijke bekken, terwijl schedeldimorfisme voornamelijk verband houdt met de algehele lichaamsgrootte en spierontwikkeling.',
  },
  {
    key: 'faq-3',
    question: 'Hoe schat de Bayesiaanse classifier de geslachtskans?',
    answer: 'Onze classifier maakt gebruik van een Bayesiaans updatemodel. Het gaat uit van een a priori waarschijnlijkheid van 50 procent voor beide geslachten. Voor elke gescoorde anatomische marker vermenigvuldigt het model de a priori kans met de aannemelijkheid van het verkrijgen van die specifieke score in mannelijke versus vrouwelijke populaties.',
  },
  {
    key: 'faq-4',
    question: 'Wat vertegenwoordigt een score van 3 in morfologische analyse?',
    answer: 'Een score van 3 vertegenwoordigt een onbepaalde of neutrale morfologie. Dit geeft aan dat het kenmerk eigenschappen vertoont die in het midden van het spectrum van menselijk seksueel dimorfisme liggen en noch typisch vrouwelijke (1-2) noch typisch mannelijke (4-5) kenmerken vertonen.',
  },
  {
    key: 'faq-5',
    question: 'Kan dit model het geslacht van skeletresten van kinderen bepalen?',
    answer: 'Nee. Morfologische geslachtsbepaling is zeer onbetrouwbaar voor skeletresten van kinderen en jongeren vóór de puberteit, omdat de morfologische kenmerken die mannelijke en vrouwelijke skeletten differentiëren zich pas tijdens de puberteit volledig ontwikkelen. Forensisch antropologen vertrouwen in zulke gevallen op genetische tests of dentale indicatoren.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Bekkenmorfologie',
    craniumRegion: 'Schedelmorfologie',
    subpubicAngle: 'Subpubische Hoek',
    subpubicAngleDesc: 'De hoek die wordt gevormd onder de symfysis pubica.',
    subpubicAngleFem: 'Brede U-vormige hoek (>90°)',
    subpubicAngleMasc: 'Smalle V-vormige hoek (<70°)',
    sciaticNotch: 'Grote Inham',
    sciaticNotchDesc: 'De grote insnijding (sciatic notch) in het achterste ilium.',
    sciaticNotchFem: 'Brede, ondiepe U-inham',
    sciaticNotchMasc: 'Smalle, diepe inham',
    ventralArc: 'Ventrale Boog',
    ventralArcDesc: 'Botkam die over de voorste pubis loopt.',
    ventralArcFem: 'Duidelijk verhoogde botkam',
    ventralArcMasc: 'Ontbrekende of zeer zwakke lijn',
    preauricularSulcus: 'Preauriculaire Groef',
    preauricularSulcusDesc: 'Groef grenzend aan het sacro-iliacale gewricht.',
    preauricularSulcusFem: 'Diepe, geputte groef',
    preauricularSulcusMasc: 'Ontbrekend of volledig glad',
    mastoidProcess: 'Tepelvormig Aanhangsel',
    mastoidProcessDesc: 'Botuitsteeksel achter de gehoorgang.',
    mastoidProcessFem: 'Klein, kort uitsteeksel',
    mastoidProcessMasc: 'Groot, lang uitsteeksel',
    supraorbitalRidge: 'Wenkbrauwboog',
    supraorbitalRidgeDesc: 'Uitsteeksel van de wenkbrauwboog (glabella).',
    supraorbitalRidgeFem: 'Glad, vlak voorhoofd',
    supraorbitalRidgeMasc: 'Prominente, uitstekende boog',
    mentalEminence: 'Kinuitsteeksel',
    mentalEminenceDesc: 'Vorm en prominentie van de kin.',
    mentalEminenceFem: 'Ronde, puntige kin',
    mentalEminenceMasc: 'Brede, vierkante kin',
    nuchalCrest: 'Nekkam',
    nuchalCrestDesc: 'Botkammen aan de achterkant van de schedel.',
    nuchalCrestFem: 'Glad achterhoofdsoppervlak',
    nuchalCrestMasc: 'Ruwe, haakvormige nekspoor',
    selectOption: 'Kies score...',
    score1: '1 - Hyperfeminien',
    score2: '2 - Feminien',
    score3: '3 - Onbepaald',
    score4: '4 - Masculien',
    score5: '5 - Hypermasculien',
    notEvaluated: 'Niet beoordeeld',
    resultsTitle: 'Resultaten van Geslachtsbepaling',
    femaleProbLabel: 'Waarschijnlijkheid Vrouw',
    maleProbLabel: 'Waarschijnlijkheid Man',
    predominantLabel: 'Overheersende Klassificatie',
    confidenceLabel: 'Schattingsbetrouwbaarheid',
    weakConf: 'Zwak (Weinig indicatoren beoordeeld)',
    moderateConf: 'Matig',
    strongConf: 'Sterk',
    femaleClass: 'Vrouw',
    maleClass: 'Man',
    indeterminateClass: 'Onbepaald',
    noteNoData: 'Beoordeel ten minste één anatomische marker om met de berekeningen te beginnen.',
    noteTriageOnly: 'Dit is een educatief screeningshulpmiddel. Formele forensische beoordeling vereist metrische analyse en beoordeling door meerdere experts.',
    noteBayesianEst: 'Kansen worden dynamisch berekend met behulp van een niet-parametrische Bayesiaanse aannemelijkheidsmatrix.',
    pelvicTitle: 'Referentiehandleiding Bekken',
    cranialTitle: 'Referentiehandleiding Schedel',
    pelvisDesc: 'Het vrouwelijke bekken is aangepast voor de bevalling, wat resulteert in bredere structuren en vlakkere hoeken. Het mannelijke bekken is robuuster, nauwer en verticaal georiënteerd.',
    cranialDesc: 'De mannelijke schedel is over het algemeen groter en robuuster, met grotere tepelvormige aanhangsels, prominente wenkbrauwbogen en ruwe spieraanhechtingen. De vrouwelijke schedel is gracieler met gladdere kammen en een afgeronde kin.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introductie tot osteologische geslachtsbepaling in de forensische antropologie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het inschatten van het biologische geslacht is een van de primaire stappen bij het opstellen van een biologisch profiel voor onbekende skeletresten in de forensische antropologie, toxicologie en archeologie. Samen met lichaamslengte, leeftijd bij overlijden en populatie-affiniteit helpt geslachtsschatting om de pool van potentiële vermiste personen te verkleinen. Menselijke skeletten vertonen seksueel dimorfisme, wat de fysieke verschillen zijn tussen mannetjes en vrouwtjes van een soort. Dit dimorfisme komt tot uiting in zowel grootte (robuustheid versus graciliteit) als vorm (met name bekkenaanpassingen gerelateerd aan de bevalling).',
    },
    {
      type: 'paragraph',
      html: 'Dit interactieve hulpmiddel stelt forensische studenten, lijkschouwers und stagiaires in staat om morfologische kenmerken van het bekken en de schedel te beoordelen. Door scores in te voeren op basis van visuele gidsen, kunnen gebruikers observeren hoe individuele botmarkers bijdragen aan een cumulatief statistisch model.',
    },
    {
      type: 'title',
      text: 'Bekkendimorfisme en de Phenice-methode',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het bekken is algemeen erkend als de meest nauwkeurige regio van het skelet voor biologische geslachtsbepaling. Vrouwelijke bekkens zijn breder, hebben een groter geboortekanaal, een bredere sciatic notch en een subpubische hoek die groter is dan negentig graden. Omgekeerd worden mannelijke bekkens gekenmerkt door smalle, V-vormige subpubische hoeken en een smalle sciatic notch. De Phenice-methode richt zich op drie specifieke kenmerken van het schaambeen: de ventrale boog, de subpubische concaviteit en het mediale aspect van de ramus ischiopubicus. De aanwezigheid van een goed gedefinieerde ventrale boog is een uitzonderlijk sterke indicator voor het vrouwelijke geslacht, terwijl de afwezigheid ervan typisch is bij mannen.',
    },
    {
      type: 'title',
      text: 'Schedeldimorfisme en robuustheidsmarkers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer bekkenbotten ontbreken of slecht bewaard zijn gebleven, dient de schedel als het primaire alternatief voor geslachtsschatting. Schedelbeoordeling is gebaseerd op robuustheid, omdat mannelijke schedels over het algemeen meer uitgesproken spieraanhechtingsplaatsen en grotere botuitsteeksels vertonen als gevolg van hormoongestuurde ontwikkelingsverschillen. Het tepelvormig aanhangsel achter het oor is groter en breder bij mannen. De wenkbrauwboog of glabella is prominent en steekt uit bij mannen, terwijl deze bij vrouwen glad en verticaal blijft. De kin (mental eminence) neigt vierkant en breed te zijn bij mannen, terwijl vrouwen een meer afgeronde, puntige kinstructuur vertonen.',
    },
    {
      type: 'table',
      headers: ['Anatomisch herkenningspunt', 'Vrouwelijke kenmerken (Scores 1-2)', 'Mannelijke kenmerken (Scores 4-5)', 'Forensische waarde'],
      rows: [
        ['Subpubische hoek', 'Brede, stompe hoek (vaak groter dan 90 graden).', 'Smalle, scherpe hoek (typisch minder dan 70 graden).', 'Hoogste individuele diagnostische waarde voor bekken-geslachtsbepaling.'],
        ['Sciatic Notch', 'Brede, ondiepe insnijding die lijkt op een U-vorm.', 'Smalle, diepe insnijding die lijkt op een duimvorm.', 'Extreem duurzame marker, vaak bewaard in gefragmenteerde resten.'],
        ['Tepelvormig aanhangsel', 'Klein, kort en steekt minimaal uit onder de gehoorgang.', 'Groot, lang und steekt aanzienlijk naar beneden uit.', 'Betrouwbare schedelmarker, bestand tegen verwering.'],
        ['Wenkbrauwboog', 'Gladde, vlakke glabella met een verticaal voorhoofdprofiel.', 'Prominente, uitstekende boog met een schuin voorhoofd.', 'Onderscheidt robuuste mannelijke schedels van graciele vrouwelijke schedels.'],
      ],
    },
    {
      type: 'title',
      text: 'Bayesiaanse wiskundige modellering in morfologische klassificaties',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditionele forensische beoordelingen vertrouwden op subjectieve classificatie, wat kon leiden til waarnemersbias. De moderne forensische antropologie maakt gebruik van statistische waarschijnlijkheidsmodellen om de onzekerheid te kwantificeren. Bayesiaanse statistiek is ideaal voor dit doel, beginnend met een gelijke a priori waarschijnlijkheid (vijftig procent man, vijftig procent vrouw) en deze bijwerkend naarmate nieuw bewijs wordt geïntroduceerd. Wanneer bekkenkenmerken een sterk vrouwelijke morfologie vertonen (brede subpubische hoek, score 1), stijgt de kans op vrouwelijke classificatie en overheerst eventuele intermediaire of tegenstrijdige markers in de schedel.',
    },
    {
      type: 'paragraph',
      html: 'Deze digitale simulator implementeert een niet-parametrische Bayesiaanse module. De berekeningen geven een waarschijnlijkheidspercentage in plaats van een rigide binaire output, wat aansluit bij moderne forensische richtlijnen die de nadruk leggen op het rapporteren van betrouwbaarheidsintervallen en foutenpercentages in rechtbankverklaringen. De betrouwbaarheid van de classificatie hangt af van het aantal beoordeelde herkenningspunten, waarbij scores uit zowel de bekken- als de schedelregio de meest robuuste resultaten opleveren.',
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
