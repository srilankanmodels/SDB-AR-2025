import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TIMELINE_MILESTONES } from "../data/reportData";
import { Calendar, ChevronRight, ChevronLeft } from "lucide-react";

export default function TimelineSection() {
  const [activeYearIndex, setActiveYearIndex] = useState<number>(TIMELINE_MILESTONES.length - 1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeYearButtonRef = useRef<HTMLButtonElement>(null);

  const activeMilestone = TIMELINE_MILESTONES[activeYearIndex];

  // Auto-scroll the timeline bar to keep the active year centered, ensuring years after 2016 remain visible
  useEffect(() => {
    if (activeYearButtonRef.current) {
      activeYearButtonRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    }
  }, [activeYearIndex]);

  const handleNext = () => {
    if (activeYearIndex < TIMELINE_MILESTONES.length - 1) {
      setActiveYearIndex(activeYearIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeYearIndex > 0) {
      setActiveYearIndex(activeYearIndex - 1);
    }
  };

  return (
    <section id="timeline-section" className="space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
          Our Evolution
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
          Our journey began in 1997 with a pioneering spirit to uplift co-operatives and communities. Through 28 years of resilience, we have crafted a stable, progressive future.
        </p>
      </div>

      {/* Horizontal Nav Bar of Years */}
      <div id="timeline-years-navigation" className="relative flex items-center justify-between bg-white/60 rounded-2xl p-3 sm:p-4 border border-sdb-purple/15 backdrop-blur-md shadow-xs">
        <button
          onClick={handlePrev}
          disabled={activeYearIndex === 0}
          title="Previous Milestone"
          aria-label="Previous Milestone"
          className="p-2.5 rounded-xl bg-white border border-sdb-purple/15 hover:bg-sdb-purple/5 hover:border-sdb-purple/30 disabled:opacity-30 disabled:hover:border-sdb-purple/10 transition-all cursor-pointer shrink-0 shadow-2xs"
        >
          <ChevronLeft className="w-4 h-4 text-sdb-purple" />
        </button>

        <div ref={scrollContainerRef} className="flex-1 overflow-x-auto mx-2 sm:mx-4 scrollbar-thin scrollbar-thumb-sdb-purple/20 scrollbar-track-transparent py-1">
          <div className="flex justify-start items-center space-x-2 sm:space-x-3 min-w-max px-2">
            {TIMELINE_MILESTONES.map((milestone, index) => {
              const isActive = index === activeYearIndex;
              return (
                <button
                  key={milestone.year}
                  ref={isActive ? activeYearButtonRef : null}
                  onClick={() => setActiveYearIndex(index)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                    isActive
                      ? "bg-sdb-purple text-white shadow-md scale-105 shadow-sdb-purple/25 ring-2 ring-sdb-purple/20 font-bold"
                      : "text-sdb-purple/70 hover:text-sdb-purple hover:bg-sdb-purple/10 bg-white/70 border border-sdb-purple/10"
                  }`}
                >
                  {milestone.year}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={activeYearIndex === TIMELINE_MILESTONES.length - 1}
          title="Next Milestone"
          aria-label="Next Milestone"
          className="p-2.5 rounded-xl bg-white border border-sdb-purple/15 hover:bg-sdb-purple/5 hover:border-sdb-purple/30 disabled:opacity-30 disabled:hover:border-sdb-purple/10 transition-all cursor-pointer shrink-0 shadow-2xs"
        >
          <ChevronRight className="w-4 h-4 text-sdb-purple" />
        </button>
      </div>

      {/* Main Interactive Slider card */}
      <div id="timeline-card-container" className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYearIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left"
          >
            {/* Big Bold Year display */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start border-b lg:border-b-0 lg:border-r border-sdb-purple/10 pb-6 lg:pb-0 lg:pr-8">
              <div className="flex items-center space-x-2 text-sdb-coral mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">SDB Milestone</span>
              </div>
              <h3 className="font-serif text-6xl md:text-8xl font-black text-sdb-purple leading-none tracking-tighter">
                {activeMilestone.year}
              </h3>
            </div>

            {/* Content and Narrative */}
            <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
              <h4 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple tracking-tight leading-snug">
                {activeMilestone.title}
              </h4>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                {activeMilestone.description}
              </p>

              {/* Milestone Bullet Points */}
              {activeMilestone.points && activeMilestone.points.length > 0 && (
                <div className="bg-sdb-purple/5 rounded-2xl p-4 sm:p-5 border border-sdb-purple/10 space-y-2.5 mt-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sdb-coral block">
                    Key Highlights & Developments in {activeMilestone.year}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {activeMilestone.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start space-x-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sdb-purple shrink-0 mt-1.5" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Context indicator */}
              <div className="flex items-center space-x-2 pt-4">
                <div className="h-1 flex-1 bg-sdb-purple/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sdb-coral transition-all duration-300"
                    style={{ width: `${((activeYearIndex + 1) / TIMELINE_MILESTONES.length) * 100}%` }}
                  />
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  {activeYearIndex + 1} / {TIMELINE_MILESTONES.length}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Archival Report Publication Gallery (Pages 6-8 & 9) */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-md text-left space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-sdb-purple/10 pb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
              Historical Documentation • Annual Report Pages 6–9
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple">
              28 Years of Cooperative & Commercial Banking
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Founded 1997 • Colombo Stock Exchange Listed
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-sdb-purple font-bold block">
              1. The Foundation & Rural Roots (Page 6)
            </span>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <img
                src="/src/assets/annual_report_images/evolution/page_6_screenshot.png"
                alt="SDB Evolution Page 6"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Incorporated with LKR 123 Mn capital from primary SANASA societies.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-sdb-purple font-bold block">
              2. CSE Listing & Expansion (Page 7)
            </span>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <img
                src="/src/assets/annual_report_images/evolution/page_7_screenshot.png"
                alt="SDB Evolution Page 7"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Listed on CSE Main Board in 2012; assets expanded beyond LKR 66 Bn.
            </p>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs text-sdb-purple font-bold block">
              3. Awards & Accolades in 2025 (Page 9)
            </span>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <img
                src="/src/assets/annual_report_images/awards/page_9_screenshot.png"
                alt="SDB Awards and Accolades Page 9"
                className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            <p className="text-[11px] text-slate-500 leading-snug">
              Recognized nationally and internationally for MSME growth and digital innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
