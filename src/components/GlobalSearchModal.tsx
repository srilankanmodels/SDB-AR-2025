import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, X, TrendingUp, Handshake, Calendar, Award,
  BookOpen, Package, Compass, Users, Leaf, ShieldCheck,
  FileText, BookMarked, ArrowRight, CornerDownLeft
} from "lucide-react";

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  category: "Overview" | "Leadership" | "Strategy" | "Capitals" | "Products" | "Environment" | "Stakeholders" | "Sustainability" | "Governance" | "Financials" | "Supplementary";
  sectionId: string;
  pageHint?: string;
  icon: any;
}

const SEARCH_INDEX: SearchResultItem[] = [
  // Overview
  { id: "ov-kpi", title: "Financial Highlights & 2025 KPIs", description: "Gross income LKR 18.40 Bn, PBT LKR 800.17 Mn, PAT LKR 404.92 Mn, Net Advances LKR 109.84 Bn.", category: "Overview", sectionId: "overview", pageHint: "Pages 14–15", icon: TrendingUp },
  { id: "ov-npl", title: "Stage 3 Impaired Loans Ratio", description: "Stage 3 ratio maintained at 5.36%, outperforming the national industry average of 9.4%.", category: "Overview", sectionId: "overview", pageHint: "Page 15", icon: TrendingUp },
  { id: "ov-car", title: "Capital Adequacy Ratio (CAR)", description: "Total CAR of 15.24% against CBSL statutory requirement of 12.50%. Tier 1 capital at 14.20%.", category: "Overview", sectionId: "overview", pageHint: "Page 15", icon: TrendingUp },

  // Leadership
  { id: "lead-chair", title: "Chairperson's Review - Ms. Dinithi Ratnayake", description: "Reflections on navigating macroeconomic volatility, cooperative resilience, and governance.", category: "Leadership", sectionId: "leadership", pageHint: "Pages 16–19", icon: Handshake },
  { id: "lead-ceo", title: "Chief Executive Officer's Review - Mr. Kapila Ariyaratne", description: "Operational execution, digital pivot via UPay, Rabo Partnerships, and 2026-2029 blueprint.", category: "Leadership", sectionId: "leadership", pageHint: "Pages 20–23", icon: Handshake },
  { id: "lead-board", title: "Board of Directors Profiles", description: "10 distinguished Directors comprising experienced leaders in banking, legal, and cooperative sectors.", category: "Leadership", sectionId: "leadership", pageHint: "Pages 128–135", icon: Users },
  { id: "lead-mgmt", title: "Corporate Management Team", description: "Executive leadership guiding retail, credit, risk, IT, operations, and cooperative networks.", category: "Leadership", sectionId: "leadership", pageHint: "Pages 136–141", icon: Users },

  // Timeline
  { id: "time-evo", title: "28 Years of Evolution (1997–2025)", description: "From inception as a specialised bank under Dr. P.A. Kiriwandeniya to a nationwide commercial force.", category: "Overview", sectionId: "timeline", pageHint: "Pages 26–27", icon: Calendar },

  // Strategy
  { id: "strat-pillars", title: "Four Strategic Pillars (2026–2029)", description: "Cooperative, MSME, Agriculture, and Digital transformation driving sustainable community growth.", category: "Strategy", sectionId: "strategy", pageHint: "Pages 24–25", icon: Award },
  { id: "strat-rabo", title: "Rabo Partnerships Strategic Collaboration", description: "Strategic partnership with Rabo Partnerships Netherlands to transform agricultural financing.", category: "Strategy", sectionId: "strategy", pageHint: "Page 25", icon: Award },
  { id: "strat-values", title: "Vision, Mission & Core Values", description: "To be the apex bank of the cooperative sector and leader in sustainable and inclusive finance.", category: "Strategy", sectionId: "strategy", pageHint: "Page 6", icon: Award },

  // 6 Capitals
  { id: "cap-fin", title: "Financial Capital (6 Capitals)", description: "Deposit mobilisation LKR 105.68 Bn, Asset base LKR 146.96 Bn, and equity capital preservation.", category: "Capitals", sectionId: "capitals", pageHint: "Pages 56–65", icon: BookOpen },
  { id: "cap-mfg", title: "Manufactured Capital (94 Branches & ATMs)", description: "Nationwide physical presence across 94 branches, automated banking centres, and branch refurbishments.", category: "Capitals", sectionId: "capitals", pageHint: "Pages 66–73", icon: BookOpen },
  { id: "cap-int", title: "Intellectual Capital & Digital Tech", description: "UPay digital payments ecosystem, core banking upgrades, cybersecurity investments LKR 4.05 Bn.", category: "Capitals", sectionId: "capitals", pageHint: "Pages 74–83", icon: BookOpen },
  { id: "cap-hum", title: "Human Capital (1,263 Employees)", description: "48% female workforce, 32,000+ training hours, talent development, and collective agreements.", category: "Capitals", sectionId: "capitals", pageHint: "Pages 84–97", icon: BookOpen },
  { id: "cap-soc", title: "Social & Relationship Capital", description: "Alliances with ~4,000 primary SANASA cooperatives, MSME business clinics, and community trust.", category: "Capitals", sectionId: "capitals", pageHint: "Pages 98–109", icon: BookOpen },
  { id: "cap-nat", title: "Natural Capital & Climate Stewardship", description: "Scope 1 & 2 carbon tracking, SEA energy management, LKR 50 Mn+ rooftop solar loans.", category: "Capitals", sectionId: "capitals", pageHint: "Pages 110–119", icon: BookOpen },

  // Products
  { id: "prod-upay", title: "UPay Mobile & Digital Banking Platform", description: "LankaQR, bill payments, fund transfers, merchant settlements, and biometric digital security.", category: "Products", sectionId: "products", pageHint: "Page 42", icon: Package },
  { id: "prod-jawaya", title: "SDB Jawaya MSME Commercial Loans", description: "Working capital and term finance tailored for micro, small, and medium enterprises.", category: "Products", sectionId: "products", pageHint: "Page 42", icon: Package },
  { id: "prod-lakdaru", title: "SDB Lakdaru Minor Children Savings", description: "High-interest savings, milestone gifts, and educational cash prizes for minors.", category: "Products", sectionId: "products", pageHint: "Page 42", icon: Package },
  { id: "prod-agri", title: "Agricultural & Food Value Chain Loans", description: "68,900+ agricultural loans disbursed across tea, rubber, paddy, and spices smallholders.", category: "Products", sectionId: "products", pageHint: "Page 43", icon: Package },
  { id: "prod-solar", title: "SDB Green / Rooftop Solar Loans", description: "Dedicated financing for domestic and commercial solar photovoltaic installations.", category: "Products", sectionId: "products", pageHint: "Page 43", icon: Package },

  // Operating Environment
  { id: "env-macro", title: "Sri Lanka Macroeconomic Review", description: "GDP rebound to 5.0%, disinflation, foreign remittances USD 8.1 Bn, and external reserves.", category: "Environment", sectionId: "environment", pageHint: "Pages 44–47", icon: Compass },
  { id: "env-ditwah", title: "Adverse Weather & Cyclone Ditwah Impact", description: "Agricultural crop damage and temporary supply chain disruption in late Q4 2025.", category: "Environment", sectionId: "environment", pageHint: "Page 46", icon: Compass },
  { id: "env-bank", title: "Sri Lankan Banking Sector Performance", description: "Sector total assets LKR 24.9 Tn, sector PAT LKR 369.1 Bn, Stage 3 ratio 9.4%.", category: "Environment", sectionId: "environment", pageHint: "Pages 48–51", icon: Compass },
  { id: "env-hormuz", title: "Subsequent Period Outlook & Hormuz Geopolitics", description: "Early 2026 Strait of Hormuz conflict risk analysis and oil price implications.", category: "Environment", sectionId: "environment", pageHint: "Page 53", icon: Compass },

  // Stakeholders & Materiality
  { id: "stk-groups", title: "9 Key Stakeholder Groups", description: "Customers, Shareholders, Employees, Cooperatives, Regulators, Community, Suppliers, DFIs, Media.", category: "Stakeholders", sectionId: "stakeholders", pageHint: "Pages 28–30", icon: Users },
  { id: "stk-grid", title: "Power vs. Interest Quadrant Matrix", description: "Mapping 9 stakeholder groups to determine strategic consultation and reporting engagement.", category: "Stakeholders", sectionId: "stakeholders", pageHint: "Page 30", icon: Users },
  { id: "stk-mat", title: "13 Material Topics Matrix", description: "Prioritised issues including Financial Viability, Credit Quality, Digital Inclusion, and Climate Risk.", category: "Stakeholders", sectionId: "stakeholders", pageHint: "Pages 31–33", icon: Users },

  // Sustainability
  { id: "sust-pillars", title: "8 Sustainability Pillars (ESRMS, SPM, SIF, OPF, etc.)", description: "Comprehensive sustainability architecture spanning credit screening, social performance, and green finance.", category: "Sustainability", sectionId: "sustainability", pageHint: "Pages 34–36", icon: Leaf },
  { id: "sust-sdg", title: "UN Sustainable Development Goals (SDGs)", description: "10 UN SDGs championed with verifiable 2025 metrics including Zero Hunger, Gender Equality, and Climate Action.", category: "Sustainability", sectionId: "sustainability", pageHint: "Pages 38–39", icon: Leaf },
  { id: "sust-fcp", title: "Financial Consumer Protection (FCP) Unit", description: "Established under CBSL Direction No. 01 of 2023; resolved 2,013 customer complaints (80%+ within target).", category: "Sustainability", sectionId: "sustainability", pageHint: "Page 37", icon: Leaf },
  { id: "sust-ssci", title: "European SSCI Sustainability Certification", description: "Accepted into EOSD German-designed holistic sustainability accreditation standard.", category: "Sustainability", sectionId: "sustainability", pageHint: "Page 36", icon: Leaf },

  // Governance & Risk
  { id: "gov-board", title: "Corporate Governance & Board Committees", description: "Audit Committee, Integrated Risk Management, Nominations, Human Resources & Remuneration.", category: "Governance", sectionId: "governance", pageHint: "Pages 124–173", icon: ShieldCheck },
  { id: "gov-risk", title: "Enterprise Risk Management & Climate Risk", description: "Three lines of defence model, stress testing, credit underwriting, and liquidity risk management.", category: "Governance", sectionId: "governance", pageHint: "Pages 174–199", icon: ShieldCheck },

  // Financials
  { id: "fin-pnl", title: "Income Statement (Statement of Profit or Loss)", description: "Gross income LKR 18.40 Bn, Net interest income LKR 8.23 Bn, Operating profit LKR 1.70 Bn.", category: "Financials", sectionId: "financials", pageHint: "Page 200", icon: FileText },
  { id: "fin-bs", title: "Balance Sheet (Statement of Financial Position)", description: "Total assets LKR 146.96 Bn, Loans LKR 109.84 Bn, Deposits LKR 105.68 Bn, Total equity LKR 14.80 Bn.", category: "Financials", sectionId: "financials", pageHint: "Page 201", icon: FileText },
  { id: "fin-notes", title: "Notes to the Financial Statements (Notes 1–52)", description: "Comprehensive accounting policies, segment disclosures, financial risk, and fair value hierarchy.", category: "Financials", sectionId: "financials", pageHint: "Pages 207–297", icon: FileText },

  // Supplementary
  { id: "sup-ten", title: "Ten Years at a Glance (2016–2025)", description: "A decade of financial and operational progress: Advances grew 93.8%, Deposits grew 128.4%.", category: "Supplementary", sectionId: "supplementary", pageHint: "Page 306", icon: BookMarked },
  { id: "sup-basel", title: "Basel III Pillar III Market Disclosures", description: "Capital Adequacy Ratios (CET1 14.20%, CAR 15.24%), LCR (151.86%), and NSFR (144.82%).", category: "Supplementary", sectionId: "supplementary", pageHint: "Pages 300–305", icon: BookMarked },
  { id: "sup-glossary", title: "Glossary of Banking & Financial Terms", description: "Definitions for CAR, CET1, NIM, SLFRS 9, Stage 3, NSFR, LCR, ESRMS, SPM, and SANASA Movement.", category: "Supplementary", sectionId: "supplementary", pageHint: "Pages 318–321", icon: BookMarked },
  { id: "sup-agm", title: "Notice of 29th Annual General Meeting (AGM)", description: "Wednesday, 27th May 2026 at 10:00 A.M. at SANASA Campus, Paragammana, Hettimulla, Kegalle and virtual.", category: "Supplementary", sectionId: "supplementary", pageHint: "Page 324", icon: Calendar }
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
}

