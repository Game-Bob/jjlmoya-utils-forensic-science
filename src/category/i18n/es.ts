import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ciencia-forense",
  title: "Herramientas de ciencia forense",
  description: "Utilidades forenses para triaje estructurado de casos, calculos transparentes e informes conscientes de la evidencia.",
  seo: [
    {
      type: 'title',
      text: "Herramientas de ciencia forense para calculos conscientes de la evidencia y triaje de casos",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Esta categoria de herramientas de ciencia forense responde a una intencion de busqueda practica: interpretar evidencia, documentar supuestos y evitar falsa precision. No sustituye a expertos, laboratorios ni protocolos validados; aclara la revision temprana de un caso: que datos existen, que asume el calculo, que puede apoyar el resultado y que incertidumbre permanece.",
    },
    {
      type: 'paragraph',
      html: "El trabajo forense suele afectar decisiones de alto impacto, por eso cada utilidad debe mostrar sus limites. Una calculadora forense util muestra rangos en lugar de fingir certeza, separa cribado de informe formal y ayuda a detectar evidencia faltante antes de escribir una conclusion.",
    },
    {
      type: 'title',
      text: "Que pertenece a esta categoria de utilidades forenses",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Herramientas de evaluación de edad:</strong> indicadores dentales, esqueléticos y de madurez con incertidumbre explícita.',
        '<strong>Herramientas de interpretación de evidencia:</strong> calculadoras estructuradas que muestran supuestos, confianza y limitaciones.',
        '<strong>Herramientas de triaje de casos:</strong> flujos de trabajo rápidos que ayudan a decidir qué datos faltan antes del análisis formal.',
        '<strong>Soporte para informes:</strong> resultados que fomentan un lenguaje claro, rangos, advertencias y razonamiento rastreable.',
      ],
    },
    {
      type: 'title',
      text: "Como usar calculadoras forenses de forma responsable",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Usa estas herramientas como apoyo a decisiones y explicaciones, no como autoridad final para decisiones penales, civiles, medicas, migratorias, de proteccion o identificacion de victimas.",
    },
    {
      type: 'table',
      headers: ['Buen uso', 'Mal uso', 'Por qué es importante'],
      rows: [
        ["Examinar un expediente antes de la revisión especializada.", "Reemplazar la revisión de un especialista con el resultado de una calculadora.", "Las conclusiones forenses deben ser defendibles y metodológicamente válidas."],
        ["Explicar la incertidumbre a no especialistas.", "Informar una sola respuesta exacta sin advertencias.", "La falsa precisión puede inducir a error en decisiones legales o de protección."],
        ["Comparar cómo influyen los supuestos en un resultado.", "Ocultar supuestos del informe.", "Los supuestos transparentes hacen que el resultado sea más fácil de auditar."],
        ["Identificar la evidencia faltante.", "Ignorar la mala calidad de los datos.", "Los datos de entrada débiles pueden hacer que incluso una fórmula correcta no sea confiable."],
      ],
    },
  ],
};
