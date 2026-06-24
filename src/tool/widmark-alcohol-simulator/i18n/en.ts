import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'widmark-blood-alcohol-simulator';
const title = 'Widmark Blood Alcohol Concentration Simulator';
const description = 'Calculate and simulate the absorption, distribution, and elimination of ethanol in the human body using the Widmark formula and a zero-order metabolism kinetics engine.';

const howTo = [
  {
    name: 'Configure subject physical parameters',
    text: 'Enter the body weight, biological sex, and hydration level. These biological characteristics directly calculate the Widmark factor (r) which dictates the volume of distribution for ethanol in the body.',
  },
  {
    name: 'Define stomach fullness state',
    text: 'Select empty stomach, light meal, or full meal. This dynamically adjusts the absorption rate constant (ka) to show the dampening and delay effect of food on the BAC curve.',
  },
  {
    name: 'Add drinks to the timeline',
    text: 'Add individual drinks by specifying the volume in milliliters, alcohol by volume percentage (ABV), and the hour at which the drink was consumed relative to the start of the simulation.',
  },
  {
    name: 'Analyze the resulting BAC curve',
    text: 'Inspect the resulting blood alcohol concentration chart over 12 hours. Compare the peak level, time to reach the peak, and total duration to sobriety against standard driving limits.',
  },
];

const faq = [
  {
    key: 'faq-1',
    question: 'What is the Widmark formula and how is it used in forensics?',
    answer: 'The Widmark formula is a mathematical model developed by Erik M. P. Widmark in 1932. It estimates blood alcohol concentration based on the mass of alcohol consumed, body weight, a distribution factor (r), and a linear elimination rate over time. Forensic toxicologists use this formula to perform retrospective calculations to estimate a suspect\'s BAC at the time of an accident or offense.',
  },
  {
    key: 'faq-2',
    question: 'How does food in the stomach affect the shape of the BAC curve?',
    answer: 'Food in the stomach delays gastric emptying, which prevents alcohol from entering the small intestine quickly. Because the small intestine has a massive surface area, it absorbs alcohol much faster than the stomach. In our simulation, this delay is modeled by decreasing the absorption rate constant (ka), which shifts the peak BAC later in time and significantly lowers the maximum peak concentration.',
  },
  {
    key: 'faq-3',
    question: 'Why does alcohol clearance follow zero-order kinetics instead of first-order?',
    answer: 'Most medications are cleared via first-order kinetics, meaning the rate of elimination is proportional to concentration. Alcohol clearance follows zero-order kinetics because the primary liver enzyme responsible for its metabolism, alcohol dehydrogenase (ADH), becomes completely saturated at very low BAC levels (around 0.02 g/L). Consequently, the liver metabolizes alcohol at a constant, maximum speed regardless of how much alcohol is in the blood.',
  },
  {
    key: 'faq-4',
    question: 'What biological factors cause individual variations in the Widmark factor?',
    answer: 'The Widmark factor (r) represents the ratio of water in the body to total body weight. Since ethanol is highly hydrophilic (water-soluble) and hydrophobic (lipophobic), it distributes only into body water. Muscle tissue contains a high percentage of water, while adipose (fat) tissue contains very little. Therefore, individuals with higher body fat percentages or lower hydration states have a smaller volume of distribution, yielding a higher BAC for the same amount of alcohol.',
  },
  {
    key: 'faq-5',
    question: 'Can I use this simulator to legally prove I was sober enough to drive?',
    answer: 'Absolutely not. This simulator is an educational tool designed to demonstrate general pharmacokinetic concepts. In real life, factors such as liver health, enzyme genetics, medication interactions, sleep deprivation, stress, and exact gastric conditions introduce significant variations. You must never rely on a mathematical simulation to determine your fitness to operate a motor vehicle.',
  },
];

