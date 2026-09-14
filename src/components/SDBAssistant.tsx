/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, Send, X, Bot, User, Sparkles, Loader2, HelpCircle, ArrowRight, Trash2, ShieldAlert, LogIn, LogOut
} from "lucide-react";
import { useAuth } from "./AuthContext";
import { supabase, handleSupabaseError, OperationType } from "../supabase";

interface ChatMessage {
  id: string;
  role: "user" | "model";
  message: string;
  timestamp: Date;
}

const STARTER_QUESTIONS = [
  "What is the PBT (Profit Before Tax) for 2025 and its growth?",
  "What are the 6 Capitals SDB focuses on?",
  "Who is the CEO of SDB bank and what is his experience?",
  "Tell me about SDB's micro-loans for Sri Lankan farmers (Note 12)",
  "How much did SDB UPay digital deposits grow (Note 14)?"
];

export default function SDBAssistant() {
  const { user, signInWithGoogle, signOut } = useAuth();
  const [chatDocId, setChatDocId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>(" ");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      message: "Hello! I am your SDB Bank AI Assistant. I have read the complete audited **SDB 2025 Annual Report**, including all **20 Notes to the Financial Statements**. \n\nFeel free to ask me anything about our financial performance, strategic pillars, agricultural cooperative networks, digital transformation, or board of directors. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Load user's latest chat log from Supabase upon signing in
  useEffect(() => {
    if (!user) {
      setChatDocId(null);
      // Reset to welcome message when user logs out
      setMessages([
        {
          id: "welcome",
          role: "model",
          message: "Hello! I am your SDB Bank AI Assistant. I have read the complete audited **SDB 2025 Annual Report**, including all **20 Notes to the Financial Statements**. \n\nFeel free to ask me anything about our financial performance, strategic pillars, agricultural cooperative networks, digital transformation, or board of directors. How can I assist you today?",
          timestamp: new Date()
        }
      ]);
      return;
    }

    async function loadLatestChat() {
      try {
        const { data, error } = await supabase
          .from("chats")
          .select("*")
          .eq("user_id", user.uid)
          .order("updated_at", { ascending: false })
          .limit(1);

        if (error) {
          console.error("Error loading chat session from Supabase:", error);
          return;
        }

        if (data && data.length > 0) {
          const chatData = data[0];
          setChatDocId(chatData.id);
          if (chatData.messages && Array.isArray(chatData.messages)) {
            setMessages(chatData.messages.map((m: any, index: number) => ({
              id: m.id || `msg-${index}`,
              role: m.role,
              message: m.message,
              timestamp: m.timestamp ? new Date(m.timestamp) : new Date()
            })));
          }
        } else {
          // Create fresh session in Supabase
          const newId = `chat-${user.uid}-${Date.now()}`;
          setChatDocId(newId);
          const initialMsgs = [
            {
              id: "welcome",
              role: "model" as const,
              message: "Hello! I am your SDB Bank AI Assistant. I have read the complete audited **SDB 2025 Annual Report**, including all **20 Notes to the Financial Statements**. \n\nFeel free to ask me anything about our financial performance, strategic pillars, agricultural cooperative networks, digital transformation, or board of directors. How can I assist you today?",
              timestamp: new Date().toISOString()
            }
          ];
          const { error: insertErr } = await supabase.from("chats").insert([{
            id: newId,
            user_id: user.uid,
            title: "SDB Annual Report Assistant Chat",
            messages: initialMsgs,
            updated_at: new Date().toISOString()
          }]);
          if (insertErr) {
            handleSupabaseError(insertErr, OperationType.CREATE, "chats");
          }
        }
      } catch (e) {
        console.error("Error loading chat session from Supabase:", e);
      }
    }

    loadLatestChat();
  }, [user]);

  // Sync current chat state to Supabase
  const syncChatToDatabase = async (updatedMsgs: ChatMessage[]) => {
    if (!user) return;
    let currentId = chatDocId;
    if (!currentId) {
      currentId = `chat-${user.uid}-${Date.now()}`;
      setChatDocId(currentId);
    }

    try {
      const serializedMessages = updatedMsgs.map(m => ({
        id: m.id,
        role: m.role,
        message: m.message,
        timestamp: m.timestamp.toISOString()
      }));

      // Set elegant brief title based on first query
      const firstUserMsg = updatedMsgs.find(m => m.role === "user");
      const title = firstUserMsg ? (firstUserMsg.message.slice(0, 50) + "...") : "SDB Annual Report Assistant Chat";

      const { error } = await supabase.from("chats").upsert({
        id: currentId,
        user_id: user.uid,
        title,
        messages: serializedMessages,
        updated_at: new Date().toISOString()
      });
      if (error) {
        handleSupabaseError(error, OperationType.UPDATE, "chats");
      }
    } catch (e) {
      console.error("Error writing chat update to Supabase:", e);
    }
  };

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  // Handle message submission
  const handleSendMessage = async (textToSubmit: string) => {
    const trimmed = textToSubmit.trim();
    if (!trimmed || isLoading) return;

    setErrorText(null);
    setInputMessage("");

    // Append user message
    const userMsgId = `user-${Date.now()}`;
    const newUserMsg: ChatMessage = {
      id: userMsgId,
      role: "user",
      message: trimmed,
      timestamp: new Date()
    };
    
    const updatedMessages = [...messages, newUserMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    // Sync user message to Supabase
    syncChatToDatabase(updatedMessages);

    try {
      // Build history excluding initial message or any error messages
      const history = updatedMessages
        .filter(m => m.id !== "welcome")
        .map(m => ({
          role: m.role,
          message: m.message
        }));

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: trimmed,
          history
        })
      });

      let data: any = {};
      try {
        data = await response.json();
      } catch (jsonErr) {
        throw new Error("The SDB AI Assistant server-side endpoint is currently unavailable. This occurs when the application is hosted on static platform environments like Vercel without a Node backend container. To run the full-featured AI Assistant, please ensure you are in the active Node.js development container.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to communicate with SDB AI assistant.");
      }

      const botMsgId = `bot-${Date.now()}`;
      const finalMsgs: ChatMessage[] = [
        ...updatedMessages,
        {
          id: botMsgId,
          role: "model",
          message: data.reply,
          timestamp: new Date()
        }
      ];
      setMessages(finalMsgs);
      // Sync bot answer to Supabase
      syncChatToDatabase(finalMsgs);
    } catch (err: any) {
      console.error("Chat error:", err);
      setErrorText(err.message || "An error occurred. Please verify your internet connection or check if your Gemini API key is configured.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage(inputMessage);
    }
  };

  const clearChat = async () => {
    const cleared = [
      {
        id: "welcome",
        role: "model" as const,
        message: "Hello! I am your SDB Bank AI Assistant. I have read the complete audited **SDB 2025 Annual Report**, including all **20 Notes to the Financial Statements**. \n\nFeel free to ask me anything about our financial performance, strategic pillars, agricultural cooperative networks, digital transformation, or board of directors. How can I assist you today?",
        timestamp: new Date()
      }
    ];
    setMessages(cleared);
    setErrorText(null);
    if (user && chatDocId) {
      // Start a fresh document to clear context cleanly
      const newId = `chat-${user.uid}-${Date.now()}`;
      setChatDocId(newId);
      const { error } = await supabase.from("chats").insert([{
        id: newId,
        user_id: user.uid,
        title: "SDB Annual Report Assistant Chat",
        messages: cleared.map(m => ({ ...m, timestamp: m.timestamp.toISOString() })),
        updated_at: new Date().toISOString()
      }]);
      if (error) {
        handleSupabaseError(error, OperationType.CREATE, "chats");
      }
    }
  };

  // Helper to safely render simple markdown elements (bold, bullets, paragraphs, tables)
  const formatMarkdown = (text: string) => {
    // Escape and transform
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      let content = line;

      // Handle Bold formatting (**text**)
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(content)) !== null) {
        if (match.index > lastIndex) {
          parts.push(content.substring(lastIndex, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-bold text-sdb-purple">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      
      if (lastIndex < content.length) {
        parts.push(content.substring(lastIndex));
      }

      const renderedContent = parts.length > 0 ? parts : content;

      // Unordered List item
      if (line.trim().startsWith("- ") || line.trim().startsWith("* ")) {
        const textOnly = line.trim().substring(2);
        return (
          <li key={idx} className="ml-4 list-disc pl-1 py-0.5 text-xs md:text-sm text-slate-700 leading-relaxed text-left">
            {renderedContent}
          </li>
        );
      }

      // Ordered list item
      const numMatch = line.trim().match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        return (
          <li key={idx} className="ml-4 list-decimal pl-1 py-0.5 text-xs md:text-sm text-slate-700 leading-relaxed text-left">
            {renderedContent}
          </li>
        );
      }

      // Handle table separators or horizontal lines
      if (line.trim() === "---" || line.trim() === "___") {
        return <hr key={idx} className="my-2 border-slate-200" />;
      }

      // Default paragraph (or simple line break)
      return (
        <p key={idx} className="text-xs md:text-sm text-slate-700 leading-relaxed text-left min-h-[8px]">
          {renderedContent}
        </p>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[90vw] sm:w-[400px] h-[580px] bg-white rounded-3xl shadow-2xl border border-sdb-purple/10 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-sdb-purple p-4 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sdb-coral/15 rounded-full blur-2xl -mr-6 -mt-6 pointer-events-none" />
              <div className="flex items-center space-x-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 shadow-inner">
                  <Sparkles className="w-5 h-5 text-sdb-coral" />
                </div>
                <div className="text-left">
                  <h3 className="font-serif font-bold text-sm md:text-base tracking-tight flex items-center space-x-1.5">
                    <span>SDB Report AI Copilot</span>
                    <span className="w-2 h-2 rounded-full bg-sdb-green animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-white/75 font-mono">FY 2025 Audited Accounts</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 z-10">
                <button
                  onClick={clearChat}
                  title="Clear conversation"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                {user && (
                  <button
                    onClick={signOut}
                    title={`Sign out (${user.displayName || user.email})`}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4 text-sdb-coral" />
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sdb-cream/15 custom-scrollbar">
              
              {/* Google Sign In Call-To-Action */}
              {!user && (
                <div className="bg-gradient-to-r from-sdb-purple/5 to-sdb-coral/5 border border-sdb-purple/10 rounded-2xl p-4 text-xs text-left shadow-sm mb-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-sdb-coral/10 rounded-full blur-xl pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-2.5">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sdb-coral" />
                      <p className="font-serif font-bold text-slate-800">Durable Chat History</p>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Sign in with Google to securely save your chatbot discussions and access them anytime, even from different devices!
                    </p>
                    <button
                      onClick={signInWithGoogle}
                      className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 font-mono text-[10px] font-bold border border-slate-200 hover:border-slate-300 py-1.5 px-3 rounded-lg shadow-sm transition-all duration-150 cursor-pointer w-fit"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                        <path
                          fill="#EA4335"
                          d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582l3.51-3.51C17.764 1.055 15.027 0 12 0 7.33 0 3.313 2.682 1.345 6.582l3.92 3.183z"
                        />
                        <path
                          fill="#4285F4"
                          d="M23.49 12.275c0-.825-.075-1.616-.213-2.383H12v4.513h6.446a5.51 5.51 0 0 1-2.39 3.613l3.722 2.883c2.177-2.01 3.431-4.962 3.431-8.626z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.266 14.235L1.345 17.42A11.962 11.962 0 0 1 0 12c0-1.927.455-3.755 1.266-5.418l3.92 3.183c-.236.709-.366 1.463-.366 2.235 0 .8.144 1.573.412 2.235z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 24c3.24 0 5.97-1.077 7.962-2.925l-3.722-2.883c-1.033.693-2.356 1.104-4.24 1.104-3.255 0-6.015-2.2-7.002-5.163l-3.922 3.185C3.313 21.318 7.33 24 12 24z"
                        />
                      </svg>
                      <span>Sign In with Google</span>
                    </button>
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-start gap-2.5`}
                >
                  {msg.role === "model" && (
                    <div className="w-8 h-8 rounded-lg bg-sdb-purple/5 border border-sdb-purple/15 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Bot className="w-4 h-4 text-sdb-purple" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl p-3 shadow-sm ${
                      msg.role === "user"
                        ? "bg-sdb-purple text-white rounded-tr-none"
                        : "bg-white border border-sdb-purple/5 text-slate-800 rounded-tl-none space-y-1.5"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <p className="text-xs md:text-sm leading-relaxed text-right">{msg.message}</p>
                    ) : (
                      formatMarkdown(msg.message)
                    )}
                    
                    <span className={`text-[8px] block mt-1.5 ${msg.role === "user" ? "text-white/60 text-right" : "text-slate-400 text-left"}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-lg bg-sdb-coral/10 border border-sdb-coral/15 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <User className="w-4 h-4 text-sdb-coral" />
                    </div>
                  )}
                </div>
              ))}

              {/* Loader */}
              {isLoading && (
                <div className="flex justify-start items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sdb-purple/5 border border-sdb-purple/15 flex items-center justify-center shrink-0 shadow-sm">
                    <Loader2 className="w-4 h-4 text-sdb-purple animate-spin" />
                  </div>
                  <div className="bg-white border border-sdb-purple/5 rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[82%] text-left">
                    <div className="flex space-x-1.5 py-1 px-2 items-center">
                      <span className="w-1.5 h-1.5 bg-sdb-purple/60 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-sdb-purple/60 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-sdb-purple/60 rounded-full animate-bounce" />
                    </div>
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {errorText && (
                <div className="bg-red-50 border border-red-100 text-red-700 rounded-2xl p-3.5 text-xs text-left flex items-start space-x-2 shadow-sm">
                  <ShieldAlert className="w-4.5 h-4.5 text-red-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold">Error Connecting</p>
                    <p className="leading-relaxed">{errorText}</p>
                  </div>
                </div>
              )}

              {/* Suggestions (only show at start or when empty suggestions context) */}
              {messages.length === 1 && !isLoading && (
                <div className="pt-2 space-y-2">
                  <div className="flex items-center space-x-1.5 text-slate-400 pl-1">
                    <HelpCircle className="w-3.5 h-3.5 text-sdb-coral" />
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">Suggested Questions</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {STARTER_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(q)}
                        className="text-left bg-white hover:bg-sdb-purple/[0.03] active:bg-sdb-purple/5 border border-sdb-purple/5 hover:border-sdb-purple/15 text-xs text-slate-600 hover:text-sdb-purple p-2.5 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-between group cursor-pointer"
                      >
                        <span className="line-clamp-2 pr-2">{q}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-sdb-purple shrink-0 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white border-t border-sdb-purple/10 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about deposits, CEO, Note 12, PBT..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="flex-1 bg-slate-50 border border-sdb-purple/10 focus:border-sdb-purple/40 rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-slate-800 outline-none transition-colors disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim() || isLoading}
                className="w-9 h-9 rounded-xl bg-sdb-purple hover:bg-sdb-purple/95 text-white flex items-center justify-center transition-all disabled:opacity-45 disabled:hover:bg-sdb-purple shadow-md shadow-sdb-purple/10 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-sdb-purple text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-sdb-purple/95 transition-all duration-300 relative cursor-pointer group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-sdb-coral to-sdb-amber rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-sdb-coral rounded-full border-2 border-sdb-purple flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </span>
            </div>
          )}
        </div>
      </motion.button>

    </div>
  );
}
