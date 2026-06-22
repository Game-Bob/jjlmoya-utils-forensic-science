import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-sir-epidemia';
const title = 'Simulador SIR de epidemias';
const description = 'Explore a propagação de agentes patogénicos com um modelo SIR interativo que ajusta R0, letalidade, vacinação, período infecioso, pico de carga e curvas de transmissão em tempo real.';

const howTo = [
  {
    name: 'Definir o número de reprodução',
    text: 'Movimente o slider de R0 para representar quantas infeções secundárias uma pessoa infeciosa causaria numa população totalmente suscetível.',
  },
  {
    name: 'Adicionar vacinação e eficácia da vacina',
    text: 'Aumente a cobertura vacinal ou a eficácia da vacina para remover pessoas protegidas do grupo suscetível e reduzir o número de reprodução efetivo.',
  },
  {
    name: 'Ajustar a letalidade e a duração da infeção',
    text: 'Altere a percentagem de fatalidade e o número de dias infeciosos para ver como os resultados graves e a evolução temporal da curva respondem.',
  },
  {
    name: 'Ler as curvas SIR',
    text: 'Use o gráfico e o inspetor de dia para comparar as curvas de suscetíveis, infetados, recuperados e mortes estimadas ao longo do surto simulado.',
  },
];

const faq = [
  {
    question: 'O que mostra um modelo SIR?',
    answer: 'Um modelo SIR divide uma população em grupos suscetível, infetado e recuperado. Estima como as pessoas se movem entre esses grupos ao longo do tempo à medida que ocorrem transmissão e recuperação.',
  },
  {
    question: 'Como é que a vacinação altera a curva?',
    answer: 'A vacinação reduz a população suscetível quando previne a infeção. Neste simulador, a vacinação eficaz reduz o número de reprodução efetivo e pode diminuir ou atrasar o pico da infeção.',
  },
  {
    question: 'R0 é o mesmo que Re?',
    answer: 'Não. R0 descreve a propagação numa população totalmente suscetível. Re é o número de reprodução efetivo após a imunidade, vacinação ou mudanças comportamentais reduzirem o número de pessoas que podem ser infetadas.',
  },
  {
    question: 'Porque é que a curva de infetados atinge um pico e depois cai?',
    answer: 'A curva de infetados cai quando cada pessoa infeciosa gera menos novas infeções do que o número de pessoas que saem do grupo infetado por recuperação ou morte. A diminuição da suscetibilidade é o principal fator num modelo SIR básico.',
  },
  {
    question: 'Isto pode prever uma epidemia real?',
    answer: 'É uma ferramenta de ensino e de cenários, não uma previsão. Surtos reais precisam de estrutura etária, redes de contacto, geografia, atrasos de notificação, mudanças comportamentais, variantes, imunidade decrescente e dados calibrados.',
  },
  {
    question: 'Qual é a diferença entre a taxa de ataque e o pico de infetados?',
    answer: 'A taxa de ataque mede a proporção total da população alguma vez infetada até ao final do surto. O pico de infetados mede o número máximo de pessoas simultaneamente infeciosas num dado momento. Um pico baixo não garante uma taxa de ataque baixa, e vice-versa.',
  },
  {
    question: 'O que significa visualmente um Re abaixo de 1?',
    answer: 'Quando Re cai abaixo de 1, cada pessoa infeciosa gera em média menos de uma nova infeção. No gráfico, a curva de infetados nunca sobe acentuadamente e pode declinar imediatamente a partir da semente inicial, significando que o surto não se consegue sustentar.',
  },
  {
    question: 'Como é que o período infecioso afeta o surto?',
    answer: 'Um período infecioso mais longo prolonga o tempo durante o qual cada pessoa infetada pode transmitir o agente patogénico. Isto estende a linha temporal do surto, atrasa o pico e, para o mesmo R0, pode produzir uma curva mais larga com um pico mais baixo.',
  },
  {
    question: 'Porque é que a letalidade não altera a curva de infetados?',
    answer: 'Neste modelo SIR, a letalidade afeta apenas o número de mortes que se ramifica do grupo de recuperados. Não retroage na transmissão porque tanto as mortes como as recuperações removem pessoas do grupo infecioso à mesma taxa.',
  },
  {
    question: 'O que é o limiar de imunidade de grupo?',
    answer: 'O limiar de imunidade de grupo é a fração da população que tem de estar imune para que Re caia abaixo de 1. É aproximado por 1 - 1/R0. Para o sarampo com R0 à volta de 12, o limiar é superior a 91%. Para a gripe sazonal com R0 à volta de 1,3, o limiar é perto de 23%.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    liveScenario: 'Cenário de epidemia em tempo real',
    curveChart: 'Curvas de transmissão SIR',
    inspectDay: 'Inspecionar o dia da simulação',
    legend: 'Legenda das curvas',
    susceptible: 'Suscetíveis',
    infected: 'Infetados',
    recovered: 'Recuperados ou imunes',
    deaths: 'Mortes',
    controls: 'Controlos da epidemia',
    modelName: 'Modelo de compartimentos',
    peakInfected: 'Pico de infetados',
    peakDay: 'Dia do pico',
    attackRate: 'Taxa de ataque',
    estimatedDeaths: 'Mortes estimadas',
    r0: 'Número básico de reprodução R0',
    lethality: 'Letalidade',
    vaccination: 'Cobertura vacinal',
    vaccineEffectiveness: 'Eficácia da vacina',
    infectiousDays: 'Período infecioso',
    initialInfected: 'Infetados iniciais',
    dayLabel: 'Dia',
    daysUnit: 'dias',
    infectiousLabel: 'infeciosos',
    reLabel: 'Re',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador SIR de epidemias para R0, vacinação, letalidade e curvas de transmissão',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador SIR de epidemias permite-lhe explorar como um agente patogénico se propaga numa população quando pessoas suscetíveis são infetadas e depois abandonam o grupo infecioso por recuperação ou morte. Foi concebido para estudantes, comunicadores de ciência, aprendizes de saúde pública e qualquer pessoa que queira uma explicação visual rápida de porque é que pequenas alterações na transmissão ou na imunidade podem remodelar um surto.',
    },
    {
      type: 'paragraph',
      html: 'Os controlos interativos focam-se nas variáveis que as pessoas mais frequentemente querem testar: <strong>R0</strong>, letalidade, cobertura vacinal, eficácia da vacina, duração infeciosa e a proporção inicial de infetados. O gráfico atualiza-se imediatamente para que as curvas de suscetíveis, infetados, recuperados, imunes e mortes possam ser comparadas como um sistema epidémico interligado.',
    },
    {
      type: 'title',
      text: 'Como funciona o modelo SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um modelo SIR básico divide a população em três compartimentos principais. <strong>S</strong> são as pessoas suscetíveis que ainda podem ser infetadas. <strong>I</strong> são as pessoas atualmente infeciosas que podem transmitir o agente patogénico. <strong>R</strong> são as pessoas que já não são infeciosas porque recuperaram, ganharam imunidade ou abandonaram de outra forma a cadeia de transmissão. Este simulador também regista as mortes estimadas como um ramo de resultado grave a partir do grupo que abandona a infeção.',
    },
    {
      type: 'paragraph',
      html: 'A taxa de transmissão está ligada a R0 e ao período infecioso. Se R0 for elevado ou as pessoas permanecerem infeciosas durante mais tempo, são geradas mais novas infeções antes de o grupo infetado diminuir. Se a vacinação remover pessoas suficientes do grupo suscetível, o número de reprodução efetivo cai e o pico do surto pode tornar-se muito menor.',
    },
    {
      type: 'table',
      headers: ['Controlo', 'O que altera', 'Efeito típico na curva'],
      rows: [
        ['R0', 'Potencial de transmissão antes de considerar a imunidade', 'Um R0 mais elevado faz a curva de infetados subir mais rapidamente e atingir um pico mais alto.'],
        ['Cobertura vacinal', 'Proporção de pessoas retiradas do grupo suscetível quando protegidas', 'Uma cobertura mais elevada reduz Re e pode achatar o surto.'],
        ['Eficácia da vacina', 'O quanto a vacinação previne a infeção neste modelo simplificado', 'Uma eficácia mais elevada torna a mesma cobertura mais protetora.'],
        ['Período infecioso', 'Tempo médio que as pessoas permanecem infeciosas', 'Uma infeção mais longa altera a temporização e pode prolongar o surto.'],
        ['Letalidade', 'Proporção de pessoas que abandonam a infeção e são contadas como mortes', 'Uma letalidade mais elevada aumenta a curva de mortes sem aumentar diretamente a transmissão.'],
      ],
    },
    {
      type: 'title',
      text: 'Intuição sobre R0, Re e imunidade de grupo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'R0 é o número médio de casos secundários causados por uma pessoa infeciosa numa população totalmente suscetível. Re, o número de reprodução efetivo, é mais baixo quando algumas pessoas já são imunes, vacinadas, isoladas ou não estão disponíveis para infeção. Neste simulador, a vacinação eficaz reduz diretamente a suscetibilidade, pelo que o Re exibido cai à medida que a cobertura protegida aumenta.',
    },
    {
      type: 'paragraph',
      html: 'Uma aproximação comum da imunidade de grupo é <strong>1 - 1 / R0</strong>. Para um R0 de 3, o limiar é cerca de 66,7% de imunidade eficaz. O simulador ajuda a tornar esse limiar tangível: quando a vacinação eficaz está abaixo do limiar, os surtos ainda podem crescer; quando está acima do limiar, a transmissão tem dificuldade em manter-se.',
    },
    {
      type: 'title',
      text: 'O que significa o número de pico de infetados',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O pico de infetados é o número máximo de pessoas simultaneamente infeciosas na população simulada. É frequentemente mais importante operacionalmente do que o total de infeções porque hospitais, laboratórios, programas de isolamento e equipas de rastreio de contactos sofrem pressão de casos ativos simultâneos. Reduzir o pico pode ser importante mesmo quando a taxa de ataque final não é reduzida a zero.',
    },
    {
      type: 'paragraph',
      html: 'A taxa de ataque estima a proporção de toda a população infetada até ao final da simulação. Uma taxa de ataque elevada significa que o agente patogénico atingiu muitas pessoas antes de a suscetibilidade ser esgotada ou controlada. Uma taxa de ataque baixa significa que a imunidade, a vacinação ou uma transmissão fraca impediram uma propagação alargada.',
    },
    {
      type: 'title',
      text: 'Valores reais de R0 e o que implicam para a imunidade de grupo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O número básico de reprodução R0 não é uma constante biológica fixa para um agente patogénico. Depende dos padrões de contacto, densidade populacional, hábitos culturais e fatores ambientais. O mesmo vírus pode ter diferentes valores de R0 numa cidade densa versus uma área rural, ou numa estação com mais aglomeração interior. Os valores abaixo são intervalos de referência ilustrativos de estudos publicados.',
    },
    {
      type: 'table',
      headers: ['Agente patogénico', 'Intervalo típico de R0', 'Limiar de imunidade de grupo (1 - 1/R0)', 'Característica chave de transmissão'],
      rows: [
        ['Gripe sazonal', '1,2 - 1,4', '17% - 29%', 'Período infecioso curto, variação sazonal'],
        ['SARS-CoV-2 (ancestral)', '2,0 - 3,0', '50% - 67%', 'Transmissão pré-sintomática, vias aéreas'],
        ['SARS-CoV-2 (Delta)', '5,0 - 8,0', '80% - 87%', 'Carga viral aumentada, propagação mais rápida'],
        ['SARS-CoV-2 (Omicron)', '8,0 - 12,0', '87% - 92%', 'Evasão imune, tropismo respiratório superior'],
        ['Poliomielite', '5,0 - 7,0', '80% - 86%', 'Via fecal-oral, excreção assintomática prolongada'],
        ['Varíola', '5,0 - 7,0', '80% - 86%', 'Erradicada através de campanha global de vacinação'],
        ['Sarampo', '12,0 - 18,0', '92% - 94%', 'Extremamente contagioso, via aérea, período infecioso longo'],
        ['Tosse convulsa', '12,0 - 17,0', '92% - 94%', 'Imunidade decrescente permite infeções repetidas'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Um limiar de imunidade de grupo elevado não significa automaticamente que a vacinação é inútil quando a cobertura está abaixo do limiar. Mesmo a imunidade parcial abranda a transmissão, reduz o pico, diminui os resultados graves e ganha tempo para os sistemas de saúde. O simulador demonstra este efeito quando movimenta o slider de vacinação através de valores intermediários.',
    },
    {
      type: 'title',
      text: 'Como o número de reprodução efetivo Re muda durante um surto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Re é o número de reprodução efetivo num dado momento do surto. Ao contrário de R0, que assume uma população totalmente suscetível, Re tem em conta a imunidade, a vacinação e quaisquer outros fatores que reduzem a suscetibilidade. Neste simulador, Re é calculado como <strong>R0 x (1 - fração protegida)</strong>, onde a fração protegida é a proporção da população efetivamente imune através da vacinação.',
    },
    {
      type: 'paragraph',
      html: 'O valor de Re exibido no cabeçalho do simulador atualiza-se à medida que movimenta os controlos. Quando Re se mantém acima de 1, o surto cresce. Quando cai abaixo de 1, cada pessoa infetada gera em média menos de uma nova infeção, e a epidemia não se consegue sustentar. Esta é a perceção central por trás do controlo de epidemias: levar e manter Re abaixo de 1 através de imunidade, comportamento ou intervenções.',
    },
    {
      type: 'title',
      text: 'Taxa de ataque, carga de pico e o que revelam sobre a gravidade do surto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A taxa de ataque é a fração da população total infetada durante todo o surto simulado. É a métrica resumo mais frequentemente citada após uma vaga epidémica. Uma taxa de ataque elevada significa que o agente patogénico infetou a maioria das pessoas suscetíveis antes de a diminuição ou o controlo pararem a transmissão. Uma taxa de ataque baixa significa que a imunidade, a vacinação ou uma transmissão inerentemente fraca impediram a infeção generalizada.',
    },
    {
      type: 'paragraph',
      html: 'O pico de infetados - o número máximo de pessoas simultaneamente infeciosas - é mais importante para a pressão de curto prazo nos cuidados de saúde. Uma vaga com uma taxa de ataque moderada mas um pico muito alto e acentuado pode sobrecarregar hospitais mesmo que o total de casos não seja extremo. Inversamente, uma curva lenta e achatada pode ter uma taxa de ataque semelhante distribuída por muitas semanas, dando ao sistema de saúde tempo para gerir os casos. É por isso que as autoridades de saúde pública enfatizam <strong>achatar a curva</strong> como um objetivo operacional distinto de prevenir todas as infeções.',
    },
    {
      type: 'title',
      text: 'Achatar a curva e a capacidade de saúde no modelo SIR',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A curva de infetados num modelo SIR pode ser interpretada como o número de pessoas que necessitam de cuidados simultaneamente. Numa epidemia real, cada pessoa que precisa de uma cama de hospital, suporte de oxigénio ou cuidados intensivos recorre a um conjunto finito de recursos. Quando a curva de infetados sobe acima da capacidade disponível, a mortalidade por todas as causas aumenta porque o sistema não consegue fornecer cuidados adequados.',
    },
    {
      type: 'paragraph',
      html: 'A vacinação, neste modelo, achata a curva ao remover pessoas do grupo suscetível antes de poderem ser infetadas. Reduzir R0 através de outras medidas - máscaras, ventilação, distanciamento, testagem, isolamento - também reduziria o pico num modelo mais completo. A simulação torna o mecanismo visível: à medida que a cobertura vacinal eficaz aumenta, o pico diminui, desloca-se para mais tarde ou desaparece totalmente.',
    },
    {
      type: 'title',
      text: 'A matemática por trás do modelo SIR visualizada',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No modelo SIR, a taxa de novas infeções por passo temporal depende de três quantidades: a taxa de transmissão <strong>beta</strong>, o número atual de pessoas infeciosas <strong>I</strong> e a fração da população efetiva que ainda é suscetível <strong>S / N</strong>. O produto <strong>beta x I x S / N</strong> é chamado a força de infeção. Cada dia, esta força determina quantas pessoas suscetíveis passam para o compartimento de infetados.',
    },
    {
      type: 'paragraph',
      html: 'As pessoas saem do compartimento de infetados à taxa de recuperação <strong>gamma = 1 / período infecioso</strong>. O equilíbrio entre a força de infeção e a taxa de recuperação determina se a epidemia cresce ou diminui. Quando beta x S / N excede gamma, as novas infeções superam as recuperações e o surto expande-se. Quando a fração suscetível S / N caiu o suficiente, gamma domina e o surto contrai-se.',
    },
    {
      type: 'paragraph',
      html: 'O parâmetro <strong>beta</strong> não está diretamente visível na interface. Em vez disso, é derivado de R0 e do período infecioso através da relação <strong>beta = R0 x gamma</strong>. É por isso que alterar R0 ou o período infecioso produz formas de curva semelhantes mas não idênticas. Ambos os parâmetros influenciam a força de infeção, mas o período infecioso também estende o eixo temporal do surto.',
    },
    {
      type: 'title',
      text: 'Como usar este simulador para aprender e ensinar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Comparar cenários de R0 alto vs. baixo:</strong> defina R0 para 1,5 (intervalo da gripe sazonal) e depois para 6,0 (intervalo da poliomielite pré-vacinação). Repare como a altura do pico, o momento do pico e a taxa de ataque mudam mesmo quando todos os outros controlos são idênticos.',
        '<strong>Explorar o limiar de imunidade de grupo:</strong> comece com R0 em 3,0 e sem vacinação. Note a taxa de ataque. Depois adicione cobertura vacinal até Re cair abaixo de 1. Compare o pico e a taxa de ataque com cobertura logo abaixo e logo acima do limiar.',
        '<strong>Testar o efeito de resposta lenta vs. rápida:</strong> defina a cobertura vacinal em diferentes níveis e observe quando o pico ocorre. Uma cobertura mais elevada não só reduz a altura do pico como geralmente o atrasa, ganhando tempo para a preparação dos cuidados de saúde.',
        '<strong>Separar a letalidade da transmissão:</strong> defina a letalidade para 0% e observe a curva de infetados. Depois defina a letalidade para 10% sem alterar outras definições. A curva de infetados não se altera, mas o número de mortes aumenta. Isto demonstra porque é que a taxa de letalidade e a velocidade de transmissão são dimensões epidemiológicas distintas.',
        '<strong>Examinar o efeito do período infecioso:</strong> compare um período infecioso de 4 dias com um de 18 dias para o mesmo R0. O período mais longo estende a curva, atrasa o pico e produz uma vaga mais longa mas mais baixa.',
        '<strong>Exercício de sala de aula - encontrar o limiar:</strong> peça aos alunos para encontrar a cobertura vacinal mínima que faz Re cair abaixo de 1 para um dado R0 e depois compare o resultado com a fórmula 1 - 1/R0.',
      ],
    },
    {
      type: 'title',
      text: 'Quando e porque usar este simulador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Estudantes de epidemiologia:</strong> conectem o quadro matemático SIR a formas de curva interativas antes de trabalhar com equações diferenciais ou programar os seus próprios modelos.',
        '<strong>Comunicadores de ciência e jornalistas:</strong> gerem gráficos, capturas de ecrã ou explicações ao vivo que mostrem porque é que R0, vacinação e período infecioso são importantes para as trajetórias dos surtos.',
        '<strong>Aprendizes de saúde pública:</strong> testem como diferentes combinações de intervenção deslocam o pico epidémico e a taxa de ataque para desenvolver intuição sobre os compromissos na resposta a surtos.',
        '<strong>Qualquer pessoa curiosa sobre a matemática de epidemias:</strong> explorem o modelo SIR sem precisar de escrever código ou instalar software. Cada controlo atualiza o gráfico em tempo real.',
      ],
    },
    {
      type: 'title',
      text: 'Extensões do modelo: SEIR, SIRS e além',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Este simulador utiliza uma estrutura SIR básica. Várias extensões comuns adicionam realismo. Um <strong>modelo SEIR</strong> adiciona um compartimento de expostos (E) para pessoas que estão infetadas mas ainda não são infeciosas, representando o período de incubação. O grupo de expostos atrasa o pico epidémico em comparação com o modelo SIR porque as infeções passam tempo na fase latente antes de contribuírem para a transmissão.',
    },
    {
      type: 'paragraph',
      html: 'Um <strong>modelo SIRS</strong> permite que indivíduos recuperados percam imunidade ao longo do tempo e reentrem no compartimento suscetível. Isto modela agentes patogénicos como a tosse convulsa ou o SARS-CoV-2 com imunidade decrescente e produz vagas epidémicas sustentadas ou recorrentes. Um <strong>modelo estruturado por idades</strong> divide a população em grupos etários com diferentes matrizes de contacto e perfis de gravidade, o que é essencial para doenças onde crianças e idosos têm resultados muito diferentes.',
    },
    {
      type: 'paragraph',
      html: 'Outras extensões adicionam propagação geográfica (modelos metapopulacionais), mudança comportamental (taxas de contacto adaptativas), ruído estocástico (para populações pequenas onde a extinção aleatória é importante) e temporização de intervenções (encerramento de escolas, confinamentos, restrições de viagem que se ativam e desativam). Cada extensão adiciona complexidade que é essencial para a previsão mas pode obscurecer a dinâmica central de transmissão que o modelo SIR básico ilustra de forma clara.',
    },
    {
      type: 'title',
      text: 'Limitações deste simulador de epidemias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Este é um modelo SIR determinístico compacto. Não inclui grupos etários, estrutura familiar, escolas, viagens, superpropagação, períodos de incubação, transmissão assintomática, sazonalidade, variantes, imunidade decrescente, mudanças comportamentais, atrasos de testagem ou intervenções de saúde pública que se ativam e desativam ao longo do tempo. Esses detalhes são essenciais para a previsão real.',
    },
    {
      type: 'paragraph',
      html: 'O modelo assume uma população bem misturada onde cada pessoa suscetível tem igual probabilidade de contacto com cada pessoa infeciosa. As populações reais têm redes de contacto com forte agrupamento, assortatividade etária, estrutura geográfica e variação individual na infeciosidade. Estas características podem criar crescimento inicial mais lento, eventos de superpropagação e padrões de surto heterogéneos que um modelo homogéneo não capta.',
    },
    {
      type: 'paragraph',
      html: 'Use o simulador para compreender mecanismos e comparar cenários, não para tomar decisões médicas, políticas ou de emergência. A avaliação real de epidemias requer dados de vigilância, contexto local, análise de incerteza e modelização epidemiológica especializada.',
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
