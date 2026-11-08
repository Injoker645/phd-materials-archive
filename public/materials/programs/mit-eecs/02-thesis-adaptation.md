# MIT — thesis adaptation

Remove NYU-specific scaffolding. Keep:

- Per-prediction decomposition into site-invariant vs site-specific evidence.
- Audit / measurement framing (not a new end-to-end trainer).
- Prevalence-shift precondition.
- Decision-shaped output (conformal validity / deploy-or-recalibrate).

Replace NYUTron/Lang1 as the *object* with: multi-hospital clinical prediction settings available through IMES / MGH–BWH collaborations (access is collaborator-dependent — say so). Use Zech/Oermann 2018 and Obermeyer 2019 as existence proofs that travel; use Ghassemi's XAI critique as the reason this is measurement, not explanation.

**Differentiation sentence for MIT:** "I am not proposing another saliency or rationale method. I am proposing a cross-environment test that says whether a score's evidence travels, which is the question left open after we accept that current explainability cannot justify individual clinical decisions."
