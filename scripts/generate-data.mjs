import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const materials = path.join(root, "public", "materials");
const dataDir = path.join(root, "src", "data");

const STATE_MAP = {
  "nyu-cds-medical": "ny",
  "mount-sinai-aiet": "ny",
  "columbia-dbmi": "ny",
  "cornell-tech": "ny",
  "harvard-aim": "ma",
  "bu-cds": "ma",
  "mit-eecs": "ma",
  "cmu-scs": "pa",
  "cmu-societal-computing": "pa",
  "upenn-gcb": "pa",
  "upenn-cis": "pa",
  "pitt-bmi": "pa",
  "jhu-cs": "md",
  "cedars-sinai-health-ai": "ca",
  "berkeley-ucsf-cph": "ca",
  "utsw-osph-hds": "tx",
  "mayo-biomedical": "mn",
  "utah-bmi": "ut",
  "uw-allen": "wa",
};

/** Curated from STATUS.md + shortlist + 00-program.md — empty string if unknown, never invented */
const META = {
  "nyu-cds-medical": {
    name: "NYU CDS — Medical School Track",
    university: "New York University",
    stage: "Drafting #2",
    deadline: "3 Dec 2026, 5pm ET",
    fee: "$130 (waiver pending)",
    fundingNotes: "Stipend FAQ $41,832 (2025–26 nine-month).",
    greNotes: "Not required (considered if submitted).",
  },
  "mount-sinai-aiet": {
    name: "Mount Sinai BMS + AIET",
    university: "Icahn School of Medicine at Mount Sinai",
    stage: "Drafting #4",
    deadline: "~1 Dec 2026 (unconfirmed)",
    fee: "Fee waived",
    fundingNotes: "Institutional/grant funding; health insurance fee listed $0 on program materials.",
    greNotes: "Not required.",
  },
  "columbia-dbmi": {
    name: "Columbia DBMI",
    university: "Columbia University",
    stage: "Backburner",
    deadline: "1 Dec 2026, 5:00 PM EST",
    fee: "",
    fundingNotes: "Backburner this cycle — fee-waiver mismatch noted in shortlist.",
    greNotes: "",
  },
  "cornell-tech": {
    name: "Cornell Tech / CS",
    university: "Cornell University",
    stage: "Backburner",
    deadline: "15 Dec pattern",
    fee: "",
    fundingNotes: "Full academic-year support while in good standing (incl. international).",
    greNotes: "Optional / not considered.",
  },
  "harvard-aim": {
    name: "Harvard AIM (BMI — AI in Medicine)",
    university: "Harvard University / HMS",
    stage: "Drafting #8",
    deadline: "1 Dec 2026, 5pm ET",
    fee: "$0 (GSAS self-fill waiver)",
    fundingNotes: "Fully funded PhD track via BMI.",
    greNotes: "Optional.",
  },
  "bu-cds": {
    name: "BU CDS",
    university: "Boston University",
    stage: "Drafting #7",
    deadline: "15 Dec 2026",
    fee: "$95 (waiver granted)",
    fundingNotes: "5-yr Charles River package; stipend mid for Boston.",
    greNotes: "",
  },
  "mit-eecs": {
    name: "MIT EECS (+IMES)",
    university: "Massachusetts Institute of Technology",
    stage: "Backburner",
    deadline: "",
    fee: "$90 (OGE waiver unlikely for this profile)",
    fundingNotes: "Fellowship / RA / TA: tuition, stipend, medical insurance; internationals eligible.",
    greNotes: "",
  },
  "cmu-scs": {
    name: "CMU MLD (SCS)",
    university: "Carnegie Mellon University",
    stage: "Drafting #5",
    deadline: "Early 18 Nov / final 9 Dec 2026",
    fee: "$80 early / $100 regular (waiver held)",
    fundingNotes: "Full tuition + stipend for admitted PhD students.",
    greNotes: "Optional.",
  },
  "cmu-societal-computing": {
    name: "CMU Societal Computing",
    university: "Carnegie Mellon University",
    stage: "Drafting #1",
    deadline: "Early 18 Nov / final 9 Dec 2026",
    fee: "$0 (program auto-waives)",
    fundingNotes: "Fully funded PhD; Pittsburgh COLA.",
    greNotes: "",
  },
  "upenn-gcb": {
    name: "UPenn GCB",
    university: "University of Pennsylvania",
    stage: "Drafting #3",
    deadline: "1 Dec 2026, 11:59pm ET",
    fee: "$0",
    fundingNotes: "$49k stipend; Johnson AI-4-AI faculty path.",
    greNotes: "",
  },
  "upenn-cis": {
    name: "UPenn CIS",
    university: "University of Pennsylvania",
    stage: "Backburner",
    deadline: "15 Dec pattern (early 1 Nov)",
    fee: "$95 (no intl waiver route found)",
    fundingNotes: "SEAS full funding language for admitted PhD students.",
    greNotes: "Optional.",
  },
  "pitt-bmi": {
    name: "Pitt BMI",
    university: "University of Pittsburgh",
    stage: "Considering — mid #C",
    deadline: "~15 Dec 2026",
    fee: "$50 (+ hardship waiver email)",
    fundingNotes: "Intl funding via grants — weaker guarantee than Mayo/UTSW.",
    greNotes: "Not required.",
  },
  "jhu-cs": {
    name: "JHU CS (Whiting)",
    university: "Johns Hopkins University",
    stage: "Drafting #6",
    deadline: "15 Dec 2026",
    fee: "$75 (waiver status uncertain)",
    fundingNotes: "Stipend and funding guarantee; medical school adjacency.",
    greNotes: "Not required (Whiting-wide).",
  },
  "cedars-sinai-health-ai": {
    name: "Cedars-Sinai Health AI",
    university: "Cedars-Sinai",
    stage: "Considering — webinar",
    deadline: "31 Jan 2027",
    fee: "$55 (waiver by email)",
    fundingNotes: "Fully funded: tuition + ~$52k stipend (12-month) for four years + health insurance.",
    greNotes: "Not required.",
  },
  "berkeley-ucsf-cph": {
    name: "Berkeley–UCSF CPH",
    university: "UC Berkeley / UCSF",
    stage: "Backburner",
    deadline: "",
    fee: "$155 (intl fee waivers restricted)",
    fundingNotes: "5-year institutional funding for admitted students.",
    greNotes: "Ignored.",
  },
  "utsw-osph-hds": {
    name: "UTSW Public Health — Health Data Science",
    university: "UT Southwestern",
    stage: "Considering — mid #B",
    deadline: "Priority 15 Dec 2026",
    fee: "$0",
    fundingNotes: "Tuition + fees paid + $40,000/yr RA + student health insurance (4–5 years).",
    greNotes: "",
  },
  "mayo-biomedical": {
    name: "Mayo Biomedical Sciences",
    university: "Mayo Clinic",
    stage: "Considering — mid #A",
    deadline: "2 Dec 2026",
    fee: "$0",
    fundingNotes: "Fully funded: tuition waived + $42,642 stipend (2026–27) + benefits.",
    greNotes: "",
  },
  "utah-bmi": {
    name: "Utah BMI",
    university: "University of Utah",
    stage: "Backburner",
    deadline: "n/a",
    fee: "",
    fundingNotes: "Not applying — biology course prerequisites.",
    greNotes: "Optional.",
  },
  "uw-allen": {
    name: "UW Allen CSE",
    university: "University of Washington",
    stage: "Backburner",
    deadline: "15 Dec (Pacific)",
    fee: "$90 (no waiver — not applying)",
    fundingNotes: "Allen School CSE funding vehicle only (not BIME).",
    greNotes: "Not used.",
  },
};

