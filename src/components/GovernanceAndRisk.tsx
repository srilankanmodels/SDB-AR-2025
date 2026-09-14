/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Corporate Governance, Audit & Risk Management
 * Addresses Points 17 to 28, 31 to 34, 37 to 43
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, Scale, Users, CheckCircle2, TrendingUp, AlertTriangle, 
  Activity, Award, FileText, ChevronRight, Check, CheckSquare, Layers, 
  ShieldAlert, Calendar, BookOpen, ExternalLink, UserCheck, Building, 
  Clock, FileCheck2, Stamp, ArrowUpRight
} from "lucide-react";
import { useBranding } from "./BrandingContext";
import {
  CHAIRPERSON_GOVERNANCE_MESSAGE,
  BOARD_COMMITTEES_DETAILED,
  FINANCIAL_CALENDAR,
  DIRECTORS_STATUTORY_REPORT,
  PROFITS_AND_APPROPRIATIONS_TABLE,
  AGM_NOTICE_DATA,
  CommitteeReport
} from "../data/governanceData";
import {
  DIRECTORS_STATEMENT_INTERNAL_CONTROL,
  INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL,
  CEO_AND_CFO_RESPONSIBILITY_STATEMENT,
  DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING,
  INDEPENDENT_AUDITORS_REPORT_EY
} from "../data/auditAndStatementsData";

