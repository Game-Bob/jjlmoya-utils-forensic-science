import { bibliography } from "../bibliography";
import type { ToolLocaleContent } from "../../../types";
import type { ForensicEvidenceScaleUI } from "../ui";

const slug = "forensic-evidence-scale-calculator";
const title = "Forensic Evidence Scale Calculator";
const description =
  "Convert a measured length in a scaled evidence photograph into a traceable real-world estimate with an uncertainty range and perspective warning.";

const ui: ForensicEvidenceScaleUI = {
  sceneAria:
    "Illustration of a photographed evidence fragment, a reference scale, and two measurement lines.",
  sceneKicker: "Calibration view",
  sceneTitle: "Pixels become a documented length",
  sceneNote:
    "The reference and evidence measurements must describe the same image plane.",
  evidenceLength: "Evidence length",
  referenceLength: "Reference length",
  controls: "Measurement inputs",
  controlKicker: "Enter the two pixel measurements",
  controlHelper:
    "Use a visible ruler, scale, or object with a known real size in the same photograph.",
  referenceRealSize: "Known reference size",
  referenceRealHelp: "The real length printed on the scale or object.",
  referencePixelLength: "Reference length in pixels",
  evidencePixelLength: "Evidence length in pixels",
  pixelHelp: "Measure both endpoints in the image.",
  uncertaintyPercent: "Measurement margin (%)",
  uncertaintyHelp: "A transparent margin for reading and calibration error.",
  unit: "Real-world unit",
  millimetres: "Millimetres (mm)",
  centimetres: "Centimetres (cm)",
  inches: "Inches (in)",
  samePlane: "Reference and evidence are on the same plane",
  samePlaneHelp:
    "Keep this checked when both lengths lie on the same flat surface.",
  disclaimer:
    "Educational measurement aid. It does not correct perspective, establish chain of custody, or replace validated forensic photography and expert review.",
  results: "Calculated evidence measurement",
  resultKicker: "Documentable estimate",
  calculatedMessage:
    "The estimate is scaled from the reference length you entered.",
  notCalculated: "Not calculated",
  enterValues: "Enter positive measurements to calculate the estimate.",
  interval: "Estimated interval",
  scaleFactor: "Scale factor",
  margin: "Applied margin",
  traceLabel: "Calculation trace",
  formulaPending: "The calculation trace will appear here.",
  samePlaneMessage:
    "Same-plane check is active. Review the photograph for alignment, focus, and endpoint placement.",
  perspectiveWarning:
    "Perspective warning: a flat scale and the evidence are not marked as coplanar. Treat this result as a rough estimate until geometry is corrected or the image is replaced.",
};

const faq = [
  {
    question: "What does this forensic evidence scale calculator do?",
    answer:
      "It uses a known real-world reference length and two pixel measurements from one photograph to estimate the evidence length. It also applies the margin you enter to show an interval instead of presenting a false exact value.",
  },
  {
    question: "What is the scale formula?",
    answer:
      "The scale factor is known reference size divided by reference pixels. Estimated evidence size is evidence pixels multiplied by that factor. The interval expands the estimate by the entered percentage margin.",
  },
  {
    question: "Why must the reference and evidence be on the same plane?",
    answer:
      "An oblique camera angle can make distances at different depths appear at different scales. A ruler beside an elevated or recessed object may therefore produce a biased result even when the arithmetic is correct.",
  },
  {
    question: "Can this replace a forensic report or identify evidence?",
    answer:
      "No. It does not identify evidence, correct perspective, validate a camera setup, preserve the original file, or establish chain of custody. Use it as a transparent arithmetic check and document the image, reference, method, assumptions, and review separately.",
  },
];

const howTo = [
  {
    name: "Read the reference scale",
    text: "Enter the known real size of the ruler interval or object visible in the photograph and choose its unit.",
  },
  {
    name: "Measure both lengths in pixels",
    text: "Measure the reference interval and the evidence interval using the same image and the same endpoint convention.",
  },
  {
    name: "Add a realistic margin",
    text: "Include a percentage for endpoint reading, image resolution, and calibration uncertainty. Do not use the margin to hide perspective problems.",
  },
  {
    name: "Record the interval and trace",
    text: "Use the estimate, interval, scale factor, and calculation trace as a compact note alongside the original photograph and your methodological limitations.",
  },
];

