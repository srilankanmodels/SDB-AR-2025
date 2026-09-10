/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Overview, Purpose & Strategy Data
 * Source: Official Published Annual Report 2025 (Pages 4-9, 14, 32-33)
 */

export interface StrategicPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  enablers: string[];
  sourcePage: number;
}

export interface MilestoneEvent {
  year: string;
  title: string;
  description: string;
  category: "foundation" | "growth" | "listing" | "digital" | "turnaround";
  sourcePage: number;
}

export interface AwardItem {
  id: number;
  title: string;
  organization: string;
  category?: string;
  image?: string;
  description: string;
  sourcePage: number;
}

export interface YearInReviewBlock {
  id: string;
  title: string;
  badge: string;
  items: string[];
  sourcePage: number;
}

export const VISION_MISSION_DATA = {
  vision: "To enable the economic transformation of progressive individuals, communities, Co-operatives and entrepreneurs.",
  mission: "To be a leading partner for inclusive and sustainable national development.",
  purpose: "Significant Contribution towards the holistically sustainable Development and Prosperity of Sri Lanka",
  values: [
    {
      title: "Ethical Standards",
      desc: "To foster and maintain the highest ethical standards at all levels of the Bank in dealing with customers, stakeholders and competitors."
    },
    {
      title: "Innovation & Profit Driven",
      desc: "To be innovative and profit driven in providing financial services."
    },
    {
      title: "Professionalism & Courtesy",
      desc: "To be courteous and professional in all business dealings."
    },
    {
      title: "Non-Discrimination & Equal Treatment",
      desc: "To avoid discrimination on the grounds of religion, sex, ethnicity, social status and language."
    },
    {
      title: "Sustainability",
      desc: "A strong commitment to sustainability in all our actions."
    }
  ],
  goals: [
    "Improve the asset base to stay competitive and resilient in the market.",
    "Transition from a retail focus to a broader SME focus.",
    "Establish SDB as the Bank of the choice for the cooperative sector.",
    "Introduce a comprehensive digital platform to future proof the Bank.",
    "Provide a delightful experience to customers through value added service.",
    "Developing people and modeling future-ready leadership."
  ],
  sourcePage: 4
};

export const STRATEGIC_PILLARS_DATA: StrategicPillar[] = [
  {
    id: "cooperative-banking",
    title: "Cooperative Banking",
    subtitle: "Anchor Partner to SANASA Movement",
    description: "Serving over 8,000 primary SANASA societies with dedicated liquidity pools, concessionary funding channels, and institutional capacity building.",
    enablers: ["Dedicated Service Counters", "Concessionary Funding Channels", "Cooperative Training Programmes"],
    sourcePage: 4
  },
  {
    id: "msmes",
    title: "MSMEs Financing",
    subtitle: "Catalyst for Grassroots Enterprise",
    description: "Accelerating credit and non-financial capacity support for Micro, Small and Medium Enterprises, with special emphasis on female-led businesses.",
    enablers: ["SME Plus & Business Plus", "Value Chain Linkages", "Capacity Building & Mentorship"],
    sourcePage: 4
  },
  {
    id: "agri-banking",
    title: "Food & Agri-Banking and VCF",
    subtitle: "Value Chain Financing & Food Security",
    description: "Targeted financing solutions across agricultural ecosystems, from paddy, tea, rubber smallholders to processing and export value chains.",
    enablers: ["Agri-Strategy with Rabo", "45-Member Agri Task Force", "Agri Manual & Technical Inspections"],
    sourcePage: 4
  },
  {
    id: "digital-inclusion",
    title: "Digital Inclusion & Innovations",
    subtitle: "Modernising the Rural Economy",
    description: "Bridging the urban-rural financial divide with UPay, Business Internet Banking, automated cash deposits, and electronic KYC onboarding.",
    enablers: ["UPay Digital Wallet", "Business Internet Banking (BIB)", "LankaPay QR Expansion"],
    sourcePage: 4
  },
  {
    id: "sustainable-bank",
    title: "Sustainable Value-Driven Bank",
    subtitle: "Tripartite Impact: Economy, Society, Planet",
    description: "Embedding Universal Standards for Social and Environmental Performance Management (SPM) and advancing Sri Lanka's decarbonisation and climate resilience.",
    enablers: ["ESRMS Risk Framework", "Global SSCI Standards (Germany)", "Renewable Energy Financing"],
    sourcePage: 4
  }
];

