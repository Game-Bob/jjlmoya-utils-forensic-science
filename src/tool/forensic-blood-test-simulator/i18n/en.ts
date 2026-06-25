import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'forensic-presumptive-blood-testing-luminol-kastle-meyer-simulator';
const title = 'Forensic Presumptive Blood Test Simulator';
const description = 'Simulate presumptive blood testing using Kastle-Meyer and Luminol reagents. Distinguish real blood from common false positives like rust, bleach, and plant peroxidasas.';

const howTo = [
  {
    name: 'Select a sample specimen',
    text: 'Choose a test sample from the tray, representing either blood or suspected false-positive materials.'
  },
  {
    name: 'Choose a presumptive test method',
    text: 'Decide whether to perform the Kastle-Meyer color change test or the Luminol luminescence test.'
  },
  {
    name: 'Apply the reagents',
    text: 'Add drops of Kastle-Meyer reagent followed by Hydrogen Peroxide, or apply the Luminol solution directly.'
  },
  {
    name: 'Interpret the reaction and results',
    text: 'Observe color changes or blue glow in the dark, checking the reaction characteristics to classify it as true positive, false positive, or negative.'
  }
];

const faq = [
  {
    key: 'faq-1',
    question: 'Why is it called a presumptive test?',
    answer: 'Presumptive tests are preliminary tests that indicate the possible presence of blood based on its catalytic activity. They are highly sensitive but not completely specific, meaning they can yield false positives and must be followed by confirmatory testing.'
  },
  {
    key: 'faq-2',
    question: 'What causes a false positive in the Kastle-Meyer test?',
    answer: 'The Kastle-Meyer test relies on the peroxidase-like activity of heme. Any substance that contains chemical oxidizers, metal ions (like iron in rust), or plant peroxidases (like in potatoes or horseradish) can catalyze the reaction and produce a pink color change, resulting in a false positive.'
  },
  {
    key: 'faq-3',
    question: 'How does the chemical reaction of Luminol occur?',
    answer: 'Luminol reacts with hydrogen peroxide in the presence of a catalyst (such as the iron in hemoglobin). This reaction oxidizes luminol to an excited state, which releases energy in the form of blue light as it returns to its ground state.'
  },
  {
    key: 'faq-4',
    question: 'Can household bleach cause a false positive?',
    answer: 'Yes. Household bleach (sodium hypochlorite) is a strong chemical oxidizer. It directly oxidizes the phenolphthalin in the Kastle-Meyer test or the luminol solution without requiring any catalyst, producing immediate reactions that fade quickly.'
  },
  {
    key: 'faq-5',
    question: 'What is the difference between presumptive and confirmatory tests?',
    answer: 'Presumptive tests are fast, cheap, and highly sensitive, used to locate stains at crime scenes. Confirmatory tests (like crystal tests or immunological assays) are highly specific, proving the presence of human blood with absolute certainty.'
  }
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    title: 'Presumptive Blood Test Simulator',
    desc: 'Perform virtual laboratory experiments with Luminol and Kastle-Meyer reagents to detect blood and analyze false positives.',
    configTitle: 'Laboratory Controls',
    sampleLabel: 'Select Sample Specimen',
    reagentLabel: 'Select Reagent',
    lightsLabel: 'Workbench Lighting',
    btnLightsOff: 'Turn Off Lights',
    btnLightsOn: 'Turn On Lights',
    btnReset: 'Reset Dish',
    resultsTitle: 'Presumptive Test Results',
    sampleBlood: 'Blood Sample (Control)',
    sampleRust: 'Rust (Iron Oxide)',
    sampleBleach: 'Bleach (Sodium Hypochlorite)',
    samplePotato: 'Potato (Plant Peroxidase)',
    sampleSaliva: 'Saliva Sample',
    reagentKM: 'Kastle-Meyer Reagent',
    reagentH2O2: 'Hydrogen Peroxide (H2O2)',
    reagentLuminol: 'Luminol Solution',
    resultTruePositive: 'True Positive (Blood Detected)',
    resultFalsePositive: 'False Positive (Non-Blood Catalyst)',
    resultNegative: 'Negative Reaction',
    statusLabel: 'Reaction Status',
    reactionLabel: 'Reaction Explanation',
    dropReagentBtn: 'Apply Drop',
    activeCompounds: 'Active Compounds',
    reactionSpeed: 'Reaction Speed',
    reactionDuration: 'Reaction Duration',
    specimenBase: 'Specimen Base',
    kmPending: 'Kastle-Meyer reagent applied. Add Hydrogen Peroxide (H2O2) to catalyze the color change.',
    h2o2Only: 'Hydrogen Peroxide applied. No visible reaction without Kastle-Meyer indicator.',
    noReaction: 'No reaction observed. The sample remains clear.',
    luminolBlood: 'Intense blue glow observed immediately under dark conditions. Heme groups in hemoglobin catalytically oxidized the luminol. True Positive.',
    luminolBleach: 'Immediate, very intense blue glow observed, which faded extremely quickly (under 2 seconds). Bleach oxidizes luminol directly without requiring catalytic heme. False Positive.',
    luminolRust: 'Weak, dim blue glow observed. Metal ions in iron oxide weakly catalyze the oxidation. Fades gradually. False Positive.',
    luminolPotato: 'No visible luminescence. Plant peroxidases do not possess the proper catalytic structure to oxidize luminol in these conditions. Negative.',
    luminolNegative: 'No luminescence observed in the dark. The compound is non-catalytic for luminol oxidation. Negative.',
    kmBlood: 'Immediate, bright pink coloration observed upon adding Hydrogen Peroxide. Heme in blood catalytically reduced peroxide, oxidizing phenolphthalin to phenolphthalein. True Positive.',
    kmBleach: 'Immediate, strong pink color change. Sodium hypochlorite directly oxidizes phenolphthalin without needing peroxide catalyst. False Positive.',
    kmRust: 'Slow, weak brownish-pink coloration appearing after several seconds. Iron oxides catalyze the reaction at a much slower rate. False Positive.',
    kmPotato: 'Slow, faint pink coloration appearing after a delay. Plant peroxidases weakly catalyze the reaction. False Positive.',
    kmNegative: 'No color change observed. The solution remains colorless. Negative.'
  },
  seo: [
    {
      type: 'title',
      text: 'Complete Guide to Forensic Presumptive Blood Tests',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Presumptive blood tests are preliminary, highly sensitive assays used at crime scenes and forensic laboratories to screen for the presence of blood. Before allocating time and resources to DNA sequencing or confirmatory typing, forensic investigators rely on rapid tests to identify potential biological traces on clothing, weapons, and surfaces. Because these assays target the peroxidase-like activity of heme (the iron-containing portion of hemoglobin), they are presumptive: a positive result suggests the presence of blood, but requires secondary confirmatory testing to rule out biochemical mimics.'
    },
    {
      type: 'title',
      text: 'How the Kastle-Meyer Test Works',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'The Kastle-Meyer (KM) test is a catalytic colorimetric test that utilizes the reduced, colorless form of phenolphthalein, known as phenolphthalin. The reaction sequence is highly specific in its execution: first, the phenolphthalin reagent is applied to the sample. In the presence of blood, the heme group acts as an organic catalyst. When hydrogen peroxide (H2O2) is subsequently introduced, heme catalyzes the oxidation of phenolphthalin back into phenolphthalein, producing an immediate and intense pink color change. A delayed pink coloration (appearing after 15-20 seconds) is generally interpreted as a negative or false positive caused by slow ambient oxidation.'
    },
    {
      type: 'title',
      text: 'Luminol and Forensic Chemiluminescence',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Luminol (C8H7N3O2) is a chemiluminescent chemical compound that emits a distinct blue-cyan glow in the dark when oxidized in the presence of a metal catalyst. Forensic technicians spray a diluted solution of luminol across large crime scene areas. If the solution contacts bloodstains, the iron inside the hemoglobin catalyzes the reaction between luminol and the oxidizing agent (usually hydrogen peroxide). The resulting chemical reaction produces an excited aminophthalate ion, which releases light energy as it returns to its ground state. Because the light emission is of low intensity, the environment must be completely dark to capture the luminescence photographically.'
    },
    {
      type: 'table',
      headers: ['Substance Tested', 'Kastle-Meyer Reaction Profile', 'Luminol Luminescence Profile', 'Forensic Diagnostic Classification'],
      rows: [
        ['Human Blood Control', 'Immediate, bright pink coloration on H2O2 addition.', 'Intense, long-lasting blue-cyan glow (up to 8s).', 'True Positive. Heme provides the highly efficient catalytic activity required.'],
        ['Household Bleach', 'Immediate pink color change before H2O2 is added.', 'Extremely intense glow that decays in under 2s.', 'False Positive. Strong chemical oxidizers directly oxidize the reagents without a catalyst.'],
        ['Iron Oxide (Rust)', 'Slow, weak brownish-pink coloration.', 'Faint, dim blue glow that decays gradually.', 'False Positive. Metal ions catalyze the reactions at a highly reduced efficiency.'],
        ['Potato (Plant Peroxidase)', 'Slow, faint pink coloration after a delay.', 'No visible chemiluminescence.', 'False Positive (KM) / Negative (Luminol). Vegetable enzymes lack the structure to trigger luminol.']
      ]
    },
    {
      type: 'title',
      text: 'Differentiating Blood from Common False Positives',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Understanding false positives is crucial for crime scene analysis. Strong cleaning agents like sodium hypochlorite (bleach) directly oxidize indicators, simulating blood. However, forensic experts distinguish them by monitoring the reaction dynamics: bleach causes an immediate reaction without the addition of hydrogen peroxide in the KM test, and its luminol chemiluminescence decays almost instantly. Plant peroxidases (found in horseradish, potatoes, and red onions) also produce false positives but are inactivated by heat, unlike heat-stable hemoglobin. Any presumptive positive must be followed by a confirmatory crystal test (e.g., Takayama test) or immunological assay.'
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
