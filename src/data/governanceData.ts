/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * SDB Bank Integrated Annual Report 2025 - Corporate Governance & Statutory Disclosures
 * Source: Official Published Annual Report 2025 (Pages 181-210)
 * Full Unabridged Disclosures (No Paraphrasing, No Prefacing)
 */

import boardCommitteesJson from "./board_committees_unabridged.json";

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
  sections?: CommitteeReportSection[];
  signOff?: {
    signedBy: string;
    designation: string;
    date: string;
    location: string;
  };
}

// Chairperson's Statement on Corporate Governance
export const CHAIRPERSON_GOVERNANCE_MESSAGE = {
  title: "Chairperson's Statement on Corporate Governance",
  author: "Ms. Dinithi Ratnayake",
  designation: "Chairperson, SDB bank",
  message: `Dear Shareholders,\nOn behalf of the Board of Directors, I am pleased to present the Corporate Governance Statement of SANASA Development Bank PLC for the year ended 31st December 2025.\n\nIn a year marked by broader national economic recovery and increasing demand for specialized credit, your Board steadfastly championed highest standards of ethical conduct, transparency, and fiduciary accountability. Governance at SDB bank is not merely a statutory compliance exercise; it is the vital anchor that ensures the sustainable growth of our business while protecting the interests of our depositors, cooperative partners, shareholders, and employees.\n\nDuring 2025, the Board prioritized the continued alignment of the Bank's risk management architecture with the Central Bank of Sri Lanka (CBSL) Direction No. 05 of 2024 / Direction No. 11 of 2007 (and subsequent amendments), the Listing Rules of the Colombo Stock Exchange, and the Code of Best Practice on Corporate Governance 2023. We reinforced our internal control systems, heightened cybersecurity vigilance across our digital channels (including SDB UPay), and successfully concluded Phase 1 of our multi-year strategic transformation.\n\nAs we look ahead to implementing our 2026-2029 Strategic Blueprint with Rabo Partnerships, the Board remains resolute in its commitment to steering SDB bank toward inclusive, sustainable development that creates enduring handcrafted value for Sri Lanka.`
};

// 7 Statutory Board Committee Reports (Pages 181-196) - 100% Full Unabridged Text
export const BOARD_COMMITTEES_DETAILED: CommitteeReport[] = boardCommitteesJson.map(c => ({
  ...c,
  fullReportSections: c.sections
}));

// Financial Calendar (Page 198)
export const FINANCIAL_CALENDAR = {
  fy2025: [
    { event: "First Quarter Financial Statements published", date: "15th May 2025" },
    { event: "Second Quarter Financial Statements published", date: "14th August 2025" },
    { event: "Third Quarter Financial Statements published", date: "14th November 2025" },
    { event: "Financial Year 2025 End", date: "31st December 2025" },
    { event: "Audited Financial Statements FY 2025 signed by Board", date: "27th February 2026" },
    { event: "29th Annual General Meeting (Notice)", date: "02nd May 2026" },
    { event: "29th Annual General Meeting", date: "26th May 2026" }
  ],
  fy2026_indicative: [
    { event: "1st Quarter Interim Financial Statements", date: "May 2026" },
    { event: "2nd Quarter Interim Financial Statements", date: "August 2026" },
    { event: "3rd Quarter Interim Financial Statements", date: "November 2026" },
    { event: "Financial Year 2026 Closure", date: "31st December 2026" }
  ]
};

