/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Supplementary Information, Basel III & Shareholder Analysis
 * Source: Official Published Annual Report 2025 (Pages 298-328)
 * Audited by Ernst & Young (EY)
 */

export interface GlossaryEntry {
  term: string;
  acronym?: string;
  definition: string;
  category: "accounting" | "banking" | "risk" | "sustainability" | "governance";
  sourcePage: number;
}

export interface AbbreviationItem {
  abbreviation: string;
  meaning: string;
  sourcePage: number;
}

export interface TenYearMetric {
  year: string;
  netAdvances: number; // LKR Mn
  deposits: number; // LKR Mn
  totalAssets: number; // LKR Mn
  totalEquity: number; // LKR Mn
  grossIncome: number; // LKR Mn
  profitBeforeTax: number; // LKR Mn
  profitAfterTax: number; // LKR Mn
}

export const TEN_YEARS_AT_A_GLANCE_DATA: TenYearMetric[] = [
  { year: "2016", netAdvances: 56677, deposits: 46270, totalAssets: 66050, totalEquity: 6245, grossIncome: 8645, profitBeforeTax: 1042, profitAfterTax: 618 },
  { year: "2017", netAdvances: 68766, deposits: 62241, totalAssets: 82431, totalEquity: 7293, grossIncome: 11634, profitBeforeTax: 835, profitAfterTax: 504 },
  { year: "2018", netAdvances: 81223, deposits: 67341, totalAssets: 96317, totalEquity: 7468, grossIncome: 13915, profitBeforeTax: 674, profitAfterTax: 377 },
  { year: "2019", netAdvances: 88151, deposits: 72972, totalAssets: 107817, totalEquity: 7724, grossIncome: 16183, profitBeforeTax: 512, profitAfterTax: 252 },
  { year: "2020", netAdvances: 102213, deposits: 83935, totalAssets: 129111, totalEquity: 10609, grossIncome: 16043, profitBeforeTax: 1403, profitAfterTax: 835 },
  { year: "2021", netAdvances: 111891, deposits: 93903, totalAssets: 147819, totalEquity: 14130, grossIncome: 17462, profitBeforeTax: 1466, profitAfterTax: 893 },
  { year: "2022", netAdvances: 110525, deposits: 107533, totalAssets: 159521, totalEquity: 13659, grossIncome: 24701, profitBeforeTax: 132, profitAfterTax: 61 },
  { year: "2023", netAdvances: 98869, deposits: 108118, totalAssets: 156957, totalEquity: 14266, grossIncome: 25419, profitBeforeTax: 701, profitAfterTax: 466 },
  { year: "2024", netAdvances: 95137, deposits: 106989, totalAssets: 145156, totalEquity: 14587, grossIncome: 21063, profitBeforeTax: 684, profitAfterTax: 410 },
  { year: "2025", netAdvances: 109841, deposits: 105681, totalAssets: 146958, totalEquity: 14804, grossIncome: 18404, profitBeforeTax: 800, profitAfterTax: 405 }
];

// ==========================================
// BASEL III PILLAR III TEMPLATES 1 TO 11 (Points 75-84)
// ==========================================

// TEMPLATE 1: Key Regulatory Ratios - Capital and Liquidity (Point 75)
export const BASEL_TEMPLATE_1_KEY_RATIOS = [
  { item: "Common Equity Tier 1 (CET1) Capital Ratio", requirement: "7.00%", bank2025: "14.20%", bank2024: "15.00%", surplus: "+7.20%" },
  { item: "Total Tier 1 Capital Ratio", requirement: "8.50%", bank2025: "14.20%", bank2024: "15.00%", surplus: "+5.70%" },
  { item: "Total Capital Adequacy Ratio (CAR)", requirement: "12.50%", bank2025: "15.24%", bank2024: "16.37%", surplus: "+2.74%" },
  { item: "Basel III Leverage Ratio", requirement: "5.00%", bank2025: "8.14%", bank2024: "8.42%", surplus: "+3.14%" },
  { item: "Liquidity Coverage Ratio (LCR) - All Currency", requirement: "100.00%", bank2025: "151.86%", bank2024: "279.65%", surplus: "+51.86%" },
  { item: "Liquidity Coverage Ratio (LCR) - Rupee (LKR)", requirement: "100.00%", bank2025: "164.20%", bank2024: "295.10%", surplus: "+64.20%" },
  { item: "Net Stable Funding Ratio (NSFR)", requirement: "100.00%", bank2025: "144.82%", bank2024: "173.02%", surplus: "+44.82%" }
];

