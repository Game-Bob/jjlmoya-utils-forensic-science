import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-glass-becke-line-simulator';
const title = 'Forensic Glass Refractive Index Becke Line Simulator';
const description = 'Simulate the Becke line method for forensic glass comparison by heating an immersion liquid, matching refractive indices, and watching the bright halo disappear.';

const howTo = [
  {
    name: 'Select a questioned glass profile',
    text: 'Choose a common glass reference profile such as soda-lime, borosilicate, lead crystal, or tempered window glass.',
  },
  {
    name: 'Adjust the hot-stage temperature',
    text: 'Move the temperature slider to change the refractive index of the virtual immersion liquid.',
  },
  {
    name: 'Observe the Becke line movement',
    text: 'Use the focus direction control to see whether the bright line moves inward, outward, or nearly disappears at the match point.',
  },
  {
    name: 'Read the index difference',
    text: 'Compare liquid RI, glass RI, delta RI, and match percentage to understand why the halo becomes faint near index agreement.',
  },
];

const faq = [
  {
    question: 'What is the Becke line in forensic glass analysis?',
    answer: 'The Becke line is a bright halo seen near the boundary between a glass fragment and an immersion liquid when their refractive indices differ. Its movement during focusing helps determine which material has the higher refractive index.',
  },
  {
    question: 'Why does heating the immersion liquid matter?',
    answer: 'Many immersion liquids decrease in refractive index as temperature rises. By heating the liquid until its index matches the glass, the boundary contrast fades and the fragment edge becomes difficult to see.',
  },
  {
    question: 'Can refractive index identify a glass source by itself?',
    answer: 'No. RI can support class comparison and exclusion, but forensic source interpretation also considers elemental composition, thickness, color, fracture context, controls, uncertainty, and validated laboratory procedures.',
  },
  {
    question: 'What does it mean when the Becke line disappears?',
    answer: 'It means the liquid and glass have very similar refractive indices under those simulated conditions. In real microscopy, the disappearance is judged with calibrated temperature control and reference materials.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Virtual microscope view showing a glass fragment in immersion liquid',
    units: 'Temperature unit system',
    metric: 'Metric',
    imperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    glassSample: 'Glass reference',
    sodaLime: 'Soda-lime container glass',
    borosilicate: 'Borosilicate lab glass',
    leadCrystal: 'Lead crystal decorative glass',
    tempered: 'Tempered window glass',
    stageTemperature: 'Hot-stage temperature',
    focusDirection: 'Focus direction',
    focusRaised: 'Raise focus',
    focusLowered: 'Lower focus',
    liquidRi: 'Liquid RI',
    glassRi: 'Glass RI',
    deltaRi: 'Delta RI',
    matchMeter: 'RI match',
    canvasHalo: 'visible Becke halo',
    canvasFocusSeparator: ' - ',
    canvasMatched: 'edge nearly matched',
    interpMatched: 'The boundary is close to optical match. In a real Becke line test, this is the region where the halo becomes faint and the fragment edge is hardest to locate.',
    interpGlassHigher: 'The glass has the higher refractive index. With raised focus, the Becke line behavior indicates light concentrating toward the glass side of the boundary.',
    interpLiquidHigher: 'The immersion liquid has the higher refractive index. The halo shifts toward the liquid side until temperature brings the liquid index closer to the glass.',
    disclaimer: 'Educational simulation only. Real forensic glass comparison requires calibrated refractive-index equipment, known standards, uncertainty reporting, and qualified interpretation.',
  },
  seo: [
    {
      type: 'title',
      text: 'Becke Line Refractive Index Testing for Forensic Glass',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:microscope',
      badge: 'Teaching simulator',
      title: 'What this glass RI simulator demonstrates',
      html: 'This simulator shows why a glass fragment becomes more or less visible in immersion oil as the liquid refractive index approaches the glass refractive index. It is built for forensic science students learning <strong>Becke line microscopy</strong>, hot-stage RI matching, and the limits of glass comparison evidence.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'n glass - n liquid', label: 'index contrast shown', icon: 'mdi:delta' },
        { value: '15-145 C', label: 'hot-stage range', icon: 'mdi:thermometer' },
        { value: '4', label: 'glass profiles', icon: 'mdi:glass-fragile' },
        { value: 'C / F', label: 'convertible temperature units', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'summary',
      title: 'Practical Becke line observation checklist',
      items: [
        'Use a clean, small glass fragment fully immersed in a suitable refractive-index liquid.',
        'Focus slightly above and below the boundary and watch which side the bright line appears to move toward.',
        'Raise temperature slowly near the estimated match point because the line can fade over a narrow range.',
        'Record temperature, liquid type, calibration standard, observed match behavior, and uncertainty.',
        'Treat RI as class evidence: a mismatch can exclude, while a match requires additional context.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'What RI comparison can support',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'Refractive index can help compare questioned glass fragments with known reference glass under controlled conditions.',
          points: ['Class-characteristic comparison', 'Exclusion when RI differs clearly', 'Screening before elemental analysis', 'Teaching optical boundary behavior'],
        },
        {
          title: 'What RI cannot prove alone',
          icon: 'mdi:alert-circle-outline',
          description: 'A matching RI does not uniquely identify a pane, bottle, vehicle window, or crime-scene source.',
          points: ['No individual source attribution by itself', 'No reconstruction without scene context', 'No substitute for controls', 'No legal conclusion from a browser model'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['User question', 'Microscopy concept', 'Careful answer'],
      rows: [
        ['Why does the bright edge move?', 'Refraction at a boundary between two refractive indices.', 'The Becke line tends to move toward the material with higher refractive index when focus is raised.'],
        ['Why does the edge disappear?', 'Index matching.', 'When glass and liquid RI are nearly equal, boundary contrast drops and the halo becomes weak.'],
        ['Why heat the liquid?', 'Thermal RI coefficient.', 'The simulated liquid RI decreases with temperature, allowing a match against different glass types.'],
        ['Is a match conclusive?', 'Class evidence limitation.', 'A match supports consistency only; many glass objects can share a similar RI.'],
      ],
    },
    {
      type: 'title',
      text: 'How the Simulation Model Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The model assigns each glass profile a reference refractive index and treats the immersion liquid as a temperature-sensitive medium. As the hot stage warms, the liquid index decreases by a fixed thermal coefficient. The simulator then calculates the difference between glass RI and liquid RI, using that difference to control halo brightness, halo offset, match percentage, and the interpretation message.',
    },
    {
      type: 'paragraph',
      html: 'The visual microscope field is intentionally qualitative. It does not attempt to ray-trace every optical path. Instead, it preserves the essential training relationship: strong RI contrast produces a bright boundary; lower contrast produces a faint boundary; and near the match point, the glass edge can appear to vanish in the liquid.',
    },
    {
      type: 'paragraph',
      html: 'In professional forensic laboratories, temperature stage calibration is performed using reference glass samples of known refractive index. Since the refractive index of the immersion liquid varies predictably with temperature (usually denoted as dn/dT), the exact temperature at which the Becke line disappears allows the scientist to calculate the glass refractive index to within four decimal places. This simulator models this temperature-dependent behavior using a linear formula, enabling students to practice finding the exact match point by carefully controlling the heating stage.',
    },
    {
      type: 'paragraph',
      html: 'When analyzing glass evidence, the refractive index is considered class characteristic evidence. While a matching refractive index between a crime scene fragment and a suspect\'s clothing is consistent with a common source, it does not uniquely identify the source because many glass objects share identical refractive index values. Therefore, forensic experts must interpret matching results conservatively, reporting the match in terms of consistency while highlighting that a definitive source attribution is not possible based on optical properties alone.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Refractive index', definition: 'A measure of how strongly a material bends light compared with vacuum.' },
        { term: 'Immersion liquid', definition: 'A liquid with known optical properties used to surround a fragment during microscopic RI comparison.' },
        { term: 'Becke line', definition: 'The bright line or halo seen at a boundary when two transparent materials have different refractive indices.' },
        { term: 'Match point', definition: 'The temperature region where the immersion liquid and glass have nearly the same refractive index.' },
        { term: 'Class evidence', definition: 'Evidence that can associate an item with a group of possible sources rather than one unique source.' },
      ],
    },
    {
      type: 'tip',
      title: 'Interpretation tip for students',
      html: 'In glass evidence, a clear RI mismatch is often more powerful than a match because it can exclude a proposed source. A match is useful, but its strength depends on population data, measurement precision, elemental composition, and the case context.',
    },
    {
      type: 'proscons',
      title: 'Strengths and limits of Becke line glass RI testing',
      items: [
        { pro: 'Fast, visual, and excellent for teaching transparent-material comparison.', con: 'Observer judgment and focus technique can affect the apparent line movement.' },
        { pro: 'Temperature matching can estimate RI with useful precision when calibrated.', con: 'Thermal control, liquid aging, contamination, and standards matter in real work.' },
        { pro: 'Useful for excluding glass fragments with clearly different optical properties.', con: 'Cannot individualize a source without broader analytical and contextual evidence.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Keep the conclusion proportional',
      html: 'A browser Becke line simulation is a learning aid, not a laboratory method. Formal glass evidence interpretation should rely on validated instruments, written procedures, calibration records, uncertainty estimates, peer review, and jurisdiction-appropriate reporting language.',
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
