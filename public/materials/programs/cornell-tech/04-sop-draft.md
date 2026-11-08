# Cornell CS PhD - Statement of Purpose + Personal Statement drafts

> **Verified asks (CS apply page):** SoP = research plans/interests + faculty of interest; Personal Statement ≤ **1,000 words** (background → graduate study + contribution to inclusion/belonging). **SOURCED** https://www.cs.cornell.edu/phd-computer-science/apply
> SoP length: no published word limit on CS page this pass → draft ~750–900 words. **UNCERTAIN** until portal confirms.
> Voice: Register A. No em dashes. British spelling. Contractions. No "I am writing to apply." No prestige flattery. Named gaps. Claim-inventory clean. No KFSH electrophoresis pilot.
> Thesis: portable v4 audit framing (`02-thesis-adaptation.md`). Soften grant as trust/blame person vs system.

---

## A. Statement of Purpose (draft)

**Word count:** ~820. Trim if the portal adds a hard cap.

---

When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result clinical judgement, we trust it. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result bias and demand it be explained. Overlapping sources of habit, and in either case no clean way to separate medicine from local routine. The difference is that one of those agents is actually auditable. I want to build that audit: a per-prediction report of how much of a clinical model's score rests on site-invariant evidence versus site-specific evidence, tied to a deploy-or-recalibrate decision.

I grew up in a hospital compound where my father worked, and I have been around clinical environments long enough to know that the unwritten layer is not a footnote. It is most of the job. That is part of why I wrote early about historical underrepresentation in medical research being amplified when the same records train models, and why, on my first day of a data science master's at Uppsala, I contacted a bioethics researcher and worked on a grant proposal about trust and blame when a decision comes from a person versus a system. It is also why my thesis, *Cracks in the Feed*, spent as much effort on corpus construction and annotation design under the EU Digital Services Act as on the detectors themselves. Harmful GIF comments on short-form platforms are invisible to text-only moderation by construction. The interesting failure sat in the data, not in the optimiser.

Clinical prediction systems fail in a related shape. Models trained on a hospital's own notes learn generalisable medicine and local documentation or operational habit in one pass. Inside one site the two are hard to tell apart. Cross-site evaluations keep showing that local fine-tuning and site-linked shortcuts matter, and that training-time domain-generalisation tricks often fail to beat simply pooling data. I do not want to add another post-hoc story on top of a black box. I want a measurement layer: for one patient's score, estimate how much of the evidence travels across hospitals and how much does not, check whether the sites differ in outcome prevalence before trusting that split, and attach a validity guarantee that a deployment team can actually use.

I am not claiming prior deep expertise in invariant causal prediction or in running a multi-hospital EHR study end to end. That is the honest gap. What I have is the habit of treating evaluation design and annotation as first-class research, some hospital-adjacent work including cleaning and defining the data dictionary for a CSICU procedures dashboard at KFSH and RC in March 2024 and building an emergency-department demand model at Fyris AI, coursework that put me in rooms with clinicians on interoperability, and enough industry time to know I left a constrained analyst role at Samsung because I needed room to follow a problem properly. My BE in Software Engineering from NUST (Gold Medal) and MSc in Data Science from Uppsala (ML and Statistics) are the quantitative base. GRE 158V/164Q if useful; IELTS 8.5.

I am applying to Cornell's CS PhD because the methods I need live in computer science, and the clinical evaluation I need is reachable through Cornell Tech and Weill collaborators once an advisor match lands. I expect the default first year in Ithaca for competency requirements and faculty matching, then relocation to New York City if I work with a Cornell Tech advisor. On the digital-health and deployment side I want to be near Deborah Estrin's line of work: treating clinical systems as systems that have to work for real people, not as offline leaderboards. On the EHR and clinical ML side, Fei Wang's health data science work is the closest methods neighbour I can see for treating hospitals as distinct environments. On the evaluation side, Allison Koenecke's and Angelina Wang's responsible-AI research is the demand I want applied to clinical scores: measure where performance and evidence break, rather than decorating a model with an explanation that cannot justify an individual decision.

Whether I stay in academia after is open. Whether the work should matter to a hospital evaluating a local model is not.

---

### SoP checklist vs CS apply prompt

| Ask | Where it lands |
|---|---|
| Plans and interests in CS | Provenance audit as measurement in ML / AI |
| Areas excited about | Clinical ML evaluation; multi-site generalisation; decision-shaped uncertainty |
| Specific faculty | Estrin; Fei Wang; Koenecke / Angelina Wang |
| Why strong applicant | Thesis-as-data-construction; dashboard; Fyris; named gap |

### Still waiting on him

- Comfort with childhood story in SoP vs Personal Statement only.
- Whether to keep GRE numbers in the SoP (optional test; can live on the form only).
- Exact Uppsala grant wording if he wants more than trust/blame.
- Prefer Set A faculty names vs swap Koenecke for Kuleshov (methods-forward).

---

## B. Personal Statement (draft, ≤1,000 words)

**Prompt (CS apply):** describe within 1,000 words how background and experiences influenced the decision and ability to pursue a graduate degree; insights into potential to contribute to Cornell's community of inclusion, belonging, and respect.

---

I grew up in a hospital compound where my father worked. I did not leave that environment with a research agenda. I left with a boring observation that stuck: the quality of a clinical decision is limited by the quality and politics of the information that reaches the people who need it, and a lot of that information never makes it out of local habit.

Years later I wrote a Medium piece on how historical underrepresentation in medical research can be amplified when those same records become training data. It was not a technical paper. It was the first time I treated healthcare AI as a direction rather than a topic. On day one of my master's at Uppsala I emailed a bioethics researcher cold, attended an EU AI Act healthcare conference with that group, and worked on a proposal about how people assign trust and blame differently when a decision comes from a person versus a system. That thread is why I am applying to a CS PhD that can sit next to clinical collaborators in New York, not to a pure theory track that never has to answer to a ward.

I am Pakistani, trained in Pakistan and Sweden, and used to being the person in the room who has to translate across systems that do not share assumptions. In group projects I tend to push for short, regular stakeholder meetings even when nobody asked for them, because I have watched technically fine work sit unused when the users were not in the design loop. In a cohort that splits time between Ithaca coursework and, for Tech-path students, NYC research years, that habit is what I would bring: ask who the audit is for, early, and keep the question visible when the modelling gets interesting enough to distract from it.

I do not need a PhD to collect credentials. I need several years on a problem where the answer has to survive contact with a hospital. Cornell's CS programme, with a path to Cornell Tech advisors and Weill-adjacent clinical research, is built for that contact if the advising match works. What I can offer the community is the same thing I needed when I started: someone who takes the human and institutional side of medical AI seriously without pretending that seriousness replaces quantitative work.

---

### Personal Statement notes

- Avoids re-explaining the full provenance method (SoP's job).
- No KFSH pilot; no grandmother; no volunteering claim.
- Community contribution = stakeholder-meeting habit + cross-system translation, not diversity-as-ornament.
- Mentions Ithaca/NYC split honestly without complaining about Ithaca.
