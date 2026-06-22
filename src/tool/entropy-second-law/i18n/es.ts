import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-entropia-segunda-ley';
const title = 'Simulador de Entropía y Segunda Ley de la Termodinámica';
const description = 'Observa cómo las cámaras de partículas caliente y fría se mezclan, se igualan y elevan la entropía con un simulador visual de difusión y una gráfica de entropía en vivo.';

const howTo = [
  {
    name: 'Ajusta las temperaturas izquierda y derecha',
    text: 'Elige una cámara más fría y una más caliente para crear un desequilibrio térmico inicial. Diferencias mayores hacen más visible la aproximación irreversible al equilibrio.',
  },
  {
    name: 'Ajusta la apertura de la barrera',
    text: 'Abre o estrecha el paso entre las dos cámaras. Una abertura más amplia permite que las partículas y la energía se difundan más rápido, por lo que la curva de entropía asciende más rápidamente.',
  },
  {
    name: 'Observa la caja de partículas',
    text: 'Las partículas azules representan movimiento de baja energía y las naranjas movimiento de alta energía. A medida que se acumulan colisiones y cruces, la caja se vuelve más mezclada y menos ordenada.',
  },
  {
    name: 'Interpreta la gráfica de entropía',
    text: 'Sigue cómo la mezcla espacial y la nivelación térmica se combinan en una única puntuación creciente de entropía. La curva busca generar intuición sobre por qué los sistemas aislados evolucionan hacia macroestados más probables.',
  },
];

