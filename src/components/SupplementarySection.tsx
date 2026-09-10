import { useState } from "react";
import { motion } from "motion/react";
import {
  FileSpreadsheet, ShieldAlert, PieChart, BookMarked,
  HelpCircle, Building2, Calendar, Search, ArrowUpRight,
  Download, ExternalLink, Filter, CheckCircle, Info
} from "lucide-react";
import {
  TEN_YEARS_AT_A_GLANCE_DATA,
  BASEL_III_PILLAR_III_DATA,
  SOURCES_AND_UTILISATION_OF_INCOME,
  GLOSSARY_TERMS,
  ABBREVIATIONS_DATA,
  CORPORATE_INFORMATION_DATA,
  GlossaryEntry
} from "../data/supplementaryData";

export default function SupplementarySection() {
  const [activeSubTab, setActiveSubTab] = useState<
    "ten-years" | "basel" | "income-dist" | "glossary" | "corporate"
  >("ten-years");

  // Glossary state
  const [glossarySearch, setGlossarySearch] = useState("");
  const [glossaryCategory, setGlossaryCategory] = useState<string>("all");

  // Abbreviations state
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
    <div id="supplementary-section" className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E113F] via-[#2F1B68] to-[#452782] text-white p-8 md:p-12 shadow-xl border border-sdb-purple/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-sdb-coral/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sdb-blue/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-sdb-coral">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Pages 298–328 &bull; Supplementary Disclosures &amp; References</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            Supplementary Disclosures &amp; Reference Guide
          </h2>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-3xl">
            A comprehensive reference hub providing the ten-year statistical record (2016–2025), statutory Basel III Pillar III market disclosures, income distribution analysis, technical glossary, abbreviations, corporate details, and Notice of the 29th Annual General Meeting.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              10-Year Record (2016–2025)
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Basel III Pillar III (CAR 15.24%)
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Searchable Financial Glossary
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">
              Notice of 29th AGM
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Sub-tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
        {[
          { id: "ten-years", label: "Ten Years at a Glance", icon: FileSpreadsheet },
          { id: "basel", label: "Basel III Pillar III", icon: ShieldAlert },
          { id: "income-dist", label: "Income Sources & Utilisation", icon: PieChart },
          { id: "glossary", label: "Glossary & Abbreviations", icon: HelpCircle },
          { id: "corporate", label: "Corporate Info & AGM Notice", icon: Building2 }
        ].map((tab) => {
          const TabIcon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? "bg-sdb-purple text-white shadow-md shadow-sdb-purple/20"
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
                <h3 className="text-xl font-bold text-slate-800 font-serif mt-1">
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
                    <td className="p-3 font-sans font-bold text-slate-800">Total Equity (Shareholders)</td>
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
                  <tr className="hover:bg-slate-50/80 bg-emerald-50/30">
                    <td className="p-3 font-sans font-bold text-emerald-900">Profit Before Tax (PBT)</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right font-semibold text-emerald-900 ${d.year === "2025" ? "font-black" : ""}`}>
                        {d.profitBeforeTax.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="hover:bg-slate-50/80 bg-emerald-50/60">
                    <td className="p-3 font-sans font-bold text-emerald-950">Profit After Tax (PAT)</td>
                    {TEN_YEARS_AT_A_GLANCE_DATA.map((d) => (
                      <td key={d.year} className={`p-3 text-right font-semibold text-emerald-950 ${d.year === "2025" ? "font-black" : ""}`}>
                        {d.profitAfterTax.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Growth callout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase">10-Year Advances Growth</span>
                <div className="text-xl font-black text-sdb-purple font-mono mt-1">+93.8%</div>
                <p className="text-[11px] text-slate-600 mt-0.5">From LKR 56.68 Bn (2016) to LKR 109.84 Bn (2025)</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase">10-Year Deposits Growth</span>
                <div className="text-xl font-black text-sdb-purple font-mono mt-1">+128.4%</div>
                <p className="text-[11px] text-slate-600 mt-0.5">From LKR 46.27 Bn (2016) to LKR 105.68 Bn (2025)</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <span className="text-[11px] font-bold text-slate-500 uppercase">10-Year Total Assets Growth</span>
                <div className="text-xl font-black text-sdb-purple font-mono mt-1">+122.5%</div>
                <p className="text-[11px] text-slate-600 mt-0.5">From LKR 66.05 Bn (2016) to LKR 146.96 Bn (2025)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Basel III Pillar III */}
      {activeSubTab === "basel" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                    Statutory Compliance &bull; Basel III
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Report Pages 300–305</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 font-serif mt-1">
                  Capital Adequacy &amp; Liquidity Standards (Pillar III Market Disclosures)
                </h3>
              </div>
              <span className="text-xs font-mono bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                CBSL Banking Act Directions
              </span>
            </div>

            {/* Ratios Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 font-mono font-bold text-slate-700">
                    <th className="p-3.5">Regulatory Metric</th>
                    <th className="p-3.5 text-center">Regulatory Minimum</th>
                    <th className="p-3.5 text-right bg-sdb-purple/10 text-sdb-purple">Bank 2025</th>
                    <th className="p-3.5 text-right">Bank 2024</th>
                    <th className="p-3.5 text-center text-emerald-800">Compliance Surplus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {BASEL_III_PILLAR_III_DATA.capitalAdequacyRatios.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80">
                      <td className="p-3.5 font-sans font-semibold text-slate-800">{item.ratio}</td>
                      <td className="p-3.5 text-center text-slate-600">{item.requirement}</td>
                      <td className="p-3.5 text-right font-black text-sdb-purple bg-sdb-purple/5">{item.bank2025}</td>
                      <td className="p-3.5 text-right text-slate-600">{item.bank2024}</td>
                      <td className="p-3.5 text-center font-bold text-emerald-700">{item.surplus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Risk Weighted Assets breakdown */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3">
                Risk-Weighted Assets (RWA) Breakdown &bull; 31 December 2025
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold block">Credit Risk RWA</span>
                  <div className="text-lg font-black text-slate-800 font-mono mt-1">
                    {BASEL_III_PILLAR_III_DATA.riskWeightedAssets.creditRisk}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">88.9% of Total</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold block">Operational Risk RWA</span>
                  <div className="text-lg font-black text-slate-800 font-mono mt-1">
                    {BASEL_III_PILLAR_III_DATA.riskWeightedAssets.operationalRisk}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">9.2% of Total</span>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold block">Market Risk RWA</span>
                  <div className="text-lg font-black text-slate-800 font-mono mt-1">
                    {BASEL_III_PILLAR_III_DATA.riskWeightedAssets.marketRisk}
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">1.9% of Total</span>
                </div>

                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
                  <span className="text-[11px] text-emerald-800 font-bold block">Total Risk Weighted Assets</span>
                  <div className="text-lg font-black text-emerald-950 font-mono mt-1">
                    {BASEL_III_PILLAR_III_DATA.riskWeightedAssets.totalRWA}
                  </div>
                  <span className="text-[10px] text-emerald-700 font-mono">Pillar III Basis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Sources & Utilisation of Income */}
      {activeSubTab === "income-dist" && (
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-sdb-coral/10 text-sdb-coral text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                    Value Generation &amp; Distribution
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Report Page 308</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 font-serif mt-1">
                  Sources &amp; Utilisation of Income (2025)
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-500">Gross Income: LKR 18,404 Million</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sources */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Sources of Income (Inflows)
                  </h4>
                  <span className="text-xs font-mono font-bold text-emerald-700">100.0%</span>
                </div>

                <div className="space-y-3">
                  {SOURCES_AND_UTILISATION_OF_INCOME.sources.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                        <span>{item.label}</span>
                        <span className="font-mono text-emerald-800 font-bold">{item.percentage}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-600 h-full rounded-full"
                          style={{ width: item.percentage }}
                        />
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1 text-right">
                        LKR {item.amount.toLocaleString()} Mn
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Utilisation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
                    Utilisation of Income (Outflows &amp; Retention)
                  </h4>
                  <span className="text-xs font-mono font-bold text-sdb-purple">100.0%</span>
                </div>

                <div className="space-y-3">
                  {SOURCES_AND_UTILISATION_OF_INCOME.utilisation.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <div className="flex justify-between text-xs font-semibold text-slate-800 mb-1">
                        <span>{item.label}</span>
                        <span className="font-mono text-sdb-purple font-bold">{item.percentage}</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-sdb-purple h-full rounded-full"
                          style={{ width: item.percentage }}
                        />
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1 text-right">
                        LKR {item.amount.toLocaleString()} Mn
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Glossary & Abbreviations */}
      {activeSubTab === "glossary" && (
        <div className="space-y-8">
          {/* Glossary Section */}
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-sdb-blue/10 text-sdb-blue text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                    Technical Directory
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Pages 318–321</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 font-serif mt-1">
                  Glossary of Banking &amp; Financial Terms
                </h3>
              </div>

              {/* Glossary Search & Filter */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative w-full sm:w-60">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search terms or acronyms..."
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-purple/30"
                  />
                </div>
                <select
                  value={glossaryCategory}
                  onChange={(e) => setGlossaryCategory(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
                >
                  <option value="all">All Categories</option>
                  <option value="banking">Banking</option>
                  <option value="accounting">Accounting</option>
                  <option value="risk">Risk Management</option>
                  <option value="sustainability">Sustainability</option>
                  <option value="governance">Governance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-4 rounded-2xl border border-slate-200/80 hover:border-sdb-purple/30 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-slate-800">
                      {item.term} {item.acronym && <span className="text-sdb-purple font-mono font-normal">({item.acronym})</span>}
                    </h4>
                    <span className="text-[10px] font-mono uppercase bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.definition}
                  </p>
                  <div className="mt-2 text-[10px] text-slate-400 font-mono">
                    Page {item.sourcePage}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abbreviations Section */}
          <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-mono font-bold px-2.5 py-0.5 rounded-md">
                    Acronym Index
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Pages 316–317</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 font-serif mt-1">
                  Abbreviations Directory ({filteredAbbreviations.length} Items)
                </h3>
              </div>

              <div className="relative w-full sm:w-60">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter abbreviations..."
                  value={abbrSearch}
                  onChange={(e) => setAbbrSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-600/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {filteredAbbreviations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-3 rounded-xl border border-slate-200 hover:bg-amber-50/50 transition-colors"
                >
                  <div className="text-xs font-mono font-bold text-slate-900">{item.abbreviation}</div>
                  <div className="text-[11px] text-slate-600 line-clamp-2 mt-0.5 leading-tight">
                    {item.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: Corporate Info & AGM Notice */}
      {activeSubTab === "corporate" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Corporate Information */}
            <div className="bg-white rounded-3xl border border-sdb-purple/10 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                <Building2 className="w-4 h-4 text-sdb-purple" />
                <h3 className="text-lg font-bold text-slate-800 font-serif">
                  Corporate Information &bull; Page {CORPORATE_INFORMATION_DATA.sourcePage}
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-700 block">Name of Bank:</span>
                  <span className="text-slate-900 font-semibold">{CORPORATE_INFORMATION_DATA.nameOfBank}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block">Legal Form &amp; License:</span>
                  <p className="text-slate-600 leading-relaxed">{CORPORATE_INFORMATION_DATA.legalForm}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono">
                  <div>
                    <span className="font-bold text-slate-700 block">Company Reg No:</span>
                    <span className="text-slate-800">{CORPORATE_INFORMATION_DATA.registrationNo}</span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-700 block">VAT Reg No:</span>
                    <span className="text-slate-800">{CORPORATE_INFORMATION_DATA.vatRegistrationNo}</span>
                  </div>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block">Registered Office:</span>
                  <span className="text-slate-800">{CORPORATE_INFORMATION_DATA.registeredOffice}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block">External Auditors:</span>
                  <span className="text-slate-800">{CORPORATE_INFORMATION_DATA.externalAuditors}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block">Company Secretaries:</span>
                  <span className="text-slate-800">{CORPORATE_INFORMATION_DATA.boardSecretaries}</span>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block">Stock Exchange Listing:</span>
                  <span className="text-slate-800">{CORPORATE_INFORMATION_DATA.stockExchangeListing}</span>
                </div>
              </div>
            </div>

            {/* Notice of 29th Annual General Meeting */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl border border-amber-200 p-6 sm:p-8 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-amber-200/80 pb-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-amber-700" />
                    <h3 className="text-lg font-bold text-amber-950 font-serif">
                      Notice of AGM &bull; Page {CORPORATE_INFORMATION_DATA.agmNotice.sourcePage}
                    </h3>
                  </div>
                  <span className="bg-amber-200/70 text-amber-900 text-xs font-mono font-bold px-2.5 py-0.5 rounded">
                    Official Notice
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-white p-4 rounded-2xl border border-amber-200/80 space-y-2">
                    <div className="text-base font-black text-amber-900 font-serif">
                      {CORPORATE_INFORMATION_DATA.agmNotice.meeting}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-500 block">Date:</span>
                        <span className="font-bold text-slate-800">{CORPORATE_INFORMATION_DATA.agmNotice.date}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Time:</span>
                        <span className="font-bold text-slate-800">{CORPORATE_INFORMATION_DATA.agmNotice.time}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Venue:</span>
                      <span className="text-slate-800 font-medium">{CORPORATE_INFORMATION_DATA.agmNotice.venue}</span>
                    </div>
                  </div>

                  <div className="bg-white/80 p-4 rounded-2xl border border-amber-200/60 text-slate-700 leading-relaxed">
                    <span className="font-bold block mb-1">Key AGM Agenda Items:</span>
                    <ul className="list-disc list-inside space-y-1 text-[11px]">
                      <li>Receive and consider the Annual Report and Audited Financial Statements for year ended 31 December 2025</li>
                      <li>Re-election and appointment of Directors retiring by rotation</li>
                      <li>Re-appointment of KPMG as External Independent Auditors and authorize Directors to determine their remuneration</li>
                      <li>Consideration of special business and cooperative institutional resolutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=324"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center space-x-2 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs py-3 px-4 rounded-xl transition-colors shadow-sm"
              >
                <span>Read Full AGM Notice (Page 324)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
