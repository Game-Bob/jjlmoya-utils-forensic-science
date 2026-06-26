import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-forense-cromatografia-camada-delgada-tlc-tintas';
const title = 'Simulador Forense de Cromatografia em Camada Delgada (TLC) de Tintas';
const description = 'Simule a cromatografia em camada delgada de tintas de escrita questionadas, visualize o desenvolvimento da frente do solvente, separe as bandas de corante e calcule os valores exatos de Rf para cada pigmento.';

const howTo = [
  {
    name: 'Escolher a tinta questionada ou caneta de comparação',
    text: 'Selecione a tinta da carta de resgate ou o perfil de uma caneta suspeita. Cada tinta contém um grupo diferente de componentes corantes com polaridades e afinidades distintas pela fase estacionária.',
  },
  {
    name: 'Selecionar a fase móvel',
    text: 'Altere o sistema de solventes para ver como a polaridade do solvente altera o desenvolvimento capilar e a migração relativa de cada banda de corante.',
  },
  {
    name: 'Desenvolver a placa de TLC',
    text: 'Mova o controle deslizante de tempo de desenvolvimento e observe a frente do solvente subir pela placa enquanto as bandas separadas aparecem acima da linha de origem.',
  },
  {
    name: 'Ler a tabela de Rf',
    text: 'Compare a distância de cada pigmento com a distância da frente do solvente. O simulador calcula o Rf dividindo la distância do pigmento pela distância da frente do solvente.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'O que significa Rf na cromatografia em camada delgada?',
    answer: 'Rf é o fator de retenção (retention factor): a distância percorrida pelo composto dividida pela distância percorrida pela frente do solvente a partir da mesma linha de origem. É adimensional e varia normalmente entre 0 e 1.',
  },
  {
    key: 'faq-2',
    question: 'A TLC pode provar que duas amostras de tinta vieram da mesma caneta?',
    answer: 'Não. A TLC pode mostrar se os padrões de corantes são consistentes ou inconsistentess, mas a atribuição de origem exige métodos de comparação validados, controles, documentação e interpretação de um especialista.',
  },
  {
    key: 'faq-3',
    question: 'Por que a alteração do solvente altera o padrão das bandas?',
    answer: 'Os corantes distribuem-se de maneira diferente entre a fase estacionária e a fase móvel. Um solvente com melhor afinidade de polaridade pode arrastar um corante para mais longe, aumentando seu valor de Rf.',
  },
  {
    key: 'faq-4',
    question: 'O que significa se a linha de origem for importante?',
    answer: 'Tanto a distância da frente do solvente quanto a distância do pigmento devem ser medidas a partir da linha de origem. Medir a partir da base da placa gera valores de Rf incorretos.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    chamberAria: 'Câmara de cromatografia em camada delgada com placa de desenvolvimento',
    rulerAria: 'Régua milimétrica virtual para medir a frente do solvente e as bandas de pigmento',
    rulerMarks: '80,60,40,20,0',
    units: 'Sistema de unidades',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitMillimeter: 'mm',
    unitInch: 'in',
    unitMinute: 'min',
    inkSample: 'Amostra de tinta',
    ransomNote: 'Tinta da nota de resgate questionada',
    bluePen: 'Caneta esferográfica azul apreendida',
    blackPen: 'Caneta esferográfica preta apreendida',
    gelPen: 'Caneta gel apreendida',
    solventSystem: 'Fase móvel',
    ethanolWater: 'Etanol / água',
    butanolAcetic: 'Butanol / ácido acético',
    isopropanolAmmonia: 'Isopropanol / amônia',
    developmentTime: 'Tempo de desenvolvimento',
    frontDistance: 'Caminho do solvente',
    matchScore: 'Semelhança do padrão',
    solventFront: 'Frente do solvente',
    originLine: 'Origem',
    pigment: 'Banda de pigmento',
    pigmentCyanDye: 'corante ciano',
    pigmentVioletDye: 'corante violeta',
    pigmentGrayCarrier: 'veículo cinza',
    pigmentNavyDye: 'corante azul-marinho',
    pigmentYellowDye: 'corante amarelo',
    pigmentRedDye: 'corante vermelho',
    pigmentBlueDye: 'corante azul',
    pigmentDarkBinder: 'aglutinante escuro',
    pigmentTealDye: 'corante verde-azulado',
    pigmentMagentaDye: 'corante magenta',
    pigmentGelBinder: 'aglutinante de gel',
    distance: 'Distância',
    rfValue: 'Valor Rf',
    disclaimer: 'Simulação apenas para fins educativos. A comparação forense de tintas exige documentos originais, métodos laboratoriais validados, padrões de referência e peritos em documentos qualificados.',
  },
  seo: [
    {
      type: 'title',
      text: 'Cromatografia em Camada Delgada para Comparação Forense de Tintas',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:test-tube',
      badge: 'Simulador educativo',
      title: 'O que este simulador de tinta TLC ajuda você a entender',
      html: 'Esta ferramenta explica como a <strong>cromatografia em camada delgada de tintas de escrita</strong> pode separar uma linha de tinta visível em várias bandas de corante. Destina-se a estudantes de ciências forenses, aprendizes de exame de documentos e a qualquer pessoa que procure compreender como os valores de Rf são calculados a partir de uma placa de TLC desenvolvida.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Rf = d banda / d solvente', label: 'fórmula do fator de retenção', icon: 'mdi:division' },
        { value: '4', label: 'perfis de tinta comparados', icon: 'mdi:pen' },
        { value: '3', label: 'fases móveis simuladas', icon: 'mdi:flask-outline' },
        { value: '2', label: 'leituras métricas e imperiais', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Checklist para medições corretas de TLC',
      items: [
        'Marque a linha de origem acima do nível do solvente antes de iniciar o desenvolvimento.',
        'Remova a placa antes que o solvente atinja a borda superior.',
        'Marque a frente do solvente imediatamente, pois ela pode evaporar ou tornar-se difícil de ver.',
        'Meça o percurso do pigmento e o do solvente a partir da mesma linha de origem.',
        'Relate os valores de Rf juntamente com o sistema de solventes, o tipo de placa, as condições de desenvolvimento e os controles.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'O que a TLC pode apoiar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'A TLC pode mostrar se as tintas questionadas e conhecidas têm um comportamento semelhante de separação de corantes sob as mesmas condições.',
          points: ['Comparação de triagem', 'Visualização do padrão de corantes', 'Documentação do Rf', 'Seleção de amostras para testes de confirmação'],
        },
        {
          title: 'O que a TLC não pode provar sozinha',
          icon: 'mdi:alert-circle-outline',
          description: 'A TLC por si só não pode identificar exclusivamente uma caneta, datar um documento ou provar a autoria.',
          points: ['Sem atribuição de fonte única', 'Sem identificação do escritor', 'Sem conclusão de envelhecimento por padrão', 'Não substitui protocolos validados'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pergunta comum', 'Conceito de TLC envolvido', 'Resposta detalhada'],
      rows: [
        ['Como se calcula o Rf?', 'Distância do corante dividida pela distância da frente do solvente.', 'Meça ambos a partir da linha de origem e depois divida. O resultado não tem unidade.'],
        ['Por que as tintas se dividem em cores?', 'Diferentes corantes têm afinidades distintas pelas fases estacionária e móvel.', 'Um único traço escrito pode conter vários corantes que migram a taxas diferentes.'],
        ['Podem duas canetas ter o mesmo padrão de TLC?', 'Sim, formulações semelhantes podem produzir padrões muito próximos.', 'A semelhança apoia a consistência, não a individualização a uma única caneta.'],
        ['Por que o meu Rf mudou?', 'Solvente, placa, umidade, saturação, temperatura e tamanho da aplicação afetam a migração.', 'Os valores de Rf só são comparáveis quando as condições são controladas e documentadas.'],
      ],
    },
    {
      type: 'title',
      text: 'Como o simulador modela a separação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O modelo trata o movimento da frente do solvente como um processo de ascensão capilar que abranda ao longo do tempo, enquanto a cada corante é atribuído um valor de Rf baseado em duas propriedades simplificadas: a sua afinidade com o solvente em movimento e a sua correspondência de polaridade com a fase móvel selecionada. Isso é intencionadamente educativo e não química de nível de instrumentação, mas preserva a relação essencial que os utilizadores precisam de aprender: o solvente move-se primeiro, os corantes dividem-se entre as fases e o Rf é calculado a partir das distâncias de percurso medidas.',
    },
    {
      type: 'paragraph',
      html: 'A cromatografia em camada delgada é uma técnica analítica amplamente aceita em laboratórios forenses devido à sua simplicidade, rapidez e custo-benefício. No contexto do exame de documentos, é utilizada principalmente para comparar as composições de corante de diferentes amostras de tinta. Os cientistas forenses extraem uma pequena amostra de tinta de um documento questionado utilizando um bisturi ou uma agulha oca, dissolvem-na num solvente adequado como piridina ou metanol, e aplicam-na na placa de TLC juntamente com padrões de tinta de referência.',
    },
    {
      type: 'paragraph',
      html: 'Depois de a placa ser desenvolvida numa câmara fechada, os componentes individuais da tinta separam-se com base na sua partilha de distribuição diferencial entre a fase estacionária de gel de sílica e a fase móvel do solvente. O cromatograma resultante fornece uma impressão digital visual da tinta, apresentando bandas de cores distintas a alturas específicas. Os peritos em documentos calculam então o fator de retenção para cada banda de corante visível, ajudando a determinar se a tinta questionada é quimicamente consistente com um instrumento de escrita suspeito ou se corresponde a uma marca e fórmula conhecidas numa base de dados de referência de tintas.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fase estacionária', definition: 'O revestimento na placa de TLC, normalmente gel de sílica, que interage com os compostos e retarda o seu movimento.' },
        { term: 'Fase móvel', definition: 'O sistema de solventes que sobe pela placa e arrasta consigo os componentes do corante.' },
        { term: 'Línea de origem', definition: 'A linha a lápis onde a amostra de tinta é aplicada antes do desenvolvimento.' },
        { term: 'Frente do solvente', definition: 'O ponto mais alto atingido pela fase móvel antes de a placa ser removida.' },
        { term: 'Valor Rf', definition: 'O fator de retenção: distância de percurso do composto dividida pela distância de percurso da frente do solvente.' },
      ],
    },
    {
      type: 'tip',
      title: 'Conselho prático de interpretação',
      html: 'No exame forense de documentos, uma divergência pode ser especialmente útil porque pode excluir a formulação de uma caneta candidata. Um padrão de TLC coincidente é uma indicação mais fraca: diz apenas que as amostras são quimicamente consistentes sob aquelas condições, não que tenham vindo necessariamente da mesma caneta.',
    },
    {
      type: 'proscons',
      title: 'Pontos fortes e limites da comparação de tintas por TLC',
      items: [
        { pro: 'Rápido, econômico e visualmente intuitivo para separar os corantes das tintas.', con: 'Normalmente destrutivo, pois uma pequena amostra é extraída do documento.' },
        { pro: 'Os valores de Rf criam uma forma estruturada de comparar amostras questionadas e conhecidas.', con: 'Os valores de Rf mudam quando variam o solvente, a placa, a umidade e as condições de desenvolvimento.' },
        { pro: 'Útil como método de triagem antes de análises mais avançadas.', con: 'Não pode levar a uma conclusão inequívoca sobre a caneta de origem sem provas adicionais mais amplas.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaução forense',
      title: 'Não sobrestime a cromatografia de tintas',
      html: 'Uma simulação de navegador não pode examinar papel, idade da tinta, química de extração, qualidade da placa, contaminação ou confirmação instrumental. Utilize-a para aprender a lógica de medição e os limites de interpretação, e confie em métodos validados de exame forense de documentos para as provas reais.',
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
