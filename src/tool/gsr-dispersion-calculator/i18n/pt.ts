import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-dispersao-residuos-disparo-gsr';
const title = 'Calculadora de Dispersão de Resíduos de Disparo (GSR)';
const description = 'Simule padrões didáticos de dispersão de resíduos de disparo em uma superfície de impacto com base na distância de tiro, tipo de munição, dispersão radial e depósito de fuligem.';

const howTo = [
  {
    name: 'Ajustar a distância de disparo',
    text: 'Mova o controle de distância do contato direto até três metros para observar como a descarga muda de um depósito compacto e termicamente alterado para um campo disperso de partículas.',
  },
  {
    name: 'Selecionar o perfil de munição',
    text: 'Escolha entre uma pistola de 9 mm, um revólver .38 ou uma espingarda calibre 12. Cada perfil altera o número de partículas, o fator de espalhamento e o alcance térmico estimado.',
  },
  {
    name: 'Avaliar o alvo e a pluma de detonação',
    text: 'Use o alvo de tecido para avaliar a densidade de partículas e a dispersão radial, e observe o cone lateral para entender a expansão física da nuvem de resíduos.',
  },
  {
    name: 'Interpretar a categoria de distância',
    text: 'Verifique a classificação obtida e os achados esperados. O resultado descreve o significado didático de padrões de contato, contato próximo, curta distância e longa distância.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'A dispersão de resíduos de disparo pode determinar a distância exata de um tiro?',
    answer: 'Não. Os padrões de GSR auxiliam na estimativa de uma faixa aproximada de distância, não um valor exato. A determinação real requer a análise da arma, munição, suporte físico, ângulo de impacto e a realização de disparos de teste comparativos sob condições controladas.',
  },
  {
    key: 'faq-2',
    question: 'Por que disparos a queima-roupa apresentam mais fuligem e queimaduras?',
    answer: 'Em distâncias muito curtas, gases quentes, fuligem, pólvora não deflagrada e partículas metálicas do espoletamento atingem o alvo antes que a pluma se expanda e resfrie, causando escurecimento, queimaduras e rasgos.',
  },
  {
    key: 'faq-3',
    question: 'Quais elementos químicos são comumente associados aos resíduos de espoleta?',
    answer: 'A análise clássica de GSR busca partículas contendo chumbo, bário e antimônio. Embora munições modernas livres de chumbo possam alterar essa assinatura, as técnicas de MEV-EDS avaliam conjuntamente a morfologia e a química das partículas.',
  },
  {
    key: 'faq-4',
    question: 'Por que o simulador utiliza um modelo de distribuição radial gaussiano?',
    answer: 'A distribuição gaussiana é uma aproximação didática útil porque as partículas tendem a se concentrar próximas ao centro do impacto. Na realidade, fatores ambientais, ângulo do disparo ou tipo de tecido podem gerar assimetrias.',
  },
  {
    key: 'faq-5',
    question: 'Esta calculadora é indicada para relatórios periciais judiciais?',
    answer: 'Não. Trata-se de uma simulação didática. Um laudo pericial oficial deve ser fundamentado em protocolos de laboratório validados, controles de qualidade, padrões de testes físicos e avaliação por um perito qualificado.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Distância de tiro',
    units: 'Sistema de unidades',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Perfil de munição',
    ammoPistol9mm: 'Pistola de 9 mm',
    ammoRevolver38: 'Revólver .38',
    ammoShotgun12: 'Espingarda calibre 12',
    target: 'Alvo de tecido',
    cone: 'Pluma de resíduos',
    canvasAria: 'Dispersão de partículas de resíduos de disparo no alvo de tecido',
    rangeStripAria: 'Categorias de distância',
    category: 'Interpretação da distância',
    categoryContactLabel: 'Contato direto / boca do cano',
    categoryNearContactLabel: 'Contato próximo / queima-roupa',
    categoryCloseRangeLabel: 'Curta distância / zona de tatuagem',
    categoryDistantLabel: 'Longa distância ou indeterminada',
    density: 'Densidade de partículas',
    thermal: 'Efeito térmico',
    radius: 'Raio estimado do padrão',
    radiusSuffix: 'de raio',
    expected: 'Achado esperado',
    expectedContact: 'Espera-se um depósito central denso, possível marca da boca do cano, fuligem intensa, rasgos no tecido e alteração térmica na zona de impacto.',
    expectedNearContact: 'Fuligem densa e grãos de pólvora concentrados ao redor da entrada, com um halo radial estreito e compacto.',
    expectedCloseRange: 'A zona de tatuagem de pólvora e os resíduos metálicos alargam-se em um anel mensurável; os efeitos térmicos e a fuligem tornam-se mínimos.',
    expectedDistant: 'As partículas estão muito dispersas e são escassas. Determinar a distância requer exames químicos, microscopia e disparos de teste comparativos.',
    contact: 'Contato',
    near: 'Contato próximo',
    close: 'Curta distância',
    distant: 'Longa distância',
    disclaimer: 'Apenas modelo didático. A determinação da distância de disparo por GSR exige disparos de teste controlados, comparação de suportes físicos e métodos químicos validados.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimativa da Distância de Disparo a partir de Padrões de GSR',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Modelo pedagógico',
      title: 'O que esta calculadora responde',
      html: 'Esta ferramenta ilustra se um padrão de resíduos se assemelha a um disparo de contato, contato próximo, curta distância ou longa distância. É projetada para o ensino de conceitos de <strong>determinação da distância de disparo</strong> por GSR, não para atuar como laudo judicial.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'distância de tiro simulada', icon: 'mdi:ruler' },
        { value: '4', label: 'categorias de distância explicadas', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'perfis de munição comparados', icon: 'mdi:ammunition' },
        { value: '2', label: 'sistemas de unidades: métrico e imperial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'Como Interpretar o Padrão Simulado',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista de verificação rápida',
      items: [
        'Fuligem central densa, queimaduras, rasgos ou marca da boca do cano indicam disparo de contato ou contato próximo.',
        'Um centro escuro compacto rodeado de grãos de pólvora sugere distância muito curta, requerendo testes físicos para delimitação.',
        'Tatuagem dispersa com pouca fuligem é típica de disparos a curta distância, após a atenuação dos efeitos térmicos.',
        'A ausência de resíduos visíveis a longa distância não exclui a presença de GSR; análises químicas ou microscópicas continuam indicadas.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Utilidade desta ferramenta',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Permite visualizar graficamente a relação entre distância de disparo, densidade de resíduos, espalhamento de partículas e efeitos térmicos.',
          points: ['Demonstração acadêmica', 'Explicação técnica', 'Nomenclatura forense', 'Comparação métrica e imperial'],
        },
        {
          title: 'Limitações da simulação',
          icon: 'mdi:alert-circle-outline',
          description: 'Não é capaz de identificar a distância real de tiro em um caso concreto sem a avaliação física dos vestígios.',
          points: ['Não processa amostras de casos', 'Sem confirmação química', 'Sem disparos com a arma suspeita', 'Sem validade pericial'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pergunta comum', 'Indício chave no padrão', 'Resposta técnica'],
      rows: [
        ['Como é um disparo de contato?', 'Fuligem densa, queimaduras, rasgo em cruz ou marca da boca do cano.', 'É compatível com disparo de contato, mas a elasticidade do tecido e os gases de escape podem modificar a morfologia.'],
        ['Qual a distância aproximada da arma?', 'Resíduos concentrados ao redor da entrada com halo compacto.', 'O padrão sustenta uma hipótese de intervalo de distância, mas o confronto com testes físicos é indispensável.'],
        ['O que é a zona de tatuagem de pólvora?', 'Pontilhado decorrente de granulações de pólvora incombusta com pouca fuligem.', 'Sua dispersão varia com o tipo de munição, tecido de suporte, ângulo e obstáculos intermediários.'],
        ['Os resíduos somem em disparos distantes?', 'Ausência de depósito macroscópico visível e dispersão muito ampla.', 'A marca visível diminui, mas as partículas de espoletamento podem ser identificadas em laboratório.'],
      ],
    },
    {
      type: 'title',
      text: 'Princípios Científicos da Simulação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O simulador utiliza uma distribuição radial baseada em algoritmos gaussianos para projetar partículas ao redor da área de impacto. Distâncias curtas concentram resíduos em campos densos e estreitos; o distanciamento aumenta a dispersão e diminui a densidade média. O modelo separa o espalhamento de fuligem das partículas metálicas, pois o depósito de calor e carbono possui alcance físico restrito.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Resíduos de disparo (Gunshot Residue): partículas e compostos originados do propelente, espoleta, projétil e gases do disparo.' },
        { term: 'Zona de fuligem', definition: 'Depósito carbonoso escuro visível principalmente em disparos de contato e curtas distâncias.' },
        { term: 'Tatuagem de pólvora', definition: 'Pontilhado característico resultante do impacto e incrustação de pólvora incombusta ou semicombusta.' },
        { term: 'Marca de boca', definition: 'Queimadura ou marca física que reproduz o desenho do cano do armamento devido à proximidade de gases e calor.' },
        { term: 'Disparo de teste', definition: 'Disparo comparativo efetuado a distâncias conhecidas com a mesma arma e munição sobre suporte idêntico.' },
      ],
    },
    {
      type: 'title',
      text: 'Categorias de Distância e Achados Físicos',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Categoria de tiro', 'Achados comuns', 'Limites de interpretação'],
      rows: [
        ['Contato', 'Depósito maciço central, fuligem, queimadura, rasgo, marca do cano.', 'A elasticidade do tecido e a força dos gases podem deformar severamente o diâmetro da perfuração.'],
        ['Contato próximo', 'Fuligem densa e halo fechado de grãos ao redor da entrada.', 'Prendas largas ou objetos interpostos podem desviar o depósito esperado de resíduos.'],
        ['Curta distância', 'Tatuagem de pólvora e partículas dispersas sem fuligem evidente.', 'O mesmo intervalo de distância gera padrões distintos em tecidos como algodão, jeans ou papel.'],
        ['Longa distância', 'Resíduos visíveis raros ou ausentes, grande dispersão microscópica.', 'Exames químicos e de microscopia de varredura são fundamentais para encontrar partículas não visíveis.'],
      ],
    },
    {
      type: 'tip',
      title: 'Dica prática para interpretação',
      html: 'Avalie os resíduos de disparo sempre sob uma perspectiva de <strong>faixa de comparação</strong> e nunca como um número exato. Conclusões científicas confiáveis requerem confronto direto com testes físicos experimentais.',
    },
    {
      type: 'title',
      text: 'Protocolo de Coleta e Registro de Vestígios',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Registrar as propriedades físicas do suporte alvo: tipo de tecido, cor, espessura, elasticidade e eventuais dobras.',
        'Anotar fabricante, modelo, comprimento de cano do armamento, lote da munição e acessórios de boca de cano.',
        'Fotografar o padrão com referencial métrico de escala, iluminação perpendicular e controle de cadeia de custódia.',
        'Isolar a análise de fuligem, queimaduras, grânulos incombustos, anel de limpeza e rasgos de tecidos.',
        'Executar testes físicos de confronto antes de elaborar conclusões técnicas sobre a distância do disparo.',
      ],
    },
    {
      type: 'proscons',
      title: 'Simulação virtual comparada ao exame laboratorial balístico',
      items: [
        { pro: 'Facilita o aprendizado didático da expansão dos resíduos conforme a arma se afasta do alvo.', con: 'Não reproduz as características exatas de uma arma de fogo específica ou lote de pólvora.' },
        { pro: 'Esclarece a lógica conceitual envolvida nas categorias de tiro.', con: 'Não substitui exames químicos nem ensaios por microscopia eletrônica de varredura (MEV-EDS).' },
        { pro: 'Ajuda a reconhecer os limites físicos da análise visual macroscópica.', con: 'Não tem valor judicial sem a calibração experimental adequada e análise pericial oficial.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Alerta forense',
      title: 'Exclusão de uso para fins judiciais',
      html: 'Um simulador digital não substitui exames técnicos da materialidade do crime. Não avalia conservação do armamento, química dos compostos ou qualidade da coleta. Utilize este portal apenas para estudos acadêmicos e contate órgãos periciais credenciados para investigações reais.',
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
