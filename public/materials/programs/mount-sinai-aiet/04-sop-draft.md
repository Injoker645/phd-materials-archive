# SOP draft — Mount Sinai PhD Biomedical Sciences / AIET (Fall 2027)

> Status: **first draft**. Portal word limit **UNCERTAIN**; write ~850–950 words and trim when the Fall 2027 form publishes a cap.  
> Content brief (working): why this programme / which faculty / prior research. Confirm exact prompts on the Graduate School portal.  
> Voice: British spelling, contractions, no em dashes, no prestige language, named gaps. Safe anchors only. No fabricated KFSH pilot.

---

## Prompt checklist (hit these)

1. Why PhD Biomedical Sciences with **AIET** at Mount Sinai (not a generic health-AI paragraph).  
2. Named faculty (Nadkarni, Glicksberg; Ensari as training-area bridge).  
3. Prior research / relevant work, with honest limits.  
4. Same-city differentiation from NYU without insulting either.

---

## Draft

When a doctor absorbs a hospital's unwritten habits over twenty years and calls the result clinical judgement, we rarely ask which part is medicine and which part is that hospital's history. When a model absorbs the same habits from the same notes, we call it bias and demand an explanation before we trust the score. Same contamination, and in both cases we still lack a clean way to separate the two. I want to build that separation as a measurement on the model side, where it's actually testable across sites.

The concrete gap I'm after is narrow. For a score-output clinical model, we still cannot say, for one patient's prediction, how much of the evidence is site-invariant and how much is site-specific. A lot of existing work tries to train the gap away in aggregate. Domain-generalisation methods keep getting tested on multi-site clinical data and often fail to beat simply pooling the data. Other work splits disease signal from process signal at training time, or attributes features for one patient without a cross-site test. What's missing is a per-prediction audit: a decomposition into invariant versus site-specific evidence, checked under a pre-registered look at prevalence shift across environments, and tied to a decision (deploy, recalibrate locally, or escalate) rather than to a decorative explanation.

I didn't arrive at this from a textbook. I grew up in a hospital compound where my father worked, so the institutional side of care was never abstract. Later I wrote about how historical underrepresentation in medical research gets amplified when those records train models. On day one of my master's I contacted a bioethics researcher at Uppsala; we went to an EU AI Act healthcare session together and worked on a proposal around how people actually respond to clinical AI. None of that was a methods paper. It is why I care about measurement that a hospital could use, not only a benchmark score.

My technical training is in software engineering and data science. BE Software Engineering at NUST (Gold Medal). MSc Data Science at Uppsala. The thesis, *Cracks in the Feed*, built a multi-platform corpus and detectors for harmful comment evasion under the EU Digital Services Act. Different domain, but the habits transfer: constructing the dataset is part of the research problem, multimodal signals disagree, and "what the model used" is not the same as "what you hoped it used." On the health side I've done the unglamorous work that actually shows up in clinics. At KFSH & RC I helped clean and define the data dictionary for a CSICU / procedures dashboard. At Fyris AI I built an emergency-department demand forecasting model. At Uppsala I took health-innovation coursework and worked on a hospital interoperability project with clinicians in the room. I have no years of MIMIC papers behind me. I do have repeated contact with messy institutional data and a clear question I want five years to answer.

The AIET training area inside Mount Sinai's PhD in Biomedical Sciences is the right home for that question because the work is meant to sit next to a real health system, not next to a methods paper that never meets a ward. Mount Sinai's research warehouse already pulls Epic data from multiple hospitals into a common model for research. Faculty in Artificial Intelligence and Human Health already build and evaluate clinical models on those records, including work that treats more than one health system as an evaluation environment. That is the substrate an audit layer needs if it is going to mean something outside one firewall. I am also applying to NYU's data science programme, which is the honest same-city comparison. NYU is where some of the clearest published transfer gaps in clinical foundation models showed up, and I care about that evidence. I am applying to Mount Sinai because I want to build the measurement where multi-hospital Epic infrastructure and clinical AI deployment are everyday departmental work, not only where one campus pair can be compared.

The faculty match is specific. Girish Nadkarni's clinical AI work, including InfEHR-style inference on whole electronic records and evaluation beyond a single system, is the closest framing I have found to provenance as something a care organisation could act on. Benjamin Glicksberg's EHR machine-learning work is the practical path to representations and tasks where site labels actually matter. Ipek Ensari's role in AIET, and her focus on longitudinal patient-generated measurement, is why this training area looks like a home rather than a label on an application form. I know permanent advising depends on rotations and capacity. I am naming the intellectual matches, not inventing a lab assignment.

What I want from the PhD is simple to say and hard to do: a falsifiable per-prediction provenance signal for clinical models, validated across sites, useful enough that a deployment meeting could act on it. I am applying because this is the programme where that measurement has somewhere real to land.

---

## Word count (approx.)

~920 words. Trim faculty paragraph or bioethics sentence first if the portal caps lower.

---

## Claim audit (quick)

| Sentence cluster | Status |
|---|---|
| Hospital compound; Medium article; bioethics contact; DSA thesis; KFSH dashboard; Fyris ER; NUST Gold Medal; Uppsala MSc | **USABLE** per claim inventory (bioethics proposal framing kept vague on purpose) |
| KFSH electrophoresis pilot | **Absent (correct)** |
| Stipend / funding claims | **Absent (correct)** |
| Multi-hospital Epic / research warehouse | **SOURCED** MSDW materials; do not overclaim personal access |
| InfEHR / multi-system evaluation | **SOURCED** as faculty-field evidence; do not claim he will join that paper |
| NYU also applying | Intentional; differentiates same-city apps. Confirm he wants this sentence before submit. |
| GRE / IELTS | Not needed in SOP body |
| "First AI department" prestige line | **Absent (correct)** |

---

## Open edits before lock

- [ ] Resolve bioethics proposal framing (aversion vs fairness) if he wants one concrete noun.  
- [ ] Confirm whether to keep the explicit "also applying to NYU" sentence.  
- [ ] Re-fit to live portal word limit / dual-essay split.  
- [ ] Confirm Glicksberg's exact title line on live profile.  
- [ ] Persona pass (Bioethicist + Grant Reviewer) after length is locked.
