import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, Download, Eye, Bookmark, ChevronDown, ArrowRight,
  TrendingUp, Handshake, Calendar, Award, BookOpen, Package,
  Compass, Users, Leaf, ShieldCheck, FileText, BookMarked,
  Sparkles, ExternalLink, Menu, X, ArrowLeft
} from "lucide-react";
import SDBLogo from "./SDBLogo";
import NavbarShader from "./NavbarShader";

interface MegaNavbarProps {
  activeSection: string;
  onNavigateSection: (sectionId: string, subtab?: string) => void;
  onReturnToCover: () => void;
  onOpenSearch: () => void;
  onOpenDownloadCentre: () => void;
  onOpenAccessibility: () => void;
  onOpenMyReport: () => void;
  bookmarkCount: number;
}

interface MegaCategory {
  id: string;
  title: string;
  previewTitle: string;
  previewSubtitle: string;
  previewImage: string;
  previewQuote: string;
  previewSection: string;
  links: {
    label: string;
    description: string;
    sectionId: string;
    subtab?: string;
    pageHint?: string;
    icon: any;
  }[];
}

const MEGA_CATEGORIES: MegaCategory[] = [
  {
    id: "integrated",
    title: "INTEGRATED REPORT",
    previewTitle: "A Future Handcrafted",
    previewSubtitle: "Integrated Annual Report 2025",
    previewImage: "/src/assets/annual_report_images/theme/page_1_image_0.png",
    previewQuote: "Navigating macroeconomic rebound with cooperative resilience and community craftsmanship.",
    previewSection: "overview",
    links: [
      { label: "About This Report", description: "Reporting framework, GRI standards & EY assurance", sectionId: "about-report", pageHint: "Pages 5 & 10", icon: BookOpen },
      { label: "Awards & Accolades", description: "National recognition, TAGS & CRIB rating", sectionId: "awards", pageHint: "Page 9", icon: Award },
      { label: "Financial Progress & 2025 Highlights", description: "Audited KPIs, YoY movements & 5-year trends", sectionId: "overview", pageHint: "Pages 14–15", icon: TrendingUp },
      { label: "Chairperson's Message", description: "Ms. Dinithi Ratnayake on resilience & strategic direction", sectionId: "leadership", subtab: "chairperson", pageHint: "Pages 43–45", icon: Handshake },
      { label: "CEO's Strategic Review", description: "Mr. Kapila Ariyaratne on operations & growth blueprint", sectionId: "leadership", subtab: "ceo", pageHint: "Pages 47–49", icon: Handshake },
      { label: "Board of Directors & Management", description: "Experienced leadership guiding rural transformation", sectionId: "leadership", subtab: "board", pageHint: "Pages 50–58", icon: Users },
      { label: "Chief Managers", description: "13 Chief Managers driving key functional divisions", sectionId: "leadership", subtab: "chief-managers", pageHint: "Pages 59–60", icon: Users },
      { label: "Senior Management", description: "50 Senior Managers driving operational excellence", sectionId: "leadership", subtab: "senior", pageHint: "Pages 61–66", icon: Users },
      { label: "28 Years of Evolution", description: "Milestones of cooperative empowerment (1997–2025)", sectionId: "timeline", pageHint: "Pages 26–27", icon: Calendar }
    ]
  },
  {
    id: "strategy-value",
    title: "STRATEGY & CAPITALS",
    previewTitle: "Strategic Growth Blueprint",
    previewSubtitle: "2026–2029 Strategic Vision",
    previewImage: "/src/assets/annual_report_images/strategy/page_32_image_0.png",
    previewQuote: "Collaborating with Rabo Partnerships to transform MSME and smallholder agriculture value chains.",
    previewSection: "strategy",
    links: [
      { label: "Strategic Roadmap 2026–2029", description: "4 Core Pillars: Co-op, MSME, Agri & Digitalization", sectionId: "strategy", pageHint: "Pages 24–25", icon: Award },
      { label: "6 Value Creation Capitals", description: "Financial, Manufactured, Intellectual, Human, Social & Natural", sectionId: "capitals", pageHint: "Pages 56–119", icon: BookOpen },
      { label: "Products & Digital Services", description: "26 tailored credit & savings products", sectionId: "products", subtab: "catalog", pageHint: "Pages 15–18", icon: Package },
      { label: "UPay Mobile Banking & LankaQR", description: "Digital transaction growth and fintech ecosystem", sectionId: "products", subtab: "upay", pageHint: "Page 42", icon: Sparkles }
    ]
  },
  {
    id: "sustainability-esg",
    title: "SUSTAINABILITY & ESG",
    previewTitle: "Sustainable Horizons",
    previewSubtitle: "8 Sustainability Pillars & UN SDGs",
    previewImage: "/src/assets/annual_report_images/capitals/page_68_image_5.png",
    previewQuote: "Accepted into European SSCI accreditation; over 68,900 agri loans and 48% female workforce.",
    previewSection: "sustainability",
    links: [
      { label: "Operating Environment & 2026 Outlook", description: "Macroeconomic review (GDP 5.0%) & subsequent period outlook", sectionId: "environment", pageHint: "Pages 44–53", icon: Compass },
      { label: "Stakeholders Engagement", description: "9 Stakeholder groups & Power vs Interest quadrant matrix", sectionId: "stakeholders", pageHint: "Pages 28–30", icon: Users },
      { label: "13 Material Topics Matrix", description: "Materiality assessment mapped to UN SDGs", sectionId: "stakeholders", pageHint: "Pages 31–33", icon: Users },
      { label: "8 Sustainability Pillars (ESRMS & SPM)", description: "Sustainable finance, climate risk & community CSR", sectionId: "sustainability", pageHint: "Pages 34–36", icon: Leaf },
      { label: "UN SDGs: Contribution & Additional Support", description: "Contribution to SDGs in 2025 & Additional SDGs Supported", sectionId: "sustainability", pageHint: "Pages 38–40", icon: Leaf }
    ]
  },
  {
    id: "governance-fin",
    title: "GOVERNANCE & FINANCIALS",
    previewTitle: "Disciplined Governance",
    previewSubtitle: "Audited Financials & Basel III",
    previewImage: "/src/assets/annual_report_images/leadership/page_44_image_1.png",
    previewQuote: "PBT of LKR 800.17 Mn (+16.94%) and Capital Adequacy Ratio (CAR) of 15.24% exceeding regulatory requirements.",
    previewSection: "financials",
    links: [
      { label: "Corporate Governance & 7 Board Committees", description: "BIRMC, Audit, HR, Nomination, Related Party, Strategic Planning, Credit", sectionId: "governance", subtab: "committees", pageHint: "Pages 124–196", icon: ShieldCheck },
      { label: "Enterprise Risk & Climate Resilience", description: "Three lines of defence, liquidity stress tests & ECL", sectionId: "governance", subtab: "risk", pageHint: "Pages 174–199", icon: ShieldCheck },
      { label: "Audited Financial Statements", description: "Income Statement, Balance Sheet, Cash Flows & Changes in Equity", sectionId: "financials", pageHint: "Pages 200–206", icon: FileText },
      { label: "Notes to the Financial Statements", description: "Comprehensive notes 1 to 52 & accounting policies", sectionId: "financials", pageHint: "Pages 207–297", icon: FileText },
      { label: "Ten Years at a Glance (2016–2025)", description: "Decade statistical performance record", sectionId: "supplementary", pageHint: "Page 306", icon: BookMarked },
      { label: "Basel III Pillar III Disclosures", description: "Capital Adequacy & Liquidity (LCR 151.86%, NSFR 144.82%)", sectionId: "supplementary", pageHint: "Pages 300–305", icon: BookMarked },
      { label: "Notice of 29th AGM & Corporate Info", description: "AGM scheduled for 27 May 2026 at SANASA Campus", sectionId: "supplementary", pageHint: "Pages 324–328", icon: Calendar }
    ]
  }
];

