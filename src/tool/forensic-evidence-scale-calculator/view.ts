import {
  calculateEvidenceScale,
  formatMeasurement,
  type MeasurementUnit,
  type ScaleInput,
} from "./logic";
import type { ForensicEvidenceScaleUI } from "./ui";
import { setupUnitSelector } from "./unit-selector";

type ScaleResult = ReturnType<typeof calculateEvidenceScale>;

const getElement = <T extends Element>(
  root: ParentNode,
  selector: string,
): T | null => root.querySelector<T>(selector);

const readNumber = (root: ParentNode, name: string): number =>
  Number(getElement<HTMLInputElement>(root, `[name="${name}"]`)?.value ?? NaN);

const readInput = (root: HTMLElement): ScaleInput => ({
  referenceRealSize: readNumber(root, "referenceRealSize"),
  referencePixelLength: readNumber(root, "referencePixelLength"),
  evidencePixelLength: readNumber(root, "evidencePixelLength"),
  uncertaintyPercent: readNumber(root, "uncertaintyPercent"),
  unit: (getElement<HTMLInputElement>(root, '[name="unit"]')?.value ??
    "mm") as MeasurementUnit,
  samePlane:
    getElement<HTMLInputElement>(root, '[name="samePlane"]')?.checked ?? false,
});

const setText = (root: ParentNode, selector: string, text: string): void => {
  const element = getElement<HTMLElement>(root, selector);
  if (element) element.textContent = text;
};

const uiText = (ui: ForensicEvidenceScaleUI, key: string): string =>
  ui[key] ?? "";

interface ReadoutContext {
  ui: ForensicEvidenceScaleUI;
  result: ScaleResult;
  unit: MeasurementUnit;
  uncertaintyPercent: number;
}

const readoutValue = (
  result: ScaleResult,
  validText: string,
  fallback: string,
): string => (result.valid ? validText : fallback);

const updateMainReadouts = (
  root: HTMLElement,
  context: ReadoutContext,
): void => {
  const { ui, result } = context;
  setText(
    root,
    '[data-result="size"]',
    readoutValue(
      result,
      formatMeasurement(result.evidenceSize, result.unit),
      uiText(ui, "notCalculated"),
    ),
  );
  setText(
    root,
    '[data-result="interval"]',
    readoutValue(
      result,
      `${formatMeasurement(result.lowerBound, result.unit)} - ${formatMeasurement(result.upperBound, result.unit)}`,
      uiText(ui, "enterValues"),
    ),
  );
};

const updateScaleReadouts = (
  root: HTMLElement,
  context: ReadoutContext,
): void => {
  const { result, unit, uncertaintyPercent } = context;
  setText(
    root,
    '[data-result="scale"]',
    readoutValue(result, `${result.scalePerPixel} ${unit}/px`, "-"),
  );
  setText(
    root,
    '[data-result="margin"]',
    readoutValue(result, `${uncertaintyPercent}%`, "-"),
  );
};

const updateTraceReadouts = (
  root: HTMLElement,
  context: ReadoutContext,
): void => {
  const { ui, result } = context;
  setText(
    root,
    '[data-result="formula"]',
    readoutValue(result, result.formula, uiText(ui, "formulaPending")),
  );
  setText(
    root,
    '[data-result="message"]',
    readoutValue(
      result,
      uiText(ui, "calculatedMessage"),
      uiText(ui, "enterValues"),
    ),
  );
};

const updateReadouts = (root: HTMLElement, context: ReadoutContext): void => {
  updateMainReadouts(root, context);
  updateScaleReadouts(root, context);
  updateTraceReadouts(root, context);
};

const updateWarning = (
  root: HTMLElement,
  ui: ForensicEvidenceScaleUI,
  result: ScaleResult,
): void => {
  const warning = getElement<HTMLElement>(root, '[data-result="warning"]');
  if (!warning) return;
  warning.textContent =
    result.warnings.length > 0
      ? uiText(ui, "perspectiveWarning")
      : uiText(ui, "samePlaneMessage");
  warning.dataset.visible = result.warnings.length > 0 ? "true" : "false";
};

const referenceEnd = (input: ScaleInput): number =>
  Math.min(
    520,
    220 +
      Math.max(
        45,
        (input.referencePixelLength / Math.max(input.evidencePixelLength, 1)) *
          70,
      ),
  );

const evidenceEnd = (input: ScaleInput): number =>
  Math.min(
    560,
    250 +
      Math.max(
        34,
        (input.evidencePixelLength / Math.max(input.referencePixelLength, 1)) *
          260,
      ),
  );

const updateScene = (
  root: HTMLElement,
  input: ScaleInput,
  result: ScaleResult,
): void => {
  const referenceLine = getElement<SVGLineElement>(
    root,
    '[data-scene="reference-line"]',
  );
  const evidenceLine = getElement<SVGLineElement>(
    root,
    '[data-scene="evidence-line"]',
  );
  const scene = getElement<HTMLElement>(root, "[data-scene]");
  if (scene)
    scene.dataset.warning = result.warnings.length > 0 ? "true" : "false";
  if (!result.valid) return;
  if (referenceLine)
    referenceLine.setAttribute("x2", String(referenceEnd(input)));
  if (evidenceLine) evidenceLine.setAttribute("x2", String(evidenceEnd(input)));
};

const render = (root: HTMLElement, ui: ForensicEvidenceScaleUI): void => {
  const input = readInput(root);
  const result = calculateEvidenceScale(input);
  root.dataset.ready = result.valid ? "true" : "false";
  updateReadouts(root, {
    ui,
    result,
    unit: input.unit,
    uncertaintyPercent: input.uncertaintyPercent,
  });
  updateWarning(root, ui, result);
  updateScene(root, input, result);
};

export const initForensicEvidenceScale = (
  root: HTMLElement,
  ui: ForensicEvidenceScaleUI,
): void => {
  setupUnitSelector(root, () => render(root, ui));
  root.querySelectorAll<HTMLInputElement>("input").forEach((field) => {
    field.addEventListener("input", () => render(root, ui));
    field.addEventListener("change", () => render(root, ui));
  });
  render(root, ui);
};
