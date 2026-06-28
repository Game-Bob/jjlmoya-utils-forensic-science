import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'comparador-estrias-marcas-herramienta-forense';
const title = 'Comparador de estrías y marcas de herramientas forense';
const description = 'Sube imágenes de marcas indubitadas y dubitadas, alinéalas en un microscopio de comparación dividido y examina la continuidad de las estrías con controles visuales.';

const howTo = [
  {
    name: 'Carga las imágenes de comparación',
    text: 'Sube una imagen de una marca de prueba indubitada (conocida) y otra de una marca dubitada (cuestionada) obtenidas de tu material de caso, notas o conjunto de entrenamiento.',
  },
  {
    name: 'Mueve la división de comparación',
    text: 'Arrastra el control en el visor óptico para exponer más de la marca indubitada o dubitada manteniendo ambas muestras en el mismo campo de visión.',
  },
  {
    name: 'Ajusta el desplazamiento, rotación, zoom y contraste',
    text: 'Usa los controles micrométricos para trasladar y rotar la imagen dubitada, y luego ajusta el zoom, contraste y brillo para que las estrías más tenues sigan siendo visibles.',
  },
  {
    name: 'Exporta la vista de comparación',
    text: 'Cuando la alineación visual esté lista, exporta una vista en PNG para discusiones, revisión en el aula o ilustración de notas de caso.',
  },
];

