import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-alcoolemia-widmark';
const title = 'Simulador de Concentração de Álcool Widmark';
const description = 'Calcule e simule a absorção, distribuição e eliminação de etanol no corpo humano com a fórmula de Widmark.';

const howTo = [
  {
    name: 'Configurar perfil físico do sujeito',
    text: 'Ajuste o peso, sexo biológico e nível de hidratação. Estas variáveis biológicas calculam o fator Widmark (r).',
  },
  {
    name: 'Definir estado do estômago',
    text: 'Escolha entre estômago vazio, refeição leve ou refeição completa para modelar a absorção.',
  },
  {
    name: 'Adicionar bebidas',
    text: 'Insira o volume, teor alcoólico (ABV) e a hora do consumo de cada bebida.',
  },
  {
    name: 'Analisar curva',
    text: 'Visualize os resultados e tempos metabólicos.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'O que é a fórmula de Widmark?',
    answer: 'A fórmula de Widmark é um modelo matemático desenvolvido por Erik M. P. Widmark para estimar a concentração de álcool no sangue.',
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
      html: 'A compreensão da <strong>absorção, distribuição e eliminação do etanol</strong> é essencial na ciência forense e reconstrução de acidentes. Após a ingestão, o álcool desloca-se pelo esófago até ao estômago, onde ocorre uma pequena absorção direta. A maior parte do etanol é absorvida no duodeno devido à sua grande área de superfície. A taxa com que o estômago esvazia o seu conteúdo é o principal fator limitador da absorção de álcool, o que justifica a grande influência da comida no pico de alcoolemia.',
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
      html: 'A equação clássica de Widmark calcula o BAC teórico: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. Onde A representa os gramas de álcool puro, W o peso corporal em kg, r o fator de distribuição biológico (0.68 para homens e 0.55 para mulheres) e &beta; a taxa de eliminação por hora.',
    },
    {
      type: 'paragraph',
      html: 'O metabolismo do álcool pelo fígado ocorre por meio de cinética de ordem zero devido à saturação rápida da enzima álcool desidrogenase (ADH). Isto significa que o fígado limpa o álcool a uma taxa linear e constante, tipicamente 0.15 g/L por hora, produzindo uma descida em linha reta na representação gráfica do simulador.',
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
