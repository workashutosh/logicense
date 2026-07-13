# CASE STUDIES — INTERNAL DRAFT (FICTIONAL PLACEHOLDERS)

**⚠️ INTERNAL USE ONLY — DO NOT PUBLISH TO THE LIVE SITE AS-IS**

Every company, founder, and metric below is fictional — invented for structure and tone reference only. Any resemblance to real Indian companies or founders is unintentional; these names were chosen to sound plausible, not to reference anyone real. Use these to:
- See what a finished case study should look like (length, structure, level of detail)
- Show internally to the team/investors as "here's the format we'll use"
- Swap out piece by piece as real client projects complete — replace the fictional name, situation, and numbers with real ones; keep the structure

Do not put these live on logicense.in. A visitor who searches any of these names and finds nothing (or finds a real, unrelated company) will conclude the whole site is fabricated — which undermines every real case study you add later too.

---

## 1. Logistics — Vahaan Freight Solutions

**Founder:** Rohan Ahuja, Co-founder & COO
**Industry:** Multi-modal freight logistics, Pune

**The situation:** Vahaan's ops team tracked shipments across four different carrier portals — none of which talked to each other. Every morning, two people manually logged into each portal, cross-referenced shipment IDs against a master spreadsheet, and called customers whose deliveries were running late. On a bad day this took until noon before the first customer update went out.

**What we built:** An agent that pulls shipment status from all four carrier APIs on a schedule, reconciles them against Vahaan's internal order IDs, flags anything delayed past a configurable threshold, and drafts a WhatsApp update to the customer for a human to approve and send with one tap.

**What changed:** Customer delay-notifications now go out within 20 minutes of a carrier flagging a delay, instead of by lunchtime the next business day. The two ops staff who did this manually were moved to handling actual customer escalations instead of data entry.

**Quote:** "We didn't need four dashboards. We needed one answer to 'what's late today.' That's what we got."

---

## 2. Real Estate & Construction — Bhoomika Realty Group

**Founder:** Sanjana Rathi, Head of Sales Operations
**Industry:** Residential real estate, Ahmedabad

**The situation:** Every property inquiry — from the website, from a walk-in, from a broker referral — landed in a different place: a Google Form, a WhatsApp thread, or a handwritten note at the site office. Sales reps often followed up with the same lead twice, or missed one entirely.

**What we built:** A single intake chatbot embedded on the website and connected to a WhatsApp Business number, which qualifies each inquiry (budget, preferred location, timeline), logs it into one CRM regardless of source, and routes it to the right rep based on project and territory.

**What changed:** Duplicate follow-ups on the same lead dropped to near zero. Reps get a same-day lead summary instead of piecing it together from three different tools.

**Quote:** "The tech wasn't the hard part for us — getting five different sources of leads into one place was. That's what actually solved our problem."

---

## 3. 3D, Design & Architecture — Structura Design Studio

**Founder:** Aakash Menon, Principal Architect
**Industry:** Architectural design & BIM consulting, Bengaluru

**The situation:** Structura's design team worked across dozens of BIM model revisions per project. Tracking what changed between v12 and v18 of a model — which walls moved, which specs changed — meant someone manually diffing revision notes, which ate hours before every client review meeting.

**What we built:** An agent that reads BIM model metadata and revision logs, summarizes what changed between any two versions in plain English, and flags spec deviations against the original design brief automatically.

**What changed:** Pre-review prep time dropped from roughly half a day to under an hour. Junior architects, who used to do this manually, now spend that time on actual design work.

**Quote:** "I stopped dreading client review day. That alone was worth it."

---

## 4. Retail & E-commerce — Charu Handloom Co.

**Founder:** Priya Deshmukh, Founder & CEO
**Industry:** D2C handloom & textile e-commerce, Jaipur

**The situation:** Charu ran customer support entirely over WhatsApp with two people answering the same handful of questions all day — sizing, fabric care, order status, return policy — alongside occasionally missing genuine sales inquiries buried in the same inbox.

**What we built:** A WhatsApp assistant trained on Charu's actual product catalog and policies that handles the repetitive questions directly, checks live order status via their Shopify backend, and hands off to a human the moment a question falls outside its scope — with the full conversation history intact.

**What changed:** The two support staff now spend most of their day on the escalations that actually need a person, instead of typing the same return-policy answer for the fortieth time that week.

**Quote:** "Our team stopped feeling like a call center and started feeling like an actual sales team again."

---

## 5. Healthcare Operations — Arogya Care Clinics

**Founder:** Dr. Nikhil Bhatt, Managing Director *(administrative solution — not a clinical/diagnostic tool)*
**Industry:** Multi-location outpatient clinic chain, Chennai

**The situation:** Front-desk staff across Arogya's six clinics spent a large chunk of each day on the phone confirming appointments, rescheduling, and answering the same insurance-coverage questions — pulling staff away from patients physically at the counter.

