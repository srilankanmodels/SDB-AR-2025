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

// 35 Structured Notes to the Financial Statements
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
    content: "The financial statements have been prepared in accordance with Sri Lanka Accounting Standards (SLFRS/LKAS) as issued by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka) and in compliance with the Banking Act No. 30 of 1988, Companies Act No. 07 of 2007, and CBSL regulations. The reporting is on a historical cost basis except for financial assets measured at fair value (FVTPL/FVOCI). The functional and presentation currency is Sri Lankan Rupees (LKR), rounded to the nearest million.",
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
    title: "Interest Income",
    summary: "Interest revenue earned from loans, advances, debt securities, and interbank placements.",
    content: "Gross Interest Income rose to LKR 19,432 Mn in 2025 (+8.85% YoY), driven by loan expansion across commercial lending, tea smallholder finance, and treasury debt holdings.",
    columns: [
      { header: "Interest Income Source (LKR Mn)", key: "source" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { source: "Loans and Advances to Customers", y2025: 14845, y2024: 13540 },
      { source: "Financial Assets at Amortized Cost (Treasury Debt)", y2025: 3950, y2024: 3820 },
      { source: "Placements with Banks & Interbank Call", y2025: 637, y2024: 492 },
      { source: "Total Interest Income", y2025: 19432, y2024: 17852 }
    ]
  },
  {
    number: "Note 4",
    title: "Interest Expense",
    summary: "Interest paid on customer deposits, institutional borrowings, and debt debentures.",
    content: "Total Interest Expense was LKR 11,199 Mn in 2025. Reduced interest rates on customer deposits stabilized the bank's cost of funds at 10.60%.",
    columns: [
      { header: "Interest Expense Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Customer Deposits (Fixed & Savings)", y2025: -9340, y2024: -8450 },
      { category: "Institutional Borrowings (ADB, FMO)", y2025: -1215, y2024: -1080 },
      { category: "Debt Securities Issued & Subordinated Debentures", y2025: -644, y2024: -502 },
      { category: "Total Interest Expense", y2025: -11199, y2024: -10032 }
    ]
  },
  {
    number: "Note 5",
    title: "Net Interest Income",
    summary: "Net interest margin performance and spread analysis.",
    content: "Net Interest Income (NII) expanded to LKR 8,233 Mn (+5.28% YoY), generating a Net Interest Margin (NIM) of 5.60% across total assets.",
    columns: [
      { header: "NII Summary (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "Total Interest Income", y2025: 19432, y2024: 17852 },
      { item: "Total Interest Expense", y2025: -11199, y2024: -10032 },
      { item: "Net Interest Income", y2025: 8233, y2024: 7820 },
      { item: "Net Interest Margin (%)", y2025: "5.60%", y2024: "5.38%" }
    ]
  },
  {
    number: "Note 6",
    title: "Net Fee and Commission Income",
    summary: "Fee-based revenues from credit processing, digital channels, and payment transfers.",
    content: "Net fee and commission income reached LKR 675 Mn (+15.58% YoY), boosted by credit processing fees on new MSME disbursements and SDB UPay app transaction volumes.",
    columns: [
      { header: "Fee Category (LKR Mn)", key: "feeType" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { feeType: "Credit Related Administration Fees", y2025: 385, y2024: 310 },
      { feeType: "Digital Transaction & Payment Fees", y2025: 184, y2024: 154 },
      { feeType: "Savings Operations & ATM Charges", y2025: 156, y2024: 142 },
      { feeType: "Remittance & Trade Commissions", y2025: 120, y2024: 119 },
      { feeType: "Total Fee Income", y2025: 845, y2024: 725 },
      { feeType: "Fee Expense (Transfer & Switch Charges)", y2025: -170, y2024: -141 },
      { feeType: "Net Fee and Commission Income", y2025: 675, y2024: 584 }
    ]
  },
  {
    number: "Note 7",
    title: "Net Gains / (Losses) from Trading & Foreign Exchange",
    summary: "Trading income from foreign exchange transactions and financial instruments.",
    content: "Net gains from foreign exchange trading recovered to LKR 125 Mn in 2025, benefiting from exchange rate stability and trade remittance handling.",
    columns: [
      { header: "Trading Line (LKR Mn)", key: "line" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { line: "Foreign Exchange Trading Gains / (Losses)", y2025: 125, y2024: -98 },
      { line: "Total Net Trading Income", y2025: 125, y2024: -98 }
    ]
  },
  {
    number: "Note 8",
    title: "Net Gains from Financial Investments",
    summary: "Realized gains on sale of debt securities and equity dividends.",
    content: "Gains from sales of Treasury bills and bonds and dividends earned on equities totaled LKR 312 Mn.",
    columns: [
      { header: "Investment Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Gains on Treasury Bond Disposals", y2025: 215, y2024: 195 },
      { category: "Dividend Income from Financial Equities", y2025: 97, y2024: 90 },
      { category: "Net Investment Gains", y2025: 312, y2024: 285 }
    ]
  },
  {
    number: "Note 9",
    title: "Other Operating Income",
    summary: "Sundry earnings, rental income, and recovery of written-off debts.",
    content: "Other operating income stood at LKR 184 Mn, including LKR 95 Mn recovered from previously written-off loans.",
    columns: [
      { header: "Operating Income Source (LKR Mn)", key: "source" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { source: "Recoveries from Written-off Assets", y2025: 95, y2024: 82 },
      { source: "Rental Income & Locker Fees", y2025: 45, y2024: 42 },
      { source: "Miscellaneous Income", y2025: 44, y2024: 38 },
      { source: "Total Other Operating Income", y2025: 184, y2024: 162 }
    ]
  },
  {
    number: "Note 10",
    title: "Impairment Charges for Loans and Other Losses",
    summary: "Expected Credit Loss (ECL) provisions across Stage 1, Stage 2, and Stage 3.",
    content: "Total impairment charge stood at LKR 719 Mn in 2025 under SLFRS 9 regulations.",
    columns: [
      { header: "Impairment Component (LKR Mn)", key: "component" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { component: "Stage 1 Impairment (12-Month ECL)", y2025: 85, y2024: -145 },
      { component: "Stage 2 Impairment (Lifetime ECL)", y2025: 154, y2024: 110 },
      { component: "Stage 3 Impairment (Credit-Impaired)", y2025: 465, y2024: 580 },
      { component: "Collective Risk Overlay", y2025: 15, y2024: 14 },
      { component: "Total Credit Impairment Charge", y2025: 719, y2024: 559 }
    ]
  },
  {
    number: "Note 11",
    title: "Personnel Expenses",
    summary: "Salaries, employee benefits, statutory EPF/ETF, and gratuity obligations.",
    content: "Personnel expenses totaled LKR 3,450 Mn for 1,263 staff across 94 branches.",
    columns: [
      { header: "Personnel Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Salaries and Allowances", y2025: 2580, y2024: 2420 },
      { category: "Employer EPF (12%) & ETF (3%)", y2025: 388, y2024: 362 },
      { category: "Gratuity & Retirement Benefits", y2025: 182, y2024: 165 },
      { category: "Staff Welfare & Medical Insurance", y2025: 300, y2024: 265 },
      { category: "Total Personnel Costs", y2025: 3450, y2024: 3212 }
    ]
  },
  {
    number: "Note 12",
    title: "Depreciation and Amortization",
    summary: "Depreciation charges on building premises, equipment, computer hardware, and software amortization.",
    content: "Depreciation on fixed assets and amortization of computer software reached LKR 385 Mn.",
    columns: [
      { header: "Asset Depreciation Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { category: "Property, Plant & Equipment Depreciation", y2025: 185, y2024: 175 },
      { category: "Right-of-Use Asset Depreciation (SLFRS 16)", y2025: 140, y2024: 135 },
      { category: "Intangible Assets Amortization", y2025: 60, y2024: 60 },
      { category: "Total Depreciation & Amortization", y2025: 385, y2024: 370 }
    ]
  },
  {
    number: "Note 13",
    title: "Other Operating Expenses",
    summary: "Overheads, branch network operations, IT licensing, deposit insurance, and audit fees.",
    content: "Other operating costs stood at LKR 3,990 Mn, covering IT modernization, security, and utility charges.",
    columns: [
      { header: "Expense Line (LKR Mn)", key: "line" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { line: "IT Software Licensing & Hardware Maintenance", y2025: 980, y2024: 850 },
      { line: "Branch Premises Utilities & Maintenance", y2025: 845, y2024: 790 },
      { line: "Deposit Insurance Premium (CBSL Scheme)", y2025: 145, y2024: 148 },
      { line: "Marketing & Community Outreach", y2025: 310, y2024: 280 },
      { line: "Audit & Professional Advisory Fees", y2025: 88, y2024: 82 },
      { line: "General Administration & Security Costs", y2025: 1622, y2024: 1610 },
      { line: "Total Other Operating Expenses", y2025: 3990, y2024: 3760 }
    ]
  },
  {
    number: "Note 14",
    title: "Taxes on Financial Services",
    summary: "Financial Services VAT, NBT, and Social Security Contribution Levy (SSCL).",
    content: "Taxes on financial services amounted to LKR 185 Mn in 2025.",
    columns: [
      { header: "Tax Line (LKR Mn)", key: "line" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { line: "Value Added Tax (VAT) on Financial Services", y2025: 150, y2024: 135 },
      { line: "Social Security Contribution Levy (SSCL)", y2025: 35, y2024: 32 },
      { line: "Total Taxes on Financial Services", y2025: 185, y2024: 167 }
    ]
  },
  {
    number: "Note 15",
    title: "Income Tax Expense",
    summary: "Corporate income tax calculation at 30% rate and deferred tax adjustments.",
    content: "Income tax charge for 2025 was LKR 395 Mn.",
    columns: [
      { header: "Tax Component (LKR Mn)", key: "component" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { component: "Current Income Tax Provision (30%)", y2025: 295, y2024: 210 },
      { component: "Deferred Tax Reversal / Adjustment", y2025: 85, y2024: 55 },
      { component: "Underprovision for Prior Years", y2025: 15, y2024: 10 },
      { component: "Total Income Tax Expense", y2025: 395, y2024: 275 }
    ]
  },
  {
    number: "Note 16",
    title: "Cash and Cash Equivalents",
    summary: "Cash in hand, foreign currencies, vault coins, and CBSL reserve accounts.",
    content: "SDB bank held LKR 2,154 Mn in cash and cash equivalents at year-end 2025.",
    columns: [
      { header: "Cash Asset Type (LKR Mn)", key: "type" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { type: "Cash in Hand & Vaults", y2025: 1450, y2024: 1210 },
      { type: "Balances with Central Bank of Sri Lanka (CBSL)", y2025: 412, y2024: 390 },
      { type: "Demand Deposits with Commercial Banks", y2025: 292, y2024: 295 },
      { type: "Total Cash & Cash Equivalents", y2025: 2154, y2024: 1895 }
    ]
  },
  {
    number: "Note 17",
    title: "Placements with Banks & Financial Institutions",
    summary: "Call deposits and short-term interbank money market placements.",
    content: "Interbank placements stood at LKR 5,410 Mn.",
    columns: [
      { header: "Placement Maturity (LKR Mn)", key: "maturity" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { maturity: "Call Placements (Under 1 Month)", y2025: 2540, y2024: 2310 },
      { maturity: "Term Placements (1 to 3 Months)", y2025: 2120, y2024: 1980 },
      { maturity: "Fixed Placements (Over 3 Months)", y2025: 750, y2024: 695 },
      { maturity: "Total Placements with Banks", y2025: 5410, y2024: 4985 }
    ]
  },
  {
    number: "Note 18",
    title: "Financial Assets at Fair Value Through Profit or Loss (FVTPL)",
    summary: "Trading Treasury Bills and short-term unit trust investments.",
    content: "FVTPL assets totaled LKR 1,120 Mn in FY 2025.",
    columns: [
      { header: "FVTPL Asset Category (LKR Mn)", key: "cat" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { cat: "Trading Treasury Bills", y2025: 850, y2024: 780 },
      { cat: "Quoted Shares & Unit Trust Funds", y2025: 270, y2024: 270 },
      { cat: "Total Financial Assets at FVTPL", y2025: 1120, y2024: 1050 }
    ]
  },
  {
    number: "Note 19",
    title: "Loans and Advances to Customers (Detail)",
    summary: "Comprehensive sectoral breakdown and Expected Credit Loss provisions.",
    content: "Net loans and advances rose to LKR 109,841 Mn (+15.46% YoY) backed by LKR 100+ Bn annual disbursements.",
    columns: [
      { header: "Sectoral Division (LKR Mn)", key: "sector" },
      { header: "Gross Loans", key: "gross" },
      { header: "Impairment Provision", key: "impair" },
      { header: "Net Carrying Value", key: "net" }
    ],
    tableData: [
      { sector: "Agriculture & Cooperative Schemes", gross: 50450, impair: -2510, net: 47940 },
      { sector: "SME & MSME Commercial Credit", gross: 31250, impair: -1840, net: 29410 },
      { sector: "Microfinance & Pawning", gross: 18950, impair: -1110, net: 17840 },
      { sector: "Retail Consumer Loans & Mortgages", gross: 12430, impair: -719, net: 11711 },
      { sector: "Total Loan Portfolio", gross: 113080, impair: -3239, net: 109841 }
    ]
  },
  {
    number: "Note 20",
    title: "Financial Assets at Amortized Cost - Debt Securities",
    summary: "Government Treasury Bonds and Bills held for liquidity buffer (SLAR).",
    content: "Treasury investments stood at LKR 21,540 Mn.",
    columns: [
      { header: "Debt Class (LKR Mn)", key: "class" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { class: "Sri Lanka Government Treasury Bonds", y2025: 15450, y2024: 24500 },
      { class: "Sri Lanka Government Treasury Bills", y2025: 5210, y2024: 9800 },
      { class: "Corporate Debentures", y2025: 880, y2024: 1120 },
      { class: "Total Debt Investments at Amortized Cost", y2025: 21540, y2024: 35420 }
    ]
  },
  {
    number: "Note 21",
    title: "Property, Plant and Equipment",
    summary: "Freehold land, head office building, office furniture, IT hardware, and motor vehicles.",
    content: "Net Property, Plant and Equipment reached LKR 970 Mn.",
    columns: [
      { header: "Asset Category (LKR Mn)", key: "cat" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { cat: "Freehold Land & Buildings", y2025: 510, y2024: 490 },
      { cat: "Computer Hardware & IT Infrastructure", y2025: 280, y2024: 250 },
      { cat: "Office Furniture & Vehicles", y2025: 180, y2024: 175 },
      { cat: "Total Net PPE", y2025: 970, y2024: 915 }
    ]
  },
  {
    number: "Note 22",
    title: "Intangible Assets",
    summary: "Core banking software, security modules, and mobile app IP.",
    content: "Intangible assets stood at LKR 254 Mn.",
    columns: [
      { header: "Software Asset (LKR Mn)", key: "asset" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { asset: "Core Banking Systems & Licenses", y2025: 194, y2024: 214 },
      { asset: "SDB UPay Mobile Platform IP", y2025: 60, y2024: 70 },
      { asset: "Total Intangible Assets", y2025: 254, y2024: 284 }
    ]
  },
  {
    number: "Note 23",
    title: "Right-of-Use Assets & Lease Liabilities",
    summary: "SLFRS 16 lease assets and lease obligations for 94 leased branch premises.",
    content: "Right-of-Use assets stood at LKR 612 Mn against lease liabilities of LKR 684 Mn.",
    columns: [
      { header: "Lease Component (LKR Mn)", key: "comp" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { comp: "Right-of-Use Assets (Branch Premises)", y2025: 612, y2024: 570 },
      { comp: "Lease Liabilities (Due within 1 year)", y2025: 145, y2024: 130 },
      { comp: "Lease Liabilities (Due over 1 year)", y2025: 539, y2024: 480 },
      { comp: "Total Lease Liabilities", y2025: 684, y2024: 610 }
    ]
  },
  {
    number: "Note 24",
    title: "Other Assets",
    summary: "Prepayments, refundable security deposits, and stationery inventory.",
    content: "Other assets totaled LKR 5,057 Mn in 2025.",
    columns: [
      { header: "Asset Item (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "Stationery, Inventory & Prepayments", y2025: 1850, y2024: 1720 },
      { item: "Refundable Premises Deposits", y2025: 412, y2024: 390 },
      { item: "Tax Receivables & Sundry Claims", y2025: 2795, y2024: 2790 },
      { item: "Total Other Assets", y2025: 5057, y2024: 4900 }
    ]
  },
  {
    number: "Note 25",
    title: "Due to Other Customers (Deposits - Detail)",
    summary: "Detailed composition of retail, institutional, and cooperative deposits.",
    content: "Customer deposits stood at LKR 105,681 Mn, forming 80% of total liabilities.",
    columns: [
      { header: "Deposit Instrument Category (LKR Mn)", key: "cat" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { cat: "Fixed Deposits (Retail & Corporate)", y2025: 80450, y2024: 83540 },
      { cat: "Savings Accounts (Individual retail)", y2025: 20120, y2024: 18420 },
      { cat: "Cooperative Society Deposits", y2025: 4112, y2024: 3950 },
      { cat: "Non-Interest Bearing Demand Accounts", y2025: 999, y2024: 1079 },
      { cat: "Total Customer Deposits", y2025: 105681, y2024: 106989 }
    ]
  },
  {
    number: "Note 26",
    title: "Due to Banks",
    summary: "Interbank borrowings and short-term credit facilities.",
    content: "Due to banks stood at LKR 13,452 Mn.",
    columns: [
      { header: "Interbank Category (LKR Mn)", key: "cat" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { cat: "CBSL Refinance Credit Lines", y2025: 8450, y2024: 7210 },
      { cat: "Commercial Bank Overdrafts & Borrowings", y2025: 5002, y2024: 4310 },
      { cat: "Total Due to Banks", y2025: 13452, y2024: 11520 }
    ]
  },
  {
    number: "Note 27",
    title: "Debt Securities Issued & Borrowed Funds",
    summary: "Term loans from international development partners (ADB, FMO) and debentures.",
    content: "Institutional borrowings and debentures reached LKR 8,410 Mn.",
    columns: [
      { header: "Funding Facility (LKR Mn)", key: "fac" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { fac: "Asian Development Bank (ADB) Credit Line", y2025: 3540, y2024: 2950 },
      { fac: "FMO (Dutch Entrepreneurial Dev Bank) Loan", y2025: 2450, y2024: 2680 },
      { fac: "Quoted Listed Corporate Debentures", y2025: 1540, y2024: 1100 },
      { fac: "Other Term Borrowings", y2025: 880, y2024: 720 },
      { fac: "Total Borrowings & Debentures", y2025: 8410, y2024: 7450 }
    ]
  },
  {
    number: "Note 28",
    title: "Other Liabilities",
    summary: "Accrued interest, supplier payables, and retirement benefit provisions.",
    content: "Other liabilities totaled LKR 3,927 Mn in 2025.",
    columns: [
      { header: "Liability Category (LKR Mn)", key: "cat" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { cat: "Accrued Interest Payable on Deposits", y2025: 1850, y2024: 1980 },
      { cat: "Trade Payables & Vendor Accruals", y2025: 1120, y2024: 1090 },
      { cat: "Retirement Benefit Obligation (Gratuity Provision)", y2025: 957, y2024: 930 },
      { cat: "Total Other Liabilities", y2025: 3927, y2024: 4000 }
    ]
  },
  {
    number: "Note 29",
    title: "Stated Capital & Share Information",
    summary: "Stated capital configuration, ordinary shares issued, and rights issues.",
    content: "Stated capital stood at LKR 9,742 Mn consisting of 160,698,832 ordinary voting shares.",
    columns: [
      { header: "Share Capital Detail", key: "detail" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { detail: "Stated Capital (LKR Mn)", y2025: "9,742", y2024: "9,742" },
      { detail: "Number of Ordinary Shares", y2025: "160,698,832", y2024: "160,698,832" },
      { detail: "Book Value per Share (LKR)", y2025: "92.12", y2024: "90.77" },
      { detail: "Closing Market Price per Share (LKR)", y2025: "34.50", y2024: "31.20" }
    ]
  },
  {
    number: "Note 30",
    title: "Reserves",
    summary: "Statutory Reserve Fund, General Reserve, and Retained Earnings.",
    content: "Total reserves rose to LKR 5,062 Mn, bringing total shareholders' equity to LKR 14,804 Mn.",
    columns: [
      { header: "Reserve Fund (LKR Mn)", key: "fund" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { fund: "Statutory Reserve Fund (CBSL Section 20)", y2025: 1150, y2024: 1105 },
      { fund: "General Reserve", y2025: 500, y2024: 500 },
      { fund: "Retained Earnings", y2025: 2605, y2024: 2304 },
      { fund: "Other Reserves (FVOCI Revaluation)", y2025: 807, y2024: 936 },
      { fund: "Total Equity Reserves", y2025: 5062, y2024: 4845 }
    ]
  },
  {
    number: "Note 31",
    title: "Commitments and Contingencies",
    summary: "Guarantees, letters of credit, forward contracts, and pending litigation.",
    content: "Off-balance sheet commitments totaled LKR 9,350 Mn in 2025.",
    columns: [
      { header: "Contingent Item (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "Financial Guarantees & Performance Bonds", y2025: 4120, y2024: 3850 },
      { item: "Letters of Credit and Trade Bills", y2025: 2450, y2024: 2150 },
      { item: "Undrawn Credit Commitments & Overdrafts", y2025: 2370, y2024: 1980 },
      { item: "Pending Tax Disputes (Contingent)", y2025: 410, y2024: 410 },
      { item: "Total Commitments & Contingencies", y2025: 9350, y2024: 8390 }
    ]
  },
  {
    number: "Note 32",
    title: "Related Party Disclosures",
    summary: "Transactions with Key Management Personnel (KMPs), SANASA Federation, and major shareholders.",
    content: "All related party transactions were executed at arm's length.",
    columns: [
      { header: "Related Entity / Category", key: "cat" },
      { header: "Balance Outstanding", key: "bal" },
      { header: "Transaction Volume (2025)", key: "vol" }
    ],
    tableData: [
      { cat: "Deposits held by SANASA Federation and societies", bal: "LKR 4,112 Mn", vol: "Net inflow LKR 162 Mn" },
      { cat: "Lending to primary cooperative societies", bal: "LKR 1,840 Mn", vol: "Interest earned LKR 195 Mn" },
      { cat: "Remuneration to Key Management Personnel (KMPs)", bal: "Nil", vol: "Total compensation LKR 245 Mn" },
      { cat: "Premises leases with Alliance Finance Co PLC", bal: "LKR 570 Mn", vol: "Rentals paid LKR 54 Mn" }
    ]
  },
  {
    number: "Note 33",
    title: "Capital Adequacy & Basel III Risk Management Disclosures",
    summary: "Capital ratios, Liquidity Coverage Ratio (LCR), and Net Stable Funding Ratio (NSFR).",
    content: "Total Capital Adequacy Ratio (CAR) stood at 15.24% against a regulatory minimum of 12.50%.",
    columns: [
      { header: "Basel III Ratio", key: "ratio" },
      { header: "SDB Value (2025)", key: "val" },
      { header: "CBSL Regulatory Minimum", key: "req" }
    ],
    tableData: [
      { ratio: "Common Equity Tier 1 (CET1) Ratio", val: "14.20%", req: "7.00%" },
      { ratio: "Tier 1 Capital Adequacy Ratio", val: "14.20%", req: "8.50%" },
      { ratio: "Total Capital Adequacy Ratio (CAR)", val: "15.24%", req: "12.50%" },
      { ratio: "Leverage Ratio", val: "8.14%", req: "5.00%" },
      { ratio: "Liquidity Coverage Ratio (LCR) - LKR", val: "151.86%", req: "100.00%" },
      { ratio: "Net Stable Funding Ratio (NSFR)", val: "144.82%", req: "100.00%" }
    ]
  },
  {
    number: "Note 34",
    title: "Segment Reporting",
    summary: "Performance split by Retail Banking, SME Lending, Cooperative Banking, and Treasury Operations.",
    content: "Reported across four strategic business units.",
    columns: [
      { header: "Business Segment (LKR Mn)", key: "seg" },
      { header: "Operating Income", key: "inc" },
      { header: "Segment Assets", key: "ass" },
      { header: "Profit After Tax", key: "pat" }
    ],
    tableData: [
      { seg: "SME & Commercial Loans", inc: 4210, ass: 54920, pat: 185 },
      { seg: "Retail, Micro & Leasing", inc: 3220, ass: 42801, pat: 142 },
      { seg: "Cooperative Banking Solutions", inc: 1450, ass: 22157, pat: 68 },
      { seg: "Treasury and FX Operations", inc: 649, ass: 27080, pat: 10 },
      { seg: "Total Bank Operations", inc: 9529, ass: 146958, pat: 405 }
    ]
  },
  {
    number: "Note 35",
    title: "Events After the Reporting Period",
    summary: "Subsequent events between balance sheet date and authorization.",
    content: "No circumstances have arisen since the reporting date which require adjustments to or disclosures in the financial statements.",
    columns: [
      { header: "Event Description", key: "desc" },
      { header: "Financial Impact", key: "impact" }
    ],
    tableData: [
      { desc: "Final Dividend Declaration", impact: "No final dividend declared for FY 2025" },
      { desc: "Post Balance Sheet Date Credit Events", impact: "No material adjusting credit defaults" }
    ]
  }
];

// Supplementary Information Schedules & Schedules for Annexure
export const SUPPLEMENTARY_INFO = {
  tenYearSummary: [
    { year: "2025", grossIncome: 20586, nii: 8233, pbt: 800, pat: 405, totalAssets: 146958, customerDeposits: 105681, grossLoans: 113080, equity: 14804, car: "15.24%", nplRatio: "8.42%" },
    { year: "2024", grossIncome: 18739, nii: 7820, pbt: 685, pat: 410, totalAssets: 145156, customerDeposits: 106989, grossLoans: 99730, equity: 14587, car: "14.90%", nplRatio: "9.85%" },
    { year: "2023", grossIncome: 22504, nii: 8502, pbt: 764, pat: 466, totalAssets: 156957, customerDeposits: 108118, grossLoans: 102450, equity: 14266, car: "13.80%", nplRatio: "12.10%" },
    { year: "2022", grossIncome: 16868, nii: 6839, pbt: 148, pat: 61, totalAssets: 159521, customerDeposits: 107533, grossLoans: 114200, equity: 13659, car: "12.95%", nplRatio: "14.20%" },
    { year: "2021", grossIncome: 13220, nii: 6774, pbt: 1214, pat: 893, totalAssets: 147819, customerDeposits: 93903, grossLoans: 115400, equity: 14130, car: "14.25%", nplRatio: "10.15%" },
    { year: "2020", grossIncome: 12150, nii: 5940, pbt: 1110, pat: 835, totalAssets: 128400, customerDeposits: 84200, grossLoans: 101200, equity: 11200, car: "13.60%", nplRatio: "9.10%" },
    { year: "2019", grossIncome: 11840, nii: 5210, pbt: 620, pat: 490, totalAssets: 107800, customerDeposits: 72100, grossLoans: 86400, equity: 8900, car: "12.80%", nplRatio: "8.50%" },
    { year: "2018", grossIncome: 10920, nii: 4850, pbt: 510, pat: 380, totalAssets: 96500, customerDeposits: 64200, grossLoans: 76100, equity: 7800, car: "12.10%", nplRatio: "7.90%" },
    { year: "2017", grossIncome: 9450, nii: 4120, pbt: 780, pat: 540, totalAssets: 82100, customerDeposits: 55400, grossLoans: 65200, equity: 7100, car: "13.10%", nplRatio: "6.20%" },
    { year: "2016", grossIncome: 7820, nii: 3450, pbt: 620, pat: 430, totalAssets: 65400, customerDeposits: 44200, grossLoans: 52100, equity: 5400, car: "12.50%", nplRatio: "5.40%" }
  ],
  topShareholders: [
    { rank: 1, name: "LOLC Investment Holdings One (Pvt) Ltd", shares: 24104823, percentage: "15.00%" },
    { rank: 2, name: "Alliance Finance Company PLC", shares: 14462894, percentage: "9.00%" },
    { rank: 3, name: "SANASA Federation Ltd", shares: 12855906, percentage: "8.00%" },
    { rank: 4, name: "Kegalle District SANASA Union Ltd", shares: 8034941, percentage: "5.00%" },
    { rank: 5, name: "Gampaha District SANASA Union Ltd", shares: 6427953, percentage: "4.00%" },
    { rank: 6, name: "Colombo District SANASA Union Ltd", shares: 4820965, percentage: "3.00%" },
    { rank: 7, name: "Kalutara District SANASA Union Ltd", shares: 3213976, percentage: "2.00%" },
    { rank: 8, name: "Kurunegala District SANASA Union Ltd", shares: 3213976, percentage: "2.00%" },
    { rank: 9, name: "Individual Local Public Investors", shares: 48209652, percentage: "30.00%" },
    { rank: 10, name: "Other Primary Cooperative Societies", shares: 35352846, percentage: "22.00%" }
  ],
  valueAddedStatement: [
    { category: "Value Generated", amount: 20586, percentage: "100.0%" },
    { category: "Operating Expenses & Cost of Services", amount: 11199, percentage: "54.4%" },
    { category: "Value Added by Bank Operations", amount: 9387, percentage: "45.6%" },
    { category: "Distributed to Employees (Salaries & Welfare)", amount: 3450, percentage: "16.8%" },
    { category: "Distributed to Government (Direct & Indirect Taxes)", amount: 580, percentage: "2.8%" },
    { category: "Retained for Business Expansion & Reserves", amount: 5357, percentage: "26.0%" }
  ]
};
