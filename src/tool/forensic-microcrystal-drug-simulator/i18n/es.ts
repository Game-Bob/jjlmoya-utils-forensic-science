import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-analisis-drogas-microcristalinas';
const title = 'Simulador Forense de Pruebas de Drogas Microcristalinas';
const description = 'Simule patrones educativos de cribado de drogas microcristalinas combinando sustancias controladas sospechosas con reactivos forenses clásicos y comparando el hábito cristalino, la velocidad de crecimiento y la respuesta a la luz polarizada.';

const howTo = [
  {
    name: 'Seleccionar una muestra sospechosa',
    text: 'Seleccione cocaína, heroína, anfetamina o metanfetamina para cargar un perfil didáctico del material desconocido.',
  },
  {
    name: 'Aplicar un reactivo microcristalino',
    text: 'Cambie entre cloruro de platino, cloruro de oro y reactivo de Dragendorff para observar cómo la química del reactivo altera la morfología del cristal.',
  },
  {
    name: 'Ajustar la polarización simulada',
    text: 'Mueva el control de polarización para aumentar o reducir el contraste birrefringente en el campo del microscopio virtual.',
  },
  {
    name: 'Comparar el resultado con la referencia',
    text: 'Utilice la etiqueta de hábito, la puntuación de confianza, la velocidad de crecimiento y la nota de interpretación para decidir si el patrón es similar a la referencia, parcial o no específico.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Son las pruebas microcristalinas confirmatorias para drogas ilegales?',
    answer: 'No. Las pruebas microcristalinas son herramientas de cribado presuntivo o comparativo. La identificación real de drogas incautadas debe seguir esquemas validados que incluyan controles adecuados y métodos instrumentales confirmatorios como GC-MS, LC-MS o espectroscopia infrarroja.',
  },
  {
    key: 'faq-2',
    question: '¿Por qué diferentes reactivos producen diferentes formas cristalinas?',
    answer: 'El reactivo forma sales, complejos o precipitados con grupos funcionales del compuesto objetivo. La solubilidad, la fuerza ácida, la concentración, las impurezas y la velocidad de secado influyen en si el hábito observado aparece como agujas, rosetas, prismas, placas o dispersión débil.',
  },
  {
    key: 'faq-3',
    question: '¿Qué aporta la luz polarizada al examen microcristalino?',
    answer: 'La luz polarizada puede aumentar el contraste y revelar la birrefringencia, facilitando la comparación de los bordes, la ramificación y la estructura interna del cristal. No elimina la necesidad de patrones de referencia y controles.',
  },
  {
    key: 'faq-4',
    question: '¿Por qué un patrón que parece positivo puede seguir siendo engañoso?',
    answer: 'Los agentes de corte, las mezclas, el material degradado, la antigüedad del reactivo, la contaminación y las expectativas del analista pueden producir morfologías ambiguas o superpuestas. Es por eso que los resultados presuntivos deben interpretarse con cautela.',
  },
  {
    key: 'faq-5',
    question: '¿Puede este simulador identificar una sustancia desconocida?',
    answer: 'No. Es una visualización educativa de conceptos comunes de morfología. No puede analizar pruebas reales, medir la química ni emitir una conclusión de laboratorio.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Microscopio polarizado',
    canvasAria: 'Campo de crecimiento microcristalino animado',
    sample: 'Muestra sospechosa',
    sampleCocaine: 'Cocaína',
    sampleHeroin: 'Heroína',
    sampleAmphetamine: 'Anfetamina',
    sampleMethamphetamine: 'Metanfetamina',
    reagent: 'Estante de reactivos',
    reagentPlatinum: 'Cloruro de platino',
    reagentGold: 'Cloruro de oro',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Contraste polarizado',
    confidence: 'Coincidencia',
    growth: 'Crecimiento',
    birefringence: 'Birrefr.',
    regrow: 'Regenerar cristales',
    warningLabel: 'Precaución forense',
    warningTitle: 'Advertencia de cribado',
    matchReference: 'Tipo referencia',
    matchPartial: 'Coincidencia parcial',
    matchNonSpecific: 'No específica',
    habitFeatheryNeedles: 'Haces de agujas plumosas',
    habitRosettes: 'Rosetas en estrella',
    habitBranchingPrisms: 'Prismas ramificados',
    habitPlates: 'Placas delgadas',
    habitWeakScatter: 'Dispersión escasa no específica',
    cueCocainePlatinumChloride: 'Los haces de agujas plumosas y ramificadas son el patrón educativo esperado para la cocaína con cloruro de platino.',
    cueCocaineGoldChloride: 'El cloruro de oro puede formar cristales ramificados de color naranja-marrón, pero el patrón es menos específico que con el cloruro de platino.',
    cueCocaineDragendorff: 'El reactivo de Dragendorff da una respuesta alcaloide débil aquí; la morfología debe tratarse únicamente como información de cribado.',
    cueHeroinPlatinumChloride: 'Pueden aparecer depósitos en forma de placas, pero esta combinación no es una coincidencia didáctica confirmatoria fuerte.',
    cueHeroinGoldChloride: 'Los grupos de rosetas y las estrellas redondeadas son el patrón de heroína tipo referencia en este simulador.',
    cueHeroinDragendorff: 'El reactivo de Dragendorff produce prismas ramificados de color naranja consistentes con un cribado de alcaloides, no una prueba de identidad.',
    cueAmphetaminePlatinumChloride: 'Los prismas de ramificación rápida sugieren un patrón didáctico de tipo estimulante bajo el reactivo elegido.',
    cueAmphetamineGoldChloride: 'La cristalización escasa significa que el hallazgo visual debe reportarse como no específico.',
    cueAmphetamineDragendorff: 'Las pulverizaciones de agujas crecen rápidamente y son útiles para enseñar comparaciones presuntivas de anfetamina.',
    cueMethamphetaminePlatinumChloride: 'Se pueden formar rosetas polarizadas, pero el resultado sigue siendo una comparación de morfología presuntiva.',
    cueMethamphetamineGoldChloride: 'Se observan formas de placas delgadas, aunque la superposición con otros compuestos limita la especificidad.',
    cueMethamphetamineDragendorff: 'Los prismas ramificados de color naranja denso proporcionan la coincidencia didáctica más fuerte para la metanfetamina en este conjunto.',
    disclaimer: 'Modelo de cribado únicamente educativo. La identificación real de drogas requiere patrones de referencia validados, controles de reactivos, cadena de custodia y análisis instrumental confirmatorio.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pruebas de Drogas Microcristalinas en Ciencias Forenses',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulador didáctico',
      title: 'Propósito de este simulador microcristalino',
      html: 'Esta herramienta explica cómo las pruebas microcristalinas forenses clásicas pueden producir hábitos de cristal reconocibles después de mezclar una droga sospechosa con un reactivo. Ayuda a los estudiantes a comparar la <strong>morfología de los cristales</strong>, la velocidad de crecimiento y el contraste bajo luz polarizada sin tratar el resultado del navegador como evidencia.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'perfiles de muestras didácticas', icon: 'mdi:flask-outline' },
        { value: '3', label: 'reactivos tradicionales', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'hábitos cristalinos modelados', icon: 'mdi:shape-outline' },
        { value: '0', label: 'declaraciones de identificación legal', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo Interpretar el Hábito Cristalino',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista de verificación práctica para comparación',
      items: [
        'Comience con un patrón de referencia conocido y un control de reactivo en blanco antes de comparar una muestra desconocida.',
        'Registre el reactivo, la concentración, el tamaño de la gota, el tiempo de secado, la temperatura y la ampliación del microscopio.',
        'Compare primero el hábito general: agujas, rosetas, placas, prismas, ramificaciones o dispersión débil.',
        'Trate el crecimiento parcial o escaso como un motivo para realizar más pruebas, no como una identificación segura.',
      ],
    },
    {
      type: 'table',
      headers: ['Hábito observado', 'Preguntas frecuentes de usuarios', 'Interpretación cautelosa'],
      rows: [
        ['Agujas plumosas', '¿Se parece esto a la cocaína con cloruro de platino?', 'Puede ser una coincidencia didáctica útil, pero las mezclas y las condiciones del reactivo pueden alterar el hábito.'],
        ['Rosetas', '¿Son diagnósticas las rosetas en estrella?', 'Las rosetas pueden respaldar una comparación cuando los controles coinciden, pero no son suficientes por sí solas.'],
        ['Prismas ramificados', '¿Por qué los cribados de estimulantes suelen crecer rápido?', 'Algunas sales nuclean rápidamente y se ramifican a medida que el disolvente se evapora; la velocidad es un indicio de apoyo, no confirmatorio.'],
        ['Dispersión débil', '¿Un patrón débil significa que no hay droga presente?', 'No. Una baja concentración, impurezas, reactivo envejecido o una preparación deficiente pueden suprimir el crecimiento del cristal.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'El cribado microcristalino ayuda con',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Comparación visual rápida cuando un analista capacitado utiliza controles y materiales de referencia.',
          points: ['Demostraciones en el aula', 'Vocabulario de morfología', 'Clasificación presuntiva', 'Comparación del efecto del reactivo'],
        },
        {
          title: 'El cribado microcristalino no puede reemplazar',
          icon: 'mdi:alert-circle-outline',
          description: 'Química confirmatoria validada para una conclusión real de droga incautada.',
          points: ['Confirmación instrumental', 'Procedimientos acreditados', 'Validación específica de la matriz', 'Documentación de incertidumbre'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Fundamentos Científicos de las Pruebas Microcristalinas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las pruebas microcristalinas representan una clase histórica y altamente sensible de pruebas de detección química utilizadas por químicos forenses para identificar sustancias controladas sospechosas. Cuando una pequeña cantidad de una muestra de droga se disuelve en un ácido y se combina con un reactivo específico de metales pesados, como cloruro de oro o cloruro de platino, se precipita un complejo de coordinación o una sal insoluble. La estructura molecular de la droga dicta la velocidad de crecimiento, la orientación y la simetría de los cristales resultantes, produciendo formas o hábitos microscópicos característicos.',
    },
    {
      type: 'paragraph',
      html: 'El análisis de estos hábitos bajo un microscopio de luz polarizada permite a los examinadores forenses observar propiedades ópticas como la birrefringencia, donde el cristal divide la luz en dos rayos, creando colores vivos y un alto contraste. Aunque los métodos instrumentales como la cromatografía de gases con espectrometría de masas han reemplazado en gran medida a las pruebas microcristalinas para la identificación confirmatoria, el cribado microcristalino sigue siendo una técnica valorada debido a su rapidez, bajo coste y capacidad para separar isómeros ópticos que pueden ser difíciles de diferenciar por otros medios.',
    },
    {
      type: 'paragraph',
      html: 'En entornos educativos, la simulación de estas reacciones ayuda a los estudiantes a comprender la relación entre los reactivos químicos y la morfología física del cristal. Al observar cómo responden la cocaína, la heroína y diversas anfetaminas a diferentes reactivos, los estudiantes aprenden que una sola prueba positiva no constituye una conclusión forense final. Los protocolos de detección de drogas adecuados requieren comparar muestras desconocidas con materiales de referencia conocidos y realizar blancos de reactivos para garantizar la validez y especificidad de los patrones cristalinos observados.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Hábito cristalino', definition: 'La forma visible o tipo de crecimiento de un cristal, como agujas, placas, prismas o rosetas.' },
        { term: 'Nucleación', definition: 'La formación inicial de pequeños centros cristalinos a partir de los cuales crecen estructuras más grandes.' },
        { term: 'Birrefringencia', definition: 'Comportamiento óptico que puede hacer que los cristales parezcan más brillantes o coloreados bajo luz polarizada.' },
        { term: 'Prueba presuntiva', definition: 'Una prueba de cribado que sugiere una posible clase o compuesto pero que no prueba la identidad por sí misma.' },
        { term: 'Patrón de referencia', definition: 'Un material conocido analizado bajo las mismas condiciones para comparar el patrón desconocido.' },
      ],
    },
    {
      type: 'tip',
      title: 'Mejores prácticas para pruebas reales',
      html: 'Utilice la morfología microcristalina como una línea de investigación. Un flujo de trabajo fiable incluye blancos de reactivos, controles positivos, documentación de la antigüedad del reactivo, revisión independiente cuando sea necesario y pruebas confirmatorias bajo un esquema aceptado de drogas incautadas.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Precaución forense',
      title: 'Un cristal hermoso no es una identificación legal',
      html: 'El simulador separa deliberadamente la puntuación de coincidencia visual de una conclusión forense. El trabajo de caso real debe tener en cuenta las mezclas, los agentes de corte, la contaminación, el rendimiento del reactivo, la capacitación del analista y los procedimientos validados de laboratorio.',
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
