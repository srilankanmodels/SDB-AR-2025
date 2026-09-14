import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOARD_MEMBERS, EXECUTIVE_MANAGEMENT } from "../data/reportData";
import { Award, User, Quote, BookOpen, UserCheck, ChevronRight, X, Sparkles, Calendar, Briefcase, GraduationCap, Search, Building2, ImageIcon } from "lucide-react";
import { useBranding } from "./BrandingContext";
import { resolvePersonnelImageUrl, SENIOR_BRANCH_MANAGERS } from "../utils/supabasePersonnel";

// Full Team Boardroom Showcase Photo
import fullTeamBODImage from "../assets/full team/sdb_bod_2025_web.jpg";

// Single Portrait Images for each Board Director
import dirImg01 from "../assets/board/01_Dinithi_Ratnayake.png";
import dirImg02 from "../assets/board/02_Kapila_Ariyaratne.png";
import dirImg03 from "../assets/board/03_Chaaminda_Kumarasiri.png";
import dirImg04 from "../assets/board/04_Prasanna_Premaratna.png";
import dirImg05 from "../assets/board/05_Thusantha_Wijemanna.png";
import dirImg06 from "../assets/board/06_Sarath_Nandasiri.png";
import dirImg07 from "../assets/board/07_Conrad_Dias.png";
import dirImg08 from "../assets/board/08_Romani_De_Silva.png";
import dirImg09 from "../assets/board/09_Chandana_Dissanayake.png";
import dirImg10 from "../assets/board/10_B_R_A_Bandara.png";

interface BoardDirectorAsset {
  src: string;
  localPath: string;
  filename: string;
}

