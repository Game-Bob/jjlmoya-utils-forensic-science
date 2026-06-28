import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'bloodstain-pattern-origin-analyzer';
const title = '3D Bloodstain Pattern Origin Analyzer';
const description = 'Model elliptical bloodstains on a vertical plane, estimate impact angles, and visualize projected trajectories in an interactive 3D scene.';

const howTo = [
  { name: 'Enter or adjust stains', text: 'Use the table or the 2D surface to define each stain position, width, length, and long-axis orientation.' },
  { name: 'Review impact angles', text: 'The calculator estimates the angle of impact from the width-to-length ratio using the arcsine relationship.' },
  { name: 'Inspect the 3D convergence', text: 'Rotate the viewport to compare projected trajectories and the estimated origin sphere.' },
  { name: 'Check uncertainty', text: 'Use the spread value as a practical warning indicator: broad line separation means the plotted origin is less stable.' },
];

const faq = [
  { question: 'Can a browser tool determine the true source of bloodshed?', answer: 'No. It can teach and triage geometric relationships, but case conclusions require validated methods, scene documentation, scale calibration, and qualified bloodstain pattern analysis.' },
  { question: 'Why is the impact angle calculated from width and length?', answer: 'For an ideal elliptical stain, the sine of the impact angle is approximated by width divided by length. Real stains may be distorted by surface texture, flow, transfer, or measurement error.' },
  { question: 'What does the 3D origin sphere represent?', answer: 'It is the least-squares convergence estimate among projected trajectory lines, not a guaranteed point source.' },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    metric: 'Metric',
    imperial: 'Imperial',
    unitsLabel: 'Units',
    addStain: 'Add stain',
    reset: 'Reset',
    surface: 'Impact surface',
    viewport3dLabel: '3D trajectory viewport',
    stainLabel: 'Stain',
    table: 'Measurements',
    origin: 'Estimated origin',
    spread: 'Line spread',
    confidence: 'Confidence',
    impact: 'Impact angle',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
    x: 'X',
    y: 'Y',
    width: 'Width',
    length: 'Length',
    rotation: 'Rotation',
    remove: 'Remove',
    cm: 'cm',
    inch: 'in',
    degree: 'deg',
    rotateHint: 'Drag the 3D view to rotate the reconstruction.',
    disclaimer: 'Educational reconstruction only. Interpret with validated scene measurements and documented uncertainty.',
  },
  seo: [
    { type: 'title', text: 'How a 3D Bloodstain Pattern Origin Analyzer Works', level: 2 },
    { type: 'paragraph', html: 'A bloodstain pattern origin analyzer helps users explore one of the core geometric questions in bloodstain pattern analysis: <strong>where in space might the blood source have been when droplets struck a surface?</strong> This tool models stains as ellipses on a vertical plane, calculates an impact angle from each width-to-length ratio, projects trajectories backward into a 3D scene, and estimates a practical convergence region.' },
    { type: 'diagnostic', variant: 'warning', title: 'Forensic caution', html: 'The output is a reconstruction aid, not a case conclusion. Real stains can be affected by target texture, satellite staining, clotting, flow, wiping, transfer, perspective error, and incomplete scale documentation.' },
    { type: 'stats', columns: 3, items: [
      { value: 'asin(W/L)', label: 'Impact angle formula' },
      { value: '3+', label: 'Preferred independent stains' },
      { value: '3D', label: 'Trajectory convergence space' },
    ] },
    { type: 'title', text: 'Impact Angle Formula', level: 3 },
    { type: 'paragraph', html: 'For a simple elliptical stain, the impact angle is commonly approximated as <strong>arcsin(width / length)</strong>. A stain measured as 1 cm wide and 2 cm long therefore produces an impact angle of 30 degrees. That relationship is useful because it converts a flat mark into a trajectory elevation, but it assumes the measured stain is representative and not distorted.' },
    { type: 'code', ariaLabel: 'Impact angle calculation', code: 'impact angle = arcsin(stain width / stain length)\nexample: arcsin(1 cm / 2 cm) = 30 degrees' },
    { type: 'paragraph', html: 'This is a common search intent behind queries such as <em>bloodstain impact angle calculator</em>, <em>blood spatter angle of impact formula</em>, and <em>how to calculate bloodstain trajectory</em>. The important point is that the formula only answers one part of the reconstruction. It estimates the elevation of travel relative to the target surface; it does not by itself identify the source, mechanism, weapon, or event sequence.' },
    { type: 'title', text: 'How to Measure Stains Before Entering Data', level: 3 },
    { type: 'paragraph', html: 'The most useful inputs come from calibrated, perpendicular photographs or direct scene measurements. Measure the main elliptical body of the stain, not satellites, tails, flow marks, or secondary stains. The width should be taken across the short axis and the length along the long axis. Rotation should follow the long axis direction on the target plane. Small errors in length, width, or orientation can move the projected trajectory by a large amount once it is extended into 3D space.' },
    { type: 'table', headers: ['Measurement quality', 'Likely effect', 'Practical response'], rows: [
      ['Long axis is clear', 'Rotation is more reliable', 'Use the visible long axis and document orientation method.'],
      ['Width or length is distorted', 'Impact angle may be biased', 'Flag uncertainty and compare with neighboring stains.'],
      ['Few stains converge', 'Origin estimate becomes unstable', 'Add independent stains before interpreting the 3D origin.'],
      ['Scale is missing', 'All distances become illustrative only', 'Do not report real-world origin coordinates without calibration.'],
    ] },
    { type: 'title', text: 'Reading the 3D Convergence', level: 3 },
    { type: 'paragraph', html: 'The origin sphere in this tool is calculated as the point that sits closest to all projected trajectory lines. When lines pass near one another, the spread value is small and confidence improves. When lines diverge, the sphere still appears, but it should be read as a weak least-squares compromise rather than a precise source.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Area of convergence', description: 'A two-dimensional estimate on the target plane, often used to see where long-axis directions meet when viewed from the front.', points: ['Useful for first-pass screening', 'Does not represent vertical height by itself'] },
      { title: 'Area or volume of origin', description: 'A three-dimensional estimate that combines direction on the plane with impact angle to project trajectories into space.', highlight: true, points: ['Explains possible source height', 'Sensitive to measurement and angle uncertainty'] },
    ] },
    { type: 'paragraph', html: 'Users often search for a <em>blood spatter point of origin calculator</em> expecting a single exact coordinate. In practice, good interpretation is more cautious. The origin is better understood as a region supported by multiple trajectories. If the plotted lines form a tight bundle, the model is more coherent. If they pass through a broad volume, the reconstruction is telling you that the measurements, stain selection, or assumptions need review.' },
    { type: 'title', text: 'Common Reasons Trajectories Do Not Meet', level: 3 },
    { type: 'proscons', title: 'Strong inputs versus weak inputs', items: [
      { pro: 'Several well-formed elliptical stains with clear long axes', con: 'Only one or two stains, or stains selected because they appear to fit a theory' },
      { pro: 'Calibrated measurements taken perpendicular to the impact surface', con: 'Oblique photos, unknown scale, or copied screenshots' },
      { pro: 'Independent stains from the same event mechanism', con: 'Mixed passive drops, transfer stains, cast-off, flow, or secondary impact patterns' },
    ] },
    { type: 'paragraph', html: 'A poor convergence does not automatically mean the tool is wrong. It may mean the stains do not belong to the same pattern, the photograph is perspective-distorted, the long axis was misread, the stain is not a clean ellipse, or the physical event is more complex than a simple point-source model. That is valuable information. A reconstruction tool should expose disagreement instead of hiding it behind a confident-looking number.' },
    { type: 'title', text: 'What This Tool Is Good For', level: 3 },
    { type: 'list', items: [
      '<strong>Use multiple stains:</strong> three or more independent stains provide a more meaningful convergence estimate.',
      '<strong>Watch the spread:</strong> a high spread warns that the lines do not agree closely in 3D.',
      '<strong>Preserve scale:</strong> centimeter or inch values must come from calibrated photographs or scene measurements.',
      '<strong>Separate teaching from reporting:</strong> this visualization is best for education, planning, and explanation before formal review.',
    ] },
    { type: 'card', title: 'Best workflow', html: 'Start by plotting a small set of high-quality stains. Check whether the 2D long-axis directions make visual sense. Then inspect the 3D trajectories, note the spread, and change one measurement at a time to see which stain drives the reconstruction. That sensitivity check is often more useful than the raw origin coordinate.' },
    { type: 'title', text: 'When Not to Rely on a Bloodstain Origin Estimate', level: 3 },
    { type: 'paragraph', html: 'Do not rely on a simple origin estimate when the stains are heavily distorted, the target surface is curved or irregular, the pattern includes transfer or projected expirated blood, the surface was moved, or the scene lacks reliable scale. The same caution applies when stains come from different mechanisms or different moments in the event. A clean-looking 3D visualization can still be misleading if the input pattern is not suitable for geometric reconstruction.' },
    { type: 'glossary', items: [
      { term: 'Angle of impact', definition: 'The estimated angle between the droplet path and the target surface, commonly calculated from the width-to-length ratio of an elliptical stain.' },
      { term: 'Trajectory line', definition: 'A projected line showing a possible backward path of travel from a stain into three-dimensional space.' },
      { term: 'Area of convergence', definition: 'The approximate region where stain directions intersect when viewed on the target plane.' },
      { term: 'Area of origin', definition: 'The approximate three-dimensional region from which blood may have originated, based on multiple projected trajectories.' },
    ] },
    { type: 'summary', title: 'Best use', items: [
      'Use the analyzer to understand trajectory geometry and test measurement sensitivity.',
      'Compare the origin sphere with the spread value before trusting a reconstruction.',
      'Do not use the visualization as a standalone forensic opinion.',
    ] },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'ForensicApplication', operatingSystem: 'Any' },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
    { '@context': 'https://schema.org', '@type': 'HowTo', name: title, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) },
  ],
};
