# Verification notes - Harvard AIM folder

> School-specific checks performed while building `schools/harvard-aim/` on 2026-08-06.
> Does not replace [`../../research/verification/00-verification-log.md`](../../research/verification/00-verification-log.md) for research claims.

---

## Programme / admissions

| Claim | Verdict | Source |
|---|---|---|
| AIM is a track of HMS Biomedical Informatics PhD; degree via Griffin GSAS / DMS | **SOURCED** | https://bmiphd.hms.harvard.edu/ ; https://gsas.harvard.edu/program/biomedical-informatics |
| Fall 2027 applications open Fall 2026; deadline 1 Dec 2026 | **SOURCED** | https://bmiphd.hms.harvard.edu/applying-aim ; GSAS BMI deadline line |
| Do not contact AIM faculty; use AIM@hms.harvard.edu | **SOURCED** | https://dbmi.hms.harvard.edu/education/phd-program/ai-medicine-phd-track |
| Not affiliated with MGH academic AI-in-Medicine programme | **SOURCED** | https://bmiphd.hms.harvard.edu/applying-aim |
| Clinical shadowing in year 1; Boston hospital partners | **SOURCED** | AIM track page |
| Co-mentorship + common datasets | **SOURCED** | https://bmiphd.hms.harvard.edu/ |
| GRE optional; IELTS min 7 / Speaking 6.5 | **SOURCED** | GSAS BMI page |
| SoP <=1000 words; Personal Statement <=500 words (GSAS general) | **SOURCED** | https://gsas.harvard.edu/apply/applying-degree-programs/statement-purpose-personal-statement-and-writing-sample |
| Personal Statement required for BMI Fall 2027 | **UNCERTAIN** | GSAS says programme pages update by early September; BMI page currently lists Personal Statement under admissions; re-check at portal open |
| Writing sample for AIM | **UNCERTAIN** | FAQ accordion not fully readable this pass |

---

## Funding (international)

| Claim | Verdict | Source |
|---|---|---|
| BMI/HMS PhD: full tuition + stipend while satisfactory progress | **SOURCED** | https://bmiphd.hms.harvard.edu/resources/financial-support |
| DMS: funded regardless of citizenship | **SOURCED** | https://www.hms.harvard.edu/dms/Current%20Students/benefits.html |
| $1,000 relocation allowance | **SOURCED** | BMI financial support page |
| Exact 2027 stipend amount | **UNCERTAIN** | Offer letter / Notice of Financial Support |
| NLM T15 / BIRT postdoc at Harvard is US citizen/PR only | **SOURCED** | https://dbmi.hms.harvard.edu/education/nlm-biomedical-informatics-data-science-postdoctoral-fellowship |
| Baseline AIM PhD admit funding equals NLM-only | **Rejected** | NLM is a separate training-grant path; DMS citizenship-agnostic package is the load-bearing claim for internationals |

**Residual:** Optional one-line confirmation from AIM@hms.harvard.edu (template in `05-outreach.md`). Not required to keep Harvard on the shortlist given DMS language.

---

## Faculty

| Person | On AIM-related faculty listings | Thesis touch | Status |
|---|---|---|---|
| Isaac Kohane | AIM Program Director | Multi-site EHR infrastructures; medical AI values | **SOURCED** |
| Pranav Rajpurkar | AIM faculty cluster on DBMI projects | Evaluation / clinician-AI / certification | **SOURCED** https://dbmi.hms.harvard.edu/projects |
| Arjun Manrai | AIM faculty cluster | Fairness, STANDING Together, human values | **SOURCED** |
| Tianxi Cai | AIM faculty cluster | Multi-institutional EHR methods | **SOURCED** |

---

## Multi-site data opportunities

| Claim | Verdict | Source |
|---|---|---|
| MGB RPDR aggregates EHR across multiple MGB hospitals | **SOURCED** | https://www.massgeneralbrigham.org/en/research-and-innovation/centers-and-programs/center-for-integrated-healthcare-data-research/overview |
| Applicant/student automatic RPDR access | **UNCERTAIN / do not claim** | Requires MGB credentials + research registration |
| 4CE multi-hospital EHR consortium involves DBMI faculty including Kohane | **SOURCED** | https://dbmi.hms.harvard.edu/projects |

---

## Applicant claim hygiene applied in drafts

| Rule | Applied |
|---|---|
| No KFSH electrophoresis pilot | Yes |
| KFSH = CSICU/procedures dashboard, March 2024, assisting scope | Yes |
| Grant topic softened to trust/blame person vs system | Yes |
| Thesis title = *Cracks in the Feed* (DSA) | Yes |
| No grandmother / volunteering / RAG claims | Yes |
| Register A voice constraints in hook, SoP, PS, programme email | Yes |

---

## Process blockers / open human tasks

1. **Re-check Personal Statement + writing sample** when GSAS/BMI Fall 2027 application text goes live (early Sept 2026 language on GSAS).
2. **Him:** childhood story in SoP, Personal Statement, or both.
3. **Him:** confirm trust/blame wording matches the actual Uppsala proposal.
4. **Optional:** one email to AIM@hms.harvard.edu on international funding / materials (not to faculty).
5. **AIM FAQ accordion** was not fully machine-readable this pass. Human should open https://bmiphd.hms.harvard.edu/applying-aim in a browser and paste Eligibility / Application subsection text into this file when convenient.
6. Do not edit NYU research corpus from this school folder; portable thesis adaptation lives only here.

---

## Files written

```
schools/harvard-aim/
  00-program.md
  01-faculty.md
  02-thesis-adaptation.md
  03-hook.md
  04-sop-draft.md
  05-outreach.md
  verification-notes.md
```
