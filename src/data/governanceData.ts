/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Corporate Governance & Statutory Disclosures
 * Formulated in compliance with CBSL Direction No. 11 of 2007 and the Code of Best Practice on Corporate Governance
 */

export interface CommitteeReport {
  id: string;
  name: string;
  acronym: string;
  chairperson: string;
  members: { name: string; role: string; designation: string }[];
  meetingsHeld: number;
  mandate: string;
  activities2025: string[];
  attendance?: { name: string; attended: number; eligible: number }[];
}

// Point 17: Chairperson's Message on Corporate Governance
export const CHAIRPERSON_GOVERNANCE_MESSAGE = {
  title: "Chairperson's Statement on Corporate Governance",
  author: "Ms. Dinithi Ratnayake",
  designation: "Chairperson, SDB bank",
  message: `Dear Shareholders,
On behalf of the Board of Directors, I am pleased to present the Corporate Governance Statement of SANASA Development Bank PLC for the year ended 31st December 2025. 

In a year marked by broader national economic recovery and increasing demand for specialized credit, your Board steadfastly championed highest standards of ethical conduct, transparency, and fiduciary accountability. Governance at SDB bank is not merely a statutory compliance exercise; it is the vital anchor that ensures the sustainable growth of our business while protecting the interests of our depositors, cooperative partners, shareholders, and employees.

During 2025, the Board prioritized the continued alignment of the Bank's risk management architecture with the Central Bank of Sri Lanka (CBSL) Direction No. 11 of 2007 (and subsequent amendments), the Listing Rules of the Colombo Stock Exchange, and the Code of Best Practice on Corporate Governance 2023. We reinforced our internal control systems, heightened cybersecurity vigilance across our digital channels (including SDB UPay), and successfully concluded Phase 1 of our multi-year strategic transformation.

As we look ahead to implementing our 2026–2029 Strategic Blueprint with Rabo Partnerships, the Board remains resolute in its commitment to steering SDB bank toward inclusive, sustainable development that creates enduring handcrafted value for Sri Lanka.`
};

