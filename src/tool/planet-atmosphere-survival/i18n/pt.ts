const slug = 'calculadora-sobrevivencia-atmosfera-planetaria';
const title = 'Calculadora de Sobrevivencia em Atmosfera Planetaria';
const description = 'Quanto tempo voce pode sobreviver sem um traje espacial em Marte, Venus, Titan, Jupiter ou no Everest? Esta calculadora interativa estima o tempo de sobrevivencia humana nao protegida a partir da pressao, temperatura, oxigenio, dioxido de carbono, toxicidade e perigos do vento.';

const howTo = [
  {
    name: 'Escolha um destino para carregar dados atmosfericos reais',
    text: 'Selecione Marte, Venus, Titan, Jupiter ou o cume do Everest como predefinicao para definir instantaneamente valores realistas de pressao, temperatura, mistura de gases e vento para esse ambiente.',
  },
  {
    name: 'Ajuste as condicoes para explorar o ponto de virada',
    text: 'Mova os controles deslizantes de pressao, temperatura, oxigenio e dioxido de carbono para ver qual perigo se torna letal primeiro. Pequenas mudancas podem deslocar completamente o fator limitante.',
  },
  {
    name: 'Leia o relogio de sobrevivencia e o elo mais fraco',
    text: 'O temporizador mostra o tempo estimado antes de ocorrer estresse biologico grave. A etiqueta do fator limitante diz exatamente qual perigo e a ameaca mais urgente neste momento.',
  },
  {
    name: 'Compare os perigos visualmente no mapa de riscos',
    text: 'Os raios radiais e o grafico da linha do tempo mostram como pressao, calor, frio, hipoxia, toxicidade e vento contribuem cada um para o risco total ao longo do tempo.',
  },
];

const faq = [
  {
    question: 'Um ser humano pode sobreviver em Marte sem traje espacial?',
    answer: 'Nao. Marte tem pressao extremamente baixa (menos de 1% da Terra), quase nenhum oxigenio respirável e uma atmosfera maioritariamente de dioxido de carbono. A perda de consciencia ocorreria em segundos e lesoes graves em minutos sem suporte de pressao e oxigenio.',
  },
  {
    question: 'Porque e que a pressao atmosferica e tao critica para a sobrevivencia humana?',
    answer: 'Abaixo do limite de Armstrong (cerca de 6,3 kPa), a agua pode ferver a temperatura corporal. A pressao baixa tambem impede que o oxigenio entre na corrente sanguinea mesmo que o ar seja 100% oxigenio. E por isso que a pressao e um dos perigos letais mais rapidos.',
  },
  {
    question: 'Qual planeta tem a atmosfera mais viavel?',
    answer: 'Entre os destinos do Sistema Solar, a Terra em alta altitude (Everest) e a mais viavel, embora ainda perigosa sem aclimatacao. Titan e o menos hostil das outras opcoes porque a sua pressao e manejavel, mas carece de oxigenio e e criogenicamente frio. Nenhum planeta ou lua alem da Terra tem uma atmosfera respirável.',
  },
  {
    question: 'Venus e pior por causa do calor ou da pressao?',
    answer: 'Ambos sao extremos na superficie. Venus tem uma pressao esmagadora (92 vezes a da Terra) e uma temperatura superficial mais quente que um forno de cozinha. Estes perigos atuam em conjunto, por isso a ferramenta sinaliza ambos como ameacas dominantes imediatas.',
  },
  {
    question: 'Porque e que Titan tem uma estimativa de sobrevivencia maior do que Marte?',
    answer: 'Titan tem uma atmosfera densa, por isso a pressao em si nao e um problema imediato. O tempo de sobrevivencia e limitado pelo frio extremo (cerca de -180 graus C) e pela completa falta de oxigenio. Marte falha na pressao, Titan falha na temperatura.',
  },
  {
    question: 'Quais sao as principais causas de morte no espaco sem traje?',
    answer: 'Os assassinos mais rapidos sao a exposicao ao vacuo (perda de pressao causando ebullismo e hipoxia em segundos), seguidos pela temperatura extrema, composicao de gas toxico e perda de calor pelo vento. A calculadora monitoriza todas as seis categorias de perigo.',
  },
  {
    question: 'Esta ferramenta e adequada para o planeamento de missoes espaciais?',
    answer: 'Nao. E um modelo educativo que utiliza limiares biologicos simplificados. A analise real de descompressao, hipoxia, gases toxicos, lesoes termicas e riscos de missao requer avaliacao especializada medica e de engenharia para segurança.',
  },
];

