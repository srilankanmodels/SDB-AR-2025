/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Value Creation Capitals Deep Disclosures
 * Source: Official Published Annual Report 2025 (Pages 68-106)
 */

export interface CapitalKPI {
  label: string;
  value: string;
  previousValue?: string;
  subtext: string;
}

export interface DetailedSection {
  title: string;
  summary: string;
  paragraphs: string[];
  tables?: {
    headers: string[];
    rows: string[][];
  };
  highlights?: string[];
}

export interface CapitalDeepRecord {
  id: string;
  title: string;
  iconName: string;
  coverBadge: string;
  sourcePages: string;
  executiveSummary: string;
  kpis: CapitalKPI[];
  actions: string[];
  outcomes: string[];
  detailedSections: DetailedSection[];
  futureOutlook2026: string[];
  sdgAlignments: {
    sdgNumber: number;
    sdgName: string;
    impact: string;
  }[];
}

export const CAPITALS_DEEP_DATA: CapitalDeepRecord[] = [
  // 1. FINANCIAL CAPITAL (Pages 68-71)
  {
    id: "financial",
    title: "Financial Capital",
    iconName: "Coins",
    coverBadge: "LKR 146.95 Bn Total Assets",
    sourcePages: "Pages 68–71",
    executiveSummary:
      "In 2025, SDB bank continued to strengthen its financial position and stability, initiating a new growth trajectory following five years of lending portfolio contraction. SDB bank reversed the multi-year downtrend with a 15% expansion in net loans and advances to LKR 109.84 Bn, recorded a 16.93% YoY increase in Profit Before Tax (PBT) to LKR 800.17 Mn, and maintained a robust Total Capital Adequacy Ratio of 15.24%, well above the 12.50% regulatory threshold.",
    kpis: [
      { label: "Total Assets", value: "LKR 146.95 Bn", previousValue: "LKR 142.10 Bn", subtext: "+3.4% YoY Expansion" },
      { label: "Net Loans & Advances", value: "LKR 109.84 Bn", previousValue: "LKR 95.51 Bn", subtext: "+15.0% Portfolio Turnaround" },
      { label: "Profit Before Tax (PBT)", value: "LKR 800.17 Mn", previousValue: "LKR 684.28 Mn", subtext: "+16.93% YoY Growth" },
      { label: "Profit After Tax (PAT)", value: "LKR 379.79 Mn", previousValue: "LKR 340.50 Mn", subtext: "+11.54% Net Earnings" },
      { label: "Total Capital Adequacy (CAR)", value: "15.24%", previousValue: "15.80%", subtext: "Comfortably above 12.50% min" },
      { label: "Total Deposits", value: "LKR 102.13 Bn", previousValue: "LKR 98.40 Bn", subtext: "Sustained customer confidence" }
    ],
    actions: [
      "Provided financial relief and debt restructuring to 15,000–16,000 borrowers impacted by macroeconomic crises and Cyclone Ditwah.",
      "Formulated a comprehensive Agri-Financing Strategy in strategic partnership with Rabo Partnerships Netherlands.",
      "Re-entered productive commercial lending, targeting climate-smart agriculture, rubber, tea, and MSME value chains.",
      "Optimized funding mix by blending public retail deposits with low-cost concessionary refinance lines (LKR 1.7 Bn+).",
      "Disciplined cost control measures implemented across branch operations to curtail operational overheads."
    ],
    outcomes: [
      "Reversed a 5-year loan contraction, expanding net loans and advances by 15.0% to reach LKR 109.84 Bn.",
      "Total Bank Assets expanded to LKR 146.95 Bn, solidifying institutional solvency.",
      "Profit Before Tax rose 16.93% to LKR 800.17 Mn, reflecting resilient core banking earnings.",
      "Retained earnings increased by 13% YoY to LKR 2.6 Bn, strengthening the Bank's internal equity cushion.",
      "Maintained Capital Adequacy Ratio (CAR) of 15.24% (Tier 1: 12.80%), preserving stability against unexpected shocks.",
      "15,000–16,000 customers protected from default and assisted towards business rehabilitation."
    ],
    detailedSections: [
      {
        title: "Analysis of Statement of Profit or Loss",
        summary: "Resilient operating margins and disciplined credit risk management drove positive bottom-line expansion in 2025.",
        paragraphs: [
          "The Bank recorded Net Interest Income (NII) of LKR 6.37 Bn in 2025. Although market interest rates trended downwards following CBSL policy easing, proactive repricing of deposit liabilities and loan volume growth cushioned net margins.",
          "Fee and commission income stood at LKR 945 Mn, supported by rising digital transaction fees from the UPay app, trade services, and debit card usage.",
          "Operating expenses were managed prudently amidst inflationary pressures. The Bank maintained strategic investments in IT infrastructure and digital transformation while rationalizing administrative overheads.",
          "Impairment provisions were calibrated using forward-looking expected credit loss (ECL) models, ensuring substantial provisioning buffers against vulnerable economic sectors."
        ],
        tables: {
          headers: ["Financial Metric", "2025 (LKR Mn)", "2024 (LKR Mn)", "YoY Change (%)"],
          rows: [
            ["Gross Income", "22,410", "24,850", "-9.8%"],
            ["Interest Income", "20,180", "22,940", "-12.0%"],
            ["Interest Expense", "13,810", "16,420", "-15.9%"],
            ["Net Interest Income (NII)", "6,370", "6,520", "-2.3%"],
            ["Fee & Commission Income", "945", "870", "+8.6%"],
            ["Operating Profit Before Impairment", "2,410", "2,280", "+5.7%"],
            ["Impairment Charges", "1,610", "1,595", "+0.9%"],
            ["Profit Before Tax (PBT)", "800.17", "684.28", "+16.93%"],
            ["Profit After Tax (PAT)", "379.79", "340.50", "+11.54%"]
          ]
        }
      },
      {
        title: "Analysis of Statement of Financial Position & Solvency",
        summary: "Asset expansion, deposit growth, and robust capital buffers reinforced financial stability.",
        paragraphs: [
          "Total assets of the Bank increased to LKR 146.95 Bn at year-end, driven by a 15% resurgence in net loans and receivables.",
          "Customer deposits reached LKR 102.13 Bn, underscoring public trust in SDB Bank's cooperative roots and stability. The Bank intensified efforts to expand low-cost Current and Savings Accounts (CASA).",
          "Total equity rose to LKR 15.6 Bn, with retained earnings increasing by 13% to LKR 2.6 Bn. Both Common Equity Tier 1 (CET1) and Total Capital Adequacy Ratios (CAR) remained comfortably above statutory thresholds."
        ],
        highlights: [
          "Net Loan Portfolio: LKR 109.84 Bn (+15% turnaround)",
          "Customer Deposit Base: LKR 102.13 Bn",
          "Total Capital Adequacy Ratio: 15.24% (Regulatory Minimum: 12.50%)",
          "Retained Earnings: LKR 2.6 Bn (+13% YoY growth)"
        ]
      }
    ],
    futureOutlook2026: [
      "Accelerate loan origination under the Rabo Partnerships Agri-Financing Strategy, focusing on high-value cash crops and food security.",
      "Aggressively mobilize low-cost CASA deposits across the 94-branch network to widen Net Interest Margins (NIM).",
      "Scale digital fee income by embedding UPay merchant payment corridors in rural cooperative supply chains.",
      "Maintain active recovery campaigns and early-warning credit monitoring to further reduce the Stage 3 impaired loan ratio."
    ],
    sdgAlignments: [
      { sdgNumber: 1, sdgName: "No Poverty", impact: "Extending micro-credit and concessions to 16,000+ vulnerable rural households." },
      { sdgNumber: 8, sdgName: "Decent Work & Economic Growth", impact: "Disbursing LKR 109.8 Bn into productive enterprises that sustain islandwide employment." }
    ]
  },

  // 2. MANUFACTURED CAPITAL (Pages 72-75)
  {
    id: "manufactured",
    title: "Manufactured Capital",
    iconName: "Home",
    coverBadge: "94 Branches & Modern Kirulapone Head Office",
    sourcePages: "Pages 72–75",
    executiveSummary:
      "SDB bank's manufactured capital comprises 94 brick-and-mortar branches, automated teller machines (ATMs), cash deposit machines (CDMs), and advanced IT infrastructure. In 2025, the Bank established a 20,000 sq ft second Head Office in Kirulapone, Colombo, successfully upgraded key provincial branches, invested LKR 57 Mn in digital workplace hardware, and demonstrated extraordinary operational resilience by restoring 5 cyclone-devastated branches within 48 to 72 hours.",
    kpis: [
      { label: "Islandwide Branch Network", value: "94 Locations", subtext: "Coverage across all 9 provinces" },
      { label: "Second Head Office Space", value: "20,000 sq ft", subtext: "Modern hub in Kirulapone, Colombo" },
      { label: "Hardware Investment (2025)", value: "LKR 57 Mn", subtext: "High-performance laptops & branch kits" },
      { label: "Cumulative IT Investment", value: "LKR 4.05 Bn", subtext: "Enterprise core systems & disaster recovery" },
      { label: "Disaster Recovery Uptime", value: "100%", subtext: "Zero data or asset loss during Ditwah" },
      { label: "Branch Asset Optimization", value: "LKR 970 Mn", subtext: "Cost-rationalized physical assets" }
    ],
    actions: [
      "Inaugurated the second SDB Bank Head Office in Kirulapone, Colombo (20,000 sq ft), consolidating previously dispersed administrative teams into a unified collaborative facility.",
      "Rapidly rehabilitated and reopened 5 branches severely damaged by Cyclone Ditwah (Giriulla, Ekala, Kaduwela, Chilaw, Ruwanwella) within 48 to 72 hours, ensuring uninterrupted community banking.",
      "Completed comprehensive branch renovations and modernizations for the Galle branch and Moratuwa regional office.",
      "Invested LKR 57 Mn in cutting-edge computer hardware, laptops, branch servers, and portable digital field kits for loan officers.",
      "Initiated a strategic vehicle fleet transition: phasing out bank-owned vehicles in favor of long-term operating leases to reduce capital tie-up and maintenance costs."
    ],
    outcomes: [
      "Seamless operational continuity achieved during severe climate events with zero loss of customer records or financial data.",
      "Enhanced inter-departmental collaboration, operational efficiency, and turnaround times via the new Kirulapone facility.",
      "Upgraded physical and digital branch infrastructure, delivering an enhanced customer experience across urban and rural touchpoints.",
      "Reduced fixed operational expenditures and capital depreciation through the leased vehicle fleet transition model."
    ],
    detailedSections: [
      {
        title: "Second Head Office Facility & Workplace Modernization",
        summary: "Consolidating departments into a state-of-the-art facility in Colombo to enhance operational agility.",
        paragraphs: [
          "During FY 2025, SDB Bank established its second corporate head office premises in Kirulapone, Colombo, spanning over 20,000 sq ft of modern commercial floor space.",
          "Prior to this consolidation, key executive, IT, risk, and operational departments operated from multiple scattered rental locations. The unified facility provides advanced ergonomic workstations, high-speed fiber connectivity, collaborative breakout zones, and high-security server rooms.",
          "This modernization has streamlined administrative decision-making, fostered inter-functional teamwork, and significantly lowered rental overheads."
        ],
        highlights: [
          "20,000 sq ft unified commercial footprint in Kirulapone",
          "Consolidated 6+ previously dispersed corporate units",
          "Advanced redundant fiber-optic and power backup systems"
        ]
      },
      {
        title: "Disaster Recovery & Climate Resilience in Action",
        summary: "Swift restoration of physical touchpoints in the wake of Cyclone Ditwah.",
        paragraphs: [
          "When Cyclone Ditwah struck Sri Lanka from 27 to 29 November 2025, severe flooding and storm surges compromised 5 SDB Bank branch premises located in Giriulla, Ekala, Kaduwela, Chilaw, and Ruwanwella.",
          "Activating its Business Continuity Plan (BCP) and emergency response task forces, the Bank safely backed up all physical assets and switched transactions seamlessly to the disaster recovery site.",
          "Through around-the-clock physical remediation, debris clearing, and electrical testing, all 5 branches were fully restored and reopened for customer transactions within 48 to 72 hours."
        ],
        highlights: [
          "5 flood-impacted branches reopened within 72 hours",
          "Zero customer financial records or IT assets lost",
          "Emergency cash disbursements maintained for affected communities"
        ]
      },
      {
        title: "IT Infrastructure, Core Banking & Hardware Investments",
        summary: "Strengthening technological backbones to support omnichannel banking.",
        paragraphs: [
          "The Bank continued to invest heavily in its technological bedrock, bringing cumulative IT asset capitalization to LKR 4.05 Bn.",
          "During 2025, LKR 57 Mn was deployed to procure new high-speed workstations, laptops, and mobile POS field kits enabling loan officers to evaluate and onboard credit applicants directly at farm-gates and retail shops.",
          "Core banking server upgrades were completed to handle higher transaction throughput from the UPay app and real-time electronic fund settlement systems."
        ]
      }
    ],
    futureOutlook2026: [
      "Relocate and refurbish an additional 6 regional branches to improve accessibility and energy efficiency.",
      "Deploy self-service Cash Deposit Machines (CDMs) and digital smart kiosks at high-density commercial agricultural hubs.",
      "Complete the complete transition of the remaining bank vehicle fleet to operating leases by end-2026.",
      "Integrate rooftop solar systems at 10 bank-owned branch properties to minimize grid power reliance."
    ],
    sdgAlignments: [
      { sdgNumber: 9, sdgName: "Industry, Innovation & Infrastructure", impact: "Maintaining 94 resilient branch outposts and investing LKR 4.05 Bn in digital financial infrastructure." },
      { sdgNumber: 11, sdgName: "Sustainable Cities & Communities", impact: "Rapidly rebuilding essential community banking hubs post-disaster." }
    ]
  },

  // 3. INTELLECTUAL CAPITAL (Pages 76-79)
  {
    id: "intellectual",
    title: "Intellectual Capital",
    iconName: "Brain",
    coverBadge: "8.5M+ Digital Transactions & UPay Platform",
    sourcePages: "Pages 76–79",
    executiveSummary:
      "SDB bank's intellectual capital encompasses proprietary digital banking platforms (UPay), brand equity, institutional knowledge, standard operating procedures, and risk assessment methodologies. In 2025, digital transactions reached 8.5 million (comprising 37% of the Bank's total transaction volume), the Bank integrated LankaPay GovPay and LPOPP, published the Rabo Partnerships Agri Manual, rolled out digital leasing onboarding, and operated a 24/7 Security Operations Centre (SOC) with zero data breaches.",
    kpis: [
      { label: "Digital Transactions", value: "8.5 Mn+", subtext: "37% of total Bank transaction volume" },
      { label: "Digital Savings Retained", value: "LKR 105 Mn+", subtext: "Mobilised through the UPay app ecosystem" },
      { label: "GovPay & LPOPP Utility", value: "Full Integration", subtext: "Traffic fines, Inland Revenue & Customs" },
      { label: "Agri Task Force Cadre", value: "45 Officers", subtext: "Specialized agricultural credit specialists" },
      { label: "Security Breaches", value: "Zero (0)", subtext: "24/7 Security Operations Centre monitoring" },
      { label: "Intangible Asset Value", value: "LKR 60 Mn", subtext: "Note 22 Audited UPay software valuation" }
    ],
    actions: [
      "Enhanced the flagship SDB UPay Mobile Banking App with LankaPay GovPay (settling traffic fines) and LankaPay LPOPP (paying customs duties, taxes, and port fees).",
      "Rolled out a paperless Digital Onboarding Platform for vehicle leasing customers, reducing credit appraisal turnaround from 5 days to under 24 hours.",
      "Published and operationalized the comprehensive Rabo Partnerships Agricultural Lending Manual, codifying crop-specific cost-of-cultivation schedules and cash flow models.",
      "Maintained and enhanced the 'SDB Nerve' Intranet portal as the centralized hub for training materials, circulars, compliance directives, and operational manuals.",
      "Maintained continuous 24/7/365 monitoring via the Security Operations Centre (SOC), incorporating threat intelligence and automated endpoint protection."
    ],
    outcomes: [
      "Processed over 8.5 million digital transactions in 2025, representing 37% of all banking transactions and significantly reducing branch counter congestion.",
      "Mobilized LKR 105 Mn+ in digital savings via UPay, expanding the Bank's retail deposit reach among youth and tech-savvy consumers.",
      "Drastically curtailed internal paper consumption through electronic statement delivery, workflow digitization, and digital approval matrices.",
      "Achieved a 100% clean cybersecurity record with zero data breaches, unauthorized intrusions, or information asset compromise in 2025."
    ],
    detailedSections: [
      {
        title: "Digital Banking Solutions & UPay Platform Capabilities",
        summary: "Transforming everyday payments into accessible, cashless digital touchpoints.",
        paragraphs: [
          "The SDB UPay mobile application remains the cornerstone of the Bank's digital inclusion agenda. In 2025, the platform was augmented to support full-spectrum public sector payment gateways.",
          "Through LankaPay GovPay, citizens can instantly verify and settle motor traffic fines electronically, bypassing court and post-office queues.",
          "The integration of the LankaPay Online Payment Platform (LPOPP) enabled small and medium importers and clearing agents to settle Sri Lanka Customs duties, Inland Revenue Department (IRD) taxes, and Sri Lanka Ports Authority (SLPA) port charges directly from their SDB accounts.",
          "Furthermore, UPay expanded LankaQR merchant acquiring across rural grocery stores, agricultural input suppliers, and cooperative fairs, driving cashless payments into grassroots economies."
        ],
        highlights: [
          "LankaPay GovPay online traffic fine settlement",
          "LPOPP integration for Customs, Taxes, and Port dues",
          "50+ utility billers and merchant LankaQR scanning",
          "Biometric fingerprint and Face ID authentication"
        ]
      },
      {
        title: "Rabo Partnerships Agricultural Manual & Institutional Tacit Knowledge",
        summary: "Codifying world-class Dutch agricultural banking practices into local value chains.",
        paragraphs: [
          "In collaboration with Rabo Partnerships Netherlands, SDB Bank developed and distributed a standardized Agricultural Lending Manual across all 94 branches.",
          "The manual provides granular agronomic and financial assessment templates for over 20 major Sri Lankan crops, including paddy, tea, rubber, spices, cinnamon, and dairy.",
          "A 45-member dedicated Agri Task Force was trained to utilize these standardized inspection sheets, enabling scientific cash flow lending rather than traditional collateral-dependent approvals."
        ]
      },
      {
        title: "Workflow Digitization, EDMS & SDB Nerve Intranet",
        summary: "Automating internal processing to eliminate paper and elevate operational velocity.",
        paragraphs: [
          "The Bank implemented an Enterprise Document Management System (EDMS) and workflow automation engine, beginning with leasing approvals and personal loan files.",
          "The SDB Nerve Intranet was upgraded with interactive search capabilities, serving as the single source of truth for bank policies, regulatory circulars, and standard operating procedures (SOPs).",
          "Automated audit trails and role-based access permissions ensure full compliance with Central Bank information security guidelines."
        ]
      }
    ],
    futureOutlook2026: [
      "Launch digital micro-loan origination on UPay, enabling instant algorithmic credit scoring for pre-approved cooperative customers.",
      "Expand LPOPP capabilities to encompass municipal council rates, electricity utility bulk billing, and trade licenses.",
      "Deploy Artificial Intelligence (AI) predictive models to forecast borrower default risks and optimize debt collection routes.",
      "Complete the roll-out of paperless e-signatures across all commercial lending documentation."
    ],
    sdgAlignments: [
      { sdgNumber: 9, sdgName: "Industry, Innovation & Infrastructure", impact: "Delivering 8.5M+ cashless digital transactions and integrating public e-governance payments." },
      { sdgNumber: 12, sdgName: "Responsible Consumption & Production", impact: "Slashing corporate paper consumption via end-to-end workflow automation." }
    ]
  },

  // 4. HUMAN CAPITAL (Pages 80-87)
  {
    id: "human",
    title: "Human Capital",
    iconName: "Users",
    coverBadge: "1,263 Total Workforce • 48% Female Representation",
    sourcePages: "Pages 80–87",
    executiveSummary:
      "SDB bank's human capital comprises 1,263 dedicated professionals whose collective skills, integrity, and community passion drive the Bank's strategic mission. In 2025, the Bank achieved 48% female representation across its workforce, 31% female representation in Corporate Management, an exceptional 92.06% employee retention rate, delivered over 32,000 training hours (with LKR 23.91 Mn invested), reformed the Performance Management System (PMS), and honored veteran employees at the Seniority Awards.",
    kpis: [
      { label: "Total Workforce Cadre", value: "1,263 Staff", previousValue: "1,265 Staff", subtext: "Permanent, contract, and trainees" },
      { label: "Female Workforce Ratio", value: "48.0%", previousValue: "47.5%", subtext: "Near-equal gender balance" },
      { label: "Female Corporate Leadership", value: "31.0%", previousValue: "29.0%", subtext: "Executive & senior managerial tier" },
      { label: "Employee Retention Rate", value: "92.06%", previousValue: "88.50%", subtext: "Significantly higher than sector average" },
      { label: "Total Training Hours Delivered", value: "32,000+ Hrs", previousValue: "24,500 Hrs", subtext: "25.3 average hours per employee" },
      { label: "Training & Development Investment", value: "LKR 23.91 Mn", previousValue: "LKR 18.30 Mn", subtext: "+30.6% YoY capability investment" }
    ],
    actions: [
      "Implemented a competency-based Performance Management System (PMS) linked to individualized KPIs, talent pipeline mapping, and succession planning.",
      "Upgraded employee health and welfare: increased surgical and hospitalization insurance ceilings and conducted islandwide health screening camps.",
      "Delivered 32,000+ total training hours, including specialized programs on Agri-lending with Rabo Partnerships and Financial Consumer Protection (FCP) for 287 senior managers.",
      "Maintained constructive social dialogue with employee unions, strictly adhering to the terms of the formal Collective Agreement.",
      "Organized the prestigious Seniority Awards Ceremony, honoring long-serving staff members with 22-carat gold sovereigns and commemorative plaques.",
      "Celebrated employee cultural and sporting achievements: Poson Bhakthi Gee & Dansala, Katukithula school computer donation, and Mercantile Badminton success."
    ],
    outcomes: [
      "Cultivated a resilient, high-performing workforce with an industry-leading 92.06% staff retention rate.",
      "Maintained exemplary gender diversity: 48% women overall and 31% in Corporate Management, serving as an industry benchmark.",
      "Enhanced credit underwriting speed and compliance rigor through comprehensive capacity-building across 1,263 staff members.",
      "Maintained zero industrial disputes or work stoppages, preserving harmonious industrial relations throughout 2025."
    ],
    detailedSections: [
      {
        title: "Workforce Profile, Demographics & Gender Diversity",
        summary: "A dynamic, diverse cadre balancing experienced leadership with energetic youth.",
        paragraphs: [
          "As at 31 December 2025, SDB Bank employed 1,263 individuals across its 94 branches and Colombo head offices.",
          "The Bank takes immense pride in maintaining near-equal gender parity, with women comprising 48% of the total cadre and 31% of the Corporate Management team.",
          "The age profile of the workforce demonstrates vitality and longevity: 28% of staff are under 30 years of age, 64% are between 30 and 50 years, and 8% are over 50 years, ensuring a robust talent pipeline for future leadership roles."
        ],
        tables: {
          headers: ["Employee Category", "Male", "Female", "Total 2025", "Share (%)"],
          rows: [
            ["Corporate Management", "11", "5", "16", "1.3%"],
            ["Senior Management", "35", "15", "50", "4.0%"],
            ["Chief Managers & Managers", "148", "82", "230", "18.2%"],
            ["Executive Officers", "215", "190", "405", "32.1%"],
            ["Banking Assistants & Clerical", "248", "314", "562", "44.4%"],
            ["Total Cadre", "657 (52%)", "606 (48%)", "1,263", "100.0%"]
          ]
        }
      },
      {
        title: "Training, Capability Building & Rabo Partnerships Modules",
        summary: "Investing LKR 23.91 Mn to upskill staff in modern agronomy, consumer protection, and digital tools.",
        paragraphs: [
          "During 2025, the Bank invested LKR 23,912,877 in human capital development across internal workshops, outbound experiential learning, and specialized external certifications.",
          "In collaboration with Rabo Partnerships, intensive training modules on Agricultural Value Chain Financing were rolled out for 45 Agri Task Force officers and branch relationship managers.",
          "The Financial Consumer Relations Department (FCRD) led focused training on CBSL Financial Consumer Protection regulations for 287 branch managers and credit supervisors."
        ],
        tables: {
          headers: ["Training Category", "Investment (LKR)", "Participants", "Training Hours"],
          rows: [
            ["Technical & Banking Skills", "9,938,000", "840", "14,200"],
            ["Leadership & Executive Development", "4,595,333", "185", "4,600"],
            ["Agri-Finance (Rabo Partnerships)", "3,778,647", "120", "5,400"],
            ["Compliance & Consumer Protection (FCP)", "2,850,000", "287", "3,800"],
            ["Health, Safety & Soft Skills", "2,750,897", "450", "4,000"],
            ["Total 2025", "23,912,877", "1,882", "32,000+"]
          ]
        }
      },
      {
        title: "Employee Welfare, Seniority Recognition & Sports",
        summary: "Fostering well-being, rewarding multi-decade loyalty, and celebrating teamwork.",
        paragraphs: [
          "The Bank organized a grand Seniority Awards ceremony, awarding 22-carat gold sovereigns to staff completing 10, 15, 20, and 25 years of loyal service.",
          "Employee medical schemes were expanded to provide higher coverage limits for major surgeries, critical illnesses, and outpatient consultations.",
          "In sports, the SDB Bank badminton squad achieved podium honors at the Mercantile Badminton Tournament, while staff organized cultural CSR events such as the Poson Bhakthi Gee Saraniya and Dansala."
        ]
      }
    ],
    futureOutlook2026: [
      "Launch the SDB Future Leaders Academy to groom internal high-potential executives for enterprise succession.",
      "Introduce a digital e-learning platform with gamified micro-modules on anti-money laundering, green finance, and customer conduct.",
      "Conduct a comprehensive Employee Engagement and Well-being Survey to enhance workplace satisfaction.",
      "Further increase female representation in senior branch managerial appointments from 31% towards 35%."
    ],
    sdgAlignments: [
      { sdgNumber: 5, sdgName: "Gender Equality", impact: "Achieving 48% female workforce and 31% female Corporate Management." },
      { sdgNumber: 8, sdgName: "Decent Work & Economic Growth", impact: "Delivering 32,000+ training hours and guaranteeing safe, equitable employment." }
    ]
  },

  // 5. SOCIAL & RELATIONSHIP CAPITAL (Pages 88-101)
  {
    id: "social",
    title: "Social & Relationship Capital",
    iconName: "Handshake",
    coverBadge: "4,000+ SANASA Societies • 3,991 Rural Beneficiaries",
    sourcePages: "Pages 88–101",
    executiveSummary:
      "As a development bank rooted in the cooperative ethos, SDB bank's greatest societal footprint is created through its deep relationships with ~4,000 primary SANASA societies, MSMEs, rural women, and farming communities. In 2025, the Bank empowered 3,991 families via the Rural Upliftment Programme, conducted 50 cooperative training workshops (2,727 attendees, 65% women), launched the 'Heritage Hands' Kithul project in Deraniyagala, resolved 2,013 customer inquiries via its 24/7 Contact Centre (90%+ SLA), and deployed LKR 1 Mn in emergency flood relief via 'Manusath Derana'.",
    kpis: [
      { label: "Active SANASA Cooperatives", value: "4,000+", subtext: "Islandwide cooperative movement federation" },
      { label: "Cooperative Training Workshops", value: "50 Sessions", subtext: "Empowered 2,727 cooperative leaders" },
      { label: "Women in Cooperative Trainings", value: "65.0%", subtext: "1,769 female leaders trained in governance" },
      { label: "Rural Upliftment Beneficiaries", value: "3,991 Families", subtext: "Self-sustaining livelihood interventions" },
      { label: "Credit to Agribusiness / SME", value: "44% of Loans", subtext: "Directed into agriculture, forestry & fishing" },
      { label: "Call Centre Service Level (SLA)", value: "90%+", subtext: "24/7/365 assistance across all 3 languages" }
    ],
    actions: [
      "Conducted 50 cooperative capacity-building training programs across the island, training 2,727 cooperative members in financial literacy, internal audit, governance, and delinquency management.",
      "Expanded the flagship Rural Upliftment Programme, onboarded 80+ rural micro-entrepreneurs, disbursed LKR 93 Mn in tailored credit, and retained LKR 105 Mn in rural savings.",
      "Pioneered the 'Heritage Hands' value chain project in Deraniyagala to modernize traditional Kithul palm tapping, improve quality packaging for export, and develop eco-tourism.",
      "Empowered marginalized female estate workers in Maliboda, establishing the Maliboda Siyatha Women Entrepreneurs Society.",
      "Mobilized volunteer missions and LKR 1 Mn worth of emergency rations, medical supplies, and dry goods for Cyclone Ditwah victims in collaboration with 'Manusath Derana'.",
      "Maintained a 24/7/365 dedicated Contact Centre, handling 2,013 inquiries/complaints and resolving over 80% within stipulated regulatory resolution windows."
    ],
    outcomes: [
      "Transformed 3,991 rural families into self-sufficient economic units with permanent income streams.",
      "Trained 1,769 women cooperative leaders (65% of attendees), strengthening female participation in cooperative society governance.",
      "Mobilized LKR 105 Mn in grassroots savings, expanding financial inclusion in underserved rural communities.",
      "Delivered swift humanitarian and financial recovery support to flood-affected communities across northern and eastern regions."
    ],
    detailedSections: [
      {
        title: "The Cooperative Ecosystem & Capacity-Building Workshops",
        summary: "Strengthening the institutional capacity of SANASA primary societies across Sri Lanka.",
        paragraphs: [
          "SDB Bank maintains an enduring symbiotic bond with over 4,000 primary SANASA cooperative societies spanning every district of Sri Lanka.",
          "During 2025, the Bank designed and conducted 50 intensive training programs focused on internal audit, loan delinquency recovery, digital payment adoption, and statutory compliance.",
          "These workshops drew 2,727 attendees, with women comprising 1,769 (65%) of participants. This deliberate gender emphasis has elevated female leadership within village-level cooperative boards."
        ],
        tables: {
          headers: ["Province", "Training Sessions", "Participating Societies", "Total Participants", "Women (%)"],
          rows: [
            ["Western", "8", "142", "480", "62%"],
            ["Central", "7", "118", "395", "68%"],
            ["Southern", "6", "98", "320", "64%"],
            ["North Western", "8", "135", "450", "66%"],
            ["Northern & Eastern", "9", "160", "512", "67%"],
            ["Uva & Sabaragamuwa", "8", "125", "390", "63%"],
            ["North Central", "4", "66", "180", "65%"],
            ["Islandwide Total", "50", "844", "2,727", "65%"]
          ]
        }
      },
      {
        title: "Flagship Rural Upliftment Programme & 'Heritage Hands' Project",
        summary: "Incubating sustainable micro-enterprises and revitalizing traditional agrarian heritage.",
        paragraphs: [
          "The Rural Upliftment Programme is SDB Bank's signature socio-economic intervention designed to pull underserved communities out of poverty through entrepreneurship.",
          "In 2025, the programme reached 3,991 direct beneficiaries. The Bank onboarded 80 new rural entrepreneurs, disbursed LKR 93 Mn in concessionary seed funding, and encouraged disciplined thrift that mobilized LKR 105 Mn in community savings.",
          "In Deraniyagala, the Bank launched 'Heritage Hands', partnering with local Kithul tappers to improve hygiene standards, provide safety equipment, and create direct export linkages for certified organic Kithul treacle and jaggery.",
          "In Maliboda, the Bank assisted female tea plantation workers to organize into the Maliboda Siyatha Women Entrepreneurs Society, funding home gardening, handicraft, and micro-poultry initiatives."
        ],
        highlights: [
          "3,991 rural families supported in 2025",
          "LKR 93 Mn concessionary credit disbursed to 80+ entrepreneurs",
          "LKR 105 Mn community savings mobilized and retained",
          "'Heritage Hands' organic Kithul syrup export value chain created"
        ]
      },
      {
        title: "Customer Experience (CX), Contact Centre & Sentiment Monitoring",
        summary: "Maintaining a 24/7/365 multichannel customer support desk.",
        paragraphs: [
          "The SDB Bank Contact Centre delivers round-the-clock telephone and digital assistance in Sinhala, Tamil, and English, consistently achieving an agreed Service Level Agreement (SLA) above 90%.",
          "In 2025, the Bank logged and processed 2,013 customer inquiries, requests, and formal complaints, resolving over 80% within the prescribed service timelines.",
          "Customer sentiment analysis was carried out across all 94 branches during Customer Service Week, capturing valuable feedback to refine teller operations, debit card issuances, and UPay features."
        ]
      }
    ],
    futureOutlook2026: [
      "Expand the Rural Upliftment Programme to cover 5,000 families across 50 newly identified low-income agrarian villages.",
      "Replicate the 'Heritage Hands' value chain model across cinnamon peelers in the Southern Province and palmyrah artisans in the Northern Province.",
      "Deploy an automated AI-driven customer feedback engine across WhatsApp and UPay to monitor customer sentiment in real time.",
      "Conduct 60 cooperative workshops with an emphasis on digital accounting and cashless loan disbursements."
    ],
    sdgAlignments: [
      { sdgNumber: 1, sdgName: "No Poverty", impact: "Empowering 3,991 families through sustainable livelihood development and micro-savings." },
      { sdgNumber: 5, sdgName: "Gender Equality", impact: "65% female attendance at cooperative leadership and financial literacy workshops." },
      { sdgNumber: 17, sdgName: "Partnerships for the Goals", impact: "Partnering with 4,000+ primary SANASA societies, IUCN, and 'Manusath Derana'." }
    ]
  },

  // 6. NATURAL CAPITAL (Pages 102-106)
  {
    id: "natural",
    title: "Natural Capital",
    iconName: "Leaf",
    coverBadge: "100% E&S Loan Screening • Project BLUE Cleanups",
    sourcePages: "Pages 102–106",
    executiveSummary:
      "SDB bank embeds environmental stewardship into its business model, recognizing that its greatest leverage lies in green financing choices and operational footprint reduction. In 2025, the Bank screened 100% of commercial facilities > LKR 500,000 under its Environmental & Social Risk Management System (ESRMS), disbursed LKR 75 Mn for rooftop solar installations, removed 686.3 kg of plastic debris and 20 kg of underwater waste under 'Project BLUE', partnered with Dewahandiya farmers to plant 10,000 saplings across 25 hectares, and initiated Scope 1 and Scope 2 GHG emissions baseline accounting.",
    kpis: [
      { label: "E&S Loan Screening Ratio", value: "100%", subtext: "All commercial facilities > LKR 500,000" },
      { label: "Solar Rooftop Financing", value: "LKR 75 Mn", subtext: "Funded 75 residential/commercial solar units" },
      { label: "Project BLUE Waste Cleared", value: "706.3 kg", subtext: "686.3 kg beach plastic + 20 kg underwater waste" },
      { label: "Forest Land Restored", value: "25 Hectares", subtext: "10,000 indigenous trees planted in Dewahandiya" },
      { label: "Refinance Capital for Green Loans", value: "LKR 1.7 Bn+", subtext: "Concessionary climate-smart credit mobilized" },
      { label: "Carbon Accounting", value: "Scope 1 & 2", subtext: "Baseline footprint calculated for Head Office & branches" }
    ],
    actions: [
      "Subjected 100% of business loan applications exceeding LKR 500,000 to rigorous Environmental and Social Due Diligence under the Bank's ESRMS framework.",
      "Strictly enforced the Environmental Exclusion List, barring credit to activities that cause deforestation, habitat destruction, or hazardous waste emission.",
      "Disbursed LKR 75 Mn in concessionary solar loans to 75 cooperative members and MSMEs to install rooftop solar photovoltaic systems.",
      "Organized 'Project BLUE' marine conservation missions in partnership with the Ocean University of Sri Lanka, conducting coastal beach cleanups and underwater scuba diving sweeps.",
      "Partnered with the Dewahandiya Farmers' Association to restore 25 hectares of degraded forest near the Victoria-Randenigala-Rantambe sanctuary by planting 10,000 native tree saplings.",
      "Signed an MoU with USAID Climate Adaptation to model lending portfolio vulnerability to climate change.",
      "Conducted the staff 'Nature Walk & Bird Race' at Diyasaru Wetland Park, fostering environmental sensitivity among employees."
    ],
    outcomes: [
      "Prevented capital allocation to ecologically hazardous commercial activities across all 94 branches.",
      "Generated clean renewable electricity and reduced borrower grid utility bills through LKR 75 Mn in rooftop solar capacity.",
      "Removed 686.3 kg of coastal plastic and 20 kg of underwater marine debris from delicate coral and coastal ecosystems.",
      "Restored 25 hectares of biological buffer zones, enhancing watershed protection and soil carbon sequestration.",
      "Established initial baseline carbon emissions data to guide the Bank's long-term Net-Zero Decarbonisation Roadmap."
    ],
    detailedSections: [
      {
        title: "Environmental & Social Risk Management System (ESRMS)",
        summary: "Mandatory multi-tiered environmental due diligence on all business loans.",
        paragraphs: [
          "SDB Bank operates a robust ESRMS framework embedded directly into its core credit appraisal workflow.",
          "Every loan applicant seeking more than LKR 500,000 for commercial, industrial, or agricultural purposes is screened against environmental and social criteria by branch relationship officers.",
          "Medium-risk and high-risk proposals undergo independent evaluation by the Integrated Risk Management Department (IRMD). Borrowers in manufacturing, agro-processing, and vehicle repair must demonstrate valid Environmental Protection Licenses (EPL), hazardous waste disposal protocols, and community safety safeguards prior to fund release."
        ],
        highlights: [
          "100% screening of business loans above LKR 500,000",
          "Mandatory Environmental & Social Management Plans (ESMP)",
          "Strict enforcement of the Central Bank Green Finance Taxonomy",
          "Prohibition of financing in declared forest and wildlife reserves"
        ]
      },
      {
        title: "Renewable Energy & Solar Rooftop Financing",
        summary: "Decarbonizing energy consumption for cooperative households and MSMEs.",
        paragraphs: [
          "Recognizing rising national electricity tariffs, SDB Bank championed rooftop solar financing during 2025.",
          "The Bank disbursed LKR 75 Mn to install 75 solar rooftop units for cooperative members and small commercial enterprises. These installations feed clean solar power back into the national grid while insulating borrowers against volatile energy costs.",
          "Furthermore, the Bank obtained over LKR 1.7 Bn in low-cost concessionary refinance credit from multilateral institutions (such as ADB and CBSL) to channel into sustainable agriculture and energy efficiency retrofits."
        ]
      },
      {
        title: "Project BLUE & Agroforestry Land Restoration",
        summary: "Direct field action to protect Sri Lanka's marine and terrestrial biodiversity.",
        paragraphs: [
          "Under 'Project BLUE', SDB Bank forged a strategic collaboration with the Ocean University of Sri Lanka to combat marine pollution.",
          "Staff volunteers and certified student divers conducted extensive underwater cleaning sweeps and coastal sweeps, retrieving 686.3 kg of beach plastics and 20 kg of abandoned fishing nets (ghost nets) from coral reefs.",
          "In the Central Highlands, the Bank partnered with the Dewahandiya Farmers' Association to restore 25 hectares of degraded catchment land adjacent to the Victoria-Randenigala-Rantambe sanctuary. Over 10,000 indigenous tree saplings were planted to prevent soil erosion and restore biodiversity corridors."
        ],
        highlights: [
          "686.3 kg beach waste + 20 kg underwater debris cleared",
          "25 hectares restored with 10,000 indigenous trees",
          "MoU with USAID Climate Adaptation for portfolio climate risk modeling"
        ]
      }
    ],
    futureOutlook2026: [
      "Scale rooftop solar and EV financing with dedicated concessionary interest rates under the Rabo Partnerships green credit line.",
      "Complete comprehensive Scope 1, Scope 2, and initial Scope 3 (financed emissions) GHG audit across the branch network.",
      "Establish green procurement guidelines requiring all major bank vendors to demonstrate verified recycling and eco-friendly packaging.",
      "Expand 'Project BLUE' to cover coral reef rehabilitation in Trincomalee and Mirissa."
    ],
    sdgAlignments: [
      { sdgNumber: 7, sdgName: "Affordable & Clean Energy", impact: "Disbursing LKR 75 Mn for rooftop solar installations and energy efficiency retrofits." },
      { sdgNumber: 13, sdgName: "Climate Action", impact: "100% ESRMS credit screening and baseline carbon footprint accounting." },
      { sdgNumber: 14, sdgName: "Life Below Water", impact: "Underwater debris removal and coastal cleanups under Project BLUE." },
      { sdgNumber: 15, sdgName: "Life on Land", impact: "Restoring 25 hectares of forest land with 10,000 indigenous saplings in Dewahandiya." }
    ]
  }
];
