# Draft B — narrative-forward

> Variant goal: hospital compound → analyst → provenance. Research in the middle. Target ≤650 words.
> Voice check: Register A, no em dashes, British spelling.
> Status: DRAFT — not final.

---

I grew up in a hospital compound where my father worked. What I noticed, long before I had the vocabulary for it, was how much of clinical life runs on habits that never make it into a protocol: how a discharge summary gets written, which phrases travel between attendings, what "fine to go home" quietly assumes about the patient's support at home. Years later, working as a data analyst and then on an emergency-department demand model, I kept meeting the same thing from the other side. The clean metric a manager asked for was almost never the thing the system was actually organised around.

That gap is what pulled me toward healthcare AI, and also what made me suspicious of it. After my bachelor's I wrote about how historical underrepresentation in medical research gets amplified when those records become training data. At Uppsala I chose electives in health innovation and hospital data integration, spent a cohort project at Akademiska Sjukhuset on the human side of an interoperability effort, and on my first day of classes contacted a bioethics researcher to work on how people judge mistakes differently when they come from a clinician versus from a system. I left a good-on-paper analyst role at Samsung because it turned out to be constrained down to not installing Python on a work laptop. I needed room to follow a problem properly.

The problem I want to follow is this. When a hospital trains a foundation model on its own notes, the model absorbs medicine and institutional habit in the same pass. Inside one site those two are statistically indistinguishable. They only separate when you look across sites. NYUTron's Manhattan-versus-Brooklyn evaluation already showed that a model fine-tuned at one hospital underperforms at the other relative to local fine-tuning, and the authors left the causes as future work. I do not think the answer is another post-hoc explanation method. Current explainability often cannot faithfully justify an individual clinical prediction, and asking for a plausible story is not the same as checking whether the evidence travels. I want to build the measurement instead: for one patient's score, how much rests on site-invariant evidence and how much on site-specific evidence, validated on multi-site data under a pre-registered check for prevalence shift, and tied to a real deployment decision.

My master's thesis, *Cracks in the Feed*, is the closest thing I have already done to that instinct. Under the EU Digital Services Act I built a corpus and annotation framework for harmful comments on short-form video platforms, including a multimodal path for GIF comments that text-only systems miss by construction. The technical work mattered. What mattered more was treating data construction, label ontology, and evaluation design as the research, not as the preamble.

NYU GSAS is where this project is most naturally done. The models I want to study, NYUTron and Lang1, were built and deployed at NYU Langone. Eric Oermann, Kyunghyun Cho, and Rajesh Ranganath are already approaching the surrounding questions from applied, philosophical, and formal directions. The Medical School Track is the reason I believe the clinical half of the collaboration is real.

I am undecided about staying in academia after. I am not undecided about the standard I want the work to meet: in a few years, a department should know something they did not know before about when a local model is tracking medicine, and when it is tracking the hospital.

---

**Word count:** ~610
**Four asks:** covered. Stronger on "why this person"; slightly less mechanism detail than Draft A.
**Open risks:** childhood story is USABLE; volunteering omitted on purpose. Akademiska framing uses cohort language.
