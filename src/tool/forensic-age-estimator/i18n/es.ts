import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'dental-skeletal-third-molar-age-estimator';
const title = 'Estimador de edad dental, esquelética y tercer molar';
const description = 'Estima un intervalo de edad forense a partir del desarrollo dental, la madurez esquelética y los indicadores del tercer molar para cribado y clasificación de casos.';

const howTo = [
  {
    name: 'Selecciona el énfasis de la evidencia',
    text: 'Elige evidencia mixta para un cribado equilibrado, prioridad dental cuando los hallazgos dentales sean más sólidos, o prioridad esquelética cuando los indicadores radiográficos esqueléticos sean la fuente principal.',
  },
  {
    name: 'Puntúa cada indicador de madurez',
    text: 'Desplaza cada etapa de 0 a 8. Las etapas inferiores representan desarrollo temprano, las intermedias maduración adolescente y las superiores hallazgos maduros o casi maduros.',
  },
  {
    name: 'Lee el intervalo, no solo la edad central',
    text: 'Usa los valores mínimo, probable y máximo juntos. La evaluación forense de la edad debe expresarse como un intervalo porque el desarrollo biológico varía entre individuos.',
  },
  {
    name: 'Comprueba el desacuerdo entre indicadores',
    text: 'Si las etapas dental, esquelética y del tercer molar apuntan a rangos de edad distintos, trata el resultado como exploratorio y recopila mejor evidencia antes de sacar conclusiones.',
  },
];

