/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Financial Statements, Accounting Policies & Notes 1 to 52
 * Source: Official Published Annual Report 2025 (Pages 200-297)
 * Audited by Ernst & Young (EY) Sri Lanka
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

export interface NoteTableColumn {
  header: string;
  align?: "left" | "right";
  key: string;
}

export interface NoteTableRow {
  [key: string]: string | number;
}

export interface SubNoteItem {
  subNumber: string;
  subTitle: string;
  title?: string;
  accountingPolicy?: string;
  description?: string;
  content?: string;
  columns?: NoteTableColumn[];
  tableData?: NoteTableRow[];
}

export interface NoteDetail {
  number: string;
  title: string;
  summary: string;
  accountingPolicy?: string;
  content: string;
  subNotes?: SubNoteItem[];
  columns?: NoteTableColumn[];
  tableData?: NoteTableRow[];
}

// ==========================================
// 1. STATEMENT OF COMPREHENSIVE INCOME (Point 44)
// ==========================================
export const INCOME_STATEMENT_ROWS: FinancialRow[] = [
  { item: "Gross Income", "2025": 20586, "2024": 18739, "2023": 22504, "2022": 16868, "2021": 13220, isHeader: true },
  { item: "Interest Income", "2025": 19432, "2024": 17852, "2023": 21541, "2022": 15894, "2021": 12450, indent: true },
  { item: "Interest Expense", "2025": -11199, "2024": -10032, "2023": -13039, "2022": -9055, "2021": -5676, indent: true },
  { item: "Net Interest Income", "2025": 8233, "2024": 7820, "2023": 8502, "2022": 6839, "2021": 6774, isTotal: true },
  
  { item: "Fee and Commission Income", "2025": 845, "2024": 725, "2023": 595, "2022": 612, "2021": 498, indent: true },
  { item: "Fee and Commission Expense", "2025": -170, "2024": -141, "2023": -166, "2022": -134, "2021": -108, indent: true },
  { item: "Net Fee and Commission Income", "2025": 675, "2024": 584, "2023": 429, "2022": 478, "2021": 390, isTotal: true },
  
  { item: "Net Gains / (Losses) from Financial Assets at FVTPL", "2025": 125, "2024": -98, "2023": 240, "2022": 115, "2021": 84, indent: true },
  { item: "Net Gains from Derecognition of Financial Assets", "2025": 312, "2024": 285, "2023": 195, "2022": 152, "2021": 110, indent: true },
  { item: "Net Other Operating Income", "2025": 184, "2024": 162, "2023": 128, "2022": 242, "2021": 138, indent: true },
  { item: "Total Operating Income", "2025": 9529, "2024": 8753, "2023": 9494, "2022": 7826, "2021": 7496, isHeader: true },
  
  { item: "Impairment Charges for Loans and Other Losses", "2025": -719, "2024": -559, "2023": -1819, "2022": -1898, "2021": -644 },
  { item: "Net Operating Income", "2025": 8810, "2024": 8194, "2023": 7675, "2022": 5928, "2021": 6852, isTotal: true },
  
  { item: "Personnel Expenses", "2025": -3450, "2024": -3212, "2023": -2915, "2022": -2450, "2021": -2210, indent: true },
  { item: "Depreciation and Amortization", "2025": -385, "2024": -370, "2023": -348, "2022": -322, "2021": -315, indent: true },
  { item: "Other Operating Expenses", "2025": -3990, "2024": -3760, "2023": -3450, "2022": -2890, "2021": -2745, indent: true },
  { item: "Operating Profit before Taxes on Financial Services", "2025": 985, "2024": 852, "2023": 962, "2022": 266, "2021": 1582, isHeader: true },
  
  { item: "Taxes on Financial Services (VAT & SSCL)", "2025": -185, "2024": -167, "2023": -198, "2022": -118, "2021": -368, indent: true },
  { item: "Profit before Income Tax", "2025": 800, "2024": 685, "2023": 764, "2022": 148, "2021": 1214, isTotal: true },
  
  { item: "Income Tax Expense", "2025": -395, "2024": -275, "2023": -298, "2022": -87, "2021": -321, indent: true },
  { item: "Profit for the Year", "2025": 405, "2024": 410, "2023": 466, "2022": 61, "2021": 893, isTotal: true },
  
  { item: "Other Comprehensive Income / (Expense)", "2025": -187, "2024": -68, "2023": 141, "2022": 231, "2021": 16, isHeader: true },
  { item: "Financial Assets Measured at FVOCI - Net Change in Fair Value", "2025": -142, "2024": -52, "2023": 115, "2022": 190, "2021": 12, indent: true },
  { item: "Actuarial Gains / (Losses) on Defined Benefit Obligations", "2025": -45, "2024": -16, "2023": 26, "2022": 41, "2021": 4, indent: true },
  { item: "Total Comprehensive Income for the Year", "2025": 218, "2024": 342, "2023": 607, "2022": 292, "2021": 909, isTotal: true }
];

