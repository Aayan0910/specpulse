export default function Home() {
  const popularCategories = [
    { name: "Graphics Cards", count: "142 models", icon: "🎮", href: "/products?category=gpu" },
    { name: "Processors (CPU)", count: "84 models", icon: "⚡", href: "/products?category=cpu" },
    { name: "Motherboards", count: "110 models", icon: "🔌", href: "/products?category=motherboard" },
    { name: "Memory (RAM)", count: "95 kits", icon: "💾", href: "/products?category=ram" },
    { name: "SSDs & Storage", count: "130 models", icon: "💽", href: "/products?category=ssd" },
    { name: "Gaming Monitors", count: "78 models", icon: "🖥️", href: "/products?category=monitor" },
  ];

  const featuredDeals = [
    {
      id: "1",
      name: "NVIDIA GeForce RTX 4070 Super 12GB",
      retailer: "MDComputers",
      currentPrice: 58999,
      wasPrice: 65999,
      discount: 11,
      lowestPrice: 57999,
      rating: 4.8,
      image: "https://m.media-amazon.com/images/I/71wLz3kQyPL._AC_SL1500_.jpg",
    },
    {
      id: "2",
      name: "AMD Ryzen 7 7800X3D Processor",
      retailer: "PrimeABGB",
      currentPrice: 35499,
      wasPrice: 39999,
      discount: 11,
      lowestPrice: 34999,
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/61vK+jBUc3L._AC_SL1385_.jpg",
    },
    {
      id: "3",
      name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
      retailer: "Vedant Computers",
      currentPrice: 10499,
      wasPrice: 12500,
      discount: 16,
      lowestPrice: 9999,
      rating: 4.7,
      image: "https://m.media-amazon.com/images/I/61b782i9I2L._AC_SL1500_.jpg",
    },
    {
      id: "4",
      name: "Samsung 990 PRO 2TB NVMe M.2 SSD",
      retailer: "Amazon India",
      currentPrice: 14299,
      wasPrice: 17999,
      discount: 21,
      lowestPrice: 13999,
      rating: 4.9,
      image: "https://m.media-amazon.com/images/I/71qB6n8585L._AC_SL1500_.jpg",
    },
  ];

  const retailers = [
    { name: "Amazon India", logo: "📦", status: "Live", latency: "140ms" },
    { name: "Flipkart", logo: "🛍️", status: "Live", latency: "180ms" },
    { name: "MDComputers", logo: "💻", status: "Live", latency: "210ms" },
    { name: "PrimeABGB", logo: "⚡", status: "Live", latency: "190ms" },
    { name: "Vedant Computers", logo: "🔧", status: "Live", latency: "220ms" },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold border border-blue-400/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live Price Tracking Across 5 Major Indian Retailers
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Build Better PCs. <span className="text-cyan-400">Never Overpay.</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-normal">
            Compare live prices from MDComputers, PrimeABGB, Vedant, Amazon & Flipkart. Track historical lows, verify compatibility, and configure your dream rig in INR.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/builder"
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/25 flex items-center gap-2"
            >
              <span>🚀 Launch PC Builder</span>
            </a>
            <a
              href="/products"
              className="bg-white/10 hover:bg-white/25 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-xl transition-all backdrop-blur-sm"
            >
              Browse All Components
            </a>
          </div>

          {/* Retailer status ticker */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto border-t border-blue-700/50 mt-12">
            {retailers.map((r, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-xs bg-blue-950/60 py-2 px-3 rounded-lg border border-blue-800/40">
                <span>{r.logo}</span>
                <span className="font-medium text-slate-200">{r.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
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
            <p className="text-sm text-slate-500 mt-1">Explore components with detailed specs, verified prices, and stock status.</p>
          </div>
          <a href="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularCategories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className="group bg-white p-6 rounded-2xl border border-slate-200/80 hover:border-blue-500 hover:shadow-md transition-all text-center flex flex-col items-center justify-center space-y-3"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">{cat.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{cat.count}</p>
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
              <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">Live Deals</span>
            </div>
            <p className="text-sm text-slate-500 mt-1">Real discounts compared against 30-day historical averages in Indian Rupees.</p>
          </div>
          <a href="/deals" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            All Deals →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDeals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative bg-slate-100 p-4 h-48 flex items-center justify-center">
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                    -{deal.discount}% OFF
                  </span>
                  <span className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-medium px-2.5 py-1 rounded-lg">
                    {deal.retailer}
                  </span>
                  <div className="text-slate-400 text-xs font-mono uppercase bg-white/80 px-3 py-1 rounded border">
                    Demo Hardware Image
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>⭐ {deal.rating} / 5.0</span>
                    <span className="text-emerald-600 font-medium">In Stock</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm line-clamp-2 hover:text-blue-600 cursor-pointer">
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
                  className="bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors"
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
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-4 max-w-xl">
            <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-400/30">
              Interactive Tool
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight">Advanced PC Builder with Instant Compatibility Check</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Select your CPU, motherboard, RAM, case, and power supply. Our automated compatibility engine validates socket support, RAM generation, physical dimensions, and PSU wattage instantly.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/builder" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-lg">
                Start Building Now →
              </a>
              <a href="/compare/gpu" className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-xl text-sm transition-colors border border-white/20">
                Compare GPUs
              </a>
            </div>
          </div>
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 w-full md:w-80 space-y-4 text-xs font-mono">
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
                <span className="text-cyan-400">550W / 750W PSU</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
