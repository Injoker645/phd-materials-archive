# Statement of Academic Purpose — draft final (consolidation)

> Consolidated from Draft C with persona-critique edits. Still a draft until he reviews.
> Voice: Register A. No em dashes. British spelling. Contractions.
> Claims: audit-clean per `claims-audit.md`. Thesis: v4.
> Target: **two double-spaced pages** (no separate word count from NYU). Soft internal estimate only.

---

When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result clinical judgement, we trust it. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result bias and demand it be explained. Overlapping sources of habit, and in either case no clean way to separate medicine from local routine. The difference is that one of those agents is actually auditable. I want to build that audit: a site-invariance report on individual predictions, tied to a deploy-or-recalibrate decision.

I grew up in a hospital compound where my father worked, and I have been around clinical environments long enough to know that the unwritten layer is not a footnote. It is most of the job. That is part of why, on my first day of a data science master's at Uppsala, I contacted a bioethics researcher and ended up working on questions about trust and blame when a decision comes from a person versus a system. It is also why my thesis, *Cracks in the Feed*, spent as much effort on corpus construction and annotation design under the EU Digital Services Act as on the models themselves. Harmful GIF comments on short-form platforms are invisible to text-only moderation by construction. The interesting failure was in the data, not in the optimiser.

Clinical foundation models have a failure of the same shape. Trained on a hospital's own notes, they learn generalisable medicine and local habit in one pass. Inside one site the two are indistinguishable. NYUTron's Manhattan-versus-Brooklyn evaluation already found that local fine-tuning beats cross-site fine-tuning, and left the causes as future work. I do not want to add another explanation method on top. I want a per-prediction measurement: how much of this score rests on evidence that holds across sites, and how much rests on evidence that does not. Practically, that means probing a frozen model for an invariant versus site-specific representation split, attributing an individual prediction onto that split, checking prevalence differences between sites before trusting the result, and reporting whether a conformal validity guarantee still holds at the deployment site.

I am not claiming prior deep expertise in invariant causal prediction. What I have is the habit of treating evaluation design as first-class research, some hospital-adjacent work including a procedures dashboard at KFSH & RC and an emergency-department demand model at Fyris AI, and enough industry time to know I left a constrained analyst role because I needed room to follow a problem properly.

I want to do this at the NYU Graduate School of Arts and Science because the object of study is here. NYUTron and Lang1 were built and deployed at NYU Langone. Eric Oermann's group has been publishing on site-linked failure modes since the 2018 chest X-ray work. Kyunghyun Cho and Rajesh Ranganath approach the surrounding question from philosophical and formal directions I want to be pushed by. The Medical School Track is what makes clinical collaboration and multi-site EHR access a plan rather than a hope.

Whether I stay in academia after is open. Whether the work should matter to a medical department in a few years is not.

---

**Word count:** 529 (plain-text export) — comfortably under NYU's two-double-spaced-page limit.
**Edits from persona critique applied:** "same contamination" → "overlapping sources of habit"; concrete output noun in opening ("site-invariance report… deploy-or-recalibrate"); conformal validity named.
**Still waiting on him:** comfort with childhood story in SOP vs Personal History only; PICK-ONE grant framing if he wants it named more precisely.
**2026-10-27 — cross-checked against `nyu-program-and-lab-intel.md` for the NYU PhD Application Support Program feedback submission:** Medical School Track sentence holds — dual CDS + School of Medicine mentors from the start, SoM rotations offered, matches "clinical collaboration and multi-site EHR access... a plan rather than a hope." Cho/Ranganath still at NYU and still accurate secondaries. Oermann still PI of OLAB, warm reply on file. Nothing in the lab-intel file contradicts this draft. Cross-checked against the newly pasted `Cover Letters/Inidivual Program Application Site Instructions/NYU- Data Science.txt` — identical to `requirements.md`, no new facts.
**Export for submission:** plain-text versions ready at [`SUBMISSION-sop.txt`](SUBMISSION-sop.txt) (529 words) and [`SUBMISSION-personal-history.txt`](SUBMISSION-personal-history.txt) (479 words, optional).
**Still open (his call, not blocking):** read it aloud once for the voice test before pasting into the feedback-program form; decide whether to submit the Personal History alongside the SoP (the feedback program's own description only mentions "statement of purpose").
