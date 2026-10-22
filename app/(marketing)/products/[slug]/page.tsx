export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Mock product lookup based on slug
  const productData: Record<string, any> = {
    "rtx-4070-super": {
      name: "NVIDIA GeForce RTX 4070 Super Founders Edition 12GB GDDR6X",
      category: "Graphics Cards",
      brand: "NVIDIA / ASUS",
      mrp: 72999,
      currentLowest: 64999,
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
        { retailer: "MDComputers", price: 64999, stock: "In Stock", delivery: "Free (2-4 days)", link: "#" },
        { retailer: "PrimeABGB", price: 65499, stock: "In Stock", delivery: "₹150", link: "#" },
        { retailer: "Vedant Computers", price: 65999, stock: "In Stock", delivery: "Free", link: "#" },
        { retailer: "Amazon India", price: 67499, stock: "In Stock", delivery: "Free (Prime)", link: "#" },
        { retailer: "Flipkart", price: 68999, stock: "2 Units Left", delivery: "Free", link: "#" },
      ],
    },
    "msi-b650-tomahawk": {
      name: "MSI MAG B650 TOMAHAWK WIFI Motherboard",
      category: "Motherboards", brand: "MSI", mrp: 25999, currentLowest: 19999, lowestRetailer: "Vedant Computers",
      specs: { "Socket": "AM5", "Form Factor": "ATX", "RAM": "DDR5", "PCIe": "5.0" },
      offers: [
        { retailer: "Vedant Computers", price: 19999, stock: "In Stock", delivery: "Free", link: "#" },
        { retailer: "MDComputers", price: 20999, stock: "In Stock", delivery: "Free", link: "#" },
      ],
    },
    "rtx-4060": {
      name: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      category: "Graphics Cards", brand: "MSI / NVIDIA", mrp: 33999, currentLowest: 28499, lowestRetailer: "Flipkart",
      specs: { "VRAM": "8GB GDDR6", "CUDA Cores": "3072", "TDP": "115W" },
      offers: [
        { retailer: "Flipkart", price: 28499, stock: "In Stock", delivery: "Free", link: "#" },
        { retailer: "Amazon India", price: 29999, stock: "In Stock", delivery: "Free (Prime)", link: "#" },
      ],
    },
    "ryzen-5-7600": {
      name: "AMD Ryzen 5 7600 6-Core 12-Thread Processor",
      category: "Processors (CPU)", brand: "AMD", mrp: 22999, currentLowest: 18999, lowestRetailer: "MDComputers",
      specs: { "Cores / Threads": "6C / 12T", "Socket": "AM5", "TDP": "65W" },
      offers: [
        { retailer: "MDComputers", price: 18999, stock: "In Stock", delivery: "Free", link: "#" },
      ],
    },
    "ryzen-7-7800x3d": {
      name: "AMD Ryzen 7 7800X3D 8-Core 16-Thread Desktop Processor",
      category: "Processors (CPU)",
      brand: "AMD",
      mrp: 44999,
      currentLowest: 37999,
      lowestRetailer: "PrimeABGB",
      specs: {
        "Cores / Threads": "8 Cores / 16 Threads",
        "Socket": "AM5",
        "Base Clock": "4.2 GHz",
        "Boost Clock": "5.0 GHz",
        "L3 Cache": "96MB 3D V-Cache",
        "TDP": "120W",
        "Memory Support": "DDR5-5200",
      },
      offers: [
        { retailer: "PrimeABGB", price: 37999, stock: "In Stock", delivery: "Free", link: "#" },
        { retailer: "MDComputers", price: 38499, stock: "In Stock", delivery: "Free", link: "#" },
        { retailer: "Vedant Computers", price: 38999, stock: "In Stock", delivery: "Free", link: "#" },
        { retailer: "Amazon India", price: 39999, stock: "In Stock", delivery: "Free (Prime)", link: "#" },
      ],
    }
  };

  const product = productData[slug] || productData["rtx-4070-super"];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Breadcrumb */}
      <div className="text-xs text-slate-500 flex items-center gap-2">
        <a href="/" className="hover:text-slate-800">Home</a>
        <span>/</span>
        <a href="/products" className="hover:text-slate-800">{product.category}</a>
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Image and Specs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="bg-slate-100 border border-slate-200 rounded-xl h-72 flex flex-col items-center justify-center text-slate-500 font-mono text-xs gap-2">
              <span className="text-3xl">📦</span>
              <span>{product.name} Preview Image</span>
            </div>
            <div className="space-y-2">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-md">
                {product.category}
              </span>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{product.name}</h1>
              <p className="text-xs text-slate-500">Brand: <strong className="text-slate-800">{product.brand}</strong> | Verified Indian Retailer Stock</p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900">Technical Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(product.specs).map(([key, val]: [string, any]) => (
                <div key={key} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex justify-between">
                  <span className="text-slate-500 font-medium">{key}</span>
                  <span className="text-slate-900 font-bold">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Retailer Price Comparison */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-5 sticky top-24">
            <div>
              <div className="text-xs text-slate-500 font-medium">Lowest Available Price in India</div>
              <div className="text-3xl font-extrabold text-slate-900 mt-1">₹{product.currentLowest.toLocaleString("en-IN")}</div>
              <div className="text-xs text-slate-400 line-through mt-0.5">MRP: ₹{product.mrp.toLocaleString("en-IN")}</div>
              <div className="mt-2.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-200">
                ✓ Best Offer via {product.lowestRetailer}
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">All Retailer Offers (Live)</h3>
              <div className="space-y-2.5">
                {product.offers.map((offer: any, idx: number) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between hover:border-blue-400 transition-colors">
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{offer.retailer}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{offer.stock} • Delivery: {offer.delivery}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="font-extrabold text-slate-900 text-xs">₹{offer.price.toLocaleString("en-IN")}</div>
                      </div>
                      <a
                        href={offer.link}
                        onClick={(e) => { e.preventDefault(); alert(`Redirecting to ${offer.retailer} via affiliate tracking link...`); }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition-colors"
                      >
                        Buy Now →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-4 text-[11px] text-slate-400 italic leading-relaxed">
              * Prices updated every 2 hours from official retailer APIs and scraper nodes. We may earn an affiliate commission on purchases at no extra cost to you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
