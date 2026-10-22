/**
 * Price Freshness Checker — verifies price observations meet 2h15m freshness rule
 */

export interface FreshnessCheck {
  isFresh: boolean;
  observationTime?: Date;
  ageMs: number;
  ageHours: number;
  status: "FRESH" | "STALE" | "UNVERIFIED" | "MISSING";
  reason?: string;
}

const FRESHNESS_LIMIT_MS = 2 * 60 * 60 * 1000 + 15 * 60 * 1000; // 2h15m

export function checkPriceFreshness(observedAt: Date | null | undefined): FreshnessCheck {
  if (!observedAt) {
    return { isFresh: false, ageMs: Infinity, ageHours: Infinity, status: "MISSING", reason: "No observation timestamp recorded" };
  }

  const observationTime = new Date(observedAt);
  const now = new Date();
  const ageMs = now.getTime() - observationTime.getTime();
  const ageHours = ageMs / (1000 * 60 * 60);

  if (ageMs < 0) {
    return { isFresh: false, observationTime, ageMs, ageHours, status: "STALE", reason: "Observation timestamp is in the future" };
  }

  if (ageMs > FRESHNESS_LIMIT_MS) {
    return { isFresh: false, observationTime, ageMs, ageHours, status: "STALE", reason: `Price observation is ${ageHours.toFixed(1)}h old (limit: 2h 15m)` };
  }

  return { isFresh: true, observationTime, ageMs, ageHours, status: "FRESH" };
}

export function formatFreshnessStatus(check: FreshnessCheck): string {
  switch (check.status) {
    case "FRESH": return `Verified ${(check.ageHours).toFixed(1)}h ago`;
    case "STALE": return `Stale (${(check.ageHours).toFixed(1)}h old)`;
    case "UNVERIFIED": return "Price unverified";
    case "MISSING": return "No verification timestamp";
    default: return "Unknown price status";
  }
}
