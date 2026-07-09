/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, Scale, Users, CheckCircle2, TrendingUp, AlertTriangle, 
  Activity, Award, FileText, ChevronRight, Check, CheckSquare, Layers, ShieldAlert 
} from "lucide-react";
import { useBranding } from "./BrandingContext";

type SubTab = "governance" | "risk";

interface Committee {
  name: string;
  chairperson: string;
  composition: string;
  focusArea: string;
  meetings2025: number;
  responsibilities: string[];
}

interface RiskItem {
  id: string;
  category: string;
  title: string;
  likelihood: "High" | "Medium" | "Low";
  impact: "High" | "Medium" | "Low";
  trend: "Increasing" | "Stable" | "Decreasing";
  description: string;
  mitigations: string[];
}

const COMMITTEES: Committee[] = [
  {
    name: "Audit Committee",
    chairperson: "Independent Non-Executive Director",
    composition: "3 Independent Non-Executive Directors",
    focusArea: "Financial Reporting Integrity, Internal Controls & External Audit Coordination",
    meetings2025: 8,
    responsibilities: [
      "Reviewing the integrity and accuracy of the annual and quarterly financial statements.",
      "Ensuring compliance with Sri Lanka Accounting Standards (SLFRS/LKAS) and regulatory requirements.",
      "Overseeing the performance and independence of internal audit and statutory external auditors.",
      "Evaluating the adequacy of internal financial control frameworks and whistleblowing systems."
    ]
  },
  {
    name: "Integrated Risk Management Committee (IRMC)",
    chairperson: "Independent Non-Executive Director",
    composition: "3 Directors (Non-Executive) & Executive Officers (CRO, CEO)",
    focusArea: "Enterprise Risk Assessment, Capital Adequacy & Regulatory Compliance",
    meetings2025: 6,
    responsibilities: [
      "Reviewing SDB's overall risk appetite statements and stress-testing parameters.",
      "Monitoring credit risk concentrations, non-performing loans (NPLs), and market volatility.",
      "Overseeing the implementation of the Environmental and Social Management System (ESMS).",
      "Evaluating capital adequacy metrics in compliance with CBSL's Basel III framework."
    ]
  },
  {
    name: "Human Resources & Remuneration Committee",
    chairperson: "Non-Executive Director",
    composition: "3 Non-Executive Directors",
    focusArea: "Executive Compensation, Talent Retention & Performance Frameworks",
    meetings2025: 4,
    responsibilities: [
      "Setting the remuneration policy for the Chief Executive Officer and senior corporate executives.",
      "Overseeing succession planning for critical leadership roles within the bank.",
      "Developing incentive systems aligned with the bank's long-term risk appetite.",
      "Ensuring fair and competitive employment standards across all SDB branches."
    ]
  },
  {
    name: "Related Party Transactions Review Committee (RPTRC)",
    chairperson: "Independent Non-Executive Director",
    composition: "3 Non-Executive Directors & Chief Financial Officer (by invitation)",
    focusArea: "Related Party Compliance & Conflict of Interest Prevention",
    meetings2025: 4,
    responsibilities: [
      "Reviewing all proposed related party transactions to ensure arm's length commercial pricing.",
      "Preventing conflicts of interest and ensuring transparency in all transaction disclosures.",
      "Reporting related party findings directly to the Board of Directors and the CSE."
    ]
  },
  {
    name: "Nomination Committee",
    chairperson: "Independent Non-Executive Director",
    composition: "3 Non-Executive Directors",
    focusArea: "Board Composition, Skills Gap Analysis & Director Elections",
    meetings2025: 3,
    responsibilities: [
      "Evaluating the skills, diversity, and independence of Board members.",
      "Recommending the appointment of new directors in compliance with CBSL fit and proper rules.",
      "Overseeing self-evaluation procedures for the Board and individual committees."
    ]
  }
];

