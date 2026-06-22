import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'limite-de-roche-calculadora-disrupcion-satelite';
const title = 'Calculadora del Límite de Roche y Simulador de Disrupción de Satélites';
const description = 'Calcula el límite de Roche para planetas y lunas, compara distancias de ruptura fluidas y rígidas, y visualiza cómo las fuerzas de marea convierten un satélite en un sistema de anillos.';

const howTo = [
  {
    name: 'Elige el cuerpo primario',
    text: 'Selecciona el planeta cuya gravedad está estirando al satélite. La calculadora carga su radio, densidad y masa para las estimaciones del límite de Roche y el período orbital.',
  },
  {
    name: 'Selecciona el tipo de satélite',
    text: 'Elige una luna helada, una luna rocosa, un montón de escombros o un cuerpo rico en hierro. La densidad y la cohesión interna cambian el límite de ruptura.',
  },
  {
    name: 'Mueve el deslizador orbital',
    text: 'Arrastra la distancia orbital hacia adentro o hacia afuera. El disco visual muestra si el satélite está fuera del límite de Roche, rozándolo, fragmentándose o convirtiéndose en un anillo.',
  },
  {
    name: 'Compara los límites',
    text: 'Usa las lecturas para comparar el límite de Roche fluido clásico con la estimación rígida inferior y el límite operativo ajustado por cohesión.',
  },
];