export default function GlobalSearchModal({
  isOpen,
  onClose,
  onSelectSection
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const filtered = SEARCH_INDEX.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.pageHint && item.pageHint.toLowerCase().includes(q))
    );
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      onSelectSection(filtered[selectedIndex].sectionId);
      onClose();
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        >
          {/* Search Input Bar */}
          <div className="flex items-center px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <Search className="w-5 h-5 text-sdb-purple mr-3 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search all 21 chapters, metrics, people, products, SDGs..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent text-sm md:text-base font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block text-[10px] font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="p-3 overflow-y-auto divide-y divide-slate-100 space-y-1">
            {filtered.length === 0 ? (
              <div className="p-10 text-center text-slate-500 text-sm">
                No matching report sections or topics found for "{query}".
              </div>
            ) : (
              filtered.map((item, idx) => {
                const ItemIcon = item.icon;
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      onSelectSection(item.sectionId);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`pt-1 first:pt-0 p-3 rounded-2xl cursor-pointer flex items-center justify-between transition-colors ${
                      isSelected
                        ? "bg-sdb-purple/10 border border-sdb-purple/20"
                        : "hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-2 rounded-xl mt-0.5 ${
                          isSelected ? "bg-sdb-purple text-white" : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            {item.category}
                          </span>
                          {item.pageHint && (
                            <span className="text-[10px] font-mono text-sdb-coral font-bold">
                              {item.pageHint}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 flex-shrink-0 ml-2">
                      <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-sdb-purple" : "text-slate-300"}`} />
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer instructions */}
          <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center space-x-3">
              <span>Use <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">↑</kbd> <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">↓</kbd> to navigate</span>
              <span><kbd className="font-mono bg-white border border-slate-200 px-1 rounded">↵</kbd> to jump</span>
            </div>
            <span>{filtered.length} indexed topics</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
