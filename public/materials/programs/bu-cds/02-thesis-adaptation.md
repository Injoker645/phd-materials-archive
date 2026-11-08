# Thesis adaptation — NYU scaffolding off, portable measurement on

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) **v4** (audit / measurement framing).
> Rule for BU CDS: remove NYUTron/Lang1/Manhattan–Brooklyn as *required* objects of study; keep the portable measurement claim; name BU multi-site / BMC opportunities only if real and access-hedged.

---

## What stays (portable core)

Locked by thesis v4; still correct without NYU:

1. **Gap:** For a specific prediction from a clinical foundation / operational model trained on local notes, we cannot currently say how much of the score rests on site-invariant medical signal vs site-specific documentation and operational habit.
2. **Framing:** Provenance **measurement / audit**, not a new end-to-end training method that claims to remove site-specific signal. Domain-generalisation trainers already exist and often fail to beat pooled ERM on clinical multi-site benchmarks.
3. **Method shape (portable):** Probe frozen representations for an invariant vs site-specific split → per-prediction attribution onto that split → **pre-register a prevalence-difference check across environments** → wrap the invariant component in a decision-shaped output (conformal validity / deploy-or-recalibrate).
4. **Differentiation line:** Aggregate invariance / disease-vs-process modelling exists (e.g. Lasko, Strobl & Stead 2024); per-prediction Shapley without multi-site invariance exists; the **combination** for score-output clinical models is the claim to defend.

---

## What to remove or demote for BU CDS

| NYU-anchored piece | BU CDS treatment |
|---|---|
| NYUTron / Lang1 as the object of study | Demote to existence proof that clinical FMs encode site-linked behaviour. Prefer "hospital-trained clinical foundation / operational models." |
| Manhattan vs Brooklyn as the first study | Replace with **multi-environment clinical settings reachable through CDS rotations and Medical Campus / BMC collaborators**, once an advisor path exists. Keep the same-system independence warning. |
| Oermann / Cho / Ranganath committee | Replace with Kolachalama (DG / clinical ML), Nsoesie (equity), Pacchiano or Paschalidis (fairness / robust computational medicine). |
| "I want to build this where Nature Fig. 3 already published the gap" | Drop. BU SoP/RS should not depend on NYU Langone internal data. |

---

## BU multi-site / clinical opportunities (real vs soft)

| Opportunity | Why it matters for the thesis | Status |
|---|---|---|
| CDS research rotations (two required) + unbound advisor match by end of year 2 | Structural time to find a clinical-data path before locking the thesis home | **SOURCED** FAQs |
| Kolachalama lab: domain generalisation and clinical deployment software | Natural methods neighbour; imaging-heavy — hedge modality | **SOURCED** faculty page |
| Paschalidis / Hariri Institute convergence (engineering + biostatistics + computing) | Bridge toward computational medicine collaborators | **SOURCED** Paschalidis / Hariri profiles |
| Boston Medical Center / BU medical enterprise | Likely clinical collaborator surface for CDS health-AI students | **UNCERTAIN** exact student data-access path until admitted + mentor; do **not** claim BMC EHR access in the application |
| Batmanghelich (ENG) multimodal clinical / causality themes | Strong topical overlap; CDS-advisor checkbox unclear | **UNCERTAIN** for primary listing; fine as "BU collaborators across Hariri / ENG" once admitted |
| Same-system independence problem | If environments are wards or sites inside one enterprise, prevalence and documentation-habit differences must still be checked | Methodological carry-over (**UNCERTAIN** as empirical claim about BMC until measured) |

---

## BU-specific thesis statement (two sentences for Research Statement)

> When a hospital deploys a model trained on its own notes, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that hospital's documentation and operational habits. I want to build a per-prediction audit that decomposes clinical model outputs into site-invariant and site-specific evidence, validated across multi-environment clinical settings reachable through CDS rotations and BU health collaborators, under a pre-registered check for prevalence shift, and tied to a deploy-or-recalibrate decision rather than a decorative explanation score.

---

## Objections that transfer unchanged

- Audit vs new trainer (keep audit).
- Prevalence heterogeneity as a boundary condition (keep pre-registration).
- Diagnostic without a decision (keep conformal / deploy-or-recalibrate).
- Hungry-judge analogy: pedagogy only; never application evidence spine.

## Objection that changes

- "NYU-anchored first study" → **BU-collaborator-anchored first study, method still portable.** External public checks (e.g. MIMIC) remain options; do not promise proprietary data he cannot name.

## CDS-specific opportunity

The two-year rotation window is a feature for this thesis: he can land methods fit (Kolachalama / Pacchiano) and clinical-environment fit (Medical Campus collaborator) without pretending he already has BMC credentials.

---

## Claim hygiene when adapting

- Never reintroduce the fabricated KFSH electrophoresis pilot.
- Soften Uppsala bioethics grant as **trust / blame when a decision comes from a person versus a system** (PICK-ONE still open; ceiling: "worked on a grant proposal").
- Safe bio spine only: hospital compound childhood; Medium article on bias amplification; *Cracks in the Feed*; bioethics contact; KFSH & RC procedures dashboard (March 2024); Fyris AI ER demand model.
