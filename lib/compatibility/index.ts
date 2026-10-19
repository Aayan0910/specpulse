export interface ComponentSpecs {
  socket?: string;
  ramType?: string;
  formFactor?: string;
  wattage?: number;
  gpuLengthMm?: number;
  caseGpuMaxMm?: number;
}

export interface CompatibilityResult {
  isCompatible: boolean;
  issues: string[];
  warnings: string[];
}

export function checkCompatibility(parts: {
  cpu?: ComponentSpecs;
  motherboard?: ComponentSpecs;
  ram?: ComponentSpecs;
  gpu?: ComponentSpecs;
  case?: ComponentSpecs;
  psu?: ComponentSpecs;
}): CompatibilityResult {
  const issues: string[] = [];
  const warnings: string[] = [];

  // Check CPU and Motherboard socket
  if (parts.cpu?.socket && parts.motherboard?.socket) {
    if (parts.cpu.socket !== parts.motherboard.socket) {
      issues.push(`CPU socket (${parts.cpu.socket}) is incompatible with Motherboard socket (${parts.motherboard.socket}).`);
    }
  }

  // Check RAM and Motherboard compatibility
  if (parts.ram?.ramType && parts.motherboard?.ramType) {
    if (parts.ram.ramType !== parts.motherboard.ramType) {
      issues.push(`RAM type (${parts.ram.ramType}) does not match Motherboard supported RAM (${parts.motherboard.ramType}).`);
    }
  }

  // Check GPU length vs Case clearance
  if (parts.gpu?.gpuLengthMm && parts.case?.caseGpuMaxMm) {
    if (parts.gpu.gpuLengthMm > parts.case.caseGpuMaxMm) {
      issues.push(`GPU length (${parts.gpu.gpuLengthMm}mm) exceeds Case maximum GPU clearance (${parts.case.caseGpuMaxMm}mm).`);
    }
  }

  // Check Power Supply Wattage
  const estimatedLoad = (parts.cpu?.wattage || 0) + (parts.gpu?.wattage || 0) + 100; // 100W for motherboard, RAM, fans
  if (parts.psu?.wattage && estimatedLoad > parts.psu.wattage) {
    issues.push(`Estimated total system wattage (~${estimatedLoad}W) exceeds PSU rated capacity (${parts.psu.wattage}W).`);
  } else if (parts.psu?.wattage && estimatedLoad > parts.psu.wattage * 0.8) {
    warnings.push(`System estimated wattage (~${estimatedLoad}W) is close to 80% PSU capacity (${parts.psu.wattage}W). Consider upgrading.`);
  }

  return {
    isCompatible: issues.length === 0,
    issues,
    warnings,
  };
}
