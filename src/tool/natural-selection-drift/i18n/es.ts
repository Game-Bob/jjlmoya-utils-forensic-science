import { bibliography } from '../bibliography';
import type { NaturalSelectionLocaleContent } from '../entry';

const slug = 'simulador-seleccion-natural-deriva-genetica';
const title = 'Simulador de Selección Natural y Deriva Genética';
const description = 'Observa cómo la presión de selección, la mutación, la deriva y la reproducción cambian las frecuencias alélicas en tiempo real con un simulador evolutivo interactivo.';
const howTo = [
  { name: 'Ajusta la población', text: 'Elige una población pequeña o grande para ver cómo el tamaño muestral cambia la estabilidad evolutiva y cuánto puede dominar el azar.' },
  { name: 'Regula selección y deriva', text: 'Sube la presión de selección para favorecer un rasgo o aumenta la deriva para que el azar domine cuando la población es pequeña o fluctúa.' },
  { name: 'Observa las generaciones', text: 'Ejecuta la simulación y compara rasgos dominantes, aptitud y diversidad a lo largo del tiempo para ver si gana la adaptación o la aleatoriedad.' },
  { name: 'Interpreta el balance', text: 'Usa las métricas finales para entender cuándo gana la adaptación, cuándo toma el control la fluctuación aleatoria y por qué un mismo inicio puede acabar distinto.' },
];
const faq = [
  { question: '¿Cuál es la diferencia entre selección natural y deriva genética?', answer: 'La selección natural es un proceso no aleatorio en el que los rasgos que mejoran la supervivencia o la reproducción se vuelven más comunes. La deriva genética es un cambio aleatorio en las frecuencias alélicas y se nota más en poblaciones pequeñas.' },
  { question: '¿Por qué las poblaciones pequeñas cambian más rápido?', answer: 'Con menos individuos, el muestreo aleatorio tiene un efecto mayor. Eso hace que los eventos fortuitos muevan las frecuencias de rasgos con mucha más intensidad de una generación a la siguiente.' },
  { question: '¿Puede la deriva imponerse a la selección?', answer: 'Sí. Si la deriva es lo bastante fuerte, un rasgo beneficioso puede desaparecer por azar, sobre todo cuando la población es pequeña o la presión de selección es débil.' },
  { question: '¿Qué significa fitness en este simulador?', answer: 'Fitness es una puntuación simplificada que representa lo bien adaptada que está la población al entorno elegido. Es una métrica didáctica, no una medida de laboratorio.' },
  { question: '¿Por qué importa tanto el tamaño de la población?', answer: 'El tamaño de la población determina cuánto afectan las fluctuaciones aleatorias a las frecuencias alélicas. En poblaciones grandes, la selección se ve mejor porque el ruido se compensa. En poblaciones pequeñas, el azar puede superar a un rasgo aparentemente ventajoso.' },
  { question: '¿Cuándo debería usar este simulador en vez de una explicación de libro?', answer: 'Úsalo cuando quieras entender la intuición detrás de la evolución, especialmente la diferencia entre una fuerza direccional como la selección y una fuerza estocástica como la deriva.' },
];

export const content: NaturalSelectionLocaleContent = {
  slug, title, description,
  ui: {
    population: 'Tamaño de la población',
    generations: 'Generaciones',
    mutationRate: 'Tasa de mutación',
    selectionPressure: 'Presión de selección',
    driftIntensity: 'Intensidad de deriva',
    alleleCount: 'Alelos iniciales',
    innovationRate: 'Tasa de innovación',
    run: 'Ejecutar simulación',
    dominantTrait: 'Rasgo dominante',
    fitness: 'Aptitud final',
    diversity: 'Diversidad genética',
    evolutionConsole: 'Consola evolutiva',
    populationLabel: 'Población',
    aliveLabel: 'vivos',
    alleleCountsLabel: 'Conteo de alelos',
    alleleDefault: 'Alelo 1',
    populationValueLabel: 'Población',
  },
  seo: [
    { type: 'title', text: 'Selección Natural vs Deriva Genética: entiende la evolución con una población viva', level: 2 },
    { type: 'paragraph', html: 'Si quieres entender selección natural vs deriva genética, este simulador te da la capa visual que faltaba. En lugar de leer una definición estática, puedes ver cómo cambia una población en tiempo real mientras interactúan la presión de selección, la tasa de mutación, la intensidad de deriva y la reproducción.' },
    { type: 'title', text: 'Qué significan los controles y por qué importan', level: 3 },
    { type: 'paragraph', html: 'La selección natural es la parte no aleatoria de la evolución. Aumenta la frecuencia de los rasgos que mejoran la supervivencia o la reproducción. La deriva genética es la parte aleatoria. Cambia las frecuencias alélicas porque no todos los individuos contribuyen por igual a la siguiente generación.' },
    { type: 'paragraph', html: 'La idea clave es que ambas fuerzas actúan a la vez. La selección intenta empujar a la población en una dirección; la deriva puede llevarla a otra completamente distinta. En poblaciones grandes, la selección suele dominar. En poblaciones pequeñas, el azar puede borrar un rasgo útil o fijar uno neutral.' },
    { type: 'title', text: 'Cómo leer los resultados de la simulación', level: 3 },
    { type: 'paragraph', html: 'Las métricas en vivo te ayudan a interpretar el sistema mientras cambia. El rasgo dominante indica qué alelo lidera. La diversidad genética muestra cuánta variación queda. La aptitud final resume qué tan adaptada está la población. Y los contadores de vivos y población muestran si la línea evolutiva crece o colapsa.' },
    { type: 'title', text: 'Por qué el tamaño de la población cambia la historia', level: 3 },
    { type: 'list', items: ['<strong>Presión de selección:</strong> cuánto recompensa el entorno un rasgo frente a otro y con qué rapidez se extiende esa ventaja.', '<strong>Intensidad de deriva:</strong> cuánta variación aleatoria afecta a la población en cada generación, incluso cuando ningún rasgo es objetivamente mejor.', '<strong>Tasa de mutación:</strong> con qué frecuencia entra nueva variación en el sistema.', '<strong>Número de alelos:</strong> cuántos alelos explícitos hay al inicio y cuántas variantes nuevas pueden aparecer.', '<strong>Diversidad genética:</strong> por qué la variación es la materia prima de la evolución.'] },
    { type: 'paragraph', html: 'El resultado es una forma rápida y útil de entender la evolución sin depender sólo de definiciones abstractas. Si buscas un simulador que explique selección natural, deriva genética, mutación, reproducción y por qué un mismo punto de partida puede acabar de forma distinta, esta herramienta está hecha para eso.' },
    { type: 'title', text: 'Ejemplos rápidos de uso', level: 3 },
    { type: 'table', headers: ['Objetivo', 'Qué cambiar', 'Qué deberías ver'], rows: [['Mostrar victoria de la selección', 'Sube la presión de selección y baja la deriva', 'Un alelo debe dominar con el tiempo y la diversidad caerá más despacio'], ['Mostrar el azar tomando el control', 'Baja la población y sube la deriva', 'Las frecuencias deben oscilar de forma impredecible'], ['Mostrar nuevas mutaciones', 'Sube mutación e innovación', 'Aparecerán nuevos alelos y el ranking cambiará más a menudo']] },
    { type: 'paragraph', html: 'Esa combinación de visuales en vivo, ranking explícito de alelos y métricas en tiempo real hace que el simulador sea útil tanto para enseñar como para explicar trade-offs evolutivos sin rodeos.' },
  ],
  faq, bibliography, howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
