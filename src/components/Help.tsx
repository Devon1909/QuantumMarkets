import { useState } from "react";
import { Search, Sparkles, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqData = [
  {
    category: "Rules & Guidelines",
    items: [
      { q: "What is the specific Daily Drawdown limit?", a: "For 1-Step it is 4% of the static initial balance (with trailing EOD equity). For 2-Step it is 5% based on your starting equity for the day." },
      { q: "Do you allow copy trading?", a: "Copy trading is allowed as long as you are the master account. You cannot copy trades from signal services or other third-party traders." },
    ]
  },
  {
    category: "Withdrawals & Payouts",
    items: [
      { q: "When can I request my first payout?", a: "Your first payout can be requested 14 days after your first trade on a funded account. Subsequent payouts are bi-weekly." },
      { q: "What payment methods are supported?", a: "We support USDT, USDC, BTC, ETH, and direct Bank Wire transfers globally via Deel." },
    ]
  }
];

function AccordionItem({ q, a }: { q: string, a: string, key?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden mb-4 bg-white/[0.02]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-medium text-lg">{q}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan" : "text-gray-500"}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 border-t border-white/5 mt-2">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Help() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Support & HQ</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          Find instant answers to your questions or get in touch with our operations team.
        </p>

        {/* AI Search Bar */}
        <div className="relative max-w-2xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan/40 to-blue-500/40 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative glass-panel flex items-center p-2 rounded-2xl">
            <Search className="text-gray-400 ml-4 h-6 w-6" />
            <input 
              type="text" 
              placeholder="Ask anything (e.g. 'How is drawdown calculated?')" 
              className="w-full bg-transparent border-none outline-none text-white px-4 py-4 text-lg placeholder-gray-500"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-colors border border-white/5 whitespace-nowrap">
               <Sparkles size={16} className="text-cyan"/> AI Search
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {faqData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-6 text-gray-200">{section.category}</h2>
            {section.items.map((item, i) => (
               <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center glass-panel p-10 rounded-2xl">
        <h3 className="text-2xl font-bold mb-4">Still need assistance?</h3>
        <p className="text-gray-400 mb-8">Our support team is available 24/7 globally to assist you.</p>
        <button className="bg-white text-space px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
            Open Support Ticket
        </button>
      </div>
    </div>
  );
}
