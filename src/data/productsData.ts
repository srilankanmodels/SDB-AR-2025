/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Products & Services Directory
 * Source: Official Published Annual Report 2025 (Pages 15-19)
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
  { id: "all", name: "All Products", icon: "Layers", count: 18, description: "Complete suite of personal, cooperative, and enterprise banking solutions." },
  { id: "savings", name: "Savings Products", icon: "PiggyBank", count: 7, description: "Structured savings accounts tailored for children, youth, women, and businesses." },
  { id: "fixed-deposits", name: "Fixed Deposits", icon: "Vault", count: 2, description: "Guaranteed high returns with flexible tenures and cash-back borrowing lines." },
  { id: "loans", name: "Loan Products", icon: "Home", count: 3, description: "Housing, personal, and pension-backed financing with transparent rates." },
  { id: "leasing", name: "Leasing", icon: "Car", count: 1, description: "Flexible leasing solutions for personal, commercial, and agricultural machinery." },
  { id: "pawning", name: "Pawning & Gold Loans", icon: "Coins", count: 2, description: "Instant cash liquidity against gold with maximum security and discretion." },
  { id: "sme", name: "SME Products", icon: "Briefcase", count: 2, description: "Tailored working capital, machinery financing, and term loans for growing enterprises." },
  { id: "business", name: "Business Banking", icon: "Building2", count: 1, description: "Comprehensive corporate liquidity, merchant POS, and cash management." },
  { id: "vcf", name: "Value Chain Financing", icon: "Share2", count: 1, description: "Integrated financing for agricultural and industrial supply chain networks." },
  { id: "cooperative", name: "Cooperative Products", icon: "Users", count: 3, description: "Custom credit and liquidity facilities engineered exclusively for SANASA societies." },
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
      "Exciting gift milestones based on savings balances",
      "Free standing orders from parents' accounts"
    ],
    benefits: [
      "Secures higher education and vocational funds upon turning 18",
      "Health safety net during early childhood",
      "Inculcates early financial literacy"
    ],
    digitalAccess: "View balances and deposit via SDB UPay App",
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
    digitalAccess: "E-FD placement via Business Internet Banking",
    sourcePage: 15
  },
  {
    id: "upahara",
    category: "fixed-deposits",
    name: "Upahara Senior Citizens FD",
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
    sourcePage: 15
  },

  // 3. Loan Products (Page 16)
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
    sourcePage: 16
  },
  {
    id: "personal-loan",
    category: "loans",
    name: "SDB Personal Loan",
    tagline: "Unlocking Aspirations with Swift, Uncomplicated Credit",
    targetMarket: "Salaried employees and established professionals",
    features: [
      "Unsecured facilities up to LKR 5 Mn depending on income verification",
      "Fast turnaround time within 48 to 72 hours",
      "Flexible repayment tenures up to 7 years"
    ],
    benefits: [
      "Covers educational expenses, healthcare emergencies, and personal lifestyle needs"
    ],
    digitalAccess: "Direct disbursement to SDB savings account with UPay access",
    sourcePage: 16
  },
  {
    id: "uththamachara",
    category: "loans",
    name: "Uththamachara Government & Defense Pensioner Loan",
    tagline: "Dignified Financial Freedom for Dedicated Public Servants",
    targetMarket: "Retired government employees, CEB pensioners, and tri-forces/police veterans",
    features: [
      "Loans up to LKR 5 Mn without requiring external personal guarantors",
      "Repayment periods extending up to 10 years and up to 75 years of age",
      "Comprehensive loan protection insurance with lowest market charges",
      "Direct facilitation of SWIFT salary/pension remittance transfers"
    ],
    benefits: [
      "No guarantor burden for elderly citizens; guarantees prompt family emergency funds"
    ],
    digitalAccess: "Automated monthly deduction from pension remittance",
    sourcePage: 16
  },

  // 4. Leasing (Page 17)
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
      "Hassle-free documentation and doorstep service"
    ],
    benefits: [
      "Expands operational fleet without immobilising liquid working capital"
    ],
    digitalAccess: "Digital lease quotation and payment via UPay",
    sourcePage: 17
  },

  // 5. Pawning & Gold Loans (Page 16)
  {
    id: "gold-loan",
    category: "pawning",
    name: "Ranmini Gold Loans & Pawning",
    tagline: "Immediate Emergency Liquidity with Absolute Confidentiality",
    targetMarket: "Individuals, farmers, and micro-traders needing immediate cash",
    features: [
      "Highest advance values per gold sovereign (8g) 18K/24K in the industry",
      "Flexible redemption tenures: 1, 3, 6, or 12 months with part-payment options",
      "Latest computerized karat testing equipment ensuring exact valuation accuracy",
      "Safe custody in fire-proof vaulting facilities"
    ],
    benefits: [
      "Provides crucial seasonal agricultural liquidity before harvest yields materialize"
    ],
    digitalAccess: "Interest payments can be renewed digitally via UPay without visiting branches",
    sourcePage: 16
  },

  // 6. SME Products (Page 16-17)
  {
    id: "sme-plus",
    category: "sme",
    name: "SME Plus",
    tagline: "Fueling Mid-Tier Business Expansion & Innovation",
    targetMarket: "Registered MSMEs in manufacturing, agriculture, tourism, and services",
    features: [
      "Term loans and revolving overdraft limits up to LKR 100 Mn",
      "Attractive concessionary interest rates with up to 12-month grace periods",
      "Structured cash-flow based underwriting rather than collateral-only assessment"
    ],
    benefits: [
      "Direct technical advisory on enterprise capacity building, bookkeeping, and marketing"
    ],
    digitalAccess: "Business Internet Banking (BIB) multi-user authorization matrix",
    sourcePage: 16
  },
  {
    id: "business-plus",
    category: "sme",
    name: "Business Plus",
    tagline: "Integrated Merchant Term Financing",
    targetMarket: "Regional retailers, wholesalers, and supply chain aggregators",
    features: [
      "Fast credit sanctioning against trade receivables and merchant turnover",
      "Customised tenor aligned with seasonal business inventory cycles"
    ],
    benefits: [
      "Enables proactive bulk purchasing and supplier cash discount capture"
    ],
    digitalAccess: "Integrated LankaPay QR settlement reporting",
    sourcePage: 17
  },

  // 7. Value Chain Financing (Page 18)
  {
    id: "vcf-agri",
    category: "vcf",
    name: "Agri-Food Value Chain Financing (VCF)",
    tagline: "Connecting Smallholders to Institutional Agri-Corridors",
    targetMarket: "Paddy, tea, rubber, dairy, coconut, and spice farmers linked to anchor buyers",
    features: [
      "Tripartite financing agreements between farmer smallholders, SDB Bank, and corporate anchor buyers",
      "Automated loan repayment deductions upon harvest delivery to processors",
      "Technical guidance supported by SDB's 45-member Agri Task Force and Rabo Partnerships"
    ],
    benefits: [
      "Guarantees fair price realization for farmers while securing raw material supply for industries"
    ],
    digitalAccess: "Digital disbursement and supply voucher verification",
    sourcePage: 18
  },

  // 8. Cooperative Products (Page 18-19)
  {
    id: "coop-credit",
    category: "cooperative",
    name: "SANASA Cooperative Liquidity & Re-lending Facilities",
    tagline: "Capitalising the Grassroots Movement",
    targetMarket: "Primary SANASA Societies, MPCS, and district cooperative unions",
    features: [
      "Bulk concessionary re-lending credit lines for societies to on-lend to members",
      "Cooperative Cash Collateral Loans (CCCL) offering up to 100% LTV against deposits",
      "Specialised software and digital accounting integration for societies"
    ],
    benefits: [
      "Strengthens grassroots cooperative balance sheets and deepens rural financial inclusion"
    ],
    digitalAccess: "Interbank cooperative electronic clearing and CEFTS transfers",
    sourcePage: 18
  },

  // 9. Bancassurance & Refinance (Page 19)
  {
    id: "bancassurance",
    category: "bancassurance",
    name: "SDB Bancassurance Solutions",
    tagline: "Holistic Family and Business Protection",
    targetMarket: "All retail, loan, and corporate customers",
    features: [
      "Credit life protection covering all loan and leasing liabilities",
      "Tailored retirement, health, and child education endowment policies",
      "Partnership with top-tier Sri Lankan life and general insurance underwriters"
    ],
    benefits: [
      "Protects families from inheriting loan obligations in unfortunate events"
    ],
    digitalAccess: "Automated premium deductions from SDB savings accounts",
    sourcePage: 19
  },
  {
    id: "refinance-loans",
    category: "refinance",
    name: "National Development Refinance Schemes",
    tagline: "Low-Cost Concessionary Capital for National Priorities",
    targetMarket: "Export SMEs, green energy investors, and tea/agri smallholders",
    features: [
      "Subsidised interest rate schemes funded by ADB, Central Bank of Sri Lanka, and Ministry of Finance",
      "Dedicated funding lines for solar rooftop installations and energy efficiency retrofits",
      "Concessionary grace periods up to 2 years with extended tenors up to 10 years"
    ],
    benefits: [
      "Lowest cost of capital in Sri Lanka supporting sustainable and climate-resilient enterprise"
    ],
    digitalAccess: "Direct compliance reporting and documentation handling",
    sourcePage: 19
  }
];