type MainTab = "governance" | "committees" | "board-affairs" | "audit-reports" | "risk";

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

  const [activeTab, setActiveTab] = useState<MainTab>("governance");
  const [selectedCommitteeIndex, setSelectedCommitteeIndex] = useState<number>(0);
  const [selectedAuditDoc, setSelectedAuditDoc] = useState<string>("auditors-report-ey");
  const [selectedRisk, setSelectedRisk] = useState<string>("risk-1");

  useEffect(() => {
    const handleSetTab = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && ["governance", "committees", "board-affairs", "audit-reports", "risk"].includes(detail)) {
        setActiveTab(detail as MainTab);
      }
    };
    window.addEventListener("set-governance-tab", handleSetTab);
    return () => {
      window.removeEventListener("set-governance-tab", handleSetTab);
    };
  }, []);

  const currentRisk = RISK_ITEMS.find(r => r.id === selectedRisk) || RISK_ITEMS[0];
  const activeCommittee: CommitteeReport = BOARD_COMMITTEES_DETAILED[selectedCommitteeIndex] || BOARD_COMMITTEES_DETAILED[0];

  return (
    <div id="gov-risk-section" className="space-y-12 text-left">
      {/* Page Title Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[10px] font-mono font-bold text-sdb-coral tracking-widest uppercase bg-sdb-coral/10 px-2.5 py-1 rounded-full">
            INTEGRATED GOVERNANCE & STATUTORY AUDIT
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight mt-1">
            Corporate Governance & Audit
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Upholding uncompromising ethical standards, fiduciary vigilance, and statutory oversight audited by Ernst & Young (EY) in compliance with CBSL Direction No. 11 of 2007.
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

      {/* Main Sub-Tabs Navigation */}
      <div id="gov-risk-tabs" className="flex overflow-x-auto border-b border-sdb-purple/10 pb-px scrollbar-none gap-3 sm:gap-6">
        {[
          { id: "governance", label: "Governance Overview", icon: ShieldCheck },
          { id: "committees", label: "Board Subcommittees (7)", icon: Users },
          { id: "board-affairs", label: "Affairs of Bank & AGM", icon: Building },
          { id: "audit-reports", label: "Auditor & Responsibility", icon: FileCheck2 },
          { id: "risk", label: "Risk & Compliance", icon: Scale }
        ].map((tab) => {
          const TabIcon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MainTab)}
              className={`pb-3 text-xs sm:text-sm font-semibold tracking-tight border-b-2 whitespace-nowrap transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                isActive
                  ? "border-sdb-purple text-sdb-purple font-bold"
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
          
          {/* TAB 1: GOVERNANCE OVERVIEW */}
          {activeTab === "governance" && (
            <motion.div
              key="governance"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Point 17: Chairperson's Governance Statement */}
              <div className="bg-gradient-to-br from-white via-white to-sdb-purple/5 border border-sdb-purple/15 rounded-3xl p-6 md:p-8 shadow-sm text-left">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 border-b border-sdb-purple/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Point 17 • Annual Report Pages 124–126
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-sdb-purple mt-2">
                      {CHAIRPERSON_GOVERNANCE_MESSAGE.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-serif font-bold text-sdb-purple text-sm">{CHAIRPERSON_GOVERNANCE_MESSAGE.author}</p>
                    <p className="text-xs text-slate-500 font-mono">{CHAIRPERSON_GOVERNANCE_MESSAGE.designation}</p>
                  </div>
                </div>

                <div className="text-slate-700 text-sm leading-relaxed space-y-3 whitespace-pre-line font-sans">
                  {CHAIRPERSON_GOVERNANCE_MESSAGE.message}
                </div>

                <div className="mt-6 pt-4 border-t border-sdb-purple/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Stamp className="w-4 h-4 text-emerald-600" />
                    <span>Conforms with CBSL Direction No. 11 of 2007 and CSE Listing Rules Section 7.10</span>
                  </div>
                  <a
                    href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sdb-coral hover:text-sdb-purple font-bold"
                  >
                    <span>Read in PDF (Pages 124–126)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Point 18: Governance Structure & Board Composition */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  Governance Structure & Board Composition
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Point 18: High-level corporate governance architecture balancing executive execution and non-executive independent scrutiny.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-sdb-purple/10 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sdb-purple/10 text-sdb-purple flex items-center justify-center font-bold">
                      01
                    </div>
                    <h4 className="font-serif font-bold text-lg text-sdb-purple">Shareholders & Cooperative Movement</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Represented by primary SANASA Thrift & Credit Cooperative Societies (TCCS) and public institutional investors, exercising sovereign authority at the Annual General Meeting.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-sdb-purple/10 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sdb-coral/10 text-sdb-coral flex items-center justify-center font-bold">
                      02
                    </div>
                    <h4 className="font-serif font-bold text-lg text-sdb-purple">Board of Directors (10 Members)</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      9 Non-Executive Directors (including 4 Independent Non-Executive Directors) led by Non-Executive Independent Chairperson Ms. Dinithi Ratnayake and 1 Executive Director / CEO.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-sdb-purple/10 shadow-xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sdb-green/10 text-sdb-green flex items-center justify-center font-bold">
                      03
                    </div>
                    <h4 className="font-serif font-bold text-lg text-sdb-purple">Board Subcommittees & Executive Line</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      7 specialized Board Subcommittees delegated with discrete oversight mandates, collaborating with Corporate Management and Chief Managers across 94 branch hubs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Four Pillars of SDB Governance */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  {
                    title: "Board Independence",
                    desc: "Majority non-executive directors ensure unbiased oversight and protection of public depositor interests.",
                    stat: "9 Non-Exec Directors",
                    tag: "CBSL Compliant"
                  },
                  {
                    title: "Statutory Committees",
                    desc: "Seven specialized subcommittees with defined mandates, meeting regularly with statutory quorums.",
                    stat: "7 Board Subcommittees",
                    tag: "Specialized Scrutiny"
                  },
                  {
                    title: "External Audit Vigilance",
                    desc: "Audited by Ernst & Young (EY) Sri Lanka, issuing an unmodified clean audit opinion on financial statements.",
                    stat: "Ernst & Young (EY)",
                    tag: "Clean Opinion"
                  },
                  {
                    title: "Code of Ethics",
                    desc: "Zero tolerance for corruption, bribery, or non-compliance; strict Related Party Transaction review processes.",
                    stat: "100% Policy Adherence",
                    tag: "Ethical Integrity"
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
            </motion.div>
          )}

          {/* TAB 2: BOARD SUBCOMMITTEES (Points 19 to 25, 32, 34) */}
          {activeTab === "committees" && (
            <motion.div
              key="committees"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                    Points 19–25, 32 & 34 • All 7 Board Subcommittees
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2 flex items-center gap-2">
                    <Users className="w-6 h-6 text-sdb-purple" />
                    <span>Board Subcommittees & Reports</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a subcommittee below to inspect its full charter, director compositions with individual names, 2025 activities, and attendance records.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Selector List */}
                  <div className="lg:col-span-4 flex flex-col gap-2">
                    {BOARD_COMMITTEES_DETAILED.map((comm, idx) => (
                      <button
                        key={comm.id}
                        onClick={() => setSelectedCommitteeIndex(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          selectedCommitteeIndex === idx
                            ? "bg-sdb-purple text-white border-sdb-purple shadow-md"
                            : "bg-slate-50 border-slate-100 hover:bg-slate-100 text-sdb-purple"
                        }`}
                      >
                        <div className="space-y-0.5 pr-2">
                          <span className="text-[10px] font-mono tracking-wider opacity-80 font-bold uppercase">
                            {comm.acronym} • {comm.meetingsHeld} Meetings
                          </span>
                          <h4 className="font-serif font-bold text-sm leading-tight">
                            {comm.name}
                          </h4>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedCommitteeIndex === idx ? "translate-x-1" : ""}`} />
                      </button>
                    ))}
                  </div>

                  {/* Right Detailed Report */}
                  <div className="lg:col-span-8 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-sdb-purple/10 text-sdb-purple font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          {activeCommittee.acronym}
                        </span>
                        <span className="bg-sdb-coral/10 text-sdb-coral font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          Chair: {activeCommittee.chairperson}
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          {activeCommittee.meetingsHeld} Meetings in FY 2025
                        </span>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-sdb-purple">
                        {activeCommittee.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 italic">
                        Mandate: {activeCommittee.mandate}
                      </p>
                    </div>

                    {/* Committee Members with Individual Names (Addressing Points 19, 21, 23) */}
                    <div className="space-y-2">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider">
                        Committee Composition (Names of Directors)
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeCommittee.members.map((m, mIdx) => (
                          <div key={mIdx} className="bg-white p-3 rounded-xl border border-slate-200/70 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-sdb-purple">{m.name}</span>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                                m.role.includes("Chairman") || m.role.includes("Chairperson")
                                  ? "bg-sdb-coral/10 text-sdb-coral"
                                  : "bg-slate-100 text-slate-700"
                              }`}>
                                {m.role}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 mt-1">{m.designation}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Activities 2025 */}
                    <div className="space-y-2">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider">
                        Key Activities & Statutory Disclosures 2025
                      </h5>
                      <ul className="space-y-2">
                        {activeCommittee.activities2025.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed bg-white/70 p-2.5 rounded-lg border border-slate-100">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Attendance Table (Points 32 & 34) */}
                    {activeCommittee.attendance && (
                      <div className="space-y-2 pt-2 border-t border-slate-200/70">
                        <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider flex items-center justify-between">
                          <span>Meeting Attendance Records (Point 32 & 34)</span>
                          <span className="text-xs font-mono font-normal text-slate-500">
                            Eligible vs Attended
                          </span>
                        </h5>
                        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200/80">
                          <table className="w-full text-left text-xs font-mono">
                            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                              <tr>
                                <th className="py-2.5 px-4 font-bold">Director Name</th>
                                <th className="py-2.5 px-4 text-center font-bold">Eligible</th>
                                <th className="py-2.5 px-4 text-center font-bold">Attended</th>
                                <th className="py-2.5 px-4 text-right font-bold">Attendance %</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {activeCommittee.attendance.map((att, attIdx) => {
                                const pct = Math.round((att.attended / att.eligible) * 100);
                                return (
                                  <tr key={attIdx} className="hover:bg-slate-50">
                                    <td className="py-2 px-4 font-sans font-semibold text-sdb-purple">{att.name}</td>
                                    <td className="py-2 px-4 text-center text-slate-600">{att.eligible}</td>
                                    <td className="py-2 px-4 text-center font-bold text-sdb-purple">{att.attended}</td>
                                    <td className="py-2 px-4 text-right font-bold text-emerald-600">{pct}%</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: AFFAIRS OF BANK, PROFITS & AGM (Points 26, 27, 28, 31, 33, 37) */}
          {activeTab === "board-affairs" && (
            <motion.div
              key="board-affairs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Point 27, 31, 33: Statutory Report of the Board */}
              <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                    Points 27, 31 & 33 • Statutory Affairs of the Bank
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2">
                    {DIRECTORS_STATUTORY_REPORT.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    {DIRECTORS_STATUTORY_REPORT.governingLaw}
                  </p>
                  <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                    {DIRECTORS_STATUTORY_REPORT.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {DIRECTORS_STATUTORY_REPORT.sections.map((sec, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1.5">
                      <h4 className="font-serif font-bold text-sm text-sdb-purple">{sec.heading}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">{sec.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Point 28: Profits and Appropriations Table */}
              <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Point 28 • Profits and Appropriations
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-sdb-purple mt-1">
                      Profits & Appropriations Table (LKR Millions)
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Source: Annual Report Page 168
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#8B1D2C] text-white">
                      <tr>
                        <th className="py-3 px-4 font-bold font-sans">Statement Item</th>
                        <th className="py-3 px-4 text-right font-bold bg-[#FAF2EB] text-[#8B1D2C]">2025 (LKR Mn)</th>
                        <th className="py-3 px-4 text-right font-bold text-white">2024 (LKR Mn)</th>
                        <th className="py-3 px-4 text-right font-bold text-white">YoY Change</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {PROFITS_AND_APPROPRIATIONS_TABLE.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-2.5 px-4 font-sans font-medium text-slate-800">{row.item}</td>
                          <td className="py-2.5 px-4 text-right font-bold text-sdb-purple bg-[#FAF2EB]/50">{row.y2025}</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">{row.y2024}</td>
                          <td className={`py-2.5 px-4 text-right font-bold ${
                            row.change.startsWith("+") ? "text-emerald-600" : "text-rose-600"
                          }`}>
                            {row.change}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Point 26 & 37: Financial Calendar & Notice of AGM */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Financial Calendar */}
                <div className="lg:col-span-6 bg-white border border-sdb-purple/10 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-sdb-purple" />
                    <h4 className="font-serif font-bold text-xl text-sdb-purple">
                      Financial Calendar (Point 26)
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                    Publication milestones for interim quarterly releases, annual audits, and general meetings.
                  </p>

                  <div className="space-y-2 font-mono text-xs">
                    {FINANCIAL_CALENDAR.fy2025.map((evt, idx) => (
                      <div key={idx} className="flex justify-between items-center p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                        <span className="text-slate-700 font-sans">{evt.event}</span>
                        <span className="font-bold text-sdb-purple shrink-0 ml-2">{evt.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Point 37: Notice of 29th AGM */}
                <div className="lg:col-span-6 bg-gradient-to-br from-white to-sdb-purple/5 border border-sdb-purple/15 rounded-3xl p-6 shadow-sm space-y-4">
                  <div className="flex items-center space-x-2">
                    <Stamp className="w-5 h-5 text-sdb-coral" />
                    <h4 className="font-serif font-bold text-xl text-sdb-purple">
                      Notice of 29th AGM (Point 37)
                    </h4>
                  </div>
                  <div className="space-y-1 font-mono text-xs text-slate-600">
                    <p><strong className="text-sdb-purple">Date & Time:</strong> {AGM_NOTICE_DATA.meetingDate} at {AGM_NOTICE_DATA.meetingTime}</p>
                    <p><strong className="text-sdb-purple">Venue:</strong> {AGM_NOTICE_DATA.venue}</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-sdb-purple/10">
                    <p className="text-xs font-bold text-slate-700 font-serif">Key Agenda Items:</p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {AGM_NOTICE_DATA.agenda.map((ag, agIdx) => (
                        <li key={agIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-sdb-coral shrink-0 mt-1.5" />
                          <span>{ag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-400">
                    Form of Proxy must be lodged at No. 12, Edmonton Road, Kirulapone 48 hours prior.
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: AUDITOR & STATUTORY RESPONSIBILITY STATEMENTS (Points 38 to 43) */}
          {activeTab === "audit-reports" && (
            <motion.div
              key="audit-reports"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Auditor Navigation Selector */}
              <div className="flex flex-wrap gap-2 bg-white/90 p-2 rounded-2xl border border-sdb-purple/15 shadow-sm text-xs font-mono">
                {[
                  { id: "auditors-report-ey", label: "Independent Auditor's Report (EY Sri Lanka)", icon: Stamp },
                  { id: "directors-responsibility", label: "Directors' Responsibility for Reporting", icon: ShieldCheck },
                  { id: "ceo-cfo-statement", label: "CEO & Head of Finance Responsibility", icon: UserCheck },
                  { id: "internal-control", label: "Statement on Internal Control", icon: FileText },
                  { id: "assurance-internal-control", label: "Independent Assurance Report (EY)", icon: FileCheck2 }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedAuditDoc(tab.id)}
                    className={`px-3 py-2 rounded-xl font-bold flex items-center space-x-1.5 transition-all cursor-pointer ${
                      selectedAuditDoc === tab.id
                        ? "bg-sdb-purple text-white shadow-xs"
                        : "text-slate-600 hover:text-sdb-purple hover:bg-slate-100"
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Point 42 & 43: EY Independent Auditor's Report */}
              {selectedAuditDoc === "auditors-report-ey" && (
                <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                        Points 42 & 43 • Statutory External Auditor: Ernst & Young (EY)
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2">
                        {INDEPENDENT_AUDITORS_REPORT_EY.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono">
                        {INDEPENDENT_AUDITORS_REPORT_EY.subtitle} • {INDEPENDENT_AUDITORS_REPORT_EY.sourcePage}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-mono text-xs font-bold inline-block">
                        Unmodified Clean Opinion
                      </span>
                    </div>
                  </div>

                  {/* EY Clean Opinion Callout */}
                  <div className="bg-[#FAF2EB] border-l-4 border-[#8B1D2C] p-5 rounded-r-2xl space-y-2">
                    <h4 className="font-serif font-bold text-base text-[#8B1D2C]">
                      Opinion: True and Fair View
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans whitespace-pre-line">
                      {INDEPENDENT_AUDITORS_REPORT_EY.opinionText}
                    </p>
                  </div>

                  {/* Basis for Opinion */}
                  <div className="space-y-2">
                    <h4 className="font-serif font-bold text-base text-sdb-purple">Basis for Opinion</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {INDEPENDENT_AUDITORS_REPORT_EY.basisForOpinion}
                    </p>
                  </div>

                  {/* Key Audit Matters */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-serif font-bold text-base text-sdb-purple">
                      Key Audit Matters (KAM) Audited by Ernst & Young
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {INDEPENDENT_AUDITORS_REPORT_EY.keyAuditMatters.map((kam, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-mono font-bold text-sdb-purple bg-sdb-purple/10 px-2 py-0.5 rounded">
                              KAM {idx + 1}
                            </span>
                            <h5 className="font-serif font-bold text-xs sm:text-sm text-sdb-purple mt-1.5">
                              {kam.title}
                            </h5>
                            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                              {kam.riskSummary}
                            </p>
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-200/60 text-[11px] text-slate-700 italic">
                            <strong>Audit Response:</strong> {kam.howAddressed}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Signatory Footer */}
                  <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center text-xs font-mono text-slate-500">
                    <div>
                      <p className="font-bold text-sdb-purple">{INDEPENDENT_AUDITORS_REPORT_EY.auditorFirm}</p>
                      <p>{INDEPENDENT_AUDITORS_REPORT_EY.officeAddress}</p>
                    </div>
                    <p>Signed: {INDEPENDENT_AUDITORS_REPORT_EY.signatureDate}</p>
                  </div>
                </div>
              )}

              {/* Point 41: Directors' Responsibility Statement */}
              {selectedAuditDoc === "directors-responsibility" && (
                <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Point 41 • Directors' Responsibility
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2">
                      {DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING.subtitle} • {DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING.sourcePage}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Signatories */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING.signatories.map((sig, sIdx) => (
                      <div key={sIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-mono text-xs">
                        <p className="font-bold text-sdb-purple font-sans">{sig.name}</p>
                        <p className="text-[11px] text-slate-500">{sig.designation}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{sig.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Point 40: CEO & Head of Finance Statement */}
              {selectedAuditDoc === "ceo-cfo-statement" && (
                <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Point 40 • Executive Accountability
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2">
                      {CEO_AND_CFO_RESPONSIBILITY_STATEMENT.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {CEO_AND_CFO_RESPONSIBILITY_STATEMENT.subtitle} • {CEO_AND_CFO_RESPONSIBILITY_STATEMENT.sourcePage}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {CEO_AND_CFO_RESPONSIBILITY_STATEMENT.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Signatories */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                    {CEO_AND_CFO_RESPONSIBILITY_STATEMENT.signatories.map((sig, sIdx) => (
                      <div key={sIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 font-mono text-xs">
                        <p className="font-bold text-sdb-purple font-sans">{sig.name}</p>
                        <p className="text-[11px] text-slate-500">{sig.designation}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{sig.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Point 38: Statement on Internal Control */}
              {selectedAuditDoc === "internal-control" && (
                <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Point 38 • Internal Control over Financial Reporting
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2">
                      {DIRECTORS_STATEMENT_INTERNAL_CONTROL.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {DIRECTORS_STATEMENT_INTERNAL_CONTROL.subtitle} • {DIRECTORS_STATEMENT_INTERNAL_CONTROL.sourcePage}
                    </p>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {DIRECTORS_STATEMENT_INTERNAL_CONTROL.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {DIRECTORS_STATEMENT_INTERNAL_CONTROL.keyHighlights && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      {DIRECTORS_STATEMENT_INTERNAL_CONTROL.keyHighlights.map((kh, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                          <h5 className="font-serif font-bold text-xs text-sdb-purple">{kh.heading}</h5>
                          <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{kh.details}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Point 39: Independent Assurance Report on Internal Control by EY */}
              {selectedAuditDoc === "assurance-internal-control" && (
                <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Point 39 • External Assurance by Ernst & Young (EY)
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2">
                      {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.subtitle} • {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.sourcePage}
                    </p>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-emerald-900 text-xs sm:text-sm leading-relaxed font-sans">
                    <strong>Assurance Conclusion:</strong> {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.conclusion}
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-serif font-bold text-sm text-sdb-purple">Summary of Procedures Executed:</h5>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.proceduresPerformed.map((proc, prIdx) => (
                        <li key={prIdx} className="flex items-start gap-2 leading-relaxed">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{proc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-mono text-slate-500">
                    <p>Assurance Firm: {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.assuranceFirm}</p>
                    <p>Date: {INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL.date}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 5: RISK MANAGEMENT & COMPLIANCE */}
          {activeTab === "risk" && (
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
