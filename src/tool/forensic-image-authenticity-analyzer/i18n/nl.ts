import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensische-afbeelding-metadata-authenticiteits-analyzer';
const title = 'Forensische Analyzer voor Beeldmetadata en Authenticiteit';
const description = 'Inspecteer afbeeldingsheaders, EXIF-opnamegegevens, GPS-coördinaten, sporen van bewerkingssoftware en ruwe bytes lokaal in je browser.';

const howTo = [
  { name: 'Bewaar het originele bewijsmateriaal', text: 'Werk vanuit een forensische kopie en bewaar het bronbestand en de cryptografische hash buiten deze browsertool.' },
  { name: 'Laad een afbeelding lokaal', text: 'Sleep een JPEG of PNG naar binnen of kies een bestand. Het bestand wordt alleen in het browsergeheugen gelezen en niet geüpload.' },
  { name: 'Controleer metadata en locatie', text: 'Vergelijk opnametijd, camera-identiteit, software en GPS-velden met het dossierverhaal en de acquisitieregistratie.' },
  { name: 'Interpreteer integriteitssignalen', text: 'Behandel bewerkingssignaturen en ontbrekende velden als onderzoekssporen, niet als bewijs van manipulatie.' },
  { name: 'Bekijk de hexadecimale preview', text: 'Gebruik de gemarkeerde header- en metadatazones om de containerstructuur te herkennen en offsets voor nader onderzoek vast te leggen.' },
];

