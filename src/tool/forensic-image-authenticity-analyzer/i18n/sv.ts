import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensisk-bildmetadata-och-autenticitetsanalysator';
const title = 'Forensisk Analysator för Bildmetadata och Äkthet';
const description = 'Inspektera bildhuvuden, EXIF-data för upptagning, GPS-koordinater, spår av redigeringsprogram och råa byte lokalt i webbläsaren.';

const howTo = [
  { name: 'Bevara originalbeviset', text: 'Arbeta från en forensisk kopia och förvara källfilen samt dess kryptografiska hash utanför detta webbläsarverktyg.' },
  { name: 'Ladda en bild lokalt', text: 'Dra in eller välj en JPEG eller PNG. Filen läses i webbläsarens minne och laddas inte upp.' },
  { name: 'Granska metadata och plats', text: 'Jämför upptagningstid, kamerauppgifter, programvara och GPS-fält med ärendets berättelse och insamlingsloggar.' },
  { name: 'Tolkar integritetssignaler', text: 'Behandla redigeringssignaturer och saknade fält som utredningsspår, inte som bevis på manipulation.' },
  { name: 'Undersök den hexadecimala förhandsvisningen', text: 'Använd de markerade huvud- och metadatazonerna för att identifiera containerstrukturen och dokumentera offset för vidare analys.' },
];

