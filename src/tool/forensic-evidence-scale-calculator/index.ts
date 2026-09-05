import { forensicEvidenceScaleCalculator } from "./entry";
import type { ToolDefinition } from "../../types";

export * from "./entry";

export const FORENSIC_EVIDENCE_SCALE_CALCULATOR_TOOL: ToolDefinition = {
  entry: forensicEvidenceScaleCalculator,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