const faq = [
  {
    question: '¿Puede este estimador de edad forense determinar la mayoría de edad legal?',
    answer: 'No. Es una calculadora de cribado para uso educativo y de clasificación. La determinación legal de la edad requiere protocolos locales validados, expertos cualificados, documentación de identidad y estándares específicos de cada jurisdicción.',
  },
  {
    question: '¿Por qué el resultado muestra un intervalo de edad?',
    answer: 'La erupción dental, la fusión esquelética y el desarrollo del tercer molar varían según la ascendencia, nutrición, salud, sexo, población de referencia y método de imagen. Un intervalo es más preciso que una edad exacta única.',
  },
  {
    question: '¿Qué significa evidencia mixta?',
    answer: 'La evidencia mixta equilibra el desarrollo dental, la madurez esquelética y la etapa del tercer molar. Úsala cuando ningún indicador sea claramente más fiable para el caso.',
  },
  {
    question: '¿Son fiables los terceros molares para todos los casos?',
    answer: 'Los terceros molares son útiles en la adolescencia tardía y la adultez joven, pero son variables. La ausencia de terceros molares, patologías, diferencias poblacionales y la calidad radiográfica pueden limitar su valor.',
  },
  {
    question: '¿Debería usarse con casos reales?',
    answer: 'Solo como ayuda preliminar. Los casos reales deben usar métodos validados, datos de referencia calibrados, revisión independiente y un reporte transparente de incertidumbre y limitaciones.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Tablero de caso forense',
    controls: 'Controles de edad forense',
    results: 'Resultados de edad forense',
    maturityProfile: 'Perfil dinámico de madurez',
    screeningOnly: 'Estimación de cribado',
    evidenceType: 'Énfasis de la evidencia',
    mixedEvidence: 'Evidencia mixta',
    dentalPriority: 'Prioridad dental',
    skeletalPriority: 'Prioridad esquelética',
    dentalStage: 'Etapa de desarrollo dental',
    epiphysealStage: 'Etapa de fusión epifisaria',
    thirdMolarStage: 'Etapa del tercer molar',
    minimumAge: 'Mínimo',
    likelyAge: 'Probable',
    maximumAge: 'Máximo',
    maturityScore: 'Puntuación de madurez',
    stageLabel: 'Etapa',
    ageUnit: 'años',
    dentalShort: 'Dental',
    boneShort: 'Hueso',
    molarShort: 'Molar',
    dentalStageHelp: 'Formación de corona, raíz y ápice.',
    epiphysealStageHelp: 'Cierre de la placa de crecimiento y fusión esquelética.',
    molarStageHelp: 'Mineralización del tercer molar y cierre del ápice.',
    dentalStage0: 'Ausente',
    dentalStage1: 'Cúspide',
    dentalStage2: 'Corona',
    dentalStage3: 'Inicio raíz',
    dentalStage4: 'Raíz media',
    dentalStage5: 'Raíz larga',
    dentalStage6: 'Ápice estrecho',
    dentalStage7: 'Ápice cerrando',
    dentalStage8: 'Completa',
    epiphysealStage0: 'Abierta',
    epiphysealStage1: 'Borde',
    epiphysealStage2: 'Estrechamiento',
    epiphysealStage3: 'Puente',
    epiphysealStage4: 'Mitad fusionada',
    epiphysealStage5: 'Casi fusionada',
    epiphysealStage6: 'Solo línea',
    epiphysealStage7: 'Casi cerrada',
    epiphysealStage8: 'Cerrada',
    molarStage0: 'Ausente',
    molarStage1: 'Cúspide',
    molarStage2: 'Inicio corona',
    molarStage3: 'Corona completa',
    molarStage4: 'Inicio raíz',
    molarStage5: 'Raíz media',
    molarStage6: 'Raíz larga',
    molarStage7: 'Ápice cerrando',
    molarStage8: 'Completa',
    confidenceexploratory: 'Exploratorio',
    confidencemoderate: 'Moderado',
    confidencestrong: 'Fuerte',
    noteTriage: 'Úsalo como estimación de clasificación, no como determinación legal de edad.',
    noteFinalAssessment: 'La evaluación forense final de la edad debe combinar radiología, examen dental, historia documentada y estándares específicos de la jurisdicción.',
    noteWideInterval: 'Los indicadores difieren en más de cuatro años, por lo que el intervalo se ha ampliado.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimador de edad forense: calculadora de cribado dental, esquelético y tercer molar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Usa este estimador de edad forense cuando necesites una forma rápida y transparente de organizar la evidencia de madurez biológica antes de una evaluación formal. La calculadora combina el desarrollo dental, la fusión epifisaria y la etapa del tercer molar en un intervalo de edad estimado. Está diseñada para la intención de búsqueda detrás de preguntas como <strong>calculadora de estimación de edad forense</strong>, <strong>evaluación de edad dental</strong>, <strong>estimación de edad por madurez esquelética</strong> y <strong>estimación de edad por tercer molar</strong>: los usuarios quieren saber qué significan los indicadores, cómo pueden combinarse y cuánta incertidumbre debe asociarse al resultado.',
    },
    {
      type: 'paragraph',
      html: 'El resultado se expresa intencionadamente como <strong>edad mínima, edad probable y edad máxima</strong>. Una edad exacta única sería engañosa porque el desarrollo biológico no progresa a la misma velocidad en todas las personas. La nutrición, salud, ascendencia, sexo, población de referencia, calidad de imagen, patología dental, ausencia de molares y la variación entre observadores pueden cambiar la interpretación. Trata la calculadora como una ayuda estructurada de cribado, no como una conclusión legal.',
    },
    {
      type: 'title',
      text: 'Qué significan los tres indicadores de madurez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los tres deslizadores representan etapas generales de desarrollo de 0 a 8. La etapa 0 significa evidencia de madurez muy temprana o ausente; la etapa 8 significa madurez completa o casi completa para ese indicador. Las etapas no están vinculadas a un método clínico concreto. En su lugar, ofrecen una abstracción práctica para que los usuarios puedan comparar cómo la evidencia dental, esquelética y del tercer molar afecta a una estimación por intervalo.',
    },
    {
      type: 'table',
      headers: ['Indicador', 'Qué representa', 'Intención de búsqueda útil', 'Precaución principal'],
      rows: [
        ['Desarrollo dental', 'Formación, erupción y madurez de los dientes distintos de los terceros molares.', 'Estimar la edad a partir de la madurez dental en niños y adolescentes.', 'La enfermedad dental, la falta de dientes, las restauraciones y el desajuste de la población de referencia pueden sesgar la interpretación.'],
        ['Fusión epifisaria', 'Cierre progresivo de las placas de crecimiento en estructuras esqueléticas.', 'Estimar la edad adolescente o adulta joven a partir de la madurez esquelética.', 'El momento de la fusión depende del hueso observado, sexo, nutrición, salud endocrina y modalidad de imagen.'],
        ['Etapa del tercer molar', 'Formación y maduración de las muelas del juicio.', 'Evaluar la edad adolescente tardía o adulta joven cuando los demás dientes están maduros.', 'Los terceros molares son muy variables; la agenesia, extracción, impactación y la calidad de imagen son importantes.'],
      ],
    },
    {
      type: 'title',
      text: 'Cómo interpretar el intervalo de edad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lee los tres valores de edad juntos. La <strong>edad probable</strong> es la estimación central ponderada según el énfasis de evidencia seleccionado. Los valores <strong>mínimo</strong> y <strong>máximo</strong> muestran una banda práctica de incertidumbre. Cuando los indicadores coinciden, la banda se estrecha; cuando las señales dental, esquelética y del tercer molar apuntan a edades distintas, la banda se amplía y la etiqueta de confianza disminuye.',
    },
    {
      type: 'table',
      headers: ['Patrón del resultado', 'Qué sugiere', 'Siguiente paso recomendado'],
      rows: [
        ['Intervalo estrecho con confianza fuerte', 'Los indicadores coinciden en general y apuntan a un rango de desarrollo similar.', 'Documenta los indicadores fuente y considera si aún se requiere un método validado para el caso.'],
        ['Intervalo moderado', 'Existe cierto desacuerdo o el énfasis de evidencia seleccionado cambia la estimación central.', 'Revisa la calidad de imagen, la asignación de etapas y si debe priorizarse la evidencia dental o esquelética.'],
        ['Intervalo exploratorio amplio', 'Los indicadores de madurez entran en conflicto o apuntan a periodos de desarrollo distintos.', 'No te bases solo en la estimación; busca mejores registros, imágenes adicionales o revisión de un especialista.'],
      ],
    },
    {
      type: 'title',
      text: 'Elegir el modo de evidencia dental, esquelético o mixto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La <strong>evidencia mixta</strong> es el modo predeterminado para cribado general porque equilibra los tres indicadores. Elige <strong>prioridad dental</strong> cuando las observaciones dentales sean completas, estén bien documentadas y sean más fiables que la información esquelética. Elige <strong>prioridad esquelética</strong> cuando los hallazgos radiográficos esqueléticos sean la parte más sólida del expediente o cuando los datos dentales sean incompletos. El modo no convierte la evidencia débil en fuerte; solo cambia cómo se ponderan los indicadores disponibles.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usa prioridad dental</strong> en casos donde el desarrollo dental esté claramente estadificado y haya evidencia del tercer molar disponible.',
        '<strong>Usa prioridad esquelética</strong> cuando la fusión epifisaria sea la señal de madurez mejor documentada.',
        '<strong>Usa evidencia mixta</strong> cuando el objetivo sea una revisión equilibrada de primera pasada en lugar de una conclusión de especialista.',
        '<strong>Usa la etiqueta de confianza</strong> para detectar desacuerdos antes de sobreinterpretar la edad central.',
      ],
    },
    {
      type: 'title',
      text: 'La estimación forense de la edad no es prueba de identidad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La estimación de la edad puede apoyar un expediente, pero no puede probar la identidad ni sustituir la investigación documental. En contextos de migración, protección, responsabilidad penal, identificación de víctimas de desastres y personas desaparecidas, la evaluación debe ser multidisciplinaria. Un informe responsable normalmente indica el método utilizado, la población de referencia, la fuente de imagen, las cualificaciones del observador, el lenguaje de confianza o probabilidad y las limitaciones conocidas.',
    },
    {
      type: 'paragraph',
      html: 'Por lo tanto, esta herramienta se usa mejor para <strong>educación, clasificación, planificación de protocolos y comunicación transparente</strong>. Ayuda a explicar por qué las conclusiones sobre la edad deben ser cautelosas, por qué los indicadores contradictorios importan y por qué un umbral legalmente importante como los 18 años nunca debe decidirse solo con una calculadora simplificada.',
    },
    {
      type: 'title',
      text: 'Lista de verificación antes de usar la estimación en un informe',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Confirma la fuente de evidencia:</strong> anota si las etapas provienen de examen dental, radiografía panorámica, imagen de mano-muñeca, imagen de clavícula u otro protocolo.',
        '<strong>Registra datos faltantes o débiles:</strong> la ausencia de terceros molares, la mala calidad de imagen, las anomalías del desarrollo y los registros incompletos deben ser visibles en el informe.',
        '<strong>Usa métodos validados para las decisiones:</strong> selecciona métodos dentales o esqueléticos apropiados para la jurisdicción antes de cualquier conclusión legal o de protección.',
        '<strong>Reporta la incertidumbre claramente:</strong> incluye un rango, explica el desacuerdo y evita un lenguaje que implique una edad cronológica exacta.',
        '<strong>Busca revisión de un especialista:</strong> los casos de alto riesgo deben ser revisados por odontólogos forenses, radiólogos, antropólogos o pediatras cualificados según corresponda.',
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