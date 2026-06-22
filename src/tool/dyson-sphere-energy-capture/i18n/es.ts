import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-captura-energia-esfera-dyson';
const title = 'Simulador de Captura de Energia de una Esfera de Dyson';
const description = 'Estime disenos de enjambre, anillo, cascaron y nube de estatitos de Dyson para diferentes estrellas. Calcule la potencia capturada, el radio orbital, la masa de material y la cobertura necesaria para alcanzar una escala Kardashev objetivo.';

const howTo = [
  {
    name: 'Elija un tipo de estrella',
    text: 'Comience con una enana M, una estrella similar al Sol, una estrella tipo A, una gigante roja o una gigante azul. El simulador usa valores representativos de luminosidad y masa para estimar el radio del colector y el periodo orbital.',
  },
  {
    name: 'Seleccione la arquitectura de la megaestructura',
    text: 'Compare un enjambre de Dyson, un anillo ecuatorial, un cascaron rigido o una nube de espejos estatitos. Cada diseno tiene diferente eficiencia de captura, densidad de material y supuestos de estabilidad.',
  },
  {
    name: 'Ajuste la cobertura y la temperatura de operacion',
    text: 'Aumente la cobertura para capturar mas potencia estelar, luego ajuste la temperatura de operacion para acercar o alejar los colectores de la estrella.',
  },
  {
    name: 'Seleccione un objetivo Kardashev',
    text: 'Use el control deslizante de objetivo para ver cuanta parte de la estrella debe ser cubierta para alcanzar una meta de potencia a escala civilizatoria.',
  },
];

