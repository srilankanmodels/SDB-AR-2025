import re

with open("src/data/reportData.ts", "r", encoding="utf-8") as f:
    txt = f.read()

sen = re.search(r"export const SENIOR_MANAGEMENT: ExecutiveMember\[\] = \[(.*?)\n\];", txt, re.S)
if sen:
    names = re.findall(r'name:\s*"([^"]+)"', sen.group(1))
    print(f"Total Senior in reportData.ts: {len(names)}")
    for i, n in enumerate(names, 1):
        print(f"{i}. {n}")
else:
    print("Could not find SENIOR_MANAGEMENT array!")
