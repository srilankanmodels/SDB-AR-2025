import json, subprocess, re

raw = subprocess.check_output(["git", "show", "1a37a06:scratch/committee_reports.json"]).decode("utf-8")
reports = json.loads(raw)

def parse_report_text(pages, rep_id):
    full_text = "\n".join(p["text"] for p in pages)
    # Replace unicode dashes / bullets
    full_text = full_text.replace("\u00d0", "•").replace("\t•", "•").replace("\t", " ")
    
    # Remove running headers and footers
    lines = full_text.splitlines()
    clean_lines = []
    for l in lines:
        s = l.strip()
        if not s:
            continue
        if re.match(r'^\d{1,3}$', s):
            continue
        if "SANASA Development Bank PLC" in s or "Integrated Annual Report 2025" in s:
            continue
        if re.match(r'^REPORT OF THE BOARD.*COMMITTEE$', s, re.I):
            continue
        if re.match(r'^BOARD HUMAN RESOURCES.*COMMITTEE$', s, re.I):
            continue
        clean_lines.append(s)

    # Now group lines into sections
    sections = []
    current_sec = {"heading": "Overview & Charter", "paragraphs": [], "listItems": []}
    
    # Known section heading keywords
    heading_keywords = [
        "COMPOSITION", "TERMS OF REFERENCE", "DUTIES AND ROLE", "REGULATORY COMPLIANCE",
        "MEETINGS", "ACTIVITIES", "FINANCIAL REPORTING", "INTERNAL CONTROL OVER",
        "ANNUAL CORPORATE GOVERNANCE", "EXTERNAL AUDIT", "INTERNAL AUDIT", "WHISTLEBLOWING",
        "POLICY ON NON-AUDIT", "REPORTING TO THE BOARD", "PROFESSIONAL ADVICE",
        "TRAINING AND DEVELOPMENT", "SCOPE AND RESPONSIBILITIES", "KEY HR INITIATIVES",
        "PRIMARY OBJECTIVES", "RESPONSIBILITIES OF", "OBJECTIVE OF THE COMMITTEE",
        "SUMMARY OF ACTIVITIES", "AREAS UNDER THE PURVIEW", "COMMITTEE EVALUATION",
        "For and on behalf of"
    ]
    
    def is_heading(line):
        if line.startswith("•"):
            return False
        for kw in heading_keywords:
            if kw.lower() in line.lower() and len(line) < 60:
                return True
        return False

    i = 0
    buffer_para = []
    current_list = []
    
    def flush():
        nonlocal buffer_para, current_list
        if buffer_para:
            p_text = " ".join(buffer_para).strip()
            # Clean hyphens at line breaks
            p_text = re.sub(r'(\w+)-\s+(\w+)', r'\1\2', p_text)
            current_sec["paragraphs"].append(p_text)
            buffer_para = []
        if current_list:
            current_sec["listItems"].extend(current_list)
            current_list = []

    while i < len(clean_lines):
        line = clean_lines[i]
        
        if is_heading(line):
            flush()
            if current_sec["paragraphs"] or current_sec["listItems"]:
                sections.append(current_sec)
            # Combine multi-line heading if needed
            heading_title = line
            if i + 1 < len(clean_lines) and clean_lines[i+1].isupper() and len(clean_lines[i+1]) < 35 and not clean_lines[i+1].startswith("•"):
                heading_title += " " + clean_lines[i+1]
                i += 1
            current_sec = {"heading": heading_title, "paragraphs": [], "listItems": []}
            i += 1
            continue

        if line.startswith("•"):
            if buffer_para:
                flush()
            item_text = line.lstrip("•").strip()
            # Check following lines if they continue this bullet
            i += 1
            while i < len(clean_lines) and not clean_lines[i].startswith("•") and not is_heading(clean_lines[i]):
                # If short or lowercase continuation
                item_text += " " + clean_lines[i]
                i += 1
            item_text = re.sub(r'(\w+)-\s+(\w+)', r'\1\2', item_text)
            current_list.append(item_text.strip())
            continue

        buffer_para.append(line)
        i += 1

    flush()
    if current_sec["paragraphs"] or current_sec["listItems"]:
        sections.append(current_sec)

    return sections

for key in ["birmc", "bac", "bhrrc", "bsngc", "brptrc", "bspc", "bcc"]:
    r = reports[key]
    secs = parse_report_text(r["pages"], key)
    print(f"[{key}] Generated {len(secs)} sections:")
    for s in secs:
        print(f"   -> {s['heading']} (Paras: {len(s['paragraphs'])}, Bullets: {len(s['listItems'])})")
