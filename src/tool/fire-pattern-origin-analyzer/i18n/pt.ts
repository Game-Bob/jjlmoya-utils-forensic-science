import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'analisador-origem-padroes-incendio';
const title = 'Analisador de origem por padrões de incêndio';
const description = 'Mapeie padrões em V, carbonização profunda, sombras de fuligem e indicadores de queima limpa numa planta baixa e projete vetores de propagação do fogo para estimar a área de origem mais provável.';

const howTo = [
  {
    name: 'Importar uma planta da cena',
    text: 'Arraste uma imagem da planta para a área de trabalho ou carregue-a do disco antes de colocar vetores de evidência.',
  },
  {
    name: 'Clicar para abrir o seletor radial de evidências',
    text: 'Posicione o ponteiro sobre uma marca de queimadura, abra o menu radial contextual e escolha o tipo de indicador diretamente no mapa.',
  },
  {
    name: 'Arrastar para refinar vetores e observar a convergência',
    text: 'Estenda cada vetor de propagação com encaixe na tela e observe o campo de probabilidade recalculado em tempo real à medida que as evidências se acumulam.',
  },
  {
    name: 'Exportar o instantâneo técnico',
    text: 'Gere um relatório estruturado com coordenadas de origem, confiança, variância, estado das camadas e o conjunto completo de vetores para revisão posterior.',
  },
];

