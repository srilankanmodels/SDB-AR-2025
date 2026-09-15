import fitz

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")
print(f"Total pages: {len(doc)}")

print("=== PAGES 40 to 70 ===")
for i in range(40, 70):
    lines = [l.strip() for l in doc[i].get_text().splitlines() if l.strip()]
    header = " // ".join(lines[:3]) if lines else "EMPTY"
    footer = " // ".join(lines[-2:]) if len(lines) >= 2 else ""
    print(f"doc[{i}]: {header[:80]} ... {footer[:50]}")

print("\n=== COMMITTEE REPORT PAGES (180-205) ===")
for i in range(180, 205):
    lines = [l.strip() for l in doc[i].get_text().splitlines() if l.strip()]
    header = " // ".join(lines[:3]) if lines else "EMPTY"
    footer = " // ".join(lines[-2:]) if len(lines) >= 2 else ""
    print(f"doc[{i}]: {header[:80]} ... {footer[:50]}")
