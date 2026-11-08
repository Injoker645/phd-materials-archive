# Schools — master plan (replicable NYU methodology)

> **Read this if:** NYU is in good shape and you are opening a second (or fifth) application front.
> **Purpose:** make the NYU workflow a checklist, not a memory. Every new school folder under `schools/<name>/` should be buildable by a fresh-context agent given only this file plus [`01-screening-criteria.md`](01-screening-criteria.md).

---

## What "done for NYU" looked like, in order

This is the sequence that actually happened, cleaned of dead ends. Replicate it; do not invent a parallel process.

1. **Orient on the program page.** Deadline, SOP length and required prompts, GRE/English policy, funding guarantee, track structure (e.g. Medical School Track), whether naming faculty is required/forbidden.
2. **Identify 2–4 faculty** whose recent work intersects the thesis. Read their 2–3 most relevant papers, not their whole CV.
3. **Build a local research corpus** in layers: glossary → field map → deep-dives → individual paper write-ups → verification overrides.
4. **Write a living thesis** with an explicit objection list. Run adversarial personas against it.
5. **Craft a hook question** that is specific to *this* thesis, not a generic AI-ethics opener.
6. **Mine the applicant's own documents** into profile / voice / claim-inventory so the SOP cannot contradict the CV or invent experience.
7. **Verify every load-bearing claim** before it enters an SOP sentence.
8. **Build the SoP-prep scaffolding** (`06-sop-prep.md` Q1/Q2/Q3 reading points + `07-portal-requirements.md` Tier A/B mechanics — see the `phd-sop-prep` skill). This is reading/expansion material, not prose.
9. **Track letters of recommendation** for this school in the tracker's `recommendationLetters` block (who, status, per-program third-letter pick).
10. **Only then draft the SOP** against the school's exact prompt (Tier B once pasted), claim-audit it, persona-critique it, consolidate.

Steps 3–5 are mostly *portable* across schools (the provenance thesis transfers). Steps 1–2, 6, and 8–10 are *school-specific*.

**No PI outreach step.** Faculty are named inside the SoP, following each school's own naming/contact norms; no cold emails are sent (`phd-pi-outreach` is archived 2026-10-27 — see `phd-sop-prep` for the current workflow).

---

## Folder template for each school

```
schools/<short-name>/
  00-program.md          # deadline, funding, SOP rules, track structure, GRE/English
  01-faculty.md          # 2–4 faculty, one paragraph each, recent papers, fit to thesis
  02-thesis-adaptation.md# what changes in the thesis when the NYU-specific scaffolding is removed
  03-hook.md             # keep, soften, or rewrite the hook for this audience
  04-sop-draft.md        # school-specific SOP
  05-outreach.md         # ARCHIVED — historical PI email notes only, no new entries
  06-sop-prep.md         # Q1/Q2/Q3 reading & expansion points (phd-sop-prep skill) — not prose
  07-portal-requirements.md # Tier A (FAQ-sourced) / Tier B (pasted live portal text) / reconciliation log
  verification-notes.md  # anything school-specific that was checked
```

Copy this tree when a school is promoted from the shortlist. Do not create it for every longlist entry. `06`/`07` are built once a school reaches **drafting** stage (see `phd-sop-prep` skill); considering-stage schools get them once promoted or finalised.

---

## Agent brief (paste into a fresh-context agent)

When spinning up a per-school agent, give it:

- This file and [`01-screening-criteria.md`](01-screening-criteria.md).
- [`../thesis/working-thesis.md`](../thesis/working-thesis.md) (current version only).
- [`../applicant/profile.md`](../applicant/profile.md), [`../applicant/claim-inventory.md`](../applicant/claim-inventory.md), [`../applicant/voice-samples.md`](../applicant/voice-samples.md) (voice rules section).
- [`../research/verification/00-verification-log.md`](../research/verification/00-verification-log.md) (so it does not reintroduce corrected errors).
- [`../applicant/sop-craft-notes.md`](../applicant/sop-craft-notes.md) (general SoP technique + why there is no one-size-fits-all).
- The `phd-sop-prep` skill (`C:\Users\moaaz\.cursor\skills\phd-sop-prep\SKILL.md`) for how to build `06-sop-prep.md` / `07-portal-requirements.md`.
- The school's name, and the instruction: *write only into `schools/<short-name>/`; do not edit the NYU research corpus; mark every fact SOURCED or UNCERTAIN; no PI cold emails.*

---

## Priority order for deep treatment

Set by [`03-shortlist.md`](03-shortlist.md). Do not deep-dive a school that fails a hard screen in [`01-screening-criteria.md`](01-screening-criteria.md). Cap concurrent school agents at three so verification quality does not collapse.
