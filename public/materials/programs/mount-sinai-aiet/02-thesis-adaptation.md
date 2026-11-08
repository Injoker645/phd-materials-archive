# Thesis adaptation — Mount Sinai AIET (portable method)

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) v4 (audit / provenance measurement).  
> Rule: keep the method; swap the first-study scaffolding from NYU Langone → Mount Sinai Health System / MSDW / AIR·MS settings **only where real**.

---

## What ports unchanged

1. **Problem:** for a score-output clinical model, nobody can currently say, for one prediction, how much evidence is site-invariant vs site-specific.  
2. **Framing:** measurement / audit layer on (mostly) frozen models, not another domain-generalisation trainer that tries to erase the gap in aggregate.  
3. **Method sketch:** environments-as-sites → invariant vs site-specific representation split (Fishr-style / ICP-aware, with prevalence-shift pre-check) → per-prediction attribution onto that split → conformal / deploy-or-recalibrate decision wrap.  
4. **Named gap vs prior art:** Lasko/Strobl/Stead disease-vs-process models; Strobl/Lasko per-patient Shapley; IRM/DG training that often fails to beat pooled ERM on clinical multi-site benchmarks; Ahmed et al. provenance gap for generative systems. Combination (per-prediction + multi-site invariance test + score-output audit) remains the novelty claim.  
5. **Voice constraints:** British spelling; no em dashes; named gaps; no prestige flattery; never the fabricated KFSH electrophoresis pilot.

---

## What must change (NYU scaffolding → Mount Sinai)

| NYU-specific piece | Mount Sinai adaptation | Reality check |
|---|---|---|
| Anchor first study in NYUTron / Lang1 + Manhattan vs Brooklyn | Anchor in **models and hospital sites available inside MSHS** (MSDW OMOP / AIR·MS), or public multi-site EHR benchmarks while seeking local private data | Local FM family is **not** NYUTron. InfEHR-class EHR representations and MSHS operational models are the honest local objects. **SOURCED** MSDW; InfEHR news. |
| "Starting where the gap was published (Nature Fig. 3)" | "Starting where a multi-hospital Epic system and research warehouse already exist (MSHS / MSDW), and where clinical AI groups already evaluate across sites" | Do not pretend Mount Sinai published the NYU Manhattan/Brooklyn result. Cite NYU/Zech-style results as *field evidence*, Sinai as *where to build the measurement*. |
| Medical School Track / CDS collaborators | AIET rotations + AI and Human Health / HPI-MS clinical collaborators via advisor | Exact rotation rules for AIET: confirm in handbook when admitted (**UNCERTAIN** detail). |
| Cho anti-mechanism tension | Replace with Nadkarni/Glicksberg deployment-and-likelihood language if talking Sinai faculty | Different conversational tension; same audit stance. |

---

## Is the Mount Sinai multi-hospital angle real?

**Yes, as health-system infrastructure; careful as "independent causal environments."**

### What is real (**SOURCED**)

- Epic is primary across MSHS; MSDW extracts Clarity/Caboodle into **OMOP**, daily updates, research access under IRB. [MSDW About](https://labs.icahn.mssm.edu/msdw/about-us/); [Services](https://labs.icahn.mssm.edu/msdw/services/).
- Multiple hospitals with distinct Epic go-live years (MSH, Queens, West, Morningside, Brooklyn, Beth Israel) are listed on MSDW materials. That is a **real within-system site axis**, closer to NYU's campus split than to a fantasy of automatically independent hospitals.
- AIR·MS packages MSDW for AI-ready research (identifiable and de-identified).  
- InfEHR evaluated on Mount Sinai **and** UC Irvine EHRs: proof that this faculty ecosystem already does cross-system evaluation when the science needs it. [Mount Sinai InfEHR news](https://www.mountsinai.org/about/newsroom/2025/ai-system-finds-crucial-clues-for-diagnoses-in-electronic-health-records).

### What is **UNCERTAIN** / do not overclaim in the SOP

- That a first-year student automatically gets hospital-stratified labels analogous to NYU Manhattan/Brooklyn. Access is advisor-, IRB-, and Scientific Computing-dependent.
- That MSHS hospitals are "independent environments" in the causal sense. Same vendor, shared policies, and shared documentation culture can shrink site variance (same Objection 7 as NYU). Prevalence-shift pre-registration still required.
- Exact private foundation-model artefacts available for student audit work (InfEHR is a published framework, not a public NYUTron equivalent you can download).

### Honest first-study ladder (write this shape, not a promise of data)

1. **Public multi-site EHR benchmarks** (MEDS-DEV / MIMIC / eICU-class sets) to debug the attribution method.  
2. **MSHS OMOP / AIR·MS** under advisor supervision for a local operational model or EHR representation head.  
3. **Cross-system replication** of the *audit statistic* only if the lab already has an external partner workflow (InfEHR-style), not as a year-one entitlement.

---

## Differentiation from NYU (same city — required)

Mount Sinai is not "NYU but further uptown." The intellectual difference to state:

- **NYU pitch:** study the provenance gap on the models and campuses where the transfer failure was published (Langone FM family).  
- **Mount Sinai pitch:** build the same measurement where **a multi-hospital Epic health system and AI-and-Human-Health faculty already treat EHR as operational substrate** (MSDW / AIR·MS + clinical AI deployment culture), so the audit can be designed against real system sites from day one.

Do not insult either programme. Geography is shared; **methodological home** differs (CDS / FM lab culture at NYU Langone vs AIET inside a biomedical PhD + Windreich AI and Human Health / HPI-MS stack at Sinai).

Vs Columbia (also NYC): Columbia's distinctive upside is OHDSI coordinating-centre / multi-database observational culture. Sinai's distinctive upside is **health-system-native multi-hospital Epic + AI department embedded in the medical school**. Pick the sentence that matches the application; do not trash the other.

---

## One-paragraph thesis statement for Mount Sinai SOP use

When a hospital deploys a model trained on its own records, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that site's documentation and operational habits. Cross-site evaluation in the literature already shows the gap is real, but most tools either try to train the gap away in aggregate or ask for explanations that may not be faithful. I want to build a per-prediction decomposition into site-invariant and site-specific evidence, validated under a pre-registered check for prevalence shift across environments, and tied to a deploy / locally recalibrate / escalate decision. Mount Sinai's AIET training area is the place to do that because the work sits inside a biomedical PhD attached to a multi-hospital Epic system with a research warehouse and AI-and-Human-Health faculty who already build and evaluate clinical models on those records.
