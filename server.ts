import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

import { 
  INCOME_STATEMENT_ROWS, BALANCE_SHEET_ROWS, CASH_FLOW_ROWS, CHANGES_IN_EQUITY_ROWS, NOTES_TO_FINANCIALS 
} from "./src/data/financialsAndNotes";
import { 
  BOARD_MEMBERS, FINANCIAL_TRENDS, TIMELINE_MILESTONES 
} from "./src/data/reportData";

// Format context dynamically for Gemini to provide 100% accurate responses
function getReportContext(): string {
  let ctx = "=== SDB BANK (SANASA DEVELOPMENT BANK PLC) ANNUAL REPORT 2025 CONTEXT ===\n\n";
  
  ctx += "--- TIMELINE & MILESTONES ---\n";
  TIMELINE_MILESTONES.forEach(m => {
    ctx += `- Year ${m.year}: ${m.title} - ${m.description}\n`;
  });
  ctx += "\n";
  
  ctx += "--- FINANCIAL TRENDS (2021-2025) ---\n";
  ctx += "Year | Net Advances (LKR Mn) | Deposits (LKR Mn) | Total Assets (LKR Mn) | Total Equity (LKR Mn) | Net Interest Income (LKR Mn) | Profit After Tax (LKR Mn)\n";
  FINANCIAL_TRENDS.forEach(t => {
    ctx += `${t.year} | ${t.netAdvances} | ${t.deposits} | ${t.totalAssets} | ${t.totalEquity} | ${t.netInterestIncome} | ${t.profitAfterTax}\n`;
  });
  ctx += "\n";
  
  ctx += "--- BOARD OF DIRECTORS ---\n";
  BOARD_MEMBERS.forEach(b => {
    ctx += `- Name: ${b.name} (${b.designation}). Appointed: ${b.appointed}. Bio: ${b.bio}\n`;
  });
  ctx += "\n";
  
  ctx += "--- INCOME STATEMENT (Profit or Loss) (Values in LKR Millions) ---\n";
  INCOME_STATEMENT_ROWS.forEach(r => {
    if (r.isHeader && r["2025"] === 0) {
      ctx += `[Section Header] ${r.item}\n`;
    } else {
      ctx += `${r.item}: 2025=${r["2025"]}, 2024=${r["2024"]}, 2023=${r["2023"]}, 2022=${r["2022"]}, 2021=${r["2021"]}\n`;
    }
  });
  ctx += "\n";
  
  ctx += "--- BALANCE SHEET (Financial Position) (Values in LKR Millions) ---\n";
  BALANCE_SHEET_ROWS.forEach(r => {
    if (r.isHeader && r["2025"] === 0) {
      ctx += `[Section Header] ${r.item}\n`;
    } else {
      ctx += `${r.item}: 2025=${r["2025"]}, 2024=${r["2024"]}, 2023=${r["2023"]}, 2022=${r["2022"]}, 2021=${r["2021"]}\n`;
    }
  });
  ctx += "\n";

  ctx += "--- STATEMENT OF CASH FLOWS (Values in LKR Millions) ---\n";
  CASH_FLOW_ROWS.forEach(r => {
    if (r.isHeader && r["2025"] === 0) {
      ctx += `[Section Header] ${r.item}\n`;
    } else {
      ctx += `${r.item}: 2025=${r["2025"]}, 2024=${r["2024"]}, 2023=${r["2023"]}, 2022=${r["2022"]}, 2021=${r["2021"]}\n`;
    }
  });
  ctx += "\n";

  ctx += "--- STATEMENT OF CHANGES IN EQUITY (Values in LKR Millions) ---\n";
  CHANGES_IN_EQUITY_ROWS.forEach(r => {
    ctx += `${r.item}: 2025=${r["2025"]}, 2024=${r["2024"]}, 2023=${r["2023"]}, 2022=${r["2022"]}, 2021=${r["2021"]}\n`;
  });
  ctx += "\n";

  ctx += "--- NOTES TO THE FINANCIAL STATEMENTS (1 to 20) ---\n";
  NOTES_TO_FINANCIALS.forEach(n => {
    ctx += `[${n.number}] Title: ${n.title}\n`;
    ctx += `Summary: ${n.summary}\n`;
    ctx += `Narrative Details: ${n.content}\n`;
    if (n.tableData && n.columns) {
      ctx += "Associated Table Data:\n";
      ctx += n.columns.map(c => c.header).join(" | ") + "\n";
      n.tableData.forEach(tr => {
        ctx += n.columns!.map(c => tr[c.key] ?? "").join(" | ") + "\n";
      });
    }
    ctx += "\n";
  });

  return ctx;
}

