import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'fire-pattern-origin-analyzer';
const title = 'Fire Pattern Origin Analyzer';
const description = 'Map V-patterns, deep char, soot shadows, and clean burn indicators on a room plan, then project fire spread vectors to estimate the most likely area of origin.';

const howTo = [
  {
    name: 'Import a room plan',
    text: 'Drag a plan image onto the workspace or load one from disk before placing any evidence vectors.',
  },
  {
    name: 'Click to open the radial evidence selector',
    text: 'Place the pointer over a burn feature, open the contextual radial menu, and choose the indicator type directly on the map.',
  },
  {
    name: 'Drag to refine vectors and watch convergence',
    text: 'Extend each propagation vector with on-canvas snapping and observe the probability field recalculate in real time as evidence accumulates.',
  },
  {
    name: 'Export the technical snapshot',
    text: 'Generate a structured report with origin coordinates, confidence, variance, layer state, and the complete vector set for later review.',
  },
];

const faq = [
  {
    question: 'Can burn patterns prove the exact point where a fire started?',
    answer: 'No. Fire patterns can help generate and test origin hypotheses, but ventilation, suppression, fuel load, flashover, and post-fire disturbance can distort patterns. Real origin determination requires a systematic investigation.',
  },
  {
    question: 'Why do V-patterns matter in fire investigation?',
    answer: 'V-patterns often reflect upward and outward flame spread on vertical surfaces. They can point toward a lower area of origin, but they must be compared with other evidence before drawing conclusions.',
  },
  {
    question: 'What does deep char indicate?',
    answer: 'Deep char may indicate longer heating, greater heat flux, or fuel effects. It is useful context, but it is not automatically the origin because materials char at different rates.',
  },
  {
    question: 'Why use several vectors instead of one arrow?',
    answer: 'A single pattern can be misleading. Multiple independent vectors reduce the influence of one damaged wall, one fuel package, or one ventilation path.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    planAria: 'Interactive forensic workspace for drawing fire spread vectors',
    vPattern: 'V-pattern',
    deepChar: 'Deep char',
    sootShadow: 'Soot shadow',
    cleanBurn: 'Clean burn',
    loadPlan: 'Load plan',
    generateReport: 'Generate report',
    pointerLabel: 'Pointer',
    resetVectors: 'Reset',
    estimatedOrigin: 'Estimated origin',
    visibleLayers: 'Visible evidence layers',
    vectorsLabel: 'VECTORS',
    confidenceLabel: 'CONFIDENCE',
    varianceLabel: 'VARIANCE',
    modeLabel: 'MODE',
    guideSummary: 'How to use this tool',
    flowPanelTitle: 'Workflow',
    legendPanelTitle: 'Evidence legend',
    readoutPanelTitle: 'Footer readout',
    flow1Kicker: 'STEP 1',
    flow1Icon: '1',
    flow1Title: 'Load',
    flow1Text: 'Upload the scene plan',
    flow2Kicker: 'STEP 2',
    flow2Icon: '2',
    flow2Title: 'Pick clue',
    flow2Text: 'Click the burn mark',
    flow3Kicker: 'STEP 3',
    flow3Icon: '3',
    flow3Title: 'Drag vector',
    flow3Text: 'Aim fire travel',
    flow4Kicker: 'STEP 4',
    flow4Icon: '4',
    flow4Title: 'Read result',
    flow4Text: 'Check footer + export',
    basicsTitle: 'What you should do first',
    basicsIntro: 'Load a clear plan, mark only patterns you can justify, and spread vectors across different surfaces instead of repeating the same clue.',
    indicatorsTitle: 'What each evidence type means',
    vPatternShort: 'Wall burn opens upward',
    vPatternExplain: 'A V-pattern is the familiar upward-and-outward burn shape often seen on a wall. It can suggest that heat and flames rose from a lower area, but it is not automatic proof of the exact origin.',
    deepCharShort: 'Area burned harder or longer',
    deepCharExplain: 'Deep char means a material appears more heavily burned, blackened, or consumed in one area than around it. It may indicate longer or more intense heating, but fuel type and material thickness matter a lot.',
    sootShadowShort: 'Smoke blocked or redirected',
    sootShadowExplain: 'A soot shadow is a protected or differently darkened area that suggests an object, surface, or airflow changed how soot was deposited. It can help reconstruct what was present or how smoke moved.',
    cleanBurnShort: 'Less soot from heat or airflow',
    cleanBurnExplain: 'Clean burn is an area where soot seems lighter, removed, or absent because heat, ventilation, or direct flame exposure affected it differently. It is useful, but not every clean area marks the origin.',
    resultsTitle: 'How to read the result',
    resultsIntro: 'Use the footer as a quick health check for your mapping, not as a final forensic conclusion.',
    resultsPoint1: 'How many evidence lines are active.',
    resultsPoint2: 'How strongly the active vectors agree.',
    resultsPoint3: 'How broad the origin area still is.',
    resultsPoint4: 'What the tool expects you to do next.',
    awaitingVector: 'Awaiting vector',
    selectIndicator: 'Select indicator',
    refiningVector: 'Refining vector',
    needsMoreVectors: 'More vectors needed',
    wideArea: 'Broad origin area',
    focusedArea: 'Focused origin area',
    dropPlan: 'Drop plan image or click to upload',
    needsMoreVectorsText: 'Draw at least two clear directional arrows. Three or more independent observations usually make the convergence much easier to interpret.',
    wideAreaText: 'The projected lines intersect, but the spread is still wide. In a real scene, compare ventilation, fuel load, suppression effects, and witness information before narrowing the origin.',
    focusedAreaText: 'The vectors converge into a compact area. Treat this as a strong teaching signal for origin hypothesis development, not as a final forensic conclusion.',
    disclaimer: 'Educational simulation only. Actual fire origin and cause investigation should follow accepted guides, scene safety protocols, documentation standards, and qualified expert review.',
  },
  seo: [
    {
      type: 'title',
      text: 'Interactive Fire Origin Analysis from Burn Pattern Vectors',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:fire-alert',
      badge: 'Teaching simulator',
      title: 'What this fire pattern origin analyzer teaches',
      html: 'This browser tool demonstrates how investigators reason from physical fire patterns toward a probable <strong>area of origin</strong>. Users map visible evidence, draw directional spread vectors, and watch the projected lines converge or disperse. The model is intentionally educational: it teaches geometry and pattern interpretation, not legal cause determination.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4 layers', label: 'V-pattern, char, soot, clean burn', icon: 'mdi:layers-triple' },
        { value: '2D plan', label: 'structural room map', icon: 'mdi:floor-plan' },
        { value: '3+ arrows', label: 'recommended observations', icon: 'mdi:vector-line' },
        { value: '0-100%', label: 'confidence input', icon: 'mdi:gauge' },
      ],
    },
    {
      type: 'summary',
      title: 'A disciplined workflow for fire pattern interpretation',
      items: [
        'Begin with safety, scene preservation, photographs, sketches, and systematic documentation before interpreting patterns.',
        'Separate pattern types so V-shaped damage, char depth, soot deposition, and clean burn are not collapsed into one assumption.',
        'Draw directional indicators only where the physical pattern supports a defensible direction of travel.',
        'Look for convergence among independent observations rather than relying on the most dramatic damage.',
        'Use the estimated area of origin as a hypothesis to test against fuels, ignition sources, ventilation, electrical evidence, and witness accounts.',
      ],
    },
    {
      type: 'table',
      headers: ['Pattern', 'Potential value', 'Main caution'],
      rows: [
        ['V-pattern', 'May suggest upward and outward flame travel from a lower area.', 'Can be altered by ventilation, flashover, wall geometry, and suppression.'],
        ['Deep char', 'Can indicate sustained heat exposure or intense burning.', 'Fuel type and material thickness strongly affect char depth.'],
        ['Soot shadow', 'May reveal protected areas, object placement, or airflow effects.', 'Moved furniture or suppression activity can change the interpretation.'],
        ['Clean burn', 'Can show high heat, ventilation, or late-stage burning.', 'It does not automatically identify the first item ignited.'],
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Better origin hypotheses',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'The best hypotheses explain multiple observations at the same time.',
          points: ['Independent vectors converge', 'Evidence fits known ventilation paths', 'Fuel packages are accounted for', 'Alternative origins are actively tested'],
        },
        {
          title: 'Weak origin hypotheses',
          icon: 'mdi:alert-circle-outline',
          description: 'Weak hypotheses often rely on one pattern without testing distortion factors.',
          points: ['One dramatic char area is treated as proof', 'Flashover is ignored', 'Suppression damage is not documented', 'Ignition source evidence is assumed'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How the Vector Model Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Each arrow is treated as a projected line of fire travel. The estimator calculates pairwise line intersections, filters points that fall within a reasonable plan boundary, averages the remaining crossings, and reports a radius based on the spread of those intersections. A small radius with several vectors produces a stronger convergence signal. The intersection model works by solving the parametric equations of two lines extending from their respective evidence markers. When two vectors point toward a shared region, their theoretical crossing point contributes one coordinate to the averaging pool. The more independent vectors that participate, the more the estimator can filter out crossings that sit far from the main cluster, effectively reducing the influence of any single observation that might be poorly oriented or misinterpreted.',
    },
    {
      type: 'paragraph',
      html: 'This geometric approach mirrors a classroom sketching exercise: it helps students see why origin analysis improves when observations come from different surfaces and pattern types. It also exposes a common problem: arrows can intersect even when the underlying interpretation is poor, so the mathematical center must never replace fire science judgment. In a real investigation, practitioners compare the plotted result against ventilation paths, fuel load distribution, structural damage, and witness statements before treating any coordinate as a likely origin. The tool encourages this habit by displaying variance alongside the estimated point, reminding users that a tight cluster of crossings is only as strong as the quality of the observations that produced it.',
    },
    {
      type: 'paragraph',
      html: 'Beyond the basic intersection logic, the estimator applies a boundary constraint so that crossings located far outside the room plan are excluded. This prevents outliers from dragging the averaged center toward impossible locations. The final radius represents the standard deviation of the remaining crossing coordinates, giving a direct measure of how consistently the active vectors agree. A radius under ten percent of the plan span indicates strong convergence. A radius exceeding a quarter of the plan signals that the evidence does not yet support a focused origin, and more or better observations are needed before drawing conclusions.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Area of origin', definition: 'The general region where available evidence suggests the fire began.' },
        { term: 'V-pattern', definition: 'A fire pattern that often appears as upward and outward damage on a vertical surface.' },
        { term: 'Clean burn', definition: 'A lighter or cleaner area caused when soot is burned away or not deposited under high heat or airflow conditions.' },
        { term: 'Soot shadow', definition: 'A protected or differently deposited soot area that can preserve information about objects, airflow, or heat exposure.' },
        { term: 'Vector convergence', definition: 'The clustering of projected directional indicators around a common region.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Do not turn convergence into certainty',
      html: 'A tight intersection cluster is useful only when the observations are valid. Real investigations must account for ventilation, flashover, fuel packages, electrical systems, appliance evidence, witness statements, suppression, and scene disturbance.',
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
