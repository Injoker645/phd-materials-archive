# Draft A — research-forward

> Variant goal: lead with the research gap; compress biography. Target ≤650 words.
> Voice check: Register A, no em dashes, British spelling, contractions, named gaps.
> Claims check: USABLE only. Thesis: v4.
> Status: DRAFT — not final. Softened hook (no "who is allowed to be unaccountable").

---

When a doctor absorbs a hospital's unwritten habits over twenty years and calls the result clinical judgement, we mostly leave it alone. When a model absorbs the same habits from the same notes, we call the result bias and demand an explanation before we trust it. Same contamination, and in both cases nobody can cleanly separate real medicine from local habit. The difference is that the model is, in principle, auditable. I want to spend a PhD building that audit.

The gap is concrete. Clinical foundation models trained on a hospital's own notes learn two things at once: generalisable medical signal, and that institution's documentation and operational habits. Inside one hospital those two look identical. They only come apart when you watch what happens at another site. NYUTron's own Manhattan-versus-Brooklyn evaluation already showed that local fine-tuning outperforms cross-site fine-tuning, and left the causes as future work. Existing tools either try to train the gap away in aggregate, which clinical multi-site benchmarks show usually fails to beat simply pooling the data, or ask the model for an explanation that may not reflect what it actually computed. What is missing is a per-prediction measurement: of this specific score, how much rests on evidence that travels across sites, and how much rests on evidence that does not.

That is the project. Take a frozen clinical foundation model, learn an explicit split of its representation into site-invariant and site-specific subspaces using a multi-environment penalty, then attribute an individual prediction onto that split. Validate against NYU Langone's own multi-site data, with a pre-registered check for prevalence differences between sites, because invariant-learning methods are known to degrade when hospitals differ mainly in how common the outcome is rather than in which shortcuts are available. Tie the output to a deployment decision, not a decorative percentage: whether a conformal validity guarantee still holds at this site, and whether the right response is to deploy, to recalibrate locally, or to hold.

I am not claiming deep prior expertise in invariant causal prediction. What I bring is the habit of treating data construction and evaluation design as the research problem, not as preprocessing. My Uppsala master's thesis, *Cracks in the Feed*, built a multi-platform corpus and annotation framework for harmful content under the EU Digital Services Act, including a multimodal pipeline for GIF comments that text-only moderators structurally cannot see. Before that I left a constrained industry analyst role because I needed room to follow a problem properly, wrote about how historical underrepresentation in medical research gets amplified when it enters training data, and on my first day of the master's contacted a bioethics researcher at Uppsala to work on how trust and blame shift when a decision comes from a person versus a system. Hospital-adjacent work at KFSH & RC on a procedures dashboard, and an emergency-department demand model at Fyris AI, kept the clinical side of the question in view.

I want to do this at NYU GSAS because the models I want to study were built and deployed here. Eric Oermann's lab produced NYUTron and Lang1 and has been publishing on site-linked failure modes since the 2018 chest X-ray work. Kyunghyun Cho and Rajesh Ranganath are, from different angles, already circling the same worry about what happens when a well-fit proxy stops tracking the thing you actually care about. The Medical School Track is the structure that makes the collaboration with clinicians and the access to multi-site EHR data realistic rather than aspirational.

Whether I stay in academia afterwards is something I am genuinely undecided on. What I am decided on is the condition: in a few years, a medical department should know something concrete about when to trust a local model, and when not to, because of the measurement.

---

**Word count:** ~620
**Four asks:** past/present work yes; educational objectives yes; career goals yes (honestly undecided); why field + why NYU yes.
**Open risks:** grant/proposal framing is softened pending PICK-ONE; no algorithm-aversion statistics used; Nature site-transfer claim uses verified framing.
