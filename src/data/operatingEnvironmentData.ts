/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Operating Environment & Macroeconomic Context
 * Source: Official Published Annual Report 2025 (Pages 20-23)
 */

export interface MacroIndicator {
  indicator: string;
  value2025: string;
  value2024?: string;
  trend: "positive" | "negative" | "neutral" | "caution";
  context: string;
  sourcePage: number;
}

export interface RegulatoryUpdate {
  title: string;
  authority: string;
  impact: string;
  bankAction: string;
  sourcePage: number;
}

export const GLOBAL_ECONOMY_DATA = {
  summary: "Despite intensifying geopolitical tensions and elevated policy uncertainty, the global economy remained resilient in 2025 with an estimated growth of 3.3%. Global trade volumes expanded by 4.1%, driven mainly by technology-related exports and AI investments.",
  gdpGrowth: "3.3%",
  tradeVolumeGrowth: "4.1%",
  commodityContext: "Oil prices remained low during 2025 due to tepid demand growth and strong supply conditions, easing cost pressures across emerging economies. Gold prices reached historic highs due to safe-haven central bank purchases.",
  sourcePage: 20
};

export const SRI_LANKA_MACRO_DATA = {
  gdpGrowth2025: "5.0%",
  gdpGrowthContext: "Prior to Cyclone Ditwah, Sri Lanka's economy was on a firm recovery path, projected to return to pre-crisis levels four years earlier than initial IMF projections.",
  cycloneDitwahImpact: {
    event: "Cyclone Ditwah (27-29 November 2025)",
    summary: "Affected islandwide agricultural output, physical infrastructure, and rural livelihoods. Prompt government and banking sector relief measures under CBSL Circular No. 4 helped restore essential services rapidly.",
    bankRole: "SDB Bank extended moratoriums, restructuring packages, and concessionary rehabilitation loans to impacted farming communities."
  },
  inflationAndRates: "The deflationary trend reversed with headline inflation gradually normalising towards the Central Bank's 5.0% medium-term target band. Market interest rates adjusted downward, easing financial stress on borrowers.",
  externalSector: {
    exportEarnings: "USD 13.6 Bn (Highest on record, surpassing 2022 peak of USD 13.1 Bn)",
    importExpenditure: "USD 21.5 Bn (Driven by resumption of vehicle imports amounting to USD 2.0 Bn)",
    workersRemittances: "USD 8.1 Bn (+22.8% YoY vs USD 6.6 Bn in 2024)",
    tourismEarnings: "USD 3.2 Bn (+1.6% YoY growth with historic tourist arrival numbers)",
    grossOfficialReserves: "Sustained upward accumulation providing robust import cover."
  },
  sourcePage: 21
};

export const BANKING_SECTOR_DATA = {
  overview: "The resilience and asset quality of the Sri Lankan banking sector improved substantially throughout 2025. Total banking assets expanded 12.6% YoY to reach LKR 24.9 Tn, driven by a 21.5% resurgence in gross loans and receivables.",
  profitability: "Sector Profit After Tax (PAT) expanded 13.8% YoY to LKR 369.1 Bn (2024: LKR 324.2 Bn). NIM, ROA, and ROE slightly normalised as interest margins compressed following rate cuts.",
  assetQuality: "Banking sector Stage 3 impaired loans ratio improved dramatically from 12.3% in 2024 down to 9.4% in 2025.",
  capitalAdequacy: "Sector Total Capital Adequacy Ratio (CAR) strengthened to 18.7% (September 2025), comfortably above the 12.5% statutory threshold.",
  liquidity: "Rupee Liquidity Coverage Ratio (LCR) stood at 283.9% and All-Currency LCR at 249.7%, substantially exceeding the 100% regulatory baseline.",
  sourcePage: 23
};

export const REGULATORY_LANDSCAPE_DATA: RegulatoryUpdate[] = [
  {
    title: "Maximum Loan-to-Value (LTV) Ratio Caps on Motor Vehicles",
    authority: "Central Bank of Sri Lanka (CBSL)",
    impact: "Introduced mandatory LTV caps following the resumption of commercial and personal motor vehicle imports to mitigate excessive consumer credit risk.",
    bankAction: "SDB calibrated leasing credit policy and underwriting margins to ensure strict compliance while supporting productive commercial vehicles.",
    sourcePage: 23
  },
  {
    title: "Addendum to Circular No. 4 of 2024 (SME Relief Measures)",
    authority: "CBSL Department of Bank Supervision",
    impact: "Standardised guidelines and eligibility criteria across all licensed banks to assist distressed SMEs recovering from the macroeconomic crisis.",
    bankAction: "Proactively restructured qualifying SME facilities and linked entrepreneurs with advisory services and value-chain financing.",
    sourcePage: 23
  },
  {
    title: "IT & Cybersecurity Incident Reporting Guidelines",
    authority: "CBSL & Sri Lanka CERT",
    impact: "Mandatory protocols for real-time reporting of information security and system availability disruptions.",
    bankAction: "Upgraded Security Operations Centre (SOC) monitoring and integrated automated threat logging across UPay and core banking systems.",
    sourcePage: 23
  },
  {
    title: "Relief Measures under Circular No. 4 of 2025 (Cyclone Ditwah)",
    authority: "Central Bank of Sri Lanka",
    impact: "Immediate repayment moratoria and concessionary working capital support for storm-affected agriculturalists and micro enterprises.",
    bankAction: "Rapid branch-level deployment of concessionary credit and restructuring across northern, north-central, and eastern provinces.",
    sourcePage: 23
  },
  {
    title: "Guidelines on Recovery Plans for Licensed Banks",
    authority: "CBSL Banking Act Direction No. 5 of 2024",
    impact: "Requires formal, stress-tested recovery roadmaps to ensure institutional viability during severe systemic financial shocks.",
    bankAction: "Formulated comprehensive Bank Recovery Plan approved by the Board Integrated Risk Management Committee.",
    sourcePage: 23
  }
];

export const SUBSEQUENT_PERIOD_OUTLOOK = {
  status: "Subsequent-Period Context (Post-31 December 2025)",
  disclaimer: "The following context emerged subsequent to the 2025 financial year-end and is disclosed to provide complete transparency regarding external operating dynamics entering 2026.",
  headline: "Global Geopolitical Shocks & Sri Lankan Resilience in 2026",
  details: [
    "In early 2026, heightened geopolitical conflict in the Middle East led to the temporary closure of the Strait of Hormuz, causing severe disruptions to roughly 20% of global petroleum and LNG flows.",
    "Crude oil prices briefly surged above USD 115 per barrel in March 2026, triggering renewed global inflationary pressures and prompting OECD to revise global growth down to 2.9%.",
    "In Sri Lanka, domestic fuel costs faced a 33% to 35% surge in late March 2026, alongside volatility in key forex inflows including tea exports and Middle Eastern remittances.",
    "Despite these external headwinds, the Central Bank of Sri Lanka forecasts 2026 GDP growth to remain resilient in the 4.0% to 5.0% range, supported by structural reforms, domestic food security initiatives, and eased monetary conditions."
  ],
  sourcePage: 23
};
