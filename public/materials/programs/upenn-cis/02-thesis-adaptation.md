# Thesis adaptation — UPenn CIS (portable method)

> Source thesis: [`../../thesis/working-thesis.md`](../../thesis/working-thesis.md) v4 (audit / provenance measurement).  
> Rule: keep the method; swap the first-study scaffolding from NYU Langone → Penn Medicine / UPHS / IBI-accessible settings **only where real**.

---

## What ports unchanged

1. **Problem:** for a score-output clinical model, nobody can currently say, for one prediction, how much evidence is site-invariant vs site-specific.  
2. **Framing:** measurement / audit layer on (mostly) frozen models, not another domain-generalisation trainer that tries to erase the gap in aggregate.  
3. **Method sketch:** environments-as-sites → invariant vs site-specific representation split (Fishr-style / ICP-aware, with prevalence-shift pre-check) → per-prediction attribution onto that split → conformal / deploy-or-recalibrate decision wrap.  
4. **Named gap vs prior art:** Lasko/Strobl/Stead disease-vs-process models; Strobl/Lasko per-patient Shapley; IRM/DG training that often fails to beat pooled ERM on clinical multi-site benchmarks; Ahmed et al. provenance gap for generative systems. Combination (per-prediction + multi-site invariance test + score-output audit) remains the novelty claim.  
5. **Voice constraints:** British spelling; no em dashes; named gaps; no prestige flattery; never the fabricated KFSH electrophoresis pilot.

---

## What must change (NYU scaffolding → Penn)

| NYU-specific piece | Penn adaptation | Reality check |
|---|---|---|
| Anchor first study in NYUTron / Lang1 + Manhattan vs Brooklyn | Anchor in **models and sites available via Penn Medicine / UPHS / AI-4-AI / IBI**, or public multi-site EHR benchmarks while seeking local private data | Local FM family is **not** NYUTron. Eaton's multimodal clinical FM / ambient AI projects and Johnson's applied outpatient AI stack are the honest local hooks. **SOURCED** Eaton homepage; AI-4-AI about. |
| "Starting where the gap was published (Nature Fig. 3)" | "Starting where applied clinical AI and multi-hospital health-system data already meet CIS methods faculty (AI-4-AI; IBI; UPHS)" | Do not pretend Penn published the NYU Manhattan/Brooklyn result. Cite NYU/Zech-style results as *field evidence*, Penn as *where to build the measurement*. |
| Medical School Track / CDS collaborators | CIS advisor + IBI / DBEI collaborators (Mowery CRI core; Long causal/fairness) | Health path is **advisor-assembled**, not a named track. **SOURCED** programme structure. |
| Cho anti-mechanism tension | Replace with Johnson applied-informatics / Eaton transfer-learning language if talking Penn faculty | Different conversational tension; same audit stance. |

---

## Is the Penn Medicine / UPHS multi-site angle real?

**Yes, as a multi-hospital health system; careful as automatic student site labels.**

### What is real (**SOURCED**)

- UPHS / Penn Medicine is a multi-hospital system; Johnson sits as VP of Applied Informatics with a lab whose mission includes access to clinical data and environments. [AI-4-AI about](https://www.med.upenn.edu/kbjohnsonlab/about.html); [directory](https://directory.engineering.upenn.edu/kevin-b-johnson/).
- IBI exists specifically to integrate clinical, basic science, and computational work and to advance Penn Medicine as a learning health system; Clinical Research Informatics Core is directed through Mowery's CRIO role. [IBI](https://ibi.med.upenn.edu/); [Mowery](https://dbei.med.upenn.edu/staff/danielle-mowery-phd-ms-ms-famia/).
- CIS PhD students are already embedded in AI-4-AI. [members](https://www.med.upenn.edu/kbjohnsonlab/members/).
- IBI × SEAS ASSET pilots show institutional willingness to fund CIS–medicine AI projects. **SOURCED** IBI homepage.

### What is **UNCERTAIN** / do not overclaim in the SOP

- That a first-year CIS student automatically gets campus-stratified UPHS labels analogous to NYU Manhattan/Brooklyn. Access is advisor-, IRB-, and AI-governance-dependent.
- That UPHS hospitals are "independent environments" in the causal sense. Same system / shared Epic and compliance training can shrink site variance (same Objection 7 as NYU). Prevalence-shift pre-registration still required.
- Exact private Penn clinical foundation-model artefacts available for student audit work (Eaton lists multimodal clinical FMs as a project area; that is not a public NYUTron equivalent).

### Honest first-study ladder (write this shape, not a promise of data)

1. **Public multi-site EHR benchmarks** (MIMIC / eICU-class / other multi-institution sets) to debug the attribution method.  
2. **UPHS / Penn Medicine data** under advisor supervision for a local operational or ambulatory model (AI-4-AI / IBI CRI path).  
3. **Cross-hospital or federated replication** of the *audit statistic* if Stage 1 works. Long's federated / privacy work is a natural methods bridge without claiming patient-level pooling.

---

## Differentiation from pure BMI programmes (Columbia / Harvard AIM)

Penn CIS is not "BMI with a different logo." The intellectual difference to state:

- **BMI-home pitch (Columbia / Harvard):** the degree itself is biomedical informatics / AI in medicine.  
- **Penn CIS pitch:** the degree is **computer and information science**, with a concrete health-system lab (AI-4-AI) and IBI infrastructure already training CIS students on clinical data. The methods home is CS (representation split, attribution, conformal decisions); the measurement lands in Penn Medicine.

Do not insult BMI programmes. Prefer: CIS methods depth + real UPHS deployment context via named faculty.

---

## One-paragraph thesis statement for Penn SOP use

When a hospital deploys a model trained on its own records, nobody can currently tell, for a specific prediction, how much of that score rests on generalisable medical signal and how much rests on that site's documentation and operational habits. Cross-site evaluation in the literature already shows the gap is real, but most tools either try to train the gap away in aggregate or ask for explanations that may not be faithful. I want to build a per-prediction decomposition into site-invariant and site-specific evidence, validated under a pre-registered check for prevalence shift across environments, and tied to a deploy / locally recalibrate / escalate decision. Penn CIS is the place to do that because the department already seats students in applied clinical AI labs that sit inside the health system, and because transfer-learning and causal / fairness faculty here already treat multi-environment reliability as a first-class methods problem rather than an afterthought.
