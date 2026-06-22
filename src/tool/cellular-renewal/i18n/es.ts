const slug = 'calculadora-renovacion-celular';
const description = 'Calcula el porcentaje de tu cuerpo que se ha renovado desde tu nacimiento. Estimación basada en la tasa de división celular de órganos, huesos y tejidos. La paradoja de Teseo hecha tangible.';
const title = 'Calculadora de Renovación Celular: ¿Cuánto Queda del "Tú" Original?';
const howTo = [
    {
      name: 'Ajusta tu edad',
      text: 'Desliza el selector desde 1 hasta 105 años. Esta es la variable más importante para los cálculos de renovación.',
    },
    {
      name: 'Observa el porcentaje principal',
      text: 'El número grande en el centro muestra qué porcentaje de tu materia actual es "nueva" (renovada desde tu nacimiento).',
    },
    {
      name: 'Analiza las barras de progreso',
      text: 'Cada barra representa un tejido diferente: piel/sangre, hueso, órganos y cerebro. Nota cómo el cerebro apenas cambia mientras la piel se renueva constantemente.',
    },
    {
      name: 'Reflexiona sobre tu identidad',
      text: 'Si el 99% de ti es materia nueva, ¿quién eres realmente? Usa esta herramienta como punto de partida para reflexiones sobre la continuidad personal y la paradoja de Teseo.',
    },
  ];
