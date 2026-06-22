import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-horizonte-sucesos';
const title = 'Simulador del Horizonte de Sucesos de un Agujero Negro';
const description = 'Explora el horizonte de sucesos de un agujero negro con cálculos interactivos de masa, distancia orbital, dilatación temporal, esfera de fotones, velocidad de escape y radio de Schwarzschild.';

const howTo = [
  {
    name: 'Elige la masa del agujero negro',
    text: 'Mueve el deslizador de masa desde un agujero negro de masa estelar hasta uno supermasivo y observa cómo el radio de Schwarzschild escala en tiempo real.',
  },
  {
    name: 'Acerca la sonda al horizonte',
    text: 'Ajusta la distancia en radios de Schwarzschild para comparar una órbita exterior segura, la región de la esfera de fotones y el borde del horizonte de sucesos.',
  },
  {
    name: 'Inspecciona los efectos relativistas',
    text: 'Lee la velocidad de escape, la dilatación gravitacional del tiempo, el corrimiento al rojo y el período orbital para ver por qué la intuición ordinaria falla cerca del horizonte.',
  },
  {
    name: 'Compara los radios característicos',
    text: 'Usa los anillos guía del horizonte de sucesos, la esfera de fotones y la ISCO para entender los diferentes límites alrededor de un agujero negro sin rotación.',
  },
];

