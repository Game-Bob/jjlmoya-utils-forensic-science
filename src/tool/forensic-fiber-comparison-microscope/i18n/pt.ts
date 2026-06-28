import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'microscopio-comparacao-fibras-forense';
const title = 'Simulador de microscópio de comparação de fibras forenses';
const description = 'Elabore um perfil de fibra têxtil questionada, compare com referências conhecidas e interprete a morfologia, a polarização e o espectro de corante UV-Vis.';

const howTo = [
  {
    name: 'Elaborar o perfil da fibra questionada',
    text: 'Defina o material, diâmetro, direção de torção, resposta de polarização e perfil de corante da fibra recuperada.',
  },
  {
    name: 'Escolher uma fibra de comparação conhecida',
    text: 'Selecione no lado direito a fibra de uma peça de roupa suspeita, como algodão, lã, poliéster ou nylon.',
  },
  {
    name: 'Ajustar o foco e a polarização',
    text: 'Mova o controle deslizante de foco e gire o polarizador para observar a nitidez, as cristas da superfície e a birrefringência.',
  },
  {
    name: 'Comparar a morfologia e os espectros UV-Vis',
    text: 'Use a pontuação de morfologia, a de espectro, a correspondência combinada e as curvas de absorção para decidir se as amostras são consistentes ou claramente diferentes.',
  },
];