const faq = [
  {
    question: 'Os padrões de queimadura podem provar o ponto exato onde um incêndio começou?',
    answer: 'Não. Os padrões de incêndio podem ajudar a gerar e testar hipóteses de origem, mas a ventilação, a extinção, a carga de combustível, o flashover e as perturbações pós-incêndio podem distorcer os padrões. A determinação real da origem exige uma investigação sistemática.',
  },
  {
    question: 'Por que os padrões em V são importantes na investigação de incêndios?',
    answer: 'Os padrões em V frequentemente refletem a propagação ascendente e para fora das chamas em superfícies verticais. Podem apontar para uma área de origem mais baixa, mas devem ser comparados com outras evidências antes de tirar conclusões.',
  },
  {
    question: 'O que a carbonização profunda indica?',
    answer: 'A carbonização profunda pode indicar aquecimento mais prolongado, maior fluxo de calor ou efeitos do combustível. É um contexto útil, mas não indica automaticamente a origem porque os materiais carbonizam a taxas diferentes.',
  },
  {
    question: 'Por que usar vários vetores em vez de uma única seta?',
    answer: 'Um único padrão pode ser enganoso. Vários vetores independentes reduzem a influência de uma parede danificada, um único pacote de combustível ou um único caminho de ventilação.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Área de trabalho forense interativa para desenhar vetores de propagação do fogo',
    vPattern: 'Padrão em V',
    deepChar: 'Carbonização profunda',
    sootShadow: 'Sombra de fuligem',
    cleanBurn: 'Queima limpa',
    loadPlan: 'Carregar planta',
    generateReport: 'Gerar relatório',
    pointerLabel: 'Ponteiro',
    resetVectors: 'Redefinir',
    estimatedOrigin: 'Origem estimada',
    visibleLayers: 'Camadas de evidência visíveis',
    vectorsLabel: 'VETORES',
    confidenceLabel: 'CONFIANÇA',
    varianceLabel: 'VARIÂNCIA',
    modeLabel: 'MODO',
    guideSummary: 'Como usar esta ferramenta',
    flowPanelTitle: 'Fluxo de trabalho',
    legendPanelTitle: 'Legenda das evidências',
    readoutPanelTitle: 'Painel de resultados',
    flow1Kicker: 'PASSO 1',
    flow1Icon: '1',
    flow1Title: 'Carregar',
    flow1Text: 'Enviar a planta da cena',
    flow2Kicker: 'PASSO 2',
    flow2Icon: '2',
    flow2Title: 'Escolher pista',
    flow2Text: 'Clicar na marca de queimadura',
    flow3Kicker: 'PASSO 3',
    flow3Icon: '3',
    flow3Title: 'Arrastar vetor',
    flow3Text: 'Apontar direção do fogo',
    flow4Kicker: 'PASSO 4',
    flow4Icon: '4',
    flow4Title: 'Ler resultado',
    flow4Text: 'Verificar rodapé + exportar',
    basicsTitle: 'O que deve fazer primeiro',
    basicsIntro: 'Carregue uma planta nítida, marque apenas padrões que possa justificar e distribua vetores por diferentes superfícies em vez de repetir a mesma pista.',
    indicatorsTitle: 'O que cada tipo de evidência significa',
    vPatternShort: 'Queimadura de parede que se abre para cima',
    vPatternExplain: 'Um padrão em V é a forma familiar de queimadura ascendente e para fora frequentemente vista numa parede. Pode sugerir que o calor e as chamas subiram de uma área mais baixa, mas não é prova automática da origem exata.',
    deepCharShort: 'Área queimada com mais intensidade ou duração',
    deepCharExplain: 'A carbonização profunda significa que um material parece mais queimado, enegrecido ou consumido numa área do que ao redor. Pode indicar aquecimento mais longo ou mais intenso, mas o tipo de combustível e a espessura do material influenciam muito.',
    sootShadowShort: 'Fumo bloqueado ou redirecionado',
    sootShadowExplain: 'Uma sombra de fuligem é uma área protegida ou com escurecimento diferente que sugere que um objeto, superfície ou fluxo de ar alterou a forma como a fuligem se depositou. Pode ajudar a reconstruir o que estava presente ou como o fumo se moveu.',
    cleanBurnShort: 'Menos fuligem devido ao calor ou fluxo de ar',
    cleanBurnExplain: 'A queima limpa é uma área onde a fuligem parece mais clara, removida ou ausente porque o calor, a ventilação ou a exposição direta às chamas a afetou de forma diferente. É útil, mas nem toda área limpa marca a origem.',
    resultsTitle: 'Como ler o resultado',
    resultsIntro: 'Use o rodapé como verificação rápida da sua cartografia, não como conclusão forense definitiva.',
    resultsPoint1: 'Quantas linhas de evidência estão ativas.',
    resultsPoint2: 'Com que intensidade os vetores ativos concordam.',
    resultsPoint3: 'Quão ampla ainda é a área de origem.',
    resultsPoint4: 'O que a ferramenta espera que faça a seguir.',
    awaitingVector: 'Aguardando vetor',
    selectIndicator: 'Selecionar indicador',
    refiningVector: 'Refinando vetor',
    needsMoreVectors: 'Mais vetores necessários',
    wideArea: 'Área de origem ampla',
    focusedArea: 'Área de origem concentrada',
    dropPlan: 'Solte a imagem da planta ou clique para enviar',
    needsMoreVectorsText: 'Desenhe pelo menos duas setas direcionais claras. Três ou mais observações independentes geralmente tornam a convergência muito mais fácil de interpretar.',
    wideAreaText: 'As linhas projetadas cruzam-se, mas a dispersão ainda é ampla. Numa cena real, compare ventilação, carga de combustível, efeitos de extinção e informações de testemunhas antes de restringir a origem.',
    focusedAreaText: 'Os vetores convergem para uma área compacta. Trate isto como um forte sinal didático para o desenvolvimento de hipóteses de origem, não como uma conclusão forense definitiva.',
    disclaimer: 'Apenas simulação educativa. A investigação real da origem e causa de um incêndio deve seguir os guias aceites, os protocolos de segurança no local, as normas de documentação e a revisão qualificada de especialistas.',
  },
  seo: [
    {
      type: 'title',
      text: 'Análise Interativa da Origem de Incêndios a partir de Vetores de Padrões de Queimadura',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Simulador didático',
      title: 'O que este analisador de origem por padrões de incêndio ensina',
      html: 'Esta ferramenta de navegador demonstra como os investigadores raciocinam a partir de padrões físicos de incêndio para uma <strong>área de origem</strong> provável. Os utilizadores mapeiam evidências visíveis, desenham vetores direcionais de propagação e observam as linhas projetadas convergirem ou dispersarem-se. O modelo é intencionalmente educativo: ensina geometria e interpretação de padrões, não determinação legal de causas.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 camadas', label: 'Padrão V, carbonização, fuligem, queima limpa', icon: 'mdi:layers-triple' },
        { value: 'Planta 2D', label: 'mapa estrutural da sala', icon: 'mdi:floor-plan' },
        { value: '3+ setas', label: 'observações recomendadas', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'entrada de confiança', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'Um fluxo de trabalho disciplinado para a interpretação de padrões de incêndio',
      items: [
        'Comece com segurança, preservação da cena, fotografias, esboços e documentação sistemática antes de interpretar padrões.',
        'Separe os tipos de padrão para que danos em V, profundidade de carbonização, deposição de fuligem e queima limpa não sejam reduzidos a uma única suposição.',
        'Desenhe indicadores direcionais apenas onde o padrão físico suporta uma direção de propagação defensável.',
        'Procure convergência entre observações independentes em vez de confiar no dano mais dramático.',
        'Use a área de origem estimada como hipótese a testar contra combustíveis, fontes de ignição, ventilação, evidência elétrica e testemunhos.',
      ],
    },
    {
      type: 'table',
      headers: ['Padrão', 'Valor potencial', 'Principal precaução'],
      rows: [
        ['Padrão em V', 'Pode sugerir propagação ascendente e para fora a partir de uma área mais baixa.', 'Pode ser alterado por ventilação, flashover, geometria das paredes e extinção.'],
        ['Carbonização profunda', 'Pode indicar exposição sustentada ao calor ou combustão intensa.', 'O tipo de combustível e a espessura do material afetam fortemente a profundidade de carbonização.'],
        ['Sombra de fuligem', 'Pode revelar áreas protegidas, colocação de objetos ou efeitos de fluxo de ar.', 'Móveis movidos ou atividade de extinção podem alterar a interpretação.'],
        ['Queima limpa', 'Pode mostrar calor elevado, ventilação ou combustão em fase avançada.', 'Não identifica automaticamente o primeiro material ignido.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Hipóteses de origem mais sólidas',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'As melhores hipóteses explicam várias observações ao mesmo tempo.',
          points: ['Vetores independentes convergem', 'Evidências encaixam nos caminhos de ventilação conhecidos', 'Pacotes de combustível são contabilizados', 'Origens alternativas são testadas ativamente'],
        },
        {
          title: 'Hipóteses de origem fracas',
          icon: 'mdi:alert-circle-outline',
          description: 'Hipóteses fracas baseiam-se frequentemente num único padrão sem testar fatores de distorção.',
          points: ['Uma única área carbonizada é tratada como prova', 'O flashover é ignorado', 'Danos de extinção não estão documentados', 'Evidência de fonte de ignição é presumida'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como o Modelo Vetorial Funciona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cada seta é tratada como uma linha projetada de propagação do fogo. O estimador calcula interseções de linhas aos pares, filtra pontos que caem dentro de um limite razoável da planta, faz a média dos cruzamentos restantes e relata um raio baseado na dispersão dessas interseções. Um raio pequeno com vários vetores produz um sinal de convergência mais forte. O modelo de interseção funciona resolvendo as equações paramétricas de duas linhas que se estendem dos seus respetivos marcadores de evidência. Quando dois vetores apontam para uma região partilhada, o seu ponto de cruzamento teórico contribui com uma coordenada para o conjunto de média. Quanto mais vetores independentes participarem, mais o estimador consegue filtrar os cruzamentos afastados do agrupamento principal, reduzindo eficazmente a influência de qualquer observação isolada que possa estar mal orientada ou interpretada.',
    },
    {
      type: 'paragraph',
      html: 'Esta abordagem geométrica reflete um exercício de esboço em sala de aula: ajuda os estudantes a ver por que a análise de origem melhora quando as observações vêm de diferentes superfícies e tipos de padrão. Também expõe um problema comum: as setas podem intersetar-se mesmo quando a interpretação subjacente é fraca, pelo que o centro matemático nunca deve substituir o julgamento da ciência do fogo. Numa investigação real, os profissionais comparam o resultado traçado com os caminhos de ventilação, a distribuição da carga de combustível, os danos estruturais e os depoimentos de testemunhas antes de tratar qualquer coordenada como origem provável. A ferramenta incentiva este hábito ao exibir a variância junto ao ponto estimado, lembrando os utilizadores de que um agrupamento compacto de interseções é tão forte quanto a qualidade das observações que o produziram.',
    },
    {
      type: 'paragraph',
      html: 'Para além da lógica básica de interseção, o estimador aplica uma restrição de limite para que os cruzamentos situados muito além da planta da sala sejam excluídos. Isto impede que valores atípicos arrastem o centro médio para locais impossíveis. O raio final representa o desvio padrão das coordenadas de cruzamento restantes, dando uma medida direta da consistência com que os vetores ativos concordam. Um raio inferior a dez por cento da extensão da planta indica uma forte convergência. Um raio superior a um quarto da planta sinaliza que as evidências ainda não suportam uma origem focada, sendo necessárias mais ou melhores observações antes de tirar conclusões.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Área de origem', definition: 'A região geral onde as evidências disponíveis sugerem que o incêndio começou.' },
        { term: 'Padrão em V', definition: 'Um padrão de incêndio que frequentemente aparece como dano ascendente e para fora numa superfície vertical.' },
        { term: 'Queima limpa', definition: 'Uma área mais clara ou limpa causada quando a fuligem é queimada ou não se deposita sob condições de calor elevado ou fluxo de ar.' },
        { term: 'Sombra de fuligem', definition: 'Uma área de fuligem protegida ou depositada de forma diferente que pode preservar informações sobre objetos, fluxo de ar ou exposição ao calor.' },
        { term: 'Convergência vetorial', definition: 'O agrupamento de indicadores direcionais projetados em torno de uma região comum.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Cautela forense',
      title: 'Não transforme a convergência em certeza',
      html: 'Um grupo de interseções compacto só é útil quando as observações são válidas. As investigações reais devem ter em conta a ventilação, o flashover, os pacotes de combustível, os sistemas elétricos, as provas de eletrodomésticos, as declarações de testemunhas, a extinção e a perturbação da cena.',
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
