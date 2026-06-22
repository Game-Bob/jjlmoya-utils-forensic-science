const slug = 'celvernieuwingscalculator';
const description = 'Bereken welk percentage van je lichaam is vernieuwd sinds je geboorte. Schattingen op basis van de celdelingssnelheid van organen, botten en weefsels. De Paradox van Theseus tastbaar gemaakt.';
const title = 'Celvernieuwingscalculator: Hoeveel is er nog over van de originele "Jij"?';
const howTo = [
    {
      name: 'Pas je leeftijd aan',
      text: 'Versleep de schuifregelaar van 1 tot 105 jaar. Dit is de belangrijkste variabele voor de berekening van de celvernieuwing.',
    },
    {
      name: 'Bekijk het hoofdpercentage',
      text: 'Het grote getal in het midden geeft aan welk percentage van je huidige materie "nieuw" is (vernieuwd sinds de geboorte).',
    },
    {
      name: 'Analyseer de voortgangsbalken',
      text: 'Elke balk staat voor een ander weefsel: huid/bloed, botten, organen en hersenen. Merk op hoe de hersenen nauwelijks veranderen terwijl de huid zich voortdurend vernieuwt.',
    },
    {
      name: 'Reflecteer op je identiteit',
      text: 'Als 99% van jou uit nieuwe materie bestaat, wie ben je dan werkelijk? Gebruik deze tool als startpunt voor reflectie over persoonlijke continuïteit en de Paradox van Theseus.',
    },
  ];
