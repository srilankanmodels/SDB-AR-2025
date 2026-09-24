/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, FileText, TrendingUp, DollarSign, Calendar, Scale, ChevronDown, ChevronRight, 
  HelpCircle, Sparkles, BookOpen, Calculator, Download, AlertCircle, FileSpreadsheet, Layers,
  Bookmark, BookmarkCheck
} from "lucide-react";
import { 
  INCOME_STATEMENT_ROWS, BALANCE_SHEET_ROWS, CASH_FLOW_ROWS, CHANGES_IN_EQUITY_ROWS, 
  NOTES_TO_FINANCIALS, SUPPLEMENTARY_INFO, NoteDetail, FinancialRow 
} from "../data/financialsAndNotes";
import { useBranding } from "./BrandingContext";
import { useAuth } from "./AuthContext";
import { supabase, handleSupabaseError, OperationType } from "../supabase";

// Images generated & extracted from published annual report
const IMAGES = {
  headOffice: "/src/assets/images/sdb_head_office_1783367607149.jpg",
  cooperativeFarming: "/src/assets/annual_report_images/leadership/page_43_image_0.png",
  digitalBanking: "/src/assets/annual_report_images/capitals/page_88_image_6.png",
  boardroomLeadership: "/src/assets/annual_report_images/board/page_52_image_0.png"
};

type StatementType = "income" | "balance" | "cashflow" | "equity";

interface SearchResult {
  type: "statement" | "note" | "other";
  section: string;
  title: string;
  excerpt: string;
  linkId: string; // "income-row-X" or "note-X"
  tab?: StatementType;
}

