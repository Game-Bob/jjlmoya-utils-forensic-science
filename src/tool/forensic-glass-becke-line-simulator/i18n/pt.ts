import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'simulador-linha-becke-indice-refracao-vidro';
const title = 'Simulador da linha de Becke e do índice de refração do vidro forense';
const description = 'Simule o método da linha de Becke para a comparação forense de vidros aquecendo um líquido de imersão, igualando os índices de refração e observando o halo brilhante desaparecer.';

const howTo = [
  {
    name: 'Selecionar um perfil de vidro dubitado',
    text: 'Escolha um perfil de referência de vidro comum, como vidro de silicato sodocalcico, borossilicato, cristal de chumbo ou vidro temperado para janelas.',
  },
  {
    name: 'Ajustar a temperatura da platina aquecedora',
    text: 'Mova o controle deslizante de temperatura para alterar o índice de refração do líquido de imersão virtual.',
  },
  {
    name: 'Observar o movimento de la linha de Becke',
    text: 'Use o controle de direção do foco para ver se a linha brilhante se move para dentro, para fora ou se quase desaparece no ponto de correspondência.',
  },
  {
    name: 'Ler a diferença de índice',
    text: 'Compare o IR do líquido, o IR do vidro, o delta de IR e a porcentagem de correspondência para entender por que o halo fica fraco perto da correspondência de índices.',
  },
];

