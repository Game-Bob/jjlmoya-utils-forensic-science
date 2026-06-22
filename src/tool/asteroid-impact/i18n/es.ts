const slug = 'simulador-impacto-asteroide';
const description = 'Simula el impacto de asteroides con física real. Calcula energía, cráter, radiación térmica y onda de choque. ¿Sobrevivirías a Chicxulub?';
const title = 'Simulador de Impacto de Asteroides: Calculadora de Apocalipsis';
const howTo = [
    {
      name: 'Elegir el tamaño del proyectil',
      text: 'Introduce el diámetro del asteroide. Desde un pequeño meteorito de 10 metros hasta un destructor de planetas de 10 kilómetros.',
    },
    {
      name: 'Configurar velocidad y ángulo',
      text: 'Ajusta la velocidad de aproximación y el ángulo de entrada (45° es el valor estadístico más probable).',
    },
    {
      name: 'Definir naturaleza del asteroide',
      text: 'Selecciona si el asteroide es de roca, hierro o hielo para calcular la profundidad del cráter correctamente.',
    },
    {
      name: 'Analizar el veredicto de supervivencia',
      text: 'Arrastra el asteroide al mapa e indica a qué distancia te encuentras para ver los efectos de la radiación, el terremoto, la onda de choque.',
    },
  ];
const faq = [
    {
      question: '¿Cómo se calcula la energía de un impacto?',
      answer: 'La energía principal es cinética: (1/2) * masa * velocidad². Usamos densidades realistas (ej. 3000 kg/m³ para asteroides rocosos) y velocidades típicas de entrada atmosférica (11 a 72 km/s). La energía resultante se mide en Megatones de TNT.',
    },
    {
      question: '¿Qué es la onda de choque térmica?',
      answer: 'Al entrar en la atmósfera, el asteroide comprime el aire de forma tan violenta que crea una bola de fuego mil veces más brillante que el Sol. La radiación térmica resultante puede causar quemaduras de tercer grado e incendiar bosques a kilómetros del impacto.',
    },
    {
      question: '¿Por qué algunos asteroides no crean cráter?',
      answer: 'Las rocas más pequeñas (<50m) suelen fragmentarse y explotar en la atmósfera debido a la presión del aire (Airburst), como ocurrió en Cheliábinsk. La energía se libera como una potente onda de choque de presión, pero no llega a tocar suelo como un cuerpo sólido.',
    },
    {
      question: '¿Qué probabilidad hay de un impacto real?',
      answer: 'Impactos pequeños (como el de Rusia en 2013) ocurren cada década. Impactos catastróficos (tipo Tunguska) cada pocos siglos. Un evento de extinción global como Chicxulub ocurre aproximadamente cada 100 millones de años.',
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
    noHistory: 'Sin historial',
    load: 'Cargar',
    delete: 'Eliminar',
    activateGPS: 'Activar GPS',
    analysisLabel: 'Análisis',
    dragToMap: 'ARRASTRA AL MAPA',
    diameterLabel: 'Diámetro',
    velocityLabel: 'Velocidad',
    typeLabel: 'Tipo',
    historicalData: 'Datos Históricos',
    composition: 'Composición',
    rock: 'Roca',
    iron: 'Hierro',
    ice: 'Hielo',
    clearAll: 'Limpiar todo',
    searching: 'Buscando...',
    gpsActive: 'GPS Activo',
    gpsError: 'Error GPS',
    verdictSafe: 'ZONA SEGURA',
    verdictSafeSub: 'Sin amenazas',
    verdictShock: 'ONDA DE CHOQUE',
    verdictShockSub: 'Daños estructurales',
    verdictBurned: 'RADIACIÓN TÉRMICA',
    verdictBurnedSub: 'Peligro extremo',
    verdictVaporized: 'ZONA CERO',
    verdictVaporizedSub: 'Impacto directo',
    presetAerial: 'Aéreo',
    presetForest: 'Bosque',
    presetComet: 'Cometa',
    presetELE: 'E.L.E.',
  },
  seo: [
    {
      type: 'title',
      text: 'Cuando el Cielo Cae: La Física del Apocalipsis Cósmico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Los asteroides no son solo rocas espaciales. Son balas cósmicas viajando a 20 km/s, capaces de liberar más energía que todas las armas nucleares del planeta combinadas. Este simulador traduce la física abstracta en consecuencias humanas tangibles.',
    },
    {
      type: 'title',
      text: 'La Ecuación del Fin del Mundo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Todo comienza con la energía cinética: <strong>E = ½mv²</strong>. Un asteroide de 100 metros viajando a 20 km/s libera aproximadamente 0.5 megatones de TNT. Para contexto, la bomba de Hiroshima fue de 0.015 megatones.',
    },
    {
      type: 'paragraph',
      html: 'Pero el tamaño escala exponencialmente. Un objeto 10 veces más grande tiene 1,000 veces más volumen (y masa), liberando energía equivalente a <strong>500 megatones</strong>. Chicxulub, el asesino de dinosaurios, liberó el equivalente a <strong>100 millones de megatones</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Un asteroide de 1 km impactando la Tierra liberaría más energía que todas las armas nucleares del planeta detonadas simultáneamente.',
    },
    {
      type: 'title',
      text: 'Anatomía de la Destrucción: Las Capas Concéntricas del Apocalipsis',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>El Cráter (Zona Cero):</strong> El diámetro del cráter escala con E^0.3. Un impacto de 1 megatón crea un cráter de ~1 km. Todo dentro es vaporizado instantáneamente.',
        '<strong>Radiación Térmica (El Flash):</strong> La bola de fuego emite radiación infrarroja intensa. A distancias de E^0.41 km, la ropa se incendia y la piel sufre quemaduras de tercer grado.',
        '<strong>Onda de Choque (El Martillo):</strong> La onda de sobrepresión viaja a velocidad supersónica. A 1 psi, los cristales estallan. A 5 psi, los edificios colapsan.',
        '<strong>Terremoto (El Eco Sísmico):</strong> El impacto genera ondas sísmicas globales. Chicxulub causó un terremoto de magnitud 11, rompiendo la escala de Richter.',
      ],
    },
    {
      type: 'title',
      text: 'Impactos Históricos: Lecciones del Pasado',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ubicación & Año', 'Tamaño', 'Energía', 'Efectos'],
      rows: [
        ['Chelyabinsk, Rusia (2013)', '20 metros', '500 kilotones', 'Onda de choque a 100 km, 1,500 heridos, ventanas rotas'],
        ['Tunguska, Siberia (1908)', '50-60 metros', '10-15 megatones', 'Arrasó 2,000 km² de bosque, 80 millones de árboles derribados'],
        ['Chicxulub, Golfo de México (66 M años)', '10 km', '100 millones de megatones', 'Extinción del 75% de la vida en la Tierra'],
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


