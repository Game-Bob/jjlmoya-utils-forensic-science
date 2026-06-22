const slug = 'atractor-de-lorenz';
const title = 'Simulador del Atractor de Lorenz: El Efecto Mariposa en 3D';
const description = 'Explora la teoria del caos con esta simulacion interactiva en 3D del atractor de Lorenz. Visualiza el efecto mariposa ejecutando dos trayectorias casi de forma simultanea.';

const howTo = [
  {
    "name": "Rotar el lienzo",
    "text": "Haz clic y arrastra sobre el visor 3D para rotar el atractor y verlo desde diferentes angulos."
  },
  {
    "name": "Ajustar los deslizadores",
    "text": "Modifica los parametros Sigma, Rho y Beta para ver como el sistema transita hacia el caos."
  },
  {
    "name": "Observar la divergencia",
    "text": "Modifica la perturbacion inicial y observa como la distancia entre trayectorias crece exponencialmente."
  },
  {
    "name": "Pausar y reiniciar",
    "text": "Usa los controles para pausar la simulacion, limpiar los caminos o restaurar los valores por defecto."
  }
];

const faq = [
  {
    "question": "¿Qué es el Atractor de Lorenz?",
    "answer": "El atractor de Lorenz es un conjunto de soluciones caoticas para el sistema de Lorenz, un sistema de tres ecuaciones diferenciales acopladas de primer orden."
  },
  {
    "question": "¿Qué es el Efecto Mariposa?",
    "answer": "Es la dependencia sensible a las condiciones iniciales en un sistema no lineal, donde una pequena variacion inicial provoca grandes divergencias a largo plazo."
  },
  {
    "question": "¿Qué representan Sigma, Rho y Beta?",
    "answer": "Sigma es el numero de Prandtl, Rho es el numero de Rayleigh y Beta es la relacion de aspecto geometrico del sistema."
  },
  {
    "question": "¿Por qué la forma del atractor parece una mariposa?",
    "answer": "La iconica forma de alas dobles de mariposa surge porque el sistema tiene dos puntos de equilibrio inestables. La trayectoria orbita alrededor de un ala y luego transita de forma impredecible para orbitar la otra, creando la estructura distintiva en el espacio de fases tridimensional."
  },
  {
    "question": "¿Es el Atractor de Lorenz verdaderamente aleatorio?",
    "answer": "No. El sistema de Lorenz es completamente deterministico, lo que significa que su estado futuro esta totalmente definido por su estado actual y sus ecuaciones. Sin embargo, como es caotico, es completamente impredecible a largo plazo sin una precision infinita de las condiciones iniciales."
  }
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
  "copied": "Copiado",
  "noHistory": "Sin historial",
  "load": "Cargar",
  "delete": "Eliminar",
  "title": "Atractor de Lorenz",
  "subTitle": "Caos Determinista y Dependencia Sensible",
  "parameterControls": "Parametros del Sistema",
  "simulationSpeed": "Velocidad (dt)",
  "initialPerturbation": "Perturbacion Inicial (dx)",
  "trajectories": "Trayectorias",
  "distance": "Distancia de Divergencia",
  "exponentialGrowth": "Divergencia Exponencial",
    "resetDefault": "Reiniciar",
    "clearPath": "Limpiar",
    "play": "Reanudar",
    "pause": "Pausar",
  "coords": "Coordenadas",
  "divergenceExplanation": "El grafico de divergencia muestra la distancia euclidiana entre las dos trayectorias a lo largo del tiempo. Observa como aumenta exponencialmente."
},
  seo: [
    { type: 'title', text: "Caos Determinista: Entendiendo las Ecuaciones de Lorenz", level: 2 },
    { type: 'paragraph', html: "El sistema de Lorenz es una formulacion historica en la dinamica no lineal y la teoria del caos. Originalmente derivado en 1963 por el meteorologo y matematico <strong>Edward Lorenz</strong>, el modelo nacio de una representacion simplificada de la convecion atmosferica. Lorenz simplifico las complejas ecuaciones de la dinamica de fluidos en tres ecuaciones diferenciales ordinarias acopladas. Su descubrimiento de que estas ecuaciones simples y deterministicas podian producir un comportamiento complejo, no periodico y caotico cambio nuestra comprension de los sistemas fisicos." },
    { type: 'paragraph', html: "El sistema esta definido por tres ecuaciones diferenciales acopladas que siguen una coordenada en el espacio de fases tridimensional a lo largo del tiempo:" },
    {
      type: 'list',
      items: [
      "<strong>dx/dt = &sigma; * (y - x):</strong> Describe la tasa de movimiento convectivo. El parametro &sigma; (numero de Prandtl) representa la relacion entre la viscosidad del fluido y la conductividad termica.",
      "<strong>dy/dt = x * (&rho; - z) - y:</strong> Representa la diferencia de temperatura entre las corrientes convectivas ascendentes y descendentes. El parametro &rho; (numero de Rayleigh) representa la intensidad del calentamiento convectivo.",
      "<strong>dz/dt = x * y - &beta; * z:</strong> Sigue la distorsion del perfil de temperatura vertical respecto a un gradiente lineal. El parametro &beta; es la relacion de aspecto geometrico de la celda convectiva.",
      ],
    },
    { type: 'title', text: "El Efecto Mariposa: Dependencia Sensible de las Condiciones Iniciales", level: 3 },
    { type: 'paragraph', html: "La caracteristica definitoria de los sistemas caoticos es su <strong>dependencia sensible de las condiciones iniciales</strong>, conocida popularmente como el <strong>Efecto Mariposa</strong>. En un sistema no caotico, una pequena diferencia en el estado inicial conduce a una diferencia proporcionalmente pequena en el estado final. En un sistema caotico, sin embargo, la distancia entre dos trayectorias que comienzan arbitrariamente cerca crece exponencialmente con el tiempo." },
    { type: 'paragraph', html: "Esta sensibilidad se demuestra en este simulador ejecutando dos trayectorias (T1 en cian y T2 en rosa) que comienzan con una separacion minima (definida por el deslizador de Perturbacion). Al principio, viajan por practicamente el mismo camino, mostrando una linea morada mezclada. Despues de un breve periodo, la diferencia inicial es amplificada por los terminos no lineales del sistema, y los caminos divergen por completo." },
    {
      type: 'table',
      headers: ["Parametro","Valor Estandar","Contexto Fisico","Comportamiento al Cambiar"],
      rows: [
        ["&sigma; (Sigma)","10.0","Numero de Prandtl","Determina la friccion interna del fluido. Valores mas altos aceleran la reaccion de los cambios de velocidad respecto a los gradientes de temperatura."],
        ["&rho; (Rho)","28.0","Numero de Rayleigh","Principal motor del caos. Por debajo de &rho; = 1, el origen es el unico punto estable. En &rho; = 28, el sistema es completamente caotico."],
        ["&beta; (Beta)","8/3 (2.667)","Relacion de Aspecto Geometrico","Controla la relacion ancho-alto de las celdas de conveccion. Modifica la escala y la velocidad de rotacion de las orbitas."],
      ],
    },
    { type: 'title', text: "Espacio de Fases, Atractores Extranos y Fractales", level: 3 },
    { type: 'paragraph', html: "En la fisica clasica, las trayectorias eventualmente se estabilizan en puntos fijos (sumideros) o repiten el mismo camino indefinidamente (ciclos limite). El sistema de Lorenz no hace ninguno de los dos. El camino gira en tres dimensiones infinitamente sin cruzarse nunca a si mismo. Esta estructura infinita y no repetitiva esta acotada dentro de un volumen finito del espacio de fases, formando un <strong>atractor extrano</strong>." },
    { type: 'paragraph', html: "La geometria de este atractor es fractal, con una dimension de Hausdorff de aproximadamente 2.06. Esto significa que el atractor es mas que una superficie bidimensional pero menos que un volumen tridimensional solido, mostrando una estructura topologica compleja donde los caminos se doblan sin intersectarse." },
    { type: 'title', text: "Aplicaciones de la Teoria del Caos en la Ciencia", level: 3 },
    { type: 'paragraph', html: "Las lecciones aprendidas del atractor de Lorenz se extienden mucho mas alla de la prediccion meteorologica. La teoria del caos ha influido en muchos campos modernos del estudio:" },
    {
      type: 'list',
      items: [
      "<strong>Meteorologia:</strong> Establecio los limites fundamentales de la predictibilidad meteorologica, dando lugar a los metodos de prediccion por conjuntos.",
      "<strong>Criptografia:</strong> La naturaleza determinista pero impredecible de las orbitas caoticas se utiliza para generar claves pseudoaleatorias seguras y cifrar flujos de datos sensibles.",
      "<strong>Cardiologia:</strong> Se utiliza para modelar los ritmos cardiacos, donde los corazones sanos exhiben caracteristicas caoticas, mientras que los ritmos periodicos pueden indicar patologia.",
      "<strong>Ingenieria:</strong> Ayuda a disenar estructuras estables analizando y evitando la resonancia caotica en puentes colgantes y sistemas mecanicos.",
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
        stepValue: step.name,
        text: step.text,
      })),
    },
  ],
};