const faq = [
  {
    question: '¿Qué es el horizonte de sucesos de un agujero negro?',
    answer: 'El horizonte de sucesos es el límite donde la velocidad de escape alcanza la velocidad de la luz. Una vez que un objeto lo cruza, ninguna señal que se mueva a la velocidad de la luz o por debajo puede regresar al universo exterior.',
  },
  {
    question: '¿Qué significa el radio de Schwarzschild?',
    answer: 'El radio de Schwarzschild es el radio del horizonte de sucesos para un agujero negro sin rotación ni carga eléctrica. Crece linealmente con la masa, por lo que duplicar la masa duplica el radio del horizonte.',
  },
  {
    question: '¿Qué es la esfera de fotones?',
    answer: 'La esfera de fotones es una región a 1.5 radios de Schwarzschild donde la luz puede orbitar el agujero negro en una trayectoria inestable. Pequeñas perturbaciones hacen que los fotones escapen hacia afuera o caigan hacia adentro.',
  },
  {
    question: '¿Qué es la ISCO?',
    answer: 'ISCO significa órbita circular estable más interna (innermost stable circular orbit). Para un agujero negro sin rotación se encuentra a 3 radios de Schwarzschild, o 6 radios gravitacionales, y marca la última órbita circular estable para partículas con masa.',
  },
  {
    question: '¿Por qué aumenta la dilatación temporal cerca del horizonte?',
    answer: 'En la geometría de Schwarzschild, los relojes más profundos en el campo gravitatorio marcan el tiempo más lentamente en comparación con observadores lejanos. El factor mostrado se aproxima a cero a medida que la sonda se acerca al horizonte de sucesos.',
  },
  {
    question: '¿Puede este simulador modelar un agujero negro en rotación?',
    answer: 'No. Utiliza la solución de Schwarzschild, que asume que no hay rotación ni carga eléctrica. Los agujeros negros astrofísicos reales a menudo rotan, y el giro cambia el tamaño del horizonte, la ubicación de la ISCO y el comportamiento del disco.',
  },
  {
    question: '¿Por qué los agujeros negros supermasivos son menos violentos en el horizonte?',
    answer: 'El gradiente de marea en el horizonte disminuye a medida que aumenta la masa del agujero negro. Un agujero negro pequeño de masa estelar puede estirar objetos violentamente cerca del horizonte, mientras que un agujero negro supermasivo puede tener un gradiente local más suave en ese límite.',
  },
  {
    question: '¿La visualización muestra una imagen real de un agujero negro?',
    answer: 'Es un diagrama educativo, no una observación con trazado de rayos. Los anillos y el disco están escalados a los radios de Schwarzschild simplificados para que las zonas físicas sean fáciles de comparar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Mapa de campo del horizonte de sucesos',
    visualCaption: 'La sonda se mueve a través de la geometría de Schwarzschild escalada. Los anillos guía brillantes marcan el horizonte, la esfera de fotones y la órbita circular estable más interna.',
    controlsTitle: 'Controles del agujero negro',
    eventHorizon: 'Horizonte de sucesos',
    photonSphere: 'Esfera de fotones',
    isco: 'ISCO',
    rsLabel: 'Radio de Schwarzschild',
    diameterLabel: 'Diámetro',
    timeLabel: 'Dilatación temporal',
    redshiftLabel: 'Corrimiento al rojo',
    statusSafe: 'Fuera de la región de órbita estable',
    statusPhoton: 'Dentro de la zona de la esfera de fotones',
    statusInside: 'En el límite del horizonte',
    diameter: 'Diámetro del horizonte',
    lightCrossing: 'Tiempo de cruce de la luz',
    timeDilation: 'Ritmo del reloj frente a observador lejano',
    redshift: 'Corrimiento al rojo gravitacional',
    mass: 'Masa del agujero negro',
    distance: 'Distancia de la sonda',
    speed: 'Velocidad orbital de la sonda',
    escapeVelocity: 'Velocidad de escape',
    orbitalPeriod: 'Período orbital de la sonda',
    tidalGradient: 'Gradiente de marea',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'masas solares',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 masas solares',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador del horizonte de sucesos de un agujero negro para el radio de Schwarzschild, la esfera de fotones y la dilatación temporal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador del horizonte de sucesos de un agujero negro convierte las ideas fundamentales de los agujeros negros de Schwarzschild en un modelo visual interactivo. Cambia la masa del agujero negro, mueve una sonda hacia adentro o hacia afuera y compara cómo responden el horizonte de sucesos, la esfera de fotones, la órbita circular estable más interna, la velocidad de escape, el corrimiento al rojo gravitacional y la dilatación temporal.',
    },
    {
      type: 'paragraph',
      html: 'El simulador está diseñado para estudiantes de astronomía, profesores de física, divulgadores científicos y curiosos que quieren algo más que una fórmula estática. La visualización conecta los números con un diagrama espacial para que puedas ver por qué el horizonte de sucesos no es una superficie material, por qué los fotones tienen una órbita inestable especial y por qué el movimiento circular estable se detiene antes de alcanzar el horizonte.',
    },
    {
      type: 'title',
      text: 'Cómo se calcula el radio del horizonte de sucesos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para un agujero negro sin rotación ni carga, el radio del horizonte de sucesos es el <strong>radio de Schwarzschild</strong>. Se calcula como <strong>Rs = 2GM / c^2</strong>, donde G es la constante gravitacional, M es la masa del agujero negro y c es la velocidad de la luz. Una masa solar corresponde a un radio de Schwarzschild de aproximadamente 2.95 kilómetros.',
    },
    {
      type: 'paragraph',
      html: 'Dado que el radio de Schwarzschild escala linealmente con la masa, un agujero negro de 10 masas solares tiene un radio cercano a 29.5 kilómetros, mientras que un agujero negro de 4 millones de masas solares como Sagitario A* tiene un radio de unos 11.8 millones de kilómetros. El deslizador de masa usa una escala logarítmica para que quepan tanto los casos de masa estelar como los supermasivos en el mismo control.',
    },
    {
      type: 'table',
      headers: ['Región', 'Radio en radios de Schwarzschild', 'Qué significa'],
      rows: [
        ['Horizonte de sucesos', '1.0 Rs', 'El límite unidireccional donde la velocidad de escape iguala la velocidad de la luz.'],
        ['Esfera de fotones', '1.5 Rs', 'La órbita circular inestable para la luz alrededor de un agujero negro de Schwarzschild.'],
        ['ISCO', '3.0 Rs', 'La órbita circular estable más interna para partículas con masa.'],
        ['Campo débil', '6 Rs y más allá', 'La gravedad sigue siendo fuerte, pero las órbitas circulares son más fáciles de mantener.'],
      ],
    },
    {
      type: 'title',
      text: 'Velocidad de escape y por qué el horizonte es un límite causal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La velocidad de escape es la rapidez que necesitaría un objeto para alejarse arbitrariamente lejos sin propulsión adicional. En lenguaje newtoniano, la velocidad de escape en el radio de Schwarzschild es igual a c. La relatividad general ofrece la interpretación más profunda: los conos de luz futuros se inclinan hacia adentro, de modo que todos los caminos dirigidos hacia el futuro dentro del horizonte se mueven hacia radios más pequeños.',
    },
    {
      type: 'paragraph',
      html: 'El indicador de velocidad de escape es una intuición útil, pero no debe leerse como una descripción relativista completa. Cerca del horizonte, el espacio y el tiempo están curvados con suficiente intensidad como para que las coordenadas globales, las mediciones locales y lo que ve un observador lejano no sean intercambiables. Es precisamente por eso que un simulador visual ayuda a separar los radios característicos y sus significados.',
    },
    {
      type: 'title',
      text: 'Dilatación temporal y corrimiento al rojo gravitacional cerca de un agujero negro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un reloj mantenido a un radio fijo fuera de un agujero negro de Schwarzschild marca el tiempo más lentamente en comparación con un observador lejano. El factor simplificado que se muestra aquí es <strong>sqrt(1 - Rs / r)</strong>. A 3 Rs, el ritmo del reloj es aproximadamente 0.82 del ritmo lejano. A 1.1 Rs, cae a aproximadamente 0.30, lo que significa que el observador lejano ve los procesos cerca de ese radio como fuertemente ralentizados.',
    },
    {
      type: 'paragraph',
      html: 'El corrimiento al rojo gravitacional sigue la misma geometría. La luz que sale del pozo gravitacional pierde energía, por lo que su longitud de onda se estira. El corrimiento al rojo mostrado crece rápidamente cerca del horizonte, lo cual es una razón por la que los discos de acreción y la emisión cercana al horizonte requieren modelado relativista en lugar de mecánica orbital ordinaria.',
    },
    {
      type: 'title',
      text: 'Esfera de fotones e ISCO explicadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La esfera de fotones a 1.5 Rs es donde la luz puede, en principio, seguir una órbita circular alrededor de un agujero negro de Schwarzschild. La órbita es inestable: una pequeña perturbación hacia afuera permite que el fotón escape, y una pequeña perturbación hacia adentro lo envía hacia el horizonte. Esta región da forma al fuerte lente gravitacional y contribuye a la estructura de anillo brillante que se ve en las imágenes de agujeros negros.',
    },
    {
      type: 'paragraph',
      html: 'La ISCO a 3 Rs es la órbita circular estable más interna para partículas con masa alrededor de un agujero negro sin rotación. Dentro de la ISCO, las órbitas circulares requieren condiciones idealizadas y no son estables frente a pequeñas perturbaciones. En la teoría de discos de acreción, la ISCO ayuda a establecer el borde interior de la emisión más brillante del disco para modelos simples de agujeros negros.',
    },
    {
      type: 'title',
      text: 'Agujeros negros de masa estelar frente a supermasivos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una lección sorprendente es que los agujeros negros más grandes pueden sentirse menos destructivos en el horizonte. El radio crece en proporción directa a la masa, pero el gradiente de marea cerca del horizonte disminuye para masas mayores. Un agujero negro de masa estelar puede producir un estiramiento extremo en distancias de escala humana cerca del horizonte. Un agujero negro supermasivo puede tener un horizonte tan grande que el gradiente de marea local en el cruce es mucho menor.',
    },
    {
      type: 'paragraph',
      html: 'El simulador incluye un indicador de gradiente de marea en gravedades terrestres por metro. Es una estimación simplificada del gradiente radial, pero ayuda a mostrar por qué la frase "espaguetificación en el horizonte" depende fuertemente de la masa. El horizonte de sucesos es un límite causal, no siempre el lugar donde las fuerzas de marea se vuelven fatales.',
    },
    {
      type: 'title',
      text: 'Limitaciones de este simulador de agujeros negros',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sin rotación:</strong> la herramienta usa la geometría de Schwarzschild. Un agujero negro de Kerr tiene arrastre de marcos, una ergosfera y radios de ISCO dependientes del giro.',
        '<strong>Sin física de acreción:</strong> el disco brillante es una capa guía, no una simulación de plasma con temperatura, opacidad, campos magnéticos o efecto Doppler.',
        '<strong>Sin trazado de rayos:</strong> el diagrama está escalado para el aprendizaje. No representa el patrón exacto de lente gravitacional que una cámara observaría cerca del agujero negro.',
        '<strong>Sin vista de coordenadas en caída libre:</strong> el factor de dilatación temporal describe un reloj estacionario fuera del horizonte en comparación con un observador lejano. La caída libre experimenta la geometría de manera diferente.',
      ],
    },
    {
      type: 'title',
      text: 'Experimentos útiles para el aula',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Escala el centro de la Vía Láctea:</strong> ajusta la masa cerca de 4 millones de masas solares y compara el diámetro del horizonte con las escalas de las órbitas planetarias.',
        '<strong>Encuentra la esfera de fotones:</strong> mueve el deslizador de distancia a 1.5 Rs y observa lo cerca que está del horizonte de sucesos en comparación con la ISCO a 3 Rs.',
        '<strong>Compara gradientes de marea:</strong> ajusta 10 masas solares, luego 1.000 millones de masas solares, mientras mantienes la sonda cerca de 1.1 Rs. El radio del horizonte crece enormemente mientras que el gradiente de marea local cae.',
        '<strong>Sigue el ritmo del reloj:</strong> muévete desde 10 Rs hacia 1.02 Rs y observa cómo el factor de dilatación temporal se aproxima a cero.',
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