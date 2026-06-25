import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-prueba-presuntiva-sangre-forense';
const title = 'Simulador de Prueba Presuntiva de Sangre Forense';
const description = 'Simula pruebas presuntivas de sangre utilizando Kastle-Meyer y Luminol. Distingue sangre real de falsos positivos comunes como óxido, lejía y peroxidasas vegetales.';

const howTo = [
  {
    name: 'Seleccionar una muestra',
    text: 'Elija una muestra de la gradilla para analizar, representando sangre o materiales comunes de falso positivo.'
  },
  {
    name: 'Elegir reactivo',
    text: 'Decida si realizar la prueba colorimétrica de Kastle-Meyer o la prueba de luminiscencia con Luminol.'
  },
  {
    name: 'Aplicar reactivos',
    text: 'Añada gotas del reactivo Kastle-Meyer seguido de Peróxido de Hidrógeno, o aplique la solución de Luminol directamente.'
  },
  {
    name: 'Interpretar la reacción',
    text: 'Observe los cambios de color o el brillo azul en la oscuridad para clasificar la reacción como positivo verdadero, falso positivo o negativo.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: '¿Por qué se llama prueba presuntiva?',
    answer: 'Las pruebas presuntivas son análisis preliminares que indican la posible presencia de sangre basándose en su actividad catalítica. Son altamente sensibles pero no completamente específicas, lo que significa que pueden dar falsos positivos y requieren pruebas de confirmación posteriores.'
  },
  {
    key: 'faq-2',
    question: '¿Qué causa un falso positivo en la prueba de Kastle-Meyer?',
    answer: 'La prueba de Kastle-Meyer depende de la actividad similar a la peroxidasa del grupo hemo. Cualquier sustancia que contenga oxidantes químicos, iones metálicos (como el hierro en el óxido) o peroxidasas vegetales (como en las patatas) puede catalizar la reacción y producir el color rosa.'
  },
  {
    key: 'faq-3',
    question: '¿Cómo ocurre la reacción del Luminol?',
    answer: 'El luminol reacciona con el peróxido de hidrógeno en presencia de un catalizador (como el hierro de la hemoglobina). Esta reacción oxida el luminol a un estado excitado, que libera energía en forma de luz azul al volver a su estado fundamental.'
  },
  {
    key: 'faq-4',
    question: '¿Puede la lejía doméstica dar un falso positivo?',
    answer: 'Sí. La lejía doméstica (hipoclorito de sodio) es un fuerte oxidante químico. Oxida directamente la fenolftalina o el luminol sin necesidad de un catalizador, produciendo reacciones inmediatas que se desvanecen rápidamente.'
  },
  {
    key: 'faq-5',
    question: '¿Cuál es la diferencia entre pruebas presuntivas y de confirmación?',
    answer: 'Las pruebas presuntivas son rápidas, económicas y muy sensibles, ideales para localizar manchas en la escena del crimen. Las pruebas de confirmación (como las pruebas de cristales o los ensayos inmunológicos) son muy específicas y prueban la presencia de sangre humana con total certeza.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulador de Prueba de Sangre',
    desc: 'Realiza experimentos virtuales con reactivos de Luminol y Kastle-Meyer para detectar sangre y analizar falsos positivos.',
    configTitle: 'Controles del Laboratorio',
    sampleLabel: 'Seleccionar Muestra',
    reagentLabel: 'Seleccionar Reactivo',
    lightsLabel: 'Iluminación',
    btnLightsOff: 'Apagar Luces',
    btnLightsOn: 'Encender Luces',
    btnReset: 'Reiniciar Placa',
    resultsTitle: 'Resultados de la Prueba',
    sampleBlood: 'Muestra de Sangre (Control)',
    sampleRust: 'Óxido (Óxido de Hierro)',
    sampleBleach: 'Lejía (Hipoclorito de Sodio)',
    samplePotato: 'Patata (Peroxidasa Vegetal)',
    sampleSaliva: 'Muestra de Saliva',
    reagentKM: 'Reactivo Kastle-Meyer',
    reagentH2O2: 'Peróxido de Hidrógeno (H2O2)',
    reagentLuminol: 'Solución de Luminol',
    resultTruePositive: 'Positivo Verdadero (Sangre Detectada)',
    resultFalsePositive: 'Falso Positivo (Catalizador No Sanguíneo)',
    resultNegative: 'Reacción Negativa',
    statusLabel: 'Estado de la Reacción',
    reactionLabel: 'Explicación de la Reacción',
    dropReagentBtn: 'Aplicar Gota',
    activeCompounds: 'Compuestos Activos',
    reactionSpeed: 'Velocidad de Reacción',
    reactionDuration: 'Duración de Reacción',
    specimenBase: 'Base del Espécimen',
    kmPending: 'Reactivo Kastle-Meyer aplicado. Añada Peróxido de Hidrógeno (H2O2) para catalizar el cambio de color.',
    h2o2Only: 'Peróxido de Hidrógeno aplicado. No hay reacción visible sin el indicador Kastle-Meyer.',
    noReaction: 'No se observa reacción. La muestra permanece incolora.',
    luminolBlood: 'Brillo azul intenso observado inmediatamente en la oscuridad. Los grupos hemo en la hemoglobina oxidaron catalíticamente el luminol. Positivo Verdadero.',
    luminolBleach: 'Brillo azul muy intenso observado de inmediato, que se desvaneció extremadamente rápido (menos de 2 segundos). La lejía oxida el luminol directamente sin requerir hemo. Falso Positivo.',
    luminolRust: 'Brillo azul débil observado. Los iones metálicos del óxido catalizan débilmente la oxidación. Se desvanece gradualmente. Falso Positivo.',
    luminolPotato: 'Sin luminiscencia visible. Las peroxidasas vegetales no poseen la estructura catalítica adecuada para oxidar el luminol en estas condiciones. Negativo.',
    luminolNegative: 'Sin luminiscencia observada en la oscuridad. El compuesto no es catalítico para la oxidación del luminol. Negativo.',
    kmBlood: 'Coloración rosa brillante inmediata al añadir Peróxido de Hidrógeno. El hemo en la sangre redujo catalíticamente el peróxido, oxidando la fenolftalina a fenolftaleína. Positivo Verdadero.',
    kmBleach: 'Cambio inmediato a color rosa fuerte. El hipoclorito de sodio oxida directamente la fenolftalina sin necesidad de peróxido. Falso Positivo.',
    kmRust: 'Coloración rosa-marrón débil y lenta que aparece después de varios segundos. El óxido cataliza la reacción a un ritmo mucho más lento. Falso Positivo.',
    kmPotato: 'Coloración rosa tenue y lenta tras un retraso. Las peroxidasas vegetales catalizan débilmente la reacción. Falso Positivo.',
    kmNegative: 'No se observa cambio de color. La solución permanece incolora. Negativo.'
  },
  seo: [
    {
      type: 'title',
      text: 'Guía Completa sobre Pruebas Presuntivas de Sangre Forense',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Las pruebas presuntivas de sangre son análisis preliminares muy sensibles que se utilizan en la escena del crimen para detectar la posible presencia de sangre. Antes de realizar análisis más complejos como la secuenciación de ADN, los investigadores forenses dependen de estos reactivos rápidos para analizar manchas en ropa, armas y superficies. Dado que estas pruebas se basan en la actividad similar a la peroxidasa del grupo hemo de la hemoglobina, son presuntivas: un resultado positivo sugiere que hay sangre, pero requiere una confirmación secundaria para descartar falsos positivos.'
    },
    {
      type: 'title',
      text: 'Funcionamiento de la Prueba de Kastle-Meyer',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La prueba de Kastle-Meyer (KM) es un análisis colorimétrico catalítico que utiliza la forma reducida e incolora de la fenolftaleína, conocida como fenolftalina. La secuencia de reacción es muy específica: primero se aplica el reactivo de fenolftalina a la muestra. En presencia de sangre, el grupo hemo actúa como catalizador. Al añadir peróxido de hidrógeno (H2O2), el hemo cataliza la oxidación de la fenolftalina de vuelta a fenolftaleína, produciendo un cambio de color inmediato a rosa intenso. Un cambio de color lento (después de 15-20 segundos) se interpreta como negativo o falso positivo por oxidación ambiental lenta.'
    },
    {
      type: 'title',
      text: 'El Luminol y la Quimioluminiscencia Forense',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'El luminol (C8H7N3O2) es un compuesto químico que exhibe quimioluminiscencia (brilla en la oscuridad) cuando se oxida en presencia de un catalizador metálico. Los investigadores rocían una solución diluida de luminol en la escena. Si entra en contacto con manchas de sangre, el hierro de la hemoglobina cataliza la reacción. La reacción química resultante produce un ion aminoftalato excitado, que emite una luz azul-cian al volver a su estado fundamental. Debido a la baja intensidad del brillo, el entorno debe estar completamente a oscuras para observarlo y fotografiarlo.'
    },
    {
      type: 'table',
      headers: ['Sustancia Analizada', 'Perfil de Reacción Kastle-Meyer', 'Perfil de Luminiscencia con Luminol', 'Clasificación Diagnóstica Forense'],
      rows: [
        ['Control de Sangre Humana', 'Coloración rosa brillante inmediata al añadir H2O2.', 'Brillo azul-cian intenso y duradero (hasta 8s).', 'Positivo Verdadero. El hemo proporciona la actividad catalítica necesaria.'],
        ['Lejía Doméstica', 'Cambio inmediato a rosa antes de añadir H2O2.', 'Brillo extremadamente intenso que decae en menos de 2s.', 'Falso Positivo. Los oxidantes fuertes reaccionan directamente sin necesidad de catalizador.'],
        ['Óxido de Hierro', 'Coloración rosa-marrón débil y lenta.', 'Brillo azul tenue que decae gradualmente.', 'Falso Positivo. Los iones de hierro libre catalizan la reacción con muy baja eficiencia.'],
        ['Patata (Peroxidasa)', 'Coloración rosa tenue y tardía tras un retraso.', 'Sin quimioluminiscencia visible.', 'Falso Positivo (KM) / Negativo (Luminol). Las enzimas vegetales no activan el luminol.']
      ]
    },
    {
      type: 'title',
      text: 'Diferenciación de la Sangre frente a Falsos Positivos Comunes',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Identificar falsos positivos es una parte esencial de la formación forense. Los productos de limpieza fuertes que contienen hipoclorito de sodio (lejía) oxidan directamente los indicadores, imitando la sangre. Sin embargo, los expertos los distinguen analizando la dinámica de reacción: la lejía reacciona sin peróxido en la prueba KM, y su brillo con luminol decae casi instantáneamente. Las peroxidasas vegetales (de patatas, rábano o cebollas) también producen falsos positivos pero se inactivan con calor, a diferencia de la hemoglobina que es termoestable. Cualquier resultado presuntivo positivo debe confirmarse mediante ensayos específicos.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
