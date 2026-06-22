const description = 'Analyseer of onze realiteit een simulatie is met behulp van Nick Bostrom\'s trilemma-argument. Bereken de existentiële waarschijnlijkheid met 4 sleutelparameters.';
const slug = 'simulatie-waarschijnlijkheid-calculator';
const title = 'Simulatie Waarschijnlijkheid Calculator: Leef je in een virtueel universum?';
const howTo = [
    {
      name: 'Pas Technologische Vooruitgang aan',
      text: 'Schat de waarschijnlijkheid dat de mensheid het post-humaan niveau bereikt. 50% is neutraal; verhoog dit als je gelooft dat AI en computing exponentieel zullen blijven groeien.',
    },
    {
      name: 'Stel Overlevingspercentage in',
      text: 'Overweeg de waarschijnlijkheid dat de mensheid zichzelf niet vernietigt. Factoren in oorlogen, klimaatverandering, pandemieën. Hoge waarden = optimisme over onze toekomst.',
    },
    {
      name: 'Evalueer Interesse in Simuleren',
      text: 'Als de mensheid het post-humaan niveau bereikt, zou ze dan simulaties van haar verleden willen creëren? Overweeg motivaties: wetenschappelijk onderzoek, entertainment, historisch behoud.',
    },
    {
      name: 'Interpreteer het resultaat',
      text: 'Observeer hoe de waarschijnlijkheden veranderen. Resultaten > 90% suggereren dat een simulatie bijna onvermijdelijk is als aan de aannames wordt voldaan. Speel met de parameters om verschillende toekomsten te verkennen.',
    },
  ];
