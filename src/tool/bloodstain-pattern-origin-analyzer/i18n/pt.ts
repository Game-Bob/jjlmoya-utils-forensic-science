import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-origem-padroes-manchas-sangue';
const title = 'Simulador tridimensional da origem de padroes de manchas de sangue';
const description = 'Modele manchas de sangue elípticas em um plano vertical, estime ângulos de impacto e visualize as trajetórias projetadas em uma cena 3D interativa.';

const howTo = [
  { name: 'Inserir ou ajustar manchas', text: 'Use a tabela ou a superfície 2D para definir a posição, largura, comprimento e orientação do eixo maior de cada mancha.' },
  { name: 'Revisar ângulos de impacto', text: 'A calculadora estima o ângulo de impacto a partir da proporção entre largura e comprimento usando a relação do arco seno.' },
  { name: 'Inspecionar a convergência 3D', text: 'Gire a janela de visualização para comparar as trajetórias projetadas e a esfera de origem estimada.' },
  { name: 'Verificar incerteza', text: 'Use o valor de dispersão como um indicador prático de aviso: ampla separação de linhas significa que a origem traçada é menos estável.' },
];

const faq = [
  { question: 'Uma ferramenta web pode determinar a fonte real de derramamento de sangue?', answer: 'Não. Ela pode ensinar e avaliar relações geométricas, mas as conclusões dos casos exigem métodos validados, documentação da cena, calibração de escala e análise qualificada de padrões de manchas de sangue.' },
  { question: 'Por que o ângulo de impacto é calculado a partir de largura e comprimento?', answer: 'Para uma mancha elíptica ideal, o seno do ângulo de impacto é aproximado dividindo a largura pelo comprimento. Manchas reais podem estar distorcidas pela textura da superfície, fluxo, transferência ou erro de medição.' },
  { question: 'O que a esfera de origem 3D representa?', answer: 'É a estimativa de convergência por mínimos quadrados entre as linhas de trajetória projetadas, não uma fonte pontual garantida.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Métrico',
    imperial: 'Imperial',
    unitsLabel: 'Unidades',
    addStain: 'Adicionar mancha',
    reset: 'Redefinir',
    surface: 'Superfície de impacto',
    viewport3dLabel: 'Área de visualização 3D',
    stainLabel: 'Mancha',
    table: 'Medições',
    origin: 'Origem estimada',
    spread: 'Dispersão das linhas',
    confidence: 'Confiança',
    impact: 'Ângulo de impacto',
    high: 'Alta',
    medium: 'Média',
    low: 'Baixa',
    x: 'X',
    y: 'Y',
    width: 'Largura',
    length: 'Comprimento',
    rotation: 'Rotação',
    remove: 'Remover',
    cm: 'cm',
    inch: 'in',
    degree: 'graus',
    rotateHint: 'Arraste a visualização 3D para girar a reconstrução.',
    disclaimer: 'Reconstrução apenas para fins educacionais. Interprete com medições de cena validadas e incerteza documentada.',
  },
  seo: [
    { type: 'title', text: 'Como funciona um analisador 3D da origem de padroes de manchas de sangue', level: 2 },
    { type: 'paragraph', html: 'Um analisador da origem de padrões de manchas de sangue ajuda os usuários a explorar uma das questões geométricas centrais na análise de manchas de sangue: <strong>onde no espaço a fonte de sangue poderia estar quando as gotas atingiram uma superfície?</strong> Esta ferramenta modela manchas como elipses em um plano vertical, calcula o ângulo de impacto a partir da proporção entre largura e comprimento de cada uma, projeta trajetórias para trás em uma cena 3D e estima uma região de convergência prática.' },
    { type: 'diagnostic', variant: 'warning', title: 'Aviso forense', html: 'O resultado obtido é um auxílio para reconstrução, não a conclusão de um caso. As manchas reais podem ser afetadas pela textura do suporte, salpicos satélites, coagulação, fluxo, limpeza, transferência, erros de perspectiva e documentação incompleta da escala.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(L/C)', label: 'Fórmula do ângulo de impacto' },
      { value: '3+', label: 'Manchas independentes recomendadas' },
      { value: '3D', label: 'Espaço de convergência de trajetória' },
    ] },
    { type: 'title', text: 'Fórmula do ângulo de impacto', level: 3 },
    { type: 'paragraph', html: 'Para uma mancha elíptica simples, o ângulo de impacto é comumente aproximado como <strong>arcsin(largura / comprimento)</strong>. Uma mancha medida com 1 cm de largura e 2 cm de comprimento produz, portanto, um ângulo de impacto de 30 graus. Essa relação é útil porque converte uma marca plana em uma elevação de trajetória, mas pressupõe que a mancha medida seja representativa e não esteja distorcida.' },
    { type: 'code', ariaLabel: 'Cálculo do ângulo de impacto', code: 'ângulo de impacto = arcsin(largura da mancha / comprimento da mancha)\nexemplo: arcsin(1 cm / 2 cm) = 30 graus' },
    { type: 'paragraph', html: 'Esta é uma intenção de busca comum por trás de consultas como <em>calculadora de ângulo de impacto de manchas de sangue</em>, <em>fórmula de ângulo de impacto de respingos de sangue</em> e <em>como calcular a trajetória de manchas de sangue</em>. O ponto importante é que a fórmula responde apenas a uma parte da reconstrução. Estima a elevação do trajeto em relação à superfície de impacto; não identifica, por si só, a fonte, o mecanismo, a arma ou a sequência de eventos.' },
    { type: 'title', text: 'Como medir as manchas antes de inserir os dados', level: 3 },
    { type: 'paragraph', html: 'Os dados de entrada mais úteis provêm de fotografias perpendiculares calibradas ou de medições diretas na cena. Meça o corpo elíptico principal da mancha, não os salpicos satélites, caudas, marcas de fluxo ou manchas secundárias. A largura deve ser medida ao longo do eixo menor e o comprimento ao longo do eixo maior. A rotação deve seguir a direção do eixo maior no plano de impacto. Pequenos erros no comprimento, largura ou orientação podem desviar consideravelmente a trajetória projetada assim que estendida no espaço 3D.' },
    { type: 'table', headers: ['Qualidade da medição', 'Efeito provável', 'Resposta prática'], rows: [
      ['O eixo maior está claro', 'A rotação é mais confiável', 'Use o eixo maior visível e documente o método de orientação.'],
      ['A largura ou comprimento está distorcido', 'O ângulo de impacto pode estar enviesado', 'Sinale a incerteza e compare com as manchas vizinhas.'],
      ['Poucas manchas convergem', 'A estimativa da origem torna-se instável', 'Adicione manchas independentes antes de interpretar a origem 3D.'],
      ['Falta a escala', 'Todas as distâncias tornam-se puramente ilustrativas', 'Não relate coordenadas reais da origem sem calibração.'],
    ] },
    { type: 'title', text: 'Leitura da convergência 3D', level: 3 },
    { type: 'paragraph', html: 'A esfera de origem nesta ferramenta é calculada como o ponto que fica mais próximo de todas as linhas de trajetória projetadas. Quando as linhas passam perto umas das outras, o valor de dispersão é pequeno e a confiança melhora. Quando as linhas divergem, a esfera ainda aparece, mas deve ser interpretada como um compromisso fraco de mínimos quadrados, em vez de uma fonte precisa.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Área de convergência', description: 'Uma estimativa bidimensional no plano de impacto, frequentemente usada para visualizar onde as direções dos eixos maiores se cruzam quando vistas de frente.', points: ['Útil para uma avaliação inicial', 'Não representa a altura vertical por si só'] },
      { title: 'Área ou volume de origem', description: 'Uma estimativa tridimensional que combina a direção no plano com o ângulo de impacto para projetar trajetórias no espaço.', highlight: true, points: ['Explica a possível altura da fonte', 'Sensível à incerteza da medição e do ângulo'] },
    ] },
    { type: 'paragraph', html: 'Os usuários costumam buscar uma <em>calculadora do ponto de origem de respingos de sangue</em> esperando uma única coordenada exata. Na prática, uma interpretação correta exige cautela. A origem é mais bem compreendida como uma região apoiada por múltiplas trajetórias. Se as linhas traçadas formam um feixe estreito, o modelo é mais coerente. Se passam por um volume amplo, a reconstrução indica que as medições, a seleção de manchas ou as premissas precisam de revisão.' },
    { type: 'title', text: 'Motivos comuns pelos quais as trajetórias não se cruzam', level: 3 },
    { type: 'proscons', title: 'Dados de entrada confiáveis vs dados de entrada incertos', items: [
      { pro: 'Várias manchas elípticas bem formadas com eixos maiores claros', con: 'Apenas uma ou duas manchas, ou manchas selecionadas porque parecem se ajustar a uma teoria predefinida' },
      { pro: 'Medições calibradas feitas perpendicularmente à superfície de impacto', con: 'Fotos oblíquas, escala desconhecida ou capturas de tela copiadas' },
      { pro: 'Manchas independentes do mesmo mecanismo de evento', con: 'Gotejamento passivo misto, manchas de transferência, projeção por retrocesso, fluxo ou padrões de impacto secundários' },
    ] },
    { type: 'paragraph', html: 'Uma convergência deficiente não significa automaticamente que a ferramenta esteja errada. Pode significar que as manchas não pertencem ao mesmo padrão, a fotografia apresenta distorção de perspectiva, o eixo maior foi lido incorretamente, a mancha não é uma elipse limpa ou o evento físico é mais complexo do que um simples modelo de fonte pontual. Essa informação é valiosa. Uma ferramenta de reconstrução deve expor as divergências em vez de as ocultar atrás de um número aparentemente seguro.' },
    { type: 'title', text: 'Para que serve esta ferramenta', level: 3 },
    { type: 'list', items: [
      '<strong>Use múltiplas manchas:</strong> três ou mais manchas independentes fornecem uma estimativa de convergência mais significativa.',
      '<strong>Observe a dispersão:</strong> uma dispersão alta avisa que as linhas não se aproximam de perto no espaço 3D.',
      '<strong>Conserve a escala:</strong> os valores em centímetros ou polegadas devem provir de fotografias calibradas ou medições da cena.',
      '<strong>Separe o ensino do relatório formal:</strong> esta visualização é ideal para formação, planejamento e explicações antes de um exame oficial.',
    ] },
    { type: 'card', title: 'Melhor fluxo de trabalho', html: 'Comece traçando um pequeno conjunto de manchas de alta qualidade. Verifique se as direções dos eixos maiores em 2D fazem sentido visual. Inspecione então as trajetórias 3D, note a dispersione e mude uma medição de cada vez para ver como cada mancha influencia a reconstrução. Essa análise de sensibilidade costuma ser mais útil do que a simples coordenada bruta de origem.' },
    { type: 'title', text: 'Quando não confiar em uma estimativa de origem de manchas de sangue', level: 3 },
    { type: 'paragraph', html: 'Não confie em uma estimativa simples da origem quando as manchas estiverem muito distorcidas, a superfície de impacto for curva ou irregular, o padrão incluir manchas de transferência ou sangue expirado projetado, a superfície tiver sido movida ou a cena carecer de uma escala confiável. A mesma cautela se aplica quando as manchas provêm de mecanismos diferentes ou momentos distintos do evento. Uma visualização 3D aparentemente limpa pode ser enganosa se o padrão de entrada não for adequado para a reconstrução geométrica.' },
    { type: 'glossary', items: [
      { term: 'Ângulo de impacto', definition: 'O ângulo estimado entre a trajetória da gota e a superfície de impacto, comumente calculado a partir da proporção entre largura e comprimento de uma mancha elíptica.' },
      { term: 'Linha de trajetória', definition: 'Uma linha projetada que mostra um possível caminho inverso de uma mancha em direção ao espaço tridimensional.' },
      { term: 'Área de convergência', definition: 'A região aproximada onde se intersecam as direções das manchas quando projetadas no plano de impacto.' },
      { term: 'Área de origem', definition: 'A região tridimensional aproximada de onde o sangue pode ter originado, com base em múltiplas trajetórias projetadas.' },
    ] },
    { type: 'summary', title: 'Uso ideal', items: [
      'Use o analisador para compreender a geometria das trajetórias e testar a sensibilidade das medições.',
      'Compare a esfera de origem com o valor de dispersão antes de confiar em uma reconstrução.',
      'Não utilize a visualização como uma perícia forense independente.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
