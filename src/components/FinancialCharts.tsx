import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { FINANCIAL_TRENDS } from "../data/reportData";
import { FINANCIAL_HIGHLIGHTS_DATA, FIVE_YEAR_SERIES, HighlightMetric } from "../data/highlightsData";
import { 
  TrendingUp, TrendingDown, Minus, Percent, Award, ShieldCheck, FileSpreadsheet, 
  LineChart as LineChartIcon, BookOpen, Download, ExternalLink, CheckCircle2,
  Layers, ArrowUpRight, ArrowDownRight
} from "lucide-react";

type MetricKey =
  | "netAdvances"
  | "deposits"
  | "totalAssets"
  | "totalEquity"
  | "netInterestIncome"
  | "netFeeIncome"
  | "profitAfterTax"
  | "impairmentCharge"
  | "totalComprehensiveIncome";

interface MetricConfig {
  key: MetricKey;
  label: string;
  color: string;
  gradientStart: string;
  description: string;
  growth2025: string;
}

const METRICS_CONFIG: MetricConfig[] = [
  {
    key: "netAdvances",
    label: "Net Advances to Customers",
    color: "#E8456C", // sdb-coral
    gradientStart: "rgba(232, 69, 108, 0.15)",
    description: "Reversed a five-year portfolio contraction trend in 2025, reaching robust double-digit growth (+15.46%) driven by focused credit lines to SMEs and tea smallholders.",
    growth2025: "+15.46%"
  },
  {
    key: "deposits",
    label: "Deposits from Customers",
    color: "#4F2284", // sdb-plum
    gradientStart: "rgba(79, 34, 132, 0.15)",
    description: "Maintained a stable, cooperative-led low-cost funding base, keeping public deposits as the primary source of capital and balance sheet stability.",
    growth2025: "-1.22%"
  },
  {
    key: "totalAssets",
    label: "Total Assets",
    color: "#0A8AC8", // sdb-blue
    gradientStart: "rgba(10, 138, 200, 0.15)",
    description: "The bank expanded its asset base securely, balancing high-quality investments and collateral-backed credit offerings to reach LKR 146.96 Bn.",
    growth2025: "+1.24%"
  },
  {
    key: "totalEquity",
    label: "Total Equity",
    color: "#E2861F", // sdb-amber
    gradientStart: "rgba(226, 134, 31, 0.15)",
    description: "Strengthened our capital base steadily with retained earnings expanding by 13% to provide an excellent buffer for future growth.",
    growth2025: "+1.49%"
  },
  {
    key: "netInterestIncome",
    label: "Net Interest Income",
    color: "#248D4D", // sdb-green
    gradientStart: "rgba(36, 141, 77, 0.15)",
    description: "Achieved record growth despite a declining interest rate environment, thanks to effective deposit repricing and an improved funding mix.",
    growth2025: "+5.27%"
  },
  {
    key: "netFeeIncome",
    label: "Net Fee & Commission Income",
    color: "#2F1B68", // sdb-purple
    gradientStart: "rgba(47, 27, 104, 0.15)",
    description: "Accelerated digital fee generation and transaction volumes across UPay and Business Internet Banking portals.",
    growth2025: "+15.47%"
  },
  {
    key: "profitAfterTax",
    label: "Profit After Tax",
    color: "#E8456C",
    gradientStart: "rgba(232, 69, 108, 0.15)",
    description: "Highly resilient bottom line, growing 16.94% YoY at the Profit Before Tax level (LKR 800.2 Mn), even after absorbing concessions to assist troubled customers.",
    growth2025: "-1.13%"
  },
  {
    key: "impairmentCharge",
    label: "Impairment Charge",
    color: "#4F2284",
    gradientStart: "rgba(79, 34, 132, 0.15)",
    description: "Prudent risk profiling and rigorous underwriting allowed SDB to maintain robust impairment covers while Stage 3 impaired loans dropped from 6.93% to 5.36%.",
    growth2025: "+28.62%"
  },
  {
    key: "totalComprehensiveIncome",
    label: "Total Comprehensive Income",
    color: "#0A8AC8",
    gradientStart: "rgba(10, 138, 200, 0.15)",
    description: "Reflected additional deferred tax liabilities on land and building revaluations as SDB optimized its capital reserves.",
    growth2025: "-36.21%"
  }
];