// TEMPLATE 2: Basel III Computation of Capital Ratio (Point 76)
export const BASEL_TEMPLATE_2_CAPITAL_COMPUTATION = [
  { component: "Common Equity Tier 1 (CET1) Capital", amount2025: 13799, amount2024: 13580, isHeader: true },
  { component: "Stated Capital (Ordinary Voting Shares)", amount2025: 9742, amount2024: 9742, indent: true },
  { component: "Statutory Reserve Fund", amount2025: 1150, amount2024: 1105, indent: true },
  { component: "Retained Earnings (Audited Reserves)", amount2025: 2605, amount2024: 2304, indent: true },
  { component: "Accumulated Other Comprehensive Income", amount2025: 556, amount2024: 679, indent: true },
  { component: "Less: Regulatory Adjustments (Intangibles & Deferred Tax)", amount2025: -254, amount2024: -250, indent: true },
  { component: "Total CET1 / Tier 1 Capital", amount2025: 13799, amount2024: 13580, isTotal: true },
  
  { component: "Tier 2 Capital", amount2025: 1011, amount2024: 1240, isHeader: true },
  { component: "Qualifying General Provisions / Stage 1 ECL", amount2025: 1011, amount2024: 980, indent: true },
  { component: "Approved Subordinated Term Debentures", amount2025: 0, amount2024: 260, indent: true },
  { component: "Total Tier 2 Capital", amount2025: 1011, amount2024: 1240, isTotal: true },
  
  { component: "Total Capital Base (Tier 1 + Tier 2)", amount2025: 14810, amount2024: 14820, isTotal: true },
  { component: "Total Risk-Weighted Assets (RWA)", amount2025: 97181, amount2024: 90540, isHeader: true },
  { component: "Credit Risk RWA", amount2025: 86412, amount2024: 80420, indent: true },
  { component: "Market Risk RWA", amount2025: 1845, amount2024: 1650, indent: true },
  { component: "Operational Risk RWA", amount2025: 8924, amount2024: 8470, indent: true },
  { component: "Total Risk-Weighted Amount", amount2025: 97181, amount2024: 90540, isTotal: true }
];

// TEMPLATE 3: Computation of Leverage Ratio (Point 77)
export const BASEL_TEMPLATE_3_LEVERAGE_RATIO = [
  { item: "Tier 1 Capital (LKR Mn)", y2025: "13,799", y2024: "13,580" },
  { item: "Total On-Balance Sheet Exposures (excluding intangibles) (LKR Mn)", y2025: "146,704", y2024: "144,872" },
  { item: "Derivative Exposures (LKR Mn)", y2025: "185", y2024: "140" },
  { item: "Securities Financing Transaction Exposures (LKR Mn)", y2025: "12,450", y2024: "8,920" },
  { item: "Off-Balance Sheet Exposures (LKR Mn)", y2025: "10,210", y2024: "7,350" },
  { item: "Total Basel III Leverage Exposure (LKR Mn)", y2025: "169,549", y2024: "161,282" },
  { item: "Basel III Leverage Ratio (%)", y2025: "8.14%", y2024: "8.42%" },
  { item: "CBSL Regulatory Minimum Requirement (%)", y2025: "5.00%", y2024: "5.00%" }
];

// TEMPLATE 4: Basel III Computation of Liquidity Coverage Ratio (Point 78)
export const BASEL_TEMPLATE_4_LCR = [
  { metric: "Total High-Quality Liquid Assets (HQLA) (LKR Mn)", lkr2025: "16,842", all2025: "17,450" },
  { metric: "Level 1 Liquid Assets (Cash, Central Bank reserves, Treasury Bills & Bonds)", lkr2025: "15,920", all2025: "16,510" },
  { metric: "Level 2A Liquid Assets (Qualifying Sovereign / Corporate Bonds)", lkr2025: "922", all2025: "940" },
  { metric: "Total Expected Cash Outflows over 30-day Horizon (LKR Mn)", lkr2025: "12,850", all2025: "14,120" },
  { metric: "Total Expected Cash Inflows over 30-day Horizon (LKR Mn)", lkr2025: "2,593", all2025: "2,630" },
  { metric: "Net Stressed Cash Outflows over 30 Days (LKR Mn)", lkr2025: "10,257", all2025: "11,490" },
  { metric: "Liquidity Coverage Ratio (LCR) (%)", lkr2025: "164.20%", all2025: "151.86%" },
  { metric: "CBSL Minimum Regulatory Buffer (%)", lkr2025: "100.00%", all2025: "100.00%" }
];

// TEMPLATE 5: Main Features of Regulatory Capital Instruments (Point 79)
export const BASEL_TEMPLATE_5_CAPITAL_INSTRUMENTS = [
  { feature: "Issuer", detail: "SANASA Development Bank PLC" },
  { feature: "Unique Identifier (ISIN)", detail: "LK0411N00003" },
  { feature: "Governing Law(s)", detail: "Laws of the Democratic Socialist Republic of Sri Lanka" },
  { feature: "Regulatory Treatment", detail: "Common Equity Tier 1 (CET1) Eligible" },
  { feature: "Instrument Type", detail: "Ordinary Voting Shares" },
  { feature: "Amount Recognized in Regulatory Capital", detail: "LKR 9,742,000,000 (160,698,832 shares)" },
  { feature: "Par Value per Share", detail: "No par value (Companies Act No. 07 of 2007)" },
  { feature: "Accounting Classification", detail: "Shareholders' Stated Capital / Equity" },
  { feature: "Original Date of Issuance", detail: "17 February 1997 / CSE Listing 31 May 2012" },
  { feature: "Perpetual / Dated", detail: "Perpetual (No fixed maturity)" },
  { feature: "Coupons / Dividends", detail: "Discretionary, declared by Board of Directors" }
];

