import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BOARD_MEMBERS, EXECUTIVE_MANAGEMENT } from "../data/reportData";
import { Award, User, Quote, BookOpen, UserCheck, ChevronRight, X, Sparkles } from "lucide-react";
import { useBranding } from "./BrandingContext";

type SubSection = "chairperson" | "ceo" | "board" | "management";

export default function LeadershipSection() {
  const { branding } = useBranding();
  const boardroomLeadershipImage = branding?.boardroomLeadershipImage || "/src/assets/images/boardroom_leadership_1783367647402.jpg";

  const [activeTab, setActiveTab] = useState<SubSection>("chairperson");
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
              {/* Profile Card Summary */}
              <div className="lg:col-span-4 glass-card rounded-3xl p-6 flex flex-col items-center text-center shadow-md">
                <div className="w-32 h-32 rounded-full bg-sdb-purple/5 text-sdb-purple border-4 border-sdb-purple/10 flex items-center justify-center mb-4 shadow-inner overflow-hidden">
                  {branding?.chairpersonImage ? (
                    <img
                      src={branding.chairpersonImage}
                      alt="Ms. Dinithi Ratnayake"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-bold text-sdb-purple">Ms. Dinithi Ratnayake</h3>
                <p className="text-xs font-mono text-sdb-coral font-bold uppercase tracking-wider mt-1">Chairperson</p>
                <p className="text-xs text-slate-500 mt-2 italic">Independent, Non-Executive Director</p>
                
                <div className="w-full border-t border-sdb-purple/10 mt-6 pt-4 space-y-3 font-mono text-[11px] text-left text-slate-600">
                  <div className="flex justify-between">
                    <span>Appointed</span>
                    <span className="font-bold text-sdb-purple">2020</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chairperson since</span>
                    <span className="font-bold text-sdb-purple">April 2022</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prior Tenure</span>
                    <span className="font-bold text-sdb-purple">Citibank N.A. Director</span>
                  </div>
                </div>
              </div>

              {/* Message Narrative */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                <div className="glass-card rounded-3xl border-l-4 border-sdb-purple p-6 md:p-8 relative text-left shadow-sm">
                  <Quote className="w-10 h-10 text-sdb-purple/5 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "Responding to emerging economic opportunities, SDB bank recorded improved financial results across all key business segments in 2025. The Bank achieved a Profit Before Tax of LKR 800.17 Mn, reflecting an increase of 16.93% compared to 2024."
                  </p>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    <strong>Dear Stakeholders,</strong>
                  </p>
                  <p>
                    The global economy continued to be strongly adaptive in 2025, amidst shifting geopolitical trends and US policy shocks. Against this backdrop of global recovery and sustained domestic political stability, Sri Lanka too recorded encouraging progress during the year. Overall, this stable environment proved conducive for the banking sector, as stronger demand for credit and financial services boosted banking industry expansion.
                  </p>
                  <p>
                    Your Bank was well prepared to harness the emerging opportunities of 2025. I am therefore pleased to convey the good news that SDB bank concluded 2025 with improved financial performance, while further strengthening the foundation for sustainable future growth.
                  </p>
                  <p>
                    While focusing on growth and profitability, the Bank remained committed to supporting segments that continued to experience the protracted effects of the economic crisis. During the year, we provided relief measures, including tenor reductions and interest concessions, to assist small businesses and individuals in their recovery journey. We are proud to report that at year-end 2025, women accounted for 43% of our total clientele, and our SME portfolio grew by an exceptional 45.41%.
                  </p>
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
              {/* Profile Card Summary */}
              <div className="lg:col-span-4 glass-card rounded-3xl p-6 flex flex-col items-center text-center shadow-md">
                <div className="w-32 h-32 rounded-full bg-sdb-purple/5 text-sdb-purple border-4 border-sdb-purple/10 flex items-center justify-center mb-4 shadow-inner overflow-hidden">
                  {branding?.ceoImage ? (
                    <img
                      src={branding.ceoImage}
                      alt="Mr. Kapila Ariyaratne"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16" />
                  )}
                </div>
                <h3 className="font-serif text-xl font-bold text-sdb-purple">Mr. Kapila Ariyaratne</h3>
                <p className="text-xs font-mono text-sdb-coral font-bold uppercase tracking-wider mt-1">Chief Executive Officer</p>
                <p className="text-xs text-slate-500 mt-2 italic">Executive, Non-Independent Director</p>
                
                <div className="w-full border-t border-sdb-purple/10 mt-6 pt-4 space-y-3 font-mono text-[11px] text-left text-slate-600">
                  <div className="flex justify-between">
                    <span>Appointed</span>
                    <span className="font-bold text-sdb-purple">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Industry Experience</span>
                    <span className="font-bold text-sdb-purple">40+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Education</span>
                    <span className="font-bold text-sdb-purple">First Class Hons, UoC</span>
                  </div>
                </div>
              </div>

              {/* Message Narrative */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                <div className="glass-card rounded-3xl border-l-4 border-sdb-green p-6 md:p-8 relative text-left shadow-sm">
                  <Quote className="w-10 h-10 text-sdb-green/5 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "Following three consecutive years of contraction in the loan portfolio up to 2024, we successfully reversed the downward spiral in 2025. Loans to customers increased by 16.72%, from LKR 99.73 billion to LKR 116.40 billion."
                  </p>
                </div>

                <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  <p>
                    <strong>A Year of Transformation</strong>
                  </p>
                  <p>
                    I am pleased to report a year of transformation for SDB bank in the financial year 2025, marking a decisive turning point in the Bank's history. During the 12 months under review, we strengthened our financial position, governance frameworks, digital capabilities, and human capital, while also building our environmental and social foundation to support sustainable growth over the long term.
                  </p>
                  <p>
                    This growth was achieved through credit expansion across all products and market segments of leasing, pawning, retail banking, and business banking, with total disbursements of over LKR 100 billion during the year. Over 25% of the Bank's total lending during 2025 was channelled into SMEs, reflecting SDB bank's growing contribution to national economic recovery.
                  </p>
                  <p>
                    Our digital transition remains central to our growth agenda. Significant investments have already been made to modernize the technology infrastructure, and this will be the transformation base for the Bank as we move forward. In parallel, we have collaborated with Rabo Partnerships to develop a comprehensive growth strategy for 2026-2029, positioning SDB bank as Sri Lanka's leading partner in agriculture and MSME financing.
                  </p>
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
              {/* Grand Hero Group Portrait Banner */}
              <div id="board-group-hero" className="relative w-full h-64 sm:h-80 md:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-sdb-purple/10 group">
                <img
                  src={boardroomLeadershipImage}
                  alt="SDB Board of Directors Group Session"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Elegant dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sdb-purple/95 via-sdb-purple/40 to-transparent flex flex-col justify-end p-6 md:p-8 text-left">
                  <div className="max-w-3xl space-y-2">
                    <span className="text-[10px] font-mono font-bold text-sdb-coral bg-white/10 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                      Governance & Oversight
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                      Board of Directors Group Portrait
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                      A team of corporate leaders, cooperative pioneers, and industry experts committed to stewardship, integrity, and sustainable value creation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary Bar */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 text-left">
                  Our Board composition bridges rich cooperative values with commercial banking expertise to deliver maximum value to all SDB stakeholders.
                </p>
                <span className="text-[10px] font-mono text-sdb-purple font-bold uppercase tracking-wider bg-sdb-purple/10 px-2.5 py-1 rounded-md shrink-0">
                  9 Board Members
                </span>
              </div>

              {/* Individual Directors' Details underneath */}
              <div id="board-details-list" className="space-y-6">
                {BOARD_MEMBERS.map((director) => {
                  const hasImage = !!branding?.boardImages?.[director.id];
                  const imageUrl = branding?.boardImages?.[director.id];
                  
                  return (
                    <div
                      key={director.id}
                      className="bg-white border border-sdb-purple/5 hover:border-sdb-purple/15 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-6 md:gap-8 text-left group relative overflow-hidden"
                    >
                      {/* Left Side: Avatar/Portrait and Quick Info */}
                      <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-6 lg:pb-0 lg:pr-8 shrink-0 justify-between">
                        <div className="space-y-4 w-full flex flex-col items-center lg:items-start">
                          {/* Portrait Container */}
                          <div className="relative">
                            {hasImage ? (
                              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-sdb-purple/10 shadow-md">
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

                          {/* Director Name and Designation */}
                          <div className="space-y-1 mt-2">
                            <h4 className="font-serif text-lg md:text-xl font-bold text-sdb-purple leading-tight group-hover:text-sdb-coral transition-colors duration-300">
                              {director.name}
                            </h4>
                            <p className="text-xs text-sdb-coral font-mono uppercase tracking-wider font-semibold">
                              {director.designation}
                            </p>
                          </div>
                        </div>

                        {/* Quick Metadata Badge */}
                        <div className="mt-6 w-full pt-4 border-t border-slate-100/80">
                          <span className="inline-block bg-slate-50 text-[10px] font-mono text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100 font-semibold w-full text-center lg:text-left">
                            Active Governance
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Detailed Biography & Appointed Details */}
                      <div className="lg:w-3/4 flex flex-col justify-between space-y-4">
                        <div className="space-y-4">
                          {/* Appointed Banner */}
                          <div className="bg-sdb-purple/5 border-l-4 border-sdb-purple px-4 py-3 rounded-r-xl">
                            <p className="text-xs font-mono font-bold text-sdb-purple uppercase tracking-wider">
                              Tenure & Board Status
                            </p>
                            <p className="text-sm font-semibold text-slate-700 mt-1">
                              {director.appointed}
                            </p>
                          </div>

                          {/* Biography */}
                          <div className="space-y-2">
                            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                              Professional Biography
                            </p>
                            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                              {director.bio}
                            </p>
                          </div>
                        </div>

                        {/* Qualifications or Footer inside card */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                          <span>SDB bank 2025 Board Profile</span>
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
              className="space-y-6"
            >
              {/* Executive Grid */}
              <div id="management-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {EXECUTIVE_MANAGEMENT.map((exec, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 flex flex-col justify-between hover:border-sdb-purple/20 transition-all text-left shadow-md"
                  >
                    <div className="space-y-2">
                      {branding?.managementImages?.[exec.name] ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-sdb-purple/10 shadow-sm mb-2 shrink-0">
                          <img
                            src={branding.managementImages[exec.name]}
                            alt={exec.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-sdb-purple/5 border border-sdb-purple/10 text-sdb-purple flex items-center justify-center">
                          <UserCheck className="w-4 h-4" />
                        </div>
                      )}
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
