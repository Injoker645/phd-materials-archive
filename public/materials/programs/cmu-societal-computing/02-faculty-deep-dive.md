# CMU Societal Computing — faculty deep dive (handful for email + SoP)

> Pass date: **2026-10-16**. His shortlist: Cen, Heidari, Ilyas, Wilder, Fang (maybe), Ghani.  
> SC people: https://sc.cs.cmu.edu/people/ · AI&Society: https://sc.cs.cmu.edu/research/ai-society.html  
> Outreach: Ghani emailed 2026-10-12; Wilder emailed 2026-10-16. Others **not sent**.

---

## Quick ranking for SoP naming + next emails

| Priority | Faculty | On SC roster? | Fit to his direction | Next action |
|---|---|---|---|---|
| **1** | **Andrew Ilyas** | Yes (core) | **HIGH** — data attribution / TRAK / datamodels = closest methods twin to “interpret from data sources”; explicitly wants SC applicants to **mention him** | Email soon; name in SC SoP |
| **1** | **Bryan Wilder** | **No** (MLD) | **HIGH** — safe AI + healthcare deploy/eval; blog/paper on healthcare benchmark assumptions; he already asked co-supervise | Await reply; if yes, SC+ML dual story |
| **1** | **Rayid Ghani** | Affiliate | **HIGH** — deployed fair ML / incentives / health; emailed | Await reply |
| **2** | **Hoda Heidari** | Yes (core) | **HIGH–MED** — governance, long-horizon effects, pipeline fairness w/ Ghani; public-sector AI | Email; strong SoP #2/#3 |
| **2** | **Sarah H. Cen** | Affiliate | **HIGH–MED** — AI auditing / accountability / causal tools; less clinical EHR than Wilder/Ghani | Email; good SC+policy bridge |
| **3** | **Fei Fang** | Yes (core) | **MED–LOW** for *his* thesis — AI for social good / multiagent; coauthor on Wilder healthcare-benchmarks paper only | Optional; don’t centre SoP |

**SoP naming draft (SC):** Ilyas + Heidari + (Ghani *or* Cen). Add Wilder only if co-supervise / dual MLD is confirmed in reply.

---

## Andrew Ilyas — deep

**Pages:** https://andrewilyas.com/ · SC core faculty  
**Start:** Assistant Professor CMU (from Jan 2026); Stein Fellow Stanford; MIT PhD (Daskalakis + Mądry).  
**Students:** incl. Jiayun Wu co-advised with **Steven Wu**.

### Why he matches

- Research = principles of large-scale ML behaviour via **training data → algorithms → deployment**.
- **Data attribution at scale (TRAK, MAGIC, datamodels)** is the strongest technical rhyme to his “tool to interpret model decisions from their data sources” (Ghani email) / provenance thread.
- Explicit recruiting: *“apply to CMU’s programs in Societal Computing, ECE, or Machine Learning and mentioning my name.”*
- Joint work with **Sarah Cen** (strategization, audits, LLM election audit) → natural committee pair.
- D3M data debiasing w/ Ghassemi — subgroup robustness via data selection (health-adjacent methods, not clinical deployment).

### Hooks for HIS email (not a draft)

- TRAK / datamodels: attributing behaviour to training points — EHR habit / single-surgeon decade example.
- “Human trust in AI systems” line on his page + healthcare as the domain where trust ≠ AUROC.
- SC application + mention name (he asked for it).

### Watch-outs

- New lab; capacity unknown. Methods-heavy; he must still sell **applied clinical / incentive** half without sounding like pure robustness theatre.
- Not a health-system deploy lab — pair with Wilder/Ghani for last-mile.

---

## Bryan Wilder — deep

**Pages:** https://bryanwilder.github.io/ · MLD; Lab for AI and Social Impact  
**SC roster:** **not listed** — co-supervise question in his 2026-10-16 email is correct.

### Why he matches

