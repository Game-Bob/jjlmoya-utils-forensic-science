import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-cromatografia-capa-fina-tlc-tintas';
const title = 'Simulador de Cromatografía en Capa Fina (TLC) de Tintas Forenses';
const description = 'Simule la cromatografía en capa fina de tintas de escritura cuestionadas, visualice el desarrollo del frente del disolvente, separe las bandas de colorantes y calcule los valores de Rf exactos para cada pigmento.';

const howTo = [
  {
    name: 'Seleccionar la tinta cuestionada o el bolígrafo de comparación',
    text: 'Seleccione la tinta de la nota de rescate o el perfil de un bolígrafo sospechoso. Cada tinta contiene un conjunto diferente de colorantes con distinta polaridad y afinidad por la fase estacionaria.',
  },
  {
    name: 'Seleccionar la fase móvil',
    text: 'Cambie el sistema de disolventes para observar cómo la polaridad del disolvente altera el desarrollo capilar y la migración relativa de cada banda de colorante.',
  },
  {
    name: 'Desarrollar la placa de TLC',
    text: 'Mueva el control deslizante del tiempo de desarrollo y observe cómo el frente del disolvente asciende por la placa mientras aparecen las bandas separadas por encima de la línea de origen.',
  },
  {
    name: 'Leer la tabla de Rf',
    text: 'Compare la distancia de cada pigmento con la distancia del frente del disolvente. El simulador calcula el Rf dividiendo la distancia del pigmento entre la distancia del frente del disolvente.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Qué significa Rf en cromatografía en capa fina?',
    answer: 'Rf es el factor de retención: la distancia recorrida por el compuesto dividida por la distancia recorrida por el frente del disolvente desde la misma línea de origen. Es un valor adimensional y normalmente oscila entre 0 y 1.',
  },
  {
    key: 'faq-2',
    question: '¿Puede la TLC demostrar que dos muestras de tinta provienen del mismo bolígrafo?',
    answer: 'No. La TLC puede mostrar si los patrones de los colorantes son consistentes o inconsistentes, pero la atribución de origen requiere métodos de comparación validados, controles, documentación y la interpretación de un experto.',
  },
  {
    key: 'faq-3',
    question: '¿Por qué al cambiar el disolvente se altera el patrón de las bandas?',
    answer: 'Los colorantes se distribuyen de manera diferente entre la fase estacionaria y la fase móvil. Un disolvente con una polaridad más afín puede arrastrar un colorante a mayor distancia, aumentando su valor de Rf.',
  },
  {
    key: 'faq-4',
    question: '¿Por qué es importante la línea de origen?',
    answer: 'Tanto la distancia del frente del disolvente como la del pigmento deben medirse desde la línea de origen. Medir desde el borde inferior de la placa produce valores de Rf incorrectos.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Cámara de cromatografía en capa fina con placa de desarrollo',
    rulerAria: 'Regla milimétrica virtual para medir el frente del disolvente y las bandas de pigmento',
    rulerMarks: '80,60,40,20,0',
    units: 'Sistema de unidades',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Muestra de tinta',
    ransomNote: 'Tinta de la nota de rescate cuestionada',
    bluePen: 'Bolígrafo azul incautado',
    blackPen: 'Bolígrafo negro incautado',
    gelPen: 'Bolígrafo de gel incautado',
    solventSystem: 'Fase móvil',
    ethanolWater: 'Etanol / agua',
    butanolAcetic: 'Butanol / ácido acético',
    isopropanolAmmonia: 'Isopropanol / amoníaco',
    developmentTime: 'Tiempo de desarrollo',
    frontDistance: 'Recorrido del disolvente',
    matchScore: 'Similitud del patrón',
    solventFront: 'Frente del disolvente',
    originLine: 'Origen',
    pigment: 'Banda de pigmento',
    pigmentCyanDye: 'colorante cian',
    pigmentVioletDye: 'colorante violeta',
    pigmentGrayCarrier: 'vehículo gris',
    pigmentNavyDye: 'colorante azul marino',
    pigmentYellowDye: 'colorante amarillo',
    pigmentRedDye: 'colorante rojo',
    pigmentBlueDye: 'colorante azul',
    pigmentDarkBinder: 'aglutinante oscuro',
    pigmentTealDye: 'colorante verde azulado',
    pigmentMagentaDye: 'colorante magenta',
    pigmentGelBinder: 'aglutinante de gel',
    distance: 'Distancia',
    rfValue: 'Valor Rf',
    disclaimer: 'Simulación únicamente con fines educativos. La comparación forense de tintas requiere documentos originales, métodos de laboratorio validados, patrones de referencia y examinadores de documentos cualificados.',
  },
  seo: [
    {
      type: 'title',
      text: 'Cromatografía en Capa Fina para la Comparación Forense de Tintas',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Simulador didáctico',
      title: 'Qué ayuda a comprender este simulador de tinta TLC',
      html: 'Esta herramienta explica cómo la <strong>cromatografía en capa fina de tintas de escritura</strong> puede separar una línea de tinta visible en múltiples bandas de colorantes. Está diseñada para estudiantes de ciencias forenses, estudiantes de examen de documentos y cualquier persona que intente comprender cómo se calculan los valores de Rf a partir de una placa de TLC desarrollada.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d banda / d disolvente', label: 'fórmula del factor de retención', icon: 'mdi:division' },
        { value: '4', label: 'perfiles de tinta comparados', icon: 'mdi:pen' },
        { value: '3', label: 'fases móviles simuladas', icon: 'mdi:flask-outline' },
        { value: '2', label: 'lecturas métricas e imperiales', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificación para mediciones correctas de TLC',
      items: [
        'Marque la línea de origen por encima del nivel del disolvente antes de comenzar el desarrollo.',
        'Retire la placa antes de que el disolvente alcance el borde superior.',
        'Marque el frente del disolvente de inmediato, ya que puede evaporarse o volverse difícil de ver.',
        'Mida el recorrido del pigmento y del disolvente desde la misma línea de origen.',
        'Informe los valores de Rf junto con el sistema de disolventes, el tipo de placa, las condiciones de desarrollo y los controles.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lo que la TLC puede respaldar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'La TLC puede mostrar si las tintas cuestionadas y las conocidas tienen un comportamiento de separación de colorantes similar bajo las mismas condiciones.',
          points: ['Comparación de cribado', 'Visualización del patrón de colorantes', 'Documentación del Rf', 'Selección de muestras para pruebas confirmatorias'],
        },
        {
          title: 'Lo que la TLC no puede probar por sí sola',
          icon: 'mdi:alert-circle-outline',
          description: 'La TLC por sí sola no puede identificar de forma exclusiva un bolígrafo, fechar un documento o probar la autoría.',
          points: ['Sin atribución de fuente única', 'Sin identificación del redactor', 'Sin conclusión de envejecimiento por defecto', 'No reemplaza los protocolos validados'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pregunta de los usuarios', 'Concepto de TLC implicado', 'Respuesta detallada'],
      rows: [
        ['¿Cómo se calcula el Rf?', 'Distancia del colorante dividida por la distancia del frente del disolvente.', 'Mida ambas desde la línea de origen y luego divida. El resultado no tiene unidad.'],
        ['¿Por qué las tintas se separan en colores?', 'Diferentes colorantes tienen distinta afinidad por las fases estacionaria y móvil.', 'Un solo trazo escrito puede contener varios colorantes que migran a diferentes velocidades.'],
        ['¿Pueden dos bolígrafos tener el mismo patrón de TLC?', 'Sí, formulaciones similares pueden producir patrones muy parecidos.', 'La similitud respalda la consistencia, no la individualización a un solo bolígrafo.'],
        ['¿Por qué cambió mi Rf?', 'El disolvente, la placa, la humedad, la saturación, la temperatura y el tamaño del punto afectan la migración.', 'Los valores de Rf solo son comparables cuando las condiciones están controladas y documentadas.'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo modela la separación el simulador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El modelo trata el movimiento del frente del disolvente como un proceso de ascenso capilar que se ralentiza con el tiempo, mientras que cada colorante recibe un valor de Rf basado en dos propiedades simplificadas: su afinidad por el disolvente en movimiento y su compatibilidad de polaridad con la fase móvil seleccionada. Esto es intencionadamente educativo y no química de grado instrumental, pero preserva la relación fundamental que los usuarios necesitan aprender: el disolvente se mueve primero, los colorantes se distribuyen entre las fases y el Rf se calcula a partir de las distancias de recorrido medidas.',
    },
    {
      type: 'paragraph',
      html: 'La cromatografía en capa fina es una técnica analítica ampliamente aceptada en los laboratorios forenses debido a su simplicidad, rapidez y rentabilidad. En el contexto del examen de documentos, se utiliza principalmente para comparar la composición de colorantes de diferentes muestras de tinta. Los científicos forenses extraen una pequeña porción de tinta de un documento cuestionado utilizando un bisturí o una aguja hueca, la disuelven en un disolvente adecuado como piridina o metanol, y la aplican en la placa de TLC junto con patrones de tinta de referencia.',
    },
    {
      type: 'paragraph',
      html: 'Una vez que la placa se desarrolla en una cámara cerrada, los componentes individuales de la tinta se separan en función de su distribución diferencial entre la fase estacionaria de gel de sílice y la fase móvil del disolvente. El cromatograma resultante proporciona una huella digital visual de la tinta, mostrando bandas de colores distintas a alturas específicas. Posteriormente, los examinadores de documentos calculan el factor de retención para cada banda de colorante visible, lo que ayuda a determinar si la tinta cuestionada es químicamente consistente con un instrumento de escritura sospechoso o si coincide con una marca y fórmula conocidas en una base de datos de referencia de tintas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fase estacionaria', definition: 'El recubrimiento de la placa de TLC, comúnmente gel de sílice, que interactúa con los compuestos y ralentiza su movimiento.' },
        { term: 'Fase móvil', definition: 'El sistema de disolventes que asciende por la placa y arrastra consigo los componentes del colorante.' },
        { term: 'Línea de origen', definition: 'La línea de lápiz donde se aplica la muestra de tinta antes del desarrollo.' },
        { term: 'Frente del disolvente', definition: 'El punto más alto alcanzado por la fase móvil antes de retirar la placa.' },
        { term: 'Valor Rf', definition: 'El factor de retención: distancia de recorrido del compuesto dividida por la distancia de recorrido del frente del disolvente.' },
      ],
    },
    {
      type: 'tip',
      title: 'Consejo práctico de interpretación',
      html: 'En el examen forense de documentos, una discrepancia puede ser especialmente útil porque puede excluir la fórmula de un bolígrafo candidato. Un patrón de TLC coincidente es un indicio más débil: indica que las muestras son químicamente consistentes bajo esas condiciones, no que provengan necesariamente del mismo bolígrafo.',
    },
    {
      type: 'proscons',
      title: 'Fortalezas y limitaciones de la comparación de tintas mediante TLC',
      items: [
        { pro: 'Rápido, económico y visualmente intuitivo para separar los colorantes de la tinta.', con: 'Normalmente destructivo, ya que se extrae una pequeña muestra del documento.' },
        { pro: 'Los valores de Rf crean una forma estructurada de comparar muestras cuestionadas y conocidas.', con: 'Los valores de Rf cambian cuando varían el disolvente, la placa, la humedad y las condiciones de desarrollo.' },
        { pro: 'Útil como método de cribado antes de análisis más avanzados.', con: 'No puede llevar a una conclusión inequívoca sobre el bolígrafo de origen sin pruebas adicionales más amplias.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaución forense',
      title: 'No sobrestime la cromatografía de tintas',
      html: 'Una simulación de navegador no puede examinar el papel, la antigüedad de la tinta, la química de extracción, la calidad de la placa, la contaminación o la confirmación instrumental. Utilícela para aprender la lógica de medición y los límites de interpretación, y confíe en métodos validados de examen forense de documentos para las pruebas reales.',
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
