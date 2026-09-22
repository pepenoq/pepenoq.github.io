/* ============================================================================
   NUR 525 Exam 1 - Community & Public Health Nursing Question Bank
   100 NCLEX-style critical-thinking questions across four practice exams:
     1 Week 1 - Foundations, history, levels of prevention, SDOH & health metrics
     2 Week 2 - Environmental health, I PREPARE, lead, food & water safety
     3 Week 2 - Culture, cultural competence, immigrants & alternative therapies
     4 Week 3 - Community assessment, program management & ethics

   Built from the MCPHS NUR 525 Exam 1 source material: the Week 1, Week 2 and
   Week 3 lecture decks, the "Are You Ready?" pre-class activities, the weekly
   formative quizzes, and the supplemental readings in each week's directory.

   Multiple choice (4 options, 1 correct) and SATA (4-7 options).
   Distractors are written to be genuinely plausible - each is a real concept,
   level of prevention, ethical principle, agency or assessment method drawn
   from an adjacent topic - and every rationale explains why the best
   distractor is wrong.

   Question object: { id, exam(1-4), topic, type("mcq"|"sata"), stem,
                      options[], correct[idx], rationale }
   ========================================================================== */
window.NUR525_DATA = {
  meta: {"title": "NUR 525 Exam 1 - Community & Public Health Nursing", "total": 100, "exams": 4, "examTitles": {"1": "Week 1 \u2014 Foundations, History, Prevention & SDOH", "2": "Week 2 \u2014 Environmental Health & Lead", "3": "Week 2 \u2014 Culture & Cultural Competence", "4": "Week 3 \u2014 Community Assessment, Program Management & Ethics"}},
  questions: [
 {
  "id": "n525e1q01",
  "exam": 1,
  "topic": "Community-based vs community-oriented",
  "type": "mcq",
  "stem": "A nurse employed by a city health department spends Monday changing the dressing on a homebound client's venous ulcer and Tuesday analyzing district wound-infection rates to design a clinic-wide prevention campaign. How should the nurse characterize this practice?",
  "options": [
   "Monday is community-based nursing and Tuesday is community-oriented nursing; the roles blend in a single position",
   "Both days represent community-oriented nursing, because the nurse is employed by a public health agency",
   "Both days represent community-based nursing, because the nurse is delivering care outside a hospital",
   "Neither day qualifies as public health nursing, because the nurse has no caseload of well clients"
  ],
  "correct": [
   0
  ],
  "rationale": "Community-based nursing (CBN) is illness care of individuals and families across the lifespan; community-oriented nursing (CON), which is synonymous with public health nursing, targets health promotion and disease prevention at the population level. Changing one client's dressing is individual illness care, so it is CBN. Analyzing district-wide infection rates to build a prevention program treats the population as the client, so it is CON. The course material states explicitly that the roles blend, using the school nurse who treats individual students but also builds school-wide programs. The employer is the trap: setting and job title do not define the practice, the unit of care does - a public health department can employ a nurse doing CBN, and a hospital can employ a nurse doing population work."
 },
 {
  "id": "n525e1q02",
  "exam": 1,
  "topic": "Core functions of public health",
  "type": "mcq",
  "stem": "A public health nurse asks, 'Are there programs in this county that could reduce the number of adults with untreated hypertension?' Which core function of public health does this question represent?",
  "options": [
   "Assessment, because the nurse is gathering information about hypertension",
   "Evaluation, because the nurse is judging whether existing programs work",
   "Policy development, because programs require legislation to create",
   "Assurance, because the nurse is asking whether services needed to be healthy are actually available"
  ],
  "correct": [
   3
  ],
  "rationale": "The three core functions are assessment, policy development, and assurance. Assurance asks whether the services people need in order to be healthy actually exist and are accessible - which is precisely what 'are there programs that could reduce this problem' asks. The assessment trap is strong because the sentence is phrased as a question and the nurse is technically seeking information, but assessment is about measuring the health status of the population itself: 'What is the prevalence of hypertension among various age, race, and gender groups?' would be the assessment version. Policy development is the creation of plans and laws, and evaluation is not one of the three core functions at all."
 },
 {
  "id": "n525e1q03",
  "exam": 1,
  "topic": "Core functions of public health",
  "type": "sata",
  "stem": "Which nursing activities reflect the core function of ASSESSMENT? Select all that apply.",
  "options": [
   "Reviewing the county's infant mortality rate for the past five years",
   "Conducting a windshield survey of a neighborhood's housing stock and food outlets",
   "Testifying at a state hearing in support of a lead-abatement funding bill",
   "Monitoring the number of new tuberculosis cases reported each quarter",
   "Opening a mobile immunization van in a neighborhood with no pharmacy"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Assessment is the systematic monitoring and diagnosis of the population's health status and the factors that influence it - reviewing infant mortality, surveying the built environment, and tracking reportable disease counts are all assessment. Testifying for a funding bill is policy development, the core function concerned with creating, championing, and implementing policies, plans, and laws. Opening a mobile van is assurance, which guarantees equitable access to needed services. The trap is that all five are legitimate public health nursing actions and all five feel like 'looking after the community'; the question asks which core function each one belongs to, and only data-gathering about population health status counts as assessment."
 },
 {
  "id": "n525e1q04",
  "exam": 1,
  "topic": "Levels of prevention",
  "type": "mcq",
  "stem": "A child is found to have a blood lead level of 45 mcg/dL and is started on chelation therapy and referred to a neurologist. Which level of prevention do these interventions represent?",
  "options": [
   "Primary prevention, because referral to a specialist prevents new neurological injury",
   "Tertiary prevention, because the interventions limit the progression and disability of an established condition",
   "Primary prevention, because chelation prevents further lead absorption",
   "Secondary prevention, because the lead level was detected by a screening test"
  ],
  "correct": [
   1
  ],
  "rationale": "Tertiary prevention limits progression and disability once disease is established and includes rehabilitation, chronic disease management, and referral. The lecture states directly that treatment for lead - chelation therapy - is tertiary, and that referral to a neurologist for neurological symptoms is tertiary. The secondary prevention answer is the intended trap: the blood lead level draw that FOUND the problem was secondary prevention, but the question asks about the chelation and referral that followed, and those treat established disease. Lead poisoning is irreversible, so nothing done after exposure can be primary; primary prevention for lead is educating about pre-1978 housing and working with banks on abatement loans."
 },
 {
  "id": "n525e1q05",
  "exam": 1,
  "topic": "Levels of prevention",
  "type": "sata",
  "stem": "Which nursing actions are examples of PRIMARY prevention at the population level? Select all that apply.",
  "options": [
   "Teaching handwashing technique to every classroom in an elementary school",
   "Performing blood pressure screenings at a senior center health fair",
   "Lobbying for low-interest loans that let landlords remove lead paint from apartments",
   "Organizing an influenza immunization clinic for a housing complex",
   "Enrolling a newly diagnosed diabetic client in daily blood glucose monitoring"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "rationale": "Primary prevention acts before disease occurs, by removing the hazard, changing unsafe behavior, or increasing resistance - health education, immunization, and legislation or financing that eliminates an exposure all qualify. Handwashing education, lead-abatement loans, and immunization are therefore primary. Blood pressure screening is the classic secondary prevention trap: screening detects disease early in people who already have it and are asymptomatic, which reduces impact rather than preventing occurrence. Starting glucose monitoring on a client who is already diagnosed is also secondary, aimed at early management of an existing problem. Note that immunization is primary even though it involves a needle and a clinic visit - what matters is that it increases resistance before exposure."
 },
 {
  "id": "n525e1q06",
  "exam": 1,
  "topic": "Levels of prevention",
  "type": "mcq",
  "stem": "A town's river is contaminated by a chemical that causes rashes in swimmers. Which action by the town's public health nurse represents the most 'upstream' intervention?",
  "options": [
   "Working with regulators to compel the company discharging the chemical to stop",
   "Starting a support group for residents living with persistent chemical rashes",
   "Distributing medicated cream at the swimming hole so rashes can be treated immediately",
   "Stationing lifeguards to inspect swimmers for early rash and refer them for treatment"
  ],
  "correct": [
   0
  ],
  "rationale": "Going 'upstream' means moving toward the origin of the hazard rather than its consequences. Stopping the discharge removes the exposure entirely and prevents rashes from ever occurring, which is primary prevention and the furthest upstream point available. Lifeguard inspection with early referral is secondary prevention - it detects and treats early but does not prevent the rash. A support group for people already living with persistent rash is tertiary. Distributing cream is the sharpest trap because it sounds proactive and happens at the water's edge, but treating a rash that has already appeared is still downstream of the cause. The source material emphasizes that the further upstream an intervention sits, the likelier it is to be effective."
 },
 {
  "id": "n525e1q07",
  "exam": 1,
  "topic": "Lillian Wald",
  "type": "mcq",
  "stem": "Which outcome is most directly attributed to Lillian Wald's 1909 collaboration with the Metropolitan Life Insurance Company?",
  "options": [
   "Demonstration that nursing care in the community improved health outcomes enough to justify paying for it",
   "Establishment of the Public Health Service",
   "The founding of the first school nursing program in New York City",
   "Passage of the first federal legislation funding public health nursing education"
  ],
  "correct": [
   0
  ],
  "rationale": "Wald persuaded Metropolitan Life to provide nursing services to its policyholders and then showed that the improved health outcomes and reduced mortality made the program financially worthwhile - the first large-scale demonstration that community nursing is cost-effective, which is why insurers and employers began funding it. The school nursing distractor is tempting because Wald was instrumental in placing nurses in schools, but that work is credited to Lina Rogers in 1902 and is a separate achievement. Federal funding for public health nursing education came much later, and the Public Health Service dates to 1798, roughly a century before Wald's work."
 },
 {
  "id": "n525e1q08",
  "exam": 1,
  "topic": "Florence Nightingale",
  "type": "sata",
  "stem": "Which outcomes are crucial results of Florence Nightingale's work? Select all that apply.",
  "options": [
   "She established organized, formal nursing education rather than apprenticeship-only training",
   "She used statistics and systematic data collection to demonstrate that environmental conditions drive mortality",
   "She founded the Henry Street Settlement to serve immigrant families",
   "She organized nursing practice as a distinct discipline with defined standards",
   "She identified the Broad Street pump as the source of a cholera outbreak"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Nightingale's two crucial legacies are the creation of formal nursing education and organized professional nursing practice, and her pioneering use of statistics and environmental data to prove that sanitation, ventilation, and conditions of care determined who lived and died - the foundation of both public health nursing and evidence-based practice. The Henry Street Settlement (1893) was Lillian Wald and Mary Brewster, not Nightingale. The Broad Street pump is John Snow's cholera investigation in England, the classic origin story of epidemiology. Both distractors are real, correctly described historical events attached to the wrong person, which is exactly how this content is tested."
 },
 {
  "id": "n525e1q09",
  "exam": 1,
  "topic": "Public health history",
  "type": "mcq",
  "stem": "A nurse is asked which historical document first called for a statewide public health infrastructure in the United States, including vital statistics collection and sanitary inspection. Which answer is correct?",
  "options": [
   "The Shattuck Report of 1850",
   "The 1979 Surgeon General's report on health promotion and disease prevention",
   "The Elizabethan Poor Law",
   "The Institute of Medicine's The Future of Public Health, 1988"
  ],
  "correct": [
   0
  ],
  "rationale": "Lemuel Shattuck's 1850 report to the Massachusetts legislature laid out the blueprint for a state public health system - vital statistics, sanitary surveys, environmental inspection, and a permanent health department - and is the founding document of organized American public health. The Elizabethan Poor Law is much earlier, English, and concerns relief of the poor rather than health infrastructure. The 1988 IOM report is the strongest trap because it also assessed the state of the public health system, but it was a late-twentieth-century evaluation that found the system in disarray, not the original call for one. The 1979 Surgeon General's report launched the Healthy People initiative."
 },
 {
  "id": "n525e1q10",
  "exam": 1,
  "topic": "SDOH",
  "type": "sata",
  "stem": "A nurse is categorizing findings from a community assessment as social determinants of health. Which findings belong to the social determinants of health? Select all that apply.",
  "options": [
   "The proportion of residents who did not complete high school",
   "The neighborhood's violent crime rate",
   "A client's family history of early-onset coronary disease",
   "The percentage of households reporting food insecurity",
   "The share of housing units built before 1978 and in poor repair",
   "A client's age of 78 years"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "rationale": "Social determinants of health are the non-genetic conditions of the environments where people are born, live, work, play, worship, and age, grouped into five domains: economic stability, education access and quality, health care access and quality, neighborhood and built environment, and social and community context. Educational attainment, crime, food insecurity, and housing quality all sit inside those domains. Family history and age are the two traps: they are genuine and important risk factors for disease, but they are non-modifiable individual risk factors, not social determinants. The distinction the course draws is precisely this - SDOH are non-genetic, structural, and modifiable through policy, whereas genetics and age are not."
 },
 {
  "id": "n525e1q11",
  "exam": 1,
  "topic": "SDOH",
  "type": "mcq",
  "stem": "A nurse is teaching about the difference between social determinants of health and traditional risk factors. Which statement by a student indicates correct understanding?",
  "options": [
   "Social determinants of health apply to populations, so they have no relevance to an individual client's plan of care",
   "Social determinants of health and modifiable risk factors are two names for the same concept",
   "Social determinants of health are the non-modifiable risk factors that a person is born with",
   "Social determinants of health overlap with modifiable risk factors, but they are conditions of the environment rather than individual characteristics"
  ],
  "correct": [
   3
  ],
  "rationale": "SDOH are the conditions of the environments in which people live, and because those conditions can be changed by policy and programs they behave like modifiable factors - but they are not simply a synonym for modifiable risk factors, which include individual behaviors such as smoking or diet. The non-modifiable option is the reverse of the truth; SDOH are explicitly non-genetic. Saying they have no relevance to individual care is the most dangerous distractor because it sounds like appropriate scope discipline, but a client's housing, transportation, food access, and literacy directly determine whether a discharge plan will work, which is why SDOH screening is part of individual assessment."
 },
 {
  "id": "n525e1q12",
  "exam": 1,
  "topic": "SDOH domains",
  "type": "mcq",
  "stem": "A community assessment finds that 40% of residents lack broadband internet, the nearest supermarket is four miles away, and two of three playgrounds are closed for disrepair. Which social determinant of health domain do these findings share?",
  "options": [
   "Economic stability",
   "Neighborhood and built environment",
   "Social and community context",
   "Health care access and quality"
  ],
  "correct": [
   1
  ],
  "rationale": "Neighborhood and built environment covers housing quality and conditions, crime and violence, access to the internet, environmental health hazards, injury prevention, and the physical features of a community that support or block healthy living - all three findings are physical and infrastructural features of the place. Economic stability is about poverty, employment, food security, and housing stability as financial conditions; the supermarket distance edges toward food access but the framing here is the built environment of the neighborhood. Social and community context is about relationships, discrimination, and civic participation. Health care access and quality concerns insurance, primary care, and health literacy, none of which is described."
 },
 {
  "id": "n525e1q13",
  "exam": 1,
  "topic": "Disparity vs inequity",
  "type": "mcq",
  "stem": "Community A has a life expectancy of 82 years; Community B, ten miles away, has a life expectancy of 72 years and a history of redlining, highway construction through its center, and no full-service grocery store. Which statement is most accurate?",
  "options": [
   "The ten-year gap is a health inequity; it becomes a disparity only after the causes are identified",
   "The ten-year gap is a health disparity, and because it is unfair, avoidable, and rooted in structural conditions it is also a health inequity",
   "The ten-year gap is a health disparity but cannot be called an inequity without genetic data on both populations",
   "The ten-year gap is neither, because life expectancy differences between communities are expected variation"
  ],
  "correct": [
   1
  ],
  "rationale": "A disparity is simply the difference that is observed - the ten-year gap itself. An inequity is a difference that is unfair, avoidable, and linked to social, economic, environmental, or structural conditions. Redlining, a highway cut through the neighborhood, and the absence of a grocery store are exactly those structural conditions, so this gap is both a disparity and an inequity. The first option reverses the two terms, which is the most common error. Demanding genetic data inverts the concept: inequity is established by the presence of unjust modifiable causes, not by ruling out biology, and treating a ten-year gap between adjacent communities as normal variation is precisely the assumption population health nursing exists to challenge."
 },
 {
  "id": "n525e1q14",
  "exam": 1,
  "topic": "Incidence vs prevalence",
  "type": "mcq",
  "stem": "A county reports 240 people currently living with hepatitis C and 18 newly diagnosed cases during the past quarter. Which interpretation is correct?",
  "options": [
   "The incidence is 240 and the prevalence is 18",
   "The incidence is 18 new cases for the quarter and the prevalence is 240 existing cases",
   "Both figures describe prevalence, because both count people with hepatitis C",
   "Both figures describe mortality, because hepatitis C is a reportable condition"
  ],
  "correct": [
   1
  ],
  "rationale": "Incidence counts new cases arising in a population during a specified period; prevalence counts all existing cases at a point in time or over a period. Eighteen new diagnoses in a quarter is incidence; 240 people currently living with the disease is prevalence. Reversing the two is the classic error and is the first distractor. Calling both prevalence ignores the explicit 'newly diagnosed during the past quarter' time frame that defines incidence. Neither figure is mortality, which asks who is dying and of what - being reportable governs surveillance requirements, not which metric a number represents."
 },
 {
  "id": "n525e1q15",
  "exam": 1,
  "topic": "Infant mortality rate",
  "type": "mcq",
  "stem": "A public health nurse is preparing a community profile and needs the infant mortality rate. Which statement about this metric is accurate?",
  "options": [
   "It is the number of deaths before age 1 per 1,000 women of childbearing age, published by the Census Bureau",
   "It is the number of deaths before age 1 per 1,000 live births, compiled by the CDC's National Center for Health Statistics through the National Vital Statistics System",
   "It is the number of stillbirths per 1,000 pregnancies, compiled by state departments of public health",
   "It is the number of deaths before age 5 per 100,000 population, published by the World Health Organization"
  ],
  "correct": [
   1
  ],
  "rationale": "The infant mortality rate counts deaths before the first birthday per 1,000 live births, and in the United States it comes from the CDC's National Center for Health Statistics via the National Vital Statistics System - the most recent national figure cited in the course material is 5.6 infant deaths per 1,000 live births. The denominator is what the distractors attack: live births, not population, not pregnancies, and not women of childbearing age. The metric is heavily used in community assessment because it is sensitive to maternal health, access to prenatal care, nutrition, and the social determinants, which is why it is treated as a bellwether indicator for overall community health."
 },
 {
  "id": "n525e1q16",
  "exam": 1,
  "topic": "Health metrics",
  "type": "mcq",
  "stem": "A nurse is separating health indicators into outcome measures and measures of influences on health. Which item is an INFLUENCE rather than an outcome?",
  "options": [
   "Life expectancy at birth",
   "Diabetes prevalence in adults over 45",
   "The proportion of residents who are uninsured",
   "Cancer mortality rate"
  ],
  "correct": [
   2
  ],
  "rationale": "Outcome indicators measure the health status that has already resulted - life expectancy, infant and maternal mortality, cancer mortality, and diabetes prevalence. Influence indicators measure the conditions and behaviors that shape those outcomes - vaccination rates, smoking rates, uninsured rates, and access to care. The uninsured rate is an influence: being uninsured is not itself a health state, it is a condition that produces worse health states. Diabetes prevalence is the tempting distractor because diabetes has behavioral causes, but prevalence of a disease is a measurement of disease burden, which makes it an outcome. This distinction matters because influences are where interventions are aimed and outcomes are how success is judged."
 },
 {
  "id": "n525e1q17",
  "exam": 1,
  "topic": "Benefits of public health",
  "type": "mcq",
  "stem": "A hospital administrator argues that expanding the cardiac catheterization lab will do more for the community's health than funding the health department's prevention programs. Which response by the public health nurse is best supported by the evidence presented in the course material?",
  "options": [
   "Both approaches produce roughly equal gains, so the decision should be based on cost alone",
   "Prevention programs cannot be evaluated quantitatively, so the comparison cannot be made",
   "Population-focused public health approaches could prevent up to 70% of early deaths, compared with about 10% attributable to medical treatment, yet public health receives only about 3% of national health expenditures",
   "Medical treatment prevents the majority of early deaths, so the catheterization lab is the better investment"
  ],
  "correct": [
   2
  ],
  "rationale": "The course material states that population-focused public health approaches could help prevent up to 70% of early deaths in America compared with only 10% for medical treatment, while only about 3% of national health expenditures support governmental public health functions - the central argument for investing upstream. Claiming the two are equivalent or that medical treatment dominates contradicts the data. The claim that prevention cannot be measured is the subtlest trap: it sounds appropriately humble, but the entire discipline rests on measurable population metrics, and conceding that point would surrender the argument the nurse is best equipped to win."
 },
 {
  "id": "n525e1q18",
  "exam": 1,
  "topic": "Ten essential services",
  "type": "mcq",
  "stem": "A health department investigates a cluster of Legionella cases, identifies a contaminated cooling tower, and orders it remediated. Which essential public health service is most clearly demonstrated?",
  "options": [
   "Assure an effective system that enables equitable access to individual services and care",
   "Investigate, diagnose, and address health problems and hazards affecting the population",
   "Communicate effectively to inform and educate people about health",
   "Build and support a diverse and skilled public health workforce"
  ],
  "correct": [
   1
  ],
  "rationale": "Investigating a disease cluster, identifying its source, and abating that source is the textbook expression of the essential service to investigate, diagnose, and address health problems and hazards affecting the population. Communication would apply if the question centered on notifying the public or issuing guidance, which the stem does not describe. Workforce development and assuring equitable access are both genuine essential services but describe system capacity and service availability rather than outbreak response. Note that the legal authority to compel remediation also touches the essential service of using legal and regulatory actions - but the action being asked about, from cluster to source to abatement, is the investigation itself."
 },
 {
  "id": "n525e1q19",
  "exam": 1,
  "topic": "Healthy People 2030",
  "type": "mcq",
  "stem": "A public health nurse planning a community program wants to use Healthy People 2030 correctly. Which use of the document is most appropriate?",
  "options": [
   "Adopt the national objective's target value as the program's goal without modification, since the targets are nationally validated",
   "Use it as a national benchmark to identify high-priority problems, compare local data against national targets, and frame measurable objectives",
   "Use it to determine which clinical treatments should be reimbursed in the community",
   "Use it as a regulatory standard that local health departments are legally required to meet"
  ],
  "correct": [
   1
  ],
  "rationale": "Healthy People 2030 is a national set of directives that guides public health practice - a framework of overarching goals, measurable objectives, and Leading Health Indicators that lets a nurse benchmark local data against national priorities and write objectives that align with them. It is not legally binding on local departments, and it does not govern reimbursement. The first option is the sophisticated trap: aligning with HP 2030 is correct, but importing a national target unchanged ignores the SMART requirement that an objective be achievable and realistic given local baseline data and resources - a community starting far below the national average needs an interim target it can actually reach."
 },
 {
  "id": "n525e1q20",
  "exam": 1,
  "topic": "Leading Health Indicators",
  "type": "mcq",
  "stem": "Which statement best describes the Leading Health Indicators within Healthy People 2030?",
  "options": [
   "They are the process measures used to audit whether federal grant money was spent correctly",
   "They are state-level objectives that each health department writes for its own jurisdiction",
   "They are the complete list of Healthy People objectives, organized by disease category",
   "They are a small set of high-priority objectives, organized by age group, chosen because they drive the greatest improvement in death and disease"
  ],
  "correct": [
   3
  ],
  "rationale": "The Leading Health Indicators are a subset of roughly two dozen high-priority Healthy People objectives, arranged by age group, selected because they address the issues with the greatest impact on death and disease - they exist to help organizations using HP as a framework focus on what matters most rather than working through hundreds of objectives. Calling them the complete list inverts their purpose, which is selection. They are national, not locally authored, although communities compare themselves against them. They are health outcome and influence priorities, not fiscal audit measures."
 },
 {
  "id": "n525e1q21",
  "exam": 1,
  "topic": "Healthy Cities",
  "type": "mcq",
  "stem": "A city forms a standing council of residents, housing authority staff, the transit agency, the school district, and the health department to address health through the built environment, employment, and education. Which model does this represent?",
  "options": [
   "A community health improvement plan required by hospital tax status",
   "The Healthy Cities model developed by the World Health Organization",
   "The Institute of Medicine's core functions framework",
   "An accountable care organization"
  ],
  "correct": [
   1
  ],
  "rationale": "The Healthy Cities program, developed by WHO, is a global movement promoting health and health equity by addressing the social, environmental, economic, and political determinants of health at the local level, working across sectors such as housing, transportation, education, environment, employment, and public safety. The defining features in the stem are the multisector membership and the focus on conditions outside the health care system. A CHIP is the long-term plan that follows a community health assessment and is a document rather than a standing cross-sector body; the core functions framework describes what public health does, not this organizational structure; and an accountable care organization is a payment and delivery arrangement among clinical providers."
 },
 {
  "id": "n525e1q22",
  "exam": 1,
  "topic": "Poverty and economic stability",
  "type": "sata",
  "stem": "A public health nurse is connecting a family in poverty to programs that address economic stability and nutrition. Which programs are appropriate referrals? Select all that apply.",
  "options": [
   "WIC (Special Supplemental Nutrition Program for Women, Infants, and Children)",
   "SNAP (Supplemental Nutrition Assistance Program)",
   "TANF (Temporary Assistance for Needy Families)",
   "Head Start and Early Head Start",
   "The Consumer Confidence Report from the local water utility"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Addressing poverty relies on policy at local, state, and national levels and on programs that assist with food, rent, health care, and education - WIC, SNAP, TANF, Head Start, and Early Head Start are the examples named in the course material, alongside career counseling and employment programs. The Consumer Confidence Report is the trap: it is a real and important public health document, an annual drinking water quality report required under the Clean Water Act framework and useful in an environmental assessment, but it delivers no economic or nutritional assistance to a family. Recognizing a familiar public health term is not the same as knowing what it does."
 },
 {
  "id": "n525e1q23",
  "exam": 1,
  "topic": "Role of the public health nurse",
  "type": "mcq",
  "stem": "A nurse new to a health department asks how to know whether a proposed activity fits the public health nurse role. Which principle is most useful?",
  "options": [
   "The activity must take place outside of a hospital or clinic building",
   "The intervention is aimed at the community or population level, even when it begins with an individual client",
   "The activity must be reimbursable by a third-party payer",
   "The activity must be ordered by a physician or nurse practitioner"
  ],
  "correct": [
   1
  ],
  "rationale": "The defining feature of public health nursing is that the unit of care and the level of intervention is the community or population as a whole, including how community resources and conditions affect the health of individuals, families, and groups within it. Setting is the classic trap and the first distractor: care delivered in a home is not automatically population-focused, and population work can be done from an office. Reimbursability describes billing structures, which is one reason population work is chronically underfunded rather than a definition of it. Requiring a provider order confuses dependent nursing actions with the independent assessment, education, advocacy, and program development that characterize the role."
 },
 {
  "id": "n525e1q24",
  "exam": 1,
  "topic": "Future directions",
  "type": "sata",
  "stem": "A nurse is discussing why care continues to shift from hospitals into community settings. Which factors support this trend? Select all that apply.",
  "options": [
   "Care delivered in the community generally costs less than inpatient care",
   "Many people prefer to remain at home rather than be treated in a hospital",
   "Models such as hospital-at-home are expanding the acuity that can be managed outside the hospital",
   "Community settings require less nursing judgment, so staffing is simpler",
   "Population health leadership roles for nurses currently face no significant barriers"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The drivers identified in the course material are cost, patient preference for remaining at home, and the growth of models such as hospital-at-home that push higher-acuity care into community settings, with the nurse's community role expected to expand accordingly. The fourth option is false and clinically dangerous: community practice demands more independent judgment, not less, because the nurse works without immediate backup and must distinguish independent from dependent actions. The fifth is directly contradicted by the material, which names barriers to nurses moving into leadership roles for population health initiatives as an ongoing problem - overstating progress is as much an error as ignoring it."
 },
 {
  "id": "n525e1q25",
  "exam": 1,
  "topic": "COVID-19 and global health",
  "type": "mcq",
  "stem": "During a discussion of the COVID-19 pandemic, a student asks why a public health nurse in the United States should care whether low-income countries can afford vaccine. Which response reflects population health reasoning?",
  "options": [
   "It is relevant only for nurses employed by international agencies",
   "It is primarily an ethical concern with no practical bearing on domestic disease rates",
   "Uncontrolled transmission anywhere allows new variants to emerge, so domestic risk persists until vaccination is global",
   "Domestic risk ends once national vaccination coverage exceeds the herd immunity threshold"
  ],
  "correct": [
   2
  ],
  "rationale": "The course material states the point directly: we remain at risk for new variants until the world is vaccinated, and asks students to consider living in a country that cannot afford the vaccine. Continued transmission in undervaccinated populations generates variants that cross borders regardless of domestic coverage, which is why global equity is a domestic epidemiologic concern and not only a moral one. The herd immunity distractor is the strongest because the concept is real, but a national threshold offers no durable protection against a variant that escapes existing immunity - and distributive justice, the fair allocation of resources, applies across populations as well as within them."
 },
 {
  "id": "n525e2q01",
  "exam": 2,
  "topic": "Vulnerable populations",
  "type": "sata",
  "stem": "A nurse is identifying which groups in a community are at greatest risk for adverse health effects from environmental hazards. Which groups should the nurse prioritize? Select all that apply.",
  "options": [
   "Infants and small children living in the community",
   "Senior citizens living in the community",
   "Recent immigrants living in congregate housing",
   "Pregnant clients",
   "Adults employed in climate-controlled office buildings",
   "Nurses working in a community hospital"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Everyone exposed to an environmental hazard is at some risk, but the populations identified as most vulnerable are children, older adults, pregnant clients, the immunocompromised, and groups living in poverty - children because of hand-to-mouth behavior, developing neurological systems, and higher intake relative to body weight; older adults because of reduced reserve and comorbidity; pregnant clients because of fetal susceptibility; and people in crowded or substandard housing because of exposure intensity. Office workers and hospital nurses are the traps: both have real occupational exposures, and 'sick building syndrome' is a genuine indoor air problem, but neither group carries the physiologic susceptibility or the housing-related exposure burden that defines the priority populations here."
 },
 {
  "id": "n525e2q02",
  "exam": 2,
  "topic": "Environmental justice",
  "type": "mcq",
  "stem": "A city's only municipal incinerator, two hazardous waste transfer stations, and a highway interchange are all located in the same low-income neighborhood, which also has the city's highest rates of childhood asthma and elevated blood lead levels. Which concept best describes this pattern?",
  "options": [
   "Veracity, because the city has disclosed the locations of the facilities",
   "A violation of environmental justice, because one group bears a disproportionate share of negative environmental health consequences",
   "Utilitarianism, because siting facilities in one area serves the greatest number of people",
   "Formative evaluation, because the health outcomes are being measured while the facilities operate"
  ],
  "correct": [
   1
  ],
  "rationale": "Environmental justice is the principle that no group of people should bear a disproportionate share of negative environmental health consequences regardless of race, culture, or income, and the material notes specifically that low-income populations are more likely to live near a hazardous waste site or incinerator and to have children with lead poisoning or asthma. Utilitarianism is the dangerous distractor because it is a real ethical concept about the greatest good for the greatest number, and it is exactly the reasoning historically used to justify this siting pattern - but concentrating the harm on one community is what environmental justice prohibits. Veracity is truth-telling and formative evaluation is mid-program assessment; neither names this inequity."
 },
 {
  "id": "n525e2q03",
  "exam": 2,
  "topic": "Distributive justice",
  "type": "mcq",
  "stem": "A public health nurse learns that a new asthma education program will be offered only at the downtown clinic, which is not served by any bus route from the two neighborhoods with the highest asthma rates. Which action best applies distributive justice?",
  "options": [
   "Advocate for the program to be offered in multiple community locations so access is equitable across neighborhoods",
   "Document the barrier and proceed, since the program is available to anyone who chooses to attend",
   "Prioritize enrollment for the clients who arrive first, since that is impartial",
   "Refer affected families to a different clinic in a neighboring city"
  ],
  "correct": [
   0
  ],
  "rationale": "Distributive justice is the fair and equitable allocation of resources and benefits across a community, and the course material uses exactly this scenario - ensuring immunizations or programs are delivered in multiple locations rather than one - as its example. Offering a program that the highest-risk neighborhoods cannot physically reach is named in the material as an example of maleficence: intentionally implementing a program without considering transportation. First-come-first-served is the seductive distractor because it feels neutral, but formal equality of process on top of unequal access reproduces the disparity. Referring families out of the city shifts the burden onto them rather than correcting the distribution."
 },
 {
  "id": "n525e2q04",
  "exam": 2,
  "topic": "I PREPARE",
  "type": "mcq",
  "stem": "A client reports headaches and nausea that resolve entirely on weekends and return within hours of arriving at work. Which component of the I PREPARE model does this finding belong to?",
  "options": [
   "Activities, because the pattern follows the client's weekly schedule",
   "Investigate potential exposures, because symptoms that improve away from home or work signal a possible environmental cause",
   "Residence, because the symptoms may originate in the client's housing",
   "Referrals and resources, because the client needs an occupational medicine consultation"
  ],
  "correct": [
   1
  ],
  "rationale": "The I in I PREPARE is Investigate potential exposures, and its two defining questions are whether the client has ever felt sick after contact with a chemical, pesticide, or other substance, and whether any symptoms improve when the client is away from home or work. The symptom-remission pattern described is the second question almost verbatim. Referral will likely follow, but the R for referrals and resources is the action taken after the exposure history establishes a concern. Residence asks about the home's age, heating, remodeling, stored chemicals, and water source. Activities asks about hobbies such as soldering, gardening, fishing, hunting, and pesticide use - the work-schedule correlation is an exposure clue, not a hobby."
 },
 {
  "id": "n525e2q05",
  "exam": 2,
  "topic": "I PREPARE",
  "type": "sata",
  "stem": "A nurse is completing the RESIDENCE component of the I PREPARE environmental health assessment. Which questions belong to this component? Select all that apply.",
  "options": [
   "When was your home built?",
   "What type of heating do you have?",
   "Have you recently remodeled your home?",
   "Where does your drinking water come from?",
   "Do you wear personal protective equipment on the job?",
   "Do you live near a hazardous waste site or landfill?"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Residence addresses the dwelling itself: the year it was built (the pre-1978 lead paint threshold), the heating type, recent remodeling, chemicals stored on the property, and the source of drinking water. Personal protective equipment belongs to Present Work, along with exposure to solvents, dusts, fumes, radiation, noise, and pesticides and knowledge of Material Safety Data Sheets. Proximity to a hazardous waste site or landfill belongs to Environmental Concerns, which covers neighborhood air, water, and soil and nearby industries or farms. The last two options are the intended traps because both are unquestionably about where the client lives and works - the test is whether the nurse knows which letter of the mnemonic owns each question."
 },
 {
  "id": "n525e2q06",
  "exam": 2,
  "topic": "I PREPARE",
  "type": "mcq",
  "stem": "A nurse has completed an environmental exposure history on a client with a suspected pesticide exposure and now needs a resource to identify the health effects of the specific compound involved. Which resource is most appropriate?",
  "options": [
   "The Agency for Toxic Substances and Disease Registry",
   "The Community Health Improvement Plan for the client's town",
   "The Census Bureau's American Community Survey",
   "The National Vital Statistics System"
  ],
  "correct": [
   0
  ],
  "rationale": "The Agency for Toxic Substances and Disease Registry is the referral resource named in the R component of I PREPARE for the health effects of specific toxic substances, alongside the Association of Occupational and Environmental Clinics, the EPA, Material Safety Data Sheets, OSHA, and the local health department, environmental agency, and poison control center. The Census provides demographic and socioeconomic data, a CHIP is a community's long-term health improvement plan, and the National Vital Statistics System supplies births and deaths including the infant mortality rate. All three are legitimate public health data sources - and all three are useless for determining what a particular pesticide does to the human body."
 },
 {
  "id": "n525e2q07",
  "exam": 2,
  "topic": "Lead - primary prevention",
  "type": "sata",
  "stem": "A public health nurse is designing PRIMARY prevention for childhood lead exposure in a neighborhood of pre-1978 triple-deckers. Which interventions are primary prevention? Select all that apply.",
  "options": [
   "Educating families that homes built before 1978 may contain lead paint",
   "Working with banks to provide low-interest abatement loans to landlords",
   "Teaching caregivers that imported painted toys and hand-me-down painted cribs may contain lead",
   "Obtaining capillary blood lead levels on every child at the neighborhood clinic",
   "Referring a child with an elevated level to a neurologist for developmental evaluation"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Primary prevention for lead means identifying at-risk populations and eliminating exposure before it happens - educating about pre-1978 housing, imported painted toys, and painted hand-me-down furniture, and working with banks on low-interest loans so landlords can actually remove the hazard. Blood lead testing is secondary prevention: it detects exposure that has already occurred, even when performed on asymptomatic children, and the material lists checking the blood for lead under secondary. Neurologic referral is tertiary. The financing option is the one students most often misclassify, because a loan program feels administrative rather than clinical - but removing the lead from the wall is the single most upstream act available."
 },
 {
  "id": "n525e2q08",
  "exam": 2,
  "topic": "Lead - secondary prevention",
  "type": "mcq",
  "stem": "After one child in an apartment building is found to have an elevated blood lead level, the nurse tests the other children living in the building and reviews screening results across the neighborhood school. Which level of prevention and core function does this represent?",
  "options": [
   "Tertiary prevention and assurance",
   "Secondary prevention and assessment",
   "Primary prevention and policy development",
   "Primary prevention and assurance"
  ],
  "correct": [
   1
  ],
  "rationale": "Testing other children and reviewing school-wide screening results detects disease early in people who already have the exposure but no clinical signs, which is secondary prevention, and the epidemiologic work of determining who else might be at risk is the assessment core function. The material lists under secondary prevention for lead: check the blood for lead, assess for signs in the general school population, epidemiology to determine who else is at risk, and testing. Primary prevention would be preventing the exposure in the first place, and assurance would be guaranteeing that abatement or treatment services are actually available. Case-finding is assessment, not assurance - the nurse is measuring the problem, not delivering the remedy."
 },
 {
  "id": "n525e2q09",
  "exam": 2,
  "topic": "Lead - laboratory monitoring",
  "type": "mcq",
  "stem": "A community health nurse is reviewing laboratory results for a child with lead poisoning. Because lead interferes with red blood cell production, which laboratory values are most important to monitor?",
  "options": [
   "BUN and creatinine",
   "Hemoglobin and hematocrit",
   "Prothrombin time and INR",
   "Sodium and potassium"
  ],
  "correct": [
   1
  ],
  "rationale": "Lead inhibits several enzymes in the heme synthesis pathway, so it impairs red blood cell production and produces anemia - the material directs the nurse to watch for anemia and check hemoglobin and hematocrit levels. BUN and creatinine are the strongest distractor because lead is genuinely nephrotoxic and the material lists kidney disorders among its effects, so renal monitoring is clinically appropriate - but those values assess kidney function, not red cell production, which is what the question asks about. Electrolytes and coagulation studies are not the mechanism by which lead causes hematologic harm."
 },
 {
  "id": "n525e2q10",
  "exam": 2,
  "topic": "Lead - risk factors",
  "type": "sata",
  "stem": "A nurse is teaching a community group about less widely recognized sources of lead exposure. Which statements are accurate? Select all that apply.",
  "options": [
   "A child deficient in calcium, iron, or zinc absorbs more lead from the gut",
   "Some imported cosmetics, including kohl eyeliner, may contain lead; check for surma, sindoor, or kohl on the label",
   "Tobacco smoke contains lead, and both direct and secondhand exposure matter",
   "Refinishing older furniture and living in a home under renovation can raise exposure",
   "Lead poisoning is fully reversible once chelation therapy is completed",
   "A fetus is protected from maternal lead because lead does not cross the placenta"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Nutritional deficiency in calcium, iron, or zinc increases gastrointestinal lead absorption, which is why lead exposure and food insecurity compound one another. Imported cosmetics containing surma, sindoor, or kohl, tobacco smoke including secondhand, and renovation or furniture refinishing are all named sources. The two false statements are the critical ones: lead poisoning is irreversible, and chelation reduces the body burden without undoing neurologic injury already sustained - which is why chelation is classified as tertiary prevention. Lead does cross the placenta, so an elevated maternal level threatens the fetus, and lead also affects future reproduction."
 },
 {
  "id": "n525e2q11",
  "exam": 2,
  "topic": "Lead - disparities",
  "type": "mcq",
  "stem": "A nurse reviewing lead surveillance data notes that non-Hispanic Black children account for roughly 60% of lead exposure nationally. Which interpretation reflects appropriate population health reasoning?",
  "options": [
   "The finding is a disparity but cannot be addressed by nursing intervention",
   "The finding reflects a genetic difference in lead absorption among racial groups",
   "The finding reflects structural conditions such as housing age, quality, and residential segregation, making it a health inequity rather than a biological difference",
   "The finding indicates that families in these communities are less adherent to prevention teaching"
  ],
  "correct": [
   2
  ],
  "rationale": "Race is a social rather than a biological explanation for lead exposure: the disproportionate burden follows from the age and condition of housing stock, the legacy of redlining and segregation, landlord disinvestment, and unequal abatement enforcement - unfair, avoidable, structurally produced, and therefore a health inequity. The genetic option is the error the course explicitly guards against, since the mechanism is exposure, not absorption physiology. Blaming family adherence relocates a structural problem onto individuals and would send the nurse toward education when abatement and policy are needed. Declaring it beyond nursing influence contradicts the nurse's role in advocacy, policy, and abatement financing."
 },
 {
  "id": "n525e2q12",
  "exam": 2,
  "topic": "Indoor air quality",
  "type": "sata",
  "stem": "A nurse is performing a home environmental assessment. Which findings represent recognized indoor environmental health hazards? Select all that apply.",
  "options": [
   "Lead paint in a home built in 1962",
   "Radon detected in the basement",
   "Visible mold around a long-standing plumbing leak",
   "Pesticides stored in an unlocked cabinet under the kitchen sink",
   "Tobacco smoke from a household member who smokes indoors",
   "A termite infestation in an exterior deck"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The home hazards named in the course material are lead, radon gas, moisture and mold, pesticides, tobacco smoke, consumer products, and biologic agents such as animal dander, dust mites, bacteria, and insects. Lead, radon, mold at a plumbing leak, accessible pesticides, and indoor tobacco smoke all qualify. Termite infestation is the deliberate distractor - it is a structural pest problem, and the quiz in the source material lists it as an incorrect answer; note, however, that the pesticides used to treat it would be a hazard. Radon deserves emphasis because it comes from natural radioactive decay of uranium in soil, rock, and private well water, so it is present without any human activity and is detectable only by testing."
 },
 {
  "id": "n525e2q13",
  "exam": 2,
  "topic": "Sick building syndrome",
  "type": "mcq",
  "stem": "Employees in an older office building report headache, eye irritation, and fatigue that resolve within hours of leaving work each day. No single causative agent is identified. Which explanation is most consistent with these findings?",
  "options": [
   "Legionellosis from the building's cooling system",
   "Mass psychogenic illness, since no agent was identified",
   "Sick building syndrome, in which occupants develop symptoms that disappear when they go outdoors, often related to poor ventilation in older buildings",
   "Radon exposure, which characteristically produces acute mucosal irritation"
  ],
  "correct": [
   2
  ],
  "rationale": "Sick building syndrome is defined by occupants developing symptoms that disappear when they go outdoors, and it is associated with old buildings and inadequate ventilation that allows volatile organic compounds from textiles, cleaners, paints, deodorants, and office equipment, together with biologic agents, to accumulate. The absence of a single identified agent is characteristic of the syndrome rather than evidence against an environmental cause, which is what makes the psychogenic option wrong even though it will be raised. Radon causes lung cancer through chronic exposure and produces no acute irritation. Legionella causes pneumonia or Pontiac fever, not symptoms that clear within hours of leaving."
 },
 {
  "id": "n525e2q14",
  "exam": 2,
  "topic": "Environmental agencies",
  "type": "mcq",
  "stem": "A nurse wants to review the annual drinking water quality report for the community she serves, including testing for lead in the municipal water supply. Which document should the nurse obtain?",
  "options": [
   "The Community Health Improvement Plan",
   "The Material Safety Data Sheet for the municipal treatment plant",
   "The Toxicological Profile from the Agency for Toxic Substances and Disease Registry",
   "The Consumer Confidence Report for the local water system"
  ],
  "correct": [
   3
  ],
  "rationale": "The Consumer Confidence Report is the annual drinking water quality report that public water systems must publish, and the material specifically directs students to check it for lead in the water supply in cities with aging lead service lines. A Material Safety Data Sheet describes hazards of an individual chemical product in a workplace. A CHIP is a community's long-term health improvement plan. An ATSDR Toxicological Profile summarizes what a substance does to the body but reports nothing about a particular town's water. Each distractor is a real document a public health nurse uses, which is the point - the skill tested is matching the question to the right source."
 },
 {
  "id": "n525e2q15",
  "exam": 2,
  "topic": "Environmental legislation",
  "type": "mcq",
  "stem": "A nurse is advocating for stronger protection of workers at a manufacturing plant where employees are exposed to solvents and excessive noise. Which law is the most direct basis for this advocacy?",
  "options": [
   "The Federal Insecticide, Fungicide, and Rodenticide Act",
   "The National Environmental Policy Act",
   "The Clean Air Act",
   "The Occupational Safety and Health Act"
  ],
  "correct": [
   3
  ],
  "rationale": "The Occupational Safety and Health Act governs workplace exposures, including chemical agents, noise, personal protective equipment, and the hazard communication requirements behind Material Safety Data Sheets, so it is the direct legal basis for advocacy about solvent and noise exposure in a plant. The Clean Air Act regulates ambient and emitted air pollution rather than the internal work environment. FIFRA regulates pesticide registration and labeling. The National Environmental Policy Act requires environmental impact assessment for federal actions and is the most tempting wrong answer because its name sounds broadest - but breadth of title is not the same as jurisdiction over a specific workplace."
 },
 {
  "id": "n525e2q16",
  "exam": 2,
  "topic": "Environmental legislation",
  "type": "sata",
  "stem": "Which federal statutes are identified as government environmental protections relevant to public health nursing? Select all that apply.",
  "options": [
   "The National Environmental Policy Act",
   "The Federal Insecticide, Fungicide, and Rodenticide Act",
   "The Clean Water Act",
   "The Clean Air Act",
   "The Occupational Safety and Health Act",
   "The Health Insurance Portability and Accountability Act"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The statutes named in the environmental nursing material are the National Environmental Policy Act, FIFRA, the Clean Water Act with its Consumer Confidence Reports, the Clean Air Act, and OSHA. HIPAA is the trap and it is a strong one, because nursing students encounter it constantly and it is unquestionably federal health law - but it governs the privacy and portability of health information, not environmental exposure. Knowing which agency or law owns a problem determines who a nurse contacts and what leverage exists: the EPA, FDA, Department of Agriculture, and CDC operate nationally, with state agencies and local health departments carrying much of the enforcement."
 },
 {
  "id": "n525e2q17",
  "exam": 2,
  "topic": "Risk assessment",
  "type": "mcq",
  "stem": "A nurse is participating in a formal environmental risk assessment after a chemical spill near a residential area. Which activity belongs to the FIRST phase of this process?",
  "options": [
   "Determining whether the chemical has been released into air, water, soil, or food",
   "Estimating how much of the chemical might enter the human body",
   "Assessing the existing toxicology and epidemiology data on the chemical",
   "Characterizing the route and duration of exposure and integrating the earlier findings"
  ],
  "correct": [
   2
  ],
  "rationale": "Risk assessment is the process of determining the probability of a health threat associated with an exposure, and it proceeds in four phases: first assessing the available data from toxicology and epidemiology, then determining whether and how the chemical has been released into air, water, soil, or food, then estimating how much might actually enter the human body, and finally integrating the prior steps by considering the chemical's toxicity, the source and amount of exposure, and the route and duration. Each distractor is a genuine phase placed out of order. Beginning with what is already known about the substance is what keeps the remaining steps interpretable - a release estimate means little without knowing the compound's potency."
 },
 {
  "id": "n525e2q18",
  "exam": 2,
  "topic": "Environmental health sciences terms",
  "type": "mcq",
  "stem": "Two solvents are released in equal quantities, but one produces severe hepatic injury at a far lower dose than the other. Which term describes this difference?",
  "options": [
   "Toxicology, the study of the adverse effects of chemicals on living organisms",
   "Potency, the relative amount of a substance required to produce a given effect",
   "Epidemiology, the study of the distribution and determinants of health states in populations",
   "Teratogenesis, the production of structural abnormalities in a developing fetus"
  ],
  "correct": [
   1
  ],
  "rationale": "Potency describes how much of a substance is needed to produce a given effect, so a solvent causing injury at a much lower dose is the more potent one. Toxicology is the broader science within which potency is one property, and it is the intended trap because the scenario is unmistakably toxicologic - naming the discipline does not name the dose-effect relationship being described. Epidemiology studies distribution and determinants of health in populations. Teratogenesis is one specific adverse outcome, and the material lists it among the harms water pollution may promote, along with foodborne illness, infection, and cancer from chronic exposure."
 },
 {
  "id": "n525e2q19",
  "exam": 2,
  "topic": "Epidemiological triangle",
  "type": "mcq",
  "stem": "A nurse investigating an outbreak of gastrointestinal illness traced to a private well applies the epidemiological triangle. Which element of the triangle does the contaminated well represent?",
  "options": [
   "The agent",
   "The host",
   "The environment",
   "The vector of transmission from host to host"
  ],
  "correct": [
   2
  ],
  "rationale": "The epidemiological triangle comprises agent, host, and environment. The pathogen in the water is the agent, the people who drink it are the hosts, and the well - the physical circumstances permitting contact between agent and host - is the environment. Confusing the well with the agent is the common error and the reason it appears first: the well is the medium, not the causative organism. Host factors are the characteristics that determine susceptibility, such as age, immune status, and nutrition. The triangle is useful in environmental nursing because it shows that interventions can target any of the three points, and environmental control is frequently the most upstream option available."
 },
 {
  "id": "n525e2q20",
  "exam": 2,
  "topic": "Water pollution",
  "type": "sata",
  "stem": "A nurse is teaching about health effects that water pollution may promote. Which outcomes are appropriate to include? Select all that apply.",
  "options": [
   "Foodborne illness",
   "Infection",
   "Cancer, with chronic exposure",
   "Teratogenesis",
   "Immediate reversal of all effects once the water source is closed"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Water pollution may promote foodborne illness, infection, cancer with chronic exposure, and teratogenesis. Pollutants enter water at well-identified point sources such as industrial and municipal wastewater pipes, and also through non-point sources - storm water and runoff or seepage from land, including agriculturally contaminated soil - which is why closing a single pipe does not resolve a watershed problem. The final option is false and is the reasoning error the item targets: closing a contaminated source stops new exposure but does not undo harm already done, particularly for carcinogenic and teratogenic effects whose consequences appear long after exposure ends."
 },
 {
  "id": "n525e2q21",
  "exam": 2,
  "topic": "Food safety",
  "type": "sata",
  "stem": "A nurse is teaching food safety at a community center. Which principles should the teaching include? Select all that apply.",
  "options": [
   "Wash hands before and during food preparation",
   "Clean all food preparation surfaces",
   "Wash produce before eating or cooking it",
   "Cook and hold foods at safe temperatures",
   "Separate raw meats from ready-to-eat foods to prevent cross-contamination",
   "Taste a small amount of a questionable food to determine whether it is safe"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The food handling and safety principles in the course material are clean hands, clean surfaces, clean food, correct temperatures, and separation, along with recognizing the symptoms of food poisoning. Tasting suspect food is the one unsafe option and is included because it reflects a genuine household habit: infectious doses for organisms such as Salmonella and enterohemorrhagic E. coli, and preformed toxins such as those from Staphylococcus aureus and Clostridium botulinum, can be present in quantities far too small to alter taste, smell, or appearance. Contamination of the food supply can also originate industrially with mercury, lead, cadmium, or PCBs, or agriculturally with pesticides, antibiotics, and hormones - hazards no amount of careful home handling removes."
 },
 {
  "id": "n525e2q22",
  "exam": 2,
  "topic": "Food contamination sources",
  "type": "mcq",
  "stem": "A nurse is counseling a pregnant client about industrial contaminants in the food supply. Which food group is the most important to address regarding methylmercury?",
  "options": [
   "Fresh produce carrying pesticide residues",
   "Poultry treated with antibiotics",
   "Certain fish and shellfish",
   "Processed foods containing packaging residues"
  ],
  "correct": [
   2
  ],
  "rationale": "Industrial contaminants including mercury, lead, cadmium, and PCBs concentrate in fish and shellfish, and also appear in poultry, milk, and eggs - mercury in particular biomagnifies up the aquatic food chain, which is why predatory fish carry the highest burden and why pregnant clients receive specific guidance about which species to limit. Packaging residues, lubricants, and cleaning agents are food-processing contaminants. Pesticide and antibiotic residues are agricultural contaminants that appear in all foods, milk, and some poultry. All four categories are real, and the distinction the question draws is between contaminant classes - the poultry option is deliberately paired with the wrong contaminant."
 },
 {
  "id": "n525e2q23",
  "exam": 2,
  "topic": "Core functions applied to environment",
  "type": "mcq",
  "stem": "A nurse in a community with aging housing wants to apply the core function of POLICY DEVELOPMENT to childhood lead exposure. Which action best fits?",
  "options": [
   "Reviewing blood lead screening rates by census tract",
   "Establishing a walk-in clinic where any child can receive a blood lead test",
   "Referring children with elevated levels to a pediatric neurologist",
   "Drafting and advocating for a municipal ordinance requiring lead inspection at every rental unit turnover"
  ],
  "correct": [
   3
  ],
  "rationale": "Policy development creates, champions, and implements policies, plans, and laws that affect health, so drafting and advocating for a mandatory inspection ordinance is the clearest expression of it - and it is also primary prevention, since inspection at turnover finds the hazard before a child is exposed. Reviewing screening rates by census tract is assessment. Opening a walk-in testing clinic is assurance, guaranteeing that a needed service is accessible, and it is secondary prevention. Neurologic referral is tertiary prevention and individual care coordination. A single lead problem can be approached through all three core functions, and the question tests whether the nurse can tell which lever each action pulls."
 },
 {
  "id": "n525e2q24",
  "exam": 2,
  "topic": "Nurse competencies in environmental health",
  "type": "sata",
  "stem": "Which competencies are expected of all nurses in environmental health, regardless of specialty? Select all that apply.",
  "options": [
   "Assessment of environmental exposures and appropriate referral",
   "Understanding the correlation between the environment and health",
   "Education of clients and communities about environmental risk",
   "Advocacy, including policy-level action",
   "Attention to the ethical dimensions of environmental health",
   "Independently performing quantitative industrial hygiene air sampling and interpreting the results"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The competencies identified for all nurses are assessment and referral, understanding the correlation between environment and health, education, advocacy including policy, and ethics. Quantitative industrial hygiene sampling is the trap: it is a genuine and essential part of environmental health practice, but it belongs to industrial hygienists and environmental engineers, and the disciplines that work most closely with nurses in environmental health are precisely those specialists - along with toxicologists and epidemiologists. Knowing the boundary matters clinically, because a nurse who believes measurement is her job may delay the referral that actually characterizes the hazard."
 },
 {
  "id": "n525e2q25",
  "exam": 2,
  "topic": "HP 2030 environmental objectives",
  "type": "sata",
  "stem": "Which objectives are consistent with the national environmental health goals in Healthy People 2030? Select all that apply.",
  "options": [
   "Reduce blood lead levels in children",
   "Reduce the number of U.S. homes with lead-based paint or related hazards",
   "Increase testing for lead-based paint in pre-1978 housing",
   "Increase the number of homes with radon mitigation and radon-reducing features",
   "Reduce pesticide exposures that require a visit to a health care facility",
   "Increase the number of new schools built adjacent to major highways to improve transportation access"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The national environmental health goals pair reductions - toxic air emissions, waterborne disease outbreaks, per capita domestic water use, blood lead levels in children, pesticide exposures requiring health care visits, indoor allergen levels, homes with lead hazards, chemical and pollutant exposure, risks from hazardous sites, and new schools near highways - with increases in alternative transportation, safe beach days, recycling, lead paint testing in pre-1978 housing, environmental hazard monitoring, radon mitigation, school health and safety policies, and environmental health information systems. The last option inverts a real objective: building schools near highways is something to reduce, because traffic-related air pollution raises asthma and impairs lung development in children."
 },
 {
  "id": "n525e3q01",
  "exam": 3,
  "topic": "Cultural blindness",
  "type": "mcq",
  "stem": "A nurse states, 'I am not going to change my nursing practice. I don't see color and I treat everyone exactly the same way.' This statement is an example of:",
  "options": [
   "Stereotyping",
   "Ethnocentrism",
   "Cultural blindness",
   "Cultural imposition"
  ],
  "correct": [
   2
  ],
  "rationale": "Cultural blindness is the inability or unwillingness to recognize and acknowledge cultural differences, and the material quotes this exact statement - 'I don't see color, I treat all my patients the same' - as its definition. The statement sounds egalitarian, which is why it persists, but treating everyone identically ignores the differences in belief, practice, language, and decision-making that determine whether care will work. Stereotyping is applying oversimplified or negative views of a group to an individual. Cultural imposition is forcing one's own beliefs onto someone from another culture. Ethnocentrism is the belief that one's own culture is superior - 'my way is the right way.' All four are barriers to cultural competence, and the distinction is the mechanism each one uses."
 },
 {
  "id": "n525e3q02",
  "exam": 3,
  "topic": "Cultural concepts",
  "type": "mcq",
  "stem": "A nurse tells a client who uses herbal remedies, 'Those don't work. You need to stop taking them and use real medicine.' Which barrier to culturally competent care does this represent?",
  "options": [
   "Cultural awareness",
   "Cultural imposition",
   "Cultural blindness",
   "Cultural diversity"
  ],
  "correct": [
   1
  ],
  "rationale": "Cultural imposition is imposing one's own beliefs and values onto a person from another culture, which is exactly what dismissing a client's healing practices and substituting the nurse's own framework does. Cultural blindness would be failing to recognize that the client has a distinct cultural practice at all - here the nurse recognizes it and overrides it. Cultural awareness is the self-analysis of one's own beliefs and attitudes to detect prejudice or bias, which is a step toward competence rather than a barrier. Cultural diversity describes variation across populations. The clinically correct approach is to blend what the client needs to practice with what has been ordered, educating the client and assessing for genuine interactions rather than dismissing the practice."
 },
 {
  "id": "n525e3q03",
  "exam": 3,
  "topic": "Ethnocentrism vs bias",
  "type": "mcq",
  "stem": "A nurse evaluates a client's family structure as 'disorganized' because decisions are made collectively by several elders rather than by the client alone. Which term best describes the nurse's reasoning?",
  "options": [
   "Cultural bias, interpreting another culture using one's own cultural norms as the standard",
   "Implicit bias, since the judgment was automatic and unintentional",
   "Veracity, since the nurse documented an honest observation",
   "Cultural competence, since the nurse identified a family decision-making pattern"
  ],
  "correct": [
   0
  ],
  "rationale": "Cultural bias is the tendency to interpret or evaluate other cultures using one's own cultural norms as the reference point - judging collective decision-making as disorganized applies an individualist standard to a family that operates collectively, and several Asian and Hispanic cultures place family needs above the individual's. The implicit bias option is the strongest distractor and deserves care: implicit bias is automatic and unintentional, and if the judgment were unconscious the label would fit, but the stem describes an articulated evaluation. Recognizing a decision-making pattern would be competence only if the nurse used it to plan care rather than to grade the family. Veracity is truth-telling, and a value judgment is not an objective observation."
 },
 {
  "id": "n525e3q04",
  "exam": 3,
  "topic": "Cultural competence development",
  "type": "mcq",
  "stem": "A nurse is beginning to develop cultural competence before working with a refugee population new to the community. Which action should the nurse take FIRST?",
  "options": [
   "Arrange for a trained interpreter to be available at all visits",
   "Read about the health beliefs and practices of the population's country of origin",
   "Examine the nurse's own attitudes, values, knowledge, and beliefs for prejudice and bias",
   "Identify a community leader who can bridge between the nurse and the population"
  ],
  "correct": [
   2
  ],
  "rationale": "Self-analysis of one's own beliefs and attitudes to detect prejudice or bias is cultural awareness, and the material names it as the first step in developing cultural competence and as a priority for nurses working with immigrants. Every other option is correct and necessary - learning about the culture, using a trained interpreter rather than a family member, and identifying a confidante who can bridge the gap are all explicitly recommended - but each is undermined if the nurse carries unexamined bias into the encounter, because bias shapes which questions get asked and how answers are heard. This is a first-action question: the ordering, not the appropriateness, is what is being tested."
 },
 {
  "id": "n525e3q05",
  "exam": 3,
  "topic": "Cultural assessment",
  "type": "sata",
  "stem": "A nurse is conducting a cultural assessment on a client from an unfamiliar culture who speaks English fluently. Which questions are appropriate? Select all that apply.",
  "options": [
   "Where is your family from?",
   "Do you practice a particular religious faith?",
   "Who makes decisions in your family about health?",
   "Are there specific times when you are prohibited from eating?",
   "What practices do you use to treat your condition?",
   "Can you tell me how much money you make?",
   "Have you ever been to America before?"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Cultural assessment questions should be open-ended and directed at family origin, household composition, decision-making, religious practice and how it affects health, dietary restrictions and fasting, activities used to stay healthy, feelings about prescription medication, and practices used to treat the condition. Income is the trap because financial strain genuinely affects health and economic stability is an SDOH domain - but asking a client to state their income during a cultural assessment is intrusive and off-purpose; food insecurity and medication affordability are screened directly instead. Asking whether someone has been to America before presumes foreign birth from cultural difference, which is the assumption a cultural assessment is meant to avoid."
 },
 {
  "id": "n525e3q06",
  "exam": 3,
  "topic": "Cultural assessment technique",
  "type": "sata",
  "stem": "Which principles should guide a nurse performing a cultural assessment in the community? Select all that apply.",
  "options": [
   "Be attentive to verbal and nonverbal cues in the environment before taking action",
   "Use a trained interpreter when the client has limited English proficiency",
   "Identify a confidante who can help bridge the gap between cultures",
   "Verify and cross-check collected information before acting on it",
   "Avoid premature generalizations from limited observations",
   "Ask the client's school-aged child to interpret, since the child is bilingual and already present"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The recommended approach includes reading environmental and nonverbal cues before acting, knowing community resources, selecting a data-gathering strategy, identifying a confidante to bridge cultures, asking appropriate questions without offending, consulting colleagues with prior experience, using a trained interpreter, talking with formal and informal community leaders, cross-checking information, avoiding premature generalization, and being sincere and honest. Using a child as interpreter is the one wrong option and it is explicitly warned against: it inverts family roles, exposes the child to adult medical content, and makes accurate reporting of sensitive topics unlikely - the material states plainly not to use children to translate."
 },
 {
  "id": "n525e3q07",
  "exam": 3,
  "topic": "Nonverbal communication",
  "type": "mcq",
  "stem": "A nurse notices that a client consistently avoids direct eye contact and stands farther away during conversation than the nurse finds comfortable. Which response demonstrates cultural competence?",
  "options": [
   "Take cues from the client and adjust the nurse's own nonverbal behavior and use of space to match the client",
   "Explain to the client that in American health care, eye contact is expected during assessment",
   "Document that the client appears withdrawn and may be experiencing depression",
   "Move closer and maintain eye contact to convey engagement and build rapport"
  ],
  "correct": [
   0
  ],
  "rationale": "The material states that culturally competent nurses should alter their nonverbal behaviors to match the client they are working with, and that for space the nurse should take cues from the patient and accept that comfortable distance may be closer or farther than the nurse is used to. Moving closer and forcing eye contact imposes the nurse's norms and may be experienced as aggressive or disrespectful. Documenting withdrawal or depression is the most clinically dangerous option, because it converts a cultural communication pattern into a psychiatric finding that will follow the client through the record. Explaining American expectations is cultural imposition dressed as orientation."
 },
 {
  "id": "n525e3q08",
  "exam": 3,
  "topic": "Biological variations",
  "type": "mcq",
  "stem": "A nurse assessing a Filipino infant notes bluish-gray discolorations over the lower back and buttocks that resemble bruising. Which action is most appropriate?",
  "options": [
   "Ask the parents whether they practice coining or cupping on the infant",
   "Report the finding to child protective services immediately, since bruising in an infant is a mandated report",
   "Document the finding as Mongolian spots and take no further action, since these are common in this population",
   "Assess the lesions' characteristics and history, recognizing these may be Mongolian spots, while still reporting if abuse is genuinely suspected"
  ],
  "correct": [
   3
  ],
  "rationale": "Mongolian spots are benign congenital bluish discolorations common in infants of African, Asian, Latino, and Native American descent, and the material presents this as a classic exam scenario: the nurse's duty to protect the child is real and a genuine suspicion must be reported, but a nurse who does not know this variation exists may report a normal finding and traumatize a family. The two errors are symmetrical - reporting reflexively without assessment, and dismissing findings as cultural without assessment. The correct path is assessment first, then report if suspicion survives it. Coining and cupping do produce marks that can be mistaken for abuse, but they are practices of Eastern medicine that leave linear or circular marks on the back, not congenital sacral pigmentation in an infant."
 },
 {
  "id": "n525e3q09",
  "exam": 3,
  "topic": "Traditional Chinese Medicine",
  "type": "sata",
  "stem": "Which practices or beliefs are associated with Traditional Chinese Medicine? Select all that apply.",
  "options": [
   "Illness understood as an imbalance or interruption in the flow of qi",
   "Balance between yin and yang",
   "Acupuncture, acupressure, cupping, and coining (gua sha)",
   "Herbal remedies such as ginseng, ginger, and turmeric",
   "Viewing food as a form of medicine",
   "Use of a sweat lodge and vision quest for purification and healing"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Traditional Chinese Medicine understands illness as imbalance or interruption in the flow of qi, holds that mind, body, spirit, and emotion are never separated, works with yin and yang, and uses acupuncture, acupressure, cupping, coining, herbal medicine, massage, heat therapy, qigong, and tai chi, with food regarded as medicine. Sweat lodge and vision quest belong to Native American healing, which treats spirituality and medicine as inseparable and also uses smudging, drumming, chanting, singing, dancing, healing touch, and herbs. The distractor is a real practice attached to the wrong tradition - and note that acupuncture and herbs appear in both lists, so overlap between traditions does not license collapsing them."
 },
 {
  "id": "n525e3q10",
  "exam": 3,
  "topic": "Latin healing beliefs",
  "type": "sata",
  "stem": "A nurse is preparing to care for a client from a Latin American culture. Which approaches are supported by the course material? Select all that apply.",
  "options": [
   "Build trust through warm pleasantries rather than a cold, purely clinical approach",
   "Address an elder by their last name, as formality is appreciated",
   "Expect that extended family may attend appointments and participate",
   "Recognize that some families expect serious diagnoses to be discussed with the family before the patient",
   "Use the client's bilingual adult child as the interpreter to save time",
   "Assume that every client from a Latin American background holds these beliefs"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The guidance includes building trust through pleasantries and warmth, addressing elders formally by last name, expecting extended family involvement, recognizing that some Latin cultures expect serious diagnoses to be discussed with family first, understanding that curanderos and curanderas provide healing including spiritual cleansing, and knowing that some clients avoid medical care because seeking it signals weakness. Using family as interpreter is warned against regardless of age. The final option is the error the entire unit exists to prevent: these are population-level patterns to guide assessment questions, never predictions about an individual, and the material closes by stating that nurses must not assume all people from the same culture follow the usual norms."
 },
 {
  "id": "n525e3q11",
  "exam": 3,
  "topic": "Cultural knowledge vs stereotyping",
  "type": "mcq",
  "stem": "A nurse has learned that type 2 diabetes is more prevalent among several Native American communities. How should the nurse apply this knowledge to an individual Native American client?",
  "options": [
   "Assume the client likely has undiagnosed diabetes and counsel accordingly",
   "Avoid raising diabetes, since mentioning it could be perceived as stereotyping",
   "Use the knowledge to inform which screening questions and assessments to prioritize, while assessing this client's actual risk factors and self-identified culture",
   "Apply the knowledge only if the client states they live on tribal land"
  ],
  "correct": [
   2
  ],
  "rationale": "The key nursing point is to use cultural knowledge to guide assessment questions rather than to predict behavior or disease - population-level patterns tell the nurse what to ask about and screen for, while the individual's actual risk emerges from assessment of self-identified culture, health beliefs, language, traditional practices, diet, family decision-making, access to care, and personal risk factors. Assuming disease is stereotyping. Avoiding the topic is the trap that sounds most respectful and causes the most harm, since it withholds screening from a population with elevated risk and access barriers. Making the knowledge conditional on residence invents a criterion, and risk varies by tribal nation, geography, and social determinants regardless of where someone lives."
 },
 {
  "id": "n525e3q12",
  "exam": 3,
  "topic": "Population health patterns",
  "type": "sata",
  "stem": "Which health concerns are documented as more prevalent among Native American and Alaska Native populations? Select all that apply.",
  "options": [
   "Type 2 diabetes and related chronic kidney disease",
   "Cardiovascular disease, including hypertension and stroke",
   "Obesity and metabolic disease",
   "Behavioral health concerns including depression, substance use disorder, and suicide risk in some communities",
   "Barriers to preventive and specialty care, particularly in rural or under-resourced areas",
   "Cystic fibrosis"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Documented patterns include type 2 diabetes with chronic kidney disease, cardiovascular disease, obesity and metabolic disease, certain cancers varying by tribal nation, commercial tobacco-related illness, behavioral health concerns including depression, substance use disorder, and suicide, infectious disease concerns such as hepatitis C and tuberculosis, unintentional injuries, SIDS, teenage pregnancy, and barriers to preventive and specialty care. Cystic fibrosis is the distractor: it is most common among people of Northern European ancestry, and it appears on the course's own practice list as a wrong answer. Note also the distinction the material insists on between commercial tobacco use and traditional or ceremonial tobacco practices - a nurse who conflates them will give inappropriate cessation counseling."
 },
 {
  "id": "n525e3q13",
  "exam": 3,
  "topic": "Population health patterns",
  "type": "sata",
  "stem": "A public health nurse is planning screening priorities for a community with a large population of recent immigrants from regions where hepatitis B is endemic. Which screening considerations are supported? Select all that apply.",
  "options": [
   "Chronic hepatitis B screening, given the associated risk of liver disease and liver cancer",
   "Tuberculosis screening based on country of origin and migration history",
   "Type 2 diabetes and cardiometabolic screening, recognizing that risk varies markedly among subgroups",
   "Attention to mental health concerns that may be underrecognized because of stigma or limited access to culturally responsive services",
   "Uniform screening protocols applied identically to everyone identified as Asian, since the category is homogeneous"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Chronic hepatitis B with associated liver disease and liver cancer, tuberculosis related to country of origin, cardiometabolic disease with substantial subgroup variation, certain cancers including liver, stomach, and nasopharyngeal, and underrecognized mental health concerns are all documented patterns, with screening further affected by language access, immigration history, and differences in health beliefs. The final option is the error: 'Asian' encompasses dozens of nationalities, languages, and migration histories with markedly different risk profiles, and the quiz in the source material tests this directly - a nurse must never assume all people from a culture follow the same practices or carry the same risks."
 },
 {
  "id": "n525e3q14",
  "exam": 3,
  "topic": "Population health patterns",
  "type": "sata",
  "stem": "Which health concerns are documented among African and African diaspora populations in the United States? Select all that apply.",
  "options": [
   "Hypertension and cardiovascular disease including stroke",
   "Type 2 diabetes and related kidney disease",
   "Sickle cell disease and trait, particularly with ancestry from malaria-endemic regions of sub-Saharan Africa",
   "Maternal morbidity and mortality disparities among Black women",
   "Mistrust of health systems resulting from historical and contemporary inequities",
   "Lactose tolerance at rates higher than the general population"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "Documented concerns include hypertension and cardiovascular disease, type 2 diabetes with kidney disease, sickle cell disease and trait tied to malaria-endemic ancestry, maternal morbidity and mortality disparities among Black women, HIV and other infectious diseases in some populations, tuberculosis and parasitic infections among immigrants from endemic regions, disparities in prostate and breast cancer, and the effects of discrimination and mistrust on engagement with care. The last option reverses a real finding: lactose intolerance, not tolerance, is more common, which matters for dietary counseling about calcium. Maternal mortality disparities deserve particular emphasis because they persist across income and education levels, which points to racism in care delivery rather than individual risk factors."
 },
 {
  "id": "n525e3q15",
  "exam": 3,
  "topic": "Immigrant categories",
  "type": "mcq",
  "stem": "A public health nurse is describing the four categories of foreign-born persons. Which set is correct?",
  "options": [
   "Economic migrants, climate migrants, refugees, and returnees",
   "Legal or documented immigrants, refugees, nonimmigrants, and unauthorized or undocumented immigrants",
   "Migrants, asylees, guest workers, and naturalized citizens",
   "Citizens, permanent residents, students, and tourists"
  ],
  "correct": [
   1
  ],
  "rationale": "The four categories identified are legal (green card) or documented immigrants, refugees, nonimmigrants, and unauthorized or undocumented immigrants. The distinction matters practically because category determines eligibility for Medicaid and other programs, willingness to engage with government-affiliated services, and the kind of advocacy a nurse must undertake. Immigrants and their US-born children represent roughly a quarter of the population - about 80 million people - with the largest numbers from Mexico, followed by India and China, concentrated in California, New York, Texas, Florida, and New Jersey. The distractors mix real immigration terms into groupings that do not correspond to this framework."
 },
 {
  "id": "n525e3q16",
  "exam": 3,
  "topic": "Refugee care",
  "type": "sata",
  "stem": "A nurse is preparing to work with a family who arrived as refugees three weeks ago. Which considerations should guide the nurse's approach? Select all that apply.",
  "options": [
   "The family fled a stressful situation and may have experienced torture or witnessed the killing of loved ones",
   "The family is likely financially insecure and may lack transportation",
   "Applying for Medicaid may be difficult because of language barriers or unfamiliarity with the U.S. health system",
   "Family conflict and stress from cultural adjustment can escalate, including to domestic violence",
   "Because they chose to come to the United States, adjustment stress should resolve within a few weeks"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Refugees flee rather than choose, and may carry histories of torture, witnessed violence, and total loss of home and possessions; they are typically financially insecure, without transportation, and face language and system-literacy barriers to obtaining Medicaid - and the stress and tension of adjusting to a new culture can produce family conflict including domestic violence. The last option contains the error that most damages care: refugees did not elect to migrate, and trauma responses and adjustment difficulty do not resolve on a three-week schedule. The nurse's stance is to know the culture, learn the family's health-seeking behaviors, understand how the community handles illness, and try to see the situation from the family's viewpoint."
 },
 {
  "id": "n525e3q17",
  "exam": 3,
  "topic": "Environmental control worldview",
  "type": "mcq",
  "stem": "A client with newly diagnosed colon cancer says, 'I don't want treatment. It doesn't matter what I do - I have no control over what happens to me.' Which cultural concept does this statement most directly reflect?",
  "options": [
   "Social organization",
   "Biological variation",
   "Cultural imposition",
   "Environmental control, the individual's perceived relationship with nature and fate"
  ],
  "correct": [
   3
  ],
  "rationale": "Environmental control refers to the individual's relationship with nature and the degree to which a person believes they can influence outcomes, and the material gives nearly this statement as its example. Some Native American cultures view illness as a symptom of being out of balance with nature, which is a related but distinct framing. Social organization concerns family structure, roles, and who makes decisions. Biological variation covers physiologic differences such as lactose intolerance and Mongolian spots. The nursing response is neither to accept the refusal at face value nor to argue the worldview away: the nurse assesses whether the decision is informed, explores the belief, ensures all information has been presented, and thereby supports genuine autonomy."
 },
 {
  "id": "n525e3q18",
  "exam": 3,
  "topic": "Religious and dietary practice",
  "type": "sata",
  "stem": "A nurse is planning care that accounts for religious dietary practice. Which statements are accurate? Select all that apply.",
  "options": [
   "Observant Jewish and Muslim clients do not eat pork",
   "The fasting component of Ramadan from sunrise to sunset can significantly affect a client with diabetes",
   "Food is deeply tied to cultural tradition, which complicates dietary changes for chronic disease management",
   "Traditional diets high in carbohydrate can make diabetic meal planning difficult without culturally adapted teaching",
   "Religious dietary restrictions should be suspended during any hospitalization for the client's safety"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Jewish and Muslim practice excludes pork; Ramadan's sunrise-to-sunset fast has real implications for a client on insulin or sulfonylureas and requires planning with the client and often a religious authority rather than an instruction to stop fasting; and food's centrality to tradition is precisely why dietary teaching fails when it ignores culture - the material raises the difficulty faced by a Latino client with diabetes whose traditional meals are high in carbohydrate. The last option is cultural imposition and would destroy trust. The nursing approach is to blend what the client needs to practice with what has been ordered, educate, and meet clients where they are."
 },
 {
  "id": "n525e3q19",
  "exam": 3,
  "topic": "Alternative therapies",
  "type": "mcq",
  "stem": "A client reports using an herbal preparation daily. Which nursing action is most appropriate?",
  "options": [
   "Reassure the client that herbal products are natural and therefore safe alongside prescribed therapy",
   "Note the use in the chart without further assessment, since alternative therapies are the client's private choice",
   "Document the specific product and dose, assess for interactions with prescribed medications, and maintain an open, nonjudgmental stance",
   "Instruct the client to stop the herb, since herbal products are not regulated as drugs"
  ],
  "correct": [
   2
  ],
  "rationale": "Botanical healing - herbs, aromatherapy and essential oils, homeopathy, naturopathy - is used by about 80% of the world's population, so it is the norm rather than the exception, and the nurse's stance should be open. Openness does not mean silence: herbs have pharmacologic activity and real interactions, so the specific product and dose must be documented and assessed. Instructing the client to stop is cultural imposition and typically produces concealment rather than cessation. Recording without assessing abandons the safety responsibility. Declaring natural products safe is false. The nurse must also distinguish independent nursing actions from dependent ones requiring an order when an interaction is identified."
 },
 {
  "id": "n525e3q20",
  "exam": 3,
  "topic": "Alternative therapies",
  "type": "sata",
  "stem": "A nurse is categorizing complementary and alternative therapies. Which are manual or biofield methods? Select all that apply.",
  "options": [
   "Chiropractic manipulation",
   "Massage",
   "Acupuncture, acupressure, and reflexology",
   "Therapeutic touch and reiki",
   "Aromatherapy with essential oils",
   "Animal-assisted therapy"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Manual methods include chiropractic, massage, acupuncture, acupressure, and reflexology, and biofield therapies such as therapeutic touch and reiki are grouped with them. Aromatherapy and essential oils belong to botanical healing, along with herbs, homeopathy, and naturopathy. Animal-assisted therapy belongs to the miscellaneous group with music therapy, humor and laughter, bioelectromagnetics, detoxifying therapies, and horticultural therapy. Spiritual healing - faith, belief in a Supreme Being, and prayer as a self-care strategy that provides comfort, increases hope, and promotes psychological well-being - forms its own category. Both distractors are genuine therapies filed under the wrong heading."
 },
 {
  "id": "n525e3q21",
  "exam": 3,
  "topic": "Spirituality",
  "type": "mcq",
  "stem": "A client facing a difficult diagnosis asks the nurse to pray with them. The nurse does not share the client's faith. Which response is most appropriate?",
  "options": [
   "Agree and lead the prayer using the nurse's own tradition",
   "Remain present with the client during the prayer and arrange chaplaincy or the client's own faith leader as the client wishes",
   "Decline and explain that participating would be unprofessional",
   "Redirect the client to focus on the treatment plan, since spiritual concerns fall outside nursing scope"
  ],
  "correct": [
   1
  ],
  "rationale": "Spirituality involves the recognition of something greater than oneself, and prayer functions as communication and fellowship with a Deity or Creator, a self-care strategy that provides comfort, increases hope, and promotes healing and psychological well-being - so it falls squarely within nursing's holistic scope. Presence does not require shared belief and costs the nurse nothing. Declining as unprofessional abandons the client at a moment of need. Leading with the nurse's own tradition substitutes the nurse's framework for the client's, which is cultural imposition. Redirecting to the treatment plan denies a legitimate dimension of care and is the option that most reliably ends the conversation the client was trying to have."
 },
 {
  "id": "n525e3q22",
  "exam": 3,
  "topic": "Culture of nursing",
  "type": "mcq",
  "stem": "During orientation a nurse observes that one unit has rigid hierarchy and formal communication while another uses first names and open disagreement in rounds. Which concept does this illustrate?",
  "options": [
   "Ethnocentrism between the two units",
   "Cultural diversity in the patient population served by each unit",
   "Organizational culture, showing that a workplace has norms, roles, and expectations that vary by setting",
   "Cultural blindness on the part of the nursing staff"
  ],
  "correct": [
   2
  ],
  "rationale": "The material asks students directly what the culture of nursing is and whether it varies by floor or workplace, prompting reflection on norms, uniforms, relationships between nurses and other staff, and expectations. These differences in hierarchy, address, and permissible disagreement are organizational culture, and recognizing them matters because a nurse who misreads a unit's norms will struggle to advocate effectively. Cultural diversity concerns variation in the population. Ethnocentrism would require one unit judging the other as inferior, which is not described. Cultural blindness would be failing to notice the differences - the nurse here noticed them."
 },
 {
  "id": "n525e3q23",
  "exam": 3,
  "topic": "Facilitators and barriers",
  "type": "sata",
  "stem": "Which are recognized BARRIERS to culturally competent care? Select all that apply.",
  "options": [
   "Stereotyping",
   "Prejudice",
   "Racism",
   "Ethnocentrism",
   "Cultural blindness",
   "Cultural imposition",
   "Maintaining a broad, open attitude toward differing health beliefs"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5
  ],
  "rationale": "The barriers named are stereotyping, prejudice, racism, ethnocentrism - the belief that one's own culture sets the standard by which all others are judged - cultural blindness, and cultural imposition. Maintaining a broad, open attitude is a facilitator, not a barrier: developing competence means avoiding seeing all individuals as alike, recognizing that health is expressed differently across cultures, learning the cultural dimensions and health-seeking behaviors of the clients served, respecting rather than dismissing their views, promoting mutual respect, and above all assessing one's own biases, which is the first step. The single inverted option in an otherwise correct list is the mechanism of the trap."
 },
 {
  "id": "n525e3q24",
  "exam": 3,
  "topic": "Implicit bias",
  "type": "mcq",
  "stem": "A nurse consistently spends less time explaining discharge instructions to clients with limited English proficiency, though the nurse sincerely believes in treating all clients equally and is unaware of the pattern. Which concept best describes this?",
  "options": [
   "Veracity violation",
   "Cultural competence in practice",
   "Implicit bias, which is automatic and unintentional",
   "Cultural imposition"
  ],
  "correct": [
   2
  ],
  "rationale": "Implicit bias is automatic and unintentional, operating outside conscious awareness and often directly contradicting a person's sincerely held egalitarian values - which is exactly what the stem describes and why self-report cannot detect it. The material directs nurses to always analyze their own personal bias and names cultural awareness, the self-analysis of beliefs and attitudes to detect prejudice or bias, as an ethical obligation. Mitigation requires structural checks: measuring one's own patterns, using interpreters by protocol rather than by judgment, standardizing teach-back. Cultural imposition requires actively imposing beliefs. Veracity concerns truthfulness. The behavior is the opposite of competence, however genuine the nurse's intent."
 },
 {
  "id": "n525e3q25",
  "exam": 3,
  "topic": "Cultural competence as PHN competency",
  "type": "mcq",
  "stem": "A nursing student asks whether it is possible to become fully culturally competent in a culture other than one's own. Which response best reflects the course material?",
  "options": [
   "Yes; completing a cultural competency training program confers competence",
   "Full competence in another culture may not be achievable, which is why ongoing self-assessment, learning, and openness matter more than a fixed endpoint",
   "No; therefore nurses should limit their practice to populations that share their own culture",
   "The question is irrelevant, since treating all clients identically eliminates the need for cultural knowledge"
  ],
  "correct": [
   1
  ],
  "rationale": "The lecture poses this question directly - if we are from another culture, can we truly become 100% competent? - and the practical answer is that competence is a continuing process rather than a credential, sustained by self-analysis, learning the cultures served, and maintaining an open attitude. Treating a training course as conferring competence is the credentialist trap. Limiting practice to one's own culture is unworkable and abandons the populations with the greatest need. The final option restates cultural blindness, the barrier the entire unit is built to dismantle, and is wrong for the same reason 'I don't see color' is wrong. Cultural competence is also one of the eight core competency categories for public health professionals."
 },
 {
  "id": "n525e4q01",
  "exam": 4,
  "topic": "Community as client",
  "type": "mcq",
  "stem": "A nurse is defining 'community' for a community assessment project. Which set of elements best captures the concept?",
  "options": [
   "The clients currently enrolled in the health department's programs",
   "Geography, population density, and municipal boundaries",
   "Households, income distribution, and access to primary care",
   "People who share a commonality, place including geographic and other shared spaces such as the internet, and function meaning shared aims, interests, and values"
  ],
  "correct": [
   3
  ],
  "rationale": "A community is defined by people - a group or system sharing a commonality - by place, which includes both geographic and other shared spaces such as the internet, and by function, the aims, activities, interests, and values the group holds. This matters because it means a community need not be a town: a congregation, a school, or an online group can be the client. Restricting the definition to geography excludes function and non-geographic communities. Households and income are demographic data collected during assessment, not the definition. Defining the community as current program enrollees is the most consequential error, since it renders invisible the people not being reached - who are usually the ones with the greatest need."
 },
 {
  "id": "n525e4q02",
  "exam": 4,
  "topic": "First step in assessment",
  "type": "mcq",
  "stem": "A health department director asks the community health nurse to determine the greatest health concern facing the city. How should the nurse begin collecting data?",
  "options": [
   "Review morbidity data for the city's population compiled by the Bureau of Vital Statistics",
   "Conduct a telephone survey of community residents to ask their opinion",
   "Call the American Medical Association to determine the most frequently treated diagnoses",
   "Survey the major hospitals in the area to determine the most common reasons for admission"
  ],
  "correct": [
   0
  ],
  "rationale": "Reviewing population-level morbidity data from vital statistics shows what the community as a whole is actually sick with, which is more reliable than the perceptions of any one institution or set of individuals. Hospital admission data reflect only people sick enough to be admitted to those particular hospitals and miss everyone who receives care elsewhere or not at all. A telephone survey captures opinion, which matters for engagement and priority-setting but is not a valid measure of disease burden, and it systematically excludes households without phones. Physician association data reflect treated diagnoses among people already in care. Community input is essential later; it does not replace population data at the start."
 },
 {
  "id": "n525e4q03",
  "exam": 4,
  "topic": "Nursing process first action",
  "type": "mcq",
  "stem": "Several residents tell a nurse that asthma seems to be a serious problem among children in a large apartment complex. The nurse is considering developing an asthma education and environmental health program. Which action should the nurse take FIRST?",
  "options": [
   "Work with housing officials to identify possible environmental triggers",
   "Review available community health data to determine the prevalence of childhood asthma in the area",
   "Provide families with information about reducing asthma triggers in the home",
   "Arrange asthma education sessions for parents and caregivers"
  ],
  "correct": [
   1
  ],
  "rationale": "Assessment always precedes planning and implementation. Before designing a program the nurse must establish that the suspected problem actually exists and determine its magnitude, and reviewing population-level health data validates the concern and provides the evidence base for everything that follows. Every other option is a reasonable intervention that becomes appropriate after assessment confirms and characterizes the problem - and each is a trap because each feels urgent and helpful. Building a program on anecdote risks spending scarce resources on a problem that is smaller than believed, or missing that the real driver is something else in the same complex, such as mold, pests, or tobacco smoke."
 },
 {
  "id": "n525e4q04",
  "exam": 4,
  "topic": "Primary vs secondary data",
  "type": "sata",
  "stem": "A nurse is classifying data collection methods for a community assessment. Which are PRIMARY data collection methods? Select all that apply.",
  "options": [
   "Conducting a windshield survey",
   "Attending a community fair and observing interactions",
   "Interviewing a key informant",
   "Holding a focus group with parents at a school",
   "Reviewing the county's infant mortality report",
   "Reading the last Community Health Improvement Plan"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Primary data collection means the nurse generates the data: windshield surveys, participant observation, focus groups, key informant and gatekeeper interviews, forums and town halls, surveys, and interviews. Secondary data already exist and were compiled by someone else: census data, state health data, infant mortality rates, Community Health Improvement Plans, hospital emergency visits, community needs assessments, influenza rates, CDC morbidity and mortality reports, reportable diseases, National Center for Health Statistics data, and water quality reports. The distinction is who generated the data, not whether it is quantitative or whether people were spoken to - a nurse conducting a survey generates primary data even though the output is numbers."
 },
 {
  "id": "n525e4q05",
  "exam": 4,
  "topic": "Participant observation",
  "type": "mcq",
  "stem": "A nurse spends an afternoon at a community health fair, talking informally with attendees and observing how residents interact, what vendors are present, and which services draw the most interest. Which primary data collection method is this?",
  "options": [
   "A windshield survey",
   "Participant observation",
   "A focus group",
   "A key informant interview"
  ],
  "correct": [
   1
  ],
  "rationale": "Participant observation is immersion in community activities to observe behavior, interaction, and social patterns in their natural setting, and attending a community fair is the example used in the course material. A windshield survey is a systematic observational drive through a neighborhood recording the physical and social environment - observation, but from outside rather than within. A focus group is a facilitated discussion with a selected group around specific questions. A key informant interview is a targeted conversation with someone who has particular knowledge of the community. All four are primary methods, so the discrimination required is between types of immersion."
 },
 {
  "id": "n525e4q06",
  "exam": 4,
  "topic": "Key informant vs gatekeeper",
  "type": "mcq",
  "stem": "A nurse planning a diabetes prevention program needs the mayor's endorsement to secure a municipal building as the program site. Which term describes the mayor's role?",
  "options": [
   "A key informant, because the mayor has knowledge about community health needs",
   "A community partner, because the mayor represents the municipality",
   "A gatekeeper, because the mayor holds influence or authority over access and resources",
   "A confidante, because the mayor bridges the gap between the nurse and the community"
  ],
  "correct": [
   2
  ],
  "rationale": "A gatekeeper holds influence or authority - mayors, governors, policy makers, senators - and the material directs nurses to plan interventions with gatekeepers and to mobilize community partnerships. A key informant is someone with particular knowledge about the community who can describe its health needs and dynamics; a gatekeeper may also be a key informant, but the role described here is control over access to a resource. Community partner is accurate but too general to be the best answer when a more specific term applies. A confidante is the cultural assessment term for someone who helps bridge cultural gaps. The practical consequence is that a program designed without the gatekeeper may never get a location."
 },
 {
  "id": "n525e4q07",
  "exam": 4,
  "topic": "Secondary data sources",
  "type": "mcq",
  "stem": "A nurse needs secondary data on a community's demographics, poverty level, housing tenure, educational attainment, disability, and health insurance coverage. Which single source provides all of these?",
  "options": [
   "U.S. Census data",
   "The community's Consumer Confidence Report",
   "The state's reportable disease registry",
   "The CDC's National Vital Statistics System"
  ],
  "correct": [
   0
  ],
  "rationale": "Census data supply total population, demographic breakdown by age, sex, race, and ethnicity, households including own versus rent, household size, relationships, and marital status, income and poverty levels, education, veteran status, commuting, disability, and health insurance - the entire list in the stem comes from one source. The National Vital Statistics System supplies births and deaths including the infant mortality rate, and nothing about housing or income. The Consumer Confidence Report is an annual drinking water quality report. Reportable disease registries track notifiable conditions only. Each distractor is a legitimate secondary data source a public health nurse uses routinely, which is the point: efficient assessment depends on knowing which source answers which question rather than searching them all."
 },
 {
  "id": "n525e4q08",
  "exam": 4,
  "topic": "Evaluating data quality",
  "type": "sata",
  "stem": "A nurse is appraising an online data source for use in a community assessment. Which factors should the nurse consider? Select all that apply.",
  "options": [
   "The age of the data",
   "The reliability of the source",
   "Potential bias in how the data were collected or presented",
   "Whether the findings agree with what the nurse already believes about the community",
   "Whether the data are free of charge"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The factors to consider are the age of the data, its reliability, and bias. Data age matters enormously in community assessment because census figures can be several years old and a neighborhood may have gentrified or lost a major employer since collection. Reliability concerns the rigor of collection and the credibility of the source. Bias concerns who collected the data and why. Agreement with prior belief is confirmation bias, the opposite of appraisal, and it is the trap - it feels like corroboration. Cost bears on feasibility, not validity; most authoritative public health data, including the Census, CDC WONDER, CDC PLACES, and the City Health Dashboard, are free."
 },
 {
  "id": "n525e4q09",
  "exam": 4,
  "topic": "Interpreting community data",
  "type": "mcq",
  "stem": "During a community assessment the nurse finds a mean household income of $74,500 but observes both subsidized housing complexes and newly built high-cost condominiums. Which additional data would be most useful?",
  "options": [
   "The average value of newly constructed homes",
   "The number of residents who have completed college",
   "The distribution of household incomes within the community",
   "The percentage of residents employed in health care"
  ],
  "correct": [
   2
  ],
  "rationale": "A mean conceals distribution: a community with substantial numbers of both high- and low-income households can post a comfortable average while containing severe deprivation, and the visible contrast between subsidized housing and new condominiums is the clue that the mean is masking two populations. Examining income distribution - quartiles, the proportion below the federal poverty level, the Gini index - reveals the disparity and identifies who faces barriers to resources and care. Employment sector and college completion are useful demographic context but do not resolve the question the mean raises. New home values describe only the affluent segment, deepening rather than correcting the distortion."
 },
 {
  "id": "n525e4q10",
  "exam": 4,
  "topic": "Prioritizing community problems",
  "type": "sata",
  "stem": "A nurse is prioritizing among several identified community health problems. Which criteria should guide the decision? Select all that apply.",
  "options": [
   "Community awareness of the problem",
   "Nursing's ability to influence the solution",
   "Severity of the outcomes if the problem is not resolved",
   "The community's desire for resolution",
   "Cost associated with solving the problem",
   "What will do the most good for the greatest number of people",
   "Which problem is most interesting to the nursing team"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4,
   5
  ],
  "rationale": "The problem analysis criteria are community awareness, nursing's ability to influence the solution, availability of expertise, severity of outcomes if unresolved, the speed with which the problem must be addressed, the community's desire for resolution, cost, and what will do the most good for the most people - the last reflecting utilitarianism. The team's interest is the one illegitimate criterion, and it is included because it operates constantly in practice under other names. The material also asks what strengths the community has that the nurse can build on, which is why assessment identifies assets and not only deficits: a community-centered plan starts from what the community wants and what it already has."
 },
 {
  "id": "n525e4q11",
  "exam": 4,
  "topic": "Community health diagnosis",
  "type": "mcq",
  "stem": "Which statement is correctly structured as a community health diagnosis?",
  "options": [
   "The community has a high rate of diabetes and needs a nutrition program",
   "Increased risk of diabetes among adults in the community related to limited access to affordable healthy foods and sedentary lifestyles, as evidenced by a 25% diabetes prevalence and 40% obesity rate reported in the community health survey",
   "Adults in the community are noncompliant with dietary recommendations, resulting in obesity and diabetes",
   "Knowledge deficit regarding nutrition among community adults"
  ],
  "correct": [
   1
  ],
  "rationale": "A community health diagnosis follows problem, etiology, evidence - naming the at-risk population, the health problem, the contributing factors, and the data supporting it. The correct option contains all four. The first option names a problem and jumps to an intervention with no etiology or evidence, and prescribing the solution inside the diagnosis forecloses planning. The noncompliance option locates cause in individual behavior, ignores the structural etiology, and uses blaming language that has no place in a population diagnosis. 'Knowledge deficit' is an individual nursing diagnosis with no population, no evidence, and an assumed cause that the data may not support - people often know what to eat and cannot obtain or afford it."
 },
 {
  "id": "n525e4q12",
  "exam": 4,
  "topic": "Goal vs objective",
  "type": "mcq",
  "stem": "Which statement is a GOAL rather than an objective?",
  "options": [
   "Eighty percent of high-risk adults in Worcester will receive influenza vaccine within six weeks",
   "Reduce emergency department visits for asthma among children under 12 by 15% within one year",
   "Ninety-six percent of nursing students will wear masks properly in all common areas during January",
   "Decrease the incidence of influenza in Worcester"
  ],
  "correct": [
   3
  ],
  "rationale": "A goal is a broad, overarching statement of what you hope to achieve and carries no number or deadline - 'decrease the incidence of influenza in Worcester' is exactly that. The other three are objectives: specific, measurable, attainable, realistic, and time-bound. Note the deliberate inversion students must hold: Healthy People reverses this usage, labeling broad aims as 'goals' and the measurable targets beneath them as 'objectives' in a way that can feel like the opposite of what is taught - the material advises not getting caught up in semantics but knowing which framework you are in. Also note that HP distinguishes core objectives from developmental ones."
 },
 {
  "id": "n525e4q13",
  "exam": 4,
  "topic": "SMART objectives",
  "type": "mcq",
  "stem": "A nurse drafts this objective: 'Community members will improve their physical activity levels as a result of the walking program.' Which revision makes it SMART?",
  "options": [
   "Community members will significantly improve physical activity through the walking program this year",
   "Thirty percent of enrolled adults will report at least 150 minutes of moderate activity per week by six months after program start",
   "One hundred percent of community members will walk daily beginning immediately",
   "The walking program will be offered three times per week at the community center for six months"
  ],
  "correct": [
   1
  ],
  "rationale": "A SMART objective is specific, has a measurable number, is achievable with available resources, sets a realistic target, and is time-bound - 30% of enrolled adults, 150 minutes weekly, by six months satisfies all five. 'Significantly' is not measurable and 'this year' is vague. The 100% option fails realism, which the material stresses directly: an objective claiming 100% is not credible, and targets should come from a known baseline rate or an evidence-based estimate. The last option is the subtlest trap and the most common error in practice - it describes the intervention rather than the change expected in the target population, and the material warns explicitly that an objective is not about the interventions you put in place."
 },
 {
  "id": "n525e4q14",
  "exam": 4,
  "topic": "Short-term vs long-term objectives",
  "type": "mcq",
  "stem": "A nurse writes: 'Ninety-six percent of nursing students will wear masks properly covering nose and mouth in all common areas during January.' How should this objective be classified?",
  "options": [
   "A long-term outcome objective, because behavior change is the ultimate aim",
   "A goal, because it addresses the overall aim of reducing COVID-19",
   "A planned intervention, because it describes what people will do",
   "A short-term or in-process objective, measuring early change in knowledge, skills, attitudes, or behavior"
  ],
  "correct": [
   3
  ],
  "rationale": "Short-term or in-process objectives capture early expected changes in the target population after interventions begin - changes in knowledge, skills, attitudes, and behavior - and correct mask wearing within a single month is exactly that. Long-term outcome objectives are measurable statements after the program has run for some time, expressed in morbidity, mortality, or quality of life, such as 'the overall rate of COVID-19 in nursing students will not increase this semester.' A planned intervention is what the program does, such as staff reporting improper mask use or placing signage - the distinction between what the program does and what the population changes is the one this item tests, and it is the distinction students most often lose."
 },
 {
  "id": "n525e4q15",
  "exam": 4,
  "topic": "Formative vs summative evaluation",
  "type": "mcq",
  "stem": "Three months into a six-month smoking cessation program, the nurse reviews attendance, participant satisfaction, and interim quit attempts, then adjusts the session schedule. Which type of evaluation is this?",
  "options": [
   "Formative evaluation, conducted while the program is in process",
   "Summative evaluation, because outcomes are being measured",
   "Summative evaluation, because the data will appear in the final report",
   "Neither, because evaluation occurs only after a program ends"
  ],
  "correct": [
   0
  ],
  "rationale": "Formative evaluation occurs while a program is in process and its purpose is mid-course correction - adjusting the schedule based on interim findings is its defining feature. Summative evaluation occurs at the end of the program and judges whether the SMART objective was met. The second and third options are the real traps: measuring outcomes does not make an evaluation summative, and neither does eventual inclusion in a final report - timing and purpose determine the type. Believing evaluation happens only at the end is the costliest error in practice, because it forfeits every chance to fix a failing program while it is still running."
 },
 {
  "id": "n525e4q16",
  "exam": 4,
  "topic": "Program evaluation sources",
  "type": "sata",
  "stem": "A nurse is selecting sources of data to evaluate a community program. Which are recognized sources of program evaluation data? Select all that apply.",
  "options": [
   "Program clients, through attitude scales such as satisfaction surveys",
   "Program records, including clinical records documenting care given and results",
   "Epidemiologic data including morbidity, mortality, incidence, and prevalence rates",
   "Surveys assessing whether the numbers targeted by the objective improved",
   "The program director's impression of how well the program went"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The recognized sources are program clients through attitude scales, with the client satisfaction survey probably the most commonly used; program records, which document the care given and its results; epidemiologic data covering morbidity, mortality, incidence, and prevalence; and surveys measuring whether the objective's numbers moved. An unstructured impression from the director is not evaluation data - the material emphasizes wanting evidence, not opinions. Note the limits of the legitimate sources too: satisfaction is the most-used measure and the weakest, because a program people enjoy may change no health outcome, which is why epidemiologic data anchor the judgment."
 },
 {
  "id": "n525e4q17",
  "exam": 4,
  "topic": "Evaluating with morbidity and mortality",
  "type": "mcq",
  "stem": "A nurse wants to determine whether a five-year community intervention actually improved health outcomes. Which approach provides the strongest evidence?",
  "options": [
   "Examine morbidity and mortality rates before and after the intervention",
   "Review attendance records across the five years of programming",
   "Survey residents about whether they feel the community is healthier",
   "Repeat the original community assessment, since it established the baseline"
  ],
  "correct": [
   0
  ],
  "rationale": "Examining morbidity and mortality rates is described as the most effective way for nurses to know whether their interventions were successful, because these are objective, population-level, and comparable over time. Repeating the assessment is the sophisticated distractor and the material addresses it directly: a reassessment would give different data rather than a clean comparison, since methods, participants, and conditions change. Perceived health is opinion, and the standard is evidence, not opinion. Attendance is a process measure showing that the program ran and reached people, which says nothing about whether health changed - a well-attended program can still fail."
 },
 {
  "id": "n525e4q18",
  "exam": 4,
  "topic": "CHIP",
  "type": "mcq",
  "stem": "A nurse is asked to explain what a Community Health Improvement Plan is. Which description is accurate?",
  "options": [
   "A long-term, systematic plan to address public health problems based on the results of a community health assessment, typically updated every three to five years",
   "A federally mandated annual report that every hospital must file with the CDC",
   "A clinical care plan written for individual high-risk clients enrolled in a public health program",
   "The data collection instrument used to conduct a community assessment"
  ],
  "correct": [
   0
  ],
  "rationale": "A CHIP is a long-term, systematic effort to address public health problems based on the results of community health assessment activities and the community health improvement process, typically updated every three to five years. The key sequence is that the assessment comes first and the CHIP follows, because a plan of care cannot precede assessment - the same logic as the nursing process applied at population scale. It is not an annual federal filing, not the data collection instrument, and not an individual care plan. For a nurse conducting an assessment, the existing CHIP is valuable secondary data showing what the community has already identified and attempted."
 },
 {
  "id": "n525e4q19",
  "exam": 4,
  "topic": "Community assessment process",
  "type": "mcq",
  "stem": "A nurse is mapping the community assessment process onto the nursing process. Which sequence is correct?",
  "options": [
   "Assess, implement strategies, define the community, prioritize issues, evaluate",
   "Define the client/community, assess, prioritize community health issues, plan improvement strategies and outcomes, implement strategies, evaluate",
   "Prioritize community health issues, define the community, assess, evaluate, implement strategies",
   "Assess, define the client/community, implement strategies, prioritize issues, plan outcomes, evaluate"
  ],
  "correct": [
   1
  ],
  "rationale": "The community assessment process runs: define the client or community, assess, prioritize community health issues, plan improvement strategies and outcomes, implement strategies, and evaluate - parallel to ADOPIE at the population level. Defining the community first is what the distractors all disturb, and it is not a formality: until the nurse has specified who the community is by people, place, and function, there is no denominator for any rate calculated, no boundary for what counts as a community problem, and no way to know whose priorities should drive the plan. Prioritizing before assessing, as in the third option, means choosing a problem before knowing which problems exist."
 },
 {
  "id": "n525e4q20",
  "exam": 4,
  "topic": "Ethical principles",
  "type": "mcq",
  "stem": "A public health nurse investigates primary care offices that administered influenza vaccine without obtaining informed consent. Which ethical principle was most clearly violated?",
  "options": [
   "Fidelity",
   "Non-maleficence, along with the client's autonomy",
   "Veracity",
   "Beneficence"
  ],
  "correct": [
   1
  ],
  "rationale": "Administering a vaccine without informed consent harms the client and strips the self-determination that autonomy protects - the material classifies this professional misconduct as maleficence, a wrongful act by someone acting in a professional capacity. Beneficence is doing good and is the seductive distractor, because vaccination is beneficial and the offices presumably intended benefit; good intent does not license acting on someone without consent, and a beneficial act performed without permission is still a violation. Fidelity is keeping promises. Veracity is truth-telling, which would be the issue if the offices had lied about what they administered. Autonomy requires that decisions be made with knowledge, that orientation be assessed, and that all information be presented."
 },
 {
  "id": "n525e4q21",
  "exam": 4,
  "topic": "Beneficence vs maleficence",
  "type": "sata",
  "stem": "Which actions by a public health nurse represent MALEFICENCE? Select all that apply.",
  "options": [
   "Implementing a program in a location residents cannot reach, without considering transportation",
   "Prioritizing health care resources for affluent areas while neglecting underserved communities",
   "Launching a healthy eating campaign in a school",
   "Withholding information about a program's known limitations from participating families",
   "Advocating with an insurer to obtain a specialized dressing for a client"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Maleficence is doing harm. The material gives two examples directly: intentionally putting a program in place without considering transportation, and prioritizing resources for affluent areas while neglecting underserved communities - both inflict harm by producing or widening inequity, which is why maleficence in public health so often looks like a decision about distribution rather than an act against a person. Withholding material information also causes harm and violates veracity. A school healthy eating campaign is the material's example of beneficence, and advocating with an insurer is both beneficence and advocacy, defined as supporting the interests of others or a cause greater than oneself."
 },
 {
  "id": "n525e4q22",
  "exam": 4,
  "topic": "Distributive justice",
  "type": "mcq",
  "stem": "A nurse ensures that immunizations are delivered at multiple sites across a community rather than at a single central clinic. This action best demonstrates:",
  "options": [
   "Distributive justice",
   "Autonomy",
   "Veracity",
   "Fidelity"
  ],
  "correct": [
   0
  ],
  "rationale": "Distributive justice is the fair and equitable allocation of resources and benefits across a community, operating at federal, state, and community levels, and the material uses this exact scenario - delivering immunizations in multiple locations rather than one - as its example. Placing services where people can actually reach them is what distinguishes equitable distribution from nominal availability. Veracity is truth-telling. Fidelity is keeping promises and building trust. Autonomy is self-determination. Distributive justice is closely related to social justice, which advocates fairness, equity, and equality in opportunities, rights, and access to resources, and to environmental justice, its application to environmental hazards."
 },
 {
  "id": "n525e4q23",
  "exam": 4,
  "topic": "Utilitarianism vs justice",
  "type": "mcq",
  "stem": "A county has enough vaccine for 30% of residents. The health officer proposes allocating all of it to the three largest employers to maximize the number vaccinated quickly, which would leave homebound elders and residents without employer coverage unvaccinated. Which analysis is most sound?",
  "options": [
   "The plan is ethically correct because utilitarianism requires doing the greatest good for the greatest number",
   "The plan maximizes numbers but conflicts with distributive justice by systematically excluding the highest-risk groups, so allocation should weigh both efficiency and equity",
   "The plan violates autonomy, because residents did not choose the allocation method",
   "The plan is acceptable because vaccine allocation is a policy decision outside nursing's ethical scope"
  ],
  "correct": [
   1
  ],
  "rationale": "Utilitarianism - the greatest good for the greatest number - is a legitimate ethical principle and appears among the prioritization criteria, but it does not operate alone: distributive justice requires fair and equitable allocation, and justice requires acting fairly regardless of income, power, race, or sexual orientation. A plan that reaches the most people while systematically excluding the highest-risk is efficient and inequitable at once, and the material notes that distributive justice is genuinely difficult with limited vaccine availability. The first option treats one principle as decisive. Autonomy is not the central issue in an allocation decision. The last option abandons the nurse's ethical obligation to advocate."
 },
 {
  "id": "n525e4q24",
  "exam": 4,
  "topic": "ANA Code of Ethics",
  "type": "sata",
  "stem": "Which statements reflect key points of the ANA Code of Ethics as applied to public health nursing? Select all that apply.",
  "options": [
   "The nurse's primary commitment is to the patient, who may be an individual, a family, or a community",
   "The nurse demonstrates compassion and respect for all patients regardless of patient status",
   "The nurse is accountable for their individual practice",
   "The nurse maintains and increases their own knowledge base",
   "The nurse works to improve the health care environment for both providers and patients",
   "The nurse's obligations end at the boundary of the assigned caseload"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "The key points are that the nurse's primary commitment is to the patient - individual, family, or community - with compassion and respect regardless of patient status, accountability for individual practice, maintenance of one's own knowledge base, promotion of patient health and welfare, and work to improve the health care environment for providers and patients. The final option contradicts the Code and the whole premise of public health nursing, where the community is the client and obligations extend to populations never encountered individually. Note also the ethical-legal distinction the material draws: ethical is what one ought to do, legal is what one must do, and prudent practice requires knowledge of both."
 },
 {
  "id": "n525e4q25",
  "exam": 4,
  "topic": "Advocacy",
  "type": "mcq",
  "stem": "A client with limited English proficiency is handed a surgical consent form in English and asked to sign. The client looks uncertain but reaches for the pen. Which action best demonstrates advocacy?",
  "options": [
   "Stop the process, obtain a trained interpreter, and ensure the client understands before any signature is obtained",
   "Witness the signature, since the client voluntarily reached for the pen",
   "Document that the client appeared to consent and notify the surgeon afterward",
   "Ask a bilingual family member in the waiting room to summarize the form"
  ],
  "correct": [
   0
  ],
  "rationale": "Advocacy includes not allowing a patient to sign a form they are not ready to sign, and autonomy requires that decisions be made with knowledge and that all information has been presented - a signature obtained without comprehension is not consent. Witnessing the signature because the client reached for the pen mistakes a physical act for informed agreement. Using a family member as interpreter is warned against throughout the course material: trained interpreters are required for clients with limited English proficiency, and a family member may edit, soften, or misunderstand clinical content. Documenting apparent consent and notifying the surgeon afterward records the problem instead of preventing it."
 }
]};
