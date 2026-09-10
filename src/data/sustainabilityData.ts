/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Sustainability & UN SDG Explorer Data
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

export interface SDGContribution {
  sdgNumber: number;
  sdgName: string;
  color: string;
  iconUrl?: string;
  isPrimary: boolean;
  sdbCommitment: string;
  actions2025: string[];
  kpis: { label: string; value: string }[];
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
    sourcePage: 39
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

export const UN_SDGS_DATA: SDGContribution[] = [
  {
    sdgNumber: 2,
    sdgName: "Zero Hunger",
    color: "#DDA63A",
    isPrimary: true,
    sdbCommitment: "Promoting food security and sustainable agricultural production by delivering tailored credit to smallholders.",
    actions2025: [
      "Disbursed 68,900+ agricultural loans across paddy, tea, rubber, and spice cultivators",
      "Agricultural credit comprised 54% of all new loan disbursements in 2025",
      "Formulated comprehensive Agri-Financing Strategy with Rabo Partnerships",
      "Established 45-member regional Agri Task Force and published standard Agri Manual"
    ],
    kpis: [
      { label: "Agri Loans Disbursed", value: "68,900+" },
      { label: "Share of Total Disbursements", value: "54%" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 5,
    sdgName: "Gender Equality",
    color: "#FF3A21",
    isPrimary: true,
    sdbCommitment: "Empowering women entrepreneurs and maintaining gender equity across employment and governance.",
    actions2025: [
      "Achieved 48% female workforce representation and 31% female Corporate Management",
      "Disbursed 27,200+ new credit facilities to women entrepreneurs",
      "Conducted institutional Gender Gap Assessment to expand female financial inclusion",
      "65% female attendance across all cooperative capacity-building programmes"
    ],
    kpis: [
      { label: "Female Workforce", value: "48%" },
      { label: "Loans to Women", value: "27,200+" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 8,
    sdgName: "Decent Work & Economic Growth",
    color: "#A21942",
    isPrimary: true,
    sdbCommitment: "Fostering inclusive economic development, grassroots job creation, and productive micro-enterprise growth.",
    actions2025: [
      "Supported grassroot-level enterprises creating resilient rural employment across 94 branches",
      "Maintained strict Exclusion List prohibiting financing of harmful or unethical activities",
      "Delivered 32,000+ training hours to employees with robust collective agreement protections",
      "Invested LKR 23.91 Mn in talent development and capability building"
    ],
    kpis: [
      { label: "Training Hours Delivered", value: "32,000+ Hrs" },
      { label: "Employee Cadre", value: "1,263 Staff" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 13,
    sdgName: "Climate Action",
    color: "#3F7E44",
    isPrimary: true,
    sdbCommitment: "Integrating climate risk resilience, supporting clean energy transition, and shrinking operational footprints.",
    actions2025: [
      "Delivered LKR 50 Mn+ in dedicated rooftop solar and renewable energy loans",
      "Registered with Sustainable Energy Authority (SEA) and appointed certified Energy Manager",
      "Employee volunteering in environmental restoration including Project BLUE and Nature Walk",
      "Conducted Scope 1 and Scope 2 GHG carbon footprint baseline quantification"
    ],
    kpis: [
      { label: "Solar Financing", value: "LKR 50 Mn+" },
      { label: "E&S Loan Screening", value: "100% > 500k" }
    ],
    sourcePage: 38
  },
  {
    sdgNumber: 17,
    sdgName: "Partnerships for the Goals",
    color: "#19486A",
    isPrimary: true,
    sdbCommitment: "Forging global, cooperative, and institutional alliances to amplify sustainable development outcomes.",
    actions2025: [
      "Formalised 2026–2029 Strategy Blueprint with Rabo Partnerships Netherlands",
      "Admitted into European Sustainability Standards & Certification Initiative (SSCI)",
      "Collaborated with Asian Development Bank (ADB) on tea smallholder credit lines",
      "Maintained active development banking ties with ~4,000 primary SANASA cooperatives"
    ],
    kpis: [
      { label: "Active Cooperatives", value: "4,000+" },
      { label: "Refinance Mobilised", value: "LKR 1.7 Bn+" }
    ],
    sourcePage: 38
  },
  // Additional SDGs Supported
  {
    sdgNumber: 1,
    sdgName: "No Poverty",
    color: "#E5243B",
    isPrimary: false,
    sdbCommitment: "Uplifting underserved rural populations from poverty through affordable credit and micro-savings.",
    actions2025: [
      "Rural Upliftment Programme reached 3,991 beneficiaries with sustainable income generation",
      "Provided low-cost financial security mechanisms for vulnerable low-income households"
    ],
    kpis: [{ label: "Upliftment Beneficiaries", value: "3,991" }],
    sourcePage: 39
  },
  {
    sdgNumber: 7,
    sdgName: "Affordable & Clean Energy",
    color: "#FCC30B",
    isPrimary: false,
    sdbCommitment: "Financing clean domestic solar installations and energy-efficient retrofits.",
    actions2025: [
      "Extended concessionary lending packages for residential and commercial solar rooftops",
      "Internal LED conversions and high-efficiency inverter air conditioning across 94 branches"
    ],
    kpis: [{ label: "Clean Energy Funding", value: "LKR 50 Mn+" }],
    sourcePage: 39
  },
  {
    sdgNumber: 9,
    sdgName: "Industry, Innovation & Infrastructure",
    color: "#FD6925",
    isPrimary: false,
    sdbCommitment: "Modernising digital financial infrastructure to connect small enterprises to formal markets.",
    actions2025: [
      "Expanded UPay payment gateway, CEFTS, and LankaPay QR integration nationwide",
      "IT infrastructure investments reached LKR 4.05 Bn+ to future-proof bank systems"
    ],
    kpis: [{ label: "Digital Transactions", value: "37% of Total" }],
    sourcePage: 39
  },
  {
    sdgNumber: 10,
    sdgName: "Reduced Inequalities",
    color: "#DD1367",
    isPrimary: false,
    sdbCommitment: "Bridging the geographic and socio-economic wealth divide across Sri Lanka's provinces.",
    actions2025: [
      "Over 75% of branch network deployed in peri-urban and rural provincial centres",
      "Targeted credit and financial literacy extended to historically marginalized communities"
    ],
    kpis: [{ label: "Provincial Branches", value: "94 Locations" }],
    sourcePage: 39
  },
  {
    sdgNumber: 12,
    sdgName: "Responsible Consumption & Production",
    color: "#BF8B2E",
    isPrimary: false,
    sdbCommitment: "Promoting green procurement criteria, circular economy linkages, and internal resource conservation.",
    actions2025: [
      "Commenced green procurement standards for all bank vendor tenders",
      "Aggressively curbed paper and electricity consumption across operational departments"
    ],
    kpis: [{ label: "Procurement Suppliers", value: "400+ Local" }],
    sourcePage: 39
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
