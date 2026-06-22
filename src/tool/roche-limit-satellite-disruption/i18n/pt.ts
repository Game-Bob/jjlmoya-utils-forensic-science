import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'limite-de-roche-calculadora-disrupcao-satelite';
const title = 'Calculadora do Limite de Roche e Simulador de Disrupção de Satélites';
const description = 'Calcule o limite de Roche para planetas e luas, compare distâncias de ruptura fluida e rígida, e visualize como as forças de maré transformam um satélite em um sistema de anéis.';

const howTo = [
  {
    name: 'Escolha o corpo primário',
    text: 'Selecione o planeta cuja gravidade está esticando o satélite. A calculadora carrega seu raio, densidade e massa para as estimativas do limite de Roche e período orbital.',
  },
  {
    name: 'Selecione o tipo de satélite',
    text: 'Escolha uma lua gelada, lua rochosa, monte de entulho ou corpo rico em ferro. A densidade e a coesão interna alteram o limite de ruptura.',
  },
  {
    name: 'Mova o controle deslizante orbital',
    text: 'Arraste a distância orbital para dentro ou para fora. O disco visual mostra se o satélite está fora do limite de Roche, tangenciando-o, fragmentando-se ou tornando-se um anel.',
  },
  {
    name: 'Compare os limites',
    text: 'Use as leituras para comparar o limite de Roche fluido clássico com a estimativa rígida inferior e o limite operacional ajustado por coesão.',
  },
];

