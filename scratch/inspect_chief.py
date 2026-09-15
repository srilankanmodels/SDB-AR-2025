import fitz

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

print("=== CHIEF MANAGERS: Page 59 (doc[60]) ===")
p59 = doc[60]
blocks = p59.get_text("blocks")
for b in blocks:
    # b: (x0, y0, x1, y1, text, block_no, block_type)
    text = b[4].strip()
    if any(text.startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Dr.", "Mrs."]):
        print(f"[{b[1]:.1f}, {b[0]:.1f}] {text.splitlines()[0]}")

print("\n=== CHIEF MANAGERS: Page 60 (doc[61]) ===")
p60 = doc[61]
blocks = p60.get_text("blocks")
for b in blocks:
    text = b[4].strip()
    if any(text.startswith(p) for p in ["Mr.", "Mr ", "Ms.", "Dr.", "Mrs."]):
        print(f"[{b[1]:.1f}, {b[0]:.1f}] {text.splitlines()[0]}")