export const EVOLUTION_MILESTONES_DATA: MilestoneEvent[] = [
  {
    year: "1997",
    title: "The Foundation",
    description: "SANASA Development Bank Ltd. incorporated with a share capital of LKR 123 Mn, largely subscribed by primary SANASA Societies, to serve Sri Lanka's community-led cooperative sector.",
    category: "foundation",
    sourcePage: 6
  },
  {
    year: "1998",
    title: "Regional Expansion",
    description: "Opens 10th branch in the historic city of Kandy, establishing a robust presence outside the Colombo metropolis.",
    category: "growth",
    sourcePage: 6
  },
  {
    year: "1999",
    title: "Asset Base Crossing LKR 100 Mn",
    description: "Total assets cross LKR 100 Mn within two years of operation, validating the strength and viability of the cooperative development banking model.",
    category: "growth",
    sourcePage: 6
  },
  {
    year: "2004",
    title: "Launch of 'Uttamavi'",
    description: "Introduces 'Uttamavi', a pioneering financial and enterprise package for women entrepreneurs that garnered international microfinance recognition.",
    category: "growth",
    sourcePage: 6
  },
  {
    year: "2007",
    title: "Top 50 Global Microfinance Institution",
    description: "Ranked among the Top 50 microfinance institutions in the world (out of 641 providers) as the bank celebrated 10 years of service with 25 branches.",
    category: "growth",
    sourcePage: 6
  },
  {
    year: "2008",
    title: "National Excellence Award",
    description: "Wins the National Excellence Award. Total assets surge to LKR 10 Bn, and employee cadre expands to 500 professionals.",
    category: "growth",
    sourcePage: 6
  },
  {
    year: "2010",
    title: "World #2 Ranking & Fitch Rating",
    description: "Ranked second-best microfinance institution in the world by MIX Market Global USA. Head Office relocated to Kirulapone; receives BB+(lka) Fitch Rating.",
    category: "growth",
    sourcePage: 7
  },
  {
    year: "2012",
    title: "Public Listing on CSE",
    description: "Listed on the Main Board of the Colombo Stock Exchange, completing transition to a widely held licensed specialised bank.",
    category: "listing",
    sourcePage: 7
  },
  {
    year: "2016",
    title: "Modern Identity & Asset Milestone",
    description: "Asset base reaches LKR 66 Bn. Launches modern SDB corporate identity and establishes dedicated Tele Collection Unit in Malabe.",
    category: "growth",
    sourcePage: 7
  },
  {
    year: "2017",
    title: "International DFI Equity (USD 22 Mn)",
    description: "Secures landmark USD 22 Mn investment from IFC, FMO, and SBI, strengthening Tier 1 capital and governance.",
    category: "growth",
    sourcePage: 7
  },
  {
    year: "2018",
    title: "Fastest Growing MSME Bank",
    description: "Awarded 'The Fastest Growing MSME Bank in Sri Lanka' by Global Banking and Finance Review, UK. Launches Corporate Top Saver.",
    category: "growth",
    sourcePage: 7
  },
  {
    year: "2019",
    title: "Acquiring 'UPay' Digital Platform",
    description: "Acquires digital payment gateway UPay to spearhead fintech adoption across rural merchants. Tier II capital injection of USD 18 Mn from DGGF & BIO.",
    category: "digital",
    sourcePage: 7
  },
  {
    year: "2020",
    title: "Oversubscribed Rights Issue & LKR 100 Bn Loans",
    description: "First digital rights issue in CSE history is oversubscribed. Loan book exceeds LKR 100 Bn. Wins 'Best CSR Bank' and 'Rural/Cooperative Bank of the Year'.",
    category: "growth",
    sourcePage: 7
  },
  {
    year: "2021",
    title: "Historic Profit & DFC Partnership",
    description: "Achieves record LKR 893 Mn PAT. Receives USD 40 Mn loan facility from US DFC to empower female entrepreneurs and SMEs.",
    category: "growth",
    sourcePage: 7
  },
  {
    year: "2022",
    title: "25th Anniversary & ADB Credit Line",
    description: "Celebrates silver jubilee of 25 years. Partners with Asian Development Bank (ADB) for tea smallholders and MSME credit lines. Surpasses LKR 100 Bn deposits.",
    category: "growth",
    sourcePage: 8
  },
  {
    year: "2024",
    title: "Transformation & Savings Surge",
    description: "Savings deposits surge to LKR 20.5 Bn (+LKR 4.01 Bn YoY). Ranks 53rd in LMD 100. Executes multi-million dollar core IT and data centre upgrades.",
    category: "turnaround",
    sourcePage: 8
  },
  {
    year: "2025",
    title: "A Future Handcrafted — Turnaround Success",
    description: "Reverses 5-year portfolio contraction with 15.46% loan growth (LKR 109.84 Bn). Achieves LKR 800.17 Mn PBT (+16.94% YoY). Formalises 2026-2029 Strategy with Rabo Partnerships.",
    category: "turnaround",
    sourcePage: 8
  }
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 1,
    title: "Banking Sector Merit Award",
    organization: "National Business Excellence Awards 2025",
    category: "Banking Sector Excellence",
    image: "/src/assets/annual_report_images/awards/page_9_screenshot.png",
    description: "Recognised for resilient operational recovery, sustainable governance, and outstanding contribution to rural national economic recovery.",
    sourcePage: 9
  },
  {
    id: 2,
    title: "Silver Award for Best Use of Digital in Corporate Branding",
    organization: "SLIM Digis 2.5",
    category: "Digital Marketing & Branding",
    image: "/src/assets/annual_report_images/awards/page_9_screenshot.png",
    description: "Awarded for the widely acclaimed Father's Day Digital Campaign, celebrating craftsmanship and family-led entrepreneurship across digital channels.",
    sourcePage: 9
  },
  {
    id: 3,
    title: "Excellence in Customer Convenience (Category C)",
    organization: "LankaPay Technnovation Awards 2025",
    category: "Digital Financial Inclusivity",
    image: "/src/assets/annual_report_images/awards/page_9_screenshot.png",
    description: "Honouring SDB Bank's expansion of UPay QR merchant access, interbank payment convenience, and seamless digital onboarding.",
    sourcePage: 9
  },
  {
    id: 4,
    title: "A - Institutional Rating for Q1-2025",
    organization: "Credit Information Bureau of Sri Lanka (CRIB)",
    category: "Data Governance & Compliance",
    image: "/src/assets/annual_report_images/awards/page_9_screenshot.png",
    description: "Highest tier institutional rating in recognition of exemplary data management, accurate credit reporting, and rigorous statutory compliance.",
    sourcePage: 9
  },
  {
    id: 5,
    title: "Certificate of Compliance",
    organization: "CA Sri Lanka TAGS Awards 2025",
    category: "Integrated Reporting & Transparency",
    image: "/src/assets/annual_report_images/awards/page_9_screenshot.png",
    description: "Recognising SDB's full adherence to International Integrated Reporting Standards, LKAS/SLFRS disclosures, and corporate governance transparency.",
    sourcePage: 9
  },
  {
    id: 6,
    title: "Certificate of Recognition",
    organization: "JASTECA Awards 2025",
    category: "Quality Management & 5S Culture",
    image: "/src/assets/annual_report_images/awards/page_9_screenshot.png",
    description: "Conferred by the Japan Sri Lanka Technical and Cultural Association for implementing Japanese 5S operational efficiency across branch operations.",
    sourcePage: 9
  }
];