const RISK_ITEMS: RiskItem[] = [
  {
    id: "risk-1",
    category: "Credit Risk",
    title: "Micro and SME Loan Book Asset Quality",
    likelihood: "Medium",
    impact: "High",
    trend: "Decreasing",
    description: "Exposure to default in the microfinance and SME sectors due to persistent economic recovery headwinds and fluctuations in tea smallholder income.",
    mitigations: [
      "Enhanced pre-credit appraisals with standardized field evaluations for primary cooperative societies.",
      "Dynamic monitoring of early warning signals and restructuring programs for viable businesses.",
      "Expanding gold loan portfolios as high-quality collateralized alternatives to unsecured micro loans.",
      "Diversifying geographic and industrial sector exposures to avoid regional concentration."
    ]
  },
  {
    id: "risk-2",
    category: "Liquidity & Market Risk",
    title: "Interest Rate Mismatch & Deposit Volatility",
    likelihood: "Low",
    impact: "High",
    trend: "Stable",
    description: "Mismatch between maturities of long-term development assets and short-term retail deposits under fluctuating central bank monetary policies.",
    mitigations: [
      "Active balance sheet management via the Asset and Liability Committee (ALCO).",
      "Broadening institutional deposit bases and cooperative thrift society funding lines.",
      "Maintained Liquidity Coverage Ratio (LCR) at 151.86%, significantly above the CBSL 100% threshold.",
      "Securing medium-to-long term lines of credit from international financial institutions like ADB and FMO."
    ]
  },
  {
    id: "risk-3",
    category: "Operational & Cyber-Security Risk",
    title: "Digital Platform Cyber Vulnerabilities",
    likelihood: "Medium",
    impact: "Medium",
    trend: "Increasing",
    description: "Potential system interruptions, fraud, or data breaches within SDB's core banking terminal or customer-facing UPay digital wallet platform.",
    mitigations: [
      "Upgraded core systems to ISO 27001 Information Security Management standards.",
      "24/7 Security Operations Center (SOC) monitoring and quarterly third-party penetration testing.",
      "Integrating secure multi-factor authentication and tokenized transaction architectures.",
      "Conducting regular cyber-drill simulations and customer awareness security campaigns."
    ]
  },
  {
    id: "risk-4",
    category: "Social & Environmental Risk",
    title: "Climate Change and Agricultural Disruptions",
    likelihood: "High",
    impact: "Medium",
    trend: "Stable",
    description: "Impact on cooperative farmer clients due to climate-induced crop failures, monsoonal variations, or environmental regulatory shifts.",
    mitigations: [
      "Institutionalizing SDB's Environmental and Social Management System (ESMS) to screen high-risk projects.",
      "Promoting green financing structures, such as solar-powered agricultural installations.",
      "Partnering with primary cooperative societies to offer climate-resilient farming credit products.",
      "Mandatory social and environmental risk assessments for all industrial-scale lending."
    ]
  }
];

