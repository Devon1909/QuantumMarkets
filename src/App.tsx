/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Home from "./components/Home";
import Challenges from "./components/Challenges";
import Rules from "./components/Rules";
import Payouts from "./components/Payouts";
import Help from "./components/Help";
import { Menu, X } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Challenges", "Rules", "Payouts", "Help/FAQ"];

  const renderContent = () => {
    switch (activeTab) {
      case "Home": return <Home />;
      case "Challenges": return <Challenges />;
      case "Rules": return <Rules />;
      case "Payouts": return <Payouts />;
      case "Help/FAQ": return <Help />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      {/* Sticky Navigation */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel border-b border-white/10 py-4' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveTab("Home")}
          >
            <div className="w-8 h-8 rounded bg-cyan flex items-center justify-center cyan-glow">
              <div className="w-4 h-4 bg-space rounded-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">QuantumMarkets</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === item ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
              Login
            </button>
            <button 
              onClick={() => setActiveTab("Challenges")}
              className="bg-cyan text-space px-5 py-2.5 rounded-lg text-sm font-bold cyan-glow transition-all active:scale-95"
            >
              Get Funded
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-space/95 backdrop-blur-xl flex flex-col pt-24 px-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveTab(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-bold text-left py-4 border-b border-white/10 ${activeTab === item ? 'text-cyan' : 'text-white'}`}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
               <button className="bg-white/10 text-white px-6 py-4 rounded-xl font-bold text-lg">Login</button>
               <button 
                 onClick={() => {
                    setActiveTab("Challenges");
                    setMobileMenuOpen(false);
                 }}
                 className="bg-cyan text-space px-6 py-4 rounded-xl font-bold text-lg cyan-glow"
               >
                 Get Funded
               </button>
            </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 pt-24 pb-12 w-full flex flex-col items-center">
         {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-auto py-12 glass-panel">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gray-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-space rounded-sm"></div>
            </div>
            <span className="font-bold text-gray-500">QuantumMarkets &copy; 2026</span>
          </div>
          <div className="text-gray-500 text-sm flex gap-6">
             <a href="#" className="hover:text-cyan transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-cyan transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-cyan transition-colors">Risk Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
