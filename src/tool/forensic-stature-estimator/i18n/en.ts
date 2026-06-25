import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-stature-estimation-skeletal-remains-trotter-gleser-calculator';
const title = 'Forensic Stature Estimator';
const description = 'Estimate living height from human long bones using Trotter and Gleser regression equations, incorporating biological sex, ancestry, and age correction.';

const howTo = [
  {
    name: 'Select bone and variables',
    text: 'Choose the specific long bone to measure (Femur, Tibia, Humerus, Fibula, Radius, or Ulna) along with the biological sex, ancestry group, and age of the individual.'
  },
  {
    name: 'Determine bone length',
    text: 'Adjust the sliding caliper on the virtual osteometric board to represent the maximum length of the selected bone specimen in centimeters.'
  },
  {
    name: 'Calculate estimated stature',
    text: 'The calculator applies the corresponding Trotter-Gleser regression equations, subtracting 0.06 cm per year for individuals over the age of 30.'
  },
  {
    name: 'Interpret intervals and errors',
    text: 'Review the estimated stature, the Standard Error of the Estimate (SEE), and the 95% prediction interval to account for population variability.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'How do Trotter and Gleser regression equations work?',
    answer: 'The equations use linear regression to model the correlation between living height and the maximum length of long bones. By inputting bone length in centimeters, the calculator applies population-specific slopes and intercepts derived from historical military casualties and skeletal collections.'
  },
  {
    key: 'faq-2',
    question: 'Why does the tool require biological sex and ancestry?',
    answer: 'Human body proportions vary between sexes and geographical populations. Males generally have different limb-to-stature ratios than females, and populations of different ancestral origins exhibit distinct developmental ratios, necessitating separate regression models.'
  },
  {
    key: 'faq-3',
    question: 'Why is there an age correction factor in stature estimation?',
    answer: 'Living height decreases gradually after early adulthood due to the compression of intervertebral discs and postural changes. Trotter and Gleser recommended subtracting 0.06 centimeters for every year of age past 30 to adjust the skeletal estimate to the living stature at death.'
  },
  {
    key: 'faq-4',
    question: 'What is the Standard Error of the Estimate (SEE)?',
    answer: 'The SEE represents the standard deviation of the residuals in the regression model. It provides a measure of accuracy for the predicted stature, showing the typical deviation of actual living heights from the regression line for that specific bone.'
  },
  {
    key: 'faq-5',
    question: 'Which long bones provide the most accurate stature estimates?',
    answer: 'Lower limb bones, specifically the femur and tibia, provide the most accurate stature estimations because they directly contribute to a person\'s height. Upper limb bones like the humerus and radius have higher standard errors but are valuable when lower limb remains are incomplete.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Forensic Stature Estimator',
    desc: 'Simulate osteometric board measurements and calculate living stature using linear regression.',
    configTitle: 'Osteometric Configuration',
    boneLabel: 'Bone Specimen',
    lengthLabel: 'Bone Length',
    unitLabel: 'System Unit',
    metricOption: 'Metric (cm)',
    imperialOption: 'Imperial (inches)',
    sexLabel: 'Biological Sex',
    ancestryLabel: 'Ancestry Group',
    ageLabel: 'Age at Death (years)',
    maleOption: 'Male',
    femaleOption: 'Female',
    whiteOption: 'White / Caucasian',
    blackOption: 'Black / African American',
    asianOption: 'Asian / Mongoloid',
    femurName: 'Femur (Thigh bone)',
    tibiaName: 'Tibia (Shin bone)',
    humerusName: 'Humerus (Upper arm bone)',
    fibulaName: 'Fibula (Calf bone)',
    radiusName: 'Radius (Forearm bone)',
    ulnaName: 'Ulna (Forearm bone)',
    resultsTitle: 'Stature Estimation Results',
    estimateLabel: 'Estimated Stature',
    errorLabel: 'Standard Error (SEE)',
    rangeLabel: '95% Prediction Interval',
    formulaLabel: 'Regression Equation',
    formulaBoneFactor: 'Bone Factor',
    formulaConstant: 'Constant',
    formulaAgeCorrection: 'Age Correction',
    formulaStdError: 'Std Error (SEE)',
    fallbackAlert: 'No direct Trotter-Gleser equation exists for Asian/Mongoloid females; using White female reference equations as a forensic fallback.',
    boardInstructions: 'Drag the caliper handle or use the inputs to measure the bone.',
    rulerLabelMetric: 'Metric Scale (mm)',
    rulerLabelImperial: 'Imperial Scale (in)',
    unitsCm: 'cm',
    unitsInches: 'in',
    unitsFtIn: 'ft/in'
  },
  seo: [
    {
      type: 'title',
      text: 'Comprehensive Guide to Stature Estimation in Forensic Anthropology',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Stature estimation represents a fundamental component of biological profiling in physical anthropology, bioarchaeology, and forensic science. When skeletal remains are recovered, reconstructing the living height of the individual assists investigators in cross-referencing records of missing persons. Stature is estimated by measuring the maximum length of long bones, which correlate closely with overall body height due to genetically and environmentally driven skeletal proportions.'
    },
    {
      type: 'paragraph',
      html: 'This digital osteometric board simulator allows students and practitioners to explore the linear regression models developed by Mildred Trotter and Goldine C. Gleser. By configuring variables such as bone type, biological sex, ancestral affinity, and age at death, users can analyze how body proportions influence the mathematical constants and standard errors of height predictions.'
    },
    {
      type: 'title',
      text: 'Understanding the Trotter-Gleser Regression Formulas',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Mildred Trotter and Goldine C. Gleser published their foundational stature estimation equations in 1952 and 1958. Their statistical samples consisted of military casualties from World War II and the Korean War, supplemented by specimens from the Terry Collection. The resulting mathematical equations take the linear form: <strong>Stature = (Slope × Bone Length) + Constant ± Standard Error</strong>. Because bone-to-stature ratios vary significantly across human groups, separate equations are utilized based on biological sex and ancestry.'
    },
    {
      type: 'table',
      headers: ['Long Bone Specimen', 'White Male Regression Model', 'White Female Regression Model', 'Forensic Utility & Reliability'],
      rows: [
        ['Femur (Thigh Bone)', 'Stature = 2.32 × Femur + 65.53 ± 3.94 cm', 'Stature = 2.47 × Femur + 54.10 ± 3.72 cm', 'Highest overall reliability. The femur is the primary weight-bearing lower limb bone, correlating directly with body height.'],
        ['Tibia (Shin Bone)', 'Stature = 2.42 × Tibia + 81.93 ± 4.00 cm', 'Stature = 2.90 × Tibia + 61.53 ± 3.66 cm', 'High reliability. Caution must be exercised to match Trotter\'s original protocol, which excluded the medial malleolus.'],
        ['Fibula (Calf Bone)', 'Stature = 2.60 × Fibula + 75.50 ± 3.86 cm', 'Stature = 2.93 × Fibula + 59.61 ± 3.57 cm', 'Highly reliable, but the fibula is slender and frequently fragmented or absent in archaeological contexts.'],
        ['Humerus (Upper Arm)', 'Stature = 2.89 × Humerus + 78.10 ± 4.57 cm', 'Stature = 3.36 × Humerus + 57.97 ± 4.45 cm', 'Moderate reliability. Upper limb bones do not bear weight and have higher standard errors of estimate.'],
        ['Radius (Forearm)', 'Stature = 3.79 × Radius + 79.42 ± 4.66 cm', 'Stature = 4.74 × Radius + 54.93 ± 4.45 cm', 'Lower reliability. The forearm elements display significant developmental variation relative to living height.']
      ]
    },
    {
      type: 'title',
      text: 'Age-Related Height Reduction and Post-Mortem Corrections',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Living stature is not static throughout adulthood. Beginning around the age of 30, the human body undergoes a gradual decrease in height due to the compression of intervertebral discs, postural changes, and degenerative joint conditions. To reconcile skeletal measurements with living height, Trotter and Gleser recommended subtracting 0.06 cm for every year of age past 30: <strong>Height Loss = 0.06 × (Age - 30)</strong>. This age correction factor is integrated into the simulator to replicate real-world forensic diagnostics.'
    },
    {
      type: 'title',
      text: 'Methodological Discrepancies and Tibia Measurement Protocols',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'A well-known methodological issue in forensic anthropology concerns Trotter\'s tibia measurements. In her 1952 study, the tibia was measured excluding the medial malleolus, whereas in the 1958 follow-up, the measurement protocol was altered. Applying the 1952 equations to a tibia measured with the malleolus results in systematic overestimation of stature. Forensic examiners must ensure that the bone length inputted corresponds exactly to the osteometric landmarks defined in the reference study to avoid introducing bias.'
    },
    {
      type: 'title',
      text: 'Secular Trends and the Applicability of Historical Reference Data',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Because Trotter and Gleser\'s reference samples were born in the late 19th and early 20th centuries, their equations reflect the environmental and nutritional conditions of that cohort. Over the past century, global populations have experienced positive secular trends, resulting in taller average statures and altered body proportions. Consequently, while Trotter-Gleser remains a standard educational benchmark, contemporary casework frequently utilizes modern reference systems, such as the Forensic Data Bank (FORDISC), to account for secular shifts in body proportions.'
    }
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
      operatingSystem: 'Any'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      step: howTo.map((step) => ({
        '@type': 'HowToStep',
        name: step.name,
        text: step.text
      }))
    }
  ]
};
