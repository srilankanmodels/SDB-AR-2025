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
import { TrendingUp, Percent, Award, ShieldCheck } from "lucide-react";

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
    description: "Reversed a five-year portfolio contraction trend in 2025, reaching robust double-digit growth driven by focused credit lines to SMEs and tea smallholders.",
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
    description: "The bank expanded its asset base securely, balancing high-quality investments and collateral-backed credit offerings.",
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
    description: "Highly resilient bottom line, growing 16.94% YoY at the Profit Before Tax level, even after absorbing heavy concessions to assist troubled customers.",
    growth2025: "-1.13%"
  },
  {
    key: "impairmentCharge",
    label: "Impairment Charge",
    color: "#4F2284",
    gradientStart: "rgba(79, 34, 132, 0.15)",
    description: "Prudent risk profiling and rigorous underwriting allowed SDB to maintain robust impairment covers for high-risk exposures.",
    growth2025: "+28.67%"
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

export default function FinancialCharts() {
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>("netAdvances");

  const activeConfig = METRICS_CONFIG.find((m) => m.key === selectedMetric)!;

  // Format numbers to LKR Millions (e.g. 109,841)
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  const currentYearValue = FINANCIAL_TRENDS[FINANCIAL_TRENDS.length - 1][selectedMetric];
  const previousYearValue = FINANCIAL_TRENDS[FINANCIAL_TRENDS.length - 2][selectedMetric];
  
  // Custom Tooltip component for Recharts
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div id="chart-tooltip" className="bg-white/95 backdrop-blur-md text-[#1A1230] p-4 rounded-xl border border-sdb-purple/10 shadow-xl font-mono text-xs">
          <p className="font-bold border-b border-sdb-purple/10 pb-1.5 mb-1.5 text-sdb-amber">FY {data.year}</p>
          <p className="text-sm font-semibold">{formatNumber(payload[0].value)} LKR Mn</p>
          <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">LKR Millions</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="financial-section" className="space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
          Financial Progress
        </h2>
        <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
          Tracking SDB bank's resilient financial trajectory over a 5-year period (2021-2025), showcasing a remarkable turnaround in lending expansion and capital adequacy.
        </p>
      </div>

      {/* Selector Grid and Chart */}
      <div id="financial-highlights-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Buttons to Select Metrics */}
        <div className="lg:col-span-4 flex flex-col space-y-3">
          <h3 className="font-serif font-bold text-lg text-sdb-purple mb-2 text-left">Select Key Financial Indicator</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {METRICS_CONFIG.map((metric) => {
              const isActive = metric.key === selectedMetric;
              return (
                <button
                  key={metric.key}
                  onClick={() => setSelectedMetric(metric.key)}
                  className={`flex flex-col items-start p-3.5 rounded-xl border transition-all duration-300 text-left cursor-pointer ${
                    isActive
                      ? "bg-white border-sdb-purple/20 shadow-md"
                      : "bg-white/40 border-sdb-purple/5 hover:border-sdb-purple/20 hover:bg-white/60"
                  }`}
                >
                  <span className="font-bold text-sm text-sdb-purple tracking-tight">{metric.label}</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="font-mono text-xs font-semibold text-slate-600">
                      {formatNumber(FINANCIAL_TRENDS[FINANCIAL_TRENDS.length - 1][metric.key])} Mn
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        metric.growth2025.startsWith("+")
                          ? "bg-green-500/15 text-sdb-green border border-green-500/25"
                          : "bg-pink-500/15 text-sdb-coral border border-pink-500/25"
                      }`}
                    >
                      {metric.growth2025}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Chart and Detailed Description */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMetric}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-2xl p-6 flex flex-col space-y-6"
            >
              {/* Header metrics card */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-sdb-purple/10 pb-4 gap-4 text-left">
                <div>
                  <h4 className="font-serif font-bold text-xl text-sdb-purple">{activeConfig.label}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-0.5">LKR Millions (2021 - 2025)</p>
                </div>
                <div className="flex items-baseline space-x-3">
                  <span className="font-mono text-3xl font-bold text-sdb-purple">
                    {formatNumber(currentYearValue)}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Mn</span>
                  <span
                    className={`text-xs font-mono font-bold px-2 py-1 rounded flex items-center space-x-1 ${
                      activeConfig.growth2025.startsWith("+")
                        ? "bg-sdb-green/10 text-sdb-green"
                        : "bg-sdb-coral/10 text-sdb-coral"
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5 inline mr-0.5" />
                    <span>{activeConfig.growth2025} (YoY)</span>
                  </span>
                </div>
              </div>

              {/* Dynamic Recharts Area Chart */}
              <div className="w-full h-80 relative">
                <ResponsiveContainer width="99%" height="100%">
                  <AreaChart data={FINANCIAL_TRENDS} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id={`gradient-${selectedMetric}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={activeConfig.color} stopOpacity={0.4} />
                        <stop offset="95%" stopColor={activeConfig.color} stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(47, 27, 104, 0.08)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke="#94A3B8"
                      fontSize={11}
                      fontFamily="var(--font-mono)"
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis
                      stroke="#94A3B8"
                      fontSize={10}
                      fontFamily="var(--font-mono)"
                      tickLine={false}
                      axisLine={false}
                      dx={-10}
                      tickFormatter={(value) => `${formatNumber(value)}`}
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

              {/* Explanatory text */}
              <div className="bg-sdb-purple/5 rounded-xl p-4 text-sm text-slate-700 leading-relaxed text-left border border-sdb-purple/10 backdrop-blur-sm">
                <p>{activeConfig.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Ratios & Key Highlights Section */}
      <div id="financial-ratios-container" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Profitability Ratios Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-start space-y-4 text-left">
          <div className="p-3 bg-sdb-coral/10 text-sdb-coral rounded-full">
            <TrendingUpIcon className="w-5 h-5" />
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
        <div className="glass-card rounded-2xl p-6 flex flex-col items-start space-y-4 text-left">
          <div className="p-3 bg-sdb-amber/10 text-sdb-amber rounded-full">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-sdb-purple">Capital Ratios (2025)</h4>
            <p className="text-xs text-slate-500 mt-1">Maintained far above regulatory minimum requirements.</p>
          </div>
          <div className="w-full space-y-3 pt-2 font-mono text-xs text-slate-600">
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Common Equity Tier 1 Ratio</span>
              <span className="font-bold text-sdb-purple">14.20% <span className="text-[10px] text-sdb-green">(Req: 7.00%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Tier 1 Capital Ratio</span>
              <span className="font-bold text-sdb-purple">14.20% <span className="text-[10px] text-sdb-green">(Req: 8.50%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Total Capital Ratio</span>
              <span className="font-bold text-sdb-purple">15.24% <span className="text-[10px] text-sdb-green">(Req: 12.50%)</span></span>
            </div>
          </div>
        </div>

        {/* Liquidity Ratios Card */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-start space-y-4 text-left">
          <div className="p-3 bg-sdb-green/10 text-sdb-green rounded-full">
            <Percent className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-sdb-purple">Liquidity Indicators</h4>
            <p className="text-xs text-slate-500 mt-1">Excellent liquidity covers to withstand stress scenarios.</p>
          </div>
          <div className="w-full space-y-3 pt-2 font-mono text-xs text-slate-600">
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Liquidity Coverage Ratio</span>
              <span className="font-bold text-sdb-purple">151.86% <span className="text-[10px] text-sdb-green">(Req: 100%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Net Stable Funding Ratio</span>
              <span className="font-bold text-sdb-purple">144.82% <span className="text-[10px] text-sdb-green">(Req: 100%)</span></span>
            </div>
            <div className="flex justify-between border-b border-sdb-purple/5 pb-2">
              <span>Loans to Deposits Ratio</span>
              <span className="font-bold text-sdb-purple">114.71% <span className="text-[10px] text-slate-500">(2024: 96.45%)</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple fallback icon in case TrendingUp isn't exported directly (which it is, but to prevent compile issues)
function TrendingUpIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="22 7 13.5 16 8.5 11 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
