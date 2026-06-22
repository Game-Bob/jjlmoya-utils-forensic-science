import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'laboratorio-reglas-juego-vida-conway';
const title = 'Laboratorio de Reglas del Juego de la Vida de Conway';
const description = 'Juega, edita y compara autómatas celulares tipo Conway con reglas B/S, semillas de patrones, métricas en vivo y un tablero de simulación adaptable.';

const howTo = [
  {
    name: 'Sembrar el tablero',
    text: 'Elige un patrón como un planeador, pulsar o cañón de Gosper, colócalo en la cuadrícula o aleatoriza una población inicial.',
  },
  {
    name: 'Ejecutar la simulación',
    text: 'Usa los controles de reproducción, pausa, paso y velocidad para observar cómo evolucionan los nacimientos, muertes, densidad y estabilidad.',
  },
  {
    name: 'Cambiar la regla',
    text: 'Cambia entre preajustes o escribe una regla B/S como B3/S23, B36/S23 o B3678/S34678 para comparar diferentes autómatas.',
  },
];

const faq = [
  {
    question: '¿Qué es la notación B/S en el Juego de la Vida?',
    answer: 'La notación B/S lista los conteos de vecinos que crean una nueva célula viva y los conteos que permiten a una célula viva existente sobrevivir. El Juego de la Vida de Conway es B3/S23: las células muertas nacen con exactamente tres vecinos, y las células vivas sobreviven con dos o tres vecinos.',
  },
  {
    question: '¿Por qué se llama laboratorio de reglas en lugar de solo simulador?',
    answer: 'La regla clásica de Conway está incluida, pero el simulador está diseñado para comparar familias de autómatas celulares tipo Life. Editar los conteos de nacimiento y supervivencia cambia el comportamiento a largo plazo, produciendo replicadores, ondas, islas congeladas, crecimiento caótico o extinción.',
  },
  {
    question: '¿Qué significa estabilidad en el simulador?',
    answer: 'La estabilidad estima cuánto cambió la colonia durante la última generación. Alta estabilidad significa pocas células nacidas o muertas relativas a la población; baja estabilidad significa que el tablero es turbulento o se reorganiza rápidamente.',
  },
  {
    question: '¿El tablero tiene bordes?',
    answer: 'La simulación usa envoltura toroidal, por lo que el borde izquierdo se conecta con el derecho y la parte superior con la inferior. Esto mantiene los patrones moviéndose naturalmente sin desaparecer en bordes duros.',
  },
  {
    question: '¿Puedo dibujar mi propio patrón inicial?',
    answer: 'Sí. Pausa la simulación y haz clic o toca las células del tablero para activarlas o desactivarlas. Puedes combinar células dibujadas a mano con patrones integrados y ejecutar el resultado bajo cualquier preajuste de regla.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Tablero de autómatas celulares tipo Life',
    play: 'Reproducir',
    pause: 'Pausar',
    step: 'Paso',
    clear: 'Lienzo en blanco',
    randomize: 'Aleatorizar',
    ruleLabel: 'Notación de regla',
    ruleHelp: 'Conteos de nacimiento / supervivencia',
    speedLabel: 'Tempo',
    densityLabel: 'Densidad inicial',
    patternLabel: 'Patrón',
    placePattern: 'Colocar patrón',
    generation: 'Generación',
    population: 'Población',
    density: 'Densidad',
    stability: 'Estabilidad',
    births: 'Nacimientos',
    deaths: 'Muertes',
    achievementsLabel: 'Registro de laboratorio',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oscilación de periodo 2 detectada',
    achievementImmortal: 'Inmortal',
    achievementImmortalDescription: 'Generación 500 alcanzada con estabilidad total',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Una semilla aleatoria dispersa superó 1.000 células vivas',
    presetClassic: 'Conway clásico',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Día y noche',
    patternGlider: 'Planeador',
    patternGosper: 'Cañón de Gosper',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentominó',
    colonyStatus: 'Señal de colonia',
    statusFrozen: 'estable',
    statusGrowing: 'expandiéndose',
    statusFading: 'declinando',
    statusChaotic: 'volátil',
    invalidRule: 'Usa notación B/S como B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Simulador del Juego de la Vida de Conway con reglas editables', level: 2 },
    { type: 'paragraph', html: 'Este laboratorio de reglas del Juego de la Vida de Conway te permite ejecutar el autómata celular clásico y luego cambiar y comparar sus reglas. El tablero admite dibujo directo, colocación de patrones, semillas aleatorias, inspección paso a paso, tempo variable y mediciones en vivo de población, densidad, nacimientos, muertes y estabilidad.' },
    { type: 'title', text: 'Cómo las reglas B/S cambian el juego', level: 3 },
    { type: 'paragraph', html: 'Los autómatas celulares tipo Life se escriben a menudo en <strong>notación B/S</strong>. El lado B define cuántos vecinos vivos necesita una célula muerta para nacer; el lado S define cuántos vecinos necesita una célula viva para sobrevivir. La regla original de Conway, <strong>B3/S23</strong>, es famosa porque se sitúa en una región estrecha entre la extinción y el crecimiento descontrolado.' },
    { type: 'title', text: 'Leer las métricas en vivo', level: 3 },
    { type: 'paragraph', html: 'La población y la densidad muestran cuántas células están vivas, pero no cuentan la historia completa. Los nacimientos y las muertes exponen el nivel de actividad actual, mientras que la estabilidad estima si la colonia está asentándose en un oscilador, congelándose en figuras estáticas o permaneciendo turbulenta.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