const PORTAL_MAP = {
  "nyu-cds-medical": "NYU- Data Science.txt",
  "bu-cds": "BU CDS.txt",
  "cmu-scs": "CMU - Ph.D. Program in Machine Learning (MLD).txt",
  "cmu-societal-computing": "CMU - Societal Computing PhD (S3D).txt",
  "harvard-aim": "Harvard BMI - AIM track (PhD Biomedical Informatics).txt",
  "jhu-cs": "JHU CS (Whiting School).txt",
  "mount-sinai-aiet": "Mount Sinai - PhD Biomedical Sciences (AIET training area).txt",
  "upenn-gcb": "UPenn - PhD Genomics & Computational Biology (BMI track interest).txt",
};

function walkFiles(dir, base = dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(full, base));
    else out.push(path.relative(base, full).replace(/\\/g, "/"));
  }
  return out;
}

function titleFromPath(rel) {
  const base = path.basename(rel).replace(/\.[^.]+$/, "");
  return base
    .replace(/^SUBMISSION-/, "Submission: ")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function typeFromExt(rel) {
  const ext = path.extname(rel).toLowerCase();
  if (ext === ".pdf") return "pdf";
  if (ext === ".md") return "md";
  if (ext === ".txt") return "txt";
  return "file";
}

const programs = Object.keys(STATE_MAP).map((id) => {
  const meta = META[id] || {
    name: id,
    university: "",
    stage: "",
    deadline: "",
    fee: "",
    fundingNotes: "",
    greNotes: "",
  };
  const progDir = path.join(materials, "programs", id);
  const docs = walkFiles(progDir).map((rel) => ({
    title: titleFromPath(rel),
    path: `/materials/programs/${id}/${rel}`,
    type: typeFromExt(rel),
  }));

  const portal = PORTAL_MAP[id];
  if (portal && fs.existsSync(path.join(materials, "portal-instructions", portal))) {
    docs.push({
      title: "Portal instructions",
      path: `/materials/portal-instructions/${portal}`,
      type: "txt",
    });
  }

  return {
    id,
    name: meta.name,
    university: meta.university,
    state: STATE_MAP[id],
    country: "US",
    stage: meta.stage,
    deadline: meta.deadline,
    fee: meta.fee,
    fundingNotes: meta.fundingNotes,
    greNotes: meta.greNotes,
    documents: docs,
  };
});

const pastEuFiles = walkFiles(path.join(materials, "past-eu"));
function parseEu(filename) {
  const stem = filename.replace(/\.pdf$/i, "");
  let institution = "Other";
  const lower = stem.toLowerCase();
  if (lower.includes("chalmers")) institution = "Chalmers";
  else if (lower.includes("ddls") || lower.includes("abc labs")) institution = "DDLS / ABC Labs";
  else if (lower.includes("ki-kth") || lower.includes("ki_phd") || lower.includes("ki phd") || lower.includes("ki proteomics") || lower.includes("ki -") || lower.includes("ra ki") || /\bki\b/.test(lower))
    institution = "Karolinska Institutet";
  else if (lower.includes("kth") || lower.includes("care-ai") || lower.includes("research engineer kth"))
    institution = "KTH";
  else if (lower.includes("ku leuven")) institution = "KU Leuven";
  else if (lower.includes("lund")) institution = "Lund University";
  else if (lower.includes("uu ") || lower.includes("uu  ") || lower.includes("personal letter - uu") || lower.includes("image processing"))
    institution = "Uppsala University";
  else if (lower.includes("ambiom")) institution = "AMBIOM";

  return {
    id: stem
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, ""),
    title: stem.replace(/^Cover Letter\s*-?\s*/i, "").trim() || stem,
    institution,
    country: institution === "KU Leuven" ? "BE" : "SE",
    path: `/materials/past-eu/${filename}`,
    type: "pdf",
  };
}

