const deals = [
  {
    id: "rtx-4070-super",
    name: "MSI GeForce RTX 4070 Super 12GB GDDR6X Gaming X",
    retailer: "MDComputers",
    currentPrice: 62999,
    wasPrice: 72999,
    discount: 14,
    dropAmount: 10000,
    lowest30Days: 62999,
    isAllTimeLow: true,
  },
  {
    id: "ryzen-7-7800x3d",
    name: "AMD Ryzen 7 7800X3D 8-Core 16-Thread Desktop Processor",
    retailer: "PrimeABGB",
    currentPrice: 37999,
    wasPrice: 44999,
    discount: 16,
    dropAmount: 7000,
    lowest30Days: 37999,
    isAllTimeLow: true,
  },
  {
    id: "corsair-vengeance-32gb",
    name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz CL30",
    retailer: "Vedant Computers",
    currentPrice: 10999,
    wasPrice: 14500,
    discount: 24,
    dropAmount: 3501,
    lowest30Days: 10999,
    isAllTimeLow: false,
  },
  {
    id: "samsung-990-pro-2tb",
    name: "Samsung 990 PRO 2TB NVMe M.2 Internal SSD",
    retailer: "Amazon India",
    currentPrice: 13999,
    wasPrice: 19999,
    discount: 30,
    dropAmount: 6000,
    lowest30Days: 13999,
    isAllTimeLow: true,
  },
  {
    id: "ryzen-5-7600",
    name: "AMD Ryzen 5 7600 6-Core 12-Thread Desktop Processor",
    retailer: "MDComputers",
    currentPrice: 18999,
    wasPrice: 22999,
    discount: 17,
    dropAmount: 4000,
    lowest30Days: 18999,
    isAllTimeLow: false,
  },
  {
    id: "wd-black-sn850x",
    name: "WD Black SN850X 1TB NVMe M.2 Internal SSD",
    retailer: "MDComputers",
    currentPrice: 8499,
    wasPrice: 12999,
    discount: 35,
    dropAmount: 4500,
    lowest30Days: 8499,
    isAllTimeLow: true,
  },
];

export default function DealsPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Verified Price Drops &amp; Hardware Deals</h1>
          <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Live</span>
        </div>
        <p className="text-slate-600 text-sm mt-1">Real price drops identified across Indian retailers compared against 30-day recorded pricing in INR.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-xl transition-all space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-lg font-extrabold">-{deal.discount}% OFF</span>
                <span className="text-slate-600 font-semibold">{deal.retailer}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm line-clamp-2">{deal.name}</h3>
              {deal.isAllTimeLow && (
                <div className="inline-block bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                  All-Time Lowest Observed Price
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">₹{deal.wasPrice.toLocaleString("en-IN")}</div>
                <div className="text-xl font-extrabold text-slate-900">₹{deal.currentPrice.toLocaleString("en-IN")}</div>
                <div className="text-xs text-emerald-600 font-semibold mt-0.5">Save ₹{deal.dropAmount.toLocaleString("en-IN")}</div>
              </div>
              <a
                href={`/products/${deal.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-sm transition-colors"
              >
                View Deal
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
