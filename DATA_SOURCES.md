# Data Sources & Retailer Integration Status

## Supported Retailers

### 1. Amazon India
- **Status:** Planned
- **Website:** https://www.amazon.in
- **Affiliate Program:** Amazon Associates India
- **Integration Method:** Product Advertising API (requires approval) or RSS product feeds
- **Current Status:** Mock adapter implemented
- **Blocker:** Requires Amazon Associates India account approval (adult eligibility + business verification)

### 2. Flipkart
- **Status:** Planned
- **Website:** https://www.flipkart.com
- **Affiliate Program:** Flipkart Affiliate Program
- **Integration Method:** Affiliate API (requires approval)
- **Current Status:** Mock adapter implemented
- **Blocker:** Requires Flipkart Affiliate account approval

### 3. MDComputers
- **Status:** Planned
- **Website:** https://www.mdcomputers.in
- **Affiliate Program:** Custom affiliate (contact required)
- **Integration Method:** Web scraping (with permission) or custom feed
- **Current Status:** Mock adapter implemented
- **Blocker:** Must contact MDComputers for API access or scraping permission

### 4. PrimeABGB
- **Status:** Planned
- **Website:** https://www.primeabgb.com
- **Affiliate Program:** Custom affiliate (contact required)
- **Integration Method:** Web scraping (with permission) or custom feed
- **Current Status:** Mock adapter implemented
- **Blocker:** Must contact PrimeABGB for API access or scraping permission

### 5. Vedant Computers
- **Status:** Planned
- **Website:** https://www.vedantcomputers.com
- **Affiliate Program:** Custom affiliate (contact required)
- **Integration Method:** Web scraping (with permission) or custom feed
- **Current Status:** Mock adapter implemented
- **Blocker:** Must contact Vedant Computers for API access or scraping permission

## Price Update Schedule

**Target:** Every 2 hours (12 times per day)

**Implementation:** GitHub Actions cron job

**Workflow:**
1. Scheduled trigger every 2 hours
2. For each retailer adapter:
   - Fetch product data
   - Validate prices and SKUs
   - Match to canonical products
   - Record price observation with timestamp
   - Update retailer_products.current_price
3. Log success/failure per retailer
4. Calculate historical minimums
5. Trigger deal detection for price drops

## Current Data Status

**Demo Data:** All current prices, products, and specifications are demonstration placeholders clearly labeled as such.

**Historical Data:** No historical price data exists yet. Historical minimums will be calculated once real retailer integrations are active.

**Benchmark Data:** Gaming performance metrics are illustrative examples. Real benchmark data requires sourcing from reputable hardware review sites with proper attribution.

## Next Steps

### Immediate (User Action Required)
1. Apply for Amazon Associates India affiliate program
2. Apply for Flipkart Affiliate program
3. Contact MDComputers, PrimeABGB, and Vedant Computers for affiliate partnership and data access

### Phase 2 Development
1. Implement first authorized retailer adapter (Amazon or Flipkart, whichever approves first)
2. Set up PostgreSQL database on Neon.tech or Railway
3. Run database migrations
4. Seed canonical products for one category (GPUs)
5. Test price collection pipeline
6. Deploy to Vercel
7. Configure GitHub Actions cron for scheduled updates

### Phase 3 Expansion
1. Add remaining retailer integrations as approvals come through
2. Expand product catalog (CPUs, motherboards, RAM, SSDs)
3. Implement price alert system
4. Add real benchmark data with citations

## Data Quality & Validation

**Price Validation Rules:**
- Reject prices ≤ ₹0
- Reject prices > ₹500,000 (likely data error)
- Flag sudden price drops > 50% for manual review
- Preserve last valid price if update fails

**Product Matching:**
- Match by manufacturer part number (primary)
- Match by retailer SKU (secondary)
- Fuzzy name matching only for high-confidence matches
- Flag uncertain matches for human review

**Freshness Indicators:**
- Display "Last updated: X hours ago" on all prices
- Mark prices > 24 hours old as "stale"
- Never claim real-time pricing without real-time data
