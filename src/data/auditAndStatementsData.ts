/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Statutory Statements & EY Audit Report
 * Source: Official Published Annual Report 2025 (Pages 194-206)
 * Audited by Ernst & Young (EY) Sri Lanka
 */

export interface StatutoryStatement {
  id: string;
  title: string;
  subtitle: string;
  signatories: {
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
  sourcePage: string;
}

export const DIRECTORS_STATEMENT_INTERNAL_CONTROL: StatutoryStatement = {
  id: "internal-control",
  title: "Directors' Statement on Internal Control over Financial Reporting",
  subtitle: "In accordance with Section 3(8)(ii)(b) of the Banking Act Direction No. 11 of 2007 on Corporate Governance",
  sourcePage: "Pages 194–195",
  signatories: [
    {
      name: "Ms. Dinithi Ratnayake",
      designation: "Chairperson",
      date: "27 March 2026",
      location: "Colombo"
    },
    {
      name: "Mr. Chaaminda Kumarasiri",
      designation: "Chairman - Board Audit Committee",
      date: "27 March 2026",
      location: "Colombo"
    },
    {
      name: "Mr. Kapila Ariyaratne",
      designation: "Chief Executive Officer / Executive Director",
      date: "27 March 2026",
      location: "Colombo"
    }
  ],
  paragraphs: [
    "The Board of Directors ('Board') of SANASA Development Bank PLC ('Bank') presents this statement on the effectiveness of the system of internal control over financial reporting for the financial year ended 31st December 2025, in compliance with the Banking Act Direction No. 11 of 2007, Section 3(8)(ii)(b).",
    "The Board is responsible for the adequacy and effectiveness of the Bank's system of internal controls. However, such a system is designed to manage rather than eliminate the risk of failure to achieve the Bank's business objectives. Therefore, the system of internal control can only provide reasonable and not absolute assurance against material misstatements, fraud, or losses.",
    "The Board has established an ongoing process for identifying, evaluating, and managing the significant risks faced by the Bank, and this process includes enhancing the system of internal control over financial reporting as changes in the operating environment or regulatory requirements occur. The Board reviews this process through its Board Audit Committee (BAC) and Board Integrated Risk Management Committee (BIRMC).",
    "The Management has adopted the Internal Control - Integrated Framework issued by the Committee of Sponsoring Organizations of the Treadway Commission (COSO) to evaluate the design and operational effectiveness of the Bank's internal controls over financial reporting.",
    "The Bank's internal controls over financial reporting comprise policies, procedures, and documentation governing general ledger accounts, automated business process controls within the Core Banking System, and information technology general controls (ITGCs). Key automated and manual controls over loan origination, impairment assessment (SLFRS 9), treasury transactions, and deposit accounting are reviewed on an ongoing basis.",
    "The internal audit function independently assesses the design and effectiveness of the control environment across all 94 branches and Head Office departments, reporting directly to the Board Audit Committee. Remediations for identified deficiencies are tracked until fully resolved.",
    "Confirmation Statement: Based on the assessment of the internal control over financial reporting, the Board confirms that the financial reporting system of the Bank has been designed and implemented to provide reasonable assurance regarding the reliability of financial reporting, and that the preparation of financial statements for external purposes has been done in accordance with Sri Lanka Accounting Standards (SLFRS/LKAS) and regulatory requirements."
  ],
  keyHighlights: [
    {
      heading: "Framework Adopted",
      details: "COSO 2013 Internal Control - Integrated Framework covering control environment, risk assessment, control activities, information & communication, and monitoring."
    },
    {
      heading: "ECL Model Controls (SLFRS 9)",
      details: "Rigorous governance over staging criteria, forward-looking macroeconomic variables, and probability of default (PD) calibrations verified independently."
    },
    {
      heading: "IT General Controls (ITGC)",
      details: "Enhanced user access management, password complexity policies, change management controls, and disaster recovery replication tested successfully."
    }
  ]
};

export const INDEPENDENT_ASSURANCE_REPORT_INTERNAL_CONTROL = {
  id: "assurance-internal-control",
  title: "Independent Assurance Report on Internal Control over Financial Reporting",
  subtitle: "To the Board of Directors of SANASA Development Bank PLC",
  assuranceFirm: "Ernst & Young (EY) Chartered Accountants",
  location: "201 De Saram Place, Colombo 10, Sri Lanka",
  date: "27 March 2026",
  sourcePage: "Page 196",
  scope: "Assurance engagement conducted in accordance with Sri Lanka Standard on Assurance Engagements (SLSAE) 3050 - Assurance Reports on Internal Control over Financial Reporting.",
  conclusion: "Based on our procedures, nothing has come to our attention that causes us to believe that the Directors' Statement on Internal Control over Financial Reporting included on pages 194 to 195 of this Annual Report is not fairly stated in all material respects with the guidelines issued by the Central Bank of Sri Lanka.",
  proceduresPerformed: [
    "Inquired of management and personnel regarding the internal control self-assessment process and documentation of controls.",
    "Assessed the design and implementation of key controls over financial reporting on a sample basis, including IT general controls and application controls.",
    "Tested operating effectiveness of selected controls over critical accounting estimates including impairment of loans and advances under SLFRS 9.",
    "Reviewed reports issued by the internal audit department and examined the status of implementation of management recommendations."
  ]
};

export const CEO_AND_CFO_RESPONSIBILITY_STATEMENT: StatutoryStatement = {
  id: "ceo-cfo-statement",
  title: "Chief Executive Officer's and Head of Finance's Responsibility Statement",
  subtitle: "Confirmation of Financial Statements Integrity, Compliance and Controls Effectiveness",
  sourcePage: "Page 197",
  signatories: [
    {
      name: "Mr. Kapila Ariyaratne",
      designation: "Chief Executive Officer / Executive Director",
      date: "27 March 2026",
      location: "Colombo"
    },
    {
      name: "Mr. Sanjeeva Jayasinghe",
      designation: "Head of Finance",
      date: "27 March 2026",
      location: "Colombo"
    }
  ],
  paragraphs: [
    "The Financial Statements of SANASA Development Bank PLC ('the Bank') as at 31st December 2025 are prepared and presented in conformity with the requirements of Sri Lanka Accounting Standards (SLFRS/LKAS) issued by The Institute of Chartered Accountants of Sri Lanka, the Banking Act No. 30 of 1988 and amendments thereto, the Companies Act No. 07 of 2007, and the Listing Rules of the Colombo Stock Exchange.",
    "The accounting policies used in the preparation of the financial statements are appropriate and have been consistently applied, unless otherwise stated. Significant accounting choices and estimates have been made on a reasonable and prudent basis. All material events occurring after the reporting date up to the date of authorization have been appropriately evaluated and disclosed.",
    "We confirm that the Bank has maintained proper accounting records sufficient to disclose with reasonable accuracy at any time the financial position of the Bank. We have taken reasonable steps to safeguard the assets of the Bank, establish internal accounting control systems, and prevent and detect fraud and other irregularities.",
    "The system of internal controls has been designed under our supervision to provide reasonable assurance regarding the reliability of financial reporting and the preparation of financial statements for external purposes. We have evaluated the effectiveness of the Bank's internal controls over financial reporting and concluded that they operated effectively during the year ended 31st December 2025.",
    "The Bank's external auditors, Ernst & Young (EY), Chartered Accountants, have audited the Financial Statements and their report is set out on pages 200 to 203 of this Annual Report. The Board Audit Committee has reviewed the external audit findings and recommendations.",
    "We confirm that to the best of our knowledge and belief: (a) the Bank has complied with all applicable statutory and regulatory requirements, and (b) the Financial Statements give a true and fair view of the financial position of the Bank as at 31st December 2025 and of its financial performance and cash flows for the year then ended."
  ]
};

export const DIRECTORS_RESPONSIBILITY_FINANCIAL_REPORTING: StatutoryStatement = {
  id: "directors-responsibility",
  title: "Statement of Directors' Responsibility for Financial Reporting",
  subtitle: "In accordance with the Companies Act No. 07 of 2007 and Banking Act No. 30 of 1988",
  sourcePage: "Pages 198–199",
  signatories: [
    {
      name: "Ms. Dinithi Ratnayake",
      designation: "Chairperson",
      date: "27 March 2026",
      location: "Colombo"
    },
    {
      name: "Mr. Kapila Ariyaratne",
      designation: "Chief Executive Officer / Executive Director",
      date: "27 March 2026",
      location: "Colombo"
    },
    {
      name: "Mr. Chaaminda Kumarasiri",
      designation: "Chairman - Board Audit Committee",
      date: "27 March 2026",
      location: "Colombo"
    },
    {
      name: "Mr. B. R. A. Bandara",
      designation: "Director",
      date: "27 March 2026",
      location: "Colombo"
    }
  ],
  paragraphs: [
    "The Directors are required by the Companies Act No. 07 of 2007 to prepare financial statements for each financial year, which give a true and fair view of the state of affairs of the Bank as at the end of the financial year and the profit or loss of the Bank for that financial year.",
    "In preparing these financial statements, the Directors are required to ensure that: (a) appropriate accounting policies have been selected and applied consistently; (b) reasonable and prudent judgments and estimates have been made; (c) all applicable Sri Lanka Accounting Standards (SLFRS/LKAS) have been followed; and (d) the going concern basis has been adopted, unless it is inappropriate to presume that the Bank will continue in business.",
    "The Directors are responsible for keeping proper accounting records which disclose with reasonable accuracy at any time the financial position of the Bank and enable them to ensure that the financial statements comply with the Companies Act No. 07 of 2007, the Banking Act No. 30 of 1988, and the Listing Rules of the Colombo Stock Exchange.",
    "The Directors have taken all reasonable steps to ensure that the Bank maintains adequate internal controls to safeguard its assets, prevent and detect fraud, and ensure the reliability of financial records.",
    "The Board is of the view that the Bank possesses adequate resources to continue in operational existence for the foreseeable future (at least twelve months from the reporting date) and continues to adopt the Going Concern basis in preparing the Financial Statements.",
    "The external auditors, Messrs. Ernst & Young (EY), Chartered Accountants, were provided with every opportunity to carry out their statutory audit and examine all accounting records, minutes of meetings, and relevant documentation. Their report on the financial statements is presented on pages 200 to 203."
  ]
};

export const INDEPENDENT_AUDITORS_REPORT_EY = {
  id: "auditors-report-ey",
  title: "Independent Auditor's Report",
  subtitle: "To the Shareholders of SANASA Development Bank PLC",
  auditorFirm: "Ernst & Young",
  auditorDesignation: "Chartered Accountants",
  officeAddress: "201, De Saram Place, P.O. Box 101, Colombo 10, Sri Lanka",
  signingPartner: "Ernst & Young",
  signatureDate: "27 March 2026",
  sourcePage: "Pages 200–203",
  opinionTitle: "Opinion",
  opinionText: "We have audited the financial statements of SANASA Development Bank PLC ('the Bank'), which comprise the Statement of Financial Position as at 31 December 2025, and the Statement of Comprehensive Income, Statement of Changes in Equity and Statement of Cash Flows for the year then ended, and notes to the financial statements, including material accounting policy information.\n\nIn our opinion, the accompanying financial statements give a true and fair view of the financial position of the Bank as at 31 December 2025, and of its financial performance and its cash flows for the year then ended in accordance with Sri Lanka Accounting Standards (SLFRS/LKAS).",
  basisForOpinion: "We conducted our audit in accordance with Sri Lanka Auditing Standards (SLAuSs). Our responsibilities under those standards are further described in the Auditor's Responsibilities for the Audit of the Financial Statements section of our report. We are independent of the Bank in accordance with the Code of Ethics issued by CA Sri Lanka, and we have fulfilled our other ethical responsibilities in accordance with the Code of Ethics. We believe that the audit evidence we have obtained is sufficient and appropriate to provide a basis for our opinion.",
  keyAuditMatters: [
    {
      title: "Impairment of Loans and Advances to Customers (SLFRS 9)",
      riskSummary: "Measurement of Expected Credit Loss (ECL) involves significant management judgment and estimation. As at 31 December 2025, gross loans and advances amounted to LKR 121,570 Mn against which an allowance for impairment of LKR 11,733 Mn was recognized. Key areas of judgment include staging allocation, evaluation of Significant Increase in Credit Risk (SICR), economic forecast weights, and individual impairment evaluations for Stage 3 exposures.",
      howAddressed: "We assessed the design and tested operating effectiveness of key internal controls over data inputs, staging criteria, and mathematical models. We engaged our internal credit risk specialists to evaluate the reasonableness of forward-looking macroeconomic scenarios, probability of default (PD), and loss given default (LGD) models. For a sample of individually assessed Stage 3 loans, we evaluated discounted expected future cash flows and underlying collateral valuations."
    },
    {
      title: "IT Systems and Automated Controls over Financial Reporting",
      riskSummary: "The Bank's financial reporting relies extensively on complex IT systems, specifically the Core Banking System (T24/Finacle) and digital frontends (UPay, Internet Banking). Automated controls and IT general controls (ITGCs) over access rights, system interfaces, and program change management directly influence the accuracy of financial records.",
      howAddressed: "Our IT audit specialists tested the design and operating effectiveness of ITGCs over program changes, access to programs and data, and computer operations. We tested automated application controls, calculated system-generated interest accruals, and validated system interfaces between core banking and general ledger."
    },
    {
      title: "Valuation of Financial Assets Measured at Fair Value through OCI and P&L",
      riskSummary: "The Bank holds Treasury Bonds, Sri Lanka Development Bonds (SLDBs), and equity investments measured at fair value. Given prevailing market interest rate volatility and sovereign debt restructuring developments, the determination of fair value requires prudent observation of market yields and pricing models.",
      howAddressed: "We independently verified market prices of government securities against secondary market yield curves published by the Central Bank of Sri Lanka. We evaluated valuation models and checked mathematical accuracy of fair value adjustments recognized in profit or loss and other comprehensive income."
    }
  ],
  otherInformation: "Management is responsible for the other information. The other information comprises the information included in the Annual Report, but does not include the financial statements and our auditor's report thereon. Our opinion on the financial statements does not cover the other information and we do not express any form of assurance conclusion thereon.",
  reportOnLegalAndRegulatoryRequirements: "As required by section 163 (2) of the Companies Act No. 07 of 2007, we have obtained all the information and explanations that were required for the audit and, as far as appears from our examination, proper accounting records have been kept by the Bank. As required by Section 3(8)(ii)(c) of the Banking Act Direction No. 11 of 2007, nothing has come to our attention that causes us to believe that the Directors' Statement on Internal Control over Financial Reporting is inconsistent with our understanding of the Bank's internal controls."
};
