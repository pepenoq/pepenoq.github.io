/* ============================================================================
   NUR 525 Exam 2 - Community & Public Health Nursing Question Bank
   100 NCLEX-style critical-thinking questions across four practice sets:
     1 Week 4 - US health care system, insurance, policy & funded programs
     2 Week 5 - Epidemiology, surveillance, the epi triangle & immunity
     3 Week 6 - Sexually transmitted infections, syphilis, HIV & hepatitis
     4 Week 6 - Tuberculosis, foodborne illness & communicable disease control

   Built from the MCPHS NUR 525 Exam 2 source material: the Week 4, Week 5 and
   Week 6 objectives, and the three "Are You Ready?" worksheets (Public Policy;
   Epi, Surveillance & Opportunistic Infection; Communicable Disease). Every
   objective in those files is represented.

   Per the Epi worksheet's note that there is NO MATH ON THE EXAM, no item
   requires computing a rate; incidence and prevalence are tested by
   interpretation and application instead.

   Multiple choice (4 options, 1 best answer) and SATA (4-7 options, 2+ correct).
   Distractors are plausible and drawn from adjacent concepts in the same
   material; every rationale explains why the correct answer is right and why
   the credible distractors are wrong. MCQ answer position is spread across all
   four slots and SATA correct-counts vary, so neither is itself a clue.

   Question object: { id, exam(1-4), topic, type("mcq"|"sata"), bloom,
                      stem, options[], correct[idx], rationale }
   ========================================================================== */
