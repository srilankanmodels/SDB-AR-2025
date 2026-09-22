/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - About This Report
 * Addresses Point 07 (Source: Official Published Annual Report Page 5 & 10)
 */

import { motion } from "motion/react";
import { 
  BookOpen, CheckCircle2, ShieldCheck, Scale, Globe, FileText, 
  ExternalLink, Download, Layers, Calendar, Stamp
} from "lucide-react";

export default function AboutTheReport() {
  return (
    <section id="about-report-section" className="space-y-10 text-left">
      {/* Editorial Header */}
      <div className="border-b border-sdb-purple/10 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-sdb-coral uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-sdb-coral" />
            <span>Official Report Overview • Pages 5 & 10</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-sdb-purple tracking-tight">
            About This Report
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl text-sm md:text-base">
            SANASA Development Bank PLC presents its Integrated Annual Report for the financial year ended 31st December 2025, prepared under the International &lt;IR&gt; Framework and audited by Ernst & Young (EY).
          </p>
        </div>

        <a
          href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-sdb-purple text-white text-xs font-bold font-mono hover:bg-sdb-purple/90 transition-all cursor-pointer shadow-xs"
        >
          <span>View Page 5 in PDF</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Scope & Boundary Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-sdb-purple/10 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sdb-purple/10 text-sdb-purple flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-lg text-sdb-purple">Reporting Period & Cycle</h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            Covers the 12-month calendar year from 1st January 2025 to 31st December 2025. SDB bank adopts an annual reporting cycle for statutory and integrated disclosures.
          </p>
          <div className="pt-2 text-[11px] font-mono text-sdb-coral font-bold">
            FY 2025 &bull; 28th Annual Report
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-sdb-purple/10 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sdb-coral/10 text-sdb-coral flex items-center justify-center">
            <Globe className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-lg text-sdb-purple">Reporting Boundary</h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            Encompasses SANASA Development Bank PLC's Head Office operations at No. 12, Edmonton Road, Kirulapone, Colombo 06, and all 94 customer branches across Sri Lanka's 25 districts.
          </p>
          <div className="pt-2 text-[11px] font-mono text-sdb-coral font-bold">
            Island-wide &bull; 94 Branches
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-sdb-purple/10 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sdb-green/10 text-sdb-green flex items-center justify-center">
            <Stamp className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-bold text-lg text-sdb-purple">External Audit & Assurance</h4>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            Financial statements audited by Messrs Ernst & Young (EY), Chartered Accountants, who issued an unmodified (clean) independent auditor's report on 27 March 2026.
          </p>
          <div className="pt-2 text-[11px] font-mono text-emerald-600 font-bold">
            Audited by Ernst & Young (EY)
          </div>
        </div>
      </div>

      {/* Compliance & Standards Architecture */}
      <div className="bg-gradient-to-r from-white via-white to-[#FAF4EC] rounded-3xl p-6 md:p-8 border border-sdb-purple/15 shadow-sm space-y-6">
        <div>
          <span className="text-[10px] font-mono font-bold text-sdb-purple uppercase tracking-widest bg-sdb-purple/10 px-2.5 py-1 rounded-full">
            Statutory & Voluntary Frameworks
          </span>
          <h3 className="font-serif text-2xl font-bold text-sdb-purple mt-2">
            Reporting Standards & Regulatory Adherence
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {[
            {
              title: "International <IR> Framework",
              body: "Adopted from the International Integrated Reporting Council (IIRC) to explain how financial, manufactured, intellectual, human, social, and natural capitals create value."
            },
            {
              title: "Sri Lanka Accounting Standards (SLFRS/LKAS)",
              body: "Complies fully with standards formulated by CA Sri Lanka, particularly SLFRS 9 (Financial Instruments) and SLFRS 15 (Revenue from Contracts with Customers)."
            },
            {
              title: "Banking Act Direction No. 11 of 2007",
              body: "Mandatory corporate governance regulations issued by the Central Bank of Sri Lanka (CBSL) for licensed specialised banks."
            },
            {
              title: "Companies Act No. 07 of 2007",
              body: "Governs company administration, fiduciary director responsibilities, shareholder rights, and annual general meeting protocols."
            },
            {
              title: "Colombo Stock Exchange Listing Rules",
              body: "Compliance with Continuous Listing Rules Section 7.10 on Corporate Governance and Section 9 on Related Party Transactions."
            },
            {
              title: "Global Reporting Initiative (GRI)",
              body: "GRI Standards 2021 applied for ESG disclosures, social performance management (SPM), and environmental stewardship metrics."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 space-y-1.5 shadow-2xs">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <h5 className="font-serif font-bold text-sdb-purple text-xs sm:text-sm">{item.title}</h5>
              </div>
              <p className="text-slate-600 leading-relaxed font-sans">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Board Responsibility & Approval Statement */}
      <div className="bg-white border border-sdb-purple/15 rounded-3xl p-6 md:p-8 shadow-sm text-left space-y-4">
        <h4 className="font-serif font-bold text-xl text-sdb-purple">
          Board Responsibility for the Integrated Report
        </h4>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          The Board of Directors of SANASA Development Bank PLC acknowledges its responsibility for ensuring the integrity of this Integrated Annual Report 2025. In the opinion of the Board, the report addresses all material matters that have a bearing on the Bank's ability to create value over the short, medium, and long term, and fairly represents the integrated performance of the Bank.
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center text-xs font-mono text-slate-500">
          <div>
            <p className="font-bold text-sdb-purple font-sans">Ms. Dinithi Ratnayake &bull; Chairperson</p>
            <p className="font-bold text-sdb-purple font-sans">Mr. Kapila Ariyaratne &bull; Chief Executive Officer / Executive Director</p>
          </div>
          <p>Colombo, Sri Lanka &bull; 27 March 2026</p>
        </div>
      </div>
    </section>
  );
}
