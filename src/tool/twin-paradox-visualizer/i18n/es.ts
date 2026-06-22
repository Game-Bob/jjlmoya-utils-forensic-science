import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'visualizador-paradoja-gemelos';
const title = 'Visualizador de la Paradoja de los Gemelos: Dilatacion del Tiempo en la Relatividad Especial';
const description = 'Visualice como la relatividad especial hace que un gemelo que viaja rapido regrese mas joven que el gemelo que se quedo en la Tierra.';

const howTo = [
  {
    name: 'Ajuste la velocidad de la nave espacial',
    text: 'Use el control deslizante de velocidad para elegir una fraccion de la velocidad de la luz y observe como aumenta el factor de Lorentz.',
  },
  {
    name: 'Elija la duracion de la mision en el sistema Tierra',
    text: 'Ajuste cuantos anos pasan para el gemelo que permanece en la Tierra durante el viaje completo de ida y vuelta.',
  },
  {
    name: 'Compare los relojes y las lineas de universo',
    text: 'Lea la diferencia de edad, el tiempo transcurrido en la nave, la distancia en el sistema Tierra y la linea de universo curvada que marca el cambio de sistemas inerciales del gemelo viajero.',
  },
];

const faq = [
  {
    question: '¿Qué es la paradoja de los gemelos en la relatividad especial?',
    answer: 'La paradoja de los gemelos es un experimento mental en el que un gemelo viaja por el espacio a velocidad relativista y luego regresa a la Tierra mas joven que el gemelo que se quedo en casa. Parece paradójico porque inicialmente cada gemelo puede describir al otro como en movimiento, pero el gemelo viajero cambia de sistema inercial al dar la vuelta, por lo que los dos caminos a traves del espacio-tiempo no son simetricos.',
  },
  {
    question: '¿Por qué el gemelo viajero envejece menos?',
    answer: 'En la relatividad especial, el tiempo propio transcurrido depende del camino a traves del espacio-tiempo. Un reloj que se mueve a velocidad v con respecto a un observador inercial late mas lentamente segun el factor de Lorentz gamma. El viajero acumula menos tiempo propio a lo largo de las etapas de ida y vuelta que el gemelo que se queda en la Tierra.',
  },
  {
    question: '¿La aceleracion causa la diferencia de edad?',
    answer: 'La aceleracion es importante porque permite al viajero invertir la direccion y reunirse con la Tierra, pero la diferencia de edad se calcula a partir de la trayectoria completa en el espacio-tiempo, no solo de la aceleracion. Incluso si el giro fuera muy breve, el camino del viajero seguiria conteniendo menos tiempo propio que el camino terrestre.',
  },
  {
    question: '¿Qué significa el factor de Lorentz gamma?',
    answer: 'El factor de Lorentz gamma es igual a 1 dividido por la raiz cuadrada de 1 menos v al cuadrado sobre c al cuadrado. Indica que tan fuertemente difieren los intervalos de tiempo, las longitudes y las energias entre sistemas inerciales. A velocidades cotidianas gamma es casi 1, pero cerca de la velocidad de la luz aumenta drasticamente.',
  },
  {
    question: '¿Se puede medir este efecto en la vida real?',
    answer: 'Si. La dilatacion del tiempo se ha medido con particulas rapidas, relojes atomicos transportados en aviones, sistemas de sincronizacion satelital y aceleradores de particulas. La paradoja de los gemelos usa una historia de viaje extrema, pero el efecto de reloj subyacente es una parte rutinariamente verificada de la fisica moderna.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Visualizacion del espacio-tiempo de la paradoja de los gemelos',
    controlsTitle: 'Controles de la paradoja de los gemelos',
    worldlineLabel: 'Diagrama de linea de universo para el gemelo terrestre y el gemelo viajero',
    earthTwin: 'Edad del gemelo terrestre',
    travelingTwin: 'Edad del viajero',
    presetCruise: 'Crucero',
    presetRelativistic: 'Relativista',
    presetExtreme: 'Extremo',
    velocityLabel: 'Velocidad de la nave',
    earthYearsLabel: 'Tiempo transcurrido en la Tierra',
    ageGapLabel: 'Diferencia de edad al reunirse',
    gammaLabel: 'Factor de Lorentz',
    shipTimeLabel: 'Tiempo propio del viajero',
    distanceLabel: 'Distancia hasta el giro',
    yearsUnit: 'años',
    yearsShortUnit: 'años',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de la Paradoja de los Gemelos para la Relatividad Especial',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El visualizador de la paradoja de los gemelos convierte una de las ideas mas famosas de la relatividad especial en un diagrama interactivo del espacio-tiempo. Establezca la velocidad de una nave espacial como fraccion de la velocidad de la luz, elija cuantos anos pasan en la Tierra, y la calculadora computa el factor de Lorentz, el tiempo propio del viajero, la diferencia de edad al reunirse y la distancia de ida hasta el punto de giro. El diseno visual separa el reloj terrestre del reloj de la nave para que la asimetria sea visible en lugar de estar oculta dentro de formulas.',
    },
    {
      type: 'title',
      text: 'Como funciona el calculo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La cantidad central es el factor de Lorentz: gamma = 1 / sqrt(1 - v^2 / c^2). Para un viaje simple de ida y vuelta con velocidad de crucero constante, el tiempo experimentado por el viajero es la duracion de la mision en el sistema Tierra dividida por gamma. La diferencia entre esas dos duraciones es la diferencia de edad cuando los gemelos se reunen. La herramienta tambien muestra la distancia de giro en el sistema Tierra, que es la mitad del tiempo total terrestre multiplicado por la velocidad de la nave en anos luz por ano.',
    },
    {
      type: 'table',
      headers: ['Velocidad', 'Factor de Lorentz', 'Ritmo del Reloj Viajero', 'Significado Fisico'],
      rows: [
        ['0.50c', '1.155', '86.6% del ritmo terrestre', 'Un efecto relativistico notable pero moderado.'],
        ['0.86c', '1.960', '51.0% del ritmo terrestre', 'El viajero envejece aproximadamente la mitad de rapido durante el crucero.'],
        ['0.98c', '5.025', '19.9% del ritmo terrestre', 'La dilatacion temporal extrema domina el resultado de la mision.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que la situacion no es simetrica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A primera vista, cada gemelo puede decir que el otro se mueve, lo que hace que el resultado parezca contradictorio. La resolucion es que el gemelo terrestre permanece aproximadamente en un sistema inercial, mientras que el gemelo viajero sale, invierte la direccion y regresa. Ese cambio de sistema inercial le da al viajero un camino diferente a traves del espacio-tiempo. La linea de universo dibujada por esta herramienta se dobla en el evento de giro, mientras que la linea de universo del gemelo terrestre permanece recta.',
    },
    {
      type: 'title',
      text: 'Lectura del diagrama de linea de universo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una linea de universo es un mapa de un objeto a traves del espacio-tiempo en lugar de a traves del espacio solamente. En este visualizador, la linea vertical de la Tierra representa al gemelo que se queda en casa. La trayectoria roja inclinada representa al viajero saliendo de la Tierra y regresando. El aumento de la velocidad hace que la trayectoria del viajero se incline mas dramaticamente y reduce la cantidad de tiempo propio acumulado en el reloj de la nave.',
    },
    {
      type: 'list',
      items: [
        '<strong>Diferencia de edad:</strong> que tan mas joven es el viajero al reunirse.',
        '<strong>Factor de Lorentz:</strong> el multiplicador que vincula el tiempo del sistema Tierra con el tiempo propio del viajero.',
        '<strong>Tiempo propio del viajero:</strong> el tiempo real transcurrido medido por un reloj en la nave espacial.',
        '<strong>Distancia hasta el giro:</strong> la distancia de ida en el sistema Tierra antes de que el viajero invierta el rumbo.',
      ],
    },
    {
      type: 'title',
      text: 'Evidencia practica de la dilatacion del tiempo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La paradoja de los gemelos es un experimento mental claro, pero la dilatacion del tiempo no es especulativa. Los muones creados en la atmosfera superior sobreviven el tiempo suficiente para llegar al suelo porque sus relojes en movimiento estan dilatados desde la perspectiva terrestre. Los experimentos con relojes atomicos en aviones y la navegacion satelital de precision tambien requieren correcciones relativisticas. La misma matematica detras de este visualizador es parte de la infraestructura de sincronizacion utilizada por los sistemas GPS modernos.',
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
