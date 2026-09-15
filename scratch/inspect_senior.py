import fitz

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

all_senior = []
for pno, doc_idx in [(61, 62), (62, 63), (63, 64), (64, 65), (65, 66), (66, 67)]:
    page = doc[doc_idx]
    blocks = page.get_text("blocks")
    person_blocks = []
    for b in blocks:
        text = b[4].strip()
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        if lines and any(lines[0].startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Ms ", "Dr.", "Mrs.", "Mrs "]):
            person_blocks.append(b)
    
    # Sort row-by-row
    person_blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    print(f"\n=== PAGE {pno} (doc[{doc_idx}]) - Found {len(person_blocks)} persons ===")
    for idx, b in enumerate(person_blocks, 1):
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        name = lines[0]
        desig = lines[1] if len(lines) > 1 else ""
        print(f"  {idx}. (y0={b[1]:.1f}, x0={b[0]:.1f}) -> {name} | {desig}")
        all_senior.append((pno, name, desig, lines, b[4].strip()))

print(f"\nTotal Senior Management persons: {len(all_senior)}")
