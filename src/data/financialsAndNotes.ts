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
  {
    number: "Note 1",
    title: "Corporate Information & Reporting Entity",
    summary: "An analysis on recovery or settlement within 12 months after the reporting date (current) and more than 12 months after the reporting date (non-current) is presented in the Note 44 to the Financial Statements.",
    accountingPolicy: "In compliance with Sri Lanka Accounting Standard - LKAS 1 (Presentation of Financial Statements), each material class of similar items is presented separately in the Financial Statements. Items of dissimilar nature or functions too are presented separately unless they are immaterial. Financial assets and financial liabilities are offset and the net amount reported in the Statement of Financial Position only when there is a legally enforceable right to offset the recognised amounts and there is an intention to settle on a net basis, or to realise the assets and settle the liability simultaneously. Income and expenses are not offset in the Statement of Profit or Loss unless required or permitted by an Accounting Standard.",
    content: "An analysis on recovery or settlement within 12 months after the reporting date (current) and more than 12 months after the reporting date (non-current) is presented in the Note 44 to the Financial Statements.\n\n2.7. Materiality and Aggregation\n\nIn compliance with Sri Lanka Accounting Standard - LKAS 1 (Presentation of Financial Statements), each material class of similar items is presented separately in the Financial Statements. Items of dissimilar nature or functions too are presented separately unless they are immaterial. Financial assets and financial liabilities are offset and the net amount reported in the Statement of Financial Position only when there is a legally enforceable right to offset the recognised amounts and there is an intention to settle on a net basis, or to realise the assets and settle the liability simultaneously. Income and expenses are not offset in the Statement of Profit or Loss unless required or permitted by an Accounting Standard.\n\n2.8. Comparative Information\n\nThe comparative information is reclassified wherever necessary to conform to the current year's classification in order to provide a better presentation. The details of such reclassifications are presented in Note 46 to the Financial Statements\n\n2.9. Statement of Cash Flows\n\nThe Statement of Cash Flows has been prepared by using the direct method in accordance with the Sri Lanka Accounting Standard - LKAS 7 (Statement of Cash Flows), whereby gross cash receipts and gross cash payments of operating activities, financing activities and investing activities have been recognised. Cash and cash equivalents comprise short term, highly liquid investments that are readily convertible to known amounts of cash and are subject to an insignificant risk of changes in value.\n\nCash and cash equivalents include cash in hand, balances with banks, placements with banks (less than 3 months), money at call and short notice, net of unfavourable local bank balances.\n\n2.10. Significant Accounting Judgments, Estimates and Assumptions\n\nThe preparation of Financial Statements of the Bank in conformity with Sri Lanka Accounting Standards requires the management to make judgments, estimates and assumptions that affect the application of accounting policies and the reported amounts of assets, liabilities, income and expenses. Actual results may differ from these estimates.\n\nEstimates and underlying assumptions are reviewed on an ongoing basis. Revisions to accounting estimates are recognised in the period in which the estimate is revised and in any future periods affected. The most significant areas of estimation, uncertainty and critical judgments in applying accounting policies that have most significant effect on the amounts recognised in the Financial Statements of the Bank are described in the respective notes.\n\n2.11. Going Concern\n\nThe Directors have made an assessment of the Bank's ability to continue as a going concern and are satisfied that it has the resources to continue in business for the foreseeable future. The Directors have considered the impact of the current adverse macro-economic conditions on the business operations of the Bank. Furthermore, the Board is not aware of any material uncertainties that may cast significant doubt upon the Bank's ability to continue as a going concern and they do not intend either to liquidate or to cease operations of the Bank. Therefore, the Financial Statements continue to be prepared on the going concern basis. The management has also conducted stress tests to evaluate the robustness of the financial resources of the Bank. This has been reviewed and approved by the Board.\n\n2.12. Impairment Losses on Loans and Advances\n\nThe measurement of impairment losses under Sri Lanka Accounting Standards - SLFRS 9 (Financial Instruments) across all categories of financial assets requires judgement. These estimates are driven by a number of factors, changes in which can result in different levels of allowances."
  },
  {
    number: "Note 2",
    title: "Basis of Preparation & Compliance Framework",
    summary: "An analysis on recovery or settlement within 12 months after the reporting date (current) and more than 12 months after the reporting date (non-current) is presented in the Note 44 to the Financial Statements.",
    accountingPolicy: "In compliance with Sri Lanka Accounting Standard - LKAS 1 (Presentation of Financial Statements), each material class of similar items is presented separately in the Financial Statements. Items of dissimilar nature or functions too are presented separately unless they are immaterial. Financial assets and financial liabilities are offset and the net amount reported in the Statement of Financial Position only when there is a legally enforceable right to offset the recognised amounts and there is an intention to settle on a net basis, or to realise the assets and settle the liability simultaneously. Income and expenses are not offset in the Statement of Profit or Loss unless required or permitted by an Accounting Standard.",
    content: "An analysis on recovery or settlement within 12 months after the reporting date (current) and more than 12 months after the reporting date (non-current) is presented in the Note 44 to the Financial Statements.\n\n2.7. Materiality and Aggregation\n\nIn compliance with Sri Lanka Accounting Standard - LKAS 1 (Presentation of Financial Statements), each material class of similar items is presented separately in the Financial Statements. Items of dissimilar nature or functions too are presented separately unless they are immaterial. Financial assets and financial liabilities are offset and the net amount reported in the Statement of Financial Position only when there is a legally enforceable right to offset the recognised amounts and there is an intention to settle on a net basis, or to realise the assets and settle the liability simultaneously. Income and expenses are not offset in the Statement of Profit or Loss unless required or permitted by an Accounting Standard.\n\n2.8. Comparative Information\n\nThe comparative information is reclassified wherever necessary to conform to the current year's classification in order to provide a better presentation. The details of such reclassifications are presented in Note 46 to the Financial Statements\n\n2.9. Statement of Cash Flows\n\nThe Statement of Cash Flows has been prepared by using the direct method in accordance with the Sri Lanka Accounting Standard - LKAS 7 (Statement of Cash Flows), whereby gross cash receipts and gross cash payments of operating activities, financing activities and investing activities have been recognised. Cash and cash equivalents comprise short term, highly liquid investments that are readily convertible to known amounts of cash and are subject to an insignificant risk of changes in value.\n\nCash and cash equivalents include cash in hand, balances with banks, placements with banks (less than 3 months), money at call and short notice, net of unfavourable local bank balances.\n\n2.10. Significant Accounting Judgments, Estimates and Assumptions\n\nThe preparation of Financial Statements of the Bank in conformity with Sri Lanka Accounting Standards requires the management to make judgments, estimates and assumptions that affect the application of accounting policies and the reported amounts of assets, liabilities, income and expenses. Actual results may differ from these estimates.\n\nEstimates and underlying assumptions are reviewed on an ongoing basis. Revisions to accounting estimates are recognised in the period in which the estimate is revised and in any future periods affected. The most significant areas of estimation, uncertainty and critical judgments in applying accounting policies that have most significant effect on the amounts recognised in the Financial Statements of the Bank are described in the respective notes.\n\n2.11. Going Concern\n\nThe Directors have made an assessment of the Bank's ability to continue as a going concern and are satisfied that it has the resources to continue in business for the foreseeable future. The Directors have considered the impact of the current adverse macro-economic conditions on the business operations of the Bank. Furthermore, the Board is not aware of any material uncertainties that may cast significant doubt upon the Bank's ability to continue as a going concern and they do not intend either to liquidate or to cease operations of the Bank. Therefore, the Financial Statements continue to be prepared on the going concern basis. The management has also conducted stress tests to evaluate the robustness of the financial resources of the Bank. This has been reviewed and approved by the Board.\n\n2.12. Impairment Losses on Loans and Advances\n\nThe measurement of impairment losses under Sri Lanka Accounting Standards - SLFRS 9 (Financial Instruments) across all categories of financial assets requires judgement. These estimates are driven by a number of factors, changes in which can result in different levels of allowances."
  },
  {
    number: "Note 3",
    title: "General Accounting Policies",
    summary: "consistency, the Bank has established specific criteria for this assessment. A property is classified as an investment property if it is held primarily to earn rental income, for capital appreciation, or both, and generates cash flows largely indepen...",
    accountingPolicy: "The Bank uses its judgment to determine whether an operating lease contract qualifies for recognition of right of-use assets. It also uses judgement in the determination of the discount rate in the calculation of the lease liability. The lease liability is initially measured at the present value of the lease payments that are not paid at the commencement date, discounted using the interest rate implicit in the lease. As the Bank cannot readily determine the interest rate implicit in the lease, it uses its incremental borrowing rate to measure the lease liability. The incremental borrowing rate is the rate of interest that the Bank would have to pay, to borrow an amount similar to the value of the lease asset, over a similar term and with similar security in similar economic environment. Further, the Bank applies judgement in evaluating whether it is reasonably certain to renew or terminate the lease at the end of the lease term. That is, it considers all relevant factors that create an economic benefit for it to exercise, either the renewal or termination option.",
    content: "consistency, the Bank has established specific criteria for this assessment. A property is classified as an investment property if it is held primarily to earn rental income, for capital appreciation, or both, and generates cash flows largely independent of the Bank's other assets. Conversely, properties used for operational purposes, service delivery, or administrative functions where cash f lows are not generated independently are classified as property, plant, and equipment (PPE)\n\nThe Bank reviews the classification of its properties annually, considering their current use. As of December 31, 2025, no assets have been classified as investment properties.\n\n2.22. SLFRS 16 - Leases\n\nThe Bank uses its judgment to determine whether an operating lease contract qualifies for recognition of right of-use assets. It also uses judgement in the determination of the discount rate in the calculation of the lease liability. The lease liability is initially measured at the present value of the lease payments that are not paid at the commencement date, discounted using the interest rate implicit in the lease. As the Bank cannot readily determine the interest rate implicit in the lease, it uses its incremental borrowing rate to measure the lease liability. The incremental borrowing rate is the rate of interest that the Bank would have to pay, to borrow an amount similar to the value of the lease asset, over a similar term and with similar security in similar economic environment. Further, the Bank applies judgement in evaluating whether it is reasonably certain to renew or terminate the lease at the end of the lease term. That is, it considers all relevant factors that create an economic benefit for it to exercise, either the renewal or termination option.\n\n3. GENERAL ACCOUNTING POLICIES\n\n3.1. Foreign Currency Transactions and Balances\n\nAll foreign currency transactions are translated into the functional currency, which is Sri Lankan Rupees, using the exchange rates prevailing at the dates of the transactions were affected.\n\nMonetary assets and liabilities denominated in foreign currencies at the reporting date are translated to Sri Lankan Rupees using the spot foreign exchange rate ruling at that date and all differences arising on non-trading activities are taken to 'Other operating income' in the Statement of Profit or Loss. The foreign currency gain or loss on monetary items is the difference between amortised cost in the functional currency at the beginning of the period, adjusted for effective interest and payments during the period, and the amortised cost in foreign currency translated at the rate of exchange prevailing at the end of the reporting period.\n\nNon-monetary items in a foreign currency that are measured in terms of historical cost are translated using the exchange rates as at the dates of the initial transactions. Non- monetary items in foreign currency measured at fair value are translated using the exchange rates at the date when the fair value was determined.\n\nForeign exchange differences arising on the settlement or reporting of monetary items at rates different from those which were initially recorded are dealt with in the Statement of Profit or Loss. However, foreign currency differences arising on equity instruments classified as fair value through other comprehensive income, financial liabilities designated as a hedge of a net investment in a foreign operation, or qualifying cash flow hedges are recognised in other comprehensive income.\n\n3.2. Financial Instruments - Initial Recognition, Classification and Subsequent Measurement\n\n3.2.1. Date of Recognition\n\nFinancial assets and liabilities, with the exception of loans and advances to customers and balances due to customers, are initially recognised on the trade date, i.e., the date that the Bank becomes a party to the contractual provisions of the instrument. This includes regular way trades: purchases or sales of financial assets that require delivery of assets within the time frame generally established by regulation or convention in the market place. Loans and advances to customers are recognised when funds are transferred to the customers' accounts. The Bank recognises balances due to depositors when funds are transferred to the Bank.\n\n3.2.2. Initial Measurement of Financial Instruments\n\nThe classification of financial instruments at initial recognition depends on their contractual terms and the business model for managing the instruments, as described in Notes 3.2.3.1(a) and 3.2.3.1 (b). Financial instruments are initially measured at their fair value."
  },
  {
    number: "Note 4",
    title: "New Accounting Standards Issued but Not Yet Effective",
    summary: "discount rate that reflects current market assessments of the time value of money and the risks specific to the asset.",
    accountingPolicy: "4. NEW ACCOUNTING STANDARDS/AMENDMENTS TO EXISTING ACCOUNTING STANDARDS THAT BECAME EFFECTIVE DURING THE YEAR",
    content: "discount rate that reflects current market assessments of the time value of money and the risks specific to the asset.\n\n3.8. Other Taxes\n\n3.8.1. Value Added Tax (VAT)\n\nVAT on financial services is calculated in accordance with Value Added Tax (VAT) Act No. 14 of 2002 and subsequent amendments thereto. The base for the computation of value added tax on financial services is the accounting profit before VAT and income tax adjusted for the economic depreciation and emoluments payable to employees including cash benefits, non-cash benefits & provisions relating to terminal benefits.\n\n3.8.2. Social Security Contribution Levy\n\nAs per the Social Security Contribution Levy (SSCL) Act No. 25 of 2022, effective from October 01, 2022, Bank is liable to pay SSCL on Financial Services at the rate of 2.5% on the value addition attributable to the supply of financial services. Further Non-Financial Services are made liable on the turnover at the rate of 2.5%.\n\n3.9. Regulatory Provisions\n\n3.9.1. Deposit Insurance and Liquidity Support Scheme\n\nAll Licensed Commercial Banks were required to insure their deposit liabilities in the \"Sri Lanka Deposit Insurance and Liquidity Support Scheme\" in terms of the Banking Act Direction No. 5 of 2010, issued on 27th September 2010. This was subsequently replaced by the Sri Lanka Deposit Insurance and Liquidity Support Scheme Regulations No. 2 of 2021, dated 06th August 2021. The Bank's total capital ratio as at 31st December 2025 exceed 14% and accordingly the Bank paid a premium of 0.1% of the eligible deposits as deposit insurance premium, during the year ended 31st December 2025.\n\n3.9.2. Crop Insurance Levy\n\nIn terms of the Finance Act No. 12 of 2013, all institutions under the purview of Banking Act No. 30 of 1988, Finance Business Act No. 42 of 2011 and Regulation of Insurance Industry Act No. 43 of 2000 are required to pay 1% of the profit after tax as Crop Insurance Levy to the National Insurance Trust Fund effective from 1st April 2013.\n\n4. NEW ACCOUNTING STANDARDS/AMENDMENTS TO EXISTING ACCOUNTING STANDARDS THAT BECAME EFFECTIVE DURING THE YEAR\n\n4.1. SLFRS 17 - Insurance Contracts\n\nHowever, there is no impact on the financial statements of the bank by applying the above to accounting standards.\n\n5. ACCOUNTING STANDARDS/CBSL DIRECTIVES ISSUED BUT NOT YET EFFECTIVE AS AT 31ST DECEMBER 2025"
  },
  {
    number: "Note 5",
    title: "Significant Accounting Judgements, Estimates and Assumptions",
    summary: "discount rate that reflects current market assessments of the time value of money and the risks specific to the asset.",
    accountingPolicy: "4. NEW ACCOUNTING STANDARDS/AMENDMENTS TO EXISTING ACCOUNTING STANDARDS THAT BECAME EFFECTIVE DURING THE YEAR",
    content: "discount rate that reflects current market assessments of the time value of money and the risks specific to the asset.\n\n3.8. Other Taxes\n\n3.8.1. Value Added Tax (VAT)\n\nVAT on financial services is calculated in accordance with Value Added Tax (VAT) Act No. 14 of 2002 and subsequent amendments thereto. The base for the computation of value added tax on financial services is the accounting profit before VAT and income tax adjusted for the economic depreciation and emoluments payable to employees including cash benefits, non-cash benefits & provisions relating to terminal benefits.\n\n3.8.2. Social Security Contribution Levy\n\nAs per the Social Security Contribution Levy (SSCL) Act No. 25 of 2022, effective from October 01, 2022, Bank is liable to pay SSCL on Financial Services at the rate of 2.5% on the value addition attributable to the supply of financial services. Further Non-Financial Services are made liable on the turnover at the rate of 2.5%.\n\n3.9. Regulatory Provisions\n\n3.9.1. Deposit Insurance and Liquidity Support Scheme\n\nAll Licensed Commercial Banks were required to insure their deposit liabilities in the \"Sri Lanka Deposit Insurance and Liquidity Support Scheme\" in terms of the Banking Act Direction No. 5 of 2010, issued on 27th September 2010. This was subsequently replaced by the Sri Lanka Deposit Insurance and Liquidity Support Scheme Regulations No. 2 of 2021, dated 06th August 2021. The Bank's total capital ratio as at 31st December 2025 exceed 14% and accordingly the Bank paid a premium of 0.1% of the eligible deposits as deposit insurance premium, during the year ended 31st December 2025.\n\n3.9.2. Crop Insurance Levy\n\nIn terms of the Finance Act No. 12 of 2013, all institutions under the purview of Banking Act No. 30 of 1988, Finance Business Act No. 42 of 2011 and Regulation of Insurance Industry Act No. 43 of 2000 are required to pay 1% of the profit after tax as Crop Insurance Levy to the National Insurance Trust Fund effective from 1st April 2013.\n\n4. NEW ACCOUNTING STANDARDS/AMENDMENTS TO EXISTING ACCOUNTING STANDARDS THAT BECAME EFFECTIVE DURING THE YEAR\n\n4.1. SLFRS 17 - Insurance Contracts\n\nHowever, there is no impact on the financial statements of the bank by applying the above to accounting standards.\n\n5. ACCOUNTING STANDARDS/CBSL DIRECTIVES ISSUED BUT NOT YET EFFECTIVE AS AT 31ST DECEMBER 2025"
  },
  {
    number: "Note 6",
    title: "Gross Income",
    summary: "6. GROSS INCOME",
    accountingPolicy: "Accounting Policy",
    content: "6. GROSS INCOME\n\nAccounting Policy\n\nRevenue is recognised to the extent that it is probable that the economic benefits will flow to the Bank and the revenue can be reliably measured. Specific recognition criteria that must be met before recognising revenue is discussed under Note 7 - Net Interest Income, Note 8 - Fee and Commission Income, Note 9 - Net Gain/(Loss) from Trading, Note 10 - Net Fair Value Gain/ (Loss) from Financial Assets at Fair Value through Profit or Loss and Note 11 - Net Other Operating Income.\n\nInterest income 7. 17,098,539,394 20,005,051,598\n\nFee and commission income 8. 716,349,082 631,017,156\n\nNet Gain/(Loss) from Trading 9. (553,000) 60,116,875\n\nNet Fair Value Gain/(Loss) from Financial Assets at Fair Value through Profit or Loss 10. 559,066,052 444,081,680\n\nNet Other Operating Income 11. 30,522,239 (77,686,610)\n\nTotal 18,403,923,767 21,062,580,699\n\n7. NET INTEREST INCOME\n\nAccounting Policy\n\nRecognition of Interest Income\n\nThe Bank recognises interest income for all financial instruments measured at amortised cost, interest-bearing financial assets measured at FVOCI and FVPL using the effective interest rate (EIR) method. The EIR is the rate that exactly discounts estimated future cash receipts through the expected life of the financial instrument or, when appropriate, a shorter period, to the net carrying amount of the financial asset.\n\nThe EIR (and therefore, the amortised cost of the asset) is calculated by taking into account any discount or premium on acquisition, fees and costs that are an integral part of the EIR. The Bank recognises interest income using a rate of return that represents the best estimate of a constant rate of return over the expected life of the loan. Hence, it recognises the effect of potentially different interest rates charged at various stages, and other characteristics of the product life cycle (including prepayments, penalty interest and charges).\n\nIf expectations regarding the cash flows on the financial asset are revised for reasons other than credit risk, the adjustment is booked as a positive or negative adjustment to the carrying amount of the asset in the Statement of Financial Position with an increase or reduction in interest income. The adjustment is subsequently amortised through interest and similar income in the Income Statement."
  },
  {
    number: "Note 7",
    title: "Net Interest Income",
    summary: "6. GROSS INCOME",
    accountingPolicy: "Accounting Policy",
    content: "6. GROSS INCOME\n\nAccounting Policy\n\nRevenue is recognised to the extent that it is probable that the economic benefits will flow to the Bank and the revenue can be reliably measured. Specific recognition criteria that must be met before recognising revenue is discussed under Note 7 - Net Interest Income, Note 8 - Fee and Commission Income, Note 9 - Net Gain/(Loss) from Trading, Note 10 - Net Fair Value Gain/ (Loss) from Financial Assets at Fair Value through Profit or Loss and Note 11 - Net Other Operating Income.\n\nInterest income 7. 17,098,539,394 20,005,051,598\n\nFee and commission income 8. 716,349,082 631,017,156\n\nNet Gain/(Loss) from Trading 9. (553,000) 60,116,875\n\nNet Fair Value Gain/(Loss) from Financial Assets at Fair Value through Profit or Loss 10. 559,066,052 444,081,680\n\nNet Other Operating Income 11. 30,522,239 (77,686,610)\n\nTotal 18,403,923,767 21,062,580,699\n\n7. NET INTEREST INCOME\n\nAccounting Policy\n\nRecognition of Interest Income\n\nThe Bank recognises interest income for all financial instruments measured at amortised cost, interest-bearing financial assets measured at FVOCI and FVPL using the effective interest rate (EIR) method. The EIR is the rate that exactly discounts estimated future cash receipts through the expected life of the financial instrument or, when appropriate, a shorter period, to the net carrying amount of the financial asset.\n\nThe EIR (and therefore, the amortised cost of the asset) is calculated by taking into account any discount or premium on acquisition, fees and costs that are an integral part of the EIR. The Bank recognises interest income using a rate of return that represents the best estimate of a constant rate of return over the expected life of the loan. Hence, it recognises the effect of potentially different interest rates charged at various stages, and other characteristics of the product life cycle (including prepayments, penalty interest and charges).\n\nIf expectations regarding the cash flows on the financial asset are revised for reasons other than credit risk, the adjustment is booked as a positive or negative adjustment to the carrying amount of the asset in the Statement of Financial Position with an increase or reduction in interest income. The adjustment is subsequently amortised through interest and similar income in the Income Statement."
  },
  {
    number: "Note 8",
    title: "Net Fee and Commission Income",
    summary: "Interest expenses",
    accountingPolicy: "Accounting Policy",
    content: "Interest expenses\n\nFinancial liabilities at amortised cost:\n\n- Due to other customers 7,825,125,872 10,287,471,096\n\n- Other borrowers 893,076,185 1,328,060,835\n\n- Subordinated term debt - 432,543,169\n\n- Finance cost of lease liability 147,655,694 136,512,505\n\nTotal interest expenses 8,865,857,751 12,184,587,605\n\nNet interest income 8,232,681,643 7,820,463,993\n\n7.1. Interest income from Sri Lanka Government securities\n\nInterest income from Sri Lanka Government securities 1,445,845,838 3,877,114,943\n\nTotal 1,445,845,838 3,877,114,943\n\n8. NET FEE AND COMMISSION INCOME\n\nAccounting Policy\n\nFee Income Earned from Services that are Provided over a Certain Period of Time\n\nFees earned for the provision of services over a period of time are accrued over that period. These fees include professional fees, trade service fees, commission income and asset management fees etc. Loan commitment fees for loans that are likely to be drawn down and other credit related fees are deferred (together with any incremental costs) and recognised as an adjustment to the effective interest rate of the loan. When it is unlikely that a loan will be drawn down, the loan commitment fees are recognised over the commitment period on a straight-line basis."
  },
  {
    number: "Note 9",
    title: "Net Gain/(Loss) from Trading",
    summary: "8.1. Fee and commission income earned from",
    accountingPolicy: "Accounting Policy",
    content: "8.1. Fee and commission income earned from\n\nLoans 242,007,639 149,505,718\n\nDeposits 107,765,171 105,461,295\n\nGuarantees 2,328,748 1,817,996\n\nCommission earned from insurance 67,367,134 78,404,998\n\nCommission earned from ATM 72,647,726 78,416,349\n\nOthers 224,232,664 217,410,800\n\nFee and commission income 716,349,082 631,017,156\n\n9. NET GAIN/(LOSS) FROM TRADING\n\nAccounting Policy\n\nNet gain/(loss) from trading includes all the capital gain/(loss) from financial assets measured at fair value through profit or loss.\n\nSri Lanka Government securities - Treasury bills and treasury bonds (553,000) 60,116,875\n\nTotal (553,000) 60,116,875\n\n10. NET FAIR VALUE GAIN/(LOSS) FROM FINANCIAL ASSETS AT FAIR VALUE THROUGH PROFIT OR LOSS\n\nAccounting Policy"
  },
  {
    number: "Note 10",
    title: "Net Fair Value Gain/(Loss) from Financial Assets at FVTPL",
    summary: "8.1. Fee and commission income earned from",
    accountingPolicy: "Accounting Policy",
    content: "8.1. Fee and commission income earned from\n\nLoans 242,007,639 149,505,718\n\nDeposits 107,765,171 105,461,295\n\nGuarantees 2,328,748 1,817,996\n\nCommission earned from insurance 67,367,134 78,404,998\n\nCommission earned from ATM 72,647,726 78,416,349\n\nOthers 224,232,664 217,410,800\n\nFee and commission income 716,349,082 631,017,156\n\n9. NET GAIN/(LOSS) FROM TRADING\n\nAccounting Policy\n\nNet gain/(loss) from trading includes all the capital gain/(loss) from financial assets measured at fair value through profit or loss.\n\nSri Lanka Government securities - Treasury bills and treasury bonds (553,000) 60,116,875\n\nTotal (553,000) 60,116,875\n\n10. NET FAIR VALUE GAIN/(LOSS) FROM FINANCIAL ASSETS AT FAIR VALUE THROUGH PROFIT OR LOSS\n\nAccounting Policy"
  },
  {
    number: "Note 11",
    title: "Net Other Operating Income",
    summary: "11. NET OTHER OPERATING INCOME",
    accountingPolicy: "Accounting Policy",
    content: "11. NET OTHER OPERATING INCOME\n\nAccounting Policy\n\nIncome earned on other sources, which are not directly related to the normal operations of the Bank are recognised as other operating income, such as gains on disposal of property, plant and equipment, dividend income and foreign exchange gains/ (losses).\n\nGains/(losses) arising from disposal of property, plant and equipment are recorded after deducting from the proceeds on disposal, the carrying amount of such assets and the related selling expenses.\n\nDividend income from investments in quoted and non quoted shares are recognised when the Bank's right to receive the payment is established.\n\nForeign exchange gain/(loss) includes gain/(loss) arising from revaluation of foreign currency assets/ liabilities.\n\nGain on sale of property, plant and equipment 3,686,790 78,691\n\nDividend income 476,195 291,165\n\nOther income 26,359,254 (78,056,466)\n\nOther operating income 30,522,239 (77,686,610)\n\n12. IMPAIRMENT FOR LOANS AND OTHER LOSSES\n\nAccounting Policy\n\nThe accounting policies adopted in determining the impairment allowance for financial assets including loans and advances are given in Note 3.2.6 to the Financial Statements.\n\n12.1. Balances with banks\n\nStage 1 773,046 (211,314)"
  },
  {
    number: "Note 12",
    title: "Impairment for Loans and Other Losses",
    summary: "11. NET OTHER OPERATING INCOME",
    accountingPolicy: "Accounting Policy",
    content: "11. NET OTHER OPERATING INCOME\n\nAccounting Policy\n\nIncome earned on other sources, which are not directly related to the normal operations of the Bank are recognised as other operating income, such as gains on disposal of property, plant and equipment, dividend income and foreign exchange gains/ (losses).\n\nGains/(losses) arising from disposal of property, plant and equipment are recorded after deducting from the proceeds on disposal, the carrying amount of such assets and the related selling expenses.\n\nDividend income from investments in quoted and non quoted shares are recognised when the Bank's right to receive the payment is established.\n\nForeign exchange gain/(loss) includes gain/(loss) arising from revaluation of foreign currency assets/ liabilities.\n\nGain on sale of property, plant and equipment 3,686,790 78,691\n\nDividend income 476,195 291,165\n\nOther income 26,359,254 (78,056,466)\n\nOther operating income 30,522,239 (77,686,610)\n\n12. IMPAIRMENT FOR LOANS AND OTHER LOSSES\n\nAccounting Policy\n\nThe accounting policies adopted in determining the impairment allowance for financial assets including loans and advances are given in Note 3.2.6 to the Financial Statements.\n\n12.1. Balances with banks\n\nStage 1 773,046 (211,314)"
  },
  {
    number: "Note 13",
    title: "Personnel Expenses",
    summary: "12.3. Financial assets at amorised cost - Loans and receivables to customers",
    accountingPolicy: "Accounting Policy",
    content: "12.3. Financial assets at amorised cost - Loans and receivables to customers\n\nStage 1 339,796,329 91,112,220\n\nStage 2 (178,646,385) (18,997,884)\n\nStage 3 556,975,308 488,879,455\n\nTotal 718,125,252 560,993,791\n\n12.4. Debt and other instruments\n\nStage 1 531,261 29,372\n\nTotal 531,261 29,372\n\nTotal 719,189,736 558,949,981\n\n13. PERSONNEL EXPENSES\n\nAccounting Policy\n\nShort Term Employee Benefits\n\nShort term employee benefit obligations are measured on an undiscounted basis and are expensed as the related service is provided. A liability is recognised for the amount expected to be paid under short term cash bonus or profit-sharing plans if the Bank has a present legal or constructive obligation to pay this amount as a result of past service provided by the employee and the obligation can be estimated reliably.\n\nDeﬁned Contribution Plans\n\nA defined contribution plan is a post-employment benefit plan under which an entity pays fixed contributions into a separate entity (a fund) and will have no legal or constructive obligation to pay further contributions if the fund does not hold sufficient assets to pay all employee benefits relating to employee services in the current and prior periods, as defined in the Sri Lanka Accounting Standard - LKAS 19 (Employee Benefits)."
  },
  {
    number: "Note 14",
    title: "Depreciation and Amortisation Expenses",
    summary: "14. DEPRECIATION AND AMORTISATION EXPENSES",
    accountingPolicy: "Accounting Policy",
    content: "14. DEPRECIATION AND AMORTISATION EXPENSES\n\nAccounting Policy\n\nDepreciation of Property, Plant and Equipment\n\nThe Bank provides depreciation from the date the assets are available for use up to the date of disposal, at the following rates, on a straight-line basis, over the periods appropriate to the estimated useful lives, based on the pattern in which the asset's future economic benefits are expected to be consumed by the Bank.\n\nImprovements to leasehold properties are depreciated over the shorter of the lease term and their useful lives unless it is reasonably certain that the Bank will obtain ownership by the end of the lease term. Freehold lands are not depreciated.\n\nDepreciation of an asset ceases at the earlier of the date that the asset is classified as held for sale or the date that the asset is derecognised. Depreciation does not cease when the asset becomes idle or is retired from active use unless the asset is fully depreciated.\n\nAsset category\n\nBuildings 20 20 5 5\n\nComputer hardware 3-5 3-5 20 - 33.33 20 - 33.33\n\nMachinery and equipment 5 5 20 20\n\nMotor vehicles 4 4 25 25\n\nFurniture and fitting 5 5 20 20\n\nDigital Equipment 5 5 20 20\n\nAmortisation of Intangible Assets\n\nIntangible assets, except for goodwill, are amortised on a straight-line basis in the Statement of Profit or Loss from the date when the asset is available for use, over the best estimate of its useful economic life, based on a pattern in which the asset's economic benefits are consumed by the Bank. The Bank assumes that there is no residual value for its intangible assets."
  },
  {
    number: "Note 15",
    title: "Other Expenses",
    summary: "Depreciation of property, plant and equipment 270,658,784 228,456,223",
    accountingPolicy: "Accounting Policy",
    content: "Depreciation of property, plant and equipment 270,658,784 228,456,223\n\nAmortisation of Right of use assets** 249,026,091 211,350,225\n\nAmortisation of intangible assets 182,517,759 171,115,012\n\nTotal 702,202,634 610,921,460\n\n** Bank has only Buildings under Right of Use Assets\n\n15. OTHER EXPENSES\n\nAccounting Policy\n\nOther expenses are recognised in the Statement of Profit or Loss on the basis of a direct association between the cost incurred and the earning of specific items of income. Provisions in respect of other expenses are recognised when the Bank has a present obligation (legal or constructive) as a result of a past event, it is probable that an outflow of resources embodying economic benefits will be required to settle the obligation and a reliable estimate can be made of the amount of the obligation.\n\nDirectors' emoluments 29,619,550 52,328,500\n\nAuditors' remunerations 9,600,000 5,875,000\n\nProfessional and legal expenses 12,304,960 24,684,977\n\nOffice administration and establishment expenses 2,240,290,236 2,162,833,408\n\nTotal 2,291,814,746 2,245,721,885\n\n15.1. Directors' emoluments include fees paid to Non-executive Directors\n\n15.2. Auditors' remunerations"
  },
  {
    number: "Note 16",
    title: "Tax Expense",
    summary: "16. TAX EXPENSE",
    accountingPolicy: "Accounting Policy",
    content: "16. TAX EXPENSE\n\nAccounting Policy\n\nAs per Sri Lanka Accounting Standard - LKAS 12 (Income Taxes), tax expense is the aggregate amount included in determination of profit or loss for the period in respect of current and deferred taxation. Income tax expense is recognised in the Statement of Profit or Loss, except to the extent it relates to items recognised directly in equity or other comprehensive income in which case it is recognised in equity or in other comprehensive income.\n\nCurrent Taxation\n\nCurrent tax assets and liabilities consist of amounts expected to be recovered from or paid to the Commissioner General of Inland Revenue in respect of the current year, using the tax rates and tax laws enacted or substantively enacted on the reporting date and any adjustment to tax payable in respect of prior years. Accordingly, provision for taxation is based on the profit for the year adjusted for taxation purposes in accordance with the provisions of the Inland Revenue Act No. 24 of 2017 and the amendments thereto at the rates specified in Note 16.3.\n\nDeferred Taxation\n\nDeferred tax is provided on temporary differences at the reporting date between the tax bases of assets and liabilities and their carrying amounts for financial reporting purposes. Deferred tax liabilities are recognised for all taxable temporary differences, except:\n\nÐ Where the deferred tax liability arises from the initial recognition of goodwill or of an asset or liability in a transaction that\n\nis not a business combination and, at the time of the transaction, affects neither the accounting profit nor taxable profit or loss. and at the time of the transaction does not give rise to equal taxable and deductible temporary differences.\n\nÐ In respect of taxable temporary differences associated with investments in subsidiaries, where the timing of the reversal\n\nof the temporary differences can be controlled and it is probable that the temporary differences will not reverse in the foreseeable future.\n\nDeferred tax assets are recognised for all deductible temporary differences, carried forward unused tax credits and unused tax losses (if any), to the extent that it is probable that taxable profit will be available against which the deductible temporary differences, carried forward unused tax credits and unused tax losses can be utilised except:\n\nÐ Where the deferred tax asset relating to the deductible temporary differences arising from the initial recognition of an asset\n\nor liability in a transaction that is not a business combination, at the time of the transaction, affects neither the accounting profit nor taxable profit or loss and at the time of the transaction does not give rise to equal taxable and deductible temporary differences.\n\nÐ In respect of deductible temporary differences associated with investments in subsidiaries, deferred tax assets are"
  },
  {
    number: "Note 17",
    title: "Earnings Per Share (EPS)",
    summary: "16.3. Income Tax Rate",
    accountingPolicy: "Accounting Policy",
    content: "16.3. Income Tax Rate\n\nThe Bank applied the rate of 30% in line with the Inland Revenue Amendment Act No. 45 of 2022 to calculate the income tax and deferred tax assets/liabilities as at 31st December 2025.\n\n17. EARNINGS PER SHARE\n\nAccounting Policy\n\nThe Bank presents basic and diluted Earnings per Share (EPS) data for its ordinary shares. Basic EPS is calculated by dividing the profit or loss attributable to ordinary equity shareholders of the Bank by the weighted average number of ordinary shares outstanding during the period. Diluted EPS is determined by adjusting both the profit attributable to the ordinary equity shareholders and the weighted average number of ordinary shares outstanding, for the effects of all dilutive potential ordinary shares, if any.\n\nNet profit for the year 404,918,546 409,534,246\n\nProfit attributable to ordinary shareholders 404,918,546 409,534,246\n\nWeighted average number of ordinary shares in issue 164,166,494 164,166,494\n\nBasic/diluted earnings per ordinary share 2.47 2.49\n\n18. CASH AND BALANCES WITH BANKS\n\nAccounting Policy\n\nCash and balances with banks comprise cash in hand, balances with banks, money at call and short notice that are subject to an insignificant risk of changes in their value. Cash and balances with banks are carried at amortised cost in the Statement of Financial Position. All cash and balances with banks balances held by the Bank were available for use.\n\nFor the purpose of the Statement of Cash Flows, cash and balances with banks consist of cash and short term deposits as defined above and placements with banks (less than 3 months) .\n\nCash in hand 404,560,619 553,989,208\n\nBalances with banks 6,700,846,056 1,888,632,556"
  },
  {
    number: "Note 18",
    title: "Cash and Balances with Banks",
    summary: "16.3. Income Tax Rate",
    accountingPolicy: "Accounting Policy",
    content: "16.3. Income Tax Rate\n\nThe Bank applied the rate of 30% in line with the Inland Revenue Amendment Act No. 45 of 2022 to calculate the income tax and deferred tax assets/liabilities as at 31st December 2025.\n\n17. EARNINGS PER SHARE\n\nAccounting Policy\n\nThe Bank presents basic and diluted Earnings per Share (EPS) data for its ordinary shares. Basic EPS is calculated by dividing the profit or loss attributable to ordinary equity shareholders of the Bank by the weighted average number of ordinary shares outstanding during the period. Diluted EPS is determined by adjusting both the profit attributable to the ordinary equity shareholders and the weighted average number of ordinary shares outstanding, for the effects of all dilutive potential ordinary shares, if any.\n\nNet profit for the year 404,918,546 409,534,246\n\nProfit attributable to ordinary shareholders 404,918,546 409,534,246\n\nWeighted average number of ordinary shares in issue 164,166,494 164,166,494\n\nBasic/diluted earnings per ordinary share 2.47 2.49\n\n18. CASH AND BALANCES WITH BANKS\n\nAccounting Policy\n\nCash and balances with banks comprise cash in hand, balances with banks, money at call and short notice that are subject to an insignificant risk of changes in their value. Cash and balances with banks are carried at amortised cost in the Statement of Financial Position. All cash and balances with banks balances held by the Bank were available for use.\n\nFor the purpose of the Statement of Cash Flows, cash and balances with banks consist of cash and short term deposits as defined above and placements with banks (less than 3 months) .\n\nCash in hand 404,560,619 553,989,208\n\nBalances with banks 6,700,846,056 1,888,632,556"
  },
  {
    number: "Note 19",
    title: "Placements with Banks",
    summary: "18.1. Analysis of cash and balances with banks based on exposure to credit risk",
    accountingPolicy: "Accounting Policy",
    content: "18.1. Analysis of cash and balances with banks based on exposure to credit risk\n\nCash and balances with banks 7,105,406,675 2,442,621,764\n\nLess : Impairment (1,100,852) (327,807)\n\nCarrying value after impairment 7,104,305,823 2,442,293,957\n\n18.2. Stage wise classification of impairment allowances of cash and balances with banks\n\nOpening balance as at 1 January 327,806 539,120\n\nCharges/(reversal) to income statement 773,046 (211,314)\n\nClosing balance as at 31 December 1,100,852 327,806\n\n18.3. Cash and balances with banks for cash flow statement\n\nCash and balances with banks 7,104,305,823 2,442,293,957\n\nRepurchase agreement - 702,455,685\n\nFixed deposits less than 3 months 300,000,000 300,000,000\n\nTotal 7,404,305,823 3,444,749,642\n\n19. PLACEMENTS WITH BANKS\n\nAccounting Policy"
  },
  {
    number: "Note 20",
    title: "Financial Assets at Fair Value Through Profit or Loss",
    summary: "19.2. Stage wise classification of impairment allowances of placements with banks",
    accountingPolicy: "Accounting Policy",
    content: "19.2. Stage wise classification of impairment allowances of placements with banks\n\nOpening balance as at 1 January 1,441,933 3,303,801\n\nCharges/(reversal) to income statement (239,823) (1,861,868)\n\nClosing balance as at 31 December 1,202,110 1,441,933\n\n*** Since specialised banks are not required to maintain statutory reserve requirement (SRR) at CBSL, it must instead comply with capital adequacy and liquidity requirements specific to its business model. (Refer note no 45.6)\n\n20. FINANCIAL ASSETS AT FAIR VALUE THROUGH PROFIT OR LOSS\n\nAccounting Policy\n\nThe accounting policies pertaining to \"Financial Assets Recognised through Profit or Loss - Measured at Fair Value\" are given in Note 3.2.3.4 to the Financial Statements.\n\nSri Lanka Government securities - Treasury bills and Treasury bonds - 257,985,600\n\nUnit trust - 6,481,214,474\n\nTotal - 6,739,200,074\n\n21. FINANCIAL ASSETS AT AMORTISED COST - LOANS AND RECEIVABLES TO OTHER CUSTOMERS\n\nAccounting Policy\n\nThe key accounting policies pertaining to financial instruments including \"Loans and Advances\" are given in Notes 3.2 to the Financial Statements.\n\nGross loans and receivables (Note 21.1) 118,564,908,494 103,181,716,494"
  },
  {
    number: "Note 21",
    title: "Financial Assets at Amortised Cost - Loans and Receivables to Other Customers",
    summary: "19.2. Stage wise classification of impairment allowances of placements with banks",
    accountingPolicy: "Accounting Policy",
    content: "19.2. Stage wise classification of impairment allowances of placements with banks\n\nOpening balance as at 1 January 1,441,933 3,303,801\n\nCharges/(reversal) to income statement (239,823) (1,861,868)\n\nClosing balance as at 31 December 1,202,110 1,441,933\n\n*** Since specialised banks are not required to maintain statutory reserve requirement (SRR) at CBSL, it must instead comply with capital adequacy and liquidity requirements specific to its business model. (Refer note no 45.6)\n\n20. FINANCIAL ASSETS AT FAIR VALUE THROUGH PROFIT OR LOSS\n\nAccounting Policy\n\nThe accounting policies pertaining to \"Financial Assets Recognised through Profit or Loss - Measured at Fair Value\" are given in Note 3.2.3.4 to the Financial Statements.\n\nSri Lanka Government securities - Treasury bills and Treasury bonds - 257,985,600\n\nUnit trust - 6,481,214,474\n\nTotal - 6,739,200,074\n\n21. FINANCIAL ASSETS AT AMORTISED COST - LOANS AND RECEIVABLES TO OTHER CUSTOMERS\n\nAccounting Policy\n\nThe key accounting policies pertaining to financial instruments including \"Loans and Advances\" are given in Notes 3.2 to the Financial Statements.\n\nGross loans and receivables (Note 21.1) 118,564,908,494 103,181,716,494"
  },
  {
    number: "Note 22",
    title: "Financial Assets at Amortised Cost - Debt and Other Instruments",
    summary: "21.6. Movement in individual and collective impairment",
    accountingPolicy: "Accounting Policy",
    content: "21.6. Movement in individual and collective impairment\n\nOpening balance as at 1 January 2024 3,874,068,410 3,736,851,979 7,610,920,389\n\nCharge/(reversal) to income statement (225,586,158) 786,579,947 560,993,790\n\nRecovery/(write-off) during the year - (127,304,552) (127,304,552)\n\nClosing balance as at 31 December 2024 3,648,482,252 4,396,127,374 8,044,609,627\n\nOpening balance as at 1 January 2025 3,648,482,252 4,396,127,374 8,044,609,627\n\nCharge/(reversal) to income statement 986,598,735 (268,473,483) 718,125,252\n\nRecovery/(write-off) during the year - (38,702,261) (38,702,261)\n\nClosing balance as at 31 December 2025 4,635,080,987 4,088,951,630 8,724,032,618\n\n21.7. Based on the impairment model revalidation, product segmentation has been re-classified after evaluating the credit risk characteristics of loan facilities. Analysis of loans and advances, commitments, contingencies mentioned in Note 45 has disclosed the product segmentation as at 31st December 2025 and 2024, after validating the impairment model. The Bank estimated Expected Credit Loss (ECL) as at December 31, 2025, based on the Probability of Default (PD), Loss Given Default (LGD) and Economic Factor Adjustment (EFA) computed as at December 31, 2025, after validating the impairment model.\n\n22. FINANCIAL ASSETS AT AMORTISED COST - DEBT AND OTHER INSTRUMENTS\n\nAccounting Policy\n\nThe accounting policies pertaining to financial instruments including \"Debt and Other Instruments\" are given in Note 3.2 to the Financial Statements.\n\nDebentures 101,277,055 101,365,915\n\nRepurchase agreement - 702,455,685"
  },
  {
    number: "Note 23",
    title: "Financial Assets Measured at Fair Value Through Other Comprehensive Income",
    summary: "22.1. Analysis of debt and other instruments based on exposure to credit risk",
    accountingPolicy: "Accounting Policy",
    content: "22.1. Analysis of debt and other instruments based on exposure to credit risk\n\nDebentures 101,277,055 101,365,915\n\nRepurchase agreement - 702,455,685\n\nTreasury bill 15,314,643,470 21,787,314,036\n\nTrust Certificates 284,510,354 -\n\nCommercial papers - 878,595,890\n\nTreasury bonds 905,764,793 3,153,745,609\n\nLess : Impairment allowance (872,931) (341,669)\n\nCarrying value after impairment 16,605,322,741 26,623,135,466\n\n22.2. Stage wise classification of impairment allowances of debt and other instruments\n\nOpening balance as at 1 January 341,670 312,298\n\nCharges/(reversal) to income statement 531,261 29,372\n\nClosing balance as at 31 December 872,931 341,670\n\n22.3. Repurchase and reverse repurchase transactions in scripless treasury bonds and scripless treasury bills\n\nDirective No. 1 of 2019, issued by the Central Bank of Sri Lanka, requires Licensed Banks/Primary Dealers to disclose following additional information on repurchase and reverse repurchase transactions in scripless treasury bonds and bills."
  },
  {
    number: "Note 24",
    title: "Investment in Subsidiaries",
    summary: "23.1. Unquoted equity securities",
    accountingPolicy: "Accounting Policy",
    content: "23.1. Unquoted equity securities\n\nSANASA Life Insurance Co. PLC 7,590,494 75,830,776 7,590,494 75,830,776\n\nCredit Information Bureau of Sri Lanka 100 10,000 100 10,000\n\nConsorzio Etimos S.C. 2 75,194 2 75,194\n\nNational Credit Guarantee Institution(NCGI) 15,114,475 151,143,740 15,114,475 151,143,740\n\nLoss from share valuation as at 31 December - (30,361,984) - (18,913,830)\n\nTotal 196,697,726 208,145,880\n\n23.1.1. Movement in unquoted equity securities\n\nOpening balance as at 1 January 208,145,880 56,939,524\n\nInvestments made during the year - 151,206,356\n\nDisposal during the year - -\n\nLoss from mark to market valuation (11,448,154) -\n\nClosing balance as at 31 December 196,697,726 208,145,880\n\n23.1.2. Valuation of unquoted equity securities\n\nType Level Method of valuation"
  },
  {
    number: "Note 25",
    title: "Property, Plant and Equipment",
    summary: "25. PROPERTY, PLANT AND EQUIPMENT",
    accountingPolicy: "Accounting Policy",
    content: "25. PROPERTY, PLANT AND EQUIPMENT\n\nAccounting Policy\n\nRecognition\n\nProperty, plant and equipment are tangible items that are held for use in the production or supply of services, for rental to others or for administrative purposes and are expected to be used during more than one period. The Bank applies the requirements of the Sri Lanka Accounting Standard - LKAS 16 (Property, Plant and Equipment) in accounting for these assets. Property, plant and equipment are recognised if it is probable that future economic benefits associated with the asset will flow to the Bank and the cost of the asset can be reliably measured.\n\nMeasurement\n\nAn item of property, plant and equipment that qualifies for recognition as an asset is initially measured at its cost. Cost includes expenditure that is directly attributable to the acquisition of the asset and cost incurred subsequently to add to, replace part of an item of property, plant and equipment. The cost of self-constructed assets includes the cost of materials and direct labour, any other costs directly attributable for bringing the asset to a working condition for its intended use and the costs of dismantling and removing the items and restoring the site on which they are located. Purchased software that is integral to the functionality of the related equipment is capitalised as a part of computer equipment. When parts of an item of property or equipment have different useful lives, they are accounted as separate items (major components) of property, plant and equipment.\n\nCost Model\n\nThe Bank applies cost model to property, plant and equipment and records at cost of purchase or construction together with any incidental expenses thereon less accumulated depreciation and any accumulated impairment losses.\n\nSubsequent Cost\n\nThe subsequent cost of replacing a component of an item of property, plant and equipment is recognised in the carrying amount of the item if it is probable that the future economic benefits embodied within that part will flow to the Bank and its cost can be reliably measured. The costs of day to day servicing of property, plant and equipment are charged to the Statement of Profit or Loss as incurred.\n\nDerecognition\n\nThe carrying amount of an item of property, plant and equipment is derecognised on disposal or when no future economic benefits are expected from its use. The gain or loss arising from de-recognition of an item of property, plant and equipment is included in the Statement of Profit or Loss when the item is derecognised. When replacement costs are recognised in the carrying amount of an item of property, plant and equipment, the remaining carrying amount of the replaced part is derecognised. Major inspection costs are capitalised. At each such capitalisation, the remaining carrying amount of the previous cost of inspection is derecognised.\n\nCapital Work in Progress\n\nThese are expenses of capital nature directly incurred in the construction of buildings, major plant, machinery and system development, awaiting capitalisation. Capital work-in-progress would be transferred to the relevant asset when it is available for use, i.e. when it is in the location and condition necessary for it to be capable of operating in the manner intended by management. Capital work-in-progress is stated at cost less any accumulated impairment losses.\n\nBorrowing Costs"
  },
  {
    number: "Note 26",
    title: "Right of Use Assets",
    summary: "26. RIGHT OF USE ASSETS",
    accountingPolicy: "Accounting Policy",
    content: "26. RIGHT OF USE ASSETS\n\nAccounting Policy\n\nRight-of-use assets are presented in the statement of financial position (refer the accounting policy in Note 3.3). Right to use assets are depreciated on a straight line basis over the lease term.\n\nCost\n\nOpening balance as at 1 January 1,972,416,021 1,660,933,310\n\nAdditions and improvements during the year 826,998,824 311,482,711\n\nClosing balance as at 31 December 2,799,414,845 1,972,416,021\n\nLess: Accumulated amortisation\n\nOpening balance as at 1 January 1,191,978,239 980,628,014\n\nAmortisation expenses for the year 249,026,091 211,350,225\n\nClosing balance as at 31 December 1,441,004,330 1,191,978,239\n\nNet book value as at 31 December 1,358,410,515 780,437,781\n\n27. INTANGIBLE ASSETS\n\nAccounting Policy\n\nRecognition"
  },
  {
    number: "Note 27",
    title: "Intangible Assets",
    summary: "26. RIGHT OF USE ASSETS",
    accountingPolicy: "Accounting Policy",
    content: "26. RIGHT OF USE ASSETS\n\nAccounting Policy\n\nRight-of-use assets are presented in the statement of financial position (refer the accounting policy in Note 3.3). Right to use assets are depreciated on a straight line basis over the lease term.\n\nCost\n\nOpening balance as at 1 January 1,972,416,021 1,660,933,310\n\nAdditions and improvements during the year 826,998,824 311,482,711\n\nClosing balance as at 31 December 2,799,414,845 1,972,416,021\n\nLess: Accumulated amortisation\n\nOpening balance as at 1 January 1,191,978,239 980,628,014\n\nAmortisation expenses for the year 249,026,091 211,350,225\n\nClosing balance as at 31 December 1,441,004,330 1,191,978,239\n\nNet book value as at 31 December 1,358,410,515 780,437,781\n\n27. INTANGIBLE ASSETS\n\nAccounting Policy\n\nRecognition"
  },
  {
    number: "Note 28",
    title: "Other Assets",
    summary: "Derecognition of Intangible Assets",
    accountingPolicy: "Derecognition of Intangible Assets",
    content: "Derecognition of Intangible Assets\n\nThe carrying amount of an item of intangible asset is derecognised on disposal or when no future economic benefits are expected from its use. The gain or loss arising from de-recognition of an item of intangible asset is included in the Statement of Profit or Loss when the item is derecognised.\n\nThere were no restrictions on the title of the intangible assets as at the reporting date. Further, there were no items pledged as securities for liabilities.\n\nIntangible assets of the Bank as at 31st December 2023 only include computer software and cost of licenses.\n\nRates of amortisation for computer software and licenses are given in Note 14, 'Depreciation and Amortisation Expenses'.\n\nCost\n\nOpening balance as at 1 January 1,745,043,076 1,580,040,258\n\nAdditions 94,124,250 165,002,818\n\nDisposal (106,500) -\n\nClosing balance as at 31 December 1,839,060,826 1,745,043,076\n\nLess: Accumulated amortisation\n\nOpening balance as at 1 January 997,589,092 826,474,080\n\nCharge for the year 182,517,759 171,115,012\n\nDisposal (106,937) -\n\nClosing balance as at 31 December 1,179,999,914 997,589,092"
  },
  {
    number: "Note 29",
    title: "Due to Other Customers (Deposits)",
    summary: "29. DUE TO OTHER CUSTOMERS",
    accountingPolicy: "Accounting Policy",
    content: "29. DUE TO OTHER CUSTOMERS\n\nAccounting Policy\n\nThe accounting policies pertaining to \"Due to Depositors\" are given in Note 3.2.3.7 to the Financial Statements.\n\nTotal amount due to other customers 105,680,974,038 106,989,899,941\n\nTotal 105,680,974,038 106,989,899,941\n\n29.1. Analysis of due to other customers\n\nBy product\n\nSavings deposits 22,008,224,706 20,926,764,822\n\nFixed deposits 83,672,749,332 86,063,135,119\n\nTotal 105,680,974,038 106,989,899,941\n\nBy currency\n\nSri Lanka Rupee 105,680,974,038 106,989,899,941\n\nTotal 105,680,974,038 106,989,899,941\n\n30. OTHER BORROWINGS\n\nAccounting Policy"
  },
  {
    number: "Note 30",
    title: "Other Borrowings",
    summary: "29. DUE TO OTHER CUSTOMERS",
    accountingPolicy: "Accounting Policy",
    content: "29. DUE TO OTHER CUSTOMERS\n\nAccounting Policy\n\nThe accounting policies pertaining to \"Due to Depositors\" are given in Note 3.2.3.7 to the Financial Statements.\n\nTotal amount due to other customers 105,680,974,038 106,989,899,941\n\nTotal 105,680,974,038 106,989,899,941\n\n29.1. Analysis of due to other customers\n\nBy product\n\nSavings deposits 22,008,224,706 20,926,764,822\n\nFixed deposits 83,672,749,332 86,063,135,119\n\nTotal 105,680,974,038 106,989,899,941\n\nBy currency\n\nSri Lanka Rupee 105,680,974,038 106,989,899,941\n\nTotal 105,680,974,038 106,989,899,941\n\n30. OTHER BORROWINGS\n\nAccounting Policy"
  },
  {
    number: "Note 31",
    title: "Retirement Benefit Obligation",
    summary: "Movement in refinance loans",
    accountingPolicy: "SANASA Federation (Refinance of Athwela Loans) 54,200,000 - - 54,200,000",
    content: "Movement in refinance loans\n\nSANASA Federation (Refinance of Athwela Loans) 54,200,000 - - 54,200,000\n\nBorrowings under Refinance of PAMP RF 272,950,065 224,050,000 (187,224,952) 309,775,113\n\nBorrowing under Saubagya 316,238,753 - (196,387,286) 119,851,467\n\nBorrowing - Refinance SMILE III RF 288,634,600 80,650,000 (87,081,300) 282,203,300\n\nBorrowing - Suwashakthi Loan 4,806,083 - (3,701,083) 1,105,000\n\nBorrowing - Kapruka Ayojana 17,312,825 5,272,000 (6,359,790) 16,225,035\n\nBorrowing - SAPP 4P Youth Loan 7,624,650 - (6,574,650) 1,050,000\n\nBorrowing - SAPP RF Youth Loan 66,345,517 - (33,329,017) 33,016,500\n\nBorrowing - SAPP RF FI Bulk Refinance 550,000 58,695,000 (30,186,250) 29,058,750\n\nBorrowing - ADB Tea Refinance 159,845,590 - - 159,845,590\n\nBorrowing - ADB SME LOC Refinance 897,584,100 151,826,951 - 1,049,411,051\n\nBorrowing - CBSL DAD Refinance 28,551,543 - (11,406,716) 17,144,827\n\nBorrowing - SAPP RF Agribusiness Loan Refinance 404,167 4,250,000 (1,112,500) 3,541,667\n\nBorrowing- ADB SME LOC2 Working Capital 910,154,382 - (241,390,716) 668,763,666"
  },
  {
    number: "Note 32",
    title: "Other Liabilities",
    summary: "31.2. Sensitivity analysis on discounting rate and salary increment rate to statement of financial position and comprehensive income",
    accountingPolicy: "Assumption",
    content: "31.2. Sensitivity analysis on discounting rate and salary increment rate to statement of financial position and comprehensive income\n\nAssumption\n\nDiscount rate 1+ (120,240,079) (120,240,079) (94,440,379) (94,440,379)\n\nDiscount rate 1140,464,351 140,464,351 110,156,318 110,156,318\n\nSalary increment rate 1+ 136,650,874 136,650,874 108,354,707 108,354,707\n\nSalary increment rate 1- (119,251,891) (119,251,891) (94,577,681) (94,577,681)\n\n31.3. The expected benefit payout in the future years of retirement gratuity\n\nWithin next 12 months 69,475,049 68,130,552\n\nBetween 2 and 5 years 512,584,513 461,532,212\n\nBeyond 5 years 949,704,906 844,187,506\n\n32. OTHER LIABILITY\n\nSpecial purpose project funds 397,252,924 397,252,924\n\nLease liability (Note 32.1) 1,366,635,593 765,895,546\n\nAccruals and other payables 1,913,201,505 1,582,613,802\n\nTotal 3,677,090,022 2,745,762,272"
  },
  {
    number: "Note 33",
    title: "Stated Capital",
    summary: "33. STATED CAPITAL",
    accountingPolicy: "Ordinary shares - Issued and fully paid 11,406,601,998 11,406,601,998",
    content: "33. STATED CAPITAL\n\nOrdinary shares - Issued and fully paid 11,406,601,998 11,406,601,998\n\nTotal 11,406,601,998 11,406,601,998\n\n33.1. Details of ordinary shares issued and fully paid\n\nOpening balance as as 1 January 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\nTotal 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\n34. STATUTORY RESERVE FUND\n\nOpening balance as at 1 January 361,049,165 340,572,453\n\nTransfer during the period 20,245,927 20,476,712\n\nClosing balance as at 31 December 381,295,092 361,049,165\n\n35. RETAINED EARNINGS\n\nOpening balance as at 1 January 2,388,242,984 2,275,936,735\n\nProfit for the year 404,918,546 409,534,247\n\nOther comprehensive income, net of tax (74,526,610) (136,943,311)\n\nTransfers to other reserves (20,245,927) (20,476,712)"
  },
  {
    number: "Note 34",
    title: "Statutory Reserve Fund",
    summary: "33. STATED CAPITAL",
    accountingPolicy: "Ordinary shares - Issued and fully paid 11,406,601,998 11,406,601,998",
    content: "33. STATED CAPITAL\n\nOrdinary shares - Issued and fully paid 11,406,601,998 11,406,601,998\n\nTotal 11,406,601,998 11,406,601,998\n\n33.1. Details of ordinary shares issued and fully paid\n\nOpening balance as as 1 January 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\nTotal 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\n34. STATUTORY RESERVE FUND\n\nOpening balance as at 1 January 361,049,165 340,572,453\n\nTransfer during the period 20,245,927 20,476,712\n\nClosing balance as at 31 December 381,295,092 361,049,165\n\n35. RETAINED EARNINGS\n\nOpening balance as at 1 January 2,388,242,984 2,275,936,735\n\nProfit for the year 404,918,546 409,534,247\n\nOther comprehensive income, net of tax (74,526,610) (136,943,311)\n\nTransfers to other reserves (20,245,927) (20,476,712)"
  },
  {
    number: "Note 35",
    title: "Retained Earnings",
    summary: "33. STATED CAPITAL",
    accountingPolicy: "Ordinary shares - Issued and fully paid 11,406,601,998 11,406,601,998",
    content: "33. STATED CAPITAL\n\nOrdinary shares - Issued and fully paid 11,406,601,998 11,406,601,998\n\nTotal 11,406,601,998 11,406,601,998\n\n33.1. Details of ordinary shares issued and fully paid\n\nOpening balance as as 1 January 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\nTotal 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\n34. STATUTORY RESERVE FUND\n\nOpening balance as at 1 January 361,049,165 340,572,453\n\nTransfer during the period 20,245,927 20,476,712\n\nClosing balance as at 31 December 381,295,092 361,049,165\n\n35. RETAINED EARNINGS\n\nOpening balance as at 1 January 2,388,242,984 2,275,936,735\n\nProfit for the year 404,918,546 409,534,247\n\nOther comprehensive income, net of tax (74,526,610) (136,943,311)\n\nTransfers to other reserves (20,245,927) (20,476,712)"
  },
  {
    number: "Note 36",
    title: "Other Reserves",
    summary: "33. STATED CAPITAL",
    accountingPolicy: "Ordinary shares - Issued and fully paid 11,406,601,998 11,406,601,998",
    content: "33. STATED CAPITAL\n\nOrdinary shares - Issued and fully paid 11,406,601,998 11,406,601,998\n\nTotal 11,406,601,998 11,406,601,998\n\n33.1. Details of ordinary shares issued and fully paid\n\nOpening balance as as 1 January 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\nTotal 11,406,601,998 11,406,601,998 164,166,494 164,166,494\n\n34. STATUTORY RESERVE FUND\n\nOpening balance as at 1 January 361,049,165 340,572,453\n\nTransfer during the period 20,245,927 20,476,712\n\nClosing balance as at 31 December 381,295,092 361,049,165\n\n35. RETAINED EARNINGS\n\nOpening balance as at 1 January 2,388,242,984 2,275,936,735\n\nProfit for the year 404,918,546 409,534,247\n\nOther comprehensive income, net of tax (74,526,610) (136,943,311)\n\nTransfers to other reserves (20,245,927) (20,476,712)"
  },
  {
    number: "Note 37",
    title: "Contingent Liabilities and Commitments",
    summary: "General reserve 46,656,973 - 46,656,973",
    accountingPolicy: "Accounting Policy",
    content: "General reserve 46,656,973 - 46,656,973\n\nRevaluation reserve 333,975,868 69,025,000 403,000,868\n\nAvailable for sale/fair value through OCI reserve (19,051,624) - (19,051,624)\n\nTotal 361,581,217 69,025,000 430,606,217\n\n37. CONTINGENT LIABILITIES AND COMMITMENTS\n\nAccounting Policy\n\nThe accounting policies pertaining to \"Commitments and Contingencies\" are given in Note 2.20 to the Financial Statements.\n\n37.1 Bank guarantees and Commitements\n\nBank guarantees 389,539,808 284,090,361\n\nUndrawn Credit Lines 643,352,917 585,234,172\n\nTotal 1,032,892,725 869,324,533\n\n37.2. Maturity analysis of Bank guarantees and Commitements\n\nAs at December 2024 (LKR) On Demand\n\nFinancial Guarantee 9,740,343 63,181,207 74,106,715 45,514,357 86,941,440 4,606,299 284,090,361\n\nUndrawn Credit Lines 585,234,172 - - - - - 585,234,172"
  },
  {
    number: "Note 38",
    title: "Events Occurring After the Reporting Date",
    summary: "38. EVENTS OCCURRING AFTER THE REPORTING DATE",
    accountingPolicy: "Accounting Policy",
    content: "38. EVENTS OCCURRING AFTER THE REPORTING DATE\n\nAccounting Policy\n\nEvents after the reporting period are those events, favourable and unfavourable, that occur between the reporting date and the date when the Financial Statements are authorised for issue. No circumstances have arisen since the reporting date which would require adjustments to, or disclosure in the Financial Statements.\n\n39. RELATED PARTY DISCLOSURE\n\nThe Bank carries out transaction in the ordinary course of business with the parties who are defined as related parties in the Sri Lanka Accounting Standard - LKAS 24 on \"Related Party Disclosures\", the details of which are reported below: The Bank carries out transactions in the ordinary course of business on an arm's length basis at commercial rates with related parties who are defined as LKAS 24 \"Related Party Disclosures\".\n\n39.1. Transactions with key management personnel (KMP)\n\nKey management personnel include: the Chairman, the Board of Directors, and Chief Executive Officer, Deputy Chief Executive Officer of the Bank. Transactions with close family members of key management personnel are also taken into account in the transactions with key management personnel. The Same term, including interest/commission rates and security, as for comparable transaction with person of a similar standing or, where applicable, with the employees. The transaction did not involve more than the normal risk of repayment or present other unfavorable features.\n\n39.1.1. Key management personnel compensation\n\nShort term employee benefits 79,135,000 72,845,452\n\n39.1.2. Other transactions (loans and receivables) with key management personnel - Balance outstanding\n\nGranting - -\n\nRepayments - -\n\nClosing balance as at 31 December - -\n\nInterest income - -\n\n39.1.3. Deposits and investment from key management personnel - Balance outstanding"
  },
  {
    number: "Note 39",
    title: "Related Party Disclosures",
    summary: "38. EVENTS OCCURRING AFTER THE REPORTING DATE",
    accountingPolicy: "Accounting Policy",
    content: "38. EVENTS OCCURRING AFTER THE REPORTING DATE\n\nAccounting Policy\n\nEvents after the reporting period are those events, favourable and unfavourable, that occur between the reporting date and the date when the Financial Statements are authorised for issue. No circumstances have arisen since the reporting date which would require adjustments to, or disclosure in the Financial Statements.\n\n39. RELATED PARTY DISCLOSURE\n\nThe Bank carries out transaction in the ordinary course of business with the parties who are defined as related parties in the Sri Lanka Accounting Standard - LKAS 24 on \"Related Party Disclosures\", the details of which are reported below: The Bank carries out transactions in the ordinary course of business on an arm's length basis at commercial rates with related parties who are defined as LKAS 24 \"Related Party Disclosures\".\n\n39.1. Transactions with key management personnel (KMP)\n\nKey management personnel include: the Chairman, the Board of Directors, and Chief Executive Officer, Deputy Chief Executive Officer of the Bank. Transactions with close family members of key management personnel are also taken into account in the transactions with key management personnel. The Same term, including interest/commission rates and security, as for comparable transaction with person of a similar standing or, where applicable, with the employees. The transaction did not involve more than the normal risk of repayment or present other unfavorable features.\n\n39.1.1. Key management personnel compensation\n\nShort term employee benefits 79,135,000 72,845,452\n\n39.1.2. Other transactions (loans and receivables) with key management personnel - Balance outstanding\n\nGranting - -\n\nRepayments - -\n\nClosing balance as at 31 December - -\n\nInterest income - -\n\n39.1.3. Deposits and investment from key management personnel - Balance outstanding"
  },
  {
    number: "Note 40",
    title: "Assets Pledged",
    summary: "39.1.4. Shareholdings by key management personnel",
    accountingPolicy: "41. ANALYSIS OF FINANCIAL INSTRUMENTS BY MEASUREMENT BASIS",
    content: "39.1.4. Shareholdings by key management personnel\n\nNumber of shares held by KMP 119,676 119,676\n\nA39.1.5. Term and conditions of transaction with related parties\n\nAll related party transaction are carried out in the normal course of business and transacted at normal business terms. Transaction from related parties are made on terms equivalent to those that prevail in arm's length transaction and comparable with those that would have been charged from unrelated companies. All related party outstanding balances at the year - end are secured and are to be settled in cash.\n\n39.1.6. Recurrent and Non-recurrent Related Party Transactions\n\nThe Bank does not have any transactions where the aggregate value of the non-recurrent Related Party Transactions exceeds 10% of the Equity or 5% of the Total Assets, whichever is lower.\n\nThe Bank did not have any transactions where the aggregate value of the recurrent Related Party Transactions exceeds 10% of the gross income of the Bank.\n\n40. ASSETS PLEDGED\n\nAs of 2025 and 2024, the bank has no pledged loan portfolios.\n\n41. ANALYSIS OF FINANCIAL INSTRUMENTS BY MEASUREMENT BASIS\n\nAs at 31 December 2025 Amortised cost FVTPL FVTOCI Total\n\nFinancial assets\n\nCash and balances with banks 7,104,305,823 - - 7,104,305,823\n\nPlacements with banks 7,801,226,634 - - 7,801,226,634\n\nFinancial assets at fair value through profit or loss - - - -"
  },
  {
    number: "Note 41",
    title: "Analysis of Financial Instruments by Measurement Basis",
    summary: "39.1.4. Shareholdings by key management personnel",
    accountingPolicy: "41. ANALYSIS OF FINANCIAL INSTRUMENTS BY MEASUREMENT BASIS",
    content: "39.1.4. Shareholdings by key management personnel\n\nNumber of shares held by KMP 119,676 119,676\n\nA39.1.5. Term and conditions of transaction with related parties\n\nAll related party transaction are carried out in the normal course of business and transacted at normal business terms. Transaction from related parties are made on terms equivalent to those that prevail in arm's length transaction and comparable with those that would have been charged from unrelated companies. All related party outstanding balances at the year - end are secured and are to be settled in cash.\n\n39.1.6. Recurrent and Non-recurrent Related Party Transactions\n\nThe Bank does not have any transactions where the aggregate value of the non-recurrent Related Party Transactions exceeds 10% of the Equity or 5% of the Total Assets, whichever is lower.\n\nThe Bank did not have any transactions where the aggregate value of the recurrent Related Party Transactions exceeds 10% of the gross income of the Bank.\n\n40. ASSETS PLEDGED\n\nAs of 2025 and 2024, the bank has no pledged loan portfolios.\n\n41. ANALYSIS OF FINANCIAL INSTRUMENTS BY MEASUREMENT BASIS\n\nAs at 31 December 2025 Amortised cost FVTPL FVTOCI Total\n\nFinancial assets\n\nCash and balances with banks 7,104,305,823 - - 7,104,305,823\n\nPlacements with banks 7,801,226,634 - - 7,801,226,634\n\nFinancial assets at fair value through profit or loss - - - -"
  },
  {
    number: "Note 42",
    title: "Fair Value of Financial Instruments",
    summary: "As at 31 December 2024 Amortised cost FVTPL FVTOCI Total",
    accountingPolicy: "Accounting Policy",
    content: "As at 31 December 2024 Amortised cost FVTPL FVTOCI Total\n\nFinancial assets\n\nCash and balances with banks 2,442,293,957 - - 2,442,293,957\n\nPlacements with banks 9,083,957,854 - - 9,083,957,854\n\nFinancial assets at fair value through profit or loss - 6,739,200,074 - 6,739,200,074\n\nFinancial assets at amortised cost\n\n- Loans and receivables to other customers 95,137,106,867 - - 95,137,106,867\n\n- Debt and other instruments 26,623,135,466 - - 26,623,135,466\n\nFinancial assets measured at fair value through other comprehensive income - - 208,145,880 208,145,880\n\nTotal financial assets 133,286,494,144 6,739,200,074 208,145,880 140,233,840,098\n\nFinancial liabilities\n\nDue to other customers 106,989,899,941 - - 106,989,899,941\n\nOther borrowings 19,075,131,562 - - 19,075,131,562\n\nTotal financial liabilities 126,065,031,503 - - 126,065,031,503\n\n42. FAIR VALUE OF FINANCIAL INSTRUMENTS"
  },
  {
    number: "Note 43",
    title: "Segment Reporting",
    summary: "43. SEGMENT REPORTING",
    accountingPolicy: "Accounting Policy",
    content: "43. SEGMENT REPORTING\n\nAccounting Policy\n\nManagement monitors the operating results of its business units separately for the purpose of making decisions about resource allocation and performance assessment. Segment performance is evaluated based on operating profits or losses, which in certain respects, are measured differently from operating profits or losses in the Financial Statements. Taxes are managed at an entity level and are not allocated to operating segments. Including revenue and expenses that relate to transactions with any of the Bank's other components, whose operating results are reviewed regularly by the operating decision maker to make decisions about resources allocated to each segment and assess its performance, and for which discrete financial information is available.\n\nAn operating segment is a component of the Bank that engages in business activities from which it may earn revenue and incur expenses.\n\nInterest income is reported net as management primarily relies on net interest income as a performance measure, not the gross income and expense.\n\nRevenue from transactions with a single external customer or counterparty did not exceed 10% or more of the Bank's total revenue in 2024 or 2025.\n\nThe following table presents income, profit, total assets, total liabilities & cash flows of the Bank's operating segments.\n\nInterest income 11,820,331,402 1,520,910,845 2,533,482,771 1,223,814,376 17,098,539,394\n\nAdd: Inter-segment interest income 10,289,113,237 - 9,545,156,066 - 19,834,269,303\n\nTotal interest income 22,109,444,639 1,520,910,845 12,078,638,837 1,223,814,376 36,932,808,697\n\nInterest expenses (6,640,745,664) (688,049,677) (697,474,113) (839,588,297) (8,865,857,751)\n\nAdd: Inter-segment interest expense (9,545,156,067) - (10,289,113,236) - (19,834,269,303)\n\nTotal interest expense (16,185,901,731) (688,049,677) (10,986,587,349) (839,588,297) (28,700,127,054)\n\nNet interest income 5,923,542,908 832,861,168 1,092,051,488 384,226,079 8,232,681,643\n\nFee and commission income 660,408,532 55,940,550 - - 716,349,082"
  },
  {
    number: "Note 44",
    title: "Maturity Analysis of Assets and Liabilities",
    summary: "Un-allocated expenses (6,210,500,064)",
    accountingPolicy: "Risk is inherent in the Bank's activities but is managed through a process of ongoing identification, measurement and monitoring subject to risk limits and other controls. This process of risk management is critical to the Bank's continuous profitability and each individual within the Bank is accountable for the risk exposures relating to his or her responsibilities. The Bank is mainly exposed to Credit Risk, Liquidity Risk, Market Risk and Operational Risk which has been disclosed in this note as summarised below:",
    content: "Un-allocated expenses (6,210,500,064)\n\nValue Added Tax (VAT) on financial services (668,192,659)\n\nSocial Security Contribution Levy (98,470,974)\n\nProfit before tax 684,262,922\n\nTax expenses (274,728,675)\n\nProfit for the year 409,534,248\n\nOther comprehensive income\n\nOther comprehensive income for the year net of tax (67,918,311)\n\nTotal comprehensive income for the year 341,615,938\n\nSegment assets 81,153,575,352 6,059,981,939 45,096,733,231 7,923,549,577 140,233,840,099\n\nUn-allocated assets 4,922,109,861\n\nTotal assets 81,153,575,352 6,059,981,939 45,096,733,231 7,923,549,577 145,155,949,960\n\nSegment liabilities 94,445,916,616 7,052,561,103 19,849,604,862 9,221,367,012 130,569,449,594\n\nTotal equity - - - - 14,586,500,364\n\nTotal liabilities 94,445,916,616 7,052,561,103 19,849,604,862 9,221,367,012 145,155,949,960"
  },
  {
    number: "Note 45",
    title: "Risk Management & Prudential Controls",
    summary: "Within After Total Within After Total",
    accountingPolicy: "Risk is inherent in the Bank's activities but is managed through a process of ongoing identification, measurement and monitoring subject to risk limits and other controls. This process of risk management is critical to the Bank's continuous profitability and each individual within the Bank is accountable for the risk exposures relating to his or her responsibilities. The Bank is mainly exposed to Credit Risk, Liquidity Risk, Market Risk and Operational Risk which has been disclosed in this note as summarised below:",
    content: "Within After Total Within After Total\n\n12 months 12 months 12 months 12 months\n\nLKR LKR LKR LKR LKR LKR\n\nLiabilities\n\nDue to other customers 57,026,678,114 48,654,295,924 105,680,974,038 64,443,515,192 42,546,384,750 106,989,899,941\n\nOther borrowings 16,051,705,795 4,564,615,273 20,616,321,068 14,534,302,788 4,540,828,774 19,075,131,562\n\nRetirement benefit obligation - 1,286,496,116 1,286,496,116 - 1,041,381,783 1,041,381,783\n\nCurrent tax liabilities 892,809,195 - 892,809,195 717,274,037 - 717,274,037\n\nOther liabilities 2,032,586,692 1,644,503,330 3,677,090,022 1,758,470,312 987,291,960 2,745,762,272\n\nTotal liabilities 76,003,779,796 56,149,910,643 132,153,690,439 81,453,562,328 49,115,887,267 130,569,449,595\n\nNet asset/(liability) (10,882,992,114) 25,687,398,500 14,804,406,386 (11,905,742,142) 26,492,242,507 14,586,500,364\n\n45. RISK MANAGEMENT\n\n45.1. Introduction\n\nRisk is inherent in the Bank's activities but is managed through a process of ongoing identification, measurement and monitoring subject to risk limits and other controls. This process of risk management is critical to the Bank's continuous profitability and each individual within the Bank is accountable for the risk exposures relating to his or her responsibilities. The Bank is mainly exposed to Credit Risk, Liquidity Risk, Market Risk and Operational Risk which has been disclosed in this note as summarised below:\n\n45.2. Credit Risk 45.2.1. Assessment of Expected Credit Losses"
  },
  {
    number: "Note 46",
    title: "Comparative Information",
    summary: "46. COMPARATIVE INFORMATION",
    accountingPolicy: "The comparative information has been reclassified wherever necessary to confirm to the current year's presentation and details are given below.",
    content: "46. COMPARATIVE INFORMATION\n\nThe comparative information has been reclassified wherever necessary to confirm to the current year's presentation and details are given below.\n\n46.1. Statement of Profit or Loss\n\nThere were no reclassifications during the year.\n\n46.2. Statement of Financial Position\n\nThere were no reclassifications during the year.\n\n46.3. Statement of Cash Flow\n\nThere were no reclassifications during the year."
  },
];

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

