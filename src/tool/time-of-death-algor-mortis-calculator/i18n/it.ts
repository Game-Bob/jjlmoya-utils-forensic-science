import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'calcolatore-ora-del-decesso-algor-mortis';
const title = 'Calcolatore dell Ora del Decesso per Algor Mortis';
const description = 'Stima l intervallo post mortem e l ora probabile della morte mediante il nomogramma di Henssge e il raffreddamento cadaverico.';

const howTo = [
  { name: 'Inserire temperatura rettale e ambientale', text: 'Immettere la temperatura rettale profonda misurata sulla scena e la temperatura media dell ambiente.' },
  { name: 'Impostare peso corporeo e fattore correttivo', text: 'Indicare il peso in chilogrammi e selezionare il fattore di correzione per indumenti o immersione in acqua.' },
  { name: 'Specificare l orario di rilevamento', text: 'Inserire l orario esatto della misurazione termica o selezionare Ora attuale.' },
  { name: 'Analizzare l intervallo post mortem', text: 'Consultare l intervallo stimato, la finestra oraria con confidenza al 95 per cento e la curva di raffreddamento.' }
];

const faq = [
  { question: 'Che cos è l Algor Mortis in medicina legale?', answer: 'L Algor Mortis è il progressivo raffreddamento termico del cadavere dopo l arresto cardiocircolatorio fino all equilibrio con l ambiente circostante.' },
  { question: 'Perché si preferisce il nomogramma di Henssge?', answer: 'Perché modella accuratamente il plateau termico iniziale e il decadimento bi-esponenziale in base al peso corporeo e all isolamento termico.' },
  { question: 'Quanto è precisa la stima termometrica della morte?', answer: 'In condizioni standard controllate, l intervallo di confidenza al 95 per cento è di circa più o meno 2.8 ore nelle prime dieci ore.' },
  { question: 'Cosa si intende per plateau termico post mortem?', answer: 'È il periodo iniziale di 1 a 3 ore dopo il decesso durante il quale la temperatura rettale centrale scende molto lentamente.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Stimatore dell Intervallo Post Mortem e Nomogramma Termico',
    disclaimer: 'Simulazione puramente didattica e formativa. Le conclusioni peritali ufficiali richiedono l autopsia giudiziaria e la valutazione della rigidità cadaverica.',
    unitSystemLabel: 'Sistema di unità',
    unitMetricLabel: 'Metrico',
    unitImperialLabel: 'Imperiale',
    presetsHeader: 'Scenari medico-legali tipici',
    presetCustom: 'Parametri personalizzati',
    presetNakedCalm: 'Nudo in stanza tranquilla (20°C)',
    presetDressedIndoor: 'Vestito in ambienti interni (19.5°C)',
    presetWinterOutdoor: 'All aperto in inverno (4°C)',
    presetSubmergedWater: 'Immerso in acqua calma (12°C)',
    presetHeavyDuvet: 'Sotto piumone pesante a letto (18°C)',
    inputsHeader: 'Misurazioni termiche e parametri di scena',
    rectalTempLabel: 'Temp. rettale profonda',
    ambientTempLabel: 'Temp. ambiente',
    bodyWeightLabel: 'Peso corporeo',
    factorLabel: 'Fattore correttivo ambientale',
    measurementTimeLabel: 'Ora della misurazione',
    factorNaked: 'Nudo in aria calma',
    factorLightClothes: 'Abiti leggeri (1-2 strati)',
    factorStandardClothes: 'Abiti standard da città (3-4 strati)',
    factorHeavyWinter: 'Indumenti invernali pesanti',
    factorLightBlanket: 'Letto con coperta leggera',
    factorHeavyDuvet: 'Letto con piumone spesso',
    factorStillWater: 'Immerso in acqua stagnante',
    factorFlowingWater: 'Immerso in acqua corrente fredda',
    factorWetClothing: 'Abiti bagnati esposti al vento',
    factorMovingAir: 'Aria in movimento con ventilatore',
    resultsHeader: 'Analisi dell intervallo post mortem',
    estimatedPmiLabel: 'Tempo trascorso dalla morte',
    deathWindowLabel: 'Finestra oraria probabile',
    confidenceMarginLabel: 'Margine di confidenza (95%)',
    coolingPhaseLabel: 'Fase termodinamica',
    coolingRateLabel: 'Tasso istantaneo di perdita termica',
    glaisterEstimateLabel: 'Confronto con regola di Glaister',
    chartHeader: 'Traiettoria di raffreddamento bi esponenziale di Henssge',
    chartXAxis: 'Ore post mortem',
    chartYAxis: 'Temperatura centrale',
    chartNowMarker: 'Dato misurato',
    chartPlateauMarker: 'Plateau iniziale',
    phasePlateau: 'Fase di plateau',
    phaseDescent: 'Discesa esponenziale',
    phaseEquilibrium: 'Equilibrio termico',
    phaseHyperthermia: 'Allerta ipertermia pre-mortem',
    hoursUnit: 'ore',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Ripristina',
    nowBtn: 'Ora attuale',
    coreThermometerLabel: 'Temperatura centrale',
    baselineAmbientLabel: 'Soglia ambientale',
    referenceBodyTempLabel: 'Riferimento corporeo'
  },
  seo: [
    { type: 'title', text: 'Principi Fisici del Raffreddamento Cadaverico e Stima dell Epoca della Morte', level: 2 },
    { type: 'paragraph', html: 'La determinazione dell intervallo post mortem (PMI) è uno dei compiti fondamentali della medicina legale nell ambito delle indagini giudiziarie e tanatologiche. L <strong>Algor Mortis</strong> definisce il raffreddamento progressivo del corpo umano dopo l arresto cardiocircolatorio irreversibile fino al raggiungimento del perfetto equilibrio termico con l ambiente esterno. Attraverso la misurazione termometrica rettale profonda e l applicazione di equazioni termodinamiche rigorose, i medici legisti possono circoscrivere con precisione scientifica l orario in cui è avvenuto il decesso.' },
    { type: 'diagnostic', variant: 'info', title: 'Comportamento Termodinamico Post Mortem', html: 'La cessione di calore dal cadavere all ambiente non avviene secondo una retta uniforme fin dal principio. Presenta una fase iniziale di latenza detta <em>plateau termico</em>, seguita da una ripida caduta esponenziale e da una fase asintotica finale verso la temperatura esterna.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Riferimento rettale normotermico' },
      { value: '±2.8 h', label: 'Intervallo statistico al 95%' },
      { value: 'Bi Esponenziale', label: 'Modello matematico di Henssge' }
    ] },
    { type: 'title', text: 'L Equazione Bi Esponenziale di Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Le formule lineari empiriche come la regola di Glaister assumevano una perdita costante di circa 0.83 gradi Celsius all ora. Questa approssimazione semplicistica ignora tuttavia il peso corporeo dell individuo, l isolamento termico offerto dagli indumenti e il fenomeno fondamentale del plateau termico iniziale.' },
    { type: 'code', ariaLabel: 'Equazione di Henssge', code: 'Q = (T_rettale - T_ambiente) / (37.2 - T_ambiente)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (PesoCorporeo^0.625 * FattoreCorrezione) - 0.0284' },
    { type: 'paragraph', html: 'Il professor Claus Henssge ha elaborato una celebre formula a due esponenziali che descrive sia il gradiente termico di superficie sia l inerzia termica del nucleo corporeo viscerale profondo, consentendo una datazione forense affidabile in sede processuale.' },
    { type: 'title', text: 'Fattori di Correzione Ambientali e Vestiari', level: 3 },
    { type: 'paragraph', html: 'Lo scambio di calore per conduzione, convezione e irraggiamento varia sensibilmente in base alla massa corporea, ai flussi d aria e agli strati tessili isolanti presenti sulla salma.' },
    { type: 'table', headers: ['Condizione di Scena', 'Valore Fattore Cf', 'Effetto Fisico'], rows: [
      ['Nudo in aria calma', '1.0', 'Irraggiamento standard e convezione naturale'],
      ['Abiti leggeri (1-2 strati)', '1.1', 'Lieve riduzione della perdita convettiva cutanea'],
      ['Abiti normali da città (3-4 strati)', '1.2', 'Moderata barriera termica su tronco ed arti'],
      ['Abiti invernali pesanti', '1.4', 'Elevato isolamento che intrappola aria calda'],
      ['Sotto piumone spesso nel letto', '1.8', 'Altissima ritenzione calorica e raffreddamento ritardato'],
      ['Immerso in acqua calma', '0.5', 'Conducibilità termica dell acqua 24 volte superiore all aria'],
      ['Immerso in acqua corrente fredda', '0.35', 'Convezione forzata liquida fortemente accelerata']
    ] },
    { type: 'title', text: 'Fasi Termodinamiche del Processo Cadaverico', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Plateau Termico Iniziale', description: 'Nelle prime 1 a 3 ore, la temperatura rettale centrale subisce minime variazioni mentre si stabilisce il gradiente verso la pelle.', points: ['Formazione del gradiente centro periferia', 'Le formule lineari sottostimano la durata', 'Modellato dal termine -0.25 exp(-5kt)'] },
      { title: 'Rapida Discesa Esponenziale', description: 'Una volta instaurato il gradiente, la perdita calorica procede a velocità costante correlata alla massa.', highlight: true, points: ['Massima sensibilità diagnostica', 'Margine di incertezza più stretto', 'Finestra ideale per la termometria'] }
    ] },
    { type: 'title', text: 'Indicazioni Pratiche per la Misurazione della Temperatura', level: 3 },
    { type: 'list', items: [
      '<strong>Misurare la temperatura rettale profonda:</strong> inserire la sonda digitale calibrata per almeno 8 a 10 cm nel retto.',
      '<strong>Rilevare la temperatura ambientale accanto al corpo:</strong> posizionare il termometro entro 10 cm dal cadavere.',
      '<strong>Verificare la stabilità termica dell ambiente:</strong> annotare riscaldamenti accesi, finestre aperte o irraggiamento solare.',
      '<strong>Esaminare l umidità degli indumenti:</strong> tessuti bagnati incrementano notevolmente il raffreddamento per evaporazione.'
    ] },
    { type: 'summary', title: 'Sintesi Metodologica', items: [
      'Il nomogramma di Henssge è il punto di riferimento internazionale per la stima termica dell epoca della morte.',
      'Occorre sempre formulare una finestra oraria probabilistica con margini di deviazione standard.',
      'È fondamentale integrare il dato termico con l esame dei fenomeni abiotici consecutivi quali rigidità e ipostasi.'
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
