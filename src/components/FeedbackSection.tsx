/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Star, CheckCircle2, ShieldAlert, Send } from "lucide-react";
import { useAuth } from "./AuthContext";
import { supabase, handleSupabaseError, OperationType } from "../supabase";

export default function FeedbackSection() {
  const { user } = useAuth();
  
  const [rating, setRating] = useState<number>(5);
  const [subject, setSubject] = useState<string>("Financial Highlights");
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const feedbackData = {
        rating,
        subject,
        section_id: subject,
        message: message.trim(),
        comment: message.trim(),
        name: user ? (user.displayName || "Authenticated User") : (name.trim() || "Anonymous"),
        user_name: user ? (user.displayName || "Authenticated User") : (name.trim() || "Anonymous"),
        email: user ? (user.email || "no-email@sdb.lk") : (email.trim() || "no-email@sdb.lk"),
        user_email: user ? (user.email || "no-email@sdb.lk") : (email.trim() || "no-email@sdb.lk"),
        user_id: user ? user.uid : "anonymous",
        created_at: new Date().toISOString()
      };

      const { error } = await supabase.from("feedback").insert([feedbackData]);
      if (error) {
        handleSupabaseError(error, OperationType.CREATE, "feedback");
      }

      setSubmitSuccess(true);
      setMessage("");
      setRating(5);
    } catch (err: any) {
      console.error("Error submitting feedback:", err);
      setSubmitError(err.message || "Failed to submit feedback. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="annual-report-feedback" className="max-w-4xl mx-auto mt-12 bg-white rounded-3xl shadow-xl border border-sdb-purple/10 p-6 md:p-8 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-sdb-coral/5 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sdb-purple/5 rounded-full blur-3xl pointer-events-none -ml-10 -mb-10" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 flex flex-col justify-center">
          <div className="w-12 h-12 rounded-2xl bg-sdb-purple/5 border border-sdb-purple/10 flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-sdb-purple" />
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-sdb-purple tracking-tight">
            Share Your Feedback
          </h3>
          <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">
            As SDB bank progresses on our digital and sustainable roadmap, your input matters. Tell us your thoughts on the FY 2025 Annual Report disclosures, figures, or overall layout.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
            <span className="bg-sdb-cream px-2 py-0.5 rounded border border-sdb-purple/5 font-semibold">SECURE & CONFIDENTIAL</span>
            <span className="bg-sdb-cream px-2 py-0.5 rounded border border-sdb-purple/5 font-semibold">STAKEHOLDER GOVERNANCE</span>
          </div>
        </div>

        <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-sdb-purple/10 pt-6 md:pt-0 md:pl-8">
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-8 text-center"
              >
                <div className="w-14 h-14 bg-sdb-green/10 text-sdb-green rounded-full flex items-center justify-center mb-4 shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-lg text-sdb-purple">Thank You For Your Feedback!</h4>
                <p className="text-xs text-slate-500 mt-1.5 max-w-sm">
                  Your feedback has been successfully registered in SDB's secure database. Our IR team reviews all stakeholder submissions.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 text-xs bg-sdb-purple/10 hover:bg-sdb-purple/15 text-sdb-purple font-semibold py-2 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Another Feedback
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="feedback-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Star rating selection */}
                <div className="flex flex-col items-start space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">How would you rate this interactive report?</label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 rounded hover:bg-sdb-purple/5 transition-colors cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 transition-all ${
                            star <= rating
                              ? "text-sdb-amber fill-sdb-amber"
                              : "text-slate-300 hover:text-sdb-amber"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject selection */}
                <div className="flex flex-col items-start space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Report Section / Inquiry Area</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 border border-sdb-purple/10 focus:border-sdb-purple/30 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none transition-colors"
                  >
                    <option value="Financial Highlights">Financial Highlights & PBT</option>
                    <option value="Cooperative Networks">Note 12: Cooperatives & Livelihood</option>
                    <option value="Digital Disclosures">Note 14: Digital Banking (UPay)</option>
                    <option value="Executive Governance">Leadership & Governance</option>
                    <option value="Copilot Usability">Report AI Copilot Usability</option>
                  </select>
                </div>

                {/* Personal details (if not signed in) */}
                {!user && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col items-start space-y-1">
                      <label className="text-[10px] font-semibold text-slate-500">Your Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Priyantha Silva"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50 border border-sdb-purple/10 focus:border-sdb-purple/30 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none"
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-1">
                      <label className="text-[10px] font-semibold text-slate-500">Your Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="e.g. priyantha@silva.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-sdb-purple/10 focus:border-sdb-purple/30 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* Feedback message */}
                <div className="flex flex-col items-start space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Your Feedback or Question</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Write your suggestions, notes corrections, or queries here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-sdb-purple/10 focus:border-sdb-purple/30 rounded-xl px-3 py-2.5 text-xs text-slate-800 outline-none min-h-[80px]"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-100 text-red-700 rounded-xl p-3 text-xs text-left flex items-start space-x-1.5 shadow-sm">
                    <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-sdb-purple hover:bg-sdb-purple/95 text-white font-serif font-bold text-xs py-2.5 px-4 rounded-xl shadow-md shadow-sdb-purple/10 transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <span>Submit Feedback</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
