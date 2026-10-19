export default function DealsPage() {
  const deals = [
    {
      id: "rtx-4070-super",
      name: "NVIDIA GeForce RTX 4070 Super 12GB",
      retailer: "MDComputers",
      currentPrice: 58999,
      wasPrice: 65999,
      discount: 11,
      dropAmount: 7000,
      lowest30Days: 57999,
      isAllTimeLow: false,
    },
    {
      id: "ryzen-7-7800x3d",
      name: "AMD Ryzen 7 7800X3D Desktop Processor",
      retailer: "PrimeABGB",
      currentPrice: 35499,
      wasPrice: 39999,
      discount: 11,
      dropAmount: 4500,
      lowest30Days: 35499,
      isAllTimeLow: true,
    },
    {
      id: "samsung-990-pro",
      name: "Samsung 990 PRO 2TB NVMe M.2 SSD",
      retailer: "Amazon India",
      currentPrice: 14299,
      wasPrice: 17999,
      discount: 21,
      dropAmount: 3700,
      lowest30Days: 13999,
      isAllTimeLow: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Verified Price Drops & Hardware Deals</h1>
          <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Live</span>
        </div>
        <p className="text-slate-500 text-sm mt-1">Real price drops identified across Indian retailers compared against real 30-day recorded pricing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all space-y-4">
            <div>
              <div className="flex justify-between items-center text-xs mb-3">
                <span className="bg-red-50 text-red-600 px-2.5 py-1 rounded-md font-bold">-{deal.discount}% OFF</span>
                <span className="text-slate-500 font-medium">{deal.retailer}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm hover:text-blue-600 cursor-pointer">{deal.name}</h3>
              {deal.isAllTimeLow && (
                <div className="inline-block mt-2 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded">
                  ★ All-Time Lowest Observed Price
                </div>
              )}
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 line-through">₹{deal.wasPrice.toLocaleString("en-IN")}</div>
                <div className="text-xl font-extrabold text-slate-900">₹{deal.currentPrice.toLocaleString("en-IN")}</div>
                <div className="text-[11px] text-emerald-600 font-medium">Save ₹{deal.dropAmount.toLocaleString("en-IN")}</div>
              </div>
              <a
                href={`/products/${deal.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-colors"
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
