import { motion, AnimatePresence } from "motion/react";
import {
  Download, X, FileText, ExternalLink, ShieldCheck,
  TrendingUp, Leaf, Award, Calendar, BookOpen
} from "lucide-react";

interface DownloadCentreProps {
  isOpen: boolean;
  onClose: () => void;
}

const REPORT_SECTIONS = [
  {
    title: "Complete Integrated Annual Report 2025",
    description: "Official 328-page PDF submitted to the Colombo Stock Exchange (CSE).",
    pages: "Pages 1–328",
    size: "approx. 18.5 MB",
    url: "https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf",
    icon: BookOpen,
    isPrimary: true
  },
  {
    title: "Financial Statements & Notes to Accounts",
    description: "Audited Statement of Profit or Loss, Financial Position, Cash Flows, and Notes 1 to 52.",
    pages: "Pages 200–297",
    size: "approx. 4.2 MB",
    url: "https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=200",
    icon: TrendingUp,
    isPrimary: false
  },
  {
    title: "Corporate Governance & Board Committee Reports",
    description: "Governance compliance report, Board profiles, Audit, Integrated Risk, Nominations & Remuneration.",
    pages: "Pages 124–173",
    size: "approx. 2.8 MB",
    url: "https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=124",
    icon: ShieldCheck,
    isPrimary: false
  },
  {
    title: "Sustainability & UN SDGs Review",
    description: "8 Sustainability Pillars, Environmental & Social Risk System (ESRMS), SPM, and UN SDGs.",
    pages: "Pages 34–41",
    size: "approx. 1.1 MB",
    url: "https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=34",
    icon: Leaf,
    isPrimary: false
  },
  {
    title: "Strategic Blueprint & Operating Environment",
    description: "2026–2029 Strategy Blueprint, Macroeconomic Review, and Banking Sector Analysis.",
    pages: "Pages 24–33, 44–53",
    size: "approx. 1.8 MB",
    url: "https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=24",
    icon: Award,
    isPrimary: false
  },
  {
    title: "Notice of 29th Annual General Meeting",
    description: "Notice of Meeting scheduled for Wednesday, 27th May 2026 at SANASA Campus, Kegalle and virtual platform.",
    pages: "Pages 324–326",
    size: "approx. 400 KB",
    url: "https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=324",
    icon: Calendar,
    isPrimary: false
  }
];

export default function DownloadCentre({ isOpen, onClose }: DownloadCentreProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#1A1230] to-[#2F1B68] text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Download className="w-5 h-5 text-sdb-coral" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif">Report Download Centre</h3>
                <p className="text-xs text-slate-300">
                  Access official PDF chapters or the complete published document
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Downloads */}
          <div className="p-6 overflow-y-auto space-y-3.5 divide-y divide-slate-100">
            {REPORT_SECTIONS.map((sec, idx) => {
              const SecIcon = sec.icon;
              return (
                <div
                  key={idx}
                  className={`pt-3.5 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl transition-all ${
                    sec.isPrimary
                      ? "bg-gradient-to-r from-sdb-purple/5 to-sdb-coral/5 border border-sdb-purple/20 shadow-xs"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-xl mt-0.5 ${sec.isPrimary ? "bg-sdb-purple text-white" : "bg-slate-100 text-slate-700"}`}>
                      <SecIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="text-xs font-bold text-slate-900">{sec.title}</h4>
                        {sec.isPrimary && (
                          <span className="text-[9px] font-mono font-bold bg-sdb-coral text-white px-1.5 py-0.5 rounded">
                            FULL REPORT
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{sec.description}</p>
                      <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-400 mt-1">
                        <span>{sec.pages}</span>
                        <span>&bull;</span>
                        <span>{sec.size}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={sec.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                      sec.isPrimary
                        ? "bg-sdb-purple hover:bg-sdb-purple-dark text-white shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Official Colombo Stock Exchange Archive Reference: SDB.N0000</span>
            <button
              onClick={onClose}
              className="text-xs font-bold text-sdb-purple hover:underline cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
