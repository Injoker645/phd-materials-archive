# Thesis adaptation - NYU scaffolding off, JHU CS methods on

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) **v4** (audit / measurement framing).  
> Rule for JHU: remove NYUTron / Lang1 / Manhattan-Brooklyn as *required* objects of study; keep the portable measurement claim; name JH Medicine / multi-hospital opportunities only as reachable-in-principle via Malone, clinical collaborators, and (if relevant) East Baltimore informatics.

---

## What stays (portable core)

Locked by thesis v4; still correct without NYU:

1. **Gap:** For a specific prediction from a clinical foundation / operational model trained on local notes, we cannot currently say how much of the score rests on site-invariant medical signal vs site-specific documentation and operational habit.
2. **Framing:** Provenance **measurement / audit**, not a new end-to-end training method that claims to remove site-specific signal. Domain-generalisation trainers already exist and often fail to beat pooled ERM on clinical multi-site benchmarks.
3. **Method shape:** Probe frozen representations for an invariant vs site-specific split → per-prediction attribution onto that split → **pre-register a prevalence-difference check across environments** → wrap the invariant component in a decision-shaped output (conformal validity / deploy-or-recalibrate).
4. **Differentiation:** Aggregate disease-vs-process modelling exists (e.g. Lasko, Strobl & Stead 2024); per-prediction Shapley without multi-site invariance exists; the **combination** for score-output clinical models is the claim to defend.

---

## What to remove or demote for JHU

| NYU-anchored piece | JHU treatment |
|---|---|
| NYUTron / Lang1 as the object of study | Demote to existence proof that clinical FMs encode site-linked behaviour. Prefer "hospital-trained clinical foundation / operational models." |
| Manhattan vs Brooklyn as the first study | Replace with **multi-hospital / multi-campus environments** reachable through JH Medicine and Malone-linked collaborators, with MIMIC or another public multi-site corpus as a methods sandbox if needed. |
| Oermann / Cho / Ranganath committee | Replace with Oberst (evaluation / monitoring), Saria (clinical ML deployment), optional Shpitser (causal / EHR complications). |
| "Build this where Nature Fig. 3 already showed the gap" | Drop. JHU SoP must not depend on NYU Langone internal data. |

---

## JHU / JH Medicine multi-site opportunities (real vs soft)

| Opportunity | Why it matters | Status |
|---|---|---|
| Malone Center for Engineering in Healthcare | Named engineering-in-healthcare home linking CS methods to clinical partners | **SOURCED** Saria / Malone faculty pages |
| Johns Hopkins Medicine / multi-hospital deployments (e.g. Bayesian Health public multi-site story) | Shows that multi-hospital evaluation is culturally real at Hopkins, not aspirational branding | **SOURCED** as public deployment narrative; **not** a promise of student data access |
| Homewood ↔ East Baltimore shuttle | Makes CS-home + medical-campus collaboration logistically plausible | **SOURCED** JHU Transportation |
| Student access to JH Medicine EHR for a first-year project | Not automatic; depends on adviser, IRB, and partnership | **UNCERTAIN** - phrase as reachable in principle, never as pre-arranged |
| Same-system independence problem | JH campuses / affiliates may share Epic / compliance culture - analogous to NYU Manhattan/Brooklyn. Prevalence and documentation-habit differences must still be checked | Methodological carry-over (**UNCERTAIN** as empirical claim until measured) |
| Public multi-site clinical benchmarks / MIMIC-style corpora | Methods development and falsification before private health-system access | Standard practice; exact dataset choice **UNCERTAIN** until adviser |

---

## Why this thesis fits CS (not only HSI)

| Thesis need | CS fit |
|---|---|
| Audit as evaluation infrastructure | Oberst: evaluation and monitoring of AI systems in healthcare |
| Clinical deployment reality | Saria: ML + healthcare; Malone; operational predictive systems |
| Causal / invariance vocabulary | Shpitser: causal inference and EHR complications |
| Decision-shaped output | Evaluation framing: a number that does not change deploy / recalibrate / hold is decoration |
| Optional informatics depth | HSI / Kharrazi / Overby Taylor if a second door or committee is needed |

HSI could host adjacent work, but the **home** for a falsifiable invariance-plus-attribution methods thesis is CS.

---

## JHU-specific thesis statement (two sentences for SoP)

> When a hospital deploys a model trained on its own notes, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that hospital's documentation and operational habits. I want to build a per-prediction audit that decomposes clinical model outputs into site-invariant and site-specific evidence, validated across multi-hospital environments reachable through Johns Hopkins' clinical partnerships, under a pre-registered check for prevalence shift, and tied to a deploy-or-recalibrate decision rather than a decorative explanation score.

---

## Objections that transfer unchanged

- Audit vs new trainer (keep audit).
- Prevalence heterogeneity as a boundary condition (keep pre-registration).
- Diagnostic without a decision (keep conformal / deploy-or-recalibrate).
- Hungry-judge analogy: pedagogy only; never SoP evidence spine.

## Objection that changes

- Cho anti-mechanism tension: replace with Saria deployment-minded / Oberst evaluation language if talking JHU faculty. Different conversational tension; same audit stance.
