# Cho email draft v2 — his own draft (UNSENT)

> This is **his own draft** (15 Sept 2026), not the subagent-authored version in [`cho-email-draft.md`](cho-email-draft.md). Keep both; this one is the live one being edited. Brief: [`cho-brief.md`](cho-brief.md). Intent: [`../applicant/current-intent.md`](../applicant/current-intent.md).
>
> **Do not send.**

---

## Edit log

**Round 1 (his own fixes, applied before this version):**
1. CARE-AI current-role status confirmed by him.
2. "Confounding by providence" → "Confounding by provenance" (was a typo for the Ding et al. term).

**Round 2 (this version):**
3. Softened the Lang1-propensity-scores sentence. Was stated as a confident claim about what Lang1 would do ("Realistically speaking, it would be..."); now framed as one option he's weighing, so it still reads as technically informed without asserting a designed Lang1 feature that isn't sourced anywhere.
4. Softened the Lang1-commercial-deployment line. He confirmed this isn't a known plan, just his read that it's plausibly on the table given how NYUTron has already been positioned (COMAI, licensing talk). Reframed as his own guess about internal optionality, not a stated fact.

---

## Body (current)

Hi Dr. Cho,

I'll try to keep my first email brief. Finished my master's in data science and am working in a 1-year research engineer role on reducing hospital readmissions using causal AI [CARE-AI]. I'm applying to the '27 batch in the NYU PhD Data Science (Medical Track).

Came across NYUTron and was impressed by the level of integration with an EHR. My primary interest is in trustworthy AI in applied healthcare. Building with interpretable AI models is just not feasible at scale, which leaves us with explainable AI post hoc. Chain-of-thought reasoning has been shown to be unfaithful by Anthropic, but their newer mechanistic interpretability alternatives are not feasible either.

One direction to create trust that I really like is knowledge provenance. Ideally, which input contributed to which output, and even deeper, mapping to the training data. One route worth testing, though it's one option among a few I'm still weighing, is a model like Lang1 surfacing propensity-style scores alongside its predictions. I'll have a better grasp of the limitations of applying causality at the end of my current role.

My belief is that if physicians had a reliable way to directly ask a model why it made a decision, we would uncover many new faults and risks to improve upon. In my experience at both hospitals and healthcare startups, the data team makes assumptions knowingly and unknowingly all the time. The same way you wrote in your blog that something felt wrong constantly optimising numbers for a poor proxy of reality. As we get closer to really integrating AI in our clinical settings, I think building a way forward for the actual clinicians to comprehend and critique the causation behind its decisions is key.

One other topic that interested me was local fine-tuning in NY (Manhattan vs Brooklyn) beating cross-site fine-tuning. Confounding by provenance is the term another group called it. It really calls into the practicalities of clinical support systems. The politics, finances and culture are confined to each hospital. Incentives to reduce stay duration or even keep beds filled exist in reality. I'm not sure what proxy would be used, but these are real factors to address, especially if the Lang1 family is ever positioned for commercial deployment, which I'd guess is at least on the table internally given how NYUTron has already been handled.

If any of these topics are something you are interested in working with in the future, please let me know, and we can meet online. If not, I'd still appreciate any advice or thoughts on what to focus on, as I'm very uncertain about the methods to pursue.

Wasn't able to keep the email short, sorry, but thank you if you read this far!

Moaaz Tameer Islam

---

## Still open (not touched this round; flag if he wants them addressed)

- **Length.** Still noticeably longer than the "concise, get to the point" instruction from earlier in this thread, and longer than the subagent's ~240-word version. He may want that (his own voice, apologises for it in the closing line), so left untouched here.
- **"a 2025 review... fewer than a third"** style claims are absent from this draft (good, no XAI-clinician stat to defend).
- **"health statisticians" line** from the shorter draft isn't in this one; no action needed.
- **Cho's actual NYUTron role** (co-author, not clinical PI, not the person who built the EHR integration) isn't contradicted by "impressed by the level of integration with an EHR," so no fix needed there.
