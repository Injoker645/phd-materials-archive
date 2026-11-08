# UW Allen School CSE - Personal Statement draft

> Prompt (SOURCED how-to-apply): include (a) how you became interested in doing research, (b) a relevant project or research experience that shows technical knowledge and skill, (c) plans for the future in computer science. Strengths / weaknesses / enrichment optional.
> Length: no official limit found - draft ~850 words. Trim if portal asks for shorter. **UNCERTAIN**.
> Voice: Register A. No em dashes. British spelling. Contractions. No "I am writing to apply." No prestige flattery. Named gaps. Claim-inventory clean. Safe KFSH bio only (dashboard / data dictionary). Never electrophoresis pilot.
> Thesis: portable v4 audit framing (`02-thesis-adaptation.md`). Soften Uppsala grant as trust/blame person vs system.

---

## Personal Statement (draft)

**Word count:** ~860.

---

When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result clinical judgement, we trust it. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result bias and demand it be explained. Overlapping sources of habit, and in either case no clean way to separate medicine from local routine. The difference is that one of those agents is actually auditable. I want to build that audit in computer science terms: a per-prediction report of how much of a clinical model's score rests on site-invariant evidence versus site-specific evidence, tied to a deploy-or-recalibrate decision rather than to a decorative attribution plot.

I grew up in a hospital compound where my father worked. I didn't have the vocabulary then for documentation habits or proxy objectives. I just saw that a lot of important information lived in people's heads and in local routines rather than in anything another site could reuse. That observation kept showing up later: in a Medium piece on how historical underrepresentation in medical research gets amplified in training data, and on my first day of a data science master's at Uppsala, when I contacted a bioethics researcher and worked on a grant proposal about trust and blame when a decision comes from a person versus a system. That's how I got interested in research: not a sudden love of AI, but a habit of asking what the recorded data is actually a record of.

The project that shows the technical habit most clearly is my Uppsala thesis, *Cracks in the Feed*. I built a 2,564-comment multi-platform corpus and annotation framework for harmful content under the EU Digital Services Act, including a multimodal path for GIF comments that text-only systems miss by construction. Custom schema, detectors, honest limits (single annotator; small GIF test set). Different domain, but key skills are transferable: integrating heterogeneous sources, deciding what is genuinely predictive versus merely correlated, and treating evaluation design as the research problem rather than as a last-week appendix. Hospital-adjacent work kept the clinical side visible: cleaning and defining the data dictionary for a CSICU procedures dashboard at KFSH and RC in March 2024, an emergency-department demand model at Fyris AI, and coursework that put me in rooms with clinicians on interoperability. I left a constrained industry analyst role at Samsung because I needed room to follow a problem properly. BE Software Engineering from NUST (Gold Medal) and MSc Data Science from Uppsala (ML and Statistics) are the quantitative base. GRE 158V/164Q if the form wants numbers; IELTS 8.5. I'm not claiming prior deep expertise in invariant causal prediction or in running a multi-hospital EHR study end to end. That is the honest gap.

Clinical prediction systems fail in a related shape to the moderation problem. Models trained on a hospital's own notes learn generalisable medicine and local documentation or operational habit in one pass. Inside one site the two are hard to tell apart. Cross-site evaluations keep showing that local fine-tuning and site-linked shortcuts matter, and that training-time domain-generalisation tricks often fail to beat simply pooling data. I do not want to add another post-hoc story on top of a black box and call it trust. I want a measurement layer: for one patient's score, estimate how much of the evidence travels across hospitals and how much does not, check whether the sites differ in outcome prevalence before trusting that split, and attach a validity guarantee a deployment team can actually use.

At the Allen School I want to do this as CSE research with clinical collaborators, not as a separate informatics degree. Su-In Lee's AIMS line of work, especially auditing clinical AI for safety and transparency and the attribution machinery that came out of that lab, is the sharpest local pressure I know for keeping the proposal honest. Attribution here would be an instrument for reporting invariant versus site-specific evidence, not a substitute for validation. UW Medicine collaborations are what make a multi-site evaluation realistic rather than aspirational; access will be collaborator-dependent, and I am saying that up front. Tim Althoff's health-relevant measurement from messy behavioural data is a secondary fit if the evaluation design needs that kind of grounding.

Plans for the future in computer science: four or five years on a measurement that a hospital evaluating a local model would actually use, then applied healthcare AI R&D whether that sits in academia or industry. I care more that the work reaches a clinic than that it stays inside one career track. Whether I stay in academia after is open. Whether the work should matter to a deployment team is not.

---

### Checklist vs Allen prompt

| Prompt ask | Where it lands |
|---|---|
| (a) how interested in research | Hospital compound → Medium → Uppsala bioethics contact → thesis-as-data-construction |
| (b) relevant technical project | *Cracks in the Feed* corpus/annotation/detectors; KFSH dashboard; Fyris |
| (c) plans in CS | Per-prediction site-invariance audit; CSE + UW Medicine; academia/industry open |
| Faculty / fit | Lee primary; Althoff light secondary |
| Named gap | No prior ICP / multi-hospital EHR end-to-end |

### Still waiting on him

- Comfort with childhood story length in this single essay.
- Whether to keep GRE numbers in the essay (scores unused by Allen; can live on the form only or be omitted).
- Exact wording of the Uppsala grant if he wants more than the softened trust/blame line.
- Confirm Althoff name-drop after a short paper pass.
