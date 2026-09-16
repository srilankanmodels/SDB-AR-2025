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
  summary:
    "Despite heightened global uncertainties, the global economy demonstrated resilience in 2025. Supported by stabilising trade conditions, private sector adaptability, and technology-led investments (especially in Artificial Intelligence), the International Monetary Fund (IMF) January 2026 World Economic Outlook (WEO) estimated global growth at 3.3% in 2026.",
  gdpGrowth: "3.3%",
  gdpGrowth2027: "3.1%",
  tradeVolumeGrowth: "4.1%",
  fastestMajorEconomy: "India (6.6% in 2025)",
  commodityContext:
    "Oil prices remained low during 2025 due to tepid global demand growth and robust supply, easing cost pressures across emerging economies. Prices of energy commodities are projected to decline further by around 7% in 2026, providing continued disinflationary support. Gold prices surged to historic record highs, driven by heightened geopolitical risks and central bank reserve purchases.",
  sections: [
    {
      title: "Global Economic Growth",
      content:
        "Against a backdrop of stabilising trade tensions and supportive financial conditions, the January 2026 World Economic Outlook (WEO) update of the International Monetary Fund (IMF) estimated global economic growth at 3.3% in 2026. Growth was underpinned by strong private sector adaptability and technology-led investments, particularly in Artificial Intelligence (AI)."
    },
    {
      title: "Trade Policy Developments and Global Trade",
      content:
        "Global trade sentiment was affected during the first half of 2025 by revisions to the US tariff structure and subsequent policy shifts. However, frontloading of trade, investment, and inventory accumulation, followed by bilateral agreements and downward revisions to tariffs, sustained economic performance. World trade volumes expanded by 4.1% in 2025, driven mainly by technology-related exports."
    },
    {
      title: "Energy and Commodity Prices",
      content:
        "Oil prices remained low during 2025 due to tepid global demand and strong supply, easing cost pressures across economies. Energy commodities are expected to decline further by around 7% in 2026, providing disinflationary support. Gold prices reached record highs during the year, supported by safe-haven investor demand and central bank purchases."
    },
    {
      title: "Regional Growth and Financial Conditions",
      content:
        "India remained the fastest growing major economy, recording an estimated 6.6% growth in 2025, driven by strong domestic demand and investment. In the United States, moderating inflation and softening labour market conditions facilitated easier global financial conditions, while a weaker US dollar supported global trade flows and reduced exchange rate-driven inflationary pressures in developing economies."
    },
    {
      title: "Global Outlook and Downside Risks",
      content:
        "Global growth is projected at 3.3% in 2026 before moderating to 3.1% in 2027. Downside risks remain elevated due to geopolitical tensions, evolving trade policies, and climate-related disruptions. Subsequent to year-end, the closure of the Strait of Hormuz in March 2026 halted ~20% of global oil/LNG shipments, spiking Brent crude past $115/bbl and creating stagflation risks that led the OECD to trim 2026 global growth forecasts to 2.9%."
    }
  ],
  sourcePage: 20
};

