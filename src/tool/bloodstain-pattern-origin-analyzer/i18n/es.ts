import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analizador-origen-patrones-manchas-sangre';
const title = 'Analizador tridimensional del origen de patrones de manchas de sangre';
const description = 'Modela manchas de sangre elípticas en un plano vertical, calcula ángulos de impacto y visualiza trayectorias proyectadas en una escena interactiva en 3D.';

const howTo = [
  { name: 'Introducir o ajustar manchas', text: 'Usa la tabla o la superficie 2D para definir la posición, ancho, longitud y orientación del eje mayor de cada mancha.' },
  { name: 'Revisar ángulos de impacto', text: 'La calculadora estima el ángulo de impacto a partir de la relación entre ancho y longitud utilizando la relación del arcoseno.' },
  { name: 'Inspeccionar la convergencia 3D', text: 'Gira la vista para comparar las trayectorias proyectadas y la esfera de origen estimada.' },
  { name: 'Comprobar la incertidumbre', text: 'Usa el valor de dispersión como un indicador práctico de advertencia: una separación amplia de líneas significa que el origen trazado es menos estable.' },
];

const faq = [
  { question: '¿Puede una herramienta web determinar la fuente real del sangrado?', answer: 'No. Puede enseñar y evaluar relaciones geométricas, pero las conclusiones de un caso requieren métodos validados, documentación de la escena, calibración de escala y un análisis cualificado de patrones de manchas de sangre.' },
  { question: '¿Por qué el ángulo de impacto se calcula a partir del ancho y la longitud?', answer: 'Para una mancha elíptica ideal, el seno del ángulo de impacto se aproxima dividiendo el ancho por la longitud. Las manchas reales pueden estar distorsionadas por la textura de la superficie, el flujo, la transferencia o errores de medición.' },
  { question: '¿Qué representa la esfera de origen en 3D?', answer: 'Es la estimación de convergencia por mínimos cuadrados entre las líneas de trayectoria proyectadas, no una fuente puntual garantizada.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Métrico',
    imperial: 'Imperial',
    unitsLabel: 'Unidades',
    addStain: 'Añadir mancha',
    reset: 'Restablecer',
    surface: 'Superficie de impacto',
    viewport3dLabel: 'Visor de trayectoria 3D',
    stainLabel: 'Mancha',
    table: 'Mediciones',
    origin: 'Origen estimado',
    spread: 'Dispersión de líneas',
    confidence: 'Confianza',
    impact: 'Ángulo de impacto',
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
    x: 'X',
    y: 'Y',
    width: 'Ancho',
    length: 'Longitud',
    rotation: 'Rotación',
    remove: 'Eliminar',
    cm: 'cm',
    inch: 'in',
    degree: 'grados',
    rotateHint: 'Arrastra la vista 3D para rotar la reconstrucción.',
    disclaimer: 'Reconstrucción únicamente con fines educativos. Interpreta con mediciones de escena validadas e incertidumbre documentada.',
  },
  seo: [
    { type: 'title', text: 'Cómo funciona un analizador tridimensional del origen de patrones de manchas de sangre', level: 2 },
    { type: 'paragraph', html: 'Un analizador del origen de patrones de manchas de sangre ayuda a los usuarios a explorar una de las preguntas geométricas fundamentales en el análisis de manchas de sangre: <strong>¿dónde en el espacio podría haber estado la fuente de sangre cuando las gotas impactaron una superficie?</strong> Esta herramienta modela las manchas como elipses en un plano vertical, calcula el ángulo de impacto a partir de la relación entre ancho y longitud de cada una, proyecta las trayectorias hacia atrás en una escena 3D y estima una región práctica de convergencia.' },
    { type: 'diagnostic', variant: 'warning', title: 'Advertencia forense', html: 'El resultado es una ayuda para la reconstrucción, no la conclusión de un caso. Las manchas reales pueden verse afectadas por la textura del soporte, salpicaduras satélite, coagulación, flujo, limpieza, transferencia, errores de perspectiva y documentación incompleta de la escala.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(A/L)', label: 'Fórmula del ángulo de impacto' },
      { value: '3+', label: 'Manchas independientes recomendadas' },
      { value: '3D', label: 'Espacio de convergencia de trayectoria' },
    ] },
    { type: 'title', text: 'Fórmula del ángulo de impacto', level: 3 },
    { type: 'paragraph', html: 'Para una mancha elíptica simple, el ángulo de impacto se aproxima comúnmente como <strong>arcsin(ancho / longitud)</strong>. Por lo tanto, una mancha de 1 cm de ancho y 2 cm de longitud produce un ángulo de impacto de 30 grados. Esa relación es útil porque convierte una marca plana en una elevación de trayectoria, pero asume que la mancha medida es representativa y no está distorsionada.' },
    { type: 'code', ariaLabel: 'Cálculo del ángulo de impacto', code: 'ángulo de impacto = arcsin(ancho de mancha / longitud de mancha)\nejemplo: arcsin(1 cm / 2 cm) = 30 grados' },
    { type: 'paragraph', html: 'Esta es una intención de búsqueda común detrás de consultas como <em>calculadora de ángulo de impacto de manchas de sangre</em>, <em>fórmula del ángulo de impacto de salpicaduras de sangre</em> y <em>cómo calcular la trayectoria de una mancha de sangre</em>. El punto importante es que la fórmula solo responde a una parte de la reconstrucción. Estima la elevación del trayecto en relación con la superficie de impacto; no identifica por sí misma la fuente, el mecanismo, el arma o la secuencia de eventos.' },
    { type: 'title', text: 'Cómo medir las manchas antes de introducir datos', level: 3 },
    { type: 'paragraph', html: 'Las entradas más útiles provienen de fotografías perpendiculares calibradas o mediciones directas de la escena. Mide el cuerpo elíptico principal de la mancha, no las salpicaduras satélite, colas, marcas de flujo o manchas secundarias. El ancho debe tomarse a lo largo del eje corto y la longitud a lo largo del eje mayor. La rotación debe seguir la dirección del eje mayor en el plano de impacto. Pequeños errores en longitud, ancho o orientación pueden desviar considerablemente la trayectoria proyectada una vez que se extiende en el espacio 3D.' },
    { type: 'table', headers: ['Calidad de medición', 'Efecto probable', 'Respuesta práctica'], rows: [
      ['El eje mayor está claro', 'La rotación es más confiable', 'Usa el eje mayor visible y documenta el método de orientación.'],
      ['El ancho o longitud están distorsionados', 'El ángulo de impacto puede estar sesgado', 'Marca la incertidumbre y compara con manchas vecinas.'],
      ['Pocas manchas convergen', 'La estimación del origen se vuelve inestable', 'Añade manchas independientes antes de interpretar el origen 3D.'],
      ['Falta la escala', 'Todas las distancias se vuelven puramente ilustrativas', 'No informes de coordenadas de origen reales sin calibración.'],
    ] },
    { type: 'title', text: 'Lectura de la convergencia 3D', level: 3 },
    { type: 'paragraph', html: 'La esfera de origen en esta herramienta se calcula como el punto más cercano a todas las líneas de trayectoria proyectadas. Cuando las líneas pasan cerca unas de otras, el valor de dispersión es pequeño y la confianza mejora. Cuando las líneas divergen, la esfera sigue apareciendo, pero debe interpretarse como un compromiso débil de mínimos cuadrados en lugar de una fuente precisa.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Área de convergencia', description: 'Una estimación bidimensional en el plano de impacto, utilizada a menudo para ver dónde se cruzan las direcciones del eje mayor cuando se miran de frente.', points: ['Útil para una evaluación inicial', 'No representa la altura vertical por sí misma'] },
      { title: 'Área o volumen de origen', description: 'Una estimación tridimensional que combina la dirección en el plano con el ángulo de impacto para proyectar trayectorias en el espacio.', highlight: true, points: ['Explica la posible altura de la fuente', 'Sensible a la incertidumbre de la medición y del ángulo'] },
    ] },
    { type: 'paragraph', html: 'Los usuarios a menudo buscan una <em>calculadora del punto de origen de salpicaduras de sangre</em> esperando una coordenada exacta única. En la práctica, una buena interpretación es más cautelosa. El origen se comprende mejor como una región respaldada por múltiples trayectorias. Si las líneas trazadas forman un haz estrecho, el modelo es más coherente. Si pasan a través de un volumen amplio, la reconstrucción indica que las mediciones, la selección de manchas o las hipótesis necesitan revisión.' },
    { type: 'title', text: 'Razones comunes por las que las trayectorias no se cruzan', level: 3 },
    { type: 'proscons', title: 'Entradas sólidas frente a entradas débiles', items: [
      { pro: 'Varias manchas elípticas bien formadas con ejes mayores claros', con: 'Solo una o dos manchas, o manchas seleccionadas porque parecen ajustarse a una teoría' },
      { pro: 'Mediciones calibradas tomadas perpendicularmente a la superficie de impacto', con: 'Fotos oblicuas, escala desconocida o capturas de pantalla copiadas' },
      { pro: 'Manchas independientes del mismo mecanismo del evento', con: 'Goteo pasivo mixto, manchas de transferencia, proyección por retroceso, flujo o patrones de impacto secundario' },
    ] },
    { type: 'paragraph', html: 'Una convergencia deficiente no significa automáticamente que la herramienta falle. Puede significar que las manchas no pertenecen al mismo patrón, la fotografía presenta distorsión de perspectiva, el eje mayor se interpretó mal, la mancha no es una elipse limpia o el evento físico es más complejo que un modelo de fuente puntual simple. Esa información es valiosa. Una herramienta de reconstrucción debe exponer el desacuerdo en lugar de ocultarlo tras un número que parezca seguro.' },
    { type: 'title', text: 'Para qué sirve esta herramienta', level: 3 },
    { type: 'list', items: [
      '<strong>Usa múltiples manchas:</strong> tres o más manchas independientes proporcionan una estimación de convergencia más significativa.',
      '<strong>Observa la dispersión:</strong> una dispersión alta advierte que las líneas no se aproximan estrechamente en 3D.',
      '<strong>Conserva la escala:</strong> los valores en centímetros o pulgadas deben provenir de fotografías calibradas o mediciones de la escena.',
      '<strong>Separa la enseñanza del informe formal:</strong> esta visualización es ideal para educación, planificación y explicación antes de una revisión formal.',
    ] },
    { type: 'card', title: 'Mejor flujo de trabajo', html: 'Comienza trazando un pequeño conjunto de manchas de alta calidad. Comprueba si las direcciones del eje mayor en 2D tienen sentido visual. Luego inspecciona las trayectorias en 3D, observa la dispersión y cambia una medición a la vez para ver qué mancha influye más en la reconstrucción. Ese análisis de sensibilidad suele ser más útil que la coordenada de origen bruta.' },
    { type: 'title', text: 'Cuándo no confiar en una estimación del origen de manchas de sangre', level: 3 },
    { type: 'paragraph', html: 'No confíes en una estimación simple del origen cuando las manchas estén muy distorsionadas, la superficie de impacto sea curva o irregular, el patrón incluya sangre espirada proyectada o transferencia, la superficie se haya movido o la escena carezca de una escala confiable. La misma precaución se aplica cuando las manchas provienen de diferentes mecanismos o diferentes momentos del evento. Una visualización 3D impecable puede ser engañosa si el patrón de entrada no es adecuado para la reconstrucción geométrica.' },
    { type: 'glossary', items: [
      { term: 'Ángulo de impacto', definition: 'El ángulo estimado entre la trayectoria de la gota y la superficie de impacto, comúnmente calculado a partir de la relación entre ancho y longitud de una mancha elíptica.' },
      { term: 'Línea de trayectoria', definition: 'Una línea proyectada que muestra un posible camino inverso desde una mancha hacia el espacio tridimensional.' },
      { term: 'Área de convergencia', definition: 'La región aproximada donde se intersecan las direcciones de las manchas cuando se ven en el plano de impacto.' },
      { term: 'Área de origen', definition: 'La región tridimensional aproximada de donde podría haber provenido la sangre, basándose en múltiples trayectorias proyectadas.' },
    ] },
    { type: 'summary', title: 'Uso óptimo', items: [
      'Usa el analizador para comprender la geometría de la trayectoria y probar la sensibilidad de la medición.',
      'Compara la esfera de origen con el valor de dispersión antes de confiar en una reconstrucción.',
      'No utilices la visualización como una opinión forense independiente.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
