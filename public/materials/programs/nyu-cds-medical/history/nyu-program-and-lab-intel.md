# NYU CDS Medical School Track + Oermann Lab Intel

**Applicant frame:** Fall 2027 CDS PhD, Medical School Track; thesis angle = per-prediction provenance / site-invariant vs site-specific decomposition for clinical foundation models; primary target Eric Oermann (warm reply already received; said busy); secondary Cho, Ranganath.

**Compiled:** 2026-08-06. Every claim is tagged **SOURCED** (with URL) or **UNCERTAIN**. Lab members are listed only from the live OLAB team page — no invented names.

---

## 1. Oermann lab (OLAB): website, roster, 2025–2026 pubs

### 1.1 Lab identity

| Fact | Tag | Source |
|---|---|---|
| Lab brand: OLAB — Medical AI + NeuroAI research at NYU Langone | SOURCED | https://www.nyuolab.org/ |
| Research pillars listed: NeuroAI, Medical AI, AI4Science | SOURCED | https://www.nyuolab.org/ |
| PI: Eric Karl Oermann (EKO); faculty in neurosurgery / radiology / data science (bio wording) | SOURCED | https://nyumets.org/about/erickoermann/ |
| CDS listing: “Professor, Neurosurgery” | SOURCED | https://cds.nyu.edu/team/eric-oermann/ |
| ORCID employment line: Associate Professor, Neurosurgery, NYU Grossman, 2020-07-01–present | SOURCED | https://orcid.org/0000-0002-1876-5963 |
| Title discrepancy (CDS “Professor” vs ORCID “Associate Professor”) | UNCERTAIN which string is current HR title; both pages live as of scrape | CDS + ORCID URLs above |

### 1.2 Current roster (do not invent beyond this)

**SOURCED** from https://www.nyuolab.org/team (scraped 2026-08-06):

| Name | Role as listed on team page |
|---|---|
| EKO | PI |
| Chris Liu | PhD-5 |
| Ioana Marinescu | PhD-2 |
| Lake Jacobs-Skolik | MD-PhD-2 Student |
| Qingyang Zhu | PhD-2 |
| Radhika Dua | PhD-2 |
| Yuling Gu | PhD-1 |
| Anjali Kapoor | Medical AI Research Fellow |
| Annelene Schulze | Associate Data Scientist |
| Anton Alyakin | MS-4 (CNS AI fellow 2024) |
| Eunice Yang | Neurosurgical AI Fellow |
| Jack Markert | Neurosurgical AI Fellow |
| Jessica Zhou, Ph.D. | Machine Learning Engineer |
| Krithik | Undergrad |
| Qing | *(role string incomplete on page scrape)* |
| Xu Han | Machine Learning Engineer |

**Alumni relevant to CDS / clinical NLP (SOURCED, same page):** Lavender Yao Jiang — PhD, NYU CDS (2021–2026) → Research Scientist at Percepta; Daniel Alber — MD, NYU Grossman (2022–2026) → CT Surgery Resident at Stanford; others listed on page.

**Cho co-advising of OLAB PhDs (SOURCED):** Kyunghyun Cho’s group page lists Radhika Dua, Ioana Marinescu, Qingyang Zhu as co-advised by Eric Oermann (Sept 2024–); Lavender Jiang co-advised by Oermann (Sept 2021–May 2026). https://kyunghyuncho.me/research-group/

### 1.3 Who looks adjacent to interpretability / attribution / multi-site / provenance

Flagging **only from titles + authored pubs**, not from assumed personal statements:

