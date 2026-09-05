export type MeasurementUnit = "mm" | "cm" | "in";

export interface ScaleInput {
  referenceRealSize: number;
  referencePixelLength: number;
  evidencePixelLength: number;
  uncertaintyPercent: number;
  unit: MeasurementUnit;
  samePlane: boolean;
}

export interface ScaleResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  scalePerPixel: number;
  evidenceSize: number;
  uncertainty: number;
  lowerBound: number;
  upperBound: number;
  formula: string;
  unit: MeasurementUnit;
}

export const UNIT_LABELS: Record<MeasurementUnit, string> = {
  mm: "mm",
  cm: "cm",
  in: "in",
};
const UNITS: MeasurementUnit[] = ["mm", "cm", "in"];
const isFinitePositive = (value: number): boolean =>
  Number.isFinite(value) && value > 0;
const isUnit = (value: string): value is MeasurementUnit =>
  UNITS.includes(value as MeasurementUnit);
const round = (value: number, decimals = 6): number =>
  Number(value.toFixed(decimals));

export const formatMeasurement = (
  value: number,
  unit: MeasurementUnit,
): string => {
  if (!Number.isFinite(value)) return "-";
  const absolute = Math.abs(value);
  let decimals = 3;
  if (absolute >= 100) decimals = 0;
  else if (absolute >= 10) decimals = 2;
  return `${value.toFixed(decimals).replace(/\.0+$|(?<=\.\d)0+$/, "")} ${UNIT_LABELS[unit]}`;
};

const validateInput = (input: ScaleInput): string[] => {
  const errors: string[] = [];
  if (!isFinitePositive(input.referenceRealSize))
    errors.push("referenceRealSize");
  if (!isFinitePositive(input.referencePixelLength))
    errors.push("referencePixelLength");
  if (!isFinitePositive(input.evidencePixelLength))
    errors.push("evidencePixelLength");
  if (
    !Number.isFinite(input.uncertaintyPercent) ||
    input.uncertaintyPercent < 0 ||
    input.uncertaintyPercent > 100
  ) {
    errors.push("uncertaintyPercent");
  }
  return errors;
};

const emptyResult = (
  unit: MeasurementUnit,
  errors: string[],
  warnings: string[],
): ScaleResult => ({
  valid: false,
  errors,
  warnings,
  scalePerPixel: 0,
  evidenceSize: 0,
  uncertainty: 0,
  lowerBound: 0,
  upperBound: 0,
  formula: "-",
  unit,
});

export const calculateEvidenceScale = (input: ScaleInput): ScaleResult => {
  const unit = isUnit(input.unit) ? input.unit : "mm";
  const errors = validateInput(input);
  const warnings = input.samePlane ? [] : ["perspective"];

  if (errors.length > 0) return emptyResult(unit, errors, warnings);

  const scalePerPixel = input.referenceRealSize / input.referencePixelLength;
  const evidenceSize = input.evidencePixelLength * scalePerPixel;
  const uncertainty = evidenceSize * (input.uncertaintyPercent / 100);
  return {
    valid: true,
    errors,
    warnings,
    scalePerPixel: round(scalePerPixel),
    evidenceSize: round(evidenceSize),
    uncertainty: round(uncertainty),
    lowerBound: round(Math.max(0, evidenceSize - uncertainty)),
    upperBound: round(evidenceSize + uncertainty),
    formula: `${input.evidencePixelLength} px x (${input.referenceRealSize} ${unit} / ${input.referencePixelLength} px)`,
    unit,
  };
};