export const content: ToolLocaleContent<ForensicEvidenceScaleUI> = {
  slug,
  title,
  description,
  ui,
  seo: [
    {
      type: "title",
      text: "How to Measure Evidence from a Scaled Photograph",
      level: 2,
    },
    {
      type: "paragraph",
      html: "This calculator turns a known reference length and two pixel spans into a <strong>real-world estimate with an explicit interval</strong>. It is designed for a quick, documented arithmetic check when a technician or student is reviewing one photograph.",
    },
    {
      type: "paragraph",
      html: "The reference is the anchor for the calculation. It may be a marked ruler interval or another object whose real length is known before the image is measured. Enter that real length in millimetres, centimetres, or inches, then measure the same interval in pixels.",
    },
    {
      type: "paragraph",
      html: "The evidence span is measured in the same image space. Use the same zoom context and endpoint rule for both spans, because changing how an edge is selected can change the result. The displayed formula keeps those inputs visible for a second reader.",
    },
    {
      type: "paragraph",
      html: "The percentage margin is a sensitivity allowance for reading and calibration uncertainty. It expands the estimate into a lower and upper bound; it is not a laboratory uncertainty budget, a confidence interval, or proof that the photograph is metrically calibrated.",
    },
    {
      type: "paragraph",
      html: "Coplanarity is the central geometric assumption. A ruler and an item at different depths can have different image scales, especially when the camera is oblique. If that condition is plausible, keep the warning visible and replace the arithmetic check with a validated imaging procedure.",
    },
    {
      type: "paragraph",
      html: "Use the result as a compact note beside the original file, not as a substitute for evidence handling. Record the source image identity, the reference interval, both pixel spans, the unit, the margin, and any perspective, focus, distortion, or processing limitation that could affect interpretation.",
    },
    {
      type: "stats",
      items: [
        {
          value: "2",
          label: "pixel spans to compare",
          icon: "mdi:vector-line",
        },
        {
          value: "1",
          label: "transparent scale ratio",
          icon: "mdi:calculator-variant-outline",
        },
        {
          value: "±",
          label: "reading margin shown",
          icon: "mdi:arrow-expand-horizontal",
        },
      ],
      columns: 3,
    },
    { type: "title", text: "The scale ratio", level: 3 },
    {
      type: "code",
      code: "evidence size = evidence pixels × (reference size ÷ reference pixels)",
      ariaLabel: "Forensic evidence scale formula",
    },
    {
      type: "card",
      icon: "mdi:ruler-square",
      title: "Before you measure",
      html: "Choose a visible ruler interval or object with a known real size. Measure both endpoints in the same image, keep the unit consistent, and note the image zoom and endpoint convention. The calculator reports arithmetic; it does not repair a photograph.",
    },
    {
      type: "table",
      headers: ["Step", "Input", "Output"],
      rows: [
        [
          "Reference ratio",
          "reference size ÷ reference pixels",
          "real-world units per pixel",
        ],
        [
          "Evidence estimate",
          "evidence pixels × ratio",
          "estimated evidence length",
        ],
        [
          "Reading interval",
          "estimate ± entered margin",
          "lower and upper sensitivity bounds",
        ],
      ],
    },
    { type: "title", text: "When the estimate is useful", level: 3 },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Good fit for a quick check",
          description:
            "Use the calculator when the scale and the evidence are photographed on the same flat plane and you need a reproducible note.",
          points: [
            "Known reference interval",
            "Same image plane",
            "Explicit reading margin",
          ],
          highlight: true,
          pointIcon: "mdi:check",
        },
        {
          title: "Stop and validate the geometry",
          description:
            "Do not treat a ruler as a universal perspective correction when depth, angle, distortion, or scale placement can change the ratio.",
          points: [
            "Different depths",
            "Oblique camera angle",
            "Material distortion or blur",
          ],
          pointIcon: "mdi:alert-outline",
        },
      ],
    },
    { type: "title", text: "Working vocabulary", level: 3 },
    {
      type: "glossary",
      items: [
        {
          term: "Reference length",
          definition:
            "The known real-world span represented by the ruler interval or object in the photograph.",
        },
        {
          term: "Pixel length",
          definition:
            "The image-space distance between the two endpoints selected for a reference or evidence span.",
        },
        {
          term: "Scale factor",
          definition:
            "The reference size divided by its pixel length. It expresses the selected real-world unit per image pixel.",
        },
        {
          term: "Sensitivity interval",
          definition:
            "A simple range around the estimate created from the percentage margin entered by the user. It is not a validated expanded uncertainty.",
        },
      ],
    },
    {
      type: "summary",
      title: "A traceable note should include",
      items: [
        "The source image and file identity.",
        "The reference interval, evidence interval, unit, and endpoint rule.",
        "The displayed estimate, interval, scale factor, and chosen margin.",
        "A clear statement about plane alignment and any perspective limitation.",
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Perspective is a geometry problem",
      badge: "LIMIT",
      icon: "mdi:camera-off-outline",
      html: "If the reference and evidence sit at different depths, the same pixel-to-length ratio may not apply to both. This tool flags the condition but does not perform projective correction, authenticate the file, or establish chain of custody.",
    },
    {
      type: "tip",
      title: "Use this as a transparent arithmetic check",
      html: "The result is an estimate for documentation and review, not a forensic conclusion. Preserve the original photograph and use a validated imaging method when geometry or evidentiary requirements are material.",
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: title,
      description,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Any",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title,
      step: howTo.map((step) => ({
        "@type": "HowToStep",
        name: step.name,
        text: step.text,
      })),
    },
  ],
};