export const content: ToolLocaleContent = {
  slug,
  title,
  description,
  ui: {
    subjectProfile: 'Subject profile',
    weight: 'Weight (kg)',
    sex: 'Biological sex',
    male: 'Male',
    female: 'Female',
    hydration: 'Hydration level',
    hydrationLow: 'Low',
    hydrationNormal: 'Normal',
    hydrationHigh: 'High',
    stomachState: 'Stomach contents',
    stomachEmpty: 'Empty (Fast absorption)',
    stomachLight: 'Light meal (Medium absorption)',
    stomachFull: 'Full meal (Slow absorption)',
    drinksTimeline: 'Consumption timeline',
    addDrink: 'Add drink',
    drinkVolume: 'Volume (ml)',
    drinkAbv: 'ABV (%)',
    drinkTime: 'Time (Hour)',
    drinksList: 'Drinks consumed',
    remove: 'Remove',
    beer: 'Beer (330ml, 5%)',
    wine: 'Wine (150ml, 12%)',
    spirits: 'Spirits (40ml, 40%)',
    peakBac: 'Peak BAC',
    timeToSober: 'Time to sober',
    sober: 'Sober',
    currentBac: 'Current BAC',
    drivingLimitAlert: 'Driving limit status',
    safeLimit: 'Below limit',
    warningLimit: 'Warning limit exceeded',
    dangerLimit: 'Danger level exceeded',
    graphTitle: 'Blood alcohol concentration over 12 hours',
    timeAxisLabel: 'Time (Hours)',
    bacAxisLabel: 'BAC (g/L)',
    legalLimitText: 'Standard driving limit',
    noDrinksText: 'Add drinks to simulate the BAC curve.',
    hours: 'hours',
    soberStatus: 'Sober in {time} hours',
    neverSober: 'Exceeds 12h window',
    noteDisclaimer: 'Educational simulation only. Actual absorption and clearance vary. Do not drive after drinking.',
    noteWidmark: 'Based on Widmark equation and zero-order hepatic elimination rate.',
  },
  seo: [
    {
      type: 'title',
      text: 'Forensic Toxicology and Pharmacokinetics of Ethanol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Understanding the <strong>absorption, distribution, and elimination of ethanol</strong> is a core requirement in forensic science and traffic accident reconstruction. When a person consumes alcohol, it travels down the esophagus into the stomach, where a small amount is absorbed directly into the bloodstream. However, the vast majority of ethanol absorption takes place in the duodenum and small intestine due to its large surface area. The rate at which the stomach empties its contents into the small intestine is the major limiting step of alcohol absorption, which explains why the presence of food plays such a dramatic role in the pharmacokinetic curve.',
    },
    {
      type: 'paragraph',
      html: 'This interactive simulator implements Erik M. P. Widmark\'s classic equations combined with a continuous compartmental simulation to model the entire process over a 12-hour period. By adjusting the physiological characteristics of the subject and adding multiple drinks at different time slots, students and forensic trainees can visualize the mathematical accumulation and subsequent linear decay of blood alcohol concentration.',
    },
    {
      type: 'title',
      text: 'Mathematical Derivation of the Widmark Equation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The fundamental Widmark equation calculates the theoretical blood alcohol concentration assuming instantaneous absorption and distribution throughout the body water compartment. The equation is represented as: <strong>BAC = (A / (W * r)) - (&beta; * t)</strong>. In this equation, <em>A</em> represents the mass of pure ethanol consumed in grams, <em>W</em> is the total body weight of the subject in kilograms, and <em>r</em> is the Widmark factor, also known as the distribution ratio. The distribution ratio represents the fraction of the body weight that consists of water and is capable of dissolving ethanol. Finally, <em>&beta;</em> (beta) is the rate of elimination per hour, and <em>t</em> is the elapsed time since the beginning of absorption.',
    },
    {
      type: 'paragraph',
      html: 'To convert liquid beverage volumes into grams of pure ethanol, we multiply the volume in milliliters by the alcohol by volume percentage (ABV) and then by the density of ethanol, which is approximately 0.8 grams per milliliter. For example, a 330 ml beer at 5% ABV contains: 330 * 0.05 * 0.8 = 13.2 grams of pure ethanol. This mass of alcohol is then diluted by the subject\'s total body water, which depends heavily on body weight and body composition. The simulator dynamically adjusts the r-factor based on biological sex (standard male baseline is 0.68, while the female baseline is 0.55 due to typical body fat ratio differences) and hydration levels, providing a highly customizable educational tool.',
    },
    {
      type: 'title',
      text: 'Physiological Factors Affecting Distribution and Gastric Clearance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The volume of distribution (V<sub>d</sub>) of ethanol is determined entirely by body composition because ethanol is hydrophilic and lipophobic. Adipose tissue (body fat) contains very little water, whereas muscle tissue contains approximately 75% water. Consequently, a muscular individual will have a larger volume of distribution (a higher Widmark factor r) and will experience a lower peak BAC than an individual of the same weight with a higher body fat percentage. Dehydration also reduces the total volume of body water, shrinking the dilution pool and raising the peak BAC for any given quantity of alcohol consumed.',
    },
    {
      type: 'table',
      headers: ['Physiological Variable', 'Biological Mechanism', 'Effect on Pharmacokinetics', 'Forensic Implications'],
      rows: [
        ['Total Body Weight', 'Determines the total mass and scale of the body water pool.', 'Inversely proportional to the maximum peak BAC.', 'Establishes the initial dilution baseline for retrospective calculations.'],
        ['Biological Sex', 'Influences the typical muscle-to-fat ratio and body composition.', 'r is lower in females (0.55) than males (0.68), raising peak BAC.', 'Explains why women generally experience higher intoxication levels.'],
        ['Hydration State', 'Alters the total volume of free water in extracellular spaces.', 'Dehydration lowers r by 0.05, raising the peak curve height.', 'Accounts for changes in susceptibility due to sweating or sickness.'],
        ['Gastric Fullness', 'Food slows gastric emptying and traps ethanol in the stomach.', 'Lowers the absorption rate constant (ka), flattening the peak.', 'Explains why drinking on an empty stomach leads to sudden intoxication.'],
      ],
    },
    {
      type: 'title',
      text: 'Elimination Kinetics: Zero-Order Hepatic Clearance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Once ethanol enters the bloodstream, it is distributed to all tissues and organs. The elimination of alcohol is primarily performed by the liver, where the enzyme alcohol dehydrogenase (ADH) converts ethanol into acetaldehyde, which is then converted to acetate by aldehyde dehydrogenase (ALDH). A minor portion of alcohol (around 5-10%) is excreted unchanged in breath, sweat, and urine. Because the ADH enzyme system is highly efficient, it becomes completely saturated at very low BAC concentrations. This results in zero-order kinetics, where a constant amount of alcohol is eliminated per unit of time, regardless of the blood concentration.',
    },
    {
      type: 'paragraph',
      html: 'In forensic toxicology, the average elimination rate (&beta;<sub>60</sub>) is widely accepted as 0.15 grams per liter per hour (g/L/h), which is equivalent to approximately 10 grams of pure alcohol cleared from the body every hour. In this simulation, the rate of clearance is computed in grams per hour as <strong>&beta; * Weight * r</strong>, ensuring that the linear decline matches the physiological scale of the individual. Under extreme conditions or chronic consumption, the elimination rate can increase up to 0.25 g/L/h, while individuals with liver damage or specific genetic variations may experience rates as low as 0.10 g/L/h. This linear decay produces the characteristic straight-line descent on the BAC chart until the concentration reaches zero.',
    },
    {
      type: 'title',
      text: 'Forensic Case Analysis: Retrospective Calculations',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Forensic investigators frequently use retrospective calculations (also known as back-calculations) to estimate a driver\'s BAC at the time of a traffic stop or collision based on a blood test taken hours later. For example, if a blood sample taken at 3:00 AM shows a BAC of 0.20 g/L, and the incident occurred at 12:00 AM, the investigator must add back the eliminated alcohol. Using the standard rate of 0.15 g/L/h over the 3-hour delay, the estimated BAC at the time of the crash would be: 0.20 + (0.15 * 3) = 0.65 g/L. This calculation is only valid if the individual was in the post-absorptive phase (completely finished absorbing all alcohol) during the entire interval, illustrating why understanding stomach contents and absorption timelines is critical in legal proceedings.',
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
