const description = 'Modellera Fermi-paradoxen med Drake-ekvationens parametrar, evolutionära filter, signal-livslängd och en tidsprojektion av detekterbara Vintergatans civilisationer.';
const slug = 'fermi-paradox-filter-labb';
const title = 'Fermi Paradoxen Filter Labb';

const howTo = [
  {
    name: 'Uppskatta Drake-pipelinen',
    text: 'Flytta reglagen för stjärnbildning, beboeliga planeter, liv, intelligens och teknik för att definiera hur ofta Vintergatan skapar detekterbara civilisationer.',
  },
  {
    name: 'Ställ in filterstyrkan',
    text: 'Öka det evolutionära filtret när du vill att kollaps, självförstörelse, ekologisk instabilitet eller teknologiska flaskhalsar ska eliminera civilisationer snabbare.',
  },
  {
    name: 'Jämför livslängd med horisont',
    text: 'Använd signal-livslängd och projiceringshorisont tillsammans. En kort livslängd kan göra en galax tyst även när civilisationer föds regelbundet.',
  },
  {
    name: 'Läs den tidsmässiga kurvan',
    text: 'Diagrammet visar detekterbara civilisationer över tid, vilket synliggör samexistens och utrotning istället för att reducera Fermi-paradoxen till en siffra.',
  },
];

