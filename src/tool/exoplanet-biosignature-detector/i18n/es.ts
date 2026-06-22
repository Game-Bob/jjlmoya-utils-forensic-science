import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'detector-bisenales-exoplanetas';
const title = 'Detector de Bioseñales de Exoplanetas';
const description = 'Alinea las líneas de absorción de oxígeno, metano y ozono en un espectro de transmisión de un exoplaneta simulado. Evalúa la habitabilidad biológica, la posible contaminación por tecnofirmas y el riesgo de falsos positivos mediante evidencia espectral.';

const howTo = [
  {
    name: 'Elige la estrella anfitriona',
    text: 'Selecciona una enana K, una estrella similar al Sol o una enana M. El tipo de estrella modifica el riesgo de falsos positivos, ya que el flujo ultravioleta, las fulguraciones y la fotoquímica atmosférica alteran la interpretación del oxígeno y el ozono.',
  },
  {
    name: 'Alinea las líneas espectrales',
    text: 'Desplaza los controles de oxígeno, metano y ozono hasta que los marcadores de absorción observados coincidan con las bandas de referencia en el espectro simulado.',
  },
  {
    name: 'Ajusta el ruido y el contexto atmosférico',
    text: 'Aumenta el ruido del instrumento para observar cómo disminuye el nivel de confianza. Ajusta el vapor de agua y el dióxido de carbono para representar una atmósfera más húmeda, seca, densa o fotoquímicamente compleja.',
  },
  {
    name: 'Interpreta los índices de habitabilidad',
    text: 'Compara las lecturas biológica, tecnológica y de habitabilidad. Un resultado sólido requiere múltiples gases en desequilibrio, no solo una línea aislada.',
  },
];

