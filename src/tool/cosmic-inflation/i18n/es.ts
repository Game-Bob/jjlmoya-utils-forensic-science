import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-inflacion-cosmica';
const description = 'Calcula la expansion exponencial del universo primitivo durante la epoca de inflacion cosmica.';
const title = 'Calculadora de Inflacion Cosmica: Expansion del Universo Primitivo';

const howTo = [
  {
    name: 'Seleccionar valores',
    text: 'Arrastra los deslizadores para ver los resultados.',
  },
  {
    name: 'Comparar factores de escala',
    text: 'Observa por cuantos ordenes de magnitud se ha expandido el espacio.',
  },
  {
    name: 'Analizar distorsion dinamica',
    text: 'El lienzo muestra la expansion del espacio.',
  },
];

const faq = [
  {
    question: '¿Qué es la inflacion cosmica y por que ocurrio?',
    answer: 'La inflacion cosmica es una teoria que postula una expansion ultrarrapida y exponencial del espacio en las fracciones de segundo iniciales del universo, concretamente alrededor de 10^-36 segundos despues del Big Bang. Ocurrio debido a que un campo escalar teorico, denominado inflaton, se encontraba en un estado de alta densidad de energia de falso vacio, lo que genero una presion negativa y una fuerza de gravedad repulsiva que estiro el tejido del espacio-tiempo.',
  },
  {
    question: '¿Qué significa el numero de e-folds (e-doblamientos)?',
    answer: 'El numero de e-folds mide la duracion de la fase de expansion exponencial. Un e-fold representa el tiempo en el cual el tamano del universo se multiplica por el numero de Euler (aproximadamente 2.718). Si el universo experimenta N e-folds, su factor de escala se incrementa por un factor de e^N. Los modelos cosmologicos estandar exigen al menos 50 a 60 e-folds para solucionar adecuadamente los problemas de planitud y del horizonte.',
  },
  {
    question: '¿Cómo soluciona la inflacion el problema del horizonte?',
    answer: 'El problema del horizonte plantea por que regiones del universo extremadamente distantes tienen temperaturas de radiacion de fondo de microondas casi identicas, a pesar de que la velocidad de la luz no habria permitido que interactuaran para equilibrarse. La inflacion resuelve esto demostrando que, antes de la expansion exponencial, todo el universo observable era una minuscula region en equilibrio termico causalmente conectada, la cual fue estirada instantaneamente mas alla del horizonte visual.',
  },
  {
    question: '¿Qué es el problema de la planitud y como se resuelve?',
    answer: 'La densidad de energia del universo actual esta extremadamente cerca de la densidad critica, lo que significa que el espacio es plano con un margen de error minimo. Sin inflacion, cualquier desviacion inicial de la planitud habria crecido exponencialmente con el tiempo, requiriendo un ajuste fino imposible en el Big Bang. La inflacion estira la curvatura espacial de forma tan violenta que cualquier curvatura inicial queda diluida, de la misma forma en que la superficie de una esfera gigante parece perfectamente plana a nivel local.',
  },
  {
    question: '¿Qué es el proceso de recalentamiento o reheating?',
    answer: 'El recalentamiento es la transicion termica que marca el final de la inflacion. Durante la inflacion, el universo se enfria a temperaturas cercanas al cero absoluto debido a la expansion exponencial del volumen. Cuando el campo del inflaton decae al minimo de su potencial, su energia remanente se vierte en el espacio en forma de particulas del Modelo Estandar a traves de interacciones cuánticas, llenando el cosmos con un plasma caliente y denso que inicia la fase tradicional del Big Bang.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Inflacion Cosmica',
    efoldsLabel: 'Numero de e-folds (N)',
    energyLabel: 'Escala de Energia Inicial (GeV)',
    scaleFactorResult: 'Crecimiento del Factor de Escala',
    reheatingTempResult: 'Temperatura de Recalentamiento Estimada',
    chartTitle: 'Distorsion del Tejido Espacio-Temporal',
    presetGuth: 'Estandar (Guth)',
    presetChaotic: 'Caotica',
    presetExtreme: 'Limites Extremos',
    efoldsTooltip: 'Los modelos tipicos predicen entre 50 y 60 e-folds.',
    energyTooltip: 'La escala GUT esta alrededor de 10^16 GeV.',
    scaleFactorTooltip: 'Representa el factor de expansion total.',
    reheatingTooltip: 'La temperatura al final de la inflacion.',
    analogyInsuff: 'Inflacion moderada. Esta expansion es insuficiente.',
    analogyProton: 'El universo se expandio desde el tamano de un proton al de una galaxia en una fraccion de segundo.',
    analogyObservable: 'El universo se expandio desde una escala subatomica a una mayor que el universo observable en 10^-32 segundos.',
  },
  seo: [
    {
      type: 'title',
      text: 'COSMOLOGIA: La teoria de la inflacion cosmica y la expansion del espacio-tiempo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La inflacion cosmica representa el pilar fundamental que une la fisica de particulas con la astrofisica observacional. Propuesta a principios de la decada de 1980 por fisicos como Alan Guth y Andrei Linde, esta teoria postula que el universo primitivo sufrio una fase de expansion exponencial impulsada por la densidad de energia de un campo escalar conocido como el inflaton. Esta expansion incremento el volumen del universo en un factor de al menos 10^26 en una fraccion diminuta de segundo, resolviendo paradojas profundas del modelo clasico del Big Bang y proporcionando el marco teorico para la formacion de la estructura cosmica.',
    },
    {
      type: 'title',
      text: 'Comparacion de modelos y parametros de inflacion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diferentes potenciales para el campo del inflaton producen distintos ritmos de expansion y temperaturas de recalentamiento. A continuacion se detallan las caracteristicas de los modelos principales simulados en esta calculadora:',
    },
    {
      type: 'table',
      headers: ['Modelo de Inflacion', 'Rango e-folds (N)', 'Escala de Energia (GeV)', 'Resultado Fisico y Dinamico'],
      rows: [
        ['<strong>Guth Estandar</strong>', '50 - 60', '10^16', 'Resuelve planitud y horizonte; fin de inflacion por nucleacion de burbujas en transicion de fase lenta.'],
        ['<strong>Inflacion Caotica (Linde)</strong>', '60 o mas', '10^16', 'El inflaton desciende suavemente por un potencial parabolico simple; evita problemas de transicion de fase abrupta.'],
        ['<strong>Limites Extremos</strong>', '90 o mas', '10^19 (Planck)', 'Energias cercanas al limite de la gravedad cuantica; estiramiento masivo del espacio-tiempo primordial.'],
      ],
    },
    {
      type: 'title',
      text: 'Resolucion de los problemas del Big Bang clasico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antes del desarrollo de la inflacion, la cosmologia clasica del Big Bang sufria de graves inconsistencias teoricas. El problema del horizonte, derivado de la homogeneidad de la radiacion de fondo de microondas, y el problema de la planitud, asociado a la densidad critica del espacio, sugerian la necesidad de condiciones iniciales extremadamente improbables. La inflacion solventa de forma natural ambas dificultades al estirar una micro-region termicamente homogenea e aplanar de manera dinamica la geometria espacial local. Ademas, diluye la concentracion de monopolos magneticos que deberian haberse formado copiosamente en el universo primitivo.',
    },
    {
      type: 'title',
      text: 'Evidencia astronomica observacional del modelo inflacionario',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La teoria de la inflacion cosmica no es solo una elegante construccion matematica; cuenta con solidas pruebas indirectas confirmadas por satelites espaciales como COBE, WMAP y Planck:',
    },
    {
      type: 'list',
      items: [
        '<strong>Homogeneidad del CMB:</strong> La radiacion de fondo de microondas muestra una temperatura uniforme con variaciones de solo 1 parte en 100,000 en extremos opuestos del cielo visible.',
        '<strong>Geometria Plana:</strong> Las mediciones de la curvatura del universo confirman que es espacialmente plano con un margen de error inferior al 1%, consistente con un estiramiento inflacionario masivo.',
        '<strong>Ausencia de Monopolos:</strong> Explica de forma logica la ausencia total de monopolos magneticos estables de gran masa en nuestro universo observable.',
        '<strong>Espectro de Fluctuaciones:</strong> Las anisotropias observadas en el fondo cosmico muestran un indice espectral ligeramente inferior a 1, tal como predicen los modelos de rodadura lenta del inflaton.',
      ],
    },
    {
      type: 'title',
      text: 'Fluctuaciones cuanticas y la semilla de las galaxias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El aspecto mas extraordinario de la inflacion cosmica es su capacidad para actuar como un microscopio cosmico. Las fluctuaciones cuanticas microscopicas del campo del inflaton se estiraron a escalas astronomicas durante el periodo de expansion exponencial. Al finalizar la inflacion, estas fluctuaciones se congelaron en forma de variaciones de densidad de mattera (perturbaciones primordiales). Estas diferencias de densidad sirvieron como semillas gravitatorias que, a lo largo de miles de millones de anos, atrajeron materia para dar origen a las primeras estrellas, galaxias, cúmulos de galaxias y la gran red cosmica que observamos en la actualidad.',
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
