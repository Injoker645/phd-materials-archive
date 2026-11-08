# Thesis adaptation - Cornell CS / Tech

> Source thesis: portable v4 audit / measurement framing (same core as Harvard/MIT folders).
> Rule: remove NYUTron/Lang1/Manhattan–Brooklyn as *required* objects; keep the measurement claim; name Cornell/Weill multi-site opportunities only if real.

---

## What stays (portable core)

1. **Gap:** For a specific prediction from a clinical model trained on local notes or local operational data, we cannot currently say how much of the score rests on site-invariant medical signal vs site-specific documentation and operational habit.
2. **Framing:** Provenance **measurement / audit**, not a new end-to-end trainer that claims to scrub site-specific signal.
3. **Method shape:** Probe frozen representations for an invariant vs site-specific split → per-prediction attribution → **pre-register a prevalence-difference check** across environments → decision-shaped output (conformal validity / deploy-or-recalibrate).
4. **Differentiation:** Aggregate invariance and disease-vs-process modelling exist; per-prediction attribution without multi-site invariance exists; the **combination** for score-output clinical models is the claim to defend. Do not invent "nobody has thought about site shift."

---

## What to remove or demote for Cornell

| NYU-anchored piece | Cornell treatment |
|---|---|
| NYUTron / Lang1 as object of study | Demote to existence proof that clinical FMs encode site-linked behaviour. Prefer "hospital-trained clinical / operational models." |
| Manhattan vs Brooklyn first study | Replace with **multi-hospital or multi-campus environments reachable through Weill Cornell / NYC health-system collaborations** when an advisor makes them real. Same warning: campuses in one system are a low-variance test. |
| Oermann / Cho / Ranganath committee story | Replace with Estrin (digital health / deployment) + Fei Wang (EHR ML) + Koenecke or Angelina Wang (evaluation / responsible AI). Optional: Kuleshov methods; Sabuncu clinical imaging collaborator. |
| "I want to build this where Fig. 3 already showed the gap" | Drop. Do not depend on NYU Langone internal data. |

---

## Cornell-specific opportunities (real vs soft)

| Opportunity | Why it matters | Status |
|---|---|---|
| Cornell Tech campus in NYC after advisor match | Puts the student in the same city as major health systems and urban tech partners for later years | **SOURCED** Tech PhD pages |
| Weill Cornell Medicine affiliates (Estrin, Sabuncu, Fei Wang) | Plausible clinical collaborator / EHR path | **SOURCED** faculty pages; student data access **UNCERTAIN** until admitted + IRB/mentor |
| Ithaca year for competency + committee breadth | Time to meet Ithaca ML faculty (e.g. Weinberger on calibration) before relocating | **SOURCED** CS apply / handbook |
| Early-NYC petition | Possible if Tech advisor + DGS approve | **SOURCED**; do not promise in SoP |
| Urban Tech / public-interest stack (Garg et al.) | Institutional deployment culture; not a clinical EHR substitute | **SOURCED** Garg pages |
| Health Tech Dual MS brand | Signalling only; **not** the PhD curriculum | Do not claim MS Health Tech coursework as his path |

---

## Cornell-specific thesis statement (two sentences for SoP)

> When a hospital deploys a model trained on its own notes, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that hospital's documentation and operational habits. I want to build a per-prediction audit that decomposes clinical model outputs into site-invariant and site-specific evidence, validated across multi-site clinical environments reachable through Cornell Tech and Weill collaborators, under a pre-registered check for prevalence shift, and tied to a deploy-or-recalibrate decision rather than a decorative explanation score.

---

## Objections that transfer unchanged

- Audit vs new trainer (keep audit).
- Prevalence heterogeneity as a boundary condition (keep pre-registration).
- Diagnostic without a decision (keep conformal / deploy-or-recalibrate).
- Hungry-judge analogy: pedagogy only; never SoP evidence spine.

## Objection that changes

- "NYU-anchored first study" → **Cornell/Weill-anchored first study once data access exists; method still portable.** External check could be MIMIC or another system later; do not promise named warehouses he cannot access.

## Path-structure sentence (SoP-safe)

> I am applying to the CS PhD with the intention of working toward a Cornell Tech advisor so that the research years sit in NYC, after the default Ithaca year for competency and faculty matching, unless an early-NYC petition makes sense with a specific advisor.

Do not write as if Tech is a separate degree.

---

## Claim hygiene

- Never reintroduce the fabricated KFSH electrophoresis pilot.
- Soften Uppsala bioethics grant as **trust / blame when a decision comes from a person versus a system** (PICK-ONE still open; ceiling: "worked on a grant proposal").
- Safe bio spine: hospital compound childhood; Medium article on bias amplification; *Cracks in the Feed*; bioethics contact; KFSH & RC procedures dashboard (March 2024); Fyris AI ER demand model.
- Named gap: no prior deep expertise in invariant causal prediction or running a multi-hospital EHR study end to end.
