# Hook — Columbia DBMI adaptation

> Parent hook: [`../../thesis/hook-question.md`](../../thesis/hook-question.md).  
> Goal: keep the provenance-specific asymmetry; retarget the on-ramp from NYUTron/Cho to Columbia faculty (Joshi / McDermott / Hripcsak / Elhadad).

---

## Keep (primary hook — still the best opener)

> When a doctor absorbs a hospital's unwritten habits over twenty years of practice and calls the result "clinical judgment," we trust it — no one ever asks her to prove which part of that judgment is real medicine and which part is just this particular hospital's history. When a model absorbs the same twenty years of the same hospital's habits from its notes, we call the result "bias" and demand it be explained before we trust it at all. Same information, same contamination, same inability — in either case — to cleanly separate the two. So what are we actually asking the model to do that we have never once asked the doctor to do — and is it a standard of evidence, or just a standard of who is allowed to be unaccountable?

**Why it still works at Columbia:** the department already publishes on fairness audits, domain shift, and multi-database reliability. The hook lands as a *measurement* problem, which matches Joshi/Elhadad audit language and Hripcsak evidence-quality language better than a generic AI-ethics opener.

Voice note: if em dashes survive from the parent draft, **strip them** before paste into the SOP (his corpus uses commas and colons only). Softened Columbia-safe variant below.

---

## Softened variant (recommended for Columbia statement)

> When a doctor absorbs a hospital's unwritten habits over twenty years and calls the result clinical judgment, we rarely ask which part is medicine and which part is that hospital's history. When a model absorbs the same habits from the same notes, we call it bias and demand an explanation before we trust the score. Same contamination, and in both cases we still lack a clean way to separate the two. I want to build that separation as a measurement on the model side, where it's actually testable across sites.

Use this in `04-sop-draft.md`. Save the sharper "who is allowed to be unaccountable" line for an interview if the room can take it.

---

## Columbia-specific pivot (after the hook)

One or two sentences, then the thesis:

- Field evidence that institutional fingerprinting is real (e.g. hospital-detectable imaging shortcuts; published cross-site degradation of clinical FMs) without claiming those papers were Columbia's.  
- Columbia on-ramp: multi-environment evaluation is native here (OHDSI / OMOP / MEDS), so an audit statistic can be designed to travel.  
- Faculty bridge: Joshi (shift / fairness / reliability), McDermott (EHR FMs + multi-site infra), optionally Elhadad (EHR NLP audit) or Hripcsak (network evidence).

---

## Soften / drop for this audience

| Element | Action |
|---|---|
| NYUTron / Lang1 as the *object of study* | Drop as primary; may cite once as published field evidence |
| Cho anti-mechanism sparring | Drop from SOP; irrelevant to opening |
| Hungry-judge anecdote | Keep out of SOP evidence spine (pedagogy only) |
| Secondary omission/underuse hook | Optional second beat in interview; not SOP lead |
| Prestige praise of "oldest BMI department" | Never |

---

## Interview one-liner (if asked why Columbia not only NYU)

> NYU is where some of the clearest published transfer gaps in clinical foundation models showed up. Columbia is where I'd build the measurement so it can run across sites without pretending one health system's two campuses are the whole problem.