export default function MegaNavbar({
  activeSection,
  onNavigateSection,
  onReturnToCover,
  onOpenSearch,
  onOpenDownloadCentre,
  onOpenAccessibility,
  onOpenMyReport,
  bookmarkCount
}: MegaNavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveDropdown((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleLinkClick = (sectionId: string, subtab?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigateSection(sectionId, subtab);
  };

  // Determine if a category matches the currently active section
  const isCategoryActive = (category: MegaCategory) => {
    return category.links.some(l => l.sectionId === activeSection) || category.previewSection === activeSection;
  };

  return (
    <header className="sticky top-0 z-40">
      {/* 1. Iconic Brand WebGL Fluid Shader Accent Stripe */}
      <NavbarShader height={3} className="shadow-xs" />

      {/* 2. Glassmorphism Main Navbar */}
      <div className="bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_4px_30px_rgba(47,27,104,0.04)] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 md:h-[68px] flex items-center justify-between gap-3 lg:gap-4">
            
            {/* 1. Left: Brand and Report Tag with Official Transparent Logo */}
            <div 
              className="flex items-center space-x-3.5 group cursor-pointer select-none py-1" 
              onClick={onReturnToCover}
              title="Return to Cover / Overview"
            >
              {/* Official Logo with no background box */}
              <div className="relative flex items-center">
                <SDBLogo className="h-8 sm:h-9 md:h-10 transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>

              {/* Vertical Hairline Divider */}
              <div className="hidden sm:block h-7 w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-0.5" />

              {/* Typography Lockup */}
              <div className="hidden sm:flex flex-col text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#1A1230] font-sans leading-none">
                    SANASA Development Bank PLC
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-[9.5px] text-slate-500 font-medium tracking-wide mt-1">
                  <span>Integrated Annual Report 2025</span>
                </div>
              </div>
            </div>

            {/* 2. Center: Desktop Mega Nav Items */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" ref={dropdownRef}>
              {MEGA_CATEGORIES.map((cat) => {
                const isOpen = activeDropdown === cat.id;
                const isActive = isCategoryActive(cat);
                return (
                  <div key={cat.id} className="relative">
                    <button
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`relative inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                        isOpen
                          ? "bg-sdb-purple text-white shadow-md shadow-sdb-purple/20 ring-2 ring-sdb-purple/20"
                          : isActive
                          ? "text-sdb-purple font-bold bg-sdb-purple/8 hover:bg-sdb-purple/12"
                          : "text-slate-600 hover:text-sdb-purple hover:bg-slate-100/80"
                      }`}
                    >
                      <span>{cat.title}</span>
                      {isActive && !isOpen && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sdb-coral animate-pulse" />
                      )}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-sdb-coral" : "text-slate-400 group-hover:text-slate-600"
                        }`}
                      />
                    </button>

                    {/* Iconic Mega Dropdown Panel */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="fixed left-1/2 -translate-x-1/2 top-[72px] w-[95vw] max-w-5xl bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_30px_70px_-15px_rgba(47,27,104,0.22)] border border-slate-200/90 overflow-hidden z-50 p-6 md:p-8"
                        >
                          <div className="grid grid-cols-12 gap-6 items-stretch">
                            {/* Left: Magazine Editorial Spotlight Card */}
                            <div className="col-span-4 bg-gradient-to-br from-[#2F1B68] via-[#241352] to-[#170B36] text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between shadow-lg">
                              {/* Ambient Subtle Glows */}
                              <div className="absolute top-0 right-0 w-36 h-36 bg-sdb-coral/20 rounded-full blur-2xl pointer-events-none" />
                              <div className="absolute bottom-0 left-0 w-36 h-36 bg-sdb-purple-light/20 rounded-full blur-2xl pointer-events-none" />

                              <div className="relative z-10 space-y-4">
                                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest text-sdb-coral bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                  {cat.title}
                                </span>
                                <h3 className="text-2xl font-bold font-serif text-white leading-tight">
                                  {cat.previewTitle}
                                </h3>
                                <p className="text-xs text-white/80 font-medium">
                                  {cat.previewSubtitle}
                                </p>
                                <div className="pt-3 border-t border-white/10">
                                  <p className="text-xs text-white/90 italic leading-relaxed font-serif">
                                    "{cat.previewQuote}"
                                  </p>
                                </div>
                              </div>

                              <button
                                onClick={() => handleLinkClick(cat.previewSection)}
                                className="relative z-10 mt-6 w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-bold text-white transition-all group cursor-pointer"
                              >
                                <span>Explore Full Chapter</span>
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-sdb-coral" />
                              </button>
                            </div>

                            {/* Right: Categorized Links Grid */}
                            <div className="col-span-8 flex flex-col justify-between">
                              <div className="grid grid-cols-2 gap-3 max-h-[58vh] overflow-y-auto pr-1">
                                {cat.links.map((link, idx) => {
                                  const LinkIcon = link.icon;
                                  const isLinkActive = activeSection === link.sectionId;
                                  return (
                                    <div
                                      key={idx}
                                      onClick={() => handleLinkClick(link.sectionId, link.subtab)}
                                      className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer group flex items-start space-x-3.5 ${
                                        isLinkActive
                                          ? "bg-sdb-purple/5 border-sdb-purple/30 shadow-2xs"
                                          : "hover:bg-slate-50 border-slate-100 hover:border-slate-200/90 hover:shadow-2xs"
                                      }`}
                                    >
                                      <div className={`p-2.5 rounded-xl transition-all duration-200 mt-0.5 shrink-0 ${
                                        isLinkActive
                                          ? "bg-sdb-purple text-white shadow-xs"
                                          : "bg-sdb-purple/8 text-sdb-purple group-hover:bg-sdb-purple group-hover:text-white"
                                      }`}>
                                        <LinkIcon className="w-4 h-4" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-1">
                                          <h4 className={`text-xs font-bold truncate transition-colors ${
                                            isLinkActive ? "text-sdb-purple" : "text-slate-800 group-hover:text-sdb-purple"
                                          }`}>
                                            {link.label}
                                          </h4>
                                          {link.pageHint && (
                                            <span className="text-[9.5px] font-mono font-semibold text-sdb-coral shrink-0 bg-sdb-coral/8 px-1.5 py-0.5 rounded">
                                              {link.pageHint}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-normal font-sans">
                                          {link.description}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Bottom Quick Jump Action Strip */}
                              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-1">
                                <span className="font-medium text-slate-400">
                                  SDB Bank Integrated Annual Report 2025 &bull; Audited Disclosures
                                </span>
                                <button
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    onOpenDownloadCentre();
                                  }}
                                  className="inline-flex items-center space-x-1.5 font-bold text-sdb-purple hover:text-sdb-purple-dark transition-colors cursor-pointer"
                                >
                                  <Download className="w-3.5 h-3.5 text-sdb-coral" />
                                  <span>Download Chapter PDF</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* 3. Right: Utility Toolbar */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              {/* Accessibility Suite Button */}
              <button
                onClick={onOpenAccessibility}
                className="p-2 sm:p-2.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-sdb-purple transition-all border border-slate-200/70 hover:border-sdb-purple/30 cursor-pointer shadow-2xs"
                title="Accessibility Tools (A11y)"
                aria-label="Accessibility Settings"
              >
                <Eye className="w-4 h-4" />
              </button>

              {/* My Report Binder Button */}
              <button
                onClick={onOpenMyReport}
                className="relative p-2 sm:p-2.5 rounded-full hover:bg-slate-100 text-slate-600 hover:text-sdb-purple transition-all border border-slate-200/70 hover:border-sdb-purple/30 cursor-pointer shadow-2xs"
                title="My Report Binder"
                aria-label="My Report Binder"
              >
                <Bookmark className="w-4 h-4" />
                {bookmarkCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-sdb-coral to-sdb-crimson text-white text-[9px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-bounce">
                    {bookmarkCount}
                  </span>
                )}
              </button>

              {/* Quick Search with shortcut */}
              <button
                onClick={onOpenSearch}
                className="hidden sm:inline-flex items-center space-x-2 bg-slate-100/90 hover:bg-slate-200/80 text-slate-700 text-xs px-3.5 py-1.5 rounded-full border border-slate-200/80 hover:border-slate-300 transition-all cursor-pointer shadow-2xs group"
                title="Global Report Search (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-sdb-purple group-hover:scale-110 transition-transform" />
                <span className="font-medium">Search</span>
                <kbd className="text-[9.5px] font-mono bg-white border border-slate-300/80 px-1.5 py-0.5 rounded text-slate-500 shadow-2xs">
                  Ctrl+K
                </kbd>
              </button>

              {/* Iconic Download PDF Icon CTA */}
              <button
                onClick={onOpenDownloadCentre}
                className="p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-sdb-purple via-[#3D237A] to-sdb-purple hover:brightness-110 text-white shadow-md shadow-sdb-purple/20 transition-all duration-300 cursor-pointer border border-white/15 active:scale-95 group flex items-center justify-center"
                title="Download Audited PDF Report"
                aria-label="Download Audited PDF Report"
              >
                <Download className="w-4 h-4 text-sdb-coral group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Return to Cover Pill */}
              <button
                onClick={onReturnToCover}
                className="hidden xl:inline-flex items-center space-x-1 text-xs font-bold text-sdb-purple bg-sdb-purple/5 hover:bg-sdb-purple/10 border border-sdb-purple/15 px-3 py-1.5 rounded-full transition-all cursor-pointer"
                title="Return to Theme Cover"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-sdb-coral" />
                <span>Cover</span>
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200/60 cursor-pointer"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden py-4 border-t border-slate-100 space-y-4 max-h-[80vh] overflow-y-auto"
              >
                {/* Mobile Quick Search Bar */}
                <div className="px-2">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSearch();
                    }}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium"
                  >
                    <span className="flex items-center space-x-2">
                      <Search className="w-4 h-4 text-sdb-purple" />
                      <span>Search Annual Report...</span>
                    </span>
                    <kbd className="text-[9px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-300">
                      Ctrl+K
                    </kbd>
                  </button>
                </div>

                {/* Mobile Categories */}
                {MEGA_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="space-y-1.5 px-2">
                    <div className="text-[11px] font-mono font-bold text-sdb-purple uppercase tracking-wider px-2 py-1 bg-sdb-purple/5 rounded-lg flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] text-sdb-coral">{cat.links.length} Chapters</span>
                    </div>
                    <div className="space-y-1 pl-2">
                      {cat.links.map((link, idx) => {
                        const LinkIcon = link.icon;
                        const isLinkActive = activeSection === link.sectionId;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleLinkClick(link.sectionId, link.subtab)}
                            className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between text-xs transition-colors cursor-pointer ${
                              isLinkActive
                                ? "bg-sdb-purple/10 text-sdb-purple font-bold"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <span className="flex items-center space-x-2 truncate">
                              <LinkIcon className="w-3.5 h-3.5 text-sdb-purple shrink-0" />
                              <span className="truncate">{link.label}</span>
                            </span>
                            {link.pageHint && (
                              <span className="text-[9.5px] font-mono text-sdb-coral shrink-0 ml-2">
                                {link.pageHint}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Mobile Bottom Utilities */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between px-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onReturnToCover();
                    }}
                    className="text-xs font-bold text-sdb-coral flex items-center space-x-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Return to Cover</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDownloadCentre();
                    }}
                    className="text-xs font-bold text-sdb-purple flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-sdb-coral" />
                    <span>Download Full Report</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

