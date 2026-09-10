/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Supplementary Information & Glossary Data
 * Source: Official Published Annual Report 2025 (Pages 298-328)
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

export const BASEL_III_PILLAR_III_DATA = {
  capitalAdequacyRatios: [
    { ratio: "Common Equity Tier 1 (CET1) Capital Ratio", requirement: "7.00%", bank2025: "14.20%", bank2024: "15.00%", surplus: "+7.20%" },
    { ratio: "Total Tier 1 Capital Ratio", requirement: "8.50%", bank2025: "14.20%", bank2024: "15.00%", surplus: "+5.70%" },
    { ratio: "Total Capital Adequacy Ratio (CAR)", requirement: "12.50%", bank2025: "15.24%", bank2024: "16.37%", surplus: "+2.74%" },
    { ratio: "Liquidity Coverage Ratio (LCR) - All Currency", requirement: "100.00%", bank2025: "151.86%", bank2024: "279.65%", surplus: "+51.86%" },
    { ratio: "Net Stable Funding Ratio (NSFR)", requirement: "100.00%", bank2025: "144.82%", bank2024: "173.02%", surplus: "+44.82%" }
  ],
  riskWeightedAssets: {
    creditRisk: "LKR 86,412 Mn",
    marketRisk: "LKR 1,845 Mn",
    operationalRisk: "LKR 8,924 Mn",
    totalRWA: "LKR 97,181 Mn"
  },
  sourcePage: 300
};

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
  legalForm: "A Public Quoted Company with limited liability, incorporated under the Companies Act No. 17 of 1982 and re-registered under the Companies Act No. 07 of 2007, and a Licensed Specialised Bank under Banking Act No. 30 of 1988.",
  registrationNo: "PB 62 PQ",
  vatRegistrationNo: "409000109-7000",
  boardSecretaries: "S S P Corporate Services (Private) Limited, No. 101, Inner Flower Road, Colombo 03, Sri Lanka.",
  externalAuditors: "KPMG (Chartered Accountants), 32A, Sir Mohamed Macan Markar Mawatha, Colombo 03, Sri Lanka.",
  registeredOffice: "No. 12, Edmonton Road, Kirulapone, Colombo 06, Sri Lanka.",
  telephone: "+94 11 283 2500 / +94 11 283 2599",
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
