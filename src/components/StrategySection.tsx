import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { VALUES_DATA } from "../data/reportData";
import { 
  Landmark, Briefcase, Shovel, Cpu, ShieldCheck, Maximize2, X, 
  Layers, CheckCircle2, ChevronRight, Sparkles, ArrowRight,
  Coins, Brain, Users, Home, Handshake, Leaf, Compass, Target,
  TrendingUp, Award, ExternalLink
} from "lucide-react";

import page32BlueprintArtworkImg from "../assets/annual_report_images/strategy/page_32_image_0.png";

const PILLARS_DATA = [
  {
    title: "Co-operative Banking",
    desc: "To be the partner of choice for Sri Lanka's cooperative sector. We manage active banking relationships with over 4,000 SANASA cooperative societies, sourcing approximately 35% of our deposit base from this critical community network.",
    icon: Landmark,
    accent: "text-sdb-purple"
  },
  {
    title: "MSMEs",
    desc: "Uplifting the micro, small, and medium enterprise sector across all 25 districts. Over 25% of our total lending is channelled directly into SMEs, which form the backbone of the national economic recovery.",
    icon: Briefcase,
    accent: "text-sdb-coral"
  },
  {
    title: "Agri Banking & VCF",
    desc: "Collaborating with Rabo Partnerships on a specialized Agri Financing Strategy. We streamline credit flows to local farmers and establish Value Chain Financing (VCF) ecosystems linking large corporate anchors to grassroots agricultural suppliers.",
    icon: Shovel,
    accent: "text-sdb-green"
  },
  {
    title: "Digital Inclusion",
    desc: "Narrowing the urban-rural financial gap via cutting-edge platforms. SDB's digital ecosystem features our SDB UPay mobile wallet, secure Business Internet Banking portals, and electronic payments to Customs, Ports, and Inland Revenue.",
    icon: Cpu,
    accent: "text-sdb-blue"
  }
];

