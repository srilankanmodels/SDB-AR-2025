export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  points?: string[];
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
    description: "SANASA Development Bank Ltd. is incorporated on 17th February 1997 with an initial capital of LKR 123 Mn, contributed largely by primary SANASA cooperative societies, aiming to serve Sri Lanka's community-led cooperative sector.",
    points: [
      "Incorporation as a specialized development bank under the Companies Act",
      "Initial authorized capital of LKR 123 Million seeded by primary SANASA societies",
      "Pioneered community banking for rural smallholders and self-employed micro-entrepreneurs"
    ]
  },
  {
    year: "1998",
    title: "Early Footprint",
    description: "Rapid expansion began across central provinces with the historic opening of SDB's 10th branch in Kandy, establishing a robust physical presence outside Colombo.",
    points: [
      "Reached milestone of 10 fully fledged branches across key regional commercial centers",
      "Established presence in the historic hill capital of Kandy",
      "Introduced group guarantee lending model to rural farming communities"
    ]
  },
  {
    year: "1999",
    title: "Financial Milestone",
    description: "Total assets crossed the LKR 100 Mn benchmark within just two years of full commercial operations, proving the long-term economic viability of the cooperative banking model.",
    points: [
      "Asset base surpassed LKR 100 Million",
      "Formed direct credit linkages with over 500 village-level SANASA cooperative societies",
      "Commenced seasonal crop cultivation and agricultural machinery micro-loans"
    ]
  },
  {
    year: "2004",
    title: "Empowering Women (Uttamavi)",
    description: "Launched 'Uttamavi', a dedicated microfinance product for women entrepreneurs, which received prestigious international recognition and set the standard for gender-inclusive finance in South Asia.",
    points: [
      "Launched flagship 'Uttamavi' women entrepreneurship loan scheme",
      "Recognized by international development agencies for financial inclusion",
      "Over 10,000 rural women entrepreneurs empowered with seed capital"
    ]
  },
  {
    year: "2006",
    title: "Cooperative Network Integration",
    description: "Deepened strategic integration with district cooperative unions across Sri Lanka, launching tailored liquidity support and institutional credit facilities.",
    points: [
      "Institutionalized apex financing lines for District SANASA Unions",
      "Introduced computerized inter-branch remittance facilities for cooperative members",
      "Expanded regional branch footprint across Southern and North-Western provinces"
    ]
  },
  {
    year: "2007",
    title: "Global Microfinance Recognition",
    description: "SDB bank was ranked among the Top 50 microfinance institutions in the world (out of 641 global providers) by the Microfinance Information Exchange (MIX), celebrating 10 years of service with 25 branches.",
    points: [
      "Ranked in the Global Top 50 Microfinance Institutions worldwide",
      "Celebrated 10th anniversary milestone with 25 branch locations",
      "Mobilized international concessionary credit lines to support post-tsunami livelihood restoration"
    ]
  },
  {
    year: "2008",
    title: "National Excellence & Asset Surge",
    description: "Won the National Business Excellence Award in specialized banking. Total assets surged past LKR 10 Bn, and the employee cadre expanded to over 500 professionals.",
    points: [
      "Total assets surpassed LKR 10 Billion milestone",
      "Awarded National Business Excellence Award by the National Chamber of Commerce",
      "Staff cadre expanded to over 500 professionals nationwide"
    ]
  },
  {
    year: "2009",
    title: "Northern & Eastern Expansion",
    description: "Following the cessation of civil hostilities, SDB bank rapidly re-established branch networks and mobile banking units across Jaffna, Vavuniya, Batticaloa, and Trincomalee.",
    points: [
      "Opened new full-service branches in Jaffna, Vavuniya, and Eastern province",
      "Disbursed emergency agricultural and fisheries rehabilitation credit packages",
      "Onboarded thousands of war-affected smallholders into formal banking"
    ]
  },
  {
    year: "2010",
    title: "Core Banking Modernization",
    description: "Initiated comprehensive enterprise technology modernization, implementing a centralized real-time core banking platform across all nationwide branches.",
    points: [
      "Successfully rolled out real-time centralized core banking software across network",
      "Introduced electronic interbank fund transfer and real-time passbook printing",
      "Upgraded Treasury and Risk Management capabilities"
    ]
  },
  {
    year: "2012",
    title: "Public Listing on CSE",
    description: "Successfully listed on the Main Board of the Colombo Stock Exchange (CSE) under ticker symbol SDB.N0000, evolving into a widely held public licensed specialized bank while fiercely preserving its cooperative ethos.",
    points: [
      "Initial Public Offering (IPO) on the Main Board of the Colombo Stock Exchange",
      "Broadened shareholder registry with institutional and retail public participation",
      "Adopted highest standards of Code of Best Practice on Corporate Governance"
    ]
  },
  {
    year: "2013",
    title: "SME Commercial Credit Transformation",
    description: "Formalized the SME Banking Division, moving beyond microfinance to support emerging mid-tier commercial enterprises, light manufacturing, and value-added agri-processing.",
    points: [
      "Created dedicated SME business development teams across all 9 provinces",
      "Introduced equipment leasing and commercial working capital facilities",
      "Asset base expanded beyond LKR 35 Billion"
    ]
  },
  {
    year: "2014",
    title: "Capital Infusion & Deposit Drive",
    description: "Bolstered Tier 2 regulatory capital through debenture issuances and executed a nationwide savings mobilization campaign, reinforcing domestic liquidity.",
    points: [
      "Issued Tier 2 subordinated debentures to strengthen capital adequacy",
      "Customer deposits crossed LKR 30 Billion milestone",
      "Expanded branch network to over 80 physical service locations"
    ]
  },
  {
    year: "2015",
    title: "International Strategic Partnerships",
    description: "Attracted premier multilateral development equity partners including the Dutch Entrepreneurial Development Bank (FMO) and SBI Ven Holdings, accelerating institutional governance.",
    points: [
      "FMO and SBI Ven Holdings joined SDB shareholding register as strategic partners",
      "Aligned environmental and social risk assessment with international IFC performance standards",
      "Strengthened Tier 1 core equity to support long-term balance sheet expansion"
    ]
  },
  {
    year: "2016",
    title: "Modern Identity & LKR 66 Bn Assets",
    description: "Asset base reached LKR 66 Bn. Unveiled a modern corporate brand identity, fresh logo, and established a specialized Tele Collection and Customer Care Unit in Malabe.",
    points: [
      "Rebranded as 'SDB bank' with contemporary corporate identity and logo",
      "Total assets crossed LKR 66 Billion",
      "Established centralized credit processing and customer service center in Malabe"
    ]
  },
  {
    year: "2017",
    title: "Agri Value Chain Specialization",
    description: "Pioneered structured agricultural value chain financing models, partnering with dairy, paddy, tea, and rubber smallholder clusters across rural districts.",
    points: [
      "Introduced structured outgrower and cooperative value chain financing",
      "Partnered with leading dairy processors and tea factory networks",
      "Launched green micro-lending for off-grid domestic solar systems"
    ]
  },
  {
    year: "2018",
    title: "Fastest Growing MSME Bank",
    description: "Awarded 'The Fastest Growing MSME Bank in Sri Lanka' by Global Banking & Finance Review (UK). Launched 'Corporate Top Saver' to attract high-value institutional and SME treasury deposits.",
    points: [
      "Awarded 'Fastest Growing MSME Bank in Sri Lanka' by Global Banking and Finance Review, UK",
      "Launched high-yield 'Corporate Top Saver' treasury deposit account",
      "Expanded SME loan book by over 25% year-on-year"
    ]
  },
  {
    year: "2019",
    title: "Digital Roadmap & Branchless Banking",
    description: "Formulated the 5-Year Enterprise Digital Roadmap, deploying tablet-based door-to-door agent banking for rural SANASA cooperative customers.",
    points: [
      "Launched field-agent mobile tablet banking for daily doorstep deposit collection",
      "Initiated interoperable LankaQR merchant onboarding drive across regional towns",
      "Established Digital Transformation Steering Committee under Board oversight"
    ]
  },
  {
    year: "2020",
    title: "Acquiring UPay & Global Awards",
    description: "Acquired Sri Lankan digital fintech payment platform 'UPay' to future-proof its transactional banking. Won 'Best CSR Bank' and 'Rural/Cooperative Bank of the Year' from Asian Banking & Finance.",
    points: [
      "Acquired award-winning mobile payment app 'UPay'",
      "Awarded 'Rural/Cooperative Bank of the Year - Sri Lanka' by Asian Banking & Finance",
      "Provided vital debt moratoria and relief loans to 25,000+ borrowers during COVID-19 lockdowns"
    ]
  },
  {
    year: "2021",
    title: "Rights Issue & Capital Resilience",
    description: "Successfully executed a landmark Rights Issue and Secondary Public Offering (SPO), raising substantial tier-1 equity capital to safeguard against pandemic volatility.",
    points: [
      "Successfully concluded capital raising via Rights Issue and SPO",
      "Total equity surpassed LKR 14 Billion",
      "Gross loans and advances crossed LKR 110 Billion benchmark"
    ]
  },
  {
    year: "2022",
    title: "Silver Jubilee & ADB Credit Line",
    description: "Celebrated 25 years of national service. Secured a specialized concessionary Line of Credit from the Asian Development Bank (ADB) to finance tea smallholders and export-oriented MSMEs.",
    points: [
      "Commemorated 25th Silver Jubilee Anniversary of SDB bank operations",
      "Signed landmark ADB concessionary credit facility for tea smallholders",
      "Managed through national sovereign economic crisis with robust liquidity buffers"
    ]
  },
  {
    year: "2023",
    title: "Crisis Resilience & Portfolio Safeguarding",
    description: "Successfully navigated Sri Lanka's historic macroeconomic and interest rate crisis, conducting proactive debt restructuring for over 15,000 vulnerable small enterprises.",
    points: [
      "Implemented comprehensive credit restructuring protecting 15,000+ rural MSMEs",
      "Maintained Capital Adequacy Ratio (CAR) comfortably above CBSL statutory minimums",
      "Achieved LKR 8,502 Million in Net Interest Income despite high interest rate environment"
    ]
  },
  {
    year: "2024",
    title: "Transformation & Savings Surge",
    description: "Savings portfolio grew to LKR 20.5 Bn (+LKR 4.01 Bn YoY). Initiated multi-million dollar hardware upgrades to consolidate core data center and disaster recovery infrastructure.",
    points: [
      "Savings portfolio expanded to LKR 20.5 Billion (+LKR 4.01 Billion YoY)",
      "Appointed senior veteran banker Mr. Kapila Ariyaratne as Chief Executive Officer",
      "Executed full data center modernization and DR site consolidation"
    ]
  },
  {
    year: "2025",
    title: "A Future Handcrafted",
    description: "Successfully concluded Stage 1 of its enterprise transformation programme. Achieved LKR 800.17 Mn in Profit Before Tax (+16.93% YoY) and finalized the 2026-2029 Strategic Blueprint with Rabo Partnerships.",
    points: [
      "Profit Before Tax (PBT) reached LKR 800.17 Million (+16.93% YoY growth)",
      "Net loans and advances expanded to LKR 109.84 Billion (+15.46% YoY), reversing 5-year contraction",
      "Signed 2026–2029 Strategic Transformation Partnership with Rabo Partnerships",
      "Capital Adequacy Ratio (CAR) closed at a strong 15.24% against 12.50% regulatory requirement"
    ]
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
  department?: string;
  bio?: string;
  imageUrl?: string;
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
    name: "Mr. B. R. A. Bandara",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2023",
    bio: "Mr. Bandara possesses extensive experience in cooperative sector development, microfinance, and rural economy management. He has served in key leadership positions across regional cooperative societies and represents SANASA Primary Societies. He holds a Master's in Development Economics from the University of Peradeniya and has pioneered numerous community micro-lending frameworks across Sri Lanka.",
    imageIndex: 10
  },
  {
    id: "06",
    name: "Mr. Thusantha Wijemanna",
    designation: "Non-Executive, Independent Director",
    appointed: "Appointed to the Board in 2021",
    bio: "Mr. Wijemanna is an Attorney-at-Law of the Supreme Court of Sri Lanka and a Notary Public with over 21 years of experience in the banking sector. He has served as Legal Advisor to the Ministry of External Affairs and General Counsel/Secretary to the Board of DFCC Bank. He holds an LLB with First Class Honors from the University of Colombo and an LLM from the University of London. He is a Commonwealth and Chevening Scholar.",
    imageIndex: 5
  },
  {
    id: "07",
    name: "Mr. Sarath Nandasiri",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2021",
    bio: "Mr. Nandasiri possesses over 21 years of experience in Credit and has worked extensively with rural communities, particularly within the SANASA Movement. He serves as the General Manager of the Kegalle SANASA District Union and provides technical training for cooperative staff. He holds a B.Com (Hons) from the University of Peradeniya and a Higher Diploma in Micro Finance.",
    imageIndex: 6
  },
  {
    id: "08",
    name: "Mr. Conrad Dias",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2021",
    bio: "A visionary business technology leader with over 3 decades of experience, specializing in fintech innovation. He is the founder of iPay and OYES. He was inducted into the Global CIO Hall of Fame in 2020. He holds an MBA from the University of Leicester, UK, and is a Fellow of the Chartered Institute of Management Accountants (FCMA). He represents LOLC Investment Holdings One, a major shareholder.",
    imageIndex: 7
  },
  {
    id: "09",
    name: "Mr. Romani De Silva",
    designation: "Non-Executive, Non-Independent Director",
    appointed: "Appointed to the Board in 2022",
    bio: "Mr. De Silva counts over 35 years of experience in the finance industry and is a key promoter of sustainable finance in Sri Lanka. He represents Alliance Finance Co. PLC. He serves on the Central Bank's Steering Committee for the Sustainable Finance Roadmap and was a founder investor in the 'Ath Pavura' social enterprise reality TV show. He is a Fellow of the Institute of Credit Management, Sri Lanka.",
    imageIndex: 9
  },
  {
    id: "10",
    name: "Mr. Chandana Dissanayake",
    designation: "Non-Executive, Independent Director",
    appointed: "Appointed to the Board in 2022",
    bio: "Mr. Dissanayake has over 40 years of experience in the Banking and Non-Banking Financial Sectors across the UAE, Oman, and Sri Lanka. He specializes in Credit Risk Management and has worked at banks including HSBC and the National Bank of Abu Dhabi. He was appointed as an Independent Director in November 2025 following FMO/SBI Ven's divestment. He is an Associate Member of the Chartered Institute of Bankers UK.",
    imageIndex: 8
  }
];

