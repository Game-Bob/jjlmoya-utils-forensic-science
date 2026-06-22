import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-sir-epidemias';
const title = 'Simulador SIR de epidemias';
const description = 'Explora la propagación de patógenos con un modelo SIR interactivo que ajusta R0, letalidad, vacunación, período infeccioso, carga máxima y curvas de transmisión en tiempo real.';

const howTo = [
  {
    name: 'Ajusta el número de reproducción basico',
    text: 'Mueve el deslizador de R0 para representar cuantas infecciones secundarias genera una persona infecciosa en una población totalmente susceptible.',
  },
  {
    name: 'Añade vacunación y eficacia vacunal',
    text: 'Aumenta la cobertura o la eficacia de la vacunación para retirar personas protegidas del grupo susceptible y reducir el número de reproducción efectivo.',
  },
  {
    name: 'Modifica la letalidad y la duración infecciosa',
    text: 'Cambia el porcentaje de letalidad y los dias infecciosos para observar como responden los resultados graves y la evolución temporal de la curva.',
  },
  {
    name: 'Interpreta las curvas SIR',
    text: 'Usa el gráfico y el inspector de dias para comparar las curvas de susceptibles, infectados, recuperados y muertes estimadas a lo largo del brote simulado.',
  },
];

const faq = [
  {
    question: '¿Qué muestra un modelo SIR?',
    answer: 'Un modelo SIR divide una población en grupos susceptible, infectado y recuperado. Estima como las personas se mueven entre esos grupos a lo largo del tiempo a medida que ocurren la transmisión y la recuperación.',
  },
  {
    question: '¿Cómo cambia la vacunación la curva?',
    answer: 'La vacunación reduce la población susceptible cuando previene la infección. En este simulador, la vacunación efectiva disminuye el número de reproducción efectivo y puede reducir o retrasar el pico de infección.',
  },
  {
    question: '¿Es R0 lo mismo que Re?',
    answer: 'No. R0 describe la propagación en una población totalmente susceptible. Re es el número de reproducción efectivo tras la inmunidad, la vacunación o cambios de comportamiento que reducen la cantidad de personas que pueden infectarse.',
  },
  {
    question: '¿Por qué la curva de infectados sube hasta un pico y luego baja?',
    answer: 'La curva de infectados desciende cuando cada persona infecciosa genera menos infecciones nuevas que las personas que abandonan el grupo de infectados por recuperación o muerte. El agotamiento de la susceptibilidad es el factor principal en un modelo SIR basico.',
  },
  {
    question: '¿Puede esto predecir una epidemia real?',
    answer: 'Es una herramienta didáctica y de simulación de escenarios, no un pronostico. Los brotes reales necesitan estructura por edades, redes de contacto, geografia, retrasos en la notificación, cambios de comportamiento, variantes, inmunidad decreciente y datos calibrados.',
  },
  {
    question: '¿Cuál es la diferencia entre la tasa de ataque y el pico de infectados?',
    answer: 'La tasa de ataque mide la proporción total de la población infectada al final del brote. El pico de infectados mide el número máximo de personas simultaneamente infecciosas en un momento dado. Un pico bajo no garantiza una tasa de ataque baja, y viceversa.',
  },
  {
    question: '¿Qué significa visualmente un Re por debajo de 1?',
    answer: 'Cuando Re baja de 1, cada persona infecciosa genera menos de una nueva infección en promedio. En el gráfico, la curva de infectados nunca sube abruptamente y puede declinar inmediatamente desde la semilla inicial, lo que significa que el brote no puede sostenerse.',
  },
  {
    question: '¿Cómo afecta el período infeccioso al brote?',
    answer: 'Un período infeccioso más largo prolonga el tiempo durante el cual cada infectado puede transmitir el patógeno. Esto alarga la línea temporal del brote, retrasa el pico y, para el mismo R0, puede producir una curva más ancha con un pico más bajo.',
  },
  {
    question: '¿Por qué la letalidad no cambia la curva de infectados?',
    answer: 'En este modelo SIR, la letalidad sólo afecta el recuento de muertes que se desprende del grupo de recuperados. No retroalimenta la transmisión porque las muertes y las recuperaciones eliminan personas del grupo infeccioso a la misma tasa.',
  },
  {
    question: '¿Qué es el umbral de inmunidad colectiva?',
    answer: 'El umbral de inmunidad colectiva es la fracción de la población que debe ser inmune para que Re caiga por debajo de 1. Se aproxima como 1 - 1/R0. Para el sarampion con R0 alrededor de 12, el umbral supera el 91%. Para la gripe estacional con R0 alrededor de 1,3, el umbral es cercano al 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Escenario epidemico en vivo',
    curveChart: 'Curvas de transmisión SIR',
    inspectDay: 'Inspeccionar día de simulación',
    legend: 'Leyenda de curvas',
    susceptible: 'Susceptibles',
    infected: 'Infectados',
    recovered: 'Recuperados o inmunes',
    deaths: 'Muertes',
    controls: 'Controles de la epidemia',
    modelName: 'Modelo de compartimentos',
    peakInfected: 'Pico de infectados',
    peakDay: 'Dia del pico',
    attackRate: 'Tasa de ataque',
    estimatedDeaths: 'Muertes estimadas',
    r0: 'Numero de reproducción basico R0',
    lethality: 'Letalidad',
    vaccination: 'Cobertura de vacunación',
    vaccineEffectiveness: 'Eficacia vacunal',
    infectiousDays: 'Periodo infeccioso',
    initialInfected: 'Infectados iniciales',
    dayLabel: 'Dia',
    daysUnit: 'dias',
    infectiousLabel: 'infeccioso',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador SIR de epidemias para R0, vacunación, letalidad y curvas de transmisión',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador SIR de epidemias te permite explorar como un patógeno se propaga por una población cuando las personas susceptibles se infectan y luego abandonan el grupo infeccioso mediante recuperación o muerte. Esta disenado para estudiantes, comunicadores científicos, estudiantes de salud pública y cualquier persona que desee una explicación visual rápida de por que pequenos cambios en la transmisión o la inmunidad pueden transformar un brote.',
    },
    {
      type: 'paragraph',
      html: 'Los controles interactivos se centran en las variables que la gente más a menudo quiere probar: <strong>R0</strong>, letalidad, cobertura de vacunación, eficacia vacunal, duración infecciosa y proporción inicial de infectados. El gráfico se actualiza al instante para que las curvas de susceptibles, infectados, recuperados, inmunes y muertes puedan compararse como un sistema epidemico interconectado.',
    },
    {
      type: 'title',
      text: 'Como funciona el modelo SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un modelo SIR basico divide la población en tres compartimentos principales. <strong>S</strong> son las personas susceptibles que aún pueden infectarse. <strong>I</strong> son las personas actualmente infecciosas que pueden transmitir el patógeno. <strong>R</strong> son las personas que ya no son infecciosas porque se recuperaron, ganaron inmunidad o abandonaron la cadena de transmisión de otro modo. Este simulador también registra las muertes estimadas como una rama de resultado grave del grupo que abandona la infección.',
    },
    {
      type: 'paragraph',
      html: 'La tasa de transmisión esta vinculada a R0 y al período infeccioso. Si R0 es alto o las personas permanecen infecciosas durante más tiempo, se generan más infecciones nuevas antes de que el grupo de infectados se reduzca. Si la vacunación elimina suficientes personas del grupo susceptible, el número de reproducción efectivo cae y el pico del brote puede volverse mucho menor.',
    },
    {
      type: 'table',
      headers: ['Control', 'Que modifica', 'Efecto típico en la curva'],
      rows: [
        ['R0', 'Potencial de transmisión antes de considerar inmunidad', 'Un R0 más alto hace que la curva de infectados suba más rápido y alcance un pico más elevado.'],
        ['Cobertura de vacunación', 'Proporción de personas retiradas del grupo susceptible al estar protegidas', 'Una cobertura más alta reduce Re y puede aplanar el brote.'],
        ['Eficacia vacunal', 'Cuanto previene la vacunación la infección en este modelo simplificado', 'Una mayor eficacia hace que la misma cobertura sea más protectora.'],
        ['Periodo infeccioso', 'Tiempo promedio que las personas permanecen infecciosas', 'Una infección más larga cambia la temporalización y puede prolongar el brote.'],
        ['Letalidad', 'Proporción de personas que abandonan la infección y se cuentan como muertes', 'Una letalidad más alta eleva la curva de muertes sin aumentar directamente la transmisión.'],
      ],
    },
    {
      type: 'title',
      text: 'Intuición sobre R0, Re e inmunidad colectiva',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 es el número promedio de casos secundarios causados por una persona infecciosa en una población totalmente susceptible. Re, el número de reproducción efectivo, es menor cuando algunas personas ya son inmunes, estan vacunadas, aisladas o no estan disponibles para la infección. En este simulador, la vacunación efectiva reduce directamente la susceptibilidad, por lo que el Re mostrado disminuye a medida que aumenta la cobertura protegida.',
    },
    {
      type: 'paragraph',
      html: 'Una aproximación comun de inmunidad colectiva es <strong>1 - 1 / R0</strong>. Para un R0 de 3, el umbral es aproximadamente 66,7% de inmunidad efectiva. El simulador ayuda a hacer tangible ese umbral: cuando la vacunación efectiva esta por debajo del umbral, los brotes aún pueden crecer; cuando esta por encima del umbral, la transmisión lucha por mantenerse.',
    },
    {
      type: 'title',
      text: 'Que significa el número de pico de infectados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El pico de infectados es el número máximo de personas simultaneamente infecciosas en la población simulada. A menudo es más importante desde el punto de vista operativo que el total de infecciones porque los hospitales, laboratorios, programas de aislamiento y equipos de rastreo de contactos sufren presión por los casos activos simultaneos. Reducir el pico puede importar incluso cuando la tasa de ataque final no se reduce a cero.',
    },
    {
      type: 'paragraph',
      html: 'La tasa de ataque estima la proporción de la población total infectada al final de la simulación. Una tasa de ataque alta significa que el patógeno alcanzo a muchas personas antes de que la susceptibilidad se agotara o se controlara. Una tasa de ataque baja significa que la inmunidad, la vacunación o una transmisión debil impidieron una propagación amplia.',
    },
    {
      type: 'title',
      text: 'Valores reales de R0 y lo que implican para la inmunidad colectiva',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El número de reproducción basico R0 no es una constante biologica fija para un patógeno. Depende de los patrones de contacto, la densidad de población, los habitos culturales y los factores ambientales. El mismo virus puede tener valores de R0 diferentes en una ciudad densa frente a una zona rural, o en una temporada con más hacinamiento en interiores. Los valores siguientes son rangos de referencia ilustrativos de estudios publicados.',
    },
    {
      type: 'table',
      headers: ['Patogeno', 'Rango típico de R0', 'Umbral de inmunidad colectiva (1 - 1/R0)', 'Caracteristica clave de transmisión'],
      rows: [
        ['Gripe estacional', '1,2 - 1,4', '17% - 29%', 'Periodo infeccioso corto, variación estacional'],
        ['SARS-CoV-2 (ancestral)', '2,0 - 3,0', '50% - 67%', 'Transmisión presintomatica, via aerea'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Mayor carga viral, propagación más rápida'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87% - 92%', 'Evasión inmunitaria, tropismo respiratorio alto'],
        ['Polio', '5,0 - 7,0', '80% - 86%', 'Via fecal-oral, excreción asintomatica prolongada'],
        ['Viruela', '5,0 - 7,0', '80% - 86%', 'Erradicada mediante campana global de vacunación'],
        ['Sarampion', '12,0 - 18,0', '92% - 94%', 'Extremadamente contagioso, aereo, período infeccioso largo'],
        ['Tos ferina', '12,0 - 17,0', '92% - 94%', 'La inmunidad decreciente permite reinfecciones'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Un umbral de inmunidad colectiva alto no significa automaticamente que la vacunación sea inutil cuando la cobertura esta por debajo del umbral. Incluso la inmunidad parcial ralentiza la transmisión, reduce el pico, disminuye los resultados graves y gana tiempo para los sistemas sanitarios. El simulador demuestra este efecto cuando mueves el deslizador de vacunación a traves de valores intermedios.',
    },
    {
      type: 'title',
      text: 'Como cambia el número de reproducción efectivo Re durante un brote',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re es el número de reproducción efectivo en un punto dado del brote. A diferencia de R0, que asume una población totalmente susceptible, Re tiene en cuenta la inmunidad, la vacunación y cualquier otro factor que reduzca la susceptibilidad. En este simulador, Re se calcula como <strong>R0 x (1 - fracción protegida)</strong>, donde la fracción protegida es la proporción de la población efectivamente inmune a traves de la vacunación.',
    },
    {
      type: 'paragraph',
      html: 'El valor de Re que se muestra en el encabezado del simulador se actualiza a medida que mueves los controles. Cuando Re se mantiene por encima de 1, el brote crece. Cuando cae por debajo de 1, cada persona infectada genera menos de una nueva infección en promedio y la epidemia no puede sostenerse. Esta es la idea central del control epidemiológico: llevar y mantener Re por debajo de 1 mediante inmunidad, comportamiento o intervenciones.',
    },
    {
      type: 'title',
      text: 'Tasa de ataque, carga máxima y lo que revelan sobre la gravedad del brote',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La tasa de ataque es la fracción de la población total infectada durante todo el brote simulado. Es la metrica resumen más citada tras una onda epidemica. Una tasa de ataque alta significa que el patógeno infecto a la mayoria de las personas susceptibles antes de que el agotamiento o el control detuvieran la transmisión. Una tasa de ataque baja significa que la inmunidad, la vacunación o una transmisión inherentemente debil impidieron una infección generalizada.',
    },
    {
      type: 'paragraph',
      html: 'El pico de infectados - el número máximo de personas simultaneamente infecciosas - importa más para la presión sanitaria a corto plazo. Una onda con una tasa de ataque moderada pero un pico muy alto y agudo puede desbordar los hospitales incluso si los casos totales no son extremos. Por el contrario, una curva lenta y aplanada puede tener una tasa de ataque similar distribuida en muchas semanas, dando tiempo al sistema sanitario para gestionar los casos. Por eso los funcionarios de salud pública enfatizan <strong>aplanar la curva</strong> como un objetivo operativo distinto de prevenir todas las infecciones.',
    },
    {
      type: 'title',
      text: 'Aplanar la curva y la capacidad sanitaria en el modelo SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La curva de infectados en un modelo SIR puede interpretarse como el número de personas que requieren cuidados simultaneamente. En una epidemia real, cada persona que necesita una cama de hospital, soporte de oxigeno o cuidados intensivos recurre a un conjunto finito de recursos. Cuando la curva de infectados supera la capacidad disponible, la mortalidad por todas las causas aumenta porque el sistema no puede proporcionar atención adecuada.',
    },
    {
      type: 'paragraph',
      html: 'La vacunación, en este modelo, aplana la curva al retirar personas del grupo susceptible antes de que puedan infectarse. Reducir R0 mediante otras medidas - mascarillas, ventilación, distanciamiento, pruebas, aislamiento - también reduciria el pico en un modelo más completo. La simulación hace visible el mecanismo: a medida que aumenta la cobertura de vacunación efectiva, el pico se reduce, se desplaza más tarde o desaparece por completo.',
    },
    {
      type: 'title',
      text: 'Las matematicas detras del modelo SIR visualizadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En el modelo SIR, la tasa de nuevas infecciones por paso de tiempo depende de tres cantidades: la tasa de transmisión <strong>beta</strong>, el número actual de personas infecciosas <strong>I</strong> y la fracción de la población efectiva que aún es susceptible <strong>S / N</strong>. El producto <strong>beta x I x S / N</strong> se denomina fuerza de la infección. Cada día, esta fuerza determina cuantas personas susceptibles pasan al compartimento de infectados.',
    },
    {
      type: 'paragraph',
      html: 'Las personas abandonan el compartimento de infectados a la tasa de recuperación <strong>gamma = 1 / período infeccioso</strong>. El equilibrio entre la fuerza de la infección y la tasa de recuperación determina si la epidemia crece o se contrae. Cuando beta x S / N supera a gamma, las nuevas infecciones superan a las recuperaciones y el brote se expande. Cuando la fracción susceptible S / N ha disminuido lo suficiente, gamma domina y el brote se contrae.',
    },
    {
      type: 'paragraph',
      html: 'El parametro <strong>beta</strong> no es directamente visible en la interfaz. En su lugar, se deriva de R0 y del período infeccioso mediante la relación <strong>beta = R0 x gamma</strong>. Por eso cambiar R0 o el período infeccioso produce formas de curva similares pero no identicas. Ambos parametros influyen en la fuerza de la infección, pero el período infeccioso también estira el eje temporal del brote.',
    },
    {
      type: 'title',
      text: 'Como usar este simulador para aprender y ensenar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Compara escenarios de R0 alto vs. bajo:</strong> ajusta R0 a 1,5 (rango de la gripe estacional) y luego a 6,0 (rango de la polio prevacunación). Observa como cambian la altura del pico, el momento del pico y la tasa de ataque incluso cuando todos los demas controles son identicos.',
        '<strong>Explora el umbral de inmunidad colectiva:</strong> comienza con R0 en 3,0 y sin vacunación. Anota la tasa de ataque. Luego anade cobertura de vacunación hasta que Re caiga por debajo de 1. Compara el pico y la tasa de ataque con una cobertura justo por debajo y justo por encima del umbral.',
        '<strong>Prueba el efecto de una respuesta lenta vs. rápida:</strong> ajusta la cobertura de vacunación a diferentes niveles y observa cuando ocurre el pico. Una cobertura más alta no sólo reduce la altura del pico, sino que generalmente lo retrasa, ganando tiempo para la preparación sanitaria.',
        '<strong>Separa la letalidad de la transmisión:</strong> ajusta la letalidad al 0% y observa la curva de infectados. Luego ajusta la letalidad al 10% sin cambiar los demas parametros. La curva de infectados no cambia, pero el número de muertos aumenta. Esto demuestra por que la tasa de letalidad y la velocidad de transmisión son dimensiones epidemiológicas distintas.',
        '<strong>Examina el efecto del período infeccioso:</strong> compara un período infeccioso de 4 dias con uno de 18 dias para el mismo R0. El período más largo estira la curva, retrasa el pico y produce una onda más larga pero más baja.',
        '<strong>Ejercicio en clase - encuentra el umbral:</strong> pide a los estudiantes que encuentren la cobertura de vacunación mínima que lleva Re por debajo de 1 para un R0 dado, y luego comparen el resultado con la formula 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Cuando y por que usar este simulador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Estudiantes de epidemiologia:</strong> conecta el marco matematico SIR con formas de curva interactivas antes de trabajar con ecuaciones diferenciales o programar tus propios modelos.',
        '<strong>Comunicadores científicos y periodistas:</strong> genera gráficos, capturas de pantalla o explicaciones en vivo que muestren por que R0, la vacunación y el período infeccioso importan para la trayectoria de los brotes.',
        '<strong>Estudiantes de salud pública:</strong> prueba como diferentes combinaciones de intervenciones desplazan el pico epidemico y la tasa de ataque para desarrollar intuición sobre las compensaciones en la respuesta a brotes.',
        '<strong>Cualquier persona curiosa sobre las matematicas de epidemias:</strong> explora el modelo SIR sin necesidad de escribir codigo ni instalar software. Cada control actualiza el gráfico en tiempo real.',
      ],
    },
    {
      type: 'title',
      text: 'Extensiones del modelo: SEIR, SIRS y más alla',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Este simulador utiliza una estructura SIR basica. Varias extensiones comunes anaden realismo. Un <strong>modelo SEIR</strong> anade un compartimento de expuestos (E) para personas infectadas pero aún no infecciosas, que representa el período de incubación. El grupo de expuestos retrasa el pico epidemico hacia afuera en comparación con el modelo SIR porque las infecciones pasan tiempo en la fase latente antes de contribuir a la transmisión.',
    },
    {
      type: 'paragraph',
      html: 'Un <strong>modelo SIRS</strong> permite que los individuos recuperados pierdan inmunidad con el tiempo y reingresen al compartimento susceptible. Esto modela patógenos como la tos ferina o el SARS-CoV-2 con inmunidad decreciente y produce ondas epidemicas sostenidas o recurrentes. Un <strong>modelo con estructura por edades</strong> divide la población en grupos etarios con diferentes matrices de contacto y perfiles de gravedad, lo cual es esencial para enfermedades donde ninos y ancianos tienen resultados muy diferentes.',
    },
    {
      type: 'paragraph',
      html: 'Otras extensiones anaden propagación geográfica (modelos metapoblacionales), cambios de comportamiento (tasas de contacto adaptativas), ruido estocastico (para poblaciones pequenas donde la extinción aleatoria importa) y temporización de intervenciones (cierres de escuelas, confinamientos, restricciones de viaje que se activan y desactivan). Cada extensión anade complejidad esencial para el pronostico, pero puede oscurecer la dinámica de transmisión central que el modelo SIR basico ilustra de forma clara.',
    },
    {
      type: 'title',
      text: 'Limitaciones de este simulador de epidemias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Este es un modelo SIR deterministico compacto. No incluye grupos de edad, estructura de hogares, escuelas, viajes, superpropagación, períodos de incubación, transmisión asintomatica, estacionalidad, variantes, inmunidad decreciente, cambios de comportamiento, retrasos en las pruebas ni intervenciones de salud pública que se activan y desactivan con el tiempo. Estos detalles son esenciales para un pronostico real.',
    },
    {
      type: 'paragraph',
      html: 'El modelo asume una población bien mezclada donde cada persona susceptible tiene la misma probabilidad de contacto con cada persona infecciosa. Las poblaciones reales tienen redes de contacto con fuerte agrupamiento, assortatividad por edad, estructura geográfica y variación individual en la capacidad de infección. Estas caracteristicas pueden crear un crecimiento inicial más lento, eventos de superpropagación y patrones de brote heterogeneos que un modelo homogeneo no captura.',
    },
    {
      type: 'paragraph',
      html: 'Usa el simulador para comprender mecanismos y comparar escenarios, no para tomar decisiones médicas, politicas o de emergencia. La evaluación de epidemias en el mundo real requiere datos de vigilancia, contexto local, analisis de incertidumbre y modelización epidemiológica especializada.',
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
