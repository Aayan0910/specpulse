import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpecPulse — India's Premier PC Hardware Price & Performance Hub",
  description: "Compare live prices across Indian retailers, track price history, check PC part compatibility, and build your dream PC within budget.",
  keywords: ["PC parts India", "GPU price comparison India", "PC builder", "MDComputers", "PrimeABGB", "Vedant Computers", "Amazon India", "Flipkart"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-slate-50/50">
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <a href="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm">SP</span>
                  <span>SpecPulse</span>
                </a>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                  <a href="/products" className="hover:text-blue-600 transition-colors">Components</a>
                  <a href="/compare" className="hover:text-blue-600 transition-colors">CPU / GPU Compare</a>
                  <a href="/builder" className="hover:text-blue-600 transition-colors">PC Builder</a>
                  <a href="/deals" className="hover:text-blue-600 transition-colors">Price Drops</a>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 w-64 border">
                  <svg className="w-4 h-4 text-slate-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search Ryzen, RTX 4070, RAM..."
                    className="bg-transparent text-sm focus:outline-none w-full"
                  />
                </div>
                <a href="/builder" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
                  Build PC
                </a>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t bg-white text-slate-600 text-sm py-12 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center gap-2 font-bold text-lg text-blue-600 mb-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs">SP</span>
                  <span>SpecPulse</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  India&apos;s trusted destination for PC hardware price comparison, historical tracking, compatibility checks, and performance benchmarks.
                </p>
                <p className="text-slate-400 text-xs">
                  © 2026 SpecPulse India. All rights reserved.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider">Hardware Categories</h3>
                <ul className="space-y-2 text-xs">
                  <li><a href="/products?category=gpu" className="hover:text-blue-600">Graphics Cards (GPUs)</a></li>
                  <li><a href="/products?category=cpu" className="hover:text-blue-600">Processors (CPUs)</a></li>
                  <li><a href="/products?category=motherboard" className="hover:text-blue-600">Motherboards</a></li>
                  <li><a href="/products?category=ram" className="hover:text-blue-600">Memory (RAM)</a></li>
                  <li><a href="/products?category=ssd" className="hover:text-blue-600">Storage (SSDs & HDDs)</a></li>
                  <li><a href="/products?category=monitor" className="hover:text-blue-600">Gaming Monitors</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider">Tools & Comparisons</h3>
                <ul className="space-y-2 text-xs">
                  <li><a href="/builder" className="hover:text-blue-600">PC Configurator & Compatibility</a></li>
                  <li><a href="/compare/gpu" className="hover:text-blue-600">GPU Benchmark Comparison</a></li>
                  <li><a href="/compare/cpu" className="hover:text-blue-600">CPU Performance Matrix</a></li>
                  <li><a href="/deals" className="hover:text-blue-600">Verified Price Drops & Deals</a></li>
                  <li><a href="/bottleneck" className="hover:text-blue-600">Bottleneck Estimator</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3 text-xs uppercase tracking-wider">Retailers & Transparency</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">
                  We track live pricing from Amazon India, Flipkart, MDComputers, PrimeABGB, and Vedant Computers. Prices update every 2 hours.
                </p>
                <p className="text-slate-400 text-xs italic">
                  Affiliate Disclosure: We may earn a commission when you purchase through our links at no additional cost to you.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
