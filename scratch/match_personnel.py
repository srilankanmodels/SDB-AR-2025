import fitz, re, json

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

# Extract ordered Chief Managers from doc[60] (page 59) and doc[61] (page 60)
chief_ordered = []
for pno, doc_idx in [(59, 60), (60, 61)]:
    page = doc[doc_idx]
    blocks = [b for b in page.get_text("blocks") if any(b[4].strip().startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Dr.", "Mrs."])]
    blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    for b in blocks:
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        chief_ordered.append({
            "page": pno,
            "name": lines[0],
            "raw_lines": lines
        })

# Extract ordered Senior Managers from doc[62..67] (pages 61..66)
senior_ordered = []
for pno, doc_idx in [(61, 62), (62, 63), (63, 64), (64, 65), (65, 66), (66, 67)]:
    page = doc[doc_idx]
    blocks = [b for b in page.get_text("blocks") if any(b[4].strip().startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Ms ", "Dr.", "Mrs.", "Mrs "])]
    blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    for b in blocks:
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        senior_ordered.append({
            "page": pno,
            "name": lines[0],
            "raw_lines": lines
        })

print(f"Extracted {len(chief_ordered)} chief managers and {len(senior_ordered)} senior managers.")

# Now load existing reportData.ts entries from src/data/reportData.ts
with open("src/data/reportData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Match entries by simplified name
def norm(s):
    return re.sub(r'[^a-zA-Z]', '', s).lower()

# Parse CHIEF_MANAGERS from content
chief_matches = re.findall(r'\{\s*name:\s*"([^"]+)",\s*designation:\s*"([^"]+)",\s*qualifications:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*department:\s*"([^"]+)",\s*imageUrl:\s*"([^"]+)"\s*\}', content)
chief_map = {}
for m in chief_matches:
    chief_map[norm(m[0])] = {
        "name": m[0],
        "designation": m[1],
        "qualifications": m[2],
        "category": m[3],
        "department": m[4],
        "imageUrl": m[5]
    }

# Parse SENIOR_MANAGEMENT from content
senior_matches = re.findall(r'\{\s*name:\s*"([^"]+)",\s*designation:\s*"([^"]+)",\s*qualifications:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*department:\s*"([^"]+)",\s*imageUrl:\s*"([^"]+)"\s*\}', content)
senior_map = {}
for m in senior_matches:
    senior_map[norm(m[0])] = {
        "name": m[0],
        "designation": m[1],
        "qualifications": m[2],
        "category": m[3],
        "department": m[4],
        "imageUrl": m[5]
    }

print(f"Parsed {len(chief_map)} existing chief managers from reportData.ts")
print(f"Parsed {len(senior_map)} existing senior managers from reportData.ts")

# Check matching for chief
print("\n--- Checking Chief Managers Matching ---")
unmatched_chief = 0
for idx, cm in enumerate(chief_ordered, 1):
    k = norm(cm["name"])
    if k in chief_map:
        print(f"[{idx}] MATCH: {cm['name']} -> {chief_map[k]['name']}")
    else:
        print(f"[{idx}] UNMATCHED: {cm['name']}")
        unmatched_chief += 1

print("\n--- Checking Senior Managers Matching ---")
unmatched_senior = 0
for idx, sm in enumerate(senior_ordered, 1):
    k = norm(sm["name"])
    if k in senior_map:
        pass
    else:
        # Check partial match
        found = False
        for k2 in senior_map:
            if k in k2 or k2 in k:
                print(f"[{idx}] PARTIAL MATCH: {sm['name']} -> {senior_map[k2]['name']}")
                found = True
                break
        if not found:
            print(f"[{idx}] UNMATCHED: {sm['name']}")
            unmatched_senior += 1

print(f"\nUnmatched Chief: {unmatched_chief}, Unmatched Senior: {unmatched_senior}")
