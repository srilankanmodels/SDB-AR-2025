/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Statutory Disclosures & Independent Auditor's Report
 * Source: Official Published Annual Report 2025 (Pages 211-219)
 * Full Unabridged Text Disclosures (No Paraphrasing, No Prefacing)
 */

export interface StatutoryStatement {
  id: string;
  title: string;
  subtitle: string;
  sourcePage: string;
  signatories?: {
    name: string;
    designation: string;
    date: string;
    location: string;
  }[];
  paragraphs: string[];
  keyHighlights?: {
    heading: string;
    details: string;
  }[];
  sections?: {
    heading: string;
    paragraphs?: string[];
    listItems?: string[];
  }[];
}

// 1. Directors' Statement on Internal Control over Financial Reporting (Pages 211–212)
export const DIRECTORS_STATEMENT_INTERNAL_CONTROL: StatutoryStatement = {
  id: "internal-control",
  title: "Directors' Statement on Internal Control over Financial Reporting",
  subtitle: "In line with Section 9.2 (b) of the Banking Act Direction No. 05 of 2024 and Principle D.1.5 of the Code of Best Practice on Corporate Governance 2023",
  sourcePage: "Pages 211–212",
  signatories: [
    {
      name: "Ms. Dinithi Ratnayake",
      designation: "Chairperson",
      date: "27 February 2026",
      location: "Colombo, Sri Lanka"
    },
    {
      name: "Mr. Chaaminda Kumarasiri",
      designation: "Chairman - Board Audit Committee",
      date: "27 February 2026",
      location: "Colombo, Sri Lanka"
    },
    {
      name: "Mr. Kapila Ariyaratne",
      designation: "Executive Director / Chief Executive Officer",
      date: "27 February 2026",
      location: "Colombo, Sri Lanka"
    }
  ],
  keyHighlights: [
    {
      heading: "Regulatory Framework",
      details: "In line with Section 9.2 (b) of the Banking Act Direction No. 05 of 2024 and Principle D.1.5 of the Code of Best Practice on Corporate Governance 2023 issued by CA Sri Lanka."
    },
    {
      heading: "SLFRS 9 & ECL Controls",
      details: "Monitored implementation of SLFRS 9 Financial Instruments and CBSL Directives No. 13 of 2021 and No. 14 of 2021 on Classification, Recognition and Measurement."
    },
    {
      heading: "Board Confirmation",
      details: "The Board confirms that the financial reporting system of the Bank has been designed to provide reasonable assurance regarding the reliability of financial reporting."
    }
  ],
  paragraphs: [
    "RESPONSIBILITY",
    "In line with the Section 9.2 (b) of the Banking Act Direction No. 05 of 2024 and with principle D.1.5 of the Code of Best Practice on Corporate Governance 2023 issued by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka), the Board of Directors presents this report on Internal Control Over Financial Reporting as of 31st December 2025.",
    "The Board of Directors (\"Board\") is responsible for the adequacy and effectiveness of the internal control mechanism in place at SANASA Development Bank PLC (\"the Bank\").",
    "In considering such adequacy and effectiveness, the Board recognises that the business of Banking requires reward to be balanced with risk on a managed basis and as such the internal control systems are primarily designed with a view to highlighting any deviations from the limits and indicators which comprise the risk appetite of the Bank. In this light, the system of internal controls can only provide reasonable, but not absolute assurance, against material misstatements of financial information and records or against financial losses or frauds.",
    "The Board has established an ongoing process for identifying, evaluating and managing the significant risks faced by the bank and this process includes enhancing the system of internal controls over financial reporting as and when there are changes to the business environment or regulatory guidelines. The process is regularly reviewed by the Board and accords with the guidelines for Directors of Banks on the Directors' statement on Internal Control, issued by the Institute of Chartered Accountants of Sri Lanka. The Board has assessed the internal control over financial reporting considering the principles for the assessment of internal control system as given in that guideline.",
    "The Board is of the view that the System of Internal Controls over Financial Reporting in place is sound and adequate to provide reasonable assurance regarding the reliability",
    "of financial reporting and that the preparation of Financial Statements for external purposes is in accordance with relevant accounting principles and regulatory requirements.",
    "The Management assists the Board in the implementation of the policies and procedures on risk by designing and implementing suitable internal controls to mitigate risks faced by the Bank.",
    "KEY FEATURES OF THE PROCESS ADOPTED IN APPLYING AND REVIEWING THE DESIGN AND EFFECTIVENESS OF THE INTERNAL CONTROL SYSTEM OVER FINANCIAL REPORTING",
    "The key processes that have been established in reviewing the adequacy and integrity of the system of internal controls with respect to financial reporting include the following:",
    "• Various appointed committees are",
    "established by the Board to assist the Board in ensuring the effectiveness of the Bank's operations and that the Bank's operations are in accordance with the corporate objectives, strategies and annual budget as well as the policies and business directions that have been approved.",
    "• The Internal Audit Department of",
    "the Bank verifies compliance with policies and procedures and the effectiveness of the internal control systems on an ongoing basis through the application of Risk Based Audit Procedures. Audits are carried out on Head office functions Including Information Security functions, regional offices and branches in accordance with the annual Risk Based Audit Plan approved by the Board Audit Committee (BAC). Onsite audits, Process Audits and Thematic Audits are carried out to provide independent and objective reports. The frequency of which is determined by the level of risk assessed. Findings of the Internal Audit Department are submitted to the BAC for review at",
    "their periodic meetings. The BAC also review and updates on the scope and the adequacy of the internal audit function against the approved audit plan.",
    "• The BAC reviews internal control",
    "issues identified by the Internal Audit Department, the External Auditors, regulatory authorities, including Key Audit Matters (KAM) given by the External Auditors and evaluates the adequacy and effectiveness of risk management and internal control systems. The minutes of the BAC meetings are forwarded to the Board on a periodic basis. Further, details of the activities undertaken by the BAC of the Bank are set out in the Board Audit Committee Report (BAC).",
    "• The Board Integrated Risk",
    "Management Committee (BIRMC) was established to assist the Board to oversee the overall risk management of the principal areas of the Bank. The Executive Integrated Risk Management Committee (EIRMC) includes representation from all key business, operating and control units of the Bank to assist BIRMC to execute the assigned functions as per the ToR.",
    "• Operational committees have also",
    "been established with appropriate empowerment to ensure effective management and supervision of the Bank's core areas of business operations. These committees include the Assets and Liability Management Committee, Investment Committee and the Information Technology Steering Committee etc.",
    "• In assessing the internal control",
    "system over financial reporting, the process owners of the Bank collate all the procedures and controls to ensure that the Financial Statements of the Bank provide accurate information. These in turn were reviewed by the Internal Audit Department for suitability of the design and effectiveness on an ongoing basis, throughout the year.",
    "The BAC continuously monitored the implementation of the Sri Lanka Accounting Standards - SLFRS 9 \"Financial Instruments\" issued by The Institute of Chartered Accountants of Sri Lanka and CBSL Directives No. 13 of 2021 and No. 14 of 2021 on Classification, Recognition and Measurement of Credit Facilities & Other Financial Assets in Licensed Banks. To facilitate their review, the BAC considered reports from the Head of Finance and also reports from the External Auditors on the outcome of their review of the annual audit.",
    "Comments made by the External Auditors in connection with the Internal Control System Over Financial Reporting in previous years have been reviewed during the year and appropriate steps have been taken to rectify them. The recommendations made by the External Auditors during the year, in connection with the Internal Control System over Financial Reporting will be dealt within future.",
    "CONFIRMATION",
    "Based on the above processes, the Board confirms that the financial reporting system of the Bank has been designed to provide a reasonable assurance regarding the reliability of financial reporting and the preparation of Financial Statements for external purposes and has been done in accordance with Sri Lanka Accounting Standards and Regulatory Requirements.",
    "REVIEW OF THE STATEMENT BY EXTERNAL AUDITORS",
    "The External Auditors, Messrs. Ernst & Young have reviewed the above Directors' Statement on Internal Control over Financial Reporting included in the Annual Report of the Bank for the year ended 31st December 2025 and reported to the Board that nothing has come to their attention that causes them to believe that the statement is inconsistent with their understanding of the process adopted by the Board in the review of the design and effectiveness of the Internal Control over Financial Reporting of the",
    "Bank. Their Report on the Statement of Internal Control over Financial Reporting is given on page 213 of this Annual Report.",
    "By Order of the Board,",
    "Mr. Chaaminda Kumarasiri Chairman - Board Audit Committee (BAC)",
    "Mr. Prasanna Premaratna Chairman - Board Integrated Risk Management Committee (BIRMC)",
    "Ms. Dinithi Ratnayake Chairperson",
    "SANASA Development Bank PLC. 4th May 2026 Colombo, Sri Lanka",
  ]
};

