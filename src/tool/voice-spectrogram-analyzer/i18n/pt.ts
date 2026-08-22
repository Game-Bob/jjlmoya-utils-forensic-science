import { bibliography } from '../bibliography';
import type { VoiceSpectrogramLocaleContent } from '../entry';

const slug = "analisador-espectrograma-voz-online";
const title = "Analisador de Espectrograma de Voz Online";
const description = "Visualize a frequência, tempo, intensidade e formantes de duas amostras de áudio de forma privada no seu navegador.";

const howTo = [
  {
    "name": "Selecione duas amostras",
    "text": "Utilize ficheiros locais ou os exemplos sintéticos."
  },
  {
    "name": "Ajuste o teto de frequência",
    "text": "Escolha 4, 6 ou 8 kHz conforme o tipo de voz."
  },
  {
    "name": "Examine o espectrograma",
    "text": "Analise tempo, frequência e formantes."
  },
  {
    "name": "Escute e compare",
    "text": "Compare as médias F1, F2 e F3 pedagogicamente."
  }
];

const faq = [
  {
    "question": "O que mostra um espectrograma de voz?",
    "answer": "Um espectrograma mapeia o tempo no eixo horizontal, a frequência no vertical e a energia pela luminosidade."
  },
  {
    "question": "As minhas gravações são enviadas para um servidor?",
    "answer": "Não. Todo o processo é executado localmente."
  },
  {
    "question": "O que são F1, F2 e F3?",
    "answer": "São estimativas educativas das ressonâncias do trato vocal."
  },
  {
    "question": "Esta ferramenta pode identificar um falante?",
    "answer": "Não. Semelhança visual não constitui prova biométrica."
  },
  {
    "question": "Por que os formantes mudam com o teto de frequência?",
    "answer": "A escala de frequência altera a separação dos picos."
  }
];

