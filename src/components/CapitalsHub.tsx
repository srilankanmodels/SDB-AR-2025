/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Value Creation Capitals Hub
 * Source: Official Published Annual Report 2025 (Pages 68-106)
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Coins, Home, Brain, Users, Handshake, Leaf, ArrowRight, CheckCircle2, 
  BookOpen, X, Sparkles, TrendingUp, Table, Compass, Target, Layers
} from "lucide-react";
import { CAPITALS_DEEP_DATA, CapitalDeepRecord } from "../data/capitalsDeepData";

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
  const [activeSubTab, setActiveSubTab] = useState<"actions-outcomes" | "detailed-disclosures" | "future-outlook" | "sdgs">("actions-outcomes");
  const [showFullSectionModal, setShowFullSectionModal] = useState<boolean>(false);
  const [modalCapitalIndex, setModalCapitalIndex] = useState<number>(0);

  useEffect(() => {
    const handleSetIndex = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail === "number" && detail >= 0 && detail < CAPITALS_DEEP_DATA.length) {
        setSelectedCapitalIndex(detail);
      }
    };
    window.addEventListener("set-capitals-index", handleSetIndex);
    return () => {
      window.removeEventListener("set-capitals-index", handleSetIndex);
    };
  }, []);

  const activeCapital = CAPITALS_DEEP_DATA[selectedCapitalIndex];
  const IconComponent = ICON_MAP[activeCapital.iconName] || Coins;

  const modalCapital = CAPITALS_DEEP_DATA[modalCapitalIndex];
  const ModalIconComponent = ICON_MAP[modalCapital.iconName] || Coins;

  return (
    <section id="capitals-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Management Discussion &amp; Analysis • Pages 68–106</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
            Value Creation Capitals
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Comprehensive analysis of SDB bank's strategic deployment across the 6 Value Creation Capitals: transforming resource inputs into sustainable stakeholder prosperity.
          </p>
        </div>
        <button
          onClick={() => {
            setModalCapitalIndex(selectedCapitalIndex);
            setShowFullSectionModal(true);
          }}
          className="inline-flex items-center space-x-2 bg-sdb-purple text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-sdb-purple/90 transition-all shadow-sm shrink-0 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Full 39-Page Disclosures Reader</span>
        </button>
      </div>

      {/* Grid selector of 6 capitals */}
      <div id="capitals-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {CAPITALS_DEEP_DATA.map((capital, index) => {
          const isActive = index === selectedCapitalIndex;
          const CapIcon = ICON_MAP[capital.iconName] || Coins;
          return (
            <button
              key={capital.id}
              onClick={() => {
                setSelectedCapitalIndex(index);
                setActiveSubTab("actions-outcomes");
              }}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 text-center cursor-pointer ${
                isActive
                  ? "bg-white border-sdb-purple/30 shadow-md scale-102 ring-2 ring-sdb-purple/10"
                  : "bg-white/50 border-sdb-purple/5 hover:border-sdb-purple/20 hover:bg-white/80"
              }`}
            >
              <div
                className={`p-3 rounded-full mb-2.5 transition-colors ${
                  isActive
                    ? "bg-sdb-purple text-white shadow-sm"
                    : "bg-sdb-purple/5 text-sdb-purple/70"
                }`}
              >
                <CapIcon className="w-5 h-5" />
              </div>
              <span className="font-serif text-xs font-bold text-sdb-purple tracking-tight uppercase block leading-tight">
                {capital.title.replace(" Capital", "")}
              </span>
              <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                {capital.sourcePages}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Active Capital Interactive Container */}
      <div id="active-capital-container" className="space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCapital.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/85 shadow-sm space-y-8"
          >
            {/* Header with Title, Source & Cover Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-sdb-purple/10 pb-6">
              <div className="flex items-start space-x-4">
                <div className="p-3.5 bg-sdb-purple text-white rounded-2xl shadow-sm shrink-0 mt-1">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-sdb-coral bg-sdb-coral/10 px-2.5 py-0.5 rounded-md">
                      Annual Report Disclosures • {activeCapital.sourcePages}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                      {activeCapital.coverBadge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sdb-purple mt-2">
                    {activeCapital.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-4xl leading-relaxed">
                    {activeCapital.executiveSummary}
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  setModalCapitalIndex(selectedCapitalIndex);
                  setShowFullSectionModal(true);
                }}
                className="self-start md:self-center inline-flex items-center space-x-1.5 text-xs font-bold text-sdb-purple hover:text-white hover:bg-sdb-purple bg-sdb-purple/5 px-3.5 py-2 rounded-xl border border-sdb-purple/20 transition-all shrink-0 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Read Full Chapter</span>
              </button>
            </div>

            {/* Quantitative KPIs Grid (2025 vs 2024 / Targets) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {activeCapital.kpis.map((kpi, kidx) => (
                <div key={kidx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block truncate">
                    {kpi.label}
                  </span>
                  <span className="text-lg sm:text-xl font-bold font-mono text-sdb-purple block mt-1">
                    {kpi.value}
                  </span>
                  {kpi.previousValue && (
                    <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                      2024: {kpi.previousValue}
                    </span>
                  )}
                  <span className="text-[11px] text-emerald-700 font-semibold block mt-1 leading-tight">
                    {kpi.subtext}
                  </span>
                </div>
              ))}
            </div>

            {/* Sub-Tab Navigation */}
            <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
              {[
                { id: "actions-outcomes", label: "Actions & Value Created", icon: Sparkles },
                { id: "detailed-disclosures", label: "In-Depth Disclosures & Tables", icon: Table },
                { id: "future-outlook", label: "2026 Priorities & Rabo Roadmap", icon: TrendingUp },
                { id: "sdgs", label: "Targeted UN SDGs", icon: Target }
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isSelected = activeSubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSubTab(tab.id as any)}
                    className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-sdb-purple text-white shadow-xs"
                        : "text-slate-600 hover:text-sdb-purple hover:bg-slate-100"
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* SUB-TAB 1: Actions & Outcomes */}
            {activeSubTab === "actions-outcomes" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Actions Card */}
                <div className="bg-sdb-purple/5 p-6 rounded-2xl border border-sdb-purple/15 space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-sdb-purple rounded-full" />
                    <h4 className="font-serif text-lg font-bold text-sdb-purple uppercase tracking-wider">
                      Strategic Actions in 2025
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-mono tracking-wide uppercase border-b border-sdb-purple/10 pb-2">
                    Key institutional deployments & initiatives
                  </p>
                  <ul className="space-y-3 pt-2">
                    {activeCapital.actions.map((act, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <ArrowRight className="w-4 h-4 text-sdb-purple shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes Card */}
                <div className="bg-emerald-50/70 p-6 rounded-2xl border border-emerald-200/80 space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-full" />
                    <h4 className="font-serif text-lg font-bold text-emerald-900 uppercase tracking-wider">
                      Value Created in 2025
                    </h4>
                  </div>
                  <p className="text-xs text-emerald-700/80 font-mono tracking-wide uppercase border-b border-emerald-200/60 pb-2">
                    Quantitative & qualitative stakeholder outcomes
                  </p>
                  <ul className="space-y-3 pt-2">
                    {activeCapital.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* SUB-TAB 2: In-Depth Operational Disclosures & Data Tables */}
            {activeSubTab === "detailed-disclosures" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                {activeCapital.detailedSections.map((sec, sidx) => (
                  <div key={sidx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 text-left">
                    <div className="border-b border-slate-100 pb-3">
                      <h4 className="font-serif text-xl font-bold text-sdb-purple">
                        {sec.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">{sec.summary}</p>
                    </div>

                    <div className="space-y-3">
                      {sec.paragraphs.map((p, pidx) => (
                        <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Highlights chips if any */}
                    {sec.highlights && sec.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {sec.highlights.map((hl, hidx) => (
                          <span key={hidx} className="bg-sdb-purple/5 text-sdb-purple text-xs font-mono font-semibold px-3 py-1 rounded-lg border border-sdb-purple/10">
                            • {hl}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Data Table if any */}
                    {sec.tables && (
                      <div className="overflow-x-auto pt-3">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono text-[11px] uppercase">
                              {sec.tables.headers.map((h, hidx) => (
                                <th key={hidx} className="p-2.5 font-bold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {sec.tables.rows.map((row, ridx) => (
                              <tr key={ridx} className="hover:bg-slate-50">
                                {row.map((cell, cidx) => (
                                  <td key={cidx} className={`p-2.5 ${cidx === 0 ? "font-medium text-slate-800" : "font-mono text-slate-600"}`}>
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* SUB-TAB 3: Future Outlook 2026 & Rabo Roadmap */}
            {activeSubTab === "future-outlook" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="bg-amber-50/60 p-6 rounded-2xl border border-amber-200/80 space-y-3">
                  <div className="flex items-center space-x-2 text-amber-900">
                    <Compass className="w-5 h-5 text-amber-600" />
                    <h4 className="font-serif text-lg font-bold">
                      Takeouts &amp; Strategic Priorities for 2026 ({activeCapital.sourcePages})
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Under the 2026–2029 Strategic Blueprint and Rabo Partnerships agri-finance collaboration, SDB bank will accelerate {activeCapital.title.toLowerCase()} deployment through the following priority milestones:
                  </p>
                  <ul className="space-y-2.5 pt-2">
                    {activeCapital.futureOutlook2026.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-xl border border-amber-200/50 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* SUB-TAB 4: Targeted SDGs */}
            {activeSubTab === "sdgs" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCapital.sdgAlignments.map((sdg) => (
                    <div key={sdg.sdgNumber} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2 flex items-start space-x-3 text-left">
                      <div className="w-9 h-9 rounded-xl bg-sdb-coral text-white font-mono font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                        {sdg.sdgNumber}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block">UN SDG {sdg.sdgNumber}</span>
                        <h5 className="font-serif font-bold text-base text-sdb-purple">{sdg.sdgName}</h5>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">{sdg.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Full 39-Page Disclosures Reader Modal */}
      {showFullSectionModal && (
        <div id="full-capital-modal" className="fixed inset-0 bg-sdb-purple/50 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="glass-modal rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-sdb-purple/10 flex flex-col bg-white text-left"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-sdb-purple/10 flex justify-between items-center bg-white/95 backdrop-blur-xs">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sdb-purple text-white rounded-xl shadow-xs">
                  <ModalIconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-sdb-coral uppercase tracking-widest font-bold">
                    Official Annual Report Book • Pages 68–106
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple">
                    {modalCapital.title} — Full Chapter Disclosures
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowFullSectionModal(false)}
                className="p-2 text-slate-400 hover:text-sdb-purple rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Chapter Switcher */}
            <div className="flex overflow-x-auto gap-2 p-3 bg-slate-50 border-b border-slate-200">
              {CAPITALS_DEEP_DATA.map((cap, idx) => {
                const isCurrent = idx === modalCapitalIndex;
                const Icon = ICON_MAP[cap.iconName] || Coins;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setModalCapitalIndex(idx)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-sdb-purple text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cap.title.replace(" Capital", "")}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              {/* Executive Summary */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Chapter Overview</span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {modalCapital.executiveSummary}
                </p>
              </div>

              {/* Verified KPIs */}
              <div>
                <h5 className="font-serif font-bold text-sdb-purple text-base mb-3">Key Capital Indicators</h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {modalCapital.kpis.map((k, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block truncate">{k.label}</span>
                      <span className="text-base font-bold font-mono text-sdb-purple block mt-1">{k.value}</span>
                      <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">{k.subtext}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions & Outcomes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-sdb-purple/5 p-5 rounded-2xl border border-sdb-purple/10 space-y-3">
                  <h5 className="font-serif font-bold text-sdb-purple text-base">Key Strategic Actions</h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {modalCapital.actions.map((act, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <ArrowRight className="w-3.5 h-3.5 text-sdb-purple shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/70 space-y-3">
                  <h5 className="font-serif font-bold text-emerald-900 text-base">2025 Measurable Outcomes</h5>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {modalCapital.outcomes.map((out, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deep Narrative Sections */}
              <div className="space-y-6 pt-2">
                <h5 className="font-serif font-bold text-sdb-purple text-lg border-b border-slate-200 pb-2">
                  Detailed Operational Disclosures ({modalCapital.sourcePages})
                </h5>
                {modalCapital.detailedSections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <h6 className="font-serif font-bold text-base text-sdb-purple">{sec.title}</h6>
                    <p className="text-xs font-mono text-slate-500">{sec.summary}</p>
                    <div className="space-y-2.5 pt-1">
                      {sec.paragraphs.map((para, pidx) => (
                        <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>

                    {sec.tables && (
                      <div className="overflow-x-auto pt-2">
                        <table className="w-full text-xs text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-200 text-slate-800 border-b border-slate-300 font-mono text-[10px] uppercase">
                              {sec.tables.headers.map((h, i) => (
                                <th key={i} className="p-2 font-bold">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {sec.tables.rows.map((row, ri) => (
                              <tr key={ri} className="hover:bg-white/80">
                                {row.map((c, ci) => (
                                  <td key={ci} className="p-2 font-mono text-slate-600">{c}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* 2026 Outlook */}
              <div className="bg-amber-50 p-5 rounded-2xl border border-amber-200 space-y-2">
                <h5 className="font-serif font-bold text-amber-900 text-base">Priorities for 2026</h5>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {modalCapital.futureOutlook2026.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-sdb-purple/10 flex justify-between items-center">
              <span className="text-xs font-mono text-slate-500">
                Displaying Chapter {modalCapitalIndex + 1} of 6
              </span>
              <button
                onClick={() => setShowFullSectionModal(false)}
                className="bg-sdb-purple text-white px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-sdb-purple/90 transition-all cursor-pointer"
              >
                Close Disclosures Reader
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
