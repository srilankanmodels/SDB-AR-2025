/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Awards & Accolades
 * Addresses Point 08 (Source: Official Published Annual Report Page 9)
 */

import { motion } from "motion/react";
import { Award, Trophy, Star, ExternalLink, CheckCircle2 } from "lucide-react";
import { AWARDS_DATA } from "../data/overviewAndStrategyData";

export default function AwardsAndAccolades() {
  return (
    <section id="awards-accolades-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Point 08 • Corporate Recognition • Page 9</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            Awards & Accolades
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Honouring SDB bank's operational turnaround, governance excellence, innovative digital branding, and exemplary credit compliance during 2025.
          </p>
        </div>

        <a
          href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-sdb-purple text-white text-xs font-bold font-mono hover:bg-sdb-purple/90 transition-all cursor-pointer shadow-xs"
        >
          <span>View Page 9 in PDF</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
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
                <span className="text-[10px] font-mono text-slate-400">
                  Page {award.sourcePage}
                </span>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-sdb-purple/5 text-sdb-purple flex items-center justify-center group-hover:bg-sdb-purple group-hover:text-white transition-colors duration-300">
                <Trophy className="w-6 h-6" />
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
              <span>National Recognition</span>
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
    </section>
  );
}
