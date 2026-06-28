import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'microscopio-comparacion-fibras-forense';
const title = 'Simulador de microscopio de comparación de fibras forenses';
const description = 'Elabora un perfil de fibra textil dubitada, compáralo con referencias indubitadas e interpreta la morfología, polarización y espectro UV-Vis de tintes.';

const howTo = [
  {
    name: 'Crear el perfil de la fibra dubitada',
    text: 'Define el material, el diámetro, la dirección de torsión, la respuesta de polarización y el perfil del tinte de la fibra recuperada.',
  },
  {
    name: 'Elegir una fibra indubitada de comparación',
    text: 'Selecciona en el lado derecho la fibra de una prenda sospechosa, como algodón, lana, poliéster o nailon.',
  },
  {
    name: 'Ajustar el enfoque y la polarización',
    text: 'Mueve el control deslizante de enfoque y gira el polarizador para observar la nitidez, las crestas superficiales y la birrefringencia.',
  },
  {
    name: 'Comparar la morfología y los espectros UV-Vis',
    text: 'Utiliza la puntuación morfológica, la de espectro, la coincidencia combinada y las curvas de absorción para determinar si las muestras son consistentes o claramente distintas.',
  },
];

const faq = [
  {
    question: '¿Puede la microscopía de fibras identificar la prenda exacta de la que proviene una fibra?',
    answer: 'Por lo general, no. La comparación de fibras puede demostrar la consistencia o las diferencias entre una fibra dubitada y un tejido de origen conocido, pero la atribución a una fuente individual requiere de un contexto minucioso, métodos validados y, a menudo, análisis químicos o instrumentales adicionales.',
  },
  {
    question: '¿Por qué se utiliza luz polarizada en la comparación de fibras?',
    answer: 'La luz polarizada revela la birrefringencia, el comportamiento de extinción y las diferencias estructurales entre fibras naturales y sintéticas. Las sintéticas suelen mostrar una respuesta de polarización más intensa debido a su orientación molecular.',
  },
  {
    question: '¿Qué aporta el espectro UV-Vis?',
    answer: 'Mientras que la microscopía describe la forma y el comportamiento óptico, la absorbancia UV-Vis compara el comportamiento de los tintes a través de distintas longitudes de onda. Fibras similares con tintes distintos pueden diferenciarse claramente en el gráfico espectral.',
  },
  {
    question: '¿Por qué los resultados se muestran como puntuaciones en lugar de una identificación definitiva?',
    answer: 'La evidencia de trazas forenses debe informarse de manera proporcional. Las puntuaciones son resúmenes educativos de la similitud morfológica y de los tintes, no una conclusión de laboratorio ni un dictamen legal.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Microscopio forense virtual de campo dividido que compara dos fibras textiles',
    chartAria: 'Gráfico de absorbancia UV-Vis que compara los espectros de tinte de la fibra dubitada y de la indubitada',
    questionedSample: 'Muestra dubitada',
    fixedEvidence: 'Evidencia recuperada fija',
    builderSummaryDefault: 'Algodón / 18 µm / irregular / índigo',
    customQuestionedLabel: 'Fibra dubitada del caso',
    material: 'Material',
    cotton: 'Algodón',
    woolMaterial: 'Lana',
    polyesterMaterial: 'Poliéster',
    nylonMaterial: 'Nailon',
    materialcotton: 'algodón',
    materialwool: 'lana',
    materialpolyester: 'poliéster',
    materialnylon: 'nailon',
    twist: 'Torsión',
    irregularTwist: 'Irregular',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diámetro',
    polarResponse: 'Respuesta polar',
    dyeProfile: 'Perfil de tinte',
    indigoDye: 'Índigo',
    crimsonDye: 'Carmesí',
    navyDye: 'Azul marino',
    violetDye: 'Violeta',
    dyeindigo: 'índigo',
    dyecrimson: 'carmesí',
    dyenavy: 'azul marino',
    dyeviolet: 'violeta',
    knownSample: 'Muestra indubitada',
    questionedCotton: 'Fibra de algodón azul dubitada',
    suspectCotton: 'Fibra de algodón de camisa sospechosa',
    wool: 'Fibra de suéter de lana roja',
    polyester: 'Fibra de chaqueta de poliéster azul marino',
    nylon: 'Fibra de forro de nailon violeta',
    focus: 'Enfoque fino',
    polarizer: 'Ángulo del polarizador',
    morphology: 'Morfología',
    spectrum: 'UV-Vis',
    birefringence: 'Birrefringencia',
    combinedMatch: 'Coincidencia combinada',
    uvVisTitle: 'Superposición de absorbancia UV-Vis',
    statusStrong: 'Alta consistencia',
    statusPartial: 'Comparación mixta',
    statusDifferent: 'Exclusión respaldada',
    verdictStrong: 'La fibra dubitada y la indubitada presentan una alta consistencia en diámetro, torsión, comportamiento óptico y espectro de tinte. En un caso real, esto se informaría como sustento de un posible origen textil común, no como una identificación individual.',
    verdictPartial: 'La comparación es mixta. Algunas características de clase coinciden, pero la morfología, la respuesta del tinte o la birrefringencia muestran diferencias suficientes como para requerir un examen más exhaustivo antes de plantear cualquier asociación prudente.',
    verdictDifferent: 'Las fibras no son consistentes en características de clase clave. El resultado simulado respalda la exclusión de este tejido conocido como la fuente probable de la fibra dubitada.',
    disclaimer: 'Simulación con fines educativos. La comparación real de fibras forenses requiere microscopía validada, controles, documentación, medidas contra la contaminación, revisión por pares e interpretación experta de trazas.',
  },
  seo: [
    {
      type: 'title',
      text: 'Comparación de fibras forenses con microscopía de campo dividido y espectros UV-Vis',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulador didáctico',
      title: 'Qué demuestra este microscopio de fibras virtual',
      html: 'Este simulador modela el flujo de trabajo práctico de la <strong>comparación de fibras forenses</strong>: describe la fibra textil dubitada, compárala con una referencia indubitada, ajusta el enfoque, gira los filtros de polarización y analiza la respuesta del tinte con una curva de absorbancia UV-Vis simplificada. Está diseñado para estudiantes de trazas forenses, no para la toma de decisiones en casos reales.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 campos', label: 'vista de microscopio dividido', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'rango del espectro visible', icon: 'mdi:chart-bell-curve' },
        { value: '4 clases', label: 'algodón, lana, poliéster, nailon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'rotación del polarizador', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Observaciones fundamentales en la comparación de fibras textiles',
      items: [
        'Mide o estima el diámetro de la fibra registrando las variaciones naturales a lo largo de la hebra.',
        'Registra la dirección de la torsión, las crestas superficiales, las características de tipo médula, las partículas de deslustrado y las pistas de sección transversal si están disponibles.',
        'Utiliza luz polarizada para comparar la birrefringencia, el comportamiento de extinción y los cambios de brillo al girar la muestra.',
        'Compara el color de forma microscópica y recurre a la información instrumental del tinte si el caso requiere una mayor discriminación.',
        'Informa si los hallazgos son consistentes, diferentes o no concluyentes; evita expresiones que sugieran una fuente textil única sin justificación.',
      ],
    },
    {
      type: 'table',
      headers: ['Observación', 'A qué ayuda a responder', 'Límite'],
      rows: [
        ['Diámetro y morfología', '¿Son las fibras físicamente similares?', 'La variación de fabricación puede solaparse entre distintas prendas.'],
        ['Torsión y detalle superficial', '¿Coinciden las características naturales o sintéticas?', 'El daño, el estiramiento y el montaje pueden alterar la apariencia.'],
        ['Respuesta de luz polarizada', '¿Coinciden las propiedades ópticas?', 'La birrefringencia es una evidencia de clase, no una firma única.'],
        ['Espectro del tinte UV-Vis', '¿Son consistentes los colorantes?', 'Tintes similares pueden verse parecidos; la extracción y los ajustes del instrumento influyen.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Qué respalda la consistencia',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Múltiples características de clase independientes coinciden entre la fibra dubitada y la indubitada.',
          points: ['Rango de diámetro comparable', 'Mismo tipo general de fibra', 'Comportamiento de polarización similar', 'Picos de absorbancia de tinte superpuestos'],
        },
        {
          title: 'Qué respalda la exclusión',
          icon: 'mdi:close-circle-outline',
          description: 'Aparece una diferencia clara y repetible en una característica que debería coincidir si provinieran de un origen textil común.',
          points: ['Discrepancia entre natural y sintético', 'Torsión o morfología superficial diferente', 'Espectro de tinte marcadamente distinto', 'Respuesta de birrefringencia incompatible'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona el modelo de simulación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El modelo almacena una pequeña base de datos de referencia con el diámetro, la dirección de torsión, la clase de fibra, la birrefringencia, la familia de tintes y los puntos de absorbancia UV-Vis. La fibra dubitada es configurable por el usuario, por lo que la puntuación de comparación responde al perfil del caso y no a una muestra fija de aula. La vista del microscopio visual reacciona al enfoque y al ángulo del polarizador para mostrar a los estudiantes por qué los ajustes ópticos son cruciales.',
    },
    {
      type: 'paragraph',
      html: 'El control del polarizador es especialmente útil para las fibras sintéticas. Al poliéster y al nailon se les asignan valores de birrefringencia más altos, por lo que su brillo cambia de forma más visible al girar el polarizador. El algodón natural y la lana también responden, pero el efecto simulado es más sutil. Esto refleja la noción didáctica de que la orientación molecular y la estructura de la fibra influyen en el comportamiento óptico.',
    },
    {
      type: 'paragraph',
      html: 'El gráfico UV-Vis es una superposición simplificada, no un sustituto de un espectrofotómetro. En el trabajo real con trazas, la comparación de tintes puede requerir microespectrofotometría, cromatografía en capa fina, química de extracción, controles de referencia e incertidumbre documentada. El gráfico está pensado para enseñar por qué dos fibras que parecen similares al microscopio pueden diferenciarse por la química de sus tintes.',
    },
    {
      type: 'paragraph',
      html: 'Los examinadores forenses deben documentar cada paso del proceso de análisis de fibras. Esto incluye tomar fotografías detalladas, registrar mediciones y mantener una cadena de custodia para toda la evidencia física. El simulador ayuda a los estudiantes a comprender la importancia de la documentación sistemática y la comparación objetiva en el trabajo forense. Al interactuar con diferentes configuraciones, los usuarios pueden aprender cómo el camino de la luz, el grosor de la muestra y la concentración del tinte afectan las curvas espectrales y la apariencia física.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fibra dubitada', definition: 'Fibra recuperada de una escena, víctima, sospechoso, herramienta, vehículo u otro elemento cuyo origen es desconocido.' },
        { term: 'Fibra indubitada', definition: 'Fibra de referencia recolectada de un tejido u objeto conocido para compararla con la muestra dubitada.' },
        { term: 'Birrefringencia', definition: 'Comportamiento óptico por el cual un material tiene diferentes índices de refracción según la dirección de la luz o la polarización.' },
        { term: 'Espectro UV-Vis', definition: 'Gráfico que muestra la intensidad con la que un tinte o material absorbe la luz a diferentes longitudes de onda.' },
        { term: 'Característica de clase', definition: 'Propiedad que puede asociar la evidencia con un grupo de fuentes posibles en lugar de con una única fuente exclusiva.' },
      ],
    },
    {
      type: 'tip',
      title: 'Consejo de interpretación para estudiantes',
      html: 'Una puntuación de similitud alta debe interpretarse como <strong>consistencia</strong>, no como identidad. Las trazas forenses son más sólidas cuando la microscopía, la química, el contexto de transferencia, la persistencia, el método de recuperación y los controles de contaminación apuntan en la misma dirección.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Mantener la conclusión dentro de los límites de la evidencia',
      html: 'Un microscopio en el navegador no puede validar una coincidencia de fibras. Los informes formales deben describir las observaciones, la base de comparación, las limitaciones y el nivel de sustento sin exagerar la atribución de origen.',
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