const pastEu = pastEuFiles.map(parseEu).sort((a, b) =>
  a.institution.localeCompare(b.institution) || a.title.localeCompare(b.title)
);

const samples = walkFiles(path.join(materials, "samples")).map((rel) => ({
  title: titleFromPath(rel),
  path: `/materials/samples/${rel}`,
  type: typeFromExt(rel),
}));

const projects = walkFiles(path.join(materials, "projects")).map((rel) => ({
  title: titleFromPath(rel),
  path: `/materials/projects/${rel}`,
  type: typeFromExt(rel),
}));

const treeDocs = walkFiles(path.join(materials, "tree")).map((rel) => ({
  title: titleFromPath(rel),
  path: `/materials/tree/${rel}`,
  type: typeFromExt(rel),
}));

const funding = {
  highlights: programs
    .filter((p) => /\$0|waived|none/i.test(p.fee) || /fully funded/i.test(p.fundingNotes))
    .map((p) => ({
      programId: p.id,
      name: p.name,
      fee: p.fee,
      fundingNotes: p.fundingNotes,
      stage: p.stage,
    })),
  programs: programs.map((p) => ({
    programId: p.id,
    name: p.name,
    university: p.university,
    state: p.state,
    stage: p.stage,
    fee: p.fee,
    fundingNotes: p.fundingNotes,
    greNotes: p.greNotes,
    deadline: p.deadline,
  })),
  referenceDocs: [
    ...treeDocs.filter((d) => /shortlist|fee|deadline|mailing/i.test(d.path)),
    ...samples,
  ],
};

fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(path.join(dataDir, "programs.json"), JSON.stringify(programs, null, 2));
fs.writeFileSync(path.join(dataDir, "pastEu.json"), JSON.stringify(pastEu, null, 2));
fs.writeFileSync(path.join(dataDir, "funding.json"), JSON.stringify(funding, null, 2));
fs.writeFileSync(
  path.join(dataDir, "extras.json"),
  JSON.stringify({ projects, samples, treeDocs }, null, 2)
);

const totalDocs = programs.reduce((n, p) => n + p.documents.length, 0) + pastEu.length + samples.length + projects.length + treeDocs.length;
console.log(`programs: ${programs.length}`);
console.log(`pastEu: ${pastEu.length}`);
console.log(`funding rows: ${funding.programs.length}`);
console.log(`approx docs indexed: ${totalDocs}`);