const faq = [
  {
    question: 'Vad beräknar denna Fermi-paradox-simulator?',
    answer: 'Den kombinerar Drake-ekvationens termer med ett överlevnadsfilter och en tidshorisont för att uppskatta hur många teknologiska civilisationer som kan vara detekterbara samtidigt i Vintergatan.',
  },
  {
    question: 'Är detta en förutsägelse om verkliga utomjordiska civilisationer?',
    answer: 'Nej. Det är en utforskande modell. Värdet ligger i att se hur antaganden samverkar: en galax kan producera många civilisationer över historien samtidigt som väldigt få överlappar med oss.',
  },
  {
    question: 'Vad är det Stora filtret?',
    answer: 'Det Stora filtret är idén att ett eller flera steg mellan enkel kemi och långlivad teknologisk civilisation är extremt osannolika eller farliga.',
  },
  {
    question: 'Varför spelar signal-livslängden så stor roll?',
    answer: 'Detekterbarhet beror på överlapp. En civilisation som sänder under endast några århundraden kan vara verklig men osynlig för en annan civilisation som observerar under en annan epok.',
  },
  {
    question: 'Hur ska jag välja fraktionerna för liv och intelligens?',
    answer: 'Använd låga värden för ett pessimistiskt scenario med sällsynt liv och högre värden när du utforskar möjligheten att biologi eller intelligens uppstår ofta på stabila beboeliga världar.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Projicerade detekterbara civilisationer över tid',
    metricsLabel: 'Fermi-modellens mätvärden',
    controlsLabel: 'Fermi-modellens kontroller',
    birthRate: 'Födelsetal',
    peakCivilizations: 'Topp-civilisationer',
    finalCivilizations: 'Slutliga civilisationer',
    silenceScore: 'Tystnadspoäng',
    starFormationRate: 'Stjärnbildningstakt',
    habitableFraction: 'Andel beboeliga planeter',
    lifeFraction: 'Andel livsuppkomst',
    intelligenceFraction: 'Andel intelligens',
    technologyFraction: 'Andel teknologi',
    signalLifetime: 'Signal-livslängd',
    filterSeverity: 'Filterstyrka',
    horizonYears: 'Projiceringshorisont',
    maxLabel: 'max',
    yearUnit: 'år',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'En praktisk Fermi-paradox-simulator för Drake-ekvationens antaganden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fermi-paradoxen frågar varför natthimlen verkar tyst om Vintergatan innehåller hundratals miljarder stjärnor och många planeter. Det här verktyget omvandlar den frågan till en interaktiv modell genom att kombinera Drake-ekvationen med evolutionära filter och en tidsprojektion av detekterbara civilisationer.',
    },
    {
      type: 'paragraph',
      html: 'Istället för att ge en enda statisk uppskattning visar simulatorn hur civilisationer kan födas, bli detekterbara och försvinna innan ett annat samhälle har chans att höra dem. Det tidsproblemet är centralt för SETI eftersom två teknologiska kulturer måste överlappa i rum, tid och signalbeteende.',
    },
    {
      type: 'title',
      text: 'Hur modellen använder Drake-ekvationens parametrar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De första kontrollerna representerar en förenklad Drake-pipeline. Stjärnbildning förser nya stjärnsystem. En andel av dessa system bildar beboeliga planeter, en andel av beboeliga planeter utvecklar liv, en andel av levande världar producerar intelligens, och en andel av intelligenta arter blir detekterbara genom teknologi.',
    },
    {
      type: 'table',
      headers: ['Kontroll', 'Betydelse', 'Effekt'],
      rows: [
        ['Stjärnbildningstakt', 'Nya stjärnor per år i Vintergatan', 'Höjer eller sänker det råa utbudet av möjliga system'],
        ['Andel beboeliga planeter', 'Andel system med stabila världar där flytande vattenkemi kan bestå', 'Kontrollerar hur mycket av galaxen som går in i den biologiska pipelinen'],
        ['Andel livsuppkomst', 'Sannolikhet att enkelt liv börjar på en beboelig värld', 'Testar antaganden om sällsynt liv kontra vanligt liv'],
        ['Andel intelligens', 'Sannolikhet att liv utvecklar teknikkapabel kognition', 'Representerar biologiska och ekologiska flaskhalsar'],
        ['Andel teknologi', 'Sannolikhet att intelligens producerar detekterbara signaler', 'Fångar kulturella, ingenjörsmässiga och kommunikationsmässiga val'],
      ],
    },
    {
      type: 'title',
      text: 'Varför filter kan få en aktiv galax att se tom ut',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Reglaget för filterstyrka komprimerar många möjliga felpunkter till ett överlevnadstryck: asteroidnedslag, instabila klimat, självförstörelse, resurskollaps, artificiell intelligens-risk eller någon annan flaskhals som förkortar den detekterbara fasen. Ett starkt filter betyder inte att civilisationer aldrig uppstår. Det betyder att de sällan förblir synliga länge.',
    },
    {
      type: 'paragraph',
      html: 'Den distinktionen är viktig. Vintergatan kan ha producerat tusentals teknologiska arter under djup tid samtidigt som nästan inga grannar är aktiva under vårt eget smala lyssningsfönster. Diagrammet gör denna skillnad synlig genom att plotta detekterbara civilisationer över den valda projiceringshorisonten.',
    },
    {
      type: 'title',
      text: 'Tolka tystnadspoängen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tystnadspoängen stiger när det slutliga antalet överlappande detekterbara civilisationer är lågt. Hög tystnad bevisar inte att människor är ensamma; det visar att de valda antagandena gör icke-upptäckt föga förvånande. Låg tystnad innebär att modellen förväntar sig en mer högljudd galax, så frånvaron av bevis blir mer intressant.',
    },
    {
      type: 'list',
      items: [
        '<strong>Hög födelsetakt plus lågt filter:</strong> en trångbefolkad galax där SETI-tystnad är svårare att förklara.',
        '<strong>Hög födelsetakt plus högt filter:</strong> många civilisationer uppstår, men få överlever tillräckligt länge för att överlappa.',
        '<strong>Låga biologiska andelar:</strong> liv eller intelligens är sällsynt, så tystnad kan uppstå innan teknologi ens blir relevant.',
        '<strong>Kort signal-livslängd:</strong> civilisationer kan existera men sänder för kortvarigt för att kontakt ska vara sannolik.',
      ],
    },
    {
      type: 'title',
      text: 'Användningsområden för undervisning, debatt och SETI-intuition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fermi-paradoxen Filter Labb är användbart i astronomilektioner, astrobiologiska diskussioner, vetenskapskommunikation och filosofiska debatter om mänsklighetens framtid. Det hjälper till att separera tre frågor som ofta blandas ihop: hur ofta civilisationer föds, hur länge de förblir detekterbara och om deras tidslinjer överlappar med våra.',
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
