"use client";

import { useState } from "react";

export default function PCBuilderPage() {
  const [components, setComponents] = useState({
    cpu: { name: "AMD Ryzen 7 7800X3D Desktop Processor", price: 37999, retailer: "PrimeABGB", icon: "⚡", category: "cpu", socket: "AM5" },
    cooler: { name: "DeepCool AK620 Digital CPU Cooler", price: 3999, retailer: "MDComputers", icon: "❄️", category: "cooler" },
    motherboard: { name: "MSI MAG B650 TOMAHAWK WIFI Motherboard", price: 19999, retailer: "Vedant Computers", icon: "🔌", category: "motherboard", socket: "AM5", ramType: "DDR5" },
    ram: { name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", price: 10999, retailer: "Vedant Computers", icon: "💾", category: "ram", ramType: "DDR5" },
    gpu: { name: "NVIDIA GeForce RTX 4070 Super 12GB GDDR6X", price: 62999, retailer: "MDComputers", icon: "🎮", category: "gpu", lengthMm: 242 },
    storage: { name: "Samsung 990 PRO 2TB NVMe M.2 SSD", price: 13999, retailer: "Amazon India", icon: "💽", category: "storage" },
    case: { name: "NZXT H5 Flow RGB Mid-Tower Case", price: 8999, retailer: "PrimeABGB", icon: "🖥️", category: "case", maxGpuMm: 365 },
    psu: { name: "Corsair RM750e 80+ Gold Fully Modular PSU", price: 9499, retailer: "Flipkart", icon: "⚡", category: "psu", wattage: 750 },
  });

  const [activeModalCategory, setActiveModalCategory] = useState<string | null>(null);
  const [buildName, setBuildName] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const totalPrice = Object.values(components).reduce((acc, curr) => acc + curr.price, 0);

  // Compatibility validation rules
  const isSocketCompatible = components.cpu.socket === components.motherboard.socket;
  const isRamCompatible = components.ram.ramType === components.motherboard.ramType;
  const isGpuFitting = components.gpu.lengthMm < components.case.maxGpuMm;
  const isPsuSufficient = components.psu.wattage >= 650;

  const allCompatible = isSocketCompatible && isRamCompatible && isGpuFitting && isPsuSufficient;

  const alternatives: Record<string, Array<{ name: string; price: number; retailer: string; specs?: any }>> = {
    cpu: [
      { name: "AMD Ryzen 7 7800X3D Desktop Processor", price: 37999, retailer: "PrimeABGB", specs: { socket: "AM5" } },
      { name: "AMD Ryzen 5 7600X Processor", price: 18999, retailer: "MDComputers", specs: { socket: "AM5" } },
      { name: "Intel Core i7-14700K Processor", price: 36499, retailer: "Vedant Computers", specs: { socket: "LGA1700" } },
      { name: "Intel Core i5-14600K Processor", price: 26499, retailer: "Amazon India", specs: { socket: "LGA1700" } },
      { name: "AMD Ryzen 9 7900X3D Desktop Processor", price: 54999, retailer: "PrimeABGB", specs: { socket: "AM5" } },
    ],
    gpu: [
      { name: "NVIDIA GeForce RTX 4070 Super 12GB GDDR6X", price: 62999, retailer: "MDComputers", specs: { lengthMm: 242 } },
      { name: "AMD Radeon RX 7800 XT 16GB", price: 48999, retailer: "PrimeABGB", specs: { lengthMm: 267 } },
      { name: "NVIDIA GeForce RTX 4060 8GB OC", price: 28499, retailer: "Flipkart", specs: { lengthMm: 210 } },
      { name: "NVIDIA GeForce RTX 4080 Super 16GB", price: 99999, retailer: "Vedant Computers", specs: { lengthMm: 304 } },
      { name: "AMD Radeon RX 7900 XTX 24GB", price: 89999, retailer: "MDComputers", specs: { lengthMm: 333 } },
    ],
    ram: [
      { name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", price: 10999, retailer: "Vedant Computers", specs: { ramType: "DDR5" } },
      { name: "G.Skill Trident Z5 Neo RGB 32GB DDR5 6000MHz", price: 12299, retailer: "PrimeABGB", specs: { ramType: "DDR5" } },
      { name: "TeamGroup T-Force Delta RGB 16GB DDR5 6000MHz", price: 6499, retailer: "Amazon India", specs: { ramType: "DDR5" } },
      { name: "Corsair Vengeance 64GB DDR5 5600MHz", price: 18999, retailer: "MDComputers", specs: { ramType: "DDR5" } },
    ],
    motherboard: [
      { name: "MSI MAG B650 TOMAHAWK WIFI Motherboard", price: 19999, retailer: "Vedant Computers", specs: { socket: "AM5", ramType: "DDR5" } },
      { name: "Gigabyte B650 AORUS ELITE AX", price: 17499, retailer: "MDComputers", specs: { socket: "AM5", ramType: "DDR5" } },
      { name: "ASUS ROG Strix B650E-F Gaming WiFi", price: 23999, retailer: "Amazon India", specs: { socket: "AM5", ramType: "DDR5" } },
      { name: "MSI PRO B760M-P WIFI DDR5", price: 15999, retailer: "Flipkart", specs: { socket: "LGA1700", ramType: "DDR5" } },
    ],
    cooler: [
      { name: "DeepCool AK620 Digital CPU Cooler", price: 3999, retailer: "MDComputers" },
      { name: "NZXT Kraken 240 RGB Liquid Cooler", price: 11999, retailer: "Amazon India" },
      { name: "Cooler Master Hyper 212 RGB", price: 5499, retailer: "PrimeABGB" },
      { name: "Arctic Freezer 34 RGB", price: 4999, retailer: "Vedant Computers" },
    ],
    storage: [
      { name: "Samsung 990 PRO 2TB NVMe M.2 SSD", price: 13999, retailer: "Amazon India" },
      { name: "WD Black SN850X 1TB NVMe SSD", price: 8499, retailer: "MDComputers" },
      { name: "Crucial T500 2TB NVMe SSD", price: 11999, retailer: "Flipkart" },
      { name: "SK hynix BC711 1TB NVMe SSD", price: 7999, retailer: "PrimeABGB" },
    ],
    case: [
      { name: "NZXT H5 Flow RGB Mid-Tower Case", price: 8999, retailer: "PrimeABGB", specs: { maxGpuMm: 365 } },
      { name: "Lian Li Lancool 216 RGB Case", price: 7999, retailer: "Vedant Computers", specs: { maxGpuMm: 392 } },
      { name: "Cooler Master MasterBox Q300L", price: 4999, retailer: "Amazon India", specs: { maxGpuMm: 340 } },
      { name: "NZXT H7 Flow RGB Case", price: 13999, retailer: "MDComputers", specs: { maxGpuMm: 400 } },
    ],
    psu: [
      { name: "Corsair RM750e 80+ Gold Fully Modular PSU", price: 9499, retailer: "Flipkart", specs: { wattage: 750 } },
      { name: "MSI MAG A850GL PCIE5 850W Gold PSU", price: 10999, retailer: "MDComputers", specs: { wattage: 850 } },
      { name: "Corsair RM850x 80+ Gold PSU", price: 10499, retailer: "PrimeABGB", specs: { wattage: 850 } },
      { name: "Thermaltake Toughpower GF1 750W", price: 8999, retailer: "Vedant Computers", specs: { wattage: 750 } },
    ]
  };

  const handleSwap = (category: string, item: any) => {
    setComponents(prev => ({
      ...prev,
      [category]: {
        ...item,
        category,
        icon: category === 'cpu' ? '⚡' : category === 'gpu' ? '🎮' : category === 'ram' ? '💾' : category === 'motherboard' ? '🔌' : category === 'cooler' ? '❄️' : category === 'storage' ? '💽' : category === 'case' ? '🖥️' : '⚡'
      }
    }));
    setActiveModalCategory(null);
  };

  const handleSaveBuild = () => {
    if (!buildName.trim()) {
      alert("Please enter a build name first");
      return;
    }
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const resetBuild = () => {
    if (window.confirm("Are you sure you want to reset your build?")) {
      setComponents({
        cpu: { name: "AMD Ryzen 7 7800X3D Desktop Processor", price: 37999, retailer: "PrimeABGB", icon: "⚡", category: "cpu", socket: "AM5" },
        cooler: { name: "DeepCool AK620 Digital CPU Cooler", price: 3999, retailer: "MDComputers", icon: "❄️", category: "cooler" },
        motherboard: { name: "MSI MAG B650 TOMAHAWK WIFI Motherboard", price: 19999, retailer: "Vedant Computers", icon: "🔌", category: "motherboard", socket: "AM5", ramType: "DDR5" },
        ram: { name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz", price: 10999, retailer: "Vedant Computers", icon: "💾", category: "ram", ramType: "DDR5" },
        gpu: { name: "NVIDIA GeForce RTX 4070 Super 12GB GDDR6X", price: 62999, retailer: "MDComputers", icon: "🎮", category: "gpu", lengthMm: 242 },
        storage: { name: "Samsung 990 PRO 2TB NVMe M.2 SSD", price: 13999, retailer: "Amazon India", icon: "💽", category: "storage" },
        case: { name: "NZXT H5 Flow RGB Mid-Tower Case", price: 8999, retailer: "PrimeABGB", icon: "🖥️", category: "case", maxGpuMm: 365 },
        psu: { name: "Corsair RM750e 80+ Gold Fully Modular PSU", price: 9499, retailer: "Flipkart", icon: "⚡", category: "psu", wattage: 750 },
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-3 py-1 rounded-full">Interactive Configurator</span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">Custom PC Builder & Compatibility Checker</h1>
          <p className="text-slate-600 text-sm">Build your custom rig with real-time socket, RAM, physical dimension and PSU wattage validation.</p>
        </div>
        <div className="bg-slate-900 text-white p-5 rounded-2xl flex items-center gap-6 shadow-xl w-full md:w-auto justify-between">
          <div>
            <div className="text-xs text-slate-400">Total System Price (INR)</div>
            <div className="text-2xl font-extrabold text-cyan-400">₹{totalPrice.toLocaleString("en-IN")}</div>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Build name..."
              value={buildName}
              onChange={(e) => setBuildName(e.target.value)}
              className="bg-slate-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              onClick={handleSaveBuild}
              className={`px-5 py-3 rounded-xl font-bold text-xs transition-colors shadow ${isSaved ? 'bg-emerald-500 text-white' : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'}`}
            >
              {isSaved ? "✓ Saved!" : "Save & Share"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 sticky top-24">
            <h3 className="font-bold text-slate-900 text-sm border-b pb-3 flex items-center justify-between">
              <span>Compatibility Analysis</span>
              <span className={allCompatible ? "text-emerald-600 font-bold" : "text-amber-600 font-bold"}>
                {allCompatible ? "✓ 100% PASSED" : "⚠ CHECK ISSUES"}
              </span>
            </h3>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <span className={isSocketCompatible ? "text-emerald-600 text-base font-bold" : "text-red-500 text-base font-bold"}>
                  {isSocketCompatible ? "✓" : "✕"}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">CPU & Motherboard Socket Match</div>
                  <div className="text-slate-500">{isSocketCompatible ? `${components.cpu.socket} socket fully matched.` : `Socket mismatch.`}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className={isRamCompatible ? "text-emerald-600 text-base font-bold" : "text-red-500 text-base font-bold"}>
                  {isRamCompatible ? "✓" : "✕"}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">RAM Generation Support</div>
                  <div className="text-slate-500">{isRamCompatible ? `${components.ram.ramType} memory supported.` : `RAM type mismatch.`}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className={isGpuFitting ? "text-emerald-600 text-base font-bold" : "text-red-500 text-base font-bold"}>
                  {isGpuFitting ? "✓" : "✕"}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">GPU Physical Clearance</div>
                  <div className="text-slate-500">{isGpuFitting ? `GPU fits in case.` : `GPU too long.`}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className={isPsuSufficient ? "text-emerald-600 text-base font-bold" : "text-red-500 text-base font-bold"}>
                  {isPsuSufficient ? "✓" : "✕"}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">Power Supply Adequacy</div>
                  <div className="text-slate-500">{isPsuSufficient ? `${components.psu.wattage}W sufficient.` : `PSU too low.`}</div>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-xl text-xs font-semibold text-center border ${
              allCompatible ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-amber-50 border-amber-200 text-amber-800"
            }`}>
              {allCompatible ? "System is Fully Compatible & Ready to Order" : "Please resolve compatibility warnings"}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-900 text-sm">Selected Components ({Object.keys(components).length})</h3>
            <button
              onClick={resetBuild}
              className="text-xs text-blue-600 hover:text-blue-700 font-semibold hover:underline"
            >
              Reset to Budget Build
            </button>
          </div>

          <div className="space-y-3">
            {Object.entries(components).map(([key, slot]) => (
              <div key={key} className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between gap-4 hover:shadow-md transition-all">
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl p-2 bg-slate-50 rounded-xl border">{slot.icon}</span>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-blue-600">{key}</div>
                    <div className="font-bold text-slate-900 text-sm">{slot.name}</div>
                    <div className="text-xs text-slate-400">Retailer: <strong className="text-slate-700">{slot.retailer}</strong></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-extrabold text-slate-900">₹{slot.price.toLocaleString("en-IN")}</div>
                  </div>
                  <button
                    onClick={() => setActiveModalCategory(key)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-sm"
                  >
                    Change
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeModalCategory && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 space-y-6 shadow-2xl border border-slate-200 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="font-bold text-slate-900 text-base uppercase">Select {activeModalCategory}</h3>
              <button
                onClick={() => setActiveModalCategory(null)}
                className="text-slate-400 hover:text-slate-700 text-sm font-bold bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 overflow-y-auto pr-2 flex-1">
              {alternatives[activeModalCategory]?.map((alt, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSwap(activeModalCategory, alt)}
                  className="p-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 cursor-pointer transition-all flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{alt.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Retailer: {alt.retailer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-slate-900 text-sm">₹{alt.price.toLocaleString("en-IN")}</div>
                    <span className="text-xs text-blue-600 font-semibold mt-1 inline-block">Select</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
