import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VALUES_DATA } from "../data/reportData";
import { 
  Landmark, Briefcase, Shovel, Cpu, ShieldCheck, Maximize2, X, 
  ExternalLink, Layers, CheckCircle2, ChevronRight, Sparkles 
} from "lucide-react";

// Official published images directly imported for reliable Vite bundling & rendering
import page30ValueCreationImg from "../assets/annual_report_images/strategy/page_32_screenshot.png";
import page31CapitalOutputsImg from "../assets/annual_report_images/strategy/page_33_screenshot.png";
import page32BlueprintArtworkImg from "../assets/annual_report_images/strategy/page_32_image_0.png";
import page33BlueprintArtworkImg from "../assets/annual_report_images/strategy/page_33_image_1.png";

const PILLARS_DATA = [
  {
    title: "Co-operative Banking",
    desc: "To be the partner of choice for Sri Lanka's cooperative sector. We manage active banking relationships with over 4,000 SANASA cooperative societies, sourcing approximately 35% of our deposit base from this critical community network.",
    icon: Landmark,
    accent: "text-sdb-purple"
  },
  {
    title: "MSMEs",
    desc: "Uplifting the micro, small, and medium enterprise sector across all 25 districts. Over 25% of our total lending is channelled directly into SMEs, which form the backbone of the national economic recovery.",
    icon: Briefcase,
    accent: "text-sdb-coral"
  },
  {
    title: "Agri Banking & VCF",
    desc: "Collaborating with Rabo Partnerships on a specialized Agri Financing Strategy. We streamline credit flows to local farmers and establish Value Chain Financing (VCF) ecosystems linking large corporate anchors to grassroots agricultural suppliers.",
    icon: Shovel,
    accent: "text-sdb-green"
  },
  {
    title: "Digital Inclusion",
    desc: "Narrowing the urban-rural financial gap via cutting-edge platforms. SDB's digital ecosystem features our SDB UUpay mobile wallet, secure Business Internet Banking portals, and electronic payments to Customs, Ports, and Inland Revenue.",
    icon: Cpu,
    accent: "text-sdb-blue"
  }
];

