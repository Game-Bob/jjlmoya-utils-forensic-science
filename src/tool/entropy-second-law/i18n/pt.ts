import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-entropia-segunda-lei';
const title = 'Simulador de Entropia e Segunda Lei da Termodinâmica';
const description = 'Veja câmaras de partículas quente e fria se misturarem, equalizarem e impulsionarem a entropia para cima com um simulador visual de difusão e um gráfico de entropia ao vivo.';

const howTo = [
  {
    name: 'Ajuste as temperaturas esquerda e direita',
    text: 'Escolha uma câmara mais fria e uma mais quente para criar um desequilíbrio térmico inicial. Diferenças maiores tornam a aproximação irreversível ao equilíbrio mais fácil de enxergar.',
  },
  {
    name: 'Ajuste a abertura da barreira',
    text: 'Abra ou estreite a passagem entre as duas câmaras. Uma abertura maior permite que partículas e energia se difundam mais rapidamente, fazendo a curva de entropia subir mais depressa.',
  },
  {
    name: 'Observe a caixa de partículas',
    text: 'Partículas azuis representam movimento de baixa energia e partículas laranja representam movimento de alta energia. Conforme colisões e travessias se acumulam, a caixa se torna mais misturada e menos ordenada.',
  },
  {
    name: 'Leia o gráfico de entropia',
    text: 'Acompanhe como a mistura espacial e a equalização térmica se combinam em uma única pontuação crescente de entropia. A curva visa construir intuição sobre por que sistemas isolados evoluem para macroestados mais prováveis.',
  },
];

