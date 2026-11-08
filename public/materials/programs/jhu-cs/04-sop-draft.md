# JHU CS - Computer Science PhD Statement of Purpose (draft)

> **Length rule:** CS admissions treat the research narrative as central; informal department guidance points to ~**2 pages**. No hard word count on the FAQ. Exact Fall 2027 portal prompt: **UNCERTAIN** until open. Working target: ~800-950 words.  
> **Optional personal statement:** FAQ says a separate personal statement is optional. Keep childhood / identity material either here (if one essay) or move lightly to the optional personal statement if the portal splits them.  
> Voice: Register A. No em dashes. British spelling. Contractions. No "I am writing to apply." No prestige flattery. Named gaps. Claim-inventory clean. No KFSH electrophoresis pilot.  
> Primary programme: **PhD in Computer Science**. Door rationale lives in `00-program.md`.

---

## Draft

**Word count:** ~860.

---

When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result clinical judgement, we trust it. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result bias and demand it be explained. Overlapping sources of habit, and in either case no clean way to separate medicine from local routine. The difference is that one of those agents is actually auditable. I want to build that audit: a per-prediction report of how much of a clinical model's score rests on site-invariant evidence versus site-specific evidence, tied to a deploy-or-recalibrate decision.

I grew up in a hospital compound where my father worked, and I have been around clinical environments long enough to know that the unwritten layer is not a footnote. It is most of the job. That is part of why I wrote early about historical underrepresentation in medical research being amplified when the same records train models, and why, on my first day of a data science master's at Uppsala, I contacted a bioethics researcher and worked on a grant proposal about trust and blame when a decision comes from a person versus a system. It is also why my thesis, *Cracks in the Feed*, spent as much effort on corpus construction and annotation design under the EU Digital Services Act as on the detectors themselves. Harmful GIF comments on short-form platforms are invisible to text-only moderation by construction. The interesting failure sat in the data, not in the optimiser.

Clinical prediction systems fail in a related shape. Models trained on a hospital's own notes learn generalisable medicine and local documentation or operational habit in one pass. Inside one site the two are hard to tell apart. Cross-site evaluations keep showing that local fine-tuning and site-linked shortcuts matter, and that training-time domain-generalisation tricks often fail to beat simply pooling data. I do not want to add another post-hoc story on top of a black box. I want a measurement layer: for one patient's score, estimate how much of the evidence travels across hospitals and how much does not, check whether the sites differ in outcome prevalence before trusting that split, and attach a validity guarantee that a deployment team can actually use.

I am not claiming prior deep expertise in invariant causal prediction or in running a multi-hospital EHR study end to end. That is the honest gap. What I have is the habit of treating evaluation design and annotation as first-class research, some hospital-adjacent work including cleaning and defining the data dictionary for a CSICU procedures dashboard at KFSH and RC in March 2024 and building an emergency-department demand model at Fyris AI, coursework that put me in rooms with clinicians on interoperability, and enough industry time to know I left a constrained analyst role at Samsung because I needed room to follow a problem properly. My BE in Software Engineering from NUST (Gold Medal) and MSc in Data Science from Uppsala (ML and Statistics) are the quantitative base. GRE 158V/164Q if useful; IELTS 8.5.

The Computer Science PhD is the right door because this is a methods problem that happens to live in hospitals, not a hospital problem that happens to use ML. I want to be near work that treats evaluation and monitoring of clinical AI as a research object rather than an afterthought: Michael Oberst's agenda on principled evaluation of AI systems in healthcare is the closest published neighbour to the audit I want to build. Suchi Saria's line on machine learning from messy observational health data, and on getting tools all the way to deployment and safe adoption, is where a site-invariance report would have to survive contact with real hospitals. Ilya Shpitser's work on causal inference and the complications that show up in electronic medical records is the methods depth I expect to need when sites differ in prevalence and missingness, not just in documentation style. Johns Hopkins Medicine and the Malone Center are why a multi-hospital evaluation is plausible here rather than aspirational. I am not asking for private EHR access before admission. I am asking for a department that will treat a falsifiable cross-site measurement as a serious research object.

Whether I stay in academia after is open. Whether the work should matter to a medical department evaluating a local model in a few years is not.

---

## Checklist vs CS SoP guidance

| CS ask (admissions page / FAQ) | Where it lands |
|---|---|
| Motivation and research interests (why, not CV dump) | Hook + audit framing + prevalence check + decision wrap |
| Narrative around what you did and why | Thesis-as-data-construction; KFSH dashboard; Fyris; bioethics contact; Samsung exit |
| Specific reasons for this programme (not prestige) | Oberst evaluation/monitoring; Saria deployment; Shpitser causal/EHR; Malone / JH Medicine bridge |
| Optional personal statement | Childhood hospital-compound beat can move here if portal splits essays |

## Still waiting on him

- Comfort with childhood story in the research SoP vs optional personal statement.
- Whether to keep GRE numbers in the SoP or only on the form.
- Exact Uppsala grant wording if he wants more than the softened trust/blame line.
- Whether to apply to HSI as a second programme (separate SoP; different faculty naming).

## If a second HSI SoP is needed

Keep the same thesis. Shift "why programme" toward BIDS / Kharrazi / Overby Taylor and name CS faculty only as cross-campus collaborators. Do not paste this draft and swap the department name. Prefer skipping HSI unless capacity and fit justify the second fee.
