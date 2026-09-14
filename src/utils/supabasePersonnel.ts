/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const SUPABASE_STORAGE_BASE = "https://yaefjxsrsyrrrxwkmslq.supabase.co/storage/v1/object/public/sdb%20bank";
export const SUPABASE_IMAGES_FOLDER = `${SUPABASE_STORAGE_BASE}/images`;

/**
 * Returns the properly URI-encoded public URL for an image in sdb bank/images/
 */
export function getSupabaseImageUrl(filename: string): string {
  if (!filename) return "";
  if (filename.startsWith("http://") || filename.startsWith("https://")) {
    return filename;
  }
  const cleanName = filename.trim();
  return `${SUPABASE_IMAGES_FOLDER}/${encodeURIComponent(cleanName)}`;
}

/**
 * Verified mappings for SDB Bank Corporate Management Executives
 */
export const CORPORATE_MANAGEMENT_IMAGE_MAP: Record<string, string> = {
  "Mr. Kapila Ariyaratne": "Kapila Ariyaratne.png",
  "Mr. Chitral De Silva": "C D Silva.png",
  "Mr. Anura Yapa": "A D S Yapa.png",
  "Mr. Dinesh Thomas": "P D Thomas.png",
  "Mr. Dhananjaya Dayananda": "K A I D Dayananda.png",
  "Mr. Dinuke Wijesinghe": "D P Wijesinghe.png",
  "Ms. Lakmini Muththunga": "M M Y L Muththunga.png",
  "Mr. Aruna Jayasekera": "A Jayasekera.png",
  "Ms. Krishani Enoka": "P K Enoka.png",
  "Ms. Mihiri Attanayake": "M H Attanayaka.png",
  "Ms. Pavithra Liyanage": "P C Liyanage.png",
  "Mr. Sanjeeva Jayasinghe": "W A S C S Jayasinghe.png",
  "Mr. Bhanu Wijayaratne": "D V C B Wijayaratne.png",
  "Mr. Binesh Aravinda": "U Aravinda.png",
  "Ms. Amila Belpamulla": "Ms. Amila Belpamulla.png",
  "Mr. Lasantha Edirisuriya": "E A L S Eidirisuriya.png",
};

/**
 * Complete list of all 64 Senior Management & Branch Network Leaders uploaded to Supabase Storage
 */
export interface SeniorPersonnel {
  name: string;
  filename: string;
  imageUrl: string;
  designation: string;
  department: string;
}

export const ALL_UPLOADED_PERSONNEL_FILES: string[] = [
  "A A G Abeysiriwardana.png",
  "A A S Subhashini.png",
  "A D S Yapa.png",
  "A Jayasekera.png",
  "A M Chandra.png",
  "A M P Fernando.png",
  "A S Perera.png",
  "A W S L Kumara.png",
  "Ashoka Kumara Katukurunda.png",
  "B A A Chamini.png",
  "B A I Wickramarathne.png",
  "C D Peramunasinghe.png",
  "C D Silva.png",
  "C J Meemana.png",
  "D H Gamage.png",
  "D M S Dissanayaka.png",
  "D N P Madurawala.png",
  "D P J Edirisinghe.png",
  "D P Wijesinghe.png",
  "D V C B Wijayaratne.png",
  "E A L S Eidirisuriya.png",
  "E M L Ekanayake.png",
  "G A S Wimalarathne.png",
  "H M A P Herath.png",
  "J A C K Jayakody.png",
  "K A C Jayasena.png",
  "K A I D Dayananda.png",
  "K B S Kumara.png",
  "K D R K Randeniya.png",
  "K H A Ayesha.png",
  "K H P P K Gnanasiri.png",
  "K K Ranganie.png",
  "K K S U Kumara.png",
  "K T T D D Silva.png",
  "K V R Jeewanthi.png",
  "Kapila Ariyaratne.png",
  "L H C Roshan.png",
  "M H Attanayaka.png",
  "M M Y L Muththunga.png",
  "Ms. Amila Belpamulla.png",
  "N A R S Kumara.png",
  "N C Pallegama.png",
  "N N Edirisinghe.png",
  "N P D M Priyangani.png",
  "P A N Wanigasiri.png",
  "P C Liyanage.png",
  "P C S Priyankara.png",
  "P D Thomas.png",
  "P G N Fernando.png",
  "P K A S Perera.png",
  "P K Enoka.png",
  "P P Gunawardena.png",
  "P Senadeera.png",
  "P W K J Chandrasiri.png",
  "R A C Rathnayake.png",
  "R A N  K D Wijesingha.png",
  "R A N N Ranaweera.png",
  "R A P R Karunarathne.png",
  "R Adhikaram.png",
  "S C Wickremarathne.png",
  "S H S I Udayangana.png",
  "S Kandeeban.png",
  "S Keshanth.png",
  "S M I P B Samarakoon.png",
  "S N T Igalagamage.png",
  "S Pandipperuma.png",
  "S R A D C Samarathunga.png",
  "S Thulasidhas.png",
  "T A I Lakmal.png",
  "T K Banda.png",
  "T M M Thennakoon.png",
  "T M R R Dharmasena.png",
  "U Aravinda.png",
  "U G P Ranojani.png",
  "W A S C S Jayasinghe.png",
  "W D S D Mahathanthila.png",
  "W H M Fernando.png",
  "W H M U B Welikumbura.png",
  "W N A D S Udana.png",
  "W V P A Samanthantha.png",
];

