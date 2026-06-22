import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'atrator-de-lorenz';
const title = 'Simulador de Caos do Atrator de Lorenz: O Efeito Borboleta em 3D';
const description = 'Explore a teoria do caos com esta simulação interativa 3D do atrator de Lorenz. Visualize o efeito borboleta em tempo real.';

const howTo = [
  {
    name: 'Rodar a tela',
    text: 'Clique e arraste no visor 3D para rotacionar o atrator e observar a sua geometria complexa.'
  },
  {
    name: 'Ajustar os sliders',
    text: 'Modifique os parâmetros Sigma, Rho e Beta para ver a transição do sistema para o comportamento caótico.'
  },
  {
    name: 'Observar a divergência',
    text: 'Veja como a distância entre duas trajetórias, inicialmente quase idênticas, cresce exponencialmente.'
  },
  {
    name: 'Pausar e reiniciar',
    text: 'Use os botões para pausar a simulação ou restaurar as configurações originais.'
  }
];

const faq = [
  {
    question: 'O que é o Atrator de Lorenz?',
    answer: 'O atrator de Lorenz é um conjunto de soluções caóticas do sistema de Lorenz, um modelo matemático tridimensional que descreve o comportamento de fluidos em convecção.'
  },
  {
    question: 'O que é o Efeito Borboleta?',
    answer: 'É a sensibilidade extrema às condições iniciais em sistemas deterministas não lineares, onde uma pequena mudança pode levar a resultados radicalmente diferentes.'
  },
  {
    question: 'O que significam os parâmetros?',
    answer: 'Sigma (σ) representa o número de Prandtl (viscosidade/condutividade térmica), Rho (ρ) o número de Rayleigh (intensidade do aquecimento convectivo) e Beta (β) a relação geométrica da célula convectiva.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    copied: 'Copiado',
    noHistory: 'Sem histórico',
    load: 'Carregar',
    delete: 'Eliminar',
    title: 'Atrator de Lorenz',
    subTitle: 'Caos Determinístico',
    parameterControls: 'Parâmetros do Sistema',
    simulationSpeed: 'Velocidade (dt)',
    initialPerturbation: 'Perturbação Inicial (dx)',
    trajectories: 'Trajetórias',
    distance: 'Distância de Divergência',
    exponentialGrowth: 'Divergência Exponencial',
    resetDefault: 'Reset',
    clearPath: 'Limpar',
    play: 'Continuar',
    pause: 'Pausa',
    coords: 'Coordenadas',
    divergenceExplanation: 'O gráfico de divergência mostra a distância euclidiana entre as duas trajetórias ao longo do tempo.'
  },
  seo: [
    { type: 'title', text: "Caos Determinístico: Compreender as Equações de Lorenz", level: 2 },
    { type: 'paragraph', html: "O sistema de Lorenz é uma formulação histórica na dinâmica não linear e na teoria do caos. Derivado originalmente em 1963 pelo meteorologista e matemático <strong>Edward Lorenz</strong>, o modelo nasceu de uma representação simplificada da convecção atmosférica. A sua descoberta de que estas equações simples e deterministas podiam produzir um comportamento caótico complexo e não periódico transformou a nossa compreensão dos sistemas físicos." },
    { type: 'title', text: "O Efeito Borboleta: Dependência Sensível das Condições Iniciais", level: 3 },
    { type: 'paragraph', html: "A característica definidora dos sistemas caóticos é a sua <strong>dependência sensível das condições iniciais</strong>, popularmente conhecida como o <strong>Efeito Borboleta</strong>. Neste simulador, duas trajetórias (T1 a ciano e T2 a rosa) partem com uma separação mínima. Inicialmente percorrem praticamente o mesmo caminho. Após um breve período, a diferença é amplificada pelos termos não lineares e os caminhos divergem completamente." },
    {
      type: 'table',
      headers: ["Parâmetro", "Valor Padrão", "Contexto Físico"],
      rows: [
        ["σ (Sigma)", "10.0", "Número de Prandtl: determina o atrito interno do fluido."],
        ["ρ (Rho)", "28.0", "Número de Rayleigh: motor do caos; intensidade do aquecimento convectivo."],
        ["β (Beta)", "8/3", "Relação de Aspeto: escala e velocidade de rotação das órbitas."]
      ],
    },
    { type: 'title', text: "Atratores Estranhos e Fractais", level: 3 },
    { type: 'paragraph', html: "Em física clássica, as trajetórias estabilizam-se em pontos fixos ou repetem o mesmo caminho. O sistema de Lorenz não faz nenhum dos dois: a trajetória enrola-se infinitamente sem nunca se cruzar, formando um <strong>atrator estranho</strong> com geometria fractal (dimensão de Hausdorff cerca de 2,06)." }
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
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
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