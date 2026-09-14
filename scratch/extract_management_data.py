import pymupdf
import json
import os
import re

doc = pymupdf.open('annual_report_2025.pdf')

os.makedirs('src/assets/personnel/corporate', exist_ok=True)
os.makedirs('src/assets/personnel/chief', exist_ok=True)
os.makedirs('src/assets/personnel/senior', exist_ok=True)

def parse_person_text(lines):
    name = lines[0].strip()
    
    qual_keywords = [
        'BSc', 'MBA', 'AIB', 'Dip', 'LLB', 'FCA', 'ACCA', 'PGD', 'BA', 'MSc',
        'BIT', 'IABF', 'HNDA', 'BCom', 'B.Sc', 'B.A', 'B.B', 'BBA', 'Ph.D',
        'CIM', 'FIB', 'Intermediate', 'National', 'Executive', 'Ad.Cert',
        'DBF', 'CBF', 'MBS', 'MFE', 'PG.', 'Associate', 'CBF(IBSL)', 'DMF',
        'ADCM', 'MCIPM', 'AMAPB', 'PgD', 'AICM', 'DPS', 'Ad. N. Dip', 'DSMEF',
        'Certificate', 'Registered', 'CBA', 'Certified', 'Senior Fellow',
        'Licentiate', 'Ad.Dip'
    ]
    
    desig_lines = []
    qual_lines = []
    in_qual = False
    
    for l in lines[1:]:
        l_clean = l.strip()
        if not l_clean:
            continue
        words = re.split(r'[\s,]+', l_clean)
        if not in_qual and any(w.startswith(tuple(qual_keywords)) for w in words[:2]):
            in_qual = True
        
        if in_qual:
            qual_lines.append(l_clean)
        else:
            desig_lines.append(l_clean)
            
    if not desig_lines and qual_lines:
        desig_lines.append(qual_lines.pop(0))
        
    designation = ' '.join(desig_lines).replace('\u00ad', '').strip()
    qualifications = ', '.join(qual_lines).replace('\u00ad', '').strip()
    
    return name, designation, qualifications

sections = [
    (58, 'corporate', 'src/assets/personnel/corporate'),
    (59, 'corporate', 'src/assets/personnel/corporate'),
    (60, 'chief', 'src/assets/personnel/chief'),
    (61, 'chief', 'src/assets/personnel/chief'),
    (62, 'senior', 'src/assets/personnel/senior'),
    (63, 'senior', 'src/assets/personnel/senior'),
    (64, 'senior', 'src/assets/personnel/senior'),
    (65, 'senior', 'src/assets/personnel/senior'),
    (66, 'senior', 'src/assets/personnel/senior'),
    (67, 'senior', 'src/assets/personnel/senior'),
]

data = {'corporate': [], 'chief': [], 'senior': []}

for page_idx, cat, out_dir in sections:
    page = doc[page_idx]
    blocks = page.get_text('blocks')
    
    person_blocks = []
    for b in blocks:
        lines = [l.strip() for l in b[4].split('\n') if l.strip()]
        if not lines:
            continue
        first_line = lines[0]
        if first_line.startswith(('Mr.', 'Ms.', 'Dr.', 'Mr ', 'Ms ')):
            person_blocks.append((b[:4], lines))
            
    img_infos = page.get_image_info(xrefs=True)
    person_imgs = []
    for info in img_infos:
        bbox = info['bbox']
        if bbox[0] >= 0 and bbox[1] > 50 and (bbox[2] - bbox[0]) > 50 and (bbox[3] - bbox[1]) > 50:
            person_imgs.append((bbox, info['xref']))
            
    for (t_x0, t_y0, t_x1, t_y1), lines in person_blocks:
        name = lines[0]
        matched_xref = None
        min_dist = 999999
        for (i_x0, i_y0, i_x1, i_y1), xref in person_imgs:
            i_cx = (i_x0 + i_x1) / 2
            t_cx = (t_x0 + t_x1) / 2
            if abs(i_cx - t_cx) < 60 and i_y1 <= t_y0 + 20 and (t_y0 - i_y1) < 80:
                dist = abs(i_cx - t_cx) + abs(t_y0 - i_y1)
                if dist < min_dist:
                    min_dist = dist
                    matched_xref = xref
                    
        name, desig, qual = parse_person_text(lines)
        safe_name = re.sub(r'[^a-zA-Z0-9_]', '_', name.replace(' ', '_')).strip('_')
        img_filename = f'{safe_name}.png'
        img_disk_path = os.path.join(out_dir, img_filename)
        
        if matched_xref:
            pix = pymupdf.Pixmap(doc, matched_xref)
            if pix.n >= 5:
                pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
            pix.save(img_disk_path)
            
        img_asset_path = f"/src/assets/personnel/{cat}/{img_filename}"
        
        data[cat].append({
            'name': name,
            'designation': desig,
            'qualifications': qual,
            'image': img_asset_path,
            'page': page_idx + 1
        })

with open('scratch/parsed_personnel.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"Extracted: {len(data['corporate'])} Corporate, {len(data['chief'])} Chief, {len(data['senior'])} Senior")