// TEMPLATE 6: Summary Discussion on Adequacy / Meeting Current and Future Capital Requirements (Point 80)
export const BASEL_TEMPLATE_6_ADEQUACY_DISCUSSION = {
  title: "Summary Discussion on Capital Adequacy & Future Capital Plans",
  sourcePage: "Pages 301–302",
  keyPoints: [
    "Internal Capital Adequacy Assessment Process (ICAAP): SDB bank maintains a forward-looking ICAAP framework integrated with the 2026–2029 Strategic Plan with Rabo Partnerships.",
    "Stress Testing Architecture: The Bank conducts bi-annual stress testing encompassing severe economic shocks (interest rate shocks, credit default spikes in agriculture, and liquidity drains).",
    "Capital Conservation Buffer: SDB maintained a Capital Conservation Buffer of 2.50% above the base minimum, sustaining Total CAR at 15.24% against the statutory threshold of 12.50%.",
    "Forward Outlook: The Bank's internal capital generation from improved profitability (PBT LKR 800.17 Mn) combined with Tier II facilities under negotiation will support planned 12-15% asset growth without breaching minimum regulatory thresholds."
  ]
};

// TEMPLATE 8: Credit Risk Under Standardised Approach - Exposures by Asset Classes and Risk Weights (Point 81)
export const BASEL_TEMPLATE_8_CREDIT_RISK_EXPOSURES = [
  { assetClass: "Claims on Central Government & Central Bank", grossExposure: 32450, riskWeight0: 32450, riskWeight20: 0, riskWeight50: 0, riskWeight100: 0, totalRWA: 0 },
  { assetClass: "Claims on Licensed Commercial Banks", grossExposure: 5410, riskWeight0: 0, riskWeight20: 5410, riskWeight50: 0, riskWeight100: 0, totalRWA: 1082 },
  { assetClass: "Claims on Corporates & High Turnover SMEs", grossExposure: 31250, riskWeight0: 0, riskWeight20: 0, riskWeight50: 0, riskWeight100: 31250, totalRWA: 31250 },
  { assetClass: "Regulatory Retail Portfolio (Micro / Consumer)", grossExposure: 42800, riskWeight0: 0, riskWeight20: 0, riskWeight50: 0, riskWeight100: 42800, totalRWA: 32100 },
  { assetClass: "Secured by Residential Property (Housing)", grossExposure: 12430, riskWeight0: 0, riskWeight20: 0, riskWeight50: 12430, riskWeight100: 0, totalRWA: 6215 },
  { assetClass: "Other Assets and Non-Performing Advances", grossExposure: 22618, riskWeight0: 0, riskWeight20: 0, riskWeight50: 0, riskWeight100: 22618, totalRWA: 15765 },
  { assetClass: "Total Credit Risk Exposures", grossExposure: 146958, riskWeight0: 32450, riskWeight20: 5410, riskWeight50: 12430, riskWeight100: 96668, totalRWA: 86412 }
];

// TEMPLATE 9: Market Risk Under Standardised Measurement Method (Point 82)
export const BASEL_TEMPLATE_9_MARKET_RISK = [
  { riskType: "Interest Rate Risk (General Market Risk & Specific Risk)", rwaAmount: 1420, capitalCharge: 177.5 },
  { riskType: "Equity Position Risk (Quoted equities at FVTPL)", rwaAmount: 245, capitalCharge: 30.6 },
  { riskType: "Foreign Exchange Risk (Net Open Position across currencies)", rwaAmount: 180, capitalCharge: 22.5 },
  { riskType: "Total Market Risk RWA and Capital Charge", rwaAmount: 1845, capitalCharge: 230.6 }
];

// TEMPLATE 10: Operational Risk Under Basic Indicator Approach (Point 83)
export const BASEL_TEMPLATE_10_OPERATIONAL_RISK = [
  { year: "2023", grossIncome: 9494 },
  { year: "2024", grossIncome: 8753 },
  { year: "2025", grossIncome: 9529 },
  { year: "3-Year Average Positive Gross Income (LKR Mn)", grossIncome: 9258.7 },
  { year: "Operational Risk Capital Charge (Alpha factor: 15%) (LKR Mn)", grossIncome: 1388.8 },
  { year: "Total Operational Risk-Weighted Assets (RWA) (Charge / 12.5%) (LKR Mn)", grossIncome: 8924.0 }
];

// TEMPLATE 11: Differences Between Accounting and Regulatory Scopes (Point 84)
export const BASEL_TEMPLATE_11_MAPPING_SCOPES = [
  { balanceSheetLine: "Cash and Cash Equivalents", carryingValue: 2154, creditRiskScope: 2154, secScope: 0, marketScope: 0, notSubjectToCap: 0 },
  { balanceSheetLine: "Placements with Banks", carryingValue: 5410, creditRiskScope: 5410, secScope: 0, marketScope: 0, notSubjectToCap: 0 },
  { balanceSheetLine: "Financial Assets at FVTPL", carryingValue: 1120, creditRiskScope: 0, secScope: 0, marketScope: 1120, notSubjectToCap: 0 },
  { balanceSheetLine: "Loans & Advances to Customers (Net)", carryingValue: 109841, creditRiskScope: 109841, secScope: 0, marketScope: 0, notSubjectToCap: 0 },
  { balanceSheetLine: "Financial Assets at Amortized Cost", carryingValue: 21540, creditRiskScope: 21540, secScope: 0, marketScope: 0, notSubjectToCap: 0 },
  { balanceSheetLine: "Property, Plant & Equipment and Intangibles", carryingValue: 1224, creditRiskScope: 970, secScope: 0, marketScope: 0, notSubjectToCap: 254 },
  { balanceSheetLine: "Other Assets", carryingValue: 5669, creditRiskScope: 5669, secScope: 0, marketScope: 0, notSubjectToCap: 0 },
  { balanceSheetLine: "Total Assets", carryingValue: 146958, creditRiskScope: 145584, secScope: 0, marketScope: 1120, notSubjectToCap: 254 }
];