import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    riskMap: 'Mapa de risco atmosferico',
    timeline: 'Cronologia de risco biologico',
    controls: 'Controlos da atmosfera',
    destination: 'Destino',
    pressure: 'Pressao',
    temperature: 'Temperatura',
    oxygen: 'Oxigenio',
    co2: 'Dioxido de carbono',
    limitingFactor: 'Fator limitante',
    verdict: 'Veredito',
    exposureSummary: 'Resumo de exposição',
    atmosphericModel: 'Modelo de exposição atmosférica',
    survivalEnvelope: 'envoltório de sobrevivência',
    survival: 'Sobrevivência',
    mode: 'Modo',
    metric: 'Métrico',
    imperial: 'Imperial',
    unitSystem: 'Sistema de unidades',
    vitalStress: 'estresse vital',
    timeLabel: 'tempo',
    estimatedSurvival: 'sobrevivência estimada',
    hazardPressure: 'Pressão',
    hazardTemperature: 'Temperatura',
    hazardOxygen: 'Oxigênio',
    hazardToxicity: 'Toxicidade',
    hazardWind: 'Vento',
    presetMars: 'Marte',
    presetVenus: 'Superfície de Vênus',
    presetTitan: 'Titã',
    presetJupiter: 'Camada de nuvens de Júpiter',
    presetEverest: 'Terra, cume do Everest',
    noteMars: 'Quase vácuo, frio extremo e quase nenhum oxigênio respirável.',
    noteVenus: 'Pressão esmagadora e calor de forno dominam imediatamente.',
    noteTitan: 'Ar denso de nitrogênio, mas frio letal e sem oxigênio.',
    noteJupiter: 'Atmosfera rica em hidrogênio, frio severo e ventos violentos.',
    noteEverest: 'Sobrevivível para alpinistas treinados, mas hipóxia e frio são graves.',
    verdictSeconds: 'Segundos',
    verdictMinutes: 'Minutos',
    verdictHours: 'Horas',
    verdictExtended: 'Risco de exposição prolongada',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora de Sobrevivencia em Atmosfera Planetaria: Quanto Tempo Pode Sobreviver sem Traje Espacial em Marte, Venus, Titan ou Jupiter?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Se fosse subitamente exposto a atmosfera de outro planeta sem traje espacial, quanto tempo sobreviveria? Esta calculadora estima o tempo de sobrevivencia humana nao protegida em Marte, Venus, Titan, Jupiter e no Everest simulando seis perigos: pressao total, disponibilidade de oxigenio, temperatura, concentracao de dioxido de carbono, quimica toxica e tensao do vento. Responde as perguntas que os entusiastas do espaco e os estudantes mais fazem: qual planeta o mata mais rapido, qual perigo e a verdadeira ameaca e do que precisaria para sobreviver.',
    },
    {
      type: 'paragraph',
      html: 'O resultado e uma estimativa educativa, nao um numero de planeamento de missao. Foi concebido para ajudar a comparar porque diferentes mundos sao perigosos de formas muito diferentes. Marte falha na pressao e hipoxia em segundos. Venus combina pressao esmagadora com calor de forno. Titan e criogenico e nao tem oxigenio. As camadas de nuvens dos gigantes gasosos adicionam composicoes toxicas e ventos supersonicos. Cada ambiente ensina algo diferente sobre o que torna a Terra unicamente habitavel.',
    },
    {
      type: 'title',
      text: 'Qual planeta tem a atmosfera mais viavel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entre os destinos desta calculadora, os ambientes de alta altitude da Terra (como o cume do Everest) sao os mais viaveis, embora ainda perigosos sem preparacao. Entre os outros planetas, Titan tem a pressao mais toleravel mas falha na temperatura e oxigenio. Nenhum destino alem da Terra oferece atualmente uma atmosfera respirável. A calculadora ajuda-o a ver exatamente porque cada mundo falha e qual perigo ultrapassa primeiro o limiar critico.',
    },
    {
      type: 'title',
      text: 'Como cada perigo afeta o corpo',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pressao (baixa):</strong> abaixo de 6,3 kPa os fluidos corporais podem ferver (ebullismo). Mesmo acima disso, a pressao baixa impede a absorcao de oxigenio. Este e o assassino mais rapido em ambientes de quase vacuo.',
        '<strong>Pressao (alta):</strong> a pressao extrema comprime os gases respiratorios, aumenta o risco de narcose por nitrogenio e pode danificar mecanicamente os pulmoes e os seios nasais.',
        '<strong>Pressao parcial de oxigenio:</strong> o oxigenio respirável depende tanto da percentagem de gas como da pressao total. Uma atmosfera fina pode ter 21% de oxigenio e ainda assim causar hipoxia.',
        '<strong>Temperatura (calor):</strong> acima de aproximadamente 60 graus C, a desnaturacao de proteinas e a insuficiencia de orgaos comecam rapidamente. A temperatura superficial de Venus excede 460 graus C.',
        '<strong>Temperatura (frio):</strong> abaixo de zero, instalam-se queimaduras de frio e hipotermia. A temperaturas criogenicas como os -180 graus C de Titan, o congelamento dos tecidos e quase imediato.',
        '<strong>Toxicidade do dioxido de carbono:</strong> o CO2 acima de aproximadamente 5% causa tonturas, dores de cabeca e perda de consciencia. Muitas atmosferas planetarias sao maioritariamente CO2.',
        '<strong>Quimica toxica:</strong> compostos de enxofre, amonia, metano e hidrogenio podem ser corrosivos, asfixiantes ou quimicamente perigosos.',
        '<strong>Vento:</strong> ventos fortes aceleram a perda de calor por convecao, causam sensacao termica, projetam detritos e podem desestabilizar fisicamente uma pessoa.',
      ],
    },
    {
      type: 'title',
      text: 'Marte: Porque a pressao baixa mata antes de tudo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Marte tem uma pressao superficial de cerca de 0,6 kPa, muito abaixo do limite de Armstrong de 6,3 kPa onde a agua pode ferver a temperatura corporal. A exposicao nao protegida causaria ebullismo, hipoxia rapida e perda de consciencia em menos de 15 segundos. Mesmo considerando o frio (media de -60 graus C) e a atmosfera rica em dioxido de carbono, a pressao e a privacao de oxigenio dominam a linha do tempo. Uma peca de vestuario de pressao funcional e um fornecimento de oxigenio sao o minimo absoluto para sobreviver em Marte.',
    },
    {
      type: 'title',
      text: 'Venus: Pressao extrema e calor a atuar em conjunto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A superficie de Venus tem uma pressao de 92 atmosferas terrestres (cerca de 9,3 MPa, equivalente a estar a 900 metros submerso) e uma temperatura superficial de 462 graus C. A atmosfera e 96% dioxido de carbono com nuvens de acido sulfurico. Estes perigos atuam simultaneamente em vez de sequencialmente: a pressao esmaga, o calor cozinha e o CO2 envenena. Nesta calculadora, Venus e o unico destino onde multiplos perigos ultrapassam o limiar letal quase ao mesmo instante.',
    },
    {
      type: 'title',
      text: 'Titan: A pressao mais amigavel do Sistema Solar fora da Terra',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A lua de Saturno, Titan, e invulgar porque a sua pressao superficial (cerca de 147 kPa, ou 1,45 vezes a da Terra) esta dentro de um intervalo que um humano poderia tolerar. Nenhum traje de pressao seria necessario apenas para essa variavel. No entanto, Titan nao tem praticamente oxigenio, uma temperatura superficial de -179 graus C e uma atmosfera de metano e nitrogenio. A calculadora mostra a pressao como manejavel, mas a temperatura e a privacao de oxigenio dominam imediatamente. Titan e um lembrete de que a sobrevivencia depende de todo o perfil de perigo, nao apenas de uma medicao.',
    },
    {
      type: 'title',
      text: 'Como interpretar o relogio de sobrevivencia e o mapa de riscos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O relogio de sobrevivencia estima o intervalo antes de ocorrer estresse biologico grave numa pessoa nao protegida. A etiqueta do fator limitante identifica qual perigo ultrapassa primeiro o limiar critico. Os raios de perigo radiais mostram a gravidade relativa de cada um dos seis perigos monitorizados, e o grafico da linha do tempo mostra como o risco combinado se acumula durante a janela de exposicao. Estas ferramentas visuais ajudam-no a ver rapidamente porque um determinado ambiente e perigoso e qual sistema de protecao seria mais importante.',
    },
    {
      type: 'table',
      headers: ['Destino', 'Perigos mortais', 'Ameaca mais rapida', 'O que um traje deve corrigir'],
      rows: [
        ['Marte', 'Quase vacuo, hipoxia, frio, CO2', 'Pressao < limite de Armstrong', 'Peca de pressao, oxigenio, isolamento termico'],
        ['Superficie de Venus', 'Pressao esmagadora, calor de 462 graus C, CO2, acido sulfurico', 'Pressao e calor simultaneamente', 'Arrefecimento pesado, casco de pressao, aparelho respiratorio'],
        ['Titan', 'Sem oxigenio, frio de -179 graus C, metano', 'Temperatura e hipoxia', 'Fornecimento de oxigenio, protecao termica extrema'],
        ['Camada de nuvens de Jupiter', 'Sem oxigenio, rico em hidrogenio, frio, vento forte', 'Hipoxia e falta de gas respirável', 'Sistema respiratorio selado, controlo termico'],
        ['Cume do Everest', 'Hipoxia, frio, vento', 'Pressao parcial de oxigenio demasiado baixa', 'Mascara de oxigenio, equipamento para frio, aclimatacao'],
      ],
    },
    {
      type: 'title',
      text: 'O que seria necessario para sobreviver sem traje espacial?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Realisticamente, nenhum corpo conhecido do Sistema Solar alem da Terra permite a sobrevivencia humana nao protegida por mais de alguns minutos, e a maioria mata em segundos. O valor desta calculadora nao esta em encontrar um planeta seguro, mas em compreender as razoes especificas pelas quais cada ambiente e hostil. Este conhecimento orienta a educacao em ciencias planetarias, o design de habitats espaciais, as prioridades de treino de astronautas e a procura de exoplanetas potencialmente habitaveis onde uma atmosfera possa realmente sustentar a vida.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use-a para aprender:</strong> veja como mudar uma variavel, como duplicar a pressao em Marte, altera a janela de sobrevivencia.',
        '<strong>Use-a para comparar:</strong> contraste porque Titan da mais tempo do que Venus apesar de ambos serem inviaveis.',
        '<strong>Use-a para discutir:</strong> explore o que uma atmosfera terraformada precisaria para atingir condicoes respiráveis.',
        '<strong>Nao a use para decisoes reais:</strong> a calculadora utiliza limiares simplificados. O planeamento de emergencia requer medicina aeroespacial profissional.',
      ],
    },
    {
      type: 'title',
      text: 'Limitacoes importantes e proposito educativo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A sobrevivencia real depende da saude individual, vestuario, nivel de esforco, humidade, radiacao solar, historial de descompressao, mistura de gas respiratorio, tempo de resgate e muitas outras variaveis. Os dados da atmosfera planetaria tambem variam consoante a altitude, estacao do ano e fonte de medicao. Esta ferramenta utiliza limiares biologicos simplificados e dados ambientais representativos para a educacao cientifica. Foi concebida para ajudar estudantes, professores, entusiastas do espaco e escritores de ciencia a compreender a habitabilidade planetaria, nao para orientar operacoes espaciais reais.',
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
