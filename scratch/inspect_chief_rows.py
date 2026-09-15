import fitz

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

for pno, doc_idx in [(59, 60), (60, 61)]:
    page = doc[doc_idx]
    print(f"\n================ PAGE {pno} (doc[{doc_idx}]) ================")
    # Get all text blocks
    blocks = page.get_text("blocks")
    person_blocks = []
    for b in blocks:
        text = b[4].strip()
        if any(text.startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Dr.", "Mrs."]):
            person_blocks.append(b)
    
    # Sort row-by-row (y0 rounded to nearest 50, then x0)
    person_blocks.sort(key=lambda b: (round(b[1] / 50), b[0]))
    for idx, b in enumerate(person_blocks, 1):
        lines = [l.strip() for l in b[4].strip().splitlines() if l.strip()]
        name = lines[0]
        desig = lines[1] if len(lines) > 1 else ""
        print(f"{idx}. (y0={b[1]:.1f}, x0={b[0]:.1f}) -> {name} | {desig}")
