import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'gsr-dispersion-calculator';
const title = 'GSR Dispersion Distance Calculator';
const description = 'Simulate educational gunshot residue dispersion patterns across a target surface using firing distance, ammunition type, density decay, soot deposition, and radial particle spread.';

const howTo = [
  {
    name: 'Set the muzzle-to-target distance',
    text: 'Move the distance control from contact range to three meters and watch how the same discharge changes from a compact, thermally altered deposit into a broad, sparse residue field.',
  },
  {
    name: 'Choose an ammunition profile',
    text: 'Select a 9 mm pistol, .38 revolver, or 12 gauge shotgun profile. Each profile changes the particle count, spread multiplier, residue strength, and estimated thermal reach used by the simulation.',
  },
  {
    name: 'Read the visual target and cone display',
    text: 'Use the cloth target to compare particle density, central soot, and radial dispersion, then use the side cone to understand how the discharge plume expands before reaching the target plane.',
  },
  {
    name: 'Interpret the range category',
    text: 'Review the category label and expected findings. The result describes the educational meaning of contact, near-contact, close-range, and distant patterns without claiming a case-specific conclusion.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'Can gunshot residue dispersion prove the exact shooting distance?',
    answer: 'No. GSR patterns support a distance range estimate, not an exact distance. Real conclusions require the firearm, ammunition, target material, angle, environmental conditions, chemical testing, and comparison test shots under controlled conditions.',
  },
  {
    key: 'faq-2',
    question: 'Why do close shots show more soot and burning?',
    answer: 'At very short distances, hot gases, soot, unburned powder, and metallic primer particles reach the target before the plume has expanded and cooled. This can create blackening, searing, tearing, muzzle imprinting, and dense central deposition.',
  },
  {
    key: 'faq-3',
    question: 'What elements are commonly associated with primer GSR?',
    answer: 'Traditional primer residue analysis often focuses on particles containing lead, barium, and antimony, although lead-free and modern ammunition can alter the expected elemental profile. SEM-EDS methods evaluate particle morphology and chemistry together.',
  },
  {
    key: 'faq-4',
    question: 'Why does the simulator use a Gaussian radial model?',
    answer: 'A Gaussian-like radial model is a useful teaching approximation because many particles cluster near the center of the plume while fewer reach the outer field. Actual discharge patterns can be asymmetric due to weapon design, ammunition, target angle, fabric weave, and intermediate barriers.',
  },
  {
    key: 'faq-5',
    question: 'Is this calculator suitable for legal reporting?',
    answer: 'No. It is an educational visualization. A forensic report should rely on validated laboratory protocols, quality controls, reference test patterns, documented uncertainty, and review by qualified examiners.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    distance: 'Distance',
    units: 'Unit system',
    metric: 'Metric',
    imperial: 'Imperial',
    unitMeter: 'm',
    unitCentimeter: 'cm',
    unitFoot: 'ft',
    unitInch: 'in',
    ammo: 'Ammunition profile',
    ammoPistol9mm: '9 mm pistol',
    ammoRevolver38: '.38 revolver',
    ammoShotgun12: '12 gauge shotgun',
    target: 'Target cloth',
    cone: 'Residue plume',
    canvasAria: 'Gunshot residue particle dispersion on target cloth',
    rangeStripAria: 'Distance categories',
    category: 'Range interpretation',
    categoryContactLabel: 'Contact / muzzle-to-target',
    categoryNearContactLabel: 'Near-contact / close burn range',
    categoryCloseRangeLabel: 'Close-range stippling field',
    categoryDistantLabel: 'Distant or indeterminate range',
    density: 'Particle density',
    thermal: 'Thermal effect',
    radius: 'Estimated pattern radius',
    radiusSuffix: 'radius',
    expected: 'Expected finding',
    expectedContact: 'Dense central deposit, muzzle imprint risk, soot blackening, tearing, and thermal alteration are expected in the target zone.',
    expectedNearContact: 'Heavy soot and stippling remain concentrated around the entry area, with a visible but still compact radial halo.',
    expectedCloseRange: 'Powder tattooing and metallic residues widen into a measurable ring; soot and burning become progressively less reliable.',
    expectedDistant: 'Particles are sparse and broadly dispersed; distance conclusions require chemical recovery, controls, and test firing under similar conditions.',
    contact: 'Contact',
    near: 'Near-contact',
    close: 'Close range',
    distant: 'Distant',
    disclaimer: 'Educational model only. GSR distance determination requires controlled test firing, target material comparison, validated chemical methods, and expert interpretation.',
  },
  seo: [
    {
      type: 'title',
      text: 'Gunshot Residue Distance Estimation from GSR Patterns',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:target-variant',
      badge: 'Educational model',
      title: 'What this calculator answers',
      html: 'This GSR distance calculator helps explain whether a residue pattern looks more like a contact shot, near-contact shot, close-range discharge, or distant/indeterminate pattern. It is built for learning and search intent around <strong>gunshot residue distance determination</strong>, not for issuing a case-specific forensic opinion.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-3 m', label: 'simulated muzzle-to-target distance', icon: 'mdi:ruler' },
        { value: '4', label: 'range categories explained', icon: 'mdi:crosshairs-question' },
        { value: '3', label: 'ammunition profiles compared', icon: 'mdi:ammunition' },
        { value: '2', label: 'unit systems: metric and imperial', icon: 'mdi:swap-horizontal' },
      ],
    },
    {
      type: 'title',
      text: 'How to Read the Simulated Pattern',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Fast interpretation checklist',
      items: [
        'Dense central soot, burning, tearing, or a muzzle imprint points toward contact or near-contact range.',
        'A compact dark center with surrounding powder grains suggests a short distance, but test shots are needed to narrow it.',
        'Scattered stippling with little soot often fits close-range discharge after heat effects have faded.',
        'Sparse visible residue does not prove no GSR is present; chemical recovery or microscopy may still matter.',
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'What the tool can help with',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'It visualizes the relationship between firing distance, residue density, particle spread, and thermal effects.',
          points: ['Classroom demonstration', 'Search-intent explanation', 'Pattern vocabulary', 'Metric and imperial comparison'],
        },
        {
          title: 'What it cannot prove',
          icon: 'mdi:alert-circle-outline',
          description: 'It cannot identify the true firing distance in a real case without physical evidence and validation.',
          points: ['No evidence upload', 'No chemical confirmation', 'No firearm-specific test pattern', 'No legal conclusion'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Search question', 'Useful pattern clue', 'Careful answer'],
      rows: [
        ['What does a contact gunshot look like?', 'Heavy soot, burning, tearing, searing, or possible muzzle imprint.', 'A contact interpretation may be plausible, but gas expansion and target material can dominate the appearance.'],
        ['How close was the gun?', 'Dense residue near the entry with a compact powder halo.', 'The pattern can support a range hypothesis, but comparison test firing is needed.'],
        ['What is close-range GSR?', 'Powder tattooing or stippling with less soot and weaker heat alteration.', 'Close-range signs vary with ammunition, fabric, angle, and intermediate barriers.'],
        ['Can GSR disappear at distance?', 'Little or no visible residue, with broad particle dispersion.', 'Visible signs may fade, but particles can still be detected by validated methods.'],
      ],
    },
    {
      type: 'title',
      text: 'What the Model Calculates',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The simulator uses a Gaussian-style radial distribution to place particles around the impact center. Short distances produce a narrow, dense deposit; longer distances increase the spread and reduce average density. The model also separates metallic primer-like particles from soot-like deposits because blackening and burning are usually more distance-limited than microscopic residue recovery.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'GSR', definition: 'Gunshot residue: particles and deposits produced by primer, powder, projectile, lubricant, and hot gases during discharge.' },
        { term: 'Soot blackening', definition: 'Dark carbon-rich deposit that is usually most visible at contact and short ranges.' },
        { term: 'Stippling', definition: 'Small punctate marks or powder impacts caused by unburned or partially burned powder particles.' },
        { term: 'Muzzle imprint', definition: 'A mark that can occur when the firearm muzzle contacts or nearly contacts the target surface.' },
        { term: 'Test firing', definition: 'Controlled firing with known distances, firearm, ammunition, and target material to compare against questioned evidence.' },
      ],
    },
    {
      type: 'title',
      text: 'Range Categories and Expected Findings',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Range class', 'Common findings', 'Interpretation limit'],
      rows: [
        ['Contact', 'Dense central deposit, soot blackening, burning, tearing, muzzle imprint, or gas effects.', 'Target construction and gas expansion can strongly alter the wound or material defect.'],
        ['Near-contact', 'Compact soot and powder halo around the entry area.', 'Loose clothing or an intermediate object can change the final residue pattern.'],
        ['Close range', 'Powder tattooing, stippling, or scattered particles with reduced soot.', 'The same distance can look different on cotton, denim, skin, paper, and synthetics.'],
        ['Distant', 'Sparse visible residue, broad dispersion, or no obvious surface pattern.', 'Microscopy and chemical collection become more important as visible signs weaken.'],
      ],
    },
    {
      type: 'tip',
      title: 'Practical interpretation tip',
      html: 'Read GSR distance evidence as a <strong>range comparison problem</strong>, not a single-number calculator. A useful conclusion usually comes from comparing the questioned target with test patterns made under similar firearm, ammunition, target material, distance, and angle conditions.',
    },
    {
      type: 'title',
      text: 'Evidence Checklist Before Interpreting a Real Pattern',
      level: 3,
    },
    {
      type: 'list',
      icon: 'mdi:clipboard-check-outline',
      items: [
        'Document the target material, weave, color, thickness, contamination risk, and whether the surface was folded or stretched.',
        'Record firearm model, barrel length, ammunition brand, primer type, powder load, and any muzzle device or revolver cylinder gap.',
        'Photograph the pattern with scale, orientation, lighting notes, and chain-of-custody context.',
        'Look separately for soot, scorching, unburned powder, wipe rings, tearing, bullet defects, and intermediate-target effects.',
        'Use controlled test firing before assigning a distance interval in evidentiary work.',
      ],
    },
    {
      type: 'proscons',
      title: 'Simulation vs. laboratory distance determination',
      items: [
        { pro: 'Fast way to learn why residue spreads as distance increases.', con: 'Cannot account for the exact firearm, ammunition lot, target fabric, or impact angle.' },
        { pro: 'Shows why contact, near-contact, close-range, and distant categories are useful.', con: 'Does not replace microscopy, chemical analysis, or validated comparison patterns.' },
        { pro: 'Helps users understand the limits before over-reading a visual pattern.', con: 'Real reports require qualified examiners, controls, uncertainty, and documentation.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Do not use this as a legal distance estimate',
      html: 'A browser model cannot know the physical evidence. It cannot inspect clothing, skin, weapon design, ammunition chemistry, environmental conditions, intermediate barriers, or collection quality. Use this page to understand the science and vocabulary, then rely on validated laboratory procedures for real cases.',
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
