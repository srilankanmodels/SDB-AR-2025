export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FinancialMetric {
  year: string;
  netAdvances: number;
  deposits: number;
  totalAssets: number;
  totalEquity: number;
  netInterestIncome: number;
  netFeeIncome: number;
  profitAfterTax: number;
  impairmentCharge: number;
  totalComprehensiveIncome: number;
}

export interface BoardMember {
  id: string;
  name: string;
  designation: string;
  appointed: string;
  bio: string;
  imageIndex: number;
}

export interface ExecutiveMember {
  name: string;
  designation: string;
  qualifications: string;
}

export interface CapitalImpact {
  title: string;
  icon: string;
  summary: string;
  actions: string[];
  outcomes: string[];
  sdgs: { id: string; name: string; contribution: string }[];
  colorClass: string;
}

export const TIMELINE_MILESTONES: TimelineEvent[] = [
  {
    year: "1997",
    title: "The Foundation",
    description: "SANASA Development Bank Ltd. is incorporated with a capital of LKR 123 Mn, contributed largely by primary SANASA Societies, aiming to serve Sri Lanka's community-led cooperative sector."
  },
  {
    year: "1998",
    title: "Early Footprint",
    description: "Rapid expansion begins with the opening of the 10th branch in the historic city of Kandy, establishing a presence outside of Colombo."
  },
  {
    year: "1999",
    title: "Financial Milestone",
    description: "Total assets cross LKR 100 Mn within just two years of operations, proving the strength of the cooperative banking model."
  },
  {
    year: "2004",
    title: "Empowering Women",
    description: "Launched 'Uttamavi', a dedicated product for women entrepreneurship, which receives prestigious international recognition and sets the tone for inclusive development."
  },
  {
    year: "2007",
    title: "Global Recognition",
    description: "SDB bank is ranked among the Top 50 microfinance institutions in the world (out of 641 providers) as it celebrates 10 years of excellence with a network of 25 branches."
  },
  {
    year: "2008",
    title: "National Excellence",
    description: "SDB wins the National Excellence Award. Total assets surge to LKR 10 Bn, and the employee cadre expands to over 500 passionate professionals."
  },
  {
    year: "2012",
    title: "Public Listing",
    description: "Listed on the Main Board of the Colombo Stock Exchange, transition to a widely held public licensed specialized bank while retaining its cooperative soul."
  },
  {
    year: "2016",
    title: "Modern Identity",
    description: "Asset base reaches LKR 66 Bn. SDB bank launches its fresh, modern corporate logo and establishes a dedicated Tele Collection Unit in Malabe."
  },
  {
    year: "2018",
    title: "The Fastest Growing",
    description: "Awarded 'The Fastest Growing MSME Bank in Sri Lanka' by Global Banking and Finance Review, UK. Launches 'Corporate Top Saver' to attract institutional capital."
  },
  {
    year: "2020",
    title: "Acquiring Upay & Global Awards",
    description: "Acquires the digital payment platform 'UPay' to future-proof its services. Wins 'Best CSR Bank' and 'Rural/Cooperative Bank of the Year - Sri Lanka' from Asian Banking & Finance."
  },
  {
    year: "2022",
    title: "25 Years of Service",
    description: "SDB bank celebrates 25 years of service. Partners with the Asian Development Bank (ADB) on a Line of Credit to support tea smallholders and MSMEs."
  },
  {
    year: "2024",
    title: "Transformation & Growth",
    description: "Savings portfolio grows to LKR 20.5 Bn (+LKR 4.01 Bn YoY). Initiates multi-million dollar hardware upgrades to consolidate its data center and disaster recovery infrastructure."
  },
  {
    year: "2025",
    title: "A Future Handcrafted",
    description: "Successfully concludes the first stage of its transformation programme. Achieves LKR 800.17 Mn in Profit Before Tax (+16.93% YoY) and outlines its 2026-2029 Strategic Plan with Rabo Partnerships."
  }
];