export default function StrategySection() {
  const [activeModelTab, setActiveModelTab] = useState<"page30" | "page31">("page30");
  const [activeBlueprintTab, setActiveBlueprintTab] = useState<"artwork" | "pillars">("artwork");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle: string; page: string } | null>(null);

  return (
    <section id="strategy-section" className="space-y-16">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
          Strategic Roadmap 2026-2029
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
          Our forward-looking sustainable growth blueprint recalibrates SDB bank's services through four strategic pillars, five core values, and future-ready goals.
        </p>
      </div>

      {/* Strategic Pillars Bento-grid */}
      <div id="strategic-pillars-bento" className="space-y-6 text-left">
        <h3 className="font-serif text-2xl font-bold text-sdb-purple">Our Four Strategic Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS_DATA.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-3xl p-6 flex flex-col justify-between shadow-md border border-sdb-purple/10 text-left relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sdb-purple/5 rounded-bl-full pointer-events-none -z-10" />
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/40 border border-sdb-purple/10 ${pillar.accent}`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-sdb-purple">{pillar.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Core Values Bento Layout */}
      <div id="core-values-bento" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
        {/* Left column: Vision/Mission Statement */}
        <div className="lg:col-span-5 glass-card rounded-3xl p-6 md:p-8 flex flex-col justify-between space-y-8 shadow-sm">
          <div>
            <span className="font-mono text-[10px] text-sdb-coral font-bold uppercase tracking-widest block mb-2">Our Vision</span>
            <h4 className="font-serif text-2xl font-bold text-sdb-purple leading-snug">
              "To enable the economic transformation of progressive individuals, communities, Co-operatives and entrepreneurs."
            </h4>
          </div>
          <div className="border-t border-sdb-purple/10 pt-6">
            <span className="font-mono text-[10px] text-sdb-green font-bold uppercase tracking-widest block mb-2">Our Mission</span>
            <p className="font-serif text-xl font-medium text-sdb-purple italic leading-relaxed">
              "To be a leading partner for inclusive and sustainable national development."
            </p>
          </div>
        </div>

        {/* Right column: Values Grid */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-sdb-purple">Our Cooperative Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES_DATA.map((val, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 flex flex-col space-y-2 hover:border-sdb-purple/20 transition-all shadow-md"
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sdb-coral shrink-0" />
                  <h4 className="font-serif font-bold text-sm text-sdb-purple leading-tight">{val.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Blueprint & Business Model Publication Spotlights (Pages 30-33) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-md text-left space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-sdb-purple/10 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
              Strategic Frameworks • Annual Report Pages 30–33
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple">
              How We Create Value & Strategic Blueprint
            </h3>
          </div>
          <span className="text-xs font-mono text-sdb-green bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
            In Collaboration with Rabo Partnerships
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Value Creation Architecture (Pages 30-31) */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sdb-purple font-bold block">
                  Value Creation Architecture (Pages 30–31)
                </span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-[10px] font-mono font-semibold">
                  <button
                    onClick={() => setActiveModelTab("page30")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeModelTab === "page30"
                        ? "bg-white text-sdb-purple shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Page 30: Model
                  </button>
                  <button
                    onClick={() => setActiveModelTab("page31")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeModelTab === "page31"
                        ? "bg-white text-sdb-purple shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Page 31: Outputs
                  </button>
                </div>
              </div>

              {/* Image Preview with Zoom Overlay */}
              <div 
                onClick={() => setLightboxImage({
                  src: activeModelTab === "page30" ? page30ValueCreationImg : page31CapitalOutputsImg,
                  title: activeModelTab === "page30" ? "How We Create Value (Page 30)" : "Capital Inputs & Value Created (Page 31)",
                  subtitle: "Integrated value creation flow showing 6 capitals, governance enablers, and stakeholder outcomes.",
                  page: activeModelTab === "page30" ? "30" : "31"
                })}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 cursor-pointer aspect-4/3 flex items-center justify-center"
              >
                <img
                  src={activeModelTab === "page30" ? page30ValueCreationImg : page31CapitalOutputsImg}
                  alt={activeModelTab === "page30" ? "SDB Value Creation Model Page 30" : "SDB Capital Inputs Page 31"}
                  className="w-full h-full object-contain p-2 group-hover:scale-103 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to static public path if needed
                    const target = e.currentTarget;
                    if (target.src !== "/assets/annual_report_images/strategy/page_32_screenshot.png") {
                      target.src = "/assets/annual_report_images/strategy/page_32_screenshot.png";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sdb-purple/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Maximize2 className="w-3.5 h-3.5 text-amber-300" /> Click to enlarge high-resolution diagram (Page {activeModelTab === "page30" ? "30" : "31"})
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {activeModelTab === "page30" 
                  ? "How inputs across 6 Capitals flow through governance, risk assessment, and core operations to generate outputs for stakeholders."
                  : "Comparative analysis of 6 Capital inputs as at 31 Dec 2024 vs 31 Dec 2025 and corresponding value created."
                }
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1 text-sdb-purple font-semibold">
                <Layers className="w-3.5 h-3.5" /> 6 Capitals Architecture
              </span>
              <button
                onClick={() => setLightboxImage({
                  src: page30ValueCreationImg,
                  title: "How We Create Value (Page 30)",
                  subtitle: "Official published Integrated Value Creation Architecture.",
                  page: "30"
                })}
                className="text-sdb-coral hover:underline font-bold flex items-center gap-1"
              >
                Inspect Full Diagram <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: 2026-2029 Strategic Blueprint (Pages 32-33) */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sdb-purple font-bold block">
                  2026–2029 Strategic Blueprint (Page 32)
                </span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 text-[10px] font-mono font-semibold">
                  <button
                    onClick={() => setActiveBlueprintTab("artwork")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeBlueprintTab === "artwork"
                        ? "bg-white text-sdb-purple shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Page 32 Artwork
                  </button>
                  <button
                    onClick={() => setActiveBlueprintTab("pillars")}
                    className={`px-2.5 py-1 rounded-md transition-all ${
                      activeBlueprintTab === "pillars"
                        ? "bg-white text-sdb-purple shadow-2xs"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Rabo Pillars
                  </button>
                </div>
              </div>

              {/* Image Preview with Zoom Overlay */}
              {activeBlueprintTab === "artwork" ? (
                <div 
                  onClick={() => setLightboxImage({
                    src: page32BlueprintArtworkImg,
                    title: "Strategic Transformation DNA (Page 32)",
                    subtitle: "Handcrafted watercolor artwork representing cooperative transformation, agricultural value chains, and DNA growth.",
                    page: "32"
                  })}
                  className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-gradient-to-br from-purple-50/40 via-amber-50/30 to-emerald-50/30 cursor-pointer aspect-4/3 flex items-center justify-center"
                >
                  <img
                    src={page32BlueprintArtworkImg}
                    alt="SDB Strategic Blueprint Page 32"
                    className="w-full h-full object-contain p-2 group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to static public path if needed
                      const target = e.currentTarget;
                      if (target.src !== "/assets/annual_report_images/strategy/page_32_image_0.png") {
                        target.src = "/assets/annual_report_images/strategy/page_32_image_0.png";
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sdb-purple/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <Maximize2 className="w-3.5 h-3.5 text-amber-300" /> Click to view full artwork (Page 32)
                    </span>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 aspect-4/3 flex flex-col justify-between overflow-y-auto space-y-2.5">
                  <div className="text-xs font-bold text-sdb-purple flex items-center gap-1.5 border-b border-slate-200 pb-2">
                    <Sparkles className="w-4 h-4 text-sdb-coral" />
                    Rabo Partnerships Netherlands Strategy Pillars
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <strong className="text-sdb-purple font-semibold block text-[11px]">1. Agribusiness Strategy</strong>
                      <span className="text-slate-600 text-[11px] leading-tight block">SDB Agri Manual, 45-member Agri Task Force & expert crop assessment panel.</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <strong className="text-sdb-coral font-semibold block text-[11px]">2. SME & Value Chain Financing (VCF)</strong>
                      <span className="text-slate-600 text-[11px] leading-tight block">Connecting grassroots cooperative growers with corporate anchor buyers.</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <strong className="text-sdb-green font-semibold block text-[11px]">3. Digital Transformation & UPay</strong>
                      <span className="text-slate-600 text-[11px] leading-tight block">Cloud-native digital workflows and paperless farmer credit scoring.</span>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed">
                Designed with Rabo Partnerships to expand agricultural value chains, sustainable MSME lending, and rural digital penetration.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1 text-sdb-green font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Technical Advisory Sign-Off
              </span>
              <button
                onClick={() => setLightboxImage({
                  src: page32BlueprintArtworkImg,
                  title: "2026-2029 Strategic Transformation Blueprint",
                  subtitle: "Joint strategic transformation roadmap formulated with Rabo Partnerships Netherlands.",
                  page: "32"
                })}
                className="text-sdb-coral hover:underline font-bold flex items-center gap-1"
              >
                Inspect Artwork <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal for Full-Resolution High-Quality Inspection */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-sdb-purple to-[#4A154B] text-white flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                    Annual Report Official Publication • Page {lightboxImage.page}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs text-purple-200 mt-0.5 line-clamp-1">
                    {lightboxImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 ml-4"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="p-4 sm:p-6 flex-1 overflow-auto flex items-center justify-center bg-slate-50">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-md border border-slate-200"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-[11px]">
                  Audited & Published by SANASA Development Bank PLC
                </span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-1.5 bg-sdb-purple text-white font-semibold rounded-lg hover:bg-sdb-purple/90 transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
