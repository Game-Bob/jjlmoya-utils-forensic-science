import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-albedo-global-tierra-bola-nieve';
const title = 'Simulador Global de Albedo y Tierra Bola de Nieve';
const description = 'Explore el balance de radiación térmica de la Tierra, los cambios en la constante solar, la concentración de gases de efecto invernadero y la retroalimentación hielo-albedo para ver si las capas de hielo retroceden, se estabilizan o desencadenan un clima de bola de nieve.';

const howTo = [
  {
    name: 'Ajustar la luz solar entrante',
    text: 'Mueva el control deslizante de la constante solar para probar escenarios de Sol joven más débil, luz solar terrestre actual o forzamiento futuro más brillante.',
  },
  {
    name: 'Ajustar la concentración de gases de efecto invernadero',
    text: 'Cambie la concentración de gases de efecto invernadero para ver cómo el forzamiento radiativo compite con un albedo planetario más alto.',
  },
  {
    name: 'Sembrar el planeta con hielo',
    text: 'Comience con un pequeño casquete polar o un mundo muy cubierto de hielo. El modelo itera el bucle de retroalimentación y muestra si el hielo avanza o retrocede.',
  },
  {
    name: 'Leer el estado climático',
    text: 'Utilice la temperatura, la radiación absorbida, la cobertura de hielo final y la curva de la línea de tiempo para comparar resultados templados, de bola de nieve e invernadero.',
  },
];

const faq = [
  {
    question: '¿Qué es la retroalimentación hielo-albedo?',
    answer: 'El hielo y la nieve reflejan más luz solar que el océano o la tierra. Cuando el hielo se expande, el albedo planetario aumenta, la energía solar absorbida disminuye y el enfriamiento puede permitir que se forme aún más hielo. Cuando el hielo retrocede, la superficie más oscura absorbe más energía y el calentamiento se acelera.',
  },
  {
    question: '¿Qué significa Tierra Bola de Nieve?',
    answer: 'Tierra Bola de Nieve es un estado climático hipotético en el que el hielo alcanza latitudes bajas o una cobertura casi global. La evidencia geológica sugiere que la Tierra pudo haber alcanzado tales estados durante la era Neoproterozoica.',
  },
  {
    question: '¿Es esto un modelo climático completo?',
    answer: 'No. Es un modelo compacto de balance energético para aprender. Ignora la circulación atmosférica, las nubes, el transporte de calor oceánico, las estaciones, la geografía y las retroalimentaciones del ciclo del carbono, pero captura la lógica radiativa fundamental de la retroalimentación del albedo.',
  },
  {
    question: '¿Por qué los gases de efecto invernadero pueden romper un estado de bola de nieve?',
    answer: 'Los gases de efecto invernadero reducen el enfriamiento de onda larga saliente al añadir forzamiento radiativo. En escenarios de Tierra Bola de Nieve, el dióxido de carbono volcánico puede acumularse cuando la meteorización de silicatos se ralentiza, calentando eventualmente el planeta lo suficiente como para derretir el hielo de latitudes bajas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Controles climáticos',
    solarConstant: 'Constante solar',
    greenhouse: 'Gases de efecto invernadero',
    initialIce: 'Cobertura de hielo inicial',
    temperature: 'Temperatura de equilibrio',
    absorbed: 'Luz solar absorbida',
    finalIce: 'Cobertura de hielo final',
    albedo: 'Albedo planetario',
    forcing: 'Forzamiento invernadero',
    state: 'Estado climático',
    timeline: 'Evolución del hielo',
    years: 'años del modelo',
    snowball: 'Bloqueo de bola de nieve',
    temperate: 'Equilibrio templado',
    hothouse: 'Retroceso invernadero',
    retreating: 'Hielo en retroceso',
    advancing: 'Hielo avanzando',
    stable: 'Cerca del equilibrio',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Diagnóstico de radiación',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador global de albedo para retroalimentación hielo-albedo y Tierra Bola de Nieve',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador explora uno de los bucles de retroalimentación más importantes en el clima planetario: el vínculo entre la cobertura de hielo, la reflectividad y la luz solar absorbida. Un planeta con hielo brillante refleja más radiación solar entrante de vuelta al espacio. Ese enfriamiento puede preservar o expandir el hielo, elevando aún más el albedo y empujando el sistema hacia un estado de Tierra Bola de Nieve. Un planeta con menos hielo absorbe más luz solar, lo que puede acelerar la desglaciación.',
    },
    {
      type: 'paragraph',
      html: 'Use los controles deslizantes para cambiar la constante solar, la concentración de gases de efecto invernadero y la cobertura de hielo inicial. El modelo luego itera un balance energético global simple y muestra si el clima se mueve hacia una glaciación extensa, un equilibrio templado o un estado caliente con poco hielo. Está diseñado para una intuición rápida: cada control se asigna directamente a un término físico en el presupuesto de radiación.',
    },
    {
      type: 'title',
      text: 'Cómo se estima el balance energético',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La radiación de onda corta absorbida se estima como S(1 - a) / 4, donde S es la constante solar y a es el albedo planetario. La división por cuatro convierte la luz solar interceptada por el disco de la Tierra en un promedio sobre toda la superficie esférica. Un albedo más alto reduce la energía absorbida; una concentración de gases de efecto invernadero más alta añade un forzamiento radiativo positivo que eleva la estimación de la temperatura superficial.',
    },
    {
      type: 'table',
      headers: ['Control', 'Significado físico', 'Efecto climático'],
      rows: [
        ['Constante solar', 'Energía estelar entrante en la órbita terrestre', 'Valores más altos calientan el planeta y reducen el hielo.'],
        ['Gases de efecto invernadero', 'Forzamiento radiativo de onda larga relativo a una atmósfera de referencia', 'Valores más altos dificultan el bloqueo de bola de nieve.'],
        ['Cobertura de hielo inicial', 'Reflectividad inicial del planeta', 'Valores altos pueden desencadenar un enfriamiento descontrolado a través de la retroalimentación del albedo.'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué la retroalimentación del albedo puede volverse no lineal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El bucle hielo-albedo no es un ajuste suave unidireccional. Una vez que el hielo alcanza suficiente superficie del planeta, la superficie más brillante puede eliminar tanta luz solar absorbida que el derretimiento estival se vuelve débil. En la dirección opuesta, el hielo en retroceso expone océano y tierra más oscuros, aumentando la absorción y alejando al planeta de la glaciación. Es por eso que forzamientos similares pueden producir resultados diferentes dependiendo de la cobertura de hielo inicial.',
    },
    {
      type: 'paragraph',
      html: 'La Tierra real añade muchas complicaciones: nubes, polvo sobre el hielo, transporte de calor oceánico, posiciones continentales, luz solar estacional, dinámica del hielo marino y el ciclo del carbono. Un modelo simple aún tiene valor porque aísla el presupuesto de radiación de primer orden. Le permite ver por qué las hipótesis de Tierra Bola de Nieve dependen tanto de la luz solar débil o desencadenantes de albedo alto como de la acumulación posterior de gases de efecto invernadero para escapar.',
    },
    {
      type: 'title',
      text: 'Interpretación del simulador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bloqueo de bola de nieve:</strong> la cobertura de hielo final es muy alta y la temperatura de equilibrio permanece muy por debajo del punto de congelación.',
        '<strong>Equilibrio templado:</strong> el modelo se estabiliza con cobertura de hielo parcial y radiación absorbida moderada.',
        '<strong>Retroceso invernadero:</strong> el hielo colapsa a una fracción muy pequeña mientras el forzamiento invernadero y la luz solar absorbida permanecen altos.',
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
