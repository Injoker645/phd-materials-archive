# Cho brief (for the 2026-09-15 email)

Short, tagged. Not a school deep-dive. Intent source of truth: [`../applicant/current-intent.md`](../applicant/current-intent.md).

Spelling: **Kyunghyun Cho** (not "Kyunghon").

---

## Who he is, relative to NYUTron / Langone / CDS / Courant

**SOURCED.** Cho is the Glen de Vries Professor of Health Statistics, professor of computer science at Courant and of data science at CDS, and co-director (with Yann LeCun) of NYU's Global AI Frontier Lab. He co-founded Prescient Design (2021), stayed at Genentech/Roche after acquisition, and returned to NYU full-time after 16 January 2026.
Sources: [kyunghyuncho.me](https://kyunghyuncho.me/); [Leaving Prescient Design/Genentech/Roche](https://kyunghyuncho.me/leaving-prescient-design-genentech-roche/) (15 Jan 2026).

**NYUTron Nature 2023: he is a co-author, not the clinical PI.** Jiang et al., "Health system-scale language models are all-purpose prediction engines," *Nature* 619, 357–362 (2023). Corresponding author: Eric K. Oermann (NYU Langone). Cho's listed affiliations on the paper: CDS, Courant, CIFAR, and Prescient Design / Genentech. Not Langone clinical faculty.
Paper contributions (verbatim roles, not invented): K.C. helped debug/test the model and the pretraining/fine-tuning software; provided guidance and feedback throughout; co-wrote the initial draft with Jiang and Oermann; helped format the final submission.
Source: [Nature author information / contributions](https://www.nature.com/articles/s41586-023-06160-y).

**Adjacent, not "Cho's model."** OLAB / Oermann is the health-system lab. Cho is the CDS/Courant senior ML collaborator and a documented co-advisor with Oermann on the medical-track NYUTron/Lang1 line (e.g. Lavender Jiang). He is also a co-author on Lang1 (2025 preprint).
Source: workspace deep-dive 01 plus Jiang FAQ; Lang1 author list in that deep-dive.

**What he actually works on (for tone, not for lecturing).** Seq2seq / attention (earlier career); latent-variable and end-to-end statistical modelling; a public argument that drug discovery is stuck in a mechanism-first "Cold War MT" era and should be more end-to-end statistics; causal-inference teaching notes; recent EHR next-visit foundation-model work with Razavian. The live tension for Moaaz: Cho is anti-mechanism-first, but also anti-naive proxy-optimisation. Provenance-as-conversation-infrastructure can sit on the second of those without demanding a redesigned mechanistic NYUTron.

---

## The blog to appeal to (found)

**SOURCED.** [The Irrational Decision by Recht [2026]](https://kyunghyuncho.me/the-irrational-decision-by-recht-2026/), 28 March 2026.

This is the post. He says his postgraduate training and career were almost entirely about optimising an average loss, and that this way of thinking quietly assumes a correctly specified, measurable objective and low enough uncertainty for a crisp optimum. Both are usually false in the real world. He ties it to becoming a "health statistician," to personal medical uncertainty, and to an allergy to techno-solutionism. Closing line, quoted from Recht: "Machines can make decisions. Only people can choose."

Short lines usable as orientation (do not dump them into the email):

> "think of an objective function, that is measurable, and figure out a systematic way to optimize this objective function."

> "we often fool ourselves by creating an incorrect proxy and declaring it to be the perfect objective."

> "we often fool ourselves by ignoring an enormous amount of uncertainty arising from the unimaginable complexity of the world surrounding us."

URL: https://kyunghyuncho.me/the-irrational-decision-by-recht-2026/

**How the email should use this.** Nod that clinical AI is still pointing at the optimiser / the proxy, then move to hospitals and NYUTron. Do not explain his own blog back to him. Do not fight his end-to-end instinct with a methods stack.

Related but secondary: the Genentech-leaving post is about returning to students and higher education, not about proxies. Do not make that the hook.

---

## NYUTron locality / transfer / commercialisation

### Transfer (already verified in-corpus)

**SOURCED.** Manhattan (Tisch) vs Brooklyn: local fine-tuning beats cross-site fine-tuning; pretraining on all sites plus local fine-tuning is the authors' recommended setup; causes left as future work. Do not invent %-point drops. Do not cite Lang1 as the same drop (Lang1's NYU→MIMIC transfer is reasonably successful after fine-tuning).
Source: [`../research/verification/nyutron-lang1-site-transfer.md`](../research/verification/nyutron-lang1-site-transfer.md); Jiang et al. *Nature* 2023 Fig. 3c,d.

Oermann, on NVIDIA's blog (7 June 2023), said on-site fine-tuning with a specific hospital's data boosted accuracy, and that hospitals that cannot pretrain from scratch "can adopt a pretrained model like NYUTron and then fine-tune it with a small sample of local data." **SOURCED** as *his* framing of portability, not as proof of successful external deployments.
https://blogs.nvidia.com/blog/nyu-large-language-model-patient-readmission-nature/

**SOURCED.** Ding, Sheng, Yetişgen, Pakhomov & Cohen (AMIA 2023): "confounding by provenance" in multi-institutional clinical notes. PMCID [PMC10785933](https://pmc.ncbi.nlm.nih.gov/articles/PMC10785933/). Hospital/source-level. Does not settle individual-clinician documentation style.

### Commercialisation / other hospitals using it

Do not write "NYUTron is a commercial product" or "other hospitals have deployed it."

| Claim | Tag | What is actually public |
|---|---|---|
| Code released so others can train similar models | **SOURCED** | [github.com/nyuolab/NYUTron](https://github.com/nyuolab/NYUTron): personal/academic use with credit; "contact authors for commercial use." |
| NYU Langone considering licensing (June 2023) | **SOURCED as talk, not as a closed deal** | Healthcare IT News / HLTH recap of an NVIDIA briefing: Oermann said NYU Langone was looking at licensing for organisations that cannot build from scratch. No public licence announcement found. |
| Adopt pretrained NYUTron + local fine-tune | **SOURCED as recommendation** | NVIDIA blog quote above; Nature discussion recommends locally fine-tuning an externally pretrained LM when compute is limited. Not a sales record. |
| COMAI consortium | **SOURCED as an offer; UNCERTAIN as uptake** | NYU Langone TOV page: nonprofit hospitals/AMCs, **$100,000 per year for a three-year term**, "distributes" NYUTron, starter set of five task models. For-profits told to email. No public member list found. Treat as a technology-transfer vehicle, not proof of multi-hospital production use. https://tov.med.nyu.edu/for-industry/consortium-for-operational-medical-ai-comai/ |
| Commercial NYUTron product in the wild | **UNCERTAIN / do not invent** | Marketing language on the COMAI page (cost vs GPT, "starter set") is not the same as customers. Keep smoke tagged as smoke. |

Lang1's own discussion frames in-house models as "institutional assets" rather than rented APIs. That is a research argument for local fine-tuning, not commercialisation evidence.

---

## XAI clinician-involvement statistic (for the intent, optional in the email)

**SOURCED at a narrower scope than the raw gist.** Qaiser & Lee, "Explainable AI in Clinical Decision Support Systems…," *Healthcare* 13(17):2154 (2025), PMCID [PMC12427955](https://pmc.ncbi.nlm.nih.gov/articles/PMC12427955/). 62 studies, 2018–2025. Table 9: clinician involvement in design/evaluation = 18/62 (**29%**). Formal trust scoring 22.5%.

Safe sentence: a 2025 review of XAI in clinical decision support found that fewer than a third of papers involved a clinician in development or evaluation.
Unsafe sentence: "less than a third of all clinical XAI."

---

## One-sentence relationship (for handoff)

Cho is a co-author and CDS/Courant senior collaborator on NYUTron (software, guidance, draft), not the Langone clinical PI; Oermann is.