| Person | Why flagged | Evidence | Tag |
|---|---|---|---|
| **Eric Oermann (PI)** | Long-standing multi-site / confounding / generalization work; clinical foundation / LLM robustness | Zech et al. 2018 pneumonia CXR generalization / confounding (senior author); NYUTron (Jiang et al. 2023); 2025 Nature Medicine data-poisoning; distraction / eval papers | SOURCED — pubs on https://www.nyuolab.org/research/our-work ; Zech: https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683 ; NYUTron: https://www.nature.com/articles/s41586-023-06160-y |
| **Chris Liu** | Senior PhD in lab; co-author on NYUTron-era / longitudinal brain-met papers | Listed PhD-5 on team page; co-author lines on OLAB “Our Work” (e.g. Link et al. 2024 Nature Communications; Jiang et al. NYUTron) | SOURCED roster + pub list; **UNCERTAIN** whether personal thesis is interpretability |
| **Radhika Dua** | Explicit **interpretable** metric paper for radiology report generation | Dua et al. 2025 arXiv:2508.02808 “Clinically Grounded Agent-based Report Evaluation: An Interpretable Metric…” listed on OLAB Our Work | SOURCED https://www.nyuolab.org/research/our-work ; https://arxiv.org/abs/2508.02808 |
| **Ioana Marinescu** | Representation / ICL theory with Cho + Oermann | Marinescu, Cho, Oermann 2025 arXiv:2510.08372 | SOURCED https://arxiv.org/abs/2510.08372 |
| **Lavender Jiang (alumni)** | Clinical LLM generalization / site-scale prediction engines | NYUTron Nature 2023; Rahman, Jiang, … Aphinyanaphongs, Oermann 2024 “Generalization in healthcare AI…” arXiv:2402.10965 | SOURCED Nature + https://arxiv.org/abs/2402.10965 |
| **Anton Alyakin / Eunice Yang / Daniel Alber (alumni)** | LLM robustness / poisoning / neurosurgical VLM — **not** provenance decomposition | Alber et al. Nature Medicine 2025 data-poisoning; Vishwanath et al. distraction preprint | SOURCED OLAB Our Work |
| Rest of roster (Kapoor, Schulze, Markert, Zhou, Gu, Jacobs-Skolik, Xu Han, Krithik, Qing) | No clear public title tying them to interpretability / attribution / site decomposition from roster alone | Team page only | **UNCERTAIN** — do not assign research themes without pubs |

### 1.4 OLAB 2025 publications (high-signal subset)

**SOURCED** year filter “2025” on https://www.nyuolab.org/research/our-work (not exhaustive; page also includes collaborative / co-author lines):

- Alber et al. — Medical LLMs vulnerable to data-poisoning — *Nature Medicine* 2025
- Vishwanath, Alyakin, Alber, Lee, Kondziolka, Oermann — Medical LLMs are easily distracted — arXiv:2504.01201
- Marinescu, Cho, Oermann — Representation choice and in-context learning — arXiv:2510.08372
- Dua et al. — Interpretable radiology report evaluation metric — arXiv:2508.02808
- Hang, Deng, Jiang, Yang, Alyakin, Alber, Oermann — BPQA Dataset — arXiv:2503.04155
- Alyakin et al. — Repurposing scientific literature with VLMs — arXiv:2502.19546
- Gateformer (Lan & Oermann) — multivariate time series — arXiv:2505.00307
- Multiple neurosurgery / education / CNS-CLIP style papers

**2026 on OLAB Our Work year filter:** **UNCERTAIN** — scrape of the “Our Work” listing used here was dominated by a 2025 block; Aphinyanaphongs faculty page shows 2026 Oermann co-authored *Nature Medicine* / *Neurosurgery* items (e.g. Vishwanath et al. general-purpose vs specialized clinical AI, 2026 Jun) — https://med.nyu.edu/faculty/yindalon-aphinyanaphongs — so 2026 output exists even if not yet mirrored on the OLAB filter UI.

### 1.5 What OLAB says they want (join page)

**SOURCED** https://www.nyuolab.org/join :

- Open to medical AI, neuroscience, large-scale ML passion.
- Channels: Neurosurgical AI Fellowship ($30k/year award); research scientists/engineers (imaging / NLP / large-scale training plus); **NYU graduate & undergrad rotations** from CS, Data Science, Neuroscience, BME.
- Contact: email with brief background and interests → “Contact Dr. Eric Oermann”.

**Applicant context (user-provided, not independently verified here):** warm reply already received; Oermann said busy → treat further cold emailing as high cost / low ROI until application season or a concrete ask.

---

## 2. Scoop check: has the thesis gap closed?

**Thesis needle (for this check):** *per-prediction* provenance that **decomposes** a clinical (foundation) model’s output into **site-invariant vs site-specific** contributions — not merely (a) documenting dataset lineage, (b) training invariant embeddings, or (c) measuring that site identity is predictable from features.

### 2.1 Inside / near Oermann lab — related but not the needle

