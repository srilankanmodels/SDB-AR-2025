/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useBranding, BrandingConfig } from "./BrandingContext";
import { BOARD_MEMBERS, EXECUTIVE_MANAGEMENT } from "../data/reportData";
import SDBLogo from "./SDBLogo";
import { supabase } from "../supabase";
import { CORPORATE_MANAGEMENT_IMAGE_MAP, getSupabaseImageUrl } from "../utils/supabasePersonnel";

// Import all icons we need
import { 
  KeyRound, ShieldAlert, CheckCircle2, RotateCcw, Save, LogOut, ArrowLeft, 
  Settings, Image as ImageIcon, Sparkles, Type, Palette, ExternalLink,
  UserCheck, Users, Briefcase, FileImage, LayoutGrid, Check, Trash2, UploadCloud,
  MessageSquare, Star
} from "lucide-react";

interface AdminPortalProps {
  onBack: () => void;
}

const PRESET_IMAGES = {
  headOffice: [
    { label: "Published Report - About This Report Visual", url: "/src/assets/annual_report_images/highlights/page_12_screenshot.png" },
    { label: "Capital Showcase - Page 68", url: "/src/assets/annual_report_images/capitals/page_68_image_0.png" },
    { label: "Original Asset", url: "/src/assets/images/sdb_head_office_1783367607149.jpg" }
  ],
  cooperativeFarming: [
    { label: "Published Report - Farmer Harvest Artwork", url: "/src/assets/annual_report_images/leadership/page_43_image_0.png" },
    { label: "Social Capital Fieldwork", url: "/src/assets/annual_report_images/capitals/page_88_image_6.png" },
    { label: "Original Asset", url: "/src/assets/images/cooperative_farming_1783367621583.jpg" }
  ],
  digitalBanking: [
    { label: "Published Report - Financial Highlights Summary", url: "/src/assets/annual_report_images/highlights/page_12_screenshot.png" },
    { label: "Digital Capital & Branches", url: "/src/assets/annual_report_images/capitals/page_88_image_7.png" },
    { label: "Original Asset", url: "/src/assets/images/digital_banking_1783367635268.jpg" }
  ],
  boardroomLeadership: [
    { label: "Full Team 2025 (sdb_bod_2025_web.jpg)", url: "/src/assets/full team/sdb_bod_2025_web.jpg" },
    { label: "Full Team Master (SDB BOD 2025.png)", url: "/src/assets/full team/SDB BOD 2025.png" },
    { label: "Original Asset", url: "/src/assets/images/boardroom_leadership_1783367647402.jpg" }
  ],
  coverVideo: [
    { label: "Supabase Database Storage (mainvideo.mp4)", url: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/mainvideo.mp4" }
  ],
  coverImage: [
    { label: "Published Handcrafted Cover", url: "/src/assets/annual_report_images/theme/cover_handcrafted.png" },
    { label: "Page 1 Title Artwork", url: "/src/assets/annual_report_images/theme/page_1_image_0.png" }
  ],
  logo: [
    { label: "Official SDB bank Logo", url: "/assets/images/sdb_bank_logo.png" },
    { label: "Official SDB bank Logo (Hi-Res 2x)", url: "/assets/images/sdb_bank_logo@2x.png" },
    { label: "Official SDB bank Emblem Icon", url: "/assets/images/sdb_bank_icon.png" }
  ],
  chairperson: [
    { label: "Supabase Database Studio Portrait (EUK05956.png)", url: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png" },
    { label: "Published Report - Page 44", url: "/src/assets/annual_report_images/leadership/page_44_image_1.png" }
  ],
  ceo: [
    { label: "Supabase Database Storage (Kapila Ariyaratne.png)", url: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png" },
    { label: "Published Report - Page 48", url: "/src/assets/annual_report_images/leadership/page_48_image_2.png" }
  ]
};

const DEFAULT_MANAGEMENT_IMAGES_ADMIN: Record<string, string> = Object.entries(CORPORATE_MANAGEMENT_IMAGE_MAP).reduce(
  (acc, [name, filename]) => {
    acc[name] = getSupabaseImageUrl(filename);
    return acc;
  },
  {} as Record<string, string>
);

const DEFAULT_BRANDING: BrandingConfig = {
  logoTextSDB: "SDB",
  logoTextBank: "bank",
  logoColor: "#2B80C5",
  logoTextColorBank: "#4D4D4F",
  headOfficeImage: "/src/assets/images/sdb_head_office_1783367607149.jpg",
  cooperativeFarmingImage: "/src/assets/annual_report_images/leadership/page_43_image_0.png",
  digitalBankingImage: "/src/assets/annual_report_images/highlights/page_12_screenshot.png",
  boardroomLeadershipImage: "/src/assets/full team/sdb_bod_2025_web.jpg",
  logoImage: "/assets/images/sdb_bank_logo.png",
  coverImage: "/src/assets/annual_report_images/theme/cover_handcrafted.png",
  coverVideo: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/mainvideo.mp4",
  chairpersonImage: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png",
  ceoImage: "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png",
  boardImages: {
    "01": "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png",
    "02": "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png",
    "fullTeam": "/src/assets/full team/sdb_bod_2025_web.jpg"
  },
  managementImages: DEFAULT_MANAGEMENT_IMAGES_ADMIN
};

export default function AdminPortal({ onBack }: AdminPortalProps) {
  const { branding, isAdmin, login, logout, saveBranding, error: contextError } = useBranding();
  
  // Login states
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Dynamic console tab state
  const [activeTab, setActiveTab] = useState<"logo" | "portraits" | "board" | "management" | "backgrounds" | "feedback">("logo");

  // Feedback states
  interface FeedbackRecord {
    id: string;
    rating: number;
    subject?: string;
    sectionId?: string;
    message?: string;
    comment?: string;
    name?: string;
    userName?: string;
    email?: string;
    userEmail?: string;
    userId: string;
    createdAt: string;
  }
  const [feedbackList, setFeedbackList] = useState<FeedbackRecord[]>([]);
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  useEffect(() => {
    if (activeTab !== "feedback") return;

    async function fetchFeedback() {
      setFeedbackLoading(true);
      try {
        const { data, error } = await supabase
          .from("feedback")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) {
          console.error("Error loading feedback in Admin Console:", error);
          return;
        }

        const list: FeedbackRecord[] = (data || []).map((item: any) => ({
          id: item.id,
          rating: item.rating,
          subject: item.subject,
          sectionId: item.section_id || item.sectionId,
          message: item.message,
          comment: item.comment,
          name: item.name,
          userName: item.user_name || item.userName,
          email: item.email,
          userEmail: item.user_email || item.userEmail,
          userId: item.user_id || item.userId,
          createdAt: item.created_at || item.createdAt
        }));
        setFeedbackList(list);
      } catch (err) {
        console.error("Error loading feedback in Admin Console:", err);
      } finally {
        setFeedbackLoading(false);
      }
    }

    fetchFeedback();
  }, [activeTab]);

  const handleDeleteFeedback = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this feedback record?")) return;
    try {
      const { error } = await supabase.from("feedback").delete().eq("id", id);
      if (error) {
        throw error;
      }
      setFeedbackList(prev => prev.filter(f => f.id !== id));
    } catch (err) {
      console.error("Error deleting feedback:", err);
      alert("Failed to delete feedback. Verify administrator privileges.");
    }
  };

  // Selection states for collections
  const [selectedDirectorId, setSelectedDirectorId] = useState(BOARD_MEMBERS[0]?.id || "01");
  const [selectedExecName, setSelectedExecName] = useState(EXECUTIVE_MANAGEMENT[0]?.name || "");

  // Editor state (initialized from current server-side branding)
  const [formConfig, setFormConfig] = useState<BrandingConfig>({ ...DEFAULT_BRANDING });
  const [saveLoading, setSaveLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync state if branding loads or changes
  useEffect(() => {
    if (branding) {
      setFormConfig(prev => ({
        ...prev,
        ...branding,
        boardImages: branding.boardImages || {},
        managementImages: branding.managementImages || {}
      }));
    }
  }, [branding]);

  // Handle Login
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);
    try {
      const success = await login(password);
      if (success) {
        if (branding) {
          setFormConfig({ 
            ...branding,
            boardImages: branding.boardImages || {},
            managementImages: branding.managementImages || {}
          });
        }
      } else {
        setLoginError("Incorrect password. Use 'sdb2025' for testing.");
      }
    } catch (err) {
      setLoginError("Could not connect to the server.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Save
  const handleSaveConfig = async () => {
    setSaveLoading(true);
    setSaveSuccess(false);
    try {
      const success = await saveBranding(formConfig);
      if (success) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 4000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaveLoading(false);
    }
  };

  // Handle Reset to Defaults
  const handleResetToDefaults = () => {
    if (confirm("Are you sure you want to restore the official default logo and reset all uploaded portraits?")) {
      setFormConfig({ ...DEFAULT_BRANDING });
    }
  };

  const updateField = (key: keyof BrandingConfig, value: any) => {
    setFormConfig(prev => ({ ...prev, [key]: value }));
  };

  const updateBoardImage = (directorId: string, url: string) => {
    setFormConfig(prev => ({
      ...prev,
      boardImages: {
        ...(prev.boardImages || {}),
        [directorId]: url
      }
    }));
  };

  const clearBoardImage = (directorId: string) => {
    setFormConfig(prev => {
      const nextImages = { ...(prev.boardImages || {}) };
      delete nextImages[directorId];
      return {
        ...prev,
        boardImages: nextImages
      };
    });
  };

  const updateManagementImage = (name: string, url: string) => {
    setFormConfig(prev => ({
      ...prev,
      managementImages: {
        ...(prev.managementImages || {}),
        [name]: url
      }
    }));
  };

  const clearManagementImage = (name: string) => {
    setFormConfig(prev => {
      const nextImages = { ...(prev.managementImages || {}) };
      delete nextImages[name];
      return {
        ...prev,
        managementImages: nextImages
      };
    });
  };

  // File Uploader component designed to work dynamically inside tabs
  function FileUploader({
    label,
    value,
    onUploaded,
    onClear,
    id
  }: {
    label: string;
    value?: string;
    onUploaded: (url: string) => void;
    onClear: () => void;
    id: string;
  }) {
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
      } else if (e.type === "dragleave") {
        setDragActive(false);
      }
    };

    const handleDrop = async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        await uploadFile(file);
      }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        await uploadFile(file);
      }
    };

    const uploadFile = async (file: File) => {
      if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
        alert("Please select a valid image or video file.");
        return;
      }
      setUploading(true);
      try {
        // Priority 1: Upload directly to Supabase database storage bucket "sdb bank"
        try {
          const cleanName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
          const { data: uploadData, error: uploadErr } = await supabase.storage
            .from("sdb bank")
            .upload(cleanName, file, {
              cacheControl: "3600",
              upsert: true
            });
          if (!uploadErr && uploadData) {
            const { data: { publicUrl } } = supabase.storage
              .from("sdb bank")
              .getPublicUrl(cleanName);
            if (publicUrl) {
              onUploaded(publicUrl);
              setUploading(false);
              return;
            }
          }
        } catch (sbErr) {
          console.warn("Supabase storage direct upload fallback:", sbErr);
        }

        // Priority 2: Fallback to Node.js backend upload
        const token = localStorage.getItem("sdb_admin_token");
        const reader = new FileReader();
        reader.onload = async () => {
          const base64Data = reader.result as string;
          try {
            const res = await fetch("/api/admin/upload", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
              },
              body: JSON.stringify({ filename: file.name, base64Data })
            });
            if (res.ok) {
              const data = await res.json();
              onUploaded(data.url);
            } else {
              // Fallback to direct Base64 representation in static/Vercel hosting
              console.warn("Express backend upload failed, falling back to secure client-side Base64 storage");
              onUploaded(base64Data);
            }
          } catch (err) {
            // Fallback to direct Base64 representation in static/Vercel hosting
            console.warn("No active Node.js server found. Using secure client-side Base64 fallback for static hosting");
            onUploaded(base64Data);
          } finally {
            setUploading(false);
          }
        };
        reader.readAsDataURL(file);
      } catch (e) {
        alert("Failed to read file.");
        setUploading(false);
      }
    };

    return (
      <div className="space-y-2 text-left">
        <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">{label}</label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Drag and Drop Zone */}
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            className={`flex-1 border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center transition-all min-h-[120px] text-center cursor-pointer relative ${
              dragActive
                ? "border-sdb-purple bg-sdb-purple/5"
                : "border-slate-200 hover:border-sdb-purple/30 bg-slate-50/50"
            }`}
            onClick={() => document.getElementById(`input-file-${id}`)?.click()}
          >
            <input
              id={`input-file-${id}`}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {uploading ? (
              <div className="space-y-2">
                <div className="w-6 h-6 border-2 border-sdb-purple border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs font-mono text-slate-500">Uploading portrait to secure disk...</p>
              </div>
            ) : (
              <div className="space-y-1">
                <UploadCloud className="w-8 h-8 text-sdb-purple/60 mx-auto mb-1" />
                <p className="text-xs font-mono text-slate-700">
                  <span className="text-sdb-purple font-semibold hover:underline">Click to upload</span> or drag image here
                </p>
                <p className="text-[10px] text-slate-400">PNG, JPG, WEBP formats supported (Max 10MB)</p>
              </div>
            )}
          </div>

          {/* Active Thumbnail Preview */}
          {value ? (
            <div className="w-full sm:w-28 flex flex-col items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-2xl shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
                <img src={value} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear();
                }}
                className="text-[10px] font-mono text-red-600 hover:text-red-800 font-bold uppercase hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Remove</span>
              </button>
            </div>
          ) : (
            <div className="w-full sm:w-28 flex flex-col items-center justify-center gap-1 p-4 bg-slate-50/50 border border-slate-200 border-dashed rounded-2xl shrink-0 h-28">
              <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                <ImageIcon className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">No Image</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Login Screen View
  if (!isAdmin) {
    return (
      <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white border border-sdb-purple/10 rounded-3xl p-8 shadow-xl relative overflow-hidden"
        >
          {/* Subtle colored cover border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sdb-purple via-sdb-coral to-sdb-amber" />
          
          <button 
            onClick={onBack}
            className="flex items-center space-x-1 text-xs text-slate-500 hover:text-sdb-purple mb-6 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Annual Report</span>
          </button>

          <div className="text-center space-y-3 mb-8">
            <div className="flex justify-center">
              <SDBLogo className="h-10" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-sdb-purple tracking-tight">
              Backend Control Console
            </h2>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Administrator login is required to customize the SDB corporate branding logo and leadership portraits.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div className="space-y-1 text-left">
              <label className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">Username</label>
              <input 
                type="text" 
                value="admin" 
                disabled
                className="w-full px-4 py-3 border border-slate-200 bg-slate-50 text-slate-500 rounded-xl text-sm font-mono focus:outline-none"
              />
            </div>

            <div className="space-y-1 text-left relative">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono font-semibold text-slate-600 uppercase tracking-wider">Password</label>
                <span className="text-[10px] text-slate-400 font-mono">Test pass: sdb2025</span>
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter administrator password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sdb-purple/10 transition-all font-mono"
                />
                <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Error alerts */}
            {(loginError || contextError) && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-xl flex items-start space-x-2.5 text-xs text-left"
              >
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                <span>{loginError || contextError}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-sdb-purple hover:bg-sdb-plum text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer disabled:opacity-50 text-sm"
            >
              {loginLoading ? "Authenticating..." : "Secure Login"}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-[10px] text-slate-400 font-mono text-center">
            🔒 SECURE CBSL COMPLIANT NODE ACCESS
          </div>
        </motion.div>
      </div>
    );
  }

  // Dashboard Editor Screen View
  return (
    <div className="space-y-8 text-left max-w-7xl mx-auto px-4 py-4">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white border border-sdb-purple/10 p-5 rounded-3xl gap-4 shadow-sm">
        <div className="space-y-1 text-left">
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">SECURE CHANNEL</span>
            <span className="text-slate-400 text-xs">Logged in as Administrator</span>
          </div>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-sdb-purple">Branding & Image Customizer</h2>
        </div>
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <button
            onClick={onBack}
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 px-4 py-2.5 rounded-xl transition-colors text-xs font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Exit Dashboard</span>
          </button>
          <button
            onClick={logout}
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 bg-red-50 border border-red-100 hover:bg-red-100 text-red-600 px-4 py-2.5 rounded-xl transition-colors text-xs font-semibold cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Multi-tab Console */}
        <div className="lg:col-span-7 space-y-6">
          {/* Console Tab Selectors */}
          <div className="flex overflow-x-auto gap-2 bg-slate-100 p-1.5 rounded-2xl scrollbar-none">
            {[
              { id: "logo", label: "Logo & Theme", icon: Palette },
              { id: "portraits", label: "Exec Portraits", icon: Users },
              { id: "board", label: "Directors", icon: Briefcase },
              { id: "management", label: "Management", icon: UserCheck },
              { id: "backgrounds", label: "Report BG", icon: FileImage },
              { id: "feedback", label: "Feedback", icon: MessageSquare }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-sdb-purple shadow-sm border border-sdb-purple/5"
                      : "text-slate-600 hover:text-sdb-purple hover:bg-white/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Contents */}
          <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 shadow-sm min-h-[350px]">
            <AnimatePresence mode="wait">
              {activeTab === "logo" && (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-100 pb-3 text-left">
                    <h3 className="font-serif font-bold text-lg text-sdb-purple">Dynamic SDB Logo Branding</h3>
                    <p className="text-xs text-slate-500 mt-1">Configure SDB logo text, brand colors, or upload a custom brand image logo.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">Logo Primary Text</label>
                      <input
                        type="text"
                        value={formConfig.logoTextSDB}
                        onChange={(e) => updateField("logoTextSDB", e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1 text-left">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">Logo Subtext (Suffix)</label>
                      <input
                        type="text"
                        value={formConfig.logoTextBank}
                        onChange={(e) => updateField("logoTextBank", e.target.value)}
                        className="w-full px-3 py-2.5 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">Logo Brand Color</label>
                      <div className="flex space-x-2">
                        <input
                          type="color"
                          value={formConfig.logoColor}
                          onChange={(e) => updateField("logoColor", e.target.value)}
                          className="w-10 h-10 border border-slate-200 rounded-lg cursor-pointer bg-white"
                        />
                        <input
                          type="text"
                          value={formConfig.logoColor}
                          onChange={(e) => updateField("logoColor", e.target.value)}
                          className="flex-1 px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">Suffix Color (Hex)</label>
                      <div className="flex space-x-2">
                        <input
                          type="color"
                          value={formConfig.logoTextColorBank}
                          onChange={(e) => updateField("logoTextColorBank", e.target.value)}
                          className="w-10 h-10 border border-slate-200 rounded-lg cursor-pointer bg-white"
                        />
                        <input
                          type="text"
                          value={formConfig.logoTextColorBank}
                          onChange={(e) => updateField("logoTextColorBank", e.target.value)}
                          className="flex-1 px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <FileUploader
                      label="Upload Custom Brand Logo Image"
                      value={formConfig.logoImage}
                      id="brand-logo"
                      onUploaded={(url) => updateField("logoImage", url)}
                      onClear={() => updateField("logoImage", "")}
                    />
                    {PRESET_IMAGES.logo.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        <span className="text-[10px] text-slate-500 font-mono">Preset:</span>
                        {PRESET_IMAGES.logo.map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => updateField("logoImage", preset.url)}
                            className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                              formConfig.logoImage === preset.url 
                                ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                                : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="text-[10px] text-slate-400 mt-2">The report defaults to the authentic vector SVG logo styled dynamically with the logo primary text, suffix, and brand hex colors above.</p>
                  </div>

                  <div className="border-t border-slate-100 pt-6">
                    <FileUploader
                      label="Upload Homepage Cover Image (Knitting/DNA illustration)"
                      value={formConfig.coverImage}
                      id="cover-image"
                      onUploaded={(url) => updateField("coverImage", url)}
                      onClear={() => updateField("coverImage", "")}
                    />
                    <p className="text-[10px] text-slate-400 mt-2">Upload a custom background/illustration (e.g. the knitting/DNA artwork) to display on the main Theme Cover screen of the report.</p>
                  </div>
                </motion.div>
              )}

              {activeTab === "portraits" && (
                <motion.div
                  key="portraits"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-100 pb-3 text-left">
                    <h3 className="font-serif font-bold text-lg text-sdb-purple">Executive Portraits</h3>
                    <p className="text-xs text-slate-500 mt-1">Upload high-resolution corporate photographs of the Chairperson and Chief Executive Officer.</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <FileUploader
                        label="Chairperson Portrait (Ms. Dinithi Ratnayake)"
                        value={formConfig.chairpersonImage}
                        id="chairperson-image"
                        onUploaded={(url) => updateField("chairpersonImage", url)}
                        onClear={() => updateField("chairpersonImage", "")}
                      />
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        <span className="text-[10px] text-slate-500 font-mono">Presets:</span>
                        {PRESET_IMAGES.chairperson.map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => updateField("chairpersonImage", preset.url)}
                            className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                              formConfig.chairpersonImage === preset.url 
                                ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                                : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                      <FileUploader
                        label="CEO Portrait (Mr. Kapila Ariyaratne)"
                        value={formConfig.ceoImage}
                        id="ceo-image"
                        onUploaded={(url) => updateField("ceoImage", url)}
                        onClear={() => updateField("ceoImage", "")}
                      />
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        <span className="text-[10px] text-slate-500 font-mono">Presets:</span>
                        {PRESET_IMAGES.ceo.map((preset, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => updateField("ceoImage", preset.url)}
                            className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                              formConfig.ceoImage === preset.url 
                                ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                                : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "board" && (
                <motion.div
                  key="board"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-100 pb-3 text-left">
                    <h3 className="font-serif font-bold text-lg text-sdb-purple">Board of Directors Portfolio</h3>
                    <p className="text-xs text-slate-500 mt-1">Select a board director from the dropdown list and upload their official portrait photograph.</p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Select Board Director</label>
                      <select
                        value={selectedDirectorId}
                        onChange={(e) => setSelectedDirectorId(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sdb-purple/10 transition-all font-serif font-bold text-sdb-purple"
                      >
                        {BOARD_MEMBERS.map(d => (
                          <option key={d.id} value={d.id}>{d.id} - {d.name} ({d.designation})</option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                      <FileUploader
                        label={`Upload Portrait for ${BOARD_MEMBERS.find(d => d.id === selectedDirectorId)?.name}`}
                        value={formConfig.boardImages?.[selectedDirectorId] || ""}
                        id={`board-dir-${selectedDirectorId}`}
                        onUploaded={(url) => updateBoardImage(selectedDirectorId, url)}
                        onClear={() => clearBoardImage(selectedDirectorId)}
                      />
                      {selectedDirectorId === "01" && (
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 mt-2">
                          <span className="text-[10px] text-slate-500 font-mono">Preset:</span>
                          <button
                            type="button"
                            onClick={() => updateBoardImage("01", "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/chairperson%20potrait/EUK05956.png")}
                            className="text-[10px] font-mono px-2 py-1 rounded border bg-sdb-purple/10 text-sdb-purple border-sdb-purple/20 hover:bg-sdb-purple hover:text-white transition-all cursor-pointer font-bold"
                          >
                            Supabase Studio Portrait (EUK05956.png)
                          </button>
                        </div>
                      )}
                      {selectedDirectorId === "02" && (
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 mt-2">
                          <span className="text-[10px] text-slate-500 font-mono">Preset:</span>
                          <button
                            type="button"
                            onClick={() => updateBoardImage("02", "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank/images/Kapila%20Ariyaratne.png")}
                            className="text-[10px] font-mono px-2 py-1 rounded border bg-sdb-purple/10 text-sdb-purple border-sdb-purple/20 hover:bg-sdb-purple hover:text-white transition-all cursor-pointer font-bold"
                          >
                            Supabase Storage (Kapila Ariyaratne.png)
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "management" && (
                <motion.div
                  key="management"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-100 pb-3 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-sdb-purple">Corporate Management Photos</h3>
                      <p className="text-xs text-slate-500 mt-1">Manage executive portraits linked from Supabase Storage or upload replacements.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newMap = { ...(formConfig.managementImages || {}) };
                        Object.entries(CORPORATE_MANAGEMENT_IMAGE_MAP).forEach(([name, file]) => {
                          newMap[name] = getSupabaseImageUrl(file);
                        });
                        updateField("managementImages", newMap);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sdb-purple text-white text-xs font-mono font-bold hover:bg-sdb-plum transition-all shadow-xs cursor-pointer shrink-0"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      <span>Auto-Link All 15 Supabase Images</span>
                    </button>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">Select Corporate Executive</label>
                      <select
                        value={selectedExecName}
                        onChange={(e) => setSelectedExecName(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-200 focus:border-sdb-purple/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sdb-purple/10 transition-all font-serif font-bold text-sdb-purple"
                      >
                        {EXECUTIVE_MANAGEMENT.map(e => (
                          <option key={e.name} value={e.name}>{e.name} - {e.designation}</option>
                        ))}
                      </select>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
                      <FileUploader
                        label={`Upload Portrait for ${selectedExecName}`}
                        value={formConfig.managementImages?.[selectedExecName] || ""}
                        id={`exec-${selectedExecName.replace(/\s+/g, "-")}`}
                        onUploaded={(url) => updateManagementImage(selectedExecName, url)}
                        onClear={() => clearManagementImage(selectedExecName)}
                      />
                      {CORPORATE_MANAGEMENT_IMAGE_MAP[selectedExecName] && (
                        <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 mt-2">
                          <span className="text-[10px] text-slate-500 font-mono">Supabase Storage:</span>
                          <button
                            type="button"
                            onClick={() => updateManagementImage(selectedExecName, getSupabaseImageUrl(CORPORATE_MANAGEMENT_IMAGE_MAP[selectedExecName]))}
                            className="text-[10px] font-mono px-2 py-1 rounded border bg-sdb-purple/10 text-sdb-purple border-sdb-purple/20 hover:bg-sdb-purple hover:text-white transition-all cursor-pointer font-bold"
                          >
                            Link Default: {CORPORATE_MANAGEMENT_IMAGE_MAP[selectedExecName]}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "backgrounds" && (
                <motion.div
                  key="backgrounds"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-100 pb-3 text-left">
                    <h3 className="font-serif font-bold text-lg text-sdb-purple">Annual Report Backgrounds</h3>
                    <p className="text-xs text-slate-500 mt-1">Configure high-resolution background photographs for the core sections of the report.</p>
                  </div>

                  {/* Asset 1: SDB Head Office */}
                  <div className="space-y-3 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl text-left">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">1. SDB Head Office Complex</label>
                      <span className="text-[10px] font-mono text-slate-400">Used in Overview & Footers</span>
                    </div>
                    <input
                      type="text"
                      value={formConfig.headOfficeImage}
                      onChange={(e) => updateField("headOfficeImage", e.target.value)}
                      placeholder="Paste picture URL here"
                      className="w-full px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 bg-white rounded-xl text-xs focus:outline-none font-mono"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center mr-1">Presets:</span>
                      {PRESET_IMAGES.headOffice.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => updateField("headOfficeImage", preset.url)}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                            formConfig.headOfficeImage === preset.url 
                              ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Asset 2: Cooperative Farming */}
                  <div className="space-y-3 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl text-left">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">2. Agriculture & Farming</label>
                      <span className="text-[10px] font-mono text-slate-400">Used in Note 12 disclosure</span>
                    </div>
                    <input
                      type="text"
                      value={formConfig.cooperativeFarmingImage}
                      onChange={(e) => updateField("cooperativeFarmingImage", e.target.value)}
                      placeholder="Paste picture URL here"
                      className="w-full px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 bg-white rounded-xl text-xs focus:outline-none font-mono"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center mr-1">Presets:</span>
                      {PRESET_IMAGES.cooperativeFarming.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => updateField("cooperativeFarmingImage", preset.url)}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                            formConfig.cooperativeFarmingImage === preset.url 
                              ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Asset 3: Digital Banking */}
                  <div className="space-y-3 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl text-left">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">3. Digital Payments & Merchant Banking</label>
                      <span className="text-[10px] font-mono text-slate-400">Used in Note 14 disclosure</span>
                    </div>
                    <input
                      type="text"
                      value={formConfig.digitalBankingImage}
                      onChange={(e) => updateField("digitalBankingImage", e.target.value)}
                      placeholder="Paste picture URL here"
                      className="w-full px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 bg-white rounded-xl text-xs focus:outline-none font-mono"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center mr-1">Presets:</span>
                      {PRESET_IMAGES.digitalBanking.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => updateField("digitalBankingImage", preset.url)}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                            formConfig.digitalBankingImage === preset.url 
                              ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Asset 4: Boardroom Leadership */}
                  <div className="space-y-3 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl text-left">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">4. Board of Directors Governance</label>
                      <span className="text-[10px] font-mono text-slate-400">Used in Leadership & Governance</span>
                    </div>
                    <input
                      type="text"
                      value={formConfig.boardroomLeadershipImage}
                      onChange={(e) => updateField("boardroomLeadershipImage", e.target.value)}
                      placeholder="Paste picture URL here"
                      className="w-full px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 bg-white rounded-xl text-xs focus:outline-none font-mono"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center mr-1">Presets:</span>
                      {PRESET_IMAGES.boardroomLeadership.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => updateField("boardroomLeadershipImage", preset.url)}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                            formConfig.boardroomLeadershipImage === preset.url 
                              ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Asset 5: Cover Page Video (Database Storage) */}
                  <div className="space-y-3 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl text-left">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">5. Cover Page Animated Background Video</label>
                      <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Supabase Storage</span>
                    </div>
                    <input
                      type="text"
                      value={formConfig.coverVideo || ""}
                      onChange={(e) => updateField("coverVideo", e.target.value)}
                      placeholder="Paste Supabase storage video URL here"
                      className="w-full px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 bg-white rounded-xl text-xs focus:outline-none font-mono"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center mr-1">Presets:</span>
                      {PRESET_IMAGES.coverVideo.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => updateField("coverVideo", preset.url)}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                            formConfig.coverVideo === preset.url 
                              ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Asset 6: Cover Page Static Poster */}
                  <div className="space-y-3 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl text-left">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wide">6. Cover Page Fallback / Poster Image</label>
                      <span className="text-[10px] font-mono text-slate-400">Used as Video Poster</span>
                    </div>
                    <input
                      type="text"
                      value={formConfig.coverImage || ""}
                      onChange={(e) => updateField("coverImage", e.target.value)}
                      placeholder="Paste picture URL here"
                      className="w-full px-3 py-2 border border-slate-200 focus:border-sdb-purple/50 bg-white rounded-xl text-xs focus:outline-none font-mono"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-500 font-mono flex items-center mr-1">Presets:</span>
                      {PRESET_IMAGES.coverImage.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => updateField("coverImage", preset.url)}
                          className={`text-[10px] font-mono px-2 py-1 rounded border transition-all cursor-pointer ${
                            formConfig.coverImage === preset.url 
                              ? "bg-sdb-purple border-sdb-purple text-white shadow-sm" 
                              : "bg-white border-slate-200 hover:bg-slate-50 text-slate-600"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "feedback" && (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 text-left"
                >
                  <div className="border-b border-slate-100 pb-3 text-left flex justify-between items-center">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-sdb-purple">Stakeholder Feedback Console</h3>
                      <p className="text-xs text-slate-500 mt-1">Review feedback logs and inquiries submitted by report readers.</p>
                    </div>
                    <span className="bg-sdb-purple/10 text-sdb-purple font-mono text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {feedbackList.length} submissions
                    </span>
                  </div>

                  {feedbackLoading ? (
                    <div className="py-12 text-center text-slate-400 text-xs font-mono">
                      Loading feedback logs from secure Supabase database...
                    </div>
                  ) : feedbackList.length === 0 ? (
                    <div className="py-12 text-center text-slate-400 text-xs font-mono border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                      No stakeholder feedback logs found.
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                      {feedbackList.map((item) => (
                        <div key={item.id} className="p-4 border border-slate-100 rounded-2xl bg-slate-50/50 space-y-3 relative group hover:border-sdb-purple/15 transition-all text-left">
                          <button
                            onClick={() => handleDeleteFeedback(item.id)}
                            className="absolute top-4 right-4 p-1.5 bg-white border border-slate-200 text-slate-400 hover:text-red-600 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            title="Delete Feedback"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>

                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sdb-purple text-white uppercase tracking-wider">
                              {item.subject || item.sectionId}
                            </span>
                            <div className="flex items-center">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                  key={s}
                                  className={`w-3 h-3 ${
                                    s <= item.rating ? "text-sdb-amber fill-sdb-amber" : "text-slate-200"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 ml-auto">
                              {new Date(item.createdAt).toLocaleString()}
                            </span>
                          </div>

                          <p className="text-xs text-slate-700 leading-relaxed font-serif whitespace-pre-wrap">
                            "{item.message || item.comment}"
                          </p>

                          <div className="border-t border-slate-100/50 pt-2.5 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                            <span className="font-bold text-slate-700">SUBMITTER:</span>
                            <span>{item.name || item.userName || "Anonymous"}</span>
                            {(item.email || item.userEmail) && (
                              <>
                                <span className="text-slate-300">|</span>
                                <span className="italic text-sdb-purple/80">{item.email || item.userEmail}</span>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Live Previews */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 space-y-6 shadow-sm">
            <div className="flex items-center space-x-2 border-b border-slate-100 pb-3 text-left">
              <Sparkles className="w-5 h-5 text-sdb-purple" />
              <h3 className="font-serif font-bold text-lg text-sdb-purple">Corporate Branding Preview</h3>
            </div>

            {/* SDB Logo Preview box */}
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Dynamic Logo Render</span>
              <div className="border border-slate-100 bg-slate-50 rounded-2xl p-6 flex justify-center items-center shadow-inner">
                {formConfig.logoImage ? (
                  <div className="h-12 w-auto flex items-center justify-center">
                    <img
                      src={formConfig.logoImage}
                      alt="Uploaded Brand Logo"
                      className="max-h-full object-contain rounded"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-3 select-none">
                    {/* SDB Swirl Icon SVG */}
                    <svg
                      viewBox="0 0 100 100"
                      className="h-10 w-auto shrink-0 animate-pulse"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 86 50 C 86 73, 70 90, 48 90 C 24 90, 8 72, 8 48 C 8 22, 26 8, 50 8 C 68 8, 82 18, 86 34"
                        stroke={formConfig.logoColor}
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M 76 50 C 76 66, 64 78, 48 78 C 31 78, 18 64, 18 46 C 18 28, 31 18, 48 18 C 60 18, 70 26, 73 38"
                        stroke={formConfig.logoColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M 66 50 C 66 59, 58 66, 48 66 C 38 66, 28 56, 28 44 C 28 32, 38 28, 48 28 C 55 28, 61 33, 63 41"
                        stroke={formConfig.logoColor}
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M 40 38 C 44 38, 48 40, 48 44 C 48 48, 42 50, 42 54 C 42 58, 46 60, 50 60"
                        stroke={formConfig.logoColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>

                    <div className="flex items-baseline text-left">
                      <span 
                        className="font-sans font-black text-2xl md:text-3xl tracking-tight leading-none"
                        style={{ 
                          fontFamily: 'system-ui, -apple-system, sans-serif',
                          color: formConfig.logoColor
                        }}
                      >
                        {formConfig.logoTextSDB}
                      </span>
                      <span 
                        className="font-serif font-medium text-xl md:text-2xl leading-none ml-1"
                        style={{ 
                          fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                          color: formConfig.logoTextColorBank
                        }}
                      >
                        {formConfig.logoTextBank}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Leadership Portraits previews */}
            <div className="space-y-3 border-t border-slate-100 pt-4 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Dynamic Leadership Profiles</span>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Chairperson */}
                <div className="flex flex-col items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex items-center justify-center text-slate-300">
                    {formConfig.chairpersonImage ? (
                      <img src={formConfig.chairpersonImage} alt="Chairperson" className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-8 h-8" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 mt-2 truncate max-w-full">Ms. Dinithi Ratnayake</span>
                  <span className="text-[8px] font-mono text-sdb-coral uppercase tracking-wider font-semibold">Chairperson</span>
                </div>

                {/* CEO */}
                <div className="flex flex-col items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex items-center justify-center text-slate-300">
                    {formConfig.ceoImage ? (
                      <img src={formConfig.ceoImage} alt="CEO" className="w-full h-full object-cover" />
                    ) : (
                      <Users className="w-8 h-8" />
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 mt-2 truncate max-w-full">Mr. Kapila Ariyaratne</span>
                  <span className="text-[8px] font-mono text-sdb-coral uppercase tracking-wider font-semibold">CEO</span>
                </div>
              </div>
            </div>

            {/* Core backgrounds previews */}
            <div className="space-y-3 border-t border-slate-100 pt-4 text-left">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">Dynamic Background Assets</span>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 block truncate">1. Head Office</span>
                  <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img src={formConfig.headOfficeImage} alt="Head Office Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 block truncate">2. Agriculture</span>
                  <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img src={formConfig.cooperativeFarmingImage} alt="Agriculture Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 block truncate">3. Digital Banking</span>
                  <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img src={formConfig.digitalBankingImage} alt="Digital Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-slate-400 block truncate">4. Governance</span>
                  <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
                    <img src={formConfig.boardroomLeadershipImage} alt="Boardroom Preview" className="w-full h-full object-cover" />
                  </div>
                </div>

                {formConfig.coverVideo && (
                  <div className="space-y-1 col-span-2">
                    <span className="text-[9px] font-mono text-emerald-600 font-bold block truncate">5. Cover Video (Supabase Storage)</span>
                    <div className="aspect-video rounded-xl overflow-hidden border border-slate-200 bg-black relative">
                      <video 
                        src={formConfig.coverVideo} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action buttons bar */}
            <div className="pt-4 border-t border-slate-100 space-y-3 text-left">
              {saveSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs p-3.5 rounded-xl flex items-center space-x-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Branding configuration compiled and synchronized successfully on server!</span>
                </motion.div>
              )}

              {contextError && (
                <div className="bg-red-50 border border-red-100 text-red-700 text-xs p-3.5 rounded-xl flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{contextError}</span>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleResetToDefaults}
                  className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 py-3.5 px-4 rounded-xl text-xs font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Restore Defaults</span>
                </button>
                <button
                  type="button"
                  onClick={handleSaveConfig}
                  disabled={saveLoading}
                  className="flex-[2] inline-flex items-center justify-center space-x-2 bg-sdb-purple hover:bg-sdb-plum text-white py-3.5 px-4 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{saveLoading ? "Saving Changes..." : "Save Config to Server"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
