# SOP claims audit

> Every substantive sentence in Drafts A–C traced to a source. Anything that cannot be traced is cut or rewritten before `draft-final.md`.

Legend: **OK** (USABLE + verified enough) · **SOFTEN** (conceptually fine, no number) · **BLOCKED** (banned or unverified) · **PICK** (needs human choice)

---

## Shared claims across A/B/C

| Claim | Drafts | Status | Source |
|---|---|---|---|
| Doctor/model habit-absorption parallel (hook) | A, C | **SOFTEN OK** | Conceptual; no Dietvorst/Sunstein numbers used. Hook doc + deep-dive 07. Safe without statistics. |
| "Who is allowed to be unaccountable" | — | **BLOCKED (omitted)** | Softened out of all three drafts on purpose. |
| Grew up in hospital compound, father worked there | B, C | **OK** | claim-inventory USABLE |
| Volunteered there | — | **BLOCKED (omitted)** | NEEDS-CHECK |
| Medium article on historical underrepresentation amplified by AI | A, B | **OK** | claim-inventory USABLE; year/URL still nice-to-have |
| Contacted bioethics researcher day one; trust/blame person vs system | A, B, C | **OK softened** | Avoids PICK-ONE between aversion vs fairness grant framings |
| Grant proposal funded/submitted | — | **BLOCKED (omitted)** | Ceiling is "worked on" |
| Left Samsung / constrained analyst role / no Python | A, B, C | **OK** | voice-samples KTH Phylogenetic |
| Thesis title *Cracks in the Feed* + DSA + GIF modality gap | A, B, C | **OK** | academic-record (CV title deliberately not used) |
| Akademiska cohort / interoperability human-research side | B | **OK** | claim-inventory; cohort framing |
| KFSH & RC procedures dashboard | A, C | **OK at CV scope** | Not electrophoresis pilot |
| Fyris AI ER demand model | A, C | **OK** | CV |
| "Not claiming deep expertise in invariant causal prediction" | A, C | **OK** | Named-gap voice move; true |
| NYUTron Manhattan vs Brooklyn local fine-tuning beats cross-site | A, B, C | **OK** | verification/nyutron-lang1-site-transfer.md; Nature Fig. 3c,d |
| Authors left causes as future work | A, B, C | **OK** | Nature quote verified |
| Specific AUC drop % | — | **BLOCKED (omitted)** | Numbers not transcribed from figure |
| Lang1 confirms same Manhattan/Brooklyn failure | — | **BLOCKED (omitted)** | verification: Lang1 does not show this |
| IRM collapsed 0.834→0.455 | — | **BLOCKED (omitted)** | CausTab misread corrected |
| Prevalence check before trusting invariance | A, C | **OK** | Corrected CausTab reading; method-family boundary condition |
| DG/IRM often fails to beat pooled ERM clinically | A | **SOFTEN OK** | Supported by deep-dive 05; no specific bogus number |
| Ghassemi-style "explanations may not be faithful" | B | **SOFTEN OK** | Qualitative; exact quote pending core-paper verification |
| Per-prediction invariant vs site-specific decomposition | A, B, C | **OK** | working-thesis v4 |
| Oermann 2018 chest X-ray hospital-shortcut | A, C | **OK qualitative** | Zech et al.; exact 99.95% omitted pending core-paper check |
| Cho + Ranganath as philosophical/formal angles | A, B, C | **OK** | deep-dive 02 |
| Medical School Track for collaborators / EHR access | A, B, C | **OK** | program structure; funding details still UNCERTAIN pending lab-intel file |
| Undecided academia vs industry | A, B, C | **OK** | his repeated stance |
| Grandmother cancer story | — | **BLOCKED (omitted)** | PICK-ONE contradiction |
| RAG experience | — | **BLOCKED (omitted)** | PICK-ONE contradiction |
| KFSH electrophoresis pilot | — | **BLOCKED (omitted)** | never happened |
| Algorithm-aversion N / % / "Sunstein & Gaffe" | — | **BLOCKED (omitted)** | verification pending |

---

## Draft-specific notes

**Draft A:** densest method paragraph. Risk: reads slightly more like a proposal abstract than like him. Still within voice if contractions and the named gap stay.

**Draft B:** strongest "why this person." Risk: method paragraph is thinner; a methods-heavy reader (Ranganath) may want one more concrete sentence from A.

**Draft C:** best balance. Recommended consolidation base. Room under 650 to steal one method sentence from A and one biographical concrete from B if needed.

---

## Actions before `draft-final.md`

1. Human answers to claim-inventory open questions (grandmother, grant framing, RAG, volunteering) — none currently block Draft C.
2. Finish `algorithm-aversion-claims.md` before any future draft reintroduces Dietvorst numbers.
3. Persona-critique Draft C (Bioethicist + Grant Reviewer on the hook; Statistician on the prevalence sentence; Attending on "deployment decision").
4. Confirm Medical School Track funding one-liner once `nyu-program-and-lab-intel.md` lands — currently avoided specific stipend claims.
5. Word-count in Google Docs double-spaced to confirm ≤ two pages (markdown count ≠ page count).
