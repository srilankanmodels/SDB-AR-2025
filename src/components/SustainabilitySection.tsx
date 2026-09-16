/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Sustainability & UN SDGs Section
 * Source: Official Published Annual Report 2025 (Pages 34-41)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Leaf, HeartHandshake, ShieldCheck, Globe,
  CheckCircle2, Sparkles, AlertCircle, FileText,
  Search, Layers, ArrowRight, ExternalLink, Target
} from "lucide-react";
import {
  SUSTAINABILITY_PILLARS_DATA,
  KEY_SUSTAINABILITY_STATS,
  CONTRIBUTION_TO_SDGS_2025_INTRO,
  CONTRIBUTION_TO_SDGS_2025_DATA,
  ADDITIONAL_SDGS_SUPPORTED_2025_INTRO,
  ADDITIONAL_SDGS_SUPPORTED_2025_DATA,
  SUSTAINABILITY_GOVERNANCE_DATA,
  SDGRecord
} from "../data/sustainabilityData";

export default function SustainabilitySection() {
  const [activeTab, setActiveTab] = useState<"pillars" | "contribution-sdgs" | "additional-sdgs" | "governance">("pillars");
  const [selectedPillarId, setSelectedPillarId] = useState<string>("esrms");
  const [searchQuery, setSearchQuery] = useState("");

  const activePillar = SUSTAINABILITY_PILLARS_DATA.find((p) => p.id === selectedPillarId) || SUSTAINABILITY_PILLARS_DATA[0];

  const filterSDGs = (list: SDGRecord[]) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(
      (sdg) =>
        sdg.sdgName.toLowerCase().includes(q) ||
        sdg.leadCommitment.toLowerCase().includes(q) ||
        sdg.contributions.some((c) => c.toLowerCase().includes(q)) ||
        sdg.sdgNumber.toString() === q
    );
  };

  const filteredContributionSDGs = filterSDGs(CONTRIBUTION_TO_SDGS_2025_DATA);
  const filteredAdditionalSDGs = filterSDGs(ADDITIONAL_SDGS_SUPPORTED_2025_DATA);

  return (
    <div id="sustainability-section" className="space-y-10 text-left">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-[#193B2D] to-teal-900 text-white p-8 md:p-12 shadow-xl border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1 text-xs font-semibold text-emerald-300">
            <Leaf className="w-3.5 h-3.5" />
            <span>Pages 34–41 • ESG &amp; Sustainability Architecture</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            Handcrafting Sustainable Futures
          </h2>
          <p className="text-emerald-100/85 text-sm md:text-base leading-relaxed max-w-3xl">
            SDB Bank harmonises financial intermediation with environmental stewardship, social equity, and principled governance. As a partner in the Central Bank of Sri Lanka Sustainable Banking Initiative and European SSCI candidate, our operations empower rural micro-enterprises, advance female entrepreneurs, and drive clean energy transition.
          </p>

          {/* Quick Pillar Highlights */}
          <div className="pt-4 flex flex-wrap gap-2 text-xs">
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              8 Core Sustainability Pillars
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              5 Primary Core Focus UN SDGs
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              10 Additional Supported SDGs
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              EOSD SSCI European Accreditation
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
              CBSL Sustainable Finance Roadmap
            </span>
          </div>
        </div>
      </div>

      {/* Top 2025 Audited Sustainability Metrics */}
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-sdb-purple/10 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              2025 Key Sustainability Indicators • Official Report Disclosures
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Source: Pages 36, 38–40</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {KEY_SUSTAINABILITY_STATS.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-50/80 hover:bg-emerald-50/60 transition-colors p-3.5 rounded-xl border border-slate-200/70 group text-left"
            >
              <div className="text-lg md:text-xl font-black font-mono text-emerald-800 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs font-semibold text-slate-800 line-clamp-1 mt-0.5">
                {metric.label}
              </div>
              <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                {metric.detail}
              </p>
              <div className="mt-2 text-[10px] text-slate-400 font-mono">
                Page {metric.sourcePage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Tab Navigator (4 Explicit Tabs Matching AR Structure) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200 text-xs">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "pillars"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/60"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>8 Sustainability Pillars</span>
          </button>

          <button
            onClick={() => setActiveTab("contribution-sdgs")}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "contribution-sdgs"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/60"
            }`}
          >
            <Target className="w-3.5 h-3.5 text-amber-300" />
            <span>CONTRIBUTION TO SDGS IN 2025</span>
          </button>

          <button
            onClick={() => setActiveTab("additional-sdgs")}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "additional-sdgs"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/60"
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-teal-300" />
            <span>ADDITIONAL SDGS SUPPORTED DURING 2025</span>
          </button>

          <button
            onClick={() => setActiveTab("governance")}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "governance"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/60"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Governance &amp; FCP</span>
          </button>
        </div>

        {(activeTab === "contribution-sdgs" || activeTab === "additional-sdgs") && (
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search UN SDGs, numbers, metrics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
            />
          </div>
        )}
      </div>

      {/* TAB 1: 8 Sustainability Pillars */}
      {activeTab === "pillars" && (
        <div className="space-y-6">
          {/* Pillar Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {SUSTAINABILITY_PILLARS_DATA.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-emerald-800 text-white border-emerald-900 shadow-md shadow-emerald-950/20"
                      : "bg-white/80 hover:bg-emerald-50 text-slate-700 border-slate-200"
                  }`}
                >
                  <div className={`text-[10px] font-mono font-bold tracking-wider ${isSelected ? "text-emerald-200" : "text-emerald-700"}`}>
                    {pillar.code}
                  </div>
                  <div className="text-xs font-bold line-clamp-2 mt-0.5 leading-snug">
                    {pillar.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-emerald-900/10 p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                      Pillar • {activePillar.code}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Report Page {activePillar.sourcePage}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 font-serif mt-2">
                    {activePillar.name}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-3xl leading-relaxed">
                    {activePillar.overview}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                {/* Key Initiatives */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <HeartHandshake className="w-4 h-4 text-emerald-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Core Institutional Initiatives
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {activePillar.keyInitiatives.map((init, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-600 leading-relaxed">
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{init}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2025 Outcomes */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      2025 Concrete Outcomes
                    </h4>
                  </div>
                  <ul className="space-y-2.5">
                    {activePillar.outcomes2025.map((outcome, i) => (
                      <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* TAB 2: CONTRIBUTION TO SDGS IN 2025 (Pages 38-39) */}
      {activeTab === "contribution-sdgs" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Official AR Narrative Banner */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-amber-200/80 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/20 shadow-sm space-y-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  {CONTRIBUTION_TO_SDGS_2025_INTRO.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
                Core Focus: 5 Primary UN SDGs • Page {CONTRIBUTION_TO_SDGS_2025_INTRO.sourcePage}
              </span>
            </div>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              {CONTRIBUTION_TO_SDGS_2025_INTRO.description}
            </p>

            {/* SDG Badges Quick Anchor Row */}
            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">Focus SDGs:</span>
              {CONTRIBUTION_TO_SDGS_2025_DATA.map((sdg) => (
                <div key={sdg.sdgNumber} className="flex items-center space-x-2 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                  <img src={sdg.badgePath} alt={sdg.sdgName} className="w-8 h-8 rounded-md object-contain shrink-0" />
                  <span className="text-xs font-bold text-sdb-purple">{sdg.sdgName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards for each of the 5 Core SDGs */}
          <div className="space-y-6">
            {filteredContributionSDGs.map((sdg) => (
              <div
                key={sdg.sdgNumber}
                className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow text-left space-y-5 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 bottom-0 w-2"
                  style={{ backgroundColor: sdg.color }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={sdg.badgePath}
                      alt={sdg.sdgName}
                      className="w-16 h-16 rounded-xl object-contain shadow-xs shrink-0"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <span
                          className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded"
                          style={{ backgroundColor: sdg.color }}
                        >
                          SDG {sdg.sdgNumber}
                        </span>
                        <span className="text-xs font-mono text-slate-400">Annual Report Page {sdg.sourcePage}</span>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-sdb-purple mt-1">
                        {sdg.sdgName}
                      </h4>
                    </div>
                  </div>

                  {sdg.kpis && sdg.kpis.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {sdg.kpis.map((kpi, kidx) => (
                        <div key={kidx} className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-left">
                          <span className="text-[10px] font-mono text-slate-400 block uppercase font-bold">{kpi.label}</span>
                          <span className="text-base font-mono font-bold text-sdb-purple">{kpi.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 pl-3 py-0.5 leading-relaxed" style={{ borderColor: sdg.color }}>
                    <strong>Strategic Intent:</strong> {sdg.leadCommitment}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                      Our Contribution in 2025:
                    </span>
                    <ul className="space-y-2">
                      {sdg.contributions.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* TAB 3: ADDITIONAL SDGS SUPPORTED DURING 2025 (Pages 39-40) */}
      {activeTab === "additional-sdgs" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          {/* Official AR Narrative Banner */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-teal-200/80 bg-gradient-to-br from-teal-50/50 via-white to-teal-50/20 shadow-sm space-y-3">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-teal-600" />
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  {ADDITIONAL_SDGS_SUPPORTED_2025_INTRO.title}
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-teal-900 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
                10 Additional Supported SDGs • Pages 39–40
              </span>
            </div>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              {ADDITIONAL_SDGS_SUPPORTED_2025_INTRO.description}
            </p>

            {/* Quick Badge Icons Grid */}
            <div className="pt-2 flex flex-wrap gap-2.5 items-center">
              {ADDITIONAL_SDGS_SUPPORTED_2025_DATA.map((sdg) => (
                <div key={sdg.sdgNumber} className="flex items-center space-x-1.5 bg-white px-2 py-1 rounded-xl border border-slate-200 shadow-2xs">
                  <img src={sdg.badgePath} alt={sdg.sdgName} className="w-7 h-7 rounded-md object-contain shrink-0" />
                  <span className="text-[11px] font-bold text-sdb-purple">SDG {sdg.sdgNumber}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards for each of the 10 Additional SDGs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAdditionalSDGs.map((sdg) => (
              <div
                key={sdg.sdgNumber}
                className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow text-left space-y-4 relative overflow-hidden flex flex-col justify-between"
              >
                <div
                  className="absolute top-0 left-0 bottom-0 w-1.5"
                  style={{ backgroundColor: sdg.color }}
                />

                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={sdg.badgePath}
                        alt={sdg.sdgName}
                        className="w-12 h-12 rounded-lg object-contain shadow-2xs shrink-0"
                      />
                      <div>
                        <div className="flex items-center space-x-1.5">
                          <span
                            className="text-[9px] font-mono font-bold text-white px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: sdg.color }}
                          >
                            SDG {sdg.sdgNumber}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">Page {sdg.sourcePage}</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-sdb-purple mt-0.5">
                          {sdg.sdgName}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 italic border-l-2 pl-2.5 py-0.5 leading-relaxed" style={{ borderColor: sdg.color }}>
                    {sdg.leadCommitment}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block tracking-wider">Contributions in 2025:</span>
                    <ul className="space-y-1.5">
                      {sdg.contributions.map((bullet, bidx) => (
                        <li key={bidx} className="flex items-start space-x-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-teal-600" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {sdg.kpis && sdg.kpis.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                    {sdg.kpis.map((kpi, kidx) => (
                      <div key={kidx} className="bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg text-left text-xs">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">{kpi.label}</span>
                        <span className="font-mono font-bold text-sdb-purple text-sm">{kpi.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* TAB 4: Sustainability Governance & FCP */}
      {activeTab === "governance" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white space-y-6 shadow-sm">
            <div className="flex items-center space-x-2 text-emerald-900">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <h3 className="font-serif text-2xl font-bold">Sustainability Governance &amp; Accountability</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              SDB Bank's ESG strategy is governed by a multi-tiered oversight structure ensuring direct Board accountability, executive implementation, and regional grassroots execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">Board Oversight</span>
                <h4 className="font-serif font-bold text-base text-slate-800">{SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.name}</h4>
                <p className="text-xs text-slate-500">Chair: {SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.chairperson}</p>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">{SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.mandate}</p>
                <div className="text-[10px] font-mono text-slate-400 pt-2">
                  Meetings: {SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.meetingsHeld2025} ({SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.frequency})
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold block">Executive Leadership</span>
                <h4 className="font-serif font-bold text-base text-slate-800">{SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.name}</h4>
                <p className="text-xs text-slate-500">Lead: {SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.lead}</p>
                <p className="text-xs text-slate-600 pt-1 leading-relaxed">{SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.mandate}</p>
                <div className="text-[10px] font-mono text-slate-400 pt-2">
                  Network: {SUSTAINABILITY_GOVERNANCE_DATA.regionalTeams.structure}
                </div>
              </div>
            </div>

            {/* Consumer Protection Unit Details */}
            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/60 space-y-2 text-xs text-slate-700">
              <span className="font-bold text-emerald-950 font-serif text-sm block">Financial Consumer Protection (FCP) Unit &amp; Redress:</span>
              <p className="leading-relaxed">
                Established under CBSL Financial Consumer Protection Regulations No. 01 of 2023, the dedicated FCP Unit conducted 30+ training sessions for senior branch staff. Between April 2024 and December 2025, SDB Bank recorded 2,013 customer inquiries/complaints, resolving over 80% within stipulated regulatory timelines in full cooperation with the Financial Ombudsman of Sri Lanka.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
