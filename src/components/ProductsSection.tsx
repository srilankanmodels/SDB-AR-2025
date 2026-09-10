/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Products & Services Directory
 * Source: Official Published Annual Report 2025 (Pages 15-19)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Layers, PiggyBank, Vault, Home, Car, Coins, Briefcase, 
  Building2, Share2, Users, Shield, RefreshCw, ChevronDown, CheckCircle2,
  Smartphone, Sparkles, ExternalLink
} from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS_CATALOG, ProductItem } from "../data/productsData";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = 
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.targetMarket.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedProductId(prev => prev === id ? null : id);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "PiggyBank": return <PiggyBank className="w-4 h-4" />;
      case "Vault": return <Vault className="w-4 h-4" />;
      case "Home": return <Home className="w-4 h-4" />;
      case "Car": return <Car className="w-4 h-4" />;
      case "Coins": return <Coins className="w-4 h-4" />;
      case "Briefcase": return <Briefcase className="w-4 h-4" />;
      case "Building2": return <Building2 className="w-4 h-4" />;
      case "Share2": return <Share2 className="w-4 h-4" />;
      case "Users": return <Users className="w-4 h-4" />;
      case "Shield": return <Shield className="w-4 h-4" />;
      case "RefreshCw": return <RefreshCw className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="products-services-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Inclusive Financial Solutions • Pages 15–19</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            Products & Services Directory
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            From grassroots micro-savings and women entrepreneurship to high-yield corporate deposits, agricultural value chain finance, and concessionary refinance credit lines.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search products, loans, features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/90 border border-sdb-purple/20 focus:border-sdb-purple rounded-xl py-2.5 pl-10 pr-4 text-xs text-sdb-purple outline-none shadow-xs font-mono transition-all"
          />
          <Search className="w-4 h-4 text-sdb-purple/40 absolute left-3.5 top-3" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-sdb-coral font-bold hover:underline"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {PRODUCT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-sdb-purple text-white shadow-md shadow-sdb-purple/15 border border-transparent font-bold"
                  : "bg-white/80 hover:bg-white text-slate-700 hover:text-sdb-purple border border-sdb-purple/10"
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Category Summary Note */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 bg-sdb-cream/50 border border-sdb-purple/10 p-3 rounded-xl">
        <span>
          Showing {filteredProducts.length} of {PRODUCTS_CATALOG.length} authenticated annual report products
        </span>
        <span className="hidden sm:inline text-sdb-purple font-semibold">
          Source: Annual Report Pages 15–19
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white/80 rounded-2xl p-12 text-center border border-sdb-purple/10 space-y-3">
          <Layers className="w-8 h-8 text-slate-400 mx-auto" />
          <h4 className="font-serif text-lg font-bold text-sdb-purple">No matching products found</h4>
          <p className="text-xs text-slate-500 font-mono">Try clearing your search query or selecting "All Products"</p>
          <button
            onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
            className="mt-2 text-xs bg-sdb-purple text-white px-4 py-2 rounded-lg font-bold hover:bg-sdb-plum cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((prod) => {
            const isExpanded = expandedProductId === prod.id;
            return (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className={`glass-card rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white/85 ${
                  isExpanded 
                    ? "border-sdb-coral shadow-lg ring-1 ring-sdb-coral/20" 
                    : "border-sdb-purple/10 hover:border-sdb-purple/25 shadow-xs hover:shadow-md"
                }`}
              >
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-sdb-coral bg-sdb-coral/10 px-2.5 py-0.5 rounded-full">
                      {prod.category}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                      Page {prod.sourcePage}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg text-sdb-purple leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs font-serif italic text-slate-600 mt-1">
                      "{prod.tagline}"
                    </p>
                  </div>

                  <div className="pt-1">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                      Target Market:
                    </span>
                    <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100 font-medium">
                      {prod.targetMarket}
                    </p>
                  </div>

                  {/* Highlights Summary */}
                  <div className="space-y-1.5 pt-1">
                    {prod.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Full Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 pt-3 border-t border-slate-100"
                      >
                        {prod.features.length > 2 && (
                          <div className="space-y-1.5">
                            <span className="text-[10px] font-mono uppercase text-sdb-purple font-bold block">
                              Additional Features:
                            </span>
                            {prod.features.slice(2).map((feat, idx) => (
                              <div key={idx} className="flex items-start space-x-2 text-xs text-slate-600">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase text-sdb-coral font-bold block">
                            Key Strategic Benefits:
                          </span>
                          {prod.benefits.map((b, bIdx) => (
                            <p key={bIdx} className="text-xs text-slate-700 bg-sdb-cream/40 p-2 rounded-lg border border-sdb-purple/5">
                              • {b}
                            </p>
                          ))}
                        </div>

                        {prod.digitalAccess && (
                          <div className="bg-sdb-blue/5 border border-sdb-blue/15 p-2.5 rounded-xl flex items-center space-x-2 text-xs text-sdb-blue font-mono font-medium">
                            <Smartphone className="w-4 h-4 shrink-0" />
                            <span className="text-[11px]">{prod.digitalAccess}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Footer Toggle */}
                <div 
                  onClick={() => toggleExpand(prod.id)}
                  className="px-5 py-3 border-t border-sdb-purple/5 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between cursor-pointer transition-colors text-xs font-mono"
                >
                  <span className="font-semibold text-sdb-purple">
                    {isExpanded ? "Show Less" : "View Full Specifications"}
                  </span>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                    <ChevronDown className="w-4 h-4 text-sdb-purple" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
}