const VALUE_CREATION_CAPITALS = [
  {
    id: "financial",
    name: "Financial Capital",
    icon: Coins,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    description: "Our financial capital base comprises equity, debt, retained profits, deposits, and funding from external development sources for concessionary lending.",
    inputs2024: [
      "Equity: LKR 14.5 Bn",
      "Deposits: LKR 106.9 Bn",
      "Retained Profit: LKR 2.3 Bn",
      "Debt: LKR 19.07 Bn",
      "Credit Rating: BB+ (lka) by Fitch Ratings"
    ],
    inputs2025: [
      "Equity: LKR 14.8 Bn (+2.07%)",
      "Deposits: LKR 108.5 Bn (+1.50%)",
      "Retained Profits: LKR 2.6 Bn (+13.04%)",
      "Debt: LKR 20.6 Bn",
      "Revenue Ranking: 65th amongst Sri Lanka's top 100 corporate revenue leaders",
      "Credit Rating: BB+ (lka) with Stable Outlook"
    ],
    valueCreated: "Expanded lending capacity across provincial branches, recorded Profit Before Tax of LKR 800.17 Mn (+16.94%), maintained robust Capital Adequacy (CAR 15.24%), and strengthened shareholder equity."
  },
  {
    id: "intellectual",
    name: "Intellectual Capital",
    icon: Brain,
    color: "text-purple-600 bg-purple-50 border-purple-200",
    description: "Our intellectual asset base includes the SDB brand, specialized organizational knowledge, community goodwill, UPay digital IP, and in-house agri-lending workflows.",
    inputs2024: [
      "Brand Ranking 2024: 53 by LMD 100",
      "Proprietary UPay digital payments engine",
      "Core banking infrastructure and automated loan origination"
    ],
    inputs2025: [
      "Brand Ranking 2025: 76 (Top 100 Most Valuable Brands, Brand Finance)",
      "Dedicated SDB Agri Manual published in collaboration with Rabo Partnerships",
      "Agri Page intranet portal & standardized inspection reporting protocols",
      "UPay carrying value of LKR 60 Mn under Intangible Assets (Note 22)"
    ],
    valueCreated: "Enhanced brand credibility, digitized agricultural risk appraisal, faster credit turnaround times, and robust intellectual property across multi-channel platforms."
  },
  {
    id: "human",
    name: "Human Capital",
    icon: Users,
    color: "text-rose-600 bg-rose-50 border-rose-200",
    description: "Our workforce of 1,263 dedicated professionals spread across 94 islandwide branches, creating sustainable value for all socio-economic demographics.",
    inputs2024: [
      "Total Employees: 1,298",
      "Investment in Training: LKR 18.58+ Mn",
      "Training Man-Hours: 13,100+ Hours",
      "Remuneration & Benefits: LKR 3.9+ Bn"
    ],
    inputs2025: [
      "Total Employees: 1,263 (48% female representation)",
      "Investment in Training: LKR 23.91+ Mn (+28.7%)",
      "Training Man-Hours: 32,000+ Hours (+144.3%)",
      "Remuneration & Benefits: LKR 4.1+ Bn (+5.1%)"
    ],
    valueCreated: "Empowered 45-member Agri Task Force, cultivated high-performance ownership culture, increased productivity per employee, and fostered female managerial leadership."
  },
  {
    id: "manufactured",
    name: "Manufactured Capital",
    icon: Home,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    description: "Comprises both physical infrastructure (94 branches, 13 ATMs, CDMs) and expanding digital infrastructure (core banking, cloud servers, UPay app).",
    inputs2024: [
      "Islandwide Branches: 94",
      "Dedicated ATMs: 13",
      "IT Infrastructure Investment: LKR 3.2 Bn+"
    ],
    inputs2025: [
      "Islandwide Branches: 94 (including rural touchpoints)",
      "Dedicated ATMs: 13 + nationwide LankaPay network connectivity",
      "IT Infrastructure Investment: LKR 4.05 Bn+ (+26.5%)",
      "Active transition of manual processing into cloud digital workflows"
    ],
    valueCreated: "37% digital transaction penetration, seamless nationwide interbank settlements, real-time merchant QR onboarding, and uninterrupted high-availability banking."
  },
  {
    id: "social",
    name: "Social and Relationship Capital",
    icon: Handshake,
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    description: "The goodwill and trust built up over 28 years of grassroots relationships with primary cooperative societies, farmers, smallholders, international financiers, and regulatory authorities.",
    inputs2024: [
      "4,000+ Primary SANASA Cooperative Societies",
      "Bilateral partnerships with BIO, DGGF, and ADB",
      "Active customer base of over 1.2 Million account holders"
    ],
    inputs2025: [
      "4,000+ Primary SANASA Societies (providing 35% deposit base)",
      "Strategic Agri & VCF advisory partnership with Rabo Partnerships Netherlands",
      "Ongoing development credit facilities with ADB, CBSL, and government agencies",
      "Over 68,900 agriculture and SME facilities extended"
    ],
    valueCreated: "Strengthened grassroots rural trust, fortified social safety nets, empowered women-led micro enterprises, and catalyzed regional economic turnaround."
  },
  {
    id: "natural",
    name: "Natural Capital",
    icon: Leaf,
    color: "text-green-600 bg-green-50 border-green-200",
    description: "The natural resources preserved and environmental considerations embedded within credit underwriting and internal branch operations.",
    inputs2024: [
      "Environmental and Social Management System (ESMS) in lending",
      "Internal carbon footprint and paper reduction initiatives",
      "Initial renewable energy refinance lines"
    ],
    inputs2025: [
      "Rigorous ESMS screening across 100% of corporate, SME, and agri credit proposals",
      "Expansion of green loans for rooftop solar installations and energy-efficient equipment",
      "Resource conservation: reduction in internal paper, water, and grid electricity consumption",
      "Staff-led mangrove and reforestation ecosystem restoration initiatives"
    ],
    valueCreated: "Financed climate-resilient farming, minimized direct greenhouse gas emissions, promoted environmental stewardship among borrowers, and supported Sri Lanka's net-zero transition."
  }
];

