import re

with open("src/components/GovernanceAndRisk.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update useEffect for tab switching
old_listener = """    const handleSetTab = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && ["governance", "committees", "board-affairs", "audit-reports", "risk"].includes(detail)) {
        setActiveTab(detail as MainTab);
      }
    };"""

new_listener = """    const handleSetTab = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && ["governance", "committees", "board-affairs", "audit-reports", "risk"].includes(detail)) {
        setActiveTab(detail as MainTab);
      } else if (detail && ["birmc", "bac", "bhrrc", "bsngc", "brptrc", "bspc", "bcc"].includes(detail)) {
        setActiveTab("committees");
        const idx = BOARD_COMMITTEES_DETAILED.findIndex(c => c.id === detail);
        if (idx >= 0) setSelectedCommitteeIndex(idx);
      }
    };"""

content = content.replace(old_listener, new_listener)

# 2. Update the left selector buttons and right detailed panel for committees
old_committee_section = """              <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                    Points 19–25, 32 & 34 • All 7 Board Subcommittees
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2 flex items-center gap-2">
                    <Users className="w-6 h-6 text-sdb-purple" />
                    <span>Board Subcommittees & Reports</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a subcommittee below to inspect its full charter, director compositions with individual names, 2025 activities, and attendance records.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Selector List */}
                  <div className="lg:col-span-4 flex flex-col gap-2">
                    {BOARD_COMMITTEES_DETAILED.map((comm, idx) => (
                      <button
                        key={comm.id}
                        onClick={() => setSelectedCommitteeIndex(idx)}
                        className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          selectedCommitteeIndex === idx
                            ? "bg-sdb-purple text-white border-sdb-purple shadow-md"
                            : "bg-slate-50 border-slate-100 hover:bg-slate-100 text-sdb-purple"
                        }`}
                      >
                        <div className="space-y-0.5 pr-2">
                          <span className="text-[10px] font-mono tracking-wider opacity-80 font-bold uppercase">
                            {comm.acronym} • {comm.meetingsHeld} Meetings
                          </span>
                          <h4 className="font-serif font-bold text-sm leading-tight">
                            {comm.name}
                          </h4>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedCommitteeIndex === idx ? "translate-x-1" : ""}`} />
                      </button>
                    ))}
                  </div>

                  {/* Right Detailed Report */}
                  <div className="lg:col-span-8 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-sdb-purple/10 text-sdb-purple font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          {activeCommittee.acronym}
                        </span>
                        <span className="bg-sdb-coral/10 text-sdb-coral font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          Chair: {activeCommittee.chairperson}
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          {activeCommittee.meetingsHeld} Meetings in FY 2025
                        </span>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-sdb-purple">
                        {activeCommittee.name}
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 italic">
                        Mandate: {activeCommittee.mandate}
                      </p>
                    </div>

                    {/* Committee Members with Individual Names (Addressing Points 19, 21, 23) */}
                    <div className="space-y-2">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider">
                        Committee Composition (Names of Directors)
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeCommittee.members.map((m, mIdx) => (
                          <div key={mIdx} className="bg-white p-3 rounded-xl border border-slate-200/70 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-sdb-purple">{m.name}</span>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                                m.role.includes("Chairman") || m.role.includes("Chairperson")
                                  ? "bg-sdb-coral/10 text-sdb-coral"
                                  : "bg-slate-100 text-slate-700"
                              }`}>
                                {m.role}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 mt-1">{m.designation}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Activities 2025 */}
                    <div className="space-y-2">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider">
                        Key Activities & Statutory Disclosures 2025
                      </h5>
                      <ul className="space-y-2">
                        {activeCommittee.activities2025.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed bg-white/70 p-2.5 rounded-lg border border-slate-100">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Attendance Table (Points 32 & 34) */}
                    {activeCommittee.attendance && (
                      <div className="space-y-2 pt-2 border-t border-slate-200/70">
                        <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider flex items-center justify-between">
                          <span>Meeting Attendance Records (Point 32 & 34)</span>
                          <span className="text-xs font-mono font-normal text-slate-500">
                            Eligible vs Attended
                          </span>
                        </h5>
                        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200/80">
                          <table className="w-full text-left text-xs font-mono">
                            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                              <tr>
                                <th className="py-2.5 px-4 font-bold">Director Name</th>
                                <th className="py-2.5 px-4 text-center font-bold">Eligible</th>
                                <th className="py-2.5 px-4 text-center font-bold">Attended</th>
                                <th className="py-2.5 px-4 text-right font-bold">Attendance %</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {activeCommittee.attendance.map((att, attIdx) => {
                                const pct = Math.round((att.attended / att.eligible) * 100);
                                return (
                                  <tr key={attIdx} className="hover:bg-slate-50">
                                    <td className="py-2 px-4 font-sans font-semibold text-sdb-purple">{att.name}</td>
                                    <td className="py-2 px-4 text-center text-slate-600">{att.eligible}</td>
                                    <td className="py-2 px-4 text-center font-bold text-sdb-purple">{att.attended}</td>
                                    <td className="py-2 px-4 text-right font-bold text-emerald-600">{pct}%</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>"""

new_committee_section = """              <div className="bg-white border border-sdb-purple/10 rounded-3xl p-6 md:p-8 shadow-sm">
                <div className="border-b border-slate-100 pb-4 mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-sdb-coral uppercase tracking-widest bg-sdb-coral/10 px-2.5 py-1 rounded-full">
                      Annual Report Pages 181–196 • Statutory Board Oversight
                    </span>
                    <span className="text-[10px] font-mono font-bold text-sdb-purple uppercase tracking-widest bg-sdb-purple/10 px-2.5 py-1 rounded-full">
                      All 7 Board Committee Reports
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-sdb-purple mt-2 flex items-center gap-2">
                    <Users className="w-6 h-6 text-sdb-purple" />
                    <span>Board Committee Reports</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct access to all seven statutory Board Committee Reports published in the SDB Bank Annual Report 2025.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Selector List */}
                  <div className="lg:col-span-4 flex flex-col gap-2.5">
                    {BOARD_COMMITTEES_DETAILED.map((comm, idx) => (
                      <button
                        key={comm.id}
                        onClick={() => setSelectedCommitteeIndex(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                          selectedCommitteeIndex === idx
                            ? "bg-sdb-purple text-white border-sdb-purple shadow-md"
                            : "bg-slate-50 border-slate-200/70 hover:bg-slate-100/80 text-sdb-purple"
                        }`}
                      >
                        <div className="space-y-1 pr-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-mono tracking-wider font-bold uppercase px-2 py-0.5 rounded ${
                              selectedCommitteeIndex === idx ? "bg-white/20 text-white" : "bg-sdb-purple/10 text-sdb-purple"
                            }`}>
                              {comm.acronym}
                            </span>
                            <span className={`text-[10px] font-mono font-bold ${
                              selectedCommitteeIndex === idx ? "text-amber-300" : "text-sdb-coral"
                            }`}>
                              {comm.pages}
                            </span>
                          </div>
                          <h4 className="font-serif font-bold text-xs sm:text-sm leading-snug">
                            {comm.officialTitle || comm.name}
                          </h4>
                          <p className={`text-[11px] font-sans ${selectedCommitteeIndex === idx ? "text-white/80" : "text-slate-500"}`}>
                            {comm.meetingsHeld} Meetings • {comm.chairperson.split("(")[0].trim()}
                          </p>
                        </div>
                        <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${selectedCommitteeIndex === idx ? "translate-x-1" : ""}`} />
                      </button>
                    ))}
                  </div>

                  {/* Right Detailed Report */}
                  <div className="lg:col-span-8 bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 md:p-8 space-y-6">
                    {/* Official Report Header Banner with PDF Link */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-sdb-purple/10 via-sdb-purple/5 to-white border border-sdb-purple/20 p-4 rounded-2xl">
                      <div className="flex items-center space-x-2.5">
                        <FileText className="w-5 h-5 text-sdb-purple shrink-0" />
                        <div className="text-left">
                          <h5 className="font-serif font-bold text-sm text-sdb-purple">Official Audited Committee Report</h5>
                          <p className="text-xs text-slate-500 font-mono">{activeCommittee.pages} of Published Annual Report</p>
                        </div>
                      </div>
                      <a
                        href={`https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=${activeCommittee.pdfPage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 bg-sdb-purple hover:bg-sdb-purple-dark text-white px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-sm shrink-0"
                      >
                        <span>Read in Official PDF ({activeCommittee.pages})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    {/* Committee Title & Meta Badges */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-sdb-purple/10 text-sdb-purple font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          {activeCommittee.acronym}
                        </span>
                        <span className="bg-sdb-coral/10 text-sdb-coral font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          Chair: {activeCommittee.chairperson}
                        </span>
                        <span className="bg-emerald-50 text-emerald-700 font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                          {activeCommittee.meetingsHeld} Meetings in FY 2025
                        </span>
                      </div>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-sdb-purple tracking-tight leading-snug">
                        {activeCommittee.officialTitle || activeCommittee.name}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed italic bg-white p-3.5 rounded-xl border border-slate-200/60">
                        <strong>Mandate:</strong> {activeCommittee.mandate}
                      </p>
                    </div>

                    {/* Committee Members Composition */}
                    <div className="space-y-2.5">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider">
                        Committee Composition & Directorship Status
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeCommittee.members.map((m, mIdx) => (
                          <div key={mIdx} className="bg-white p-3.5 rounded-xl border border-slate-200/70 flex flex-col justify-between">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-sdb-purple">{m.name}</span>
                              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                                m.role.includes("Chairman") || m.role.includes("Chairperson")
                                  ? "bg-sdb-coral/10 text-sdb-coral"
                                  : "bg-slate-100 text-slate-700"
                              }`}>
                                {m.role}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500 mt-1">{m.designation}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Activities 2025 */}
                    <div className="space-y-2.5">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider">
                        Key Activities & Statutory Disclosures 2025
                      </h5>
                      <ul className="space-y-2">
                        {activeCommittee.activities2025.map((act, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Attendance Table */}
                    {activeCommittee.attendance && (
                      <div className="space-y-2.5 pt-2 border-t border-slate-200/70">
                        <h5 className="font-serif font-bold text-sm text-sdb-purple uppercase tracking-wider flex items-center justify-between">
                          <span>Meeting Attendance Records (FY 2025)</span>
                          <span className="text-xs font-mono font-normal text-slate-500">
                            Eligible vs Attended
                          </span>
                        </h5>
                        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200/80">
                          <table className="w-full text-left text-xs font-mono">
                            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
                              <tr>
                                <th className="py-2.5 px-4 font-bold">Director Name</th>
                                <th className="py-2.5 px-4 text-center font-bold">Eligible</th>
                                <th className="py-2.5 px-4 text-center font-bold">Attended</th>
                                <th className="py-2.5 px-4 text-right font-bold">Attendance %</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {activeCommittee.attendance.map((att, attIdx) => {
                                const pct = Math.round((att.attended / att.eligible) * 100);
                                return (
                                  <tr key={attIdx} className="hover:bg-slate-50">
                                    <td className="py-2 px-4 font-sans font-semibold text-sdb-purple">{att.name}</td>
                                    <td className="py-2 px-4 text-center text-slate-600">{att.eligible}</td>
                                    <td className="py-2 px-4 text-center font-bold text-sdb-purple">{att.attended}</td>
                                    <td className="py-2 px-4 text-right font-bold text-emerald-600">{pct}%</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Full Audited Committee Report Narrative Sections */}
                    {activeCommittee.fullReportSections && activeCommittee.fullReportSections.length > 0 && (
                      <div className="space-y-6 pt-4 border-t border-slate-200">
                        <div className="border-b border-slate-200/80 pb-2">
                          <h5 className="font-serif font-bold text-base text-sdb-purple uppercase tracking-wider flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-sdb-purple" />
                            <span>Full Audited Committee Report Narrative</span>
                          </h5>
                          <p className="text-xs text-slate-500 font-mono mt-0.5">
                            Comprehensive disclosure as published across {activeCommittee.pages} of the Integrated Annual Report
                          </p>
                        </div>
                        <div className="space-y-4">
                          {activeCommittee.fullReportSections.map((sec, sIdx) => (
                            <div key={sIdx} className="bg-white p-5 rounded-2xl border border-slate-200/70 space-y-2.5 text-left shadow-xs">
                              <h6 className="font-serif font-bold text-sm text-sdb-purple border-b border-slate-100 pb-2">
                                {sec.heading}
                              </h6>
                              {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="text-xs md:text-sm text-slate-700 leading-relaxed">
                                  {p}
                                </p>
                              ))}
                              {sec.listItems && sec.listItems.length > 0 && (
                                <ul className="space-y-2 pt-1">
                                  {sec.listItems.map((li, lIdx) => (
                                    <li key={lIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 leading-relaxed bg-slate-50/60 p-2.5 rounded-lg border border-slate-100">
                                      <span className="w-1.5 h-1.5 rounded-full bg-sdb-purple/60 shrink-0 mt-1.5" />
                                      <span>{li}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Formal Chairman Sign-Off */}
                    {activeCommittee.signOff && (
                      <div className="bg-gradient-to-r from-sdb-purple/10 via-sdb-purple/5 to-white p-6 rounded-2xl border border-sdb-purple/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-0.5">
                          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                            For and on behalf of the Committee
                          </p>
                          <p className="font-serif font-bold text-base text-sdb-purple">
                            {activeCommittee.signOff.signedBy}
                          </p>
                          <p className="text-xs text-slate-600 font-sans">
                            {activeCommittee.signOff.designation}
                          </p>
                        </div>
                        <div className="text-left sm:text-right font-mono text-xs text-slate-500">
                          <p className="font-bold text-slate-700">{activeCommittee.signOff.date}</p>
                          <p>{activeCommittee.signOff.location}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>"""

content = content.replace(old_committee_section, new_committee_section)

with open("src/components/GovernanceAndRisk.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated src/components/GovernanceAndRisk.tsx!")