const faq = [
  {
    question: 'A microscopia de fibras pode identificar a peça exata de onde uma fibra veio?',
    answer: 'Geralmente não. A comparação de fibras pode demonstrar a consistência ou diferenças entre uma fibra questionada e um tecido conhecido, mas a atribuição de origem individual exige contexto minucioso, métodos validados e, muitas vezes, análises químicas ou instrumentais adicionais.',
  },
  {
    question: 'Por que usar luz polarizada na comparação de fibras?',
    answer: 'A luz polarizada revela birrefringência, comportamento de extinção e diferenças estruturais entre fibras naturais e sintéticas. Fibras sintéticas costumam mostrar uma resposta de polarização mais forte devido à orientação molecular.',
  },
  {
    question: 'O que o espectro UV-Vis acrescenta?',
    answer: 'Embora a microscopia descreva a forma e o comportamento óptico, a absorbância UV-Vis compara o comportamento de corantes em diferentes comprimentos de onda. Fibras semelhantes com corantes distintos podem se separar claramente no gráfico espectral.',
  },
  {
    question: 'Por que os resultados são mostrados como pontuações em vez de uma identificação definitiva?',
    answer: 'Os vestígios forenses devem ser relatados proporcionalmente. As pontuações são resumos educacionais de semelhança morfológica e espectral, não uma conclusão laboratorial ou parecer jurídico.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Microscópio forense virtual de campo dividido comparando duas fibras têxteis',
    chartAria: 'Gráfico de absorbância UV-Vis comparando os espectros de corante das fibras questionada e conhecida',
    questionedSample: 'Amostra questionada',
    fixedEvidence: 'Vestígio recuperado fixo',
    builderSummaryDefault: 'Algodão / 18 µm / irregular / índigo',
    customQuestionedLabel: 'Fibra questionada do caso',
    material: 'Material',
    cotton: 'Algodão',
    woolMaterial: 'Lã',
    polyesterMaterial: 'Poliéster',
    nylonMaterial: 'Nylon',
    materialcotton: 'algodão',
    materialwool: 'lã',
    materialpolyester: 'poliéster',
    materialnylon: 'nylon',
    twist: 'Torção',
    irregularTwist: 'Irregular',
    sTwist: 'S',
    zTwist: 'Z',
    diameter: 'Diâmetro',
    polarResponse: 'Resposta polar',
    dyeProfile: 'Perfil do corante',
    indigoDye: 'Índigo',
    crimsonDye: 'Carmesim',
    navyDye: 'Azul marinho',
    violetDye: 'Violeta',
    dyeindigo: 'índigo',
    dyecrimson: 'carmesim',
    dyenavy: 'azul marinho',
    dyeviolet: 'violeta',
    knownSample: 'Comparação conhecida',
    questionedCotton: 'Fibra de algodão azul questionada',
    suspectCotton: 'Fibra de algodão da camisa suspeita',
    wool: 'Fibra do suéter de lã vermelha',
    polyester: 'Fibra da jaqueta de poliéster azul marinho',
    nylon: 'Fibra do forro de nylon violeta',
    focus: 'Foco fino',
    polarizer: 'Ângulo do polarizador',
    morphology: 'Morfologia',
    spectrum: 'UV-Vis',
    birefringence: 'Birrefringência',
    combinedMatch: 'Combinação mútua',
    uvVisTitle: 'Sobreposição de absorbância UV-Vis',
    statusStrong: 'Alta consistência',
    statusPartial: 'Comparação mista',
    statusDifferent: 'Exclusão apoiada',
    verdictStrong: 'As fibras questionada e conhecida são altamente consistentes em diâmetro, torção, comportamento óptico e espectro de corante. Num caso real, relate isso como apoio a uma possível fonte têxtil comum, não como uma identificação individual.',
    verdictPartial: 'A comparação é mista. Algumas características de classe coincidem, mas a morfologia, a resposta do corante ou a birrefringência apresentam diferenças suficientes para exigir exames adicionais antes de qualquer associação cautelosa.',
    verdictDifferent: 'As fibras não são consistentes em características de classe essenciais. O resultado simulado apoia a exclusão deste tecido conhecido como a fonte provável para a fibra questionada.',
    disclaimer: 'Simulação educacional apenas. A comparação real de fibras forenses exige microscopia validada, controles, documentação, salvaguardas contra contaminação, revisão por pares e interpretação qualificada de vestígios.',
  },
  seo: [
    {
      type: 'title',
      text: 'Comparação forense de fibras com microscopia de campo dividido e espectro UV-Vis',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Simulador didático',
      title: 'O que este microscópio virtual de fibras demonstra',
      html: 'Este simulador modela o fluxo de trabalho prático da <strong>comparação forense de fibras</strong>: descreva a fibra têxtil questionada, compare com uma referência conhecida, ajuste o foco, gire os filtros de polarização e compare a resposta do corante com uma curva simplificada de absorbância UV-Vis. Destina-se a estudantes de vestígios forenses, não à tomada de decisões em casos reais.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 campos', label: 'vista de microscópio dividido', icon: 'mdi:compare-horizontal' },
        { value: '380-720 nm', label: 'faixa do espectro visível', icon: 'mdi:chart-bell-curve' },
        { value: '4 classes', label: 'algodão, lã, poliéster, nylon', icon: 'mdi:tshirt-crew' },
        { value: '0-180°', label: 'rotação do polarizador', icon: 'mdi:rotate-3d-variant' },
      ],
    },
    {
      type: 'summary',
      title: 'Observações fundamentais na comparação de fibras têxteis',
      items: [
        'Meça ou estime o diâmetro da fibra observando a variação natural ao longo do filamento.',
        'Registre a direção da torção, as cristas da superfície, características medulares, partículas deslustrantes e pistas de seção transversal, se disponíveis.',
        'Use luz polarizada para comparar birrefringência, comportamento de extinção e alterações de brilho sob rotação.',
        'Compare a cor microscopicamente, depois use informações instrumentais de corante caso a investigação exija maior discriminação.',
        'Relate se as descobertas são consistentes, diferentes ou inconclusivas; evite termos que sugiram uma única peça de roupa sem comprovação sólida.',
      ],
    },
    {
      type: 'table',
      headers: ['Observação', 'O que ajuda a responder', 'Limite'],
      rows: [
        ['Diâmetro e morfologia', 'As fibras são fisicamente semelhantes?', 'Variações de fabricação podem se sobrepor entre diferentes roupas.'],
        ['Torção e detalhes da superfície', 'As características naturais ou sintéticas coincidem?', 'Danos, estiramento e montagem podem alterar a aparência.'],
        ['Resposta sob luz polarizada', 'As propriedades ópticas coincidem?', 'A birrefringência é uma prova de classe, não uma assinatura única.'],
        ['Espectro de corante UV-Vis', 'Os corantes são consistentes?', 'Corantes semelhantes podem parecer próximos; a extração e as configurações do instrumento importam.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'O que apoia a consistência',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Múltiplas características de classe independentes coincidem entre as fibras questionada e conhecida.',
          points: ['Faixa de diâmetro comparável', 'Mesmo tipo geral de fibra', 'Comportamento de polarização semelhante', 'Picos de absorbância de corante sobrepostos'],
        },
        {
          title: 'O que apoia a exclusão',
          icon: 'mdi:close-circle-outline',
          description: 'Uma diferença clara e repetível aparece em uma característica que deveria coincidir caso tivessem uma fonte têxtil comum.',
          points: ['Divergência entre natural e sintético', 'Torção ou morfologia de superfície diferente', 'Espectro de corante nitidamente diferente', 'Resposta de birrefringência incompatível'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como funciona o modelo de simulação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O modelo armazena um pequeno banco de dados de referência com diâmetro, direção de torção, classe da fibra, birrefringência, família de corantes e pontos de absorbância UV-Vis. A fibra questionada é configurável pelo usuário, para que a pontuação de comparação responda ao perfil do caso em vez de uma amostra de aula fixa. A visualização microscópica reage ao foco e ao ângulo do polarizador para mostrar aos estudantes por que as configurações ópticas são fundamentais.',
    },
    {
      type: 'paragraph',
      html: 'O controle do polarizador é especialmente útil para fibras sintéticas. Poliéster e nylon possuem valores de birrefringência maiores, por isso o brilho delas muda de forma mais visível à medida que o polarizador gira. O algodão natural e a lã também respondem, mas o efeito simulado é mais discreto. Isso reflete a ideia didática de que a orientação molecular e a estrutura da fibra influenciam o comportamento óptico.',
    },
    {
      type: 'paragraph',
      html: 'O gráfico UV-Vis é uma sobreposição simplificada, não um substituto para um espectrofotômetro. No trabalho forense real de vestígios, a comparação de corantes pode exigir microespectrofotometria, cromatografia em camada delgada, química de extração, controles de referência e incertezas documentadas. O gráfico serve para ensinar por que duas fibras com aparência semelhante ao microscópio podem se diferenciar pela química do corante.',
    },
    {
      type: 'paragraph',
      html: 'Os peritos forenses devem documentar cada etapa do processo de análise de fibras. Isso inclui tirar fotografias detalhadas, registrar medições e manter uma cadeia de custódia para todas as evidências físicas. O simulador ajuda os estudantes a compreender a importância da documentação sistemática e da comparação objetiva no trabalho forense. Ao interagir com diferentes configurações, os usuários podem aprender como o caminho da luz, a espessura da amostra e a concentração do corante afetam as curvas espectrais e a aparência física.',
    },
    {
      type: 'paragraph',
      html: 'Os peritos forenses devem documentar cada etapa do processo de análise de fibras. Isso inclui tirar fotografias detalhadas, registrar medições e manter uma cadeia de custódia para todas as evidências físicas. O simulador ajuda os estudantes a compreender a importância da documentação sistemática e da comparação objetiva no trabalho forense. Ao interagir com diferentes configurações, os usuários podem aprender como o caminho da luz, a espessura da amostra e a concentração do corante afetam as curvas espectrais e a aparência física.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Fibra questionada', definition: 'Uma fibra recuperada de um local, vítima, suspeito, ferramenta, veículo ou outro item cuja origem é desconhecida.' },
        { term: 'Fibra conhecida', definition: 'Uma fibra de referência coletada de um têxtil ou objeto conhecido para comparação com a amostra questionada.' },
        { term: 'Birrefringência', definition: 'Comportamento óptico no qual um material apresenta diferentes índices de refração dependendo da direção da luz ou da polarização.' },
        { term: 'Espectro UV-Vis', definition: 'Gráfico mostrando com que intensidade um corante ou material absorve luz em diferentes comprimentos de onda.' },
        { term: 'Característica de classe', definition: 'Uma propriedade que pode associar vestígios a um grupo de possíveis fontes, em vez de a uma única fonte exclusiva.' },
      ],
    },
    {
      type: 'tip',
      title: 'Dica de interpretação para estudantes',
      html: 'Uma pontuação alta de semelhança deve ser interpretada como <strong>consistência</strong>, não como identidade. Os vestígios são mais fortes quando a microscopia, a química, o contexto de transferência, a persistência, o método de recuperação e os controles de contaminação convergem para o mesmo lado.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Mantenha a conclusão nos limites do vestígio',
      html: 'Um microscópio no navegador não pode validar a compatibilidade de uma fibra. Relatórios formais devem descrever as observações, a base de comparação, las limitações e o nível de suporte sem exagerar a atribuição de origem.',
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
