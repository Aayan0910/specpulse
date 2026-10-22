import { describe, it, expect } from "vitest";
import { checkPriceFreshness, formatFreshnessStatus } from "./freshness";

describe("Price Freshness Validation", () => {
  it("marks price fresh within 2h15m", () => {
    const result = checkPriceFreshness(new Date(Date.now() - 60 * 60 * 1000)); // 1 hour ago
    expect(result.isFresh).toBe(true);
    expect(result.status).toBe("FRESH");
  });

  it("marks price stale after 2h15m boundary", () => {
    const result = checkPriceFreshness(new Date(Date.now() - 3 * 60 * 60 * 1000)); // 3 hours ago
    expect(result.isFresh).toBe(false);
    expect(result.status).toBe("STALE");
    expect(result.reason).toContain("3.0");
  });

  it("rejects missing timestamp", () => {
    const result = checkPriceFreshness(null);
    expect(result.isFresh).toBe(false);
    expect(result.status).toBe("MISSING");
  });

  it("formats freshness correctly", () => {
    expect(formatFreshnessStatus({ isFresh: true, ageMs: 3600000, ageHours: 1, status: "FRESH" })).toContain("Verified");
    expect(formatFreshnessStatus({ isFresh: false, ageMs: 10800000, ageHours: 3, status: "STALE", reason: "old" })).toContain("Stale");
  });
});
