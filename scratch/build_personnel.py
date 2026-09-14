import pymupdf
import json
import os
import re

doc = pymupdf.open('annual_report_2025.pdf')

os.makedirs('src/assets/personnel/corporate', exist_ok=True)
os.makedirs('src/assets/personnel/chief', exist_ok=True)
os.makedirs('src/assets/personnel/senior', exist_ok=True)

def clean_text(t):
    return t.replace('\u00ad', '').strip()

def parse_card(raw_text):
    lines = [clean_text(l) for l in raw_text.split('\n') if clean_text(l)]
    if not lines:
        return None
    name = lines[0]
    
    overrides = {
        'Mr. Chitral De Silva': (
            'Chief Business Officer',
            'Ex. Dip in Business Administration, Dip Credit Management'
        ),
        'Mr. Ajith Samantha': (
            'Divisional Head - Leasing Assessment & Approval',
            'B Com (Special), AIB, DBF (IBSL), MDP (AAT)'
        ),
        'Mr. Rajeewa Adikaram': (
            'Senior Manager - Information Systems Audit',
            'Executive MSc in Information Security, Certified Information Systems Auditor (ISACA), CBF'
        ),
        'Mr. N.A.R.S. Kumara': (
            'Senior Manager - Branch Operations',
            'B.B.Mgt (Accountancy) Special - University of Kelaniya, CBA (ICASL)'
        ),
        'Mr. Udana Weerasinghe': (
            'Head of Credit Risk',
            'IAB (UK), PGDip (Busi Admin) Heriot-Watt University, MBA - University of Sunderland'
        ),
        'Ms. Pavithra Liyanage': (
            'Head of Legal',
            'LLM (Staffordshire), LLB, Attorney-at-Law, Notary Public, Commissioner for Oaths, Company Secretary'
        ),
        'Mr. Dhananjaya Dayananda': (
            'Chief Internal Auditor',
            'FCCA, FCMA, ACA, MBA (Banking Mgt) Sikkim Manipal Uni India'
        ),
        'Mr. Bhanu Wijayaratne': (
            'Chief Compliance Officer',
            'Senior Fellow (IBSL), FCPM, MA-Fin Econ (Col), MBA (Manipal), AIB (Sri Lanka), MIIA (USA-SL Chapter)'
        )
    }
    
    if name in overrides:
        return name, overrides[name][0], overrides[name][1]
        
    desig_parts = []
    qual_parts = []
    state = 'desig'
    
    qual_patterns = r'^(BSc|B\.Sc|MSc|MBA|AIB|Dip|LLB|LLM|FCA|ACCA|FCCA|FCMA|ACA|PGD|PgD|BA|B\.A|BCom|B\.Com|BIT|IABF|HNDA|BBA|Ph\.D|CIM|FIB|Intermediate|National|Executive Dip|Ad\.Cert|DBF|CBF|MBS|MFE|PG\.|Senior Fellow|Attorney|HND|Diploma|Cert|Ad\. N|DSMEF|Registered|DABF|CBA|Licentiate|AMAPB)'
    
    for l in lines[1:]:
        if state == 'desig' and re.match(qual_patterns, l, re.I):
            state = 'qual'
        if state == 'desig':
            desig_parts.append(l)
        else:
            qual_parts.append(l)
            
    if not desig_parts and qual_parts:
        desig_parts.append(qual_parts.pop(0))
        
    d = ' '.join(desig_parts).strip()
    q = ', '.join(qual_parts).strip()
    return name, d, q

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

all_records = {'corporate': [], 'chief': [], 'senior': []}

for p_idx, cat, out_dir in sections:
    page = doc[p_idx]
    blocks = page.get_text('blocks')
    
    person_blocks = []
    for b in blocks:
        lines = [clean_text(l) for l in b[4].split('\n') if clean_text(l)]
        if not lines:
            continue
        first = lines[0]
        if first.startswith(('Mr.', 'Ms.', 'Dr.', 'Mr ', 'Ms ')):
            person_blocks.append((b[:4], b[4]))
            
    img_infos = page.get_image_info(xrefs=True)
    person_imgs = []
    for info in img_infos:
        bbox = info['bbox']
        if bbox[0] >= 0 and bbox[1] > 50 and (bbox[2] - bbox[0]) > 50 and (bbox[3] - bbox[1]) > 50:
            person_imgs.append((bbox, info['xref']))
            
    for (t_x0, t_y0, t_x1, t_y1), raw_text in person_blocks:
        name, desig, qual = parse_card(raw_text)
        
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
                    
        safe_name = re.sub(r'[^a-zA-Z0-9_]', '_', name.replace(' ', '_')).strip('_')
        img_filename = f"{safe_name}.png"
        img_disk_path = os.path.join(out_dir, img_filename)
        
        if matched_xref:
            pix = pymupdf.Pixmap(doc, matched_xref)
            if pix.n >= 5:
                pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
            pix.save(img_disk_path)
            
        all_records[cat].append({
            'name': name,
            'designation': desig,
            'qualifications': qual,
            'filename': img_filename,
            'image': f"/src/assets/personnel/{cat}/{img_filename}",
            'page': p_idx + 1
        })

print("Extraction completed!")
print("Corporate:", len(all_records['corporate']))
print("Chief:", len(all_records['chief']))
print("Senior:", len(all_records['senior']))

with open('scratch/personnel_final.json', 'w', encoding='utf-8') as f:
    json.dump(all_records, f, indent=2, ensure_ascii=False)
