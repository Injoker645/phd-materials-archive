# SOP draft — UPenn CIS PhD (Fall 2027)

> Status: **first draft** against the SEAS personal-statement prompts (≤2 pages; why programme / candidacy / benefit / community / success / post-PhD).  
> Length target: ~1,000 words (fit to two pages).  
> Voice: British spelling, contractions, no em dashes, no prestige language, named gaps. Safe anchors only.

---

## Prompt checklist (hit these)

1. Why CIS at Penn (not a generic health-AI paragraph; name the CS + Penn Medicine path).  
2. Named faculty (Johnson, Eaton; optional Long).  
3. Prior research / relevant work, with honest limits.  
4. Brief community / success / post-PhD beats (SEAS asks; keep short).  
5. No KFSH electrophoresis; no stipend claims; no invented data access.

---

## Draft

When a doctor absorbs a hospital's unwritten habits over twenty years and calls the result clinical judgement, we rarely ask which part is medicine and which part is that hospital's history. When a model absorbs the same habits from the same notes, we call it bias and demand an explanation before we trust the score. Same contamination, and in both cases we still lack a clean way to separate the two. I want to build that separation as a measurement on the model side, where it is actually testable across sites.

The concrete gap I'm after is narrow. For a score-output clinical model, we still cannot say, for one patient's prediction, how much of the evidence is site-invariant and how much is site-specific. A lot of existing work tries to train the gap away in aggregate. Domain-generalisation methods keep getting tested on multi-site clinical data and often fail to beat simply pooling the data. Other work splits disease signal from process signal at training time, or attributes features for one patient without a cross-site test. What's missing is a per-prediction audit: a decomposition into invariant versus site-specific evidence, checked under a pre-registered look at prevalence shift across environments, and tied to a decision (deploy, recalibrate locally, or escalate) rather than to a decorative explanation.

I didn't arrive at this from a textbook. I grew up in a hospital compound where my father worked, so the institutional side of care was never abstract. Later I wrote about how historical underrepresentation in medical research gets amplified when those records train models. On day one of my master's I contacted a bioethics researcher at Uppsala; we went to an EU AI Act healthcare session together and worked on a proposal around how people actually respond to clinical AI. None of that was a methods paper. It is why I care about measurement that a hospital could use, not only a benchmark score.

My technical training is in software engineering and data science. BE Software Engineering at NUST (Gold Medal). MSc Data Science at Uppsala. The thesis, *Cracks in the Feed*, built a multi-platform corpus and detectors for harmful comment evasion under the EU Digital Services Act. Different domain, but the habits transfer: constructing the dataset is part of the research problem, multimodal signals disagree, and "what the model used" is not the same as "what you hoped it used." On the health side I've done the unglamorous work that actually shows up in clinics. At KFSH & RC I helped clean and define the data dictionary for a CSICU / procedures dashboard. At Fyris AI I built an emergency-department demand forecasting model. At Uppsala I took health-innovation coursework and worked on a hospital interoperability project with clinicians in the room. I have no years of MIMIC papers behind me. I do have repeated contact with messy institutional data and a clear question I want five years to answer.

Penn CIS is the right home for that question because I want a computer-science methods degree that still lands inside a real health system. The department already seats CIS doctoral students in applied clinical AI labs that work with Penn Medicine data and deployment settings. Transfer and lifelong-learning research here treats systems that stay deployed across changing environments as a first-class problem. Causal inference and fairness work on EHR and other multimodal health data gives the statistical language an audit needs if site differences are prevalence shifts rather than pure spurious correlations. That combination (CS methods home, clinical deployment lab, multi-environment reliability) is why I am applying to CIS rather than only to a biomedical informatics degree elsewhere.

The faculty match is specific. Kevin Johnson's AI-4-AI work sits where documentation, ambulatory care, and deployed clinical AI meet; that is exactly where a provenance audit has to be useful, not merely clever. Eric Eaton's research on transfer, continual learning, and multimodal clinical foundation models is the closest methods neighbour I have found to treating hospitals as environments that change over time. I would also learn from Qi Long's work on causal inference, fairness, and robust ML for EHR and other multimodal health data, even if my permanent seat ends up in an applied clinical AI lab after the first-year research match.

I will succeed in this programme the same way I have succeeded so far: by building the unglamorous pieces carefully, stating what I cannot yet claim, and staying close to the people who have to use the result. I expect to contribute as a collaborator who can talk to both engineers and clinicians without turning either conversation into theatre. After the PhD I want to keep building measurement tools that hospitals and regulators can act on, whether that is in an academic lab, a health-system research group, or an industrial research setting that still answers to clinical constraints.

What I want from the PhD is simple to say and hard to do: a falsifiable per-prediction provenance signal for clinical models, validated across sites, useful enough that a deployment meeting could act on it. I am applying because Penn CIS is where that measurement has both a methods home and somewhere real to land.

---

## Word count (approx.)

~980 words. If the portal/PDF hard-caps two pages at a lower count, trim the bioethics sentence and the post-PhD sentence first.

---

## Claim audit (quick)

| Sentence cluster | Status |
|---|---|
| Hospital compound; Medium article; bioethics contact; DSA thesis; KFSH dashboard; Fyris ER; NUST Gold Medal; Uppsala MSc | **USABLE** per claim inventory (bioethics proposal framing still PICK-ONE; kept vague on purpose) |
| KFSH electrophoresis pilot | **Absent (correct)** |
| Stipend / funding claims | **Absent (correct)** |
| "CIS doctoral students in applied clinical AI labs" / AI-4-AI | **SOURCED** members page; do not invent personal access |
| Automatic UPHS multi-campus split | **Absent (correct)** |
| GRE / IELTS | Not needed in SOP body |

---

## Open edits before lock

- [ ] Resolve bioethics proposal framing (aversion vs fairness) if he wants one concrete noun.  
- [ ] Re-fit to live two-page layout (margins / font) once writing in the portal or Word template.  
- [ ] Confirm whether to keep Long as third name or stop at Johnson + Eaton.  
- [ ] Persona pass (Bioethicist + Grant Reviewer) after length is locked.