const faq = [
    {
      question: 'Wat is "celvernieuwing" precies?',
      answer: 'Het is het natuurlijke proces waarbij verouderde of beschadigde cellen afsterven (apoptose) en worden vervangen door nieuwe cellen die ontstaan door celdeling (mitose). Deze cyclus is essentieel voor het behoud van functionele weefsels en het herstellen van schade.',
    },
    {
      question: 'Waarom vernieuwen de hersenen zo langzaam?',
      answer: 'Neuronen in de hersenschors worden voor de geboorte aangemaakt en delen zich over het algemeen niet meer. Dit zorgt voor neurologische stabiliteit: je fundamentele "bedrading" blijft constant. Glia-cellen (ondersteunend) vernieuwen echter wel. Herinneringen worden opgeslagen in verbindingen, niet in atomen.',
    },
    {
      question: 'Is het waar dat we elke 7 jaar "nieuwe mensen" zijn?',
      answer: 'Dat is een versimpeling en niet accuraat. Je bloed vernieuwt in 4 maanden, je huid in een maand, je skelet in 10 jaar. Je hersenen blijven grotendeels ongewijzigd. Het getal 7 jaar is historisch (Aristoteles noemde het al), maar biologisch gezien is het een onnauwkeurig gemiddelde.',
    },
    {
      question: 'Als mijn lichaam voor 99% nieuw is, ben ik dan nog wel dezelfde persoon?',
      answer: 'Ja. Identiteit is een continuïteit van informatie, bewustzijn en geheugen, niet van atomen. Je bent als een rivier: het water verandert constant, maar de rivier blijft bestaan. De Paradox van Theseus suggereert dat identiteit in het patroon schuilt, niet in de materie.',
    },
    {
      question: 'Welke weefsels vernieuwen het snelst?',
      answer: 'Bloed en huid lopen voorop. Je beenmerg produceert dagelijks 200 miljard bloedcellen. Je verliest ongeveer 30.000 huidcellen per minuut. Daarom genezen ze zo goed en verouderen ze zo zichtbaar: ze zijn jong in termen van cel-leeftijd.',
    },
    {
      question: 'Vernieuwt de ooglens zich echt niet?',
      answer: 'Klopt. Lenscellen worden aangemaakt tijdens de embryonale ontwikkeling en gaan een leven lang mee. Als je 100 bent, kunnen de centrale cellen van je lens nog steeds dezelfde zijn als toen je in de baarmoeder zat. Het is een biologische tijdcapsule.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Gekopieerd',
    noHistory: 'Geen geschiedenis',
    load: 'Laden',
    delete: 'Verwijderen',
    biologicalTimeline: 'Biologische Tijdlijn',
    ageUnit: 'jaren van evolutie',
    matterNewPercent: 'Je materie is nieuw voor',
    atomicRenewal: 'Atomaire Vernieuwing',
    skinAndBlood: 'Huid en Bloed',
    boneRemodeling: 'Botvernieuwing',
    organicMatrix: 'Organische Matrix',
    perennialCells: 'Blijvende Cellen',
    disclaimerText: 'Berekeningen zijn gebaseerd op de gemiddelde levensduur van cellen volgens isotopenonderzoek. Terwijl bloed en huid in weken vernieuwen, blijven de eiwitten in de ooglens en een groot deel van je hersenschors behouden sinds de embryonale ontwikkeling. Fysiek ben je een dynamische structuur in constante verandering.',
  },
  seo: [
    {
      type: 'title',
      text: 'Hoeveel van jou is er werkelijk "van jou"? De wetenschap van celvernieuwing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Je lichaam is als een rivier die constant in beweging is. Elke seconde sterven miljoenen cellen en worden ze vervangen door nieuwe. In zeven jaar tijd is praktisch elk atoom in je lichaam vervangen. Deze statistiek is echter zeer misleidend, omdat verschillende delen van je organisme met radicaal verschillende snelheden vernieuwen.',
    },
    {
      type: 'paragraph',
      html: 'Deze paradox, bekend als de <strong>Paradox van het Schip van Theseus</strong>, stelt een eeuwenoude vraag: als je alle onderdelen van iets vervangt, is het dan nog steeds hetzelfde ding? In jouw geval is dit een letterlijke vraag. De atomen waaruit je lichaam vandaag bestaat, zijn niet dezelfde als die van 10 jaar geleden, maar <em>jij</em> bent nog steeds jij.',
    },
    {
      type: 'title',
      text: 'Celvernieuwing: Een Kaart van je Dynamische Lichaam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De snelheid van vernieuwing varieert drastisch per weefsel:',
    },
    {
      type: 'table',
      headers: ['Weefsel', 'Gemiddelde Levensduur Cel', 'Volledige Vernieuwing', 'Beschrijving'],
      rows: [
        ['<strong>Bloed</strong>', '120 dagen', '4 maanden', 'Rode bloedcellen zijn de snelste. Je beenmerg produceert er dagelijks 200 miljard.'],
        ['<strong>Huid</strong>', '2-4 weken', '1 maand', 'Extreem snelle vernieuwing. Je verliest ~30.000 huidcellen per minuut.'],
        ['<strong>Bot</strong>', '10 jaar', 'Eén decennium', 'Het skelet is conservatiever. Toch heb je na 10 jaar praktisch je hele skelet vervangen.'],
        ['<strong>Organen</strong>', '15 jaar', '1,5 decennium', 'De lever vernieuwt in maanden. Het hart in jaren. Een mozaïek van ritmes.'],
        ['<strong>Hersenen</strong>', '80+ jaar (neuronen)', 'Bijna nooit', 'Je corticale neuronen dateren van de geboorte. Maar glia (ondersteunende cellen) vernieuwen wel.'],
      ],
    },
    {
      type: 'title',
      text: 'De Ooglens: Het Oudste Deel van Jou',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Er is één structuur in je lichaam die speciaal is: de <strong>ooglens</strong>. De cellen waaruit de lens bestaat, worden aangemaakt tijdens de foetale ontwikkeling en nooit vervangen. Als je 100 jaar oud wordt, zijn de centrale cellen van je lens nog steeds dezelfde als die je in de baarmoeder had. Ze zijn letterlijk het oudste deel van je lichaam.',
    },
    {
      type: 'title',
      text: 'Berekening Totale Vernieuwing: De Paradox van de Gewichten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze calculator gebruikt een gewogen gemiddelde van verschillende weefsels:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% huid en bloed:</strong> Bijna volledige vernieuwing op jonge leeftijd.',
        '<strong>35% skelet:</strong> Progressieve vernieuwing, bereikt 100% na 10 jaar.',
        '<strong>25% organen:</strong> Langzamere vernieuwing, variabel per orgaan.',
        '<strong>10% hersenen:</strong> Minimale verandering in neuronen, maximale in ondersteunende structuren.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Het resultaat is dat op 25-jarige leeftijd ongeveer <strong>93% van je huidige materie nieuw</strong> is. Op 80-jarige leeftijd zou je voor meer dan 99% uit andere atomen kunnen bestaan dan die je bij je geboorte had.',
    },
    {
      type: 'title',
      text: 'Filosofische Implicaties: Identiteit is Informatie, Niet Materie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als je lichaam elk decennium volledig nieuw is, waarom ben je het dan nog steeds zelf? Het antwoord is dat identiteit niet schuilt in specifieke atomen, maar in het <strong>patroon van informatie</strong> dat die atomen vasthouden. Je bent als een lied: het is niet dezelfde trillende lucht, maar het patroon blijft bestaan.',
    },
    {
      type: 'paragraph',
      html: 'Dit heeft diepe implicaties: je lichaam is een proces, geen ding. Je bent een zelforganiserend patroon dat door verandering heen blijft bestaan. Je bezit geen atomen; je bent een structuur die ze tijdelijk kanaliseert.',
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

