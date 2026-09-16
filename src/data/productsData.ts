/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Products & Services Directory
 * Source: Official Published Annual Report 2025 (Pages 15-18)
 */

export interface ProductItem {
  id: string;
  category: string;
  name: string;
  tagline: string;
  targetMarket: string;
  features: string[];
  benefits: string[];
  digitalAccess?: string;
  logo: string;
  sourcePage: number;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: "all", name: "All Products", icon: "Layers", count: 26, description: "Complete suite of personal, cooperative, and enterprise banking solutions." },
  { id: "savings", name: "Savings Products", icon: "PiggyBank", count: 8, description: "Structured savings accounts tailored for children, youth, women, and businesses." },
  { id: "fixed-deposits", name: "Fixed Deposits", icon: "Vault", count: 2, description: "Guaranteed high returns with flexible tenures and cash-back borrowing lines." },
  { id: "loans", name: "Loan Products", icon: "Home", count: 6, description: "Housing, personal, microfinance, and property financing with transparent rates." },
  { id: "leasing", name: "Leasing", icon: "Car", count: 1, description: "Flexible leasing solutions for personal, commercial, and agricultural machinery." },
  { id: "pawning", name: "Pawning & Gold Loans", icon: "Coins", count: 1, description: "Instant cash liquidity against gold with maximum security and discretion." },
  { id: "sme", name: "SME Products", icon: "Briefcase", count: 2, description: "Tailored working capital, machinery financing, and term loans for growing enterprises." },
  { id: "vcf", name: "Value Chain Financing", icon: "Share2", count: 1, description: "Integrated financing for agricultural and industrial supply chain networks." },
  { id: "cooperative", name: "Cooperative Products", icon: "Users", count: 7, description: "Custom credit and liquidity facilities engineered exclusively for SANASA societies." },
  { id: "bancassurance", name: "Bancassurance", icon: "Shield", count: 1, description: "Comprehensive life and asset protection in partnership with premier insurers." },
  { id: "refinance", name: "Refinance Loans", icon: "RefreshCw", count: 1, description: "Low-cost concessionary funding partnered with ADB, CBSL, and government ministries." }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // 1. Savings Products (Page 15)
  {
    id: "lakdaru",
    category: "savings",
    name: "Lakdaru Children's Savings",
    tagline: "Investing in the Foundation of Tomorrow",
    targetMarket: "Children and minors under 18 years of age",
    features: [
      "Tiered higher interest rate structure compared to regular savings accounts",
      "Free hospitalization insurance cover including government hospitals",
      "Exciting gift milestones based on savings balance slabs",
      "Free standing orders from parents' accounts"
    ],
    benefits: [
      "Secures higher education and vocational funds upon turning 18",
      "Health safety net during early childhood",
      "Inculcates early financial literacy"
    ],
    digitalAccess: "View balances and deposit via SDB UPay App",
    logo: "/assets/products/logo_lakdaru.png",
    sourcePage: 15
  },
  {
    id: "uththamavi",
    category: "savings",
    name: "Uththamavi Women's Savings",
    tagline: "Empowering Sri Lanka's Women Leaders & Entrepreneurs",
    targetMarket: "Female individuals and women entrepreneurs",
    features: [
      "Preferred premium interest rate for women savers",
      "Access to collateral-free micro enterprise credit facilities",
      "Special discounts at selected merchant outlets nationwide",
      "Integrated capacity building and financial literacy workshops"
    ],
    benefits: [
      "Promotes financial independence and economic resilience",
      "Connects savers to Women Mean business forums and cooperative networks"
    ],
    digitalAccess: "24/7 account management on UPay mobile wallet",
    logo: "/assets/products/logo_uththamavi.png",
    sourcePage: 15
  },
  {
    id: "dayada",
    category: "savings",
    name: "Dayada Investment Certificate",
    tagline: "Guaranteed Lump-Sum Growth for Young Adults",
    targetMarket: "Parents and guardians planning long-term investments for minors",
    features: [
      "Lump sum deposit ensuring guaranteed returns immune to interest rate fluctuations",
      "Certificate matures and encashes precisely upon child attaining 18 years",
      "Loan facility of up to 90% against certificate value"
    ],
    benefits: [
      "Protection against macroeconomic inflation and yield compression",
      "Structured milestone endowment for higher education or enterprise"
    ],
    digitalAccess: "Certificate status visible via Business Internet Banking and UPay",
    logo: "/assets/products/logo_dayada.png",
    sourcePage: 15
  },
  {
    id: "jawaya",
    category: "savings",
    name: "Jawaya Youth Savings",
    tagline: "Fueling the Ambitions of Sri Lanka's Next Generation",
    targetMarket: "Young adults, university students, and first-time job seekers (18-30)",
    features: [
      "Competitive interest rates with lower opening balance requirements",
      "Debit card with zero annual fee for the first year",
      "Immediate digital connectivity to online merchant portals and LankaPay QR"
    ],
    benefits: [
      "Seamless lifestyle banking for digital natives",
      "Pathway to starter credit cards and personal education loans"
    ],
    digitalAccess: "Full mobile onboarding via UPay",
    logo: "/assets/products/logo_youth.png",
    sourcePage: 15
  },
  {
    id: "top-saver",
    category: "savings",
    name: "Top Saver Account",
    tagline: "Daily Interest Accrual with Full Liquidity",
    targetMarket: "Individuals seeking maximum interest yield on liquid funds",
    features: [
      "Interest calculated on daily day-end balances and credited monthly",
      "No penalty or restrictions on withdrawal frequency",
      "Free SMS banking alerts on all transactions"
    ],
    benefits: [
      "Maximises returns on idle operating capital without locking funds into fixed tenures"
    ],
    digitalAccess: "UPay and LankaPay ATM connectivity",
    logo: "/assets/products/logo_top_saver.png",
    sourcePage: 15
  },
  {
    id: "business-saver",
    category: "savings",
    name: "Business Saver",
    tagline: "Optimised Cash Management for Active Merchants",
    targetMarket: "Small business owners, sole proprietors, and merchants",
    features: [
      "Tiered corporate interest yield on operational balances",
      "Seamless linkage to bulk payment gateways and salary disbursement",
      "Special discounts on cheque clearance and RTGS transfers"
    ],
    benefits: [
      "Eliminates idle cash drag while maintaining uninterrupted working capital flow"
    ],
    digitalAccess: "Business Internet Banking (BIB) with CEFTS and SLIPS integration",
    logo: "/assets/products/logo_business_saver.png",
    sourcePage: 15
  },
  {
    id: "top-saver-plus",
    category: "savings",
    name: "Top Saver Plus",
    tagline: "Premium High-Yield Tiered Liquidity",
    targetMarket: "High-net-worth individuals and corporate treasuries",
    features: [
      "Substantial interest rate advantage for high balances",
      "Dedicated relationship manager support",
      "Personalised cheque books and priority branch counters"
    ],
    benefits: [
      "Treasury-grade liquidity management with instant fund transfer capabilities"
    ],
    digitalAccess: "Integrated BIB and SWIFT transfer routing",
    logo: "/assets/products/logo_top_saver_plus.png",
    sourcePage: 15
  },
  {
    id: "investment-savings",
    category: "savings",
    name: "Investment Savings Account",
    tagline: "Contracted Milestone Accumulation",
    targetMarket: "Cooperative societies, micro-enterprises, and disciplined individuals",
    features: [
      "Monthly contracted savings deposits toward targeted maturity sums",
      "Guaranteed milestone yields with preferential compounding",
      "Credit facility availability against accumulated value"
    ],
    benefits: [
      "Enables structured asset creation for future capital expenditure"
    ],
    digitalAccess: "Automated standing order execution via UPay",
    logo: "/assets/products/logo_investment_savings.png",
    sourcePage: 15
  },

  // 2. Fixed Deposits (Page 15)
  {
    id: "sdb-fixed",
    category: "fixed-deposits",
    name: "SDB Fixed Deposits",
    tagline: "Secure, Guaranteed Wealth Preservation",
    targetMarket: "Individual and corporate investors",
    features: [
      "Tenures ranging from 1 month to 5 years with fixed guaranteed returns",
      "Choice of monthly interest payout or cumulative payout upon maturity",
      "Instant loan or cash-back facility of up to 90% of deposit value"
    ],
    benefits: [
      "100% capital security backed by CBSL regulated licensed bank status",
      "Flexible liquidity without breaking the underlying deposit"
    ],
    digitalAccess: "E-FD placement via Business Internet Banking and branches",
    logo: "/assets/products/logo_fixed_deposit.png",
    sourcePage: 15
  },
  {
    id: "ayushya-fd",
    category: "fixed-deposits",
    name: "Ayushya Senior Citizens Fixed Deposit",
    tagline: "Honouring a Lifetime of Service with Highest Yields",
    targetMarket: "Senior citizens aged 55 years and above",
    features: [
      "Preferential bonus interest rate over standard fixed deposit rates",
      "Monthly interest remittance directly to linked savings accounts for retirement expenses",
      "Up to 90% instant cash-back borrowing facility"
    ],
    benefits: [
      "Reliable, predictable monthly income supporting post-retirement financial dignity"
    ],
    digitalAccess: "Monthly statements delivered via SMS and digital channels",
    logo: "/assets/products/logo_ayushya.png",
    sourcePage: 15
  },

  // 3. Loan Products (Pages 16-17)
  {
    id: "soduru-sewana",
    category: "loans",
    name: "Soduru Sewana Housing Loan",
    tagline: "Building Homes, Crafting Family Sanctuaries",
    targetMarket: "Individuals purchasing, constructing, or renovating residential properties",
    features: [
      "Extended repayment periods up to 25 years",
      "Competitive fixed or floating interest rates",
      "Fast-track processing with preliminary approval within 3 working days",
      "Top-up facility available after partial repayment"
    ],
    benefits: [
      "Affordable monthly instalments tailored to household disposable income",
      "Comprehensive advisory on title clearance and legal valuations"
    ],
    digitalAccess: "Online EMI calculator and application tracking",
    logo: "/assets/products/logo_soduru_sewana.png",
    sourcePage: 16
  },
  {
    id: "property-loan",
    category: "loans",
    name: "All Purpose Property Loan",
    tagline: "Unlocking Property Value for Holistic Aspirations",
    targetMarket: "Property owners requiring liquidity for construction, solar, or education",
    features: [
      "Financing for property purchase, residential construction, and consumption needs",
      "Dedicated funding lines for solar power systems and electric bicycles",
      "Statutory payments, tax settlements, and personal education financing",
      "Repayment tenor up to 5 years with competitive interest rates"
    ],
    benefits: [
      "Maximises equity value from real estate assets without distress sales"
    ],
    digitalAccess: "Apply online and track loan servicing via UPay",
    logo: "/assets/products/logo_property_loan.png",
    sourcePage: 17
  },
  {
    id: "merchant-quick-loan",
    category: "loans",
    name: "Merchant Quick Loan",
    tagline: "Rapid Working Capital for Retailers & POS Merchants",
    targetMarket: "SDB POS and LankaQR merchants needing immediate inventory capital",
    features: [
      "Cash flow based short-term working capital loan at a fixed interest rate",
      "Zero guarantors required based on merchant transaction throughput",
      "Simple, convenient application process with instant sanctioning",
      "Facility requests initiated directly through the SDB UPay app"
    ],
    benefits: [
      "Keeps store shelves stocked and captures bulk cash discounts"
    ],
    digitalAccess: "Direct application and disbursement through UPay app",
    logo: "/assets/products/logo_merchant_quick_loan.png",
    sourcePage: 17
  },
  {
    id: "gami-diriya",
    category: "loans",
    name: "Gami Diriya Microfinance Loan",
    tagline: "Nurturing Grassroots Micro-Enterprise",
    targetMarket: "Rural self-employed individuals, home-based producers, and cottage industries",
    features: [
      "Collateral-free group and individual micro credit lines",
      "Repayment schedules tailored to regional seasonal cash flows",
      "Integrated business advisory and basic accounting literacy"
    ],
    benefits: [
      "Drives poverty alleviation and regional rural wealth generation"
    ],
    digitalAccess: "Doorstep field officer tablet disbursement",
    logo: "/assets/products/logo_gami_diriya.png",
    sourcePage: 16
  },
  {
    id: "swashakthi",
    category: "loans",
    name: "Swashakthi Self-Employment Loan",
    tagline: "Empowering Independent Artisans & Innovators",
    targetMarket: "Vocational graduates, craftsmen, and small service providers",
    features: [
      "Concessionary interest rates with flexible grace periods",
      "Machinery, tooling, and raw material purchase financing",
      "Fast documentation with cooperative society endorsement"
    ],
    benefits: [
      "Transforms skilled youth into successful enterprise owners"
    ],
    digitalAccess: "Track repayment and balance via UPay app",
    logo: "/assets/products/logo_swashakthi.png",
    sourcePage: 16
  },
  {
    id: "ithuru-sewana",
    category: "loans",
    name: "Ithuru Sewana Shelter Loan",
    tagline: "Safe and Resilient Living for Low-Income Families",
    targetMarket: "Cooperative members improving home sanitation, roofing, and water access",
    features: [
      "Micro-housing credit tailored for low-income rural households",
      "Flexible repayment terms up to 7 years",
      "Minimal documentation requirements"
    ],
    benefits: [
      "Improves basic family living conditions and sanitary security"
    ],
    digitalAccess: "Repayable at any SANASA society or SDB branch",
    logo: "/assets/products/logo_ithuru_sewana.png",
    sourcePage: 16
  },

  // 4. Leasing (Page 16-17)
  {
    id: "sdb-leasing",
    category: "leasing",
    name: "SDB Auto & Machinery Leasing",
    tagline: "Empowering Mobility and Commercial Logistics",
    targetMarket: "Individual vehicle owners, commercial transport operators, and MSMEs",
    features: [
      "Competitive rentals with repayment tenures up to 5 years",
      "Financing for brand-new, reconditioned, and registered vehicles",
      "Customised seasonal rental structures for agricultural harvesters and tractors",
      "Attractive discounts on premature lease settlements"
    ],
    benefits: [
      "Expands operational fleet without immobilising liquid working capital"
    ],
    digitalAccess: "Digital lease quotation and payment via UPay",
    logo: "/assets/products/logo_sdb_leasing.png",
    sourcePage: 16
  },

  // 5. Pawning & Gold Loans (Page 16)
  {
    id: "ranmini-gold",
    category: "pawning",
    name: "Ranmini Gold Loans & Pawning",
    tagline: "Immediate Emergency Liquidity with Absolute Confidentiality",
    targetMarket: "Individuals, farmers, and micro-traders needing immediate cash",
    features: [
      "Highest advance values per gold sovereign (8g) 18K/24K in the industry",
      "Flexible redemption tenures: 1, 3, 6, or 12 months with part-payment options",
      "Latest computerized karat testing equipment ensuring exact valuation accuracy",
      "Safe custody in fire-proof vaulting facilities with absolute privacy"
    ],
    benefits: [
      "Provides crucial seasonal agricultural liquidity before harvest yields materialize"
    ],
    digitalAccess: "Interest payments can be renewed digitally via UPay without visiting branches",
    logo: "/assets/products/logo_ranmini.png",
    sourcePage: 16
  },

  // 6. SME Products (Pages 16-17)
  {
    id: "sme-plus",
    category: "sme",
    name: "SME Plus",
    tagline: "Fueling Mid-Tier Business Expansion & Innovation",
    targetMarket: "Registered MSMEs in manufacturing, agriculture, tourism, and services",
    features: [
      "Reasonable rate of interest with a suitable grace period",
      "Loan values tailored to business requirements with flexible repayment schedules",
      "Business guidance and consultancy services",
      "Promoting Environmental, Social, and Governance (ESG) standards in financing"
    ],
    benefits: [
      "Direct technical advisory on enterprise capacity building, bookkeeping, and marketing"
    ],
    digitalAccess: "Business Internet Banking (BIB) multi-user authorization matrix",
    logo: "/assets/products/logo_sme_plus.png",
    sourcePage: 16
  },
  {
    id: "business-plus",
    category: "sme",
    name: "Business Plus",
    tagline: "Integrated Merchant Term Financing",
    targetMarket: "Regional retailers, wholesalers, and supply chain aggregators",
    features: [
      "Financial assistance for pensioner entrepreneurs and agribusiness operators",
      "Easy access to attractive interest rates and benefits for enterprise improvements",
      "Targeted to sectors of women entrepreneurs, Agri exporters, services, and light industry"
    ],
    benefits: [
      "Enables proactive bulk purchasing and supplier cash discount capture"
    ],
    digitalAccess: "Integrated LankaPay QR settlement reporting",
    logo: "/assets/products/logo_business_plus.png",
    sourcePage: 16
  },

  // 7. Value Chain Financing (Page 17)
  {
    id: "vcf-agri",
    category: "vcf",
    name: "Agri-Food Value Chain Financing (VCF)",
    tagline: "Connecting Smallholders to Institutional Agri-Corridors",
    targetMarket: "Paddy, tea, rubber, dairy, coconut, and spice farmers linked to anchor buyers",
    features: [
      "In line with Bank's forward strategy developed with Rabo Partnerships Netherlands",
      "Tripartite financing agreements between farmer smallholders, SDB Bank, and corporate anchor buyers",
      "Automated loan repayment deductions upon harvest delivery to corporate processors",
      "Technical guidance supported by SDB's 45-member Agri Task Force and Advisory Panel"
    ],
    benefits: [
      "Guarantees fair price realization for farmers while securing raw material supply for industries"
    ],
    digitalAccess: "Digital disbursement and supply voucher verification",
    logo: "/assets/products/logo_vcf.png",
    sourcePage: 17
  },

  // 8. Cooperative Products (Pages 17-18)
  {
    id: "sahanya",
    category: "cooperative",
    name: "Sahanya Cooperative Deposit & Loan Facility",
    tagline: "Specialised Yields & Cash-Back Facilities for Societies",
    targetMarket: "Primary SANASA cooperative societies and affiliated institutions",
    features: [
      "Special preferential interest rates for cooperative societies",
      "Bonus Interest of 40% to 50% of cumulative interest paid upon terms",
      "Up to 60% cash-back loan facilities against deposit balances"
    ],
    benefits: [
      "Maximises institutional reserve returns while preserving emergency operational liquidity"
    ],
    digitalAccess: "Electronic cooperative treasury reporting",
    logo: "/assets/products/logo_sahanya.png",
    sourcePage: 18
  },
  {
    id: "samupa-saviya",
    category: "cooperative",
    name: "Samupa Saviya",
    tagline: "Comprehensive Support for the Co-operative Community",
    targetMarket: "SANASA cooperative societies and their executive staff/employees",
    features: [
      "Additional 0.25% preferential interest for fixed deposits",
      "Coverage for the entire co-operative segment including society employees",
      "Customized micro loan and welfare credit packages"
    ],
    benefits: [
      "Strengthens institutional loyalty and employee financial well-being"
    ],
    digitalAccess: "Direct branch portal access",
    logo: "/assets/products/logo_samupa_saviya.png",
    sourcePage: 18
  },
  {
    id: "project-loans",
    category: "cooperative",
    name: "Cooperative Project Loans",
    tagline: "Financing Strategic Infrastructure & New Commercial Projects",
    targetMarket: "Registered cooperative societies undertaking commercial investments",
    features: [
      "Finance startups of new projects and development of existing projects carried by societies",
      "Repayment periods extending up to 10 years in monthly instalments",
      "Generous 6-month grace period for construction and installation",
      "Loan limits scaled to society capacity and total project cost"
    ],
    benefits: [
      "Facilitates post-harvest storage, processing mills, and retail cooperative chains"
    ],
    digitalAccess: "Dedicated corporate relationship manager assistance",
    logo: "/assets/products/logo_project_loans.png",
    sourcePage: 18
  },
  {
    id: "relending-loans",
    category: "cooperative",
    name: "Cooperative Relending Loans",
    tagline: "Bulk Liquidity Injection for Member On-Lending",
    targetMarket: "Primary SANASA societies re-lending to grassroots rural members",
    features: [
      "Bulk low-cost capital for societies to re-lend for income generation & consumption",
      "Flexible repayments: monthly instalments or bullet repayments tailored to seasonal crops",
      "Loan limits aligned with audited financial strength and capital adequacy of the society"
    ],
    benefits: [
      "Deepens last-mile credit reach to unbanked rural villagers and farmers"
    ],
    digitalAccess: "CEFTS wholesale electronic disbursement",
    logo: "/assets/products/logo_relending_loans.png",
    sourcePage: 18
  },
  {
    id: "cccl",
    category: "cooperative",
    name: "Cooperative Cash Collateral Loan (CCCL)",
    tagline: "Instant Working Capital Against Society Reserves",
    targetMarket: "SANASA societies holding fixed deposit reserves with SDB Bank",
    features: [
      "Flexible financing with Loan-to-Value (LTV) of up to 100% against maturity-interest deposits",
      "Up to 80% LTV against monthly-interest paying fixed deposits",
      "Streamlined, paperwork-free application utilizing existing fixed deposits as primary collateral"
    ],
    benefits: [
      "Immediate emergency cash release without prematurely encashing fixed investments"
    ],
    digitalAccess: "Same-day clearance and electronic fund transfer",
    logo: "/assets/products/logo_cccl.png",
    sourcePage: 18
  },
  {
    id: "coop-ngo-savings",
    category: "cooperative",
    name: "COOP / NGO Savings",
    tagline: "Dedicated Liquidity Accounts for Non-Profits & Cooperatives",
    targetMarket: "Multi-Purpose Co-operatives (MPCS), NGOs, and community development foundations",
    features: [
      "Savings account tailored specifically for Multi-Purpose Co-operatives and NGOs",
      "Loan facilities available against savings balances up to 80% of deposit for one-year renewals",
      "Preferential clearing charges on bulk community dividend payments"
    ],
    benefits: [
      "Provides transparent fiduciary accounting and audited interest certificates"
    ],
    digitalAccess: "Business Internet Banking multi-tier authorization",
    logo: "/assets/products/logo_coop_ngo_savings.png",
    sourcePage: 17
  },
  {
    id: "coop-saver",
    category: "cooperative",
    name: "Coop Saver",
    tagline: "High-Yield Institutional Cash Pooling",
    targetMarket: "Cooperative unions and district federations",
    features: [
      "Highest interest rate for savings in the institutional cooperative segment",
      "Tailored for day-to-day liquidity reserves and operational expenses",
      "Digital solution for fund transfers and automated payroll payments"
    ],
    benefits: [
      "Optimises daily operating float with maximum yield accrual"
    ],
    digitalAccess: "CEFTS, SLIPS, and UPay connectivity",
    logo: "/assets/products/logo_coop_saver.png",
    sourcePage: 17
  },

  // 9. Bancassurance (Page 18)
  {
    id: "bancassurance",
    category: "bancassurance",
    name: "SDB Bancassurance Solutions",
    tagline: "Holistic Family and Business Protection",
    targetMarket: "All retail, loan, leasing, and corporate customers",
    features: [
      "Delivery of comprehensive life and asset insurance protection policies",
      "Credit life protection covering all loan, microfinance, and leasing liabilities",
      "Tailored retirement, critical illness, and child education endowment packages",
      "Partnership with top-tier Sri Lankan life and general insurance underwriters"
    ],
    benefits: [
      "Protects families from inheriting debt obligations during unexpected hardships"
    ],
    digitalAccess: "Automated premium deductions from SDB savings accounts",
    logo: "/assets/products/logo_bancassurance.png",
    sourcePage: 18
  },

  // 10. Refinance Loans (Page 18)
  {
    id: "refinance-loans",
    category: "refinance",
    name: "National Development Refinance Schemes",
    tagline: "Low-Cost Concessionary Capital for National Priorities",
    targetMarket: "Export SMEs, green energy investors, and tea/agri smallholders",
    features: [
      "Providing low-cost loans for income-generating projects and national priorities",
      "Financing working capital requirements to strengthen viable businesses",
      "Attractive concessionary interest rates with grace periods and flexible repayment periods",
      "Comprehensive financial literacy and capacity development of beneficiaries",
      "Close cooperation and collaboration with ADB, Central Bank of Sri Lanka, and Ministry of Finance"
    ],
    benefits: [
      "Lowest cost of capital in Sri Lanka supporting sustainable and climate-resilient enterprise"
    ],
    digitalAccess: "Direct statutory reporting and expedited document verification",
    logo: "/assets/products/logo_refinance.png",
    sourcePage: 18
  }
];
