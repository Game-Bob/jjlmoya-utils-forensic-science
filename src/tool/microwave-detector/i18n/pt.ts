const slug = 'detetor-fugas-micro-ondas';
const description = 'Analise se o seu micro-ondas está a verter radiação medindo a interferência em tempo real na sua rede WiFi. Uma ferramenta de segurança científica.';
const title = 'Detetor de Fugas de Microondas: Visualizador de Interferências WiFi';
const howTo = [
    {
      name: 'Ligue-se a uma rede WiFi de 2,4 GHz',
      text: 'Certifique-se de que o seu telemóvel ou portátil NÃO está ligado à banda de 5 GHz para que a interferência seja mensurável.',
    },
    {
      name: 'Inicie o teste de latência base',
      text: 'Prima o botão de início com o micro-ondas desligado para estabelecer uma linha de base de ligação estável.',
    },
    {
      name: 'Ligue o micro-ondas',
      text: 'Aqueça um copo de água durante 30-60 segundos e fique perto do aparelho com o seu dispositivo.',
    },
    {
      name: 'Analise o gráfico em tempo real',
      text: 'Observe se a latência sobe acima dos 100-200ms ou se ocorre perda de pacotes enquanto o aparelho está a funcionar.',
    },
  ];
const faq = [
    {
      question: 'Como é que um website pode detetar o meu micro-ondas?',
      answer: 'Não utilizamos sensores mágicos, mas sim a latência da rede. Tanto o WiFi de 2,4 GHz como os fornos micro-ondas operam na mesma frequência (aprox. 2450 MHz). Se a blindagem do micro-ondas falhar, gera "ruído" que colide com o WiFi, aumentando drasticamente a latência (ping).',
    },
    {
      question: 'É perigoso se o meu micro-ondas tiver uma fuga?',
      answer: 'Pequenas interferências WiFi são normais e não implicam um risco de saúde imediato, pois a potência decai rapidamente com a distância. No entanto, uma fuga massiva indica uma má vedação da porta ou da malha, que deve ser verificada por segurança técnica.',
    },
    {
      question: 'Porque é que o teste não funciona com WiFi de 5 GHz?',
      answer: 'Porque o WiFi de 5 GHz opera numa banda de frequência muito mais elevada do que um micro-ondas. Para que o teste seja eficaz, o seu dispositivo deve estar ligado à rede de 2,4 GHz do router.',
    },
    {
      question: 'O que significam os picos de latência no gráfico?',
      answer: 'Picos constantes durante o funcionamento do micro-ondas sugerem que o sinal eletromagnético está a "escapar" e a saturar o ar, impedindo que os pacotes de dados WiFi cheguem a tempo.',
    },
  ];
