import { describe, expect, it } from "vitest";
import { calculateEvidenceScale, formatMeasurement } from "./logic";

describe("calculateEvidenceScale", () => {
  it("converts image pixels into a real-world size and propagates uncertainty", () => {
    const result = calculateEvidenceScale({
      referenceRealSize: 25,
      referencePixelLength: 200,
      evidencePixelLength: 80,
      uncertaintyPercent: 5,
      unit: "mm",
      samePlane: true,
    });
    expect(result.valid).toBe(true);
    expect(result.scalePerPixel).toBe(0.125);
    expect(result.evidenceSize).toBe(10);
    expect(result.uncertainty).toBe(0.5);
    expect(result.lowerBound).toBe(9.5);
    expect(result.upperBound).toBe(10.5);
    expect(result.warnings).toEqual([]);
  });

  it("keeps the selected unit in the formula and warns about different planes", () => {
    const result = calculateEvidenceScale({
      referenceRealSize: 10,
      referencePixelLength: 500,
      evidencePixelLength: 125,
      uncertaintyPercent: 2,
      unit: "cm",
      samePlane: false,
    });
    expect(result.formula).toBe("125 px x (10 cm / 500 px)");
    expect(result.evidenceSize).toBe(2.5);
    expect(result.warnings).toEqual(["perspective"]);
    expect(formatMeasurement(result.evidenceSize, result.unit)).toBe("2.5 cm");
  });

  it("rejects missing or unsafe measurements", () => {
    const result = calculateEvidenceScale({
      referenceRealSize: 0,
      referencePixelLength: 0,
      evidencePixelLength: -1,
      uncertaintyPercent: 101,
      unit: "mm",
      samePlane: true,
    });
    expect(result.valid).toBe(false);
    expect(result.errors).toEqual([
      "referenceRealSize",
      "referencePixelLength",
      "evidencePixelLength",
      "uncertaintyPercent",
    ]);
  });
});
