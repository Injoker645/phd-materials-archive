# Faculty map — BU CDS (thesis-relevant)

> Target: health-AI / fairness / causal-adjacent faculty whose work touches domain generalisation, clinical ML, equity, or trustworthy inference.
> CDS admits centrally; students enter unbound and rotate. Name **2–3** in the Research Statement as potential rotation / later-advisor fits, not as locked matches.
> FAQ list of faculty **not** currently accepting PhD students (do not list as primary): Betke, Canetti, Chatterjee, Fernández-Val, Giles, Gold, Kontothanassis, Saenko, White. **SOURCED** https://www.bu.edu/cds-faculty/programs-admissions/phd-degree/faqs/
> Full roster: https://www.bu.edu/cds-faculty/research/faculty/ **SOURCED**

---

## 1. Vijaya Kolachalama — biomedical ML, domain generalisation (primary methods fit)

| | |
|---|---|
| Role | Associate Professor of Medicine + Computer Science; founding CDS faculty |
| Page | https://vkola-lab.github.io/ and https://www.bu.edu/cds-faculty/profile/vijaya-kolachalama/ **SOURCED** |
| Lab angle | Biomedical machine vision; multimodal representation learning; **domain generalisation**; generalist-AI software to assist clinicians in real-world settings |
| Thesis intersection | Domain generalisation is the training-time neighbour of the thesis's *measurement* claim. Phrase fit as: his lab already treats cross-environment clinical performance as a first-class problem; the applicant wants the audit / per-prediction provenance layer on top of that reality, not another DG trainer that claims to erase site signal. |
| Soft fit warning | Much published work is imaging / multimodal clinical AI. Do not overclaim imaging depth. Portable claim: clinical models under distribution shift and real deployment constraints. |

---

## 2. Elaine Nsoesie — health equity, AI for public / global health (fairness / values fit)

| | |
|---|---|
| Role | Associate Professor of Global Health (SPH); Data Science Faculty Fellow; founding CDS faculty |
| Page | https://www.bu.edu/cds-faculty/profile/elaine-nsoesie/ **SOURCED** |
| Lab angle | Data science and AI for health equity; non-traditional public-health data; Racial Data Tracker; disease surveillance collaborations |
| Thesis intersection | Site-specific documentation and operational habit often *track* inequity and local practice. Her equity frame is the right place to ask what a provenance audit must not hide when "site-specific" correlates with who gets which care. |
| Soft fit warning | More population / surveillance / equity methods than EHR foundation-model internals. Use for fairness and health-system consequences, not as the sole multi-site representation-learning home. |

---

## 3. Aldo Pacchiano — algorithmic fairness + biomedical methods

| | |
|---|---|
| Role | Assistant Professor of Computing & Data Sciences |
| Page | https://www.bu.edu/cds-faculty/profile/aldo-pacchiano/ **SOURCED** |
| Lab angle | RL, online learning, bandits, **algorithmic fairness**; statistical understanding of learning in adaptive environments; safe algorithms for scientific / societal use; post-Broad Institute appointment with biomedical methods interest |
| Thesis intersection | Fairness under adaptive / sequential learning is adjacent to "when does a score stop travelling." Useful for formalising what an audit should guarantee before deployment, not for EHR data access itself. |
| Soft fit warning | Core identity is theory / RL / fairness, not clinical NLP. Name him for methods and safety, with a clinical co-mentor for environments. |

---

## 4. Yannis (Ioannis) Paschalidis — computational medicine, robust learning, health informatics

| | |
|---|---|
| Role | Distinguished Professor (ECE, Systems, BME); Founding Professor of CDS; Professor of Biostatistics; Director, Hariri Institute |
| Page | https://www.bu.edu/cds-faculty/profile/yannisp/ **SOURCED** (also Hariri profile) |
| Lab angle | Optimisation, control, stochastic systems, **robust learning**, computational medicine / biology / health informatics |
| Thesis intersection | Robustness under uncertainty in medical data is the systems-level twin of a deploy-or-recalibrate audit. Strong bridge to Hariri / Medical Campus collaborations. |
| Soft fit warning | Broad senior portfolio. Name as programme / institute bridge and robust clinical ML, not as "I will only join Paschalidis Lab." Co-advise / rotation language fits CDS better. |

---

## Also relevant (secondary SoP / interview names)

| Faculty | Why noted | Status |
|---|---|---|
| Venkatesh Saligrama | ECE + founding CDS; bias in AI; learning under safety/efficiency constraints | **SOURCED** https://www.bu.edu/cds-faculty/profile/venkatesh-saligrama/ — fairness / bias neighbour; less clinical-data primary |
| Jonathan Huggins | Math & Stats + CDS; trustworthy, scalable inference and UQ | **SOURCED** https://www.bu.edu/cds-faculty/profile/jonathan-huggins/ — conformal / validity-adjacent methods; applied focus currently ecology / genomics more than EHR (**soft**) |
| Kayhan Batmanghelich | ENG ECE; medical imaging, multimodal EHR/reports, explainability, causality themes | **SOURCED** https://www.bu.edu/hic/profile/kayhan-batmanghelich/ — strong thesis overlap, but **not** on the CDS faculty roster scraped this pass. Treat as **UNCERTAIN** for "potential CDS advisor" checkbox; strong post-admit / Hariri collaborator candidate |
| Aguêmon Yves Atchadé | Math & Stats + CDS | On CDS faculty list **SOURCED** roster — causal/Bayesian neighbour possible; confirm current topics before naming (**UNCERTAIN** without paper skim) |

---

## How to name them in the Research Statement (Register A, no flattery)

Safe pattern for CDS (rotations + unbound entry):

- Kolachalama: domain-generalisation / clinical deployment as the empirical pressure the audit must answer.
- Nsoesie: equity and health-system consequences when site-specific signal is not medically innocent.
- Pacchiano or Paschalidis: pick one methods/systems second anchor (fairness-formal vs robust computational medicine).

Do not write "world-class" or "privileged to work with." Do not promise a locked advisor before year 2.

---

## Interview / rotation prep questions

1. For Kolachalama: when DG improves average transfer, what decision still needs a *per-prediction* site-specificity flag?
2. For Nsoesie: how should an audit report site-specific mass when that mass correlates with inequitable documentation or access?
3. For Pacchiano: what formal guarantee would make a provenance score usable in a sequential deployment setting?
4. Cross-cutting: what multi-site clinical environments are realistically reachable for a CDS student via BMC / Medical Campus collaborators in years 2–3?

Mark answers he hears in `verification-notes.md`.