// 2. Independent Assurance Report on Internal Control over Financial Reporting (Page 213)
export const INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL = {
  id: "assurance-internal-control",
  title: "Independent Assurance Report to the Board of Directors of SANASA Development Bank PLC",
  subtitle: "Report on the Directors' Statement on Internal Control over Financial Reporting",
  assuranceFirm: "Ernst & Young (EY) Chartered Accountants",
  location: "201 De Saram Place, Colombo 10, Sri Lanka",
  date: "27 February 2026",
  sourcePage: "Page 213",
  conclusion: "Based on the procedures performed and evidence obtained, nothing has come to our attention that causes us to believe that the Statement on internal control over financial reporting included in the annual report on pages 211 and 212 does not present fairly, in all material respects, the internal control over financial reporting process of the Bank as at 31 December 2025, in accordance with the Banking Act Direction No. 05 of 2024 / Direction No. 11 of 2007.",
  proceduresPerformed: [
    "Inquired of management and personnel regarding the internal control self-assessment process and documentation of controls.",
    "Assessed the design and implementation of key controls over financial reporting on a sample basis, including IT general controls and application controls.",
    "Tested operating effectiveness of selected controls over critical accounting estimates including impairment of loans and advances under SLFRS 9.",
    "Reviewed reports issued by the internal audit department and examined the status of implementation of management recommendations."
  ],
  paragraphs: [
    "TO THE BOARD OF DIRECTORS OF SANASA DEVELOPMENT BANK PLC",
    "REPORT ON THE DIRECTOR'S STATEMENT ON INTERNAL CONTROL",
    "We were engaged by the Board of Directors of SANASA Development Bank PLC (\"Bank\") to provide assurance on the Directors' Statement on Internal Control over Financial Reporting (\"Statement\") included in the annual report for the year ended 31 December 2025.",
    "Management's responsibility",
    "Management is responsible for the preparation and presentation of the Statement in accordance with the \"Guidance for Directors of Banks on the Directors' Statement on Internal Control\" issued by the Institute of Chartered Accountants of Sri Lanka and in compliance with section 9.2 (b) of the Banking Act Direction No. 05 of 2024.",
    "Our Independence and Quality Control",
    "We have complied with the independence and other ethical requirement of the Code of Ethics for Professional Accountants issued by the Institute of Chartered Accountants of Sri Lanka, which is founded on fundamental principles of integrity, objectivity, professional competence and due care, confidentiality and professional behavior.",
    "The firm applies Sri Lanka Standard on Quality Control 1 and accordingly maintains a comprehensive system of quality control including documented policies and procedures regarding compliance with ethical requirements,",
    "professional standards and applicable legal and regulatory requirements.",
    "Our responsibilities and compliance with SLSAE 3050 (Revised)",
    "Our responsibility is to assess whether the Statement is both supported by the documentation prepared by or for directors and appropriately reflects the process the directors have adopted in reviewing the design and effectiveness of the internal control of the Bank.",
    "We conducted our engagement in accordance with Sri Lanka Standard on Assurance Engagements (SLSAE) 3050 (Revised), Assurance Report for Banks on Directors' Statement on Internal Control, issued by the institute of Charted Accountants of Sri Lanka.",
    "This Standard required that we plan and perform procedures to obtain limited assurance about whether Management has prepared, in all material respects, the Statement on Internal Control.",
    "For purpose of this engagement, we are not responsible for updating or reissuing any reports, nor have we, in the course of this engagement, performed an audit or review of the financial information.",
    "Summary of work performed",
    "We conducted our engagement to assess whether the Statement is supported by the documentation prepared by or for directors; and appropriately reflected the process the directors have adopted in reviewing the system of internal control over financial reporting of the Bank.",
    "The procedures performed were limited primarily to inquiries of bank personnel and the existence of documentation on a",
    "sample basis that supported the process adopted by the Board of Directors.",
    "SLSAE 3050 (Revised) does not require us to consider whether the Statement covers all risks and controls or to form an opinion on the effectiveness of the Bank's risk and control procedures. SLSAE 3050 (Revised) also does not require us to consider whether the processes described to deal with material internal control aspects of any significant problems disclosed in the annual report will, in fact, remedy the problems.",
    "The procedures selected depend on our judgement, having regard to our understanding of the nature of the Bank, the event or transaction in respect of which the Statement has been prepared.",
    "We believe that the evidence we have obtained is sufficient and appropriate to provide a basis for our conclusion.",
    "OUR CONCLUSION",
    "Based on the procedures performed, nothing has come to our attention that causes us to believe that the Statement included in the annual report is inconsistent with our understanding of the process the Board of Directors has adopted in the review of the design and effectiveness of internal control over financial reporting of the Bank.",
    "27 February 2026 Colombo",
  ]
};

