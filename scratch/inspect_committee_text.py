import json, subprocess

raw = subprocess.check_output(["git", "show", "1a37a06:scratch/committee_reports.json"]).decode("utf-8")
reports = json.loads(raw)

for key, rep in reports.items():
    print(f"\n==================== {key.upper()}: {rep['title']} ====================")
    print(f"Pages: {rep['pages_start']} - {rep['pages_end']}")
    all_text = "\n".join(p["text"] for p in rep["pages"])
    # Print lines that look like section headings (all caps or bullet points)
    lines = [l.strip() for l in all_text.splitlines() if l.strip()]
    for l in lines:
        if (l.isupper() and len(l) > 3 and not l.startswith("SANASA") and not l.startswith("INTEGRATED") and not l.isdigit()) or l.startswith("Ð") or l.startswith("•"):
            print("  *", l[:75])