// Helper to format a filename like "T K Banda.png" into "Mr./Ms. T. K. Banda"
function formatDisplayName(filename: string): string {
  const base = filename.replace(/\.png$/i, "").trim();
  const parts = base.split(/\s+/);
  const formatted = parts
    .map((p, i) => {
      if (i < parts.length - 1 && p.length === 1) {
        return `${p}.`;
      }
      return p;
    })
    .join(" ");
  return formatted;
}

// 64 Senior Branch & Department Managers (excluding the 15 Corporate Management)
const EXCLUDED_EXECUTIVE_FILES = new Set(Object.values(CORPORATE_MANAGEMENT_IMAGE_MAP));

export const SENIOR_BRANCH_MANAGERS: SeniorPersonnel[] = ALL_UPLOADED_PERSONNEL_FILES
  .filter(f => !EXCLUDED_EXECUTIVE_FILES.has(f))
  .map(filename => {
    const formattedName = formatDisplayName(filename);
    const isSpecialBanda = filename.includes("T K Banda");
    return {
      name: formattedName,
      filename,
      imageUrl: getSupabaseImageUrl(filename),
      designation: isSpecialBanda
        ? "Senior Branch Manager – Mawanella / Kegalle"
        : "Senior Manager – Branch Network & Regional Operations",
      department: isSpecialBanda ? "Branch Banking Network" : "Regional Management & Operations"
    };
  });

/**
 * Resolves a portrait image for an executive or leader:
 * 1. Checks custom override in branding config
 * 2. Checks CORPORATE_MANAGEMENT_IMAGE_MAP
 * 3. Checks fuzzy name match in ALL_UPLOADED_PERSONNEL_FILES
 */
export function resolvePersonnelImageUrl(name: string, customOverrides?: Record<string, string>): string | null {
  if (customOverrides && customOverrides[name]) {
    return customOverrides[name];
  }

  // Check direct corporate executive map
  if (CORPORATE_MANAGEMENT_IMAGE_MAP[name]) {
    return getSupabaseImageUrl(CORPORATE_MANAGEMENT_IMAGE_MAP[name]);
  }

  // Normalize name for matching
  const cleanName = name.toLowerCase().replace(/^(mr\.|ms\.|dr\.|mrs\.)\s*/, "").trim();
  const parts = cleanName.split(/\s+/);
  const lastName = parts[parts.length - 1];

  // Try finding in uploaded files
  const match = ALL_UPLOADED_PERSONNEL_FILES.find(f => {
    const fClean = f.replace(/\.png$/i, "").toLowerCase();
    return fClean.includes(lastName);
  });

  if (match) {
    return getSupabaseImageUrl(match);
  }

  return null;
}