export const FINANCIAL_TRENDS: FinancialMetric[] = [
  {
    year: "2021",
    netAdvances: 111891,
    deposits: 93903,
    totalAssets: 147819,
    totalEquity: 14130,
    netInterestIncome: 6774,
    netFeeIncome: 390,
    profitAfterTax: 893,
    impairmentCharge: 644,
    totalComprehensiveIncome: 909
  },
  {
    year: "2022",
    netAdvances: 110525,
    deposits: 107533,
    totalAssets: 159521,
    totalEquity: 13659,
    netInterestIncome: 6839,
    netFeeIncome: 478,
    profitAfterTax: 61,
    impairmentCharge: 1898,
    totalComprehensiveIncome: 292
  },
  {
    year: "2023",
    netAdvances: 98869,
    deposits: 108118,
    totalAssets: 156957,
    totalEquity: 14266,
    netInterestIncome: 8502,
    netFeeIncome: 429,
    profitAfterTax: 466,
    impairmentCharge: 1819,
    totalComprehensiveIncome: 607
  },
  {
    year: "2024",
    netAdvances: 95137,
    deposits: 106989,
    totalAssets: 145156,
    totalEquity: 14587,
    netInterestIncome: 7820,
    netFeeIncome: 584,
    profitAfterTax: 410,
    impairmentCharge: 559,
    totalComprehensiveIncome: 342
  },
  {
    year: "2025",
    netAdvances: 109841,
    deposits: 105681,
    totalAssets: 146958,
    totalEquity: 14804,
    netInterestIncome: 8233,
    netFeeIncome: 675,
    profitAfterTax: 405,
    impairmentCharge: 719,
    totalComprehensiveIncome: 218
  }
];

export interface ExecutiveMember {
  name: string;
  designation: string;
  qualifications: string;
  category?: "Corporate Executive" | "Business & Operations" | "Governance & Control";
  bio?: string;
}

export const BOARD_MEMBERS: BoardMember[] = [
  {
    id: "01",
    name: "Ms. Dinithi Ratnayake",
    designation: "Chairperson / Independent Non-Executive Director",
    appointed: "Appointed to the Board in 2020 (Chairperson since April 2022)",
    bio: "Ms. Ratnayake is a career banker with over 30 years of management experience in Banking and Advisory. She spent 19+ years at Citibank N.A. as Director / Head of Financial Institutions Group. She is the Co-Founder/Director of IDEAology Strategy Consulting. Ms. Ratnayake has been a strong advocate for women's workforce inclusion and regularly engages with local artisan communities. She holds a BSc in Computer Science from the University of Houston, Clear Lake, USA, and an MA in Economics from the University of Colombo.",
    imageIndex: 1
  },
  {
    id: "02",
    name: "Mr. Kapila Ariyaratne",
    designation: "Executive Director / Chief Executive Officer",
    appointed: "Appointed to the Board in 2024",
    bio: "Mr. Ariyaratne is a senior banker with over 40 years of industry experience. He previously served as the CEO of a leading local commercial bank for 12 years. His expertise spans Corporate, Institutional, and Development Credit, honed at banks such as People's Bank, ABN Amro, Arab National Bank, and Nations Trust Bank. He has held leadership roles as Chairman of Seylan Developments PLC and the Sri Lanka Bankers' Association. He holds a First Class Honors degree from the University of Colombo and a Postgraduate Diploma in Business and Financial Administration.",
    imageIndex: 2
  },
  {
    id: "03",
    name: "Mr. Chaaminda Kumarasiri",
    designation: "Non-Executive, Independent Director",
    appointed: "Appointed to the Board in 2018",
    bio: "An award-winning finance professional, senior chartered accountant, and corporate trainer. He serves as an advisor to various public/private committees and is the Chairman of the ACCA Sri Lanka Member Network Panel. He was previously the CFO of The Lanka Hospitals Corporation PLC and holds a B.Sc. in Accountancy with First-Class Honors from Sri Jayewardenepura and an MBA in Finance from the University of Colombo. He has trained over one million individuals globally.",
    imageIndex: 3
  },
  {
    id: "04",
    name: "Mr. Prasanna Premaratna",
    designation: "Non-Executive, Independent Director",
    appointed: "Appointed to the Board in 2018",
    bio: "A senior banker with over 31 years of experience in Agriculture and Development Banking. He has heavily focused on MSME development across Sri Lanka, aiding startups in manufacturing and export sectors. He was previously the Chairman of the Regional Development Bank of Sri Lanka and Vice President of DFCC Bank. He holds an MSc in Agriculture from Kuban Institute of Agriculture (USSR) and post-graduate qualifications in Bank Management.",
    imageIndex: 4
  },
  {
    id: "05",
    name: "Mr. Thusantha Wijemanna",
    designation: "Non-Executive, Independent Director",
    appointed: "Appointed to the Board in 2021",
    bio: "Mr. Wijemanna is an Attorney-at-Law of the Supreme Court of Sri Lanka and a Notary Public with over 21 years of experience in the banking sector. He has served as Legal Advisor to the Ministry of External Affairs and General Counsel/Secretary to the Board of DFCC Bank. He holds an LLB with First Class Honors from the University of Colombo and an LLM from the University of London. He is a Commonwealth and Chevening Scholar.",
    imageIndex: 5
  },
  {
    id: "06",
    name: "Mr. Sarath Nandasiri",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2021",
    bio: "Mr. Nandasiri possesses over 21 years of experience in Credit and has worked extensively with rural communities, particularly within the SANASA Movement. He serves as the General Manager of the Kegalle SANASA District Union and provides technical training for cooperative staff. He holds a B.Com (Hons) from the University of Peradeniya and a Higher Diploma in Micro Finance.",
    imageIndex: 6
  },
  {
    id: "07",
    name: "Mr. Conrad Dias",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2021",
    bio: "A visionary business technology leader with over 3 decades of experience, specializing in fintech innovation. He is the founder of iPay and OYES. He was inducted into the Global CIO Hall of Fame in 2020. He holds an MBA from the University of Leicester, UK, and is a Fellow of the Chartered Institute of Management Accountants (FCMA). He represents LOLC Investment Holdings One, a major shareholder.",
    imageIndex: 7
  },
  {
    id: "08",
    name: "Mr. Romani De Silva",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2022",
    bio: "Mr. De Silva counts over 35 years of experience in the finance industry and is a key promoter of sustainable finance in Sri Lanka. He represents Alliance Finance Co. PLC. He serves on the Central Bank's Steering Committee for the Sustainable Finance Roadmap and was a founder investor in the 'Ath Pavura' social enterprise reality TV show. He is a Fellow of the Institute of Credit Management, Sri Lanka.",
    imageIndex: 8
  },
  {
    id: "09",
    name: "Mr. Chandana Dissanayake",
    designation: "Non-Executive, Independent Director",
    appointed: "Appointed to the Board in 2022",
    bio: "Mr. Dissanayake has over 40 years of experience in the Banking and Non-Banking Financial Sectors across the UAE, Oman, and Sri Lanka. He specializes in Credit Risk Management and has worked at banks including HSBC and the National Bank of Abu Dhabi. He was appointed as an Independent Director in November 2025 following FMO/SBI Ven's divestment. He is an Associate Member of the Chartered Institute of Bankers UK.",
    imageIndex: 9
  },
  {
    id: "10",
    name: "Mr. B. R. A. Bandara",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2023",
    bio: "Mr. Bandara possesses extensive experience in cooperative sector development, microfinance, and rural economy management. He has served in key leadership positions across regional cooperative societies and represents SANASA Primary Societies. He holds a Master's in Development Economics from the University of Peradeniya and has pioneered numerous community micro-lending frameworks across Sri Lanka.",
    imageIndex: 10
  }
];

