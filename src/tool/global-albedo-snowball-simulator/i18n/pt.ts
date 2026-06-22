import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulador-albedo-global-terra-bola-neve';
const title = 'Simulador Global de Albedo e Terra Bola de Neve';
const description = 'Explore o equilíbrio da radiação térmica da Terra, mudanças na constante solar, concentração de gases de efeito estufa e o feedback gelo-albedo para ver se as camadas de gelo recuam, se estabilizam ou desencadeiam um clima de bola de neve.';

const howTo = [
  {
    name: 'Ajustar a luz solar incidente',
    text: 'Mova o controle deslizante da constante solar para testar cenários de Sol jovem mais fraco, luz solar terrestre atual ou forçamento futuro mais brilhante.',
  },
  {
    name: 'Ajustar a concentração de gases de efeito estufa',
    text: 'Altere a concentração de gases de efeito estufa para ver como o forçamento radiativo compete com um albedo planetário mais alto.',
  },
  {
    name: 'Semear o planeta com gelo',
    text: 'Comece com uma pequena calota polar ou um mundo amplamente coberto de gelo. O modelo itera o loop de feedback e mostra se o gelo avança ou recua.',
  },
  {
    name: 'Ler o estado climático',
    text: 'Use a temperatura, a radiação absorvida, a cobertura de gelo final e a curva da linha do tempo para comparar resultados temperados, de bola de neve e de estufa.',
  },
];

const faq = [
  {
    question: 'O que é feedback gelo-albedo?',
    answer: 'O gelo e a neve refletem mais luz solar do que o oceano ou a terra. Quando o gelo se expande, o albedo planetário aumenta, a energia solar absorvida diminui e o resfriamento pode permitir a formação de ainda mais gelo. Quando o gelo recua, a superfície mais escura absorve mais energia e o aquecimento acelera.',
  },
  {
    question: 'O que significa Terra Bola de Neve?',
    answer: 'Terra Bola de Neve é um estado climático hipotético no qual o gelo atinge baixas latitudes ou cobertura quase global. Evidências geológicas sugerem que a Terra pode ter se aproximado de tais estados durante a era Neoproterozoica.',
  },
  {
    question: 'Isto é um modelo climático completo?',
    answer: 'Não. É um modelo compacto de balanço energético para aprendizado. Ignora a circulação atmosférica, nuvens, transporte de calor oceânico, estações, geografia e feedbacks do ciclo do carbono, mas captura a lógica radiativa central do feedback do albedo.',
  },
  {
    question: 'Por que os gases de efeito estufa podem quebrar um estado de bola de neve?',
    answer: 'Os gases de efeito estufa reduzem o resfriamento de ondas longas ao adicionar forçamento radiativo. Em cenários de Terra Bola de Neve, o dióxido de carbono vulcânico pode se acumular quando o intemperismo de silicatos diminui, eventualmente aquecendo o planeta o suficiente para derreter o gelo de baixas latitudes.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    controls: 'Controlos climáticos',
    solarConstant: 'Constante solar',
    greenhouse: 'Gases de efeito estufa',
    initialIce: 'Cobertura de gelo inicial',
    temperature: 'Temperatura de equilíbrio',
    absorbed: 'Luz solar absorvida',
    finalIce: 'Cobertura de gelo final',
    albedo: 'Albedo planetário',
    forcing: 'Forçamento estufa',
    state: 'Estado climático',
    timeline: 'Evolução do gelo',
    years: 'anos do modelo',
    snowball: 'Bloqueio de bola de neve',
    temperate: 'Equilíbrio temperado',
    hothouse: 'Recuo estufa',
    retreating: 'Gelo em recuo',
    advancing: 'Gelo avançando',
    stable: 'Próximo do equilíbrio',
    watts: '{value} W/m2',
    ppm: '{value} ppm',
    percent: '{value}%',
    celsius: '{value} C',
    diagnostics: 'Diagnóstico de radiação',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulador global de albedo para feedback gelo-albedo e Terra Bola de Neve',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Este simulador explora um dos loops de feedback mais importantes no clima planetário: a ligação entre cobertura de gelo, refletividade e luz solar absorvida. Um planeta com gelo brilhante reflete mais radiação solar incidente de volta ao espaço. Esse resfriamento pode preservar ou expandir o gelo, elevando ainda mais o albedo e empurrando o sistema para um estado de Terra Bola de Neve. Um planeta com menos gelo absorve mais luz solar, o que pode acelerar a deglaciação.',
    },
    {
      type: 'paragraph',
      html: 'Use os controlos deslizantes para alterar a constante solar, a concentração de gases de efeito estufa e a cobertura de gelo inicial. O modelo então itera um simples balanço energético global e mostra se o clima se move para uma glaciação extensa, um equilíbrio temperado ou um estado quente com pouco gelo. É projetado para intuição rápida: cada controlo mapeia diretamente para um termo físico no orçamento de radiação.',
    },
    {
      type: 'title',
      text: 'Como o balanço energético é estimado',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A radiação de ondas curtas absorvida é estimada como S(1 - a) / 4, onde S é a constante solar e a é o albedo planetário. A divisão por quatro converte a luz solar interceptada pelo disco da Terra numa média sobre toda a superfície esférica. Albedo mais alto reduz a energia absorvida; maior concentração de gases de efeito estufa adiciona forçamento radiativo positivo que eleva a estimativa da temperatura superficial.',
    },
    {
      type: 'table',
      headers: ['Controlo', 'Significado físico', 'Efeito climático'],
      rows: [
        ['Constante solar', 'Energia estelar incidente na órbita da Terra', 'Valores mais altos aquecem o planeta e reduzem o gelo.'],
        ['Gases de efeito estufa', 'Forçamento radiativo de ondas longas relativo a uma atmosfera de referência', 'Valores mais altos dificultam o bloqueio de bola de neve.'],
        ['Cobertura de gelo inicial', 'Refletividade inicial do planeta', 'Valores altos podem desencadear resfriamento descontrolado através do feedback do albedo.'],
      ],
    },
    {
      type: 'title',
      text: 'Por que o feedback do albedo pode tornar-se não linear',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O loop gelo-albedo não é um ajuste suave unidirecional. Uma vez que o gelo atinge uma parte suficiente do planeta, a superfície mais brilhante pode remover tanta luz solar absorvida que o degelo estival se torna fraco. Na direção oposta, o gelo em recuo expõe oceano e terra mais escuros, aumentando a absorção e afastando o planeta da glaciação. É por isso que forçamentos semelhantes podem produzir resultados diferentes dependendo da cobertura de gelo inicial.',
    },
    {
      type: 'paragraph',
      html: 'A Terra real adiciona muitas complicações: nuvens, poeira no gelo, transporte de calor oceânico, posições continentais, luz solar sazonal, dinâmica do gelo marinho e o ciclo do carbono. Um modelo simples ainda tem valor porque isola o orçamento de radiação de primeira ordem. Permite ver por que as hipóteses de Terra Bola de Neve dependem tanto de luz solar fraca ou gatilhos de alto albedo quanto do acúmulo posterior de gases de efeito estufa para escapar.',
    },
    {
      type: 'title',
      text: 'Interpretação do simulador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bloqueio de bola de neve:</strong> a cobertura de gelo final é muito alta e a temperatura de equilíbrio permanece muito abaixo do congelamento.',
        '<strong>Equilíbrio temperado:</strong> o modelo estabiliza com cobertura de gelo parcial e radiação absorvida moderada.',
        '<strong>Recuo estufa:</strong> o gelo colapsa para uma fração muito pequena enquanto o forçamento estufa e a luz solar absorvida permanecem altos.',
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
