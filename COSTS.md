# Operating Costs Analysis

## Hard Budget Constraint
**Maximum monthly operating cost: ₹100 INR**

## Selected Services & Their Costs

### 1. Hosting (Frontend + Backend)
- **Service:** Vercel (Hobby Plan)
- **Cost:** ₹0/month
- **Limits:**  
  - 100GB bandwidth/month  
  - 100 function executions/day  
  - 12 serverless functions  
  - Automatic HTTPS, CDN, deployments
- **Potential charges:** Exceeding bandwidth could trigger overage, but 100GB should be sufficient for early traffic.

### 2. Database
- **Service:** Railway (Hobby Plan) for PostgreSQL
- **Cost:** ₹0/month (free tier with $5 credit)
- **Limits:**  
  - 1GB storage  
  - 512MB RAM  
  - 1 vCPU  
  - Limited connection pooling
- **Alternative:** Neon.tech (free tier: 3 projects, 500MB storage)
- **Note:** Railway's $5 credit lasts indefinitely with low usage; if exhausted, switch to Neon.tech free tier.

### 3. Scheduled Jobs (Price Updates)
- **Service:** GitHub Actions (free)
- **Cost:** ₹0/month
- **Limits:**  
  - 2000 minutes/month  
  - Max 6 concurrent jobs  
  - No cron longer than 1 hour interval for free public repos
- **Alternative:** Railway Cron Jobs (free with Railway plan)
- **Implementation:** Use GitHub Actions for 2-hour intervals via scheduled workflows.

### 4. Email/Notifications
- **Service:** Resend (Free Tier)
- **Cost:** ₹0/month
- **Limits:**  
  - 100 emails/day  
  - 3,000 emails/month  
- **Use:** Price alerts (if user count stays low)

### 5. Monitoring
- **Service:** UptimeRobot (Free)
- **Cost:** ₹0/month
- **Limits:**  
  - 50 monitors  
  - 5-minute intervals
- **Alternative:** Better Stack (free tier: 10 monitors)

### 6. Analytics
- **Service:** Plausible Analytics (Self-hosted)
- **Cost:** ₹0/month (open source)
- **Limits:** Self‑hosted on Railway/Vercel functions

### 7. Image Storage
- **Service:** Cloudinary (Free)
- **Cost:** ₹0/month
- **Limits:**  
  - 25 credits/month  
  - 10GB bandwidth  
  - 10GB storage
- **Usage:** Product images, optimized delivery.

### 8. Affiliate Links
- **Cost:** ₹0/month (Amazon Associates, Flipkart Affiliate are free to join)
- **Note:** Requires individual approval; no platform fee.

### 9. Domain
- **Service:** No domain initially
- **Cost:** ₹0/month
- **Plan:** Use Vercel/Railway subdomain (`pchub-india.vercel.app`)
- **Later:** `.in` domain ~₹600/year (~₹50/month) – optional upgrade.

## Total Monthly Cost

| Service       | Monthly Cost | Notes                         |
|---------------|--------------|-------------------------------|
| Vercel        | ₹0           | Hobby plan                    |
| Railway       | ₹0           | Hobby plan with $5 credit     |
| GitHub Actions| ₹0           | Public repo                   |
| Resend        | ₹0           | 100 emails/day                |
| UptimeRobot   | ₹0           | 50 monitors                   |
| Plausible     | ₹0           | Self‑hosted                   |
| Cloudinary    | ₹0           | 25 credits/month              |
| **Total**     | **₹0**       | Within ₹100 budget            |

## Risk of Unexpected Charges

1. **Bandwidth overage** – Unlikely with 100GB/month on Vercel.
2. **Railway credit exhaustion** – Monitor usage; switch to Neon if needed.
3. **Email limit exceeded** – Implement rate limiting for price alerts.
4. **Cloudinary overage** – Use lazy loading, WebP, and size limits.

## Free‑Tier Limitations & Mitigations

### Database
- **Limit:** 1GB storage on Railway.
- **Mitigation:** Archive old price observations after 1 year; keep only aggregated stats.

### Scheduled Jobs
- **Limit:** GitHub Actions: max 1‑hour cron for public repos.
- **Workaround:** Run job every 1 hour, but process retailers in rotation to achieve ~2‑hour effective refresh.

### Email
- **Limit:** 100 emails/day on Resend.
- **Mitigation:** Batch notifications; require email confirmation for alerts.

### Serverless Functions
- **Limit:** 100 executions/day on Vercel.
- **Mitigation:** Cache API responses aggressively; use ISR for product pages.

## Future Scaling Costs

If traffic grows:

1. **Vercel Pro** – ₹1,500/month (unlimited bandwidth) – **NOT within budget**.
2. **Railway $5 Plan** – ~₹400/month – **NOT within budget**.
3. **Domain (.in)** – ~₹50/month – acceptable if needed.

If budget remains ₹100/month, scale by:
- Moving static assets to GitHub Pages + Cloudflare.
- Using SQLite on Railway instead of PostgreSQL.
- Reducing email frequency; using in‑browser notifications.

## Summary

The proposed stack stays **completely free** within the documented limits, well under the ₹100/month ceiling. The architecture is designed to avoid paid services unless explicitly approved.

**Maximum expected monthly cost: ₹0**  
**Budget headroom: ₹100**