| Work | What it does | Match to needle? | Tag |
|---|---|---|---|
| Zech, Badgeley, Liu, Costa, Titano, **Oermann** 2018 *PLOS Medicine* | Shows CXR models can latch onto hospital/site cues; variable external generalization | Problem statement for provenance/site confounding — **not** per-prediction invariant/specific decomposition | SOURCED https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002683 |
| Jiang, Liu, … **Oermann** 2023 *Nature* (NYUTron) | Health-system-scale clinical LM; local vs external fine-tuning / site transfer results | Multi-site behavior of a clinical foundation-style model; causes of transfer failure left open in author framing (see verification note) | SOURCED https://www.nature.com/articles/s41586-023-06160-y ; safe claim also in `research/verification/nyutron-lang1-site-transfer.md` |
| Rahman, Jiang, … Aphinyanaphongs, **Oermann** 2024 arXiv:2402.10965 | Evaluation of clinical LLM generalization | Evaluation, not decomposition | SOURCED https://arxiv.org/abs/2402.10965 |
| Puli, Zhang, **Oermann**, **Ranganath** arXiv:2107.00520 (NuRD line) | OOD generalization under nuisance-induced spurious correlations | Train/predict robustly under nuisances — **not** per-prediction site-invariant vs site-specific attribution | SOURCED https://arxiv.org/abs/2107.00520 ; listed on OLAB Our Work |
| OLAB 2025 LLM robustness (poisoning, distraction, benchmarks) | Safety / fragility of medical LLMs | Orthogonal to site-decomposition provenance | SOURCED OLAB Our Work |

**Honest verdict (lab-local):** No 2025–2026 OLAB paper found that implements **per-prediction site-invariant vs site-specific decomposition** for clinical foundation models. The lab **owns the classic site-confounding diagnosis** (Zech) and **runs clinical foundation / LLM systems that fail under shift** (NYUTron + eval), which is motivation — not a closed scoop.

### 2.2 Outside NYU — adjacent 2025–2026 work (crowding, not identical)

| Work | Authors / venue | Relation | Tag |
|---|---|---|---|
| TAPER / DAPPER — task arithmetic to reduce confounding by provenance | Ding, Sheng, Hur, Tauscher, Ben-Zeev, Yetişgen, Pakhomov, Cohen — *J Biomed Inform* 2025; **UW / Minnesota, not Oermann** | Mitigates provenance confounding in clinical NLP via weight-space arithmetic; **does not** report per-prediction invariant/specific decomposition | SOURCED https://pubmed.ncbi.nlm.nih.gov/40494422/ ; https://profiles.stanford.edu/xiruo-ding ; https://github.com/LinguisticAnomalies/DeconDTN-toolkit |
| “Learning Clinical Representations Under Systematic Distribution Shift” | Yuanyun Zhang, Shi Li — arXiv:2603.07348 (Open MIND HTML, 2026-03-07) | Practice-invariant representation learning (adversarial env regularization + IRM-style penalties); **suppresses** environment signal in embeddings — different objective from **explaining** each prediction’s invariant vs site-specific mix; **not** Oermann lab | SOURCED https://doi.org/10.48550/arxiv.2603.07348 ; treat as **unreviewed preprint** |
| Pathology FM site-leakage / robustness literature (e.g. “Current Pathology Foundation Models are unrobust to Medical Center Differences”) | Various non-NYU groups, 2025+ | Quantifies site entanglement / robustness indices; mitigation usually adversarial/IB/adaptation — again not per-prediction dual decomposition | SOURCED example https://arxiv.org/html/2501.18055v2 |
| Feature-level site leakage reduction for CXR SSL | Non-OLAB preprint arXiv:2604.00263 | Measures site leakage with probes; adversarial confusion | SOURCED https://arxiv.org/html/2604.00263 |
| TeMLM-style “data provenance” for clinical NLP | Non-OLAB transparency artifacts | Dataset/model **documentation** provenance, not prediction-level site decomposition | SOURCED example https://arxiv.org/html/2601.19191 |

### 2.3 Scoop bottom line

| Statement | Tag |
|---|---|
| **Gap not closed** for the specific thesis needle (per-prediction invariant vs site-specific **decomposition / provenance of the prediction**) inside OLAB 2025–26 output | SOURCED relative to OLAB Our Work + searches above; residual **UNCERTAIN** for unpublished lab work |
| **Problem space is crowded:** invariance learning, provenance deconfounding (TAPER/DAPPER), site-leakage probes, and FM robustness papers will be reviewers’ first “isn’t this X?” | SOURCED citations above |
| Differentiation must be crisp: **attribution of each prediction’s reliance on site-invariant vs site-specific factors** vs **training away site information** | Application strategy (see §6), not a literature claim |

