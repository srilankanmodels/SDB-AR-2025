import { motion } from "motion/react";
import { ArrowRight, Sparkles, HeartHandshake } from "lucide-react";
import SDBLogo from "./SDBLogo";
import { useBranding } from "./BrandingContext";

interface ThemeCoverProps {
  onExplore: () => void;
}

export default function ThemeCover(props: ThemeCoverProps) {
  const { branding } = useBranding();

  return (
    <div id="theme-cover-container" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-gradient-to-br from-sdb-cream via-sdb-cream to-sdb-cream-dark p-6 md:p-12 text-slate-800">
      {/* Decorative frosted mesh backdrop blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-sdb-coral/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-sdb-purple/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sdb-amber/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header id="cover-header" className="relative z-10 flex justify-between items-center w-full max-w-7xl mx-auto backdrop-blur-md bg-white/40 border border-sdb-purple/10 rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col items-start">
          <SDBLogo className="h-10" />
          <p className="text-[10px] text-slate-500 tracking-wider font-mono uppercase ml-13 -mt-1">SANASA Development Bank PLC</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <span className="font-mono text-xs text-sdb-purple tracking-wider font-semibold">Integrated Annual Report 2025</span>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main id="cover-main" className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
        {/* Left column: Typography and Text */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-sdb-purple/10 border border-sdb-purple/10 text-sdb-purple px-3 py-1 rounded-full text-xs font-medium font-mono backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Integrated Annual Report 2025</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl font-light text-sdb-purple tracking-tight leading-none">
              A Future <br />
              <span className="font-bold italic relative text-transparent bg-clip-text bg-gradient-to-r from-sdb-coral to-sdb-purple">
                Handcrafted
              </span>
            </h1>
            <p className="font-serif text-2xl text-sdb-plum/80 leading-relaxed italic max-w-lg">
              "Some futures are not built by chance. They are shaped with intention, refined with patience, and nurtured with unwavering belief."
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 leading-relaxed max-w-md text-sm md:text-base"
          >
            In 2025, Sanasa Development Bank PLC proved that its strength lies in the lives it uplifts. Supporting micro, small, and medium enterprises (MSMEs), agriculture, and women-led innovations isn't just a strategy—it is a responsibility embedded in our DNA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-4"
          >
            <button
              onClick={props.onExplore}
              className="inline-flex items-center space-x-3 bg-sdb-purple hover:bg-sdb-plum text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <span>Explore Annual Report</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Right column: Beautiful handcrafted interactive DNA Helix / Knitting animation or Custom Image */}
        <div className="lg:col-span-6 flex justify-center items-center relative min-h-[350px] md:min-h-[500px]">
          {/* Conceptual background glow matching cover page colors */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full bg-sdb-purple/10 blur-2xl animate-pulse" />
          </div>

          {branding.coverImage ? (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[450px] aspect-[3/4] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/50 p-2 backdrop-blur-sm group"
            >
              <img
                src={branding.coverImage}
                alt="A Future Handcrafted - Knitting DNA"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlay decorative elements mimicking the handcrafted theme */}
              <div className="absolute inset-0 border border-sdb-purple/10 rounded-3xl pointer-events-none" />
              <div className="absolute inset-2 border-2 border-dashed border-sdb-purple/5 rounded-2xl pointer-events-none" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[400px] aspect-square flex items-center justify-center"
            >
              {/* SVG Interactive Drawing of Hands Knitting the DNA Spiral */}
              <svg viewBox="0 0 400 500" className="w-full h-full max-h-[500px]">
                {/* Glowing core */}
                <defs>
                  <linearGradient id="helix-glow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2F1B68" />
                    <stop offset="35%" stopColor="#E8456C" />
                    <stop offset="70%" stopColor="#E2861F" />
                    <stop offset="100%" stopColor="#248D4D" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="2" dy="2" stdDeviation="4" floodOpacity="0.15" />
                  </filter>
                </defs>

                {/* Handcrafted Knitting Needles (Background Layer) */}
                <g filter="url(#shadow)">
                  {/* Needle 1 */}
                  <line x1="80" y1="60" x2="220" y2="140" stroke="#8C6239" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="80" cy="60" r="10" fill="#E2861F" />
                  
                  {/* Needle 2 */}
                  <line x1="320" y1="60" x2="180" y2="140" stroke="#8C6239" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="320" cy="60" r="10" fill="#E8456C" />
                </g>

                {/* Interactive Knitted DNA strands */}
                <g filter="url(#shadow)">
                  {/* Thread strands that wind down to represent the DNA Helix */}
                  {Array.from({ length: 15 }).map((_, i) => {
                    const y = 140 + i * 22;
                    const angle = (i * Math.PI) / 3;
                    const width = 45;
                    
                    // Calculate sine-wave X coordinates representing double helix spiral
                    const x1 = 200 + Math.sin(angle) * width;
                    const x2 = 200 - Math.sin(angle) * width;
                    const zIndex = Math.cos(angle); // to decide which strand overlaps
                    
                    const r = 6;
                    // Theme color based on depth of DNA spiral
                    let strandColor = "var(--color-sdb-purple)";
                    if (i % 5 === 0) strandColor = "var(--color-sdb-coral)";
                    else if (i % 5 === 1) strandColor = "var(--color-sdb-amber)";
                    else if (i % 5 === 2) strandColor = "var(--color-sdb-green)";
                    else if (i % 5 === 3) strandColor = "var(--color-sdb-blue)";
                    else strandColor = "var(--color-sdb-plum)";

                    return (
                      <g key={i}>
                        {/* Connecting Base Pair bridges (DNA links) */}
                        <motion.line
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                          x1={x1}
                          y1={y}
                          x2={x2}
                          y2={y}
                          stroke={strandColor}
                          strokeWidth="3"
                          strokeDasharray="2,2"
                        />

                        {/* Strand Point 1 (Front/Back depending on zIndex) */}
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.05, type: "spring", stiffness: 100 }}
                          cx={x1}
                          cy={y}
                          r={r}
                          fill={zIndex >= 0 ? strandColor : "#CBD5E1"}
                          className="cursor-pointer hover:r-8 transition-all"
                        />

                        {/* Strand Point 2 */}
                        <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.05 + 0.02, type: "spring", stiffness: 100 }}
                          cx={x2}
                          cy={y}
                          r={r}
                          fill={zIndex < 0 ? strandColor : "#94A3B8"}
                          className="cursor-pointer hover:r-8 transition-all"
                        />

                        {/* Wool texture lines wrapping around points (Stylized Knitting effect) */}
                        {zIndex >= 0 && (
                          <path
                            d={`M ${x1 - 10} ${y - 8} Q ${x1} ${y + 10} ${x1 + 10} ${y - 8}`}
                            fill="none"
                            stroke={strandColor}
                            strokeWidth="1.5"
                            opacity="0.8"
                          />
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* Handcrafted organic vines and flower buds growing along the DNA */}
                <g opacity="0.8">
                  {/* Decorative leaves */}
                  <path d="M 230 180 Q 250 170 245 190 Z" fill="var(--color-sdb-green)" />
                  <path d="M 160 220 Q 140 215 150 230 Z" fill="var(--color-sdb-green)" />
                  <path d="M 240 280 Q 255 295 235 295 Z" fill="var(--color-sdb-green)" />
                  <path d="M 155 360 Q 140 375 160 380 Z" fill="var(--color-sdb-green)" />
                  
                  {/* Micro flower buds */}
                  <circle cx="245" cy="190" r="4" fill="var(--color-sdb-coral)" />
                  <circle cx="140" cy="215" r="4" fill="var(--color-sdb-amber)" />
                  <circle cx="255" cy="295" r="4" fill="var(--color-sdb-blue)" />
                </g>

                {/* Sri Lanka Map silhouette outline subtly floating at the bottom */}
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  transition={{ delay: 1, duration: 2 }}
                  d="M200,320 C180,340 185,380 180,400 C175,410 180,430 190,440 C195,445 205,445 210,430 C215,420 225,410 225,390 C225,370 215,350 210,340 Z"
                  fill="none"
                  stroke="url(#helix-glow)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer id="cover-footer" className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 border-t border-sdb-purple/10 pt-6">
        <p className="flex items-center space-x-1">
          <HeartHandshake className="w-3.5 h-3.5 text-sdb-coral" />
          <span>Crafting Sri Lanka's grassroots prosperity, one household at a time.</span>
        </p>
        <p className="mt-2 md:mt-0 font-mono text-[10px]">© 2025 SANASA Development Bank PLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
