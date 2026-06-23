import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'estimador-idade-dentaria-esqueletica-terceiro-molar';
const title = 'Estimador de Idade Dentária, Esquelética e Terceiro Molar';
const description = 'Estime um intervalo de idade forense com base no desenvolvimento dentário, maturidade esquelética e indicadores do terceiro molar para triagem e classificação de casos.';

const howTo = [
  {
    name: 'Selecione a ênfase da evidência',
    text: 'Escolha "Evidência mista" para triagem equilibrada, "Prioridade dentária" se os achados dentários forem mais robustos, ou "Prioridade esquelética" se os indicadores radiográficos ósseos forem a fonte principal.',
  },
  {
    name: 'Pontue cada indicador de maturidade',
    text: 'Atribua um estágio de 0 a 8 a cada indicador. Estágios inferiores refletem desenvolvimento inicial, estágios intermédios a maturação adolescente e estágios superiores achados maduros ou quase maduros.',
  },
  {
    name: 'Interprete o intervalo, não apenas a idade central',
    text: 'Considere os valores mínimo, provável e máximo em conjunto. A avaliação forense da idade deve ser sempre expressa como um intervalo, dada a variabilidade do desenvolvimento biológico individual.',
  },
  {
    name: 'Verifique a discordância entre indicadores',
    text: 'Se os estágios dentário, esquelético e do terceiro molar apontarem para faixas etárias divergentes, trate o resultado como exploratório e reúna evidências complementares antes de concluir.',
  },
];

