import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: "forensic-science",
  title: "Forensic Science Tools",
  description: "Forensic utilities for structured case triage, transparent calculations, and evidence-aware reporting.",
  seo: [
    {
      type: 'title',
      text: "Forensic Science Tools for Evidence Analysis and Case Triage",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "This library provides specialized tools and calculations for forensic analysts, legal professionals, researchers, and investigators. Forensic science utilities help evaluate physical evidence collected from crime scenes. By using structured models for bloodstain trajectory, age estimation, glass refractive index, and drug analysis, teams can perform initial case triage. Every utility focuses on transparency, showing assumptions and helping users understand the limits of each forensic formula in a clear manner.",
    },
    {
      type: 'paragraph',
      html: "Early case review requires assessing what evidence is available, what the scientific formulas assume, and where uncertainty remains. These calculators are designed to support education and preliminary screening. They assist in determining which analytical steps are necessary before committing to formal laboratory testing. Using these tools helps identify gaps in the evidence files early in the investigation process.",
    },
    {
      type: 'title',
      text: "Key Areas of Forensic Calculations",
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Age estimation:</strong> skeletal, dental, and maturity calculations with explicit uncertainty metrics.',
        '<strong>Evidence interpretation:</strong> structured estimators that display formulas, confidence intervals, and boundaries.',
        '<strong>Case triage:</strong> fast tools that highlight missing evidence and identify parameters needed for formal examination.',
        '<strong>Report drafting support:</strong> utilities that encourage clear reporting using ranges rather than false precision.',
      ],
    },
    {
      type: 'title',
      text: "Guidelines for Responsible Use of Forensic Software",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Every forensic calculation involves error rates and confidence limits. A calculator should never replace a qualified expert witness or a validated laboratory protocol. Instead, these web utilities are best used to explore scenarios, explain concepts to non-specialists, and check the sensitivity of measurements before writing final reports. This helps prevent misunderstandings in the courtroom regarding scientific precision.",
    },
    {
      type: 'table',
      headers: ['Appropriate Use', 'Inappropriate Use', 'Importance'],
      rows: [
        ["Screening case files before formal specialist examination.", "Using a calculator output as a final expert opinion.", "Forensic evidence must meet strict standards of scientific validation."],
        ["Explaining measurement uncertainty and ranges to investigators.", "Reporting a single exact number without explaining limitations.", "False precision can lead to incorrect decisions in judicial systems."],
        ["Checking how input assumptions affect the estimated outcome.", "Hiding initial parameters or calculations from the case record.", "Transparency allows results to be audited and reproduced by others."],
        ["Determining if data quality is sufficient for calculation.", "Running formulas with poor or incomplete scale measurements.", "Weak input parameters make any mathematical reconstruction unreliable."],
      ],
    },
  ],
};
