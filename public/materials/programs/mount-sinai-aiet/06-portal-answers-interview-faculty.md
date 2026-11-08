# Mount Sinai portal answers — research summary + interview faculty

> Revised **2026-10-16** from his programme/PI notes + admissions conversation.  
> Full notes: [`07-his-program-and-pi-notes.md`](07-his-program-and-pi-notes.md).  
> Official AIET primary-mentor roster: https://icahn.mssm.edu/education/phd/biomedical-sciences/artificial-intelligence/research

---

## 1. One-sentence summary of current research interest

Tone shift: not only technical provenance — connect model behaviour → real deployment → whether the objective being optimised serves patients (assurance / accountability, not blanket “ethics”).

**Paste (preferred):**

> I want to develop methods that make clinical AI safer to deploy by tracing what models learn from institutional documentation and practices, how that behaviour affects real care decisions, and whether the outcomes being optimised actually track patient welfare.

**Alt (slightly more methods-forward):**

> I study how clinical models pick up site-specific documentation and operational habits, how those dependencies show up after deployment, and how to audit them so hospitals can decide when a score is safe to trust, recalibrate, or refuse.

**Shorter (if hard character cap):**

> Auditing clinical AI for what it learns from institutional habits, how that affects real care, and whether deployment objectives actually serve patients.

**Avoid as the one-liner:** pure “I want to work on AI ethics” (too vague for this form); pure “fairness/XAI” buzzwords; NYU-specific campus names.

---

## 2. Interview / rotation faculty

Form: **4–8** people, preference order, complementary labs for rotations / dissertation.  
Check the portal’s Faculty Information picker — it may be broader than the published AIET MTA list.

### Ideal order (his investigation list + complements)

Use this if the picker finds them:

| # | Name | Role in his map |
|---|---|---|
| **1** | **Ankit Sakhuja, MBBS, MS** | AI Assurance Lab; *Epistemic Laundering…* provenance paper; ICU / informatics / governance |
| **2** | **Girish Nadkarni, MD, MPH** | Windreich / clinical AI + EHR; same provenance paper |
| **3** | **Ipek Ensari, PhD** | AIET co-director; PGD ML; disparities-relevant populations |
| **4** | **Benjamin Glicksberg, PhD** | Clinical data / AI infrastructure; real-world EHR ML |
| **5** | **Bethany Percha, PhD** | Clinical notes / NLP — technical bridge to documentation provenance |
| **6** | **Rosamond Rhodes, PhD** | Bioethics collaborator (same paper); complementary, not sole ML seat |
| **7** | **Ira Hofer, MD** *or* **Benjamin Kummer, MD** | Implementation / multi-site / operational clinical AI |
| **8** | **Lynne D. Richardson, MD** | Health services / access / resource use — Layer 3 institutional outcomes |

**Paste block (ideal):**

1. Ankit Sakhuja, MBBS, MS  
2. Girish Nadkarni, MD, MPH  
3. Ipek Ensari, PhD  
4. Benjamin Glicksberg, PhD  
5. Bethany Percha, PhD  
6. Rosamond Rhodes, PhD  
7. Ira Hofer, MD  
8. Lynne D. Richardson, MD  

### If the picker is AIET-MTA-only (current public mentor page)

**Not on that page:** Sakhuja, Glicksberg, Rhodes, Richardson.  
Still email them. For the form, use this roster-safe list shaped to the same three-layer agenda:

| # | Name | Why this slot given his notes |
|---|---|---|
| **1** | **Girish Nadkarni, MD, MPH** | Clinical AI + coauthor of the provenance paper; Windreich / EHR / translational path |
| **2** | **Bethany Percha, PhD** | Closest MTA technical twin to clinical-note provenance / documentation habits |
| **3** | **Ipek Ensari, PhD** | AIET co-director; population / disparity-relevant measurement |
| **4** | **Ira Hofer, MD** | Clinical informatics + deployment-facing EHR prediction; multi-center direction (assurance-adjacent) |
| **5** | **Benjamin Kummer, MD** | Operationalising clinical AI; accountability in live workflows |
| **6** | **Gaurav Pandey, PhD** | Institution-specific models vs population scores — Layer 3 “what is being optimised” |
| **7** | **Hayit Greenspan, PhD** | Imaging-site fingerprints as parallel provenance case |
| **8** | **Alan C. Seifert, PhD** | AIET co-director — programme / rotation bridge |

