import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'comparador-estrias-marcas-ferramentas-forense';
const title = 'Comparador de estrias e marcas de ferramentas forense';
const description = 'Faça upload de imagens de marcas conhecidas e questionadas, alinhe-as em um microscópio de comparação dividido e inspecione a continuidade das estrias com controles visuais.';

const howTo = [
  {
    name: 'Carregar as imagens de comparação',
    text: 'Faça upload de uma imagem de marca de teste conhecida e de uma imagem de marca questionada a partir de seu próprio material de caso, notas ou conjunto de treinamento.',
  },
  {
    name: 'Mover a divisão de comparação',
    text: 'Arraste pelo visualizador óptico para expor mais da marca conhecida ou questionada, mantendo ambas as amostras no mesmo campo de visão.',
  },
  {
    name: 'Ajustar deslocamento, rotação, zoom e contraste',
    text: 'Use os controles micrométricos para transladar e rotacionar a imagem questionada e, em seguida, ajuste o zoom, o contraste e o brilho para que as estrias mais fracas continuem visíveis.',
  },
  {
    name: 'Exportar a vista de comparação',
    text: 'Quando o alinhamento visual estiver pronto, exporte uma imagem PNG para discussão, revisão em sala de aula ou ilustração de notas de caso.',
  },
];

const faq = [
  {
    question: 'O que é uma comparação forense de marcas de ferramentas?',
    answer: 'A comparação forense de marcas de ferramentas examina as marcas produzidas quando uma ferramenta entra em contato, corta, raspa, força ou comprime outra superfície. Os peritos comparam características de classe, qualidade da marca e detalhes microscópicos de estrias entre marcas questionadas e marcas de teste conhecidas.',
  },
  {
    question: 'Esta ferramenta online pode identificar a ferramenta exata que fez uma marca?',
    answer: 'Não. Este espaço de trabalho é para alinhamento visual e educação. Não calcula atribuição de fonte, probabilidade, taxa de erro ou uma conclusão forense automatizada.',
  },
  {
    question: 'Por que o deslocamento, a rotação e o zoom são importantes na comparação de marcas?',
    answer: 'Pequenas diferenças no ângulo da ferramenta, pressão, escala, posição da câmera e posicionamento lateral podem fazer com que estrias semelhantes pareçam desalinhadas. Os controles de deslocamento, rotação e zoom ajudam a colocar duas imagens em uma posição de visualização comparável.',
  },
  {
    question: 'Quais imagens funcionam melhor para o alinhamento visual de marcas?',
    answer: 'Use imagens nítidas, bem iluminadas e tiradas o mais perpendicularmente possível, com sobreposição suficiente na região da marca. Evite desfoques acentuados, reflexos extremos, distorções de perspectiva e imagens onde a área das estrias seja muito curta ou esteja danificada.',
  },
  {
    question: 'O que um usuário deve documentar após alinhar duas imagens de marcas?',
    answer: 'Documente a origem de cada imagem, se é questionada ou conhecida, as configurações de alinhamento usadas, quaisquer ajustes de imagem aplicados, áreas visíveis de concordância ou discordância e as limitações de qualidade da imagem.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Vista de microscópio de comparação dividida de estrias de marcas de ferramentas conhecidas e questionadas',
    splitLabel: 'Mover divisão de comparação',
    units: 'Sistema de unidades de deslocamento',
    metric: 'Métrico',
    imperial: 'Imperial',
    toolProfile: 'Perfil da ferramenta',
    loadImages: '1. Carregar',
    alignImage: '2. Alinhar imagem questionada',
    adjustImage: '3. Ajustar visibilidade',
    outputControls: 'Controles de saída',
    demoOptions: 'Opções de demonstração',
    uploadKnown: 'Imagem conhecida/teste',
    uploadQuestioned: 'Imagem questionada',
    noFile: 'Nenhuma imagem carregada',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Ponta de chave de fenda',
    prybar: 'Borda de pé de cabra',
    boltCutter: 'Mandíbula de corta-vergalhão',
    offset: 'Deslocamento horizontal',
    rotation: 'Rotação angular',
    zoom: 'Zoom da imagem',
    contrast: 'Contraste',
    brightness: 'Brilho',
    microns: 'micrômetros',
    thousandths: 'milésimos',
    degrees: 'graus',
    correlation: 'Modo / pontuação',
    verdictStrong: 'alinhamento forte',
    verdictPartial: 'alinhamento parcial',
    verdictWeak: 'alinhamento fraco',
    center: 'Centralizar',
    fineTip: 'linhas finas de arrasto',
    wideEdge: 'compressão larga',
    crushJaw: 'cristas de esmagamento emparelhadas',
    grid: 'Grade',
    exportImage: 'Exportar vista',
    exportFilename: 'vista-comparacao-marcas-ferramentas.png',
    phaseFit: 'Ajuste de fase',
    rotationFit: 'Ajuste de rotação',
    knownMark: 'Marca conhecida',
    questionedMark: 'Marca questionada',
    reliefGraph: 'Relevo microsuperficial digitalizado',
    visualMode: 'Visual',
    visualVerdict: 'comparação manual',
    visualInterpretation: 'Apenas alinhamento visual. Nenhuma conclusão forense automatizada é calculada.',
    interpMatch: 'Pré-visualização de demonstração. Faça upload de imagens para comparar marcas reais.',
    interpPossible: 'Pré-visualização de demonstração. Ajuste o alinhamento ou faça upload de imagens.',
    interpMismatch: 'Pré-visualização de demonstração. Recentralize ou faça upload de imagens.',
    disclaimer: 'Apenas espaço de trabalho visual.',
  },
  seo: [
    {
      type: 'title',
      text: 'Microscópio de Comparação de Marcas de Ferramentas Forense Online',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Espaço visual',
      title: 'Compare imagens de marcas de ferramentas questionadas e conhecidas no navegador',
      html: 'Este espaço de trabalho de comparação de marcas de ferramentas permite carregar duas imagens, colocá-las em um microscópio de comparação com tela dividida e ajustar a marca questionada até que linhas de estrias, arranhões, marcas de pressão ou ranhuras microscópicas possam ser examinadas lado a lado. É projetado para estudantes de ciências forenses, instrutores, investigadores e equipes jurídicas que precisam de uma maneira clara de explicar a <strong>comparação de marcas de ferramentas conhecidas versus questionadas</strong> sem instalar software de microscopia especializado.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 uploads', label: 'imagens conhecidas e questionadas', icon: 'mdi:image-plus' },
        { value: 'tela dividida', label: 'layout de microscópio de comparação', icon: 'mdi:compare-horizontal' },
        { value: 'alinhamento', label: 'controles de deslocamento, rotação e zoom', icon: 'mdi:axis-arrow' },
        { value: 'exportar PNG', label: 'salva a vista de comparação', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'Quando este espaço de trabalho de comparação de marcas de ferramentas é útil',
      items: [
        'Ensinar como os microscópios de comparação colocam uma marca de teste conhecida ao lado de uma marca questionada.',
        'Preparar demonstrações em sala de aula com imagens de marcas de ferramentas reais ou de treinamento.',
        'Explicar como o alinhamento, escala, rotação, iluminação e contraste afetam a interpretação das estrias.',
        'Criar uma ilustração visual limpa para notas de caso ou relatórios sem alegar uma identificação automatizada.',
        'Avaliar a qualidade da imagem antes de decidir se uma marca é adequada para comparação formal em laboratório.',
      ],
    },
    {
      type: 'title',
      text: 'Como comparar imagens de marcas de ferramentas online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Comece carregando uma imagem de <strong>marca conhecida</strong> e uma imagem de <strong>marca questionada</strong>. Uma marca conhecida é geralmente produzida sob condições controladas com uma ferramenta específica. Uma marca questionada é aquela recuperada de uma cena, objeto, batente de porta, fechadura ou qualquer elemento cuja origem é desconhecida. O objetivo do espaço de trabalho não é decidir a identidade de forma automática; o objetivo é colocar as duas imagens em uma relação visual útil para que o usuário inspecione a continuidade e as divergências.',
    },
    {
      type: 'paragraph',
      html: 'Uma vez carregadas ambas as imagens, use o controle deslizante de divisão para expor mais ou menos de cada lado. Ajuste o deslocamento horizontal para colocar as estrias em fase e, em seguida, rotacione a imagem questionada para compensar o ângulo da câmera ou da ferramenta. O zoom ajuda quando as duas imagens foram capturadas com diferentes ampliações. O contraste e o brilho ajudam a revelar arranhões fracos ou marcas rasas, mas esses ajustes devem ser documentados porque modificam a aparência original de exibição da imagem.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'O que o espaço de trabalho ajuda a observar',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Uma boa configuração de tela dividida facilita inspecionar se duas marcas compartilham uma estrutura visual comparável após um alinhamento cuidadoso.',
          points: ['Direção de estrias ou cristas semelhante', 'Continuidade ao longo de vários detalhes vizinhos', 'Diferenças de escala e rotação que requerem correção', 'Áreas onde a qualidade da marca é boa o suficiente para inspeção', 'Discrepâncias óbvias de características de classe que podem finalizar a comparação mais cedo'],
        },
        {
          title: 'O que não pode provar',
          icon: 'mdi:alert-circle-outline',
          description: 'Esta ferramenta de navegador não é um sistema de identificação forense validado e não deve ser usada como tal.',
          points: ['Nenhuma conclusão automatizada de mesma origem', 'Nenhuma probabilidade de coincidência aleatória', 'Nenhuma estimativa de frequência populacional', 'Não substitui o exame da evidência física original', 'Não substitui o controle de qualidade do laboratório ou a revisão por pares'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Controle', 'O que altera', 'Por que é importante'],
      rows: [
        ['Upload de imagem conhecida', 'Carrega a marca de controle ou referência.', 'O lado conhecido deve provir de uma marca de teste documentada ou de um exemplo de treinamento.'],
        ['Upload de imagem questionada', 'Carrega a marca cuja origem é desconhecida.', 'Este lado é movido e ajustado para buscar uma orientação comparável.'],
        ['Linha de divisão', 'Altera a porção de cada imagem que fica visível.', 'Uma divisão móvel ajuda a inspecionar se as linhas continuam visualmente através do limite.'],
        ['Deslocamento horizontal', 'Move a imagem questionada para a esquerda ou direita.', 'Pequenos deslocamentos laterais podem colocar as cristas correspondentes em fase ou fora de fase.'],
        ['Rotação', 'Gira a imagem questionada.', 'O ângulo da ferramenta, da câmera ou da montagem podem criar desvios angulares entre as imagens.'],
        ['Zoom', 'Modifica a ampliação exibida.', 'Diferentes escalas de imagem devem ser tornadas comparáveis antes de julgar os detalhes.'],
        ['Contraste e brilho', 'Ajustam a visibilidade de exibição.', 'Estrias de baixo contraste podem se tornar mais fáceis de ver, mas os ajustes devem ser anotados.'],
        ['Exportar vista', 'Salva um PNG do alinhamento atual.', 'Útil para revisão de aula, notas, discussões ou relatórios que declarem claramente as limitações.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Calidade de imagem',
      title: 'Uma imagem ruim pode impossibilitar uma boa comparação',
      html: 'A comparação de marcas de ferramentas depende fortemente da qualidade da imagem. Desfoques, reflexos, artefatos de compressão, sombras fortes, distorção de perspectiva e estrias muito curtas podem criar impressões visuais enganosas. Se uma marca não puder ser orientada, escalada e iluminada claramente, a conclusão apropriada pode ser que a imagem é inadequada para uma comparação significativa.',
    },
    {
      type: 'summary',
      title: 'Lista de verificação prática antes de comparar duas marcas',
      items: [
        'Confirme qual imagem é a marca questionada e qual é a marca conhecida ou de teste.',
        'Verifique se ambas as imagens mostram o mesmo tipo geral de marca, a mesma área de contato da ferramenta e a mesma orientação.',
        'Evite comparar linhas individuais isoladas; busque conjuntos de detalhes contíguos que persistam por um comprimento útil.',
        'Use o contraste e o brilho moderadamente e registre quando a melhoria de imagem foi aplicada.',
        'Exporte a vista alinhada apenas como uma ilustração do que foi exibido, e não como prova de identidade.',
      ],
    },
    {
      type: 'title',
      text: 'Evidência de Marcas de Ferramentas Conhecidas versus Questionadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma marca questionada geralmente é recuperada de um item envolvido em um incidente, como uma marca de alavanca em uma porta, um corte em um fio, um arranhão em metal ou uma marca de compressão em uma superfície macia. Uma marca conhecida é produzida a partir de uma ferramenta suspeita sob condições controladas ou documentadas. No trabalho forense formal, os peritos consideram se as características de classe são consistentes antes de gastar tempo em detalhes de estrias finas. Se as características de classe não coincidirem, a semelhança microscópica em uma região pequena não é suficiente para apoiar uma associação.',
    },
    {
      type: 'paragraph',
      html: 'O espaço de trabalho do navegador é intencionalmente conservador. Ele ajuda a alinhar imagens e discutir recursos visuais, mas não modela o desgaste da ferramenta, características de subclasse, deformação do substrato, marcas de fabricação, limites do perito, incerteza de medição ou taxas de erro. Um fluxo de trabalho responsável trata a imagem exportada como um auxílio de comunicação, e não como um resultado de identificação.',
    },
    {
      type: 'proscons',
      title: 'Forças e limitações da comparação online de imagens de marcas de ferramentas',
      items: [
        { pro: 'Maneira rápida de carregar duas imagens e inspecionar o alinhamento sem instalar software de desktop.', con: 'A vista do navegador não é um microscópio de comparação forense calibrado.' },
        { pro: 'Útil para ensinar como a comparação em tela dividida e a orientação afetam o que o usuário vê.', con: 'A melhoria de imagem pode melhorar a visibilidade, mas também alterar a aparência dos detalhes.' },
        { pro: 'As vistas PNG exportadas são úteis para notas, discussões e explicações visuais.', con: 'Uma vista exportada não preserva o contexto probatório completo, os metadados ou a cadeia de custódia.' },
        { pro: 'Funciona com imagens reais enviadas pelo usuário em vez de apenas marcas sintéticas.', con: 'A ferramenta não pode determinar se duas marcas vieram da mesma ferramenta.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Marca questionada', definition: 'Uma marca recuperada de um objeto ou cena do crime cuja origem é desconhecida.' },
        { term: 'Marca de teste conhecida', definition: 'Uma marca controlada feita com uma ferramenta específica para comparação com a marca questionada.' },
        { term: 'Estria', definition: 'Uma linha ou sulco microscópico criado quando a superfície de uma ferramenta desliza sobre outro material.' },
        { term: 'Características de classe', definition: 'Características compartilhadas por um grupo de ferramentas, como a largura da lâmina, forma geral ou tipo de ferramenta.' },
        { term: 'Características individuais', definition: 'Características finas de superfície que podem surgir de fabricação, uso, danos ou desgaste.' },
        { term: 'Características de subclasse', definition: 'Características compartilhadas por um subgrupo de ferramentas devido aos processos de fabricação; elas podem complicar a interpretação da fonte.' },
        { term: 'Adequação', definition: 'Um julgamento sobre se uma marca contém qualidade e quantidade de detalhes suficientes para suportar a comparação.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bons termos de busca que esta página foi projetada para responder',
      html: 'Os usuários que procuram esse tipo de espaço de trabalho costumam pesquisar frases como <strong>microscópio de comparação de marcas de ferramentas online</strong>, <strong>comparação forense de estrias</strong>, <strong>marca conhecida vs questionada</strong>, <strong>comparar marcas de ferramentas a partir de imagens</strong> e <strong>simulador de microscópio de comparação forense</strong>. A página é construída em torno dessas tarefas reais: carregar, alinhar, inspecionar, documentar e compreender limitações.',
    },
    {
      type: 'table',
      headers: ['Pergunta comum do usuário', 'Resposta curta'],
      rows: [
        ['Posso enviar minhas próprias imagens de marcas de ferramentas?', 'Sim. A ferramenta é projetada para imagens questionadas e conhecidas enviadas pelo usuário.'],
        ['O aplicativo decide se ambas as marcas coincidem?', 'Não. Ele suporta apenas o alinhamento visual e não emite uma conclusão de origem comum.'],
        ['Por que a imagem questionada se move em vez de ambas?', 'Manter o lado conhecido fixo torna mais simples documentar como a imagem questionada foi ajustada.'],
        ['Posso usá-lo para marcas de armas de fogo ou estojos?', 'Pode ajudar a demonstrar conceitos de alinhamento de imagem, mas a comparação de armas de fogo e cartuchos requer procedimentos específicos da disciplina e revisão validada.'],
        ['Posso incluir o PNG exportado em minhas notas?', 'Sim, se for claramente descrito como uma vista ilustrativa produzida usando controles de ajuste visual.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Precaução forense',
      title: 'Use linguagem cuidadosa ao descrever comparações de marcas de ferramentas',
      html: 'Evite transformar um alinhamento visual em uma conclusão mais forte do que a evidência apoia. A linguagem apropriada depende da jurisdição, da política do laboratório, da validação, da qualidade da imagem, da revisão do perito e do contexto do caso. Esta ferramenta online deve ser descrita como um auxílio de comparação visual, não como um método validado para individualizar uma ferramenta.',
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
