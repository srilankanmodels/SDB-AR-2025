/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Stakeholder Engagement & Materiality Matrix
 * Source: Official Published Annual Report 2025 (Pages 24-29)
 */

export interface StakeholderGroup {
  id: string;
  name: string;
  category: string;
  howWeEngaged: string[];
  keyConcerns: string[];
  strategicResponse: string[];
  powerLevel: "High" | "Medium" | "Low";
  interestLevel: "High" | "Medium" | "Low";
  quadrant: "Actively Consult" | "Keep Informed" | "Regularly Engage" | "Maintain Interest";
  sourcePage: number;
}

export interface MaterialTopic {
  id: number;
  topic: string;
  priority: "High" | "Medium" | "Low";
  impactStakeholder: "High" | "Medium" | "Low";
  impactBank: "High" | "Medium" | "Low";
  summary: string;
  linkedSDGs: number[];
  sourcePage: number;
}

export const STAKEHOLDERS_DATA: StakeholderGroup[] = [
  {
    id: "regulators",
    name: "Regulators & Authorities",
    category: "Statutory & Compliance",
    howWeEngaged: [
      "Accommodated CBSL examinations and statutory audits",
      "Submitted quarterly financial statements and progress updates",
      "Continuous compliance filing with Colombo Stock Exchange (CSE) and SEC",
      "Timely returns submitted to Registrar of Companies (ROC)"
    ],
    keyConcerns: [
      "Compliance with new Banking Act and CBSL Directives",
      "Capital adequacy and liquidity buffer maintenance",
      "Adherence to continuous listing requirements of the CSE",
      "Consumer protection and fair market conduct"
    ],
    strategicResponse: [
      "Maintained 100% compliance with all statutory capital and liquidity directives",
      "Automated regulatory compliance reporting through digital surveillance",
      "Integrated dedicated Financial Consumer Protection Unit across branch network"
    ],
    powerLevel: "High",
    interestLevel: "High",
    quadrant: "Actively Consult",
    sourcePage: 24
  },
  {
    id: "shareholders",
    name: "Shareholders & Investors",
    category: "Financial Capital Providers",
    howWeEngaged: [
      "Annual General Meeting (AGM) and published Integrated Annual Report",
      "Quarterly earnings releases and press statements",
      "Material announcements on CSE corporate disclosure portal",
      "Direct investor relations and analyst briefings"
    ],
    keyConcerns: [
      "Shareholder returns, ROE, and earnings per share",
      "Sustainable profitability and asset quality improvement",
      "Transparent reporting, ESG compliance, and sound corporate governance"
    ],
    strategicResponse: [
      "Achieved 16.94% YoY growth in PBT (LKR 800.17 Mn)",
      "Reversed 5-year loan contraction with 15.46% expansion in net advances",
      "Maintained regular communication on strategy and capital position"
    ],
    powerLevel: "High",
    interestLevel: "High",
    quadrant: "Actively Consult",
    sourcePage: 25
  },
  {
    id: "cooperatives",
    name: "SANASA Cooperatives & Societies",
    category: "Foundational Community Partners",
    howWeEngaged: [
      "Regular dialogues through dedicated service counters at 94 branches",
      "Executive leadership meetings with SANASA Movement district unions",
      "Channelled philanthropic initiatives via Rural Upliftment Programme",
      "Technical training and capacity building for society administrators"
    ],
    keyConcerns: [
      "Access to low-cost concessionary lending pools",
      "Technical barriers and slow digital technology adoption among rural societies",
      "Loan recovery hurdles during post-cyclone economic stress"
    ],
    strategicResponse: [
      "SANASA cooperatives held 12.55% of SDB issued share capital and generated ~35% of deposit base",
      "Delivered tailored digital payment solutions (UPay QR) and specialized software",
      "Maintained active banking relationships with over 4,000 primary cooperatives"
    ],
    powerLevel: "High",
    interestLevel: "High",
    quadrant: "Regularly Engage",
    sourcePage: 25
  },
  {
    id: "customers",
    name: "Customers (MSMEs & Retail)",
    category: "Commercial Core",
    howWeEngaged: [
      "Direct relationship management at 94 branch locations islandwide",
      "Formal customer feedback and complaints resolution mechanisms",
      "Corporate digital banking portal and 24/7 UPay mobile application",
      "Social media channels, financial literacy workshops, and merchant visits"
    ],
    keyConcerns: [
      "High service standards, ethical treatment, and fast credit approvals",
      "Competitive deposit interest yields and affordable borrowing rates",
      "Convenience, digital ease, and privacy of personal financial records"
    ],
    strategicResponse: [
      "Trained all customer-facing personnel in empathetic customer care",
      "Resolved over 80% of customer grievances within stipulated turn-around times",
      "Upgraded branches and expanded digital cash deposit / ATM connectivity"
    ],
    powerLevel: "High",
    interestLevel: "High",
    quadrant: "Actively Consult",
    sourcePage: 25
  },
  {
    id: "employees",
    name: "Employees & Staff",
    category: "Human Capital",
    howWeEngaged: [
      "Bi-annual performance evaluations and career path dialogues",
      "Structured internal training via physical academy and e-learning portals",
      "Internal staff intranet announcements and town halls",
      "Open-door grievance channels and health & safety committee reviews"
    ],
    keyConcerns: [
      "Fair remuneration, performance bonuses, and medical benefits",
      "Clear career progression, promotions, and leadership development",
      "Safe, inclusive, and harassment-free workplace culture"
    ],
    strategicResponse: [
      "Delivered over 32,000+ training hours across 1,263 employees",
      "Invested LKR 23.91 Mn in professional development and capacity building",
      "Maintained 48% female workforce and 31% female Corporate Management representation"
    ],
    powerLevel: "Medium",
    interestLevel: "High",
    quadrant: "Keep Informed",
    sourcePage: 26
  },
  {
    id: "communities",
    name: "Communities & Civil Society",
    category: "Social & Environmental Fabric",
    howWeEngaged: [
      "Community infrastructure initiatives channelled via SANASA societies",
      "Branch-level philanthropic and healthcare outreach programmes",
      "Direct engagements with rural women's entrepreneurship clusters",
      "Environmental conservation and beach cleanup volunteering drives"
    ],
    keyConcerns: [
      "Sustainable livelihoods generation and rural poverty reduction",
      "Environmental preservation, biodiversity protection, and clean water access",
      "Protection from predatory informal moneylenders"
    ],
    strategicResponse: [
      "Expanded Rural Upliftment Programme reaching 3,991 community beneficiaries",
      "Disbursed 27,200+ loans to female entrepreneurs and 68,900+ agricultural facilities",
      "Supported coastal ecosystem restoration through employee CSR teams"
    ],
    powerLevel: "Low",
    interestLevel: "High",
    quadrant: "Maintain Interest",
    sourcePage: 26
  },
  {
    id: "international-agencies",
    name: "International Development Agencies & DFIs",
    category: "Global Strategic Capital",
    howWeEngaged: [
      "Periodic due-diligence reviews and portfolio monitoring visits",
      "Joint technical working sessions on agricultural finance and sustainability",
      "Strategic advisory collaboration with Rabo Partnerships B.V. (Netherlands)",
      "Global Alliance for Banking on Values (GABV) summits"
    ],
    keyConcerns: [
      "Strict adherence to Environmental & Social Risk Management (ESRMS)",
      "Impact governance, transparency, and progress on DFI undertakings",
      "Financial stability, AML/CFT compliance, and sustainable credit expansion"
    ],
    strategicResponse: [
      "Finalised 2026-2029 Strategy Blueprint in technical collaboration with Rabo Partnerships",
      "Secured admission into the European Sustainability Standards & Certification Initiative (SSCI)",
      "Continued active execution of ADB credit line covenants for tea smallholders"
    ],
    powerLevel: "High",
    interestLevel: "Medium",
    quadrant: "Actively Consult",
    sourcePage: 26
  },
  {
    id: "business-partners",
    name: "Suppliers & Business Partners",
    category: "Supply Chain",
    howWeEngaged: [
      "Transparent procurement tenders and formal vendor evaluation frameworks",
      "Direct technical meetings with IT and hardware vendor partners",
      "Regular vendor performance reviews and structured supplier contract terms"
    ],
    keyConcerns: [
      "Timely payment settlements and fair contractual terms",
      "Repeat orders, procurement transparency, and long-term business predictability"
    ],
    strategicResponse: [
      "Maintained active relationships with over 400+ local suppliers",
      "Implemented strict local purchasing policy, prioritising SANASA affiliated suppliers",
      "Streamlined invoice verification through automated accounting workflows"
    ],
    powerLevel: "Medium",
    interestLevel: "Medium",
    quadrant: "Keep Informed",
    sourcePage: 26
  },
  {
    id: "trade-unions",
    name: "Trade Unions",
    category: "Industrial Relations",
    howWeEngaged: [
      "Scheduled consultative meetings with accredited union representatives",
      "Structured negotiations regarding working conditions and wage scales",
      "Joint health, safety, and welfare committee discussions"
    ],
    keyConcerns: [
      "Workplace security, fair wage revisions, and employee benefits",
      "Workload distribution following structural branch consolidations"
    ],
    strategicResponse: [
      "Maintained harmonious industrial peace throughout 2025",
      "Fully honoured terms under the bilateral Collective Agreement signed for 2024–2026",
      "Maintained continuous dialogue to resolve grievances proactively"
    ],
    powerLevel: "Medium",
    interestLevel: "High",
    quadrant: "Keep Informed",
    sourcePage: 26
  }
];

