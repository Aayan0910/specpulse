export interface RetailerProductOffer {
  sku: string;
  url: string;
  price: number;
  wasPrice?: number;
  isAvailable: boolean;
  currency: "INR";
}

export interface RetailerAdapter {
  retailerSlug: string;
  retailerName: string;
  fetchPrice(skuOrUrl: string): Promise<RetailerProductOffer | null>;
  searchProducts(query: string): Promise<RetailerProductOffer[]>;
}

export class MockRetailerAdapter implements RetailerAdapter {
  constructor(public retailerSlug: string, public retailerName: string) {}

  async fetchPrice(skuOrUrl: string): Promise<RetailerProductOffer | null> {
    return {
      sku: skuOrUrl,
      url: `https://${this.retailerSlug}.in/product/${skuOrUrl}`,
      price: Math.floor(Math.random() * 20000) + 10000,
      wasPrice: Math.floor(Math.random() * 25000) + 12000,
      isAvailable: true,
      currency: "INR",
    };
  }

  async searchProducts(query: string): Promise<RetailerProductOffer[]> {
    return [
      {
        sku: "MOCK-1",
        url: `https://${this.retailerSlug}.in/item-1`,
        price: 25000,
        isAvailable: true,
        currency: "INR",
      },
    ];
  }
}
