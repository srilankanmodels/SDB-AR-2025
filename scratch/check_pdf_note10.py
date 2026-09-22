import fitz

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

# Search for Note 10 in doc pages around 235-245
for pno in range(235, 245):
    txt = doc[pno].get_text()
    if "10. NET FAIR VALUE" in txt or "10. " in txt:
        for line in txt.splitlines():
            if "10." in line:
                print(f"Page {pno+1}: {line}")
                # print next 10 lines
                idx = txt.splitlines().index(line)
                print("\n".join(txt.splitlines()[idx:idx+15]))
                print("="*40)
