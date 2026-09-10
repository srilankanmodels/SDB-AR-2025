/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Operating Environment & Macroeconomy
 * Source: Official Published Annual Report 2025 (Pages 20-23)
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Globe, TrendingUp, AlertTriangle, ShieldCheck, FileText, ArrowRight,
  Wind, Ship, DollarSign, BarChart3, Building, Scale, Clock, Info
} from "lucide-react";
import { 
  GLOBAL_ECONOMY_DATA, SRI_LANKA_MACRO_DATA, BANKING_SECTOR_DATA, 
  REGULATORY_LANDSCAPE_DATA, SUBSEQUENT_PERIOD_OUTLOOK 
} from "../data/operatingEnvironmentData";

export default function OperatingEnvironment() {
  const [activeTab, setActiveTab] = useState<"overview" | "sri-lanka" | "banking" | "regulatory" | "outlook">("overview");

  return (
    <section id="operating-environment-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Macroeconomic & Sector Context • Pages 20–23</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            Operating Environment
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Evaluating global headwinds, Sri Lanka's domestic economic turnaround, the Ditwah climate shock, banking sector stability, and regulatory directorships.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-1 bg-white/80 p-1.5 rounded-2xl border border-sdb-purple/15 shadow-sm text-xs font-mono">
          {[
            { id: "overview", label: "Global Context", icon: Globe },
            { id: "sri-lanka", label: "Sri Lankan Economy", icon: TrendingUp },
            { id: "banking", label: "Banking Sector", icon: BarChart3 },
            { id: "regulatory", label: "Regulatory Landscape", icon: Scale },
            { id: "outlook", label: "2026 Outlook Context", icon: Clock }
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

      {/* 1. Global Economy Tab */}
      {activeTab === "overview" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/80 space-y-6 shadow-sm">
            <div className="flex items-center space-x-2 text-sdb-purple">
              <Globe className="w-5 h-5 text-sdb-coral" />
              <h3 className="font-serif text-2xl font-bold">Global Macroeconomic Dynamics 2025</h3>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {GLOBAL_ECONOMY_DATA.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Global GDP Growth</span>
                <span className="text-2xl font-bold font-mono text-sdb-purple block mt-1">{GLOBAL_ECONOMY_DATA.gdpGrowth}</span>
                <span className="text-xs text-slate-500 mt-1 block">IMF WEO Forecast (Jan 2026)</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">World Trade Volume Growth</span>
                <span className="text-2xl font-bold font-mono text-sdb-purple block mt-1">{GLOBAL_ECONOMY_DATA.tradeVolumeGrowth}</span>
                <span className="text-xs text-slate-500 mt-1 block">Driven by AI and tech exports</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Fastest Major Economy</span>
                <span className="text-2xl font-bold font-mono text-sdb-green block mt-1">India (6.6%)</span>
                <span className="text-xs text-slate-500 mt-1 block">Strong regional domestic demand</span>
              </div>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 p-4 rounded-2xl text-xs sm:text-sm text-slate-700 space-y-2">
              <span className="font-bold text-amber-900 block font-serif">Commodity & Energy Prices:</span>
              <p>{GLOBAL_ECONOMY_DATA.commodityContext}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. Sri Lankan Economy Tab */}
      {activeTab === "sri-lanka" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/80 space-y-6 shadow-sm">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">Sri Lankan Economic Recovery</h3>
                <p className="text-xs font-mono text-slate-500 mt-1">Real GDP Growth: {SRI_LANKA_MACRO_DATA.gdpGrowth2025} in 2025</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 font-mono text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                Growth: +5.0% Estimated
              </span>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {SRI_LANKA_MACRO_DATA.gdpGrowthContext} {SRI_LANKA_MACRO_DATA.inflationAndRates}
            </p>

            {/* Cyclone Ditwah Special Card */}
            <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center space-x-2 text-rose-900">
                <Wind className="w-5 h-5 text-rose-600" />
                <h4 className="font-serif font-bold text-base">{SRI_LANKA_MACRO_DATA.cycloneDitwahImpact.event}</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {SRI_LANKA_MACRO_DATA.cycloneDitwahImpact.summary}
              </p>
              <div className="bg-white/80 p-3 rounded-xl border border-rose-200/50 text-xs font-mono text-rose-900">
                <strong>SDB Bank Action:</strong> {SRI_LANKA_MACRO_DATA.cycloneDitwahImpact.bankRole}
              </div>
            </div>

            {/* External Sector Grid */}
            <div>
              <h4 className="font-serif font-bold text-lg text-sdb-purple mb-3">External Sector Performance 2025</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Exports</span>
                  <span className="text-lg font-bold font-mono text-sdb-purple block mt-1">USD 13.6 Bn</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">Highest on Record</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Imports</span>
                  <span className="text-lg font-bold font-mono text-sdb-purple block mt-1">USD 21.5 Bn</span>
                  <span className="text-[11px] text-slate-500">Vehicles: USD 2.0 Bn</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Workers' Remittances</span>
                  <span className="text-lg font-bold font-mono text-sdb-purple block mt-1">USD 8.1 Bn</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">+22.8% YoY Surge</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-left">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Tourism Inflows</span>
                  <span className="text-lg font-bold font-mono text-sdb-purple block mt-1">USD 3.2 Bn</span>
                  <span className="text-[11px] text-emerald-600 font-semibold">+1.6% YoY Growth</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. Banking Sector Tab */}
      {activeTab === "banking" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 bg-white/80 space-y-6 shadow-sm">
            <div>
              <h3 className="font-serif text-2xl font-bold text-sdb-purple">Sri Lankan Banking Sector Health 2025</h3>
              <p className="text-slate-600 text-sm mt-1">{BANKING_SECTOR_DATA.overview}</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Sector Total Assets</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-sdb-purple block mt-1">LKR 24.9 Tn</span>
                <span className="text-xs text-emerald-600 font-semibold">+12.6% YoY Growth</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Sector Profit After Tax</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-sdb-purple block mt-1">LKR 369.1 Bn</span>
                <span className="text-xs text-emerald-600 font-semibold">+13.8% YoY Expansion</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Stage 3 NPL Ratio</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 block mt-1">9.4%</span>
                <span className="text-xs text-slate-500">Down from 12.3% in 2024</span>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Sector Total CAR</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-sdb-coral block mt-1">18.7%</span>
                <span className="text-xs text-slate-500">vs 12.50% Min Requirement</span>
              </div>
            </div>

            <div className="bg-sdb-cream/40 p-4 rounded-2xl border border-sdb-purple/10 text-xs text-slate-600 font-mono space-y-1">
              <p>• Rupee Liquidity Coverage Ratio (LCR): <strong>283.9%</strong> (vs 100% minimum standard)</p>
              <p>• All Currency Liquidity Coverage Ratio: <strong>249.7%</strong> (vs 100% minimum standard)</p>
              <p>• Gross Loans and Receivables accelerated 21.5% YoY reaching LKR 13.9 Tn at year end</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 4. Regulatory Landscape Tab */}
      {activeTab === "regulatory" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="bg-white/80 rounded-2xl p-4 border border-sdb-purple/10">
            <h3 className="font-serif text-xl font-bold text-sdb-purple mb-1">Key Directives & Regulatory Compliance 2025</h3>
            <p className="text-xs font-mono text-slate-500">Issued by the Central Bank of Sri Lanka & the Colombo Stock Exchange</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REGULATORY_LANDSCAPE_DATA.map((reg, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-sdb-purple/10 shadow-xs space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono font-bold uppercase text-sdb-purple bg-sdb-purple/10 px-2 py-0.5 rounded">
                    {reg.authority}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">Page {reg.sourcePage}</span>
                </div>
                <h4 className="font-serif font-bold text-base text-sdb-purple leading-snug">{reg.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{reg.impact}</p>
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] font-mono text-sdb-purple">
                  <strong>SDB Implementation:</strong> {reg.bankAction}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 5. 2026 Outlook Context Tab (Clearly Demarcated) */}
      {activeTab === "outlook" && (
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-300 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 space-y-6 shadow-sm">
            <div className="flex items-center space-x-2 text-amber-800">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
              <div>
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  {SUBSEQUENT_PERIOD_OUTLOOK.status}
                </span>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple mt-1">
                  {SUBSEQUENT_PERIOD_OUTLOOK.headline}
                </h3>
              </div>
            </div>

            <div className="bg-white/80 p-3.5 rounded-xl border border-amber-200 text-xs font-mono text-amber-900">
              <Info className="w-4 h-4 inline mr-1 text-amber-600" />
              {SUBSEQUENT_PERIOD_OUTLOOK.disclaimer}
            </div>

            <div className="space-y-3">
              {SUBSEQUENT_PERIOD_OUTLOOK.details.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200/80">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <p className="leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center text-xs font-mono gap-2 text-emerald-900">
              <span><strong>Central Bank Forecast for 2026:</strong> GDP Growth in the 4.0% to 5.0% range</span>
              <span className="bg-emerald-200/60 px-2.5 py-1 rounded-full font-bold">Resilience Maintained</span>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