const faq = [
  {
    question: 'O que é o limite de Roche?',
    answer: 'O limite de Roche é a distância de um corpo primário massivo na qual as forças de maré sobre um corpo orbitante menor se tornam fortes o suficiente para superar a autogravidade do corpo menor. Dentro desse limite, um satélite fraco ou fluido pode ser despedaçado.',
  },
  {
    question: 'Por que existem limites de Roche fluido e rígido?',
    answer: 'Um satélite fluido se deforma facilmente, então as marés podem amplificar seu alongamento e desintegrá-lo mais longe do planeta. Um satélite rígido pode resistir à deformação com resistência material, então a estimativa rígida simples coloca a ruptura mais perto do primário.',
  },
  {
    question: 'Toda lua dentro do limite de Roche vira instantaneamente anéis?',
    answer: 'Não. A disrupção real depende da rotação, composição, fraturas, porosidade, aquecimento, impactos e resistência do material. Esta ferramenta mostra o limite gravitacional clássico e usa uma faixa de transição para comunicar risco em vez de um interruptor instantâneo.',
  },
  {
    question: 'Por que os anéis de Saturno estão relacionados à física do limite de Roche?',
    answer: 'Os anéis de Saturno ocupam uma região onde o material gelado pode persistir como partículas em vez de acrescer em uma grande lua. O limite de Roche ajuda a explicar por que as partículas dos anéis permanecem dispersas perto do planeta.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    primaryBody: 'Corpo primário',
    satelliteType: 'Tipo de satélite',
    orbitDistance: 'Distância orbital',
    rocheBoundary: 'Limite de Roche',
    fluidLimit: 'Limite fluido',
    rigidLimit: 'Limite rígido',
    activeLimit: 'Limite ativo',
    safetyRatio: 'Razão de segurança',
    orbitalPeriod: 'Período orbital',
    tidalStress: 'Tensão de maré',
    ringFormation: 'Formação de anéis',
    stable: 'Órbita estável',
    grazing: 'Tangência de maré',
    fragmenting: 'Fragmentação',
    ring: 'Sistema de anéis',
    km: 'km',
    hours: 'h',
    density: 'Densidade',
    cohesion: 'Coesão',
    planetRadius: 'Raio planetário',
    reset: 'Reiniciar',
    closePass: 'Passagem próxima',
    moonTrack: 'Rastro da lua',
    debrisTrack: 'Rastro de detritos',
    primaryEarth: 'Terra',
    primaryMars: 'Marte',
    primaryJupiter: 'Júpiter',
    primarySaturn: 'Saturno',
    primaryNeptune: 'Netuno',
    satelliteIcyMoon: 'Lua gelada',
    satelliteRockyMoon: 'Lua rochosa',
    satelliteRubblePile: 'Agregado de detritos',
    satelliteIronCore: 'Lua rica em ferro',
    cohesionFluid: 'Fluido',
    cohesionFractured: 'Fraturado',
    cohesionRigid: 'Rígido',
  },
  seo: [
    {
      type: 'title',
      text: 'Fórmula do Limite de Roche, Significado e Como Usar Esta Calculadora',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>limite de Roche</strong> é a distância orbital mínima na qual um satélite mantido unido principalmente por sua própria gravidade pode orbitar um corpo maior sem ser despedaçado por forças de maré. As pessoas geralmente pesquisam por ele quando querem saber se uma lua, cometa, asteroide ou cenário artificial sobreviveria a uma aproximação próxima a um planeta, ou se o material se espalharia formando um anel. Esta calculadora responde a essa pergunta combinando o raio planetário, a densidade planetária, a densidade do satélite e a resistência interna aproximada do satélite.',
    },
    {
      type: 'paragraph',
      html: 'A ideia chave é simples: a gravidade não é igualmente forte em todo o satélite. O lado próximo é puxado com mais força do que o lado distante, criando uma força de estiramento. Se esse estiramento de maré for mais forte que a autogravidade e a coesão material do satélite, o corpo pode rachar, perder massa e eventualmente fragmentar-se. O limite de Roche não é apenas uma distância; é uma comparação entre a tensão de maré externa e a ligação interna.',
    },
    {
      type: 'title',
      text: 'Equações do Limite de Roche Usadas pela Calculadora',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para um satélite fluido ou muito fraco, a aproximação clássica é <strong>d = 2.44 R (rho_M / rho_m)^(1/3)</strong>. Para um satélite rígido, uma aproximação comum é <strong>d = 1.26 R (rho_M / rho_m)^(1/3)</strong>. Nessas equações, <strong>d</strong> é o limite de Roche medido a partir do centro do planeta, <strong>R</strong> é o raio do corpo primário, <strong>rho_M</strong> é a densidade do corpo primário e <strong>rho_m</strong> é a densidade do satélite.',
    },
    {
      type: 'list',
      items: [
        '<strong>Raio do primário:</strong> Planetas maiores criam uma distância de Roche maior mesmo quando a densidade é similar.',
        '<strong>Densidade do primário:</strong> Um primário mais denso aumenta a intensidade da maré a um dado múltiplo de seu raio.',
        '<strong>Densidade do satélite:</strong> Um satélite mais denso tem autogravidade mais forte, então pode sobreviver mais perto do planeta.',
        '<strong>Resistência do satélite:</strong> Um objeto fluido, gelado, fraturado ou de entulho se desintegra mais longe que um objeto rígido compacto.',
      ],
    },
    {
      type: 'table',
      headers: ['Modelo', 'Forma da fórmula', 'Use para', 'O que o resultado significa'],
      rows: [
        ['Limite de Roche fluido', '2.44 R (rho_M / rho_m)^(1/3)', 'Luas geladas, corpos fundidos, montes de entulho, cometas fracos', 'A distância de ruptura conservadora para objetos que se deformam facilmente.'],
        ['Limite de Roche rígido', '1.26 R (rho_M / rho_m)^(1/3)', 'Corpos rochosos densos ou metálicos com resistência material', 'Uma estimativa inferior mais próxima onde a resistência do material atrasa a disrupção.'],
        ['Exibição ajustada por coesão', 'Entre os casos fluido e rígido', 'Comparação rápida de cenários neste simulador', 'Uma linha de risco prática para o tipo de satélite selecionado, não um interruptor universal de lei natural.'],
      ],
    },
    {
      type: 'title',
      text: 'Exemplo: Por Que uma Lua Gelada Perto de Saturno é Vulnerável',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saturno é muito menos denso que a Terra, mas é enorme. Um satélite gelado de baixa densidade tem autogravidade fraca comparada a uma lua rochosa compacta, então a razão de densidades ainda coloca o limite de Roche fluido longe das nuvens de Saturno. Essa é uma razão pela qual a física do limite de Roche é central para entender por que Saturno pode manter um amplo e brilhante sistema de anéis feito principalmente de partículas geladas em vez de uma grande lua remontada.',
    },
    {
      type: 'paragraph',
      html: 'Se você escolher Saturno e uma lua gelada na calculadora, então arrastar a órbita para dentro, observe a razão de segurança. Acima de <strong>1.00x</strong>, a órbita selecionada está fora do limite de Roche ativo. Perto de <strong>1.00x</strong>, a lua está em uma região de tangência de maré onde a perda de massa ou fratura se torna plausível. Abaixo de <strong>1.00x</strong>, a visualização muda para arcos de fragmentos e formação de anéis porque o modelo selecionado prediz disrupção.',
    },
    {
      type: 'title',
      text: 'Como Interpretar a Razão de Segurança',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A <strong>razão de segurança</strong> é a distância orbital atual dividida pelo limite de Roche selecionado. Uma razão de <strong>1.25x</strong> significa que a órbita está 25% mais distante que a estimativa de ruptura ativa. Uma razão de <strong>1.00x</strong> significa que a órbita está exatamente no limite de Roche selecionado. Uma razão de <strong>0.80x</strong> significa que o satélite está bem dentro da zona de disrupção selecionada.',
    },
    {
      type: 'table',
      headers: ['Razão de segurança', 'Estado exibido', 'Leitura prática'],
      rows: [
        ['Acima de 1.12x', 'Órbita estável', 'O satélite está fora do limite de Roche escolhido para este modelo simplificado.'],
        ['1.00x a 1.12x', 'Tangência de maré', 'O objeto está próximo o suficiente para que deformação, fratura ou perda de superfície possam importar.'],
        ['0.78x a 1.00x', 'Fragmentação', 'A autogravidade não é mais suficiente no modelo selecionado; correntes de detritos são viáveis.'],
        ['Abaixo de 0.78x', 'Sistema de anéis', 'O corpo original é representado como material disperso seguindo órbitas vizinhas.'],
      ],
    },
    {
      type: 'paragraph',
      html: 'A leitura do período orbital está incluída porque aproximações próximas não são apenas sobre distância. O material dentro da zona de disrupção segue órbitas rápidas e ligeiramente diferentes. Uma vez que os fragmentos se separam, o cisalhamento orbital os espalha ao redor do planeta, enquanto as colisões achatam e classificam os detritos em um disco semelhante a um anel.',
    },
    {
      type: 'title',
      text: 'Por Que o Limite de Roche Pode Criar Anéis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando um satélite se rompe fora do limite de Roche, os fragmentos podem eventualmente colidir e se reaglomerar em uma lua menor. Dentro do limite de Roche, fragmentos próximos não podem se fundir facilmente em um corpo autogravitante estável porque as forças de maré continuam separando o material. O resultado pode ser um anel duradouro, especialmente quando os detritos são gelados, colisionais e continuamente agitados por pequenas luas ou ressonâncias.',
    },
    {
      type: 'paragraph',
      html: 'A formação de anéis é gradual. Uma lua desintegrada primeiro se alonga, depois perde partículas e fragmentos maiores. Esses fragmentos ocupam raios orbitais ligeiramente diferentes, então eles derivam para frente ou para trás uns dos outros. Com o tempo, as colisões amortizam o movimento vertical e o material se assenta em um disco fino. É por isso que o simulador mostra uma transição de uma única lua para arcos e depois para um anel completo, em vez de tratar a ruptura como uma explosão instantânea.',
    },
    {
      type: 'title',
      text: 'Limitações Importantes Desta Calculadora do Limite de Roche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A calculadora é projetada para intuição científica rápida, não para projeto de missões de alta fidelidade. Satélites reais são afetados por rotação, excentricidade orbital, estratificação interna, resistência à tração, porosidade, temperatura, aquecimento de maré, fraturas prévias, impactos e ressonâncias com outras luas. Um monte de entulho giratório em uma órbita excêntrica pode falhar de forma diferente de uma rocha monolítica fria em uma órbita circular, mesmo que suas densidades médias pareçam similares.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use o limite fluido</strong> quando o objeto é fraco, gelado, fundido, altamente fraturado ou feito de agregado solto.',
        '<strong>Use o limite rígido</strong> como uma estimativa inferior para corpos compactos com resistência interna significativa.',
        '<strong>Leia o limite ativo</strong> como o limite de trabalho escolhido pelo simulador para o tipo de satélite selecionado.',
        '<strong>Não interprete o resultado</strong> como uma predição exata para uma lua real nomeada sem um modelo geofísico detalhado.',
      ],
    },
    {
      type: 'title',
      text: 'Perguntas Comuns que Esta Ferramenta Ajuda a Responder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use esta ferramenta quando quiser estimar perguntas como: A que distância uma lua pode chegar da Terra antes de se despedaçar? Por que os anéis de Saturno estão dentro de uma região do limite de Roche? Uma lua rochosa sobreviveria mais perto que uma lua gelada? Como a densidade muda o limite de Roche? Qual é a diferença entre o limite de Roche fluido e o rígido? Os controles são construídos em torno dessas comparações, então mudar uma variável mostra imediatamente como a distância de ruptura, a razão de segurança e a visualização de formação de anéis respondem.',
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
      applicationCategory: 'ScientificApplication',
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
