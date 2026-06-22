import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'calculadora-meia-vida-decaimento-radioativo';
const title = 'Calculadora de meia vida e decaimento radioativo';
const description = 'Simule decaimento radioativo com isótopos reais, fórmula de meia-vida, campo atómico estocástico, quantidade restante e atividade relativa.';

const howTo = [
  { name: 'Escolha um isótopo', text: 'Comece com Carbono-14, Iodo-131, Urânio-238, Tecnécio-99m ou Radão-222. Cada pré-definição carrega uma meia-vida realista e o contexto científico em que costuma ser usado.' },
  { name: 'Defina a amostra e o tempo', text: 'Ajuste o número de átomos representados e avance o tempo para ver como a fração restante segue a lei exponencial da meia-vida.' },
  { name: 'Compare matemática exata e acaso atómico', text: 'Use o resultado determinístico como valor esperado e observe o campo atómico para entender por que amostras pequenas oscilam em torno da curva teórica.' },
  { name: 'Interprete a atividade', text: 'A atividade cai na mesma proporção dos núcleos não decaídos, por isso o medidor mostra quanto da taxa de radiação inicial ainda resta.' },
];

const faq = [
  { question: 'O que significa meia-vida?', answer: 'Meia-vida é o tempo necessário para que metade dos núcleos instáveis de uma amostra decaia, em média. Depois de uma meia-vida restam 50%, depois de duas restam 25% e depois de três restam 12,5%.' },
  { question: 'Por que o campo atómico nem sempre bate com a percentagem exata?', answer: 'O decaimento radioativo é probabilístico. A fórmula fornece a fração esperada para uma amostra muito grande, enquanto o campo simula átomos individuais com limiares aleatórios. Amostras pequenas mostram ruído estatístico naturalmente.' },
  { question: 'O medidor de atividade é igual aos átomos restantes?', answer: 'Para um único isótopo, a atividade é proporcional ao número de núcleos não decaídos. Se restam 30% dos átomos, a atividade instantânea também fica por volta de 30% da atividade inicial.' },
  { question: 'Esta calculadora serve para datação por radiocarbono?', answer: 'Sim, para cálculos conceituais. A datação com Carbono-14 compara a atividade restante com a de material vivo, mas análises reais também corrigem curvas de calibração, contaminação e preparo da amostra.' },
  { question: 'Todo isótopo decai para um único produto estável?', answer: 'Nem sempre. Alguns isótopos decaem por cadeias com vários produtos filhos. Esta ferramenta modela a meia-vida do isótopo pai, a grandeza principal para estimar núcleos pais restantes e atividade.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    isotope: 'Isótopo',
    sampleAtoms: 'Átomos da amostra',
    elapsedTime: 'Tempo decorrido',
    halfLife: 'Meia-vida',
    remaining: 'Restante',
    decayed: 'Decaido',
    activity: 'Atividade relativa',
    timeUnit: 'Unidade de tempo',
    expectedCurve: 'Curva esperada',
    atomField: 'Campo atomico',
    presetUse: 'Uso comum',
    oneHalfLife: '1 meia-vida',
    twoHalfLives: '2 meias-vidas',
    fourHalfLives: '4 meias-vidas',
    custom: 'Personalizado',
    liveAtoms: 'Átomos ativos',
    decayedAtoms: 'Átomos decaídos',
    resetSeed: 'Novo padrão atómico',
  },
  seo: [
    { type: 'title', text: 'Calculadora de meia-vida radioativa: átomos restantes, atividade e exemplos de isótopos', level: 2 },
    { type: 'paragraph', html: 'Use esta calculadora de decaimento radioativo para estimar quanto resta de um isótopo instável depois de um certo tempo. Ela atende às buscas mais comuns sobre meia-vida: encontrar a fórmula, aplicá-la a isótopos reais, comparar núcleos pais restantes e decaídos e entender por que a atividade diminui com o envelhecimento da amostra.' },
    { type: 'paragraph', html: 'A ferramenta combina dois modelos. Os resultados numéricos usam a equação exponencial de decaimento, enquanto o campo atómico simula núcleos individuais com limiares estocásticos. Assim, funciona como calculadora rápida e como explicação visual de por que o decaimento é previsível em conjunto, mas aleatório em cada átomo.' },
    { type: 'title', text: 'Fórmula de decaimento radioativo usada', level: 3 },
    { type: 'paragraph', html: 'A fórmula é <strong>N(t) = N0 x (1/2)^(t / T1/2)</strong>. <strong>N0</strong> é o número inicial de núcleos pais, <strong>N(t)</strong> é o número esperado restante após o tempo <strong>t</strong>, e <strong>T1/2</strong> é a meia-vida. O expoente <strong>t / T1/2</strong> conta quantas meias-vidas passaram.' },
    { type: 'paragraph', html: 'Se uma amostra começa com 1.000 núcleos pais e passam duas meias-vidas, o restante esperado é 1.000 x (1/2)^2 = 250 núcleos. A parte decaída é a diferença: 750 núcleos. O mesmo cálculo vale para segundos, horas, dias, anos ou bilhões de anos.' },
    { type: 'table', headers: ['Tempo decorrido', 'Fator', 'Núcleos pais restantes', 'Atividade relativa'], rows: [['0 meias-vidas', '(1/2)^0', '100%', '100%'], ['1 meia-vida', '(1/2)^1', '50%', '50%'], ['2 meias-vidas', '(1/2)^2', '25%', '25%'], ['3 meias-vidas', '(1/2)^3', '12,5%', '12,5%'], ['5 meias-vidas', '(1/2)^5', '3,125%', '3,125%'], ['10 meias-vidas', '(1/2)^10', '0,098%', '0,098%']] },
    { type: 'title', text: 'Como calcular a atividade restante', level: 3 },
    { type: 'paragraph', html: 'Para um único isótopo pai, a atividade é proporcional ao número de núcleos não decaídos. Se restam 25% do isótopo pai, a atividade desse isótopo também fica em torno de 25% da atividade inicial.' },
    { type: 'paragraph', html: 'Essa relação é importante em medicina nuclear e segurança radiológica. O Tecnécio-99m perde atividade em horas, enquanto o Iodo-131 permanece relevante por dias, afetando tratamento, monitoramento e orientações de exposição.' },
    { type: 'title', text: 'Exemplos: Carbono-14, Iodo-131, Tecnécio-99m, Urânio-238 e Rádon-222', level: 3 },
    { type: 'table', headers: ['Isótopo', 'Meia-vida aproximada', 'Uso comum', 'O que o resultado mostra'], rows: [['Carbono-14', '5.730 anos', 'Datação por radiocarbono', 'Quanta atividade de Carbono-14 pai resta em material que já foi vivo.'], ['Iodo-131', '8,02 dias', 'Terapia médica e incidentes nucleares', 'A rapidez com que a atividade cai ao longo de dias.'], ['Tecnécio-99m', '6,01 horas', 'Imagem diagnóstica', 'Por que a atividade médica útil se esvai em uma jornada clínica.'], ['Urânio-238', '4,47 bilhões de anos', 'Datação geológica', 'Por que isótopos de vida muito longa seguem mensuráveis na história da Terra.'], ['Rádon-222', '3,82 dias', 'Radiação interna e cadeias de decaimento', 'Como uma fonte gasosa de exposição muda em poucos dias.']] },
    { type: 'paragraph', html: 'Esses exemplos cobrem diferentes escalas de tempo e intenções de busca: arqueologia para Carbono-14, atividade médica para Iodo-131 e Tecnécio-99m, exposição ambiental para Rádon-222 e tempo geológico para Urânio-238.' },
    { type: 'title', text: 'Como ler a simulação atómica estocástica', level: 3 },
    { type: 'paragraph', html: 'O campo atómico animado é propositalmente estocástico. A equação dá o valor esperado para uma amostra grande, mas cada núcleo decai ao acaso. Amostras pequenas podem ficar um pouco acima ou abaixo de 50% após uma meia-vida; amostras maiores se aproximam mais da curva teórica.' },
    { type: 'paragraph', html: 'Meia-vida não significa que cada átomo espera um temporizador e então metade desaparece de uma vez. Cada núcleo instável tem uma probabilidade constante de decair por unidade de tempo. A curva suave aparece quando muitos eventos aleatórios independentes são contados juntos.' },
    { type: 'title', text: 'Usos da calculadora', level: 3 },
    { type: 'list', items: ['<strong>Física escolar:</strong> calcular núcleos pais restantes após um número de meias-vidas.', '<strong>Química e ciência nuclear:</strong> comparar estabilidade, velocidade de decaimento e atividade relativa.', '<strong>Intuição para radiocarbono:</strong> entender por que amostras antigas têm menos Carbono-14.', '<strong>Planejamento de isótopos médicos:</strong> ver por que meias-vidas curtas são úteis em imagem diagnóstica.', '<strong>Educação em segurança radiológica:</strong> estimar a queda da atividade sem confundir meia-vida com desaparecimento imediato.'] },
    { type: 'title', text: 'Limitações importantes', level: 3 },
    { type: 'paragraph', html: 'Esta calculadora modela o isótopo pai com uma única meia-vida. Medições reais podem exigir correções de eficiência do detector, radiação de fundo, razões de ramificação, produtos filhos, eliminação biológica, forma química, blindagem e curvas de calibração.' },
    { type: 'paragraph', html: 'Use o resultado como estimativa científica clara e modelo didático, não como substituto de orientação de segurança radiológica, instruções médicas, dosimetria ou análise laboratorial de datação.' },
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
