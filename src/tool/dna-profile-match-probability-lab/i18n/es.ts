import { content as enContent } from './en';
import { createDnaLocale } from '../localize';

export const content = createDnaLocale({
  locale: 'es',
  slug: 'laboratorio-probabilidad-coincidencia-perfil-adn',
  title: 'Laboratorio de probabilidad de coincidencia de perfiles de ADN',
  description: 'Explora cómo las frecuencias alélicas y las reglas de Hardy-Weinberg forman una probabilidad educativa de coincidencia aleatoria de un perfil de ADN.',
  ui: {
    ...enContent.ui,
    controls: 'Controles del perfil', controlKicker: 'Construir un perfil', controlHelper: 'Empieza con un preset didáctico o abre cada locus para editar los alelos y sus frecuencias poblacionales.', presets: 'Presets didácticos', presetbalanced: 'Equilibrado', presethomozygote: 'Homocigotos', presetclassroom: 'Clase sencilla', loci: 'loci', locus: 'Locus', locusName: 'Nombre del locus', alleleA: 'Alelo A', alleleB: 'Alelo B', frequencyA: 'Frecuencia A (%)', frequencyB: 'Frecuencia B (%)', removeLocus: 'Eliminar locus', addLocus: 'Añadir locus', disclaimer: 'Simulador educativo. No identifica personas, valida casos ni sustituye un cálculo de laboratorio.', sceneKicker: 'Traza de señal', electropherogram: 'Traza del perfil', sceneNote: 'Dos picos muestran los dos alelos introducidos en cada locus. La altura es una pista visual de frecuencia, no una señal de laboratorio.', peakHeight: 'La altura del pico escala con la frecuencia', results: 'Resultados de probabilidad', resultKicker: 'Probabilidad de coincidencia aleatoria', locusBreakdown: 'Cálculo locus por locus', genotype: 'Genotipo', rule: 'Regla', frequency: 'Frecuencia del genotipo', badgeNeedsData: 'Faltan datos', badgeExploratory: 'Exploratorio', badgeCalculated: 'Modelo calculado', needsData: 'Completa cada locus con dos alelos y frecuencias entre 0 y 100 %; la suma de cada pareja no puede superar el 100 %.', exploratoryResult: 'Este perfil pequeño sirve para aprender el método. Más loci pueden hacerlo más raro, pero no convierten el modelo en una conclusión de caso.', calculatedResult: 'El producto se calcula con las frecuencias introducidas y supuestos simplificados de independencia.', notCalculated: 'No calculado', completeFields: 'Completa los campos del perfil para ver un resultado.', ofRandomProfiles: 'de perfiles aleatorios bajo este modelo didáctico', missingValue: 'Locus sin nombre', pattern: 'Patrón del perfil', calculation: 'Cálculo', meaning: 'Significado', homozygote: 'Dos alelos iguales', heterozygote: 'Dos alelos distintos', independentLoci: 'Varios loci independientes', homozygoteMeaning: 'La frecuencia del alelo se multiplica por sí misma.', heterozygoteMeaning: 'Las dos frecuencias alélicas se multiplican y se duplican.', independentLociMeaning: 'Cada locus contribuye a la frecuencia combinada del perfil',
  },
  seo: {
    calculatorTitle: 'Calculadora de probabilidad de coincidencia de un perfil de ADN',
    intro: 'Este laboratorio de probabilidad de perfiles de ADN ayuda a estudiantes y lectores curiosos a explorar cómo un pequeño perfil STR autosómico se convierte en una probabilidad bajo un modelo simplificado de genética de poblaciones. Introduce dos alelos y sus frecuencias para cada locus. La calculadora aplica la regla de Hardy-Weinberg y multiplica las frecuencias de los loci para mostrar una coincidencia aleatoria educativa.',
    methodTitle: 'Cómo funciona la regla del genotipo',
    method: 'La interfaz mantiene visible el razonamiento: la traza muestra los alelos introducidos, la tabla muestra cada frecuencia de genotipo y el resultado final se expresa como uno entre una potencia de diez. Un homocigoto usa p² y un heterocigoto usa 2pq. Los presets contienen valores sintéticos para enseñar, no una base poblacional oficial.',
    populationTitle: 'Por qué importan las frecuencias poblacionales',
    population: 'Las frecuencias alélicas son estimaciones obtenidas de bases de datos poblacionales. La población de referencia, el muestreo, el tamaño de la base, el parentesco, la subestructura y la validación afectan a la interpretación. Si las frecuencias describen la población relevante, el perfil es una fuente única limpia y los loci se tratan como independientes, el producto estima con qué frecuencia aparecería en personas aleatorias no emparentadas. Si cambia un supuesto, cambia la interpretación.',
    interpretation: 'El resultado es una afirmación condicional sobre los valores introducidos. No tiene en cuenta la selección de una persona, el parentesco, los perfiles mezclados ni el efecto de una búsqueda en una base de datos. Por eso, un ejemplo didáctico debe leerse junto con su población, método e incertidumbre.',
    limitsTitle: 'Límites educativos',
    limits: 'En un caso real también deben documentarse la selección de la persona, la base poblacional, las mezclas, la subestructura y la interpretación experta. Esta aplicación no analiza electroferogramas, no corrige subestructura, no calcula razones de verosimilitud y no busca en bases de datos de ADN.',
    tipTitle: 'Úsalo como modelo, no como veredicto',
    tip: 'Una probabilidad de coincidencia aleatoria pequeña no es una afirmación de culpabilidad ni de identidad. Usa la herramienta para explicar la aritmética y mantén visibles la fuente de datos, la población, los supuestos y la incertidumbre.',
    list: ['<strong>Una población:</strong> No mezcles frecuencias de bases de datos que no sean comparables.', '<strong>Supuestos visibles:</strong> El laboratorio supone personas no emparentadas e independencia simplificada entre loci.', '<strong>Separa probabilidad e identidad:</strong> Un perfil raro no prueba el origen ni la culpabilidad.', '<strong>Documenta los datos:</strong> Un informe formal necesita fuente, método, incertidumbre e interpretación.'],
  },
  faq: [
    { question: '¿Qué significa la probabilidad de coincidencia aleatoria?', answer: 'Estima la probabilidad de que una persona no emparentada elegida al azar tenga el perfil introducido bajo las frecuencias y supuestos seleccionados. No es la probabilidad de culpabilidad ni de que una muestra proceda de alguien concreto.' },
    { question: '¿Cómo se calcula la frecuencia de un genotipo?', answer: 'Para un homocigoto se usa p². Para un heterocigoto se usa 2pq; después se multiplican las frecuencias de los loci.' },
    { question: '¿Por qué las frecuencias de los presets son sintéticas?', answer: 'Son ejemplos pequeños para clase. El trabajo forense necesita una base poblacional validada, representativa y documentada.' },
    { question: '¿Puede comparar dos personas o identificar una muestra?', answer: 'No. No recibe muestras, no compara dos perfiles, no busca en bases de datos y no identifica a nadie. Solo explora un modelo matemático.' },
    { question: '¿Por qué una probabilidad muy pequeña no es un veredicto?', answer: 'La interpretación depende de la base de datos, la selección, la calidad del perfil, los supuestos y la valoración profesional.' },
  ],
  howTo: [
    { name: 'Elige un preset didáctico', text: 'Empieza con el preset equilibrado, de homocigotos o de clase sencilla.' },
    { name: 'Edita un locus', text: 'Introduce el nombre, dos alelos y la frecuencia de cada alelo como porcentaje.' },
    { name: 'Lee la regla del locus', text: 'La tabla muestra p² para homocigotos y 2pq para heterocigotos.' },
    { name: 'Interpreta el resultado con cuidado', text: 'Trátalo como un modelo educativo y conserva visibles sus supuestos.' },
  ],
});