export default function GovernanceAndRisk() {
  const { branding } = useBranding();
  const boardroomLeadershipImage = branding?.boardroomLeadershipImage || "/src/assets/images/boardroom_leadership_1783367647402.jpg";

  const [activeTab, setActiveTab] = useState<SubTab>("governance");
  const [selectedCommittee, setSelectedCommittee] = useState<number>(0);
  const [selectedRisk, setSelectedRisk] = useState<string>("risk-1");

  const currentRisk = RISK_ITEMS.find(r => r.id === selectedRisk) || RISK_ITEMS[0];

  return (
    <div id="gov-risk-section" className="space-y-12 text-left">
      {/* Page Title Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[10px] font-mono font-bold text-sdb-coral tracking-widest uppercase bg-sdb-coral/10 px-2.5 py-1 rounded-full">
            INTEGRATED ASSURANCE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight mt-1">
            Corporate Governance & Risk Management
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Establishing a resilient governance foundation and robust compliance systems to safeguard cooperative capital and support long-term economic prosperity.
          </p>
        </div>
        
        <div className="w-full lg:w-72 h-28 rounded-2xl overflow-hidden shadow-md border border-sdb-purple/10 shrink-0">
          <img
            src={boardroomLeadershipImage}
            alt="SDB Governance Committee"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Sub-Tabs Nav */}
      <div id="gov-risk-tabs" className="flex border-b border-sdb-purple/10 pb-px scrollbar-none gap-6">
        {[
          { id: "governance", label: "Corporate Governance Framework", icon: ShieldCheck },
          { id: "risk", label: "Risk Management & Compliance", icon: Scale }
        ].map((tab) => {
          const TabIcon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SubTab)}
              className={`pb-3 text-sm font-semibold tracking-tight border-b-2 transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                isActive
                  ? "border-sdb-purple text-sdb-purple"
                  : "border-transparent text-slate-500 hover:text-sdb-purple"
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Display Interactive Panels */}
      <div id="gov-risk-contents">
        <AnimatePresence mode="wait">
          {activeTab === "governance" ? (
            <motion.div
              key="governance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Board Leadership",
                    desc: "An optimal mix of diverse executive, cooperative, and independent banking insight.",
                    stat: "10 Members",
                    tag: "CBSL Compliant"
                  },
                  {
                    title: "Rigorous Auditing",
                    desc: "Comprehensive oversight across internal controls, corporate disclosures, and external audits.",
                    stat: "8 Committee Meetings",
                    tag: "Zero Deficiencies"
                  },
                  {
                    title: "Cooperative Soul",
                    desc: "Equitable shareholder protections and constant dialogue with primary SANASA societies.",
                    stat: "97% Reach",
                    tag: "Inclusive Governance"
                  },
                  {
                    title: "Ethical Standards",
                    desc: "Strict adherence to Code of Conduct, Anti-Money Laundering, and whistleblowing policies.",
                    stat: "100% Training",
                    tag: "Zero Breaches"
                  }
                ].map((p, idx) => (
                  <div key={idx} className="bg-white border border-sdb-purple/5 p-5 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">{p.tag}</span>
                      <h4 className="font-serif font-bold text-lg text-sdb-purple">{p.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-sdb-purple">
                      <span>{p.stat}</span>
                      <CheckCircle2 className="w-4 h-4 text-sdb-green" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Committee Breakdown Interactive Panel */}
              <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-sdb-purple flex items-center gap-2">
                    <Users className="w-5 h-5 text-sdb-purple" />
                    <span>Board Sub-Committees Oversight</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Specialized committees composed of non-executive and independent directors oversee key risk and operational parameters.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Committee Selector Buttons (Left) */}
                  <div className="lg:col-span-5 flex flex-col gap-2">
                    {COMMITTEES.map((committee, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedCommittee(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          selectedCommittee === idx
                            ? "bg-sdb-purple text-white border-sdb-purple shadow-md"
                            : "bg-slate-50 border-slate-100 hover:bg-slate-100 text-sdb-purple"
                        }`}
                      >
                        <div className="space-y-0.5 pr-2">
                          <p className="text-xs font-mono tracking-wider opacity-80 font-bold uppercase">
                            Committee {idx + 1}
                          </p>
                          <h4 className="font-serif font-bold text-sm md:text-base leading-tight">
                            {committee.name}
                          </h4>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedCommittee === idx ? "translate-x-1" : ""}`} />
                      </button>
                    ))}
                  </div>

                  {/* Selected Committee Details Display (Right) */}
                  <div className="lg:col-span-7 bg-slate-50/50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="bg-sdb-coral/10 text-sdb-coral text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                            {COMMITTEES[selectedCommittee].chairperson}
                          </span>
                          <span className="bg-sdb-purple/10 text-sdb-purple text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full">
                            {COMMITTEES[selectedCommittee].meetings2025} Meetings in 2025
                          </span>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-sdb-purple">
                          {COMMITTEES[selectedCommittee].name} Details
                        </h4>
                      </div>

                      <div className="space-y-1 text-xs">
                        <p className="font-bold text-slate-700">Composition:</p>
                        <p className="text-slate-600 font-mono text-[11px]">{COMMITTEES[selectedCommittee].composition}</p>
                      </div>

                      <div className="space-y-1 text-xs">
                        <p className="font-bold text-slate-700">Primary Core Focus:</p>
                        <p className="text-slate-600 font-mono text-[11px] leading-relaxed bg-white border border-slate-100 p-2.5 rounded-xl">
                          {COMMITTEES[selectedCommittee].focusArea}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-bold text-slate-700">Key Responsibilities & Activities:</p>
                        <ul className="space-y-2">
                          {COMMITTEES[selectedCommittee].responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                              <Check className="w-3.5 h-3.5 text-sdb-green shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100/80 text-[10px] font-mono text-slate-400 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-slate-400" />
                      <span>Complies with Central Bank of Sri Lanka (CBSL) Banking Act Direction No. 11 of 2007</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="risk"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Enterprise Risk Culture Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Visual Cards */}
                <div className="lg:col-span-1 bg-white border border-sdb-purple/10 rounded-3xl p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-sdb-coral/10 flex items-center justify-center text-sdb-coral">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-sdb-purple">Three Lines of Defense</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        SDB structures operational risk management with clear boundaries across Business Units (1st line), Enterprise Risk Control (2nd line), and Independent Internal Audit (3rd line).
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-sdb-purple" />
                      <span>1. Risk-owning branch business units</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-sdb-coral" />
                      <span>2. Chief Risk Officer & Risk Dept.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-sdb-green" />
                      <span>3. Independent Board Audit oversight</span>
                    </div>
                  </div>
                </div>

                {/* Risk Register Interactive Matrix Selector */}
                <div className="lg:col-span-2 bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-3">
                      <h4 className="font-serif font-bold text-xl text-sdb-purple flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-sdb-coral" />
                        <span>Corporate Risk Register & Mitigations</span>
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Select a risk catalog to review likelihood, trend projections, and active prudential banking mitigation policies.
                      </p>
                    </div>

                    {/* Risk Tabs Selector */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {RISK_ITEMS.map((item) => {
                        const isSelected = item.id === selectedRisk;
                        return (
                          <button
                            key={item.id}
                            onClick={() => setSelectedRisk(item.id)}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                              isSelected
                                ? "bg-sdb-coral text-white border-sdb-coral shadow-sm"
                                : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {item.category}
                          </button>
                        );
                      })}
                    </div>

                    {/* Risk Detail view */}
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 space-y-4 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/50 pb-3">
                        <h5 className="font-serif font-bold text-sm md:text-base text-sdb-purple">
                          {currentRisk.title}
                        </h5>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                            currentRisk.likelihood === "High" ? "bg-red-100 text-red-800" :
                            currentRisk.likelihood === "Medium" ? "bg-amber-100 text-amber-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            Likelihood: {currentRisk.likelihood}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-bold ${
                            currentRisk.impact === "High" ? "bg-red-100 text-red-800" :
                            currentRisk.impact === "Medium" ? "bg-amber-100 text-amber-800" :
                            "bg-green-100 text-green-800"
                          }`}>
                            Impact: {currentRisk.impact}
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[9px] font-mono font-bold">
                            Trend: {currentRisk.trend}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <p className="font-bold text-slate-700">Description of Exposure:</p>
                        <p className="text-slate-600 font-mono text-[11px] leading-relaxed">{currentRisk.description}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="font-bold text-slate-700">Board Approved Mitigation Tactics:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentRisk.mitigations.map((mit, mIdx) => (
                            <div key={mIdx} className="bg-white border border-slate-200/50 p-2.5 rounded-xl flex items-start gap-2">
                              <CheckSquare className="w-3.5 h-3.5 text-sdb-green shrink-0 mt-0.5" />
                              <span className="text-slate-600 font-sans text-[11px] leading-relaxed">{mit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Capital Metrics Dashboard Info */}
              <div className="bg-gradient-to-r from-sdb-purple to-sdb-plum text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="space-y-2 max-w-xl text-left">
                  <div className="flex items-center space-x-2">
                    <ShieldAlert className="w-5 h-5 text-sdb-amber" />
                    <span className="text-[10px] font-mono font-bold tracking-widest text-sdb-amber uppercase bg-sdb-amber/10 px-2 py-0.5 rounded">Pillar III Basel III Disclosures</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl md:text-2xl">Prudential Capital Adequacy & Solvency</h4>
                  <p className="text-xs text-white/80 leading-relaxed font-mono">
                    SDB bank maintains dynamic capital cushion levels exceeding regulatory standards, ensuring deposit protection and financial resilience under macroeconomic shock testing.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full md:w-auto text-center shrink-0">
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl font-serif font-bold text-sdb-amber">14.20%</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-white/70 mt-1">Tier 1 Capital Ratio</p>
                    <p className="text-[9px] text-emerald-400 font-mono mt-0.5">Min CBSL req: 8.5%</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl font-serif font-bold text-sdb-amber">15.24%</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-white/70 mt-1">Total Capital (CAR)</p>
                    <p className="text-[9px] text-emerald-400 font-mono mt-0.5">Min CBSL req: 12.5%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