export const MATERIAL_TOPICS_DATA: MaterialTopic[] = [
  {
    id: 1,
    topic: "Financial Stability & Profitability",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Sustaining resilient long-term profitability, capital adequacy, and balance sheet strength while supporting macroeconomic recovery.",
    linkedSDGs: [8, 9],
    sourcePage: 28
  },
  {
    id: 2,
    topic: "Customer Service Excellence",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Expanding customer reach through high standards of empathetic service, swift credit turnaround, and digital accessibility.",
    linkedSDGs: [8, 9],
    sourcePage: 28
  },
  {
    id: 3,
    topic: "Customer Privacy & Data Protection",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Safeguarding customer records and personal financial information to mitigate cybersecurity and reputational risks.",
    linkedSDGs: [9, 16],
    sourcePage: 28
  },
  {
    id: 4,
    topic: "Responsible Lending & Risk Management",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Enhancing credit discipline, reducing impaired loans, and embedding rigorous Environmental and Social Risk screening.",
    linkedSDGs: [12, 13],
    sourcePage: 28
  },
  {
    id: 5,
    topic: "Inclusive Lending & Financial Inclusion",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Providing affordable, collateral-free credit lines for rural smallholders, MSMEs, and women entrepreneurs.",
    linkedSDGs: [1, 5, 10],
    sourcePage: 28
  },
  {
    id: 6,
    topic: "Operational Efficiency & Cost Optimization",
    priority: "High",
    impactStakeholder: "Medium",
    impactBank: "High",
    summary: "Prudent cost management, digital automation, and centralisation of core processing to improve cost-to-income efficiency.",
    linkedSDGs: [8, 9],
    sourcePage: 28
  },
  {
    id: 7,
    topic: "Employee Skill Development & Capacity",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Equipping workforce with modern digital competencies, agricultural advisory skills, and ethical leadership capabilities.",
    linkedSDGs: [4, 8],
    sourcePage: 28
  },
  {
    id: 8,
    topic: "Environmental Consciousness & Climate Action",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Minimising internal operational carbon footprint and financing renewable energy, green buildings, and climate adaptation.",
    linkedSDGs: [7, 13],
    sourcePage: 28
  },
  {
    id: 9,
    topic: "Facilitating Digital Inclusion",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Expanding mobile UPay wallet, LankaPay QR payments, and online banking to narrow the urban-rural digital divide.",
    linkedSDGs: [9, 10],
    sourcePage: 28
  },
  {
    id: 10,
    topic: "Corporate Social Responsibility (CSR)",
    priority: "Medium",
    impactStakeholder: "High",
    impactBank: "Medium",
    summary: "Executing long-term socio-economic upliftment through the Rural Upliftment Programme and community health initiatives.",
    linkedSDGs: [1, 3, 11],
    sourcePage: 28
  },
  {
    id: 11,
    topic: "Right Talent Acquisition & Retention",
    priority: "High",
    impactStakeholder: "Medium",
    impactBank: "High",
    summary: "Attracting specialised professionals in risk, IT, and agribusiness, while preserving high retention through fair remuneration.",
    linkedSDGs: [8],
    sourcePage: 28
  },
  {
    id: 12,
    topic: "Total Regulatory Compliance & Governance",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Ensuring zero regulatory breaches across CBSL, CSE, and statutory laws while maintaining high ethical board oversight.",
    linkedSDGs: [16],
    sourcePage: 28
  },
  {
    id: 13,
    topic: "Forming Strategic Partnerships",
    priority: "High",
    impactStakeholder: "High",
    impactBank: "High",
    summary: "Forging impactful technical and funding alliances with Rabo Partnerships, ADB, government ministries, and universities.",
    linkedSDGs: [17],
    sourcePage: 28
  }
];
