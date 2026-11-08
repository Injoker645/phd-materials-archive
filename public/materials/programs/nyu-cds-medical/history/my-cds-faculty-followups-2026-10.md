# CDS shortlist follow-ups — Oct 2026

> **Compiled:** 2026-10-02. Answers the research actions Moaaz listed in [`my-cds-faculty-notes.md`](my-cds-faculty-notes.md). Sources marked **SOURCED**. Does not replace the full screen in [`nyu-cds-faculty-screen-2026-09.md`](nyu-cds-faculty-screen-2026-09.md).
>
> **Applicant framing (for judging fit):** practice-relevant trustworthy clinical AI; hospital-embedded; bias uncovering; method open (provenance / interpretable-by-design / causal); NYUTron-family notes→scores as primary object, LLM-generation secondary and undecided.

---

## Verdict board (quick)

| Faculty | Verdict for CDS-side PI | One-line why |
|---|---|---|
| **Rajesh Ranganath** | **Keep — primary** | Already solid; causal / self-fulfilling prophecy / clinical ML. Unchanged. |
| **Julia Stoyanovich** | **Keep — strong** | Responsible AI director; nutritional labels = interpretability-by-design / governance; early workflow-provenance papers. Best CDS match for "provenance as something a non-ML party can interrogate." |
| **He He** | **Keep — medium–strong (with Medical co-PI)** | Doctor-vs-department story maps to her OOD / spurious-feature agenda; no hospital programme of her own — pair with Medical Track. Looking for 1–2 PhD students; name her in the application. |
| **Emily Black** | **Keep — strong adjacent** | Pipeline-aware fairness + Pipeline Cards; health named as high-stakes domain; Obermeyer-style label bias is exactly her pipeline story. |
| **Sunoo Park** | **Worth form outreach** | DeTaIL Lab = digital trust / law / crypto; no healthcare yet, but "trustworthy provenance for clinical AI" is a coherent new case for her framing. |
| **Qi Lei** | **Soft-keep** | AI safety / robust generalisation / privacy; transferable, not healthcare-specific. |
| **Claudio Silva** | **Soft / secondary** | Provenance is real (VisTrails) but primary identity is viz/urban; better as co-advisor or methods consult than sole CDS PI. |
| **Greg Durrett** | **Soft-keep (methods only)** | LoFiT *does* select attention heads; your faithfulness objection is fair if the claim is "heads explain." Keep for inspiration on *localised* adaptation, not as primary clinical-provenance PI. |
| **Tal Linzen** | **Weak for primary PI** | Interpretability is psycholinguistic (syntax, heuristics, causal interventions on linguistic reps). Conceptually adjacent ("right for wrong reasons") but not clinical / institutional provenance. |
| **Carlos Fernandez-Granda** | **Soft / lukewarm stands** | Data-driven medicine is real but mostly imaging/math methods; weak governance/provenance/bias hook for *your* pitch. |
| **Eunsol Choi** | **Conditional** | Fit under LLM/retrieval framing (B); weak under notes→score framing (A). Decide framing first. |
| **Sam Bowman** | **Parked** | On leave (Anthropic). Do not plan around. |

---

## 1. Tal Linzen — interpretability pubs vs your thesis

