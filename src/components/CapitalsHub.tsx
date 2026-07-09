import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CAPITALS_DATA } from "../data/reportData";
import { Coins, Home, Brain, Users, Handshake, Leaf, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Coins: Coins,
  Home: Home,
  Brain: Brain,
  Users: Users,
  Handshake: Handshake,
  Leaf: Leaf
};

export default function CapitalsHub() {
  const [selectedCapitalIndex, setSelectedCapitalIndex] = useState<number>(0);

  const activeCapital = CAPITALS_DATA[selectedCapitalIndex];
  const IconComponent = ICON_MAP[activeCapital.icon] || Coins;

  return (
    <section id="capitals-section" className="space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
          Value Creation Capitals
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
          SDB bank strategically utilizes its resources across six capital pillars to create, preserve, and sustain long-term value for all Sri Lankan stakeholders.
        </p>
      </div>

      {/* Grid selector of 6 capitals */}
      <div id="capitals-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {CAPITALS_DATA.map((capital, index) => {
          const isActive = index === selectedCapitalIndex;
          const CapIcon = ICON_MAP[capital.icon] || Coins;
          return (
            <button
              key={capital.title}
              onClick={() => setSelectedCapitalIndex(index)}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 text-center cursor-pointer ${
                isActive
                  ? "bg-white border-sdb-purple/20 shadow-md scale-105"
                  : "bg-white/40 border-sdb-purple/5 hover:border-sdb-purple/20 hover:bg-white/60"
              }`}
            >
              <div
                className={`p-3 rounded-full mb-3 ${
                  isActive
                    ? "bg-sdb-purple text-white shadow-md"
                    : "bg-sdb-purple/5 text-sdb-purple/60"
                }`}
              >
                <CapIcon className="w-5 h-5" />
              </div>
              <span className="font-serif text-xs font-bold text-sdb-purple tracking-tight uppercase block leading-tight">
                {capital.title.replace(" Capital", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main active capital card showing actions vs outcomes */}
      <div id="active-capital-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCapitalIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left side: Capital overview & SDGs */}
            <div className="lg:col-span-4 flex flex-col space-y-6">
              <div className="glass-card rounded-3xl p-6 text-left shadow-md border border-sdb-purple/10">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-white/40 border border-sdb-purple/10 text-sdb-purple rounded-xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-sdb-purple">{activeCapital.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {activeCapital.summary}
                </p>
                <div className="border-t border-sdb-purple/10 pt-4">
                  <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block mb-2">Targeted SDGs</span>
                  <div className="space-y-3">
                    {activeCapital.sdgs.map((sdg) => (
                      <div key={sdg.id} className="flex items-start space-x-3 text-xs leading-normal">
                        <div className="w-6 h-6 shrink-0 bg-sdb-coral text-white font-mono font-bold rounded flex items-center justify-center text-[10px]">
                          {sdg.id}
                        </div>
                        <div>
                          <p className="font-bold text-sdb-purple">{sdg.name}</p>
                          <p className="text-slate-500 text-[11px] mt-0.5">{sdg.contribution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Handcrafted Actions vs Outcomes table */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* Actions Card */}
              <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col space-y-4 shadow-md border border-sdb-purple/10 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sdb-purple/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-sdb-purple rounded-full" />
                  <h4 className="font-serif text-lg font-bold text-sdb-purple uppercase tracking-wider">Our Actions</h4>
                </div>
                <p className="text-xs text-slate-500 font-mono tracking-wide uppercase border-b border-sdb-purple/10 pb-2">What we did in 2025</p>
                <ul className="space-y-3 flex-1 pt-2">
                  {activeCapital.actions.map((action, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-sdb-purple/60 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes Card */}
              <div className="glass-card rounded-3xl p-6 md:p-8 flex flex-col space-y-4 shadow-md border border-sdb-purple/10 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-sdb-green/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center space-x-3">
                  <span className="w-2.5 h-2.5 bg-sdb-green rounded-full" />
                  <h4 className="font-serif text-lg font-bold text-sdb-green uppercase tracking-wider">Outcomes</h4>
                </div>
                <p className="text-xs text-slate-500 font-mono tracking-wide uppercase border-b border-sdb-purple/10 pb-2">Value created in 2025</p>
                <ul className="space-y-3 flex-1 pt-2">
                  {activeCapital.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-sdb-green shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
