import { motion, AnimatePresence } from "motion/react";
import {
  Eye, Type, ZoomIn, Sun, Moon, Link as LinkIcon,
  X, RotateCcw, Check, Sparkles
} from "lucide-react";

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  fontScale: number;
  onFontScaleChange: (scale: number) => void;
  readingMask: boolean;
  onReadingMaskChange: (active: boolean) => void;
  highlightLinks: boolean;
  onHighlightLinksChange: (active: boolean) => void;
}

export default function AccessibilityPanel({
  isOpen,
  onClose,
  fontScale,
  onFontScaleChange,
  readingMask,
  onReadingMaskChange,
  highlightLinks,
  onHighlightLinksChange
}: AccessibilityPanelProps) {
  if (!isOpen) return null;

  const handleReset = () => {
    onFontScaleChange(1);
    onReadingMaskChange(false);
    onHighlightLinksChange(false);
  };

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

        {/* Slide-in Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 26, stiffness: 240 }}
          className="relative w-full max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden border-l border-slate-200"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-sdb-purple/10 rounded-xl text-sdb-purple">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 font-serif">Accessibility Tools</h3>
                <p className="text-[11px] text-slate-500">Customise reading &amp; display preferences</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-slate-200/60 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Controls Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* 1. Font Size Adjustment */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Type className="w-4 h-4 text-sdb-purple" />
                  <span className="text-xs font-bold text-slate-800">Text Size</span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-slate-500">
                  {fontScale === 1 ? "100% (Standard)" : fontScale === 1.1 ? "110% (Large)" : "120% (XL)"}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { scale: 1, label: "A", sub: "100%" },
                  { scale: 1.1, label: "A+", sub: "110%" },
                  { scale: 1.2, label: "A++", sub: "120%" }
                ].map((item) => (
                  <button
                    key={item.scale}
                    onClick={() => onFontScaleChange(item.scale)}
                    className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                      fontScale === item.scale
                        ? "bg-sdb-purple text-white border-sdb-purple shadow-sm font-bold"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200"
                    }`}
                  >
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Reading Mask Focus */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">Reading Focus Mask</div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Darkens screen edges to guide reading line by line
                  </p>
                </div>
                <button
                  onClick={() => onReadingMaskChange(!readingMask)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    readingMask ? "bg-sdb-purple justify-end" : "bg-slate-200 justify-start"
                  }`}
                >
                  <motion.div
                    layout
                    className={`w-4 h-4 rounded-full ${readingMask ? "bg-white" : "bg-white shadow-xs"}`}
                  />
                </button>
              </div>
            </div>

            {/* 3. Highlight Interactive Links */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-800">Highlight Links &amp; Buttons</div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Adds high-visibility outline to all clickable elements
                  </p>
                </div>
                <button
                  onClick={() => onHighlightLinksChange(!highlightLinks)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    highlightLinks ? "bg-sdb-purple justify-end" : "bg-slate-200 justify-start"
                  }`}
                >
                  <motion.div
                    layout
                    className={`w-4 h-4 rounded-full ${highlightLinks ? "bg-white" : "bg-white shadow-xs"}`}
                  />
                </button>
              </div>
            </div>

            {/* Helpful info */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-800 flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-sdb-coral" />
                <span>Accessibility Compliance</span>
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                Built to support WCAG 2.1 AA accessibility guidelines, screen readers, keyboard navigation, and enhanced legibility for financial stakeholders.
              </p>
            </div>
          </div>

          {/* Footer with Reset */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Default</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-sdb-purple text-white text-xs font-bold rounded-xl shadow-xs hover:bg-sdb-purple-dark transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
