/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Corporate Governance & Statutory Disclosures
 * Formulated in compliance with CBSL Direction No. 11 of 2007 and the Code of Best Practice on Corporate Governance
 */

export interface CommitteeReportSection {
  heading: string;
  paragraphs?: string[];
  listItems?: string[];
}

export interface CommitteeReport {
  id: string;
  name: string;
  officialTitle: string;
  acronym: string;
  pages: string;
  pdfPage: number;
  chairperson: string;
  members: { name: string; role: string; designation: string; appointedInfo?: string }[];
  meetingsHeld: number;
  mandate: string;
  activities2025: string[];
  attendance?: { name: string; attended: number; eligible: number }[];
  fullReportSections?: CommitteeReportSection[];
  signOff?: {
    signedBy: string;
    designation: string;
    date: string;
    location: string;
  };
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

export const BOARD_COMMITTEES_DETAILED: CommitteeReport[] = [
  {
    "id": "birmc",
    "name": "Board Integrated Risk Management Committee",
    "officialTitle": "REPORT OF THE BOARD INTEGRATED RISK MANAGEMENT COMMITTEE",
    "acronym": "BIRMC",
    "pages": "Pages 181–182",
    "pdfPage": 181,
    "chairperson": "Mr. Prasanna Premaratna (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Prasanna Premaratna",
        "role": "Chairman",
        "designation": "Independent Non-Executive Director (Appointed Chairman w.e.f. 10.12.2025)"
      },
      {
        "name": "Ms. Dinithi Ratnayake",
        "role": "Member",
        "designation": "Chairperson of the Board / Independent Non-Executive Director"
      },
      {
        "name": "Mr. Conrad Dias",
        "role": "Member",
        "designation": "Non-Independent Non-Executive Director"
      },
      {
        "name": "Mr. Chandana Dissanayake",
        "role": "Member",
        "designation": "Independent Non-Executive Director (Appointed Member 10.12.2025)"
      },
      {
        "name": "Mr. Dinuke Wijesinghe",
        "role": "Chief Risk Officer",
        "designation": "Key Management Personnel (By Invitation)"
      },
      {
        "name": "Mr. Kapila Ariyaratne",
        "role": "Executive Member",
        "designation": "Executive Director / CEO (By Invitation)"
      }
    ],
    "meetingsHeld": 5,
    "mandate": "Assisting the Board in fulfilling its oversight responsibilities concerning enterprise risk management, capital adequacy, market volatility, liquidity risk, credit quality, operational/cyber risk, and climate adaptation.",
    "activities2025": [
      "Reviewed and updated the Enterprise Risk Management Framework (ERMF) and Risk Appetite Statements for FY 2025/2026.",
      "Monitored credit concentration risks, non-performing loan trajectories, and Stage 2/Stage 3 ECL provisions under SLFRS 9.",
      "Evaluated stress testing scenarios regarding interest rate volatility, macroeconomic shocks, and agricultural climate risks.",
      "Oversaw capital adequacy compliance under CBSL Basel III guidelines, ensuring Total Capital Adequacy Ratio closed at 15.24%."
    ],
    "attendance": [
      {
        "name": "Mr. Prasanna Premaratna",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Ms. Dinithi Ratnayake",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Conrad Dias",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Chandana Dissanayake",
        "attended": 4,
        "eligible": 5
      },
      {
        "name": "Mr. Kapila Ariyaratne",
        "attended": 5,
        "eligible": 5
      }
    ],
    "fullReportSections": [
      {
        "heading": "Mandate & Fiduciary Purpose",
        "paragraphs": [
          "The Board Integrated Risk Management Committee (BIRMC) is mandated by the Board to oversee and strengthen the risk management framework of the Bank. Its responsibilities encompass assessing the adequacy and effectiveness of policies and procedures for managing credit, market, operational, liquidity, and strategic risks, ensuring compliance with Central Bank of Sri Lanka (CBSL) Direction No. 11 of 2007 on Corporate Governance for Licensed Specialised Banks.",
          "The Committee ensures that SDB Bank operates within a prudent risk appetite that balances sustainable growth with institutional resilience."
        ]
      },
      {
        "heading": "Composition of the BIRMC",
        "paragraphs": [
          "The membership of the Board Integrated Risk Management Committee comprised four (04) Non-Executive Directors, three of whom are Independent:",
          "Mr. Naveendra Sooriyarachchi ceased to hold office as a Director and accordingly as the Chairman of the Committee with effect from 12 September 2025 following his demise. Mr. Chandana Dissanayake served as the Chairman of the Committee w.e.f. 15.09.2025 and with the cessation of his Directorship as a Non-Independent, Non-Executive Director on 17.10.2025, he ceased to be the Committee Chairman. Mr. Prasanna Premaratna was appointed as Chairman of the Committee w.e.f. 10.12.2025.",
          "The Chief Risk Officer and Company Secretary function as Secretary/convenors of the Committee. The Executive Director / Chief Executive Officer and senior executive management attend meetings upon invitation."
        ],
        "listItems": [
          "Mr. Prasanna Premaratna - Chairman (BIRMC), Independent, Non-Executive Director (Appointed Chairman w.e.f. 10.12.2025)",
          "Ms. Dinithi Ratnayake - Chairperson of the Board, Independent, Non-Executive Director",
          "Mr. Conrad Dias - Non-Independent, Non-Executive Director",
          "Mr. Chandana Dissanayake - Independent, Non-Executive Director (Served as Chairman 15.09.2025–17.10.2025; reappointed Member 10.12.2025)"
        ]
      },
      {
        "heading": "Terms of Reference (TOR) of the Committee",
        "paragraphs": [
          "The Committee operated in accordance with the formal Terms of Reference approved by the Board of Directors, which are reviewed annually:"
        ],
        "listItems": [
          "Regularly assess all risk categories—including credit, market, liquidity, operational, strategic, compliance, and climate/ESG risks—across the Bank through appropriate risk indicators and qualitative evaluations.",
          "Review the adequacy and effectiveness of management-level committees such as the Executive Integrated Risk Management Committee (EIRMC) and Asset and Liability Management Committee (ALCO).",
          "Evaluate risk exposures against approved Risk Appetite Statements and ensure prompt corrective actions where limits or thresholds are exceeded.",
          "Maintain oversight over the compliance function, ensuring strict adherence to statutory, regulatory, and supervisory requirements.",
          "Oversee the development, implementation, and refinement of risk assessment methodologies, stress testing parameters, and Internal Capital Adequacy Assessment Process (ICAAP).",
          "Assess emerging risks such as cybersecurity, digital financial services risk (UPay wallet), and ESG/climate transition risks affecting smallholder agriculture."
        ]
      },
      {
        "heading": "Activities of the Committee During the Year",
        "paragraphs": [
          "During the financial year 2025, the BIRMC discharged its duties through regular evaluations and strategic reviews:"
        ],
        "listItems": [
          "Reviewed and recommended the updated Enterprise Risk Management Framework (ERMF) and Risk Appetite Statements for Board approval.",
          "Monitored credit concentration trajectories, asset quality movements, and Expected Credit Loss (ECL) provisions under SLFRS 9, ensuring prudent stage migration models.",
          "Reviewed comprehensive stress testing results covering credit default spikes, interest rate shifts, liquidity shocks, and extreme weather events (including Cyclone Ditwah impact).",
          "Evaluated capital adequacy under Basel III rules, noting that the Bank maintained a healthy Total Capital Adequacy Ratio (CAR) of 15.24% throughout 2025.",
          "Reviewed the Bank's liquidity profile, confirming that the Liquidity Coverage Ratio (LCR) of 151.86% and Net Stable Funding Ratio (NSFR) of 144.82% comfortably exceeded regulatory minima.",
          "Monitored IT and cybersecurity postures, penetration testing findings, and incident response readiness for digital banking channels.",
          "Assessed the business revival and rehabilitation framework for SME customers recovering from macroeconomic disruptions."
        ]
      },
      {
        "heading": "Committee Evaluation",
        "paragraphs": [
          "An annual self-evaluation of the Committee was conducted by the members in accordance with industry best corporate governance standards, confirming that the Committee effectively fulfilled its mandate."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Prasanna Premaratna",
      "designation": "Chairman, Board Integrated Risk Management Committee (BIRMC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
  },
  {
    "id": "bac",
    "name": "Board Audit Committee",
    "officialTitle": "REPORT OF THE BOARD AUDIT COMMITTEE",
    "acronym": "BAC",
    "pages": "Pages 183–186",
    "pdfPage": 183,
    "chairperson": "Mr. Chaaminda Kumarasiri (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Chaaminda Kumarasiri",
        "role": "Chairman",
        "designation": "FCA, FCMA, Independent Non-Executive Director"
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Thusantha Wijemanna",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Dhananjaya Dayananda",
        "role": "Chief Internal Auditor",
        "designation": "Secretary to BAC (By Invitation)"
      }
    ],
    "meetingsHeld": 12,
    "mandate": "Assisting the Board in reviewing the financial reporting process, internal control over financial reporting, internal audit function, external statutory audit engagement (Ernst & Young), and regulatory compliance.",
    "activities2025": [
      "Reviewed quarterly and annual financial statements with statutory external auditors Ernst & Young (EY) prior to Board approval.",
      "Assessed the effectiveness of internal control systems over financial reporting in compliance with CBSL Banking Act Direction No. 11 of 2007.",
      "Approved the Risk-Based Internal Audit Plan for 2025, monitoring audit coverage across all 94 branches and Head Office departments.",
      "Evaluated external auditor independence, objectivity, and statutory non-audit engagement fees.",
      "Maintained dedicated oversight over the bank's whistleblowing channel and investigation protocols."
    ],
    "attendance": [
      {
        "name": "Mr. Chaaminda Kumarasiri",
        "attended": 12,
        "eligible": 12
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "attended": 11,
        "eligible": 12
      },
      {
        "name": "Mr. Thusantha Wijemanna",
        "attended": 12,
        "eligible": 12
      }
    ],
    "fullReportSections": [
      {
        "heading": "Composition of the Board Audit Committee (BAC)",
        "paragraphs": [
          "The Board Audit Committee appointed by and responsible to the Board of Directors comprises three (03) Independent, Non-Executive Directors in full compliance with Central Bank Direction No. 11 of 2007 on Corporate Governance:",
          "The Chairman of the Committee, Mr. Chaaminda Kumarasiri, is a Fellow Member of the Institute of Chartered Accountants of Sri Lanka (FCA) and the Chartered Institute of Management Accountants UK (FCMA), possessing extensive financial acumen.",
          "The Chief Internal Auditor functions as the Secretary to the BAC. The Chief Executive Officer, Head of Finance, Chief Risk Officer, and external statutory auditors attend meetings by invitation."
        ],
        "listItems": [
          "Mr. Chaaminda Kumarasiri - Chairman (BAC), FCA, FCMA, Independent, Non-Executive Director",
          "Mr. Prasanna Premaratna - Member, Independent, Non-Executive Director",
          "Mr. Thusantha Wijemanna - Member, Independent, Non-Executive Director"
        ]
      },
      {
        "heading": "Terms of Reference & Regulatory Compliance",
        "paragraphs": [
          "The Committee operates under a detailed Terms of Reference approved by the Board of Directors, conforming to Section 3(8) of Banking Act Direction No. 11 of 2007, the Listing Rules of the Colombo Stock Exchange (CSE), and the Code of Best Practice on Corporate Governance. The BAC assists the Board in fulfilling oversight of financial reporting, internal controls, internal audit, and external audit."
        ]
      },
      {
        "heading": "Duties and Role of the Board Audit Committee",
        "paragraphs": [
          "The key duties and responsibilities discharged by the BAC include:"
        ],
        "listItems": [
          "Reviewing financial information of the Bank to ensure integrity and compliance with Sri Lanka Accounting Standards (SLFRS/LKAS) and regulatory requirements.",
          "Assessing the reasonableness and accuracy of critical accounting estimates, fair value determinations, and impairment provisions under SLFRS 9.",
          "Reviewing the effectiveness of internal control systems over financial reporting (ICOFR) and operational risk management.",
          "Assessing the independence, objectivity, and performance of the External Auditors (Ernst & Young), recommending their appointment and audit fees.",
          "Approving the Risk-Based Internal Audit Plan and monitoring execution across all 94 branches and Head Office units.",
          "Monitoring compliance with statutory enactments, tax regulations, and Central Bank supervisory directives.",
          "Reviewing the Whistleblowing Policy and tracking complaints through dedicated, confidential investigation procedures."
        ]
      },
      {
        "heading": "Financial Reporting & Internal Control Over Financial Reporting (ICOFR)",
        "paragraphs": [
          "The Committee reviewed the Interim Financial Statements and the Annual Financial Statements for FY 2025 prior to recommending them for Board approval. Discussions were held with executive management and external auditors regarding critical accounting judgments and disclosures.",
          "The Committee evaluated the Bank's internal controls over financial reporting as of 31st December 2025 and reviewed the Directors' Statement of Internal Control and EY's Independent Assurance Report thereon."
        ]
      },
      {
        "heading": "External Audit (Ernst & Young)",
        "paragraphs": [
          "The BAC held discussions with the External Auditors, Messrs Ernst & Young, regarding their audit strategy, scope, key audit matters (including loan impairment provisions and IT systems), and management letters.",
          "The BAC met with External Auditors without the presence of Executive Management on four (04) occasions during the year to ensure complete transparency and independence.",
          "The Committee reviewed all non-audit services provided by the external auditor in line with the Bank's Policy on Non-Audit Services, confirming that auditor independence was not compromised."
        ]
      },
      {
        "heading": "Internal Audit Function",
        "paragraphs": [
          "The Internal Audit Department operated under the Board-approved Internal Audit Charter. The BAC reviewed and monitored progress against the 2025 Risk-Based Audit Plan, audit ratings of branch hubs, and rectification of audit observations.",
          "The Committee conducted a private meeting with the Chief Internal Auditor without executive management presence to review operational independence and resource adequacy."
        ]
      },
      {
        "heading": "Whistleblowing & Committee Evaluation",
        "paragraphs": [
          "The Bank's Whistleblowing Policy provides a secure channel for staff and stakeholders to report unethical practices or irregularities. The BAC maintained continuous oversight over all complaints received, ensuring thorough, confidential investigations.",
          "The annual self-evaluation of the Committee was carried out by BAC members in line with established governance standards, confirming that the Committee operated with high effectiveness."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Chaaminda Kumarasiri",
      "designation": "Chairman, Board Audit Committee (BAC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
  },
  {
    "id": "bhrrc",
    "name": "Board Human Resources and Remuneration Committee",
    "officialTitle": "BOARD HUMAN RESOURCES AND REMUNERATION COMMITTEE",
    "acronym": "BHRRC",
    "pages": "Pages 187–188",
    "pdfPage": 187,
    "chairperson": "Mr. Thusantha Wijemanna (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Thusantha Wijemanna",
        "role": "Chairman",
        "designation": "Independent Non-Executive Director (Appointed Chairman 10.12.2025)"
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Sarath Nandasiri",
        "role": "Member",
        "designation": "Non-Independent Non-Executive Director"
      },
      {
        "name": "Mr. Chandana Dissanayake",
        "role": "Member",
        "designation": "Independent Non-Executive Director (Appointed Member 10.12.2025)"
      },
      {
        "name": "Mr. Aruna Jayasekera",
        "role": "Chief Human Resources Officer",
        "designation": "Secretary to BHRRC (By Invitation)"
      }
    ],
    "meetingsHeld": 6,
    "mandate": "Overseeing board-level remuneration policies, executive leadership compensation, performance management frameworks, succession planning, and industrial labor relations.",
    "activities2025": [
      "Evaluated performance appraisals and incentive structures for the CEO and Corporate Management.",
      "Reviewed the Bank's new competency-based Performance Management System (PMS) and structured Talent Pools.",
      "Monitored employee welfare reforms, medical insurance upgrades, and regional health camps.",
      "Approved corporate succession plans for mission-critical banking roles."
    ],
    "attendance": [
      {
        "name": "Mr. Thusantha Wijemanna",
        "attended": 6,
        "eligible": 6
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "attended": 6,
        "eligible": 6
      },
      {
        "name": "Mr. Sarath Nandasiri",
        "attended": 5,
        "eligible": 6
      },
      {
        "name": "Mr. Chandana Dissanayake",
        "attended": 6,
        "eligible": 6
      }
    ],
    "fullReportSections": [
      {
        "heading": "Composition of the BHRRC",
        "paragraphs": [
          "The Board Human Resources and Remuneration Committee (BHRRC) comprised four (04) Non-Executive Directors:",
          "Mr. Thusantha Wijemanna was appointed as the Chairman of the Committee w.e.f. 10.12.2025. Mr. Chandana Dissanayake was appointed as a member of the Committee w.e.f. 10.12.2025.",
          "The Chief Human Resources Officer functions as Secretary to the Committee. The CEO and relevant corporate management attend meetings by invitation."
        ],
        "listItems": [
          "Mr. Thusantha Wijemanna - Chairman (BHRRC), Independent, Non-Executive Director (Appointed Chairman 10.12.2025)",
          "Mr. Prasanna Premaratna - Member, Independent, Non-Executive Director",
          "Mr. Sarath Nandasiri - Member, Non-Independent, Non-Executive Director",
          "Mr. Chandana Dissanayake - Member, Independent, Non-Executive Director (Appointed Member 10.12.2025)"
        ]
      },
      {
        "heading": "Scope and Responsibilities",
        "paragraphs": [
          "The Committee operates under a comprehensive Terms of Reference approved by the Board:"
        ],
        "listItems": [
          "Recommend remuneration packages, annual increments, and performance incentives for the Chief Executive Officer and Key Management Personnel.",
          "Ensure that remuneration structures align with market benchmarks, statutory regulations, and long-term shareholder value.",
          "Guide the implementation of Human Resource strategies, competency frameworks, talent acquisition, and succession planning.",
          "Review and approve updates to the Bank's HR Policy Manual, grievance mechanisms, and disciplinary codes.",
          "Promote employee welfare, health, safety, and constructive industrial relations with employee associations."
        ]
      },
      {
        "heading": "Key HR Initiatives During 2025",
        "paragraphs": [
          "During 2025, the Committee guided the Bank through several transformative human capital initiatives:"
        ],
        "listItems": [
          "Rolled out the new competency-based Performance Management System (PMS) to align individual KPIs with strategic transformation goals.",
          "Oversaw talent development programs, delivering over 32,000 training hours across managerial, credit appraisal, and operational cadres.",
          "Reviewed succession plans for critical leadership roles within Corporate Management and Regional Leadership.",
          "Enhanced medical insurance benefits, welfare assistance, and well-being programs for branch and head office staff.",
          "Ensured full compliance with the Shop and Office Employees Act, statutory labor enactments, and industrial safety regulations."
        ]
      },
      {
        "heading": "Committee Evaluation",
        "paragraphs": [
          "An annual self-evaluation of the Committee's performance was completed by its members following industry governance standards, confirming that the BHRRC fulfilled its fiduciary and human capital governance mandate."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Thusantha Wijemanna",
      "designation": "Chairman, Board Human Resources and Remuneration Committee (BHRRC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
  },
  {
    "id": "bsngc",
    "name": "Board Selection, Nomination and Governance Committee",
    "officialTitle": "REPORT OF THE BOARD SELECTION NOMINATION AND GOVERNANCE COMMITTEE",
    "acronym": "BSN&GC",
    "pages": "Pages 189–190",
    "pdfPage": 189,
    "chairperson": "Mr. Thusantha Wijemanna (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Thusantha Wijemanna",
        "role": "Chairman",
        "designation": "Independent Non-Executive Director (Appointed Chairman 10.12.2025)"
      },
      {
        "name": "Ms. Dinithi Ratnayake",
        "role": "Member",
        "designation": "Chairperson of the Board / Independent Non-Executive Director"
      },
      {
        "name": "Mr. Chaaminda Kumarasiri",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Conrad Dias",
        "role": "Member",
        "designation": "Non-Independent Non-Executive Director"
      },
      {
        "name": "Ms. Amila Belpamulla",
        "role": "Company Secretary",
        "designation": "Secretary to Committee"
      }
    ],
    "meetingsHeld": 5,
    "mandate": "Recommending appointments to the Board and Board subcommittees, reviewing Director independence and fit-and-proper criteria, and overseeing annual Board evaluations.",
    "activities2025": [
      "Assessed Board composition, skills diversity, and gender representation.",
      "Evaluated annual declarations of independence submitted by Directors in terms of CBSL and CSE listing rules.",
      "Supervised the formal annual evaluation of Board, subcommittee, and Director self-performance.",
      "Monitored continuous training and corporate governance updates for Directors."
    ],
    "attendance": [
      {
        "name": "Mr. Thusantha Wijemanna",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Ms. Dinithi Ratnayake",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Chaaminda Kumarasiri",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Conrad Dias",
        "attended": 5,
        "eligible": 5
      }
    ],
    "fullReportSections": [
      {
        "heading": "Composition of the BSN&GC",
        "paragraphs": [
          "The Board Selection Nomination and Governance Committee (BSN&GC) comprised four (04) Non-Executive Directors, three of whom are Independent:",
          "Mr. Thusantha Wijemanna was appointed as Chairman of the Committee w.e.f. 10.12.2025.",
          "The Company Secretary functions as Secretary to the Committee."
        ],
        "listItems": [
          "Mr. Thusantha Wijemanna - Chairman (BSN&GC), Independent, Non-Executive Director (Appointed Chairman 10.12.2025)",
          "Ms. Dinithi Ratnayake - Member, Chairperson of the Board, Independent, Non-Executive Director",
          "Mr. Chaaminda Kumarasiri - Member, Independent, Non-Executive Director",
          "Mr. Conrad Dias - Member, Non-Independent, Non-Executive Director"
        ]
      },
      {
        "heading": "Primary Objectives & Responsibilities",
        "paragraphs": [
          "The primary objective of the BSN&GC is to ensure that the Board possesses an optimal balance of skills, experience, diversity, and independence, while upholding leading corporate governance standards:"
        ],
        "listItems": [
          "Review and assess Board and Board Subcommittee composition, identifying skill gaps and recommending appointments or re-elections.",
          "Determine and apply the fit-and-proper criteria for Directors and Key Management Personnel in accordance with CBSL guidelines.",
          "Assess the independence of Non-Executive Directors based on regulatory criteria and annual self-declarations.",
          "Oversee succession planning for the CEO, Corporate Management team, and critical leadership positions.",
          "Supervise the formal annual evaluation of the Board, Board Subcommittees, and individual Director performance.",
          "Review and recommend revisions to Corporate Governance policies, Board charters, and ethical frameworks."
        ]
      },
      {
        "heading": "Meetings & Key Activities in 2025",
        "paragraphs": [
          "The Committee met five (05) times during FY 2025 and carried out the following key activities:"
        ],
        "listItems": [
          "Evaluated the Board composition, recommending the re-appointment of retiring Directors under Article 88 of the Articles of Association.",
          "Assessed the fit-and-proper declarations of all serving Directors and newly appointed Key Management Personnel.",
          "Reviewed the Corporate Management organizational structure, job gradings, and executive talent confirmations.",
          "Updated the Board Succession Plan in alignment with the 2026–2029 Strategic Blueprint.",
          "Reviewed the Bank's Corporate Governance compliance checklist under CBSL Direction No. 11 of 2007."
        ]
      },
      {
        "heading": "Committee Evaluation",
        "paragraphs": [
          "The Committee conducted its annual self-evaluation in accordance with best governance practices, confirming that it operated with effectiveness and impartiality."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Thusantha Wijemanna",
      "designation": "Chairman, Board Selection Nomination and Governance Committee (BSN&GC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
  },
  {
    "id": "brptrc",
    "name": "Board Related Party Transactions Review Committee",
    "officialTitle": "REPORT OF THE BOARD RELATED PARTY TRANSACTIONS REVIEW COMMITTEE",
    "acronym": "BRPTRC",
    "pages": "Pages 191–192",
    "pdfPage": 191,
    "chairperson": "Mr. Thusantha Wijemanna (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Thusantha Wijemanna",
        "role": "Chairman",
        "designation": "Independent Non-Executive Director (Appointed Chairman 10.12.2025)"
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Chandana Dissanayake",
        "role": "Member",
        "designation": "Independent Non-Executive Director (Appointed Member 10.12.2025)"
      },
      {
        "name": "Mr. Sanjeeva Jayasinghe",
        "role": "Head of Finance",
        "designation": "By Invitation"
      },
      {
        "name": "Ms. Amila Belpamulla",
        "role": "Company Secretary",
        "designation": "Secretary to Committee"
      }
    ],
    "meetingsHeld": 4,
    "mandate": "Ensuring that all related party transactions are carried out at arm's length commercial terms and in full compliance with the Code of Best Practice and CSE Listing Rules.",
    "activities2025": [
      "Reviewed and pre-approved all recurrent and non-recurrent related party transactions.",
      "Monitored related party exposures against statutory thresholds specified by the Central Bank of Sri Lanka.",
      "Confirmed that all related party disclosures in Note 40 to the Financial Statements are accurate and complete.",
      "Ensured zero conflict of interest transactions took place without appropriate disclosures."
    ],
    "attendance": [
      {
        "name": "Mr. Thusantha Wijemanna",
        "attended": 4,
        "eligible": 4
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "attended": 4,
        "eligible": 4
      },
      {
        "name": "Mr. Chandana Dissanayake",
        "attended": 4,
        "eligible": 4
      }
    ],
    "fullReportSections": [
      {
        "heading": "Composition of the BRPTRC",
        "paragraphs": [
          "The Board Related Party Transactions Review Committee (BRPTRC) was constituted to uphold highest standards of integrity, transparency, and shareholder protection. The Committee comprised three (03) Independent, Non-Executive Directors:",
          "Mr. Thusantha Wijemanna was appointed as Chairman of the Committee w.e.f. 10.12.2025. Mr. Chandana Dissanayake was appointed as a member w.e.f. 10.12.2025.",
          "The Company Secretary functions as Secretary to the Committee. The Head of Finance, Chief Executive Officer, and Head of Compliance attend by invitation."
        ],
        "listItems": [
          "Mr. Thusantha Wijemanna - Chairman (BRPTRC), Independent, Non-Executive Director (Appointed Chairman 10.12.2025)",
          "Mr. Prasanna Premaratna - Member, Independent, Non-Executive Director",
          "Mr. Chandana Dissanayake - Member, Independent, Non-Executive Director (Appointed Member 10.12.2025)"
        ]
      },
      {
        "heading": "Terms of Reference & Objectives",
        "paragraphs": [
          "The mandate of the BRPTRC is defined by Section 9 of the Listing Rules of the Colombo Stock Exchange and LKAS 24 (Related Party Disclosures):"
        ],
        "listItems": [
          "Review all proposed Related Party Transactions (RPTs) to ensure they are undertaken at arm's length and on normal commercial terms.",
          "Ensure that transactions do not disadvantage the Bank, its depositors, or minority shareholders.",
          "Establish thresholds for recurrent and non-recurrent RPTs requiring Committee pre-approval or immediate market disclosures.",
          "Ensure full, transparent disclosure of all related party dealings in Note 40 of the Audited Financial Statements."
        ]
      },
      {
        "heading": "Summary of Activities in 2025",
        "paragraphs": [
          "The Committee held four (04) meetings during the year and discharged the following activities:"
        ],
        "listItems": [
          "Reviewed and approved proposed lending facilities, lease contracts, and commercial agreements with related entities.",
          "Conducted the annual review of existing credit facilities and short-term accommodations extended to related parties.",
          "Monitored related party exposure limits against statutory regulatory thresholds established by the CBSL.",
          "Reviewed and endorsed the comprehensive disclosures presented in Note 40 (Related Party Disclosures) to the Financial Statements.",
          "Confirmed that all transactions during the year were on normal commercial terms and no non-recurrent RPTs exceeded immediate disclosure thresholds."
        ]
      },
      {
        "heading": "Committee Evaluation",
        "paragraphs": [
          "The Committee completed its annual self-evaluation following standard governance guidelines, confirming diligent discharge of its statutory duties."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Thusantha Wijemanna",
      "designation": "Chairman, Board Related Party Transactions Review Committee (BRPTRC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
  },
  {
    "id": "bspc",
    "name": "Board Strategic Planning Committee",
    "officialTitle": "REPORT OF THE BOARD STRATEGIC PLANNING COMMITTEE",
    "acronym": "BSPC",
    "pages": "Pages 193–194",
    "pdfPage": 193,
    "chairperson": "Mr. Chandana Dissanayake (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Chandana Dissanayake",
        "role": "Chairman",
        "designation": "Independent Non-Executive Director (Appointed Chairman 10.12.2025)"
      },
      {
        "name": "Ms. Dinithi Ratnayake",
        "role": "Member",
        "designation": "Chairperson of the Board / Independent Non-Executive Director"
      },
      {
        "name": "Mr. Conrad Dias",
        "role": "Member",
        "designation": "Non-Independent Non-Executive Director"
      },
      {
        "name": "Mr. Romani De Silva",
        "role": "Member",
        "designation": "Non-Independent Non-Executive Director"
      },
      {
        "name": "Mr. Kapila Ariyaratne",
        "role": "Executive Member",
        "designation": "Executive Director / CEO (By Invitation)"
      },
      {
        "name": "Ms. Amila Belpamulla",
        "role": "Company Secretary",
        "designation": "Secretary to Committee"
      }
    ],
    "meetingsHeld": 5,
    "mandate": "Formulating and reviewing SDB bank's long-term strategic direction, digital roadmap, business portfolio optimization, and international technical partnerships.",
    "activities2025": [
      "Oversaw the preparation and board sign-off of the 2026–2029 Strategic Blueprint with Rabo Partnerships.",
      "Monitored the phased implementation of digital banking upgrades, UPay platform scaling, and LankaQR merchant networks.",
      "Evaluated agribusiness value chain financing strategies to reinforce agricultural food security.",
      "Reviewed capital expenditure prioritization across branch infrastructure and core banking hardware upgrades."
    ],
    "attendance": [
      {
        "name": "Mr. Chandana Dissanayake",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Ms. Dinithi Ratnayake",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Conrad Dias",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Romani De Silva",
        "attended": 5,
        "eligible": 5
      },
      {
        "name": "Mr. Kapila Ariyaratne",
        "attended": 5,
        "eligible": 5
      }
    ],
    "fullReportSections": [
      {
        "heading": "Composition of the BSPC",
        "paragraphs": [
          "The Board Strategic Planning Committee (BSPC) was established to support the Board in shaping, adapting, and monitoring the Bank's strategic direction. The Committee comprised four (04) Non-Executive Directors:",
          "Mr. Chandana Dissanayake served as Chairman of the Committee.",
          "The Company Secretary functions as Secretary. The CEO and Corporate Management attend meetings upon invitation."
        ],
        "listItems": [
          "Mr. Chandana Dissanayake - Chairman (BSPC), Independent, Non-Executive Director",
          "Ms. Dinithi Ratnayake - Member, Chairperson of the Board, Independent, Non-Executive Director",
          "Mr. Conrad Dias - Member, Non-Independent, Non-Executive Director",
          "Mr. Romani De Silva - Member, Non-Independent, Non-Executive Director"
        ]
      },
      {
        "heading": "Terms of Reference (TOR)",
        "paragraphs": [
          "The BSPC operates under formal Terms of Reference with key responsibilities including:"
        ],
        "listItems": [
          "Comprehensive evaluation of the Bank's performance against strategic goals outlined in the Corporate Plan.",
          "Review and recommendation of marketing, business development, and capital allocation strategies.",
          "Advising Corporate Management and the Board on market expansion, partnership opportunities, and digital platforms.",
          "Ensuring alignment between business growth, cooperative empowerment, and long-term sustainability goals."
        ]
      },
      {
        "heading": "Meetings & Strategic Realignment in 2025",
        "paragraphs": [
          "The Committee met five (05) times during 2025, directing key transformation initiatives:"
        ],
        "listItems": [
          "Formulated the 2026–2029 Strategic Blueprint in collaboration with Rabo Partnerships, focusing on MSME and agribusiness ecosystems.",
          "Guided the integration of the Sustainability Standards and Certification Initiative (SSCI) into bank-wide operations.",
          "Monitored digital inclusion roadmaps, UPay mobile wallet advancements, and digital loan onboarding workflows.",
          "Reviewed the consolidation of dispersed departments into the Kirulapone Head Office to optimize operational synergies.",
          "Steered value chain financing strategies connecting smallholders with established corporate supply chains."
        ]
      },
      {
        "heading": "Committee Evaluation",
        "paragraphs": [
          "The annual self-evaluation of the Committee was conducted by BSPC members, confirming full compliance with governance practices."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Chandana Dissanayake",
      "designation": "Chairman, Board Strategic Planning Committee (BSPC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
  },
  {
    "id": "bcc",
    "name": "Board Credit Committee",
    "officialTitle": "REPORT OF THE BOARD CREDIT COMMITTEE",
    "acronym": "BCC",
    "pages": "Pages 195–196",
    "pdfPage": 195,
    "chairperson": "Mr. Chandana Dissanayake (Independent, Non-Executive Director)",
    "members": [
      {
        "name": "Mr. Chandana Dissanayake",
        "role": "Chairman",
        "designation": "Independent Non-Executive Director (Appointed Chairman w.e.f. 10.12.2025)"
      },
      {
        "name": "Mr. Romani De Silva",
        "role": "Member",
        "designation": "Non-Independent Non-Executive Director"
      },
      {
        "name": "Mr. Thusantha Wijemanna",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "role": "Member",
        "designation": "Independent Non-Executive Director"
      },
      {
        "name": "Mr. Anura Yapa",
        "role": "Chief Credit Officer",
        "designation": "Secretary to BCC (By Invitation)"
      },
      {
        "name": "Mr. Kapila Ariyaratne",
        "role": "Executive Member",
        "designation": "Executive Director / CEO (By Invitation)"
      }
    ],
    "meetingsHeld": 9,
    "mandate": "Reviewing and evaluating credit proposals exceeding management delegated lending limits, monitoring credit quality, and formulating credit policy guidelines.",
    "activities2025": [
      "Reviewed and sanctioned credit proposals exceeding executive management limits in accordance with Board credit policy.",
      "Monitored credit disbursements under the Asian Development Bank (ADB) tea smallholders credit line.",
      "Conducted quarterly sectoral credit concentration assessments and stress testing for SME loan books.",
      "Oversaw non-performing asset remediation, rehabilitation facilities, and collateral recovery actions."
    ],
    "attendance": [
      {
        "name": "Mr. Chandana Dissanayake",
        "attended": 9,
        "eligible": 9
      },
      {
        "name": "Mr. Romani De Silva",
        "attended": 9,
        "eligible": 9
      },
      {
        "name": "Mr. Thusantha Wijemanna",
        "attended": 9,
        "eligible": 9
      },
      {
        "name": "Mr. Prasanna Premaratna",
        "attended": 8,
        "eligible": 9
      },
      {
        "name": "Mr. Kapila Ariyaratne",
        "attended": 9,
        "eligible": 9
      }
    ],
    "fullReportSections": [
      {
        "heading": "Composition of the BCC",
        "paragraphs": [
          "Lending is the core income generation activity of SDB Bank, employing capital from shareholders and deposits from the public. The Board Credit Committee (BCC) is established to formulate credit and recovery policies and appraise major lending proposals:",
          "Mr. Naveendra Sooriyarachchi ceased to hold office as Director and Chairman of BCC on 12 September 2025 following his demise. Mr. Chandana Dissanayake served as Chairman w.e.f. 15.09.2025, and Mr. Romani De Silva served temporarily during Directorship transitions until Mr. Chandana Dissanayake was re-appointed Chairman w.e.f. 10.12.2025.",
          "The Company Secretary functions as Secretary to the BCC. The Executive Director / CEO and Chief Credit Officer attend meetings upon invitation."
        ],
        "listItems": [
          "Mr. Chandana Dissanayake - Chairman (BCC), Independent, Non-Executive Director (Appointed Chairman w.e.f. 10.12.2025)",
          "Mr. Romani De Silva - Member, Non-Independent, Non-Executive Director",
          "Mr. Thusantha Wijemanna - Member, Independent, Non-Executive Director",
          "Mr. Prasanna Premaratna - Member, Independent, Non-Executive Director"
        ]
      },
      {
        "heading": "Areas Under Purview & Mandate",
        "paragraphs": [
          "The Board Credit Committee is empowered to execute the following core responsibilities:"
        ],
        "listItems": [
          "Formulate and review Credit Policies, Underwriting Guidelines, and Recovery Policies for Board approval.",
          "Monitor credit growth and performance vis-a-vis annual budget targets and previous year benchmarks.",
          "Analytically appraise and sanction credit proposals exceeding management delegated lending limits.",
          "Monitor portfolio mix to ensure collateral diversification, term diversification, and balanced sectoral exposure.",
          "Ensure strict compliance with CBSL single borrower limits and statutory credit concentration thresholds.",
          "Evaluate concessions, interest relief, and full-and-final settlements for hardcore non-performing facilities.",
          "Oversee the integration of Environmental, Social, and Climate Risk screening into credit approval processes."
        ]
      },
      {
        "heading": "Committee Meetings & Key Activities in 2025",
        "paragraphs": [
          "The Committee met nine (09) times during FY 2025, executing thorough portfolio scrutiny and credit governance:"
        ],
        "listItems": [
          "Evaluated and approved high-value credit proposals in compliance with Board credit limits.",
          "Monitored the Bank's credit portfolio, reviewing disbursements against budget and strategic targets.",
          "Reviewed large exposures and sectoral concentrations to maintain compliance with CBSL risk limits.",
          "Monitored delinquent loan recoveries and monitored progress on restructured debt portfolios.",
          "Reviewed the Top 20 Watch List and Top 20 Non-Performing Loan (NPL) customers, providing strategic guidance on recoveries.",
          "Assessed the progress of Business Revival and Special Asset Management activities, approving rescheduling and concessions.",
          "Reviewed legal recovery policies and litigation actions initiated against delinquent borrowers."
        ]
      },
      {
        "heading": "Committee Evaluation",
        "paragraphs": [
          "The annual self-evaluation of the Committee was conducted by the BCC members, confirming diligent performance of its credit governance mandate."
        ]
      }
    ],
    "signOff": {
      "signedBy": "Mr. Chandana Dissanayake",
      "designation": "Chairman, Board Credit Committee (BCC)",
      "date": "4th May 2026",
      "location": "Colombo, Sri Lanka"
    }
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
