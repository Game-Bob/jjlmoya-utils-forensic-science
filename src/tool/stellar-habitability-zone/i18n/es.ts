import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'zona-habitable-estelar';
const description = 'Calcula y visualiza la zona habitable (zona de Ricitos de Oro) alrededor de diferentes tipos de estrellas mediante configuraciones estelares y planetarias.';
const title = 'Simulador de Zona Habitable Estelar: Encuentra Zonas de Ricitos de Oro';

const howTo = [
  {
    name: 'Selecciona un preset estelar',
    text: 'Elige un tipo de estrella, desde gigantes azules hasta enanas rojas, para cargar propiedades físicas estándar como masa, luminosidad y temperatura.',
  },
  {
    name: 'Ajusta los parámetros planetarios',
    text: 'Modifica la distancia orbital del planeta (semieje mayor), el albedo y el efecto invernadero de la atmósfera mediante los deslizadores interactivos.',
  },
  {
    name: 'Analiza la órbita y la habitabilidad',
    text: 'Observa la órbita del planeta en tiempo real. Comprueba si las temperaturas de equilibrio y de superficie permiten la existencia de agua líquida.',
  },
];

const faq = [
  {
    question: '¿Qué es la zona de habitabilidad circunestelar?',
    answer: 'La zona de habitabilidad circunestelar (a menudo llamada zona de Ricitos de Oro) es la región alrededor de una estrella donde las temperaturas en la superficie planetaria son idóneas para mantener agua líquida bajo una presión atmosférica dada. Se define mediante límites conservadores y optimistas basados en la luminosidad y la temperatura efectiva de la estrella.',
  },
  {
    question: '¿Cómo afecta la luminosidad estelar a la zona habitable?',
    answer: 'La luminosidad estelar determina la energía total emitida por la estrella. Las estrellas más calientes y masivas (como las de tipo O, B o A) son extremadamente brillantes, por lo que su zona habitable se sitúa mucho más lejos. Las estrellas más frías y menos masivas (como las enanas rojas de tipo K o M) tienen luminosidades bajas, desplazando su zona habitable muy cerca de ellas.',
  },
  {
    question: '¿Cuál es la diferencia entre temperatura de equilibrio y de superficie?',
    answer: 'La temperatura de equilibrio es la temperatura teórica que tendría un planeta asumiendo que se comporta como un cuerpo negro que absorbe la radiación estelar y la vuelve a irradiar al espacio. La temperatura de superficie incluye el efecto invernadero de la atmósfera del planeta, que atrapa el calor y calienta aún más el planeta.',
  },
  {
    question: '¿Por qué es importante el albedo para la habitabilidad planetaria?',
    answer: 'El albedo es la medida de la reflectividad de la superficie de un planeta. Un albedo más alto (cercano a 1.0) significa que el planeta refleja más luz estelar entrante, enfriándolo. Un albedo más bajo significa que se absorbe más radiación, elevando su temperatura general.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulador de Zona Habitable Estelar',
    starPresetsLabel: 'Preajustes Espectrales',
    customStarHeader: 'Parámetros Estelares',
    starTemperature: 'Temperatura Efectiva (K)',
    starLuminosity: 'Luminosidad (L/L⊙)',
    starMass: 'Masa (M/M⊙)',
    starRadius: 'Radio (R/R⊙)',
    planetHeader: 'Parámetros Planetarios',
    planetDistance: 'Distancia Orbital (UA)',
    planetAlbedo: 'Albedo de Bond',
    greenhouseDelta: 'Efecto Invernadero (K)',
    resultsHeader: 'Resultados de la Simulación',
    stellarFluxResult: 'Flujo Estelar Recibido',
    eqTempResult: 'Temperatura de Equilibrio',
    surfTempResult: 'Temperatura de Superficie Estimada',
    orbitPeriodResult: 'Periodo Orbital',
    orbitVelocityResult: 'Velocidad Orbital',
    hzLimitsHeader: 'Límites de la Zona Habitable',
    innerLimit: 'Límite Interior Conservador',
    outerLimit: 'Límite Exterior Conservador',
    optInnerLimit: 'Límite Interior Optimista',
    optOuterLimit: 'Límite Exterior Optimista',
    orbitCanvasTitle: 'Visualizador de Órbitas Interactivo',
    statusLabel: 'Estado de Habitabilidad',
    statusTooHot: 'DEMASIADO CALIENTE (El agua se evapora)',
    statusHabitable: 'HABITABLE (Agua líquida posible)',
    statusTooCold: 'DEMASIADO FRÍO (El agua se congela)',
    statusExplanation: 'Según los límites conservadores, este planeta se encuentra en el estado de zona habitable especificado.',
    unitsLabel: 'Sistema de Unidades',
    unitsScientific: 'Científico',
    unitsImperial: 'Imperial',
  },
  seo: [
    {
      type: 'title',
      text: 'ASTROBIOLOGÍA: Física de las Zonas Habitables Estelares',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La búsqueda de vida más allá de la Tierra comienza con la comprensión de las condiciones físicas necesarias para el agua líquida. Los astrobiólogos utilizan modelos matemáticos para delimitar las zonas habitables alrededor de diferentes tipos de estrellas. Este simulador emplea los modelos de Kopparapu et al. (2013) para estimar el flujo de energía que reciben los planetas y determinar si se encuentran en la zona de Ricitos de Oro. La zona habitable se define como la región donde un planeta de masa terrestre con una atmósfera de CO2-H2O-N2 puede mantener agua líquida en su superficie.',
    },
    {
      type: 'title',
      text: 'Fórmulas Matemáticas y Física Atmosférica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los límites de la zona habitable se determinan calculando el flujo estelar efectivo (Seff) necesario para desencadenar condiciones de invernadero desbocado o invernadero máximo. La ecuación para Seff depende de la temperatura efectiva de la estrella (Teff):<br><br>Seff = SeffSun + a * T* + b * T*^2 + c * T*^3 + d * T*^4<br><br>donde T* = Teff - 5780 K, y los coeficientes (a, b, c, d) se derivan empíricamente de modelos climáticos radiativos-convectivos unidimensionales. Una vez calculado Seff, la distancia orbital d en unidades astronómicas (UA) viene dada por:<br><br>d = sqrt(L / Seff)<br><br>donde L es la luminosidad de la estrella respecto al Sol. La temperatura de equilibrio (Teq) del planeta se calcula asumiendo un cuerpo negro esférico en equilibrio térmico:<br><br>Teq = Teff * sqrt(R* / 2d) * (1 - A)^0.25 = 278.5 * (S * (1 - A))^0.25<br><br>donde R* es el radio estelar, A es el albedo de Bond del planeta y S es el flujo estelar recibido en unidades de la constante solar de la Tierra.',
    },
    {
      type: 'title',
      text: 'Clasificación Espectral y Límites Habitables',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las características estelares varían significativamente según el tipo espectral. A continuación se presenta un resumen de las propiedades típicas y los límites de la zona habitable (ZH):',
    },
    {
      type: 'table',
      headers: [
        'Clase Espectral',
        'Temperatura (K)',
        'Luminosidad (L/L⊙)',
        'Límite Interior ZH (UA)',
        'Límite Exterior ZH (UA)',
      ],
      rows: [
        ['Tipo O (Gigante)', '40,000', '100,000', '300.0', '530.0'],
        ['Tipo B (Gigante)', '20,000', '1,000', '30.1', '53.2'],
        ['Tipo A (Sirio)', '8,500', '20.0', '4.2', '7.4'],
        ['Tipo F (Proción)', '6,500', '2.5', '1.5', '2.6'],
        ['Tipo G (Sol)', '5,778', '1.0', '0.95', '1.67'],
        ['Tipo K (Enana)', '4,500', '0.15', '0.37', '0.65'],
        ['Tipo M (Enana)', '3,200', '0.01', '0.09', '0.17'],
      ],
    },
    {
      type: 'title',
      text: 'Impacto de la Clase Espectral en la Habitabilidad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada clase espectral genera un entorno radiactivo y gravitatorio único para sus planetas:<br><br><strong>Estrellas de tipo O y B:</strong> Estas estrellas azules masivas emiten una intensa radiación ultravioleta (UV) y tienen vidas extremadamente cortas (decenas de millones de años). Podría existir agua líquida en sus mundos exteriores, pero la vida no dispondría de tiempo suficiente para evolucionar antes de que la estrella explote como supernova.<br><br><strong>Estrellas de tipo A y F:</strong> Son más brillantes y calientes que el Sol. Sus zonas habitables son amplias y lejanas, lo que reduce los efectos del acoplamiento de marea. Sin embargo, los altos niveles de radiación UV cercana pueden dañar gravemente las moléculas orgánicas si no cuentan con una capa protectora de ozono.<br><br><strong>Estrellas de tipo G (similares al Sol):</strong> Al proporcionar un flujo luminoso estable durante miles de millones de años, representan el objetivo principal en la búsqueda de vida. Su emisión de radiación se alinea perfectamente con los requisitos de la bioquímica estándar.<br><br><strong>Estrellas de tipo K (enanas naranjas):</strong> Consideradas por muchos astrobiólogos como las mejores candidatas para albergar mundos "superhabitables". Viven decenas de miles de millones de años, emiten menos radiación UV dañina que las estrellas de tipo G y no sufren las erupciones violentas de las enanas rojas jóvenes.<br><br><strong>Estrellas de tipo M (enanas rojas):</strong> Las más abundantes de la galaxia. Como su zona habitable está muy cerca (generalmente < 0.2 UA), los planetas suelen sufrir acoplamiento de marea (una cara siempre apunta a la estrella). Además, las enanas rojas activas generan vientos estelares y llamaradas de alta energía que pueden despojar a los planetas de sus atmósferas.',
    },
    {
      type: 'title',
      text: 'Factores Críticos en los Entornos Habitables Planetarios',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El entorno físico de un planeta depende de múltiples variables que van más allá de la simple distancia a su estrella hospedadora:',
    },
    {
      type: 'list',
      items: [
        '<strong>Efecto Invernadero Atmosférico:</strong> Los gases de efecto invernadero naturales elevan la temperatura de la superficie por encima del nivel de equilibrio del cuerpo negro. Los planetas rocosos requieren el ciclo carbono-silicato para estabilizar el CO2 atmosférico y regular las temperaturas a escala geológica.',
        '<strong>Albedo de Bond del Planeta:</strong> Una alta reflectividad (por nubes, casquetes polares o aerosoles de sulfato) enfría el planeta, mientras que una reflectividad baja (suelos oscuros, masas de agua) absorbe más energía estelar.',
        '<strong>Campos Magnéticos:</strong> Una magnetosfera planetaria fuerte protege la atmósfera de los vientos estelares, evitando la pérdida de agua y el escape atmosférico no térmico.',
        '<strong>Dinámica de Trampa de Agua:</strong> El efecto de trampa fría en la atmósfera superior evita que el vapor de agua alcance grandes altitudes donde la radiación UV estelar lo disociaría en hidrógeno y oxígeno.',
      ],
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
      description: description,
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
