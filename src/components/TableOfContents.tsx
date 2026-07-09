import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, ChevronRight, X, Menu, TrendingUp, Handshake, Calendar, 
  Award, ShieldCheck, FileText, Compass, Sparkles, HelpCircle, 
  Coins, Home, Brain, Users, Leaf, ArrowRight, Activity
} from "lucide-react";
import SDBLogo from "./SDBLogo";

// Define the shape of our Table of Contents structure
interface SubsectionItem {
  id: string; // DOM element ID or subtab value
  title: string;
  type: "tab" | "scroll" | "index";
  tabValue?: string; // used for custom component tabs
  indexValue?: number; // used for capitals index
  icon?: any;
}

interface ChapterItem {
  id: string; // activeSection id
  title: string;
  description: string;
  icon: any;
  colorClass: string;
  subsections: SubsectionItem[];
}

const CHAPTERS: ChapterItem[] = [
  {
    id: "overview",
    title: "Financial Progress & Highlights",
    description: "SDB bank's 5-year financial trajectory and key performance indicators.",
    icon: TrendingUp,
    colorClass: "bg-sdb-coral/10 text-sdb-coral border-sdb-coral/20",
    subsections: [
      { id: "financial-section", title: "Performance Progress Trend", type: "scroll" },
      { id: "financial-highlights-container", title: "Metric Selection Portal", type: "scroll" },
      { id: "financial-ratios-container", title: "Key Profitability, Capital & Liquidity Ratios", type: "scroll" }
    ]
  },
  {
    id: "leadership",
    title: "Leadership Messages",
    description: "Key letters and strategic messages from SDB's leadership.",
    icon: Handshake,
    colorClass: "bg-sdb-purple/10 text-sdb-purple border-sdb-purple/20",
    subsections: [
      { id: "chairperson", title: "Chairperson's Message", type: "tab", tabValue: "chairperson", icon: Sparkles },
      { id: "ceo", title: "CEO's Executive Review", type: "tab", tabValue: "ceo", icon: HelpCircle },
      { id: "board", title: "Board of Directors Profile Grid", type: "tab", tabValue: "board", icon: Users },
      { id: "management", title: "Corporate Management Team", type: "tab", tabValue: "management", icon: Handshake }
    ]
  },
  {
    id: "timeline",
    title: "Our Evolution",
    description: "A 28-year timeline of community empowerment since 1997.",
    icon: Calendar,
    colorClass: "bg-sdb-amber/10 text-sdb-amber border-sdb-amber/20",
    subsections: [
      { id: "timeline-section", title: "Interactive Milestone Navigator", type: "scroll" }
    ]
  },
  {
    id: "strategy",
    title: "Strategic Roadmap 2026-2029",
    description: "The sustainable growth blueprint, core pillars, and future targets.",
    icon: Award,
    colorClass: "bg-sdb-green/10 text-sdb-green border-sdb-green/20",
    subsections: [
      { id: "strategic-pillars-bento", title: "Four Strategic Pillars (Co-op, MSME, Agri, Digital)", type: "scroll" },
      { id: "core-values-bento", title: "Vision, Mission & Cooperative Core Values", type: "scroll" },
      { id: "strategic-goals-container", title: "Strategic Growth Goals & KPIs", type: "scroll" }
    ]
  },
  {
    id: "capitals",
    title: "Value Creation Capitals",
    description: "How SDB harnesses its six capitals to co-create value.",
    icon: BookOpen,
    colorClass: "bg-sdb-blue/10 text-sdb-blue border-sdb-blue/20",
    subsections: [
      { id: "financial-cap", title: "Financial Capital", type: "index", indexValue: 0, icon: Coins },
      { id: "manufactured-cap", title: "Manufactured Capital", type: "index", indexValue: 1, icon: Home },
      { id: "intellectual-cap", title: "Intellectual Capital", type: "index", indexValue: 2, icon: Brain },
      { id: "human-cap", title: "Human Capital", type: "index", indexValue: 3, icon: Users },
      { id: "social-cap", title: "Social & Relationship Capital", type: "index", indexValue: 4, icon: Handshake },
      { id: "natural-cap", title: "Natural Capital", type: "index", indexValue: 5, icon: Leaf }
    ]
  },
  {
    id: "governance",
    title: "Governance & Enterprise Risk",
    description: "Our board oversight committees and climate-risk resilience models.",
    icon: ShieldCheck,
    colorClass: "bg-sdb-purple/10 text-sdb-purple border-sdb-purple/20",
    subsections: [
      { id: "governance", title: "Corporate Governance & Committees", type: "tab", tabValue: "governance", icon: ShieldCheck },
      { id: "risk", title: "Enterprise Risk & Climate Resilience", type: "tab", tabValue: "risk", icon: Activity }
    ]
  },
  {
    id: "financials",
    title: "Financial Statements & Notes",
    description: "Audited accounts and explanatory accounting policy disclosures.",
    icon: FileText,
    colorClass: "bg-sdb-coral/10 text-sdb-coral border-sdb-coral/20",
    subsections: [
      { id: "income", title: "Statement of Profit or Loss", type: "tab", tabValue: "income", icon: FileText },
      { id: "balance", title: "Statement of Financial Position", type: "tab", tabValue: "balance", icon: FileText },
      { id: "cashflow", title: "Statement of Cash Flows", type: "tab", tabValue: "cashflow", icon: FileText },
      { id: "equity", title: "Statement of Changes in Equity", type: "tab", tabValue: "equity", icon: FileText }
    ]
  }
];

interface TableOfContentsProps {
  activeSection: string;
  onNavigate: (sectionId: any) => void;
}