export const YEAR_IN_REVIEW_BLOCKS: YearInReviewBlock[] = [
  {
    id: "operating-environment",
    title: "Operating Environment",
    badge: "Macro Context",
    items: [
      "Sri Lanka recorded an estimated GDP growth of 5.0% in 2025, demonstrating strong recovery momentum despite disruptions from Cyclone Ditwah.",
      "Deflationary trend reversed, with inflation gradually normalising towards Central Bank target levels.",
      "Interest rates adjusted downward, easing financial conditions and stimulating private credit demand.",
      "External sector dynamic: Exports expanded 5.6% YoY while vehicle import resumption spurred economic activity."
    ],
    sourcePage: 14
  },
  {
    id: "what-we-delivered",
    title: "What We Delivered",
    badge: "Execution",
    items: [
      "Extended targeted relief measures to borrowers impacted by prior high-interest rate shocks.",
      "Successfully reversed a 5-year portfolio contraction, recording positive growth across all core lending segments.",
      "Significantly improved asset quality, reducing impaired Stage 3 loan ratio from 6.93% (2024) to 5.36% (2025).",
      "Digital transactions rose to 37% of total customer transaction volume.",
      "Consolidated operations into unified head office structure, eliminating operational redundancies."
    ],
    sourcePage: 14
  },
  {
    id: "sustainable-progress",
    title: "Sustainable Progress",
    badge: "Sustainability",
    items: [
      "Finalised new 2026-2029 business blueprint in technical partnership with Rabo Partnerships Netherlands.",
      "Rural Upliftment Programme reached 3,991 beneficiaries, fostering resilient household livelihoods.",
      "Disbursed over 68,900 agricultural loans, accounting for 54% of new credit facilities.",
      "Disbursed 27,200+ dedicated credit facilities to female entrepreneurs.",
      "Maintained active relationships with ~4,000 primary SANASA cooperatives."
    ],
    sourcePage: 14
  },
  {
    id: "what-we-achieved",
    title: "What We Achieved",
    badge: "Financial Results",
    items: [
      "Net Advances grew 15.46% YoY to LKR 109.84 Bn.",
      "Net Interest Income rose 5.27% to LKR 8.23 Bn.",
      "Net Fee & Commission Income surged 15.47% to LKR 675 Mn.",
      "Profit Before Tax expanded 16.94% to LKR 800.17 Mn.",
      "Maintained resilient Capital Adequacy (Total CAR 15.24% vs 12.50% statutory minimum)."
    ],
    sourcePage: 14
  },
  {
    id: "strategic-priorities",
    title: "Strategic Priorities in 2025",
    badge: "Strategy Focus",
    items: [
      "Resolved legacy crisis-era portfolio stress through disciplined remedial management.",
      "Accelerated balance sheet growth with rigorous underwriting criteria.",
      "Enabled inclusive recovery by anchoring SMEs into formal agribusiness value chains.",
      "Advanced women's socio-economic empowerment with financial and non-financial support."
    ],
    sourcePage: 14
  },
  {
    id: "forward-strategy",
    title: "Forward Strategy (2026-2029)",
    badge: "Future Horizon",
    items: [
      "Operationalise comprehensive impact measurement systems across environmental, social and economic dimensions.",
      "Fast-track branch and back-office digitisation to optimise cost-to-income efficiency.",
      "Expand green financing lines, renewable energy credit, and circular economy investments.",
      "Deepen market leadership in cooperative banking and food & agriculture value chains."
    ],
    sourcePage: 14
  }
];

