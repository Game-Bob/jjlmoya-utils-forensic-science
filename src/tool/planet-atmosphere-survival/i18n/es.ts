const slug = 'calculadora-supervivencia-atmosfera-planetaria';
const title = 'Calculadora de Supervivencia en Atmósferas Planetarias';
const description = '¿Cuánto tiempo puede sobrevivir sin traje espacial en Marte, Venus, Titán, Júpiter o el Everest? Esta calculadora interactiva estima el tiempo de supervivencia humana sin protección a partir de la presión, temperatura, oxígeno, dióxido de carbono, toxicidad y peligros del viento.';

const howTo = [
  {
    name: 'Elija un destino para cargar datos reales de la atmósfera',
    text: 'Seleccione Marte, Venus, Titán, Júpiter o la cima del Everest como valor preestablecido para establecer instantáneamente valores realistas de presión, temperatura, mezcla de gases y viento para ese entorno.',
  },
  {
    name: 'Ajuste las condiciones para explorar el punto de inflexión',
    text: 'Mueva los controles deslizantes de presión, temperatura, oxígeno y dióxido de carbono para ver qué peligro se vuelve letal primero. Pequeños cambios pueden desplazar completamente el factor limitante.',
  },
  {
    name: 'Lea el reloj de supervivencia y el eslabón más débil',
    text: 'El temporizador muestra el tiempo estimado antes de que se produzca un estrés biológico grave. La etiqueta del factor limitante le indica exactamente qué peligro es la amenaza más urgente en este momento.',
  },
  {
    name: 'Compare los peligros visualmente en el mapa de riesgos',
    text: 'Los radios y el gráfico de la línea de tiempo muestran cómo la presión, el calor, el frío, la hipoxia, la toxicidad y el viento contribuyen al riesgo total a lo largo del tiempo.',
  },
];

