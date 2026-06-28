import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const slug = 'forensic-toolmark-striation-matcher';
const title = 'Forensic Toolmark Striation Matcher';
const description = 'Upload questioned and known toolmark images, align them in a split comparison microscope, and inspect striation continuity with visual controls.';

const howTo = [
  {
    name: 'Load the comparison images',
    text: 'Upload a known test mark image and a questioned mark image from your own case material, notes, or training set.',
  },
  {
    name: 'Move the comparison split',
    text: 'Drag across the optical viewer to expose more of the known or questioned mark while keeping both samples in one field.',
  },
  {
    name: 'Adjust offset, rotation, zoom, and contrast',
    text: 'Use the micrometer controls to translate and rotate the questioned mark, then tune zoom, contrast, and brightness so faint striations remain visible.',
  },
  {
    name: 'Export the comparison view',
    text: 'When the visual alignment is ready, export a PNG view for discussion, classroom review, or case-note illustration.',
  },
];

const faq = [
  {
    question: 'What is a forensic toolmark comparison?',
    answer: 'Forensic toolmark comparison examines marks produced when a tool contacts, cuts, scrapes, pries, or compresses another surface. Examiners compare class characteristics, mark quality, and microscopic striation detail between questioned marks and known test marks.',
  },
  {
    question: 'Can this online tool identify the exact tool that made a mark?',
    answer: 'No. This workspace is for visual alignment and education. It does not calculate source attribution, probability, error rate, or an automated forensic conclusion.',
  },
  {
    question: 'Why are offset, rotation, and zoom important in toolmark comparison?',
    answer: 'Small differences in tool angle, pressure, scale, camera position, and lateral placement can make similar striation runs appear misaligned. Offset, rotation, and zoom controls help place two images into a comparable viewing position.',
  },
  {
    question: 'What images work best for visual toolmark alignment?',
    answer: 'Use sharp, well-lit images taken as square-on as possible, with enough overlap in the mark region. Avoid heavy blur, extreme glare, perspective distortion, and images where the striation area is too short or damaged to compare.',
  },
  {
    question: 'What should a user document after aligning two toolmark images?',
    answer: 'Document the source of each image, whether it is questioned or known, the alignment settings used, any image adjustments applied, visible areas of agreement or disagreement, and the limitations of the image quality.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    viewerAria: 'Split comparison microscope view of known and questioned toolmark striations',
    splitLabel: 'Move comparison split',
    units: 'Offset unit system',
    metric: 'Metric',
    imperial: 'Imperial',
    toolProfile: 'Tool profile',
    loadImages: '1. Load',
    alignImage: '2. Align questioned image',
    adjustImage: '3. Tune visibility',
    outputControls: 'Output controls',
    demoOptions: 'Demo options',
    uploadKnown: 'Known/test image',
    uploadQuestioned: 'Questioned image',
    noFile: 'No image loaded',
    emptyValue: '-',
    zeroPercent: '0%',
    screwdriver: 'Screwdriver tip',
    prybar: 'Pry bar edge',
    boltCutter: 'Bolt cutter jaw',
    offset: 'Horizontal offset',
    rotation: 'Angular rotation',
    zoom: 'Image zoom',
    contrast: 'Contrast',
    brightness: 'Brightness',
    microns: 'microns',
    thousandths: 'thou',
    degrees: 'deg',
    correlation: 'Mode / score',
    verdictStrong: 'strong alignment',
    verdictPartial: 'partial alignment',
    verdictWeak: 'weak alignment',
    center: 'Center',
    fineTip: 'fine drag lines',
    wideEdge: 'wide compression',
    crushJaw: 'paired crush ridges',
    grid: 'Grid',
    exportImage: 'Export view',
    exportFilename: 'toolmark-comparison-view.png',
    phaseFit: 'Phase fit',
    rotationFit: 'Rotation fit',
    knownMark: 'Known test mark',
    questionedMark: 'Questioned mark',
    reliefGraph: 'Digitized micro-surface relief',
    visualMode: 'Visual',
    visualVerdict: 'manual comparison',
    visualInterpretation: 'Visual alignment only. No automated forensic conclusion is calculated.',
    interpMatch: 'Demo preview. Upload images to compare real marks.',
    interpPossible: 'Demo preview. Adjust alignment or upload images.',
    interpMismatch: 'Demo preview. Recenter or upload images.',
    disclaimer: 'Visual workspace only.',
  },
  seo: [
    {
      type: 'title',
      text: 'Online Forensic Toolmark Comparison Microscope',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      icon: 'mdi:tools',
      badge: 'Visual workspace',
      title: 'Compare questioned and known toolmark images in your browser',
      html: 'This toolmark comparison workspace lets you upload two images, place them into a split-view comparison microscope, and adjust the questioned mark until ridge flow, scrape lines, pressure marks, or microscopic striations can be inspected side by side. It is designed for forensic science students, instructors, investigators, and legal teams who need a clear way to explain <strong>known versus questioned toolmark comparison</strong> without installing specialist microscopy software.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2 uploads', label: 'known and questioned images', icon: 'mdi:image-plus' },
        { value: 'split view', label: 'comparison microscope layout', icon: 'mdi:compare-horizontal' },
        { value: 'alignment', label: 'offset, rotation, and zoom controls', icon: 'mdi:axis-arrow' },
        { value: 'PNG export', label: 'save the comparison view', icon: 'mdi:download' },
      ],
    },
    {
      type: 'summary',
      title: 'When this toolmark comparison workspace is useful',
      items: [
        'Teaching how comparison microscopes place a known test mark beside a questioned mark.',
        'Preparing classroom demonstrations with real or training toolmark images.',
        'Explaining why alignment, scale, rotation, lighting, and contrast affect striation interpretation.',
        'Creating a clean visual exhibit or case-note image that shows the aligned view without claiming automated identification.',
        'Screening image quality before deciding whether a mark is suitable for formal laboratory comparison.',
      ],
    },
    {
      type: 'title',
      text: 'How to Compare Toolmark Images Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Start by loading a <strong>known test mark</strong> image and a <strong>questioned mark</strong> image. A known mark is usually produced under controlled conditions with a specific tool. A questioned mark is the mark recovered from a scene, object, door frame, lock, cut surface, cartridge component, or other item whose source is unknown. The goal of the workspace is not to decide identity automatically; the goal is to place the two images into a useful visual relationship so the user can inspect continuity and disagreement.',
    },
    {
      type: 'paragraph',
      html: 'After both images are loaded, use the split viewer to expose more or less of either side. Adjust horizontal offset to bring striation runs into phase, then rotate the questioned image to compensate for camera angle or tool angle. Zoom helps when the two images were captured at different magnifications. Contrast and brightness help reveal faint scratches, compressed ridges, or shallow marks, but these adjustments should be documented because they change the displayed appearance of the image.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'What the workspace can help you see',
          icon: 'mdi:check-circle-outline',
          highlight: true,
          description: 'A good split-view setup makes it easier to inspect whether two marks share comparable visual structure after careful alignment.',
          points: ['Similar ridge or striation direction', 'Continuity across several neighboring features', 'Scale and rotation differences that need correction', 'Areas where mark quality is strong enough to inspect', 'Obvious class-feature mismatches that may end the comparison early'],
        },
        {
          title: 'What it cannot prove',
          icon: 'mdi:alert-circle-outline',
          description: 'This browser tool is not a validated forensic identification system and should not be used as one.',
          points: ['No automated same-source conclusion', 'No random match probability', 'No population frequency estimate', 'No substitute for original evidence review', 'No replacement for laboratory quality assurance or peer review'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Control', 'What it changes', 'Why it matters'],
      rows: [
        ['Known/test image upload', 'Loads the control or reference mark.', 'The known side should come from a documented test mark or training example.'],
        ['Questioned image upload', 'Loads the mark whose source is unknown.', 'This side is moved and adjusted to search for a comparable orientation.'],
        ['Split handle', 'Changes how much of each image is visible.', 'A movable split helps inspect whether lines continue visually across the boundary.'],
        ['Horizontal offset', 'Moves the questioned image left or right.', 'Small lateral shifts can bring corresponding ridges into or out of phase.'],
        ['Rotation', 'Turns the questioned image.', 'Tool angle, camera angle, and mounting can create angular drift between images.'],
        ['Zoom', 'Changes displayed magnification.', 'Different image scales must be made comparable before judging detail.'],
        ['Contrast and brightness', 'Adjust displayed visibility.', 'Low-contrast striations may become easier to see, but adjustments should be noted.'],
        ['Export view', 'Saves a PNG of the current alignment.', 'Useful for classroom review, notes, discussion, or reports that clearly state limitations.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:image-search',
      badge: 'Image quality',
      title: 'A poor image can make a good comparison impossible',
      html: 'Toolmark comparison depends heavily on image quality. Blur, glare, compression artifacts, strong shadows, perspective distortion, shallow marks, and very short striation runs can all create misleading visual impressions. If a mark cannot be oriented, scaled, and illuminated clearly, the appropriate conclusion may be that the image is unsuitable for meaningful comparison.',
    },
    {
      type: 'summary',
      title: 'Practical checklist before comparing two marks',
      items: [
        'Confirm which image is the questioned mark and which image is the known or test mark.',
        'Check that both images show the same general mark type, tool contact area, and working-surface orientation.',
        'Avoid comparing isolated single lines; look for runs of neighboring detail that persist across a useful length.',
        'Use contrast and brightness conservatively and record when image enhancement was applied.',
        'Export the aligned view only as an illustration of what was displayed, not as proof of identity.',
      ],
    },
    {
      type: 'title',
      text: 'Known Versus Questioned Toolmark Evidence',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A questioned toolmark is usually recovered from an item involved in an incident, such as a pry mark on a door, a cut mark on wire, a scrape on metal, or a compression mark on a softer surface. A known mark is produced from a suspected tool under controlled or documented conditions. In formal forensic work, examiners consider whether class characteristics are consistent before spending time on fine striation detail. If class characteristics do not agree, microscopic similarity in a small region is not enough to support an association.',
    },
    {
      type: 'paragraph',
      html: 'The browser workspace is intentionally conservative. It helps you align images and discuss visual features, but it does not model tool wear, subclass characteristics, substrate deformation, manufacturing marks, examiner thresholds, measurement uncertainty, or error rates. A responsible workflow treats the exported image as a communication aid, not as an identification result.',
    },
    {
      type: 'proscons',
      title: 'Strengths and limitations of online toolmark image comparison',
      items: [
        { pro: 'Fast way to load two images and inspect alignment without installing desktop software.', con: 'The browser view is not a calibrated forensic comparison microscope.' },
        { pro: 'Useful for teaching how split-view comparison and orientation affect what a user sees.', con: 'Image enhancement can improve visibility but may also change how features appear.' },
        { pro: 'Exported PNG views are helpful for notes, discussion, and visual explanation.', con: 'An exported view does not preserve the full evidentiary context, metadata, or chain of custody.' },
        { pro: 'Works with real user-uploaded images instead of only synthetic marks.', con: 'The tool cannot determine whether two marks came from the same tool.' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Questioned mark', definition: 'A mark recovered from an item or scene whose source is unknown.' },
        { term: 'Known test mark', definition: 'A controlled mark made with a specific tool for comparison against the questioned mark.' },
        { term: 'Striation', definition: 'A microscopic line or ridge created as a tool surface slides across another material.' },
        { term: 'Class characteristics', definition: 'Features shared by a group of tools, such as blade width, general shape, or tool type.' },
        { term: 'Individual characteristics', definition: 'Fine surface features that may arise from manufacture, use, damage, or wear.' },
        { term: 'Subclass characteristics', definition: 'Features shared by a subset of tools because of manufacturing processes; they can complicate source interpretation.' },
        { term: 'Suitability', definition: 'A judgment about whether a mark contains enough quality and quantity of detail to support comparison.' },
      ],
    },
    {
      type: 'tip',
      title: 'Good search terms this page is designed to answer',
      html: 'Users looking for this type of workspace often search for phrases such as <strong>toolmark comparison microscope online</strong>, <strong>forensic striation comparison</strong>, <strong>known versus questioned toolmark</strong>, <strong>compare tool marks from images</strong>, <strong>toolmark alignment tool</strong>, and <strong>forensic comparison microscope simulator</strong>. The page is built around those real tasks: upload, align, inspect, document, and understand limitations.',
    },
    {
      type: 'table',
      headers: ['Common user question', 'Short answer'],
      rows: [
        ['Can I upload my own toolmark images?', 'Yes. The tool is designed around user-uploaded known and questioned images.'],
        ['Does the app decide if both marks match?', 'No. It supports visual alignment only and does not make a forensic source conclusion.'],
        ['Why does the questioned image move instead of both images?', 'Keeping the known side stable makes it easier to document how the questioned image was adjusted.'],
        ['Can I use it for firearm or cartridge marks?', 'It may help demonstrate image alignment concepts, but firearm and cartridge comparison requires discipline-specific procedures and validated review.'],
        ['Can I include the exported PNG in notes?', 'Yes, if it is clearly described as an illustrative view produced with visual adjustment controls.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      icon: 'mdi:scale-balance',
      badge: 'Forensic caution',
      title: 'Use careful language when describing toolmark comparisons',
      html: 'Avoid turning a visual alignment into a stronger conclusion than the evidence supports. Appropriate language depends on jurisdiction, laboratory policy, validation, image quality, examiner review, and case context. This online tool should be described as a visual comparison aid, not as a validated method for individualizing a tool.',
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
