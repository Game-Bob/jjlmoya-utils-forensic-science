import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-fractal-mandelbrot';
const title = 'Calculadora de Fractales de Mandelbrot y Explorador de Autosimilitud';
const description = 'Explore el conjunto de Mandelbrot, acerquese a los bordes fractales autosemejantes y compare la profundidad de iteracion, el contraste de color y las coordenadas del plano complejo.';

const howTo = [
  {
    name: 'Elija una region del conjunto de Mandelbrot',
    text: 'Comience desde el conjunto completo o salte directamente a una region de alto detalle como el valle del caballito de mar o un minibrot en espiral.',
  },
  {
    name: 'Acerque haciendo clic en la imagen',
    text: 'Haga clic en cualquier punto del lienzo para re-centrar el plano complejo y magnificar el fractal alrededor de esa coordenada.',
  },
  {
    name: 'Ajuste la profundidad de iteracion y el contraste de color',
    text: 'Aumente el presupuesto de iteraciones para revelar una estructura de borde mas fina, luego ajuste el contraste y la paleta para que las bandas de tiempo de escape sean mas faciles de leer.',
  },
];

const faq = [
  {
    question: '¿Qué muestra la calculadora del conjunto de Mandelbrot?',
    answer: 'Muestra que numeros complejos c mantienen acotada la recurrencia z(n+1) = z(n)^2 + c al comenzar desde z = 0. Los puntos que nunca escapan dentro del presupuesto de iteracion seleccionado se colorean como miembros del conjunto, mientras que los puntos exteriores se colorean segun la rapidez con que su orbita escapa.',
  },
  {
    question: '¿Por qué el borde de Mandelbrot contiene tanto detalle?',
    answer: 'El borde separa las orbitas estables de las que escapan, y pequenos cambios de coordenadas cerca de ese borde pueden cambiar completamente el comportamiento a largo plazo. Esta sensibilidad crea bulbos anidados, espirales, filamentos y copias en miniatura que aparecen en muchos niveles de ampliacion.',
  },
  {
    question: '¿Es el conjunto de Mandelbrot verdaderamente autosemejante?',
    answer: 'No es perfectamente autosemejante en el mismo sentido estricto que un triangulo de Sierpinski, pero es ricamente cuasi-autosemejante. Pequenas copias de todo el conjunto aparecen por todo el plano, a menudo distorsionadas y conectadas por elaboradas estructuras ramificadas.',
  },
  {
    question: '¿Qué controla el numero de iteraciones?',
    answer: 'El numero de iteraciones controla cuanto tiempo prueba la calculadora cada punto antes de decidir que probablemente pertenece al conjunto. Los valores mas altos revelan filamentos mas profundos y minibrots mas limpios, pero requieren mas computo por pixel.',
  },
  {
    question: '¿Por qué cambian los colores fuera de la region negra?',
    answer: 'Los colores exteriores se basan en el tiempo de escape: los puntos que escapan rapidamente reciben colores diferentes a los puntos que permanecen cerca del conjunto durante muchas iteraciones. El coloreado suave reduce las bandas pronunciadas y facilita la inspeccion de la geometria de las orbitas cercanas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Fractales de Mandelbrot',
    canvasLabel: 'Lienzo interactivo del conjunto de Mandelbrot',
    presetsLabel: 'Preajustes de region de Mandelbrot',
    presetFull: 'Conjunto Completo',
    presetSeahorse: 'Valle del Caballito de Mar',
    presetSpiral: 'Minibrot Espiral',
    centerPoint: 'Centro',
    magnification: 'Ampliacion',
    visibleWindow: 'Ventana visible',
    renderBudget: 'Iteraciones',
    iterationsLabel: 'Profundidad de iteracion',
    contrastLabel: 'Contraste de escape',
    colorLabel: 'Campo de color',
    paletteEmber: 'Bandas de brasa',
    paletteLagoon: 'Plasma de laguna',
    paletteInk: 'Espectro de tinta',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora del Conjunto de Mandelbrot para Fractales, Tiempo de Escape y Autosimilitud',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de fractales de Mandelbrot renderiza el clasico conjunto del plano complejo definido por la iteracion <strong>z(n+1) = z(n)^2 + c</strong>. Esta disenada para la exploracion en lugar de la visualizacion pasiva: cada clic re-centra el plano, cada zoom expone un vecindario matematico mas pequeno, y el control deslizante de iteraciones le permite decidir que tan profundamente debe probar la calculadora el borde antes de colorear un punto como estable o en escape.',
    },
    {
      type: 'title',
      text: 'Como leer la imagen de Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La forma central oscura marca los puntos cuyas orbitas permanecen acotadas dentro del presupuesto de iteracion actual. El exterior coloreado es un mapa de tiempo de escape. Un punto coloreado cerca del conjunto puede sobrevivir cientos de iteraciones antes de que su magnitud exceda el radio de escape, mientras que un punto lejano escapa casi de inmediato. La geometria cientificamente mas interesante no suele estar dentro de la forma rellena, sino a lo largo del borde donde el comportamiento acotado y no acotado se entrelazan.',
    },
    {
      type: 'table',
      headers: ['Control', 'Que cambia', 'Cuando aumentarlo'],
      rows: [
        ['<strong>Profundidad de iteracion</strong>', 'Cuantos pasos de recurrencia se prueban para cada pixel.', 'Use valores mas altos despues de acercarse a filamentos delgados o copias en miniatura.'],
        ['<strong>Contraste de escape</strong>', 'Que fuertemente se separan los valores de escape suaves en bandas visibles.', 'Aumentelo cuando la imagen se vea plana; reduczalo cuando los colores sean demasiado fuertes.'],
        ['<strong>Paleta</strong>', 'La asignacion de color aplicada a los puntos exteriores.', 'Cambie de paleta para revelar estructuras que podrian estar ocultas por un campo de color.'],
      ],
    },
    {
      type: 'title',
      text: 'Autosimilitud y Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una de las razones por las que el conjunto de Mandelbrot es tan famoso es su cuasi-autosimilitud. A medida que se acerca a antenas, espirales y valles, se encuentra repetidamente con pequenas islas similares a Mandelbrot, a menudo llamadas minibrots. Estas copias no son meramente decorativas. Su disposicion refleja la dinamica de los mapas cuadraticos, incluyendo bulbos periodicos, patrones de bifurcacion y regiones donde las orbitas permanecen atrapadas durante largos periodos antes de escapar.',
    },
    {
      type: 'title',
      text: 'Por que importan mas iteraciones en el zoom profundo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En la vista del conjunto completo, un limite de iteracion modesto proporciona una imagen reconocible. Sin embargo, con una ampliacion mas profunda, muchos puntos del borde tardan mucho mas en revelar si escapan. Si el limite de iteracion es demasiado bajo, las estructuras finas pueden verse falsamente solidas o embarradas. Aumentar el numero de iteraciones mejora la clasificacion del borde y permite que la calculadora resuelva zarcillos estrechos, brazos espirales y bulbos satelite con mayor confianza.',
    },
    {
      type: 'title',
      text: 'Significado matematico de las coordenadas complejas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La lectura de coordenadas muestra el centro actual del viewport como un numero complejo c = a + bi. El eje horizontal es la parte real y el eje vertical es la parte imaginaria. Al hacer clic en el lienzo se elige una nueva coordenada compleja y luego se magnifica la ventana visible a su alrededor. Esto hace que la herramienta sea util para aprender como las regiones visuales del fractal se corresponden con ubicaciones precisas en el plano complejo.',
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
