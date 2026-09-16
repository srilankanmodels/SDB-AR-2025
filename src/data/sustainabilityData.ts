/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Sustainability & UN SDGs Data
 * Source: Official Published Annual Report 2025 (Pages 34-41)
 */

export interface SustainabilityPillar {
  id: string;
  code: string;
  name: string;
  overview: string;
  keyInitiatives: string[];
  outcomes2025: string[];
  sourcePage: number;
}

export interface SDGRecord {
  sdgNumber: number;
  sdgName: string;
  badgePath: string;
  color: string;
  leadCommitment: string;
  contributions: string[];
  kpis?: { label: string; value: string }[];
  sourcePage: number;
}

export interface SustainabilityMetric {
  id: string;
  label: string;
  value: string;
  category: "workforce" | "agri" | "women" | "climate" | "community";
  detail: string;
  sourcePage: number;
}

export const SUSTAINABILITY_PILLARS_DATA: SustainabilityPillar[] = [
  {
    id: "esrms",
    code: "ESRMS",
    name: "Environmental & Social Risk Management System",
    overview: "Comprehensive screening and mitigation of environmental and social risks for all business-purpose loans exceeding LKR 500,000.",
    keyInitiatives: [
      "Initial screening by Client Relationship Officers and Centralised Credit validation",
      "Advanced E&S Due Diligence conducted for medium and high-risk facilities",
      "Mandatory Environmental and Social Management Plans (ESMP) prior to high-risk disbursements",
      "Proactive advisory to help borrowers upgrade effluent treatment and community safety"
    ],
    outcomes2025: [
      "100% of commercial facilities > LKR 500k screened for environmental and social compliance",
      "Assisted 40+ medium-risk clients in rectifying environmental permits and waste handling"
    ],
    sourcePage: 34
  },
  {
    id: "spm",
    code: "SPM",
    name: "Social Performance Management",
    overview: "Progressive adoption of Universal Standards for Social and Environmental Performance Management, aligning banking practice with poverty reduction and client protection.",
    keyInitiatives: [
      "Integration of ethical lending principles across SME, Cooperative, and Value Chain units",
      "Incorporated findings from the Social Performance Indicators (SPI) Self-Assessment",
      "Provision of non-financial advisory, financial literacy, and entrepreneurship mentoring"
    ],
    outcomes2025: [
      "Formalised outcome and output tracking framework for all social interventions",
      "Integrated client protection principles into employee performance reviews"
    ],
    sourcePage: 34
  },
  {
    id: "sif",
    code: "SIF",
    name: "Sustainable & Inclusive Finance",
    overview: "Driving economic resilience, environmental stewardship, and social equity through green lending and inclusive credit corridors.",
    keyInitiatives: [
      "Active partner in the Central Bank of Sri Lanka (CBSL) Sustainable Banking Initiative (SBI)",
      "Staff training on climate financing and climate adaptation credit assessments",
      "Expanding sustainable value chain finance tailored for climate-vulnerable food sectors",
      "Circular economy linkages and dedicated credit lines for female-led MSMEs"
    ],
    outcomes2025: [
      "Over 54% of all new credit disbursements directed toward agriculture and food security",
      "Disbursed LKR 50 Mn+ in dedicated rooftop solar and renewable energy installations",
      "Mobilised LKR 1.7 Bn+ in low-cost concessionary refinance credit"
    ],
    sourcePage: 35
  },
  {
    id: "opf",
    code: "OPF",
    name: "Operational Footprint Management",
    overview: "Minimising internal operational carbon footprint through aggressive paperless digitisation, energy efficiency, and resource conservation.",
    keyInitiatives: [
      "Branch renovations prioritising energy-efficient inverter air-conditioning and 100% LED lighting",
      "Formally registered with the Sri Lanka Sustainable Energy Authority (SEA)",
      "Appointment of certified Energy Manager through the SEA to drive conservation protocols",
      "Phased calculation of Scope 1 and Scope 2 Greenhouse Gas (GHG) emissions"
    ],
    outcomes2025: [
      "Significant reduction in internal paper consumption via e-KYC and digital statements",
      "Established baseline carbon footprint tracking across Head Office and 94 branches"
    ],
    sourcePage: 35
  },
  {
    id: "opr",
    code: "OPR",
    name: "Operational Resilience & Excellence",
    overview: "Ensuring business continuity, health, safety, accessibility, and human rights across the organisation.",
    keyInitiatives: [
      "Robust Business Continuity Planning (BCP) with operational risk stress-testing",
      "Integration of sustainability passion and competencies into talent recruitment",
      "Comprehensive medical and insurance coverage for all staff cadre",
      "Dedicated focus on human rights, workplace safety, and gender equity policies"
    ],
    outcomes2025: [
      "Zero business continuity interruptions during adverse weather events (Cyclone Ditwah)",
      "48% female representation across the total workforce cadre"
    ],
    sourcePage: 35
  },
  {
    id: "sbcr",
    code: "SBCR",
    name: "Sustainable Brand, Culture & CSR",
    overview: "Transitioning traditional corporate philanthropy into sustainable, self-sufficient community development models.",
    keyInitiatives: [
      "Expansion of the flagship Rural Upliftment Programme across cooperative villages",
      "Sustainable livelihood generation enabling families to achieve permanent financial independence",
      "Internal and external campaigns fostering a deep-seated employee sustainability culture",
      "Employee volunteering in environmental conservation (Project BLUE and coastal cleanup)"
    ],
    outcomes2025: [
      "Reached 3,991 direct beneficiaries under the Rural Upliftment Programme in 2025",
      "Over 7,500 individuals benefited from financial literacy and capacity training programmes"
    ],
    sourcePage: 36
  },
  {
    id: "isr",
    code: "ISR",
    name: "Integrated Strategy & Reporting",
    overview: "Aligning institutional governance with national roadmaps and the International Integrated Reporting Framework.",
    keyInitiatives: [
      "Formulation of the Integrated Sustainability Policy featuring a seven-stage management approach",
      "Incorporating sustainability KPIs directly into Board Committees and leadership job profiles",
      "Harmonising disclosures with the latest CBSL Sustainable Finance Roadmap",
      "Gathering climate risk exposure metrics to support net-zero long-term targets"
    ],
    outcomes2025: [
      "Conferred Certificate of Compliance at the CA Sri Lanka TAGS Awards 2025",
      "Timely submission of all mandatory statutory and sustainability reports to CBSL"
    ],
    sourcePage: 36
  },
  {
    id: "ssci",
    code: "SSCI",
    name: "Sustainability Standards & Certification Initiative",
    overview: "International accreditation under the world's premier holistic sustainability standard for financial institutions.",
    keyInitiatives: [
      "Accepted into the European Organization for Sustainable Development (EOSD) SSCI programme",
      "Implementation of German-designed holistic environmental, social, and governance standards",
      "Alignment with European best practices for value-driven, profitable banking"
    ],
    outcomes2025: [
      "Positioned SDB Bank among an elite cadre of globally certified sustainable financial institutions"
    ],
    sourcePage: 36
  }
];