export default function StrategySection() {
  const [activeTab, setActiveTab] = useState<"value-creation" | "roadmap" | "agri-strategy" | "priorities">("value-creation");
  const [valueModelSubtab, setValueModelSubtab] = useState<"flow" | "matrix">("flow");
  const [selectedCapitalId, setSelectedCapitalId] = useState<string>("financial");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle: string; page: string } | null>(null);

  const selectedCapital = VALUE_CREATION_CAPITALS.find(c => c.id === selectedCapitalId) || VALUE_CREATION_CAPITALS[0];

  return (
    <section id="strategy-section" className="space-y-12 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Integrated Value Creation & Forward Blueprint • Pages 30–33</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
            How We Create Value & Strategic Roadmap
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            Our forward-looking sustainable growth blueprint recalibrates SDB bank's services through four strategic pillars, 6 capitals architecture, cooperative core values, and our partnership with Rabo Partnerships Netherlands.
          </p>
        </div>

        {/* Section Navigation Tabs */}
        <div className="inline-flex rounded-2xl bg-white p-1.5 border border-sdb-purple/15 shadow-xs">
          <button
            onClick={() => setActiveTab("value-creation")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "value-creation"
                ? "bg-sdb-purple text-white shadow-xs"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            How We Create Value
          </button>
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "roadmap"
                ? "bg-sdb-purple text-white shadow-xs"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            Strategic Roadmap 2026–2029
          </button>
          <button
            onClick={() => setActiveTab("agri-strategy")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "agri-strategy"
                ? "bg-sdb-purple text-white shadow-xs"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            Rabo Agri-Strategy
          </button>
          <button
            onClick={() => setActiveTab("priorities")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              activeTab === "priorities"
                ? "bg-sdb-purple text-white shadow-xs"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            Priorities & Goals
          </button>
        </div>
      </div>

      {/* 1. HOW WE CREATE VALUE (NATIVE HTML - AR Pages 30–31) */}
      {activeTab === "value-creation" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Sub-header with view toggles */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-2xl p-4 border border-sdb-purple/10 shadow-xs">
            <div>
              <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
                Official Integrated Reporting Architecture • Annual Report Pages 30–31
              </span>
              <h3 className="font-serif text-xl font-bold text-sdb-purple">
                Integrated Value Creation Architecture
              </h3>
            </div>

            <div className="inline-flex rounded-xl bg-slate-100 p-1 text-xs font-mono font-semibold">
              <button
                onClick={() => setValueModelSubtab("flow")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  valueModelSubtab === "flow"
                    ? "bg-white text-sdb-purple shadow-xs font-bold"
                    : "text-slate-600 hover:text-sdb-purple"
                }`}
              >
                1. Integrated Flow Architecture
              </button>
              <button
                onClick={() => setValueModelSubtab("matrix")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  valueModelSubtab === "matrix"
                    ? "bg-white text-sdb-purple shadow-xs font-bold"
                    : "text-slate-600 hover:text-sdb-purple"
                }`}
              >
                2. Capitals Comparison (2024 vs 2025)
              </button>
            </div>
          </div>

          {/* VIEW A: INTEGRATED FLOW ARCHITECTURE */}
          {valueModelSubtab === "flow" && (
            <div className="space-y-8">
              {/* Process Intro */}
              <div className="bg-gradient-to-r from-sdb-purple/5 to-sdb-coral/5 rounded-3xl p-6 border border-sdb-purple/10">
                <p className="text-slate-700 text-sm leading-relaxed max-w-4xl">
                  Our value creation model illustrates how SDB bank strategically deploys its resources across <strong>6 Capitals</strong> and leverages deeply rooted stakeholder relationships to achieve long-term aspirations while creating, preserving, and sustaining multi-dimensional value over time.
                </p>
              </div>

              {/* 3-Stage Native HTML Value Creation Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Stage 1: Capital Inputs (4 cols) */}
                <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-sdb-purple/10 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-sdb-purple/10 pb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sdb-coral">
                        Stage 01 • Page 30
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">6 Resources</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-sdb-purple mt-2 mb-3">
                      Capital Inputs
                    </h4>
                    <div className="space-y-2.5">
                      {VALUE_CREATION_CAPITALS.map((cap) => {
                        const Icon = cap.icon;
                        const isSelected = selectedCapitalId === cap.id;
                        return (
                          <div
                            key={cap.id}
                            onClick={() => setSelectedCapitalId(cap.id)}
                            className={`p-3 rounded-2xl border transition-all cursor-pointer text-left ${
                              isSelected
                                ? "bg-sdb-purple/5 border-sdb-purple shadow-xs"
                                : "bg-slate-50/60 border-slate-200/70 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center space-x-2.5">
                              <div className={`p-1.5 rounded-lg border ${cap.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="font-serif font-bold text-xs text-sdb-purple">
                                {cap.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 mt-1 line-clamp-2">
                              {cap.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Click any capital to inspect transformation</span>
                    <ChevronRight className="w-4 h-4 text-sdb-coral" />
                  </div>
                </div>

                {/* Stage 2: Value-Adding Business Activities & Enablers (4 cols) */}
                <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-sdb-purple/10 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-sdb-purple/10 pb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sdb-green">
                        Stage 02 • Core Engine
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">Activities & Pillars</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-sdb-purple mt-2 mb-3">
                      Value-Adding Activities
                    </h4>

                    <div className="space-y-3">
                      {/* Vision & Mission Box */}
                      <div className="bg-sdb-cream/60 rounded-2xl p-3.5 border border-sdb-purple/10 space-y-2">
                        <div>
                          <span className="text-[9px] font-mono uppercase text-sdb-coral font-bold block">Our Vision</span>
                          <p className="text-xs font-serif font-semibold text-sdb-purple">
                            "To enable the economic transformation of progressive individuals, communities, Co-operatives and entrepreneurs."
                          </p>
                        </div>
                        <div className="border-t border-sdb-purple/5 pt-1.5">
                          <span className="text-[9px] font-mono uppercase text-sdb-green font-bold block">Our Mission</span>
                          <p className="text-[11px] text-slate-700 italic">
                            "To be a leading partner for inclusive and sustainable national development."
                          </p>
                        </div>
                      </div>

                      {/* Strategic Pillars */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                          5 Strategic Pillars:
                        </span>
                        <div className="grid grid-cols-1 gap-1.5">
                          {[
                            "Co-operative Banking Partner of Choice",
                            "MSME Financing & Regional Enterprise",
                            "Food & Agri Banking and VCF (Rabo)",
                            "Digital Inclusion & UPay Ecosystem",
                            "Sustainable Value-Driven Banking"
                          ].map((pillar, idx) => (
                            <div key={idx} className="flex items-center space-x-2 bg-slate-50 p-2 rounded-xl text-xs text-slate-700 border border-slate-100">
                              <CheckCircle2 className="w-3.5 h-3.5 text-sdb-green shrink-0" />
                              <span className="font-medium text-[11px]">{pillar}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Enablers */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                          Key Governance Enablers:
                        </span>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1 font-mono">
                          <p>• <strong>Business Lines:</strong> SME, Retail, Co-operative, Treasury</p>
                          <p>• <strong>Core Functions:</strong> Risk, ESMS, IT, Legal, HR, Finance</p>
                          <p>• <strong>Governance:</strong> 7 Board Subcommittees, CBSL Directions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-sdb-purple font-semibold flex items-center justify-between">
                    <span>Underpinned by ESMS Risk Framework</span>
                    <ShieldCheck className="w-4 h-4 text-sdb-green" />
                  </div>
                </div>

                {/* Stage 3: Outputs & Value Created (4 cols) */}
                <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-sdb-purple/10 shadow-sm space-y-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-sdb-purple/10 pb-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sdb-purple">
                        Stage 03 • Page 31
                      </span>
                      <span className="text-xs font-mono text-slate-400 font-bold">Outputs & Outcomes</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-sdb-purple mt-2 mb-3">
                      Value Created for {selectedCapital.name}
                    </h4>

                    {/* Dynamic Detail for Selected Capital */}
                    <div className="space-y-3">
                      <div className={`p-4 rounded-2xl border ${selectedCapital.color}`}>
                        <span className="text-[10px] font-mono uppercase font-bold tracking-wider block mb-1">
                          2025 Outcome Summary:
                        </span>
                        <p className="text-xs text-slate-800 leading-relaxed font-medium">
                          {selectedCapital.valueCreated}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-slate-500 font-bold block">
                          Verified 2025 Milestones:
                        </span>
                        <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                          {selectedCapital.inputs2025.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-700">
                              <span className="text-sdb-coral font-bold">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-[11px] text-emerald-800 flex items-center justify-between">
                        <span className="font-medium">Strategic Alignment</span>
                        <span className="font-mono font-bold">100% Verified</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Source: AR Page 31</span>
                    <button
                      onClick={() => setValueModelSubtab("matrix")}
                      className="text-sdb-coral font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Compare 2024 vs 2025 <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIEW B: CAPITALS COMPARISON (2024 vs 2025) MATRIX */}
          {valueModelSubtab === "matrix" && (
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-sdb-purple/10 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-sdb-purple/10 pb-4">
                  <div>
                    <h4 className="font-serif font-bold text-xl text-sdb-purple">
                      Capitals Transformation Matrix (As at 31 Dec 2024 vs 31 Dec 2025)
                    </h4>
                    <p className="text-xs text-slate-500 font-mono mt-1">
                      Direct side-by-side comparative disclosure of inputs and value generated across all 6 capitals as published on Page 31.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-sdb-purple bg-sdb-purple/10 px-3 py-1 rounded-full font-bold">
                    Official Page 31 Matrix
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {VALUE_CREATION_CAPITALS.map((cap) => {
                    const Icon = cap.icon;
                    return (
                      <div
                        key={cap.id}
                        className="rounded-3xl border border-slate-200 bg-slate-50/50 p-5 space-y-4 flex flex-col justify-between hover:border-sdb-purple/25 transition-all"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className={`p-1.5 rounded-xl border ${cap.color}`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <h5 className="font-serif font-bold text-base text-sdb-purple">
                                {cap.name}
                              </h5>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                              Page 31
                            </span>
                          </div>

                          {/* 2024 vs 2025 side by side */}
                          <div className="grid grid-cols-2 gap-3 pt-2">
                            <div className="bg-white p-3 rounded-2xl border border-slate-200">
                              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase block mb-1">
                                As at 31 Dec 2024
                              </span>
                              <div className="space-y-1">
                                {cap.inputs2024.map((item, i) => (
                                  <p key={i} className="text-[11px] text-slate-600 leading-tight">
                                    • {item}
                                  </p>
                                ))}
                              </div>
                            </div>

                            <div className="bg-white p-3 rounded-2xl border border-sdb-purple/20 shadow-2xs">
                              <span className="text-[9px] font-mono font-bold text-sdb-purple uppercase block mb-1">
                                As at 31 Dec 2025
                              </span>
                              <div className="space-y-1">
                                {cap.inputs2025.map((item, i) => (
                                  <p key={i} className="text-[11px] text-slate-900 font-medium leading-tight">
                                    • {item}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Value Created */}
                          <div className="p-3 bg-sdb-cream/50 rounded-2xl border border-sdb-purple/10 text-xs text-slate-700">
                            <strong className="text-sdb-purple font-semibold block text-[10px] font-mono uppercase mb-0.5">
                              Value Created & Outcomes:
                            </strong>
                            <p className="text-[11px] leading-relaxed">
                              {cap.valueCreated}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {/* 2. STRATEGIC ROADMAP 2026–2029 (AR Pages 32–33) */}
      {activeTab === "roadmap" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          {/* Executive Strategy Overview */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-sdb-purple/10 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
                  Turnaround Success & Forward Horizon • Pages 32–33
                </span>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  Our Strategy (2026–2029 Sustainable Growth Blueprint)
                </h3>
              </div>
              <span className="text-xs font-mono text-sdb-green bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold">
                Technical Advice: Rabo Partnerships B.V.
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-sm text-slate-700 leading-relaxed">
              <div className="lg:col-span-6 space-y-3">
                <p>
                  The financial year 2025 represents a pivotal juncture in SDB's history, marked by the successful conclusion of the first stage of the Bank's comprehensive transformation programme aimed at recalibrating its sustainable growth framework.
                </p>
                <p>
                  The Bank's three-year strategic plan for 2023–2025 was formulated in response to the materially altered operating landscape following the pandemic and the domestic economic crisis of 2022. Within this constrained environment, SDB prioritized the accelerated deployment of digital solutions to rapidly realize efficiency improvements, strengthen governance and internal controls, and enhance enterprise-wide risk management capabilities, while containing operating expenditures amid high inflationary pressures.
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <p>
                  Having established a solid operational foundation, SDB bank concluded 2025 strategically positioned to increase its contribution to national economic recovery. The 2025 financial year also marked the formulation of a new sustainable growth blueprint for <strong>2026–2029</strong>, formulated with technical advisory from <strong>Rabo Partnerships B.V.</strong> (subsidiary of Rabobank Netherlands).
                </p>
                <div className="bg-sdb-purple/5 p-4 rounded-2xl border border-sdb-purple/10">
                  <span className="text-[10px] font-mono font-bold text-sdb-purple uppercase block mb-1">
                    Core Corporate Purpose
                  </span>
                  <p className="font-serif text-base font-bold text-sdb-purple">
                    "Significant Contribution towards the holistically sustainable Development and Prosperity of Sri Lanka."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Framework Grid: Where We Will Win vs How We Will Win */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* WHERE WE WILL WIN */}
            <div className="bg-white rounded-3xl p-6 md:p-7 border border-sdb-purple/10 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                <Target className="w-5 h-5 text-sdb-coral" />
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  Where We Will Win (Strategic Horizons)
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "1. Cooperative Banking",
                    desc: "Partner of choice for Sri Lanka's 4,000+ primary SANASA societies, sourcing 35% of deposits and scaling wholesale liquidity credit lines."
                  },
                  {
                    title: "2. MSMEs",
                    desc: "Channeling over 25% of lending directly to regional enterprises in agriculture, processing, tourism, and services."
                  },
                  {
                    title: "3. Food & Agri Banking and VCF",
                    desc: "Structured Value Chain Financing linking corporate anchor buyers to farmer outgrowers with automated receivable deductions."
                  },
                  {
                    title: "4. Digital Inclusion and Innovations",
                    desc: "Accelerating SDB UPay digital wallet, paperless merchant LankaQR settlements, and automated credit scoring."
                  },
                  {
                    title: "5. Position SDB Bank as a Sustainable Value-Driven Bank",
                    desc: "Embedding ESG and UNEP FI principles into all credit underwriting, driving climate resilience and financial inclusion."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h5 className="font-serif font-bold text-xs text-sdb-purple">{item.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* HOW WE WILL WIN */}
            <div className="bg-white rounded-3xl p-6 md:p-7 border border-sdb-purple/10 shadow-sm space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-100 pb-3">
                <TrendingUp className="w-5 h-5 text-sdb-green" />
                <h4 className="font-serif font-bold text-lg text-sdb-purple">
                  How We Will Win (Operating Enablers)
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  {
                    title: "1. Efficient & Agile Operating Models",
                    desc: "Lean branch structures, streamlined credit workflows, and automated centralized processing to minimize operational friction."
                  },
                  {
                    title: "2. Product Fit & Proactive Risk Culture",
                    desc: "Tailored cash-flow lending, robust early-warning loan monitoring, and three lines of defence risk management."
                  },
                  {
                    title: "3. Low-Cost Funding Strategy",
                    desc: "Expanding low-cost CASA savings deposits, institutional cooperative treasury deposits, and concessionary multilateral refinance lines."
                  },
                  {
                    title: "4. Investing in Developing People & Leadership",
                    desc: "Extensive capacity building (32,000+ training hours in 2025), technical agri certifications, and future-ready talent development."
                  },
                  {
                    title: "5. Strengthening Stakeholder Trust & Brand",
                    desc: "Transparent integrated reporting, ethical marketing, and deepening community ties through grassroots cooperative dialogues."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <h5 className="font-serif font-bold text-xs text-sdb-green">{item.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 11 Core Values Grid */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-sm space-y-4">
            <h4 className="font-serif font-bold text-xl text-sdb-purple">
              Our 11 Core Cooperative Values (Page 32)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Ethical Standards",
                "Innovative & Profit Driven Services",
                "Professionalism",
                "Equal Treatment",
                "Sustainability",
                "Winning Mindset",
                "Customer Centric",
                "Purpose Driven",
                "Future Ready",
                "Ownership Culture",
                "Continuous Improvement"
              ].map((val, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-sdb-cream/40 border border-sdb-purple/10 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-sdb-coral shrink-0" />
                  <span className="font-serif font-semibold text-xs text-sdb-purple">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* 3. RABO PARTNERSHIPS AGRI-STRATEGY (AR Pages 32–33) */}
      {activeTab === "agri-strategy" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-sdb-purple/10 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-sdb-green uppercase tracking-wider block">
                  Dedicated Sector Blueprint • Annual Report Page 32–33
                </span>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  SDB Bank Agri-Strategy in Collaboration with Rabo Partnerships
                </h3>
              </div>
              <span className="text-xs font-mono bg-sdb-green/10 text-sdb-green px-3 py-1 rounded-full font-bold">
                Netherlands Technical Partnership
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-4xl">
              Under the new corporate strategy, SDB bank has developed a dedicated Agri-strategy designed to position the Bank as an integral stakeholder in Sri Lanka's food and agriculture sector. The strategy supports sustainable agricultural growth by providing tailored financial solutions to farmers, agribusinesses, and agricultural value chains, while fostering environmental and social responsibility.
            </p>

            {/* Key Initiatives Implemented */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-sdb-purple">
                Five Key Agri-Financing Initiatives Implemented in 2025:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    title: "1. Published SDB Agri Manual",
                    desc: "Completed and published the official Agri Manual to standardize the agricultural lending process and build a resilient, high-quality Agri-lending portfolio across all 94 branches."
                  },
                  {
                    title: "2. 45-Member Agri Task Force",
                    desc: "Established a dedicated Agri Task Force comprising 45 trained officers covering all banking regions, enabling coordinated and region-specific agricultural interventions."
                  },
                  {
                    title: "3. Agri Advisory Panel",
                    desc: "Formed an expert Agri Advisory Panel to provide agronomic guidance throughout the agricultural lending, crop risk profiling, and portfolio-development cycle."
                  },
                  {
                    title: "4. Dedicated Agri Intranet Page",
                    desc: "Launched a dedicated Agri Page on the internal intranet providing field officers instant access to technical crop data, weather updates, and government agricultural sites."
                  },
                  {
                    title: "5. Agri-Specific Inspection Report",
                    desc: "Introduced a standardized report capturing technical crop metrics, enhancing proposal efficiency, and reinforcing alignment with international agri-banking standards."
                  },
                  {
                    title: "6. Value Chain Financing Models",
                    desc: "Tripartite agreements connecting farmer smallholders, corporate buyers (dairy, tea, paddy), and SDB Bank for guaranteed crop purchase and automated loan deductions."
                  }
                ].map((init, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 flex flex-col justify-between">
                    <div>
                      <span className="font-serif font-bold text-sm text-sdb-purple block">{init.title}</span>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{init.desc}</p>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-sdb-green font-bold">
                      <span>Operational in 2025</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Going Forward Commitments */}
            <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-200 space-y-3">
              <h4 className="font-serif font-bold text-base text-emerald-950">
                Four Sector Commitments Going Forward (Page 33):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-emerald-900">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Maintain Visible Presence:</strong> Active and consistent presence across all rural agricultural corridors in Sri Lanka.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Engage Regionally:</strong> Actively expand seasonal crop facilities, dairy livestock loans, and post-harvest storage financing.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Process Efficiency:</strong> Shorten turnaround time for seasonal agricultural loan disbursements through digital workflows.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Non-Financial Support:</strong> Conduct farmer financial literacy workshops, climate resilience advice, and cooperative bookkeeping aid.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 4. PRIORITIES OF 2025 & 3-YEAR HORIZONS (AR Page 33) */}
      {activeTab === "priorities" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Strategic Priorities of 2025 */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-sdb-purple/10 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
                  Operational Execution • Page 33
                </span>
                <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                  Strategic Priorities of 2025
                </h3>
              </div>
              <span className="text-xs font-mono bg-sdb-purple/10 text-sdb-purple px-3 py-1 rounded-full font-bold">
                7 Core Operational Thrusts
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Client Centric Approach", desc: "Re-aligning branch servicing around customer life-cycles and regional business needs." },
                { title: "Lean Operations", desc: "Eliminating procedural redundancy, centralizing credit processing, and optimizing operating costs." },
                { title: "Drive Digital (Internal & External)", desc: "Upgrading core banking architectures, scaling UPay mobile wallet, and deploying paperless workflows." },
                { title: "Agri Banking & VCF & Cooperatives", desc: "Expanding structured value chains, cooperative wholesale deposits, and anchor buyer partnerships." },
                { title: "Capacity & Skills Development", desc: "Investing LKR 23.91+ Mn across 32,000+ staff training hours, fostering agronomic and digital skills." },
                { title: "Close Management of Funding", desc: "Managing interest margins, maintaining liquidity ratios (LCR 151.86%), and securing concessionary refinance." },
                { title: "Sustainability Focus", desc: "Full adherence to ESMS risk screening, European SSCI certification, and UN SDG alignment." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-sdb-purple" />
                    <h5 className="font-serif font-bold text-sm text-sdb-purple">{item.title}</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Goals Horizon Table (Core, Growth, Explore across Year 1-3) */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
            <div className="border-b border-sdb-purple/10 pb-4">
              <span className="text-[10px] font-mono font-bold text-sdb-green uppercase tracking-wider block">
                3-Horizon Phased Trajectory • Page 33
              </span>
              <h3 className="font-serif text-2xl font-bold text-sdb-purple">
                Strategic Horizon Roadmap (2023–2026)
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">
                Progression across Core Business, Growth Horizons, and Exploratory Innovations.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-sdb-purple text-white font-mono text-[11px]">
                    <th className="p-3.5 rounded-tl-xl">Horizon Dimension</th>
                    <th className="p-3.5">Year 1 (2023/2024)</th>
                    <th className="p-3.5">Year 2 (2024/2025)</th>
                    <th className="p-3.5 rounded-tr-xl">Year 3 (2025/2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-serif font-bold text-sdb-purple bg-slate-50/70">
                      Core Operations
                    </td>
                    <td className="p-3.5 text-slate-700">
                      <strong>Emphasis on Repair:</strong> Balance sheet stabilization, provisioning, and risk remediation.
                    </td>
                    <td className="p-3.5 text-slate-700">
                      <strong>Emphasis on Transformation:</strong> Process re-engineering, digital migration, and lean operations.
                    </td>
                    <td className="p-3.5 text-slate-900 font-semibold bg-sdb-purple/5">
                      <strong>Consolidate and Scale:</strong> Expanding sustainable MSME and cooperative market share.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-serif font-bold text-sdb-coral bg-slate-50/70">
                      Growth Horizon
                    </td>
                    <td className="p-3.5 text-slate-700">
                      <strong>Partnerships & Proof of Viability:</strong> Bilateral development funding and initial VCF pilots.
                    </td>
                    <td className="p-3.5 text-slate-700">
                      <strong>Expanding Capability:</strong> Establishing Agri Task Force and nationwide UPay rollout.
                    </td>
                    <td className="p-3.5 text-slate-900 font-semibold bg-sdb-coral/5">
                      <strong>Emphasis on Penetration:</strong> Deepening provincial market penetration across rural food chains.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-serif font-bold text-sdb-green bg-slate-50/70">
                      Explore Horizon
                    </td>
                    <td className="p-3.5 text-slate-700">
                      <strong>Ecosystem Research:</strong> Researching rural supply chains and cooperative technology gaps.
                    </td>
                    <td className="p-3.5 text-slate-700">
                      <strong>Solution Development:</strong> LankaQR merchant payment pilots and Rabo Agri model prototyping.
                    </td>
                    <td className="p-3.5 text-slate-900 font-semibold bg-sdb-green/5">
                      <strong>Readiness for Scaling:</strong> Enterprise-wide rollout of automated fintech and value chain pipelines.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}

      {/* Strategic Blueprint Artwork Spotlight (Page 32) */}
      <div className="bg-gradient-to-r from-sdb-purple to-sdb-plum text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-md">
        <div className="space-y-2 max-w-xl text-left">
          <span className="text-[10px] font-mono font-bold text-sdb-amber uppercase tracking-widest bg-sdb-amber/20 px-2.5 py-0.5 rounded">
            Handcrafted Watercolor Artwork • Page 32
          </span>
          <h3 className="font-serif font-bold text-xl md:text-2xl">
            Strategic Transformation DNA & Rabo Collaboration
          </h3>
          <p className="text-xs text-white/80 leading-relaxed font-sans">
            The artistic watercolor piece on page 32 visualizes the synergistic confluence of cooperative roots, agricultural food chains, digital technology, and multi-stakeholder prosperity under the 2026–2029 Growth Blueprint.
          </p>
        </div>
        <button
          onClick={() => setLightboxImage({
            src: page32BlueprintArtworkImg,
            title: "2026-2029 Strategic Transformation Blueprint Artwork",
            subtitle: "Handcrafted artwork symbolizing SDB Bank's cooperative roots and future growth horizons.",
            page: "32"
          })}
          className="shrink-0 bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 text-center cursor-pointer transition-all flex items-center space-x-3"
        >
          <Maximize2 className="w-6 h-6 text-sdb-amber" />
          <div className="text-left">
            <p className="font-serif font-bold text-sm text-white">View Page 32 Artwork</p>
            <p className="text-[10px] font-mono text-white/70">Click to Enlarge High-Res</p>
          </div>
        </button>
      </div>

      {/* Lightbox / Modal for Artwork Inspection */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-white/20"
            >
              <div className="p-4 sm:p-5 bg-gradient-to-r from-sdb-purple to-[#4A154B] text-white flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold block">
                    Annual Report Official Publication • Page {lightboxImage.page}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-xs text-purple-200 mt-0.5 line-clamp-1">
                    {lightboxImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0 ml-4 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 sm:p-6 flex-1 overflow-auto flex items-center justify-center bg-slate-50">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-md border border-slate-200"
                />
              </div>

              <div className="p-3 sm:p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-mono text-[11px]">
                  Audited & Published by SANASA Development Bank PLC
                </span>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-1.5 bg-sdb-purple text-white font-semibold rounded-lg hover:bg-sdb-purple/90 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
