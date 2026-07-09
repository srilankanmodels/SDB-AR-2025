/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FinancialRow {
  item: string;
  "2025": number;
  "2024": number;
  "2023": number;
  "2022": number;
  "2021": number;
  isHeader?: boolean;
  isTotal?: boolean;
  indent?: boolean;
}

export interface StatementGroup {
  title: string;
  description: string;
  rows: FinancialRow[];
}

export interface NoteTableColumn {
  header: string;
  align?: "left" | "right";
  key: string;
}

export interface NoteTableRow {
  [key: string]: string | number;
}

export interface NoteDetail {
  number: string;
  title: string;
  summary: string;
  content: string;
  columns?: NoteTableColumn[];
  tableData?: NoteTableRow[];
}

// Full Income Statement (Statement of Profit or Loss)
export const INCOME_STATEMENT_ROWS: FinancialRow[] = [
  { item: "Interest Income", "2025": 19432, "2024": 17852, "2023": 21541, "2022": 15894, "2021": 12450, isHeader: false },
  { item: "Interest Expense", "2025": -11199, "2024": -10032, "2023": -13039, "2022": -9055, "2021": -5676, isHeader: false },
  { item: "Net Interest Income", "2025": 8233, "2024": 7820, "2023": 8502, "2022": 6839, "2021": 6774, isTotal: true },
  
  { item: "Fee and Commission Income", "2025": 845, "2024": 725, "2023": 595, "2022": 612, "2021": 498, indent: true },
  { item: "Fee and Commission Expense", "2025": -170, "2024": -141, "2023": -166, "2022": -134, "2021": -108, indent: true },
  { item: "Net Fee and Commission Income", "2025": 675, "2024": 584, "2023": 429, "2022": 478, "2021": 390, isTotal: true },
  
  { item: "Net Gains / (Losses) from Trading", "2025": 125, "2024": -98, "2023": 240, "2022": 115, "2021": 84, indent: true },
  { item: "Net Gains from Financial Investments", "2025": 312, "2024": 285, "2023": 195, "2022": 152, "2021": 110, indent: true },
  { item: "Other Operating Income", "2025": 184, "2024": 162, "2023": 128, "2022": 242, "2021": 138, indent: true },
  { item: "Total Operating Income", "2025": 9529, "2024": 8753, "2023": 9494, "2022": 7826, "2021": 7496, isHeader: true },
  
  { item: "Impairment Charges for Loans and Other Losses", "2025": -719, "2024": -559, "2023": -1819, "2022": -1898, "2021": -644 },
  { item: "Net Operating Income", "2025": 8810, "2024": 8194, "2023": 7675, "2022": 5928, "2021": 6852, isTotal: true },
  
  { item: "Personnel Expenses", "2025": -3450, "2024": -3212, "2023": -2915, "2022": -2450, "2021": -2210, indent: true },
  { item: "Depreciation and Amortization", "2025": -385, "2024": -370, "2023": -348, "2022": -322, "2021": -315, indent: true },
  { item: "Other Operating Expenses", "2025": -3990, "2024": -3760, "2023": -3450, "2022": -2890, "2021": -2745, indent: true },
  { item: "Operating Profit before Taxes on Financial Services", "2025": 985, "2024": 852, "2023": 962, "2022": 266, "2021": 1582, isHeader: true },
  
  { item: "Taxes on Financial Services", "2025": -185, "2024": -167, "2023": -198, "2022": -118, "2021": -368, indent: true },
  { item: "Profit before Income Tax", "2025": 800, "2024": 685, "2023": 764, "2022": 148, "2021": 1214, isTotal: true },
  
  { item: "Income Tax Expense", "2025": -395, "2024": -275, "2023": -298, "2022": -87, "2021": -321, indent: true },
  { item: "Profit for the Year", "2025": 405, "2024": 410, "2023": 466, "2022": 61, "2021": 893, isTotal: true }
];

