import { pgTable, text, serial, integer, numeric, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
});

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
});

export const canonicalProducts = pgTable("canonical_products", {
  id: serial("id").primaryKey(),
  manufacturerProductId: text("manufacturer_product_id").notNull().unique(),
  name: text("name").notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  brandId: integer("brand_id").references(() => brands.id),
  specs: jsonb("specs").$type<Record<string, any>>().default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const retailers = pgTable("retailers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  websiteUrl: text("website_url").notNull(),
  affiliateTag: text("affiliate_tag"),
});

export const retailerProducts = pgTable("retailer_products", {
  id: serial("id").primaryKey(),
  canonicalProductId: integer("canonical_product_id").references(() => canonicalProducts.id),
  retailerId: integer("retailer_id").references(() => retailers.id),
  retailerSku: text("retailer_sku").notNull(),
  productUrl: text("product_url").notNull(),
  currentPrice: numeric("current_price", { precision: 10, scale: 2 }),
  wasPrice: numeric("was_price", { precision: 10, scale: 2 }),
  isAvailable: boolean("is_available").default(true),
  lastSyncedAt: timestamp("last_synced_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const priceObservations = pgTable("price_observations", {
  id: serial("id").primaryKey(),
  retailerProductId: integer("retailer_product_id").references(() => retailerProducts.id),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  currency: text("currency").default("INR").notNull(),
  isAvailable: boolean("is_available").default(true),
  observedAt: timestamp("observed_at").defaultNow().notNull(),
});