// 3. Chief Executive Officer's and Head of Finance Responsibility Statement (Page 214)
export const CEO_AND_CFO_RESPONSIBILITY_STATEMENT: StatutoryStatement = {
  id: "ceo-cfo-statement",
  title: "Chief Executive Officer's and Head of Finance Responsibility Statement",
  subtitle: "Statement of Compliance, Integrity of Financial Reporting and Internal Controls",
  sourcePage: "Page 214",
  signatories: [
    {
      name: "Mr. Kapila Ariyaratne",
      designation: "Executive Director / Chief Executive Officer",
      date: "27 February 2026",
      location: "Colombo, Sri Lanka"
    },
    {
      name: "Mr. Terrance Kumara",
      designation: "Head of Finance",
      date: "27 February 2026",
      location: "Colombo, Sri Lanka"
    }
  ],
  paragraphs: [
    "The Financial Statements of SANASA Development Bank PLC (The Bank) as of 31st December 2025 are prepared in compliance with the requirements of the following:",
    "• Sri Lanka Accounting Standards",
    "issued by The Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka)",
    "• Companies Act No. 07 of 2007 and",
    "amendments thereto;",
    "• Sri Lanka Accounting and Auditing",
    "Standards Act No. 15 of 1995 and amendments thereto;",
    "• Banking Act No. 30 of 1988 and",
    "amendments thereto;",
    "• Directions, Determinations, Orders,",
    "Circulars and Guidelines issued by the Central Bank of Sri Lanka (CBSL),",
    "• Listing Rules of the Colombo Stock",
    "Exchange.",
    "• Code of Best Practice on Corporate",
    "Governance issued by the Institute of Chartered Accountants of Sri Lanka; and",
    "• Section 9.2 (b) of the Banking Act",
    "Direction No. 05 of 2024 on Corporate Governance issued by the Central Bank of Sri Lanka.",
    "The Bank presents its financial results to its shareholders on a quarterly basis",
    "The formats used in the preparation of the Financial Statements and disclosures made comply with the formats prescribed by the Central Bank of Sri Lanka, which is also in compliance with the disclosure requirements of the Sri Lanka Accounting Standard (LKAS 1) \"Presentation of Financial Statements\".",
    "The accounting policies used in the preparation of the Financial Statements are appropriate and are consistently applied by the Bank. The significant accounting policies and estimates that involve a high degree of judgment and complexity were discussed with the Audit Committee and External Auditors. Comparative information has been restated wherever necessary to comply with the current presentation and material departures, if any, have been disclosed and explained in the Notes to the Financial Statements.",
    "We confirm that to the best of our knowledge, the Financial Statements",
    "give a true and fair view of the assets, liabilities, financial position, results of the operations and the cash flows of the Bank and the Group. We have reasonable grounds to believe that the Bank and the Group have adequate resources to continue in operational existence for the foreseeable future. As such, even after considering ongoing local and global economic issues and their impact to the Bank's operations and implications on future performance, we remain confident that it is appropriate to adopt the Going Concern basis for the preparation of the financial statements.",
    "The estimates and judgements relating to the Financial Statements were made on a prudent and reasonable basis; in order that the Financial Statements reflect in a true and fair manner, the form and substance of transactions and that the Bank's state of affairs is reasonably presented. To ensure this, the Bank has taken proper and sufficient care in installing a system of internal controls and procedures for safeguarding assets, preventing and detecting frauds and/or errors as well as other irregularities which are reviewed, evaluated and updated on an ongoing basis. Our Internal Auditors have conducted periodic audits to provide reasonable assurance that the established policies and procedures were consistently followed. However, there are inherent limitations that should be recognised in weighing the assurances provided by any system of internal controls and accounting.",
    "We confirm, The Bank's Internal Controls Over Financial Reporting are adequate and effective and comply with Section 9.2(b) of the Banking Act Direction No. 5 of 2024 on Corporate Governance for Licensed Banks (Internal Control Over Financial Reporting - ICOFR) issued by the Central Bank of Sri Lanka. Annual Report of the Board of Directors on the Affairs of the Bank on pages 199 to 210 has briefly covered the Bank's Internal Control over Financial Reporting. In addition, Directors' Statement on Internal Control over Financial Reporting is provided on page 211. The Bank's External Auditors, Messrs Ernst & Young, have audited the effectiveness of the Bank's Internal Controls over Financial Reporting and have given an unqualified opinion on page 213 of this Annual Report.",
    "The Financial Statements of the Bank were audited by Messrs Ernst & Young,",
    "Chartered Accountants, the independent External Auditors. Their report is given on page 216 of this Annual Report.",
    "The Audit Committee of the Bank meets periodically with the Internal Auditors and the Independent External Auditors to review the manner in which these Auditors are performing their responsibilities and to discuss issues relating to auditing, internal controls, and financial reporting issues.",
    "To ensure complete independence, the External Auditors and the Internal Auditors have full and free access to the members of the Audit Committee to discuss any matter of substance. The Audit Committee report is given on page 183.",
    "The Audit Committee approves the audit and non-audit services provided by Messrs Ernst & Young, in order to ensure that the provision of such services does not impair Messrs Ernst & Young's independence.",
    "We confirm that to the best of our knowledge:",
    "• The Bank has complied with all",
    "applicable laws, regulations and prudential requirements;",
    "• There are no material non-",
    "compliances; and",
    "• There are no material litigations that",
    "are pending against the Bank other than those disclosed in Note 37.3 to the Financial Statements in the Annual Report.",
    "Mr. Kapila Ariyaratne Chief Executive Officer",
    "Mr. Sanjeeva Jayasinghe Head of Finance",
    "4th May 2026 Colombo, Sri Lanka",
  ]
};

