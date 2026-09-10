/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Interactive Web Experience
 * "A FUTURE HANDCRAFTED"
 * Inspired by Commercial Bank of Ceylon PLC Annual Report (combank2025.annualreports.lk)
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeCover from "./components/ThemeCover";
import FinancialCharts from "./components/FinancialCharts";
import TimelineSection from "./components/TimelineSection";
import CapitalsHub from "./components/CapitalsHub";
import LeadershipSection from "./components/LeadershipSection";
import StrategySection from "./components/StrategySection";
import ProductsSection from "./components/ProductsSection";
import OperatingEnvironment from "./components/OperatingEnvironment";
import StakeholdersAndMateriality from "./components/StakeholdersAndMateriality";
import SustainabilitySection from "./components/SustainabilitySection";
import GovernanceAndRisk from "./components/GovernanceAndRisk";
import FinancialsAndNotesSection from "./components/FinancialsAndNotesSection";
import SupplementarySection from "./components/SupplementarySection";
import MegaNavbar from "./components/MegaNavbar";
import AccessibilityPanel from "./components/AccessibilityPanel";
import MyReportDrawer, { BookmarkedSection } from "./components/MyReportDrawer";
import DownloadCentre from "./components/DownloadCentre";
import GlobalSearchModal from "./components/GlobalSearchModal";
import SDBAssistant from "./components/SDBAssistant";
import SDBLogo from "./components/SDBLogo";
import AdminPortal from "./components/AdminPortal";
import { BrandingProvider } from "./components/BrandingContext";
import { AuthProvider } from "./components/AuthContext";
import TableOfContents from "./components/TableOfContents";
import FeedbackSection from "./components/FeedbackSection";

export type ActiveSection = 
  | "overview" 
  | "leadership" 
  | "timeline" 
  | "strategy" 
  | "capitals" 
  | "products"
  | "environment"
  | "stakeholders"
  | "sustainability"
  | "governance" 
  | "financials"
  | "supplementary";

const INITIAL_BOOKMARKS: BookmarkedSection[] = [
  { id: "overview", title: "Financial Progress & 2025 Audited KPIs", category: "Overview", pageHint: "Pages 14–15", savedAt: "Default" },
  { id: "leadership", title: "Chairperson's Review (Ms. Dinithi Ratnayake)", category: "Leadership", pageHint: "Pages 16–19", savedAt: "Default" },
  { id: "strategy", title: "Strategic Roadmap 2026–2029 & Rabo Partnerships", category: "Strategy", pageHint: "Pages 24–25", savedAt: "Default" },
  { id: "sustainability", title: "8 Sustainability Pillars & UN SDGs Tracker", category: "Sustainability", pageHint: "Pages 34–39", savedAt: "Default" }
];