const faq = [
  {
    question: '¿Puede un ser humano sobrevivir en Marte sin traje espacial?',
    answer: 'No. Marte tiene una presión extremadamente baja (menos del 1 % de la de la Tierra), casi nada de oxígeno respirable y una atmósfera compuesta principalmente de dióxido de carbono. La pérdida del conocimiento se produciría en segundos y las lesiones graves en minutos sin soporte de presión y oxígeno.',
  },
  {
    question: '¿Por qué es tan crítica la presión atmosférica para la supervivencia humana?',
    answer: 'Por debajo del límite de Armstrong (aproximadamente 6,3 kPa), el agua puede hervir a la temperatura corporal. La presión baja también impide que el oxígeno entre en el torrente sanguíneo incluso si el aire es 100 % oxígeno. Por eso la presión es uno de los peligros letales más rápidos.',
  },
  {
    question: '¿Qué planeta tiene la atmósfera más habitable?',
    answer: 'Entre los destinos del Sistema Solar, la Tierra a gran altitud (Everest) es la más habitable, aunque sigue siendo peligrosa sin aclimatación. Titán es la menos hostil de las otras opciones porque su presión es manejable, pero carece de oxígeno y es criogénicamente frío. Ningún planeta o luna aparte de la Tierra tiene una atmósfera respirable.',
  },
  {
    question: '¿Es Venus peor por el calor o por la presión?',
    answer: 'Ambos son extremos en la superficie. Venus tiene una presión aplastante (92 veces la de la Tierra) y una temperatura superficial más caliente que un horno de cocina. Estos peligros actúan juntos, por lo que la herramienta señala ambos como amenazas dominantes inmediatas.',
  },
  {
    question: '¿Por qué Titán tiene una estimación de supervivencia más larga que Marte?',
    answer: 'Titán tiene una atmósfera densa, por lo que la presión en sí misma no es un problema inmediato. El tiempo de supervivencia está limitado por el frío extremo (alrededor de -180 grados C) y la ausencia total de oxígeno. Marte falla por la presión, Titán falla por la temperatura.',
  },
  {
    question: '¿Cuáles son las principales causas de muerte en el espacio sin traje?',
    answer: 'Los asesinos más rápidos son la exposición al vacío (pérdida de presión que causa ebullismo e hipoxia en segundos), seguidos de la temperatura extrema, la composición de gases tóxicos y la pérdida de calor por el viento. La calculadora rastrea las seis categorías de peligro.',
  },
  {
    question: '¿Es esta herramienta adecuada para la planificación de misiones espaciales?',
    answer: 'No. Es un modelo educativo que utiliza umbrales biológicos simplificados. El análisis real de descompresión, hipoxia, gases tóxicos, lesiones térmicas y riesgos de misión requiere evaluación experta médica y de ingeniería para la seguridad.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Mapa de riesgo atmosférico',
    timeline: 'Cronología de riesgo biológico',
    controls: 'Controles de la atmósfera',
    destination: 'Destino',
    pressure: 'Presión',
    temperature: 'Temperatura',
    oxygen: 'Oxígeno',
    co2: 'Dióxido de carbono',
    limitingFactor: 'Factor limitante',
    verdict: 'Veredicto',
    exposureSummary: 'Resumen de exposición',
    atmosphericModel: 'Modelo de exposición atmosférica',
    survivalEnvelope: 'envolvente de supervivencia',
    survival: 'Supervivencia',
    mode: 'Modo',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitSystem: 'Sistema de unidades',
    vitalStress: 'estrés vital',
    timeLabel: 'tiempo',
    estimatedSurvival: 'supervivencia estimada',
    hazardPressure: 'Presión',
    hazardTemperature: 'Temperatura',
    hazardOxygen: 'Oxígeno',
    hazardToxicity: 'Toxicidad',
    hazardWind: 'Viento',
    presetMars: 'Marte',
    presetVenus: 'Superficie de Venus',
    presetTitan: 'Titán',
    presetJupiter: 'Capa de nubes de Júpiter',
    presetEverest: 'Tierra, cima del Everest',
    noteMars: 'Casi vacío, frío extremo y casi nada de oxígeno respirable.',
    noteVenus: 'Presión aplastante y calor de horno dominan inmediatamente.',
    noteTitan: 'Aire denso de nitrógeno pero frío letal y nada de oxígeno.',
    noteJupiter: 'Atmósfera rica en hidrógeno, frío severo y vientos violentos.',
    noteEverest: 'Supervivencia posible para escaladores entrenados, pero la hipoxia y el frío son graves.',
    verdictSeconds: 'Segundos',
    verdictMinutes: 'Minutos',
    verdictHours: 'Horas',
    verdictExtended: 'Riesgo de exposición prolongada',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Supervivencia en Atmósferas Planetarias: ¿Cuánto tiempo puede sobrevivir sin traje espacial en Marte, Venus, Titán o Júpiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Si estuviera expuesto repentinamente a la atmósfera de otro planeta sin traje espacial, ¿cuánto tiempo sobreviviría? Esta calculadora estima el tiempo de supervivencia humano sin protección en Marte, Venus, Titán, Júpiter y el Everest simulando seis peligros: presión total, disponibilidad de oxígeno, temperatura, concentración de dióxido de carbono, química tóxica y estrés del viento. Responde las preguntas que los entusiastas del espacio y los estudiantes hacen con más frecuencia: qué planeta lo mata más rápido, qué peligro es la verdadera amenaza y qué necesitaría para sobrevivir.',
    },
    {
      type: 'paragraph',
      html: 'El resultado es una estimación educativa, no un número para la planificación de misiones. Está diseñado para ayudar a comparar por qué diferentes mundos son peligrosos de formas muy distintas. Marte falla por presión e hipoxia en segundos. Venus combina presión aplastante con calor de horno. Titán es criogénico y no tiene oxígeno. Las cubiertas de nubes de los gigantes gaseosos añaden composiciones tóxicas y vientos supersónicos. Cada entorno enseña algo diferente sobre lo que hace que la Tierra sea únicamente habitable.',
    },
    {
      type: 'title',
      text: '¿Qué planeta tiene la atmósfera más habitable?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entre los destinos de esta calculadora, los entornos de gran altitud de la Tierra (como la cima del Everest) son los más habitables, aunque siguen siendo peligrosos sin preparación. Entre los otros planetas, Titán tiene la presión más tolerante, pero falla en temperatura y oxígeno. Ningún destino aparte de la Tierra ofrece actualmente una atmósfera respirable. La calculadora le ayuda a ver exactamente por qué falla cada mundo y qué peligro cruza primero el umbral crítico.',
    },
    {
      type: 'title',
      text: 'Cómo afecta cada peligro al cuerpo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Presión (baja):</strong> por debajo de 6,3 kPa, los líquidos corporales pueden hervir (ebullismo). Incluso por encima de eso, la presión baja impide la absorción de oxígeno. Este es el asesino más rápido en entornos de casi vacío.',
        '<strong>Presión (alta):</strong> la presión extrema comprime los gases respiratorios, aumenta el riesgo de narcosis por nitrógeno y puede dañar mecánicamente los pulmones y los senos paranasales.',
        '<strong>Presión parcial de oxígeno:</strong> el oxígeno respirable depende tanto del porcentaje de gas como de la presión total. Una atmósfera delgada puede tener un 21 % de oxígeno y aun así causar hipoxia.',
        '<strong>Temperatura (calor):</strong> por encima de aproximadamente 60 grados C, la desnaturalización de proteínas y la insuficiencia orgánica comienzan rápidamente. La temperatura superficial de Venus supera los 460 grados C.',
        '<strong>Temperatura (frío):</strong> por debajo del punto de congelación, se producen congelación e hipotermia. A temperaturas criogénicas como los -180 grados C de Titán, la congelación de los tejidos es casi inmediata.',
        '<strong>Toxicidad del dióxido de carbono:</strong> el CO2 por encima de aproximadamente el 5 % causa mareos, dolor de cabeza y pérdida del conocimiento. Muchas atmósferas planetarias son principalmente CO2.',
        '<strong>Química tóxica:</strong> los compuestos de azufre, amoníaco, metano e hidrógeno pueden ser corrosivos, asfixiantes o químicamente peligrosos.',
        '<strong>Viento:</strong> los vientos fuertes aceleran la pérdida de calor por convección, causan sensación térmica, lanzan escombros y pueden desestabilizar físicamente a una persona.',
      ],
    },
    {
      type: 'title',
      text: 'Marte: Por qué la presión baja mata antes que cualquier otra cosa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Marte tiene una presión superficial de aproximadamente 0,6 kPa, muy por debajo del límite de Armstrong de 6,3 kPa donde el agua puede hervir a la temperatura corporal. La exposición sin protección causaría ebullismo, hipoxia rápida y pérdida del conocimiento en menos de 15 segundos. Incluso si se tienen en cuenta el frío (promedio de -60 grados C) y la atmósfera rica en dióxido de carbono, la presión y la privación de oxígeno dominan la línea de tiempo. Una prenda de presión funcional y un suministro de oxígeno son el mínimo absoluto para sobrevivir en Marte.',
    },
    {
      type: 'title',
      text: 'Venus: Presión extrema y calor actuando juntos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La superficie de Venus tiene una presión de 92 atmósferas terrestres (aproximadamente 9,3 MPa, equivalente a estar a 900 metros bajo el agua) y una temperatura superficial de 462 grados C. La atmósfera es 96 % dióxido de carbono con nubes de ácido sulfúrico. Estos peligros actúan simultáneamente en lugar de secuencialmente: la presión aplasta, el calor cocina y el CO2 envenena. En esta calculadora, Venus es el único destino donde múltiples peligros cruzan el umbral letal casi al mismo instante.',
    },
    {
      type: 'title',
      text: 'Titán: La presión más amigable del Sistema Solar fuera de la Tierra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La luna de Saturno, Titán, es inusual porque su presión superficial (aproximadamente 147 kPa, o 1,45 veces la de la Tierra) está realmente dentro de un rango que un humano podría tolerar. No se necesitaría un traje de presión solo por esa variable. Sin embargo, Titán no tiene prácticamente oxígeno, una temperatura superficial de -179 grados C y una atmósfera de metano y nitrógeno. La calculadora muestra la presión como manejable, pero la temperatura y la privación de oxígeno dominan inmediatamente. Titán es un recordatorio de que la supervivencia depende de todo el perfil de peligros, no solo de una medición.',
    },
    {
      type: 'title',
      text: 'Cómo interpretar el reloj de supervivencia y el mapa de riesgos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El reloj de supervivencia estima el intervalo antes de que se produzca un estrés biológico grave en una persona sin protección. La etiqueta del factor limitante identifica qué peligro cruza primero el umbral crítico. Los radios de peligro radiales muestran la gravedad relativa de cada uno de los seis peligros registrados, y el gráfico de la línea de tiempo muestra cómo se acumula el riesgo combinado durante la ventana de exposición. Estas herramientas visuales le ayudan a ver de un vistazo por qué un entorno determinado es peligroso y qué sistema de protección sería más importante.',
    },
    {
      type: 'table',
      headers: ['Destino', 'Peligros mortales', 'Amenaza más rápida', 'Lo que un traje debe solucionar'],
      rows: [
        ['Marte', 'Casi vacío, hipoxia, frío, CO2', 'Presión < límite de Armstrong', 'Prenda de presión, oxígeno, aislamiento térmico'],
        ['Superficie de Venus', 'Presión aplastante, calor de 462 grados C, CO2, ácido sulfúrico', 'Presión y calor simultáneamente', 'Enfriamiento pesado, casco de presión, aparato de respiración'],
        ['Titán', 'Sin oxígeno, frío de -179 grados C, metano', 'Temperatura e hipoxia', 'Suministro de oxígeno, protección térmica extrema'],
        ['Capa de nubes de Júpiter', 'Sin oxígeno, rico en hidrógeno, frío, viento fuerte', 'Hipoxia y falta de gas respirable', 'Sistema de respiración sellado, control térmico'],
        ['Cima del Everest', 'Hipoxia, frío, viento', 'Presión parcial de oxígeno demasiado baja', 'Máscara de oxígeno, equipo para frío, aclimatación'],
      ],
    },
    {
      type: 'title',
      text: '¿Qué se necesitaría para sobrevivir sin traje espacial?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realistamente, ningún cuerpo conocido del Sistema Solar aparte de la Tierra permite la supervivencia humana sin protección durante más de unos minutos, y la mayoría mata en segundos. El valor de esta calculadora no está en encontrar un planeta seguro, sino en comprender las razones específicas por las que cada entorno es hostil. Este conocimiento guía la educación en ciencias planetarias, el diseño de hábitats espaciales, las prioridades de entrenamiento de astronautas y la búsqueda de exoplanetas potencialmente habitables donde una atmósfera podría realmente sustentar la vida.',
    },
    {
      type: 'list',
      items: [
        '<strong>Úselo para aprender:</strong> vea cómo cambiar una variable, como duplicar la presión en Marte, cambia la ventana de supervivencia.',
        '<strong>Úselo para comparar:</strong> contraste por qué Titán da más tiempo que Venus a pesar de que ambos son insuperables.',
        '<strong>Úselo para discutir:</strong> explore lo que necesitaría una atmósfera terraformada para alcanzar condiciones respirables.',
        '<strong>No lo use para decisiones reales:</strong> la calculadora utiliza umbrales simplificados. La planificación de emergencias requiere medicina aeroespacial profesional.',
      ],
    },
    {
      type: 'title',
      text: 'Limitaciones importantes y propósito educativo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La supervivencia real depende de la salud individual, la ropa, el nivel de esfuerzo, la humedad, la radiación solar, el historial de descompresión, la mezcla de gases respiratorios, el momento del rescate y muchas otras variables. Los datos de la atmósfera planetaria también varían según la altitud, la estación y la fuente de medición. Esta herramienta utiliza umbrales biológicos simplificados y datos ambientales representativos para la educación científica. Está diseñada para ayudar a estudiantes, profesores, entusiastas del espacio y escritores científicos a comprender la habitabilidad planetaria, no para guiar operaciones espaciales reales.',
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