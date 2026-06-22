import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'explorador-fractal-mandelbrot';
const title = 'Calculadora de Fractais de Mandelbrot e Explorador de Autossimilaridade';
const description = 'Explore o conjunto de Mandelbrot, amplie os limites fractais autossimilares e compare a profundidade de iteração, o contraste de cor e as coordenadas do plano complexo.';

const howTo = [
  {
    name: 'Escolha uma região do conjunto de Mandelbrot',
    text: 'Comece pelo conjunto completo ou vá diretamente para uma região de alto detalhe, como o vale do cavalo-marinho ou um minibrot espiral.',
  },
  {
    name: 'Amplie clicando na imagem',
    text: 'Clique em qualquer ponto da tela para centralizar novamente o plano complexo e ampliar o fractal em torno dessa coordenada.',
  },
  {
    name: 'Ajuste a profundidade de iteração e o contraste de cor',
    text: 'Aumente o orçamento de iterações para revelar uma estrutura de borda mais fina, depois ajuste o contraste e a paleta para tornar as bandas de tempo de escape mais fáceis de ler.',
  },
];

const faq = [
  {
    question: 'O que a calculadora do conjunto de Mandelbrot mostra?',
    answer: 'Ela mostra quais números complexos c mantêm a recorrência z(n+1) = z(n)^2 + c limitada ao começar de z = 0. Os pontos que nunca escapam dentro do orçamento de iteração selecionado são coloridos como membros do conjunto, enquanto os pontos externos são coloridos de acordo com a rapidez com que sua órbita escapa.',
  },
  {
    question: 'Por que a borda de Mandelbrot contém tantos detalhes?',
    answer: 'A borda separa órbitas estáveis e fugitivas, e pequenas mudanças de coordenadas perto dessa borda podem alterar completamente o comportamento de longo prazo. Essa sensibilidade cria bulbos aninhados, espirais, filamentos e cópias em miniatura que aparecem em muitos níveis de ampliação.',
  },
  {
    question: 'O conjunto de Mandelbrot é verdadeiramente autossimilar?',
    answer: 'Não é perfeitamente autossimilar no mesmo sentido estrito de um triângulo de Sierpinski, mas é ricamente quase-autossimilar. Pequenas cópias de todo o conjunto aparecem por todo o plano, muitas vezes distorcidas e conectadas por estruturas ramificadas elaboradas.',
  },
  {
    question: 'O que o número de iterações controla?',
    answer: 'O número de iterações controla quanto tempo a calculadora testa cada ponto antes de decidir que ele provavelmente pertence ao conjunto. Valores mais altos revelam filamentos mais profundos e minibrots mais limpos, mas exigem mais computação por pixel.',
  },
  {
    question: 'Por que as cores mudam fora da região preta?',
    answer: 'As cores externas são baseadas no tempo de escape: pontos que escapam rapidamente recebem cores diferentes de pontos que permanecem perto do conjunto por muitas iterações. A coloração suave reduz bandas bruscas e facilita a inspeção da geometria das órbitas próximas.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Calculadora de Fractais de Mandelbrot',
    canvasLabel: 'Tela interativa do conjunto de Mandelbrot',
    presetsLabel: 'Predefinições de região de Mandelbrot',
    presetFull: 'Conjunto Completo',
    presetSeahorse: 'Vale do Cavalo-Marinho',
    presetSpiral: 'Minibrot Espiral',
    centerPoint: 'Centro',
    magnification: 'Ampliação',
    visibleWindow: 'Janela visível',
    renderBudget: 'Iterações',
    iterationsLabel: 'Profundidade de iteração',
    contrastLabel: 'Contraste de escape',
    colorLabel: 'Campo de cor',
    paletteEmber: 'Faixas de brasa',
    paletteLagoon: 'Plasma de lagoa',
    paletteInk: 'Espectro de tinta',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculadora do Conjunto de Mandelbrot para Fractais, Tempo de Escape e Autossimilaridade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de fractais de Mandelbrot renderiza o clássico conjunto do plano complexo definido pela iteração <strong>z(n+1) = z(n)^2 + c</strong>. Ela foi projetada para exploração em vez de visualização passiva: cada clique centraliza novamente o plano, cada zoom expõe uma vizinhança matemática menor, e o controle deslizante de iterações permite decidir o quão profundamente a calculadora deve testar a borda antes de colorir um ponto como estável ou em fuga.',
    },
    {
      type: 'title',
      text: 'Como ler a imagem de Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A forma central escura marca os pontos cujas órbitas permanecem limitadas dentro do orçamento de iteração atual. O exterior colorido é um mapa de tempo de escape. Um ponto colorido próximo ao conjunto pode sobreviver centenas de iterações antes que sua magnitude exceda o raio de escape, enquanto um ponto distante escapa quase imediatamente. A geometria cientificamente mais interessante geralmente não está dentro da forma preenchida, mas ao longo da borda onde os comportamentos limitados e ilimitados se entrelaçam.',
    },
    {
      type: 'table',
      headers: ['Controle', 'O que altera', 'Quando aumentar'],
      rows: [
        ['<strong>Profundidade de iteração</strong>', 'Quantos passos de recorrência são testados para cada pixel.', 'Use valores mais altos após ampliar filamentos finos ou cópias em miniatura.'],
        ['<strong>Contraste de escape</strong>', 'O quanto valores de escape suaves são separados em bandas visíveis.', 'Aumente quando a imagem parecer chapada; diminua quando as cores forem muito agressivas.'],
        ['<strong>Paleta</strong>', 'O mapeamento de cor aplicado aos pontos externos.', 'Troque de paleta para revelar estruturas que podem estar ocultas por um campo de cor.'],
      ],
    },
    {
      type: 'title',
      text: 'Autossimilaridade e Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma das razões pelas quais o conjunto de Mandelbrot é tão famoso é sua quase-autossimilaridade. Ao ampliar antenas, espirais e vales, você encontra repetidamente pequenas ilhas semelhantes ao conjunto, frequentemente chamadas de minibrots. Essas cópias não são meramente decorativas. Sua disposição reflete a dinâmica dos mapas quadráticos, incluindo bulbos periódicos, padrões de bifurcação e regiões onde as órbitas permanecem presas por longos períodos antes de escapar.',
    },
    {
      type: 'title',
      text: 'Por que iterações mais altas importam no zoom profundo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Na visão do conjunto completo, um limite de iteração modesto fornece uma imagem reconhecível. Em ampliações mais profundas, no entanto, muitos pontos de borda levam muito mais tempo para revelar se escapam. Se o limite de iteração for muito baixo, estruturas finas podem parecer falsamente sólidas ou turvas. Aumentar o número de iterações melhora a classificação da borda e permite que a calculadora resolva gavinhas estreitas, braços espirais e bulbos satélite com mais confiança.',
    },
    {
      type: 'title',
      text: 'Significado matemático das coordenadas complexas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A leitura de coordenadas mostra o centro atual da janela de visualização como um número complexo c = a + bi. O eixo horizontal é a parte real e o eixo vertical é a parte imaginária. Clicar na tela escolhe uma nova coordenada complexa e então amplia a janela visível ao redor dela. Isso torna a ferramenta útil para aprender como as regiões visuais do fractal correspondem a localizações precisas no plano complexo.',
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