**Paste block (AIET-only fallback):**

1. Girish Nadkarni, MD, MPH  
2. Bethany Percha, PhD  
3. Ipek Ensari, PhD  
4. Ira Hofer, MD  
5. Benjamin Kummer, MD  
6. Gaurav Pandey, PhD  
7. Hayit Greenspan, PhD  
8. Alan C. Seifert, PhD  

**Practical rule:** open the faculty picker → type **Sakhuja**. If he appears, use Ideal. If not, use Fallback and still put Sakhuja/Rhodes/Richardson/Glicksberg in the email queue.

If only **4** slots: Ideal → Sakhuja, Nadkarni, Ensari, Glicksberg (or Percha if Glicksberg missing). Fallback → Nadkarni, Percha, Ensari, Hofer.

---

## 3. Why this ranking (one paragraph for him)

Admissions already signalled that a deployment / accountability PhD is legitimate here — so the list should not read as “I only want another prediction-model lab.” Lead with **Sakhuja** (assurance + moral weight of note provenance) and **Nadkarni** (clinical AI substrate + same paper), then **Ensari** (equity-relevant measurement + AIET home), then people who cover documentation (**Percha**), implementation (**Hofer/Kummer**), and institutional outcomes (**Rhodes/Richardson**). That is the technical + clinical + ethical combination he described — not eight interchangeable ML names.

---

## 4. Cold-email pack (revised hooks)

Send after / alongside the form. Confirm emails on live profiles. No NYU comparison; no fabricated KFSH pilot.

**Shared frame:**

> Hi Dr. [Last],  
> I am applying Fall 2027 to Mount Sinai’s PhD in Biomedical Sciences and hope to train in AIET. I want to connect three layers: what clinical models learn from institutional documentation and practices, how that shows up in real care after deployment, and whether the outcomes being optimised actually track patient welfare — methods for safer, more accountable deployment rather than blanket safety language.  
> [ONE concrete sentence — below.]  
> I am not asking for a commitment before admission. If you have two minutes, I would value knowing whether this direction is something your group would consider relevant for a rotating student. Brief CV available on request.  
> Thank you,  
> Moaaz Tameer Islam

| Faculty | Middle sentence |
|---|---|
| **Sakhuja** | Your AI Assurance Lab work, and the *Epistemic Laundering and the Clinical Note* argument that provenance must carry moral weight, is the closest published framing I have found to the dissertation I want to build. |
| **Nadkarni** | Your clinical AI / EHR work, and coauthoring that same provenance paper, is why I see Windreich as a place where technical models and accountability questions can sit in one project. |
| **Ensari** | Your longitudinal / patient-generated ML work with disparity-relevant populations is where I would test whether provenance and missingness patterns change whose outcomes a model can be trusted for. |
| **Glicksberg** | Your clinical-data / AI infrastructure work is a path to asking whether behaviour stays reliable across populations, contexts, and data sources — not only on one benchmark. |
| **Percha** | Your clinical-text / EHR-note work is where documentation habits become measurable evidence, which is the Layer-1 half of the provenance problem I care about. |
| **Rhodes** | As a bioethics collaborator on the clinical-note provenance paper, I would value your view on whether a BMS/AIET student can keep institutional obligations and patient rights inside a technically rigorous thesis. |
| **Hofer** | Your perioperative EHR prediction and multi-center collaborative direction look like a natural testbed for post-deployment reliability across sites. |
| **Kummer** | Your operational stroke-alert / clinical-AI work is where an accountability signal would have to change a real workflow decision. |
| **Richardson** | Your health-services work on access and resource utilization is the Layer-3 question I do not want to leave as background motivation — whether AI “success” metrics track meaningful care. |
| **Pandey** | Your institution-specific vs population risk-model work already shows why local operational signal can dominate a clinically used score. |

**Send first:** Sakhuja → Nadkarni → Ensari → (Glicksberg or Percha). Then Rhodes / Richardson as collaborator-framed notes. Space them.

---

## 5. Open checks before locking the form

- [ ] Does the portal faculty picker include **Sakhuja / Glicksberg / Rhodes / Richardson**?  
- [ ] Read *Epistemic Laundering and the Clinical Note* (AJOB 2026) before emailing Sakhuja/Nadkarni/Rhodes.  
- [ ] In faculty emails: ask whether a technical primary + bioethics / health-services collaborator is a normal AIET thesis shape (matches his pre-apply Q2–Q3).
