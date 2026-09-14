import json
import re

with open('scratch/personnel_final.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def clean_str(s):
    if not s: return ""
    return s.replace('"', '\\"').strip()

# Corporate management bios and categories preserved from current data
corp_bios = {
    "Mr. Kapila Ariyaratne": "Leading SDB bank's strategic transformation and long-term sustainable growth.",
    "Mr. Chitral De Silva": "Driving retail, MSME, leasing, and commercial lending expansion across 94 branches.",
    "Mr. Anura Yapa": "Overseeing bank-wide loan underwriting, portfolio quality, and asset recovery.",
    "Mr. Dinesh Thomas": "Spearheading SDB's core banking cloud infrastructure and digital payment ecosystem.",
    "Mr. Dhananjaya Dayananda": "Ensuring independent audit assurance, operational compliance, and internal controls.",
    "Mr. Dinuke Wijesinghe": "Managing market risk, credit risk models, and Basel III regulatory risk frameworks.",
    "Ms. Lakmini Muththunga": "Optimizing central operational workflows, trade processing, and branch back-office systems.",
    "Mr. Aruna Jayasekera": "Transforming talent management, leadership development, and employee welfare.",
    "Ms. Krishani Enoka": "Managing foreign exchange trading, liquidity ratios, and money market investments.",
    "Ms. Mihiri Attanayake": "Specializing in agricultural value chain credit, tea smallholder loans, and microfinance.",
    "Ms. Pavithra Liyanage": "Directing corporate legal strategy, contract governance, and litigation management.",
    "Mr. Bhanu Wijayaratne": "Enforcing AML/CFT regulations, CBSL compliance guidelines, and corporate ethics.",
    "Mr. Binesh Aravinda": "Directing branch operations, deposit mobilization, and regional distribution channels.",
    "Ms. Amila Belpamulla": "Managing Board governance, share registration, and Colombo Stock Exchange disclosures.",
    "Mr. Lasantha Edirisuriya": "Fostering strategic partnerships with primary SANASA cooperative unions nationwide.",
    "Mr. Sanjeeva Jayasinghe": "Leading corporate financial reporting, statutory taxation, and budget planning."
}

corp_categories = {
    "Mr. Kapila Ariyaratne": "Corporate Executive",
    "Mr. Chitral De Silva": "Corporate Executive",
    "Mr. Anura Yapa": "Corporate Executive",
    "Mr. Dinesh Thomas": "Corporate Executive",
    "Mr. Dhananjaya Dayananda": "Governance & Control",
    "Mr. Dinuke Wijesinghe": "Governance & Control",
    "Ms. Lakmini Muththunga": "Business & Operations",
    "Mr. Aruna Jayasekera": "Governance & Control",
    "Ms. Krishani Enoka": "Corporate Executive",
    "Ms. Mihiri Attanayake": "Business & Operations",
    "Ms. Pavithra Liyanage": "Governance & Control",
    "Mr. Bhanu Wijayaratne": "Governance & Control",
    "Mr. Binesh Aravinda": "Business & Operations",
    "Ms. Amila Belpamulla": "Governance & Control",
    "Mr. Lasantha Edirisuriya": "Business & Operations",
    "Mr. Sanjeeva Jayasinghe": "Corporate Executive"
}

# Order corporate management matching the official book:
# Page 57: Kapila, Chitral, Anura, Dinesh, Dhananjaya, Dinuke, Lakmini, Aruna, Krishani
# Page 58: Mihiri, Pavithra, Bhanu, Binesh, Amila, Lasantha, Sanjeeva (Sanjeeva must come last)
corp_order = [
    "Mr. Kapila Ariyaratne",
    "Mr. Chitral De Silva",
    "Mr. Anura Yapa",
    "Mr. Dinesh Thomas",
    "Mr. Dhananjaya Dayananda",
    "Mr. Dinuke Wijesinghe",
    "Ms. Lakmini Muththunga",
    "Mr. Aruna Jayasekera",
    "Ms. Krishani Enoka",
    "Ms. Mihiri Attanayake",
    "Ms. Pavithra Liyanage",
    "Mr. Bhanu Wijayaratne",
    "Mr. Binesh Aravinda",
    "Ms. Amila Belpamulla",
    "Mr. Lasantha Edirisuriya",
    "Mr. Sanjeeva Jayasinghe"
]

corp_by_name = {c['name']: c for c in data['corporate']}

corp_ts = []
for name in corp_order:
    c = corp_by_name.get(name, {})
    desig = c.get('designation', '')
    qual = c.get('qualifications', '')
    img = f"/assets/personnel/corporate/{c.get('filename', '')}"
    cat = corp_categories.get(name, "Corporate Executive")
    bio = corp_bios.get(name, "")
    corp_ts.append(f'  {{\n    name: "{clean_str(name)}",\n    designation: "{clean_str(desig)}",\n    qualifications: "{clean_str(qual)}",\n    category: "{cat}",\n    bio: "{clean_str(bio)}",\n    imageUrl: "{img}"\n  }}')

def categorize(desig):
    d_lower = desig.lower()
    if any(k in d_lower for k in ['risk', 'audit', 'compliance', 'legal', 'governance', 'secretary']):
        return "Governance & Control"
    if any(k in d_lower for k in ['branch', 'regional', 'operations', 'credit', 'leasing', 'recovery', 'collection', 'remedial', 'pawning', 'sme', 'business']):
        return "Business & Operations"
    return "Corporate Executive"

def get_dept(desig):
    # Extract department or use designation
    if '-' in desig:
        parts = desig.split('-')
        return parts[-1].strip()
    if '–' in desig:
        parts = desig.split('–')
        return parts[-1].strip()
    return desig.replace('Senior Manager', '').replace('Chief Manager', '').replace('Head of', '').strip() or desig

chief_ts = []
for c in data['chief']:
    name = c['name']
    desig = c['designation']
    qual = c['qualifications']
    img = f"/assets/personnel/chief/{c['filename']}"
    cat = categorize(desig)
    dept = get_dept(desig)
    chief_ts.append(f'  {{\n    name: "{clean_str(name)}",\n    designation: "{clean_str(desig)}",\n    qualifications: "{clean_str(qual)}",\n    category: "{cat}",\n    department: "{clean_str(dept)}",\n    imageUrl: "{img}"\n  }}')

senior_ts = []
for s in data['senior']:
    name = s['name']
    desig = s['designation']
    qual = s['qualifications']
    img = f"/assets/personnel/senior/{s['filename']}"
    cat = categorize(desig)
    dept = get_dept(desig)
    senior_ts.append(f'  {{\n    name: "{clean_str(name)}",\n    designation: "{clean_str(desig)}",\n    qualifications: "{clean_str(qual)}",\n    category: "{cat}",\n    department: "{clean_str(dept)}",\n    imageUrl: "{img}"\n  }}')

output = f"""export const EXECUTIVE_MANAGEMENT: ExecutiveMember[] = [
{',\n'.join(corp_ts)}
];

export const CHIEF_MANAGERS: ExecutiveMember[] = [
{',\n'.join(chief_ts)}
];

export const SENIOR_MANAGEMENT: ExecutiveMember[] = [
{',\n'.join(senior_ts)}
];
"""

with open('scratch/reportData_management_snippet.ts', 'w', encoding='utf-8') as f:
    f.write(output)

print("Snippet written successfully!")
