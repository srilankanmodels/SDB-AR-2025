import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOARD_MEMBERS, EXECUTIVE_MANAGEMENT, SENIOR_MANAGEMENT, CHIEF_MANAGERS } from "../data/reportData";
import { Award, User, Quote, BookOpen, UserCheck, ChevronRight, X, Sparkles, Calendar, Briefcase, GraduationCap, Search, Building2, ImageIcon, ExternalLink, Download, Users } from "lucide-react";
import { useBranding } from "./BrandingContext";
import { resolvePersonnelImageUrl } from "../utils/supabasePersonnel";

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
  "05": { src: dirImg10, localPath: "src/assets/board/10_B_R_A_Bandara.png", filename: "10_B_R_A_Bandara.png" },
  "06": { src: dirImg05, localPath: "src/assets/board/05_Thusantha_Wijemanna.png", filename: "05_Thusantha_Wijemanna.png" },
  "07": { src: dirImg06, localPath: "src/assets/board/06_Sarath_Nandasiri.png", filename: "06_Sarath_Nandasiri.png" },
  "08": { src: dirImg07, localPath: "src/assets/board/07_Conrad_Dias.png", filename: "07_Conrad_Dias.png" },
  "09": { src: dirImg09, localPath: "src/assets/board/09_Chandana_Dissanayake.png", filename: "09_Chandana_Dissanayake.png" },
  "10": { src: dirImg08, localPath: "src/assets/board/08_Romani_De_Silva.png", filename: "08_Romani_De_Silva.png" },
};