---

## 3. NYU CDS Medical School Track — mechanics

### 3.1 Track structure

| Fact | Tag | Source |
|---|---|---|
| Medical School Track students complete the **standard CDS PhD curriculum** | SOURCED | https://cds.nyu.edu/phd-medical-school-track/ |
| Plus: SoM electives + collaboration with SoM faculty | SOURCED | same |
| **Start with ≥1 CDS mentor** (from PhD Advisory Group) **and ≥1 Medical School mentor** | SOURCED | same |
| Electives customized with mentors; listed SoM electives include Healthcare AI, Deep Learning in Medicine, Clinical Decision Support, MRI courses, etc. | SOURCED | same |
| “Moreover, **rotations will be offered** with faculty at the School of Medicine” | SOURCED | same |
| Dual-advisor design restated by Sumit Chopra in Fall 2026 admissions info session | SOURCED | https://www.youtube.com/watch?v=vDk9vTwOoS0 (transcript excerpt: “by design, you will have two advisors, one … CDS … other … School of Medicine”) |

**Rotations vs “direct admit” (interpretation):**

| Claim | Tag |
|---|---|
| This is **not** “skip all rotations and lock one lab on day one.” CDS requires **six** semester research rotations (DS-GA 2001) for Fall 2020+ students | SOURCED https://cds.nyu.edu/phd-curriculum/ |
| Medical track **additionally** starts with named dual mentors and offers SoM rotations — i.e. **structured dual mentoring + rotation curriculum**, not pure single-lab direct admit | SOURCED medical-track page + curriculum page |
| Whether dual mentors are binding thesis advisors from day one vs provisional matching | **UNCERTAIN** — pages say “start … with at least one … mentor” each side; advisor agreement for DQE is still a later formal step on the curriculum page |

### 3.2 Funding / cohort

| Fact | Tag | Source |
|---|---|---|
| Successful candidates: financial support including **tuition + competitive stipend** for up to **five years** (fall/spring) | SOURCED | https://cds.nyu.edu/phd-program-overview/ |
| FAQ: fellowships covering tuition, fees, health insurance; **nine-month stipend $41,832 for 2025–2026**; five-year commitments historically; one-time start-up award; packages reviewed yearly for new cohorts | SOURCED | https://cds.nyu.edu/phd-faqs/ |
| Exact Fall 2027 stipend | **UNCERTAIN** (reviewed yearly) | same FAQ |
| Official published **cohort size** (CDS PhD or Medical Track subset) | **UNCERTAIN** — not found on overview / FAQ / admissions pages | searched those pages |
| Chopra (info session): ~5–6 CDS core faculty active in ML+healthcare; “20 to 30+” SoM folks on AI-related problems | SOURCED YouTube session above (spoken estimate, not a census) |

### 3.3 Quals / milestones (standard CDS PhD; medical track follows these)

**SOURCED** https://cds.nyu.edu/phd-curriculum/ and bulletin PDF https://bulletins.nyu.edu/graduate/arts-science/programs/data-science-phd/data-science-phd.pdf :

- 72 credits; GPA ≥ 3.0
- Required: Intro DS for PhD, Prob/Stat, ML, Big Data, Inference & Representation + **18 credits research rotation** by end of 6th semester
- Teaching requirement (2 CDS courses by end of year 4 for Fall 2023+)
- **Comprehensive exam** (Fall 2024+: 4-page first-year report + 10-min talk to pre-committee of 3 by end of 2nd semester)
- **Depth Qualifying Exam (DQE)** by **May 15 of 4th semester**; ≤2 attempts; research presentation in area
- Agree research advisor by end of 3rd semester (curriculum wording)
- Dissertation proposal guideline: by end of year 3; defense committee rules as on curriculum page

### 3.4 Admissions timing & contacts (Fall 2027)

