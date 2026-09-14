import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOARD_MEMBERS, EXECUTIVE_MANAGEMENT } from "../data/reportData";
import { Award, User, Quote, BookOpen, UserCheck, ChevronRight, X, Sparkles, Calendar, Briefcase, GraduationCap } from "lucide-react";
import { useBranding } from "./BrandingContext";

type SubSection = "chairperson" | "ceo" | "board" | "management";

interface ExecutiveDossierItem {
  label: string;
  value: string;
  icon: any;
  isBadge?: boolean;
}

interface ExecutivePortraitCardProps {
  image: string;
  name: string;
  role: string;
  subRole: string;
  badgeLabel: string;
  badgeAccent?: "coral" | "green";
  dossier: ExecutiveDossierItem[];
}

function ExecutivePortraitCard({
  image,
  name,
  role,
  subRole,
  badgeLabel,
  badgeAccent = "coral",
  dossier
}: ExecutivePortraitCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="lg:col-span-4 rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_12px_45px_rgba(47,27,104,0.08)] sticky top-6 transition-all duration-300 hover:shadow-[0_18px_55px_rgba(47,27,104,0.13)]">
      {/* High-Resolution Studio Portrait Showcase Frame */}
      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 overflow-hidden group">
        {/* Soft Ambient Radial Backlight */}
        <div
          className={`absolute -inset-2 bg-gradient-to-tr ${
            badgeAccent === "coral" ? "from-sdb-purple/30 via-sdb-coral/20" : "from-sdb-purple/30 via-sdb-green/20"
          } to-amber-300/10 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10`}
        />

        {/* Shimmer skeleton while high-res image loads */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/70 to-slate-100 animate-pulse flex items-center justify-center">
            <User className="w-16 h-16 text-slate-300" />
          </div>
        )}

        {/* The Studio Portrait Image */}
        <img
          src={image}
          alt={name}
          referrerPolicy="no-referrer"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-[1.04] ${
            imgLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          loading="eager"
        />

        {/* Bottom Multi-Stop Cinematic Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140C24] via-[#140C24]/35 to-transparent pointer-events-none" />

        {/* Top Floating Glass Badge */}
        <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1230]/80 backdrop-blur-md border border-white/20 text-white shadow-lg">
          <Award className={`w-3.5 h-3.5 ${badgeAccent === "coral" ? "text-sdb-coral" : "text-sdb-green"}`} />
          <span className="font-mono text-[10.5px] font-bold tracking-wider uppercase">{badgeLabel}</span>
        </div>

        {/* Overlay Typography at the Base of the Portrait */}
        <div className="absolute inset-x-0 bottom-0 p-5 z-10 text-left">
          <div
            className={`h-1 w-12 bg-gradient-to-r ${
              badgeAccent === "coral" ? "from-sdb-coral to-amber-400" : "from-sdb-green to-emerald-400"
            } rounded-full mb-2.5 shadow-sm`}
          />
          <h3 className="font-serif text-2xl md:text-[25px] font-bold text-white tracking-tight leading-tight drop-shadow-md">
            {name}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <span
              className={`font-mono text-xs font-bold uppercase tracking-widest ${
                badgeAccent === "coral" ? "text-sdb-coral" : "text-emerald-400"
              }`}
            >
              {role}
            </span>
            <span className="text-white/40 text-xs">&bull;</span>
            <span className="font-sans text-xs text-slate-200 font-medium">SDB bank</span>
          </div>
          <p className="text-[11.5px] text-slate-300/95 italic font-sans mt-1">
            {subRole}
          </p>
        </div>
      </div>

      {/* Official Credentials & Dossier */}
      <div className="p-5 bg-white border-t border-slate-100 space-y-3 font-mono text-[11px] text-slate-600 text-left">
        {dossier.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-center justify-between ${
                idx < dossier.length - 1 ? "pb-2.5 border-b border-slate-100" : ""
              }`}
            >
              <span className="text-slate-500 flex items-center gap-2">
                <IconComponent className="w-3.5 h-3.5 text-sdb-purple shrink-0" />
                <span>{item.label}</span>
              </span>
              {item.isBadge ? (
                <span className="font-bold text-sdb-purple font-mono bg-sdb-purple/5 px-2 py-0.5 rounded border border-sdb-purple/10">
                  {item.value}
                </span>
              ) : (
                <span className="font-bold text-slate-800 font-sans text-right text-xs">
                  {item.value}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LeadershipSection() {
  const { branding } = useBranding();
  const boardroomLeadershipImage = branding?.boardroomLeadershipImage || "/src/assets/images/boardroom_leadership_1783367647402.jpg";

  const [activeTab, setActiveTab] = useState<SubSection>("chairperson");

  useEffect(() => {
    const handleSetTab = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && ["chairperson", "ceo", "board", "management"].includes(detail)) {
        setActiveTab(detail as SubSection);
      }
    };
    window.addEventListener("set-leadership-tab", handleSetTab);
    return () => {
      window.removeEventListener("set-leadership-tab", handleSetTab);
    };
  }, []);
  const [selectedDirectorId, setSelectedDirectorId] = useState<string | null>(null);

  const selectedDirector = BOARD_MEMBERS.find((d) => d.id === selectedDirectorId);

  return (
    <section id="leadership-section" className="space-y-12">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="space-y-2 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
            Leadership & Governance
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            Guided by an experienced Board of Directors and a highly skilled Corporate Management team, SDB bank maintains the highest standards of corporate governance.
          </p>
        </div>
        
        {/* Generated boardroom leadership picture */}
        <div className="w-full lg:w-72 h-28 rounded-2xl overflow-hidden shadow-md border border-sdb-purple/10 shrink-0">
          <img
            src={boardroomLeadershipImage}
            alt="SDB Boardroom Governance"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <div id="leadership-tabs" className="flex overflow-x-auto border-b border-sdb-purple/10 pb-px scrollbar-none gap-2 sm:gap-6">
        {[
          { id: "chairperson", label: "Chairperson's Message" },
          { id: "ceo", label: "CEO's Review" },
          { id: "board", label: "Board of Directors" },
          { id: "management", label: "Corporate Management" }
        ].map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SubSection)}
              className={`pb-3 text-sm font-medium tracking-tight border-b-2 transition-all duration-300 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "border-sdb-purple text-sdb-purple font-semibold"
                  : "border-transparent text-slate-500 hover:text-sdb-purple"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Tab Panel */}
      <div id="leadership-panel">
        <AnimatePresence mode="wait">
          {activeTab === "chairperson" && (
            <motion.div
              key="chairperson"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left"
            >
              {/* High-Impact Editorial Executive Portrait Showcase */}
              <ExecutivePortraitCard
                image={branding?.chairpersonImage || "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png"}
                name="Ms. Dinithi Ratnayake"
                role="Chairperson"
                subRole="Independent, Non-Executive Director"
                badgeLabel="Board Leadership"
                badgeAccent="coral"
                dossier={[
                  { label: "Appointed to Board", value: "2020", icon: Calendar, isBadge: true },
                  { label: "Chairperson since", value: "April 2022", icon: Sparkles },
                  { label: "Prior Leadership", value: "Citibank N.A. Director", icon: Briefcase },
                  { label: "Academic Credentials", value: "MA (Econ, UoC), BSc (USA)", icon: GraduationCap }
                ]}
              />

              {/* Message Narrative - Full Text */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                {/* Highlight Quote */}
                <div className="glass-card rounded-3xl border-l-4 border-sdb-purple p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-r from-sdb-purple/5 to-transparent">
                  <Quote className="w-10 h-10 text-sdb-purple/10 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "Responding to emerging economic opportunities, SDB bank recorded improved financial results across all key business segments in 2025. The Bank achieved a Profit Before Tax of LKR 800.17 Mn, reflecting an increase of 16.93% compared to 2024. This growth reflects our core resilience and commitment to Sri Lanka's MSMEs and rural communities."
                  </p>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Dear Shareholders and Valued Stakeholders,
                    </h4>
                    <p>
                      The global economy continued to be strongly adaptive in 2025, amidst shifting geopolitical trends, trade fluctuations, and international market volatility. Against this backdrop of broader global recovery and sustained domestic policy stability, Sri Lanka too recorded encouraging progress during the year under review. Overall, this stabilized environment proved conducive for the banking sector, as stronger demand for credit and financial services boosted banking industry expansion and restored stakeholder confidence across regional markets.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Resilient Financial Performance
                    </h4>
                    <p>
                      Your Bank was well prepared to harness the emerging economic opportunities of 2025. I am therefore pleased to convey the good news that SDB bank concluded 2025 with improved financial performance across all key indicators, while further strengthening the foundation for sustainable future growth.
                    </p>
                    <p>
                      The Bank achieved a Profit Before Tax (PBT) of LKR 800.17 Mn in 2025, marking a 16.93% year-on-year surge compared to LKR 684.32 Mn recorded in FY 2024. Profit After Tax reached LKR 405 Mn, while Net Interest Income expanded to LKR 8,233 Mn. Total assets stood at LKR 146.95 Bn, with total customer deposits remaining strong at LKR 105.68 Bn.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Supporting Micro & SME Recovery
                    </h4>
                    <p>
                      While focusing on operational profitability, SDB bank remained deeply committed to supporting customer segments that continued to experience the protracted effects of the macroeconomic crisis. During the year, we provided tailored financial relief measures—including tenor extensions, interest concessions, and debt restructuring—to assist over 15,000 small business owners and individuals in their recovery journey.
                    </p>
                    <p>
                      We are proud to report that at year-end 2025, female entrepreneurs accounted for 43% of our total clientele, and our core SME lending portfolio grew by an exceptional 45.41%. Furthermore, 44% of our total SME loan volume was directly channeled into essential agriculture, food production, and rural enterprise chains.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Governance, Equity & Sustainability Roadmap
                    </h4>
                    <p>
                      In 2025, your Board prioritized the consolidation of corporate governance standards and long-term ESG integration. In alignment with Central Bank of Sri Lanka guidelines, SDB bank reinforced its Risk Management Framework and maintained robust capital ratios, ending the year with a Total Capital Adequacy Ratio (CAR) of 15.24%—well above the regulatory minimum requirement of 12.50%.
                    </p>
                    <p>
                      Looking forward, our partnership with Rabo Partnerships will drive our 2026–2029 Strategic Transformation, establishing SDB bank as Sri Lanka's leading financial engine for sustainable agriculture, climate adaptation, and cooperative ecosystem financing.
                    </p>
                  </div>

                  <div className="bg-sdb-purple/5 p-6 rounded-2xl border border-sdb-purple/10 space-y-3">
                    <h5 className="font-serif font-bold text-sdb-purple">Acknowledgements</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      On behalf of the Board of Directors, I extend my heartfelt gratitude to the Governor and Officials of the Central Bank of Sri Lanka, our shareholders, and our valued clients for their enduring trust. I thank my fellow Directors for their wise counsel, and express sincere appreciation to our CEO, Executive Management, and the entire SDB family for their dedication in driving our shared purpose.
                    </p>
                    <div className="pt-2 text-right font-serif font-bold text-sdb-purple text-sm">
                      Ms. Dinithi Ratnayake<br />
                      <span className="font-sans text-xs font-normal text-sdb-coral">Chairperson, SDB bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "ceo" && (
            <motion.div
              key="ceo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left"
            >
              {/* High-Impact Editorial Executive Portrait Showcase */}
              <ExecutivePortraitCard
                image={branding?.ceoImage || "/src/assets/annual_report_images/leadership/page_48_image_2.png"}
                name="Mr. Kapila Ariyaratne"
                role="Chief Executive Officer"
                subRole="Executive, Non-Independent Director"
                badgeLabel="Executive Review"
                badgeAccent="green"
                dossier={[
                  { label: "Appointed", value: "2024", icon: Calendar, isBadge: true },
                  { label: "Banking Career", value: "40+ Years", icon: Sparkles },
                  { label: "Former CEO Roles", value: "Seylan Bank (12 Yrs)", icon: Briefcase },
                  { label: "University Education", value: "First Class Hons, UoC", icon: GraduationCap }
                ]}
              />

              {/* Message Narrative - Full Text */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                {/* Highlight Quote */}
                <div className="glass-card rounded-3xl border-l-4 border-sdb-green p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-r from-sdb-green/5 to-transparent">
                  <Quote className="w-10 h-10 text-sdb-green/10 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "Following three consecutive years of contraction in the loan portfolio up to 2024, we successfully reversed the downward spiral in 2025. Net loans to customers increased by 15.46%, expanding from LKR 95.14 billion to LKR 109.84 billion, backed by record annual disbursements exceeding LKR 100 Billion."
                  </p>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      A Landmark Turning Point in SDB's History
                    </h4>
                    <p>
                      I am pleased to present the Chief Executive Officer's Review for the financial year ended 31st December 2025. This was a defining year of transformation for SDB bank—one in which we decisively reversed previous contractionary trends, reinforced our operational foundations, modernized our digital capabilities, and set the Bank firmly on a path toward sustainable, high-impact growth.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Loan Portfolio Expansion & Segmental Growth
                    </h4>
                    <p>
                      Driven by targeted market positioning and disciplined credit underwriting, total loan disbursements crossed LKR 100 Billion in 2025. Gross loans and advances expanded across all key business verticals:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-slate-600">
                      <li><strong>SME & Commercial Lending:</strong> Reached LKR 31.25 Bn (+45.41% YoY), empowering regional trade, food processing, and manufacturing.</li>
                      <li><strong>Agricultural & Cooperative Credit:</strong> Stood at LKR 50.45 Bn, providing essential working capital to smallholder farmers and primary SANASA societies.</li>
                      <li><strong>Retail & Micro Finance:</strong> Generated LKR 18.95 Bn in micro-loans, supporting micro-entrepreneurs and women-led household enterprises.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Digital Acceleration & Infrastructure Modernization
                    </h4>
                    <p>
                      Digitalization was a central pillar of our 2025 operational agenda. We completed the migration of our enterprise document management system and streamlined credit appraisal workflows, reducing loan processing turnaround times by 40%. The SDB UPay app processed over 8.5 million digital transactions in 2025, generating LKR 105 Mn in low-cost digital savings accounts.
                    </p>
                    <p>
                      To ensure continuous business resilience, we established a consolidated Head Office in Kirulapone/Colombo and completed full hardware upgrades across our primary data center and disaster recovery facility.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Human Capital & Community Impact
                    </h4>
                    <p>
                      Our 1,263 employees are the bedrock of SDB bank's success. In 2025, we launched a competency-based Performance Management System and delivered over 32,000 training hours across our branch network. We maintained an employee retention rate of 92.06% and achieved 48% female representation across our workforce.
                    </p>
                    <p>
                      Through our Rural Upliftment Programme and 'Heritage Hands' project, SDB bank directly impacted 3,991 rural beneficiaries, providing financial literacy and market access to grassroots producers across Sri Lanka.
                    </p>
                  </div>

                  <div className="bg-sdb-green/5 p-6 rounded-2xl border border-sdb-green/10 space-y-3">
                    <h5 className="font-serif font-bold text-sdb-purple">Future Outlook (2026–2029)</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      As we look ahead, SDB bank is uniquely positioned to lead Sri Lanka's cooperative and MSME banking revolution. With Rabo Partnerships as our strategic advisor, we enter 2026 with clear strategic momentum, robust liquidity, and a passionate team dedicated to delivering value for all stakeholders.
                    </p>
                    <div className="pt-2 text-right font-serif font-bold text-sdb-purple text-sm">
                      Mr. Kapila Ariyaratne<br />
                      <span className="font-sans text-xs font-normal text-sdb-green">Chief Executive Officer, SDB bank</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "board" && (
            <motion.div
              key="board"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              {/* Dual Grand Boardroom Portraits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-sdb-purple/10 group">
                  <img
                    src="/src/assets/annual_report_images/board/page_52_image_0.png"
                    alt="SDB Board of Directors (Session A: Ms. Dinithi Ratnayake & Directors)"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sdb-purple/90 via-sdb-purple/20 to-transparent flex flex-col justify-end p-6 text-left">
                    <span className="text-[10px] font-mono font-bold text-sdb-coral bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block w-fit mb-1">
                      Session A
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                      Chairperson Ms. Dinithi Ratnayake & Directors
                    </h4>
                    <p className="text-white/80 text-xs font-sans mt-0.5">
                      Messrs. Prasanna Premaratna, Conrad Dias, Chaaminda Kumarasiri, and Thusantha Wijemanna
                    </p>
                  </div>
                </div>

                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border border-sdb-purple/10 group">
                  <img
                    src="/src/assets/annual_report_images/board/page_53_image_1.png"
                    alt="SDB Board of Directors (Session B: Mr. Kapila Ariyaratne & Directors)"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sdb-purple/90 via-sdb-purple/20 to-transparent flex flex-col justify-end p-6 text-left">
                    <span className="text-[10px] font-mono font-bold text-sdb-coral bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block w-fit mb-1">
                      Session B
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                      CEO Mr. Kapila Ariyaratne & Directors
                    </h4>
                    <p className="text-white/80 text-xs font-sans mt-0.5">
                      Messrs. Romani De Silva, Sarath Nandasiri, Chandana Dissanayake, and B. R. A. Bandara
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-2xl border border-sdb-purple/10 shadow-xs">
                <p className="text-xs text-slate-600 text-left">
                  Our Board composition balances cooperative grassroots wisdom with commercial banking leadership to ensure robust governance and stakeholder value.
                </p>
                <span className="text-[10px] font-mono text-sdb-purple font-bold uppercase tracking-wider bg-sdb-purple/10 px-3 py-1.5 rounded-xl shrink-0">
                  10 Board Members • CBSL Compliant
                </span>
              </div>

              {/* Individual Directors' Details */}
              <div id="board-details-list" className="space-y-6">
                {BOARD_MEMBERS.map((director) => {
                  const hasImage = !!branding?.boardImages?.[director.id];
                  const imageUrl = branding?.boardImages?.[director.id];
                  
                  return (
                    <div
                      key={director.id}
                      className="bg-white border border-sdb-purple/10 hover:border-sdb-purple/25 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-6 md:gap-8 text-left group relative overflow-hidden"
                    >
                      {/* Left Side: Avatar/Portrait and Quick Info */}
                      <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8 shrink-0 justify-between">
                        <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                          <div className="relative">
                            {hasImage ? (
                              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-sdb-purple/15 shadow-md">
                                <img
                                  src={imageUrl}
                                  alt={director.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            ) : (
                              <div className="w-24 h-24 rounded-2xl bg-sdb-purple/5 border-2 border-sdb-purple/10 text-sdb-purple flex flex-col items-center justify-center shadow-inner font-serif font-bold text-2xl group-hover:bg-sdb-purple group-hover:text-white transition-all duration-300">
                                <User className="w-8 h-8 mb-1" />
                                <span className="text-xs font-mono tracking-wider">#{director.id}</span>
                              </div>
                            )}
                            <div className="absolute -bottom-2 -right-2 bg-sdb-coral text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
                              ID {director.id}
                            </div>
                          </div>

                          <div className="space-y-1 mt-2">
                            <h4 className="font-serif text-lg md:text-xl font-bold text-sdb-purple leading-tight group-hover:text-sdb-coral transition-colors duration-300">
                              {director.name}
                            </h4>
                            <p className="text-xs text-sdb-coral font-mono uppercase tracking-wider font-semibold">
                              {director.designation}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 w-full pt-4 border-t border-slate-100/80">
                          <span className="inline-block bg-slate-50 text-[10px] font-mono text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100 font-semibold w-full text-center lg:text-left">
                            Board Member
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Detailed Biography & Tenure */}
                      <div className="lg:w-3/4 flex flex-col justify-between space-y-4">
                        <div className="space-y-4">
                          <div className="bg-sdb-purple/5 border-l-4 border-sdb-purple px-4 py-3 rounded-r-xl">
                            <p className="text-xs font-mono font-bold text-sdb-purple uppercase tracking-wider">
                              Tenure & Board Status
                            </p>
                            <p className="text-sm font-semibold text-slate-700 mt-1">
                              {director.appointed}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                              Professional Profile & Expertise
                            </p>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {director.bio}
                            </p>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                          <span>SDB bank 2025 Annual Report Profile</span>
                          <span className="flex items-center gap-1 text-sdb-green font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-sdb-green" /> CBSL Approved
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === "management" && (
            <motion.div
              key="management"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* Publication Gallery Feature: Pages 57 & 58 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-white rounded-3xl p-4 border border-sdb-purple/10 shadow-md">
                  <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block mb-2">
                    Official Publication • Corporate Management (Part 1)
                  </span>
                  <div className="rounded-2xl overflow-hidden border border-slate-100">
                    <img
                      src="/src/assets/annual_report_images/management/page_59_screenshot.png"
                      alt="Corporate Management Page 57"
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-4 border border-sdb-purple/10 shadow-md">
                  <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block mb-2">
                    Official Publication • Corporate Management (Part 2)
                  </span>
                  <div className="rounded-2xl overflow-hidden border border-slate-100">
                    <img
                      src="/src/assets/annual_report_images/management/page_60_screenshot.png"
                      alt="Corporate Management Page 58"
                      className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Executive Grid Cards */}
              <div id="management-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {EXECUTIVE_MANAGEMENT.map((exec, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-sdb-purple/20 transition-all text-left shadow-xs hover:shadow-md"
                  >
                    <div className="space-y-2">
                      <div className="w-9 h-9 rounded-full bg-sdb-purple/5 border border-sdb-purple/10 text-sdb-purple flex items-center justify-center">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-sdb-purple leading-tight">{exec.name}</h4>
                        <p className="text-[11px] text-sdb-coral font-mono uppercase tracking-wider mt-0.5">{exec.designation}</p>
                      </div>
                    </div>
                    <div className="border-t border-sdb-purple/10 pt-3 mt-4 text-[10px] text-slate-500 italic leading-snug">
                      {exec.qualifications}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Director Bio Modal */}
      {selectedDirector && (
        <div id="director-modal" className="fixed inset-0 bg-sdb-purple/40 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-modal rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden border border-sdb-purple/10 relative"
          >
            {/* Modal Header */}
            <div className="p-6 bg-white border-b border-sdb-purple/10 text-sdb-purple flex justify-between items-center">
              <div className="flex items-center space-x-3">
                {branding?.boardImages?.[selectedDirector.id] ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-sdb-purple/10 shadow-sm shrink-0">
                    <img
                      src={branding.boardImages[selectedDirector.id]}
                      alt={selectedDirector.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-lg bg-sdb-purple/5 border border-sdb-purple/10 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                    {selectedDirector.id}
                  </div>
                )}
                <div>
                  <h3 className="font-serif font-bold text-lg leading-tight">{selectedDirector.name}</h3>
                  <p className="text-[10px] text-sdb-coral font-mono uppercase tracking-wider mt-0.5">{selectedDirector.designation}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDirectorId(null)}
                className="hover:bg-sdb-purple/10 p-1.5 rounded-full transition-all cursor-pointer"
              >
                <X className="w-5 h-5 text-sdb-purple" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-8 space-y-6 text-left max-h-[60vh] overflow-y-auto custom-scrollbar bg-sdb-cream/50">
              <div className="space-y-2">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Appointment Details</span>
                <p className="text-sm font-semibold text-sdb-purple bg-white px-3 py-2 rounded-lg border border-sdb-purple/10">
                  {selectedDirector.appointed}
                </p>
              </div>

              <div className="space-y-2 leading-relaxed text-sm text-slate-600">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest block">Biographical Profile</span>
                <p>{selectedDirector.bio}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-sdb-purple/10 text-right">
              <button
                onClick={() => setSelectedDirectorId(null)}
                className="bg-sdb-purple text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-sdb-purple/80 transition-all cursor-pointer shadow-md shadow-sdb-purple/10"
              >
                Close Biography
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
