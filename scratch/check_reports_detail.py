import json, subprocess, re

raw = subprocess.check_output(["git", "show", "1a37a06:scratch/committee_reports.json"]).decode("utf-8")
reports = json.loads(raw)

# Let's see the text structure for each committee
for key in ["birmc", "bac", "bhrrc", "bsngc", "brptrc", "bspc", "bcc"]:
    r = reports[key]
    print(f"=== {key}: {r['title']} ({r['pages_start']}-{r['pages_end']}) ===")
    combined = "\n".join(p["text"] for p in r["pages"])
    # Let's inspect length
    print(f"Length: {len(combined)} characters")
