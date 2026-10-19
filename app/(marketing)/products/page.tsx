export default function ProductsPage() {
  const categories = [
    { label: "All Components", count: 640, active: true },
    { label: "Graphics Cards", count: 142, active: false },
    { label: "Processors (CPU)", count: 84, active: false },
    { label: "Motherboards", count: 110, active: false },
    { label: "Memory (RAM)", count: 95, active: false },
    { label: "SSDs & Storage", count: 130, active: false },
    { label: "Gaming Monitors", count: 78, active: false },
  ];

  const products = [
    {
      id: "rtx-4070-super",
      name: "NVIDIA GeForce RTX 4070 Super 12GB GDDR6X",
      category: "Graphics Cards",
      brand: "NVIDIA / ASUS",
      price: 58999,
      mrp: 65999,
      retailer: "MDComputers",
      inStock: true,
      rating: 4.8,
    },
    {
      id: "ryzen-7-7800x3d",
      name: "AMD Ryzen 7 7800X3D 8-Core 16-Thread Desktop Processor",
      category: "Processors",
      brand: "AMD",
      price: 35499,
      mrp: 39999,
      retailer: "PrimeABGB",
      inStock: true,
      rating: 4.9,
    },
    {
      id: "corsair-vengeance-32gb",
      name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz CL30",
      category: "Memory",
      brand: "Corsair",
      price: 10499,
      mrp: 12500,
      retailer: "Vedant Computers",
      inStock: true,
      rating: 4.7,
    },
    {
      id: "samsung-990-pro-2tb",
      name: "Samsung 990 PRO 2TB NVMe M.2 Internal SSD",
      category: "Storage",
      brand: "Samsung",
      price: 14299,
      mrp: 17999,
      retailer: "Amazon India",
      inStock: true,
      rating: 4.9,
    },
    {
      id: "rtx-4060",
      name: "NVIDIA GeForce RTX 4060 8GB GDDR6",
      category: "Graphics Cards",
      brand: "MSI / NVIDIA",
      price: 28999,
      mrp: 31999,
      retailer: "Flipkart",
      inStock: true,
      rating: 4.5,
    },
    {
      id: "intel-i5-13600k",
      name: "Intel Core i5-13600K 14-Core Desktop Processor",
      category: "Processors",
      brand: "Intel",
      price: 26999,
      mrp: 30999,
      retailer: "MDComputers",
      inStock: true,
      rating: 4.6,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">PC Hardware Catalog & Price Comparison</h1>
        <p className="text-slate-500 text-sm mt-1">Comparing live prices across MDComputers, PrimeABGB, Vedant, Amazon India & Flipkart.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-slate-200 h-fit">
          <div>
            <h3 className="font-semibold text-slate-900 text-sm mb-3">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex justify-between items-center transition-colors ${
                    cat.active ? "bg-blue-50 text-blue-600 font-semibold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-slate-400">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold text-slate-900 text-sm mb-3">Price Range (₹)</h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input type="number" placeholder="Min" defaultValue={0} className="w-full text-xs p-2 rounded-lg border bg-slate-50" />
                <input type="number" placeholder="Max" defaultValue={200000} className="w-full text-xs p-2 rounded-lg border bg-slate-50" />
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold text-slate-900 text-sm mb-3">Retailer</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Amazon India</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Flipkart</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> MDComputers</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> PrimeABGB</label>
              <label className="flex items-center gap-2"><input type="checkbox" defaultChecked /> Vedant Computers</label>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-slate-200 text-xs text-slate-500">
            <span>Showing <strong className="text-slate-900">6</strong> of <strong className="text-slate-900">640</strong> components</span>
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="bg-slate-50 border rounded-lg px-2 py-1 text-slate-900 font-medium focus:outline-none">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Discount</option>
                <option>Customer Rating</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-lg transition-all">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-blue-50 text-blue-600 px-2.5 py-1 rounded-md font-medium">{p.category}</span>
                    <span className="text-emerald-600 font-medium">● {p.retailer}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm line-clamp-2 hover:text-blue-600 cursor-pointer">
                    {p.name}
                  </h3>
                  <div className="text-xs text-slate-400">Brand: {p.brand}</div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">₹{p.mrp.toLocaleString("en-IN")}</div>
                    <div className="text-lg font-extrabold text-slate-900">₹{p.price.toLocaleString("en-IN")}</div>
                  </div>
                  <a
                    href={`/products/${p.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    Compare
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
