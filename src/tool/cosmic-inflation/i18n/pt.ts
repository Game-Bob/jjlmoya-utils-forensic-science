import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-inflacao-cosmica';
const description = 'Calcule a expansao exponencial do universo primordial durante a epoca da inflacao cosmica.';
const title = 'Calculadora de Inflacao Cosmica: Expansao do Universo Primordial';

const howTo = [
  {
    name: 'Selecionar valores',
    text: 'Arraste os controles deslizantes para ver os resultados.',
  },
  {
    name: 'Comparar fatores de escala',
    text: 'Veja por quantas ordens de magnitude o espaco se expandiu.',
  },
  {
    name: 'Analisar a distorcao dinamica',
    text: 'A tela mostra a expansao do espaco.',
  },
];

const faq = [
  {
    "question": "O que e a inflacao cosmica e por que ocorreu?",
    "answer": "A inflacao cosmica e uma teoria que postula uma expansao ultra-rapida e exponencial do espaco nas fracoes de segundo iniciais do universo, especificamente por volta de 10^-36 segundos apos o Big Bang. Ocorreu porque um campo escalar teorico, denominado inflaton, encontrava-se num estado de alta densidade de energia de falso vacuo, o que gerou uma pressao negativa e uma forca de gravidade repulsiva que esticou o tecido do espaco-tempo."
  },
  {
    "question": "O que significa o numero de e-folds?",
    "answer": "O numero de e-folds mede a duracao da fase de expansao exponencial. Um e-fold representa o tempo no qual o tamanho do universo e multiplicado pelo numero de Euler (aproximadamente 2.718). Se o universo experimenta N e-folds, o seu fator de escala aumenta por um fator de e^N. Os modelos cosmologicos padrao exigem pelo menos 50 a 60 e-folds para solucionar adequadamente os problemas de planicidade e do horizonte."
  },
  {
    "question": "Como a inflacao resolve o problema do horizonte?",
    "answer": "O problema do horizonte questiona por que regioes do universo extremamente distantes têm temperaturas de radiacao de fundo de micro-ondas quase identicas, apesar de a velocidade da luz nao permitir que interagissem para alcancar o equilibrio. A inflacao resolve isso demonstrando que, antes da expansao exponencial, todo o universo observavel era uma minuscula regiao termicamente homogenea causalmente conectada, a qual foi esticada instantaneamente alem do horizonte visual."
  },
  {
    "question": "O que e o problema da planicidade e como e resolvido?",
    "answer": "A densidade de energia do universo atual esta extremamente proxima da densidade critica, o que significa que o espaco e plano com uma margem de erro minima. Sem inflacao, qualquer desvio inicial da planicidade teria crescido exponencialmente com o tempo, requerendo um ajuste fino impossivel no Big Bang. A inflacao estica a curvatura espacial de forma tao violenta que qualquer curvatura inicial e diluida, da mesma forma que a superficie de uma esfera gigante parece perfeitamente plana a nivel local."
  },
  {
    "question": "O que e o processo de reaquecimento ou reheating?",
    "answer": "O reaquecimento e a transicao termica que marca o fim da inflacao. Durante a inflacao, o universo resfria para temperaturas proximas do zero absoluto devido a expansao exponencial do volume. Quando o campo do inflaton decai para o minimo do seu potencial, a sua energia restante e vertida no espaco sob a forma de particulas do Modelo Padrao atraves de interacoes quanticas, preenchendo o cosmos com um plasma quente e denso que inicia a fase tradicional do Big Bang."
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Inflacao Cosmica',
    efoldsLabel: 'Numero de e-folds (N)',
    energyLabel: 'Escala de Energia Inicial (GeV)',
    scaleFactorResult: 'Crescimento do Fator de Escala',
    reheatingTempResult: 'Temperatura de Reaquecimento Estimada',
    chartTitle: 'Distorcao do Tecido Espaco-Tempo',
    presetGuth: 'Padrao (Guth)',
    presetChaotic: 'Caotica',
    presetExtreme: 'Limites Extremos',
    efoldsTooltip: 'Modelos tipicos preveem entre 50 e 60 e-folds.',
    energyTooltip: 'A escala GUT e de cerca de 10^16 GeV.',
    scaleFactorTooltip: 'Representa o fator de expansao total.',
    reheatingTooltip: 'A temperatura no final da inflacao.',
    analogyInsuff: 'Inflacao moderada. Esta expansao e insuficiente.',
    analogyProton: 'O universo expandiu-se do tamanho de um proton para o de uma galaxia numa fracao de segundo.',
    analogyObservable: 'O universo expandiu-se de uma escala subatomica para maior do que o universo observavel em 10^-32 segundos.',
  },
  seo: [
  {
    "type": "title",
    "text": "COSMOLOGIA: A teoria da inflacao cosmica e a expansao do espaco-tempo",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "A inflacao cosmica representa o pilar fundamental que une a fisica de particulas a astrofisica observacional. Proposta no inicio da decada de 1980 por fisicos como Alan Guth e Andrei Linde, esta teoria postula que o universo primordial sofreu uma fase de expansao exponencial impulsionada pela densidade de energia de um campo escalar conhecido como inflaton. Esta expansao aumentou o volume do universo num fator de pelo menos 10^26 numa fracao diminuta de segundo, resolvendo paradoxos profundos do modelo classico do Big Bang e proporcionando o marco teorico para a formacao da estrutura cosmica."
  },
  {
    "type": "title",
    "text": "Comparacao de modelos e parametros de inflacao",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Diferentes potenciais para o campo do inflaton produzem ritmos de expansao e temperaturas de reaquecimento distintos. Abaixo estao detalhadas as caracteristicas dos principais modelos simulados nesta calculadora:"
  },
  {
    "type": "table",
    "headers": [
      "Modelo de Inflacao",
      "Intervalo e-folds (N)",
      "Escala de Energia (GeV)",
      "Resultado Fisico e Dinamico"
    ],
    "rows": [
      [
        "<strong>Guth Padrao</strong>",
        "50 - 60",
        "10^16",
        "Resolve planicidade e horizonte; a inflacao termina por nucleacao de bolhas numa transicao de fase lenta."
      ],
      [
        "<strong>Inflacao Caotica (Linde)</strong>",
        "60 ou mais",
        "10^16",
        "O inflaton desce suavemente por um potencial parabolico simples; evita problemas de transicao de fase abrupta."
      ],
      [
        "<strong>Limites Extremos</strong>",
        "90 ou mais",
        "10^19 (Planck)",
        "Energias proximas do limite da gravidade quantica; estiramento massivo do espaco-tempo primordial."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Resolucao dos problemas do Big Bang classico",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "Antes do desenvolvimento da inflacao, a cosmologia classica do Big Bang sofria de graves inconsistencias teoricas. O problema do horizonte, derivado da homogeneidade da radiacao de fundo de micro-ondas, e o problema da planicidade, associado a densidade critica do espaco, sugeriam a necessidade de condicoes iniciais extremamente improvaveis. A inflacao solventa de forma natural ambas as dificuldades ao estirar uma micro-regiao termicamente homogenea e aplanar de maneira dinamica a geometria espacial local. Alem disso, dilui a concentracao de monopolos magneticos que deveriam ter-se formado abundantemente no universo primordial."
  },
  {
    "type": "title",
    "text": "Evidencia astronomica observacional do modelo inflacionario",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "A teoria da inflacao cosmica nao e apenas uma elegante construcao matematica; conta com solidas provas indiretas confirmadas por satelites espaciais como COBE, WMAP e Planck:"
  },
  {
    "type": "list",
    "items": [
      "<strong>Homogeneidade do CMB:</strong> A radiacao de fundo de micro-ondas mostra uma temperatura uniforme com variacoes de apenas 1 parte em 100,000 em extremos opostos do ceu visivel.",
      "<strong>Geometria Plana:</strong> As medicoes da curvatura do universo confirmam que e espacialmente plano com uma margem de erro inferior a 1%, consistente com um estiramento inflacionario massivo.",
      "<strong>Ausencia de Monopolos:</strong> Explica de forma logica a ausencia total de monopolos magneticos estaveis de grande massa no nosso universo observavel.",
      "<strong>Espectro de Fluctuacoes:</strong> As anisotropias observadas no fundo cosmico mostram um indice espectral ligeiramente inferior a 1, tal como predito pelos modelos de inflaton de rolamento lento."
    ]
  },
  {
    "type": "title",
    "text": "Flutuacoes cuanticas e a semente das galaxias",
    "level": 3
  },
  {
    "type": "paragraph",
    "html": "O aspeto mais extraordinario da inflacao cosmica e a sua capacidade para agir como um microscopio cosmico. As flutuacoes quanticas microscopicas do campo do inflaton esticaram-se a escalas astronomicas durante o periodo de expansao exponencial. Ao finalizar a inflacao, estas flutuacoes congelaram sob a forma de variacoes de densidade de materia (perturbacoes primordiais). Estas diferencas de densidade serviram como sementes gravitacionais que, ao longo de milhares de milhoes de anos, atraissem materia para dar origem as primeiras estrelas, galaxias, aglomerados de galaxias e a grande teia cosmica que observamos na atualidade."
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
