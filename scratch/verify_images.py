import json
import fitz
import re

doc = fitz.open(r"C:\Users\ASUS\Downloads\Sanasa Development Bank AR 2025 Book.pdf")

# Let's inspect existing reportData.ts entries to extract existing imageUrls, departments, categories, bios
with open("src/data/reportData.ts", "r", encoding="utf-8") as f:
    text = f.read()

# We can parse the existing CHIEF_MANAGERS and SENIOR_MANAGEMENT arrays using regex or python
def clean_name(name):
    return re.sub(r'[^a-zA-Z]', '', name).lower()

print("Verifying image paths exist for all personnel...")
