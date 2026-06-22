import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagrama-de-fases-punto-critico-visualizador';
const title = 'Diagrama de Fases y Visualizador del Punto Critico';
const description = 'Explore las regiones solida, liquida, gaseosa y supercritica en un diagrama de fases presion-temperatura interactivo con marcadores de punto triple y punto critico.';

const howTo = [
  {
    name: 'Elegir una sustancia',
    text: 'Cambie entre agua, dioxido de carbono y nitrogeno para ver como los puntos triples y criticos reales reconfiguran el mapa de fases.',
  },
  {
    name: 'Mover temperatura y presion',
    text: 'Use los deslizadores para colocar la muestra en el plano presion-temperatura. El diagrama actualiza la region de fase activa y el marcador de muestra en vivo.',
  },
  {
    name: 'Observar el halo critico',
    text: 'Dirijase hacia el final del limite vapor-liquido para ver como el calor latente se desvanece y la distincion liquido-gas se funde en un fluido supercritico.',
  },
  {
    name: 'Leer el panel didactico',
    text: 'Use la etiqueta de fase, el medidor de calor latente y las lecturas de puntos para conectar el diagrama visual con el vocabulario termodinamico.',
  },
];

const faq = [
  {
    question: '¿Qué es un diagrama de fases?',
    answer: 'Un diagrama de fases muestra que estado de la materia es estable en diferentes combinaciones de temperatura y presion. Las lineas fronteriza marcan condiciones donde dos fases pueden coexistir en equilibrio.',
  },
  {
    question: '¿Qué sucede en el punto critico?',
    answer: 'En el punto critico, el limite vapor-liquido termina. Por encima de la temperatura y presion criticas, el material se convierte en un fluido supercritico y no existe una distincion nitida entre liquido y gas.',
  },
  {
    question: '¿Por qué el agua tiene una linea de fusion diferente?',
    answer: 'El agua es inusual porque el hielo es menos denso que el agua liquida cerca del punto de fusion. El aumento de presion puede favorecer la fase liquida mas densa, por lo que el limite solido-liquido tiene una pendiente diferente a la de muchas sustancias.',
  },
  {
    question: '¿Son las curvas trazadas exactas de laboratorio?',
    answer: 'No. La herramienta utiliza curvas simplificadas ancladas a valores publicados de punto triple y punto critico. Esta disenada para el aprendizaje conceptual, no para ingenieria de procesos o calculos de seguridad.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Controles del diagrama de fases',
    substance: 'Sustancia',
    units: 'Unidades',
    scientificUnits: 'Cientificas (K, MPa)',
    metricUnits: 'Metricas (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Temperatura',
    pressure: 'Presion',
    diagram: 'Diagrama de fases presion-temperatura',
    sample: 'Estado de la muestra',
    phase: 'Fase estable',
    triplePoint: 'Punto triple',
    criticalPoint: 'Punto critico',
    vaporCurve: 'Limite vapor-liquido',
    meltingLine: 'Limite solido-liquido',
    latentHeat: 'Contraste de calor latente',
    criticalProximity: 'Proximidad critica',
    coordinates: 'Coordenadas',
    solid: 'Solido',
    liquid: 'Liquido',
    gas: 'Gaseoso',
    supercritical: 'Supercritico',
    low: 'bajo',
    high: 'alto',
    reset: 'Restablecer',
    interpretation: 'Interpretacion',
    note: 'Las lineas fronteriza marcan coexistencia; las regiones marcan la fase mas estable para las condiciones seleccionadas.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualizador interactivo de diagramas de fases para puntos triples, curvas de ebullicion y puntos criticos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este visualizador de diagramas de fases convierte un grafico abstracto de presion-temperatura en un mapa interactivo. Elija una sustancia, mueva la temperatura y la presion, y vea si se predice que la muestra se comporte como solido, liquido, gas o fluido supercritico. El objetivo es hacer que los limites de fase se sientan espaciales: cruzar una linea cambia el estado estable, mientras que acercarse al punto critico cambia lo que significa un limite de fase.',
    },
    {
      type: 'paragraph',
      html: 'La herramienta esta disenada para estudiantes, profesores, divulgadores cientificos y cualquier persona que busque una explicacion clara de los diagramas de fases. Enfatiza las caracteristicas mas importantes en la termodinamica introductoria: el punto triple donde coexisten tres fases, la curva vapor-liquido, el limite solido-liquido y el punto final critico donde desaparece la distincion liquido-gas.',
    },
    {
      type: 'title',
      text: 'Como leer el diagrama presion-temperatura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un diagrama de fases coloca la temperatura en un eje y la presion en el otro. Cada region muestra la fase estable bajo esas condiciones. Las lineas entre regiones son curvas de coexistencia: a lo largo de esas lineas, dos fases pueden permanecer en equilibrio en lugar de que una fase reemplace completamente a la otra.',
    },
    {
      type: 'table',
      headers: ['Caracteristica del diagrama', 'Significado', 'Que observar en la herramienta'],
      rows: [
        ['Punto triple', 'Solido, liquido y gas coexisten', 'La union de baja temperatura donde convergen los limites.'],
        ['Curva vapor-liquido', 'Equilibrio de ebullicion o condensacion', 'La linea curva desde el punto triple hasta el punto critico.'],
        ['Limite solido-liquido', 'Equilibrio de fusion o congelacion', 'La linea pronunciada que separa las regiones solida y liquida.'],
        ['Punto critico', 'Final del limite vapor-liquido', 'El punto final resaltado donde se desvanece el calor latente.'],
        ['Region supercritica', 'Sin distincion nitida liquido-gas', 'El area de alta temperatura y alta presion mas alla del punto critico.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que importa el punto critico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Por debajo del punto critico, la ebullicion es una transicion de fase: el liquido y el vapor pueden coexistir, y la energia puede absorberse como calor latente mientras la temperatura permanece ligada a la condicion de frontera. En el punto critico, ese limite termina. Por encima de el, la densidad cambia continuamente y la sustancia se describe como un fluido supercritico en lugar de un liquido o gas normal.',
    },
    {
      type: 'paragraph',
      html: 'Esto es importante en quimica, ciencias planetarias, extraccion industrial, refrigeracion y fisica de altas presiones. El dioxido de carbono, por ejemplo, se vuelve supercritico en condiciones relativamente accesibles en comparacion con el agua, por lo que el CO2 supercritico se utiliza en extraccion y procesamiento de materiales. El agua requiere temperaturas y presiones mucho mas altas, lo que hace que su punto critico sea importante para los sistemas de energia y la geofisica.',
    },
    {
      type: 'title',
      text: 'Que simplifica este visualizador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los diagramas de fases reales pueden incluir polimorfos, estados metaestables, mezclas no ideales, multiples fases solidas y ecuaciones de estado ajustadas experimentalmente. Esta herramienta educativa mantiene el modelo intencionalmente compacto. Ancla cada sustancia a valores de referencia reconocibles y dibuja curvas didacticas suaves para que las ideas principales sean faciles de inspeccionar sin necesidad de una tabla de termodinamica.',
    },
    {
      type: 'list',
      items: [
        '<strong>Uselo para la intuicion:</strong> ayuda a explicar por que las ollas a presion, el hielo seco, la ebullicion y los fluidos supercriticos se comportan de manera diferente.',
        '<strong>No lo use para limites de ingenieria:</strong> las curvas simplificadas no sustituyen a los datos de propiedades certificados.',
        '<strong>Enfoquese en la topologia:</strong> el resultado de aprendizaje mas importante es como se conectan las regiones de fase y donde terminan los limites.',
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