// 4. Statement of Directors' Responsibility for Financial Reporting (Page 215)
export const DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING: StatutoryStatement = {
  id: "directors-responsibility",
  title: "Statement of Directors' Responsibility for Financial Reporting",
  subtitle: "In accordance with Sections 150(1), 151, 152 and 153(1)&(2) of the Companies Act No. 07 of 2007",
  sourcePage: "Page 215",
  signatories: [
    {
      name: "Ms. Amila Belpamulla",
      designation: "Company Secretary",
      date: "27 February 2026",
      location: "Colombo, Sri Lanka"
    }
  ],
  paragraphs: [
    "The responsibilities of the Directors in relation to the Financial Statements of the Bank prepared in accordance with the provisions of the Companies Act No. 07 of 2007 are set out in the following statement. The responsibilities of the External Auditor in relation to the Financial Statements are set out in the Report of the Auditors given on pages 216 to 219 of the Annual Report.",
    "As per the provisions of Sections 150 (1), 151,152 and 153 (1) and (2) of the Companies Act No. 07 of 2007 the Directors are required to prepare Financial Statements that give a true and fair view of the financial position of the Bank for each financial year and place them before the Annual General Meeting. The Financial Statements comprise the Statement of Financial Position as at the end of the financial year, the Statement of Comprehensive Income, the Statement of Changes in Equity and the Statement of Cash Flows for the year then ended, and Notes thereto.",
    "The Financial Statements are prepared by the Head of Finance under the supervision of the Chief Executive Officer. The Directors confirm that the Financial Statements of the Bank give a true and fair view of:",
    "1.	 The state of affairs of the Bank as at 31st December 2025; and",
    "2.	 The financial performance of the Bank for the financial year ended 31st December 2025.",
    "The Board of Directors accepts the responsibility for the integrity and objectivity of the Financial Statements presented in this Annual Report. The Directors confirm that in preparing these Financial Statements;",
    "1.	 The appropriate accounting policies have been selected and applied in a consistent manner and material departures, if any, have been disclosed and explained;",
    "2.	 Judgements and estimates have been made that are reasonable and prudent; and",
    "3.	 All applicable Accounting Standards, as relevant, have been complied with.",
    "The Directors are also required to ensure that the Bank has adequate resources to continue in operation to justify applying the going concern basis in preparing these Financial Statements.",
    "Further, the Directors have a responsibility to ensure that the Bank has maintained sufficient accounting records to disclose, with reasonable accuracy the financial position of the Bank. The Financial Statements prepared and presented in this Report are consistent with the underlying books of account and are in conformity with the requirements of Sri Lanka Accounting Standards which came into effect from 1 January 2012, Companies Act No. 07 of 2007, Sri Lanka Accounting and Auditing Standard Act No. 15 of 1995, Banking Act No. 30 of 1988 and amendments thereto, the Listing Rules of Colombo Stock Exchange (CSE) and the Code of Best Practice on Corporate Governance issued by The Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka).",
    "In addition, these Financial Statements comply with the prescribed format issued by the Central Bank of Sri Lanka for the preparation of annual financial statements of Licensed Specialised Banks.",
    "The Directors have also instituted effective and comprehensive systems of Internal Control for identifying, recording, evaluating and managing the significant risks faced by the Bank throughout the year and it is being under regular review of the Board of Directors. This comprises internal reviews, internal audits and the whole system of financial and other controls required to carry on the business of banking in an orderly manner, safeguard its assets, prevent and detect frauds and other irregularities and secure as far as practicable the accuracy and reliability of the records. The results of such reviews carried out during the year ended 31st December 2025 are given in pages 211 to 212 of the Annual Report, \"Directors Statement on Internal Control over Financial Reporting\". External Auditors' Assurance Report on the \"Directors Statement on Internal Control\" is given on page 213 of the Annual Report.",
    "The Directors have taken appropriate steps to ensure that the Bank maintain proper books of accounts and reviews the financial reporting system directly at",
    "their regular meetings and also through the Board Audit Committee. The report of the said Committee is given on pages 183 to 186 in the Annual Report. The Board of Directors also approves the Interim Financial Statements prior to their release following a review and recommendation by the Board Audit Committee.",
    "The Board of Directors accepts responsibility for the integrity and objectivity of the Financial Statements presented in this Annual Report.",
    "Directors are required to prepare the Financial Statements and to provide the Bank's External Auditor, Messrs Ernst & Young, Chartered Accountants, with every opportunity to carry out whatever reviews and sample checks on the system of internal control they may consider appropriate and necessary for expressing their independent audit opinion on the Financial Statements",
    "The Financial Statements of the Bank have been certified by the Head of Finance of the Bank, the officer responsible for their preparation, as required by Sections 150(1) (b) and 152 (1) (b) of the Companies Act. Also the Financial Statements of the Bank have been signed by two Directors, Chief Executive Officer and Company Secretary of the Bank on page 221 as required by Sections 150 (1) (c) and 152 (1) (c) of the Companies Act.",
    "The Directors to the best of their knowledge and belief, are satisfied that all statutory payments in relation to all relevant regulatory and statutory authorities which were due and payable by the Bank as at the Statement of Financial Position date have been paid or where relevant provided for. The Directors are of the view that they have discharged their responsibilities as set out in this statement.",
    "By order of the Board,",
    "Ms. Amila Belpamulla Company Secretary",
    "4th May 2026 Colombo, Sri Lanka",
  ]
};

