# Thesis adaptation — Columbia DBMI (portable method)

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) v4 (audit / provenance measurement).  
> Rule: keep the method; swap the first-study scaffolding from NYU Langone → Columbia / NYP / OHDSI-compatible multi-site settings **only where real**.

---

## What ports unchanged

1. **Problem:** for a score-output clinical model, nobody can currently say, for one prediction, how much evidence is site-invariant vs site-specific.  
2. **Framing:** measurement / audit layer on (mostly) frozen models, not another domain-generalisation trainer that tries to erase the gap in aggregate.  
3. **Method sketch:** environments-as-sites → invariant vs site-specific representation split (Fishr-style / ICP-aware, with prevalence-shift pre-check) → per-prediction attribution onto that split → conformal / deploy-or-recalibrate decision wrap.  
4. **Named gap vs prior art:** Lasko/Strobl/Stead disease-vs-process models; Strobl/Lasko per-patient Shapley; IRM/DG training that often fails to beat pooled ERM on clinical multi-site benchmarks; Ahmed et al. provenance gap for generative systems. Combination (per-prediction + multi-site invariance test + score-output audit) remains the novelty claim.  
5. **Voice constraints:** British spelling; no em dashes; named gaps; no prestige flattery; never the fabricated KFSH electrophoresis pilot.

---

## What must change (NYU scaffolding → Columbia)

| NYU-specific piece | Columbia adaptation | Reality check |
|---|---|---|
| Anchor first study in NYUTron / Lang1 + Manhattan vs Brooklyn | Anchor in **models and sites available at CUIMC / NYP / OHDSI partners**, or public multi-site EHR benchmarks (e.g. MEDS-DEV public sets) while seeking local private data | Local FM family is **not** NYUTron. McDermott/Joshi CUMC EHR FM benchmarking (FoMoH / MEDS) is the honest local hook. **SOURCED** McDermott/Joshi lab materials. |
| "Starting where the gap was published (Nature Fig. 3)" | "Starting where multi-site observational infrastructure and EHR FMs already exist (OHDSI coordinating centre; MEDS; CUMC OMOP)" | Do not pretend Columbia published the NYU Manhattan/Brooklyn result. Cite NYU/Zech-style results as *field evidence*, Columbia as *where to build the measurement*. |
| Medical School Track / CDS collaborators | BMI PhD rotations + NYP/CUIMC clinical collaborators via advisor | Rotations are structural in year one. **SOURCED** PhD page. |
| Cho anti-mechanism tension | Replace with Joshi/Hripcsak causal-validation / reliability language if talking Columbia faculty | Different conversational tension; same audit stance. |

---

## Is the NewYork-Presbyterian / CUIMC multi-site angle real?

**Yes, as network infrastructure; careful as "two campuses of one system."**

### What is real (**SOURCED**)

- Columbia is the **OHDSI coordinating centre**; network studies run the same analytics across many databases without shipping patient-level data. [OHDSI at DBMI](https://www.dbmi.columbia.edu/ohdsi/).
- OHDSI lists **NYP/CUMC** EHR (~millions of patients) on OMOP CDMv5. [Columbia collaborator page](https://www.ohdsi.org/who-we-are/collaborators/columbia-university/).
- McDermott's **MEDS** explicitly targets multi-institution ML without forcing full vocabulary harmonisation; already used across many institutions; Columbia private subsets appear in MEDS-DEV write-ups. [MEDS feature](https://www.dbmi.columbia.edu/the-universal-adapter-how-matthew-mcdermott-is-bridging-the-gap-between-health-data-and-artificial-intelligence/).
- WCM / NYP / CUIMC operate under a **tripartite data-sharing** regime; requests that break out data **by hospital campus or site**, or that span institutions, go through **TRAC**. [Weill Cornell EHR page](https://its.weill.cornell.edu/services/research-informatics/ehr-data-and-reporting).

### What is **UNCERTAIN** / do not overclaim in the SOP

- That a first-year student automatically gets campus-stratified NYP labels analogous to NYU Manhattan/Brooklyn. Access is advisor-, IRB-, and TRAC-dependent.
- That NYP campuses are "independent environments" in the causal sense. Same system / shared processes can shrink site variance (same Objection 7 as NYU). Prevalence-shift pre-registration still required.
- Exact private CUMC foundation-model artefacts available for student audit work (FoMoH is a research programme, not a public NYUTron equivalent).

### Honest first-study ladder (write this shape, not a promise of data)

1. **Public multi-site EHR benchmarks** (MEDS-DEV / MIMIC / eICU-class sets) to debug the attribution method.  
2. **CUMC / NYP OMOP** under advisor supervision for a local operational model or FM head.  
3. **OHDSI network replication** of the *audit statistic* (not patient-level sharing) if Stage 1 works — this is Columbia's distinctive upside vs a single-hospital lab.

---

## Differentiation from NYU (same city — required)

Columbia is not "NYU but uptown." The intellectual difference to state:

- **NYU pitch:** study the provenance gap on the models and campuses where the transfer failure was published (Langone FM family).  
- **Columbia pitch:** build the same measurement where **multi-site observational infrastructure is the department's native stack** (OHDSI/OMOP + MEDS + fairness/generalisation faculty), so the audit can be designed to travel across databases from day one.

Do not insult either programme. Geography is shared; **methodological home** differs (CDS / FM lab culture at NYU Langone vs BMI + observational network culture at Columbia).

---

## One-paragraph thesis statement for Columbia SOP use

When a hospital deploys a model trained on its own records, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that site's documentation and operational habits. Cross-site evaluation in the literature already shows the gap is real, but most tools either try to train the gap away in aggregate or ask for explanations that may not be faithful. I want to build a per-prediction decomposition into site-invariant and site-specific evidence, validated under a pre-registered check for prevalence shift across environments, and tied to a deploy / locally recalibrate / escalate decision. Columbia DBMI is the place to do that because the OHDSI/OMOP and MEDS stack makes multi-environment evaluation a first-class workflow rather than an afterthought, and because faculty here already work on clinical foundation models, domain shift, and fairness audits on EHR data.
