import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'conways-game-of-life-regellabb';
const title = 'Conways Game of Life Regellabb';
const description = 'Spela, redigera och jämför Conway-liknande cellulära automater med B/S-regler, mönsterfrön, livevärden och responsiv simuleringsyta.';

const howTo = [
  {
    name: 'Så brädet',
    text: 'Välj ett mönster som en glidare, pulsar eller Gosper-kanon, placera det på rutmönstret eller slumpa fram en levande population.',
  },
  {
    name: 'Kör simuleringen',
    text: 'Använd kontrollerna för spela upp, pausa, steg och tempo för att se hur födslar, dödsfall, densitet och stabilitet utvecklas.',
  },
  {
    name: 'Ändra regeln',
    text: 'Byt förinställningar eller skriv in en B/S-regel som B3/S23, B36/S23 eller B3678/S34678 för att jämföra olika automater.',
  },
];

const faq = [
  {
    question: 'Vad är B/S-notation i Game of Life?',
    answer: 'B/S-notation listar de granneantal som skapar en ny levande cell och de antal som låter en befintlig levande cell överleva. Conways Life är B3/S23: döda celler föds med exakt tre grannar, och levande celler överlever med två eller tre grannar.',
  },
  {
    question: 'Varför kallas detta ett regellabb och inte bara en simulator?',
    answer: 'Den klassiska Conway-regeln ingår, men simulatorn är byggd för att jämföra familjer av Life-liknande cellulära automater. Redigering av födslo- och överlevnadstalen ändrar långtidsbeteendet och producerar replikatorer, vågor, frysta öar, kaotisk tillväxt eller utrotning.',
  },
  {
    question: 'Vad betyder stabilitet i simulatorn?',
    answer: 'Stabilitet uppskattar hur mycket kolonin förändrades under den senaste generationen. Hög stabilitet innebär få celler födda eller döda i förhållande till populationen; låg stabilitet innebär att brädet är turbulent eller snabbt omorganiseras.',
  },
  {
    question: 'Har brädet kanter?',
    answer: 'Simuleringen använder toroidal lindning: vänster kant kopplar till höger kant och toppen kopplar till botten. Det håller mönster rörliga naturligt utan att försvinna vid hårda gränser.',
  },
  {
    question: 'Kan jag rita mitt eget startmönster?',
    answer: 'Ja. Pausa simuleringen och klicka eller peka på celler på brädet för att växla dem. Du kan kombinera handritade celler med inbyggda mönster och sedan köra resultatet under valfri regelinställning.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Bräde för Life-liknande cellulära automater',
    play: 'Spela',
    pause: 'Pausa',
    step: 'Steg',
    clear: 'Tom duk',
    randomize: 'Slumpa',
    ruleLabel: 'Regelnotation',
    ruleHelp: 'Födelse / överlevnad',
    speedLabel: 'Tempo',
    densityLabel: 'Startdensitet',
    patternLabel: 'Mönster',
    placePattern: 'Placera mönster',
    generation: 'Generation',
    population: 'Population',
    density: 'Densitet',
    stability: 'Stabilitet',
    births: 'Födslar',
    deaths: 'Dödsfall',
    achievementsLabel: 'Laboratorielogg',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Period 2 oscillation upptäckt',
    achievementImmortal: 'Odödlig',
    achievementImmortalDescription: 'Generation 500 nådd med full stabilitet',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Ett glest slumpfrö passerade 1 000 levande celler',
    presetClassic: 'Klassisk Conway',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Dag och natt',
    patternGlider: 'Glidare',
    patternGosper: 'Gosper-kanon',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentomino',
    colonyStatus: 'Kolonisignal',
    statusFrozen: 'stabil',
    statusGrowing: 'växer',
    statusFading: 'avtar',
    statusChaotic: 'volatil',
    invalidRule: 'Använd B/S-notation som B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Conway Game of Life-simulator med redigerbara regler', level: 2 },
    { type: 'paragraph', html: 'Detta regellabb låter dig köra den klassiska cellulära automaten och sedan medvetet ändra och jämföra dess regler. Brädet stöder direkt ritning, mönsterplacering, slumpmässiga frön, stegvis inspektion, variabelt tempo och livemätningar för population, densitet, födslar, dödsfall och stabilitet.' },
    { type: 'title', text: 'Hur B/S-regler förändrar spelet', level: 3 },
    { type: 'paragraph', html: 'Life-liknande cellulära automater skrivs ofta i <strong>B/S-notation</strong>. B-sidan definierar hur många levande grannar en död cell behöver för att födas; S-sidan definierar hur många grannar en levande cell behöver för att överleva. Conways ursprungliga regel, <strong>B3/S23</strong>, är känd för att befinna sig i ett smalt område mellan utrotning och okontrollerad tillväxt.' },
    { type: 'title', text: 'Läsa livemätningarna', level: 3 },
    { type: 'paragraph', html: 'Population och densitet visar hur många celler som lever, men de berättar inte hela historien. Födslar och dödsfall avslöjar den aktuella aktivitetsnivån, medan stabilitet uppskattar om kolonin stabiliseras i en oscillator, fryser till stilleben eller förblir turbulent.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
