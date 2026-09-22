import json, re

with open('src/data/notes_authoritative_hierarchy.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

for n in notes:
    title = n['title'].strip()
    content = n.get('content', '').strip()
    if content:
        first_line = content.split('\n')[0].strip()
        # check similarity or if first_line is basically the title
        clean_title = re.sub(r'[^a-zA-Z]', '', title).lower()
        clean_first = re.sub(r'[^a-zA-Z]', '', first_line[:len(title)*2]).lower()
        if clean_title in clean_first:
            print(f"{n['number']}: {title}")
            print(f"   First sentence: {first_line[:120]}")