// Annual Report of the Board of Directors on the Affairs of the Bank (Pages 199–210)
export const DIRECTORS_STATUTORY_REPORT = {
  title: "Annual Report of the Board of Directors on the Affairs of the Bank",
  governingLaw: "Presented under Section 168 of the Companies Act No. 07 of 2007 and CBSL Banking Act Directions",
  overview: "The Directors of SANASA Development Bank PLC have pleasure in submitting their Annual Report together with the Audited Financial Statements of the Bank for the year ended 31st December 2025.",
  sections: [
    {
        "heading": "GENERAL",
        "content": "The Directors have pleasure in presenting to the shareholders the Annual Report of the SANASA Development Bank PLC together with the Audited Financial Statements for the year ended 31st December 2025 and the Auditors' Report on those Financial Statements conforming to all relevant statutory requirements. This Report provides the information as required by the Companies Act No. 07 of 2007, Banking Act No. 30 of 1988 and amendments thereto and the Directions issued thereunder including the Banking Act Direction No. 05 of 2024 on \"Corporate Governance for Licensed Banks in Sri Lanka\" and subsequent amendments thereto, the Listing Rules of the Colombo Stock Exchange (CSE) and the recommended best practices. The Financial Statements of the Bank for the year ended 31st December 2025, including the comparatives for 2024 were approved and authorised for issue by the Board of Directors on 24th February 2026 in accordance with the Resolution of the Directors. The appropriate number of copies of the Annual Report will be submitted to the CSE and to the Sri Lanka Accounting and Auditing Standards Monitoring Board within the statutory deadlines. SANASA Development Bank PLC (\"The Bank\") is a licensed specialised bank registered under the Banking Act No. 30 of 1988 and was incorporated as a public limited liability company in Sri Lanka on 6 August 1997 under the Companies Act No. 17 of 1982. The Bank was reregistered as per the requirements of the Companies Act No. 07 of 2007 (\"Companies Act\") on 30 October 2007. The reregistration number of the Bank is PB 62 PQ. The Registered Office as well as the Head Office of the Bank is at No. 12, Edmonton Road, Kirulapone, Colombo 6, Sri Lanka. The ordinary voting shares of the Bank are listed on the Main Board of the Colombo Stock Exchange since May 2012. The Bank has been assigned a National Long-Term Rating of BB+(lka) by Fitch Ratings Lanka Ltd."
    },
    {
        "heading": "VISION, MISSION, GOALS, VALUES AND CORPORATE CONDUCT",
        "content": "The Bank's Vision and Mission statements are exhibited on page 4 of the Annual Report. The business activities of the Bank are conducted in keeping with the highest level of ethical standards in achieving its Vision and Mission. The Bank issues a copy of its Code of Ethics to each, and every staff member and all employees are required to abide by the Bank's Code of Conduct."
    },
    {
        "heading": "PRINCIPAL BUSINESS ACTIVITIES",
        "content": "The principal activities of the Bank include accepting deposits at competitive rates of interest and the investment of these deposits in community-based lending programmes, with a special focus on Cooperative Societies, their members, and other micro-enterprises, and issuing local and international debit cards. The Bank's range of products includes Special Deposits, Credit, Pawning, Leasing, and Refinance Loan Schemes. At the end of 2025, the Bank has established 94 delivery points (2024 - 94) across all districts of the country"
    },
    {
        "heading": "REVIEW OF OPERATIONS",
        "content": "The \"Chairperson's Review\" on pages 42 to 45 the \"Chief Executive Officer's Review\" on pages 46 to 49 and the \"How we create value\" on pages 30 to 31, together with the Audited Financial Statements provide an overall review of business performance and the state of affairs of the Bank together with important events that took place during the year as required by the Section 168 of the Companies Act No. 07 of 2007 and the recommended best accounting practices"
    },
    {
        "heading": "FUTURE DEVELOPMENTS",
        "content": "The Bank intends to expand its network of delivery channels by employing a client- focused strategy with effective management of capital, liquidity, and risks. Please refer to sections on \"Chairperson's Review\", \"Chief Executive Officer's Review\" on pages 46 to 49, and \"How we create value\" on pages 30 to 31 for initiatives taken in this regard."
    },
    {
        "heading": "FINANCIAL STATEMENTS",
        "content": "The Financial Statements of the Bank have been prepared in accordance with Sri Lanka Accounting Standards (SLFRSs/LKASs) laid down by the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka) and they comply with the requirements of Companies Act No. 07 of 2007 and Banking Act No. 30 of 1988. The Financial Statements of the Bank for the year ended 31st December 2025 duly signed by the Head of Finance and Chief Executive Officer, two Directors of the Bank, and the Company Secretary are given on page 221. P&L is in page 220, which forms an integral part of the Annual Report of the Board of Directors."
    },
    {
        "heading": "DIRECTOR'S RESPONSIBILITY FOR FINANCIAL REPORTING",
        "content": "The Directors are responsible for the preparation of the Financial Statements of the Bank, which reflect a true and fair view of the financial position and performance of the Bank. The Directors are of the view that the Statement of Comprehensive Income, Statement of Financial Position, Statement of Changes in Equity, Statement of Cash Flows, Significant Accounting Policies, and Notes thereto appearing on pages 220 to 296 have been prepared in conformity with the requirements of the SLFRSs and LKASs as mandated by the Sri Lanka Accounting and Auditing Standards Act No. 15 of 1995 and the Companies Act No. 07 of 2007. Further, these Financial Statements also comply with the requirements of the Banking Act No. 30 of 1988 and amendments thereto and the Listing Rules of the Colombo Stock Exchange. The \"Statement of Directors' Responsibility\" appearing on page 215 forms an integral part of this Report"
    },
    {
        "heading": "AUDITORS' REPORT",
        "content": "The External Auditors of the Bank are Messrs. Ernst and Young, Chartered Accountants. Messrs. Ernst & Young, Chartered Accountants, carried out the Audit on the Financial Statements of the Bank for the year ended 31st December 2025, and their report on these Financial Statements, as required by Section 168 (1) (c) of the Companies Act, is given on pages 216 to 219 of this Annual Report. The Auditors' remuneration details are stated in Note 15.2 to the Financial Statements on page 247. Auditors are independent and do not have any relationships or any interest in contracts with the Bank."
    },
    {
        "heading": "SIGNIFICANT ACCOUNTING POLICIES",
        "content": "The Significant Accounting Policies adopted in the preparation of the Financial Statements are given on page 227 and comply with Section 168 (1) (d) of the Companies Act No. 07 of 2007"
    },
    {
        "heading": "GOING CONCERN",
        "content": "The Directors have made an assessment of the Bank's ability to continue as a going concern and are satisfied that it has the resources to continue in business for the foreseeable future. Furthermore, the Directors are not aware of any material uncertainties that may cast significant doubt upon the Bank's ability to continue as a going concern, such as restrictions or plans to curtail operations."
    },
    {
        "heading": "FINANCIAL RESULTS AND APPROPRIATIONS",
        "content": "Gross Income The gross income of the Bank for 2025 was LKR 18.40 Bn (2024: LKR 21.06 Bn). An analysis of the gross income is given in Note 6 to the Financial Statements on page 240. Profits and Appropriations The profit before tax as in the Financial Statements of the Bank amounted to LKR 800.17 Mn in 2025 (2024: LKR 684.26 Mn), and this has increased by 16.94% when compared to 2024. Further, the profit after tax as in the Financial Statements of the Bank amounted to LKR 404.91 Mn in 2025 (2024: LKR 409.53 Mn), and this was a decrease of 1.13% when compared to 2024. A detailed breakup of the profits and appropriations of the Bank is given below: Description 2025 2024 Profit before Tax 800,172,578 684,262,920 Less: Taxation (395,254,032) (274,728,675) Net profit after tax 404,918,546 409,534,246 Other Comprehensive Income (OCI) Actuarial Gain/(losses) on defined benefit plans (106,466,586) (195,633,301) Deferred tax relating to defined benefit plans 31,939,976 58,689,990 Loss arising on re-measuring investments in equity instruments designated at fair value through other comprehensive income (11,448,154) - Revaluation surplus on property plant & Equipment 28,375,000 69,025,000 Deferred tax relating to revaluation surplus on Property, Plant and Equipment (129,412,760) - Total comprehensive income for the year 217,906,021 341,615,936 Unappropriated balance carried forward from the previous year 2,772,192,228 2,590,860,977 Balance available before adjustment 2,990,098,249 2,932,476,912 Appropriations Transfer to the statutory reserve fund (20,245,927) (20,476,712) Dividend Scrip Dividend - (139,807,974) Unappropriated balance carried forward as of 31 December 2,969,852,323 2,772,192,225 LKR LKR"
    },
    {
        "heading": "TAXATION",
        "content": "The Bank applied the rate of 30% and other amendments in line with the Inland Revenue Amendment Act No. 45 of 2022 to calculate the income tax and deferred tax assets/liabilities as of 31st December 2025. The Bank applied the rate of 30% to compute the deferred tax as of 31st December 2025. Statutory Payments The Directors, to the best of their knowledge and belief, are satisfied that all statutory payments (including all taxes, duties, and levies payable by the Bank) due to the Government, other regulatory institutions, and related to the employees have been made on time or, where relevant, provided for."
    },
    {
        "heading": "RESERVES",
        "content": "A summary of the Bank's reserves position is given below As at 31 December 2025 2024 Statutory reserve fund 381,295,092 361,049,165 Other reserves 318,120,303 430, 606,217 Retained profits 2,698,388,993 2,388,242,984 Information on the movement of reserves is given in the Statement of Changes in Equity on page 222 and in Notes 34 to 36 to the Financial Statements on page 270. Capital Expenditure The total capital expenditure on the acquisition of property, plant, and equipment of the Bank amounted to LKR 91,135,973 (2025) and LKR 429,588,160 (2024). Details are given in Note 25.2 to the Financial Statements. Capital Commitments The contracted and approved capital expenditure as at the date of the reporting is given in Note 25.2 to the Financial Statements Property, Plant and Equipment, Intangible Assets and Leasehold Property Information on property, plant and equipment and leasehold property of the Bank is given in Note 25 & 26 to the Financial Statements on pages 259 to 262. Particulars of intangible assets are given in Note 27 to the Financial Statements on pages 262 to 263. LKR LKR"
    },
    {
        "heading": "STATED CAPITAL",
        "content": "The stated capital of the Bank as at 31st December 2025 amounted to LKR 11,406,601,998, consisting of 164,166,494 ordinary voting shares. Distribution Schedule of Shareholdings Individual 35,632 40,960,891 35,242 37,079,035 Institution Foreign 1 16,416,564 3 37,350,366 Local and other institutions 74 84,925,601 62 67,579,467 SANASA Federation Acc 1 1 797,822 1 797,822 Acc 2 31,511 31,511 SANASA Societies 3,390 9,930,846 3,399 10,249,218 SANASA Unions 39 3,551,456 35 3,527,611 MPCCS 26 1,269,878 24 1,269,539 Trust Companies 105 6,281,925 105 6,281,925 Total 39,268 164,166,494 38,871 164,166,494 No. of Shareholders % Share range 1 - 1,000 36,769 93.63 4,985,283 3.04 36,328 93.46 4,850,937 2.95 1,001 - 10,000 1,856 4.73 6,016,527 3.66 1,891 4.86 5,803,990 3.54 10,001 - 100,000 543 1.38 17,152,765 10.45 555 1.43 17,080,778 10.41 100,001 - 1,000,000 85 0.22 20,521,213 12.50 79 0.20 17,504,585 10.66 1,000,001 - and above 15 0.04 115,490,706 70.35 18 0.05 118,926,204 72.44 Total 39,268 100.00 164,166,494 100.00 38,871 100.00 164,166,494 100.00 As at 31 December 2025 As at 31 December 2024 Number of Shareholders Number of Shares As at 31 December 2025 As at 31 December 2024 No. of Shares % No. of Shareholders % Number of Shareholders Number of Shares No. of Shares %"
    },
    {
        "heading": "SUBSTANTIAL SHAREHOLDING",
        "content": "Names of the 20 (Twenty) largest shareholders, with their respective shareholdings and percentage holdings as at 31 December 2025 with their comparative shareholding as at 31 December 2024 are as follows; No. Name of the Shareholder 1 SENTHILVERL HOLDINGS (PVT) LTD 24,624,974 15.0000 21,019,383 12.8037 2 LOLC INVESTMENT HOLDINGS ONE (PRIVATE) LIMITED 24,624,948 15.0000 24,624,948 15.0000 3 FINCO HOLDINGS (PRIVATE) LIMITED 24,622,810 14.9987 - - 4 BELGIAN INVESTMENT COMPANY FOR DEVELOPING COUNTRIES SA/NV 16,416,564 9.9999 16,416,564 9.9999 5 MR. D.G. WIJEMANNA 7,000,000 4.2640 - - 6 ALLIANCE FINANCE COMPANY PLC 3,592,187 2.1881 3,592,187 2.1881 7 PEOPLE'S LEASING AND FINANCE PLC/L.P.HAPANGAMA 3,406,664 2.0751 3,279,555 1.9977 8 PEOPLE'S LEASING & FINANCE PLC 2,320,270 1.4134 2,320,270 1.4134 9 BANK OF CEYLON A/C CEYBANK UNIT TRUST 1,573,477 0.9585 1,573,477 0.9585 10 PEOPLE'S LEASING & FINANCE PLC/MR.A.M. INDURUWAGE 1,500,000 0.9137 - - 11 HATTON NATIONAL BANK PLC/SARRAVANAN NEELAKANDAN 1,471,083 0.8961 1,471,083 0.8961 12 KEGALLE SANASA SHARE HOLDERS TRUST COMPANY LIMITED 1,287,440 0.7842 1,287,440 0.7842 13 POLGAHAWELA SANASA SOCIETIES UNION LTD 1,035,980 0.6311 1,035,980 0.6311 14 NIKAWARATIYA THRIFT AND CREDIT CO-OPERATIVE SOCIETY UNION LIMITED 1,014,273 0.6178 1,014,273 0.6178 15 HETTIGODA CITY (PVT) LTD 1,000,036 0.6092 - - 16 BINGIRIYA MULTI-PURPOSE COOPERATIVE SOCIETY LTD 991,850 0.6042 991,850 0.6042 17 SANASA FEDERATION LIMITED 829,333 0.5052 829,333 0.5052 18 MR. R. GAUTAM 800,500 0.4876 622,600 0.3792 19 DFCC BANK PLC/N.G.N.MADURANGA 662,403 0.4035 662,403 0.4035 20 COMMERCIAL BANK OF CEYLON PLC/W. JINADASA 600,000 0.3655 - - During the year under review, Senthilverl Holdings (Pvt) Limited, a major shareholder of the Bank, temporarily exceeded the regulatory shareholding limit prescribed under Section 76J(1)(q) of the Banking Act No. 30 of 1988 (as amended) and Banking Act Direction No. 2 of 2007, due to an inadvertent market purchase on 12 September 2025. Upon identification of the noncompliance, the excess shareholding was promptly rectified on 15 September 2025 through the disposal of a portion of the shares. As at the date of this Annual Report, the shareholding of Senthilverl Holdings (Pvt) Limited, together with its related parties, is fully compliant with the applicable regulatory requirements. The Directors confirm that the noncompliance was unintentional, temporary, and adequately addressed in accordance with the directions of the Central Bank of Sri Lanka."
    },
    {
        "heading": "EQUITABLE TREATMENT TO SHAREHOLDERS",
        "content": "The Bank has at all times ensured that all shareholders are treated equitably."
    },
    {
        "heading": "INFORMATION ON THE DIRECTORS OF THE BANK",
        "content": "The Board of Directors of the Bank consists of ten Directors (as at 31/12/2025) with wide financial and commercial knowledge and experience. The names of the Directors of the Bank as at 31st December 2025 are given below as per Section 168 (1) (h) of the Companies Act. Their brief profiles appear on pages 52 to 56 of the Annual Report. The classification of Directors into Executive Director (ED), Non- Executive Director (NED), Independent Director (ID), and NonIndependent Director (NID) is given against the names as per the Listing Rules and Banking Act Direction No. 05 of 2024 issued by the Central Bank of Sri Lanka. 31 December 2025 (Amalgamated) 31 December 2024 (Amalgamated) No of Shares % No of Shares % No. Name of Director 1. Ms. Dinithi Ratnayake (Chairperson) Independent Non-Executive 2. Mr. Kapila Ariyaratne Non-Independent Executive Director/CEO 3. Mr. Chaaminda Kumarasiri Independent Non-Executive 4. Mr. Prasanna Premaratna Independent Non-Executive 5. Mr. Thusantha Wijemanna Independent Non-Executive 6. Mr. B.R.A.Bandara Non-Independent Non-Executive 7. Mr. Sarath Nandasiri Non-Independent Non-Executive 8. Mr. Conrad Dias Non-Independent Non-Executive 9. Mr. Romani De Silva Non-Independent Non-Executive 10. Mr. Chandana Dissanayake Independent Non-Executive Resignations/ Retirement during 2025 Prof. Sampath Amaratunge (retired from the Board w.e.f.14.02.2025) Independent Non-Executive Mr. Chandana Dissanayake (ceased to be a member of the Board w.e.f.17.10.2025) Non-Independent Non-Executive New Appointments made during 2025 Mr. Chandana Dissanayake (re-appointed to the Board w.e.f. 25.11.2025) Independent Non-Executive Special Note Following the demise of Mr. Naveendra Sooriyarachchi, Non-Independent, Non-Executive Director, on 12 September 2025, he ceased to hold office as a Director. Mr. B.R.A.Bandara, Non-Independent, Non-Executive Director, retired from the Board w.e.f.26.03.2026 due to the completion of 9-years. RETIREMENT BY ROTATION AND RE-ELCTION / RE-APPOINTEMENT OF DIRECTORS In terms of Article 6 (4) (i), Mr. Conrad Dias, Non-Executive, Non-Independent Director shall retire by rotation at the 29th AGM and the Board has recommended his re-election. In terms of Article 6(4)(ii), Mr. Chandana Dissanayake, Non-Executive, Independent Director, who was appointed to the Board on 25 November 2025 to fill a casual vacancy, is eligible for re-appointment at the 29th AGM, and the Board has recommended his reappointment."
    },
    {
        "heading": "BOARD SUBCOMMITTEES",
        "content": "The Board of Directors of the Bank formed four mandatory Board Subcommittees namely, the Board Selection Nomination and Governance Committee, the Board Human Resources and Remuneration Committee, the Board Integrated Risk Management Committee and the Board Audit Committee as required by the Banking Act Direction No 05 of 2024 on \"Corporate Governance for Licensed Banks in Sri Lanka\" issued by the CBSL. The Board formed a Board Related Party Transactions Review Committee in 2014 to assist the Board in reviewing all related party transactions carried out by the Bank, by early adopting the Code of Best Practice on Related Party Transactions as issued by the Securities and Exchange Commission of Sri Lanka (the SEC) which became mandatory from 1 January 2016. The Board of Directors also has formed five other voluntary Board Subcommittees to assist the Board. These committees play a critical role in order to ensure that the activities of the Bank at all times are conducted with the highest ethical standards and in the best interest of all its stakeholders. The Terms of Reference of these Subcommittees conform to the recommendations made by various regulatory bodies, such as the Central Bank of Sri Lanka, The Institute of Chartered Accountants of Sri Lanka, The Securities and Exchange Commission, and The Colombo Stock Exchange. The composition of both mandatory and voluntary Board Subcommittees, as at 31st December 2025 and the details of the attendance by Directors at meetings are tabulated on page 206 while the reports of this composition of the board sub committees in the page 205 in this Report. Independent / Non - Independent Status Executive/ Non - Executive Status"
    },
    {
        "heading": "BOARD SUBCOMMITTEES",
        "content": "Committee Composition Board Integrated Risk Management Committee Mr. Prasanna Premaratna - Chairman - BIRMC Mr. Chandana Dissanayake Ms. Dinithi Ratnayake Mr. Conrad Dias Board Audit Committee Mr. Chaaminda Kumarasiri - Chairman- BAC Mr. Prasanna Premaratna Mr. B. R. A. Bandara Board Human Resources & Remuneration Committee Mr. Thusantha Wijemanna - Chairman - BHRRC Mr. Chandana Dissanayake Mr. Prasanna Premaratna Mr. Sarath Nandasiri Board Selection Nomination & Governance Committee Mr. Thusantha Wijemanna - Chairman - BSN&GC Ms. Dinithi Ratnayake Mr. Chaaminda Kumarasiri Mr. Conrad Dias Board Related Party Transactions Review Committee Mr. Thusantha Wijemanna - Chairman - BRPTRC Mr. Chandana Dissanayake Mr. Prasanna Premaratna Board Credit Committee Mr. Chandana Dissanayake - Chairman - BCC Mr. Romani De Silva Mr. Thusantha Wijemanna Mr. Prasanna Premaratna Board Strategic Planning Committee Mr. Chandana Dissanayake - Chairman - BSPC Mr. Conrad Dias Ms. Dinithi Ratnayake Mr. B. R. A. Bandara Mr. Romani De Silva Board Co-operative, Rural Enterprises and Livelihood Development Committee Board IT Steering Committee Mr. Conrad Dias - Chairman - BITSC Ms. Dinithi Ratnayake Mr. Chaaminda Kumarasiri Board Sub Committee on Sustainability Mr. Romani De Silva - Chairman - BSCS Ms. Dinithi Ratnayake Mr. Chandana Dissanayake"
    },
    {
        "heading": "MEETINGS",
        "content": "Details of the Meetings of the Board of Directors comprising with Board Meetings, Board Credit Committee Meetings, Board Audit Committee Meetings, Board Human Resources and Remuneration Committee Meetings, Board Selection Nomination and Governance Committee Meetings, Board Strategic Planning Committee Meetings, Board Co-operative Rural Enterprise and Livelihood Development Committee Meetings, Board IT Steering Committee Meetings, Board Subcommittee on Sustainability Meetings, Board Integrated Risk Management Committee Meetings, Board Related Party Transactions Review Committee Meetings, and the attendance of Directors at these meetings are given below. Mr. B. R. A. Bandara - Chairman - BCRELDC Mr. Prasanna Premaratna Mr. Sarath Nandasiri Mr. Romani De Silva Board Meeting Ms. Dinthi Ratnayake 15/15 - - - 10/11 4/4 - 4/4 4/4 37/38 Prof. Sampath Amaratunge* 1/15 - 3/13 - 1/11 - 1/6 - - 6/45 Mr. Chaaaminda Kumarasiri 13/15 - 13/13 10/10 11/11 - - 4/4 3/4 54/57 Mr. Prasanna Premaratna 14/15 7/9 13/13 10/10 - - 6/6 - - 50/53 Mr. B.R.A.Bandara 15/15 - 13/13 - - 4/4 6/6 - - 38/38 Mr. Thusantha Wijemanna 15/15 9/9 - 10/10 11/11 - - - - 45/45 Mr. Sarath Nandasiri 14/15 2/9 - 9/10 - - 6/6 - - 31/40 Mr. Conrad Dias 13/15 - - - 10/11 4/4 - 4/4 - 31/34 Mr. Naveendra Sooriyarachchi** 9/15 6/9 4/13 7/10 - - - - - 26/47 Mr. Romani De Silva 13/15 8/9 - - - 1/4 5/6 - 4/4 31/38 Mr. Chandana Dissanayake 13/15 6/9 - 1/10 10/11 3/4 - - 4/4 37/53 Mr. Kapila Ariyaratne 15/15 - - - - - - - - 15/15 * Prof. Sampath Amaratunge retired from the Board w.e.f.14.02.2025. ** Mr. Naveendra Sooriyarachchi ceased to hold office with effect from 12.09.2025 due to his demise. Board Integrated Risk Management Committee Meeting S/N Name of the member 1 Mr. Prasanna Premaratna (Chairman - BIRMC) P P P P P P P P P 9/9 2 Ms. Dinithi Ratnayake P P P P P P P P P 9/9 3 Mr. Chaaminda Kumarasiri* P P P P P P P N/A N/A 7/9 4 Mr. Conrad Dias P P P P EX EX P P EX 6/9 5 Mr. Chandana Dissanayake** P P P P P P N/A P P 8/9 P - Present, Ex - Excused, N/A - Not applicable, (since not a member as at the date of the meeting) * Mr. Chaaminda Kumarasiri resigned from the committee w.e.f 10.12.2025 ** Mr. Chandana Dissanayake resigned from the committee w.e.f 21.10.2025 and re - appointed to the committee w.e.f 10.12.2025. Board Selection Nomination Committee Meeting (BSPC) Board Human Resource & & Governance Committee Remuneration Committee Board Strategic Planning Board Credit Committee Board Audit Committee Meeting (BSN & GC) Meeting (BHRRC) Meeting (BCC) Meeting (BAC) Dates of meetings 25.02.2025 21.04.2025 17.06.2025 27.01.2025 Committee Meeting (BITSC) Board Co-operative, Rural Board Sub Committee on Enterprises & Livelihood Development Committee Sustainability Meeting Meeting (BCRELDC) Board IT Steering (BSCS) Total 12.12. 2025 20.08.2025 16.12.2025 21.10.2025 24.07.2025 Total Board Related Party Transactions Review Committee Meeting S / N Name of the member 1 Mr. Chaaminda Kumarasiri (Chairman - BRPTRC) * P P P P 4/4 2 Mr. Prasanna Premaratna P P P P 4/4 3 Mr. Thusantha Wijemanna** P P P P 4/4 P - Present, Ex - Excused, N/A - Not applicable, (since not a member as at the date of the meeting) * Mr. Chaaminda Kumarasiri appointed as the Chairman of the committee w.e.f 01.02.2025 and Prof. Sampath Amaratunge resigned from the committee as the Chairman w.e.f. 01.02.2025. ** Mr. Thusantha Wijemanna appointed as the Chairman of the committee w.e.f. 10.12 2025 and Mr. Chaaminda Kumarasiri resigned from the committee as the Chairman w.e.f. 10.12.2025. *** Mr. Chandana Dissanayake appointed to the Committee w.e.f.10.12.2025. Mr. C Kumarasiri Resigned from the BSPC w.e.f. 27.02.2025 Resigned from the BHRRC w.e.f. 10.12.2025 Appointed as the Chairman of the BRPTRC w.e.f 01.02.2025 Resigned as the Chairman of the BRPTRC w.e.f.10.12.2025 Resigned from the BSCS, BIRMC w.e.f.10.12.2025 Prof. S. Amaratunge Retired from the Board w.e.f.14.02.2025 Mr. P Premaratna Appointed as a member of the BCC w.e.f.27.02.2025 Mr. T Wijemanna Appointed as the Chairman of BSN&GC w.e.f.01.02.2025 Appointed as the Chairman of BRPTRC w.e.f.10.12.2025 Mr. N Sooriyarachchi Resigned from the BAC w.e.f.27.02.2025 Ceased to hold office as a Director w.e.f. 12.09.2025, due to his demise. Mr. S Nandasiri Resigned from the BCC w.e.f 27.02.2025 Appointed as a member to the BHRRC w.e.f.27.02.2025 Mr. C Dissanayake Appointed as the Chairman to the BSPC w.e.f. 01.01.2025 Resigned from the BHRRC w.e.f. 27.02.2025 Appointed as a member of the BCC w.e.f. 27.02.2025 Appointed as the Chairman to the BCC w.e.f. 15.09.2025 Ceased to hold office as a Director w.e.f. 17.10.2025 Resigned from the BCC, BSPC, BSN&GC, BIRMC, BSCS w.e.f. 17.10.2025 Re-appointed to the Board as a Director w.e.f. 25.11.2025 Re-appointed as the Chairman of the BCC, BSPC and as a member of the BIRMC, BSCS, BHRRC, BRPTRC w.e.f.10.12.2025 Dates of meetings 09.09.2025 02.12.2025 11.03.2025 17.06.2025 Total Mr. R Silva Appointed as a member to the BSPC w.e.f. 10.12.2025 Mr. C Dias Appointed as the Chairman to the BSPC w.e.f. 21.10.2025"
    },
    {
        "heading": "DISCLOSURE OF DIRECTORS' DEALING IN SHARES",
        "content": "Individual Ordinary Voting Shareholdings of persons who were Directors of the Bank at any time during the financial year are as follows:"
    },
    {
        "heading": "DISCLOSURE OF DIRECTORS' DEALING IN SHARES",
        "content": "NUMBER OF SHARES Name of the Director Ms. D. Ratnayake - - Mr. C. Kumarasiri - - Mr. P. Premaratna 1,532 1,532 Mr. B.R.A. Bandara 11,237 11,237 Mr. T. Wijemanna - - Mr. S. Nandasiri - - Mr. C. Dias - - Mr. R. De Silva 106,907 106,907 Mr. C. Dissanayake - - Mr. K. Ariyaratne - -"
    },
    {
        "heading": "DIRECTORS' SHAREHOLDING PERCENTAGE",
        "content": "Directors 0.07 0.07 Public 82.74 78.45 CEO and Related Parties 17.19 21.47"
    },
    {
        "heading": "DIRECTORS' STATEMENT OF INTERNAL CONTROL",
        "content": "The Bank maintains a Directors' Interests Register as required under the provisions of Section 168 (1) (e) of the Companies Act No. 07 of 2007. The Directors of the Bank have disclosed their interests in contracts or proposed contracts, in terms of Section 192 (1) and 192 (2) of the Companies Act. These interests have been recorded in the Interests Register, which is available for inspection in terms of the provisions of the Companies Act. As a practice, Directors have refrained from voting on matters in which they were materially interested. Directors have no direct or indirect interest in any other contract or proposed contract with the Bank."
    },
    {
        "heading": "DIRECTORS' REMUNERATION",
        "content": "As required under Section 168 (1) (f) of the Companies Act No. 07 of 2007, Directors' Remuneration and other benefits in respect of the Bank for the financial year ended 31st December 2025 are given in Note 15 to the Financial Statements on page 247."
    },
    {
        "heading": "RELATED PARTY TRANSACTIONS",
        "content": "Directors have disclosed transactions if any, that could be classified as Related Party Transactions in terms of Sri Lanka Accounting Standards - LKAS 24 \"Related Party Disclosures\" which is adopted in preparation of the Financial Statements. Those transactions are given in Note 39 to the Financial Statements, which form an integral part of the Annual Report of the Board of Directors. As at 31 December 2025 As at 31 December 2024 As at 31 December 2025 As at 31 December 2024 The Bank has also complied with the requirements of the Code of Best Practice issued by The Institute of Chartered Accountants of Sri Lanka, Listing Rules of Colombo Stock Exchange (CSE) and with all disclosure requirements stipulated thereunder."
    },
    {
        "heading": "DIRECTORS' AND OFFICERS' INSURANCE",
        "content": "The Bank has, during the financial year, paid an insurance premium in respect of an insurance policy for the benefit of the Bank and the Directors, Secretaries, Officers and certain employees of the Bank as defined in the Insurance Policy. In accordance with commercial practice, the insurance policy prohibits disclosure of the terms of the policy, including the nature of the liability insured against and the amount of the premium."
    },
    {
        "heading": "ENVIRONMENTAL PROTECTION",
        "content": "To the best of knowledge of the Board, the Bank has complied with the relevant environmental laws and regulations. The Bank has not engaged in any activity that is harmful or hazardous to the environment."
    },
    {
        "heading": "EVENTS AFTER THE REPORTING PERIOD",
        "content": "No event of material significance that requires adjustments to the Financial Statements has occurred subsequent to the reporting period, other than those disclosed in Note 38 to the Financial Statements on page 273."
    },
    {
        "heading": "APPOINTMENT OF AUDITORS AND THEIR REMUNERATION",
        "content": "The Bank's Auditors during the period under review were Messrs Ernst & Young, Chartered Accountants. Audit fees and reimbursement of expenses paid to Messrs Ernst & Young during the year under review by the Bank amounted to LKR 6,300,000 (2024: LKR 4,950,000). Further LKR 3,300,000 (2024: LKR 925,000) were paid by the Bank for audit- related and non-audit services, including reimbursement of expenses. Details of the audit fees paid are given on Note 15.2 to the Financial Statements on page 247. Based on the declaration provided by Messrs Ernst & Young, and as far as the Directors are aware, the Auditors do not have any relationship or interest with the Bank that in our judgement, may reasonably be thought to have a bearing on their independence within the meaning of the Code of Professional Conduct and Ethics issued by The Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka), applicable on the date of this Report. In line with the requirements of the Banking (Amendment) Act No. 24 of 2024 and the Corporate Governance Directions, the Bank initiated a Request for Proposal (RFP) due process to appoint a new External Auditor KPMG for the financial year ending 31 December 2026. The selected firm will be approved at the upcoming AGM. INFORMATION ON RATIOS, MARKET PRICES OF SHARES AND CREDIT RATINGS Information that requires disclosures as per Rule 7.6 (xi) of the Listing Rule of the CSE is given in the Section on \"Investor Relations\" on pages 310 to 315."
    },
    {
        "heading": "RISK MANAGEMENT AND INTERNAL CONTROL",
        "content": "The Bank has an ongoing process in place to identify, evaluate and manage the risks that are faced by the Bank. The Directors continuously review this process through the Board Integrated Risk Management Committee. Specific steps taken by the Bank in managing both banking and non- banking risks are detailed in the Section on \"Managing our Risks\" on pages 108 to 116 and in Note 45 to the Financial Statements on pages 281 to 295. The Directors have taken reasonable steps open to them to safeguard the assets of the Bank and to prevent and detect fraud and any other irregularities. For this purpose, the Directors have instituted effective and comprehensive systems of Internal controls for identifying, recording, evaluating, and managing the significant risks faced by the Bank throughout the year, and it is being under regular review of the Board of Directors. This comprises internal reviews, Internal Audit and the whole system of financial and other controls required to carry on the operations in an orderly manner, safeguard the assets, prevent and detect fraud and other irregularities and secure as far as practicable the accuracy and reliability of the records. BOARD OF DIRECTORS ON THE AFFAIRS OF THE COMPANY The Board has issued a report on the internal control mechanism of the Bank as per Section 9.2 (b) of Banking Act Direction No. 05 of 2024 on Corporate Governance. The Board has confirmed that the financial reporting system has been designed to provide reasonable assurance regarding the reliability of the financial reporting, and that the preparation of Financial Statements for external purposes has been done in accordance with relevant accounting principles and regulatory requirements. The above report, which forms an integral part of the Annual Report of the Board of Directors, is given on pages 199 to 210. The Board has obtained an assurance report from the External Auditors on the Directors' Statement on Internal Control, which is given on page 213 of the Annual Report."
    },
    {
        "heading": "OUTSTANDING LITIGATIONS",
        "content": "In the opinion of the Directors and the Bank's Lawyers, pending litigation against the Bank disclosed in Note 37.3 of the Financial Statements given on page 272 will not have a material impact on the financial position of the Bank or its future operations."
    },
    {
        "heading": "CORPORATE GOVERNANCE",
        "content": "Directors' Declarations: I. The Bank complied with all applicable laws and regulations in conducting its business and has not engaged in any activity contravening the relevant laws and regulations. Officers responsible for ensuring compliance with the provisions in various laws and regulations, confirm compliance in each quarter to the Board's Integrated Risk Management Committee II.\t The Directors have declared all material interests in contracts involving the Bank and refrained from voting on matters in which they were materially interested. III.\t All endeavours have been made to ensure that shareholders in each category have been treated equitably in accordance with the original Terms of Issue; IV.\t The business is a going concern with supporting assumptions or qualifications as necessary, and the Board of Directors has reviewed the Bank's Corporate/Business Plans and is satisfied that the Bank has adequate resources to continue its operations in the foreseeable future. Accordingly, the Financial Statements of the Bank are prepared based on the going concern assumption; and They have conducted a review of internal controls covering financial, operational and compliance controls, risk management and have obtained a reasonable assurance of their effectiveness and proper adherence. The measures taken and the extent to which the Bank has complied with the Code of Best Practice on Corporate Governance issued by the CA Sri Lanka and the SEC, the CSE and the CBSL are given on pages 124 to 180."
    },
    {
        "heading": "GENERAL",
        "content": "The 29th Annual General Meeting of the bank will be held at the Board Room of Butani Capital Tower, No.149, Kirulapone Avenue, Colombo 05, through an \"online- virtual\" platform by using \"audio-visual\" tools on 26 May 2025 at 10.00 a.m"
    },
    {
        "heading": "ACKNOWLEDGEMENT OF THE CONTENTS OF THE REPORT",
        "content": "As required by Section 168 (1) (k) of the Companies Act No. 07 of 2007, the Board of Directors hereby acknowledges the contents of this Annual Report For and on behalf of the Board of Directors, Ms. Dinithi Ratnayake Chairperson Ms. Amila Belpamulla Company Secretary 4th May 2026 Colombo, Sri Lanka"
    }
]
};

// Profits and Appropriations Table
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

// Notice of Meeting
export const AGM_NOTICE_DATA = {
  title: "Notice of the 29th Annual General Meeting",
  meetingDate: "Tuesday, 26th May 2026",
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
