import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'temperaturzeitleiste-der-erde';
const title = 'Durchschnittliche Temperaturzeitleiste der Erde';
const description = 'Erkunden Sie die Geschichte der durchschnittlichen Erdtemperatur über geologische Epochen hinweg.';

const howTo = [
  { name: 'Epoche auswählen', text: 'Klicken Sie auf eine Kerbe auf dem Skalenlineal.' },
  { name: 'Temperatur prüfen', text: 'Lesen Sie die globale Durchschnittstemperatur ab.' },
  { name: 'Planet beobachten', text: 'Beobachten Sie, wie die Anzeige auf den thermischen Zustand reagiert.' },
];

const faq = [
  {
    question: 'War die Erde in der Vergangenheit wärmer als heute?',
    answer: 'Ja, die Erde erlebte Klimata, die wesentlich wärmer waren als heute. Während des Mesozoikums (Zeitalter der Dinosaurier) und des frühen Eozäns befand sich der Planet in einem Treibhauszustand ohne polare Eiskappen, und die Temperaturen lagen teilweise 7 bis 8 Grad über dem heutigen Durchschnitt. Diese Übergänge erstreckten sich jedoch über Jahrmillionen.'
  },
  {
    question: 'Was verursachte das Schneeball-Erde-Phänomen?',
    answer: 'Die "Schneeball-Erde" (globale Vereisung) vor etwa 700 Millionen Jahren wurde durch eine extreme Verringerung von Treibhausgasen infolge beschleunigter Silikatverwitterung nach dem Auseinanderbrechen des Superkontinents Rodinia ausgelöst. Der hohe Albedo-Effekt durch das Eis verstärkte die Abkühlung.'
  },
  {
    question: 'Wie reguliert die Erde ihre Temperatur langfristig?',
    answer: 'Die Erde nutzt einen natürlichen Thermostaten: den geologischen Kohlenstoffkreislauf. Bei Erwärmung verstärkt sich die Silikatverwitterung, die der Atmosphäre CO2 entzieht und im Ozean als Karbonat bindet, was den Treibhauseffekt abschwächt.'
  },
  {
    question: 'Wie unterscheidet sich der Klimawandel im Anthropozän?',
    answer: 'Der entscheidende Unterschied ist die Geschwindigkeit. Während natürliche Übergänge Jahrmillionen dauerten, vollzieht sich die heutige Erwärmung in wenigen Jahrzehnten. Diese Rate ist exponentiell schneller und übersteigt die Anpassungsfähigkeit der heutigen Biosphäre.'
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Temperaturzeitleiste der Erde',
    sub: 'Erkunden Sie die geologischen Klimaepochen der Erde',
    ageLabel: 'Alter:',
    tempLabel: 'Durchschnittstemperatur:',
    selectPrompt: 'Wählen Sie eine geologische Periode aus.',
    epoch_archean_name: 'Archäikum',
    epoch_archean_age: '4,0 bis 2,5 Mrd. Jahre vor heute',
    epoch_archean_desc: 'Extrem heiße Erde mit methanreicher Atmosphäre.',
    epoch_proterozoic_name: 'Proterozoikum',
    epoch_proterozoic_age: '2,5 Mrd. bis 541 Mio. Jahre vor heute',
    epoch_proterozoic_desc: 'Sauerstoffanstieg löst globale Vereisung aus.',
    epoch_paleozoic_name: 'Paläozoikum',
    epoch_paleozoic_age: '541 bis 252 Mio. Jahre vor heute',
    epoch_paleozoic_desc: 'Lebensexplosion in Ozeanen und Landbesiedlung.',
    epoch_mesozoic_name: 'Mesozoikum',
    epoch_mesozoic_age: '252 bis 66 Mio. Jahre vor heute',
    epoch_mesozoic_desc: 'Zeitalter der Dinosaurier unter Treibhausbedingungen.',
    epoch_cenozoic_name: 'Känozoikum',
    epoch_cenozoic_age: '66 Mio. Jahre vor heute bis Gegenwart',
    epoch_cenozoic_desc: 'Allmähliche Abkühlung und quartäre Eiszeiten.',
    epoch_anthropocene_name: 'Anthropozän',
    epoch_anthropocene_age: 'Gegenwart und Zukunft',
    epoch_anthropocene_desc: 'Beschleunigte Erwärmung durch Treibhausgasemissionen.',
  },
  seo: [
    { type: 'title', text: 'HISTORISCHE KLIMATOLOGIE: Die thermische Evolution der Erde', level: 2 },
    { type: 'paragraph', html: 'Das Klima der Erde war nie statisch. Unser Planet schwankte zwischen Treibhaus- und Eiszeit-Zuständen. Das Verständnis dieser Prozesse ist entscheidend, um den heutigen anthropogenen Klimawandel in einen geologischen Kontext zu setzen.' },
    { type: 'title', text: 'Temperaturdaten nach Epochen', level: 3 },
    {
      type: 'table', headers: ['Geologische Epoche', 'Alter', 'Temp.', 'Merkmale'], rows: [
        ['Archäikum', '4,0-2,5 Ga', '30 °C', 'Extremer Treibhauseffekt durch Methan.'],
        ['Proterozoikum', '2,5 Ga-541 Ma', '12 °C', 'Globale Vereisung ("Schneeball Erde").'],
        ['Paläozoikum', '541-252 Ma', '20 °C', 'Landbesiedlung und Biodiversitätszunahme.'],
        ['Mesozoikum', '252-66 Ma', '22 °C', 'Treibhauswelt ohne Polareis.'],
        ['Känozoikum', '66 Ma-heute', '14 °C', 'Allmähliche Abkühlung.'],
        ['Anthropozän', 'Gegenwart', '15,2 °C', 'Anthroprogene Erwärmung.']
      ]
    }
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