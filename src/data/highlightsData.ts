/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Financial Highlights & Five-Year Performance
 * Source: Official Published Annual Report 2025 (Pages 12-14)
 */

export interface HighlightMetric {
  id: string;
  category: "performance" | "position" | "investor" | "ratios" | "statutory";
  metric: string;
  value2025: number;
  value2024: number;
  unit: string;
  display2025: string;
  display2024: string;
  changePercent?: number;
  changeDirection?: "positive" | "negative" | "neutral";
  minimumRequirement?: string;
  note?: string;
  sourcePage: number;
  sourceSection: string;
}

export interface FiveYearDataPoint {
  year: string;
  netAdvances: number; // LKR Mn
  deposits: number; // LKR Mn
  totalAssets: number; // LKR Mn
  totalEquity: number; // LKR Mn
  netInterestIncome: number; // LKR Mn
  netFeeIncome: number; // LKR Mn
  impairmentCharge: number; // LKR Mn
  profitAfterTax: number; // LKR Mn
  totalComprehensiveIncome: number; // LKR Mn
  sourcePage: number;
}

// 1. Core 2025 vs 2024 Highlights (Page 12)
export const FINANCIAL_HIGHLIGHTS_DATA: HighlightMetric[] = [
  // Financial Performance
  {
    id: "gross-income",
    category: "performance",
    metric: "Gross Income",
    value2025: 18403923767,
    value2024: 21062580699,
    unit: "LKR",
    display2025: "LKR 18.404 Bn",
    display2024: "LKR 21.063 Bn",
    changePercent: -12.62,
    changeDirection: "negative",
    sourcePage: 12,
    sourceSection: "Financial Performance"
  },
  {
    id: "interest-income",
    category: "performance",
    metric: "Interest Income",
    value2025: 17098539394,
    value2024: 20005051598,
    unit: "LKR",
    display2025: "LKR 17.099 Bn",
    display2024: "LKR 20.005 Bn",
    changePercent: -14.53,
    changeDirection: "negative",
    sourcePage: 12,
    sourceSection: "Financial Performance"
  },
  {
    id: "interest-expenses",
    category: "performance",
    metric: "Interest Expenses",
    value2025: 8865857751,
    value2024: 12184587605,
    unit: "LKR",
    display2025: "LKR 8.866 Bn",
    display2024: "LKR 12.185 Bn",
    changePercent: -27.24,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Financial Performance"
  },
  {
    id: "profit-before-tax",
    category: "performance",
    metric: "Profit Before Tax",
    value2025: 800172578,
    value2024: 684262920,
    unit: "LKR",
    display2025: "LKR 800.17 Mn",
    display2024: "LKR 684.26 Mn",
    changePercent: 16.94,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Financial Performance"
  },
  {
    id: "profit-after-tax",
    category: "performance",
    metric: "Profit After Tax",
    value2025: 404918546,
    value2024: 409534246,
    unit: "LKR",
    display2025: "LKR 404.92 Mn",
    display2024: "LKR 409.53 Mn",
    changePercent: -1.13,
    changeDirection: "neutral",
    sourcePage: 12,
    sourceSection: "Financial Performance"
  },
  {
    id: "total-comprehensive-income",
    category: "performance",
    metric: "Total Comprehensive Income",
    value2025: 217906021,
    value2024: 341615936,
    unit: "LKR",
    display2025: "LKR 217.91 Mn",
    display2024: "LKR 341.62 Mn",
    changePercent: -36.21,
    changeDirection: "negative",
    sourcePage: 12,
    sourceSection: "Financial Performance"
  },

  // Financial Position at Year End
  {
    id: "net-advances",
    category: "position",
    metric: "Net Advances to Customers",
    value2025: 109840875877,
    value2024: 95137106867,
    unit: "LKR",
    display2025: "LKR 109.84 Bn",
    display2024: "LKR 95.14 Bn",
    changePercent: 15.46,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Financial Position at Year End"
  },
  {
    id: "customer-deposits",
    category: "position",
    metric: "Customer Deposits",
    value2025: 105680974038,
    value2024: 106989899941,
    unit: "LKR",
    display2025: "LKR 105.68 Bn",
    display2024: "LKR 106.99 Bn",
    changePercent: -1.22,
    changeDirection: "neutral",
    sourcePage: 12,
    sourceSection: "Financial Position at Year End"
  },
  {
    id: "total-assets",
    category: "position",
    metric: "Total Assets",
    value2025: 146958096826,
    value2024: 145155949959,
    unit: "LKR",
    display2025: "LKR 146.96 Bn",
    display2024: "LKR 145.16 Bn",
    changePercent: 1.24,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Financial Position at Year End"
  },
  {
    id: "total-equity",
    category: "position",
    metric: "Total Equity",
    value2025: 14804406386,
    value2024: 14586500364,
    unit: "LKR",
    display2025: "LKR 14.80 Bn",
    display2024: "LKR 14.59 Bn",
    changePercent: 1.49,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Financial Position at Year End"
  },

  // Investor Information
  {
    id: "eps",
    category: "investor",
    metric: "Earnings Per Share (EPS)",
    value2025: 2.47,
    value2024: 2.49,
    unit: "LKR",
    display2025: "LKR 2.47",
    display2024: "LKR 2.49",
    changePercent: -0.80,
    changeDirection: "neutral",
    sourcePage: 12,
    sourceSection: "Investor Information"
  },
  {
    id: "net-assets-per-share",
    category: "investor",
    metric: "Net Assets Per Share",
    value2025: 90.18,
    value2024: 88.85,
    unit: "LKR",
    display2025: "LKR 90.18",
    display2024: "LKR 88.85",
    changePercent: 1.50,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Investor Information"
  },
  {
    id: "market-value-per-share",
    category: "investor",
    metric: "Market Value Per Share",
    value2025: 58.10,
    value2024: 45.90,
    unit: "LKR",
    display2025: "LKR 58.10",
    display2024: "LKR 45.90",
    changePercent: 26.58,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Investor Information"
  },
  {
    id: "pe-ratio",
    category: "investor",
    metric: "Price Earning Ratio (P/E)",
    value2025: 23.56,
    value2024: 18.40,
    unit: "Times",
    display2025: "23.56x",
    display2024: "18.40x",
    changePercent: 28.04,
    changeDirection: "neutral",
    sourcePage: 12,
    sourceSection: "Investor Information"
  },

  // Ratios
  {
    id: "net-interest-margin",
    category: "ratios",
    metric: "Net Interest Margin (NIM)",
    value2025: 5.37,
    value2024: 5.18,
    unit: "%",
    display2025: "5.37%",
    display2024: "5.18%",
    changePercent: 3.67,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Ratios"
  },
  {
    id: "roa",
    category: "ratios",
    metric: "Return on Assets (Before Tax)",
    value2025: 1.11,
    value2024: 0.96,
    unit: "%",
    display2025: "1.11%",
    display2024: "0.96%",
    changePercent: 15.63,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Ratios"
  },
  {
    id: "roe",
    category: "ratios",
    metric: "Return on Equity (ROE)",
    value2025: 2.76,
    value2024: 2.84,
    unit: "%",
    display2025: "2.76%",
    display2024: "2.84%",
    changePercent: -2.82,
    changeDirection: "neutral",
    sourcePage: 12,
    sourceSection: "Ratios"
  },
  {
    id: "stage-3-loans",
    category: "ratios",
    metric: "Impaired Loans (Stage 3) Ratio",
    value2025: 5.36,
    value2024: 6.93,
    unit: "%",
    display2025: "5.36%",
    display2024: "6.93%",
    changePercent: -22.65,
    changeDirection: "positive",
    sourcePage: 12,
    sourceSection: "Ratios"
  },

  // Statutory Ratios
  {
    id: "cet1",
    category: "statutory",
    metric: "Common Equity Tier 1 (CET1) Ratio",
    value2025: 14.20,
    value2024: 15.00,
    unit: "%",
    display2025: "14.20%",
    display2024: "15.00%",
    minimumRequirement: "7.00%",
    sourcePage: 12,
    sourceSection: "Statutory Ratios"
  },
  {
    id: "tier1",
    category: "statutory",
    metric: "Tier 1 Capital Ratio",
    value2025: 14.20,
    value2024: 15.00,
    unit: "%",
    display2025: "14.20%",
    display2024: "15.00%",
    minimumRequirement: "8.50%",
    sourcePage: 12,
    sourceSection: "Statutory Ratios"
  },
  {
    id: "total-capital",
    category: "statutory",
    metric: "Total Capital Adequacy Ratio (CAR)",
    value2025: 15.24,
    value2024: 16.37,
    unit: "%",
    display2025: "15.24%",
    display2024: "16.37%",
    minimumRequirement: "12.50%",
    sourcePage: 12,
    sourceSection: "Statutory Ratios"
  },
  {
    id: "lcr",
    category: "statutory",
    metric: "Liquidity Coverage Ratio (LCR)",
    value2025: 151.86,
    value2024: 279.65,
    unit: "%",
    display2025: "151.86%",
    display2024: "279.65%",
    minimumRequirement: "100.00%",
    sourcePage: 12,
    sourceSection: "Statutory Ratios"
  },
  {
    id: "nsfr",
    category: "statutory",
    metric: "Net Stable Funding Ratio (NSFR)",
    value2025: 144.82,
    value2024: 173.02,
    unit: "%",
    display2025: "144.82%",
    display2024: "173.02%",
    minimumRequirement: "100.00%",
    sourcePage: 12,
    sourceSection: "Statutory Ratios"
  }
];