// Exact Page 12 Financial Highlights from Published Annual Report
const OFFICIAL_PAGE_12_HIGHLIGHTS = [
  {
    category: "Financial Performance (for the year ended 31st Dec)",
    rows: [
      { metric: "Gross Income", y2025: "18,403,923,767", y2024: "21,062,580,699", change: "-12.62%", isHighlight: false },
      { metric: "Interest Income", y2025: "17,098,539,394", y2024: "20,005,051,598", change: "-14.53%", isHighlight: false },
      { metric: "Interest Expenses", y2025: "8,865,857,751", y2024: "12,184,587,605", change: "-27.24%", isHighlight: false },
      { metric: "Profit Before Tax (PBT)", y2025: "800,172,578", y2024: "684,262,920", change: "+16.94%", isHighlight: true },
      { metric: "Profit After Tax (PAT)", y2025: "404,918,546", y2024: "409,534,246", change: "-1.13%", isHighlight: false },
      { metric: "Total Comprehensive Income", y2025: "217,906,021", y2024: "341,615,936", change: "-36.21%", isHighlight: false }
    ]
  },
  {
    category: "Financial Position at the Year End",
    rows: [
      { metric: "Net Advances to Customers", y2025: "109,840,875,877", y2024: "95,137,106,867", change: "+15.46%", isHighlight: true },
      { metric: "Deposits From Customers", y2025: "105,680,974,038", y2024: "106,989,899,941", change: "-1.22%", isHighlight: false },
      { metric: "Total Assets", y2025: "146,958,096,826", y2024: "145,155,949,959", change: "+1.24%", isHighlight: true },
      { metric: "Total Equity", y2025: "14,804,406,386", y2024: "14,586,500,364", change: "+1.49%", isHighlight: false },
      { metric: "Growth in Advances (%)", y2025: "15.46%", y2024: "-3.77%", change: "+19.23%", isHighlight: true },
      { metric: "Growth in Deposits (%)", y2025: "-1.22%", y2024: "-1.04%", change: "-0.18%", isHighlight: false }
    ]
  },
  {
    category: "Investor Information & Ratios",
    rows: [
      { metric: "Earnings Per Share (LKR)", y2025: "2.47", y2024: "2.49", change: "-0.80%", isHighlight: false },
      { metric: "Net Assets Per Share (LKR)", y2025: "90.18", y2024: "88.85", change: "+1.50%", isHighlight: true },
      { metric: "Market Value Per Share (LKR)", y2025: "58.10", y2024: "45.90", change: "+26.58%", isHighlight: true },
      { metric: "Price Earning Ratio (Times)", y2025: "23.56", y2024: "18.40", change: "+28.04%", isHighlight: false },
      { metric: "Net Interest Margin (%)", y2025: "5.37%", y2024: "5.18%", change: "+0.19%", isHighlight: false },
      { metric: "Return on Assets before taxes (ROA %)", y2025: "1.11%", y2024: "0.96%", change: "+0.15%", isHighlight: true },
      { metric: "Return on Equity (ROE %)", y2025: "2.76%", y2024: "2.84%", change: "-0.08%", isHighlight: false },
      { metric: "Impaired Loans (Stage 3) to Total Loans (%)", y2025: "5.36%", y2024: "6.93%", change: "-1.57% (Improved)", isHighlight: true }
    ]
  },
  {
    category: "Statutory Capital & Liquidity Ratios",
    rows: [
      { metric: "Common Equity Tier 1 Ratio (Req: 7.00%)", y2025: "14.20%", y2024: "15.00%", change: "-0.80%", isHighlight: true },
      { metric: "Tier 1 Capital Ratio (Req: 8.50%)", y2025: "14.20%", y2024: "15.00%", change: "-0.80%", isHighlight: true },
      { metric: "Total Capital Ratio (Req: 12.50%)", y2025: "15.24%", y2024: "16.37%", change: "-1.13%", isHighlight: true },
      { metric: "Liquidity Coverage Ratio (Req: 100%)", y2025: "151.86%", y2024: "279.65%", change: "-127.79%", isHighlight: false },
      { metric: "Net Stable Funding Ratio (Req: 100%)", y2025: "144.82%", y2024: "173.02%", change: "-28.20%", isHighlight: false }
    ]
  }
];