**What he means by interpretability.** Cognitive-science / psycholinguistic analysis of how LMs encode syntax and use heuristics — not clinical trust, not institutional documentation style. **SOURCED** [tallinzen.net/research.html](https://tallinzen.net/research.html), CDS profile.

| Paper | Year | Relevance to you |
|---|---|---|
| McCoy, Pavlick & Linzen — *Right for the Wrong Reasons* (HANS / syntactic heuristics in NLI) | 2019 ACL | **WEAK–YES (concept only).** Models succeed via invalid shortcuts. Same *shape* as hospital-shortcut / proxy-label stories, but the domain is NLI syntax, not EHR. Do not cite as clinical evidence. |
| McCoy et al. (incl. Linzen) — *How Much Do Language Models Copy From Their Training Data?* (RAVEN) | 2023 TACL | **WEAK.** Closest to "provenance" in his corpus (training-copy vs novelty) — still not note-span / author provenance for a clinical score. |
| McCoy, Min & Linzen — *BERTs of a feather do not generalize together* | 2020 BlackboxNLP | **WEAK.** Same test accuracy can hide different internal reliance — useful caution for one deployed clinical FM, no clinical variables. |
| Ravfogel, Prasad, Linzen & Goldberg — counterfactual interventions on relative-clause representations | 2021 CoNLL | **WEAK.** Causal probing of linguistic representations. Method family adjacent; object is syntax. |
| Finlayson et al. (incl. Linzen) — *Causal Analysis of Syntactic Agreement Mechanisms* | 2021 ACL | **NO** for your pitch. Mechanistic syntax on GPT-2-class models. |

**Verdict:** Do **not** name Linzen as a primary CDS PI for a clinical-provenance / bias thesis. Optional: one sentence in a methods paragraph acknowledging "right for the wrong reasons" as the general failure mode, without implying he works on hospitals.

---

## 2. Greg Durrett — LoFiT and the attention objection

**Paper:** Yin, Ye & Durrett — *LoFiT: Localized Fine-tuning on LLM Representations* (NeurIPS 2024). **SOURCED** [gregdurrett.github.io](https://gregdurrett.github.io/), [proceedings.neurips.cc](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf).

**What it does:** Two-step PEFT. (1) Select a sparse subset of **attention heads** (~3–10%) most important for a task. (2) Learn small offset vectors added to hidden states at those heads. Claims better truthfulness/reasoning adaptation than Inference-time Intervention, with far fewer parameters than LoRA.

**Does it use attention heads?** Yes — localisation is *defined* over heads.

**Is your "attention is unfaithful" objection fair?**
- **Fair** if someone claims LoFiT *explains* the model via those heads (classic attention-as-explanation critique).
- **Less fair** if LoFiT is only used as *adaptation machinery* ("change a small localised part of the network for a new site/doctor"), without claiming the selected heads are a human-readable explanation.

**Analogy to NYUTron local fine-tuning:** surface-similar (adapt a large model locally) but different object (LLM generation/truthfulness vs clinical note→score) and different claim (head offsets vs full local fine-tune). Not a substitute for a provenance metric.

**Verdict:** Soft-keep as a **methods citation / conversation**, not primary CDS PI for your clinical framing. TAUR lab names "medical information processing" as a gap LLMs still fail — useful colour, not a co-PI plan. **SOURCED** Durrett homepage.

**Also worth knowing (not LoFiT):** Tang et al. (Durrett coauthor) *Evaluating large language models on medical evidence summarisation*, *npj Digital Medicine* 2023; Tang, Laban & Durrett *MiniCheck* (EMNLP 2024) — claim↔document grounding as *external verification*, closer to "is this score supported by the note?" than head-based explanation. Soft-keep path: factuality/grounding layer + Medical co-PI, not LoFiT-as-provenance.

---

## 3. He He — doctor vs department story

**Her stated questions (verbatim theme):** understanding LLMs / guiding principles of scaling; generalisation to novel scenarios; how abstract concepts are encoded in representations; evaluation/oversight; human–AI collaboration. Looking for **1–2 PhD students this cycle**; apply to CS or DS PhD and **mention her name**. **SOURCED** [hhexiy.ai](https://hhexiy.ai/), [futureoflife.org/person/prof-he-he/](https://futureoflife.org/person/prof-he-he/).

**Does your surgeon-only-notes-for-5-years story fit?** Yes, tightly:
- *Novel scenario / OOD:* a model trained on hospital-wide notes faces a prediction where almost all signal for a rare procedure comes from one writer's decade of documentation.
- *What is encoded:* is the representation carrying "medical fact about the procedure" or "this surgeon's phrasing / case mix / documentation habit"?
- *New outlook + useful:* measurement that a clinician can argue with ("how much of this score is me vs the disease?") — matches her "usefulness in practical workflows" and anti-post-hoc safety instinct.

**Talking points (do not over-claim NYUTron commercialisation):**
1. Manhattan/Brooklyn local-vs-external fine-tuning in Jiang et al. *Nature* 2023 shows site-level adaptation matters; causes left open — you want the **individual clinician / specialty-cell** grain, not only hospital grain.
2. Ask whether she sees that as an instance of her "generalise to novel scenarios / what concepts are encoded" agenda applied to clinical foundation models.
3. Emphasise measurement / physician-interrogable feature, not a new optimiser.
4. Concrete paper bridges from her lab: Tu et al. (TACL 2020) spurious correlations with pretrained LMs; Saparov et al. (NeurIPS 2023) OOD deductive reasoning; Joshi et al. (EMNLP 2024) LLMs prone to causal fallacies from mention *order* — cousin of note narrative order ≠ clinical causality. **SOURCED** [hhexiy.ai](https://hhexiy.ai/), Anthology / NeurIPS records.
5. Process: read her advising statement; apply CS or CDS and **mention her name** ([hhexiy.ai/advising](https://hhexiy.ai/advising/)).

**Verdict:** Medium–strong keep *as CDS side for OOD/shortcut evaluation*, only with a Medical Track co-PI for EHR. Conceptual fit for the surgeon story is tight; institutional clinical FM programme is not hers.

---

## 4. Claudio Silva — how deep is provenance?

**Depth:** Historically deep on **scientific-workflow provenance** (VisTrails; survey *Provenance for computational tasks* with Freire et al., 2008). Today his centre of mass is **visualization, urban computing, geometric computing**, with "reproducibility and provenance" and "ML interpretability" still listed. Recent explainability tools (e.g. Mountaineer / Capital One XAI) are viz-of-explanations, closer to post-hoc XAI tooling than clinical knowledge provenance. **SOURCED** [ctsilva.github.io](https://ctsilva.github.io/), Tandon profile, Google Scholar.

**Healthcare hooks (viz, not prediction-governance):** **ClinicalPath** — VIS tool for longitudinal EHR visualisation with clinician co-design (**SOURCED** TVCG / GitHub ClinicalPath); **ARPA-H Biomedical Data Fabric Toolbox** on his site. Use only if the thesis wants physician-legible *views* of chart/data workflows.

**Verdict:** Soft / secondary. Good if you need a provenance-*systems* or viz co-advisor (ClinicalPath / BDF). Not the best sole CDS PI for "hospital-trustworthy clinical AI." (Also note: Juliana Freire is the clearer pure-provenance/data-management specialist on the Advisory Group — already flagged in the Sep screen — if you want that angle without Silva's viz emphasis.)

---

## 5. Julia Stoyanovich — relevant angle

**Role:** Director, NYU **Center for Responsible AI**; CDS + Tandon. **SOURCED** [airesponsibly.com/people/julia/](https://www.airesponsibly.com/people/julia/), [stoyanovich.org](https://stoyanovich.org) / Tandon profile.

**Angles that map to you:**
1. **Nutritional labels for data and models** — interpretability-*by-design*, fitness-for-use for non-technical stakeholders, contestability. Closest published language to "physician can interrogate the system."
2. **Responsible / data-centric AI, fairness, transparency, AI policy** — governance as the object, not a fairness metric bolted on.
3. **Earlier workflow provenance** (Lipstick / Pig Latin provenance; privacy-in-provenance-aware workflows) — shows she already takes "where did this answer come from in a pipeline" seriously as a DB/systems problem.

**Best cites to name in a conversation:**
1. Stoyanovich, Howe & Jagadish — *Responsible Data Management* (PVLDB 2020 / CACM) — ADS oversight / auditing as data-engineering problem.
2. Ranking Facts / nutritional labels for rankings — user-facing transparency for high-stakes scores.
3. Bell et al. (incl. Stoyanovich) — *The Possibility of Fairness* (FAccT 2023) — empirical fairness auditing stance.
4. Optional health-specific: Hernandez-Boussard, Lee, Stoyanovich et al. — *Promoting transparency in AI for biomedical and behavioral research* (*Nat Med* 2025 correspondence).

**Verdict:** Strong keep. Natural CDS PI if the research statement leads with governance / audit / physician-readable provenance rather than LM internals. Still needs a Medical Track co-PI for embedded clinical data.

---

## 6. Sunoo Park — form outreach

**Lab:** DeTaIL (Digital Trust and Information Law). Themes: cryptography, privacy, security, transparency, AI; how to make algorithmic systems more reliable/secure/trustworthy. JD + CS PhD; NYU Law affiliate. **No public healthcare focus.** **SOURCED** [wp.nyu.edu/detail/](https://wp.nyu.edu/detail/), [sunoopark.com](https://www.sunoopark.com/).

**Is "healthcare AI data provenance trustworthy" a coherent ask?**
- **Coherent stretch** if you mean *auditable disclosure under privacy/legal constraints* (what hospitals may log, attest, prove without breaking HIPAA-style limits) — DeTaIL / AUDIT-style accountability + her AAAI 2025 transparency paper (*Security by Obscurity* pitfalls for transparent AI).
- **Partial mismatch** if you mean VisTrails-style lineage graphs of fields/transforms — that is Freire/data-management territory, not her stack.

**Draft form message (Register A, British spelling, no em dashes) — prefer this refined version:**

> I am applying to the CDS PhD (Medical School Track) for Fall 2027. I want hospital-embedded clinical AI where clinicians can interrogate where predictions come from, not benchmark-style medical QA. Your DeTaIL work on trustworthy algorithmic systems and transparency under privacy and legal constraints is closer to that question than pure model accuracy. Would you consider advising (or co-advising) a project on auditable data and model disclosure for clinical decision support inside health systems? I can send a one-page problem note if useful.

**Verdict:** Worth sending. Stretch on domain, not on theme. Frame as legal-technical trust, not EHR lineage DB.

---

## 7. Carlos Fernandez-Granda — does any project speak to you?

Already screened as methods/leadership capacity, weaker on governance/causal/bias for *your* pitch ([nyu-cds-faculty-screen](nyu-cds-faculty-screen-2026-09.md) §4). Public "data-driven medicine" is real and **Langone-embedded**, but skews imaging/wearables/signals: e.g. COBRA stroke impairment (npj Digital Medicine), PrimSeq rehab, SUM uncertainty-aware fine-tuning of segmentation FMs (NeurIPS 2024), COVID ED deterioration (CXR + tabular, silent Langone deployment). **SOURCED** [cims.nyu.edu/~cfgranda/pages/data_driven_medicine.html](https://cims.nyu.edu/~cfgranda/pages/data_driven_medicine.html). Little on note provenance or fairness/governance.

**Verdict:** Soft keep for *institutional* Langone CDS / imaging FM generalization — not thematic match for notes→scores provenance. Do not force as primary CDS PI for your pitch.

---

## 8. Eunsol Choi — LLM vs score-model framing

**Work:** ambiguity, conflicting/outdated knowledge sources, continual learning, human–LM interaction ("how should systems present information such that users aren't misled"). **SOURCED** CDS profile / eunsol.github.io (via Sep screen).

| Framing | Fit |
|---|---|
| **(A) Notes → scores (NYUTron-family), probabilities, little free text** | **Weak–soft.** Her toolkit is QA/retrieval/interfaces, not clinical risk heads. Soft only if thesis includes evidence-linked *spans* supporting a score (attribution), not the score model itself. |
| **(B) LLM generation / retrieval / human-in-the-loop clinical text** | **Stronger methodological fit.** RECOMP (ICLR 2024), sentence-level attribution of long answers (SALAD / COLM 2024), human feedback on extractive QA (EMNLP 2023). Still not hospital-embedded unless you add a Medical co-PI. |

**Verdict:** Decide framing first (see your notes). Under current intent (notes→scores, method open but not LLM-chat-first), she is not a primary PI.

---

## 9. Emily Black — AI safety look-in

**Not classic "alignment" safety.** Practical **algorithmic fairness / accountability**, pipeline-aware interventions, legal/policy interface. IDEA Lab. High-stakes domains named: jobs, credit, housing, **health**. **SOURCED** [emblack.github.io/lab/](https://emblack.github.io/lab/), CDS/Tandon profiles.

**Pipeline Cards** (Black et al., EAAMO 2023 / arXiv:2309.17337): document design choices across the whole ML pipeline so fairness work targets root causes (including problem formulation / label choice — the Obermeyer cost-vs-need story is exactly this class of failure).

**Also read if pursuing her:** *Less Discriminatory Algorithms* (Georgetown Law Journal 2024) — multiplicity → actionable search for less discriminatory alternatives; IRS tax-audit fairness study (FAccT/arXiv) — how *prediction target formulation* reshapes who is harmed (cousin of Obermeyer label choice). Recent AttriBench / attribution bias work is RAG claim provenance — useful only if clinical support includes retrieved evidence, not raw score lineage.

**Verdict:** Strong adjacent keep. Excellent if your statement centres bias uncovering + pipeline/governance documentation that a clinician or compliance reader can use. Complements Stoyanovich (centre-level responsible AI) rather than duplicating Ranganath (causal/clinical ML). Not a primary fit for notes→scores FM engineering alone.

---

## 10. Qi Lei — safety / alignment

**Focus:** ML/optimisation with explicit AI-safety framing — data privacy, distributionally robust algorithms, weak-to-strong generalisation. **SOURCED** cecilialeiqi.github.io. Healthcare-adjacent: Whitehead Fellowship (2023) on privacy-preserving learning pipelines for sensitive health data — privacy threat model, not clinical FM provenance. Advising note: her site has indicated Courant CS admits as **co-advisor only** in some materials — confirm before naming as sole CDS PI.

**Verdict:** Soft-keep / niche. Consider only if thesis includes federated or privacy-preserving clinical learning; not a lead for notes→scores provenance or care-pathway bias.

---

## 11. Sam Bowman

**Parked.** Long-term leave (Anthropic). Confirmed in Advisory Group notes and your page reading. Do not name as available advisor.

---

## Suggested CDS-side shortlist to act on next

1. **Ranganath** — stay primary; keep reading his clinical/causal papers.
2. **Stoyanovich** or **Black** — if the statement leads governance / pipeline / physician-readable audit.
3. **He He** — if the statement leads "what is encoded / who does the model generalise to" with the doctor-vs-department story; **name her in the application** and bring a Medical co-PI for EHR.
4. **Park** — send the form message above when ready.
5. Park Durrett/Linzen/Choi as primary; use selectively as cites.
6. Medical Track co-PI dive remains the parallel track (still open from Sep screen).

---

## Pointers

- Your raw shortlist: [`my-cds-faculty-notes.md`](my-cds-faculty-notes.md)
- Full Advisory Group + Medical Track: [`nyu-cds-faculty-screen-2026-09.md`](nyu-cds-faculty-screen-2026-09.md)
- Intent / method-open rule: [`../applicant/current-intent.md`](../applicant/current-intent.md)

---

## Changelog — 2026-10-02 (later): deep-dive pass merged

Absorbed extra citations and nuances from parallel faculty deep-dives ([Linzen/Durrett/He He](2382bd4f-ebe8-4c15-8463-60d7f54fd61d), [Silva/Stoyanovich/Park](c4c910d3-4051-4795-a55a-41245cbe18b7), [Black/Choi/Fernandez/Qi](fe397b0c-a058-45bd-bffa-4a6cc2145a0c)): He He dialled to medium–strong-with-Medical-co-PI; Park ask framed as disclosure-under-privacy-law; Silva ClinicalPath/BDF noted; Stoyanovich/Black/Durrett/Choi/Lei reading lists expanded; Fernandez-Granda Langone imaging projects named. Verdict board ordering unchanged.