const faq = [
  {
    question: '¿Qué es una bioseñal en espectroscopia de exoplanetas?',
    answer: 'Una bioseñal es una característica detectable a distancia que podría ser consecuencia de procesos biológicos. En espectros atmosféricos, los candidatos comunes incluyen oxígeno, ozono, metano, vapor de agua y combinaciones de gases que deberían reaccionar entre sí, a menos que un proceso los reponga constantemente.',
  },
  {
    question: '¿Por qué es tan importante la combinación de oxígeno y metano?',
    answer: 'El oxígeno y el metano reaccionan químicamente entre sí. Si ambos están presentes en niveles significativos, la atmósfera podría encontrarse en un estado de desequilibrio químico, lo cual es un indicador mucho más potente de vida que la presencia de cualquiera de los dos por separado. Por ello, el simulador otorga mayor peso a este par.',
  },
  {
    question: '¿Puede el oxígeno ser un falso positivo?',
    answer: 'Sí. El oxígeno puede acumularse de forma abiótica debido a la pérdida de agua, fotólisis, actividad volcánica o entornos estelares con alta radiación ultravioleta. Por esta razón, la herramienta calcula el riesgo de falsos positivos en lugar de tratar al oxígeno como una prueba definitiva.',
  },
  {
    question: '¿Por qué el ozono se incluye por separado del oxígeno?',
    answer: 'El ozono es un producto fotoquímico del oxígeno y presenta características espectrales muy marcadas. Puede actuar como un indicador indirecto, especialmente cuando las bandas directas de oxígeno son difíciles de observar, aunque su análisis siempre requiere el contexto atmosférico completo.',
  },
  {
    question: '¿Qué significa el índice tecnológico?',
    answer: 'El índice tecnológico es una métrica de advertencia especulativa para aquellos casos en los que un espectro atmosférico parece tan energético, ruidoso o químicamente inusual que no se debe descartar una fuente artificial. No constituye una confirmación de detección.',
  },
  {
    question: '¿Es este un modelo real de recuperación de exoplanetas?',
    answer: 'No. Se trata de un simulador educativo que traduce conceptos fundamentales de la espectroscopia a un modelo de puntuación interactivo. Las recuperaciones científicas reales emplean transferencia radiativa, corrección de contaminación estelar, modelos de nubes, correcciones instrumentales e inferencia bayesiana.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualización de espectro de transmisión de exoplaneta',
    starClass: 'Estrella anfitriona',
    starK: 'Enana K tranquila',
    starSun: 'Estrella tipo G similar al Sol',
    starM: 'Enana M activa',
    noise: 'Ruido instrumental',
    oxygenLine: 'Marcador de oxígeno',
    methaneLine: 'Marcador de metano',
    ozoneLine: 'Marcador de ozono',
    waterVapor: 'Contexto de vapor de agua',
    carbonDioxide: 'Contexto de CO2',
    habitabilityIndex: 'Índice de habitabilidad',
    biologicalIndex: 'Biológico',
    technologicalIndex: 'Tecnológico',
    falsePositiveRisk: 'Riesgo de falso positivo',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Conclusión',
    dataLive: 'Síntesis de datos en tiempo real',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Alinea los marcadores espectrales para evaluar la evidencia atmosférica.',
    verdictWeak: 'El espectro es débil: las líneas aún no respaldan una interpretación favorable a la vida.',
    verdictPromising: 'El espectro es prometedor: varios marcadores de bioseñales están parcialmente alineados.',
    verdictStrong: 'El espectro es sólido: oxígeno, metano y ozono forman una señal coherente de desequilibrio.',
    verdictAmbiguous: 'La señal es interesante pero ambigua: los falsos positivos estelares o atmosféricos siguen siendo altos.',
  },
  seo: [
    {
      type: 'title',
      text: 'Detector de Bioseñales de Exoplanetas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El detector de bioseñales de exoplanetas es un simulador espectroscópico interactivo para explorar cómo los gases asociados a la vida podrían aparecer en la luz filtrada a través de una atmósfera lejana. En lugar de tratar una molécula aislada como una respuesta binaria, la herramienta te pide alinear las características de absorción de oxígeno, metano y ozono, y luego sopesa el resultado frente al ruido, el vapor de agua, el dióxido de carbono y el comportamiento de la estrella anfitriona.',
    },
    {
      type: 'paragraph',
      html: 'Esta es la dificultad central de la ciencia de bioseñales: el oxígeno puede ser emocionante, el metano puede ser emocionante y el ozono puede ser emocionante, pero ninguno es una prueba por sí mismo. Los casos más convincentes combinan múltiples gases, contexto físico y una búsqueda cuidadosa de explicaciones no biológicas. El simulador hace visibles esas compensaciones en una interfaz compacta tipo laboratorio.',
    },
    {
      type: 'title',
      text: 'Cómo la Espectroscopia de Transmisión Revela los Gases Atmosféricos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando un planeta cruza frente a su estrella, una fracción minúscula de la luz estelar atraviesa la atmósfera del planeta antes de llegar al telescopio. Las moléculas absorben longitudes de onda específicas, dejando estrechos o anchos valles en el espectro medido. Al comparar los valles observados con las posiciones de laboratorio, los astrónomos pueden inferir qué gases podrían estar presentes, aunque las nubes, la calima, la temperatura, las manchas estelares y el ruido instrumental complican la recuperación.',
    },
    {
      type: 'title',
      text: 'Oxígeno, Metano y Ozono como Señal Combinada',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Oxígeno O2:</strong> en la Tierra, el oxígeno abundante se mantiene mediante la fotosíntesis, pero el oxígeno abiótico puede acumularse bajo ciertas historias planetarias.',
        '<strong>Metano CH4:</strong> el metano puede provenir de la biología, la geología o los impactos. Resulta más sugerente cuando se encuentra junto con gases oxidantes.',
        '<strong>Ozono O3:</strong> el ozono es un producto fotoquímico del oxígeno y puede ser más fácil de detectar en ciertos rangos espectrales, pero sigue siendo una pista indirecta.',
        '<strong>Contexto de agua y CO2:</strong> el agua favorece la habitabilidad, mientras que el dióxido de carbono ayuda a encuadrar el efecto invernadero, la fotoquímica y los escenarios de falso positivo.',
      ],
    },
    {
      type: 'title',
      text: 'Por Qué Importan los Falsos Positivos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una puntuación alta de oxígeno no significa automáticamente biología. La pérdida de agua puede dejar oxígeno atrás, la radiación ultravioleta estelar puede dividir moléculas y una baja emisión volcánica de gases reductores puede permitir que el oxígeno se acumule. Las enanas M activas son especialmente problemáticas porque las fulguraciones y la fotoquímica pueden remodelar la composición atmosférica. La lectura de falso positivo se eleva cuando el ruido, el tipo de estrella o el contexto atmosférico hacen que una explicación biológica sea menos segura.',
    },
    {
      type: 'table',
      headers: ['Patrón de señal', 'Interpretación', 'Precaución'],
      rows: [
        ['Solo O2', 'Atmósfera potencialmente rica en oxígeno', 'Puede ser abiótico tras pérdida de agua o fotoquímica inusual'],
        ['Solo CH4', 'Posible atmósfera reductora o geología activa', 'El metano solo no es una afirmación sólida de vida'],
        ['O2 más CH4', 'Desequilibrio químico que merece seguimiento', 'Requiere recuperación robusta y controles de contaminación'],
        ['O2 más O3 más agua', 'Contexto similar al terrestre más coherente', 'Las nubes y la actividad estelar siguen siendo relevantes'],
      ],
    },
    {
      type: 'title',
      text: 'Índices de Habitabilidad Biológica y Tecnológica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El índice biológico enfatiza el desequilibrio químico, especialmente oxígeno junto con metano, luego suma el blindaje del ozono y el contexto del agua. El índice tecnológico es intencionadamente especulativo: destaca los casos donde la atmósfera parece energética, ruidosa o químicamente inusual como para que se deban considerar contaminación artificial, modificación atmosférica deliberada o artefactos de observación antes de contar una historia simple de vida.',
    },
    {
      type: 'paragraph',
      html: 'Usa la herramienta como una ayuda al razonamiento, no como un generador de afirmaciones. Una evaluación real de bioseñales compararía múltiples modelos atmosféricos, incluiría espectros estelares, corregiría sistemáticos del telescopio, estimaría la opacidad de las nubes y calcularía incertidumbres. El valor educativo aquí es que obliga a aplicar la misma disciplina: alinear la evidencia, verificar el contexto y mantener los falsos positivos a la vista.',
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
