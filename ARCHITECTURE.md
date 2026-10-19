# Architecture Overview

## Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (with custom design system)
- **State:** React Server Components + Server Actions
- **Data Fetching:** Server-side rendering with incremental static regeneration
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts (for price history)
- **UI Components:** shadcn/ui (built on Radix UI + Tailwind)

### Backend
- **Runtime:** Node.js 22+
- **API:** Next.js API Routes (Server Actions)
- **Auth:** NextAuth.js (optional, for future admin/user features)

### Database
- **Primary:** PostgreSQL (via Railway or Neon)
- **Migrations:** Drizzle ORM + Drizzle Kit
- **Caching:** Redis (optional, for high-traffic periods)

### Data Collection
- **Retailer Adapters:** TypeScript modules implementing a common interface
- **Schedule:** GitHub Actions cron (every 1 hour, rotating retailers)
- **Error Handling:** Retry with exponential backoff, dead-letter queue

### Hosting & Deployment
- **Frontend:** Vercel (Hobby plan)
- **Database:** Railway Hobby Plan (free $5 credit)
- **Scheduling:** GitHub Actions (free)

## Project Structure

```
pchub-india/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Public pages
│   │   ├── page.tsx              # Homepage
│   │   ├── products/             # Product listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Product detail
│   │   ├── compare/              # Comparison pages
│   │   ├── builder/              # PC Builder
│   │   └── deals/                # Featured deals
│   ├── api/                      # API routes
│   │   └── ...
│   └── layout.tsx
├── components/                   # Reusable UI components
│   ├── ui/                       # shadcn/ui components
│   ├── products/                 # Product-specific components
│   ├── layout/                   # Header, footer, navigation
│   └── charts/                   # Price charts
├── lib/                          # Business logic
│   ├── db/                       # Database client & schemas
│   ├── retailers/                # Retailer adapters
│   │   ├── index.ts              # Adapter interface
│   │   ├── amazon.ts
│   │   ├── flipkart.ts
│   │   ├── mdcomputers.ts
│   │   ├── primeabgb.ts
│   │   └── vedant.ts
│   ├── price-history/            # Price analysis logic
│   ├── compatibility/            # Component compatibility
│   └── utils/                    # Helper functions
├── scripts/                      # One-off scripts
│   └── seed/                     # Initial data seeding
├── drizzle/                      # Database migrations
├── public/                       # Static assets
├── .env.example
├── COSTS.md                      # Cost analysis
├── ARCHITECTURE.md               # This file
├── README.md
├── package.json
└── tsconfig.json
```

## Database Schema

### Core Tables

```
canonical_products
├── id (PK)
├── manufacturer_product_id (UK)  # Brand + model number
├── name
├── category (FK → categories)
├── brand (FK → brands)
├── specs (JSONB)                 # Category-specific attributes
├── created_at
└── updated_at

categories
├── id (PK)
├── name (gpu, cpu, motherboard, ram, ssd, hdd, psu, case, cooler, monitor, laptop)
├── slug
└── parent_id (nullable)

brands
├── id (PK)
├── name
└── slug

retailers
├── id (PK)
├── name (Amazon India, Flipkart, etc.)
├── slug
├── api_enabled (boolean)
├── affiliate_enabled (boolean)
└── priority (ordering)

retailer_products
├── id (PK)
├── canonical_product_id (FK)
├── retailer_id (FK)
├── retailer_product_id (UK)      # Retailer's SKU
├── url
├── name                        # Retailer's product title
├── current_price               # Latest known price
├── was_price                   # Previous price (for deals)
├── is_available                # Stock status
├── last_synced_at              # Timestamp of last successful sync
├── affiliate_url               # With tracking parameter
└── created_at

price_observations
├── id (PK)
├── retailer_product_id (FK)
├── price (numeric)
├── currency (INR)
├── was_price (nullable)        # MRP for discount calculation
├── is_available                # Stock at time of observation
├── source_url
└── recorded_at

price_alerts
├── id (PK)
├── user_id (nullable, FK → users)
├── retailer_product_id (FK)
├── target_price
├── current_price               # Copy for reference
├── triggered_at (nullable)
├── notified_at (nullable)
└── created_at

users
├── id (PK)
├── email (unique)
├── password_hash (nullable)    # For admin accounts
├── email_verified (boolean)
└── created_at

jobs
├── id (PK)
├── name                        # job_name: retailer_name
├── status (success, failed, running)
├── started_at
├── completed_at
├── items_processed
├── error_message (nullable)
└── metadata (JSONB)
```

