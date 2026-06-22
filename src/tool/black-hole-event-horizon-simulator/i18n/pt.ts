import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-horizonte-eventos';
const title = 'Simulador do Horizonte de Eventos de um Buraco Negro';
const description = 'Explore o horizonte de eventos de um buraco negro com cálculos interativos de massa, distância orbital, dilatação temporal, esfera de fótons, velocidade de escape e raio de Schwarzschild.';

const howTo = [
  {
    name: 'Escolha a massa do buraco negro',
    text: 'Mova o controle deslizante de massa de um buraco negro de massa estelar para um supermassivo e veja o raio de Schwarzschild escalar em tempo real.',
  },
  {
    name: 'Aproxime a sonda do horizonte',
    text: 'Ajuste a distância em raios de Schwarzschild para comparar uma órbita externa segura, a região da esfera de fótons e a borda do horizonte de eventos.',
  },
  {
    name: 'Inspecione os efeitos relativísticos',
    text: 'Leia a velocidade de escape, a dilatação gravitacional do tempo, o desvio para o vermelho e o período orbital para entender por que a intuição comum falha perto do horizonte.',
  },
  {
    name: 'Compare os raios característicos',
    text: 'Use os anéis guia do horizonte de eventos, da esfera de fótons e da ISCO para compreender os diferentes limites ao redor de um buraco negro sem rotação.',
  },
];

