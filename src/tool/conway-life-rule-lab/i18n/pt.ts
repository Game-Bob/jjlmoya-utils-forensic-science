import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'laboratorio-regras-jogo-vida-conway';
const title = 'Laboratório de Regras do Jogo da Vida de Conway';
const description = 'Jogue, edite e compare autômatos celulares ao estilo Conway com regras B/S, sementes de padrões, métricas ao vivo e grade responsiva.';

const howTo = [
  {
    name: 'Semear o tabuleiro',
    text: 'Escolha um padrão como um planador, pulsar ou canhão de Gosper, coloque-o na grade ou gere uma população aleatória.',
  },
  {
    name: 'Executar a simulação',
    text: 'Use os controles de reprodução, pausa, passo e tempo para observar como nascimentos, mortes, densidade e estabilidade evoluem.',
  },
  {
    name: 'Mudar a regra',
    text: 'Alterne entre predefinições ou digite uma regra B/S como B3/S23, B36/S23 ou B3678/S34678 para comparar diferentes autômatos.',
  },
];

const faq = [
  {
    question: 'O que é notação B/S no Jogo da Vida?',
    answer: 'A notação B/S lista os contagens de vizinhos que criam uma nova célula viva e os contagens que permitem a uma célula viva existente sobreviver. O Jogo da Vida de Conway é B3/S23: células mortas nascem com exatamente três vizinhos, e células vivas sobrevivem com dois ou três vizinhos.',
  },
  {
    question: 'Por que este é chamado de laboratório de regras em vez de só simulador?',
    answer: 'A regra clássica de Conway está incluída, mas o simulador é construído para comparar famílias de autômatos celulares do tipo Life. Editar as contagens de nascimento e sobrevivência muda o comportamento de longo prazo, produzindo replicadores, ondas, ilhas congeladas, crescimento caótico ou extinção.',
  },
  {
    question: 'O que significa estabilidade no simulador?',
    answer: 'A estabilidade estima quanto a colônia mudou durante a última geração. Alta estabilidade significa poucas células nascidas ou mortas em relação à população; baixa estabilidade significa que o tabuleiro está turbulento ou se reorganizando rapidamente.',
  },
  {
    question: 'O tabuleiro tem bordas?',
    answer: 'A simulação usa envolvimento toroidal: a borda esquerda se conecta à borda direita e o topo se conecta ao fundo. Isso mantém os padrões se movendo naturalmente sem desaparecer em bordas rígidas.',
  },
  {
    question: 'Posso desenhar meu próprio padrão inicial?',
    answer: 'Sim. Pause a simulação e clique ou toque nas células do tabuleiro para alterná-las. Você pode combinar células desenhadas à mão com padrões embutidos e então executar o resultado sob qualquer predefinição de regra.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    boardLabel: 'Grade de autômatos celulares tipo Life',
    play: 'Reproduzir',
    pause: 'Pausar',
    step: 'Passo',
    clear: 'Tela em branco',
    randomize: 'Aleatório',
    ruleLabel: 'Notação da regra',
    ruleHelp: 'Nascimento / sobrevivência',
    speedLabel: 'Ritmo',
    densityLabel: 'Densidade inicial',
    patternLabel: 'Padrão',
    placePattern: 'Inserir padrão',
    generation: 'Geração',
    population: 'População',
    density: 'Densidade',
    stability: 'Estabilidade',
    births: 'Nascimentos',
    deaths: 'Mortes',
    achievementsLabel: 'Registro de laboratório',
    achievementPulsar: 'Pulsar',
    achievementPulsarDescription: 'Oscilação de período 2 detectada',
    achievementImmortal: 'Imortal',
    achievementImmortalDescription: 'Geração 500 alcançada com estabilidade total',
    achievementBigBang: 'Big Bang',
    achievementBigBangDescription: 'Uma semente aleatória esparsa superou 1.000 células vivas',
    presetClassic: 'Conway clássico',
    presetHighlife: 'HighLife',
    presetSeeds: 'Seeds',
    presetDayNight: 'Dia e noite',
    patternGlider: 'Planador',
    patternGosper: 'Canhão de Gosper',
    patternPulsar: 'Pulsar',
    patternRPentomino: 'R-pentominó',
    colonyStatus: 'Sinal da colônia',
    statusFrozen: 'estável',
    statusGrowing: 'expandindo',
    statusFading: 'declinando',
    statusChaotic: 'volátil',
    invalidRule: 'Use notação B/S como B3/S23.',
  },
  seo: [
    { type: 'title', text: 'Simulador do Jogo da Vida de Conway com regras editáveis', level: 2 },
    { type: 'paragraph', html: 'Este laboratório de regras permite executar o autômato celular clássico e depois mudar e comparar suas regras. O tabuleiro suporta desenho direto, posicionamento de padrões, sementes aleatórias, inspeção passo a passo, tempo variável e medições ao vivo de população, densidade, nascimentos, mortes e estabilidade.' },
    { type: 'title', text: 'Como as regras B/S mudam o jogo', level: 3 },
    { type: 'paragraph', html: 'Autômatos celulares do tipo Life são frequentemente escritos em <strong>notação B/S</strong>. O lado B define quantos vizinhos vivos uma célula morta precisa para nascer; o lado S define quantos vizinhos uma célula viva precisa para sobreviver. A regra original de Conway, <strong>B3/S23</strong>, é famosa porque fica em uma região estreita entre extinção e crescimento descontrolado.' },
    { type: 'title', text: 'Lendo as métricas ao vivo', level: 3 },
    { type: 'paragraph', html: 'População e densidade mostram quantas células estão vivas, mas não contam a história completa. Nascimentos e mortes expõem o nível de atividade atual, enquanto estabilidade estima se a colônia está se estabilizando em um oscilador, congelando em estruturas estáticas ou permanecendo turbulenta.' },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'EducationalApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
