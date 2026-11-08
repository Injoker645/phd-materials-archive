# SOP draft — Columbia DBMI PhD (Fall 2027)

> Status: **first draft** against the historical DBMI prompt (why this programme / which faculty / prior research).  
> Length target: ~900 words. **UNCERTAIN** whether the CUIMC portal wants one statement or two; if a separate personal statement appears, move the bio paragraph there.  
> Voice: British spelling, contractions, no em dashes, no prestige language, named gaps. Safe anchors only.

---

## Prompt checklist (hit these)

1. Why Biomedical Informatics at Columbia (not a generic health-AI paragraph).  
2. Named training faculty (Joshi, McDermott; optional Elhadad or Hripcsak).  
3. Prior research / relevant work, with honest limits.  
4. Same-city differentiation from NYU without insulting either.

---

## Draft

When a doctor absorbs a hospital's unwritten habits over twenty years and calls the result clinical judgment, we rarely ask which part is medicine and which part is that hospital's history. When a model absorbs the same habits from the same notes, we call it bias and demand an explanation before we trust the score. Same contamination, and in both cases we still lack a clean way to separate the two. I want to build that separation as a measurement on the model side, where it's actually testable across sites.

The concrete gap I'm after is narrow. For a score-output clinical model, we still cannot say, for one patient's prediction, how much of the evidence is site-invariant and how much is site-specific. A lot of existing work tries to train the gap away in aggregate. Domain-generalisation methods keep getting tested on multi-site clinical data and often fail to beat simply pooling the data. Other work splits disease signal from process signal at training time, or attributes features for one patient without a cross-site test. What's missing is a per-prediction audit: a decomposition into invariant versus site-specific evidence, checked under a pre-registered look at prevalence shift across environments, and tied to a decision (deploy, recalibrate locally, or escalate) rather than to a decorative explanation.

I didn't arrive at this from a textbook. I grew up in a hospital compound where my father worked, so the institutional side of care was never abstract. Later I wrote about how historical underrepresentation in medical research gets amplified when those records train models. On day one of my master's I contacted a bioethics researcher at Uppsala; we went to an EU AI Act healthcare session together and worked on a proposal around how people actually respond to clinical AI. None of that was a methods paper. It is why I care about measurement that a hospital could use, not only a benchmark score.

My technical training is in software engineering and data science. BE Software Engineering at NUST (Gold Medal). MSc Data Science at Uppsala. The thesis, *Cracks in the Feed*, built a multi-platform corpus and detectors for harmful comment evasion under the EU Digital Services Act. Different domain, but the habits transfer: constructing the dataset is part of the research problem, multimodal signals disagree, and "what the model used" is not the same as "what you hoped it used." On the health side I've done the unglamorous work that actually shows up in clinics. At KFSH & RC I helped clean and define the data dictionary for a CSICU / procedures dashboard. At Fyris AI I built an emergency-department demand forecasting model. At Uppsala I took health-innovation coursework and worked on a hospital interoperability project with clinicians in the room. I have no years of MIMIC papers behind me. I do have repeated contact with messy institutional data and a clear question I want five years to answer.

Columbia DBMI is the right home for that question because multi-environment evaluation is not an afterthought here. The OHDSI coordinating centre and OMOP tooling treat cross-database reliability as a native workflow. Newer infrastructure like MEDS is aimed at training and validating models across sites while keeping patient data local. That is exactly the substrate an audit layer needs if it is going to mean something outside one hospital's firewall. I am also applying to NYU's data science programme, which is the honest same-city comparison. NYU is where some of the clearest published transfer gaps in clinical foundation models showed up, and I care about that evidence. I am applying to Columbia because I want to build the measurement where multi-site observational and EHR foundation-model infrastructure is the department's everyday stack, not only where one health system's campuses can be compared.

The faculty match is specific. Shalmali Joshi's work on reliability, fairness, and distribution shift in clinical ML is the closest framing I have found to provenance-as-audit rather than provenance-as-story. Matthew McDermott's focus on EHR foundation models and multi-site evaluation tooling is the practical path to environments that are actually different sites. I would also learn from Noémie Elhadad's EHR NLP and auditing work, and from George Hripcsak's observational methods across the OHDSI network, even if my permanent seat ends up with a methods-focused lab after rotations.

What I want from the PhD is simple to say and hard to do: a falsifiable per-prediction provenance signal for clinical models, validated across sites, useful enough that a deployment meeting could act on it. I know the first year is rotations and coursework. I am applying because this is the department where that measurement has somewhere real to land.

---

## Word count (approx.)

~920 words. Trim faculty paragraph or bioethics sentence first if the portal caps lower.

---

## Claim audit (quick)

| Sentence cluster | Status |
|---|---|
| Hospital compound; Medium article; bioethics contact; DSA thesis; KFSH dashboard; Fyris ER; NUST Gold Medal; Uppsala MSc | **USABLE** per claim inventory (bioethics proposal framing still PICK-ONE; kept vague on purpose) |
| KFSH electrophoresis pilot | **Absent (correct)** |
| Stipend / funding claims | **Absent (correct)** |
| "OHDSI coordinating centre" / MEDS multi-site | **SOURCED** programme materials; do not overclaim personal access |
| NYU also applying | Intentional; differentiates same-city apps. Confirm he wants this sentence before submit. |
| GRE / IELTS | Not needed in SOP body |

---

## Open edits before lock

- [ ] Resolve bioethics proposal framing (aversion vs fairness) if he wants one concrete noun.  
- [ ] Confirm whether to keep the explicit "also applying to NYU" sentence.  
- [ ] Re-fit to live portal word limit / dual-essay split.  
- [ ] Persona pass (Bioethicist + Grant Reviewer) after length is locked.