// Lazy initialization of Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required to run the chatbot. Please add it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Use increased limit to allow base64 uploads
  app.use(express.json({ limit: "20mb" }));

  // Create uploads directory if it does not exist
  const uploadsDir = path.join(process.cwd(), "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Serve uploaded images statically
  app.use("/uploads", express.static(uploadsDir));

  // Path to branding configuration
  const configPath = path.join(process.cwd(), "src", "data", "brandingConfig.json");

  // Helper to read configuration safely
  function readConfig() {
    try {
      if (fs.existsSync(configPath)) {
        const raw = fs.readFileSync(configPath, "utf-8");
        const parsed = JSON.parse(raw);
        // Ensure new upload fields exist
        return {
          logoImage: "",
          coverImage: "",
          chairpersonImage: "",
          ceoImage: "",
          boardImages: {},
          managementImages: {},
          ...parsed
        };
      }
    } catch (e) {
      console.error("Error reading branding config:", e);
    }
    // Fallback defaults
    return {
      logoTextSDB: "SDB",
      logoTextBank: "bank",
      logoColor: "#2B80C5",
      logoTextColorBank: "#4D4D4F",
      headOfficeImage: "/src/assets/images/sdb_head_office_1783367607149.jpg",
      cooperativeFarmingImage: "/src/assets/images/cooperative_farming_1783367621583.jpg",
      digitalBankingImage: "/src/assets/images/digital_banking_1783367635268.jpg",
      boardroomLeadershipImage: "/src/assets/images/boardroom_leadership_1783367647402.jpg",
      logoImage: "",
      coverImage: "",
      chairpersonImage: "",
      ceoImage: "",
      boardImages: {},
      managementImages: {}
    };
  }

  // GET /api/admin/config
  app.get("/api/admin/config", (req, res) => {
    res.json(readConfig());
  });

  // POST /api/admin/login
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "sdb2025") {
      return res.json({ success: true, token: "sdb_admin_auth_token_2025" });
    }
    return res.status(401).json({ error: "Invalid username or password. Please use 'admin' and 'sdb2025'." });
  });

  // POST /api/admin/config
  app.post("/api/admin/config", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== "Bearer sdb_admin_auth_token_2025") {
      return res.status(403).json({ error: "Unauthorized access. Admin credentials required." });
    }

    try {
      const newConfig = req.body;
      fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2), "utf-8");
      return res.json({ success: true, message: "Configuration updated successfully." });
    } catch (error: any) {
      console.error("Error writing branding config:", error);
      return res.status(500).json({ error: "Failed to write branding configuration." });
    }
  });

  // POST /api/admin/upload - Handle Base64 file uploads securely
  app.post("/api/admin/upload", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== "Bearer sdb_admin_auth_token_2025") {
      return res.status(403).json({ error: "Unauthorized access. Admin credentials required." });
    }

    const { filename, base64Data } = req.body;
    if (!filename || !base64Data) {
      return res.status(400).json({ error: "Filename and base64Data are required." });
    }

    try {
      // Strip metadata prefix if present (e.g. data:image/png;base64,)
      const matches = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
      let buffer: Buffer;
      const cleanFilename = filename.replace(/[^a-zA-Z0-9.\-_]/g, "_");

      if (matches && matches.length === 3) {
        buffer = Buffer.from(matches[2], "base64");
      } else {
        buffer = Buffer.from(base64Data, "base64");
      }

      // Add unique timestamp prefix to prevent cache/naming conflicts
      const uniqueFilename = `${Date.now()}_${cleanFilename}`;
      const filePath = path.join(uploadsDir, uniqueFilename);

      fs.writeFileSync(filePath, buffer);

      return res.json({
        success: true,
        url: `/uploads/${uniqueFilename}`
      });
    } catch (err: any) {
      console.error("Upload error:", err);
      return res.status(500).json({ error: "Failed to save uploaded file." });
    }
  });

  // API Route: Chatbot handler
  app.post("/api/chatbot", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Message is required." });
      }

      const ai = getGeminiClient();
      const reportContext = getReportContext();

      const systemInstruction = `You are the official SDB Bank AI Chatbot. SDB Bank (SANASA Development Bank PLC) is a licensed specialized bank in Sri Lanka.
Your task is to answer user questions about the SDB Bank Annual Report 2025 based on the official audited financial figures and qualitative disclosures provided in your context.

Guidelines:
1. Always be professional, helpful, accurate, and objective. Speak clearly.
2. Rely ONLY on the authentic data provided. Do not invent or make up figures. If a detail is not in the provided financial sheets or notes, state that the specific information is not disclosed in the 2025 Annual Report.
3. SDB's primary currency is Sri Lankan Rupees (LKR). Financial figures in the statements are expressed in LKR Millions (Mn), unless specified otherwise.
4. When citing figures, try to mention which statement or Note number it belongs to if applicable (e.g., Note 12 for Property, Plant, & Equipment, Note 14 for Deposits, etc.).
5. Keep answers well-structured, using markdown formatting such as tables, lists, and bold text to present numbers clearly.
6. If the user asks general greetings (e.g., "hi", "hello"), reply cordially and invite them to ask about SDB's 2025 Annual Report.

Here is SDB's 2025 Annual Report knowledge base:
${reportContext}`;

      // Convert history to the correct structure for Gemini generateContent
      // history is an array of { role: 'user' | 'model', message: string }
      const contents: any[] = [];
      if (history && Array.isArray(history)) {
        history.forEach((h: any) => {
          if (h.role && h.message) {
            contents.push({
              role: h.role,
              parts: [{ text: h.message }]
            });
          }
        });
      }

      // Push current message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.2, // Low temperature for factual precision
        }
      });

      const reply = response.text || "I apologize, but I could not formulate an answer. Could you please rephrase your question?";
      res.json({ reply });

    } catch (error: any) {
      console.error("Chatbot API error:", error);
      res.status(500).json({ 
        error: error.message || "An unexpected error occurred while communicating with the AI service." 
      });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] SDB Bank server running on http://localhost:${PORT} in ${process.env.NODE_ENV || "development"} mode`);
  });
}

startServer();
