import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estimador-de-estatura-forense-restos-oseos-calculadora-trotter-gleser';
const title = 'Estimador de Estatura Forense';
const description = 'Estime la estatura en vida a partir de huesos largos humanos utilizando las ecuaciones de regresión de Trotter y Gleser, incorporando sexo biológico, ancestros y corrección por edad.';

const howTo = [
  {
    name: 'Seleccionar hueso y variables',
    text: 'Elija el hueso largo específico a medir (Fémur, Tibia, Húmero, Peroné, Radio o Cúbito) junto con el sexo biológico, el grupo de ancestros y la edad del individuo.'
  },
  {
    name: 'Determinar la longitud del hueso',
    text: 'Ajuste el calibrador deslizante en la tabla osteométrica virtual para representar la longitud máxima de la muestra ósea en centímetros o pulgadas.'
  },
  {
    name: 'Calcular la estatura estimada',
    text: 'La calculadora aplica las ecuaciones de regresión de Trotter y Gleser correspondientes, restando 0.06 cm por año para individuos mayores de 30 años.'
  },
  {
    name: 'Interpretar intervalos y errores',
    text: 'Revise la estatura estimada, el Error Estándar de la Estimación (SEE) y el intervalo de predicción del 95% para tener en cuenta la variabilidad de la población.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Cómo funcionan las ecuaciones de regresión de Trotter y Gleser?',
    answer: 'Las ecuaciones utilizan regresión lineal para modelar la correlación entre la estatura en vida y la longitud máxima de los huesos largos. Al ingresar la longitud del hueso, la calculadora aplica pendientes e intersecciones específicas del grupo de ancestros y el sexo.'
  },
  {
    key: 'faq-2',
    question: '¿Por qué la herramienta requiere sexo biológico y ancestros?',
    answer: 'Las proporciones del cuerpo humano varían según el sexo y las poblaciones geográficas. Los hombres generalmente tienen proporciones de extremidades a estatura diferentes a las de las mujeres, y las poblaciones de diferentes orígenes muestran relaciones de desarrollo distintas.'
  },
  {
    key: 'faq-3',
    question: '¿Por qué hay un factor de corrección por edad en la estimación de estatura?',
    answer: 'La estatura en vida disminuye gradualmente después de la adultez temprana debido a la compresión de los discos intervertebrales y cambios posturales. Trotter y Gleser recomendaron restar 0.06 centímetros por cada año de edad superior a los 30 años.'
  },
  {
    key: 'faq-4',
    question: '¿Qué es el Error Estándar de la Estimación (SEE)?',
    answer: 'El SEE representa la desviación estándar de los residuos en el modelo de regresión. Proporciona una medida de precisión para la estatura predicha, mostrando la desviación típica de las estaturas reales frente a la línea de regresión para ese hueso.'
  },
  {
    key: 'faq-5',
    question: '¿Qué huesos largos proporcionan las estimaciones de estatura más precisas?',
    answer: 'Los huesos de las extremidades inferiores, específicamente el fémur y la tibia, proporcionan las estimaciones más precisas porque contribuyen directamente a la altura de la persona. Los huesos de las extremidades superiores tienen mayores errores estándar pero son útiles si los restos de las inferiores están incompletos.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Estimador de Estatura Forense',
    desc: 'Simule mediciones en tablas osteométricas y calcule la estatura en vida mediante regresión lineal.',
    configTitle: 'Configuración Osteométrica',
    boneLabel: 'Muestra Ósea',
    lengthLabel: 'Longitud del Hueso',
    unitLabel: 'Unidad del Sistema',
    metricOption: 'Métrico (cm)',
    imperialOption: 'Imperial (pulgadas)',
    sexLabel: 'Sexo Biológico',
    ancestryLabel: 'Grupo de Ancestros',
    ageLabel: 'Edad al Morir (años)',
    maleOption: 'Masculino',
    femaleOption: 'Femenino',
    whiteOption: 'Blanco / Caucásico',
    blackOption: 'Negro / Afroamericano',
    asianOption: 'Asiático / Mongoloide',
    femurName: 'Fémur (Hueso del muslo)',
    tibiaName: 'Tibia (Hueso de la espinilla)',
    humerusName: 'Húmero (Hueso del brazo superior)',
    fibulaName: 'Peroné (Hueso de la pantorrilla)',
    radiusName: 'Radio (Hueso del antebrazo)',
    ulnaName: 'Cúbito (Hueso del antebrazo)',
    resultsTitle: 'Resultados de Estimación de Estatura',
    estimateLabel: 'Estatura Estimada',
    errorLabel: 'Error Estándar (SEE)',
    rangeLabel: 'Intervalo de Predicción del 95%',
    formulaLabel: 'Ecuación de Regresión',
    formulaBoneFactor: 'Factor Óseo',
    formulaConstant: 'Constante',
    formulaAgeCorrection: 'Corrección por Edad',
    formulaStdError: 'Error Estándar (SEE)',
    fallbackAlert: 'No existe una ecuación directa de Trotter-Gleser para mujeres asiáticas/mongoloides; se utilizan las ecuaciones de referencia de mujeres blancas como alternativa forense.',
    boardInstructions: 'Arrastre el calibrador o use los controles para medir el hueso.',
    rulerLabelMetric: 'Escala Métrica (mm)',
    rulerLabelImperial: 'Escala Imperial (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Guía Completa de Estimación de Estatura en Antropología Forense',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La estimación de la estatura representa un componente fundamental del perfil biológico en antropología física, bioarqueología y ciencias forenses. Cuando se recuperan restos óseos, reconstruir la estatura en vida del individuo ayuda a los investigadores a contrastar los registros de personas desaparecidas. La estatura se estima midiendo la longitud máxima de los huesos largos, los cuales se correlacionan estrechamente con la altura total debido a proporciones esqueléticas reguladas genética y ambientalmente.'
    },
    {
      type: 'paragraph',
      html: 'Este simulador digital de tabla osteométrica permite a estudiantes y profesionales explorar los modelos de regresión lineal desarrollados por Mildred Trotter y Goldine C. Gleser. Al configurar variables como el tipo de hueso, el sexo biológico, la afinidad ancestral y la edad al morir, los usuarios pueden analizar cómo las proporciones corporales influyen en las constantes matemáticas y los errores típicos de las predicciones de altura.'
    },
    {
      type: 'title',
      text: 'Comprensión de las Fórmulas de Regresión de Trotter-Gleser',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter y Goldine C. Gleser publicaron sus ecuaciones de regresión fundamentales en 1952 y 1958. Sus muestras estadísticas consistieron en bajas militares estadounidenses de la Segunda Guerra Mundial y la Guerra de Corea, complementadas con especímenes de la Colección Terry. Las ecuaciones matemáticas resultantes toman la forma lineal: <strong>Estatura = (Pendiente × Longitud del Hueso) + Constante ± Error Estándar</strong>. Debido a que las relaciones entre los huesos largos y la estatura varían significativamente entre grupos humanos, se utilizan fórmulas separadas según el sexo biológico y los ancestros.'
    },
    {
      type: 'table',
      headers: ['Muestra Ósea', 'Modelo de Regresión Masculino Blanco', 'Modelo de Regresión Femenino Blanco', 'Utilidad y Fiabilidad Forense'],
      rows: [
        ['Fémur (Muslo)', 'Estatura = 2.32 × Fémur + 65.53 ± 3.94 cm', 'Estatura = 2.47 × Fémur + 54.10 ± 3.72 cm', 'Máxima fiabilidad. El fémur es el hueso de soporte principal de la extremidad inferior y se correlaciona de forma directa con la altura corporal.'],
        ['Tibia (Espinilla)', 'Estatura = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Estatura = 2.90 × Tibia + 61.53 ± 3.66 cm', 'Alta fiabilidad. Se debe tener precaución de seguir el protocolo original de Trotter, el cual excluía el maléolo medial.'],
        ['Peroné (Pantorrilla)', 'Estatura = 2.60 × Peroné + 75.50 ± 3.86 cm', 'Estatura = 2.93 × Peroné + 59.61 ± 3.57 cm', 'Muy fiable, pero el peroné es delgado y suele fragmentarse o perderse en contextos arqueológicos.'],
        ['Húmero (Brazo)', 'Estatura = 2.89 × Húmero + 78.10 ± 4.57 cm', 'Estatura = 3.36 × Húmero + 57.97 ± 4.45 cm', 'Fiabilidad moderada. Los huesos del brazo superior no soportan peso y muestran errores estándar de estimación más elevados.'],
        ['Radio (Antebrazo)', 'Estatura = 3.79 × Radio + 79.42 ± 4.66 cm', 'Estatura = 4.74 × Radio + 54.93 ± 4.45 cm', 'Menor fiabilidad. Los elementos del antebrazo muestran variaciones de desarrollo notables en relación con la estatura total.']
      ]
    },
    {
      type: 'title',
      text: 'Disminución de Estatura por Edad y Correcciones Post-Mortem',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La estatura en vida no permanece estática a lo largo de la edad adulta. Alrededor de los 30 años, el cuerpo humano experimenta una pérdida progresiva de altura provocada por la compresión de los discos intervertebrales, cambios posturales y artrosis articular. Para ajustar las estimaciones esqueléticas a la estatura real al morir, Trotter y Gleser recomendaron restar 0.06 cm por cada año superior a los 30: <strong>Pérdida de Altura = 0.06 × (Edad - 30)</strong>. Este factor está integrado en el simulador.'
    },
    {
      type: 'title',
      text: 'Discrepancias Metodológicas y Protocolos de Medición de Tibia',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Un problema metodológico célebre en la antropología forense involucra las medidas de la tibia realizadas por Trotter. En su estudio de 1952, la tibia se midió excluyendo el maléolo medial, mientras que en 1958 el protocolo cambió. Aplicar las ecuaciones de 1952 a una tibia medida con maléolo genera sobreestimaciones sistemáticas. Es clave verificar qué landmarks de medición se corresponden con la fórmula elegida.'
    },
    {
      type: 'title',
      text: 'Tendencias Seculares y Aplicabilidad de Datos Históricos',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Debido a que las muestras de Trotter y Gleser nacieron a finales del siglo XIX y principios del XX, sus ecuaciones reflejan las condiciones nutricionales y ambientales de esa época. En el último siglo, las poblaciones globales han experimentado una tendencia secular positiva, traduciéndose en estaturas promedio mayores. Así, aunque Trotter-Gleser es el estándar educativo de referencia, en la práctica profesional moderna se complementa con bases de datos actuales y software como FORDISC.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
