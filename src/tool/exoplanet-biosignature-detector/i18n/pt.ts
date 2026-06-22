import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'detetor-biossinais-exoplanetas';
const title = 'Detetor de Biossinais de Exoplanetas';
const description = 'Alinhe as linhas de absorção de oxigénio, metano e ozono num espectro de transmissão simulada de um exoplaneta. Avalie a habitabilidade biológica, o risco de contaminação por tecnossinaturas e a probabilidade de falsos positivos com base em evidências espetroscópicas.';

const howTo = [
  {
    name: 'Escolha a estrela anfitriã',
    text: 'Selecione uma anã K, uma estrela semelhante ao Sol ou uma anã M. O tipo de estrela influencia diretamente o risco de falsos positivos, uma vez que o fluxo ultravioleta, a atividade eruptiva e a fotoquímica atmosférica condicionam a interpretação dos sinais de oxigénio e ozono.',
  },
  {
    name: 'Alinhe as linhas espetrais',
    text: 'Ajuste os controlos de oxigénio, metano e ozono até que os marcadores de absorção observados coincidam com as bandas de referência no espectro simulado.',
  },
  {
    name: 'Defina o ruído e o contexto atmosférico',
    text: 'Aumente o ruído instrumental para observar a diminuição da confiança nos dados. Ajuste os níveis de vapor de água e dióxido de carbono para representar diferentes cenários atmosféricos, desde ambientes mais húmidos a quimicamente complexos.',
  },
  {
    name: 'Analise os índices de habitabilidade',
    text: 'Compare os indicadores biológicos e tecnológicos com o risco de falso positivo. Um resultado robusto exige a presença de vários gases em desequilíbrio químico, em vez de uma única linha isolada.',
  },
];

