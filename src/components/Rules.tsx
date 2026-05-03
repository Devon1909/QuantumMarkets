import { Check, X, ShieldAlert, BookOpen } from "lucide-react";
import { motion } from "motion/react";

export default function Rules() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Trading Parameters</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We believe in empowering profitable strategies, not restricting them. 
          Review our clear-cut guidelines designed for institutional longevity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* The Green List */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-8 rounded-2xl border-t-4 border-t-green-500/50"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <Check className="text-green-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold">The Green List</h2>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <Check className="text-green-400" size={14} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">News Trading</h3>
                <p className="text-gray-400 text-sm">We allow trading during high-impact news events. Manage your risk accordingly.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <Check className="text-green-400" size={14} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Weekend Holding</h3>
                <p className="text-gray-400 text-sm">Swing traders welcome. Hold your positions over the weekend without penalty.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <Check className="text-green-400" size={14} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Expert Advisors (EAs)</h3>
                <p className="text-gray-400 text-sm">Use your automated strategies, provided they do not violate our high-frequency trading rules.</p>
              </div>
            </li>
          </ul>
        </motion.div>

        {/* The Red List */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-panel p-8 rounded-2xl border-t-4 border-t-red-500/50"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
              <X className="text-red-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold">The Red List</h2>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <X className="text-red-400" size={14} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">High-Frequency Trading (HFT)</h3>
                <p className="text-gray-400 text-sm">Strategies executing multiple trades per second or exploiting latency are strictly prohibited.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <X className="text-red-400" size={14} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Latency Arbitrage</h3>
                <p className="text-gray-400 text-sm">Exploiting price feeds between different providers violates our terms.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <X className="text-red-400" size={14} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Account Sharing</h3>
                <p className="text-gray-400 text-sm">Your evaluation and funded accounts must be traded solely by you.</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Drawdown Explanation */}
      <div className="glass-panel p-8 md:p-12 rounded-2xl mt-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center shrink-0 mb-4 md:mb-0">
            <ShieldAlert className="text-cyan w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">Understanding Drawdown calculation</h3>
            <p className="text-gray-400 leading-relaxed max-w-3xl">
              <strong>1-Step Evaluation:</strong> Uses an End-of-Day Trailing Drawdown. Your max loss limit trails your highest recorded balance at the end of the trading day until it reaches your initial balance, where it locks.
              <br/><br/>
              <strong>2-Step Evaluation:</strong> Uses a static Equity-Based Drawdown. The maximum loss limit is always calculated based on your initial starting balance.
            </p>
          </div>
          <div>
             <button className="px-6 py-3 border border-white/20 hover:bg-white/5 rounded-lg font-medium transition-colors whitespace-nowrap flex items-center gap-2">
                <BookOpen size={18}/> Read Full Docs
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