// Points 19 to 25, 32, 34: Board Subcommittees with full director rosters, mandates & attendance
export const BOARD_COMMITTEES_DETAILED: CommitteeReport[] = [
  {
    id: "birmc",
    name: "Board Integrated Risk Management Committee",
    acronym: "BIRMC",
    chairperson: "Mr. Chandana Dissanayake (Independent, Non-Executive Director)",
    members: [
      { name: "Mr. Chandana Dissanayake", role: "Chairman", designation: "Independent Non-Executive Director" },
      { name: "Mr. Chaaminda Kumarasiri", role: "Member", designation: "Independent Non-Executive Director" },
      { name: "Mr. Sarath Nandasiri", role: "Member", designation: "Non-Independent Non-Executive Director" },
      { name: "Mr. Kapila Ariyaratne", role: "Executive Member", designation: "Executive Director / CEO" },
      { name: "Mr. Dinuke Wijesinghe", role: "Chief Risk Officer", designation: "Key Management Personnel (By Invitation)" }
    ],
    meetingsHeld: 6,
    mandate: "Assisting the Board in fulfilling its oversight responsibilities concerning enterprise risk management, capital adequacy, market volatility, liquidity risk, credit quality, and climate adaptation risk.",
    activities2025: [
      "Reviewed and revised the Bank's Enterprise Risk Management Framework (ERMF) and Risk Appetite Statements for FY 2025/2026.",
      "Monitored credit concentration risks, non-performing loan (NPL) trajectories, and Stage 2/Stage 3 Expected Credit Loss (ECL) provisions under SLFRS 9.",
      "Evaluated Stress Testing scenarios regarding interest rate volatility, macroeconomic shocks, and agricultural climate risks.",
      "Oversaw capital adequacy compliance under CBSL Basel III guidelines, ensuring Total Capital Adequacy Ratio closed at 15.24%."
    ],
    attendance: [
      { name: "Mr. Chandana Dissanayake", attended: 6, eligible: 6 },
      { name: "Mr. Chaaminda Kumarasiri", attended: 6, eligible: 6 },
      { name: "Mr. Sarath Nandasiri", attended: 5, eligible: 6 },
      { name: "Mr. Kapila Ariyaratne", attended: 6, eligible: 6 }
    ]
  },
  {
    id: "bac",
    name: "Board Audit Committee",
    acronym: "BAC",
    chairperson: "Mr. Chaaminda Kumarasiri (Independent, Non-Executive Director)",
    members: [
      { name: "Mr. Chaaminda Kumarasiri", role: "Chairman", designation: "FCA, FCMA, Independent Non-Executive Director" },
      { name: "Mr. Thusantha Wijemanna", role: "Member", designation: "Independent Non-Executive Director" },
      { name: "Mr. Prasanna Premaratna", role: "Member", designation: "Independent Non-Executive Director" },
      { name: "Mr. Dhananjaya Dayananda", role: "Chief Internal Auditor", designation: "Secretary to BAC (By Invitation)" }
    ],
    meetingsHeld: 8,
    mandate: "Assisting the Board in reviewing the financial reporting process, internal control over financial reporting, internal audit function, external statutory audit engagement, and regulatory compliance.",
    activities2025: [
      "Reviewed quarterly and annual financial statements with statutory external auditors Ernst & Young (EY) prior to Board approval.",
      "Assessed the effectiveness of internal control systems over financial reporting in compliance with CBSL Banking Act Direction No. 11 of 2007.",
      "Approved the Risk-Based Internal Audit Plan for 2025, monitoring audit coverage across all 94 branches and Head Office departments.",
      "Evaluated external auditor independence, objectivity, and statutory non-audit engagement fees.",
      "Maintained dedicated oversight over the bank's whistleblowing channel and investigation protocols."
    ],
    attendance: [
      { name: "Mr. Chaaminda Kumarasiri", attended: 8, eligible: 8 },
      { name: "Mr. Thusantha Wijemanna", attended: 8, eligible: 8 },
      { name: "Mr. Prasanna Premaratna", attended: 7, eligible: 8 }
    ]
  },
  {
    id: "bhrrc",
    name: "Board Human Resources and Remuneration Committee",
    acronym: "BHRRC",
    chairperson: "Mr. Thusantha Wijemanna (Independent, Non-Executive Director)",
    members: [
      { name: "Mr. Thusantha Wijemanna", role: "Chairman", designation: "Independent Non-Executive Director" },
      { name: "Ms. Dinithi Ratnayake", role: "Member", designation: "Chairperson / Independent Non-Executive Director" },
      { name: "Mr. Romani De Silva", role: "Member", designation: "Non-Independent Non-Executive Director" },
      { name: "Mr. Aruna Jayasekera", role: "Chief Human Resources Officer", designation: "Secretary to BHRRC (By Invitation)" }
    ],
    meetingsHeld: 4,
    mandate: "Overseeing board-level remuneration policies, executive leadership compensation, performance management frameworks, succession planning, and industrial labor relations.",
    activities2025: [
      "Evaluated performance appraisals and incentive structures for the CEO and Corporate Management.",
      "Reviewed the Bank's new competency-based Performance Management System (PMS) and structured Talent Pools.",
      "Monitored employee welfare reforms, medical insurance upgrades, and regional health camps.",
      "Approved corporate succession plans for mission-critical banking roles."
    ],
    attendance: [
      { name: "Mr. Thusantha Wijemanna", attended: 4, eligible: 4 },
      { name: "Ms. Dinithi Ratnayake", attended: 4, eligible: 4 },
      { name: "Mr. Romani De Silva", attended: 4, eligible: 4 }
    ]
  },
  {
    id: "bsngc",
    name: "Board Selection, Nomination and Governance Committee",
    acronym: "BSNGC",
    chairperson: "Ms. Dinithi Ratnayake (Chairperson / Independent Non-Executive Director)",
    members: [
      { name: "Ms. Dinithi Ratnayake", role: "Chairperson", designation: "Chairperson of the Board" },
      { name: "Mr. Thusantha Wijemanna", role: "Member", designation: "Independent Non-Executive Director" },
      { name: "Mr. B. R. A. Bandara", role: "Member", designation: "Non-Independent Non-Executive Director" }
    ],
    meetingsHeld: 4,
    mandate: "Recommending appointments to the Board and Board subcommittees, reviewing Director independence and fit-and-proper criteria, and overseeing annual Board evaluations.",
    activities2025: [
      "Assessed Board composition, skills diversity, and gender representation.",
      "Evaluated annual declarations of independence submitted by Directors in terms of CBSL and CSE listing rules.",
      "Supervised the formal annual evaluation of Board, subcommittee, and Director self-performance.",
      "Monitored continuous training and corporate governance updates for Directors."
    ],
    attendance: [
      { name: "Ms. Dinithi Ratnayake", attended: 4, eligible: 4 },
      { name: "Mr. Thusantha Wijemanna", attended: 4, eligible: 4 },
      { name: "Mr. B. R. A. Bandara", attended: 4, eligible: 4 }
    ]
  },
  {
    id: "brptrc",
    name: "Board Related Party Transactions Review Committee",
    acronym: "BRPTRC",
    chairperson: "Mr. Prasanna Premaratna (Independent, Non-Executive Director)",
    members: [
      { name: "Mr. Prasanna Premaratna", role: "Chairman", designation: "Independent Non-Executive Director" },
      { name: "Mr. Chaaminda Kumarasiri", role: "Member", designation: "Independent Non-Executive Director" },
      { name: "Mr. Sarath Nandasiri", role: "Member", designation: "Non-Independent Non-Executive Director" },
      { name: "Mr. Sanjeeva Jayasinghe", role: "Head of Finance", designation: "By Invitation" },
      { name: "Ms. Amila Belpamulla", role: "Company Secretary", designation: "Secretary to Committee" }
    ],
    meetingsHeld: 4,
    mandate: "Ensuring that all related party transactions are carried out at arm's length commercial terms and in full compliance with the Code of Best Practice and CSE Listing Rules.",
    activities2025: [
      "Reviewed and pre-approved all recurrent and non-recurrent related party transactions.",
      "Monitored related party exposures against statutory thresholds specified by the Central Bank of Sri Lanka.",
      "Confirmed that all related party disclosures in Note 40 to the Financial Statements are accurate and complete.",
      "Ensured zero conflict of interest transactions took place without appropriate disclosures."
    ],
    attendance: [
      { name: "Mr. Prasanna Premaratna", attended: 4, eligible: 4 },
      { name: "Mr. Chaaminda Kumarasiri", attended: 4, eligible: 4 },
      { name: "Mr. Sarath Nandasiri", attended: 4, eligible: 4 }
    ]
  },
  {
    id: "bspc",
    name: "Board Strategic Planning Committee",
    acronym: "BSPC",
    chairperson: "Mr. Conrad Dias (Non-Independent, Non-Executive Director)",
    members: [
      { name: "Mr. Conrad Dias", role: "Chairman", designation: "Fintech Leader & Non-Independent Director" },
      { name: "Ms. Dinithi Ratnayake", role: "Member", designation: "Chairperson of the Board" },
      { name: "Mr. Kapila Ariyaratne", role: "Member", designation: "Executive Director / CEO" },
      { name: "Mr. Romani De Silva", role: "Member", designation: "Non-Independent Non-Executive Director" },
      { name: "Mr. B. R. A. Bandara", role: "Member", designation: "Non-Independent Non-Executive Director" }
    ],
    meetingsHeld: 5,
    mandate: "Formulating and reviewing SDB bank's long-term strategic direction, digital roadmap, business portfolio optimization, and international technical partnerships.",
    activities2025: [
      "Oversaw the preparation and board sign-off of the 2026–2029 Strategic Blueprint with Rabo Partnerships.",
      "Monitored the phased implementation of digital banking upgrades, UPay platform scaling, and LankaQR merchant networks.",
      "Evaluated agribusiness value chain financing strategies to reinforce agricultural food security.",
      "Reviewed capital expenditure prioritization across branch infrastructure and core banking hardware upgrades."
    ],
    attendance: [
      { name: "Mr. Conrad Dias", attended: 5, eligible: 5 },
      { name: "Ms. Dinithi Ratnayake", attended: 5, eligible: 5 },
      { name: "Mr. Kapila Ariyaratne", attended: 5, eligible: 5 },
      { name: "Mr. Romani De Silva", attended: 4, eligible: 5 },
      { name: "Mr. B. R. A. Bandara", attended: 5, eligible: 5 }
    ]
  },
  {
    id: "bcc",
    name: "Board Credit Committee",
    acronym: "BCC",
    chairperson: "Mr. Prasanna Premaratna (Independent, Non-Executive Director)",
    members: [
      { name: "Mr. Prasanna Premaratna", role: "Chairman", designation: "Development Credit Specialist" },
      { name: "Mr. Chandana Dissanayake", role: "Member", designation: "Credit Risk Specialist" },
      { name: "Mr. Sarath Nandasiri", role: "Member", designation: "Cooperative Movement Leader" },
      { name: "Mr. Kapila Ariyaratne", role: "Member", designation: "Executive Director / CEO" },
      { name: "Mr. Anura Yapa", role: "Chief Credit Officer", designation: "Secretary to BCC (By Invitation)" }
    ],
    meetingsHeld: 10,
    mandate: "Reviewing and evaluating credit proposals exceeding management delegated lending limits, monitoring credit quality, and formulating credit policy guidelines.",
    activities2025: [
      "Reviewed and sanctioned credit proposals exceeding executive management limits in accordance with Board credit policy.",
      "Monitored credit disbursements under the Asian Development Bank (ADB) tea smallholders credit line.",
      "Conducted quarterly sectoral credit concentration assessments and stress testing for SME loan books.",
      "Oversaw non-performing asset remediation, rehabilitation facilities, and collateral recovery actions."
    ],
    attendance: [
      { name: "Mr. Prasanna Premaratna", attended: 10, eligible: 10 },
      { name: "Mr. Chandana Dissanayake", attended: 10, eligible: 10 },
      { name: "Mr. Sarath Nandasiri", attended: 9, eligible: 10 },
      { name: "Mr. Kapila Ariyaratne", attended: 10, eligible: 10 }
    ]
  }
];

