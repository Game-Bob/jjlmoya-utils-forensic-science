import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fractal-calculator';
const title = 'Mandelbrot Fractal Calculator & Self Similarity Explorer';
const description = '探索Mandelbrot集合，放大观察自相似的分形边界，并比较迭代深度、颜色对比度和复平面坐标。';

const howTo = [
  {
    name: '选择Mandelbrot集合的一个区域',
    text: '从完整集合开始，或直接跳转到高细节区域，例如海马谷或螺旋形迷你brots。',
  },
  {
    name: '点击图像进行缩放',
    text: '点击画布上的任意点，以重新居中复平面并放大该坐标周围的分形。',
  },
  {
    name: '调整迭代深度和颜色对比度',
    text: '增加迭代预算以揭示更精细的边界结构，然后调整对比度和调色板，使逃逸时间带更易于阅读。',
  },
];

const faq = [
  {
    question: 'Mandelbrot集合计算器显示什么？',
    answer: '它显示哪些复数 c 在从 z = 0 开始时能使递推关系 z(n+1) = z(n)^2 + c 保持有界。在所选的迭代预算内从未逃逸的点被着色为集合的成员，而外部点则根据其轨道逃逸的速度进行着色。',
  },
  {
    question: '为什么Mandelbrot集合的边界包含如此多的细节？',
    answer: '边界分隔了稳定轨道和逃逸轨道，边界附近微小的坐标变化可能完全改变长期行为。这种敏感性产生了嵌套的 bulbs、螺旋、细丝以及在多个放大级别出现的微型副本。',
  },
  {
    question: 'Mandelbrot集合真的是自相似的吗？',
    answer: '它在与谢尔宾斯三角形相同的严格意义上并非完全自相似，但它具有丰富的准自相似性。整个集合的小副本出现在整个平面上，通常被扭曲并通过精细的分支结构连接在一起。',
  },
  {
    question: '迭代次数控制什么？',
    answer: '迭代次数控制计算器在判定每个点可能属于集合之前对其进行测试的时间。更高的值会揭示更深的细丝和更清晰的迷你brots，但需要每像素更多的计算。',
  },
  {
    question: '为什么黑色区域之外的颜色会变化？',
    answer: '外部的颜色基于逃逸时间：快速逃逸的点与多次迭代后仍停留在集合附近的点获得不同的颜色。平滑着色减少了生硬的条带，使附近轨道的几何形状更易于检查。',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fractal Calculator',
    canvasLabel: '交互式Mandelbrot集合画布',
    presetsLabel: 'Mandelbrot区域预设',
    presetFull: '完整集合',
    presetSeahorse: '海马谷',
    presetSpiral: '螺旋形迷你brot',
    centerPoint: '中心',
    magnification: '放大倍数',
    visibleWindow: '可见窗口',
    renderBudget: '迭代次数',
    iterationsLabel: '迭代深度',
    contrastLabel: '逃逸对比度',
    colorLabel: '颜色场',
    paletteEmber: '余烬带',
    paletteLagoon: '泻湖等离子体',
    paletteInk: '墨水光谱',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此Mandelbrot分形计算器渲染由迭代 <strong>z(n+1) = z(n)^2 + c</strong> 定义的经典复平面集合。它专为探索而非被动观看而设计：每次点击都会重新居中平面，每次缩放都会暴露一个更小的数学邻域，而迭代滑块可让您决定计算器在将点着色为稳定或逃逸之前应对边界进行多深的测试。',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '深色中心形状标记了在当前迭代预算内轨道保持有界的点。彩色外部是逃逸时间图。靠近集合着色的点可能在其幅度超过逃逸半径之前经受数百次迭代，而较远的点几乎立即逃逸。最具科学趣味的几何形状通常不在填充形状内部，而是在有界与无界行为交织的边界沿线。',
    },
    {
      type: 'table',
      headers: ['控制', '更改内容', '何时增加'],
      rows: [
        ['<strong>迭代深度</strong>', '每个像素测试的递推步骤数。', '在放大到细小细丝或微型副本后使用更高的值。'],
        ['<strong>逃逸对比度</strong>', '平滑逃逸值被分离成可见带的强度。', '当图像看起来平坦时提高；当颜色过于刺眼时降低。'],
        ['<strong>调色板</strong>', '应用于外部点的颜色映射。', '切换调色板以揭示可能被单一颜色场隐藏的结构。'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mandelbrot集合如此著名的一个原因是其准自相似性。当您放大天线、螺旋和山谷时，您会反复遇到类似Mandelbrot的小岛，通常称为迷你brots。这些副本不仅仅是装饰性的。它们的排列反映了二次映射的动力学，包括周期性bulbs、分岔模式以及轨道在逃逸前长时间被困的区域。',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在完整集合视图下，适度的迭代限制可生成可识别的图像。然而，在更深放大倍数下，许多边界点需要更长的时间才能揭示它们是否逃逸。如果迭代限制太低，精细结构可能会错误地看起来是实心或模糊的。提高迭代次数可改善边界分类，并使计算器能够更自信地解析狭窄的卷须、旋臂和卫星bulbs。',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '坐标读数将视口的当前中心显示为复数 c = a + bi。水平轴是实部，垂直轴是虚部。点击画布会选择一个新的复数坐标，然后放大其周围的可见窗口。这使得该工具对于学习分形的视觉区域如何对应于复平面中的精确位置非常有用。',
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