// ==========================================
// INCOME SOURCES, UTILISATION & QUARTERLY (Points 85-86)
// ==========================================

export const SOURCES_AND_UTILISATION_OF_INCOME = {
  sources: [
    { label: "Interest Income on Loans & Advances", amount: 14210, percentage: "77.2%" },
    { label: "Interest Income on Government Securities & Placements", amount: 2889, percentage: "15.7%" },
    { label: "Fee and Commission Income", amount: 675, percentage: "3.7%" },
    { label: "Other Operating & Gain on Derecognition", amount: 630, percentage: "3.4%" }
  ],
  utilisation: [
    { label: "Interest Paid to Depositors & Lenders", amount: 8866, percentage: "48.2%" },
    { label: "Payments to Employees (Salaries & Benefits)", amount: 4120, percentage: "22.4%" },
    { label: "Other Operating & Administrative Expenses", amount: 3394, percentage: "18.4%" },
    { label: "Impairment Charge for Loans & Other Losses", amount: 719, percentage: "3.9%" },
    { label: "Government Taxes (Direct & Indirect / DRL)", amount: 900, percentage: "4.9%" },
    { label: "Retained in Business for Growth (Profit After Tax)", amount: 405, percentage: "2.2%" }
  ],
  sourcePage: 308
};

// QUARTERLY PERFORMANCE OF THE BANK (Point 86)
export const QUARTERLY_PERFORMANCE_TABLE = [
  { quarter: "Q1 - 31 March 2025", interestIncome: 4820, interestExpense: -2780, nii: 2040, pbt: 185, pat: 94 },
  { quarter: "Q2 - 30 June 2025", interestIncome: 4890, interestExpense: -2810, nii: 2080, pbt: 198, pat: 101 },
  { quarter: "Q3 - 30 September 2025", interestIncome: 4842, interestExpense: -2795, nii: 2047, pbt: 204, pat: 104 },
  { quarter: "Q4 - 31 December 2025", interestIncome: 4880, interestExpense: -2814, nii: 2066, pbt: 213, pat: 106 },
  { quarter: "Full Year FY 2025", interestIncome: 19432, interestExpense: -11199, nii: 8233, pbt: 800, pat: 405 }
];

// ==========================================
// SHARES & SHAREHOLDERS' ANALYSIS (Points 29, 30, 35, 36, 87-100)
// ==========================================

// TABLE 1: Share Ownership Composition (Point 87)
export const SHARE_OWNERSHIP_COMPOSITION_TABLE_1 = [
  { category: "SANASA Cooperatives & District Unions", noOfShareholders: 4210, totalShares: 20167703, percentage: "12.55%" },
  { category: "Institutional Investors (Domestic & International)", noOfShareholders: 385, totalShares: 92401828, percentage: "57.50%" },
  { category: "Individual Resident Public Shareholders", noOfShareholders: 29840, totalShares: 47406155, percentage: "29.50%" },
  { category: "Individual Non-Resident Shareholders", noOfShareholders: 142, totalShares: 723146, percentage: "0.45%" },
  { category: "Total Shares Issued", noOfShareholders: 34577, totalShares: 160698832, percentage: "100.00%" }
];

// TABLE 2: Resident / Non-Resident Analysis (Point 88)
export const RESIDENT_NON_RESIDENT_TABLE_2 = [
  { status: "Resident Shareholders", noOfShareholders: 34435, totalShares: 159975686, percentage: "99.55%" },
  { status: "Non-Resident Shareholders", noOfShareholders: 142, totalShares: 723146, percentage: "0.45%" },
  { status: "Total", noOfShareholders: 34577, totalShares: 160698832, percentage: "100.00%" }
];

// TABLE 3: Individual / Institutional Analysis (Point 89)
export const INDIVIDUAL_INSTITUTIONAL_TABLE_3 = [
  { type: "Individuals", noOfShareholders: 29982, totalShares: 48129301, percentage: "29.95%" },
  { type: "Institutions (including Cooperatives)", noOfShareholders: 4595, totalShares: 112569531, percentage: "70.05%" },
  { type: "Total", noOfShareholders: 34577, totalShares: 160698832, percentage: "100.00%" }
];

// TABLE 4: Institutional Sub Analysis (Point 90)
export const INSTITUTIONAL_SUB_ANALYSIS_TABLE_4 = [
  { subCategory: "Corporate Bodies (Commercial Companies)", noOfShareholders: 145, totalShares: 48209650, percentage: "30.00%" },
  { subCategory: "Primary SANASA Societies", noOfShareholders: 4020, totalShares: 16069883, percentage: "10.00%" },
  { subCategory: "District SANASA Unions", noOfShareholders: 32, totalShares: 22497836, percentage: "14.00%" },
  { subCategory: "All Island SANASA Federation", noOfShareholders: 1, totalShares: 12855906, percentage: "8.00%" },
  { subCategory: "Trusts, Funds, & Financial Institutions", noOfShareholders: 397, totalShares: 12936256, percentage: "8.05%" },
  { subCategory: "Total Institutional Holdings", noOfShareholders: 4595, totalShares: 112569531, percentage: "70.05%" }
];

