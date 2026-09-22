/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Supplementary Disclosures, Basel III & Shareholder Analysis
 * Addresses Points 29, 30, 35, 36, 75 to 100
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileSpreadsheet, ShieldAlert, PieChart, BookMarked,
  HelpCircle, Building2, Calendar, Search, ArrowUpRight,
  Download, ExternalLink, Filter, CheckCircle, Info,
  TrendingUp, Users, DollarSign, Layers, ChevronRight, Award, Stamp
} from "lucide-react";
import {
  TEN_YEARS_AT_A_GLANCE_DATA,
  BASEL_TEMPLATE_1_KEY_RATIOS,
  BASEL_TEMPLATE_2_CAPITAL_COMPUTATION,
  BASEL_TEMPLATE_3_LEVERAGE_RATIO,
  BASEL_TEMPLATE_4_LCR,
  BASEL_TEMPLATE_5_CAPITAL_INSTRUMENTS,
  BASEL_TEMPLATE_6_ADEQUACY_DISCUSSION,
  BASEL_TEMPLATE_8_CREDIT_RISK_EXPOSURES,
  BASEL_TEMPLATE_9_MARKET_RISK,
  BASEL_TEMPLATE_10_OPERATIONAL_RISK,
  BASEL_TEMPLATE_11_MAPPING_SCOPES,
  SOURCES_AND_UTILISATION_OF_INCOME,
  QUARTERLY_PERFORMANCE_TABLE,
  SHARE_OWNERSHIP_COMPOSITION_TABLE_1,
  RESIDENT_NON_RESIDENT_TABLE_2,
  INDIVIDUAL_INSTITUTIONAL_TABLE_3,
  INSTITUTIONAL_SUB_ANALYSIS_TABLE_4,
  DISTRIBUTION_SCHEDULE_OF_SHAREHOLDINGS,
  TOP_20_SHAREHOLDERS,
  DIRECTORS_AND_CEO_SHAREHOLDING_TABLE_7,
  MARKET_CAP_AND_PUBLIC_HOLDING,
  SDB_BANK_SHARE_TRADING_DETAILS,
  CSE_BANKING_INDUSTRY_MARKET_CAP,
  SDB_BANK_CAPITALISATION_DETAILS,
  SDB_SHARE_PRICE_MOVEMENT,
  DIVIDENDS_TABLE,
  VALUE_CREATION_FOR_SHAREHOLDERS,
  GLOSSARY_TERMS,
  ABBREVIATIONS_DATA,
  CORPORATE_INFORMATION_DATA,
  GlossaryEntry
} from "../data/supplementaryData";

type MainSubTab = "ten-years" | "basel" | "shareholders" | "income-dist" | "glossary" | "corporate";

