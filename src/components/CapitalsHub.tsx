import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CAPITALS_DATA } from "../data/reportData";
import { Coins, Home, Brain, Users, Handshake, Leaf, ArrowRight, CheckCircle2, ShieldAlert, BookOpen, X, Sparkles, TrendingUp } from "lucide-react";

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
  const [showFullSectionModal, setShowFullSectionModal] = useState<boolean>(false);

  useEffect(() => {
    const handleSetIndex = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail === "number" && detail >= 0 && detail < CAPITALS_DATA.length) {
        setSelectedCapitalIndex(detail);
      }
    };
    window.addEventListener("set-capitals-index", handleSetIndex);
    return () => {
      window.removeEventListener("set-capitals-index", handleSetIndex);
    };
  }, []);

  const activeCapital = CAPITALS_DATA[selectedCapitalIndex];
  const IconComponent = ICON_MAP[activeCapital.icon] || Coins;

  return (
    <section id="capitals-section" className="space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
            Value Creation Capitals
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            SDB bank strategically utilizes its resources across six capital pillars to create, preserve, and sustain long-term value for all Sri Lankan stakeholders.
          </p>
        </div>
        <button
          onClick={() => setShowFullSectionModal(true)}
          className="inline-flex items-center space-x-2 bg-sdb-purple text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-sdb-purple/90 transition-all shadow-sm shrink-0 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Read Full Capital Analysis</span>
        </button>
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
                <button
                  onClick={() => setShowFullSectionModal(true)}
                  className="w-full flex items-center justify-center space-x-2 bg-sdb-purple/10 text-sdb-purple border border-sdb-purple/20 hover:bg-sdb-purple hover:text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all mb-6 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read More on {activeCapital.title.split(" ")[0]}</span>
                </button>
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

      {/* Full Capital Report Modal */}
      {showFullSectionModal && (
        <div id="full-capital-modal" className="fixed inset-0 bg-sdb-purple/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="glass-modal rounded-3xl shadow-2xl w-full max-w-4xl max-h-[88vh] overflow-y-auto border border-sdb-purple/10 relative text-left bg-white"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 p-6 border-b border-sdb-purple/10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sdb-purple text-white rounded-xl">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-sdb-coral uppercase tracking-widest font-bold">Comprehensive Capital Analysis</span>
                  <h3 className="font-serif text-2xl font-bold text-sdb-purple">{activeCapital.title} - Full Report</h3>
                </div>
              </div>
              <button
                onClick={() => setShowFullSectionModal(false)}
                className="p-2 text-slate-400 hover:text-sdb-purple rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Strategic Context */}
              <div className="space-y-3">
                <h4 className="font-serif text-lg font-bold text-sdb-purple flex items-center space-x-2 border-b border-sdb-purple/10 pb-2">
                  <Sparkles className="w-5 h-5 text-sdb-coral" />
                  <span>Strategic Mandate & Input Resources</span>
                </h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {activeCapital.summary} During FY 2025, SDB bank deployed structured risk mitigation, digital technology, and grassroots field networks to convert capital inputs into durable long-term economic, social, and environmental outcomes.
                </p>
              </div>

              {/* Detailed Actions & Outcomes Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-sdb-purple/5 rounded-2xl p-6 border border-sdb-purple/10 space-y-3">
                  <h5 className="font-serif font-bold text-sdb-purple text-base">Key Strategic Initiatives (2025)</h5>
                  <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                    {activeCapital.actions.map((act, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-sdb-purple rounded-full mt-2 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-sdb-green/5 rounded-2xl p-6 border border-sdb-green/10 space-y-3">
                  <h5 className="font-serif font-bold text-sdb-green text-base">Quantitative Outcomes & Value Creation</h5>
                  <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                    {activeCapital.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-sdb-green shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Strategic Priorities for 2026-2029 */}
              <div className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-sdb-purple flex items-center space-x-2 border-b border-sdb-purple/10 pb-2">
                  <TrendingUp className="w-5 h-5 text-sdb-green" />
                  <span>Rabo Partnerships Roadmap (2026–2029)</span>
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  Under the upcoming 2026-2029 strategic cycle, SDB bank will optimize {activeCapital.title} by enhancing credit scoring algorithms for agricultural micro-borrowers, expanding female SME financial access, and scaling green loan products to accelerate Sri Lanka's transition to a low-carbon economy.
                </p>
              </div>

              {/* Targeted SDGs */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h5 className="font-serif font-bold text-sdb-purple text-sm uppercase tracking-wider">UN Sustainable Development Goals Alignment</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCapital.sdgs.map((sdg) => (
                    <div key={sdg.id} className="flex items-start space-x-3 text-xs">
                      <div className="w-7 h-7 shrink-0 bg-sdb-coral text-white font-mono font-bold rounded-lg flex items-center justify-center text-xs shadow-sm">
                        {sdg.id}
                      </div>
                      <div>
                        <p className="font-bold text-sdb-purple">{sdg.name}</p>
                        <p className="text-slate-500 text-xs mt-0.5">{sdg.contribution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-sdb-purple/10 flex justify-end">
              <button
                onClick={() => setShowFullSectionModal(false)}
                className="bg-sdb-purple text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-sdb-purple/90 transition-all cursor-pointer"
              >
                Close Report
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
