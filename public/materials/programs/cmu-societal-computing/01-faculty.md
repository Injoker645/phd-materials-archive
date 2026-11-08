# Societal Computing — AI & Society faculty screen

> Pass date: **2026-10-11**. Focus: PIs who fit *applied, lasting-impact, fairness / trust / healthcare*, not pure DL theory.  
> Sources: [AI & Society](https://sc.cs.cmu.edu/research/ai-society.html), [Rayid personal](https://www.rayidghani.com/), [SC people](https://cos.s3d.cmu.edu/people/index.html), arXiv / pubs indexes, Ghani CV (2023 PDF on his site).  
> Tags: **HIGH / MEDIUM / LOW** fit to *his* direction (clinical AI that ships, fairness, provenance/trust, last-mile).

---

## Verdict (read first)

| Priority | Faculty | Fit | One-liner |
|---|---|---|---|
| **1 — lead** | **Rayid Ghani** | **HIGH** | Deployed ML for public / health outcomes + fairness tooling + “systems that get used”; closest match to atypical non-pure-ML PhD |
| **2** | **Hoda Heidari** | **HIGH–MED** | Fairness / governance / long-horizon effects of decisions; strong theory+policy; less clinic-floor deployment |
| **3** | **Steven Wu** | **MED–HIGH** | Core SC faculty; societal ML — privacy, fairness, reliability when models meet social dynamics |
| **4** | **Zack Lipton** | **MED–HIGH** | Clinical ML / shift / auditability; already on his MLD radar; bridge if dual SC+MLD |
| **5** | Fei Fang | **MED** | AI for social good / multiagent; weaker clinical-informatics hook |
| — | Zico Kolter | **LOW–MED** | Strong ML robustness; more methods-home than SC-style impact thesis |
| — | Cleotilde Gonzalez | **LOW** | Cognitive decision science; not clinical AI systems |

**Name in SoP first (updated 2026-10-16):** **Ilyas** + **Heidari** + (**Ghani** or **Cen**). **Wilder** if co-supervise/MLD dual confirmed. Fang optional only.

**Deep dive for this handful:** [`02-faculty-deep-dive.md`](02-faculty-deep-dive.md).

**Caveat:** Ghani / Cen = SC **affiliate**; Wilder = **not** on SC select list (emailed re co-supervise). Ilyas / Heidari / Fang = on SC people pages. Ilyas page: *mention his name* on SC (or ECE/ML) app.

---

## Rayid Ghani — deep pass (~last 5 years)

**Home:** Distinguished Career Professor, **MLD + Heinz**; Co-lead Responsible AI Initiative; DSSG lab; SC affiliate.  
**Page:** https://www.rayidghani.com/ · Gates 8023 · rayid@cmu.edu  

**Agenda (his site):** design / deploy / **evaluate** ML that improves real public outcomes with **explicit fairness & equity**; human-centered explainability; AI governance & procurement; domains include **public health and clinical healthcare**.

### Why this matches him

- Research is **use → impact → evaluation**, not benchmark chasing — same disease he ranted about in PI emails  
- Fairness treated as **pipeline / ops problem** (Aequitas, bias tutorials), not only group metrics on static tables  
- Healthcare is a **named domain** (HIV retention, lead poisoning, MASLD complications, CRA healthcare data infrastructure memo)  
- Bridges to policy (Senate / Congress testimony on bias & procurement) — fits his “uncomfortable healthcare incentives” thread without requiring pure theory

### Most relevant work (~2020–2026)

| Year | Work | Why it matters for him |
|---|---|---|
| **2025** | *Enabling the AI Revolution in Healthcare* (CRA Quadrennial / arXiv:2503.05801) w/ Singh, Siek, Danks, et al. | Argues siloed patient data blocks useful healthcare AI; federal shared-data infrastructure + access for trained computing researchers — **last-mile / data governance**, not another MedQA model |
| **2024** | *A Machine Learning Approach to Identify Patients at Risk of MASLD-Related Complications* — Behari, **Ghani**, Amarasinghe, et al., **Hepatology** | Real clinical complication risk with hospital collaborators — applied clinical ML |
| **2024** | *Aequitas Flow: Streamlining Fair ML Experimentation* — JMLR | Fairness **experimentation tooling** for practice |
| **2024** | *On the Importance of Application-Grounded Experimental Design for Evaluating Explainable ML* — AAAI | XAI evaluation must be **application-grounded** (anti-proxy) — very on-voice |
| **2023** | *Toward Operationalizing Pipeline-aware ML Fairness* — EAAMO (w/ Black, Heidari, Rodolfa, Ho, et al.) | Fairness across the **pipeline**, not a single metric — adjacent to provenance / “which stage injected bias” |
| **2023** | *Explainable Machine Learning for Public Policy* — Data & Policy | XAI gaps when systems serve policy / high-stakes decisions |
| **2023** | KDD tutorial: *Addressing Bias and Fairness in ML* (practical) | Practice-first fairness pedagogy |
| **2021** | *Empirical observation of negligible fairness–accuracy trade-offs in ML for public policy* — **Nature Machine Intelligence** (Rodolfa, Lamba, Ghani) | Undercuts “fairness kills performance” excuse in high-stakes settings |
| **2021** | *Empirical Comparison of Bias Reduction Methods… High-Stakes Policy Settings* — SIGKDD Explorations | Methods under real constraints |
| **2020** (still load-bearing) | HIV clinic retention ML — *Nature Sci Reports*; childhood lead poisoning validation — *JAMA Netw Open*; BMJ “20 critical questions” on ML for **patient benefit** | Public-health / clinical **deployment & evaluation** pedigree |

**Portfolio projects (DSSG-style):** HIV retention (Chicago DPH / UChicago clinic); proactive CKD screening equity; behavioral-health outreach; eviction / rental assistance — pattern = **partner org + model + operational decision**.

### Advising watch-outs

- Title is **Distinguished Career Professor** — still advises / committees (CV lists SC students co-advised with Heidari; PhD committees incl. health-adjacent names). Confirm **primary SC admit → Ghani lab** path explicitly.  
- Bandwidth: many initiatives (DSSG, Responsible AI, AIMSEC, policy). SoP should show **specific problem + partner-shaped evaluation**, not “I like fairness.”

---

## Hoda Heidari — screen

**Home:** Core SC / MLD / HCII / Heinz-adjacent ethics appointments; K&L Gates Career Development chair.  
**Page:** https://www.cs.cmu.edu/~hheidari/  

**Fit:** Fairness definitions ↔ moral/economic frameworks; **long-term** population effects of algorithmic policies; AI risk/benefit evaluation; public-sector AI governance. Recent coauthor with Ghani on third-party AI assurance (FAccT 2026) and pipeline-aware fairness (2023).

**vs his thesis:** Strong on **accountability / lasting effects**; lighter on bedside clinical systems. Excellent **co-advisor** with Ghani for the “inequity locked into EHR incentives” angle.

---

## Steven Wu — screen

**Home:** Assistant Professor, **S3D / Societal Computing** (core); affiliations MLD + HCII.  
**Page:** https://s3d.cmu.edu/people/core-faculty/wu-steven.html  

**Fit:** Societal aspects of ML — privacy, fairness, reliability when algorithms interact with **social/economic dynamics**. Pure methods for trustworthy interaction — good if the thesis needs formal privacy/fairness + SC home advisor who is clearly SC-primary.

---

## Zack Lipton — screen (bridge)

Listed on AI & Society page. Already screened under MLD (`../cmu-scs/`). Clinical distribution shift / faithfulness — use if **dual SC + MLD**. Do not assume SC-primary advising without checking.

---

## Others on the AI & Society page (brief)

| Faculty | Note |
|---|---|
| **Fei Fang** | AI for social good, game theory / multiagent; social impact yes, clinical EHR provenance weaker |
| **Zico Kolter** | Robust / deep learning methods leader — better as methods collaborator than SC narrative center |
| **Cleotilde Gonzalez** | Human decision / cognitive modeling — peripheral unless decision-support psych is central |

---

## SoP naming suggestion (draft for him to rewrite)

1. **Rayid Ghani** — deployed fair ML in health/public systems + evaluation  
2. **Hoda Heidari** *or* **Steven Wu** — lasting fairness / societal dynamics  
3. Optional third: **Lipton** if MLD dual-app is on  

Open checks before sending any email: personal-page advising instructions; whether Ghani wants cold contact vs apply-only; SC vs MLD primary enrollment for his lab.
