import fitz

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

for pno, doc_idx in [(57, 58), (58, 59)]:
    page = doc[doc_idx]
    blocks = page.get_text("blocks")
    person_blocks = []
    for b in blocks:
        text = b[4].strip()
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        if lines and any(lines[0].startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Ms ", "Dr.", "Mrs.", "Mrs "]):
            person_blocks.append(b)
    
    person_blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    print(f"\n=== CORPORATE MANAGEMENT: PAGE {pno} (doc[{doc_idx}]) - {len(person_blocks)} persons ===")
    for idx, b in enumerate(person_blocks, 1):
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        name = lines[0]
        desig = lines[1] if len(lines) > 1 else ""
        print(f"  {idx}. (y0={b[1]:.1f}, x0={b[0]:.1f}) -> {name} | {desig}")
