"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price-low");
  const [selectedRetailers, setSelectedRetailers] = useState({
    amazon: true,
    flipkart: true,
    mdcomputers: true,
    primeabgb: true,
    vedant: true,
  });

  const categories = [
    { label: "All", count: 48 },
    { label: "Graphics Cards", count: 24 },
    { label: "Processors (CPU)", count: 18 },
    { label: "Motherboards", count: 22 },
    { label: "Memory (RAM)", count: 15 },
    { label: "SSDs & Storage", count: 20 },
    { label: "Gaming Monitors", count: 12 },
  ];

  const products = [
    { id: "rtx-4070-super", name: "MSI GeForce RTX 4070 Super 12GB GDDR6X Gaming X", category: "Graphics Cards", brand: "MSI", price: 62999, mrp: 72999, retailer: "MDComputers", inStock: true, rating: 4.8, specs: { vram: "12GB", type: "GDDR6X" } },
    { id: "rtx-4070-super-asus", name: "ASUS ROG Strix GeForce RTX 4070 Super 12GB", category: "Graphics Cards", brand: "ASUS", price: 64999, mrp: 74999, retailer: "Amazon India", inStock: true, rating: 4.9, specs: { vram: "12GB", type: "GDDR6X" } },
    { id: "rtx-4070-super-gigabyte", name: "Gigabyte GeForce RTX 4070 Super 12GB Eagle", category: "Graphics Cards", brand: "Gigabyte", price: 63499, mrp: 72999, retailer: "Flipkart", inStock: true, rating: 4.7, specs: { vram: "12GB", type: "GDDR6X" } },
    { id: "ryzen-7-7800x3d", name: "AMD Ryzen 7 7800X3D 8-Core 16-Thread Desktop Processor", category: "Processors (CPU)", brand: "AMD", price: 37999, mrp: 44999, retailer: "PrimeABGB", inStock: true, rating: 4.9, specs: { cores: "8 Cores", socket: "AM5" } },
    { id: "ryzen-7-7800x3d-amd", name: "AMD Ryzen 7 7800X3D (Boxed Processor)", category: "Processors (CPU)", brand: "AMD", price: 38499, mrp: 45999, retailer: "Amazon India", inStock: true, rating: 4.9, specs: { cores: "8 Cores", socket: "AM5" } },
    { id: "ryzen-5-7600", name: "AMD Ryzen 5 7600 6-Core 12-Thread Desktop Processor", category: "Processors (CPU)", brand: "AMD", price: 18999, mrp: 22999, retailer: "MDComputers", inStock: true, rating: 4.8, specs: { cores: "6 Cores", socket: "AM5" } },
    { id: "intel-i5-14600k", name: "Intel Core i5-14600K 14-Core (6P+8E) Desktop Processor", category: "Processors (CPU)", brand: "Intel", price: 26499, mrp: 32999, retailer: "Flipkart", inStock: true, rating: 4.6, specs: { cores: "14 Cores", socket: "LGA1700" } },
    { id: "intel-i5-14600k-boxed", name: "Intel Core i5-14600K Boxed Processor", category: "Processors (CPU)", brand: "Intel", price: 27999, mrp: 34999, retailer: "Amazon India", inStock: true, rating: 4.6, specs: { cores: "14 Cores", socket: "LGA1700" } },
    { id: "intel-i7-14700k", name: "Intel Core i7-14700K 20-Core (8P+12E) Processor", category: "Processors (CPU)", brand: "Intel", price: 36499, mrp: 44999, retailer: "Vedant Computers", inStock: true, rating: 4.7, specs: { cores: "20 Cores", socket: "LGA1700" } },
    { id: "corsair-vengeance-32gb", name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz CL30", category: "Memory (RAM)", brand: "Corsair", price: 10999, mrp: 14500, retailer: "Vedant Computers", inStock: true, rating: 4.7, specs: { capacity: "32GB", speed: "6000MHz" } },
    { id: "corsair-vengeance-16gb", name: "Corsair Vengeance RGB 16GB (2x8GB) DDR5 6000MHz CL30", category: "Memory (RAM)", brand: "Corsair", price: 6499, mrp: 9500, retailer: "Amazon India", inStock: true, rating: 4.6, specs: { capacity: "16GB", speed: "6000MHz" } },
    { id: "gskill-32gb", name: "G.Skill Trident Z5 Neo RGB 32GB DDR5 6000MHz", category: "Memory (RAM)", brand: "G.Skill", price: 12299, mrp: 16999, retailer: "PrimeABGB", inStock: true, rating: 4.8, specs: { capacity: "32GB", speed: "6000MHz" } },
    { id: "teamgroup-16gb", name: "TeamGroup T-Force Delta RGB 16GB DDR5 6000MHz", category: "Memory (RAM)", brand: "TeamGroup", price: 5999, mrp: 8999, retailer: "Flipkart", inStock: true, rating: 4.5, specs: { capacity: "16GB", speed: "6000MHz" } },
    { id: "samsung-990-pro-2tb", name: "Samsung 990 PRO 2TB NVMe M.2 Internal SSD", category: "SSDs & Storage", brand: "Samsung", price: 13999, mrp: 19999, retailer: "Amazon India", inStock: true, rating: 4.9, specs: { capacity: "2TB", read: "7450 MB/s" } },
    { id: "samsung-990-pro-1tb", name: "Samsung 990 PRO 1TB NVMe M.2 Internal SSD", category: "SSDs & Storage", brand: "Samsung", price: 9499, mrp: 13999, retailer: "Amazon India", inStock: true, rating: 4.8, specs: { capacity: "1TB", read: "7450 MB/s" } },
    { id: "wd-black-sn850x", name: "WD Black SN850X 1TB NVMe M.2 Internal SSD", category: "SSDs & Storage", brand: "Western Digital", price: 8499, mrp: 12999, retailer: "MDComputers", inStock: true, rating: 4.7, specs: { capacity: "1TB", read: "7300 MB/s" } },
    { id: "crucial-t500", name: "Crucial T500 2TB Portabe NVMe SSD", category: "SSDs & Storage", brand: "Crucial", price: 11999, mrp: 16999, retailer: "Flipkart", inStock: true, rating: 4.6, specs: { capacity: "2TB", read: "5150 MB/s" } },
    { id: "msi-b650-tomahawk", name: "MSI MAG B650 TOMAHAWK WIFI Motherboard", category: "Motherboards", brand: "MSI", price: 19999, mrp: 25999, retailer: "Vedant Computers", inStock: true, rating: 4.8, specs: { socket: "AM5", form: "ATX" } },
    { id: "msi-b650-gaming-plus", name: "MSI MAG B650M GAMING PLUS WIFI Motherboard", category: "Motherboards", brand: "MSI", price: 16999, mrp: 21999, retailer: "MDComputers", inStock: true, rating: 4.7, specs: { socket: "AM5", form: "Micro-ATX" } },
    { id: "gigabyte-b650-elite", name: "Gigabyte B650 AORUS ELITE AX Motherboard", category: "Motherboards", brand: "Gigabyte", price: 17499, mrp: 22999, retailer: "PrimeABGB", inStock: true, rating: 4.7, specs: { socket: "AM5", form: "ATX" } },
    { id: "asus-rog-strix-b650", name: "ASUS ROG Strix B650E-F Gaming WiFi Motherboard", category: "Motherboards", brand: "ASUS", price: 23999, mrp: 29999, retailer: "Amazon India", inStock: true, rating: 4.9, specs: { socket: "AM5", form: "ATX" } },
    { id: "nzxt-h5-flow", name: "NZXT H5 Flow RGB Compact ATX Mid-Tower Case", category: "Gaming Monitors", brand: "NZXT", price: 8999, mrp: 11999, retailer: "PrimeABGB", inStock: true, rating: 4.7, specs: { type: "Mid-Tower", fans: "3x RGB Included" } },
    { id: "nzxt-h7-flow", name: "NZXT H7 Flow RGB Full Tower Case", category: "Gaming Monitors", brand: "NZXT", price: 13999, mrp: 18999, retailer: "MDComputers", inStock: true, rating: 4.8, specs: { type: "Full Tower", fans: "4x RGB Included" } },
    { id: "lian-li-lancool", name: "Lian Li Lancool 216 RGB Mid-Tower Case", category: "Gaming Monitors", brand: "Lian Li", price: 7999, mrp: 10999, retailer: "Vedant Computers", inStock: true, rating: 4.6, specs: { type: "Mid-Tower", fans: "3x Included" } },
    { id: "corair-rm750e", name: "Corsair RM750e 80+ Gold Fully Modular PSU", category: "SSDs & Storage", brand: "Corsair", price: 9499, mrp: 11999, retailer: "Flipkart", inStock: true, rating: 4.8, specs: { wattage: "750W", modular: "Fully" } },
    { id: "corsair-rm850x", name: "Corsair RM850x 80+ Gold Fully Modular PSU", category: "SSDs & Storage", brand: "Corsair", price: 10499, mrp: 13499, retailer: "PrimeABGB", inStock: true, rating: 4.9, specs: { wattage: "850W", modular: "Fully" } },
    { id: "msi-a850gl", name: "MSI MAG A850GL PCIE5 850W Gold PSU", category: "SSDs & Storage", brand: "MSI", price: 10999, mrp: 14999, retailer: "MDComputers", inStock: true, rating: 4.7, specs: { wattage: "850W", modular: "Fully" } },
    { id: "seasonic-focus-750", name: "Seasonic Focus GX-750 80+ Gold PSU", category: "SSDs & Storage", brand: "Seasonic", price: 11499, mrp: 14999, retailer: "Amazon India", inStock: true, rating: 4.9, specs: { wattage: "750W", modular: "Fully" } },
    { id: "hyperx-fury-16gb", name: "HyperX Fury RGB 16GB DDR5 5600MHz", category: "Memory (RAM)", brand: "HP", price: 6999, mrp: 9999, retailer: "Flipkart", inStock: true, rating: 4.5, specs: { capacity: "16GB", speed: "5600MHz" } },
    { id: "micron-1660", name: "MSI GeForce RTX 4060 8GB Graphics Card", category: "Graphics Cards", brand: "MSI", price: 28499, mrp: 33999, retailer: "Flipkart", inStock: true, rating: 4.5, specs: { vram: "8GB", type: "GDDR6" } },
    { id: "amd-7700-x3d", name: "AMD Ryzen 9 7900X3D 12-Core 24-Thread Processor", category: "Processors (CPU)", brand: "AMD", price: 54999, mrp: 64999, retailer: "PrimeABGB", inStock: true, rating: 4.9, specs: { cores: "12 Cores", socket: "AM5" } },
    { id: "rtx-4060-ax", name: "ASUS ROG Strix GeForce RTX 4060 8GB", category: "Graphics Cards", brand: "ASUS", price: 31999, mrp: 36999, retailer: "Amazon India", inStock: true, rating: 4.6, specs: { vram: "8GB", type: "GDDR6" } },
    { id: "sapphire-rx-7800", name: "Sapphire Pulse AMD Radeon RX 7800 XT 16GB", category: "Graphics Cards", brand: "Sapphire", price: 48999, mrp: 57999, retailer: "PrimeABGB", inStock: true, rating: 4.7, specs: { vram: "16GB", type: "GDDR6" } },
    { id: "gigabyte-rx-7800", name: "Gigabyte Radeon RX 7800 XT 16GB Windforce", category: "Graphics Cards", brand: "Gigabyte", price: 47999, mrp: 55999, retailer: "MDComputers", inStock: true, rating: 4.6, specs: { vram: "16GB", type: "GDDR6" } },
    { id: "intel-i9-14900k", name: "Intel Core i9-14900K 24-Core Processor", category: "Processors (CPU)", brand: "Intel", price: 59999, mrp: 72999, retailer: "Vedant Computers", inStock: true, rating: 4.8, specs: { cores: "24 Cores", socket: "LGA1700" } },
    { id: "msi-b760-gaming", name: "MSI PRO B760M-P WIFI DDR5 Motherboard", category: "Motherboards", brand: "MSI", price: 12999, mrp: 16999, retailer: "Flipkart", inStock: true, rating: 4.5, specs: { socket: "LGA1700", form: "Micro-ATX" } },
    { id: "patriot-32gb", name: "Patriot Viper Steel 32GB DDR5 6000MHz", category: "Memory (RAM)", brand: "Patriot", price: 11499, mrp: 15999, retailer: "PrimeABGB", inStock: true, rating: 4.7, specs: { capacity: "32GB", speed: "6000MHz" } },
    { id: "kingston-nv2", name: "Kingston NV2 1TB NVMe SSD", category: "SSDs & Storage", brand: "Kingston", price: 5999, mrp: 8999, retailer: "Amazon India", inStock: true, rating: 4.4, specs: { capacity: "1TB", read: "5000 MB/s" } },
    { id: "seagate-barra", name: "Seagate BarraCuda 1TB HDD", category: "SSDs & Storage", brand: "Seagate", price: 3499, mrp: 5499, retailer: "Flipkart", inStock: true, rating: 4.5, specs: { capacity: "1TB", speed: "7200 RPM" } },
    { id: "thermaltake-650w", name: "Thermaltake Toughpower GF1 650W PSU", category: "SSDs & Storage", brand: "Thermaltake", price: 7499, mrp: 9999, retailer: "Vedant Computers", inStock: true, rating: 4.5, specs: { wattage: "650W", modular: "None" } },
    { id: "deepcool-ak620", name: "DeepCool AK620 Digital CPU Cooler", category: "SSDs & Storage", brand: "DeepCool", price: 3999, mrp: 5999, retailer: "MDComputers", inStock: true, rating: 4.4, specs: { type: "Air Cooler" } },
    { id: "nzxt-kraken-240", name: "NZXT Kraken 240 RGB Liquid CPU Cooler", category: "SSDs & Storage", brand: "NZXT", price: 11999, mrp: 15999, retailer: "Amazon India", inStock: true, rating: 4.8, specs: { type: "Liquid Cooler" } },
  ];

  const filteredProducts = products.filter(p => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase()) && !p.brand.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "discount") return (b.mrp - b.price) / b.mrp - (a.mrp - a.price) / a.mrp;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">PC Hardware Price Comparison in India</h1>
        <p className="text-slate-600 text-sm mt-1">
          Compare verified lowest prices across Indian retailers: <span className="font-semibold text-slate-900">MDComputers, PrimeABGB, Vedant Computers, Amazon India & Flipkart</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit">
          <div>
            <h3 className="font-bold text-slate-900 text-sm mb-3">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex justify-between items-center transition-colors ${
                    selectedCategory === cat.label ? "bg-blue-600 text-white font-semibold shadow-sm" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={selectedCategory === cat.label ? "text-blue-100" : "text-slate-400"}>({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-bold text-slate-900 text-sm mb-3">Retailer Sources</h3>
            <div className="space-y-2 text-xs text-slate-700">
              {Object.entries(selectedRetailers).map(([key, val]) => (
                <label key={key} className="flex items-center gap-2.5 cursor-pointer capitalize">
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={(e) => setSelectedRetailers({...selectedRetailers, [key]: e.target.checked})}
                    className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <span>{key === 'mdcomputers' ? 'MDComputers' : key === 'primeabgb' ? 'PrimeABGB' : key === 'vedant' ? 'Vedant Computers' : key}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 text-xs shadow-sm">
            <div className="w-full sm:w-auto flex-1">
              <input
                type="text"
                placeholder="Search components (e.g. RTX 4070, Ryzen 7, DDR5)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-slate-500 whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Highest Discount</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          <div className="text-xs text-slate-500 px-1">
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> components matching criteria
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const discountPercent = Math.round(((p.mrp - p.price) / p.mrp) * 100);
              return (
                <div key={p.id} className="bg-white rounded-2xl border border-slate-200/90 p-5 flex flex-col justify-between hover:shadow-xl transition-all duration-200 group">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="bg-blue-50 text-blue-700 font-semibold px-2.5 py-1 rounded-lg">
                        {p.category}
                      </span>
                      <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-md">
                        {p.retailer}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {p.name}
                    </h3>

                    <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
                      <span>Brand: <strong className="text-slate-800">{p.brand}</strong></span>
                      <span>⭐ {p.rating}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-slate-400 line-through">₹{p.mrp.toLocaleString("en-IN")}</span>
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">-{discountPercent}%</span>
                      </div>
                      <div className="text-lg font-extrabold text-slate-900">₹{p.price.toLocaleString("en-IN")}</div>
                    </div>
                    <a
                      href={`/products/${p.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow"
                    >
                      Compare Prices
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