export const SRI_LANKA_MACRO_DATA = {
  gdpGrowth2025: "5.0%",
  gdpRevisedCBSL: "4.5%",
  summary:
    "The Sri Lankan economy sustained its firm recovery momentum in 2025, supported by broad-based growth across all major sectors and the resumption of motor vehicle imports. While real GDP expanded by 5.0% during the first nine months of 2025, the impact of Cyclone Ditwah in late November caused temporary agricultural disruption, prompting the Central Bank to estimate full-year 2025 real GDP growth at around 4.5%.",
  cycloneDitwahImpact: {
    event: "Cyclone Ditwah (27–29 November 2025)",
    summary:
      "Cyclone Ditwah made landfall on the eastern coast on 28 November 2025, causing catastrophic flooding, landslides, and infrastructure damage across the island. Affecting over 1.7 million people, the disaster caused an estimated USD 4.1 billion in total economic damage (equivalent to approx. 4% of GDP in 2024), with more than 106,000 hectares of productive paddy land adversely affected.",
    bankRole:
      "SDB Bank mobilized rapid humanitarian and financial assistance: deployed branch teams within 48-72 hours, implemented loan repayment moratoriums under CBSL Circular No. 4 of 2025, provided emergency working capital to affected farmers and SMEs, and contributed relief supplies via 'Manusath Derana'."
  },
  gdpSectors: [
    { name: "Agriculture", growth: "+3.6%", context: "Sustained output expansion prior to Ditwah, supported by fertiliser availability and favourable weather." },
    { name: "Industry", growth: "+8.1%", context: "Strong resurgence in manufacturing, construction recovery, and higher demand for industrial inputs." },
    { name: "Services", growth: "+3.5%", context: "Buoyant financial services, transportation, telecommunications, and tourism-related trade services." },
    { name: "Taxes Less Subsidies", growth: "+13.9%", context: "Significant boost in import tax revenues following the relaxation and resumption of motor vehicle imports." }
  ],
  interestRates: {
    overview:
      "Market interest rate structures adjusted downwards in 2025. Following a 25 bps policy rate cut in May 2025, the Average Weighted Call Money Rate (AWCMR) hovered around 30 bps above the Overnight Policy Rate. The Average Weighted Prime Lending Rate (AWPR) experienced mild upward pressure later in the year due to short-term market dynamics, government security yields, and rising deposit competition.",
    privateCreditGrowth: "Credit to the private sector by Licensed Commercial Banks expanded by 25.2% YoY (or LKR 2.1 Tn), propelled by revived economic activity and vehicle import financing.",
    realRates: "Ex-post real interest rates declined towards the end of 2025, expected to ease further as inflation converges to the 5.0% medium-term target."
  },
  inflation: {
    overview:
      "Headline inflation turned positive in August 2025 after 11 consecutive months of deflation, following electricity tariff revisions in mid-June 2025 and base effects. Although food inflation experienced upward pressure post-Cyclone Ditwah, rapid re-cultivation and restoration efforts helped soften the shock.",
    status: "Normalising within the CBSL 5.0% Target Band"
  },
  exchangeRate: {
    depreciation: "5.6%",
    context:
      "The Sri Lankan Rupee depreciated by 5.6% against the US Dollar in 2025, and also against the Euro, Pound Sterling, Chinese Yuan, Japanese Yen, Indian Rupee, and Australian Dollar, reflecting market-determined price discovery amidst heightened import demand."
  },
  labourMarket: {
    unemploymentRate: "4.3% (Q3 2025)",
    participationRate: "49.9% (vs 49.7% in Q1 2025)",
    context:
      "Both the Informal Private Sector Wage Rate Index and Public Sector Wage Rate Index rose in H2-2025. Unemployment rose marginally to 4.3% in Q3 2025 as new entrants outpaced job creation. Female labour participation increased while male participation slightly contracted."
  },
  externalSector: {
    currentAccount: "Estimated Surplus in 2025 — Highest annual surplus ever recorded for Sri Lanka.",
    exportEarnings: "USD 13.6 Bn (Highest on record, surpassing 2022 peak of USD 13.1 Bn)",
    importExpenditure: "USD 21.5 Bn (Driven by vehicle imports of USD 2.0 Bn, approaching the 2018 peak of USD 22.2 Bn)",
    workersRemittances: "USD 8.1 Bn (+22.8% YoY surge vs USD 6.6 Bn in 2024)",
    tourismEarnings: "USD 3.2 Bn (+1.6% YoY with historic tourist arrivals)",
    grossOfficialReserves: "USD 6.8 Bn at end-2025 (up from USD 6.1 Bn in 2024), buoyed by net CBSL market purchases of USD 2.0 Bn, ADB inflows, and IMF EFF/RFI disbursements."
  },
  sourcePage: 21
};

export const BANKING_SECTOR_DATA = {
  overview:
    "The Sri Lankan banking sector maintained strong resilience, improved asset quality, and healthy capital adequacy throughout 2025. Total banking assets expanded by 12.6% YoY to LKR 24.9 Tn, primarily driven by a 21.5% acceleration in gross loans and receivables.",
  profitability: {
    pat: "LKR 369.1 Bn",
    patGrowth: "+13.8% YoY (vs LKR 324.2 Bn in 2024)",
    margins: "Profitability metrics (ROE, ROA, NIM) witnessed mild compression towards late 2025 due to interest rate cuts and tighter lending spreads."
  },
  assetQuality: {
    stage3Ratio: "9.4% (December 2025)",
    stage3Previous: "12.3% (December 2024)",
    context: "Overall default risk in the banking sector declined significantly as economic recovery and restructuring allowed borrowers to normalize debt servicing."
  },
  capitalAdequacy: {
    carTotal: "18.7% (September 2025)",
    carPrevious: "18.5% (September 2024)",
    statutoryMinimum: "12.50%",
    context: "Capital adequacy remained comfortably above the regulatory threshold, preserving institutional strength against potential credit shocks."
  },
  liquidity: {
    rupeeLCR: "283.9% (vs 349.9% in 2024)",
    allCurrencyLCR: "249.7% (vs 313.8% in 2024)",
    statutoryMinimum: "100.0%",
    context: "While sector liquidity moderated following rapid loan expansion, both Rupee and All-Currency LCRs remained well above statutory baselines."
  },
  creditExpansion: {
    grossLoans: "LKR 13.9 Tn",
    growthYoY: "+21.5% YoY",
    context: "Strong credit appetite from commercial enterprises, smallholders, and vehicle leasing."
  },
  sourcePage: 23
};

