/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Value Creation Capitals Hub
 * Source: Official Published Annual Report 2025 (Pages 68-106)
 * Full Unabridged Text Disclosures (No Paraphrasing, No Prefacing)
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Coins, Home, Brain, Users, Handshake, Leaf, 
  BookOpen, X, Search, CheckCircle2, ArrowRight,
  ChevronRight, Sparkles, Layers, FileText
} from "lucide-react";
import capitalsData from "../data/capitals_full_disclosures.json";

const ICON_MAP: Record<string, any> = {
  Coins: Coins,
  Home: Home,
  Brain: Brain,
  Users: Users,
  Handshake: Handshake,
  Leaf: Leaf
};

interface SectionItem {
  type: string;
  content: string;
}

interface SectionData {
  title: string;
  items?: SectionItem[];
  paragraphs: string[];
}

function renderSectionContent(sec: SectionData) {
  if (sec.items && sec.items.length > 0) {
    const groups: Array<{ type: "paragraph"; content: string } | { type: "bullets"; items: string[] }> = [];
    for (const item of sec.items) {
      if (item.type === "bullet") {
        if (groups.length > 0 && groups[groups.length - 1].type === "bullets") {
          (groups[groups.length - 1] as { type: "bullets"; items: string[] }).items.push(item.content);
        } else {
          groups.push({ type: "bullets", items: [item.content] });
        }
      } else {
        groups.push({ type: "paragraph", content: item.content });
      }
    }

    return (
      <div className="space-y-4 pt-1">
        {groups.map((grp, gIdx) => {
          if (grp.type === "paragraph") {
            return (
              <p key={gIdx} className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                {grp.content}
              </p>
            );
          }
          return (
            <ul key={gIdx} className="space-y-2.5 my-2">
              {grp.items.map((bulletText, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-sdb-coral mt-2 shrink-0" />
                  <span className="flex-1">{bulletText}</span>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    );
  }

  // Fallback if sec.items is not present
  const groups: Array<{ type: "paragraph"; content: string } | { type: "bullets"; items: string[] }> = [];
  for (const para of sec.paragraphs) {
    const isBullet = para.startsWith("•");
    const cleanText = isBullet ? para.replace(/^•\s*/, "") : para;
    if (isBullet) {
      if (groups.length > 0 && groups[groups.length - 1].type === "bullets") {
        (groups[groups.length - 1] as { type: "bullets"; items: string[] }).items.push(cleanText);
      } else {
        groups.push({ type: "bullets", items: [cleanText] });
      }
    } else {
      groups.push({ type: "paragraph", content: cleanText });
    }
  }

  return (
    <div className="space-y-4 pt-1">
      {groups.map((grp, gIdx) => {
        if (grp.type === "paragraph") {
          return (
            <p key={gIdx} className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
              {grp.content}
            </p>
          );
        }
        return (
          <ul key={gIdx} className="space-y-2.5 my-2">
            {grp.items.map((bulletText, bIdx) => (
              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-sdb-coral mt-2 shrink-0" />
                <span className="flex-1">{bulletText}</span>
              </li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export default function CapitalsHub() {
  const [selectedCapitalIndex, setSelectedCapitalIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFullSectionModal, setShowFullSectionModal] = useState<boolean>(false);
  const [modalCapitalIndex, setModalCapitalIndex] = useState<number>(0);

  useEffect(() => {
    const handleSetIndex = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (typeof detail === "number" && detail >= 0 && detail < capitalsData.length) {
        setSelectedCapitalIndex(detail);
      }
    };
    window.addEventListener("set-capitals-index", handleSetIndex);
    return () => {
      window.removeEventListener("set-capitals-index", handleSetIndex);
    };
  }, []);

  const activeCapital = capitalsData[selectedCapitalIndex];
  const IconComponent = ICON_MAP[activeCapital.icon] || Coins;

  const modalCapital = capitalsData[modalCapitalIndex];
  const ModalIconComponent = ICON_MAP[modalCapital.icon] || Coins;

  // Filter sections by search query
  const filteredSections = activeCapital.sections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(q) ||
      sec.paragraphs.some((p) => p.toLowerCase().includes(q))
    );
  });

  return (
    <section id="capitals-section" className="space-y-8 text-left">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-sdb-purple/10 pb-6">
        <div>
          <div className="inline-flex items-center space-x-2 bg-sdb-coral/10 text-sdb-coral px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Management Discussion &amp; Analysis • Pages 68–106</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight leading-tight">
            Value Creation Capitals
          </h2>
          <p className="text-slate-600 mt-2 max-w-3xl text-sm md:text-base">
            Complete, unabridged disclosures for all six Value Creation Capitals as published in the official Annual Report: Financial, Manufactured, Intellectual, Human, Social &amp; Relationship, and Natural Capitals.
          </p>
        </div>
        <button
          onClick={() => {
            setModalCapitalIndex(selectedCapitalIndex);
            setShowFullSectionModal(true);
          }}
          className="inline-flex items-center space-x-2 bg-sdb-purple text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-sdb-purple/90 transition-all shadow-sm shrink-0 cursor-pointer"
        >
          <BookOpen className="w-4 h-4" />
          <span>Full Chapter Reader</span>
        </button>
      </div>

      {/* Grid selector of 6 capitals */}
      <div id="capitals-grid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {capitalsData.map((capital, index) => {
          const isActive = index === selectedCapitalIndex;
          const CapIcon = ICON_MAP[capital.icon] || Coins;
          return (
            <button
              key={capital.id}
              onClick={() => {
                setSelectedCapitalIndex(index);
                setSearchQuery("");
              }}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 text-center cursor-pointer ${
                isActive
                  ? "bg-white border-sdb-purple/30 shadow-md scale-102 ring-2 ring-sdb-purple/10"
                  : "bg-white/50 border-sdb-purple/5 hover:border-sdb-purple/20 hover:bg-white/80"
              }`}
            >
              <div
                className={`p-3 rounded-full mb-2.5 transition-colors ${
                  isActive
                    ? "bg-sdb-purple text-white shadow-sm"
                    : "bg-sdb-purple/5 text-sdb-purple/70"
                }`}
              >
                <CapIcon className="w-5 h-5" />
              </div>
              <span className="font-serif text-xs font-bold text-sdb-purple tracking-tight uppercase block leading-tight">
                {capital.title.replace(" Capital", "")}
              </span>
              <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                {capital.pages}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Capital Full Unabridged Disclosures Container */}
      <div id="active-capital-container" className="space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sdb-purple/10 shadow-sm space-y-6">
          {/* Header of Active Capital */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center space-x-4">
              <div className="p-3.5 bg-sdb-purple text-white rounded-2xl shadow-sm shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-sdb-coral bg-sdb-coral/10 px-2.5 py-0.5 rounded-md">
                  Annual Report Disclosures • {activeCapital.pages}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-sdb-purple mt-1">
                  {activeCapital.title}
                </h3>
              </div>
            </div>

            {/* In-page Search Bar */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={`Search ${activeCapital.title}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sdb-purple/30"
              />
            </div>
          </div>

          {/* Sections & Paragraphs List - Pulled naturally upward without tag chips */}
          <div className="space-y-6 pt-1">
            {filteredSections.map((sec, sidx) => (
              <div key={sidx} className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-serif font-bold text-lg text-sdb-purple flex items-center space-x-2 border-b border-slate-200/60 pb-2">
                  <span className="w-2 h-2 rounded-full bg-sdb-coral shrink-0" />
                  <span>{sec.title}</span>
                </h4>
                {renderSectionContent(sec)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Chapter Reader Modal */}
      {showFullSectionModal && (
        <div id="full-capital-modal" className="fixed inset-0 bg-sdb-purple/50 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-6">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="glass-modal rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden border border-sdb-purple/10 flex flex-col bg-white text-left"
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-sdb-purple/10 flex justify-between items-center bg-white/95 backdrop-blur-xs">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-sdb-purple text-white rounded-xl shadow-xs">
                  <ModalIconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-sdb-coral uppercase tracking-widest font-bold">
                    Official Annual Report Book • {modalCapital.pages}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple">
                    {modalCapital.title} — Complete Disclosures
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowFullSectionModal(false)}
                className="p-2 text-slate-400 hover:text-sdb-purple rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Chapter Switcher */}
            <div className="flex overflow-x-auto gap-2 p-3 bg-slate-50 border-b border-slate-200">
              {capitalsData.map((cap, idx) => {
                const isCurrent = idx === modalCapitalIndex;
                const Icon = ICON_MAP[cap.icon] || Coins;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setModalCapitalIndex(idx)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isCurrent
                        ? "bg-sdb-purple text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cap.title.replace(" Capital", "")}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {modalCapital.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 border-b border-slate-100 pb-5 last:border-b-0">
                  <h4 className="font-serif font-bold text-lg text-sdb-purple flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-sdb-coral shrink-0" />
                    <span>{sec.title}</span>
                  </h4>
                  {renderSectionContent(sec)}
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-sdb-purple/10 flex justify-between items-center">
              <span className="text-xs font-mono text-slate-500">
                Displaying {modalCapital.title} ({modalCapital.pages})
              </span>
              <button
                onClick={() => setShowFullSectionModal(false)}
                className="bg-sdb-purple text-white px-5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-sdb-purple/90 transition-all cursor-pointer"
              >
                Close Reader
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
