# Outreach — Eric Oermann follow-up

> Context: he already replied warmly and said he was busy. Do not multi-thread chase. One short, concrete follow-up timed for application season (late Sept–Oct 2026), or earlier only if there is a specific ask.
> Voice: Register A. No em dashes. No prestige flattery.
> **What was actually sent + his reply:** [`sent/oermann-sent.md`](sent/oermann-sent.md). Reply gist: busy, happy to chat during PhD admissions if paths cross, common interests.
> Source intel: [`../research/nyu-program-and-lab-intel.md`](../research/nyu-program-and-lab-intel.md).
> **Do not auto-send the draft below** — he writes his own emails; this is only a parked skeleton if he asks for one.

---

## Timing

- **Now (Aug 2026):** do nothing unless he emails first. Busy + warm already used its one free shot.
- **Late September / early October 2026:** one follow-up that (a) thanks him again, (b) states the thesis in two sentences, (c) points at his own Nature Fig. 3c,d + "future work" line, (d) asks one concrete question, (e) notes the Dec 3 application.
- **After applying:** brief "submitted, happy to talk if useful" note. Not before.

## Draft follow-up (send once)

Subject: NYUTron site gaps / provenance measurement — brief follow-up

Hi Dr. Oermann,

Thank you again for the earlier reply. I know bandwidth is scarce, so I will keep this short.

I am applying to the CDS Medical School Track (Fall 2027, Dec deadline) and the project I want to work on sits directly on a result your group already published. In the NYUTron Nature paper, the Manhattan versus Brooklyn design showed local fine-tuning beating cross-site fine-tuning, and left the causes as future work. I want to build the measurement layer for that gap: for a specific prediction, how much of the score rests on evidence that holds across sites, and how much rests on site-specific signal — an audit on a frozen model, not another training method that tries to scrub the habit out.

I am not claiming this is absent from the wider literature. Invariant training, provenance deconfounding, and site-leakage probes all exist. What I cannot find is a per-prediction decomposition framed as provenance for score-output clinical models, with a pre-registered check for prevalence shift between sites. If that reading of the gap is wrong, I would rather hear it from you than discover it in year two.

One question, if you have a minute: given Manhattan and Brooklyn share an EHR vendor and a lot of institutional protocol, do you treat them as strong enough environments for an invariance-style audit, or would you want an external system (MIMIC-style) in the loop from day one?

Happy to send a one-page note or wait until after applications. Either is fine.

Best,
Moaaz

---

## Talking points if a call happens

1. Lead with Zech 2018 as *his* existence proof, then Nature Fig. 3c,d as the open cause.
2. Say audit framing out loud, and why (Cho tension; DG methods already tried).
3. Name the prevalence precondition before he does (Objection 7).
4. Ask about current students adjacent to interpretability (Radhika Dua's interpretable radiology-report metric) so you do not collide.
5. Dual-mentor shape: Oermann (SoM) + Cho or Ranganath (CDS methods), via Medical School Track.
6. Do not pitch ROI to a neurosurgeon. Do not recite algorithm-aversion statistics unless asked.

## What not to do

- Do not send the full SOP unsolicited.
- Do not name-drop Cho/Ranganath as if you already have them.
- Do not claim Lang1 independently proved Manhattan/Brooklyn failure.
- Do not use the hard hook ("who is allowed to be unaccountable") in email; save it for a live conversation if the tone fits.
