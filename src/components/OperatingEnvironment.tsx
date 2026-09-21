/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Operating Environment
 * Source: Official Published Annual Report 2025 (Pages 20-23)
 * Full Unabridged Text Disclosures (No Paraphrasing, No Prefacing)
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Globe, TrendingUp, AlertTriangle, ShieldCheck, 
  BarChart3, Scale, Clock, CheckCircle2, ChevronRight
} from "lucide-react";
import opEnvData from "../data/operating_environment_full.json";

export default function OperatingEnvironment() {
  const [activeTab, setActiveTab] = useState<"global" | "srilanka" | "banking" | "regulatory" | "outlook">("global");

  return (
    <section id="operating-environment-section" className="space-y-8 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Official Annual Report Disclosures • {opEnvData.pages}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            {opEnvData.title}
          </h2>
          {opEnvData.overview.map((p, idx) => (
            <p key={idx} className="text-slate-700 mt-3 max-w-4xl text-sm md:text-base leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 bg-white/90 p-1.5 rounded-2xl border border-sdb-purple/15 shadow-sm text-xs font-mono shrink-0">
          {[
            { id: "global", label: "Global Economy", icon: Globe },
            { id: "srilanka", label: "Sri Lankan Economy", icon: TrendingUp },
            { id: "banking", label: "Banking Sector Performance", icon: BarChart3 },
            { id: "regulatory", label: "Regulatory Landscape", icon: Scale },
            { id: "outlook", label: "Outlook", icon: Clock }
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-sdb-purple text-white shadow-xs"
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

      {/* 1. Global Economy Tab */}
      {activeTab === "global" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-sdb-purple flex items-center space-x-2">
                <Globe className="w-5 h-5 text-sdb-coral" />
                <span>{opEnvData.globalEconomy.title}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Page {opEnvData.globalEconomy.page}</span>
            </div>

            {/* Special Callout on Middle East Shock */}
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-5 space-y-2">
              <div className="flex items-center space-x-2 text-rose-900 font-serif font-bold text-base">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{opEnvData.globalEconomy.specialCallout.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {opEnvData.globalEconomy.specialCallout.text}
              </p>
            </div>

            {/* Subsections */}
            <div className="space-y-6">
              {opEnvData.globalEconomy.subsections.map((sec, idx) => (
                <div key={idx} className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 space-y-2">
                  <h4 className="font-serif font-bold text-base text-sdb-purple flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-sdb-coral shrink-0" />
                    <span>{sec.heading}</span>
                  </h4>
                  {sec.paragraphs.map((p, pidx) => (
                    <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. Sri Lankan Economy Tab */}
      {activeTab === "srilanka" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-sdb-purple flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-sdb-coral" />
                <span>{opEnvData.sriLankanEconomy.title}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">{opEnvData.sriLankanEconomy.pages}</span>
            </div>

            <div className="space-y-6">
              {opEnvData.sriLankanEconomy.subsections.map((sec, idx) => (
                <div key={idx} className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-serif font-bold text-lg text-sdb-purple flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-sdb-green shrink-0" />
                    <span>{sec.heading}</span>
                  </h4>
                  {sec.paragraphs.map((p, pidx) => (
                    <p key={pidx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. Banking Sector Performance Tab */}
      {activeTab === "banking" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h3 className="font-serif text-2xl font-bold text-sdb-purple flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-sdb-coral" />
                <span>{opEnvData.bankingSectorPerformance.title}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Page {opEnvData.bankingSectorPerformance.page}</span>
            </div>

            <div className="space-y-3">
              {opEnvData.bankingSectorPerformance.paragraphs.map((p, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Highlights */}
            <div className="pt-2 space-y-3">
              <h4 className="font-serif font-bold text-base text-sdb-purple uppercase tracking-wider">
                KEY HIGHLIGHTS ABOUT THE SRI LANKAN BANKING SECTOR IN 2025:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {opEnvData.bankingSectorPerformance.highlights.map((hl, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
                    <span className="text-xs font-bold text-sdb-purple block font-serif">
                      {hl.title}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {hl.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 4. Regulatory Landscape Tab */}
      {activeTab === "regulatory" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple flex items-center space-x-2">
                <Scale className="w-5 h-5 text-sdb-coral" />
                <span>{opEnvData.regulatoryLandscape.title}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Page {opEnvData.regulatoryLandscape.page}</span>
            </div>

            <div className="space-y-3">
              {opEnvData.regulatoryLandscape.items.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-sdb-purple shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* 5. Outlook Tab */}
      {activeTab === "outlook" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-6 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20">
            <div className="flex justify-between items-center border-b border-amber-200 pb-4">
              <h3 className="font-serif text-2xl font-bold text-sdb-purple flex items-center space-x-2">
                <Clock className="w-5 h-5 text-amber-600" />
                <span>{opEnvData.outlook.title}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400">Page {opEnvData.outlook.page}</span>
            </div>

            <div className="space-y-4">
              {opEnvData.outlook.paragraphs.map((p, idx) => (
                <div key={idx} className="bg-white/80 p-5 rounded-2xl border border-amber-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