| Fact | Tag | Source |
|---|---|---|
| Fall 2027 applications open **late September 2026**; deadline **December 3, 2026** | SOURCED | https://cds.nyu.edu/phd-admissions-requirements/ |
| Fall 2026 deadline was Dec 11, 2025 (closed) | SOURCED | same |
| Prerequisites: calc, probability, statistics, programming (or equivalent); relevant STEM degrees / DS research experience welcome | SOURCED | same |
| GRE **not required** (considered if submitted) | SOURCED | https://cds.nyu.edu/phd-faqs/ |
| Program contact: **cds-admissions@nyu.edu** | SOURCED | https://cds.nyu.edu/phd-program-overview/ |
| Application tech issues: **gsas.admissions@nyu.edu** | SOURCED | FAQ |
| GSAS: only **one** GSAS application at a time (cannot dual-apply MSDS+PhD) | SOURCED | FAQ |

### 3.5 Contact norms (program + faculty)

| Norm | Tag | Source |
|---|---|---|
| Program logistics → CDS admissions email | SOURCED | overview / FAQ |
| Research-topic fit → “look at individual faculty” (Chopra / Savin in info session) | SOURCED | YouTube session |
| OLAB → short email with background/interests | SOURCED | https://www.nyuolab.org/join |
| **Given warm reply + “busy”:** do not treat silence as invitation to multi-thread chase emails | User-provided context + common sense; **UNCERTAIN** lab-specific preferred cadence beyond join page |

---

## 4. Other NYU faculty fit (requested names)

Confirm **still at NYU** and note fit to thesis. Status as of 2026-08-06 scrapes:

| Faculty | Still at NYU? | Role / notes | Fit to thesis needle | Tag |
|---|---|---|---|---|
| **Kyunghyun Cho** (secondary) | Yes | CDS / CILVR; co-advises multiple Oermann PhDs; also Genentech Prescient Design leadership (external) | Strong secondary for representation / LM methods; already bridges OLAB | SOURCED https://kyunghyuncho.me/research-group/ |
| **Rajesh Ranganath** (secondary) | Yes | Assistant Professor, Population Health (SoM page); CDS healthcare ML core per Chopra; co-author with Oermann on NuRD; causal / reliable ML / clinical prediction | Excellent methods secondary for spurious correlations, causal validity, “what the model relies on” | SOURCED https://med.nyu.edu/faculty/rajesh-ranganath ; NuRD arXiv:2107.00520 |
| **Narges Razavian** | Yes | Associate Professor, Population Health & Radiology | EHR/imaging prediction, biomarkers; multi-modal clinical ML collaborator network | SOURCED https://med.nyu.edu/faculty/narges-sharif-razavian |
| **Yindalon Aphinyanaphongs** | Yes | Research Professor, Population Health & Medicine; Director, Operational Data Science and ML for NYULH; frequent Oermann collaborator | Deployment / operational clinical ML; co-author on generalization & LLM eval with Oermann lab | SOURCED https://med.nyu.edu/faculty/yindalon-aphinyanaphongs |
| **Krzysztof Geras** | **Affiliated but exited primary academic path** | Cho page: “Krzysztof left to start his own company in 2025”; CDS: Visiting Scholar; SoM: Adjunct Assistant Professor, Radiology | Weaker as primary/secondary for a Fall 2027 admit planning a 5-year thesis home; may still co-publish | SOURCED https://kyunghyuncho.me/research-group/ ; https://cds.nyu.edu/team/krzysztof-geras/ ; https://med.nyu.edu/faculty/krzysztof-j-geras |
| **Carlos Fernandez-Granda** | Yes | Associate Professor Math + Data Science; **Interim Director, CDS**; ML + medicine applications | Strong CDS-side methods / advising capacity; less specifically “provenance decomposition” | SOURCED https://cims.nyu.edu/~cfgranda/ ; https://cds.nyu.edu/team/carlos-fernandez-granda-2/ |
| **Aahlad Puli** | Yes | Faculty Fellow / Assistant Professor, CDS; PhD advised by Ranganath; NuRD / explanations / OOD | Extremely on-theme for shortcuts, nuisances, explanation encoding — **note:** Faculty Fellow roles are typically time-limited (CDS fellowships ~2 years) | SOURCED https://aahladmanas.github.io/ ; fellow duration **UNCERTAIN** for his individual appointment end date |
| **Sumit Chopra** | Yes | Associate Professor CS + Radiology; Director of ML Research, Radiology; presents Medical Track in admissions session | Strong SoM/CDS bridge for imaging FMs; dual-advisor culture champion | SOURCED https://cds.nyu.edu/team/sumit-chopra/ ; https://med.nyu.edu/faculty/sumit-chopra ; YouTube session |

