const slug = 'mikrovagsugn-lackagetest';
const description = 'Analysera om din mikrovågsugn läcker strålning genom att mäta realtidsinterferens på ditt WiFi-nätverk. Ett vetenskapligt säkerhetsverktyg.';
const title = 'Mikrovågsugn Läckagetest: WiFi interferens Visualiserare';
const howTo = [
    {
      name: 'Anslut till 2,4 GHz WiFi-nätverk',
      text: 'Se till att din mobil eller bärbara dator INTE är ansluten till 5 GHz-bandet så att interferensen är mätbar.',
    },
    {
      name: 'Starta bas-latenstest',
      text: 'Tryck på startknappen med mikrovågsugnen avstängd för att fastställa en stabil baslinje för anslutningen.',
    },
    {
      name: 'Slå på mikrovågsugnen',
      text: 'Värm ett glas vatten i 30-60 sekunder och stå nära apparaten med din enhet.',
    },
    {
      name: 'Analysera realtidsgraf',
      text: 'Observera om latensen stiger över 100-200 ms eller om paketförlust uppstår medan apparaten är igång.',
    },
  ];
const faq = [
    {
      question: 'Hur kan en webbplats detektera min mikrovågsugn?',
      answer: 'Vi använder inte magiska sensorer, utan nätverkslatens. Både 2,4 GHz WiFi och mikrovågsugnar arbetar på samma frekvens (ca 2450 MHz). Om mikrovågsugnens skärmning misslyckas genererar den "brus" som kolliderar med WiFi, vilket drastiskt ökar latensen (ping).',
    },
    {
      question: 'Är det farligt om min mikrovågsugn läcker?',
      answer: 'Små WiFi-interferenser är normala och innebär inte en omedelbar hälsorisk, eftersom effekten avtar snabbt med avståndet. Ett massivt läckage tyder dock på dålig tätning av dörren eller nätet, vilket bör kontrolleras för teknisk säkerhet.',
    },
    {
      question: 'Varför fungerar inte testet med 5 GHz WiFi?',
      answer: 'Eftersom 5 GHz WiFi arbetar på ett mycket högre frekvensband än en mikrovågsugn. För att testet ska vara effektivt måste din enhet vara ansluten till routerns 2,4 GHz-nätverk.',
    },
    {
      question: 'Vad betyder latensspikarna på grafen?',
      answer: 'Ständiga spikar under mikrovågsugnens drift tyder på att den elektromagnetiska signalen "slipper ut" och mättar luften, vilket förhindrar att WiFi-datapaket kommer fram i tid.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Kopierad',
    noHistory: 'Ingen historik',
    load: 'Ladda',
    delete: 'Radera',
    microwaveDetection: 'Mikrovågsdetektion',
    shieldingAnalysis: 'Skärmningsanalys',
    startTest: 'Starta test',
    stopTest: 'Stoppa test',
    waitingForStart: 'Väntar på start...',
    detectingInterference: 'Detekterar interferens...',
    baseLevel: 'Basnivå',
    activeLevel: 'Aktiv nivå',
    leakProbability: 'Läckage sannolikhet',
    lowLeak: 'Låg',
    mediumLeak: 'Medium',
    highLeak: 'Hög',
    pingLabel: 'Latens (ms)',
    packetLossLabel: 'Paketförlust (%)',
    rfInterferenceMonitor: 'RF-interferens Monitor',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'Systemet redo',
    physicalRequirement: 'Fysiskt krav',
    physicalDesc: 'Denna detektor använder interferens i 2,4 GHz-bandet (mikrovågsfrekvensen). För att fungera korrekt, se till att du är ansluten till ett 2,4 GHz WiFi-nätverk (inte 5 GHz/6 GHz) eller använd din telefon nära enheten.',
    understandStart: 'Uppfattat, starta skanning',
    rfInterferenceTitle: 'Interferens Monitor',
    connectToAnalyze: 'Anslut för att starta termisk interferensanalys.',
    audioFeedback: 'Ljudåterkoppling',
    muteUnmute: 'LJUD AV / PÅ',
    static: 'Statisk',
  },
  seo: [
    {
      type: 'title',
      text: 'VÅGFYSIK: Läcker din mikrovågsugn verkligen strålning?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mikrovågsugnen är den mest missförstådda apparaten i det moderna köket. Hatad av purister och älskad av pragmatiker, döljer den en ständig kamp mellan instängd energi och omvärlden.',
    },
    {
      type: 'paragraph',
      html: 'Från en rent fysisk synvinkel är en mikrovågsugn en <strong>kavitetsresonator</strong> utformad för att bombardera vattenmolekyler med elektromagnetisk strålning vid en mycket specifik frekvens: <strong>2,45 GHz</strong>. Denna frekvens är inte godtycklig; den är nödvändig för att orsaka dipoloscillation hos vattenpartiklar, vilket genererar värme genom friktion. Problemet är att detta är exakt samma frekvens som används av WiFi-standarden 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Elektromagnetisk interferens (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alla WiFi-enheter som arbetar i 2,4 GHz-bandet konkurrerar om samma "luft" som din mikrovågsugn. I en perfekt ugn ska <strong>Faradays bur</strong> (metallnätet du ser på dörren och innerväggarna) innehålla 100% av energin.',
    },
    {
      type: 'paragraph',
      html: 'Ingen bur är dock perfekt i det långa loppet. Dörrtätningar, magnetlås och metallslitage kan göra att små mängder energi slipper ut. Även om dessa nivåer vanligtvis ligger långt under säkerhetsgränserna för människor, är de <strong>gigantiska</strong> för ett WiFi-nätverkskort och orsakar latens, paketförlust och den karakteristiska "jitter" som vårt verktyg mäter.',
    },
    {
      type: 'title',
      text: 'Det hemgjorda Faraday-bur-testet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det finns ett mycket enkelt analogt sätt att kontrollera det grundläggande tillståndet för din ugns skärmning, även om det är mindre exakt än vår digitala jittermätning:',
    },
    {
      type: 'list',
      items: [
        '<strong>Steg 1 - Telefonen:</strong> Placera din mobiltelefon inuti mikrovågsugnen (<strong>UNDER INGA OMSTÄNDIGHETER FÅR UGNEN SLÅS PÅ!</strong> Stäng bara dörren).',
        '<strong>Steg 2 - Samtalet:</strong> Försök ringa den telefonen från en annan enhet. Om telefonen ringer är Faradays bur defekt eller inte inställd för mobilfrekvenser. Om den visar "ingen täckning" fungerar skärmningen korrekt.',
      ],
    },
    {
      type: 'title',
      text: 'Myter vs Vetenskaplig verklighet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Mikrovågor förändrar vattnets molekylära struktur"</strong> - FALSKT. Mikrovågsstrålning är <em>icke-joniserande</em>. Den har inte tillräckligt med energi för att bryta kemiska bindningar eller förändra DNA. Den får helt enkelt vattenmolekylerna att vibrera, vilket ökar deras kinetiska energi (temperatur).',
        '<strong>"Strålning ackumuleras i maten"</strong> - FALSKT. Mikrovågor är som ljus: när du slår av strömbrytaren är de borta. Varm mat avger inte mikrovågsstrålning, bara infraröd strålning (värme) precis som en lägereld eller en panna.',
        '<strong>"Att titta på den roterande tallriken skadar dina ögon"</strong> - DELVIS SANT. Dörrglaset är utformat med ett nät som blockerar 2,45 GHz-våglängder. Men om nätet är skadat kommer glaset inte att stoppa mikrovågorna. Ögats lins är mycket värmekänslig och har dålig blodcirkulation, så långvarig direkt exponering (nära en läcka) kan orsaka termisk katarakt.',
      ],
    },
    {
      type: 'title',
      text: 'Hur fungerar denna digitala detektor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vårt verktyg mäter inte strålning direkt (smartphones har inte sensorer för detta), men det mäter det <strong>viktigaste symptomet</strong>. När en 2,45 GHz strålningsmolekyl slipper ut från ugnen "kolliderar" den med din enhets WiFi-signal. Detta orsakar:',
    },
    {
      type: 'list',
      items: [
        '<strong>Paketåtersändningar:</strong> Routern upptäcker att meddelandet kom fram korrupt och måste skicka om det, vilket ökar latensen.',
        '<strong>Jitter-variation:</strong> Detta är ett mått på instabilitet i responstiden. Hög jitter är ett otvetydigt tecken på massiv extern interferens.',
        '<strong>Prestandafall:</strong> Överföringshastigheten sjunker kraftigt på grund av mättnad i radiospektrumet.',
        '<strong>Bakgrundsbrus:</strong> Mikrovågsugnen injicerar brus som höjer "brusgolvet", vilket gör det svårt för enheten att skilja mellan verkliga data och radioaktivt kaos.',
      ],
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
      description: description,
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

