import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-problema-tres-corpos';
const title = 'Simulador do Problema dos Três Corpos';
const description = 'Simule três corpos gravitacionais em um plano bidimensional com massas editáveis, vetores de velocidade, rastros e predefinições estáveis ou caóticas.';

const howTo = [
  {
    name: 'Escolha uma predefinição orbital',
    text: 'Comece com a órbita em forma de oito para uma referência estável, o triângulo de Lagrange para um equilíbrio rotatório ou a predefinição de estilingue para um encontro visivelmente caótico.',
  },
  {
    name: 'Ajuste massas e vetores de velocidade',
    text: 'Use os controles deslizantes de cada corpo para alterar a massa e os componentes iniciais da velocidade. Pequenas mudanças podem preservar um padrão, deformá-lo ou destruí-lo completamente.',
  },
  {
    name: 'Leia os diagnósticos',
    text: 'Observe a energia total, a separação mais próxima e mais distante e o centro de massa para entender se a órbita numérica permanece limitada ou está se desintegrando.',
  },
];

const faq = [
  {
    question: 'O que é o problema dos três corpos?',
    answer: 'O problema dos três corpos pergunta como três massas se movem quando cada corpo atrai gravitacionalmente os outros dois. Diferentemente do problema de dois corpos, não existe uma equação geral de forma fechada que resolva toda configuração possível, então a maioria dos casos práticos é explorada com integração numérica.',
  },
  {
    question: 'Por que as órbitas de três corpos são instáveis?',
    answer: 'Muitos sistemas de três corpos são sensíveis a condições iniciais. Uma pequeníssima mudança na velocidade, posição ou massa altera o momento dos encontros próximos, e esses encontros podem trocar energia dramaticamente. O resultado é um sistema que pode permanecer limitado por um tempo e então ejetar subitamente um corpo.',
  },
  {
    question: 'O que a predefinição em forma de oito mostra?',
    answer: 'A predefinição em forma de oito é uma famosa solução periódica para três massas iguais. Cada corpo segue o mesmo caminho com um deslocamento de fase, demonstrando que o problema dos três corpos pode conter ilhas estáveis elegantes dentro de uma paisagem caótica muito maior.',
  },
  {
    question: 'Este é um simulador astronômico fisicamente exato?',
    answer: 'Esta ferramenta usa um modelo newtoniano suavizado e um passo do tipo Verlet de velocidade simplético para que o movimento pareça fiel e estável para aprendizado. Foi projetada para exploração interativa em vez de previsão de efemérides de alta precisão.',
  },
  {
    question: 'Como devo interpretar a energia total?',
    answer: 'Energia total negativa geralmente indica um sistema ligado, enquanto energia próxima de zero pode facilitar a fuga. Em uma simulação numérica, uma deriva energética grande também alerta que o passo de tempo ou a geometria do encontro está sobrecarregando o integrador.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    kicker: 'Laboratório de caos gravitacional',
    canvasLabel: 'Tela interativa bidimensional de órbita de três corpos',
    presetsLabel: 'Predefinições orbitais',
    figureEightPreset: 'Figura em oito',
    lagrangePreset: 'Triângulo de Lagrange',
    slingshotPreset: 'Estilingue',
    pauseButton: 'Pausar',
    playButton: 'Reproduzir',
    resetButton: 'Reiniciar',
    speedLabel: 'Velocidade da simulação',
    trailLabel: 'Comprimento do rastro',
    massLabel: 'Massa',
    velocityXLabel: 'Velocidade X',
    velocityYLabel: 'Velocidade Y',
    energyLabel: 'Energia total',
    separationLabel: 'Intervalo de separação',
    centerMassLabel: 'Centro de massa',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador interativo do problema dos três corpos para caos orbital',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O problema dos três corpos é uma das demonstrações mais claras de que leis simples podem produzir movimentos complicados. A gravidade newtoniana fornece uma regra de força compacta, mas no momento em que um terceiro corpo massivo se junta ao sistema, cada órbita remodela continuamente as outras duas. Este simulador permite que você experimente diretamente essa instabilidade: escolha uma configuração conhecida, ajuste massas e vetores de velocidade e observe se os corpos formam uma órbita repetitiva, um triângulo rotatório ou um evento de dispersão caótica.',
    },
    {
      type: 'title',
      text: 'O que as predefinições demonstram',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Predefinição', 'Ideia física', 'O que observar'],
      rows: [
        ['<strong>Figura em oito</strong>', 'Uma solução periódica de massas iguais onde os três corpos compartilham o mesmo laço.', 'A órbita permanece organizada apenas quando a simetria e o equilíbrio de velocidades são cuidadosamente preservados.'],
        ['<strong>Triângulo de Lagrange</strong>', 'Três corpos ocupam um triângulo equilátero que gira em torno do centro de massa.', 'O equilíbrio de massas e a velocidade tangencial impedem que o triângulo colapse para dentro.'],
        ['<strong>Estilingue</strong>', 'Um encontro próximo transfere energia entre os corpos.', 'Um corpo pode ganhar velocidade enquanto outro se torna mais fortemente ligado, revelando por que ejeções caóticas ocorrem.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que pequenas mudanças importam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Em uma órbita de dois corpos, o centro de massa e a elipse orbital fornecem uma imagem geométrica estável. Em um sistema de três corpos, passagens próximas agem como negociações gravitacionais: um corpo pode pegar emprestada energia orbital, mudar bruscamente de direção ou converter um laço ordenado em um evento de dispersão. Essa sensibilidade é a razão pela qual sistemas astrofísicos reais, como estrelas triplas, encontros planeta-lua e planetesimais do sistema solar primitivo, frequentemente exigem integração numérica em vez de uma única fórmula simples.',
    },
    {
      type: 'title',
      text: 'Como usar os diagnósticos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Energia total</strong> ajuda você a julgar se o sistema está ligado e se a integração numérica está se mantendo estável.',
        '<strong>Intervalo de separação</strong> mostra as distâncias de par mais próximas e mais distantes, tornando quase colisões e ejeções fáceis de detectar.',
        '<strong>Centro de massa</strong> deve permanecer relativamente estável quando o momento inicial está equilibrado; deriva sugere uma configuração intencionalmente assimétrica ou um vetor de velocidade alterado.',
        '<strong>Comprimento do rastro</strong> revela a estrutura de longo prazo: rastros curtos enfatizam a interação atual, enquanto rastros longos expõem laços repetitivos e precessão orbital lenta.',
      ],
    },
    {
      type: 'title',
      text: 'Modelo numérico usado na ferramenta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O simulador usa atração newtoniana de quadrado inverso com um pequeno termo de suavização que impede explosões visuais durante passagens extremamente próximas. O movimento é avançado com um passo do tipo Verlet de velocidade, uma escolha comum para demonstrações orbitais porque lida com o comportamento energético melhor do que uma simples atualização de Euler. O resultado é um modelo educacional responsivo que torna visível o comportamento qualitativo do problema dos três corpos sem pretender substituir softwares profissionais de mecânica celeste.',
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
