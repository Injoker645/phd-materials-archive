# Harvard Griffin GSAS - Biomedical Informatics (AIM) drafts

> **Verified length rules (GSAS general):** Statement of Purpose <= **1,000 words**; Personal Statement <= **500 words**. **SOURCED** https://gsas.harvard.edu/apply/applying-degree-programs/statement-purpose-personal-statement-and-writing-sample
> BMI/AIM may still mark Personal Statement Required/optional when the Fall 2026 portal text updates. Re-check. **UNCERTAIN** until then.
> Voice: Register A. No em dashes. British spelling. Contractions. No "I am writing to apply." No prestige flattery. Named gaps. Claim-inventory clean.
> Thesis: portable v4 audit framing (`02-thesis-adaptation.md`). Soften grant as trust/blame person vs system.

---

## A. Statement of Purpose (draft)

**Word count:** ~710 (under 1,000). Room to expand if he wants more method detail; do not pad for its own sake.

---

When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result clinical judgement, we trust it. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result bias and demand it be explained. Overlapping sources of habit, and in either case no clean way to separate medicine from local routine. The difference is that one of those agents is actually auditable. I want to build that audit: a per-prediction report of how much of a clinical model's score rests on site-invariant evidence versus site-specific evidence, tied to a deploy-or-recalibrate decision.

I grew up in a hospital compound where my father worked, and I have been around clinical environments long enough to know that the unwritten layer is not a footnote. It is most of the job. That is part of why I wrote early about historical underrepresentation in medical research being amplified when the same records train models, and why, on my first day of a data science master's at Uppsala, I contacted a bioethics researcher and worked on a grant proposal about trust and blame when a decision comes from a person versus a system. It is also why my thesis, *Cracks in the Feed*, spent as much effort on corpus construction and annotation design under the EU Digital Services Act as on the detectors themselves. Harmful GIF comments on short-form platforms are invisible to text-only moderation by construction. The interesting failure sat in the data, not in the optimiser.

Clinical prediction systems fail in a related shape. Models trained on a hospital's own notes learn generalisable medicine and local documentation or operational habit in one pass. Inside one site the two are hard to tell apart. Cross-site evaluations keep showing that local fine-tuning and site-linked shortcuts matter, and that training-time domain-generalisation tricks often fail to beat simply pooling data. I do not want to add another post-hoc story on top of a black box. I want a measurement layer: for one patient's score, estimate how much of the evidence travels across hospitals and how much does not, check whether the sites differ in outcome prevalence before trusting that split, and attach a validity guarantee that a deployment team can actually use.

I am not claiming prior deep expertise in invariant causal prediction or in running a multi-hospital EHR study end to end. That is the honest gap. What I have is the habit of treating evaluation design and annotation as first-class research, some hospital-adjacent work including cleaning and defining the data dictionary for a CSICU procedures dashboard at KFSH and RC in March 2024 and building an emergency-department demand model at Fyris AI, coursework that put me in rooms with clinicians on interoperability, and enough industry time to know I left a constrained analyst role at Samsung because I needed room to follow a problem properly. My BE in Software Engineering from NUST (Gold Medal) and MSc in Data Science from Uppsala (ML and Statistics) are the quantitative base. GRE 158V/164Q if useful; IELTS 8.5.

The Artificial Intelligence in Medicine track is the right place to do this because the programme is built for computational students who want clinical immersion and multi-hospital reality, not a methods paper that never meets a ward. First-year shadowing and a co-mentorship model matter for the decision side of an audit: a number that does not change whether a model is deployed, recalibrated, or held back is decoration. On the methods side I want to be near multi-institutional EHR work of the kind Tianxi Cai's group publishes, where hospitals are treated as distinct environments rather than as one flattened table. On the evaluation and clinician-AI side, Pranav Rajpurkar's lab is already asking how clinical AI should be certified and used with clinicians, which is where a site-invariance report would have to earn its keep. Isaac Kohane's and Raj Manrai's writing on medical AI and human values is the framing I am already in: asymmetrical trust of person versus system is not a slogan for me, it is the question I started from in Uppsala.

Whether I stay in academia after is open. Whether the work should matter to a medical department in a few years is not.

---

### SoP checklist vs GSAS prompt

| GSAS ask | Where it lands |
|---|---|
| Reasons/motivations | Hook + hospital compound + bioethics contact |
| Experiences that shaped ambitions | Thesis-as-data-construction; dashboard; Fyris; Samsung exit |
| Past work in field / related | Thesis, KFSH dashboard, Fyris, Medium/bias direction |
| Career objectives | Useful to a medical department; academia/industry undecided |
| Why this programme | AIM immersion + co-mentorship; Cai / Rajpurkar / Kohane-Manrai angles |

### Still waiting on him

- Comfort with childhood story in SoP vs Personal Statement only.
- Whether to keep GRE numbers in the SoP (optional test; can live on the form only).
- Exact wording of the Uppsala grant if he wants more than the softened trust/blame line.

---

## B. Personal Statement (draft, <=500 words)

**Prompt (GSAS):** personal experiences that led you to pursue graduate education, and how they will contribute to the academic environment / community in the programme or GSAS. Complement, do not duplicate, the SoP.

---

I grew up in a hospital compound where my father worked. I did not leave that environment with a research agenda. I left with a boring observation that stuck: the quality of a clinical decision is limited by the quality and politics of the information that reaches the people who need it, and a lot of that information never makes it out of local habit.

Years later I wrote a Medium piece on how historical underrepresentation in medical research can be amplified when those same records become training data. It was not a technical paper. It was the first time I treated healthcare AI as a direction rather than a topic. On day one of my master's at Uppsala I emailed a bioethics researcher cold, attended an EU AI Act healthcare conference with that group, and worked on a proposal about how people assign trust and blame differently when a decision comes from a person versus a system. That thread is why I am applying to a clinically immersed AI programme rather than to a pure ML track.

I am Pakistani, trained in Pakistan and Sweden, and used to being the person in the room who has to translate across systems that do not share assumptions. In group projects I tend to push for short, regular stakeholder meetings even when nobody asked for them, because I have watched technically fine work sit unused when the users were not in the design loop. In a cohort that mixes computational students with clinical shadowing, that habit is what I would bring: ask who the audit is for, early, and keep the question visible when the modelling gets interesting enough to distract from it.

I do not need a PhD to collect credentials. I need four years on a problem where the answer has to survive contact with a hospital. AIM's structure is built for that contact. What I can offer the community is the same thing I needed when I started: someone who takes the human and institutional side of medical AI seriously without pretending that seriousness replaces quantitative work.

---

### Personal Statement notes

- Avoids re-explaining the full provenance method (SoP's job).
- No KFSH pilot; no grandmother; no volunteering claim; no vague "lived in Saudi Arabia" residence claim.
- Community contribution = stakeholder-meeting habit + cross-system translation, not diversity-as-ornament.
