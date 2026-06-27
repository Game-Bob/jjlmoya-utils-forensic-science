import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'simulador-linea-becke-indice-refraccion-vidrio';
const title = 'Simulador de la línea de Becke e índice de refracción de vidrio forense';
const description = 'Simula el método de la línea de Becke para la comparación forense de vidrios calentando un líquido de inmersión, igualando los índices de refracción y observando cómo desaparece el halo brillante.';

const howTo = [
  {
    name: 'Seleccionar un perfil de vidrio dubitado',
    text: 'Elige un perfil de referencia de vidrio común como calcolizo, borosilicato, cristal de plomo o vidrio templado para ventanas.',
  },
  {
    name: 'Ajustar la temperatura de la platina calefactora',
    text: 'Mueve el control deslizante de temperatura para cambiar el índice de refracción del líquido de inmersión virtual.',
  },
  {
    name: 'Observar el movimiento de la línea de Becke',
    text: 'Usa el control de dirección del enfoque para ver si la línea brillante se mueve hacia adentro, hacia afuera o si casi desaparece en el punto de coincidencia.',
  },
  {
    name: 'Leer la diferencia de índices',
    text: 'Compara el IR del líquido, el IR del vidrio, el delta de IR y el porcentaje de coincidencia para comprender por qué el halo se debilita cerca de la coincidencia de índices.',
  },
];

