import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-dispersion-residuos-disparo-gsr';
const title = 'Calculadora de Dispersión de Residuos de Disparo (GSR)';
const description = 'Simule patrones educativos de dispersión de residuos de disparo en una superficie de impacto utilizando la distancia de tiro, el tipo de munición, la dispersión radial y el depósito de hollín.';

const howTo = [
  {
    name: 'Ajuste la distancia de tiro',
    text: 'Desplace el control de distancia desde el contacto directo hasta tres metros para observar cómo la descarga pasa de un depósito compacto y alterado térmicamente a un campo disperso.',
  },
  {
    name: 'Seleccione un perfil de munición',
    text: 'Elija entre una pistola de 9 mm, un revólver .38 o una escopeta de calibre 12. Cada perfil modifica el número de partículas, el factor de dispersión y el alcance térmico estimado.',
  },
  {
    name: 'Examine el objetivo y la pluma de eyección',
    text: 'Utilice el lienzo del objetivo para evaluar la densidad de partículas y la dispersión radial, y observe el cono lateral para comprender la expansión física de la nube de residuos.',
  },
  {
    name: 'Interprete la categoría de distancia',
    text: 'Consulte la clasificación obtenida y los hallazgos típicos. Los resultados describen el significado didáctico de los patrones de contacto, contacto cercano, corta distancia y larga distancia.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Puede la dispersión de residuos de disparo determinar la distancia exacta de un tiro?',
    answer: 'No. Los patrones de GSR permiten estimar un rango aproximado de distancia, no una cifra exacta. La determinación real requiere analizar el arma de fuego, la munición, el material de soporte, el ángulo de impacto y realizar disparos de prueba comparativos bajo condiciones controladas.',
  },
  {
    key: 'faq-2',
    question: '¿Por qué los disparos a quemarropa muestran más hollín y quemaduras?',
    answer: 'A distancias muy cortas, los gases calientes, el hollín, la pólvora incombusta y las partículas metálicas del fulminante inciden sobre el objetivo antes de que la pluma de eyección se expanda y enfríe, provocando ahumamiento, quemaduras y desgarros.',
  },
  {
    key: 'faq-3',
    question: '¿Qué elementos químicos se asocian comúnmente con los residuos de fulminante?',
    answer: 'El análisis tradicional de GSR busca partículas compuestas por plomo, bario y antimonio. Aunque las municiones modernas sin plomo pueden alterar esta firma química, el análisis mediante SEM-EDS evalúa la morfología y la química de las partículas de forma conjunta.',
  },
  {
    key: 'faq-4',
    question: '¿Por qué el simulador emplea un modelo de distribución radial gaussiano?',
    answer: 'La distribución gaussiana es una aproximación didáctica útil porque la concentración de partículas es máxima en el centro y disminuye hacia la periferia. En la realidad, factores como el viento, el ángulo del disparo o el tipo de tejido pueden causar asimetrías.',
  },
  {
    key: 'faq-5',
    question: '¿Es esta calculadora adecuada para peritajes judiciales?',
    answer: 'No. Se trata de un recurso educativo. Un dictamen pericial forense debe basarse en protocolos de laboratorio validados, controles de calidad y la evaluación directa de las pruebas físicas por un perito acreditado.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Distancia',
    units: 'Sistema de unidades',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Perfil de munición',
    ammoPistol9mm: 'Pistola de 9 mm',
    ammoRevolver38: 'Revólver .38',
    ammoShotgun12: 'Escopeta calibre 12',
    target: 'Objetivo de tela',
    cone: 'Pluma de residuos',
    canvasAria: 'Dispersión de partículas de residuos de disparo en el objetivo de tela',
    rangeStripAria: 'Categorías de distancia',
    category: 'Interpretación de distancia',
    categoryContactLabel: 'Contacto directo / boca de jarro',
    categoryNearContactLabel: 'Contacto cercano / quemarropa',
    categoryCloseRangeLabel: 'Corta distancia / zona de tatuaje',
    categoryDistantLabel: 'Larga distancia o indeterminada',
    density: 'Densidad de partículas',
    thermal: 'Efecto térmico',
    radius: 'Radio estimado del patrón',
    radiusSuffix: 'de radio',
    expected: 'Hallazgo esperado',
    expectedContact: 'Se espera un depósito central denso, posible impronta de la boca del cañón, ahumamiento severo, desgarro del tejido y alteración térmica en la zona de impacto.',
    expectedNearContact: 'Hollín denso y partículas de pólvora concentrados alrededor del orificio de entrada, con un halo radial estrecho y compacto.',
    expectedCloseRange: 'El tatuaje de pólvora y los residuos metálicos se ensanchan en un anillo medible; los efectos térmicos y el hollín son mínimos o inexistentes.',
    expectedDistant: 'Las partículas están muy dispersas y son escasas. Determinar la distancia requiere análisis químicos, microscopía y disparos de prueba comparativos.',
    contact: 'Contacto',
    near: 'Contacto cercano',
    close: 'Corta distancia',
    distant: 'Larga distancia',
    disclaimer: 'Modelo didáctico. La determinación de la distancia de disparo exige disparos de prueba controlados, comparación de soportes físicos y métodos químicos validados.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimación de Distancia de Disparo a partir de Patrones de GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Modelo educativo',
      title: 'Qué responde esta calculadora',
      html: 'Esta herramienta ilustra si un patrón de residuos se asemeja a un disparo de contacto, contacto cercano, corta distancia o larga distancia. Está diseñada para el aprendizaje de los métodos de <strong>determinación de la distancia de disparo</strong> mediante GSR, no para emitir dictámenes periciales.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'distancia de tiro simulada', icon: 'mdi:ruler' },
        { value: '4', label: 'categorías de distancia explicadas', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'perfiles de munición comparados', icon: 'mdi:ammunition' },
        { value: '2', label: 'sistemas de unidades: métrico e imperial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Cómo Interpretar el Patrón Simulado',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista de verificación rápida',
      items: [
        'El ahumamiento denso, quemaduras, desgarros o la impronta del cañón indican un disparo de contacto o contacto cercano.',
        'Un centro oscuro compacto rodeado de granos de pólvora sugiere una distancia muy corta, requiriendo pruebas físicas para delimitarla.',
        'El tatuaje disperso sin hollín es característico de los disparos a corta distancia cuando se han disipado los efectos térmicos.',
        'La ausencia de residuos visibles a larga distancia no descarta la presencia de GSR; se requiere análisis químico o microscópico.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Para qué sirve esta herramienta',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Permite visualizar la relación entre distancia de tiro, densidad de residuos, dispersión de partículas y efectos térmicos.',
          points: ['Demostración académica', 'Explicación técnica', 'Terminología forense', 'Comparación métrica e imperial'],
        },
        {
          title: 'Qué limitaciones tiene',
          icon: 'mdi:alert-circle-outline',
          description: 'No puede calcular la distancia real en un caso forense sin el estudio de los elementos materiales de prueba.',
          points: ['No procesa muestras reales', 'Sin confirmación química', 'Sin disparos de prueba del arma específica', 'Sin validez judicial'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pregunta frecuente', 'Indicio clave en el patrón', 'Respuesta técnica'],
      rows: [
        ['¿Cómo es un disparo de contacto directo?', 'Hollín denso, quemaduras, desgarro del tejido o impronta del cañón.', 'Es compatible con un disparo de contacto, pero la elasticidad del soporte y los gases pueden modificar la apariencia.'],
        ['¿A qué distancia estaba el arma?', 'Residuos concentrados cerca de la entrada con un halo compacto.', 'El patrón define una hipótesis de distancia, pero se requiere el cotejo con disparos de prueba.'],
        ['¿Qué es el tatuaje por residuos de disparo?', 'Puntillado provocado por pólvora incombusta con mínimo hollín.', 'Su dispersión varía según la munición, la prenda de vestir, el ángulo de tiro y las barreras intermedias.'],
        ['¿Desaparecen los residuos a larga distancia?', 'Dispersión extremadamente amplia y ausencia de depósitos visibles.', 'La marca visible disminuye, pero las partículas microscópicas pueden recuperarse mediante técnicas analíticas.'],
      ],
    },
    {
      type: 'title',
      text: 'Bases Científicas del Modelo de Simulación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El simulador utiliza una distribución radial de base gaussiana para ubicar las partículas en torno al centro del impacto. Las distancias cortas generan concentraciones densas y estrechas, mientras que el aumento de la distancia incrementa la dispersión y reduce la densidad media. El modelo diferencia las partículas del fulminante del depósito de hollín, ya que el ahumamiento tiene un alcance físico mucho más limitado.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Residuos de disparo: partículas derivadas del fulminante, pólvora, proyectil y gases calientes generados al disparar.' },
        { term: 'Ahumamiento', definition: 'Depósito carbonoso y denso visible principalmente en disparos de contacto y distancias muy cortas.' },
        { term: 'Tatuaje', definition: 'Lesiones o marcas puntiformes causadas por el impacto de granos de pólvora incombusta o semicombusta.' },
        { term: 'Impronta de boca', definition: 'Marca o quemadura que reproduce el contorno de la boca de fuego al disparar apoyando el arma.' },
        { term: 'Disparo de prueba', definition: 'Cotejo experimental efectuado a distancias conocidas con el arma y munición sospechosas sobre un soporte idéntico.' },
      ],
    },
    {
      type: 'title',
      text: 'Categorías Forenses de Distancia',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Categoría', 'Hallazgos característicos', 'Límites de interpretación'],
      rows: [
        ['Contacto', 'Depósito central masivo, ahumamiento, quemadura, desgarro o impronta del cañón.', 'La composición del tejido y el escape de gases pueden alterar significativamente el aspecto del orificio.'],
        ['Contacto cercano', 'Halo denso de hollín y pólvora alrededor del orificio de entrada.', 'Prendas holgadas o interpuestas pueden interceptar la distribución típica del residuo.'],
        ['Corta distancia', 'Tatuaje de pólvora y partículas dispersas sin presencia significativa de hollín.', 'Un mismo intervalo de distancia genera patrones distintos sobre algodón, mezclilla, piel o papel.'],
        ['Larga distancia', 'Residuos visibles escasos, dispersión máxima o ausencia de indicios macroscópicos.', 'El análisis microscópico y químico es fundamental para constatar la presencia de partículas no visibles.'],
      ],
    },
    {
      type: 'tip',
      title: 'Criterio práctico de interpretación',
      html: 'Evalúe los residuos de disparo siempre como un <strong>análisis comparativo de rangos</strong> y nunca como un valor numérico fijo. La conclusión científica sólida surge de contrastar la muestra problema con patrones experimentales idénticos.',
    },
    {
      type: 'title',
      text: 'Protocolo de Muestreo e Interpretación del Patrón',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Documentar el tipo de tejido del soporte, color, grosor, porosidad y si existía tensión o pliegues durante el disparo.',
        'Registrar la marca, modelo, longitud del cañón del arma, lote de munición, tipo de pólvora y presencia de dispositivos en la boca.',
        'Fotografiar el patrón con testigo métrico de escala, iluminación adecuada y registro de cadena de custodia.',
        'Analizar por separado la presencia de hollín, quemaduras, pólvora incombusta, anillo de limpieza y desgarros.',
        'Realizar siempre disparos de comparación antes de emitir conclusiones sobre la distancia del disparo.',
      ],
    },
    {
      type: 'proscons',
      title: 'Simulación digital frente a análisis balístico de laboratorio',
      items: [
        { pro: 'Facilita la comprensión visual de la dispersión de residuos conforme aumenta la distancia.', con: 'No reproduce las variables exactas de un arma de fuego, lote de munición o tejido específico.' },
        { pro: 'Ilustra las diferencias conceptuales entre categorías de distancia.', con: 'No reemplaza los ensayos químicos ni la microscopía electrónica de barrido (SEM-EDS).' },
        { pro: 'Ayuda a reconocer los límites físicos del análisis visual macroscópico.', con: 'Carece de validez pericial sin la debida validación, calibración y evaluación forense.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Advertencia forense',
      title: 'Exclusión de uso judicial',
      html: 'Un modelo de simulación digital no puede sustituir la evidencia física de un caso real. No puede evaluar el estado del arma, la química de la pólvora, barreras intermedias o la cadena de custodia. Utilice esta página exclusivamente con fines formativos y acuda a laboratorios periciales autorizados para casos reales.',
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
