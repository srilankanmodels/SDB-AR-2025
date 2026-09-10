/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Stakeholder Engagement & Materiality Matrix
 * Source: Official Published Annual Report 2025 (Pages 24-29)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Users, Target, Compass, Sparkles, CheckCircle2, ChevronRight,
  HelpCircle, ShieldCheck, HeartHandshake, Eye, ArrowUpRight
} from "lucide-react";
import { STAKEHOLDERS_DATA, MATERIAL_TOPICS_DATA, StakeholderGroup, MaterialTopic } from "../data/stakeholdersAndMaterialityData";

export default function StakeholdersAndMateriality() {
  const [activeTab, setActiveTab] = useState<"stakeholders" | "quadrant" | "materiality">("stakeholders");
  const [selectedStakeholder, setSelectedStakeholder] = useState<StakeholderGroup>(STAKEHOLDERS_DATA[0]);
  const [selectedTopic, setSelectedTopic] = useState<MaterialTopic | null>(null);
  const [materialityFilter, setMaterialityFilter] = useState<string>("all");

  const filteredTopics = MATERIAL_TOPICS_DATA.filter(t => {
    if (materialityFilter === "all") return true;
    return t.priority.toLowerCase() === materialityFilter.toLowerCase();
  });

  return (
    <section id="stakeholders-materiality-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Inclusive Governance • Pages 24–29</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            Stakeholders & Materiality
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Systematic engagement across 9 principal stakeholder categories, power-interest alignment, and the 13 prioritized material topics that define our long-term value creation.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex flex-wrap gap-1 bg-white/80 p-1.5 rounded-2xl border border-sdb-purple/15 shadow-sm text-xs font-mono">
          {[
            { id: "stakeholders", label: "Stakeholder Engagement", icon: Users },
            { id: "quadrant", label: "Power vs Interest Grid", icon: Compass },
            { id: "materiality", label: "Materiality Matrix (13)", icon: Target }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-sdb-purple text-white shadow-xs font-bold"
                    : "text-slate-600 hover:text-sdb-purple hover:bg-slate-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. Stakeholder Engagement Tab */}
      {activeTab === "stakeholders" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Stakeholder Selector List */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-slate-400 block mb-1">
              Select Stakeholder Group (9):
            </span>
            {STAKEHOLDERS_DATA.map((stk) => {
              const isSelected = selectedStakeholder.id === stk.id;
              return (
                <button
                  key={stk.id}
                  onClick={() => setSelectedStakeholder(stk)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-white border-sdb-purple shadow-md"
                      : "bg-white/60 border-sdb-purple/10 hover:bg-white hover:border-sdb-purple/20 text-slate-700"
                  }`}
                >
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-sdb-purple">{stk.name}</h4>
                    <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{stk.category}</span>
                  </div>
                  <span className={`text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    stk.quadrant === "Actively Consult" ? "bg-rose-50 text-rose-700" :
                    stk.quadrant === "Regularly Engage" ? "bg-purple-50 text-purple-700" :
                    stk.quadrant === "Keep Informed" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"
                  }`}>
                    {stk.quadrant}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Stakeholder Detail Panel */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/90 shadow-sm space-y-6">
              <div className="flex justify-between items-start flex-wrap gap-2 border-b border-sdb-purple/10 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sdb-coral bg-sdb-coral/10 px-2.5 py-0.5 rounded-full">
                    {selectedStakeholder.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-sdb-purple mt-1.5">{selectedStakeholder.name}</h3>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Power: <strong>{selectedStakeholder.powerLevel}</strong></span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Interest: <strong>{selectedStakeholder.interestLevel}</strong></span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-lg">Page {selectedStakeholder.sourcePage}</span>
                </div>
              </div>

              {/* Engagement Methods */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-sdb-purple block">
                  How SDB Bank Engaged in 2025:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedStakeholder.howWeEngaged.map((how, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-xs text-slate-700 flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sdb-blue shrink-0 mt-0.5" />
                      <span>{how}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Concerns */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase text-amber-800 block">
                  Key Stakeholder Expectations & Concerns:
                </span>
                <div className="space-y-1.5">
                  {selectedStakeholder.keyConcerns.map((concern, idx) => (
                    <p key={idx} className="text-xs text-slate-700 bg-amber-50/50 p-2.5 rounded-xl border border-amber-200/60">
                      • {concern}
                    </p>
                  ))}
                </div>
              </div>

              {/* Strategic Response */}
              <div className="space-y-2 pt-2 border-t border-sdb-purple/10">
                <span className="text-xs font-mono font-bold uppercase text-emerald-800 block">
                  SDB Bank's Strategic Response:
                </span>
                <div className="space-y-1.5">
                  {selectedStakeholder.strategicResponse.map((resp, idx) => (
                    <p key={idx} className="text-xs text-slate-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-200/60">
                      ✔ {resp}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. Power vs Interest Grid Tab */}
      {activeTab === "quadrant" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/90 shadow-sm space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-sdb-purple">Power vs Interest Stakeholder Mapping</h3>
              <p className="text-slate-600 text-sm mt-1">
                Formal prioritization framework as published on Annual Report Page 27, ensuring resources are allocated effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quadrant 1: High Power, High Interest */}
              <div className="bg-rose-50/50 border-2 border-rose-200 rounded-2xl p-5 space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-bold text-rose-900 text-base">Actively Consult</h4>
                  <span className="text-[10px] font-mono text-rose-700 uppercase font-bold">High Power • High Interest</span>
                </div>
                <p className="text-xs text-slate-600">Close two-way dialogue, regular progress tracking, regulatory accountability.</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-800 shadow-2xs border border-rose-200">Central Bank (CBSL) & Regulators</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-800 shadow-2xs border border-rose-200">Shareholders & Investors</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-800 shadow-2xs border border-rose-200">Customers (MSME & Retail)</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-rose-800 shadow-2xs border border-rose-200">International DFIs (Rabo/ADB)</span>
                </div>
              </div>

              {/* Quadrant 2: High Power, Medium/Low Interest */}
              <div className="bg-purple-50/50 border-2 border-purple-200 rounded-2xl p-5 space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-bold text-sdb-purple text-base">Regularly Engage</h4>
                  <span className="text-[10px] font-mono text-sdb-purple uppercase font-bold">High Power • Core Partners</span>
                </div>
                <p className="text-xs text-slate-600">Dedicated institutional service counters, funding channels, and technical training.</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-sdb-purple shadow-2xs border border-purple-200">SANASA Cooperative Movement</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-sdb-purple shadow-2xs border border-purple-200">District Cooperative Unions</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-sdb-purple shadow-2xs border border-purple-200">Department of Cooperatives</span>
                </div>
              </div>

              {/* Quadrant 3: Medium Power, High Interest */}
              <div className="bg-blue-50/50 border-2 border-blue-200 rounded-2xl p-5 space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-bold text-blue-900 text-base">Keep Informed</h4>
                  <span className="text-[10px] font-mono text-blue-700 uppercase font-bold">Medium Power • High Interest</span>
                </div>
                <p className="text-xs text-slate-600">Internal communication town halls, career development, and vendor procurement.</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-800 shadow-2xs border border-blue-200">Employees & Staff (1,263)</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-800 shadow-2xs border border-blue-200">Trade Unions</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-blue-800 shadow-2xs border border-blue-200">Suppliers & IT Partners (400+)</span>
                </div>
              </div>

              {/* Quadrant 4: Low Power, High Interest */}
              <div className="bg-emerald-50/50 border-2 border-emerald-200 rounded-2xl p-5 space-y-2 text-left">
                <div className="flex justify-between items-center">
                  <h4 className="font-serif font-bold text-emerald-900 text-base">Maintain Interest</h4>
                  <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">Low Power • Community Fabric</span>
                </div>
                <p className="text-xs text-slate-600">Community infrastructure, philanthropic health camps, and rural upliftment.</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-800 shadow-2xs border border-emerald-200">Rural Village Communities</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-800 shadow-2xs border border-emerald-200">Women Artisan Groups</span>
                  <span className="bg-white px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-800 shadow-2xs border border-emerald-200">Environmental NGOs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. Materiality Matrix Tab */}
      {activeTab === "materiality" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/90 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">13 Prioritised Material Topics</h3>
                <p className="text-xs font-mono text-slate-500 mt-1">Identified, evaluated, and ranked per Annual Report Pages 28–29</p>
              </div>

              {/* Priority Filter */}
              <div className="flex items-center space-x-1 text-xs font-mono bg-slate-100 p-1 rounded-xl">
                {["all", "high", "medium"].map(p => (
                  <button
                    key={p}
                    onClick={() => setMaterialityFilter(p)}
                    className={`px-3 py-1 rounded-lg font-bold capitalize transition-all cursor-pointer ${
                      materialityFilter === p ? "bg-white text-sdb-purple shadow-2xs" : "text-slate-500 hover:text-sdb-purple"
                    }`}
                  >
                    {p === "all" ? "All (13)" : p}
                  </button>
                ))}
              </div>
            </div>

            {/* Matrix Topic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className="bg-white rounded-2xl p-4.5 border border-sdb-purple/10 hover:border-sdb-coral shadow-xs hover:shadow-md transition-all cursor-pointer space-y-3 group"
                >
                  <div className="flex justify-between items-center">
                    <span className="w-6 h-6 rounded-full bg-sdb-purple/10 text-sdb-purple font-mono font-bold text-xs flex items-center justify-center">
                      {topic.id}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold uppercase">
                      {topic.priority} Priority
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-sm text-sdb-purple group-hover:text-sdb-coral transition-colors leading-snug">
                    {topic.topic}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {topic.summary}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-slate-400">Impact to Stakeholder: <strong>{topic.impactStakeholder}</strong></span>
                    <div className="flex items-center space-x-1">
                      {topic.linkedSDGs.map((sdg) => (
                        <span key={sdg} className="w-4.5 h-4.5 rounded-full bg-sdb-purple text-white text-[9px] font-bold flex items-center justify-center">
                          {sdg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal / Detail View when Topic Selected */}
            <AnimatePresence>
              {selectedTopic && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-sdb-purple/5 border border-sdb-purple/20 p-5 rounded-2xl space-y-2 text-xs"
                >
                  <div className="flex justify-between items-center">
                    <h5 className="font-serif font-bold text-sm text-sdb-purple">
                      Topic #{selectedTopic.id}: {selectedTopic.topic}
                    </h5>
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-xs font-bold text-sdb-coral hover:underline"
                    >
                      Close
                    </button>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{selectedTopic.summary}</p>
                  <p className="font-mono text-slate-500">
                    Impact to Stakeholders: <strong>{selectedTopic.impactStakeholder}</strong> • Impact to SDB Bank: <strong>{selectedTopic.impactBank}</strong> • Source: Page {selectedTopic.sourcePage}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </section>
  );
}
