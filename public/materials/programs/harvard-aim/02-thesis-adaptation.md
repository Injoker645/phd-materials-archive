# Thesis adaptation — NYU scaffolding off, portable measurement on

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) **v4** (audit / measurement framing).
> Rule for Harvard: remove NYUTron/Lang1/Manhattan–Brooklyn as *required* objects of study; keep the portable measurement claim; name Harvard/MGB multi-site opportunities only if real.

---

## What stays (portable core)

Locked by thesis v4; still correct without NYU:

1. **Gap:** For a specific prediction from a clinical foundation / operational model trained on local notes, we cannot currently say how much of the score rests on site-invariant medical signal vs site-specific documentation and operational habit.
2. **Framing:** Provenance **measurement / audit**, not a new end-to-end training method that claims to remove site-specific signal. Domain-generalisation trainers already exist and often fail to beat pooled ERM on clinical multi-site benchmarks (argument lives in NYU research corpus; do not re-litigate here).
3. **Method shape (portable):** Probe frozen representations for an invariant vs site-specific split → per-prediction attribution onto that split → **pre-register a prevalence-difference check across environments** → wrap the invariant component in a decision-shaped output (conformal validity / deploy-or-recalibrate), not a decorative percentage.
4. **Differentiation line:** Aggregate invariance / disease-vs-process modelling exists (e.g. Lasko, Strobl & Stead 2024 disease vs process model); per-prediction Shapley without multi-site invariance exists; the **combination** for score-output clinical models is the claim to defend. Cite carefully; do not invent "nobody has ever thought about site shift."

---

## What to remove or demote for Harvard

| NYU-anchored piece | Harvard treatment |
|---|---|
| NYUTron / Lang1 as the object of study | Demote to *existence proof that clinical FMs encode site-linked behaviour*, not as the required dataset. Prefer generic "hospital-trained clinical foundation / operational models." |
| Manhattan vs Brooklyn as the first study | Replace with **multi-hospital / multi-system environments available through AIM's Boston hospital partnerships and multi-institutional EHR infrastructures** (see below). Keep the methodological warning: campuses in one health system are a low-variance test. |
| Oermann / Cho / Ranganath as the three-angle committee | Replace with Kohane–Manrai (values/audit), Cai (multi-site EHR methods), Rajpurkar (evaluation / clinician–AI). |
| "I want to build this where the gap was already published in Nature Fig. 3" | Drop. Harvard SoP should not depend on NYU Langone internal data. |

---

## Harvard / MGB multi-site opportunities (real vs soft)

| Opportunity | Why it matters for the thesis | Status |
|---|---|---|
| AIM first-year clinical shadowing + Boston hospital partners | Clinical immersion; stakeholder access for "what decision does the audit change" | **SOURCED** https://dbmi.hms.harvard.edu/education/phd-program/ai-medicine-phd-track |
| AIM co-mentorship + common datasets | Programme-stated advising/data model | **SOURCED** https://bmiphd.hms.harvard.edu/ |
| Mass General Brigham Research Patient Data Registry (RPDR) | Central EHR warehouse across tertiary, community, and specialty hospitals in the MGB system (BWH, MGH, Faulkner, Newton-Wellesley, North Shore, Wentworth-Douglass, Dana-Farber, McLean, Mass Eye and Ear, Spaulding, primary care centres — per MGB overview) | **SOURCED** https://www.massgeneralbrigham.org/en/research-and-innovation/centers-and-programs/center-for-integrated-healthcare-data-research/overview and https://rc.partners.org/rpdr |
| Access caveat | RPDR access is for credentialed MGB researchers with appropriate appointments/IRB — **not** something an applicant can claim as already available. Phrase as "environments that AIM's hospital partnerships make reachable in principle," not "I will use RPDR in year one." | **UNCERTAIN** exact student access path until admitted + mentor |
| 4CE (Consortium for Clinical Characterization of COVID-19 by EHR) | International multi-hospital federated EHR analyses; DBMI faculty list includes Kohane, Cai, Weber, others | **SOURCED** https://dbmi.hms.harvard.edu/projects |
| Cai lab multi-institutional EHR representation learning | Published cross-system EHR methods (US/France line on faculty page) — empirical neighbour for site-as-environment | **SOURCED** https://dbmi.hms.harvard.edu/people/tianxi-cai |
| Same-system independence problem | MGB hospitals share Epic / compliance / overlapping culture — analogous to NYU Manhattan/Brooklyn. Prevalence and documentation-habit differences must still be checked, not assumed. | Methodological carry-over (**UNCERTAIN** as empirical claim about MGB until measured) |

---

## Harvard-specific thesis statement (two sentences for SoP)

> When a hospital deploys a model trained on its own notes, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that hospital's documentation and operational habits. I want to build a per-prediction audit that decomposes clinical model outputs into site-invariant and site-specific evidence, validated across multi-hospital environments reachable through AIM's Boston partnerships, under a pre-registered check for prevalence shift, and tied to a deploy-or-recalibrate decision rather than a decorative explanation score.

---

## Objections that transfer unchanged

- Audit vs new trainer (keep audit).
- Prevalence heterogeneity as a boundary condition for invariance methods (keep pre-registration).
- Diagnostic without a decision (keep conformal / deploy-or-recalibrate).
- Hungry-judge analogy: pedagogy only; never SoP evidence spine.

## Objection that changes

- "NYU-anchored first study" → **Harvard/MGB-anchored first study, method still portable.** External check could be MIMIC or another non-MGB system later; do not promise data he cannot name.

---

## Claim hygiene when adapting

- Never reintroduce the fabricated KFSH electrophoresis pilot.
- Soften Uppsala bioethics grant as **trust / blame when a decision comes from a person versus a system** (PICK-ONE still open in claim inventory; ceiling: "worked on a grant proposal").
- Safe bio spine only: hospital compound childhood; Medium article on bias amplification; *Cracks in the Feed*; bioethics contact; KFSH & RC procedures dashboard (March 2024); Fyris AI ER demand model.