const faq = [
    {
      question: 'Wat is Bostrom\'s argument precies?',
      answer: 'Nick Bostrom stelt voor dat als een post-humane beschaving over voldoende rekenkracht beschikt, zij miljoenen simulaties van vorige universums zou kunnen creëren. Als dat gebeurt, zou het aantal gesimuleerde wezens massaal hoger zijn dan originele biologische wezens. Statistisch gezien is de kans daarom groter dat je gesimuleerd bent dan origineel.',
    },
    {
      question: 'Betekenen hoge waarschijnlijkheden dat we definitief een simulatie zijn?',
      answer: 'Nee. Hoge waarschijnlijkheden suggereren dat het een serieuze mogelijkheid is die overwogen moet worden, maar het is geen bewijs. Het argument is gebaseerd op aannames over de toekomst van technologie die misschien niet worden vervuld.',
    },
    {
      question: 'Wat voor invloed zou het op ons hebben als we weten dat we een simulatie zijn?',
      answer: 'Filosofisch gezien beweren velen dat het niets fundamenteels verandert. Als jij en je dierbaren samen worden gesimuleerd, blijven je ervaringen, emoties en relaties echt en gevoeld. De geleefde ervaring is wat telt, niet het substraat.',
    },
    {
      question: 'Is er wetenschappelijk bewijs dat we in een simulatie zitten?',
      answer: 'Er is geen overtuigend bewijs. Sommige natuurkundigen wijzen op anomalieën in de kwantummechanica (kwantisering, verstrengeling) als mogelijke "computationele optimalisaties", maar dit zijn speculatieve interpretaties.',
    },
    {
      question: 'Welke waarde moet ik toekennen aan "N" (simulatieschaal)?',
      answer: 'Het hangt af van je overtuigingen over de toekomst van computing. Lage waarden (100-1000) gaan uit van beperkte middelen. Hoge waarden (miljoenen) gaan uit van praktisch onbeperkte rekenkracht. De meeste wetenschappelijke discussies gebruiken waarden tussen 1000 en 1 biljoen.',
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
    simulationParameters: 'Simulatieparameters',
    fpLabel: 'fp',
    fpSub: 'Technologische Vooruitgang',
    flLabel: 'fl',
    flSub: 'Overleving van de Soort',
    fiLabel: 'fi',
    fiSub: 'Interesse in Simuleren',
    nLabel: 'N',
    nSub: 'Simulatieschaal',
    probabilityTitle: 'Simulatie Waarschijnlijkheid',
    trilemmaResult: 'Trilemma Verdict',
    scenario1: 'Scenario 1: Uitsterven',
    scenario2: 'Scenario 2: Desinteresse',
    scenario3: 'Scenario 3: We zijn gesimuleerd',
    fpDescription: 'Waarschijnlijkheid dat de mensheid de technische capaciteit bereikt om universums met bewustzijn te simuleren.',
    flDescription: 'Waarschijnlijkheid van het vermijden van instorting (uitsterven, oorlog) alvorens het post-humaan niveau te bereiken.',
    fiDescription: 'Percentage geavanceerde beschavingen dat besluit om simulaties van hun voorouders te maken.',
    nDescription: 'Aantal gesimuleerde werelden dat elke geavanceerde beschaving doorgaans tegelijkertijd draait.',
    verdictDetail: 'De gegevens suggereren dat het uiterst waarschijnlijk is dat jouw bewustzijn een softwareproces is.',
  },
  seo: [
    {
      type: 'title',
      text: 'Leven we in een simulatie? De wetenschap achter Nick Bostrom\'s argument',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het idee dat onze realiteit een kunstmatige constructie zou kunnen zijn, een extreem geavanceerde computersimulatie, is verschoven van sciencefiction naar een serieus filosofisch en wetenschappelijk debat. In 2003 publiceerde filosoof Nick Bostrom van de Universiteit van Oxford een artikel getiteld <em>"Are You Living in a Computer Simulation?"</em>, waarin hij een trilemma-argument voorstelde dat onze perceptie van ons bestaan uitdaagt.',
    },
    {
      type: 'paragraph',
      html: 'Deze simulatie-waarschijnlijkheidscalculator gebruikt sleutelparameters afgeleid van de hypothese van Bostrom om de mogelijkheden in te schatten dat jouw bewustzijn in feite het resultaat is van een softwareproces dat wordt uitgevoerd door een post-humane beschaving.',
    },
    {
      type: 'title',
      text: 'De Pijlers van het Simulatie-argument',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bostrom\'s argument stelt niet dat we ons in een simulatie bevinden, maar dat ten minste een van de volgende drie stellingen vrijwel zeker waar is:',
    },
    {
      type: 'list',
      items: [
        '<strong>Voortijdig Uitsterven:</strong> De menselijke soort zal uitsterven voordat een post-humaan stadium wordt bereikt waarin simulaties van voorouders kunnen worden uitgevoerd.',
        '<strong>Technologische Desinteresse:</strong> Elke post-humane beschaving zal geen interesse hebben in het uitvoeren van simulaties van haar voorouders om ethische of recreatieve redenen.',
        '<strong>Alomtegenwoordige Simulatie:</strong> Vrijwel zeker leven we in een simulatie omdat het aantal gesimuleerde geesten het aantal originele biologische geesten massaal overtreft.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe de Parameters te Interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Om dit hulpmiddel correct te gebruiken, is het essentieel om te begrijpen wat de modelvariabelen vertegenwoordigen:',
    },
    {
      type: 'table',
      headers: ['Variabele', 'Concept', 'Betekenis'],
      rows: [
        ['<strong>fp</strong>', 'Technologische Vooruitgang', 'Waarschijnlijkheid dat een beschaving de capaciteit bereikt om geesten te simuleren.'],
        ['<strong>fl</strong>', 'Overlevingspercentage', 'Waarschijnlijkheid dat de beschaving zichzelf niet vernietigt voordat dat punt is bereikt.'],
        ['<strong>fi</strong>', 'Interesse in Simuleren', 'Percentage beschavingen dat besluit hun macht te gebruiken om virtuele werelden te creëren.'],
        ['<strong>N</strong>', 'Simulatieschaal', 'Totaal aantal simulaties dat een enkele post-humane beschaving zou creëren.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom is de waarschijnlijkheid meestal zo hoog?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als we aannemen dat een post-humane beschaving over enorme rekenkracht zou beschikken (zoals die van een Dyson-bol of een Jupiter-brein), zou het getal <strong>N</strong> (simulaties) in de miljarden kunnen lopen. Als <em>N</em> erg groot is, zal zelfs bij lage waarden van interesse (<em>fi</em>), het aantal gesimuleerde wezens de originele wezens met vele ordes van grootte overtreffen.',
    },
    {
      type: 'title',
      text: 'Bewijs en Computationele Grenzen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Van kwantumfysica tot kosmologie, sommige wetenschappers zoeken naar "glitches" of grenzen in de resolutie van onze realiteit. Als het universum een minimumlengte heeft (Planck-lengte) of gedrag vertoont dat lijkt op code-optimalisaties (zoals kwantumverstrengeling), wint de hypothese aan aanhang op het gebied van digitale fysica.',
    },
    {
      type: 'title',
      text: 'Ethische Reflectie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als we zouden ontdekken dat we een simulatie zijn, zou onze moraal dan veranderen? Voor Bostrom doet de ervaring van het bewustzijn ertoe. Een gesimuleerde geest lijdt en heeft lief, net als een biologische geest.',
    },
    {
      type: 'title',
      text: 'Gebruiksscenario\'s van de Calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Wetenschappelijk Onderwijs:</strong> Inzicht krijgen in probabilistische modellen toegepast op kosmologie.',
        '<strong>Hedendaagse Filosofie:</strong> Bostrom\'s trilemma interactief verkennen.',
        '<strong>Futurologie:</strong> Het analyseren van de impact van het overlevingspercentage van de soort op ons lot.',
        '<strong>Existentiële Nieuwsgierigheid:</strong> Je eigen overtuigingen over de toekomst van technologie evalueren.',
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