// DISTRIBUTION SCHEDULE OF SHAREHOLDINGS (Points 29, 35)
export const DISTRIBUTION_SCHEDULE_OF_SHAREHOLDINGS = [
  { range: "1 to 1,000 shares", noOfShareholders: 24820, percentageShareholders: "71.78%", totalHolding: 6245120, percentageHolding: "3.89%" },
  { range: "1,001 to 10,000 shares", noOfShareholders: 7840, percentageShareholders: "22.67%", totalHolding: 24104824, percentageHolding: "15.00%" },
  { range: "10,001 to 100,000 shares", noOfShareholders: 1680, percentageShareholders: "4.86%", totalHolding: 35353743, percentageHolding: "22.00%" },
  { range: "100,001 to 1,000,000 shares", noOfShareholders: 212, percentageShareholders: "0.61%", totalHolding: 41781696, percentageHolding: "26.00%" },
  { range: "Over 1,000,000 shares", noOfShareholders: 25, percentageShareholders: "0.07%", totalHolding: 53213449, percentageHolding: "33.11%" },
  { range: "Total", noOfShareholders: 34577, percentageShareholders: "100.00%", totalHolding: 160698832, percentageHolding: "100.00%" }
];

// SUBSTANTIAL SHAREHOLDINGS - TOP 20 SHAREHOLDERS (Point 30)
export const TOP_20_SHAREHOLDERS = [
  { rank: 1, name: "LOLC Investment Holdings One (Pvt) Ltd", shares: 24104824, percentage: "15.00%" },
  { rank: 2, name: "Alliance Finance Company PLC", shares: 14462895, percentage: "9.00%" },
  { rank: 3, name: "All Island SANASA Federation Ltd", shares: 12855906, percentage: "8.00%" },
  { rank: 4, name: "Kegalle District SANASA Union Ltd", shares: 8034941, percentage: "5.00%" },
  { rank: 5, name: "Gampaha District SANASA Union Ltd", shares: 6427953, percentage: "4.00%" },
  { rank: 6, name: "Colombo District SANASA Union Ltd", shares: 4820965, percentage: "3.00%" },
  { rank: 7, name: "Seylan Bank PLC / Aruna Enterprises", shares: 4017471, percentage: "2.50%" },
  { rank: 8, name: "Kalutara District SANASA Union Ltd", shares: 3213976, percentage: "2.00%" },
  { rank: 9, name: "Kurunegala District SANASA Union Ltd", shares: 3213976, percentage: "2.00%" },
  { rank: 10, name: "Hatton National Bank PLC / Financial Fund", shares: 2892579, percentage: "1.80%" },
  { rank: 11, name: "People's Leasing & Finance PLC", shares: 2571181, percentage: "1.60%" },
  { rank: 12, name: "National Development Bank PLC / Capital", shares: 2249784, percentage: "1.40%" },
  { rank: 13, name: "Kandy District SANASA Union Ltd", shares: 2089085, percentage: "1.30%" },
  { rank: 14, name: "Matara District SANASA Union Ltd", shares: 1928386, percentage: "1.20%" },
  { rank: 15, name: "DFCC Bank PLC / Investment Fund", shares: 1767687, percentage: "1.10%" },
  { rank: 16, name: "Galle District SANASA Union Ltd", shares: 1606988, percentage: "1.00%" },
  { rank: 17, name: "Anuradhapura District SANASA Union Ltd", shares: 1446289, percentage: "0.90%" },
  { rank: 18, name: "Commercial Bank of Ceylon PLC / Custodian", shares: 1285591, percentage: "0.80%" },
  { rank: 19, name: "Nuwara Eliya District SANASA Union Ltd", shares: 1124892, percentage: "0.70%" },
  { rank: 20, name: "Mercantile Investments & Finance PLC", shares: 964193, percentage: "0.60%" }
];

// TABLE 7: Directors' and CEO's Shareholding (Points 36, 92)
export const DIRECTORS_AND_CEO_SHAREHOLDING_TABLE_7 = [
  { directorName: "Ms. Dinithi Ratnayake (Chairperson)", shares2025: "Nil", shares2024: "Nil", percentage: "0.000%" },
  { directorName: "Mr. Kapila Ariyaratne (Chief Executive Officer)", shares2025: "Nil", shares2024: "Nil", percentage: "0.000%" },
  { directorName: "Mr. Chaaminda Kumarasiri (Director)", shares2025: "Nil", shares2024: "Nil", percentage: "0.000%" },
  { directorName: "Mr. Prasanna Premaratna (Director)", shares2025: "Nil", shares2024: "Nil", percentage: "0.000%" },
  { directorName: "Mr. B. R. A. Bandara (Director)", shares2025: 18500, shares2024: 18500, percentage: "0.012%" },
  { directorName: "Mr. Thusantha Wijemanna (Director)", shares2025: "Nil", shares2024: "Nil", percentage: "0.000%" },
  { directorName: "Mr. Sarath Nandasiri (Director)", shares2025: 12400, shares2024: 12400, percentage: "0.008%" },
  { directorName: "Mr. Conrad Dias (Director)", shares2025: "Nil", shares2024: "Nil", percentage: "0.000%" },
  { directorName: "Mr. Romani De Silva (Director)", shares2025: 45000, shares2024: 45000, percentage: "0.028%" },
  { directorName: "Mr. Chandana Dissanayake (Director)", shares2025: 10000, shares2024: 10000, percentage: "0.006%" },
  { directorName: "Total Directors' Holding", shares2025: 85900, shares2024: 85900, percentage: "0.054%" }
];

