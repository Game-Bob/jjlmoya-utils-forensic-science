import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'determinacao-sexo-biologico-morfologia-cranio-pelve-antropologia-forense';
const title = 'Determinador de Sexo em Antropologia Forense';
const description = 'Estime o sexo biológico a partir da morfologia cranial e pélvica utilizando um modelo de probabilidade bayesiano.';

const howTo = [
  {
    name: 'Selecionar a região anatómica a analisar',
    text: 'Decida se deseja analisar a pélvis, o crânio ou ambos. Avaliar ambas as áreas aumenta a precisão e a confiança da classificação final do sexo biológico.',
  },
  {
    name: 'Avaliar cada traço morfológico',
    text: 'Examine os espécimes ósseos e indique a pontuação dos pontos-chave em uma escala de 1 (hiperfeminino) a 5 (hipermasculino) com base nos pontos de referência visuais.',
  },
  {
    name: 'Inserir pontuações no motor bayesiano',
    text: 'Utilize os seletores deslizantes para inserir a pontuação de cada traço. O classificador atualiza automaticamente a probabilidade posterior para as categorias masculina e feminina.',
  },
  {
    name: 'Interpretar os resultados de probabilidade',
    text: 'Revise o indicador de confiança final, a classificação de sexo predominante e leia as notas de diagnóstico forense para compreender as variações biológicas.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'O que é o método de Phenice na determinação do sexo pélvico?',
    answer: 'O método de Phenice, publicado por T. W. Phenice em 1969, centra-se em três características pélvicas específicas: o arco ventral, a concavidade subpúbica e o aspeto medial do ramo isquiopúbico. Continua a ser um dos métodos morfológicos mais fiáveis em antropologia forense, com taxas de precisão que superam 95 por cento quando aplicado a restos esqueléticos bem preservados.',
  },
  {
    key: 'faq-2',
    question: 'Por que a pélvis é preferida ao crânio para a estimativa do sexo?',
    answer: 'A pélvis é a parte mais dimórfica do esqueleto humano devido à adaptação funcional para o parto nas mulheres. A pressão evolutiva moldou a pélvis feminina para ser mais larga, menos profunda e ter ângulos mais amplos do que a masculina, enquanto o dimorfismo cranial relaciona-se principalmente com o tamanho corporal geral e o desenvolvimento muscular.',
  },
  {
    key: 'faq-3',
    question: 'Como o classificador bayesiano estima a probabilidade de sexo?',
    answer: 'O nosso classificador utiliza um modelo de atualização bayesiano. Assume uma probabilidade prévia de 50 por cento para ambos os sexos. Para cada marcador anatómico pontuado, o modelo multiplica a probabilidade prévia pela verosimilhança de obter essa pontuação específica em populações masculinas versus femininas. As pontuações resultantes são normalizadas.',
  },
  {
    key: 'faq-4',
    question: 'O que representa uma pontuação de 3 na análise morfológica?',
    answer: 'Uma pontuação de 3 representa uma morfologia indeterminada ou neutra. Isso indica que o traço exibe características que se encontram no meio do espetro do dimorfismo sexual humano, sem mostrar traços claramente femininos (1-2) nem claramente masculinos (4-5).',
  },
  {
    key: 'faq-5',
    question: 'Este modelo pode determinar o sexo de restos esqueléticos de crianças?',
    answer: 'Não. A determinação morfológica do sexo é altamente não fiável para restos de subadultos porque as características morfológicas que diferenciam os esqueletos masculinos e femininos não se desenvolvem completamente até depois da puberdade. Os antropólogos forenses recorrem a testes genéticos ou indicadores dentários para subadultos.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Morfologia Pélvica',
    craniumRegion: 'Morfologia Craniana',
    subpubicAngle: 'Ângulo Subpúbico',
    subpubicAngleDesc: 'O ângulo formado abaixo da sínfise púbica.',
    subpubicAngleFem: 'Ângulo largo em U (>90°)',
    subpubicAngleMasc: 'Ângulo estreito em V (<70°)',
    sciaticNotch: 'Incisura Ciática Maior',
    sciaticNotchDesc: 'A incisura ciática maior no ílio posterior.',
    sciaticNotchFem: 'Incisura larga e rasa',
    sciaticNotchMasc: 'Incisura estreita e profunda',
    ventralArc: 'Arco Ventral',
    ventralArcDesc: 'Cresta óssea que cruza a pube anterior.',
    ventralArcFem: 'Cresta elevada proeminente',
    ventralArcMasc: 'Linha ausente ou muito ténue',
    preauricularSulcus: 'Sulco Pré-auricular',
    preauricularSulcusDesc: 'Sulco adjacente à articulação sacroilíaca.',
    preauricularSulcusFem: 'Sulco profundo e picado',
    preauricularSulcusMasc: 'Ausente ou liso',
    mastoidProcess: 'Apófise Mastoide',
    mastoidProcessDesc: 'Projeção óssea atrás do canal auditivo.',
    mastoidProcessFem: 'Projeção pequena e curta',
    mastoidProcessMasc: 'Projeção grande e longa',
    supraorbitalRidge: 'Borda Supraorbital',
    supraorbitalRidgeDesc: 'Protrusão da borda supraorbital (glabela).',
    supraorbitalRidgeFem: 'Testa lisa e plana',
    supraorbitalRidgeMasc: 'Arco proeminente e saliente',
    mentalEminence: 'Eminência Mentoniana (Queixo)',
    mentalEminenceDesc: 'A forma e proeminência do queixo.',
    mentalEminenceFem: 'Queixo arredondado e pontiagudo',
    mentalEminenceMasc: 'Queixo largo e quadrado',
    nuchalCrest: 'Cresta Nucal',
    nuchalCrestDesc: 'Crestas ósseas na parte posterior do crânio.',
    nuchalCrestFem: 'Plano occipital liso',
    nuchalCrestMasc: 'Projeção rugosa e em gancho',
    selectOption: 'Escolher pontuação...',
    score1: '1 - Hiperfeminino',
    score2: '2 - Feminino',
    score3: '3 - Indeterminado',
    score4: '4 - Masculino',
    score5: '5 - Hipermasculino',
    notEvaluated: 'Não avaliado',
    resultsTitle: 'Resultados de Determinação de Sexo',
    femaleProbLabel: 'Probabilidade Feminina',
    maleProbLabel: 'Probabilidade Masculina',
    predominantLabel: 'Classificação Predominante',
    confidenceLabel: 'Confiança da Estimativa',
    weakConf: 'Fraca (Poucos indicadores avaliados)',
    moderateConf: 'Moderada',
    strongConf: 'Forte',
    femaleClass: 'Feminino',
    maleClass: 'Masculino',
    indeterminateClass: 'Indeterminado',
    noteNoData: 'Por favor, pontue pelo menos um marcador anatómico para começar os cálculos.',
    noteTriageOnly: 'Esta é uma ferramenta educativa de triagem. A avaliação forense formal requer análises métricas e revisão de múltiplos peritos.',
    noteBayesianEst: 'As probabilidades são calculadas dinamicamente utilizando uma matriz de verosimilhança bayesiana não paramétrica.',
    pelvicTitle: 'Guia de Referência de Pélvis',
    cranialTitle: 'Guia de Referência de Crânio',
    pelvisDesc: 'A pélvis feminina está adaptada para o parto, resultando em estruturas mais largas e ângulos mais abertos. A pélvis masculina é mais robusta, estreita e orientada verticalmente.',
    cranialDesc: 'O crânio masculino é geralmente maior e mais robusto, com apófises mastoides maiores, arcos superciliares proeminentes e inserções musculares rugosas. O crânio feminino é mais grácil, com bordas mais suaves e queixo arredondado.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introdução à determinação osteológica do sexo em antropologia forense',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A estimativa do sexo biológico é um dos passos fundamentais no estabelecimento do perfil biológico para restos esqueléticos desconhecidos em antropologia forense, toxicologia e arqueologia. Juntamente com a estatura, a idade ao falecer e a afinidade ancestral, a estimativa do sexo ajuda a estreitar o grupo de potenciais desaparecidos. Squeletos humanos exibem dimorfismo sexual, que são as diferenças físicas entre machos e fêmeas da espécie. Este dimorfismo reflete-se tanto no tamanho (robustez versus gracilidade) como na forma (especificamente as adaptações pélvicas relacionadas com o parto).',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta interativa permite a estudantes de medicina forense, peritos e estagiários avaliar os pontos de referência morfológicos da pélvis e do crânio. Ao inserir pontuações com base em guias visuais, os utilizadores podem observar como os marcadores ósseos individuais contribuem para um modelo estatístico cumulativo.',
    },
    {
      type: 'title',
      text: 'Dimorfismo da pélvis e o método de Phenice',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pélvis é universalmente reconhecida como a região mais precisa do esqueleto para a determinação do sexo biológico. As pélvis femininas são mais largas, têm um canal de parto maior, uma incisura ciática mais larga e um ângulo subpúbico que excede noventa graus. Pelo contrário, as pélvis masculinas caracterizam-se por ângulos subpúbicos estreitos em forma de V e uma incisura ciática estreita. O método de Phenice foca-se em três características específicas do osso púbico: o arco ventral, a concavidade subpúbica e o aspeto medial do ramo isquiopúbico. A presença de um arco ventral bem definido é um indicador excecionalmente forte do sexo feminino, enquanto a sua ausência é típica nos homens.',
    },
    {
      type: 'title',
      text: 'Dimorfismo cranial e marcadores de robustez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando os ossos da pélvis estão ausentes ou mal conservados, o crânio serve como a principal alternativa para a estimativa do sexo. A avaliação cranial baseia-se na robustez, pois os crânios masculinos geralmente apresentam locais de inserção muscular mais pronunciados e processos ósseos maiores devido a diferenças de desenvolvimento impulsionadas por hormonas. A apófise mastoide, localizada atrás da orelha, é maior e mais larga nos homens. A borda supraorbital ou glabela é proeminente e saliente nos homens, enquanto permanece lisa e vertical nas mulheres. O queixo (eminência mentoniana) tende a ser quadrado e largo nos homens, enquanto as mulheres apresentam uma estrutura de queixo mais arredondada e pontiaguda.',
    },
    {
      type: 'table',
      headers: ['Ponto de referência anatómico', 'Características femininas (Pontuações 1-2)', 'Características masculinas (Pontuações 4-5)', 'Relevância forense'],
      rows: [
        ['Ângulo subpúbico', 'Ângulo largo, obtuso (muitas vezes excedendo 90 graus).', 'Ângulo estreito, agudo (tipicamente inferior a 70 graus).', 'Maior valor diagnóstico individual para a determinação do sexo pélvico.'],
        ['Incisura ciática', 'Incisura larga e rasa que lembra uma forma de U.', 'Incisura estreita e profunda que lembra um polegar.', 'Marcador extremamente durável, muitas vezes preservado em restos fragmentados.'],
        ['Apófise mastoide', 'Pequena, curta e projetando-se minimamente abaixo do meato auditivo.', 'Grande, longa e projetando-se significativamente para baixo.', 'Marcador cranial fiável, resistente ao intemperismo.'],
        ['Borda supraorbital', 'Glabela lisa e plana com perfil de testa vertical.', 'Borda proeminente e saliente com testa inclinada.', 'Diferencia crânios masculinos robustos de crânios femininos gráceis.'],
      ],
    },
    {
      type: 'title',
      text: 'Modelação matemática bayesiana nas classificações morfológicas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As avaliações forenses tradicionais baseavam-se em classificações subjetivas, o que podia levar a vieses do observador. A antropologia forense moderna integra modelos de probabilidade estatística para quantificar a incerteza. A estatística bayesiana é ideal para este propósito, começando com uma probabilidade a priori igual (cinquenta por cento masculino, cinquenta por cento feminino) e atualizando-a à medida que novas provas são introduzidas. Quando os traços pélvicos mostram uma morfologia altamente feminina (ângulo subpúbico largo, pontuação 1), a probabilidade de classificação feminina aumenta, sobrepondo-se a marcadores intermédios ou conflituosos presentes no crânio.',
    },
    {
      type: 'paragraph',
      html: 'Este simulador digital implementa um motor bayesiano não paramétrico. Os cálculos fornecem uma percentagem de probabilidade em vez de um resultado binário rígido, o que se alinha com as diretrizes forenses modernas que enfatizam a comunicação dos intervalos de confiança e taxas de erro nos testemunhos em tribunal. A confiança da classificação depende do número de pontos de referência avaliados, com pontuações das regiões pélvica e cranial a fornecerem os resultados mais robustos.',
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
