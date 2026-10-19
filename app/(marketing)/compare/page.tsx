export default function ComparePage() {
  const gpus = [
    {
      name: "NVIDIA GeForce RTX 4070 Super",
      vram: "12GB GDDR6X",
      tdp: "220W",
      launchPrice: "₹63,000",
      currentPrice: "₹58,999",
      gaming1080p: "240+ FPS",
      gaming1440p: "140+ FPS",
      rayTracing: "Excellent",
    },
    {
      name: "AMD Radeon RX 7800 XT",
      vram: "16GB GDDR6",
      tdp: "263W",
      launchPrice: "₹54,000",
      currentPrice: "₹51,499",
      gaming1080p: "250+ FPS",
      gaming1440p: "145+ FPS",
      rayTracing: "Good",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">GPU & CPU Benchmark Comparison Matrix</h1>
        <p className="text-slate-500 text-sm">Compare technical specifications, VRAM, power draw, and real gaming performance in INR.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <th className="p-4 font-bold">Specification</th>
                {gpus.map((gpu, i) => (
                  <th key={i} className="p-4 font-bold text-slate-900 text-sm">{gpu.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-semibold text-slate-600">Current Lowest Price</td>
                {gpus.map((gpu, i) => (
                  <td key={i} className="p-4 font-extrabold text-blue-600 text-sm">{gpu.currentPrice}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-600">VRAM / Memory</td>
                {gpus.map((gpu, i) => (
                  <td key={i} className="p-4 text-slate-900 font-medium">{gpu.vram}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-600">TDP (Power Draw)</td>
                {gpus.map((gpu, i) => (
                  <td key={i} className="p-4 text-slate-900">{gpu.tdp}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-600">1080p Ultra Gaming</td>
                {gpus.map((gpu, i) => (
                  <td key={i} className="p-4 text-slate-900 font-medium">{gpu.gaming1080p}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-600">1440p Ultra Gaming</td>
                {gpus.map((gpu, i) => (
                  <td key={i} className="p-4 text-slate-900 font-medium">{gpu.gaming1440p}</td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-600">Ray Tracing Performance</td>
                {gpus.map((gpu, i) => (
                  <td key={i} className="p-4 text-slate-900 font-medium">{gpu.rayTracing}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