const faq = [
  {
    question: 'O que é uma biossinatura na espetroscopia de exoplanetas?',
    answer: 'Uma biossinatura é uma característica detetável à distância que pode indicar a presença de processos biológicos. Os candidatos mais comuns incluem oxigénio, ozono, metano e vapor de água, especialmente quando ocorrem em combinações que deveriam reagir entre si e desaparecer, a menos que sejam continuamente repostos por uma fonte ativa.',
  },
  {
    question: 'Porque é que a combinação de oxigénio e metano é crucial?',
    answer: 'O oxigénio e o metano são quimicamente reativos. A presença de ambos em quantidades significativas sugere um desequilíbrio químico na atmosfera, o que constitui um indicador muito mais forte de potencial atividade biológica do que a presença de apenas um destes gases.',
  },
  {
    question: 'O oxigénio pode gerar um falso positivo?',
    answer: 'Sim. O oxigénio pode acumular-se na atmosfera através de processos abióticos, como a fotólise da água por radiação UV ou atividade vulcânica. Por isso, esta ferramenta calcula o risco de falso positivo, em vez de assumir o oxigénio como prova definitiva de vida.',
  },
  {
    question: 'Porque é que o ozono é analisado separadamente do oxigénio?',
    answer: 'O ozono é um produto fotoquímico derivado do oxigénio e possui características espetrais muito distintas. Funciona como um indicador indireto útil, especialmente quando as bandas de absorção direta do oxigénio são difíceis de isolar.',
  },
  {
    question: 'O que representa o índice tecnológico?',
    answer: 'O índice tecnológico é uma métrica especulativa que alerta para casos em que o espectro é tão invulgar, ruidoso ou energeticamente anómalo que não se pode descartar a presença de fontes artificiais (tecnossinaturas). Não constitui uma confirmação de deteção.',
  },
  {
    question: 'Isto é um modelo científico real de recuperação de dados?',
    answer: 'Não. Este é um simulador educacional que traduz conceitos fundamentais da espetroscopia num modelo interativo. Análises científicas reais requerem modelos complexos de transferência radiativa, inferência bayesiana e correções rigorosas para ruído instrumental e contaminação estelar.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    visualization: 'Visualização do espectro de transmissão de exoplaneta',
    starClass: 'Estrela anfitriã',
    starK: 'Anã K calma',
    starSun: 'Estrela G (semelhante ao Sol)',
    starM: 'Anã M ativa',
    noise: 'Ruído instrumental',
    oxygenLine: 'Marcador de oxigénio',
    methaneLine: 'Marcador de metano',
    ozoneLine: 'Marcador de ozono',
    waterVapor: 'Contexto de vapor de água',
    carbonDioxide: 'Contexto de CO2',
    habitabilityIndex: 'Índice de habitabilidade',
    biologicalIndex: 'Biológico',
    technologicalIndex: 'Tecnológico',
    falsePositiveRisk: 'Risco de falso positivo',
    oxygen: 'O2',
    methane: 'CH4',
    ozone: 'O3',
    oxygenShort: 'O2',
    methaneShort: 'CH4',
    ozoneShort: 'O3',
    conclusion: 'Conclusão',
    dataLive: 'Síntese de dados em tempo real',
    percentUnit: '{value}%',
    nanometerUnit: '{value} nm',
    pendingValue: '...',
    statusReady: 'Alinhe os marcadores espetrais para avaliar a evidência atmosférica.',
    verdictWeak: 'O espectro é fraco: os dados não suportam uma interpretação favorável à vida.',
    verdictPromising: 'O espectro é promissor: vários marcadores de biossinaturas apresentam alinhamentos parciais.',
    verdictStrong: 'O espectro é forte: oxigénio, metano e ozono formam um sinal coerente de desequilíbrio químico.',
    verdictAmbiguous: 'O sinal é interessante, mas ambíguo: o risco de falsos positivos (estelares ou atmosféricos) é elevado.',
  },
  seo: [
    { type: 'title', text: 'Detetor de Biossinais de Exoplanetas', level: 2 },
    {
      type: 'paragraph',
      html: 'O Detetor de Biossinais de Exoplanetas é um simulador espetroscópico interativo que ajuda a compreender como gases associados à vida se manifestam na luz que filtra a atmosfera de um planeta distante. Em vez de uma análise simplista, a ferramenta desafia o utilizador a alinhar as assinaturas de oxigénio, metano e ozono, ponderando o resultado face ao ruído, vapor de água, CO2 e às características da estrela anfitriã.',
    },
    {
      type: 'paragraph',
      html: 'Este é o desafio central da astrobiologia: um único gás, isolado, raramente constitui prova. As evidências mais sólidas combinam múltiplos gases, contexto físico e a exclusão rigorosa de processos abióticos. Este simulador torna visíveis estes compromissos científicos num ambiente laboratorial intuitivo.',
    },
    { type: 'title', text: 'Como a espetroscopia de transmissão revela a atmosfera', level: 3 },
    {
      type: 'paragraph',
      html: 'Durante um trânsito planetário, uma fração da luz estelar passa pela atmosfera do planeta, sendo absorvida por moléculas a comprimentos de onda específicos. Isto cria "marcas" no espectro medido. Ao comparar estas marcas com dados laboratoriais, os astrónomos inferem a composição atmosférica, embora fatores como nuvens, névoa e ruído instrumental tornem a análise um processo complexo.',
    },
    { type: 'title', text: 'Oxigénio, metano e ozono, a sinergia dos sinais', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Oxigénio (O2):</strong> Na Terra, é mantido pela fotossíntese, mas em outros contextos pode acumular-se por processos abióticos.',
        '<strong>Metano (CH4):</strong> Pode ter origem biológica, geológica ou ser resultado de impactos. Ganha relevância quando detetado junto a gases oxidantes.',
        '<strong>Ozono (O3):</strong> Produto fotoquímico do oxigénio; frequentemente mais fácil de detetar, servindo como uma pista indireta valiosa.',
        '<strong>Contexto de água e CO2:</strong> A água é essencial para a habitabilidade, enquanto o CO2 permite estimar o efeito de estufa e identificar cenários de falso positivo.',
      ],
    },
    { type: 'title', text: 'Por que o risco de falsos positivos é crucial', level: 3 },
    {
      type: 'paragraph',
      html: 'Uma elevada concentração de oxigénio não implica obrigatoriamente vida. Processos não biológicos, como a fotólise da água por radiação UV da estrela, podem imitar biossinaturas. Especialmente em torno de anãs M ativas, erupções estelares podem alterar drasticamente a química atmosférica. O simulador aumenta o indicador de risco sempre que a explicação biológica perde robustez.',
    },
    {
      type: 'table',
      headers: ['Padrão de sinal', 'Interpretação', 'Observações'],
      rows: [
        ['Apenas O2', 'Atmosfera potencialmente oxigenada', 'Possível origem abiótica (perda de água)'],
        ['Apenas CH4', 'Atmosfera redutora ou geologia ativa', 'Fraca evidência de vida isoladamente'],
        ['O2 + CH4', 'Desequilíbrio químico', 'Requer análise profunda e verificação de contaminação'],
        ['O2 + O3 + água', 'Contexto similar ao terrestre', 'Nuvens e atividade estelar permanecem como variáveis críticas'],
      ],
    },
    { type: 'title', text: 'Índices de habitabilidade biológica e tecnológica', level: 3 },
    {
      type: 'paragraph',
      html: 'O índice biológico foca-se no desequilíbrio químico (O2 + CH4). O índice tecnológico é deliberadamente especulativo, destacando casos em que a atmosfera apresenta parâmetros tão anómalos que poluição industrial, modificação deliberada ou artefactos de observação devem ser considerados antes de assumir a existência de vida.',
    },
    {
      type: 'paragraph',
      html: 'Utilize esta ferramenta para treinar o seu raciocínio lógico. A avaliação real de biossinaturas exige modelos atmosféricos comparativos, correções de sistemática telescópica e um rigoroso cálculo de incertezas. O valor pedagógico deste simulador reside na disciplina que impõe: alinhar evidências, verificar o contexto e estar sempre atento aos falsos positivos.',
    },
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