export default function FinancialsAndNotesSection() {
  const { branding } = useBranding();
  const { user } = useAuth();
  const [bookmarks, setBookmarks] = useState<Record<string, string>>({}); // Mapping from itemId -> docId

  const activeImages = useMemo(() => ({
    headOffice: branding?.headOfficeImage || IMAGES.headOffice,
    cooperativeFarming: branding?.cooperativeFarmingImage || IMAGES.cooperativeFarming,
    digitalBanking: branding?.digitalBankingImage || IMAGES.digitalBanking,
    boardroomLeadership: branding?.boardroomLeadershipImage || IMAGES.boardroomLeadership
  }), [branding]);

  // Load user's bookmarks from Supabase
  useEffect(() => {
    if (!user) {
      setBookmarks({});
      return;
    }
    
    async function fetchBookmarks() {
      try {
        const { data, error } = await supabase
          .from("bookmarks")
          .select("*")
          .eq("user_id", user.uid)
          .eq("item_type", "note");

        if (error) {
          console.error("Error loading bookmarks:", error);
          return;
        }

        const bMap: Record<string, string> = {};
        if (data) {
          data.forEach((item: any) => {
            bMap[item.item_id] = item.id;
          });
        }
        setBookmarks(bMap);
      } catch (err) {
        console.error("Error loading bookmarks:", err);
      }
    }
    fetchBookmarks();
  }, [user]);

  const handleToggleBookmark = async (noteNum: string, noteTitle: string) => {
    if (!user) {
      alert("Please sign in using the AI Copilot chat to save report bookmarks!");
      return;
    }
    
    const existingDocId = bookmarks[noteNum];
    if (existingDocId) {
      try {
        const { error } = await supabase
          .from("bookmarks")
          .delete()
          .eq("id", existingDocId);

        if (error) {
          handleSupabaseError(error, OperationType.DELETE, "bookmarks");
        }
        setBookmarks(prev => {
          const next = { ...prev };
          delete next[noteNum];
          return next;
        });
      } catch (err) {
        console.error("Error removing bookmark:", err);
      }
    } else {
      const docId = `bookmark-${user.uid}-${noteNum.replace(/\s+/g, "_")}`;
      try {
        const { error } = await supabase
          .from("bookmarks")
          .insert([{
            id: docId,
            user_id: user.uid,
            item_type: "note",
            item_id: noteNum,
            title: `${noteNum}: ${noteTitle}`,
            section_id: "financials",
            personal_notes: "",
            note_number: parseFloat(noteNum.replace(/[^\d.]/g, "")) || 0,
            note_title: noteTitle,
            created_at: new Date().toISOString()
          }]);

        if (error) {
          handleSupabaseError(error, OperationType.CREATE, "bookmarks");
        }
        setBookmarks(prev => ({
          ...prev,
          [noteNum]: docId
        }));
      } catch (err) {
        console.error("Error adding bookmark:", err);
      }
    }
  };

  const [activeStatementTab, setActiveStatementTab] = useState<StatementType>("income");

  useEffect(() => {
    const handleSetTab = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && ["income", "balance", "cashflow", "equity"].includes(detail)) {
        setActiveStatementTab(detail as StatementType);
      }
    };
    window.addEventListener("set-financials-tab", handleSetTab);
    return () => {
      window.removeEventListener("set-financials-tab", handleSetTab);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedNotes, setExpandedNotes] = useState<Record<string, boolean>>({});
  const [highlightedNoteId, setHighlightedNoteId] = useState<string | null>(null);
  const [statementSearchHighlight, setStatementSearchHighlight] = useState<string | null>(null);

  // References for scrolling to notes
  const notesRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Helper to highlight matching text in content
  const highlightText = (text: string, query: string) => {
    if (!query) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-sdb-amber/30 text-sdb-purple font-semibold px-0.5 rounded">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // Helper to determine if a table column is predominantly numeric
  const isColumnNumeric = (rows: (string | number)[][], colIdx: number): boolean => {
    if (colIdx === 0) return false;
    let numCount = 0;
    let textCount = 0;
    for (const r of rows) {
      const val = r[colIdx];
      if (val !== undefined && val !== null) {
        const s = String(val).trim();
        if (s !== "" && s !== "-" && s !== "–" && s !== "—") {
          // Check if numeric, currency, ratio, or percentage
          if (/^[\(\[\-\+]?[\d,]+(\.\d+)?%?[\)\]]?$/.test(s)) {
            numCount++;
          } else {
            textCount++;
          }
        }
      }
    }
    return numCount >= textCount && numCount > 0;
  };

  // Toggle note expansion
  const toggleNote = (noteNum: string) => {
    setExpandedNotes(prev => ({
      ...prev,
      [noteNum]: !prev[noteNum]
    }));
  };

  // Expand all or Collapse all notes
  const expandAllNotes = () => {
    const allExpanded: Record<string, boolean> = {};
    NOTES_TO_FINANCIALS.forEach(n => {
      allExpanded[n.number] = true;
    });
    setExpandedNotes(allExpanded);
  };

  const collapseAllNotes = () => {
    setExpandedNotes({});
  };

  // Financial search filter
  const filterStatementRows = (rows: FinancialRow[]) => {
    if (!searchQuery) return rows;
    return rows.map(row => {
      const isMatch = row.item.toLowerCase().includes(searchQuery.toLowerCase());
      return { ...row, isSearchMatch: isMatch };
    });
  };

  // Check if anything in a row matches
  const doesRowMatch = (row: FinancialRow, query: string) => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      row.item.toLowerCase().includes(q) ||
      row["2025"].toString().includes(q) ||
      row["2024"].toString().includes(q) ||
      row["2023"].toString().includes(q) ||
      row["2022"].toString().includes(q) ||
      row["2021"].toString().includes(q)
    );
  };

  // Detailed multi-index search query logic
  const searchResults = useMemo<SearchResult[]>(() => {
    if (!searchQuery || searchQuery.trim().length < 2) return [];
    const results: SearchResult[] = [];
    const query = searchQuery.trim().toLowerCase();

    // 1. Search in Income Statement
    INCOME_STATEMENT_ROWS.forEach((row, index) => {
      if (doesRowMatch(row, query)) {
        results.push({
          type: "statement",
          section: "Income Statement",
          title: row.item,
          excerpt: `Statement row with values: 2025: LKR ${row["2025"]}M, 2024: LKR ${row["2024"]}M`,
          linkId: `income-row-${index}`,
          tab: "income"
        });
      }
    });

    // 2. Search in Balance Sheet
    BALANCE_SHEET_ROWS.forEach((row, index) => {
      if (doesRowMatch(row, query)) {
        results.push({
          type: "statement",
          section: "Balance Sheet",
          title: row.item,
          excerpt: `Balance sheet row with values: 2025: LKR ${row["2025"]}M, 2024: LKR ${row["2024"]}M`,
          linkId: `balance-row-${index}`,
          tab: "balance"
        });
      }
    });

    // 3. Search in Cash Flow
    CASH_FLOW_ROWS.forEach((row, index) => {
      if (doesRowMatch(row, query)) {
        results.push({
          type: "statement",
          section: "Statement of Cash Flows",
          title: row.item,
          excerpt: `Cash Flow row with values: 2025: LKR ${row["2025"]}M, 2024: LKR ${row["2024"]}M`,
          linkId: `cashflow-row-${index}`,
          tab: "cashflow"
        });
      }
    });

    // 4. Search in Notes to Financials
    NOTES_TO_FINANCIALS.forEach((note) => {
      let isMatch = false;
      let matchExcerpt = "";

      if (note.number.toLowerCase().includes(query) || note.title.toLowerCase().includes(query)) {
        isMatch = true;
        matchExcerpt = `Note ${note.number}: ${note.title}${note.pages ? ` (${note.pages})` : ""}`;
      } else if (note.content && note.content.toLowerCase().includes(query)) {
        isMatch = true;
        const idx = note.content.toLowerCase().indexOf(query);
        const start = Math.max(0, idx - 40);
        const end = Math.min(note.content.length, idx + query.length + 80);
        matchExcerpt = `...${note.content.substring(start, end)}...`;
      } else if (note.accountingPolicy && note.accountingPolicy.toLowerCase().includes(query)) {
        isMatch = true;
        const idx = note.accountingPolicy.toLowerCase().indexOf(query);
        const start = Math.max(0, idx - 40);
        const end = Math.min(note.accountingPolicy.length, idx + query.length + 80);
        matchExcerpt = `...${note.accountingPolicy.substring(start, end)}...`;
      } else if (note.tableData) {
        // Search table cells
        for (const row of note.tableData) {
          for (const key in row) {
            if (row[key].toString().toLowerCase().includes(query)) {
              isMatch = true;
              matchExcerpt = `Matches note table cell: "${row[key]}" under column "${key}"`;
              break;
            }
          }
          if (isMatch) break;
        }
      }

      // Also search subNotes
      if (!isMatch && note.subNotes) {
        for (const sub of note.subNotes) {
          if (sub.title.toLowerCase().includes(query) || (sub.content && sub.content.toLowerCase().includes(query))) {
            isMatch = true;
            matchExcerpt = `Sub-note ${sub.subNumber} (${sub.title}): ${sub.content?.substring(0, 100)}...`;
            break;
          }
        }
      }

      // Also search tables
      if (!isMatch && note.tables) {
        for (const tbl of note.tables) {
          for (const row of tbl.rows) {
            const hit = row.find(c => c.toLowerCase().includes(query));
            if (hit) {
              isMatch = true;
              matchExcerpt = `Matches note table: "${hit}"`;
              break;
            }
          }
          if (isMatch) break;
        }
      }

      if (isMatch) {
        results.push({
          type: "note",
          section: `Notes to Financials`,
          title: `${note.number}: ${note.title}`,
          excerpt: matchExcerpt,
          linkId: note.number
        });
      }
    });

    return results;
  }, [searchQuery]);

  // Jump to Note or Statement Row
  const scrollToNote = (noteNumber: string) => {
    setExpandedNotes(prev => ({ ...prev, [noteNumber]: true }));
    setHighlightedNoteId(noteNumber);
    setTimeout(() => {
      const element = notesRefs.current[noteNumber];
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  };

  const handleJumpToResult = (result: SearchResult) => {
    if (result.type === "statement" && result.tab) {
      setActiveStatementTab(result.tab);
      setStatementSearchHighlight(result.title);
      // Scroll smoothly to statements card
      const element = document.getElementById("financial-statements-card");
      element?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (result.type === "note") {
      scrollToNote(result.linkId);
    }
  };

  // Clear highlight timer
  useEffect(() => {
    if (highlightedNoteId) {
      const timer = setTimeout(() => {
        setHighlightedNoteId(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [highlightedNoteId]);

  useEffect(() => {
    if (statementSearchHighlight) {
      const timer = setTimeout(() => {
        setStatementSearchHighlight(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [statementSearchHighlight]);

  // Statements list data for rendering
  const activeStatementRows = useMemo(() => {
    switch (activeStatementTab) {
      case "income": return INCOME_STATEMENT_ROWS;
      case "balance": return BALANCE_SHEET_ROWS;
      case "cashflow": return CASH_FLOW_ROWS;
      case "equity": return CHANGES_IN_EQUITY_ROWS;
    }
  }, [activeStatementTab]);

  return (
    <section id="financials-and-notes-section" className="space-y-12">
      {/* Page Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 text-left relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
            Financial Statements & Notes
          </h2>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base">
            SDB bank's fully audited accounts for the Financial Year ended 31st December 2025. Explore detailed Balance Sheets, Income Statements, and browse or search through all 46 Notes to the Accounts.
          </p>
        </div>
        
        {/* Quick action badges */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center space-x-1.5 bg-sdb-green/10 border border-sdb-green/20 text-sdb-green px-2.5 py-1 rounded-full text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-sdb-green" />
            <span>Audited by Ernst & Young (EY)</span>
          </span>
          <span className="inline-flex items-center space-x-1.5 bg-sdb-purple/10 border border-sdb-purple/20 text-sdb-purple px-2.5 py-1 rounded-full text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Sri Lankan GAAP / SLFRS 9</span>
          </span>
        </div>
      </div>

      {/* Global Interactive Search Portal */}
      <div id="annual-report-search-portal" className="glass-card rounded-3xl p-6 md:p-8 shadow-md border-l-4 border-sdb-coral text-left">
        <div className="flex items-center space-x-2 text-sdb-coral mb-3">
          <Sparkles className="w-5 h-5" />
          <h3 className="font-serif text-lg font-bold">Annual Report Full-Text Search Engine</h3>
        </div>
        <p className="text-slate-600 text-xs md:text-sm mb-4">
          Type any financial keyword, row name, figure, note title, or statutory policy below. Our engine instantly queries every single number, statement row, and all 46 detailed notes of SDB's 2025 Annual Report.
        </p>
        
        {/* Search bar input */}
        <div className="relative max-w-2xl">
          <input
            type="text"
            placeholder="Search financials (e.g., 'Impairment', 'Basel III', 'FMO', 'deposits', 'stated capital', '800')..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/80 border border-sdb-purple/20 focus:border-sdb-purple rounded-xl py-3 pl-11 pr-4 text-sm text-sdb-purple outline-none shadow-inner transition-colors"
          />
          <Search className="w-4 h-4 text-sdb-purple/40 absolute left-4 top-3.5" />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-3.5 text-xs text-sdb-coral hover:underline font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Real-time Search Results Panel */}
        <AnimatePresence>
          {searchQuery && searchQuery.trim().length >= 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 border-t border-sdb-purple/10 pt-4 space-y-4 max-h-[350px] overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  Found {searchResults.length} matches in SDB Annual Report 2025
                </span>
              </div>

              {searchResults.length === 0 ? (
                <div className="flex items-center space-x-2 text-slate-500 py-4 text-sm">
                  <AlertCircle className="w-4 h-4 text-sdb-amber" />
                  <span>No exact financial records found. Try synonyms or broader terms (e.g. 'capital', 'tax', 'loan').</span>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2">
                  {searchResults.map((result, i) => (
                    <div
                      key={i}
                      onClick={() => handleJumpToResult(result)}
                      className="border border-sdb-purple/10 hover:border-sdb-coral bg-white/60 hover:bg-white p-3.5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between text-left shadow-sm group"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                            result.type === "statement" 
                              ? "bg-sdb-blue/10 text-sdb-blue" 
                              : "bg-sdb-purple/10 text-sdb-purple"
                          }`}>
                            {result.section}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-sdb-purple group-hover:text-sdb-coral transition-colors">
                          {result.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                          {result.excerpt}
                        </p>
                      </div>
                      <span className="text-[10px] text-sdb-coral font-bold mt-2 flex items-center space-x-1 self-end group-hover:translate-x-1 transition-transform">
                        <span>Click to Jump & Highlight</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Corporate Image Integration Segment */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40 border border-sdb-purple/10 rounded-3xl p-6 md:p-8">
        <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md max-h-[220px]">
          <img
            src={activeImages.headOffice}
            alt="SDB Bank Head Office Colombo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="lg:col-span-8 text-left space-y-3">
          <span className="font-mono text-[9px] text-sdb-coral uppercase tracking-widest font-bold">Featured Story & Image Asset</span>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-sdb-purple leading-snug">
            SDB Bank Head Office Consolidation & Environmental Compliance
          </h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            As documented in <strong>Note 12</strong> and SDB's Environmental Governance roadmap, the bank relocated scattered operations departments under a unified 20,000 sq ft head office complex in Colombo in 2025. This physical capital consolidation reduced inter-departmental latency by 35%, and allowed the installation of high-efficiency climate cooling, supporting our net-zero Scope 1 emissions goals.
          </p>
        </div>
      </div>

      {/* Section 1: Audited Financial Statements */}
      <div id="financial-statements-card" className="glass-card rounded-3xl p-6 md:p-8 shadow-lg text-left">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-sdb-purple/15 pb-4 mb-6">
          <div className="flex items-center space-x-2.5">
            <Calculator className="w-5 h-5 text-sdb-purple" />
            <h3 className="font-serif text-xl md:text-2xl font-bold text-sdb-purple">
              Interactive Financial Statements
            </h3>
          </div>
          
          {/* Statement tabs */}
          <div className="flex flex-wrap gap-1 bg-sdb-cream-dark/50 p-1.5 rounded-xl border border-sdb-purple/10 shadow-inner">
            {[
              { id: "income", label: "Statement of Profit or Loss" },
              { id: "balance", label: "Statement of Financial Position" },
              { id: "cashflow", label: "Statement of Cash Flows" },
              { id: "equity", label: "Statement of Changes in Equity" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveStatementTab(tab.id as StatementType);
                  setStatementSearchHighlight(null);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  activeStatementTab === tab.id
                    ? "bg-sdb-crimson text-white shadow-md font-bold"
                    : "text-sdb-purple/80 hover:text-sdb-purple hover:bg-sdb-purple/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Explanatory subtitle */}
        <p className="text-xs text-slate-500 mb-6 font-mono">
          Figures are stated in **LKR Millions (Mn)** unless specified otherwise. Click on any row matching a Search Result to focus.
        </p>

        {/* Statements Table */}
        <div className="overflow-x-auto border border-sdb-purple/15 rounded-2xl bg-white/70 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-sdb-crimson text-white text-[11px] font-mono uppercase tracking-wider border-b border-sdb-purple/10">
                <th className="py-4 px-6 font-semibold w-[45%] text-white">Financial Account / Item</th>
                <th className="py-4 px-4 font-bold text-right text-amber-200">FY 2025 (Audited)</th>
                <th className="py-4 px-4 font-semibold text-right text-white/95">FY 2024</th>
                <th className="py-4 px-4 font-semibold text-right text-white/85">FY 2023</th>
                <th className="py-4 px-4 font-normal text-right text-white/70">FY 2022</th>
                <th className="py-4 px-6 font-normal text-right text-white/70">FY 2021</th>
              </tr>
            </thead>
            <tbody>
              {activeStatementRows.map((row, index) => {
                const isHighlight = statementSearchHighlight && row.item.toLowerCase().includes(statementSearchHighlight.toLowerCase());
                const isMatchQuery = searchQuery && row.item.toLowerCase().includes(searchQuery.toLowerCase());
                
                return (
                  <tr
                    key={index}
                    className={`border-b border-sdb-purple/5 last:border-0 transition-colors ${
                      isHighlight ? "bg-sdb-amber/20 font-bold" : ""
                    } ${
                      isMatchQuery ? "bg-sdb-coral/5" : ""
                    } ${
                      row.isHeader 
                        ? "bg-sdb-cream-dark/25 font-bold text-sdb-purple text-xs sm:text-sm" 
                        : row.isTotal 
                        ? "bg-sdb-purple/5 font-bold text-sdb-purple border-y-2 border-sdb-purple/20 text-xs sm:text-sm" 
                        : "hover:bg-sdb-purple/5 text-xs sm:text-sm text-slate-700"
                    }`}
                  >
                    <td className={`py-3.5 px-6 ${row.indent ? "pl-10 text-slate-500 italic font-light" : ""}`}>
                      <div className="flex items-center space-x-1.5">
                        <span>{highlightText(row.item, searchQuery)}</span>
                        {row.isTotal && (
                          <span className="text-[9px] bg-sdb-purple/15 text-sdb-purple font-bold px-1.5 py-0.5 rounded">Total</span>
                        )}
                      </div>
                    </td>
                    <td className={`py-3.5 px-4 text-right font-semibold text-sdb-purple`}>
                      {row["2025"] === 0 && row.isHeader ? "" : `${row["2025"] < 0 ? `(${Math.abs(row["2025"])})` : row["2025"]}`}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-700 font-medium">
                      {row["2024"] === 0 && row.isHeader ? "" : `${row["2024"] < 0 ? `(${Math.abs(row["2024"])})` : row["2024"]}`}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-600">
                      {row["2023"] === 0 && row.isHeader ? "" : `${row["2023"] < 0 ? `(${Math.abs(row["2023"])})` : row["2023"]}`}
                    </td>
                    <td className="py-3.5 px-4 text-right text-slate-500 font-light">
                      {row["2022"] === 0 && row.isHeader ? "" : `${row["2022"] < 0 ? `(${Math.abs(row["2022"])})` : row["2022"]}`}
                    </td>
                    <td className="py-3.5 px-6 text-right text-slate-400 font-light">
                      {row["2021"] === 0 && row.isHeader ? "" : `${row["2021"] < 0 ? `(${Math.abs(row["2021"])})` : row["2021"]}`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 2: Expandable Notes to the Financial Statements */}
      <div id="notes-explorer" className="space-y-6 text-left">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-sdb-purple/10 pb-4">
          <div className="flex items-center space-x-2.5">
            <BookOpen className="w-5 h-5 text-sdb-purple" />
            <h3 className="font-serif text-xl md:text-2xl font-bold text-sdb-purple">
              Notes to the Financial Statements
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Quick Note Jump Selector */}
            <div className="relative">
              <select
                onChange={(e) => {
                  const val = e.target.value;
                  if (val) {
                    scrollToNote(val);
                  }
                }}
                className="text-xs bg-white border border-sdb-purple/20 text-sdb-purple font-semibold rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-sdb-purple/30 cursor-pointer shadow-xs"
                defaultValue=""
              >
                <option value="" disabled>Jump to Note (1–46)...</option>
                {NOTES_TO_FINANCIALS.map((n) => (
                  <option key={n.number} value={n.number}>
                    {n.number}: {n.title}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={expandAllNotes}
              className="text-xs bg-sdb-purple/10 text-sdb-purple font-semibold hover:bg-sdb-purple/15 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAllNotes}
              className="text-xs bg-slate-200/80 text-slate-600 font-semibold hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-500 max-w-xl">
          Detailed corporate summaries, estimates, disclosures, and sector analyses supporting the audited accounts. Click on a note to expand or collapse.
        </p>

        {/* Notes list accordion */}
        <div className="space-y-4">
          {NOTES_TO_FINANCIALS.map((note) => {
            const isExpanded = !!expandedNotes[note.number];
            const isHighlight = highlightedNoteId === note.number;
            const matchesSearch = searchQuery && (
              note.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
              note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              note.content.toLowerCase().includes(searchQuery.toLowerCase())
            );

            return (
              <div
                key={note.number}
                ref={(el) => { notesRefs.current[note.number] = el; }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isHighlight 
                    ? "border-sdb-coral shadow-lg shadow-sdb-coral/10 ring-2 ring-sdb-coral/20 bg-sdb-cream" 
                    : matchesSearch 
                    ? "border-sdb-coral bg-sdb-coral/5" 
                    : "border-sdb-purple/10 bg-white"
                }`}
              >
                {/* Accordion header */}
                <div
                  onClick={() => toggleNote(note.number)}
                  className="p-5 flex justify-between items-center cursor-pointer hover:bg-sdb-purple/[0.02] transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-sdb-purple/5 border border-sdb-purple/10 text-sdb-purple flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {note.number.split(" ")[1]}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-serif font-bold text-base md:text-lg text-sdb-purple leading-snug">
                          {highlightText(note.title, searchQuery)}
                        </h4>
                        {note.pages && (
                          <span className="text-[10px] font-mono text-sdb-coral bg-sdb-coral/10 px-2 py-0.5 rounded font-bold">
                            {note.pages}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-slate-400" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => handleToggleBookmark(note.number, note.title)}
                      title={bookmarks[note.number] ? "Remove Bookmark" : "Add Bookmark"}
                      className={`p-1.5 rounded-lg hover:bg-sdb-purple/5 transition-all cursor-pointer ${
                        bookmarks[note.number] ? "text-sdb-coral" : "text-slate-400 hover:text-sdb-purple"
                      }`}
                    >
                      {bookmarks[note.number] ? (
                        <BookmarkCheck className="w-4.5 h-4.5 fill-current" />
                      ) : (
                        <Bookmark className="w-4.5 h-4.5" />
                      )}
                    </button>
                    
                    <div
                      onClick={() => toggleNote(note.number)}
                      className="flex items-center space-x-2 text-slate-400 hover:text-sdb-purple cursor-pointer"
                    >
                      <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider font-semibold">
                        {isExpanded ? "Collapse" : "Expand"}
                      </span>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                        <ChevronDown className="w-4 h-4 text-sdb-purple" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-sdb-purple/10 bg-sdb-cream/30 p-6 space-y-6"
                    >
                      {/* Accounting Policy Callout (Points 48, 49, 50, 52, 58) */}
                      {note.accountingPolicy && note.accountingPolicy.trim().toLowerCase() !== "accounting policy" && (
                        <div className="bg-[#FAF2EB] border-l-4 border-[#8B1D2C] p-4 rounded-r-xl text-xs space-y-1.5 shadow-xs">
                          <div className="flex items-center space-x-1.5 text-[#8B1D2C] font-bold uppercase tracking-wider font-mono text-[10px]">
                            <Scale className="w-3.5 h-3.5" />
                            <span>Significant Accounting Policy • SLFRS / LKAS</span>
                          </div>
                          <p className="text-slate-800 leading-relaxed font-sans">
                            {note.accountingPolicy}
                          </p>
                        </div>
                      )}



                      {/* Structured Tabular Data inside Note */}
                      {note.tables && note.tables.length > 0 && (
                        <div className="space-y-4">
                          {note.tables.map((tbl, tIdx) => (
                            <div key={tIdx} className="overflow-x-auto border border-sdb-purple/15 rounded-xl bg-white shadow-xs">
                              {tbl.tableName && (
                                <div className="bg-sdb-purple/[0.04] px-4 py-2 border-b border-sdb-purple/10 font-serif font-bold text-xs text-sdb-purple">
                                  {tbl.tableName}
                                </div>
                              )}
                              <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                  <tr className="bg-sdb-purple/[0.04] text-sdb-purple font-mono uppercase text-[9px] tracking-wider border-b border-sdb-purple/10">
                                    {tbl.headers.map((h, cIdx) => (
                                      <th 
                                        key={cIdx} 
                                        className={`py-2.5 px-3 font-semibold ${
                                          isColumnNumeric(tbl.rows, cIdx) ? "text-right" : "text-left"
                                        }`}
                                      >
                                        {h}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                  {tbl.rows.map((row, rIdx) => {
                                    const isTotal = row[0] && (
                                      row[0].toLowerCase().includes("total") || 
                                      row[0].toLowerCase().startsWith("net ")
                                    );
                                    return (
                                      <tr 
                                        key={rIdx} 
                                        className={`hover:bg-slate-50 transition-colors ${
                                          isTotal ? "bg-sdb-purple/[0.03] font-bold text-sdb-purple" : ""
                                        }`}
                                      >
                                        {row.map((cell, cIdx) => {
                                          const isMatch = searchQuery && cell && cell.toLowerCase().includes(searchQuery.toLowerCase());
                                          return (
                                            <td 
                                              key={cIdx} 
                                              className={`py-2 px-3 text-slate-700 ${
                                                isColumnNumeric(tbl.rows, cIdx) ? "text-right font-mono font-medium text-sdb-purple" : "text-left font-sans"
                                              } ${isMatch ? "bg-sdb-amber/20 font-semibold" : ""}`}
                                            >
                                              {highlightText(cell, searchQuery)}
                                            </td>
                                          );
                                        })}
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Sub-Notes & Sub-Schedules */}
                      {note.subNotes && note.subNotes.length > 0 && (
                        <div className="space-y-4 pt-3 border-t border-sdb-purple/10">
                          {note.subNotes.map((sub, sIdx) => (
                            <div key={sIdx} className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs space-y-3">
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                                <div className="flex items-center space-x-2">
                                  <span className="font-mono font-bold text-xs bg-sdb-purple/10 text-sdb-purple px-2 py-0.5 rounded">
                                    {sub.subNumber}
                                  </span>
                                  <h6 className="font-serif font-bold text-sm text-sdb-purple">
                                    {sub.title}
                                  </h6>
                                </div>
                              </div>

                              {sub.accountingPolicy && (
                                <div className="bg-amber-50/50 border-l-2 border-amber-500 p-2.5 rounded-r text-[11px] text-slate-700">
                                  <strong className="text-amber-800">Policy: </strong> {sub.accountingPolicy}
                                </div>
                              )}

                              {sub.content && (
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                                  {highlightText(sub.content, searchQuery)}
                                </p>
                              )}

                              {sub.bullets && sub.bullets.length > 0 && (
                                <ul className="space-y-2 pt-1">
                                  {sub.bullets.map((b, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                      <span className="w-1.5 h-1.5 rounded-full bg-sdb-coral mt-2 shrink-0" />
                                      <span className="flex-1">{highlightText(b, searchQuery)}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {sub.tables && sub.tables.length > 0 && (
                                <div className="space-y-4 pt-1">
                                  {sub.tables.map((tbl, tIdx) => (
                                    <div key={tIdx} className="overflow-x-auto border border-sdb-purple/15 rounded-xl bg-white shadow-xs">
                                      {tbl.tableName && (
                                        <div className="bg-sdb-purple/[0.04] px-4 py-2 border-b border-sdb-purple/10 font-serif font-bold text-xs text-sdb-purple">
                                          {tbl.tableName}
                                        </div>
                                      )}
                                      <table className="w-full text-left border-collapse text-xs">
                                        <thead>
                                          <tr className="bg-sdb-purple/[0.04] text-sdb-purple font-mono uppercase text-[9px] tracking-wider border-b border-sdb-purple/10">
                                            {tbl.headers.map((h, cIdx) => (
                                              <th 
                                                key={cIdx} 
                                                className={`py-2.5 px-3 font-semibold ${
                                                  isColumnNumeric(tbl.rows, cIdx) ? "text-right" : "text-left"
                                                }`}
                                              >
                                                {h}
                                              </th>
                                            ))}
                                          </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                          {tbl.rows.map((row, rIdx) => {
                                            const isTotal = row[0] && (
                                              row[0].toLowerCase().includes("total") || 
                                              row[0].toLowerCase().startsWith("net ")
                                            );
                                            return (
                                              <tr 
                                                key={rIdx} 
                                                className={`hover:bg-slate-50 transition-colors ${
                                                  isTotal ? "bg-sdb-purple/[0.03] font-bold text-sdb-purple" : ""
                                                }`}
                                              >
                                                {row.map((cell, cIdx) => {
                                                  const isMatch = searchQuery && cell && cell.toLowerCase().includes(searchQuery.toLowerCase());
                                                  return (
                                                    <td 
                                                      key={cIdx} 
                                                      className={`py-2 px-3 text-slate-700 ${
                                                        isColumnNumeric(tbl.rows, cIdx) ? "text-right font-mono font-medium text-sdb-purple" : "text-left font-sans"
                                                      } ${isMatch ? "bg-sdb-amber/20 font-semibold" : ""}`}
                                                    >
                                                      {highlightText(cell, searchQuery)}
                                                    </td>
                                                  );
                                                })}
                                              </tr>
                                            );
                                          })}
                                        </tbody>
                                      </table>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section 3: Supplementary Information & Statistical Schedules */}
      <div id="supplementary-information" className="glass-card rounded-3xl p-6 md:p-8 shadow-lg text-left space-y-8">
        <div className="border-b border-sdb-purple/15 pb-4">
          <div className="flex items-center space-x-2.5">
            <FileSpreadsheet className="w-5 h-5 text-sdb-purple" />
            <h3 className="font-serif text-xl md:text-2xl font-bold text-sdb-purple">
              Supplementary Information & Statistical Schedules
            </h3>
          </div>
          <p className="text-slate-600 text-xs md:text-sm mt-1">
            Historical ten-year trends, top shareholders analysis, and value creation distribution statement for SANASA Development Bank PLC.
          </p>
        </div>

        {/* 10-Year Financial Summary */}
        <div className="space-y-3">
          <h4 className="font-serif font-bold text-lg text-sdb-purple flex items-center space-x-2">
            <span>10-Year Financial Summary (2016 – 2025)</span>
            <span className="text-[10px] font-mono bg-sdb-purple/10 text-sdb-purple px-2 py-0.5 rounded font-normal">LKR Mn</span>
          </h4>
          <div className="overflow-x-auto border border-sdb-purple/10 rounded-2xl bg-white">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-sdb-purple/5 text-sdb-purple font-mono uppercase text-[10px] tracking-wider border-b border-sdb-purple/10">
                  <th className="py-3 px-3 font-semibold">Year</th>
                  <th className="py-3 px-3 font-semibold text-right">Gross Income</th>
                  <th className="py-3 px-3 font-semibold text-right">NII</th>
                  <th className="py-3 px-3 font-semibold text-right">PBT</th>
                  <th className="py-3 px-3 font-semibold text-right">PAT</th>
                  <th className="py-3 px-3 font-semibold text-right">Total Assets</th>
                  <th className="py-3 px-3 font-semibold text-right">Deposits</th>
                  <th className="py-3 px-3 font-semibold text-right">Gross Loans</th>
                  <th className="py-3 px-3 font-semibold text-right">CAR (%)</th>
                  <th className="py-3 px-3 font-semibold text-right">NPL (%)</th>
                </tr>
              </thead>
              <tbody>
                {SUPPLEMENTARY_INFO.tenYearSummary.map((row, i) => (
                  <tr key={i} className={`border-b border-slate-100 last:border-0 hover:bg-sdb-purple/5 transition-colors ${i === 0 ? "font-bold bg-sdb-cream/40 text-sdb-purple" : "text-slate-700"}`}>
                    <td className="py-2.5 px-3 font-mono font-semibold">{row.year}</td>
                    <td className="py-2.5 px-3 text-right">{row.grossIncome.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right">{row.nii.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right">{row.pbt.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-sdb-purple">{row.pat.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right">{row.totalAssets.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right">{row.customerDeposits.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right">{row.grossLoans.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-right text-sdb-green font-mono">{row.car}</td>
                    <td className="py-2.5 px-3 text-right text-sdb-coral font-mono">{row.nplRatio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Grid: Top Shareholders & Value Added Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Shareholders */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-lg text-sdb-purple">Top Shareholders Distribution</h4>
            <div className="overflow-x-auto border border-sdb-purple/10 rounded-2xl bg-white">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-sdb-purple text-white font-mono uppercase text-[10px] tracking-wider border-b border-sdb-purple/10">
                    <th className="py-3 px-3 font-semibold w-10 text-white">#</th>
                    <th className="py-3 px-3 font-semibold text-white">Shareholder Name</th>
                    <th className="py-3 px-3 font-semibold text-right text-white">Shares</th>
                    <th className="py-3 px-3 font-semibold text-right text-amber-200">%</th>
                  </tr>
                </thead>
                <tbody>
                  {SUPPLEMENTARY_INFO.topShareholders.map((sh, i) => (
                    <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors text-slate-700">
                      <td className="py-2.5 px-3 font-mono font-semibold text-slate-400">{sh.rank}</td>
                      <td className="py-2.5 px-3 font-medium text-sdb-purple">{sh.name}</td>
                      <td className="py-2.5 px-3 text-right font-mono">{sh.shares.toLocaleString()}</td>
                      <td className="py-2.5 px-3 text-right font-bold text-sdb-coral font-mono">{sh.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Value Added Statement */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-lg text-sdb-purple">Value Added Statement 2025</h4>
            <div className="overflow-x-auto border border-sdb-purple/10 rounded-2xl bg-white">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-sdb-purple text-white font-mono uppercase text-[10px] tracking-wider border-b border-sdb-purple/10">
                    <th className="py-3 px-4 font-semibold text-white">Distribution Channel</th>
                    <th className="py-3 px-4 font-semibold text-right text-amber-200">Amount (LKR Mn)</th>
                    <th className="py-3 px-4 font-semibold text-right text-white">% Share</th>
                  </tr>
                </thead>
                <tbody>
                  {SUPPLEMENTARY_INFO.valueAddedStatement.map((item, i) => (
                    <tr key={i} className={`border-b border-slate-100 last:border-0 transition-colors ${i === 2 ? "font-bold bg-sdb-purple/5 text-sdb-purple" : "text-slate-700"}`}>
                      <td className="py-2.5 px-4 font-medium">{item.category}</td>
                      <td className="py-2.5 px-4 text-right font-mono font-semibold">{item.amount.toLocaleString()}</td>
                      <td className="py-2.5 px-4 text-right font-mono text-sdb-purple font-bold">{item.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
