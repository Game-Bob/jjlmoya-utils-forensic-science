import { bibliography } from '../bibliography';
import type { TimeOfDeathAlgorMortisLocaleContent } from '../entry';

const slug = 'calculadora-hora-da-morte-algor-mortis';
const title = 'Calculadora da Hora da Morte por Algor Mortis';
const description = 'Estime o intervalo post mortem e a hora provavel do obito atraves do nomograma de Henssge e do resfriamento cadaverico.';

const howTo = [
  { name: 'Inserir temperaturas retal e ambiente', text: 'Introduza a temperatura retal profunda do cadaver e a temperatura ambiente do local do crime.' },
  { name: 'Definir peso corporal e fator de correcao', text: 'Indique o peso em quilogramas e selecione o fator corretivo conforme as roupas ou imersao em agua.' },
  { name: 'Indicar a hora da medicao termica', text: 'Insira a hora exata da medicao ou clique em Hora atual para calculo retrospectivo.' },
  { name: 'Analisar o intervalo post mortem', text: 'Consulte o intervalo estimado, a janela de 95 por cento de confianca e a curva termica.' }
];

const faq = [
  { question: 'O que e o Algor Mortis na medicina legal?', answer: 'O Algor Mortis e o resfriamento progressivo do corpo apos a parada circulatoria ate atingir o equilibrio termico com o ambiente.' },
  { question: 'Por que o nomograma de Henssge e superior a regras lineares?', answer: 'Porque modela com exatidao o patamar termico inicial e o decaimento bi-exponencial ajustado a massa e ao vestuario.' },
  { question: 'Qual a precisao da estimativa termometrica da morte?', answer: 'Em condicoes padrao controladas, o intervalo de confianca a 95 por cento e de aproximadamente mais ou menos 2.8 horas nas primeiras dez horas.' },
  { question: 'O que e o patamar termico post mortem inicial?', answer: 'E o periodo inicial de 1 a 3 horas apos a morte no qual a temperatura retal profunda quase nao varia enquanto se estabelece o gradiente para a pele.' }
];

export const content: TimeOfDeathAlgorMortisLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title,
    subtitle: 'Estimador do Intervalo Post Mortem e Nomograma Termico',
    disclaimer: 'Ferramenta de simulacao puramente academica. Conclusoes periciais oficiais exigem necropsia completa e avaliacao de livores e rigidez cadavérica.',
    unitSystemLabel: 'Sistema de unidades',
    unitMetricLabel: 'Metrico',
    unitImperialLabel: 'Imperial',
    presetsHeader: 'Cenarios forenses predefinidos',
    presetCustom: 'Parametros personalizados',
    presetNakedCalm: 'Despido em quarto calmo (20°C)',
    presetDressedIndoor: 'Vestido em ambiente interno (19.5°C)',
    presetWinterOutdoor: 'Exterior no inverno (4°C)',
    presetSubmergedWater: 'Submerso em agua calma (12°C)',
    presetHeavyDuvet: 'Sob edredom grosso na cama (18°C)',
    inputsHeader: 'Medicoes termicas e parametros do local',
    rectalTempLabel: 'Temp. retal profunda',
    ambientTempLabel: 'Temp. ambiente',
    bodyWeightLabel: 'Peso corporal',
    factorLabel: 'Fator corretivo ambiental',
    measurementTimeLabel: 'Hora da medicao',
    factorNaked: 'Despido em ar calmo',
    factorLightClothes: 'Roupas leves (1-2 camadas)',
    factorStandardClothes: 'Roupas normais (3-4 camadas)',
    factorHeavyWinter: 'Roupas grossas de inverno',
    factorLightBlanket: 'Cama com cobertor leve',
    factorHeavyDuvet: 'Cama com edredom grosso de plumas',
    factorStillWater: 'Submerso em agua estagnada',
    factorFlowingWater: 'Submerso em agua corrente fria',
    factorWetClothing: 'Roupas molhadas com vento',
    factorMovingAir: 'Ar em movimento com ventilador',
    resultsHeader: 'Analise do intervalo post mortem',
    estimatedPmiLabel: 'Tempo decorrido da morte',
    deathWindowLabel: 'Janela provavel de obito',
    confidenceMarginLabel: 'Margem de confianca (95%)',
    coolingPhaseLabel: 'Fase termodinamica',
    coolingRateLabel: 'Taxa instantanea de perda termica',
    glaisterEstimateLabel: 'Comparacao com regra de Glaister',
    chartHeader: 'Curva de resfriamento bi exponencial de Henssge',
    chartXAxis: 'Horas post mortem',
    chartYAxis: 'Temperatura central',
    chartNowMarker: 'Medicao registrada',
    chartPlateauMarker: 'Patamar inicial',
    phasePlateau: 'Fase de patamar',
    phaseDescent: 'Descida exponencial',
    phaseEquilibrium: 'Equilibrio termico',
    phaseHyperthermia: 'Alerta de hipertermia previa',
    hoursUnit: 'horas',
    minutesUnit: 'min',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    kgUnit: 'kg',
    lbUnit: 'lb',
    celsiusPerHour: '°C/h',
    fahrenheitPerHour: '°F/h',
    resetBtn: 'Redefinir',
    nowBtn: 'Hora atual',
    coreThermometerLabel: 'Temperatura central',
    baselineAmbientLabel: 'Limite ambiental',
    referenceBodyTempLabel: 'Referencia corporal'
  },
  seo: [
    { type: 'title', text: 'Fundamentos Fisicos do Resfriamento Cadaverico e Estimativa da Data da Morte', level: 2 },
    { type: 'paragraph', html: 'A determinacao do intervalo post mortem (IPM) e um dos objetivos fundamentais da medicina legal nas investigacoes criminais e periciais. O <strong>Algor Mortis</strong> descreve a perda progressiva de calor do corpo humano apos a cessacao cardiocirculatoria ate atingir o perfeito equilibrio termico com o ambiente do local do fato. Atraves da medicao termica retal profunda e aplicacao de modelos termodinamicos avancados, os peritos legistas podem estimar com rigor cientifico a hora exata do falecimento.' },
    { type: 'diagnostic', variant: 'info', title: 'Comportamento Termodinamico Post Mortem', html: 'A queda de temperatura nao ocorre de forma retilinea constante desde o primeiro momento. Ha um atraso inicial chamado <em>patamar termico</em>, seguido de uma queda exponencial pronunciada e uma desaceleracao assintotica final.' },
    { type: 'stats', columns: 3, items: [
      { value: '37.2°C', label: 'Referencia retal normotermica' },
      { value: '±2.8 h', label: 'Margem estatistica a 95%' },
      { value: 'Bi Exponencial', label: 'Modelo matematico de Henssge' }
    ] },
    { type: 'title', text: 'A Equacao Bi Exponencial de Claus Henssge', level: 3 },
    { type: 'paragraph', html: 'Metodos lineares empiricos simplificados como a regra de Glaister previam uma perda fixa de cerca de 0.83 grau Celsius por hora. Essa aproximacao rudimentar ignora a massa corporal, o isolamento termico dos tecidos do vestuario e o patamar inicial.' },
    { type: 'code', ariaLabel: 'Equacao de Henssge', code: 'Q = (T_retal - T_ambiente) / (37.2 - T_ambiente)\nQ = 1.25 * exp(-k * t) - 0.25 * exp(-5 * k * t)\nk = 1.2815 / (PesoCorporal^0.625 * FatorCorrecao) - 0.0284' },
    { type: 'paragraph', html: 'O professor Claus Henssge formulou uma consagrada equacao com dois termos exponenciais que contempla a dissipacao de calor na superficie corporal e a inercia termica dos orgaos viscerais profundos para fornecer um laudo pericial seguro.' },
    { type: 'title', text: 'Fatores de Correcao Ambientais e de Vestimentas', level: 3 },
    { type: 'paragraph', html: 'A troca de calor depende diretamente do peso corporal do individuo, da conveccao do ar ambiente e das camadas de roupa protetoras presentes no cadaver.' },
    { type: 'table', headers: ['Condicao no Local', 'Valor do Fator Cf', 'Efeito Fisico'], rows: [
      ['Despido em ar calmo', '1.0', 'Radiacao padrao e conveccao natural livre'],
      ['Roupas leves (1-2 camadas)', '1.1', 'Atenuacao leve da perda convectiva cutanea'],
      ['Roupas normais da cidade (3-4 camadas)', '1.2', 'Barreira termica moderada no tronco'],
      ['Roupas grossas de inverno', '1.4', 'Alto isolamento que retem camada de ar quente'],
      ['Sob edredom grosso na cama', '1.8', 'Altissima retencao termica e retardo no resfriamento'],
      ['Submerso em agua calma', '0.5', 'Condutividade termica da agua 24 vezes maior que o ar'],
      ['Submerso em agua corrente fria', '0.35', 'Conveccao forcada liquida acelerada']
    ] },
    { type: 'title', text: 'Fases Termodinamicas do Processo Tanatologico', level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: 'Patamar Termico Inicial', description: 'Nas primeiras 1 a 3 horas, a temperatura retal profunda pouco varia enquanto a pele se resfria.', points: ['Formacao do gradiente centro a periferia', 'Regras lineares subestimam o tempo aqui', 'Modelado pelo termo -0.25 exp(-5kt)'] },
      { title: 'Descida Exponencial Rapida', description: 'Apos o estabelecimento do gradiente, a perda termica ocorre em ritmo constante dependente do peso.', highlight: true, points: ['Maior sensibilidade analitica', 'Margem de erro estatistico mais estreita', 'Janela ideal para a termometria'] }
    ] },
    { type: 'title', text: 'Diretrizes Praticas para Medicao de Temperatura no Local', level: 3 },
    { type: 'list', items: [
      '<strong>Medir temperatura retal profunda:</strong> inserir a sonda digital calibrada por pelo menos 8 a 10 cm no reto.',
      '<strong>Medir a temperatura ambiente proxima ao corpo:</strong> posicionar o sensor a menos de 10 cm do cadaver.',
      '<strong>Verificar a estabilidade termica do ambiente:</strong> registrar aquecedores ligados, janelas abertas ou insolacao.',
      '<strong>Avaliar umidade nas vestimentas:</strong> roupas molhadas aumentam consideravelmente o resfriamento evaporativo.'
    ] },
    { type: 'summary', title: 'Sintese Metodologica', items: [
      'O nomograma de Henssge e o padrao cientifico internacional para estimativa da hora da morte.',
      'Sempre apresentar o resultado como um intervalo de confianca e nao um horario pontual exato.',
      'O exame deve ser obrigatoriamente correlacionado com a rigidez cadaverica e os livores.'
    ] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
