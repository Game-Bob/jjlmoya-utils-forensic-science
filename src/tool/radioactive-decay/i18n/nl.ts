import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'halfwaardetijd-radioactief-verval-calculator';
const title = 'Calculator voor halfwaardetijd en radioactief verval';
const description = 'Simuleer radioactief verval met echte isotopen, de halfwaardetijdformule, een stochastisch atoomveld, resterende hoeveelheid en relatieve activiteit.';

const howTo = [
  { name: 'Kies een isotoop', text: 'Begin met Koolstof-14, Jodium-131, Uranium-238, Technetium-99m of Radon-222. Elke preset laadt een realistische halfwaardetijd en de wetenschappelijke context waarin die vaak wordt gebruikt.' },
  { name: 'Stel monster en tijd in', text: 'Pas het aantal weergegeven atomen aan en schuif de tijd vooruit om te zien hoe de resterende fractie de exponentiele halfwaardetijdwet volgt.' },
  { name: 'Vergelijk exacte berekening en atomair toeval', text: 'Gebruik het deterministische resultaat als verwachte waarde en bekijk het atoomveld om te begrijpen waarom kleine monsters rond de theoretische curve schommelen.' },
  { name: 'Lees de activiteit', text: 'De activiteit daalt in dezelfde verhouding als de niet-vervallen kernen, dus de meter toont hoeveel stralingssnelheid overblijft ten opzichte van het beginmonster.' },
];

