import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Trophy, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Payouts() {
  const [counter, setCounter] = useState(0);
  const targetNumber = 12450000;

  useEffect(() => {
    // A simple animation to count up
    let start = 0;
    const duration = 2500; // 2.5s
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCounter(Math.floor(ease * targetNumber));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, []);

  const payouts = [
    { date: "May 2, 2026", amount: "$15,240.00", trader: "Trader #8821", method: "Crypto (USDT)", hash: "0x8f...4e9a" },
    { date: "May 1, 2026", amount: "$4,100.50", trader: "Trader #1042", method: "Bank Wire", hash: "TRN-9X...22L" },
    { date: "Apr 30, 2026", amount: "$22,450.00", trader: "Trader #9924", method: "Crypto (BTC)", hash: "bc1q...x7p0" },
    { date: "Apr 30, 2026", amount: "$3,200.00", trader: "Trader #4410", method: "Deel", hash: "D-882...19A" },
    { date: "Apr 29, 2026", amount: "$8,900.25", trader: "Trader #2099", method: "Crypto (USDC)", hash: "0x1a...b2c9" },
    { date: "Apr 28, 2026", amount: "$11,200.00", trader: "Trader #5521", method: "Bank Wire", hash: "TRN-3A...51K" },
    { date: "Apr 27, 2026", amount: "$6,420.00", trader: "Trader #3054", method: "Crypto (ETH)", hash: "0x98...f3e1" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-20">
      
      {/* Hero Counter */}
      <div className="text-center mb-20 mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center justify-center p-4 rounded-full bg-cyan/5 mb-6"
        >
          <Trophy className="text-cyan w-10 h-10" />
        </motion.div>
        <h1 className="text-gray-400 text-xl md:text-2xl font-medium tracking-wide uppercase mb-4">Total Paid to Traders</h1>
        <div className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl font-mono text-gradient">
          ${counter.toLocaleString()}+
        </div>
      </div>

      {/* Verified Payouts List */}
      <div className="glass-panel p-6 md:p-10 rounded-2xl">
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <CheckCircle2 className="text-green-400" />
            Verified Recent Payouts
          </h2>
          <span className="text-sm text-gray-500 uppercase tracking-widest hidden sm:block">Live Feed</span>
        </div>

        <div className="space-y-4">
          {payouts.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <div className="hidden sm:flex w-12 h-12 rounded-full bg-cyan/10 items-center justify-center shrink-0">
                  <ArrowUpRight className="text-cyan" />
                </div>
                <div>
                  <div className="font-bold text-xl mb-1">{p.amount}</div>
                  <div className="text-gray-400 text-sm">{p.trader} • {p.date}</div>
                </div>
              </div>

              <div className="flex flex-col md:items-end w-full md:w-auto">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{p.method}</span>
                </div>
                <div className="text-xs text-gray-500 font-mono flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
                  <span>Txn:</span> 
                  <span className="blur-[3px] group-hover:blur-sm transition-all select-none">{p.hash}</span>
                  <span className="text-green-400 ml-2">Confirmed</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
            <button className="text-cyan hover:text-cyan/80 font-medium tracking-wide text-sm uppercase transition-colors">
              Load More History
            </button>
        </div>
      </div>
    </div>
  );
}