- Two pillars: (1) foundations for **legible, valid, robust** decision-making; (2) **applied** work with partners in social/policy/**healthcare**, deploy + evaluate impact.
- Public health pedigree (Harvard SPH Schmidt fellow); EAAMO board chair.
- **Healthcare benchmarks paper / ML blog (2026-06-19):** *Healthcare LLM Benchmarks Are Only as Good as Their Explicit Assumptions* (Raman, Cortes-Gomez, Dulce Rubio, **Fang**, **Wilder**). Evaluation–deployment gap; task vs **outcome** assumptions; decision mediation (patient acts correctly) — maps to his “proxies / burying heads in sand” rant.
- CoRe Safe AI: “behavioral science” for models — beliefs, decisions, **incentives**.

### Email status

Sent 2026-10-16 — interpretable/safety + EHR habits + co-supervise for SC. Await reply.

### Watch-outs

- Primary home MLD → dual-app MLD+SC is the clean path if he can’t be SC primary.
- Fang coauthor on the benchmarks paper ≠ Fang is the clinical fit.

---

## Rayid Ghani — deep (update)

See also [`01-faculty.md`](01-faculty.md). **Emailed 2026-10-12.** Affiliate SC; MLD+Heinz Distinguished Career Prof.

Still strongest **impact / incentive / deployed health ML** match. Technical half of thesis leans Ilyas/Wilder; institutional half leans Ghani/Heidari.

---

## Hoda Heidari — deep

**Page:** https://www.cs.cmu.edu/~hheidari/ · SC core; MLD + S3D; Heinz/HCII affiliate  
**Agenda:** ethical/societal/policy implications of AI; **governance**; fairness & accountability; risks/benefits of general-purpose AI. Co-founded Responsible AI Initiative.

### Connections to him

- Coauthor with **Ghani** on pipeline-aware ML fairness (EAAMO 2023).
- Advises **Rachel Kim** co-advised with Ghani; **Michael Feffer** with Lipton — SC/ML bridges exist.
- Public-sector AI: procurement, abandonment of algorithms, Situate AI guidebook — “will supervisors allow questioning the objective?”
- Kidney allocation / moral decision-making qualitative work — attitude fit for uncomfortable healthcare conversations.
- Long-term impact of ML decisions (policy regret, intergenerational mobility) — Layer-3 incentives without being a pure clinical lab.

### Hooks for HIS email

- Not “I want fairness metrics” — governance + whether optimised outcomes track welfare.
- Pipeline-aware fairness + Ghani thread he already started.
- Ask if clinical interventional AI + institutional incentives is in-bounds for her group.

### Watch-outs

- Theory/governance heavy; less bedside EHR than Wilder/Ghani. Best as **co-advisor / committee** with a methods or deploy PI.

---

## Sarah H. Cen — deep

**Pages:** https://shcen.github.io/ · sarahcen@andrew.cmu.edu · SC **affiliated**; ECE + EPP  
**Invite:** *“If you're interested in thinking about these interdisciplinary problems together, please reach out…”* (+ URM note).

### Why she matches

- Thesis PhD: **AI Accountability** (MIT; Mądry + Shah).
- AI **auditing**, supply chains, access/evidence for accountability, causal framework (network synthetic interventions), individual fairness, “right to be an exception.”
- Heavy collab with **Ilyas** — strategization, trustworthy algorithms, LLM audits.
- Stanford postdoc: Percy Liang + Daniel Ho (RegLab) — policy-grade evaluation culture.

### Gaps vs his thesis

- Domains lately: elections, social media, litigation evidence, taxation of AI — **not clinical EHR**.
- Fit = **accountability / audit methodology** portable to healthcare, not a hospital partner lab.

### Hooks for HIS email

- Auditing under resource/data/access constraints; evidence barriers.
- Accountability as design goal (not post-hoc ethics paragraph).
- Healthcare as the high-stakes domain where audit assumptions fail (tie Wilder blog if useful).
- Confirm SC advising as affiliate (same class of question as Ghani).

---

## Fei Fang — light (maybe)

**Pages:** https://feifang.info/ · SC core; S3D  
**Agenda:** ML + multi-agent / game theory; security, sustainability, mobility; **AI for Social Good**. Recently RL/MARL + LLMs.

### Fit

- Core SC faculty; easy to name for “AI for good” programme fit.
- Coauthor on Wilder et al. healthcare-benchmarks assumptions paper — weak but real bridge.
- **Not** the centre of clinical provenance / hospital incentives. His “eh maybe” is correct.

### Recommendation

Optional email after Ilyas/Heidari/Cen. Do **not** lead SoP with Fang unless a specific multi-agent health project appears.

---

## Cross-links useful for SoP story

```
Methods (data attribution / legibility)     Institutional / governance
Ilyas  ←——— Cen (audit, joint papers) ———→  Heidari
  ↑                                           ↑
Wilder (health deploy + eval assumptions)   Ghani (deployed fair ML, incentives)
```

**Dual-app logic:** SC primary with Ilyas/Heidari/Ghani/Cen; MLD if Wilder (and fee waiver) — same research, two doors.

---

## Email queue (he drafts)

1. **Ilyas** — attribution ↔ EHR data governance; “mentioning you on SC app.”  
2. **Heidari** — governance + questioning objectives; Ghani overlap.  
3. **Cen** — AI accountability / auditing applied to clinical deployment.  
4. **Fang** — only if time / after Wilder reply.  
5. Wait: **Ghani**, **Wilder**.

Prep checklists only in chat or a `05-outreach.md` bump — **no send-ready agent emails**.
