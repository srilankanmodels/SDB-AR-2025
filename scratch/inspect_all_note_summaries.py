import json

with open('src/data/notes_authoritative_hierarchy.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

for n in notes:
    num = n['number']
    title = n['title']
    summ = n.get('summary', '')
    policy = n.get('accountingPolicy', '')
    tables_count = len(n.get('tables', []))
    sub_count = len(n.get('subNotes', []))
    print(f"{num} | {title}")
    print(f"   Summary: {summ[:90]}")
    if policy:
        print(f"   Policy: {policy[:90]}")
