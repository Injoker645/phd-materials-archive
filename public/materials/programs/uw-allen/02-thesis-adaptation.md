# UW Allen - thesis adaptation

Remove NYU-specific scaffolding. Keep:

- Per-prediction decomposition into site-invariant vs site-specific evidence.
- Audit / measurement framing (not a new end-to-end trainer).
- Prevalence-shift precondition before trusting the split.
- Decision-shaped output (conformal validity / deploy-or-recalibrate).

Replace NYUTron/Lang1 as the *object* with: clinical prediction models evaluable through CSE-UW Medicine collaborations (access is collaborator-dependent - say so). Use Zech/Oermann 2018 and Obermeyer 2019 as existence proofs that travel. Use Lasko/Strobl/Stead disease-vs-process framing as conceptual cousin (training two models ≠ per-prediction audit).

**Allen-specific tension to resolve in prose:** Su-In Lee's lab is the SHAP / clinical XAI centre of gravity. Do not pitch "explainability for trust." Pitch: *borrow attribution machinery to report how much of one score rests on evidence that holds across hospital environments*, then fail closed when it does not. That is closer to her "auditing clinical AI" theme than to saliency-as-justification.

**Differentiation sentence for Allen:** "I am not proposing another post-hoc explanation that a clinician is meant to believe. I am proposing a cross-environment test that says whether a score's evidence travels, and a deployment rule when it does not, using attribution as a measurement instrument rather than a trust substitute."
