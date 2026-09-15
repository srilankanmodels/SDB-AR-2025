with open("src/data/reportData.ts", "r", encoding="utf-8") as f:
    text = f.read()

with open("scratch/chief_managers.ts", "r", encoding="utf-8") as f:
    chief_ts = f.read()

with open("scratch/senior_management.ts", "r", encoding="utf-8") as f:
    senior_ts = f.read()

import re
pattern = r"export const CHIEF_MANAGERS: ExecutiveMember\[\] = \[.*?\n\];\s*export const SENIOR_MANAGEMENT: ExecutiveMember\[\] = \[.*?\n\];"
replacement = chief_ts + "\n\n" + senior_ts

new_text, count = re.subn(pattern, replacement, text, flags=re.S)
print("Substitutions made:", count)

if count == 1:
    with open("src/data/reportData.ts", "w", encoding="utf-8") as f:
        f.write(new_text)
    print("Successfully updated src/data/reportData.ts")
else:
    print("Error: Could not find target pattern in reportData.ts")
