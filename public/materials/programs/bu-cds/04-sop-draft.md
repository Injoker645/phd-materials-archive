# BU CDS — essay drafts (Research Statement + Personal Statement)

> **Verified length rules:** Personal Statement ≈ **400 words** (**SOURCED** https://www.bu.edu/cds-faculty/programs-admissions/graduate-admissions-requirements/). Research Statement required; **no public word limit** this pass (**UNCERTAIN**). Draft RS ~900–1000 words; trim when portal shows a cap.
> Voice: Register A. No em dashes. British spelling. Contractions. No "I am writing to apply." No prestige flattery. Named gaps. Claim-inventory clean (no KFSH electrophoresis pilot).
> Thesis: portable v4 audit framing (`02-thesis-adaptation.md`). Soften grant as trust/blame person vs system.

---

## A. Research Statement (draft)

**Word count:** ~950. Re-check portal length before submit.

---

When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result clinical judgement, we trust it. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result bias and demand it be explained. Overlapping sources of habit, and in either case no clean way to separate medicine from local routine. The difference is that one of those agents is actually auditable. I want to build that audit: a per-prediction report of how much of a clinical model's score rests on site-invariant evidence versus site-specific evidence, tied to a deploy-or-recalibrate decision.

The gap is narrower than "make clinical AI fair" and more specific than "explain the black box." For a score-output model trained on a hospital's notes, we still cannot say, for one patient's prediction, how much of the evidence would travel to another site. A lot of existing work tries to train the gap away in aggregate. Domain-generalisation methods keep getting tested on multi-site clinical data and often fail to beat simply pooling the data. Other work splits disease signal from process signal at training time, or attributes features for one patient without a cross-site test. What's missing is a measurement layer on a frozen model: decompose the evidence into site-invariant and site-specific parts, pre-register a check for whether environments differ mainly in outcome prevalence before trusting that split, and attach a validity guarantee a deployment team can actually use.

I am not claiming prior deep expertise in invariant causal prediction or in running a multi-hospital EHR study end to end. That is the honest gap. What I have is the habit of treating evaluation design and annotation as first-class research. My Uppsala thesis, *Cracks in the Feed*, built a multi-platform corpus and annotation framework for harmful content under the EU Digital Services Act, including a multimodal path for GIF comments that text-only systems miss by construction. Different domain, but the habits transfer: constructing the dataset is part of the research problem, signals disagree across modalities, and "what the model used" is not the same as "what you hoped it used." On the health side I've done the unglamorous work that actually shows up in clinics. At KFSH & RC in March 2024 I helped clean and define the data dictionary for a CSICU / procedures dashboard. At Fyris AI I built an emergency-department demand forecasting model. At Uppsala I took health-innovation coursework and worked on a hospital interoperability project with clinicians in the room. BE Software Engineering from NUST (Gold Medal). MSc Data Science from Uppsala (ML and Statistics). GRE 158V/164Q if useful; IELTS 8.5.

CDS is the right structure for this question because the first two years are built for rotation and methods depth before locking an advisor, and because the faculty map already covers the three sides I need. Vijaya Kolachalama's work on biomedical machine learning and domain generalisation is the empirical pressure an audit has to answer: if average transfer can be improved and still leave individual scores opaque, the measurement is not optional. Elaine Nsoesie's health-equity and AI-for-health work is where "site-specific" stops being a neutral statistical label and starts being a question about whose documentation habits and whose access patterns got into the score. On the methods side I want to be near Aldo Pacchiano's fairness and safe-learning line, or Yannis Paschalidis's robust computational medicine work through the Hariri Institute, depending on how rotations land. I am not pretending I already have Boston Medical Center credentials. I am applying because CDS makes finding a clinical-environment collaborator part of the programme rather than a side quest after a pure methods admit.

What I want from the PhD is simple to say and hard to do: a falsifiable per-prediction provenance signal for clinical models, validated across environments that actually differ, useful enough that a deployment meeting could act on it. Whether I stay in academia after is open. Whether the work should matter to a hospital evaluating a local model is not.

---

### Research Statement checklist

| Ask | Where it lands |
|---|---|
| Research question | Hook + measurement gap |
| Methods shape | Frozen-model audit; prevalence check; deploy-or-recalibrate |
| Prior work | Thesis; KFSH dashboard; Fyris; coursework |
| Honest gap | No ICP / multi-hospital EHR study yet |
| Why CDS | Rotations; Kolachalama / Nsoesie / Pacchiano or Paschalidis |
| Career | Useful to hospitals; academia open |

---

## B. Personal Statement (draft, ≈400 words)

**Prompt (CDS):** qualifications and objectives of your educational programme; research activities, publications, independent studies, memberships; how that led to interest in this PhD; account for time between formal studies.

**Word count:** ~390.

---

I grew up in a hospital compound where my father worked. I did not leave with a research agenda. I left with a boring observation that stuck: a lot of important clinical information lives in local routine rather than in anything another site can reuse.

That observation kept showing up. I wrote a Medium piece on how historical underrepresentation in medical research gets amplified when the same records train models. On day one of my data science master's at Uppsala I contacted a bioethics researcher; we attended an EU AI Act healthcare session and worked on a grant proposal about trust and blame when a decision comes from a person versus a system. My thesis, *Cracks in the Feed*, was multimodal harmful-content detection under the EU Digital Services Act. Corpus design and annotation were half the research. On the health side I helped clean the data dictionary for a CSICU procedures dashboard at KFSH & RC (March 2024) and built an ER demand model at Fyris AI. Between degrees I worked as a constrained industry analyst at Samsung and left because I needed room to follow a problem properly. That gap is part of the timeline, not a hole I am hiding.

Qualifications: BE Software Engineering, NUST (Gold Medal); MSc Data Science, Uppsala (ML and Statistics). IELTS 8.5. GRE 158V/164Q if the portfolio wants numbers.

Objective: a PhD where I can build a per-prediction audit of clinical models that separates site-invariant evidence from site-specific signal, under real multi-environment pressure. CDS fits because the sociotechnical coursework, ethics training, and two-year rotation window match how this problem has to be supervised: methods plus a clinical collaborator, not methods alone. I am Pakistani, trained in Pakistan and Sweden, and used to translating across systems that do not share assumptions. That is what I would bring to a small CDS cohort: keep asking who the audit is for when the modelling gets interesting enough to distract from it.

---

### Still waiting on him

- Comfort with childhood story in Personal Statement vs Research Statement (or both).
- Whether to keep GRE numbers in either essay (optional test; can live on the form only).
- Exact wording of the Uppsala grant if he wants more than the softened trust/blame line.
- Portal Research Statement length when Fall 2027 application opens.
