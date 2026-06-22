const description =
  'Modela la paradoja de Fermi con parámetros de la ecuación de Drake, filtros evolutivos, vida útil de la señal y una proyección temporal de las civilizaciones detectables de la Vía Láctea.';
const slug = 'laboratorio-filtro-paradoja-fermi';
const title = 'Laboratorio de Filtros de la Paradoja de Fermi';

const howTo = [
  {
    name: 'Estima el pipeline de Drake',
    text: 'Mueve los controles deslizantes de formación estelar, planetas habitables, vida, inteligencia y tecnología para definir con qué frecuencia la Vía Láctea genera civilizaciones detectables.',
  },
  {
    name: 'Ajusta la intensidad del filtro',
    text: 'Aumenta el filtro evolutivo cuando quieras que el colapso, la autodestrucción, la inestabilidad ecológica o los cuellos de botella tecnológicos eliminen civilizaciones más rápido.',
  },
  {
    name: 'Compara la vida útil con el horizonte',
    text: 'Usa la vida útil de la señal y el horizonte de proyección juntos. Una vida útil corta puede silenciar una galaxia incluso cuando nacen civilizaciones con regularidad.',
  },
  {
    name: 'Interpreta la curva temporal',
    text: 'El gráfico muestra civilizaciones detectables a través del tiempo, haciendo visibles la coexistencia y la extinción en lugar de reducir la paradoja de Fermi a un solo número.',
  },
];

