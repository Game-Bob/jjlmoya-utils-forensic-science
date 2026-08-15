import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'time-of-death-algor-mortis-calculator';
const title = 'Time of Death Algor Mortis Calculator';
const description = 'Estimate postmortem interval and time of death using the Henssge nomogram method and body cooling thermodynamics.';

const howTo = [
  { name: 'Enter Body and Ambient Temperatures', text: 'Input the measured core rectal temperature and the ambient environmental temperature at the scene.' },
  { name: 'Set Body Mass and Corrective Factors', text: 'Specify the body weight in kilograms and choose the environmental correction factor according to clothing, bed covers, or water immersion.' },
  { name: 'Specify Measurement Time', text: 'Enter the exact time the temperature was taken or click Current Time to calculate backwards.' },
  { name: 'Analyze PMI and Cooling Curve', text: 'Review the estimated postmortem interval, the 95 percent confidence death window, and the thermal cooling curve.' }
];

const faq = [
  { question: 'What is Algor Mortis in forensic medicine?', answer: 'Algor Mortis is the postmortem decrease in body temperature until thermal equilibrium with the surrounding environment is reached.' },
  { question: 'Why is the Henssge nomogram preferred over linear rules?', answer: 'The Henssge model accounts for the initial temperature plateau and exponential cooling curves using body weight and corrective environmental factors.' },
  { question: 'How accurate is temperature based time of death estimation?', answer: 'Under controlled standard conditions, the 95 percent confidence interval is approximately plus or minus 2.8 hours in the first 10 hours, widening in later stages.' },
  { question: 'What is the postmortem temperature plateau?', answer: 'The temperature plateau is the initial period of 1 to 3 hours after death during which the core temperature decreases very slowly due to core to surface thermal gradients.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Postmortem Interval Estimator and Thermal Decay Nomogram',
    disclaimer: 'Educational and academic simulation only. Actual death time determinations require comprehensive forensic examination, livor and rigor mortis correlation, and documented scene temperature records.',
    unitSystemLabel: 'Unit System',
    unitMetricLabel: 'Metric',
    unitImperialLabel: 'Imperial',
    presetsHeader: 'Forensic Scenario Presets',
    presetCustom: 'Custom Parameters',
    presetNakedCalm: 'Naked in Still Room (20°C)',
    presetDressedIndoor: 'Dressed Indoors (19.5°C)',
    presetWinterOutdoor: 'Winter Outdoor (4°C)',
    presetSubmergedWater: 'Submerged in Still Water (12°C)',
    presetHeavyDuvet: 'Under Heavy Down Duvet Bed (18°C)',
    inputsHeader: 'Scene Parameters and Thermal Measurements',
    rectalTempLabel: 'Rectal Core Temp',
    ambientTempLabel: 'Ambient Temp',
    bodyWeightLabel: 'Body Weight',
    factorLabel: 'Environmental Factor',
    measurementTimeLabel: 'Measurement Time',
    factorNaked: 'Naked in still air',
    factorLightClothes: 'Light clothing (1-2 layers)',
    factorStandardClothes: 'Standard clothing (3-4 layers)',
    factorHeavyWinter: 'Heavy insulated winter clothes',
    factorLightBlanket: 'Bed with light blanket',
    factorHeavyDuvet: 'Bed with thick down duvet',
    factorStillWater: 'Submerged in still water',
    factorFlowingWater: 'Submerged in flowing cold water',
    factorWetClothing: 'Wet clothing in wind',
    factorMovingAir: 'Moving air with draft or fan',
    resultsHeader: 'Postmortem Interval Analysis',
    estimatedPmiLabel: 'Estimated Time Since Death',
    deathWindowLabel: 'Probable Death Window',
    confidenceMarginLabel: 'Confidence Margin (95%)',
    coolingPhaseLabel: 'Thermodynamic Phase',
    coolingRateLabel: 'Instant Heat Loss Rate',
    glaisterEstimateLabel: 'Glaister Linear Comparison',
    chartHeader: 'Henssge Exponential Cooling Trajectory',
    chartXAxis: 'Hours Postmortem',
    chartYAxis: 'Core Temperature',
    chartNowMarker: 'Measured Reading',
    chartPlateauMarker: 'Initial Plateau',
    phasePlateau: 'Plateau Stage',
    phaseDescent: 'Exponential Cooling',
    phaseEquilibrium: 'Thermal Equilibrium',
    phaseHyperthermia: 'Hyperthermia Warning',
    hoursUnit: 'hours',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Reset',
    nowBtn: 'Current Time',
    coreThermometerLabel: 'Core Temperature',
    baselineAmbientLabel: 'Ambient Baseline',
    referenceBodyTempLabel: 'Reference Body Temp'
  },
  seo: [
    { type: 'title', text: 'How Postmortem Body Cooling Estimates Time of Death', level: 2 },
    { type: 'paragraph', html: 'Estimating the time since death (Postmortem Interval or PMI) is one of the most critical challenges in legal medicine and death investigation. <strong>Algor Mortis</strong> refers to the progressive cooling of a human body after circulatory arrest until it reaches ambient thermal equilibrium. Because heat dissipation follows thermodynamic principles, measuring the deep core temperature allows forensic pathologists to reconstruct the time window when death occurred.' },
    { type: 'diagnostic', variant: 'info', title: 'Thermodynamic Foundation', html: 'Body cooling does not proceed linearly from the moment of death. It exhibits an initial delay known as the <em>temperature plateau</em>, followed by steep exponential decay, and eventually flattens as core temperature approaches ambient temperature.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Reference Normothermic Core' },
      { value: '±2.8 h', label: 'Initial 95% Confidence Margin' },
      { value: '2 Exponential', label: 'Henssge Mathematical Model' }
    ] },
    { type: 'title', text: 'The Claus Henssge Double Exponential Equation', level: 3 },
    { type: 'paragraph', html: 'Historically, investigators applied linear rules of thumb such as the Glaister equation, which assumes a steady drop of approximately 0.83 degrees Celsius per hour. While simple, linear approximations fail to account for the protective insulation of body mass and clothing or the plateau phenomenon in the first few hours.' },
    { type: 'code', ariaLabel: 'Henssge Formula', code: 'Q = (T_rectal - T_ambient) / (37.2 - T_ambient)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (BodyWeight^0.625 * CorrectionFactor) - 0.0284' },
    { type: 'paragraph', html: 'Professor Claus Henssge developed a two exponential equation that accounts for both the surface cooling gradient and deep core retention. The normalized thermal quotient Q describes the fraction of heat remaining relative to the ambient baseline. Solving this transcendental equation for time yields an accurate mathematical estimate of hours elapsed.' },
    { type: 'title', text: 'Key Environmental and Physiological Correction Factors', level: 3 },
    { type: 'paragraph', html: 'Heat transfer rate depends heavily on body mass, air convection, and surface insulation. In the Henssge nomogram system, body weight is adjusted through a multiplication factor known as the corrective factor.' },
    { type: 'table', headers: ['Scene Condition', 'Factor Value', 'Physical Mechanism'], rows: [
      ['Naked in still room air', '1.0', 'Standard baseline radiation and natural convection'],
      ['Light clothing (1-2 layers)', '1.1', 'Mild reduction in skin convective heat loss'],
      ['Standard indoor clothing', '1.2', 'Moderate thermal barrier on torso and extremities'],
      ['Heavy winter garments', '1.4', 'Significant insulation trapping warm air layer'],
      ['Under thick down duvet in bed', '1.8', 'High insulation and delayed thermal dissipation'],
      ['Submerged in still water', '0.5', 'Water thermal conductivity is 24 times greater than air'],
      ['Submerged in flowing cold water', '0.35', 'Forced convective liquid heat transfer accelerated']
    ] },
    { type: 'title', text: 'Thermodynamic Phases of Postmortem Cooling', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'The Postmortem Temperature Plateau', description: 'During the first 1 to 3 hours after death, core rectal temperature drops very slowly while the skin and outer tissues cool first.', points: ['Core to surface gradient establishing', 'Linear formulas underestimate PMI here', 'Correctly modeled by the -0.25 exp(-5kt) term'] },
      { title: 'The Rapid Exponential Descent', description: 'Once the gradient is established, heat transfers continuously from core to environment at a rate determined by body mass and delta T.', highlight: true, points: ['Highest mathematical sensitivity', 'Narrowest statistical confidence interval', 'Optimal window for thermometric precision'] }
    ] },
    { type: 'title', text: 'Best Practices for Forensic Temperature Recording', level: 3 },
    { type: 'list', items: [
      '<strong>Measure deep core rectal temperature:</strong> insert a calibrated digital thermistor probe at least 8 to 10 cm into the rectum.',
      '<strong>Record ambient temperature at the corpse level:</strong> measure room or ground air temperature within 10 cm of the body.',
      '<strong>Document environmental stability:</strong> verify if heating, air conditioning, open windows, or sunlight altered the scene ambient temperature.',
      '<strong>Assess clothing wetness:</strong> wet textiles drastically increase evaporative cooling and require lower corrective factor values.'
    ] },
    { type: 'summary', title: 'Methodological Summary', items: [
      'The Henssge nomogram is the internationally accepted standard for thermometric death time estimation.',
      'Always report a time window with standard deviation margins rather than an isolated point in time.',
      'Combine thermometric findings with rigor mortis, livor mortis, and supravital excitability testing for robust case reconstruction.'
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
