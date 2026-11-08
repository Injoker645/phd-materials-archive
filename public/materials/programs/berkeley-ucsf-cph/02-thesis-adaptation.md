# Thesis adaptation — NYU framing → Berkeley–UCSF CPH

> Parent NYU research files are **not** edited. This file only re-anchors the same intellectual project for CPH.

Core thesis (unchanged intent): **per-prediction provenance** — decompose a clinical foundation / operational prediction model’s score into **site-invariant** vs **site-specific** evidence, framed as **audit / measurement**, not as a new end-to-end trainer.

---

## What to drop or de-centre for CPH

| NYU-centric piece | CPH adaptation |
|---|---|
| NYUTron / Lang1 as primary empirical object | Keep as **published existence proof** of cross-site degradation (cite carefully); do **not** make NYU Langone the dissertation’s required data home |
| Manhattan vs Brooklyn as primary environments | Replace with **multi-site UC / Bay Area** environments if access materialises (below) |
| OLAB / Oermann / Cho / Ranganath as advisor map | Replace with Chen / Obermeyer / Alaa (see `01-faculty.md`) |
| “I want to build this on NYU’s models first” | “I want to build this where multi-site clinical data and deployment partnerships already exist — UCSF Health + UC-wide warehouse” |

---

## Documented multi-site / clinical opportunities (CPH)

These are **program-documented** resources, not personal promises of access:

1. **UC Health Data Warehouse** — de-identified EHR, OMOP, **>7M patients**, five UC medical centres (UCSF, UC Davis, UCLA, UCSD, UCI) since 2012.  
   **SOURCED:** https://computationalhealth.berkeley.edu/computing-resources/

2. **UCSF Information Commons / CDW** — de-identified structured data, machine-redacted clinical notes, imaging; identified data only with IRB.  
   **SOURCED:** same computing-resources page; also https://data.ucsf.edu/research/ucsf-data

3. **Partnership with UCSF Health** for testing AI/ML tools in clinical practice (program claim).  
   **SOURCED:** https://computationalhealth.berkeley.edu/ · https://computationalhealth.berkeley.edu/about/

4. **AGG clinical breadth** — faculty from UCSF Health, VA, Zuckerberg San Francisco General (program about page).  
   **SOURCED:** https://computationalhealth.berkeley.edu/about/

5. Scale figures on homepage (notes/images/patients) — **SOURCED** homepage; treat as program marketing numbers, not a personal dataset guarantee.

**UNCERTAIN:** Whether a first-year student can run multi-centre UC warehouse analyses in year 1 without a specific advisor’s sponsorship. Rotations (one per campus) are the realistic path (**SOURCED** handbook).

---

## Adapted research question (CPH voice)

When a health system deploys a model trained on its own notes or local labels, nobody can currently say, for one patient prediction, how much of that score rests on generalisable clinical signal versus that site’s documentation, coding, and operational habits. Cross-site failure is already documented in the literature (including hospital-fingerprint effects in imaging and cost-as-proxy bias in risk scores). Domain-generalisation trainers often fail to beat pooled training on clinical multi-site benchmarks. The missing piece is a **falsifiable, per-prediction measurement**: how much of *this* score is site-invariant vs site-specific, validated when the model is tested under a different site’s distribution, with a pre-registered check for prevalence shift across environments.

Bay Area / UC angle: treat **UC medical centres (and UCSF sites with different care contexts)** as environments, not NYU campuses. Obermeyer’s proxy-label work and Chen’s audit/shift work are the local intellectual neighbours; Alaa’s multimodal + causal toolkit is a methods neighbour.

---

## Method commitments that still travel

Keep from the working thesis (do not re-litigate here):

- Audit / measurement framing, not “another IRM trainer that will beat ERM.”
- Per-prediction decomposition (invariant vs site-specific evidence).
- Pre-register prevalence-heterogeneity checks across environments.
- Tie the output to a deployment decision (do not deploy / local recalibration / escalate), not a decorative explainer.
- Hungry-judge analogy: pedagogical only, never evidence spine.
- Prefer Obermeyer 2019 and Zech/Oermann-style hospital-shortcut evidence as load-bearing cases.

---

## Applicant anchors that stay (safe set)

Use only these biographical/technical anchors in CPH prose:

- Hospital compound childhood (father worked there) — simple, no volunteering claim until checked.
- Medium article on bias / underrepresentation amplified by AI.
- MSc thesis *Cracks in the Feed* (DSA; multimodal; single-annotator honesty).
- Bioethics contact at BMC Uppsala; EU AI Act healthcare conference attendance.
- Real KFSH role: CSICU/procedures Power BI dashboard data dictionary (one month) — **never** the fabricated electrophoresis pilot.
- Fyris AI ER patient-demand forecasting model.
- Akademiska / Hospital Data Integration cohort work (human-research side, honest scope).

---

## Named gaps (say out loud)

- No prior UC Health / Epic research appointment.
- No published clinical foundation model.
- Health direction is deliberate and early (Medium + bioethics + hospital exposure), but the heavy clinical ML publication record is still ahead.
- Pakistani international applicant; funding path is institutional CPH support (documented), not NRT.

---

## One-sentence CPH pitch

I want to build an audit layer that, for each prediction from a clinical model trained on real EHR/notes, estimates how much of the score is site-invariant medicine versus site-specific process — and validate that split on multi-site UC / UCSF data where deployment pressure is real.