export const content: VoiceSpectrogramLocaleContent = {
  slug,
  title,
  description,
  ui: {
    "privacyBadge": "Apenas local",
    "privacyNote": "As suas gravações permanecem no seu dispositivo. O processamento ocorre no navegador.",
    "loadHeading": "Carregue dois sons para analisar",
    "sampleALabel": "Amostra A",
    "sampleBLabel": "Amostra B",
    "chooseFileLabel": "Selecionar áudio",
    "replaceFileLabel": "Substituir áudio",
    "dropHint": "Arraste um ficheiro de áudio para aqui (máx. 25 MB). Os primeiros 20 segundos serão analisados.",
    "presetHint": "Experimente os dois estudos sintéticos de vogais.",
    "presetWarmLabel": "Estudo de vogal quente",
    "presetBrightLabel": "Estudo de vogal brilhante",
    "emptySampleLabel": "A aguardar áudio",
    "readySampleLabel": "Placa espectral gerada",
    "decodingSampleLabel": "A processar placa espectral",
    "errorSampleLabel": "Não foi possível analisar a amostra",
    "durationLabel": "Duração",
    "ceilingHeading": "Teto de frequência",
    "ceilingFourLabel": "4 kHz",
    "ceilingSixLabel": "6 kHz",
    "ceilingEightLabel": "8 kHz",
    "stageLabel": "Mosaico de espectrogramas espelhados",
    "mirrorViewLabel": "Placas espelhadas",
    "splitViewLabel": "Placas paralelas",
    "playALabel": "Reproduzir amostra A",
    "playBLabel": "Reproduzir amostra B",
    "stopLabel": "Parar",
    "timeAxisLabel": "Tempo",
    "frequencyAxisLabel": "Frequência",
    "intensityLegendLabel": "Tinta mais brilhante indica maior energia sonora",
    "formantLegendLabel": "Guias de formantes estimados",
    "sampleAEmptyCanvasLabel": "Carregue a amostra A para ver o espectro",
    "sampleBEmptyCanvasLabel": "Carregue a amostra B para ver o espectro",
    "comparisonHeading": "Análise de ressonâncias espectrais",
    "comparisonNote": "Valores médios dos picos espectrais. As diferenças são medições físicas, não uma prova de identidade.",
    "formantOneLabel": "Primeira região de ressonância (F1)",
    "formantTwoLabel": "Segunda região de ressonância (F2)",
    "formantThreeLabel": "Terceira região de ressonância (F3)",
    "averageLabel": "Média",
    "differenceLabel": "Diferença",
    "unavailableLabel": "Não disponível",
    "statusEmptyLabel": "Carregue uma amostra para começar",
    "statusSingleLabel": "Uma placa pronta",
    "statusReadyLabel": "Ambas as placas espectrais prontas",
    "limitError": "O ficheiro excede o limite local de 25 MB.",
    "decodeError": "O navegador não conseguiu descodificar o ficheiro.",
    "browserError": "API Web Audio não disponível neste navegador.",
    "educationalNote": "Ferramenta educativa. As guias de formantes não devem ser usadas para identificação forense de voz."
},
  seo: [
    { type: 'title', text: "Como um espectrograma transforma som em imagem", level: 2 },
    { type: 'paragraph', html: "Um <strong>espectrograma de voz</strong> transforma uma gravação num mapa visual onde o tempo decorre no eixo horizontal e a frequência no vertical. Uma energia mais forte surge com cor mais brilhante. Isso torna as vogais sustentadas, harmónicos, silêncio e ressonâncias mais fáceis de observar do que numa forma de onda tradicional. Esta representação facilita a análise do sinal." },
    { type: 'paragraph', html: "O analisador divide o sinal em pequenos segmentos sobrepostos, aplica uma janela de Hamming e calcula a distribuição de energia por frequência via FFT. Um segmento curto permite situar precisamente um evento, enquanto a resolução em frequência mostra onde a energia se concentra. Devido ao princípio da incerteza, existe sempre um compromisso entre resolução temporal e frequencial. Estas configurações definem a nitidez." },
    { type: 'diagnostic', variant: 'info', title: "Processamento privado no navegador", html: "Visualize a frequência, tempo, intensidade e formantes de duas amostras de áudio de forma privada no seu navegador." },
    { type: 'stats', columns: 3, items: [
      { value: "Tempo", label: "Leitura da esquerda para a direita" },
      { value: "Hz", label: "Posição de frequência" },
      { value: "Energia", label: "Representada pelo brilho" }
    ] },
    { type: 'title', text: "Interpretar formantes com responsabilidade", level: 3 },
    { type: 'paragraph', html: "Os formantes são regiões de ressonância moldadas pelo trato vocal. F1 e F2 são usados na fonética para descrever a altura e o local de articulação das vogais. Este analisador rastreia picos suavizados em três regiões de frequência para que os utilizadores relacionem as bandas visíveis ao comportamento de F1, F2 e F3." },
    { type: 'paragraph', html: "A medição profissional de formantes utiliza normalmente uma codificação preditiva linear (LPC) ajustada ao falante. Os harmónicos do fundamental, ruído de fundo, reverberação e compressão de áudio podem deslocar estimativas simples. Utilize estas guias como referências didáticas e controle sempre o espectro subjacente." },
    { type: 'table', headers: ['Guide', 'Region', 'Meaning'], rows: [["F1","180 a 1000 Hz","Primeira região de ressonância, associada à abertura da vogal"],["F2","900 a 3000 Hz","Segunda região de ressonância, associada à posição da língua"],["F3","2000 a 4500 Hz","Região de ressonância superior, influenciada pelo trato vocal"]] },
    { type: 'title', text: "O impacto dos ajustes de frequência", level: 3 },
    { type: 'comparative', columns: 2, items: [
      { title: "Teto baixo (4 kHz)", description: "Melhor visualização de frequências baixas", points: ["Útil para vogais", "Pode excluir alta energia", "Não garante maior precisão"] },
      { title: "Teto alto (6/8 kHz)", description: "Mais detalhes superiores", highlight: true, points: ["Para vozes brilhantes", "Mostra fricativas", "Comprime bandas inferiores"] }
    ] },
    { type: 'title', text: "Comparação adequada entre duas amostras de voz", level: 3 },
    { type: 'paragraph', html: "A comparação entre duas placas é especialmente útil quando as gravações contêm a mesma vogal ou frase em condições acústicas semelhantes. As diferenças apresentadas são distâncias físicas absolutas. Não constituem uma percentagem de semelhança nem uma prova biométrica de identidade." },
    { type: 'list', items: ["<strong>Comparar o mesmo conteúdo falado:</strong> vogais ou palavras idênticas facilitam o contraste.","<strong>Harmonizar condições de gravação:</strong> o microfone e a acústica influenciam fortemente o espectro.","<strong>Ouvir com o cursor:</strong> relacione eventos visuais com o som exato.","<strong>Evitar afirmações de identidade:</strong> um espectrograma semelhante não prova a identidade do falante."] },
    { type: 'summary', title: "Resumo do analisador", items: ["Gerar um espectrograma de áudio localmente a partir de ficheiros compatíveis.","Explorar duas amostras em placas espelhadas ou paralelas.","Aprender como a energia espectral e os formantes variam.","Manter uma abordagem descritiva e pedagógica."] }
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'MultimediaApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) }
  ]
};
