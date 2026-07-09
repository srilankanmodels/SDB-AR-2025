/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeCover from "./components/ThemeCover";
import FinancialCharts from "./components/FinancialCharts";
import TimelineSection from "./components/TimelineSection";
import CapitalsHub from "./components/CapitalsHub";
import LeadershipSection from "./components/LeadershipSection";
import StrategySection from "./components/StrategySection";
import GovernanceAndRisk from "./components/GovernanceAndRisk";
import FinancialsAndNotesSection from "./components/FinancialsAndNotesSection";
import SDBAssistant from "./components/SDBAssistant";
import SDBLogo from "./components/SDBLogo";
import AdminPortal from "./components/AdminPortal";
import { BrandingProvider } from "./components/BrandingContext";
import { BookOpen, TrendingUp, Calendar, Handshake, ShieldAlert, Award, ArrowLeft, FileText, ShieldCheck } from "lucide-react";

type ActiveSection = "overview" | "leadership" | "timeline" | "strategy" | "capitals" | "governance" | "financials";

function AppContent() {
  const [showCover, setShowCover] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>("overview");
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  const handleStartExploring = () => {
    setShowCover(false);
  };

  const handleReturnToCover = () => {
    setShowCover(true);
  };

  if (showAdmin) {
    return (
      <div id="sdb-app-wrapper" className="min-h-screen bg-gradient-to-br from-sdb-cream via-sdb-cream to-sdb-cream-dark text-[#1A1230] selection:bg-sdb-purple/20 selection:text-sdb-purple font-sans antialiased overflow-x-hidden p-4 md:p-8 flex flex-col justify-center">
        <AdminPortal onBack={() => setShowAdmin(false)} />
      </div>
    );
  }

  return (
    <div id="sdb-app-wrapper" className="min-h-screen bg-gradient-to-br from-sdb-cream via-sdb-cream to-sdb-cream-dark text-[#1A1230] selection:bg-sdb-purple/20 selection:text-sdb-purple font-sans antialiased overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showCover ? (
          <motion.div
            key="cover-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <ThemeCover onExplore={handleStartExploring} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col justify-between relative"
          >
            {/* Ambient Background Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sdb-coral/5 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sdb-purple/5 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Navigation Header */}
            <header id="dashboard-navbar" className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-sdb-purple/10 px-4 md:px-8 py-4">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Brand */}
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center space-x-2">
                    <SDBLogo className="h-9" />
                  </div>
                  <p className="text-[9px] text-slate-500 tracking-wider font-mono uppercase ml-12 -mt-1">Integrated Annual Report 2025</p>
                </div>

                {/* Main Nav Items */}
                <nav id="navbar-nav-items" className="flex items-center space-x-1 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
                  {[
                    { id: "overview", label: "Overview", icon: TrendingUp },
                    { id: "leadership", label: "Leadership", icon: Handshake },
                    { id: "timeline", label: "Evolution", icon: Calendar },
                    { id: "strategy", label: "Strategy", icon: Award },
                    { id: "capitals", label: "6 Capitals", icon: BookOpen },
                    { id: "governance", label: "Governance & Risk", icon: ShieldCheck },
                    { id: "financials", label: "Financials & Notes", icon: FileText }
                  ].map((item) => {
                    const NavIcon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id as ActiveSection)}
                        className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-sdb-purple text-white shadow-md shadow-sdb-purple/10 border border-transparent"
                            : "text-sdb-purple/70 hover:text-sdb-purple hover:bg-sdb-purple/5"
                        }`}
                      >
                        <NavIcon className="w-3.5 h-3.5" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Back to Cover button */}
                <button
                  onClick={handleReturnToCover}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-sdb-coral hover:text-sdb-purple transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                  <span>Theme Cover</span>
                </button>
              </div>
            </header>

            {/* Main Interactive Presentation Canvas */}
            <main id="dashboard-content-area" className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="relative"
                  >
                    {activeSection === "overview" && <FinancialCharts />}
                    {activeSection === "leadership" && <LeadershipSection />}
                    {activeSection === "timeline" && <TimelineSection />}
                    {activeSection === "strategy" && <StrategySection />}
                    {activeSection === "capitals" && <CapitalsHub />}
                    {activeSection === "governance" && <GovernanceAndRisk />}
                    {activeSection === "financials" && <FinancialsAndNotesSection />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>

            {/* Premium Footer */}
            <footer id="dashboard-footer" className="bg-sdb-cream-dark/50 border-t border-sdb-purple/10 py-8 px-4 md:px-8 mt-12">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <div className="flex flex-col items-start text-left">
                  <SDBLogo className="h-7" />
                  <p className="text-[10px] text-slate-500 font-mono tracking-widest ml-10 -mt-0.5">A FUTURE HANDCRAFTED</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <p className="text-center md:text-right font-mono text-[10px]">
                    Integrated Annual Report 2025 | Developed in compliance with CBSL & CSE Guidelines
                  </p>
                  <button
                    onClick={() => setShowAdmin(true)}
                    className="inline-flex items-center space-x-1 hover:text-sdb-purple transition-colors bg-white/60 border border-sdb-purple/10 hover:border-sdb-purple/20 px-2 py-0.5 rounded-full font-mono text-[8px] font-bold cursor-pointer"
                  >
                    <span>ADMIN</span>
                  </button>
                </div>
              </div>
            </footer>
            {/* SDB Bank AI Annual Report Copilot */}
            <SDBAssistant />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrandingProvider>
      <AppContent />
    </BrandingProvider>
  );
}
