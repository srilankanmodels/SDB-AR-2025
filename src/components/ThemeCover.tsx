import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight, Sparkles, HeartHandshake, TrendingUp, ShieldCheck,
  FileText, Users, Award, ExternalLink, Download, BookOpen,
  ChevronRight, X, Play, Compass, Leaf
} from "lucide-react";
import SDBLogo from "./SDBLogo";
import { useBranding } from "./BrandingContext";
import NavbarShader from "./NavbarShader";

interface ThemeCoverProps {
  onExplore: () => void;
  onNavigateSection?: (section: any, subtab?: string) => void;
  onOpenDownloadCentre?: () => void;
  onOpenSearch?: () => void;
}

export default function ThemeCover({
  onExplore,
  onNavigateSection,
  onOpenDownloadCentre,
  onOpenSearch
}: ThemeCoverProps) {
  const { branding } = useBranding();
  const coverImg = branding.coverImage || "/src/assets/annual_report_images/theme/cover_handcrafted.png";
  const [showThemeModal, setShowThemeModal] = useState(false);

  const handleJump = (sectionId: string, subtab?: string) => {
    if (onNavigateSection) {
      onNavigateSection(sectionId, subtab);
    } else {
      onExplore();
    }
  };

  const FEATURED_SPOTLIGHTS = [
    {
      id: "chairperson",
      section: "leadership",
      subtab: "chairperson",
      title: "Message from the Chairperson",
      subtitle: "Ms. Dinithi Ratnayake",
      image: "/src/assets/annual_report_images/leadership/page_44_image_1.png",
      tag: "Leadership Review"
    },
    {
      id: "ceo",
      section: "leadership",
      subtab: "ceo",
      title: "CEO's Strategic Review",
      subtitle: "Mr. Kapila Ariyaratne",
      image: "/src/assets/annual_report_images/leadership/page_48_image_2.png",
      tag: "Executive Review"
    },
    {
      id: "strategy",
      section: "strategy",
      title: "Strategic Growth Blueprint",
      subtitle: "Rabo Partnerships & Agri Task Force",
      image: "/src/assets/annual_report_images/strategy/page_32_image_0.png",
      tag: "Roadmap 2026–2029"
    },
    {
      id: "sustainability",
      section: "sustainability",
      title: "Sustainability & UN SDGs",
      subtitle: "8 ESG Pillars & European SSCI",
      image: "/src/assets/annual_report_images/capitals/page_68_image_5.png",
      tag: "ESG & Community"
    }
  ];

  return (
    <div id="theme-cover-container" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white text-slate-800 selection:bg-sdb-purple/20">
      {/* Cinematic Ambient Animated Background Video on Clean Pure White Canvas - Left Aligned */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center lg:justify-start pl-0 lg:pl-8">
        <video
          src="/src/assets/annual_report_images/theme/mainvideo.mp4"
          poster={coverImg}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full lg:w-auto max-h-[115vh] object-contain object-center lg:object-left mix-blend-multiply opacity-90 lg:opacity-100 filter contrast-105"
        />
        {/* Soft pure white gradient vignette on the right to ensure crisp text contrast for right column */}
        <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white via-white/85 to-transparent lg:w-7/12 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      {/* Top Header Bar with WebGL Shader Accent Ribbon */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-6">
        <div className="relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-3.5 backdrop-blur-xl bg-white/80 border border-slate-200/70 rounded-3xl px-6 py-3.5 shadow-[0_4px_30px_rgba(47,27,104,0.05)] transition-all duration-300">
          {/* WebGL Fluid Shader Top Accent */}
          <div className="absolute top-0 inset-x-0">
            <NavbarShader height={2.5} />
          </div>

          {/* Left Brand Lockup */}
          <div className="flex items-center space-x-3.5 select-none">
            <SDBLogo className="h-9 md:h-10 transition-transform duration-300 hover:scale-[1.02]" />
            <div className="hidden sm:block h-7 w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-0.5" />
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#1A1230] font-sans leading-none">
                SANASA Development Bank PLC
              </span>
              <div className="flex items-center space-x-2 text-[9.5px] text-slate-500 font-medium tracking-wide mt-1">
                <span>Integrated Annual Report 2025</span>
                <span className="text-slate-300">&bull;</span>
                <span className="inline-flex items-center space-x-1 font-mono text-sdb-purple font-semibold bg-sdb-purple/5 px-1.5 py-0.5 rounded border border-sdb-purple/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>CSE: SDB.N0000</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center space-x-2 text-xs font-mono">
            {/* Quick Search trigger */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="hidden md:inline-flex items-center space-x-2 bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 px-3.5 py-1.5 rounded-full border border-slate-200 transition-all cursor-pointer shadow-2xs font-sans group"
                title="Search the Report (Ctrl+K)"
              >
                <Sparkles className="w-3.5 h-3.5 text-sdb-purple group-hover:rotate-12 transition-transform" />
                <span className="font-medium text-xs">Search</span>
                <kbd className="text-[9.5px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-300 text-slate-500">
                  Ctrl+K
                </kbd>
              </button>
            )}

            {/* Explore Report CTA */}
            <button
              onClick={onExplore}
              className="inline-flex items-center space-x-1.5 text-sdb-purple hover:text-sdb-purple-dark bg-sdb-purple/5 hover:bg-sdb-purple/10 border border-sdb-purple/20 px-3.5 py-1.5 rounded-full cursor-pointer transition-all font-sans font-bold shadow-2xs text-xs"
            >
              <span>Explore Report</span>
              <ChevronRight className="w-3.5 h-3.5 text-sdb-coral" />
            </button>

            {/* Download Full PDF CTA */}
            <button
              onClick={() => onOpenDownloadCentre ? onOpenDownloadCentre() : window.open("https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf", "_blank")}
              className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-sdb-purple via-[#3D237A] to-sdb-purple hover:brightness-110 text-white border border-white/15 px-4 py-1.5 rounded-full cursor-pointer shadow-md shadow-sdb-purple/20 font-sans font-bold text-xs transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5 text-sdb-coral" />
              <span>Full PDF (328 Pages)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Showcase */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column on Desktop: Open Showcase for Background Animated Artwork on Left */}
          <div className="lg:col-span-5 hidden lg:block min-h-[460px] pointer-events-none order-2 lg:order-1" />

          {/* Right Column on Desktop: Minimal Editorial Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left lg:pl-6 order-1 lg:order-2">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#1A1230] leading-[1.05]">
                A FUTURE <br />
                <span className="text-gradient-purple-coral italic font-light">HANDCRAFTED</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl font-sans leading-relaxed pt-1">
                Weaving together co-operative heritage, grassroots craftsmanship, resilient rural communities, and modern digital banking to shape enduring national prosperity.
              </p>
            </motion.div>

            {/* "Explore the Theme" Expandable Capsule (Inspired by ComBank) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-1"
            >
              <div className="relative inline-block">
                <button
                  onClick={() => setShowThemeModal(true)}
                  className="inline-flex items-center space-x-2.5 bg-white/90 hover:bg-white text-sdb-purple px-5 py-2.5 rounded-full border border-sdb-purple/20 shadow-xs hover:shadow-md transition-all group cursor-pointer text-xs font-bold"
                >
                  <BookOpen className="w-4 h-4 text-sdb-coral" />
                  <span>Explore the Theme Philosophy</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={onExplore}
                className="inline-flex items-center space-x-3 bg-sdb-purple hover:bg-sdb-purple-dark text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-sdb-purple/20 hover:shadow-xl transition-all group cursor-pointer text-sm"
              >
                <span>Enter Interactive Report</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenSearch && onOpenSearch()}
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-5 py-3.5 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer text-sm"
              >
                <span>Search 21 Chapters</span>
                <kbd className="text-[10px] font-mono bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">Ctrl+K</kbd>
              </button>
            </motion.div>

            {/* Audited KPI Floating Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 w-full max-w-2xl"
            >
              <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-left shadow-2xs hover:shadow-xs transition-shadow min-h-[105px]">
                <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 font-mono uppercase tracking-wider block truncate">Gross Income</span>
                <span className="text-[15px] sm:text-base md:text-[17px] font-black font-mono tracking-tight text-[#1A1230] whitespace-nowrap block my-1">LKR 18.40 B</span>
                <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-500 font-mono block mt-auto pt-0.5 whitespace-nowrap">Audited 2025</span>
              </div>

              <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-left shadow-2xs hover:shadow-xs transition-shadow min-h-[105px]">
                <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 font-mono uppercase tracking-wider block truncate">Profit Before Tax</span>
                <span className="text-[15px] sm:text-base md:text-[17px] font-black font-mono tracking-tight text-[#1A1230] whitespace-nowrap block my-1">LKR 800.17 M</span>
                <span className="text-[10px] sm:text-[10.5px] font-bold text-emerald-600 font-mono block mt-auto pt-0.5 whitespace-nowrap">+16.94% YoY</span>
              </div>

              <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-left shadow-2xs hover:shadow-xs transition-shadow min-h-[105px]">
                <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 font-mono uppercase tracking-wider block truncate">Net Advances</span>
                <span className="text-[15px] sm:text-base md:text-[17px] font-black font-mono tracking-tight text-[#1A1230] whitespace-nowrap block my-1">LKR 109.84 B</span>
                <span className="text-[10px] sm:text-[10.5px] font-bold text-emerald-600 font-mono block mt-auto pt-0.5 whitespace-nowrap">+15.46% Surge</span>
              </div>

              <div className="flex flex-col justify-between bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 text-left shadow-2xs hover:shadow-xs transition-shadow min-h-[105px]">
                <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-500 font-mono uppercase tracking-wider block truncate">Capital (CAR)</span>
                <span className="text-[15px] sm:text-base md:text-[17px] font-black font-mono tracking-tight text-[#1A1230] whitespace-nowrap block my-1">15.24%</span>
                <span className="text-[10px] sm:text-[10.5px] font-bold text-sdb-coral font-mono block mt-auto pt-0.5 whitespace-nowrap">vs 12.5% CBSL</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Row: 4 Featured Spotlight Cards (Inspired by ComBank Bottom Video Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-slate-200/80"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5 text-sdb-coral" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                Executive Reviews &amp; Strategic Highlights
              </h3>
            </div>
            <button
              onClick={onExplore}
              className="text-xs font-bold text-sdb-purple hover:underline cursor-pointer flex items-center space-x-1"
            >
              <span>View Table of Contents</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURED_SPOTLIGHTS.map((card) => (
              <div
                key={card.id}
                onClick={() => handleJump(card.section, card.subtab)}
                className="bg-white/85 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 hover:border-sdb-purple/30 shadow-2xs hover:shadow-md transition-all cursor-pointer group flex items-center space-x-3.5"
              >
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-sdb-coral block">
                    {card.tag}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-sdb-purple transition-colors truncate">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {card.subtitle}
                  </p>
                  <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-sdb-purple group-hover:text-sdb-coral transition-colors mt-1">
                    <span>Read Section</span>
                    <ArrowRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 text-xs text-slate-500 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="flex items-center space-x-1.5">
          <HeartHandshake className="w-4 h-4 text-sdb-coral" />
          <span>SANASA Development Bank PLC &bull; Co-operative Banking on Values</span>
        </p>
        <p className="font-mono text-[10px] text-slate-400">
          Integrated Annual Report 2025 &bull; Colombo Stock Exchange (CSE: SDB.N0000)
        </p>
      </footer>

      {/* "Explore the Theme" Glass Reveal Modal (Inspired by ComBank) */}
      <AnimatePresence>
        {showThemeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
            >
              <div className="p-6 bg-gradient-to-r from-[#1A1230] to-[#2F1B68] text-white flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <Sparkles className="w-5 h-5 text-sdb-coral" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif">A Future Handcrafted</h3>
                    <p className="text-xs text-slate-300">The 2025 Annual Report Creative Philosophy &bull; Page 2</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowThemeModal(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-serif">
                <p>
                  As Sri Lanka’s economic fabric rebounds with renewed stability, true progress is not born of chance. It is carefully, deliberately handcrafted by the hands of our people: the rural farmer planting sustenance, the micro-entrepreneur expanding a family trade, the artisan weaving regional craft, and the cooperative society mobilizing thrift and solidarity.
                </p>
                <p>
                  The cover visual combines these hands with a colourful, multi-stranded DNA helix. Each strand represents a vital dimension of SDB Bank’s value creation: our 28-year cooperative heritage, deep provincial roots spanning 94 branches, dedication to food security through 68,900+ agricultural facilities, empowerment of female entrepreneurs, and the digital leap powered by UPay.
                </p>
                <p className="text-xs text-slate-500 font-sans italic pt-2 border-t border-slate-100">
                  Together, we are not merely witnessing the future. We are handcrafting it—one community, one enterprise, and one family at a time.
                </p>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">Official Report Source: Page 2</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setShowThemeModal(false);
                      onExplore();
                    }}
                    className="px-4 py-2 bg-sdb-purple hover:bg-sdb-purple-dark text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Start Exploring Report
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
