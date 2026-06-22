import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-problema-tres-cuerpos';
const title = 'Simulador del Problema de los Tres Cuerpos';
const description = 'Simula tres cuerpos gravitacionales en un plano bidimensional con masas editables, vectores de velocidad, estelas y ajustes preestablecidos estables o caóticos.';

const howTo = [
  {
    name: 'Elige un ajuste orbital preestablecido',
    text: 'Empieza con la órbita en forma de ocho para una referencia estable, el triángulo de Lagrange para un equilibrio rotatorio o el ajuste de honda gravitatoria para un encuentro visiblemente caótico.',
  },
  {
    name: 'Ajusta las masas y los vectores de velocidad',
    text: 'Usa los deslizadores de cada cuerpo para cambiar la masa y las componentes iniciales de la velocidad. Cambios pequeños pueden conservar un patrón, deformarlo o destruirlo por completo.',
  },
  {
    name: 'Lee los diagnósticos',
    text: 'Vigila la energía total, la separación máxima y mínima, y el centro de masas para saber si la órbita numérica sigue siendo estable o se está desintegrando.',
  },
];

const faq = [
  {
    question: '¿Qué es el problema de los tres cuerpos?',
    answer: 'El problema de los tres cuerpos pregunta cómo se mueven tres masas cuando cada una atrae gravitacionalmente a las otras dos. A diferencia del problema de dos cuerpos, no existe una ecuación general de forma cerrada que resuelva toda configuración posible, por lo que la mayoría de los casos prácticos se exploran con integración numérica.',
  },
  {
    question: '¿Por qué son inestables las órbitas de tres cuerpos?',
    answer: 'Muchos sistemas de tres cuerpos son sensibles a las condiciones iniciales. Un cambio mínimo en la velocidad, la posición o la masa altera el momento de los encuentros cercanos, y esos encuentros pueden intercambiar energía de forma drástica. El resultado es un sistema que puede permanecer estable un tiempo y luego expulsar de repente a uno de los cuerpos.',
  },
  {
    question: '¿Qué muestra el ajuste preestablecido de la órbita en forma de ocho?',
    answer: 'El ajuste en forma de ocho es una famosa solución periódica para tres masas iguales. Cada cuerpo sigue la misma trayectoria con un desfase, demostrando que el problema de los tres cuerpos puede contener islas estables y elegantes dentro de un panorama mucho más caótico.',
  },
  {
    question: '¿Es este un simulador astronómico físicamente exacto?',
    answer: 'Esta herramienta usa un modelo newtoniano suavizado y un paso tipo Verlet de velocidad simpléctico para que el movimiento sea fiel y estable para el aprendizaje. Está diseñada para exploración interactiva, no para predicción de alta precisión de efemérides.',
  },
  {
    question: '¿Cómo debo interpretar la energía total?',
    answer: 'La energía total negativa suele indicar un sistema ligado, mientras que una energía cercana a cero puede facilitar la fuga. En una simulación numérica, una deriva energética grande también advierte que el paso temporal o la geometría del encuentro están forzando al integrador.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratorio de caos gravitacional',
    canvasLabel: 'Lienzo interactivo bidimensional de órbita de tres cuerpos',
    presetsLabel: 'Ajustes orbitales preestablecidos',
    figureEightPreset: 'Figura en ocho',
    lagrangePreset: 'Triángulo de Lagrange',
    slingshotPreset: 'Honda gravitatoria',
    pauseButton: 'Pausa',
    playButton: 'Reproducir',
    resetButton: 'Reiniciar',
    speedLabel: 'Velocidad de simulación',
    trailLabel: 'Longitud de estela',
    massLabel: 'Masa',
    velocityXLabel: 'Velocidad X',
    velocityYLabel: 'Velocidad Y',
    energyLabel: 'Energía total',
    separationLabel: 'Rango de separación',
    centerMassLabel: 'Centro de masas',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador interactivo del problema de los tres cuerpos para caos orbital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El problema de los tres cuerpos es una de las demostraciones más claras de que leyes simples pueden producir movimiento complicado. La gravedad newtoniana da una regla de fuerza compacta, pero en cuanto un tercer cuerpo masivo se une al sistema, cada órbita remodela continuamente a las otras dos. Este simulador te permite experimentar directamente con esa inestabilidad: elige una configuración conocida, ajusta masas y vectores de velocidad, y observa si los cuerpos forman una órbita repetitiva, un triángulo rotatorio o un evento de dispersión caótica.',
    },
    {
      type: 'title',
      text: 'Qué demuestran los ajustes preestablecidos',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ajuste', 'Idea física', 'Qué observar'],
      rows: [
        ['<strong>Figura en ocho</strong>', 'Una solución periódica de masas iguales donde los tres cuerpos comparten el mismo bucle.', 'La órbita se mantiene organizada solo cuando la simetría y el equilibrio de velocidades se conservan cuidadosamente.'],
        ['<strong>Triángulo de Lagrange</strong>', 'Tres cuerpos ocupan un triángulo equilátero que gira alrededor del centro de masas.', 'El equilibrio de masas y la velocidad tangencial evitan que el triángulo colapse hacia adentro.'],
        ['<strong>Honda gravitatoria</strong>', 'Un encuentro cercano transfiere energía entre los cuerpos.', 'Un cuerpo puede ganar velocidad mientras otro se vuelve más ligado, revelando por qué ocurren las eyecciones caóticas.'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué los pequeños cambios importan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En una órbita de dos cuerpos, el centro de masas y la elipse orbital ofrecen una imagen geométrica estable. En un sistema de tres cuerpos, los pasos cercanos actúan como negociaciones gravitacionales: un cuerpo puede tomar prestada energía orbital, cambiar de dirección bruscamente o convertir un bucle ordenado en un evento de dispersión. Esa sensibilidad es la razón por la que los sistemas astrofísicos reales, como las estrellas triples, los encuentros planeta-luna y los planetesimales del sistema solar temprano, a menudo requieren integración numérica en lugar de una única fórmula simple.',
    },
    {
      type: 'title',
      text: 'Cómo usar los diagnósticos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Energía total</strong> te ayuda a juzgar si el sistema está ligado y si la integración numérica se mantiene estable.',
        '<strong>Rango de separación</strong> muestra las distancias de par más cercanas y más lejanas, haciendo fáciles de detectar las casi colisiones y las eyecciones.',
        '<strong>Centro de masas</strong> debería permanecer relativamente estable cuando el momento inicial está equilibrado; la deriva sugiere una configuración intencionalmente asimétrica o un vector de velocidad alterado.',
        '<strong>Longitud de estela</strong> revela la estructura a largo plazo: las estelas cortas enfatizan la interacción actual, mientras que las largas exponen bucles repetitivos y precesión orbital lenta.',
      ],
    },
    {
      type: 'title',
      text: 'Modelo numérico usado en la herramienta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El simulador usa la atracción newtoniana de cuadrado inverso con un pequeño término de suavizado que evita explosiones visuales durante pasos extremadamente cercanos. El movimiento avanza con un paso tipo Verlet de velocidad, una elección común para demostraciones orbitales porque maneja el comportamiento energético mejor que una simple actualización de Euler. El resultado es un modelo educativo receptivo que hace visible el comportamiento cualitativo del problema de los tres cuerpos sin pretender reemplazar el software profesional de mecánica celeste.',
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