const faq = [
  {
    question: 'Este estimador de idade forense pode determinar a maioridade legal?',
    answer: 'Não. É uma ferramenta de triagem para fins educativos e de triagem. A determinação legal da idade exige protocolos locais validados, peritos qualificados, documentação de identidade rigorosa e conformidade com os padrões da jurisdição local.',
  },
  {
    question: 'Por que o resultado mostra um intervalo de idade?',
    answer: 'A erupção dentária, a fusão esquelética e o desenvolvimento do terceiro molar variam conforme a ascendência, nutrição, estado de saúde, sexo, população de referência e método de imagem. Um intervalo é uma representação mais precisa e transparente do que uma estimativa pontual.',
  },
  {
    question: 'O que significa evidência mista?',
    answer: 'A evidência mista pondera o desenvolvimento dentário, a maturidade esquelética e o estágio do terceiro molar. Utilize este modo quando nenhum indicador isolado for claramente mais fiável para o processo.',
  },
  {
    question: 'Os terceiros molares são fiáveis em todos os casos?',
    answer: 'São úteis na adolescência tardia e na idade adulta jovem, mas apresentam elevada variabilidade. Agenesias, patologias, diferenças populacionais e a qualidade radiográfica podem limitar o seu valor forense.',
  },
  {
    question: 'Deve ser usado em casos reais?',
    answer: 'Apenas como auxílio preliminar. Em casos reais, devem ser usados métodos validados, dados de referência calibrados, revisão independente e um relato transparente de todas as incertezas e limitações.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    caseBoard: 'Painel de caso forense',
    controls: 'Controlos de idade forense',
    results: 'Resultados de idade forense',
    maturityProfile: 'Perfil dinâmico de maturidade',
    screeningOnly: 'Estimativa de triagem',
    evidenceType: 'Ênfase da evidência',
    mixedEvidence: 'Evidência mista',
    dentalPriority: 'Prioridade dentária',
    skeletalPriority: 'Prioridade esquelética',
    dentalStage: 'Estágio de desenvolvimento dentário',
    epiphysealStage: 'Estágio de fusão epifisária',
    thirdMolarStage: 'Estágio do terceiro molar',
    minimumAge: 'Mínimo',
    likelyAge: 'Provável',
    maximumAge: 'Máximo',
    maturityScore: 'Pontuação de maturidade',
    stageLabel: 'Estágio',
    ageUnit: 'anos',
    dentalShort: 'Dentário',
    boneShort: 'Osso',
    molarShort: 'Molar',
    dentalStageHelp: 'Formação da coroa, raiz e ápice.',
    epiphysealStageHelp: 'Fecho da placa de crescimento e fusão esquelética.',
    molarStageHelp: 'Mineralização do terceiro molar e fecho do ápice.',
    dentalStage0: 'Ausente',
    dentalStage1: 'Cúspide',
    dentalStage2: 'Coroa',
    dentalStage3: 'Início raiz',
    dentalStage4: 'Raiz metade',
    dentalStage5: 'Raiz longa',
    dentalStage6: 'Ápice estreito',
    dentalStage7: 'Ápice a fechar',
    dentalStage8: 'Completa',
    epiphysealStage0: 'Aberta',
    epiphysealStage1: 'Borda',
    epiphysealStage2: 'Estreitamento',
    epiphysealStage3: 'Ponte',
    epiphysealStage4: 'Metade fundida',
    epiphysealStage5: 'Quase fundida',
    epiphysealStage6: 'Apenas linha',
    epiphysealStage7: 'Quase fechada',
    epiphysealStage8: 'Fechada',
    molarStage0: 'Ausente',
    molarStage1: 'Cúspide',
    molarStage2: 'Início coroa',
    molarStage3: 'Coroa completa',
    molarStage4: 'Início raiz',
    molarStage5: 'Raiz metade',
    molarStage6: 'Raiz longa',
    molarStage7: 'Ápice a fechar',
    molarStage8: 'Completa',
    confidenceexploratory: 'Exploratório',
    confidencemoderate: 'Moderado',
    confidencestrong: 'Forte',
    noteTriage: 'Utilize como estimativa de triagem, não como determinação legal de idade.',
    noteFinalAssessment: 'A avaliação forense final deve integrar radiologia, exame clínico, história documentada e padrões jurisdicionais específicos.',
    noteWideInterval: 'Os indicadores divergem mais de quatro anos; o intervalo foi alargado.',
  },
  seo: [
    {
      type: 'title',
      text: 'Estimador de idade forense: calculadora de triagem dentária, esquelética e terceiro molar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Utilize este estimador para organizar de forma transparente as evidências de maturidade biológica antes de uma avaliação formal. O conjunto combina o desenvolvimento dentário, a fusão epifisária e o estágio do terceiro molar num intervalo estimado. Este guia responde a pesquisas como <strong>calculadora de estimativa de idade forense</strong>, <strong>avaliação de idade dentária</strong> e <strong>estimativa de maturidade esquelética</strong>, explicando a interpretação dos indicadores e a incerteza associada.',
    },
    {
      type: 'paragraph',
      html: 'Os resultados são apresentados como <strong>idade mínima, provável e máxima</strong>. Estimativas pontuais únicas são frequentemente enganosas devido à variação biológica interindividual. Este estimador deve ser tratado como uma ferramenta de apoio estruturado, não como uma conclusão jurídica definitiva.',
    },
    {
      type: 'title',
      text: 'Significado dos indicadores de maturidade',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os estágios (0-8) fornecem uma abstração prática para comparar sistemas biológicos diversos. O estágio 0 indica maturidade ausente ou muito precoce; o estágio 8 indica maturação completa. Estes estágios facilitam a comparação cruzada sem estarem confinados a um único método clínico.',
    },
    {
      type: 'table',
      headers: ['Indicador', 'Descrição', 'Contexto', 'Precaução'],
      rows: [
        ['Desenvolvimento dentário', 'Formação e erupção (exceto terceiros molares).', 'Métrica primária para crianças e adolescentes.', 'Biais possíveis por doença dentária ou diferenças populacionais.'],
        ['Fusão epifisária', 'Fecho progressivo das placas de crescimento.', 'Indicador chave para adolescência tardia e idade adulta jovem.', 'Altamente dependente do osso observado, sexo e estado endócrino.'],
        ['Estágio do terceiro molar', 'Formação e maturação dos dentes do siso.', 'Crítico para avaliação em adolescentes e adultos jovens.', 'Elevada variabilidade; requer análise de agenesia e impactação.'],
      ],
    },
    {
      type: 'title',
      text: 'Interpretação do intervalo de idade',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Analise os três valores em conjunto. A <strong>idade provável</strong> representa a estimativa central ponderada. Os valores <strong>mínimo</strong> e <strong>máximo</strong> definem a banda de incerteza prática. A convergência dos indicadores estreita esta banda; sinais contraditórios alargam-na e reduzem o índice de confiança.',
    },
    {
      type: 'table',
      headers: ['Padrão', 'Sugestão', 'Ação'],
      rows: [
        ['Intervalo estreito / Confiança forte', 'Indicadores alinhados.', 'Documente achados e verifique se é necessária validação formal.'],
        ['Intervalo moderado', 'Discordância ou influência da ponderação.', 'Verifique qualidade de imagem e atribuição de estágios.'],
        ['Intervalo exploratório amplo', 'Indicadores em conflito.', 'Não conclua com base apenas no estimador; procure registos adicionais ou revisão de especialista.'],
      ],
    },
    {
      type: 'title',
      text: 'Escolha do modo de evidência',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Evidência mista</strong> é o padrão, equilibrando todos os indicadores. Escolha <strong>prioridade dentária</strong> para dossiers dentários excecionalmente robustos. Escolha <strong>prioridade esquelética</strong> quando a evidência radiográfica óssea for o dado mais abrangente. Estes modos não aumentam a qualidade de evidências fracas, apenas ajustam a ponderação matemática.',
    },
    {
      type: 'list',
      items: [
        '<strong>Prioridade dentária:</strong> quando o desenvolvimento dentário está claramente estadiado e há evidência do terceiro molar.',
        '<strong>Prioridade esquelética:</strong> quando a fusão epifisária é o sinal melhor documentado.',
        '<strong>Evidência mista:</strong> ideal para triagem inicial equilibrada.',
        '<strong>Índice de confiança:</strong> monitore para detetar discrepâncias antes de sobreinterpretar.',
      ],
    },
    {
      type: 'title',
      text: 'Limitações forenses',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A estimativa da idade é um suporte, nunca prova de identidade. Em contextos de proteção, direito penal ou identificação de vítimas, a avaliação deve ser multidisciplinar. Relatórios responsáveis devem detalhar a metodologia, população de referência, qualificações do observador e limitações identificadas.',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta serve para <strong>educação, triagem e comunicação transparente</strong>. Reforçamos que conclusões sobre a idade exigem prudência e que limiares críticos (como a maioridade) nunca devem basear-se exclusivamente numa calculadora simplificada.',
    },
    {
      type: 'title',
      text: 'Lista de verificação para relatórios',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Fonte da evidência:</strong> Documente explicitamente se os estágios provêm de exames dentários, radiografias panorâmicas ou imagem esquelética (ex: mão-punho, clavícula).',
        '<strong>Dados em falta/fracos:</strong> Documente ausências, má qualidade de imagem ou anomalias.',
        '<strong>Validação metodológica:</strong> Garanta que os métodos escolhidos são reconhecidos na jurisdição local.',
        '<strong>Comunicação da incerteza:</strong> Expresse sempre um intervalo; evite linguagem que sugira uma idade cronológica exata.',
        '<strong>Revisão de especialista:</strong> Casos de alto risco devem ser validados por odontologistas forenses, radiologistas ou antropólogos.',
      ],
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