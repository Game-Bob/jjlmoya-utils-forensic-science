import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'simulateur-fractale-mandelbrot';
const title = 'Simulateur de Fractale de Mandelbrot et Explorateur d\'Autosimilarité';
const description = 'Explorez l\'ensemble de Mandelbrot, zoomez sur les frontières fractales autosimilaires et comparez la profondeur d\'itération, le contraste des couleurs et les coordonnées du plan complexe.';

const howTo = [
  {
    name: 'Choisissez une région de l\'ensemble de Mandelbrot',
    text: 'Partez de l\'ensemble complet ou sautez directement vers une région très détaillée telle que la vallée de l\'hippocampe ou un minibrot en spirale.',
  },
  {
    name: 'Zoomez en cliquant sur l\'image',
    text: 'Cliquez sur n\'importe quel point du canevas pour recentrer le plan complexe et agrandir la fractale autour de cette coordonnée.',
  },
  {
    name: 'Réglez la profondeur d\'itération et le contraste des couleurs',
    text: 'Augmentez le budget d\'itérations pour révéler une structure de frontière plus fine, puis ajustez le contraste et la palette pour rendre les bandes de temps d\'évasion plus lisibles.',
  },
];

const faq = [
  {
    question: 'Que montre le simulateur de l\'ensemble de Mandelbrot ?',
    answer: 'Il montre quels nombres complexes c maintiennent la récurrence z(n+1) = z(n)^2 + c bornée en partant de z = 0. Les points qui ne s\'échappent jamais dans le budget d\'itérations sélectionné sont colorés comme membres de l\'ensemble, tandis que les points extérieurs sont colorés selon la vitesse à laquelle leur orbite s\'échappe.',
  },
  {
    question: 'Pourquoi la frontière de Mandelbrot contient-elle autant de détails ?',
    answer: 'La frontière sépare les orbites stables de celles qui s\'échappent, et de minuscules changements de coordonnées près de cette frontière peuvent complètement modifier le comportement à long terme. Cette sensibilité crée des bulbes imbriqués, des spirales, des filaments et des copies miniatures qui apparaissent à de nombreux niveaux d\'agrandissement.',
  },
  {
    question: 'L\'ensemble de Mandelbrot est-il vraiment autosimilaire ?',
    answer: 'Il n\'est pas parfaitement autosimilaire au sens strict comme un triangle de Sierpinski, mais il est richement quasi-autosimilaire. De petites copies de l\'ensemble complet apparaissent dans tout le plan, souvent déformées et reliées par des structures ramifiées élaborées.',
  },
  {
    question: 'Que contrôle le nombre d\'itérations ?',
    answer: 'Le nombre d\'itérations contrôle la durée pendant laquelle le simulateur teste chaque point avant de décider qu\'il appartient probablement à l\'ensemble. Des valeurs plus élevées révèlent des filaments plus profonds et des minibrots plus nets, mais nécessitent plus de calculs par pixel.',
  },
  {
    question: 'Pourquoi les couleurs changent-elles en dehors de la région noire ?',
    answer: 'Les couleurs extérieures sont basées sur le temps d\'évasion: les points qui s\'échappent rapidement reçoivent des couleurs différentes de ceux qui restent près de l\'ensemble pendant de nombreuses itérations. Un coloriage lisse réduit les bandes marquées et facilite l\'inspection de la géométrie des orbites voisines.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Simulateur de Fractale de Mandelbrot',
    canvasLabel: 'Canevas interactif de l\'ensemble de Mandelbrot',
    presetsLabel: 'Paramètres de région de Mandelbrot',
    presetFull: 'Ensemble Complet',
    presetSeahorse: 'Vallée de l\'Hippocampe',
    presetSpiral: 'Minibrot Spirale',
    centerPoint: 'Centre',
    magnification: 'Grossissement',
    visibleWindow: 'Fenêtre visible',
    renderBudget: 'Itérations',
    iterationsLabel: 'Profondeur d\'itération',
    contrastLabel: 'Contraste d\'évasion',
    colorLabel: 'Champ de couleur',
    paletteEmber: 'Bandes de braise',
    paletteLagoon: 'Plasma lagunaire',
    paletteInk: 'Spectre d\'encre',
  },
  seo: [
    {
      type: 'title',
      text: 'Simulateur de l\'Ensemble de Mandelbrot pour Fractales, Temps d\'Évasion et Autosimilarité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur de fractale de Mandelbrot rend le classique ensemble du plan complexe défini par l\'itération <strong>z(n+1) = z(n)^2 + c</strong>. Il est conçu pour l\'exploration plutôt que pour la visualisation passive: chaque clic recentre le plan, chaque zoom expose un voisinage mathématique plus petit, et le curseur d\'itérations vous permet de décider à quelle profondeur le calculateur doit tester la frontière avant de colorer un point comme stable ou en fuite.',
    },
    {
      type: 'title',
      text: 'Comment lire l\'image de Mandelbrot',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La forme centrale sombre marque les points dont les orbites restent bornées dans le budget d\'itérations actuel. L\'extérieur coloré est une carte du temps d\'évasion. Un point coloré près de l\'ensemble peut survivre des centaines d\'itérations avant que sa magnitude ne dépasse le rayon d\'évasion, tandis qu\'un point éloigné s\'échappe presque immédiatement. La géométrie la plus intéressante scientifiquement ne se trouve généralement pas à l\'intérieur de la forme remplie, mais le long de la frontière où les comportements bornés et non bornés s\'entrelacent.',
    },
    {
      type: 'table',
      headers: ['Contrôle', 'Ce qu\'il modifie', 'Quand l\'augmenter'],
      rows: [
        ['<strong>Profondeur d\'itération</strong>', 'Combien d\'étapes de récurrence sont testées pour chaque pixel.', 'Utilisez des valeurs plus élevées après un zoom dans des filaments minces ou des copies miniatures.'],
        ['<strong>Contraste d\'évasion</strong>', 'À quel point les valeurs d\'évasion lisses sont séparées en bandes visibles.', 'Augmentez-le quand l\'image paraît plate ; baissez-le quand les couleurs sont trop agressives.'],
        ['<strong>Palette</strong>', 'Le mappage de couleur appliqué aux points extérieurs.', 'Changez de palette pour révéler des structures qui pourraient être cachées par un champ de couleur.'],
      ],
    },
    {
      type: 'title',
      text: 'Autosimilarité et Minibrots',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une des raisons pour lesquelles l\'ensemble de Mandelbrot est si célèbre est sa quasi-autosimilarité. En zoomant sur les antennes, les spirales et les vallées, vous rencontrez à plusieurs reprises de petites îles ressemblant à Mandelbrot, souvent appelées <em>minibrots</em>. Ces copies ne sont pas simplement décoratives. Leur agencement reflète la dynamique des applications quadratiques, y compris les bulbes périodiques, les motifs de bifurcation et les régions où les orbites restent piégées pendant de longues périodes avant de s\'échapper.',
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