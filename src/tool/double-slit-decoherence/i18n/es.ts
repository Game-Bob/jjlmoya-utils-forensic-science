import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-doble-rendija-decoherencia';
const title = 'Simulador del Experimento de Doble Rendija y Decoherencia';
const description = 'Active y desactive detectores de camino para ver cómo la interferencia cuántica se desvanece en dos bandas de partículas en un simulador visual de doble rendija.';

const howTo = [
  {
    name: 'Empiece con el detector apagado',
    text: 'Deje el detector de camino desactivado y observe cómo la pantalla forma franjas de interferencia brillantes y oscuras a partir de amplitudes de probabilidad coherentes.',
  },
  {
    name: 'Aumente la intensidad del detector',
    text: 'Suba el control del detector para introducir información de camino. Cuanto más fuerte es el detector, más cae la coherencia y las franjas se desdibujan.',
  },
  {
    name: 'Cambie la geometría de las rendijas',
    text: 'Ajuste la separación y la anchura de las rendijas para ver cómo la geometría modifica el espaciado de las franjas, la anchura de la envolvente y la distribución final en la pantalla.',
  },
  {
    name: 'Lea las métricas en vivo',
    text: 'Use la visibilidad de franjas, la información de camino y la coherencia para conectar el patrón visual con la historia de la medición cuántica.',
  },
];

