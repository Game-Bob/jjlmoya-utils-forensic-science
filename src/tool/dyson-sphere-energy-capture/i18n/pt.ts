import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-energia-esfera-dyson';
const title = 'Simulador de Captura de Energia da Esfera de Dyson';
const description = 'Estime designs de enxames, anéis, cascas e nuvens de estáticos de Dyson para diferentes estrelas. Calcule a potência capturada, o raio orbital, a massa de material e a cobertura necessária para atingir uma escala Kardashev alvo.';

const howTo = [
  {
    name: 'Escolha um tipo de estrela',
    text: 'Comece com uma anã M, uma estrela semelhante ao Sol, uma estrela tipo A, uma gigante vermelha ou uma gigante azul. O simulador usa valores representativos de luminosidade e massa para estimar o raio do coletor e o período orbital.',
  },
  {
    name: 'Selecione a arquitetura da megaestrutura',
    text: 'Compare um enxame de Dyson, um anel equatorial, uma casca rígida ou uma nuvem de espelhos estáticos. Cada design tem diferentes eficiências de captura, densidade de material e suposições de estabilidade.',
  },
  {
    name: 'Ajuste a cobertura e a temperatura de operação',
    text: 'Aumente a cobertura para capturar mais potência estelar e ajuste a temperatura de operação para aproximar ou afastar os coletores da estrela.',
  },
  {
    name: 'Defina um alvo Kardashev',
    text: 'Use o controle deslizante de alvo para ver quanto da estrela deve ser coberto para atingir uma meta de potência na escala civilizacional.',
  },
];

