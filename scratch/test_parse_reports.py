import json, subprocess, re

raw = subprocess.check_output(["git", "show", "1a37a06:scratch/committee_reports.json"]).decode("utf-8")
reports = json.loads(raw)

def clean_page_text(txt):
    lines = txt.splitlines()
    cleaned = []
    for l in lines:
        s = l.strip()
        if not s:
            continue
        # Skip header/footer artifacts
        if re.match(r'^\d{1,3}$', s):
            continue
        if "SANASA Development Bank PLC" in s or "Integrated Annual Report 2025" in s:
            continue
        if re.match(r'^REPORT OF THE BOARD.*COMMITTEE$', s, re.I):
            continue
        if re.match(r'^BOARD HUMAN RESOURCES.*COMMITTEE$', s, re.I):
            continue
        cleaned.append(s)
    return cleaned

for key in ["birmc", "bac", "bhrrc", "bsngc", "brptrc", "bspc", "bcc"]:
    r = reports[key]
    pages_lines = []
    for p in r["pages"]:
        pages_lines.extend(clean_page_text(p["text"]))
    print(f"{key}: {len(pages_lines)} total lines")