const faq = [
  {
    question: '¿Qué es una comparación de marcas de herramientas forense?',
    answer: 'La comparación forense de marcas de herramientas examina las huellas producidas cuando una herramienta entra en contacto, corta, raspa, hace palanca o comprime otra superficie. Los peritos comparan características de clase, la calidad de la marca y el detalle microscópico de las estrías entre marcas dubitadas e indubitadas de prueba.',
  },
  {
    question: '¿Puede esta herramienta en línea identificar la herramienta exacta que hizo una marca?',
    answer: 'No. Este espacio de trabajo es para alineación visual y educación. No calcula atribución de fuente, probabilidad, tasa de error ni una conclusión forense automatizada.',
  },
  {
    question: '¿Por qué son importantes el desplazamiento, la rotación y el zoom en la comparación?',
    answer: 'Pequeñas diferencias en el ángulo de la herramienta, presión, escala, posición de la cámara y colocación lateral pueden hacer que líneas de estrías similares parezcan desalineadas. Los controles de desplazamiento, rotación y zoom ayudan a colocar dos imágenes en una posición de visualización comparable.',
  },
  {
    question: '¿Qué imágenes funcionan mejor para la alineación visual de marcas?',
    answer: 'Usa imágenes nítidas, bien iluminadas y tomadas lo más perpendicularmente posible, con suficiente superposición en la región de la marca. Evita el desenfoque excesivo, reflejos extremos, distorsión de perspectiva e imágenes donde el área de estrías sea demasiado corta o esté dañada.',
  },
  {
    question: '¿Qué debe documentar un usuario tras alinear dos imágenes de marcas?',
    answer: 'Documenta el origen de cada imagen, si es dubitada o indubitada, los ajustes de alineación utilizados, las correcciones de imagen aplicadas, las áreas visibles de acuerdo o desacuerdo y las limitaciones de calidad de las imágenes.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vista de microscopio de comparación dividido de estrías de marcas de herramientas indubitadas y dubitadas',
    splitLabel: 'Mover división de comparación',
    units: 'Sistema de unidades de desplazamiento',
    metric: 'Métrico',
    imperial: 'Imperial',
    toolProfile: 'Perfil de herramienta',
    loadImages: '1. Cargar',
    alignImage: '2. Alinear imagen dubitada',
    adjustImage: '3. Ajustar visibilidad',
    outputControls: 'Controles de salida',
    demoOptions: 'Opciones de demostración',
    uploadKnown: 'Imagen indubitada/prueba',
    uploadQuestioned: 'Imagen dubitada',
    noFile: 'Ninguna imagen cargada',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Punta de destornillador',
    prybar: 'Borde de palanca',
    boltCutter: 'Mandíbula de cortapernos',
    offset: 'Desplazamiento horizontal',
    rotation: 'Rotación angular',
    zoom: 'Zoom de imagen',
    contrast: 'Contraste',
    brightness: 'Brillo',
    microns: 'micrómetros',
    thousandths: 'milésimas',
    degrees: 'grados',
    correlation: 'Modo / puntuación',
    verdictStrong: 'alineación fuerte',
    verdictPartial: 'alineación parcial',
    verdictWeak: 'alineación débil',
    center: 'Centrar',
    fineTip: 'líneas finas de arrastre',
    wideEdge: 'compresión ancha',
    crushJaw: 'crestas de aplastamiento emparejadas',
    grid: 'Cuadrícula',
    exportImage: 'Exportar vista',
    exportFilename: 'vista-comparacion-marcas-herramientas.png',
    phaseFit: 'Ajuste de fase',
    rotationFit: 'Ajuste de rotación',
    knownMark: 'Marca indubitada',
    questionedMark: 'Marca dubitada',
    reliefGraph: 'Relieve dinámico de micro-superficie',
    visualMode: 'Visual',
    visualVerdict: 'comparación manual',
    visualInterpretation: 'Solo alineación visual. No se calcula una conclusión forense automatizada.',
    interpMatch: 'Vista previa de demostración. Sube imágenes para comparar marcas reales.',
    interpPossible: 'Vista previa de demostración. Ajusta la alineación o sube imágenes.',
    interpMismatch: 'Vista previa de demostración. Vuelve a centrar o sube imágenes.',
    disclaimer: 'Solo espacio de trabajo visual.',
  },
  seo: [
    {
      type: 'title',
      text: 'Microscopio de comparación de marcas de herramientas forense en línea',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Espacio de trabajo visual',
      title: 'Compara imágenes de marcas de herramientas dubitadas e indubitadas en tu navegador',
      html: 'Este espacio de trabajo para la comparación de marcas de herramientas te permite cargar dos imágenes, colocarlas en un microscopio de comparación con pantalla dividida y ajustar la marca dubitada hasta que se puedan examinar lado a lado las líneas de estrías, marcas de presión o raspaduras. Está diseñado para estudiantes de ciencias forenses, instructores, investigadores y equipos legales que necesitan una forma clara de explicar la <strong>comparación de marcas de herramientas indubitadas frente a dubitadas</strong> sin instalar software especializado de microscopía.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 archivos', label: 'imágenes indubitadas y dubitadas', icon: 'mdi:image-plus' },
        { value: 'vista dividida', label: 'diseño de microscopio de comparación', icon: 'mdi:compare-horizontal' },
        { value: 'alineación', label: 'controles de desplazamiento, rotación y zoom', icon: 'mdi:axis-arrow' },
        { value: 'exportar PNG', label: 'guarda la vista de comparación', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Cuándo es útil este espacio de trabajo de comparación',
      items: [
        'Enseñar cómo los microscopios de comparación colocan una marca de prueba indubitada al lado de una marca dubitada.',
        'Preparar demostraciones en el aula con imágenes de marcas de herramientas reales o de entrenamiento.',
        'Explicar cómo la alineación, escala, rotación, iluminación y contraste afectan la interpretación de las estrías.',
        'Crear una ilustración visual clara para notas de caso o informes sin declarar una identificación automatizada.',
        'Evaluar la calidad de la imagen antes de decidir si una marca es apta para una comparación formal en el laboratorio.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo comparar imágenes de marcas de herramientas en línea',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Comienza cargando una imagen de una <strong>marca indubitada</strong> y una imagen de una <strong>marca dubitada</strong>. Una marca indubitada suele producirse en condiciones controladas con una herramienta sospechosa específica. Una marca dubitada es aquella recuperada de una escena del crimen, objeto, marco de puerta, cerradura o cualquier elemento cuya procedencia es desconocida. El objetivo del espacio de trabajo no es decidir la identidad de forma automatizada, sino colocar ambas imágenes en una relación visual útil para que el usuario inspeccione continuidades y discrepancias.',
    },
    {
      type: 'paragraph',
      html: 'Una vez cargadas ambas imágenes, usa el control deslizante de división para exponer más o menos de cada lado. Ajusta el desplazamiento horizontal para alinear las fases de las estrías, luego rota la imagen dubitada para compensar el ángulo de la cámara o de la herramienta. El zoom ayuda cuando las dos imágenes fueron capturadas con diferentes aumentos. El contraste y el brillo ayudan a revelar rayas tenues o marcas poco profundas, pero estos ajustes deben documentarse ya que modifican la apariencia original de la imagen.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Lo que el espacio de trabajo te permite observar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Una buena configuración de vista dividida facilita inspeccionar si dos marcas comparten una estructura visual comparable tras una alineación cuidadosa.',
          points: ['Dirección similar de las estrías o crestas', 'Continuidad a lo largo de varios detalles vecinos', 'Diferencias de escala y rotación que requieren corrección', 'Áreas donde la calidad de la marca es lo suficientemente buena para el análisis', 'Discrepancias obvias de características de clase que pueden finalizar la comparación tempranamente'],
        },
        {
          title: 'Lo que no puede demostrar',
          icon: 'mdi:alert-circle-outline',
          description: 'Esta herramienta de navegador no es un sistema de identificación forense validado y no debe utilizarse como tal.',
          points: ['Ninguna conclusión automatizada de origen común', 'Ninguna probabilidad de coincidencia aleatoria', 'Ninguna estimación de frecuencia poblacional', 'No sustituye el examen de la evidencia física original', 'No reemplaza el aseguramiento de calidad del laboratorio ni la revisión por pares'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Control', 'Qué modifica', 'Por qué es importante'],
      rows: [
        ['Subida de imagen indubitada', 'Carga la marca de control o referencia.', 'El lado indubitado debe provenir de una marca de prueba documentada o un ejemplo de entrenamiento.'],
        ['Subida de imagen dubitada', 'Carga la marca de origen desconocido.', 'Este lado se desplaza y ajusta para buscar una orientación comparable.'],
        ['Línea de división', 'Cambia qué porción de cada imagen es visible.', 'Una división móvil ayuda a inspeccionar si las líneas continúan visualmente a través del límite.'],
        ['Desplazamiento horizontal', 'Mueve la imagen cuestionada a la izquierda o derecha.', 'Pequeños desplazamientos laterales pueden poner las crestas correspondientes en fase o fuera de ella.'],
        ['Rotación', 'Gira la imagen cuestionada.', 'El ángulo de la herramienta, la cámara o el montaje pueden crear desviaciones angulares entre imágenes.'],
        ['Zoom', 'Modifica la magnificación mostrada.', 'Las diferentes escalas de las imágenes deben hacerse comparables antes de juzgar los detalles.'],
        ['Contraste y brillo', 'Ajustan la visibilidad de la imagen.', 'Las estrías de bajo contraste pueden volverse más fáciles de ver, pero los ajustes deben registrarse.'],
        ['Exportar vista', 'Guarda un archivo PNG de la alineación actual.', 'Útil para revisión en clase, notas, debates o informes que declaren claramente las limitaciones.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Calidad de imagen',
      title: 'Una mala imagen puede hacer imposible una buena comparación',
      html: 'La comparación de marcas de herramientas depende enormemente de la calidad de la imagen. El desenfoque, los reflejos, los artefactos de compresión, las sombras marcadas, la distorsión de perspectiva y las estrías muy cortas pueden crear impresiones visuales engañosas. Si una marca no se puede orientar, escalar e iluminar claramente, la conclusión adecuada puede ser que la imagen no es apta para una comparación significativa.',
    },
    {
      type: 'summary',
      title: 'Lista de verificación práctica antes de comparar dos marcas',
      items: [
        'Confirma qué imagen es la marca dubitada y cuál es la marca indubitada de prueba.',
        'Comprueba que ambas imágenes muestren el mismo tipo de marca general, la misma zona de contacto de la herramienta y la misma orientación.',
        'Evita comparar líneas individuales aisladas; busca conjuntos de detalles contiguos que persistan a lo largo de una longitud útil.',
        'Usa el contraste y el brillo de manera conservadora y registra cuándo se aplicaron mejoras de imagen.',
        'Exporta la vista alineada únicamente como una ilustración de lo que se visualizó, no como prueba de identidad.',
      ],
    },
    {
      type: 'title',
      text: 'Evidencia de marcas de herramientas indubitadas frente a dubitadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una marca dubitada generalmente se recupera de un elemento involucced en un incidente, como una marca de palanca en una puerta, un corte en un cable, un raspón en metal o una marca de compresión en una superficie blanda. Una marca indubitada se produce a partir de una herramienta sospechosa bajo condiciones controladas o documentadas. En el trabajo forense formal, los peritos consideran si las características de clase son consistentes antes de dedicar tiempo al detalle de las estrías finas. Si las características de clase no coinciden, la similitud microscópica en una región pequeña no es suficiente para sustentar una asociación.',
    },
    {
      type: 'paragraph',
      html: 'El espacio de trabajo del navegador es intencionadamente conservador. Te ayuda a alinear imágenes y discutir características visuales, pero no modela el desgaste de las herramientas, características de subclase, deformación del sustrato, marcas de fabricación, umbrales de decisión del perito, incertidumbre de medición o tasas de error. Un flujo de trabajo responsable trata la imagen exportada como un recurso de comunicación, no como un resultado de identificación.',
    },
    {
      type: 'proscons',
      title: 'Fortalezas y limitaciones de la comparación en línea de imágenes de marcas',
      items: [
        { pro: 'Forma rápida de cargar dos imágenes y examinar su alineación sin instalar software de escritorio.', con: 'La vista del navegador no es un microscopio de comparación forense calibrado.' },
        { pro: 'Útil para enseñar cómo la comparación en pantalla dividida y la orientación afectan lo que ve el usuario.', con: 'El realce de imagen puede mejorar la visibilidad pero también alterar la apariencia de los detalles.' },
        { pro: 'Las vistas PNG exportadas son útiles para notas, discusiones y explicaciones visuales.', con: 'Una vista exportada no conserva el contexto probatorio completo, los metadatos ni la cadena de custodia.' },
        { pro: 'Funciona con imágenes reales subidas por el usuario en lugar de solo marcas sintéticas.', con: 'La herramienta no puede determinar si dos marcas provienen de la misma herramienta.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Marca dubitada', definition: 'Una marca recuperada de un objeto o escena del crimen cuyo origen es desconocido.' },
        { term: 'Marca indubitada', definition: 'Una marca controlada realizada con una herramienta específica para compararla con la marca dubitada.' },
        { term: 'Estría', definition: 'Una línea o surco microscópico creado cuando la superficie de una herramienta se desliza sobre otro material.' },
        { term: 'Características de clase', definition: 'Características compartidas por un grupo de herramientas, como el ancho de la hoja, la forma general o el tipo de herramienta.' },
        { term: 'Características individuales', definition: 'Detalles finos de la superficie que pueden surgir de la fabricación, uso, daño o desgaste.' },
        { term: 'Características de subclase', definition: 'Características compartidas por un subconjunto de herramientas debido a los procesos de fabricación; pueden complicar la interpretación del origen.' },
        { term: 'Aptitud', definition: 'Juicio sobre si una marca contiene suficiente calidad y cantidad de detalles para sustentar una comparación.' },
      ],
    },
    {
      type: 'tip',
      title: 'Términos de búsqueda recomendados que esta página responde',
      html: 'Los usuarios que buscan este tipo de espacio de trabajo suelen buscar frases como <strong>microscopio de comparación de marcas de herramientas en línea</strong>, <strong>comparación de estrías forense</strong>, <strong>marca indubitada frente a dubitada</strong>, <strong>comparar marcas de herramientas a partir de imágenes</strong> y <strong>simulador de microscopio de comparación forense</strong>. La página está construida en torno a esas tareas reales: cargar, alinear, inspeccionar, documentar y comprender limitaciones.',
    },
    {
      type: 'table',
      headers: ['Pregunta común del usuario', 'Respuesta corta'],
      rows: [
        ['¿Puedo subir mis propias imágenes de marcas?', 'Sí. La herramienta está diseñada para trabajar con imágenes dubitadas e indubitadas subidas por el usuario.'],
        ['¿Determina la aplicación si ambas marcas coinciden?', 'No. Solo sirve para la alineación visual y no emite una conclusión forense de origen común.'],
        ['¿Por qué se mueve la imagen dubitada en lugar de ambas?', 'Mantener el lado indubitado fijo hace que sea más sencillo documentar cómo se ajustó la imagen cuestionada.'],
        ['¿Puedo usarla para marcas de proyectiles o vainas?', 'Puede ayudar a demostrar conceptos de alineación de imágenes, pero la comparación de balística requiere procedimientos específicos de la disciplina y revisión validada.'],
        ['¿Puedo incluir el PNG exportado en mis notas?', 'Sí, siempre que se describa claramente como una vista ilustrativa producida mediante controles de ajuste visual.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaución forense',
      title: 'Usa un lenguaje prudente al describir comparaciones de marcas de herramientas',
      html: 'Evita convertir una alineación visual en una conclusión más firme de lo que la evidencia respalda. El lenguaje adecuado depende de la jurisdicción, la política del laboratorio, la validación, la calidad de la imagen, la revisión del perito y el contexto del caso. Esta herramienta en línea debe describirse como una ayuda de comparación visual, no como un método validado para individualizar una herramienta.',
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