export const EXECUTIVE_MANAGEMENT: ExecutiveMember[] = [
  { name: "Mr. Kapila Ariyaratne", designation: "Executive Director / Chief Executive Officer", qualifications: "BSc (Natural Science), Post Graduate Dip in Business & Financial Administration", category: "Corporate Executive", bio: "Leading SDB bank's strategic transformation and long-term sustainable growth." },
  { name: "Mr. Chitral De Silva", designation: "Chief Business Officer", qualifications: "Ex. Dip in Business Administration, Dip Credit Management", category: "Corporate Executive", bio: "Driving retail, MSME, leasing, and commercial lending expansion across 94 branches." },
  { name: "Mr. Anura Yapa", designation: "Chief Credit Officer", qualifications: "Associate of Institute of Bankers (AIB)", category: "Corporate Executive", bio: "Overseeing bank-wide loan underwriting, portfolio quality, and asset recovery." },
  { name: "Mr. Dinesh Thomas", designation: "Chief Information & Digital Officer", qualifications: "MSc in IT, MBA", category: "Corporate Executive", bio: "Spearheading SDB's core banking cloud infrastructure and digital payment ecosystem." },
  { name: "Mr. Dhananjaya Dayananda", designation: "Chief Internal Auditor", qualifications: "FCCA, FCMA, ACA, MBA (Banking Mgt)", category: "Governance & Control", bio: "Ensuring independent audit assurance, operational compliance, and internal controls." },
  { name: "Mr. Dinuke Wijesinghe", designation: "Chief Risk Officer", qualifications: "MBA, Dip in Banking, AIB", category: "Governance & Control", bio: "Managing market risk, credit risk models, and Basel III regulatory risk frameworks." },
  { name: "Ms. Lakmini Muththunga", designation: "Head of Operations", qualifications: "MBA, BSc (Hons) (UOK)", category: "Business & Operations", bio: "Optimizing central operational workflows, trade processing, and branch back-office systems." },
  { name: "Mr. Aruna Jayasekera", designation: "Chief Human Resources Officer", qualifications: "LLB, Attorney at Law, FCIPM", category: "Governance & Control", bio: "Transforming talent management, leadership development, and employee welfare." },
  { name: "Ms. Krishani Enoka", designation: "Head of Treasury", qualifications: "MBA (UK), BSc (Phy. Science) Hons, AIB", category: "Corporate Executive", bio: "Managing foreign exchange trading, liquidity ratios, and money market investments." },
  { name: "Ms. Mihiri Attanayake", designation: "Head of Credit", qualifications: "BSc Agri (Hons), MSc Agri, Dip in Micro Financing", category: "Business & Operations", bio: "Specializing in agricultural value chain credit, tea smallholder loans, and microfinance." },
  { name: "Ms. Pavithra Liyanage", designation: "Head of Legal", qualifications: "LLM (Staffordshire), LLB, Attorney-at-Law, Company Secretary", category: "Governance & Control", bio: "Directing corporate legal strategy, contract governance, and litigation management." },
  { name: "Mr. Sanjeeva Jayasinghe", designation: "Head of Finance", qualifications: "FCA, ACCA, BSc. Mgt. Public Admin", category: "Corporate Executive", bio: "Leading corporate financial reporting, statutory taxation, and budget planning." },
  { name: "Mr. Bhanu Wijayaratne", designation: "Chief Compliance Officer", qualifications: "Senior Fellow (IBSL), FCPM, MA (Fin Econ), MBA", category: "Governance & Control", bio: "Enforcing AML/CFT regulations, CBSL compliance guidelines, and corporate ethics." },
  { name: "Mr. Binesh Aravinda", designation: "Head of Branch Banking", qualifications: "MBA, BSc Business Administration, Moody's Business Banking Mastery", category: "Business & Operations", bio: "Directing branch operations, deposit mobilization, and regional distribution channels." },
  { name: "Ms. Amila Belpamulla", designation: "Company Secretary", qualifications: "Attorney-at-Law, Company Secretary, BA & MA in International Relations", category: "Governance & Control", bio: "Managing Board governance, share registration, and Colombo Stock Exchange disclosures." },
  { name: "Mr. Lasantha Edirisuriya", designation: "Head of Cooperative Development", qualifications: "Dip. in Fin. & Bank Mgt., Exe. Dev. Mini MBA, Harvard Cert in Entrepreneurship", category: "Business & Operations", bio: "Fostering strategic partnerships with primary SANASA cooperative unions nationwide." }
];