type SubSection = "chairperson" | "ceo" | "board" | "management" | "chief-managers" | "senior";

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
      if (detail && ["chairperson", "ceo", "board", "management", "chief-managers", "senior"].includes(detail)) {
        setActiveTab(detail as SubSection);
      }
    };
    window.addEventListener("set-leadership-tab", handleSetTab);
    return () => {
      window.removeEventListener("set-leadership-tab", handleSetTab);
    };
  }, []);
  const [selectedDirectorId, setSelectedDirectorId] = useState<string | null>(null);
  const [seniorSearch, setSeniorSearch] = useState<string>("");
  const [chiefSearch, setChiefSearch] = useState<string>("");

  const selectedDirector = BOARD_MEMBERS.find((d) => d.id === selectedDirectorId);

  const filteredSeniorManagers = SENIOR_MANAGEMENT.filter((m) => {
    if (!seniorSearch.trim()) return true;
    const q = seniorSearch.toLowerCase().trim();
    return (
      m.name.toLowerCase().includes(q) ||
      m.designation.toLowerCase().includes(q) ||
      (m.department && m.department.toLowerCase().includes(q)) ||
      (m.qualifications && m.qualifications.toLowerCase().includes(q))
    );
  });

  const filteredChiefManagers = CHIEF_MANAGERS.filter((m) => {
    if (!chiefSearch.trim()) return true;
    const q = chiefSearch.toLowerCase().trim();
    return (
      m.name.toLowerCase().includes(q) ||
      m.designation.toLowerCase().includes(q) ||
      (m.department && m.department.toLowerCase().includes(q)) ||
      (m.qualifications && m.qualifications.toLowerCase().includes(q))
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
          { id: "management", label: "Corporate Management" },
          { id: "chief-managers", label: "Chief Managers" },
          { id: "senior", label: "Senior Management" }
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
                {/* Official PDF Action Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-sdb-purple/10 via-sdb-purple/5 to-white border border-sdb-purple/20 p-4 rounded-2xl">
                  <div className="flex items-center space-x-2.5">
                    <BookOpen className="w-5 h-5 text-sdb-purple shrink-0" />
                    <div className="text-left">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple">Chairperson’s Message (Official Audited Report)</h5>
                      <p className="text-xs text-slate-500 font-mono">Pages 43–45 of Published Annual Report</p>
                    </div>
                  </div>
                  <a
                    href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=44"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-sdb-purple hover:bg-sdb-purple-dark text-white px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-sm shrink-0"
                  >
                    <span>Read Full Message in PDF (Pages 43–45)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Highlight Quote */}
                <div className="glass-card rounded-3xl border-l-4 border-sdb-purple p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-r from-sdb-purple/5 to-transparent">
                  <Quote className="w-10 h-10 text-sdb-purple/10 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "Responding to emerging economic opportunities, SDB bank recorded improved financial results across all key business segments in the financial year 2025. The Bank achieved a Profit Before Tax of LKR 800.17 Mn, reflecting an increase of 16.93% compared to 2024. This performance was supported by expansion across our core portfolios, while also improving asset quality, with Impaired Loans (Stage 03) to total loans declining from 6.93% to 5.36%."
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-sdb-purple/10 text-xs font-mono">
                    <span className="bg-sdb-purple/10 text-sdb-purple px-3 py-1 rounded-full font-bold">PBT: LKR 800.17 Mn (+16.93%)</span>
                    <span className="bg-emerald-500/10 text-emerald-700 px-3 py-1 rounded-full font-bold">Stage 3 Ratio: 5.36% (from 6.93%)</span>
                    <span className="bg-amber-500/10 text-amber-800 px-3 py-1 rounded-full font-bold">SME Portfolio: +45.41% Growth</span>
                    <span className="bg-pink-500/10 text-pink-700 px-3 py-1 rounded-full font-bold">Female Clientele: 43%</span>
                  </div>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Dear Stakeholders,
                    </h4>
                    <p>
                      The global economy continued to be strongly adaptive in 2025, amidst shifting geopolitical trends and US policy shocks. International trade remained relatively robust, supported by stabilising trade tensions towards the third quarter, and strong private sector investments in advanced technologies, particularly Artificial Intelligence. Against this backdrop of global recovery and sustained domestic political stability, Sri Lanka too recorded encouraging progress during the year.
                    </p>
                    <p>
                      Economic growth was supported by declining interest rates and a period of deflation that prevailed until around August. The most significant distraction to sustained growth was Cyclone Ditwah, at the end of November 2025, which temporarily disrupted economic activity across the entire country. However, the swift recovery once again demonstrated the remarkable resilience of the Sri Lankan people. Overall, this stable environment proved conducive for the banking sector, as stronger demand for credit and financial services boosted banking industry expansion.
                    </p>
                    <p>
                      Your Bank was well prepared to harness the emerging opportunities of 2025. I am therefore pleased to convey the good news that SDB bank concluded 2025 with improved financial performance, while further strengthening the foundation for sustainable future growth.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Our Performance in a Nutshell
                    </h4>
                    <p>
                      Responding to emerging economic opportunities, SDB bank recorded improved financial results across all key business segments in the financial year 2025. The Bank achieved a Profit Before Tax of LKR 800.17 Mn, reflecting an increase of 16.93% compared to 2024. This performance was supported by expansion across our core portfolios, while also improving asset quality, with Impaired Loans (Stage 03) to total loans declining from 6.93% to 5.36% as of December 31, 2025.
                    </p>
                    <p>
                      While focusing on growth and profitability, the Bank remained committed to supporting segments that continued to experience the protracted effects of the economic crisis. During the year, we provided relief measures, including tenor reductions and interest concessions, to assist small businesses and individuals in their recovery journey.
                    </p>
                    <p>
                      We also maintained our business philosophy of inclusivity and diversity, ensuring that our business model is closely aligned with the country’s development priorities, through our strong focus on SMEs and women entrepreneurs. In 2025, the SME portfolio grew by 45.41% in keeping with the bank’s priority of supporting the financial needs of the sector. We’re proud to report that at year-end 2025, women accounted for 43% of our total clientele.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Empowering Grassroots Cooperatives & Inclusive Communities
                    </h4>
                    <p>
                      Co-operatives form another significant client segment of our bank, given our history of being established by the Sanasa Co-operative movement. The strong relationships with co-operatives have led to the bank’s close ties with communities across the country. By channelling finance and advisory services to these communities, we are helping stimulate economic activity at the grassroots. Through our focus on agriculture and value-chain financing, we are also linking these enterprises with broader markets, thereby fostering sustainable economic ecosystems.
                    </p>
                    <p>
                      In 2025, we continued to strengthen the partnership with co-operatives by providing technical support and financial literacy education, digital access to societies across the country and designating a priority counter at our branches, in recognition of their loyalty to the bank. Through its membership, the co-operative network also indirectly connects the bank to a large group of women entrepreneurs. We continue to develop new ways of engaging with the island-wide network of cooperatives by leveraging digital solutions. We are of the view that the next generation of youth leaders and membership of co-operatives will be quick to adopt digital solutions, indicating a new era of possibilities.
                    </p>
                    <p>
                      In addition, we are extending our SME facilities to cooperative-linked enterprises that are ready to upscale. This includes the full range of financial, advisory, and digital banking services to modernise and integrate these businesses into bigger markets. Through this approach, the Bank is gradually extending its influence upwards, from micro-enterprises to medium-sized SMEs, and cementing long-term relationships based on mutual trust.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Strategic Progress & Agri-Financing
                    </h4>
                    <p>
                      Under our Agri-Financing and Value Chain strategy, we have commenced engaging SMEs operating in strategic growth areas of Sri Lanka’s food and agriculture sector. To ensure our interventions are both practical and sustainable, we are also working closely with leading agricultural specialists. These efforts will also contribute towards enhancing national food security and foreign exchange earnings.
                    </p>
                    <p>
                      The Rural Upliftment Programme, which was launched in 2024, is now gaining traction, and we have engagements across the country. During the year, the programme grew to 3,991 beneficiaries onboarding over 80 entrepreneurs, with a large share of women and cooperatives. We are working on projects such as the Heritage Hands, which is manufacturing Kitul products in Deraniyagala, sustainable tourism in Attanagalla, Walawwita, and Avissawella, and livelihood development programmes for fishing communities in the area between Kuchchaveli and Uppuweli, to name a few ongoing initiatives.
                    </p>
                    <p>
                      Although our formal collaboration with USAID concluded during the year, the Bank remains committed to strengthening its climate adaptation capabilities in response to the growing challenges posed by climate change.
                    </p>
                    <p>
                      Digitisation remains another strategic priority. We continued to enhance operational efficiencies and streamline internal processes while improving customer accessibility through digital channels. Our digital onboarding capability allows customers to open accounts remotely through multilingual platforms, promoting financial inclusion. The SDB Upay application, functioning both as a banking app and a digital wallet, offers advanced features that place SDB Bank at the forefront of digital banking innovation within the sector.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Ensuring Good Governance & Board Oversight
                    </h4>
                    <p>
                      I am pleased with the progress made during the year in strengthening the Bank’s governance, risk management, and compliance frameworks. The Bank successfully met all compliance requirements under the new Banking Act for the 2025 financial year and continues to enhance its regulatory and governance standards.
                    </p>
                    <p>
                      We also completed the planned improvements in portfolio underwriting standards and credit risk frameworks that were identified during the 2024 review of our risk models. Comprehensive training programmes were conducted to strengthen staff capabilities in these areas, ensuring that the Bank is well-positioned to manage the evolving risk landscape. While our development-oriented approach focuses on empowering SMEs and cooperative-based enterprises, we continue to adopt prudent, risk-based pricing mechanisms to safeguard the Bank’s financial sustainability.
                    </p>
                    <p>
                      The Board, meanwhile, met regularly to ensure strong governance and effective oversight. I also take this opportunity to remember Mr Naveendra Sooriyarachchi, who passed away during the year. Mr Sooriyarachchi was a member of the SDB Bank Board from 2021 as a Non-Executive, Non-Independent Director, and I extend my sincere appreciation for the invaluable support and guidance he provided throughout his tenure.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Charting a New, Sustainable Course
                    </h4>
                    <p>
                      During the year, we worked closely with Rabo Partnerships to develop a comprehensive three-year growth strategy that will guide SDB Bank’s next phase of development from 2026 to 2029. Representing a transformative shift, the bank will also work towards ensuring that the strategy is aligned with the Sustainability Standards and Certification Initiative (SSCI), which is an internationally recognised framework that supports financial institutions to transition towards sustainable business models.
                    </p>
                    <p>
                      A central part of the Bank’s transformation will be the systematic measurement of the impacts of all our activities, which would make SDB bank unique among financial services providers in the country. This transformation will be a gradual process unfolding over the coming years, and will encompass all operations and personnel, fundamentally reshaping how the Bank functions.
                    </p>
                    <p>
                      We have already taken the first steps toward this vision. In the current financial year, we refined the Bank’s purpose to align with this strategic objective and established a set of high-impact goals linked to both the United Nations Sustainable Development Goals and Sri Lanka’s national development agenda. Additionally, we have begun integrating impact measurement into our projects and portfolios. We believe that this data-driven approach will enable the Bank to not only measure its socio-economic and environmental contributions, but also to focus on areas where it can have the greatest impact.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Plans for the Future
                    </h4>
                    <p>
                      SDB bank concluded 2025 on the cusp of a transformative journey, having completed much of the groundwork required to support its next phase of transition. As we operationalise our new strategy in 2026, we will remain attentive to global developments and their potential impact on the Sri Lankan economy.
                    </p>
                    <p>
                      We will also evaluate opportunities arising from the Central Bank’s proposed consolidation plans for the banking sector. While the Bank remains open to potential partnerships that could strengthen our asset base and earnings, our priority remains to preserve our unique identity as a development-focused bank with a longstanding commitment to the SME and cooperative sectors.
                    </p>
                    <p>
                      Going forward, our short-term priorities will remain firmly aligned with our strategic roadmap, and we will continue to leverage innovative solutions to enhance our value proposition, while remaining alert to emerging opportunities.
                    </p>
                  </div>

                  <div className="bg-sdb-purple/5 p-6 rounded-2xl border border-sdb-purple/10 space-y-3">
                    <h5 className="font-serif font-bold text-sdb-purple">Appreciation & Acknowledgements</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      In closing, I would like to extend my sincere gratitude to our shareholders for their continued trust, confidence, and support. I also wish to thank our valued customers who have accompanied us through this journey of transformation. My appreciation also goes to my colleagues on the Board, our Corporate Management team, and the entire SDB bank staff for their dedication and hard work during the year. I also acknowledge the valuable contributions of our international partners, whose expertise and experience continue to support our journey. Finally, I extend my thanks to our regulators, lenders, and all other stakeholders for their continued guidance and support. I am confident our continued collaborations will yield greater value for all stakeholders in the future.
                    </p>
                    <div className="pt-2 text-right font-serif font-bold text-sdb-purple text-sm">
                      Ms. Dinithi Ratnayake<br />
                      <span className="font-sans text-xs font-normal text-sdb-coral">Chairperson - Non-Executive, Independent Director</span><br />
                      <span className="text-[11px] font-mono text-slate-400 font-normal">4th May 2026 | Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <a
                      href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold font-mono text-sdb-purple hover:text-sdb-coral transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download / Read Full Chairperson's Message in Audited PDF (Pages 43–45)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                {/* Official PDF Action Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-600/10 via-emerald-600/5 to-white border border-emerald-600/20 p-4 rounded-2xl">
                  <div className="flex items-center space-x-2.5">
                    <BookOpen className="w-5 h-5 text-emerald-800 shrink-0" />
                    <div className="text-left">
                      <h5 className="font-serif font-bold text-sm text-emerald-900">CEO's Strategic Review (Official Audited Report)</h5>
                      <p className="text-xs text-slate-500 font-mono">Pages 47–49 of Published Annual Report</p>
                    </div>
                  </div>
                  <a
                    href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-sm shrink-0"
                  >
                    <span>Read Full Review in PDF (Pages 47–49)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Highlight Quote */}
                <div className="glass-card rounded-3xl border-l-4 border-sdb-green p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-r from-sdb-green/5 to-transparent">
                  <Quote className="w-10 h-10 text-sdb-green/10 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "I am pleased to report a year of transformation for SDB bank in the financial year 2025, marking a decisive turning point in the Bank’s history. Following three consecutive years of contraction in the loan portfolio up to 2024, we successfully reversed the downward spiral in 2025. Loans to customers increased by 16.72%, from LKR 99.73 billion as at end-December 2024, to LKR 116.40 billion by end-December 2025."
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-sdb-green/20 text-xs font-mono">
                    <span className="bg-emerald-500/10 text-emerald-700 px-3 py-1 rounded-full font-bold">Loan Portfolio: LKR 116.40 Bn (+16.72%)</span>
                    <span className="bg-sdb-purple/10 text-sdb-purple px-3 py-1 rounded-full font-bold">Disbursements: Exceeded LKR 100 Bn</span>
                    <span className="bg-amber-500/10 text-amber-800 px-3 py-1 rounded-full font-bold">PBT Growth: +16.94% to LKR 800 Mn</span>
                    <span className="bg-blue-500/10 text-blue-700 px-3 py-1 rounded-full font-bold">Fee Income: LKR 716 Mn</span>
                  </div>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      A Decisive Turning Point in SDB Bank's History
                    </h4>
                    <p>
                      I am pleased to report a year of transformation for SDB bank in the financial year 2025, marking a decisive turning point in the Bank’s history. During the 12 months under review, we strengthened our financial position, governance frameworks, digital capabilities, and human capital, while also building our environmental and social foundation to support sustainable growth over the long term.
                    </p>
                    <p>
                      We also deepened our economic impact through the Rural Upliftment Programme. In 2025, SDB bank was privileged to contribute to Sri Lanka’s national economic development through this programme by promoting women’s entrepreneurship, advancing community-based tourism, developing essential infrastructure, and enhancing financial literacy. By encouraging women’s entrepreneurship in cottage industries in the North Central, North Western, Central, and Sabaragamuwa provinces, the Bank helped break the cycle of poverty and empowered groups that were previously marginalised to become active contributors to national growth.
                    </p>
                    <p>
                      Estate sector women, who traditionally had limited opportunities beyond daily wage labour, were supported through the introduction of machinery centres and training programmes designed to fit their daily routines, enabling them to transition into budding entrepreneurs. In collaboration with the Western Province Tourism Board, SDB bank also promoted community-based tourism, honouring Sri Lanka’s unique culture and traditions, while contributing to a turning point in the tourism industry.
                    </p>
                    <p>
                      Furthermore, the Bank encouraged value-added production using underutilised local resources such as jackfruit, pumpkin, and indigenous fruits, thereby strengthening national production and creating new economic opportunities for rural communities. These efforts reflect SDB bank’s commitment to fulfilling its national responsibility as Sri Lanka’s only private development bank, empowering communities, fostering entrepreneurship, and promoting sustainable industries in order to advance inclusive economic development.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      A Year of Transformation & Loan Portfolio Reversal
                    </h4>
                    <p>
                      The Bank’s financial position improved significantly. Following three consecutive years of contraction in the loan portfolio up to 2024, we successfully reversed the downward spiral in 2025. Loans to customers increased by 16.72%, from LKR 99.73 billion as at end-December 2024, to LKR 116.40 billion by end-December 2025.
                    </p>
                    <p>
                      This growth was achieved through credit expansion across all products and market segments of leasing, pawning, retail banking and business banking, with total disbursements of over LKR 100 billion during the year. We remained the bank of choice to Sri Lanka’s cooperative sector, while also expanding our footprint in the SME segment. Over 25% of the Bank’s total lending during 2025 was channelled into SMEs, reflecting SDB bank’s growing contribution to national economic recovery and inclusive growth during the year.
                    </p>
                    <p>
                      Despite the expansion of the loan book, asset quality improved, with a reduction in the overall Impaired Loans (Stage 3) to total loan Ratio (%) from 6.93% in 2024 to 5.36%. This reflects disciplined credit underwriting, effective portfolio monitoring, and a strong emphasis on maintaining quality in all new lending.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Customer Rehabilitation & Resolving Legacy Portfolios
                    </h4>
                    <p>
                      As a development bank, our mandate extends beyond short-term profitability to supporting long-term economic and social development. However, the combined effects of the COVID-19 pandemic and the subsequent economic crisis resulted in many customers experiencing cash flow problems as well as repayment tenor extensions due to steep interest rate fluctuations during the crisis. We responded by extending repayment periods, providing targeted relief to borrowers, and continuing to prioritise customer rehabilitation.
                    </p>
                    <p>
                      We have also focused on resolving legacy portfolio challenges arising from tenor extensions. Approximately 12,000 customers benefited from loan restructurings in 2025, with many able to access additional financing under improved terms. These measures helped resolve nearly one-third of the previously troubled portfolio, representing substantial progress in strengthening the financial position of the affected customers as well as our balance sheet.
                    </p>
                    <p>
                      We also expended approximately LKR 1 billion in providing relief to affected customers, which eroded our profitability for the year. Nevertheless, despite these interventions, we have increased our profitability (PBT) year-on-year, from LKR 684 Mn in 2024 to LKR 800 Mn, which is a growth of 16.94%. We also targeted higher fee income through avenues such as Bancassurance while minimising leakages through automation of processes as well as close monitoring. Our fee income accordingly improved from LKR 631 Mn in 2024 to LKR 716 Mn in 2025. We intend to focus on this further in the coming year enriching our revenue mix.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Managing External Shocks
                    </h4>
                    <p>
                      The adverse impact of Cyclone Ditwah on Sri Lanka’s agriculture sector posed a significant national challenge. However, as the event occurred during the tail end of the year, in November 2025, its impact on the Bank’s overall annual performance was minimal. While branches in Kaduwela, Ekala and Giriulla sustained significant damage, operations were restored within a few days, with no loss of customer data, or material inconvenience to customers.
                    </p>
                    <p>
                      A few community development projects under our Rural Upliftment Programme, particularly in agriculture, in areas such as Ududumbara, were also affected. These losses are not a material threat to the Bank’s financial stability and the projects will be reviewed and revived. We are also considering the integration of enhanced climate resilience strategies, such as smart agriculture solutions.
                    </p>
                    <p>
                      To address potential food shortages due to the widespread destruction of crops, we have also initiated short-term crop cultivations in unaffected provinces, with harvests expected to reach markets by early 2026. A new processing centre for fish and seaweed will also be opened in Trincomalee town in 2026, which will improve the nutritional status of low-income communities. Increasing the harvest from the ocean can also soften the impact of agricultural losses. In fact, we are involved in some highly impactful development projects under our Rural Upliftment Programme, mainly through our cooperative connections, and I urge our stakeholders to refer to the Social Capital chapter for details on these projects.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Sustainable Transformation & Digital Roadmap
                    </h4>
                    <p>
                      A key aspect of our ongoing transformation is our new corporate strategy that will guide the Bank over the three years from 2026 to 2029. This strategy was formulated in collaboration with Rabo Partnerships, a wholly owned subsidiary of Rabobank, drawing on its deep expertise in cooperative banking, agriculture finance, food security and financial inclusion. We have also developed a dedicated agri-financing model that is aimed at positioning SDB bank as a key development partner for the country’s agriculture sector over the long term. Therefore, we are now equipped with a clear roadmap for sustained transformation and growth, targeting greater positive social and environmental impacts.
                    </p>
                    <p>
                      Another significant development in 2025 was bringing previously dispersed departments under one roof in Colombo as a second head office. This will significantly smooth back-end processing as we scale up our SME, pawning, leasing and cooperative banking portfolios in the new financial year.
                    </p>
                    <p>
                      The digital transition remains central to our growth agenda. Significant investments have already been made in the previous year to modernise the technology infrastructure, and this will be the transformation base for the Bank as we move forward. We are also introducing digital solutions to cooperative societies and SMEs, and are gradually connecting them to value chains and markets. Our value chain financing initiatives have continued to expand during the year, creating new avenues for SME growth, particularly in the agriculture, dairy and fishing sectors, by linking smaller enterprises to the supply chains of larger corporates and providing more secure market access.
                    </p>
                    <p>
                      In parallel with these developments, we have invested in upskilling, talent acquisition and leadership development across the Bank to align our skill sets with strategic priorities and evolving market demands.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Outlook & Navigating Challenges
                    </h4>
                    <p>
                      We have concluded 2025 with SDB bank well-positioned to deliver consistent growth over the medium term. Given the central role of agriculture in Sri Lanka’s economy, exports, livelihoods and food security, SDB bank will continue to expand its role in the country’s SME and agriculture sectors, while also expanding our share in other economic areas.
                    </p>
                    <p>
                      We are also cognisant of the inherent climate-related risks and external uncertainties we face, particularly when expanding our presence in agriculture. However, I am confident that SDB bank’s strategy of selective sector participation, careful risk assessments, strengthening the balance sheet and enhanced organisational capability will enable us to navigate future challenges with resilience. Accordingly, we anticipate maintaining positive growth momentum in 2026.
                    </p>
                  </div>

                  <div className="bg-sdb-green/5 p-6 rounded-2xl border border-sdb-green/10 space-y-3">
                    <h5 className="font-serif font-bold text-sdb-purple">Appreciation & Valued Partnerships</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      I conclude my message by extending my sincere appreciation to our major shareholders for their continued confidence and support, and in particular to Rabo Partnerships for its contributions to our strategic transformation. During the year, FMO exited as a major shareholder. Nevertheless, we continue to maintain a close, constructive working relationship, with FMO remaining a strategic stakeholder and contributor in our planning process. We also expanded our network of partnerships, particularly within agriculture and rural development initiatives, and I gratefully acknowledge the support we have received from all of them. I am grateful for the prudent guidance of the Board of Directors, and for the dedication and commitment of our management team and staff, who have worked tirelessly to deliver the performance outcomes of this year. Above all, I thank our customers, whose trust and partnership remain our greatest strength. As we enter a new era of growth and opportunity, we look forward to continuing this journey together.
                    </p>
                    <div className="pt-2 text-right font-serif font-bold text-sdb-purple text-sm">
                      Mr. Kapila Ariyaratne<br />
                      <span className="font-sans text-xs font-normal text-sdb-green">Chief Executive Officer</span><br />
                      <span className="text-[11px] font-mono text-slate-400 font-normal">4th May 2026 | Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <a
                      href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold font-mono text-emerald-800 hover:text-sdb-coral transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download / Read Full CEO's Review in Audited PDF (Pages 47–49)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
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
                  const portraitUrl = exec.imageUrl || branding?.managementImages?.[exec.name] || resolvePersonnelImageUrl(exec.name);
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

              {/* Quick Navigation to Chief & Senior Management */}
              <div className="pt-8 border-t border-slate-200/80 text-left">
                <div className="bg-gradient-to-r from-sdb-purple/5 via-slate-50 to-white p-6 rounded-3xl border border-sdb-purple/15 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                  <div className="space-y-1 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 text-sdb-coral font-mono text-xs font-bold uppercase tracking-wider">
                      <Users className="w-3.5 h-3.5" />
                      <span>Extended Leadership Cadre</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-sdb-purple">
                      Chief Managers &amp; Senior Management Team
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      SDB bank's executive hierarchy extends across 13 Chief Managers and 50 Senior Management leaders directing operations, credit risk, retail recoveries, and provincial banking island-wide.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("chief-managers")}
                      className="px-4 py-2.5 bg-sdb-purple hover:bg-sdb-purple/90 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <Building2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>Chief Managers ({CHIEF_MANAGERS.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("senior")}
                      className="px-4 py-2.5 bg-white hover:bg-sdb-purple/5 text-sdb-purple border border-sdb-purple/20 rounded-xl text-xs font-mono font-bold transition-all shadow-xs hover:border-sdb-purple/40 flex items-center gap-2 cursor-pointer"
                    >
                      <Users className="w-3.5 h-3.5 text-sdb-coral" />
                      <span>Senior Management ({SENIOR_MANAGEMENT.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "chief-managers" && (
            <motion.div
              key="chief-managers"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 text-left"
            >
              {/* Header with Search and Stats */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-sdb-purple/5 via-slate-50 to-white p-6 rounded-3xl border border-sdb-purple/15 shadow-sm">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-sdb-coral font-mono text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Annual Report Pages 59–60</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-sdb-purple">
                    Chief Managers Roster
                  </h3>
                  <p className="text-xs text-slate-600 max-w-2xl">
                    Official Chief Managers leading administration, branch banking units, recoveries, regional supervision, internal audit, and IT systems.
                  </p>
                </div>

                {/* Search Box */}
                <div className="w-full md:w-80 relative shrink-0">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={chiefSearch}
                    onChange={(e) => setChiefSearch(e.target.value)}
                    placeholder="Search by name, title or area..."
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-sdb-purple/10 shadow-xs"
                  />
                  {chiefSearch && (
                    <button
                      onClick={() => setChiefSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Count Info */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
                <span>Showing {filteredChiefManagers.length} of {CHIEF_MANAGERS.length} Chief Managers</span>
                <span className="text-[11px] text-slate-500 font-medium">Pages 59–60 • Official Publication</span>
              </div>

              {/* Chief Managers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredChiefManagers.map((cm, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-sdb-purple/10 hover:border-sdb-purple/30 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Portrait Frame */}
                      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 overflow-hidden">
                        {cm.imageUrl ? (
                          <img
                            src={cm.imageUrl}
                            alt={cm.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-sdb-purple/50 bg-sdb-purple/5">
                            <UserCheck className="w-12 h-12 mb-2 text-sdb-purple/40" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sdb-purple/70">Chief Manager</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#140C24]/90 via-[#140C24]/20 to-transparent pointer-events-none" />

                        {cm.category && (
                          <div className="absolute top-3 left-3">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-sdb-purple/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                              {cm.category}
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <h4 className="font-serif font-bold text-base text-white leading-tight drop-shadow-sm">
                            {cm.name}
                          </h4>
                          <p className="text-[11px] text-sdb-coral font-mono uppercase tracking-wider font-semibold mt-0.5 line-clamp-2">
                            {cm.designation}
                          </p>
                        </div>
                      </div>

                      {/* Credentials */}
                      <div className="p-4 space-y-2.5 text-left">
                        {cm.qualifications && (
                          <div className="text-[10.5px] font-mono text-slate-600 leading-snug">
                            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[9px] mb-0.5">Credentials</span>
                            <p className="line-clamp-3">{cm.qualifications}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-1 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-50">
                      <span className="truncate max-w-[170px]">{cm.department || "Head Office Unit"}</span>
                      <span className="text-sdb-green font-bold flex items-center gap-1 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sdb-green inline-block" /> Active Cadre
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "senior" && (
            <motion.div
              key="senior"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 text-left"
            >
              {/* Header with Search and Stats */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-r from-sdb-purple/5 via-slate-50 to-white p-6 rounded-3xl border border-sdb-purple/15 shadow-sm">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-sdb-coral font-mono text-xs font-bold uppercase tracking-wider">
                    <Users className="w-3.5 h-3.5" />
                    <span>Annual Report Pages 61–66</span>
                  </div>
                  <h3 className="font-serif font-bold text-xl md:text-2xl text-sdb-purple">
                    Senior Management Team
                  </h3>
                  <p className="text-xs text-slate-600 max-w-2xl">
                    Official Senior Management cadre of 50 leaders managing provincial divisions, centralized operations, leasing, credit risk models, recovery enforcement, and branch hubs.
                  </p>
                </div>

                {/* Search Box */}
                <div className="w-full md:w-80 relative shrink-0">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={seniorSearch}
                    onChange={(e) => setSeniorSearch(e.target.value)}
                    placeholder="Search by name, title or region..."
                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-xs font-sans focus:outline-none focus:ring-2 focus:ring-sdb-purple/10 shadow-xs"
                  />
                  {seniorSearch && (
                    <button
                      onClick={() => setSeniorSearch("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 text-xs cursor-pointer"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Count Info */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
                <span>Showing {filteredSeniorManagers.length} of {SENIOR_MANAGEMENT.length} Senior Leaders</span>
                <span className="text-[11px] text-slate-500 font-medium">Pages 61–66 • Official Publication</span>
              </div>

              {/* Senior Management Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {filteredSeniorManagers.map((mgr, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-sdb-purple/10 hover:border-sdb-purple/30 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Portrait Frame */}
                      <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 overflow-hidden">
                        {mgr.imageUrl ? (
                          <img
                            src={mgr.imageUrl}
                            alt={mgr.name}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-sdb-purple/50 bg-sdb-purple/5">
                            <UserCheck className="w-12 h-12 mb-2 text-sdb-purple/40" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sdb-purple/70">Leader</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#140C24]/90 via-[#140C24]/20 to-transparent pointer-events-none" />

                        {mgr.category && (
                          <div className="absolute top-3 left-3">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white bg-sdb-purple/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 shadow-sm">
                              {mgr.category}
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-3 left-3 right-3 text-left">
                          <h4 className="font-serif font-bold text-base text-white leading-tight drop-shadow-sm">
                            {mgr.name}
                          </h4>
                          <p className="text-[11px] text-sdb-coral font-mono uppercase tracking-wider font-semibold mt-0.5 line-clamp-2">
                            {mgr.designation}
                          </p>
                        </div>
                      </div>

                      {/* Credentials */}
                      <div className="p-4 space-y-2.5 text-left">
                        {mgr.qualifications && (
                          <div className="text-[10.5px] font-mono text-slate-600 leading-snug">
                            <span className="text-slate-400 font-semibold uppercase tracking-wider block text-[9px] mb-0.5">Credentials</span>
                            <p className="line-clamp-3">{mgr.qualifications}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-1 text-[10px] font-mono text-slate-400 flex items-center justify-between border-t border-slate-50">
                      <span className="truncate max-w-[150px]">{mgr.department || "Operations"}</span>
                      <span className="text-sdb-green font-bold flex items-center gap-1 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-sdb-green inline-block" /> Active Cadre
                      </span>
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