const faq = [
  {
    question: 'Qual é a diferença entre uma esfera de Dyson e um enxame de Dyson?',
    answer: 'Uma esfera de Dyson rígida seria uma casca contínua em torno de uma estrela, enquanto um enxame de Dyson é uma grande coleção de coletores orbitais independentes. A maioria das discussões de engenharia favorece os enxames, porque uma casca sólida seria estruturalmente instável e extremamente intensiva em materiais.',
  },
  {
    question: 'Como o simulador escolhe o raio ótimo?',
    answer: 'Ele estima a distância onde os coletores, irradiando de ambos os lados, atingem a temperatura de operação selecionada sob a luminosidade estelar escolhida. Coletores mais quentes podem orbitar mais perto, enquanto coletores mais frios requerem raios maiores.',
  },
  {
    question: 'O que a classificação Kardashev significa aqui?',
    answer: 'O valor Kardashev é calculado a partir da potência capturada usando a fórmula logarítmica K = (log10(P) - 6) / 10, onde P é a potência em watts. Um valor próximo de K1 representa o uso de energia em escala planetária, enquanto K2 se aproxima da produção estelar completa.',
  },
  {
    question: 'A massa de material é realista?',
    answer: 'É uma estimativa educativa de primeira ordem baseada na área do coletor, densidade superficial e um fator de estabilidade. Projetos reais precisariam de manutenção de estação, transmissão de energia, perdas de mineração, redundância, dissipação de calor e infraestrutura de fabricação.',
  },
  {
    question: 'Por que estrelas brilhantes exigem sistemas de coletores tão grandes?',
    answer: 'Estrelas de alta luminosidade empurram o raio térmico seguro para fora. Isso aumenta a área superficial necessária para uma dada fração de cobertura, então a demanda de material pode aumentar mais rápido do que a potência capturada parece intuitivamente.',
  },
  {
    question: 'Uma civilização pode atingir o Tipo II de Kardashev com cobertura parcial?',
    answer: 'Sim, se a estrela hospedeira for suficientemente brilhante e os coletores forem eficientes. Em torno de uma estrela semelhante ao Sol, atingir perto do Tipo II requer capturar uma grande fração da luminosidade solar, mas em torno de estrelas mais luminosas, o mesmo objetivo de potência pode precisar de uma fração de cobertura menor.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualização do coletor Dyson',
    starType: 'Tipo de estrela',
    structureType: 'Estrutura',
    coverage: 'Cobertura do coletor',
    operatingTemp: 'Temperatura de operação',
    kardashevTarget: 'Alvo Kardashev',
    kardashevRating: 'Classificação atual',
    capturedPower: 'Potência capturada',
    optimalRadius: 'Raio ótimo',
    targetCoverage: 'Cobertura alvo',
    materialMass: 'Massa de material',
    captureMeter: 'Progresso em direção ao alvo',
    statusReady: 'Ajuste o sistema para estimar a demanda do coletor.',
    statusUnderbuilt: 'A cobertura está abaixo do alvo Kardashev selecionado. Adicione coletores ou escolha uma estrela mais brilhante.',
    statusBalanced: 'A cobertura e a saída estelar estão próximas do objetivo de escala civilizacional selecionado.',
    statusExtreme: 'Esta configuração ultrapassa o alvo. Ela captura potência enorme, mas a demanda de material cresce rápido.',
    orbitalPeriod: 'Período orbital',
    collectorArea: 'Área do coletor',
    mercuryMasses: '{value} massas de Mercúrio',
    kilograms: '{value} kg',
    daysUnit: '{value} dias',
    starMDwarf: 'Anã M',
    starSun: 'Estrela tipo G como o Sol',
    starA: 'Estrela tipo A',
    starRedGiant: 'Gigante vermelha',
    starBlueGiant: 'Gigante azul',
    structureSwarm: 'Enxame de Dyson',
    structureRing: 'Anel equatorial',
    structureShell: 'Casca rígida',
    structureStatite: 'Nuvem de espelhos estáticos',
  },
  seo: [
    { type: 'title', text: 'Simulador de Captura de Energia da Esfera de Dyson', level: 2 },
    { type: 'paragraph', html: 'Uma esfera de Dyson não é apenas uma imagem de ficção científica de uma estrela dentro de uma casca. É uma família de conceitos possíveis de megaestrutura para interceptar a luminosidade estelar: enxames de satélites, anéis equatoriais, nuvens finas de espelhos e a famosa, porém problemática, casca rígida. Este simulador transforma essas ideias em números para que você possa comparar como o tipo de estrela, a temperatura do coletor, a cobertura e o design da estrutura mudam o orçamento energético.' },
    { type: 'paragraph', html: 'A calculadora estima a potência capturada, o raio térmico orbital, a área do coletor, o período orbital, a massa de material e a cobertura necessária para um alvo de escala Kardashev escolhido. Foi construída para estudantes, construtores de mundos, comunicadores científicos e qualquer pessoa que tente entender por que as civilizações Tipo II são difíceis: o desafio não é apenas a potência, mas a área, o calor, a mineração, a estabilidade e a logística orbital.' },
    { type: 'title', text: 'Como o raio de Dyson é estimado', level: 3 },
    { type: 'paragraph', html: 'O raio ótimo é calculado a partir da luminosidade estelar e da temperatura de operação do coletor. Um coletor perto de uma estrela brilhante recebe um fluxo intenso e deve funcionar quente ou rejeitar enormes quantidades de calor. Mover-se para fora reduz o estresse térmico, mas a área do coletor necessária cresce com o quadrado da distância. Esta compensação explica por que a mesma fração de cobertura pode ser modesta em torno de uma anã M fraca e enorme em torno de uma gigante azul.' },
    { type: 'title', text: 'Enxame de Dyson, Anel, Casca e Nuvem de Estáticos Comparados', level: 3 },
    {
      type: 'list', items: [
        '<strong>Enxame de Dyson:</strong> muitos coletores orbitais independentes. É a arquitetura em larga escala mais viável porque pode ser construída gradualmente e não requer uma casca estelar rígida.',
        '<strong>Anel equatorial:</strong> uma faixa de coletores mais estreita com menor eficiência de cobertura. É mais fácil de imaginar como primeira megaestrutura, mas não pode capturar a produção estelar completa sem se tornar um enxame mais amplo.',
        '<strong>Casca rígida:</strong> iconicamente visual, mas mecanicamente desfavorável. Uma casca em torno de uma estrela tem graves problemas de estabilidade e material, então o simulador atribui alta massa e baixa estabilidade.',
        '<strong>Nuvem de espelhos estáticos:</strong> refletores ultraleves mantidos parcialmente pela pressão de radiação. Reduz a demanda de material, mas tem menor tolerância térmica e exigências de controle rigorosas.'
      ]
    }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ScientificApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};