export const EXECUTIVE_MANAGEMENT: ExecutiveMember[] = [
  {
    name: "Mr. Kapila Ariyaratne",
    designation: "Executive Director /CEO",
    qualifications: "BSc (Natural Science) University of Colombo,, Post Graduate Dip in Business & Financial, Administration",
    category: "Corporate Executive",
    bio: "Leading SDB bank's strategic transformation and long-term sustainable growth.",
    imageUrl: "/assets/personnel/corporate/Mr__Kapila_Ariyaratne.png"
  },
  {
    name: "Mr. Chitral De Silva",
    designation: "Chief Business Officer",
    qualifications: "Ex. Dip in Business Administration, Dip Credit Management",
    category: "Corporate Executive",
    bio: "Driving retail, MSME, leasing, and commercial lending expansion across 94 branches.",
    imageUrl: "/assets/personnel/corporate/Mr__Chitral_De_Silva.png"
  },
  {
    name: "Mr. Anura Yapa",
    designation: "Chief Credit Officer",
    qualifications: "AIB",
    category: "Corporate Executive",
    bio: "Overseeing bank-wide loan underwriting, portfolio quality, and asset recovery.",
    imageUrl: "/assets/personnel/corporate/Mr__Anura_Yapa.png"
  },
  {
    name: "Mr. Dinesh Thomas",
    designation: "Chief Information & Digital Officer",
    qualifications: "MSc in IT, MBA",
    category: "Corporate Executive",
    bio: "Spearheading SDB's core banking cloud infrastructure and digital payment ecosystem.",
    imageUrl: "/assets/personnel/corporate/Mr__Dinesh_Thomas.png"
  },
  {
    name: "Mr. Dhananjaya Dayananda",
    designation: "Chief Internal Auditor",
    qualifications: "FCCA, FCMA, ACA, MBA (Banking Mgt) Sikkim Manipal Uni India",
    category: "Governance & Control",
    bio: "Ensuring independent audit assurance, operational compliance, and internal controls.",
    imageUrl: "/assets/personnel/corporate/Mr__Dhananjaya_Dayananda.png"
  },
  {
    name: "Mr. Dinuke Wijesinghe",
    designation: "Chief Risk Officer",
    qualifications: "MBA, Dip in Banking, AIB",
    category: "Governance & Control",
    bio: "Managing market risk, credit risk models, and Basel III regulatory risk frameworks.",
    imageUrl: "/assets/personnel/corporate/Mr__Dinuke_Wijesinghe.png"
  },
  {
    name: "Ms. Lakmini Muththunga",
    designation: "Head of Operations",
    qualifications: "MBA (IGNOU of India), BSc (Hons) (UOK)",
    category: "Business & Operations",
    bio: "Optimizing central operational workflows, trade processing, and branch back-office systems.",
    imageUrl: "/assets/personnel/corporate/Ms__Lakmini_Muththunga.png"
  },
  {
    name: "Mr. Aruna Jayasekera",
    designation: "Chief Human Resources Officer",
    qualifications: "LLB, Attorney at Law, FCIPM",
    category: "Governance & Control",
    bio: "Transforming talent management, leadership development, and employee welfare.",
    imageUrl: "/assets/personnel/corporate/Mr__Aruna_Jayasekera.png"
  },
  {
    name: "Ms. Krishani Enoka",
    designation: "Head of Treasury",
    qualifications: "MBA (UK), BSc (Phy. Science) Hons. University, of Colombo, AIB, Dip. in Treasury Investment, and Risk Mgt., Certificate in Treasury and Foreign, Currency Operations",
    category: "Corporate Executive",
    bio: "Managing foreign exchange trading, liquidity ratios, and money market investments.",
    imageUrl: "/assets/personnel/corporate/Ms__Krishani_Enoka.png"
  },
  {
    name: "Ms. Mihiri Attanayake",
    designation: "Head of Credit",
    qualifications: "BSc Agri. (Hons), MSc Agri (Hons), CBF, Diploma, in Micro Financing (IBSL)",
    category: "Business & Operations",
    bio: "Specializing in agricultural value chain credit, tea smallholder loans, and microfinance.",
    imageUrl: "/assets/personnel/corporate/Ms__Mihiri_Attanayake.png"
  },
  {
    name: "Ms. Pavithra Liyanage",
    designation: "Head of Legal",
    qualifications: "LLM (Staffordshire), LLB, Attorney-at-Law, Notary Public, Commissioner for Oaths, Company Secretary",
    category: "Governance & Control",
    bio: "Directing corporate legal strategy, contract governance, and litigation management.",
    imageUrl: "/assets/personnel/corporate/Ms__Pavithra_Liyanage.png"
  },
  {
    name: "Mr. Bhanu Wijayaratne",
    designation: "Chief Compliance Officer",
    qualifications: "Senior Fellow (IBSL), FCPM, MA-Fin Econ (Col), MBA (Manipal), AIB (Sri Lanka), MIIA (USA-SL Chapter)",
    category: "Governance & Control",
    bio: "Enforcing AML/CFT regulations, CBSL compliance guidelines, and corporate ethics.",
    imageUrl: "/assets/personnel/corporate/Mr__Bhanu_Wijayaratne.png"
  },
  {
    name: "Mr. Binesh Aravinda",
    designation: "Head of Branch Banking",
    qualifications: "MBA, BSc Business Administration Sp. (USJP),, CBA (ICASL), Moody’s Business Banking Mastery, Certification.",
    category: "Business & Operations",
    bio: "Directing branch operations, deposit mobilization, and regional distribution channels.",
    imageUrl: "/assets/personnel/corporate/Mr__Binesh_Aravinda.png"
  },
  {
    name: "Ms. Amila Belpamulla",
    designation: "Company Secretary",
    qualifications: "Attorney-at-Law, Notary Public, Commissioner of, Oaths, Company Secretary, BA (in International, Relations - UoC), MA (in International Relations-, UoC), MA (in Financial Economics- UoC)",
    category: "Governance & Control",
    bio: "Managing Board governance, share registration, and Colombo Stock Exchange disclosures.",
    imageUrl: "/assets/personnel/corporate/Ms__Amila_Belpamulla.png"
  },
  {
    name: "Mr. Lasantha Edirisuriya",
    designation: "Head of Cooperative Development",
    qualifications: "Dip. in Fin. & Bank Mgt. (IBSL), Intermediate Banking, Diploma (IBSL), Exe. Dev. (Mini MBA - CSBM), Investment, Advisor certified by CSE, Certificate in Entrepreneurship, (Harvard), National Dip. in Training & Human Talent Dev., ( SLITAD)",
    category: "Business & Operations",
    bio: "Fostering strategic partnerships with primary SANASA cooperative unions nationwide.",
    imageUrl: "/assets/personnel/corporate/Mr__Lasantha_Edirisuriya.png"
  },
  {
    name: "Mr. Sanjeeva Jayasinghe",
    designation: "Head of Finance",
    qualifications: "FCA, ACCA, BSc. Mgt. Public Admin (USJP)",
    category: "Corporate Executive",
    bio: "Leading corporate financial reporting, statutory taxation, and budget planning.",
    imageUrl: "/assets/personnel/corporate/Mr__Sanjeeva_Jayasinghe.png"
  }
];

