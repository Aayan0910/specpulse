export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = {
    id: slug,
    name: "NVIDIA GeForce RTX 4070 Super Founders Edition 12GB GDDR6X",
    category: "Graphics Cards",
    brand: "NVIDIA",
    mrp: 65999,
    currentLowest: 58999,
    lowestRetailer: "MDComputers",
    specs: {
      "VRAM": "12GB GDDR6X",
      "Memory Bus": "192-bit",
      "Base Clock": "1980 MHz",
      "Boost Clock": "2475 MHz",
      "CUDA Cores": "7168",
      "TDP / Power": "220W",
      "Recommended PSU": "650W",
      "Slot Width": "2-Slot (242mm)",
    },
    offers: [
      { retailer: "MDComputers", price: 58999, stock: "In Stock", delivery: "Free", link: "#" },
      { retailer: "PrimeABGB", price: 59499, stock: "In Stock", delivery: "₹150", link: "#" },
      { retailer: "Vedant Computers", price: 59999, stock: "In Stock", delivery: "Free", link: "#" },
      { retailer: "Amazon India", price: 62499, stock: "In Stock", delivery: "Free", link: "#" },
      { retailer: "Flipkart", price: 63999, stock: "2 Left", delivery: "Free", link: "#" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-400 flex items-center gap-2">
        <a href="/" className="hover:text-slate-600">Home</a>
        <span>/</span>
        <a href="/products" className="hover:text-slate-600">Graphics Cards</a>
        <span>/</span>
        <span className="text-slate-900 font-medium truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image and Specs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <div className="bg-slate-50 border rounded-xl h-64 flex items-center justify-center text-slate-400 font-mono text-xs">
              Hardware Component Preview Image
            </div>
            <div className="mt-6 space-y-2">
              <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{product.name}</h1>
              <p className="text-xs text-slate-400">Manufacturer Part: NV-RTX-4070S-12G | Brand: {product.brand}</p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Technical Specifications</h2>
            <div className="grid grid-cols-2 gap-4 text-xs">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between">
                  <span className="text-slate-500 font-medium">{key}</span>
                  <span className="text-slate-900 font-bold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Retailer Price Comparison */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div>
              <div className="text-xs text-slate-400 font-medium">Lowest Available Price in India</div>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">₹{product.currentLowest.toLocaleString("en-IN")}</div>
              <div className="text-xs text-slate-400 line-through">MRP: ₹{product.mrp.toLocaleString("en-IN")}</div>
              <div className="mt-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-fit">
                Best Offer via {product.lowestRetailer}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">All Retailer Offers</h3>
              <div className="space-y-2">
                {product.offers.map((offer, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-between hover:border-blue-400 transition-colors">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{offer.retailer}</div>
                      <div className="text-[10px] text-slate-400">{offer.stock} • Delivery: {offer.delivery}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-bold text-slate-900 text-xs">₹{offer.price.toLocaleString("en-IN")}</div>
                      </div>
                      <a
                        href={offer.link}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition-colors"
                      >
                        Buy Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 text-[11px] text-slate-400 italic">
              * Prices updated every 2 hours. We may earn a commission from affiliate links.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
