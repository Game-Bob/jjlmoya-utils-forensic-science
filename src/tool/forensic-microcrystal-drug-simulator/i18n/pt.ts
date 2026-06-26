import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-teste-microcristalino-drogas';
const title = 'Simulador Forense de Teste Microcristalino de Drogas';
const description = 'Simule padrões educacionais de triagem microcristalina de drogas combinando substâncias controladas suspeitas com reagentes forenses clássicos e comparando o hábito cristalino, velocidade de crescimento e birrefringência.';

const howTo = [
  {
    name: 'Escolha uma amostra suspeita',
    text: 'Selecione cocaína, heroína, anfetamina ou metanfetamina para carregar um perfil didático do material desconhecido.',
  },
  {
    name: 'Aplique um reagente microcristalino',
    text: 'Alterne entre cloreto de platina, cloreto de ouro e reagente de Dragendorff para ver como a química do reagente altera a morfologia do cristal.',
  },
  {
    name: 'Ajuste a polarização simulada',
    text: 'Mova o controle de polarização para aumentar ou reduzir o contraste birrefringente no campo do microscópio virtual.',
  },
  {
    name: 'Compare o resultado com a referência',
    text: 'Use a etiqueta de hábito, pontuação de confiança, velocidade de crescimento e nota de interpretação para decidir se o padrão é semelhante à referência, parcial ou não específico.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Os testes microcristalinos são confirmatórios para drogas ilegais?',
    answer: 'Não. Os testes microcristalinos são ferramentas de triagem presuntiva ou comparativa. A identificação real de drogas apreendidas deve seguir esquemas validados que incluam controles apropriados e métodos instrumentais confirmatórios, como GC-MS, LC-MS ou espectroscopia de infravermelho.',
  },
  {
    key: 'faq-2',
    question: 'Por que reagentes diferentes produzem formas de cristal diferentes?',
    answer: 'O reagente forma sais, complexos ou precipitados com grupos funcionais no composto alvo. A solubilidade, força ácida, concentração, impurezas e taxa de secagem influenciam se o hábito observado aparece como agulhas, rosetas, prismas, placas ou dispersão fraca.',
  },
  {
    key: 'faq-3',
    question: 'O que a luz polarizada adiciona ao exame microcristalino?',
    answer: 'A luz polarizada pode aumentar o contraste e revelar a birrefringência, facilitando a comparação de bordas, ramificações e estrutura interna do cristal. Não elimina a necessidade de padrões de referência e controles.',
  },
  {
    key: 'faq-4',
    question: 'Por que um padrão com aparência positiva ainda pode ser enganoso?',
    answer: 'Agentes de corte, misturas, material degradado, idade do reagente, contaminação e expectativa do analista podem produzir morfologias ambíguas ou sobrepostas. É por isso que os resultados presuntivos devem ser interpretados com cautela.',
  },
  {
    key: 'faq-5',
    question: 'Este simulador pode identificar uma substância desconhecida?',
    answer: 'Não. É uma visualização educacional de conceitos comuns de morfologia. Não pode testar evidências reais, medir propriedades químicas ou emitir uma conclusão laboratorial.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    microscope: 'Microscópio polarizado',
    canvasAria: 'Campo de crescimento microcristalino animado',
    sample: 'Amostra suspeita',
    sampleCocaine: 'Cocaína',
    sampleHeroin: 'Heroína',
    sampleAmphetamine: 'Anfetamina',
    sampleMethamphetamine: 'Metanfetamina',
    reagent: 'Prateleira de reagentes',
    reagentPlatinum: 'Cloreto de platina',
    reagentGold: 'Cloreto de ouro',
    reagentDragendorff: 'Dragendorff',
    polarization: 'Contraste polarizado',
    confidence: 'Coincidência',
    growth: 'Crescimento',
    birefringence: 'Birrefr.',
    regrow: 'Regenerar cristais',
    warningLabel: 'Precaução forense',
    warningTitle: 'Aviso de triagem',
    matchReference: 'Tipo referência',
    matchPartial: 'Coincidência parcial',
    matchNonSpecific: 'Não específico',
    habitFeatheryNeedles: 'Feixes de agulhas plumosas',
    habitRosettes: 'Rosetas em estrela',
    habitBranchingPrisms: 'Prismas ramificados',
    habitPlates: 'Placas finas',
    habitWeakScatter: 'Dispersão escassa não específica',
    cueCocainePlatinumChloride: 'Feixes de agulhas plumosas e ramificadas são o padrão didático esperado para a cocaína com cloreto de platina.',
    cueCocaineGoldChloride: 'O cloreto de ouro pode formar cristais ramificados laranja-escuro, mas o padrão é menos específico do que com cloreto de platina.',
    cueCocaineDragendorff: 'O reagente de Dragendorff dá uma resposta alcaloide fraca aqui; a morfologia deve ser tratada apenas como informação de triagem.',
    cueHeroinPlatinumChloride: 'Depósitos semelhantes a placas podem aparecer, mas esta combinação não é um forte par didático confirmatório.',
    cueHeroinGoldChloride: 'Grupos de rosetas e estrelas arredondadas são o padrão de heroína tipo referência neste simulador.',
    cueHeroinDragendorff: 'O reagente de Dragendorff produz prismas ramificados laranja consistentes com uma triagem de alcaloides, não uma prova de identidade.',
    cueAmphetaminePlatinumChloride: 'Prismas de ramificação rápida sugerem um padrão didático do tipo estimulante sob o reagente escolhido.',
    cueAmphetamineGoldChloride: 'Cristalização escassa significa que o achado visual deve ser relatado como não específico.',
    cueAmphetamineDragendorff: 'Sprays de agulhas crescem rapidamente e são úteis para ensinar comparações presuntivas de anfetamina.',
    cueMethamphetaminePlatinumChloride: 'Rosetas polarizadas podem se formar, mas o resultado continua sendo uma comparação de morfologia presuntiva.',
    cueMethamphetamineGoldChloride: 'Formas de placas finas são visíveis, embora a sobreposição com outros compostos limite a especificidade.',
    cueMethamphetamineDragendorff: 'Prismas ramificados laranja densos fornecem a correspondência didática mais forte para a metanfetamina neste conjunto.',
    disclaimer: 'Modelo de triagem didático apenas. A identificação real de drogas requer padrões de referência validados, controles de reagentes, cadeia de custódia e análises instrumentais confirmatórias.',
  },
  seo: [
    {
      type: 'title',
      text: 'Testes Microcristalinos de Drogas na Ciência Forense',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulador didático',
      title: 'Para que serve este simulador microcristalino',
      html: 'Esta ferramenta explica como os testes microcristalinos forenses clássicos podem produzir hábitos cristalinos reconhecíveis após a mistura de uma droga suspeita com um reagente. Ajuda os alunos a comparar a <strong>morfologia do cristal</strong>, velocidade de crescimento e contraste sob luz polarizada sem tratar o resultado do navegador como prova.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'perfis de amostras didáticas', icon: 'mdi:flask-outline' },
        { value: '3', label: 'opções de reagentes tradicionais', icon: 'mdi:bottle-tonic-outline' },
        { value: '5', label: 'hábitos cristalinos modelados', icon: 'mdi:shape-outline' },
        { value: '0', label: 'declarações de identificação legal', icon: 'mdi:scale-balance' },
      ],
    },
    {
      type: 'title',
      text: 'Como Interpretar o Hábito Cristalino',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista de verificação prática para comparação',
      items: [
        'Comece com um padrão de referência conhecido e um controle de reagente em branco antes de comparar uma amostra desconhecida.',
        'Registre o reagente, concentração, tamanho da gota, tempo de secagem, temperatura e ampliação do microscópio.',
        'Compare primeiro o hábito geral: agulhas, rosetas, placas, prismas, ramificações ou dispersão fraca.',
        'Trate o crescimento parcial ou escasso como motivo para testes adicionais, não como uma identificação confiável.',
      ],
    },
    {
      type: 'table',
      headers: ['Hábito observado', 'Perguntas frequentes dos usuários', 'Interpretação cautelosa'],
      rows: [
        ['Agulhas plumosas', 'Isso se parece com cocaína com cloreto de platina?', 'Pode ser uma correspondência didática útil, mas misturas e condições do reagente podem alterar o hábito.'],
        ['Rosetas', 'As rosetas em estrela são diagnósticas?', 'As rosetas podem apoiar uma comparação quando os controles coincidem, mas não são suficientes isoladamente.'],
        ['Prismas ramificados', 'Por que as triagens de estimulantes costumam crescer rápido?', 'Alguns sais nucleiam rapidamente e se ramificam à medida que o solvente evapora; a velocidade é um indicativo de apoio, não confirmatório.'],
        ['Dispersão fraca', 'Um padrão fraco significa que nenhuma droga está presente?', 'Não. Baixa concentração, impurezas, reagente envelhecido ou má preparação podem suprimir o crescimento do cristal.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'A triagem microcristalina ajuda com',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Comparação visual rápida quando um analista treinado usa controles e materiais de referência.',
          points: ['Demonstrações em sala de aula', 'Vocabulário de morfologia', 'Triagem presuntiva', 'Comparação do efeito de reagentes'],
        },
        {
          title: 'A triagem microcristalina não substitui',
          icon: 'mdi:alert-circle-outline',
          description: 'Química confirmatória validada para uma conclusão real de droga apreendida.',
          points: ['Confirmação instrumental', 'Procedimentos acreditados', 'Validação específica da matriz', 'Documentação de incerteza'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Contexto Científico sobre Testes Microcristalinos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os testes microcristalinos representam uma classe histórica e altamente sensível de testes de triagem química usados por químicos forenses para identificar substâncias controladas suspeitas. Quando uma pequena quantidade de uma amostra de droga é dissolvida em ácido e combinada com um reagente de metal pesado específico, como cloreto de ouro ou cloreto de platina, precipita um complexo de coordenação ou sal insolúvel. A estrutura molecular da droga dita a taxa de crescimento, orientação e simetria dos cristais resultantes, produzindo formas ou hábitos microscópicos característicos.',
    },
    {
      type: 'paragraph',
      html: 'A análise desses hábitos sob um microscópio de luz polarizada permite que os peritos forenses observem propriedades ópticas como a birrefringência, em que o cristal divide a luz em dois raios, criando cores vivas e alto contraste. Embora os métodos instrumentais, como a cromatografia gasosa com espectrometria de massa, tenham amplamente substituído os testes microcristalinos para identificação confirmatória, a triagem microcristalina continua sendo uma técnica valorizada devido à sua rapidez, baixo custo e capacidade de separar isômeros ópticos que podem ser difíceis de diferenciar por outros meios.',
    },
    {
      type: 'paragraph',
      html: 'Em ambientes educacionais, a simulação dessas reações ajuda os alunos a entender a relação entre os reagentes químicos e a morfologia física do cristal. Ao observar como a cocaína, a heroína e várias anfetaminas respondem a reagentes diferentes, os alunos aprendem que um único teste positivo não é uma conclusão forense final. Protocolos de triagem de drogas adequados exigem a comparação de amostras desconhecidas com materiais de referência conhecidos e a realização de testes em branco com reagentes para garantir a validade e especificidade dos padrões de cristal observados.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Hábito cristalino', definition: 'A forma visível ou modo de crescimento de um cristal, como agulhas, placas, prismas ou rosetas.' },
        { term: 'Nucleação', definition: 'A formação inicial de minúsculos centros cristalinos dos quais crescem estruturas maiores.' },
        { term: 'Birrefringência', definition: 'Comportamento óptico que pode fazer os cristais parecerem mais brilhantes ou coloridos sob luz polarizada.' },
        { term: 'Teste presuntivo', definition: 'Um teste de triagem que sugere uma possível classe ou composto, mas não prova a identidade por si só.' },
        { term: 'Padrão de referência', definition: 'Um material conhecido testado sob as mesmas condições para comparar o padrão desconhecido.' },
      ],
    },
    {
      type: 'tip',
      title: 'Melhor prática para evidências reais',
      html: 'Use a morfologia microcristalina como uma linha de investigação. Um fluxo de trabalho confiável inclui brancos de reagente, controles positivos, documentação da idade do reagente, revisão independente quando necessário e testes confirmatórios sob um esquema aceito de drogas apreendidas.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:alert-outline',
      badge: 'Precaução forense',
      title: 'Um cristal bonito não é uma identificação legal',
      html: 'O simulador separa deliberadamente a pontuação de correspondência visual de uma conclusão forense. O trabalho de caso real deve levar em conta misturas, agentes de corte, contaminação, desempenho do reagente, treinamento do analista e procedimentos laboratoriais validados.',
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