const faq = [
  { question: 'Kan metadata bevisa att ett foto är äkta?', answer: 'Nej. Metadata kan tas bort, kopieras eller ändras. Autentisering kräver en kombination av filstruktur, proveniens, hashar, visuell granskning, kompressionsanalys och validerade forensiska metoder.' },
  { question: 'Bevisar en Adobe- eller GIMP-signatur skadlig redigering?', answer: 'Nej. Det visar bara att programvara kan ha skrivit metadata eller exporterat filen. Legitima färgkorrigeringar, redaktionell bearbetning eller bevisförberedelse kan ge samma signatur.' },
  { question: 'Laddas bilden upp?', answer: 'Nej. Analysen sker i webbläsarens minne. Följ ändå din organisations rutiner för bevishantering innan du öppnar känsligt material i någon programvara.' },
  { question: 'Varför kan GPS-data saknas?', answer: 'Kameran kanske inte stöder GPS, platsregistrering kan ha varit avstängd, en plattform kan ha tagit bort metadata eller filen kan ha kodats om.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: 'Endast lokal binär undersökning',
    dropTitle: 'Placera en bild på bevisbordet',
    dropHint: 'Släpp en JPEG eller PNG här eller välj en fil. Ingenting laddas upp.',
    chooseFile: 'Välj bild',
    replaceFile: 'Byt bild',
    waiting: 'Väntar på bevis',
    metadata: 'Upptagningsmetadata',
    integrity: 'Integritetssignaler',
    location: 'Registrerad plats',
    hex: 'Hexadecimalt bevisfönster',
    hexHint: 'Första 512 byte · cyan huvud · bärnstensfärgade metadata · neutrala bilddata',
    noData: 'Inget läsbart värde',
    noGps: 'Inga läsbara GPS-koordinater hittades.',
    mapLink: 'Öppna koordinater i OpenStreetMap',
    score: 'Heuristisk tillförlitlighet',
    disclaimer: 'Ett högt poängvärde fastställer inte äkthet. Bevara originalet, beräkna kryptografiska hashar och använd validerade laboratorieflöden för slutsatser i ärendet.',
    fileName: 'Fil',
    fileSize: 'Storlek',
    fileType: 'Container',
    camera: 'Kamera',
    captured: 'Tagen',
    software: 'Programvara',
    coordinates: 'Koordinater',
    statusNoObvious: 'Inga tydliga tecken på redigering',
    statusReview: 'Granskning rekommenderas',
    statusEditing: 'Redigeringssignatur upptäckt',
    processing: 'Läser binärt bevismaterial...',
    loadError: 'Filen kunde inte analyseras. Välj en giltig JPEG- eller PNG-bild.',
  },
  seo: [
    { type: 'title', text: 'Hur man analyserar bildmetadata och äkthetssignaler', level: 2 },
    { type: 'paragraph', html: 'En forensisk analysator för bildmetadata hjälper utredare, journalister, jurister, compliance-granskare och forskare att besvara en fråga med hög sökintention: <strong>vad kan bildmetadata faktiskt avslöja om ett fotografi?</strong> Metadata kan ge användbara ledtrådar om upptagning, plats, programvarubehandling och filstruktur, men fungerar inte som en fristående sanningsmaskin. Det största värdet ligger i triage och i att hitta vilka filer som kräver djupare granskning.' },
    { type: 'paragraph', html: 'Det här webbläsarverktyget är utformat för användare som vill ha mer än en rå EXIF-dump. Det läser den valda JPEG- eller PNG-filen lokalt och visar kamerafält, tidsstämplar, programvarutaggar, koordinater, containerledtrådar och de första byten på ett ställe. Det möter vanliga sökintentioner bakom uttryck som <em>kontrollera bildens äkthet</em>, <em>analysera EXIF-metadata</em> och <em>hur ser man om en bild har redigerats</em>.' },
    { type: 'paragraph', html: 'Den viktigaste principen är att resultatet ska läsas som kontext, inte som dom. En fil kan innehålla användbar metadata och ändå vara vilseledande. Därför bör metadata behandlas som ett bevislager som måste jämföras med proveniens, hashar, vittnesmål och validerade undersökningsmetoder.' },
    { type: 'title', text: 'Vad EXIF kan och inte kan säga om ett fotografi', level: 3 },
    { type: 'paragraph', html: 'EXIF-metadata (Exchangeable Image File Format) lagrar information som kameratillverkare, modell, objektiv, slutartid, bländare, ISO, vitbalans, blixtstatus och datum för upptagning. Dessa fält skapas av kamerans firmware vid exponeringsögonblicket och är ofta den första informationskällan i en forensisk undersökning. EXIF kan dock inte bevisa att en bild är oredigerad: nästan alla fält kan skrivas om med standardverktyg som ExifTool, Adobe Photoshop eller GIMP. Det går inte heller att från EXIF ensam avgöra om motivet är verkligt eller om bilden är ett montage. EXIF-tidsstämpeln anger när kameran registrerade filen, men om kamerans klocka var felaktig eller om filen har kopierats mellan enheter kan tidsuppgiften vara missvisande. I utredningssammanhang ska EXIF därför behandlas som en indikation som måste styrkas av kompletterande bevis såsom kryptografiska hashar, loggfiler från insamlingsenheten och visuell granskning av bildinnehållet.' },
    { type: 'title', text: 'Hur man läser GPS-metadata ansvarsfullt i forensisk kontext', level: 3 },
    { type: 'paragraph', html: 'GPS-koordinater i EXIF lagras som latitud och longitud i grader, minuter och sekunder (DMS) tillsammans med en referensriktning (N/S/E/W). Många kameror, särskilt inbyggda kameror i smartphones, registrerar dessa koordinater automatiskt om platstjänster är aktiverade. För en utredare är GPS-data användbar för att knyta en bild till en geografisk plats, men den måste tolkas med försiktighet. Koordinaterna kan vara frånvarande om platstjänster var avstängda, om efterföljande programvara har tagit bort dem eller om bilden har beskärts och exporterats på nytt. Det är också möjligt att manipulera GPS-fält manuellt för att placera en bild på en falsk plats. Kontrollera alltid koordinaternas överensstämmelse med annan bevisning såsom samtida mobilmaster, loggar, vittnesmål och kartdata. Använd verktyget för att dokumentera koordinaterna som en del av en bredare beviskedja snarare än som ett självständigt faktum.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