window.NUR525E2_DATA = {
  meta: {"title": "NUR 525 Exam 2 - Community & Public Health Nursing", "total": 100, "exams": 4, "examTitles": {"1": "Week 4 \u2014 US Health Care System, Insurance & Policy", "2": "Week 5 \u2014 Epidemiology, Surveillance & Immunity", "3": "Week 6 \u2014 STIs, Syphilis, HIV & Hepatitis", "4": "Week 6 \u2014 TB, Foodborne Illness & Communicable Disease Control"}},
  questions: [
 {
  "id": "n525e2s1q01",
  "exam": 1,
  "topic": "US system structure",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A visiting nurse from a country with national health insurance asks how the United States system is organized. Which description is most accurate?",
  "options": [
   "A fragmented, multi-payer mix of private and public coverage with no guarantee of universal coverage",
   "A universal single-payer system in which the federal government finances care for all residents",
   "An entirely private system in which all coverage is purchased directly by individuals",
   "A universal system administered at the state level, with each state insuring its own residents"
  ],
  "correct": [
   0
  ],
  "rationale": "The United States operates a fragmented, multi-payer model often described as two-class: a private sector built largely on employer-sponsored coverage and fee-for-service payment, alongside public programs such as Medicare, Medicaid, CHIP, the VA, and TRICARE that cover specific eligible populations. Critically, it is not universal - there is no guarantee of coverage without catastrophic financial burden. Calling it single-payer or universal describes what the US lacks, which is the central policy point. Calling it entirely private ignores that public programs cover a large share of the population, including most adults over 65."
 },
 {
  "id": "n525e2s1q02",
  "exam": 1,
  "topic": "Cost of care",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is explaining why health care in the United States is so expensive. Which factors should the nurse include? Select all that apply.",
  "options": [
   "Per capita spending far exceeds that of comparable wealthy nations",
   "Most health care dollars flow to acute hospital care and physician services rather than prevention",
   "An aging population is living longer with multiple chronic and degenerative conditions",
   "Administrative complexity from a fragmented, multi-payer insurance structure",
   "The United States spends a larger share of its health budget on public health than peer nations"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "US per capita spending is roughly $12,555 against about $6,414 for comparable countries, and the bulk of those dollars goes to acute hospital and physician services rather than upstream prevention. The aging Baby Boom generation drives much of the growth: declining mortality means older adults live longer with heart disease, cancer, chronic respiratory disease, stroke, Alzheimer disease, and diabetes, all of which require sustained use of expensive medications, technology, skilled nursing, and hospital care. Multi-payer fragmentation adds administrative cost. The final option inverts reality - only about 3% of national health expenditures support governmental public health functions, which is precisely the imbalance public health nursing argues against."
 },
 {
  "id": "n525e2s1q03",
  "exam": 1,
  "topic": "Cost and quality",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A hospital administrator states that because the unit spends more per patient than any comparable unit, its quality of care must be the highest in the region. How should the nurse evaluate this claim?",
  "options": [
   "The claim is sound, because higher spending reflects more diagnostic testing and specialist involvement",
   "The claim is unsupported, because higher spending does not reliably produce better outcomes and may reflect duplication, avoidable admissions, or complications",
   "The claim cannot be evaluated, because cost and quality are unrelated concepts that should never be compared",
   "The claim is sound, because cost per patient is one of the recognized quality indicators"
  ],
  "correct": [
   1
  ],
  "rationale": "Cost and quality are related, but not in the simple proportional way the administrator assumes: the United States spends more per capita than any other wealthy nation while posting worse health and life expectancy outcomes than peer high-income countries, which is the clearest available refutation. High spending can reflect duplicated testing, avoidable admissions, treating complications, or care delivered too late rather than excellence. Saying the two are unrelated is also wrong and would abandon the nurse's role in value - the third option is tempting because it sounds appropriately cautious. Cost per patient is a utilization measure, not a quality indicator."
 },
 {
  "id": "n525e2s1q04",
  "exam": 1,
  "topic": "Nursing influence on cost",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse manager wants to demonstrate how nursing practice positively influences the cost and delivery of health care. Which nursing actions support that goal? Select all that apply.",
  "options": [
   "Teaching a newly diagnosed client with heart failure daily weights and symptom thresholds to prevent readmission",
   "Implementing a catheter-associated urinary tract infection prevention bundle on the unit",
   "Coordinating discharge planning and follow-up so clients are not readmitted for preventable reasons",
   "Screening clients for food and housing insecurity and linking them to community resources",
   "Reducing time spent on client education so more clients can be seen each shift"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Nurses lower cost chiefly by preventing expensive downstream events: education that averts a readmission, infection-prevention bundles that avert a hospital-acquired condition, discharge coordination that closes gaps, and social-needs screening that addresses the determinants driving repeat utilization. All four raise quality while lowering cost, which is the point - the two move together when the intervention is upstream. Cutting education to increase throughput is the trap: it looks like efficiency on a shift-by-shift basis but predictably produces readmissions, nonadherence, and complications that cost far more than the time saved."
 },
 {
  "id": "n525e2s1q05",
  "exam": 1,
  "topic": "Affordable Care Act",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A client asks what the Affordable Care Act actually changed about obtaining insurance. Which provisions should the nurse describe? Select all that apply.",
  "options": [
   "It created the Health Insurance Marketplace where people without job-based coverage can buy standardized plans",
   "It provides sliding-scale subsidies in the form of tax credits based on income",
   "It allows dependent adult children to remain on a parent's plan until age 26",
   "It prohibits insurers from denying coverage or charging more for pre-existing conditions",
   "It established universal coverage for all residents of the United States"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The ACA built the Marketplace at healthcare.gov with income-based sliding-scale tax credits, extended dependent coverage to age 26, and barred insurers from denying coverage or rating up for pre-existing conditions. The final option is the central misconception: the ACA substantially expanded coverage but did not create universal coverage - millions remain uninsured, including undocumented immigrants barred from federal programs and low-income adults caught in the coverage gap in states that did not expand Medicaid. Knowing what the ACA did not do is what lets a nurse identify who still falls through."
 },
 {
  "id": "n525e2s1q06",
  "exam": 1,
  "topic": "Insurance terminology",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A client has a plan with a $3,000 annual deductible, a $30 office visit copay, and 20% coinsurance. The client has paid nothing toward care this year and now needs an outpatient procedure billed at $2,000. What should the nurse explain about the client's responsibility?",
  "options": [
   "The client owes $400, which is the 20% coinsurance share of the bill",
   "The client owes the full $2,000, because the annual deductible has not yet been met",
   "The client owes $30, the copay for the service",
   "The client owes nothing, because the procedure is a covered service"
  ],
  "correct": [
   1
  ],
  "rationale": "A deductible is the out-of-pocket amount the client must pay each year for covered services before the insurer begins paying. With $0 applied and a $3,000 deductible, the entire $2,000 falls to the client and is credited toward the deductible. Coinsurance - a percentage split such as 20/80 - and copays, fixed dollar amounts for a specific service, generally apply after the deductible is satisfied, which makes the first and third options the predictable errors. 'Covered service' means the plan will count the charge toward the deductible and eventually share cost; it does not mean free. The premium, separately, is the recurring monthly fee that merely keeps the policy active."
 },
 {
  "id": "n525e2s1q07",
  "exam": 1,
  "topic": "Insurance terminology",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A client says, 'I pay $240 every month even in months when I never see a doctor. What is that for?' Which term describes this payment?",
  "options": [
   "Deductible",
   "Coinsurance",
   "Premium",
   "Copay"
  ],
  "correct": [
   2
  ],
  "rationale": "The premium is the recurring monthly fee paid to purchase and maintain active coverage; it is owed whether or not any care is used, which is exactly what puzzles the client. A deductible is the annual out-of-pocket amount that must be met before the insurer starts paying. Coinsurance is a percentage split of a service's cost, such as the client paying 20% while insurance pays 80%. A copay is a fixed dollar amount for a specific visit or prescription. All four appear on the same insurance card, and clients routinely conflate them - being able to separate them cleanly is what lets a nurse explain a bill or anticipate a cost barrier to adherence."
 },
 {
  "id": "n525e2s1q08",
  "exam": 1,
  "topic": "Medicare parts",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A 72-year-old is retiring and asks what Medicare Part A covers. Which services should the nurse include? Select all that apply.",
  "options": [
   "Inpatient hospital care",
   "Skilled nursing facility care",
   "Hospice care",
   "Essential home health care",
   "Outpatient physician office visits and laboratory work",
   "Outpatient prescription medications"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Part A is hospital or inpatient insurance: inpatient hospital stays, skilled nursing facility care, hospice, and essential home health. It is premium-free if the beneficiary or spouse paid Social Security taxes for at least ten years. Outpatient physician visits, laboratory work, durable medical equipment, ambulance transport, and physical or occupational therapy fall under Part B, which must be purchased and carries a monthly premium with 80/20 cost sharing. Outpatient prescriptions require Part D. The A-versus-B split is the distinction clients most often get wrong, and it determines whether a service will be paid at all."
 },
 {
  "id": "n525e2s1q09",
  "exam": 1,
  "topic": "Medicare parts",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A client enrolled only in Original Medicare Parts A and B asks why a recent bill arrived for routine dental cleaning, new eyeglasses, and a hearing aid. What is the nurse's best response?",
  "options": [
   "The services should have been covered; the client should appeal the denial",
   "Original Medicare does not cover routine dental care, eyeglasses, or hearing aids, so the client is responsible unless other coverage applies",
   "These services are covered under Part A once the hospital deductible is met",
   "These services are covered under Part B at 80%, so the bill reflects only the client's coinsurance"
  ],
  "correct": [
   1
  ],
  "rationale": "Original Medicare excludes routine dental care, cleanings, and dentures; routine eye exams and prescription eyeglasses; hearing aids and their fitting exams; long-term custodial care for assistance with activities of daily living; cosmetic surgery; and routine foot care. Telling the client to appeal wastes effort on a benefit that does not exist and erodes trust. The Part A and Part B options misattribute coverage to parts that do not include these services. The clinically useful follow-up is that Part C, Medicare Advantage, bundles Parts A, B, and usually D through a private plan and often adds dental, vision, and hearing benefits - which is frequently why clients choose it."
 },
 {
  "id": "n525e2s1q10",
  "exam": 1,
  "topic": "Medicare eligibility",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nursing student states that Medicare is only for adults aged 65 and older. Which clients demonstrate that this statement is incorrect? Select all that apply.",
  "options": [
   "A 41-year-old who has received Social Security Disability Insurance for 24 months",
   "A 29-year-old with end-stage renal disease requiring dialysis",
   "A 55-year-old newly diagnosed with amyotrophic lateral sclerosis",
   "A 23-year-old uninsured part-time worker whose income is above the Medicaid threshold",
   "A 34-year-old pregnant client with a household income below the federal poverty level"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Medicare also covers people under 65 who have received SSDI for 24 months, people of any age with end-stage renal disease requiring dialysis or transplant, and people with ALS. The two incorrect options describe clients who need coverage but not through Medicare: the young part-time worker above the Medicaid line is the classic working poor, who may qualify for subsidized Marketplace coverage, and the low-income pregnant client is a Medicaid population, since pregnant individuals qualify at higher income levels than other adults. Matching the client to the right program is what converts this knowledge into an effective referral."
 },
 {
  "id": "n525e2s1q11",
  "exam": 1,
  "topic": "Medicare Part D",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A client enrolled in Medicare Part D states, 'Now that I have drug coverage, my prescriptions will not cost me anything.' Which response by the nurse is accurate?",
  "options": [
   "That is correct once the client reaches the annual out-of-pocket maximum at the start of the year",
   "That is correct, because Part D eliminates all medication costs for beneficiaries",
   "Part D covers all medications in full, but only those on the plan's formulary",
   "Part D still involves a monthly plan premium, an annual deductible, and coinsurance until the annual out-of-pocket limit is reached"
  ],
  "correct": [
   3
  ],
  "rationale": "Part D is private prescription coverage that reduces, not eliminates, cost: beneficiaries pay a monthly premium, an annual deductible of up to about $615, and a standard 25% coinsurance until reaching an annual out-of-pocket maximum of roughly $2,100. The first option inverts the sequence - the out-of-pocket maximum is reached after substantial spending, not at the start of the year. The formulary option is the subtlest distractor because formularies are real and do restrict which drugs are covered, but even formulary drugs carry cost sharing. This matters clinically because unanticipated medication cost is a leading driver of nonadherence in older adults."
 },
 {
  "id": "n525e2s1q12",
  "exam": 1,
  "topic": "Medicaid",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is explaining how Medicaid works. Which statements are accurate? Select all that apply.",
  "options": [
   "It is a joint federal-state partnership funded by both levels of government",
   "Each state administers its own program, so names and rules differ, such as MassHealth in Massachusetts",
   "In expansion states, adults earning up to 138% of the federal poverty level are eligible",
   "Pregnant individuals qualify at higher income levels than other adults",
   "Eligibility rules are identical in every state because the program is federally administered"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Medicaid is jointly funded by federal and state government but administered individually by each state, which sets its program name and much of its eligibility detail - MassHealth being the Massachusetts example. Eligibility turns on income plus eligibility category plus state of residence, and pregnant individuals, children, and people with qualifying disabilities qualify at more generous thresholds. In expansion states the limit for adults is 138% of the federal poverty level. The final option contradicts the defining feature of the program, and that state-by-state variation is exactly why a coverage gap exists in the ten states that have not fully expanded."
 },
 {
  "id": "n525e2s1q13",
  "exam": 1,
  "topic": "Coverage gap",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A 48-year-old in a state that has not expanded Medicaid works 30 hours weekly at a small business with no health benefits. The client's income is above the state's Medicaid limit but too low to afford a Marketplace plan even with subsidies. How should the nurse characterize this client's situation?",
  "options": [
   "The client is eligible for Medicare because of the low income level",
   "The client is ineligible for coverage because employment disqualifies a person from public programs",
   "The client should enroll in COBRA to obtain affordable coverage",
   "The client falls into the coverage gap created when a state does not expand Medicaid, a recognized barrier to care"
  ],
  "correct": [
   3
  ],
  "rationale": "This is the coverage gap: in non-expansion states, adults whose income exceeds the state's restrictive Medicaid threshold but remains too low to manage Marketplace costs have no affordable option - a structural barrier, not a personal failing, and the clearest example of the working poor. Medicare eligibility depends on age 65, 24 months of SSDI, ESRD, or ALS, not on low income. Employment does not disqualify anyone from public programs; many Medicaid enrollees work. COBRA requires prior employer-sponsored coverage to continue and obligates the person to pay the full premium themselves, making it both inapplicable and unaffordable here."
 },
 {
  "id": "n525e2s1q14",
  "exam": 1,
  "topic": "Loss of employment",
  "type": "sata",
  "bloom": "Application",
  "stem": "A 24-year-old reports losing a job that provided health insurance last week and asks about options for coverage. Which options should the nurse discuss? Select all that apply.",
  "options": [
   "COBRA, which continues the same employer plan but requires paying the full premium",
   "The ACA Marketplace, since job loss is a qualifying life event opening a 60-day special enrollment period",
   "Medicaid, if income has now dropped to or below the eligibility threshold",
   "Rejoining a parent's health plan, since the client is under age 26",
   "Medicare, which provides immediate coverage after involuntary job loss"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "All four correct options apply to this client. COBRA preserves the identical plan for up to 18 months but the person pays the entire premium, which is why it is often unaffordable. Job loss is a qualifying life event that opens a 60-day special enrollment period on the Marketplace, where subsidies are based on the client's new, lower income. A sharp income drop may now qualify the client for Medicaid. At 24, the client can also rejoin a parent's plan under the ACA's age-26 provision. Medicare has no job-loss pathway - it requires age 65, 24 months of SSDI, ESRD, or ALS. The 60-day window makes this time-critical teaching."
 },
 {
  "id": "n525e2s1q15",
  "exam": 1,
  "topic": "EMTALA",
  "type": "mcq",
  "bloom": "Application",
  "stem": "An uninsured client arrives at the emergency department with crushing chest pain. A registration clerk suggests the client be asked for payment arrangements before being seen. Which action by the nurse is correct?",
  "options": [
   "Support the clerk, since the hospital may require financial arrangements before nonemergency treatment",
   "Transfer the client to a public hospital, since private hospitals are not obligated to screen uninsured clients",
   "Document that the client declined care if payment arrangements cannot be made",
   "Proceed with the medical screening examination, because EMTALA prohibits delaying screening or stabilization to ask about payment or insurance"
  ],
  "correct": [
   3
  ],
  "rationale": "The Emergency Medical Treatment and Active Labor Act governs all Medicare-participating hospitals and requires a medical screening examination to determine whether an emergency medical condition or active labor exists; if one does, the hospital must provide stabilizing treatment or arrange an appropriate transfer. Facilities may not delay screening or stabilization to inquire about payment or insurance status. Crushing chest pain is the opposite of nonemergency, so the first option misapplies a rule about elective care. Transferring before screening and stabilizing violates the statute - private hospitals must stabilize even though they are not obliged to admit non-emergent elective cases. Documenting refusal would be falsification."
 },
 {
  "id": "n525e2s1q16",
  "exam": 1,
  "topic": "Barriers to care",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A public health nurse is identifying which community members are most likely to face barriers to receiving health care. Which groups should the nurse prioritize? Select all that apply.",
  "options": [
   "The working poor, whose income is just above the Medicaid threshold but who cannot afford private insurance",
   "Employees of small businesses that do not offer health insurance",
   "Undocumented immigrants, who are legally barred from federal insurance programs",
   "Young adults who age off a parent's policy at 26 and hold entry-level or part-time jobs without benefits",
   "Residents of care deserts, including medical, pharmacy, and maternal care deserts",
   "Adults aged 65 and older who are enrolled in Medicare Parts A and B"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The working poor, small-business employees, undocumented immigrants, young adults aging off parental plans, and people in care deserts all face documented access barriers, as do racial and ethnic minorities - Hispanic individuals have the highest uninsured rates, followed by Native Hawaiian and Pacific Islander and Black individuals - and low-income adults in non-expansion states. Medicare beneficiaries are the comparison group: they have near-universal coverage for the services Parts A and B include, which is why insurance barriers are far lower for them, though gaps for dental, vision, hearing, and long-term custodial care remain real and can still create cost barriers."
 },
 {
  "id": "n525e2s1q17",
  "exam": 1,
  "topic": "Undocumented and refugee access",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A public health nurse is counseling two families: one with undocumented immigration status and one that arrived as refugees. Which statement about their program eligibility is accurate?",
  "options": [
   "The refugee family may participate in programs such as Medicaid, CHIP, SNAP, and TANF, while the undocumented family is generally limited to state safety-net coverage and free clinics",
   "Both families are ineligible for all public programs because neither holds citizenship",
   "Both families are eligible for Medicaid and Medicare on the same terms as citizens",
   "The undocumented family qualifies for Medicaid, but the refugee family must wait five years"
  ],
  "correct": [
   0
  ],
  "rationale": "Refugees are lawfully present and eligible to participate in various programs including Medicaid, CHIP, SNAP, and TANF. Undocumented individuals are legally barred from federal insurance programs and so are not eligible for Medicaid or Medicare, but many states provide a safety net covering a limited number of visits, and larger cities commonly have free clinics - which is the practical referral a nurse can make. Treating both families as wholly ineligible would withhold benefits the refugee family is entitled to, and the final option reverses the two groups entirely. Knowing this distinction is what prevents a nurse from either over-promising or under-referring."
 },
 {
  "id": "n525e2s1q18",
  "exam": 1,
  "topic": "Funded programs",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A nurse assesses a 4-month-old whose mother reports diluting formula with extra water to make the can last longer. The infant's weight has fallen below the 5th percentile. Which referral is the highest priority?",
  "options": [
   "Head Start, for early childhood education and developmental screening",
   "TANF, for cash assistance and job skills training",
   "WIC, for supplemental nutritious food, nutrition counseling, and feeding support",
   "CHIP, for low-cost comprehensive health and dental insurance"
  ],
  "correct": [
   2
  ],
  "rationale": "WIC provides supplemental nutritious foods, nutrition counseling, breastfeeding support, and clinic referrals to low-income pregnant, postpartum, and breastfeeding women, infants, and children up to age 5 who are at nutritional risk - and diluting formula with faltering growth is a textbook presentation of food insecurity in an infant, with the added danger that over-dilution causes water intoxication and hyponatremia. Head Start serves children aged 3 to 5, so a 4-month-old is ineligible; Early Head Start covers birth to age 3. TANF addresses severe financial distress and may be appropriate later, and CHIP covers insurance rather than food. The immediate threat is nutritional."
 },
 {
  "id": "n525e2s1q19",
  "exam": 1,
  "topic": "Funded programs",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is matching families to appropriate assistance programs. Which pairings are correct? Select all that apply.",
  "options": [
   "A family with an eviction notice and a utility shutoff warning to TANF",
   "A 3-year-old with untreated speech delay and severe dental caries whose family is low income to Head Start",
   "An uninsured 10-year-old whose family income is above the Medicaid limit but cannot afford private coverage to CHIP",
   "A low-income household reporting that an older adult skips meals to afford prescriptions to SNAP",
   "A pregnant client at 20 weeks seeking preschool education services to Head Start"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "TANF provides state-run cash assistance, emergency housing, energy relief, childcare help, and job training to impoverished families with dependent children. Head Start promotes school readiness for low-income children aged 3 to 5 and includes medical and dental checks, which fits unaddressed developmental and dental needs. CHIP covers uninsured children under 18 whose family income exceeds Medicaid limits, with cost sharing capped at 5% of household income. SNAP provides monthly EBT grocery benefits, and an older adult choosing between food and medication is food insecure. The final pairing is wrong on age: a pregnant client belongs to Early Head Start, which serves low-income pregnant women, infants, and toddlers to age 3."
 },
 {
  "id": "n525e2s1q20",
  "exam": 1,
  "topic": "Public health system levels",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A local public health nurse needs national surveillance data to compare the city's diabetes mortality with national rates. Which level of the public health system is the appropriate source?",
  "options": [
   "The local health department, which enforces local health codes",
   "The federal level, which establishes national guidelines and conducts nationwide surveillance through resources such as CDC WONDER",
   "The state level, which manages community clinics and conducts contact tracing",
   "The hospital system, which compiles all national mortality statistics"
  ],
  "correct": [
   1
  ],
  "rationale": "The three levels have distinct functions: the federal level sets national guidelines and conducts nationwide surveillance through tools such as CDC WONDER; the state oversees funding, health regulations, and the compilation of vital statistics; and local departments direct disease surveillance, enforce local health codes, and manage community clinics. National comparison data therefore come from the federal level. The third option swaps state and local responsibilities - community clinics and contact tracing are local functions. Hospitals contribute data upward through reporting but do not compile national statistics, and relying on one institution's data would reproduce the sampling problem that population-level sources exist to solve."
 },
 {
  "id": "n525e2s1q21",
  "exam": 1,
  "topic": "Partnerships across levels",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A local public health nurse states, 'I work at the community level, so I can run our outbreak response independently without involving state or federal partners.' How should the nurse manager respond?",
  "options": [
   "The nurse is correct, because outbreak response is legally a local responsibility",
   "The nurse is correct, provided the outbreak involves fewer than ten cases",
   "The nurse is incorrect, because partnership across local, state, and federal levels is essential - each level contributes distinct authority, data, and resources",
   "The nurse is incorrect, because all outbreak decisions must be made at the federal level"
  ],
  "correct": [
   2
  ],
  "rationale": "Partnerships across federal, state, and local systems are essential to public health practice because each level holds something the others lack: federal guidelines and nationwide surveillance, state funding, regulation, and vital statistics, and local surveillance, code enforcement, and clinic operations. A local department acting alone forfeits comparison data, laboratory capacity, funding, and legal authority that may be needed. The case-count option invents a threshold that does not exist, and notifiable conditions must be reported regardless of number. The final option overcorrects: local departments do direct local response, so the answer is collaboration, not federal control."
 },
 {
  "id": "n525e2s1q22",
  "exam": 1,
  "topic": "Public health nursing principles",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A city has funding to improve childhood immunization rates. One neighborhood has 94% coverage and good clinic access; another has 61% coverage, no pharmacy, and no bus route to the clinic. The health officer proposes giving each neighborhood identical funding and an identical clinic schedule. Which principle should guide the nurse's recommendation?",
  "options": [
   "Health equity, because resources should be tailored to population need in order to overcome systemic barriers and produce fair outcomes",
   "Equality, because identical distribution treats both neighborhoods impartially",
   "Veracity, because the health officer has disclosed the funding formula",
   "Fidelity, because the department promised to serve both neighborhoods"
  ],
  "correct": [
   0
  ],
  "rationale": "Health equity means providing tailored resources and support based on population need to overcome systemic barriers, and it is explicitly distinguished from equality, which provides identical resources regardless of need. Identical funding for neighborhoods with 94% and 61% coverage will preserve the gap, because the second neighborhood's barriers are transportation and pharmacy access rather than schedule availability. This also engages distributive justice, the fair and equitable distribution of public health benefits with priority to vulnerable groups. Veracity is truth-telling and fidelity is keeping promises; both are real principles that simply do not govern an allocation decision."
 },
 {
  "id": "n525e2s1q23",
  "exam": 1,
  "topic": "Public health nursing principles",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A health department must choose between two programs with equal cost. Program A would prevent an estimated 400 cases of influenza across the county; Program B would prevent an estimated 40 cases. Which ethical concept most directly supports choosing Program A?",
  "options": [
   "Autonomy",
   "Efficiency, maximizing public health benefit to achieve the greatest good for the greatest number with available resources",
   "Veracity",
   "Non-maleficence"
  ],
  "correct": [
   1
  ],
  "rationale": "Efficiency in public health means maximizing benefit to achieve the greatest good for the greatest number using the resources available, which is the utilitarian reasoning that favors the program preventing ten times as many cases at equal cost. Autonomy concerns individual self-determination, veracity is truth-telling, and non-maleficence is avoiding harm - all genuine principles, none of which adjudicates between two beneficial programs. The important caveat is that efficiency alone is not sufficient: if Program A reached only the already well-served while Program B reached a community bearing a disproportionate burden, distributive justice and health equity would pull against the raw numbers, and the nurse would need to weigh both."
 },
 {
  "id": "n525e2s1q24",
  "exam": 1,
  "topic": "Secondary prevention timing",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nurse is planning when secondary prevention measures will be most effective for a chronic disease. Which point in the disease course is the best target?",
  "options": [
   "During the early pathogenesis, subclinical, or asymptomatic stage, before clinical signs or permanent damage appear",
   "Before any exposure to the causative agent has occurred",
   "After permanent organ damage is established, to limit further disability",
   "At the end of treatment, to evaluate whether the intervention worked"
  ],
  "correct": [
   0
  ],
  "rationale": "Secondary prevention targets the early pathogenesis, subclinical, or asymptomatic stage - the window in which disease is present but not yet clinically apparent, so screening can detect it and prompt intervention can halt progression before permanent damage. Acting before any exposure is primary prevention, and intervening after permanent damage to limit disability is tertiary prevention. The final option describes summative program evaluation rather than a level of prevention. Mapping the three levels onto the natural history of disease is what tells a nurse whether to be educating, screening, or rehabilitating for a given population."
 },
 {
  "id": "n525e2s1q25",
  "exam": 1,
  "topic": "Prioritizing community problems",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is deciding which problems to address in a community health improvement plan. Which criteria should guide the prioritization? Select all that apply.",
  "options": [
   "The magnitude and prevalence of the problem - how many community members are affected",
   "The severity and impact, including premature mortality, disability, and infant or maternal mortality",
   "Community urgency and what stakeholders identify as their highest priority",
   "Feasibility, including available evidence-based interventions, resources, and community partnerships",
   "Whichever problem can be addressed without consulting community stakeholders, to speed implementation"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Prioritization synthesizes primary data - windshield surveys, community meetings, informant interviews - with secondary epidemiologic data from sources such as CDC WONDER, state vital statistics, and local morbidity reports, then weighs magnitude and prevalence, severity and impact, community urgency and perception, and feasibility and interventional potential. The final option inverts a core requirement: community engagement and collaborative participation are the essential ingredients of community-centered practice, and bypassing stakeholders to move faster reliably produces programs that are not used, which is slower in the end and wastes the resources it was meant to protect."
 },
 {
  "id": "n525e2s2q01",
  "exam": 2,
  "topic": "Purpose of epidemiology",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nursing student asks what the goal of epidemiology is. Which response by the nurse epidemiologist is most accurate?",
  "options": [
   "To diagnose and treat individual clients who present with communicable disease",
   "To study the occurrence and distribution of health-related conditions in populations and apply the findings to control health problems",
   "To deliver direct nursing care to the members of a population who are already ill",
   "To determine which individual clients are most likely to adhere to a treatment regimen"
  ],
  "correct": [
   1
  ],
  "rationale": "Epidemiology is the study of the occurrence and distribution of health-related disease among specified populations and the application of that study to the control of health problems. Its purposes are to determine the causes of health and disease in a population, identify the social determinants of health and disease, assess prevention strategies, and monitor health trends, with the goal of preventing and limiting the consequences of disease or disability and maximizing health. The defining feature is that treatment is not the focus - the first and third options describe individual clinical care, which is the unit of analysis epidemiology deliberately moves beyond."
 },
 {
  "id": "n525e2s2q02",
  "exam": 2,
  "topic": "Nurse epidemiologist role",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse epidemiologist has compiled two years of community asthma data. Which uses of these data are appropriate to the role? Select all that apply.",
  "options": [
   "Detecting outbreaks and tracking baseline disease trends over time",
   "Targeting interventions and allocating scarce public health resources",
   "Performing risk communication to inform providers, local leadership, the media, and the public",
   "Evaluating the effectiveness of community interventions and health policies",
   "Prescribing inhaled corticosteroids for individual community members found to be symptomatic"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Nurse epidemiologists use data to detect outbreaks and track baseline trends, target interventions and allocate limited resources, perform risk communication to providers, leadership, media, and the public, and evaluate whether interventions and policies worked. Epidemiology also gives nurses a systematic framework for community assessment, identifying case patterns, targeting high-risk groups, and eliminating systemic barriers to disease control. Prescribing is the trap: it is individual clinical treatment requiring prescriptive authority, and it falls outside both the epidemiologic role and the population unit of analysis - the epidemiologist's contribution is identifying why a neighborhood has excess asthma, not treating one case of it."
 },
 {
  "id": "n525e2s2q03",
  "exam": 2,
  "topic": "Epidemiologic triangle",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is classifying findings from a tuberculosis outbreak investigation in a homeless shelter using the epidemiologic triangle. Which findings represent ENVIRONMENT factors? Select all that apply.",
  "options": [
   "Overcrowded sleeping quarters with beds less than three feet apart",
   "Poor ventilation with no negative-pressure capability",
   "Residents' limited access to primary care and lack of insurance",
   "Mycobacterium tuberculosis and its resistance to first-line drugs",
   "Residents' HIV status and nutritional deficiencies"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Environment is the surroundings that sustain the host and permit transmission, and it has both a physical dimension - geography, climate, water and food supply, housing, sanitation, ventilation, overcrowding, and the presence of reservoirs or vectors - and a social dimension including access to health care, poverty, population density, social support, and workplace risk. Crowding, ventilation, and access to care are therefore all environment. The organism and its drug resistance are the agent, whose characteristics include toxicity, virulence, infectivity, survival outside the host, and antibiotic susceptibility. HIV status and nutrition are host factors, which also include age, sex, genetics, immunization history, and prior exposure."
 },
 {
  "id": "n525e2s2q04",
  "exam": 2,
  "topic": "Epidemiologic triangle",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "Thirty staff members attend the same meeting in a poorly ventilated room with a colleague who has influenza. Eight develop influenza and twenty-two do not. A nurse is asked why only some became ill. Which explanation best applies the epidemiologic triangle?",
  "options": [
   "Host susceptibility, micro-environmental differences, and variation in the dose received all modified whether exposure resulted in disease",
   "The agent must have mutated partway through the meeting, infecting only those exposed later",
   "Those who became ill were exposed to a different pathogen than those who did not",
   "Disease occurrence after a shared exposure is random and cannot be explained by the triangle"
  ],
  "correct": [
   0
  ],
  "rationale": "Disease requires a favorable interaction among agent, host, and environment, so a single shared exposure produces varied outcomes. Host variations include immune function from prior infection or vaccination, underlying conditions, age, genetics, stress, and nutritional status. Micro-environmental differences matter: localized airflow, ventilation, distance from the source, and duration of exposure in that space. Agent interaction varies because the actual pathogen dose received differs by individual behavior and conditions. Mid-meeting mutation and a second pathogen are inventions not supported by the scenario, and calling the pattern random abandons the analytic reasoning that lets a nurse intervene by breaking a leg of the triangle."
 },
 {
  "id": "n525e2s2q05",
  "exam": 2,
  "topic": "Breaking the triangle",
  "type": "sata",
  "bloom": "Application",
  "stem": "A public health nurse plans interventions for a measles outbreak by targeting each leg of the epidemiologic triangle. Which interventions target the HOST? Select all that apply.",
  "options": [
   "Administering measles vaccine to susceptible contacts to build active immunity",
   "Providing post-exposure prophylaxis to exposed susceptible individuals",
   "Health education to improve recognition of symptoms and self-isolation behavior",
   "Placing infected clients in negative-pressure airborne isolation rooms",
   "Sterilizing contaminated equipment and surfaces"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Public health interventions control disease by breaking a leg of the triangle. Host-directed measures build or supplement the host's defenses and change host behavior: vaccination to build active immunity, post-exposure prophylaxis, nutrition, and health education. Negative-pressure isolation is an environment-directed measure, alongside clean water systems, sanitation, and reducing overcrowding. Sterilization targets the agent, as do antibiotics and antivirals. All five are legitimate outbreak interventions, so the discrimination required is which leg each one breaks - and recognizing that lets a nurse diversify a response rather than relying on a single point of attack."
 },
 {
  "id": "n525e2s2q06",
  "exam": 2,
  "topic": "Descriptive vs analytic epi",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "After a church picnic, a nurse records that 40 of 100 attendees developed vomiting and diarrhea the next day, noting their ages, the time symptoms began, and where each person sat. Which type of epidemiology does this activity represent?",
  "options": [
   "Descriptive epidemiology, because it answers who, where, and when in order to detect patterns and generate hypotheses",
   "Analytic epidemiology, because it tests a hypothesis about the cause of the illness",
   "Analytic epidemiology, because the nurse is comparing attendees who became ill with those who did not",
   "Neither, because an outbreak investigation is a surveillance activity rather than epidemiology"
  ],
  "correct": [
   0
  ],
  "rationale": "Descriptive epidemiology answers who, where, and when - person, place, and time - by observing, organizing, and describing health data to detect patterns and formulate hypotheses, which is exactly what tallying cases with ages, onset times, and seating accomplishes. Analytic epidemiology answers how and why by testing hypotheses: comparing the 50 attendees who ate potato salad, of whom 35 became ill, against the 50 who did not, of whom 5 became ill, to calculate attack rates and confirm the vehicle. The third option describes analytic work the nurse has not yet done - merely counting cases is not yet a comparison. Describing always precedes explaining."
 },
 {
  "id": "n525e2s2q07",
  "exam": 2,
  "topic": "Descriptive vs analytic epi",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse investigating a gastroenteritis outbreak compares attack rates between attendees who ate a specific dish and those who did not, then calculates the strength of the association. Which activity and purpose does this represent?",
  "options": [
   "Descriptive epidemiology, to organize data by person, place, and time",
   "Passive surveillance, to collect routine reports from providers",
   "Syndromic surveillance, to monitor symptom clusters before laboratory confirmation",
   "Analytic epidemiology, to test a hypothesis and identify the causal factor"
  ],
  "correct": [
   3
  ],
  "rationale": "Analytic epidemiology answers how and why, testing hypotheses and analyzing associations to determine causal factors and risk relationships using designs such as cohort and case-control studies - comparing attack rates between exposed and unexposed groups is its defining operation. Descriptive epidemiology would have produced the case counts that generated the hypothesis in the first place. Passive surveillance is the routine flow of provider and laboratory reports into health agencies, and syndromic surveillance monitors symptom clusters or pre-diagnostic data before laboratory confirmation. Both surveillance types detect that something is happening; analytic epidemiology establishes what caused it."
 },
 {
  "id": "n525e2s2q08",
  "exam": 2,
  "topic": "Incidence vs prevalence",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A new direct-acting antiviral cures hepatitis C in 8 to 12 weeks. Over three years, the number of new hepatitis C infections in a county stays roughly constant while the number of people living with hepatitis C falls sharply. How should the nurse interpret this pattern?",
  "options": [
   "Incidence is unchanged while prevalence has fallen, because effective cure shortens disease duration and empties the existing case pool",
   "Both incidence and prevalence have fallen, indicating successful primary prevention",
   "Incidence has fallen while prevalence is unchanged, because treatment prevents new transmission",
   "The pattern is impossible, because prevalence cannot fall unless incidence falls first"
  ],
  "correct": [
   0
  ],
  "rationale": "Incidence counts new cases arising over a period and measures risk of acquiring disease; prevalence counts all existing cases and measures the total burden. The bathtub analogy clarifies this: incidence is the faucet, prevalence is the standing water, and recovery or death is the drain. Curing people opens the drain without touching the faucet, so prevalence falls while incidence holds steady - the signature of a high-incidence, short-duration condition. The claim that prevalence cannot fall independently misunderstands the relationship. Note the clinical corollary: unchanged incidence means transmission prevention still needs work even as the treated population shrinks."
 },
 {
  "id": "n525e2s2q09",
  "exam": 2,
  "topic": "Incidence vs prevalence",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse reviews two conditions in the same community. Condition A has high incidence but very low prevalence; condition B has moderate incidence but very high prevalence. Which interpretation is most accurate?",
  "options": [
   "Condition A is more dangerous, because high incidence always indicates higher mortality",
   "Condition A is likely short in duration through rapid cure or high fatality, while condition B is likely a long-duration chronic condition",
   "Condition B has a higher risk of acquisition, because prevalence measures risk",
   "The two conditions must have the same duration, since both have measurable incidence"
  ],
  "correct": [
   1
  ],
  "rationale": "A disease with high incidence but short duration - whether because it is cured quickly or kills quickly - produces low prevalence, since cases leave the pool as fast as they enter. A chronic disease with low or moderate incidence but long duration, such as heart failure or diabetes, accumulates cases and produces high prevalence. The first option is wrong because high incidence alone does not indicate mortality; rapid cure produces the same pattern, which is why the nurse must ask which drain is operating. The third option reverses the metrics: incidence measures risk of acquisition, prevalence measures existing burden on the population and health system."
 },
 {
  "id": "n525e2s2q10",
  "exam": 2,
  "topic": "Endemic, epidemic, pandemic",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A county normally reports 8 to 12 cases of pertussis each year. This year 73 cases are reported in a single school district within two months. How should the nurse characterize this occurrence?",
  "options": [
   "Endemic, because pertussis is consistently present in this county every year",
   "Epidemic, because case counts clearly exceed the expected level for this region",
   "Pandemic, because the cases are clustered in a defined geographic area",
   "Sporadic, because the cases occurred in a single district rather than countywide"
  ],
  "correct": [
   1
  ],
  "rationale": "Endemic describes an expected, ongoing level of disease in one area - the usual 8 to 12 cases. Epidemic means excess cases above that expected baseline in a region, which 73 cases in two months plainly represents. Pandemic means the disease is present across many countries or continents, so a single district cannot be pandemic; the third option mistakes clustering for pandemic spread. The key reasoning move is that these terms are defined relative to the expected baseline rather than by absolute numbers: 73 cases is an epidemic here precisely because roughly 10 was normal, and the same count elsewhere might be endemic."
 },
 {
  "id": "n525e2s2q11",
  "exam": 2,
  "topic": "Surveillance definition",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nurse is asked to define public health surveillance. Which description is most complete?",
  "options": [
   "The ongoing collection, analysis, interpretation, and dissemination of specific health data for use in public health practice",
   "The laboratory confirmation of reportable disease cases within a jurisdiction",
   "The one-time collection of community health data to create a community assessment",
   "The investigation of a single disease outbreak from index case to source identification"
  ],
  "correct": [
   0
  ],
  "rationale": "Surveillance is the ongoing collection, analysis, interpretation, and dissemination of specific health data for use in public health, and it matters because it generates knowledge of disease and outbreak patterns. Three features distinguish it: it is continuous rather than one-time, it extends past collection through analysis and interpretation to dissemination, and its purpose is action. Laboratory confirmation supplies data into a surveillance system but is not the system. A community assessment is a periodic snapshot. An outbreak investigation is usually triggered by surveillance but is a discrete response - surveillance is the standing capacity that detects the signal in the first place."
 },
 {
  "id": "n525e2s2q12",
  "exam": 2,
  "topic": "Passive vs active surveillance",
  "type": "mcq",
  "bloom": "Application",
  "stem": "During a suspected measles outbreak, public health nurses begin telephoning every regional emergency department each morning to ask about clients presenting with fever and rash, and they review clinical records on site. Which type of surveillance is this?",
  "options": [
   "Active surveillance, because public health staff are proactively seeking out cases",
   "Passive surveillance, because the nurses are gathering reports from providers",
   "Syndromic surveillance, because the nurses are asking about fever and rash",
   "Sentinel surveillance, because only selected emergency departments participate"
  ],
  "correct": [
   0
  ],
  "rationale": "Active surveillance means public health nurses or epidemiologists proactively contact providers, visit health centers, or examine clinical records to search for cases - highly accurate and complete but resource-intensive and costly, which is why it is reserved for outbreaks. Passive surveillance is the opposite flow: providers and laboratories routinely send mandatory or voluntary reports to the agency, which is cheap and simple but vulnerable to underreporting. The syndromic option is genuinely tempting because the nurses are asking about a symptom cluster, and this does function as active syndromic surveillance - but the feature the question targets is who initiates the data flow, and here it is the health department."
 },
 {
  "id": "n525e2s2q13",
  "exam": 2,
  "topic": "Passive surveillance",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A hospital laboratory's information system automatically transmits every positive Salmonella, tuberculosis, and chlamydia result to the state health department without any action by health department staff. Which type of surveillance does this represent, and what is its principal limitation?",
  "options": [
   "Passive surveillance; its limitation is vulnerability to underreporting",
   "Active surveillance; its limitation is high cost",
   "Syndromic surveillance; its limitation is the absence of laboratory confirmation",
   "Active surveillance; its limitation is delayed reporting"
  ],
  "correct": [
   0
  ],
  "rationale": "Passive surveillance has providers and laboratories routinely sending reports to public health agencies - here automated, requiring no agency effort. It is low cost and simple to run, and its principal weakness is underreporting: the system captures only what someone chose or remembered to report, so cases that never reached care, were never tested, or were never transmitted stay invisible. Active surveillance, by contrast, is costly because the health department does the seeking. Syndromic surveillance monitors pre-diagnostic symptom data; this system reports confirmed laboratory results, which is the opposite. Knowing that passive data undercount is what keeps a nurse from reading a low case count as reassurance."
 },
 {
  "id": "n525e2s2q14",
  "exam": 2,
  "topic": "Syndromic surveillance",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is monitoring a syndromic surveillance system for early signs of an outbreak. Which data sources are appropriate to this type of surveillance? Select all that apply.",
  "options": [
   "Emergency department chief complaints, such as a sudden spike in acute gastrointestinal illness",
   "Over-the-counter pharmaceutical sales, such as increased purchases of antidiarrheals or antipyretics",
   "School and workplace absenteeism records",
   "Emergency department visits for fever and cough tracked as influenza-like illness during flu season",
   "Confirmed culture results reported by the state public health laboratory"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Syndromic surveillance is real-time or near-real-time monitoring of clinical indicators, symptom clusters, or pre-diagnostic data before laboratory confirmation, developed substantially in response to bioterrorism concerns so that outbreaks could be detected faster. Its inputs are emergency department chief complaints, over-the-counter medication sales, absenteeism, and influenza-like illness tracking - the classic example. Confirmed culture results are the trap: they are genuine surveillance data, but confirmation is precisely what syndromic systems operate without. The tradeoff is speed against specificity, so a syndromic signal prompts investigation rather than a conclusion."
 },
 {
  "id": "n525e2s2q15",
  "exam": 2,
  "topic": "Notifiable diseases",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nurse is explaining notifiable diseases to a new graduate. Which statement is accurate?",
  "options": [
   "Notifiable diseases are those a provider may voluntarily report if the case seems clinically unusual",
   "Notifiable diseases are conditions requiring mandatory quarantine of the affected client",
   "Notifiable diseases are those reported only after an outbreak has been formally declared",
   "Notifiable diseases are conditions legally required to be reported to health authorities, supporting morbidity monitoring and prompt outbreak response"
  ],
  "correct": [
   3
  ],
  "rationale": "Notifiable diseases are infectious or communicable conditions legally required to be reported to health authorities such as local health departments, state agencies, and national databases including the National Notifiable Diseases Surveillance System. Mandatory reporting enables ongoing monitoring of morbidity trends and prompt outbreak response. The word is legally required, not voluntary, which makes the first option wrong and has direct consequences for the nurse's own accountability. Reportable is not the same as quarantinable - chlamydia is notifiable but no one is quarantined for it. And reporting is what allows an outbreak to be detected, so waiting for a declaration inverts the sequence."
 },
 {
  "id": "n525e2s2q16",
  "exam": 2,
  "topic": "Quarantinable diseases",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is reviewing which conditions meet the characteristics of a federally quarantinable communicable disease. Which conditions qualify? Select all that apply.",
  "options": [
   "Cholera",
   "Infectious tuberculosis",
   "Viral hemorrhagic fever such as Ebola",
   "Smallpox",
   "Pandemic-potential influenza strains",
   "Seasonal viral gastroenteritis",
   "Essential hypertension"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Quarantinable diseases share three characteristics: high communicability with rapid person-to-person transmission, high potential for severe morbidity or mortality, and a public health threat grave enough to justify legally enforceable movement restrictions. The official list includes cholera, diphtheria, infectious tuberculosis, plague, smallpox, yellow fever, viral hemorrhagic fevers such as Ebola, severe acute respiratory syndromes including SARS and COVID-19, and pandemic-potential influenza. Conditions lacking extreme fatality risk, having low or zero transmissibility, or manageable through routine care do not qualify - seasonal gastroenteritis is mild and self-limiting, and hypertension is noncommunicable, so no restriction of movement could be justified."
 },
 {
  "id": "n525e2s2q17",
  "exam": 2,
  "topic": "Outbreak data sources",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is investigating a cluster of foodborne illness at a community event. Which data sources are appropriate for this investigation? Select all that apply.",
  "options": [
   "Interviews with attendees about what foods they ate and when symptoms began",
   "Laboratory results from stool specimens submitted by ill attendees",
   "The event's food handling records, supplier invoices, and refrigeration logs",
   "Emergency department and urgent care records for attendees who sought care",
   "Reportable disease records held by the local and state health departments",
   "The nurse's assumption about which dish was responsible, used to focus the investigation on that item alone"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Outbreak investigation draws on case interviews establishing exposures and onset times, laboratory confirmation identifying the agent, environmental and food handling records tracing the vehicle and any temperature abuse, clinical records from facilities that treated cases, and existing reportable disease data. The final option is the methodological error the whole approach guards against: anchoring on one suspected food and collecting only confirming evidence is confirmation bias, and it will miss the actual vehicle if the hunch is wrong. Descriptive work establishes who, where, and when across all exposures first; analytic comparison of attack rates between exposed and unexposed then identifies the vehicle."
 },
 {
  "id": "n525e2s2q18",
  "exam": 2,
  "topic": "Nurse role in surveillance",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A public health nurse is describing the nurse's role in surveillance and outbreak investigation. Which activities belong to that role? Select all that apply.",
  "options": [
   "Reporting notifiable conditions to the health department as legally required",
   "Conducting contact tracing and notifying exposed individuals",
   "Collecting and analyzing case data to characterize an outbreak by person, place, and time",
   "Communicating risk and prevention guidance to providers, community leaders, and the public",
   "Evaluating whether control measures reduced transmission",
   "Withholding case information from the health department until the diagnosis is certain, to avoid causing alarm"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The nurse's surveillance role spans mandated reporting, contact tracing and notification, data collection and descriptive analysis, risk communication, and evaluation of control measures - mapping onto the national core competencies for public health nurses and onto all three core functions of assessment, policy development, and assurance. The final option describes a failure with real consequences: reporting requirements for notifiable conditions are legal obligations triggered by suspicion rather than certainty, and delay forfeits the time during which contact tracing and prophylaxis can still interrupt transmission. Avoiding alarm is not a justification for withholding a mandated report."
 },
 {
  "id": "n525e2s2q19",
  "exam": 2,
  "topic": "Active vs passive immunity",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client steps on a contaminated nail and receives both tetanus immune globulin and tetanus toxoid vaccine at the same visit. The client asks why two injections were needed. Which explanation is most accurate?",
  "options": [
   "Both products provide active immunity; giving two doubles the level of protection",
   "The immune globulin provides lifelong active immunity and the vaccine provides a temporary boost",
   "The immune globulin provides immediate passive protection with preformed antibodies, while the vaccine stimulates the client's own longer-lasting active immunity",
   "Both products provide passive immunity; the second ensures protection if the first is ineffective"
  ],
  "correct": [
   2
  ],
  "rationale": "Passive immunity transfers preformed antibodies directly into the host - rabies, tetanus, and hepatitis B immune globulins are the artificial examples, and maternal IgG across the placenta or IgA in breast milk the natural ones. It works immediately but is temporary, waning over weeks to months, because the host produces neither antibodies nor memory cells. Active immunity is the host's own response to an antigen, producing antibodies and memory T and B cells with long-lasting or lifelong protection, whether naturally through infection or artificially through vaccine. It takes time to develop. The wound needs protection now and later, which is why both are given - and the distractors all misassign which product does which."
 },
 {
  "id": "n525e2s2q20",
  "exam": 2,
  "topic": "Active vs passive immunity",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is classifying types of immunity. Which examples represent PASSIVE immunity? Select all that apply.",
  "options": [
   "Maternal IgG antibodies crossing the placenta to the fetus",
   "IgA antibodies transferred to an infant through breast milk",
   "Administration of rabies immune globulin after an animal bite",
   "Administration of hepatitis B immune globulin to a newborn of an infected mother",
   "Recovery from a natural varicella infection in childhood",
   "Immunization with the MMR vaccine"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Passive immunity means preformed antibodies come from another source, so the host's immune system does not produce antibodies or memory cells and protection is temporary. Natural passive immunity is maternal IgG across the placenta and IgA in breast milk; artificial passive immunity is injected immune globulin such as RIG, TIG, and HBIG. Recovery from natural varicella is natural active immunity, and MMR is artificial active immunity - both engage the host's own response and produce durable protection with memory. The practical consequence is timing: passive protection is immediate but fades, which is why an exposed newborn receives HBIG and the vaccine series together."
 },
 {
  "id": "n525e2s2q21",
  "exam": 2,
  "topic": "Vaccines and prevention level",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nurse administers influenza vaccine at a community clinic. Which level of prevention does this intervention represent?",
  "options": [
   "Secondary prevention, because the vaccine is given during the asymptomatic stage",
   "Tertiary prevention, because it limits complications in those who become infected",
   "It is not a level of prevention, because vaccination is a treatment rather than a preventive measure",
   "Primary prevention, because it prevents the disease before it starts by increasing host resistance"
  ],
  "correct": [
   3
  ],
  "rationale": "Vaccines are primary prevention: they act before disease occurs by increasing the host's resistance should exposure happen, alongside removing hazards and changing unsafe behaviors. The secondary prevention option is the most seductive because recipients are indeed asymptomatic when vaccinated, but secondary prevention means detecting disease already present in an asymptomatic person - screening, not immunizing. Tertiary prevention limits disability and progression in established disease. In epidemiologic terms, vaccination breaks the host leg of the triangle by building active immunity, and it does so upstream of any exposure, which is what makes it primary."
 },
 {
  "id": "n525e2s2q22",
  "exam": 2,
  "topic": "Population at risk",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse is calculating how widespread cervical cancer screening nonadherence is in a community of 50,000 residents. Which group constitutes the appropriate population at risk for this measure?",
  "options": [
   "All 50,000 residents of the community",
   "Residents with a cervix who fall within the recommended screening age range and have not had a total hysterectomy",
   "Only residents who have already been diagnosed with cervical cancer",
   "All adult residents aged 18 and older, regardless of anatomy or screening history"
  ],
  "correct": [
   1
  ],
  "rationale": "The population at risk is the group capable of developing the condition or benefiting from the intervention, and it forms the denominator for any meaningful rate. For cervical cancer screening that means people with a cervix within the recommended age range who have not had their cervix removed. Using all 50,000 residents dilutes the denominator with people who cannot develop the disease, which falsely depresses the rate and can hide a serious gap. Those already diagnosed are cases, not the at-risk group. The age-only option ignores anatomy and surgical history. Choosing the denominator correctly is what makes an epidemiologic comparison honest."
 },
 {
  "id": "n525e2s2q23",
  "exam": 2,
  "topic": "Vectors",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nurse is teaching about vector-borne disease. Which statement correctly defines a vector?",
  "options": [
   "Any inanimate object that transfers a pathogen between hosts, such as a contaminated doorknob",
   "The environmental reservoir in which a pathogen multiplies before infecting humans",
   "A living organism, such as a mosquito, tick, or flea, that transmits a pathogen from a reservoir or infected individual to a susceptible host",
   "Any mode of transmission by which a pathogen reaches a new host, including airborne spread"
  ],
  "correct": [
   2
  ],
  "rationale": "A vector is a living organism - mosquitoes, ticks, fleas - that carries an infectious pathogen from a reservoir or infected individual to a susceptible host. The defining feature is that it is alive, which separates it from a fomite, the inanimate contaminated object described in the first option, and from a reservoir, the habitat in which the agent normally lives and multiplies. The final option is too broad: airborne spread is a route, not a vector. In the epidemiologic triangle, biologic vectors are part of the environment, which is why the most effective interventions eliminate breeding habitat rather than targeting individual insects."
 },
 {
  "id": "n525e2s2q24",
  "exam": 2,
  "topic": "Vector protection",
  "type": "sata",
  "bloom": "Application",
  "stem": "A public health nurse is teaching a community about preventing mosquito-borne illness such as West Nile virus and eastern equine encephalitis. Which instructions should the nurse include? Select all that apply.",
  "options": [
   "Eliminate standing water from gutters, birdbaths, old tires, and buckets",
   "Apply an EPA-registered insect repellent containing DEET",
   "Wear light-colored long sleeves and long pants and tuck pant legs into socks outdoors",
   "Limit outdoor activity at dusk and dawn, when mosquitoes feed most actively",
   "Rely on citronella candles as the sole protective measure during outdoor gatherings"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Mosquito-borne illness prevention combines environmental control by eliminating standing water where mosquitoes breed, personal protection with EPA-registered DEET repellent and protective clothing including tucked pant legs, and behavioral precautions avoiding peak feeding at dusk and dawn. Eliminating breeding habitat is the most upstream measure because it reduces the vector population itself rather than individual encounters. Relying on citronella alone is inadequate - its protective radius is small and easily disrupted by air movement, and presenting it as sufficient would give a community false confidence while leaving the exposure essentially unchanged."
 },
 {
  "id": "n525e2s2q25",
  "exam": 2,
  "topic": "Bioterrorism preparedness",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A regional preparedness plan addresses a potential anthrax exposure event. Which medication should the nurse anticipate for post-exposure prophylaxis?",
  "options": [
   "Isoniazid",
   "Acyclovir",
   "Metronidazole",
   "Ciprofloxacin"
  ],
  "correct": [
   3
  ],
  "rationale": "Ciprofloxacin is the agent used against anthrax, including for post-exposure prophylaxis after a suspected release - and concern about bioterrorism is precisely why syndromic surveillance systems were developed, to detect symptom clusters before laboratory confirmation. The distractors are all real anti-infectives used elsewhere in this course material, which is what makes them plausible: isoniazid treats tuberculosis, acyclovir manages herpes simplex virus, and metronidazole treats trichomoniasis. Matching the agent to the organism matters because an exposure event is time-critical and the window for effective prophylaxis is short."
 },
 {
  "id": "n525e2s3q01",
  "exam": 3,
  "topic": "Vaccine-preventable STIs",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is teaching a community group which sexually transmitted infections can be prevented by vaccination. Which infections should the nurse include? Select all that apply.",
  "options": [
   "Human papillomavirus",
   "Hepatitis B",
   "Hepatitis A",
   "Chlamydia",
   "Human immunodeficiency virus",
   "Syphilis"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Three sexually transmissible infections are vaccine-preventable. The Gardasil 9 vaccine protects against high-risk HPV strains causing cervical, anal, penile, and throat cancers and genital warts, and is indicated for ages 9 through 45. Hepatitis B is prevented by its vaccine series, and hepatitis A by its own series - HAV is transmissible through oral-anal sexual contact, which is why it belongs on an STI prevention list. Chlamydia and syphilis are bacterial infections with no vaccine, prevented by barrier use and screening, and no HIV vaccine exists, which is why PrEP and PEP carry that prevention burden instead."
 },
 {
  "id": "n525e2s3q02",
  "exam": 3,
  "topic": "STI treatment classes",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is reviewing which sexually transmitted infections are curable with antibiotic therapy. Which infections are antibiotic-curable? Select all that apply.",
  "options": [
   "Chlamydia",
   "Gonorrhea",
   "Syphilis",
   "Trichomoniasis",
   "Herpes simplex virus",
   "Human immunodeficiency virus"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The bacterial and protozoal infections are curable with antimicrobials: chlamydia with doxycycline or azithromycin, gonorrhea with intramuscular ceftriaxone, syphilis with penicillin G benzathine, and trichomoniasis with metronidazole or tinidazole. Pelvic inflammatory disease is treated with combination regimens such as ceftriaxone plus doxycycline plus metronidazole. The viral infections are managed with antivirals but not cured - HSV with acyclovir, valacyclovir, or famciclovir, and HIV with combination antiretroviral therapy. The one viral exception is hepatitis C, which direct-acting antivirals cure in an 8 to 12 week course, and that exception is worth holding onto because it reverses the usual rule."
 },
 {
  "id": "n525e2s3q03",
  "exam": 3,
  "topic": "Condom limitations",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client states, 'I always use a condom, so there is no way I could have caught herpes.' Which response by the nurse is most accurate?",
  "options": [
   "Condoms cover only part of the genital area, so infections spread by skin-to-skin contact such as herpes, HPV, and syphilis can still infect uncovered skin",
   "The client is correct; consistent condom use eliminates the risk of all sexually transmitted infections",
   "The client is correct unless the condom was expired at the time of use",
   "Condoms are ineffective against all viral infections but protect fully against bacterial ones"
  ],
  "correct": [
   0
  ],
  "rationale": "Condoms reduce but do not eliminate risk, for two distinct reasons. Coverage is incomplete: a condom covers the shaft of the penis, while infections transmitted by skin-to-skin contact - herpes, HPV, and syphilitic chancres - can infect uncovered surrounding areas including the vulva, perineum, scrotum, inner thighs, and pubis. Separately, user error and failure occur through slippage, breakage, improper application, reuse, or degradation from oil-based lubricants. The expiration option is too narrow, and the final option draws a false viral-bacterial line: condoms substantially protect against both HIV and gonorrhea, which are transmitted by fluid, while offering less protection against skin-contact infections of either type."
 },
 {
  "id": "n525e2s3q04",
  "exam": 3,
  "topic": "HIV testing window",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client presents 36 hours after a high-risk sexual exposure and requests immediate HIV testing to know whether infection occurred. Which response by the nurse is most appropriate?",
  "options": [
   "Draw an antibody test now, since a negative result at this point will rule out infection",
   "Defer all intervention and have the client return in 90 days for definitive testing",
   "Offer post-exposure prophylaxis now, since the client is within 72 hours, and explain that testing must be timed to the window period with a confirmatory retest at 3 months",
   "Draw a test now and reassure the client that no further testing will be needed if it is negative"
  ],
  "correct": [
   2
  ],
  "rationale": "Two things must happen and they run on different clocks. Post-exposure prophylaxis is time-critical: if the client presents within 72 hours, PEP is started immediately and continued for 28 days, so at 36 hours this is the urgent action. Testing, by contrast, is limited by the window period - the delay between exposure and when p24 antigen or host antibodies reach detectable levels. A nucleic acid test detects viral RNA as early as 10 to 33 days, the antigen/antibody serum test performs best at 2 to 4 weeks, and antibody-only tests have a 23 to 90 day window, with a confirmatory retest at 3 months to conclusively exclude infection. Testing too early yields false negatives, and deferring everything for 90 days forfeits the PEP window entirely."
 },
 {
  "id": "n525e2s3q05",
  "exam": 3,
  "topic": "Primary syphilis",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse is explaining why primary syphilis so often goes undiagnosed. Which factors best account for this?",
  "options": [
   "The chancre is intensely painful, so clients attribute it to trauma and do not seek testing",
   "Primary syphilis produces no lesion at all, so there is nothing for the client to notice",
   "The chancre is painless, may be in a location the client cannot see, and heals on its own within weeks while the infection disseminates",
   "The chancre appears only after neurologic symptoms have already developed"
  ],
  "correct": [
   2
  ],
  "rationale": "Three features conspire. The primary lesion is characteristically firm, round, and completely painless, progressing from macule to papule to ulceration, so it prompts no urgency. It frequently appears in locations the client cannot see - vaginally, on the cervix, inside the rectum or anal canal, or in the posterior pharynx. And it heals spontaneously within 3 to 6 weeks without treatment, which convinces the client the problem resolved while the spirochete silently disseminates systemically. Describing it as painful inverts the single most important clinical feature. The lesion does exist, and it precedes rather than follows systemic involvement, so the window for simple cure comes first and closes quietly."
 },
 {
  "id": "n525e2s3q06",
  "exam": 3,
  "topic": "Secondary syphilis",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse assesses a client with suspected secondary syphilis. Which findings would the nurse expect? Select all that apply.",
  "options": [
   "A symmetric, non-pruritic maculopapular rash including the palms and soles",
   "Low-grade fever and malaise",
   "Generalized painless lymphadenopathy",
   "Pharyngitis",
   "A single painless genital ulcer with a clean base",
   "Intensely pruritic vesicles clustered on an erythematous base"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Secondary syphilis is the systemic dissemination stage: a symmetric, non-pruritic maculopapular rash classically involving the palms and soles, with low-grade fever, malaise, pharyngitis, and generalized painless lymphadenopathy including epitrochlear and cervical nodes. A palmar and plantar rash is the finding that should prompt syphilis testing even when the client came in for something else. The single painless clean-based ulcer is the primary-stage chancre, which has typically healed by the time secondary findings appear, and clustered pruritic or painful vesicles on an erythematous base describe herpes simplex - both are correct descriptions of the wrong condition or stage."
 },
 {
  "id": "n525e2s3q07",
  "exam": 3,
  "topic": "Syphilis vs herpes",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client notices a single ulceration on the labia for the first time and asks the nurse whether it is syphilis or herpes. Which response is most appropriate?",
  "options": [
   "Since the lesion is single and painless, it is syphilis and penicillin should be started today",
   "Explain that the two cannot be distinguished in any way and that treatment for both should begin immediately",
   "Reassure the client that a single lesion is almost always benign irritation and ask her to monitor it for two weeks",
   "Explain that a single painless firm sore suggests syphilis while multiple painful blisters suggest herpes, but laboratory testing is required, and advise abstaining until results return"
  ],
  "correct": [
   3
  ],
  "rationale": "The clinical distinction is real and worth teaching: primary syphilis typically presents as a single, painless, firm, clean-based chancre, while HSV typically presents as multiple painful fluid-filled blisters or ulcers on a red base, often preceded by local tingling or burning. But appearance alone cannot diagnose either, so both require laboratory testing - a direct swab of the lesion and serology - with abstinence until results return. Treating on appearance risks the wrong therapy, and saying the two cannot be distinguished at all abandons useful assessment data. Watching a painless lesion for two weeks is the most harmful option, since the chancre heals on its own while the infection disseminates."
 },
 {
  "id": "n525e2s3q08",
  "exam": 3,
  "topic": "Syphilis reinfection",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A nurse recommends syphilis testing for a client with a new oral ulceration. The client responds, 'I already had syphilis once, so I cannot get it again.' What is the nurse's best response?",
  "options": [
   "The client is correct; prior infection with Treponema pallidum confers lifelong immunity",
   "Explain that prior syphilis infection confers no lasting immunity, reinfection occurs with each new exposure, and an oral sore can be a primary chancre",
   "Explain that reinfection is possible but only if the original infection was never treated",
   "Agree that testing is unnecessary and document that the client declined"
  ],
  "correct": [
   1
  ],
  "rationale": "Syphilis is a bacterial infection with Treponema pallidum, and unlike viral infections or vaccines that can produce lasting immunity, the body does not build permanent immunity to it. A client can be reinfected every time they are exposed, and an oral sore may well be a primary chancre acquired through oral contact - chancres occur in the posterior pharynx and oral cavity. Testing matters because reinfection is curable with penicillin and untreated infection progresses to cardiovascular and neurologic disease. The third option smuggles in a false condition, since successfully treated clients are fully susceptible again, and simply documenting refusal abandons the teaching the client needs to make a real decision."
 },
 {
  "id": "n525e2s3q09",
  "exam": 3,
  "topic": "Prenatal syphilis screening",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A pregnant client declines syphilis screening, stating, 'I do not need that test - I have been married for six years.' Which response by the nurse best addresses both the client and fetal risk?",
  "options": [
   "Document the refusal, since screening is optional when a client reports a monogamous relationship",
   "Explain that the test is only needed in the third trimester, so it can be deferred",
   "Agree that the risk is negligible but order the test anyway without discussion",
   "Explain that screening is standard prenatal care regardless of relationship status, that syphilis can remain dormant and asymptomatic for years, and that it crosses the placenta and causes congenital syphilis which penicillin prevents"
  ],
  "correct": [
   3
  ],
  "rationale": "Two facts drive this conversation. Syphilis can remain completely dormant and asymptomatic for years, so a client may carry it from an exposure long predating the marriage without ever knowing - which is why routine screening is standard prenatal care for every pregnant client regardless of relationship status. And the fetal stakes are high: syphilis crosses the placenta, causing congenital syphilis with miscarriage, stillbirth, premature delivery, severe anemia, bone deformities, and developmental delays, all preventable with penicillin treatment. Documenting refusal without this teaching leaves the client unable to make an informed choice, deferring to the third trimester wastes treatable time, and ordering a test without discussion violates informed consent."
 },
 {
  "id": "n525e2s3q10",
  "exam": 3,
  "topic": "Therapeutic communication",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client who came to the clinic for a rash on the palms becomes angry and raises their voice when the nurse recommends syphilis testing and a genital examination. Which response by the nurse is best?",
  "options": [
   "Tell the client that refusing the examination means the clinic cannot provide further care",
   "Apologize, withdraw the recommendation, and treat the rash symptomatically",
   "Acknowledge that the request feels unexpected and uncomfortable, then explain that a palm and sole rash is a classic sign of secondary syphilis which begins as a painless genital sore and is easily cured when caught early",
   "Explain that the client's anger suggests they already know the diagnosis"
  ],
  "correct": [
   2
  ],
  "rationale": "Effective de-escalation names the feeling before delivering the rationale: the client came in for a rash on the hands and is being asked about sexual infection and a genital examination, which is genuinely jarring. Only after acknowledging that does the clinical explanation land - a rash on the palms and soles is classic for secondary syphilis, which begins as a small, completely painless genital sore that is easily missed, and which is simple to cure with antibiotics early but affects the heart, brain, and nervous system if untreated. Threatening to withhold care is coercive, withdrawing the recommendation abandons a serious diagnosis to preserve comfort, and interpreting anger as evidence of guilt is accusatory and will end the encounter."
 },
 {
  "id": "n525e2s3q11",
  "exam": 3,
  "topic": "Syphilis resurgence",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is explaining to a community board why syphilis rates have been rising. Which factors contribute? Select all that apply.",
  "options": [
   "Reduced condom use associated with greater availability and use of HIV pre-exposure prophylaxis",
   "Substance use, which is linked to higher-risk sexual behavior, multiple partners, and reduced access to care",
   "Reductions in STI clinic funding, routine screening, and contact tracing resources",
   "Unrecognized asymptomatic infection, since primary chancres and secondary rashes are often painless or subtle",
   "Social stigma that discourages people from seeking screening or notifying partners",
   "A newly emerged strain of Treponema pallidum that is resistant to penicillin"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The resurgence is driven by behavioral, structural, clinical, and social factors together: PrEP availability has reduced barrier use during casual encounters, substance use including methamphetamine, opioids, and alcohol correlates with higher-risk behavior and poorer access, public health funding cuts have thinned screening and contact tracing, painless and subtle presentations go unrecognized and transmission continues, and stigma suppresses both testing and partner notification. Penicillin resistance is the distractor: Treponema pallidum remains reliably susceptible to penicillin G benzathine, which is why this is a problem of detection and access rather than pharmacology - and that distinction determines where a public health nurse intervenes."
 },
 {
  "id": "n525e2s3q12",
  "exam": 3,
  "topic": "STI mistaken for UTI",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client reports dysuria, urinary frequency, and urgency. The urinalysis shows pyuria but the urine culture returns negative for typical uropathogens. Which action should the nurse anticipate?",
  "options": [
   "Nucleic acid amplification testing for chlamydia and gonorrhea, which cause urethritis mimicking a urinary tract infection",
   "Repeating the urine culture, since the first specimen was likely contaminated",
   "Beginning empiric treatment for an uncomplicated urinary tract infection",
   "Reassuring the client that a negative culture excludes infection"
  ],
  "correct": [
   0
  ],
  "rationale": "Chlamydia and gonorrhea both cause urethritis presenting with dysuria, frequency, urgency, and pelvic or urethral discomfort - indistinguishable from a urinary tract infection on symptoms alone. The giveaway is sterile pyuria: white cells present but standard cultures negative for organisms such as E. coli, because those cultures do not grow either organism. Diagnosis requires nucleic acid amplification testing, and omitting it is exactly what delays diagnosis. Repeating the culture reproduces the same blind spot, treating empirically for a UTI leaves the actual infection untreated and transmissible, and calling a negative culture reassuring misreads what the test can detect."
 },
 {
  "id": "n525e2s3q13",
  "exam": 3,
  "topic": "HSV patient teaching",
  "type": "sata",
  "bloom": "Application",
  "stem": "A client newly diagnosed with genital herpes asks how to reduce the risk of transmitting it to a partner. Which instructions should the nurse include? Select all that apply.",
  "options": [
   "Abstain from all sexual contact during prodromal symptoms such as tingling or burning and whenever lesions are present",
   "Use latex or polyurethane condoms or dental dams at every encounter, since asymptomatic viral shedding can transmit the virus",
   "Take daily suppressive antiviral therapy as prescribed to reduce outbreak frequency and transmission risk",
   "Disclose HSV status to partners before physical intimacy",
   "Avoid oral sex when an oral cold sore is present, since HSV-1 can cause genital infection",
   "Resume unprotected intercourse once lesions have healed, since transmission occurs only during visible outbreaks"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Teaching covers abstaining during prodrome - the tingling, burning, or itching within about 48 hours of an outbreak - and during active lesions, consistent barrier use at every encounter, daily suppressive antivirals such as valacyclovir or acyclovir, partner disclosure before intimacy, and avoiding oral sex with an active cold sore because HSV-1 transmits to the genitals. The final option contains the critical error: asymptomatic viral shedding transmits HSV between outbreaks, which is why barriers and suppressive therapy are continuous rather than episodic. Worth adding is that HSV increases HIV acquisition risk two- to threefold, which raises the stakes of both prevention and disclosure."
 },
 {
  "id": "n525e2s3q14",
  "exam": 3,
  "topic": "Antiretroviral therapy",
  "type": "sata",
  "bloom": "Application",
  "stem": "A client starting antiretroviral therapy for HIV asks what to expect. Which teaching points should the nurse include? Select all that apply.",
  "options": [
   "Take the medications at the same time every day without missing doses, because nonadherence rapidly induces drug resistance and viral rebound",
   "Antiretroviral therapy suppresses the virus but does not cure it, so treatment is lifelong",
   "A sustained undetectable viral load for at least six months prevents sexual transmission to partners",
   "Therapy can be stopped once the viral load becomes undetectable",
   "Missing occasional doses is acceptable as long as most doses are taken each week"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Adherence is the central message: doses must be taken at the same time daily without gaps, because nonadherence rapidly selects for resistance and allows viral rebound. ART suppresses replication but does not cure HIV, so it is a lifelong commitment. The encouraging corollary is that a sustained undetectable viral load for at least six months prevents sexual transmission - undetectable equals untransmittable - which is powerful motivation and reframes treatment as prevention. The two incorrect options describe the exact behaviors that produce resistance: stopping when undetectable mistakes suppression for cure, and tolerating occasional missed doses underestimates how little nonadherence it takes to lose the regimen."
 },
 {
  "id": "n525e2s3q15",
  "exam": 3,
  "topic": "Hepatitis A transmission",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A client is diagnosed with hepatitis A. Which transmission route should the nurse describe?",
  "options": [
   "Blood and body fluid exposure through needle sharing and perinatal transmission",
   "Respiratory droplets from coughing and sneezing",
   "Vector-borne transmission by mosquitoes in endemic regions",
   "The fecal-oral route, through ingestion of contaminated food or water or oral-anal contact"
  ],
  "correct": [
   3
  ],
  "rationale": "Hepatitis A is transmitted by the fecal-oral route through contaminated food or water or oral-anal sexual contact, and it causes acute illness only with no chronic state, though it is highly contagious for 1 to 2 weeks before symptoms appear - which is why outbreaks are well under way before anyone is diagnosed. The first option describes hepatitis B, transmitted through blood and body fluids including semen, perinatal exposure, and needle sharing, and capable of both acute and chronic infection leading to cirrhosis and liver cancer. Respiratory and vector-borne routes do not transmit any of the hepatitis viruses in this material, and misidentifying the route would send the nurse toward the wrong precautions entirely."
 },
 {
  "id": "n525e2s3q16",
  "exam": 3,
  "topic": "Hepatitis A teaching",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is teaching a client newly diagnosed with hepatitis A. Which instructions are appropriate? Select all that apply.",
  "options": [
   "Wash hands with soap and water after using the restroom and before handling food, since alcohol-based rubs are less effective against this virus",
   "Do not prepare food or drinks for other people while infectious",
   "Do not share eating utensils, towels, toothbrushes, or razors",
   "Disinfect contaminated bathroom surfaces with a dilute bleach solution",
   "Household members and close contacts should receive hepatitis A vaccine or immune globulin within 2 weeks of exposure",
   "Avoid alcohol and limit acetaminophen to reduce further liver strain",
   "Alcohol-based hand sanitizer is the preferred hand hygiene method for this infection"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5
  ],
  "rationale": "Because hepatitis A spreads by the fecal-oral route, teaching centers on interrupting that route: soap-and-water handwashing, not preparing food for others while infectious, not sharing personal items, and bleach disinfection of bathroom surfaces. Close contacts need post-exposure prophylaxis with vaccine or immune globulin within 2 weeks. Avoiding alcohol and limiting acetaminophen protects an already inflamed liver. The incorrect option is the one most likely to be chosen from habit: HAV is a non-enveloped virus, so alcohol-based rubs are notably less effective against it, and defaulting to sanitizer would leave the primary transmission route open."
 },
 {
  "id": "n525e2s3q17",
  "exam": 3,
  "topic": "Hepatitis B risk groups",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is identifying clients at highest risk for hepatitis B infection. Which groups are at increased risk? Select all that apply.",
  "options": [
   "People who inject drugs",
   "People with other sexually transmitted infections",
   "Men who have sex with men",
   "People born in regions with high prevalence of hepatitis B surface antigen",
   "Health care workers with blood exposure",
   "Clients receiving hemodialysis",
   "People who are incarcerated"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "rationale": "Hepatitis B transmits through blood and body fluids including semen, perinatal exposure, and needle sharing, so the risk groups follow those routes: people who inject drugs, people with other STIs, men who have sex with men, people born in regions with high HBsAg prevalence, health care workers, hemodialysis clients, and incarcerated people. Every option here is correct, which is itself instructive - a SATA item is not required to contain a wrong answer, and a nurse who assumes one must be present may talk themselves out of a correct choice. Because HBV causes chronic infection progressing to cirrhosis and liver cancer, and because an effective vaccine exists, identifying these groups directly drives vaccination."
 },
 {
  "id": "n525e2s3q18",
  "exam": 3,
  "topic": "Hepatitis comparison",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse is comparing the hepatitis viruses. Which statement is accurate?",
  "options": [
   "Hepatitis C has a high rate of chronic infection and no vaccine, but is curable with direct-acting antivirals",
   "Hepatitis A commonly becomes chronic and is the leading cause of cirrhosis",
   "Hepatitis B has no vaccine but is reliably cured with a short antiviral course",
   "All three hepatitis viruses are transmitted by the fecal-oral route"
  ],
  "correct": [
   0
  ],
  "rationale": "Hepatitis C is transmitted primarily through blood - injection drug use, blood products before 1992, needle sticks - becomes chronic in 75 to 85% of cases, has no available vaccine, and yet is curable with direct-acting antivirals over 8 to 12 weeks. That combination is unique and frequently confused with hepatitis B, which does have a vaccine but is managed rather than cured, using nucleoside and nucleotide analogs such as tenofovir and entecavir. Hepatitis A causes acute illness only with no chronic state and is vaccine-preventable with lifelong immunity from a 2-dose series. Only hepatitis A among the three is fecal-oral, so the final option collapses distinctions that determine both precautions and prognosis."
 },
 {
  "id": "n525e2s3q19",
  "exam": 3,
  "topic": "HPV vaccination",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A parent asks why the HPV vaccine is recommended for their 11-year-old when the child is not sexually active. Which response by the nurse is best?",
  "options": [
   "The vaccine is only effective if given before age 12, so this is the final opportunity",
   "The vaccine is recommended at this age because adolescents tolerate the injection better than adults",
   "The vaccine produces the strongest protection when given before any exposure occurs, and it prevents cancers of the cervix, anus, penis, and throat as well as genital warts",
   "The vaccine treats existing HPV infection, so earlier administration clears the virus sooner"
  ],
  "correct": [
   2
  ],
  "rationale": "HPV vaccination is primary prevention, so its purpose is to establish immunity before any exposure - which is exactly why it is given well before sexual debut rather than in response to risk. Gardasil 9 protects against high-risk strains causing cervical, anal, penile, and throat cancers and genital warts, and is approved for ages 9 through 45, so age 12 is not a cutoff and the first option creates false urgency through misinformation. Tolerability is not the rationale. The final option is the most important error to correct: antivirals do not cure HPV itself, and existing lesions or warts are treated topically, surgically, or with cryotherapy - the vaccine prevents, it does not treat."
 },
 {
  "id": "n525e2s3q20",
  "exam": 3,
  "topic": "PID",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A client is diagnosed with pelvic inflammatory disease following an untreated chlamydial infection. Which treatment approach should the nurse anticipate?",
  "options": [
   "A single intramuscular dose of penicillin G benzathine",
   "Daily suppressive antiviral therapy",
   "A combination antibiotic regimen such as ceftriaxone with doxycycline and metronidazole",
   "Direct-acting antivirals for 8 to 12 weeks"
  ],
  "correct": [
   2
  ],
  "rationale": "Pelvic inflammatory disease is typically polymicrobial, arising when an untreated lower genital tract infection such as chlamydia or gonorrhea ascends, so it requires combination regimens - for example ceftriaxone plus doxycycline plus metronidazole - rather than single-agent therapy. Penicillin G benzathine is the treatment for syphilis and would not cover the organisms involved here. Suppressive antivirals are used for HSV, and direct-acting antivirals cure hepatitis C; both are antiviral therapies for an infection that is bacterial. The underlying lesson is preventive: PID is a complication of delayed chlamydia or gonorrhea treatment, which is why the urethritis mistaken for a UTI matters so much."
 },
 {
  "id": "n525e2s3q21",
  "exam": 3,
  "topic": "Hepatitis A in food service",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A restaurant food handler is diagnosed with hepatitis A. Beyond treating the client, which action is the public health nurse's priority?",
  "options": [
   "Report the case, identify the infectious period, and arrange post-exposure prophylaxis for exposed contacts and patrons within 2 weeks of exposure",
   "Reassure the restaurant that no action is needed, since hepatitis A causes only acute illness",
   "Wait for additional cases to be reported before notifying the restaurant or the public",
   "Advise the client to continue working while using alcohol-based hand sanitizer frequently"
  ],
  "correct": [
   0
  ],
  "rationale": "A food handler with hepatitis A is a population-level event, not just a clinical one. HAV spreads by the fecal-oral route and is highly contagious for 1 to 2 weeks before symptoms appear, so the infectious period precedes diagnosis and exposures have already occurred. The nurse reports the notifiable condition, establishes the infectious window, and arranges vaccine or immune globulin for contacts and patrons within 2 weeks, since prophylaxis loses effect after that. Waiting for more cases wastes the prophylaxis window. Allowing continued food handling is unsafe, and alcohol-based sanitizer is less effective against this non-enveloped virus - the client must not prepare food for others while infectious."
 },
 {
  "id": "n525e2s3q22",
  "exam": 3,
  "topic": "Partner notification",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A client diagnosed with gonorrhea is reluctant to tell recent sexual partners, saying it is too embarrassing. Which response by the nurse is most appropriate?",
  "options": [
   "Tell the client that partner notification is optional and respect the decision without further discussion",
   "Inform the client that the nurse will contact the partners directly using the client's name",
   "Tell the client that treatment cannot be provided unless partners are named",
   "Explain why notification matters for partners' health and reinfection risk, and offer options including health department partner services that can notify partners confidentially"
  ],
  "correct": [
   3
  ],
  "rationale": "Gonorrhea is a notifiable condition, and partner notification serves two purposes: untreated partners develop complications such as pelvic inflammatory disease and infertility, and they will reinfect the treated client, so notification protects both. The most useful nursing action is to explain this and then remove the barrier by offering health department partner services, which notify partners confidentially without disclosing the index client's identity. Treating notification as purely optional abandons the public health obligation and the client's own reinfection risk. Disclosing the client's name violates confidentiality, and withholding treatment as leverage is coercive and would drive the client out of care entirely."
 },
 {
  "id": "n525e2s3q23",
  "exam": 3,
  "topic": "HSV and HIV risk",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A client with recurrent genital herpes asks whether the infection affects any other health risks. Which information should the nurse provide?",
  "options": [
   "Herpes infection confers partial protection against other sexually transmitted infections",
   "Herpes has no effect on the risk of acquiring other infections",
   "Genital herpes increases the risk of acquiring HIV approximately two- to threefold",
   "Herpes eliminates the need for HIV screening, since the immune response is already activated"
  ],
  "correct": [
   2
  ],
  "rationale": "Genital HSV increases HIV acquisition risk roughly two- to threefold, because herpetic ulceration breaches the epithelial barrier and recruits activated immune cells to the mucosal surface - precisely the cells HIV targets. This makes consistent barrier use, daily suppressive antiviral therapy, and HIV screening more rather than less important for a client with HSV, and it is a strong argument for discussing PrEP. The protection and no-effect options both understate a clinically significant interaction, and the final option inverts the implication in a way that could lead a client to forgo the screening they most need."
 },
 {
  "id": "n525e2s3q24",
  "exam": 3,
  "topic": "Prevention levels in STI care",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A public health nurse offers confidential chlamydia and gonorrhea screening to asymptomatic sexually active young adults at a college health fair. Which level of prevention does this screening represent?",
  "options": [
   "Secondary prevention, because it detects existing infection early in asymptomatic people so treatment can prevent complications",
   "Primary prevention, because the clients have no symptoms",
   "Tertiary prevention, because it prevents pelvic inflammatory disease and infertility",
   "It is not prevention, because screening is a diagnostic activity"
  ],
  "correct": [
   0
  ],
  "rationale": "Screening asymptomatic people is the definition of secondary prevention: the infection may already be present, and detecting it during the subclinical stage allows treatment before complications such as pelvic inflammatory disease and infertility develop. The absence of symptoms is what makes it secondary rather than primary - primary prevention would be the HPV vaccine, condom education, or PrEP, all of which act before infection occurs. The tertiary option names real complications but misassigns the level, since tertiary prevention manages established disease and disability. Calling screening merely diagnostic misses that its population purpose is interrupting transmission and preventing sequelae."
 },
 {
  "id": "n525e2s3q25",
  "exam": 3,
  "topic": "Hepatitis B perinatal transmission",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A newborn is delivered to a mother who is positive for hepatitis B surface antigen. Which intervention should the nurse anticipate for the infant?",
  "options": [
   "Hepatitis B immune globulin alone, since the infant is too young to be vaccinated",
   "Hepatitis B vaccine alone, which provides sufficient protection after perinatal exposure",
   "Deferral of both until the infant is 2 months old and the immune system is more mature",
   "Both hepatitis B immune globulin and the first dose of hepatitis B vaccine, giving immediate passive protection while active immunity develops"
  ],
  "correct": [
   3
  ],
  "rationale": "Hepatitis B transmits perinatally, so an exposed newborn needs protection on two different timescales. Immune globulin supplies preformed antibodies that act immediately but wane over weeks to months, because the infant produces neither antibody nor memory cells - this is artificial passive immunity, the same principle as rabies or tetanus immune globulin. The vaccine stimulates the infant's own active immunity, which is durable but takes time to develop. Giving either alone leaves a gap: immune globulin alone fades, and vaccine alone leaves the infant unprotected during the interval before antibodies appear. Deferring both forfeits the narrow window in which perinatal transmission can still be interrupted, and chronic hepatitis B acquired in infancy carries a high lifetime risk of cirrhosis and liver cancer."
 },
 {
  "id": "n525e2s4q01",
  "exam": 4,
  "topic": "Latent vs active TB",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is comparing latent tuberculosis infection with active tuberculosis disease. Which findings describe LATENT tuberculosis? Select all that apply.",
  "options": [
   "The client has no symptoms and cannot transmit the infection to others",
   "Sputum cultures are negative",
   "The tuberculin skin test is reactive",
   "The chest radiograph may show a walled-off area where immune cells have contained the infection",
   "Cavitary lesions and upper-lobe infiltrates appear on the chest radiograph",
   "Airborne precautions are required"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Latent tuberculosis is infection without disease: the client has no symptoms, cannot spread the infection, has negative sputum cultures, and shows a reactive skin test because the immune system has encountered the organism. The chest film may show a walled-off area where white cells shielded the infection within 2 to 8 weeks. Treatment is 9 months of isoniazid or 4 months of rifampin. Cavitary lesions with upper-lobe infiltrates and the need for airborne precautions both belong to active disease, which is contagious by respiratory droplet and requires a multidrug regimen. The single most important point is that latent infection cannot be spread, because that determines isolation, contact tracing, and the client's ability to work and attend school."
 },
 {
  "id": "n525e2s4q02",
  "exam": 4,
  "topic": "Active TB symptoms",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse assesses a client with suspected active pulmonary tuberculosis. Which findings would the nurse expect? Select all that apply.",
  "options": [
   "A productive cough lasting longer than 3 weeks",
   "Pleuritic chest pain on inspiration",
   "Hemoptysis",
   "Night sweats and low-grade fever",
   "Unintentional weight loss and anorexia",
   "Weakness and fatigue",
   "Sudden onset of symptoms within 24 to 48 hours of exposure"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5
  ],
  "rationale": "Active pulmonary tuberculosis presents with a productive cough persisting beyond 3 weeks, pleurisy described as chest pain on inspiration, hemoptysis or blood-tinged sputum, fever, weight loss and anorexia, night sweats, weakness, and fatigue. The disease can also affect lymph nodes, bones, joints, brain, and other organs. The incorrect option addresses timing, which is clinically decisive: active tuberculosis takes 6 to 12 months to develop, and its indolent course is precisely why a cough lasting more than 3 weeks is the screening trigger. A sudden 24 to 48 hour onset points elsewhere - that time frame fits an acute bacterial gastroenteritis such as salmonella, not tuberculosis."
 },
 {
  "id": "n525e2s4q03",
  "exam": 4,
  "topic": "TB skin test technique",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A nurse reads a tuberculin skin test 60 hours after placement and observes a 14 mm area of redness surrounding a 7 mm firm raised area. Which action is correct?",
  "options": [
   "Record the result as 7 mm, measuring only the induration",
   "Record the result as 14 mm, measuring the full area of redness",
   "Record the result as 21 mm, adding the redness and the induration",
   "Repeat the test, because reading at 60 hours is outside the acceptable window"
  ],
  "correct": [
   0
  ],
  "rationale": "Only the induration - the firm, raised area - is measured; erythema is disregarded entirely. Here that means 7 mm, not 14 or 21. Measuring redness is the most common technical error and systematically overstates results, producing unnecessary workups and treatment. The test must be read within 48 to 72 hours, so 60 hours falls well inside the window and no repeat is needed. The result is then classified as reactive or nonreactive against a cut point that depends on the client's risk category rather than a single universal number, which is why the measurement itself must be accurate before interpretation begins."
 },
 {
  "id": "n525e2s4q04",
  "exam": 4,
  "topic": "TB skin test interpretation",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse reads tuberculin skin tests for four clients. Which client has a REACTIVE result requiring follow-up?",
  "options": [
   "A healthy college student with no risk factors and 11 mm of induration",
   "A client with HIV and 6 mm of induration",
   "A nursing home resident with 7 mm of induration",
   "A client who recently immigrated from a country with high tuberculosis prevalence and 8 mm of induration"
  ],
  "correct": [
   1
  ],
  "rationale": "The cut point depends on risk category. An induration of 5 mm or more is reactive in people with HIV, recent contacts of a tuberculosis case, those with fibrotic changes from prior tuberculosis, and the immunocompromised - so 6 mm in a client with HIV is reactive. An induration of 10 mm or more is reactive for immigrants from high-prevalence countries, people who inject drugs, residents and staff of congregate settings such as prisons, jails, nursing homes, long-term care, hospitals, residential facilities, and homeless shelters, children under 4, and children exposed to high-risk adults - so the nursing home resident at 7 mm and the recent immigrant at 8 mm are both below their threshold. An induration of 15 mm or more is required for people with no risk factors, so the student at 11 mm is nonreactive. Applying one universal number is the error this item targets."
 },
 {
  "id": "n525e2s4q05",
  "exam": 4,
  "topic": "TB skin test interpretation",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is identifying which clients would be considered to have a reactive tuberculin skin test at an induration of 10 mm or greater. Which clients fall into this category? Select all that apply.",
  "options": [
   "A client who recently immigrated from a country with high tuberculosis prevalence",
   "A client who injects drugs",
   "A resident of a homeless shelter",
   "A 3-year-old child",
   "An incarcerated client in a county jail",
   "A client with no identified risk factors",
   "A client receiving chemotherapy who is immunocompromised"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The 10 mm threshold applies to immigrants from high-prevalence countries, people who inject drugs, people in congregate settings including prisons, jails, nursing homes, long-term care facilities, hospitals, residential facilities, and homeless shelters, children under 4, and infants, children, and adolescents exposed to adults at high risk for active disease. The two incorrect options belong to the other thresholds and illustrate the full range: a client with no risk factors requires 15 mm or more, while an immunocompromised client - like a client with HIV, a recent contact, or someone with fibrotic changes from prior tuberculosis - is reactive at only 5 mm, because a weakened immune system mounts a smaller response to the same infection."
 },
 {
  "id": "n525e2s4q06",
  "exam": 4,
  "topic": "Latent TB treatment",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A client with a reactive tuberculin skin test, no symptoms, a negative sputum culture, and a chest radiograph showing a walled-off lesion asks what treatment will involve. Which regimen should the nurse describe?",
  "options": [
   "No treatment is required, since the client has no symptoms and is not contagious",
   "Isoniazid, rifampin, ethambutol, and pyrazinamide for 2 months, then rifampin and isoniazid for 4 months",
   "Isoniazid for 9 months or rifampin for 4 months to treat latent infection",
   "Airborne isolation until three consecutive sputum cultures are negative"
  ],
  "correct": [
   2
  ],
  "rationale": "This picture is latent tuberculosis infection, treated with 9 months of isoniazid or 4 months of rifampin. Treating latent infection matters because it prevents progression to active disease later, which is the entire rationale for screening asymptomatic people - so declining treatment because the client feels well misses the point of having tested at all. The four-drug intensive regimen followed by two drugs for 4 months is the treatment for active disease, totaling 6 to 9 months. Airborne isolation is unnecessary because latent infection cannot be transmitted, and imposing it would isolate a client who poses no risk to anyone."
 },
 {
  "id": "n525e2s4q07",
  "exam": 4,
  "topic": "Active TB treatment",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A client is diagnosed with active pulmonary tuberculosis. Which treatment regimen should the nurse anticipate?",
  "options": [
   "Isoniazid alone for 9 months",
   "Isoniazid, rifampin, ethambutol, and pyrazinamide for 2 months, followed by rifampin and isoniazid for 4 months",
   "Rifampin alone for 4 months",
   "A single dose of intramuscular ceftriaxone"
  ],
  "correct": [
   1
  ],
  "rationale": "Active tuberculosis requires a multidrug regimen: 2 months of isoniazid, rifampin, ethambutol, and pyrazinamide, then 4 months of rifampin and isoniazid, for a total of 6 to 9 months. Multiple drugs are used because monotherapy against a large active bacterial burden reliably selects for resistance, which is how multidrug-resistant tuberculosis emerges - so the isoniazid-alone and rifampin-alone options are not merely inadequate but actively dangerous, and both are in fact the regimens for latent infection. Ceftriaxone treats gonorrhea and has no role here. The long duration is why adherence support, including directly observed therapy, is central to tuberculosis care."
 },
 {
  "id": "n525e2s4q08",
  "exam": 4,
  "topic": "Rifampin teaching",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is teaching a client starting rifampin. Which instructions should the nurse include? Select all that apply.",
  "options": [
   "Red-orange discoloration of urine, sweat, saliva, tears, and stool is expected and harmless",
   "Soft contact lenses may be permanently stained and should not be worn during therapy",
   "Report jaundice, dark urine, pale stools, right upper quadrant pain, severe nausea, or extreme fatigue immediately",
   "Avoid alcohol and acetaminophen during treatment",
   "Stop the medication as soon as the red-orange discoloration appears, since it indicates toxicity"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Rifampin causes harmless red-orange discoloration of all body fluids, and clients must be warned in advance or they will stop the drug in alarm - which is exactly the error in the final option. Soft contact lenses stain permanently and should not be worn. The genuine danger is hepatotoxicity, so clients must know the reportable signs: jaundice, dark urine, pale stools, right upper quadrant pain, severe nausea, and extreme fatigue. Alcohol and acetaminophen compound hepatic injury and should be avoided. Distinguishing the alarming-but-benign effect from the subtle-but-serious one is the whole point of this teaching, since confusing them leads either to needless discontinuation or to missed liver failure."
 },
 {
  "id": "n525e2s4q09",
  "exam": 4,
  "topic": "Isoniazid adverse effect",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A client taking isoniazid for tuberculosis reports numbness and tingling in both hands and feet. Which medication should the nurse anticipate being ordered?",
  "options": [
   "Ethambutol",
   "Acetaminophen",
   "Pyridoxine (vitamin B6)",
   "Prednisone"
  ],
  "correct": [
   2
  ],
  "rationale": "Isoniazid interferes with vitamin B6 metabolism, producing peripheral neuropathy with paresthesias, numbness, and tingling in the hands and feet. Pyridoxine supplementation both prevents and treats this neurotoxicity and is frequently prescribed prophylactically alongside isoniazid. Ethambutol is another antitubercular drug and would not relieve the problem - its own hallmark toxicity is optic neuritis with changes in visual acuity and red-green color discrimination. Acetaminophen is specifically to be limited during antitubercular therapy because of additive hepatotoxicity. Prednisone has no role in this adverse effect. Recognizing the cause is what prevents a client from abandoning a 6 to 9 month regimen over a manageable side effect."
 },
 {
  "id": "n525e2s4q10",
  "exam": 4,
  "topic": "Directly observed therapy",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client with active tuberculosis has a history of unstable housing and previous treatment nonadherence. The nurse recommends directly observed therapy. Which statement about this intervention is accurate?",
  "options": [
   "A family member observes the client swallowing each dose to reduce the burden on the health department",
   "The client records each dose in a medication diary reviewed weekly by the nurse",
   "The regimen is shortened to 2 months because supervision improves absorption",
   "A trained health care professional observes the client taking every dose, which ensures completion and prevents emergence of drug-resistant strains"
  ],
  "correct": [
   3
  ],
  "rationale": "Directly observed therapy means a trained health care professional watches the client swallow every dose - supervised swallowing - and it is explicitly never delegated to family members, which makes the first option wrong on the one detail that matters. It is recommended for all clients treated for active tuberculosis and especially for those with a history of nonadherence, substance use, housing instability, memory impairment, or multidrug-resistant disease. The purpose is to guarantee completion, ensure cure, prevent treatment failure and relapse, and stop drug-resistant strains from emerging in the community. A self-reported diary is not observation, and supervision does not shorten the regimen or alter absorption. For the individual client, DOT is tertiary prevention, since it prevents progression, complications, and death."
 },
 {
  "id": "n525e2s4q11",
  "exam": 4,
  "topic": "TB population control",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A public health nurse is applying the core functions of public health to tuberculosis control at the population level. Which activities represent ASSURANCE? Select all that apply.",
  "options": [
   "Implementing directly observed therapy so treatment is completed",
   "Providing free diagnostic testing and anti-tuberculosis medication regardless of insurance or legal status",
   "Educating health care facilities on airborne isolation, negative-pressure rooms, and N95 respirator use",
   "Ensuring access to isolation rooms for clients who cannot isolate at home",
   "Conducting community surveillance, case reporting, and contact tracing",
   "Establishing mandated reporting requirements for congregate settings"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Assurance guarantees that the services people need to be healthy actually exist and are accessible: directly observed therapy, free testing and medication irrespective of insurance or immigration status, education of facilities on airborne isolation practices, and provision of isolation space. Surveillance, case reporting, contact tracing, and monitoring drug-resistance trends and outbreak clusters in high-risk aggregates are assessment. Establishing mandated reporting requirements and infection control guidelines for congregate settings, and advocating for resources to address housing overcrowding and care barriers, are policy development. All six are legitimate tuberculosis control activities - the discrimination required is which core function each one serves."
 },
 {
  "id": "n525e2s4q12",
  "exam": 4,
  "topic": "TB high-risk groups",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A public health nurse is planning tuberculosis screening for groups at greatest risk. Which populations should the nurse prioritize? Select all that apply.",
  "options": [
   "People living with HIV",
   "Recent close contacts of a person with active tuberculosis",
   "People experiencing homelessness or living in shelters",
   "People who are incarcerated",
   "People who have immigrated from countries with high tuberculosis prevalence",
   "Residents and staff of long-term care facilities",
   "People who inject drugs"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "rationale": "Every group listed carries elevated risk, through one of two mechanisms. Immunosuppression increases the chance that infection progresses to active disease, which is why HIV is the single strongest risk factor and why the skin test threshold drops to 5 mm. Crowded congregate living increases the chance of exposure in the first place - shelters, correctional facilities, and long-term care are where outbreak clusters are monitored. Recent contacts and immigrants from high-prevalence countries reflect exposure probability, and injection drug use carries both social and immune risk. These same categories drive the tiered skin test cut points, so recognizing the group determines how the test is interpreted."
 },
 {
  "id": "n525e2s4q13",
  "exam": 4,
  "topic": "Airborne precautions",
  "type": "sata",
  "bloom": "Application",
  "stem": "A client with suspected active pulmonary tuberculosis is admitted. Which infection control measures should the nurse implement? Select all that apply.",
  "options": [
   "Place the client in a negative-pressure airborne infection isolation room",
   "Wear a fit-tested N95 respirator when entering the room",
   "Keep the room door closed",
   "Have the client wear a surgical mask when transport outside the room is necessary",
   "Teach the client to cover the mouth and nose when coughing or sneezing",
   "A surgical mask worn by the nurse provides adequate protection when entering the room"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Active pulmonary tuberculosis spreads by airborne respiratory droplet nuclei, so control requires engineering and respiratory protection together: a negative-pressure isolation room with the door kept closed, and a fit-tested N95 respirator for anyone entering. The client wears a surgical mask during unavoidable transport, which contains their own droplets, and is taught respiratory hygiene. The incorrect option captures the critical asymmetry: a surgical mask on the client limits what they expel, but it does not filter the inhaled air of a nurse standing in a room full of droplet nuclei, so an N95 is required for the caregiver. Confusing the two directions of protection is the most consequential error in airborne precautions."
 },
 {
  "id": "n525e2s4q14",
  "exam": 4,
  "topic": "Food safety temperatures",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is teaching a community class on safe food handling. Which instructions are correct? Select all that apply.",
  "options": [
   "Cook poultry to an internal temperature of 165 degrees Fahrenheit",
   "Cook ground meat to an internal temperature of 160 degrees Fahrenheit",
   "Cook eggs until the yolk is firm",
   "Keep the refrigerator below 40 degrees Fahrenheit",
   "Discard food left at room temperature longer than 2 hours, or 1 hour if the outdoor temperature exceeds 90 degrees",
   "Thaw frozen meat on the kitchen counter to save time"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Safe handling rests on correct temperatures: poultry to 165 degrees, ground meat to 160 degrees, eggs cooked to a firm yolk, a refrigerator held below 40 degrees with 33 to 40 degrees as the target range, and the 2-hour rule for food left out, shortened to 1 hour above 90 degrees. Countertop thawing is the error, and the reason is mechanistic: the outer surface of the meat enters the temperature danger zone and supports bacterial multiplication long before the center thaws. Food should be defrosted in the refrigerator, or in cold water followed by immediate cooking. Microwave thawing likewise requires cooking immediately afterward."
 },
 {
  "id": "n525e2s4q15",
  "exam": 4,
  "topic": "Food safety practices",
  "type": "sata",
  "bloom": "Application",
  "stem": "A nurse is counseling a client on preventing foodborne illness at home and while traveling. Which instructions are appropriate? Select all that apply.",
  "options": [
   "Avoid recipes using raw eggs, such as homemade mayonnaise, Caesar dressing, and raw cookie dough",
   "Use separate cutting boards for raw meat and sanitize all boards after use",
   "Wash fruits and vegetables, and peel them when appropriate",
   "When traveling outside the United States, avoid street food and drink bottled water",
   "Wash hands before and during food preparation",
   "Rely on the appearance and smell of food to determine whether it is safe to eat"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Prevention combines avoiding raw-egg preparations, separating raw meat with dedicated sanitized cutting boards, washing and peeling produce, and taking precautions with street food and water abroad, along with consistent hand hygiene. The incorrect option is the habit most people actually rely on, and it is unsafe because the infectious doses of organisms such as Salmonella and E. coli O157:H7, and preformed toxins from organisms like Staphylococcus aureus, can be present at levels that change nothing about how food looks, smells, or tastes. This is also why menus carry the advisory that consuming raw or undercooked meat, poultry, seafood, shellfish, or eggs increases the risk of foodborne illness, particularly for people with certain medical conditions."
 },
 {
  "id": "n525e2s4q16",
  "exam": 4,
  "topic": "Salmonella",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is investigating several cases of salmonellosis at a community picnic. Which features are characteristic of this infection? Select all that apply.",
  "options": [
   "Onset of symptoms roughly 48 hours after exposure",
   "Sudden headache, abdominal pain, diarrhea, nausea and vomiting, and fever",
   "Commonly associated with poultry, ground beef, and eggs",
   "Transmitted by the fecal-oral route, making hand hygiene essential",
   "Dehydration from diarrhea that may persist for several days",
   "Reptiles such as turtles and iguanas, as well as poultry, cattle, swine, rodents, dogs, and cats may carry the organism",
   "Bloody diarrhea with a high risk of acute renal failure in children"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5
  ],
  "rationale": "Salmonella is a bacterial illness with onset around 48 hours, presenting with sudden headache, abdominal pain, diarrhea, nausea and vomiting, and fever, and causing dehydration that can last several days. It is associated with poultry, ground beef, and eggs, spreads by the fecal-oral route, and is carried by a wide range of animals including reptiles - which is why pet turtles and iguanas are a recognized pediatric exposure. Produce can be contaminated by animal runoff or by an infected food worker. The incorrect option describes E. coli O157:H7, which produces a potent toxin causing bloody diarrhea and threatens acute renal failure in children and older adults."
 },
 {
  "id": "n525e2s4q17",
  "exam": 4,
  "topic": "E coli O157:H7",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A 5-year-old develops bloody diarrhea and severe abdominal cramping three days after eating an undercooked hamburger. Which complication should the nurse monitor for most closely?",
  "options": [
   "Chronic hepatic failure from toxin-mediated liver injury",
   "Acute renal failure, since this organism produces a toxin and children are at highest risk",
   "Permanent peripheral neuropathy",
   "Chronic carrier state with lifelong intermittent shedding"
  ],
  "correct": [
   1
  ],
  "rationale": "E. coli O157:H7 belongs to the enterohemorrhagic category and produces a strong toxin, causing bloody diarrhea and abdominal cramps. Children and older adults are at highest risk for acute renal failure, because the toxin damages the vascular endothelium of the glomerulus - the mechanism behind hemolytic uremic syndrome. Monitoring urine output, creatinine, and hemoglobin is therefore the priority. Beyond undercooked beef, implicated vehicles include alfalfa sprouts, apple cider, melons, lettuce, municipal water, unpasteurized milk, ready-to-eat salads, cheese, packaged cookie dough, pizza, flour, and tacos. The distractors describe complications belonging to other conditions entirely."
 },
 {
  "id": "n525e2s4q18",
  "exam": 4,
  "topic": "Emerging infectious disease",
  "type": "sata",
  "bloom": "Comprehension",
  "stem": "A nurse is discussing factors that contribute to newly emergent infectious diseases. Which factors should the nurse include? Select all that apply.",
  "options": [
   "Antimicrobial resistance arising from incomplete or inappropriate treatment",
   "International travel and trade that move pathogens rapidly between continents",
   "Changes in land use and human encroachment that increase human-animal contact",
   "Climate and environmental change that expand the geographic range of vectors",
   "Breakdowns in public health infrastructure, surveillance, and vaccination coverage",
   "Universal vaccination coverage achieved across all populations"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Emergence is driven by antimicrobial resistance from incomplete treatment - the very reason multidrug regimens and directly observed therapy exist for tuberculosis - along with global travel and trade, land-use change bringing people into contact with animal reservoirs, climate shifts expanding vector habitats, and erosion of surveillance and immunization infrastructure. The incorrect option inverts a protective factor: high vaccination coverage suppresses emergence and re-emergence, and it is falling coverage that permits the return of diseases such as measles and pertussis. The COVID-19 timeline illustrates the speed involved, moving from first disclosure in January 2020 to a declared pandemic that March."
 },
 {
  "id": "n525e2s4q19",
  "exam": 4,
  "topic": "Core functions and communicable disease",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "During a community hepatitis A outbreak, a public health nurse drafts and advocates for a municipal ordinance requiring hepatitis A vaccination for all food service workers. Which core function of public health does this represent?",
  "options": [
   "Assessment",
   "Assurance",
   "Evaluation",
   "Policy development"
  ],
  "correct": [
   3
  ],
  "rationale": "Policy development creates, champions, and implements policies, plans, and laws that affect health, so drafting and advocating for a vaccination ordinance is its clearest expression. Assessment would be the surveillance and case investigation that identified the outbreak and its link to food service. Assurance would be delivering the vaccine clinics so workers can actually comply - and note that an ordinance without accessible free vaccination would fail precisely because assurance was neglected. Evaluation is not one of the three core functions. A single outbreak is typically addressed through all three functions at once, which is why nurses must be able to name which lever a given action pulls."
 },
 {
  "id": "n525e2s4q20",
  "exam": 4,
  "topic": "Prevention levels in communicable disease",
  "type": "sata",
  "bloom": "Analysis",
  "stem": "A nurse is classifying tuberculosis interventions by level of prevention. Which interventions are PRIMARY prevention? Select all that apply.",
  "options": [
   "Educating shelter staff and residents on cough etiquette and respiratory hygiene",
   "Advocating for reduced overcrowding and improved ventilation in congregate housing",
   "Treating latent tuberculosis infection to prevent progression to active disease",
   "Screening shelter residents with tuberculin skin tests to identify infection",
   "Providing directly observed therapy to a client with active tuberculosis"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Primary prevention acts before disease occurs by removing the hazard, changing behavior, or increasing resistance: respiratory hygiene education, reducing overcrowding and improving ventilation, and treating latent infection so it never becomes active disease. That third item is the one most often misclassified - treatment usually sounds tertiary, but because latent infection is not disease, treating it prevents disease from developing at all. Skin testing asymptomatic people is secondary prevention, detecting infection already present. Directly observed therapy for active disease is tertiary prevention for that client, preventing progression, complications, and death while also protecting the community from resistant strains."
 },
 {
  "id": "n525e2s4q21",
  "exam": 4,
  "topic": "Nursing process and communicable disease",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "Residents of an apartment complex tell a public health nurse they believe tuberculosis is spreading in the building. Which action should the nurse take FIRST?",
  "options": [
   "Arrange tuberculin skin testing for every resident of the complex",
   "Begin teaching residents about cough etiquette and airborne transmission",
   "Request negative-pressure isolation capacity at the nearest hospital",
   "Review existing surveillance and case report data to determine whether tuberculosis cases have actually been reported in this area"
  ],
  "correct": [
   3
  ],
  "rationale": "Assessment precedes planning and implementation at the population level exactly as it does for an individual client. Before mounting a response the nurse must establish whether the suspected problem exists and characterize its magnitude, and reviewing existing surveillance and case reports does that quickly using data already collected - validating the concern and providing the evidence base for everything that follows. Mass skin testing, education, and arranging isolation capacity may all become appropriate, but each commits scarce resources on the strength of resident perception alone. If the data show no reported cases, the real problem may be something else entirely, and the nurse would have spent the response on the wrong target."
 },
 {
  "id": "n525e2s4q22",
  "exam": 4,
  "topic": "Vector-borne and mosquito illness",
  "type": "mcq",
  "bloom": "Application",
  "stem": "A community reports cases of eastern equine encephalitis. Which intervention will most effectively reduce transmission at the population level?",
  "options": [
   "Distributing long-sleeved clothing to residents who request it",
   "Organizing removal of standing water from gutters, tires, birdbaths, and containers throughout the community",
   "Advising residents to remain indoors at all times until the outbreak resolves",
   "Screening all residents for antibodies to the virus"
  ],
  "correct": [
   1
  ],
  "rationale": "Eliminating standing water removes mosquito breeding habitat, which reduces the vector population itself rather than managing individual encounters - the most upstream available intervention and the one that protects everyone in the community, including people who never receive a leaflet. In triangle terms it breaks the environment leg. Clothing and DEET repellent are valid personal protection but depend on individual uptake and reach only those who request and use them. Advising permanent indoor confinement is neither feasible nor sustainable, and peak-feeding avoidance at dusk and dawn is the realistic behavioral measure. Antibody screening generates data but prevents no transmission, since there is no treatment to trigger."
 },
 {
  "id": "n525e2s4q23",
  "exam": 4,
  "topic": "Quarantine and isolation",
  "type": "mcq",
  "bloom": "Comprehension",
  "stem": "A nurse is explaining the difference between isolation and quarantine to a community group. Which statement is accurate?",
  "options": [
   "Isolation and quarantine are interchangeable terms for separating people during an outbreak",
   "Isolation separates people known to be infected, while quarantine restricts the movement of people who were exposed but are not yet known to be infected",
   "Isolation applies to exposed people, while quarantine applies to those with confirmed infection",
   "Quarantine may be applied to any notifiable condition, since reporting and quarantine requirements are identical"
  ],
  "correct": [
   1
  ],
  "rationale": "Isolation separates people who are known to be infected so they cannot transmit; quarantine restricts the movement of people who have been exposed but whose infection status is not yet established, covering the incubation period during which they might become infectious. The third option reverses the two. The final option conflates two distinct legal categories: notifiable conditions are those legally required to be reported, and that list is far broader than the quarantinable diseases, which must additionally show high communicability, high potential for severe morbidity or mortality, and a threat grave enough to justify enforceable movement restriction. Chlamydia is notifiable; no one is quarantined for it."
 },
 {
  "id": "n525e2s4q24",
  "exam": 4,
  "topic": "Handwashing and agent control",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A nurse is caring for clients with Clostridioides difficile and hepatitis A on the same unit. Which hand hygiene approach is correct?",
  "options": [
   "Alcohol-based hand rub is sufficient for both organisms",
   "Alcohol-based rub for hepatitis A and soap and water for C. difficile",
   "Soap and water handwashing is required for both, because alcohol-based rubs are less effective against these organisms",
   "Soap and water for hepatitis A and alcohol-based rub for C. difficile"
  ],
  "correct": [
   2
  ],
  "rationale": "Both organisms defeat alcohol-based hand rubs, for related structural reasons: hepatitis A is a non-enveloped virus, and alcohol works by disrupting lipid envelopes, while C. difficile forms spores that alcohol cannot inactivate. Soap and water are required because the mechanism is physical removal rather than chemical kill. The two mixed options are the common partial-knowledge errors, since many nurses learn the C. difficile rule without learning that the same limitation applies to non-enveloped viruses including HAV and norovirus. This is also why hepatitis A teaching specifies soap and water after toileting and before handling food, and why bleach is specified for surfaces."
 },
 {
  "id": "n525e2s4q25",
  "exam": 4,
  "topic": "TB contact investigation",
  "type": "mcq",
  "bloom": "Analysis",
  "stem": "A client is newly diagnosed with active pulmonary tuberculosis and lives in a two-bedroom apartment with four other adults. After reporting the case, which action should the public health nurse take next?",
  "options": [
   "Advise the household members to seek testing on their own if they develop a cough",
   "Wait for the client to complete the 2-month intensive phase before evaluating contacts",
   "Initiate contact investigation and arrange tuberculin skin testing or interferon-gamma release assay testing for all household members",
   "Test only the household members who report symptoms, since asymptomatic people cannot be infected"
  ],
  "correct": [
   2
  ],
  "rationale": "Contact investigation is a core assessment activity in tuberculosis control: close contacts of an index case are screened with a skin test or interferon-gamma release assay, and household members sharing confined air space are the highest-yield group. Testing must happen promptly because latent infection detected now can be treated before it progresses, which is primary prevention for those contacts. Leaving contacts to seek testing if symptoms appear forfeits that window, since active disease takes 6 to 12 months to develop and is contagious once it does. Waiting until the client finishes the intensive phase delays identification by months. The final option contains the central error: asymptomatic household members are precisely who screening is designed to find, because latent infection produces no symptoms at all while still carrying a reactive test - and a contact's threshold is 5 mm, not 15 mm, since recent exposure places them in the highest-risk category."
 }
]};