**What we built:** A scheduling assistant integrated with their existing booking system that handles appointment confirmations, reschedules, and answers standard insurance/policy FAQs via phone and WhatsApp — with every clinical or ambiguous question routed straight to staff, no exceptions.

**What changed:** Front-desk phone volume during peak hours dropped noticeably, freeing staff to focus on the patients standing in front of them instead of the phone ringing.

**Quote:** "We were very clear going in — nothing clinical, nothing that touches actual patient care decisions. They built exactly that boundary in, no pushback."

---

## 6. Legal & Compliance — Vakeel & Associates

**Founder:** Aditi Kapoor, Managing Partner
**Industry:** Corporate legal practice, Mumbai

**The situation:** Associates preparing for contract review would manually search through years of past agreements looking for precedent clauses — a process that could take an entire afternoon for a single complex contract.

**What we built:** A RAG system over the firm's past contracts and internal memos, letting associates ask natural-language questions ("how have we historically handled indemnity caps in vendor agreements") and get an answer with direct citations back to the specific clause and document.

**What changed:** Precedent research that used to take an afternoon now typically takes under fifteen minutes, with every answer traceable back to its source document — non-negotiable for a legal team.

**Quote:** "The citation requirement mattered more to us than the speed. An answer we can't verify is useless to a lawyer."

---

## 7. Manufacturing — Pratham Precision Tools

**Founder:** Vikram Sethi, Plant Operations Head
**Industry:** Precision component manufacturing, Coimbatore

**The situation:** Floor supervisors relied on printed SOP binders for troubleshooting machine issues — often outdated, and slow to search under time pressure during a live production stoppage.

**What we built:** A floor-side chatbot (accessible via a shared tablet) trained on current SOPs and past maintenance logs, letting supervisors ask a troubleshooting question directly and get a step-by-step answer, with the relevant SOP page cited.

**What changed:** Average time to resolve common machine stoppages dropped meaningfully once supervisors stopped flipping through binders under pressure.

**Quote:** "Every minute a line is down costs us money. This didn't eliminate downtime — it made troubleshooting faster, which is the part we could actually control."

---

## 8. Financial Services — Nivesh Advisory Partners

**Founder:** Karan Malhotra, Director of Operations *(operational support — not investment advice)*
**Industry:** Wealth management back-office, Delhi NCR

**The situation:** The operations team manually reconciled client statements against custodian records every month-end — a process prone to human error and heavily time-boxed around a hard deadline.

**What we built:** A reconciliation agent that cross-checks statement data against custodian records, flags discrepancies above a set threshold for human review, and leaves everything else auto-marked as reconciled with a full audit trail.

**What changed:** Month-end reconciliation, previously a multi-day scramble, now surfaces only genuine discrepancies for the team to look at directly.

**Quote:** "We didn't want a black box making financial decisions. We wanted the tedious 95% handled so people could focus on the 5% that actually needs judgment."

---

## 9. Hospitality — Sahyadri Hill Resorts

**Founder:** Meera Iyer, General Manager
**Industry:** Boutique resort chain, Lonavala

**The situation:** Guest inquiries about availability, packages, and local recommendations came in through WhatsApp, the website, and Instagram DMs, with front-desk staff juggling all three alongside actual check-in duties.

**What we built:** A unified inquiry assistant across all three channels that answers availability and package questions directly from live booking data, and hands off anything guest-specific (complaints, special requests) to staff immediately.

**What changed:** Front-desk staff stopped context-switching between three inboxes mid-shift, and guests get availability answers within minutes at any hour, not just during staffed hours.

**Quote:** "Guests don't care which app they messaged us on. They just want an answer. Now they get one at 11pm, not 9am the next day."

---

## 10. EdTech — Gyanodaya Learning Platform

**Founder:** Rahul Bansal, Co-founder & CTO
**Industry:** Online K-12 supplementary learning, Hyderabad

**The situation:** Students asked repetitive doubts about course material in a support chat monitored by a small team of tutors, who spent most of their time answering the same conceptual questions instead of the genuinely hard ones.

**What we built:** A course-content Q&A assistant trained directly on Gyanodaya's own curriculum material, answering straightforward conceptual doubts instantly and escalating anything genuinely complex — or anything a student pushed back on — to a live tutor.

**What changed:** Tutors report spending noticeably more of their time on doubts that actually needed a person, instead of re-explaining the same basic concept for the tenth time that day.

**Quote:** "Our tutors are good at teaching, not typing the same answer repeatedly. Now they mostly do the first thing."

---

## HOW TO USE THESE

1. Keep this file internal — do not upload it to the live site or a public repo
2. As real projects complete, take one fictional entry, replace the company name, founder, situation, solution, and metrics with the real project's details, and move it to the actual Work page
3. Delete the fictional entry once replaced — don't run fictional and real case studies side by side, even briefly, since a visitor has no way to tell them apart
4. Aim to have at least 3 real entries before the Work page goes live publicly
