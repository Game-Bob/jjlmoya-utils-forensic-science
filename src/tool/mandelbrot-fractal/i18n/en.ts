import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'mandelbrot-fractal-calculator';
const title = 'Mandelbrot Fractal Calculator and Self Similarity Explorer';
const description = 'Explore the Mandelbrot set, zoom into self-similar fractal boundaries, and compare iteration depth, color contrast, and complex-plane coordinates.';

const howTo = [
  {
    name: 'Choose a region of the Mandelbrot set',
    text: 'Start from the full set or jump directly to a high-detail region such as the seahorse valley or a spiral minibrot.',
  },
  {
    name: 'Zoom by clicking the image',
    text: 'Click any point on the canvas to recenter the complex plane and magnify the fractal around that coordinate.',
  },
  {
    name: 'Tune iteration depth and color contrast',
    text: 'Increase the iteration budget to reveal finer boundary structure, then adjust contrast and palette to make escape-time bands easier to read.',
  },
];

const faq = [
  {
    question: 'What does the Mandelbrot set calculator show?',
    answer: 'It shows which complex numbers c keep the recurrence z(n+1) = z(n)^2 + c bounded when starting from z = 0. Points that never escape within the selected iteration budget are colored as members of the set, while outside points are colored by how quickly their orbit escapes.',
  },
  {
    question: 'Why does the Mandelbrot boundary contain so much detail?',
    answer: 'The boundary separates stable and escaping orbits, and tiny coordinate changes near that boundary can completely change long-term behavior. This sensitivity creates nested bulbs, spirals, filaments, and miniature copies that appear at many magnification levels.',
  },
  {
    question: 'Is the Mandelbrot set truly self-similar?',
    answer: 'It is not perfectly self-similar in the same strict way as a Sierpinski triangle, but it is richly quasi-self-similar. Small copies of the whole set appear throughout the plane, often distorted and connected by elaborate branching structures.',
  },
  {
    question: 'What does the iteration count control?',
    answer: 'The iteration count controls how long the calculator tests each point before deciding that it probably belongs to the set. Higher values reveal deeper filaments and cleaner minibrots, but they require more computation per pixel.',
  },
  {
    question: 'Why do the colors change outside the black region?',
    answer: 'Outside colors are based on escape time: points that escape quickly receive different colors from points that stay near the set for many iterations. Smooth coloring reduces harsh bands and makes the geometry of nearby orbits easier to inspect.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Mandelbrot Fractal Calculator',
    canvasLabel: 'Interactive Mandelbrot set canvas',
    presetsLabel: 'Mandelbrot region presets',
    presetFull: 'Full Set',
    presetSeahorse: 'Seahorse Valley',
    presetSpiral: 'Spiral Minibrot',
    centerPoint: 'Center',
    magnification: 'Magnification',
    visibleWindow: 'Visible window',
    renderBudget: 'Iterations',
    iterationsLabel: 'Iteration depth',
    contrastLabel: 'Escape contrast',
    colorLabel: 'Color field',
    paletteEmber: 'Ember bands',
    paletteLagoon: 'Lagoon plasma',
    paletteInk: 'Ink spectrum',
    reset: 'Reset view',
  },
  seo: [
    {
      type: 'title',
      text: 'Mandelbrot Set Calculator for Fractals, Escape Time, and Self-Similarity',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This Mandelbrot fractal calculator renders the classic complex-plane set defined by the iteration <strong>z(n+1) = z(n)^2 + c</strong>. It is designed for exploration rather than passive viewing: every click recenters the plane, each zoom exposes a smaller mathematical neighborhood, and the iteration slider lets you decide how deeply the calculator should test the boundary before coloring a point as stable or escaping.',
    },
    {
      type: 'title',
      text: 'How to Read the Mandelbrot Image',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The dark central shape marks points whose orbits remain bounded within the current iteration budget. The colored exterior is an escape-time map. A point colored close to the set may survive hundreds of iterations before its magnitude exceeds the escape radius, while a point far away escapes almost immediately. The most scientifically interesting geometry is usually not inside the filled shape, but along the boundary where bounded and unbounded behavior interlace.',
    },
    {
      type: 'table',
      headers: ['Control', 'What it changes', 'When to increase it'],
      rows: [
        ['<strong>Iteration depth</strong>', 'How many recurrence steps are tested for each pixel.', 'Use higher values after zooming into thin filaments or miniature copies.'],
        ['<strong>Escape contrast</strong>', 'How strongly smooth escape values are separated into visible bands.', 'Raise it when the image looks flat; lower it when colors are too harsh.'],
        ['<strong>Palette</strong>', 'The color mapping applied to outside points.', 'Switch palettes to reveal structures that may be hidden by one color field.'],
      ],
    },
    {
      type: 'title',
      text: 'Self-Similarity and Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'One reason the Mandelbrot set is so famous is its quasi-self-similarity. As you zoom into antennae, spirals, and valleys, you repeatedly encounter small Mandelbrot-like islands often called minibrots. These copies are not merely decorative. Their arrangement reflects the dynamics of quadratic maps, including periodic bulbs, bifurcation patterns, and regions where orbits remain trapped for long periods before escaping.',
    },
    {
      type: 'title',
      text: 'Why Higher Iterations Matter at Deep Zoom',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'At the full-set view, a modest iteration limit gives a recognizable image. At deeper magnification, however, many boundary points take far longer to reveal whether they escape. If the iteration limit is too low, fine structures can look falsely solid or muddy. Raising the iteration count improves boundary classification and lets the calculator resolve narrow tendrils, spiral arms, and satellite bulbs with more confidence.',
    },
    {
      type: 'title',
      text: 'Mathematical Meaning of the Complex Coordinates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The coordinate readout shows the current center of the viewport as a complex number c = a + bi. The horizontal axis is the real part and the vertical axis is the imaginary part. Clicking the canvas chooses a new complex coordinate, then magnifies the visible window around it. This makes the tool useful for learning how visual regions of the fractal correspond to precise locations in the complex plane.',
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