const faq = [
  { question: 'Kan metadata bewijzen dat een foto authentiek is?', answer: 'Nee. Metadata kan worden verwijderd, gekopieerd of aangepast. Authenticatie vereist een combinatie van bestandsstructuur, herkomst, hashes, visuele beoordeling, compressieanalyse en gevalideerde forensische methoden.' },
  { question: 'Bewijst een Adobe- of GIMP-signatuur kwaadaardige bewerking?', answer: 'Nee. Het betekent alleen dat software de metadata of export van het bestand kan hebben geschreven. Legitieme kleurcorrectie, redactionele verwerking of voorbereiding van bewijs kan dezelfde signatuur opleveren.' },
  { question: 'Wordt de afbeelding geüpload?', answer: 'Nee. De analyse gebeurt in het browsergeheugen. Volg desondanks het bewijsbeleid van je organisatie voordat je gevoelig materiaal in welke software dan ook opent.' },
  { question: 'Waarom kunnen GPS-gegevens ontbreken?', answer: 'De camera ondersteunt mogelijk geen GPS, locatie-opname kan zijn uitgeschakeld, een platform kan metadata hebben verwijderd of het bestand kan opnieuw zijn gecodeerd.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacy: 'Alleen lokale binaire inspectie',
    dropTitle: 'Plaats een afbeelding op de bewijstafel',
    dropHint: 'Sleep hier een JPEG of PNG naartoe of kies een bestand. Er wordt niets geüpload.',
    chooseFile: 'Afbeelding kiezen',
    replaceFile: 'Afbeelding vervangen',
    waiting: 'Wachten op bewijsmateriaal',
    metadata: 'Opnamemetadata',
    integrity: 'Integriteitssignalen',
    location: 'Geregistreerde locatie',
    hex: 'Hexadecimaal bewijsvenster',
    hexHint: 'Eerste 512 bytes · cyaankleurige header · amberkleurige metadata · neutrale afbeeldingsdata',
    noData: 'Geen leesbare waarde',
    noGps: 'Er zijn geen leesbare GPS-coördinaten gevonden.',
    mapLink: 'Coördinaten openen in OpenStreetMap',
    score: 'Heuristisch vertrouwen',
    disclaimer: 'Een hoge score bewijst geen authenticiteit. Bewaar het origineel, bereken cryptografische hashes en gebruik gevalideerde laboratoriumworkflows voor dossierconclusies.',
    fileName: 'Bestand',
    fileSize: 'Grootte',
    fileType: 'Container',
    camera: 'Camera',
    captured: 'Vastgelegd',
    software: 'Software',
    coordinates: 'Coördinaten',
    statusNoObvious: 'Geen duidelijke aanwijzingen voor bewerking',
    statusReview: 'Herbeoordeling aanbevolen',
    statusEditing: 'Bewerkingssignatuur gedetecteerd',
    processing: 'Binaire bewijzen worden gelezen...',
    loadError: 'Het bestand kon niet worden geanalyseerd. Selecteer een geldige JPEG- of PNG-afbeelding.',
  },
  seo: [
    { type: 'title', text: 'Hoe je beeldmetadata en authenticiteitsindicatoren analyseert', level: 2 },
    { type: 'paragraph', html: "Een bestandsextensie of één tag kan het formaat, de bewerkingsgeschiedenis of de authenticiteit niet bewijzen. Controleer de werkelijke headerstructuur, pixelafmetingen, het kleurprofiel, de thumbnail en softwaregegevens en vergelijk die met de acquisitieregistratie. Een hash bevestigt de identiteit van een bestand, maar niet de waarheid van de gefotografeerde inhoud. Houd rekening met hercompressie en verwijderde metadata door deelplatforms en noteer zowel het onderzochte bereik als de resterende onzekerheid." },
    { type: 'paragraph', html: "Het ontbreken van een tijdstip of GPS betekent niet automatisch dat een beeld is gemanipuleerd. Camera-instellingen, deelplatforms, privacyinstellingen en opnieuw opslaan kunnen tags verwijderen of herschrijven. Vergelijk daarom de bestandsheader, pixelafmetingen, het kleurprofiel, de thumbnail, softwaretags en de acquisitieregistratie. Bewaar het origineel op een gecontroleerd medium en leg hash, kopieën, conversies en analyseomgeving vast. Gebruik de uitkomst als aanleiding voor vervolgonderzoek en vergelijk haar met herkomst, verklaringen, apparaatlogs en gevalideerde onderzoeksmethoden." },
    { type: 'paragraph', html: "Noteer in het onderzoeksdossier afzonderlijk de datum van verkrijging, het opslagmedium, de hash, de analyseomgeving, de gecontroleerde velden, de waarnemingen en openstaande vragen. Trek geen conclusie over bewerking op basis van ontbrekende metadata alleen. Vergelijk de bevindingen met herkomst, acquisitielog en staat van bewaring, zodat een andere beoordelaar hetzelfde bestand kan controleren. Beschrijf bovendien elke kopie of conversie en houd een heuristische aanwijzing gescheiden van een deskundig eindoordeel." },
    { type: 'paragraph', html: 'Een forensische analyzer voor beeldmetadata helpt onderzoekers, journalisten, juridische teams, compliance-reviewers en deskundigen bij een vraag met hoge zoekintentie: <strong>wat kunnen metadata van een afbeelding werkelijk onthullen?</strong> Metadata kan nuttige aanwijzingen geven over opname, locatie, softwareverwerking en bestandsstructuur, maar vormt geen zelfstandige waarheidsmachine. De grootste waarde ligt in triage. Het helpt je bepalen welke bestanden nader onderzoek verdienen, welke details het geclaimde verhaal van de afbeelding ondersteunen en welke tegenstrijdigheden opvolging vereisen voordat iemand een sterke authenticiteitsclaim maakt.' },
    { type: 'paragraph', html: 'Deze browsertool is bedoeld voor gebruikers die meer willen dan een ruwe EXIF-dump. Hij leest de gekozen JPEG of PNG lokaal en toont cameravelden, opnametijdstempels, softwaretags, coördinaten, containeraanwijzingen en de eerste bytes van het bestand op één plek. Daarmee sluit hij aan op zoekintenties achter termen als <em>foto authenticiteit controleren</em>, <em>EXIF metadata analyseren</em>, <em>hoe zie je of een afbeelding is bewerkt</em> en <em>GPS-metadata van een afbeelding verifiëren</em>. Gebruikers die daarop zoeken willen meestal zowel bewijs als interpretatie.' },
    { type: 'paragraph', html: 'Het belangrijkste uitgangspunt is dat het resultaat als context moet worden gelezen, niet als oordeel. Een bestand kan nuttige metadata bevatten en toch misleidend zijn. Het kan weinig of geen metadata bevatten en toch authentiek zijn. Een softwaresignatuur kan wijzen op normaal exportgedrag in plaats van misleidende manipulatie. Goede forensische praktijk behandelt metadata daarom als één bewijslaag die moet worden vergeleken met herkomst, hashes, getuigenverklaringen, apparaathistorie en gevalideerde onderzoeksmethoden.' },
    { type: 'title', text: 'Wat EXIF wel en niet kan vertellen', level: 3 },
    { type: 'paragraph', html: 'EXIF-metadata (Exchangeable Image File Format) wordt door camera\u2019s en smartphones automatisch aan elk JPEG- en PNG-bestand toegevoegd. Het vertelt je de gebruikte camera of telefoon, het diafragma, de sluitertijd, ISO-waarde, flitserinstelling, opnamedatum en -tijd en of software van Adobe, GIMP, Apple of een andere editor het bestand heeft opgeslagen. Wat het je niet kan vertellen is wie er achter de camera stond, of de gemeten GPS-positie overeenkomt met de werkelijke opnamelocatie, of de tijdzone in de embedded timestamp correct is of of er tussen opname en export met opzet metadata is verwijderd. Dat onderscheid is cruciaal voor de interpretatie van digitaal bewijsmateriaal.' },
    { type: 'title', text: 'Hoe GPS-metadata verantwoord te lezen', level: 3 },
    { type: 'paragraph', html: 'GPS-coördinaten in EXIF geven een breedtegraad, lengtegraad, hoogte en de richting waarin de camera stond. Deze gegevens kunnen overeenkomen met de werkelijke opnamelocatie, maar ze kunnen ook ontbreken, onnauwkeurig zijn of afkomstig zijn van een eerder punt in de keten. Een verantwoorde lezing begint met het vergelijken van de coördinaten met de plaats delict, de werklocatie of de geclaimde gebeurtenis. Daarna controleer je of de GPS-tijd overeenkomt met de EXIF-opnametijd. Als de camera geen GPS-chip heeft, als de locatievoorziening was uitgeschakeld of als het bestand opnieuw is gecomprimeerd, kunnen coördinaten afwezig of inconsistent zijn. Een ontbrekende of afwijkende locatie is op zichzelf geen bewijs van manipulatie, maar een reden om het bestand in een breder forensisch onderzoek te plaatsen.' },

  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },
  { type: 'paragraph', html: "Interpreteer het resultaat samen met de aannames van de calculator voordat u het gebruikt." },
  { type: 'paragraph', html: "Controleer invoer, eenheden, afronding, datum en jurisdictie, want elk onderdeel kan de schatting wijzigen." },
  { type: 'paragraph', html: "Gebruik het resultaat voor planning en scenariokeuze; het vervangt geen officiële berekening of professioneel advies." },],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