export const KEY_SUSTAINABILITY_STATS: SustainabilityMetric[] = [
  {
    id: "female-workforce",
    label: "Female Workforce Representation",
    value: "48%",
    category: "workforce",
    detail: "Equal opportunity employment across all 94 branches and Head Office.",
    sourcePage: 38
  },
  {
    id: "female-management",
    label: "Female Corporate Management",
    value: "31%",
    category: "workforce",
    detail: "High female leadership presence guiding strategic executive decisions.",
    sourcePage: 38
  },
  {
    id: "coop-women",
    label: "Women in Cooperative Trainings",
    value: "65%",
    category: "women",
    detail: "Share of female attendees participating in cooperative capacity building.",
    sourcePage: 38
  },
  {
    id: "training-hours",
    label: "Employee Training Hours",
    value: "32,000+ Hrs",
    category: "workforce",
    detail: "Over 32,000 professional development hours delivered across 1,263 employees.",
    sourcePage: 39
  },
  {
    id: "agri-loans",
    label: "Agricultural Loans Disbursed",
    value: "68,900+",
    category: "agri",
    detail: "Accounting for 54% of all new credit facilities to bolster national food security.",
    sourcePage: 38
  },
  {
    id: "women-loans",
    label: "New Credit Facilities to Women",
    value: "27,200+",
    category: "women",
    detail: "Dedicated loans disbursed to women-led micro and small enterprises.",
    sourcePage: 39
  },
  {
    id: "training-beneficiaries",
    label: "Community Training Beneficiaries",
    value: "7,500+",
    category: "community",
    detail: "Rural entrepreneurs and cooperative members equipped with financial literacy.",
    sourcePage: 39
  },
  {
    id: "renewable-financing",
    label: "Renewable Energy Financing",
    value: "LKR 50 Mn+",
    category: "climate",
    detail: "Dedicated financing extended for solar rooftop and clean energy installations.",
    sourcePage: 39
  },
  {
    id: "refinance-funds",
    label: "Concessionary Refinance Capital",
    value: "LKR 1.7 Bn+",
    category: "agri",
    detail: "Low-cost funding lines sourced via ADB and CBSL for productive sectors.",
    sourcePage: 39
  },
  {
    id: "rural-upliftment",
    label: "Rural Upliftment Beneficiaries",
    value: "3,991",
    category: "community",
    detail: "Families and cooperative members empowered with self-sufficient livelihoods.",
    sourcePage: 36
  }
];

