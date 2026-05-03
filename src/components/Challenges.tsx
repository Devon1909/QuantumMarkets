import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

export default function Challenges() {
  const [stepType, setStepType] = useState<1 | 2>(2);

  const accountSizes = [
    { size: "25k", price1: "$199", price2: "$149" },
    { size: "50k", price1: "$299", price2: "$249" },
    { size: "100k", price1: "$499", price2: "$399", popular: true },
    { size: "200k", price1: "$999", price2: "$799" }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Evaluation Pathways</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Choose the evaluation phase that fits your trading style. 
          Both paths unlock up to $400k in initial funding with 90% profit splits.
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-16">
        <div className="glass-panel p-1 rounded-xl inline-flex relative">
          <motion.div
            className="absolute inset-y-1 rounded-lg bg-white/10 hidden md:block"
            layoutId="toggleHighlight"
            initial={false}
            animate={{
              left: stepType === 1 ? "4px" : "50%",
              width: "calc(50% - 4px)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ border: "1px solid rgba(255,255,255,0.15)" }}
          />
          <button
            onClick={() => setStepType(1)}
            className={`relative px-8 py-3 rounded-lg font-medium transition-colors ${stepType === 1 ? "text-white" : "text-gray-400 hover:text-gray-200"} md:bg-transparent bg-white/5 md:bg-none ${stepType===1 && 'md:bg-transparent bg-white/10'}`}
          >
            1-Step Evaluation
          </button>
          <button
            onClick={() => setStepType(2)}
            className={`relative px-8 py-3 rounded-lg font-medium transition-colors ${stepType === 2 ? "text-white" : "text-gray-400 hover:text-gray-200"} md:bg-transparent bg-white/5 md:bg-none ${stepType===2 && 'md:bg-transparent bg-white/10'}`}
          >
            2-Step Evaluation
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {accountSizes.map((acc, idx) => (
          <motion.div
            key={acc.size}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`glass-panel rounded-2xl p-6 relative flex flex-col ${acc.popular ? 'border-cyan/40 shadow-[0_0_20px_rgba(0,242,255,0.1)] hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]' : 'hover:border-white/20'}`}
          >
            {acc.popular && (
              <div className="absolute -top-3 inset-x-0 flex justify-center">
                <span className="bg-cyan text-space text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
                  Popular
                </span>
              </div>
            )}
            <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-1 mt-2">Account</h3>
            <div className="text-4xl font-bold text-white mb-6">${acc.size}</div>
            
            <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold">
                  {stepType === 1 ? acc.price1 : acc.price2}
                </div>
                <div className="text-xs text-gray-400">One-time fee</div>
              </div>
              <button className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${acc.popular ? 'bg-cyan text-space' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Select
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="glass-panel overflow-hidden rounded-2xl">
        <div className="p-8 border-b border-white/10 bg-white/[0.02]">
          <h2 className="text-2xl font-bold text-center">Institutional Guidelines</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 text-sm uppercase tracking-wider bg-black/20">
                <th className="p-6 font-medium">Metric</th>
                <th className="p-6 font-medium border-l border-white/10 w-1/3">1-Step Evaluation</th>
                <th className="p-6 font-medium border-l border-white/10 w-1/3">2-Step Evaluation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">Profit Target</td>
                <td className="p-6 border-l border-white/10 text-cyan font-bold">10%</td>
                <td className="p-6 border-l border-white/10 text-cyan">8% (Phase 1) / 5% (Phase 2)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">Max Daily Loss</td>
                <td className="p-6 border-l border-white/10">4% (Trailing)</td>
                <td className="p-6 border-l border-white/10">5% (Balance based)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">Max Overall Loss</td>
                <td className="p-6 border-l border-white/10">6% (Trailing)</td>
                <td className="p-6 border-l border-white/10">10% (Static)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">Minimum Trading Days</td>
                <td className="p-6 border-l border-white/10">0 Days</td>
                <td className="p-6 border-l border-white/10">0 Days</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">Maximum Trading Days</td>
                <td className="p-6 border-l border-white/10">Unlimited</td>
                <td className="p-6 border-l border-white/10">Unlimited</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="p-6 font-medium">Profit Split</td>
                <td className="p-6 border-l border-white/10 font-bold">Up to 90%</td>
                <td className="p-6 border-l border-white/10 font-bold">Up to 90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