const faq = [
  {
    question: 'O que é a linha de Becke na análise forense de vidros?',
    answer: 'A linha de Becke é um halo brilhante visto perto do limite entre um fragmento de vidro e um líquido de imersão quando os seus índices de refração diferem. O seu movimento durante a focagem ajuda a determinar qual material tem o índice de refração mais elevado.',
  },
  {
    question: 'Por que aquecer o líquido de imersão é importante?',
    answer: 'O índice de refração de muitos líquidos de imersão diminui à medida que a temperatura aumenta. Ao aquecer o líquido até que seu índice corresponda ao do vidro, o contraste no limite desaparece e a borda do fragmento torna-se difícil de ver.',
  },
  {
    question: 'O índice de refração pode identificar uma fonte de vidro por si só?',
    answer: 'Não. O IR pode apoiar a comparação de classe e a exclusão, mas a interpretação forense da fonte também considera a composição elementar, espessura, cor, contexto de fratura, controles, incerteza e procedimentos laboratoriais validados.',
  },
  {
    question: 'O que significa quando a linha de Becke desaparece?',
    answer: 'Significa que o líquido e o vidro têm índices de refração muito semelhantes sob aquelas condições simuladas. Na microscopia real, o desaparecimento é avaliado com um controle de temperatura calibrado e materiais de referência.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Visualização do microscópio virtual mostrando um fragmento de vidro em líquido de imersão',
    units: 'Sistema de unidades de temperatura',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Vidro de referência',
    sodaLime: 'Vidrio de embalagem sodocalcico',
    borosilicate: 'Vidro de laboratório borossilicato',
    leadCrystal: 'Cristal de chumbo decorativo',
    tempered: 'Vidro temperado para janelas',
    stageTemperature: 'Temperatura da platina',
    focusDirection: 'Direção do foco',
    focusRaised: 'Subir foco',
    focusLowered: 'Baixar foco',
    liquidRi: 'IR do líquido',
    glassRi: 'IR do vidro',
    deltaRi: 'Delta de IR',
    matchMeter: 'Correspondência de IR',
    canvasHalo: 'halo de Becke visível',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'borda quase correspondente',
    interpMatched: 'O limite está próximo da correspondência óptica. Em um teste real da linha de Becke, esta é a região onde o halo fica fraco e a borda do fragmento é mais difícil de localizar.',
    interpGlassHigher: 'O vidro tem o índice de refração mais elevado. Com o foco elevado, o comportamento da linha de Becke indica que a luz se concentra em direção ao lado do vidro no limite.',
    interpLiquidHigher: 'O líquido de imersão tem o índice de refração mais elevado. O halo desloca-se em direção ao lado do líquido até que a temperatura aproxime o índice do líquido ao do vidro.',
    disclaimer: 'Apenas simulação educacional. A comparação forense real de vidros requer equipamento calibrado de índice de refração, padrões conhecidos, relatórios de incerteza e interpretação qualificada.',
  },
  seo: [
    {
      type: 'title',
      text: 'Teste de índice de refração pela linha de Becke para vidro forense',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulador didático',
      title: 'O que este simulador de IR de vidro demonstra',
      html: 'Este simulador mostra por que um fragmento de vidro se torna mais ou menos visível em óleo de imersão à medida que o índice de refração do líquido se aproxima do índice de refração do vidro. É construído para estudantes de ciência forense que aprendem <strong>microscopia da linha de Becke</strong>, correspondência de IR em platina aquecedora e os limites das evidências de comparação de vidro.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n vidro - n líquido', label: 'contraste de índice mostrado', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'faixa da platina aquecedora', icon: 'mdi:thermometer' },
        { value: '4', label: 'perfis de vidro', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'unidades de temperatura conversíveis', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificação prática para observação da linha de Becke',
      items: [
        'Use um fragmento de vidro pequeno e limpo totalmente imerso em um líquido de índice de refração adequado.',
        'Foque ligeiramente acima e abaixo do limite e observe para qual lado a linha brilhante parece se mover.',
        'Aumente a temperatura lentamente perto do ponto de correspondência estimado porque a linha pode desaparecer em uma faixa estreita.',
        'Registre a temperatura, o tipo de líquido, o padrão de calibração, o comportamento de correspondência observado e a incerteza.',
        'Trate o IR como evidência de classe: uma divergência pode excluir, enquanto uma correspondência requer contexto adicional.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'O que a comparação de IR pode apoiar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'O índice de refração pode ajudar a comparar fragmentos de vidro dubitados com vidros de referência conhecidos sob condições controladas.',
          points: ['Comparação de características de classe', 'Exclusão quando o IR difere claramente', 'Triagem antes da análise elementar', 'Ensino do comportamento óptico do limite'],
        },
        {
          title: 'O que o IR não pode provar sozinho',
          icon: 'mdi:alert-circle-outline',
          description: 'Um IR correspondente não identifica de forma única uma vidraça, garrafa, janela de veículo ou fonte de cena de crime.',
          points: ['Nenhuma atribuição de fonte individual por si só', 'Nenhuma reconstrução sem o contexto da cena', 'Não substitui os controles', 'Nenhuma conclusão legal a partir de um modelo de navegador'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pergunta do usuário', 'Conceito de microscopia', 'Resposta detalhada'],
      rows: [
        ['Por que a borda brilhante se move?', 'Refração em um limite entre dois índices de refração.', 'A linha de Becke tende a se mover em direção ao material com maior índice de refração quando o foco é elevado.'],
        ['Por que a borda desaparece?', 'Correspondência de índice.', 'Quando o IR do vidro e do líquido são quase iguais, o contraste do limite diminui e o halo torna-se fraco.'],
        ['Por que aquecer o líquido?', 'Coeficiente térmico do IR.', 'O IR do líquido simulado diminui com a temperatura, permitindo uma correspondência com diferentes tipos de vidro.'],
        ['A correspondência é conclusiva?', 'Limitação da evidência de classe.', 'Uma correspondência apenas apoia a consistência; muitos objetos de vidro podem compartilhar um IR semelhante.'],
      ],
    },
    {
      type: 'title',
      text: 'Como funciona o modelo de simulação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O modelo atribui a cada perfil de vidro um índice de refração de referência e trata o líquido de imersão como um meio sensível à temperatura. À medida que a platina aquece, o índice do líquido diminui por um coeficiente térmico fixo. O simulador calcula então a diferença entre o IR do vidro e o IR do líquido, usando essa diferença para controlar o brilho do halo, o deslocamento do halo, a porcentagem de correspondência e a mensagem de interpretação.',
    },
    {
      type: 'paragraph',
      html: 'O campo visual do microscópio é intencionalmente qualitativo. Não tenta traçar os raios de cada caminho óptico. Em vez disso, preserva a relação educacional essencial: o contraste forte de IR produz um limite brilhante; o contraste mais baixo produz um limite fraco; e perto do ponto de correspondência, a borda do vidro pode parecer desaparecer no líquido.',
    },
    {
      type: 'paragraph',
      html: 'Em laboratórios forenses profissionais, a calibração da platina aquecedora é realizada usando amostras de vidro de referência com índice de refração conhecido. Como o índice de refração do líquido de imersão varia de forma previsível com a temperatura (geralmente denotado como dn/dT), a temperatura exata em que a linha de Becke desaparece permite ao cientista calcular o índice de refração do vidro com precisão de até quatro casas decimais. Este simulador modela esse comportamento dependente da temperatura usando uma fórmula linear, permitindo que os estudantes pratiquem a busca pelo ponto de correspondência exato controlando cuidadosamente a platina aquecedora.',
    },
    {
      type: 'paragraph',
      html: 'Ao analisar evidências de vidro, o índice de refração é considerado uma evidência de característica de classe. Embora um índice de refração coincidente entre um fragmento da cena do crime e as roupas de um suspeito seja consistente com uma fonte comum, ele não identifica a fonte de forma única porque muitos objetos de vidro compartilham valores idênticos de índice de refração. Portanto, os especialistas forenses devem interpretar resultados coincidentes de forma conservadora, relatando a correspondência em termos de consistência, ao mesmo tempo em que destacam que uma atribuição definitiva de fonte não é possível com base apenas nas propriedades ópticas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Índice de refração', definition: 'Medida de quão fortemente um material desvia a luz em comparação com o vácuo.' },
        { term: 'Líquido de imersão', definition: 'Líquido com propriedades ópticas conhecidas usado para rodear um fragmento durante a comparação microscópica de IR.' },
        { term: 'Linha de Becke', definition: 'A linha brilhante ou halo visto em um limite quando dois materiais transparentes têm índices de refração diferentes.' },
        { term: 'Punto de correspondência', definition: 'A região de temperatura onde o líquido de imersão e o vidro têm quase o mesmo índice de refração.' },
        { term: 'Evidência de classe', definition: 'Evidência que pode associar um item a um grupo de fontes possíveis em vez de uma única fonte exclusiva.' },
      ],
    },
    {
      type: 'tip',
      title: 'Dica de interpretação para estudantes',
      html: 'Na evidência de vidros, uma divergência clara de IR é frequentemente mais poderosa do que uma correspondência porque pode excluir uma fonte proposta. Uma correspondência é útil, mas a sua força depende de dados populacionais, precisão de medição, composição elementar e o contexto do caso.',
    },
    {
      type: 'proscons',
      title: 'Pontos fortes e limites do teste de IR de vidro por linha de Becke',
      items: [
        { pro: 'Rápido, visual e excelente para ensinar comparação de materiais transparentes.', con: 'O julgamento do observador e a técnica de foco podem afetar o movimento aparente da linha.' },
        { pro: 'A correspondência de temperatura pode estimar o IR com precisão útil se calibrada.', con: 'Controle térmico, envelhecimento do líquido, contaminação e padrões são importantes no trabalho real.' },
        { pro: 'Útil para excluir fragmentos de vidro com propriedades ópticas claramente diferentes.', con: 'Não é possível individualizar uma fonte sem evidências analíticas e contextuais mais amplas.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaução forense',
      title: 'Manter a conclusão proporcional',
      html: 'Uma simulação da linha de Becke no navegador é um auxiliar de aprendizagem, não um método de trabalho. A interpretação formal das evidências de vidros deve basear-se em instrumentos validados, procedimentos escritos, registros de calibração, estimativas de incerteza, revisão por pares e linguagem de relatório adequada à jurisdição.',
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
      applicationCategory: 'ForensicApplication',
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
