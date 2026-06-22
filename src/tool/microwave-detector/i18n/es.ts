const slug = 'detector-microondas';
const description = 'Analiza si tu microondas pierde radiación midiendo la interferencia en tiempo real sobre tu red WiFi. Herramienta científica de seguridad.';
const title = 'Detector de Fugas de Microondas: Visualizador de Interferencias WiFi';
const howTo = [
    {
      name: 'Conectar a red WiFi de 2.4GHz',
      text: 'Asegúrate de que tu móvil o portátil NO esté conectado a la banda de 5GHz para que la interferencia sea medible.',
    },
    {
      name: 'Iniciar el test de latencia base',
      text: 'Pulsa el botón de inicio con el microondas apagado para establecer una línea base de conexión estable.',
    },
    {
      name: 'Encender el microondas',
      text: 'Pon a calentar un vaso de agua durante 30-60 segundos y sitúate cerca del electrodoméstico con tu dispositivo.',
    },
    {
      name: 'Analizar el gráfico en tiempo real',
      text: 'Observa si la latencia sube por encima de los 100-200ms o si se producen pérdidas de paquetes mientras el aparato está en funcionamiento.',
    },
  ];
const faq = [
    {
      question: '¿Cómo puede una web detectar mi microondas?',
      answer: 'No usamos sensores mágicos, sino la latencia de red. Tanto el WiFi de 2.4GHz como los hornos microondas operan en la misma frecuencia (aprox. 2450 MHz). Si el blindaje del microondas falla, genera "ruido" que colisiona con el WiFi, aumentando drásticamente la latencia (ping).',
    },
    {
      question: '¿Es peligroso que mi microondas sufra fugas?',
      answer: 'Una pequeña interferencia en el WiFi es normal y no implica un riesgo inmediato para la salud, ya que la potencia decae rápido con la distancia. Sin embargo, una fuga masiva indica un mal sellado de la puerta o de la rejilla, lo cual debería revisarse por seguridad técnica.',
    },
    {
      question: '¿Por qué el test no funciona con WiFi de 5GHz?',
      answer: 'Porque el WiFi de 5GHz opera en una banda de frecuencia mucho más alta que un microondas. Para que el test sea efectivo, tu dispositivo debe estar conectado a la red de 2.4GHz del router.',
    },
    {
      question: '¿Qué significan los picos de latencia en el gráfico?',
      answer: 'Los picos constantes durante el funcionamiento del microondas sugieren que la señal electromagnética está "escapando" y saturando el aire, impidiendo que los paquetes de datos WiFi lleguen a tiempo.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiado',
    noHistory: 'No historial',
    load: 'Cargar',
    delete: 'Eliminar',
    microwaveDetection: 'Detección de Microondas',
    shieldingAnalysis: 'Análisis de Blindaje',
    startTest: 'Iniciar Prueba',
    stopTest: 'Detener Prueba',
    waitingForStart: 'Esperando inicio...',
    detectingInterference: 'Detectando interferencias...',
    baseLevel: 'Nivel Base',
    activeLevel: 'Nivel Activo',
    leakProbability: 'Probabilidad de Fuga',
    lowLeak: 'Baja',
    mediumLeak: 'Media',
    highLeak: 'Alta',
    pingLabel: 'Latencia (ms)',
    packetLossLabel: 'Pérdida de Paquetes (%)',
    rfInterferenceMonitor: 'Monitor de Interferencias RF',
    mwLeakDetector: 'DETECTOR DE FUGAS MW v2.0',
    jitterUnit: 'ms / interferencia',
    systemReady: 'Sistema Listo',
    physicalRequirement: 'Requisito de Física',
    physicalDesc: 'Este detector utiliza la interferencia en la banda de 2.4GHz (la frecuencia de los microondas). Para que funcione, asegúrate de estar conectado a una red WiFi 2.4GHz (no 5GHz/6GHz) o usa tu teléfono cerca del aparato.',
    understandStart: 'Entendido, Iniciar Escaneo',
    rfInterferenceTitle: 'Monitor de Interferencias',
    connectToAnalyze: 'Conecta para iniciar el análisis térmico de interferencia.',
    audioFeedback: 'Audio Feedback',
    muteUnmute: 'MUTEADO / ACTIVADO',
    static: 'Estático',
  },
  seo: [
    {
      type: 'title',
      text: 'FÍSICA DE LAS ONDAS: ¿Realmente Pierde Radiación tu Microondas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El microondas es el electrodoméstico más incomprendido de la cocina moderna. Odiado por los puristas y amado por los pragmáticos, oculta una batalla constante entre la energía contenida y el mundo exterior.',
    },
    {
      type: 'paragraph',
      html: 'Desde un punto de vista puramente físico, un horno de microondas es un <strong>resonador de cavidad</strong> diseñado para bombardear moléculas de agua con radiación electromagnética a una frecuencia muy específica: <strong>2.45 GHz</strong>. Esta frecuencia no es arbitraria; es la necesaria para provocar la oscilación dipolo de las partículas de agua, generando calor por fricción. El problema es que esta es exactamente la misma frecuencia que utiliza el estándar WiFi 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Interferencia Electromagnética (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cualquier dispositivo WiFi operando en la banda de 2.4GHz compite por el mismo "aire" que tu microondas. En un horno perfecto, la <strong>Jaula de Faraday</strong> (la malla metálica que ves en la puerta y las paredes internas) debería contener el 100% de la energía.',
    },
    {
      type: 'paragraph',
      html: 'Sin embargo, ninguna jaula es perfecta a largo plazo. Las juntas de la puerta, los cierres magnéticos y el desgaste del metal pueden permitir que pequeñas cantidades de energía escapen. Aunque estos niveles suelen estar muy por debajo de los límites de seguridad para humanos, son <strong>gigantescos</strong> para una tarjeta de red WiFi, provocando latencia, pérdida de paquetes y el característico "jitter" que mide nuestra herramienta.',
    },
    {
      type: 'title',
      text: 'El Test de la Jaula de Faraday Casero',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe una forma analógica muy sencilla de comprobar el estado básico del apantallado de tu horno, aunque es menos precisa que nuestra medición de jitter digital:',
    },
    {
      type: 'list',
      items: [
        '<strong>Paso 1 - El Teléfono:</strong> Introduce tu teléfono móvil dentro del microondas (<strong>¡BAJO NINGÚN CONCEPTO ENCIENDAS EL HORNO!</strong> Solo cierra la puerta).',
        '<strong>Paso 2 - La Llamada:</strong> Intenta llamar a ese teléfono desde otro dispositivo. Si el teléfono suena, la jaula de Faraday es defectuosa o no está sintonizada para las frecuencias celulares. Si da "fuera de cobertura", el apantallado funciona correctamente.',
      ],
    },
    {
      type: 'title',
      text: 'Mitos vs Realidad Científica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"El microondas altera la estructura molecular del agua"</strong> - FALSO. La radiación de microondas es <em>no ionizante</em>. No tiene energía suficiente para romper enlaces químicos o alterar el ADN. Simplemente hace vibrar las moléculas de agua, aumentando su energía cinética (temperatura).',
        '<strong>"La radiación se acumula en la comida"</strong> - FALSO. Las microondas son como la luz: una vez que apagas el interruptor, desaparecen. La comida caliente no emite radiación microondas, solo radiación infrarroja (calor) igual que una hoguera o una sartén.',
        '<strong>"Mirar el plato girar daña los ojos"</strong> - PARCIALMENTE VERDADERO. El cristal de la puerta está diseñado con una malla que bloquea las longitudes de onda de 2.45GHz. Sin embargo, si la malla está dañada, el cristal no detendrá las microondas. El cristalino del ojo es muy sensible al calor y tiene mala circulación sanguínea, por lo que una exposición directa prolongada (cerca de una fuga) podría causar cataratas térmicas.',
      ],
    },
    {
      type: 'title',
      text: '¿Cómo funciona este detector digital?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta no mide la radiación directamente (los smartphones no tienen sensores para ello), pero mide el <strong>síntoma principal</strong>. Cuando una molécula de radiación de 2.45GHz escapa del horno, "colisiona" con la señal WiFi de tu dispositivo. Esto provoca:',
    },
    {
      type: 'list',
      items: [
        '<strong>Retransmisiones de Paquetes:</strong> El router detecta que el mensaje llegó corrupto y tiene que volver a enviarlo, aumentando la latencia.',
        '<strong>Variación del Jitter:</strong> Es la medida de la inestabilidad en el tiempo de respuesta. Un jitter alto es señal inequívoca de interferencia externa masiva.',
        '<strong>Pérdida de Rendimiento:</strong> La velocidad de transferencia cae en picado debido a la saturación del espectro radioeléctrico.',
        '<strong>Ruido de Fondo:</strong> El microondas inyecta ruido que eleva el "noise floor", dificultando al dispositivo distinguir entre los datos reales y el caos radiactivo.',
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