export const STRATEGY_BLUEPRINT_DATA = {
  transformationCycle: {
    period1: { name: "2023–2025 Strategic Cycle", focus: "Recovery, Resilience & Balance Sheet Repair" },
    period2: { name: "2026–2029 Strategic Blueprint", focus: "Sustainable Scaling, Digital Transformation & Agri-Leadership" }
  },
  raboPartnership: {
    partner: "Rabo Partnerships B.V. (Subsidiary of Rabobank Netherlands)",
    overview: "Formulated with technical advisory from Rabo Partnerships, the world's premier cooperative banking group, focusing on inclusive food systems and sustainable rural development.",
    strategicPillars: [
      { name: "Agribusiness Strategy", desc: "Tailored financial products, crop inspection protocols, and risk models for smallholder farmers." },
      { name: "SME & Value Chains", desc: "Connecting rural producers with regional processors and national export markets." },
      { name: "Digital Transformation", desc: "Cloud-native workflows, data analytics, and digital credit scoring for unbanked micro-entrepreneurs." },
      { name: "Sustainability Integration", desc: "Climate adaptation frameworks and European SSCI governance compliance." }
    ]
  },
  agriStrategy: {
    manual: "Completed and published the official SDB Agri Manual to standardise agricultural lending procedures.",
    taskForce: "Established a 45-member Agri Task Force across all island regions for localised interventions.",
    advisoryPanel: "Formed an expert Agri Advisory Panel to guide crop credit assessments and climate resilience.",
    inspectionFormat: "Introduced standardised Agri-Specific Inspection Report format to evaluate technical crop metrics."
  },
  whereWeWillWin: [
    "Cooperative Banking Ecosystem",
    "MSME Sector Financing",
    "Food & Agriculture Value Chains",
    "Digital Inclusion & Innovations",
    "Positioning as a Sustainable Value-Driven Bank"
  ],
  howWeWillWin: [
    "Efficient & Agile Operating Models",
    "Product Fit & Proactive Risk Culture",
    "Low-Cost Low-Beta Funding Strategy",
    "Developing People & Modelling Future-Ready Leadership",
    "Strengthening Stakeholder Trust & Brand Equity"
  ],
  sourcePage: 32
};
