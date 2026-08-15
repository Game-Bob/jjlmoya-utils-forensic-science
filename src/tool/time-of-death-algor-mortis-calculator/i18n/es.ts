import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'calculadora-hora-muerte-algor-mortis';
const title = 'Calculadora de Hora de Muerte por Algor Mortis';
const description = 'Estima el intervalo post mortem y la hora probable de fallecimiento mediante el nomograma termométrico de Henssge y el enfriamiento cadavérico.';

const howTo = [
  { name: 'Introduce las temperaturas rectal y ambiente', text: 'Ingresa la temperatura rectal profunda del cadáver y la temperatura ambiente del lugar de los hechos.' },
  { name: 'Configura la masa corporal y el factor ambiental', text: 'Indica el peso del individuo y selecciona el factor de corrección según la vestimenta, mantas o inmersión en agua.' },
  { name: 'Indica la hora de la toma térmica', text: 'Introduce la hora exacta de la medición o haz clic en Hora actual para calcular retrospectivamente.' },
  { name: 'Analiza el IPM y la curva de enfriamiento', text: 'Consulta el intervalo post mortem estimado, la ventana horaria con 95 por ciento de confianza y la gráfica térmica.' }
];

const faq = [
  { question: '¿Qué es el Algor Mortis en medicina legal y forense?', answer: 'El Algor Mortis es el proceso biofísico de pérdida de temperatura corporal que experimenta un cadáver tras el cese circulatorio hasta equilibrarse con el ambiente.' },
  { question: '¿Por qué se prefiere el nomograma de Henssge frente a reglas lineales?', answer: 'Porque modela con precisión la meseta térmica inicial de las primeras horas y el decaimiento bi exponencial ajustado al peso y la vestimenta.' },
  { question: '¿Qué precisión tiene la estimación termométrica del fallecimiento?', answer: 'En condiciones estándar controladas, el intervalo de confianza al 95 por ciento es de aproximadamente más o menos 2.8 horas durante las primeras diez horas.' },
  { question: '¿En qué consiste la meseta térmica post mortem inicial?', answer: 'Es el periodo inicial de una a tres horas tras el deceso en el que la temperatura rectal apenas desciende mientras se establece el gradiente térmico hacia la piel.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Estimador del Intervalo Post Mortem y Nomograma de Enfriamiento',
    disclaimer: 'Simulación académica y formativa. Las conclusiones periciales reales exigen autopsia judicial, análisis de livideces y rigidez cadavérica y registro ambiental verificado.',
    unitSystemLabel: 'Sistema de unidades',
    unitMetricLabel: 'Métrico',
    unitImperialLabel: 'Imperial',
    presetsHeader: 'Escenarios forenses predefinidos',
    presetCustom: 'Parámetros personalizados',
    presetNakedCalm: 'Desnudo en habitación calma (20°C)',
    presetDressedIndoor: 'Vestido en interior (19.5°C)',
    presetWinterOutdoor: 'Exterior en invierno (4°C)',
    presetSubmergedWater: 'Sumergido en agua calma (12°C)',
    presetHeavyDuvet: 'Bajo edredón grueso en cama (18°C)',
    inputsHeader: 'Mediciones térmicas y parámetros del escenario',
    rectalTempLabel: 'Temp. rectal profunda',
    ambientTempLabel: 'Temp. ambiente',
    bodyWeightLabel: 'Peso corporal',
    factorLabel: 'Factor de corrección ambiental',
    measurementTimeLabel: 'Hora de la medición',
    factorNaked: 'Desnudo en aire quieto',
    factorLightClothes: 'Ropa ligera (1-2 capas)',
    factorStandardClothes: 'Ropa estándar (3-4 capas)',
    factorHeavyWinter: 'Ropa térmica de invierno',
    factorLightBlanket: 'Cama con sábana o manta ligera',
    factorHeavyDuvet: 'Cama con edredón nórdico grueso',
    factorStillWater: 'Sumergido en agua estancada',
    factorFlowingWater: 'Sumergido en agua corriente fría',
    factorWetClothing: 'Ropa mojada con viento',
    factorMovingAir: 'Aire en movimiento con ventilador',
    resultsHeader: 'Análisis del intervalo post mortem',
    estimatedPmiLabel: 'Tiempo estimado desde la muerte',
    deathWindowLabel: 'Ventana horaria de defunción',
    confidenceMarginLabel: 'Margen de confianza (95%)',
    coolingPhaseLabel: 'Fase termodinámica',
    coolingRateLabel: 'Tasa instantánea de pérdida térmica',
    glaisterEstimateLabel: 'Comparativa con regla de Glaister',
    chartHeader: 'Trayectoria de enfriamiento bi exponencial de Henssge',
    chartXAxis: 'Horas post mortem',
    chartYAxis: 'Temperatura central',
    chartNowMarker: 'Medición registrada',
    chartPlateauMarker: 'Meseta inicial',
    phasePlateau: 'Fase de meseta',
    phaseDescent: 'Descenso exponencial',
    phaseEquilibrium: 'Equilibrio térmico',
    phaseHyperthermia: 'Alerta por hipertermia previa',
    hoursUnit: 'horas',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Restablecer',
    nowBtn: 'Hora actual',
    coreThermometerLabel: 'Temperatura central',
    baselineAmbientLabel: 'Límite ambiental',
    referenceBodyTempLabel: 'Referencia corporal'
  },
  seo: [
    { type: 'title', text: 'Fundamentos del Enfriamiento Cadavérico y Estimación de la Hora de Muerte', level: 2 },
    { type: 'paragraph', html: 'La determinación del intervalo post mortem o IPM representa uno de los objetivos esenciales de la tanatología forense. El <strong>Algor Mortis</strong> describe el enfriamiento progresivo del cuerpo humano tras el paro cardiopulmonar irreversible hasta alcanzar la temperatura del entorno. Mediante la termometría profunda y leyes físicas de disipación de calor, los médicos legistas pueden reconstruir con base científica la franja horaria en la que aconteció la muerte.' },
    { type: 'diagnostic', variant: 'info', title: 'Comportamiento Termodinámico Cadavérico', html: 'El descenso térmico no es una línea recta constante desde el primer minuto. Presenta una demora inicial denominada <em>meseta térmica</em>, seguida de una etapa de caída exponencial pronunciada y una asíntota suave cuando el cuerpo se aproxima al equilibrio ambiental.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Referencia rectal normotérmica' },
      { value: '±2.8 h', label: 'Margen estadístico al 95%' },
      { value: 'Bi Exponencial', label: 'Modelo matemático de Henssge' }
    ] },
    { type: 'title', text: 'La Ecuación Bi Exponencial de Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Históricamente se recurría a aproximaciones lineales como la regla de Glaister, que calculaba una pérdida fija cercana a 0.83 grados Celsius por hora. No obstante, las fórmulas lineales carecen de precisión al ignorar la masa corporal, el aislamiento textil o el fenómeno de la meseta térmica inicial.' },
    { type: 'code', ariaLabel: 'Ecuación de Henssge', code: 'Q = (T_rectal - T_ambiente) / (37.2 - T_ambiente)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (PesoCorporal^0.625 * FactorCorreccion) - 0.0284' },
    { type: 'paragraph', html: 'El profesor Claus Henssge formuló un modelo matemático de dos exponenciales que contempla tanto el gradiente de disipación superficial como la retención de energía del núcleo visceral. La resolución de esta ecuación permite obtener el tiempo transcurrido con un alto grado de fiabilidad estadística.' },
    { type: 'title', text: 'Factores de Corrección Ambientales y de Vestimenta', level: 3 },
    { type: 'paragraph', html: 'La transferencia de calor varía drásticamente según la superficie de contacto, la convección del aire y las capas de abrigo que protegen el torso del individuo.' },
    { type: 'table', headers: ['Condición del Escenario', 'Factor Cf', 'Efecto Físico'], rows: [
      ['Desnudo en aire quieto', '1.0', 'Disipación estándar por radiación y convección natural'],
      ['Ropa ligera interior (1-2 capas)', '1.1', 'Atenuación leve de la pérdida superficial cutánea'],
      ['Ropa estándar de calle (3-4 capas)', '1.2', 'Barrera térmica moderada sobre torso y extremidades'],
      ['Prendas gruesas de abrigo de invierno', '1.4', 'Aislamiento elevado que atrapa aire caliente'],
      ['Bajo edredón nórdico grueso en cama', '1.8', 'Alta retención calórica y retraso del enfriamiento'],
      ['Sumergido en agua estancada', '0.5', 'Conductividad térmica del agua 24 veces superior al aire'],
      ['Sumergido en agua corriente fría', '0.35', 'Convección forzada acelerada por flujo líquido']
    ] },
    { type: 'title', text: 'Fases Termodinámicas del Proceso Tanatológico', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Meseta Térmica Post Mortem', description: 'Durante las primeras 1 a 3 horas, la temperatura central rectal desciende muy lentamente mientras los tejidos periféricos ceden calor.', points: ['Establecimiento del gradiente centro a periferia', 'Las fórmulas lineales infraestiman el tiempo aquí', 'Modelada por el término correctivo -0.25 exp(-5kt)'] },
      { title: 'Descenso Exponencial Rápido', description: 'Una vez establecido el gradiente térmico, el calor se transfiere de forma constante a un ritmo dependiente del peso corporal.', highlight: true, points: ['Máxima sensibilidad analítica', 'Margen de incertidumbre estadística más estrecho', 'Ventana óptima para la termometría forense'] }
    ] },
    { type: 'title', text: 'Buenas Prácticas Periciales en la Medición de Temperatura', level: 3 },
    { type: 'list', items: [
      '<strong>Medir temperatura rectal profunda:</strong> introducir la sonda termométrica calibrada al menos 8 a 10 cm en la ampolla rectal.',
      '<strong>Registrar la temperatura ambiente junto al cuerpo:</strong> colocar el termómetro a no más de 10 cm del cadáver.',
      '<strong>Comprobar la estabilidad del entorno:</strong> registrar si hubo calefacción encendida, ventanas abiertas o exposición solar directa.',
      '<strong>Evaluar humedad en textiles:</strong> la ropa húmeda incrementa drásticamente la evaporación y exige factores menores.'
    ] },
    { type: 'summary', title: 'Resumen Metodológico', items: [
      'El nomograma de Henssge es el estándar internacionalmente validado para la estimación termométrica de la data de la muerte.',
      'Siempre debe informarse un intervalo horario con márgenes de desviación típica y no una hora aislada fija.',
      'Conviene correlacionar la termometría con el examen de rigidez cadavérica, livideces y excitabilidad eléctrica muscular.'
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