import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiado',
    noHistory: 'Sem histórico',
    load: 'Carregar',
    delete: 'Eliminar',
    microwaveDetection: 'Deteção de Micro-ondas',
    shieldingAnalysis: 'Análise de Blindagem',
    startTest: 'Iniciar Teste',
    stopTest: 'Parar Teste',
    waitingForStart: 'A aguardar início...',
    detectingInterference: 'A detetar interferências...',
    baseLevel: 'Nível Base',
    activeLevel: 'Nível Ativo',
    leakProbability: 'Probabilidade de Fuga',
    lowLeak: 'Baixa',
    mediumLeak: 'Média',
    highLeak: 'Alta',
    pingLabel: 'Latência (ms)',
    packetLossLabel: 'Perda de Pacotes (%)',
    rfInterferenceMonitor: 'Monitor de Interferência RF',
    mwLeakDetector: 'MW LEAK DETECTOR v2.0',
    jitterUnit: 'ms / jitter',
    systemReady: 'Sistema Pronto',
    physicalRequirement: 'Requisito Físico',
    physicalDesc: 'Este detetor utiliza a interferência na banda de 2,4GHz (a frequência do micro-ondas). Para funcionar corretamente, certifique-se de que está ligado a uma rede WiFi de 2,4GHz (não 5GHz/6GHz) ou utilize o seu telemóvel perto do aparelho.',
    understandStart: 'Compreendido, Iniciar Varredura',
    rfInterferenceTitle: 'Monitor de Interferência',
    connectToAnalyze: 'Ligue-se para iniciar a análise de interferência térmica.',
    audioFeedback: 'Feedback de Áudio',
    muteUnmute: 'MUDO / SOM',
    static: 'Estático',
  },
  seo: [
    {
      type: 'title',
      text: 'FÍSICA DAS ONDAS: O seu micro-ondas verte realmente radiação?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O micro-ondas é o eletrodoméstico mais incompreendido da cozinha moderna. Odiado pelos puristas e amado pelos pragmáticos, esconde uma batalha constante entre a energia contida e o mundo exterior.',
    },
    {
      type: 'paragraph',
      html: 'De um ponto de vista puramente físico, um forno micro-ondas é um <strong>ressonador de cavidade</strong> concebido para bombardear as moléculas de água com radiação eletromagnética numa frequência muito específica: <strong>2,45 GHz</strong>. Esta frequência não é arbitrária; é necessária para causar a oscilação dipolar das partículas de água, gerando calor através da fricção. O problema é que esta é exatamente a mesma frequência utilizada pelo padrão WiFi 802.11b/g/n.',
    },
    {
      type: 'title',
      text: 'Interferência Eletromagnética (EMI)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Qualquer dispositivo WiFi a operar na banda de 2,4 GHz compete pelo mesmo "espaço" que o seu micro-ondas. Num forno perfeito, a <strong>Gaiola de Faraday</strong> (a malha metálica que vê na porta e nas paredes internas) deveria conter 100% da energia.',
    },
    {
      type: 'paragraph',
      html: 'No entanto, nenhuma gaiola é perfeita a longo prazo. As vedações das portas, os fechos magnéticos e o desgaste do metal podem permitir a fuga de pequenas quantidades de energia. Embora estes níveis estejam geralmente muito abaixo dos limites de segurança para os seres humanos, são <strong>gigantescos</strong> para uma placa de rede WiFi, causando latência, perda de pacotes e o característico "jitter" que a nossa ferramenta mede.',
    },
    {
      type: 'title',
      text: 'O Teste Caseiro da Gaiola de Faraday',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Existe uma forma analógica muito simples de verificar o estado básico da blindagem do seu forno, embora seja menos precisa do que a nossa medição digital de jitter:',
    },
    {
      type: 'list',
      items: [
        '<strong>Passo 1 - O Telemóvel:</strong> Coloque o seu telemóvel dentro do micro-ondas (<strong>EM CIRCUNSTÂNCIA ALGUMA LIGUE O FORNO!</strong> Apenas feche a porta).',
        '<strong>Passo 2 - A Chamada:</strong> Tente ligar para esse telemóvel a partir de outro dispositivo. Se o telemóvel tocar, a gaiola de Faraday está defeituosa ou não está sintonizada para frequências celulares. Se der "fora de cobertura", a blindagem está a funcionar corretamente.',
      ],
    },
    {
      type: 'title',
      text: 'Mitos vs Realidade Científica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>"Os micro-ondas alteram a estrutura molecular da água"</strong> - FALSO. A radiação micro-ondas é <em>não ionizante</em>. Não tem energia suficiente para quebrar ligações químicas ou alterar o DNA. Simplesmente faz vibrar as moléculas de água, aumentando a sua energia cinética (temperatura).',
        '<strong>"A radiação acumula-se nos alimentos"</strong> - FALSO. Os micro-ondas são como a luz: assim que desliga o interruptor, eles desaparecem. A comida quente não emite radiação micro-ondas, apenas radiação infravermelha (calor), tal como uma fogueira ou uma frigideira.',
        '<strong>"Observar o prato a girar danifica os olhos"</strong> - PARCIALMENTE VERDADEIRO. O vidro da porta é concebido com uma malha que bloqueia os comprimentos de onda de 2,45 GHz. No entanto, se a malha estiver danificada, o vidro não travará os micro-ondas. O cristalino do olho é muito sensível ao calor e tem má circulação sanguínea, pelo que uma exposição direta prolongada (perto de uma fuga) pode causar cataratas térmicas.',
      ],
    },
    {
      type: 'title',
      text: 'Como funciona este detetor digital?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A nossa ferramenta não mede a radiação diretamente (os smartphones não têm sensores para isso), mas mede o <strong>sintoma principal</strong>. Quando uma molécula de radiação de 2,45 GHz escapa do forno, ela "colide" com o sinal WiFi do seu dispositivo. Isto causa:',
    },
    {
      type: 'list',
      items: [
        '<strong>Retransmissões de Pacotes:</strong> O router deteta que a mensagem chegou corrompida e tem de a reenviar, aumentando a latência.',
        '<strong>Variação de Jitter:</strong> Esta é a medida da instabilidade no tempo de resposta. Um jitter elevado é um sinal inequívoco de interferência externa massiva.',
        '<strong>Queda de Desempenho:</strong> A velocidade de transferência cai a pique devido à saturação do espetro de rádio.',
        '<strong>Ruído de Fundo:</strong> O micro-ondas injeta ruído que eleva o "piso de ruído", tornando difícil para o dispositivo distinguir entre dados reais e o caos radioativo.',
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
      description: description,
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

