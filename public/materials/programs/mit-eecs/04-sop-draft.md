# MIT EECS — essay drafts (two essays)

> MIT wants two essays, not one SOP. Do not paste the NYU draft. Voice: Register A, no em dashes, British spelling.
> Status: DRAFT. Length guidance from EECS Communication Lab not re-fetched this pass — keep each essay tight (~500–700 words) until verified.

---

## Essay 1 — Research activities and goals

I want to build a measurement that current clinical foundation models do not have: for one patient's score, how much rests on evidence that holds across hospital sites, and how much rests on site-specific signal.

The motivation is concrete. Models trained on a hospital's notes absorb medicine and institutional habit in the same pass. Inside one site those two are indistinguishable. Cross-site evaluations keep showing the gap — from pneumonia CNNs that identify hospital identity at over 99.9% accuracy, to commercial risk scores that optimize cost and miss need — and the usual response is either to train the gap away in aggregate or to ask the model for an explanation. Aggregate invariant training has a weak clinical track record against simply pooling data. Current explainability methods, as Ghassemi and coauthors have argued, cannot reliably justify individual clinical decisions and can even worsen performance for minorities when used as a trust substitute. So I want the third option: an audit on a frozen model that decomposes a prediction into site-invariant and site-specific evidence, checks whether sites differ mainly in outcome prevalence before trusting the result, and ties the output to a deploy-or-recalibrate decision rather than a decorative percentage.

I am not claiming prior deep expertise in invariant causal prediction. What I bring is the habit of treating evaluation design as the research problem. My Uppsala thesis, *Cracks in the Feed*, built a multi-platform corpus and annotation framework for harmful content under the EU Digital Services Act, including a multimodal path for GIF comments that text-only systems miss by construction. Hospital-adjacent work on a procedures dashboard and an emergency-department demand model kept the clinical side visible. On my first day of the master's I contacted a bioethics researcher to work on how trust and blame shift when a decision comes from a person versus a system.

At MIT I want to be pushed by people who will not let a measurement pretend to be an explanation. Marzyeh Ghassemi's line of work is the sharpest version of that demand I know. The IMES bridge is what makes a multi-site clinical evaluation realistic rather than aspirational. Whether I stay in academia after is open. Whether the work should matter to a hospital evaluating a local model is not.

---

## Essay 2 — Academic and intellectual journey

I grew up in a hospital compound where my father worked. I did not have the vocabulary then for documentation habits or proxy objectives. I just saw that a lot of important information lived in people's heads and in local routines rather than in anything another site could reuse. That observation kept showing up later: in a constrained industry analyst role I left because I needed room to follow a problem, in a Medium piece on how historical underrepresentation in medical research gets amplified in training data, and in electives and a hospital interoperability project during my Uppsala master's.

The through-line is not "I have always loved AI." It is that every time I got close to a real clinical or operational system, the hard part was figuring out what the recorded data was actually a record *of*. My thesis pushed that instinct into a regulatory frame under the DSA. The next version of the same instinct is provenance for clinical foundation models: not which tokens lit up, but whether the knowledge behind a score travels.

I am applying to EECS because the methods I need live in AI and decision-making, and the evaluation I need lives in contact with medicine. I do not need MIT to be impressed by me. I need a place where a measurement that refuses to dress up as an explanation is treated as a serious research object.