## Data Flow

### Price Collection Pipeline

```
GitHub Actions Cron (every 1 hour)
         ↓
Job Scheduler (Node script)
         ↓
├─→ Amazon Adapter → API/Web → Validate → Match → Store
├─→ Flipkart Adapter → API/Web → Validate → Match → Store
├─→ MDComputers Adapter → API/Web → Validate → Match → Store
├─→ PrimeABGB Adapter → API/Web → Validate → Match → Store
└─→ Vedant Computers Adapter → API/Web → Validate → Match → Store
         ↓
Price History Update
         ↓
Deal Detection (new low, price drop > X%)
         ↓
Write to Database
```

### Product Matching Logic

1. Extract manufacturer product ID from retailer data
2. Look up by `canonical_products.manufacturer_product_id`
3. If not found, try fuzzy name matching (only for verified matches)
4. Create `retailer_products` entry linking to canonical product
5. Record `price_observations` for each retailer

### PC Builder Logic

```
User Input (Budget, Use Case, Games)
         ↓
Filter Components by Budget
         ↓
Apply Compatibility Rules:
├─ CPU socket matches motherboard
├─ RAM generation supported by motherboard
├─ GPU fits physically in case
├─ PSU provides adequate wattage + connectors
└─ Storage interface supported
         ↓
Generate Configurations (3-5 options)
├─ Best value per category
├─ Balanced performance
├─ Upgrade-friendly
         ↓
Calculate Total Price
         ↓
Display with Compatibility Status
```

## Design System Principles

### Visual Identity
- **Name:** PC Hub India (provisional)
- **Palette:**  
  - Primary: Deep blue (#1e3a8a)  
  - Accent: Tech cyan (#06b6d4)  
  - Background: Light gray (#f9fafb)  
  - Text: Slate (#1f2937)  
  - Success: Emerald (#10b981)  
  - Warning: Amber (#f59e0b)  
  - Danger: Red (#ef4444)

### Typography
- **Headings:** Inter (bold, 600-700 weight)
- **Body:** Inter (regular, 400 weight)
- **Monospace:** Fira Code (for specs)

### Spacing
- Base: 8px
- Components: 16-24px padding
- Containers: 1280px max-width

### Accessibility
- WCAG 2.1 AA minimum
- Keyboard navigation
- Semantic HTML
- ARIA labels
- Color contrast ≥ 4.5:1

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.8s |
| Time to Interactive | < 3.5s |
| Largest Contentful Paint | < 2.5s |

## Security Considerations

1. **Input Validation:** Zod schemas on all user input
2. **SQL Injection:** Parameterized queries via Drizzle ORM
3. **XSS:** React's built-in escaping + sanitization for user content
4. **CSRF:** Next.js built-in protection
5. **Rate Limiting:** IP-based throttling for API routes
6. **Secrets Management:** Environment variables, never committed
7. **Affiliate Links:** Use UTM parameters for tracking

## Future Considerations

### Phase 2 Enhancements
- User accounts
- Bookmarking
- Price alert notifications
- User reviews
- Community discussions
- Advanced benchmarking data

### Phase 3 Monetization
- Sponsored listings (transparently labeled)
- Affiliate link optimization
- Premium features (analytics, priority alerts)

## Deployment Checklist

- [ ] Create PostgreSQL database on Railway
- [ ] Set up Vercel project
- [ ] Configure environment variables
- [ ] Deploy frontend
- [ ] Configure scheduled jobs
- [ ] Set up monitoring
- [ ] Test end-to-end flow

## Cost Summary

| Component | Cost/Month | Status |
|-----------|------------|--------|
| Vercel Hosting | ₹0 | Free tier |
| PostgreSQL (Railway) | ₹0 | $5 credit |
| GitHub Actions | ₹0 | Free |
| Email (Resend) | ₹0 | 100/day |
| Monitoring | ₹0 | Free tier |
| Analytics | ₹0 | Self-hosted |
| **Total** | **₹0** | **Within budget** |