const faq = [
  { question: 'Wat betekent halfwaardetijd?', answer: 'Halfwaardetijd is de tijd waarin gemiddeld de helft van de instabiele kernen in een monster vervalt. Na een halfwaardetijd blijft 50% over, na twee 25% en na drie 12,5%.' },
  { question: 'Waarom klopt het atoomveld niet altijd precies met het percentage?', answer: 'Radioactief verval is probabilistisch. De formule geeft de verwachte fractie voor een zeer groot monster, terwijl het veld individuele atomen met willekeurige drempels simuleert. Kleine monsters tonen vanzelf statistische ruis.' },
  { question: 'Is de activiteitsmeter hetzelfde als de resterende atomen?', answer: 'Voor een enkele isotoop is activiteit evenredig met het aantal niet-vervallen kernen. Als 30% van de atomen overblijft, is de momentane activiteit ook ongeveer 30% van de beginactiviteit.' },
  { question: 'Kan deze calculator worden gebruikt voor koolstofdatering?', answer: 'Ja, voor conceptuele berekeningen. Koolstof-14-datering vergelijkt de resterende activiteit met levend materiaal, maar echte laboratoriumdatering corrigeert ook kalibratiecurven, besmetting en monstervoorbereiding.' },
  { question: 'Vervalt elke isotoop naar een enkel stabiel product?', answer: 'Niet altijd. Sommige isotopen vervallen via reeksen met meerdere dochterproducten. Deze tool modelleert de halfwaardetijd van de moederisotoop, de belangrijkste grootheid voor resterende moederkernen en activiteit.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotoop',
    sampleAtoms: 'Atomen in monster',
    elapsedTime: 'Verstreken tijd',
    halfLife: 'Halfwaardetijd',
    remaining: 'Resterend',
    decayed: 'Vervallen',
    activity: 'Relatieve activiteit',
    timeUnit: 'Tijdseenheid',
    expectedCurve: 'Verwachte curve',
    atomField: 'Atoomveld',
    presetUse: 'Gebruik',
    oneHalfLife: '1 halfwaardetijd',
    twoHalfLives: '2 halfwaardetijden',
    fourHalfLives: '4 halfwaardetijden',
    custom: 'Aangepast',
    liveAtoms: 'Actieve atomen',
    decayedAtoms: 'Vervallen atomen',
    resetSeed: 'Nieuw atoompatroon',
  },
  seo: [
    { type: 'title', text: 'Halfwaardetijdcalculator: resterende atomen, activiteit en voorbeelden van isotopen', level: 2 },
    { type: 'paragraph', html: 'Gebruik deze calculator voor radioactief verval om te schatten hoeveel van een instabiele isotoop overblijft na een gekozen tijd. De pagina sluit aan op veelvoorkomende zoekvragen: de formule vinden, die toepassen op echte isotopen, resterende moederkernen vergelijken met vervallen kernen en begrijpen waarom activiteit afneemt.' },
    { type: 'paragraph', html: 'De numerieke resultaten gebruiken de exponentiele vervalvergelijking, terwijl het atoomveld individuele kernen met stochastische drempels simuleert. Daardoor werkt de tool zowel als snelle calculator als visuele uitleg.' },
    { type: 'title', text: 'Formule voor radioactief verval', level: 3 },
    { type: 'paragraph', html: 'De formule is <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> is het startaantal moederkernen, <strong>N(t)</strong> het verwachte aantal na tijd <strong>t</strong>, en <strong>T1/2</strong> de halfwaardetijd. De verhouding <strong>t / T1/2</strong> telt hoeveel halfwaardetijden zijn verstreken.' },
    { type: 'paragraph', html: 'Begint een monster met 1.000 moederkernen en verstrijken twee halfwaardetijden, dan blijft verwacht 1.000 x (1/2)^2 = 250 kernen over. De overige 750 zijn vervallen.' },
    { type: 'table', headers: ['Verstreken tijd', 'Factor', 'Moederkernen over', 'Relatieve activiteit'], rows: [['0 halfwaardetijden', '(1/2)^0', '100%', '100%'], ['1 halfwaardetijd', '(1/2)^1', '50%', '50%'], ['2 halfwaardetijden', '(1/2)^2', '25%', '25%'], ['3 halfwaardetijden', '(1/2)^3', '12,5%', '12,5%'], ['5 halfwaardetijden', '(1/2)^5', '3,125%', '3,125%'], ['10 halfwaardetijden', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Activiteit en voorbeelden', level: 3 },
    { type: 'paragraph', html: 'Voor een enkele moederisotoop is activiteit evenredig met het aantal niet-vervallen kernen. Daarom volgt resterende activiteit dezelfde exponentiele factor als de resterende hoeveelheid.' },
    { type: 'table', headers: ['Isotoop', 'Halfwaardetijd', 'Typisch gebruik', 'Wat het resultaat laat zien'], rows: [['Koolstof-14', '5.730 jaar', 'Radiokoolstofdatering', 'Hoeveel Koolstof-14-activiteit in ooit levend materiaal resteert.'], ['Jodium-131', '8,02 dagen', 'Therapie en nucleaire incidenten', 'Hoe activiteit over dagen afneemt.'], ['Technetium-99m', '6,01 uur', 'Diagnostische beeldvorming', 'Waarom bruikbare medische activiteit binnen een werkdag daalt.'], ['Uranium-238', '4,47 miljard jaar', 'Geologische datering', 'Waarom zeer langlevende isotopen meetbaar blijven.'], ['Radon-222', '3,82 dagen', 'Binnenstraling', 'Hoe een gasvormige blootstellingsbron verandert.']] },
    { type: 'title', text: 'Stochastische simulatie en beperkingen', level: 3 },
    { type: 'paragraph', html: 'Het atoomveld is bewust stochastisch: individuele kernen vervallen willekeurig, terwijl grote aantallen de gladde curve benaderen. Halfwaardetijd betekent dus geen plots verdwijnen van exact de helft, maar een constante kans op verval per tijdseenheid.' },
    { type: 'list', items: ['<strong>Onderwijs:</strong> koppel formule en visueel model.', '<strong>Nucleaire chemie:</strong> vergelijk stabiliteit en activiteit.', '<strong>Radiokoolstof:</strong> begrijp waarom oude monsters minder Koolstof-14 bevatten.', '<strong>Medische isotopen:</strong> zie waarom korte halfwaardetijden nuttig zijn.', '<strong>Stralingsveiligheid:</strong> schat relatieve activiteit zonder halfwaardetijd verkeerd te interpreteren.'] },
    { type: 'paragraph', html: 'De calculator modelleert een moederisotoop met een enkele halfwaardetijd. Echte metingen kunnen correcties vereisen voor detectorrendement, achtergrondstraling, vertakkingsverhoudingen, dochterproducten, biologische klaring, chemische vorm, afscherming en kalibratiecurven. Gebruik dit als leer- en schattingsmodel, niet als medisch, dosimetrisch of laboratoriumadvies.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

