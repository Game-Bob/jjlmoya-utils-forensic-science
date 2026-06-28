import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ciencia-forense",
  title: "Herramientas de ciencia forense",
  description: "Utilidades forenses para el triaje estructurado de casos, cálculos transparentes e informes conscientes de la evidencia.",
  seo: [
    {
      type: 'title',
      text: "Herramientas de ciencia forense para análisis de evidencia y triaje de casos",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Esta biblioteca proporciona herramientas especializadas y cálculos para analistas forenses, profesionales legales, investigadores y estudiantes. Las utilidades de ciencia forense ayudan a evaluar la evidencia física recopilada en la escena del crimen. Mediante el uso de modelos estructurados para la trayectoria de manchas de sangre, la estimación de la edad, el índice de refracción del vidrio y el análisis de drogas, los equipos pueden realizar un triaje inicial del caso. Cada utilidad se centra en la transparencia, mostrando los supuestos y ayudando a los usuarios a comprender los límites de cada fórmula forense.",
    },
    {
      type: 'paragraph',
      html: "La revisión temprana de un caso requiere evaluar qué evidencia está disponible, qué asumen las fórmulas científicas y dónde permanece la incertidumbre. Estas calculadoras están diseñadas para apoyar la educación y la evaluación preliminar. Ayudan a determinar qué pasos analíticos son necesarios antes de comprometerse con pruebas de laboratorio formales. El uso de estas herramientas ayuda a identificar brechas en los archivos de evidencia al principio de la investigación.",
    },
    {
      type: 'title',
      text: "Áreas clave de los cálculos forenses",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Estimación de la edad:</strong> cálculos esqueléticos, dentales y de madurez con métricas de incertidumbre explícitas.',
        '<strong>Interpretación de la evidencia:</strong> estimadores estructurados que muestran fórmulas, intervalos de confianza y límites.',
        '<strong>Triaje de casos:</strong> herramientas rápidas que destacan la evidencia faltante e identifican los parámetros necesarios para el examen formal.',
        '<strong>Soporte para informes:</strong> utilidades que fomentan informes claros utilizando rangos en lugar de una falsa precisión.',
      ],
    },
    {
      type: 'title',
      text: "Pautas para el uso responsable del software forense",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Cada cálculo forense implica tasas de error y límites de confianza. Una calculadora nunca debe reemplazar a un perito cualificado o un protocolo de laboratorio validado. En su lugar, estas utilidades web se utilizan mejor para explorar escenarios, explicar conceptos a no especialistas y comprobar la sensibilidad de las mediciones antes de redactar los informes finales. Esto ayuda a evitar malentendidos en los tribunales con respecto a la precisión científica.",
    },
    {
      type: 'table',
      headers: ['Uso adecuado', 'Uso inadecuado', 'Importancia'],
      rows: [
        ["Examinar expedientes de casos antes del examen formal de un especialista.", "Utilizar el resultado de una calculadora como una opinión pericial final.", "La evidencia forense debe cumplir con estrictos estándares de validación científica."],
        ["Explicar la incertidumbre de la medición y los rangos a los investigadores.", "Informar un único número exacto sin explicar las limitaciones.", "La falsa precisión puede conducir a decisiones incorrectas en los sistemas judiciales."],
        ["Comprobar cómo influyen los supuestos de entrada en el resultado estimado.", "Ocultar parámetros iniciales o cálculos del registro del caso.", "La transparencia permite que los resultados sean auditados y reproducidos por otros."],
        ["Determinar si la calidad de los datos es suficiente para el cálculo.", "Ejecutar fórmulas con mediciones de escala deficientes o incompletas.", "Los parámetros de entrada débiles hacen que cualquier reconstrucción matemática no sea confiable."],
      ],
    },
  ],
};