export const CHIEF_MANAGERS: ExecutiveMember[] = [
  {
    name: "Mr. Sarath Kumara",
    designation: "Head of Administration",
    qualifications: "BSc. Mgt",
    category: "Corporate Executive",
    department: "Administration",
    imageUrl: "/assets/personnel/chief/Mr__Sarath_Kumara.png"
  },
  {
    name: "Mr Jayantha Chandrasiri",
    designation: "Chief Manager - Branch Banking Unit",
    qualifications: "B.Sc. (Mgt. & Administration - Special) (USJP)",
    category: "Business & Operations",
    department: "Branch Banking Unit",
    imageUrl: "/assets/personnel/chief/Mr_Jayantha_Chandrasiri.png"
  },
  {
    name: "Mr. Surandika Wimalarathne",
    designation: "Regional Head – North Central Region",
    qualifications: "B.A. (Hons) Business Statistics, Post Graduate, Dip. - Business Statistics, Postgraduate Dip. in, Management - (RUSL)",
    category: "Business & Operations",
    department: "North Central Region",
    imageUrl: "/assets/personnel/chief/Mr__Surandika_Wimalarathne.png"
  },
  {
    name: "Ms. Saranga Igalagamage",
    designation: "Compliance Officer",
    qualifications: "MBA (UK), BSc. (Agri Special) Hons, Dip in HRM,, MIMSL, Dip.in Compliance",
    category: "Governance & Control",
    department: "Compliance Officer",
    imageUrl: "/assets/personnel/chief/Ms__Saranga_Igalagamage.png"
  },
  {
    name: "Mr. Sarath Kumara Kariyawasam",
    designation: "Deputy Head of Credit",
    qualifications: "BA (Special), CBF(IBSL), DMF (IBSL), ADCM, (IBSL)",
    category: "Business & Operations",
    department: "Deputy  Credit",
    imageUrl: "/assets/personnel/chief/Mr__Sarath_Kumara_Kariyawasam.png"
  },
  {
    name: "Mr. Ayesh Wickramarathne",
    designation: "Chief Manager – Internal Audit",
    qualifications: "ACCA, FIB (IBSL), MSc App Fin (USJP), BSc, Applied Accounting (Oxford Brookes)",
    category: "Governance & Control",
    department: "Internal Audit",
    imageUrl: "/assets/personnel/chief/Mr__Ayesh_Wickramarathne.png"
  },
  {
    name: "Mr. Indika Udayangana",
    designation: "Head of Collection & Recoveries",
    qualifications: "MBA (UK), BBMgt (Kelaniya), AIB, Dip.in Banking, & Finance, Dip.in Micro Finance, Dip.in Public, Management, Dip.in Small & Medium Enterprises,, Dip.in Counselling",
    category: "Business & Operations",
    department: "Collection & Recoveries",
    imageUrl: "/assets/personnel/chief/Mr__Indika_Udayangana.png"
  },
  {
    name: "Mr. Sujeewa Perera",
    designation: "Chief Manager - SME",
    qualifications: "AIB, B Com (USJP), DBF (IBSL), Moody’s Business, Banking Mastery Certification",
    category: "Business & Operations",
    department: "SME",
    imageUrl: "/assets/personnel/chief/Mr__Sujeewa_Perera.png"
  },
  {
    name: "Dr. Heather Fernando",
    designation: "Chief Manager - Human Resources",
    qualifications: "Ph.D.-Management & Business (Management, & Science University, Malaysia), MBA-OUSL,, PQHRM - CIPM, T&D Evaluator-Kirkpatrick Int’l,, Chartered MCIPM, AMAPB",
    category: "Corporate Executive",
    department: "Human Resources",
    imageUrl: "/assets/personnel/chief/Dr__Heather_Fernando.png"
  },
  {
    name: "Mr. Senthilvel Thulasidhas",
    designation: "Chief Manager - IT",
    qualifications: "PgD. Technology Management, University of, Staffordshire",
    category: "Corporate Executive",
    department: "IT",
    imageUrl: "/assets/personnel/chief/Mr__Senthilvel_Thulasidhas.png"
  },
  {
    name: "Mr. Tharanga De Silva",
    designation: "Chief Manager - Business Banking",
    qualifications: "MBA-Cardiff Metropolitan University UK, Diploma, in Credit Management – IBSL",
    category: "Business & Operations",
    department: "Business Banking",
    imageUrl: "/assets/personnel/chief/Mr__Tharanga_De_Silva.png"
  },
  {
    name: "Mr. Janaka Edirisinghe",
    designation: "Chief Manager - Business Revival & Special Assets Management",
    qualifications: "AIB (SL), AICM(SL), DPS (Agri-biz Mgt.), Certificate, in Microfinance",
    category: "Business & Operations",
    department: "Business Revival & Special Assets Management",
    imageUrl: "/assets/personnel/chief/Mr__Janaka_Edirisinghe.png"
  },
  {
    name: "Mr. Ranjith Randeniya",
    designation: "Regional Head - Metro I Region",
    qualifications: "BBA,Dip.in Management Science, CBF, Moody’s, Business Banking Mastery Certification.",
    category: "Business & Operations",
    department: "Metro I Region",
    imageUrl: "/assets/personnel/chief/Mr__Ranjith_Randeniya.png"
  }
];

