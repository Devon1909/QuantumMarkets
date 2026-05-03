import { motion } from "motion/react";
import { Check, Info, Shield, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-space border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan cyan-glow"></span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-300">New: 1-Step Evaluation Live</span>
          </div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Harness <span className="text-gradient-cyan">Quantum</span> Liquidity.<br className="hidden md:block"/>
          Scale to $400k.
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Institutional trading conditions for retail traders. Keep up to <strong className="text-white">90% of your profits</strong> with no restrictive time limits.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-cyan text-space px-8 py-4 rounded-xl font-bold text-lg cyan-glow transition-all active:scale-95 flex items-center justify-center gap-2">
            Get Funded Now <ArrowRight size={20} />
          </button>
          <button className="glass-panel text-white hover:bg-white/5 transition-colors px-8 py-4 rounded-xl font-medium text-lg border border-white/10">
            View Challenges
          </button>
        </motion.div>
      </section>

      {/* Payout Ticker */}
      <div className="w-full border-y border-white/10 bg-space/50 backdrop-blur-sm overflow-hidden py-4 mb-20 hidden md:block">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-80">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6">
              <span className="text-gray-400 font-mono text-sm"><span className="text-cyan px-2 py-0.5 bg-cyan/10 rounded mr-2">$5,240</span> paid to Trader #882</span>
              <span className="text-gray-400 font-mono text-sm"><span className="text-green-400 px-2 py-0.5 bg-green-400/10 rounded mr-2">$1,100</span> paid to Trader #104</span>
              <span className="text-gray-400 font-mono text-sm"><span className="text-cyan px-2 py-0.5 bg-cyan/10 rounded mr-2">$12,450</span> paid to Trader #992</span>
              <span className="text-gray-400 font-mono text-sm"><span className="text-green-400 px-2 py-0.5 bg-green-400/10 rounded mr-2">$3,200</span> paid to Trader #441</span>
              <span className="text-gray-400 font-mono text-sm"><span className="text-cyan px-2 py-0.5 bg-cyan/10 rounded mr-2">$8,900</span> paid to Trader #209</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />

      {/* Account Cards */}
      <section className="w-full max-w-6xl mx-auto px-4 md:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose Your Vector</h2>
          <p className="text-gray-400">Select an account size that matches your strategy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            { size: "50k", target: "$5,000", daily: "$2,500", max: "$5,000", price: "$299" },
            { size: "100k", target: "$10,000", daily: "$5,000", max: "$10,000", price: "$499", popular: true },
            { size: "200k", target: "$20,000", daily: "$10,000", max: "$20,000", price: "$999" }
          ].map((acc, idx) => (
            <motion.div
              key={acc.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-panel rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ${acc.popular ? 'border-cyan/50 shadow-[0_0_30px_rgba(0,242,255,0.15)] hover:shadow-[0_0_40px_rgba(0,242,255,0.3)]' : 'hover:border-white/20'}`}
            >
              {acc.popular && (
                <div className="absolute top-0 inset-x-0 bg-cyan text-space text-xs font-bold uppercase tracking-wider text-center py-1">
                  Most Popular
                </div>
              )}
              <h3 className="text-gray-400 font-medium tracking-wider uppercase mb-2 mt-4">Account Size</h3>
              <div className="text-5xl font-bold mb-8 text-white">${acc.size}</div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Check size={16} className="text-cyan"/> Profit Target</span>
                  <span className="font-bold">{acc.target} <span className="text-gray-500 text-sm font-normal">(10%)</span></span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Check size={16} className="text-cyan"/> Max Daily Loss</span>
                  <span className="font-bold">{acc.daily} <span className="text-gray-500 text-sm font-normal">(5%)</span></span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-gray-400 flex items-center gap-2"><Check size={16} className="text-cyan"/> Max Overall Loss</span>
                  <span className="font-bold">{acc.max} <span className="text-gray-500 text-sm font-normal">(10%)</span></span>
                </li>
              </ul>
              
              <div className="flex items-end justify-between mt-auto">
                <div>
                  <span className="text-gray-400 block text-xs uppercase tracking-wider mb-1">One-time fee</span>
                  <span className="text-3xl font-bold">{acc.price}</span>
                </div>
                <button className={`px-6 py-3 rounded-lg font-bold transition-all ${acc.popular ? 'bg-cyan text-space cyan-glow' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                  Select
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