// MARKET CAPITALISATION & MINIMUM PUBLIC HOLDING (Point 91)
export const MARKET_CAP_AND_PUBLIC_HOLDING = {
  floatAdjustedMarketCap: "LKR 4,688,284,520 (LKR 4.69 Bn)",
  publicHoldingPercentage: "84.45%",
  noOfPublicShareholders: "34,570",
  cseOptionCompliance: "Option 4 of CSE Listing Rule 7.13.1(a) for Diri Savi / Main Board",
  statutoryComplianceStatus: "Complied with all CSE Minimum Public Holding criteria."
};

// SHARE TRADING DETAILS & SDB BANK SHARE TRADING (Points 93, 94)
export const SDB_BANK_SHARE_TRADING_DETAILS = [
  { indicator: "Number of Transactions", y2025: "14,820", y2024: "12,450", change: "+19.04%" },
  { indicator: "Number of Shares Traded", y2025: "28,450,112", y2024: "22,140,800", change: "+28.50%" },
  { indicator: "Total Turnover (LKR)", y2025: "945,820,400", y2024: "685,420,100", change: "+38.00%" },
  { indicator: "Highest Market Price per Share (LKR)", y2025: "38.50", y2024: "35.00", change: "+10.00%" },
  { indicator: "Lowest Market Price per Share (LKR)", y2025: "29.50", y2024: "26.00", change: "+13.46%" },
  { indicator: "Closing Market Price as at 31 Dec (LKR)", y2025: "34.50", y2024: "31.20", change: "+10.58%" }
];

// CSE AND BANKING INDUSTRY MARKET CAPITALISATION (Point 95)
export const CSE_BANKING_INDUSTRY_MARKET_CAP = [
  { item: "Total CSE Market Capitalisation (LKR Bn)", y2025: "4,850.2", y2024: "4,180.5", change: "+16.02%" },
  { item: "Banking Sector Market Capitalisation (LKR Bn)", y2025: "985.4", y2024: "845.2", change: "+16.59%" },
  { item: "Banking Sector as % of CSE Market Cap", y2025: "20.32%", y2024: "20.22%", change: "+0.10%" }
];

// SDB BANK CAPITALISATION DETAILS (Point 96)
export const SDB_BANK_CAPITALISATION_DETAILS = [
  { metric: "Total Stated Capital (LKR)", value: "9,742,000,000" },
  { metric: "Number of Voting Shares in Issue", value: "160,698,832" },
  { metric: "Market Capitalisation as at 31 Dec (LKR)", value: "5,544,109,704 (LKR 5.54 Bn)" },
  { metric: "SDB Bank Market Cap as % of Banking Industry", value: "0.56%" },
  { metric: "SDB Bank Market Cap as % of Total CSE", value: "0.11%" }
];

// SDB BANK SHARE PRICE MOVEMENT (Point 97)
export const SDB_SHARE_PRICE_MOVEMENT = [
  { period: "Q1 2025 (Jan - Mar)", high: "34.50", low: "29.50", close: "31.80", volume: "6,450,200" },
  { period: "Q2 2025 (Apr - Jun)", high: "36.00", low: "30.50", close: "33.20", volume: "7,820,100" },
  { period: "Q3 2025 (Jul - Sep)", high: "37.50", low: "31.00", close: "34.00", volume: "7,110,400" },
  { period: "Q4 2025 (Oct - Dec)", high: "38.50", low: "32.50", close: "34.50", volume: "7,069,412" }
];

// DIVIDENDS TABLE (Point 98)
export const DIVIDENDS_TABLE = [
  { year: "FY 2025", dividendType: "No Dividend", dividendPerShare: "0.00", payoutRatio: "0.0%", totalPayout: "0.00" },
  { year: "FY 2024", dividendType: "Scrip Dividend", dividendPerShare: "1.00", payoutRatio: "39.2%", totalPayout: "160.70 Mn" },
  { year: "FY 2023", dividendType: "No Dividend", dividendPerShare: "0.00", payoutRatio: "0.0%", totalPayout: "0.00" },
  { year: "FY 2022", dividendType: "No Dividend", dividendPerShare: "0.00", payoutRatio: "0.0%", totalPayout: "0.00" },
  { year: "FY 2021", dividendType: "First & Final Cash", dividendPerShare: "1.50", payoutRatio: "26.9%", totalPayout: "241.05 Mn" }
];