// Full Balance Sheet (Statement of Financial Position)
export const BALANCE_SHEET_ROWS: FinancialRow[] = [
  { item: "Assets", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Cash and Cash Equivalents", "2025": 2154, "2024": 1895, "2023": 2541, "2022": 3122, "2021": 2845, indent: true },
  { item: "Placements with Banks", "2025": 5410, "2024": 4985, "2023": 3850, "2022": 2940, "2021": 3150, indent: true },
  { item: "Financial Assets at FVTPL", "2025": 1120, "2024": 1050, "2023": 845, "2022": 720, "2021": 650, indent: true },
  { item: "Loans & Advances to Customers (Net)", "2025": 109841, "2024": 95137, "2023": 98869, "2022": 110525, "2021": 111891, indent: true },
  { item: "Financial Assets at Amortized Cost - Debt", "2025": 21540, "2024": 35420, "2023": 44102, "2022": 35140, "2021": 22430, indent: true },
  { item: "Property, Plant and Equipment", "2025": 970, "2024": 915, "2023": 890, "2022": 854, "2021": 812, indent: true },
  { item: "Intangible Assets", "2025": 254, "2024": 284, "2023": 310, "2022": 298, "2021": 215, indent: true },
  { item: "Right-of-use Assets", "2025": 612, "2024": 570, "2023": 625, "2022": 680, "2021": 714, indent: true },
  { item: "Other Assets", "2025": 5057, "2024": 4900, "2023": 4925, "2022": 5242, "2021": 5112, indent: true },
  { item: "Total Assets", "2025": 146958, "2024": 145156, "2023": 156957, "2022": 159521, "2021": 147819, isTotal: true },
  
  { item: "Liabilities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Due to Other Customers (Deposits)", "2025": 105681, "2024": 106989, "2023": 108118, "2022": 107533, "2021": 93903, indent: true },
  { item: "Due to Banks", "2025": 13452, "2024": 11520, "2023": 21450, "2022": 24510, "2021": 25420, indent: true },
  { item: "Debt Securities Issued & Borrowings", "2025": 8410, "2024": 7450, "2023": 8940, "2022": 9540, "2021": 10120, indent: true },
  { item: "Lease Liabilities", "2025": 684, "2024": 610, "2023": 665, "2022": 718, "2021": 750, indent: true },
  { item: "Other Liabilities", "2025": 3927, "2024": 4000, "2023": 3518, "2022": 3561, "2021": 3496, indent: true },
  { item: "Total Liabilities", "2025": 132154, "2024": 130569, "2023": 142691, "2022": 145862, "2021": 133689, isTotal: true },
  
  { item: "Equity", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Stated Capital", "2025": 9742, "2024": 9742, "2023": 9742, "2022": 9742, "2021": 9742, indent: true },
  { item: "Statutory Reserve Fund", "2025": 1150, "2024": 1105, "2023": 1085, "2022": 1030, "2021": 1005, indent: true },
  { item: "Retained Earnings", "2025": 2605, "2024": 2304, "2023": 2115, "2022": 1820, "2021": 2150, indent: true },
  { item: "Other Reserves", "2025": 1307, "2024": 1436, "2023": 1324, "2022": 1067, "2021": 1233, indent: true },
  { item: "Total Equity", "2025": 14804, "2024": 14587, "2023": 14266, "2022": 13659, "2021": 14130, isTotal: true },
  { item: "Total Liabilities and Equity", "2025": 146958, "2024": 145156, "2023": 156957, "2022": 159521, "2021": 147819, isTotal: true }
];

// Statement of Cash Flows
export const CASH_FLOW_ROWS: FinancialRow[] = [
  { item: "Cash Flows from Operating Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Profit Before Income Tax", "2025": 800, "2024": 685, "2023": 764, "2022": 148, "2021": 1214, indent: true },
  { item: "Adjustments for Non-Cash Items (Depreciation, etc.)", "2025": 1104, "2024": 928, "2023": 2167, "2022": 2220, "2021": 959, indent: true },
  { item: "Changes in Operating Assets & Liabilities", "2025": -14510, "2024": 3540, "2023": 12450, "2022": -11890, "2021": -15620, indent: true },
  { item: "Taxes Paid", "2025": -420, "2024": -310, "2023": -345, "2022": -180, "2021": -412, indent: true },
  { item: "Net Cash generated from Operating Activities", "2025": -13026, "2024": 4843, "2023": 15036, "2022": -9702, "2021": -13859, isTotal: true },
  
  { item: "Cash Flows from Investing Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Purchase of Property, Plant & Equipment", "2025": -120, "2024": -110, "2023": -95, "2022": -105, "2021": -98, indent: true },
  { item: "Net Sale / (Purchase) of Government Securities", "2025": 13880, "2024": -8682, "2023": -8962, "2022": -12710, "2021": 14210, indent: true },
  { item: "Net Cash (used in) / from Investing Activities", "2025": 13760, "2024": -8792, "2023": -9057, "2022": -12815, "2021": 14112, isTotal: true },
  
  { item: "Cash Flows from Financing Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Net Proceeds from Debt Securities / Borrowings", "2025": -380, "2024": 3425, "2023": -6450, "2022": 22520, "2021": 2154, indent: true },
  { item: "Payment of Lease Liabilities / Dividends", "2025": -95, "2024": -1122, "2023": -115, "2022": -125, "2021": -132, indent: true },
  { item: "Net Cash (used in) / from Financing Activities", "2025": -475, "2024": 2303, "2023": -6565, "2022": 22395, "2021": 2022, isTotal: true },
  
  { item: "Net Increase / (Decrease) in Cash & Cash Equivalents", "2025": 259, "2024": -1646, "2023": -586, "2022": -122, "2021": 2275, isTotal: true },
  { item: "Cash and Cash Equivalents at beginning of Year", "2025": 1895, "2024": 3541, "2023": 4127, "2022": 4249, "2021": 1974, indent: true },
  { item: "Cash and Cash Equivalents at end of Year", "2025": 2154, "2024": 1895, "2023": 3541, "2022": 4127, "2021": 4249, isTotal: true }
];

// Statement of Changes in Equity
export const CHANGES_IN_EQUITY_ROWS: FinancialRow[] = [
  { item: "Balance as at 1st January 2024", "2025": 14266, "2024": 14266, "2023": 13659, "2022": 14130, "2021": 13125 },
  { item: "Profit for the Year", "2025": 405, "2024": 410, "2023": 466, "2022": 61, "2021": 893, indent: true },
  { item: "Other Comprehensive Income (Net of Tax)", "2025": -187, "2024": -68, "2023": 141, "2022": 231, "2021": 16, indent: true },
  { item: "Dividends Paid / Transfers to Reserves", "2025": 320, "2024": -21, "2023": 0, "2022": -763, "2021": 96, indent: true },
  { item: "Balance as at 31st December", "2025": 14804, "2024": 14587, "2023": 14266, "2022": 13659, "2021": 14130, isTotal: true }
];

// 20 Structured Notes to the Financial Statements
export const NOTES_TO_FINANCIALS: NoteDetail[] = [
  {
    number: "Note 1",
    title: "Corporate Information & Reporting Entity",
    summary: "General corporate information about SANASA Development Bank PLC (SDB bank), legal status, listing, and nature of operations.",
    content: "SANASA Development Bank PLC is a licensed specialized bank incorporated in Sri Lanka on 17th February 1997 under the Companies Act No. 17 of 1982 and re-registered under Companies Act No. 07 of 2007. It is listed on the Main Board of the Colombo Stock Exchange (CSE) since 31st May 2012. The registered office of the Bank is located at No. 12, Edmonton Road, Kirulapone, Colombo 06. The Bank provides comprehensive retail, cooperative, micro, and SME financial services across Sri Lanka through its network of 94 physical branches.",
    columns: [
      { header: "Corporate Detail", key: "detail" },
      { header: "Description / Values", key: "value" }
    ],
    tableData: [
      { detail: "Incorporation Date", value: "17th February 1997" },
      { detail: "Legal Form", value: "Public Quoted Licensed Specialized Bank" },
      { detail: "CSE Ticker Symbol", value: "SDB.N0000" },
      { detail: "Taxpayer Identification No. (TIN)", value: "105400192" },
      { detail: "Supervisory Authority", value: "Central Bank of Sri Lanka (CBSL)" },
      { detail: "Physical Outlets", value: "94 Branches across all 25 districts" }
    ]
  },
  {
    number: "Note 2",
    title: "Basis of Preparation & Significant Accounting Policies",
    summary: "Framework, accounting guidelines (SLFRS/LKAS) followed, functional currency, and key estimates.",
    content: "The financial statements have been prepared in accordance with Sri Lanka Accounting Standards (SLFRS/LKAS) as issued by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka) and in compliance with the Banking Act No. 30 of 1988, Companies Act No. 07 of 2007, and CBSL regulations. The reporting is on a historical cost basis except for financial assets measured at fair value (FVTPL/FVOCI). The functional and presentation currency is Sri Lankan Rupees (LKR), rounded to the nearest million. Key estimates involve calculating Expected Credit Losses (ECL) on loans and evaluating the fair value of unquoted financial instruments.",
    columns: [
      { header: "Accounting Aspect", key: "aspect" },
      { header: "Adopted Policy / Basis", key: "policy" }
    ],
    tableData: [
      { aspect: "Accounting Framework", policy: "SLFRS / LKAS (Compliant with IFRS)" },
      { aspect: "Reporting Currency", policy: "Sri Lankan Rupee (LKR)" },
      { aspect: "Rounding Off Level", policy: "LKR Millions (Mn)" },
      { aspect: "ECL Model", policy: "Three-Stage Impairment Model (SLFRS 9)" },
      { aspect: "Going Concern Assessment", policy: "Assessed as robust with no substantial liquidity doubt" }
    ]
  },
  {
    number: "Note 3",
    title: "Net Interest Income",
    summary: "Detailed breakdown of interest income and interest expenses earned across asset classes.",
    content: "Net Interest Income (NII) remains the primary revenue driver for SDB bank, accounting for over 85% of total operating income. In 2025, NII reached LKR 8,233 Mn (+5.28% YoY), supported by expanding lending yields and reduced funding costs as market interest rates stabilized. Interest income from loans and advances reached LKR 14,845 Mn, while treasury investment income stood at LKR 4,587 Mn.",
    columns: [
      { header: "Interest Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Interest Income from Loans & Advances", y2025: 14845, y2024: 13540 },
      { category: "Interest Income from Government Debt Securities", y2025: 3950, y2024: 3820 },
      { category: "Interest Income from Placements/Other Assets", y2025: 637, y2024: 492 },
      { category: "Total Interest Income", y2025: 19432, y2024: 17852 },
      { category: "Interest Expense on Deposits from Customers", y2025: -9340, y2024: -8450 },
      { category: "Interest Expense on Borrowings / Debt Securities", y2025: -1859, y2024: -1582 },
      { category: "Total Interest Expense", y2025: -11199, y2024: -10032 },
      { category: "Net Interest Income", y2025: 8233, y2024: 7820 }
    ]
  },
  {
    number: "Note 4",
    title: "Net Fee and Commission Income",
    summary: "Analysis of fee-based revenues including credit cards, savings, digital channels, and insurance.",
    content: "The bank focuses on diversifying its revenue streams through non-interest income. SDB bank grew its net fee and commission income to LKR 675 Mn in 2025, up from LKR 584 Mn in 2024. Main drivers include credit administration fees from the newly expanded MSME and micro portfolios, together with remittance commissions and mobile digital transaction charges from the SDB UPay platform.",
    columns: [
      { header: "Fee Type (LKR Mn)", key: "feeType" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { feeType: "Credit Related Fees and Commissions", y2025: 385, y2024: 310 },
      { feeType: "Digital Transaction & App Commission", y2025: 184, y2024: 154 },
      { feeType: "Savings Operations & ATM Charges", y2025: 156, y2024: 142 },
      { feeType: "Remittances & Trade Services", y2025: 120, y2024: 119 },
      { feeType: "Total Fee Income", y2025: 845, y2024: 725 },
      { feeType: "Commission & Transfer Fee Expense", y2025: -170, y2024: -141 },
      { feeType: "Net Fee and Commission Income", y2025: 675, y2024: 584 }
    ]
  },
  {
    number: "Note 5",
    title: "Net Gains / Losses from Financial Instruments",
    summary: "Income derived from trading foreign currencies, derivatives, and selling investment securities.",
    content: "SDB bank handles treasury operations covering trading in domestic money markets and foreign currencies. In 2025, net gains from foreign exchange trading recovered to LKR 125 Mn, compared to a net loss of LKR 98 Mn in 2024, caused by extreme exchange rate volatility in the prior year. Investment gains from capital gains on Treasury bonds stood at LKR 312 Mn.",
    columns: [
      { header: "Financial Instrument (LKR Mn)", key: "instrument" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { instrument: "Foreign Exchange Trading Gains", y2025: 125, y2024: -98 },
      { instrument: "Gains on Government Debt Securities (FVTPL)", y2025: 215, y2024: 195 },
      { instrument: "Dividends from Equity Investments", y2025: 97, y2024: 90 },
      { instrument: "Total Gains from Financial Instruments", y2025: 437, y2024: 187 }
    ]
  },
  {
    number: "Note 6",
    title: "Impairment Charges for Loans and Other Losses",
    summary: "Provisions made for expected credit losses under SLFRS 9, divided into stages.",
    content: "SDB bank maintains a rigorous, SLFRS 9-compliant Expected Credit Loss (ECL) calculation framework. In 2025, total impairment charges stood at LKR 719 Mn, a slight increase from LKR 559 Mn in 2024. The bank continues to hold adequate risk overlays to absorb eventual defaults within the Micro and SME segments as macroeconomic stabilization progresses slowly.",
    columns: [
      { header: "Impairment Component (LKR Mn)", key: "component" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { component: "Stage 1 Impairment (12-Month ECL)", y2025: 85, y2024: -145 },
      { component: "Stage 2 Impairment (Lifetime ECL - non-impaired)", y2025: 154, y2024: 110 },
      { component: "Stage 3 Impairment (Lifetime ECL - credit-impaired)", y2025: 465, y2024: 580 },
      { component: "Collective Overlay adjustments", y2025: 15, y2024: 14 },
      { component: "Total Credit Impairment Charge", y2025: 719, y2024: 559 }
    ]
  },
  {
    number: "Note 7",
    title: "Personnel Expenses",
    summary: "Employee costs including salaries, EPF/ETF, medical welfare, and retirement benefits.",
    content: "SDB bank employs 1,263 professionals across its head office and 94 branches. Total personnel expenses in 2025 were LKR 3,450 Mn (+7.41% YoY), reflecting salary increments adjusted for local inflation, higher medical insurance provisions, and investments in employee training programs.",
    columns: [
      { header: "Expense Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Salaries and Allowances", y2025: 2580, y2024: 2420 },
      { category: "Employer's EPF Contribution (12%)", y2025: 310, y2024: 290 },
      { category: "Employer's ETF Contribution (3%)", y2025: 78, y2024: 72 },
      { category: "Retirement Benefit Obligations (Gratuity)", y2025: 182, y2024: 165 },
      { category: "Employee Welfare & Medical Insurance", y2025: 245, y2024: 215 },
      { category: "Training & Skills Development", y2025: 55, y2024: 50 },
      { category: "Total Personnel Expenses", y2025: 3450, y2024: 3212 }
    ]
  },
  {
    number: "Note 8",
    title: "Other Operating Expenses",
    summary: "Breakdown of non-personnel overheads, marketing, IT infrastructure, and branch maintenance costs.",
    content: "Other operating expenses were LKR 3,990 Mn, driven by increased IT licenses, communication networks for the 94 branches, energy and fuel costs, deposit insurance premiums, and marketing campaigns to support regional microfinance products.",
    columns: [
      { header: "Operating Expense Item (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "IT, Hardware & Software Licensing", y2025: 980, y2024: 850 },
      { item: "Premises, Energy & Utility Overheads", y2025: 845, y2024: 790 },
      { item: "Marketing, Advertising & PR", y2025: 310, y2024: 280 },
      { item: "Deposit Insurance Premium (Sri Lanka)", y2025: 145, y2024: 148 },
      { item: "Auditor's Fees & Professional Expenses", y2025: 88, y2024: 82 },
      { item: "General Overhead Admin Costs", y2025: 1622, y2024: 1610 },
      { item: "Total Other Operating Expenses", y2025: 3990, y2024: 3760 }
    ]
  },
  {
    number: "Note 9",
    title: "Income Tax Expense",
    summary: "Tax calculations showing deferred taxes, tax rates, and reconciliations.",
    content: "The corporate tax rate applicable to licensed specialized banks in Sri Lanka was 30% in 2025. Total tax charges reached LKR 395 Mn in 2025, resulting from a rise in taxable business profit and adjustments on deferred tax assets.",
    columns: [
      { header: "Tax Component (LKR Mn)", key: "component" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { component: "Current Income Tax Charge", y2025: 295, y2024: 210 },
      { component: "Deferred Tax Asset adjustment (Reversal)", y2025: 85, y2024: 55 },
      { component: "Under / (Over) provision for prior years", y2025: 15, y2024: 10 },
      { component: "Total Income Tax Expense", y2025: 395, y2024: 275 }
    ]
  },
  {
    number: "Note 10",
    title: "Cash and Cash Equivalents",
    summary: "Breakdown of cash holdings, treasury coins, and demand deposits with other banks.",
    content: "Cash and cash equivalents represent liquid resources held by SDB bank for day-to-day branch withdrawals, ATMs, and clearing operations. This is maintained in compliance with CBSL reserve requirements. SDB bank held LKR 2,154 Mn at year-end 2025.",
    columns: [
      { header: "Cash Asset Type (LKR Mn)", key: "assetType" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { assetType: "Cash in Hand (LKR and Currencies)", y2025: 1450, y2024: 1210 },
      { assetType: "Balances with Central Bank of Sri Lanka (CBSL)", y2025: 412, y2024: 390 },
      { assetType: "Demand Deposits with Local Commercial Banks", y2025: 292, y2024: 295 },
      { assetType: "Total Cash & Cash Equivalents", y2025: 2154, y2024: 1895 }
    ]
  },
  {
    number: "Note 11",
    title: "Placements with Banks",
    summary: "Analysis of short-term placements, call accounts, and money market instruments.",
    content: "SDB bank places excess cash in short-term interest-bearing accounts with creditworthy financial institutions to optimize treasury yields. These placements usually mature within 3 months.",
    columns: [
      { header: "Placements by Maturity (LKR Mn)", key: "placement" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { placement: "Under 1 Month call accounts", y2025: 2540, y2024: 2310 },
      { placement: "1 to 3 Months term placements", y2025: 2120, y2024: 1980 },
      { placement: "Over 3 Months deposits", y2025: 750, y2024: 695 },
      { placement: "Total Placements with Banks", y2025: 5410, y2024: 4985 }
    ]
  },
  {
    number: "Note 12",
    title: "Loans and Advances to Customers (Detail)",
    summary: "Comprehensive sectoral breakdown of the lending portfolio and expected credit loss stages.",
    content: "The loan portfolio is the primary asset class, representing 74.7% of total assets. Loans and advances rose to LKR 109,841 Mn in 2025 (+15.46% YoY), reversing a multi-year loan portfolio contraction. Sectoral focus remains heavily oriented towards agricultural leasing and MSME growth.",
    columns: [
      { header: "Lending Category / Sector (LKR Mn)", key: "sector" },
      { header: "Gross Value", key: "gross" },
      { header: "Impairment Provision", key: "impair" },
      { header: "Net Carrying Value (2025)", key: "net" }
    ],
    tableData: [
      { sector: "Agriculture, Forestry & Fishing", gross: 50450, impair: -2510, net: 47940 },
      { sector: "SME & MSME Trade Finance", gross: 31250, impair: -1840, net: 29410 },
      { sector: "Microfinance Cooperative Schemes", gross: 18950, impair: -1110, net: 17840 },
      { sector: "Retail Consumer & Mortgages", gross: 12430, impair: -719, net: 11711 },
      { sector: "Total Lending Portfolio", gross: 113080, impair: -3239, net: 109841 }
    ]
  },
  {
    number: "Note 13",
    title: "Financial Assets at Amortized Cost - Debt",
    summary: "Holdings of Sri Lankan Government Treasury Bonds and Bills, and Corporate Debentures.",
    content: "SDB bank invests in risk-free government securities to fulfill its Statutory Liquid Assets Ratio (SLAR) requirement of 20%. Treasury investments dropped from LKR 35,420 Mn in 2024 to LKR 21,540 Mn in 2025, as treasury capital was re-channelled into customer loan disbursement.",
    columns: [
      { header: "Debt Instrument Class (LKR Mn)", key: "instrument" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { instrument: "Sri Lanka Government Treasury Bonds", y2025: 15450, y2024: 24500 },
      { instrument: "Sri Lanka Government Treasury Bills", y2025: 5210, y2024: 9800 },
      { instrument: "Quoted Public Corporate Debentures", y2025: 880, y2024: 1120 },
      { instrument: "Total Investment in Debt Securities", y2025: 21540, y2024: 35420 }
    ]
  },
  {
    number: "Note 14",
    title: "Due to Other Customers (Deposits - Detail)",
    summary: "Detailed composition of customer savings accounts, fixed deposits, and cooperative funds.",
    content: "Deposits from other customers represent 80.0% of SDB bank's funding base. Fixed deposits declined slightly in 2025 to LKR 105,681 Mn, whereas highly liquid retail and cooperative savings accounts expanded by 19% following targeted rural campaigns.",
    columns: [
      { header: "Deposit Instrument Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Fixed Deposits (Individual & Corporate)", y2025: 80450, y2024: 83540 },
      { category: "Savings Accounts (Individual retail)", y2025: 20120, y2024: 18420 },
      { category: "Cooperative Society Deposits", y2025: 4112, y2024: 3950 },
      { category: "Non-Interest Bearing Demand Accounts", y2025: 999, y2024: 1079 },
      { category: "Total Customer Deposits", y2025: 105681, y2024: 106989 }
    ]
  },
  {
    number: "Note 15",
    title: "Debt Securities Issued & Other Borrowed Funds",
    summary: "Breakdown of term loans, institutional credits (FMO, ADB), and corporate debentures.",
    content: "To support strategic microfinance credit lines, SDB bank borrows from international development partners and issues corporate debentures. Total borrowings rose to LKR 8,410 Mn in 2025, backed by newly accessed ADB development fund tranches.",
    columns: [
      { header: "Funding Origin (LKR Mn)", key: "origin" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { origin: "Asian Development Bank (ADB) Credit Line", y2025: 3540, y2024: 2950 },
      { origin: "FMO (Dutch Entrepreneurial Dev Bank) Loan", y2025: 2450, y2024: 2680 },
      { origin: "Listed Quoted Corporate Debentures", y2025: 1540, y2024: 1100 },
      { origin: "Local Bank Term Borrowings", y2025: 880, y2024: 720 },
      { origin: "Total Borrowed Funds & Debentures", y2025: 8410, y2024: 7450 }
    ]
  },
  {
    number: "Note 16",
    title: "Share Capital & Reserves",
    summary: "Stated capital configuration, share count, and statutory reserve additions.",
    content: "Stated capital remained stable at LKR 9,742 Mn. The statutory reserve fund was increased to LKR 1,150 Mn, complying with the Banking Act which mandates a transfer of 5% of the annual profit.",
    columns: [
      { header: "Capital component (LKR Mn)", key: "component" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { component: "Stated Capital (Ordinary Share Count: 160.7M)", y2025: 9742, y2024: 9742 },
      { component: "Statutory Reserve Fund (5% allocation)", y2025: 1150, y2024: 1105 },
      { component: "General Reserve", y2025: 500, y2024: 500 },
      { component: "Retained Earnings", y2025: 2605, y2024: 2304 },
      { component: "Other reserves (revaluation, FVOCI)", y2025: 807, y2024: 936 },
      { component: "Total Shareholders Equity", y2025: 14804, y2024: 14587 }
    ]
  },
  {
    number: "Note 17",
    title: "Capital Adequacy & Basel III Risk Management",
    summary: "Capital ratios calculated in compliance with CBSL Pillar III disclosures.",
    content: "SDB bank maintains capital well above the regulatory guidelines of Basel III. At year-end 2025, SDB achieved a Common Equity Tier 1 (CET1) and Tier 1 capital ratio of 14.20% (against a CBSL requirement of 7.0% and 8.5% respectively) and a Total Capital Ratio of 15.24% (against a requirement of 12.5%).",
    columns: [
      { header: "Capital Ratio Metrics", key: "metric" },
      { header: "SDB Ratio (2025)", key: "sdbRatio" },
      { header: "CBSL Minimum", key: "cbslReq" }
    ],
    tableData: [
      { metric: "Common Equity Tier 1 (CET1) Capital Ratio", sdbRatio: "14.20%", cbslReq: "7.00%" },
      { metric: "Tier 1 Capital Adequacy Ratio", sdbRatio: "14.20%", cbslReq: "8.50%" },
      { metric: "Total Capital Adequacy Ratio (CAR)", sdbRatio: "15.24%", cbslReq: "12.50%" },
      { metric: "Leverage Ratio (Basel III)", sdbRatio: "8.14%", cbslReq: "5.00%" },
      { metric: "Liquidity Coverage Ratio (LCR)", sdbRatio: "151.86%", cbslReq: "100.00%" },
      { metric: "Net Stable Funding Ratio (NSFR)", sdbRatio: "144.82%", cbslReq: "100.00%" }
    ]
  },
  {
    number: "Note 18",
    title: "Segment Reporting",
    summary: "Performance split by Retail Banking, SME Lending, Cooperative Banking, and Treasury Operations.",
    content: "SDB bank's activities are managed and reported through four main segments: Retail Banking (micro leasing and gold loans), SME Lending (trade and agricultural credit), Cooperative Banking (direct funding to primary cooperative societies), and Treasury (money market placements and fx operations).",
    columns: [
      { header: "Operating Segment (LKR Mn)", key: "segment" },
      { header: "Operating Income", key: "income" },
      { header: "Segment Assets", key: "assets" },
      { header: "Profit After Tax", key: "pat" }
    ],
    tableData: [
      { segment: "SME & Commercial Loans", income: 4210, assets: 54920, pat: 185 },
      { segment: "Retail, Micro & Leasing", income: 3220, assets: 42801, pat: 142 },
      { segment: "Cooperative Banking Solutions", income: 1450, assets: 22157, pat: 68 },
      { segment: "Treasury and FX Trading", income: 649, assets: 27080, pat: 10 },
      { segment: "Total SDB segments", income: 9529, assets: 146958, pat: 405 }
    ]
  },
  {
    number: "Note 19",
    title: "Commitments and Contingencies",
    summary: "Guarantees, letters of credit, and unresolved tax disputes or litigation cases.",
    content: "In the normal course of business, the bank enters into financial transactions with off-balance sheet risk, consisting of financial guarantees, documentary credits, and bills for collection. In 2025, total contingencies stood at LKR 8,940 Mn. No material litigation liabilities are expected.",
    columns: [
      { header: "Contingent Asset/Liability (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "Financial Guarantees & Bonds issued", y2025: 4120, y2024: 3850 },
      { item: "Letters of Credit and Trade Commitments", y2025: 2450, y2024: 2150 },
      { item: "Unutilized Credit Limits & Card Overdrafts", y2025: 2370, y2024: 1980 },
      { item: "Pending Tax disputes with IRD (Contingent)", y2025: 410, y2024: 410 },
      { item: "Total Commitments & Contingencies", y2025: 9350, y2024: 8390 }
    ]
  },
  {
    number: "Note 20",
    title: "Related Party Disclosures",
    summary: "Transactions with Key Management Personnel (KMPs), SANASA Federation, and major institutional shareholders.",
    content: "Related parties include directors, executive managers (KMPs), the SANASA Federation, primary cooperative societies, and major equity holders (LOLC, Alliance Finance, and FMO up to divestment). All transactions are conducted at arm's length under normal commercial banking tariffs.",
    columns: [
      { header: "Related Party Transaction Category", key: "category" },
      { header: "Outstanding Balance", key: "balance" },
      { header: "Transaction Value (2025)", key: "transValue" }
    ],
    tableData: [
      { category: "Deposits held by SANASA Federation and societies", balance: "LKR 4,112 Mn", transValue: "Net inflow LKR 162 Mn" },
      { category: "Lending to primary cooperative societies", balance: "LKR 1,840 Mn", transValue: "Interest earned LKR 195 Mn" },
      { category: "Remuneration paid to Key Management Personnel (KMPs)", balance: "Nil", transValue: "Total compensation LKR 245 Mn" },
      { category: "Lease facilities with Alliance Finance Co PLC", balance: "LKR 570 Mn", transValue: "Rentals paid LKR 54 Mn" }
    ]
  }
];
