import { describe, it, expect } from "vitest";
import { checkCompatibility } from "./index";

describe("PC Builder Compatibility Engine", () => {
  it("should confirm compatible components", () => {
    const result = checkCompatibility({
      cpu: { socket: "AM5", wattage: 120 },
      motherboard: { socket: "AM5", ramType: "DDR5" },
      ram: { ramType: "DDR5" },
      gpu: { gpuLengthMm: 300, wattage: 220 },
      case: { caseGpuMaxMm: 350 },
      psu: { wattage: 750 },
    });

    expect(result.isCompatible).toBe(true);
    expect(result.issues.length).toBe(0);
  });

  it("should catch socket mismatches", () => {
    const result = checkCompatibility({
      cpu: { socket: "LGA1700" },
      motherboard: { socket: "AM5" },
    });

    expect(result.isCompatible).toBe(false);
    expect(result.issues[0]).toContain("CPU socket (LGA1700) is incompatible");
  });

  it("should catch insufficient power supply wattage", () => {
    const result = checkCompatibility({
      cpu: { wattage: 250 },
      gpu: { wattage: 350 },
      psu: { wattage: 500 }, // Total is 250 + 350 + 100 = 700W > 500W
    });

    expect(result.isCompatible).toBe(false);
    expect(result.issues[0]).toContain("exceeds PSU rated capacity");
  });
});
