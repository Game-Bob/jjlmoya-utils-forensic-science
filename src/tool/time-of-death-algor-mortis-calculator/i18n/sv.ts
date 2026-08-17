import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'dostid-kalkylator-algor-mortis';
const title = 'Dostid Kalkylator Algor Mortis och Henssge Nomogram';
const description = 'Uppskatta postmortalt intervall och tidpunkt for dodsfall med hjalp av rektaltemperatur och Henssges nomogram.';

const howTo = [
  { name: 'Ange rektal och omgivningstemperatur', text: 'Mata in den uppmatta djupa rektaltemperaturen och den genomsnittliga omgivningstemperaturen.' },
  { name: 'Stall in kroppsvikt och korrektionsfaktor', text: 'Ange kroppsvikten i kilo och valj korrektionsfaktor for kladsel eller vatten.' },
  { name: 'Ange tidpunkt for temperaturmatning', text: 'Fyll i det exakta klockslaget for matningen eller klicka pa Nuvarande tid.' },
  { name: 'Analysera tidsintervall och kylkurva', text: 'Granska det beraknade postmortala intervallet och 95 procents konfidensintervallet.' }
];

const faq = [
  { question: 'Vad innebar Algor Mortis inom rattsmedicin?', answer: 'Algor Mortis ar kroppens successiva postmortala avkylning efter cirkulationsstillestand fram till termisk jamvikt med omgivningen.' },
  { question: 'Varfor anvands Henssges nomogram framfor linjara regler?', answer: 'Eftersom metoden tar hansyn till den initiala temperaturplatan och dubbelexponentiell avkylning baserad pa kroppsvikt och kladsel.' },
  { question: 'Hur noggrann ar temperaturmetoden for att bestamma dostid?', answer: 'Under kontrollerade standardforhallanden ar 95 procents konfidensmarginalen cirka plus minus 2.8 timmar under de forsta tio timmarna.' },
  { question: 'Vad ar den postmortala temperaturplatan?', answer: 'Det ar den inledande perioden pa 1 till 3 timmar efter doden da den djupa rektaltemperaturen sjunker mycket langsamt.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Uppskattning av Postmortalt Intervall och Henssge Nomogram',
    disclaimer: 'Verktyget ar endast avsett for utbildning och akademisk simulering. Formella rattsmedicinska utlatanden kraver fullstandig obduktion.',
    unitSystemLabel: 'Enhetssystem',
    unitMetricLabel: 'Metriskt',
    unitImperialLabel: 'Imperiskt',
    presetsHeader: 'Forensiska standardscenarier',
    presetCustom: 'Anpassade varden',
    presetNakedCalm: 'Avkladd i stilla rum (20°C)',
    presetDressedIndoor: 'Pakladd inomhus (19.5°C)',
    presetWinterOutdoor: 'Utomhus pa vintern (4°C)',
    presetSubmergedWater: 'Nedsankt i stillastaende vatten (12°C)',
    presetHeavyDuvet: 'Under tjockt duntacke i sang (18°C)',
    inputsHeader: 'Matvarden och omgivningsparametrar',
    rectalTempLabel: 'Djup rektaltemperatur',
    ambientTempLabel: 'Omgivningstemperatur',
    bodyWeightLabel: 'Kroppsvikt',
    factorLabel: 'Korrektionsfaktor',
    measurementTimeLabel: 'Mattidpunkt',
    factorNaked: 'Avkladd i stilla luft',
    factorLightClothes: 'Latta klader (1-2 lager)',
    factorStandardClothes: 'Vanliga vardagsklader (3-4 lager)',
    factorHeavyWinter: 'Tjocka vinterklader',
    factorLightBlanket: 'Sang med latt filt',
    factorHeavyDuvet: 'Sang med tjockt duntacke',
    factorStillWater: 'Nedsankt i stillastaende vatten',
    factorFlowingWater: 'Nedsankt i strommande kallt vatten',
    factorWetClothing: 'Blota klader i vinddrag',
    factorMovingAir: 'Luft i rorelse med flakt',
    resultsHeader: 'Analys av postmortalt intervall',
    estimatedPmiLabel: 'Uppskattad tid sedan dodsfall',
    deathWindowLabel: 'Sannolikt tidsfonster',
    confidenceMarginLabel: 'Konfidensmarginal (95%)',
    coolingPhaseLabel: 'Termodynamisk fas',
    coolingRateLabel: 'Momentan varmeforlust',
    glaisterEstimateLabel: 'Jamforelse med Glaisters regel',
    chartHeader: 'Henssges dubbelexponentiella avkylningskurva',
    chartXAxis: 'Timmar postmortalt',
    chartYAxis: 'Kroppstemperatur',
    chartNowMarker: 'Uppmatt varde',
    chartPlateauMarker: 'Initial plata',
    phasePlateau: 'Platafas',
    phaseDescent: 'Exponentiell nedgang',
    phaseEquilibrium: 'Termisk jamvikt',
    phaseHyperthermia: 'Varning hypertermi',
    hoursUnit: 'timmar',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Aterstall',
    nowBtn: 'Nu',
    coreThermometerLabel: 'Karnkroppstemperatur',
    baselineAmbientLabel: 'Omgivningsgrans',
    referenceBodyTempLabel: 'Referenstemperatur'
  },
  seo: [
    { type: 'title', text: 'Fysiska Principer for Kroppsavkylning och Uppskattning av Dostid', level: 2 },
    { type: 'paragraph', html: 'Faststallande av postmortalt intervall (PMI) ar en av rattsmedicinens och kriminalteknikens mest centrala uppgifter vid brottsplatsundersokningar. <strong>Algor Mortis</strong> beskriver den gradvisa forlusten av kroppsvarme efter cirkulationsstillestand och cellmetabolismens upphorande tills kroppen nar fullstandig termisk jamvikt med omgivningen. Genom matning av djup rektaltemperatur och tillampning av termodynamiska modeller kan tidpunkten for dodsfall avgransas vetenskapligt och objektivt.' },
    { type: 'diagnostic', variant: 'info', title: 'Kroppens Termodynamiska Avkylningsforlopp', html: 'Avkylningen sker inte linjart fran forsta borjan efter hjartstoppet. Den uppvisar en fordröjningsfas kallad <em>temperaturplatan</em>, foljd av en brant dubbelexponentiell nedgang och en asymtotisk utplaning.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Rektal normoterm referens' },
      { value: '±2.8 tim', label: '95% Konfidensmarginal' },
      { value: 'Dubbelexponentiell', label: 'Henssges berakningsmodell' }
    ] },
    { type: 'title', text: 'Claus Henssges Dubbelexponentiella Ekvation', level: 3 },
    { type: 'paragraph', html: 'Enkla tumregler som Glaisters formel antog en konstant nedgang pa 0.83 grader Celsius i timmen. Denna forenkling bortser dock fran den totala kroppsmassan, kladisoleringens egenskaper och den inledande fysiologiska platan.' },
    { type: 'code', ariaLabel: 'Henssges Ekvation', code: 'Q = (T_rektal - T_omgivning) / (37.2 - T_omgivning)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (Kroppsvikt^0.625 * Korrektionsfaktor) - 0.0284' },
    { type: 'paragraph', html: 'Professor Claus Henssge utvecklade en avancerad matematisk modell med tva exponenter som samtidigt beskriver varmeavgivningen vid kroppsytan och den termiska kapaciteten hos inre organ for en palitlig rattsmedicinsk bedomning.' },
    { type: 'title', text: 'Korrektionsfaktorer for Omgivning och Kladsel', level: 3 },
    { type: 'paragraph', html: 'Varmeoverforingens hastighet paverkas i hog grad av den avlidnes kroppsvikt, luftstrommar i rummet samt isolerande textilier som skyddar balen.' + " En noggrann uppskattning tar dessutom hänsyn till omgivningen, kläderna, kroppens läge, luftens rörelse och tillförlitligheten hos varje mätning. Skillnader kan bero på fukt, värmekällor, underlag eller ofullständig dokumentation. Resultatet bör därför förstås som ett osäkert intervall och vägas samman med andra rättsmedicinska fynd, inte behandlas som en exakt tidpunkt." + " Bedömningen bör ta hänsyn till bildkvalitet, mätförhållanden, möjliga förvrängningar och fullständig dokumentation. Ett tillförlitligt rättsmedicinskt resultat kräver flera oberoende kännetecken, deras rumsliga relationer, tydliga begränsningar och kontroll av en kvalificerad expert." },
    { type: 'table', headers: ['Situation pa Platsen', 'Faktorvarde Cf', 'Fysisk Effekt'], rows: [
      ['Avkladd i stilla luft', '1.0', 'Standard stralning och naturlig konvektion'],
      ['Latta klader (1-2 lager)', '1.1', 'Latt minskning av konvektiv varmeforlust'],
      ['Vanliga klader (3-4 lager)', '1.2', 'Mattlig termisk barriar pa bal och extremiteter'],
      ['Tjocka vinterklader', '1.4', 'Hog isolering genom innesluten varmluft'],
      ['Under tjockt duntacke i sang', '1.8', 'Mycket hog varmeretention och forsenad avkylning'],
      ['Nedsankt i stillastaende vatten', '0.5', 'Vattnets varmeledningsformaga ar 24 ganger hogre an luftens'],
      ['Nedsankt i strommande kallt vatten', '0.35', 'Forcerad vatskekonvektion accelererar varmebortforande']
    ] },
    { type: 'title', text: 'Avkylningsprocessens Termodynamiska Faser', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Postmortal Temperaturplata', description: 'Under de forsta 1 till 3 timmarna andras den djupa rektaltemperaturen knappt medan huden kyls av.', points: ['Uppbyggnad av temperaturgradient', 'Linjara formler underskattar tiden har', 'Modellerad med termen -0.25 exp(-5kt)'] },
      { title: 'Snabb Exponentiell Nedgang', description: 'Nar gradienten ar etablerad sker varmeavgivningen i jamn och forutsagbar takt.', highlight: true, points: ['Hogsta analytiska kanslighet', 'Snävaste statistiska felmarginal', 'Optimal period for temperaturmetoden'] }
    ] },
    { type: 'title', text: 'Praktiska Anvisningar for Temperaturmatning', level: 3 },
    { type: 'list', items: [
      '<strong>Mat djup rektaltemperatur:</strong> for in den kalibrerade digitala sonden minst 8 till 10 cm i rektum.',
      '<strong>Mat omgivningstemperaturen intill kroppen:</strong> placera sensorn inom 10 cm fran kroppen.',
      '<strong>Dokumentera rummets termiska stabilitet:</strong> notera element, oppna fonster och solinstralning.',
      '<strong>Undersok kladernas fuktighet:</strong> blota textilier okar avdunstningskylningen avsevart.'
    ] },
    { type: 'summary', title: 'Metodologisk Sammanfattning', items: [
      'Henssges nomogram ar den internationella standarden for temperaturuppskattning av dostid.',
      'Resultatet ska alltid anges som ett tidsintervall med konfidensgranser snarare an en fast tidpunkt.',
      'Undersokningen maste samstallas med dodsstelhet, likflackar och supravitala reaktioner.'
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