const faq = [
    {
      question: '¿Qué es exactamente la "renovación celular"?',
      answer: 'Es el proceso natural por el cual las células envejecidas o dañadas mueren (apoptosis) y son reemplazadas por nuevas células generadas por división mitótica. Este ciclo es esencial para mantener los tejidos funcionales y reparar daños.',
    },
    {
      question: '¿Por qué el cerebro se renueva tan lentamente?',
      answer: 'Las neuronas de la corteza cerebral se generan antes del nacimiento y generalmente no se dividen más. Esto proporciona estabilidad neurológica: tus "cables" fundamentales permanecen constantes. Sin embargo, las células gliales (de soporte) sí se renuevan. La memoria se almacena en las conexiones, no en los átomos.',
    },
    {
      question: '¿Es cierto que cada 7 años somos "nuevas personas"?',
      answer: 'Es una simplificación. No es exacta. Tu sangre se renueva en 4 meses, tu piel en un mes, tu esqueleto en 10 años. Tu cerebro permanece en gran parte sin cambios. El número 7 años es histórico (Aristóteles lo mencionó) pero biológicamente es un promedio impreciso.',
    },
    {
      question: '¿Si mi cuerpo es 99% nuevo, sigo siendo la misma persona?',
      answer: 'Sí. La identidad es una continuidad de información, conciencia y memoria, no de átomos. Eres como un río: el agua cambia constantemente, pero el río persiste. La paradoja de Teseo sugiere que la identidad reside en la pauta, no en la materia.',
    },
    {
      question: '¿Qué tejidos se renuevan más rápido?',
      answer: 'La sangre y la piel lideran. Tu médula ósea produce 200,000 millones de células sanguíneas diarias. Pierdes ~30,000 células de piel por minuto. Por eso sanan tan bien y envejecen tan visiblemente: son jóvenes en términos de edad celular.',
    },
    {
      question: '¿El cristalino del ojo realmente no se renueva?',
      answer: 'Correcto. Las células del cristalino se depositan durante el desarrollo embrionario y se mantienen de por vida. A los 100 años, las células centrales de tu cristalino podrían ser las mismas que cuando estabas en el útero. Es una cápsula de tiempo biológica.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiado',
    noHistory: 'Sin historial',
    load: 'Cargar',
    delete: 'Eliminar',
    biologicalTimeline: 'Cronología Biológica',
    ageUnit: 'años de evolución',
    matterNewPercent: 'Tu materia es nueva en un',
    atomicRenewal: 'Renovación Atómica',
    skinAndBlood: 'Epidermis y Sangre',
    boneRemodeling: 'Remodelación Ósea',
    organicMatrix: 'Matriz Orgánica',
    perennialCells: 'Células Perennes',
    disclaimerText: 'Los cálculos se basan en la vida media celular según estudios isotópicos. Mientras que la sangre y la piel se renuevan en semanas, las proteínas del cristalino y gran parte de tu corteza cerebral permanecen desde el desarrollo embrionario. Físicamente, eres una estructura dinámica en flujo constante.',
  },
  seo: [
    {
      type: 'title',
      text: '¿Cuánto de ti es realmente "tuyo"? La ciencia de la renovación celular',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tu cuerpo es un río en constante movimiento. Cada segundo, millones de células mueren y son reemplazadas por nuevas. En siete años, prácticamente cada átomo de tu cuerpo habrá sido sustituido. Sin embargo, esta estadística es profundamente engañosa, porque diferentes partes de tu organismo se renuevan a velocidades radicalmente distintas.',
    },
    {
      type: 'paragraph',
      html: 'Esta paradoja, conocida como la <strong>Paradoja de Teseo</strong>, plantea una pregunta antigua: si reemplazas todas las partes de algo, ¿sigue siendo lo mismo? En tu caso, es una pregunta literal. Los átomos que constituyen tu cuerpo hoy no son los mismos que había hace 10 años, pero <em>tú</em> sigas siendo tú.',
    },
    {
      type: 'title',
      text: 'El turnover celular: un mapa de tu cuerpo dinámico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La velocidad de renovación varía dramáticamente según el tejido:',
    },
    {
      type: 'table',
      headers: ['Tejido', 'Vida Media Celular', 'Renovación Completa', 'Descripción'],
      rows: [
        ['<strong>Sangre</strong>', '120 días', '4 meses', 'Los glóbulos rojos son los más rápidos. Tu médula ósea produce 200 mil millones diarios.'],
        ['<strong>Piel</strong>', '2-4 semanas', '1 mes', 'Renovación extremadamente rápida. Pierdes ~30,000 células de piel por minuto.'],
        ['<strong>Hueso</strong>', '10 años', 'Una década', 'El esqueleto es más conservador. Aún así, después de 10 años, habrás reemplazado prácticamente todo tu esqueleto.'],
        ['<strong>Órganos</strong>', '15 años', '1.5 décadas', 'El hígado se renueva en meses. El corazón, en años. Un mosaico de ritmos.'],
        ['<strong>Cerebro</strong>', '80+ años (neuronas)', 'Casi nunca', 'Tus neuronas corticales desde el nacimiento. Pero las glías (células de soporte) sí se renuevan.'],
      ],
    },
    {
      type: 'title',
      text: 'El cristalino del ojo: la parte más antigua de ti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hay una estructura en tu cuerpo que es especial: el <strong>cristalino del ojo</strong>. Las células que componen el cristalino se depositan durante el desarrollo fetal y nunca se reemplazan. Si logras vivir hasta los 100 años, las células centrales de tu cristalino seguirán siendo las mismas que tenías en el útero de tu madre. Son, literalmente, la parte más antigua de ti.',
    },
    {
      type: 'title',
      text: 'Cálculo de la renovación total: la paradoja de los pesos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Este calculador usa un promedio ponderado de los diferentes tejidos:',
    },
    {
      type: 'list',
      items: [
        '<strong>30% piel y sangre:</strong> Renovación casi completa en años jóvenes.',
        '<strong>35% esqueleto:</strong> Renovación progresiva, alcanzando el 100% a los 10 años.',
        '<strong>25% órganos:</strong> Renovación más lenta, variable según el órgano.',
        '<strong>10% cerebro:</strong> Cambio mínimo en neuronas, máximo en estructuras de soporte.',
      ],
    },
    {
      type: 'paragraph',
      html: 'El resultado es que a los 25 años, aproximadamente el <strong>93% de tu materia actual es nueva</strong>. A los 80 años, podrías estar compuesto por más del 99% de átomos diferentes a los que tenías al nacer.',
    },
    {
      type: 'title',
      text: 'Implicaciones filosóficas: la identidad es información, no materia',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Si tu cuerpo es completamente nuevo cada década, ¿por qué eres "tú"? La respuesta está en que la identidad no reside en los átomos específicos, sino en el <strong>patrón de información</strong> que esos átomos sostienen. Eres como una canción: no es el mismo aire que vibra, pero el patrón persiste.',
    },
    {
      type: 'paragraph',
      html: 'Esto tiene implicaciones profundas: tu cuerpo es un proceso, no una cosa. Eres un patrón autoorganizado que persiste a través del cambio. No posees átomos; eres una estructura que los canaliza temporalmente.',
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

