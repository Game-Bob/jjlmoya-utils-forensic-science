import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-promillage-calculator';
const title = 'Widmark Promillage Simulator';
const description = 'Simuleer de absorptie, distributie en eliminatie van alcohol in het menselijk lichaam met de formule van Widmark.';

const howTo = [
  {
    name: 'Stel het subject profiel in',
    text: 'Voer het gewicht, biologisch geslacht en hydratatieniveau in. Deze biologische kenmerken bepalen de Widmark factor (r) die het verdelingsvolume van ethanol in het lichaam dicteert.',
  },
  {
    name: 'Kies de maaginhoud',
    text: 'Selecteer lege maag, lichte maaltijd of volle maaltijd. Dit past de absorptiesnelheidsconstante (ka) aan om het vertragende effect van voedsel op de bloedalcoholcurve te tonen.',
  },
  {
    name: 'Voeg drankjes toe aan de tijdlijn',
    text: 'Voeg individuele drankjes toe door het volume in milliliters, het alcoholpercentage (ABV) en de tijd van consumptie in te voeren.',
  },
  {
    name: 'Analyseer de bloedalcoholcurve',
    text: 'Bekijk de resulterende grafiek over 12 uur. Vergelijk de piekwaarde, de tijd om de piek te bereiken en de totale nuchterheidstijd met de wettelijke limieten.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Wat is de formule van Widmark en hoe wordt deze gebruikt in forensisch onderzoek?',
    answer: 'De formule van Widmark is een wiskundig model ontwikkeld door Erik M. P. Widmark in 1932. Het schat de bloedalcoholconcentratie op basis van de geconsumeerde alcoholmassa, het lichaamsgewicht, een verdelingsfactor (r) en een lineaire eliminatiesnelheid. Forensisch toxicologen gebruiken deze formule voor terugrekeningen naar het tijdstip van een ongeval.',
  },
  {
    key: 'faq-2',
    question: 'Hoe beïnvloedt voedsel in de maag de bloedalcoholcurve?',
    answer: 'Voedsel in de maag vertraagt de maaglediging, waardoor alcohol minder snel in de dunne darm (de belangrijkste opnameplaats) terechtkomt. In onze simulatie modelleren we dit door de absorptiesnelheidsconstante (ka) te verlagen, wat de piek verschuift naar een later tijdstip en de maximale piekwaarde aanzienlijk verlaagt.',
  },
  {
    key: 'faq-3',
    question: 'Waarom verloopt de eliminatie van alcohol via nulde-orde kinetiek?',
    answer: 'De meeste medicijnen worden geklaard via eerste-orde kinetiek (snelheid is evenredig met concentratie). Alcoholklaring volgt nulde-orde kinetiek omdat het belangrijkste leverenzym, alcoholdehydrogenase (ADH), al bij zeer lage concentraties (ongeveer 0,02 g/L) volledig verzadigd raakt. De lever breekt alcohol dus af met een constante maximale snelheid.',
  },
  {
    key: 'faq-4',
    question: 'Welke biologische factoren veroorzaken variaties in de Widmark-factor r?',
    answer: 'De Widmark-factor r vertegenwoordigt de verhouding tussen lichaamswater en het totale gewicht. Omdat ethanol hydrofiel en lipofoob is, verdeelt het zich uitsluitend in water. Spierweefsel bevat veel water, vetweefsel vrijwel niets. Mensen met een hoger vetpercentage of dehydrogenering hebben een kleiner verdelingsvolume, wat leidt tot een hogere BAC.',
  },
  {
    key: 'faq-5',
    question: 'Kan ik deze simulator gebruiken om aan te tonen dat ik mag autorijden?',
    answer: 'Absoluut niet. Deze simulator is een educatief hulpmiddel. In de praktijk zorgen enzymatische genetica, levergezondheid, medicijngebruik en maaginhoud voor grote individuele afwijkingen. Vertrouw nooit op een wiskundige berekening om te bepalen of u mag rijden.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Profiel',
    weight: 'Gewicht (kg)',
    sex: 'Biologisch geslacht',
    male: 'Man',
    female: 'Vrouw',
    hydration: 'Hydratatie',
    hydrationLow: 'Laag',
    hydrationNormal: 'Normaal',
    hydrationHigh: 'Hoog',
    stomachState: 'Maaginhoud',
    stomachEmpty: 'Leeg (Snel)',
    stomachLight: 'Lichte maaltijd (Medium)',
    stomachFull: 'Volle maaltijd (Langzaam)',
    drinksTimeline: 'Consumptieverloop',
    addDrink: 'Drankje toevoegen',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Alcoholpercentage (% vol)',
    drinkTime: 'Tijd (Uur)',
    drinksList: 'Geconsumeerde drankjes',
    remove: 'Verwijderen',
    beer: 'Bier (330ml, 5%)',
    wine: 'Wijn (150ml, 12%)',
    spirits: 'Sterke drank (40ml, 40%)',
    peakBac: 'Piek BAC',
    timeToSober: 'Tijd tot nuchter',
    sober: 'Nuchter',
    currentBac: 'Actuele BAC',
    drivingLimitAlert: 'Rijstatus',
    safeLimit: 'Onder limiet',
    warningLimit: 'Waarschuwingslimiet overschreden',
    dangerLimit: 'Gevaargrens overschreden',
    graphTitle: 'Bloedalcoholgehalte over 12 uur',
    timeAxisLabel: 'Tijd (Uur)',
    bacAxisLabel: 'Promillage (g/L)',
    legalLimitText: 'Wettelijke limiet',
    noDrinksText: 'Voeg drankjes toe om de curve te simulieren.',
    hours: 'uur',
    soberStatus: 'Nuchter in {time} uur',
    neverSober: 'Langer dan 12u',
    noteDisclaimer: 'Uitsluitend voor educatieve doeleinden. Rijd niet na alcoholgebruik.',
    noteWidmark: 'Gebaseerd op de Widmark-formule en lineaire klaring.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensische Toxicologie en Farmacokinetiek van Ethanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De absorptie, distributie en eliminatie van ethanol in het menselijk lichaam zijn cruciale concepten binnen de forensische wetenschap en verkeersongevallenreconstructie. Na consumptie wordt alcohol deels via de maag en hoofdzakelijk via de dunne darm opgenomen. Voedsel in de maag vertraagt de maaglediging en verlaagt daardoor de piekwaarde van de alcoholconcentratie in het bloed aanzienlijk.',
    },
    {
      type: 'paragraph',
      html: 'Dit model maakt gebruik van de formule van Widmark gecombineerd met een continu compartimentenmodel over 12 uur. Door fysiologische variabelen aan te passen, kan de gebruiker het wiskundige verloop en de daaropvolgende lineaire afname van de bloedalcoholconcentratie visualiseren.',
    },
    {
      type: 'title',
      text: 'Wiskundige afleiding van de Widmark-formule',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De formule van Widmark schat de bloedalcoholconcentratie onder aanname van directe opname: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Waarbij <em>A</em> staat voor de massa pure ethanol in grammen, <em>W</em> het lichaamsgewicht van het subject in kg, en <em>r</em> de Widmark-factor (het verdelingsvolume). De parameter <em>&beta;</em> stelt de stündliche eliminatiesnelheid voor en <em>t</em> is de verstreken tijd.',
    },
    {
      type: 'paragraph',
      html: 'Om drankvolume om te rekenen naar grammen pure ethanol, vermenigvuldigen we het volume (ml) met het alcoholpercentage (ABV) en de dichtheid van ethanol (0,8 g/ml). Een 330 ml bier op 5% bevat 13,2 gram pure ethanol. Dit wordt verdund op basis van het totale lichaamswater. De simulator past factor r aan op basis van biologisch geslacht (mannen 0,68 en vrouwen 0,55) en de hydratatiestatus.',
    },
    {
      type: 'title',
      text: 'Fysiologische variabelen en het verdelingsvolume',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het verdelingsvolume van ethanol hangt direct samen met de lichaamssamenstelling. Ethanol is hydrofiel en lipofoob, waardoor het zich enkel in water verdeelt. Spieren bevatten circa 75% water, vetweefsel bijna niets. Mensen met een hogere spiermassa hebben een grotere Widmark-factor r en tonen een lagere piekwaarde bij gelijke inname. Dehydratatie verlaagt het totale lichaamswater en verhoogt zo de piekconcentratie.',
    },
    {
      type: 'table',
      headers: ['Fysiologische variabele', 'Biologisch mechanisme', 'Farmacokinetisch effect', 'Forensisch belang'],
      rows: [
        ['Lichaamsgewicht', 'Bepaalt het totale volume van het lichaamswater.', 'Omgekeerd evenredig met de maximale BAC-piek.', 'Vormt de basis voor forensische terugrekeningen.'],
        ['Biologisch geslacht', 'Beïnvloedt de typische verhouding tussen spieren en vet.', 'Factor r is lager bij vrouwen (0,55) dan mannen (0,68).', 'Verklaart de hogere gevoeligheid bij vrouwen bij gelijke doses.'],
        ['Hydratatiestatus', 'Wijzigt de hoeveelheid vrij water in het lichaam.', 'Dehydratatie verlaagt r met 0,05, waardoor de curve stijgt.', 'Ajusteert berekeningen bij zware fysieke inspanning.'],
        ['Maaginhoud', 'Voedsel vertraagt de maaglediging.', 'Verlaagt de absorptieconstante ka en vlakt de curve af.', 'Verklaart lage meetwaarden na een zware maaltijd.'],
      ],
    },
    {
      type: 'title',
      text: 'Eliminatiekinetik: Nulde-orde klaring in de lever',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na opname in het bloed wordt alcohol hoofdzakelijk in de lever afgebroken door het enzym alcoholdehydrogenase (ADH). Dit enzym raakt al bij zeer lage concentraties (0,02 g/L) volledig verzadigd, wat leidt tot een nulde-orde kinetiek. Dit betekent dat de lever een constante hoeveelheid alcohol per uur verwerkt. Het gemiddelde forensische afbraaktempo (&beta;<sub>60</sub>) is vastgesteld op 0,15 g/L per uur. Dit lineaire verloop zorgt voor de rechte dalende lijn op het diagram.',
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
      applicationCategory: 'ForensicApplication',
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