const faq = [
  {
    question: '¿Cuál es la diferencia entre una esfera de Dyson y un enjambre de Dyson?',
    answer: 'Una esfera de Dyson rigida es un cascaron continuo alrededor de una estrella, mientras que un enjambre de Dyson es una gran coleccion de colectores orbitales independientes. La mayoria de las discusiones de ingenieria favorecen los enjambres porque un cascaron solido seria estructuralmente inestable y extremadamente intensivo en materiales.',
  },
  {
    question: '¿Cómo elige el simulador el radio optimo?',
    answer: 'Estima la distancia donde los colectores que irradian por ambos lados alcanzan la temperatura de operacion seleccionada bajo la luminosidad estelar elegida. Los colectores mas calientes pueden orbitar mas cerca, mientras que los colectores mas frios requieren radios mayores.',
  },
  {
    question: '¿Qué significa la calificacion Kardashev aqui?',
    answer: 'El valor Kardashev se calcula a partir de la potencia capturada usando la forma logaritmica comun K = (log10(P) - 6) / 10, donde P es la potencia en vatios. Un valor cercano a K1 representa uso de energia a escala planetaria, mientras que K2 se aproxima a la produccion estelar completa.',
  },
  {
    question: '¿Es realista la masa de material?',
    answer: 'Es una estimacion educativa de primer orden basada en el area del colector, la densidad superficial y un factor de estabilidad. Los disenos reales necesitarian mantenimiento de posicion, transmision de energia, perdidas mineras, redundancia, disipacion de calor e infraestructura de fabricacion.',
  },
  {
    question: '¿Por qué las estrellas brillantes requieren sistemas de colectores tan grandes?',
    answer: 'Las estrellas de alta luminosidad empujan el radio termico seguro hacia afuera. Eso aumenta el area superficial necesaria para una fraccion de cobertura dada, por lo que la demanda de material puede aumentar mas rapido de lo que la potencia capturada parece intuitivamente.',
  },
  {
    question: '¿Puede una civilizacion alcanzar el Tipo II de Kardashev con cobertura parcial?',
    answer: 'Si, si la estrella anfitriona es lo suficientemente brillante y los colectores son eficientes. Alrededor de una estrella similar al Sol, alcanzar cerca del Tipo II requiere capturar una gran fraccion de la luminosidad solar, pero alrededor de estrellas mas luminosas, el mismo objetivo de potencia puede necesitar una fraccion de cobertura menor.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualizacion del colector Dyson',
    starType: 'Tipo de estrella',
    structureType: 'Estructura',
    coverage: 'Cobertura del colector',
    operatingTemp: 'Temperatura de operacion',
    kardashevTarget: 'Objetivo Kardashev',
    kardashevRating: 'Calificacion actual',
    capturedPower: 'Potencia capturada',
    optimalRadius: 'Radio optimo',
    targetCoverage: 'Cobertura objetivo',
    materialMass: 'Masa de material',
    captureMeter: 'Progreso hacia el objetivo',
    statusReady: 'Ajuste el sistema para estimar la demanda del colector.',
    statusUnderbuilt: 'La cobertura esta por debajo del objetivo Kardashev seleccionado. Anada colectores o elija una estrella mas brillante.',
    statusBalanced: 'La cobertura y la salida estelar estan cerca del objetivo de escala civilizatoria seleccionado.',
    statusExtreme: 'Esta configuracion supera el objetivo. Captura una potencia enorme, pero la demanda de material crece rapido.',
    orbitalPeriod: 'Periodo orbital',
    collectorArea: 'Area del colector',
    mercuryMasses: '{value} masas de Mercurio',
    kilograms: '{value} kg',
    daysUnit: '{value} dias',
    starMDwarf: 'Enana M',
    starSun: 'Estrella tipo G como el Sol',
    starA: 'Estrella tipo A',
    starRedGiant: 'Gigante roja',
    starBlueGiant: 'Gigante azul',
    structureSwarm: 'Enjambre de Dyson',
    structureRing: 'Anillo ecuatorial',
    structureShell: 'Cascaron rigido',
    structureStatite: 'Nube de espejos estatitos',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador de Captura de Energia de una Esfera de Dyson',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una esfera de Dyson no es solo una imagen de ciencia ficcion de una estrella dentro de un cascaron. Es una familia de posibles conceptos de megaestructura para interceptar la luminosidad estelar: enjambres de satelites, anillos ecuatoriales, nubes delgadas de espejos y el famoso pero problematico cascaron rigido. Este simulador convierte esas ideas en numeros para que pueda comparar como el tipo de estrella, la temperatura del colector, la cobertura y el diseno de la estructura cambian el presupuesto energetico.',
    },
    {
      type: 'paragraph',
      html: 'La calculadora estima la potencia capturada, el radio termico orbital, el area del colector, el periodo orbital, la masa de material y la cobertura necesaria para un objetivo de escala Kardashev seleccionado. Esta construida para estudiantes, constructores de mundos, comunicadores cientificos y cualquiera que intente entender por que las civilizaciones Tipo II son dificiles: el desafio no es solo la potencia, sino el area, el calor, la mineria, la estabilidad y la logistica orbital.',
    },
    {
      type: 'title',
      text: 'Como se estima el radio de Dyson',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El radio optimo se calcula a partir de la luminosidad estelar y la temperatura de operacion del colector. Un colector cerca de una estrella brillante recibe un flujo intenso y debe funcionar caliente o rechazar enormes cantidades de calor. Moverse hacia afuera reduce el estres termico, pero el area del colector requerida crece con el cuadrado de la distancia. Esta compensacion explica por que la misma fraccion de cobertura puede ser modesta alrededor de una enana M debil y enorme alrededor de una gigante azul.',
    },
    {
      type: 'title',
      text: 'Enjambre de Dyson, Anillo, Cascaron y Nube de Estatitos Comparados',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Enjambre de Dyson:</strong> muchos colectores orbitales independientes. Es la arquitectura a gran escala mas plausible porque puede construirse gradualmente y no requiere un cascaron estelar rigido.',
        '<strong>Anillo ecuatorial:</strong> una banda de colectores mas estrecha con menor eficiencia de cobertura. Es mas facil de imaginar como primera megaestructura, pero no puede capturar la produccion estelar completa sin convertirse en un enjambre mas amplio.',
        '<strong>Cascaron rigido:</strong> iconicamente visual pero mecanicamente desfavorable. Un cascaron alrededor de una estrella tiene graves problemas de estabilidad y material, por lo que el simulador le asigna alta masa y baja estabilidad.',
        '<strong>Nube de espejos estatitos:</strong> reflectores ultraligeros sostenidos parcialmente por presion de radiacion. Reduce la demanda de material pero tiene menor tolerancia termica y exigentes requisitos de control.',
      ],
    },
    {
      type: 'title',
      text: 'Cobertura necesaria para la escala Kardashev',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La escala Kardashev expresa el uso de energia de la civilizacion logaritmicamente. En esta herramienta, los vatios capturados se convierten en una calificacion K usando K = (log10(P) - 6) / 10. Un enjambre de Dyson parcial alrededor del Sol puede superar el uso energetico humano actual por muchos ordenes de magnitud mucho antes de alcanzar el estado completo de Tipo II. El resultado de cobertura objetivo muestra la fraccion de luminosidad estelar que debe ser interceptada para el objetivo seleccionado.',
    },
    {
      type: 'table',
      headers: ['Eleccion de diseno', 'Ventaja principal', 'Principal cuello de botella'],
      rows: [
        ['Enjambre de Dyson', 'Construible por etapas con orbitas independientes', 'Control de trafico y transmision de energia'],
        ['Anillo ecuatorial', 'Menor area inicial y geometria mas simple', 'Cobertura limitada'],
        ['Cascaron rigido', 'Intercepcion maxima en un diagrama simple', 'Inestabilidad estructural y masa enorme'],
        ['Nube de estatitos', 'Densidad superficial muy baja', 'Mantenimiento de posicion preciso y limites termicos'],
      ],
    },
    {
      type: 'title',
      text: 'Masa de material y verificacion de mineria realista',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La estimacion de material multiplica el area del colector por una densidad superficial supuesta y un factor de estabilidad de diseno. Reporta intencionalmente la masa en masas de Mercurio cuando el numero se vuelve astronomico, porque muchas discusiones sobre enjambres de Dyson imaginan desmantelar planetas pequenos o asteroides para obtener materia prima. Incluso los colectores delgados se vuelven masivos cuando se extienden sobre escalas de unidades astronomicas.',
    },
    {
      type: 'paragraph',
      html: 'Use el resultado como una guia de orden de magnitud en lugar de un plano. La ingenieria real de megaestructuras necesitaria modelos de dano por radiacion, ciclos termicos, evasion de colisiones, control de actitud, transmision de energia, rendimiento de fabricacion y evolucion orbital a largo plazo. El valor del simulador es que hace visibles las primeras restricciones de inmediato.',
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