**Medical-track SoM faculty roster by domain (Imaging, Population Health, …):** categories exist on https://cds.nyu.edu/phd-medical-school-track/ ; individual names under each heading did **not** survive text scrape (likely JS-rendered). Treat full name list as **UNCERTAIN** until rechecked in a browser; do not invent names into that table.

---

## 5. What NYU / Oermann say they want in applicants

### 5.1 CDS / Medical Track (public + info session)

| Preference | Who said it | Tag |
|---|---|---|
| Strong computational / mathematical fundamentals (probability, stats, linear algebra; ML fundamentals if available); domain biology **not required** | Chopra, Medical Track Q&A | SOURCED YouTube https://www.youtube.com/watch?v=vDk9vTwOoS0 |
| Easier to learn healthcare than to learn core ML after arrival | Chopra | SOURCED same |
| Interest in healthcare applications **is** needed even if biology background is not | Chopra | SOURCED same |
| Coursework/experience in calc, prob, stats, programming required | CDS admissions | SOURCED https://cds.nyu.edu/phd-admissions-requirements/ |
| Research experience in data science welcomed | CDS admissions | SOURCED same |
| Cross-disciplinary, methodologically rigorous, ethically responsible data scientists | Program overview mission | SOURCED https://cds.nyu.edu/phd-program-overview/ |

### 5.2 OLAB / Oermann (public)

| Preference | Tag | Source |
|---|---|---|
| Passion for medical AI, neuroscience, or large-scale ML | SOURCED | https://www.nyuolab.org/join |
| Mentoring students in data science and medicine called out in personal bio | SOURCED | https://nyumets.org/about/erickoermann/ |
| Graduate students via **NYU rotations** explicitly welcomed | SOURCED | join page |
| Specific written rubric for PhD admit (GPA cutoffs, paper count, etc.) | **UNCERTAIN** — not posted | — |

### 5.3 Methods secondary targets (implicit from research pages)

| Faculty | Implied taste | Tag |
|---|---|---|
| Cho | Strong ML/NLP students; already co-advises Oermann clinical PhDs | SOURCED group page |
| Ranganath | Causal / reliable prediction; clinical ML with validity concerns | SOURCED faculty pubs |
| Puli | OOD, shortcuts, explanation faithfulness | SOURCED https://aahladmanas.github.io/ |

---

## Implications for the application

1. **Primary story that fits Oermann without pretending the scoop is empty:** Frame the thesis as the missing **prediction-level provenance layer** on top of problems Oermann already made famous (Zech site confounding; NYUTron / clinical LLM shift). Explicitly contrast against (i) invariant-representation training, (ii) TAPER-style deconfounding, (iii) site-leakage probes — all adjacent, none identical.

2. **Medical Track is the right mechanical door:** Dual CDS + SoM mentors from the start maps cleanly onto **Cho or Ranganath (CDS methods) + Oermann (SoM clinical systems)**. Expect to still complete CDS’s six rotations; use early rotations to convert the warm Oermann contact into joint work without demanding full bandwidth now.

3. **Contact discipline:** Warm reply + “busy” → one polished SoP / faculty list that names him accurately; avoid repeated solicitation. Program questions go to `cds-admissions@nyu.edu`. Fall 2027 deadline is **2026-12-03**.

4. **Secondary slate:** Keep **Cho** and **Ranganath** as named secondaries. Add **Puli** for OOD/explanation depth (with eyes open that Faculty Fellow appointments may not last the full PhD). **Razavian** / **Aphinyanaphongs** / **Chopra** are strong clinical collaborators; **Geras** should not be treated as a stable primary home after the 2025 company exit.

5. **Do not overclaim lab overlap:** Radhika Dua’s “interpretable metric” and Marinescu’s representation/ICL work are the clearest current in-lab interpretability-adjacent threads; neither is the proposed site-invariant vs site-specific **per-prediction decomposition**. Cite Zech/NYUTron as lineage, not as “already done.”

6. **Honesty check before SoP freeze:** Re-skim OLAB Our Work + arXiv for Oermann/Cho/Ranganath in late 2026; if someone publishes true per-prediction dual decomposition for clinical FMs, retarget the contribution (e.g., evaluation protocol, causal identification, clinician-facing provenance UI, or foundation-model-scale extension) rather than claiming a closed gap.

---

*End of file. Single deliverable for Fall 2027 CDS Medical School Track planning. No other files written by this pass.*