const faq = [
  {
    question: 'O que é o horizonte de eventos de um buraco negro?',
    answer: 'O horizonte de eventos é o limite onde a velocidade de escape atinge a velocidade da luz. Uma vez que um objeto o cruza, nenhum sinal se movendo na velocidade da luz ou abaixo dela pode retornar ao universo exterior.',
  },
  {
    question: 'O que significa o raio de Schwarzschild?',
    answer: 'O raio de Schwarzschild é o raio do horizonte de eventos para um buraco negro sem rotação nem carga elétrica. Ele cresce linearmente com a massa, então dobrar a massa dobra o raio do horizonte.',
  },
  {
    question: 'O que é a esfera de fótons?',
    answer: 'A esfera de fótons é uma região a 1,5 raios de Schwarzschild onde a luz pode orbitar o buraco negro em uma trajetória instável. Pequenas perturbações fazem com que os fótons escapem para fora ou caiam para dentro.',
  },
  {
    question: 'O que é a ISCO?',
    answer: 'ISCO significa "órbita circular estável mais interna" (innermost stable circular orbit). Para um buraco negro sem rotação, ela está a 3 raios de Schwarzschild (ou 6 raios gravitacionais) e marca a última órbita circular estável para partículas com massa.',
  },
  {
    question: 'Por que a dilatação temporal aumenta perto do horizonte?',
    answer: 'Na geometria de Schwarzschild, relógios mais profundos no campo gravitacional marcam o tempo mais lentamente em comparação com observadores distantes. O fator exibido se aproxima de zero à medida que a sonda se aproxima do horizonte de eventos.',
  },
  {
    question: 'Este simulador pode modelar um buraco negro em rotação?',
    answer: 'Não. Ele usa a solução de Schwarzschild, que assume ausência de rotação e carga elétrica. Buracos negros astrofísicos reais frequentemente giram, e a rotação altera o tamanho do horizonte, a localização da ISCO e o comportamento do disco.',
  },
  {
    question: 'Por que os buracos negros supermassivos são menos violentos no horizonte?',
    answer: 'O gradiente de maré no horizonte diminui à medida que a massa do buraco negro aumenta. Um pequeno buraco negro de massa estelar pode esticar objetos violentamente perto do horizonte, enquanto um buraco negro supermassivo pode ter um gradiente local mais suave nesse limite.',
  },
  {
    question: 'A visualização mostra uma imagem real de um buraco negro?',
    answer: 'É um diagrama educacional, não uma observação com traçado de raios (ray-tracing). Os anéis e o disco estão escalados para os raios de Schwarzschild simplificados para que as zonas físicas sejam fáceis de comparar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualTitle: 'Mapa de campo do horizonte de eventos',
    visualCaption: 'A sonda se move através da geometria de Schwarzschild escalada. Os anéis guia brilhantes marcam o horizonte, a esfera de fótons e a órbita circular estável mais interna.',
    controlsTitle: 'Controles do buraco negro',
    eventHorizon: 'Horizonte de eventos',
    photonSphere: 'Esfera de fótons',
    isco: 'ISCO',
    rsLabel: 'Raio de Schwarzschild',
    diameterLabel: 'Diâmetro',
    timeLabel: 'Dilatação temporal',
    redshiftLabel: 'Desvio para o vermelho',
    statusSafe: 'Fora da região de órbita estável',
    statusPhoton: 'Dentro da zona da esfera de fótons',
    statusInside: 'No limite do horizonte',
    diameter: 'Diâmetro do horizonte',
    lightCrossing: 'Tempo de travessia da luz',
    timeDilation: 'Ritmo do relógio vs observador distante',
    redshift: 'Desvio para o vermelho gravitacional',
    mass: 'Massa do buraco negro',
    distance: 'Distância da sonda',
    speed: 'Velocidade orbital da sonda',
    escapeVelocity: 'Velocidade de escape',
    orbitalPeriod: 'Período orbital da sonda',
    tidalGradient: 'Gradiente de maré',
    kilometerUnit: 'km',
    millisecondUnit: 'ms',
    secondUnit: 's',
    lightSpeedUnit: '% c',
    tidalUnit: 'g/m',
    solarMassesUnit: 'massas solares',
    rsUnit: 'Rs',
    zeroKilometers: '0 km',
    zeroMilliseconds: '0 ms',
    zeroMultiplier: '0x',
    zeroLightSpeed: '0% c',
    zeroTidal: '0 g/m',
    initialMassOutput: '10 massas solares',
    initialDistanceOutput: '3.0 Rs',
    initialSpeedOutput: '32% c',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador do horizonte de eventos de um buraco negro para raio de Schwarzschild, esfera de fótons e dilatação temporal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador do horizonte de eventos de um buraco negro transforma as ideias fundamentais dos buracos negros de Schwarzschild em um modelo visual interativo. Altere a massa do buraco negro, mova uma sonda para dentro ou para fora e compare como o horizonte de eventos, a esfera de fótons, a órbita circular estável mais interna, a velocidade de escape, o desvio para o vermelho gravitacional e a dilatação temporal respondem.',
    },
    {
      type: 'paragraph',
      html: 'O simulador foi construído para estudantes de astronomia, professores de física, divulgadores científicos e aprendizes curiosos que desejam mais do que uma fórmula estática. A exibição conecta os números a um diagrama espacial para que você possa ver por que o horizonte de eventos não é uma superfície material, por que os fótons têm uma órbita instável especial e por que o movimento circular estável para antes de o horizonte ser alcançado.',
    },
    {
      type: 'title',
      text: 'Como o raio do horizonte de eventos é calculado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para um buraco negro sem rotação nem carga, o raio do horizonte de eventos é o <strong>raio de Schwarzschild</strong>. Ele é calculado como <strong>Rs = 2GM / c^2</strong>, onde G é a constante gravitacional, M é a massa do buraco negro e c é a velocidade da luz. Uma massa solar corresponde a um raio de Schwarzschild de aproximadamente 2,95 quilômetros.',
    },
    {
      type: 'paragraph',
      html: 'Como o raio de Schwarzschild escala linearmente com a massa, um buraco negro de 10 massas solares tem um raio próximo de 29,5 quilômetros, enquanto um buraco negro de 4 milhões de massas solares como Sagittarius A* tem um raio de cerca de 11,8 milhões de quilômetros. O controle deslizante de massa usa uma escala logarítmica para que tanto os casos de massa estelar quanto os supermassivos caibam no mesmo controle.',
    },
    {
      type: 'table',
      headers: ['Região', 'Raio em raios de Schwarzschild', 'O que significa'],
      rows: [
        ['Horizonte de eventos', '1.0 Rs', 'O limite unidirecional onde a velocidade de escape iguala a velocidade da luz.'],
        ['Esfera de fótons', '1.5 Rs', 'A órbita circular instável para a luz ao redor de um buraco negro de Schwarzschild.'],
        ['ISCO', '3.0 Rs', 'A órbita circular estável mais interna para partículas com massa.'],
        ['Campo fraco', '6 Rs e além', 'A gravidade ainda é forte, mas as órbitas circulares são mais fáceis de sustentar.'],
      ],
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