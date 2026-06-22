import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'tweelingparadox-visualisator';
const title = 'Tweelingparadox Visualisator: Speciale Relativiteit Tijddilatatie';
const description = 'Visualiseer hoe speciale relativiteit ervoor zorgt dat een snelreizende tweeling jonger terugkeert dan de tweeling die op Aarde bleef.';

const howTo = [
  {
    name: 'Stel de ruimteschiessnelheid in',
    text: 'Gebruik de snelheidsschuifregelaar om een fractie van de lichtsnelheid te kiezen en zie de lorentzfactor toenemen.',
  },
  {
    name: 'Kies de missieduur in het aardse stelsel',
    text: 'Pas aan hoeveel jaren er verstrijken voor de tweeling die op Aarde blijft tijdens de volledige heen- en terugreis.',
  },
  {
    name: 'Vergelijk de klokken en wereldlijnen',
    text: 'Lees het leeftijdsverschil, de verstreken tijd aan boord, de afstand in het aardse stelsel en de gebogen wereldlijn die de wisseling van inertiaalstelsel van de reizende tweeling markeert.',
  },
];

const faq = [
  {
    question: 'Wat is de tweelingparadox in de speciale relativiteit?',
    answer: 'De tweelingparadox is een gedachte-experiment waarbij een tweeling met relativistische snelheid door de ruimte reist en later jonger naar de Aarde terugkeert dan de tweeling die thuisbleef. Het voelt paradoxaal omdat elke tweeling de ander aanvankelijk als bewegend kan beschrijven, maar de reizende tweeling verandert van inertiaalstelsel tijdens het omkeren, waardoor de twee paden door de ruimtetijd niet symmetrisch zijn.',
  },
  {
    question: 'Waarom veroudert de reizende tweeling minder?',
    answer: 'In de speciale relativiteit hangt de verstreken eigentijd af van het pad door de ruimtetijd. Een klok die met snelheid v beweegt ten opzichte van een inertiaalwaarnemer, tikt langzamer met de lorentzfactor gamma. De reiziger accumuleert minder eigentijd langs de heen- en terugweg dan de thuisblijvende tweeling op Aarde.',
  },
  {
    question: 'Veroorzaakt versnelling het leeftijdsverschil?',
    answer: 'Versnelling is belangrijk omdat het de reiziger in staat stelt om van richting te veranderen en terug te keren naar de Aarde, maar het leeftijdsverschil wordt berekend uit het volledige ruimtetijdpad, niet alleen uit de versnelling. Zelfs als de ommekeer zeer kort zou zijn, zou het reizende pad nog steeds minder eigentijd bevatten dan het aardse pad.',
  },
  {
    question: 'Wat betekent de lorentzfactor gamma?',
    answer: 'De lorentzfactor gamma is gelijk aan 1 gedeeld door de wortel van 1 min v kwadraat over c kwadraat. Het vertelt hoe sterk tijdsintervallen, lengtes en energieën verschillen tussen inertiaalstelsels. Bij alledaagse snelheden is gamma bijna 1, maar nabij de lichtsnelheid stijgt het sterk.',
  },
  {
    question: 'Kan dit effect in het echt worden gemeten?',
    answer: 'Ja. Tijddilatatie is gemeten met snelle deeltjes, atoomklokken aan boord van vliegtuigen, satellietnavigatiesystemen en deeltjesversnellers. De tweelingparadox gebruikt een extreem reisverhaal, maar het onderliggende klokeffect is een routinematig geverifieerd onderdeel van de moderne natuurkunde.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Tweelingparadox ruimtetijdvisualisatie',
    controlsTitle: 'Tweelingparadox bediening',
    worldlineLabel: 'Wereldlijn diagram voor aardse tweeling en reizende tweeling',
    earthTwin: 'Leeftijd aardse tweeling',
    travelingTwin: 'Leeftijd reiziger',
    presetCruise: 'Cruise',
    presetRelativistic: 'Relativistisch',
    presetExtreme: 'Extreem',
    velocityLabel: 'Ruimteschip snelheid',
    earthYearsLabel: 'Verstreken tijd op Aarde',
    ageGapLabel: 'Leeftijdsverschil bij hereniging',
    gammaLabel: 'Lorentzfactor',
    shipTimeLabel: 'Eigentijd reiziger',
    distanceLabel: 'Omkeerafstand',
    yearsUnit: 'jaar',
    yearsShortUnit: 'jaar',
  },
  seo: [
    {
      type: 'title',
      text: 'Tweelingparadox Calculator voor Speciale Relativiteit',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De tweelingparadox visualisator verandert een van de beroemdste ideeën uit de speciale relativiteit in een interactief ruimtetijd diagram. Stel een ruimteschiessnelheid in als fractie van de lichtsnelheid, kies hoeveel jaren er op Aarde verstrijken, en de calculator berekent de lorentzfactor, de eigentijd van de reiziger, het leeftijdsverschil bij hereniging en de afstand tot het omkeerpunt. De visuele layout scheidt de aardse klok van de ruimteschipklok zodat de asymmetrie zichtbaar is in plaats van verborgen in formules.',
    },
    {
      type: 'title',
      text: 'Hoe de Berekening Werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De kernwaarde is de lorentzfactor: gamma = 1 / sqrt(1 - v^2 / c^2). Voor een simpele heen-en-terugreis met constante kruissnelheid is de door de reiziger ervaren tijd de missieduur in het aardse stelsel gedeeld door gamma. Het verschil tussen deze twee tijden is het leeftijdsverschil wanneer de tweelingen elkaar weer ontmoeten. De tool toont ook de omkeerafstand in het aardse stelsel, die gelijk is aan de helft van de totale aardse tijd vermenigvuldigd met de ruimteschiessnelheid in lichtjaren per jaar.',
    },
    {
      type: 'table',
      headers: ['Snelheid', 'Lorentzfactor', 'Kloktempo Reiziger', 'Fysieke Betekenis'],
      rows: [
        ['0.50c', '1.155', '86.6% van het aardse tempo', 'Een merkbaar maar gematigd relativistisch effect.'],
        ['0.86c', '1.960', '51.0% van het aardse tempo', 'De reiziger veroudert ongeveer half zo snel tijdens de cruise.'],
        ['0.98c', '5.025', '19.9% van het aardse tempo', 'Extreme tijddilatatie domineert de missie-uitkomst.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom de Situatie Niet Symmetrisch Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Op het eerste gezicht kan elke tweeling zeggen dat de ander beweegt, waardoor de uitkomst tegenstrijdig lijkt. De oplossing is dat de aardse tweeling ongeveer in een inertiaalstelsel blijft, terwijl de reizende tweeling vertrekt, van richting verandert en terugkeert. Die verandering van inertiaalstelsel geeft de reiziger een ander pad door de ruimtetijd. De wereldlijn die deze tool tekent, buigt bij de ommekeer, terwijl de wereldlijn van de aardse tweeling recht blijft.',
    },
    {
      type: 'title',
      text: 'Het Wereldlijndiagram Lezen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een wereldlijn is een kaart van een object door de ruimtetijd in plaats van alleen door de ruimte. In deze visualisator stelt de verticale aardlijn de tweeling voor die thuisblijft. Het schuine rode pad stelt de reiziger voor die de Aarde verlaat en terugkeert. Het verhogen van de snelheid doet het pad van de reiziger sterker hellen en vermindert de hoeveelheid eigentijd die op de ruimteschipklok wordt geaccumuleerd.',
    },
    {
      type: 'list',
      items: [
        '<strong>Leeftijdsverschil:</strong> hoeveel jonger de reiziger is bij hereniging.',
        '<strong>Lorentzfactor:</strong> de vermenigvuldiger die aardse tijd koppelt aan de eigentijd van de reiziger.',
        '<strong>Eigentijd reiziger:</strong> de werkelijk verstreken tijd gemeten door een klok aan boord van het ruimteschip.',
        '<strong>Omkeerafstand:</strong> de afstand in het aardse stelsel voordat de reiziger omkeert.',
      ],
    },
    {
      type: 'title',
      text: 'Praktisch Bewijs voor Tijddilatatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De tweelingparadox is een mooi gedachte-experiment, maar tijddilatatie is niet speculatief. Muonen die in de bovenste atmosfeer worden gecreëerd, overleven lang genoeg om de grond te bereiken omdat hun bewegende klokken vanuit aards perspectief vertraagd zijn. Atoomklokexperimenten in vliegtuigen en precisiesatellietnavigatie vereisen ook relativistische correcties. Dezelfde wiskunde achter deze visualisator maakt deel uit van de tijdsbepalingsinfrastructuur die door moderne GPS-systemen wordt gebruikt.',
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
