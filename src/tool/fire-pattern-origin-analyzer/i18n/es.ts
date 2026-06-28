import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analizador-origen-patrones-incendio';
const title = 'Analizador de origen por patrones de incendio';
const description = 'Mapea patrones en V, carbonización profunda, sombras de hollín e indicadores de quemado limpio sobre un plano de habitación, luego proyecta vectores de propagación del fuego para estimar el área de origen más probable.';

const howTo = [
  {
    name: 'Importar un plano de la escena',
    text: 'Arrastra una imagen del plano al espacio de trabajo o cárgala desde el disco antes de colocar vectores de evidencia.',
  },
  {
    name: 'Hacer clic para abrir el selector radial de evidencias',
    text: 'Sitúa el puntero sobre una marca de quemadura, abre el menú radial contextual y elige el tipo de indicador directamente sobre el mapa.',
  },
  {
    name: 'Arrastrar para refinar vectores y observar la convergencia',
    text: 'Extiende cada vector de propagación con ajuste magnético sobre el lienzo y observa cómo el campo de probabilidad se recalcula en tiempo real a medida que se acumula la evidencia.',
  },
  {
    name: 'Exportar la instantánea técnica',
    text: 'Genera un informe estructurado con coordenadas del origen, confianza, varianza, estado de capas y el conjunto completo de vectores para revisión posterior.',
  },
];

