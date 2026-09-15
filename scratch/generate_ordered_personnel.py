import fitz, re, json

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

# 1. Chief Managers (pages 59 and 60)
chief_order = []
for pno, doc_idx in [(59, 60), (60, 61)]:
    page = doc[doc_idx]
    blocks = [b for b in page.get_text("blocks") if any(b[4].strip().startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Dr.", "Mrs."])]
    blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    for b in blocks:
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        chief_order.append(lines[0])

# 2. Senior Management (pages 61 to 66)
senior_order = []
for pno, doc_idx in [(61, 62), (62, 63), (63, 64), (64, 65), (65, 66), (66, 67)]:
    page = doc[doc_idx]
    blocks = [b for b in page.get_text("blocks") if any(b[4].strip().startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Ms ", "Dr.", "Mrs.", "Mrs "])]
    blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    for b in blocks:
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        senior_order.append(lines[0])

# Load existing entries
with open("src/data/reportData.ts", "r", encoding="utf-8") as f:
    txt = f.read()

def parse_objects(array_str):
    pattern = r'\{\s*name:\s*"([^"]+)",\s*designation:\s*"([^"]+)",\s*qualifications:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*department:\s*"([^"]+)",\s*imageUrl:\s*"([^"]+)"\s*\}'
    items = []
    for m in re.finditer(pattern, array_str):
        items.append({
            "name": m.group(1),
            "designation": m.group(2),
            "qualifications": m.group(3),
            "category": m.group(4),
            "department": m.group(5),
            "imageUrl": m.group(6)
        })
    return items

cm_match = re.search(r"export const CHIEF_MANAGERS: ExecutiveMember\[\] = \[(.*?)\n\];", txt, re.S)
existing_chief = parse_objects(cm_match.group(1))

sm_match = re.search(r"export const SENIOR_MANAGEMENT: ExecutiveMember\[\] = \[(.*?)\n\];", txt, re.S)
existing_senior = parse_objects(sm_match.group(1))

def norm(s):
    return re.sub(r'[^a-zA-Z]', '', s).lower()

chief_by_norm = {norm(c["name"]): c for c in existing_chief}
senior_by_norm = {norm(s["name"]): s for s in existing_senior}

# Chaminda / Chamida alias
if "mrchamidajayasena" in senior_by_norm:
    senior_by_norm["mrchamindajayasena"] = senior_by_norm["mrchamidajayasena"]

ordered_chief_objs = []
for name in chief_order:
    k = norm(name)
    if k in chief_by_norm:
        obj = dict(chief_by_norm[k])
        obj["name"] = name
        ordered_chief_objs.append(obj)
    else:
        print("MISSING CHIEF:", name)

ordered_senior_objs = []
for name in senior_order:
    k = norm(name)
    if k in senior_by_norm:
        obj = dict(senior_by_norm[k])
        obj["name"] = name
        ordered_senior_objs.append(obj)
    else:
        print("MISSING SENIOR:", name)

print(f"Constructed {len(ordered_chief_objs)} ordered chief, {len(ordered_senior_objs)} ordered senior.")

with open("scratch/ordered_personnel.json", "w", encoding="utf-8") as f:
    json.dump({
        "chief": ordered_chief_objs,
        "senior": ordered_senior_objs
    }, f, indent=2, ensure_ascii=False)
print("Saved scratch/ordered_personnel.json successfully!")
