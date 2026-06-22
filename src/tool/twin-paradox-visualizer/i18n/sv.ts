import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'tvillingparadox-visualiserare';
const title = 'Tvillingparadox Visualiserare: Tidsdilatation inom Speciell Relativitetsteori';
const description = 'Visualisera hur speciell relativitetsteori gor sa att en snabbt resande tvilling atervander yngre an tvillingen som stannade pa jorden.';

const howTo = [
  {
    name: 'Stall in rymdskeppets hastighet',
    text: 'Anvand hastighetsreglaget for att valja en andel av ljushastigheten och se lorentzfaktorn oka.',
  },
  {
    name: 'Valj missionslangd i jordens referenssystem',
    text: 'Justera hur manga ar som passerar for tvillingen som blir kvar pa jorden under hela utresan och aterresan.',
  },
  {
    name: 'Jamfor klockorna och varldslinjerna',
    text: 'Las aldersgapet, forfluten tid pa rymdskeppet, avstand i jordens referenssystem och den bojda varldslinjen som markerar den resande tvillingens byte av inertialsystem.',
  },
];

const faq = [
  {
    question: 'Vad ar tvillingparadoxen inom speciell relativitetsteori?',
    answer: 'Tvillingparadoxen ar ett tankeexperiment dar en tvilling reser genom rymden med relativistisk hastighet och senare atervander till jorden yngre an tvillingen som stannade hemma. Det kanns paradoxalt eftersom varje tvilling inledningsvis kan beskriva den andra som rolig, men den resande tvillingen byter inertialsystem vid vandningen, sa de tva vagarna genom rumtiden ar inte symmetriska.',
  },
  {
    question: 'Varfor aldras den resande tvillingen mindre?',
    answer: 'Inom speciell relativitetsteori beror forfluten egentid pa vagen genom rumtiden. En klocka som rorelse med hastighet v relativt en inertial observator tickar langsammare med lorentzfaktorn gamma. Resenaren ackumulerar mindre egentid langs utresan och aterresan an den hemvarande tvillingen pa jorden.',
  },
  {
    question: 'Orsakar acceleration aldersskillnaden?',
    answer: 'Acceleration ar viktigt eftersom det later resenaren vanda riktning och aterforenas med jorden, men aldersgapet beraknas fran hela rumtidvagen, inte enbart fran acceleration. Aven om vandningen vore mycket kort skulle resvagen fortfarande innehalla mindre egentid an jordvagen.',
  },
  {
    question: 'Vad betyder lorentzfaktorn gamma?',
    answer: 'Lorentzfaktorn gamma ar lika med 1 delat med kvadratroten ur 1 minus v i kvadrat over c i kvadrat. Den talar om hur starkt tidsintervall, langder och energier skiljer sig mellan inertialsystem. Vid vardagliga hastigheter ar gamma nastan 1, men nara ljushastigheten stiger den kraftigt.',
  },
  {
    question: 'Kan denna effekt matas i verkligheten?',
    answer: 'Ja. Tidsdilatation har uppmtts med snabba partiklar, atomklockor ombord pa flygplan, satellitpositioneringssystem och partikelacceleratorer. Tvillingparadoxen anvander en extrem reseberattelse, men den underliggande klockeffekten ar en rutinmassigt verifierad del av modern fysik.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Tvillingparadox rumtidsvisualisering',
    controlsTitle: 'Tvillingparadox kontroller',
    worldlineLabel: 'Varldslinjediagram for jordtvillingen och den resande tvillingen',
    earthTwin: 'Jordtvillingens alder',
    travelingTwin: 'Resenarens alder',
    presetCruise: 'Kryssning',
    presetRelativistic: 'Relativistisk',
    presetExtreme: 'Extrem',
    velocityLabel: 'Rymdskeppets hastighet',
    earthYearsLabel: 'Forfluten tid pa jorden',
    ageGapLabel: 'Aldersgap vid aterforening',
    gammaLabel: 'Lorentzfaktor',
    shipTimeLabel: 'Resenarens egentid',
    distanceLabel: 'Vandningsavstand',
    yearsUnit: 'år',
    yearsShortUnit: 'år',
  },
  seo: [
    {
      type: 'title',
      text: 'Tvillingparadoxkalkylator for Speciell Relativitetsteori',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tvillingparadoxvisualiseraren forvandlar en av de mest kanda ideerna inom speciell relativitetsteori till ett interaktivt rumtidsdiagram. Stall in ett rymdskepps hastighet som en andel av ljushastigheten, valj hur manga ar som passerar pa jorden, och kalkylatorn beraknar lorentzfaktorn, resenarens egentid, aldersgapet vid aterforeningen och avstandet till vandningspunkten. Den visuella layouten separerar jordklockan fran rymdskeppsklockan sa att asymmetrin syns istallet for att vara dold i formler.',
    },
    {
      type: 'title',
      text: 'Hur Berakningen Fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den centrala storheten ar lorentzfaktorn: gamma = 1 / sqrt(1 - v^2 / c^2). For en enkel ut-och-ater resa med konstant kryssningshastighet ar tiden som upplevs av resenaren missionslangden i jordens referenssystem delat med gamma. Skillnaden mellan dessa tva langder ar aldersgapet nar tvillingarna aterforenas. Verktyget visar ocksa vandningsavstandet i jordens referenssystem, vilket ar halften av den totala jordtiden multiplicerat med rymdskeppets hastighet i ljusar per ar.',
    },
    {
      type: 'table',
      headers: ['Hastighet', 'Lorentzfaktor', 'Resenarens Klocktakt', 'Fysisk Betydelse'],
      rows: [
        ['0.50c', '1.155', '86.6% av jordens takt', 'En markbar men mattlig relativistisk effekt.'],
        ['0.86c', '1.960', '51.0% av jordens takt', 'Resenaren aldras ungefar halften sa snabbt under kryssningen.'],
        ['0.98c', '5.025', '19.9% av jordens takt', 'Extrem tidsdilatation dominerar missionsresultatet.'],
      ],
    },
    {
      type: 'title',
      text: 'Varfor Situationen Inte Ar Symmetrisk',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vid forsta anblicken kan varje tvilling saga att den andra rolig, vilket far resultatet att verka motsagelsefullt. Losningen ar att jordtvillingen forblir ungefar i ett inertialsystem, medan den resande tvillingen avreser, vander riktning och atervander. Det bytet av inertialsystem ger resenaren en annan vag genom rumtiden. Varldslinjen som detta verktyg ritar bojs vid vandningshandelsen, medan jordtvillingens varldslinje forblir rak.',
    },
    {
      type: 'title',
      text: 'Las Varldslinjediagrammet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En varldslinje ar en karta over ett objekt genom rumtiden snarare an enbart genom rymden. I denna visualiserare representerar den vertikala jordlinjen tvillingen som stannar hemma. Den vinklade roda vagen representerar resenaren som lamnar jorden och kommer tillbaka. Okad hastighet far resenarens vag att luta mer dramatiskt och minskar mangden egentid som ackumuleras pa rymdskeppsklockan.',
    },
    {
      type: 'list',
      items: [
        '<strong>Aldersgap:</strong> hur mycket yngre resenaren ar vid aterforeningen.',
        '<strong>Lorentzfaktor:</strong> multiplikatorn som kopplar jordens referenssystemstid till resenarens egentid.',
        '<strong>Resenarens egentid:</strong> den faktiska forflutna tiden uppmatt av en klocka pa rymdskeppet.',
        '<strong>Vandningsavstand:</strong> avstandet i jordens referenssystem innan resenaren vander kurs.',
      ],
    },
    {
      type: 'title',
      text: 'Praktiska Bevis for Tidsdilatation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tvillingparadoxen ar ett rent tankeexperiment, men tidsdilatation ar inte spekulativ. Myoner som skapas i den ovre atmosfaren overlever tillrackligt lange for att na marken eftersom deras roliga klockor ar dilaterade ur jordens perspektiv. Atomklockexperiment pa flygplan och precis satellitnavigering kraver ocksa relativistiska korrigeringar. Samma matematik bakom denna visualiserare ar en del av tidsinfrastrukturen som anvands av moderna GPS-system.',
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