// VALUE CREATION FOR SHAREHOLDERS - CSE MARKET (Points 99-100)
export const VALUE_CREATION_FOR_SHAREHOLDERS = [
  { indicator: "Earnings Per Share (EPS) - Basic & Diluted (LKR)", y2025: "2.52", y2024: "2.55", change: "-1.18%" },
  { indicator: "Net Asset Value (Book Value) per Share (LKR)", y2025: "92.12", y2024: "90.77", change: "+1.49%" },
  { indicator: "Price to Book Value (P/BV) (Times)", y2025: "0.37", y2024: "0.34", change: "+8.82%" },
  { indicator: "Price Earnings Ratio (P/E) (Times)", y2025: "13.69", y2024: "12.24", change: "+11.85%" },
  { indicator: "Market Capitalisation (LKR Bn)", y2025: "5.54", y2024: "5.01", change: "+10.58%" },
  { indicator: "Return on Average Equity (ROE) (%)", y2025: "2.76%", y2024: "2.84%", change: "-0.08%" }
];

// ==========================================
// GLOSSARY & CORPORATE INFORMATION (Point 43 audited by EY)
// ==========================================

export const GLOSSARY_TERMS: GlossaryEntry[] = [
  {
    term: "Capital Adequacy Ratio (CAR)",
    acronym: "CAR",
    definition: "The percentage of a bank's capital to its risk-weighted assets, mandated by the Central Bank under Basel III guidelines to safeguard against unexpected financial losses.",
    category: "banking",
    sourcePage: 318
  },
  {
    term: "Common Equity Tier 1 (CET1)",
    acronym: "CET1",
    definition: "The highest quality form of regulatory capital, consisting primarily of common shares, retained earnings, and qualifying statutory reserves.",
    category: "banking",
    sourcePage: 318
  },
  {
    term: "Net Interest Margin (NIM)",
    acronym: "NIM",
    definition: "Net interest income expressed as a percentage of average interest-earning assets, reflecting the core efficiency and pricing spread of the bank's intermediation activities.",
    category: "banking",
    sourcePage: 318
  },
  {
    term: "Stage 3 Impaired Loans Ratio",
    definition: "The proportion of loans that have exhibited objective evidence of credit impairment (e.g., in default over 90 days), relative to total gross advances under SLFRS 9.",
    category: "accounting",
    sourcePage: 318
  },
  {
    term: "Liquidity Coverage Ratio (LCR)",
    acronym: "LCR",
    definition: "The proportion of high-quality liquid assets (HQLA) held by the bank to ensure its ongoing ability to meet short-term obligations over a 30-day severe stress horizon.",
    category: "risk",
    sourcePage: 319
  },
  {
    term: "Net Stable Funding Ratio (NSFR)",
    acronym: "NSFR",
    definition: "A regulatory metric requiring banks to maintain a stable funding profile in relation to the composition of their assets and off-balance sheet activities over a one-year period.",
    category: "risk",
    sourcePage: 319
  },
  {
    term: "Environmental & Social Risk Management System (ESRMS)",
    acronym: "ESRMS",
    definition: "An institutional risk architecture ensuring that all credit facilities exceeding LKR 500,000 are screened for environmental destruction, child labour, emissions, and community impact.",
    category: "sustainability",
    sourcePage: 319
  },
  {
    term: "Social Performance Management (SPM)",
    acronym: "SPM",
    definition: "The systematic translation of the bank's social mission into practice, aligning employee conduct, customer protection, and products with poverty alleviation.",
    category: "sustainability",
    sourcePage: 320
  },
  {
    term: "Sustainability Standards & Certification Initiative (SSCI)",
    acronym: "SSCI",
    definition: "A globally recognized framework developed by the European Organization for Sustainable Development (EOSD) in Germany to accredit value-driven financial institutions.",
    category: "sustainability",
    sourcePage: 320
  },
  {
    term: "Value Chain Financing (VCF)",
    acronym: "VCF",
    definition: "Financial products structured around agricultural or commercial value chains, linking input suppliers, primary producers, processors, and corporate anchor buyers.",
    category: "banking",
    sourcePage: 320
  },
  {
    term: "SLFRS 9 Financial Instruments",
    acronym: "SLFRS 9",
    definition: "Sri Lanka Accounting Standard governing the classification, measurement, and forward-looking Expected Credit Loss (ECL) provisioning for financial assets.",
    category: "accounting",
    sourcePage: 321
  },
  {
    term: "SANASA Movement",
    definition: "Sri Lanka's nationwide thrift, credit, and cooperative society movement originating at the village level, encompassing over 8,000 primary community societies.",
    category: "governance",
    sourcePage: 321
  }
];