const faq = [
  {
    question: '¿Por qué cambia el patrón cuando se encienden los detectores?',
    answer: 'Un detector que puede revelar qué rendija usó la partícula destruye la relación de fase entre las dos alternativas. Sin esa coherencia, los dos caminos de probabilidad ya no interfieren y la pantalla se aproxima a dos bandas anchas de partículas.',
  },
  {
    question: '¿Este simulador significa que la conciencia colapsa la función de onda?',
    answer: 'No. El simulador se centra en la información física de camino y la decoherencia. Un detector, el entorno o cualquier interacción que haga distinguible el camino puede suprimir la interferencia sin necesidad de un observador consciente.',
  },
  {
    question: '¿Qué es la visibilidad de franjas?',
    answer: 'La visibilidad de franjas compara las regiones brillantes y oscuras de la pantalla. Una visibilidad alta significa un fuerte contraste de interferencia. Una visibilidad baja significa que los espacios oscuros se han rellenado y el patrón se comporta más como dos flujos de partículas independientes.',
  },
  {
    question: '¿Es esto un solucionador completo de mecánica cuántica?',
    answer: 'No. Es un modelo educativo que combina una envolvente de interferencia de doble rendija con un control de decoherencia. Está construido para explicar visualmente el efecto de la medición, no para sustituir una simulación de la ecuación de Schrödinger para un aparato real.',
  },
  {
    question: '¿Por qué la separación de las rendijas afecta al espaciado de las franjas?',
    answer: 'Una separación mayor crea una diferencia de fase más rápida a través de la pantalla, por lo que las bandas brillantes y oscuras se acercan. Una separación menor distribuye las franjas más separadas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    stage: 'Aparato de doble rendija',
    controls: 'Controles de doble rendija',
    results: 'Resultados de doble rendija',
    kicker: 'Control de medición',
    detectorToggle: 'Activar detector de camino',
    detectorStrength: 'Intensidad del detector',
    slitSeparation: 'Separación de rendijas',
    slitWidth: 'Anchura de rendija',
    unobserved: 'No observado',
    observed: 'Observado',
    waveMode: 'Interferencia',
    particleMode: 'Bandas de partículas',
    fringeVisibility: 'Visibilidad de franjas',
    whichPath: 'Información de camino',
    coherence: 'Coherencia',
    readoutNote: 'La interferencia sobrevive cuando ambos caminos permanecen indistinguibles. La medición hace disponible la información de camino y la pantalla pierde sus franjas oscuras.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador del experimento de doble rendija con decoherencia y detección de camino',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador de doble rendija convierte el experimento cuántico clásico en un modelo visual interactivo. Con el detector apagado, la pantalla muestra un patrón de interferencia: bandas brillantes y oscuras producidas porque los dos caminos posibles permanecen coherentes. Cuando se añade un detector de camino, el patrón cambia gradualmente a dos bandas anchas de partículas porque las alternativas de camino se vuelven distinguibles.',
    },
    {
      type: 'paragraph',
      html: 'La herramienta está diseñada para estudiantes que buscan una explicación clara de por qué la observación cambia el resultado de la doble rendija. Evita la vaga frase "el observador cambia la realidad" y se centra en la idea físicamente útil: la interferencia requiere alternativas indistinguibles, mientras que la medición y el entrelazamiento con el entorno eliminan la relación de fase necesaria para las franjas.',
    },
    {
      type: 'title',
      text: 'Qué demuestra el experimento de doble rendija',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En la configuración no observada, un único objeto cuántico se describe mediante amplitudes de probabilidad asociadas a ambas rendijas. Esas amplitudes se suman con fase. En algunas posiciones de la pantalla se refuerzan mutuamente produciendo bandas brillantes; en otras se cancelan produciendo bandas oscuras. Esa estructura alternante es la firma de la interferencia.',
    },
    {
      type: 'paragraph',
      html: 'Si un detector registra qué rendija se usó, las alternativas dejan de ser indistinguibles. La pantalla ya no recibe una suma coherente de amplitudes. Recibe una mezcla de dos resultados condicionados al camino, por lo que los espacios oscuros de interferencia se rellenan y el resultado parece partículas pasando por una rendija o la otra.',
    },
    {
      type: 'title',
      text: 'Cómo leer el simulador',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Control o métrica', 'Qué cambia', 'Qué buscar'],
      rows: [
        ['Intensidad del detector', 'Cuánta información de camino está disponible', 'Valores más altos reducen la visibilidad de franjas y aumentan el patrón de dos bandas de partículas.'],
        ['Separación de rendijas', 'La distancia entre las dos aberturas', 'Una separación mayor hace que las bandas de interferencia estén más apretadas en la pantalla.'],
        ['Anchura de rendija', 'El tamaño de cada abertura', 'Rendijas más anchas estrechan la envolvente de difracción y remodelan el brillo general.'],
        ['Visibilidad de franjas', 'Contraste entre regiones brillantes y oscuras de la pantalla', 'Un número alto significa que la interferencia coherente sigue siendo visible.'],
        ['Coherencia', 'Cuánta relación de fase queda entre los caminos', 'La coherencia cae a medida que el detector hace distinguibles los caminos.'],
      ],
    },
    {
      type: 'title',
      text: 'Decoherencia sin misticismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La decoherencia es la pérdida de coherencia de fase utilizable cuando un sistema cuántico se correlaciona con un detector o el entorno. En un experimento de doble rendija, esa correlación puede transportar información de camino. Una vez que el camino queda registrado en principio, incluso si nadie lee el registro, el patrón de interferencia se suprime.',
    },
    {
      type: 'paragraph',
      html: 'Esta distinción importa porque muchas explicaciones exageran el papel de la observación humana. La física importante no es la vista o la conciencia; es si el montaje experimental preserva o destruye la indistinguibilidad de las alternativas que de otro modo interferirían.',
    },
    {
      type: 'title',
      text: 'Límites de este modelo educativo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El simulador usa un patrón compacto de doble rendija de estilo óptico y lo combina con un modelo de intensidad de detector para la decoherencia. Es excelente para la intuición, demostraciones en clase y revisión conceptual, pero no es una solución numérica de un aparato cuántico completo con espacios de Hilbert del detector, fuentes de ruido o calibración de laboratorio.',
    },
    {
      type: 'list',
      items: [
        '<strong>Úselo para entender conceptos:</strong> interferencia, información de camino, coherencia y medición.',
        '<strong>No lo use para diseño experimental:</strong> los experimentos reales de doble rendija requieren cálculos precisos de longitud de onda, apertura, detector y propagación.',
        '<strong>Céntrese en la tendencia:</strong> a medida que aumenta la distinguibilidad, disminuye el contraste de interferencia.',
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
