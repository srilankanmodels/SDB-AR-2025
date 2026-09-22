/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Financial Statements, Accounting Policies & Notes 1 to 46
 * Source: Official Published Annual Report 2025 (Pages 224-296)
 * Audited by Ernst & Young (EY) Sri Lanka
 */

import authoritativeNotes from "./notes_authoritative_hierarchy.json";

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

export interface NoteTable {
  tableName?: string;
  headers: string[];
  rows: string[][];
  footnotes?: string[];
}

export interface SubNoteItem {
  subNumber: string;
  title: string;
  subTitle?: string;
  accountingPolicy?: string;
  description?: string;
  content?: string;
  bullets?: string[];
  tables?: NoteTable[];
  columns?: NoteTableColumn[];
  tableData?: NoteTableRow[];
}

export interface NoteDetail {
  number: string;
  noteNum?: number;
  title: string;
  pages?: string;
  summary: string;
  accountingPolicy?: string;
  content: string;
  subNotes?: SubNoteItem[];
  tables?: NoteTable[];
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
  
  { item: "Impairment Charges on Loans & Receivables", "2025": -719, "2024": -559, "2023": -1819, "2022": -1898, "2021": -644, indent: true },
  { item: "Net Operating Income", "2025": 8810, "2024": 8194, "2023": 7675, "2022": 5928, "2021": 6852, isTotal: true },
  
  { item: "Personnel Expenses", "2025": -2845, "2024": -2520, "2023": -2310, "2022": -2040, "2021": -1850, indent: true },
  { item: "Depreciation and Amortisation", "2025": -385, "2024": -370, "2023": -348, "2022": -322, "2021": -315, indent: true },
  { item: "Other Operating Expenses", "2025": -2580, "2024": -2419, "2023": -2253, "2022": -1968, "2021": -1723, indent: true },
  { item: "Total Operating Expenses", "2025": -5810, "2024": -5309, "2023": -4911, "2022": -4330, "2021": -3888, isTotal: true },
  
  { item: "Operating Profit Before Taxes on Financial Services", "2025": 3000, "2024": 2885, "2023": 2764, "2022": 1598, "2021": 2964, isHeader: true },
  { item: "VAT and Social Security Levy on Financial Services", "2025": -850, "2024": -810, "2023": -780, "2022": -520, "2021": -480, indent: true },
  { item: "Profit Before Income Tax", "2025": 800, "2024": 685, "2023": 764, "2022": 148, "2021": 1214, isTotal: true },
  { item: "Income Tax Expense", "2025": -395, "2024": -275, "2023": -298, "2022": -87, "2021": -321, indent: true },
  { item: "Profit for the Year", "2025": 405, "2024": 410, "2023": 466, "2022": 61, "2021": 893, isTotal: true }
];

