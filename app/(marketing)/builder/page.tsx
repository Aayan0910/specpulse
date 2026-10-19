export default function PCBuilderPage() {
  const slots = [
    { name: "Processor (CPU)", item: "AMD Ryzen 7 7800X3D", price: 35499, retailer: "PrimeABGB", icon: "⚡" },
    { name: "CPU Cooler", item: "DeepCool AK620 Digital", price: 5499, retailer: "MDComputers", icon: "❄️" },
    { name: "Motherboard", item: "MSI B650 Tomahawk WiFi", price: 18999, retailer: "Vedant Computers", icon: "🔌" },
    { name: "Memory (RAM)", item: "Corsair Vengeance 32GB DDR5 6000MHz", price: 10499, retailer: "Vedant Computers", icon: "💾" },
    { name: "Graphics Card (GPU)", item: "NVIDIA RTX 4070 Super 12GB", price: 58999, retailer: "MDComputers", icon: "🎮" },
    { name: "Storage (SSD)", item: "Samsung 990 PRO 2TB NVMe", price: 14299, retailer: "Amazon India", icon: "💽" },
    { name: "Cabinet (Case)", item: "NZXT H5 Flow RGB", price: 8999, retailer: "PrimeABGB", icon: "🖥️" },
    { name: "Power Supply (PSU)", item: "Corsair RM750e 80+ Gold Fully Modular", price: 9499, retailer: "Flipkart", icon: "⚡" },
  ];

  const totalPrice = slots.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">Interactive Configurator</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Custom PC Builder & Compatibility Checker</h1>
          <p className="text-slate-500 text-sm">Build your custom rig with real-time compatibility checks and live lowest prices in India.</p>
        </div>
        <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center gap-6 shadow-xl">
          <div>
            <div className="text-xs text-slate-400">Total System Price</div>
            <div className="text-2xl font-extrabold text-cyan-400">₹{totalPrice.toLocaleString("en-IN")}</div>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-xl font-bold text-xs transition-colors shadow">
            Save & Share Build
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Compatibility & Summary Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm border-b pb-3">Compatibility Analysis</h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-500 text-base">✓</span>
                <div>
                  <div className="font-semibold text-slate-900">CPU & Motherboard Socket Match</div>
                  <div className="text-slate-500">AMD AM5 socket fully supported by MSI B650 Tomahawk.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-emerald-500 text-base">✓</span>
                <div>
                  <div className="font-semibold text-slate-900">RAM Generation Check</div>
                  <div className="text-slate-500">DDR5 6000MHz matched with B650 motherboard specs.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-emerald-500 text-base">✓</span>
                <div>
                  <div className="font-semibold text-slate-900">GPU Clearance in Case</div>
                  <div className="text-slate-500">RTX 4070 Super fits inside NZXT H5 Flow (340mm clearance).</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-emerald-500 text-base">✓</span>
                <div>
                  <div className="font-semibold text-slate-900">Power Supply Adequacy</div>
                  <div className="text-slate-500">750W PSU exceeds estimated system peak load (~480W).</div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-medium text-center">
              🟢 System is 100% Compatible & Ready to Build
            </div>
          </div>
        </div>

        {/* Component Slots */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-slate-900 text-sm">Selected Components ({slots.length})</h3>

          <div className="space-y-3">
            {slots.map((slot, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{slot.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-blue-600">{slot.name}</div>
                    <div className="font-bold text-slate-900 text-sm">{slot.item}</div>
                    <div className="text-xs text-slate-400">Retailer: {slot.retailer}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-slate-900">₹{slot.price.toLocaleString("en-IN")}</div>
                  </div>
                  <button className="bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                    Change
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