// 2. Exact Five-Year Performance Data 2021-2025 (Pages 13-14)
export const FIVE_YEAR_SERIES: FiveYearDataPoint[] = [
  {
    year: "2021",
    netAdvances: 111891,
    deposits: 93903,
    totalAssets: 147819,
    totalEquity: 14130,
    netInterestIncome: 6774,
    netFeeIncome: 390,
    impairmentCharge: 644,
    profitAfterTax: 893,
    totalComprehensiveIncome: 909,
    sourcePage: 13
  },
  {
    year: "2022",
    netAdvances: 110525,
    deposits: 107533,
    totalAssets: 159521,
    totalEquity: 13659,
    netInterestIncome: 6839,
    netFeeIncome: 478,
    impairmentCharge: 1898,
    profitAfterTax: 61,
    totalComprehensiveIncome: 292,
    sourcePage: 13
  },
  {
    year: "2023",
    netAdvances: 98869,
    deposits: 108118,
    totalAssets: 156957,
    totalEquity: 14266,
    netInterestIncome: 8502,
    netFeeIncome: 429,
    impairmentCharge: 1819,
    profitAfterTax: 466,
    totalComprehensiveIncome: 607,
    sourcePage: 13
  },
  {
    year: "2024",
    netAdvances: 95137,
    deposits: 106989,
    totalAssets: 145156,
    totalEquity: 14587,
    netInterestIncome: 7820,
    netFeeIncome: 584,
    impairmentCharge: 559,
    profitAfterTax: 410,
    totalComprehensiveIncome: 342,
    sourcePage: 13
  },
  {
    year: "2025",
    netAdvances: 109841,
    deposits: 105681,
    totalAssets: 146958,
    totalEquity: 14804,
    netInterestIncome: 8233,
    netFeeIncome: 675,
    impairmentCharge: 719,
    profitAfterTax: 405,
    totalComprehensiveIncome: 218,
    sourcePage: 13
  }
];