const faq = [
  {
    question: '¿Pueden los patrones de quemadura demostrar el punto exacto donde comenzó un incendio?',
    answer: 'No. Los patrones de incendio ayudan a generar y comprobar hipótesis de origen, pero la ventilación, la extinción, la carga de combustible, el flashover y las alteraciones post-incendio pueden distorsionar los patrones. La determinación real del origen requiere una investigación sistemática.',
  },
  {
    question: '¿Por qué importan los patrones en V en la investigación de incendios?',
    answer: 'Los patrones en V suelen reflejar la propagación ascendente y hacia afuera de las llamas sobre superficies verticales. Pueden señalar hacia una zona de origen más baja, pero deben compararse con otras evidencias antes de extraer conclusiones.',
  },
  {
    question: '¿Qué indica la carbonización profunda?',
    answer: 'La carbonización profunda puede indicar un calentamiento más prolongado, mayor flujo de calor o efectos del combustible. Es un contexto útil, pero no señala automáticamente el origen porque los materiales se carbonizan a ritmos diferentes.',
  },
  {
    question: '¿Por qué usar varios vectores en lugar de una sola flecha?',
    answer: 'Un único patrón puede ser engañoso. Múltiples vectores independientes reducen la influencia de una pared dañada, un paquete de combustible aislado o una única vía de ventilación.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Espacio de trabajo forense interactivo para dibujar vectores de propagación del fuego',
    vPattern: 'Patrón en V',
    deepChar: 'Carbonización profunda',
    sootShadow: 'Sombra de hollín',
    cleanBurn: 'Quemado limpio',
    loadPlan: 'Cargar plano',
    generateReport: 'Generar informe',
    pointerLabel: 'Puntero',
    resetVectors: 'Restablecer',
    estimatedOrigin: 'Origen estimado',
    visibleLayers: 'Capas de evidencia visibles',
    vectorsLabel: 'VECTORES',
    confidenceLabel: 'CONFIANZA',
    varianceLabel: 'VARIANZA',
    modeLabel: 'MODO',
    guideSummary: 'Cómo usar esta herramienta',
    flowPanelTitle: 'Flujo de trabajo',
    legendPanelTitle: 'Leyenda de evidencias',
    readoutPanelTitle: 'Panel de resultados',
    flow1Kicker: 'PASO 1',
    flow1Icon: '1',
    flow1Title: 'Cargar',
    flow1Text: 'Sube el plano de la escena',
    flow2Kicker: 'PASO 2',
    flow2Icon: '2',
    flow2Title: 'Elegir pista',
    flow2Text: 'Haz clic en la marca de quemadura',
    flow3Kicker: 'PASO 3',
    flow3Icon: '3',
    flow3Title: 'Arrastrar vector',
    flow3Text: 'Apunta la dirección del fuego',
    flow4Kicker: 'PASO 4',
    flow4Icon: '4',
    flow4Title: 'Leer resultado',
    flow4Text: 'Revisa el panel inferior + exporta',
    basicsTitle: 'Qué debes hacer primero',
    basicsIntro: 'Carga un plano claro, marca solo patrones que puedas justificar y distribuye los vectores en distintas superficies en lugar de repetir la misma pista.',
    indicatorsTitle: 'Qué significa cada tipo de evidencia',
    vPatternShort: 'Quemadura de pared que se abre hacia arriba',
    vPatternExplain: 'Un patrón en V es la forma de quemadura ascendente y hacia afuera que se observa con frecuencia en una pared. Puede sugerir que el calor y las llamas ascendieron desde una zona más baja, pero no es una prueba automática del origen exacto.',
    deepCharShort: 'Zona quemada con más intensidad o duración',
    deepCharExplain: 'La carbonización profunda significa que un material parece más quemado, ennegrecido o consumido en una zona que en su entorno. Puede indicar un calentamiento más prolongado o intenso, pero el tipo de combustible y el grosor del material influyen mucho.',
    sootShadowShort: 'Humo bloqueado o redirigido',
    sootShadowExplain: 'Una sombra de hollín es una zona protegida o con distinta oscuridad que sugiere que un objeto, superficie o corriente de aire modificó la forma en que se depositó el hollín. Puede ayudar a reconstruir qué había presente o cómo se movió el humo.',
    cleanBurnShort: 'Menos hollín por calor o ventilación',
    cleanBurnExplain: 'El quemado limpio es una zona donde el hollín parece más claro, eliminado o ausente porque el calor, la ventilación o la exposición directa a las llamas lo afectaron de forma distinta. Es útil, pero no toda zona limpia señala el origen.',
    resultsTitle: 'Cómo interpretar el resultado',
    resultsIntro: 'Usa el panel inferior como una verificación rápida de tu mapeo, no como una conclusión forense definitiva.',
    resultsPoint1: 'Cuántas líneas de evidencia están activas.',
    resultsPoint2: 'Con qué fuerza coinciden los vectores activos.',
    resultsPoint3: 'Cuán amplia sigue siendo el área de origen.',
    resultsPoint4: 'Qué espera la herramienta que hagas a continuación.',
    awaitingVector: 'Esperando vector',
    selectIndicator: 'Seleccionar indicador',
    refiningVector: 'Refinando vector',
    needsMoreVectors: 'Se necesitan más vectores',
    wideArea: 'Área de origen amplia',
    focusedArea: 'Área de origen concentrada',
    dropPlan: 'Suelta la imagen del plano o haz clic para subir',
    needsMoreVectorsText: 'Dibuja al menos dos flechas direccionales claras. Tres o más observaciones independientes suelen hacer que la convergencia sea mucho más fácil de interpretar.',
    wideAreaText: 'Las líneas proyectadas se cruzan, pero la dispersión sigue siendo amplia. En una escena real, compara ventilación, carga de combustible, efectos de extinción e información de testigos antes de acotar el origen.',
    focusedAreaText: 'Los vectores convergen en un área compacta. Considéralo una señal didáctica fuerte para el desarrollo de hipótesis de origen, no una conclusión forense definitiva.',
    disclaimer: 'Simulación educativa solamente. La investigación real del origen y la causa de un incendio debe seguir las guías aceptadas, los protocolos de seguridad en la escena, los estándares de documentación y la revisión cualificada de expertos.',
  },
  seo: [
    {
      type: 'title',
      text: 'Análisis interactivo del origen de incendios a partir de vectores de patrones de quemadura',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Simulador didáctico',
      title: 'Qué enseña este analizador de origen por patrones de incendio',
      html: 'Esta herramienta de navegador demuestra cómo los investigadores razonan a partir de patrones físicos de incendio hacia un <strong>área de origen</strong> probable. Los usuarios mapean evidencias visibles, dibujan vectores direccionales de propagación y observan cómo las líneas proyectadas convergen o se dispersan. El modelo es intencionadamente educativo: enseña geometría e interpretación de patrones, no determinación legal de causas.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 capas', label: 'Patrón V, carbonización, hollín, quemado limpio', icon: 'mdi:layers-triple' },
        { value: 'Plano 2D', label: 'mapa estructural de la habitación', icon: 'mdi:floor-plan' },
        { value: '3+ flechas', label: 'observaciones recomendadas', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'entrada de confianza', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Un flujo de trabajo disciplinado para la interpretación de patrones de incendio',
      items: [
        'Comienza con seguridad, preservación de la escena, fotografías, croquis y documentación sistemática antes de interpretar patrones.',
        'Separa los tipos de patrón para que el daño en V, la profundidad de carbonización, la deposición de hollín y el quemado limpio no se reduzcan a una sola suposición.',
        'Dibuja indicadores direccionales solo donde el patrón físico respalde una dirección de propagación defendible.',
        'Busca la convergencia entre observaciones independientes en lugar de confiar en el daño más llamativo.',
        'Utiliza el área de origen estimada como hipótesis para contrastar con combustibles, fuentes de ignición, ventilación, evidencia eléctrica y testimonios.',
      ],
    },
    {
      type: 'table',
      headers: ['Patrón', 'Valor potencial', 'Precaución principal'],
      rows: [
        ['Patrón en V', 'Puede sugerir propagación ascendente y hacia afuera desde una zona más baja.', 'Puede alterarse por ventilación, flashover, geometría de paredes y extinción.'],
        ['Carbonización profunda', 'Puede indicar exposición sostenida al calor o combustión intensa.', 'El tipo de combustible y el grosor del material afectan mucho la profundidad de carbonización.'],
        ['Sombra de hollín', 'Puede revelar zonas protegidas, ubicación de objetos o efectos del flujo de aire.', 'El movimiento de muebles o la actividad de extinción pueden cambiar la interpretación.'],
        ['Quemado limpio', 'Puede mostrar calor elevado, ventilación o combustión en fase avanzada.', 'No identifica automáticamente el primer material ignitado.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Hipótesis de origen más sólidas',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Las mejores hipótesis explican múltiples observaciones al mismo tiempo.',
          points: ['Los vectores independientes convergen', 'La evidencia encaja con las vías de ventilación conocidas', 'Los paquetes de combustible están contabilizados', 'Se prueban activamente orígenes alternativos'],
        },
        {
          title: 'Hipótesis de origen débiles',
          icon: 'mdi:alert-circle-outline',
          description: 'Las hipótesis débiles suelen basarse en un solo patrón sin comprobar factores de distorsión.',
          points: ['Una sola zona carbonizada se trata como prueba', 'Se ignora el flashover', 'El daño por extinción no está documentado', 'Se asume la evidencia de fuente de ignición'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona el modelo de vectores',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada flecha se trata como una línea proyectada de propagación del fuego. El estimador calcula las intersecciones de líneas por pares, filtra los puntos que caen dentro de un límite razonable del plano, promedia los cruces restantes e informa un radio basado en la dispersión de esas intersecciones. Un radio pequeño con varios vectores produce una señal de convergencia más fuerte. El modelo de intersección funciona resolviendo las ecuaciones paramétricas de dos líneas que se extienden desde sus respectivos marcadores de evidencia. Cuando dos vectores apuntan hacia una región compartida, su punto de cruce teórico aporta una coordenada al conjunto de promediación. Cuantos más vectores independientes participan, más puede el estimador filtrar los cruces alejados del grupo principal, reduciendo así la influencia de cualquier observación aislada que pudiera estar mal orientada o interpretada.',
    },
    {
      type: 'paragraph',
      html: 'Este enfoque geométrico refleja un ejercicio de clase: ayuda a los estudiantes a ver por qué el análisis de origen mejora cuando las observaciones provienen de distintas superficies y tipos de patrón. También expone un problema común: las flechas pueden intersecarse incluso cuando la interpretación subyacente es deficiente, por lo que el centro matemático nunca debe sustituir al juicio de la ciencia del fuego. En una investigación real, los profesionales comparan el resultado trazado con las rutas de ventilación, la distribución de la carga de combustible, los daños estructurales y las declaraciones de testigos antes de tratar cualquier coordenada como un origen probable. La herramienta fomenta este hábito mostrando la varianza junto al punto estimado, recordando a los usuarios que un grupo compacto de cruces solo es tan sólido como la calidad de las observaciones que lo produjeron.',
    },
    {
      type: 'paragraph',
      html: 'Más allá de la lógica básica de intersección, el estimador aplica una restricción de límites para que los cruces situados muy lejos del plano de la habitación queden excluidos. Esto evita que los valores atípicos arrastren el centro promediado hacia ubicaciones imposibles. El radio final representa la desviación estándar de las coordenadas de cruce restantes, ofreciendo una medida directa de la consistencia con que los vectores activos coinciden. Un radio inferior al diez por ciento de la extensión del plano indica una convergencia fuerte. Un radio que supere un cuarto del plano señala que la evidencia aún no respalda un origen concentrado, y se necesitan más o mejores observaciones antes de extraer conclusiones.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Área de origen', definition: 'La región general donde la evidencia disponible sugiere que comenzó el incendio.' },
        { term: 'Patrón en V', definition: 'Un patrón de incendio que suele aparecer como daño ascendente y hacia afuera en una superficie vertical.' },
        { term: 'Quemado limpio', definition: 'Un área más clara o limpia causada cuando el hollín se quema o no se deposita bajo condiciones de calor elevado o flujo de aire.' },
        { term: 'Sombra de hollín', definition: 'Un área de hollín protegida o depositada de forma diferente que puede preservar información sobre objetos, flujo de aire o exposición al calor.' },
        { term: 'Convergencia vectorial', definition: 'La agrupación de indicadores direccionales proyectados alrededor de una región común.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaución forense',
      title: 'No conviertas la convergencia en certeza',
      html: 'Un grupo de intersecciones compacto solo es útil cuando las observaciones son válidas. Las investigaciones reales deben tener en cuenta la ventilación, el flashover, los paquetes de combustible, los sistemas eléctricos, la evidencia de electrodomésticos, las declaraciones de testigos, la extinción y la alteración de la escena.',
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
      applicationCategory: 'ForensicApplication',
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