const faq = [
  {
    question: '¿Por qué aumenta la entropía en este simulador?',
    answer: 'El estado inicial está artificialmente ordenado: un lado es más frío, el otro más caliente. Una vez que la barrera permite el intercambio, hay muchas más configuraciones mezcladas que separadas, por lo que el sistema se mueve naturalmente hacia el macroestado abrumadoramente más probable.',
  },
  {
    question: '¿Esto prueba exactamente la segunda ley?',
    answer: 'No. Es un modelo didáctico de partículas, no un código de laboratorio de dinámica molecular. Captura la intuición central detrás de la difusión irreversible y la nivelación térmica, que es la intención de búsqueda de la mayoría de los usuarios cuando preguntan por qué la entropía tiende a aumentar.',
  },
  {
    question: '¿Qué significan aquí entropía espacial y entropía térmica?',
    answer: 'La entropía espacial mide cuán uniformemente están distribuidas las partículas entre las cámaras izquierda y derecha. La entropía térmica en este simulador mide cuán pequeña es la brecha energética entre las dos mitades. La puntuación total combina ambas para que los usuarios puedan ver la mezcla y el flujo de calor al mismo tiempo.',
  },
  {
    question: '¿Por qué las partículas siguen moviéndose incluso cerca del equilibrio?',
    answer: 'El equilibrio no significa que el movimiento se detenga. Significa que el desequilibrio macroscópico desaparece. Las moléculas aún se mueven, chocan e intercambian energía, pero no queda una dirección persistente a gran escala que explotar.',
  },
  {
    question: '¿Puede la entropía disminuir momentáneamente alguna vez?',
    answer: 'En sistemas microscópicos, pequeñas fluctuaciones son posibles. Esta herramienta visual suaviza esas fluctuaciones y enfatiza la tendencia estadística general: en un sistema aislado grande, los estados ordenados de baja entropía son enormemente menos probables que los estados mezclados.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Mezcla irreversible',
    results: 'Resultados del simulador de entropía',
    particleBox: 'Caja de difusión de partículas',
    barrier: 'Barrera',
    entropyGraph: 'Gráfica de entropía en el tiempo',
    liveTrace: 'Trazado en vivo',
    highEntropy: 'alta',
    midEntropy: 'media',
    lowEntropy: 'baja',
    controls: 'Controles del simulador de entropía',
    leftTemperature: 'Temperatura izquierda',
    rightTemperature: 'Temperatura derecha',
    gateAperture: 'Apertura de la barrera',
    pause: 'Pausa',
    reset: 'Reiniciar estado',
    resume: 'Reanudar',
    totalEntropy: 'Entropía total',
    particleBalance: 'Partículas izquierda/derecha',
    spatialEntropy: 'Entropía espacial',
    thermalEntropy: 'Entropía térmica',
    energyGap: 'Brecha energética',
    noteLabel: 'Interpretación',
    stateGradient: 'Gradiente',
    stateMixing: 'Mezcla',
    stateEquilibrium: 'Equilibrio',
    note: 'La probabilidad del macroestado apunta hacia el máximo desorden.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador de entropía para la segunda ley de la termodinámica y la difusión irreversible',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usa este simulador de entropía para visualizar una de las ideas más importantes de la física: los sistemas aislados evolucionan desde estados artificialmente ordenados hacia estados mezclados más probables. En lugar de leer una definición estática de entropía, puedes ver en tiempo real cómo una cámara caliente y una fría intercambian partículas y energía mientras una curva en vivo sigue el aumento del desorden.',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta está diseñada para la intención de búsqueda más común detrás de preguntas como "por qué aumenta la entropía", "cómo funciona la segunda ley" y "qué es la difusión térmica". El objetivo no es solo dar un eslogan sobre el desorden, sino conectar la entropía con la probabilidad, el flujo de calor, la mezcla y el equilibrio de una manera que se sienta inmediatamente visible.',
    },
    {
      type: 'title',
      text: 'Qué significa la segunda ley de la termodinámica en términos prácticos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La segunda ley dice que, para un sistema aislado, los procesos espontáneos se mueven hacia macroestados con mayor entropía. En lenguaje cotidiano, eso significa que una disposición térmica fuertemente organizada, como partículas calientes en un lado y partículas frías en el otro, no permanece separada a menos que se suministre trabajo continuamente para mantenerla.',
    },
    {
      type: 'paragraph',
      html: 'Eso no ocurre porque la materia "prefiera el caos" en un sentido místico. Ocurre porque hay enormemente más configuraciones microscópicas que corresponden a un estado mezclado que a uno separado. La entropía conecta así la termodinámica con el conteo: cuanto mayor es el número de microestados compatibles, mayor es la entropía.',
    },
    {
      type: 'title',
      text: 'Cómo funciona este simulador de difusión de entropía',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La caja de partículas comienza en una configuración de baja entropía con un desequilibrio de temperatura a través de una barrera. Cuando el paso entre las cámaras está abierto, las partículas cruzan, chocan y transportan energía de un lado al otro. La simulación rastrea dos ingredientes intuitivos: la <strong>entropía espacial</strong>, que aumenta a medida que las partículas se vuelven menos segregadas, y la <strong>entropía térmica</strong>, que aumenta a medida que las distribuciones de energía izquierda y derecha se vuelven menos diferentes.',
    },
    {
      type: 'paragraph',
      html: 'La puntuación total de entropía que se muestra en pantalla es un proxy didáctico construido a partir de esos dos ingredientes. No es una función de estado de laboratorio y no pretende reproducir la mecánica estadística completa. Su propósito es ayudar a los usuarios a construir una intuición correcta: el flujo de calor irreversible y la difusión mueven el sistema hacia el equilibrio porque el equilibrio corresponde a muchas más configuraciones accesibles.',
    },
    {
      type: 'table',
      headers: ['Señal visual', 'Qué representa', 'Por qué es importante'],
      rows: [
        ['Partículas azules vs. naranjas', 'Energía cinética relativa', 'Muestra que las diferencias de temperatura son realmente diferencias en el movimiento microscópico promedio.'],
        ['Apertura de la barrera', 'Facilidad de intercambio entre cámaras', 'Te permite ver por qué la tasa de difusión cambia cuando se modifica la vía de transporte.'],
        ['Medidor de entropía espacial', 'Uniformidad en la distribución de partículas', 'Explica que la mera mezcla ya hace más probable el macroestado.'],
        ['Medidor de entropía térmica', 'Tamaño de la brecha energética izquierda-derecha', 'Muestra que el equilibrio no solo es cuestión de posición sino también de distribución de energía.'],
        ['Curva de entropía', 'Tendencia en el tiempo', 'Convierte la idea abstracta de irreversibilidad en un proceso de relajación unidireccional visible.'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué la entropía puede aumentar aunque cada partícula obedezca un movimiento simple',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los estudiantes a menudo suponen que la segunda ley requiere fricción, intención o una "fuerza especial de la flecha del tiempo". El punto más profundo es estadístico. Cada partícula sigue reglas locales, pero cuando muchas partículas interactúan, el número de macroestados mezclados domina completamente al número de macroestados ordenados. Por lo tanto, el sistema pasa casi todo su tiempo en configuraciones mezcladas y solo una fracción extremadamente pequeña en configuraciones ordenadamente separadas.',
    },
    {
      type: 'paragraph',
      html: 'Por eso una gota de tinte se expande en el agua, por eso una habitación iguala su temperatura después de apagar un calentador, y por eso un objeto caliente se enfría al contacto con uno más frío. El proceso inverso no está prohibido por el movimiento newtoniano en un sentido microscópico estricto, pero es tan estadísticamente improbable para sistemas grandes que efectivamente nunca se observa a escalas humanas.',
    },
    {
      type: 'title',
      text: 'Entropía, equilibrio y conceptos erróneos comunes',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>La entropía no es simplemente "desorden":</strong> la idea más precisa es el número de configuraciones microscópicas compatibles con la misma descripción macroscópica.',
        '<strong>El equilibrio no significa inmovilidad:</strong> las partículas continúan moviéndose constantemente, pero sus desequilibrios a gran escala se cancelan.',
        '<strong>El flujo de calor es direccional porque la probabilidad es direccional:</strong> hay abrumadoramente más formas de compartir energía que de mantenerla nítidamente separada.',
        '<strong>La entropía baja no es imposible:</strong> simplemente requiere restricciones, preparación o trabajo desde fuera del sistema aislado.',
        '<strong>Este simulador es cualitativo:</strong> proporciona intuición física, no calorimetría exacta, funciones de partición ni coeficientes de transporte molecular.',
      ],
    },
    {
      type: 'title',
      text: 'Cuándo usar este simulador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Úsalo para demostraciones en clase, repaso de física, educación química, redacción científica y explicaciones conceptuales rápidas. Es especialmente útil cuando alguien entiende que el calor fluye de caliente a frío pero aún no ve cómo eso se conecta con la probabilidad, el conteo de macroestados y la segunda ley de la termodinámica.',
    },
    {
      type: 'paragraph',
      html: 'Si tu objetivo es un cálculo termodinámico riguroso para un gas real, un ciclo de motor o un sistema de laboratorio, necesitarás ecuaciones de estado, condiciones de contorno y parámetros con base experimental. Si tu objetivo es intuición sobre por qué la difusión es irreversible y por qué la entropía tiende a aumentar, este simulador está construido exactamente para esa pregunta.',
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
