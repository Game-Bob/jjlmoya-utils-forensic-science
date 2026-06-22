const slug = 'asteroide-inslag-simulator';
const description = 'Simuleer inslagen van asteroïden met echte natuurkunde. Bereken energie, krater, thermische straling en schokgolf. Zou jij Chicxulub overleven?';
const title = 'Asteroiden Inslag Simulator: Apocalyps Calculator';
const howTo = [
    {
      name: 'Kies projectielgrootte',
      text: 'Voer de diameter van de asteroïde in, van een kleine meteoriet van 10 meter tot een planeetdoder van 10 kilometer.',
    },
    {
      name: 'Stel snelheid en hoek in',
      text: 'Pas de naderingssnelheid en de invalshoek aan (45° is statistisch gezien de meest waarschijnlijke waarde).',
    },
    {
      name: 'Bepaal de aard van de asteroïde',
      text: 'Selecteer of de asteroïde bestaat uit gesteente, ijzer of ijs om de kraterdiepte correct te berekenen.',
    },
    {
      name: 'Analyseer het overlevingsverdict',
      text: 'Sleep de asteroïde naar de kaart en geef aan hoe ver je bent verwijderd om de effecten van straling, aardbeving en schokgolf te zien.',
    },
  ];
const faq = [
    {
      question: 'Hoe wordt de energie van de inslag berekend?',
      answer: 'De primaire energie is kinetisch: (1/2) * massa * snelheid². We gebruiken realistische dichtheden (bijv. 3000 kg/m³ voor rotsachtige asteroïden) en typische snelheden bij het binnendringen van de atmosfeer (11 tot 72 km/s). De resulterende energie wordt gemeten in megaton TNT.',
    },
    {
      question: 'Wat is een thermische schokgolf?',
      answer: 'Bij het binnendringen van de atmosfeer comprimeert de asteroïde de lucht zo heftig dat er een vuurbal ontstaat die duizend keer helderder is dan de zon. De resulterende thermische straling kan derdegraads brandwonden veroorzaken en bossen mijlenver van de inslagplaats in brand steken.',
    },
    {
      question: 'Waarom veroorzaken sommige asteroïden geen kraters?',
      answer: 'Kleinere objecten (<50m) vallen meestal uiteen en exploderen in de atmosfeer door de luchtdruk (luchtexplosie), zoals gebeurde in Tsjeljabinsk. De energie komt vrij als een krachtige drukgolf, maar het raakt de grond niet als een vast lichaam.',
    },
    {
      question: 'Wat is de werkelijke waarschijnlijkheid van een inslag?',
      answer: 'Kleine inslagen (zoals in Rusland in 2013) gebeuren elk decennium. Catastrofale inslagen (à la Toengoeska) elke paar eeuwen. Een wereldwijde uitsterving zoals bij Chicxulub gebeurt ongeveer elke 100 miljoen jaar.',
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
    activateGPS: 'GPS Activeren',
    analysisLabel: 'Analyse',
    dragToMap: 'SLEEP NAAR KAART',
    diameterLabel: 'Diameter',
    velocityLabel: 'Snelheid',
    typeLabel: 'Type',
    historicalData: 'Historische Gegevens',
    composition: 'Samenstelling',
    rock: 'Gesteente',
    iron: 'IJzer',
    ice: 'IJs',
    clearAll: 'Alles wissen',
    searching: 'Zoeken...',
    gpsActive: 'GPS Actief',
    gpsError: 'GPS Fout',
    verdictSafe: 'VEILIGE ZONE',
    verdictSafeSub: 'Geen dreiging',
    verdictShock: 'SCHOKGOLF',
    verdictShockSub: 'Structurele schade',
    verdictBurned: 'THERMISCHE STRALING',
    verdictBurnedSub: 'Extreem gevaar',
    verdictVaporized: 'GROUND ZERO',
    verdictVaporizedSub: 'Directe inslag',
    presetAerial: 'Luchtexplosie',
    presetForest: 'Bos',
    presetComet: 'Komeet',
    presetELE: 'E.L.E. (Wereldwijde uitsterving)',
  },
  seo: [
    {
      type: 'title',
      text: 'Wanneer de Hemel Valt: De Fysica van de Kosmische Apocalyps',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Asteroïden zijn niet zomaar stenen uit de ruimte. Het zijn kosmische kogels die reizen met 20 km/s, in staat om meer energie vrij te geven dan alle kernwapens op aarde gecombineerd. Deze simulator vertaalt abstracte natuurkunde naar tastbare menselijke gevolgen.',
    },
    {
      type: 'title',
      text: 'De Vergelijking van de Dag des Oordeels',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Het begint allemaal met kinetische energie: <strong>E = ½mv²</strong>. Een asteroïde van 100 meter die reist met 20 km/s geeft ongeveer 0,5 megaton TNT vrij. Ter vergelijking: de Hiroshima-bom had een kracht van 0,015 megaton.',
    },
    {
      type: 'paragraph',
      html: 'Maar de grootte schaalt exponentieel. Een object dat 10 keer groter is heeft een 1.000 keer groter volume (en massa), wat een energie vrijgeeft van <strong>500 megaton</strong>. Chicxulub, de doder van de dinosauriërs, gaf het equivalent van <strong>100 miljoen megaton</strong> vrij.',
    },
    {
      type: 'paragraph',
      html: 'Een asteroïde van 1 km die de aarde raakt, zou meer energie vrijgeven dan alle kernwapens op de planeet die tegelijkertijd tot ontploffing worden gebracht.',
    },
    {
      type: 'title',
      text: 'Anatomie van de Vernietiging: Concentrische Lagen van de Apocalyps',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>De Krater (Ground Zero):</strong> De kraterdiameter schaalt met E^0.3. Een inslag van 1 megaton creëert een krater van circa 1 km. Alles daarbinnen wordt onmiddellijk verdampt.',
        '<strong>Thermische Straling (De Flits):</strong> De vuurbal straalt intense infrarode straling uit. Op afstanden van E^0.41 km vliegt kleding in brand en loopt de huid derdegraads brandwonden op.',
        '<strong>Schokgolf (De Hamer):</strong> De overdrukgolf reist op supersonische snelheid. Bij 1 psi breekt glas. Bij 5 psi storten gebouwen in.',
        '<strong>Aardbeving (De Seismische Echo):</strong> De inslag genereert wereldwijde seismische golven. Chicxulub veroorzaakte een aardbeving met een kracht van 11, wat de schaal van Richter brak.',
      ],
    },
    {
      type: 'title',
      text: 'Historische Inslagen: Lessen uit het Verleden',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Locatie & Jaar', 'Grootte', 'Energie', 'Effecten'],
      rows: [
        ['Tsjeljabinsk, Rusland (2013)', '20 meter', '500 kiloton', 'Schokgolf op 100 km, 1.500 gewonden, gebroken ruiten'],
        ['Toengoeska, Siberië (1908)', '50-60 meter', '10-15 megaton', '2.000 km² bos tegen de grond gedrukt, 80 miljoen bomen geveld'],
        ['Chicxulub, Golf van Mexico (66 mln jaar geleden)', '10 km', '100 miljoen megaton', 'Uitsterven van 75% van het leven op aarde'],
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


