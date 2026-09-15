import json

with open("scratch/ordered_personnel.json", "r", encoding="utf-8") as f:
    data = json.load(f)

def format_member(m):
    lines = [
        "  {",
        f'    name: "{m["name"]}",',
        f'    designation: "{m["designation"]}",',
        f'    qualifications: "{m["qualifications"]}",',
        f'    category: "{m["category"]}",',
        f'    department: "{m["department"]}",',
        f'    imageUrl: "{m["imageUrl"]}"',
        "  }"
    ]
    return "\n".join(lines)

chief_code = "export const CHIEF_MANAGERS: ExecutiveMember[] = [\n" + ",\n".join(format_member(m) for m in data["chief"]) + "\n];"
senior_code = "export const SENIOR_MANAGEMENT: ExecutiveMember[] = [\n" + ",\n".join(format_member(m) for m in data["senior"]) + "\n];"

with open("scratch/chief_managers.ts", "w", encoding="utf-8") as f:
    f.write(chief_code)

with open("scratch/senior_management.ts", "w", encoding="utf-8") as f:
    f.write(senior_code)

print("Generated scratch/chief_managers.ts and scratch/senior_management.ts")