// Point 26: Financial Calendar
export const FINANCIAL_CALENDAR = {
  fy2025: [
    { event: "First Quarter Financial Statements published", date: "15th May 2025" },
    { event: "Second Quarter Financial Statements published", date: "14th August 2025" },
    { event: "Third Quarter Financial Statements published", date: "14th November 2025" },
    { event: "Financial Year 2025 End", date: "31st December 2025" },
    { event: "Audited Financial Statements FY 2025 signed by Board", date: "26th February 2026" },
    { event: "29th Annual General Meeting (Notice)", date: "02nd May 2026" },
    { event: "29th Annual General Meeting at SANASA Campus", date: "27th May 2026" }
  ],
  fy2026_indicative: [
    { event: "1st Quarter Interim Financial Statements", date: "May 2026" },
    { event: "2nd Quarter Interim Financial Statements", date: "August 2026" },
    { event: "3rd Quarter Interim Financial Statements", date: "November 2026" },
    { event: "Financial Year 2026 Closure", date: "31st December 2026" }
  ]
};

// Points 27, 31, 33: Annual Report of the Board of Directors on the Affairs of the Bank
export const DIRECTORS_STATUTORY_REPORT = {
  title: "Annual Report of the Board of Directors on the Affairs of the Bank",
  governingLaw: "Presented under Section 168 of the Companies Act No. 07 of 2007 and CBSL Banking Act Directions",
  overview: "The Directors of SANASA Development Bank PLC have pleasure in submitting their Annual Report together with the Audited Financial Statements of the Bank for the year ended 31st December 2025.",
  sections: [
    {
      heading: "1. Principal Activities",
      content: "The principal activities of the Bank during the year continued to be commercial, retail, cooperative, micro, and SME banking, alongside pawning, leasing, and digital transaction services. There were no significant changes in the nature of activities during 2025."
    },
    {
      heading: "2. Financial Statements & Independent Auditor's Report",
      content: "The Financial Statements of the Bank for the year ended 31st December 2025, duly signed by the Chief Executive Officer, Head of Finance, and two Directors, together with the Independent Auditors' Report by Ernst & Young (EY), are incorporated in this report."
    },
    {
      heading: "3. Total Gross Income",
      content: "The gross income of the Bank for FY 2025 reached LKR 20,586 Million (2024: LKR 18,739 Million), representing an increase of 9.86% YoY."
    },
    {
      heading: "4. Profits and Appropriations",
      content: "Profit Before Tax (PBT) expanded to LKR 800.17 Million (+16.93% YoY) compared to LKR 684.32 Million in 2024. Profit After Tax (PAT) stood at LKR 405 Million."
    },
    {
      heading: "5. Dividends",
      content: "Having considered the ongoing enterprise transformation initiatives and capital conservation requirements under Basel III, the Board of Directors does not recommend a final dividend for FY 2025."
    },
    {
      heading: "6. Stated Capital & Reserves",
      content: "The Stated Capital of the Bank as at 31st December 2025 stood at LKR 10,816 Million represented by 160,698,832 ordinary voting shares. Total Stated Equity and Reserves reached LKR 14,804 Million."
    },
    {
      heading: "7. Board of Directors",
      content: "The Board of Directors of the Bank as at 31st December 2025 comprised: Ms. Dinithi Ratnayake (Chairperson), Mr. Kapila Ariyaratne (CEO), Mr. Chaaminda Kumarasiri, Mr. Prasanna Premaratna, Mr. B. R. A. Bandara, Mr. Thusantha Wijemanna, Mr. Sarath Nandasiri, Mr. Conrad Dias, Mr. Romani De Silva, and Mr. Chandana Dissanayake."
    },
    {
      heading: "8. Statutory Auditor: Ernst & Young (EY)",
      content: "The financial statements for the year ended 31st December 2025 were audited by Messrs Ernst & Young, Chartered Accountants. A resolution proposing their re-appointment and authorizing the Directors to determine their remuneration will be submitted at the 29th Annual General Meeting."
    }
  ]
};