const faq = [
  {
    question: '¿Qué es el límite de Roche?',
    answer: 'El límite de Roche es la distancia desde un cuerpo primario masivo a la cual las fuerzas de marea sobre un cuerpo orbitante más pequeño se vuelven lo suficientemente intensas como para superar la autogravedad del cuerpo menor. Dentro de ese límite, un satélite débil o fluido puede desintegrarse.',
  },
  {
    question: '¿Por qué existen límites de Roche fluidos y rígidos?',
    answer: 'Un satélite fluido se deforma fácilmente, por lo que las mareas pueden amplificar su elongación y desintegrarlo más lejos del planeta. Un satélite rígido puede resistir la deformación mediante su resistencia material, por lo que la estimación rígida simple sitúa la ruptura más cerca del primario.',
  },
  {
    question: '¿Toda luna dentro del límite de Roche se convierte instantáneamente en anillos?',
    answer: 'No. La disrupción real depende del giro, la composición, las grietas, la porosidad, el calentamiento, los impactos y la resistencia del material. Esta herramienta muestra el límite gravitacional clásico y usa una banda de transición para comunicar el riesgo en lugar de un interruptor instantáneo.',
  },
  {
    question: '¿Por qué los anillos de Saturno están relacionados con la física del límite de Roche?',
    answer: 'Los anillos de Saturno ocupan una región donde el material helado puede persistir como partículas en lugar de acumularse en una luna grande. El límite de Roche ayuda a explicar por qué las partículas de los anillos permanecen dispersas cerca del planeta.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Cuerpo primario',
    satelliteType: 'Tipo de satélite',
    orbitDistance: 'Distancia orbital',
    rocheBoundary: 'Límite de Roche',
    fluidLimit: 'Límite fluido',
    rigidLimit: 'Límite rígido',
    activeLimit: 'Límite activo',
    safetyRatio: 'Relación de seguridad',
    orbitalPeriod: 'Período orbital',
    tidalStress: 'Esfuerzo de marea',
    ringFormation: 'Formación de anillos',
    stable: 'Órbita estable',
    grazing: 'Roce de marea',
    fragmenting: 'Fragmentación',
    ring: 'Sistema de anillos',
    km: 'km',
    hours: 'h',
    density: 'Densidad',
    cohesion: 'Cohesión',
    planetRadius: 'Radio del planeta',
    reset: 'Reiniciar',
    closePass: 'Paso cercano',
    moonTrack: 'Trayectoria de la luna',
    debrisTrack: 'Trayectoria de escombros',
    primaryEarth: 'Tierra',
    primaryMars: 'Marte',
    primaryJupiter: 'Júpiter',
    primarySaturn: 'Saturno',
    primaryNeptune: 'Neptuno',
    satelliteIcyMoon: 'Luna helada',
    satelliteRockyMoon: 'Luna rocosa',
    satelliteRubblePile: 'Pila de escombros',
    satelliteIronCore: 'Luna rica en hierro',
    cohesionFluid: 'Fluido',
    cohesionFractured: 'Fracturado',
    cohesionRigid: 'Rígido',
  },
  seo: [
    {
      type: 'title',
      text: 'Fórmula del Límite de Roche, Significado y Cómo Usar Esta Calculadora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>límite de Roche</strong> es la distancia orbital mínima a la cual un satélite mantenido unido principalmente por su propia gravedad puede orbitar un cuerpo mayor sin ser desgarrado por las fuerzas de marea. La gente suele buscarlo cuando quiere saber si una luna, cometa, asteroide o escenario artificial sobreviviría a una aproximación cercana a un planeta, o si el material se dispersaría formando un anillo. Esta calculadora responde a esa pregunta combinando el radio del planeta, la densidad del planeta, la densidad del satélite y la resistencia interna aproximada del satélite.',
    },
    {
      type: 'paragraph',
      html: 'La idea clave es simple: la gravedad no es igualmente fuerte en todo el satélite. El lado cercano es atraído con más fuerza que el lado lejano, creando una fuerza de estiramiento. Si ese estiramiento de marea es más fuerte que la autogravedad y la cohesión material del satélite, el cuerpo puede agrietarse, perder masa y eventualmente fragmentarse. El límite de Roche no es solo una distancia; es una comparación entre el esfuerzo de marea externo y la unión interna.',
    },
    {
      type: 'title',
      text: 'Ecuaciones del Límite de Roche Usadas por la Calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para un satélite fluido o muy débil, la aproximación clásica es <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. Para un satélite rígido, una aproximación común es <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. En estas ecuaciones, <strong>d</strong> es el límite de Roche medido desde el centro del planeta, <strong>R</strong> es el radio del cuerpo primario, <strong>rho_M</strong> es la densidad del cuerpo primario y <strong>rho_m</strong> es la densidad del satélite.',
    },
    {
      type: 'list',
      items: [
        '<strong>Radio del primario:</strong> Planetas más grandes crean una distancia de Roche mayor incluso cuando la densidad es similar.',
        '<strong>Densidad del primario:</strong> Un primario más denso aumenta la intensidad de la marea a un múltiplo dado de su radio.',
        '<strong>Densidad del satélite:</strong> Un satélite más denso tiene una autogravedad más fuerte, por lo que puede sobrevivir más cerca del planeta.',
        '<strong>Resistencia del satélite:</strong> Un objeto fluido, helado, fracturado o de escombros se desintegra más lejos que un objeto rígido compacto.',
      ],
    },
    {
      type: 'table',
      headers: ['Modelo', 'Forma de la fórmula', 'Úsalo para', 'Qué significa el resultado'],
      rows: [
        ['Límite de Roche fluido', '2.44 R (rho_M / rho_m)^(1/3)', 'Lunas heladas, cuerpos fundidos, montones de escombros, cometas débiles', 'La distancia de ruptura conservadora para objetos que se deforman fácilmente.'],
        ['Límite de Roche rígido', '1.26 R (rho_M / rho_m)^(1/3)', 'Cuerpos rocosos densos o metálicos con resistencia material', 'Una estimación inferior más cercana donde la resistencia del material retrasa la disrupción.'],
        ['Visualización ajustada por cohesión', 'Entre los casos fluido y rígido', 'Comparación rápida de escenarios en este simulador', 'Una línea de riesgo práctica para el tipo de satélite seleccionado, no un interruptor universal de ley natural.'],
      ],
    },
    {
      type: 'title',
      text: 'Ejemplo: Por Qué una Luna Helada Cerca de Saturno es Vulnerable',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturno es mucho menos denso que la Tierra, pero es enorme. Un satélite helado de baja densidad tiene una autogravedad débil en comparación con una luna rocosa compacta, por lo que la relación de densidades sitúa el límite de Roche fluido lejos de las cimas de las nubes de Saturno. Esta es una razón por la cual la física del límite de Roche es central para entender por qué Saturno puede mantener un sistema de anillos amplio y brillante compuesto principalmente de partículas heladas en lugar de una luna grande reensamblada.',
    },
    {
      type: 'paragraph',
      html: 'Si eliges Saturno y una luna helada en la calculadora, luego arrastras la órbita hacia adentro, observa la relación de seguridad. Por encima de <strong>1.00x</strong>, la órbita seleccionada está fuera del límite de Roche activo. Cerca de <strong>1.00x</strong>, la luna está en una región de roce de marea donde la pérdida de masa o el agrietamiento son plausibles. Por debajo de <strong>1.00x</strong>, la visualización cambia hacia arcos de fragmentos y formación de anillos porque el modelo seleccionado predice disrupción.',
    },
    {
      type: 'title',
      text: 'Cómo Interpretar la Relación de Seguridad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>relación de seguridad</strong> es la distancia orbital actual dividida por el límite de Roche seleccionado. Una relación de <strong>1.25x</strong> significa que la órbita está un 25% más allá de la estimación de ruptura activa. Una relación de <strong>1.00x</strong> significa que la órbita está exactamente en el límite de Roche seleccionado. Una relación de <strong>0.80x</strong> significa que el satélite está bien dentro de la zona de disrupción seleccionada.',
    },
    {
      type: 'table',
      headers: ['Relación de seguridad', 'Estado mostrado', 'Lectura práctica'],
      rows: [
        ['Por encima de 1.12x', 'Órbita estable', 'El satélite está fuera del límite de Roche elegido para este modelo simplificado.'],
        ['1.00x a 1.12x', 'Roce de marea', 'El objeto está lo suficientemente cerca como para que la deformación, el agrietamiento o la pérdida superficial puedan importar.'],
        ['0.78x a 1.00x', 'Fragmentación', 'La autogravedad ya no es suficiente en el modelo seleccionado; las corrientes de escombros son plausibles.'],
        ['Por debajo de 0.78x', 'Sistema de anillos', 'El cuerpo original se representa como material disperso siguiendo órbitas vecinas.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'La lectura del período orbital se incluye porque las aproximaciones cercanas no solo se tratan de distancia. El material dentro de la zona de disrupción sigue órbitas rápidas y ligeramente diferentes. Una vez que los fragmentos se separan, el esfuerzo orbital los dispersa alrededor del planeta, mientras que las colisiones aplastan y clasifican los escombros en un disco similar a un anillo.',
    },
    {
      type: 'title',
      text: 'Por Qué el Límite de Roche Puede Crear Anillos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando un satélite se rompe fuera del límite de Roche, los fragmentos pueden eventualmente colisionar y reacumularse en una luna más pequeña. Dentro del límite de Roche, los fragmentos cercanos no pueden fusionarse fácilmente en un cuerpo autogravitatorio estable porque las fuerzas de marea siguen separando el material. El resultado puede ser un anillo de larga duración, especialmente cuando los escombros son helados, colisionales y continuamente agitados por pequeñas lunas o resonancias.',
    },
    {
      type: 'paragraph',
      html: 'La formación de anillos es gradual. Una luna disruptada primero se alarga, luego pierde partículas y fragmentos más grandes. Esos fragmentos ocupan radios orbitales ligeramente diferentes, por lo que se desplazan adelante o atrás unos de otros. Con el tiempo, las colisiones amortiguan el movimiento vertical y el material se asienta en un disco delgado. Por eso el simulador muestra una transición de una luna única a arcos y luego a un anillo completo, en lugar de tratar la ruptura como una explosión instantánea.',
    },
    {
      type: 'title',
      text: 'Limitaciones Importantes de Esta Calculadora del Límite de Roche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calculadora está diseñada para intuición científica rápida, no para diseño de misiones de alta fidelidad. Los satélites reales se ven afectados por la rotación, la excentricidad orbital, la estratificación interna, la resistencia a la tracción, la porosidad, la temperatura, el calentamiento por marea, las fracturas previas, los impactos y las resonancias con otras lunas. Un montón de escombros giratorio en una órbita excéntrica puede fallar de manera diferente a una roca monolítica fría en una órbita circular, incluso si sus densidades medias parecen similares.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usa el límite fluido</strong> cuando el objeto es débil, helado, fundido, muy fracturado o hecho de agregado suelto.',
        '<strong>Usa el límite rígido</strong> como una estimación inferior para cuerpos compactos con resistencia interna significativa.',
        '<strong>Lee el límite activo</strong> como el límite de trabajo elegido por el simulador para el tipo de satélite seleccionado.',
        '<strong>No interpretes el resultado</strong> como una predicción exacta para una luna real nombrada sin un modelo geofísico detallado.',
      ],
    },
    {
      type: 'title',
      text: 'Preguntas Comunes que Esta Herramienta Ayuda a Responder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Usa esta herramienta cuando quieras estimar preguntas como: ¿A qué distancia puede acercarse una luna a la Tierra antes de romperse? ¿Por qué los anillos de Saturno están dentro de una región del límite de Roche? ¿Sobreviviría una luna rocosa más cerca que una luna helada? ¿Cómo cambia la densidad el límite de Roche? ¿Cuál es la diferencia entre el límite de Roche fluido y el rígido? Los controles están construidos alrededor de esas comparaciones, por lo que cambiar una variable muestra inmediatamente cómo responden la distancia de ruptura, la relación de seguridad y la visualización de formación de anillos.',
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
