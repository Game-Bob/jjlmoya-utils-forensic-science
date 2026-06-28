import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "kriminalteknik",
  title: "Kriminaltekniska verktyg",
  description: "Kriminaltekniska verktyg för strukturerad falltriage, transparenta beräkningar och bevismedveten rapportering.",
  seo: [
    {
      type: 'title',
      text: "Kriminaltekniska verktyg för bevisanalys och falltriage",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Detta bibliotek tillhandahåller specialiserade verktyg och beräkningar för kriminaltekniker, jurister, forskare och utredare. Kriminaltekniska verktyg hjälper till att utvärdera fysiska bevis som samlats in från brottsplatser. Genom att använda strukturerade modeller för blodstänksbana, åldersbedömning, glasbrytningsindex och droganalys kan utredningsteam utföra en första falltriage. Varje verktyg fokuserar på transparens, visar antaganden och hjälper användare att tydligt förstå gränserna för varje kriminalteknisk formel.",
    },
    {
      type: 'paragraph',
      html: "En tidig fallgranskning kräver bedömning av vilka bevis som är tillgängliga, vad de vetenskapliga formlerna antar och var osäkerheten kvarstår. Dessa kalkylatorer är utformade för att stödja utbildning och preliminär screening. De hjälper till att avgöra vilka analytiska steg som är nödvändiga innan formella laboratorietester genomförs. Genom att använda dessa verktyg underlättas identifieringen av luckor i bevismaterialet tidigt i utredningsprocessen.",
    },
    {
      type: 'title',
      text: "Nyckelområden för kriminaltekniska beräkningar",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Åldersbedömning:</strong> beräkningar för skelett, tänder och mognad med explicita osäkerhetsmått.',
        '<strong>Bevistolkning:</strong> strukturerade uppskattningsverktyg som visar formler, konfidensintervall och begränsningar.',
        '<strong>Falltriage:</strong> snabba verktyg som belyser saknade bevis och identifierar parametrar som krävs för formell undersökning.',
        '<strong>Stöd för rapportskrivning:</strong> verktyg som uppmuntrar till tydlig rapportering med hjälp av intervall istället för skenbar precision.',
      ],
    },
    {
      type: 'title',
      text: "Riktlinjer för ansvarsfull användning av kriminalteknisk programvara",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Varje kriminalteknisk beräkning innebär felmarginaler och konfidensgränser. En kalkylator får aldrig ersätta ett kvalificerat expertsakkunnigt vittne eller ett validerat laboratorieprotokoll. Istället används dessa webbverktyg bäst för att utforska scenarier, förklara koncept för icke-specialister och kontrollera mätningarnas känslighet innan slutliga rapporter skrivs. Detta bidrar till att förhindra missförstånd i domstolen angående vetenskaplig precision.",
    },
    {
      type: 'table',
      headers: ['Lämplig användning', 'Olämplig användning', 'Betydelse'],
      rows: [
        ["Screening av fallakter före formell specialistundersökning.", "Att använda kalkylatorns resultat som ett slutgiltigt expertutlåtande.", "Kriminaltekniska bevis måste uppfylla stränga krav på vetenskaplig validering."],
        ["Förklara mätosäkerhet och intervall för utredare.", "Rapportera en enskild exakt siffra utan att förklara begränsningarna.", "Skenbar precision kan leda till felaktiga beslut i rättssystemet."],
        ["Kontrollera hur indataantaganden påverkar det uppskattade resultatet.", "Att dölja initiala parametrar eller beräkningar från falldokumentationen.", "Transparens gör det möjligt att granska resultat och låta andra reproducera dem."],
        ["Avgöra om datakvaliteten är tillräcklig för beräkningen.", "Körning av formler med dåliga eller ofullständiga skalamätningar.", "Svaga indataparametrar gör alla matematiska rekonstruktioner otillförlitliga."],
      ],
    },
  ],
};
