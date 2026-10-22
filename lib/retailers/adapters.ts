import { RetailerAdapter, RetailerProductOffer } from "./index";

export const RETAILER_CONFIG = {
  amazon: { name: "Amazon India", baseUrl: "https://www.amazon.in", status: "APPROVAL_REQUIRED" },
  flipkart: { name: "Flipkart", baseUrl: "https://www.flipkart.com", status: "APPROVAL_REQUIRED" },
  mdcomputers: { name: "MDComputers", baseUrl: "https://www.mdcomputers.in", status: "ACCESS_UNAVAILABLE" },
  primeabgb: { name: "PrimeABGB", baseUrl: "https://www.primeabgb.com", status: "ACCESS_UNAVAILABLE" },
  vedant: { name: "Vedant Computers", baseUrl: "https://www.vedantcomputers.com", status: "ACCESS_UNAVAILABLE" },
} as const;

export type RetailerSlug = keyof typeof RETAILER_CONFIG;

export interface PriceValidationResult {
  isValid: boolean;
  price?: number;
  wasPrice?: number;
  currency: "INR";
  isAvailable: boolean;
  error?: string;
}

export function validatePrice(raw: unknown): PriceValidationResult {
  if (!raw || typeof raw !== "object") {
    return { isValid: false, currency: "INR", isAvailable: false, error: "Invalid response format" };
  }

  const data = raw as Record<string, unknown>;

  const price = typeof data.price === "number" ? data.price :
                typeof data.price === "string" ? parseFloat(data.price) : null;

  if (price === null || isNaN(price)) {
    return { isValid: false, currency: "INR", isAvailable: false, error: "Missing or invalid price" };
  }

  if (price <= 0 || price > 500000) {
    return { isValid: false, currency: "INR", isAvailable: false, error: `Implausible price: ₹${price}` };
  }

  const wasPrice = typeof data.wasPrice === "number" ? data.wasPrice :
                   typeof data.wasPrice === "string" ? parseFloat(data.wasPrice) : null;

  if (wasPrice !== null && (wasPrice <= 0 || wasPrice > 500000 || wasPrice <= price)) {
    return { isValid: false, currency: "INR", isAvailable: false, error: "Invalid wasPrice (MRP)" };
  }

  const isAvailable = typeof data.isAvailable === "boolean" ? data.isAvailable : true;

  return {
    isValid: true,
    price,
    wasPrice: wasPrice ?? undefined,
    currency: "INR",
    isAvailable,
  };
}

export class DemoRetailerAdapter implements RetailerAdapter {
  readonly retailerSlug: RetailerSlug;
  readonly retailerName: string;
  private readonly demoPrices: Map<string, RetailerProductOffer>;

  constructor(retailerSlug: RetailerSlug) {
    this.retailerSlug = retailerSlug;
    this.retailerName = RETAILER_CONFIG[retailerSlug].name;
    this.demoPrices = this.initDemoPrices();
  }

  private initDemoPrices(): Map<string, RetailerProductOffer> {
    const map = new Map<string, RetailerProductOffer>();
    const products = this.getDemoProducts();

    for (const offer of products[this.retailerSlug] || []) {
      map.set(offer.sku, offer);
    }
    return map;
  }

  private getDemoProducts(): Record<RetailerSlug, RetailerProductOffer[]> {
    return {
      amazon: [
        { sku: "RTX4070S-FE", url: "https://amazon.in/dp/B0CQX5YZ5J", price: 62499, wasPrice: 65999, isAvailable: true, currency: "INR" },
        { sku: "RYZEN-7800X3D", url: "https://amazon.in/dp/B0BRVZ5X5K", price: 37999, wasPrice: 39999, isAvailable: true, currency: "INR" },
        { sku: "SAMSUNG-990PRO-2TB", url: "https://amazon.in/dp/B0BK9J6X5L", price: 14299, wasPrice: 17999, isAvailable: true, currency: "INR" },
      ],
      flipkart: [
        { sku: "RTX4070S-MSI", url: "https://flipkart.com/p/item1", price: 63999, wasPrice: 65999, isAvailable: true, currency: "INR" },
        { sku: "RTX4060-MSI", url: "https://flipkart.com/p/item2", price: 28999, wasPrice: 31999, isAvailable: true, currency: "INR" },
        { sku: "I5-13600K", url: "https://flipkart.com/p/item3", price: 27999, wasPrice: 30999, isAvailable: true, currency: "INR" },
      ],
      mdcomputers: [
        { sku: "RTX4070S-ASUS", url: "https://mdcomputers.in/product/1", price: 58999, wasPrice: 65999, isAvailable: true, currency: "INR" },
        { sku: "I5-13600K-MSI", url: "https://mdcomputers.in/product/2", price: 26999, wasPrice: 30999, isAvailable: true, currency: "INR" },
      ],
      primeabgb: [
        { sku: "RYZEN-7800X3D-AMD", url: "https://primeabgb.com/product/1", price: 35499, wasPrice: 39999, isAvailable: true, currency: "INR" },
        { sku: "NZXT-H5FLOW", url: "https://primeabgb.com/product/2", price: 8999, wasPrice: 9999, isAvailable: true, currency: "INR" },
        { sku: "CORSAIR-RM750E", url: "https://primeabgb.com/product/3", price: 9499, wasPrice: 10499, isAvailable: true, currency: "INR" },
      ],
      vedant: [
        { sku: "CORSAIR-VENGEANCE-32GB-DDR5", url: "https://vedantcomputers.com/product/1", price: 10499, wasPrice: 12500, isAvailable: true, currency: "INR" },
        { sku: "SAMSUNG-990PRO-2TB-VEDANT", url: "https://vedantcomputers.com/product/2", price: 13999, wasPrice: 17999, isAvailable: true, currency: "INR" },
      ],
    };
  }

  async fetchPrice(skuOrUrl: string): Promise<RetailerProductOffer | null> {
    const offer = this.demoPrices.get(skuOrUrl);
    if (!offer) return null;

    return {
      ...offer,
      url: offer.url,
      price: offer.price,
      wasPrice: offer.wasPrice,
      isAvailable: offer.isAvailable,
      currency: "INR",
    };
  }

  async searchProducts(query: string): Promise<RetailerProductOffer[]> {
    const results: RetailerProductOffer[] = [];
    for (const offer of this.demoPrices.values()) {
      if (offer.sku.toLowerCase().includes(query.toLowerCase()) ||
          offer.url.toLowerCase().includes(query.toLowerCase())) {
        results.push({ ...offer });
      }
    }
    return results.slice(0, 10);
  }
}

export function createRetailerAdapter(slug: RetailerSlug): RetailerAdapter {
  return new DemoRetailerAdapter(slug);
}

export function getAllAdapters(): RetailerAdapter[] {
  return (Object.keys(RETAILER_CONFIG) as RetailerSlug[]).map(createRetailerAdapter);
}