export const REGULATORY_LANDSCAPE_DATA: RegulatoryUpdate[] = [
  {
    title: "Maximum Loan-to-Value (LTV) Ratio Caps on Motor Vehicles",
    authority: "Central Bank of Sri Lanka (CBSL)",
    impact:
      "Imposed strict LTV caps on credit facilities for motor vehicle purchases to regulate excessive consumer leverage following the resumption of vehicle imports.",
    bankAction:
      "SDB Bank updated its vehicle leasing underwriting criteria, ensuring strict adherence to LTV boundaries while focusing on productive commercial vehicles and green electric mobility.",
    sourcePage: 23
  },
  {
    title: "Addendum to Circular No. 4 of 2024 (Relief Measures for Distressed SMEs)",
    authority: "CBSL Department of Bank Supervision",
    impact:
      "Issued clarifications and uniform benchmarks to ensure consistent implementation of financial concessions and facility restructuring across all licensed commercial and specialised banks.",
    bankAction:
      "Restructured eligible micro and SME loans, waived penalty interests, and provided advisory support to help viable borrowers sustain operational recovery.",
    sourcePage: 23
  },
  {
    title: "Guidelines for Reporting IT and Cybersecurity Incidents",
    authority: "Central Bank of Sri Lanka & Sri Lanka CERT",
    impact:
      "Established mandatory incident reporting timeframes and cybersecurity risk governance frameworks, acknowledging the banking sector's growing reliance on digital channels.",
    bankAction:
      "Operates a 24/7 Security Operations Centre (SOC), upgraded endpoint detection across all 94 branches and UPay, and achieved zero reportable cybersecurity incidents in 2025.",
    sourcePage: 23
  },
  {
    title: "Relief Measures under Circular No. 4 of 2025 (Cyclone Ditwah)",
    authority: "Central Bank of Sri Lanka",
    impact:
      "Mandated swift debt moratoria, concessionary interest rates, and loan restructuring to support individuals, farming communities, and MSMEs impacted by Cyclone Ditwah.",
    bankAction:
      "Swiftly established dedicated branch desks in cyclone-affected regions, granting repayment relief and emergency cultivation loans to over 15,000 customers.",
    sourcePage: 23
  },
  {
    title: "Guidelines on Recovery Plans for Licensed Banks",
    authority: "CBSL Banking Act Direction No. 5 of 2024",
    impact:
      "Required licensed banks to formulate structured, stress-tested recovery plans to maintain institutional viability and operational continuity during systemic financial distress.",
    bankAction:
      "Developed a Board-approved Comprehensive Bank Recovery Plan, overseen by the Board Integrated Risk Management Committee (BIRMC), addressing capital, liquidity, and operational continuity triggers.",
    sourcePage: 23
  }
];

export const SUBSEQUENT_PERIOD_OUTLOOK = {
  status: "Subsequent-Period Context (Post-31 December 2025)",
  disclaimer:
    "The following disclosures reflect material geopolitical and economic developments emerging in Q1 2026, presented for full transparency as disclosed on Page 23 of the Annual Report.",
  headline: "2026 Outlook Context: Macroeconomic Projections & Global Shocks",
  cbslProjections: {
    inflation: "Expected to increase gradually towards the 5.0% medium-term target band.",
    gdpGrowth: "Forecast in the range of 4.0% to 5.0% for 2026.",
    enablers: "Supported by eased monetary conditions, post-Ditwah public reconstruction expenditure, and structural economic reforms."
  },
  geopoliticalShock: {
    event: "War in the Middle East & Strait of Hormuz Closure (Late February – March 2026)",
    impactSummary:
      "The outbreak of the armed conflict in late February 2026 and the subsequent closure of the Strait of Hormuz in March 2026 halted approximately 20% of global oil and liquefied natural gas (LNG) shipments.",
    globalEffects: [
      "Brent crude oil prices surged past USD 115 per barrel in late March 2026.",
      "European natural gas benchmarks nearly doubled, reigniting global stagflation concerns.",
      "OECD revised global growth projections down by 0.3% to 2.9% for 2026."
    ],
    sriLankanImpact: [
      "Sri Lanka faced an external 'system shock' with domestic fuel prices escalating by 33% to 35% in late March 2026.",
      "Freight rates and insurance premiums increased for primary exports (Ceylon tea, apparel) and Middle Eastern remittance inflows faced volatility."
    ],
    resilienceOutlook:
      "Notwithstanding these external shocks, the Central Bank of Sri Lanka forecasts 2026 economic growth to remain close to 5.0%, buoyed by enhanced food self-reliance, renewed tourism interest, and disciplined fiscal-monetary governance. SDB Bank's 2026–2029 Strategic Blueprint with Rabo Partnerships provides a solid foundation to navigate volatility."
  },
  sourcePage: 23
};