const faq = [
  {
    question: '¿Qué calcula este simulador de la paradoja de Fermi?',
    answer: 'Combina los términos de la ecuación de Drake con un filtro de supervivencia y un horizonte temporal para estimar cuántas civilizaciones tecnológicas podrían ser detectables al mismo tiempo en la Vía Láctea.',
  },
  {
    question: '¿Es esto una predicción de civilizaciones alienígenas reales?',
    answer: 'No. Es un modelo exploratorio. El valor está en ver cómo interactúan los supuestos: una galaxia puede producir muchas civilizaciones a lo largo de la historia y aun así tener muy pocas que se superpongan con la nuestra.',
  },
  {
    question: '¿Qué es el Gran Filtro?',
    answer: 'El Gran Filtro es la idea de que uno o más pasos entre la química simple y una civilización tecnológica longeva son extremadamente improbables o peligrosos.',
  },
  {
    question: '¿Por qué es tan importante la vida útil de la señal?',
    answer: 'La detectabilidad depende de la superposición. Una civilización que transmite durante solo unos siglos puede ser real pero invisible para otra civilización que observa en una época diferente.',
  },
  {
    question: '¿Cómo debo elegir las fracciones de vida e inteligencia?',
    answer: 'Usa valores bajos para un escenario pesimista de vida rara y valores más altos cuando explores la posibilidad de que la biología o la inteligencia surjan con frecuencia en mundos habitables estables.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chartLabel: 'Civilizaciones detectables proyectadas a través del tiempo',
    metricsLabel: 'Métricas del modelo de Fermi',
    controlsLabel: 'Controles del modelo de Fermi',
    birthRate: 'Tasa de natalidad',
    peakCivilizations: 'Pico de civilizaciones',
    finalCivilizations: 'Civilizaciones finales',
    silenceScore: 'Puntuación de silencio',
    starFormationRate: 'Tasa de formación estelar',
    habitableFraction: 'Fracción de planetas habitables',
    lifeFraction: 'Fracción de surgimiento de vida',
    intelligenceFraction: 'Fracción de inteligencia',
    technologyFraction: 'Fracción de tecnología',
    signalLifetime: 'Vida útil de la señal',
    filterSeverity: 'Severidad del filtro',
    horizonYears: 'Horizonte de proyección',
    maxLabel: 'máx',
    yearUnit: 'a',
    silenceScale: '100',
    step01: '01',
    step02: '02',
    step03: '03',
    step04: '04',
    step05: '05',
    step06: '06',
    step07: '07',
    step08: '08',
  },
  seo: [
    {
      type: 'title',
      text: 'Un simulador práctico de la paradoja de Fermi para los supuestos de la ecuación de Drake',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La paradoja de Fermi pregunta por qué el cielo nocturno parece silencioso si la Vía Láctea contiene cientos de miles de millones de estrellas y muchos planetas. Esta herramienta convierte esa pregunta en un modelo interactivo al combinar la ecuación de Drake con filtros evolutivos y una proyección temporal de civilizaciones detectables.',
    },
    {
      type: 'paragraph',
      html: 'En lugar de ofrecer una estimación estática única, el simulador muestra cómo las civilizaciones pueden nacer, volverse detectables y desaparecer antes de que otra sociedad tenga la oportunidad de escucharlas. Ese problema de sincronización es central para SETI porque dos culturas tecnológicas deben superponerse en espacio, tiempo y comportamiento de la señal.',
    },
    {
      type: 'title',
      text: 'Cómo utiliza el modelo los parámetros de la ecuación de Drake',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los primeros controles representan un pipeline simplificado de Drake. La formación estelar suministra nuevos sistemas estelares. Una fracción de esos sistemas forma planetas habitables, una fracción de planetas habitables desarrolla vida, una fracción de mundos vivos produce inteligencia y una fracción de especies inteligentes se vuelve detectable a través de la tecnología.',
    },
    {
      type: 'table',
      headers: ['Control', 'Significado', 'Efecto'],
      rows: [
        ['Tasa de formación estelar', 'Estrellas nuevas por año en la Vía Láctea', 'Aumenta o reduce el suministro bruto de sistemas posibles'],
        ['Fracción de planetas habitables', 'Proporción de sistemas con mundos estables donde la química del agua líquida podría persistir', 'Controla cuánto de la galaxia entra en el pipeline biológico'],
        ['Fracción de surgimiento de vida', 'Probabilidad de que la vida simple comience en un mundo habitable', 'Contrasta supuestos de vida rara frente a vida común'],
        ['Fracción de inteligencia', 'Probabilidad de que la vida evolucione cognición capaz de tecnología', 'Representa cuellos de botella biológicos y ecológicos'],
        ['Fracción de tecnología', 'Probabilidad de que la inteligencia produzca señales detectables', 'Captura decisiones culturales, de ingeniería y de comunicación'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué los filtros pueden hacer que una galaxia ocupada parezca vacía',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El control deslizante de severidad del filtro comprime muchos posibles puntos de fallo en una sola presión de supervivencia: impactos de asteroides, climas inestables, autodestrucción, colapso de recursos, riesgo de inteligencia artificial o cualquier otro cuello de botella que acorte la fase detectable. Un filtro fuerte no significa que las civilizaciones nunca surjan. Significa que rara vez permanecen visibles durante mucho tiempo.',
    },
    {
      type: 'paragraph',
      html: 'Esa distinción importa. La Vía Láctea podría haber producido miles de especies tecnológicas a lo largo del tiempo profundo mientras deja casi ningún vecino activo durante nuestra propia y estrecha ventana de escucha. El gráfico hace visible esta diferencia al representar las civilizaciones detectables a través del horizonte de proyección seleccionado.',
    },
    {
      type: 'title',
      text: 'Interpretación de la puntuación de silencio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La puntuación de silencio aumenta cuando el número final de civilizaciones detectables superpuestas es bajo. Un silencio alto no prueba que los humanos estén solos; muestra que los supuestos elegidos hacen que la no detección no sea sorprendente. Un silencio bajo significa que el modelo espera una galaxia más ruidosa, por lo que la ausencia de evidencia se vuelve más interesante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Tasa de natalidad alta más filtro bajo:</strong> una galaxia poblada donde el silencio de SETI es más difícil de explicar.',
        '<strong>Tasa de natalidad alta más filtro alto:</strong> aparecen muchas civilizaciones, pero pocas sobreviven lo suficiente para superponerse.',
        '<strong>Fracciones biológicas bajas:</strong> la vida o la inteligencia es rara, por lo que el silencio puede surgir antes de que la tecnología importe siquiera.',
        '<strong>Vida útil de la señal corta:</strong> las civilizaciones pueden existir pero transmitir demasiado brevemente para que el contacto sea probable.',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso para la enseñanza, el debate y la intuición de SETI',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El Laboratorio de Filtros de la Paradoja de Fermi es útil en clases de astronomía, discusiones de astrobiología, divulgación científica y debates filosóficos sobre el futuro de la humanidad. Ayuda a separar tres preguntas que a menudo se mezclan: con qué frecuencia nacen las civilizaciones, cuánto tiempo permanecen detectables y si sus líneas de tiempo se superponen con la nuestra.',
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