export default function FinancialCharts() {
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>("netAdvances");
  const [viewMode, setViewMode] = useState<"combined" | "table" | "charts">("combined");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const displayedMetrics = FINANCIAL_HIGHLIGHTS_DATA.filter(m => {
    if (categoryFilter === "all") return true;
    if (categoryFilter === "performance") return m.category === "performance";
    if (categoryFilter === "position") return m.category === "position";
    if (categoryFilter === "ratios") return m.category === "ratios" || m.category === "investor";
    if (categoryFilter === "statutory") return m.category === "statutory";
    return true;
  });

  const activeConfig = METRICS_CONFIG.find((m) => m.key === selectedMetric) || METRICS_CONFIG[0];

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-LK").format(num);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="glass-card p-3 rounded-xl border border-sdb-purple/15 text-left shadow-lg">
          <p className="font-mono text-[11px] text-slate-500 font-bold mb-1">FY {label}</p>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeConfig.color }} />
            <p className="text-xs font-bold text-sdb-purple font-mono">
              LKR {formatNumber(data.value)} Mn
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="financial-overview-section" className="space-y-10">
      
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Audited Performance Disclosures</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            Financial Highlights & Recovery
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            In 2025, SDB bank executed a decisive turnaround, reversing 3 years of loan contraction to deliver 15.46% portfolio growth and a 16.94% increase in Profit Before Tax.
          </p>
        </div>

        {/* View Toggle Button */}
        <div className="flex items-center bg-white/80 p-1 rounded-2xl border border-sdb-purple/15 shadow-sm">
          <button
            onClick={() => setViewMode("combined")}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              viewMode === "combined"
                ? "bg-sdb-purple text-white shadow-sm"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All (Table & Graphs)</span>
          </button>
          <button
            onClick={() => setViewMode("table")}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              viewMode === "table"
                ? "bg-sdb-crimson text-white shadow-sm"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Official Table (Page 12)</span>
          </button>
          <button
            onClick={() => setViewMode("charts")}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              viewMode === "charts"
                ? "bg-sdb-purple text-white shadow-sm"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            <LineChartIcon className="w-3.5 h-3.5" />
            <span>5-Year Visual Trends</span>
          </button>
        </div>
      </div>

      {/* 2025 At A Glance Section with Filterable Categories */}
      <div className="space-y-4 text-left">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h3 className="font-serif text-xl font-bold text-sdb-purple">2025 At A Glance</h3>
            <p className="text-xs text-slate-500 font-mono">Factual annual report figures with YoY movements</p>
          </div>
          <div className="flex flex-wrap gap-1 bg-white/80 p-1 rounded-xl border border-sdb-purple/10 text-xs font-mono">
            {[
              { id: "all", label: "All Numbers (13)" },
              { id: "performance", label: "Income & Profit" },
              { id: "position", label: "Advances & Assets" },
              { id: "ratios", label: "Key Ratios" },
              { id: "statutory", label: "Capital Adequacy" }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  categoryFilter === cat.id
                    ? "bg-sdb-purple text-white shadow-xs"
                    : "text-slate-600 hover:text-sdb-purple hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {displayedMetrics.map((kpi) => {
            const hasChange = typeof kpi.changePercent === "number";
            const isPos = kpi.changeDirection === "positive";
            const isNeg = kpi.changeDirection === "negative";
            
            return (
              <motion.div
                key={kpi.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-4 text-left border border-sdb-purple/10 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-sdb-purple/25 transition-all group bg-white/80"
              >
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block line-clamp-1">
                      {kpi.sourceSection}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      P.{kpi.sourcePage}
                    </span>
                  </div>
                  <h4 className="font-semibold text-xs text-sdb-purple leading-snug line-clamp-2">
                    {kpi.metric}
                  </h4>
                  <span className="text-lg sm:text-xl font-bold font-mono text-sdb-purple block mt-1.5">
                    {kpi.display2025}
                  </span>
                </div>

                <div className="mt-3 pt-2.5 border-t border-sdb-purple/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-slate-500">
                    2024: {kpi.display2024}
                  </span>
                  {hasChange && (
                    <span className={`inline-flex items-center font-bold text-[11px] px-1.5 py-0.5 rounded ${
                      isPos 
                        ? "bg-emerald-50 text-emerald-700" 
                        : isNeg 
                        ? "bg-slate-100 text-slate-700" 
                        : "bg-slate-50 text-slate-600"
                    }`}>
                      {kpi.changePercent! > 0 ? (
                        <ArrowUpRight className="w-3 h-3 mr-0.5 text-emerald-600" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 mr-0.5 text-slate-500" />
                      )}
                      {kpi.changePercent! > 0 ? `+${kpi.changePercent}%` : `${kpi.changePercent}%`}
                    </span>
                  )}
                  {kpi.minimumRequirement && (
                    <span className="text-[10px] text-sdb-coral font-bold bg-sdb-coral/10 px-1.5 py-0.5 rounded">
                      Req: {kpi.minimumRequirement}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Financial Table and/or Charts depending on viewMode */}
      {(viewMode === "combined" || viewMode === "table") && (
        <motion.div
          key="table-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Authentic Page 12 Annual Report Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-sdb-purple/10 overflow-hidden text-left">
            {/* Signature Crimson Header Bar */}
            <div className="bg-[#8B1D2C] px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between text-white gap-2">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                  Financial Highlights
                </h3>
                <p className="text-xs text-white/80 font-mono">
                  Audited Figures for the Year Ended 31st December (LKR)
                </p>
              </div>
              <div className="flex items-center space-x-2 text-xs font-mono">
                <span className="bg-white/20 px-3 py-1 rounded-full text-white text-[11px] font-semibold">
                  Source: Annual Report Page 12
                </span>
              </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80 font-mono text-xs uppercase tracking-wider text-slate-600">
                    <th className="py-3 px-6 font-bold">Indicator / Statement Line</th>
                    <th className="py-3 px-6 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">2025 LKR</th>
                    <th className="py-3 px-6 text-right font-bold text-slate-700">2024 LKR</th>
                    <th className="py-3 px-6 text-right font-bold text-slate-700">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {OFFICIAL_PAGE_12_HIGHLIGHTS.map((section, sIdx) => (
                    <tr key={`sec-${sIdx}`} className="contents">
                      <tr className="bg-[#2F1B68]/5 font-sans">
                        <td colSpan={4} className="py-2.5 px-6 font-serif font-bold text-sdb-purple text-sm sm:text-base">
                          {section.category}
                        </td>
                      </tr>
                      {section.rows.map((r, rIdx) => (
                        <tr 
                          key={`row-${sIdx}-${rIdx}`}
                          className={`hover:bg-slate-50/80 transition-colors ${
                            r.isHighlight ? "bg-amber-50/30" : ""
                          }`}
                        >
                          <td className="py-2.5 px-6 font-sans text-slate-800 flex items-center font-medium">
                            {r.isHighlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-sdb-coral mr-2 shrink-0" />
                            )}
                            <span>{r.metric}</span>
                          </td>
                          <td className="py-2.5 px-6 text-right font-bold text-sdb-purple bg-[#FAF2EB]/60">
                            {r.y2025}
                          </td>
                          <td className="py-2.5 px-6 text-right text-slate-600">
                            {r.y2024}
                          </td>
                          <td className={`py-2.5 px-6 text-right font-bold ${
                            r.change.startsWith("+") 
                              ? "text-emerald-600" 
                              : r.change.includes("Improved")
                              ? "text-emerald-600"
                              : "text-slate-600"
                          }`}>
                            {r.change}
                          </td>
                        </tr>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Note */}
            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-sans gap-2">
              <p>Values stated as published in the audited 2025 Annual Report prepared under SLFRS/LKAS standards.</p>
              <a
                href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sdb-coral hover:text-sdb-purple font-mono font-bold"
              >
                <span>View Full Page in PDF</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {(viewMode === "combined" || viewMode === "charts") && (
        <motion.div
          key="charts-view"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left: Metric Selectors */}
          <div className="lg:col-span-4 flex flex-col space-y-2 text-left">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1">
              Select Indicator (2021-2025):
            </p>
            {METRICS_CONFIG.map((metric) => {
              const isSelected = selectedMetric === metric.key;
              return (
                <button
                  key={metric.key}
                  onClick={() => setSelectedMetric(metric.key)}
                  className={`p-3.5 rounded-xl border transition-all text-left flex justify-between items-center cursor-pointer ${
                    isSelected
                      ? "bg-white border-sdb-purple shadow-md"
                      : "bg-white/60 border-sdb-purple/10 hover:bg-white hover:border-sdb-purple/20 text-slate-700"
                  }`}
                >
                  <div>
                    <h4 className="font-semibold text-xs sm:text-sm text-sdb-purple">{metric.label}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
                      2025: LKR {formatNumber(FINANCIAL_TRENDS.find((f) => f.year === "2025")![metric.key])} Mn
                    </p>
                  </div>
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                      metric.growth2025.startsWith("+")
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-rose-50 text-rose-600"
                    }`}
                  >
                    {metric.growth2025}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Chart Area */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            <div className="glass-card rounded-2xl p-6 flex flex-col justify-between h-[420px] shadow-sm">
              <div className="flex justify-between items-center mb-4 text-left">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple">
                    {activeConfig.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">Five-Year Trajectory in LKR Millions</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sdb-purple/10 text-sdb-purple">
                    FY 2021 – FY 2025
                  </span>
                </div>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={FINANCIAL_TRENDS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id={`gradient-${selectedMetric}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={activeConfig.color} stopOpacity={0.3} />
                        <stop offset="95%" stopColor={activeConfig.color} stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(47, 27, 104, 0.08)" />
                    <XAxis
                      dataKey="year"
                      stroke="#64748B"
                      fontSize={12}
                      fontFamily="var(--font-mono)"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#64748B"
                      fontSize={11}
                      fontFamily="var(--font-mono)"
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(val) => `${formatNumber(val)}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey={selectedMetric}
                      stroke={activeConfig.color}
                      strokeWidth={3}
                      fillOpacity={1}
                      fill={`url(#gradient-${selectedMetric})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-sdb-purple/5 rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed text-left border border-sdb-purple/10">
                <p>{activeConfig.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* About This Report Spotlight (Page 10 from PDF) */}
      <div className="bg-gradient-to-r from-white via-white to-[#FAF4EC] rounded-3xl p-6 md:p-8 border border-sdb-purple/15 shadow-md text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-purple uppercase tracking-wider bg-sdb-purple/10 px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5 text-sdb-coral" />
            <span>About This Report (Page 10)</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple">
            International Integrated Reporting Council (IIRC) Framework
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            SDB bank has voluntarily adopted the International Integrated Reporting Standards to report on its annual progress, ensuring transparency and comprehensive disclosure for all stakeholders. The report complies with the Listing Rules of the Colombo Stock Exchange (CSE), Central Bank of Sri Lanka (CBSL) Directions, and the Companies Act No. 07 of 2007.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700 font-medium">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CA Sri Lanka Guidelines</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>UN Sustainable Dev Goals</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>CBSL Direction No. 05 of 2024</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center">
          <div className="relative group max-w-[260px] rounded-2xl overflow-hidden shadow-xl border border-sdb-purple/15 bg-white p-2">
            <img
              src="/src/assets/annual_report_images/highlights/page_12_screenshot.png"
              alt="SDB Integrated Annual Report 2025 Book View"
              className="w-full h-auto rounded-xl object-contain group-hover:scale-103 transition-transform duration-500"
            />
            <p className="text-[10px] font-mono text-center text-slate-500 mt-2">
              Audited 328-Page Publication
            </p>
          </div>
        </div>
      </div>

      {/* Ratios & Key Highlights Section */}
      <div id="financial-ratios-container" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Profitability Ratios Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-start space-y-4 text-left border border-sdb-purple/10">
          <div className="p-3 bg-sdb-coral/10 text-sdb-coral rounded-2xl">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-sdb-purple">Key Profitability Indices</h4>
            <p className="text-xs text-slate-500 mt-1">Upholding solid yields through prudent financial management.</p>
          </div>
          <div className="w-full space-y-3 pt-2 font-mono text-xs text-slate-600">
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Net Interest Margin</span>
              <span className="font-bold text-sdb-purple">5.37%</span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Return on Assets (ROA)</span>
              <span className="font-bold text-sdb-purple">1.11%</span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Return on Equity (ROE)</span>
              <span className="font-bold text-sdb-purple">2.76%</span>
            </div>
          </div>
        </div>

        {/* Capital Adequacy Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-start space-y-4 text-left border border-sdb-purple/10">
          <div className="p-3 bg-sdb-amber/10 text-sdb-amber rounded-2xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-sdb-purple">Capital Ratios (Basel III)</h4>
            <p className="text-xs text-slate-500 mt-1">Maintained well above regulatory minimum requirements.</p>
          </div>
          <div className="w-full space-y-3 pt-2 font-mono text-xs text-slate-600">
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Common Equity Tier 1</span>
              <span className="font-bold text-sdb-purple">14.20% <span className="text-[10px] text-emerald-600 font-sans">(Req: 7.00%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Tier 1 Capital Ratio</span>
              <span className="font-bold text-sdb-purple">14.20% <span className="text-[10px] text-emerald-600 font-sans">(Req: 8.50%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Total Capital Ratio (CAR)</span>
              <span className="font-bold text-sdb-purple">15.24% <span className="text-[10px] text-emerald-600 font-sans">(Req: 12.50%)</span></span>
            </div>
          </div>
        </div>

        {/* Liquidity & Asset Quality Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-start space-y-4 text-left border border-sdb-purple/10">
          <div className="p-3 bg-sdb-green/10 text-sdb-green rounded-2xl">
            <Percent className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-sdb-purple">Liquidity & Asset Quality</h4>
            <p className="text-xs text-slate-500 mt-1">Substantial liquidity reserves and lower impaired loans.</p>
          </div>
          <div className="w-full space-y-3 pt-2 font-mono text-xs text-slate-600">
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Liquidity Coverage Ratio</span>
              <span className="font-bold text-sdb-purple">151.86% <span className="text-[10px] text-emerald-600 font-sans">(Req: 100%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Net Stable Funding Ratio</span>
              <span className="font-bold text-sdb-purple">144.82% <span className="text-[10px] text-emerald-600 font-sans">(Req: 100%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Stage 3 Impaired Loans Ratio</span>
              <span className="font-bold text-emerald-600">5.36% <span className="text-[10px] text-slate-400 font-sans">(2024: 6.93%)</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