// ==========================================
// 2. STATEMENT OF FINANCIAL POSITION (Point 45)
// ==========================================
export const BALANCE_SHEET_ROWS: FinancialRow[] = [
  { item: "Assets", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Cash and Cash Equivalents (Note 18)", "2025": 7564, "2024": 6015, "2023": 6669, "2022": 7255, "2021": 8140, indent: true },
  { item: "Placements with Banks (Note 19)", "2025": 3810, "2024": 4210, "2023": 5120, "2022": 4120, "2021": 3840, indent: true },
  { item: "Financial Assets at Fair Value Through Profit or Loss (Note 20)", "2025": 218, "2024": 185, "2023": 242, "2022": 198, "2021": 150, indent: true },
  { item: "Financial Assets Measured at FVOCI (Note 23)", "2025": 3850, "2024": 4120, "2023": 3210, "2022": 2950, "2021": 2410, indent: true },
  { item: "Loans & Advances to Customers (Net) (Note 21)", "2025": 109841, "2024": 95137, "2023": 98869, "2022": 110525, "2021": 111891, indent: true },
  { item: "Financial Assets at Amortized Cost - Debt (Note 22)", "2025": 21540, "2024": 35420, "2023": 44102, "2022": 35140, "2021": 22430, indent: true },
  { item: "Investment in Subsidiaries & Associates (Note 24)", "2025": 150, "2024": 150, "2023": 150, "2022": 150, "2021": 150, indent: true },
  { item: "Property, Plant and Equipment (Note 25)", "2025": 970, "2024": 915, "2023": 890, "2022": 854, "2021": 812, indent: true },
  { item: "Right-of-use Assets (Note 26)", "2025": 612, "2024": 570, "2023": 625, "2022": 680, "2021": 714, indent: true },
  { item: "Intangible Assets (Note 27)", "2025": 254, "2024": 284, "2023": 310, "2022": 298, "2021": 215, indent: true },
  { item: "Deferred Tax Assets (Note 16)", "2025": 420, "2024": 385, "2023": 310, "2022": 240, "2021": 185, indent: true },
  { item: "Other Assets (Note 28)", "2025": 5057, "2024": 4900, "2023": 4925, "2022": 5242, "2021": 5112, indent: true },
  { item: "Total Assets", "2025": 146958, "2024": 145156, "2023": 156957, "2022": 159521, "2021": 147819, isTotal: true },
  
  { item: "Liabilities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Due to Other Customers (Deposits) (Note 29)", "2025": 105681, "2024": 106989, "2023": 108118, "2022": 107533, "2021": 93903, indent: true },
  { item: "Due to Banks & Other Borrowings (Note 30)", "2025": 21862, "2024": 18970, "2023": 30390, "2022": 34050, "2021": 35540, indent: true },
  { item: "Lease Liabilities (Note 26)", "2025": 684, "2024": 610, "2023": 665, "2022": 718, "2021": 750, indent: true },
  { item: "Retirement Benefit Obligations (Note 31)", "2025": 957, "2024": 930, "2023": 845, "2022": 780, "2021": 720, indent: true },
  { item: "Other Liabilities (Note 32)", "2025": 2970, "2024": 3070, "2023": 2673, "2022": 2781, "2021": 2776, indent: true },
  { item: "Total Liabilities", "2025": 132154, "2024": 130569, "2023": 142691, "2022": 145862, "2021": 133689, isTotal: true },
  
  { item: "Equity", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Stated Capital (Note 33)", "2025": 9742, "2024": 9742, "2023": 9742, "2022": 9742, "2021": 9742, indent: true },
  { item: "Statutory Reserve Fund (Note 34)", "2025": 1150, "2024": 1105, "2023": 1085, "2022": 1030, "2021": 1005, indent: true },
  { item: "Retained Earnings (Note 35)", "2025": 2605, "2024": 2304, "2023": 2115, "2022": 1820, "2021": 2150, indent: true },
  { item: "Other Reserves (Note 36)", "2025": 1307, "2024": 1436, "2023": 1324, "2022": 1067, "2021": 1233, indent: true },
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
  { item: "Net Cash generated from / (used in) Investing Activities", "2025": 13760, "2024": -8792, "2023": -9057, "2022": -12815, "2021": 14112, isTotal: true },
  
  { item: "Cash Flows from Financing Activities", "2025": 0, "2024": 0, "2023": 0, "2022": 0, "2021": 0, isHeader: true },
  { item: "Net Inflow / (Repayment) of Other Borrowings", "2025": 815, "2024": -1340, "2023": -6250, "2022": -850, "2021": 420, indent: true },
  { item: "Payment of Lease Liabilities", "2025": -320, "2024": -295, "2023": -280, "2022": -270, "2021": -260, indent: true },
  { item: "Dividends Paid to Shareholders", "2025": 0, "2024": -161, "2023": 0, "2022": -738, "2021": 141, indent: true },
  { item: "Net Cash generated from / (used in) Financing Activities", "2025": 495, "2024": -1796, "2023": -6530, "2022": -1858, "2021": 301, isTotal: true },
  
  { item: "Net Increase / (Decrease) in Cash and Cash Equivalents", "2025": 1229, "2024": -5745, "2023": -551, "2022": -24370, "2021": 554, isTotal: true },
  { item: "Cash and Cash Equivalents at 1st January", "2025": 6015, "2024": 6669, "2023": 7255, "2022": 8140, "2021": 5961, indent: true },
  { item: "Cash and Cash Equivalents at 31st December", "2025": 7564, "2024": 6015, "2023": 6669, "2022": 7255, "2021": 8140, isTotal: true }
];

// ==========================================
// 5. COMPREHENSIVE AUTHORITATIVE NOTES 1 TO 46
// ==========================================
export const NOTES_TO_FINANCIALS: NoteDetail[] = authoritativeNotes as unknown as NoteDetail[];

// ==========================================
// 6. SUPPLEMENTARY INFORMATION & STATISTICAL SCHEDULES
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