/**
 * TAB 1: CONTRIBUTION TO SDGS IN 2025 (Annual Report Page 38)
 * Core focus area limited to 5 primary UN SDGs
 */
export const CONTRIBUTION_TO_SDGS_2025_INTRO = {
  title: "CONTRIBUTION TO SDGS IN 2025",
  subTitle: "SDB bank's Primary Focus Areas (Annual Report Page 38)",
  description:
    "While SDB bank's core focus area is limited to 5 UNSDGs, the Bank's widespread social and environmental impacts have influenced other SDGs during the year. Also refer to the Financial, Social, Human and Natural Capital chapters for more details regarding the Bank's activities pertaining to SDGs.",
  sourcePage: 38
};

export const CONTRIBUTION_TO_SDGS_2025_DATA: SDGRecord[] = [
  {
    sdgNumber: 2,
    sdgName: "Zero Hunger",
    badgePath: "/assets/sdgs/sdg_2.png",
    color: "#DDA63A",
    leadCommitment: "Promoting sustainable agriculture, resilient food systems, and targeted financial support for smallholder farming communities across Sri Lanka.",
    contributions: [
      "The Bank has a special focus on food and agriculture, enhancing financial and non-financial support for this sector.",
      "Going beyond the Bank's customer segment, the Bank supported food and agriculture through various means to strengthen food security.",
      "Partnered with Rabo Partnerships Netherlands to develop a comprehensive Agri-Financing Strategy, establishing a 45-member Agri Task Force and introducing a standard Agri Manual."
    ],
    kpis: [
      { label: "New agriculture loans as % of total disbursement", value: "54%" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 5,
    sdgName: "Gender Equality",
    badgePath: "/assets/sdgs/sdg_5.png",
    color: "#EF402B",
    leadCommitment: "Fostering an inclusive workplace, advancing women in corporate leadership, and extending targeted micro-financing for female entrepreneurs.",
    contributions: [
      "The Bank is an equal opportunity employer with strong female representation across all tiers.",
      "A Gender Gap Assessment was conducted to enhance women's financing.",
      "The gender mix is maintained in the lending portfolio.",
      "The Bank initiated a number of programmes specifically designed to empower women entrepreneurs. These include the Rural Upliftment programme and the Women Mean coalition.",
      "Laid the groundwork to incorporate a gender lens into all business strategies of the Bank and conduct a comprehensive study within the country to understand the needs and status of women."
    ],
    kpis: [
      { label: "Female representation in the total workforce", value: "48%" },
      { label: "Female representation in corporate management", value: "31%" },
      { label: "Share of women attendees at cooperative trainings", value: "65%" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 8,
    sdgName: "Decent Work & Economic Growth",
    badgePath: "/assets/sdgs/sdg_8.png",
    color: "#A21942",
    leadCommitment: "Driving productive employment, fair workplace conditions, ethical credit screening, and grassroot economic empowerment across the nation.",
    contributions: [
      "The Bank follows an 'Exclusion List' that prohibits financing harmful, unethical or illegal activities.",
      "The Bank continued to support grassroots-level entrepreneurs/businesses through its activities for the creation of decent employment and inclusive growth.",
      "The Bank supports community-level entrepreneurs, which in turn contributes to economic growth.",
      "Creation of employment opportunities across the island, supported by an extensive branch network, performance-driven work culture benefits, work-life balance, health and safety, engagement opportunities and grievance handling mechanisms for employees.",
      "Better insurance cover, collective agreements."
    ],
    kpis: [
      { label: "Total Workforce Cadre", value: "1,263" },
      { label: "Employee Retention Rate", value: "92.06%" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 13,
    sdgName: "Climate Action",
    badgePath: "/assets/sdgs/sdg_13.png",
    color: "#3F7E44",
    leadCommitment: "Integrating climate risk resilience, supporting clean energy transition, promoting green mobility, and shrinking internal carbon emissions.",
    contributions: [
      "The Bank carried out agricultural initiatives that are not directly linked to blue projects, alongside awareness programmes for both the community and staff, including Project BLUE and the Nature Walk initiative.",
      "The Bank supported both climate mitigation and adaptation through its finances.",
      "Energy-efficient measures were implemented to reduce fossil fuel consumption.",
      "Loans are provided for solar installations."
    ],
    kpis: [
      { label: "E&S Risk Loan Screening", value: "100% > LKR 500k" },
      { label: "Renewable Energy Financing", value: "LKR 50 Mn+" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 17,
    sdgName: "Partnerships for the Goals",
    badgePath: "/assets/sdgs/sdg_17.png",
    color: "#19486A",
    leadCommitment: "Forging strategic national, international, and cooperative alliances to scale sustainable finance and community prosperity.",
    contributions: [
      "The Bank entered into many partnerships during the year, with external institutions.",
      "Formalised long-term strategic blueprint with Rabo Partnerships Netherlands to modernise agricultural and MSME finance.",
      "Admitted into the European Organization for Sustainable Development (EOSD) Sustainability Standards & Certification Initiative (SSCI).",
      "The Bank also conducts collaborations with universities, including the Ocean University of Sri Lanka for marine ecosystem preservation."
    ],
    kpis: [
      { label: "SANASA Primary Cooperatives", value: "4,000+" },
      { label: "Refinance Capital Mobilised", value: "LKR 1.7 Bn+" }
    ],
    sourcePage: 38
  }
];

/**
 * TAB 2: ADDITIONAL SDGS SUPPORTED DURING 2025 (Annual Report Pages 39-40)
 * 10 Additional SDGs Championed through wider banking operations
 */
export const ADDITIONAL_SDGS_SUPPORTED_2025_INTRO = {
  title: "ADDITIONAL SDGS SUPPORTED DURING 2025",
  subTitle: "Sustainable Banking Model & Broader Contributions (Annual Report Pages 39–40)",
  description:
    "Through its sustainable banking model and core business activities, the Bank actively contributed towards the UN SDGs listed below.",
  sourcePage: 39
};

export const ADDITIONAL_SDGS_SUPPORTED_2025_DATA: SDGRecord[] = [
  {
    sdgNumber: 1,
    sdgName: "No Poverty",
    badgePath: "/assets/sdgs/sdg_1.png",
    color: "#E5243B",
    leadCommitment: "Empowering low-income earning customer segments by providing access to financial security and sustainable income generation.",
    contributions: [
      "Empowering low-income earning customer segments by providing access to financial security.",
      "Supporting the income generation of communities through the Rural Upliftment initiatives and other financial activities.",
      "Extended collateral-free financial products and concessionary credit lines to vulnerable households."
    ],
    kpis: [
      { label: "Rural Upliftment Beneficiaries", value: "3,991" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 3,
    sdgName: "Good Health and Well-being",
    badgePath: "/assets/sdgs/sdg_3.png",
    color: "#4C9F38",
    leadCommitment: "Safeguarding employee health, providing comprehensive medical insurance, and fostering community well-being through inclusive finance.",
    contributions: [
      "Ensure the health and safety of employees.",
      "Insurance Scheme with a reputed Insurance Company for each staff member.",
      "Uplift communities through financial inclusion, thereby supporting their health and well-being."
    ],
    kpis: [
      { label: "Medical Insurance Cadre", value: "100% of Staff" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 4,
    sdgName: "Quality Education",
    badgePath: "/assets/sdgs/sdg_4.png",
    color: "#C5192D",
    leadCommitment: "Investing in continuous staff capacity building, overseas specialized training, and sponsoring schools in project localities.",
    contributions: [
      "Continuous professional development of employees.",
      "Provided over 32,000+ hours of training for internal employees.",
      "Granted special leave for overseas training.",
      "Supported schools in areas where the Bank's projects are being conducted."
    ],
    kpis: [
      { label: "Internal Employee Training Hours", value: "32,000+ Hours" },
      { label: "Average Training Hours per Employee", value: "25.3 Hours" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 7,
    sdgName: "Affordable & Clean Energy",
    badgePath: "/assets/sdgs/sdg_7.png",
    color: "#FCC30B",
    leadCommitment: "Financing clean domestic solar installations, supporting national decarbonisation, and implementing internal bank energy conservation.",
    contributions: [
      "Energy conservation measures within the Bank.",
      "Provided financing for solar power projects and also for energy conservation efforts.",
      "Installation of inverter air-conditioning and 100% LED lighting across branch premises."
    ],
    kpis: [
      { label: "Amount of renewable energy financing disbursements", value: "LKR 50 Mn+" },
      { label: "Amount of refinance funds obtained", value: "LKR 1.7 Bn+" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    badgePath: "/assets/sdgs/sdg_9.png",
    color: "#FD6925",
    leadCommitment: "Delivering affordable credit to smallholders, expanding digital infrastructure (UPay), and modernising agricultural value chains.",
    contributions: [
      "Provision of financial services and affordable credit to smallholder enterprises.",
      "Accelerated digital banking accessibility with LankaPay GovPay and LankaPay LPOPP integration.",
      "Invested in robust IT infrastructure to provide seamless, resilient banking services."
    ],
    kpis: [
      { label: "Number of agricultural loans disbursed", value: "68,900+" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 10,
    sdgName: "Reduced Inequalities",
    badgePath: "/assets/sdgs/sdg_10.png",
    color: "#DD1367",
    leadCommitment: "Closing geographic and socio-economic divides through widespread rural banking, female financial inclusion, and digital equity.",
    contributions: [
      "Facilitated financial inclusion and digital inclusion for communities across the country.",
      "Empowered female entrepreneurs through financial assistance.",
      "Delivered tailored financial literacy clinics for rural and peri-urban smallholders."
    ],
    kpis: [
      { label: "Number of new loans to women", value: "27,200+" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 11,
    sdgName: "Sustainable Cities and Communities",
    badgePath: "/assets/sdgs/sdg_11.png",
    color: "#FD9D24",
    leadCommitment: "Empowering rural and urban micro-entrepreneurs, strengthening local cooperative hubs, and driving regional economic resilience.",
    contributions: [
      "Empowered rural and urban entrepreneurs, as well as women entrepreneurs.",
      "Supported regional development across all 9 provinces through a 94-branch footprint.",
      "Strengthened local economic ecosystems through capacity-building workshops."
    ],
    kpis: [
      { label: "Number benefited from training programmes", value: "7,500+" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 12,
    sdgName: "Responsible Consumption and Production",
    badgePath: "/assets/sdgs/sdg_12.png",
    color: "#BF8B2E",
    leadCommitment: "Embedding green procurement standards, reducing paper and water footprints, and calculating greenhouse gas emissions.",
    contributions: [
      "Compliance related to product development and meeting customer information requirements.",
      "Effective management of environmental impacts and promoting resource conservation and waste reduction, including the commencement of work stream setting green procurement criteria.",
      "Reduced the consumption of electricity, water and paper, by identifying the highest consumption branches.",
      "Introduction of digital applications (such as customer onboarding).",
      "Calculated the carbon footprint to identify emissions of the Bank."
    ],
    kpis: [
      { label: "Carbon Footprint Tracking", value: "Scope 1 & 2 Baseline" }
    ],
    sourcePage: 39
  },
  {
    sdgNumber: 14,
    sdgName: "Life Below Water",
    badgePath: "/assets/sdgs/sdg_14.png",
    color: "#0A97D9",
    leadCommitment: "Conserving marine ecosystems, reducing coastal plastic pollution, and conducting underwater debris clearance missions.",
    contributions: [
      "The Bank contributed to the reduction of marine pollution and marine ecosystems conservation by conducting underwater cleaning operations and coastal beach clean-up programmes.",
      "Mobilized staff volunteers and divers under 'Project BLUE' in partnership with the Ocean University of Sri Lanka.",
      "Recovered plastic debris and ghost nets to protect marine wildlife and coastal habitats."
    ],
    kpis: [
      { label: "Coastal Plastic Waste Removed", value: "686.3 kg" },
      { label: "Underwater Debris Cleared", value: "20.0 kg" }
    ],
    sourcePage: 40
  },
  {
    sdgNumber: 15,
    sdgName: "Life on Land",
    badgePath: "/assets/sdgs/sdg_15.png",
    color: "#56C02B",
    leadCommitment: "Promoting agroforestry, forest habitat restoration, and conserving terrestrial biodiversity through community action.",
    contributions: [
      "The Bank promoted sustainable agriculture.",
      "Contributed towards environmental and biodiversity conservation through staff participation in green projects and blue projects.",
      "Partnered with Dewahandiya Farmers' Association to restore 25 hectares of forest land with 10,000 indigenous saplings.",
      "Conducted staff Nature Walk & Bird Race at Diyasaru Wetland Park."
    ],
    kpis: [
      { label: "Forest Land Restored", value: "25 Hectares" },
      { label: "Trees Planted", value: "10,000 Saplings" }
    ],
    sourcePage: 40
  }
];

export const SUSTAINABILITY_GOVERNANCE_DATA = {
  boardSubcommittee: {
    name: "Board Subcommittee on Sustainability",
    chairperson: "Mr. Romani De Silva (Independent Non-Executive Director)",
    mandate: "Formulate sustainability policies and strategies, approve annual action plans, and oversee DFI undertakings.",
    meetingsHeld2025: 4,
    frequency: "Quarterly",
    sourcePage: 37
  },
  executiveCommittee: {
    name: "Executive Committee on Sustainability",
    lead: "Mr. Kapila Ariyaratne (Chief Executive Officer)",
    composition: "Executive management, regional branch network heads, and business line directors.",
    mandate: "Execute sustainability strategy across all 94 branches, implement SPM systems, and achieve operational targets.",
    sourcePage: 37
  },
  regionalTeams: {
    title: "Regional Sustainability Ambassadors",
    structure: "10 Regional Sustainability Ambassadors under Regional Managers driving branch-level grassroots community initiatives.",
    sourcePage: 37
  },
  consumerProtection: {
    unit: "Financial Consumer Protection (FCP) Unit",
    established: "January 2024 (Under CBSL Financial Consumer Protection Regulations No. 01 of 2023)",
    trainingsHeld: "30+ targeted employee training sessions; 287 senior staff trained in consumer redress",
    complaintsResolved: "Recorded 2,013 customer complaints, resolving over 80% within stipulated regulatory timelines.",
    sourcePage: 37
  }
};