function AppContent() {
  const [showCover, setShowCover] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<ActiveSection>("overview");
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);
  const [showAccessibility, setShowAccessibility] = useState<boolean>(false);
  const [showMyReport, setShowMyReport] = useState<boolean>(false);

  // Accessibility States
  const [fontScale, setFontScale] = useState<number>(1);
  const [readingMask, setReadingMask] = useState<boolean>(false);
  const [mouseY, setMouseY] = useState<number>(300);
  const [highlightLinks, setHighlightLinks] = useState<boolean>(false);

  // My Report Bookmarks
  const [bookmarks, setBookmarks] = useState<BookmarkedSection[]>(() => {
    try {
      const saved = localStorage.getItem("sdb_bookmarks_2025");
      return saved ? JSON.parse(saved) : INITIAL_BOOKMARKS;
    } catch {
      return INITIAL_BOOKMARKS;
    }
  });

  const handleRemoveBookmark = (id: string) => {
    setBookmarks((prev) => {
      const updated = prev.filter((b) => b.id !== id);
      try { localStorage.setItem("sdb_bookmarks_2025", JSON.stringify(updated)); } catch {}
      return updated;
    });
  };

  const handleClearAllBookmarks = () => {
    setBookmarks([]);
    try { localStorage.setItem("sdb_bookmarks_2025", JSON.stringify([])); } catch {}
  };

  // Keyboard shortcut Ctrl+K / Cmd+K for Global Search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowSearchModal((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Reading mask mouse position tracking
  useEffect(() => {
    if (!readingMask) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [readingMask]);

  const handleStartExploring = () => {
    setShowCover(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReturnToCover = () => {
    setShowCover(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateSection = (section: string, subtab?: string) => {
    setShowCover(false);
    setActiveSection(section as ActiveSection);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (subtab) {
      setTimeout(() => {
        if (section === "leadership") {
          window.dispatchEvent(new CustomEvent("set-leadership-tab", { detail: subtab }));
        } else if (section === "governance") {
          window.dispatchEvent(new CustomEvent("set-governance-tab", { detail: subtab }));
        } else if (section === "financials") {
          window.dispatchEvent(new CustomEvent("set-financials-tab", { detail: subtab }));
        }
      }, 100);
    }
  };

  if (showAdmin) {
    return (
      <div id="sdb-app-wrapper" className="min-h-screen bg-gradient-to-br from-sdb-cream via-sdb-cream to-sdb-cream-dark text-[#1A1230] selection:bg-sdb-purple/20 selection:text-sdb-purple font-sans antialiased overflow-x-hidden p-4 md:p-8 flex flex-col justify-center">
        <AdminPortal onBack={() => setShowAdmin(false)} />
      </div>
    );
  }

  return (
    <div
      id="sdb-app-wrapper"
      className={`min-h-screen bg-gradient-to-br from-sdb-cream via-sdb-cream to-sdb-cream-dark text-[#1A1230] selection:bg-sdb-purple/20 selection:text-sdb-purple font-sans antialiased overflow-x-hidden ${
        highlightLinks ? "highlight-links" : ""
      }`}
      style={{ fontSize: fontScale === 1 ? undefined : `${fontScale}rem` }}
    >
      {/* Reading Mask Overlay */}
      {readingMask && (
        <div className="reading-mask-overlay">
          <div
            className="reading-mask-top"
            style={{ top: 0, height: `${Math.max(0, mouseY - 55)}px` }}
          />
          <div
            className="reading-mask-bottom"
            style={{ top: `${mouseY + 55}px`, bottom: 0 }}
          />
        </div>
      )}

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
            <ThemeCover
              onExplore={handleStartExploring}
              onNavigateSection={handleNavigateSection}
              onOpenDownloadCentre={() => setShowDownloadModal(true)}
              onOpenSearch={() => setShowSearchModal(true)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col justify-between relative bg-white"
          >
            {/* Sleek Minimalist Fixed Top Bar with Mega Dropdown */}
            <MegaNavbar
              activeSection={activeSection}
              onNavigateSection={handleNavigateSection}
              onReturnToCover={handleReturnToCover}
              onOpenSearch={() => setShowSearchModal(true)}
              onOpenDownloadCentre={() => setShowDownloadModal(true)}
              onOpenAccessibility={() => setShowAccessibility(true)}
              onOpenMyReport={() => setShowMyReport(true)}
              bookmarkCount={bookmarks.length}
            />

            {/* Main Presentation Canvas */}
            <main id="dashboard-content-area" className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative"
                  >
                    {activeSection === "overview" && (
                      <div className="space-y-12">
                        <FinancialCharts />
                        <FeedbackSection />
                      </div>
                    )}
                    {activeSection === "leadership" && <LeadershipSection />}
                    {activeSection === "timeline" && <TimelineSection />}
                    {activeSection === "strategy" && <StrategySection />}
                    {activeSection === "capitals" && <CapitalsHub />}
                    {activeSection === "products" && <ProductsSection />}
                    {activeSection === "environment" && <OperatingEnvironment />}
                    {activeSection === "stakeholders" && <StakeholdersAndMateriality />}
                    {activeSection === "sustainability" && <SustainabilitySection />}
                    {activeSection === "governance" && <GovernanceAndRisk />}
                    {activeSection === "financials" && <FinancialsAndNotesSection />}
                    {activeSection === "supplementary" && <SupplementarySection />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>

            {/* Premium Minimal Footer */}
            <footer id="dashboard-footer" className="bg-white/80 border-t border-slate-200/80 py-8 px-4 md:px-8 mt-12 backdrop-blur-sm">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                <div className="flex flex-col items-start text-left">
                  <SDBLogo className="h-7" />
                  <p className="text-[10px] text-slate-400 font-mono tracking-widest ml-10 -mt-0.5">
                    A FUTURE HANDCRAFTED
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <p className="text-center md:text-right font-mono text-[10px] text-slate-500">
                    SANASA Development Bank PLC &bull; Integrated Annual Report 2025 &bull; Colombo Stock Exchange (CSE: SDB.N0000)
                  </p>
                  <button
                    onClick={() => setShowAdmin(true)}
                    className="inline-flex items-center space-x-1 hover:text-sdb-purple transition-colors bg-slate-100 border border-slate-200 hover:border-sdb-purple/20 px-2.5 py-0.5 rounded-full font-mono text-[9px] font-bold cursor-pointer"
                  >
                    <span>ADMIN</span>
                  </button>
                </div>
              </div>
            </footer>

            {/* Interactive SDB Assistant */}
            <SDBAssistant />

            {/* Table of Contents Drawer */}
            <TableOfContents activeSection={activeSection} onNavigate={handleNavigateSection} />

            {/* Accessibility Side Panel */}
            <AccessibilityPanel
              isOpen={showAccessibility}
              onClose={() => setShowAccessibility(false)}
              fontScale={fontScale}
              onFontScaleChange={setFontScale}
              readingMask={readingMask}
              onReadingMaskChange={setReadingMask}
              highlightLinks={highlightLinks}
              onHighlightLinksChange={setHighlightLinks}
            />

            {/* My Report Drawer */}
            <MyReportDrawer
              isOpen={showMyReport}
              onClose={() => setShowMyReport(false)}
              bookmarks={bookmarks}
              onRemoveBookmark={handleRemoveBookmark}
              onClearAll={handleClearAllBookmarks}
              onNavigate={handleNavigateSection}
              onOpenDownloadCentre={() => setShowDownloadModal(true)}
            />

            {/* Global Search Modal (Ctrl+K) */}
            <GlobalSearchModal
              isOpen={showSearchModal}
              onClose={() => setShowSearchModal(false)}
              onSelectSection={handleNavigateSection}
            />

            {/* Download Centre Modal */}
            <DownloadCentre
              isOpen={showDownloadModal}
              onClose={() => setShowDownloadModal(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <BrandingProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrandingProvider>
  );
}