export const CAPITALS_DATA: CapitalImpact[] = [
  {
    title: "Financial Capital",
    icon: "Coins",
    summary: "In 2025, SDB bank continued to strengthen its financial position and stability, initiating a new growth trajectory following five years of lending-portfolio contraction. Recording robust growth across all segments, extending concessions to 15,000+ borrowers, and launching innovative credit lines, SDB stands ready to support national recovery.",
    actions: [
      "Provided relief and tenor concessions to borrowers impacted by the macroeconomic crisis",
      "Developed a Rabo-backed Agri Financing Strategy to streamline lending",
      "Expanded credit facilities to target high-potential food chains and MSMEs",
      "Optimized funding structure by balancing institutional borrowings and public deposits"
    ],
    outcomes: [
      "15,000-16,000 customers benefited from financial relief measures",
      "Achieved a 15% growth in total lending portfolio to LKR 109.84 Bn",
      "Reversed a 5-year portfolio contraction, growing assets to LKR 146.95 Bn",
      "Profit Before Tax (PBT) increased by 16.93% YoY to LKR 800.17 Mn",
      "Retained earnings increased by 13% YoY to LKR 2.6 Bn",
      "Maintained comfortable Capital Adequacy (CAR 15.24% vs requirement 12.50%)"
    ],
    sdgs: [
      { id: "1", name: "No Poverty", contribution: "Empowering micro entrepreneurs and low-income earners with collateral-free guarantee loans." },
      { id: "8", name: "Decent Work & Economic Growth", contribution: "Direct funding to cooperative ecosystems to stimulate local trade and create employment." }
    ],
    colorClass: "border-sdb-amber text-sdb-amber bg-sdb-amber/5"
  },
  {
    title: "Manufactured Capital",
    icon: "Home",
    summary: "SDB bank's manufactured capital comprises a combination of physical branch premises, ATM infrastructure, and an expanding digital technology base. Key structural improvements in 2025 optimized back-office processing and ensured rapid disaster recovery following local climate events.",
    actions: [
      "Opened a second Head Office premises in Colombo (20,000 sq ft) to consolidate scattered departments",
      "Rehabilitated and reopened 5 branches severely damaged by Cyclone Ditwah (Giriulla, Ekala, Kaduwela, Chilaw, Ruwanwella) within days",
      "Fully upgraded and rebranded Galle branch and Moratuwa regional office",
      "Progressively transitioned the official vehicle fleet from an ownership to a rental model to cut capital expenditure"
    ],
    outcomes: [
      "Consolidated multi-department coordination under one roof, improving communication speed",
      "Zero loss of customer data or property during natural disasters due to proactive equipment backup",
      "Branch assets stood at LKR 970 Mn, reflecting cost optimization",
      "LKR 57 Mn invested in modern high-speed computers and portable digital kits"
    ],
    sdgs: [
      { id: "9", name: "Industry, Innovation & Infrastructure", contribution: "Providing robust physical branch banking access in 94 locations coupled with top-tier hardware." }
    ],
    colorClass: "border-sdb-blue text-sdb-blue bg-sdb-blue/5"
  },
  {
    title: "Intellectual Capital",
    icon: "Brain",
    summary: "Derived from a combination of brand equity, institutional knowledge, and proprietary digital platforms, SDB bank's intellectual capital is a core competitive differentiator. SDB specializes in community microfinance, MSME business cycles, and cooperative sector relationships.",
    actions: [
      "Commenced a comprehensive workflow digitization and enterprise document management system",
      "Introduced digital onboarding platform for leasing customers, simplifying applications",
      "Enabled LankaPay GovPay (for traffic fines) and LankaPay LPOPP (for Inland Revenue, Customs, Ports Authority) payments in SDB UPay app",
      "Maintained SDB Nerve Intranet, a centralized hub for training and compliance guidelines"
    ],
    outcomes: [
      "Over 8.5 Million digital transactions executed in 2025",
      "Digital transactions accounted for 37% of the bank's total transaction volume",
      "Substantially reduced paper consumption through digital e-statements and in-house workflow automation",
      "Maintained a 24x7 Security Operations Center with zero data breaches or losses recorded"
    ],
    sdgs: [
      { id: "9", name: "Industry, Innovation & Infrastructure", contribution: "Driving digital inclusion through the SDB UPay app, GovPay, and cashless solutions for small merchants." }
    ],
    colorClass: "border-sdb-purple text-sdb-purple bg-sdb-purple/5"
  },
  {
    title: "Human Capital",
    icon: "Users",
    summary: "SDB bank achieved significant progress in strengthening its workforce framework in 2025. HR initiatives focused on identifying core competencies, PMS reform, medical welfare upgrades, and talent pipelines to support the bank's long-term sustainability goals.",
    actions: [
      "Implemented a competency-based Performance Management System (PMS) and structured Talent Pools",
      "Upgraded employee welfare with higher life/medical insurance limits and regional medical camps",
      "Delivered over 32,000+ total training hours across internal and external programs",
      "Conducted specialized training on Financial Consumer Protection (FCP) and Whistleblowing policies"
    ],
    outcomes: [
      "Workforce base stood at 1,263 employees, with an exceptional 92.06% retention rate",
      "Excellent gender diversity: 48% female representation in the total workforce, and 31% in corporate management",
      "Successfully trained senior staff on climate financing and credit assessment in collaboration with Rabo bank",
      "Celebrated long-service employees with gold coins at the Seniority Awards Ceremony"
    ],
    sdgs: [
      { id: "5", name: "Gender Equality", contribution: "Maintaining equal opportunity policies and conducting active Gender Gap Assessments." },
      { id: "8", name: "Decent Work", contribution: "Upholding work-life balance policies, anti-harassment structures, and robust training." }
    ],
    colorClass: "border-sdb-coral text-sdb-coral bg-sdb-coral/5"
  },
  {
    title: "Social & Relationship Capital",
    icon: "Handshake",
    summary: "As a development bank incorporating ESG principles, SDB bank's greatest impact is its social contribution. SDB continued to expand its reach through targeted cooperative training, the Rural Upliftment Programme, and female entrepreneurship empowerment.",
    actions: [
      "Conducted 50 cooperative training programs covering recovery, audit, and financial literacy across Sri Lanka",
      "Pioneered the 'Heritage Hands' project in Deraniyagala to boost fishtail palm (Kithul) export and community tourism",
      "Empowered female estate workers, creating the Maliboda Siyatha Women Entrepreneurs Society",
      "Mobilized volunteers and LKR 1 Mn worth of goods for families affected by Cyclone Ditwah via 'Manusath Derana'"
    ],
    outcomes: [
      "Cooperative training benefited 2,727 individuals across 844 societies, with 1,769 of them being women",
      "Rural Upliftment Programme reached 3,991 total beneficiaries in 2025",
      "Onboarded over 80 rural entrepreneurs, disbursed LKR 93 Mn in credit, and retained LKR 105 Mn in savings",
      "Channelled 44% of the SME loan portfolio directly into Agriculture, Forestry, and Fishing"
    ],
    sdgs: [
      { id: "1", name: "No Poverty", contribution: "Fostering income generation and economic resilience among marginalized rural families." },
      { id: "2", name: "Zero Hunger", contribution: "Developing agricultural value chains and supporting local smallholders to protect food security." }
    ],
    colorClass: "border-sdb-green text-sdb-green bg-sdb-green/5"
  },
  {
    title: "Natural Capital",
    icon: "Leaf",
    summary: "SDB bank embeds environmental stewardship into its business model, recognizing that its greatest influence is exercised through green lending decisions. The bank is committed to aligning its financing portfolio with Central Bank's Green Finance Taxonomy.",
    actions: [
      "Financed LKR 75 Mn to install household solar panels for 75 cooperative members",
      "Launched 'Project Blue' in partnership with the Ocean University of Sri Lanka for marine ecosystem clearing",
      "Partnered with the Dewahandiya Farmers' Association to plant 10,000 saplings for forest cover restoration",
      "Signed an MoU with USAID Climate Adaptation to train staff and map loan portfolio climate risk"
    ],
    outcomes: [
      "Removed approximately 686.3 kg of plastic and beach waste, and cleared 20 kg of underwater debris",
      "Restored a total of 25 hectares of degraded forest land near the Victoria-Randenigala-Rantambe boundary",
      "Organized employee 'Nature Walk & Bird Race' at Diyasaru Park to sensitize staff to biodiversity",
      "Initiated internal calculation of Scope 1 and Scope 2 Greenhouse Gas (GHG) carbon footprint"
    ],
    sdgs: [
      { id: "7", name: "Affordable & Clean Energy", contribution: "Extending custom credit lines for rooftop solar and electric vehicle leasing." },
      { id: "13", name: "Climate Action", contribution: "Developing robust climate adaptation and environmental risk management strategies." }
    ],
    colorClass: "border-sdb-green text-sdb-green bg-sdb-green/10"
  }
];

export const GOALS_DATA = [
  { text: "Improve the asset base to stay competitive and resilient in the market.", icon: "TrendingUp" },
  { text: "Transition from a retail focus to a broader SME focus.", icon: "Briefcase" },
  { text: "Establish SDB as the Bank of choice for the cooperative sector.", icon: "Handshake" },
  { text: "Introduce a comprehensive digital platform to future proof the Bank.", icon: "Smartphone" },
  { text: "Provide a delightful experience to customers through value added service.", icon: "Heart" },
  { text: "Developing people and modeling future-ready leadership.", icon: "Users" }
];

export const VALUES_DATA = [
  { title: "Ethical Standards", desc: "To foster and maintain the highest ethical standards at all levels of the Bank in dealing with customers, stakeholders and competitors." },
  { title: "Innovation & Profit", desc: "To be innovative and profit driven in providing financial services." },
  { title: "Professionalism", desc: "To be courteous and professional in all business dealings." },
  { title: "Equal Treatment", desc: "To avoid discrimination on the grounds of religion, sex, ethnicity, social status and language." },
  { title: "Sustainability", desc: "A strong commitment to sustainability in all our actions." }
];