export default function TableOfContents({ activeSection, onNavigate }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Esc key closes the overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubsectionClick = (chapterId: string, item: SubsectionItem) => {
    // 1. Navigate to the main chapter
    onNavigate(chapterId);

    // 2. Close Table of Contents overlay
    setIsOpen(false);

    // 3. Perform specific subsection behavior with a small delay to allow chapter component mounting
    setTimeout(() => {
      if (item.type === "tab" && item.tabValue) {
        // Dispatch custom events for components to switch their tabs
        if (chapterId === "leadership") {
          window.dispatchEvent(new CustomEvent("set-leadership-tab", { detail: item.tabValue }));
        } else if (chapterId === "governance") {
          window.dispatchEvent(new CustomEvent("set-governance-tab", { detail: item.tabValue }));
        } else if (chapterId === "financials") {
          window.dispatchEvent(new CustomEvent("set-financials-tab", { detail: item.tabValue }));
        }
      } else if (item.type === "index" && item.indexValue !== undefined) {
        if (chapterId === "capitals") {
          window.dispatchEvent(new CustomEvent("set-capitals-index", { detail: item.indexValue }));
        }
      }

      // Scroll to target element ID if specified
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (item.type === "tab") {
        // Scroll to top of section if we just switched tab
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed right-6 top-[180px] z-40 hidden md:block">
        <motion.button
          id="toc-toggle-floating-button"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-2 bg-sdb-purple text-white px-4 py-2.5 rounded-full shadow-lg border border-white/10 hover:bg-sdb-purple-dark transition-all duration-300 group cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-sdb-amber" />
          <span className="text-xs font-bold font-sans uppercase tracking-wider">Report Index</span>
        </motion.button>
      </div>

      {/* Mobile Sticky Floating Button */}
      <div className="fixed right-4 bottom-24 z-40 md:hidden">
        <motion.button
          id="toc-toggle-mobile-button"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center bg-sdb-purple text-white w-12 h-12 rounded-full shadow-xl border border-white/10 cursor-pointer"
        >
          <BookOpen className="w-5 h-5 text-sdb-amber" />
        </motion.button>
      </div>

      {/* Table of Contents Sliding Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Dark Blurred Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Sidebar Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-sdb-cream-dark/30 to-white">
                <div className="flex flex-col items-start text-left">
                  <div className="flex items-center space-x-2">
                    <SDBLogo className="h-7" />
                    <span className="font-serif text-sm font-bold text-sdb-purple tracking-tight border-l border-sdb-purple/20 pl-2">Report Index</span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-mono tracking-wide uppercase mt-1">A Future Handcrafted</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation List */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 scrollbar-thin">
                <div className="text-left space-y-1">
                  <h4 className="font-serif text-xs font-bold text-slate-400 uppercase tracking-widest">Table of Contents</h4>
                  <p className="text-xs text-slate-500">Select any chapter or subsection to instantly hop to that segment.</p>
                </div>

                <div className="space-y-6">
                  {CHAPTERS.map((chapter) => {
                    const ChapterIcon = chapter.icon;
                    const isCurrentActive = activeSection === chapter.id;

                    return (
                      <div key={chapter.id} className="space-y-2 border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                        {/* Chapter Row Header */}
                        <button
                          onClick={() => {
                            onNavigate(chapter.id);
                            setIsOpen(false);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={`w-full flex items-start space-x-3.5 p-2 rounded-xl transition-all duration-300 group text-left cursor-pointer ${
                            isCurrentActive 
                              ? "bg-sdb-purple/5 border border-sdb-purple/10" 
                              : "hover:bg-slate-50 border border-transparent"
                          }`}
                        >
                          <div className={`p-2.5 rounded-xl border ${chapter.colorClass} shrink-0`}>
                            <ChapterIcon className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="flex items-center space-x-1.5">
                              <h5 className={`font-serif text-sm font-bold transition-colors ${
                                isCurrentActive ? "text-sdb-purple" : "text-slate-800 group-hover:text-sdb-purple"
                              }`}>
                                {chapter.title}
                              </h5>
                              {isCurrentActive && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sdb-coral animate-pulse" />
                              )}
                            </div>
                            <p className="text-[11px] text-slate-500 leading-tight">
                              {chapter.description}
                            </p>
                          </div>
                        </button>

                        {/* Subsection Tree Links */}
                        {chapter.subsections.length > 0 && (
                          <div className="pl-14 pr-2 space-y-1.5 text-left border-l border-slate-100 ml-7">
                            {chapter.subsections.map((sub) => {
                              const SubIcon = sub.icon;
                              return (
                                <button
                                  key={sub.id}
                                  onClick={() => handleSubsectionClick(chapter.id, sub)}
                                  className="w-full flex items-center space-x-2 text-xs text-slate-600 hover:text-sdb-purple py-1 transition-colors group cursor-pointer"
                                >
                                  {SubIcon ? (
                                    <SubIcon className="w-3 h-3 text-slate-400 group-hover:text-sdb-purple transition-colors shrink-0" />
                                  ) : (
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-sdb-coral transition-all shrink-0" />
                                  )}
                                  <span className="font-medium tracking-tight truncate leading-tight">
                                    {sub.title}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer / Info panel */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 text-left">
                <div className="flex items-center space-x-2 text-[10px] text-slate-500 font-mono tracking-widest uppercase mb-1">
                  <span>SDB bank</span>
                  <span>•</span>
                  <span>Interactive Hub</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Navigating the fabric of co-operative progress and grassroots empowerment. Press <kbd className="bg-slate-200 px-1 py-0.5 rounded font-mono text-[10px]">ESC</kbd> to close index overlay.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
