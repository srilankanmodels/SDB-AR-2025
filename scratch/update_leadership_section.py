import re

with open("src/components/LeadershipSection.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update SubSection type
content = content.replace(
    'type SubSection = "chairperson" | "ceo" | "board" | "management" | "senior" | "chief-managers";',
    'type SubSection = "chairperson" | "ceo" | "board" | "management" | "chief-managers" | "senior";'
)

# 2. Update tabs array
old_tabs = """        {[
          { id: "chairperson", label: "Chairperson's Message" },
          { id: "ceo", label: "CEO's Review" },
          { id: "board", label: "Board of Directors" },
          { id: "management", label: "Corporate Management" },
          { id: "senior", label: "Senior Management" },
          { id: "chief-managers", label: "Chief Managers" }
        ]}"""

new_tabs = """        {[
          { id: "chairperson", label: "Chairperson's Message" },
          { id: "ceo", label: "CEO's Review" },
          { id: "board", label: "Board of Directors" },
          { id: "management", label: "Corporate Management" },
          { id: "chief-managers", label: "Chief Managers" },
          { id: "senior", label: "Senior Management" }
        ]}"""

content = content.replace(old_tabs, new_tabs)

# 3. Update useEffect listener for tabs
content = content.replace(
    'if (detail && ["chairperson", "ceo", "board", "management"].includes(detail)) {',
    'if (detail && ["chairperson", "ceo", "board", "management", "chief-managers", "senior"].includes(detail)) {'
)

# 4. Update Chairperson Message
chairperson_narrative = """                {/* Official PDF Action Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-sdb-purple/10 via-sdb-purple/5 to-white border border-sdb-purple/20 p-4 rounded-2xl">
                  <div className="flex items-center space-x-2.5">
                    <BookOpen className="w-5 h-5 text-sdb-purple shrink-0" />
                    <div className="text-left">
                      <h5 className="font-serif font-bold text-sm text-sdb-purple">Chairperson’s Message (Official Audited Report)</h5>
                      <p className="text-xs text-slate-500 font-mono">Pages 43–45 of Published Annual Report</p>
                    </div>
                  </div>
                  <a
                    href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=43"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-sdb-purple hover:bg-sdb-purple-dark text-white px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-sm shrink-0"
                  >
                    <span>Read Full Message in PDF (Pages 43–45)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Highlight Quote */}
                <div className="glass-card rounded-3xl border-l-4 border-sdb-purple p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-r from-sdb-purple/5 to-transparent">
                  <Quote className="w-10 h-10 text-sdb-purple/10 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "Responding to emerging economic opportunities, SDB bank recorded improved financial results across all key business segments in the financial year 2025. The Bank achieved a Profit Before Tax of LKR 800.17 Mn, reflecting an increase of 16.93% compared to 2024. This performance was supported by expansion across our core portfolios, while also improving asset quality, with Impaired Loans (Stage 03) to total loans declining from 6.93% to 5.36%."
                  </p>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Dear Stakeholders,
                    </h4>
                    <p>
                      The global economy continued to be strongly adaptive in 2025, amidst shifting geopolitical trends and US policy shocks. International trade remained relatively robust, supported by stabilising trade tensions towards the third quarter, and strong private sector investments in advanced technologies, particularly Artificial Intelligence.
                    </p>
                    <p>
                      Against this backdrop of global recovery and sustained domestic political stability, Sri Lanka too recorded encouraging progress during the year. Economic growth was supported by declining interest rates and a period of deflation that prevailed until around August. The most significant distraction to sustained growth was Cyclone Ditwah, at the end of November 2025, which temporarily disrupted economic activity across the entire country. However, the swift recovery once again demonstrated the remarkable resilience of the Sri Lankan people. Overall, this stable environment proved conducive for the banking sector, as stronger demand for credit and financial services boosted banking industry expansion.
                    </p>
                    <p>
                      Your Bank was well prepared to harness the emerging opportunities of 2025. I am therefore pleased to convey the good news that SDB bank concluded 2025 with improved financial performance, while further strengthening the foundation for sustainable future growth.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Our Performance in a Nutshell
                    </h4>
                    <p>
                      Responding to emerging economic opportunities, SDB bank recorded improved financial results across all key business segments in the financial year 2025. The Bank achieved a Profit Before Tax of LKR 800.17 Mn, reflecting an increase of 16.93% compared to 2024. This performance was supported by expansion across our core portfolios, while also improving asset quality, with Impaired Loans (Stage 03) to total loans declining from 6.93% to 5.36% as of December 31, 2025.
                    </p>
                    <p>
                      While focusing on growth and profitability, the Bank remained committed to supporting segments that continued to experience the protracted effects of the economic crisis. During the year, we provided relief measures, including tenor reductions and interest concessions, to assist small businesses and individuals in their recovery journey.
                    </p>
                    <p>
                      We also maintained our business philosophy of inclusivity and diversity, ensuring that our business model is closely aligned with the country’s development priorities, through our strong focus on SMEs and women entrepreneurs. In 2025, the SME portfolio grew by 45.41% in keeping with the bank’s priority of supporting the financial needs of the sector. We’re proud to report that at year-end 2025, women accounted for 43% of our total clientele.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Partnership with Co-operatives
                    </h4>
                    <p>
                      Co-operatives form another significant client segment of our bank, given our history of being established by the Sanasa Co-operative movement. The strong relationships with co-operatives have led to the bank’s close ties with communities across the country. By channelling finance and advisory services to these communities, we are helping stimulate economic activity at the grassroots. Through our focus on agriculture and value-chain financing, we are also linking these enterprises with broader markets, thereby fostering sustainable economic ecosystems.
                    </p>
                    <p>
                      In 2025, we continued to strengthen the partnership with co-operatives by providing technical support and financial literacy education, digital access to societies across the country and designating a priority counter at our branches, in recognition of their loyalty to the bank. Through its membership, the co-operative network also indirectly connects the bank to a large group of women entrepreneurs. We continue to develop new ways of engaging with the island-wide network of cooperatives by leveraging digital solutions.
                    </p>
                    <p>
                      We are of the view that the next generation of youth leaders and membership of co-operatives will be quick to adopt digital solutions, indicating a new era of possibilities. In addition, we are extending our SME facilities to cooperative-linked enterprises that are ready to upscale. This includes the full range of financial, advisory, and digital banking services to modernise and integrate these businesses into bigger markets. Through this approach, the Bank is gradually extending its influence upwards, from micro-enterprises to medium-sized SMEs, and cementing long-term relationships based on mutual trust.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Strategic Progress
                    </h4>
                    <p>
                      Under our Agri-Financing and Value Chain strategy, we have commenced engaging SMEs operating in strategic growth areas of Sri Lanka’s food and agriculture sector. To ensure our interventions are both practical and sustainable, we are also working closely with leading agricultural specialists. These efforts will also contribute towards enhancing national food security and foreign exchange earnings.
                    </p>
                    <p>
                      The Rural Upliftment Programme, which was launched in 2024, is now gaining traction, and we have engagements across the country. During the year, the programme grew to 3,991 beneficiaries onboarding over 80 entrepreneurs, with a large share of women and cooperatives. We are working on projects such as the Heritage Hands, which is manufacturing Kitul products in Deraniyagala, sustainable tourism in Attanagalla, Walawwita, and Avissawella, and livelihood development programmes for fishing communities in the area between Kuchchaveli and Uppuweli, to name a few ongoing initiatives.
                    </p>
                    <p>
                      Although our formal collaboration with USAID concluded during the year, the Bank remains committed to strengthening its climate adaptation capabilities in response to the growing challenges posed by climate change.
                    </p>
                    <p>
                      Digitisation remains another strategic priority. We continued to enhance operational efficiencies and streamline internal processes while improving customer accessibility through digital channels. Our digital onboarding capability allows customers to open accounts remotely through multilingual platforms, promoting financial inclusion. The SDB Upay application, functioning both as a banking app and a digital wallet, offers advanced features that place SDB Bank at the forefront of digital banking innovation within the sector.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Ensuring Good Governance
                    </h4>
                    <p>
                      I am pleased with the progress made during the year in strengthening the Bank’s governance, risk management, and compliance frameworks. The Bank successfully met all compliance requirements under the new Banking Act for the 2025 financial year and continues to enhance its regulatory and governance standards.
                    </p>
                    <p>
                      We also completed the planned improvements in portfolio underwriting standards and credit risk frameworks that were identified during the 2024 review of our risk models. Comprehensive training programmes were conducted to strengthen staff capabilities in these areas, ensuring that the Bank is well-positioned to manage the evolving risk landscape. While our development-oriented approach focuses on empowering SMEs and cooperative-based enterprises, we continue to adopt prudent, risk-based pricing mechanisms to safeguard the Bank’s financial sustainability.
                    </p>
                    <p>
                      The Board, meanwhile, met regularly to ensure strong governance and effective oversight. I also take this opportunity to remember Mr Naveendra Sooriyarachchi, who passed away during the year. Mr Sooriyarachchi was a member of the SDB Bank Board from 2021 as a Non-Executive, Non-Independent Director, and I extend my sincere appreciation for the invaluable support and guidance he provided throughout his tenure.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Charting a New, Sustainable Course
                    </h4>
                    <p>
                      During the year, we worked closely with Rabo Partnerships to develop a comprehensive three-year growth strategy that will guide SDB Bank’s next phase of development from 2026 to 2029. Representing a transformative shift, the bank will also work towards ensuring that the strategy is aligned with the Sustainability Standards and Certification Initiative (SSCI), which is an internationally recognised framework that supports financial institutions to transition towards sustainable business models.
                    </p>
                    <p>
                      A central part of the Bank’s transformation will be the systematic measurement of the impacts of all our activities, which would make SDB bank unique among financial services providers in the country. This transformation will be a gradual process unfolding over the coming years, and will encompass all operations and personnel, fundamentally reshaping how the Bank functions. We have already taken the first steps toward this vision.
                    </p>
                    <p>
                      In the current financial year, we refined the Bank’s purpose to align with this strategic objective and established a set of high-impact goals linked to both the United Nations Sustainable Development Goals and Sri Lanka’s national development agenda. Additionally, we have begun integrating impact measurement into our projects and portfolios. We believe that this data-driven approach will enable the Bank to not only measure its socio-economic and environmental contributions, but also to focus on areas where it can have the greatest impact.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Plans for the Future
                    </h4>
                    <p>
                      SDB bank concluded 2025 on the cusp of a transformative journey, having completed much of the groundwork required to support its next phase of transition. As we operationalise our new strategy in 2026, we will remain attentive to global developments and their potential impact on the Sri Lankan economy.
                    </p>
                    <p>
                      We will also evaluate opportunities arising from the Central Bank’s proposed consolidation plans for the banking sector. While the Bank remains open to potential partnerships that could strengthen our asset base and earnings, our priority remains to preserve our unique identity as a development-focused bank with a longstanding commitment to the SME and cooperative sectors.
                    </p>
                    <p>
                      Going forward, our short-term priorities will remain firmly aligned with our strategic roadmap, and we will continue to leverage innovative solutions to enhance our value proposition, while remaining alert to emerging opportunities.
                    </p>
                  </div>

                  <div className="bg-sdb-purple/5 p-6 rounded-2xl border border-sdb-purple/10 space-y-3">
                    <h5 className="font-serif font-bold text-sdb-purple">Appreciation</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      In closing, I would like to extend my sincere gratitude to our shareholders for their continued trust, confidence, and support. I also wish to thank our valued customers who have accompanied us through this journey of transformation. My appreciation also goes to my colleagues on the Board, our Corporate Management team, and the entire SDB bank staff for their dedication and hard work during the year. I also acknowledge the valuable contributions of our international partners, whose expertise and experience continue to support our journey. Finally, I extend my thanks to our regulators, lenders, and all other stakeholders for their continued guidance and support. I am confident our continued collaborations will yield greater value for all stakeholders in the future.
                    </p>
                    <div className="pt-2 text-right font-serif font-bold text-sdb-purple text-sm">
                      Ms. Dinithi Ratnayake<br />
                      <span className="font-sans text-xs font-normal text-sdb-coral">Chairperson - Non-Executive, Independent Director</span><br />
                      <span className="text-[11px] font-mono text-slate-400 font-normal">4th May 2026 | Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <a
                      href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=43"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold font-mono text-sdb-purple hover:text-sdb-coral transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download / Read Full Chairperson's Message in Audited PDF (Pages 43–45)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>"""

# Replace Chairperson message narrative
pattern_chairperson = r'\{\/\* Official PDF Action Banner \*\/[\s\S]*?Download \/ Read Full Chairperson\'s Message in Audited PDF \(Pages 16–19\)[\s\S]*?<\/div>\s*<\/div>'
# Let's replace the entire narrative block inside activeTab === "chairperson"
content = re.sub(
    r'\{\/\* Official PDF Action Banner \*\/[\s\S]*?<span>Download \/ Read Full Chairperson\'s Message in Audited PDF \(Pages 16–19\)</span>[\s\S]*?</a>\s*</div>\s*</div>',
    chairperson_narrative,
    content
)

# 5. Update CEO Review
ceo_narrative = """                {/* Official PDF Action Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-600/10 via-emerald-600/5 to-white border border-emerald-600/20 p-4 rounded-2xl">
                  <div className="flex items-center space-x-2.5">
                    <BookOpen className="w-5 h-5 text-emerald-800 shrink-0" />
                    <div className="text-left">
                      <h5 className="font-serif font-bold text-sm text-emerald-900">CEO's Strategic Review (Official Audited Report)</h5>
                      <p className="text-xs text-slate-500 font-mono">Pages 47–49 of Published Annual Report</p>
                    </div>
                  </div>
                  <a
                    href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all shadow-sm shrink-0"
                  >
                    <span>Read Full Review in PDF (Pages 47–49)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Highlight Quote */}
                <div className="glass-card rounded-3xl border-l-4 border-sdb-green p-6 md:p-8 relative text-left shadow-sm bg-gradient-to-r from-sdb-green/5 to-transparent">
                  <Quote className="w-10 h-10 text-sdb-green/10 absolute top-4 right-4" />
                  <p className="font-serif text-lg md:text-xl text-sdb-purple font-medium italic leading-relaxed">
                    "I am pleased to report a year of transformation for SDB bank in the financial year 2025, marking a decisive turning point in the Bank’s history. Following three consecutive years of contraction in the loan portfolio up to 2024, we successfully reversed the downward spiral in 2025. Loans to customers increased by 16.72%, from LKR 99.73 billion to LKR 116.40 billion."
                  </p>
                </div>

                <div className="space-y-6 text-slate-700 leading-relaxed text-sm md:text-base">
                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      A Decisive Turning Point in SDB Bank's History
                    </h4>
                    <p>
                      I am pleased to report a year of transformation for SDB bank in the financial year 2025, marking a decisive turning point in the Bank’s history. During the 12 months under review, we strengthened our financial position, governance frameworks, digital capabilities, and human capital, while also building our environmental and social foundation to support sustainable growth over the long term.
                    </p>
                    <p>
                      We also deepened our economic impact through the Rural Upliftment Programme. In 2025, SDB bank was privileged to contribute to Sri Lanka’s national economic development through this programme by promoting women’s entrepreneurship, advancing community-based tourism, developing essential infrastructure, and enhancing financial literacy. By encouraging women’s entrepreneurship in cottage industries in the North Central, North Western, Central, and Sabaragamuwa provinces, the Bank helped break the cycle of poverty and empowered groups that were previously marginalised to become active contributors to national growth.
                    </p>
                    <p>
                      Estate sector women, who traditionally had limited opportunities beyond daily wage labour, were supported through the introduction of machinery centres and training programmes designed to fit their daily routines, enabling them to transition into budding entrepreneurs. In collaboration with the Western Province Tourism Board, SDB bank also promoted community-based tourism, honouring Sri Lanka’s unique culture and traditions, while contributing to a turning point in the tourism industry.
                    </p>
                    <p>
                      Furthermore, the Bank encouraged value-added production using underutilised local resources such as jackfruit, pumpkin, and indigenous fruits, thereby strengthening national production and creating new economic opportunities for rural communities. These efforts reflect SDB bank’s commitment to fulfilling its national responsibility as Sri Lanka’s only private development bank, empowering communities, fostering entrepreneurship, and promoting sustainable industries in order to advance inclusive economic development.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      A Year of Transformation & Loan Portfolio Reversal
                    </h4>
                    <p>
                      The Bank’s financial position improved significantly. Following three consecutive years of contraction in the loan portfolio up to 2024, we successfully reversed the downward spiral in 2025. Loans to customers increased by 16.72%, from LKR 99.73 billion as at end-December 2024, to LKR 116.40 billion by end-December 2025.
                    </p>
                    <p>
                      This growth was achieved through credit expansion across all products and market segments of leasing, pawning, retail banking and business banking, with total disbursements of over LKR 100 billion during the year. We remained the bank of choice to Sri Lanka’s cooperative sector, while also expanding our footprint in the SME segment. Over 25% of the Bank’s total lending during 2025 was channelled into SMEs, reflecting SDB bank’s growing contribution to national economic recovery and inclusive growth during the year.
                    </p>
                    <p>
                      Despite the expansion of the loan book, asset quality improved, with a reduction in the overall Impaired Loans (Stage 3) to total loan Ratio (%) from 6.93% in 2024 to 5.36%. This reflects disciplined credit underwriting, effective portfolio monitoring, and a strong emphasis on maintaining quality in all new lending.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Customer Rehabilitation & Resolving Legacy Portfolios
                    </h4>
                    <p>
                      As a development bank, our mandate extends beyond short-term profitability to supporting long-term economic and social development. However, the combined effects of the COVID-19 pandemic and the subsequent economic crisis resulted in many customers experiencing cash flow problems as well as repayment tenor extensions due to steep interest rate fluctuations during the crisis. We responded by extending repayment periods, providing targeted relief to borrowers, and continuing to prioritise customer rehabilitation.
                    </p>
                    <p>
                      We have also focused on resolving legacy portfolio challenges arising from tenor extensions. Approximately 12,000 customers benefited from loan restructurings in 2025, with many able to access additional financing under improved terms. These measures helped resolve nearly one-third of the previously troubled portfolio, representing substantial progress in strengthening the financial position of the affected customers as well as our balance sheet.
                    </p>
                    <p>
                      We also expended approximately LKR 1 billion in providing relief to affected customers, which eroded our profitability for the year. Nevertheless, despite these interventions, we have increased our profitability (PBT) year-on-year, from LKR 684 Mn in 2024 to LKR 800 Mn, which is a growth of 16.94%. We also targeted higher fee income through avenues such as Bancassurance while minimising leakages through automation of processes as well as close monitoring. Our fee income accordingly improved from LKR 631 Mn in 2024 to LKR 716 Mn in 2025. We intend to focus on this further in the coming year enriching our revenue mix.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Managing External Shocks
                    </h4>
                    <p>
                      The adverse impact of Cyclone Ditwah on Sri Lanka’s agriculture sector posed a significant national challenge. However, as the event occurred during the tail end of the year, in November 2025, its impact on the Bank’s overall annual performance was minimal. While branches in Kaduwela, Ekala and Giriulla sustained significant damage, operations were restored within a few days, with no loss of customer data, or material inconvenience to customers.
                    </p>
                    <p>
                      A few community development projects under our Rural Upliftment Programme, particularly in agriculture, in areas such as Ududumbara, were also affected. These losses are not a material threat to the Bank’s financial stability and the projects will be reviewed and revived. We are also considering the integration of enhanced climate resilience strategies, such as smart agriculture solutions.
                    </p>
                    <p>
                      To address potential food shortages due to the widespread destruction of crops, we have also initiated short-term crop cultivations in unaffected provinces, with harvests expected to reach markets by early 2026. A new processing centre for fish and seaweed will also be opened in Trincomalee town in 2026, which will improve the nutritional status of low-income communities. Increasing the harvest from the ocean can also soften the impact of agricultural losses. In fact, we are involved in some highly impactful development projects under our Rural Upliftment Programme, mainly through our cooperative connections, and I urge our stakeholders to refer to the Social Capital chapter for details on these projects.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Sustainable Transformation & Digital Roadmap
                    </h4>
                    <p>
                      A key aspect of our ongoing transformation is our new corporate strategy that will guide the Bank over the three years from 2026 to 2029. This strategy was formulated in collaboration with Rabo Partnerships, a wholly owned subsidiary of Rabobank, drawing on its deep expertise in cooperative banking, agriculture finance, food security and financial inclusion. We have also developed a dedicated agri-financing model that is aimed at positioning SDB bank as a key development partner for the country’s agriculture sector over the long term. Therefore, we are now equipped with a clear roadmap for sustained transformation and growth, targeting greater positive social and environmental impacts.
                    </p>
                    <p>
                      Another significant development in 2025 was bringing previously dispersed departments under one roof in Colombo as a second head office. This will significantly smooth back-end processing as we scale up our SME, pawning, leasing and cooperative banking portfolios in the new financial year.
                    </p>
                    <p>
                      The digital transition remains central to our growth agenda. Significant investments have already been made in the previous year to modernise the technology infrastructure, and this will be the transformation base for the Bank as we move forward. We are also introducing digital solutions to cooperative societies and SMEs, and are gradually connecting them to value chains and markets. Our value chain financing initiatives have continued to expand during the year, creating new avenues for SME growth, particularly in the agriculture, dairy and fishing sectors, by linking smaller enterprises to the supply chains of larger corporates and providing more secure market access.
                    </p>
                    <p>
                      In parallel with these developments, we have invested in upskilling, talent acquisition and leadership development across the Bank to align our skill sets with strategic priorities and evolving market demands.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-serif font-bold text-lg text-sdb-purple border-b border-sdb-purple/10 pb-2">
                      Outlook & Navigating Challenges
                    </h4>
                    <p>
                      We have concluded 2025 with SDB bank well-positioned to deliver consistent growth over the medium term. Given the central role of agriculture in Sri Lanka’s economy, exports, livelihoods and food security, SDB bank will continue to expand its role in the country’s SME and agriculture sectors, while also expanding our share in other economic areas.
                    </p>
                    <p>
                      We are also cognisant of the inherent climate-related risks and external uncertainties we face, particularly when expanding our presence in agriculture. However, I am confident that SDB bank’s strategy of selective sector participation, careful risk assessments, strengthening the balance sheet and enhanced organisational capability will enable us to navigate future challenges with resilience. Accordingly, we anticipate maintaining positive growth momentum in 2026.
                    </p>
                  </div>

                  <div className="bg-sdb-green/5 p-6 rounded-2xl border border-sdb-green/10 space-y-3">
                    <h5 className="font-serif font-bold text-sdb-purple">Appreciation & Valued Partnerships</h5>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                      I conclude my message by extending my sincere appreciation to our major shareholders for their continued confidence and support, and in particular to Rabo Partnerships for its contributions to our strategic transformation. During the year, FMO exited as a major shareholder. Nevertheless, we continue to maintain a close, constructive working relationship, with FMO remaining a strategic stakeholder and contributor in our planning process. We also expanded our network of partnerships, particularly within agriculture and rural development initiatives, and I gratefully acknowledge the support we have received from all of them. I am grateful for the prudent guidance of the Board of Directors, and for the dedication and commitment of our management team and staff, who have worked tirelessly to deliver the performance outcomes of this year. Above all, I thank our customers, whose trust and partnership remain our greatest strength. As we enter a new era of growth and opportunity, we look forward to continuing this journey together.
                    </p>
                    <div className="pt-2 text-right font-serif font-bold text-sdb-purple text-sm">
                      Mr. Kapila Ariyaratne<br />
                      <span className="font-sans text-xs font-normal text-sdb-green">Chief Executive Officer</span><br />
                      <span className="text-[11px] font-mono text-slate-400 font-normal">4th May 2026 | Colombo, Sri Lanka</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <a
                      href="https://cdn.cse.lk/cmt/upload_report_file/1182_1777891461840.pdf#page=47"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-xs font-bold font-mono text-emerald-800 hover:text-sdb-coral transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download / Read Full CEO's Review in Audited PDF (Pages 47–49)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>"""

content = re.sub(
    r'\{\/\* Official PDF Action Banner \*\/[\s\S]*?<span>Download \/ Read Full CEO\'s Review in Audited PDF \(Pages 20–23\)</span>[\s\S]*?</a>\s*</div>\s*</div>',
    ceo_narrative,
    content
)

# 6. Corporate Management quick nav (Chief Managers button first, Senior Management second)
old_corp_nav = """                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("chief-managers")}
                      className="px-4 py-2.5 bg-white hover:bg-sdb-purple/5 text-sdb-purple border border-sdb-purple/20 rounded-xl text-xs font-mono font-bold transition-all shadow-xs hover:border-sdb-purple/40 flex items-center gap-2 cursor-pointer"
                    >
                      <Building2 className="w-3.5 h-3.5 text-sdb-coral" />
                      <span>Chief Managers ({CHIEF_MANAGERS.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("senior")}
                      className="px-4 py-2.5 bg-sdb-purple hover:bg-sdb-purple/90 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <Users className="w-3.5 h-3.5 text-amber-300" />
                      <span>Senior Management ({SENIOR_MANAGEMENT.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>"""

new_corp_nav = """                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setActiveTab("chief-managers")}
                      className="px-4 py-2.5 bg-sdb-purple hover:bg-sdb-purple/90 text-white rounded-xl text-xs font-mono font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                    >
                      <Building2 className="w-3.5 h-3.5 text-amber-300" />
                      <span>Chief Managers ({CHIEF_MANAGERS.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("senior")}
                      className="px-4 py-2.5 bg-white hover:bg-sdb-purple/5 text-sdb-purple border border-sdb-purple/20 rounded-xl text-xs font-mono font-bold transition-all shadow-xs hover:border-sdb-purple/40 flex items-center gap-2 cursor-pointer"
                    >
                      <Users className="w-3.5 h-3.5 text-sdb-coral" />
                      <span>Senior Management ({SENIOR_MANAGEMENT.length})</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>"""

content = content.replace(old_corp_nav, new_corp_nav)

# 7. Move Chief Managers panel block to be immediately after Corporate Management and before Senior Management
# Extract Chief Managers motion.div block
cm_block_match = re.search(r'(\{activeTab === "chief-managers" && \(\s*<motion\.div[\s\S]*?<\/motion\.div>\s*\)\})', content)
if cm_block_match:
    cm_block = cm_block_match.group(1)
    # Remove it from its current position
    content = content.replace(cm_block, "")
    # Find activeTab === "management" closing
    # We want to place it right after activeTab === "management" block
    mgmt_end = content.find('{activeTab === "senior" && (')
    if mgmt_end != -1:
        content = content[:mgmt_end] + cm_block + "\n\n          " + content[mgmt_end:]

with open("src/components/LeadershipSection.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully updated src/components/LeadershipSection.tsx!")
