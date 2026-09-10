import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Leaf, HeartHandshake, ShieldCheck, Globe,
  CheckCircle2, Sparkles, AlertCircle, FileText,
  Search, Layers
} from "lucide-react";
import {
  SUSTAINABILITY_PILLARS_DATA,
  KEY_SUSTAINABILITY_STATS,
  UN_SDGS_DATA,
  SUSTAINABILITY_GOVERNANCE_DATA
} from "../data/sustainabilityData";

export default function SustainabilitySection() {
  const [activeTab, setActiveTab] = useState<"pillars" | "sdgs" | "governance">("pillars");
  const [selectedPillarId, setSelectedPillarId] = useState<string>("esrms");
  const [sdgFilter, setSdgFilter] = useState<"all" | "primary" | "secondary">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activePillar = SUSTAINABILITY_PILLARS_DATA.find((p) => p.id === selectedPillarId) || SUSTAINABILITY_PILLARS_DATA[0];

  const filteredSDGs = UN_SDGS_DATA.filter((sdg) => {
    const matchesFilter =
      sdgFilter === "all" ? true : sdgFilter === "primary" ? sdg.isPrimary : !sdg.isPrimary;
    const matchesSearch =
      searchQuery.trim() === "" ||
      sdg.sdgName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sdg.sdbCommitment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sdg.actions2025.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div id="sustainability-section" className="space-y-10">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-[#193B2D] to-teal-900 text-white p-8 md:p-12 shadow-xl border border-emerald-500/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-3 py-1 text-xs font-semibold text-emerald-300">
            <Leaf className="w-3.5 h-3.5" />
            <span>Pages 34–41 &bull; ESG &amp; Sustainability Architecture</span>
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
              10 UN SDGs Directly Championed
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700">
              2025 Key Sustainability Indicators &bull; Official Report Disclosures
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-500">Source: Pages 36, 38–39</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {KEY_SUSTAINABILITY_STATS.map((metric) => (
            <div
              key={metric.id}
              className="bg-slate-50/80 hover:bg-emerald-50/60 transition-colors p-3.5 rounded-xl border border-slate-200/70 group"
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

      {/* Main Tab Navigator */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-3">
        <div className="flex items-center space-x-2 bg-slate-100/80 p-1 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab("pillars")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "pillars"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/50"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>8 Sustainability Pillars</span>
          </button>

          <button
            onClick={() => setActiveTab("sdgs")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "sdgs"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/50"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>UN SDGs Tracker</span>
          </button>

          <button
            onClick={() => setActiveTab("governance")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "governance"
                ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                : "text-slate-600 hover:text-emerald-900 hover:bg-slate-200/50"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Governance &amp; FCP Unit</span>
          </button>
        </div>

        {activeTab === "sdgs" && (
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search UN SDGs or initiatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
            </div>
            <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setSdgFilter("all")}
                className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                  sdgFilter === "all" ? "bg-white text-emerald-800 shadow-xs font-bold" : "text-slate-600"
                }`}
              >
                All (10)
              </button>
              <button
                onClick={() => setSdgFilter("primary")}
                className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                  sdgFilter === "primary" ? "bg-white text-emerald-800 shadow-xs font-bold" : "text-slate-600"
                }`}
              >
                Primary (5)
              </button>
              <button
                onClick={() => setSdgFilter("secondary")}
                className={`px-2.5 py-1 rounded-lg font-medium cursor-pointer ${
                  sdgFilter === "secondary" ? "bg-white text-emerald-800 shadow-xs font-bold" : "text-slate-600"
                }`}
              >
                Supported (5)
              </button>
            </div>
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
                      Pillar &bull; {activePillar.code}
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

                <a
                  href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start md:self-center inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View in Full Report</span>
                </a>
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
                  <div className="space-y-2.5">
                    {activePillar.keyInitiatives.map((init, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 bg-slate-50/70 p-3 rounded-xl border border-slate-100"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-slate-700 leading-relaxed">{init}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2025 Concrete Outcomes */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-700" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      2025 Verified Deliverables &amp; Outcomes
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {activePillar.outcomes2025.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 bg-emerald-50/40 p-3.5 rounded-xl border border-emerald-100/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-emerald-950 leading-relaxed">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-800">Assurance &amp; Governance Mandate:</span>
                    <p className="text-[11px] leading-relaxed">
                      All activities under {activePillar.name} are reviewed quarterly by the Board Subcommittee on Sustainability chaired by Mr. Romani De Silva (Independent Non-Executive Director) and reported to the Central Bank of Sri Lanka.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* TAB 2: UN Sustainable Development Goals */}
      {activeTab === "sdgs" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSDGs.map((sdg) => (
              <div
                key={sdg.sdgNumber}
                className="bg-white rounded-2xl border border-slate-200/80 hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* SDG Card Header */}
                  <div
                    className="p-4 text-white flex items-center justify-between"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-black font-mono">
                        {sdg.sdgNumber}
                      </span>
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider opacity-85">
                          {sdg.isPrimary ? "Primary Priority SDG" : "Supported SDG"}
                        </div>
                        <h4 className="text-sm font-bold leading-snug">{sdg.sdgName}</h4>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-black/20 px-2 py-0.5 rounded">
                      p. {sdg.sourcePage}
                    </span>
                  </div>

                  {/* Commitment */}
                  <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                    <p className="text-xs text-slate-700 italic leading-relaxed">
                      "{sdg.sdbCommitment}"
                    </p>
                  </div>

                  {/* Concrete 2025 Actions */}
                  <div className="p-4 space-y-2">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                      2025 Bank Actions:
                    </span>
                    <ul className="space-y-1.5">
                      {sdg.actions2025.map((action, i) => (
                        <li key={i} className="flex items-start space-x-2 text-xs text-slate-600 leading-snug">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                            style={{ backgroundColor: sdg.color }}
                          />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* KPIs footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  {sdg.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg text-xs"
                    >
                      <span className="text-[10px] text-slate-500 block leading-none">{kpi.label}</span>
                      <span className="font-mono font-bold text-slate-800">{kpi.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredSDGs.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-600">No matching UN SDGs found</p>
              <button
                onClick={() => { setSearchQuery(""); setSdgFilter("all"); }}
                className="mt-2 text-xs font-bold text-emerald-800 underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Sustainability Governance & Consumer Protection */}
      {activeTab === "governance" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Board Subcommittee */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  Board Oversight
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Page {SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.sourcePage}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 font-serif">
                {SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.name}
              </h4>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-700">Chairperson:</span>{" "}
                <span className="font-bold text-emerald-900">
                  {SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.chairperson}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">Mandate:</span>{" "}
                {SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.mandate}
              </p>
              <div className="flex items-center space-x-3 text-xs text-slate-500 font-mono pt-2 border-t border-slate-100">
                <span>Meetings in 2025: <strong className="text-slate-800">{SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.meetingsHeld2025}</strong></span>
                <span>&bull;</span>
                <span>Frequency: <strong className="text-slate-800">{SUSTAINABILITY_GOVERNANCE_DATA.boardSubcommittee.frequency}</strong></span>
              </div>
            </div>

            {/* Executive Committee */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-teal-100 text-teal-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  Operational Execution
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Page {SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.sourcePage}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 font-serif">
                {SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.name}
              </h4>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
                <span className="font-semibold text-slate-700">Led By:</span>{" "}
                <span className="font-bold text-teal-900">
                  {SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.lead}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">Composition:</span>{" "}
                {SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.composition}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">Mandate:</span>{" "}
                {SUSTAINABILITY_GOVERNANCE_DATA.executiveCommittee.mandate}
              </p>
            </div>
          </div>

          {/* Regional Ambassadors & Consumer Protection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Regional Ambassadors */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-amber-100 text-amber-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  Grassroots Implementation
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Page {SUSTAINABILITY_GOVERNANCE_DATA.regionalTeams.sourcePage}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 font-serif">
                {SUSTAINABILITY_GOVERNANCE_DATA.regionalTeams.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {SUSTAINABILITY_GOVERNANCE_DATA.regionalTeams.structure}
              </p>
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200/70 text-xs text-amber-900">
                Ensures every regional manager and branch supervisor embodies sustainable banking values and supports rural community upliftment directly.
              </div>
            </div>

            {/* Financial Consumer Protection Unit */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <span className="bg-purple-100 text-purple-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded">
                  CBSL Compliance
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Page {SUSTAINABILITY_GOVERNANCE_DATA.consumerProtection.sourcePage}
                </span>
              </div>
              <h4 className="text-lg font-bold text-slate-800 font-serif">
                {SUSTAINABILITY_GOVERNANCE_DATA.consumerProtection.unit}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">Establishment:</span>{" "}
                {SUSTAINABILITY_GOVERNANCE_DATA.consumerProtection.established}
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-700">Capacity Building:</span>{" "}
                  <span className="text-slate-600">{SUSTAINABILITY_GOVERNANCE_DATA.consumerProtection.trainingsHeld}</span>
                </div>
                <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                  <span className="font-semibold text-emerald-900">Dispute Redressal:</span>{" "}
                  <span className="text-emerald-800">{SUSTAINABILITY_GOVERNANCE_DATA.consumerProtection.complaintsResolved}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
