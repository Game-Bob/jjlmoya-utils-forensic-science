import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-semivida-desintegracion-radiactiva';
const title = 'Calculadora de semivida y desintegracion radiactiva';
const description = 'Simula la desintegracion radiactiva con isotopos reales, formula de semivida, campo atomico estocastico, cantidad restante y actividad relativa.';

const howTo = [
  {
    name: 'Elige un isotopo',
    text: 'Empieza con Carbono-14, Yodo-131, Uranio-238, Tecnecio-99m o Radon-222. Cada preset carga una semivida realista y el contexto cientifico donde suele usarse.',
  },
  {
    name: 'Define la muestra y el tiempo',
    text: 'Ajusta el numero de atomos representados y avanza el tiempo para ver como la fraccion superviviente sigue la ley exponencial de la semivida.',
  },
  {
    name: 'Compara calculo exacto y azar atomico',
    text: 'Usa el resultado determinista como valor esperado y observa el campo atomico para entender por que las muestras pequenas fluctuan alrededor de la curva teorica.',
  },
  {
    name: 'Interpreta la actividad',
    text: 'La actividad cae en la misma proporcion que los nucleos sin desintegrar, asi que el medidor muestra cuanta tasa de radiacion queda respecto a la muestra inicial.',
  },
];

const faq = [
  {
    question: '¿Qué significa semivida?',
    answer: 'La semivida es el tiempo necesario para que, de media, se desintegre la mitad de los nucleos inestables de una muestra. Tras una semivida queda el 50%, tras dos queda el 25% y tras tres queda el 12,5%.',
  },
  {
    question: '¿Por qué el campo atomico no coincide siempre con el porcentaje exacto?',
    answer: 'La desintegracion radiactiva es probabilistica. La formula da la fraccion esperada para una muestra muy grande, mientras que el campo simula atomos individuales con umbrales aleatorios. En muestras pequenas aparece ruido estadistico de forma natural.',
  },
  {
    question: '¿El medidor de actividad equivale a los atomos restantes?',
    answer: 'Para un unico isotopo, la actividad es proporcional al numero de nucleos sin desintegrar. Si queda el 30% de los atomos, la actividad instantanea es tambien aproximadamente el 30% de la actividad inicial.',
  },
  {
    question: '¿Sirve esta calculadora para datacion por radiocarbono?',
    answer: 'Si, como calculo conceptual. La datacion con Carbono-14 compara la actividad restante con la de material vivo, pero una datacion real de laboratorio tambien corrige curvas de calibracion, contaminacion y preparacion de la muestra.',
  },
  {
    question: '¿Cada isotopo decae hacia un unico producto estable?',
    answer: 'No siempre. Algunos isotopos decaen mediante cadenas con varios productos hijos. Esta herramienta modela la semivida del isotopo padre, que es la magnitud principal para estimar nucleos padre restantes y actividad.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isotopo',
    sampleAtoms: 'Atomos de la muestra',
    elapsedTime: 'Tiempo transcurrido',
    halfLife: 'Semivida',
    remaining: 'Restante',
    decayed: 'Desintegrado',
    activity: 'Actividad relativa',
    timeUnit: 'Unidad de tiempo',
    expectedCurve: 'Curva esperada',
    atomField: 'Campo atomico',
    presetUse: 'Uso habitual',
    oneHalfLife: '1 semivida',
    twoHalfLives: '2 semividas',
    fourHalfLives: '4 semividas',
    custom: 'Personalizado',
    liveAtoms: 'Atomos activos',
    decayedAtoms: 'Atomos desintegrados',
    resetSeed: 'Nuevo patron atomico',
  },
  seo: [
    { type: 'title', text: 'Calculadora de semivida radiactiva: atomos restantes, actividad y ejemplos de isotopos', level: 2 },
    { type: 'paragraph', html: 'Usa esta calculadora de desintegracion radiactiva para estimar cuanto queda de un isotopo inestable despues de un tiempo determinado. Responde a las busquedas mas habituales sobre semivida: encontrar la formula, aplicarla a isotopos reales, comparar nucleos padre restantes con nucleos desintegrados y entender por que la actividad disminuye con el tiempo.' },
    { type: 'paragraph', html: 'La herramienta combina dos modelos complementarios. Los resultados numericos usan la ecuacion exponencial de desintegracion, mientras que el campo atomico simula nucleos individuales con umbrales estocasticos. Asi sirve tanto como calculadora rapida de semivida como explicacion visual de por que la desintegracion radiactiva es predecible en conjunto pero aleatoria para cada atomo.' },
    { type: 'title', text: 'Formula de desintegracion radiactiva usada por la calculadora', level: 3 },
    { type: 'paragraph', html: 'La calculadora usa <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. En esta ecuacion, <strong>N0</strong> es el numero inicial de nucleos padre, <strong>N(t)</strong> es el numero esperado que queda tras el tiempo <strong>t</strong>, y <strong>T1/2</strong> es la semivida del isotopo. El exponente <strong>t / T1/2</strong> cuenta cuantas semividas han pasado.' },
    { type: 'paragraph', html: 'Por ejemplo, si una muestra empieza con 1.000 nucleos padre y pasan dos semividas, la cantidad esperada restante es 1.000 x (1/2)^2 = 250 nucleos. La cantidad desintegrada es la diferencia entre la muestra inicial y la restante: 750 nucleos. El mismo calculo funciona con semividas en segundos, horas, dias, anos o miles de millones de anos.' },
    { type: 'table', headers: ['Tiempo transcurrido', 'Factor de formula', 'Nucleos padre restantes', 'Actividad relativa'], rows: [['0 semividas', '(1/2)^0', '100%', '100%'], ['1 semivida', '(1/2)^1', '50%', '50%'], ['2 semividas', '(1/2)^2', '25%', '25%'], ['3 semividas', '(1/2)^3', '12,5%', '12,5%'], ['5 semividas', '(1/2)^5', '3,125%', '3,125%'], ['10 semividas', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Como calcular la actividad restante tras una semivida', level: 3 },
    { type: 'paragraph', html: 'Para un unico isotopo padre, la actividad es proporcional al numero de nucleos sin desintegrar. Si queda el 25% del isotopo padre, la actividad de ese isotopo tambien es aproximadamente el 25% de la actividad inicial. Por eso la calculadora muestra actividad relativa junto a atomos restantes y desintegrados: para un isotopo, siguen el mismo factor exponencial.' },
    { type: 'paragraph', html: 'Esta relacion es especialmente importante en medicina nuclear y seguridad radiologica. Un trazador de Tecnecio-99m pierde actividad en horas, de modo que la programacion de pruebas de imagen depende de su semivida corta. El Yodo-131 sigue siendo relevante durante dias, lo que afecta a tratamientos, vigilancia de contaminacion e instrucciones para limitar la exposicion.' },
    { type: 'title', text: 'Ejemplos: Carbono-14, Yodo-131, Tecnecio-99m, Uranio-238 y Radon-222', level: 3 },
    { type: 'table', headers: ['Isotopo', 'Semivida aproximada', 'Uso de busqueda habitual', 'Que te dice el resultado'], rows: [['Carbono-14', '5.730 anos', 'Datacion por radiocarbono', 'Cuanta actividad de Carbono-14 padre queda en material que estuvo vivo.'], ['Yodo-131', '8,02 dias', 'Terapia medica e incidentes nucleares', 'Con que rapidez cae la actividad durante dias tras una liberacion o tratamiento.'], ['Tecnecio-99m', '6,01 horas', 'Imagen diagnostica', 'Por que su actividad medica util se desvanece durante una jornada clinica.'], ['Uranio-238', '4,47 mil millones de anos', 'Datacion geologica', 'Por que los isotopos de vida muy larga siguen siendo medibles en la historia terrestre.'], ['Radon-222', '3,82 dias', 'Radiacion interior y cadenas de decaimiento', 'Como cambia en dias una fuente gaseosa de exposicion.']] },
    { type: 'paragraph', html: 'Estos ejemplos cubren distintas escalas temporales e intenciones de busqueda. El Carbono-14 responde preguntas de arqueologia y datacion, el Yodo-131 y el Tecnecio-99m preguntas de actividad medica, el Radon-222 sirve para ejemplos de exposicion ambiental y el Uranio-238 muestra por que algunos isotopos decaen tan despacio que su semivida se entiende mejor a escala geologica.' },
    { type: 'title', text: 'Como leer la simulacion atomica estocastica', level: 3 },
    { type: 'paragraph', html: 'El campo atomico animado es estocastico de forma intencionada. La ecuacion da el valor esperado para una muestra grande, pero los nucleos individuales decaen al azar. Con una muestra pequena, una simulacion tras una semivida puede dejar algo mas o algo menos del 50% de los atomos. Con una muestra mayor, el resultado visual tiende a acercarse a la curva teorica porque las fluctuaciones se compensan.' },
    { type: 'paragraph', html: 'Esta diferencia es clave para aprender. Semivida no significa que cada atomo espere un temporizador y luego desaparezca justo la mitad. Cada nucleo inestable tiene una probabilidad constante de decaer por unidad de tiempo. La curva suave aparece solo cuando se cuentan muchos sucesos aleatorios independientes.' },
    { type: 'title', text: 'Usos de la calculadora de semivida', level: 3 },
    { type: 'list', items: ['<strong>Fisica en clase y deberes:</strong> calcula nucleos padre restantes tras cierto numero de semividas y conecta la formula con un modelo visual.', '<strong>Quimica y ciencia nuclear:</strong> compara estabilidad, velocidad de decaimiento y actividad relativa en escalas temporales muy distintas.', '<strong>Intuicion para radiocarbono:</strong> entiende por que las muestras antiguas contienen menos Carbono-14 y por que la datacion se complica cuando la actividad se acerca al fondo.', '<strong>Planificacion de isotopos medicos:</strong> ve por que las semividas cortas son utiles en imagen diagnostica y por que la actividad cambia rapido tras la administracion.', '<strong>Educacion en seguridad radiologica:</strong> estima como cae la actividad relativa de un unico isotopo sin confundir semivida con desaparicion inmediata.'] },
    { type: 'title', text: 'Limitaciones importantes', level: 3 },
    { type: 'paragraph', html: 'Esta calculadora modela el isotopo padre con una sola semivida. Las mediciones reales pueden requerir correcciones adicionales: eficiencia del detector, radiacion de fondo, razones de ramificacion, productos hijos, eliminacion biologica, forma quimica, blindaje y curvas de calibracion. En radiocarbono, las edades de laboratorio tambien dependen de la calibracion con registros atmosfericos de Carbono-14, no solo de la ecuacion simple.' },
    { type: 'paragraph', html: 'Usa el resultado como una estimacion cientifica clara y un modelo didactico, no como sustituto de consejos de seguridad radiologica, instrucciones medicas, dosimetria o analisis de datacion de laboratorio.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};