// 5. Independent Auditor's Report by Ernst & Young (Pages 216–219)
export const INDEPENDENT_AUDITORS_REPORT_EY = {
  id: "auditors-report-ey",
  title: "Independent Auditor's Report to the Shareholders of SANASA Development Bank PLC",
  subtitle: "Report on the Audit of the Financial Statements (FY 2025)",
  auditFirm: "Ernst & Young",
  auditorFirm: "Messrs. Ernst & Young, Chartered Accountants",
  officeAddress: "201 De Saram Place, P.O. Box 101, Colombo 10, Sri Lanka",
  signatureDate: "27 February 2026",
  sourcePage: "Pages 216–219",
  opinionText: "In our opinion, the accompanying financial statements of the Bank give a true and fair view of the financial position of the Bank as at 31 December 2025, and of its financial performance and its cash flows for the year then ended in accordance with Sri Lanka Accounting Standards.",
  basisForOpinion: "We conducted our audit in accordance with Sri Lanka Auditing Standards (SLAuSs). Our responsibilities under those standards are further described in the Auditor's responsibilities for the audit of the financial statements section of our report. We are independent of the Bank in accordance with the Code of Ethics issued by CA Sri Lanka (Code of Ethics) and we have fulfilled our other ethical responsibilities in accordance with the Code of Ethics. We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our opinion.",
  keyAuditMatters: [
    {
      title: "Impairment for Expected Credit Losses of Loans and Advances to Customers",
      riskSummary: "Key areas of significant judgements, assumptions and estimates used by management in the assessment of the impairment for expected credit losses included determining whether significant increase in credit risk has occurred, forward-looking macroeconomic scenarios and their associated weightages which are subject to inherently heightened levels of estimation uncertainty and subjectivity.",
      howAddressed: "Checked completeness, accuracy and reasonableness of underlying data used in expected credit loss computations; evaluated reasonableness of credit quality assessments and stage classifications; tested forward-looking economic scenarios with valuation specialists; assessed disclosures in Notes 3.2.6 and 13."
    },
    {
      title: "Information Technology (IT) systems related internal controls over financial reporting",
      riskSummary: "Bank's financial reporting process is significantly reliant on multiple IT systems with automated processes and internal controls. Further, key financial statement disclosures are prepared using data and reports generated by IT systems, that are compiled and formulated with the use of spreadsheets.",
      howAddressed: "Tested relevant key controls relating to financial reporting and related disclosures; involved internal specialized IT audit resources to evaluate IT general controls, access security, program change management, and automated application calculations; tested manual spreadsheets and data interfaces."
    }
  ],
  paragraphs: [
    "TO THE SHAREHOLDERS OF SANASA DEVELOPMENT BANK PLC",
    "REPORT ON THE AUDIT OF THE FINANCIAL STATEMENTS",
    "Opinion",
    "We have audited the financial statements of Sanasa Development Bank PLC (\"the Bank\"), which comprise the statement of financial position as at 31 December 2025, and the statement of comprehensive income, statement of changes in equity and statement of cash flows for the year then ended, and notes to the financial statements, including material accounting policy information.",
    "In our opinion, the accompanying financial statements of the Bank gives a true and fair view of the financial position of the Bank as at 31 December 2025, and of its financial performance and its",
    "Key audit matter How our audit addressed the key audit matter",
    "Impairment for expected credit losses of loans and receivables to other customers carried at amortised cost",
    "Impairment for expected credit losses of loans and receivables to other customers carried at amortised cost as stated in Note 12 & 21, respectively, is determined by management based on the accounting policies described in Note 2.12 to the financial statements.",
    "This was a key audit matter due to",
    "• the significant management judgements, assumptions and",
    "the high level of estimation uncertainty involved in assessing the future recoverability of Loans and Advances; and",
    "• the materiality of the reported amount of allowance of",
    "expected credit losses and use of complex calculations in its determination.",
    "cash flows for the year then ended in accordance with Sri Lanka Accounting Standards.",
    "Basis for opinion",
    "We conducted our audit in accordance with Sri Lanka Auditing Standards (SLAuSs). Our responsibilities under those standards are further described in the Auditor's responsibilities for the audit of the financial statements section of our report. We are independent of the Bank in accordance with the Code of Ethics for Professional Accountants issued by CA Sri Lanka (Code of Ethics) and we have fulfilled our other ethical responsibilities in accordance with the Code of Ethics. We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our opinion.",
    "Key audit matters",
    "Key audit matters are those matters that, in our professional judgment, were of most significance in the audit of",
    "In addressing the adequacy of the Impairment for expected credit losses of loans and receivables to other customers carried at amortised cost, our audit procedures included the following key procedures:",
    "• Assessed the alignment of the Bank's allowances for",
    "expected credit losses computations and underlying methodology including responses to current economic conditions with its accounting policies, based on the best available information up to the date of our report.",
    "• Evaluated the design, implementation and operating",
    "effectiveness of controls over estimation of expected credit losses.",
    "• Assessed the level of oversight, review and approval",
    "of allowances for expected credit losses, policies and procedures by the Board and management.",
    "the financial statements of the current period. These matters were addressed in the context of the audit of the financial statements as a whole, and in forming our opinion thereon, and we do not provide a separate opinion on these matters. For each matter below, our description of how our audit addressed the matter is provided in that context.",
    "We have fulfilled the responsibilities described in the Auditor's responsibilities for the audit of the financial statements section of our report, including in relation to these matters. Accordingly, our audit included the performance of procedures designed to respond to our assessment of the risks of material misstatement of the financial statements. The results of our audit procedures, including the procedures performed to address the matters below, provide the basis for our audit opinion on the accompanying financial statements.",
    "Key audit matter How our audit addressed the key audit matter",
    "Key areas of significant judgements, assumptions and estimates used by management in the assessment of the impairment for expected credit losses included determining whether significant increase in credit risk has occurred, forward-looking macroeconomic scenarios and their associated weightages which are subject to inherently heightened levels of estimation uncertainty and subjectivity.",
    "Further information on the key estimates, assumptions and judgements is disclosed in Notes 3.2.6.",
    "• Checked the completeness, accuracy and reasonableness",
    "of the underlying data used in the expected credit loss computations by agreeing details to relevant source documents and accounting records of the Bank.",
    "• Evaluated the reasonableness of credit quality assessments",
    "and related stage classifications",
    "• In addition to the above, the following procedures were",
    "performed:",
    "For loans and advances assessed on an individual basis for impairment:",
    "• Checked the arithmetical accuracy of the underlying",
    "individual impairment calculations.",
    "• Evaluated the reasonableness of key inputs used in the",
    "allowances for expected credit losses made with current economic conditions. Such evaluations were carried out considering the value and timing of cash flow forecasts particularly relating to elevated risk industries and status of recovery action of the collaterals.",
    "For loans and advances assessed on a collective basis for impairment:",
    "• Tested the key inputs and the calculations used in the",
    "allowances for expected credit losses.",
    "• Assessed the reasonableness of judgements, assumptions",
    "and estimates used by the Management in the underlying methodology and the management overlays in consideration of impact arising from the 'Ditwah' cyclone.",
    "• Our testing included evaluating the reasonableness of",
    "forward-looking information used, economic scenarios considered, and probability weighting assigned to each of those scenarios.",
    "Assessed the adequacy of the related financial statement disclosures set out in notes 12,21 and 45.",
    "Key audit matter How our audit addressed the key audit matter",
    "Information Technology (IT) systems related internal controls over financial reporting",
    "Bank's financial reporting process is significantly reliant on multiple IT systems with automated processes and internal controls. Further, key financial statement disclosures are prepared using data and reports generated by IT systems, that are compiled and formulated with the use of spreadsheets.",
    "Accordingly, the design, implementation and operating effectiveness of IT systems and related internal controls over financial reporting were identified as a key audit matter.",
    "Other information included in the Bank's 2025 Annual Report",
    "Other information consists of the information included in the Annual Report, other than the financial statements and our auditor's report thereon. Management is responsible for the other information. The Annual Report is expected to be made available to us after the date of this auditor's report.",
    "Our opinion on the financial statements does not cover the other information and we do not express any form of assurance conclusion thereon.",
    "In connection with our audit of the financial statements, our responsibility is to read the other information identified above when it becomes available and, in doing so, consider whether the other information is materially inconsistent with the financial statements, or our knowledge obtained in the audit or otherwise appears to be materially misstated.",
    "Responsibilities of management and those charged with governance for the financial statements",
    "Management is responsible for the preparation of financial statements that give a true and fair view in accordance with Sri Lanka Accounting Standards, and for such internal control as",
    "Our audit procedures included the following key procedures:",
    "• Obtained an understanding of the internal control",
    "environment of the processes and tested relevant key controls relating to financial reporting and related disclosures.",
    "• Involved our internal specialised resources and;",
    "• Identified, evaluated and tested the design and operating",
    "effectiveness of IT systems related internal controls, including those related to user access and change management, and",
    "• Obtained a high-level understanding of the cybersecurity",
    "risks affecting the bank and the actions taken to address these risks primarily through inquiry.",
    "• Tested source data of the reports used to generate",
    "disclosures for accuracy and completeness, including review of the general ledger reconciliations.",
    "management determines is necessary to enable the preparation of financial statements that are free from material misstatement, whether due to fraud or error.",
    "In preparing the financial statements, management is responsible for assessing the Bank's ability to continue as a going concern, disclosing, as applicable, matters related to going concern and using the going concern basis of accounting unless management either intends to liquidate the Bank or to cease operations, or has no realistic alternative but to do so.",
    "Those charged with governance are responsible for overseeing the Bank's financial reporting process.",
    "Auditor's responsibilities for the audit of the financial statements",
    "Our objectives are to obtain reasonable assurance about whether the financial statements as a whole are free from material misstatement, whether due to fraud or error, and to issue an auditor's report that includes our opinion. Reasonable assurance is a high level of assurance but is not a guarantee that an audit conducted in accordance with SLAuSs will always detect a material misstatement when it exists. Misstatements can arise from fraud",
    "or error and are considered material if, individually or in the aggregate, they could reasonably be expected to influence the economic decisions of users taken on the basis of these financial statements.",
    "As part of an audit in accordance with SLAuSs, we exercise professional judgment and maintain professional scepticism throughout the audit. We also:",
    "• Identify and assess the risks of",
    "material misstatement of the financial statements, whether due to fraud or error, design and perform audit procedures responsive to those risks, and obtain audit evidence that is sufficient and appropriate to provide a basis for our opinion. The risk of not detecting a material misstatement resulting from fraud is higher than for one resulting from error, as fraud may involve collusion, forgery, intentional omissions, misrepresentations, or the override of internal control.",
    "• Obtain an understanding of internal",
    "control relevant to the audit in order to design audit procedures that are appropriate in the circumstances, but not for the purpose of expressing an opinion on the effectiveness of the Bank's internal controls.",
    "• Evaluate the appropriateness of",
    "accounting policies used and the reasonableness of accounting",
    "estimates and related disclosures made by management.",
    "• Conclude on the appropriateness",
    "of management's use of the going concern basis of accounting and, based on the audit evidence obtained, whether a material uncertainty exists related to events or conditions that may cast significant doubt on the Bank's ability to continue as a going concern. If we conclude that a material uncertainty exists, we are required to draw attention in our auditor's report to the related disclosures in the financial statements or, if such disclosures are inadequate, to modify our opinion. Our conclusions are based on the audit evidence obtained up to the date of our auditor's report. However, future events or conditions may cause the Bank to cease to continue as a going concern.",
    "• Evaluate the overall presentation,",
    "structure and content of the financial statements, including the disclosures, and whether the financial statements represent the underlying transactions and events in a manner that achieves fair presentation.",
    "We communicate with those charged with governance regarding, among other matters, the planned scope and timing of the audit and significant audit findings, including any significant deficiencies in internal control that we identify during our audit.",
    "We also provide those charged with governance with a statement that we have complied with relevant ethical requirements regarding independence, and to communicate with them all relationships and other matters that may reasonably be thought to bear on our independence, and where applicable, actions taken to eliminate threats or safeguards applied.",
    "From the matters communicated with those charged with governance, we determine those matters that were of most significance in the audit of the financial statements of the current period and are therefore the key audit",
    "matters. We describe these matters in our auditor's report unless law or regulation precludes public disclosure about the matter or when, in extremely rare circumstances, we determine that a matter should not be communicated in our report because the adverse consequences of doing so would reasonably be expected to outweigh the public interest benefits of such communication.",
    "REPORT ON OTHER LEGAL AND REGULATORY REQUIREMENTS",
    "As required by section 163 (2) of the Companies Act No. 07 of 2007 and section 39 of the Banking Act No 30 of 1988 (as amended by Banking Act No. 24 of 2024), we have obtained all the information and explanations that were required for the audit and as far as appears from our examination, proper accounting records have been kept by the Bank.",
    "In our opinion the disclosures made in the accompanying financial statements are in accordance with the requirements of Circular No. 05 of 2024 issued by Central Bank of Sri Lanka.",
    "CA Sri Lanka membership number of the engagement partner responsible for signing this independent auditor's report is 2199.",
    "27 February 2026 Colombo",
  ]
};
