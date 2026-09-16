/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Awards & Accolades
 * Addresses Item 2: Images included as per Annual Report Page 9
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Star, ExternalLink, CheckCircle2, Maximize2, X, FileText, Sparkles } from "lucide-react";
import { AWARDS_DATA } from "../data/overviewAndStrategyData";

export default function AwardsAndAccolades() {
  const [selectedAward, setSelectedAward] = useState<typeof AWARDS_DATA[0] | null>(null);
  const [showFullPageModal, setShowFullPageModal] = useState<boolean>(false);

  return (
    <section id="awards-accolades-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Official Recognition • Annual Report Page 9</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            Awards & Accolades
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Honouring SDB bank's operational turnaround, governance excellence, innovative digital branding, customer convenience, and exemplary credit compliance during 2025.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFullPageModal(true)}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-sdb-purple/10 text-sdb-purple text-xs font-bold font-mono hover:bg-sdb-purple/20 transition-all cursor-pointer border border-sdb-purple/20"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Page 9 Layout</span>
          </button>

          <a
            href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-sdb-purple text-white text-xs font-bold font-mono hover:bg-sdb-purple/90 transition-all cursor-pointer shadow-xs"
          >
            <span>CSE Report PDF</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Awards Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AWARDS_DATA.map((award) => (
          <motion.div
            key={award.id}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-6 border border-sdb-purple/10 shadow-sm flex flex-col justify-between space-y-4 relative overflow-hidden group hover:border-sdb-purple/30 transition-all"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider bg-sdb-coral/10 px-2.5 py-0.5 rounded-full">
                  {award.category || "Excellence"}
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  Page {award.sourcePage} • #{award.id}
                </span>
              </div>

              {/* Authentic Award Image with Zoom CTA */}
              <div
                onClick={() => setSelectedAward(award)}
                className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-4/3 flex items-center justify-center p-3 cursor-pointer group/img"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-sdb-purple/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-sdb-purple text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Enlarge Photo
                  </span>
                </div>
              </div>

              <h3 className="font-serif font-bold text-lg text-sdb-purple leading-snug">
                {award.title}
              </h3>

              <p className="font-mono text-xs text-sdb-coral font-bold">
                {award.organization}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {award.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1 text-sdb-purple font-semibold">
                <Trophy className="w-3.5 h-3.5 text-sdb-amber" /> Verified 2025 Accolade
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Spotlight Callout */}
      <div className="bg-gradient-to-r from-sdb-purple to-sdb-plum text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
        <div className="space-y-2 max-w-xl text-left">
          <span className="text-[10px] font-mono font-bold text-sdb-amber uppercase tracking-widest bg-sdb-amber/20 px-2.5 py-0.5 rounded">
            Integrated Reporting Distinction
          </span>
          <h3 className="font-serif font-bold text-xl md:text-2xl">
            CA Sri Lanka TAGS Awards & CRIB Institutional Rating
          </h3>
          <p className="text-xs text-white/80 leading-relaxed font-sans">
            SDB bank earned the highest A-Institutional Rating from the Credit Information Bureau (CRIB) and achieved full compliance with the Institute of Chartered Accountants of Sri Lanka Transparency, Accountability, Governance & Sustainability (TAGS) standards.
          </p>
        </div>
        <div className="shrink-0 bg-white/10 p-4 rounded-2xl border border-white/15 text-center">
          <Star className="w-8 h-8 text-sdb-amber mx-auto mb-1" />
          <p className="font-serif font-bold text-lg text-sdb-amber">A - Tier Rating</p>
          <p className="text-[10px] font-mono text-white/70">CRIB Statutory Bureau</p>
        </div>
      </div>

      {/* Single Award Lightbox Modal */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedAward(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setSelectedAward(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider bg-sdb-coral/10 px-2.5 py-0.5 rounded-full">
                  {selectedAward.category}
                </span>
                <span className="text-xs font-mono text-slate-400">Page {selectedAward.sourcePage}</span>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 flex items-center justify-center">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="max-h-72 object-contain"
                />
              </div>

              <h3 className="font-serif font-bold text-xl text-sdb-purple">
                {selectedAward.title}
              </h3>
              <p className="text-xs font-mono font-bold text-sdb-coral">
                {selectedAward.organization}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedAward.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Page 9 Layout Modal */}
      <AnimatePresence>
        {showFullPageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setShowFullPageModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl relative text-left"
            >
              <button
                onClick={() => setShowFullPageModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sdb-coral" />
                <h3 className="font-serif font-bold text-xl text-sdb-purple">
                  Annual Report Page 9 • Original Layout
                </h3>
              </div>

              <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
                <img
                  src="/assets/awards/page_9_full.png"
                  alt="Annual Report Page 9 Full"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