const faq = [
  {
    question: '¿Qué es la línea de Becke en el análisis forense de vidrios?',
    answer: 'La línea de Becke es un halo brillante que se observa cerca del límite entre un fragmento de vidrio y un líquido de inmersión cuando sus índices de refracción difieren. Su movimiento durante el enfoque ayuda a determinar cuál de los materiales tiene el índice de refracción más alto.',
  },
  {
    question: '¿Por qué es importante calentar el líquido de inmersión?',
    answer: 'El índice de refracción de muchos líquidos de inmersión disminuye a medida que aumenta la temperatura. Al calentar el líquido hasta que su índice coincida con el del vidrio, el contraste en el límite se desvanece y el borde del fragmento se vuelve difícil de ver.',
  },
  {
    question: '¿Puede el índice de refracción identificar la fuente de un vidrio por sí solo?',
    answer: 'No. El índice de refracción puede respaldar la comparación y exclusión de clases, pero la interpretación forense de la fuente también considera la composición elemental, el grosor, el color, el contexto de la fractura, los controles, la incertidumbre y los procedimientos de laboratorio validados.',
  },
  {
    question: '¿Qué significa que la línea de Becke desaparezca?',
    answer: 'Significa que el líquido y el vidrio tienen índices de refracción muy similares bajo esas condiciones simuladas. En la microscopía real, la desaparición se juzga con un control de temperatura calibrado y materiales de referencia.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vista de microscopio virtual que muestra un fragmento de vidrio en líquido de inmersión',
    units: 'Sistema de unidades de temperatura',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Vidrio de referencia',
    sodaLime: 'Vidrio de envase calcolizo',
    borosilicate: 'Vidrio de laboratorio de borosilicato',
    leadCrystal: 'Cristal de plomo decorativo',
    tempered: 'Vidrio templado para ventanas',
    stageTemperature: 'Temperatura de la platina',
    focusDirection: 'Dirección del enfoque',
    focusRaised: 'Subir enfoque',
    focusLowered: 'Bajar enfoque',
    liquidRi: 'IR del líquido',
    glassRi: 'IR del vidrio',
    deltaRi: 'Delta de IR',
    matchMeter: 'Coincidencia de IR',
    canvasHalo: 'halo de Becke visible',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'borde casi coincidente',
    interpMatched: 'El límite está cerca de la coincidencia óptica. En una prueba real de la línea de Becke, esta es la región donde el halo se debilita y el borde del fragmento es más difícil de localizar.',
    interpGlassHigher: 'El vidrio tiene el índice de refracción más alto. Al subir el enfoque, el comportamiento de la línea de Becke indica que la luz se concentra hacia el lado del vidrio en el límite.',
    interpLiquidHigher: 'El líquido de inmersión tiene el índice de refracción más alto. El halo se desplaza hacia el lado del líquido hasta que la temperatura acerca el índice del líquido al del vidrio.',
    disclaimer: 'Simulación únicamente educativa. La comparación forense real de vidrios requiere equipos calibrados de índice de refracción, estándares conocidos, informes de incertidumbre e interpretación calificada.',
  },
  seo: [
    {
      type: 'title',
      text: 'Prueba de índice de refracción mediante la línea de Becke para vidrio forense',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulador didáctico',
      title: 'Qué demuestra este simulador de IR de vidrio',
      html: 'Este simulador muestra por qué un fragmento de vidrio se vuelve más o menos visible en aceite de inmersión a medida que el índice de refracción del líquido se acerca al del vidrio. Está diseñado para estudiantes de ciencia forense que aprenden <strong>microscopía de la línea de Becke</strong>, coincidencia de IR en platina calefactora y los límites de la evidencia en comparación de vidrios.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n vidrio - n líquido', label: 'contraste de índice mostrado', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'rango de platina calefactora', icon: 'mdi:thermometer' },
        { value: '4', label: 'perfiles de vidrio', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'unidades de temperatura convertibles', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificación práctica para la observación de la línea de Becke',
      items: [
        'Usa un fragmento de vidrio limpio y pequeño completamente sumergido en un líquido con índice de refracción adecuado.',
        'Enfoca ligeramente por encima y por debajo del límite y observa hacia qué lado parece moverse la línea brillante.',
        'Sube la temperatura lentamente cerca del punto de coincidencia estimado porque la línea puede desvanecerse en un rango estrecho.',
        'Registra la temperatura, el tipo de líquido, el estándar de calibración, el comportamiento de coincidencia observado y la incertidumbre.',
        'Trata el IR como evidencia de clase: una discrepancia puede excluir, mientras que una coincidencia requiere contexto adicional.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lo que la comparación de IR puede respaldar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'El índice de refracción puede ayudar a comparar fragmentos de vidrio dubitados con vidrios de referencia conocidos bajo condiciones controladas.',
          points: ['Comparación de características de clase', 'Exclusión cuando el IR difiere claramente', 'Cribado previo al análisis elemental', 'Enseñanza del comportamiento óptico en límites'],
        },
        {
          title: 'Lo que el IR no puede probar por sí solo',
          icon: 'mdi:alert-circle-outline',
          description: 'Un IR coincidente no identifica de forma única una ventana, botella, ventanilla de vehículo o fuente de la escena del crimen.',
          points: ['Sin atribución de fuente individual por sí sola', 'Sin reconstrucción sin el contexto de la escena', 'No sustituye a los controles', 'Sin conclusión legal a partir de un modelo de navegador'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pregunta del usuario', 'Concepto de microscopía', 'Respuesta detallada'],
      rows: [
        ['¿Por qué se mueve el borde brillante?', 'Refracción en el límite entre dos índices de refracción.', 'La línea de Becke tiende a moverse hacia el material con mayor índice de refracción cuando se sube el enfoque.'],
        ['¿Por qué desaparece el borde?', 'Coincidencia de índices.', 'Cuando los IR del vidrio y del líquido son casi iguales, el contraste del límite disminuye y el halo se debilita.'],
        ['¿Por qué calentar el líquido?', 'Coeficiente térmico del IR.', 'El IR del líquido simulado disminuye con la temperatura, lo que permite la coincidencia con diferentes tipos de vidrio.'],
        ['¿Es concluyente una coincidencia?', 'Limitación de la evidencia de clase.', 'Una coincidencia solo respalda la consistencia; muchos objetos de vidrio pueden compartir un IR similar.'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona el modelo de simulación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El modelo asigna a cada perfil de vidrio un índice de refracción de referencia y trata al líquido de inmersión como un medio sensible a la temperatura. A medida que la platina calefactora se calienta, el índice del líquido disminuye según un coeficiente térmico fijo. El simulador calcula entonces la diferencia entre el IR del vidrio y el del líquido, utilizando esa diferencia para controlar el brillo del halo, el desplazamiento del halo, el porcentaje de coincidencia y el mensaje de interpretación.',
    },
    {
      type: 'paragraph',
      html: 'El campo visual del microscopio es intencionadamente cualitativo. No intenta trazar los rayos de cada trayectoria óptica. En su lugar, conserva la relación educativa esencial: un fuerte contraste de IR produce un límite brillante; un contraste menor produce un límite tenue; y cerca del punto de coincidencia, el borde del vidrio puede parecer que se desvanece en el líquido.',
    },
    {
      type: 'paragraph',
      html: 'En los laboratorios forenses profesionales, la calibración de la platina calefactora se realiza utilizando muestras de vidrio de referencia con un índice de refracción conocido. Dado que el índice de refracción del líquido de inmersión varía de manera predecible con la temperatura (normalmente indicado como dn/dT), la temperatura exacta en la que desaparece la línea de Becke permite al científico calcular el índice de refracción del vidrio con una precisión de hasta cuatro decimales. Este simulador modela este comportamiento dependiente de la temperatura mediante una fórmula lineal, lo que permite a los estudiantes practicar la búsqueda del punto de coincidencia exacto controlando cuidadosamente la platina de calentamiento.',
    },
    {
      type: 'paragraph',
      html: 'Al analizar la evidencia de vidrios, el índice de refracción se considera una evidencia con características de clase. Si bien la coincidencia del índice de refracción entre un fragmento de la escena del crimen y la ropa de un sospechoso es consistente con una fuente común, no identifica la fuente de manera única porque muchos objetos de vidrio comparten valores de índice de refracción idénticos. Por lo tanto, los expertos forenses deben interpretar los resultados coincidentes de manera conservadora, informando la coincidencia en términos de consistencia y destacando al mismo tiempo que no es posible una atribución definitiva de la fuente basándose únicamente en las propiedades ópticas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Índice de refracción', definition: 'Medida de la fuerza con la que un material desvía la luz en comparación con el vacío.' },
        { term: 'Líquido de inmersión', definition: 'Líquido de propiedades ópticas conocidas utilizado para rodear un fragmento durante la comparación microscópica de IR.' },
        { term: 'Línea de Becke', definition: 'Línea o halo brillante que se observa en un límite cuando dos materiales transparentes tienen diferentes índices de refracción.' },
        { term: 'Punto de coincidencia', definition: 'Región de temperatura donde el líquido de inmersión y el vidrio tienen casi el mismo índice de refracción.' },
        { term: 'Evidencia de clase', definition: 'Evidencia que puede asociar un elemento con un grupo de fuentes posibles en lugar de una única fuente exclusiva.' },
      ],
    },
    {
      type: 'tip',
      title: 'Consejo de interpretación para estudiantes',
      html: 'En la evidencia de vidrios, una discrepancia clara de IR suele ser más potente que una coincidencia porque puede excluir una fuente propuesta. Una coincidencia es útil, pero su fuerza depende de los datos de población, la precisión de la medición, la composición elemental y el contexto del caso.',
    },
    {
      type: 'proscons',
      title: 'Fortalezas y límites de la prueba de IR de vidrio mediante la línea de Becke',
      items: [
        { pro: 'Rápido, visual y excelente para enseñar la comparación de materiales transparentes.', con: 'El criterio del observador y la técnica de enfoque pueden afectar al movimiento aparente de la línea.' },
        { pro: 'La coincidencia de temperatura puede estimar el IR con una precisión útil si está calibrado.', con: 'El control térmico, el envejecimiento del líquido, la contaminación y los estándares son importantes en el trabajo real.' },
        { pro: 'Útil para excluir fragmentos de vidrio con propiedades ópticas claramente diferentes.', con: 'No puede individualizar una fuente sin una evidencia analítica y contextual más amplia.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaución forense',
      title: 'Mantén la conclusión proporcional',
      html: 'Una simulación de la línea de Becke en el navegador es una ayuda para el aprendizaje, no un método de laboratorio. La interpretación formal de la evidencia de vidrios debe basarse en instrumentos validados, procedimientos escritos, registros de calibración, estimaciones de incertidumbre, revisión por pares y el lenguaje de informe adecuado para cada jurisdicción.',
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
