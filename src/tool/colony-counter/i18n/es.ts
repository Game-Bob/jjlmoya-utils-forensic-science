const howTo = [
    {
      name: 'Preparar la imagen de la placa',
      text: 'Coloca tu placa de Petri sobre un fondo oscuro o utiliza un transiluminador para que las colonias contrasten claramente.',
    },
    {
      name: 'Identificar tipos de colonias',
      text: 'Utiliza diferentes colores de marca para agrupar colonias según su morfología, color o tamaño.',
    },
    {
      name: 'Marcar cada colonia',
      text: 'Haz clic sobre cada colonia visible. La herramienta numerará cada impacto automáticamente para no repetir ni olvidar ninguna.',
    },
    {
      name: 'Calcular concentración final',
      text: 'Introduce el volumen sembrado y el factor de dilución para obtener el resultado final en UFC/ml o UFC/g.',
    },
  ];
const faq = [
    {
      question: '¿Qué es el conteo de UFC?',
      answer: 'Las Unidades Formadoras de Colonias (UFC) es una unidad de medida que estima el número de bacterias o células fúngicas viables en una muestra. Se asume que cada colonia visible se originó a partir de una única célula o un grupo de ellas.',
    },
    {
      question: '¿Por qué es mejor un contador digital que uno manual?',
      answer: 'El conteo digital evita el error humano de "perder la cuenta" al marcar visualmente cada colonia. Nuestra herramienta permite además diferenciar tipos de colonias por colores, facilitando el análisis de placas mixtas.',
    },
    {
      question: '¿Cómo se calculan las UFC por mililitro?',
      answer: 'Se multiplica el número de colonias contadas por el factor de dilución invertido. Por ejemplo, si cuentas 30 colonias en una dilución 1:100, la muestra original tiene 3000 UFC/ml.',
    },
    {
      question: '¿Cuándo se considera una placa "uncountable"?',
      answer: 'En microbiología estándar, si hay más de 250-300 colonias, la placa se considera demasiado poblada (Too Numerous To Count, TNTC) y los datos no son fiables debido a la competencia entre colonias.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'contador-colonias';
const title = 'Contador de Colonias: Conteo Digital de UFC en Placas de Petri';
const description = 'Herramienta digital para contar colonias bacterianas en placas de Petri. Diferencia tipos, evita errores y calcula UFC con precisión.';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    uploadTitle: 'Haz clic para subir tu placa de Petri',
    uploadSubtitle: 'Sube una foto de tu placa y empieza a contar colonias',
    currentModeLabel: 'Modo Actual',
    typeA: 'Tipo A',
    typeB: 'Tipo B',
    colonyType: 'Tipo de Colonia',
    counting: 'Conteo',
    totalCFU: 'Total UFC',
    undo: 'Deshacer Último',
    clearAll: 'Limpiar Todo',
    infoClick: 'Haz clic en la placa para marcar colonias',
    infoChange: 'Cambia el tipo antes de marcar',
    confirmClear: '¿Seguro que quieres borrar todas las colonias marcadas?',
  },
  seo: [
    {
      type: 'title',
      text: 'Microbiología Digital: Conteo Preciso de Colonias',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El conteo de colonias bacterianas en placas de Petri es una técnica fundamental en microbiología. Tradicionalmente se realiza con un contador manual de mano y un marcador, pero es fácil perder la cuenta o marcar dos veces la misma colonia. Esta herramienta digital elimina esos errores y permite diferenciar visualmente entre tipos de colonias.',
    },
    {
      type: 'title',
      text: 'Por Qué Importa el Conteo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El número de colonias en una placa es directamente proporcional a la concentración de microorganismos viables en la muestra original. Este dato es crítico en:',
    },
    {
      type: 'list',
      items: [
        '<strong>Control de calidad alimentaria:</strong> Detectar contaminación bacteriana.',
        '<strong>Investigación farmacéutica:</strong> Evaluar eficacia de antibióticos.',
        '<strong>Diagnóstico clínico:</strong> Cuantificar infecciones en muestras de pacientes.',
        '<strong>Biotecnología:</strong> Optimizar cultivos de producción de proteínas recombinantes.',
      ],
    },
    {
      type: 'title',
      text: 'Unidades Formadoras de Colonias (UFC)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada colonia visible en la placa se asume que proviene de una única célula viable. Por eso se llaman <strong>UFC</strong> (Unidades Formadoras de Colonias) o <strong>CFU</strong> en inglés (Colony Forming Units).',
    },
    {
      type: 'paragraph',
      html: '<strong>Fórmula de Concentración:</strong><br><code>UFC/mL = (Colonias contadas × Factor de dilución) / Volumen sembrado</code>',
    },
    {
      type: 'title',
      text: 'Buenas Prácticas de Conteo',
      level: 3,
    },
    {
      type: 'title',
      text: 'Rango Contable',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'El rango ideal para conteo manual es de <strong>30 a 300 colonias</strong> por placa. Por debajo de 30, el error estadístico es demasiado alto. Por encima de 300, las colonias empiezan a fusionarse y es imposible distinguirlas individualmente.',
    },
    {
      type: 'title',
      text: 'Tipos de Colonias',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'En medios selectivos o diferenciales, es común ver múltiples morfologías de colonias:',
    },
    {
      type: 'list',
      items: [
        '<strong>Tipo A (Teal/Verde):</strong> Colonias grandes, mucoides, típicas de bacterias Gram negativas fermentadoras de lactosa.',
        '<strong>Tipo B (Rosa/Púrpura):</strong> Colonias pequeñas, translúcidas, no fermentadoras.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta permite diferenciar hasta dos tipos de colonias con colores distintos, facilitando el conteo diferencial sin necesidad de marcadores físicos.',
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