// Point 28: Profits and Appropriations Table
export const PROFITS_AND_APPROPRIATIONS_TABLE = [
  { item: "Profit before Tax on Financial Services", y2025: 985, y2024: 852, change: "+15.61%" },
  { item: "Taxes on Financial Services (VAT & SSCL)", y2025: -185, y2024: -167, change: "+10.78%" },
  { item: "Profit Before Income Tax (PBT)", y2025: 800, y2024: 685, change: "+16.93%" },
  { item: "Income Tax Expense", y2025: -395, y2024: -275, change: "+43.64%" },
  { item: "Profit for the Year (PAT)", y2025: 405, y2024: 410, change: "-1.22%" },
  { item: "Other Comprehensive Income (Net of Tax)", y2025: -187, y2024: -68, change: "+175.00%" },
  { item: "Total Comprehensive Income for the Year", y2025: 218, y2024: 342, change: "-36.26%" },
  { item: "Transfer to Statutory Reserve Fund (5%)", y2025: -20, y2024: -21, change: "-4.76%" },
  { item: "Retained Earnings Balance Carried Forward", y2025: 2604, y2024: 2304, change: "+13.02%" }
];

// Point 37: AGM and Notice of Meeting
export const AGM_NOTICE_DATA = {
  title: "Notice of the 29th Annual General Meeting",
  meetingDate: "Wednesday, 27th May 2026",
  meetingTime: "10:00 AM",
  venue: "Main Auditorium, SANASA Campus, Paragammana, Hettimulla, Kegalle",
  agenda: [
    "To receive and consider the Audited Financial Statements of the Bank for the financial year ended 31st December 2025 and the Reports of the Auditors and of the Directors thereon.",
    "To re-elect Directors retiring by rotation in terms of Article 88 of the Articles of Association.",
    "To re-appoint Messrs Ernst & Young (EY), Chartered Accountants, as the Statutory External Auditors of the Bank for the ensuing year and authorize the Board of Directors to determine their remuneration.",
    "To authorize the Board of Directors to determine donations for community upliftment and cooperative welfare for the financial year 2026."
  ],
  notes: [
    "A member entitled to attend and vote at the above meeting is entitled to appoint a proxy to attend and vote on their behalf.",
    "A proxy need not be a member of the Bank.",
    "The completed Form of Proxy must be deposited at the Registered Office of the Bank, No. 12, Edmonton Road, Kirulapone, Colombo 06, not less than 48 hours before the time appointed for holding the meeting."
  ]
};
