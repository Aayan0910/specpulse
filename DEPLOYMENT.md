# Deployment Guide

## Prerequisites

- GitHub account
- Vercel account (free tier)
- Neon.tech or Railway account (free tier)
- Node.js 18+ installed locally

## Step 1: Database Setup (Neon.tech)

1. Go to https://neon.tech and sign up for a free account
2. Create a new project named `pchub-india-db`
3. Copy the connection string (starts with `postgresql://...`)
4. Store it securely — you'll add it to Vercel environment variables

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to https://vercel.com and sign in
2. Click "Add New Project"
3. Import your GitHub repository (you'll need to push this project to GitHub first)
4. Configure the project:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Add environment variables:
   - `DATABASE_URL` = your Neon connection string
   - `NEXT_PUBLIC_APP_NAME` = `SpecPulse`
   - `NEXT_PUBLIC_APP_URL` = (leave blank, Vercel will auto-generate)
6. Click "Deploy"

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm project settings
# - Add environment variables when prompted
```

## Step 3: Push Database Schema

Once your database is connected:

```bash
# Generate migration files
npm run db:generate

# Push schema to database
npm run db:push
```

## Step 4: Seed Initial Data (Optional)

You can manually add demo products via Drizzle Studio:

```bash
npm run db:studio
```

This opens a local web interface to inspect and edit your database.

## Step 5: Configure GitHub Actions for Price Updates

1. In your GitHub repository, go to Settings → Secrets and variables → Actions
2. Add repository secrets:
   - `DATABASE_URL` = your Neon connection string
   - `AMAZON_AFFILIATE_TAG` = (when available)
   - `FLIPKART_AFFILIATE_ID` = (when available)

3. Create `.github/workflows/price-sync.yml`:

```yaml
name: Price Sync

on:
  schedule:
    - cron: '0 */2 * * *'  # Every 2 hours
  workflow_dispatch:        # Manual trigger

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run price:sync
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
```

(Note: The `price:sync` script needs to be implemented in Phase 2)

## Step 6: Verify Deployment

1. Visit your Vercel deployment URL (e.g., `pchub-india.vercel.app`)
2. Verify all pages load correctly
3. Check browser console for errors
4. Test navigation and product filtering

## Custom Domain (Optional)

If you purchase a domain later:

1. Buy a `.in` domain from Namecheap or GoDaddy (~₹600/year)
2. In Vercel dashboard, go to your project → Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Wait 24-48 hours for DNS propagation

## Monitoring

### Free Tools:
- **Vercel Analytics:** Built-in, zero cost
- **UptimeRobot:** Free tier, 5-minute checks
- **Better Stack:** Free tier, 10 monitors

### Setup UptimeRobot:
1. Go to https://uptimerobot.com
2. Add new monitor
3. Monitor Type: HTTP(s)
4. URL: Your Vercel deployment URL
5. Monitoring Interval: 5 minutes

## Troubleshooting

### Build fails on Vercel
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure TypeScript has no errors locally: `npm run build`

### Database connection fails
- Verify `DATABASE_URL` is correctly set in Vercel environment variables
- Check that Neon database is active (free tier may pause after inactivity)
- Test connection locally: `npm run db:studio`

### Pages show 500 errors
- Check Vercel function logs
- Verify all environment variables are set
- Ensure database schema is pushed: `npm run db:push`

## Cost Summary

| Service | Monthly Cost |
|---------|--------------|
| Vercel Hosting | ₹0 |
| Neon PostgreSQL | ₹0 |
| GitHub Actions | ₹0 |
| UptimeRobot | ₹0 |
| **Total** | **₹0** |

All within the ₹100/month budget ceiling.
