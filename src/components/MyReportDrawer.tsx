import { motion, AnimatePresence } from "motion/react";
import {
  Bookmark, BookmarkCheck, Trash2, ArrowRight, Download,
  ExternalLink, X, FileText, CheckCircle2, BookOpen
} from "lucide-react";

export interface BookmarkedSection {
  id: string;
  title: string;
  category: string;
  pageHint?: string;
  savedAt: string;
}

interface MyReportDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: BookmarkedSection[];
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenDownloadCentre: () => void;
}

export default function MyReportDrawer({
  isOpen,
  onClose,
  bookmarks,
  onRemoveBookmark,
  onClearAll,
  onNavigate,
  onOpenDownloadCentre
}: MyReportDrawerProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs"
        />

        {/* Slide-out Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 26, stiffness: 240 }}
          className="relative w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden border-l border-slate-200"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-sdb-purple/5 to-white">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-sdb-purple/10 rounded-xl text-sdb-purple">
                <Bookmark className="w-4 h-4 text-sdb-coral" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 font-serif">My Saved Report Binder</h3>
                <p className="text-[11px] text-slate-500">
                  {bookmarks.length} {bookmarks.length === 1 ? "section" : "sections"} bookmarked
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Bookmarks Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {bookmarks.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-700">No Bookmarked Sections Yet</h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Pin chapters, audited KPIs, or financial notes using the bookmark icon on any section to curate your executive briefing binder.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-500">
                  <span>Saved Items</span>
                  <button
                    onClick={onClearAll}
                    className="text-[11px] text-rose-600 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>

                {bookmarks.map((item) => (
                  <div
                    key={item.id}
                    className="bg-slate-50/80 hover:bg-sdb-purple/5 p-3.5 rounded-2xl border border-slate-200/80 transition-colors group flex items-center justify-between"
                  >
                    <div
                      className="flex-1 cursor-pointer pr-2"
                      onClick={() => {
                        onNavigate(item.id);
                        onClose();
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono uppercase bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500">
                          {item.category}
                        </span>
                        {item.pageHint && (
                          <span className="text-[10px] font-mono text-sdb-coral font-bold">
                            {item.pageHint}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 group-hover:text-sdb-purple mt-1 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => {
                          onNavigate(item.id);
                          onClose();
                        }}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-sdb-purple hover:bg-white transition-colors cursor-pointer"
                        title="Jump to Section"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onRemoveBookmark(item.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-white transition-colors cursor-pointer"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                onOpenDownloadCentre();
                onClose();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-sdb-purple hover:bg-sdb-purple-dark text-white rounded-xl text-xs font-bold shadow-md shadow-sdb-purple/15 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Executive PDF Bundle</span>
            </button>
            <p className="text-[10px] text-center text-slate-400 font-mono">
              SDB Bank Integrated Annual Report 2025
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
