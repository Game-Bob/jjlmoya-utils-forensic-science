import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'determinacion-biologica-sexo-restos-oseos-morfologia-craneal-pelvica';
const title = 'Determinador de Sexo en Antropología Forense';
const description = 'Estime el sexo biológico a partir de la morfología craneal y pélvica utilizando un modelo de probabilidad bayesiano.';

const howTo = [
  {
    name: 'Seleccionar la región anatómica a analizar',
    text: 'Decida si desea analizar la pelvis, el cráneo o ambos. Evaluar ambas áreas incrementa la precisión y la confianza de la clasificación final del sexo biológico.',
  },
  {
    name: 'Evaluar cada rasgo morfológico',
    text: 'Examine los especímenes óseos e indique la puntuación de los puntos clave en una escala de 1 (hiperfemenino) a 5 (hipermasculino) según los puntos de referencia visuales.',
  },
  {
    name: 'Introducir puntuaciones en el motor bayesiano',
    text: 'Utilice los selectores desplegables para ingresar la puntuación de cada rasgo. El clasificador actualiza automáticamente la probabilidad posterior para las categorías masculina y femenina.',
  },
  {
    name: 'Interpretar los resultados de probabilidad',
    text: 'Revise el indicador de confianza final, la clasificación de sexo predominante y lea las notas de diagnóstico forense para comprender las variaciones biológicas.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Qué es el método de Phenice en la determinación del sexo pélvico?',
    answer: 'El método de Phenice, publicado por T. W. Phenice en 1969, se centra en tres características pélvicas específicas: el arco ventral, la concavidad subpúbica y el aspecto medial de la rama isquiopúbica. Sigue siendo uno de los métodos morfológicos más fiables en antropología forense, con tasas de precisión que superan el 95 por ciento cuando se aplica a restos óseos bien conservados.',
  },
  {
    key: 'faq-2',
    question: '¿Por qué se prefiere la pelvis al cráneo para la estimación del sexo?',
    answer: 'La pelvis es la parte más dimórfica del esqueleto humano debido a la adaptación funcional para el parto en las mujeres. La presión evolutiva ha moldeado la pelvis femenina para que sea más ancha, menos profunda y tenga ángulos más amplios que la masculina, mientras que el dimorfismo craneal se relaciona principalmente con el tamaño corporal general y el desarrollo muscular, lo que hace que el cráneo sea menos confiable.',
  },
  {
    key: 'faq-3',
    question: '¿Cómo estima el clasificador bayesiano la probabilidad de sexo?',
    answer: 'Nuestro clasificador utiliza un modelo de actualización bayesiano. Asume una probabilidad previa del 50 por ciento para ambos sexos. Para cada marcador anatómico puntuado, el modelo multiplica la probabilidad previa por la verosimilitud de obtener esa puntuación específica en poblaciones masculinas frente a femeninas. Las puntuaciones resultantes se normalizan para generar una distribución de probabilidad posterior.',
  },
  {
    key: 'faq-4',
    question: '¿Qué representa una puntuación de 3 en el análisis morfológico?',
    answer: 'Una puntuación de 3 representa una morfología indeterminada o neutra. Esto indica que el rasgo exhibe características que se encuentran en la mitad del espectro del dimorfismo sexual humano, sin mostrar rasgos claramente femeninos (1-2) ni claramente masculinos (4-5).',
  },
  {
    key: 'faq-5',
    question: '¿Puede este modelo determinar el sexo de restos óseos de subadultos o niños?',
    answer: 'No. La determinación morfológica del sexo es muy poco fiable en restos de subadultos porque las características morfológicas que diferencian los esqueletos masculinos y femeninos no se desarrollan por completo hasta después de la pubertad. Los antropólogos forenses suelen recurrir a pruebas genéticas o indicadores dentales para subadultos en lugar de puntos de referencia osteológicos.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Morfología Pélvica',
    craniumRegion: 'Morfología Craneal',
    subpubicAngle: 'Ángulo Subpúbico',
    subpubicAngleDesc: 'El ángulo formado debajo de la sínfisis púbica.',
    subpubicAngleFem: 'Ángulo ancho en U (>90°)',
    subpubicAngleMasc: 'Ángulo estrecho en V (<70°)',
    sciaticNotch: 'Escotadura Ciática',
    sciaticNotchDesc: 'La escotadura ciática mayor en el ilion posterior.',
    sciaticNotchFem: 'Escotadura ancha y poco profunda',
    sciaticNotchMasc: 'Escotadura estrecha y profunda',
    ventralArc: 'Arco Ventral',
    ventralArcDesc: 'Cresta ósea que cruza el pubis anterior.',
    ventralArcFem: 'Cresta elevada prominente',
    ventralArcMasc: 'Línea ausente o muy tenue',
    preauricularSulcus: 'Surco Preauricular',
    preauricularSulcusDesc: 'Surco adyacente a la articulación sacroilíaca.',
    preauricularSulcusFem: 'Surco profundo y picado',
    preauricularSulcusMasc: 'Ausente o liso',
    mastoidProcess: 'Apófisis Mastoides',
    mastoidProcessDesc: 'Proyección ósea detrás del canal auditivo.',
    mastoidProcessFem: 'Proyección pequeña y corta',
    mastoidProcessMasc: 'Proyección grande y larga',
    supraorbitalRidge: 'Borde Supraorbitario',
    supraorbitalRidgeDesc: 'Protuberancia del arco superciliar (glabela).',
    supraorbitalRidgeFem: 'Frente lisa y plana',
    supraorbitalRidgeMasc: 'Arco prominente y saliente',
    mentalEminence: 'Eminencia Mentoniana (Barbilla)',
    mentalEminenceDesc: 'La forma y prominencia de la barbilla.',
    mentalEminenceFem: 'Barbilla redondeada y puntiaguda',
    mentalEminenceMasc: 'Barbilla ancha y cuadrada',
    nuchalCrest: 'Cresta Nucal',
    nuchalCrestDesc: 'Crestas óseas en la parte posterior del cráneo.',
    nuchalCrestFem: 'Plano occipital liso',
    nuchalCrestMasc: 'Proyección rugosa y ganchuda',
    selectOption: 'Elegir puntuación...',
    score1: '1 - Hiperfemenino',
    score2: '2 - Femenino',
    score3: '3 - Indeterminado',
    score4: '4 - Masculino',
    score5: '5 - Hipermasculino',
    notEvaluated: 'No evaluado',
    resultsTitle: 'Resultados de Determinación de Sexo',
    femaleProbLabel: 'Probabilidad Femenina',
    maleProbLabel: 'Probabilidad Masculina',
    predominantLabel: 'Clasificación Predominante',
    confidenceLabel: 'Confianza de la Estimación',
    weakConf: 'Débil (Pocos indicadores evaluados)',
    moderateConf: 'Moderada',
    strongConf: 'Fuerte',
    femaleClass: 'Femenino',
    maleClass: 'Masculino',
    indeterminateClass: 'Indeterminado',
    noteNoData: 'Por favor, puntúe al menos un marcador anatómico para comenzar los cálculos.',
    noteTriageOnly: 'Esta es una herramienta educativa de cribado. La evaluación forense formal requiere análisis métricos y revisión de múltiples expertos.',
    noteBayesianEst: 'Las probabilidades se calculan dinámicamente utilizando una matriz de verosimilitud bayesiana no paramétrica.',
    pelvicTitle: 'Guía de Referencia de Pelvis',
    cranialTitle: 'Guía de Referencia de Cráneo',
    pelvisDesc: 'La pelvis femenina está adaptada para el parto, lo que da como resultado estructuras más anchas y ángulos más abiertos. La pelvis masculina es más robusta, estrecha y orientada verticalmente.',
    cranialDesc: 'El cráneo masculino es generalmente más grande y robusto, con apófisis mastoides más grandes, arcos superciliares prominentes e inserciones musculares rugosas. El cráneo femenino es más grácil, con bordes más suaves y una barbilla redondeada.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introducción a la determinación osteológica del sexo en antropología forense',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Estimación del sexo biológico en antropología forense y arqueología. La determinación del sexo biológico constituye uno de los pasos fundamentales en el establecimiento del perfil osteobiológico a partir de restos óseos de procedencia desconocida. En combinación con la estimación de la estatura, la edad en el momento del fallecimiento y la afinidad ancestral, el análisis del sexo permite delimitar significativamente el universo de posibles identidades en contextos médico-legales y arqueológicos. El esqueleto humano adulto exhibe un claro dimorfismo sexual, caracterizado por diferencias morfológicas y métricas significativas entre los individuos de sexo masculino y femenino. Estas variaciones se fundamentan principalmente en diferencias genéticas, hormonales y, de manera muy destacada, en las adaptaciones evolutivas y funcionales de la pelvis femenina para facilitar el proceso de gestación y parto.',
    },
    {
      type: 'paragraph',
      html: 'Este simulador interactivo permite a profesionales de la medicina forense, estudiantes de antropología física y peritos judiciales analizar y ponderar diferentes indicadores morfológicos del cráneo y de la pelvis. Al registrar las puntuaciones asignadas a cada punto de referencia anatómico, los usuarios pueden comprender cómo los rasgos morfológicos se integran estadísticamente en un modelo bayesiano para ofrecer un diagnóstico cuantitativo riguroso, evitando sesgos subjetivos en el peritaje.',
    },
    {
      type: 'title',
      text: 'Dimorfismo de la pelvis y el método de Phenice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La cintura pélvica es considerada de manera unánime como la región anatómica más fiable para determinar el sexo biológico, con una precisión diagnóstica que supera el noventa y cinco por ciento cuando las estructuras se encuentran bien conservadas. El coxal femenino presenta una conformación adaptada a la reproducción, caracterizada por un canal del parto más amplio, una escotadura ciática mayor ancha y poco profunda en forma de U, y un ángulo subpúbico netamente obtuso, que supera los noventa grados. Por el contrario, la pelvis masculina se caracteriza por una estructura estrecha, robusta y orientada verticalmente, con un ángulo subpúbico agudo inferior a setenta grados. El método desarrollado por T. W. Phenice en 1969 es el estándar de referencia visual en la región púbica, evaluando minuciosamente tres rasgos clave: la presencia o ausencia del arco ventral, el desarrollo de la concavidad subpúbica y el relieve de la superficie interna de la rama isquiopúbica. El arco ventral, en particular, constituye una característica fuertemente femenina que raramente se observa en individuos masculinos.',
    },
    {
      type: 'title',
      text: 'Dimorfismo craneal y marcadores de robustez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En situaciones donde la pelvis no se ha conservado o se encuentra fragmentada, el cráneo representa la principal alternativa diagnóstica para la estimación del sexo. Sin embargo, dado que el dimorfismo craneal responde principalmente a diferencias en la robustez general y el desarrollo osteomuscular, su precisión es ligeramente inferior, situándose entre el ochenta y el noventa por ciento. La evaluación se basa en la graduación visual de cinco marcadores principales según la metodología clásica de la antropología física. La apófisis mastoides resulta significativamente más grande y descendente en hombres. La glabela y el arco supraorbitario muestran un relieve prominente en especímenes masculinos, asociado a una frente más inclinada. La eminencia mentoniana tiende a ser cuadrada y ancha en varones debido al desarrollo de tubérculos laterales, mientras que las mujeres presentan por lo general un mentón redondeado y grácil. Finalmente, la cresta nucal refleja la inserción de la musculatura posterior del cuello, siendo rugosa e incluso ganchuda en los varones.',
    },
    {
      type: 'table',
      headers: ['Marcador Anatómico', 'Características Femeninas (Grados 1-2)', 'Características Masculinas (Grados 4-5)', 'Relevancia Forense'],
      rows: [
        ['Ángulo Subpúbico', 'Ángulo obtuso y amplio, a menudo superando los 90 grados.', 'Ángulo agudo y estrecho, generalmente inferior a 70 grados.', 'Constituye el indicador individual más fiable del esqueleto humano.'],
        ['Escotadura Ciática Mayor', 'Amplia y poco profunda, con morfología clásica en U abierta.', 'Estrecha y profunda, con forma similar a un dedo pulgar.', 'Estructura compacta de alta durabilidad ante procesos tafonómicos.'],
        ['Apófisis Mastoides', 'Pequeña, corta y alineada con el plano del conducto auditivo.', 'Voluminosa, larga y proyectada claramente hacia abajo.', 'Excelente marcador para cráneos fragmentados o meteorizados.'],
        ['Borde Supraorbitario', 'Filtrante, grácil y con glabela plana o poco desarrollada.', 'Romo, grueso y con glabela prominente y saliente.', 'Permite diferenciar la robustez masculina de la gracia femenina.'],
      ],
    },
    {
      type: 'title',
      text: 'Modelado matemático bayesiano y su aplicación médico-legal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Históricamente, la determinación cualitativa del sexo adolecía de cierta subjetividad intrínseca al criterio del investigador. Para mitigar esta variabilidad, la antropología forense contemporánea promueve la adopción de métodos estadísticos probabilísticos. El teorema de Bayes proporciona un marco matemático idóneo para integrar múltiples observaciones independientes. Partiendo de una probabilidad a priori equiprobable (del cincuenta por ciento para cada sexo), el modelo actualiza dinámicamente este valor con la verosimilitud de observar cada grado de robustez morfológica en poblaciones de referencia. De este modo, si un espécimen presenta un arco ventral claramente femenino (Grado 1), la probabilidad posterior femenina se eleva drásticamente, compensando de forma matemática posibles rasgos neutrales o contradictorios presentes en otras regiones.',
    },
    {
      type: 'paragraph',
      html: 'Este software educativo implementa un motor de inferencia bayesiano que proporciona resultados en formato de porcentaje probabilístico en lugar de asignaciones categóricas rígidas. Esta aproximación metodológica se alinea con las directrices internacionales del grupo de trabajo científico en antropología forense, que exigen la expresión de la incertidumbre y las tasas de error en los informes periciales destinados a los tribunales de justicia.',
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
