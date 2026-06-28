import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "ciencia-forense",
  title: "Ferramentas de ciência forense",
  description: "Utilitários forenses para triagem estruturada de casos, cálculos transparentes e relatórios conscientes das evidências.",
  seo: [
    {
      type: 'title',
      text: "Ferramentas de ciência forense para análise de evidências e triagem de casos",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Esta biblioteca fornece ferramentas especializadas e cálculos para analistas forenses, profissionais do direito, pesquisadores e investigadores. Os utilitários de ciência forense ajudam a avaliar as evidências físicas coletadas nas cenas de crime. Ao usar modelos estruturados para trajetória de manchas de sangue, estimativa de idade, índice de refração de vidro e análise de drogas, as equipes podem realizar uma triagem inicial do caso. Cada utilitário concentra-se na transparência, mostrando premissas e ajudando os usuários a compreender claramente os limites de cada fórmula forense.",
    },
    {
      type: 'paragraph',
      html: "A revisão inicial de um caso exige avaliar quais evidências estão disponíveis, o que as fórmulas científicas assumem e onde permanece a incerteza. Essas calculadoras são projetadas para apoiar a educação e a triagem preliminar. Elas auxiliam na determinação de quais etapas analíticas são necessárias antes de se comprometer com testes laboratoriais formais. O uso dessas ferramentas ajuda a identificar lacunas nos arquivos de evidências logo no início do processo de investigação.",
    },
    {
      type: 'title',
      text: "Áreas-chave dos cálculos forenses",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Estimativa de idade:</strong> cálculos esqueléticos, odontológicos e de maturidade com métricas de incerteza explícitas.',
        '<strong>Interpretação de evidências:</strong> estimadores estruturados que exibem fórmulas, intervalos de confiança e limites.',
        '<strong>Triagem de casos:</strong> ferramentas rápidas que destacam evidências ausentes e identificam parâmetros necessários para o exame formal.',
        '<strong>Suporte na elaboração de relatórios:</strong> utilitários que incentivam relatórios claros usando faixas de valores em vez de falsa precisão.',
      ],
    },
    {
      type: 'title',
      text: "Diretrizes para o uso responsável de software forense",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Cada cálculo forense envolve taxas de erro e limites de confiança. Uma calculadora nunca deve substituir uma testemunha pericial qualificada ou um protocolo laboratorial validado. Em vez disso, esses utilitários web são mais bem usados para explorar cenários, explicar conceitos para não especialistas e verificar a sensibilidade das medições antes de redigir os relatórios finais. Isso ajuda a evitar mal-entendidos no tribunal em relação à precisão científica.",
    },
    {
      type: 'table',
      headers: ['Uso adequado', 'Uso inadequado', 'Importância'],
      rows: [
        ["Triagem de arquivos de caso antes de um exame formal por especialista.", "Usar o resultado de uma calculadora como parecer pericial final.", "As evidências forenses devem atender a padrões rigorosos de validação científica."],
        ["Explicar a incerteza de medição e faixas de valores para os investigadores.", "Relatar um único número exato sem explicar as limitações.", "A falsa precisão pode levar a decisões incorretas nos sistemas judiciais."],
        ["Verificar como as premissas de entrada afetam o resultado estimado.", "Ocultar parâmetros iniciais ou cálculos do registro do caso.", "A transparência permite que os resultados sejam auditados e reproduzidos por outros."],
        ["Determinar se a qualidade dos dados é suficiente para o cálculo.", "Executar fórmulas com medições de escala deficientes ou incompletas.", "Parâmetros de entrada fracos tornam qualquer reconstrução matemática não confiável."],
      ],
    },
  ],
};
