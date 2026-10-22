"use client";

import { useState } from "react";

export default function ComparePage() {
  const [tab, setTab] = useState<"gpu" | "cpu">("gpu");

  const gpus = [
    {
      name: "RTX 4070 Super",
      vram: "12GB GDDR6X",
      tdp: "220W",
      currentPrice: "₹62,999",
      retailer: "MDComputers",
      gaming1080p: "240+ FPS (Ultra)",
      gaming1440p: "142+ FPS (Ultra)",
      rayTracing: "Excellent (DLSS 3.5)",
      bus: "192-bit",
      recommendedPsu: "650W",
    },
    {
      name: "RX 7800 XT",
      vram: "16GB GDDR6",
      tdp: "263W",
      currentPrice: "₹48,999",
      retailer: "PrimeABGB",
      gaming1080p: "255+ FPS (Ultra)",
      gaming1440p: "148+ FPS (Ultra)",
      rayTracing: "Good (FSR 3)",
      bus: "256-bit",
      recommendedPsu: "700W",
    },
    {
      name: "RTX 4060",
      vram: "8GB GDDR6",
      tdp: "115W",
      currentPrice: "₹28,499",
      retailer: "Flipkart",
      gaming1080p: "160+ FPS (Ultra)",
      gaming1440p: "85+ FPS (High)",
      rayTracing: "Moderate",
      bus: "128-bit",
      recommendedPsu: "500W",
    },
  ];

  const cpus = [
    {
      name: "Ryzen 7 7800X3D",
      cores: "8C / 16T",
      socket: "AM5",
      currentPrice: "₹37,999",
      retailer: "PrimeABGB",
      gamingPerf: "Best Gaming CPU",
      tdp: "120W",
      ramSupport: "DDR5-5200+",
    },
    {
      name: "Core i5-14600K",
      cores: "14C (6P+8E)",
      socket: "LGA1700",
      currentPrice: "₹26,499",
      retailer: "Flipkart",
      gamingPerf: "Great Value",
      tdp: "181W (Max Turbo)",
      ramSupport: "DDR5 / DDR4",
    },
    {
      name: "Ryzen 5 7600",
      cores: "6C / 12T",
      socket: "AM5",
      currentPrice: "₹18,999",
      retailer: "MDComputers",
      gamingPerf: "Best Entry AM5",
      tdp: "65W",
      ramSupport: "DDR5-5200+",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">GPU &amp; CPU Benchmark Comparison</h1>
        <p className="text-slate-600 text-sm mt-1">Compare specs, VRAM, power draw, and gaming performance with current Indian prices.</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => setTab("gpu")}
          className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
            tab === "gpu" ? "bg-blue-600 text-white shadow-md" : "bg-white text-slate-700 border hover:bg-slate-50"
          }`}
        >
          Graphics Cards (GPU)
        </button>
        <button
          onClick={() => setTab("cpu")}
          className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
            tab === "cpu" ? "bg-blue-600 text-white shadow-md" : "bg-white text-slate-700 border hover:bg-slate-50"
          }`}
        >
          Processors (CPU)
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          {tab === "gpu" ? (
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
                    <td key={i} className="p-4 font-extrabold text-blue-600 text-sm">
                      {gpu.currentPrice} <span className="text-[10px] text-slate-400 font-normal">({gpu.retailer})</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">VRAM / Memory Bus</td>
                  {gpus.map((gpu, i) => (
                    <td key={i} className="p-4 text-slate-900 font-medium">{gpu.vram} ({gpu.bus})</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">TDP (Power Draw)</td>
                  {gpus.map((gpu, i) => (
                    <td key={i} className="p-4 text-slate-900">{gpu.tdp} (Rec. {gpu.recommendedPsu})</td>
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
          ) : (
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold">Specification</th>
                  {cpus.map((cpu, i) => (
                    <th key={i} className="p-4 font-bold text-slate-900 text-sm">{cpu.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Current Lowest Price</td>
                  {cpus.map((cpu, i) => (
                    <td key={i} className="p-4 font-extrabold text-blue-600 text-sm">
                      {cpu.currentPrice} <span className="text-[10px] text-slate-400 font-normal">({cpu.retailer})</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Cores / Threads</td>
                  {cpus.map((cpu, i) => (
                    <td key={i} className="p-4 text-slate-900 font-medium">{cpu.cores}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Socket Type</td>
                  {cpus.map((cpu, i) => (
                    <td key={i} className="p-4 text-slate-900">{cpu.socket}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">RAM Support</td>
                  {cpus.map((cpu, i) => (
                    <td key={i} className="p-4 text-slate-900">{cpu.ramSupport}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Thermal Design Power (TDP)</td>
                  {cpus.map((cpu, i) => (
                    <td key={i} className="p-4 text-slate-900">{cpu.tdp}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-600">Gaming Benchmark Standing</td>
                  {cpus.map((cpu, i) => (
                    <td key={i} className="p-4 text-emerald-700 font-bold">{cpu.gamingPerf}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
