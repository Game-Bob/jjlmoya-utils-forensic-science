import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'tijdstip-van-overlijden-rekenmachine-algor-mortis';
const title = 'Tijdstip van Overlijden Rekenmachine Algor Mortis';
const description = 'Schat het postmortale interval en tijdstip van overlijden met het Henssge nomogram en de afkoeling van het lichaam.';

const howTo = [
  { name: 'Voer rectale en omgevingstemperatuur in', text: 'Voer de gemeten diepe rectale kerntemperatuur en de omgevingstemperatuur op de vindplaats in.' },
  { name: 'Stel lichaamsgewicht en correctiefactor in', text: 'Geef het lichaamsgewicht op en selecteer de omgevingsfactor voor kleding of wateronderdompeling.' },
  { name: 'Geef het meettijdstip op', text: 'Voer het exacte tijdstip van de temperatuurmeting in of kies Huidige tijd.' },
  { name: 'Analyseer het PMI en de afkoelingscurve', text: 'Bekijk het berekende interval, het 95 procent betrouwbaarheidsvenster en de thermische curve.' }
];

const faq = [
  { question: 'Wat is Algor Mortis in de forensische geneeskunde?', answer: 'Algor Mortis is de geleidelijke daling van de lichaamstemperatuur na het overlijden tot thermisch evenwicht met de omgeving is bereikt.' },
  { question: 'Waarom heeft het Henssge nomogram de voorkeur?', answer: 'Omdat het rekening houdt met het initiële temperatuurplateau en de dubbel exponentiële afkoeling op basis van gewicht en kleding.' },
  { question: 'Hoe nauwkeurig is de temperatuurmethode?', answer: 'Onder gecontroleerde standaardomstandigheden is het 95 procent betrouwbaarheidsinterval ongeveer plusminus 2.8 uur in de eerste tien uur.' },
  { question: 'Wat is het postmortale temperatuurplateau?', answer: 'Het plateau is de periode van 1 tot 3 uur na het overlijden waarin de rectale kerntemperatuur nauwelijks daalt.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Schatting van het Postmortaal Interval en Henssge Nomogram',
    disclaimer: 'Uitsluitend voor educatieve en academische doeleinden. Juridische vaststellingen vereisen een volledige gerechtelijke sectie en milieumetingen.',
    unitSystemLabel: 'Eenhedenstelsel',
    unitMetricLabel: 'Metrisch',
    unitImperialLabel: 'Imperiaal',
    presetsHeader: 'Standaard forensische scenarios',
    presetCustom: 'Aangepaste waarden',
    presetNakedCalm: 'Ontkleed in rustige kamer (20°C)',
    presetDressedIndoor: 'Gekleed binnenshuis (19.5°C)',
    presetWinterOutdoor: 'Winterse buitenlucht (4°C)',
    presetSubmergedWater: 'Ondergedompeld in stilstaand water (12°C)',
    presetHeavyDuvet: 'Onder dik donzen dekbed (18°C)',
    inputsHeader: 'Meetwaarden en omgevingsparameters',
    rectalTempLabel: 'Diepe rectale temperatuur',
    ambientTempLabel: 'Omgevingstemperatuur',
    bodyWeightLabel: 'Lichaamsgewicht',
    factorLabel: 'Omgevingscorrectiefactor',
    measurementTimeLabel: 'Tijdstip van meting',
    factorNaked: 'Ontkleed in stilstaande lucht',
    factorLightClothes: 'Lichte kleding (1-2 lagen)',
    factorStandardClothes: 'Normale kleding (3-4 lagen)',
    factorHeavyWinter: 'Dikke winterkleding',
    factorLightBlanket: 'Bed met lichte deken',
    factorHeavyDuvet: 'Bed met dik donzen dekbed',
    factorStillWater: 'In stilstaand water',
    factorFlowingWater: 'In stromend koud water',
    factorWetClothing: 'Natte kleding bij wind',
    factorMovingAir: 'Bewegende lucht met ventilator',
    resultsHeader: 'Analyse van het postmortaal interval',
    estimatedPmiLabel: 'Geschatte tijd sinds overlijden',
    deathWindowLabel: 'Vermoedelijk tijdvenster',
    confidenceMarginLabel: 'Betrouwbaarheidsmarge (95%)',
    coolingPhaseLabel: 'Thermodynamische fase',
    coolingRateLabel: 'Momenteel warmteverlies',
    glaisterEstimateLabel: 'Vergelijking met Glaister regel',
    chartHeader: 'Henssge dubbel exponentiele afkoelingscurve',
    chartXAxis: 'Uren postmortaal',
    chartYAxis: 'Kerntemperatuur',
    chartNowMarker: 'Meetwaarde',
    chartPlateauMarker: 'Initieel plateau',
    phasePlateau: 'Plateaufase',
    phaseDescent: 'Exponentiele daling',
    phaseEquilibrium: 'Thermisch evenwicht',
    phaseHyperthermia: 'Waarschuwing hyperthermie',
    hoursUnit: 'uur',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/u',
    fahrenheitPerHour: '°F/u',
    resetBtn: 'Herstellen',
    nowBtn: 'Nu',
    coreThermometerLabel: 'Kerntemperatuur',
    baselineAmbientLabel: 'Omgevingsgrens',
    referenceBodyTempLabel: 'Referentietemperatuur'
  },
  seo: [
    { type: 'title', text: 'Fysische Principes van Lijksafkoeling en Bepaling van het Tijdstip van Overlijden', level: 2 },
    { type: 'paragraph', html: 'Het bepalen van het postmortale interval (PMI) is een fundamentele opgave in de gerechtelijke geneeskunde en het strafrechtelijk sporenonderzoek. <strong>Algor Mortis</strong> beschrijft het geleidelijke verlies van lichaamswarmte na de circulatiestilstand totdat de temperatuur van de omgeving volledig is bereikt. Met behulp van diepe rectale temperatuurmeting en natuurkundige thermodynamische modellen kan het tijdstip van overlijden wetenschappelijk en objectief worden gereconstrueerd voor justitieel onderzoek.' },
    { type: 'diagnostic', variant: 'info', title: 'Thermodynamisch Afkoelingsverloop', html: 'Het warmteverlies verloopt niet lineair vanaf de eerste minuut. Het vertoont een vertragingsfase genaamd het <em>temperatuurplateau</em>, gevolgd door een steile dubbel exponentiele daling en een geleidelijke nadering van het omgevingsevenwicht.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Normotherme referentietemperatuur' },
      { value: '±2.8 uur', label: '95% Betrouwbaarheid eerste 10u' },
      { value: 'Dubbel Exponentieel', label: 'Henssge rekenmodel' }
    ] },
    { type: 'title', text: 'De Dubbel Exponentiele Vergelijking van Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Eenvoudige lineaire benaderingen zoals de historische regel van Glaister gingen uit van een constante daling van ongeveer 0.83 graad Celsius per uur. Deze formules hielden echter geen rekening met de totale lichaamsmassa, kledingisolatie en het fysiologische plateaueffect in de vroege fase na het intreden van de dood.' },
    { type: 'code', ariaLabel: 'Henssge Formule', code: 'Q = (T_rectaal - T_omgeving) / (37.2 - T_omgeving)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (Lichaamsgewicht^0.625 * Correctiefactor) - 0.0284' },
    { type: 'paragraph', html: 'Professor Claus Henssge ontwikkelde een geavanceerde wiskundige vergelijking met twee exponentiele termen die gelijktijdig de warmteafgifte aan het huidoppervlak en de interne warmtecapaciteit van de diepe organen modelleert voor betrouwbare tijdvensterberekening.' },
    { type: 'title', text: 'Omgevings en Kledingcorrectiefactoren', level: 3 },
    { type: 'paragraph', html: 'De snelheid van warmteoverdracht is sterk afhankelijk van het totale lichaamsgewicht, de luchtstroming rond het lichaam en de thermische weerstand van de aanwezige kledinglagen.' + " Een zorgvuldige beoordeling moet rekening houden met beeldkwaliteit, vervorming, meetomstandigheden en de volledige documentatie van de vergelijking. Een betrouwbaar forensisch besluit vraagt meerdere onafhankelijke kenmerken, hun ruimtelijke relatie, beschreven beperkingen en controle door een deskundige." },
    { type: 'table', headers: ['Situatie op de Plaats Delict', 'Factorwaarde Cf', 'Fysisch Effect'], rows: [
      ['Ontkleed in stilstaande lucht', '1.0', 'Standaard warmtestraling en natuurlijke convectie'],
      ['Lichte kleding (1-2 lagen)', '1.1', 'Lichte vermindering van warmteverlies aan de huid'],
      ['Normale stadskleding (3-4 lagen)', '1.2', 'Matige thermische barriere op romp en ledematen'],
      ['Dikke winterkleding', '1.4', 'Hoge isolatie door ingesloten warme luchtlaag'],
      ['Onder dik donzen dekbed in bed', '1.8', 'Zeer sterke warmtebehoud en vertraagde afkoeling'],
      ['Ondergedompeld in stilstaand water', '0.5', 'Warmtegeleiding van water is 24 keer groter dan lucht'],
      ['Ondergedompeld in stromend koud water', '0.35', 'Geforceerde vloeistofconvectie versnelt warmteonttrekking']
    ] },
    { type: 'title', text: 'Thermodynamische Fasen van het Afkoelingsproces', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Het Postmortale Temperatuurplateau', description: 'Gedurende de eerste 1 tot 3 uur daalt de rectale kerntemperatuur nauwelijks terwijl de buitenste weefsels afkoelen.', points: ['Vorming van kern naar schil gradient', 'Lineaire regels onderschatten de tijd hier', 'Gemodelleerd met de term -0.25 exp(-5kt)'] },
      { title: 'De Snelle Exponentiele Daling', description: 'Zodra de gradient is gevormd vindt warmteverlies plaats met maximale analytische betrouwbaarheid.', highlight: true, points: ['Hoogste meetgevoeligheid', 'Smalste statistische foutmarge', 'Optimale periode voor thermometrie'] }
    ] },
    { type: 'title', text: 'Praktische Richtlijnen voor Temperatuurmeting', level: 3 },
    { type: 'list', items: [
      '<strong>Meet de diepe rectale temperatuur:</strong> breng de geijkte digitale sensor minstens 8 tot 10 cm in het rectum in.',
      '<strong>Meet de omgevingstemperatuur vlakbij het lichaam:</strong> plaats de sensor binnen 10 cm van het stoffelijk overschot.',
      '<strong>Controleer de thermische stabiliteit:</strong> noteer verwarming, open ramen of directe zoninval.',
      '<strong>Beoordeel vochtigheid van kleding:</strong> natte kleding verhoogt het verdampingsverlies aanzienlijk.'
    ] },
    { type: 'summary', title: 'Methodologische Samenvatting', items: [
      'Het Henssge nomogram is de internationaal aanvaarde standaard voor thermometrische overlijdensbepaling.',
      'Rapporteer altijd een tijdsinterval met betrouwbaarheidsgrenzen in plaats van een enkel tijdstip.',
      'Combineer temperatuurmetingen met lijkstijfheid, lijkvlekken en supravitale reacties.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
