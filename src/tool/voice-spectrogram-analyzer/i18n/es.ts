import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = 'analizador-espectrograma-voz-online';
const title = 'Analizador de Espectrograma de Voz Online';
const description = 'Visualiza la frecuencia, el tiempo, la intensidad y la estimación de formantes de dos muestras de audio en tu navegador sin subir datos.';

const howTo = [
  { name: 'Carga dos muestras de audio', text: 'Selecciona uno o dos archivos de audio locales, arrástralos a las placas o prueba los estudios sintéticos incluidos.' },
  { name: 'Ajusta el techo de frecuencia', text: 'Elige un límite de 4, 6 u 8 kHz para encuadrar las frecuencias relevantes según el tipo de voz o sonido.' },
  { name: 'Interpreta la placa espectral', text: 'El tiempo se mide de izquierda a derecha, la frecuencia en vertical, la intensidad por el brillo y los formantes como guías orientativas.' },
  { name: 'Escucha y compara', text: 'Reproduce cualquier muestra para mover el cursor sincronizado y compara las frecuencias F1, F2 y F3 sin asumir identificación de hablante.' }
];

const faq = [
  { question: '¿Qué muestra un espectrograma de voz?', answer: 'Un espectrograma representa el tiempo en el eje horizontal, la frecuencia en el vertical y la energía del sonido mediante el brillo del color. Las resonancias del habla aparecen como franjas de energía destacadas.' },
  { question: '¿Se suben mis grabaciones a algún servidor?', answer: 'No. El decodificado de audio, el análisis espectral, la visualización y la reproducción se ejecutan de forma 100 % local en el navegador.' },
  { question: '¿Qué significan las guías F1, F2 y F3?', answer: 'Son estimaciones educativas de los tres primeros picos espectrales. F1 y F2 suelen asociarse a la apertura y posición de las vocales, mientras que F3 refleja resonancias superiores del canal vocal.' },
  { question: '¿Puede esta herramienta identificar a una persona por la voz?', answer: 'No. El parecido visual o la cercanía de formantes no demuestra identidad. La comparación forense de voz requiere peritaje especializado, métodos validados y evaluación del margen de error.' },
  { question: '¿Por qué cambian los formantes al modificar el techo de frecuencia?', answer: 'Al cambiar el rango espectral disponible cambian los picos analizables y su separación. La anatomía, la vocal, el ruido de fondo y los ajustes del análisis influyen en la estimación.' }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    privacyBadge: 'Solo local',
    privacyNote: 'Tus grabaciones no salen de tu dispositivo. El análisis se realiza íntegramente en el navegador.',
    loadHeading: 'Carga dos sonidos para analizar',
    sampleALabel: 'Muestra A',
    sampleBLabel: 'Muestra B',
    chooseFileLabel: 'Seleccionar audio',
    replaceFileLabel: 'Cambiar audio',
    dropHint: 'Arrastra un archivo de audio aquí (máximo 25 MB). Se analizan los primeros 20 segundos.',
    presetHint: 'Prueba inmediatamente los dos estudios de vocales sintéticas.',
    presetWarmLabel: 'Estudio vocal cálida',
    presetBrightLabel: 'Estudio vocal brillante',
    emptySampleLabel: 'Esperando audio',
    readySampleLabel: 'Placa espectral generada',
    decodingSampleLabel: 'Procesando placa espectral',
    errorSampleLabel: 'No se pudo analizar la muestra',
    durationLabel: 'Duración',
    ceilingHeading: 'Techo de frecuencia',
    ceilingFourLabel: '4 kHz',
    ceilingSixLabel: '6 kHz',
    ceilingEightLabel: '8 kHz',
    stageLabel: 'Mosaico de espectrogramas de voz',
    mirrorViewLabel: 'Placas enfrentadas',
    splitViewLabel: 'Placas paralelas',
    playALabel: 'Reproducir muestra A',
    playBLabel: 'Reproducir muestra B',
    stopLabel: 'Detener',
    timeAxisLabel: 'Tiempo',
    frequencyAxisLabel: 'Frecuencia',
    intensityLegendLabel: 'Mayor brillo indica mayor energía sonora',
    formantLegendLabel: 'Guías de formantes estimados',
    sampleAEmptyCanvasLabel: 'Carga la muestra A para visualizar su espectro',
    sampleBEmptyCanvasLabel: 'Carga la muestra B para visualizar su espectro',
    comparisonHeading: 'Análisis de resonancias espectrales',
    comparisonNote: 'Valores promedio de los picos espectrales en tramos sonorizados. Las diferencias son mediciones físicas, no un porcentaje de coincidencia ni una prueba de identidad.',
    formantOneLabel: 'Primera región de resonancia (F1)',
    formantTwoLabel: 'Segunda región de resonancia (F2)',
    formantThreeLabel: 'Tercera región de resonancia (F3)',
    averageLabel: 'Promedio',
    differenceLabel: 'Diferencia',
    unavailableLabel: 'No disponible',
    statusEmptyLabel: 'Carga una muestra para empezar',
    statusSingleLabel: 'Una placa lista para inspeccionar',
    statusReadyLabel: 'Ambas placas espectrales listas',
    limitError: 'El archivo supera el límite de análisis local de 25 MB.',
    decodeError: 'El navegador no pudo decodificar este formato de audio.',
    browserError: 'La API Web Audio no está disponible en este navegador.',
    educationalNote: 'Herramienta de visualización educativa. Las guías de formantes se basan en suavizado de picos espectrales y no deben usarse como peritaje de voz ni identificación biométrica.'
  },
  seo: [
    { type: 'title', text: 'Cómo convierte un espectrograma el sonido en una imagen visual', level: 2 },
    { type: 'paragraph', html: 'Un <strong>espectrograma de voz</strong> transforma una grabación sonora en un mapa visual donde el tiempo transcurre en el eje horizontal y la frecuencia se distribuye en el vertical. La intensidad de la señal se refleja mediante la iluminación del color, lo que permite observar vocales sostenidas, armónicos, silencios y cambios de timbre con mucha mayor claridad que en una onda de forma convencional.' },
    { type: 'paragraph', html: 'El analizador divide la señal en fragmentos cortos solapados, aplica una ventana de Hamming y calcula la distribución de energía por frecuencias mediante la Transformada Rápida de Fourier (FFT). Un fragmento corto permite precisar el momento exacto de un evento, mientras que la resolución en frecuencia permite identificar dónde se concentra la energía. Debido al principio de incertidumbre en el procesamiento de señales, existe siempre un compromiso entre resolución temporal y frecuencial.' },
    { type: 'diagnostic', variant: 'info', title: 'Procesamiento Privado en Navegador', html: 'El archivo seleccionado se decodifica en la memoria RAM de tu dispositivo y se analiza de forma local. No se requiere subida de datos, por lo que las grabaciones de voz, ensayos o clases permanecen privadas.' },
    { type: 'stats', columns: 3, items: [
      { value: 'Tiempo', label: 'Lectura de izquierda a derecha' },
      { value: 'Hz', label: 'Posición en frecuencia' },
      { value: 'Energía', label: 'Representada por brillo lumínico' }
    ] },
    { type: 'title', text: 'Lectura de formantes y límites de la estimación', level: 3 },
    { type: 'paragraph', html: 'Los formantes son picos de resonancia producidos por la forma del tracto vocal. F1 y F2 se utilizan habitualmente en fonética para describir la apertura y articulación de las vocales. Este analizador rastrea regiones de frecuencia para ofrecer una aproximación visual de F1, F2 y F3.' },
    { type: 'paragraph', html: 'El análisis profesional de formantes suele emplear codificación predictiva lineal (LPC) ajustada individualmente al hablante. Los armónicos del tono fundamental, el ruido de fondo, la compresión de audio o la sonoridad de la sala pueden desplazar la estimación. Utiliza estas guías como referencia didáctica y revisa siempre el espectro visual de fondo.' },
    { type: 'table', headers: ['Guía', 'Rango de búsqueda', 'Interpretación fónica'], rows: [
      ['F1', '180 a 1000 Hz', 'Primera resonancia, asociada a la apertura bucal y altura de la vocal'],
      ['F2', '900 a 3000 Hz', 'Segunda resonancia, asociada a la posición anterior o posterior de la lengua'],
      ['F3', '2000 a 4500 Hz', 'Resonancia superior, influida por la geometría global del tracto vocal']
    ] },
    { type: 'title', text: 'Efecto del techo de frecuencia en el análisis', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Techo Bajo (4 kHz)', description: 'Ocupa más espacio visual para las frecuencias fundamentales del habla.', points: ['Ideal para inspeccionar vocales y formantes bajos', 'Descarta altas frecuencias', 'No garantiza mayor precisión por sí solo'] },
      { title: 'Techo Alto (6 u 8 kHz)', description: 'Incluye armónicos superiores y sonidos de fricción.', highlight: true, points: ['Recomendado para voces agudas y consonantes fricativas', 'Muestra el espectro completo', 'Comprime visualmente la zona de formantes inferiores'] }
    ] },
    { type: 'title', text: 'Comparación responsable entre dos muestras', level: 3 },
    { type: 'paragraph', html: 'Comparar dos placas espectrales es útil cuando ambas grabaciones corresponden a la misma vocal o palabra bajo condiciones acústicas similares. Las diferencias mostradas indican distancias en Hertz entre picos promediados, pero no constituyen una prueba biométrica de identidad.' },
    { type: 'list', items: [
      '<strong>Compara el mismo contenido hablado:</strong> las vocales o palabras idénticas facilitan el contraste.',
      '<strong>Iguala las condiciones de grabación:</strong> el micrófono y la acústica de la sala influyen en el espectro.',
      '<strong>Escucha de forma sincronizada:</strong> conecta los eventos visuales con el sonido exacto.',
      '<strong>Evita conclusiones periciales:</strong> un espectrograma similar no demuestra por sí solo que pertenezca a la misma persona.'
    ] },
    { type: 'summary', title: 'Objetivos de este analizador', items: [
      'Visualizar el espectrograma de cualquier archivo de audio compatible de forma local.',
      'Comparar dos muestras en placas paralelas o enfrentadas con reproducción interactiva.',
      'Aprender cómo varía la distribución de energía sonora y los formantes aproximados.',
      'Mantener un enfoque descriptivo y didáctico sin pretensiones biométricas.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
