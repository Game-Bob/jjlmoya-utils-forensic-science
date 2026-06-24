import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculador-alcoholemia-widmark-espanol';
const title = 'Simulador de Concentración de Alcoholemia de Widmark';
const description = 'Calcula y simula la absorción, distribución y eliminación de etanol en el cuerpo humano utilizando la fórmula de Widmark y un motor de cinética de metabolismo de orden cero.';

const howTo = [
  {
    name: 'Configurar parámetros físicos del sujeto',
    text: 'Introduce el peso corporal, el sexo biológico y el nivel de hidratación. Estas características fisiológicas calculan directamente el factor de Widmark (r), que dicta el volumen de distribución del etanol en el cuerpo.',
  },
  {
    name: 'Definir el estado de llenado del estómago',
    text: 'Selecciona entre estómago vacío, comida ligera o comida completa. Esto ajusta dinámicamente la constante de velocidad de absorción (ka) para mostrar el efecto de amortiguación de los alimentos.',
  },
  {
    name: 'Añadir bebidas a la línea de tiempo',
    text: 'Añade bebidas individuales especificando el volumen en mililitros, el porcentaje de alcohol por volumen (graduación) e introduce la hora de consumo relativa al inicio de la simulación.',
  },
  {
    name: 'Analizar la curva de alcoholemia resultante',
    text: 'Inspecciona el gráfico de evolución temporal de la tasa de alcohol en sangre durante 12 horas. Compara el pico máximo y el tiempo de recuperación frente a los límites legales.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Qué es la fórmula de Widmark y cómo se utiliza en toxicología forense?',
    answer: 'La fórmula de Widmark es un modelo matemático desarrollado por el químico sueco Erik M. P. Widmark en 1932. Estima la concentración de alcohol en sangre (BAC) basándose en la masa de alcohol puro ingerido, el peso corporal, un factor de distribución biológica (r) y una tasa de eliminación lineal. Los toxicólogos forenses la utilizan para realizar cálculos retrospectivos o "cálculos hacia atrás", estimando la alcoholemia de un conductor en el momento exacto de un accidente a partir de una muestra de sangre tomada horas después.',
  },
  {
    key: 'faq-2',
    question: '¿Cómo afecta la comida en el estómago a la forma de la curva de alcoholemia?',
    answer: 'La presencia de comida en el estómago retrasa el vaciado gástrico, lo que a su vez retrasa la llegada del etanol al duodeno e intestino delgado, que es donde se absorbe de forma masiva y rápida. En la simulación, esta ralentización se modela reduciendo la constante de velocidad de absorción (ka). El resultado visual en la gráfica es un pico de alcoholemia retrasado en el tiempo y con una altura máxima significativamente menor que en ayunas.',
  },
  {
    key: 'faq-3',
    question: '¿Por qué la eliminación de alcohol sigue una cinética de orden cero en lugar de orden uno?',
    answer: 'La mayoría de fármacos se eliminan por cinética de primer orden, donde la velocidad de aclaramiento es proporcional a la concentración. Sin embargo, el alcohol se metaboliza mediante cinética de orden cero porque la enzima hepática principal encargada de su oxidación, la alcohol deshidrogenasa (ADH), se satura con niveles muy bajos de alcoholemia (alrededor de 0.02 g/L). Por tanto, el hígado metaboliza el alcohol a una velocidad máxima constante, independientemente de cuánto se haya consumido.',
  },
  {
    key: 'faq-4',
    question: '¿Qué factores biológicos influyen en las variaciones del factor r de Widmark?',
    answer: 'El factor de Widmark (r) representa la proporción de agua corporal respecto al peso total. Como el etanol es muy hidrófilo y prácticamente insoluble en grasa, se distribuye únicamente en el agua corporal. Dado que el tejido muscular contiene aproximadamente un 75% de agua y el tejido adiposo (grasa) apenas retiene agua, las personas con mayor porcentaje de grasa o estados de deshidratación severa tienen un volumen de distribución menor, lo que eleva la concentración de alcohol en sangre tras ingerir la misma dosis.',
  },
  {
    key: 'faq-5',
    question: '¿Puedo usar este simulador para demostrar legalmente que estaba sobrio para conducir?',
    answer: 'Bajo ninguna circunstancia. Este simulador es una herramienta puramente educativa. En la realidad física de un individuo, variables como la salud del hígado, la genética enzimática, interacciones con fármacos, el cansancio, el estrés y las condiciones gastrointestinales exactas añaden una enorme variabilidad. Nunca confíes en un cálculo matemático para decidir si estás en condiciones de conducir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Perfil del sujeto',
    weight: 'Peso (kg)',
    sex: 'Sexo biológico',
    male: 'Masculino',
    female: 'Femenino',
    hydration: 'Nivel de hidratación',
    hydrationLow: 'Bajo',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Alto',
    stomachState: 'Contenido del estómago',
    stomachEmpty: 'Vacío (Absorción rápida)',
    stomachLight: 'Comida ligera (Absorción media)',
    stomachFull: 'Comida completa (Absorción lenta)',
    drinksTimeline: 'Línea de tempo de consumo',
    addDrink: 'Añadir bebida',
    drinkVolume: 'Volumen (ml)',
    drinkAbv: 'Graduación (% vol)',
    drinkTime: 'Tiempo (Hora)',
    drinksList: 'Bebidas consumidas',
    remove: 'Eliminar',
    beer: 'Cerveza (330ml, 5%)',
    wine: 'Vino (150ml, 12%)',
    spirits: 'Destilados (40ml, 40%)',
    peakBac: 'Pico de BAC',
    timeToSober: 'Tiempo para sobriedad',
    sober: 'Sobrio',
    currentBac: 'BAC actual',
    drivingLimitAlert: 'Límite de conducción',
    safeLimit: 'Bajo el límite',
    warningLimit: 'Límite de advertencia superado',
    dangerLimit: 'Nivel de peligro superado',
    graphTitle: 'Concentración de alcohol en sangre durante 12 horas',
    timeAxisLabel: 'Tiempo (Horas)',
    bacAxisLabel: 'Alcoholemia (g/L)',
    legalLimitText: 'Límite legal estándar',
    noDrinksText: 'Añade bebidas para simular la curva de alcoholemia.',
    hours: 'horas',
    soberStatus: 'Sobrio en {time} horas',
    neverSober: 'Supera las 12 horas',
    noteDisclaimer: 'Simulación educativa. La absorción y eliminación real varían. No conduzcas si has bebido.',
    noteWidmark: 'Basado en la ecuación de Widmark y tasa de eliminación hepática de orden cero.',
  },
  seo: [
    {
      type: 'title',
      text: 'Fisiología, Farmacocinética y Metabolismo del Etanol en Casos Forenses',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La determinación de la <strong>absorción, distribución y eliminación del etanol</strong> constituye uno de los pilares más importantes de la medicina legal y la toxicología forense. Tras su ingestión, el alcohol desciende hacia el estómago, donde comienza un proceso de absorción menor. No obstante, más del 80% de la dosis de etanol se absorbe en el duodeno y el yeyuno debido a su enorme superficie epitelial. La velocidad con la que el esfínter pilórico del estómago se abre y permite el paso de los líquidos al intestino es el factor limitante clave de la absorción. Esta es la base de por qué consumir bebidas alcohólicas con el estómago lleno aplana la curva farmacocinética.',
    },
    {
      type: 'paragraph',
      html: 'Este simulador interactivo implementa las ecuaciones matemáticas de Erik Widmark para modelar la concentración de alcohol en sangre (BAC) de forma continua durante un período de 12 horas. Al configurar los parámetros físicos del sujeto e introducir consumos espaciados en el tiempo, el usuario puede observar cómo se superponen los picos de absorción gástrica y cómo la velocidad de aclaramiento hepático de orden cero reduce de forma lineal los niveles de etanol en la sangre.',
    },
    {
      type: 'title',
      text: 'Derivación de la Ecuación Retrospectiva de Widmark',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La ecuación básica formulada por Widmark asume que el alcohol ingerido se distribuye instantáneamente en todo el volumen de agua del cuerpo humano. Su expresión matemática fundamental es: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Donde <em>A</em> es la masa de alcohol puro expresada en gramos, <em>W</em> representa el peso corporal del sujeto en kilogramos, y <em>r</em> es el factor de distribución o constante de dilución. Este factor representa la fração del peso corporal en la que el alcohol puede disolverse. Por último, <em>&beta;</em> (beta) representa la tasa metabólica de eliminación por hora y <em>t</em> es el tempo transcurrido en horas.',
    },
    {
      type: 'paragraph',
      html: 'Para convertir el volumen líquido de una bebida en masa de etanol puro, se multiplica el volumen en mililitros por la concentración de alcohol por volumen (ABV) y por la densidad del etanol, estimada en 0.8 g/ml. Por ejemplo, una lata de cerveza de 330 ml al 5% aporta: 330 * 0.05 * 0.8 = 13.2 gramos de alcohol puro. Esta masa se diluye según el agua corporal total. El simulador adapta el factor r según el sexo (0.68 para hombres y 0.55 para mujeres, debido a la diferencia típica en tejido adiposo) y el nivel de hidratación, ofreciendo una representación precisa.',
    },
    {
      type: 'title',
      text: 'Factores que Modulan el Volumen de Distribución y la Eliminación de Orden Cero',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El volumen aparente de distribución (V<sub>d</sub>) depende de la cantidad de agua celular y extracelular. El alcohol es soluble en agua pero apenas se disuelve en el tejido adiposo (grasa). Por esta razón, una persona con mayor masa muscular tendrá un factor r mayor y presentará un pico de alcoholemia menor en comparación con una persona del mismo peso pero mayor grasa corporal. Asimismo, la deshidratación aguda reduce la cantidad de agua libre en el organismo, disminuyendo el volumen de dilución y provocando un incremento notable en la concentración de alcohol sanguíneo ante la misma ingesta.',
    },
    {
      type: 'table',
      headers: ['Variable Fisiológica', 'Mecanismo Biológico', 'Efecto Farmacocinético', 'Importancia Forense'],
      rows: [
        ['Peso Corporal', 'Escala el volumen total del pool de agua corporal.', 'Inversamente proporcional al pico máximo de alcoholemia.', 'Establece el volumen de dilución de partida para estimar dosis.'],
        ['Sexo Biológico', 'Determina la relación muscular y de grasa típica.', 'r is menor en mujeres (0.55) que en hombres (0.68).', 'Explica la susceptibilidad física ante la misma dosis.'],
        ['Estado de Hidratación', 'Altera el agua disponible en los compartimentos.', 'La deshidratación reduce r en 0.05, elevando la curva.', 'Ajusta la tolerancia matemática en climas extremos o esfuerzo.'],
        ['Llenado Gástrico', 'La comida retrasa el vaciado y atrapa etanol en el estómago.', 'Reduce la constante ka, aplanando y retrasando el pico.', 'Explica alcoholemias bajas con consumos altos postprandiales.'],
      ],
    },
    {
      type: 'title',
      text: 'Cinética Hepática y Reconstrucción en Accidentes de Tráfico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una vez en la circulación, el alcohol es metabolizado principalmente en el hígado por el sistema enzimático de la alcohol deshidrogenasa (ADH), que lo transforma en acetaldehído. Este proceso se satura a concentraciones muy bajas, lo que da lugar a una cinética de orden cero. Esto significa que el hígado metaboliza una cantidad fija de alcohol por hora, sin importar el nivel de intoxicación. En el ámbito forense, esta tasa constante de aclaramiento (&beta;<sub>60</sub>) se fija de media en 0.15 g/L por hora, equivalente a eliminar unos 10 gramos de alcohol puro cada hora. Esta eliminación de orden cero es la que genera la característica pendiente de descenso lineal en los gráficos de alcoholemia.',
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
      applicationCategory: 'ForensicApplication',
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
