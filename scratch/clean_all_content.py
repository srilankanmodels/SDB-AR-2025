import json

with open("src/data/notes_authoritative_hierarchy.json", "r", encoding="utf-8") as f:
    notes = json.load(f)

for n in notes:
    # If Note 46 has content, move it to accountingPolicy
    if n["noteNum"] == 46 and n.get("content"):
        n["accountingPolicy"] = n["content"]

    # Clear all content across notes so no unformatted paragraph renders above the yellow padding
    n["content"] = ""

    # Normalize ligatures in accountingPolicy
    if n.get("accountingPolicy"):
        acc = n["accountingPolicy"]
        acc = acc.replace("\ufb01", "fi").replace("\ufb02", "fl")
        acc = acc.replace("\u2018", "'").replace("\u2019", "'")
        acc = acc.replace("\u201c", '"').replace("\u201d", '"')
        acc = acc.replace("\u2013", "-").replace("\u2014", "--")
        n["accountingPolicy"] = acc

with open("src/data/notes_authoritative_hierarchy.json", "w", encoding="utf-8") as f:
    json.dump(notes, f, indent=2, ensure_ascii=False)

print("Successfully cleared content and normalized accounting policies across all 46 notes.")