const BOARD_DIRECTOR_LOCAL_ASSETS: Record<string, BoardDirectorAsset> = {
  "01": { src: dirImg01, localPath: "src/assets/board/01_Dinithi_Ratnayake.png", filename: "01_Dinithi_Ratnayake.png" },
  "02": { src: dirImg02, localPath: "src/assets/board/02_Kapila_Ariyaratne.png", filename: "02_Kapila_Ariyaratne.png" },
  "03": { src: dirImg03, localPath: "src/assets/board/03_Chaaminda_Kumarasiri.png", filename: "03_Chaaminda_Kumarasiri.png" },
  "04": { src: dirImg04, localPath: "src/assets/board/04_Prasanna_Premaratna.png", filename: "04_Prasanna_Premaratna.png" },
  "05": { src: dirImg05, localPath: "src/assets/board/05_Thusantha_Wijemanna.png", filename: "05_Thusantha_Wijemanna.png" },
  "06": { src: dirImg06, localPath: "src/assets/board/06_Sarath_Nandasiri.png", filename: "06_Sarath_Nandasiri.png" },
  "07": { src: dirImg07, localPath: "src/assets/board/07_Conrad_Dias.png", filename: "07_Conrad_Dias.png" },
  "08": { src: dirImg08, localPath: "src/assets/board/08_Romani_De_Silva.png", filename: "08_Romani_De_Silva.png" },
  "09": { src: dirImg09, localPath: "src/assets/board/09_Chandana_Dissanayake.png", filename: "09_Chandana_Dissanayake.png" },
  "10": { src: dirImg10, localPath: "src/assets/board/10_B_R_A_Bandara.png", filename: "10_B_R_A_Bandara.png" },
};

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
  const boardroomLeadershipImage = branding?.boardroomLeadershipImage || fullTeamBODImage;

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
  const [managerSearch, setManagerSearch] = useState<string>("");

  const selectedDirector = BOARD_MEMBERS.find((d) => d.id === selectedDirectorId);

  const filteredBranchManagers = SENIOR_BRANCH_MANAGERS.filter((m) => {
    if (!managerSearch.trim()) return true;
    const q = managerSearch.toLowerCase().trim();
    return (
      m.name.toLowerCase().includes(q) ||
      m.filename.toLowerCase().includes(q) ||
      m.designation.toLowerCase().includes(q) ||
      m.department.toLowerCase().includes(q)
    );
  });

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
        
        {/* Boardroom leadership showcase picture */}
        <div className="w-full lg:w-72 h-28 rounded-2xl overflow-hidden shadow-md border border-sdb-purple/10 shrink-0 relative group">
          <img
            src={boardroomLeadershipImage}
            alt="SDB Boardroom Governance"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = fullTeamBODImage;
            }}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <span className="absolute bottom-2 left-2 text-[9.5px] font-mono text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
            The Board of Directors
          </span>
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
                image={branding?.ceoImage || "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png"}
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
              {/* Grand Full Team Boardroom Showcase Banner */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-sdb-purple/20 bg-slate-950 group">
                <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] max-h-[520px] overflow-hidden">
                  <img
                    src={branding?.boardImages?.["fullTeam"] || fullTeamBODImage}
                    alt="SDB bank Board of Directors 2025 - Full Team"
                    className="w-full h-full object-cover object-[center_35%] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Cinematic Multi-Stop Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120B24] via-[#120B24]/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#120B24]/60 via-transparent to-[#120B24]/60 pointer-events-none" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 right-4 z-10 hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1230]/80 backdrop-blur-md border border-white/20 text-white shadow-lg text-xs font-mono font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>The Board of Directors</span>
                  </div>

                  {/* Banner Typography & Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sdb-coral/90 text-white text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase mb-2 shadow-md">
                      <span>Official Boardroom Portrait</span>
                      <span>•</span>
                      <span>Annual Report 2025</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-md">
                      The Board of Directors (2025)
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm font-sans max-w-3xl mt-1.5 leading-relaxed drop-shadow">
                      Seated and Standing in the Boardroom, Colombo. Guided by collective vision, banking acumen, and an unwavering commitment to Sri Lanka's MSMEs, agriculture, and cooperative empowerment.
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs font-mono text-slate-200">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        10 Board Members • Fully CBSL Compliant
                      </span>
                    </div>
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

              {/* Individual Single Images for Board of Directors */}
              <div id="board-details-list" className="space-y-6">
                {BOARD_MEMBERS.map((director) => {
                  const asset = BOARD_DIRECTOR_LOCAL_ASSETS[director.id];
                  const localFallback = asset?.src || "";
                  
                  // Priority: Custom branding override -> Local single image file path -> Supabase personnel resolution
                  const customImage = branding?.boardImages?.[director.id];
                  const chairpersonDefault = director.id === "01" ? (branding?.chairpersonImage || localFallback) : null;
                  const ceoDefault = director.id === "02" ? (branding?.ceoImage || localFallback) : null;
                  
                  const resolvedImageUrl = customImage || chairpersonDefault || ceoDefault || localFallback || resolvePersonnelImageUrl(director.name);

                  return (
                    <div
                      key={director.id}
                      className="bg-white border border-sdb-purple/10 hover:border-sdb-purple/25 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-6 md:gap-8 text-left group relative overflow-hidden"
                    >
                      {/* Left Side: Single Portrait Showcase Frame & Path info */}
                      <div className="lg:w-64 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8 shrink-0 justify-between">
                        <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                          {/* 4:5 Executive Portrait Frame */}
                          <div className="relative w-44 sm:w-52 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-sdb-purple/15 shadow-md bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 group-hover:shadow-lg transition-all duration-300">
                            <img
                              src={resolvedImageUrl}
                              alt={director.name}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                if (localFallback && (e.target as HTMLImageElement).src !== localFallback) {
                                  (e.target as HTMLImageElement).src = localFallback;
                                }
                              }}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            
                            {/* Ambient base shadow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center">
                              <span className="text-[10px] font-mono font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full inline-block">
                                Board of Directors
                              </span>
                            </div>
                          </div>

                          {/* Director Name & Designation */}
                          <div className="space-y-1 mt-2 text-center lg:text-left w-full">
                            <h4 className="font-serif text-lg md:text-xl font-bold text-sdb-purple leading-tight group-hover:text-sdb-coral transition-colors duration-300">
                              {director.name}
                            </h4>
                            <p className="text-xs text-sdb-coral font-mono uppercase tracking-wider font-semibold">
                              {director.designation}
                            </p>
                          </div>
                        </div>

                        {/* Status footer */}
                        <div className="mt-5 w-full pt-3 border-t border-slate-100/80 flex items-center justify-between text-xs font-sans text-slate-500">
                          <span className="font-medium text-slate-600">SDB Governance</span>
                          <span className="text-sdb-green font-bold text-[11px] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-sdb-green inline-block" /> Active Cadre
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Detailed Biography & Tenure */}
                      <div className="lg:flex-1 flex flex-col justify-between space-y-4">
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

                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                          <button
                            onClick={() => setSelectedDirectorId(director.id)}
                            className="inline-flex items-center gap-1.5 text-sdb-purple hover:text-sdb-coral transition-colors font-bold cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>View Full Biography Dossier</span>
                          </button>
                          <span className="flex items-center gap-1 text-sdb-green font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-sdb-green" /> CBSL Approved Director
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

              {/* Corporate Executive Management Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-2xl border border-sdb-purple/10 shadow-xs text-left">
                <div>
                  <h3 className="font-serif font-bold text-lg md:text-xl text-sdb-purple">
                    Corporate Executive Management
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Senior executive team leading retail, MSME, credit governance, digital technology, audit, and risk frameworks.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-sdb-purple font-bold uppercase tracking-wider bg-sdb-purple/10 px-3 py-1.5 rounded-xl shrink-0">
                  16 Corporate Executives • CBSL Compliant
                </span>
              </div>

              {/* Executive Grid Cards */}
              <div id="management-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
                {EXECUTIVE_MANAGEMENT.map((exec, idx) => {
                  const portraitUrl = branding?.managementImages?.[exec.name] || resolvePersonnelImageUrl(exec.name);
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-sdb-purple/10 hover:border-sdb-purple/30 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div>
                        {/* High-Resolution Studio Portrait Showcase Frame */}
                        <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 overflow-hidden">
                          {portraitUrl ? (
                            <img
                              src={portraitUrl}
                              alt={exec.name}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-sdb-purple/50 bg-sdb-purple/5">
                              <UserCheck className="w-12 h-12 mb-2 text-sdb-purple/40" />
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sdb-purple/70">Executive</span>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#140C24]/90 via-[#140C24]/20 to-transparent pointer-events-none" />
                          
                          <div className="absolute top-3 left-3">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-sdb-purple/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                              {exec.category || "Corporate Executive"}
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 text-left">
                            <h4 className="font-serif font-bold text-base md:text-lg text-white leading-tight drop-shadow-sm">
                              {exec.name}
                            </h4>
                            <p className="text-[11px] text-sdb-coral font-mono uppercase tracking-wider font-semibold mt-0.5">
                              {exec.designation}
                            </p>
                          </div>
                        </div>

                        {/* Qualifications & Bio Summary */}
                        <div className="p-4 space-y-2.5">
                          {exec.bio && (
                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                              {exec.bio}
                            </p>
                          )}
                          <div className="pt-2 border-t border-slate-100 text-[10.5px] font-mono text-slate-500 leading-snug">
                            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[9px] mb-0.5">Credentials</span>
                            {exec.qualifications}
                          </div>
                        </div>
                      </div>

                      <div className="px-4 pb-3 pt-1 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-50">
                        <span>SDB bank Management</span>
                        <span className="text-sdb-green font-bold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-sdb-green inline-block" /> Active Cadre
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Senior Management & Branch Leadership Network Showcase */}
              <div className="space-y-6 pt-6 border-t border-slate-200/80 text-left">
                {/* Header with Search and Stats */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-sdb-purple/5 via-slate-50 to-white p-6 rounded-3xl border border-sdb-purple/15 shadow-sm">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-sdb-coral font-mono text-xs font-bold uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Island-wide Branch Leadership</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl md:text-2xl text-sdb-purple">
                      Senior Management & Branch Leadership Network
                    </h3>
                    <p className="text-xs text-slate-600 max-w-2xl">
                      Showcasing SDB bank's dedicated regional heads and branch managers serving 94 locations across Sri Lanka, including key leaders like Mr. T. K. Banda.
                    </p>
                  </div>

                  {/* Search Box */}
                  <div className="w-full md:w-72 relative shrink-0">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={managerSearch}
                      onChange={(e) => setManagerSearch(e.target.value)}
                      placeholder="Search by name (e.g. Banda, Kumara)..."
                      className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-sdb-purple/10 shadow-xs"
                    />
                    {managerSearch && (
                      <button
                        onClick={() => setManagerSearch("")}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Count & filter info */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
                  <span>Showing {filteredBranchManagers.length} of {SENIOR_BRANCH_MANAGERS.length} Branch & Regional Leaders</span>
                  <span className="text-[11px] text-slate-500 font-medium">Branch Network • 94 Locations Island-wide</span>
                </div>

                {/* Roster Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {filteredBranchManagers.map((leader, lIdx) => {
                    const isFeatured = leader.filename.includes("T K Banda");
                    return (
                      <div
                        key={lIdx}
                        className={`bg-white rounded-2xl p-3 border transition-all duration-300 flex flex-col justify-between group hover:shadow-md ${
                          isFeatured 
                            ? "border-sdb-coral/70 ring-2 ring-sdb-coral/20 shadow-xs" 
                            : "border-slate-200/80 hover:border-sdb-purple/30"
                        }`}
                      >
                        <div>
                          <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 mb-2.5 border border-slate-100 group-hover:border-sdb-purple/20">
                            <img
                              src={leader.imageUrl}
                              alt={leader.name}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-106"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#140C24]/80 via-transparent to-transparent pointer-events-none" />
                            {isFeatured && (
                              <div className="absolute top-1.5 left-1.5 bg-sdb-coral text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded shadow">
                                FEATURED
                              </div>
                            )}
                          </div>
                          <h5 className="font-serif font-bold text-xs text-sdb-purple leading-tight group-hover:text-sdb-coral transition-colors line-clamp-1">
                            {leader.name}
                          </h5>
                          <p className="text-[10px] text-slate-500 font-sans mt-0.5 line-clamp-2 leading-snug">
                            {leader.designation}
                          </p>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[9px] font-mono text-slate-400">
                          <span>{leader.department.split(" ")[0]}</span>
                          <span className="text-sdb-green font-bold">● Active</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
                {(() => {
                  const modalAsset = BOARD_DIRECTOR_LOCAL_ASSETS[selectedDirector.id];
                  const modalImgUrl =
                    branding?.boardImages?.[selectedDirector.id] ||
                    (selectedDirector.id === "01" ? branding?.chairpersonImage : null) ||
                    (selectedDirector.id === "02" ? branding?.ceoImage : null) ||
                    modalAsset?.src ||
                    resolvePersonnelImageUrl(selectedDirector.name);
                  
                  return modalImgUrl ? (
                    <div className="w-14 h-14 rounded-2xl overflow-hidden border border-sdb-purple/15 shadow-sm shrink-0 bg-slate-100">
                      <img
                        src={modalImgUrl}
                        alt={selectedDirector.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-sdb-purple/5 border border-sdb-purple/10 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      #{selectedDirector.id}
                    </div>
                  );
                })()}
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