const faq = [
  {
    question: 'Por que a entropia aumenta neste simulador?',
    answer: 'O estado inicial é artificialmente ordenado: um lado é mais frio, o outro mais quente. Uma vez que a barreira permite a troca, existem muito mais arranjos misturados do que arranjos separados, então o sistema naturalmente se move para o macroestado esmagadoramente mais provável.',
  },
  {
    question: 'Isso prova a segunda lei exatamente?',
    answer: 'Não. Este é um modelo didático de partículas, não um código de laboratório de dinâmica molecular. Ele captura a intuição central por trás da difusão irreversível e da equalização térmica, que é a intenção de busca da maioria dos usuários quando perguntam por que a entropia tende a aumentar.',
  },
  {
    question: 'O que significam entropia espacial e entropia térmica aqui?',
    answer: 'A entropia espacial mede quão uniformemente as partículas estão distribuídas entre as câmaras esquerda e direita. A entropia térmica neste simulador mede quão pequena é a lacuna de energia entre as duas metades. A pontuação total combina ambas para que os usuários possam ver mistura e fluxo de calor ao mesmo tempo.',
  },
  {
    question: 'Por que as partículas continuam se movendo mesmo perto do equilíbrio?',
    answer: 'Equilíbrio não significa que o movimento para. Significa que o desequilíbrio macroscópico desaparece. As moléculas ainda se movem, colidem e trocam energia, mas não resta nenhuma direção persistente em grande escala para explorar.',
  },
  {
    question: 'A entropia pode alguma vez diminuir momentaneamente?',
    answer: 'Em sistemas microscópicos, pequenas flutuações são possíveis. Esta ferramenta visual suaviza essas flutuações e enfatiza a tendência estatística geral: em um grande sistema isolado, estados ordenados de baixa entropia são vastamente menos prováveis do que estados misturados.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    status: 'Mistura irreversível',
    results: 'Resultados do simulador de entropia',
    particleBox: 'Caixa de difusão de partículas',
    barrier: 'Barreira',
    entropyGraph: 'Gráfico de entropia ao longo do tempo',
    liveTrace: 'Traçado ao vivo',
    highEntropy: 'alta',
    midEntropy: 'média',
    lowEntropy: 'baixa',
    controls: 'Controles do simulador de entropia',
    leftTemperature: 'Temperatura esquerda',
    rightTemperature: 'Temperatura direita',
    gateAperture: 'Abertura da barreira',
    pause: 'Pausar',
    reset: 'Resetar estado',
    resume: 'Continuar',
    totalEntropy: 'Entropia total',
    particleBalance: 'Partículas esquerda/direita',
    spatialEntropy: 'Entropia espacial',
    thermalEntropy: 'Entropia térmica',
    energyGap: 'Lacuna de energia',
    noteLabel: 'Interpretação',
    stateGradient: 'Gradiente',
    stateMixing: 'Mistura',
    stateEquilibrium: 'Equilíbrio',
    note: 'A probabilidade do macroestado aponta para o máximo de desordem.',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador de entropia para a segunda lei da termodinâmica e difusão irreversível',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Use este simulador de entropia para visualizar uma das ideias mais importantes da física: sistemas isolados evoluem de estados artificialmente ordenados para estados misturados mais prováveis. Em vez de ler uma definição estática de entropia, você pode ver em tempo real uma câmara quente e uma câmara fria trocarem partículas e energia enquanto uma curva ao vivo acompanha o aumento da desordem.',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta é projetada para a intenção de busca mais comum por trás de perguntas como "por que a entropia aumenta", "como funciona a segunda lei" e "o que é difusão térmica". O objetivo não é apenas dar um slogan sobre desordem, mas conectar entropia com probabilidade, fluxo de calor, mistura e equilíbrio de uma forma que se sinta imediatamente visível.',
    },
    {
      type: 'title',
      text: 'O que a segunda lei da termodinâmica significa em termos práticos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A segunda lei diz que, para um sistema isolado, processos espontâneos se movem em direção a macroestados com entropia mais alta. Em linguagem cotidiana, isso significa que uma disposição térmica fortemente organizada, como partículas quentes de um lado e partículas frias do outro, não permanece separada a menos que trabalho seja continuamente fornecido para mantê-la.',
    },
    {
      type: 'paragraph',
      html: 'Isso não acontece porque a matéria "prefere o caos" em um sentido místico. Acontece porque existem enormemente mais configurações microscópicas correspondentes a um estado misturado do que a um estado separado. A entropia, portanto, conecta a termodinâmica com a contagem: quanto maior o número de microestados compatíveis, maior a entropia.',
    },
    {
      type: 'title',
      text: 'Como este simulador de difusão de entropia funciona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A caixa de partículas começa em uma configuração de baixa entropia com um desequilíbrio de temperatura através de uma barreira. Quando a passagem entre as câmaras está aberta, as partículas atravessam, colidem e transportam energia de um lado para o outro. A simulação rastreia dois ingredientes intuitivos: a <strong>entropia espacial</strong>, que aumenta à medida que as partículas se tornam menos segregadas, e a <strong>entropia térmica</strong>, que aumenta à medida que as distribuições de energia esquerda e direita se tornam menos diferentes.',
    },
    {
      type: 'paragraph',
      html: 'A pontuação total de entropia mostrada na tela é um proxy didático construído a partir desses dois ingredientes. Não é uma função de estado de nível laboratorial e não pretende reproduzir a mecânica estatística completa. Seu propósito é ajudar os usuários a construir intuição correta: o fluxo de calor irreversível e a difusão movem o sistema em direção ao equilíbrio porque o equilíbrio corresponde a muito mais configurações acessíveis.',
    },
    {
      type: 'table',
      headers: ['Sinal visual', 'O que representa', 'Por que é importante'],
      rows: [
        ['Partículas azuis vs laranja', 'Energia cinética relativa', 'Mostra que diferenças de temperatura são realmente diferenças no movimento microscópico médio.'],
        ['Abertura da barreira', 'Facilidade de troca entre as câmaras', 'Permite ver por que a taxa de difusão muda quando a via de transporte é alterada.'],
        ['Medidor de entropia espacial', 'Uniformidade da distribuição das partículas', 'Explica que apenas a mistura já torna o macroestado mais provável.'],
        ['Medidor de entropia térmica', 'Quão pequena se torna a lacuna de energia', 'Mostra que o equilíbrio não é apenas sobre posição, mas também sobre compartilhamento de energia.'],
        ['Curva de entropia', 'Tendência ao longo do tempo', 'Transforma a ideia abstrata de irreversibilidade em um processo de relaxação unidirecional visível.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que a entropia pode aumentar mesmo que cada partícula obedeça a movimento simples',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Estudantes frequentemente assumem que a segunda lei requer atrito, intenção ou uma "força especial da seta do tempo". O ponto mais profundo é estatístico. Cada partícula segue regras locais, mas quando muitas partículas interagem, o número de macroestados misturados domina completamente o número de macroestados ordenados. O sistema, portanto, passa quase todo o seu tempo em configurações misturadas e apenas uma fração extremamente pequena em configurações nitidamente separadas.',
    },
    {
      type: 'paragraph',
      html: 'É por isso que uma gota de corante se espalha na água, por que uma sala equaliza a temperatura depois que um aquecedor é desligado, e por que um objeto quente esfria em contato com um mais frio. O processo reverso não é proibido pelo movimento newtoniano em um sentido microscópico estrito, mas é tão estatisticamente improvável para sistemas grandes que nunca é observado em escalas humanas.',
    },
    {
      type: 'title',
      text: 'Entropia, equilíbrio e conceitos equivocados comuns',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Entropia não é apenas "bagunça":</strong> a ideia mais precisa é o número de configurações microscópicas compatíveis com a mesma descrição macroscópica.',
        '<strong>Equilíbrio não significa imobilidade:</strong> as partículas continuam se movendo constantemente, mas seus desequilíbrios em larga escala se cancelam.',
        '<strong>O fluxo de calor é direcional porque a probabilidade é direcional:</strong> existem esmagadoramente mais maneiras de compartilhar energia do que mantê-la nitidamente separada.',
        '<strong>Entropia baixa não é impossível:</strong> ela simplesmente requer restrições, preparação ou trabalho de fora do sistema isolado.',
        '<strong>Este simulador é qualitativo:</strong> ele fornece intuição física, não calorimetria exata, funções de partição ou coeficientes de transporte molecular.',
      ],
    },
    {
      type: 'title',
      text: 'Quando usar este simulador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use-o para demonstrações em sala de aula, revisão de física, educação química, escrita científica e explicações conceituais rápidas. É especialmente útil quando alguém entende que o calor flui do quente para o frio, mas ainda não vê como isso se conecta com probabilidade, contagem de macroestados e a segunda lei da termodinâmica.',
    },
    {
      type: 'paragraph',
      html: 'Se seu objetivo é um cálculo termodinâmico rigoroso para um gás real, ciclo de motor ou sistema de laboratório, você precisará de equações de estado, condições de contorno e parâmetros com base experimental. Se seu objetivo é intuição sobre por que a difusão é irreversível e por que a entropia tende a aumentar, este simulador foi construído exatamente para essa pergunta.',
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
