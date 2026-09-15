import json, subprocess

raw = subprocess.check_output(["git", "show", "1a37a06:scratch/committee_reports.json"]).decode("utf-8")
reports = json.loads(raw)

# Let's write out each report to scratch as text so we can review them cleanly
for k, r in reports.items():
    combined = f"TITLE: {r['title']}\nPAGES: {r['pages_start']} - {r['pages_end']}\n\n"
    for p in r["pages"]:
        combined += f"--- Page {p['page']} ---\n" + p["text"] + "\n\n"
    with open(f"scratch/{k}_raw.txt", "w", encoding="utf-8") as f:
        f.write(combined)

print("Saved raw text files for all 7 committees in scratch/")