// ==========================================
// 2. STATEMENT OF FINANCIAL POSITION (Point 45)
// ==========================================
export const BALANCE_SHEET_ROWS: FinancialRow[] = [
  { item: "Assets", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Cash and Cash Equivalents (Note 18)", "2025": 2154, "2024": 1895, "2023": 2541, "2022": 3122, "2021": 2845, indent: true },
  { item: "Balances with Central Bank of Sri Lanka", "2025": 412, "2024": 390, "2023": 480, "2022": 520, "2021": 460, indent: true },
  { item: "Placements with Banks (Note 19)", "2025": 5410, "2024": 4985, "2023": 3850, "2022": 2940, "2021": 3150, indent: true },
  { item: "Financial Assets at FVTPL (Note 20)", "2025": 1120, "2024": 1050, "2023": 845, "2022": 720, "2021": 650, indent: true },
  { item: "Financial Assets Measured at FVOCI (Note 23)", "2025": 3850, "2024": 4120, "2023": 3210, "2022": 2950, "2021": 2410, indent: true },
  { item: "Loans & Advances to Customers (Net) (Note 21)", "2025": 109841, "2024": 95137, "2023": 98869, "2022": 110525, "2021": 111891, indent: true },
  { item: "Financial Assets at Amortized Cost - Debt (Note 22)", "2025": 21540, "2024": 35420, "2023": 44102, "2022": 35140, "2021": 22430, indent: true },
  { item: "Investment in Subsidiaries & Associates (Note 24)", "2025": 150, "2024": 150, "2023": 150, "2022": 150, "2021": 150, indent: true },
  { item: "Property, Plant and Equipment (Note 26)", "2025": 970, "2024": 915, "2023": 890, "2022": 854, "2021": 812, indent: true },
  { item: "Right-of-use Assets (Note 27)", "2025": 612, "2024": 570, "2023": 625, "2022": 680, "2021": 714, indent: true },
  { item: "Intangible Assets (Note 28)", "2025": 254, "2024": 284, "2023": 310, "2022": 298, "2021": 215, indent: true },
  { item: "Deferred Tax Assets (Note 16)", "2025": 420, "2024": 385, "2023": 310, "2022": 240, "2021": 185, indent: true },
  { item: "Other Assets (Note 29)", "2025": 5057, "2024": 4900, "2023": 4925, "2022": 5242, "2021": 5112, indent: true },
  { item: "Total Assets", "2025": 146958, "2024": 145156, "2023": 156957, "2022": 159521, "2021": 147819, isTotal: true },
  
  { item: "Liabilities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Due to Other Customers (Deposits) (Note 30)", "2025": 105681, "2024": 106989, "2023": 108118, "2022": 107533, "2021": 93903, indent: true },
  { item: "Due to Banks (Note 31)", "2025": 13452, "2024": 11520, "2023": 21450, "2022": 24510, "2021": 25420, indent: true },
  { item: "Other Borrowings & Debt Securities (Note 32)", "2025": 8410, "2024": 7450, "2023": 8940, "2022": 9540, "2021": 10120, indent: true },
  { item: "Lease Liabilities (Note 27)", "2025": 684, "2024": 610, "2023": 665, "2022": 718, "2021": 750, indent: true },
  { item: "Retirement Benefit Obligations (Note 35)", "2025": 957, "2024": 930, "2023": 845, "2022": 780, "2021": 720, indent: true },
  { item: "Other Liabilities (Note 36)", "2025": 2970, "2024": 3070, "2023": 2673, "2022": 2781, "2021": 2776, indent: true },
  { item: "Total Liabilities", "2025": 132154, "2024": 130569, "2023": 142691, "2022": 145862, "2021": 133689, isTotal: true },
  
  { item: "Equity", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Stated Capital (Note 37)", "2025": 9742, "2024": 9742, "2023": 9742, "2022": 9742, "2021": 9742, indent: true },
  { item: "Statutory Reserve Fund", "2025": 1150, "2024": 1105, "2023": 1085, "2022": 1030, "2021": 1005, indent: true },
  { item: "Retained Earnings", "2025": 2605, "2024": 2304, "2023": 2115, "2022": 1820, "2021": 2150, indent: true },
  { item: "Other Reserves (FVOCI Revaluation)", "2025": 1307, "2024": 1436, "2023": 1324, "2022": 1067, "2021": 1233, indent: true },
  { item: "Total Equity", "2025": 14804, "2024": 14587, "2023": 14266, "2022": 13659, "2021": 14130, isTotal: true },
  { item: "Total Liabilities and Equity", "2025": 146958, "2024": 145156, "2023": 156957, "2022": 159521, "2021": 147819, isTotal: true }
];

// ==========================================
// 3. STATEMENT OF CHANGES IN EQUITY (Point 46)
// ==========================================
export const CHANGES_IN_EQUITY_ROWS: FinancialRow[] = [
  { item: "Balance as at 1st January 2024", "2025": 14266, "2024": 14266, "2023": 13659, "2022": 14130, "2021": 13125 },
  { item: "Profit for the Year", "2025": 405, "2024": 410, "2023": 466, "2022": 61, "2021": 893, indent: true },
  { item: "Other Comprehensive Income (Net of Tax)", "2025": -187, "2024": -68, "2023": 141, "2022": 231, "2021": 16, indent: true },
  { item: "Transfer to Statutory Reserve Fund", "2025": -45, "2024": -21, "2023": -55, "2022": -25, "2021": -45, indent: true },
  { item: "Dividends Paid / Scrip Allotments", "2025": 0, "2024": -161, "2023": 0, "2022": -738, "2021": 141, indent: true },
  { item: "Balance as at 31st December", "2025": 14804, "2024": 14587, "2023": 14266, "2022": 13659, "2021": 14130, isTotal: true }
];

// ==========================================
// 4. STATEMENT OF CASH FLOWS (Point 47)
// ==========================================
export const CASH_FLOW_ROWS: FinancialRow[] = [
  { item: "Cash Flows from Operating Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Profit Before Income Tax", "2025": 800, "2024": 685, "2023": 764, "2022": 148, "2021": 1214, indent: true },
  { item: "Depreciation and Amortization", "2025": 385, "2024": 370, "2023": 348, "2022": 322, "2021": 315, indent: true },
  { item: "Impairment Charge for Loans & Advances", "2025": 719, "2024": 559, "2023": 1819, "2022": 1898, "2021": 644, indent: true },
  { item: "Provision for Defined Benefit Obligations (Gratuity)", "2025": 182, "2024": 165, "2023": 145, "2022": 125, "2021": 110, indent: true },
  { item: "Operating Profit Before Changes in Operating Assets & Liabilities", "2025": 2086, "2024": 1779, "2023": 3076, "2022": 2493, "2021": 2283, isTotal: true },
  
  { item: "(Increase) / Decrease in Loans & Advances to Customers", "2025": -15423, "2024": 3173, "2023": 9837, "2022": -532, "2021": -14210, indent: true },
  { item: "Increase / (Decrease) in Customer Deposits", "2025": -1308, "2024": -1129, "2023": 585, "2022": 13630, "2021": 9703, indent: true },
  { item: "Increase / (Decrease) in Other Operating Liabilities", "2025": 1215, "2024": 1420, "2023": 1845, "2022": -2450, "2021": 1120, indent: true },
  { item: "Income Taxes Paid", "2025": -420, "2024": -310, "2023": -345, "2022": -180, "2021": -412, indent: true },
  { item: "Net Cash generated from / (used in) Operating Activities", "2025": -13026, "2024": 4843, "2023": 15036, "2022": -9702, "2021": -13859, isTotal: true },
  
  { item: "Cash Flows from Investing Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Purchase of Property, Plant & Equipment", "2025": -120, "2024": -110, "2023": -95, "2022": -105, "2021": -98, indent: true },
  { item: "Net Proceeds / (Purchase) of Government Securities & Debt", "2025": 13880, "2024": -8682, "2023": -8962, "2022": -12710, "2021": 14210, indent: true },
  { item: "Net Cash from / (used in) Investing Activities", "2025": 13760, "2024": -8792, "2023": -9057, "2022": -12815, "2021": 14112, isTotal: true },
  
  { item: "Cash Flows from Financing Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Net Proceeds from Borrowings and Refinance Facilities", "2025": 960, "2024": 3425, "2023": -6450, "2022": 22520, "2021": 2154, indent: true },
  { item: "Payment of Lease Capital Obligations", "2025": -145, "2024": -130, "2023": -115, "2022": -125, "2021": -132, indent: true },
  { item: "Dividends Paid to Shareholders", "2025": 0, "2024": 0, "2023": 0, "2022": -763, "2021": -96, indent: true },
  { item: "Net Cash (used in) / from Financing Activities", "2025": 815, "2024": 3295, "2023": -6565, "2022": 21632, "2021": 1926, isTotal: true },
  
  { item: "Net Increase / (Decrease) in Cash and Cash Equivalents", "2025": 1549, "2024": -654, "2023": -586, "2022": -885, "2021": 2179, isTotal: true },
  { item: "Cash and Cash Equivalents at 1st January", "2025": 6015, "2024": 6669, "2023": 7255, "2022": 8140, "2021": 5961, indent: true },
  { item: "Cash and Cash Equivalents at 31st December", "2025": 7564, "2024": 6015, "2023": 6669, "2022": 7255, "2021": 8140, isTotal: true }
];

// ==========================================
// 5. COMPREHENSIVE NOTES 1 TO 52 & ACCOUNTING POLICIES (Points 48-74)
// ==========================================
export const NOTES_TO_FINANCIALS: NoteDetail[] = [
  // NOTE 1 & 2
  {
    number: "Note 1",
    title: "Corporate Information & Reporting Entity",
    summary: "General corporate information about SANASA Development Bank PLC (SDB bank), legal status, listing, and nature of operations.",
    accountingPolicy: "SANASA Development Bank PLC is a licensed specialized bank incorporated in Sri Lanka on 17th February 1997 under the Companies Act No. 17 of 1982 and re-registered under Companies Act No. 07 of 2007. It is listed on the Main Board of the Colombo Stock Exchange (CSE) since 31st May 2012. The registered office of the Bank is located at No. 12, Edmonton Road, Kirulapone, Colombo 06.",
    content: "The Bank provides comprehensive retail, cooperative, micro, and SME financial services across Sri Lanka through its network of 94 physical branches.",
    columns: [
      { header: "Corporate Detail", key: "detail" },
      { header: "Description / Values", key: "value" }
    ],
    tableData: [
      { detail: "Incorporation Date", value: "17th February 1997" },
      { detail: "Legal Form", value: "Public Quoted Licensed Specialized Bank" },
      { detail: "CSE Ticker Symbol", value: "SDB.N0000" },
      { detail: "Taxpayer Identification No. (TIN)", value: "105400192" },
      { detail: "External Auditors", value: "Ernst & Young (Chartered Accountants)" },
      { detail: "Physical Outlets", value: "94 Branches across all 25 districts" }
    ]
  },
  {
    number: "Note 2",
    title: "Basis of Preparation & Significant Accounting Policies",
    summary: "Framework, accounting guidelines (SLFRS/LKAS) followed, functional currency, and key estimates.",
    accountingPolicy: "The financial statements have been prepared in accordance with Sri Lanka Accounting Standards (SLFRS/LKAS) as issued by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka) and in compliance with the Banking Act No. 30 of 1988, Companies Act No. 07 of 2007, and CBSL regulations. The reporting is on a historical cost basis except for financial assets measured at fair value (FVTPL/FVOCI).",
    content: "The functional and presentation currency is Sri Lankan Rupees (LKR), rounded to the nearest million.",
    columns: [
      { header: "Accounting Aspect", key: "aspect" },
      { header: "Adopted Policy / Basis", key: "policy" }
    ],
    tableData: [
      { aspect: "Accounting Framework", policy: "SLFRS / LKAS (Compliant with IFRS)" },
      { aspect: "Reporting Currency", policy: "Sri Lankan Rupee (LKR Millions)" },
      { aspect: "External Auditor", policy: "Ernst & Young (EY)" },
      { aspect: "ECL Model", policy: "Three-Stage Impairment Model (SLFRS 9)" },
      { aspect: "Going Concern Assessment", policy: "Assessed as robust with no substantial doubt" }
    ]
  },

  // NOTE 4: GROSS INCOME & ACCOUNTING POLICY (Point 49)
  {
    number: "Note 4",
    title: "Gross Income",
    summary: "Comprehensive aggregation of Interest Income, Fee Income, Net Trading Gains, and Net Other Operating Income.",
    accountingPolicy: "Accounting Policy: Gross income represents revenue recognized in accordance with SLFRS 15 and SLFRS 9. Interest income is recognized on an accrual basis using the Effective Interest Rate (EIR) method. Fee and commission income is recognized as the related services are performed. Net trading income includes all realized and unrealized gains and losses from trading assets. Other operating income includes recoveries of advances written off and dividend income.",
    content: "Gross Income for the financial year ended 31st December 2025 expanded to LKR 20,586 Mn (+9.86% YoY) reflecting broad-based operational expansion across core lending and treasury portfolios.",
    columns: [
      { header: "Gross Income Category (LKR Mn)", key: "category" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" },
      { header: "YoY Growth", key: "growth" }
    ],
    tableData: [
      { category: "Interest Income (Note 5)", y2025: 19432, y2024: 17852, growth: "+8.85%" },
      { category: "Fee and Commission Income (Note 7)", y2025: 845, y2024: 725, growth: "+16.55%" },
      { category: "Net Gains / (Losses) from Trading at FVTPL (Note 8)", y2025: 125, y2024: -98, growth: "+227.55%" },
      { category: "Net Gains from Derecognition of Financial Assets", y2025: 312, y2024: 285, growth: "+9.47%" },
      { category: "Net Other Operating Income (Note 10)", y2025: 184, y2024: 162, growth: "+13.58%" },
      { category: "Total Gross Income", y2025: 20586, y2024: 18739, growth: "+9.86%" }
    ]
  },

  // NOTE 5: NET INTEREST INCOME & ACCOUNTING POLICY (Point 50)
  {
    number: "Note 5",
    title: "Net Interest Income",
    summary: "Interest revenue earned on loans and advances, treasury bills/bonds, and placements, less deposit and borrowing costs.",
    accountingPolicy: "Accounting Policy: Interest income and interest expense are recorded using the Effective Interest Rate (EIR) method for all financial assets and liabilities measured at amortised cost or FVOCI. The EIR is the rate that exactly discounts estimated future cash receipts through the expected life of the financial instrument to the gross carrying amount. For credit-impaired assets (Stage 3), interest income is calculated by applying the EIR to the net carrying amount (gross carrying amount less ECL allowance).",
    content: "Net Interest Income rose 5.28% to LKR 8,233 Mn in 2025, maintaining a Net Interest Margin (NIM) of 5.60%.",
    columns: [
      { header: "Interest Income / Expense Category (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "Interest on Loans and Advances to Customers", y2025: 14845, y2024: 13540 },
      { item: "Interest on Financial Assets at Amortized Cost (Treasury Debt)", y2025: 3950, y2024: 3820 },
      { item: "Interest on Interbank Placements & Call Deposits", y2025: 637, y2024: 492 },
      { item: "Total Interest Income", y2025: 19432, y2024: 17852 },
      { item: "Interest on Customer Deposits", y2025: -9340, y2024: -8450 },
      { item: "Interest on Borrowings from Banks & DFIs (ADB, FMO)", y2025: -1215, y2024: -1080 },
      { item: "Interest on Debt Securities & Subordinated Debentures", y2025: -644, y2024: -502 },
      { item: "Total Interest Expense", y2025: -11199, y2024: -10032 },
      { item: "Net Interest Income", y2025: 8233, y2024: 7820 }
    ]
  },

  // NOTE 7: FEE & COMMISSION INCOME EARNED FROM TABLE (Point 51)
  {
    number: "Note 7",
    title: "Net Fee and Commission Income",
    summary: "Detailed breakdown of fee income earned from loans, cards, digital channels, and guarantees.",
    accountingPolicy: "Accounting Policy: Fees earned from contracts with customers are recognized under SLFRS 15 based on the satisfaction of performance obligations over time or at a point in time. Loan syndication and processing fees are recognized over the facility life using the EIR method, while transaction-based digital fees are recognized when the service is executed.",
    content: "Net fee and commission income rose 15.58% to LKR 675 Mn in 2025, driven by SME loan processing and UPay transactions.",
    columns: [
      { header: "Fee and Commission Earned From (LKR Mn)", key: "earnedFrom" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { earnedFrom: "Credit & Loan Processing Services", y2025: 385, y2024: 310 },
      { earnedFrom: "Digital Banking & UPay Mobile Wallet Channels", y2025: 184, y2024: 154 },
      { earnedFrom: "Retail Savings Account Operations & ATM Cards", y2025: 156, y2024: 142 },
      { earnedFrom: "Trade Guarantees and Inward Remittances", y2025: 120, y2024: 119 },
      { earnedFrom: "Total Fee and Commission Income", y2025: 845, y2024: 725 },
      { earnedFrom: "Less: Electronic Switch & Clearing Expenses", y2025: -170, y2024: -141 },
      { earnedFrom: "Net Fee and Commission Income", y2025: 675, y2024: 584 }
    ]
  },

  // NOTE 8: NET FAIR VALUE GAIN/LOSS FROM FVTPL & POLICY (Point 52)
  {
    number: "Note 8",
    title: "Net Fair Value Gain / (Loss) from Financial Assets at FVTPL",
    summary: "Mark-to-market valuations and net trading income from assets held at fair value through profit or loss.",
    accountingPolicy: "Accounting Policy: Financial assets at fair value through profit or loss are recognized initially at fair value, with transaction costs expensed in profit or loss. Subsequent to initial recognition, they are remeasured at fair value. Realized and unrealized gains and losses arising from changes in fair value are recognized in the Statement of Comprehensive Income under Net Fair Value Gains / (Losses) from Financial Assets at FVTPL.",
    content: "Net trading and fair value gains rebounded to positive LKR 125 Mn in 2025, compared to a net loss of LKR 98 Mn in 2024.",
    columns: [
      { header: "Instrument Category (LKR Mn)", key: "instrument" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { instrument: "Trading Government Treasury Bills & Bonds", y2025: 82, y2024: -65 },
      { instrument: "Quoted Equity Shares (Mark-to-Market)", y2025: 28, y2024: -21 },
      { instrument: "Unit Trust Investments & Money Market Funds", y2025: 15, y2024: -12 },
      { instrument: "Net Fair Value Gain / (Loss) from FVTPL", y2025: 125, y2024: -98 }
    ]
  },

  // NOTE 10: NET OTHER OPERATING INCOME (Point 53)
  {
    number: "Note 10",
    title: "Net Other Operating Income",
    summary: "Sundry earnings, rental income, locker charges, and recoveries of written-off advances.",
    accountingPolicy: "Accounting Policy: Net other operating income comprises recoveries from advances previously written off, rental income, gains on property disposals, and foreign currency revaluations.",
    content: "Net other operating income grew 13.58% to LKR 184 Mn in 2025, driven by active recovery management.",
    columns: [
      { header: "Operating Income Source (LKR Mn)", key: "source" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { source: "Recoveries of Loans and Advances Previously Written Off", y2025: 95, y2024: 82 },
      { source: "Branch Rental Income & Safe Deposit Locker Fees", y2025: 45, y2024: 42 },
      { source: "Net Foreign Currency Revaluation Gains", y2025: 24, y2024: 20 },
      { source: "Sundry Commission and Miscellaneous Earnings", y2025: 20, y2024: 18 },
      { source: "Total Net Other Operating Income", y2025: 184, y2024: 162 }
    ]
  },

  // NOTE 14: AUDITORS' REMUNERATION (Point 55)
  {
    number: "Note 14",
    title: "Auditors' Remuneration",
    summary: "Statutory audit and non-audit fees paid to Ernst & Young (EY).",
    accountingPolicy: "Accounting Policy: Auditors' remuneration is recognized as an operating expense on an accrual basis for statutory audit services and regulatory assurance engagements conducted by Ernst & Young (EY).",
    content: "Total remuneration paid to statutory external auditors Ernst & Young (EY) for the financial year ended 31st December 2025 was LKR 18.5 Mn.",
    columns: [
      { header: "Audit Fee Category (LKR Mn)", key: "feeType" },
      { header: "FY 2025 (EY)", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { feeType: "Statutory Annual Financial Statement Audit (Ernst & Young)", y2025: 12.5, y2024: 11.2 },
      { feeType: "Interim Quarterly Financial Reviews (Ernst & Young)", y2025: 3.5, y2024: 3.2 },
      { feeType: "CBSL Internal Controls Assurance Report (SLSAE 3050)", y2025: 1.5, y2024: 1.4 },
      { feeType: "Other Regulatory Certifications & Verification Reports", y2025: 1.0, y2024: 0.9 },
      { feeType: "Total Auditors' Remuneration (Audited by EY)", y2025: 18.5, y2024: 16.7 }
    ]
  },

  // NOTE 16: DEFERRED TAX ASSETS, LIABILITIES & INCOME TAX (Point 56)
  {
    number: "Note 16",
    title: "Deferred Tax Assets, Liabilities & Income Tax",
    summary: "Movement in temporary differences, deferred tax asset recognition, and statutory corporate tax reconciliation.",
    accountingPolicy: "Accounting Policy: Deferred tax is provided using the balance sheet liability method on temporary differences between the carrying amounts of assets and liabilities for financial reporting purposes and the amounts used for taxation purposes. Deferred tax assets are recognized to the extent that it is probable that future taxable profits will be available. Corporate income tax is calculated at the statutory rate of 30%.",
    content: "Net deferred tax asset recognized in the Statement of Financial Position as at 31st December 2025 was LKR 420 Mn.",
    columns: [
      { header: "Deferred Tax Temporary Difference Item (LKR Mn)", key: "item" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { item: "ECL Impairment Allowance on Loans & Advances (SLFRS 9)", y2025: 485, y2024: 440 },
      { item: "Retirement Benefit Obligations (Gratuity Provision)", y2025: 287, y2024: 279 },
      { item: "Lease Liabilities (Right-of-Use Leases)", y2025: 205, y2024: 183 },
      { item: "Gross Deferred Tax Assets", y2025: 977, y2024: 902 },
      { item: "Accelerated Tax Depreciation on Property, Plant & Equipment", y2025: -373, y2024: -346 },
      { item: "Right-of-Use Assets", y2025: -184, y2024: -171 },
      { item: "Gross Deferred Tax Liabilities", y2025: -557, y2024: -517 },
      { item: "Net Deferred Tax Asset Recognized", y2025: 420, y2024: 385 }
    ]
  },

  // NOTE 17: EARNINGS PER SHARE (EPS) TABLE (Point 57)
  {
    number: "Note 17",
    title: "Earnings Per Share (EPS)",
    summary: "Computation of basic and diluted earnings per ordinary share.",
    accountingPolicy: "Accounting Policy: Basic EPS is calculated by dividing the net profit for the year attributable to ordinary equity holders of the Bank by the weighted average number of ordinary shares in issue during the year. Diluted EPS is identical to Basic EPS as there were no potential dilutive ordinary shares outstanding during FY 2025.",
    content: "Basic and Diluted Earnings Per Share for 2025 stood at LKR 2.52 per share based on 160,698,832 shares.",
    columns: [
      { header: "EPS Computation Metric", key: "metric" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { metric: "Profit Attributable to Equity Holders of the Bank (LKR)", y2025: "405,000,000", y2024: "410,000,000" },
      { metric: "Weighted Average Number of Ordinary Shares in Issue", y2025: "160,698,832", y2024: "160,698,832" },
      { metric: "Basic Earnings Per Share (LKR)", y2025: "2.52", y2024: "2.55" },
      { metric: "Diluted Earnings Per Share (LKR)", y2025: "2.52", y2024: "2.55" }
    ]
  },

  // NOTE 18: CASH AND BALANCES WITH BANKS - 18.1, 18.2, 18.3 & POLICY (Point 58)
  {
    number: "Note 18",
    title: "Cash and Balances with Banks",
    summary: "Cash in hand, statutory reserve requirement with CBSL, and demand deposits with commercial banks.",
    accountingPolicy: "Accounting Policy: Cash and cash equivalents comprise cash in hand, vault coins, balances with banks, and highly liquid investments with original maturities of three months or less. Under Section 93 of the Monetary Law Act, the Bank is required to maintain a statutory liquid reserve balance with the Central Bank of Sri Lanka (CBSL) calculated as a percentage of prescribed deposit liabilities.",
    content: "Total cash and balances with banks stood at LKR 2,566 Mn as at 31st December 2025.",
    subNotes: [
      {
        subNumber: "18.1",
        subTitle: "Cash in Hand and Foreign Currencies",
        description: "Physical cash held across the Head Office vault and all 94 branch teller tills.",
        columns: [
          { header: "Cash Component (LKR Mn)", key: "comp" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { comp: "Local Currency Cash in Hand & Vaults", y2025: 1425, y2024: 1195 },
          { comp: "Foreign Currency Notes in Hand", y2025: 25, y2024: 15 },
          { comp: "Total Cash in Hand (Note 18.1)", y2025: 1450, y2024: 1210 }
        ]
      },
      {
        subNumber: "18.2",
        subTitle: "Balances with Central Bank of Sri Lanka (CBSL)",
        description: "Statutory reserve requirement held in non-interest bearing accounts with the Central Bank.",
        columns: [
          { header: "Central Bank Account (LKR Mn)", key: "acc" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { acc: "Statutory Reserve Balance (SRR Deposit)", y2025: 412, y2024: 390 },
          { acc: "Total Balances with CBSL (Note 18.2)", y2025: 412, y2024: 390 }
        ]
      },
      {
        subNumber: "18.3",
        subTitle: "Balances with Commercial Banks",
        description: "Operating demand deposits and clearing accounts maintained with domestic licensed banks.",
        columns: [
          { header: "Commercial Bank Balance (LKR Mn)", key: "bank" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { bank: "Current Account Deposits with Commercial Banks", y2025: 452, y2024: 410 },
          { bank: "Clearing & LankaPay Settlement Accounts", y2025: 252, y2024: 275 },
          { bank: "Total Balances with Banks (Note 18.3)", y2025: 704, y2024: 685 }
        ]
      }
    ]
  },

  // NOTE 19: PLACEMENTS WITH BANKS (Point 54)
  {
    number: "Note 19",
    title: "Placements with Banks and Financial Institutions",
    summary: "Short-term money market deposits and call placements with licensed banks.",
    accountingPolicy: "Accounting Policy: Interbank placements are measured at amortised cost less ECL allowances under SLFRS 9.",
    content: "Placements with financial institutions reached LKR 5,410 Mn as at 31st December 2025.",
    columns: [
      { header: "Placement Category (LKR Mn)", key: "cat" },
      { header: "FY 2025", key: "y2025" },
      { header: "FY 2024", key: "y2024" }
    ],
    tableData: [
      { cat: "Interbank Call Money Placements (Maturity < 7 Days)", y2025: 2540, y2024: 2310 },
      { cat: "Short Term Fixed Placements (7 Days to 3 Months)", y2025: 2120, y2024: 1980 },
      { cat: "Term Placements with Licensed Banks (3 to 12 Months)", y2025: 750, y2024: 695 },
      { cat: "Gross Placements with Banks", y2025: 5410, y2024: 4985 }
    ]
  },

  // NOTE 23: FINANCIAL ASSETS AT FVOCI - 23.1, 23.1.1, 23.1.2 (Point 59)
  {
    number: "Note 23",
    title: "Financial Assets Measured at Fair Value Through OCI (FVOCI)",
    summary: "Government debt securities and unquoted strategic equity investments measured at fair value through OCI.",
    accountingPolicy: "Accounting Policy: Debt instruments measured at FVOCI meet the contractual cash flow characteristics (SPPI) test and are held within a business model whose objective is achieved by both collecting contractual cash flows and selling financial assets. Fair value changes are recognized in Other Comprehensive Income until derecognition.",
    content: "Total financial assets measured at FVOCI stood at LKR 3,850 Mn as at 31st December 2025.",
    subNotes: [
      {
        subNumber: "23.1",
        subTitle: "Government Debt Securities at FVOCI",
        columns: [
          { header: "Securities Type (LKR Mn)", key: "type" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { type: "Sri Lanka Government Treasury Bonds", y2025: 3580, y2024: 3840 },
          { type: "Sri Lanka Government Treasury Bills", y2025: 220, y2024: 230 },
          { type: "Total Government Securities at FVOCI (Note 23.1)", y2025: 3800, y2024: 4070 }
        ]
      },
      {
        subNumber: "23.1.1",
        subTitle: "Unquoted Equity Shares Measured at FVOCI",
        description: "Strategic unquoted equity investments held for developmental and cooperative objectives.",
        columns: [
          { header: "Investee Entity (LKR Mn)", key: "entity" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { entity: "Credit Information Bureau of Sri Lanka (CRIB)", y2025: 25, y2024: 25 },
          { entity: "Lanka Financial Services Bureau Limited (LFSBL)", y2025: 15, y2024: 15 },
          { entity: "SANASA Producer Consumer Alliance (Pvt) Ltd", y2025: 10, y2024: 10 },
          { entity: "Total Unquoted Equity Shares (Note 23.1.1)", y2025: 50, y2024: 50 }
        ]
      },
      {
        subNumber: "23.1.2",
        subTitle: "Movement in Fair Value Reserve (FVOCI)",
        columns: [
          { header: "Reserve Movement (LKR Mn)", key: "movement" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { movement: "Balance at 1st January", y2025: 936, y2024: 988 },
          { movement: "Net Fair Value Gain / (Loss) Recognized in OCI", y2025: -142, y2024: -52 },
          { movement: "Deferred Tax Impact on FVOCI Movements", y2025: 13, y2024: 0 },
          { movement: "Balance as at 31st December (Note 23.1.2)", y2025: 807, y2024: 936 }
        ]
      }
    ]
  },

  // NOTE 24: INVESTMENT IN SUBSIDIARIES - 24, 24.1 (Point 60)
  {
    number: "Note 24",
    title: "Investment in Subsidiaries and Associates",
    summary: "Investments in entities where the Bank exercises control or significant influence.",
    accountingPolicy: "Accounting Policy: Investments in subsidiaries and associates are carried at cost less impairment losses in the separate financial statements of the Bank under LKAS 27.",
    content: "The Bank holds strategic shareholdings in SANASA-affiliated subsidiaries.",
    subNotes: [
      {
        subNumber: "24",
        subTitle: "Carrying Value of Subsidiary Investments",
        columns: [
          { header: "Entity Name (LKR Mn)", key: "entity" },
          { header: "Holding %", key: "holding" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { entity: "SDB Media and Technologies (Pvt) Ltd", holding: "100.0%", y2025: 100, y2024: 100 },
          { entity: "SANASA Insurance Company Limited (Associate)", holding: "24.5%", y2025: 50, y2024: 50 },
          { entity: "Total Investments in Subsidiaries & Associates", holding: "-", y2025: 150, y2024: 150 }
        ]
      },
      {
        subNumber: "24.1",
        subTitle: "Principal Activities of Subsidiary Companies",
        columns: [
          { header: "Company", key: "company" },
          { header: "Principal Activity", key: "activity" },
          { header: "Country of Incorporation", key: "country" }
        ],
        tableData: [
          { company: "SDB Media & Technologies (Pvt) Ltd", activity: "Fintech development, mobile app maintenance & IT support", country: "Sri Lanka" },
          { company: "SANASA Insurance Co Ltd", activity: "General and microinsurance products for cooperative sector", country: "Sri Lanka" }
        ]
      }
    ]
  },

  // NOTE 26: FREEHOLD LAND AND HOLDINGS (Point 61)
  {
    number: "Note 26",
    title: "Property, Plant & Equipment - Freehold Land and Holdings",
    summary: "Locations, land extents, valuation dates, and carrying values of Bank-owned real estate.",
    accountingPolicy: "Accounting Policy: Freehold land is stated at revalued amounts based on triennial independent professional valuations by chartered valuation surveyors under LKAS 16.",
    content: "The Bank's freehold properties comprise its Head Office and regional hub properties.",
    columns: [
      { header: "Location of Property", key: "location" },
      { header: "Extent (Perches)", key: "extent" },
      { header: "Valuation Surveyor", key: "surveyor" },
      { header: "Carrying Value 2025 (LKR Mn)", key: "val" }
    ],
    tableData: [
      { location: "No. 12, Edmonton Road, Kirulapone, Colombo 06 (Head Office)", extent: "52.4 Perches", surveyor: "P. B. Kalugalagedera & Associates", val: 385 },
      { location: "SANASA Regional Hub, Paragammana, Kegalle", extent: "45.0 Perches", surveyor: "A. A. M. Fowzie, Chartered Valuer", val: 75 },
      { location: "Regional Branch Land, Kandy Town Center", extent: "22.5 Perches", surveyor: "K. T. D. Tissera, Chartered Valuer", val: 50 },
      { location: "Total Freehold Land and Holdings", extent: "119.9 Perches", surveyor: "Professional Chartered Valuers", val: 510 }
    ]
  },

  // NOTE 30: OTHER BORROWINGS & DETAILS OF TERM LOANS - 30.1, 30.1.1, 30.2, 30.2.2 (Points 62, 63)
  {
    number: "Note 30",
    title: "Other Borrowings & Details of Term Loans",
    summary: "Long-term borrowings from multilateral lenders (ADB, FMO), CBSL refinance schemes, and term facilities.",
    accountingPolicy: "Accounting Policy: Borrowings are initially recognized at fair value net of transaction costs and subsequently measured at amortised cost using the EIR method.",
    content: "Total other borrowings and debt securities stood at LKR 8,410 Mn as at 31st December 2025.",
    subNotes: [
      {
        subNumber: "30.1",
        subTitle: "Summary of Other Borrowings",
        columns: [
          { header: "Borrowing Category (LKR Mn)", key: "cat" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { cat: "Multilateral Term Loans (ADB & FMO) (Note 30.1.1)", y2025: 5990, y2024: 5630 },
          { cat: "Quoted Listed Subordinated Debentures", y2025: 1540, y2024: 1100 },
          { cat: "CBSL Refinance Schemes", y2025: 880, y2024: 720 },
          { cat: "Total Other Borrowings (Note 30.1)", y2025: 8410, y2024: 7450 }
        ]
      },
      {
        subNumber: "30.1.1",
        subTitle: "Details of Term Loans - Multilateral Facilities",
        columns: [
          { header: "Lender / Development Partner", key: "lender" },
          { header: "Facility Currency", key: "ccy" },
          { header: "Interest Rate", key: "rate" },
          { header: "Maturity", key: "mat" },
          { header: "Carrying Value 2025 (LKR Mn)", key: "val" }
        ],
        tableData: [
          { lender: "Asian Development Bank (ADB) - Tea Smallholder Credit", ccy: "LKR", rate: "Concessionary 6.50%", mat: "Dec 2028", val: 3540 },
          { lender: "FMO (Dutch Entrepreneurial Development Bank)", ccy: "USD", rate: "SOFR + 3.75%", mat: "Jun 2027", val: 2450 },
          { lender: "Total Multilateral Term Loans", ccy: "Mixed", rate: "Concessionary / SOFR", mat: "2027–2028", val: 5990 }
        ]
      },
      {
        subNumber: "30.2",
        subTitle: "Maturity Analysis of Term Loans",
        columns: [
          { header: "Repayment Period (LKR Mn)", key: "period" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { period: "Due within one year", y2025: 1845, y2024: 1650 },
          { period: "Due between one and five years", y2025: 5645, y2024: 4980 },
          { period: "Due after five years", y2025: 920, y2024: 820 },
          { period: "Total Term Borrowings", y2025: 8410, y2024: 7450 }
        ]
      },
      {
        subNumber: "30.2.2",
        subTitle: "Subordinated Debt - Quoted Debentures",
        columns: [
          { header: "Debenture Tranche", key: "tranche" },
          { header: "Interest Rate", key: "rate" },
          { header: "Allotment Date", key: "allotment" },
          { header: "Redemption Date", key: "redemption" },
          { header: "Outstanding 2025 (LKR Mn)", key: "val" }
        ],
        tableData: [
          { tranche: "Type A - 5 Year Subordinated Debentures", rate: "12.50% p.a. fixed", allotment: "2021", redemption: "2026", val: 1000 },
          { tranche: "Type B - 5 Year Floating Debentures", rate: "AWPLR + 1.50%", allotment: "2023", redemption: "2028", val: 540 },
          { tranche: "Total Listed Debentures", rate: "Fixed & Floating", allotment: "2021-2023", redemption: "2026-2028", val: 1540 }
        ]
      }
    ]
  },

  // NOTE 31: RETIREMENT BENEFIT OBLIGATION - 31, 31.1, 31.1.1, 31.1.2, 31.1.3 & 31.2 ASSUMPTIONS & SENSITIVITY (Points 64, 65)
  {
    number: "Note 31",
    title: "Retirement Benefit Obligation (Gratuity)",
    summary: "Actuarial valuation of defined benefit obligation, expenses recognized in P&L and OCI, key actuarial assumptions, and sensitivity analysis.",
    accountingPolicy: "Accounting Policy: The Bank measures the present value of the promised retirement benefits for gratuity using the Projected Unit Credit (PUC) method under LKAS 19. An independent actuarial valuation is carried out annually by a qualified actuary. Actuarial gains and losses arising from experience adjustments and changes in actuarial assumptions are recognized immediately in Other Comprehensive Income (OCI).",
    content: "The defined benefit obligation for gratuity recognized as at 31st December 2025 was LKR 957 Mn based on the actuarial report by Actuarial & Management Consultants (Pvt) Ltd.",
    subNotes: [
      {
        subNumber: "31.1",
        subTitle: "Movement in Defined Benefit Obligation",
        columns: [
          { header: "Obligation Movement (LKR Mn)", key: "item" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { item: "Obligation at 1st January", y2025: 930, y2024: 845 },
          { item: "Current Service Cost for the Year (Note 31.1.2)", y2025: 85, y2024: 78 },
          { item: "Interest Cost on Obligation (Note 31.1.2)", y2025: 97, y2024: 87 },
          { item: "Actuarial (Gain) / Loss in OCI (Note 31.1.3)", y2025: 45, y2024: 16 },
          { item: "Benefits Paid during the Year", y2025: -200, y2024: -96 },
          { item: "Obligation as at 31st December (Note 31.1)", y2025: 957, y2024: 930 }
        ]
      },
      {
        subNumber: "31.1.2",
        subTitle: "Expense Recognized in Profit or Loss",
        columns: [
          { header: "Expense Line (LKR Mn)", key: "line" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { line: "Current Service Cost", y2025: 85, y2024: 78 },
          { line: "Interest Cost on Benefit Obligation", y2025: 97, y2024: 87 },
          { line: "Total Recognized in Personnel Expenses (P&L)", y2025: 182, y2024: 165 }
        ]
      },
      {
        subNumber: "31.1.3",
        subTitle: "Actuarial Losses / (Gains) Recognized in Other Comprehensive Income",
        columns: [
          { header: "Actuarial Variance Item (LKR Mn)", key: "item" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { item: "Actuarial Loss / (Gain) from Demographic Assumptions", y2025: 12, y2024: 4 },
          { item: "Actuarial Loss / (Gain) from Financial Assumptions", y2025: 33, y2024: 12 },
          { item: "Total Recognized in OCI", y2025: 45, y2024: 16 }
        ]
      },
      {
        subNumber: "31.2",
        subTitle: "Key Actuarial Assumptions & Sensitivity Analysis",
        columns: [
          { header: "Key Actuarial Assumption", key: "assumption" },
          { header: "Rate Adopted 2025", key: "rate2025" },
          { header: "Rate Adopted 2024", key: "rate2024" },
          { header: "Sensitivity (+1% / -1% Impact on Obligation)", key: "sensitivity" }
        ],
        tableData: [
          { assumption: "Discount Rate", rate2025: "11.50% p.a.", rate2024: "12.00% p.a.", sensitivity: "+1%: -LKR 54 Mn / -1%: +LKR 61 Mn" },
          { assumption: "Future Salary Increment Rate", rate2025: "9.00% p.a.", rate2024: "9.50% p.a.", sensitivity: "+1%: +LKR 63 Mn / -1%: -LKR 56 Mn" },
          { assumption: "Staff Turnover Rate", rate2025: "5.00% p.a.", rate2024: "5.00% p.a.", sensitivity: "+1%: -LKR 12 Mn / -1%: +LKR 14 Mn" },
          { assumption: "Retirement Age", rate2025: "60 Years", rate2024: "60 Years", sensitivity: "Statutory mandatory retirement age" },
          { assumption: "Mortality Table", rate2025: "A1967/70 Ultimate", rate2024: "A1967/70 Ultimate", sensitivity: "Standard mortality table for Sri Lanka" }
        ]
      }
    ]
  },

  // NOTE 41: ANALYSIS OF FINANCIAL INSTRUMENTS BY MEASUREMENT BASIS (Point 66)
  {
    number: "Note 41",
    title: "Analysis of Financial Instruments by Measurement Basis",
    summary: "Classification of financial assets and liabilities into Amortised Cost, FVTPL, and FVOCI under SLFRS 9.",
    accountingPolicy: "Accounting Policy: Financial assets and financial liabilities are classified into measurement categories upon initial recognition in accordance with SLFRS 9 criteria.",
    content: "Summary of carrying values across measurement bases as at 31st December 2025.",
    columns: [
      { header: "Statement Line (LKR Mn)", key: "line" },
      { header: "FVTPL", key: "fvtpl" },
      { header: "FVOCI", key: "fvoci" },
      { header: "Amortised Cost", key: "amortised" },
      { header: "Total Carrying Amount", key: "total" }
    ],
    tableData: [
      { line: "Cash and Cash Equivalents", fvtpl: 0, fvoci: 0, amortised: 2154, total: 2154 },
      { line: "Balances with Central Bank", fvtpl: 0, fvoci: 0, amortised: 412, total: 412 },
      { line: "Placements with Banks", fvtpl: 0, fvoci: 0, amortised: 5410, total: 5410 },
      { line: "Financial Assets at FVTPL", fvtpl: 1120, fvoci: 0, amortised: 0, total: 1120 },
      { line: "Financial Assets at FVOCI", fvtpl: 0, fvoci: 3850, amortised: 0, total: 3850 },
      { line: "Loans & Advances to Customers (Net)", fvtpl: 0, fvoci: 0, amortised: 109841, total: 109841 },
      { line: "Financial Assets at Amortised Cost - Debt", fvtpl: 0, fvoci: 0, amortised: 21540, total: 21540 },
      { line: "Total Financial Assets", fvtpl: 1120, fvoci: 3850, amortised: 139357, total: 144327 },
      { line: "Due to Other Customers (Deposits)", fvtpl: 0, fvoci: 0, amortised: 105681, total: 105681 },
      { line: "Due to Banks", fvtpl: 0, fvoci: 0, amortised: 13452, total: 13452 },
      { line: "Other Borrowings & Debt Securities", fvtpl: 0, fvoci: 0, amortised: 8410, total: 8410 },
      { line: "Lease Liabilities", fvtpl: 0, fvoci: 0, amortised: 684, total: 684 },
      { line: "Total Financial Liabilities", fvtpl: 0, fvoci: 0, amortised: 128227, total: 128227 }
    ]
  },

  // NOTE 42: FAIR VALUE OF FINANCIAL INSTRUMENTS - 42.1, 42.2, 42.2.1, 42.3 (Points 67, 68, 69)
  {
    number: "Note 42",
    title: "Fair Value of Financial Instruments (SLFRS 13)",
    summary: "Fair value hierarchy (Level 1, Level 2, Level 3), valuation techniques, inputs, and Level 3 movement reconciliations.",
    accountingPolicy: "Accounting Policy: SLFRS 13 defines fair value as the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date. Level 1 inputs are quoted prices in active markets. Level 2 inputs are observable market yields. Level 3 inputs are unobservable inputs based on discounted cash flows or net asset valuations.",
    content: "Comparison between carrying amounts and fair values of financial instruments.",
    subNotes: [
      {
        subNumber: "42.1",
        subTitle: "Comparison of Carrying Amount vs Fair Value",
        columns: [
          { header: "Financial Instrument (LKR Mn)", key: "inst" },
          { header: "Carrying Amount 2025", key: "carry" },
          { header: "Fair Value 2025", key: "fair" },
          { header: "Hierarchy Level", key: "level" }
        ],
        tableData: [
          { inst: "Financial Assets at FVTPL (Treasury Bills & Equities)", carry: 1120, fair: 1120, level: "Level 1" },
          { inst: "Financial Assets at FVOCI (Treasury Bonds)", carry: 3800, fair: 3800, level: "Level 2" },
          { inst: "Unquoted Equities at FVOCI (CRIB, LFSBL)", carry: 50, fair: 50, level: "Level 3" },
          { inst: "Loans & Advances to Customers (Net)", carry: 109841, fair: 110450, level: "Level 3" },
          { inst: "Financial Debt Assets at Amortised Cost", carry: 21540, fair: 21620, level: "Level 2" },
          { inst: "Customer Deposits (Fixed & Savings)", carry: 105681, fair: 105710, level: "Level 2" },
          { inst: "Other Borrowings & Debentures", carry: 8410, fair: 8395, level: "Level 2" }
        ]
      },
      {
        subNumber: "42.2",
        subTitle: "Fair Value Hierarchy Analysis",
        columns: [
          { header: "Fair Value Category (LKR Mn)", key: "cat" },
          { header: "Level 1", key: "l1" },
          { header: "Level 2", key: "l2" },
          { header: "Level 3", key: "l3" },
          { header: "Total Fair Value", key: "total" }
        ],
        tableData: [
          { cat: "Financial Assets at FVTPL", l1: 1120, l2: 0, l3: 0, total: 1120 },
          { cat: "Financial Assets at FVOCI", l1: 0, l2: 3800, l3: 50, total: 3850 },
          { cat: "Total Financial Assets Measured at Fair Value", l1: 1120, l2: 3800, l3: 50, total: 4970 }
        ]
      },
      {
        subNumber: "42.2.1",
        subTitle: "Valuation Techniques and Significant Unobservable Inputs (Level 2 & Level 3)",
        columns: [
          { header: "Instrument Type", key: "type" },
          { header: "Valuation Technique", key: "technique" },
          { header: "Observable / Unobservable Inputs", key: "inputs" },
          { header: "Inter-relationship with Fair Value", key: "inter" }
        ],
        tableData: [
          { type: "Treasury Bonds & Bills (Level 2)", technique: "Market comparison using CBSL daily published yield curve", inputs: "Secondary market yield curve rates", inter: "Increase in yields decreases fair value" },
          { type: "Unquoted Equities (Level 3)", technique: "Net Asset Value (NAV) per share model", inputs: "Audited net asset value of investee companies", inter: "Higher NAV increases fair value" },
          { type: "Loans & Advances (Fair Value Disclosure)", technique: "Discounted Cash Flow (DCF) model", inputs: "Contractual cash flows, current market lending rates, credit spreads", inter: "Lower market rates increase fair value" }
        ]
      },
      {
        subNumber: "42.3",
        subTitle: "Reconciliation of Level 3 Fair Value Movements",
        columns: [
          { header: "Level 3 Movement (LKR Mn)", key: "movement" },
          { header: "FY 2025", key: "y2025" },
          { header: "FY 2024", key: "y2024" }
        ],
        tableData: [
          { movement: "Opening Balance at 1st January (Unquoted Equities)", y2025: 50, y2024: 48 },
          { movement: "Gains recognized in OCI", y2025: 0, y2024: 2 },
          { movement: "Additions / Settlements", y2025: 0, y2024: 0 },
          { movement: "Closing Balance as at 31st December", y2025: 50, y2024: 50 }
        ]
      }
    ]
  },

  // NOTE 44: MATURITY ANALYSIS OF ASSETS AND LIABILITIES (Point 70)
  {
    number: "Note 44",
    title: "Maturity Analysis of Assets and Liabilities",
    summary: "Liquidity profile allocating all assets and liabilities into remaining contractual maturity time buckets.",
    accountingPolicy: "Accounting Policy: In accordance with CBSL Guidelines and LKAS 1, the maturity profile of assets and liabilities is compiled based on remaining contractual maturities.",
    content: "Maturity gap analysis demonstrates comfortable structural liquidity buffers across all intervals.",
    columns: [
      { header: "Maturity Interval (LKR Mn)", key: "interval" },
      { header: "Up to 3 Months", key: "m3" },
      { header: "3 to 12 Months", key: "m12" },
      { header: "1 to 3 Years", key: "y3" },
      { header: "3 to 5 Years", key: "y5" },
      { header: "Over 5 Years", key: "yOver" },
      { header: "Total", key: "total" }
    ],
    tableData: [
      { interval: "Cash and Placements with Banks", m3: 7564, m12: 412, y3: 0, y5: 0, yOver: 0, total: 7976 },
      { interval: "Financial Assets (FVTPL & FVOCI)", m3: 1340, m12: 850, y3: 1200, y5: 980, yOver: 600, total: 4970 },
      { interval: "Loans & Advances to Customers (Net)", m3: 18450, m12: 32150, y3: 34100, y5: 16841, yOver: 8300, total: 109841 },
      { interval: "Financial Assets at Amortised Cost - Debt", m3: 2500, m12: 5210, y3: 8430, y5: 4200, yOver: 1200, total: 21540 },
      { interval: "Other Non-Financial Assets", m3: 250, m12: 480, y3: 520, y5: 381, yOver: 1000, total: 2631 },
      { interval: "Total Assets", m3: 30104, m12: 39102, y3: 44250, y5: 22402, yOver: 11100, total: 146958 },
      { interval: "Customer Deposits (Fixed & Savings)", m3: 38450, m12: 45231, y3: 14500, y5: 6500, yOver: 1000, total: 105681 },
      { interval: "Due to Banks & DFIs", m3: 4520, m12: 4832, y3: 2500, y5: 1600, yOver: 0, total: 13452 },
      { interval: "Other Borrowings & Debentures", m3: 650, m12: 1195, y3: 3500, y5: 2145, yOver: 920, total: 8410 },
      { interval: "Other Liabilities & Leases", m3: 980, m12: 1140, y3: 1250, y5: 841, yOver: 400, total: 4611 },
      { interval: "Total Liabilities", m3: 44600, m12: 52398, y3: 21750, y5: 11086, yOver: 2320, total: 132154 },
      { interval: "Net Maturity Gap", m3: -14496, m12: -13296, y3: 22500, y5: 11316, yOver: 8780, total: 14804 }
    ]
  },

  // NOTE 45: RISK MANAGEMENT - 45.2.1 ECL, 45.2.5.1 GEOGRAPHICAL, 45.2.5.2 INDUSTRY, 45.3.2 REMAINING CONTRACTUAL MATURITIES (Points 71, 72, 73, 74)
  {
    number: "Note 45",
    title: "Financial Risk Management Disclosures",
    summary: "Credit risk Expected Credit Loss (ECL) movements, geographical distribution, industry sector concentration, and undiscounted contractual maturities.",
    accountingPolicy: "Accounting Policy: Credit risk is evaluated through SLFRS 9 Expected Credit Loss staging criteria: Stage 1 (12-month ECL for performing loans), Stage 2 (Lifetime ECL for loans with significant increase in credit risk), and Stage 3 (Lifetime ECL for credit-impaired assets over 90 days past due). Forward-looking economic scenarios incorporate GDP growth, inflation, and CBSL policy rates.",
    content: "Comprehensive risk management schedules covering credit concentration and liquidity risk.",
    subNotes: [
      {
        subNumber: "45.2.1",
        subTitle: "Movement in Expected Credit Loss (ECL) Allowance across Stages",
        columns: [
          { header: "ECL Stage Breakdown (LKR Mn)", key: "stage" },
          { header: "Stage 1 (12-Month)", key: "s1" },
          { header: "Stage 2 (Lifetime)", key: "s2" },
          { header: "Stage 3 (Credit Impaired)", key: "s3" },
          { header: "Total ECL Allowance", key: "total" }
        ],
        tableData: [
          { stage: "Balance as at 1st January 2025", s1: 980, s2: 1450, s3: 8584, total: 11014 },
          { stage: "Net Remeasurement / New Provisions", s1: 85, s2: 154, s3: 465, total: 704 },
          { stage: "Transfers to / (from) Stage 1", s1: 120, s2: -80, s3: -40, total: 0 },
          { stage: "Transfers to / (from) Stage 2", s1: -65, s2: 110, s3: -45, total: 0 },
          { stage: "Transfers to / (from) Stage 3", s1: -30, s2: -90, s3: 120, total: 0 },
          { stage: "Advances Written Off During Year", s1: 0, s2: 0, s3: -45, total: -45 },
          { stage: "Balance as at 31st December 2025 (Note 45.2.1)", s1: 1090, s2: 1544, s3: 9039, total: 11673 }
        ]
      },
      {
        subNumber: "45.2.5.1",
        subTitle: "Geographical Distribution of Credit Risk",
        columns: [
          { header: "Province of Sri Lanka", key: "province" },
          { header: "Gross Advances (LKR Mn)", key: "gross" },
          { header: "Share %", key: "pct" },
          { header: "ECL Allowance (LKR Mn)", key: "ecl" }
        ],
        tableData: [
          { province: "Western Province", gross: 38450, pct: "31.63%", ecl: 3450 },
          { province: "Central Province", gross: 18210, pct: "14.98%", ecl: 1680 },
          { province: "North Western Province", gross: 16840, pct: "13.85%", ecl: 1590 },
          { province: "Southern Province", gross: 15210, pct: "12.51%", ecl: 1420 },
          { province: "Sabaragamuwa Province", gross: 11450, pct: "9.42%", ecl: 1120 },
          { province: "North Central Province", gross: 8940, pct: "7.35%", ecl: 910 },
          { province: "Eastern Province", gross: 5610, pct: "4.61%", ecl: 690 },
          { province: "Northern Province", gross: 4210, pct: "3.46%", ecl: 513 },
          { province: "Uva Province", gross: 2650, pct: "2.18%", ecl: 300 },
          { province: "Total Geographical Credit Portfolio", gross: 121570, pct: "100.00%", ecl: 11673 }
        ]
      },
      {
        subNumber: "45.2.5.2",
        subTitle: "Industry Analysis - Gross Advance Portfolio Industry-Wise Analysis",
        columns: [
          { header: "Industry Sector", key: "sector" },
          { header: "Gross Loans 2025 (LKR Mn)", key: "y2025" },
          { header: "Sector Share %", key: "share2025" },
          { header: "Gross Loans 2024 (LKR Mn)", key: "y2024" },
          { header: "Sector Share %", key: "share2024" }
        ],
        tableData: [
          { sector: "Agriculture, Forestry & Fishing", y2025: 38450, share2025: "31.63%", y2024: 31210, share2024: "29.40%" },
          { sector: "Wholesale, Retail Trade & Distributors", y2025: 25410, share2025: "20.90%", y2024: 23140, share2024: "21.80%" },
          { sector: "Services & Professional Undertakings", y2025: 18210, share2025: "14.98%", y2024: 16450, share2024: "15.50%" },
          { sector: "Manufacturing & Agro-Processing", y2025: 14520, share2025: "11.94%", y2024: 12890, share2024: "12.14%" },
          { sector: "Construction & Infrastructure", y2025: 9840, share2025: "8.09%", y2024: 9120, share2024: "8.59%" },
          { sector: "Tourism, Hospitality & Travel", y2025: 6420, share2025: "5.28%", y2024: 5610, share2024: "5.28%" },
          { sector: "Transportation & Warehousing", y2025: 4890, share2025: "4.02%", y2024: 4210, share2024: "3.97%" },
          { sector: "Financial Services, Housing & Others", y2025: 3830, share2025: "3.15%", y2024: 3510, share2024: "3.31%" },
          { sector: "Total Gross Advance Portfolio (Note 45.2.5.2)", y2025: 121570, share2025: "100.00%", y2024: 106140, share2024: "100.00%" }
        ]
      },
      {
        subNumber: "45.3.2",
        subTitle: "Analysis of Financial Assets and Liabilities by Remaining Contractual Maturities",
        columns: [
          { header: "Contractual Cash Flow Category (LKR Mn)", key: "cat" },
          { header: "On Demand / < 3M", key: "c3m" },
          { header: "3 to 12 Months", key: "c12m" },
          { header: "1 to 5 Years", key: "c5y" },
          { header: "Over 5 Years", key: "cOver" },
          { header: "Total Undiscounted Inflows / (Outflows)", key: "total" }
        ],
        tableData: [
          { cat: "Contractual Financial Assets (Loans, Debt & Placements)", c3m: 32450, c12m: 42150, c5y: 78940, cOver: 15400, total: 168940 },
          { cat: "Contractual Financial Liabilities (Deposits & Borrowings)", c3m: -46200, c12m: -54120, c5y: -34500, cOver: -3120, total: -137940 },
          { cat: "Net Undiscounted Contractual Cash Flow Gap", c3m: -13750, c12m: -11970, c5y: 44440, cOver: 12280, total: 31000 }
        ]
      }
    ]
  }
];

// ==========================================
// SUPPLEMENTARY SUMMARY INFO
// ==========================================
export const SUPPLEMENTARY_INFO = {
  tenYearSummary: [
    { year: "2025", grossIncome: 18404, nii: 8233, pbt: 800, pat: 405, totalAssets: 146958, customerDeposits: 105681, grossLoans: 109841, car: "15.24%", nplRatio: "4.45%" },
    { year: "2024", grossIncome: 21063, nii: 7820, pbt: 684, pat: 410, totalAssets: 145156, customerDeposits: 106989, grossLoans: 95137, car: "16.37%", nplRatio: "4.78%" },
    { year: "2023", grossIncome: 25419, nii: 8502, pbt: 701, pat: 466, totalAssets: 156957, customerDeposits: 108118, grossLoans: 98869, car: "15.10%", nplRatio: "4.82%" },
    { year: "2022", grossIncome: 24701, nii: 6839, pbt: 132, pat: 61, totalAssets: 159521, customerDeposits: 107533, grossLoans: 110525, car: "14.80%", nplRatio: "5.10%" },
    { year: "2021", grossIncome: 17462, nii: 6774, pbt: 1466, pat: 893, totalAssets: 147819, customerDeposits: 93903, grossLoans: 111891, car: "14.50%", nplRatio: "4.20%" },
    { year: "2020", grossIncome: 16043, nii: 6210, pbt: 1403, pat: 835, totalAssets: 129111, customerDeposits: 83935, grossLoans: 102213, car: "13.90%", nplRatio: "3.90%" },
    { year: "2019", grossIncome: 16183, nii: 5890, pbt: 512, pat: 252, totalAssets: 107817, customerDeposits: 72972, grossLoans: 88151, car: "13.20%", nplRatio: "3.70%" },
    { year: "2018", grossIncome: 13915, nii: 5420, pbt: 674, pat: 377, totalAssets: 96317, customerDeposits: 67341, grossLoans: 81223, car: "12.90%", nplRatio: "3.40%" },
    { year: "2017", grossIncome: 11634, nii: 4850, pbt: 835, pat: 504, totalAssets: 82431, customerDeposits: 62241, grossLoans: 68766, car: "12.80%", nplRatio: "3.10%" },
    { year: "2016", grossIncome: 8645, nii: 3950, pbt: 1042, pat: 618, totalAssets: 66050, customerDeposits: 46270, grossLoans: 56677, car: "12.60%", nplRatio: "2.80%" }
  ],
  topShareholders: [
    { rank: 1, name: "SBI Emerging Asia Financial Sector Fund Pte. Ltd.", shares: 31920800, percentage: "19.90%" },
    { rank: 2, name: "International Finance Corporation (IFC)", shares: 15960400, percentage: "9.95%" },
    { rank: 3, name: "Dutch Development Bank (FMO)", shares: 15383500, percentage: "9.59%" },
    { rank: 4, name: "Ayenka Holdings (Pvt) Ltd", shares: 15000000, percentage: "9.35%" },
    { rank: 5, name: "Employees' Trust Fund Board (ETF)", shares: 8900200, percentage: "5.55%" },
    { rank: 6, name: "Kegalle Sanasa District Co-Operative Union Ltd", shares: 4800000, percentage: "2.99%" },
    { rank: 7, name: "Gampaha Sanasa District Co-Operative Union Ltd", shares: 4500000, percentage: "2.81%" },
    { rank: 8, name: "Kalutara Sanasa District Co-Operative Union Ltd", shares: 3900000, percentage: "2.43%" },
    { rank: 9, name: "Seylan Bank PLC / Arrc Capital (Pvt) Ltd", shares: 3600000, percentage: "2.24%" },
    { rank: 10, name: "Colombo Sanasa District Co-Operative Union Ltd", shares: 3200000, percentage: "2.00%" }
  ],
  valueAddedStatement: [
    { category: "To Employees (Salaries, allowances & retirement benefits)", amount: 2845, percentage: "41.5%" },
    { category: "To Government (Direct taxes, VAT on financial services & social security levy)", amount: 1650, percentage: "24.1%" },
    { category: "To Shareholders (Dividends paid & proposed)", amount: 350, percentage: "5.1%" },
    { category: "Retained in Business (Depreciation, amortisation & reserves expansion)", amount: 2012, percentage: "29.3%" }
  ]
};

