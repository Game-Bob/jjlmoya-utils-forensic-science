import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-alcoolemia-widmark';
const title = 'Simulador de Concentração de Álcool Widmark';
const description = 'Calcule e simule a absorção, distribuição e eliminação de etanol no corpo humano com a fórmula de Widmark.';

const howTo = [
  {
    name: 'Configurar perfil físico do sujeito',
    text: 'Insira o peso corporal, sexo biológico e nível de hidratação. Estas variáveis biológicas calculam o fator Widmark (r), que dita o volume de distribuição do etanol no corpo.',
  },
  {
    name: 'Definir estado do estômago',
    text: 'Escolha entre estômago vazio, refeição leve ou refeição completa. Isto ajusta a constante de velocidade de absorção (ka) para mostrar o efeito de atraso do alimento na curva de alcoolemia.',
  },
  {
    name: 'Adicionar bebidas à linha do tempo',
    text: 'Insira bebidas individuais especificando o volume em mililitros, teor alcoólico (ABV) e a hora do consumo em relação ao início da simulação.',
  },
  {
    name: 'Analisar a curva de alcoolemia',
    text: 'Inspecione o gráfico de concentração de álcool no sangue (BAC) ao longo de 12 horas. Compare o pico máximo, tempo de absorção e tempo para a sobriedade.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'O que é a fórmula de Widmark e como é usada na toxicologia forense?',
    answer: 'A fórmula de Widmark é um modelo matemático desenvolvido por Erik M. P. Widmark em 1932. Ela estima a concentração de álcool no sangue com base na massa de álcool consumida, peso corporal, um fator de distribuição (r) e uma taxa de eliminação linear. Peritos forenses usam esta fórmula para realizar cálculos retrospectivos em acidentes.',
  },
  {
    key: 'faq-2',
    question: 'Como a comida no estômago afeta a curva de alcoolemia?',
    answer: 'A comida no estômago retarda o esvaziamento gástrico, atrasando a entrada do álcool no intestino delgado (principal local de absorção). Na simulação, isso é modelado reduzindo a constante de velocidade de absorção (ka), deslocando o pico alcoólico para mais tarde e reduzindo a concentração máxima.',
  },
  {
    key: 'faq-3',
    question: 'Por que a eliminação do álcool segue uma cinética de ordem zero?',
    answer: 'A maioria dos medicamentos é eliminada por cinética de primeira ordem. O álcool segue uma cinética de ordem zero porque a principal enzima hepática encarregada de seu metabolismo, a álcool desidrogenase (ADH), satura-se com níveis muito baixos (cerca de 0,02 g/L). Assim, o fígado limpa o álcool a uma taxa máxima constante.',
  },
  {
    key: 'faq-4',
    question: 'Quais fatores biológicos causam variações no fator de Widmark r?',
    answer: 'O fator r representa a proporção de água corporal em relação ao peso total. Como o etanol é hidrofílico e lipofóbico, ele se dissolve apenas na água. O tecido muscular contém muita água e o tecido adiposo (gordura) quase nada. Indivíduos com mais gordura ou desidratados têm menor volume de distribuição e maior BAC.',
  },
  {
    key: 'faq-5',
    question: 'Posso usar este simulador para provar legalmente minha capacidade de dirigir?',
    answer: 'De forma alguma. Este simulador é uma ferramenta estritamente educativa. Na realidade física de cada indivíduo, fatores como genética enzimática, saúde hepática, medicamentos e refeições introduzem enorme variabilidade. Nunca confie em equações matemáticas para decidir se está apto a dirigir.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Perfil',
    weight: 'Peso (kg)',
    sex: 'Sexo biológico',
    male: 'Masculino',
    female: 'Feminino',
    hydration: 'Nível de hidratação',
    hydrationLow: 'Baixo',
    hydrationNormal: 'Normal',
    hydrationHigh: 'Alto',
    stomachState: 'Conteúdo estomacal',
    stomachEmpty: 'Vazio (Rápido)',
    stomachLight: 'Refeição leve (Médio)',
    stomachFull: 'Refeição completa (Lento)',
    drinksTimeline: 'Cronologia de consumo',
    addDrink: 'Adicionar bebida',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'Teor alcoólico (% vol)',
    drinkTime: 'Tempo (Hora)',
    drinksList: 'Bebidas consumidas',
    remove: 'Remover',
    beer: 'Cerveja (330ml, 5%)',
    wine: 'Vinho (150ml, 12%)',
    spirits: 'Destilados (40ml, 40%)',
    peakBac: 'Pico de BAC',
    timeToSober: 'Tempo para sobriedade',
    sober: 'Sóbrio',
    currentBac: 'BAC atual',
    drivingLimitAlert: 'Status de condução',
    safeLimit: 'Abaixo do limite',
    warningLimit: 'Limite de alerta excedido',
    dangerLimit: 'Limite de perigo excedido',
    graphTitle: 'Concentração de álcool no sangue em 12 horas',
    timeAxisLabel: 'Tempo (Horas)',
    bacAxisLabel: 'Tasso (g/L)',
    legalLimitText: 'Limite legal padrão',
    noDrinksText: 'Adicione bebidas para simular.',
    hours: 'horas',
    soberStatus: 'Sóbrio em {time} horas',
    neverSober: 'Excede 12h',
    noteDisclaimer: 'Apenas para fins educativos. Não dirija após beber.',
    noteWidmark: 'Baseado na fórmula de Widmark e metabolismo linear do fígado.',
  },
  seo: [
    {
      type: 'title',
      text: 'Toxicologia Forense e Farmacocinética do Etanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A compreensão da <strong>absorção, distribuição e eliminação do etanol</strong> é essencial na ciência forense e reconstrução de acidentes de trânsito. Após a ingestão, o álcool desloca-se pelo esôfago até o estômago, onde ocorre uma pequena absorção direta. A maior parte do etanol é absorvida no duodeno devido à sua grande área de superfície. A taxa com que o estômago esvazia o seu conteúdo é o principal fator limitador da absorção de álcool, o que justifica a grande influência da comida no pico de alcoolemia.',
    },
    {
      type: 'paragraph',
      html: 'Este simulador dinâmico implementa as equações de Erik Widmark para modelar a concentração de álcool no sangue durante 12 horas. Estudantes e profissionais forenses podem testar o impacto de diferentes perfis de hidratação, massa corporal e estômago cheio na taxa de declínio metabólico.',
    },
    {
      type: 'title',
      text: 'A Equação de Widmark e Cinética Hepática',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A equação clássica de Widmark calcula o BAC teórico: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Onde A representa os gramas de álcool puro, W o peso corporal em kg, r o fator de distribuição biológico (0,68 para homens e 0,55 para mulheres) e &beta; a taxa de eliminação por hora.',
    },
    {
      type: 'paragraph',
      html: 'O metabolismo do álcool pelo fígado ocorre por meio de cinética de ordem zero devido à saturação rápida da enzima álcool desidrogenase (ADH). Isto significa que o fígado limpa o álcool a uma taxa linear e constante, tipicamente 0,15 g/L por hora, produzindo uma descida em linha reta na representação gráfica do simulador.',
    },
    {
      type: 'title',
      text: 'Variáveis Fisiológicas e o Volume de Distribuição',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O volume de distribuição do etanol depende da quantidade de água no organismo. Como o álcool é solúvel em água mas insolúvel em gordura, indivíduos com maior massa muscular apresentam maior volume de distribuição (maior fator r) e menores picos alcoólicos. A desidratação reduz a água livre corporal total, elevando o pico de concentração.',
    },
    {
      type: 'table',
      headers: ['Variável Fisiológica', 'Mecanismo Biológico', 'Efeito Farmacocinético', 'Importância Forense'],
      rows: [
        ['Peso Corporal', 'Determina a escala do pool total de água no corpo.', 'Inversamente proporcional à concentração de pico de BAC.', 'Base de cálculo para reconstruções retrospectivas forenses.'],
        ['Sexo Biológico', 'Influencia a proporção típica de massa muscular e gordura.', 'O fator r é menor nas mulheres (0,55) que nos homens (0,68).', 'Explica a susceptibilidade biológica aumentada nas mulheres.'],
        ['Estado de Hidratação', 'Altera o volume de água livre nos tecidos.', 'A desidratação reduz r em 0,05, elevando o pico da curva.', 'Ajusta o cálculo matemático sob esforço ou desidratação.'],
        ['Lado Gástrico', 'Alimentos retardam o esvaziamento do estômago.', 'Diminui a constante de velocidade ka, achatando o pico.', 'Explica alcoolemias baixas mesmo após ingestão moderada.'],
      ],
    },
    {
      type: 'title',
      text: 'Cinética de Eliminação de Ordem Zero',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O fígado processa a maior parte do álcool no sangue. Devido à rápida saturação da ADH, a taxa de eliminação independe da concentração no sangue. A média forense aceita internacionalmente (&beta;<sub>60</sub>) é de 0,15 g/L por hora. Esta eliminação constante produz a descida linear e reta característica da curva até a sobriedade.',
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
