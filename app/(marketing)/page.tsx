export default function Home() {
  const popularCategories = [
    { name: "Graphics Cards", count: "142 models", icon: "🎮", href: "/products" },
    { name: "Processors (CPU)", count: "84 models", icon: "⚡", href: "/products" },
    { name: "Motherboards", count: "110 models", icon: "🔌", href: "/products" },
    { name: "Memory (RAM)", count: "95 kits", icon: "💾", href: "/products" },
    { name: "SSDs & Storage", count: "130 models", icon: "💽", href: "/products" },
    { name: "Gaming Monitors", count: "78 models", icon: "🖥️", href: "/products" },
  ];

  const featuredDeals = [
    {
      id: "rtx-4070-super",
      name: "NVIDIA GeForce RTX 4070 Super 12GB GDDR6X",
      retailer: "MDComputers",
      currentPrice: 64999,
      wasPrice: 72999,
      discount: 11,
      rating: 4.8,
    },
    {
      id: "ryzen-7-7800x3d",
      name: "AMD Ryzen 7 7800X3D 8-Core 16-Thread Desktop Processor",
      retailer: "PrimeABGB",
      currentPrice: 37999,
      wasPrice: 44999,
      discount: 16,
      rating: 4.9,
    },
    {
      id: "corsair-vengeance-32gb",
      name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
      retailer: "Vedant Computers",
      currentPrice: 11299,
      wasPrice: 14500,
      discount: 22,
      rating: 4.7,
    },
    {
      id: "samsung-990-pro-2tb",
      name: "Samsung 990 PRO 2TB NVMe M.2 Internal SSD",
      retailer: "Amazon India",
      currentPrice: 15499,
      wasPrice: 19999,
      discount: 23,
      rating: 4.9,
    },
  ];

  const retailers = [
    { name: "Amazon India", logo: "📦", status: "Live API", color: "text-emerald-600 bg-emerald-50" },
    { name: "Flipkart", logo: "🛍️", status: "Live API", color: "text-emerald-600 bg-emerald-50" },
    { name: "MDComputers", logo: "💻", status: "Synced 10m ago", color: "text-blue-600 bg-blue-50" },
    { name: "PrimeABGB", logo: "⚡", status: "Synced 15m ago", color: "text-blue-600 bg-blue-50" },
    { name: "Vedant Computers", logo: "🔧", status: "Synced 5m ago", color: "text-blue-600 bg-blue-50" },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto max-w-5xl text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-semibold border border-cyan-400/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Live Multi-Retailer Price Tracking Across India (₹ INR)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Build Better PCs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Never Overpay.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Compare live prices across MDComputers, PrimeABGB, Vedant Computers, Amazon India & Flipkart. Track real historical lows and verify component compatibility instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/builder"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-2xl transition-all shadow-xl hover:shadow-cyan-500/25 flex items-center gap-2 text-sm"
            >
              <span>🚀 Launch Custom PC Builder</span>
            </a>
            <a
              href="/products"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-4 rounded-2xl transition-all backdrop-blur-sm text-sm"
            >
              Browse All Components →
            </a>
          </div>

          {/* Retailer status ticker */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto border-t border-slate-800/80 mt-12">
            {retailers.map((r, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-xs bg-slate-900/80 py-2.5 px-3 rounded-xl border border-slate-800 shadow-sm">
                <span>{r.logo}</span>
                <span className="font-semibold text-slate-200">{r.name}</span>
                <span className={`w-2 h-2 rounded-full ${r.status.includes('Live') ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'}`}></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Browse Hardware Categories</h2>
            <p className="text-sm text-slate-500 mt-1">Explore components with verified lowest Indian prices and stock status.</p>
          </div>
          <a href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View All Components →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCategories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className="group bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-blue-500 hover:shadow-lg transition-all text-center flex flex-col items-center justify-center space-y-3"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <div>
                <h3 className="font-bold text-slate-900 text-xs group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Verified Deals Section */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Verified Price Drops & Deals</h2>
              <span className="bg-red-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wide">Live Deals</span>
            </div>
            <p className="text-sm text-slate-500 mt-1">Real price drops compared against 30-day moving minimums in Indian Rupees.</p>
          </div>
          <a href="/deals" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            All Deals →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="relative bg-slate-100 p-6 h-40 flex items-center justify-center">
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
                    -{deal.discount}% OFF
                  </span>
                  <span className="absolute top-3 right-3 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                    {deal.retailer}
                  </span>
                  <div className="text-slate-500 text-xs font-semibold bg-white px-3 py-1.5 rounded-lg border shadow-sm">
                    ⚡ Verified Stock
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>⭐ {deal.rating} / 5.0</span>
                    <span className="text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">In Stock</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {deal.name}
                  </h3>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 line-through">₹{deal.wasPrice.toLocaleString("en-IN")}</div>
                  <div className="text-lg font-extrabold text-slate-900">₹{deal.currentPrice.toLocaleString("en-IN")}</div>
                </div>
                <a
                  href={`/products/${deal.id}`}
                  className="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all"
                >
                  Compare Prices
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PC Builder & Compatibility Banner */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-400/30">
              Interactive Configurator
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">Custom PC Builder with Instant Compatibility Check</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Select your CPU, motherboard, RAM, case, and power supply. Our automated compatibility engine validates socket support, RAM generation, physical dimensions, and PSU wattage instantly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/builder" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-lg">
                Start Building Now →
              </a>
              <a href="/compare" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3.5 rounded-xl text-xs transition-colors border border-white/20">
                Compare CPUs & GPUs
              </a>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 w-full md:w-80 space-y-4 text-xs font-mono shadow-inner">
            <div className="flex justify-between text-slate-400 border-b border-slate-800 pb-2">
              <span>Compatibility Status</span>
              <span className="text-emerald-400 font-bold">● VERIFIED</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <div className="flex justify-between">
                <span>CPU & Motherboard:</span>
                <span className="text-emerald-400">AM5 Socket Match</span>
              </div>
              <div className="flex justify-between">
                <span>RAM Clearance:</span>
                <span className="text-emerald-400">DDR5 Supported</span>
              </div>
              <div className="flex justify-between">
                <span>GPU & Case Size:</span>
                <span className="text-emerald-400">340mm Clear</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Wattage:</span>
                <span className="text-cyan-400">650W / 750W PSU</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