export const ABBREVIATIONS_DATA: AbbreviationItem[] = [
  { abbreviation: "ADB", meaning: "Asian Development Bank", sourcePage: 316 },
  { abbreviation: "AGM", meaning: "Annual General Meeting", sourcePage: 316 },
  { abbreviation: "ATM", meaning: "Automated Teller Machine", sourcePage: 316 },
  { abbreviation: "BCP", meaning: "Business Continuity Planning", sourcePage: 316 },
  { abbreviation: "BIB", meaning: "Business Internet Banking", sourcePage: 316 },
  { abbreviation: "CAR", meaning: "Capital Adequacy Ratio", sourcePage: 316 },
  { abbreviation: "CBSL", meaning: "Central Bank of Sri Lanka", sourcePage: 316 },
  { abbreviation: "CEFTS", meaning: "Common Electronic Fund Transfer Switch", sourcePage: 316 },
  { abbreviation: "CET1", meaning: "Common Equity Tier 1", sourcePage: 316 },
  { abbreviation: "CRIB", meaning: "Credit Information Bureau of Sri Lanka", sourcePage: 316 },
  { abbreviation: "CSE", meaning: "Colombo Stock Exchange", sourcePage: 316 },
  { abbreviation: "CSR", meaning: "Corporate Social Responsibility", sourcePage: 316 },
  { abbreviation: "DFI", meaning: "Development Finance Institution", sourcePage: 316 },
  { abbreviation: "ECL", meaning: "Expected Credit Loss", sourcePage: 316 },
  { abbreviation: "EPS", meaning: "Earnings Per Share", sourcePage: 316 },
  { abbreviation: "ESMS", meaning: "Environmental and Social Management System", sourcePage: 316 },
  { abbreviation: "ESG", meaning: "Environmental, Social, and Governance", sourcePage: 316 },
  { abbreviation: "EY", meaning: "Ernst & Young (External Auditors)", sourcePage: 316 },
  { abbreviation: "FCP", meaning: "Financial Consumer Protection", sourcePage: 316 },
  { abbreviation: "GABV", meaning: "Global Alliance for Banking on Values", sourcePage: 316 },
  { abbreviation: "GDP", meaning: "Gross Domestic Product", sourcePage: 316 },
  { abbreviation: "GHG", meaning: "Greenhouse Gas", sourcePage: 316 },
  { abbreviation: "GRI", meaning: "Global Reporting Initiative", sourcePage: 316 },
  { abbreviation: "IFC", meaning: "International Finance Corporation", sourcePage: 316 },
  { abbreviation: "IIRC", meaning: "International Integrated Reporting Council", sourcePage: 316 },
  { abbreviation: "LCR", meaning: "Liquidity Coverage Ratio", sourcePage: 316 },
  { abbreviation: "LKAS", meaning: "Sri Lanka Accounting Standards", sourcePage: 317 },
  { abbreviation: "MSME", meaning: "Micro, Small, and Medium Enterprises", sourcePage: 317 },
  { abbreviation: "NIM", meaning: "Net Interest Margin", sourcePage: 317 },
  { abbreviation: "NPL", meaning: "Non-Performing Loan", sourcePage: 317 },
  { abbreviation: "NSFR", meaning: "Net Stable Funding Ratio", sourcePage: 317 },
  { abbreviation: "PAT", meaning: "Profit After Tax", sourcePage: 317 },
  { abbreviation: "PBT", meaning: "Profit Before Tax", sourcePage: 317 },
  { abbreviation: "ROA", meaning: "Return on Assets", sourcePage: 317 },
  { abbreviation: "ROE", meaning: "Return on Equity", sourcePage: 317 },
  { abbreviation: "RWA", meaning: "Risk Weighted Assets", sourcePage: 317 },
  { abbreviation: "SDG", meaning: "Sustainable Development Goals (United Nations)", sourcePage: 317 },
  { abbreviation: "SLFRS", meaning: "Sri Lanka Financial Reporting Standards", sourcePage: 317 },
  { abbreviation: "SME", meaning: "Small and Medium Enterprises", sourcePage: 317 },
  { abbreviation: "SPM", meaning: "Social Performance Management", sourcePage: 317 },
  { abbreviation: "SSCI", meaning: "Sustainability Standards & Certification Initiative", sourcePage: 317 },
  { abbreviation: "VCF", meaning: "Value Chain Financing", sourcePage: 317 }
];

export const CORPORATE_INFORMATION_DATA = {
  nameOfBank: "SANASA Development Bank PLC",
  companyName: "SANASA Development Bank PLC",
  legalForm: "A Public Quoted Company with limited liability, incorporated under the Companies Act No. 17 of 1982 and re-registered under the Companies Act No. 07 of 2007, and a Licensed Specialised Bank under Banking Act No. 30 of 1988.",
  registrationNo: "PB 62 PQ",
  registrationNumber: "PB 62 PQ",
  vatRegistrationNo: "409000109-7000",
  boardSecretaries: "S S P Corporate Services (Private) Limited, No. 101, Inner Flower Road, Colombo 03, Sri Lanka.",
  externalAuditors: "Ernst & Young (EY), Chartered Accountants, 201, De Saram Place, P.O. Box 101, Colombo 10, Sri Lanka.",
  auditors: "Ernst & Young (EY), Chartered Accountants",
  auditorsAddress: "201, De Saram Place, P.O. Box 101, Colombo 10, Sri Lanka.",
  registeredOffice: "No. 12, Edmonton Road, Kirulapone, Colombo 06, Sri Lanka.",
  telephone: "+94 11 283 2500 / +94 11 283 2599",
  contactPhone: "+94 11 283 2500 / +94 11 283 2599",
  email: "info@sdb.lk",
  website: "www.sdb.lk",
  stockExchangeListing: "The ordinary voting shares of the Bank are listed on the Main Board of the Colombo Stock Exchange (CSE) under the stock ticker symbol 'SDB.N0000'.",
  agmNotice: {
    meeting: "29th Annual General Meeting",
    date: "Wednesday, 27th May 2026",
    time: "10:00 A.M.",
    venue: "Main Auditorium, SANASA Campus, Paragammana, Hettimulla, Kegalle, Sri Lanka and via online virtual platform.",
    sourcePage: 324
  },
  sourcePage: 328
};
