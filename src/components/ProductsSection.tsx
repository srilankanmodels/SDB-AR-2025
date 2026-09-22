/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Products & Services Directory
 * Source: Official Published Annual Report 2025 (Pages 15-18)
 * Addresses Items 5, 6, 7, and 9
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Layers, PiggyBank, Vault, Home, Car, Coins, Briefcase, 
  Share2, Users, Shield, RefreshCw, ChevronDown, CheckCircle2,
  Smartphone, Sparkles, ExternalLink, QrCode, ArrowRight, ShieldCheck,
  CreditCard, Download, ChevronLeft, ChevronRight, Zap, Building, Lock
} from "lucide-react";
import { PRODUCT_CATEGORIES, PRODUCTS_CATALOG, ProductItem } from "../data/productsData";

export default function ProductsSection() {
  const [activeView, setActiveView] = useState<"catalog" | "upay">("catalog");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null);

  const categoryScrollRef = useRef<HTMLDivElement | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Listen for navigation events from MegaNavbar / GlobalSearchModal / TableOfContents
  useEffect(() => {
    const handleSetProductsTab = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const tab = customEvent.detail;
      if (tab === "upay") {
        setActiveView("upay");
      } else {
        setActiveView("catalog");
        if (tab && tab !== "catalog" && tab !== "all") {
          setSelectedCategory(tab);
        }
      }
    };

    window.addEventListener("set-products-tab", handleSetProductsTab);
    return () => window.removeEventListener("set-products-tab", handleSetProductsTab);
  }, []);

  // Item 7: Ensure category bar smoothly auto-scrolls to center active button (e.g. VCF)
  useEffect(() => {
    if (activeView === "catalog" && categoryScrollRef.current && categoryRefs.current[selectedCategory]) {
      const container = categoryScrollRef.current;
      const button = categoryRefs.current[selectedCategory];
      if (container && button) {
        const cRect = container.getBoundingClientRect();
        const bRect = button.getBoundingClientRect();
        const currentScroll = container.scrollLeft;
        const targetScroll = (bRect.left - cRect.left) + currentScroll - (cRect.width / 2) + (bRect.width / 2);
        container.scrollTo({
          left: Math.max(0, targetScroll),
          behavior: "smooth"
        });
      }
    }
  }, [selectedCategory, activeView]);

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryScrollRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      categoryScrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
            <span>Product Catalog & Digital Ecosystem • Pages 15–18</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            {activeView === "catalog" ? "Product Portfolio & What We Offer" : "SDB UPay Mobile Banking Ecosystem"}
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            {activeView === "catalog" 
              ? "From grassroots micro-savings and women entrepreneurship to high-yield corporate deposits, agricultural value chain finance, and concessionary refinance credit lines."
              : "SDB bank's flagship digital lifestyle and mobile banking platform, connecting rural merchants, cooperatives, and citizens through LankaQR, real-time fund transfers, and bill payments."
            }
          </p>
        </div>

        {/* View Mode Switcher: Products vs UPay */}
        <div className="inline-flex rounded-2xl bg-white p-1.5 border border-sdb-purple/15 shadow-xs shrink-0">
          <button
            onClick={() => setActiveView("catalog")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              activeView === "catalog"
                ? "bg-sdb-purple text-white shadow-xs"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            Product Portfolio
          </button>
          <button
            onClick={() => setActiveView("upay")}
            className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
              activeView === "upay"
                ? "bg-sdb-purple text-white shadow-xs"
                : "text-slate-600 hover:text-sdb-purple"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-sdb-coral" />
            <span>UPay Mobile Banking</span>
          </button>
        </div>
      </div>

      {/* VIEW A: PRODUCT PORTFOLIO CATALOG (Pages 15-18) */}
      {activeView === "catalog" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Core Banking Pillars Strip */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple">
                  What We Offer — Core Banking Pillars
                </h3>
                <p className="text-xs text-slate-500 font-mono">
                  Holistic financial solutions engineered for rural transformation and national economic rebound
                </p>
              </div>
              <span className="text-xs font-mono bg-sdb-purple/10 text-sdb-purple px-2.5 py-1 rounded-md font-bold">
                Pages 15–18
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                {
                  pillar: "Retail & Savings",
                  desc: "Personal savings accounts, fixed deposits, women's empowerment packages ('Uththamavi'), and children's education trusts ('Dayada').",
                  metric: "LKR 20.5 Bn+",
                  tag: "Public Savings"
                },
                {
                  pillar: "MSME & Micro Finance",
                  desc: "Tailored credit facilities, SME Plus, Business Plus, working capital lines, and specialized equipment lease financing.",
                  metric: "25% of Book",
                  tag: "Enterprise Core"
                },
                {
                  pillar: "Cooperative Banking",
                  desc: "Wholesale liquidity pools, institutional deposit products, and technical advisory for 4,000+ primary SANASA cooperative societies.",
                  metric: "35% Funding",
                  tag: "Grassroots Network"
                },
                {
                  pillar: "Food, Agri & VCF",
                  desc: "Value Chain Financing with Rabo Partnerships, tea smallholders credit lines, dairy farming facilities, and green agro-solar loans.",
                  metric: "68,900+ Loans",
                  tag: "Agri Backbone"
                },
                {
                  pillar: "Digital & UPay Ecosystem",
                  desc: "SDB UPay mobile wallet, LankaPay QR merchant settlement, Business Internet Banking, and automated CDM branch networks.",
                  metric: "37% Digital Share",
                  tag: "Fintech Inclusion"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-sdb-purple/10 shadow-xs flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-sdb-purple mt-1">
                      {item.pillar}
                    </h4>
                    <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-sdb-purple font-bold">
                    <span>{item.metric}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search & Category Filter Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            {/* Search Bar */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search products, loans, features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-sdb-purple/20 focus:border-sdb-purple rounded-xl py-2 pl-9 pr-4 text-xs text-sdb-purple outline-none shadow-2xs font-mono transition-all"
              />
              <Search className="w-4 h-4 text-sdb-purple/40 absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2 text-xs text-sdb-coral font-bold hover:underline cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Scroll Buttons for Category Bar (Item 7 Navigation Enhancement) */}
            <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
              <span>Navigate Categories:</span>
              <button
                onClick={() => scrollCategories("left")}
                className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 cursor-pointer shadow-2xs"
                title="Scroll Categories Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollCategories("right")}
                className="p-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 cursor-pointer shadow-2xs"
                title="Scroll Categories Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Pills Navigation Bar (Item 7 Fix: Auto-scrolls and animates on click) */}
          <div 
            ref={categoryScrollRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200"
          >
            {PRODUCT_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  ref={(el) => { categoryRefs.current[cat.id] = el; }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-sdb-purple text-white shadow-md shadow-sdb-purple/15 border border-transparent font-bold scale-102"
                      : "bg-white/80 hover:bg-white text-slate-700 hover:text-sdb-purple border border-sdb-purple/10"
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}>
                    {cat.count}
                  </span>
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
              Source: Annual Report Pages 15–18
            </span>
          </div>

          {/* Products Grid (Item 5: With Authentic AR Product Logos) */}
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
                      {/* Top Bar: Category Badge & Page Hint */}
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-sdb-coral bg-sdb-coral/10 px-2.5 py-0.5 rounded-full">
                          {prod.category}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                          Page {prod.sourcePage}
                        </span>
                      </div>

                      {/* Item 5: Authentic Product Logo from AR */}
                      {prod.logo && (
                        <div className="h-12 w-full bg-slate-50/70 rounded-xl p-2 flex items-center justify-start border border-slate-100/80">
                          <img
                            src={prod.logo}
                            alt={`${prod.name} Logo`}
                            className="max-h-full max-w-[160px] object-contain"
                            loading="lazy"
                            onError={(e) => {
                              // If logo image fails, hide container gracefully
                              const target = e.currentTarget;
                              target.style.display = "none";
                            }}
                          />
                        </div>
                      )}

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
        </motion.div>
      )}

      {/* VIEW B: DEDICATED SDB UPAY MOBILE BANKING VIEW (Item 9 Fix) */}
      {activeView === "upay" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* UPay Hero Showcase */}
          <div className="bg-gradient-to-br from-sdb-purple via-[#361869] to-sdb-plum text-white rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden space-y-6">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold bg-white/10 px-3 py-1 rounded-full text-sdb-amber">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Flagship Digital Platform • LankaPay Technnovation Merit Award</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                  SDB UPay Mobile Banking & Lifestyle Ecosystem
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Functioning seamlessly as both a full-fledged licensed mobile banking application and an interoperable digital lifestyle wallet, SDB UPay empowers unbanked and rural communities to transact, save, and grow with speed and confidence.
                </p>
              </div>

              {/* Stat Callout Pills */}
              <div className="grid grid-cols-2 gap-3 shrink-0 w-full sm:w-auto">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                  <p className="font-serif text-2xl font-bold text-sdb-amber">LKR 105 Mn+</p>
                  <p className="text-[10px] font-mono text-white/70">Digital Savings Accounts</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 text-center">
                  <p className="font-serif text-2xl font-bold text-sdb-amber">37%</p>
                  <p className="text-[10px] font-mono text-white/70">Digital Transaction Share</p>
                </div>
              </div>
            </div>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="flex items-center space-x-2 text-white/90">
                <QrCode className="w-4 h-4 text-sdb-coral" />
                <span>LankaQR Merchants</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Zap className="w-4 h-4 text-sdb-amber" />
                <span>Instant CEFTS Transfers</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>GovPay & LPOPP Taxes</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Lock className="w-4 h-4 text-cyan-300" />
                <span>Biometric Security</span>
              </div>
            </div>
          </div>

          {/* Key Capabilities Grid */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-xl text-sdb-purple">
              Comprehensive Digital Capabilities (2025 Audited Disclosures)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "LankaQR Merchant Payments",
                  icon: QrCode,
                  desc: "Enables instant scan-to-pay functionality across tens of thousands of LankaQR-certified merchants, grocery stores, pharmacies, and farmer markets islandwide.",
                  tag: "Cashless Inclusivity"
                },
                {
                  title: "Real-Time Interbank Transfers",
                  icon: Zap,
                  desc: "Execute instant funds transfers to any licensed commercial or specialized bank in Sri Lanka 24/7/365 via LankaPay Common Electronic Fund Transfer Switch (CEFTS).",
                  tag: "Instant Settlement"
                },
                {
                  title: "GovPay & LPOPP Statutory Settlement",
                  icon: Building,
                  desc: "Facilitates real-time payment of police traffic spot fines via LankaPay GovPay, alongside direct statutory duties to Sri Lanka Customs, Ports, and Inland Revenue (IRD).",
                  tag: "E-Governance"
                },
                {
                  title: "50+ Billers & Utility Payments",
                  icon: CreditCard,
                  desc: "Seamless one-click settlement of electricity (CEB/LECO), water, telecommunications, insurance premiums, and municipal council rates with automated receipts.",
                  tag: "Lifestyle Payments"
                },
                {
                  title: "Digital CASA & E-FD Booking",
                  icon: Vault,
                  desc: "Remote paperless onboarding enabling customers to open savings accounts and book high-yielding fixed deposits without ever visiting a brick-and-mortar branch.",
                  tag: "Paperless Banking"
                },
                {
                  title: "Merchant Quick Loan Access",
                  icon: Briefcase,
                  desc: "POS and LankaQR registered merchants can apply for short-term working capital loans directly inside the UPay app based on verified transaction throughput.",
                  tag: "Digital Credit"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 border border-sdb-purple/10 shadow-xs flex flex-col justify-between space-y-3 hover:border-sdb-purple/30 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-sdb-purple/5 text-sdb-purple flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider bg-sdb-coral/10 px-2.5 py-0.5 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <h5 className="font-serif font-bold text-base text-sdb-purple">
                        {item.title}
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Available on Android & iOS</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology & Intellectual Property Spotlight */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-sdb-purple/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-sdb-purple/10 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-wider block">
                  Balance Sheet Valuation • Note 22 Intangible Assets
                </span>
                <h4 className="font-serif font-bold text-xl text-sdb-purple">
                  UPay Intellectual Property & Technology Valuation
                </h4>
              </div>
              <span className="text-xs font-mono text-sdb-purple bg-sdb-purple/10 px-3 py-1 rounded-full font-bold">
                LKR 60.0 Mn Carrying Value
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Acquired as part of SDB bank's strategic digital leap, UPay is recognized on the audited Statement of Financial Position under <strong>Intangible Assets (Note 22)</strong> with a carrying value of <strong>LKR 60 Mn</strong>. During 2025, continuous enhancements to UPay's microservices architecture and Security Operations Centre (SOC) integration helped drive a <strong>+15.58%</strong> surge in Net Fee and Commission Income to <strong>LKR 675 Mn</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Net Fee Income Surge</span>
                <p className="font-serif font-bold text-lg text-sdb-purple mt-0.5">+15.58% YoY</p>
                <p className="text-[10px] text-slate-500 font-mono">LKR 675 Mn total</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">IT Infrastructure Asset</span>
                <p className="font-serif font-bold text-lg text-sdb-coral mt-0.5">LKR 4.05 Bn+</p>
                <p className="text-[10px] text-slate-500 font-mono">+26.5% tech asset base</p>
              </div>
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">Statutory Security</span>
                <p className="font-serif font-bold text-lg text-emerald-700 mt-0.5">CBSL Compliant</p>
                <p className="text-[10px] text-slate-500 font-mono">SOC 24/7 surveillance</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
