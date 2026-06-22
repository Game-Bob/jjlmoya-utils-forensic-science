import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'diagrama-de-fases-ponto-critico-visualizador';
const title = 'Diagrama de Fases e Visualizador do Ponto Critico';
const description = 'Explore as regioes solida, liquida, gasosa e supercritica em um diagrama de fases pressao-temperatura interativo com marcadores de ponto triplo e ponto critico.';

const howTo = [
  {
    name: 'Escolha uma substancia',
    text: 'Alterne entre agua, dioxido de carbono e nitrogenio para ver como pontos triplos e criticos reais remodelam o mapa de fases.',
  },
  {
    name: 'Mova temperatura e pressao',
    text: 'Use os controles deslizantes para posicionar a amostra no plano pressao-temperatura. O diagrama atualiza a regiao de fase ativa e o marcador de amostra ao vivo.',
  },
  {
    name: 'Observe o halo critico',
    text: 'Dirija-se ao final do limite vapor-liquido para ver o calor latente desaparecer e a distincao liquido-gas colapsar em um fluido supercritico.',
  },
  {
    name: 'Leia o painel de ensino',
    text: 'Use o rotulo de fase, o medidor de calor latente e as leituras de ponto para conectar o diagrama visual ao vocabulario termodinamico.',
  },
];