export const SENIOR_MANAGEMENT: ExecutiveMember[] = [
  {
    name: "Mr. A.M. Nimal Chandra",
    designation: "Senior Regional Manager-North Western Region",
    qualifications: "BA (Peradeniya)",
    category: "Business & Operations",
    department: "North Western Region",
    imageUrl: "/assets/personnel/senior/Mr__A_M__Nimal_Chandra.png"
  },
  {
    name: "Ms. Renuka Jeewanthi",
    designation: "Head of Refinance",
    qualifications: "MBA (UK), BSc. Business Administration (Special), Hons (USJP),PGD in Community Development, (UoC), Associate Member of IBSL & Life Member, APB, Certified CGAP Trainer, Micro Finance, Facilitator",
    category: "Corporate Executive",
    department: "Refinance",
    imageUrl: "/assets/personnel/senior/Ms__Renuka_Jeewanthi.png"
  },
  {
    name: "Mr. Udena Welikumbura",
    designation: "Head of Liabilities",
    qualifications: "MBA (Peradeniya), PGDM, MSLIM, BMS,, Associate APB",
    category: "Corporate Executive",
    department: "Liabilities",
    imageUrl: "/assets/personnel/senior/Mr__Udena_Welikumbura.png"
  },
  {
    name: "Mr. Chaminda Rathnayaka",
    designation: "Senior Regional Manager - Sabaragamuwa Region",
    qualifications: "B.Sc. Accountancy & Finance (SP.) Hons, Registered, Trainer & Consultant (Ministry of Public Management, Reforms), Moody’s Business Banking Mastery Certification",
    category: "Business & Operations",
    department: "Sabaragamuwa Region",
    imageUrl: "/assets/personnel/senior/Mr__Chaminda_Rathnayaka.png"
  },
  {
    name: "Ms. Nushika Edirisinghe",
    designation: "Senior Manager – Credit Administration",
    qualifications: "BSc (Colombo), Intermediate Banking Diploma, (IBSL), Certificate in Hire Purchase and Lease, Financing (IBSL), ACS",
    category: "Business & Operations",
    department: "Credit Administration",
    imageUrl: "/assets/personnel/senior/Ms__Nushika_Edirisinghe.png"
  },
  {
    name: "Mr. Dhammika Gamage",
    designation: "Senior Manager - Business Growth and Strategic Transformation",
    qualifications: "Intermediate Banking Diploma (IBSL), Ad. N. Dip in, HRM (NSBM), DSMEF (IBSL)",
    category: "Business & Operations",
    department: "Business Growth and Strategic Transformation",
    imageUrl: "/assets/personnel/senior/Mr__Dhammika_Gamage.png"
  },
  {
    name: "Mr. Aruna Sujeewa Perera",
    designation: "Senior Manager - Co-operative Relationship Development",
    qualifications: "BA.,IABF, National Certificate in Technology (Civil, Engineering)",
    category: "Corporate Executive",
    department: "operative Relationship Development",
    imageUrl: "/assets/personnel/senior/Mr__Aruna_Sujeewa_Perera.png"
  },
  {
    name: "Mr. Ajith Samantha",
    designation: "Divisional Head - Leasing Assessment & Approval",
    qualifications: "B Com (Special), AIB, DBF (IBSL), MDP (AAT)",
    category: "Business & Operations",
    department: "Leasing Assessment & Approval",
    imageUrl: "/assets/personnel/senior/Mr__Ajith_Samantha.png"
  },
  {
    name: "Mr. Pradeep Gnanasiri",
    designation: "Senior Branch Manager - Ampara",
    qualifications: "BA Geography (Special) (USJP)",
    category: "Business & Operations",
    department: "Ampara",
    imageUrl: "/assets/personnel/senior/Mr__Pradeep_Gnanasiri.png"
  },
  {
    name: "Mr. Semera Mahathanthila",
    designation: "Senior Manager – Compliance",
    qualifications: "MSc Applied Finance (USJP), PG. Dip. in Business, & Financial Administration (ICASL), BSc Applied, Sciences (Rajarata), Dip.in Compliance",
    category: "Governance & Control",
    department: "Compliance",
    imageUrl: "/assets/personnel/senior/Mr__Semera_Mahathanthila.png"
  },
  {
    name: "Mr. Piyal Senadheera",
    designation: "Senior Manager - Integrated Risk Department",
    qualifications: "MFE (Colombo), PG. Dip. (Colombo), AIB, MAAT,, CIT (SL), Dip in Finance & Bank Management, (IBSL), Dip.in SME Finance (IBSL)",
    category: "Governance & Control",
    department: "Integrated Risk Department",
    imageUrl: "/assets/personnel/senior/Mr__Piyal_Senadheera.png"
  },
  {
    name: "Ms. Denuka Priyangani",
    designation: "Divisional Head – Retail Credit Assessment & Approval",
    qualifications: "MSc, Executive Dip.in Service Management, CBF.",
    category: "Business & Operations",
    department: "Retail Credit Assessment & Approval",
    imageUrl: "/assets/personnel/senior/Ms__Denuka_Priyangani.png"
  },
  {
    name: "Ms. K. K. Rangani",
    designation: "Senior Branch Manager - Elpitiya Branch",
    qualifications: "HNDA, Intermediate Banking Diploma(IBSL)",
    category: "Business & Operations",
    department: "Elpitiya Branch",
    imageUrl: "/assets/personnel/senior/Ms__K__K__Rangani.png"
  },
  {
    name: "Mr. Sanjeewa Dissanayake",
    designation: "Senior Regional Manager - Uva Region",
    qualifications: "Dip in Credit Mgt. (SLICM), CBF, Ad.Dip. In Credit, Management, Moody’s Business Banking Mastery, Certification, Ad.Dip Credit Mgmt., AMAPB",
    category: "Business & Operations",
    department: "Uva Region",
    imageUrl: "/assets/personnel/senior/Mr__Sanjeewa_Dissanayake.png"
  },
  {
    name: "Ms. Sasikala Subhashini",
    designation: "Senior Regional Manager - Metro II Region",
    qualifications: "MScSMgt. University of Colombo, Dip., in Microfinance, Executive Dip.in Service, Management, CBF",
    category: "Business & Operations",
    department: "Metro II Region",
    imageUrl: "/assets/personnel/senior/Ms__Sasikala_Subhashini.png"
  },
  {
    name: "Mr. Mahinda Thennakoon",
    designation: "Senior Manager - Centralised Operations",
    qualifications: "IABF- IBSL",
    category: "Business & Operations",
    department: "Centralised Operations",
    imageUrl: "/assets/personnel/senior/Mr__Mahinda_Thennakoon.png"
  },
  {
    name: "Mr. Nishantha Wijesinghe",
    designation: "Senior Branch Manager - Negombo Branch",
    qualifications: "Dip.in SME(IBSL)",
    category: "Business & Operations",
    department: "Negombo Branch",
    imageUrl: "/assets/personnel/senior/Mr__Nishantha_Wijesinghe.png"
  },
  {
    name: "Mr. Priyankara Fernando",
    designation: "Divisional Head - SME Credit Assessment & Approval",
    qualifications: "Dip.in Credit Management, Dip.in SME Finance, ,Dip. in Microfinance, CBF, Moody’s Business, Banking Mastery Certification.",
    category: "Business & Operations",
    department: "SME Credit Assessment & Approval",
    imageUrl: "/assets/personnel/senior/Mr__Priyankara_Fernando.png"
  },
  {
    name: "Mr. Rajeewa Adikaram",
    designation: "Senior Manager - Information Systems Audit",
    qualifications: "Executive MSc in Information Security, Certified Information Systems Auditor (ISACA), CBF",
    category: "Governance & Control",
    department: "Information Systems Audit",
    imageUrl: "/assets/personnel/senior/Mr__Rajeewa_Adikaram.png"
  },
  {
    name: "Mr. Nishan Pallegama",
    designation: "Senior Branch Manager - 1st Colombo City Branch",
    qualifications: "Dip.in SME Finance, CBF, Certificate in Hire, Purchase & Leasing, Moody’s Business Banking, Mastery Certifications",
    category: "Business & Operations",
    department: "1st Colombo City Branch",
    imageUrl: "/assets/personnel/senior/Mr__Nishan_Pallegama.png"
  },
  {
    name: "Mr. Sasika Wickramarathne",
    designation: "Senior Manager – Digital Operations",
    qualifications: "MBS - Kelaniya, Ad.Cert. in Banking & Finance,, DBF, CBF",
    category: "Business & Operations",
    department: "Digital Operations",
    imageUrl: "/assets/personnel/senior/Mr__Sasika_Wickramarathne.png"
  },
  {
    name: "Mr. Chinthaka Jayakody",
    designation: "Senior Branch Manager - Kurunegala Branch",
    qualifications: "BA(SP) Business Statistics, CBF",
    category: "Business & Operations",
    department: "Kurunegala Branch",
    imageUrl: "/assets/personnel/senior/Mr__Chinthaka_Jayakody.png"
  },
  {
    name: "Mr. Sarath Gunathilaka Banda",
    designation: "Senior Regional Manager - Central Region",
    qualifications: "BSc.(Business Management Special),CBF, DBF,, Dip.in SME & Finance, AIB",
    category: "Business & Operations",
    department: "Central Region",
    imageUrl: "/assets/personnel/senior/Mr__Sarath_Gunathilaka_Banda.png"
  },
  {
    name: "Mr. Sadara Pandipperuma",
    designation: "Senior Manager - Credit Administration Unit - Karapitiya",
    qualifications: "MBA - Cardiff Met (UK), BBA (Accounting &, Finance),CBA (ICASL)",
    category: "Business & Operations",
    department: "Karapitiya",
    imageUrl: "/assets/personnel/senior/Mr__Sadara_Pandipperuma.png"
  },
  {
    name: "Ms. Pemila Ranojani",
    designation: "Senior Manager – Legal",
    qualifications: "LLB (UOC), Attorney at Law, Notary Public,, Commissioner for Oaths, Company Secretary",
    category: "Governance & Control",
    department: "Legal",
    imageUrl: "/assets/personnel/senior/Ms__Pemila_Ranojani.png"
  },
  {
    name: "Ms. Nilupama Madurawala",
    designation: "Senior Manager - Strategic Planning and Sustainable Banking",
    qualifications: "BSc, MFE, CBF, DBF, Certificate in HRM, Moody’s, Business Banking Mastery Certification, Dip. in, Retail Banking",
    category: "Corporate Executive",
    department: "Strategic Planning and Sustainable Banking",
    imageUrl: "/assets/personnel/senior/Ms__Nilupama_Madurawala.png"
  },
  {
    name: "Ms. Chathurika Meemanage",
    designation: "Senior Manager – Internal Audit",
    qualifications: "FCA, ACCA, BSc. Finance (Sp) - USJP, AIB,, Dip.in Information System Security Control and, Audit (DISSCA)",
    category: "Governance & Control",
    department: "Internal Audit",
    imageUrl: "/assets/personnel/senior/Ms__Chathurika_Meemanage.png"
  },
  {
    name: "Mr. Suntharalingam Keshanth",
    designation: "Senior Regional Manager - Eastern Region",
    qualifications: "AIB, PGDM (SEUSL)",
    category: "Business & Operations",
    department: "Eastern Region",
    imageUrl: "/assets/personnel/senior/Mr__Suntharalingam_Keshanth.png"
  },
  {
    name: "Ms. K.H.A. Ayesha",
    designation: "Senior Manager - EDW and Data Analytics",
    qualifications: "BSc in Computer Science (Hons) (Colombo)",
    category: "Corporate Executive",
    department: "EDW and Data Analytics",
    imageUrl: "/assets/personnel/senior/Ms__K_H_A__Ayesha.png"
  },
  {
    name: "Mr. Chaminda Roshan",
    designation: "Senior Regional Manager - Southern Region",
    qualifications: "BSc. Accountancy (sp) Hons, CBF",
    category: "Business & Operations",
    department: "Southern Region",
    imageUrl: "/assets/personnel/senior/Mr__Chaminda_Roshan.png"
  },
  {
    name: "Mr. Sampath Priyankara",
    designation: "Senior Manager - IT",
    qualifications: "BIT (Colombo), MBA (UK)",
    category: "Corporate Executive",
    department: "IT",
    imageUrl: "/assets/personnel/senior/Mr__Sampath_Priyankara.png"
  },
  {
    name: "Ms. Chathurika Peramunasinghe",
    designation: "Divisional Head - Co-operative Credit Assessment",
    qualifications: "MBA-Cardiff Metropolitan University UK,, Dip.in SME Finance (IBSL), AIB, B.Sc. Plant, Biotechnology (Sp.)",
    category: "Business & Operations",
    department: "operative Credit Assessment",
    imageUrl: "/assets/personnel/senior/Ms__Chathurika_Peramunasinghe.png"
  },
  {
    name: "Mr. Deepadarsha C. Samarathunga",
    designation: "Senior Manager - Internal Audit",
    qualifications: "MBA-Cardiff Metropolitan University UK, B.B. Mgt, (Kelaniya), AIB - SL, Dip-in Internal Audit",
    category: "Governance & Control",
    department: "Internal Audit",
    imageUrl: "/assets/personnel/senior/Mr__Deepadarsha_C__Samarathunga.png"
  },
  {
    name: "Mr. Rajesh Karunarathne",
    designation: "Senior Manager - Consumer Assets",
    qualifications: "MBA in Buckinghamshire New University (UK),, Dip.in Strategic Management and Leadership (UK),, CBF",
    category: "Corporate Executive",
    department: "Consumer Assets",
    imageUrl: "/assets/personnel/senior/Mr__Rajesh_Karunarathne.png"
  },
  {
    name: "Ms. Niketha Ranaweera",
    designation: "Senior Manager - Pawning",
    qualifications: "BA, MA (SOC.SC) (Kelaniya), IABF",
    category: "Business & Operations",
    department: "Pawning",
    imageUrl: "/assets/personnel/senior/Ms__Niketha_Ranaweera.png"
  },
  {
    name: "Mr. Ajith Herath",
    designation: "Senior Branch Manager - Matale Branch",
    qualifications: "MBA- University of Gloucestershire (UK), BSc., HRM (Special), Dip. in Strategic Management and, Leadership (UK)",
    category: "Business & Operations",
    department: "Matale Branch",
    imageUrl: "/assets/personnel/senior/Mr__Ajith_Herath.png"
  },
  {
    name: "Mr. K.G. Ashoka Kumara Katukurunda",
    designation: "Senior Branch Manager - Kegalle Branch",
    qualifications: "MBA- University of Gloucestershire (UK), B.B.Mgt, (Kelaniya), Dip. in Strategic Management and, Leadership (UK)",
    category: "Business & Operations",
    department: "Kegalle Branch",
    imageUrl: "/assets/personnel/senior/Mr__K_G__Ashoka_Kumara_Katukurunda.png"
  },
  {
    name: "Mr. Indika Lakmal",
    designation: "Senior Branch Manager - Matara Branch",
    qualifications: "PGD.in B Ad in Marketing (Ruhuna), AIB(IBSL),, Dip. in Digital Marketing (SLIMS), Dip.in M.Finance, (Sanasa Campus)",
    category: "Business & Operations",
    department: "Matara Branch",
    imageUrl: "/assets/personnel/senior/Mr__Indika_Lakmal.png"
  },
  {
    name: "Mr. Lalith Kumara",
    designation: "Head of Post Disbursement & Credit Review",
    qualifications: "DABF(IBSL), CBF(IBSL), Dip in SME(IBSL),, AIB(IBSL)",
    category: "Business & Operations",
    department: "Post Disbursement & Credit Review",
    imageUrl: "/assets/personnel/senior/Mr__Lalith_Kumara.png"
  },
  {
    name: "Mr. Ruwan Dharmasena",
    designation: "Senior Manager - Retail Remedial Task Force",
    qualifications: "BBA (Mkt) sp, MBA",
    category: "Business & Operations",
    department: "Retail Remedial Task Force",
    imageUrl: "/assets/personnel/senior/Mr__Ruwan_Dharmasena.png"
  },
  {
    name: "Mr. Gayan Abeysiriwardana",
    designation: "Senior Manager - Collections, Administration & Analytics",
    qualifications: "MBA (USJP), BSc. Agri (UOP), PGDM-SLIM",
    category: "Business & Operations",
    department: "Collections, Administration & Analytics",
    imageUrl: "/assets/personnel/senior/Mr__Gayan_Abeysiriwardana.png"
  },
  {
    name: "Mr. Anil Wanigasiri",
    designation: "Senior Branch Manager - Battaramulla Branch",
    qualifications: "MBA (MoT), PGD in Bank Management, Advanced, Economics & Computer Science (Sp), Member of, GARP",
    category: "Business & Operations",
    department: "Battaramulla Branch",
    imageUrl: "/assets/personnel/senior/Mr__Anil_Wanigasiri.png"
  },
  {
    name: "Ms. Suganya Kandeeban",
    designation: "Senior Manager - Treasury",
    qualifications: "MSC (UK) International Banking & Finance, MBA,, Dip in Treasury & Risk Management, Certificate, in Treasury & Foreign Exchange Operations, CBF, (IBSL)",
    category: "Corporate Executive",
    department: "Treasury",
    imageUrl: "/assets/personnel/senior/Ms__Suganya_Kandeeban.png"
  },
  {
    name: "Mr. Udana Weerasinghe",
    designation: "Head of Credit Risk",
    qualifications: "IAB (UK), PGDip (Busi Admin) Heriot-Watt University, MBA - University of Sunderland",
    category: "Governance & Control",
    department: "Credit Risk",
    imageUrl: "/assets/personnel/senior/Mr__Udana_Weerasinghe.png"
  },
  {
    name: "Mr. N.A.R.S. Kumara",
    designation: "Senior Manager - Branch Operations",
    qualifications: "B.B.Mgt (Accountancy) Special - University of Kelaniya, CBA (ICASL)",
    category: "Business & Operations",
    department: "Branch Operations",
    imageUrl: "/assets/personnel/senior/Mr__N_A_R_S__Kumara.png"
  },
  {
    name: "Mr. Lahiru Ekanayake",
    designation: "Senior Manager - Leasing",
    qualifications: "MBA (Business Administration) | MSc (Digital, Marketing) | CIM (UK) | PGDip Strategic, Management & Leadership | Diploma in, Microfinance | Diploma in FINANCE LEASING, (IBSL)",
    category: "Business & Operations",
    department: "Leasing",
    imageUrl: "/assets/personnel/senior/Mr__Lahiru_Ekanayake.png"
  },
  {
    name: "Mr. Gayan Fernando",
    designation: "Senior Manager – Marketing & Corporate Communication",
    qualifications: "MBA.Mkt (UK), PGDM (UOK), Executive Member, (DMASL)",
    category: "Corporate Executive",
    department: "Marketing & Corporate Communication",
    imageUrl: "/assets/personnel/senior/Mr__Gayan_Fernando.png"
  },
  {
    name: "Mr. Prasanna Samarakoon",
    designation: "Senior Manager - Core Banking Operations",
    qualifications: "B.Sc. IT(Hons), CBF, APB, Dip.in National, Certificate of Accounting Technicians",
    category: "Business & Operations",
    department: "Core Banking Operations",
    imageUrl: "/assets/personnel/senior/Mr__Prasanna_Samarakoon.png"
  },
  {
    name: "Mr. Chaminda Jayasena",
    designation: "Senior Manager - Finance",
    qualifications: "ACA ,ACCA , BSc  Finance (Special)  USJP",
    category: "Corporate Executive",
    department: "Finance",
    imageUrl: "/assets/personnel/senior/Mr__Chamida_Jayasena.png"
  },
  {
    name: "Ms. Pubudini Gunawardena",
    designation: "Senior Manager - Market Risk",
    qualifications: "DBF - IBSL,Certificate in Treasury & Foreign, Exchange Operations, Licentiate I - ICASL",
    category: "Governance & Control",
    department: "Market Risk",
    imageUrl: "/assets/personnel/senior/Ms__Pubudini_Gunawardena.png"
  }
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