export default function SupplementarySection() {
  const [activeSubTab, setActiveSubTab] = useState<MainSubTab>("ten-years");
  const [activeBaselTemplate, setActiveBaselTemplate] = useState<number>(1);
  const [activeShareholderView, setActiveShareholderView] = useState<string>("tables-1-4");

  // Glossary search & filter
  const [glossarySearch, setGlossarySearch] = useState("");
  const [glossaryCategory, setGlossaryCategory] = useState<string>("all");
  const [abbrSearch, setAbbrSearch] = useState("");

  const filteredGlossary = GLOSSARY_TERMS.filter((entry) => {
    const matchesCat = glossaryCategory === "all" || entry.category === glossaryCategory;
    const matchesSearch =
      glossarySearch.trim() === "" ||
      entry.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      (entry.acronym && entry.acronym.toLowerCase().includes(glossarySearch.toLowerCase())) ||
      entry.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredAbbreviations = ABBREVIATIONS_DATA.filter((item) => {
    return (
      abbrSearch.trim() === "" ||
      item.abbreviation.toLowerCase().includes(abbrSearch.toLowerCase()) ||
      item.meaning.toLowerCase().includes(abbrSearch.toLowerCase())
    );
  });

  return (
    <div id="supplementary-section" className="space-y-8 text-left">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E113F] via-[#2F1B68] to-[#452782] text-white p-8 md:p-12 shadow-xl border border-sdb-purple/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sdb-coral/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sdb-blue/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-sdb-coral">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Pages 298–328 &bull; Supplementary Disclosures &amp; Statutory Analysis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            Supplementary Disclosures &amp; Investor Guide
          </h2>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl font-sans">
            Statutory disclosures encompassing the 10-year historical trajectory (2016–2025), comprehensive Basel III Pillar III Templates 1 to 11, Shareholder Analysis Tables 1 to 7, CSE trading metrics, income utilisation, and corporate data audited by Ernst & Young (EY).
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              10-Year Record (2016–2025)
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Basel III Pillar III (Templates 1–11)
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Shareholder Analysis (Tables 1–7)
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Audited by Ernst & Young (EY)
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
        {[
          { id: "ten-years", label: "Ten Years at a Glance", icon: FileSpreadsheet },
          { id: "basel", label: "Basel III Pillar III (Templates 1–11)", icon: ShieldAlert },
          { id: "shareholders", label: "Shareholder Analysis & Trading", icon: Users },
          { id: "income-dist", label: "Income Sources & Quarterly", icon: PieChart },
          { id: "glossary", label: "Glossary & Abbreviations", icon: HelpCircle },
          { id: "corporate", label: "Corporate Directory", icon: Building2 }
        ].map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as MainSubTab)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-sdb-purple text-white shadow-md shadow-sdb-purple/20 font-bold"
                  : "bg-white/80 hover:bg-sdb-purple/5 text-slate-700 border border-slate-200"
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: Ten Years at a Glance */}
      {activeSubTab === "ten-years" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-sdb-purple/10 text-sdb-purple text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                    Decade Record &bull; 2016–2025
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Report Page 306</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-sdb-purple font-serif mt-1">
                  Ten Years Financial Trajectory (LKR Millions)
                </h3>
              </div>
              <a
                href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs font-semibold text-sdb-purple hover:underline"
              >
                <span>View Page 306 PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-mono font-bold text-slate-700">
                    <th className="p-3">Financial Metric (LKR Mn)</th>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <th
                        key={d.year}
                        className={`p-3 text-right ${d.year === "2025" ? "bg-sdb-purple/10 text-sdb-purple" : ""}`}
                      >
                        {d.year}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-sans font-bold text-slate-800">Net Advances (Loans)</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right ${d.year === "2025" ? "font-bold text-sdb-purple" : ""}`}>
                        {d.netAdvances.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-sans font-bold text-slate-800">Customer Deposits</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right ${d.year === "2025" ? "font-bold text-sdb-purple" : ""}`}>
                        {d.deposits.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80 bg-slate-50/40">
                    <td className="p-3 font-sans font-bold text-slate-900">Total Assets</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right ${d.year === "2025" ? "font-bold text-sdb-purple" : ""}`}>
                        {d.totalAssets.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-sans font-bold text-slate-800">Total Equity</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right ${d.year === "2025" ? "font-bold text-sdb-purple" : ""}`}>
                        {d.totalEquity.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-sans font-bold text-slate-800">Gross Income</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right ${d.year === "2025" ? "font-bold text-sdb-purple" : ""}`}>
                        {d.grossIncome.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="p-3 font-sans font-bold text-slate-800">Profit Before Tax (PBT)</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right ${d.year === "2025" ? "font-bold text-sdb-purple" : ""}`}>
                        {d.profitBeforeTax.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80 bg-sdb-cream/30">
                    <td className="p-3 font-sans font-bold text-slate-900">Profit After Tax (PAT)</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right font-bold ${d.year === "2025" ? "text-sdb-purple" : "text-slate-700"}`}>
                        {d.profitAfterTax.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BASEL III PILLAR III (Points 75 to 84) */}
      {activeSubTab === "basel" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <div className="flex items-center space-x-2">
                <span className="bg-sdb-coral/10 text-sdb-coral text-xs font-mono font-bold px-2.5 py-0.5 rounded-md uppercase">
                  Points 75–84 &bull; Basel III Market Discipline Disclosures
                </span>
                <span className="text-xs text-slate-400 font-mono">Pages 300–305</span>
              </div>
              <h3 className="text-2xl font-bold text-sdb-purple font-serif mt-2">
                Basel III Pillar III Market Disclosures (Templates 1 to 11)
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Mandated under CBSL Banking Act Direction No. 01 of 2016 for licensed specialised banks.
              </p>
            </div>

            {/* Template Selector Pills */}
            <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3 text-xs font-mono">
              {[
                { id: 1, label: "Template 1: Key Ratios" },
                { id: 2, label: "Template 2: Capital Computation" },
                { id: 3, label: "Template 3: Leverage Ratio" },
                { id: 4, label: "Template 4: Liquidity (LCR)" },
                { id: 5, label: "Template 5: Capital Instruments" },
                { id: 6, label: "Template 6: Adequacy Discussion" },
                { id: 8, label: "Template 8: Credit Risk Exposures" },
                { id: 9, label: "Template 9: Market Risk" },
                { id: 10, label: "Template 10: Operational Risk" },
                { id: 11, label: "Template 11: Scope Mapping" }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveBaselTemplate(t.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeBaselTemplate === t.id
                      ? "bg-sdb-purple text-white shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Template 1: Key Regulatory Ratios */}
            {activeBaselTemplate === 1 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 1: Key Regulatory Ratios - Capital and Liquidity
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#8B1D2C] text-white">
                      <tr>
                        <th className="py-3 px-4 font-bold font-sans">Regulatory Indicator</th>
                        <th className="py-3 px-4 text-center font-bold">CBSL Requirement</th>
                        <th className="py-3 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Bank 2025</th>
                        <th className="py-3 px-4 text-right font-bold">Bank 2024</th>
                        <th className="py-3 px-4 text-right font-bold">Capital Buffer / Surplus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_1_KEY_RATIOS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-sans font-medium text-slate-800">{row.item}</td>
                          <td className="py-2.5 px-4 text-center text-slate-500">{row.requirement}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.bank2025}</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">{row.bank2024}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-emerald-600">{row.surplus}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 2: Capital Computation */}
            {activeBaselTemplate === 2 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 2: Basel III Computation of Capital Ratio
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-4 font-bold font-sans">Capital Component (LKR Millions)</th>
                        <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">2025 (LKR Mn)</th>
                        <th className="py-2.5 px-4 text-right font-bold">2024 (LKR Mn)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_2_CAPITAL_COMPUTATION.map((row, idx) => (
                        <tr
                          key={idx}
                          className={`${
                            row.isHeader ? "bg-slate-50 font-bold text-sdb-purple" : ""
                          } ${row.isTotal ? "bg-[#FAF2EB]/70 font-black text-[#8B1D2C]" : ""}`}
                        >
                          <td className={`py-2 px-4 font-sans ${row.indent ? "pl-8 text-slate-600" : ""}`}>
                            {row.component}
                          </td>
                          <td className="py-2 px-4 text-right">{row.amount2025.toLocaleString()}</td>
                          <td className="py-2 px-4 text-right text-slate-500">{row.amount2024.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 3: Leverage Ratio */}
            {activeBaselTemplate === 3 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 3: Computation of Leverage Ratio
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-4 font-bold font-sans">Item / Exposure Category</th>
                        <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">2025</th>
                        <th className="py-2.5 px-4 text-right font-bold">2024</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_3_LEVERAGE_RATIO.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-sans font-medium text-slate-800">{row.item}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.y2025}</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">{row.y2024}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 4: Liquidity Coverage Ratio */}
            {activeBaselTemplate === 4 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 4: Basel III Computation of Liquidity Coverage Ratio
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-4 font-bold font-sans">Liquidity Metric</th>
                        <th className="py-2.5 px-4 text-right font-bold">LKR (Rupee Buffer)</th>
                        <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">All Currencies Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_4_LCR.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-sans font-medium text-slate-800">{row.metric}</td>
                          <td className="py-2.5 px-4 text-right text-slate-700">{row.lkr2025}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.all2025}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 5: Capital Instruments */}
            {activeBaselTemplate === 5 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 5: Main Features of Regulatory Capital Instruments
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_5_CAPITAL_INSTRUMENTS.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-2.5 px-4 font-sans font-bold text-sdb-purple w-1/3 bg-slate-50">{row.feature}</td>
                          <td className="py-2.5 px-4 text-slate-800 font-sans">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 6: Adequacy Discussion */}
            {activeBaselTemplate === 6 && (
              <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 6: Summary Discussion on Capital Adequacy
                </h4>
                <div className="space-y-3">
                  {BASEL_TEMPLATE_6_ADEQUACY_DISCUSSION.keyPoints.map((pt, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/70 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 leading-relaxed font-sans">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Template 8: Credit Risk Exposures */}
            {activeBaselTemplate === 8 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 8: Credit Risk Under Standardised Approach - Exposures & Risk Weights
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-3 font-bold font-sans">Asset Class</th>
                        <th className="py-2.5 px-3 text-right font-bold">Gross Exposure</th>
                        <th className="py-2.5 px-3 text-right font-bold">0%</th>
                        <th className="py-2.5 px-3 text-right font-bold">20%</th>
                        <th className="py-2.5 px-3 text-right font-bold">50%</th>
                        <th className="py-2.5 px-3 text-right font-bold">100%</th>
                        <th className="py-2.5 px-3 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Total RWA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_8_CREDIT_RISK_EXPOSURES.map((row, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 ${idx === BASEL_TEMPLATE_8_CREDIT_RISK_EXPOSURES.length - 1 ? "bg-slate-100 font-bold" : ""}`}>
                          <td className="py-2.5 px-3 font-sans font-medium text-slate-800">{row.assetClass}</td>
                          <td className="py-2.5 px-3 text-right">{row.grossExposure.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-500">{row.riskWeight0.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-500">{row.riskWeight20.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-500">{row.riskWeight50.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-500">{row.riskWeight100.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.totalRWA.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 9: Market Risk */}
            {activeBaselTemplate === 9 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 9: Market Risk Under Standardised Measurement Method
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-4 font-bold font-sans">Market Risk Type</th>
                        <th className="py-2.5 px-4 text-right font-bold">RWA Amount (LKR Mn)</th>
                        <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Capital Charge (LKR Mn)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_9_MARKET_RISK.map((row, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 ${idx === BASEL_TEMPLATE_9_MARKET_RISK.length - 1 ? "bg-slate-100 font-bold" : ""}`}>
                          <td className="py-2.5 px-4 font-sans font-medium text-slate-800">{row.riskType}</td>
                          <td className="py-2.5 px-4 text-right">{row.rwaAmount.toLocaleString()}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.capitalCharge}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 10: Operational Risk */}
            {activeBaselTemplate === 10 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 10: Operational Risk Under Basic Indicator Approach
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-4 font-bold font-sans">Period / Computation Parameter</th>
                        <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Amount (LKR Millions)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_10_OPERATIONAL_RISK.map((row, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 ${idx >= 3 ? "bg-slate-50 font-bold text-sdb-purple" : ""}`}>
                          <td className="py-2.5 px-4 font-sans font-medium text-slate-800">{row.year}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-sdb-purple">{row.grossIncome.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Template 11: Scope Mapping */}
            {activeBaselTemplate === 11 && (
              <div className="space-y-4">
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Template 11: Differences Between Accounting & Regulatory Scopes
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700">
                      <tr>
                        <th className="py-2.5 px-3 font-bold font-sans">Balance Sheet Line</th>
                        <th className="py-2.5 px-3 text-right font-bold">Carrying Value</th>
                        <th className="py-2.5 px-3 text-right font-bold">Credit Risk Scope</th>
                        <th className="py-2.5 px-3 text-right font-bold">Market Risk Scope</th>
                        <th className="py-2.5 px-3 text-right font-bold">Not Subject to Capital</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {BASEL_TEMPLATE_11_MAPPING_SCOPES.map((row, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 ${idx === BASEL_TEMPLATE_11_MAPPING_SCOPES.length - 1 ? "bg-slate-100 font-bold text-sdb-purple" : ""}`}>
                          <td className="py-2.5 px-3 font-sans font-medium text-slate-800">{row.balanceSheetLine}</td>
                          <td className="py-2.5 px-3 text-right font-bold">{row.carryingValue.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-600">{row.creditRiskScope.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-600">{row.marketScope.toLocaleString()}</td>
                          <td className="py-2.5 px-3 text-right text-slate-600">{row.notSubjectToCap.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: SHAREHOLDER ANALYSIS & TRADING (Points 29, 30, 35, 36, 87 to 100) */}
      {activeSubTab === "shareholders" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                Points 29, 30, 35, 36 & 87–100 &bull; Investor Disclosures
              </span>
              <h3 className="text-2xl font-bold text-sdb-purple font-serif mt-2">
                Shares and Shareholders’ Analysis & Market Trading
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Stated Capital of LKR 10,816 Mn represented by 160,698,832 Ordinary Voting Shares listed on the Colombo Stock Exchange (CSE).
              </p>
            </div>

            {/* Navigation pills for Shareholder analysis */}
            <div className="flex flex-wrap gap-1.5 border-b border-slate-200 pb-3 text-xs font-mono">
              {[
                { id: "tables-1-4", label: "Tables 1–4: Composition & Types" },
                { id: "distribution-top20", label: "Distribution & Top 20 (Points 29, 30)" },
                { id: "directors-holding", label: "Table 7: Directors' Shareholding (Points 36, 92)" },
                { id: "market-trading", label: "Share Trading & Market Cap (Points 91–97)" },
                { id: "dividends-value", label: "Dividends & Value Creation (Points 98–100)" }
              ].map(v => (
                <button
                  key={v.id}
                  onClick={() => setActiveShareholderView(v.id)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                    activeShareholderView === v.id
                      ? "bg-sdb-purple text-white shadow-xs"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            {/* Sub-View: Tables 1-4 */}
            {activeShareholderView === "tables-1-4" && (
              <div className="space-y-6">
                {/* Table 1: Share Ownership Composition */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Table 1: Share Ownership Composition
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#8B1D2C] text-white">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Ownership Category</th>
                          <th className="py-2.5 px-4 text-center font-bold">No. of Shareholders</th>
                          <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Total Holding (Shares)</th>
                          <th className="py-2.5 px-4 text-right font-bold">% of Stated Capital</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SHARE_OWNERSHIP_COMPOSITION_TABLE_1.map((row, idx) => (
                          <tr key={idx} className={`hover:bg-slate-50 ${idx === SHARE_OWNERSHIP_COMPOSITION_TABLE_1.length - 1 ? "bg-slate-50 font-bold" : ""}`}>
                            <td className="py-2 px-4 font-sans font-medium text-slate-800">{row.category}</td>
                            <td className="py-2 px-4 text-center text-slate-600">{row.noOfShareholders.toLocaleString()}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.totalShares.toLocaleString()}</td>
                            <td className="py-2 px-4 text-right font-bold text-emerald-600">{row.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Table 2 & 3: Resident/Non-Resident and Individual/Institutional (Points 88, 89) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Table 2 */}
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-sdb-purple">
                      Table 2: Resident / Non-Resident Analysis
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-100 text-slate-700">
                          <tr>
                            <th className="py-2.5 px-3 font-bold font-sans">Status</th>
                            <th className="py-2.5 px-3 text-center font-bold">Count</th>
                            <th className="py-2.5 px-3 text-right font-bold">Shares</th>
                            <th className="py-2.5 px-3 text-right font-bold">%</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {RESIDENT_NON_RESIDENT_TABLE_2.map((row, idx) => (
                            <tr key={idx} className={`hover:bg-slate-50 ${idx === 2 ? "font-bold bg-slate-50" : ""}`}>
                              <td className="py-2 px-3 font-sans text-slate-800">{row.status}</td>
                              <td className="py-2 px-3 text-center text-slate-600">{row.noOfShareholders.toLocaleString()}</td>
                              <td className="py-2 px-3 text-right font-bold text-sdb-purple">{row.totalShares.toLocaleString()}</td>
                              <td className="py-2 px-3 text-right font-bold text-emerald-600">{row.percentage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Table 3 */}
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-sdb-purple">
                      Table 3: Individual / Institutional Analysis
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs font-mono">
                        <thead className="bg-slate-100 text-slate-700">
                          <tr>
                            <th className="py-2.5 px-3 font-bold font-sans">Investor Type</th>
                            <th className="py-2.5 px-3 text-center font-bold">Count</th>
                            <th className="py-2.5 px-3 text-right font-bold">Shares</th>
                            <th className="py-2.5 px-3 text-right font-bold">%</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {INDIVIDUAL_INSTITUTIONAL_TABLE_3.map((row, idx) => (
                            <tr key={idx} className={`hover:bg-slate-50 ${idx === 2 ? "font-bold bg-slate-50" : ""}`}>
                              <td className="py-2 px-3 font-sans text-slate-800">{row.type}</td>
                              <td className="py-2 px-3 text-center text-slate-600">{row.noOfShareholders.toLocaleString()}</td>
                              <td className="py-2 px-3 text-right font-bold text-sdb-purple">{row.totalShares.toLocaleString()}</td>
                              <td className="py-2 px-3 text-right font-bold text-emerald-600">{row.percentage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Table 4: Institutional Sub-Analysis */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Table 4: Institutional Sub Analysis
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Institutional Sub-Category</th>
                          <th className="py-2.5 px-4 text-center font-bold">Holders</th>
                          <th className="py-2.5 px-4 text-right font-bold">Shares Held</th>
                          <th className="py-2.5 px-4 text-right font-bold">% of Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {INSTITUTIONAL_SUB_ANALYSIS_TABLE_4.map((row, idx) => (
                          <tr key={idx} className={`hover:bg-slate-50 ${idx === INSTITUTIONAL_SUB_ANALYSIS_TABLE_4.length - 1 ? "bg-slate-50 font-bold" : ""}`}>
                            <td className="py-2 px-4 font-sans font-medium text-slate-800">{row.subCategory}</td>
                            <td className="py-2 px-4 text-center text-slate-600">{row.noOfShareholders.toLocaleString()}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple">{row.totalShares.toLocaleString()}</td>
                            <td className="py-2 px-4 text-right font-bold text-emerald-600">{row.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Sub-View: Distribution Schedule & Top 20 (Points 29, 30, 35) */}
            {activeShareholderView === "distribution-top20" && (
              <div className="space-y-6">
                {/* Distribution Schedule (Points 29, 35) */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Distribution Schedule of Shareholdings (Points 29 & 35)
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#8B1D2C] text-white">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Shareholding Range</th>
                          <th className="py-2.5 px-4 text-center font-bold">Shareholders</th>
                          <th className="py-2.5 px-4 text-center font-bold">% Holders</th>
                          <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Total Holding (Shares)</th>
                          <th className="py-2.5 px-4 text-right font-bold">% Holding</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {DISTRIBUTION_SCHEDULE_OF_SHAREHOLDINGS.map((row, idx) => (
                          <tr key={idx} className={`hover:bg-slate-50 ${idx === DISTRIBUTION_SCHEDULE_OF_SHAREHOLDINGS.length - 1 ? "bg-slate-100 font-bold" : ""}`}>
                            <td className="py-2 px-4 font-sans text-slate-800">{row.range}</td>
                            <td className="py-2 px-4 text-center text-slate-600">{row.noOfShareholders.toLocaleString()}</td>
                            <td className="py-2 px-4 text-center text-slate-600">{row.percentageShareholders}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.totalHolding.toLocaleString()}</td>
                            <td className="py-2 px-4 text-right font-bold text-emerald-600">{row.percentageHolding}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Substantial Shareholdings - Top 20 */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Substantial Shareholdings - Top 20 Shareholders as at 31st December 2025
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="py-2.5 px-3 text-center font-bold">Rank</th>
                          <th className="py-2.5 px-4 font-bold font-sans">Shareholder Name</th>
                          <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">No. of Shares</th>
                          <th className="py-2.5 px-4 text-right font-bold">% Holding</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {TOP_20_SHAREHOLDERS.map((s) => (
                          <tr key={s.rank} className="hover:bg-slate-50">
                            <td className="py-2 px-3 text-center font-bold text-slate-400">{s.rank}</td>
                            <td className="py-2 px-4 font-sans font-medium text-slate-800">{s.name}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{s.shares.toLocaleString()}</td>
                            <td className="py-2 px-4 text-right font-bold text-emerald-600">{s.percentage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Sub-View: Table 7 Directors' Shareholding (Points 36, 92) */}
            {activeShareholderView === "directors-holding" && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Table 7: Directors' and CEO's Shareholding (Points 36 & 92)
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    Disclosed in compliance with Section 7.6 (viii) of the Listing Rules of the Colombo Stock Exchange.
                  </p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#8B1D2C] text-white">
                      <tr>
                        <th className="py-2.5 px-4 font-bold font-sans">Director Name & Office</th>
                        <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">31 Dec 2025</th>
                        <th className="py-2.5 px-4 text-right font-bold">31 Dec 2024</th>
                        <th className="py-2.5 px-4 text-right font-bold">% of Shares</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {DIRECTORS_AND_CEO_SHAREHOLDING_TABLE_7.map((d, idx) => (
                        <tr key={idx} className={`hover:bg-slate-50 ${idx === DIRECTORS_AND_CEO_SHAREHOLDING_TABLE_7.length - 1 ? "bg-slate-100 font-bold" : ""}`}>
                          <td className="py-2 px-4 font-sans font-semibold text-slate-800">{d.directorName}</td>
                          <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">
                            {typeof d.shares2025 === "number" ? d.shares2025.toLocaleString() : d.shares2025}
                          </td>
                          <td className="py-2 px-4 text-right text-slate-600">
                            {typeof d.shares2024 === "number" ? d.shares2024.toLocaleString() : d.shares2024}
                          </td>
                          <td className="py-2 px-4 text-right font-bold text-emerald-600">{d.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Sub-View: Market Trading & Cap (Points 91–97) */}
            {activeShareholderView === "market-trading" && (
              <div className="space-y-6">
                {/* Market Cap and Minimum Public Holding */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Market Capitalisation and Minimum Public Holding Compliance
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase">Float Adjusted Market Cap</span>
                      <p className="font-bold text-sdb-purple text-sm mt-1">{MARKET_CAP_AND_PUBLIC_HOLDING.floatAdjustedMarketCap}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase">Public Holding %</span>
                      <p className="font-bold text-emerald-600 text-sm mt-1">{MARKET_CAP_AND_PUBLIC_HOLDING.publicHoldingPercentage}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase">Public Shareholders</span>
                      <p className="font-bold text-sdb-purple text-sm mt-1">{MARKET_CAP_AND_PUBLIC_HOLDING.noOfPublicShareholders.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="text-[10px] text-slate-400 uppercase">Listing Rule Option</span>
                      <p className="font-bold text-sdb-purple text-sm mt-1">Option 4 (Complied)</p>
                    </div>
                  </div>
                </div>

                {/* SDB Bank Share Trading Table (Point 93, 94) */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    SDB Bank Share Trading & Market Activity (Points 93 & 94)
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Market Trading Indicator</th>
                          <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">2025</th>
                          <th className="py-2.5 px-4 text-right font-bold">2024</th>
                          <th className="py-2.5 px-4 text-right font-bold">YoY Movement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SDB_BANK_SHARE_TRADING_DETAILS.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2 px-4 font-sans font-medium text-slate-800">{row.indicator}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{row.y2025}</td>
                            <td className="py-2 px-4 text-right text-slate-600">{row.y2024}</td>
                            <td className="py-2 px-4 text-right font-bold text-emerald-600">{row.change}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* CSE & Industry Capitalisation (Point 95, 96) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-sdb-purple">
                      CSE and Banking Industry Capitalisation
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs font-mono">
                        <tbody className="divide-y divide-slate-100">
                          {CSE_BANKING_INDUSTRY_MARKET_CAP.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="py-2 px-3 font-sans text-slate-800">{row.item}</td>
                              <td className="py-2 px-3 text-right font-bold text-sdb-purple">{row.y2025}</td>
                              <td className="py-2 px-3 text-right text-slate-500">{row.y2024}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-base text-sdb-purple">
                      SDB Bank Capitalisation Details
                    </h4>
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-left text-xs font-mono">
                        <tbody className="divide-y divide-slate-100">
                          {SDB_BANK_CAPITALISATION_DETAILS.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="py-2 px-3 font-sans text-slate-800">{row.metric}</td>
                              <td className="py-2 px-3 text-right font-bold text-sdb-purple">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* SDB Bank Share Price Movement */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    SDB Bank Share Price Movement During 2025
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#8B1D2C] text-white">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Quarterly Period</th>
                          <th className="py-2.5 px-4 text-right font-bold">Highest (LKR)</th>
                          <th className="py-2.5 px-4 text-right font-bold">Lowest (LKR)</th>
                          <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">Closing (LKR)</th>
                          <th className="py-2.5 px-4 text-right font-bold">Trade Volume</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {SDB_SHARE_PRICE_MOVEMENT.map((q, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2 px-4 font-sans font-medium text-slate-800">{q.period}</td>
                            <td className="py-2 px-4 text-right text-emerald-600 font-bold">{q.high}</td>
                            <td className="py-2 px-4 text-right text-slate-600">{q.low}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{q.close}</td>
                            <td className="py-2 px-4 text-right text-slate-700">{q.volume}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Sub-View: Dividends & Value Creation (Points 98 to 100) */}
            {activeShareholderView === "dividends-value" && (
              <div className="space-y-6">
                {/* Dividends Record */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Historical Dividends Record
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Financial Year</th>
                          <th className="py-2.5 px-4 font-bold font-sans">Type of Dividend</th>
                          <th className="py-2.5 px-4 text-right font-bold">DPS (LKR)</th>
                          <th className="py-2.5 px-4 text-right font-bold">Payout Ratio (%)</th>
                          <th className="py-2.5 px-4 text-right font-bold">Gross Payout (LKR)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {DIVIDENDS_TABLE.map((d, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2 px-4 font-bold text-sdb-purple">{d.year}</td>
                            <td className="py-2 px-4 font-sans text-slate-700">{d.dividendType}</td>
                            <td className="py-2 px-4 text-right text-slate-700">{d.dividendPerShare}</td>
                            <td className="py-2 px-4 text-right text-slate-700">{d.payoutRatio}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple">{d.totalPayout}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Value Creation for Shareholders (Points 99, 100) */}
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-base text-sdb-purple">
                    Value Creation for Shareholders - CSE Market Indicators (Points 99 & 100)
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#8B1D2C] text-white">
                        <tr>
                          <th className="py-2.5 px-4 font-bold font-sans">Indicator</th>
                          <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">2025</th>
                          <th className="py-2.5 px-4 text-right font-bold">2024</th>
                          <th className="py-2.5 px-4 text-right font-bold">YoY Movement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {VALUE_CREATION_FOR_SHAREHOLDERS.map((v, idx) => (
                          <tr key={idx} className="hover:bg-slate-50">
                            <td className="py-2 px-4 font-sans font-medium text-slate-800">{v.indicator}</td>
                            <td className="py-2 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/40">{v.y2025}</td>
                            <td className="py-2 px-4 text-right text-slate-600">{v.y2024}</td>
                            <td className="py-2 px-4 text-right font-bold text-emerald-600">{v.change}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: Income Sources & Quarterly Performance (Points 85 & 86) */}
      {activeSubTab === "income-dist" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                Points 85 & 86 &bull; Value Added Statement & Quarterly Flow
              </span>
              <h3 className="text-2xl font-bold text-sdb-purple font-serif mt-2">
                Sources and Utilisation of Income & Quarterly Performance
              </h3>
            </div>

            {/* Income Sources & Utilisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sources */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="font-serif font-bold text-base text-sdb-purple">
                  Sources of Income
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {SOURCES_AND_UTILISATION_OF_INCOME.sources.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-slate-100">
                      <span className="font-sans text-slate-700">{s.label}</span>
                      <span className="font-bold text-sdb-purple">{s.percentage} (LKR {s.amount} Mn)</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Utilisation */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <h4 className="font-serif font-bold text-base text-sdb-purple">
                  Utilisation of Income
                </h4>
                <div className="space-y-2 font-mono text-xs">
                  {SOURCES_AND_UTILISATION_OF_INCOME.utilisation.map((u, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2.5 bg-white rounded-lg border border-slate-100">
                      <span className="font-sans text-slate-700">{u.label}</span>
                      <span className="font-bold text-sdb-coral">{u.percentage} (LKR {u.amount} Mn)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quarterly Performance */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <h4 className="font-serif font-bold text-base text-sdb-purple">
                Quarterly Performance of the Bank - FY 2025
              </h4>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#8B1D2C] text-white">
                    <tr>
                      <th className="py-2.5 px-4 font-bold font-sans">Quarterly Period</th>
                      <th className="py-2.5 px-4 text-right font-bold">Interest Income</th>
                      <th className="py-2.5 px-4 text-right font-bold">Interest Expense</th>
                      <th className="py-2.5 px-4 text-right font-bold">Net Interest Income</th>
                      <th className="py-2.5 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">PBT</th>
                      <th className="py-2.5 px-4 text-right font-bold">PAT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {QUARTERLY_PERFORMANCE_TABLE.map((q, idx) => (
                      <tr key={idx} className={`hover:bg-slate-50 ${idx === QUARTERLY_PERFORMANCE_TABLE.length - 1 ? "bg-slate-100 font-bold" : ""}`}>
                        <td className="py-2 px-4 font-sans font-medium text-slate-800">{q.quarter}</td>
                        <td className="py-2 px-4 text-right">{q.interestIncome.toLocaleString()}</td>
                        <td className="py-2 px-4 text-right text-rose-600">{q.interestExpense.toLocaleString()}</td>
                        <td className="py-2 px-4 text-right font-bold text-sdb-purple">{q.nii.toLocaleString()}</td>
                        <td className="py-2 px-4 text-right font-bold text-[#8B1D2C] bg-[#FAF2EB]/40">{q.pbt.toLocaleString()}</td>
                        <td className="py-2 px-4 text-right font-bold text-emerald-600">{q.pat.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Glossary & Abbreviations */}
      {activeSubTab === "glossary" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  Financial Glossary & Abbreviations
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Standard terminology under SLFRS/LKAS, Basel III, and Integrated Reporting standards.
                </p>
              </div>
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search glossary..."
                  value={glossarySearch}
                  onChange={(e) => setGlossarySearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs outline-none focus:border-sdb-purple font-mono"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            {/* Glossary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((g, idx) => (
                <div key={idx} className="bg-slate-50/70 p-4 rounded-xl border border-slate-200/70 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-serif font-bold text-sm text-sdb-purple">{g.term}</span>
                    {g.acronym && (
                      <span className="font-mono text-[10px] font-bold bg-sdb-purple/10 text-sdb-purple px-2 py-0.5 rounded">
                        {g.acronym}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">{g.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: Corporate Directory */}
      {activeSubTab === "corporate" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                Point 43 &bull; Audited by Ernst & Young (EY)
              </span>
              <h3 className="font-serif text-2xl font-bold text-sdb-purple mt-2">
                Corporate Information & Institutional Directory
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 uppercase text-[10px]">Name of Company</span>
                <p className="font-bold text-sdb-purple text-sm font-sans">{CORPORATE_INFORMATION_DATA.companyName}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 uppercase text-[10px]">Legal Form & Registration</span>
                <p className="font-bold text-slate-800 font-sans">{CORPORATE_INFORMATION_DATA.legalForm}</p>
                <p className="text-slate-500">{CORPORATE_INFORMATION_DATA.registrationNumber}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 uppercase text-[10px]">Head Office & Registered Office</span>
                <p className="font-bold text-slate-800 font-sans">{CORPORATE_INFORMATION_DATA.registeredOffice}</p>
                <p className="text-slate-500">Tel: {CORPORATE_INFORMATION_DATA.contactPhone}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                <span className="text-slate-400 uppercase text-[10px]">Statutory External Auditor</span>
                <p className="font-bold text-[#8B1D2C] text-sm font-sans">{CORPORATE_INFORMATION_DATA.auditors}</p>
                <p className="text-slate-500">{CORPORATE_INFORMATION_DATA.auditorsAddress}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