const faq = [
  {
    question: 'O que e um diagrama de fases?',
    answer: 'Um diagrama de fases mapeia qual estado da materia e estavel em diferentes combinacoes de temperatura e pressao. As linhas de limite marcam condicoes onde duas fases podem coexistir em equilibrio.',
  },
  {
    question: 'O que acontece no ponto critico?',
    answer: 'No ponto critico, o limite vapor-liquido termina. Acima da temperatura e pressao criticas, o material se torna um fluido supercritico e nao ha distincao nítida entre liquido e gas.',
  },
  {
    question: 'Por que a agua tem uma linha de fusao diferente?',
    answer: 'A agua e incomum porque o gelo e menos denso que a agua liquida perto do ponto de fusao. O aumento da pressao pode favorecer a fase liquida mais densa, entao o limite solido-liquido tem uma inclinacao diferente de muitas substancias.',
  },
  {
    question: 'As curvas tracadas sao exatas em laboratorio?',
    answer: 'Nao. A ferramenta usa curvas simplificadas ancoradas em valores publicados de ponto triplo e ponto critico. Ela e projetada para aprendizado conceitual, nao para engenharia de processos ou calculos de seguranca.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Controles do diagrama de fases',
    substance: 'Substancia',
    units: 'Unidades',
    scientificUnits: 'Cientificas (K, MPa)',
    metricUnits: 'Metricas (Celsius, kPa)',
    imperialUnits: 'Imperial (Fahrenheit, psi)',
    temperature: 'Temperatura',
    pressure: 'Pressao',
    diagram: 'Diagrama de fases pressao-temperatura',
    sample: 'Estado da amostra',
    phase: 'Fase estavel',
    triplePoint: 'Ponto triplo',
    criticalPoint: 'Ponto critico',
    vaporCurve: 'Limite vapor-liquido',
    meltingLine: 'Limite solido-liquido',
    latentHeat: 'Contraste de calor latente',
    criticalProximity: 'Proximidade critica',
    coordinates: 'Coordenadas',
    solid: 'Solido',
    liquid: 'Liquido',
    gas: 'Gasoso',
    supercritical: 'Supercritico',
    low: 'baixo',
    high: 'alto',
    reset: 'Redefinir',
    interpretation: 'Interpretacao',
    note: 'As linhas de limite marcam coexistencia; as regioes marcam a fase mais estavel para as condicoes selecionadas.',
  },
  seo: [
    {
      type: 'title',
      text: 'Visualizador interativo de diagrama de fases para pontos triplos, curvas de ebulicao e pontos criticos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este visualizador de diagrama de fases transforma um grafico abstrato de pressao-temperatura em um mapa interativo. Escolha uma substancia, mova a temperatura e a pressao, e veja se a amostra e prevista para se comportar como solido, liquido, gas ou fluido supercritico. O objetivo e tornar os limites de fase espaciais: cruzar uma linha muda o estado estavel, enquanto se aproximar do ponto critico muda o que um limite de fase significa.',
    },
    {
      type: 'paragraph',
      html: 'A ferramenta e construida para estudantes, professores, escritores de ciencia e qualquer pessoa que busca uma explicacao clara dos diagramas de fases. Ela enfatiza as caracteristicas mais importantes na termodinamica introdutoria: o ponto triplo onde tres fases coexistem, a curva vapor-liquido, o limite solido-liquido e o ponto final critico onde a distincao liquido-gas desaparece.',
    },
    {
      type: 'title',
      text: 'Como ler o diagrama pressao-temperatura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um diagrama de fases coloca a temperatura em um eixo e a pressao no outro. Cada regiao mostra a fase estavel nessas condicoes. As linhas entre as regioes sao curvas de coexistencia: ao longo dessas linhas, duas fases podem permanecer em equilibrio em vez de uma fase substituir completamente a outra.',
    },
    {
      type: 'table',
      headers: ['Caracteristica do diagrama', 'Significado', 'O que observar na ferramenta'],
      rows: [
        ['Ponto triplo', 'Solido, liquido e gas coexistem', 'A juncao de baixa temperatura onde os limites se encontram.'],
        ['Curva vapor-liquido', 'Equilibrio de ebulicao ou condensacao', 'A linha curva do ponto triplo ao ponto critico.'],
        ['Limite solido-liquido', 'Equilibrio de fusao ou congelamento', 'A linha inclinada separando as regioes solida e liquida.'],
        ['Ponto critico', 'Fim do limite vapor-liquido', 'O ponto final destacado onde o calor latente desaparece.'],
        ['Regiao supercritica', 'Sem distincao nítida liquido-gas', 'A area de alta temperatura e alta pressao alem do ponto critico.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que o ponto critico e importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Abaixo do ponto critico, a ebulicao e uma transicao de fase: liquido e vapor podem coexistir, e a energia pode ser absorvida como calor latente enquanto a temperatura permanece ligada a condicao de contorno. No ponto critico, esse limite termina. Acima dele, a densidade muda continuamente e a substancia e descrita como um fluido supercritico em vez de um liquido ou gas normal.',
    },
    {
      type: 'paragraph',
      html: 'Isso e importante em quimica, ciencia planetaria, extracao industrial, refrigeracao e fisica de altas pressoes. O dioxido de carbono, por exemplo, torna-se supercritico em condicoes relativamente acessiveis em comparacao com a agua, e por isso o CO2 supercritico aparece na extracao e no processamento de materiais. A agua requer temperatura e pressao muito mais altas, tornando seu ponto critico importante para sistemas de energia e geofisica.',
    },
    {
      type: 'title',
      text: 'O que este visualizador simplifica',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Diagramas de fases reais podem incluir polimorfos, estados metaestaveis, misturas nao ideais, multiplas fases solidas e equacoes de estado ajustadas experimentalmente. Esta ferramenta educacional mantem o modelo intencionalmente compacto. Ela ancora cada substancia a valores de referencia reconheciveis e desenha curvas didaticas suaves para que as ideias principais sejam faceis de inspecionar sem precisar de uma tabela de termodinamica.',
    },
    {
      type: 'list',
      items: [
        '<strong>Use para intuicao:</strong> ajuda a explicar por que panelas de pressao, gelo seco, ebulicao e fluidos supercriticos se comportam de forma diferente.',
        '<strong>Nao use para limites de engenharia:</strong> curvas simplificadas nao substituem dados de propriedades certificados.',
        '<strong>Foco na topologia:</strong> o resultado de aprendizado mais importante e como as regioes de fase se conectam e onde os limites terminam.',
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
