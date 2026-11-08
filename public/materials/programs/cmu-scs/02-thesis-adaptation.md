# Thesis adaptation - NYU scaffolding off, MLD methods on

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) **v4** (audit / measurement framing). 
> Rule for CMU: remove NYUTron / Lang1 / Manhattan-Brooklyn as *required* objects of study; keep the portable measurement claim; name UPMC / multi-hospital opportunities only as reachable-in-principle via CMLH and clinical collaborators.

---

## What stays (portable core)

Locked by thesis v4; still correct without NYU:

1. **Gap:** For a specific prediction from a clinical foundation / operational model trained on local notes, we cannot currently say how much of the score rests on site-invariant medical signal vs site-specific documentation and operational habit.
2. **Framing:** Provenance **measurement / audit**, not a new end-to-end training method that claims to remove site-specific signal. Domain-generalisation trainers already exist and often fail to beat pooled ERM on clinical multi-site benchmarks.
3. **Method shape:** Probe frozen representations for an invariant vs site-specific split → per-prediction attribution onto that split → **pre-register a prevalence-difference check across environments** → wrap the invariant component in a decision-shaped output (conformal validity / deploy-or-recalibrate).
4. **Differentiation:** Aggregate disease-vs-process modelling exists (e.g. Lasko, Strobl & Stead 2024); per-prediction Shapley without multi-site invariance exists; the **combination** for score-output clinical models is the claim to defend.

---

## What to remove or demote for CMU

| NYU-anchored piece | CMU treatment |
|---|---|
| NYUTron / Lang1 as the object of study | Demote to existence proof that clinical FMs encode site-linked behaviour. Prefer "hospital-trained clinical foundation / operational models." |
| Manhattan vs Brooklyn as the first study | Replace with **multi-hospital / multi-system environments** reachable through UPMC partnerships and CMLH-linked clinical collaborators, with MIMIC or another public multi-site corpus as a methods sandbox if needed. |
| Oermann / Cho / Ranganath committee | Replace with Lipton (shift / clinical reliability), Wilder (valid robust decisions / health evaluation), optional Zhang (causal / heterogeneous environments). |
| "Build this where Nature Fig. 3 already showed the gap" | Drop. CMU SoP must not depend on NYU Langone internal data. |

---

## CMU / UPMC multi-site opportunities (real vs soft)

| Opportunity | Why it matters | Status |
|---|---|---|
| CMLH / Pittsburgh Health Data Alliance (CMU, Pitt, UPMC) | Named collaboration for clinical expertise and data-driven health innovation | **SOURCED** https://www.cs.cmu.edu/cmlh/ |
| CMLH services include connections to clinical expertise and data (faculty project support language) | Soft path to environments for site-as-environment tests | **SOURCED** CMLH "What We Do" / services text |
| Student access to UPMC EHR for a first-year project | Not automatic; depends on adviser, IRB, and partnership | **UNCERTAIN** - phrase as reachable in principle, never as pre-arranged |
| Same-system independence problem | UPMC hospitals may share Epic / compliance culture - analogous to NYU Manhattan/Brooklyn. Prevalence and documentation-habit differences must still be checked | Methodological carry-over (**UNCERTAIN** as empirical claim until measured) |
| Public multi-site clinical benchmarks / MIMIC-style corpora | Methods development and falsification before private health-system access | Standard practice; exact dataset choice **UNCERTAIN** until adviser |

---

## Why this thesis fits MLD specifically

| Thesis need | MLD fit |
|---|---|
| Distribution shift as the measurement backbone | Lipton lab theme: natural distribution shifts; robust / adaptive ML |
| Causal / invariance vocabulary without becoming pure philosophy | Zhang (affiliate) and MLD statistics/ML core courses |
| Audit must change a decision | Wilder: legible, valid, robust decision-making; healthcare evaluation |
| Clinical notes / operational models | Lipton clinical medicine + language; CMLH health bridge |
| Interpretability without XAI-as-trust theatre | Audit framing sidesteps saliency; Perer only if the deliverable becomes an interface |

CSD could host adjacent work, but the **home** for a falsifiable invariance-plus-attribution methods thesis is MLD.

---

## CMU-specific thesis statement (two sentences for SoP)

> When a hospital deploys a model trained on its own notes, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that hospital's documentation and operational habits. I want to build a per-prediction audit that decomposes clinical model outputs into site-invariant and site-specific evidence, validated across multi-hospital environments reachable through CMU's health partnerships, under a pre-registered check for prevalence shift, and tied to a deploy-or-recalibrate decision rather than a decorative explanation score.

---

## Objections that transfer unchanged

- Audit vs new trainer (keep audit).
- Prevalence heterogeneity as a boundary condition (keep pre-registration).
- Diagnostic without a decision (keep conformal / deploy-or-recalibrate).
- Hungry-judge analogy: pedagogy only; never SoP evidence spine.

## Objection that changes

- "NYU-anchored first study" → **CMU/UPMC-anchored first study where access exists, method still portable.** Do not promise private EHR he cannot name.

---

## Claim hygiene when adapting

- Never reintroduce the fabricated KFSH electrophoresis pilot.
- Soften Uppsala bioethics grant as **trust / blame when a decision comes from a person versus a system**.
- Safe bio spine only: hospital compound childhood; Medium article on bias amplification; *Cracks in the Feed*; bioethics contact; KFSH & RC procedures dashboard (March 2024); Fyris AI ER demand model.
