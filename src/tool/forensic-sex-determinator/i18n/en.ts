import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-anthropology-sex-determination-cranial-pelvic-morphology-bayesian';
const title = 'Forensic Anthropology Sex Determinator';
const description = 'Estimate biological sex from cranial and pelvic morphology indicators using a Bayesian probability model.';

const howTo = [
  {
    name: 'Select anatomical region to analyze',
    text: 'Decide whether to analyze the pelvis, the cranium, or both. Evaluating both areas increases the accuracy and confidence of the final biological sex classification.',
  },
  {
    name: 'Assess each morphological trait',
    text: 'Examine the bone specimens and score the key indicators on a scale of 1 (Hyperfeminine) to 5 (Hypermasculine) based on visual landmarks.',
  },
  {
    name: 'Add scores to the Bayesian engine',
    text: 'Use the dropdown selectors to input the score for each trait. The classifier automatically updates the posterior probability for male and female categories.',
  },
  {
    name: 'Interpret the probability results',
    text: 'Review the final confidence indicator, the predominant sex classification, and read the forensic diagnostic notes to understand the biological variations.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'What is the Phenice method in pelvic sex determination?',
    answer: 'The Phenice method, published by T. W. Phenice in 1969, focuses on three specific pelvic characteristics: the ventral arc, subpubic concavity, and the medial aspect of the ischiopubic ramus. It remains one of the most reliable morphological methods in forensic anthropology, yielding accuracy rates exceeding 95 percent when applied to well-preserved skeletal remains.',
  },
  {
    key: 'faq-2',
    question: 'Why is the pelvis preferred over the cranium for sex estimation?',
    answer: 'The pelvis is the most sexually dimorphic part of the human skeleton because it reflects functional adaptation for childbearing in females. Evolutionary pressure has shaped the female pelvis to be wider, shallower, and to have wider angles than the male pelvis, whereas cranial dimorphism is primarily related to overall body size and muscle development, making the skull less reliable.',
  },
  {
    key: 'faq-3',
    question: 'How does the Bayesian classifier estimate sex probability?',
    answer: 'Our classifier uses a Bayesian updating model. It assumes a prior probability of 50 percent for both sexes. For each anatomical marker scored, the model multiplies the prior by the likelihood of obtaining that specific score in male versus female populations. The resulting scores are normalized to generate a posterior probability distribution.',
  },
  {
    key: 'faq-4',
    question: 'What does a score of 3 represent in morphological analysis?',
    answer: 'A score of 3 represents an indeterminate or neutral morphology. This indicates that the trait exhibits characteristics that lie in the middle of the spectrum of human sexual dimorphism, showing neither characteristically female (1-2) nor characteristically male (4-5) traits.',
  },
  {
    key: 'faq-5',
    question: 'Can this model sex subadult or child skeletal remains?',
    answer: 'No. Morphological sex determination is highly unreliable for subadult remains because the morphological characteristics that differentiate male and female skeletons do not fully develop until puberty. Forensic anthropologists generally rely on genetic testing or dental indicators for subadults, rather than osteological landmarks.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    pelvisRegion: 'Pelvic Morphology',
    craniumRegion: 'Cranial Morphology',
    subpubicAngle: 'Subpubic Angle',
    subpubicAngleDesc: 'The angle formed below the pubic symphysis.',
    subpubicAngleFem: 'Wide U-shape (>90°)',
    subpubicAngleMasc: 'Narrow V-shape (<70°)',
    sciaticNotch: 'Sciatic Notch',
    sciaticNotchDesc: 'The greater sciatic notch in the posterior ilium.',
    sciaticNotchFem: 'Wide, shallow U-notch',
    sciaticNotchMasc: 'Narrow, deep notch',
    ventralArc: 'Ventral Arc',
    ventralArcDesc: 'Ridge of bone sweeping across the anterior pubis.',
    ventralArcFem: 'Prominent elevated ridge',
    ventralArcMasc: 'Absent or faint line',
    preauricularSulcus: 'Preauricular Sulcus',
    preauricularSulcusDesc: 'Groove adjacent to the sacroiliac joint.',
    preauricularSulcusFem: 'Deep, pitted groove',
    preauricularSulcusMasc: 'Absent or smooth',
    mastoidProcess: 'Mastoid Process',
    mastoidProcessDesc: 'Bony projection behind the ear canal.',
    mastoidProcessFem: 'Small, short projection',
    mastoidProcessMasc: 'Large, long projection',
    supraorbitalRidge: 'Supraorbital Ridge',
    supraorbitalRidgeDesc: 'Protrusion of the brow ridge (glabella).',
    supraorbitalRidgeFem: 'Smooth, flat brow',
    supraorbitalRidgeMasc: 'Prominent, bulging ridge',
    mentalEminence: 'Mental Eminence (Chin)',
    mentalEminenceDesc: 'The shape and prominence of the chin.',
    mentalEminenceFem: 'Rounded, pointed chin',
    mentalEminenceMasc: 'Broad, square chin',
    nuchalCrest: 'Nuchal Crest',
    nuchalCrestDesc: 'Bony ridges at the back of the skull.',
    nuchalCrestFem: 'Smooth occipital plane',
    nuchalCrestMasc: 'Rugged, hooked spur',
    selectOption: 'Choose score...',
    score1: '1 - Hyperfeminine',
    score2: '2 - Feminine',
    score3: '3 - Indeterminate',
    score4: '4 - Masculine',
    score5: '5 - Hypermasculine',
    notEvaluated: 'Not evaluated',
    resultsTitle: 'Sex Determination Results',
    femaleProbLabel: 'Female Probability',
    maleProbLabel: 'Male Probability',
    predominantLabel: 'Predominant Classification',
    confidenceLabel: 'Estimation Confidence',
    weakConf: 'Weak (Few indicators scored)',
    moderateConf: 'Moderate',
    strongConf: 'Strong',
    femaleClass: 'Female',
    maleClass: 'Male',
    indeterminateClass: 'Indeterminate',
    noteNoData: 'Please score at least one anatomical marker to begin calculations.',
    noteTriageOnly: 'This is an educational screening aid. Formal forensic assessment requires metric analysis and multi-expert review.',
    noteBayesianEst: 'Probabilities are calculated dynamically using a non-parametric Bayesian likelihood matrix.',
    pelvicTitle: 'Pelvis Reference Guide',
    cranialTitle: 'Cranium Reference Guide',
    pelvisDesc: 'The female pelvis is adapted for childbearing, resulting in wider structures and shallower angles. The male pelvis is more robust, narrow, and vertically oriented.',
    cranialDesc: 'The male skull is generally larger and more robust, with larger mastoid processes, prominent brow ridges, and rugged muscle attachments. The female skull is more gracile, with smoother ridges and a rounded chin.',
  },
  seo: [
    {
      type: 'title',
      text: 'Introduction to Osteological Sex Determination in Forensic Anthropology',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Estimating biological sex is one of the primary steps in establishing a biological profile for unknown skeletal remains in forensic toxicology, anthropology, and archaeology. Together with stature, age at death, and ancestral affinity, sex estimation helps narrow down the pool of potential missing persons. Human skeletons display sexual dimorphism, which is the physical difference between males and females of a species. This dimorphism is reflected in both size (robusticity versus gracility) and shape (specifically pelvic adaptations related to childbirth).',
    },
    {
      type: 'paragraph',
      html: 'This interactive tool allows forensic students, medical examiners, and trainees to evaluate morphological landmarks of the pelvis and the skull. By entering scores based on visual guides, users can observe how individual bone markers contribute to a cumulative statistical model.',
    },
    {
      type: 'title',
      text: 'Pelvic Dimorphism and the Phenice Method',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The pelvis is universally recognized as the most accurate region of the skeleton for biological sex determination. Female pelvises are wider, have a larger birth canal, a wider sciatic notch, and a subpubic angle exceeding ninety degrees. Conversely, male pelvises are characterized by narrow, V-shaped subpubic angles and a narrow sciatic notch. The Phenice method focuses on three specific features of the pubic bone: the ventral arc, the subpubic concavity, and the medial aspect of the ischiopubic ramus. The presence of a well-defined ventral arc is an exceptionally strong indicator of female sex, whereas its absence is typical in males.',
    },
    {
      type: 'title',
      text: 'Cranial Dimorphism and Robusticity Markers',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When pelvic bones are missing or poorly preserved, the cranium serves as the primary alternative for sex estimation. Cranial evaluation is based on robusticity, as male skulls generally exhibit more pronounced muscle attachment sites and larger bony processes due to hormone-driven developmental differences. The mastoid process, located behind the ear, is larger and wider in males. The supraorbital ridge or glabella is prominent and projecting in males, whereas it remains smooth and vertical in females. The chin (mental eminence) tends to be square and broad in males, while females present a more rounded, pointed chin structure.',
    },
    {
      type: 'table',
      headers: ['Anatomical Landmark', 'Feminine Characteristics (Scores 1-2)', 'Masculine Characteristics (Scores 4-5)', 'Forensic Value'],
      rows: [
        ['Subpubic Angle', 'Wide, obtuse angle (often exceeding 90 degrees).', 'Narrow, acute angle (typically less than 70 degrees).', 'Highest individual diagnostic value for pelvic sexing.'],
        ['Sciatic Notch', 'Wide, shallow notch resembling a U-shape.', 'Narrow, deep notch resembling a thumb-like shape.', 'Extremely durable marker, often preserved in fragmented remains.'],
        ['Mastoid Process', 'Small, short, and projecting minimally below the auditory meatus.', 'Large, long, and projecting significantly downward.', 'Reliable cranial marker, resistant to weathering.'],
        ['Supraorbital Ridge', 'Smooth, flat glabella with a vertical forehead profile.', 'Prominent, projecting ridge with a sloped forehead.', 'Differentiates robust male skulls from gracile female skulls.'],
      ],
    },
    {
      type: 'title',
      text: 'Bayesian Mathematical Modeling in Morphological Classifications',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditional forensic assessments relied on subjective classification, which could lead to observer bias. Modern forensic anthropology incorporates statistical probability models to quantify uncertainty. Bayesian statistics are ideal for this purpose, starting with an equal prior probability (fifty percent male, fifty percent female) and updating it as new evidence is introduced. When pelvic traits show highly feminine morphology (wide subpubic angle, score 1), the likelihood of female classification rises, overriding intermediate or conflicting markers in the skull.',
    },
    {
      type: 'paragraph',
      html: 'This digital simulator implements a non-parametric Bayesian engine. The calculations provide a probability percentage rather than a binary output, which aligns with modern forensic guidelines that emphasize reporting confidence intervals and error rates in court testimony. The classification confidence depends on the number of landmarks evaluated, with scores from both pelvic and cranial regions providing the most robust outputs.',
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
