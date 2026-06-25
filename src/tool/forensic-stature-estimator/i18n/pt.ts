import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estimador-de-estatura-forense-restos-esqueleticos-calculadora-trotter-gleser';
const title = 'Estimador de Estatura Forense';
const description = 'Estime a estatura em vida a partir de ossos longos humanos usando as equações de regressão de Trotter e Gleser, incorporando sexo biológico, ancestralidade e correção por idade.';

const howTo = [
  {
    name: 'Selecionar osso e variáveis',
    text: 'Escolha o osso longo específico para medir (Fémur, Tíbia, Úmero, Perónio, Rádio ou Cúbito), junto com o sexo biológico, grupo de ancestralidade e idade do indivíduo.'
  },
  {
    name: 'Determinar a altura do osso',
    text: 'Ajuste o calibrador deslizante na placa osteométrica virtual para representar o comprimento máximo do osso em centímetros.'
  },
  {
    name: 'Calcular estatura estimada',
    text: 'A calculadora aplica as equações de regressão de Trotter-Gleser correspondentes, subtraindo 0.06 cm por ano para indivíduos com mais de 30 anos.'
  },
  {
    name: 'Interpretar intervalos e erros',
    text: 'Analise a estatura estimada, o Erro Padrão da Estimativa (SEE) e o intervalo de predição de 95% para considerar a variabilidade populacional.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Como funcionam as equações de regressão de Trotter e Gleser?',
    answer: 'As equações usam regressão linear para modelar a correlação entre a estatura em vida e o comprimento máximo dos ossos longos. Ao inserir o comprimento do osso, a calculadora aplica inclinações e interceptos específicos do grupo populacional.'
  },
  {
    key: 'faq-2',
    question: 'Por que a ferramenta requer sexo biológico e ancestralidade?',
    answer: 'As proporções do corpo humano variam de acordo com o sexo e a população geográfica. Homens geralmente têm proporções de membros em relação à estatura diferentes das mulheres.'
  },
  {
    key: 'faq-3',
    question: 'Por que existe um fator de correção por idade?',
    answer: 'A estatura em vida diminui gradualmente após a idade adulta jovem devido à compressão dos discos intervertebrais e mudanças posturais. Recomenda-se subtrair 0.06 cm para cada ano após os 30 anos.'
  },
  {
    key: 'faq-4',
    question: 'O que é o Erro Padrão da Estimativa (SEE)?',
    answer: 'O SEE representa o desvio padrão dos resíduos no modelo de regressão. Ele mede a precisão da estatura prevista em relação aos dados reais.'
  },
  {
    key: 'faq-5',
    question: 'Quais ossos longos oferecem as estimativas mais precisas?',
    answer: 'Os ossos dos membros inferiores (fémur e tíbia) fornecem as estimativas mais precisas porque contribuem diretamente para a altura. Os membros superiores apresentam erros padrão maiores.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Estimador de Estatura Forense',
    desc: 'Simule medições em placas osteométricas e calcule a estatura em vida usando regressão linear.',
    configTitle: 'Configuração Osteométrica',
    boneLabel: 'Espécime de Osso',
    lengthLabel: 'Comprimento do Osso',
    unitLabel: 'Unidade do Sistema',
    metricOption: 'Métrico (cm)',
    imperialOption: 'Imperial (polegadas)',
    sexLabel: 'Sexo Biológico',
    ancestryLabel: 'Ancestralidade',
    ageLabel: 'Idade no Óbito (anos)',
    maleOption: 'Masculino',
    femaleOption: 'Feminino',
    whiteOption: 'Branco / Caucasiano',
    blackOption: 'Negro / Afro-americano',
    asianOption: 'Asiático / Mongoloide',
    femurName: 'Fémur (Osso da coxa)',
    tibiaName: 'Tíbia (Osso da canela)',
    humerusName: 'Úmero (Osso do braço)',
    fibulaName: 'Perónio (Fíbula)',
    radiusName: 'Rádio (Osso do antebraço)',
    ulnaName: 'Cúbito (Ulna)',
    resultsTitle: 'Resultados da Estimativa',
    estimateLabel: 'Estatura Estimada',
    errorLabel: 'Erro Padrão (SEE)',
    rangeLabel: 'Intervalo de Predição de 95%',
    formulaLabel: 'Equação de Regressão',
    formulaBoneFactor: 'Fator do Osso',
    formulaConstant: 'Constante',
    formulaAgeCorrection: 'Correção por Idade',
    formulaStdError: 'Erro Padrão (SEE)',
    fallbackAlert: 'Não existe equação de Trotter-Gleser direta para mulheres asiáticas; usando a equação de mulheres brancas como alternativa forense.',
    boardInstructions: 'Arraste a guia do calibrador ou use os campos numéricos para medir o osso.',
    rulerLabelMetric: 'Escala Métrica (mm)',
    rulerLabelImperial: 'Escala Imperial (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Guia Completo para Estimativa de Estatura em Antropologia Forense',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A estimativa de estatura representa um componente fundamental do perfil biológico na antropologia física, bioarqueologia e ciência forense. Quando restos esqueléticos são recuperados, reconstruir a estatura em vida ajuda na identificação cruzada de pessoas desaparecidas. A estatura é estimada medindo-se o comprimento máximo de ossos longos, que se correlacionam intimamente com a altura total devido a proporções esqueléticas genética e ambientalmente determinadas.'
    },
    {
      type: 'paragraph',
      html: 'Este simulador de placa osteométrica digital permite que estudantes e profissionais explorem os modelos de regressão linear desenvolvidos por Mildred Trotter e Goldine C. Gleser. Ao configurar variáveis como tipo de osso, sexo biológico, ancestralidade e idade no óbito, os usuários podem analisar como as proporções corporais influenciam as constantes matemáticas de previsão.'
    },
    {
      type: 'title',
      text: 'Entendendo as Fórmulas de Regressão de Trotter-Gleser',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter e Goldine C. Gleser publicaram suas equações de estimativa em 1952 e 1958. As fórmulas lineares têm o formato: Estatura = (Inclinação × Comprimento do Osso) + Constante ± Erro Padrão. Como os ratios corporais diferem por sexo e ancestralidade, fórmulas distintas são aplicadas.'
    },
    {
      type: 'table',
      headers: ['Espécime de Osso Longo', 'Modelo Masculino Branco', 'Modelo Feminino Branco', 'Utilidade e Confiabilidade Forense'],
      rows: [
        ['Fémur (Coxa)', 'Estatura = 2.32 × Fémur + 65.53 ± 3.94 cm', 'Estatura = 2.47 × Fémur + 54.10 ± 3.72 cm', 'Maior confiabilidade geral. O fémur é o osso de suporte primário do peso corporal, com correlação direta com a altura.'],
        ['Tíbia (Canela)', 'Estatura = 2.42 × Tíbia + 81.93 ± 4.00 cm', 'Estatura = 2.90 × Tíbia + 61.53 ± 3.66 cm', 'Alta confiabilidade. Cuidados devem ser tomados para seguir o protocolo de Trotter, que exclui o maléolo medial.'],
        ['Perónio (Fíbula)', 'Estatura = 2.60 × Perónio + 75.50 ± 3.86 cm', 'Estatura = 2.93 × Perónio + 59.61 ± 3.57 cm', 'Altamente confiável, mas o perónio é delgado e frequentemente fragmentado em restos históricos.'],
        ['Úmero (Braço)', 'Estatura = 2.89 × Úmero + 78.10 ± 4.57 cm', 'Estatura = 3.36 × Úmero + 57.97 ± 4.45 cm', 'Confiabilidade moderada. Os membros superiores não suportam peso e apresentam erros padrão maiores.'],
        ['Rádio (Antebraço)', 'Estatura = 3.79 × Rádio + 79.42 ± 4.66 cm', 'Estatura = 4.74 × Rádio + 54.93 ± 4.45 cm', 'Menor confiabilidade. O antebraço apresenta maior variação de proporções individuais.']
      ]
    },
    {
      type: 'title',
      text: 'Perda de Estatura com a Idade e Correção Post-Mortem',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'A estatura não é estática ao longo da vida adulta. A partir dos 30 anos, o corpo sofre redução de altura devido à compressão dos discos intervertebrais e alterações posturais. Trotter e Gleser recomendam subtrair 0,06 cm para cada ano após os 30 anos: Perda = 0,06 × (Idade - 30).'
    },
    {
      type: 'title',
      text: 'Discrepâncias Metodológicas e Protocolo da Tíbia',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Um problema metodológico conhecido refere-se à medição da tíbia. Em 1952, Trotter mediu a tíbia sem o maléolo medial, mas mudou o protocolo em 1958. Aplicar a fórmula de 1952 a uma tíbia medida com o maléolo causa superestimativa sistemática.'
    },
    {
      type: 'title',
      text: 'Tendências Seculares e Dados de Referência Históricos',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'As amostras de Trotter-Gleser refletem indivíduos nascidos no final do século XIX e início do século XX. Devido a melhorias na nutrição, populações atuais apresentam tendência secular positiva de estatura. Praticantes modernos complementam o uso das fórmulas com ferramentas modernas como o FORDISC.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
