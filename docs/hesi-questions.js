/* ============================================================================
   HESI Exit Exam Prep — Comprehensive Question Bank
   780 NCLEX/HESI-style items in 6 comprehensive practice exams of 130.

   Every stem and keyed answer comes from the HESI Exit study set
   (HESI_ExitPrep/quizletquestions.txt). Where a card listed only the correct answer,
   same-topic distractors were written to NCLEX item-writing guidelines; every item
   carries a rationale that explains the key and the distractors. A small number of
   source keys that contradict current evidence were corrected (see README).

   Question object: { id, exam(1-6), src, topic, clientNeed, type("mcq"|"sata"|"fill"),
                      stem, options[], correct[idx] | answer, unit, tolerance, rationale }
   ========================================================================== */
window.HESI_DATA = {
  meta: {"title": "HESI Exit Exam Prep", "total": 780, "exams": 6, "examTitles": {"1": "Practice Exam 1 — Comprehensive HESI Exit", "2": "Practice Exam 2 — Comprehensive HESI Exit", "3": "Practice Exam 3 — Comprehensive HESI Exit", "4": "Practice Exam 4 — Comprehensive HESI Exit", "5": "Practice Exam 5 — Comprehensive HESI Exit", "6": "Practice Exam 6 — Comprehensive HESI Exit"}, "examThemes": {"1": "118 multiple choice · 8 select-all-that-apply · 4 calculation — every client-need category and all 14 content areas, mixed like the real exam", "2": "118 multiple choice · 9 select-all-that-apply · 3 calculation — every client-need category and all 14 content areas, mixed like the real exam", "3": "115 multiple choice · 12 select-all-that-apply · 3 calculation — every client-need category and all 14 content areas, mixed like the real exam", "4": "115 multiple choice · 12 select-all-that-apply · 3 calculation — every client-need category and all 14 content areas, mixed like the real exam", "5": "116 multiple choice · 10 select-all-that-apply · 4 calculation — every client-need category and all 14 content areas, mixed like the real exam", "6": "115 multiple choice · 10 select-all-that-apply · 5 calculation — every client-need category and all 14 content areas, mixed like the real exam"}, "topics": ["Pediatrics", "Maternity & Newborn", "Cardiovascular", "Respiratory", "Neuro & Sensory", "Endocrine", "GI & Nutrition", "Renal & GU", "Musculoskeletal & Integumentary", "Hematology, Oncology & Immunology", "Mental Health", "Pharmacology & Calculations", "Fundamentals & Safety", "Leadership & Prioritization"]},
  questions: [
 {
  "id": "hesi1q001",
  "exam": 1,
  "src": 657,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is preparing a teaching plan for an older female client diagnosed with osteoporosis. Which expected outcome has the highest priority for this client?",
  "rationale": "For an older adult with osteoporosis, a fall can cause a hip or vertebral fracture with serious loss of mobility and complications, so identifying and correcting home hazards that cause falls has the highest priority. Constipation management, knowing risk factors and calcium-rich foods are important, but they do not address the immediate safety risk.",
  "type": "mcq",
  "options": [
   "Lists 5 calcium-rich foods to be added to her daily diet",
   "Names 3 home safety hazards to be resolved immediately",
   "States 4 risk factors for the development of osteoporosis",
   "Identifies 2 treatments for constipation due to immobility"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q002",
  "exam": 1,
  "src": 650,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing a 50 mL dose of 50% dextrose IV for a client with insulin-induced hypoglycemia. How should the nurse administer the medication?",
  "rationale": "Fifty percent dextrose is given undiluted by slow IV push through a patent, preferably large vein, after confirming blood return, to rapidly raise the blood glucose. Diluting it in a large volume over hours is far too slow for symptomatic hypoglycemia, it cannot be given IM, and because it is hypertonic and a vesicant, rapid injection into a small vein increases the risk of phlebitis and tissue injury.",
  "type": "mcq",
  "options": [
   "Add the dextrose to 1,000 mL of normal saline and infuse over 8 hours.",
   "Inject the dextrose intramuscularly into the deltoid muscle.",
   "Push the undiluted dextrose slowly through the currently infusing IV.",
   "Push the dextrose rapidly into a small hand vein after starting a new IV."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q003",
  "exam": 1,
  "src": 801,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "Which intervention should the nurse implement for a client with a superficial (first-degree) burn?",
  "rationale": "Cool, wet compresses applied for short periods reduce pain and stop further heat injury to the tissue in a superficial burn. Ice causes vasoconstriction and can deepen the injury, butter traps heat and increases infection risk, and tight wraps restrict circulation as the tissue swells.",
  "type": "mcq",
  "options": [
   "Cover the burned areas with a thick layer of butter.",
   "Wrap the burned areas tightly with an elastic bandage.",
   "Apply ice directly to the burned skin for 30 minutes.",
   "Place cool, wet cloths on the burned areas for short periods of time."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q004",
  "exam": 1,
  "src": 617,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is caring for a client in hypovolemic shock who is receiving two units of packed red blood cells (RBCs) through a large-bore peripheral IV. Which action promotes maintenance of the client's cardiopulmonary stability during the transfusion?",
  "rationale": "Dyspnea during transfusion in a client in shock may reflect hypoxemia, circulatory overload or a reaction, and supplemental oxygen supports oxygen delivery while the nurse assesses the cause. The Trendelenburg position is no longer recommended for shock because it impairs ventilation, hourly glucose checks do not affect cardiopulmonary stability, and oral fluids are not appropriate for a client in shock.",
  "type": "mcq",
  "options": [
   "Increase the oxygen flow via nasal cannula if dyspnea is present.",
   "Place the client in Trendelenburg position to increase cerebral blood flow.",
   "Encourage increased oral fluid intake to improve skin turgor.",
   "Monitor capillary glucose measurements hourly during the transfusion."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q005",
  "exam": 1,
  "src": 95,
  "topic": "Maternity & Newborn",
  "clientNeed": "Management of Care",
  "stem": "A client who had evacuation of a gestational trophoblastic disease (hydatidiform mole) 2 days ago is being discharged. She has an 18-month-old child and lives in a rural area, and her husband takes the family car to work daily, leaving her without transportation during the day. Which intervention is most important for the nurse to implement?",
  "rationale": "After evacuation of a molar pregnancy, serial quantitative hCG levels are monitored, initially weekly, to detect persistent trophoblastic disease or choriocarcinoma, and a home visit overcomes this client's transportation barrier. Home pregnancy tests are qualitative and cannot track declining hCG levels. A 1-year follow-up is far too late, and depression resources, although supportive, do not address the critical surveillance need.",
  "type": "mcq",
  "options": [
   "Arrange for a follow-up clinic appointment in 1 year.",
   "Provide a list of resources for postpartum depression.",
   "Schedule a weekly home visit to draw hCG values.",
   "Teach the client to use a home pregnancy test monthly."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q006",
  "exam": 1,
  "src": 365,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An adult is admitted to the emergency department after ingesting a bottle of antidepressants because of chronic pain. A nasogastric tube and a left subclavian central venous catheter are placed. The nurse then auscultates audible breath sounds on the right side and faint breath sounds on the left. Which procedure should the nurse prepare for first?",
  "rationale": "Diminished breath sounds on the side where a subclavian catheter was just inserted indicate an iatrogenic pneumothorax, which is treated with a chest tube on the affected left side. Breath sounds are present on the right, so the problem is not tube placement in the airway requiring intubation. A misplaced NG tube would not cause unilateral loss of breath sounds, and PCA is not indicated after an overdose.",
  "type": "mcq",
  "options": [
   "Insertion of a left-sided chest tube",
   "Setup of patient-controlled analgesia",
   "Placement of an endotracheal tube",
   "Retraction of the nasogastric tube"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q007",
  "exam": 1,
  "src": 689,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse notes a visible prolapse of the umbilical cord after a client's membranes rupture spontaneously during labor. Which intervention should the nurse implement immediately?",
  "rationale": "Cord prolapse allows the presenting part to compress the cord and cut off fetal oxygenation, so the nurse immediately inserts a gloved hand and lifts the presenting part off the cord, calls for help and positions the client in knee-chest or Trendelenburg position while preparing for emergency birth. The cord should not be replaced or handled, high Fowler's increases compression, and an exposed cord is covered with saline-moistened sterile gauze, not dry gauze.",
  "type": "mcq",
  "options": [
   "Cover the cord with a dry sterile dressing.",
   "Gently push the cord back into the vagina.",
   "Elevate the presenting part off the cord.",
   "Place the client in a high Fowler's position."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q008",
  "exam": 1,
  "src": 523,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The daughter of an older female client tells the clinic nurse that she is no longer able to care for her mother, who has lost the ability to perform activities of daily living (ADLs) due to aging. Which options should the nurse discuss with the daughter? (Select all that apply.)",
  "rationale": "A client who can no longer perform ADLs needs ongoing custodial or skilled assistance, which can be provided in a long-term care facility or at home through a home health agency. Hospice requires a terminal diagnosis with a life expectancy of 6 months or less, rehabilitation facilities are for short-term recovery with expected improvement, and independent senior apartments are for people who can manage their own ADLs.",
  "type": "sata",
  "options": [
   "Rehabilitation facility",
   "Home hospice agency",
   "Long-term care facility",
   "Home health agency",
   "Independent senior apartment"
  ],
  "correct": [
   2,
   3
  ]
 },
 {
  "id": "hesi1q009",
  "exam": 1,
  "src": 53,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is admitted for cellulitis surrounding an insect bite on the lower right arm, and intravenous (IV) antibiotic therapy is prescribed. Which action should the nurse implement before performing venipuncture?",
  "rationale": "The IV should be placed in the unaffected left arm, and lowering the arm below heart level uses gravity to distend the veins and make cannulation easier. The right arm is infected, and placing a tourniquet or catheter there risks spreading infection and impairing assessment. Shaving causes microabrasions that increase infection risk (hair is clipped if needed), and elevating the arm empties the veins.",
  "type": "mcq",
  "options": [
   "Elevate the left arm on a pillow for 5 minutes.",
   "Lower the left arm below the level of the heart.",
   "Apply a tourniquet above the cellulitis on the right arm.",
   "Shave the hair over the selected insertion site."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q010",
  "exam": 1,
  "src": 779,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "When teaching a group of school-age children how to reduce the risk of Lyme disease, which instruction should the camp nurse include?",
  "rationale": "Lyme disease is transmitted by the bite of an infected deer tick, so wearing long sleeves and long pants tucked into socks, using repellent and checking for ticks reduce the risk. Handwashing, avoiding lake water and not sharing personal items prevent other infections but do not prevent tick bites.",
  "type": "mcq",
  "options": [
   "Avoid drinking water from the lake.",
   "Wear long sleeves and long pants.",
   "Wash your hands frequently.",
   "Do not share personal products."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q011",
  "exam": 1,
  "src": 746,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "When administering an immunization to an adult client, the nurse palpates and gives the injection about one inch below the acromion process into the center of the muscle mass. The nurse should document that the vaccine was administered at which site?",
  "rationale": "The deltoid site is located by palpating the acromion process and injecting into the center of the muscle about 1 to 2 inches (2 to 3 fingerbreadths) below it, and it is the preferred site for most adult vaccines. The rectus femoris and vastus lateralis are in the thigh, and the ventrogluteal site is located using the greater trochanter, anterior superior iliac spine and iliac crest.",
  "type": "mcq",
  "options": [
   "Vastus lateralis",
   "Rectus femoris",
   "Ventrogluteal",
   "Deltoid"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q012",
  "exam": 1,
  "src": 831,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "While the nurse takes vital signs, a critically ill male client grabs the nurse's hand and asks the nurse not to leave. Which action is best for the nurse to take?",
  "rationale": "The client is expressing fear and a need for presence, and sitting with him conveys caring and helps reduce his anxiety, while also allowing the nurse to assess what is frightening him. Leaving with a promise to return dismisses his immediate need, calling family delays support, and sedation is not the first response to an expressed emotional need.",
  "type": "mcq",
  "options": [
   "Call the client's family to come and sit with him.",
   "Pull up a chair and sit beside the client's bed.",
   "Explain that the nurse will return after caring for others.",
   "Administer a prescribed PRN sedative for anxiety."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q013",
  "exam": 1,
  "src": 468,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Following an open reduction of the tibia, the nurse notes bleeding on the client's cast. Which action should the nurse implement?",
  "rationale": "Some drainage through a cast after open reduction is expected, and outlining the stain with the time allows the nurse to monitor whether bleeding is increasing, in which case the provider is notified. Ignoring the bleeding risks missing hemorrhage, there are no signs of shock that would warrant positioning changes, and returning to surgery is not indicated by a stable stain.",
  "type": "mcq",
  "options": [
   "Take no action, since postoperative bleeding is expected.",
   "Lower the client's head while assessing for symptoms of shock.",
   "Call the provider and prepare to return the client to surgery.",
   "Outline the area with ink and check it every 15 minutes for enlargement."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q014",
  "exam": 1,
  "src": 128,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with a large pleural effusion undergoes a thoracentesis. Following the procedure, which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Pneumothorax is a potential complication of thoracentesis, and unequal chest wall movement suggests a collapsed lung on the affected side, which requires immediate intervention. Pain at the insertion site is expected once the local anesthetic wears off. A smaller effusion on the x-ray is the desired result, and the arterial blood gases are within normal limits.",
  "type": "mcq",
  "options": [
   "The chest x-ray shows a decreased pleural effusion.",
   "The client complains of pain at the insertion site.",
   "The ABGs are pH 7.35, PaO2 85, PaCO2 35, HCO3 26.",
   "The client has asymmetrical chest wall expansion."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q015",
  "exam": 1,
  "src": 264,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A mother brings her 4-month-old son to the clinic with a quarter taped over his umbilicus and tells the nurse that the quarter is supposed to fix her child's hernia. Which explanation should the nurse provide?",
  "rationale": "An umbilical hernia results from incomplete closure of the umbilical ring and usually resolves spontaneously by about age 3 to 5 years as the abdominal muscles strengthen; surgery is considered only if it persists or becomes incarcerated. Coins, tape, binders and restrictive clothing do not hasten closure and can irritate the skin or trap a loop of bowel.",
  "type": "mcq",
  "options": [
   "An abdominal binder can be worn daily to reduce the protrusion.",
   "The quarter should be secured with an elastic bandage wrap.",
   "This hernia is a normal variation that usually resolves without treatment.",
   "Restrictive clothing will be adequate to help the hernia go away."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q016",
  "exam": 1,
  "src": 674,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is teaching a client how to perform colostomy irrigation. When observing the client's return demonstration, which action indicates that the client understood the teaching?",
  "rationale": "Hanging the irrigation bag about 12 to 18 inches above the stoma allows the solution to flow slowly and gently, preventing cramping and bowel injury. The cone is inserted only far enough to form a seal, the solution should be lukewarm because cold water causes cramping, and about 500 to 1,000 mL is instilled slowly over 5 to 10 minutes.",
  "type": "mcq",
  "options": [
   "Uses cold tap water for the irrigating solution",
   "Keeps the irrigating container less than 18 inches above the stoma",
   "Instills 1,500 mL of solution as quickly as possible",
   "Inserts the irrigation cone 4 inches into the stoma"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q017",
  "exam": 1,
  "src": 143,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with Alzheimer's disease falls in the bathroom. The nurse notifies the charge nurse and completes a post-fall assessment. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "A new hematoma after a fall may indicate an underlying injury such as a fracture, which requires immediate assessment, immobilization and imaging; in an older adult it may also signal significant bleeding. Incontinence may be related to the inability to reach the toilet, and disorientation is an expected symptom of Alzheimer's disease. A dislodged IV needs to be addressed but is not urgent.",
  "type": "mcq",
  "options": [
   "Urinary incontinence",
   "Dislodged intravenous site",
   "Disorientation to surroundings",
   "Left forearm hematoma"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q018",
  "exam": 1,
  "src": 118,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A client whose wrists are sutured after a recent suicide attempt is transferred from a medical unit. Which nursing diagnosis is of the highest priority?",
  "rationale": "After a suicide attempt, the risk of another attempt is the greatest threat to the client's life, so the risk for self-directed violence takes priority on the psychiatric unit. The sutured wrists require wound care and infection prevention, and body image concerns are real, but these physical and psychosocial problems do not pose the same immediate risk to life.",
  "type": "mcq",
  "options": [
   "Disturbed body image related to wrist scarring",
   "Risk for infection related to sutured wounds",
   "Impaired skin integrity related to wrist lacerations",
   "Risk for self-directed violence related to impulsive actions"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q019",
  "exam": 1,
  "src": 569,
  "topic": "Renal & GU",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse caring for a client with acute kidney injury (acute renal failure) notes that the client has voided 800 mL of urine in 4 hours. Based on this assessment, which need should the nurse anticipate?",
  "rationale": "A urine output of 200 mL/hour signals the diuretic phase of acute kidney injury, in which the tubules cannot yet concentrate urine, so large volumes of water and electrolytes such as sodium and potassium are lost and must be replaced to prevent dehydration. Fluid restriction applies to the oliguric phase, dialysis is not indicated by increasing output, and a diuretic would worsen the losses.",
  "type": "mcq",
  "options": [
   "Administration of a loop diuretic",
   "Restriction of fluid intake to 1,000 mL per day",
   "Large amounts of fluid and electrolyte replacement",
   "Preparation for emergency hemodialysis"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q020",
  "exam": 1,
  "src": 22,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A 75-year-old female client is admitted to the orthopedic unit following an open reduction and internal fixation of a hip fracture. On the second postoperative day, the client becomes confused and repeatedly asks the nurse where she is. What information is most important for the nurse to obtain?",
  "rationale": "Acute confusion appearing 48 to 72 hours after admission is the classic timeframe for alcohol withdrawal, which can progress to delirium tremens and seizures, so the alcohol history is the most important information to obtain. Sedatives and anxiolytics can contribute to confusion, and a history of similar behavior helps distinguish delirium from dementia, but missing alcohol withdrawal carries the greatest risk of harm.",
  "type": "mcq",
  "options": [
   "History of alcohol use",
   "Use of sleeping medications",
   "History of this behavior",
   "Use of antianxiety medications"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q021",
  "exam": 1,
  "src": 640,
  "topic": "Maternity & Newborn",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is interacting with a female client who is diagnosed with postpartum depression. Which findings should the nurse document as objective signs of depression? (Select all that apply.)",
  "rationale": "Objective data are findings the nurse directly observes, such as a flat affect, poor eye contact and a disheveled appearance. Feelings of hopelessness, sleep difficulty and loss of appetite are reported by the client and are therefore subjective data, although they are also important symptoms of depression.",
  "type": "sata",
  "options": [
   "Has a disheveled appearance",
   "Interacts with a flat affect",
   "Avoids eye contact",
   "Says that she has no appetite",
   "States that she feels hopeless",
   "Reports difficulty sleeping at night"
  ],
  "correct": [
   0,
   1,
   2
  ]
 },
 {
  "id": "hesi1q022",
  "exam": 1,
  "src": 62,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client is admitted to the intensive care unit with diabetes insipidus due to a pituitary gland tumor. Which potential complication should the nurse monitor closely?",
  "rationale": "Diabetes insipidus results from insufficient antidiuretic hormone and causes massive dilute polyuria, leading to dehydration and electrolyte disturbances, including potassium loss that can trigger lethal dysrhythmias. Ketonuria is associated with diabetic ketoacidosis, not DI. Fluid loss in DI causes hypovolemia and hypotension rather than peripheral edema or hypertension, which are findings of fluid excess as in SIADH.",
  "type": "mcq",
  "options": [
   "Peripheral edema",
   "Hypokalemia",
   "Ketonuria",
   "Elevated blood pressure"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q023",
  "exam": 1,
  "src": 487,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "In caring for a client receiving linezolid IV for nosocomial pneumonia, which assessment finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "Broad-spectrum antibiotics such as linezolid disrupt normal intestinal flora and can lead to Clostridioides difficile infection, so new watery diarrhea must be reported for testing and treatment. Yellow sputum is expected with pneumonia, fatigue is common during illness, and nausea and headache are minor side effects of linezolid.",
  "type": "mcq",
  "options": [
   "Nausea and headache",
   "Increased fatigue",
   "Yellow-tinged sputum",
   "Watery diarrhea"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q024",
  "exam": 1,
  "src": 38,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving an infusion labeled Heparin Sodium 25,000 units in 5% Dextrose Injection 500 mL at 14 mL/hour. Before changing the rate per a new prescription, the nurse calculates the dose the client is currently receiving. How many units of heparin per hour are currently infusing? (Enter numeric value only.)",
  "rationale": "The concentration is 25,000 units ÷ 500 mL = 50 units/mL. At 14 mL/hour the client receives 50 units/mL × 14 mL/hour = 700 units/hour (25,000 ÷ 500 × 14 = 700). Knowing the current dose lets the nurse verify the change to the newly prescribed 900 units/hour.",
  "type": "fill",
  "answer": 700,
  "unit": "units/hr",
  "tolerance": 0
 },
 {
  "id": "hesi1q025",
  "exam": 1,
  "src": 152,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with cirrhosis of the liver is admitted with complications related to end-stage liver disease. Which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "In end-stage liver disease, decreased albumin synthesis lowers oncotic pressure and causes third spacing, so abdominal girth, protein levels and edema are monitored to track ascites and fluid retention. Clients with ascites usually require sodium and often fluid restriction, so increasing fluids is inappropriate. A low-phosphorus diet is used for chronic kidney disease, not cirrhosis.",
  "type": "sata",
  "options": [
   "Note signs of swelling and edema.",
   "Provide a diet low in phosphorus.",
   "Increase oral fluid intake to 3,000 mL daily.",
   "Monitor abdominal girth.",
   "Report serum albumin and globulin levels."
  ],
  "correct": [
   0,
   3,
   4
  ]
 },
 {
  "id": "hesi1q026",
  "exam": 1,
  "src": 19,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A 60-year-old female client asks the nurse about hormone replacement therapy (HRT) as a means of preventing osteoporosis. Which factor in the client's history is a possible contraindication for the use of HRT?",
  "rationale": "Estrogen-containing HRT increases the risk of estrogen-dependent breast cancer, so a strong first-degree family history of breast cancer is a potential contraindication. A prior hysterectomy actually allows estrogen-only therapy without a progestin. Treated hypothyroidism is not a contraindication, and hot flashes and night sweats are vasomotor symptoms that HRT is used to relieve.",
  "type": "mcq",
  "options": [
   "She had a total hysterectomy at age 45.",
   "She has been treated for hypothyroidism for 10 years.",
   "She reports frequent hot flashes and night sweats.",
   "Her mother and sister have a history of breast cancer."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q027",
  "exam": 1,
  "src": 151,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with chronic alcoholism is admitted with a decreased serum magnesium level. Which snack option should the nurse recommend to this client?",
  "rationale": "Chronic alcohol use causes poor intake and increased renal and GI loss of magnesium, and nuts and seeds such as almonds, along with green leafy vegetables and whole grains, are rich sources of magnesium. Cheese and crackers, raw carrots and celery, and processed bologna provide much lower amounts of magnesium per serving, and bologna is also high in sodium.",
  "type": "mcq",
  "options": [
   "Dry-roasted almonds",
   "Carrot and celery sticks",
   "Cheddar cheese and crackers",
   "Beef bologna slices"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q028",
  "exam": 1,
  "src": 600,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is assisting a new mother with infant feeding. Which factor is most likely to result in a decreased milk supply for the mother who is breastfeeding?",
  "rationale": "Milk production works on supply and demand; infant sucking stimulates prolactin release, so supplemental formula feedings reduce time at the breast and decrease the milk supply. A protein-rich diet, adequate fluids and frequent feedings every 2 to 3 hours all support milk production.",
  "type": "mcq",
  "options": [
   "Supplemental feedings with formula",
   "Increased maternal intake of oral fluids",
   "Breastfeeding every 2 to 3 hours",
   "A maternal diet high in protein"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q029",
  "exam": 1,
  "src": 610,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is caring for a client immediately after insertion of a PICC line. Suddenly the client becomes anxious and tachycardic, and a loud churning sound is heard over the precordium on auscultation. Which action should the nurse take first?",
  "rationale": "Sudden anxiety, tachycardia and a churning (mill-wheel) murmur indicate an air embolism, and the left side-lying Trendelenburg position traps the air in the right atrium away from the pulmonary outflow tract while oxygen is given and the provider is notified. High Fowler's position allows air to travel into the pulmonary circulation, removing the catheter does not remove the air, and flushing could introduce more air.",
  "type": "mcq",
  "options": [
   "Remove the PICC line and apply pressure to the site.",
   "Place the client on the left side in the Trendelenburg position.",
   "Place the client in high Fowler's position.",
   "Flush the PICC line with 10 mL of normal saline."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q030",
  "exam": 1,
  "src": 91,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client refuses to ambulate, reporting abdominal discomfort and bloating caused by “too much gas buildup.” The client's abdomen is distended. Which prescribed PRN medication should the nurse administer?",
  "rationale": "Simethicone is an antiflatulent that breaks up gas bubbles in the GI tract so the gas can be expelled more easily, relieving bloating and distention. Docusate is a stool softener and bisacodyl a stimulant laxative used for constipation. Metoclopramide increases upper GI motility and is used for gastroparesis and nausea, not gas pain.",
  "type": "mcq",
  "options": [
   "Metoclopramide",
   "Docusate sodium",
   "Simethicone",
   "Bisacodyl"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q031",
  "exam": 1,
  "src": 832,
  "topic": "Respiratory",
  "clientNeed": "Psychosocial Integrity",
  "stem": "While the nurse is teaching a young adult male to use an inhaler for newly diagnosed asthma, he stares into the distance and appears to be concentrating on something other than the lesson. Which action should the nurse take?",
  "rationale": "The client's inattention may reflect anxiety about the new diagnosis or another concern that is blocking learning, so asking what he is thinking about identifies and addresses the barrier. Continuing the lesson or leaving a handout ignores the barrier, and rescheduling without exploring the cause may not solve the problem.",
  "type": "mcq",
  "options": [
   "Give the client a written handout and leave the room.",
   "Reschedule the lesson for another day without asking why.",
   "Continue the lesson so that all the content is covered.",
   "Ask the client what he is thinking about at this time."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q032",
  "exam": 1,
  "src": 533,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The healthcare provider prescribes a low-fiber diet for a client with ulcerative colitis. Which food selection indicates to the nurse that the client understands the prescribed diet?",
  "rationale": "Tender meats such as roasted turkey and well-cooked or canned vegetables are low in fiber and reduce bowel stimulation during a flare of ulcerative colitis. Potato skins and raw vegetables, whole-grain cereals and fresh fruits with seeds such as strawberries are high in fiber and increase stool bulk and frequency.",
  "type": "mcq",
  "options": [
   "Roasted turkey and canned vegetables",
   "Pancakes and whole-grain cereal",
   "Baked potato with skin and raw carrots",
   "Roast pork and fresh strawberries"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q033",
  "exam": 1,
  "src": 286,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A nurse with 10 years of emergency department experience is reassigned to the perinatal unit for an 8-hour shift. Which client is best to assign to this nurse?",
  "rationale": "A floating nurse should be assigned clients whose care matches existing competencies, and an infected wound requires assessment, wound care and antibiotic administration that an experienced emergency nurse can provide safely. Oxytocin induction, phototherapy for a newborn and magnesium sulfate for preterm labor require specialized obstetric or neonatal knowledge and monitoring.",
  "type": "mcq",
  "options": [
   "A primigravida in active labor receiving oxytocin",
   "A client at 32 weeks with preterm labor on magnesium sulfate",
   "A newborn with hyperbilirubinemia under phototherapy",
   "A mother with an infected episiotomy"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q034",
  "exam": 1,
  "src": 481,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While assessing a client at 34 weeks' gestation, the nurse notes a slightly elevated total T4 with a slightly enlarged thyroid, a hematocrit of 28%, a heart rate of 92 beats/minute, and a systolic murmur. Which finding requires follow-up?",
  "rationale": "Physiologic anemia of pregnancy occurs because plasma volume increases more than red cell mass, but a hematocrit below about 32% to 33% in the third trimester suggests iron-deficiency anemia that requires follow-up. A slightly enlarged thyroid with increased total T4 (from increased binding globulin), a mildly increased heart rate and a soft systolic flow murmur are normal changes of pregnancy.",
  "type": "mcq",
  "options": [
   "Elevated thyroid hormone level",
   "Hematocrit of 28%",
   "Heart rate of 92 beats/minute",
   "Systolic murmur"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q035",
  "exam": 1,
  "src": 107,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client experiencing musculoskeletal pain receives a prescription for ketorolac 15 mg IM every 6 hours. The medication is dispensed in a 30 mg/mL prefilled syringe. Which action should the nurse implement when giving the medication?",
  "rationale": "The syringe contains 30 mg in 1 mL, so wasting 0.5 mL leaves the prescribed 15 mg, and the ventrogluteal site is the preferred IM site because it is free of major nerves and vessels. Giving the whole syringe doubles the dose, and the dorsogluteal site risks sciatic nerve injury. Transferring to another syringe is unnecessary, and the back of the arm is a subcutaneous rather than an IM site. Calculating and preparing the dose from the available concentration is the nurse's responsibility, so a prescription change is not needed.",
  "type": "mcq",
  "options": [
   "Use a separate syringe to remove 15 mg from the prefilled syringe and give it in the back of the arm.",
   "Call the healthcare provider to request a prescription change to match the dispensed 30 mg dose.",
   "Waste 0.5 mL from the prefilled syringe and inject the medication in the ventrogluteal site.",
   "Administer the entire prefilled syringe deep in the dorsogluteal site."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q036",
  "exam": 1,
  "src": 242,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A male client who was diagnosed with viral hepatitis A 4 weeks ago returns to the clinic complaining of weakness and fatigue. Which finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "New purple lesions such as petechiae, purpura or ecchymoses suggest coagulopathy from impaired hepatic synthesis of clotting factors, a sign of fulminant hepatic failure that must be reported. Fatigue and mild anorexia can persist for weeks during recovery from hepatitis A, and stools returning to brown indicate improving bile flow.",
  "type": "mcq",
  "options": [
   "New onset of purple skin lesions",
   "Mild anorexia that is worse in the morning",
   "Continued fatigue requiring afternoon naps",
   "Stools that are returning to a brown color"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q037",
  "exam": 1,
  "src": 318,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A young adult hit with a baseball bat on the left temporal area of the skull is conscious on admission to the emergency department and is transferred to the neurologic unit to be monitored for signs of a closed head injury. Which assessment finding indicates a developing epidural hematoma?",
  "rationale": "An epidural hematoma usually results from a tear in the middle meningeal artery beneath the temporal bone, and arterial bleeding causes rapid deterioration, often after a brief lucid interval, with a decline in consciousness within hours of the injury. Changes appearing after 24 to 48 hours are more consistent with a subacute subdural hematoma or cerebral edema, and fever with nuchal rigidity and opisthotonos indicate meningitis.",
  "type": "mcq",
  "options": [
   "Altered consciousness within the first 24 hours after injury",
   "Headache and pupillary changes 48 hours after the injury",
   "Fever, nuchal rigidity, and opisthotonos within hours",
   "Cushing reflex and cerebral edema developing after 24 hours"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q038",
  "exam": 1,
  "src": 370,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult male was diagnosed with stage IV lung cancer three weeks ago. His wife asks the nurse how she will know that his death is imminent, because their two adult children want to be present when he dies. What is the best response by the nurse?",
  "rationale": "The wife has asked a direct question, and the nurse should answer honestly by describing the expected signs of approaching death, such as decreasing consciousness, changes in breathing, cool mottled extremities and decreased urine output. Reassuring her that the provider will call may not be accurate, and discussing the children or their travel time does not answer her question.",
  "type": "mcq",
  "options": [
   "Explain that he will begin to lose consciousness and his body systems will slow down.",
   "Gather information about how long it will take for the children to arrive.",
   "Offer to discuss the client's health status with each of the adult children.",
   "Reassure her that the healthcare provider will tell her when to call the children."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q039",
  "exam": 1,
  "src": 792,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "Which client should the charge nurse on an oncology unit assign to an RN rather than a practical nurse (PN)?",
  "rationale": "Supporting a family through a decision between palliative care and continued treatment requires RN-level assessment, therapeutic communication, teaching and coordination with the interdisciplinary team. Giving scheduled oral medications to a stable client, monitoring a healing port site and assisting with hygiene are predictable tasks within the PN's scope.",
  "type": "mcq",
  "options": [
   "An older female client with cancer whose children are deciding whether to change to palliative care or continue disease treatment",
   "A client with breast cancer who needs assistance with a scheduled bath and linen change",
   "A client with stable lymphoma who is receiving scheduled oral antiemetics before meals",
   "A client two days after implanted port placement whose site is clean and dry"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q040",
  "exam": 1,
  "src": 568,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "One day after a pyloromyotomy, the nurse notices that a 3-month-old boy is restless, is making facial grimaces, and is drawing his knees to his chest. Which action should the nurse take?",
  "rationale": "Restlessness, grimacing and drawing the knees up are behavioral indicators of pain in infants, which is expected after abdominal surgery and should be treated with the prescribed analgesic. Feedings after pyloromyotomy are advanced gradually rather than given as a full feeding, prone positioning increases SIDS risk and pressure on the incision, and these pain behaviors do not specifically suggest obstruction.",
  "type": "mcq",
  "options": [
   "Administer the prescribed analgesic for pain.",
   "Offer the infant a full feeding of formula.",
   "Place the infant prone to relieve gas pains.",
   "Notify the surgeon of a possible obstruction."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q041",
  "exam": 1,
  "src": 342,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "After removal of a left femoral arterial sheath, which assessment findings warrant immediate intervention by the nurse? (Select all that apply.)",
  "rationale": "Unrelieved back or flank pain suggests retroperitoneal bleeding, a cool, pale extremity indicates arterial occlusion or compromised circulation, and an expanding hematoma signals bleeding at the puncture site, all requiring immediate intervention. A small amount of drainage and mild tenderness at the insertion site are expected after sheath removal and are monitored.",
  "type": "sata",
  "options": [
   "Quarter-size spot of red drainage at the site",
   "Left groin hematoma the size of an egg",
   "Mild tenderness over the insertion site",
   "Unrelieved back and flank pain",
   "Cool, pale left leg and foot"
  ],
  "correct": [
   1,
   3,
   4
  ]
 },
 {
  "id": "hesi1q042",
  "exam": 1,
  "src": 291,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A postpartum client complains that she has the urge to urinate every hour but is able to void only a small amount. Which intervention provides the nurse with the most useful information?",
  "rationale": "Frequent voiding of small amounts after birth suggests urinary retention with overflow, caused by decreased bladder tone and perineal trauma; measuring the residual urine after voiding confirms incomplete emptying. A pad count quantifies lochia, a perineal hematoma typically presents with severe perineal pain, and her usual pattern does not explain the current problem.",
  "type": "mcq",
  "options": [
   "Assess for a perineal hematoma.",
   "Catheterize for residual urine after the next voiding.",
   "Initiate a perineal pad count.",
   "Determine the client's usual voiding pattern."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q043",
  "exam": 1,
  "src": 702,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse plans to use an electronic digital scale to weigh a client who is able to stand. Which intervention should the nurse implement to ensure an accurate measurement of the client's weight?",
  "rationale": "An electronic scale must be calibrated (zeroed) before use so the reading reflects only the client's weight. Holding the handrail transfers weight off the scale, daily weights should be taken at the same time of day, and the client should wear similar light clothing without shoes.",
  "type": "mcq",
  "options": [
   "Ensure that the scale is calibrated before the weight is obtained.",
   "Have the client hold the handrail for balance during the weighing.",
   "Ask the client to wear shoes and outdoor clothing for consistency.",
   "Weigh the client at a different time each day to compare results."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q044",
  "exam": 1,
  "src": 20,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A 60-year-old female client with a positive family history of ovarian cancer has developed an abdominal mass and is being evaluated for possible ovarian cancer. Her Papanicolaou (Pap) smear results are negative. What information should the nurse include in the client's teaching plan?",
  "rationale": "A Pap smear screens for cervical cancer and does not detect ovarian cancer, so a negative result does not rule out malignancy. An abdominal mass in a postmenopausal woman with a family history requires further evaluation such as transvaginal ultrasound, CA-125 and often surgical exploration for definitive diagnosis and staging. Repeating the Pap smear or relying on annual pelvic exams would delay diagnosis of a cancer that is often found late.",
  "type": "mcq",
  "options": [
   "Further evaluation involving surgery may be needed.",
   "An annual pelvic examination is enough to monitor the mass.",
   "A negative Pap smear rules out ovarian malignancy.",
   "A repeat Pap smear in 6 months will confirm the diagnosis."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q045",
  "exam": 1,
  "src": 125,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with a history of diabetes and coronary artery disease is admitted with shortness of breath, anxiety, and confusion. Blood pressure is 80/60 mm Hg, heart rate is 120 beats/minute with audible third and fourth heart sounds, and bibasilar crackles are present. Urine output averages 5 mL/hour. Normal saline is infusing at 124 mL/hour with a secondary infusion of dopamine titrated in mcg/kg/minute per infusion pump. Which intervention should the nurse implement?",
  "rationale": "Hypotension, tachycardia, S3 and S4 gallops, crackles and oliguria indicate cardiogenic shock, so the vasoactive infusion should be titrated per protocol to raise blood pressure and restore perfusion. The low urine output results from poor renal perfusion, not catheter obstruction. Pacing is used for symptomatic bradycardia, not tachycardia, and blood glucose should be monitored but is not the immediate priority.",
  "type": "mcq",
  "options": [
   "Obtain a capillary blood glucose measurement.",
   "Prepare the client for external pacing.",
   "Titrate the dopamine infusion to raise the blood pressure.",
   "Irrigate the indwelling urinary catheter."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q046",
  "exam": 1,
  "src": 790,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Which class of drugs is the only potential cure for septic shock?",
  "rationale": "Septic shock is caused by infection, so only anti-infective agents directed at the causative organism, ideally started within the first hour, along with source control, can eliminate the cause. Vasopressors and crystalloid fluids support blood pressure and perfusion, and corticosteroids are used for refractory shock, but none treats the underlying infection.",
  "type": "mcq",
  "options": [
   "Crystalloid solutions",
   "Vasopressors",
   "Anti-infectives",
   "Corticosteroids"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q047",
  "exam": 1,
  "src": 217,
  "topic": "Maternity & Newborn",
  "clientNeed": "Management of Care",
  "stem": "A gravida 2 para 1 at 38 weeks' gestation, scheduled for a repeat cesarean birth in one week, is brought to the labor and delivery unit with contractions every 10 minutes. While the nurse is assessing the client, the client's mother enters and says loudly, “I've had 8 children, and I know she's in labor. I want her to have her cesarean section right now!” Which action should the nurse take?",
  "rationale": "The nurse's responsibility is to the client, and asking the disruptive mother to step out allows the nurse to complete the assessment and speak privately with the client about her wishes. Telling the mother to stop speaking is confrontational and likely to escalate the situation. Security is unnecessary unless the mother refuses or becomes threatening, and the nurse can manage this situation without the charge nurse.",
  "type": "mcq",
  "options": [
   "Notify the charge nurse of the situation.",
   "Request security to remove the mother from the room.",
   "Tell the mother to stop speaking for the client.",
   "Ask the mother to leave the room."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q048",
  "exam": 1,
  "src": 328,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "After administering a proton pump inhibitor (PPI), which action should the nurse take to evaluate the effectiveness of the medication?",
  "rationale": "PPIs suppress gastric acid secretion to treat GERD and peptic ulcer disease, so relief of epigastric pain and heartburn indicates the drug is effective. Hypomagnesemia is an adverse effect of long-term PPI use that is monitored for safety, not effectiveness. Abdominal girth and bowel sounds do not reflect the therapeutic action of the drug.",
  "type": "mcq",
  "options": [
   "Measure the client's abdominal girth daily.",
   "Ask the client about gastrointestinal pain.",
   "Auscultate the client's bowel sounds.",
   "Monitor the client's serum magnesium level."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q049",
  "exam": 1,
  "src": 606,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is caring for a client with a nasogastric (NG) tube. Which task can the nurse delegate to the unlicensed assistive personnel (UAP)?",
  "rationale": "When a provider has prescribed that suction may be interrupted for ambulation, disconnecting the tube from suction is a routine task within the UAP's scope. Verifying tube placement, irrigating the tube and assessing the drainage require nursing judgment and assessment and cannot be delegated.",
  "type": "mcq",
  "options": [
   "Check the placement of the NG tube before the client ambulates.",
   "Disconnect the NG suction so the client can walk in the hallway.",
   "Irrigate the NG tube with normal saline to maintain its patency.",
   "Assess the color and character of the NG drainage."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q050",
  "exam": 1,
  "src": 499,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "In preparing a diabetes education program, which goal should the nurse identify as the primary emphasis for a class on diabetes self-management?",
  "rationale": "The primary goal of diabetes self-management education is to enable clients to participate actively, in collaboration with the healthcare team, in controlling the disease. Treating the disease completely independently is not the goal, reduced costs are an outcome rather than the educational emphasis, and knowledge alone does not ensure that clients will manage the disease.",
  "type": "mcq",
  "options": [
   "Prepare clients to independently treat their disease process.",
   "Enable clients to become active participants in controlling the disease process.",
   "Reduce healthcare costs related to diabetic complications.",
   "Increase clients' knowledge of the disease process and treatment options."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q051",
  "exam": 1,
  "src": 524,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "The development of atherosclerosis is a process of sequential events. Which sequence lists the pathophysiologic events in the correct order of occurrence?",
  "rationale": "Atherosclerosis begins with injury to the arterial endothelium from factors such as hypertension, smoking and hyperlipidemia, triggering inflammation. Macrophages engulf oxidized LDL and become foam cells that form fatty streaks, and the foam cells release growth factors that stimulate smooth muscle proliferation over the streaks, forming fibrous plaques. The enlarging plaque narrows the lumen and produces ischemia.",
  "type": "mcq",
  "options": [
   "Vessel narrowing causes ischemia → Endothelial injury causes inflammation → Foam cells release growth factors for smooth muscle → Macrophages consume LDL, forming foam cells → Smooth muscle grows over fatty streaks, forming fibrous plaques",
   "Smooth muscle grows over fatty streaks, forming fibrous plaques → Foam cells release growth factors for smooth muscle → Macrophages consume LDL, forming foam cells → Endothelial injury causes inflammation → Vessel narrowing causes ischemia",
   "Macrophages consume LDL, forming foam cells → Endothelial injury causes inflammation → Smooth muscle grows over fatty streaks, forming fibrous plaques → Foam cells release growth factors for smooth muscle → Vessel narrowing causes ischemia",
   "Endothelial injury causes inflammation → Macrophages consume LDL, forming foam cells → Foam cells release growth factors for smooth muscle → Smooth muscle grows over fatty streaks, forming fibrous plaques → Vessel narrowing causes ischemia"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q052",
  "exam": 1,
  "src": 26,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A child is diagnosed with acquired aplastic anemia. The nurse knows that this child has the best prognosis with which treatment regimen?",
  "rationale": "Hematopoietic stem cell (bone marrow) transplantation from a matched donor, ideally a sibling, offers the best long-term survival and a potential cure for severe acquired aplastic anemia because it replaces the failed marrow. Immunosuppressive therapy with antithymocyte globulin and cyclosporine is used when no matched donor exists, but relapse and later clonal disease are more common. Transfusions are only supportive, and chemotherapy is not a treatment for marrow failure.",
  "type": "mcq",
  "options": [
   "Chemotherapy",
   "Bone marrow transplantation",
   "Immunosuppressive therapy",
   "Blood transfusion"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q053",
  "exam": 1,
  "src": 209,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A female client who was mechanically ventilated for 7 days is extubated. Two hours later, she has audible stridor and is unable to produce an effective cough, and her respirations are rapid and shallow. Which intervention is most important?",
  "rationale": "Stridor with rapid, shallow respirations and an ineffective cough shortly after prolonged intubation suggests laryngeal edema and impending respiratory failure, so the nurse prepares for reintubation to secure the airway. Arterial blood gases, pulmonary toilet and reviewing recent opioid doses are appropriate, but they must not delay airway management in a client who is failing extubation.",
  "type": "mcq",
  "options": [
   "Review the record of recent analgesia.",
   "Provide frequent pulmonary toilet.",
   "Prepare the client for reintubation.",
   "Obtain STAT arterial blood gases."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q054",
  "exam": 1,
  "src": 379,
  "topic": "Endocrine",
  "clientNeed": "Safety & Infection Control",
  "stem": "An alert older client with type 1 diabetes mellitus is admitted with a serum glucose of 420 mg/dL. As the nurse administers 10 units of regular insulin IV, the client immediately begins to vomit. Which action should the nurse implement first?",
  "rationale": "Preventing aspiration of vomitus is the immediate priority, so the client is turned to the side to protect the airway. The insulin is still needed to treat hyperglycemia, and an antiemetic and repeat glucose check are appropriate after the airway is protected.",
  "type": "mcq",
  "options": [
   "Stop the insulin and notify the provider.",
   "Recheck the client's blood glucose.",
   "Turn the client to a lateral position.",
   "Administer a prescribed antiemetic IV."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q055",
  "exam": 1,
  "src": 63,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client is admitted to the surgical unit with symptoms of a possible intestinal obstruction. When preparing to insert a nasogastric (NG) tube, which intervention should the nurse implement?",
  "rationale": "High Fowler's position facilitates passage of the tube into the esophagus and reduces the risk of aspiration if vomiting occurs. NG tube length is measured from the tip of the nose to the earlobe to the xiphoid process; corner of the mouth to the angle of the jaw is the measurement for an oral airway. An analgesic is not routinely needed, and gag reflex assessment is not the key preparation step for a conscious client.",
  "type": "mcq",
  "options": [
   "Administer a PRN analgesic.",
   "Measure from the corner of the mouth to the angle of the jaw.",
   "Assess for a gag reflex.",
   "Elevate the head of the bed 60 to 90 degrees."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q056",
  "exam": 1,
  "src": 402,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Physiological Adaptation",
  "stem": "An older client is admitted to the intensive care unit with severe abdominal pain, abdominal distention, and absent bowel sounds. The client has smoked 2 packs of cigarettes daily for 50 years and is restless and confused. Vital signs: temperature 96° F, heart rate 122 beats/minute, respiratory rate 36 breaths/minute, mean arterial pressure (MAP) 64 mm Hg, and central venous pressure (CVP) 7 mm Hg. Laboratory findings: hemoglobin 6.5 g/dL, platelets 60,000/mm3, and WBC 3,000/mm3. Based on these findings, the client is at greatest risk for which pathophysiologic condition?",
  "rationale": "The client shows dysfunction of several systems at once, including the GI tract, neurologic status, circulation, respiration and the hematologic system, which is characteristic of multiple organ dysfunction syndrome requiring aggressive support. DIC may develop as part of MODS but does not explain all of the findings, a long smoking history does not account for the acute multisystem failure, and there is no evidence of HIV infection.",
  "type": "mcq",
  "options": [
   "Disseminated intravascular coagulation (DIC)",
   "Chronic obstructive pulmonary disease (COPD)",
   "Acquired immunodeficiency syndrome (AIDS)",
   "Multiple organ dysfunction syndrome (MODS)"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q057",
  "exam": 1,
  "src": 154,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with diabetic peripheral neuropathy has been taking pregabalin for 4 days. Which finding indicates to the nurse that the medication is effective?",
  "rationale": "Pregabalin reduces the release of excitatory neurotransmitters and is used to treat neuropathic pain, so a decrease in the burning, tingling pain of diabetic neuropathy shows the drug is effective. It does not improve peripheral circulation, promote wound healing or improve vision, and blurred vision is actually a possible adverse effect.",
  "type": "mcq",
  "options": [
   "Reduced level of pain",
   "Improved visual acuity",
   "Full volume of pedal pulses",
   "Granulating tissue in a foot ulcer"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q058",
  "exam": 1,
  "src": 753,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "When assessing an adult male with a history of hypertension at the community health clinic, the nurse notes 2+ pitting edema in both ankles. He also has a history of gastroesophageal reflux disease (GERD) and depression. Which intervention is most important for the nurse to implement?",
  "rationale": "Many OTC products, including sodium bicarbonate antacids that he may be taking for GERD and NSAIDs, contain sodium or cause fluid retention, so reviewing OTC use may identify a correctable cause of the edema and elevated pressure. Hospitalization is not indicated by mild edema, a food journal is useful later, and elevating the feet relieves symptoms without identifying the cause.",
  "type": "mcq",
  "options": [
   "Arrange transport for the client to the hospital.",
   "Review the client's use of over-the-counter (OTC) medications.",
   "Instruct the client to keep a food journal, including portion sizes.",
   "Reinforce the importance of keeping the feet elevated."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q059",
  "exam": 1,
  "src": 546,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The home health nurse is planning daily visits to a group of clients. Which client should the nurse visit first?",
  "rationale": "A rapid weight gain of 3 pounds in two days indicates fluid retention and acute decompensation of heart failure that can progress to pulmonary edema, so this client needs assessment first. Back pain with a known pressure injury, chronic dyspnea in COPD and reduced intake in a terminally ill client are expected or chronic findings that are less urgent.",
  "type": "mcq",
  "options": [
   "An immobile client with a stage 3 pressure injury on the coccyx who has low back pain",
   "A terminally ill older adult who has refused to eat or drink for the last 48 hours",
   "A client with heart failure who reports a 3-pound weight gain in the last two days",
   "A client with chronic obstructive pulmonary disease (COPD) who is chronically short of breath"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q060",
  "exam": 1,
  "src": 384,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "An older female client with osteoarthritis reports increasing pain and stiffness in her right knee and asks how to reduce these symptoms. In responding, the nurse recognizes which pathology as the cause of her symptoms?",
  "rationale": "Osteoarthritis is a degenerative disease in which articular cartilage breaks down, leading to bone-on-bone friction, osteophyte formation, pain and stiffness, especially in weight-bearing joints such as the knee. Autoimmune synovial inflammation describes rheumatoid arthritis, uric acid crystals cause gout, and decreased bone density is osteoporosis.",
  "type": "mcq",
  "options": [
   "Autoimmune inflammation of the synovium",
   "Destruction of joint cartilage",
   "Decreased bone mineral density",
   "Deposits of uric acid crystals in the joint"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q061",
  "exam": 1,
  "src": 294,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A preschooler with constipation needs to increase fiber intake. Which snack suggestion should the nurse provide?",
  "rationale": "Oatmeal is a whole grain that provides dietary fiber, so oatmeal cookies are a child-friendly high-fiber snack. Soft pretzels are made from refined flour and are low in fiber, and yogurt and cheese are dairy foods with no fiber; cheese in particular can worsen constipation.",
  "type": "mcq",
  "options": [
   "Low-fat cheese sticks",
   "Soft pretzels",
   "Fruit-flavored yogurt",
   "Oatmeal cookies"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q062",
  "exam": 1,
  "src": 714,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse teaches an adolescent male client how to use a metered-dose inhaler with the open-mouth technique. Which instruction should the nurse provide?",
  "rationale": "With the open-mouth technique, the inhaler is held 1 to 2 inches in front of the open mouth so the aerosol slows and more medication reaches the lungs rather than the back of the throat; a spacer is an even more effective option. The mouthpiece is never placed under the tongue, the canister is pressed at the start of a slow, deep inhalation rather than after the lungs are full, and exhaling during actuation blows the medication away.",
  "type": "mcq",
  "options": [
   "Hold the device one to two inches away from the open mouth.",
   "Breathe out slowly and deeply while compressing the device.",
   "Secure the mouthpiece under the tongue.",
   "Press down on the device after breathing in fully."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q063",
  "exam": 1,
  "src": 694,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse notes that a client is receiving a heparin infusion labeled Heparin Sodium 25,000 units in 5% Dextrose Injection 500 mL at 50 mL/hour. How many units of heparin is the client receiving per hour? (Enter numeric value only.)",
  "rationale": "Concentration: 25,000 units ÷ 500 mL = 50 units/mL. Hourly dose: 50 units/mL × 50 mL/hour = 2,500 units/hour. This is well above typical maintenance doses of about 1,000 to 1,600 units/hour, so the nurse should verify the prescription and protocol.",
  "type": "fill",
  "answer": 2500,
  "unit": "units/hr",
  "tolerance": 0
 },
 {
  "id": "hesi1q064",
  "exam": 1,
  "src": 419,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An unlicensed assistive personnel (UAP) tells the nurse who is giving medications that a female client is crying after just being told that she has a malignant tumor. Which action should the nurse implement first?",
  "rationale": "Crying is an expected grief response, and the nurse acknowledges the client and makes a commitment to return for uninterrupted time to talk, which establishes trust while allowing the time-sensitive medication pass to continue. Asking the provider to repeat the diagnosis, calling the chaplain without asking the client and medicating a normal emotional response do not meet her need for presence and support.",
  "type": "mcq",
  "options": [
   "Ask the healthcare provider to return and explain the diagnosis to the client again.",
   "Call the hospital chaplain to come and visit the client right away.",
   "Tell the client that the nurse will be back to talk with her after the medications are given.",
   "Give the client a prescribed PRN dose of an antianxiety medication."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q065",
  "exam": 1,
  "src": 712,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse should teach the parents of a 6-year-old recently diagnosed with asthma that the symptoms of an acute asthma episode are caused by which physiologic response?",
  "rationale": "An acute asthma episode results from airway inflammation with mucosal edema and mucus production, combined with bronchospasm, which narrows the airways and causes wheezing, dyspnea and coughing. Surfactant deficiency causes respiratory distress syndrome in preterm infants, alveolar destruction describes emphysema, and parenchymal infection is pneumonia.",
  "type": "mcq",
  "options": [
   "Alveolar collapse from a lack of surfactant",
   "Inflammation of the mucous membranes and bronchospasm",
   "Bacterial infection of the lung parenchyma",
   "Destruction of the alveolar walls and air trapping"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q066",
  "exam": 1,
  "src": 729,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "An RN is assigned to four surgical clients. After receiving report, which client should the nurse see first?",
  "rationale": "Transfusion reactions most often occur early in a transfusion and can be life-threatening, so the client receiving blood is assessed first for signs such as fever, chills, dyspnea and hypotension. Continuous bladder irrigation after surgery is expected, a request for pain medication after a laparoscopic procedure can be addressed next, and the client in traction awaiting surgery is stable.",
  "type": "mcq",
  "options": [
   "A client in Buck's traction who is scheduled for hip arthroplasty within 12 hours",
   "A client two days after bladder surgery with a continuous bladder irrigation infusing",
   "A client three days after colon resection who is receiving a transfusion of packed RBCs",
   "A client one day after laparoscopic cholecystectomy who is requesting pain medication"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q067",
  "exam": 1,
  "src": 207,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A female client reports that she drank 1 liter of a bowel-cleansing solution and then immediately vomited 1 cup of it. How many mL of fluid intake should the nurse document? (Enter numeric value only, as a whole number.)",
  "rationale": "Convert the intake: 1 liter = 1,000 mL. Convert the emesis: 1 cup = 8 ounces = 240 mL. Subtract the amount vomited: 1,000 mL − 240 mL = 760 mL of retained intake.",
  "type": "fill",
  "answer": 760,
  "unit": "mL",
  "tolerance": 0
 },
 {
  "id": "hesi1q068",
  "exam": 1,
  "src": 333,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client's fingerstick glucose at 1630 is 274 mg/dL. The prescribed sliding scale for insulin aspart is: 150–200 mg/dL, 4 units; 201–250 mg/dL, 6 units; 251–300 mg/dL, 8 units; above 300 mg/dL, 10 units and call the provider. Which action should the nurse implement?",
  "rationale": "A glucose of 274 mg/dL falls within the 251 to 300 mg/dL range, so 8 units of rapid-acting insulin aspart are given; because aspart acts within about 15 minutes, it should be timed with the evening meal. Six units corresponds to 201 to 250 mg/dL, 10 units and a call are for values above 300 mg/dL, and holding insulin leaves hyperglycemia untreated.",
  "type": "mcq",
  "options": [
   "Administer 10 units of insulin aspart and call the provider.",
   "Administer 8 units of insulin aspart subcutaneously.",
   "Administer 6 units of insulin aspart subcutaneously.",
   "Hold the insulin and recheck the glucose in 1 hour."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q069",
  "exam": 1,
  "src": 191,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A clinical trial is recommended for a client with metastatic breast cancer, but she refuses to participate and tells her family that she does not wish to have further treatments. The client's son and daughter ask the nurse to try to convince their mother to reconsider. How should the nurse respond?",
  "rationale": "A competent client has the right to refuse treatment, and exploring her decision while offering support allows her to express her fears and quality-of-life concerns in a therapeutic way. Questioning her understanding in front of her children or persuading her to try the trial challenges her autonomy. Telling the family they must accept the decision is dismissive and closes off communication with them.",
  "type": "mcq",
  "options": [
   "Discuss the success of clinical trials and ask the client to try one for a month.",
   "Explain to the family that they must accept their mother's decision.",
   "Explore the client's decision to refuse treatment and offer support.",
   "Ask the client, with her children present, if she fully understands her decision."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q070",
  "exam": 1,
  "src": 66,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client is admitted with an epidural hematoma that resulted from a skateboarding accident. To differentiate the vascular source of the intracranial bleeding, which finding should the nurse monitor?",
  "rationale": "An epidural hematoma is usually caused by laceration of the middle meningeal artery, and arterial bleeding causes a rapid rise in intracranial pressure with a rapid decline in consciousness, often after a brief lucid interval. A gradual decline over days is typical of venous bleeding in a subdural hematoma. Clear nasal drainage (CSF rhinorrhea) and periorbital bruising suggest a basilar skull fracture rather than identify the vascular source of bleeding.",
  "type": "mcq",
  "options": [
   "Clear fluid draining from the nose",
   "Gradual decline in alertness over several days",
   "Bruising around both eyes",
   "Rapid onset of decreased level of consciousness"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q071",
  "exam": 1,
  "src": 9,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A 12-lead electrocardiogram (ECG) shows ST elevation in leads V1 to V4 for a client who reports chest pain. The healthcare provider prescribes tissue plasminogen activator (t-PA). Prior to initiating the infusion, which intervention is most important for the nurse to implement?",
  "rationale": "Fibrinolytics carry a high risk of serious bleeding, so the nurse must complete the pre-infusion checklist that screens for absolute and relative contraindications such as recent surgery, active bleeding, prior hemorrhagic stroke and uncontrolled hypertension. Troponin results should not delay reperfusion of an ST-elevation MI. Invasive procedures such as urinary catheter insertion should ideally be avoided or done before thrombolysis only if essential, and a Holter monitor is used for outpatient rhythm monitoring, not acute STEMI care.",
  "type": "mcq",
  "options": [
   "Apply a 24-hour Holter monitor.",
   "Complete the pre-infusion checklist.",
   "Insert an indwelling urinary catheter.",
   "Obtain a serum troponin level."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q072",
  "exam": 1,
  "src": 633,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is developing a teaching program for the community. Which population characteristic is most influential when choosing strategies for implementing the teaching plan?",
  "rationale": "The literacy and health literacy level of the audience determines whether materials and methods, such as written handouts, pictures, demonstrations or verbal teaching, will be understood, so it most directly shapes teaching strategies. Income, religion and population size may affect program planning and access, but they do not determine how information must be presented to be understood.",
  "type": "mcq",
  "options": [
   "Total population size",
   "Religious affiliation",
   "Average household income",
   "Literacy level"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q073",
  "exam": 1,
  "src": 647,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is planning preoperative teaching for a 12-year-old child who is scheduled for surgery. To help reduce the child's anxiety, which action is best for the nurse to implement?",
  "rationale": "School-age children cope by gathering concrete information and exploring their environment, and a tour of the unit with the family about a week ahead gives time to ask questions and process what will happen. Playing with equipment and dolls is better suited to preschoolers, and group play therapy with hospitalized children is less appropriate for preoperative preparation of an older school-age child.",
  "type": "mcq",
  "options": [
   "Provide a family tour of the preoperative unit one week before the surgery.",
   "Include the child in play therapy with children hospitalized for similar surgery.",
   "Give the child syringes and a hospital mask to play with at home beforehand.",
   "Provide a doll and equipment so the child can reenact painful procedures."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q074",
  "exam": 1,
  "src": 835,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "While a school nurse is teaching a group of 14-year-olds, one participant remarks, “You are too young to be our teacher! You're not much older than we are!” How should the nurse respond?",
  "rationale": "Calmly redirecting the group to the topic sets a limit without engaging in a power struggle or taking the comment personally. Asking about the nurse's age invites further distraction, defending qualifications is defensive, and challenging the student is confrontational and may escalate the behavior.",
  "type": "mcq",
  "options": [
   "“We need to stay focused on the topic.”",
   "“How old do you think I am?”",
   "“Do you think you could teach it any better?”",
   "“I think I am qualified to teach this group.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q075",
  "exam": 1,
  "src": 453,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "During discharge teaching, the nurse discusses weight-monitoring parameters with a client recently diagnosed with heart failure (HF). Which information is most important for the client to acknowledge?",
  "rationale": "A rapid gain of 2 to 3 pounds in a day or about 5 pounds in a week reflects fluid retention and early decompensation and should be reported so that therapy can be adjusted. Five pounds over a month or 1 pound over a week are not the thresholds that signal acute fluid retention. Weights should be taken each morning after voiding and before breakfast for consistency.",
  "type": "mcq",
  "options": [
   "Report a weight gain of 2 pounds (0.9 kg) in 24 hours.",
   "Weigh yourself each evening after the evening meal.",
   "Report a weight gain of 1 pound over one week.",
   "Report a weight gain of 5 pounds over one month."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q076",
  "exam": 1,
  "src": 479,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "Immediately after extubation, a client who has been mechanically ventilated is placed on a non-rebreather mask. The client is hoarse and complains of a sore throat. Which assessment finding should the nurse report to the healthcare provider immediately?",
  "rationale": "Stridor after extubation indicates laryngeal edema or laryngospasm narrowing the upper airway, which can rapidly progress to complete obstruction and may require racemic epinephrine, corticosteroids or reintubation. Hoarseness, sore throat and blood-tinged sputum are common after removal of the tube, wheezing indicates lower-airway bronchospasm that is treated with bronchodilators, and a saturation of 90% is monitored but is not as immediately dangerous as an obstructing upper airway.",
  "type": "mcq",
  "options": [
   "Blood-tinged sputum",
   "Upper airway stridor",
   "Oxygen saturation of 90%",
   "Expiratory wheezing"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q077",
  "exam": 1,
  "src": 329,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "After administering an antipyretic medication, which intervention should the nurse implement?",
  "rationale": "As the fever breaks, the client loses fluid through diaphoresis and increased insensible losses, so liberal fluids prevent dehydration. Extra blankets and heavy clothing trap heat and counteract the antipyretic's effect by preventing heat loss, and strict bed rest is not required for fever.",
  "type": "mcq",
  "options": [
   "Restrict the client to bed rest for 24 hours.",
   "Add extra blankets to prevent chilling.",
   "Encourage liberal fluid intake.",
   "Dress the client in warm, heavy clothing."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q078",
  "exam": 1,
  "src": 257,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Safety & Infection Control",
  "stem": "A male client's laboratory results include a platelet count of 105,000/mm3. Based on this finding, the nurse should include which action in the client's plan of care?",
  "rationale": "A platelet count below the normal 150,000 to 400,000/mm3 increases the risk of bleeding, so bleeding precautions such as using an electric razor and a soft toothbrush are included. Clustering care conserves energy for clients with anemia, contact isolation is used for transmissible organisms, and adventitious lung sounds are assessed for fluid overload or infection; none addresses thrombocytopenia.",
  "type": "mcq",
  "options": [
   "Initiate contact isolation.",
   "Encourage him to use an electric razor.",
   "Assess him for adventitious lung sounds.",
   "Cluster care to conserve energy."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q079",
  "exam": 1,
  "src": 612,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is caring for a client who had gastric bypass surgery yesterday. Which intervention is most important for the nurse to implement during the first 24 postoperative hours?",
  "rationale": "Early complications of bariatric surgery, including anastomotic leak, hemorrhage and rhabdomyolysis, can cause hypovolemia and renal compromise, and hourly urine output is a key indicator of perfusion and renal function. A nasogastric tube after gastric surgery is never irrigated or repositioned without a prescription because of risk to the anastomosis, the diet advances slowly from sips of clear liquids, and ambulation should begin much more often than every 8 hours.",
  "type": "mcq",
  "options": [
   "Begin a soft diet when bowel sounds return.",
   "Measure hourly urinary output.",
   "Ambulate the client once every 8 hours.",
   "Irrigate the nasogastric tube every 2 hours."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q080",
  "exam": 1,
  "src": 161,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with a history of bilateral adrenalectomy is admitted with a weak, irregular pulse and hypotension. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "After bilateral adrenalectomy, missed or inadequate replacement causes adrenal crisis with loss of mineralocorticoids, leading to sodium loss, dehydration, hypotension and hyperkalemia; ventricular dysrhythmias from hyperkalemia are immediately life-threatening. A sodium of 132 mEq/L and glucose of 68 mg/dL are abnormal and need correction but are not as immediately lethal, and fatigue and nausea are expected symptoms of adrenal insufficiency.",
  "type": "mcq",
  "options": [
   "Reports of fatigue and nausea",
   "Serum sodium of 132 mEq/L",
   "Blood glucose of 68 mg/dL",
   "Ventricular dysrhythmias"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q081",
  "exam": 1,
  "src": 785,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Which assessment finding indicates to the nurse that a client is ready for pulmonary function tests?",
  "rationale": "Pulmonary function testing requires the client's active effort and cooperation in breathing maneuvers, so understanding the procedure indicates readiness. A large meal restricts lung expansion, bronchodilators are usually withheld for several hours before testing unless prescribed as part of the study, and smoking within hours of the test alters the results.",
  "type": "mcq",
  "options": [
   "Used a bronchodilator inhaler 30 minutes ago",
   "Smoked a cigarette just before arriving",
   "Expresses an understanding of the procedure",
   "Ate a large breakfast 30 minutes ago"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q082",
  "exam": 1,
  "src": 605,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "While auscultating a client's lungs, the nurse hears high-pitched, brief, discontinuous popping sounds at the end of inspiration in the lung bases that do not clear with coughing. Which description should the nurse use to document this sound?",
  "rationale": "Fine crackles are short, high-pitched popping sounds heard at the end of inspiration as collapsed alveoli and small airways snap open, often from fluid as in heart failure or pneumonia. Wheezes are continuous musical sounds from narrowed airways, rhonchi are low-pitched snoring sounds that often clear with coughing, and stridor is a harsh, high-pitched inspiratory sound from upper-airway obstruction.",
  "type": "mcq",
  "options": [
   "High-pitched wheeze",
   "Stridor",
   "Rhonchi",
   "High-pitched or fine crackles"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q083",
  "exam": 1,
  "src": 40,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A client diagnosed with bipolar disorder is going home on a weekend pass. Which suggestion should the nurse give the client's family to help them prepare for the visit?",
  "rationale": "A predictable environment with the client's usual routines supports stability and lets the family evaluate how the client functions at home. Filling every day with planned activities and hosting a welcome-home party are overstimulating and could trigger manic symptoms. Monitoring television choices is controlling, undermines the client's autonomy and does not address relapse prevention.",
  "type": "mcq",
  "options": [
   "Instruct the family to monitor the client's choice of television programs",
   "Encourage the family to plan daily activities to keep the client busy",
   "Discuss the importance of continuing the usual at-home activities",
   "Have friends and family visit the client at a welcome home party"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q084",
  "exam": 1,
  "src": 544,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The home care nurse provides self-care instructions for a client with chronic venous insufficiency caused by deep vein thrombosis. Which instructions should the nurse include in the client's discharge teaching plan? (Select all that apply.)",
  "rationale": "Avoiding prolonged standing or sitting, elevating the legs with a recliner and wearing compression stockings all reduce venous pooling and promote venous return in chronic venous insufficiency. The foot of the bed should be elevated rather than flat to aid drainage, and crossing the legs at the knees or ankles compresses the veins and impedes venous flow.",
  "type": "sata",
  "options": [
   "Keep the bed flat while sleeping.",
   "Cross the legs at the knees but not at the ankles.",
   "Use a recliner for long periods of sitting.",
   "Continue wearing elastic compression stockings.",
   "Avoid prolonged standing or sitting."
  ],
  "correct": [
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi1q085",
  "exam": 1,
  "src": 691,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse notes that a depressed female client has become more withdrawn and noncommunicative over the past two weeks. Which intervention is most important to include in the updated plan of care?",
  "rationale": "Consistent, brief attempts to engage the client in conversation about nonthreatening topics convey acceptance and can gradually reduce isolation; increasing withdrawal also warrants ongoing assessment of suicide risk. More family visits may not be effective or desired, the nurse can address withdrawal directly rather than relying on a social worker, and group activities are too demanding for a client who is severely withdrawn.",
  "type": "mcq",
  "options": [
   "Encourage the client's family to visit more often.",
   "Schedule a daily conference with the social worker.",
   "Engage the client in a nonthreatening conversation.",
   "Encourage the client to participate in group activities."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q086",
  "exam": 1,
  "src": 695,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse observes a newly hired unlicensed assistive personnel (UAP) preparing to perform a fingerstick to obtain a client's blood glucose. Before sticking the client's finger, the UAP explains the procedure and tells the client that it is painless. Which action should the nurse take?",
  "rationale": "The UAP is performing the task correctly, and the inaccurate statement does not threaten the client's safety, so the nurse allows the procedure to proceed and then provides private feedback about giving honest information. Correcting the UAP in front of the client is embarrassing and undermines trust, taking over is unnecessary, and contradicting the UAP in front of the client increases anxiety.",
  "type": "mcq",
  "options": [
   "Allow the UAP to complete the procedure, then discuss the “painless” comment privately.",
   "Take over the procedure and perform the fingerstick for the UAP.",
   "Tell the client that the fingerstick will actually be painful.",
   "Stop the UAP and correct the statement in front of the client immediately."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q087",
  "exam": 1,
  "src": 404,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "An older female client who ambulates with a quad cane prefers to use a wheelchair because her gait is halting and unsteady at times. Which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "Keeping items within reach, placing the bed in its lowest position, teaching the client to call for help and offering scheduled toileting all reduce the circumstances in which a client with an unsteady gait gets up alone and falls. Relying on the wheelchair promotes deconditioning and loss of mobility, and raising all four rails is a restraint that increases injury if the client climbs over them.",
  "type": "sata",
  "options": [
   "Move personal items within the client's reach.",
   "Give directions to call for assistance.",
   "Encourage the client to use the wheelchair at all times.",
   "Lower the bed to the lowest possible position.",
   "Raise all bed rails when the client is resting.",
   "Assist the client to the bathroom every 2 hours."
  ],
  "correct": [
   0,
   1,
   3,
   5
  ]
 },
 {
  "id": "hesi1q088",
  "exam": 1,
  "src": 775,
  "topic": "Renal & GU",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "When preparing a client for discharge after a cystectomy and urinary diversion to treat bladder cancer, which instruction is most important for the nurse to include in the discharge teaching plan?",
  "rationale": "Clients with a urinary diversion are at risk for urinary tract infection and pyelonephritis, so cloudy, foul-smelling urine, fever or flank pain should be reported; mucus threads are expected with an ileal conduit. Fluids are encouraged, about 2 to 3 liters daily, to flush the system, the appliance is changed every few days rather than daily, and urine drains continuously, including overnight, usually into a bedside bag.",
  "type": "mcq",
  "options": [
   "Restrict fluid intake to 1 liter per day.",
   "Report any signs of cloudy urine output.",
   "Change the urostomy appliance every day.",
   "Expect no urine output from the stoma at night."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q089",
  "exam": 1,
  "src": 108,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client newly diagnosed with type 2 diabetes mellitus (DM) receives a prescription for metformin 500 mg PO twice daily. Which information should the nurse include in this client's teaching plan? (Select all that apply.)",
  "rationale": "Clients should recognize hypoglycemia, which can occur when meals are skipped or other glucose-lowering agents are added, and should report persistent polyuria because it signals uncontrolled hyperglycemia. Metformin is taken with meals to reduce gastrointestinal upset. Metformin is weight-neutral or promotes modest weight loss rather than weight gain. Doses should not be skipped based on a single normal reading, and taking it on an empty stomach at bedtime increases GI effects.",
  "type": "sata",
  "options": [
   "Expect to gain weight as the medication takes effect.",
   "Recognize the signs and symptoms of hypoglycemia.",
   "Take metformin with the morning and evening meals.",
   "Report persistent polyuria to the healthcare provider.",
   "Skip the dose on days when the blood glucose is normal.",
   "Take the medication at bedtime on an empty stomach."
  ],
  "correct": [
   1,
   2,
   3
  ]
 },
 {
  "id": "hesi1q090",
  "exam": 1,
  "src": 243,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client who was hit by a car while dodging traffic is admitted to the emergency department with increased intracranial pressure (ICP). A computed tomography (CT) scan reveals an intracranial bleed. After evacuation of the hematoma, postoperative prescriptions include intubation with controlled mechanical ventilation to maintain the PaCO2 at 30 to 35 mm Hg. What is the pathophysiologic basis for this ventilator setting?",
  "rationale": "Carbon dioxide is a potent cerebral vasodilator, so maintaining a low-normal PaCO2 causes cerebral vasoconstriction, decreases cerebral blood volume and lowers ICP; excessive hyperventilation is avoided because it can cause cerebral ischemia. Hypercapnia dilates cerebral vessels and raises ICP. Oxygen levels and CSF production are not the mechanism targeted by this setting.",
  "type": "mcq",
  "options": [
   "Hyperoxia lowers cerebral blood flow.",
   "Alkalosis decreases CSF production.",
   "Hypercapnia improves cerebral perfusion.",
   "Hypocapnia reduces ICP."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q091",
  "exam": 1,
  "src": 51,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client in the intensive care unit is being mechanically ventilated, has an indwelling urinary catheter in place, and is exhibiting signs of restlessness. Which action should the nurse take first?",
  "rationale": "Restlessness is an early sign of hypoxia, so in a ventilated client the nurse first assesses airway and breathing by auscultating bilateral breath sounds to detect tube displacement, secretions or pneumothorax. An obstructed catheter with bladder distention can cause restlessness, and the cardiac rhythm should be reviewed, but airway and oxygenation take priority. Sedating the client before identifying the cause could mask hypoxia.",
  "type": "mcq",
  "options": [
   "Auscultate bilateral breath sounds",
   "Review the heart rhythm on the cardiac monitor",
   "Give a PRN dose of lorazepam",
   "Check the urinary catheter for obstruction"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q092",
  "exam": 1,
  "src": 505,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "One day after a total knee replacement, a male client tells the nurse that he is unable to transfer because it is too painful. Which action should the nurse implement?",
  "rationale": "Early mobilization after knee replacement prevents complications such as DVT and stiffness, and premedicating about 30 minutes before activity allows the client to participate. Remaining in bed increases complications, heat is not used on a fresh surgical joint because it increases swelling and bleeding, and insisting he move through severe pain without addressing it is not therapeutic.",
  "type": "mcq",
  "options": [
   "Explain that he must move despite the pain to prevent clots.",
   "Allow the client to remain in bed until the pain subsides.",
   "Encourage the use of analgesics before position changes.",
   "Apply a heating pad to the knee before each transfer."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q093",
  "exam": 1,
  "src": 197,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A female client is admitted for a diabetic crisis resulting from inadequate dietary practices. After stabilization, the nurse talks to the client about her prescribed diet. Which client characteristic is most important for successful adherence to the diabetic diet?",
  "rationale": "Long-term adherence depends primarily on the client's own motivation and willingness to follow the diet consistently. Knowing insulin timing is useful but does not ensure dietary adherence, and the timing depends on the type of insulin. Eating fruit between meals can raise glucose if carbohydrates are not counted, and relying on another person to manage the diet does not promote self-management.",
  "type": "mcq",
  "options": [
   "Frequently eats fruits and vegetables at and between meals",
   "Has someone available who can prepare and oversee the diet",
   "Demonstrates willingness to adhere to the diet consistently",
   "Knows that insulin must be given 30 minutes before eating"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q094",
  "exam": 1,
  "src": 406,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An older male client arrives at the clinic complaining that his bladder always feels full. He reports weak urine flow, frequent dribbling after voiding, increasing nocturia, and difficulty initiating his urine stream. Which action should the nurse implement?",
  "rationale": "These lower urinary tract symptoms are classic for benign prostatic hyperplasia obstructing urine outflow, and the sensation of a full bladder suggests urinary retention, so the nurse palpates for bladder distention to assess the immediate problem. A culture, voiding diary and hygiene teaching may follow, but they do not assess the retention.",
  "type": "mcq",
  "options": [
   "Teach the client an effective technique to cleanse the glans penis.",
   "Palpate the client's suprapubic area for distention.",
   "Advise the client to keep a voiding diary for one week.",
   "Obtain a urine specimen for culture and sensitivity."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q095",
  "exam": 1,
  "src": 228,
  "topic": "Cardiovascular",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A male client is discharged from the intensive care unit following a myocardial infarction, and the healthcare provider prescribes a low-sodium diet. Which lunch selection indicates to the nurse that this client understands the dietary restriction?",
  "rationale": "A sandwich made with fresh turkey is the lowest-sodium choice. Canned soups such as clam chowder, processed cheese dishes such as macaroni and cheese, and cured meats such as bacon are all high in sodium.",
  "type": "mcq",
  "options": [
   "Clam chowder",
   "Macaroni and cheese",
   "Turkey salad sandwich",
   "Bacon, lettuce, and tomato sandwich"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q096",
  "exam": 1,
  "src": 132,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with a peripherally inserted central catheter (PICC) has a fever. Which client assessment is most important for the nurse to perform?",
  "rationale": "A PICC is typically inserted in a vein above or near the antecubital fossa, and a central line is a common source of bloodstream infection, so the insertion site should be inspected for redness, swelling, tenderness and drainage first. Lung, abdominal and urinary sources of fever are also assessed, but the indwelling central catheter is the most likely and most dangerous source.",
  "type": "mcq",
  "options": [
   "Inspect the client's urine for cloudiness.",
   "Observe the antecubital fossa for inflammation.",
   "Palpate the abdomen for areas of tenderness.",
   "Auscultate breath sounds in all lung lobes."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q097",
  "exam": 1,
  "src": 554,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The mother of a child with cerebral palsy (CP) asks the nurse whether her child's impaired movements will worsen as the child grows. Which response provides the best explanation?",
  "rationale": "Cerebral palsy results from a nonprogressive injury to the developing brain, so the lesion itself does not worsen, although the clinical picture may change with growth, development and secondary problems such as contractures. Telling her the disease will steadily worsen or that therapy will restore normal movement is inaccurate, and CP is not caused by an ongoing infection.",
  "type": "mcq",
  "options": [
   "“The brain damage in CP is not progressive, but the course can vary as your child grows.”",
   "“Your child's movements will return to normal with enough physical therapy.”",
   "“CP is caused by a progressive infection that will continue to damage the brain.”",
   "“The movement problems will steadily get worse as your child gets older.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q098",
  "exam": 1,
  "src": 826,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "While monitoring a client during a seizure, which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "During a seizure the nurse protects the client from injury by clearing the area, maintains the airway by turning the client to the side, and observes and documents the movements, progression and duration, which help classify the seizure and identify status epilepticus. Nothing is forced into the mouth during a seizure because it can cause injury, and restraining the client can cause fractures and soft-tissue damage.",
  "type": "sata",
  "options": [
   "Insert an oral airway during the seizure.",
   "Move obstacles away from the client.",
   "Observe for a patent airway.",
   "Monitor the client's physical movements.",
   "Record the duration of the seizure.",
   "Restrain the client's arms and legs."
  ],
  "correct": [
   1,
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi1q099",
  "exam": 1,
  "src": 425,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Artificial rupture of the membranes for a laboring client reveals meconium-stained amniotic fluid. Which action is the priority?",
  "rationale": "Meconium-stained fluid increases the risk of meconium aspiration syndrome, so a team skilled in neonatal resuscitation and equipment for suctioning and ventilation must be ready at birth; current neonatal resuscitation guidelines direct suctioning only for an infant who is not vigorous or has an obstructed airway. Meconium alone does not require a cesarean birth, pushing before full dilation is inappropriate, and fetal monitoring should continue closely.",
  "type": "mcq",
  "options": [
   "Have neonatal resuscitation equipment, including a meconium aspirator, available at birth.",
   "Prepare the client for an immediate cesarean birth.",
   "Instruct the client to begin pushing to hasten the birth.",
   "Discontinue continuous electronic fetal monitoring."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q100",
  "exam": 1,
  "src": 494,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Physiological Adaptation",
  "stem": "In early septic shock, what is the primary cause of hypotension?",
  "rationale": "In septic shock, bacterial toxins and inflammatory mediators cause massive peripheral vasodilation and increased capillary permeability, leading to relative hypovolemia and low systemic vascular resistance (distributive shock). Vasoconstriction is a compensatory response in hypovolemic and cardiogenic shock, myocardial depression occurs later in sepsis, and a vagal response is not the mechanism.",
  "type": "mcq",
  "options": [
   "Peripheral vasodilation",
   "Peripheral vasoconstriction",
   "Cardiac failure",
   "A vagal response"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q101",
  "exam": 1,
  "src": 535,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes an IV solution of isoproterenol 1 mg in 250 mL of D5W at 300 mcg/hour. How many mL/hour should the nurse program the infusion pump to deliver? (Enter numeric value only.)",
  "rationale": "Convert to micrograms: 1 mg = 1,000 mcg, so the concentration is 1,000 mcg ÷ 250 mL = 4 mcg/mL. Rate: 300 mcg/hour ÷ 4 mcg/mL = 75 mL/hour (D/H × Q = 300 ÷ 1,000 × 250 = 75).",
  "type": "fill",
  "answer": 75,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi1q102",
  "exam": 1,
  "src": 227,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A male client is admitted with burns to his face and neck. In which position should the nurse place the client to prevent contractures?",
  "rationale": "Burned tissue contracts toward the position of comfort, which for the neck is flexion, so the neck is kept in slight hyperextension with a towel roll under the shoulders and no pillow under the head to prevent flexion contractures. Positions with pillows under the head or the chin turned toward the chest promote the flexion deformity that positioning is intended to prevent.",
  "type": "mcq",
  "options": [
   "Neck hyperextended and supported by a rolled towel",
   "Head turned to the side with the chin toward the chest",
   "Neck flexed with the head supported on two pillows",
   "Head of bed flat with a pillow under the head"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q103",
  "exam": 1,
  "src": 253,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A male client with impaired renal function who takes ibuprofen daily for chronic arthritis is admitted with gastrointestinal (GI) bleeding. After IV fluids and a blood transfusion, his blood pressure is 100/70 mm Hg and his urine output is 20 mL/hour. Which intervention should the nurse include in this client's plan of care?",
  "rationale": "Hypotension from blood loss, preexisting renal impairment and NSAID use place the client at high risk for acute kidney injury, and urine output of 20 mL/hour is oliguric, so serial BUN, creatinine and electrolytes are evaluated to detect worsening renal function. Ibuprofen is nephrotoxic and caused the GI bleed, so it should not be resumed. Fluid status is assessed with daily, not weekly, weights, and restricting fluids is not indicated when oliguria may be prerenal.",
  "type": "mcq",
  "options": [
   "Resume the daily ibuprofen once the bleeding has been controlled.",
   "Restrict all oral fluids until the urine output exceeds 30 mL/hour.",
   "Evaluate daily serial renal laboratory studies for progressive elevations.",
   "Weigh the client once weekly to monitor his fluid status."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q104",
  "exam": 1,
  "src": 407,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "An older male client is admitted with a possible stroke (CVA). He has facial paralysis and cannot move his left side. When the nurse enters the room, the client's wife is tearful and trying unsuccessfully to give him a drink of water. Which action should the nurse take?",
  "rationale": "Facial paralysis after a stroke often accompanies dysphagia, and giving fluids before swallowing is evaluated risks aspiration pneumonia, so the nurse stops the attempt and assesses the swallow (the client remains NPO until a formal swallow screen). Assisting with the cup or providing a straw continues an unsafe practice, and tilting the head back opens the airway and increases aspiration risk; a chin-tuck position is used.",
  "type": "mcq",
  "options": [
   "Offer the client a straw to make drinking easier.",
   "Help the wife hold the cup while the client sips slowly.",
   "Ask the wife to stop and assess the client's swallowing reflex.",
   "Tell the wife to tilt the client's head back as he drinks."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q105",
  "exam": 1,
  "src": 659,
  "topic": "Neuro & Sensory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is preparing an older client for discharge after cataract extraction. Which instruction should be included in the discharge teaching?",
  "rationale": "Straining, bending over and heavy lifting raise intraocular pressure and stress the surgical incision, so they are avoided during healing. Reading is permitted and lighting needs are individual, eye irrigation is not routinely part of postoperative care, and sunglasses are recommended to reduce glare rather than strict limits on sunlight.",
  "type": "mcq",
  "options": [
   "Irrigate the conjunctiva with saline before instilling the antibiotic ointment.",
   "Do not read without direct lighting for 6 weeks.",
   "Limit exposure to sunlight during the first 2 weeks only.",
   "Avoid straining at stool, bending, or lifting heavy objects."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q106",
  "exam": 1,
  "src": 311,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A young adult female client with recurrent pelvic pain for 3 years returns to the clinic for relief of severe dysmenorrhea. Her medical record indicates that she has endometriosis. Based on this finding, which information should the nurse provide this client?",
  "rationale": "Laparoscopy is the definitive way to diagnose and stage endometriosis, and lesions can be excised or ablated during the same procedure to relieve pain. Oral contraceptives suppress ovulation and endometrial growth and are a first-line treatment that reduces symptoms. Because the tissue is estrogen-dependent, symptoms typically decrease after menopause, and removing lesions improves fertility in some clients but does not guarantee success.",
  "type": "mcq",
  "options": [
   "The symptoms of endometriosis usually increase with menopause.",
   "Oral contraceptives increase the symptoms of endometriosis.",
   "Laparoscopy is an option that can diagnose the extent of the disease and provide treatment.",
   "Infertility is always successfully treated by removing intra-abdominal lesions."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q107",
  "exam": 1,
  "src": 6,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A 7-year-old boy is brought to the clinic because of facial edema. He reports voiding small amounts of dark, cloudy, tea-colored urine. The parents state that their son had a sore throat 2 weeks earlier, but it has resolved. After assessing the child's vital signs and weight, which intervention should the nurse implement next?",
  "rationale": "Facial edema and tea-colored urine following a streptococcal throat infection suggest acute post-streptococcal glomerulonephritis, and a urinalysis showing hematuria, proteinuria and casts is the key diagnostic step. Abdominal girth is monitored when ascites is suspected, as in nephrotic syndrome, and is not the next priority. An otoscopic examination does not evaluate the renal findings, and serum electrolytes may be ordered later but the urine specimen most directly confirms the suspected diagnosis.",
  "type": "mcq",
  "options": [
   "Measure the child's abdominal girth",
   "Perform an otoscopic examination",
   "Obtain a blood specimen for serum electrolytes",
   "Collect a urine specimen for routine urinalysis"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q108",
  "exam": 1,
  "src": 572,
  "topic": "Neuro & Sensory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse determines that a client's pupils constrict as the client changes focus from a distant object to a near object. Which documentation should the nurse enter about this finding?",
  "rationale": "Accommodation is the constriction of the pupils and convergence of the eyes as focus shifts from a far object to a near one, documented as the “A” in PERRLA. Reaction to light is tested with a penlight, the consensual reflex is constriction of the opposite pupil when light is shone in one eye, and “equal and round” describes size and shape rather than this response.",
  "type": "mcq",
  "options": [
   "Pupils reactive to light",
   "Pupils reactive to accommodation",
   "Pupils equal and round",
   "Consensual pupillary reflex present"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q109",
  "exam": 1,
  "src": 0,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A 2-year-old girl is brought to the clinic for a routine assessment, and all findings are within normal limits. The mother expresses concern about her daughter's protruding abdomen and tells the nurse she is worried that her child is becoming overweight. How should the nurse respond to the mother's comment?",
  "rationale": "Toddlers normally have a pot-bellied appearance because their abdominal muscles are not yet fully developed and the lumbar lordosis is still pronounced; it flattens as the child grows and becomes more active. Because all findings are within normal limits, reassurance and teaching are appropriate. Skim milk is not recommended before age 2 and fat remains important for brain development, cutting snacks is unnecessary when growth is normal, and a weight-management referral would treat a normal developmental finding as a problem.",
  "type": "mcq",
  "options": [
   "Recommend switching the child to skim milk to limit calories",
   "Suggest reducing the number of snacks offered each day",
   "Refer the child to a dietitian for a weight-management plan",
   "Explain that a protruding abdomen is typical for toddlers"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q110",
  "exam": 1,
  "src": 241,
  "topic": "Cardiovascular",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A male client admitted with an acute myocardial infarction receives a sodium-restricted cardiac diet and complains that his hamburger is flavorless. Which condiment should the nurse offer?",
  "rationale": "Fresh horseradish adds flavor with very little sodium, as do herbs, spices, lemon and garlic. Ketchup, soy sauce and pickle relish are high-sodium condiments that should be limited on a sodium-restricted diet.",
  "type": "mcq",
  "options": [
   "Ketchup",
   "Dill pickle relish",
   "Soy sauce",
   "Fresh horseradish"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q111",
  "exam": 1,
  "src": 639,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is explaining the need to reduce salt intake to a client with primary hypertension. Which explanation should the nurse provide?",
  "rationale": "Excess sodium causes the kidneys to retain sodium and water, expanding the blood volume and raising blood pressure, which is the main reason salt restriction lowers blood pressure in primary hypertension. Salt does not directly damage the vessel lining, cause immediate vasoconstriction or produce vascular inflammation as its primary mechanism.",
  "type": "mcq",
  "options": [
   "Excessive salt causes the blood vessels to constrict immediately.",
   "Salt causes inflammation inside the blood vessels.",
   "High salt intake directly damages the lining of the blood vessels.",
   "Too much salt can cause the kidneys to retain fluid."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q112",
  "exam": 1,
  "src": 182,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with rheumatoid arthritis (RA) starts a new prescription for etanercept subcutaneously once weekly. The nurse should emphasize the importance of reporting which problem to the healthcare provider?",
  "rationale": "Etanercept is a tumor necrosis factor inhibitor that suppresses immune and inflammatory responses, increasing the risk of serious infections, including reactivation of tuberculosis, so a persistent fever or other signs of infection must be reported. Headache is a minor adverse effect, joint stiffness is a symptom of the RA being treated, and increased hunger and thirst suggest hyperglycemia, which is associated with corticosteroids rather than etanercept.",
  "type": "mcq",
  "options": [
   "Increased hunger and thirst",
   "Persistent fever",
   "Joint stiffness",
   "Headache"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q113",
  "exam": 1,
  "src": 576,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse enters a client's room and observes the unlicensed assistive personnel (UAP) making an occupied bed. The client is turned on the side facing the far edge of the bed, where the side rail is down and no one is standing. Which action should the nurse take first?",
  "rationale": "While an occupied bed is made, the client is turned toward a raised side rail on the side opposite the caregiver, so a lowered rail with no one present creates an immediate fall risk, and the rail must be raised at once. Waiting until the bed is finished leaves the client unprotected, asking the client to hold the mattress is unsafe, and lowering the head of the bed does not prevent a fall.",
  "type": "mcq",
  "options": [
   "Lower the head of the bed to a flat position.",
   "Place the side rails in the up position.",
   "Tell the UAP to finish the bed and then raise the rails.",
   "Ask the client to hold onto the edge of the mattress."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q114",
  "exam": 1,
  "src": 361,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult female client is admitted to the psychiatric unit because of a complex handwashing ritual that takes two hours or longer to complete each day. She worries about staying clean and refuses to sit on any of the chairs in the day area. This client's handwashing is an example of which clinical behavior?",
  "rationale": "A compulsion is a repetitive behavior, such as handwashing, performed to reduce the anxiety caused by an obsession. Her persistent worry about contamination is the obsession, a recurrent intrusive thought, whereas the washing is the behavior. A phobia is an irrational fear of a specific object or situation, and addiction involves compulsive substance use or behavior with loss of control and tolerance.",
  "type": "mcq",
  "options": [
   "Phobia",
   "Compulsion",
   "Obsession",
   "Addiction"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q115",
  "exam": 1,
  "src": 139,
  "topic": "Renal & GU",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with acute kidney injury (acute renal failure) is admitted for uncontrolled type 1 diabetes mellitus and hyperkalemia. The nurse administers an IV dose of regular insulin per sliding scale. Which intervention is most important for the nurse to include in this client's plan of care?",
  "rationale": "Insulin drives potassium into the cells, but kidney injury prevents potassium excretion, so potassium levels may shift unpredictably; both hyperkalemia and rebound hypokalemia cause lethal dysrhythmias, making cardiac monitoring the priority. IV access, glucose checks and urine output monitoring are important interventions, but they do not have the priority of detecting dysrhythmias.",
  "type": "mcq",
  "options": [
   "Assess glucose by fingerstick every 4 to 6 hours.",
   "Monitor the client's cardiac activity via telemetry.",
   "Maintain venous access with an infusion of normal saline.",
   "Evaluate hourly urine output for return of normal renal function."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi1q116",
  "exam": 1,
  "src": 496,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "When making client care assignments, which client is best to assign to the practical nurse (PN) working on the unit with the RN?",
  "rationale": "A client receiving scheduled subcutaneous low-molecular-weight heparin is stable with predictable care that is within the PN's scope. A continuous heparin infusion requiring titration and the transition from heparin to warfarin require RN assessment of coagulation values, and an INR of 5 places the client at high risk for bleeding, requiring RN assessment and intervention.",
  "type": "mcq",
  "options": [
   "A client receiving a continuous heparin infusion who gets out of bed twice daily",
   "An ambulatory client receiving warfarin who has an INR of 5",
   "A client being titrated off a heparin infusion and started on oral warfarin",
   "An immobile client receiving low-molecular-weight heparin every 12 hours"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q117",
  "exam": 1,
  "src": 334,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "After diagnosis and initial treatment of a 3-year-old with cystic fibrosis, the nurse provides home care instructions to the mother. Which statement by the mother indicates that she understands home care to promote pulmonary function?",
  "rationale": "Chest physiotherapy loosens thick secretions and is done at least twice daily, usually after a bronchodilator and before meals, because performing it after eating can cause vomiting and aspiration. Cough suppressants prevent clearance of mucus, and children with CF need generous fluids to keep secretions thin.",
  "type": "mcq",
  "options": [
   "“Chest physiotherapy should be performed twice a day before meals.”",
   "“Chest physiotherapy should be performed right after each meal.”",
   "“I will limit my child's fluids to keep the secretions from increasing.”",
   "“I will give a cough suppressant at bedtime so my child can rest.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q118",
  "exam": 1,
  "src": 741,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "What explanation is best for the nurse to provide to a client who asks the purpose of the log-rolling technique for turning?",
  "rationale": "Log-rolling turns the head, shoulders, trunk and hips as a single unit to keep the spine in straight alignment, preventing twisting that could injure the spinal cord after spinal injury or surgery. Reducing staff injury, using several caregivers and preventing shearing are benefits of proper turning, but they are not the primary purpose of log-rolling.",
  "type": "mcq",
  "options": [
   "Working together decreases the risk of back injury to staff.",
   "Using two or three people increases client safety.",
   "The technique is intended to maintain straight spinal alignment.",
   "Turning instead of pulling reduces the likelihood of skin damage."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q119",
  "exam": 1,
  "src": 335,
  "topic": "Mental Health",
  "clientNeed": "Physiological Adaptation",
  "stem": "After multiple attempts to stop drinking, an adult male is admitted to the medical intensive care unit with delirium tremens. He is tachycardic, diaphoretic, restless, and disoriented. Which finding indicates a life-threatening condition?",
  "rationale": "Widening QRS complexes and flattened P waves are ECG signs of hyperkalemia, which can deteriorate rapidly into ventricular fibrillation or asystole and is immediately life-threatening. A high CIWA-Ar score, severe tremor and tactile or visual hallucinations are expected features of delirium tremens that are treated aggressively with benzodiazepines but do not by themselves signal imminent cardiac arrest.",
  "type": "mcq",
  "options": [
   "Widening QRS complexes and flattened P waves",
   "Intense tremor and involuntary muscle activity",
   "CIWA-Ar alcohol withdrawal score of 30",
   "Report of hallucinations involving insects"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q120",
  "exam": 1,
  "src": 137,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A client with a traumatic brain injury becomes progressively less responsive to stimuli. The client has a do-not-resuscitate (DNR) prescription, and the nurse observes that the unlicensed assistive personnel (UAP) has stopped turning the client from side to side as previously scheduled. Which action should the nurse take?",
  "rationale": "A DNR prescription means only that cardiopulmonary resuscitation will not be performed; all other care, including turning to prevent pressure injuries and maintain comfort, continues. Repositioning is itself a comfort and safety measure, so the UAP should resume the schedule. The nurse does not need to take over total care, and turning is within the UAP's scope without assigning another nurse.",
  "type": "mcq",
  "options": [
   "Advise the UAP to resume positioning the client on schedule.",
   "Assume total care of the client to monitor neurologic function.",
   "Assign a practical nurse to assist the UAP in turning the client.",
   "Encourage the UAP to provide comfort care measures only."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q121",
  "exam": 1,
  "src": 795,
  "topic": "Neuro & Sensory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which instruction is most important for the nurse to provide a client who is being discharged after treatment for Guillain-Barré syndrome?",
  "rationale": "Guillain-Barré syndrome is often triggered by a preceding infection, and a respiratory infection can lead to relapse and respiratory compromise in a client whose respiratory muscles may still be weak, so avoiding infections is the most important safety instruction. Relaxation, rest periods and continued physical therapy support recovery but are not as critical.",
  "type": "mcq",
  "options": [
   "Continue physical therapy at home.",
   "Plan short, frequent rest periods.",
   "Avoid exposure to respiratory infections.",
   "Use relaxation exercises when anxious."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q122",
  "exam": 1,
  "src": 517,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The charge nurse is planning for the shift and has a registered nurse (RN) and a practical nurse (PN) on the team. Which client should the charge nurse assign to the RN?",
  "rationale": "A client with active suicidal ideation requires ongoing suicide risk assessment, therapeutic communication and safety planning, which are RN responsibilities. A stable postoperative hip replacement client, a client with renal calculi requiring urine straining and an adolescent with contusions have predictable needs that the PN can meet with RN supervision.",
  "type": "mcq",
  "options": [
   "A 30-year-old depressed client who admits to suicidal ideation",
   "An adolescent with multiple contusions from a fall 2 days ago",
   "A 75-year-old client with renal calculi who requires urine straining",
   "A 64-year-old client who had a total hip replacement the previous day"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q123",
  "exam": 1,
  "src": 259,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A male Korean-American client looks away when asked by the nurse to describe his problem. What is the best initial nursing action?",
  "rationale": "In many Asian cultures, avoiding direct eye contact is a sign of respect and a period of silence before answering is normal, so the nurse should allow time for the client to respond. There is no indication of a language barrier requiring an interpreter, and repeating the question slowly may seem condescending. Insisting on direct eye contact disregards the client's cultural norms.",
  "type": "mcq",
  "options": [
   "Ask social services to find a Korean interpreter.",
   "Establish direct eye contact with the client.",
   "Allow several minutes for the client to respond.",
   "Repeat the question slowly and distinctly."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q124",
  "exam": 1,
  "src": 462,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "Following a measles outbreak involving 5 students in an elementary school, which action is most important for the school nurse to take?",
  "rationale": "Measles is highly contagious by the airborne route, and excluding susceptible, unvaccinated children is the most important immediate step to protect them and stop transmission. Reviewing records identifies which children are unvaccinated, and the outbreak is reported to the local health department rather than to every community organization; vaccination clinics are helpful but take time to confer protection.",
  "type": "mcq",
  "options": [
   "Report the outbreak to all community health organizations in the area.",
   "Review the immunization records of all children in the elementary school.",
   "Schedule a mobile public health vehicle to offer measles vaccinations.",
   "Restrict unvaccinated children from attending school until the outbreak is resolved."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q125",
  "exam": 1,
  "src": 219,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A healthcare provider continuously dismisses the nursing care suggestions made by staff nurses. As a result, the staff nurses have become frustrated and avoid dealing with the healthcare provider. Which action should the nurse manager implement?",
  "rationale": "An interdisciplinary meeting focused on client care brings the provider and nurses together to improve collaboration and communication, which addresses the conflict directly and constructively. Reporting the provider to the licensing board is not warranted for a communication problem. Silencing the nurses compromises client advocacy, and limiting communication to writing avoids the conflict and can delay care.",
  "type": "mcq",
  "options": [
   "Instruct the staff nurses to follow the provider's prescriptions without comment.",
   "Report the healthcare provider's behavior to the state medical licensing board.",
   "Advise the staff to limit all contact with the provider to written communication.",
   "Plan an interdisciplinary staff meeting to develop strategies to enhance client care."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q126",
  "exam": 1,
  "src": 745,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "What is the priority nursing action when initiating morphine therapy through an intravenous patient-controlled analgesia (PCA) pump?",
  "rationale": "The lockout interval and dose limits are the PCA's safety features that prevent the client from receiving an overdose, so programming them correctly, and having the settings independently double-checked, is the priority when starting therapy. Teaching the client to medicate before pain becomes severe, assessing bowel sounds and assessing pain-scale use are all appropriate but do not prevent life-threatening respiratory depression.",
  "type": "mcq",
  "options": [
   "Initiate the dosage lockout mechanism on the PCA pump.",
   "Assess the abdomen for bowel sounds.",
   "Instruct the client to use the medication before pain becomes severe.",
   "Assess the client's ability to use a numeric pain scale."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q127",
  "exam": 1,
  "src": 208,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A female client admitted to the mental health unit for opiate dependency is receiving clonidine 0.1 mg PO for withdrawal symptoms. The client complains of feeling nervous and says that her bones are itching. Which finding should the nurse identify as a contraindication to administering the medication?",
  "rationale": "Clonidine is a centrally acting alpha-2 agonist that reduces the sympathetic symptoms of opioid withdrawal, but its main adverse effect is hypotension, so a blood pressure of 90/76 mm Hg is a reason to hold the dose and notify the provider. A heart rate of 92, nervousness and the sensation of bone itching or aching are withdrawal symptoms that clonidine is intended to treat.",
  "type": "mcq",
  "options": [
   "Blood pressure of 90/76 mm Hg",
   "Complaints of feeling nervous",
   "Report that her bones are itching",
   "Heart rate of 92 beats/minute"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi1q128",
  "exam": 1,
  "src": 436,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "Before preparing a client for the first surgical case of the day, a part-time scrub nurse asks the circulating nurse whether a 3-minute surgical hand scrub is adequate. Which response should the circulating nurse provide?",
  "rationale": "Surgical hand antisepsis must follow facility policy and the antiseptic manufacturer's instructions, and a 5-minute scrub is the commonly required duration for the first scrub of the day, when the hands carry the greatest bacterial load. Three minutes is too short for the first case under this standard, a 10-minute scrub is no more effective and damages the skin, and a waterless surgical rub is used only according to protocol after initial handwashing.",
  "type": "mcq",
  "options": [
   "Tell the nurse that a 3-minute scrub is adequate for any surgical case.",
   "Advise the nurse that a 10-minute scrub is required for the first case.",
   "Explain that an alcohol hand rub alone can replace the first scrub.",
   "Direct the nurse to continue the surgical hand scrub for a 5-minute duration."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi1q129",
  "exam": 1,
  "src": 372,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "An adult male who lives alone is brought to the emergency department unresponsive by his daughter. Initial assessment shows minimal respiratory effort and fixed, dilated pupils. At the daughter's request, the client is intubated and placed on a ventilator. Which nursing intervention has the highest priority?",
  "rationale": "The client's own wishes about life-sustaining treatment guide all further care, and a living will may indicate whether he would want mechanical ventilation, so determining whether one exists is the priority. Brain-death teaching is premature, and a catheter and blood gases are routine interventions that do not determine whether the treatment being provided reflects the client's wishes.",
  "type": "mcq",
  "options": [
   "Teach the daughter about the criteria for brain death.",
   "Obtain arterial blood gases after intubation.",
   "Determine if the client has an executed living will.",
   "Insert an indwelling catheter to monitor output."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi1q130",
  "exam": 1,
  "src": 677,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is teaching a male adolescent recently diagnosed with type 1 diabetes mellitus (DM) about self-injecting insulin. Which approach is best for the nurse to use to evaluate the effectiveness of the teaching?",
  "rationale": "A psychomotor skill is best evaluated by direct observation of a return demonstration, and demonstrating for a peer also engages the adolescent's developmental need for peer acceptance and reinforces learning. Comfort level is subjective, listing the steps shows knowledge but not skill, and the HbA1c reflects overall glycemic control influenced by many factors other than injection technique.",
  "type": "mcq",
  "options": [
   "Have the adolescent list the procedural steps for safe insulin administration.",
   "Observe him demonstrate the self-injection technique for another adolescent with diabetes.",
   "Ask the adolescent to describe his level of comfort with injecting himself with insulin.",
   "Review his glycosylated hemoglobin level 3 months after the teaching session."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q001",
  "exam": 2,
  "src": 705,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse provides feeding tube instructions to the wife of a client with end-stage cancer. The wife performs a correct return demonstration but begins crying and says, “I just don't think I can do this every day.” Toward which learning domain should the nurse direct further teaching?",
  "rationale": "The affective domain involves feelings, attitudes and values, and the wife's distress shows that she has the skill but needs support with the emotional burden of caregiving. Her correct return demonstration shows mastery of the psychomotor domain, the cognitive domain involves knowledge, and comprehension is a level within the cognitive domain rather than a separate domain.",
  "type": "mcq",
  "options": [
   "Cognitive",
   "Affective",
   "Psychomotor",
   "Comprehension"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q002",
  "exam": 2,
  "src": 331,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "After applying an alcohol-based hand rub to the palms and rubbing the hands together, which action should the nurse perform next?",
  "rationale": "With an alcohol-based rub, the nurse covers all surfaces of the hands and fingers, including rubbing the backs of the hands with interlaced fingers and between the fingers, and continues until the hands are dry, about 20 to 30 seconds. Rinsing or towel-drying removes the product before it has acted, and 5 seconds is too short to cover all surfaces.",
  "type": "mcq",
  "options": [
   "Stop rubbing after 5 seconds and begin care.",
   "Dry the hands thoroughly with a paper towel.",
   "Rinse the hands under warm running water.",
   "Place one hand on top of the other and interlace the fingers."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q003",
  "exam": 2,
  "src": 287,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A nurse working on an endocrine unit should see which client first?",
  "rationale": "An acute change in mental status is an unexpected, potentially dangerous finding; corticosteroid therapy can cause psychosis and mania, as well as hyperglycemia and electrolyte disturbances, and the disoriented client is at risk for injury, so this client is seen first. An argumentative adolescent is not in physical danger. The mild hypoglycemia and the hyperglycemia with osmotic diuresis need treatment soon, but these clients are oriented and their problems can be addressed promptly after the safety concern.",
  "type": "mcq",
  "options": [
   "An older client with Addison's disease whose blood glucose is 62 mg/dL",
   "An adolescent with diabetes who is arguing about his insulin dose",
   "An adult with a blood glucose of 384 mg/dL and urine output of 350 mL in the last hour",
   "A client taking corticosteroids who has become disoriented in the last two hours"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q004",
  "exam": 2,
  "src": 634,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is developing an educational program for older clients being discharged with new antihypertensive medications. The nurse should ensure that the educational materials include which characteristics? (Select all that apply.)",
  "rationale": "Older adults may have decreased vision, slower information processing and shorter attention spans, so materials should define unfamiliar terms, use simple common words and include clear illustrations. Materials should be written at about a fifth- to sixth-grade reading level rather than twelfth grade, and printed in a large font, such as 14- to 18-point, rather than standard 12-point type.",
  "type": "sata",
  "options": [
   "Uses pictures to help illustrate complex ideas",
   "Contains a list with definitions of unfamiliar terms",
   "Uses common words with few syllables",
   "Written at a twelfth-grade reading level",
   "Printed in a 12-point type font"
  ],
  "correct": [
   0,
   1,
   2
  ]
 },
 {
  "id": "hesi2q005",
  "exam": 2,
  "src": 488,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client has a PCA infusion of morphine sulfate through the right cephalic vein. The nurse finds the client lethargic, with a blood pressure of 90/60 mm Hg, pulse rate of 118 beats/minute, and respiratory rate of 8 breaths/minute. Which assessment should the nurse perform next?",
  "rationale": "Lethargy and a respiratory rate of 8 suggest opioid overdose, so the nurse checks the PCA pump to determine how much morphine has been delivered and whether a programming or concentration error occurred, which also guides the use of naloxone. The IV site, radial pulse and breath sounds do not identify the cause of the respiratory depression.",
  "type": "mcq",
  "options": [
   "Palpate the volume of the client's right radial pulse.",
   "Observe the amount and dose of morphine in the PCA pump syringe.",
   "Note the appearance and patency of the peripheral IV site.",
   "Auscultate the client's breath sounds bilaterally."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q006",
  "exam": 2,
  "src": 102,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client who has been in active labor for 12 hours suddenly tells the nurse that she has a strong urge to have a bowel movement. Which action should the nurse take?",
  "rationale": "A sudden urge to have a bowel movement during active labor usually means the fetal head is pressing on the rectum as it descends, so a sterile vaginal exam is performed to assess dilation, effacement and station. Placing her on a bedpan or toilet could lead to an unattended birth. Telling her the head is descending without assessment assumes a finding the nurse has not confirmed.",
  "type": "mcq",
  "options": [
   "Allow the client to use a bedpan.",
   "Perform a sterile vaginal exam.",
   "Explain that the fetal head is descending.",
   "Assist the client to the bathroom."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q007",
  "exam": 2,
  "src": 153,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A client with coronary artery disease who is experiencing syncopal episodes is admitted for an electrophysiology study (EPS) and possible cardiac ablation. Which intervention should the nurse delegate to the unlicensed assistive personnel (UAP)?",
  "rationale": "Preparing the skin, such as cleansing or clipping hair at the insertion sites, is a routine task with predictable results that is within the UAP's scope. Identifying and evaluating pulse points and interpreting telemetry require nursing assessment, and witnessing informed consent is the responsibility of a licensed nurse.",
  "type": "mcq",
  "options": [
   "Prepare the skin for the procedure.",
   "Check the telemetry monitoring.",
   "Witness the consent for the procedure.",
   "Identify the client's pulse points."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q008",
  "exam": 2,
  "src": 233,
  "topic": "Respiratory",
  "clientNeed": "Safety & Infection Control",
  "stem": "A male client recently released from a correctional facility arrives at the clinic with a cough, fever, and chills. His history reveals active tuberculosis (TB) 10 years ago. Which actions should the nurse implement? (Select all that apply.)",
  "rationale": "Symptoms of possible reactivated TB in a high-risk client require a chest x-ray and sputum specimens for AFB smear and culture, and a surgical mask on the client limits airborne spread until he is in an airborne infection isolation room. A person with prior active TB will have a positive skin test, so it is not useful for diagnosis. TB isolation requires negative pressure; positive pressure would push organisms out of the room.",
  "type": "sata",
  "options": [
   "Obtain sputum for acid-fast bacillus (AFB) testing.",
   "Place a mask on the client until he is moved to isolation.",
   "Place the client in a positive-pressure room.",
   "Schedule the client for a chest radiograph.",
   "Administer a tuberculin skin test to screen for TB."
  ],
  "correct": [
   0,
   1,
   3
  ]
 },
 {
  "id": "hesi2q009",
  "exam": 2,
  "src": 456,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "During shift report, the central electrocardiogram (EKG) monitoring system alarms. Which client alarm should the nurse investigate first?",
  "rationale": "Apnea lasting 30 seconds indicates a possible respiratory arrest, which threatens life within minutes, so it is investigated first. Sinus tachycardia at 110 and occasional PVCs require assessment but are not immediately life-threatening, and a lead-off alarm for a client in the bathroom is likely a technical issue.",
  "type": "mcq",
  "options": [
   "Sinus tachycardia at 110 beats/minute",
   "Lead-off alarm for a client in the bathroom",
   "Respiratory apnea of 30 seconds",
   "Four premature ventricular contractions per minute"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q010",
  "exam": 2,
  "src": 278,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A nurse is planning discharge care for a male client with metastatic cancer. The client tells the nurse that he plans to return to work despite pain, fatigue, and impending death. Which goal is most important to include in this client's plan of care?",
  "rationale": "Controlling pain is essential for the client to function and achieve his goal of returning to work, and an outpatient pain clinic offers interdisciplinary strategies for chronic cancer pain. The client has not expressed readiness for hospice or home health services, and short-term counseling does not address the symptom that most threatens his ability to work.",
  "type": "mcq",
  "options": [
   "Maintains a pain level below 4 when implementing outpatient pain clinic strategies.",
   "Requests home health care if independence is compromised for 5 days.",
   "Arranges short-term counseling if stressors affect his work schedule for 2 weeks.",
   "Implements decisions about future hospice services within the next 3 months."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q011",
  "exam": 2,
  "src": 68,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client is admitted with metastatic carcinoma of the liver, ascites, and bilateral 4+ pitting edema of both lower extremities. When the client complains that the antiembolic stockings are too constricting, which intervention should the nurse implement?",
  "rationale": "Elevating the legs promotes venous return and reduces dependent edema, which also makes the stockings less constricting and more comfortable. Massaging the legs is avoided because it can dislodge a thrombus. Severe fluid restriction to 500 mL is not indicated and does not relieve edema in the legs, and heat causes vasodilation that can increase edema.",
  "type": "mcq",
  "options": [
   "Massage both lower legs to reduce the edema.",
   "Restrict the client's oral fluids to 500 mL daily.",
   "Apply warm, moist packs to both lower legs.",
   "Maintain both lower extremities elevated on pillows."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q012",
  "exam": 2,
  "src": 199,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A female client is extremely anxious after being informed that her mammogram was abnormal and needs to be repeated. The client is tearful and tells the nurse that her mother died of breast cancer. Which action should the nurse take?",
  "rationale": "Encouraging the client to express her fears and concerns is a therapeutic response that offers support and helps reduce anxiety. Because no diagnosis has been made, discussing treatment options is premature. Reassuring her that a diagnosis has not been made dismisses her feelings, and suggesting a second opinion is premature when the repeat study has not yet been done.",
  "type": "mcq",
  "options": [
   "Suggest to the client that she seek a second opinion.",
   "Provide the client with information about treatment options for breast cancer.",
   "Reassure the client that the final diagnosis has not been made.",
   "Encourage the client to continue expressing her fears and concerns."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q013",
  "exam": 2,
  "src": 754,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "When assessing the dressing of a client who had abdominal surgery the previous day, the nurse observes a small amount of drainage on the dressing and finds that the Hemovac wound suction device is fully expanded and empty with the plug open. How should the nurse respond?",
  "rationale": "A closed wound drainage device creates suction only when it is compressed and the plug is closed, so the nurse empties it if needed, compresses it and secures the plug to restore gentle suction. The nurse does not remove the drain, leaving the plug open eliminates suction, and the problem can be corrected without notifying the provider.",
  "type": "mcq",
  "options": [
   "Notify the healthcare provider that the drain is not working.",
   "Replace the dressing and remove the drainage device.",
   "Reposition the drainage device and keep the plug open.",
   "Recompress the wound suction device and secure the plug."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q014",
  "exam": 2,
  "src": 11,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A 16-year-old adolescent with meningococcal meningitis is receiving a continuous IV infusion of penicillin G, prescribed as 20 million units in a total volume of 2 liters of normal saline every 24 hours. The pharmacy delivers 10 million units/liter of normal saline. How many mL/hour should the nurse program the infusion pump to deliver? (Enter numeric value only. If rounding is required, round to the nearest whole number.)",
  "rationale": "The prescription is 20 million units every 24 hours and each liter contains 10 million units, so 2 liters (2,000 mL) infuse over 24 hours. 2,000 mL ÷ 24 hours = 83.33 mL/hour, which rounds to 83 mL/hour. Equivalently, each 1,000 mL bag infuses over 12 hours: 1,000 ÷ 12 = 83.",
  "type": "fill",
  "answer": 83,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi2q015",
  "exam": 2,
  "src": 254,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A male client with rheumatoid arthritis is scheduled for a procedure in the morning. The client tells the nurse he may be unable to complete the procedure because of early morning stiffness. Which intervention should the nurse implement?",
  "rationale": "Morning stiffness in rheumatoid arthritis improves with warmth and gentle movement, so a warm shower early in the morning relaxes muscles and reduces stiffness, and assisting with hygiene is within the UAP's scope. Ice is used for acute inflammation and increases stiffness. Rescheduling is unnecessary when stiffness can be managed, and immobility worsens stiffness.",
  "type": "mcq",
  "options": [
   "Assign a UAP to assist the client with a warm shower early in the morning.",
   "Keep the client on bed rest until the procedure team arrives.",
   "Apply ice packs to the client's joints for 20 minutes before the procedure.",
   "Ask the provider to reschedule the procedure for late in the evening."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q016",
  "exam": 2,
  "src": 519,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The charge nurse observes a practical nurse (PN) apply sterile gloves in preparation for a sterile dressing change: the PN positions the table at waist height, opens the glove package touching only the outer wrapper, picks up the first glove by its folded inner cuff, and then picks up the second glove by its inner cuff with the gloved hand. Which action by the PN requires correction by the charge nurse?",
  "rationale": "The second glove must be picked up by sliding the gloved fingers under its outer cuff, sterile to sterile; touching the inner cuff, which will contact the bare skin, contaminates the gloved hand. The first glove is correctly grasped by the inner folded cuff with the bare hand, the package was opened by touching only the outside, and a work surface at waist height is correct.",
  "type": "mcq",
  "options": [
   "Opening the package",
   "Picking up the second glove",
   "Picking up the first glove",
   "Positioning of the table"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q017",
  "exam": 2,
  "src": 782,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which action should the school nurse take first when screening a student for scoliosis?",
  "rationale": "Scoliosis screening begins with inspection of the standing child from behind for asymmetry of shoulder height, scapulae, waist creases and hips, followed by the forward-bend (Adams) test; a scoliometer may be used during the bend test to quantify rotation. Palpating for tenderness is not part of screening, and radiographs are ordered by the provider for diagnosis after a positive screen.",
  "type": "mcq",
  "options": [
   "Palpate each vertebra for tenderness.",
   "Obtain a standing spinal x-ray.",
   "Inspect for symmetrical shoulder height.",
   "Measure the spinal curve with a scoliometer."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q018",
  "exam": 2,
  "src": 441,
  "topic": "Renal & GU",
  "clientNeed": "Physiological Adaptation",
  "stem": "During a clinic visit, a client with a kidney transplant asks, “What will happen if chronic rejection develops?” Which response is best for the nurse to provide?",
  "rationale": "Chronic rejection develops gradually over months to years through progressive fibrosis of the transplanted kidney's blood vessels, and it is not reversible with increased immunosuppression; when the graft fails, the client returns to dialysis and may be evaluated for another transplant. Acute rejection, not chronic rejection, is often reversed with higher doses of immunosuppressants, and a second transplant is not immediate and depends on donor availability.",
  "type": "mcq",
  "options": [
   "“Higher doses of your current medications would reverse it.”",
   "“Chronic rejection usually resolves on its own with rest.”",
   "“A second transplant would be performed right away.”",
   "“Dialysis would need to be resumed if chronic rejection occurs.”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q019",
  "exam": 2,
  "src": 314,
  "topic": "Renal & GU",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A young adult female with chronic kidney disease (CKD) from recurrent pyelonephritis is hospitalized with basilar crackles and peripheral edema. She complains of severe nausea, and the cardiac monitor shows sinus tachycardia with frequent premature ventricular contractions. Her blood pressure is 200/110 mm Hg, and her temperature is 101° F. Which PRN medication should the nurse administer first?",
  "rationale": "Crackles, edema and severe hypertension indicate fluid volume overload that is compromising gas exchange and straining the heart, so a loop diuretic is given first to remove excess fluid and lower blood pressure. Enalapril lowers blood pressure more slowly and can worsen hyperkalemia in CKD, and acetaminophen and promethazine treat fever and nausea, which are not as immediately dangerous.",
  "type": "mcq",
  "options": [
   "Furosemide",
   "Acetaminophen",
   "Promethazine",
   "Enalapril"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q020",
  "exam": 2,
  "src": 611,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is caring for a client receiving continuous IV fluids through a single-lumen central venous catheter (CVC). According to the CVC maintenance bundle, which action should be completed daily to reduce the risk of infection?",
  "rationale": "Daily review of whether the central line is still needed, with prompt removal when it is not, is a core element of central line–associated bloodstream infection prevention because infection risk increases each day the line remains. Transparent dressings are changed every 7 days or when soiled, continuous tubing is replaced every 96 hours to 7 days per policy, and routine daily cultures are not recommended.",
  "type": "mcq",
  "options": [
   "Replace the IV administration tubing.",
   "Confirm the necessity for continued use of the CVC.",
   "Obtain a blood culture from the catheter.",
   "Change the transparent dressing over the insertion site."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q021",
  "exam": 2,
  "src": 349,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An 11-year-old is admitted to the mental health unit after trying to run away from home and threatening self-harm. The nurse sets a goal to promote effective coping and plans to ask the client to verbalize three ways to deal with stress. Which activity is best to establish rapport and accomplish this therapeutic goal?",
  "rationale": "Play is the natural language of school-age children, and a board game provides a relaxed, nonthreatening setting in which rapport develops and the child can begin discussing stressors. A team meeting may be intimidating, journaling can be useful later but is less effective for building rapport initially, and medication teaching does not address coping skills.",
  "type": "mcq",
  "options": [
   "Bring the client to the team meeting to discuss the treatment plan.",
   "Play a board game with the client and begin talking about stressors.",
   "Ask the client to write feelings in a journal and then review it together.",
   "Explain the purpose of each medication the client is currently taking."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q022",
  "exam": 2,
  "src": 728,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "The rapid response team detects return of spontaneous circulation (ROSC) after 2 minutes of continuous chest compressions. The client has a weak, rapid pulse and no respiratory effort, and the healthcare provider successfully performs oral intubation. Which action should the nurse implement?",
  "rationale": "Immediately after intubation, the nurse confirms tube placement by auscultating for equal bilateral breath sounds and the absence of sounds over the epigastrium, along with end-tidal CO2 monitoring. The client now has a pulse, so compressions and epinephrine for cardiac arrest are not indicated, and ventilation is not delayed for an x-ray, which is obtained afterward to confirm tube depth.",
  "type": "mcq",
  "options": [
   "Obtain a chest x-ray before ventilating.",
   "Resume continuous chest compressions.",
   "Perform bilateral chest auscultation.",
   "Administer IV epinephrine immediately."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q023",
  "exam": 2,
  "src": 427,
  "topic": "Maternity & Newborn",
  "clientNeed": "Safety & Infection Control",
  "stem": "At 40 weeks' gestation, a laboring client who is lying in a supine position tells the nurse that she has finally found a comfortable position. Which action should the nurse take?",
  "rationale": "In the supine position, the gravid uterus compresses the inferior vena cava, which can cause maternal hypotension and reduced placental perfusion. A wedge under the right hip displaces the uterus to the left, relieving the compression while allowing her to stay in her chosen position. Turning her or telling her the position is unsafe disregards her comfort, and pillows under the head and knees do not relieve compression.",
  "type": "mcq",
  "options": [
   "Place a pillow under the client's head and knees.",
   "Encourage the client to turn onto her left side.",
   "Explain to the client that her position is not safe.",
   "Place a wedge under the client's right hip."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q024",
  "exam": 2,
  "src": 555,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The mother of a one-month-old boy born at home brings him for his first well-baby visit; no newborn screening was performed. She states he was born two weeks after his due date and is a “good, quiet baby” who almost never cries. The nurse suspects congenital hypothyroidism. Which question is most important for the nurse to ask the mother?",
  "rationale": "Congenital hypothyroidism causes lethargy, excessive sleepiness, poor feeding, constipation, a hoarse cry and prolonged jaundice, and an unusually quiet baby who sleeps a great deal may have it; untreated, it causes irreversible intellectual disability. Loose stools and irritability with frequent crying suggest increased metabolism, and diaphoresis during feedings is a sign of heart failure in infants.",
  "type": "mcq",
  "options": [
   "“Does he startle easily and cry very often?”",
   "“Does he have frequent loose, watery stools?”",
   "“Does he sweat heavily during his feedings?”",
   "“Is your son sleepy and difficult to feed?”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q025",
  "exam": 2,
  "src": 824,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "While in the medical records department, the nurse observes several old medical records with client names visible in a waste container. Which action should the nurse implement?",
  "rationale": "Discarded records with visible client information are a breach of confidentiality under HIPAA, and the department supervisor is responsible for ensuring that records are disposed of securely, so the nurse reports the problem through the proper channel. Shredding them personally bypasses policy and documentation, ignoring them allows the breach to continue, and the board of nursing does not oversee hospital records disposal.",
  "type": "mcq",
  "options": [
   "Contact the medical records department supervisor.",
   "Report the hospital to the state board of nursing.",
   "Ignore the records, since they are in the records department.",
   "Remove the records and shred them personally."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q026",
  "exam": 2,
  "src": 565,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse assesses a client with new-onset diarrhea. It is most important for the nurse to ask the client about recent use of which type of medication?",
  "rationale": "Antibiotics disrupt normal intestinal flora and are a leading cause of new diarrhea, including Clostridioides difficile infection, which requires testing and contact precautions. Anticoagulants and most antihypertensives do not typically cause diarrhea, and anticholinergics decrease GI motility and cause constipation.",
  "type": "mcq",
  "options": [
   "Anticoagulants",
   "Antibiotics",
   "Anticholinergics",
   "Antihypertensives"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q027",
  "exam": 2,
  "src": 442,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "During a home visit, the nurse observes an older client with diabetes slip and fall. Which action should the nurse take first?",
  "rationale": "After a fall, the nurse first assesses for injury, such as lacerations, fractures or head trauma, before moving the client, because moving an injured client can worsen the injury. Helping the client up before assessment is unsafe. Checking the glucose helps determine whether hypoglycemia caused the fall and should follow the injury assessment, and EMS is called if the assessment shows an injury requiring transport.",
  "type": "mcq",
  "options": [
   "Check the client for lacerations or fractures.",
   "Check the client's capillary blood glucose.",
   "Call emergency medical services to transport.",
   "Help the client stand up and walk to a chair."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q028",
  "exam": 2,
  "src": 501,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "In preparing assignments for the shift, which client is best for the charge nurse to assign to a practical nurse (PN)?",
  "rationale": "A client with stable, chronic deficits after a stroke has predictable care needs that are within the PN's scope. A new admission with chest pain requires RN assessment, a transfusion for active bleeding requires RN monitoring for reactions and instability, and initial discharge teaching for a new diagnosis is an RN responsibility.",
  "type": "mcq",
  "options": [
   "An older client post-stroke who is aphasic with right-sided hemiplegia",
   "A client receiving a blood transfusion for a gastrointestinal bleed",
   "A client admitted 1 hour ago with chest pain and new ECG changes",
   "A newly diagnosed client with diabetes who needs discharge teaching"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q029",
  "exam": 2,
  "src": 179,
  "topic": "Renal & GU",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with polycystic kidney disease (PKD) receiving antibiotics for an infected cyst is experiencing severe pain. Which action should the nurse implement?",
  "rationale": "Dry heat applied to the flank or abdomen is a recommended comfort measure that relieves the pain of enlarged, infected cysts, along with prescribed analgesics. The antibiotic treats the cause of the pain and should not be held. Pelvic floor exercises address urinary incontinence, and an abdominal binder increases pressure on the enlarged kidneys and may worsen discomfort.",
  "type": "mcq",
  "options": [
   "Encourage the client to practice pelvic floor exercises every hour.",
   "Hold the next dose of antibiotic until contacting the healthcare provider.",
   "Assist the client to splint the site by applying an abdominal binder.",
   "Teach the client how to use a dry heating pad over the painful area."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q030",
  "exam": 2,
  "src": 229,
  "topic": "Cardiovascular",
  "clientNeed": "Management of Care",
  "stem": "A male client has abdominal pain after a left femoral angioplasty and stent and asks for more pain medication for right lower quadrant pain rated 9/10. Two hours ago he received hydrocodone/acetaminophen 7.5/750 mg. His vital signs have changed from the previous hour: temperature 97.8° F, heart rate 102 beats/minute, respirations 20 breaths/minute. His abdomen is swollen, the groin access site is tender, and peripheral pulses are present with left greater than right. Preoperatively, clopidogrel was prescribed for previous peripheral stents. Another nurse is holding manual pressure on the femoral access site, which may be bleeding into the abdomen. Which information is needed to make the nurse's report to the surgeon complete?",
  "rationale": "The report already contains the situation, background and assessment of a suspected retroperitoneal bleed from the access site in a client on clopidogrel; using SBAR, it is incomplete without a clear recommendation, which here is that the surgeon must evaluate the client at once. The admission weight, the primary care provider and a preoperative chest x-ray do not affect the immediate decision and would only delay the call.",
  "type": "mcq",
  "options": [
   "The surgeon needs to see the client immediately to evaluate the situation.",
   "The name of the client's primary care provider and pharmacy.",
   "The results of the client's preoperative chest x-ray.",
   "The client's height and weight recorded on the day of admission."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q031",
  "exam": 2,
  "src": 65,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client is admitted with acute pancreatitis and admits to drinking a pint of bourbon daily. The nurse medicates the client for pain and monitors vital signs every 2 hours. Which finding should the nurse report immediately to the healthcare provider?",
  "rationale": "Heavy daily alcohol use is the likely cause of this client's pancreatitis, and abrupt cessation on admission can lead to alcohol withdrawal and delirium tremens; confusion and tremors must be reported immediately so withdrawal can be treated before seizures or cardiovascular complications develop. Jaundice with pruritus, abdominal pain with vomiting and anorexia with distention are expected findings of pancreatitis or liver dysfunction that do not require emergency action.",
  "type": "mcq",
  "options": [
   "Abdominal pain and vomiting",
   "Anorexia and abdominal distention",
   "Confusion and tremors",
   "Yellowing and itching of the skin"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q032",
  "exam": 2,
  "src": 244,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client with a long history of alcoholism is admitted with mild confusion and fine motor tremors. He reports that he quit drinking and stopped smoking one month ago after his brother died of lung cancer. Which intervention is most important for the nurse to include in the client's plan of care?",
  "rationale": "Because he stopped drinking a month ago, acute withdrawal is unlikely, and confusion with tremors suggests hepatic encephalopathy or Wernicke encephalopathy related to chronic alcohol use; monitoring level of consciousness is the priority neurologic assessment. A blood alcohol level is unlikely to be helpful after a month of abstinence. Family involvement and grief counseling are appropriate but are not as important as detecting neurologic deterioration.",
  "type": "mcq",
  "options": [
   "Observe for changes in level of consciousness.",
   "Determine the client's current blood alcohol level.",
   "Provide grief counseling for the client and his family.",
   "Involve the client's family in healthcare decisions."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q033",
  "exam": 2,
  "src": 658,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is starting an intravenous (IV) infusion using an infusion pump. Within 30 seconds of turning on the pump, it alarms “occlusion.” Which action should the nurse implement first?",
  "rationale": "An occlusion alarm immediately after starting an infusion is most often caused by a closed roller or slide clamp, so the nurse checks the simplest mechanical cause first. If the alarm continues, the nurse checks for kinks and correct loading of the tubing, assesses the site and flushes to evaluate patency.",
  "type": "mcq",
  "options": [
   "Assess the IV catheter insertion site for infiltration.",
   "Verify the threading of the tubing through the IV pump.",
   "Determine whether the clamp on the IV tubing is released.",
   "Flush the vein with 3 mL of sterile normal saline."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q034",
  "exam": 2,
  "src": 341,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "After receiving the first dose of penicillin, a client begins wheezing and has trouble breathing. The nurse immediately notifies the healthcare provider and receives several prescriptions. Which medication should the nurse administer first?",
  "rationale": "Wheezing and dyspnea after penicillin indicate anaphylaxis, and epinephrine is the first-line drug because it reverses bronchospasm, vasodilation and capillary leak; it is usually given IM in the anterolateral thigh, with IV epinephrine reserved for refractory shock in monitored settings. Antihistamines, corticosteroids and albuterol are adjuncts given after epinephrine and do not reverse the life-threatening reaction.",
  "type": "mcq",
  "options": [
   "Albuterol by nebulizer",
   "Diphenhydramine IV",
   "Epinephrine injection",
   "Methylprednisolone IV"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q035",
  "exam": 2,
  "src": 100,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client who had an open cholecystectomy two weeks ago comes to the emergency department with nausea, abdominal distention, and pain. Which assessment should the nurse implement?",
  "rationale": "Nausea, distention and pain after abdominal surgery suggest a paralytic ileus or bowel obstruction, and auscultating all four quadrants for absent, hypoactive or high-pitched bowel sounds is the first assessment; auscultation precedes palpation so the bowel sounds are not altered. A rectal exam and stool Hemoccult evaluate bleeding, and palpating the liver and spleen is not indicated for these symptoms.",
  "type": "mcq",
  "options": [
   "Obtain a Hemoccult test of the client's stool.",
   "Auscultate all quadrants of the abdomen.",
   "Perform a digital rectal examination.",
   "Palpate the liver and spleen."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q036",
  "exam": 2,
  "src": 426,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A home health nurse finds that an older client who lives alone has chronic constipation. Daily medications include furosemide for hypertension and heart failure, and laxatives. To manage the constipation, which suggestions should the nurse provide? (Select all that apply.)",
  "rationale": "Fiber from oatmeal and prunes stimulates bowel motility, keeping water within reach increases fluid intake within the limits of the client's heart failure, and help with shopping and meals makes fresh, high-fiber foods more available. Replacing laxatives with routine enemas is not appropriate; laxatives are reduced gradually as the diet improves. Furosemide can contribute to dehydration, but constipation here is best addressed through diet and fluids rather than attributed to a drug side effect.",
  "type": "sata",
  "options": [
   "Decrease laxative use to every other day and use oil-retention enemas as needed.",
   "Recommend getting help with regular shopping and meal preparation.",
   "Include oatmeal with stewed prunes for breakfast as often as possible.",
   "Increase fluid intake by keeping a water glass next to the recliner.",
   "Report the constipation to the provider as a side effect of the cardiac medication."
  ],
  "correct": [
   1,
   2,
   3
  ]
 },
 {
  "id": "hesi2q037",
  "exam": 2,
  "src": 762,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "When conducting diet teaching for a client with nutritional anemia in pregnancy, which foods should the nurse encourage the client to eat? (Select all that apply.)",
  "rationale": "Iron-deficiency anemia is the most common nutritional anemia of pregnancy, and iron-fortified cereals and whole grains, dark green leafy vegetables and dried fruits are good sources of iron and folate. Lettuce, spices, consommé, celery and carrots provide little iron, and citrus fruits supply vitamin C that enhances iron absorption but are not themselves iron sources.",
  "type": "sata",
  "options": [
   "Oranges, orange juice, and bananas",
   "Fortified whole-wheat cereals, whole-grain pasta, and brown rice",
   "Consommé, celery, and carrots",
   "Seeds, spices, and iceberg lettuce",
   "Spinach, kale, dried raisins, and apricots"
  ],
  "correct": [
   1,
   4
  ]
 },
 {
  "id": "hesi2q038",
  "exam": 2,
  "src": 117,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client who was admitted yesterday with severe dehydration complains of pain at the IV site, where a 24-gauge IV catheter with normal saline is infusing at 150 mL/hour. Which intervention should the nurse implement first?",
  "rationale": "Pain at an IV site, especially with a very small 24-gauge catheter delivering a high rate, suggests infiltration or phlebitis, so the nurse first stops the infusion to prevent further tissue damage and then assesses the site. Slowing the rate continues the infusion into a possibly damaged vein. A compress may be applied after the infusion is stopped and the cause is identified, and analgesia does not address the cause.",
  "type": "mcq",
  "options": [
   "Stop the normal saline infusion.",
   "Administer a prescribed analgesic.",
   "Slow the infusion rate to 75 mL/hour.",
   "Apply a warm compress to the site."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q039",
  "exam": 2,
  "src": 538,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes a heparin protocol at 18 units/kg/hour for a client with a possible pulmonary embolism. The client weighs 144 pounds. The available solution is labeled heparin sodium 25,000 units in 5% dextrose 250 mL. How many mL/hour should the nurse program the pump to deliver? (Enter numeric value only. If rounding is required, round to the nearest whole number.)",
  "rationale": "Convert weight: 144 lb ÷ 2.2 = 65.45 kg. Dose: 18 units/kg/hour × 65.45 kg = 1,178 units/hour. Concentration: 25,000 units ÷ 250 mL = 100 units/mL. Rate: 1,178 ÷ 100 = 11.78 mL/hour, which rounds to 12 mL/hour.",
  "type": "fill",
  "answer": 12,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi2q040",
  "exam": 2,
  "src": 660,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing dose 7 of an IV piggyback infusion of tobramycin for a 73-year-old client with a wound infected with Pseudomonas aeruginosa. Which assessment data warrants further intervention by the nurse?",
  "rationale": "Tobramycin is an aminoglycoside with a narrow therapeutic range that is nephrotoxic and ototoxic, and older adults are at increased risk, so serum drug levels must be monitored to guide dosing; by the seventh dose they are overdue. Mild nausea, a near-normal temperature and decreasing drainage do not require intervention, and the latter two suggest improvement.",
  "type": "mcq",
  "options": [
   "The client reports mild nausea after the previous dose of tobramycin.",
   "The amount of wound drainage has decreased over the past two days.",
   "Peak and trough levels have not been drawn since tobramycin was started.",
   "The client's oral temperature is 99.2° F (37.3° C) this morning."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q041",
  "exam": 2,
  "src": 577,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse enters a client's room and observes that the client's wrist restraint is tied to the side rail of the bed. Which action should the nurse take?",
  "rationale": "Restraints are secured to the movable part of the bed frame, which moves with the client when the bed is adjusted; a restraint tied to a side rail can pull on the client's wrist or cause injury when the rail is lowered. A quick-release knot, not a square knot, is required, restraints must allow two fingers' space rather than being tightened, and removing a prescribed restraint without assessment may not be safe.",
  "type": "mcq",
  "options": [
   "Retie the restraint with a secure square knot.",
   "Tighten the restraint so the client cannot pull free.",
   "Reposition the restraint tie onto the bed frame.",
   "Remove the restraint and document that it was removed."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q042",
  "exam": 2,
  "src": 156,
  "topic": "Respiratory",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A client with emphysema is being discharged from the hospital. When the nurse enters the room to complete discharge teaching, the client reports feeling a little short of breath and is anxious about going home. What is the best course of action?",
  "rationale": "Anxiety narrows the perceptual field and limits learning, so the nurse provides only essential information in short, simple explanations and reinforces it with written materials the client can review at home. Discharge teaching cannot be postponed until after the client leaves, because the client needs the information to manage care safely. Detailed instructions would overwhelm an anxious, dyspneic client.",
  "type": "mcq",
  "options": [
   "Postpone the discharge instructions at this time and offer to contact the client by phone in a few days.",
   "Provide only necessary information in short, simple explanations, with written instructions to take home.",
   "Invite the client to return to the unit for discharge teaching in a few days, when there is less anxiety.",
   "Give detailed instructions, speaking slowly and clearly while looking directly at the client."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q043",
  "exam": 2,
  "src": 587,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is assessing a 4-year-old boy admitted with possible nephrotic syndrome. Which statement by the parents indicates a likely correlation with the child's diagnosis?",
  "rationale": "Nephrotic syndrome causes massive proteinuria and hypoalbuminemia, leading to generalized edema that commonly appears around the eyes and in the feet and ankles, so shoes and socks no longer fit. A recent sore throat and gross hematuria are characteristic of acute post-streptococcal glomerulonephritis, and the child with nephrotic syndrome typically has decreased, foamy urine rather than increased urination.",
  "type": "mcq",
  "options": [
   "“He had a bad sore throat about two weeks ago.”",
   "“He has been urinating much more than usual.”",
   "“I couldn't get my son's socks and shoes on this morning.”",
   "“His urine has been bright red for the past day.”"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q044",
  "exam": 2,
  "src": 292,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with preeclampsia who gave birth 24 hours ago remains in the labor and delivery recovery room and continues to receive magnesium sulfate at 2 grams/hour. Her total intake is limited to 125 mL/hour, and her urine output for the last hour was 850 mL. Which intervention should the nurse implement?",
  "rationale": "Diuresis 24 to 48 hours after birth is a sign of improvement in preeclampsia: as arteriolar vasospasm relaxes, renal perfusion increases, and fluid shifts from the interstitial tissue into the vascular space and is excreted. Good urine output also reduces the risk of magnesium toxicity. Stopping the magnesium, cutting the IV rate or making her NPO is not indicated.",
  "type": "mcq",
  "options": [
   "Decrease the client's IV rate to 50 mL/hour.",
   "Change the client to NPO status.",
   "Continue with the plan of care for this client.",
   "Discontinue the magnesium sulfate immediately."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q045",
  "exam": 2,
  "src": 534,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes acarbose, an alpha-glucosidase inhibitor, for a client with type 2 diabetes mellitus. Which information provides the best indicator of the drug's effectiveness?",
  "rationale": "Acarbose delays carbohydrate digestion and absorption to reduce postprandial glucose spikes, and an HbA1c below 7% reflects good average glycemic control over the past 2 to 3 months, which is the best measure of long-term effectiveness. A fasting glucose of 140 mg/dL is above target. Flatulence and bloating are common side effects, so their absence does not show effectiveness, and acarbose does not primarily cause weight loss.",
  "type": "mcq",
  "options": [
   "Absence of flatulence and bloating",
   "Fasting blood glucose of 140 mg/dL",
   "Weight loss of 5 pounds in one month",
   "Hemoglobin A1c (HbA1c) less than 7%"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q046",
  "exam": 2,
  "src": 547,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The husband of a client with advanced ovarian cancer wants his wife to have every treatment available. After he leaves, the client tells the nurse she has had enough chemotherapy and wants to stop all treatment, but she knows her husband will sign consent forms for more. Which information should the nurse's response include? (Select all that apply.)",
  "rationale": "A competent adult makes her own treatment decisions, so her husband cannot consent on her behalf, and she has the right to refuse further chemotherapy. Discussing her wishes with her provider allows them to be documented, and the team can shift to comfort-focused care. A spouse's wishes do not override a competent client's decision, she is not required to finish a course she wishes to stop, and the nurse supports her in communicating with her husband rather than speaking for her.",
  "type": "sata",
  "options": [
   "The healthcare team will develop a plan of care to keep her comfortable.",
   "Her specific wishes should be discussed with her healthcare provider.",
   "Her husband's wishes take priority because he is her next of kin.",
   "She must complete the current course of chemotherapy before stopping.",
   "The nurse will ask her husband to stop requesting further treatment.",
   "Her husband cannot sign consent for her; her own signature is required."
  ],
  "correct": [
   0,
   1,
   5
  ]
 },
 {
  "id": "hesi2q047",
  "exam": 2,
  "src": 613,
  "topic": "Maternity & Newborn",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is caring for a client who is entering the second stage of labor. Which action should the nurse implement first?",
  "rationale": "The second stage begins with complete cervical dilation, and informing the client that she is fully dilated and that birth is approaching orients her to the pushing stage and prepares her and her support person. Epidural placement is typically done earlier in labor, oxytocin is not given as a bolus, and prolonged breath-holding with closed-glottis pushing is discouraged in favor of spontaneous pushing.",
  "type": "mcq",
  "options": [
   "Instruct the client to hold her breath for 20 seconds.",
   "Administer an IV oxytocin bolus to speed delivery.",
   "Convey to the client that birth is approaching.",
   "Prepare the client for epidural catheter placement."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q048",
  "exam": 2,
  "src": 32,
  "topic": "Cardiovascular",
  "clientNeed": "Management of Care",
  "stem": "A client admitted to the telemetry unit has unrelieved chest pain after receiving 3 sublingual nitroglycerin tablets and morphine 8 mg IV. The electrocardiogram reveals sinus bradycardia with ST elevation. In which order should the nurse implement the following actions?",
  "rationale": "Unrelieved chest pain with ST elevation and bradycardia signals an evolving STEMI with risk of deterioration, so the nurse first summons immediate bedside help by calling the rapid response team, then brings the crash cart to the room so emergency equipment is ready. The healthcare provider is then notified for definitive treatment orders such as reperfusion. Informing the family is important but is the last action because it does not affect the client's immediate physiologic stability.",
  "type": "mcq",
  "options": [
   "Notify the healthcare provider → Call the rapid response team → Inform the family → Move the crash cart to the room",
   "Move the crash cart to the room → Inform the family → Call the rapid response team → Notify the healthcare provider",
   "Call the rapid response team → Move the crash cart to the room → Notify the healthcare provider → Inform the family",
   "Inform the family → Notify the healthcare provider → Move the crash cart to the room → Call the rapid response team"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q049",
  "exam": 2,
  "src": 763,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "When developing a teaching plan for a client newly diagnosed with type 1 diabetes, the nurse explains that increased thirst is an early sign of diabetic ketoacidosis (DKA). Which action should the nurse instruct the client to implement if this sign occurs?",
  "rationale": "Increased thirst reflects hyperglycemia and osmotic diuresis, so the client should check the glucose (and ketones) and take correction-dose insulin per the prescribed scale, then contact the provider if levels remain high. Exercise can raise glucose and worsen ketosis when insulin is deficient, fluids alone do not correct the insulin deficit, and waiting 24 hours delays treatment.",
  "type": "mcq",
  "options": [
   "Resume normal physical activity to help lower the blood glucose.",
   "Drink an electrolyte replacement fluid and wait for the thirst to pass.",
   "Check the blood glucose and give a dose of regular insulin per the sliding scale.",
   "Measure the urinary output over the next 24 hours."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q050",
  "exam": 2,
  "src": 506,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "One day after an open reduction and internal fixation of a compound fracture of the left leg, a male client complains of a “tingly sensation” in his left foot. The nurse finds that the left pedal pulses are diminished. Based on these findings, what is the client's greatest risk?",
  "rationale": "Paresthesia and diminished distal pulses after fracture repair are signs of compartment syndrome, in which swelling within a closed fascial compartment compresses nerves and vessels and can cause permanent damage within hours, requiring urgent evaluation and possible fasciotomy. Osteomyelitis and DVT develop later and present differently, and fat embolism presents with respiratory distress and confusion rather than localized neurovascular changes.",
  "type": "mcq",
  "options": [
   "Neurovascular and circulatory compromise related to compartment syndrome",
   "Deep vein thrombosis related to immobility",
   "Osteomyelitis related to the open fracture wound",
   "Fat embolism related to the long-bone fracture"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q051",
  "exam": 2,
  "src": 42,
  "topic": "Mental Health",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client experiencing withdrawal from the benzodiazepine alprazolam is demonstrating severe agitation and tremors. What is the best initial nursing action?",
  "rationale": "Abrupt withdrawal from a CNS depressant such as alprazolam produces rebound CNS hyperexcitability; tremors and severe agitation signal a high risk of withdrawal seizures, so seizure precautions protect the client. Naloxone reverses opioids, not benzodiazepines, and would not help withdrawal. A drug screen and family teaching are appropriate later but do not address the immediate safety risk.",
  "type": "mcq",
  "options": [
   "Administer naloxone per PRN protocol",
   "Obtain a serum drug screen",
   "Initiate seizure precautions",
   "Instruct the family about withdrawal symptoms"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q052",
  "exam": 2,
  "src": 678,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is teaching a male client with multiple sclerosis to empty his bladder using the Credé method. During a return demonstration, the client applies pressure to the umbilical area of his abdomen. Which instruction should the nurse provide?",
  "rationale": "The Credé method empties a flaccid (atonic) neurogenic bladder by applying firm downward pressure over the bladder in the suprapubic area, so the client must move his hands from the umbilicus to just above the pubic bone. Stroking the inner thigh is a trigger technique for a reflex bladder, pelvic floor contractions are Kegel exercises for incontinence, and warm water may help initiate voiding but is not the Credé technique.",
  "type": "mcq",
  "options": [
   "Apply downward manual pressure over the suprapubic region.",
   "Pour warm water over the external sphincter at the glans.",
   "Contract, hold, and then relax the pubococcygeal muscle.",
   "Stroke the inner thigh below the perineum to start urine flow."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q053",
  "exam": 2,
  "src": 520,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "At the beginning of the shift, the charge nurse of a critical care unit learns that fewer than the optimal number of registered nurses will be working. In planning assignments, which client should receive the most care hours from a registered nurse (RN)?",
  "rationale": "A confused older client with a new fracture, an indwelling catheter and restraints has multiple high-risk needs, including restraint monitoring, pain assessment in a client who cannot report reliably, delirium, and risks of fat embolism and infection, requiring frequent RN assessment. The other clients are stable or awaiting transfer and need fewer RN care hours.",
  "type": "mcq",
  "options": [
   "An 82-year-old with Alzheimer's disease and a new femur fracture who has a Foley catheter and soft wrist restraints",
   "A client with stable chronic obstructive pulmonary disease receiving oxygen at 2 L/min",
   "A client with rate-controlled atrial fibrillation who is receiving oral anticoagulation",
   "A client 3 days after coronary artery bypass surgery who is awaiting transfer to the step-down unit"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q054",
  "exam": 2,
  "src": 765,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "When entering a client's room, the nurse discovers that the client is unresponsive and pulseless. The nurse initiates CPR and calls for assistance. Which action should the nurse take next?",
  "rationale": "Treatment of cardiac arrest depends on the rhythm, so after starting CPR the next step is to attach the monitor or defibrillator pads to determine whether the rhythm is shockable, such as ventricular fibrillation, or nonshockable. Atropine is not recommended in pulseless arrest, lidocaine is an alternative antiarrhythmic used only after shocks for refractory VF or VT, and a tracheostomy is not part of initial resuscitation.",
  "type": "mcq",
  "options": [
   "Gather emergency tracheostomy equipment.",
   "Prepare to administer atropine 0.4 mg IV push.",
   "Prepare to administer lidocaine 100 mg IV push.",
   "Place cardiac monitor leads or defibrillator pads on the client's chest."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q055",
  "exam": 2,
  "src": 260,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A man expresses concern to the nurse about the care his mother is receiving while hospitalized. He believes that her care is not based on any ethical standards and asks what type of care he should expect from a public hospital. Which action should the nurse take?",
  "rationale": "The Patient's Bill of Rights describes the care and treatment clients can expect, including respectful care, information, privacy and participation in decisions, which directly answers his question. A legal referral is premature, and saying standards vary is inaccurate because all hospitals must meet regulatory standards. Reassurance without information dismisses his concern.",
  "type": "mcq",
  "options": [
   "Provide the man and his mother with a copy of the Patient's Bill of Rights.",
   "Refer the man to the hospital's legal department to file a complaint.",
   "Reassure the man that his mother's care is appropriate for her condition.",
   "Explain that the standards of care in public hospitals vary widely."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q056",
  "exam": 2,
  "src": 415,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An older woman recently diagnosed with end-stage metastatic breast cancer is admitted with shortness of breath and confusion. She refuses to eat and continuously asks to go home. Arterial blood gases indicate hypoxia. Which intervention is most important for the nurse to implement?",
  "rationale": "With end-stage disease and a new deterioration, the client's goals of care determine whether aggressive interventions such as intubation or comfort-focused care are appropriate, so her end-of-life wishes, or those documented in an advance directive, must be clarified first. Intubating or initiating comfort measures without knowing her wishes could violate her autonomy, and offering beverages does not address the decision at hand.",
  "type": "mcq",
  "options": [
   "Clarify the client's end-of-life desires.",
   "Offer sips of her favorite beverages.",
   "Prepare for emergent oral intubation.",
   "Initiate comfort measures only."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q057",
  "exam": 2,
  "src": 827,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "While performing a skin inspection on an adult female client, the nurse observes a well-circumscribed rash with silvery scales and plaques on the elbows and knees. These findings are likely to indicate which condition?",
  "rationale": "Psoriasis is characterized by well-demarcated, raised red plaques with silvery-white scales, typically on extensor surfaces such as the elbows and knees and on the scalp. Tinea corporis forms ring-shaped lesions with central clearing, herpes zoster causes painful vesicles along a dermatome, and drug reactions usually produce diffuse maculopapular or urticarial rashes.",
  "type": "mcq",
  "options": [
   "Herpes zoster",
   "Tinea corporis",
   "Psoriasis",
   "Drug reaction"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q058",
  "exam": 2,
  "src": 394,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An insulin infusion is started for a client with diabetes mellitus who is experiencing hyperosmolar hyperglycemic state (HHS). In addition to the client's glucose, which laboratory value is most important for the nurse to monitor?",
  "rationale": "Insulin drives potassium into the cells along with glucose, and fluid replacement dilutes the serum, so hypokalemia can develop quickly and cause dangerous dysrhythmias; potassium is monitored closely and replaced. Ketones are minimal in HHS, and urine albumin and serum protein do not change rapidly with insulin therapy.",
  "type": "mcq",
  "options": [
   "Serum potassium",
   "Urine albumin",
   "Urine ketones",
   "Serum protein"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q059",
  "exam": 2,
  "src": 41,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with calcium kidney stones has a history of gout. A new prescription for aluminum hydroxide is scheduled to begin at 0730. Which of the client's medications should the nurse bring to the healthcare provider's attention?",
  "rationale": "Aluminum-containing antacids decrease the absorption of allopurinol, so the drugs must be separated by at least 3 hours or the schedule adjusted; the nurse should clarify timing with the provider. Low-dose aspirin, furosemide and enalapril do not have a clinically significant absorption interaction with aluminum hydroxide that would require questioning the new prescription.",
  "type": "mcq",
  "options": [
   "Allopurinol",
   "Low-dose aspirin",
   "Enalapril",
   "Furosemide"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q060",
  "exam": 2,
  "src": 126,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with a history of heart failure presents to the clinic with nausea, vomiting, yellow vision, and palpitations. Which information is most important for the nurse to obtain from the client?",
  "rationale": "Nausea, vomiting, yellow-green visual halos and palpitations are classic signs of digoxin toxicity, so the nurse should determine which cardiac medications the client takes, how they are taken and whether any interacting drugs such as diuretics have been added. Sodium intake and jugular venous distention relate to fluid overload, and a Snellen test does not address the cause of the color vision change.",
  "type": "mcq",
  "options": [
   "The presence of jugular venous distention",
   "Visual acuity using a Snellen chart",
   "Recent changes in dietary sodium intake",
   "A list of medications taken for the cardiac condition"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q061",
  "exam": 2,
  "src": 414,
  "topic": "Neuro & Sensory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An older woman who has difficulty hearing is being discharged from day surgery after a cataract extraction with lens implantation. Which intervention is most important for the nurse to implement to ensure the client's adherence to self-care?",
  "rationale": "Teach-back, in which the client restates the instructions in her own words, verifies that she heard and understood them despite her hearing loss. Shouting distorts speech and can make understanding harder, written instructions alone may be difficult to read soon after eye surgery, and bypassing the client excludes her from her own care.",
  "type": "mcq",
  "options": [
   "Speak loudly and slowly while giving the instructions.",
   "Have the client repeat back the instructions provided.",
   "Provide only written instructions for her to read later.",
   "Give the instructions to her family instead of the client."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q062",
  "exam": 2,
  "src": 21,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Management of Care",
  "stem": "A 66-year-old woman is retiring and will no longer have health insurance through her place of employment. To which agency should the employee health nurse refer the client for her health insurance needs?",
  "rationale": "Medicare is the federal health insurance program for people 65 years and older, regardless of income, so a 66-year-old retiree is eligible. Medicaid is a means-tested program for people with low income and limited assets. Workers' compensation covers only work-related injuries, and the Veterans Health Administration serves people who meet military service requirements, which is not indicated here.",
  "type": "mcq",
  "options": [
   "Workers' compensation",
   "Medicare",
   "The Veterans Health Administration",
   "Medicaid"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q063",
  "exam": 2,
  "src": 833,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "During a daily assessment of an older woman in a long-term care facility, the client begins to cry and tells the nurse that her family has stopped calling and visiting. Which action should the nurse take first?",
  "rationale": "The nurse first gathers more information directly from the client by asking when family last visited, which clarifies her concern and responds to her feelings. Assessing orientation or reviewing the record may follow, but beginning there can seem dismissive, and reassuring her of her family's love offers false reassurance.",
  "type": "mcq",
  "options": [
   "Ask the client when a family member last visited her.",
   "Reassure the client of her family's love for her.",
   "Determine the client's orientation to time and place.",
   "Review the client's record of social interactions."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q064",
  "exam": 2,
  "src": 747,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "While administering ceftriaxone intravenously to a client before surgery, the nurse assesses the client. Which finding requires the most immediate intervention by the nurse?",
  "rationale": "Stridor indicates laryngeal edema and upper-airway obstruction, a sign of anaphylaxis that requires stopping the infusion and immediate treatment with epinephrine. Nausea and headache are common minor side effects, and pruritus may indicate a mild allergic reaction that needs evaluation but does not threaten the airway.",
  "type": "mcq",
  "options": [
   "Pruritus",
   "Stridor",
   "Nausea",
   "Headache"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q065",
  "exam": 2,
  "src": 397,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "An older adult female admitted to the intensive care unit with a possible stroke is intubated with ventilator settings of tidal volume 600 mL, FiO2 40%, and respiratory rate 12 breaths/minute. ABG results after intubation are pH 7.31, PaCO2 60 mm Hg, PaO2 104 mm Hg, SpO2 98%, HCO3 23 mEq/L. To normalize the ABGs, which action is required?",
  "rationale": "The low pH and high PaCO2 with a normal bicarbonate indicate uncompensated respiratory acidosis from hypoventilation, and increasing the ventilator rate increases minute ventilation, removing CO2 and returning the pH toward normal (prescribed by the provider or per protocol). Sodium bicarbonate treats metabolic acidosis, and oxygenation is adequate, so changing the FiO2 does not correct the CO2 retention.",
  "type": "mcq",
  "options": [
   "Decrease the oxygen concentration.",
   "Report the results to the healthcare provider only.",
   "Administer a dose of sodium bicarbonate.",
   "Increase the ventilator rate."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q066",
  "exam": 2,
  "src": 726,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The psychiatric nurse is talking with a newly admitted client when a male client with antisocial personality disorder interrupts and says, “I have to talk to you right now! It is very important!” How should the nurse respond?",
  "rationale": "Clients with antisocial personality disorder need clear, consistent limits, and telling him the nurse is busy and will talk with him later sets a limit while acknowledging his request. Ignoring him may escalate the behavior, sending him to another nurse rewards the interruption and invites manipulation, and involving him in another client's admission violates that client's privacy.",
  "type": "mcq",
  "options": [
   "Tell him that the nurse is busy admitting a new client and will talk with him later.",
   "Ignore his behavior and continue talking with the newly admitted client.",
   "Introduce him to the new client and invite him to join the conversation.",
   "Encourage him to go to the nurse's station and talk with another nurse."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q067",
  "exam": 2,
  "src": 86,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client presents to the clinic with blepharitis. Which instruction should the nurse provide for home care?",
  "rationale": "Blepharitis is chronic inflammation of the eyelid margins, and daily lid hygiene with warm compresses to loosen crusts followed by gentle scrubbing with diluted baby shampoo is the mainstay of treatment. Cool compresses do not loosen debris, and tap water is not part of lid care. Decongestant drops cause rebound redness and do not treat the lid margins, and patching the eye traps secretions and warmth.",
  "type": "mcq",
  "options": [
   "Apply cool compresses, then rinse the eyes with plain tap water twice a day.",
   "Cover the affected eye with a gauze patch each night until the redness resolves.",
   "Apply warm, moist compresses, then gently scrub the eyelids with dilute baby shampoo.",
   "Instill over-the-counter decongestant eye drops every 4 hours while awake."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q068",
  "exam": 2,
  "src": 362,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult female client is admitted to the psychiatric unit with major depressive disorder. After several weeks of medication therapy, the nurse notices that the client has more energy, is giving away her belongings, and has an elevated mood. Which intervention is best for the nurse to implement?",
  "rationale": "Increased energy as antidepressants begin to work, combined with giving away belongings and a sudden lift in mood, are warning signs that the client may have made a decision to end her life and now has the energy to act on it, so the nurse asks directly about suicidal thoughts. Praising the change, increasing activities or reducing observation would miss a high-risk period.",
  "type": "mcq",
  "options": [
   "Encourage the client to participate in more group activities.",
   "Ask the client if she has had any recent thoughts of harming herself.",
   "Decrease the frequency of the client's safety checks.",
   "Praise the client for her improved energy level and mood."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q069",
  "exam": 2,
  "src": 553,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The mother of a child recently diagnosed with asthma asks the nurse how to protect her child from asthma attacks. To avoid triggers, which instructions should the nurse provide the mother? (Select all that apply.)",
  "rationale": "Common asthma triggers include pollen and outdoor allergens, cold air and sudden temperature changes, and animal dander, so closing car windows, avoiding temperature extremes, limiting exposure to pets and staying indoors during mowing all reduce exposure. Feather bedding and stuffed animals collect dust mites and should be replaced with hypoallergenic materials or removed.",
  "type": "sata",
  "options": [
   "Close the car windows and use the air conditioner.",
   "Avoid sudden changes in temperature.",
   "Keep several stuffed animals on the child's bed.",
   "Keep the child away from pets with long hair.",
   "Stay indoors when grass is being cut.",
   "Use feather pillows and down comforters on the bed."
  ],
  "correct": [
   0,
   1,
   3,
   4
  ]
 },
 {
  "id": "hesi2q070",
  "exam": 2,
  "src": 162,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with HIV and pulmonary coccidioidomycosis is receiving amphotericin B. Which assessment finding should the nurse report to the healthcare provider?",
  "rationale": "Amphotericin B is highly nephrotoxic, and urine output below 30 mL/hour suggests acute kidney injury that requires dose adjustment or other intervention. Fever, chills and headache are common infusion reactions that are anticipated and managed with premedication such as acetaminophen and diphenhydramine. A potassium of 4.0 mEq/L is normal, although amphotericin can cause hypokalemia that must be monitored.",
  "type": "mcq",
  "options": [
   "Headache relieved by acetaminophen",
   "Urinary output of 25 mL/hour",
   "Serum potassium level of 4.0 mEq/L",
   "Chills and fever during the first infusion"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q071",
  "exam": 2,
  "src": 408,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An older male client with a history of diabetes mellitus, chronic gout, and osteoarthritis comes to the clinic with a bag of medication bottles. Which intervention should the nurse implement first?",
  "rationale": "Older adults with several chronic conditions are at high risk for polypharmacy, duplications and interactions, so reviewing every medication he brought, including over-the-counter and herbal products, is the first step and informs the rest of the assessment. Pain evaluation, glucose measurement and the medical history are all needed, but the bag of bottles signals that medication reconciliation is the immediate concern.",
  "type": "mcq",
  "options": [
   "Obtain a medical history.",
   "Identify the pills in the bag.",
   "Assess the blood glucose.",
   "Record a pain evaluation."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q072",
  "exam": 2,
  "src": 142,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with Alzheimer's disease (AD) is receiving trazodone, a recently prescribed atypical antidepressant. The caregiver tells the home health nurse that the client's mood and sleep patterns have improved but there is no change in cognitive ability. How should the nurse respond to this information?",
  "rationale": "Trazodone is prescribed for clients with Alzheimer's disease to improve depressed mood and sleep, not cognition, so improved mood and sleep indicate the medication is working. It does not slow cognitive decline, so waiting several weeks for cognitive change, notifying the provider or questioning administration would be based on a mistaken expectation.",
  "type": "mcq",
  "options": [
   "Evaluate when and how the medication is being administered to the client.",
   "Explain that it may take several weeks for the medication to be effective.",
   "Notify the healthcare provider that a change may be needed.",
   "Confirm that the desired effect of the medication has been achieved."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q073",
  "exam": 2,
  "src": 1,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A 2-year-old is bleeding from a laceration on the right lower extremity sustained in a motor vehicle collision. The nurse is selecting supplies to start IV access. Which assessment finding is most significant in the nurse's selection of catheter size?",
  "rationale": "A weak, thready pulse indicates hypovolemia from blood loss and impending hypovolemic shock, so the child needs the largest-bore catheter the veins will accommodate to allow rapid fluid and blood replacement. A respiratory rate of 24/minute is within normal limits for a 2-year-old. A cool right foot and swelling at the injury site are local findings related to the extremity wound; they do not determine the catheter gauge needed for resuscitation.",
  "type": "mcq",
  "options": [
   "Respirations of 24/minute",
   "Thready brachial pulse",
   "Right foot cool to touch",
   "Swelling at the site of injury"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q074",
  "exam": 2,
  "src": 7,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A 10-year-old who has terminal brain cancer asks the nurse, “What will happen to my body when I die?” How should the nurse respond?",
  "rationale": "School-age children understand death concretely and want factual, honest answers, so a simple physiologic explanation is most appropriate. Comparing death to sleep can make a child afraid to fall asleep. Deferring the question until the parents arrive avoids the child's direct request for information and may increase anxiety, and a “why” question puts the child on the defensive and blocks therapeutic communication.",
  "type": "mcq",
  "options": [
   "“Let's talk about that when your parents are here.”",
   "“You will go to sleep and you just won't wake up.”",
   "“Why are you thinking about dying right now?”",
   "“Your heart will stop beating and you will stop breathing.”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q075",
  "exam": 2,
  "src": 313,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A young adult female presents to the emergency department with acute lower abdominal pain. Which assessment finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "Acute lower abdominal pain in a woman of childbearing age with a missed period suggests a possible ectopic pregnancy, which can rupture and cause life-threatening intra-abdominal hemorrhage, so a pregnancy test and urgent evaluation are needed. Severe pain must be treated, but the missed period identifies the most dangerous cause. White, curdy discharge suggests candidiasis, and a history of IBS does not explain a new acute presentation.",
  "type": "mcq",
  "options": [
   "Pain rated 9 on a 0-to-10 scale",
   "Reports white, curdy vaginal discharge",
   "History of irritable bowel syndrome (IBS)",
   "Last menstrual period was 7 weeks ago"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q076",
  "exam": 2,
  "src": 818,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "While assisting a male client with muscular dystrophy (MD) to the bathroom, the nurse observes that he is awkward and clumsy. He expresses frustration and complains of hip discomfort. Which intervention should the nurse implement?",
  "rationale": "A bedside commode reduces the distance the client must walk, decreasing his risk of falling and his discomfort while preserving as much independence as possible. Increasing walking distance does not strengthen muscles in progressive MD and raises fall risk, a bedpan for all toileting promotes unnecessary dependence, and a hip brace is not indicated.",
  "type": "mcq",
  "options": [
   "Restrict him to using a bedpan for all toileting.",
   "Apply a hip brace before each trip to the bathroom.",
   "Place a portable bedside commode next to the bed.",
   "Encourage him to walk farther to build hip strength."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q077",
  "exam": 2,
  "src": 111,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client taking an oral dose of tetracycline complains of gastrointestinal upset. Which snack should the nurse instruct the client to take with the tetracycline?",
  "rationale": "Tetracycline binds with calcium in dairy products, as well as with iron, magnesium and aluminum, forming insoluble complexes that greatly reduce absorption; if a food is needed for GI upset, a non-dairy snack such as toast with jelly is appropriate. Cheese, yogurt and milk are calcium-rich dairy foods that should be avoided within 1 to 2 hours of the dose.",
  "type": "mcq",
  "options": [
   "Milk and oatmeal cookies",
   "Vanilla yogurt with granola",
   "Cheddar cheese and crackers",
   "Toasted wheat bread and jelly"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q078",
  "exam": 2,
  "src": 64,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client is admitted with a wound on the right hand and associated cellulitis. In assessing the client's hand, which finding requires the most immediate follow-up by the nurse?",
  "rationale": "Cyanotic nailbeds suggest impaired circulation to the hand, possibly from swelling causing vascular compromise or compartment syndrome, which threatens tissue viability and requires immediate follow-up. Localized tenderness, diffuse erythema and warmth are expected inflammatory findings of cellulitis that are monitored and treated with antibiotics.",
  "type": "mcq",
  "options": [
   "Skin hot to touch",
   "Diffuse erythema",
   "Cyanotic nailbeds",
   "Localized tenderness"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q079",
  "exam": 2,
  "src": 133,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with a postoperative wound that eviscerated yesterday now has an elevated temperature and purulent drainage from the wound. Which intervention is most important for the nurse to implement?",
  "rationale": "Fever and drainage from a recently eviscerated wound suggest infection, and a culture and sensitivity identifies the organism and guides antibiotic therapy; it should be obtained before antibiotics are started. A binder may support an incision but does not treat infection. Full-strength hydrogen peroxide damages granulation tissue, and forceful coughing increases intra-abdominal pressure and stress on the wound.",
  "type": "mcq",
  "options": [
   "Apply an abdominal binder snugly over the wound.",
   "Irrigate the wound with full-strength hydrogen peroxide.",
   "Obtain a wound swab for culture and sensitivity.",
   "Encourage the client to cough forcefully every hour."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q080",
  "exam": 2,
  "src": 183,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with severe full-thickness burns is scheduled for an allografting procedure. Which information should the nurse provide the client?",
  "rationale": "An allograft (homograft) is skin from a human donor, usually cadaver skin, used as a temporary biologic dressing; because it is foreign tissue, the client must be monitored for rejection. Skin taken from the client's own unburned area is an autograft, and pig skin is a xenograft, which provides only temporary coverage. Grafted areas are covered with dressings and protected from shearing.",
  "type": "mcq",
  "options": [
   "Pig-skin grafts provide permanent coverage of the burned areas.",
   "The graft site will be left open to air without any dressing.",
   "Human-source grafts require monitoring for signs of graft rejection.",
   "The graft will be taken from an unburned area of the client's own skin."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q081",
  "exam": 2,
  "src": 750,
  "topic": "GI & Nutrition",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "When assessing a mildly obese 35-year-old female client, the nurse is unable to palpate the gallbladder below the liver margin at the lateral border of the rectus abdominis muscle. What is the most likely explanation for being unable to locate the gallbladder by palpation?",
  "rationale": "A normal gallbladder is not palpable; it may become palpable when it is distended or inflamed. The location described is correct for the gallbladder, mild obesity does not explain the finding, and deep palpation is not needed to confirm a normal finding.",
  "type": "mcq",
  "options": [
   "The gallbladder is normal.",
   "The nurse is palpating in the wrong quadrant.",
   "The client is too obese for palpation.",
   "A deeper palpation technique is needed."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q082",
  "exam": 2,
  "src": 413,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "An older male admitted with end-stage chronic obstructive pulmonary disease (COPD) tells the nurse that he does not want to be resuscitated and gives the nurse his living will and a signed DNR request. Which action should the nurse implement?",
  "rationale": "A living will expresses the client's wishes, but a do-not-resuscitate order in the hospital requires a written prescription from the healthcare provider, so the nurse obtains one to ensure the wishes are honored. Filing the documents without obtaining the order leaves the client at risk of unwanted resuscitation, advance directives are valid in the hospital, and a competent client does not need family confirmation.",
  "type": "mcq",
  "options": [
   "Ask the client's family to confirm his wishes before acting.",
   "Explain that these documents are not valid in the hospital.",
   "Obtain a prescription for DNR from the healthcare provider.",
   "File the documents in the chart and take no further action."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q083",
  "exam": 2,
  "src": 375,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An adult man reports that he recently had an episode of chest pressure and breathlessness while jogging. He is concerned because both of his deceased parents had heart disease and his father had diabetes. He lives with his male partner, is a vegetarian, and takes atenolol, which maintains his blood pressure at 138/74 mm Hg. Which risk factors should the nurse explore further with the client? (Select all that apply.)",
  "rationale": "Hypertension and a family history of heart disease are major risk factors for coronary artery disease and should be explored further. His partner's gender is not a cardiac risk factor. A vegetarian diet and regular aerobic exercise are protective health behaviors, although exertional chest pressure itself requires prompt evaluation.",
  "type": "sata",
  "options": [
   "History of hypertension",
   "Regular jogging",
   "Sexual orientation",
   "Family health history",
   "Vegetarian diet"
  ],
  "correct": [
   0,
   3
  ]
 },
 {
  "id": "hesi2q084",
  "exam": 2,
  "src": 676,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is teaching a group of clients with rheumatoid arthritis about the need to modify daily activities. Which goal should the nurse emphasize?",
  "rationale": "Joint protection, such as using larger joints, assistive devices, energy conservation and balancing rest with activity, reduces stress on inflamed joints and helps prevent deformity and preserve function in rheumatoid arthritis. Improving circulation, controlling tremors and increasing weight bearing are not the goals of activity modification in RA.",
  "type": "mcq",
  "options": [
   "Increase weight bearing",
   "Protect joint function",
   "Improve circulation",
   "Control tremors"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q085",
  "exam": 2,
  "src": 581,
  "topic": "Renal & GU",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse identifies an electrolyte imbalance, an elevated pulse rate, and elevated blood pressure in a client with chronic kidney disease. Which action is most important for the nurse to take?",
  "rationale": "Failing kidneys cannot excrete potassium, and hyperkalemia can cause fatal dysrhythmias, so the nurse first assesses the heart rhythm. Monitoring sodium intake, reviewing eating patterns and measuring edema address the fluid overload but are not as urgent as detecting a life-threatening dysrhythmia.",
  "type": "mcq",
  "options": [
   "Monitor the daily sodium intake.",
   "Auscultate for an irregular heart rate.",
   "Measure the ankle circumference.",
   "Record the client's usual eating patterns."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q086",
  "exam": 2,
  "src": 622,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is caring for four clients on the rehabilitation unit. Which client should the nurse assess first?",
  "rationale": "Vomiting during a continuous tube feeding places the client at high risk for aspiration and airway compromise, so the nurse stops the feeding and assesses this client first. Phantom pain needs treatment but is not life-threatening, and the clients awaiting dialysis and pulmonary function testing are stable.",
  "type": "mcq",
  "options": [
   "A client with an above-the-knee amputation who reports phantom pain",
   "A client receiving a continuous tube feeding who is now vomiting",
   "A client with pneumonia who is scheduled for pulmonary function studies",
   "A client with left hemiplegia who is scheduled for hemodialysis today"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q087",
  "exam": 2,
  "src": 206,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A female client reports that her hair is becoming coarse and breaking off, that the outer parts of her eyebrows have disappeared, and that her eyes are puffy. Which follow-up question is best for the nurse to ask?",
  "rationale": "Coarse, brittle hair, loss of the lateral third of the eyebrows and periorbital edema suggest hypothyroidism, which also causes thick, brittle nails, so asking about nail changes gathers further supporting data. Heat intolerance, unintended weight loss and more frequent bowel movements are manifestations of hyperthyroidism.",
  "type": "mcq",
  "options": [
   "“Are you having more frequent bowel movements?”",
   "“Have you been feeling unusually warm lately?”",
   "“Have you lost weight without trying to?”",
   "“Have you noticed any changes in your fingernails?”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q088",
  "exam": 2,
  "src": 675,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is teaching a client with atrial fibrillation about a newly prescribed medication, dronedarone. Which information should the nurse include? (Select all that apply.)",
  "rationale": "Dronedarone is metabolized by CYP3A4, so grapefruit and many supplements and drugs, such as St. John's wort, alter its levels, and it can cause severe liver injury, so jaundice must be reported. It must be taken consistently to control the rhythm, and it is taken twice daily with the morning and evening meals rather than on an empty stomach.",
  "type": "sata",
  "options": [
   "Take the medication on an empty stomach at bedtime.",
   "Notify your healthcare provider if your skin looks yellow.",
   "Skip doses on days when your heartbeat feels regular.",
   "Report any changes in your use of daily supplements.",
   "Avoid eating grapefruit or drinking grapefruit juice."
  ],
  "correct": [
   1,
   3,
   4
  ]
 },
 {
  "id": "hesi2q089",
  "exam": 2,
  "src": 338,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "After receiving lactulose, a client with hepatic encephalopathy has several loose stools. Which action should the nurse implement?",
  "rationale": "Lactulose is expected to produce two to three soft stools daily as it traps ammonia in the colon for excretion, so loose stools indicate the drug is working; the nurse evaluates its effectiveness by monitoring for improved mental status. Holding the dose or giving an antidiarrheal would allow ammonia to accumulate, and expected stools do not need to be reported unless they are excessive or cause dehydration.",
  "type": "mcq",
  "options": [
   "Administer a PRN antidiarrheal.",
   "Hold the next dose of lactulose.",
   "Notify the provider of the diarrhea.",
   "Monitor mental status."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q090",
  "exam": 2,
  "src": 836,
  "topic": "Renal & GU",
  "clientNeed": "Physiological Adaptation",
  "stem": "While undergoing hemodialysis, a male client suddenly complains of dizziness. He is alert and oriented, but his skin is cool and clammy. His vital signs are heart rate 128 beats/minute, respirations 18 breaths/minute, and blood pressure 90/60 mm Hg. Which intervention should the nurse implement first?",
  "rationale": "Hypotension is the most common complication during hemodialysis, caused by rapid fluid removal, and raising the legs increases venous return and blood pressure while the nurse reduces or pauses ultrafiltration and gives a saline bolus as prescribed. Increasing fluid removal or giving an antihypertensive would worsen the hypotension, and an upright position reduces cerebral perfusion.",
  "type": "mcq",
  "options": [
   "Place the client in a high Fowler's position.",
   "Raise the client's legs and feet.",
   "Administer a prescribed antihypertensive.",
   "Increase the ultrafiltration rate."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q091",
  "exam": 2,
  "src": 794,
  "topic": "Respiratory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which information is most important for the nurse to obtain when determining a client's risk for obstructive sleep apnea syndrome (OSAS)?",
  "rationale": "Obesity is the strongest risk factor for obstructive sleep apnea because excess tissue in the neck and pharynx narrows the airway during sleep, so body mass index (along with neck circumference) is key to the risk assessment. Level of consciousness, pain and breath sounds do not indicate risk for OSAS.",
  "type": "mcq",
  "options": [
   "Self-description of pain",
   "Body mass index",
   "Breath sounds",
   "Level of consciousness"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q092",
  "exam": 2,
  "src": 366,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "An adult male client is admitted to the emergency department after an automobile collision in which he sustained a head injury. Which assessment finding would provide the earliest indication that the client is experiencing increased intracranial pressure (ICP)?",
  "rationale": "A change in level of consciousness, such as lethargy, restlessness or slowed responses, is the earliest and most sensitive indicator of increasing ICP. Decorticate posturing and a fixed, dilated pupil are late signs of brainstem compression. Clear drainage from the ear suggests a CSF leak from a basilar skull fracture rather than rising ICP.",
  "type": "mcq",
  "options": [
   "Lethargy",
   "Clear drainage from the ear",
   "Fixed, dilated pupil",
   "Decorticate posturing"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q093",
  "exam": 2,
  "src": 265,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "A mother brings her 6-year-old child, who has just stepped on a rusty nail, to the pediatrician's office. The nurse notes that the nail went through the shoe and pierced the bottom of the child's foot. Which action should the nurse implement first?",
  "rationale": "Immediate wound cleansing with soap and water removes debris and reduces the bacterial load, which is the first step for any puncture wound. Tetanus immunization status is then reviewed; a booster is given promptly if indicated rather than within 72 hours, and tetanus immune globulin is reserved for children who are incompletely immunized. Temperature monitoring is part of later teaching.",
  "type": "mcq",
  "options": [
   "Have the mother check the child's temperature every 4 hours for 24 hours.",
   "Cleanse the foot with soap and water and apply an antibiotic ointment.",
   "Provide teaching about the need for a tetanus booster within the next 72 hours.",
   "Transfer the child to the emergency department for a gamma globulin injection."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q094",
  "exam": 2,
  "src": 661,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing to administer 1.6 mL of medication IM to a 4-month-old infant. Which action should the nurse include?",
  "rationale": "The infant's vastus lateralis muscle can safely hold only about 0.5 to 1 mL, so a larger volume is divided into two injections given at separate sites. A 1½-inch needle is too long for an infant (5/8 to 1 inch is used), the deltoid is too small in infants, and the dorsogluteal site is avoided because of the risk of sciatic nerve injury.",
  "type": "mcq",
  "options": [
   "Use a quick, dart-like motion to inject into the dorsogluteal site.",
   "Divide the medication into two injections of less than 1 mL each.",
   "Administer it into the deltoid muscle while the parent holds the infant.",
   "Select a 22-gauge, 1½-inch (3.8 cm) needle for the injection."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q095",
  "exam": 2,
  "src": 706,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse receives a newborn within the first minutes after a vaginal birth and intervenes to establish adequate respirations. Which priority issue should the nurse address next to ensure the newborn's survival?",
  "rationale": "After airway and breathing, thermoregulation is the next priority, because newborns lose heat rapidly through evaporation, convection, conduction and radiation, and cold stress increases oxygen and glucose consumption and can cause hypoxia, hypoglycemia and metabolic acidosis. Hypoglycemia, fluid balance and bleeding tendencies (prevented with vitamin K) are monitored but follow drying and warming the infant.",
  "type": "mcq",
  "options": [
   "Bleeding tendencies",
   "Hypoglycemia",
   "Fluid balance",
   "Heat loss"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q096",
  "exam": 2,
  "src": 71,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is being treated for syndrome of inappropriate antidiuretic hormone (SIADH). On examination, the client has gained 4.4 lb (2 kg) in 24 hours and has an elevated blood pressure. Which intervention should the nurse implement first?",
  "rationale": "A 2 kg gain in 24 hours represents about 2 liters of retained water, and the rising blood pressure signals fluid volume excess, so ensuring the prescribed diuretic is given treats the retained fluid. Creatinine levels and ankle circumference are monitoring measures that do not correct the problem. SIADH causes dilutional hyponatremia, so restricting sodium intake is not the priority; fluid restriction is.",
  "type": "mcq",
  "options": [
   "Ensure the client takes a diuretic every morning.",
   "Measure the client's ankle circumference.",
   "Obtain serum creatinine levels daily.",
   "Monitor the client's daily sodium intake."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q097",
  "exam": 2,
  "src": 484,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "While assessing an adult client wearing a partial rebreather mask, the nurse notes that the oxygen reservoir bag does not deflate completely during inspiration and the client's respiratory rate is 14 breaths/minute. Which action should the nurse implement?",
  "rationale": "The reservoir bag of a partial rebreather should remain at least one-third to one-half full throughout inspiration, and a respiratory rate of 14 is normal, so the device is working correctly and the findings are documented. The flow rate is increased only if the bag collapses, and changing to a different device is not indicated when the client is stable.",
  "type": "mcq",
  "options": [
   "Remove the mask and apply a nasal cannula.",
   "Increase the oxygen flow rate.",
   "Replace the mask with a non-rebreather mask.",
   "Document the assessment data."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q098",
  "exam": 2,
  "src": 298,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A school nurse is called to the soccer field because a child has a nosebleed (epistaxis). In which position should the nurse place the child?",
  "rationale": "Sitting up and leaning forward while pinching the soft part of the nose for about 10 minutes reduces venous pressure and allows blood to drain out of the nose rather than down the throat. Tilting the head back or lying supine causes blood to be swallowed or aspirated, which can cause nausea, vomiting and airway compromise.",
  "type": "mcq",
  "options": [
   "Sitting up with the head tilted back",
   "Lying supine with the head tilted back",
   "Lying on the side with the legs elevated",
   "Sitting up and leaning forward"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q099",
  "exam": 2,
  "src": 744,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "What is the primary goal when planning nursing care for a client with degenerative joint disease (DJD)?",
  "rationale": "Degenerative joint disease (osteoarthritis) is a chronic, progressive condition without a cure, so care focuses on controlling pain and maintaining function. Joint degeneration cannot be halted, prolonged rest increases stiffness and weakness, and most clients need ongoing analgesics or anti-inflammatory medications.",
  "type": "mcq",
  "options": [
   "Halt the progression of joint degeneration.",
   "Achieve satisfactory pain control.",
   "Eliminate the need for all medications.",
   "Maintain complete rest of the affected joints."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q100",
  "exam": 2,
  "src": 717,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse weighs a 6-month-old infant at a well-baby visit and finds that the infant's weight has tripled compared with the birth weight of 7 pounds 8 ounces. The mother asks whether the baby is gaining enough weight. Which response should the nurse offer?",
  "rationale": "Infants normally double their birth weight by about 5 to 6 months and triple it by 12 months, so a tripled weight at 6 months suggests excessive gain, and a diet history helps identify overfeeding or early introduction of solids and juice. The previous weight is less useful than the feeding pattern, and stating that the baby is underweight or on schedule is inaccurate.",
  "type": "mcq",
  "options": [
   "“What was the baby's weight at the last well-baby visit?”",
   "“Your baby is gaining weight right on schedule.”",
   "“The baby is below the normal percentile for weight gain.”",
   "“What foods does your baby usually eat in a normal day?”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q101",
  "exam": 2,
  "src": 36,
  "topic": "Maternity & Newborn",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client at 30 weeks' gestation is admitted with preterm labor. Terbutaline sulfate 0.25 mg is given subcutaneously. Based on which finding should the nurse withhold the next dose of this drug?",
  "rationale": "Terbutaline is a beta-adrenergic agonist that commonly causes maternal tachycardia; a maternal heart rate above about 120 beats/minute is the usual threshold for withholding the drug and notifying the provider because of the risk of dysrhythmias and pulmonary edema. A fetal heart rate of 150 beats/minute is within the normal range of 110 to 160. A glucose of 110 mg/dL is acceptable, although terbutaline can raise glucose, and continuing contractions are the reason the medication is being given.",
  "type": "mcq",
  "options": [
   "Maternal pulse rate of 162 beats/minute",
   "Uterine contractions every 10 minutes",
   "Fetal heart rate of 150 beats/minute",
   "Maternal blood glucose of 110 mg/dL"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q102",
  "exam": 2,
  "src": 651,
  "topic": "GI & Nutrition",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is preparing a client for discharge after a liver transplant. Which instruction is most important for the nurse to include in the discharge teaching plan?",
  "rationale": "Lifelong immunosuppressants increase the risk of serious infection, which may present only as a fever, so temperature monitoring and prompt reporting are essential. Increasing girth and jaundice may signal rejection or graft dysfunction and should also be reported, but infection is the leading early cause of complications, and recording urine output is less important.",
  "type": "mcq",
  "options": [
   "Keep a record of daily urinary output.",
   "Measure the abdominal girth daily.",
   "Report the onset of scleral jaundice.",
   "Monitor for an elevated temperature."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q103",
  "exam": 2,
  "src": 269,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A Native American male client diagnosed with pneumonia states that, in addition to his prescribed IV antibiotics, he wishes to have a spiritual cleansing performed. Which outcome statement indicates that the best plan of care was followed?",
  "rationale": "Culturally competent care integrates the client's traditional practices with the prescribed medical treatment when there is no conflict, and active participation in both regimens shows that the plan honored his values while achieving treatment goals. Identifying ethnocentric values is a task for the caregiver, not the client. Understanding only the medical treatment ignores his spiritual needs, and the goal is not for him to abandon his culture through assimilation.",
  "type": "mcq",
  "options": [
   "Participated actively in all treatment regimens",
   "Expresses a desire for cultural assimilation",
   "Identifies his ethnocentric values and behaviors",
   "States an understanding of the medical treatment"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q104",
  "exam": 2,
  "src": 57,
  "topic": "Respiratory",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client is admitted to isolation with a diagnosis of active tuberculosis (TB). Which infection control measure should the nurse implement?",
  "rationale": "Tuberculosis is transmitted by airborne droplet nuclei, so airborne precautions require a negative-pressure airborne infection isolation room and an N95 respirator for staff. Contact precautions are used for organisms spread by touch, such as MRSA, and droplet precautions for larger particles such as influenza. A protective environment uses positive pressure to protect immunocompromised clients and would push TB particles into the hallway.",
  "type": "mcq",
  "options": [
   "Negative-pressure environment",
   "Contact precautions",
   "Droplet precautions",
   "Protective environment"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q105",
  "exam": 2,
  "src": 27,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A child newly diagnosed with sickle cell anemia (SCA) is being discharged from the hospital. Which information is most important for the nurse to provide the parents prior to discharge?",
  "rationale": "Adequate hydration reduces blood viscosity and helps prevent the stasis-thrombosis-ischemia cycle that triggers a vaso-occlusive crisis, so a specific daily fluid plan is the most important teaching point. Non-pharmacologic pain measures and social service referrals are helpful supports but do not prevent crises. Focusing on addiction is inappropriate; children in crisis need adequate opioid analgesia, and fear of addiction leads to undertreated pain.",
  "type": "mcq",
  "options": [
   "Information about non-pharmacologic pain relief measures",
   "Instructions about how much fluid the child should drink daily",
   "Signs of addiction to opioid medications",
   "A referral to social services for the child and family"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q106",
  "exam": 2,
  "src": 210,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A female client with acute respiratory distress syndrome (ARDS) is chemically paralyzed and sedated while on an assist-control ventilator at 50% FiO2. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "High airway pressures and PEEP in ARDS increase the risk of barotrauma, and newly diminished breath sounds over one lobe suggest a pneumothorax, lobar collapse or tube migration that requires immediate evaluation and possible chest tube insertion. A paralyzed client is not expected to breathe spontaneously. A heart rate of 98 is acceptable, and a saturation of 92% meets the usual ARDS oxygenation target of 88% to 95%.",
  "type": "mcq",
  "options": [
   "Diminished left lower lobe breath sounds",
   "Absence of spontaneous respiratory effort",
   "Heart rate of 98 beats/minute",
   "Oxygen saturation of 92%"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q107",
  "exam": 2,
  "src": 149,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with a C6 spinal cord injury is in rehabilitation. In the middle of the night, the client reports a severe, pounding headache and has observable piloerection (goosebumps). The nurse should assess for which trigger?",
  "rationale": "A pounding headache with piloerection in a client with an injury at T6 or above signals autonomic dysreflexia, an exaggerated sympathetic response to a noxious stimulus below the level of injury, and the most common trigger is a distended bladder, followed by bowel impaction and skin pressure. Noise, fever and coughing are not typical triggers of this emergency.",
  "type": "mcq",
  "options": [
   "Frequent cough",
   "Fever",
   "Full bladder",
   "Loud hallway noise"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q108",
  "exam": 2,
  "src": 236,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A male client returns to the mental health clinic for help with his anxiety reaction, which is manifested by a rapid heartbeat, sweating, shaking, and nausea while driving over the bay bridge. Which action in the treatment plan should the nurse implement?",
  "rationale": "Anxiety-reducing strategies such as distraction with music or audiobooks support gradual desensitization, allowing the client to face the triggering situation while controlling symptoms. Repeatedly driving over the bridge until the fear subsides is flooding, which requires professional guidance. Having someone else drive and avoiding the bridge reinforce avoidance behavior and strengthen the phobia.",
  "type": "mcq",
  "options": [
   "Encourage the client to have his spouse drive in stressful places.",
   "Tell the client to drive over the bridge until the fear is manageable.",
   "Teach the client to listen to music or audiobooks while driving.",
   "Recommend that the client avoid driving over the bridge."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q109",
  "exam": 2,
  "src": 352,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An adolescent with major depressive disorder has been taking duloxetine for the past 12 days. Which assessment finding requires immediate follow-up?",
  "rationale": "Antidepressants carry a boxed warning for increased suicidal thinking in children, adolescents and young adults, especially during the first weeks of therapy, and describing life as without purpose suggests hopelessness and possible suicidal ideation that requires immediate assessment. Mild nausea is a common transient side effect, and adequate sleep and improved appetite may indicate a therapeutic response.",
  "type": "mcq",
  "options": [
   "Sleeps about 9 hours each night",
   "Reports mild nausea after taking the medication",
   "States that appetite has improved",
   "Describes life as being without purpose"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q110",
  "exam": 2,
  "src": 252,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A male client with hypertension who received new antihypertensive prescriptions at his last visit returns to the clinic two weeks later. His blood pressure (BP) is 158/106 mm Hg, and he admits he has not been taking the medication because the drugs make him “feel bad.” In explaining the need for hypertension control, the nurse should stress that an elevated BP places the client at risk for which pathophysiologic condition?",
  "rationale": "Sustained high pressure weakens cerebral arterioles and can cause them to rupture, so uncontrolled hypertension is a leading cause of hemorrhagic stroke, a consequence that may motivate adherence. Pulmonary embolism results from venous thrombosis, portal congestion is related to liver disease or right-sided heart failure, and aortic stenosis is primarily degenerative valve disease rather than a direct result of hypertension.",
  "type": "mcq",
  "options": [
   "Pulmonary embolism from venous stasis",
   "Stroke secondary to hemorrhage",
   "Hepatic failure from portal congestion",
   "Aortic stenosis from valve calcification"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q111",
  "exam": 2,
  "src": 560,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse and an unlicensed assistive personnel (UAP) are caring for a client with a nasogastric tube (NGT) when the client begins to vomit. How should the nurse manage this situation?",
  "rationale": "Vomiting around an NG tube suggests the tube is obstructed or displaced, so the nurse, who is responsible for assessing and irrigating the tube, checks placement and irrigates it, while the UAP performs the measurement task within the UAP's scope. Irrigating an NG tube and auscultating bowel sounds are assessment-based tasks that cannot be delegated, and UAPs do not handle medications.",
  "type": "mcq",
  "options": [
   "Determine whether hematemesis is present while the UAP irrigates the NGT.",
   "Assess the appearance of the emesis while the UAP checks bowel sounds.",
   "Instruct the UAP to bring an antiemetic to the nurse at the bedside.",
   "Direct the UAP to measure the emesis while the nurse irrigates the NGT."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q112",
  "exam": 2,
  "src": 528,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "The first defibrillator paddle has been placed on a client's chest just to the right of the upper sternum below the clavicle. Where should the nurse place the second paddle?",
  "rationale": "In anterolateral placement, one paddle goes to the right of the upper sternum below the clavicle and the other over the cardiac apex, lateral to the left nipple in the midaxillary line, so the current passes through the bulk of the ventricular myocardium. Placing paddles over the sternum, on the right lower chest or on the upper left chest would direct the current away from the ventricles.",
  "type": "mcq",
  "options": [
   "On the left upper chest just below the clavicle",
   "On the right lower chest at the fifth intercostal space in the midclavicular line",
   "Left of the nipple at the fifth intercostal space in the midaxillary line",
   "Directly over the sternum at the level of the fourth intercostal space"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q113",
  "exam": 2,
  "src": 478,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is initiating IV fluid replacement for a child who has dry, sticky mucous membranes, flushed skin, and a fever of 103.6° F. Laboratory findings indicate a serum sodium of 156 mEq/L. Which physiologic mechanism contributes to this finding?",
  "rationale": "Fever increases insensible water loss through the skin and lungs, and losing water in excess of sodium concentrates the serum, producing hypernatremia (above 145 mEq/L). The IV fluids are being started to correct the problem rather than causing it. Fluid losses increase, not decrease, blood viscosity, and fever-related vasodilation explains the flushed skin but not the high sodium.",
  "type": "mcq",
  "options": [
   "Hypothalamic resetting of core temperature causes vasodilation to reduce heat.",
   "Insensible loss of body fluids contributes to hemoconcentration of serum solutes.",
   "The intravenous fluid replacement is a hypertonic solution of sodium chloride.",
   "Urinary and gastrointestinal losses reduce blood viscosity and stimulate thirst."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q114",
  "exam": 2,
  "src": 703,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse has spiked an IV solution bag, primed the tubing, connected it to the client's flushed saline lock, and programmed the infusion pump. Which action should the nurse take next?",
  "rationale": "With the tubing primed, connected and the pump programmed, the roller clamp must be opened for the fluid to flow; a closed clamp is a common cause of an occlusion alarm. Filling the drip chamber completely prevents drops from being seen and counted, clamping the saline lock stops the infusion, and the bag hangs above the level of the heart.",
  "type": "mcq",
  "options": [
   "Lower the IV bag below the level of the client's heart.",
   "Squeeze the drip chamber until it is completely full.",
   "Clamp the extension tubing of the saline lock.",
   "Open the roller clamp on the tubing."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q115",
  "exam": 2,
  "src": 808,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Which needle should the nurse use to administer intravenous (IV) fluids through a client's implanted port?",
  "rationale": "An implanted port is accessed with a noncoring Huber needle, whose deflected tip slices rather than cores the silicone septum, preserving the septum's ability to reseal through many punctures. Standard hypodermic and butterfly needles core out pieces of the septum, causing leaks and possible emboli, and an over-the-needle catheter is designed for peripheral venipuncture.",
  "type": "mcq",
  "options": [
   "A standard hypodermic needle",
   "An over-the-needle IV catheter",
   "A noncoring (Huber) needle",
   "A winged steel butterfly needle"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q116",
  "exam": 2,
  "src": 672,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is reviewing a client's electrocardiogram and determines that the PR interval (PRI) is prolonged. What does this finding indicate?",
  "rationale": "The PR interval represents the time for an impulse to travel from the SA node through the atria and AV node to the ventricles, and a PRI longer than 0.20 seconds indicates delayed AV conduction, as in first-degree heart block. A slow SA node rate is sinus bradycardia, impulses from outside the SA node produce ectopic or junctional rhythms, and delayed ventricular conduction widens the QRS complex.",
  "type": "mcq",
  "options": [
   "Increased conduction time from the SA node through the AV junction",
   "Inability of the SA node to initiate an impulse at the normal rate",
   "Interference with conduction through one or both ventricles",
   "Initiation of the impulses from a location outside the SA node"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q117",
  "exam": 2,
  "src": 536,
  "topic": "Maternity & Newborn",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes carboprost tromethamine (Hemabate) 250 mcg IM for a multigravida postpartum client who is experiencing heavy, bright red vaginal bleeding. Prior to administering this medication, which intervention should the RN implement?",
  "rationale": "Carboprost, a prostaglandin that stimulates uterine contraction, very commonly causes nausea, vomiting and diarrhea, so a prescribed antiemetic is given before or with the dose to prevent vomiting in a client who is already hemorrhaging. Additional IV access and a catheter may be part of hemorrhage management but are not specific preparations for this drug, and carboprost can cause fever and chills, so cooling the room is not indicated.",
  "type": "mcq",
  "options": [
   "Obtain a second IV access.",
   "Give the prescribed antiemetic.",
   "Insert an indwelling catheter.",
   "Decrease the room temperature."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q118",
  "exam": 2,
  "src": 718,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A nurse working on a surgical unit receives change-of-shift report. A client with which condition requires the most immediate attention by the nurse?",
  "rationale": "Fever and chills two days after bowel surgery suggest an anastomotic leak, peritonitis or developing sepsis, which can progress rapidly to septic shock and requires immediate assessment. A small area of dark drainage, 50 mL of drainage after mastectomy and 100 mL of chest tube drainage over 8 hours are within expected limits.",
  "type": "mcq",
  "options": [
   "Gunshot wound three hours ago with 2 cm of dark drainage noted on the dressing",
   "Collapsed lung after a fall 8 hours ago with 100 mL of blood in the chest tube container",
   "Mastectomy 2 days ago with 50 mL of bloody drainage in the Jackson-Pratt drain",
   "Abdominal-perineal resection 2 days ago with no dressing drainage, who has fever and chills"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q119",
  "exam": 2,
  "src": 575,
  "topic": "Neuro & Sensory",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse ends the assessment of a client by performing a mental status examination. Which statement correctly describes the purpose of the mental status examination?",
  "rationale": "The mental status examination evaluates appearance, behavior, mood and affect, thought processes, cognition, orientation, memory and judgment to identify abnormalities in mental functioning. Emotional functioning, the support system and coping patterns are components of the broader psychosocial assessment rather than the purpose of the mental status examination.",
  "type": "mcq",
  "options": [
   "Determine the client's level of emotional functioning.",
   "Assess the functional ability of the primary support system.",
   "Evaluate the client's mood, cognition, and orientation.",
   "Review the client's pattern of adaptive coping skills."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q120",
  "exam": 2,
  "src": 164,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with hyperthyroidism is admitted to the postoperative unit after a subtotal thyroidectomy. Which of the client's serum laboratory values requires intervention by the nurse?",
  "rationale": "Accidental injury to or removal of the parathyroid glands during thyroidectomy causes hypoparathyroidism and hypocalcemia; a total calcium of 5.0 mg/dL is critically low (normal about 9.0 to 10.5 mg/dL) and places the client at risk for tetany, laryngospasm and seizures, so IV calcium gluconate is anticipated. The sodium and potassium are normal, and a glucose of 110 mg/dL is an acceptable postoperative stress response.",
  "type": "mcq",
  "options": [
   "Sodium 140 mEq/L",
   "Potassium 4.2 mEq/L",
   "Total calcium 5.0 mg/dL",
   "Glucose 110 mg/dL"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q121",
  "exam": 2,
  "src": 385,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "An older female is admitted because of a change in her level of sensorium. During the evening shift, she attempts to get out of bed and falls, breaking her left hip. Buck's skin traction is applied to the left leg while she waits for surgery. Which intervention is most important for the nurse to include in the plan of care?",
  "rationale": "Buck's traction reduces muscle spasm and pain and immobilizes the fracture before surgery, and it is effective only when the leg and the line of pull are correctly aligned with weights hanging freely. Weights are not removed or rested on the bed, because doing so releases the traction, and the skin under the boot is inspected rather than massaged.",
  "type": "mcq",
  "options": [
   "Ensure proper alignment of the leg in traction.",
   "Remove the traction weights every 2 hours.",
   "Massage the skin under the traction boot daily.",
   "Rest the traction weights on the bed frame at night."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q122",
  "exam": 2,
  "src": 430,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "At the end of a preoperative teaching session on pain management techniques, a client starts to cry and says, “I just know I can't handle all the pain.” Which is the priority nursing diagnosis for this client?",
  "rationale": "The client is expressing fear and apprehension about an anticipated threat, which defines anxiety, and anxiety can increase pain perception after surgery, so it must be addressed. The client is not currently in pain, there is no evidence that the client's coping strategies have failed, and the teaching session has just been completed, so deficient knowledge is not supported.",
  "type": "mcq",
  "options": [
   "Anxiety",
   "Ineffective coping",
   "Acute pain",
   "Deficient knowledge"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q123",
  "exam": 2,
  "src": 473,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "Following a routine diagnostic test, a client who is symptom-free is diagnosed with Paget's disease. Client teaching should be directed toward which important goal for this client?",
  "rationale": "Paget's disease causes excessive, disorganized bone remodeling that produces enlarged but weak bone, so the major risk is pathologic fracture, and teaching focuses on fall prevention and safety. High-output heart failure can occur in extensive disease but is not the priority in a symptom-free client, and tissue perfusion and sleep are not the primary concerns.",
  "type": "mcq",
  "options": [
   "Maintain adequate cardiac output",
   "Promote rest and sleep",
   "Reduce the risk for injury",
   "Promote adequate tissue perfusion"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q124",
  "exam": 2,
  "src": 627,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is collecting a sterile sample for culture and sensitivity from a disposable three-chamber water-seal drainage system connected to a pleural chest tube. From which site on the system should the nurse obtain the sample?",
  "rationale": "Fresh pleural drainage for culture is aspirated with a small-gauge needle from the self-sealing area of the drainage tubing close to the client after cleansing the site, so the specimen reflects current drainage rather than fluid that has pooled in the chamber. Fluid in the collection chamber has been sitting and may be contaminated, and the water-seal and suction chambers contain sterile water rather than pleural fluid.",
  "type": "mcq",
  "options": [
   "The rubberized port at the bottom of the collection chamber",
   "The plastic tubing near the chest tube insertion site",
   "The tubing located on the top of the suction chamber",
   "The stopper port located above the water-seal level"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q125",
  "exam": 2,
  "src": 220,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A low-risk primigravida at 28 weeks' gestation arrives for her regular antepartal clinic visit. Which assessment finding should the nurse consider within normal limits for this client?",
  "rationale": "Cardiac output and blood volume increase during pregnancy, so a resting pulse increase of about 10 to 15 beats/minute is normal. Proteinuria may signal preeclampsia, and glucosuria warrants screening for gestational diabetes. Between 20 and 36 weeks the fundal height in centimeters should approximate the weeks of gestation, so 22 cm at 28 weeks suggests growth restriction or a dating error.",
  "type": "mcq",
  "options": [
   "Fundal height of 22 centimeters",
   "Proteinuria",
   "Pulse increase of 10 beats/minute",
   "Glucosuria"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi2q126",
  "exam": 2,
  "src": 168,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with an intestinal obstruction has a nasogastric tube to low intermittent suction and is receiving an IV of lactated Ringer's at 100 mL/hour. Which finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "Gastric suction removes fluid rich in potassium and hydrogen ions, and a potassium of 3.1 mEq/L is below the normal range of 3.5 to 5.0 mEq/L, which can cause dysrhythmias and worsen ileus; the provider may add potassium to the IV. The sodium and hemoglobin are within normal limits, and a urine output of 50 mL/hour reflects adequate renal perfusion.",
  "type": "mcq",
  "options": [
   "Serum sodium level of 138 mEq/L",
   "Serum potassium level of 3.1 mEq/L",
   "Hemoglobin of 13.5 g/dL",
   "Urine output of 50 mL/hour"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi2q127",
  "exam": 2,
  "src": 140,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client in Addisonian crisis is admitted for treatment with adrenal cortical supplementation. Based on the client's admitting diagnosis, which findings require immediate action by the nurse? (Select all that apply.)",
  "rationale": "Cortisol deficiency causes hypoglycemia, which produces headache, tremors, pallor and diaphoresis; aldosterone deficiency causes sodium and water loss with hypovolemia and postural hypotension, and hyperkalemia that produces dysrhythmias. All of these require immediate action. Hyperglycemia and hypertension are findings of cortisol excess, as in Cushing's syndrome or overtreatment, and are not expected in Addisonian crisis.",
  "type": "sata",
  "options": [
   "Postural hypotension",
   "Headache and tremors",
   "Blood pressure of 162/98 mm Hg",
   "Irregular heartbeat",
   "Pallor and diaphoresis",
   "Blood glucose of 190 mg/dL"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ]
 },
 {
  "id": "hesi2q128",
  "exam": 2,
  "src": 249,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A male client with cirrhosis has ascites and reports feeling short of breath. The client is in a semi-Fowler's position with his arms at his sides. Which action should the nurse implement?",
  "rationale": "Ascites pushes the abdominal contents upward against the diaphragm, so a higher Fowler's position lets gravity pull the fluid away from the diaphragm, and supporting the arms on pillows allows fuller chest expansion. Lowering the head of the bed or placing the client prone increases pressure on the diaphragm, and a severe fluid restriction will not quickly relieve the dyspnea.",
  "type": "mcq",
  "options": [
   "Raise the head of the bed to Fowler's position and support his arms with pillows.",
   "Restrict the client's oral fluid intake to 500 mL for the next 24 hours.",
   "Turn the client to the prone position to relieve pressure on the diaphragm.",
   "Lower the head of the bed and elevate his legs to reduce the pressure."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi2q129",
  "exam": 2,
  "src": 734,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "To reduce staff nurse role ambiguity, which strategy should the nurse manager implement?",
  "rationale": "Role ambiguity results from unclear expectations and job responsibilities, so a clear, accurate and current job description defines what each nurse is expected to do. Equalizing assignments and analyzing overtime address role overload rather than ambiguity, and rotating charge duties does not clarify the staff nurse role.",
  "type": "mcq",
  "options": [
   "Analyze the amount of overtime the nursing staff need to complete assignments.",
   "Assign each staff nurse a turn as unit charge nurse on a rotating basis.",
   "Confirm that all staff nurses are assigned an equal number of clients.",
   "Review the staff nurse job description to ensure that it is clear, accurate, and current."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi2q130",
  "exam": 2,
  "src": 76,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving an IV solution labeled Heparin Sodium 20,000 units in 5% Dextrose Injection 500 mL at 25 mL/hour. How many units of heparin is the client receiving each hour? (Enter numeric value only.)",
  "rationale": "Concentration: 20,000 units ÷ 500 mL = 40 units/mL. Hourly dose: 40 units/mL × 25 mL/hour = 1,000 units/hour.",
  "type": "fill",
  "answer": 1000,
  "unit": "units/hr",
  "tolerance": 0
 },
 {
  "id": "hesi3q001",
  "exam": 3,
  "src": 625,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is changing a client's IV tubing and closes the roller clamp on the new tubing after spiking the bag of solution. Which action should the nurse take to ensure adequate filling of the drip chamber?",
  "rationale": "With the roller clamp closed and the bag hanging, squeezing and releasing the drip chamber draws fluid into it until it is about one-third to one-half full, which allows drops to be counted and prevents air from entering the tubing. Lowering the bag does not fill the chamber, opening the clamp before the chamber fills allows air into the line, and squeezing the bag can overfill the chamber.",
  "type": "mcq",
  "options": [
   "Lower the IV bag to a flat surface.",
   "Squeeze the bag of IV solution.",
   "Compress the drip chamber.",
   "Open the roller clamp."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q002",
  "exam": 3,
  "src": 834,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "While the nurse is preparing a scheduled intravenous (IV) medication, the client states that the IV site hurts and refuses to allow the nurse to flush the IV to assess the site. Which intervention should the nurse implement?",
  "rationale": "A painful IV site may indicate phlebitis or infiltration, and the client has the right to refuse the flush, so a new IV is started at a different site and the painful one is then removed so that the scheduled medication can still be given. Compresses do not resolve the problem, the insertion date does not change the need to replace a painful site, and simply documenting the missed dose delays treatment.",
  "type": "mcq",
  "options": [
   "Discontinue the painful IV after a new IV is inserted.",
   "Document that the medication was not administered.",
   "Apply ice first, then a warm compress to the IV site.",
   "Review the medical record for the date of insertion."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q003",
  "exam": 3,
  "src": 163,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with hypertension receives a prescription for enalapril, an angiotensin-converting enzyme (ACE) inhibitor. Which instruction should the nurse include in the medication teaching plan?",
  "rationale": "ACE inhibitors can rarely cause neutropenia, agranulocytosis and other blood dyscrasias, so unusual bruising, bleeding or signs of infection should be reported. ACE inhibitors cause potassium retention, so potassium-rich foods and salt substitutes should be limited rather than increased. A persistent dry cough is a common adverse effect that should be reported, but the client should not stop the drug on their own. Limiting leafy greens applies to warfarin, not enalapril.",
  "type": "mcq",
  "options": [
   "Report increased bruising or bleeding.",
   "Increase the intake of potassium-rich foods.",
   "Stop the medication if a cough develops.",
   "Limit the intake of leafy green vegetables."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q004",
  "exam": 3,
  "src": 336,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "After placement of a left subclavian central venous catheter (CVC), the nurse receives a report that the x-ray shows the catheter tip in the client's superior vena cava. Which action should the nurse implement?",
  "rationale": "The correct position for a central venous catheter tip is the distal superior vena cava near the cavoatrial junction, so the x-ray confirms placement and the prescribed infusion can be started. Repositioning, removal or repeat imaging is not needed when placement is correct; the catheter is secured at the time of insertion.",
  "type": "mcq",
  "options": [
   "Notify the provider of the need to reposition the catheter.",
   "Initiate the intravenous fluid as prescribed.",
   "Remove the catheter and apply direct pressure for 5 minutes.",
   "Obtain a second x-ray to confirm the catheter position."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q005",
  "exam": 3,
  "src": 120,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with a chronic health problem has difficulty ambulating short distances because of generalized weakness but is able to bear weight on both legs. To assist with ambulation and provide the greatest stability, which assistive device and gait is best for this client?",
  "rationale": "The 4-point gait is the most stable crutch gait because three points of support are on the floor at all times, and it requires the client to bear weight on both legs, which this client can do. The 2-point gait is faster but less stable, and the 3-point gait is used when one leg cannot bear weight. A quad cane provides support on only one side and is less stable than crutches for generalized weakness.",
  "type": "mcq",
  "options": [
   "Crutches with a 2-point gait",
   "Crutches with a 4-point gait",
   "A quad cane",
   "Crutches with a 3-point gait"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q006",
  "exam": 3,
  "src": 539,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes morphine sulfate oral solution 38 mg PO every 4 hours for a client who is opioid-tolerant. The available 30 mL bottle is labeled 100 mg/5 mL (20 mg/mL) and is packaged with a calibrated oral syringe. How many mL should the nurse administer? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "Using D/H × Q: 38 mg ÷ 20 mg × 1 mL = 1.9 mL. This concentrated solution is intended only for opioid-tolerant clients, and the dose is measured with the calibrated oral syringe to avoid a dosing error.",
  "type": "fill",
  "answer": 1.9,
  "unit": "mL",
  "tolerance": 0.01
 },
 {
  "id": "hesi3q007",
  "exam": 3,
  "src": 295,
  "topic": "Maternity & Newborn",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A primigravida at 40 weeks' gestation with preeclampsia is admitted after having a seizure in a hot tub at a midwife's birthing center. A magnesium sulfate infusion is running at 2 g/hour. Current findings: blood pressure 146/94 mm Hg, respirations 16 breaths/minute, deep tendon reflexes 2+, urine output 50 mL/hour, serum magnesium 5.8 mg/dL, and fetal heart rate 140 beats/minute with moderate variability. Which action should the nurse implement?",
  "rationale": "The client's findings show a therapeutic response: the magnesium level is within the therapeutic range of about 4 to 7 mg/dL, reflexes and respirations are normal, urine output is adequate and the fetal status is reassuring, so the nurse continues the plan with ongoing hourly monitoring. Increasing the infusion is not needed, calcium gluconate is the antidote for magnesium toxicity, which is not present, and the stable fetal and maternal status does not require an emergency cesarean birth.",
  "type": "mcq",
  "options": [
   "Continue to monitor the client's blood pressure hourly.",
   "Increase the magnesium sulfate infusion rate.",
   "Prepare the client for an emergency cesarean birth.",
   "Administer calcium gluconate IV push."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q008",
  "exam": 3,
  "src": 579,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse finds a client at 33 weeks' gestation in cardiac arrest. Which adaptation to cardiopulmonary resuscitation (CPR) should the nurse implement?",
  "rationale": "After about 20 weeks, the gravid uterus compresses the inferior vena cava and aorta in the supine position, reducing venous return and the effectiveness of compressions, so the uterus is displaced to the left; current guidelines favor continuous manual left uterine displacement, with a firm wedge tilt as an alternative. Compressions are performed at the standard rate of 100 to 120 per minute, defibrillation is not delayed in pregnancy, and the flat supine position without displacement worsens aortocaval compression.",
  "type": "mcq",
  "options": [
   "Keep the client completely flat and supine without any support under the pelvis.",
   "Perform chest compressions at a slower rate of about 60 compressions per minute.",
   "Withhold defibrillation until the fetus has been delivered by emergency cesarean.",
   "Displace the uterus to the left, manually or with a firm wedge tilting the pelvis and thorax about 30 degrees."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q009",
  "exam": 3,
  "src": 131,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A client with a new diagnosis of Raynaud's disease lives alone. Which instruction should the nurse include in the client's discharge teaching plan?",
  "rationale": "Raynaud's disease involves vasospasm of the small arteries of the fingers and toes triggered by cold and stress, so keeping the environment warm helps prevent attacks. Cool water triggers vasospasm, and attacks are relieved with warmth. Nicotine is a potent vasoconstrictor, so the client should stop smoking completely, and decongestants such as pseudoephedrine cause vasoconstriction and should be avoided.",
  "type": "mcq",
  "options": [
   "Soak the hands in cool water when color changes occur.",
   "Limit smoking to fewer than five cigarettes daily.",
   "Keep the room temperature at about 80° F (26.7° C).",
   "Take a decongestant before going outdoors in winter."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q010",
  "exam": 3,
  "src": 322,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A young couple who have been unsuccessful in conceiving a child for over a year are seen in the family planning clinic. During the initial visit, which intervention is most important for the nurse to implement?",
  "rationale": "A thorough history, including timing and frequency of intercourse, use of lubricants or douching, and the male partner's heat exposure or substance use, is obtained first because it may identify correctable causes of infertility and guides further testing. Ultrasound, semen analysis and hormone levels are diagnostic tests that follow the initial assessment.",
  "type": "mcq",
  "options": [
   "Determine current sexual practices.",
   "Evaluate hormone levels in both partners.",
   "Prepare the female partner for an ultrasound.",
   "Request a semen sample for analysis."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q011",
  "exam": 3,
  "src": 231,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client tells the nurse that he feels short of breath and has chest pressure radiating down his left arm. A STAT 12-lead electrocardiogram (ECG) shows ST-segment elevation in leads II, III, aVF, and V4R. The nurse collects blood samples and gives a normal saline bolus. Which action is most important for the nurse to implement?",
  "rationale": "ST elevation in II, III, aVF and V4R indicates an inferior myocardial infarction with right ventricular involvement, and rapid reperfusion is the priority, so the client is screened for contraindications to thrombolytics if PCI is not immediately available. Right ventricular infarction is preload-dependent, which is why the saline bolus is given; nitroglycerin and furosemide reduce preload and can cause profound hypotension. A stress test is contraindicated during an acute MI.",
  "type": "mcq",
  "options": [
   "Administer IV furosemide to reduce cardiac preload.",
   "Administer sublingual nitroglycerin every 5 minutes.",
   "Prepare the client for a treadmill exercise stress test.",
   "Assess for contraindications to thrombolytic therapy."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q012",
  "exam": 3,
  "src": 8,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A 12-year-old client who had an appendectomy two days ago is receiving 0.9% normal saline at 50 mL/hour. The client's urine specific gravity is 1.035. Which action should the nurse implement?",
  "rationale": "Urine specific gravity reflects hydration status; the normal range is about 1.010 to 1.025, and a value of 1.035 indicates concentrated urine and fluid volume deficit. Encouraging popsicles and preferred fluids is a developmentally appropriate way to increase intake in a child who is two days postoperative. Postural blood pressures and bowel sounds are assessments that do not correct the deficit, and a urinalysis adds no information beyond the already abnormal specific gravity.",
  "type": "mcq",
  "options": [
   "Evaluate postural blood pressure measurements",
   "Encourage popsicles and fluids of choice",
   "Assess bowel sounds in all quadrants",
   "Obtain a specimen for urinalysis"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q013",
  "exam": 3,
  "src": 409,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "An older male client with type 1 diabetes has not felt well for the past few days and arrives at the clinic with abdominal cramping and vomiting. He is lethargic and moderately confused and cannot remember when he last took insulin or ate. Which action should the nurse implement first?",
  "rationale": "Vomiting, abdominal cramping, lethargy and confusion in a client with type 1 diabetes suggest diabetic ketoacidosis with dehydration, so restoring circulating volume with IV normal saline is the first priority. Potassium is measured before insulin is given, because insulin shifts potassium into the cells, and the usual subcutaneous dose is inappropriate for possible DKA. Pupillary response does not address the underlying problem.",
  "type": "mcq",
  "options": [
   "Start an intravenous (IV) infusion of normal saline.",
   "Obtain a serum potassium level.",
   "Assess the pupillary response to light.",
   "Administer the client's usual dose of insulin."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q014",
  "exam": 3,
  "src": 458,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "During the infusion of a second unit of packed red blood cells, the client's temperature rises from 99° F to 101.6° F. Which intervention should the nurse implement?",
  "rationale": "A temperature rise during a transfusion may signal a febrile nonhemolytic reaction, an acute hemolytic reaction or bacterial contamination, so the nurse immediately stops the transfusion and keeps the vein open with normal saline through new tubing. The blood bank and provider are notified afterward, and acetaminophen may be prescribed, but continuing the transfusion while observing for other signs could allow a severe reaction to progress.",
  "type": "mcq",
  "options": [
   "Observe the client for a maculopapular rash.",
   "Stop the transfusion and start normal saline.",
   "Give a PRN dose of acetaminophen.",
   "Report the fever to the blood bank."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q015",
  "exam": 3,
  "src": 170,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with multiple sclerosis (MS) has decreased motor function after taking a hot bath (Uhthoff's phenomenon). Which pathophysiologic mechanism explains this response?",
  "rationale": "Demyelinated axons conduct impulses poorly, and a rise in body temperature, such as from a hot bath, exercise or fever, further slows or blocks conduction, producing a temporary worsening of symptoms that resolves when the body cools. Uhthoff's phenomenon is not a new relapse with permanent demyelination and does not involve increased antibody production, and the weakness is neurologic rather than caused by muscle dehydration.",
  "type": "mcq",
  "options": [
   "Heat dehydrates the muscles, causing weakness and spasm.",
   "Heat increases the production of antibodies against myelin.",
   "Heat slows impulse conduction along demyelinated nerve fibers.",
   "Heat causes permanent destruction of new areas of myelin."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q016",
  "exam": 3,
  "src": 667,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is preparing to gavage feed a premature infant through an orogastric tube. During insertion of the tube, the infant's heart rate drops to 60 beats/minute. Which action should the nurse take?",
  "rationale": "A heart rate of 60 beats/minute in a premature infant is significant bradycardia, usually a vagal response to tube insertion, so the nurse stops the procedure, provides stimulation or support as needed and waits until the infant is stable before feeding. Continuing or merely pausing and watching risks prolonged bradycardia and hypoxia, and switching to the nose does not prevent vagal stimulation and obstructs a preferential nasal breather.",
  "type": "mcq",
  "options": [
   "Postpone the feeding until the infant's vital signs are stable.",
   "Continue the insertion, since this is a typical response.",
   "Pause and monitor for a continued drop in the heart rate.",
   "Insert the feeding tube into the infant's nasal passage instead."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q017",
  "exam": 3,
  "src": 596,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is assessing an older adult with type 2 diabetes mellitus. Which assessment finding indicates that the client understands long-term control of diabetes?",
  "rationale": "Hemoglobin A1c reflects the average blood glucose over the previous 2 to 3 months, and a value of 6.5% indicates good long-term control. A single fasting glucose reflects only one point in time, and negative ketones and the absence of DKA are expected in type 2 diabetes and do not demonstrate ongoing glycemic control.",
  "type": "mcq",
  "options": [
   "The fasting blood glucose was 120 mg/dL this morning.",
   "The hemoglobin A1c was 6.5% last week.",
   "No diabetic ketoacidosis has occurred in 6 months.",
   "Urine ketones have been negative for the past 6 months."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q018",
  "exam": 3,
  "src": 344,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "After several hours of nonproductive coughing, a client presents to the emergency department with chest tightness and shortness of breath. History includes end-stage chronic obstructive pulmonary disease (COPD) and diabetes mellitus. During the pulmonary assessment, the nurse hears wheezing and poor air movement bilaterally. Which actions should the nurse implement? (Select all that apply.)",
  "rationale": "Wheezing with poor air movement requires an inhaled bronchodilator, and continuous oximetry tracks the response and oxygenation. Chest tightness in a client with diabetes, who may have atypical cardiac symptoms, warrants a 12-lead ECG to rule out ischemia. Codeine depresses respirations and suppresses the cough needed to clear the airway, and a supine position worsens dyspnea; an upright position is preferred.",
  "type": "sata",
  "options": [
   "Place the client in a supine position.",
   "Monitor oxygen saturation continuously.",
   "Obtain a 12-lead electrocardiogram.",
   "Administer the PRN nebulizer treatment.",
   "Give the PRN codeine cough suppressant."
  ],
  "correct": [
   1,
   2,
   3
  ]
 },
 {
  "id": "hesi3q019",
  "exam": 3,
  "src": 787,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Which assessment is most important for the nurse to include in the daily plan of care for a client with a burned extremity?",
  "rationale": "Circumferential burns and edema can compress blood vessels and cause compartment syndrome, so distal pulses are assessed to ensure adequate perfusion to the extremity; loss of pulses may require escharotomy. Range of motion relates to contracture prevention, sensation to nerve involvement and exudate to infection, but none has the priority of maintaining circulation.",
  "type": "mcq",
  "options": [
   "Extremity sensation",
   "Range of motion",
   "Distal pulse intensity",
   "Presence of exudate"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q020",
  "exam": 3,
  "src": 134,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with a do-not-resuscitate (DNR) prescription begins to manifest signs of impending death. After notifying the family of the client's status, which priority action should the nurse implement?",
  "rationale": "For a client with a DNR prescription who is actively dying, the focus is comfort, so assessing and treating pain is the priority. Bringing the crash cart contradicts the DNR order, and frequent vital signs disturb the client without changing care. Spiritual support should be offered according to the client's and family's wishes, but it does not take precedence over relief of suffering.",
  "type": "mcq",
  "options": [
   "Determine the client's need for pain medication.",
   "Obtain a full set of vital signs every 15 minutes.",
   "Place the crash cart outside the client's room.",
   "Contact the chaplain to perform end-of-life rites."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q021",
  "exam": 3,
  "src": 586,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is assessing a 3-month-old infant who had a pyloromyotomy yesterday. The infant should be medicated for pain based on which findings? (Select all that apply.)",
  "rationale": "Infants cannot report pain, so the nurse relies on behavioral cues such as restlessness and clenched fists and physiologic signs such as increased heart and respiratory rates. An elevated temperature suggests infection or dehydration, and peripheral pallor reflects circulation; neither is a pain indicator that should be treated with an analgesic.",
  "type": "sata",
  "options": [
   "Restlessness",
   "Increased temperature",
   "Increased pulse rate",
   "Clenched fists",
   "Increased respiratory rate",
   "Peripheral pallor of the skin"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi3q022",
  "exam": 3,
  "src": 157,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A client with end-stage liver failure is declared brain dead. The family wants to discontinue feeding and donate any viable organs. Which action should the nurse take?",
  "rationale": "Federal regulations require hospitals to notify the regional organ procurement organization of every death or imminent death, and the OPO determines suitability and approaches the family about donation. Feeding and ventilation must be continued to keep the organs viable until the procurement team directs care. Obtaining donation consent is the role of trained OPO staff, not the bedside nurse.",
  "type": "mcq",
  "options": [
   "Ask the family to sign an organ donation consent form.",
   "Discontinue the tube feeding as the family requested.",
   "Contact the regional organ procurement agency.",
   "Turn off the ventilator once the family is ready."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q023",
  "exam": 3,
  "src": 412,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An older male comes to the clinic with a family member. When the nurse attempts to take his health history, he does not respond to questions clearly. Which action should the nurse implement first?",
  "rationale": "Environmental noise and distractions commonly interfere with communication, especially for older adults with sensory changes, so the nurse first checks for and reduces them before drawing conclusions. Relying on the family member bypasses the client, and a cognitive or hearing evaluation may be needed later if the problem continues in a quiet environment.",
  "type": "mcq",
  "options": [
   "Ask the family member to answer the questions.",
   "Assess the surroundings for noise and distractions.",
   "Refer the client for an audiology evaluation.",
   "Perform a mini-mental status examination."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q024",
  "exam": 3,
  "src": 466,
  "topic": "Renal & GU",
  "clientNeed": "Physiological Adaptation",
  "stem": "Following a motor vehicle collision, an adult female with a ruptured spleen and a blood pressure of 70/44 mm Hg had an emergency splenectomy. Twelve hours after surgery, her urine output has been 25 mL/hour for the last two hours. Which pathophysiologic reason supports the nurse's decision to report this finding to the healthcare provider?",
  "rationale": "Profound hypotension from hemorrhage reduces renal perfusion, and prolonged ischemia can cause acute tubular necrosis; urine output below 30 mL/hour signals declining renal function and requires prompt intervention. The scenario does not suggest an obstruction, anesthesia effects should have resolved by 12 hours, and the client is at risk for fluid deficit rather than excess.",
  "type": "mcq",
  "options": [
   "Oliguria indicates that the client is in fluid volume excess.",
   "Oliguria signals tubular necrosis related to hypoperfusion.",
   "Oliguria is an expected effect of general anesthesia.",
   "Oliguria indicates that the bladder outlet is obstructed."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q025",
  "exam": 3,
  "src": 507,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "One year after discharge from the burn trauma unit, a client with a history of 40% full-thickness burns is admitted with bone pain and muscle weakness. Which intervention should the nurse include in the client's plan of care?",
  "rationale": "Burn scar tissue cannot synthesize vitamin D from ultraviolet light, and burn injury causes bone loss, so survivors of extensive burns develop progressive vitamin D deficiency that causes bone pain and weakness; dietary and supplemental vitamin D3 treats the cause. Range-of-motion and strengthening exercises do not correct the deficiency, and grafted and healed burn skin must be protected from unprotected sun exposure.",
  "type": "mcq",
  "options": [
   "Instruct the client to use muscle-strengthening exercises.",
   "Teach the need for dietary and supplemental vitamin D3.",
   "Explain the need for skin exposure to sunlight without sunscreen.",
   "Encourage progressive active range-of-motion exercises."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q026",
  "exam": 3,
  "src": 719,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A labor and delivery nurse is reassigned to the cardiac care unit for the day because of a low census in labor and delivery. Which assignment is best for the charge nurse to give this nurse?",
  "rationale": "A nurse floated from a very different specialty should be given tasks that match their competencies, and assisting the cardiac nurses lets the nurse help with general nursing care under the guidance of experienced staff. Monitoring central telemetry requires dysrhythmia interpretation skills, and admissions and transfers of cardiac clients require cardiac assessment expertise the nurse may not have.",
  "type": "mcq",
  "options": [
   "Assist the cardiac nurses with their assignments.",
   "Transfer a client to another unit.",
   "Monitor the central telemetry station.",
   "Perform a new client admission."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q027",
  "exam": 3,
  "src": 155,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with eczema is experiencing severe pruritus. Which PRN prescriptions should the nurse administer? (Select all that apply.)",
  "rationale": "Topical corticosteroids reduce the inflammation of eczema, and oral antihistamines block histamine-mediated itching and promote sleep, so both relieve severe pruritus. A scabicide treats scabies infestation, not eczema. Alcohol dries and irritates the skin, worsening eczema, and a transdermal analgesic does not relieve itching.",
  "type": "sata",
  "options": [
   "Topical alcohol rub",
   "Transdermal analgesic",
   "Oral antihistamine",
   "Topical corticosteroid",
   "Topical scabicide"
  ],
  "correct": [
   2,
   3
  ]
 },
 {
  "id": "hesi3q028",
  "exam": 3,
  "src": 530,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes atenolol 50 mg daily for a client with angina pectoris. Which finding should the nurse report to the healthcare provider before administering this medication?",
  "rationale": "Atenolol is a beta blocker that slows conduction through the AV node, so a new irregular pulse, which may signal heart block or another dysrhythmia, should be evaluated before the dose is given. Tachycardia and angina are conditions beta blockers treat, and urinary frequency is unrelated to the drug's safety.",
  "type": "mcq",
  "options": [
   "Chest pain",
   "Tachycardia",
   "Urinary frequency",
   "Irregular pulse"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q029",
  "exam": 3,
  "src": 467,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Following an esophagogastroduodenoscopy (EGD), a male client is drowsy and difficult to arouse, and his respirations are slow and shallow. Which actions should the nurse implement? (Select all that apply.)",
  "rationale": "Procedural sedation with opioids and benzodiazepines can cause oversedation, so the nurse prepares reversal agents such as naloxone or flumazenil, checks the oxygen saturation and applies oxygen to support oxygenation. The client is still breathing and has a pulse, so bag-valve-mask ventilation and CPR are not indicated unless his condition deteriorates.",
  "type": "sata",
  "options": [
   "Apply oxygen via nasal cannula.",
   "Check the oxygen saturation level.",
   "Begin cardiopulmonary resuscitation.",
   "Initiate bag-valve-mask ventilation.",
   "Prepare a medication reversal agent."
  ],
  "correct": [
   0,
   1,
   4
  ]
 },
 {
  "id": "hesi3q030",
  "exam": 3,
  "src": 72,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client reports intermittent left lower abdominal pain that began two days ago. In which order should the nurse implement the following interventions?",
  "rationale": "The nurse first collects the subjective history, such as when the client last had a bowel movement, then positions the client supine with the knees bent to relax the abdominal muscles. The abdominal examination follows the sequence inspection, auscultation, percussion and palpation, because palpation and percussion can alter bowel sounds, so the abdominal contour is inspected before the four quadrants are auscultated.",
  "type": "mcq",
  "options": [
   "Position supine with knees bent → Auscultate all four quadrants → Inspect the abdominal contour → Determine the last bowel movement",
   "Auscultate all four quadrants → Inspect the abdominal contour → Position supine with knees bent → Determine the last bowel movement",
   "Determine the last bowel movement → Position supine with knees bent → Inspect the abdominal contour → Auscultate all four quadrants",
   "Inspect the abdominal contour → Determine the last bowel movement → Auscultate all four quadrants → Position supine with knees bent"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q031",
  "exam": 3,
  "src": 93,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client who developed syndrome of inappropriate antidiuretic hormone (SIADH) associated with small cell carcinoma of the lung is preparing for discharge. When teaching the client about self-management with demeclocycline, the nurse should instruct the client to report which condition to the healthcare provider?",
  "rationale": "SIADH causes dilutional hyponatremia, which is treated with fluid restriction and demeclocycline, a tetracycline derivative that blocks the renal action of ADH. Muscle cramping is a sign of hyponatremia and indicates that the treatment may need adjustment. Insomnia, increased appetite and anxiety are not signs of hyponatremia; worsening hyponatremia more often causes anorexia, nausea, headache and weakness.",
  "type": "mcq",
  "options": [
   "Increased appetite",
   "Anxiety",
   "Muscle cramping",
   "Insomnia"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q032",
  "exam": 3,
  "src": 485,
  "topic": "Respiratory",
  "clientNeed": "Psychosocial Integrity",
  "stem": "While assessing an older female client with complications of chronic obstructive pulmonary disease (COPD), the nurse notices a change in her appearance. Her face appears tense, and she begs the nurse not to leave her alone. Her pulse is 100 beats/minute, and respirations are 26 breaths/minute. What is the primary nursing diagnosis?",
  "rationale": "A tense face, pleading not to be left alone, and increased heart and respiratory rates are signs of anxiety, which is common in COPD when dyspnea produces a fear of suffocation; anxiety also increases oxygen demand and worsens dyspnea. The data do not describe social isolation or failed coping, and fatigue is not the problem the client is expressing.",
  "type": "mcq",
  "options": [
   "Social isolation related to chronic illness",
   "Anxiety related to fear of suffocation",
   "Ineffective coping related to dependency on others",
   "Fatigue related to increased work of breathing"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q033",
  "exam": 3,
  "src": 655,
  "topic": "GI & Nutrition",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is preparing a discharge teaching plan for a client who had a liver transplant. Which instruction is most important to include in this plan?",
  "rationale": "Immunosuppressive therapy such as cyclosporine or tacrolimus is essential to prevent rejection but greatly increases the risk of infection, especially during the first months after transplantation, so avoiding crowds and sick contacts is a priority. Dietary changes, reporting edema and gradual activity are appropriate instructions but are less critical than preventing life-threatening infection.",
  "type": "mcq",
  "options": [
   "Notify the healthcare provider if edema occurs.",
   "Avoid crowds for the first two months after surgery.",
   "Limit the intake of fatty foods for one month after surgery.",
   "Increase activity and exercise gradually, as tolerated."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q034",
  "exam": 3,
  "src": 28,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A child with heart failure (HF) is taking digoxin. Which sign indicates to the nurse that the child may be experiencing digoxin toxicity?",
  "rationale": "Early signs of digoxin toxicity in children include anorexia, nausea and vomiting, along with bradycardia and dysrhythmias. Tachycardia and dyspnea are more consistent with worsening heart failure than with toxicity, since digoxin slows the heart rate. Muscle cramps are associated with hypokalemia from diuretics, which can increase the risk of toxicity but is not itself a sign of it.",
  "type": "mcq",
  "options": [
   "Vomiting",
   "Tachycardia",
   "Muscle cramps",
   "Dyspnea"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q035",
  "exam": 3,
  "src": 751,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "When assessing a multigravida on the first postpartum day, the nurse finds a moderate amount of lochia rubra and a firm uterus three fingerbreadths above the umbilicus. Which action should the nurse implement first?",
  "rationale": "On the first postpartum day the fundus should be firm at or about one fingerbreadth below the umbilicus, and a firm fundus that is elevated above the umbilicus, often displaced to the right, usually indicates a distended bladder, which can lead to uterine atony and hemorrhage. The uterus is firm and the lochia is moderate, so massage, increased fluids and a hemoglobin check are not the first actions.",
  "type": "mcq",
  "options": [
   "Review the hemoglobin for hemorrhage.",
   "Increase the rate of the IV infusion.",
   "Massage the uterus to decrease atony.",
   "Check for a distended bladder."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q036",
  "exam": 3,
  "src": 635,
  "topic": "Respiratory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is developing the plan of care for a client with pneumonia and includes the nursing diagnosis “Ineffective airway clearance related to thick pulmonary secretions.” Which intervention is most important for the nurse to include in the client's plan of care?",
  "rationale": "Adequate hydration thins tenacious secretions so they can be coughed up and expectorated, directly addressing the related factor of thick secretions (unless fluids are contraindicated by another condition). Fluid restriction thickens secretions, cough suppressants prevent clearance of mucus, and lying flat decreases lung expansion and makes coughing less effective.",
  "type": "mcq",
  "options": [
   "Restrict fluids to 1,500 mL daily.",
   "Give a cough suppressant every 4 hours.",
   "Increase fluid intake to 3,000 mL daily.",
   "Keep the client flat in bed to rest."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q037",
  "exam": 3,
  "src": 258,
  "topic": "Maternity & Newborn",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male infant born at 28 weeks' gestation at an outlying hospital is being prepared for transport to a regional neonatal intensive care unit. His respirations are 92 breaths/minute, and his heart rate is 156 beats/minute. Which drug should the transport nurse anticipate administering to this infant?",
  "rationale": "A 28-week infant with marked tachypnea most likely has respiratory distress syndrome from surfactant deficiency, and beractant is an exogenous surfactant instilled through the endotracheal tube to improve lung compliance and gas exchange. Naloxone reverses maternal opioid-induced respiratory depression, which is not described. Vitamin K is routine newborn prophylaxis rather than treatment of respiratory distress, and calcium gluconate treats hypocalcemia.",
  "type": "mcq",
  "options": [
   "Administer IV calcium gluconate 100 mg/kg.",
   "Give vitamin K 1 mg IM into the thigh.",
   "Administer naloxone 0.1 mg/kg IV push.",
   "Instill beractant 100 mg/kg into the endotracheal tube."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q038",
  "exam": 3,
  "src": 330,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "After an older female client receives treatment for drug toxicity, the healthcare provider prescribes a 24-hour creatinine clearance test. Before starting the urine collection, the nurse notes that the client's serum creatinine is 0.3 mg/dL. Which action should the nurse implement?",
  "rationale": "A serum creatinine of 0.3 mg/dL is below the normal range (about 0.6 to 1.2 mg/dL) and may reflect low muscle mass, malnutrition or a laboratory error, and it affects interpretation of the creatinine clearance and drug dosing, so the provider should be notified. Starting the collection without reporting the abnormal value, checking the BUN or assessing for hypokalemia does not address this finding.",
  "type": "mcq",
  "options": [
   "Notify the healthcare provider of the results.",
   "Initiate the urine collection as prescribed.",
   "Assess the client for signs of hypokalemia.",
   "Evaluate the client's serum BUN level."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q039",
  "exam": 3,
  "src": 255,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client with ulcerative colitis received a prescription for a corticosteroid last month, but because of the side effects he stopped taking the medication 6 days ago. Which finding warrants immediate intervention by the nurse?",
  "rationale": "Abruptly stopping a corticosteroid after a month of therapy can cause acute adrenal insufficiency because the adrenal glands have been suppressed; hypotension and fever signal adrenal crisis, which can progress to shock, and require immediate intervention. Anxiety and restlessness are nonspecific, and fluid retention and hyperglycemia are adverse effects of taking corticosteroids, which should be resolving after the drug is stopped.",
  "type": "mcq",
  "options": [
   "Increased blood glucose",
   "Anxiety and restlessness",
   "Hypotension and fever",
   "Fluid retention"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q040",
  "exam": 3,
  "src": 570,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse caring for a client with dysphagia is attempting to insert a nasogastric (NG) tube, but the client will not swallow and is not gagging. Which action should the nurse implement to facilitate passage of the tube into the esophagus?",
  "rationale": "Flexing the head with the chin toward the chest closes the airway and directs the tube toward the esophagus, which is especially important when the client cannot swallow on command. Hyperextending the neck opens the airway and promotes tracheal placement, giving fluids to a client with dysphagia risks aspiration, and advancing the tube quickly increases trauma and misplacement.",
  "type": "mcq",
  "options": [
   "Hyperextend the client's neck while advancing the tube.",
   "Flex the client's head with the chin to the chest and insert.",
   "Turn the client's head to the side and advance the tube quickly.",
   "Ask the client to sip water through a straw during insertion."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q041",
  "exam": 3,
  "src": 638,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is evaluating the health teaching of a female client with condylomata acuminata (genital warts). Which statement by the client indicates that teaching has been effective?",
  "rationale": "Genital warts are caused by human papillomavirus, and because certain HPV types are associated with cervical cancer, regular Pap screening is essential. Treatment removes visible warts but does not eliminate the virus, HPV is transmitted by sexual skin-to-skin contact rather than hot tubs, and the cause is a virus rather than a fungus.",
  "type": "mcq",
  "options": [
   "“I need to have regular Pap smears.”",
   "“Early treatment will cure this infection.”",
   "“I will clean my hot tub more often.”",
   "“These warts are caused by a fungus.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q042",
  "exam": 3,
  "src": 277,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A nurse is conducting a physical assessment of a young adult. Which information provides the best indication of the individual's nutritional status?",
  "rationale": "Hair, nails and skin have rapid cell turnover, and their condition reflects long-term nutritional status; for example, brittle hair and nails or poor skin integrity suggest protein and vitamin deficiencies. A 24-hour recall reflects only one day, which may not be typical, and recent weight loss and appetite are subjective and short-term indicators.",
  "type": "mcq",
  "options": [
   "Condition of hair, nails, and skin",
   "Status of current appetite",
   "History of recent weight loss",
   "A 24-hour diet history"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q043",
  "exam": 3,
  "src": 266,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A mother calls the nurse to report that at 0900 she gave her 4-month-old infant an oral dose of digoxin, but at 0920 the baby vomited the medicine. Which instruction should the nurse provide to this mother?",
  "rationale": "Because it is impossible to know how much digoxin was absorbed before the infant vomited, the dose is not repeated, and the next dose is given at the scheduled time to avoid toxicity; the provider is notified if more than two consecutive doses are missed or vomited. Repeating all or part of the dose risks digoxin toxicity, and mixing medication in formula is discouraged because the infant may not finish the feeding.",
  "type": "mcq",
  "options": [
   "Give half of the dose now to replace what was lost.",
   "Give another full dose of the digoxin right away.",
   "Repeat the dose mixed with 2 ounces of formula.",
   "Withhold this dose and give the next dose as scheduled."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q044",
  "exam": 3,
  "src": 567,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse assigned an unlicensed assistive personnel (UAP) to apply antiembolism stockings to a client. When the nurse enters the room, the stockings have been rolled down to mid-calf, forming a tight band. The UAP states that the client requested this for comfort. Which action should the nurse take?",
  "rationale": "Antiembolism stockings must be applied smoothly without rolled or folded areas, because a constricting band acts like a tourniquet, impairs venous return and increases the risk of thrombosis, so the nurse teaches both the client and the UAP about correct use. Asking about comfort, removing the stockings or covering the toes does not correct the unsafe application.",
  "type": "mcq",
  "options": [
   "Ask the client whether the stockings feel comfortable.",
   "Supervise the UAP in removing the stockings.",
   "Discuss the effective use of the stockings with the client and the UAP.",
   "Place a cover over the client's toes to keep them warm."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q045",
  "exam": 3,
  "src": 521,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The charge nurse of the intensive care unit is making assignments for the permanent staff and one RN floated from a medical unit. The client with which condition is best to assign to the float nurse?",
  "rationale": "A medical-surgical nurse is familiar with diabetic ketoacidosis, insulin infusions and frequent glucose monitoring, so this client best matches the float nurse's competencies. A recently extubated client at risk for respiratory failure, intracranial pressure monitoring and vasopressor titration require specialized critical care skills.",
  "type": "mcq",
  "options": [
   "Acute coronary syndrome being treated with vasopressors",
   "Diabetic ketoacidosis with a titrated IV insulin infusion",
   "Subdural hematoma with an intracranial pressure monitoring device",
   "Emphysema, extubated 3 hours ago, receiving heated mist"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q046",
  "exam": 3,
  "src": 716,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse walks into a client's room and notices bright red blood on the sheets and on the floor by the IV pole. Which action should the nurse take first?",
  "rationale": "The nurse must first assess the client to find where the blood is coming from and how much has been lost, because the source determines the intervention, such as pressure on a disconnected IV site or a bleeding wound. Cleaning the spill is not a priority, calling the provider without assessment gives incomplete information, and applying pressure to the IV site assumes a source that has not been confirmed.",
  "type": "mcq",
  "options": [
   "Identify the source and amount of bleeding.",
   "Clean up the spilled blood to reduce infection transmission.",
   "Notify the healthcare provider that the client appears to be bleeding.",
   "Apply direct pressure to the client's IV site."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q047",
  "exam": 3,
  "src": 803,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "Which intervention should the nurse include in the plan of care for a child with tetanus?",
  "rationale": "The tetanus toxin causes severe muscle spasms and seizures that are triggered by external stimuli such as noise, light and touch, so a quiet, darkened room with clustered care reduces spasms. Bright lights, frequent visitors and frequent handling increase stimulation and can precipitate spasms and airway compromise.",
  "type": "mcq",
  "options": [
   "Keep the room brightly lit for close observation.",
   "Encourage frequent visitors to provide support.",
   "Minimize the amount of stimuli in the room.",
   "Perform passive range-of-motion exercises every hour."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q048",
  "exam": 3,
  "src": 776,
  "topic": "Endocrine",
  "clientNeed": "Psychosocial Integrity",
  "stem": "While preparing to discharge a male client who was hospitalized for an adrenal crisis, the client expresses fear about having another crisis and asks to stay in the hospital a few more days. Which intervention should the nurse implement?",
  "rationale": "The client's fear and reluctance to leave suggest significant anxiety that may interfere with self-management, so an outpatient psychosocial assessment arranges ongoing support after discharge, along with reinforcement of stress-dose teaching. Extending the stay is not medically indicated, adrenal crisis can recur with stress or missed doses, and corticosteroid replacement must never be stopped abruptly.",
  "type": "mcq",
  "options": [
   "Explain that an adrenal crisis does not recur once treated.",
   "Tell the client to stop the medication if side effects occur.",
   "Schedule an appointment for an outpatient psychosocial assessment.",
   "Ask the provider to extend the client's hospital stay."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q049",
  "exam": 3,
  "src": 597,
  "topic": "Neuro & Sensory",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is assessing the emotional status of a client with Parkinson's disease. Which client finding is most helpful in planning goals to meet the client's emotional needs?",
  "rationale": "Frequent crying is an expression of the client's emotional state and may indicate depression, which is common in Parkinson's disease and helps the nurse plan emotional support. A fixed stare, a masklike face and monotone speech are motor manifestations of the disease caused by bradykinesia and rigidity, not reliable indicators of the client's feelings.",
  "type": "mcq",
  "options": [
   "Face does not convey any emotion",
   "Uses a monotone when speaking",
   "Stares straight ahead without blinking",
   "Cries frequently during the interview"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q050",
  "exam": 3,
  "src": 2,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A 3-year-old boy with a congenital heart defect is brought to the clinic by his mother. During the assessment, the mother asks the nurse why her child is at the 5th percentile for height and weight. Which response is best for the nurse to provide?",
  "rationale": "Children with congenital heart defects commonly show growth retardation because of increased metabolic demands, fatigue during feeding, and chronic hypoxemia, so an honest, factual explanation answers the mother's question. Asking whether the child seems mentally slower introduces an unfounded worry, the feeding question is accusatory and places blame on the mother, and telling her not to worry dismisses a legitimate concern and offers false reassurance.",
  "type": "mcq",
  "options": [
   "“You should not worry about the growth tables. They are only averages for children.”",
   "“Does your child seem mentally slower than his peers also?”",
   "“Haven't you been feeding him according to recommended daily allowances for children?”",
   "“His smaller size is probably due to the heart disease.”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q051",
  "exam": 3,
  "src": 180,
  "topic": "Renal & GU",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with possible acute kidney injury (AKI) is admitted to the hospital, and mannitol is prescribed as a fluid challenge. Prior to carrying out this prescription, which intervention should the nurse implement?",
  "rationale": "Mannitol is an osmotic diuretic that initially expands intravascular volume, so a baseline of vital signs and breath sounds is needed; if the kidneys do not respond, the fluid shift can cause hypervolemia and pulmonary edema, and the challenge would be stopped. A urine specimen and emptying the bladder do not establish the client's cardiopulmonary safety, and proceeding without a baseline is unsafe.",
  "type": "mcq",
  "options": [
   "Obtain vital signs and breath sounds.",
   "Instruct the client to empty the bladder.",
   "No specific nursing action is required.",
   "Collect a clean-catch urine specimen."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q052",
  "exam": 3,
  "src": 369,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Safety & Infection Control",
  "stem": "An adult male reports that the last time he received penicillin, he developed a severe maculopapular rash all over his chest. Which information should the nurse provide the client about future antibiotic prescriptions?",
  "rationale": "Cephalosporins share a beta-lactam ring with penicillins, and a small percentage of penicillin-allergic clients react to them, so the client should tell all providers about the allergy and be alert for cross-sensitivity. Macrolides are structurally unrelated and are common alternatives. Premedicating does not make penicillin safe, and penicillin allergy should be considered persistent unless formally evaluated.",
  "type": "mcq",
  "options": [
   "The allergy is unlikely to recur after a year has passed.",
   "Take an antihistamine before each dose of penicillin.",
   "Avoid all macrolide antibiotics such as azithromycin.",
   "Be alert for possible cross-sensitivity to cephalosporin agents."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q053",
  "exam": 3,
  "src": 48,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client in septic shock has a double-lumen central venous catheter with 1 liter of 0.9% normal saline infusing at 1 mL/hour through one lumen and TPN infusing at 50 mL/hour through the other lumen. The nurse prepares a newly prescribed IV antibiotic that should take 45 minutes to infuse. Which intervention should the nurse implement?",
  "rationale": "Timely antibiotics are critical in septic shock, and the antibiotic can be safely piggybacked through a port on the normal saline line. No medication should be added to or infused through the TPN line because of incompatibility and infection risk. Interrupting TPN can cause rebound hypoglycemia, and adding the drug to the slow saline bag would deliver it far too slowly to reach therapeutic levels.",
  "type": "mcq",
  "options": [
   "Add the antibiotic to the TPN solution and continue the normal saline.",
   "Use a secondary port of the normal saline line to administer the antibiotic.",
   "Add the antibiotic to the normal saline solution and continue both infusions.",
   "Stop the TPN infusion for the time needed to administer the antibiotic."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q054",
  "exam": 3,
  "src": 320,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A young adult woman at the clinic learns that she is positive for a BRCA1 gene mutation and asks the nurse what to expect next. How should the nurse respond?",
  "rationale": "A BRCA1 mutation significantly increases lifetime risk for breast and ovarian cancer but does not mean she has cancer, so genetic counseling is provided to explain her risk and options such as enhanced screening, chemoprevention and prophylactic surgery. Family history is collected before genetic testing. Discussing treatments or survival rates implies a cancer diagnosis that has not been made.",
  "type": "mcq",
  "options": [
   "Gather additional information about her family history for all types of cancer.",
   "Offer assurance that there are a variety of effective treatments for breast cancer.",
   "Explain that counseling will be provided to give her information about her cancer risk.",
   "Provide information about survival rates for women who have this genetic mutation."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q055",
  "exam": 3,
  "src": 491,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "During a health assessment, the nurse learns that both parents of a child with asthma smoke cigarettes. Which recommendation is best for the nurse to make to the parents?",
  "rationale": "Secondhand smoke is a major asthma trigger, and keeping the home and car smoke-free immediately reduces the child's exposure; this is a realistic first step that the nurse can pair with offering cessation support. Demanding that both parents quit at once is often unrealistic and may be rejected, cutting down still exposes the child to smoke in the home, and nicotine patches support quitting but do not by themselves protect the child from smoke.",
  "type": "mcq",
  "options": [
   "Decrease the number of cigarettes smoked daily.",
   "Obtain nicotine patches to assist in smoking cessation.",
   "Stop smoking immediately.",
   "Avoid smoking in the house."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q056",
  "exam": 3,
  "src": 234,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A male client reports the onset of numbness and tingling in his fingers and around his mouth. Which laboratory value is most important for the nurse to review before contacting the healthcare provider?",
  "rationale": "Circumoral and fingertip paresthesia are early signs of hypocalcemia, which can progress to tetany, laryngospasm and seizures, so the serum calcium should be reviewed before the provider is called. Hypoglycemia causes shakiness and diaphoresis rather than perioral tingling, and urine specific gravity and the WBC count do not explain these symptoms.",
  "type": "mcq",
  "options": [
   "Capillary glucose",
   "Serum calcium",
   "White blood cell count",
   "Urine specific gravity"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q057",
  "exam": 3,
  "src": 700,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse plans to administer a scheduled dose of metoprolol extended-release at 0900 to a client with hypertension. At 0800, the client's telemetry shows second-degree heart block with a ventricular rate of 50 beats/minute. Which action should the nurse take?",
  "rationale": "Beta blockers slow AV conduction and heart rate, and they are contraindicated in second- or third-degree heart block, so the dose is held and the provider notified of the new rhythm. Giving the drug would worsen the block and bradycardia, and the rhythm, rather than the blood pressure, determines safety; a UAP cannot monitor a client with a new dysrhythmia.",
  "type": "mcq",
  "options": [
   "Give the metoprolol as scheduled if the client's systolic blood pressure is greater than 180 mm Hg.",
   "Give the metoprolol as scheduled and assign a UAP to monitor the blood pressure every 30 minutes.",
   "Hold the scheduled dose of metoprolol and notify the healthcare provider of the telemetry pattern.",
   "Administer the metoprolol immediately and monitor the client until the heart rate increases."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q058",
  "exam": 3,
  "src": 522,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The client with which type of wound is most likely to need immediate intervention by the nurse?",
  "rationale": "A laceration is a tear through the skin and underlying tissue with irregular, jagged edges that often bleeds and is contaminated with debris, so it needs prompt control of bleeding, cleansing and closure. An abrasion is a superficial scrape, a contusion is a closed bruise, and an ulceration is a chronic open wound managed over time.",
  "type": "mcq",
  "options": [
   "Contusion",
   "Abrasion",
   "Ulceration",
   "Laceration"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q059",
  "exam": 3,
  "src": 681,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is triaging clients in an urgent care clinic. The client with which symptoms should be referred to the healthcare provider immediately?",
  "rationale": "Headache, photophobia and a stiff neck are classic signs of meningitis, which can progress rapidly to death or permanent neurologic damage and requires immediate evaluation, antibiotics and droplet precautions. The other clients need care for possible infection, dehydration or inflammatory joint disease, but their conditions are not as immediately life-threatening.",
  "type": "mcq",
  "options": [
   "High fever, skin rash, and productive cough",
   "Nausea, vomiting, and poor skin turgor",
   "Malaise, fever, and stiff, swollen joints",
   "Headache, photophobia, and nuchal rigidity"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q060",
  "exam": 3,
  "src": 289,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client is admitted to the emergency department with full-thickness burns to all surfaces of both lower extremities. Which percentage of total body surface area (TBSA) should the nurse document in the electronic medical record?",
  "rationale": "According to the rule of nines, each entire lower extremity (anterior and posterior surfaces) equals 18% of the total body surface area, so both lower extremities equal 36%. Nine percent represents the front or back of one leg, 18% one entire leg, and 45% would add other areas that are not burned.",
  "type": "mcq",
  "options": [
   "9%",
   "18%",
   "45%",
   "36%"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q061",
  "exam": 3,
  "src": 300,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A school-age child who weighs 42 pounds receives a post-tonsillectomy prescription for promethazine 0.5 mg/kg IM to prevent postoperative nausea. The medication is available in 25 mg/mL ampules. How many mL should the nurse administer? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "Convert weight: 42 lb ÷ 2.2 = 19.09 kg. Calculate the dose: 0.5 mg/kg × 19.09 kg = 9.545 mg. Calculate the volume: 9.545 mg ÷ 25 mg × 1 mL = 0.38 mL, which rounds to 0.4 mL. (Note that promethazine carries a boxed warning against use in children younger than 2 years.)",
  "type": "fill",
  "answer": 0.4,
  "unit": "mL",
  "tolerance": 0.01
 },
 {
  "id": "hesi3q062",
  "exam": 3,
  "src": 204,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A female client reports that she has not had a bowel movement for 3 days but is now passing frequent small amounts of liquid stool. Which action should the nurse implement?",
  "rationale": "Several days without a bowel movement followed by frequent small amounts of liquid stool suggests fecal impaction with liquid stool seeping around the hardened mass, so a digital examination confirms the cause. An antidiarrheal would worsen an impaction. C. difficile testing is indicated for new watery diarrhea, often after antibiotics, and increasing fiber does not relieve an existing impaction.",
  "type": "mcq",
  "options": [
   "Obtain a stool specimen for Clostridioides difficile.",
   "Digitally check the client for a fecal impaction.",
   "Administer a prescribed antidiarrheal medication.",
   "Encourage the client to increase dietary fiber."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q063",
  "exam": 3,
  "src": 760,
  "topic": "Cardiovascular",
  "clientNeed": "Basic Care & Comfort",
  "stem": "When conducting diet teaching for a client diagnosed with a myocardial infarction, which snack foods should the nurse encourage the client to eat? (Select all that apply.)",
  "rationale": "A heart-healthy diet after myocardial infarction is low in sodium and saturated fat and rich in fruits, vegetables, lean protein and unsaturated fats, so fresh turkey with berries and unsalted almonds with apples are good choices. Mayonnaise dip is high in fat, salted soda crackers and processed peanut butter add sodium, and bouillon is very high in sodium.",
  "type": "sata",
  "options": [
   "Soda crackers and peanut butter",
   "Fresh vegetables with mayonnaise dip",
   "Fresh turkey slices and berries",
   "Chicken bouillon soup and toast",
   "Raw unsalted almonds and apples"
  ],
  "correct": [
   2,
   4
  ]
 },
 {
  "id": "hesi3q064",
  "exam": 3,
  "src": 799,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Which intervention should the nurse implement during the administration of a vesicant chemotherapeutic agent through an IV site in the client's arm?",
  "rationale": "Vesicants cause severe tissue necrosis if they leak into surrounding tissue, so the nurse checks for blood return and inspects the site frequently for swelling, pain or redness, stopping the infusion immediately if extravasation is suspected. Rapid infusion increases the risk of vein damage, warm compresses are not routinely applied before infusion, and small veins on the back of the hand are avoided for vesicants.",
  "type": "mcq",
  "options": [
   "Infuse the medication as rapidly as possible.",
   "Assess the IV site frequently for signs of extravasation.",
   "Use the smallest vein available in the back of the hand.",
   "Apply a warm compress over the site before starting."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q065",
  "exam": 3,
  "src": 664,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing to administer an IV dose of ciprofloxacin to a client with a urinary tract infection. Which client data requires the most immediate intervention by the nurse?",
  "rationale": "Ciprofloxacin is excreted by the kidneys, and a creatinine of 4.5 mg/dL indicates significant renal impairment that requires dose adjustment, so the nurse should hold the dose and consult the provider. A MRSA result should be reported because it affects antibiotic selection, but the immediate safety issue is the impaired clearance, and a sodium of 145 mEq/L and a mildly elevated WBC count are expected or normal.",
  "type": "mcq",
  "options": [
   "Urine culture positive for MRSA",
   "White blood cell count of 12,000/mm3",
   "Serum sodium of 145 mEq/L",
   "Serum creatinine of 4.5 mg/dL"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q066",
  "exam": 3,
  "src": 464,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Following a lumbar puncture, a client voices several complaints. Which complaint indicates to the nurse that the client is experiencing a complication?",
  "rationale": "A headache that worsens when upright and improves when lying flat is a post-dural puncture headache caused by continued leakage of cerebrospinal fluid from the puncture site, the most common complication of a lumbar puncture. Mild back discomfort at the puncture site is expected, a sore throat is unrelated to the procedure, and nausea alone is nonspecific.",
  "type": "mcq",
  "options": [
   "“I feel sick to my stomach and am going to throw up.”",
   "“I have pain in my lower back when I move my legs.”",
   "“My throat hurts when I swallow.”",
   "“I have a headache that gets worse when I sit up.”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q067",
  "exam": 3,
  "src": 363,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult female client tells the nurse that although she is afraid her abusive boyfriend might one day kill her, she keeps hoping that he will change. Which action should the nurse take first?",
  "rationale": "Victims of intimate partner violence leave when they are ready, and exploring her readiness to talk respects her autonomy and opens the door to safety planning and resources. Insisting that she leave or lecturing her about abusers can make her defensive and end the conversation. Mandatory reporting laws for competent adults vary, and calling police without her consent may increase her danger.",
  "type": "mcq",
  "options": [
   "Call the police to report the abuse the client described.",
   "Explain that abusers rarely change without legal action.",
   "Tell the client that she must leave the relationship today.",
   "Explore the client's readiness to discuss the situation."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q068",
  "exam": 3,
  "src": 403,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An older female client tells the nurse that her muscles have gradually been getting weaker over the past several months. What is the best initial response by the nurse?",
  "rationale": "The nurse first gathers more data about the onset, pattern, affected muscles and effect on function to identify possible causes such as medication effects, electrolyte imbalance or neuromuscular disease. Attributing the weakness to aging is a premature, dismissive assumption, and recommending exercise or a specialist referral before assessment skips the first step of the nursing process.",
  "type": "mcq",
  "options": [
   "Recommend that the client begin a strength-training program.",
   "Ask the client to describe the changes that have occurred.",
   "Reassure the client that weakness is a normal part of aging.",
   "Refer the client to a neurologist for further evaluation."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q069",
  "exam": 3,
  "src": 346,
  "topic": "Renal & GU",
  "clientNeed": "Basic Care & Comfort",
  "stem": "After teaching a male client with chronic kidney disease (CKD) about his therapeutic diet, which foods selected by the client indicate that the teaching was effective? (Select all that apply.)",
  "rationale": "Clients with CKD limit potassium, phosphorus and sodium, and toast and cream of wheat are relatively low in potassium and can fit the diet. Bananas, orange juice and potatoes, especially with the skin, are high in potassium and can cause dangerous hyperkalemia when the kidneys cannot excrete it.",
  "type": "sata",
  "options": [
   "A bowl of cream of wheat",
   "A glass of orange juice",
   "A slice of toast",
   "A baked potato with the skin",
   "A medium banana"
  ],
  "correct": [
   0,
   2
  ]
 },
 {
  "id": "hesi3q070",
  "exam": 3,
  "src": 445,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "During a routine clinic visit, an older female client tells the nurse that she is concerned that flu season is coming soon but is reluctant to get the vaccination. Which action should the nurse take first?",
  "rationale": "The client has expressed reluctance, so the nurse first explores her specific concerns, such as fear of side effects or misinformation, which is essential to address before she can make an informed decision. Vaccination history, exposure history and the consent form are gathered or reviewed afterward.",
  "type": "mcq",
  "options": [
   "Review the vaccination informed consent form with the client.",
   "Determine when the client last had an influenza vaccination.",
   "Ask about any recent exposure to persons with the flu.",
   "Discuss the concerns the client has about the vaccination."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q071",
  "exam": 3,
  "src": 778,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "When should intimate partner violence (IPV) screening occur?",
  "rationale": "Universal, routine screening, conducted privately, identifies victims who may not show obvious signs and normalizes the conversation. Relying on suspicion or unexplained injuries misses many victims because clinicians' suspicions vary and abuse is often hidden, and waiting until abuse is confirmed defeats the purpose of screening.",
  "type": "mcq",
  "options": [
   "As a routine part of each healthcare encounter",
   "Once the clinician confirms a history of abuse",
   "Only when a client presents with an unexplained injury",
   "As soon as the clinician suspects a problem"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q072",
  "exam": 3,
  "src": 353,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adolescent whose mother recently died comes to the school nurse complaining of a headache. Which statement by the student warrants further exploration by the nurse?",
  "rationale": "Wanting to “go see” a parent who has died may indicate suicidal ideation, so the nurse must ask directly about thoughts of self-harm. Dreams about the deceased, sadness with crying and difficulty concentrating are normal manifestations of grief.",
  "type": "mcq",
  "options": [
   "“It's hard to concentrate on my homework.”",
   "“I miss Mom and would like to go see her.”",
   "“I've been very sad and cry a lot at night.”",
   "“I've had dreams about Mom since she died.”"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q073",
  "exam": 3,
  "src": 77,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving an IV solution of nitroglycerin 100 mg/500 mL D5W at 10 mcg/minute. The nurse should program the infusion pump to deliver how many mL/hour? (Enter numeric value only.)",
  "rationale": "Convert the concentration: 100 mg = 100,000 mcg, and 100,000 mcg ÷ 500 mL = 200 mcg/mL. Hourly dose: 10 mcg/minute × 60 minutes = 600 mcg/hour. Rate: 600 mcg/hour ÷ 200 mcg/mL = 3 mL/hour (equivalently 0.01 mg × 60 × 500 ÷ 100 = 3).",
  "type": "fill",
  "answer": 3,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi3q074",
  "exam": 3,
  "src": 94,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client who had a below-the-knee amputation is experiencing severe phantom limb pain and asks the nurse whether mirror therapy will make the pain stop. Which response by the nurse is likely to be most helpful?",
  "rationale": "Mirror therapy is an evidence-based intervention; visual feedback of an intact limb in the mirror is thought to reorganize cortical processing in the hemisphere opposite the amputation and reduce pain perception. Giving accurate, encouraging information supports the client's participation. Telling the client not to expect relief undermines a helpful therapy, claiming TENS is superior is not supported, and asking where the client learned of it does not answer the question.",
  "type": "mcq",
  "options": [
   "“Research indicates that mirror therapy is effective in reducing phantom limb pain.”",
   "“Where did you learn about the use of mirror therapy for phantom limb pain?”",
   "“Transcutaneous electrical nerve stimulation (TENS) has been found to be more effective.”",
   "“You can try mirror therapy, but do not expect it to eliminate the pain completely.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q075",
  "exam": 3,
  "src": 177,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with pneumonia has an IV of lactated Ringer's solution infusing at 30 mL/hour. Current laboratory results include a serum sodium level of 155 mEq/L and a serum potassium level of 4 mEq/L. Which nursing intervention is most important?",
  "rationale": "A sodium of 155 mEq/L indicates hypernatremia, usually from water deficit with fever and increased insensible losses in pneumonia, and the IV at 30 mL/hour is inadequate, so the nurse seeks a prescription to increase fluid replacement. The potassium is normal, so a supplement is not needed. Restricting fluids would worsen the water deficit, and hypertonic 3% saline is used for severe hyponatremia, not hypernatremia.",
  "type": "mcq",
  "options": [
   "Obtain a prescription to increase the IV rate.",
   "Obtain a prescription for an oral potassium supplement.",
   "Change the IV solution to 3% sodium chloride.",
   "Restrict the client's oral fluid intake."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q076",
  "exam": 3,
  "src": 480,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While assessing a client 48 hours after a fracture, the nurse observes ecchymosis at the fracture site and recognizes that hematoma formation at the site of the bone fragments has occurred. Which action should the nurse implement?",
  "rationale": "Hematoma formation at the fracture site is the first stage of normal bone healing, so the bruising is expected and is documented to provide a baseline. It does not suggest a bleeding disorder, heat applied early increases bleeding and swelling, and a fasciotomy is reserved for compartment syndrome, which presents with severe pain and neurovascular changes.",
  "type": "mcq",
  "options": [
   "Apply a heating pad to the bruised area every 2 hours.",
   "Prepare the client for an emergency fasciotomy.",
   "Notify the provider of a possible bleeding disorder.",
   "Document the extent of the bruising in the medical record."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q077",
  "exam": 3,
  "src": 200,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A female client is taking alendronate, a bisphosphonate, for postmenopausal osteoporosis. The client tells the nurse that she is experiencing jaw pain. How should the nurse respond?",
  "rationale": "Osteonecrosis of the jaw is a serious adverse effect of bisphosphonates, and jaw pain, swelling or loose teeth must be reported to the provider for evaluation. Telling the client the pain is expected or treating it only with comfort measures could delay diagnosis. Alendronate must be taken in the morning on an empty stomach while remaining upright, so bedtime dosing is incorrect and does not address the problem.",
  "type": "mcq",
  "options": [
   "Explain that jaw pain is expected and usually resolves.",
   "Instruct her to take the dose at bedtime instead.",
   "Report the client's jaw pain to the healthcare provider.",
   "Suggest a soft diet and warm compresses to the jaw."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q078",
  "exam": 3,
  "src": 580,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse has received funding to design a health promotion project for African-American women at risk for breast cancer. Which resource is most important in designing this program?",
  "rationale": "Involving trusted community leaders and stakeholders from the start makes a program culturally relevant and acceptable, which is essential for participation and success. A list of residents and morbidity data are useful background information, and producing a video is an implementation detail that follows the planning done with the community.",
  "type": "mcq",
  "options": [
   "A listing of African-American women who live in the community",
   "Morbidity data for breast cancer in women of all races",
   "Technical assistance to produce a video on breast self-examination",
   "Participation of community leaders in planning the program"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q079",
  "exam": 3,
  "src": 623,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is caring for four clients: client A has COPD with an oxygen saturation of 91% on 2 L/min; client B has a postoperative hemoglobin of 8.7 g/dL; client C was newly admitted with a potassium level of 5.6 mEq/L; and client D is scheduled for an appendectomy and has a white blood cell count of 15,000/mm3. Which intervention should the nurse implement?",
  "rationale": "A postoperative hemoglobin of 8.7 g/dL suggests significant blood loss, and confirming that blood is available prepares for a likely transfusion. A saturation of 91% is an acceptable target for a client with COPD, and increasing oxygen could suppress the respiratory drive. Limiting potassium-rich foods helps but does not address the immediate need, and an elevated WBC is expected with appendicitis and is a reason for surgery rather than a delay.",
  "type": "mcq",
  "options": [
   "Increase the oxygen flow rate to 4 L/min by face mask for client A.",
   "Determine the availability of two units of packed red cells in the blood bank for client B.",
   "Remove foods such as bananas and orange juice from client C's breakfast tray.",
   "Inform client D that surgery will be delayed until the infection responds to antibiotics."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q080",
  "exam": 3,
  "src": 271,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A new member who joins the nursing team at a meeting spreads books on the table, puts items on two chairs, and sits on a third chair. Other members of the group are forced to move closer together and remove their possessions from the table. Which action should the nurse leader take?",
  "rationale": "The leader should address the behavior directly but respectfully, asking the new member to move belongings so that everyone can be accommodated, which sets group norms without embarrassment. Accommodating the behavior or bringing in more chairs ignores the problem and lets one member's territorial behavior disrupt the group. Citing limited space avoids the real issue of respect for the group.",
  "type": "mcq",
  "options": [
   "Tell the new person to move belongings because of limited space.",
   "Move to welcome and accommodate the new person.",
   "Bring in additional chairs so that all staff members can be seated.",
   "Ask the new person to move belongings to accommodate others."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q081",
  "exam": 3,
  "src": 670,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse has positioned and draped a female client and is ready to insert an indwelling urinary catheter. At this point in the procedure, which actions should the nurse take before inserting the catheter? (Select all that apply.)",
  "rationale": "Before insertion, the nurse confirms bladder distention as a baseline, holds the sterile catheter a few inches from the tip with the dominant hand for control, and ensures the drainage bag is attached to the bed frame below bladder level. Asking the client to bear down is done during, not before, insertion as the catheter is advanced, and perineal care with soap and water is completed before the sterile field is set up, not at this point.",
  "type": "sata",
  "options": [
   "Complete perianal care with soap and water.",
   "Ask the client to bear down as if voiding to relax the sphincter.",
   "Hold the catheter 3 to 4 inches (7.5 to 10 cm) from its tip.",
   "Gently palpate the client's bladder for distention.",
   "Secure the urinary drainage bag to the bed frame."
  ],
  "correct": [
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi3q082",
  "exam": 3,
  "src": 185,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with type 2 diabetes mellitus is admitted for antibiotic treatment of a leg ulcer. To monitor the client for the onset of hyperosmolar hyperglycemic state (HHS), which actions should the nurse take? (Select all that apply.)",
  "rationale": "HHS develops with marked hyperglycemia (often above 600 mg/dL), profound osmotic diuresis and dehydration, so blood glucose, vital signs for hypovolemia and level of consciousness for neurologic changes are monitored. Ketones are minimal or absent in HHS and are monitored for diabetic ketoacidosis. A wound culture guides antibiotic therapy but does not detect the onset of HHS.",
  "type": "sata",
  "options": [
   "Check urine for ketones",
   "Monitor vital signs",
   "Measure blood glucose",
   "Obtain a culture of the wound",
   "Assess level of consciousness"
  ],
  "correct": [
   1,
   2,
   4
  ]
 },
 {
  "id": "hesi3q083",
  "exam": 3,
  "src": 59,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client is admitted to the emergency department with a respiratory rate of 34 breaths/minute and high-pitched wheezing on inspiration and expiration; the medical diagnosis is a severe asthma exacerbation. Which assessment finding, obtained 10 minutes after the admission assessment, should the nurse report immediately to the healthcare provider?",
  "rationale": "Absence of wheezing in a client who was in severe distress 10 minutes earlier suggests a “silent chest,” meaning airflow is so limited that wheezing can no longer be heard; this signals impending respiratory failure and requires immediate intervention. Expiratory wheezing alone, a falling respiratory rate of 28 and a saturation of 93% suggest the client is responding to treatment.",
  "type": "mcq",
  "options": [
   "Oxygen saturation of 93% on 2 L/min",
   "Expiratory wheezing heard in all lung fields",
   "Respiratory rate of 28 breaths/minute",
   "No wheezing upon auscultation of the chest"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q084",
  "exam": 3,
  "src": 116,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client who underwent an uncomplicated gastric bypass surgery is having difficulty with diet management. Which dietary instruction is most important for the nurse to explain to the client?",
  "rationale": "The new gastric pouch holds only a small volume, so small, volume-controlled meals spaced evenly through the day are most important to avoid stretching the pouch or anastomosis, prevent dumping syndrome and meet nutritional needs. Chewing thoroughly and limiting fatty or gas-forming foods are helpful, but fluids should be taken between meals rather than with meals to avoid filling the pouch and accelerating dumping.",
  "type": "mcq",
  "options": [
   "Eliminate or reduce the intake of fatty and gas-forming foods.",
   "Plan volume-controlled, evenly spaced meals throughout the day.",
   "Sip fluids slowly with each meal and between meals.",
   "Chew food slowly and thoroughly before attempting to swallow."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q085",
  "exam": 3,
  "src": 301,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A school-age child was recently diagnosed with celiac disease. Which instruction should the nurse give the classroom teacher?",
  "rationale": "Celiac disease requires lifelong avoidance of gluten, found in wheat, barley and rye, and homemade baked goods usually contain wheat flour and may be cross-contaminated. Low sugar content does not make baked goods gluten-free. Corn and rice are naturally gluten-free and safe, and oats are often contaminated with gluten unless certified gluten-free.",
  "type": "mcq",
  "options": [
   "The child should avoid eating homemade cookies and cupcakes during parties.",
   "The child may eat any baked goods at parties as long as they are low in sugar.",
   "The child needs extra servings of oatmeal at snack time for added fiber.",
   "The child must avoid snacks made from corn or rice, such as corn chips."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q086",
  "exam": 3,
  "src": 288,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A nurse manager is preparing the curriculum for a class for charge nurses. A staffing formula based on which data ensures quality client care and is most cost-effective?",
  "rationale": "Matching staff skill mix to client acuity places the right level of caregiver with each client, supporting safe, high-quality care without over- or under-staffing. Bed numbers and average census ignore how sick the clients are, and a budget-driven formula does not account for clients' care needs.",
  "type": "mcq",
  "options": [
   "Salary budget allocated for the unit",
   "Skills of the staff and client acuity",
   "Number of licensed beds on the unit",
   "Average daily census over the past year"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q087",
  "exam": 3,
  "src": 817,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While helping a client who recently had a hip replacement onto a bedpan, the nurse notices a small amount of bloody drainage on the surgical dressing, the client's skin is warm to the touch, and the urine has a strong odor. Which action should the nurse take?",
  "rationale": "Warm skin and foul-smelling urine suggest a urinary tract infection, and measuring the temperature provides objective data to report to the provider. A specimen from a bedpan is contaminated, and a clean-catch or catheterized specimen is needed. A small amount of bloody drainage is expected after surgery and does not require removing the dressing, and an indwelling catheter increases infection risk.",
  "type": "mcq",
  "options": [
   "Obtain a urine sample from the bedpan.",
   "Insert an indwelling urinary catheter.",
   "Remove the dressing and assess the surgical site.",
   "Measure the client's oral temperature."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q088",
  "exam": 3,
  "src": 354,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "An adolescent's mother calls the clinic because the teen has had recurrent vomiting and has become confused and combative over the last 2 days. The mother states that the teen takes vitamins, calcium, magnesium, and aspirin. Which nursing intervention has the highest priority?",
  "rationale": "Recurrent vomiting with an acute change in mental status in a teen taking aspirin suggests salicylate toxicity or Reye syndrome, which can cause cerebral edema and liver failure, so immediate emergency evaluation is required. Waiting until tomorrow, managing at home with clear liquids or simply switching to acetaminophen would delay treatment of a potentially fatal condition.",
  "type": "mcq",
  "options": [
   "Suggest giving the teen clear liquids in small, frequent amounts.",
   "Instruct the mother to take the teen to the emergency room.",
   "Tell the mother to give acetaminophen instead of aspirin.",
   "Advise the mother to stop the supplements and call back tomorrow."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q089",
  "exam": 3,
  "src": 740,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which action should the school nurse implement to provide secondary prevention for school-age children?",
  "rationale": "Secondary prevention focuses on early detection and prompt treatment of existing conditions, and screening programs such as hearing and vision tests identify problems before they cause greater harm. Health lessons and teaching about lice prevention are primary prevention, and supporting a student's management of established diabetes is tertiary prevention.",
  "type": "mcq",
  "options": [
   "Observe a student with type 1 diabetes self-administer insulin.",
   "Prepare a presentation on how to prevent the spread of lice.",
   "Initiate a hearing and vision screening program for first-graders.",
   "Collaborate with a science teacher to prepare a health lesson."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q090",
  "exam": 3,
  "src": 112,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client who received multiple antihypertensive medications experiences syncope due to a drop in blood pressure to 70/40 mm Hg. What is the rationale for the nurse's decision to hold the client's scheduled antihypertensive medication?",
  "rationale": "Antihypertensives from different classes that each lower blood pressure produce an additive effect, the sum of their individual effects, which can cause excessive hypotension. Increased urinary clearance would lower drug levels rather than intensify their effect. An antagonistic interaction would raise the blood pressure, and synergism describes a combined effect greater than the sum of the drugs' effects, which is not the mechanism described here.",
  "type": "mcq",
  "options": [
   "The antagonistic interaction among the various blood pressure medications has reduced their effectiveness.",
   "Increased urinary clearance of the multiple medications has produced diuresis and lowered the blood pressure.",
   "The additive effect of multiple medications has caused the blood pressure to drop too low.",
   "The synergistic effect of the multiple medications has resulted in drug toxicity and resulting hypotension."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q091",
  "exam": 3,
  "src": 418,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "An unlicensed assistive personnel (UAP) assigned to obtain vital signs reports to the charge nurse that a client has a weak pulse with a rate of 44 beats/minute. Which action should the charge nurse implement?",
  "rationale": "A weak, slow radial pulse requires prompt validation by a licensed nurse, and an LPN can collect data such as simultaneous apical and radial rates to identify a pulse deficit, which may indicate a dysrhythmia. Waiting an hour or simply documenting the finding delays evaluation of possible bradycardia, and calling the provider before the finding is verified provides incomplete information.",
  "type": "mcq",
  "options": [
   "Notify the healthcare provider of the pulse rate without further assessment.",
   "Instruct the UAP to recheck the client's pulse again in one hour.",
   "Assign a practical nurse (LPN) to determine whether an apical-radial pulse deficit is present.",
   "Tell the UAP to document the pulse and continue with vital signs."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q092",
  "exam": 3,
  "src": 35,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client arrives on the surgical floor after major abdominal surgery. Which intervention should the nurse perform first?",
  "rationale": "On arrival from surgery the nurse first establishes the client's physiologic stability by obtaining vital signs, which reflect airway, breathing and circulation and provide a baseline for comparison. Checking the dressing, assessing pain and reviewing prescriptions are all part of the immediate postoperative assessment, but they follow confirmation that the client is hemodynamically stable.",
  "type": "mcq",
  "options": [
   "Review the postoperative prescriptions.",
   "Assess the client's level of pain.",
   "Determine the client's vital signs.",
   "Check the surgical dressing for drainage."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q093",
  "exam": 3,
  "src": 33,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client admitted with an acute coronary syndrome (ACS) is receiving eptifibatide, a glycoprotein (GP) IIb/IIIa inhibitor. Which finding places the client at greatest risk?",
  "rationale": "Glycoprotein IIb/IIIa inhibitors block platelet aggregation, and the most dangerous complication is intracranial hemorrhage, which presents as a sudden decline in level of consciousness; unresponsiveness requires stopping the infusion and emergency intervention. Minor oozing at an IV site is expected and managed with pressure. A platelet count of 160,000/mm3 is within normal limits, and a blood pressure of 138/86 mm Hg is not critically elevated.",
  "type": "mcq",
  "options": [
   "Blood pressure of 138/86 mm Hg",
   "Platelet count of 160,000/mm3",
   "Unresponsive to painful stimuli",
   "Oozing of blood at the IV insertion site"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q094",
  "exam": 3,
  "src": 147,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with bipolar disorder began taking valproic acid 250 mg PO three times daily two months ago. Which finding provides the best indication that the medication regimen is effective?",
  "rationale": "Valproic acid is a mood stabilizer, and a marked decrease in manic behavior observed by the family shows the therapeutic goal is being met. A level of 30 mcg/mL is below the therapeutic range of about 50 to 125 mcg/mL. Sleeping only 3 hours a night indicates ongoing mania, and weight gain is a common adverse effect rather than evidence of effectiveness.",
  "type": "mcq",
  "options": [
   "The client reports sleeping 3 hours each night.",
   "The serum valproic acid level is 30 mcg/mL.",
   "The client has gained 5 pounds since starting the drug.",
   "The family reports a great reduction in the client's manic behavior."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q095",
  "exam": 3,
  "src": 240,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client admitted to the mental health unit for treatment of bipolar disorder has slightly slurred speech and an unsteady gait. Which assessment finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "The therapeutic serum lithium level is about 0.6 to 1.2 mEq/L (up to 1.5 mEq/L during acute mania), and a level of 1.6 mEq/L with slurred speech and ataxia indicates lithium toxicity that must be reported. The blood pressure and sodium level are normal, although low sodium increases the risk of toxicity, and a 1-pound weight gain is not significant.",
  "type": "mcq",
  "options": [
   "Weight gain of 1 pound in a week",
   "Blood pressure of 128/80 mm Hg",
   "Serum lithium level of 1.6 mEq/L",
   "Serum sodium level of 140 mEq/L"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q096",
  "exam": 3,
  "src": 556,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The mother of an adolescent tells the clinic nurse, “My son has athlete's foot. I have been applying triple antibiotic ointment for two days, but there has been no improvement.” Which instruction should the nurse provide?",
  "rationale": "Tinea pedis is a fungal infection, so an antibacterial ointment is ineffective and its oily base keeps the skin moist; the feet should be kept clean and dry, with clean cotton socks and an antifungal agent. Continuing the antibiotic will not help, prolonged soaking keeps the skin moist and macerated, and a corticosteroid can worsen a fungal infection.",
  "type": "mcq",
  "options": [
   "Soak the feet in hot water for 30 minutes twice a day.",
   "Apply a hydrocortisone cream and cover the feet at night.",
   "Continue the antibiotic ointment for at least two more weeks.",
   "Stop using the ointment, dry the feet completely, and wear clean socks."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q097",
  "exam": 3,
  "src": 601,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is helping the mother of a child with phenylketonuria (PKU) select foods that are consistent with the child's dietary restrictions. Which foods are contraindicated for this child?",
  "rationale": "Aspartame is made from phenylalanine, which children with PKU cannot metabolize, so it must be avoided along with high-protein foods such as meat, dairy and eggs. Fruits, low-protein specialty breads and rice are low in phenylalanine and are allowed in measured amounts.",
  "type": "mcq",
  "options": [
   "Fresh fruits such as apples",
   "Foods sweetened with aspartame",
   "Plain cooked rice",
   "Specially prepared low-protein bread"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q098",
  "exam": 3,
  "src": 766,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "When evaluating a client's rectal bleeding, which findings should the nurse document?",
  "rationale": "Documenting the color, consistency, amount and frequency of each stool, such as bright red blood, maroon stool or black tarry stool, helps estimate the source and amount of bleeding and track whether it is worsening. Fluid intake, abdominal girth and urinary frequency do not describe the bleeding.",
  "type": "mcq",
  "options": [
   "The frequency of urination",
   "The client's daily fluid intake",
   "The color and characteristics of each stool",
   "The client's abdominal girth"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q099",
  "exam": 3,
  "src": 816,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While the nurse is assessing a radial arterial catheter, the client complains of numbness and pain distal to the insertion site. Which intervention should the nurse implement?",
  "rationale": "Pain and numbness distal to a radial arterial line indicate arterial occlusion or ischemia of the hand, so the catheter is removed promptly per protocol, pressure is applied, and the provider is notified. Flushing could dislodge a clot into the distal circulation, elevating the arm further reduces arterial flow, and warm compresses do not relieve an occlusion.",
  "type": "mcq",
  "options": [
   "Promptly remove the arterial catheter from the radial artery.",
   "Flush the arterial catheter with 10 mL of normal saline.",
   "Elevate the arm above the level of the heart.",
   "Apply a warm compress over the insertion site."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q100",
  "exam": 3,
  "src": 226,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client is admitted with a severe asthma attack. For the last 3 hours he has had increasing shortness of breath. His arterial blood gases are pH 7.22, PaCO2 55 mm Hg, HCO3 25 mEq/L. Which intervention should the nurse implement?",
  "rationale": "The ABGs show acute uncompensated respiratory acidosis from air trapping and hypoventilation, so a short-acting bronchodilator such as albuterol is needed to relieve bronchospasm and improve ventilation. Rest periods, pursed-lip breathing and comfortable positioning are supportive, but they will not reverse the bronchoconstriction that is causing CO2 retention.",
  "type": "mcq",
  "options": [
   "Instruct the client to use pursed-lip breathing.",
   "Administer a PRN dose of albuterol.",
   "Position the client for maximum comfort.",
   "Space care to provide periods of rest."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q101",
  "exam": 3,
  "src": 16,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A 46-year-old male client who had a myocardial infarction 24 hours ago comes to the nurse's station fully dressed and wanting to go home. He tells the nurse that he is feeling much better. Based on this behavior, which nursing problem should the nurse formulate?",
  "rationale": "Insisting on going home one day after a myocardial infarction and minimizing the illness are classic behaviors of denial, a defense mechanism that becomes ineffective when it interferes with necessary treatment. Nothing in the behavior suggests fear or anxiety, which would usually present as restlessness or expressed worry. Deficient knowledge and orthostatic hypotension may be relevant later, but they do not explain this client's behavior.",
  "type": "mcq",
  "options": [
   "Ineffective coping related to denial",
   "Deficient knowledge related to cardiac medications",
   "Anxiety related to fear of death",
   "Risk for injury related to orthostatic hypotension"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q102",
  "exam": 3,
  "src": 275,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "A newly hired home health nurse is planning the initial visit to an adult client who has had multiple sclerosis (MS) for 20 years, is bed-bound, and is lifted by a hoist. An unlicensed caregiver provides care 8 hours a day, 5 days a week. During the initial visit, which intervention is most important for the nurse to implement?",
  "rationale": "A bed-bound client who depends on a hoist cannot meet basic needs independently, and the caregiver is present only 40 of 168 hours each week, so the most important safety issue is how care is provided during the remaining time. Reviewing the caregiver's records, teaching exercises and assessing knowledge of MS are appropriate later but do not address the gap in essential care.",
  "type": "mcq",
  "options": [
   "Review the unlicensed caregiver's training and certification records.",
   "Teach the client active range-of-motion exercises for all extremities.",
   "Assess the client's knowledge about the long-term course of MS.",
   "Determine how the client is cared for when the caregiver is not present."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q103",
  "exam": 3,
  "src": 764,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "When entering a client's room to administer a 0900 IV antibiotic, the nurse finds the client engaged in sexual activity with a visitor. Which action should the nurse implement?",
  "rationale": "Consensual sexual activity between adults is a private matter, so the nurse respects the client's privacy by leaving and returning later to give the medication, as a brief delay in the antibiotic is acceptable. Ignoring the situation and proceeding violates privacy, reprimanding the client is judgmental, and the event is not an incident requiring a report.",
  "type": "mcq",
  "options": [
   "Complete an unusual occurrence report.",
   "Ignore the behavior and hang the IV antibiotic.",
   "Tell the client to stop the inappropriate behavior.",
   "Leave the room and close the door quietly."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q104",
  "exam": 3,
  "src": 680,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is teaching a postmenopausal client about osteoporosis prevention. The client reports that she smokes 2 packs of cigarettes a day and takes 750 mg of calcium supplements daily. Which information should the nurse include?",
  "rationale": "Postmenopausal women need about 1,200 mg of calcium daily, and up to 1,500 mg in some guidelines, from diet and supplements combined, so 750 mg alone is inadequate; smoking cessation should also be encouraged. Smoking lowers estrogen levels and accelerates bone loss. Calcium is absorbed best in doses of 500 to 600 mg or less, and high-fiber foods reduce its absorption.",
  "type": "mcq",
  "options": [
   "Smoking does not affect bone density in women after menopause.",
   "Calcium supplements should be taken all at once with a high-fiber meal.",
   "Postmenopausal women need about 1,200 to 1,500 mg of calcium daily, so her intake is inadequate.",
   "Her 750 mg daily supplement already meets the recommended calcium intake."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q105",
  "exam": 3,
  "src": 457,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "During the admission assessment, the nurse auscultates heart sounds for a client with no history of cardiovascular disease. Where should the nurse listen when assessing the client's point of maximal impulse (PMI)?",
  "rationale": "In a healthy adult, the PMI is located at the cardiac apex, at the fifth intercostal space in the left midclavicular line, where the left ventricle lies closest to the chest wall; this is also the mitral area. The second right intercostal space is the aortic area, the second left intercostal space is the pulmonic area, and the fourth left sternal border is the tricuspid area. A displaced PMI suggests cardiac enlargement.",
  "type": "mcq",
  "options": [
   "Fifth intercostal space at the left midclavicular line",
   "Second intercostal space at the left sternal border",
   "Fourth intercostal space at the left sternal border",
   "Second intercostal space at the right sternal border"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q106",
  "exam": 3,
  "src": 636,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is evaluating a client's symptoms and formulates the nursing diagnosis “Risk for injury related to possible urinary tract infection.” Which symptoms indicate the need for this diagnosis?",
  "rationale": "Painful urination with fever is characteristic of a urinary tract infection, and fever suggests possible upper tract involvement. Polyuria with polydipsia suggests hyperglycemia or diabetes insipidus, oliguria with edema suggests kidney injury or fluid overload, and constipation with distention suggests a bowel problem.",
  "type": "mcq",
  "options": [
   "Fever and dysuria",
   "Polyuria and polydipsia",
   "Oliguria and peripheral edema",
   "Constipation and abdominal distention"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q107",
  "exam": 3,
  "src": 87,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client presents to the emergency department with right-sided facial asymmetry. The nurse asks the client to perform a series of movements that require use of the facial muscles. Which findings suggest that the client has most likely experienced Bell's palsy rather than a stroke?",
  "rationale": "Bell's palsy affects the peripheral facial nerve (cranial nerve VII), so the entire side of the face is weak, including the forehead: the client cannot close the eye, wrinkle the brow or smile on the affected side. A stroke is a central lesion, and because the forehead receives bilateral cortical input, the upper face is usually spared. Arm weakness and slurred speech point to a stroke, and a sudden severe headache with vomiting suggests hemorrhage.",
  "type": "mcq",
  "options": [
   "Sudden severe headache with nausea and vomiting",
   "Weakness of the lower face with the forehead spared",
   "Inability to close the affected eye, raise the brow, or smile",
   "Slurred speech with weakness of the right arm"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q108",
  "exam": 3,
  "src": 697,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse observes an unlicensed assistive personnel (UAP) positioning a newly admitted client who has a seizure disorder. The client is supine, and the UAP is placing soft pillows along the side rails. Which action should the nurse implement?",
  "rationale": "Padding the side rails protects the client from injury during a seizure, but loose pillows can shift and cause suffocation, so blankets or pads are secured to the rails instead. Objects should never be placed in the mouth during a seizure, and restraints increase the risk of fractures and soft-tissue injury.",
  "type": "mcq",
  "options": [
   "Leave the pillows in place to cushion the client during a seizure.",
   "Apply soft wrist restraints to prevent injury during a seizure.",
   "Instruct the UAP to secure soft blankets or pads to the side rails instead of pillows.",
   "Place a padded tongue blade at the bedside for use during a seizure."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q109",
  "exam": 3,
  "src": 531,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider changes a client's medication from IV to PO administration and doubles the dose. The nurse notes in the drug guide that the oral form of the medication has a high first-pass effect and reduced bioavailability. Which action should the nurse implement?",
  "rationale": "Drugs with a high first-pass effect are partly metabolized by the liver before reaching the systemic circulation, so oral doses must be larger than IV doses to achieve the same effect; the doubled dose accounts for this, and the prescription is appropriate. Holding the drug, halving the dose or changing the route without a prescription would result in an inadequate dose or an unapproved route.",
  "type": "mcq",
  "options": [
   "Administer the medication by the oral route as prescribed.",
   "Give the tablet sublingually to bypass the liver.",
   "Hold the medication and ask the provider to keep the IV route.",
   "Give half of the newly prescribed dose by mouth."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q110",
  "exam": 3,
  "src": 474,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "Following surgery, a male client with antisocial personality disorder frequently requests that a specific nurse be assigned to his care and is belligerent when another nurse is assigned. Which action should the charge nurse implement?",
  "rationale": "Clients with antisocial personality disorder often manipulate staff and split the team, so consistent limit-setting with a clear explanation that assignments are made by the staff is the therapeutic approach. Granting the request rewards manipulation, questioning the nurse invites splitting, and threatening transfer is punitive rather than a consistent limit.",
  "type": "mcq",
  "options": [
   "Advise the client that assignments are not based on client requests.",
   "Tell the client he will be transferred if the behavior continues.",
   "Assign the requested nurse each shift to prevent further conflict.",
   "Ask the requested nurse why the client prefers her care."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q111",
  "exam": 3,
  "src": 211,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Safety & Infection Control",
  "stem": "A female client with breast cancer who completed her first chemotherapy treatment today at an outpatient center is preparing for discharge. Which behavior indicates that the client understands her care needs?",
  "rationale": "Chemotherapy causes myelosuppression, with the white blood cell nadir typically 7 to 14 days after treatment, so planning quiet activities at home shows she understands the need to avoid crowds and sources of infection. A birthday party exposes her to crowds and children who may be ill. Fresh flowers and standing water can harbor bacteria and fungi, and soil contains organisms, so gardening without gloves increases infection risk.",
  "type": "mcq",
  "options": [
   "Plans to resume gardening in her yard without wearing gloves",
   "Bought a bouquet of fresh flowers to keep at her bedside",
   "Made plans to attend her grandson's birthday party this weekend",
   "Rented movies and borrowed books to use while passing time at home"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q112",
  "exam": 3,
  "src": 380,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An antacid is prescribed for a client with gastroesophageal reflux disease (GERD). The client asks, “How does this help my GERD?” What is the best response by the nurse?",
  "rationale": "Antacids are weak bases that chemically neutralize gastric acid, raising the pH and reducing irritation of the esophagus when reflux occurs. Coating the mucosa describes sucralfate, improving gastric emptying describes prokinetics such as metoclopramide, and decreasing acid production describes H2 blockers and proton pump inhibitors.",
  "type": "mcq",
  "options": [
   "“Antacids decrease the production of gastric secretions.”",
   "“It will improve the emptying of food from your stomach.”",
   "“Antacids neutralize the acid in your stomach.”",
   "“This medication coats the lining of your esophagus.”"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q113",
  "exam": 3,
  "src": 165,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with hyperthyroidism is to be treated with radioactive iodine (I-131). Which explanation should the nurse include in preparing this client for this treatment?",
  "rationale": "I-131 is given orally as a tasteless, colorless liquid or capsule, usually in an outpatient setting, and it is taken up by the thyroid, where it gradually destroys overactive tissue. No anesthesia is required. The client follows radiation precautions at home for several days, such as limiting close contact and flushing twice, rather than prolonged isolation, and the therapeutic effect takes 6 to 8 weeks or longer.",
  "type": "mcq",
  "options": [
   "Describe radioactive iodine as a tasteless, colorless medication given by the healthcare provider.",
   "Explain that the treatment is given under general anesthesia in the operating room.",
   "Describe how thyroid levels return to normal within 24 hours of the treatment.",
   "Explain that the client will be isolated in a lead-lined room for two weeks."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q114",
  "exam": 3,
  "src": 810,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Which problem reported by a client taking lovastatin requires the most immediate follow-up by the nurse?",
  "rationale": "Statins can cause myopathy and rhabdomyolysis, in which muscle breakdown releases myoglobin that can cause acute kidney injury, so unexplained muscle pain or weakness must be reported promptly for evaluation of creatine kinase. GI upset, cramping and taste changes are minor side effects.",
  "type": "mcq",
  "options": [
   "Altered taste",
   "Abdominal cramps",
   "Muscle pain",
   "Diarrhea and flatulence"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q115",
  "exam": 3,
  "src": 398,
  "topic": "Respiratory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "An older adult male is admitted with complications of chronic obstructive pulmonary disease (COPD). He reports progressive dyspnea that worsens on exertion and increasing weakness over the past month. The nurse notes dependent edema in both lower legs. Based on these findings, which dietary instruction should the nurse provide?",
  "rationale": "Dependent edema with worsening dyspnea in COPD suggests cor pulmonale, right-sided heart failure caused by pulmonary hypertension, so restricting fluids (and sodium) reduces edema and the workload of the right ventricle. Clients with COPD need high-calorie, high-protein diets in small frequent meals because the work of breathing increases energy needs, and meal timing does not affect fluid retention.",
  "type": "mcq",
  "options": [
   "Restrict daily fluid intake.",
   "Limit the intake of high-calorie foods.",
   "Eat meals at the same time daily.",
   "Maintain a low-protein diet."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q116",
  "exam": 3,
  "src": 428,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "At 0600, while admitting a woman for a scheduled repeat cesarean birth, the nurse learns that she drank a cup of coffee at 0400 to avoid getting a headache. Which action should the nurse take first?",
  "rationale": "Oral intake shortly before surgery increases the risk of aspiration during anesthesia, so the anesthesia provider must be told, because they determine whether the procedure can proceed safely or must be delayed. The nurse does not cancel surgery independently, a nasogastric tube is not indicated, and proceeding without reporting the intake is unsafe.",
  "type": "mcq",
  "options": [
   "Document and proceed as planned.",
   "Inform the anesthesia care provider.",
   "Insert a nasogastric tube.",
   "Cancel the scheduled surgery."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q117",
  "exam": 3,
  "src": 105,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client who is at 10 weeks' gestation calls the clinic because she has been vomiting for the past 24 hours. The nurse determines that the client has no fever. Which instruction should the nurse give to this client?",
  "rationale": "Persistent vomiting for 24 hours in early pregnancy can lead to dehydration, electrolyte imbalance and ketosis, which suggest hyperemesis gravidarum, so the client needs to be evaluated in person. Clear liquids or taking nothing by mouth at home could worsen dehydration, and waiting for a fever ignores the actual risk, which is fluid and electrolyte loss rather than infection.",
  "type": "mcq",
  "options": [
   "Take nothing by mouth until there is no more nausea.",
   "Make an appointment at the clinic if a fever occurs.",
   "Remain on clear liquids until the vomiting subsides.",
   "Come to the clinic to be seen by a healthcare provider."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi3q118",
  "exam": 3,
  "src": 400,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An older adult resident of a long-term care facility has a 5-year history of hypertension. The client has a headache rated 5 on a 0-to-10 scale, and the current blood pressure is 142/89 mm Hg. Which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "The blood pressure is mildly elevated, so the scheduled antihypertensive should be given to maintain control, and a PRN analgesic is appropriate for a moderate headache. Postural hypotension is not suggested by an elevated reading, the findings do not warrant immediate notification, and there is no indication to withhold anticoagulation.",
  "type": "sata",
  "options": [
   "Provide a PRN dose of acetaminophen for the headache.",
   "Administer the scheduled daily dose of lisinopril.",
   "Assess the client for postural hypotension.",
   "Notify the healthcare provider immediately.",
   "Withhold the next scheduled dose of warfarin."
  ],
  "correct": [
   0,
   1
  ]
 },
 {
  "id": "hesi3q119",
  "exam": 3,
  "src": 90,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client receiving chemotherapy has severe neutropenia. Which snack is best for the nurse to recommend to the client?",
  "rationale": "Clients with severe neutropenia are taught to avoid foods that may carry bacteria, such as raw or unwashed fruits and vegetables, soft or unpasteurized cheeses and unrefrigerated cream products; cooked fruit such as baked apples is safe. Fresh strawberries are difficult to clean thoroughly, raw vegetables can harbor organisms, and soft cheese carries a risk of Listeria.",
  "type": "mcq",
  "options": [
   "Unwashed grapes with soft cheese",
   "Baked apples topped with dried raisins",
   "Raw carrot sticks with ranch dressing",
   "Fresh strawberries with whipped cream"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q120",
  "exam": 3,
  "src": 367,
  "topic": "Neuro & Sensory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An adult male is admitted to the emergency department after falling from a ladder. While waiting for a computed tomography (CT) scan, he requests something for a severe headache. When the nurse offers a prescribed dose of acetaminophen, he asks for something stronger. Which intervention should the nurse implement?",
  "rationale": "Opioids and sedatives depress the level of consciousness, constrict the pupils and depress respirations, which can mask the neurologic changes of increasing intracranial pressure, so non-opioid analgesics are used after a head injury, and the client should understand why. Morphine and sedatives would interfere with neurologic assessment, and telling him nothing can be given is inaccurate because acetaminophen is available.",
  "type": "mcq",
  "options": [
   "Explain the reason for using only non-narcotic analgesics.",
   "Request a prescription for a sedative to help him relax.",
   "Administer a prescribed dose of morphine sulfate IV.",
   "Tell him that no medication can be given until after the CT."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q121",
  "exam": 3,
  "src": 337,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "After placing the diaphragm of the stethoscope at the cardiac apex (fifth intercostal space, left midclavicular line), the nurse auscultates S1 and S2 heart sounds. To determine whether an S3 heart sound is present, which action should the nurse take first?",
  "rationale": "S3 is a low-pitched sound best heard at the apex with the bell held lightly against the skin, ideally with the client in the left lateral position. The second right intercostal space is the aortic area, where S2 is loudest. Pressing the bell firmly stretches the skin into a diaphragm and filters out low-pitched sounds, and the diaphragm is designed for high-pitched sounds.",
  "type": "mcq",
  "options": [
   "Listen with the diaphragm while the client sits up.",
   "Listen with the bell at the same location.",
   "Press the bell firmly against the skin at the apex.",
   "Move the diaphragm to the second right intercostal space."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q122",
  "exam": 3,
  "src": 502,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "Nurses on a surgical unit are concerned about a physician's treatment of clients during invasive procedures such as dressing changes and IV insertion. Clients often cry during the procedures, and the physician is usually unconcerned or annoyed by their response. In which order should the nurses take the following actions to resolve this problem?",
  "rationale": "Nurses have an ethical and legal duty to advocate for clients, and conflict resolution begins at the lowest level with a direct, non-confrontational discussion with the physician. If that fails, concerns are documented and the organizational chain of command is followed, from the charge nurse to the director of nursing to the chief of medical services, with a complaint to the state medical board reserved as the final step.",
  "type": "mcq",
  "options": [
   "Document concerns and report to the charge nurse → File a complaint with the state medical board → Talk with the physician as a group → Submit a written report to the director of nursing → Contact the chief of medical services",
   "Talk with the physician as a group → Document concerns and report to the charge nurse → Submit a written report to the director of nursing → Contact the chief of medical services → File a complaint with the state medical board",
   "Contact the chief of medical services → Talk with the physician as a group → Submit a written report to the director of nursing → Document concerns and report to the charge nurse → File a complaint with the state medical board",
   "Submit a written report to the director of nursing → Contact the chief of medical services → Document concerns and report to the charge nurse → File a complaint with the state medical board → Talk with the physician as a group"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q123",
  "exam": 3,
  "src": 618,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is caring for a group of clients with the help of a licensed practical nurse (LPN) and an experienced unlicensed assistive personnel (UAP). Which procedures can the nurse delegate to the UAP? (Select all that apply.)",
  "rationale": "Obtaining vital signs on a stable client, collecting a sputum specimen and ambulating a stable postoperative client are routine tasks with predictable outcomes that are within the UAP's scope, with the nurse interpreting the findings. Pain assessment and client teaching require nursing judgment, and a central line dressing change is a sterile procedure performed by licensed nurses.",
  "type": "sata",
  "options": [
   "Take postoperative vital signs for a stable client with an epidural after knee arthroplasty.",
   "Collect a sputum specimen from a client with a fever of unknown origin.",
   "Teach a client how to use an incentive spirometer.",
   "Assess the pain level of a client receiving patient-controlled analgesia.",
   "Ambulate a client who had a femoral-popliteal bypass graft yesterday.",
   "Change the dressing on a client's central venous catheter."
  ],
  "correct": [
   0,
   1,
   4
  ]
 },
 {
  "id": "hesi3q124",
  "exam": 3,
  "src": 44,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client has a prescription for lorazepam 2 mg PRN for alcohol withdrawal symptoms. Which finding indicates that the nurse should administer the medication to the client?",
  "rationale": "Alcohol withdrawal causes autonomic hyperactivity, including hypertension, tachycardia, tremors, diaphoresis and anxiety; an elevated blood pressure of 149/101 mm Hg is a withdrawal sign that a benzodiazepine is given to treat. A pulse of 80 is not tachycardic, although its irregularity warrants further assessment, and the temperature is normal. Pain is treated with an analgesic, not lorazepam.",
  "type": "mcq",
  "options": [
   "Blood pressure of 149/101 mm Hg",
   "Pain rated 7 on a scale of 1 to 10",
   "Oral temperature of 98.9° F (37.1° C)",
   "Irregular pulse rate of 80 beats/minute"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q125",
  "exam": 3,
  "src": 194,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A family member of a frail older adult asks the nurse about the eligibility requirements for hospice care. Which information should the nurse provide? (Select all that apply.)",
  "rationale": "Hospice eligibility requires certification by the provider that the client has a life expectancy of 6 months or less if the disease follows its usual course, and the client must choose comfort-focused palliative care instead of curative treatment. Hospice is available for any terminal diagnosis, not only cancer. It can be provided at home, in nursing facilities or in inpatient units, and being homebound is a requirement for home health care, not hospice.",
  "type": "sata",
  "options": [
   "The healthcare provider must project that the client has 6 months or less to live.",
   "The client must have a cancer diagnosis to be eligible for hospice care.",
   "The client must remain homebound to keep receiving hospice benefits.",
   "Hospice care can be provided only in an inpatient hospice facility.",
   "The client must be willing to accept palliative care rather than curative care."
  ],
  "correct": [
   0,
   4
  ]
 },
 {
  "id": "hesi3q126",
  "exam": 3,
  "src": 39,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client delivers a viable infant but begins to have excessive, uncontrolled vaginal bleeding after an oxytocin (Pitocin) infusion is completed. When notifying the healthcare provider of the client's condition, which information is most important for the nurse to report?",
  "rationale": "With postpartum hemorrhage, the blood pressure is the most important indicator of the client's hemodynamic status and whether she is progressing into hypovolemic shock, which directs the urgency of treatment. The pulse rate rises early and is also important, but blood pressure reflects decompensation and perfusion. The timing and total amount of oxytocin are useful for planning additional uterotonic therapy but do not describe her current physiologic stability.",
  "type": "mcq",
  "options": [
   "Total amount of Pitocin infused",
   "Maternal blood pressure",
   "Maternal apical pulse rate",
   "Time the Pitocin infusion was completed"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi3q127",
  "exam": 3,
  "src": 802,
  "topic": "Respiratory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which intervention should the nurse include in a long-term plan of care for a client with chronic obstructive pulmonary disease (COPD)?",
  "rationale": "Respiratory infections are the most common cause of COPD exacerbations, so long-term care includes influenza and pneumococcal vaccination, hand hygiene and avoiding sick contacts. High-flow oxygen can depress the respiratory drive in clients who retain CO2, fluids are encouraged to thin secretions, and slow pursed-lip and diaphragmatic breathing, not rapid shallow breathing, improve exhalation.",
  "type": "mcq",
  "options": [
   "Administer high-flow oxygen during sleep.",
   "Use rapid, shallow breathing to improve exhalation.",
   "Reduce risk factors for infection.",
   "Limit fluid intake to reduce secretions."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi3q128",
  "exam": 3,
  "src": 736,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "To reduce the risk of being named in a malpractice lawsuit, which action is most important for the nurse to take?",
  "rationale": "Malpractice requires a breach of the standard of care that causes harm, so consistently practicing within established standards is the best protection. A trusting relationship reduces the likelihood that a client will sue but does not prevent negligence, incident reports are internal quality tools completed after an event, and insurance provides financial protection but does not reduce the risk of being sued.",
  "type": "mcq",
  "options": [
   "Adhere consistently to standards of care.",
   "Complete an incident report after a client injury.",
   "Maintain current professional malpractice insurance.",
   "Establish a trusting nurse–client relationship."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi3q129",
  "exam": 3,
  "src": 171,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with multiple sclerosis (MS) is admitted to the medical unit. The client reports fatigue, leg weakness, and double vision. Which actions should the nurse implement to reduce the client's risk for falls? (Select all that apply.)",
  "rationale": "Fatigue and weakness increase fall risk, so frequent rest periods conserve energy and assistance with toileting prevents unsupervised transfers. Patching one eye eliminates diplopia and improves depth perception during ambulation. Heat worsens MS symptoms through Uhthoff's phenomenon, and the bed should be kept in its lowest position to reduce injury from falls.",
  "type": "sata",
  "options": [
   "Teach the client to patch one eye when ambulating.",
   "Encourage a warm bath before ambulating.",
   "Schedule frequent rest periods.",
   "Provide assistance to the bedside commode.",
   "Keep the bed in its highest position."
  ],
  "correct": [
   0,
   2,
   3
  ]
 },
 {
  "id": "hesi3q130",
  "exam": 3,
  "src": 749,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "When assessing a male client, the nurse notes that he has unequal lung expansion. Which conclusion about this finding is most likely to be accurate?",
  "rationale": "Asymmetrical chest expansion indicates that one lung is not inflating normally, as occurs with pneumothorax, atelectasis or a large effusion. COPD typically causes symmetrical changes such as a barrel chest with decreased expansion on both sides, a chronic infection does not necessarily cause unequal expansion, and normal lungs expand equally.",
  "type": "mcq",
  "options": [
   "The client has a chronic lung infection.",
   "The client has normally functioning lungs.",
   "The client has a collapsed lung.",
   "The client has a history of COPD."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q001",
  "exam": 4,
  "src": 416,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "An unconscious client is admitted to the intensive care unit and placed on a ventilator. The ventilator alarms continuously, and the client's oxygen saturation is 62%. Which action should the nurse take first?",
  "rationale": "With a continuous alarm and severe hypoxemia, the nurse must disconnect the client from the ventilator and ventilate with a manual resuscitation bag at once, which removes equipment as a cause while restoring oxygenation; the nurse can then assess for displacement, obstruction, pneumothorax or equipment failure. Adjusting the FiO2, waiting for respiratory therapy or troubleshooting settings delays oxygenation if the ventilator or tube is the problem.",
  "type": "mcq",
  "options": [
   "Call respiratory therapy to check the ventilator.",
   "Increase the ventilator FiO2 to 100%.",
   "Silence the alarm and review the ventilator settings.",
   "Begin manual ventilation immediately."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q002",
  "exam": 4,
  "src": 10,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A 13-year-old client with non-union of a comminuted fracture of the tibia is admitted with osteomyelitis. The healthcare provider collects bone aspirate specimens for culture and sensitivity and applies a cast to the adolescent's lower leg. Which action should the nurse implement next?",
  "rationale": "The standard treatment for osteomyelitis is antibiotic therapy and immobilization; once bone and blood specimens have been obtained for culture and sensitivity, parenteral antibiotics should be started without delay. There is no indication of nausea requiring an antiemetic, and the cast is bivalved only if neurovascular compromise develops. A high-calorie, high-protein diet supports healing but is not the next priority.",
  "type": "mcq",
  "options": [
   "Administer antiemetic agents",
   "Bivalve the cast for distal compromise",
   "Begin parenteral antibiotic therapy",
   "Provide a high-calorie, high-protein diet"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q003",
  "exam": 4,
  "src": 357,
  "topic": "Mental Health",
  "clientNeed": "Basic Care & Comfort",
  "stem": "An adult client in the manic phase of bipolar disorder is admitted to the psychiatric unit. The client has lost 10 pounds in the last two weeks, has not bathed in a week, and says, “I'm trying to start a new business, and I'm too busy to eat.” The client is oriented to time, place, and person but not to situation. Which nursing problem has the greatest priority?",
  "rationale": "Hyperactivity during mania greatly increases caloric needs while the client is too busy to eat, and a 10-pound weight loss in two weeks is a physiologic threat, so nutrition is the priority; high-calorie finger foods and drinks the client can consume on the move are provided. Hygiene, sleep and self-neglect are real problems, but physiologic needs such as nutrition come first.",
  "type": "mcq",
  "options": [
   "Self-care deficit: hygiene",
   "Disturbed sleep pattern",
   "Imbalanced nutrition",
   "Self-neglect"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q004",
  "exam": 4,
  "src": 97,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Management of Care",
  "stem": "A client who had a right hip replacement 3 days ago is pale, has diminished breath sounds over the left lower lung fields, a temperature of 100.2° F, and an oxygen saturation of 90%. The client is scheduled to transfer to a skilled nursing facility (SNF) tomorrow for rehabilitation. Based on these findings, which recommendation should the nurse give the healthcare provider?",
  "rationale": "Diminished breath sounds, low-grade fever and hypoxemia suggest a postoperative complication such as pneumonia, atelectasis or pulmonary embolism, so the client is not stable for transfer and the plan should be reassessed. Proceeding with the transfer or simply treating the fever ignores a potentially serious respiratory problem, and increasing activity does not address the unexplained hypoxemia that requires evaluation.",
  "type": "mcq",
  "options": [
   "Reassess readiness for SNF transfer.",
   "Prescribe an antipyretic and continue the plan.",
   "Proceed with transfer and notify the SNF.",
   "Increase activity to promote lung expansion."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q005",
  "exam": 4,
  "src": 421,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An unlicensed assistive personnel (UAP) reports that a client's right hand and fingers spasm when the blood pressure is taken on that arm. After confirming the spasms, which action should the nurse take?",
  "rationale": "Carpal spasm when a blood pressure cuff is inflated is Trousseau's sign, which indicates hypocalcemia (normal total calcium about 9.0 to 10.5 mg/dL), so the calcium level should be reviewed and reported. Changing arms or equipment ignores a significant clinical sign, and the spasm is not caused by anxiety.",
  "type": "mcq",
  "options": [
   "Administer a PRN antianxiety medication.",
   "Ask the UAP to take the blood pressure in the other arm.",
   "Tell the UAP to use a different sphygmomanometer.",
   "Review the client's serum calcium level."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q006",
  "exam": 4,
  "src": 130,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with a lower respiratory tract infection receives a prescription for ciprofloxacin 500 mg PO every 12 hours. When the client requests an afternoon snack, which dietary choice should the nurse provide?",
  "rationale": "Calcium, along with magnesium, iron and zinc, binds ciprofloxacin and markedly reduces its absorption, so dairy and calcium-fortified foods should be avoided around the dose. Cinnamon applesauce contains no significant calcium and is the best choice. Yogurt, milk and calcium-fortified juice would all decrease absorption of the antibiotic.",
  "type": "mcq",
  "options": [
   "Vanilla-flavored yogurt",
   "Cinnamon applesauce",
   "Calcium-fortified juice",
   "Low-fat chocolate milk"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q007",
  "exam": 4,
  "src": 582,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "While inserting an indwelling urinary catheter in a female client, the nurse advances the catheter but no urine returns, and the nurse realizes that the catheter has entered the vaginal opening. Which action should the nurse take next?",
  "rationale": "A catheter that has entered the vagina is contaminated, so it is left in place as a landmark to avoid repeating the error while a new sterile catheter is inserted into the urethra just above it. Reinserting the contaminated catheter introduces bacteria into the bladder, and inflating the balloon or advancing the catheter in the vagina is inappropriate.",
  "type": "mcq",
  "options": [
   "Insert the catheter farther and observe for discomfort.",
   "Leave the catheter in place and obtain a new sterile catheter.",
   "Observe for urine flow and then inflate the balloon.",
   "Remove the catheter and insert it into the urethral opening."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q008",
  "exam": 4,
  "src": 542,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The healthcare provider prescribes the cephalosporin antibiotic cefdinir 300 mg PO every 12 hours for a client with a postoperative wound infection. Which foods should the nurse encourage this client to eat?",
  "rationale": "Antibiotics disrupt normal intestinal flora and can cause diarrhea or superinfection, and foods with live cultures such as yogurt and buttermilk help restore the normal flora. Avocados, cheese, leafy greens and fresh fruits are healthy but do not counteract the antibiotic's effect on intestinal bacteria.",
  "type": "mcq",
  "options": [
   "Fresh fruits",
   "Green leafy vegetables",
   "Avocados and cheese",
   "Yogurt or buttermilk"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q009",
  "exam": 4,
  "src": 13,
  "topic": "Respiratory",
  "clientNeed": "Safety & Infection Control",
  "stem": "A 17-year-old male is brought to the emergency department by his parents because he has been coughing and running a fever with flu-like symptoms for the past 24 hours. Which intervention should the nurse implement first?",
  "rationale": "Influenza and many respiratory infections spread by droplets, so placing a surgical mask on the client at once protects other clients and staff in the emergency department while the assessment continues. A chest x-ray, temperature and blood pressure are all appropriate, but they can be completed after the immediate infection-control measure is in place.",
  "type": "mcq",
  "options": [
   "Assess the client's temperature.",
   "Determine the client's blood pressure.",
   "Obtain a chest x-ray per protocol.",
   "Place a mask on the client's face."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q010",
  "exam": 4,
  "src": 74,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client is receiving a full-strength continuous enteral tube feeding at 50 mL/hour and has developed diarrhea. The client has a new prescription to change the feeding to half strength. Which intervention should the nurse implement?",
  "rationale": "Half strength means the formula is diluted with an equal volume of water, and the infusion rate stays the same unless a rate change is also prescribed, so the diluted feeding is given at 50 mL/hour. Slowing the rate to 25 mL/hour changes both concentration and volume, and giving full strength at a slower rate does not reduce the osmolality that contributes to diarrhea. Alternating formula and water is not a prescribed half-strength regimen.",
  "type": "mcq",
  "options": [
   "Add equal amounts of water and feeding to the bag and infuse at 50 mL/hour.",
   "Infuse the full-strength feeding at 25 mL/hour to deliver half the amount.",
   "Add equal amounts of water and feeding to the bag and infuse at 25 mL/hour.",
   "Alternate full-strength feeding with plain water every other hour at 50 mL/hour."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q011",
  "exam": 4,
  "src": 526,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A father of a 4-year-old has been living with metastatic lung cancer for 2 years. After discussing the remaining options with his healthcare provider, he requests that all treatment stop and that no heroic measures be taken. When he is transferred to the palliative care unit, which action is most important for the receiving nurse to take to facilitate continuity of care?",
  "rationale": "A thorough hand-off report communicates the client's condition, symptom management, goals of care and end-of-life wishes so that care continues without gaps. Asking the client to restate his wishes is unnecessary when they are documented, support for the child is important but does not ensure continuity of the client's care, and the client has chosen to stop treatment.",
  "type": "mcq",
  "options": [
   "Arrange counseling for the client's 4-year-old child.",
   "Obtain a detailed report from the nurse transferring the client.",
   "Ask the client to restate his treatment wishes on arrival.",
   "Contact the oncologist to review the chemotherapy plan."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q012",
  "exam": 4,
  "src": 662,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing to administer a histamine-2 (H2) receptor antagonist to a client with peptic ulcer disease. What is the primary purpose of this drug classification?",
  "rationale": "H2 receptor antagonists such as famotidine block histamine receptors on gastric parietal cells, reducing hydrochloric acid secretion and allowing the ulcer to heal. Antacids neutralize existing acid, sucralfate coats the ulcer base, and antibiotics combined with acid suppression eradicate H. pylori.",
  "type": "mcq",
  "options": [
   "Neutralizes the acid that is already present in the stomach",
   "Decreases the amount of HCl secreted by the parietal cells of the stomach",
   "Eradicates the Helicobacter pylori bacteria from the stomach",
   "Forms a protective coating over the base of the ulcer"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q013",
  "exam": 4,
  "src": 707,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse requests a meal tray for a client who follows Mormon (Latter-day Saint) beliefs and is on a clear liquid diet after abdominal surgery. Which items should the nurse request for this client? (Select all that apply.)",
  "rationale": "Apple juice and broth are clear liquids that are acceptable to members of the Church of Jesus Christ of Latter-day Saints. Hot chocolate is made with milk and is not a clear liquid, orange juice contains pulp and is a full liquid, and coffee is avoided by members of this faith as well as not appropriate here.",
  "type": "sata",
  "options": [
   "Apple juice",
   "Hot chocolate",
   "Orange juice",
   "Chicken broth",
   "Black coffee"
  ],
  "correct": [
   0,
   3
  ]
 },
 {
  "id": "hesi4q014",
  "exam": 4,
  "src": 743,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "What is the nurse's priority goal when providing care for a 2-year-old child who is experiencing a seizure?",
  "rationale": "Airway management is the priority during a seizure, which includes turning the child to the side to allow secretions to drain, suctioning as needed and providing oxygen. Stopping the seizure requires medication and is not always possible immediately, fever is treated after the seizure ends, and protecting the child from injury is important but secondary to maintaining the airway.",
  "type": "mcq",
  "options": [
   "Stop the seizure activity",
   "Manage the airway",
   "Protect the body from injury",
   "Decrease the temperature"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q015",
  "exam": 4,
  "src": 563,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse assesses a 78-year-old male client who has left-sided heart failure. Which symptoms would the nurse expect this client to exhibit?",
  "rationale": "Left-sided heart failure causes blood to back up into the pulmonary circulation, producing pulmonary congestion with dyspnea, orthopnea, crackles and cough, and low cardiac output causes fatigue. Hepatomegaly and jugular venous distention are signs of right-sided failure, a friction rub indicates pericarditis, and narrowed pulse pressure with muffled heart sounds suggests cardiac tamponade.",
  "type": "mcq",
  "options": [
   "Narrowed pulse pressure and distant heart sounds",
   "Dyspnea, cough, and fatigue",
   "Pericardial pain and a friction rub",
   "Hepatomegaly and distended neck veins"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q016",
  "exam": 4,
  "src": 495,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "In evaluating the effectiveness of a postoperative client's intermittent pneumatic compression devices, which assessment is most important for the nurse to complete?",
  "rationale": "Intermittent pneumatic compression devices reduce venous stasis to prevent deep vein thrombosis, so their effectiveness is evaluated by the absence of signs of DVT, such as unilateral redness, warmth, swelling and pain. Incentive spirometry, wound drainage and pulse quality do not measure whether the devices are preventing venous thrombosis.",
  "type": "mcq",
  "options": [
   "Monitor the amount of drainage from the client's incision.",
   "Palpate all peripheral pulse points for volume and strength.",
   "Evaluate the client's ability to use an incentive spirometer.",
   "Observe both lower extremities for redness and swelling."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q017",
  "exam": 4,
  "src": 350,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An 18-year-old female client is seen at the health department for treatment of condylomata acuminata (genital warts) caused by the human papillomavirus (HPV). Which intervention should the nurse implement?",
  "rationale": "HPV infection is associated with cervical dysplasia and cancer, so the client needs to understand the importance of regular cervical cancer screening as recommended for her age, along with HPV vaccination. Treatment removes visible warts but does not eradicate the virus, condoms reduce but do not eliminate transmission because HPV infects skin not covered by the condom, and partners should be evaluated.",
  "type": "mcq",
  "options": [
   "Advise her that condoms provide complete protection against HPV.",
   "Reinforce the importance of regular Papanicolaou (Pap) smear screening.",
   "Explain that treatment of the warts permanently eliminates the virus.",
   "Tell her that her sexual partners do not need to be evaluated."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q018",
  "exam": 4,
  "src": 104,
  "topic": "Endocrine",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client who is admitted to the intensive care unit with syndrome of inappropriate antidiuretic hormone (SIADH) has developed osmotic demyelination. Which intervention should the nurse implement first?",
  "rationale": "Osmotic demyelination syndrome (central pontine myelinolysis) results from overly rapid correction of hyponatremia and damages the brainstem, causing dysphagia, dysarthria and quadriparesis. Evaluating swallowing to prevent aspiration protects the airway and is the priority. Eye patching for diplopia, frequent reorientation and range-of-motion exercises are appropriate supportive measures but do not take precedence over airway safety.",
  "type": "mcq",
  "options": [
   "Patch one eye",
   "Perform range of motion",
   "Evaluate swallowing",
   "Reorient often"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q019",
  "exam": 4,
  "src": 768,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "When five family members arrive at the hospital, they all begin asking the nurse questions about the prognosis of their critically ill mother. Which intervention should the nurse implement first?",
  "rationale": "Having the family choose a spokesperson creates a consistent channel for communication, reduces confusion and conflicting information, and allows the nurse to provide updates efficiently while caring for a critically ill client. Involving the family in care, offering chaplain support and arranging a discussion with the provider about prognosis are appropriate after communication is organized.",
  "type": "mcq",
  "options": [
   "Ask the family to identify a specific spokesperson.",
   "Request the chaplain's presence.",
   "Include the family in the client's care.",
   "Page the healthcare provider to speak with the family."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q020",
  "exam": 4,
  "src": 461,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "During the transfer of a client who had major abdominal surgery this morning, the postanesthesia care unit (PACU) nurse reports that the client, who is awake and responsive, continues to report pain and nausea after receiving morphine 2 mg IV and ondansetron 4 mg IV 45 minutes ago. Which elements of SBAR communication are missing from the PACU nurse's report? (Select all that apply.)",
  "rationale": "The report describes the current situation, the client's ongoing pain and nausea, but omits the background (the surgical procedure, history and allergies), the assessment (pain rating, vital signs and response to the medications) and a recommendation for follow-up. Rationale is not a component of SBAR, which stands for Situation, Background, Assessment and Recommendation.",
  "type": "sata",
  "options": [
   "Situation",
   "Rationale",
   "Recommendation",
   "Background",
   "Assessment"
  ],
  "correct": [
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi4q021",
  "exam": 4,
  "src": 251,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client with type 2 diabetes mellitus who is taking pioglitazone daily reports the recent onset of nausea, dark-colored urine, and a yellowish cast to his skin. Which instruction should the nurse provide?",
  "rationale": "Nausea, dark urine and jaundice suggest hepatotoxicity, a serious adverse effect of thiazolidinediones such as pioglitazone, so the client needs immediate medical evaluation of liver function. Attributing the symptoms to dehydration or a urinary infection would delay diagnosis, and switching to sliding-scale insulin without evaluation does not address possible liver injury.",
  "type": "mcq",
  "options": [
   "“You need to seek immediate medical assistance to evaluate the cause of these symptoms.”",
   "“You have become dehydrated from the nausea. You need to rest and increase your fluid intake.”",
   "“Use insulin per sliding scale until the nausea resolves, and then resume your oral medication.”",
   "“A urine specimen will be needed to determine what kind of infection you have developed.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q022",
  "exam": 4,
  "src": 558,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse administers an antibiotic to a client with a respiratory tract infection. To evaluate the medication's effectiveness, which laboratory values should the nurse monitor? (Select all that apply.)",
  "rationale": "A falling WBC count toward normal indicates the infection is resolving, and the sputum culture and sensitivity identifies the organism, confirms that it is susceptible to the antibiotic and shows clearance of the organism on follow-up. Potassium, hemoglobin and hematocrit and the platelet count do not measure the response to antibiotic therapy.",
  "type": "sata",
  "options": [
   "White blood cell (WBC) count",
   "Platelet count",
   "Serum potassium level",
   "Sputum culture and sensitivity",
   "Hemoglobin and hematocrit"
  ],
  "correct": [
   0,
   3
  ]
 },
 {
  "id": "hesi4q023",
  "exam": 4,
  "src": 304,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A vacuum-assisted closure (VAC) device is being used to provide wound care for a client who has a stage 3 pressure injury on a below-the-knee amputation (BKA) residual limb. Which intervention should the nurse implement to ensure maximum effectiveness of the device?",
  "rationale": "Negative-pressure wound therapy works only when an airtight seal is maintained, so the transparent drape must be intact without tears or gaps that cause vacuum leaks. The foam is usually changed every 48 to 72 hours, not every 4 hours. Therapy should not be off for more than about 2 hours in 24, and the foam is placed loosely to fill the wound rather than packed tightly.",
  "type": "mcq",
  "options": [
   "Ensure the transparent dressing has no tears that might create vacuum leaks.",
   "Turn the device off for 4 hours during ambulation.",
   "Pack the foam tightly into the deepest areas of the wound.",
   "Change the foam dressing in the wound every 4 hours."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q024",
  "exam": 4,
  "src": 297,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A resident of a long-term care facility who has moderate dementia is having difficulty eating in the dining room. The client becomes frustrated when dropping utensils on the floor and then refuses to eat. Which action should the nurse implement?",
  "rationale": "Finger foods let a client with declining motor coordination and apraxia continue to eat independently, reducing frustration and preserving dignity and nutrition. Feeding the client promotes dependence before it is necessary, isolating the client removes the social benefit of the dining room, and replacing meals with supplements is unnecessary while the client can still eat with adaptations.",
  "type": "mcq",
  "options": [
   "Serve the client's meals in the room only.",
   "Replace meals with a liquid supplement.",
   "Encourage the client to eat finger foods.",
   "Feed the client to ensure adequate intake."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q025",
  "exam": 4,
  "src": 187,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with urticaria due to environmental allergies is taking over-the-counter diphenhydramine. Which complaint should the nurse identify to the client as a side effect of this medication?",
  "rationale": "Diphenhydramine is a first-generation antihistamine whose side effects include drowsiness, anticholinergic effects such as dry mouth, urinary retention and constipation, and gastrointestinal upset such as nausea and epigastric distress. Its anticholinergic action causes dry mouth rather than hypersalivation. Facial twitching is not an expected effect, and increased appetite is not typical of this drug.",
  "type": "mcq",
  "options": [
   "Nausea and indigestion",
   "Increased appetite",
   "Eyelid and facial twitching",
   "Hypersalivation"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q026",
  "exam": 4,
  "src": 774,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "When planning care for a client with acute pancreatitis, which nursing intervention has the highest priority?",
  "rationale": "Oral intake stimulates pancreatic enzyme secretion, which worsens autodigestion and pain, so keeping the client NPO (often with nasogastric suction) rests the pancreas and is the primary intervention to reduce inflammation and pain. IV fluids, antiemetics and intake and output monitoring are also essential but support the client while the pancreas is rested.",
  "type": "mcq",
  "options": [
   "Withhold food and fluid intake.",
   "Initiate IV fluid replacement.",
   "Evaluate the intake and output ratio.",
   "Administer an antiemetic as needed."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q027",
  "exam": 4,
  "src": 101,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client who has a suspected brain tumor is scheduled for a computed tomography (CT) scan with contrast. When preparing the client for the CT scan, which intervention should the nurse implement?",
  "rationale": "Iodinated contrast is often used for a brain CT, so the nurse obtains the client's allergy history — food allergies such as shellfish or iodine, medication allergies and any previous reaction to contrast media — and reports it so premedication or an alternative can be arranged. Metal joint replacements are a concern for MRI, not CT. Neck immobilization is required only for a suspected spinal injury, and an antiemetic is not routinely needed.",
  "type": "mcq",
  "options": [
   "Immobilize the client's neck before moving onto the stretcher.",
   "Determine if the client has had a knee or hip replacement.",
   "Obtain the client's food allergy history.",
   "Give an antiemetic to control nausea."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q028",
  "exam": 4,
  "src": 374,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult male with schizophrenia who has been nonadherent to oral antipsychotic medications refuses a prescribed IM medication. Which action should the nurse take?",
  "rationale": "A client has the right to refuse medication unless a court order or an emergency exists, so the nurse documents the refusal and notifies the provider, who may discuss alternatives. Substituting an agitation medication is not indicated for refusal alone, forcing an injection without legal authority constitutes battery, and telling the client oral medications are no longer needed is inaccurate.",
  "type": "mcq",
  "options": [
   "Ask for staff assistance with administering the injection.",
   "Notify the healthcare provider of the client's refusal.",
   "Explain that oral medications will no longer be required.",
   "Administer an oral PRN medication for agitation."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q029",
  "exam": 4,
  "src": 45,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client has an intravenous fluid infusing in the right forearm. To determine the client's distal pulse rate most accurately, which action should the nurse implement?",
  "rationale": "The radial artery is the most accessible distal pulse, and the pads of the index and middle (or ring) fingers are most sensitive for detecting pulsation. The thumb has its own pulse, which can be mistaken for the client's, and firm pressure can obliterate the pulse. The brachial artery is proximal rather than distal, and a single fingertip is less sensitive. A pulse oximeter gives a rate but does not allow assessment of pulse quality and can be inaccurate in an arm with an infusion.",
  "type": "mcq",
  "options": [
   "Apply a pulse oximeter to the index finger of the right hand.",
   "Palpate the radial pulse site with the pads of two or three fingers.",
   "Palpate the brachial pulse site with the fingertip of one finger.",
   "Palpate the radial pulse site firmly with the tip of the thumb."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q030",
  "exam": 4,
  "src": 463,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Following a gunshot wound to the abdomen, a young adult male had an emergency bowel resection and received multiple blood products in the operating room. His current blood pressure is 78/52 mm Hg; he is mechanically ventilated, and his oxygen saturation is 87%. Laboratory values include hemoglobin 7 g/dL and platelets 20,000/mm3. Based on these findings, which intervention should the nurse implement first?",
  "rationale": "Hypotension and low oxygen saturation with a hemoglobin of 7 g/dL indicate ongoing hemorrhage with inadequate oxygen-carrying capacity, and packed red blood cells restore both volume and oxygen delivery to the tissues. Platelets and plasma help correct coagulopathy and are typically given as part of massive transfusion, but they do not carry oxygen. Furosemide would worsen hypovolemia.",
  "type": "mcq",
  "options": [
   "Transfuse packed red blood cells.",
   "Administer a unit of platelets.",
   "Administer IV furosemide.",
   "Give a unit of fresh frozen plasma."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q031",
  "exam": 4,
  "src": 692,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse notes an increase in serosanguineous drainage from the abdominal surgical wound of an obese client. Which action should the nurse implement?",
  "rationale": "A sudden increase in serosanguineous drainage, especially in an obese client, is often the first sign of wound dehiscence, so the nurse inspects the incision for separation and supports it with a binder or splinting as needed. Warm compresses are not indicated, forceful coughing increases intra-abdominal pressure and stress on the incision, and only the provider removes sutures.",
  "type": "mcq",
  "options": [
   "Observe the wound for dehiscence.",
   "Encourage the client to cough forcefully.",
   "Apply a warm compress to the incision.",
   "Remove several sutures to drain the fluid."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q032",
  "exam": 4,
  "src": 364,
  "topic": "Renal & GU",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An adult female client with chronic kidney disease (CKD) asks the nurse whether she can continue taking her over-the-counter medications. Which medication poses the greatest threat to this client?",
  "rationale": "The kidneys excrete magnesium, so magnesium-containing antacids and laxatives can cause hypermagnesemia in CKD, leading to muscle weakness, hypotension, respiratory depression and cardiac arrest. Acetaminophen in usual doses is the preferred analgesic in CKD, docusate is a stool softener without electrolyte effects, and calcium carbonate is commonly prescribed as a phosphate binder.",
  "type": "mcq",
  "options": [
   "Calcium carbonate (Tums)",
   "Acetaminophen (Tylenol)",
   "Docusate sodium (Colace)",
   "Magnesium hydroxide (Maalox)"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q033",
  "exam": 4,
  "src": 127,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with a history of intravenous illicit drug use is admitted with Kaposi's sarcoma. Which intervention should the nurse include in this client's admission plan of care?",
  "rationale": "Kaposi's sarcoma is an AIDS-defining illness that indicates severe immunosuppression, so the client is at high risk for opportunistic and secondary infections, which are the leading cause of morbidity and death. Support groups, assessment for HIV-associated neurocognitive disorder and monitoring for drug reactions are appropriate, but they are not the admission priority over preventing and detecting infection.",
  "type": "mcq",
  "options": [
   "Observe for adverse drug reactions.",
   "Monitor for secondary infections.",
   "Identify local HIV support groups.",
   "Assess for symptoms of AIDS dementia."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q034",
  "exam": 4,
  "src": 571,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse delegates daily denture care for a client to an unlicensed assistive personnel (UAP). When making this assignment, which instruction is most important for the nurse to give?",
  "rationale": "Lining the sink with a washcloth, and partly filling it with water, cushions the dentures if they are dropped and prevents them from breaking. Hot water can warp dentures, dentures wrapped in tissue are easily discarded by mistake and should be stored in a labeled cup with water or soaking solution, and stiff brushes and abrasives scratch the denture surface.",
  "type": "mcq",
  "options": [
   "Scrub the dentures with a stiff brush and abrasive cleanser.",
   "Clean the dentures under very hot running water.",
   "Place a washcloth in the sink while cleaning the dentures.",
   "Store the dentures wrapped dry in a facial tissue."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q035",
  "exam": 4,
  "src": 325,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Physiological Adaptation",
  "stem": "After a routine physical examination, the healthcare provider admits a woman with a history of systemic lupus erythematosus (SLE) because she has 3+ pitting ankle edema and blood in her urine. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Edema and hematuria suggest lupus nephritis, and severe hypertension places the client at immediate risk for stroke, seizures and further kidney damage, so it requires prompt treatment. Joint and muscle aches are common symptoms of SLE, and rust-colored urine is consistent with the known hematuria. A urine output of 300 mL/hour is not oliguric and does not require immediate action.",
  "type": "mcq",
  "options": [
   "Joint and muscle aches",
   "Urine output of 300 mL/hour",
   "Blood pressure of 170/98 mm Hg",
   "Dark, rust-colored urine"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q036",
  "exam": 4,
  "src": 49,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client in the emergency center demonstrates rapid speech and flight of ideas and reports sleeping only 3 hours during the past 48 hours. Based on these findings, it is most important for the nurse to review the laboratory value for which medication?",
  "rationale": "Pressured speech, flight of ideas and a decreased need for sleep indicate a manic episode, and divalproex is a mood stabilizer for bipolar disorder that requires therapeutic serum monitoring (about 50 to 125 mcg/mL); a low level may indicate nonadherence or an inadequate dose. Sertraline and bupropion are antidepressants that can precipitate mania and do not require routine serum levels, and lorazepam may be used for agitation but is not monitored by serum level.",
  "type": "mcq",
  "options": [
   "Lorazepam",
   "Bupropion",
   "Sertraline",
   "Divalproex"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q037",
  "exam": 4,
  "src": 609,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is caring for a client following a myelogram. Which assessment finding should the nurse report to the healthcare provider immediately?",
  "rationale": "A headache accompanied by nuchal rigidity after a myelogram suggests meningeal irritation from chemical or bacterial meningitis and must be reported immediately. The need to void, mild puncture-site discomfort and thirst are expected after the procedure, and fluids are encouraged to replace CSF and excrete the contrast.",
  "type": "mcq",
  "options": [
   "Thirst and dry mouth",
   "Desire to void",
   "Headache with a stiff neck",
   "Mild soreness at the puncture site"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q038",
  "exam": 4,
  "src": 99,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client who had an emergency appendectomy is being mechanically ventilated, and soft wrist restraints are in place to prevent self-extubation. Which outcome is most important for the nurse to include in the client's plan of care?",
  "rationale": "Airway and breathing are the highest priority for a mechanically ventilated client, so maintaining an effective breathing pattern is the most important outcome. Pain management, prevention of ventilator-associated pneumonia and prevention of restraint injury are all appropriate outcomes, but they rank below adequate ventilation and oxygenation.",
  "type": "mcq",
  "options": [
   "Experiences no injuries related to soft restraints",
   "Maintains effective breathing patterns",
   "Remains free of ventilator-associated pneumonia",
   "Understands the pain management scale"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q039",
  "exam": 4,
  "src": 245,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A male client with antisocial personality disorder is admitted to an inpatient mental health unit for multiple substance dependency. When providing a history, the client justifies his use of illicit drugs to the nurse. Based on this pattern of behavior, this client's history is most likely to include which finding?",
  "rationale": "Antisocial personality disorder is characterized by disregard for the rights of others, rationalization of behavior and repeated violations of the law, so a history of arrests and convictions is common. Fear of authority figures is inconsistent with the disorder. Repeated suicide attempts are more typical of borderline personality disorder, and delusions indicate a psychotic disorder.",
  "type": "mcq",
  "options": [
   "Delusions of grandiosity and persecution",
   "Phobias and panic attacks when confronted by authority",
   "Multiple convictions for misdemeanors and felonies",
   "Suicidal ideation and multiple suicide attempts"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q040",
  "exam": 4,
  "src": 503,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Safety & Infection Control",
  "stem": "On a busy day, one hour after shift report, the charge nurse learns that a staff nurse who lives one hour from the hospital forgot her prescription eyeglasses at home. Which action should the charge nurse take?",
  "rationale": "A nurse who cannot see clearly may misread medication labels, syringes and orders, so client safety requires that she obtain her prescription glasses even though the unit will be short-staffed temporarily. Drugstore readers may not correct her vision, help with documentation does not address other tasks requiring clear vision, and sending her home for the day worsens staffing unnecessarily.",
  "type": "mcq",
  "options": [
   "Request another nurse to assist the staff nurse with her documentation.",
   "Encourage the nurse to buy reading glasses in the hospital gift shop.",
   "Tell the staff nurse to take the day off and change her weekly schedule.",
   "Ask the nurse to return home to get her prescription eyeglasses for work."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q041",
  "exam": 4,
  "src": 368,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "An adult male is brought to the emergency department by ambulance after a motorcycle crash. He was not wearing a helmet and has periorbital bruising and bloody drainage from both ears. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Raccoon eyes and bloody ear drainage indicate a basilar skull fracture, and projectile vomiting signals rising intracranial pressure, which can lead to herniation and death, so it requires immediate intervention. Rebound tenderness may indicate abdominal injury and rib pain a possible rib fracture, both of which need evaluation, and a respiratory rate of 20 is within normal limits.",
  "type": "mcq",
  "options": [
   "Rebound abdominal tenderness",
   "Nausea and projectile vomiting",
   "Respiratory rate of 20 breaths/minute",
   "Rib pain with deep inspiration"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q042",
  "exam": 4,
  "src": 592,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is assessing a middle-aged adult diagnosed with osteoarthritis. Which factor in this client's history contributes to the osteoarthritis?",
  "rationale": "Osteoarthritis results from wear and tear on articular cartilage, and repetitive impact on the weight-bearing joints over many years, as in long-distance running, contributes to cartilage breakdown. Lactose intolerance relates more to calcium intake and osteoporosis, and photosensitivity and DVT are not causes of osteoarthritis.",
  "type": "mcq",
  "options": [
   "Long-distance runner since high school",
   "Recent treatment for deep vein thrombosis",
   "Lactose intolerance since childhood",
   "Photosensitivity to a medication currently taken"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q043",
  "exam": 4,
  "src": 757,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "When changing the diaper of a 2-day-old infant, the nurse observes asymmetrical thigh and gluteal skin folds and limited abduction of the left hip. Based on this finding, which action should the nurse take next?",
  "rationale": "Asymmetrical skin folds and limited hip abduction are signs of developmental dysplasia of the hip, which should be reported for evaluation with the Ortolani and Barlow maneuvers and ultrasound; early treatment with a Pavlik harness produces the best outcome. The finding is not normal, documentation alone delays treatment, and forcing range of motion could worsen a dislocation.",
  "type": "mcq",
  "options": [
   "Continue care, since this is a normal finding.",
   "Perform range of motion to the joint.",
   "Document the finding in the record only.",
   "Notify the healthcare provider."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q044",
  "exam": 4,
  "src": 70,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is being discharged with a prescription for warfarin. Which instruction should the nurse provide this client regarding diet?",
  "rationale": "Vitamin K antagonizes warfarin, so a consistent daily intake of vitamin K–rich foods keeps the INR stable; sudden increases lower the INR and decreases raise it. Completely avoiding vitamin K is unnecessary and makes the diet hard to maintain. Increasing greens would reduce the anticoagulant effect, and cranberry juice can potentiate warfarin and increase bleeding risk.",
  "type": "mcq",
  "options": [
   "Drink a glass of cranberry juice with each dose to improve the absorption of the warfarin.",
   "Avoid all foods that contain vitamin K, such as spinach and broccoli, while taking warfarin.",
   "Eat about the same amount of leafy green vegetables each day so vitamin K intake stays consistent.",
   "Increase your intake of leafy green vegetables to help prevent bleeding while taking warfarin."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q045",
  "exam": 4,
  "src": 632,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is developing a plan of care for a middle-aged woman with type 2 diabetes mellitus (DM). To lower her blood glucose and increase her serum high-density lipoprotein (HDL) level, which instruction is most important for the nurse to provide?",
  "rationale": "Regular aerobic exercise increases insulin sensitivity and glucose uptake by muscles, lowering blood glucose, and it is one of the most effective ways to raise HDL cholesterol. Glucose monitoring tracks but does not lower glucose, limiting saturated fat mainly lowers LDL, and reading labels supports diet choices but does not directly achieve both goals.",
  "type": "mcq",
  "options": [
   "Exercise at least three times weekly.",
   "Learn to read all food product labels.",
   "Limit intake of foods high in saturated fat.",
   "Monitor blood glucose levels daily."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q046",
  "exam": 4,
  "src": 513,
  "topic": "Mental Health",
  "clientNeed": "Safety & Infection Control",
  "stem": "Suicide precautions are initiated for a child admitted to the mental health unit after an intentional narcotic overdose. After a visitor leaves, the nurse finds a package of cigarettes in the client's room. Which intervention is most important for the nurse to implement?",
  "rationale": "A client on suicide precautions must have an environment free of anything that could be used for self-harm, and cigarettes, which may be accompanied by lighters or matches, are contraband, so they are removed immediately. Allowing the client to keep them is unsafe, and documenting the finding and speaking with visitors follow removal.",
  "type": "mcq",
  "options": [
   "Ask the visitor not to bring cigarettes again.",
   "Document the finding in the client's record.",
   "Allow the client to keep them as a coping aid.",
   "Remove the cigarettes from the client's room."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q047",
  "exam": 4,
  "src": 812,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "Which statement is accurate regarding the pathologic changes in the pulmonary system associated with acute respiratory distress syndrome (ARDS)?",
  "rationale": "In ARDS, injury to the alveolar-capillary membrane increases permeability, and fluid moves out of the capillaries into the interstitium and then the alveoli, producing noncardiogenic pulmonary edema. Fluid-filled, collapsed alveoli are perfused but not ventilated, creating a low V/Q ratio and shunt, functional residual capacity and compliance decrease as the lungs stiffen, and alveolar edema impairs gas exchange more severely than interstitial edema.",
  "type": "mcq",
  "options": [
   "Capillary hydrostatic pressure exceeds colloid osmotic pressure, producing interstitial edema.",
   "Functional residual capacity and lung compliance increase as the disease progresses.",
   "A high ventilation-to-perfusion ratio is characteristic of affected lung fields.",
   "Interstitial edema is usually more serious than alveolar edema."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q048",
  "exam": 4,
  "src": 401,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "An older client is admitted for repair of a broken hip. To reduce the risk for infection in the postoperative period, which interventions should the nurse include in the plan of care? (Select all that apply.)",
  "rationale": "Incentive spirometry prevents atelectasis and pneumonia, and early removal of the urinary catheter reduces the risk of catheter-associated urinary tract infection; both directly reduce infection risk. Sequential compression devices and low-molecular-weight heparin prevent venous thromboembolism, and pain management promotes mobility and comfort, but these are not infection-prevention measures.",
  "type": "sata",
  "options": [
   "Assess pain level and medicate PRN as prescribed.",
   "Maintain sequential compression devices while the client is in bed.",
   "Teach the client to use the incentive spirometer every 2 hours while awake.",
   "Remove the urinary catheter as soon as possible and encourage voiding.",
   "Administer low-molecular-weight heparin as prescribed."
  ],
  "correct": [
   2,
   3
  ]
 },
 {
  "id": "hesi4q049",
  "exam": 4,
  "src": 804,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Which intervention should the nurse include in the plan of care for a client with leukocytosis?",
  "rationale": "Leukocytosis, an elevated white blood cell count, most often indicates infection or inflammation, so the temperature is monitored regularly to detect fever and evaluate response to treatment. Avoiding IM injections and monitoring for petechiae are bleeding precautions for thrombocytopenia, and protective isolation is used for neutropenia.",
  "type": "mcq",
  "options": [
   "Assess the skin for petechiae or bruising.",
   "Implement protective isolation measures.",
   "Avoid intramuscular injections.",
   "Monitor temperature regularly."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q050",
  "exam": 4,
  "src": 525,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The family of a client who just died arrives on the nursing unit after receiving telephone notification of the death. Several family members say they would like to view the body. How should the nurse respond?",
  "rationale": "Viewing the body helps family members accept the reality of the death and begin grieving, and the nurse supports them by preparing the room and the body and accompanying them, staying or leaving according to their wishes. Telling them the body is unavailable, sending them to the funeral home or making them wait for the chaplain denies a meaningful opportunity for closure.",
  "type": "mcq",
  "options": [
   "Ask the family to wait in the lounge until the chaplain arrives.",
   "Advise the family to wait and view the body at the funeral home.",
   "Explain that the body has already been taken to the morgue.",
   "Offer to go with the family members to view the body."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q051",
  "exam": 4,
  "src": 29,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A child with heart failure is receiving the diuretic furosemide and has a serum potassium level of 3.0 mEq/L. Which assessment is most important for the nurse to obtain?",
  "rationale": "A potassium level of 3.0 mEq/L is low (normal 3.5 to 5.0 mEq/L), and hypokalemia can cause life-threatening dysrhythmias, especially in a child with heart disease who may also be receiving digoxin, so the cardiac rhythm and rate are the priority. Dietary potassium intake is relevant for teaching but does not address the immediate risk. Urine output and thirst or skin turgor evaluate fluid status rather than the dangerous effect of the electrolyte imbalance.",
  "type": "mcq",
  "options": [
   "Thirst and skin turgor",
   "Hourly urinary output",
   "Daily intake of foods rich in potassium",
   "Cardiac rhythm and heart rate"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q052",
  "exam": 4,
  "src": 727,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A public health nurse receives funding to start primary prevention programs in the community. Which program best fits the nurse's proposal?",
  "rationale": "Primary prevention promotes health and prevents disease before it occurs, and prenatal vitamins such as folic acid prevent neural tube defects and other complications. Screening for lead or HIV is secondary prevention (early detection), case management of clients with HIV is tertiary care, and relocation after a disaster is a response to an event that has already happened.",
  "type": "mcq",
  "options": [
   "Lead screening for children in low-income housing",
   "Case management and screening for clients with HIV",
   "Vitamin supplements for high-risk pregnant women",
   "A regional relocation center for earthquake victims"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q053",
  "exam": 4,
  "src": 178,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with pneumonia has the following arterial blood gases: pH 7.33, PaCO2 49 mm Hg, HCO3 25 mEq/L, PaO2 95 mm Hg. Which intervention should the nurse implement based on these results?",
  "rationale": "A low pH with an elevated PaCO2 and normal bicarbonate indicates uncompensated respiratory acidosis from hypoventilation and retained secretions, so coughing and deep breathing improve ventilation and CO2 elimination. Sodium bicarbonate treats metabolic acidosis, and rebreathing into a paper bag would raise the CO2 further. The PaO2 of 95 is normal, so more oxygen does not address the problem of inadequate ventilation.",
  "type": "mcq",
  "options": [
   "Have the client breathe into a paper bag.",
   "Institute coughing and deep-breathing protocols.",
   "Administer sodium bicarbonate IV as prescribed.",
   "Increase the oxygen to 6 L/min by nasal cannula."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q054",
  "exam": 4,
  "src": 791,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "Which client is at the greatest risk for developing delirium?",
  "rationale": "Delirium is an acute disturbance of attention and cognition triggered by physiologic stressors, and unrelieved pain combined with sleep deprivation are major precipitating factors. A past suicide attempt, a stable antipsychotic regimen and chronic home oxygen use are not acute precipitants of delirium.",
  "type": "mcq",
  "options": [
   "A young adult who takes an antipsychotic medication twice a day",
   "A middle-aged woman who uses a tank for supplemental oxygen",
   "An adult client who cannot sleep because of constant pain",
   "An older client who attempted suicide one month ago"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q055",
  "exam": 4,
  "src": 267,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "A mother runs into the emergency department with a toddler in her arms and tells the nurse that her child got into some cleaning products. The child smells of chemicals on the hands, face, and the front of the clothes. After ensuring the airway is patent, which action should the nurse implement first?",
  "rationale": "Treatment of a poisoning depends on the specific substance, its amount and the time of exposure, so identifying the chemical is the next step after securing the airway; poison control is then called with that information, although the call is made even if the agent is unknown. Gastric lavage is rarely used and is never initiated without direction, and altered sensorium is monitored but follows identification of the toxin.",
  "type": "mcq",
  "options": [
   "Obtain equipment for gastric lavage.",
   "Assess the child for altered sensorium.",
   "Determine the type of chemical exposure.",
   "Call the poison control emergency number."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q056",
  "exam": 4,
  "src": 3,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A 4-year-old with acute lymphocytic leukemia (ALL) is receiving a chemotherapy protocol that includes methotrexate, an antimetabolite. Which information should the nurse provide the parents about caring for their child?",
  "rationale": "Methotrexate causes photosensitivity, so the child should be protected from the sun with sunblock and protective clothing. Folic acid supplements counteract methotrexate's mechanism of action (a folic acid antagonist) unless leucovorin rescue is specifically prescribed. Rectal temperatures are avoided because myelosuppression increases the risk of bleeding and infection from mucosal trauma, and aspirin is avoided because it impairs platelet function in a child already at risk for thrombocytopenia.",
  "type": "mcq",
  "options": [
   "Use sunblock or protective clothing when outdoors.",
   "Offer aspirin for mild discomfort or low-grade fever.",
   "Give a daily multivitamin that contains folic acid.",
   "Take the child's temperature rectally each evening."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q057",
  "exam": 4,
  "src": 144,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A client with angina pectoris is being discharged from the hospital. Which instruction should the nurse plan to include in the discharge teaching?",
  "rationale": "Isometric exercise such as heavy lifting raises blood pressure and myocardial workload, whereas regular walking provides aerobic conditioning that improves cardiovascular function. Exercise should be avoided for about 2 hours after meals, when blood flow is diverted to digestion, and it does not lower cholesterol immediately. Cold causes vasoconstriction that can trigger angina, and nitroglycerin must be stored in its original dark glass bottle to protect it from light and moisture.",
  "type": "mcq",
  "options": [
   "Walk briskly in cold weather to increase cardiac output.",
   "Keep nitroglycerin in a light-colored plastic bottle.",
   "Avoid all isometric exercises, but walk regularly.",
   "Exercise immediately after eating to help lower cholesterol."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q058",
  "exam": 4,
  "src": 223,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client has received a prescription for orlistat for weight management. The client states he also plans to take a multivitamin. Which teaching should the nurse provide?",
  "rationale": "Orlistat inhibits intestinal lipase and decreases the absorption of dietary fat and the fat-soluble vitamins A, D, E and K, so a multivitamin is recommended and should be taken at least 2 hours before or after orlistat, often at bedtime. Taking them together blocks vitamin absorption. Supplementation is needed, and the multivitamin should contain the fat-soluble vitamins that orlistat depletes.",
  "type": "mcq",
  "options": [
   "Choose a multivitamin that does not contain any fat-soluble vitamins.",
   "Take the multivitamin and the orlistat at least 2 hours apart for best absorption.",
   "Take the multivitamin together with the orlistat at each main meal.",
   "A multivitamin is unnecessary while you are taking orlistat."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q059",
  "exam": 4,
  "src": 649,
  "topic": "Maternity & Newborn",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is preparing a 4-day-old infant with a serum bilirubin level of 19 mg/dL for discharge. When teaching the parents about home phototherapy, which instruction should the nurse include?",
  "rationale": "Changing the infant's position every 2 hours exposes all skin surfaces to the light, which converts bilirubin into a water-soluble form that can be excreted. Diaper changes, bathing and feedings can be done off the light as bonding time, feedings should occur every 2 to 3 hours to promote bilirubin excretion and prevent dehydration, and the infant should wear only a diaper so the skin is exposed.",
  "type": "mcq",
  "options": [
   "Reposition the infant every 2 hours.",
   "Feed the infant every 4 hours.",
   "Perform diaper changes under the light.",
   "Cover the infant with a receiving blanket."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q060",
  "exam": 4,
  "src": 123,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with a history of cirrhosis and alcoholism is admitted with severe dyspnea and ascites. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Muffled heart sounds can indicate a pericardial effusion progressing to cardiac tamponade, which is life-threatening and requires immediate intervention. Jaundice, scleral icterus and pitting edema are expected manifestations of end-stage liver disease related to impaired bilirubin metabolism and low albumin, and they are not immediately life-threatening.",
  "type": "mcq",
  "options": [
   "Pitting peripheral edema",
   "Bilateral scleral icterus",
   "Jaundiced skin tone",
   "Muffled heart sounds"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q061",
  "exam": 4,
  "src": 755,
  "topic": "Respiratory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "When caring for a client with acute respiratory distress syndrome (ARDS), the nurse elevates the head of the bed 30 degrees. What is the reason for this intervention?",
  "rationale": "Elevating the head of the bed allows the abdominal contents to fall away from the diaphragm, permitting greater diaphragmatic excursion and lung expansion, and it also reduces the risk of aspiration and ventilator-associated pneumonia. Positioning does not cause accessory muscle retraction, bronchodilation or a change in pressure on the medullary respiratory center.",
  "type": "mcq",
  "options": [
   "To promote retraction of the intercostal accessory muscles",
   "To decrease pressure on the medullary respiratory center",
   "To promote bronchodilation and effective airway clearance",
   "To reduce abdominal pressure on the diaphragm"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q062",
  "exam": 4,
  "src": 619,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is caring for a group of clients with the help of a practical nurse (PN). Which nursing actions should the nurse assign to the PN? (Select all that apply.)",
  "rationale": "Administering subcutaneous insulin for a stable client and obtaining vital signs for a stable postoperative client are within the PN's scope. Initiating PCA for immediately postoperative clients and starting a blood transfusion require RN assessment and monitoring, and the first postoperative dressing change, which includes initial wound assessment, should be performed by the RN.",
  "type": "sata",
  "options": [
   "Administer a dose of sliding-scale insulin to a client with type 2 diabetes mellitus.",
   "Obtain postoperative vital signs for a client one day after knee arthroplasty.",
   "Perform the first surgical dressing change for a client after abdominal hysterectomy.",
   "Start the second blood transfusion for a client twelve hours after amputation.",
   "Initiate patient-controlled analgesia (PCA) pumps for two clients just out of surgery."
  ],
  "correct": [
   0,
   1
  ]
 },
 {
  "id": "hesi4q063",
  "exam": 4,
  "src": 14,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A 26-year-old female client is admitted for treatment of a simple goiter, and levothyroxine sodium is prescribed. Which symptoms indicate to the nurse that the prescribed dosage is too high for this client?",
  "rationale": "Excessive levothyroxine produces signs of hyperthyroidism, including tachycardia, palpitations, dyspnea, nervousness, heat intolerance and weight loss. Bradycardia, constipation, lethargy and poor appetite are signs of hypothyroidism, suggesting the dose is too low. Muscle cramping with dry, flushed skin does not reflect thyroid hormone excess.",
  "type": "mcq",
  "options": [
   "Palpitations and shortness of breath",
   "Lethargy and lack of appetite",
   "Bradycardia and constipation",
   "Muscle cramping and dry, flushed skin"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q064",
  "exam": 4,
  "src": 173,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with muscular dystrophy is concerned about becoming totally dependent and is reluctant to call the nurse for assistance with activities of daily living (ADLs). To achieve maximum mobility and independence, which intervention is most important for the nurse to include in the client's plan of care?",
  "rationale": "Range-of-motion exercises performed regularly with family assistance help prevent contractures and maintain function, supporting the client's independence for as long as possible. Bed rest accelerates muscle weakness and contracture formation. Doing all ADLs for the client fosters the dependence the client fears, and continuous splinting of all extremities limits movement; splints are used selectively, often at night.",
  "type": "mcq",
  "options": [
   "Encourage complete bed rest to conserve energy.",
   "Apply splints to all extremities continuously.",
   "Teach the family proper range-of-motion exercises.",
   "Assist the client with all ADLs to prevent fatigue."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q065",
  "exam": 4,
  "src": 671,
  "topic": "Renal & GU",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is reinforcing home-care instructions with a client being discharged after a transurethral resection of the prostate (TURP). Which instruction is most important for the nurse to include?",
  "rationale": "Bright red blood or clots in the urine after discharge may indicate hemorrhage, often when the prostatic scab sloughs at about 10 to 14 days, and must be reported. Fluids are encouraged, about 2 to 3 liters daily, to flush the bladder, heavy lifting and straining are avoided for several weeks, and dribbling and incontinence are common for weeks after catheter removal.",
  "type": "mcq",
  "options": [
   "Resume heavy lifting after one week.",
   "Expect full bladder control immediately.",
   "Report fresh blood in the urine.",
   "Limit fluid intake to 1 liter per day."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q066",
  "exam": 4,
  "src": 283,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "A nurse stops at the scene of a motorcycle accident and finds a young adult male lying face down in a puddle of water on the road. It is raining, no one is available to send for help, and the nurse's cell phone is in the car about 50 feet away. Which action should the nurse take first?",
  "rationale": "A victim lying face down in water cannot have his airway or breathing assessed and may be drowning, so the nurse first log-rolls him while stabilizing the cervical spine, which is presumed injured after a motorcycle crash. The airway can be opened and resuscitation started only after he is turned. Checking for bleeding or leaving to call for help before turning him could result in asphyxiation.",
  "type": "mcq",
  "options": [
   "Stabilize the victim's neck and roll him over to evaluate his status.",
   "Open the airway and begin resuscitative measures.",
   "Examine the victim's body surfaces for arterial bleeding.",
   "Return to the car to call 911 for emergency help."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q067",
  "exam": 4,
  "src": 17,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A 56-year-old man shares with the nurse that he is having difficulty making a decision about terminating life support for his wife. What is the best initial action by the nurse?",
  "rationale": "When a person faces decisional conflict, the nurse should first help him clarify the values that matter to him in the decision, which supports autonomous, informed decision-making. Sharing memories, involving the chaplain or social worker and gathering information can all be helpful later, once he has identified what is important to him; advising him to seek several opinions also shifts responsibility away from the therapeutic process.",
  "type": "mcq",
  "options": [
   "Encourage him to share memories about his life with his wife and family",
   "Offer to contact the hospital chaplain or social worker to offer support",
   "Provide an opportunity for him to clarify his values related to the decision",
   "Advise him to seek several opinions before making a decision"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q068",
  "exam": 4,
  "src": 106,
  "topic": "Maternity & Newborn",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client at 36 weeks' gestation is admitted with severe preeclampsia. After a 6-gram loading dose of magnesium sulfate, an IV infusion of magnesium sulfate at 2 grams/hour is initiated. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Magnesium is excreted by the kidneys, so urine output below 30 mL/hour allows magnesium to accumulate to toxic levels; the nurse should notify the provider and anticipate decreasing or stopping the infusion. Reflexes of 2+ are normal, a respiratory rate of 16 is adequate (toxicity is suspected below 12), and a level of about 4 to 7 mg/dL is within the therapeutic range for seizure prophylaxis.",
  "type": "mcq",
  "options": [
   "Serum magnesium level of 5.5 mg/dL",
   "Urine output of 20 mL/hour",
   "Respiratory rate of 16 breaths/minute",
   "Deep tendon reflexes of 2+"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q069",
  "exam": 4,
  "src": 429,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "At 1615, before ambulating a postoperative client for the first time, the nurse reviews the medical record: temperature 99.1° F (37.3° C), oxygen saturation 96% to 98% on room air for the past 4 hours, surgical dressing dry and intact, and sequential compression devices (SCDs) on both legs. Based on these data, which action should the nurse take before assisting the client with ambulation?",
  "rationale": "Sequential compression devices must be removed before ambulation to prevent tripping and falls, and nothing in the record contraindicates walking. Oxygen saturation has been normal on room air, so oxygen is not needed. A temperature of 99.1° F does not require an antipyretic, and a dry, intact dressing does not need reinforcement.",
  "type": "mcq",
  "options": [
   "Reinforce the surgical wound dressing.",
   "Remove the sequential compression devices.",
   "Administer a PRN dose of an antipyretic.",
   "Apply PRN oxygen per nasal cannula."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q070",
  "exam": 4,
  "src": 508,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Oral antibiotics are prescribed for an 18-month-old toddler with severe otitis media, and antipyrine and benzocaine otic solution is prescribed for pain. Which instruction should the nurse emphasize about instilling the otic solution?",
  "rationale": "Keeping the child positioned with the affected ear up for a few minutes allows the drops to flow down the canal and remain in contact with the eardrum. The dropper should not touch or enter the ear canal, and for a child under 3 years the pinna is pulled down and back. Microwaving can overheat the solution and burn the ear, and refrigerated drops can cause pain and dizziness; drops are warmed by holding the bottle in the hand.",
  "type": "mcq",
  "options": [
   "Place the dropper in the upper outer ear canal and instill the medication slowly.",
   "Have the child lie with the affected ear up for 1 to 2 minutes after instillation.",
   "Keep the medication refrigerated between administrations.",
   "Warm the medication in the microwave for 10 seconds before instilling it."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q071",
  "exam": 4,
  "src": 47,
  "topic": "Maternity & Newborn",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client in her first trimester of pregnancy complains of nausea. Which complementary therapy should the nurse recommend?",
  "rationale": "Of these options, mild herbal teas such as chamomile are a soothing, commonly recommended measure for first-trimester nausea when used in moderation; ginger, small frequent meals and dry crackers are other common measures. Garlic-rich foods often worsen nausea and heartburn. Weekly yoga promotes relaxation but does not target nausea, and cocoa contains caffeine, which should be limited in pregnancy and can disrupt sleep.",
  "type": "mcq",
  "options": [
   "Join a yoga class that meets at least weekly.",
   "Eat foods high in garlic with the evening meal.",
   "Increase cocoa in the diet and drink it before bedtime.",
   "Drink chamomile tea at breakfast and in the evening."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q072",
  "exam": 4,
  "src": 578,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse enters a client's room to administer scheduled daily medications and observes the client leaning forward and using pursed-lip breathing. Which action is most important for the nurse to implement first?",
  "rationale": "Leaning forward (tripod position) and pursed-lip breathing indicate that the client is working to breathe, so the nurse first assesses oxygenation, which guides the next interventions. Giving the medications proceeds only after the client is assessed as stable, increasing oxygen without data may be unsafe for a client who retains CO2, and pursed-lip breathing is a helpful technique that should be encouraged.",
  "type": "mcq",
  "options": [
   "Evaluate the oxygen saturation.",
   "Administer the scheduled medications.",
   "Increase the oxygen to 6 L/min.",
   "Instruct the client to stop pursed-lip breathing."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q073",
  "exam": 4,
  "src": 343,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "After repositioning an immobile client, the nurse observes an area of hyperemia. To assess for blanching, which action should the nurse take?",
  "rationale": "Pressing lightly over reddened skin and releasing shows whether the area blanches; blanching that refills indicates reactive hyperemia, whereas nonblanchable erythema indicates a stage 1 pressure injury. Massage of reddened areas damages underlying capillaries and is contraindicated, ice reduces perfusion, and elevating the area does not assess blanching.",
  "type": "mcq",
  "options": [
   "Massage the reddened area firmly.",
   "Elevate the area on a pillow.",
   "Apply an ice pack to the area.",
   "Apply light pressure over the area."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q074",
  "exam": 4,
  "src": 483,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "When assessing a pressure injury on a client's hip, which action should the nurse include?",
  "rationale": "Photographing the wound with a measuring guide, per agency policy, objectively documents its size and appearance so healing or deterioration can be compared over time. Skin elasticity is not part of wound assessment. The Braden Scale predicts risk for pressure injury and does not stage depth, and tunneling is measured with a sterile cotton-tipped applicator rather than a finger.",
  "type": "mcq",
  "options": [
   "Photograph the lesion with a ruler placed next to it.",
   "Stage the depth of the ulcer using the Braden numeric scale.",
   "Determine the degree of skin elasticity around the lesion.",
   "Use a gloved finger to palpate for tunneling around the lesion."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q075",
  "exam": 4,
  "src": 422,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "An unlicensed assistive personnel (UAP) leaves the unit without notifying the staff. In which order should the unit manager implement the following interventions to address the UAP's behavior?",
  "rationale": "The manager first documents objective facts about the incident, then discusses the behavior privately with the UAP to explore the reason and clarify expectations. A plan such as scheduled breaks addresses the underlying problem, and the manager then evaluates whether the behavior improves, which follows the steps of constructive performance management.",
  "type": "mcq",
  "options": [
   "Discuss the issue privately with the UAP → Evaluate the UAP for improvement → Note the date and time of the behavior → Plan scheduled break times",
   "Note the date and time of the behavior → Discuss the issue privately with the UAP → Plan scheduled break times → Evaluate the UAP for improvement",
   "Plan scheduled break times → Note the date and time of the behavior → Evaluate the UAP for improvement → Discuss the issue privately with the UAP",
   "Evaluate the UAP for improvement → Plan scheduled break times → Discuss the issue privately with the UAP → Note the date and time of the behavior"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q076",
  "exam": 4,
  "src": 203,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A female client receives a prescription for alendronate to treat her newly diagnosed osteoporosis. Which instruction should the nurse include in the client's teaching plan?",
  "rationale": "Alendronate is poorly absorbed, so it is taken first thing in the morning on an empty stomach with 6 to 8 ounces of plain water, and the client waits at least 30 minutes before eating, drinking or taking other medications. Food and calcium supplements greatly reduce absorption. The client must remain upright for at least 30 minutes to prevent esophageal irritation and ulceration.",
  "type": "mcq",
  "options": [
   "Take it at the same time as a calcium supplement.",
   "Take it on an empty stomach with a full glass of water.",
   "Lie down for 30 minutes after taking the dose.",
   "Take it with breakfast to prevent stomach upset."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q077",
  "exam": 4,
  "src": 607,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is caring for a 4-year-old boy who becomes unresponsive as his heart rate decreases to 40 beats/minute. His blood pressure is 88/70 mm Hg, and his oxygen saturation is 70% on 100% oxygen by non-rebreather mask. In which sequence should the nurse implement the following actions?",
  "rationale": "In pediatric bradycardia with poor perfusion, a heart rate below 60 despite oxygenation and ventilation requires immediate CPR with assisted ventilation, because bradycardia in children is usually caused by hypoxia. Epinephrine is given next if bradycardia persists, pacing is considered for refractory bradycardia, and underlying causes (the H's and T's) are reviewed and treated throughout the resuscitation.",
  "type": "mcq",
  "options": [
   "Review possible causes of the bradycardia → Apply pads and prepare for transthoracic pacing → Give epinephrine 0.01 mg/kg IO → Start chest compressions with assisted ventilation",
   "Apply pads and prepare for transthoracic pacing → Start chest compressions with assisted ventilation → Review possible causes of the bradycardia → Give epinephrine 0.01 mg/kg IO",
   "Start chest compressions with assisted ventilation → Give epinephrine 0.01 mg/kg IO → Apply pads and prepare for transthoracic pacing → Review possible causes of the bradycardia",
   "Give epinephrine 0.01 mg/kg IO → Review possible causes of the bradycardia → Start chest compressions with assisted ventilation → Apply pads and prepare for transthoracic pacing"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q078",
  "exam": 4,
  "src": 296,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "A primigravida at 36 weeks' gestation is admitted to the labor and delivery unit because her membranes ruptured 30 minutes ago. Assessment shows 2 cm dilation, 50% effacement, −2 station, vertex presentation, greenish amniotic fluid, and contractions every 3 to 5 minutes, with a decrease in the FHR after the last contraction peaked. Which action should the nurse implement first?",
  "rationale": "A fall in the fetal heart rate after the peak of a contraction suggests a late deceleration from uteroplacental insufficiency, and meconium-stained fluid indicates possible fetal stress, so the nurse first implements intrauterine resuscitation, including maternal repositioning and oxygen, to improve fetal oxygenation. The provider is notified after these immediate measures. An internal monitor can be considered later, and vibroacoustic stimulation is used to elicit accelerations during a nonstress test, not to treat decelerations.",
  "type": "mcq",
  "options": [
   "Use a vibroacoustic stimulator.",
   "Administer oxygen via face mask.",
   "Apply an internal fetal heart monitor.",
   "Notify the healthcare provider."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q079",
  "exam": 4,
  "src": 451,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "During change-of-shift report, the nurse learns that a male client who had abdominal surgery yesterday became increasingly confused and disoriented during the night, wandered into other clients' rooms saying that men in his room were trying to hurt him, and had soft restraints applied at 0400 after multiple attempts to get out of bed. In which order should the oncoming nurse implement the following interventions?",
  "rationale": "Restraints can cause impaired circulation and skin injury, so the nurse first checks the restrained extremities, then evaluates the client's mental status to decide whether the restraints are still necessary. If they can be removed, a UAP stays with the client as a less restrictive alternative, and the nurse then contacts the providers to report the acute postoperative confusion, which may signal a complication requiring evaluation.",
  "type": "mcq",
  "options": [
   "Assess skin and circulation under the restraints → Evaluate mentation to determine the need for restraints → Assign a UAP to remove the restraints and stay with the client → Contact the surgeon and primary provider",
   "Evaluate mentation to determine the need for restraints → Contact the surgeon and primary provider → Assign a UAP to remove the restraints and stay with the client → Assess skin and circulation under the restraints",
   "Contact the surgeon and primary provider → Assess skin and circulation under the restraints → Evaluate mentation to determine the need for restraints → Assign a UAP to remove the restraints and stay with the client",
   "Assign a UAP to remove the restraints and stay with the client → Contact the surgeon and primary provider → Assess skin and circulation under the restraints → Evaluate mentation to determine the need for restraints"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q080",
  "exam": 4,
  "src": 482,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While assessing a client twelve hours after a transurethral resection of the prostate (TURP), the nurse observes a large amount of clear, pale pink urine in the drainage tubing and notes that the continuous bladder irrigation is infusing slowly. Which action should the nurse implement?",
  "rationale": "Pale pink urine is expected after TURP, and keeping the drainage tubing free of dependent loops and kinks maintains free outflow so the irrigation can run as prescribed. The irrigation rate is titrated to keep the drainage light pink, so it does not need to run at maximum, clamping the drainage while irrigant infuses can overdistend the bladder, and manual irrigation is done only for clots or obstruction according to the prescription and with sterile saline rather than water.",
  "type": "mcq",
  "options": [
   "Irrigate the catheter manually with 60 mL of water.",
   "Ensure that no dependent loops are present in the tubing.",
   "Increase the irrigation to the fastest possible rate.",
   "Clamp the drainage tubing for 30 minutes."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q081",
  "exam": 4,
  "src": 767,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "When the nurse finds a client sitting on the floor, the nurse calls the unlicensed assistive personnel (UAP) for help. Which task should the nurse ask the UAP to do?",
  "rationale": "The nurse stays with the client to assess for injury before the client is moved, and the UAP can bring equipment needed for the assessment, such as a blood pressure cuff. Assessment for injury is a nursing responsibility, helping the client up before assessment could worsen an injury, and the nurse is responsible for reporting the fall after the client is cared for.",
  "type": "mcq",
  "options": [
   "Help the client to stand up.",
   "Report the fall to the nurse manager.",
   "Get a blood pressure cuff.",
   "Check the client for any abrasions or bruises."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q082",
  "exam": 4,
  "src": 256,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A male client who is 24 hours postoperative after an exploratory laparotomy complains that he is “starving” because he has had no real food since before surgery. Prior to advancing his diet, which intervention should the nurse implement?",
  "rationale": "After abdominal surgery, manipulation of the bowel and anesthesia cause temporary paralytic ileus, so the return of peristalsis, shown by bowel sounds in all quadrants along with passing flatus, is assessed before the diet is advanced. Asking about preferences or offering a tray before confirming bowel function risks vomiting and distention, and the incision assessment does not determine readiness to eat.",
  "type": "mcq",
  "options": [
   "Check the incision for signs of drainage.",
   "Auscultate bowel sounds in all four quadrants.",
   "Offer a full-liquid tray as a trial meal.",
   "Ask the client which foods he would like to order."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q083",
  "exam": 4,
  "src": 339,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "After receiving report, the nurse can most safely plan to assess which client last?",
  "rationale": "A compressed Jackson-Pratt bulb is maintaining suction, and minimal drainage is not unusual, so this client is the most stable. Pale red rectal drainage may indicate bleeding, a distended abdomen with no NG output suggests an obstructed tube that could lead to vomiting and aspiration, and bloody drainage on a dressing with an empty Hemovac suggests bleeding or drain malfunction.",
  "type": "mcq",
  "options": [
   "The client with a rectal tube draining clear, pale red liquid",
   "The client with a distended abdomen and no drainage from the nasogastric tube",
   "The client with dark red drainage on a dressing but no drainage in the Hemovac",
   "The client with no drainage in a Jackson-Pratt drain with the bulb compressed"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q084",
  "exam": 4,
  "src": 232,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client receives a thrombolytic medication following a myocardial infarction. When the client has a bowel movement, which action should the nurse implement?",
  "rationale": "Thrombolytics dissolve clots and increase the risk of bleeding anywhere in the body, so stool is tested for occult blood to detect GI bleeding. Clay-colored stool suggests biliary obstruction, fatty streaks suggest malabsorption, and a culture is used to identify infectious diarrhea; none of these is related to thrombolytic therapy.",
  "type": "mcq",
  "options": [
   "Obtain a stool specimen for culture and sensitivity.",
   "Assess the client's stool for fatty yellow streaks.",
   "Observe the stool for a clay-colored appearance.",
   "Send a stool sample to the laboratory for a guaiac test."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q085",
  "exam": 4,
  "src": 110,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client scheduled for an elective inguinal hernia repair today in day surgery is seen eating in the waiting area. Which actions should the nurse who is preparing to administer the preoperative medications take? (Select all that apply.)",
  "rationale": "Eating before surgery increases the risk of vomiting and aspiration during anesthesia, so the nurse explains this risk and withholds the preoperative medication while notifying the surgeon and anesthesia provider, who will likely reschedule the procedure. Reviewing the consent does not address the problem, and taking the food away does not undo what has already been eaten.",
  "type": "sata",
  "options": [
   "Explain that vomiting can occur during surgery.",
   "Review the surgical consent with the client.",
   "Remove the food from the client.",
   "Withhold the preoperative medication."
  ],
  "correct": [
   0,
   3
  ]
 },
 {
  "id": "hesi4q086",
  "exam": 4,
  "src": 392,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An infant is to receive penicillin G procaine 220,000 units IM. The drug is supplied as 600,000 units/mL. How many mL should the nurse administer? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "Using D/H × Q: 220,000 units ÷ 600,000 units × 1 mL = 0.367 mL, which rounds to 0.4 mL.",
  "type": "fill",
  "answer": 0.4,
  "unit": "mL",
  "tolerance": 0.01
 },
 {
  "id": "hesi4q087",
  "exam": 4,
  "src": 195,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A female client comes to the clinic complaining of fatigue and inability to sleep because she is the full-time caregiver for her 22-year-old son, who was paralyzed in a motor vehicle collision. She adds that her husband left her because he could not take her behavior any more, since all she does is care for their son. Which intervention should the nurse implement?",
  "rationale": "The client is showing signs of caregiver role strain, and acknowledging her stress while suggesting respite care addresses her immediate need for relief and helps her accept assistance. A home visit focuses on the son rather than the client's concerns. Interpreting her behavior as atonement for guilt is a premature, judgmental interpretation, and telling her to problem-solve alone ignores her request for help.",
  "type": "mcq",
  "options": [
   "Teach the client to problem-solve for herself and establish her own priorities.",
   "Schedule a home visit in the afternoon to assess the son and the client's caregiver role.",
   "Acknowledge the client's stress and suggest that she consider respite care.",
   "Provide feedback to the client about her atonement for guilt about her son's impairment."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q088",
  "exam": 4,
  "src": 471,
  "topic": "GI & Nutrition",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Following discharge teaching, a male client with a duodenal ulcer tells the nurse that he will drink plenty of dairy products, such as milk, to help coat and protect his ulcer. What is the best follow-up action by the nurse?",
  "rationale": "Milk and cream temporarily buffer acid but their calcium and protein stimulate rebound gastric acid secretion, so milk-rich diets are no longer recommended for peptic ulcer disease, and the client's misconception should be corrected. Confirming the statement, recommending bedtime milk or switching to whole milk would reinforce incorrect and potentially harmful practices.",
  "type": "mcq",
  "options": [
   "Suggest that the client switch to whole milk to provide more coating.",
   "Confirm that milk will coat the ulcer and help it heal more quickly.",
   "Encourage the client to drink milk only at bedtime to prevent night pain.",
   "Review with the client the need to avoid foods that are rich in milk and cream."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q089",
  "exam": 4,
  "src": 711,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse should teach the client to observe which precaution while taking dronedarone?",
  "rationale": "Grapefruit inhibits the CYP3A4 enzyme that metabolizes dronedarone, raising drug levels and increasing the risk of QT prolongation and dysrhythmias. Dronedarone is taken with meals to improve absorption, vitamin K intake matters for warfarin rather than dronedarone, and dairy does not interfere with its absorption.",
  "type": "mcq",
  "options": [
   "Avoid grapefruit and grapefruit juice.",
   "Increase intake of vitamin K–rich foods.",
   "Take the medication on an empty stomach.",
   "Avoid dairy products within 2 hours of dosing."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q090",
  "exam": 4,
  "src": 268,
  "topic": "Maternity & Newborn",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A multigravida at term who is in labor complains of “back labor.” Vaginal examination reveals that she is 3 cm dilated and 50% effaced, and the fetal head is at −1 station. Which action should the nurse implement?",
  "rationale": "Back labor usually results from a fetal occiput posterior position pressing on the sacrum, and firm counterpressure to the sacral area with the heel of the hand or a tennis ball relieves the discomfort. A supine position increases pressure on the sacrum and causes supine hypotension, whereas hands-and-knees or side-lying positions may help rotate the fetus. There is no indication for a cesarean birth, and pushing before full dilation causes cervical edema.",
  "type": "mcq",
  "options": [
   "Notify the scrub nurse to prepare the OR.",
   "Encourage the client to push with contractions.",
   "Turn the client to a supine position.",
   "Apply counterpressure to the sacral area."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q091",
  "exam": 4,
  "src": 814,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While a child is hospitalized with acute glomerulonephritis, the parents ask why the blood pressure is checked so often. Which response by the nurse is most accurate?",
  "rationale": "In acute glomerulonephritis, decreased glomerular filtration causes sodium and water retention and hypertension, which can lead to hypertensive encephalopathy and seizures, so frequent blood pressure monitoring allows prompt treatment. Fluctuations do not indicate chronic disease, hypotension and shock are not expected, and sodium restriction helps but is not the reason for frequent measurement.",
  "type": "mcq",
  "options": [
   "Hypotension leading to sudden shock can develop at any time.",
   "Elevated blood pressure must be anticipated and identified quickly.",
   "Blood pressure fluctuations mean the condition has become chronic.",
   "Sodium intake with meals and snacks controls the blood pressure."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q092",
  "exam": 4,
  "src": 624,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is caring for several clients on a telemetry unit. Which client should the nurse assess first?",
  "rationale": "Chest pain may indicate myocardial ischemia even when the rhythm appears normal, so this client needs immediate assessment and a 12-lead ECG. A paced rhythm with full capture shows the pacemaker is working, fatigue is common with heart failure and atrial fibrillation, and sinus tachycardia after an MI warrants follow-up but is less urgent than active chest pain.",
  "type": "mcq",
  "options": [
   "The client with a paced rhythm and 100% capture after pacemaker replacement",
   "The client with atrial fibrillation and heart failure who reports fatigue",
   "The client in normal sinus rhythm who is complaining of chest pain",
   "The client with sinus tachycardia 3 days after a myocardial infarction"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q093",
  "exam": 4,
  "src": 786,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which assessment finding in a postmenopausal woman warrants referral by the nurse to the healthcare provider for evaluation of thyroid function?",
  "rationale": "Intolerance to cold, along with fatigue, weight gain, dry skin and constipation, suggests hypothyroidism, which is common in older women and may be mistaken for aging. Hot flashes, night sweats and vaginal dryness are typical symptoms of menopause related to estrogen decline.",
  "type": "mcq",
  "options": [
   "Vaginal dryness",
   "Cold sensitivity",
   "Night sweats",
   "Hot flashes"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q094",
  "exam": 4,
  "src": 557,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The mother of a 12-month-old with cystic fibrosis reports that her child has increasing congestion despite chest physiotherapy (CPT) twice a day and has also lost his appetite. Which instruction should the nurse provide?",
  "rationale": "Increasing congestion means secretions are not being cleared adequately, so CPT should be performed more often to move secretions into the central airways for expectoration, timed at least 1 hour before or 2 hours after meals to avoid vomiting. Performing CPT after meals can cause vomiting and aspiration, and decreasing CPT would worsen congestion.",
  "type": "mcq",
  "options": [
   "Stop CPT during the daytime until the child regains an appetite.",
   "Perform CPT after meals to increase appetite and food intake.",
   "Perform CPT more frequently, but at least an hour before meals.",
   "Perform CPT only in the morning, increasing it when appetite improves."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q095",
  "exam": 4,
  "src": 573,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse discovers that an older client with no history of cardiac or renal disease has an elevated serum magnesium level. To investigate the cause of this electrolyte imbalance, which information is most important for the nurse to obtain from the client's history?",
  "rationale": "Magnesium-containing laxatives and antacids, such as milk of magnesia, are a common cause of hypermagnesemia, particularly in older adults whose renal function declines with age. Chronic alcohol use, vomiting and diarrhea cause magnesium loss and hypomagnesemia, and calcium supplements do not raise magnesium levels.",
  "type": "mcq",
  "options": [
   "Use of calcium supplements for bone health",
   "Recent episodes of vomiting or diarrhea",
   "Frequency of laxative use for chronic constipation",
   "Amount of alcohol consumed each week"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q096",
  "exam": 4,
  "src": 720,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse working in a psychiatric clinic has phone messages from several clients. Which call should the nurse return first?",
  "rationale": "A missing client with dementia is in immediate danger from exposure, injury and inability to care for themselves, so this call is returned first to help initiate a search and notify authorities. A medication refill, a rescheduling request and trouble sleeping are important but not emergencies.",
  "type": "mcq",
  "options": [
   "A client with depression who is requesting a medication refill",
   "A family member of a client with dementia who has been missing for five hours",
   "A client with schizophrenia who asks to reschedule an appointment",
   "A client with an anxiety disorder who reports trouble sleeping"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q097",
  "exam": 4,
  "src": 585,
  "topic": "GI & Nutrition",
  "clientNeed": "Management of Care",
  "stem": "The nurse is arranging home care for an older client who had a new colostomy created during a large bowel resection three days ago. The client plans to live with a family member. Which actions should the nurse implement? (Select all that apply.)",
  "rationale": "Discharge planning includes assessing how much ostomy care the client can perform independently, teaching safe use of prescribed analgesics and preparing the family caregiver to assist with ostomy care. Fiber is reintroduced gradually rather than permanently avoided, the pouch is typically changed every 3 to 7 days or when leaking, and routine irrigation is not required for most colostomies.",
  "type": "sata",
  "options": [
   "Schedule daily colostomy irrigation for the family member.",
   "Assess the client's ability to perform self-care.",
   "Tell the client to change the pouch every 8 hours.",
   "Teach ostomy care to the family caregiver.",
   "Provide instructions about pain medication.",
   "Instruct the client to avoid all dietary fiber permanently."
  ],
  "correct": [
   1,
   3,
   4
  ]
 },
 {
  "id": "hesi4q098",
  "exam": 4,
  "src": 591,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is assessing a client on the first postpartum day. Which finding is most indicative of a postpartum infection?",
  "rationale": "Foul-smelling lochia is a classic sign of endometritis, the most common postpartum infection. A low-grade temperature within the first 24 hours is usually due to dehydration, leukocytosis up to 20,000 to 30,000/mm3 is normal after birth, and a firm fundus at the umbilicus on the first day is expected.",
  "type": "mcq",
  "options": [
   "Moderate amount of foul-smelling lochia",
   "Temperature of 100.2° F in the first 24 hours",
   "White blood cell count of 18,000/mm3",
   "Firm fundus at the level of the umbilicus"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q099",
  "exam": 4,
  "src": 166,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with hyperthyroidism is receiving propranolol. Which finding indicates that the medication is having the desired effect?",
  "rationale": "Propranolol is a beta-adrenergic blocker that relieves the sympathetic effects of excess thyroid hormone, such as tachycardia, palpitations, tremor and anxiety, so a slower pulse shows it is working. It does not significantly lower thyroid hormone production or shrink a goiter, which are effects of antithyroid drugs or ablation, and it lowers rather than raises blood pressure.",
  "type": "mcq",
  "options": [
   "Decrease in pulse rate",
   "Increase in blood pressure",
   "Goiter no longer palpable",
   "Decrease in serum T4 levels"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q100",
  "exam": 4,
  "src": 470,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Following breakfast, the nurse prepares to administer 0900 medications to clients on a medical unit. Which medication should be held until a later time?",
  "rationale": "Sucralfate forms a protective barrier over ulcerated mucosa and is most effective on an empty stomach, 1 hour before meals and at bedtime, so the dose given right after breakfast should be rescheduled. Metoprolol, furosemide and docusate can be given with or after food without loss of effect.",
  "type": "mcq",
  "options": [
   "Sucralfate, a mucosal barrier, for a client with peptic ulcer disease",
   "Furosemide, a loop diuretic, for a client with heart failure",
   "Metoprolol, a beta blocker, for a client with hypertension",
   "Docusate sodium, a stool softener, for a client with constipation"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q101",
  "exam": 4,
  "src": 186,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with type 2 diabetes mellitus is admitted for frequent hyperglycemic episodes and a glycosylated hemoglobin (HbA1c) of 10%. Insulin glargine 10 units subcutaneously once daily at bedtime and a sliding scale with insulin aspart every 6 hours are prescribed. Which actions should the nurse include in this client's plan of care? (Select all that apply.)",
  "rationale": "Glucose monitoring guides the sliding-scale doses, consistent carbohydrate-controlled meals support glycemic control, and foot care and injection teaching address the client's long-term self-management needs. Insulin glargine must never be mixed with another insulin because mixing alters its pH and its peakless, long-acting profile. Insulin aspart is given subcutaneously on this sliding scale, and regular insulin, not a reserved vial of aspart, is the insulin standardly used for IV infusion.",
  "type": "sata",
  "options": [
   "Coordinate carbohydrate-controlled meals at consistent times and intervals.",
   "Avoid contaminating the insulin aspart so it remains available for IV use.",
   "Review proper foot care and prevention of injury with the client.",
   "Perform fingerstick glucose assessment every 6 hours with meals.",
   "Teach subcutaneous injection technique, site rotation, and insulin management.",
   "Mix the bedtime glargine dose with the aspart sliding-scale dose."
  ],
  "correct": [
   0,
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi4q102",
  "exam": 4,
  "src": 378,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An African-American man comes to the hypertension screening booth at a community fair. His blood pressure is 170/94 mm Hg, and he tells the nurse he has never been treated for high blood pressure. Which response should the nurse make?",
  "rationale": "A reading of 170/94 mm Hg is in the stage 2 hypertension range and requires prompt follow-up to confirm the diagnosis and begin treatment, but without symptoms of target-organ damage it is not a hypertensive emergency requiring the emergency department. It is not normal at any age, and waiting six months would delay treatment of a condition that places him at high risk for stroke and heart disease.",
  "type": "mcq",
  "options": [
   "“You need to go to the emergency department right now for treatment.”",
   "“Your blood pressure is within the normal range for your age.”",
   "“You should have your blood pressure rechecked in six months.”",
   "“Your blood pressure is high. You need to have it rechecked within one week.”"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q103",
  "exam": 4,
  "src": 273,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A newly admitted client vomits coffee-ground emesis into an emesis basin. The nurse should consult with the healthcare provider before administering which of the client's prescribed medications? (Select all that apply.)",
  "rationale": "Coffee-ground emesis indicates upper GI bleeding, so medications that increase bleeding risk must be clarified: clopidogrel and enoxaparin impair clotting, and corticosteroids such as methylprednisolone irritate the gastric mucosa and increase the risk of ulcer bleeding. A transdermal nitroglycerin patch and IV furosemide do not affect bleeding and are not given by mouth, so vomiting does not alter their administration.",
  "type": "sata",
  "options": [
   "Methylprednisolone, a corticosteroid, given IV",
   "Enoxaparin, a low-molecular-weight heparin, given subcutaneously",
   "Furosemide, a loop diuretic, given IV",
   "Clopidogrel, an antiplatelet agent, given orally",
   "Nitroglycerin, an antianginal, given transdermally"
  ],
  "correct": [
   0,
   1,
   3
  ]
 },
 {
  "id": "hesi4q104",
  "exam": 4,
  "src": 122,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with a history of chronic pain requests a nonopioid analgesic. The client is alert but has difficulty describing the exact nature and location of the pain. Which action should the nurse implement next?",
  "rationale": "Pain is whatever the client says it is, and chronic pain is often diffuse and hard to describe, so the nurse should treat the reported pain with the prescribed analgesic. Withholding medication until the client can describe the pain precisely leads to undertreatment, and the vague description alone does not require notifying the provider. Using a placebo to test whether pain is real is unethical and deceptive.",
  "type": "mcq",
  "options": [
   "Offer a placebo to determine if the pain is real.",
   "Notify the healthcare provider of the vague pain.",
   "Withhold the analgesic until the pain is described.",
   "Administer the analgesic as requested."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q105",
  "exam": 4,
  "src": 69,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A client is being discharged home after treatment for heart failure (HF). Which instruction should the nurse include in this client's discharge teaching plan?",
  "rationale": "Daily morning weights, using the same scale and similar clothing before breakfast, are the most sensitive indicator of fluid retention; a gain of 2 to 3 pounds in a day or 5 pounds in a week should be reported. A high-protein diet is not the focus of heart failure teaching, which emphasizes sodium restriction. Range-of-motion exercises do not address the disease, and a 500 mL fluid limit is overly restrictive.",
  "type": "mcq",
  "options": [
   "Weigh every morning",
   "Eat a high-protein diet",
   "Perform range-of-motion exercises",
   "Limit fluid intake to 500 mL daily"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q106",
  "exam": 4,
  "src": 172,
  "topic": "Neuro & Sensory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with multiple sclerosis is receiving interferon beta-1b every other day. To assess for possible bone marrow suppression caused by the medication, which serum laboratory findings should the nurse monitor? (Select all that apply.)",
  "rationale": "Bone marrow suppression reduces production of all blood cell lines, so the platelet, red blood cell and white blood cell counts are monitored (as part of a complete blood count) during interferon therapy. Albumin and protein reflect nutrition and liver synthesis, and sodium and potassium reflect fluid and electrolyte balance; neither measures marrow function, although liver enzymes are also monitored with interferons.",
  "type": "sata",
  "options": [
   "Albumin and protein",
   "White blood cell count (WBC)",
   "Sodium and potassium",
   "Red blood cell count (RBC)",
   "Platelet count"
  ],
  "correct": [
   1,
   3,
   4
  ]
 },
 {
  "id": "hesi4q107",
  "exam": 4,
  "src": 820,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While changing a client's postoperative dressing, the nurse observes purulent drainage from the wound. Before reporting this finding to the healthcare provider, the nurse should review which of the client's laboratory values?",
  "rationale": "Purulent drainage indicates wound infection, and the culture and sensitivity results identify the organism and the antibiotics it is susceptible to, which is the information the provider needs to treat the infection. Albumin and glucose affect healing and infection risk, and creatinine may affect antibiotic dosing, but they are less directly relevant to the immediate report.",
  "type": "mcq",
  "options": [
   "Serum albumin",
   "Creatinine level",
   "Serum blood glucose level",
   "Culture and sensitivity results"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q108",
  "exam": 4,
  "src": 434,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A laboring client's record shows: cervix 6 cm dilated, 100% effaced, 0 station; contractions every 3 minutes lasting 60 seconds; fetal heart rate baseline 140 beats/minute with moderate variability and accelerations; maternal vital signs within normal limits. Based on this information, which action should the nurse implement?",
  "rationale": "The findings show normal active labor with a reassuring Category I fetal heart rate tracing (normal baseline, moderate variability and accelerations), so the nurse continues routine monitoring. There is no failure to progress, and intrauterine resuscitation measures or an emergency cesarean birth are indicated only for a nonreassuring tracing.",
  "type": "mcq",
  "options": [
   "Notify the healthcare provider of failure to progress.",
   "Continue to monitor the progress of labor.",
   "Prepare the client for an immediate cesarean birth.",
   "Turn the client to her left side and give oxygen."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q109",
  "exam": 4,
  "src": 405,
  "topic": "Cardiovascular",
  "clientNeed": "Safety & Infection Control",
  "stem": "An older male resident of a long-term care facility is hospitalized for a cardiac catheterization performed yesterday. Since the procedure, he has become increasingly disoriented, and the night nurse reports that he tried to remove the sandbag from his femoral access site several times during the night. Which actions should the nurse take? (Select all that apply.)",
  "rationale": "An acute change in mental status after a procedure may indicate a complication such as hypoxia, bleeding, contrast reaction or delirium and must be reported, and frequent reorientation is a nonrestrictive measure that supports safety. Restraints and sedation are last resorts that can worsen delirium, and removing the pressure device without a prescription increases the risk of bleeding at the arterial site.",
  "type": "sata",
  "options": [
   "Notify the healthcare provider of the client's change in mental status.",
   "Administer a PRN sedative so that the client remains still.",
   "Remove the sandbag so that it no longer upsets the client.",
   "Include reorientation every 2 hours in the client's plan of care.",
   "Apply bilateral wrist restraints to protect the access site."
  ],
  "correct": [
   0,
   3
  ]
 },
 {
  "id": "hesi4q110",
  "exam": 4,
  "src": 198,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A female client admitted with end-stage pulmonary disease is alert and oriented and complaining of shortness of breath. She tells the nurse that she wants “no heroic measures” taken if she stops breathing and asks the nurse to document this in her medical record. Which action should the nurse implement?",
  "rationale": "A DNR status requires a written prescription from the healthcare provider, so the client should discuss her wishes with her provider, and the nurse can facilitate that conversation. Documenting “no heroic measures” in the nursing notes is vague and does not legally prevent resuscitation. A DNR band cannot be applied without a prescription, and an alert, competent client signs her own advance directive.",
  "type": "mcq",
  "options": [
   "Document the client's request for “no heroic measures” in the nurse's notes.",
   "Place a “do not resuscitate” identification band on the client's wrist.",
   "Ask the client to discuss a “do not resuscitate” prescription with her healthcare provider.",
   "Ask the client's family to sign an advance directive on her behalf."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q111",
  "exam": 4,
  "src": 423,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An Unna boot is applied to a client with a venous stasis ulcer. One week later, when the boot is removed at a follow-up appointment, the nurse observes that the ulcer contains bright red tissue. Which action should the nurse take in response to this finding?",
  "rationale": "Beefy red, moist tissue in a wound bed is granulation tissue, which indicates healing, so the nurse documents the finding and continues the treatment. Signs of infection include purulent drainage, odor, increasing pain and surrounding erythema, none of which are described, so a culture or provider notification is not needed, and compression therapy should continue.",
  "type": "mcq",
  "options": [
   "Obtain a culture of the wound bed before reapplying the boot.",
   "Leave the boot off and apply a dry sterile dressing.",
   "Notify the healthcare provider of a possible infection.",
   "Document the ongoing wound healing."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q112",
  "exam": 4,
  "src": 668,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing to mix two medications from two different multidose vials, A and B, in one syringe. In which order should the nurse perform these actions?",
  "rationale": "The nurse first verifies each medication and dose against the prescription. Air equal to each volume is injected into both vials before any medication is withdrawn, so that withdrawing from the second vial does not require injecting air through a syringe that already contains medication and contaminating that vial. The first medication is then withdrawn, followed by the second.",
  "type": "mcq",
  "options": [
   "Verify the drug and dose with the vial labels → Inject air equal to the volume to be withdrawn into each vial → Aspirate the desired volume from vial A → Aspirate the desired volume from vial B",
   "Aspirate the desired volume from vial A → Aspirate the desired volume from vial B → Inject air equal to the volume to be withdrawn into each vial → Verify the drug and dose with the vial labels",
   "Inject air equal to the volume to be withdrawn into each vial → Aspirate the desired volume from vial A → Verify the drug and dose with the vial labels → Aspirate the desired volume from vial B",
   "Verify the drug and dose with the vial labels → Aspirate the desired volume from vial A → Inject air equal to the volume to be withdrawn into each vial → Aspirate the desired volume from vial B"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q113",
  "exam": 4,
  "src": 136,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with a serum sodium level of 125 mEq/L would benefit most from the administration of which intravenous solution?",
  "rationale": "A sodium of 125 mEq/L is low (normal 135 to 145 mEq/L), and isotonic 0.9% sodium chloride replaces sodium without diluting the serum further. Half-normal saline and 5% dextrose in 0.2% saline are hypotonic once the dextrose is metabolized and would worsen hyponatremia by adding free water. Ten percent dextrose in half-normal saline provides calories but also contains less sodium than the client needs.",
  "type": "mcq",
  "options": [
   "5% dextrose in 0.2% sodium chloride",
   "0.9% sodium chloride (normal saline)",
   "0.45% sodium chloride (half-normal saline)",
   "10% dextrose in 0.45% sodium chloride"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q114",
  "exam": 4,
  "src": 679,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is teaching the mother of a newborn with a cleft lip how to bottle-feed using a Haberman feeder, which has a valve that controls the release of milk and a slit nipple opening. After discussing placement of the nipple's elongated tip at the back of the mouth, which instruction should the nurse provide about feedings?",
  "rationale": "Feeding an infant with a cleft in an upright or semi-upright position reduces the risk of aspiration and of milk entering the nasal cavity. The Haberman feeder regulates flow in response to the infant's effort, so squeezing the nipple can deliver more milk than the infant can swallow. After feeding the infant is placed on the right side or back per safe-sleep guidance, and small amounts of water are given after, not during, the feeding to cleanse the cleft.",
  "type": "mcq",
  "options": [
   "Hold the newborn in an upright position.",
   "Position the baby on the left side after feeding.",
   "Squeeze the nipple base to introduce milk into the mouth.",
   "Alternate milk with water during the feeding."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q115",
  "exam": 4,
  "src": 250,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A male client with COPD who smokes two packs of cigarettes per day is admitted with a respiratory infection. He reports trouble controlling respiratory distress at home when using his rescue inhaler. Which comment from the client indicates to the nurse that he is not using his inhaler properly?",
  "rationale": "Swallowing after activating the inhaler means the medication is being deposited in the mouth and swallowed rather than inhaled into the airways, which also explains the nausea. Difficulty holding the breath is common in COPD and he is attempting the correct technique. A rescue inhaler is appropriately used only when short of breath, and shaking the canister before use is correct.",
  "type": "mcq",
  "options": [
   "“I always shake the inhaler several times before I start.”",
   "“I have a hard time inhaling and holding my breath after I squeeze the inhaler, but I do my best.”",
   "“After I squeeze the inhaler and swallow, I always feel a slight wave of nausea, but it goes away.”",
   "“I never use the inhaler unless I am feeling really short of breath.”"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q116",
  "exam": 4,
  "src": 699,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "At the beginning of the shift, the nurse performs a prescribed neurologic check on a client admitted with a subarachnoid hemorrhagic stroke. The client's Glasgow Coma Scale (GCS) score is 9. Which information is most important for the nurse to determine?",
  "rationale": "A GCS of 9 is abnormal (15 is normal), but its significance depends on the trend, so the previous score shows whether the client is stable, improving or deteriorating and needs urgent intervention. The time of onset is important early for treatment decisions, orientation is already part of the verbal GCS score, and vital signs are assessed, but the neurologic trend is the key information.",
  "type": "mcq",
  "options": [
   "The client's blood pressure and respiratory rate",
   "Whether the client is oriented to time",
   "The client's previous GCS score",
   "When the client's stroke symptoms started"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q117",
  "exam": 4,
  "src": 648,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse plans to measure a client's oxygen saturation to determine whether supplemental oxygen is needed by nasal cannula. The client has bilateral below-the-knee amputations and peripheral pulses that are weak and thready. Which action should the nurse take?",
  "rationale": "Weak peripheral perfusion makes finger readings unreliable, and an earlobe sensor, which has a more central blood supply, provides an accurate saturation measurement. The nurse should not simply document that a reading cannot be obtained, elevating the hands further reduces finger perfusion, and adjusting oxygen without objective data is unsafe.",
  "type": "mcq",
  "options": [
   "Elevate the client's hands for 5 minutes before using a finger probe.",
   "Document that an accurate oxygen saturation cannot be obtained.",
   "Increase the oxygen based on breathing pattern and lung sounds.",
   "Place the oximeter clip on the earlobe to obtain the reading."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q118",
  "exam": 4,
  "src": 510,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "Progressive kyphoscoliosis leading to respiratory distress is evident in a client with muscular dystrophy. Which finding warrants immediate intervention by the nurse?",
  "rationale": "Kyphoscoliosis and weakened respiratory muscles restrict chest expansion, and hypoventilation, shown by shallow breathing, rising CO2, somnolence or morning headache, signals impending respiratory failure that may require ventilatory support. Fatigue, decreased appetite and back discomfort are expected with progressive disease and are not immediately life-threatening.",
  "type": "mcq",
  "options": [
   "Mild fatigue at the end of the day",
   "Evidence of hypoventilation",
   "Decreased appetite at meals",
   "Reports of back discomfort"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q119",
  "exam": 4,
  "src": 823,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "While completing an admission assessment for a client with unstable angina, which closed question should the nurse ask about the client's pain?",
  "rationale": "A closed question can be answered with “yes” or “no” or a brief fact, which gathers specific information efficiently, such as whether pain occurs with minimal exertion, which characterizes unstable angina. The other questions are open-ended, inviting the client to describe the pain in their own words; they are useful but are not closed questions.",
  "type": "mcq",
  "options": [
   "“Does your pain occur when you walk short distances?”",
   "“How would you describe your chest pain?”",
   "“What makes your pain better or worse?”",
   "“Tell me about the pain you have been having.”"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q120",
  "exam": 4,
  "src": 789,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which breakfast selection indicates that the client understands the nurse's instructions about the dietary management of osteoporosis?",
  "rationale": "Dietary management of osteoporosis emphasizes adequate calcium and vitamin D, and skim milk is an excellent source of both. Caffeine increases urinary calcium loss, colas contain phosphoric acid and caffeine that are associated with lower bone density, and bacon, toast and apple juice provide little calcium.",
  "type": "mcq",
  "options": [
   "Bacon, white toast, and apple juice",
   "Black coffee and a cinnamon roll",
   "Cola and a glazed doughnut",
   "Bagel with jelly and skim milk"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q121",
  "exam": 4,
  "src": 246,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A male client with cancer is admitted to the oncology unit and tells the nurse that he is in the hospital for palliative care measures. The nurse notes that the client's admission prescriptions include radiation therapy. Which action should the nurse implement?",
  "rationale": "Palliative care focuses on relief of symptoms, and radiation is often used palliatively, for example to reduce pain from bone metastases or relieve obstruction; asking about the client's goals clarifies whether the plan matches his expectations. Suggesting home care, holding the treatment or asking whether he wants to cancel radiation assumes a conflict between palliative care and radiation that may not exist.",
  "type": "mcq",
  "options": [
   "Ask the client about his expected goals for the hospitalization.",
   "Notify the radiation department to withhold the treatment for now.",
   "Explain that palliative care measures can be provided at home.",
   "Determine if the client wishes to cancel further radiation treatment."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q122",
  "exam": 4,
  "src": 626,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is collecting a sterile urine specimen for culture using a straight catheter tray. In which order should the nurse perform the following actions?",
  "rationale": "The client is positioned and draped first to provide privacy and access, then the sterile tray is opened to create the sterile field. Sterile gloves are applied, and the meatus is cleansed with the forceps and swabs immediately before insertion. Gloving before positioning or opening the tray would contaminate the gloves, and cleansing must use the sterile supplies after gloving.",
  "type": "mcq",
  "options": [
   "Drape the client in a recumbent position for privacy → Open the catheterization tray → Don sterile gloves using aseptic technique → Use forceps and swabs to cleanse the urinary meatus",
   "Don sterile gloves using aseptic technique → Use forceps and swabs to cleanse the urinary meatus → Open the catheterization tray → Drape the client in a recumbent position for privacy",
   "Open the catheterization tray → Don sterile gloves using aseptic technique → Drape the client in a recumbent position for privacy → Use forceps and swabs to cleanse the urinary meatus",
   "Use forceps and swabs to cleanse the urinary meatus → Drape the client in a recumbent position for privacy → Open the catheterization tray → Don sterile gloves using aseptic technique"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi4q123",
  "exam": 4,
  "src": 356,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A preschool-aged boy is admitted to the pediatric unit after successful resuscitation from a near-drowning. While caring for the child, the nurse talks with his preadolescent brother, who rescued him from the swimming pool and initiated resuscitation. The nurse notices that the older boy becomes withdrawn when asked about what happened. Which action should the nurse take?",
  "rationale": "Witnessing and responding to a traumatic event can cause guilt, fear and posttraumatic stress, and inviting the brother to describe his feelings helps him express and process them. Calling him a hero may block expression of guilt or fear, and leaving him alone or sending him away avoids the feelings the nurse has observed.",
  "type": "mcq",
  "options": [
   "Suggest that the older brother wait in the cafeteria with a relative.",
   "Ask the older brother how he felt during the incident.",
   "Tell the older brother that he is a hero for saving his brother.",
   "Leave the older brother alone so that he can process the event."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi4q124",
  "exam": 4,
  "src": 541,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes potassium chloride 25 mEq in 500 mL D5W to infuse over 6 hours. The available 20 mL vial of potassium chloride is labeled 10 mEq/5 mL. How many mL of potassium chloride should the nurse add to the IV fluid? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "Using D/H × Q: 25 mEq ÷ 10 mEq × 5 mL = 12.5 mL. After adding potassium to the bag, the nurse inverts it several times to mix it thoroughly, because concentrated potassium can pool and be delivered as a dangerous bolus.",
  "type": "fill",
  "answer": 12.5,
  "unit": "mL",
  "tolerance": 0.01
 },
 {
  "id": "hesi4q125",
  "exam": 4,
  "src": 188,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client reports dysuria, urgency, and urinary frequency. Which action should the nurse implement next?",
  "rationale": "These symptoms suggest a urinary tract infection, so the next step is to collect a clean-catch midstream specimen for urinalysis and culture before any treatment begins. Catheterization introduces bacteria and is unnecessary for a client who can void. Cranberry juice and phenazopyridine may help with prevention or symptom relief, but they do not confirm the diagnosis, and phenazopyridine discolors urine and can interfere with dipstick results.",
  "type": "mcq",
  "options": [
   "Administer phenazopyridine for the discomfort.",
   "Encourage the client to drink cranberry juice.",
   "Collect a clean-catch specimen.",
   "Insert an indwelling catheter to obtain urine."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q126",
  "exam": 4,
  "src": 620,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is caring for a one-week-old infant with a ventriculoperitoneal (VP) shunt placed 2 days after birth. Which findings indicate a postoperative complication? (Select all that apply.)",
  "rationale": "Poor feeding and vomiting may signal increased intracranial pressure from shunt malfunction or infection, CSF leakage at the incision increases the risk of infection and indicates poor wound closure, and abdominal distention may indicate peritonitis, ileus or a CSF pseudocyst at the peritoneal end. Active bowel sounds and a WBC of 10,000/mm3, which is within the normal range for a newborn, are not signs of complications.",
  "type": "sata",
  "options": [
   "Leakage of CSF from the incision site",
   "Abdominal distention",
   "Hyperactive bowel sounds",
   "WBC count of 10,000/mm3",
   "Poor feeding and vomiting"
  ],
  "correct": [
   0,
   1,
   4
  ]
 },
 {
  "id": "hesi4q127",
  "exam": 4,
  "src": 302,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A toddler presents to the clinic with a barking cough, stridor, and retractions with respiration. The child's skin is pink, with capillary refill of 2 seconds. Which intervention should the nurse implement?",
  "rationale": "A barking cough with stridor and retractions indicates laryngotracheobronchitis (croup) with moderate respiratory distress, and nebulized racemic epinephrine rapidly reduces subglottic edema, usually along with a corticosteroid such as dexamethasone. The child is well perfused and not in respiratory failure, so a tracheostomy is not indicated. Croup is usually viral, so antibiotics are not used, and cough suppressants do not relieve airway swelling.",
  "type": "mcq",
  "options": [
   "Prepare for an emergency tracheostomy.",
   "Administer an IV antibiotic as prescribed.",
   "Give the prescribed cough suppressant.",
   "Administer nebulized epinephrine."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi4q128",
  "exam": 4,
  "src": 274,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A newly graduated female staff nurse asks the nurse manager to reassign her to another client because a male client is asking her for a date and making suggestive comments. Which response is best for the nurse manager to provide?",
  "rationale": "The manager supports the new nurse by changing the assignment and uses the situation as a teaching opportunity about setting professional boundaries and responding to inappropriate client behavior. Telling her to handle it alone is unsupportive, intervening for her does not build her skills, and advising her to ignore sexual harassment minimizes a legitimate concern.",
  "type": "mcq",
  "options": [
   "“Just ignore his comments; he is probably harmless and will be discharged soon.”",
   "“You need to learn how to handle these kinds of situations on your own as a professional.”",
   "“I'll change your assignment, but let's talk about how a nurse should respond to this kind of client.”",
   "“I'll go speak to the client myself and tell him that his behavior must stop immediately.”"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q129",
  "exam": 4,
  "src": 684,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is using a straight urinary catheter kit to collect a sterile urine specimen from a female client. After positioning and draping the client, in which sequence should the nurse implement the following actions?",
  "rationale": "The kit is opened close to the client to create the sterile field with minimal risk of contamination, sterile gloves are then donned and the field prepared, the meatus is cleansed with the supplied antiseptic, swabs and forceps, and finally the catheter is inserted with its distal end in the sterile specimen container to collect the urine. Gloving before opening the kit, or cleansing before gloving, breaks sterile technique.",
  "type": "mcq",
  "options": [
   "Don sterile gloves and prepare the sterile field → Open the sterile kit close to the perineum → Place the catheter's distal end in the specimen cup and insert the catheter → Cleanse the meatus with the swabs and forceps",
   "Cleanse the meatus with the swabs and forceps → Open the sterile kit close to the perineum → Don sterile gloves and prepare the sterile field → Place the catheter's distal end in the specimen cup and insert the catheter",
   "Open the sterile kit close to the perineum → Don sterile gloves and prepare the sterile field → Cleanse the meatus with the swabs and forceps → Place the catheter's distal end in the specimen cup and insert the catheter",
   "Open the sterile kit close to the perineum → Cleanse the meatus with the swabs and forceps → Place the catheter's distal end in the specimen cup and insert the catheter → Don sterile gloves and prepare the sterile field"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi4q130",
  "exam": 4,
  "src": 78,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving an oral antibiotic suspension labeled 250 mg/2 mL. The healthcare provider prescribes 200 mg every 6 hours. How many mL should the nurse administer at each dose? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "Using D/H × Q: 200 mg ÷ 250 mg × 2 mL = 0.8 × 2 = 1.6 mL per dose.",
  "type": "fill",
  "answer": 1.6,
  "unit": "mL",
  "tolerance": 0.01
 },
 {
  "id": "hesi5q001",
  "exam": 5,
  "src": 224,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "A male client is admitted for removal of an internal fixation device that was inserted for an ankle fracture. During the admission history, he tells the nurse he recently received vancomycin for a methicillin-resistant Staphylococcus aureus (MRSA) wound infection. Which actions should the nurse take? (Select all that apply.)",
  "rationale": "Until multiple-site screening cultures are negative, a client with recent MRSA infection is maintained on contact precautions to prevent transmission, and ongoing monitoring for infection is essential before and after surgery. Linezolid is indicated only for an active MRSA infection, which this client does not currently have. A sputum culture is not indicated because his history is of a wound infection, not a respiratory one.",
  "type": "sata",
  "options": [
   "Call the healthcare provider for a prescription for linezolid.",
   "Continue to monitor the client for signs of infection.",
   "Collect multiple-site screening cultures for MRSA.",
   "Obtain a sputum specimen for culture and sensitivity.",
   "Place the client on contact transmission precautions."
  ],
  "correct": [
   1,
   2,
   4
  ]
 },
 {
  "id": "hesi5q002",
  "exam": 5,
  "src": 529,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes methotrexate 7.5 mg PO weekly, in 3 divided doses, for a child with juvenile rheumatoid arthritis whose body surface area (BSA) is 0.6 m2. The therapeutic dosage of oral methotrexate is 5 to 15 mg/m2/week. How many mg should the nurse administer in each of the three weekly doses? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "First confirm safety: 0.6 m2 × 5 to 15 mg/m2/week = 3 to 9 mg/week, so 7.5 mg/week is within the safe range. Then divide the weekly dose: 7.5 mg ÷ 3 doses = 2.5 mg per dose.",
  "type": "fill",
  "answer": 2.5,
  "unit": "mg",
  "tolerance": 0.01
 },
 {
  "id": "hesi5q003",
  "exam": 5,
  "src": 396,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "An older adult client with heart failure (HF) develops cardiac tamponade. The client has muffled, distant heart sounds and is anxious and restless. After initiating oxygen therapy and IV hydration, which intervention is most important for the nurse to implement?",
  "rationale": "In cardiac tamponade, fluid in the pericardial sac compresses the heart and prevents ventricular filling, causing a precipitous fall in cardiac output; the definitive treatment is emergency pericardiocentesis to remove the fluid. Jugular venous distention and pulsus paradoxus help confirm the diagnosis, and oximetry is monitored, but further assessment must not delay the life-saving procedure.",
  "type": "mcq",
  "options": [
   "Observe the neck for jugular vein distention.",
   "Assess for paradoxical blood pressure.",
   "Monitor oxygen saturation via continuous pulse oximetry.",
   "Notify the healthcare provider to prepare for pericardiocentesis."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q004",
  "exam": 5,
  "src": 460,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "During the intraoperative phase of care, the circulating nurse observes that the client is not adequately draped to protect the client's privacy. What is the best initial nursing action?",
  "rationale": "The circulating nurse is the client's advocate in the operating room, including protecting dignity and privacy, so the immediate action is to correct the problem by having the client properly draped. Reporting, documenting or waiting until the case ends leaves the client exposed and does not resolve the situation.",
  "type": "mcq",
  "options": [
   "Report the scrub nurse to the operating room manager.",
   "Wait until the case is over to discuss it with the team.",
   "Document the privacy breach in the client's record.",
   "Instruct the scrub nurse to re-drape the client."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q005",
  "exam": 5,
  "src": 437,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "Diagnostic studies indicate that an older client has decreased bone density. In providing client teaching, which area of instruction is most important for the nurse to include?",
  "rationale": "Decreased bone density greatly increases the risk of fractures, particularly hip fractures from falls, which carry high morbidity and mortality in older adults, so fall prevention is the priority teaching. Weight-bearing exercise is encouraged because it strengthens bone, calcium should not be taken together with iron because they interfere with each other's absorption, and protein is not the focus.",
  "type": "mcq",
  "options": [
   "High-protein dietary choices",
   "Taking calcium with iron supplements",
   "Fall prevention measures",
   "Avoiding weight-bearing exercise"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q006",
  "exam": 5,
  "src": 811,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Which problem in the client's history is important for the nurse to be aware of before administering a newly prescribed selective serotonin reuptake inhibitor (SSRI)?",
  "rationale": "Migraines are commonly treated with triptans, which, like SSRIs, increase serotonin activity, and combining them increases the risk of serotonin syndrome, with agitation, hyperthermia, tachycardia, tremor and hyperreflexia; the client's migraine treatment must be reviewed. Allergic rhinitis, treated hypothyroidism and osteoarthritis do not create a significant risk with SSRIs.",
  "type": "mcq",
  "options": [
   "Hypothyroidism controlled with levothyroxine",
   "Migraine headaches with aura",
   "Osteoarthritis of both knees",
   "Seasonal allergic rhinitis"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q007",
  "exam": 5,
  "src": 511,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "Several months after a foot injury, an adult woman is diagnosed with neuropathic pain. She describes the pain as severe and burning and is unable to put weight on her foot. She asks the nurse when the pain will “finally go away.” How should the nurse respond?",
  "rationale": "Neuropathic pain is often chronic and may not resolve completely, so a realistic goal is to manage the pain and improve function using medications such as gabapentinoids or antidepressants and non-pharmacologic strategies. Promising resolution in weeks or with weight-bearing is false reassurance, and surgery is not the only or usual treatment.",
  "type": "mcq",
  "options": [
   "Tell the client that surgery is the only way to stop the pain.",
   "Reassure the client that the pain will resolve within a few weeks.",
   "Explain that the pain will end once she resumes weight-bearing.",
   "Assist the client in developing a goal of managing the pain."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q008",
  "exam": 5,
  "src": 272,
  "topic": "Maternity & Newborn",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A new mother tells the nurse that she is unsure whether she will be able to make the transition into parenthood. Which action should the nurse take?",
  "rationale": "A strong support system is one of the most important factors in a successful transition to parenthood, so the nurse first assesses whom she can rely on for help. Reassurance that she will adjust quickly is false reassurance that dismisses her concern. Expressing uncertainty is common and does not by itself indicate depression requiring psychiatric referral, and books do not replace practical support.",
  "type": "mcq",
  "options": [
   "Reassure her that most new mothers adjust to parenthood within a few days.",
   "Provide her with several books about parenting to read at home.",
   "Refer her to a psychiatrist for evaluation of postpartum depression.",
   "Determine if she can ask for support from family, friends, or the baby's father."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q009",
  "exam": 5,
  "src": 83,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is scheduled to receive an IV dose of ondansetron eight hours after receiving chemotherapy. The client has a saline lock and is sleeping quietly without restlessness. The nurse caring for the client is not certified in chemotherapy administration. Which action should the nurse take?",
  "rationale": "Ondansetron is an antiemetic, not a chemotherapeutic agent, so any nurse may give it using standard IV technique through the saline lock. Scheduled antiemetics are given around the clock after chemotherapy to prevent nausea and vomiting rather than waiting for symptoms, so holding the dose or waking the client to ask whether it is needed is inappropriate.",
  "type": "mcq",
  "options": [
   "Administer the ondansetron after flushing the saline lock with saline.",
   "Hold the scheduled dose of ondansetron until the client awakens.",
   "Awaken the client to assess the need for the ondansetron.",
   "Ask a chemotherapy-certified nurse to administer the ondansetron."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q010",
  "exam": 5,
  "src": 748,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "When assessing a 6-month-old infant, the nurse finds that the anterior fontanel is bulging. In which situation is this finding most significant?",
  "rationale": "The anterior fontanel normally closes between 12 and 18 months and may bulge temporarily when venous return from the head is reduced, as with crying, straining, vomiting or lying down. A fontanel that bulges while the infant is quiet and upright suggests increased intracranial pressure from causes such as hydrocephalus or meningitis and requires prompt evaluation.",
  "type": "mcq",
  "options": [
   "Straining to pass stool",
   "Vomiting",
   "Sitting upright",
   "Crying"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q011",
  "exam": 5,
  "src": 739,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "Two days after admission, a male client remembers that he is allergic to eggs and informs the nurse. Which actions should the nurse implement? (Select all that apply.)",
  "rationale": "A newly reported allergy must be communicated to everyone who could expose the client, so the nurse notifies dietary services, documents the allergy in the medical record and updates the allergy armband. Antihistamines are not given prophylactically before meals, and current guidelines allow most vaccines, including influenza vaccine, to be given to people with egg allergy.",
  "type": "sata",
  "options": [
   "Administer a prescribed antihistamine before each meal.",
   "Notify the food services department of the allergy.",
   "Add the egg allergy to the client's allergy armband.",
   "Enter the allergy information in the client's record.",
   "Hold all scheduled vaccines until the provider is notified."
  ],
  "correct": [
   1,
   2,
   3
  ]
 },
 {
  "id": "hesi5q012",
  "exam": 5,
  "src": 46,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client has both a primary IV infusion and a secondary (piggyback) medication infusion. An infusion pump is not available. The nurse needs to determine the current rate of infusion of the primary IV. Where should the nurse observe to determine the rate of infusion?",
  "rationale": "For a gravity infusion, the rate is determined by counting the drops falling in the drip chamber of that line over one minute and applying the tubing's drop factor, so the primary tubing's drip chamber shows the primary rate. The secondary drip chamber reflects only the piggyback medication. The roller clamp position does not indicate a measurable rate, and bag volume markings show only how much has infused over a longer period.",
  "type": "mcq",
  "options": [
   "The roller clamp on the primary IV tubing",
   "The drip chamber of the primary IV tubing",
   "The volume markings on the primary IV bag",
   "The drip chamber of the secondary IV tubing"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q013",
  "exam": 5,
  "src": 589,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is assessing a client's nailbeds. Which appearance indicates the need for further follow-up for problems associated with chronic hypoxia?",
  "rationale": "Clubbing, in which the angle between the nail and the nailbed reaches 180 degrees or more with a soft, spongy base, develops with chronic hypoxia from conditions such as COPD, cystic fibrosis and congenital heart disease. Spoon nails are associated with iron-deficiency anemia, splinter hemorrhages with infective endocarditis or trauma, and Beau's lines with a past acute illness.",
  "type": "mcq",
  "options": [
   "Thin, dark red splinter hemorrhages under the nails",
   "Spoon-shaped, concave nails (koilonychia)",
   "Clubbing, with a nailbed angle of 180 degrees or more",
   "Transverse grooves across the nail plates (Beau's lines)"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q014",
  "exam": 5,
  "src": 490,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "When caring for the body of a client who just died, which tasks can be delegated to the unlicensed assistive personnel (UAP)? (Select all that apply.)",
  "rationale": "Postmortem care tasks such as positioning, cleansing, placing religious items, attaching identification tags and following the family's cultural practices can be delegated to a UAP with direction. Pronouncing and documenting the time of death is the responsibility of a licensed provider or RN per agency policy, and requests for organ donation are made by trained organ procurement staff.",
  "type": "sata",
  "options": [
   "Ask the family about consent for organ donation.",
   "Place personal religious artifacts on the body.",
   "Attach identifying name tags to the body.",
   "Determine the time of death for documentation.",
   "Follow cultural beliefs in preparing the body."
  ],
  "correct": [
   1,
   2,
   4
  ]
 },
 {
  "id": "hesi5q015",
  "exam": 5,
  "src": 15,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A 35-year-old female client has just been admitted to the post-anesthesia care unit following a partial (subtotal) thyroidectomy. Which statement reflects the nurse's accurate understanding of the expected outcome for this client following this surgery?",
  "rationale": "After a subtotal thyroidectomy, the remaining thyroid tissue usually produces enough hormone to maintain a euthyroid state, so lifelong replacement is often unnecessary, although levels are monitored. Thyroid tissue does not regenerate to normal size, and the remaining gland is not routinely removed later. There is no dietary restriction of seafood or iodine after a partial thyroidectomy.",
  "type": "mcq",
  "options": [
   "The thyroid will regenerate to a normal size within a few years.",
   "Supplemental hormonal therapy will probably be unnecessary.",
   "The client will be restricted from eating seafood.",
   "The remainder of the thyroid will be removed at a later date."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q016",
  "exam": 5,
  "src": 773,
  "topic": "Respiratory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "When performing postural drainage for a client with chronic obstructive pulmonary disease (COPD), which approach should the nurse use?",
  "rationale": "Postural drainage uses gravity to drain secretions from specific lung segments, so the client is placed in several positions, commonly about five, each held for 5 to 15 minutes depending on tolerance; explaining this in advance promotes cooperation. It is performed before meals or at least 1 to 2 hours after eating to prevent vomiting and aspiration, 30 seconds is too short, and one position cannot drain all lobes.",
  "type": "mcq",
  "options": [
   "Use only the prone position to drain all lobes of the lungs.",
   "Explain that the client may be placed in several positions, often five.",
   "Perform the postural drainage immediately after each meal.",
   "Keep the client in each position for only about 30 seconds."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q017",
  "exam": 5,
  "src": 708,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse reviews the laboratory findings of a client with an open fracture of the tibia. The white blood cell (WBC) count and erythrocyte sedimentation rate (ESR) are elevated. Before reporting this information to the healthcare provider, which assessment should the nurse obtain?",
  "rationale": "An elevated WBC count and ESR in a client with an open fracture suggest infection, possibly osteomyelitis, so the nurse inspects the wound for redness, swelling, warmth, purulent drainage and odor to provide complete data with the report. Skin elasticity reflects hydration, pedal pulses reflect circulation and bleeding is a separate concern; none relates to the laboratory findings.",
  "type": "mcq",
  "options": [
   "Appearance of the wound",
   "Bilateral pedal pulse force",
   "Degree of skin elasticity",
   "Onset of any bleeding"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q018",
  "exam": 5,
  "src": 590,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is measuring the blood pressure of a female client who reports feeling dizzy. The cuff is inflated to 140 mm Hg, and a Korotkoff sound is heard as soon as the cuff begins to deflate. Which intervention should the nurse implement next?",
  "rationale": "Hearing a sound immediately on deflation means the cuff was not inflated above the systolic pressure, so the true systolic value is unknown; the nurse deflates the cuff, waits about 1 minute for venous congestion to resolve, palpates the radial pulse to estimate the systolic pressure, and then inflates 20 to 30 mm Hg above that point. Reinflating immediately gives an inaccurate reading, 140 is not the true systolic pressure, and rapid deflation causes errors.",
  "type": "mcq",
  "options": [
   "Record the systolic pressure as 140 mm Hg in the medical record.",
   "Deflate the cuff more rapidly to reduce the client's discomfort.",
   "Reinflate the cuff to 160 mm Hg right away without deflating it fully.",
   "Wait 1 minute and palpate the systolic pressure before auscultating again."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q019",
  "exam": 5,
  "src": 391,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "An infant is receiving gavage feedings via nasogastric tube. At the beginning of the feeding, the infant's heart rate drops to 80 beats/minute. Which action should the nurse take?",
  "rationale": "Bradycardia during a gavage feeding is usually a vagal response to gastric distention or tube stimulation, so the nurse slows or pauses the feeding and monitors the infant's heart rate and color, stopping completely if bradycardia persists. Continuing at the same rate risks worsening bradycardia, reinsertion causes further vagal stimulation, and atropine is not a first-line response to a transient vagal episode.",
  "type": "mcq",
  "options": [
   "Remove the nasogastric tube and reinsert it.",
   "Slow the feeding and monitor the infant's response.",
   "Administer atropine IV as a standing prescription.",
   "Continue the feeding at the same rate as prescribed."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q020",
  "exam": 5,
  "src": 310,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Physiological Adaptation",
  "stem": "A young adult client is admitted to the emergency department following a motor vehicle collision in which the client's head hit the dashboard. Admission assessment: blood pressure 85/45 mm Hg, temperature 98.6° F, pulse 124 beats/minute, and respirations 22 breaths/minute. The nurse formulates the first portion of a nursing diagnosis as “Risk for injury.” Which term best expresses the “related to” portion of the nursing diagnosis?",
  "rationale": "Hypotension with tachycardia indicates hypovolemic shock, likely from internal bleeding, and this is the most immediate threat to the client. Increased intracranial pressure produces hypertension with bradycardia (Cushing's triad), the opposite of these findings. Infection is not suggested by the data, and “head injury” is a medical diagnosis that does not explain the current vital signs.",
  "type": "mcq",
  "options": [
   "Head injury",
   "Shock",
   "Infection",
   "Increased intracranial pressure"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q021",
  "exam": 5,
  "src": 174,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with myasthenia gravis (MG) is receiving immunosuppressive therapy. Recent laboratory results show that the client's serum magnesium level has decreased below the normal range. In addition to contacting the healthcare provider, which nursing action is most important?",
  "rationale": "Hypomagnesemia affects myocardial depolarization and can cause lethal dysrhythmias such as torsades de pointes, so the cardiac rhythm is assessed as a safety priority. Visual problems such as ptosis and diplopia are common manifestations of MG, and the hemoglobin and joint pain may be relevant to other problems, but none reflects the immediate risk of low magnesium.",
  "type": "mcq",
  "options": [
   "Note the most recent hemoglobin level.",
   "Observe the rhythm on the telemetry monitor.",
   "Assess for hand and joint pain.",
   "Check for visual difficulties."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q022",
  "exam": 5,
  "src": 340,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Basic Care & Comfort",
  "stem": "After reviewing the Braden Scale findings of residents at a long-term care facility, the charge nurse should tell the unlicensed assistive personnel (UAP) to prioritize skin care for which client?",
  "rationale": "Constant moisture macerates the skin and greatly increases the risk of breakdown, and frequent skin care to keep the skin clean and dry is a task the UAP can perform. Inability to communicate needs, immobility and poor nutrition are also Braden risk factors, but the client already experiencing continual moisture has the most immediate threat to skin integrity.",
  "type": "mcq",
  "options": [
   "A poorly nourished client who requires a liquid supplement",
   "A woman with osteoporosis who is unable to bear weight",
   "An older man whose sheets are damp each time he is turned",
   "An older adult who is unable to communicate elimination needs"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q023",
  "exam": 5,
  "src": 723,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nursing staff on a medical unit includes a registered nurse (RN), a practical nurse (PN), and an unlicensed assistive personnel (UAP). Which task should the charge nurse assign to the RN?",
  "rationale": "Supervising and evaluating a new graduate nurse performing an admission assessment requires RN-level knowledge and accountability. Vital signs on stable clients and ambulation can be done by the UAP, and scheduled oral medications for stable clients can be given by the PN.",
  "type": "mcq",
  "options": [
   "Ambulate a postoperative client in the hallway.",
   "Obtain vital signs for clients who are stable.",
   "Supervise a newly hired graduate nurse during an admission assessment.",
   "Administer scheduled oral medications to stable clients."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q024",
  "exam": 5,
  "src": 439,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "During a prenatal examination at 26 weeks' gestation, a client reports occasional dizziness when lying flat on her back. Which intervention is best for the nurse to recommend to this client?",
  "rationale": "Dizziness when supine in the second half of pregnancy is caused by supine hypotensive syndrome, in which the uterus compresses the inferior vena cava and reduces venous return; side-lying, particularly on the left, relieves the compression. Lying flat with the legs elevated still compresses the vena cava, rising quickly worsens orthostatic dizziness, and elevating the head does not relieve vena caval compression.",
  "type": "mcq",
  "options": [
   "Rise quickly from a lying position to restore blood flow.",
   "Lie on the left or right side when sleeping or resting.",
   "Sleep with the head of the bed elevated on three pillows.",
   "Lie flat on the back with the legs elevated on pillows."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q025",
  "exam": 5,
  "src": 23,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A 154-pound client with diabetic ketoacidosis is receiving an IV of normal saline 100 mL with regular insulin 100 units. The healthcare provider prescribes a rate of 0.1 units/kg/hour. To deliver the correct dosage, how many mL/hour should the nurse set the infusion pump to infuse? (Enter numeric value only.)",
  "rationale": "Convert weight: 154 lb ÷ 2.2 = 70 kg. Calculate the dose: 0.1 units/kg/hour × 70 kg = 7 units/hour. The concentration is 100 units in 100 mL, or 1 unit/mL, so D/H × Q = 7 units ÷ 100 units × 100 mL = 7 mL/hour.",
  "type": "fill",
  "answer": 7,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi5q026",
  "exam": 5,
  "src": 351,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An adolescent receives a prescription for sumatriptan succinate 4 mg subcutaneously for a migraine headache. Using a vial labeled 6 mg/0.5 mL, how many mL should the nurse administer? (Enter numeric value only. If rounding is required, round to the nearest hundredth.)",
  "rationale": "Using D/H × Q: 4 mg ÷ 6 mg × 0.5 mL = 2 ÷ 6 = 0.333 mL, which rounds to 0.33 mL.",
  "type": "fill",
  "answer": 0.33,
  "unit": "mL",
  "tolerance": 0.005
 },
 {
  "id": "hesi5q027",
  "exam": 5,
  "src": 261,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A middle-aged woman diagnosed with Graves' disease asks the nurse about this condition. Which information about the pathology of hyperthyroidism should the nurse include in the teaching plan? (Select all that apply.)",
  "rationale": "In Graves' disease, antibodies stimulate the TSH receptors on the thyroid, causing excess production of T3 and T4, and exophthalmos from inflammation behind the eyes is a characteristic sign. Hyperthyroidism increases metabolism and causes weight loss despite increased appetite. Levothyroxine is thyroid hormone replacement for hypothyroidism; Graves' disease is treated with antithyroid drugs, radioactive iodine or surgery.",
  "type": "sata",
  "options": [
   "Graves' disease is an autoimmune condition that affects thyroid-stimulating hormone receptors.",
   "Weight gain is a common complaint in hyperthyroidism.",
   "T3 and T4 hormone levels are increased.",
   "Large, protruding eyeballs are a sign of hyperthyroid function.",
   "Early treatment includes levothyroxine."
  ],
  "correct": [
   0,
   2,
   3
  ]
 },
 {
  "id": "hesi5q028",
  "exam": 5,
  "src": 566,
  "topic": "Respiratory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse assesses a female client with obstructive sleep apnea syndrome (OSAS) who is 5 feet (152 cm) tall and weighs 155 pounds (70 kg). Her 24-hour diet history includes no breakfast; a cheeseburger and fries for lunch; lasagna, chocolate ice cream, and a cola for dinner; and 2 glasses of wine before bed, for a total of 3,500 calories. Which instructions should the nurse provide? (Select all that apply.)",
  "rationale": "Alcohol relaxes the upper-airway muscles and worsens obstructive sleep apnea, and excess weight is a major contributor to airway obstruction, so avoiding bedtime alcohol and losing weight are key instructions. Her BMI of about 30 indicates obesity, so maintaining a 3,500-calorie intake or increasing BMI is inappropriate, and dairy products are not specifically linked to sleep apnea.",
  "type": "sata",
  "options": [
   "Avoid using alcohol as a sleep aid at bedtime.",
   "Start a weight-loss program.",
   "Maintain the current caloric intake.",
   "Set a goal of increasing body mass index (BMI).",
   "Reduce the intake of dairy products."
  ],
  "correct": [
   0,
   1
  ]
 },
 {
  "id": "hesi5q029",
  "exam": 5,
  "src": 509,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Oxygen at 5 L/min per nasal cannula is being administered to a 10-year-old child with pneumonia. When planning care for this child, which principle of oxygen administration should the nurse consider?",
  "rationale": "Oxygen is a medication, and high concentrations for prolonged periods can cause oxygen toxicity and lung injury, so the lowest concentration that maintains adequate saturation is used and weaned as tolerated. Sedatives depress respiration and are avoided, the rate is adjusted to oximetry rather than routinely increased at night, and humidification prevents mucosal drying but does not reduce oxygen toxicity.",
  "type": "mcq",
  "options": [
   "Oxygen is less toxic when it is humidified with a hydration source.",
   "Taking a sedative at bedtime slows respiratory rate, which reduces oxygen need.",
   "Avoid administering oxygen at high levels for extended periods.",
   "Increase the oxygen rate during sleep to compensate for slower breathing."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q030",
  "exam": 5,
  "src": 797,
  "topic": "Maternity & Newborn",
  "clientNeed": "Basic Care & Comfort",
  "stem": "Which instruction should the nurse provide to a pregnant client who is complaining of heartburn?",
  "rationale": "Progesterone relaxes the lower esophageal sphincter and the enlarging uterus increases abdominal pressure, so small, frequent meals reduce gastric distention and reflux. Lying down after meals worsens reflux, large volumes of fluid with meals distend the stomach, and sodium bicarbonate is avoided in pregnancy because of its sodium content and risk of metabolic alkalosis.",
  "type": "mcq",
  "options": [
   "Drink a large glass of water with each meal.",
   "Eat small meals throughout the day to avoid a full stomach.",
   "Lie down for 30 minutes after each meal to aid digestion.",
   "Take sodium bicarbonate to neutralize stomach acid."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q031",
  "exam": 5,
  "src": 4,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A 6-year-old who has asthma is demonstrating a prolonged expiratory phase and wheezing and has a peak expiratory flow rate (PEFR) that is 35% of personal best. Based on these findings, which action should the nurse implement first?",
  "rationale": "A PEFR below 50% of personal best is in the red zone and indicates severe airway narrowing, so a short-acting bronchodilator must be given immediately to open the airway. Notifying the healthcare provider is appropriate but should follow the immediate intervention. Coughing and deep breathing will not relieve bronchospasm, and identifying the trigger is useful for future prevention but is not a priority during an acute attack.",
  "type": "mcq",
  "options": [
   "Report the findings to the healthcare provider.",
   "Administer a prescribed bronchodilator.",
   "Encourage the child to cough and deep breathe.",
   "Determine what trigger precipitated this attack."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q032",
  "exam": 5,
  "src": 355,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An adult client comes to the clinic concerned about a lump that “just popped up on my neck about a week ago.” On examination, the nurse palpates a large, nontender, hard left supraclavicular lymph node with no overlying tissue inflammation. What do these findings suggest?",
  "rationale": "A lymph node that is hard, nontender, enlarged and fixed, especially in the left supraclavicular area (Virchow's node), is suspicious for malignancy, including metastasis from abdominal or thoracic cancers, and requires prompt evaluation. Nodes enlarged by bacterial or viral infection are usually tender, soft and mobile, and lymphangitis presents with red streaks and tenderness along lymphatic channels.",
  "type": "mcq",
  "options": [
   "Malignancy",
   "Bacterial infection",
   "Lymphangitis",
   "Viral infection"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q033",
  "exam": 5,
  "src": 683,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is triaging victims of a tornado at an emergency shelter. An adult woman who has been wandering and crying comes to the nurse. Which action should the nurse take?",
  "rationale": "In disaster triage the goal is the greatest good for the greatest number, so the nurse's skills are directed to victims with life-threatening injuries, while an ambulatory, uninjured person in emotional distress can be supported by an unlicensed assistant. A physical workup and diagnostic tests are not indicated, and sending her off alone dismisses her distress.",
  "type": "mcq",
  "options": [
   "Send the woman alone to the shelter's food center to get water and food.",
   "Transport the woman for laboratory tests and an electrocardiogram.",
   "Check the woman's temperature, blood glucose, and urine output.",
   "Delegate the care of the crying woman to an unlicensed assistant."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q034",
  "exam": 5,
  "src": 497,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "In monitoring tissue perfusion in a client following an above-the-knee amputation (AKA), which action should the nurse include in the plan of care?",
  "rationale": "After an above-the-knee amputation, the femoral pulse, the closest pulse proximal to the surgical site, along with skin color and temperature, reflects arterial blood flow to the residual limb. Skin elasticity reflects hydration, swelling indicates edema, and drainage is assessed for bleeding or infection; none directly measures tissue perfusion.",
  "type": "mcq",
  "options": [
   "Note the amount and color of the wound drainage.",
   "Observe for swelling around the residual limb.",
   "Evaluate the closest proximal pulse.",
   "Assess the skin elasticity of the residual limb."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q035",
  "exam": 5,
  "src": 822,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While changing a client's chest tube dressing, the nurse feels a crackling sensation when gentle pressure is applied to the skin at the insertion site. What is the best action for the nurse to take?",
  "rationale": "Crackling under the skin (crepitus) indicates subcutaneous emphysema from air leaking into the tissue, and measuring and marking the area allows the nurse to monitor whether it is spreading, which would suggest a growing leak that must be reported. A pressure dressing does not address the leak, and crepitus is not an allergic reaction.",
  "type": "mcq",
  "options": [
   "Measure and mark the area of swelling and crackling.",
   "Administer an oral antihistamine per PRN protocol.",
   "Assess the client for allergies to topical cleansing agents.",
   "Apply a pressure dressing around the insertion site."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q036",
  "exam": 5,
  "src": 31,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A client admitted to the psychiatric unit with major depression wants to sleep during the day, refuses to bathe, and refuses to eat. Which nursing intervention should the nurse implement first?",
  "rationale": "Clients with major depression have low energy and impaired decision-making, so a structured daily routine with scheduled times for hygiene, meals and activity reduces the burden of choices and promotes self-care. Allowing daytime sleep reinforces withdrawal and disrupts the sleep cycle. Exploring the reasons for depression is not the first step for a severely withdrawn client, and making meals contingent on bathing is coercive and could compromise nutrition.",
  "type": "mcq",
  "options": [
   "Allow the client to sleep until ready to get up.",
   "Establish a structured routine for the client to follow.",
   "Insist that the client shower before eating breakfast.",
   "Explore the reasons for the client's feelings of sadness."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q037",
  "exam": 5,
  "src": 688,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse needs to add a medication to a liter of 5% dextrose in water (D5W) that is already infusing into a client. At which location should the nurse inject the medication?",
  "rationale": "A medication intended to be diluted in the entire infusion is injected through the bag's self-sealing medication port, with the flow clamped, and the bag is then gently inverted to mix it before the infusion is resumed, so the client does not receive a concentrated bolus. Injecting into a tubing port delivers the drug as a bolus rather than diluting it in the bag, and the spike port is not designed for injection.",
  "type": "mcq",
  "options": [
   "The injection port on the tubing closest to the client's IV site",
   "The Y-site injection port in the middle of the IV tubing",
   "The spike port where the tubing enters the IV bag",
   "The medication port on the IV bag, with the tubing clamped during injection"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q038",
  "exam": 5,
  "src": 214,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A female client with rheumatoid arthritis (RA) comes to the clinic complaining of joint pain and swelling. The client has been taking prednisone and ibuprofen every day. To assist the client with self-management of her pain, which information should the nurse obtain?",
  "rationale": "Regular therapeutic exercise such as range of motion and low-impact activity maintains joint mobility and reduces pain and stiffness, so assessing her routine identifies a non-pharmacologic strategy she can use to self-manage pain. Bruising, fatigue and GI discomfort are adverse effects of prednisone and ibuprofen that should be monitored, but they do not address self-management of pain, and protein intake is unrelated to the question.",
  "type": "mcq",
  "options": [
   "Existence of gastrointestinal discomfort",
   "Presence of bruising, weakness, or fatigue",
   "Therapeutic exercise included in her daily routine",
   "Average amount of protein eaten daily"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q039",
  "exam": 5,
  "src": 614,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is caring for a client who is experiencing a tonic-clonic seizure. Which actions should the nurse implement? (Select all that apply.)",
  "rationale": "During a seizure the nurse protects the client from injury by easing him or her to the floor, loosens clothing to ease breathing, turns the client to the side when possible, and times the seizure, since a seizure lasting more than 5 minutes is status epilepticus. Objects must never be placed in the mouth because they can break teeth or obstruct the airway, and restraining the client can cause fractures and soft-tissue injury.",
  "type": "sata",
  "options": [
   "Note the duration of the seizure.",
   "Restrain the client's arms and legs.",
   "Ease the client to the floor.",
   "Loosen restrictive clothing.",
   "Insert a padded tongue blade between the teeth."
  ],
  "correct": [
   0,
   2,
   3
  ]
 },
 {
  "id": "hesi5q040",
  "exam": 5,
  "src": 515,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The charge nurse in a critical care unit is reviewing clients' conditions to determine who is stable enough to be transferred. Which client status report indicates readiness for transfer from the critical care unit to a medical unit?",
  "rationale": "A client with chronic liver failure whose hemoglobin and bilirubin are mildly abnormal but stable has chronic findings that can be managed on a medical unit. ARDS requiring high oxygen and PEEP, new ventricular dysrhythmias after an MI and DKA requiring a titrated insulin infusion are unstable conditions that require continued critical care monitoring.",
  "type": "mcq",
  "options": [
   "ARDS on 60% FiO2 with PEEP of 10 cm H2O",
   "12 hours after myocardial infarction with new runs of ventricular tachycardia",
   "Diabetic ketoacidosis on an insulin infusion with a glucose of 400 mg/dL",
   "Chronic liver failure with a hemoglobin of 10.1 g/dL and slight bilirubin elevation"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q041",
  "exam": 5,
  "src": 540,
  "topic": "Renal & GU",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes oxycodone/aspirin 1 tablet PO every 4 hours as needed for pain for a client with polycystic kidney disease. Before administering this medication, which component of the prescription should the nurse question?",
  "rationale": "Aspirin and other NSAIDs are avoided in polycystic kidney disease because they reduce renal blood flow, can worsen kidney function and increase the risk of bleeding into the cysts. The dose, oral route and every-4-hour PRN frequency are appropriate, and concern about addiction should not prevent adequate pain management.",
  "type": "mcq",
  "options": [
   "Dose",
   "Route",
   "Risk for addiction",
   "Aspirin content"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q042",
  "exam": 5,
  "src": 527,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Safety & Infection Control",
  "stem": "The fire alarm goes off while the charge nurse is receiving the shift report. Which action should the charge nurse implement first?",
  "rationale": "When the location of a fire is unknown, the first step is to contain clients and visitors in their rooms with doors closed, which protects them from smoke and keeps hallways clear while the source is identified. Evacuation is ordered only when the fire threatens the unit, the alarm system has already notified the fire department, and oxygen valves are shut off only by designated staff after ensuring clients will not be harmed.",
  "type": "mcq",
  "options": [
   "Tell the staff to keep all clients and visitors in the client rooms with the doors closed.",
   "Direct the staff to evacuate all clients to the nearest stairwell.",
   "Call the fire department to report the location of the fire.",
   "Turn off the oxygen supply valves for all clients on the unit."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q043",
  "exam": 5,
  "src": 777,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "When providing diet teaching for a client with cholecystitis, which type of food choices should the nurse recommend?",
  "rationale": "Dietary fat stimulates release of cholecystokinin, which causes the gallbladder to contract and can trigger pain and obstruction when stones are present, so a low-fat diet reduces attacks. High-protein, low-sodium and high-carbohydrate diets do not specifically reduce gallbladder stimulation.",
  "type": "mcq",
  "options": [
   "High protein",
   "High carbohydrate",
   "Low fat",
   "Low sodium"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q044",
  "exam": 5,
  "src": 669,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is presenting information about fetal development to a group of expectant parents. When discussing cephalocaudal fetal development, which information should the nurse give the parents?",
  "rationale": "Cephalocaudal means head to tail: the head and brain develop first and most rapidly, followed by the trunk and lower body. Development does follow a predictable sequence, but that general statement does not define cephalocaudal growth. Several organ systems develop simultaneously, and organ formation is not directed by the brain.",
  "type": "mcq",
  "options": [
   "Development progresses from the head to the rump.",
   "Organ formation is directed by brain development.",
   "Growth normally occurs within one organ at a time.",
   "A set order in fetal development is expected."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q045",
  "exam": 5,
  "src": 559,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse administers an oral antiviral to a client with shingles. Which finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "Elevated liver enzymes indicate possible hepatotoxicity, a serious adverse effect that may require stopping or adjusting the antiviral. A mildly decreased WBC count can occur with viral infections, itching and aches are common with shingles, and GI upset is a common, less serious side effect of oral antivirals.",
  "type": "mcq",
  "options": [
   "Decreased white blood cell count",
   "Vomiting and diarrhea",
   "Pruritus and muscle aches",
   "Elevated liver function tests"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q046",
  "exam": 5,
  "src": 124,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with a history of dementia has become increasingly confused at night and is picking at an abdominal surgical dressing and the tape securing the intravenous (IV) line. The abdominal dressing is no longer occlusive, and the IV insertion site is pink. Which intervention should the nurse implement?",
  "rationale": "A dressing that is no longer occlusive exposes the incision to contamination, so the nurse should redress it using aseptic technique and check that the IV has not been dislodged. A pink IV site does not require restarting the line. Leaving the lights on all night disrupts sleep and can worsen confusion, and restraints are a last resort after less restrictive measures fail.",
  "type": "mcq",
  "options": [
   "Redress the abdominal incision.",
   "Leave the lights on in the room at night.",
   "Replace the IV with a smaller-gauge catheter.",
   "Apply soft bilateral wrist restraints."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q047",
  "exam": 5,
  "src": 281,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A nurse plans to call the healthcare provider to report an 0600 serum potassium level of 2 mEq/L, but the charge nurse says the provider does not like early morning calls and will make rounds later in the morning. Which action should the nurse take?",
  "rationale": "A potassium level of 2 mEq/L is critically low and can cause life-threatening dysrhythmias and respiratory muscle weakness, so the nurse must report it immediately regardless of the provider's preferences. Waiting for rounds or simply rechecking the value delays treatment, and the nurse who receives a critical value remains accountable for reporting it and cannot transfer that responsibility to the charge nurse.",
  "type": "mcq",
  "options": [
   "Document the value and recheck the potassium level in 4 hours.",
   "Ask the charge nurse to decide when the provider should be called.",
   "Report the potassium level to the provider during morning rounds.",
   "Contact the healthcare provider immediately to report the laboratory value."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q048",
  "exam": 5,
  "src": 644,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is planning a class about blood glucose monitoring for a group of clients with diabetes mellitus. In teaching the class as a whole, the nurse should emphasize the need to check glucose levels in which situation?",
  "rationale": "Illness and stress raise counterregulatory hormones and blood glucose, increasing the risk of DKA or HHS even when the client eats less, so all clients with diabetes should check glucose more frequently, often every 2 to 4 hours, during illness. Monitoring frequency otherwise varies by regimen, but limiting checks to once a day, once a week or only when symptomatic is inadequate.",
  "type": "mcq",
  "options": [
   "Only when feeling shaky",
   "During acute illness",
   "Once each week",
   "Only before breakfast"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q049",
  "exam": 5,
  "src": 109,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client recently diagnosed with type 2 diabetes mellitus (DM) asks the nurse how this type of diabetes leads to high blood sugar. Which pathophysiologic mechanism should the nurse explain?",
  "rationale": "Type 2 diabetes is characterized primarily by insulin resistance, in which cells respond poorly to insulin, combined with a progressive decline in beta-cell insulin secretion. Autoimmune destruction of beta cells describes type 1 diabetes. The liver in type 2 DM inappropriately releases glucose but does not stop storing glycogen entirely, and renal glucose reabsorption is not the mechanism that causes hyperglycemia.",
  "type": "mcq",
  "options": [
   "The kidneys reabsorb excess glucose from the filtered urine.",
   "The pancreatic beta cells are destroyed by an autoimmune process.",
   "The body cells develop resistance to the action of insulin.",
   "The liver stops storing glucose as glycogen after meals."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q050",
  "exam": 5,
  "src": 388,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An increasing number of older adults are electing to undergo a new surgical procedure that cures glaucoma. Which effect is the nurse likely to note as a result of this increase in glaucoma surgeries?",
  "rationale": "Prevalence is the total number of existing cases at a given time, so a treatment that cures existing cases reduces prevalence. Incidence is the number of new cases that develop, which a cure does not affect because it does not prevent the disease from occurring. Neither prevalence nor incidence would increase as a result of a curative surgery.",
  "type": "mcq",
  "options": [
   "Increased incidence of glaucoma in the population",
   "Decreased incidence of glaucoma in the population",
   "Increased prevalence of glaucoma in the population",
   "Decreased prevalence of glaucoma in the population"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q051",
  "exam": 5,
  "src": 359,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An adult client with schizophrenia began treatment with the antipsychotic risperidone three days ago. The client also has prescriptions for trazodone PRN for sleep and clonazepam PRN for severe anxiety. When the client reports difficulty swallowing, which action should the nurse take?",
  "rationale": "Difficulty swallowing early in antipsychotic therapy suggests an acute dystonic reaction, an extrapyramidal side effect that can progress to laryngeal spasm, and it is treated with an anticholinergic such as benztropine or diphenhydramine. Sleep duration is unrelated, clonazepam does not treat dystonia, and observing the swallow does not address the cause.",
  "type": "mcq",
  "options": [
   "Administer the PRN prescription for severe anxiety.",
   "Obtain a prescription for an anticholinergic medication.",
   "Watch the thyroid cartilage move as the client swallows.",
   "Determine how many hours the client slept last night."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q052",
  "exam": 5,
  "src": 828,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "While removing a male postoperative client's staples, the nurse observes that his eyes are closed and his face and hands are clenched. He states, “I just hate having staples removed.” After acknowledging the client's anxiety, which action should the nurse implement?",
  "rationale": "Distraction is an effective strategy for reducing anxiety and discomfort during a brief, uncomfortable procedure. Encouraging him to keep discussing his anxiety or giving a detailed description focuses attention on the procedure and can increase distress, and calling it simple minimizes his feelings.",
  "type": "mcq",
  "options": [
   "Attempt to distract the client with general conversation.",
   "Explain the procedure in detail while removing the staples.",
   "Encourage the client to continue to verbalize his anxiety.",
   "Reassure the client that this is a simple nursing procedure."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q053",
  "exam": 5,
  "src": 332,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "After changing to a new brand of laundry detergent, an adult male reports a fine, itchy rash. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Wheezing indicates bronchospasm and a systemic allergic reaction that may progress to anaphylaxis and airway compromise, requiring immediate intervention. A spreading rash, nighttime itching and redness where clothing contacts the skin are expected findings of contact dermatitis that are treated but do not threaten the airway.",
  "type": "mcq",
  "options": [
   "Bilateral wheezing",
   "Redness along the collar line",
   "Itching that worsens at night",
   "Rash spreading to the trunk"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q054",
  "exam": 5,
  "src": 756,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with a traumatic brain injury (TBI) who had a craniotomy for increased intracranial pressure (ICP) is assessed with the Glasgow Coma Scale (GCS) every two hours. For the past 8 hours, the client's GCS score has been 14. What does this finding indicate about the client?",
  "rationale": "A GCS score ranges from 3 to 15, and a consistent score of 14 indicates near-normal neurologic function that has remained stable, without the declining level of consciousness that signals rising ICP. A score of 8 or less indicates severe injury and the need to protect the airway, and deterioration or coma would be shown by a falling or very low score.",
  "type": "mcq",
  "options": [
   "Neurologically stable without indications of increased ICP",
   "Severe brain injury requiring immediate intubation",
   "Coma with minimal response to painful stimuli",
   "Steadily deteriorating neurologic status with rising ICP"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q055",
  "exam": 5,
  "src": 389,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "An infant born to a mother who uses heroin is admitted to the neonatal care unit. Which behaviors can the nurse expect the infant to exhibit?",
  "rationale": "Neonatal abstinence syndrome from opioid withdrawal causes CNS hyperirritability, with a high-pitched cry, tremors, hypertonia, poor sleep, sneezing and feeding difficulties. Lethargy suggests sepsis or hypoglycemia, and facial abnormalities with microcephaly are characteristic of fetal alcohol syndrome. Growth restriction can occur with heroin exposure, but it is a finding at birth rather than the withdrawal behavior the nurse observes.",
  "type": "mcq",
  "options": [
   "Irritability and a high-pitched cry",
   "Low birth weight and growth restriction",
   "Facial abnormalities and microcephaly",
   "Lethargy and a poor suck"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q056",
  "exam": 5,
  "src": 732,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "To obtain an estimate of a client's systolic blood pressure, which action should the nurse take first?",
  "rationale": "To estimate systolic pressure, the nurse first locates and palpates the brachial (or radial) pulse, then inflates the cuff until the pulse disappears; that point estimates the systolic pressure and helps avoid missing an auscultatory gap. Inflating the cuff, positioning the stethoscope and releasing the valve follow locating the pulse.",
  "type": "mcq",
  "options": [
   "Release the blood pressure cuff valve.",
   "Pump up the blood pressure cuff.",
   "Position the stethoscope diaphragm.",
   "Palpate the client's brachial pulse."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q057",
  "exam": 5,
  "src": 444,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "During a left femoral artery aortogram, the healthcare provider inserts an arterial sheath and begins an infusion of a thrombolytic agent through the sheath to dissolve an arterial occlusion. Which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "Keeping the affected leg straight prevents bending or dislodging the sheath and bleeding, observing for hematoma detects bleeding at the arterial site, and marking drainage allows the nurse to evaluate whether bleeding is increasing, which is critical during thrombolytic therapy. The head of the bed is limited to about 30 degrees to avoid hip flexion. Warm packs promote vasodilation and bleeding, and sheath removal is performed by trained personnel only after coagulation status allows.",
  "type": "sata",
  "options": [
   "Observe the insertion site for a hematoma.",
   "Elevate the head of the bed to 60 degrees.",
   "Apply a warm pack to the left groin for comfort.",
   "Instruct the client to keep the left leg straight.",
   "Circle the first noted drainage on the dressing.",
   "Remove the sheath as soon as the infusion ends."
  ],
  "correct": [
   0,
   3,
   4
  ]
 },
 {
  "id": "hesi5q058",
  "exam": 5,
  "src": 450,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "During an annual physical examination, an older woman's fasting blood glucose (FBG) is 140 mg/dL. Which additional finding obtained at a follow-up visit 2 weeks later is most indicative that the client has diabetes mellitus (DM)?",
  "rationale": "Diabetes is diagnosed by a fasting glucose of 126 mg/dL or higher on two separate occasions, so a repeat value of 132 mg/dL confirms the diagnosis. A random glucose must be 200 mg/dL or higher with classic symptoms. An HbA1c of 6.0% and a 2-hour OGTT of 160 mg/dL fall in the prediabetes ranges (5.7% to 6.4% and 140 to 199 mg/dL).",
  "type": "mcq",
  "options": [
   "Repeat fasting blood glucose of 132 mg/dL",
   "Two-hour oral glucose tolerance test result of 160 mg/dL",
   "Random blood glucose of 180 mg/dL without symptoms",
   "Glycosylated hemoglobin (HbA1c) of 6.0%"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q059",
  "exam": 5,
  "src": 282,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A nurse receives a shift report about a male client with obsessive-compulsive disorder (OCD). During morning rounds, the nurse finds the client repeatedly washing the top of the same table. Which intervention should the nurse implement?",
  "rationale": "Compulsive rituals relieve anxiety, so interrupting them abruptly increases anxiety; early in treatment the nurse allows time for the ritual and then redirects the client to structured activities, gradually limiting the time spent. Demanding that he stop or removing the supplies blocks the ritual and escalates anxiety, and asking “why” is nontherapeutic because the client usually cannot explain the compulsion.",
  "type": "mcq",
  "options": [
   "Remove the cleaning supplies from the client's room.",
   "Allow time for the behavior, then redirect the client to other activities.",
   "Ask the client why he feels he needs to wash the table.",
   "Tell the client firmly that he must stop cleaning the table now."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q060",
  "exam": 5,
  "src": 189,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client's telemetry monitor shows ventricular fibrillation (VF). After one counter-shock is delivered, the nurse resumes chest compressions. After another minute of compressions, the client's rhythm converts to supraventricular tachycardia (SVT) on the monitor. At this point, which intervention is the priority for the nurse?",
  "rationale": "Once the rhythm has converted from VF to a narrow-complex SVT, the shockable rhythm has resolved, and adenosine given by rapid IV push over 1 to 2 seconds followed by a saline flush is the drug used to convert SVT. Transcutaneous pacing is for symptomatic bradycardia. Epinephrine and repeated unsynchronized shocks are used for pulseless VF, which is no longer present.",
  "type": "mcq",
  "options": [
   "Give an IV dose of adenosine rapidly over 1 to 2 seconds.",
   "Administer IV epinephrine per ACLS protocol.",
   "Deliver another defibrillator shock.",
   "Prepare for transcutaneous pacing."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q061",
  "exam": 5,
  "src": 12,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "A 16-year-old male is admitted to the pediatric intensive care unit after being involved in a house fire. He has full-thickness burns to his lower torso and extremities. Before a dressing change to his legs, which intervention is most important for the nurse to implement?",
  "rationale": "Loss of the skin barrier makes infection the leading cause of death after the initial burn period, so strict aseptic technique during dressing changes is essential. Tap water is not sterile and can introduce organisms such as Pseudomonas. Debridement requires sterile instruments, not clean scissors, and petroleum jelly is not a prescribed burn dressing; topical antimicrobials such as silver sulfadiazine are applied with sterile technique.",
  "type": "mcq",
  "options": [
   "Apply a thick layer of petroleum jelly to the wounds.",
   "Remove all loose eschar with clean scissors.",
   "Maintain strict aseptic technique.",
   "Soak the old dressings in warm tap water."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q062",
  "exam": 5,
  "src": 92,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client was admitted to the cardiac observation unit 2 hours ago with chest pain. On admission, the EKG showed bradycardia and ST depression but no ventricular ectopy. The client suddenly reports a sharp increase in pain, saying, “I feel like an elephant just stepped on my chest.” The EKG now shows Q waves and ST-segment elevation in the anterior leads. Which intervention should the nurse perform?",
  "rationale": "New ST elevation and Q waves with crushing pain indicate an evolving anterior myocardial infarction, so the nurse treats pain and supports oxygenation to reduce myocardial oxygen demand while preparing for reperfusion. A stress test is contraindicated during an acute MI. Atropine is reserved for symptomatic bradycardia and increases oxygen demand, and lipid and magnesium levels do not address the acute event.",
  "type": "mcq",
  "options": [
   "Prepare the client for a treadmill exercise stress test to confirm the diagnosis.",
   "Obtain a fasting lipid panel and draw a serum magnesium level for evaluation.",
   "Administer prescribed atropine IV to correct the bradycardia before the next ECG.",
   "Administer prescribed morphine sulfate IV and provide oxygen at 2 L/min per nasal cannula."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q063",
  "exam": 5,
  "src": 262,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A mother brings her 3-week-old son to the clinic because he is vomiting “all the time.” During the physical assessment, the nurse notes that the infant has poor skin turgor, has lost 20% of his birth weight, and has a small, palpable, olive-shaped mass in his abdomen. Which intervention should the nurse implement first?",
  "rationale": "Projectile vomiting and an olive-shaped mass indicate hypertrophic pyloric stenosis, and a 20% weight loss with poor turgor indicates severe dehydration, so IV fluid and electrolyte replacement is the first priority before surgical pyloromyotomy. Oral fluids and feedings, whether by mouth or nasogastric tube, cannot pass the obstructed pylorus and will be vomited, increasing the risk of aspiration and further fluid loss.",
  "type": "mcq",
  "options": [
   "Insert a nasogastric tube for feeding.",
   "Initiate a prescribed IV for parenteral fluids.",
   "Give the infant 5% dextrose in water orally.",
   "Feed the infant 3 ounces of soy formula."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q064",
  "exam": 5,
  "src": 656,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing a heparin bolus dose of 80 units/kg for a client who weighs 220 pounds. Heparin sodium injection is available in a 30 mL multidose vial with a concentration of 1,000 units/mL. How many mL of heparin should the nurse administer? (Enter numeric value only.)",
  "rationale": "Convert weight: 220 lb ÷ 2.2 = 100 kg. Calculate the dose: 80 units/kg × 100 kg = 8,000 units. Calculate the volume: 8,000 units ÷ 1,000 units × 1 mL = 8 mL.",
  "type": "fill",
  "answer": 8,
  "unit": "mL",
  "tolerance": 0
 },
 {
  "id": "hesi5q065",
  "exam": 5,
  "src": 192,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A community health nurse is concerned about the spread of communicable diseases among migrant farm workers in a rural community. Which action should the nurse take to promote the success of a healthcare program designed to address this problem?",
  "rationale": "Community programs succeed when they are culturally acceptable and supported by trusted community leaders, so building trust and respecting cultural and family values promotes participation. Mandatory screening as a condition of employment is coercive and discourages engagement. English-only materials may not reach workers who speak other languages, and weekday daytime clinic hours conflict with farm work schedules.",
  "type": "mcq",
  "options": [
   "Distribute educational pamphlets written in English at the local farms.",
   "Offer clinic hours on weekdays from 9 a.m. to 5 p.m. at the health department.",
   "Require all workers to be screened before they are allowed to be employed.",
   "Establish trust with community leaders and respect cultural and family values."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q066",
  "exam": 5,
  "src": 82,
  "topic": "Maternity & Newborn",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving oxytocin (Pitocin) to augment early labor. Which assessment is most important each time the infusion rate is increased?",
  "rationale": "Oxytocin increases the frequency, duration and intensity of contractions, and the major risk is uterine tachysystole (more than 5 contractions in 10 minutes), which reduces placental perfusion and can cause fetal distress or uterine rupture. The contraction pattern, along with the fetal heart rate, must be evaluated with each rate increase. Blood pressure, the infusion site and pain level are monitored but are not the most important assessment for titration.",
  "type": "mcq",
  "options": [
   "Pain level",
   "Blood pressure",
   "Contraction pattern",
   "Infusion site"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q067",
  "exam": 5,
  "src": 550,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The legs of a client receiving hospice care have become mottled in appearance. When the nurse observes the unlicensed assistive personnel (UAP) place a heating pad on the mottled areas, which action should the nurse take?",
  "rationale": "Mottling reflects decreased peripheral circulation as death approaches, and poorly perfused skin cannot dissipate heat, so a heating pad can easily cause burns; a light blanket provides warmth safely. Observing or repositioning the pads still exposes the skin to burns, and frequent pulse checks and elevation do not add comfort for a dying client.",
  "type": "mcq",
  "options": [
   "Advise the UAP to observe the client's skin while the heating pads are in place.",
   "Remove the heating pads and place a soft blanket over the client's legs and feet.",
   "Instruct the UAP to reposition the heating pads to the sides of the legs and feet.",
   "Elevate the client's feet on a pillow and monitor the pedal pulses frequently."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q068",
  "exam": 5,
  "src": 813,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Physiological Adaptation",
  "stem": "Which type of leukocyte is involved in allergic responses and the destruction of parasitic worms?",
  "rationale": "Eosinophils increase in allergic reactions and parasitic infections and release substances that destroy parasites and modulate inflammation. Neutrophils are the first responders to bacterial infection, lymphocytes provide specific immunity through T and B cells, and monocytes become macrophages that phagocytize debris and pathogens.",
  "type": "mcq",
  "options": [
   "Eosinophils",
   "Monocytes",
   "Lymphocytes",
   "Neutrophils"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q069",
  "exam": 5,
  "src": 73,
  "topic": "Renal & GU",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client is discharged with automated peritoneal dialysis (PD) to be used nightly. Which instruction should the nurse include in the discharge teaching?",
  "rationale": "Peritonitis is the most serious complication of peritoneal dialysis, so meticulous hand hygiene before handling the catheter or exit site is essential. Keeping the bed flat increases pressure against the diaphragm and does not aid exchanges. Feeling for a thrill and pulse applies to an arteriovenous fistula or graft for hemodialysis, and the client is not required to stay in bed with dwell fluid in the abdomen.",
  "type": "mcq",
  "options": [
   "Keep the head of the bed flat at night.",
   "Do not get up if fluid is left in the abdomen.",
   "Feel for a thrill and a distal pulse nightly.",
   "Wash hands before cleaning the exit site."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q070",
  "exam": 5,
  "src": 307,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A woman who takes pyridostigmine for myasthenia gravis (MG) arrives at the emergency department with extreme muscle weakness. Her adult daughter tells the nurse that since yesterday her mother has been unable to smile. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Uncontrollable drooling indicates weakness of the muscles of swallowing and inability to manage secretions, placing the client at high risk for aspiration and airway obstruction in a myasthenic or cholinergic crisis. A weak voice and ptosis are common manifestations of MG that do not immediately threaten the airway, and tingling is a sensory symptom not associated with MG.",
  "type": "mcq",
  "options": [
   "Uncontrollable drooling",
   "Tingling of the extremities",
   "Drooping of the eyelids",
   "Inability to raise her voice"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q071",
  "exam": 5,
  "src": 696,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse observes an adolescent prepare to use a prescribed corticosteroid metered-dose inhaler. He shakes the inhaler, exhales fully, positions the mouthpiece correctly, presses the canister while inhaling slowly and deeply, and then immediately exhales. Which action should the nurse take?",
  "rationale": "After inhaling the medication, the client should hold his breath for about 10 seconds so the drug can deposit in the airways, and exhaling immediately loses much of the dose; this is the step to correct. Confirming the steps he performed correctly does not fix the error, and rinsing the mouth is done after, not before, an inhaled corticosteroid to prevent oral candidiasis.",
  "type": "mcq",
  "options": [
   "Affirm that the client has correctly positioned the inhaler.",
   "Tell the client to rinse his mouth before using the inhaler.",
   "Remind the client to hold his breath after inhaling the medication.",
   "Confirm that the client has correctly shaken the inhaler."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q072",
  "exam": 5,
  "src": 235,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client tells the clinic nurse that he has not been feeling well and is often “dizzy.” His blood pressure is elevated. Based on these findings, this client is at greatest risk for which pathophysiologic condition?",
  "rationale": "Dizziness with elevated blood pressure suggests impaired cerebral perfusion and places the client at greatest immediate risk for stroke, the most acute and disabling complication of uncontrolled hypertension. Renal failure and left ventricular hypertrophy are chronic target-organ effects that develop over time and do not explain dizziness, and pulmonary hypertension is not caused by systemic hypertension.",
  "type": "mcq",
  "options": [
   "Renal failure",
   "Left ventricular hypertrophy",
   "Pulmonary hypertension",
   "Stroke"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q073",
  "exam": 5,
  "src": 279,
  "topic": "Pediatrics",
  "clientNeed": "Safety & Infection Control",
  "stem": "A nurse is planning to teach infant care and measures to prevent sudden infant death syndrome (SIDS) to a group of new parents. Which information is most important for the nurse to include?",
  "rationale": "Safe sleep recommendations include placing the infant on the back on a firm, flat mattress with a fitted sheet and nothing else in the crib. Prone positioning increases the risk of SIDS. Bumper pads, pillows and soft bedding increase the risk of suffocation and rebreathing and should be kept out of the crib.",
  "type": "mcq",
  "options": [
   "Ensure that the infant's crib mattress is firm.",
   "Use soft bumper pads around the crib to protect the infant.",
   "Place the infant prone to sleep after feedings.",
   "Put a small pillow under the infant's head during sleep."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q074",
  "exam": 5,
  "src": 305,
  "topic": "GI & Nutrition",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A woman just learned that she is infected with Helicobacter pylori. Based on this finding, which health promotion practice should the nurse suggest?",
  "rationale": "H. pylori is the leading cause of peptic ulcer disease and is also associated with gastric cancer, so the client should be evaluated for ulcers and treated with combination antibiotic and acid-suppressing therapy. A gluten-free diet is for celiac disease, H. pylori does not require annual colonoscopy, and spicy foods do not cause ulcers or need permanent avoidance.",
  "type": "mcq",
  "options": [
   "Encourage screening for a peptic ulcer.",
   "Begin a strict gluten-free diet.",
   "Avoid all spicy foods permanently.",
   "Schedule a colonoscopy every year."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q075",
  "exam": 5,
  "src": 593,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is assessing a postpartum client who is 36 hours post-delivery. Which finding should the nurse report to the healthcare provider?",
  "rationale": "A temperature of 100.4° F (38° C) or higher after the first 24 hours postpartum suggests infection, such as endometritis, and should be reported. A WBC of 19,000/mm3 and firm, filling breasts are normal postpartum findings, and a fundus deviated to the right usually indicates a full bladder, which is managed by having the client void.",
  "type": "mcq",
  "options": [
   "Oral temperature of 100.6° F",
   "Fundus deviated to the right side",
   "Breasts firm when palpated",
   "White blood cell count of 19,000/mm3"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q076",
  "exam": 5,
  "src": 150,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client with cervical cancer is hospitalized for insertion of a sealed internal cervical radiation implant. While providing care, the nurse finds the radiation implant in the bed. Which action should the nurse take?",
  "rationale": "A dislodged sealed source must never be touched with the hands; the nurse uses long-handled forceps to place it in the lead container kept in the room and notifies the radiation oncology team. Only the radiation oncologist reinserts an implant. Sending it to the laundry or discarding it in a sharps container exposes other staff to radiation and violates radiation safety protocols.",
  "type": "mcq",
  "options": [
   "Place the implant in a lead container using long-handled forceps.",
   "Wrap the implant in the bed linens and send it to the laundry.",
   "Pick up the implant with gloved hands and reinsert it.",
   "Place the implant in a red biohazard sharps container."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q077",
  "exam": 5,
  "src": 770,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "When implementing a disaster plan, which intervention should the nurse implement first?",
  "rationale": "Establishing an incident command center is the first step, because it coordinates communication, resources and all other actions in the disaster response. Discharging stable clients and calling in off-duty staff are directed by the command center, and community needs are assessed by public health and emergency management.",
  "type": "mcq",
  "options": [
   "Initiate the discharge of stable clients from hospital units.",
   "Identify a command center where activities are coordinated.",
   "Instruct all essential off-duty personnel to report to the facility.",
   "Assess community safety needs affected by the disaster."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q078",
  "exam": 5,
  "src": 643,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is managing the care of a client with Cushing's syndrome. Which interventions should the nurse delegate to the unlicensed assistive personnel (UAP)? (Select all that apply.)",
  "rationale": "Measuring weight, recording intake and reporting the client's complaints are data-collection tasks within the UAP's scope, with the nurse interpreting the information. Skin assessment, client teaching and evaluation of medication response require nursing judgment and cannot be delegated.",
  "type": "sata",
  "options": [
   "Weigh the client and report any weight gain.",
   "Evaluate the client's response to prescribed medications.",
   "Assess the client's skin for bruising and new striae.",
   "Record and report the client's intake during meals and snacks.",
   "Teach the client about the side effects of corticosteroids.",
   "Report any client complaint of pain or discomfort."
  ],
  "correct": [
   0,
   3,
   5
  ]
 },
 {
  "id": "hesi5q079",
  "exam": 5,
  "src": 628,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is completing a head-to-toe assessment for a client admitted for observation after falling out of a tree. Which finding warrants immediate intervention by the nurse?",
  "rationale": "Clear nasal drainage after head trauma suggests cerebrospinal fluid rhinorrhea from a basilar skull fracture, which creates a risk of meningitis and requires immediate notification; the drainage can be tested for glucose or a halo sign, and nothing is inserted into the nose. Bruises, abrasions and a mild headache are expected after a fall and are monitored.",
  "type": "mcq",
  "options": [
   "Clear fluid leaking from the nose",
   "Headache rated 3 on a 0-to-10 scale",
   "Abrasions on both knees",
   "A small bruise on the left forearm"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q080",
  "exam": 5,
  "src": 373,
  "topic": "Neuro & Sensory",
  "clientNeed": "Safety & Infection Control",
  "stem": "An adult male admitted two days ago following a stroke (CVA) is confused and has left-sided weakness. He has tried to get out of bed several times but cannot walk without assistance. Which intervention is most important for the nurse to implement?",
  "rationale": "A bed-exit alarm is the least restrictive measure that alerts staff immediately when the client tries to get up, preventing unassisted ambulation and falls. A family member may not always be available, restraints are a last resort and can increase agitation and injury, and checks every 15 minutes leave long gaps in which the client could fall.",
  "type": "mcq",
  "options": [
   "Install a bed-exit safety monitoring device.",
   "Ask a family member to sit with the client.",
   "Assign staff to check the client every 15 minutes.",
   "Apply bilateral soft wrist restraints."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q081",
  "exam": 5,
  "src": 583,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse instructs an unlicensed assistive personnel (UAP) to turn an immobilized older client who has an indwelling urinary catheter every two hours. Which additional action should the nurse instruct the UAP to take each time the client is turned?",
  "rationale": "Adequate hydration helps prevent complications of immobility and catheterization, such as urinary tract infection, constipation and thick secretions, and offering fluids is within the UAP's scope. The drainage bag does not need emptying every 2 hours, frequent snacks are unnecessary, and assessment of breath sounds is a nursing responsibility that cannot be delegated.",
  "type": "mcq",
  "options": [
   "Empty the urinary drainage bag.",
   "Offer the client oral fluids.",
   "Assess the client's breath sounds.",
   "Feed the client a snack."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q082",
  "exam": 5,
  "src": 225,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client is admitted with a bowel obstruction and has had intractable vomiting for the last several hours despite the use of antiemetics. His blood pressure is 86/52 mm Hg, heart rate is 124 beats/minute, and he has voided 15 mL in the past hour. Which intervention should the nurse implement first?",
  "rationale": "Hypotension, tachycardia and oliguria after prolonged vomiting indicate hypovolemia, so restoring circulating volume with an isotonic fluid bolus is the first priority. Nasogastric decompression is an essential treatment for the obstruction and follows immediately, and elevating the head of the bed and recording intake and output are supportive measures that do not correct the circulatory deficit.",
  "type": "mcq",
  "options": [
   "Insert a nasogastric tube to intermittent suction.",
   "Document strict intake and output.",
   "Infuse a 500 mL bolus of 0.9% sodium chloride.",
   "Maintain the head of the bed at 45 degrees."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q083",
  "exam": 5,
  "src": 663,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is preparing to administer an infusion of amino acid–dextrose total parenteral nutrition (TPN) through a central venous catheter. Which action should the nurse implement first?",
  "rationale": "Before spiking or priming, the nurse verifies the solution against the prescription and inspects it; a two-in-one amino acid–dextrose solution should be clear, and cloudiness, particles or precipitate indicate contamination or instability, so the bag should not be used. Priming, connecting and programming the pump follow verification.",
  "type": "mcq",
  "options": [
   "Check the TPN solution for cloudiness.",
   "Attach the IV tubing to the central line.",
   "Set the infusion pump at the prescribed rate.",
   "Prime the IV tubing with the TPN solution."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q084",
  "exam": 5,
  "src": 135,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with a recent colostomy expresses concern about the ability to control flatus. Which intervention is most important for the nurse to include in the client's plan of care?",
  "rationale": "Foods that produced gas before surgery, such as beans, cabbage, onions and carbonated drinks, will usually continue to do so, so avoiding them is the most practical way to control flatus. A bland diet does not necessarily reduce gas, and limiting fluids can cause constipation. Eliminating all fiber is unnecessary and can lead to constipation and poor nutrition.",
  "type": "mcq",
  "options": [
   "Avoid foods that caused gas before the colostomy.",
   "Decrease fluid intake at mealtimes.",
   "Eliminate foods high in cellulose.",
   "Adhere to a bland diet whenever planning to eat out."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q085",
  "exam": 5,
  "src": 713,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse suspects that a client may be hemorrhaging internally. Which finding on orthostatic vital signs may indicate a major bleed?",
  "rationale": "Significant blood loss reduces circulating volume, so when the client stands, the blood pressure falls and the heart rate rises to compensate; a heart rate increase of 20 beats/minute or more, or a systolic drop of 20 mm Hg or more, is considered a positive orthostatic test suggestive of hypovolemia. A minimal heart rate change, a rise in blood pressure or no change are normal responses.",
  "type": "mcq",
  "options": [
   "No change in blood pressure or heart rate when the client moves from lying to standing",
   "A heart rate increase of 5 beats/minute with no change in blood pressure",
   "An increase in systolic blood pressure of 10 mm Hg with a heart rate decrease of 5",
   "A decrease in systolic blood pressure of 10 mm Hg with a heart rate increase of 20 beats/minute"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q086",
  "exam": 5,
  "src": 56,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A client is admitted to a mental health unit after attempting suicide by taking a handful of medications. In developing a plan of care for this client, which goal has the highest priority?",
  "rationale": "Safety is the highest priority for a client who has attempted suicide, so the priority goal addresses freedom from self-harm; a no-self-harm agreement is one part of a broader safety plan that also includes close observation and environmental safety. Adequate sleep, group attendance and improved self-image are important goals but address recovery rather than the immediate risk to life.",
  "type": "mcq",
  "options": [
   "Signs a no-self-harm contract",
   "Attends group therapy every day",
   "Verbalizes a positive self-image",
   "Sleeps at least 6 hours nightly"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q087",
  "exam": 5,
  "src": 103,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client admitted to the intensive care unit with a right chest tube attached to a chest drainage unit becomes increasingly anxious and complains of difficulty breathing. The nurse determines that the client is tachypneic with absent breath sounds in the right lung fields. Which additional finding indicates that the client has developed a tension pneumothorax?",
  "rationale": "In a tension pneumothorax, trapped air builds pressure in the affected right pleural space and pushes the mediastinum and trachea toward the unaffected left side; tracheal deviation with absent breath sounds on the affected side is a classic late sign. Continuous bubbling in the water seal indicates an air leak in the system. Decreased bloody drainage is expected over time, and tachypnea with dyspnea are already present and are not specific to tension pneumothorax.",
  "type": "mcq",
  "options": [
   "Tachypnea and difficulty breathing",
   "Decreased bright red blood drainage",
   "Tracheal deviation toward the left lung",
   "Continuous bubbling in the water-seal chamber"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q088",
  "exam": 5,
  "src": 446,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "During a staff meeting, a nurse verbally attacks the nurse manager, saying, “You always let your favorites have holidays off and give them easier assignments. You are unfair and prejudiced.” How should the nurse manager respond?",
  "rationale": "Asking for specific examples moves the conversation from emotional accusations to objective facts that can be examined and addressed, which is a constructive conflict-management approach. Deferring to a private conversation avoids an issue raised publicly, polling the staff invites a group confrontation, and denying the charges is defensive and closes communication.",
  "type": "mcq",
  "options": [
   "“I would prefer to discuss this with you privately.”",
   "“Does anyone else on the staff feel the same way?”",
   "“Give me specific examples to support your statements.”",
   "“Your remarks are not true and are very unkind.”"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q089",
  "exam": 5,
  "src": 175,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with osteoporosis related to long-term corticosteroid therapy receives a prescription for calcium carbonate. Which of the client's serum laboratory values requires intervention by the nurse?",
  "rationale": "A creatinine of 4 mg/dL indicates significant renal impairment (normal about 0.6 to 1.2 mg/dL), which reduces calcium excretion and increases the risk of hypercalcemia, milk-alkali syndrome and kidney stones, so the prescription should be clarified with the provider. The calcium, phosphate and fasting glucose values are all within normal limits.",
  "type": "mcq",
  "options": [
   "Phosphate 4 mg/dL (1.29 mmol/L)",
   "Fasting glucose 95 mg/dL (5.3 mmol/L)",
   "Creatinine 4 mg/dL (354 micromol/L)",
   "Total calcium 9 mg/dL (2.25 mmol/L)"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q090",
  "exam": 5,
  "src": 145,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with arthritis has been receiving naproxen and now reports ongoing stomach pain, increasing weakness, and fatigue. Which laboratory test should the nurse monitor?",
  "rationale": "NSAIDs such as naproxen inhibit protective prostaglandins in the gastric mucosa and can cause ulceration and GI bleeding; stomach pain with weakness and fatigue suggests blood loss and anemia, so hemoglobin should be monitored. The sedimentation rate measures inflammation from the arthritis, and calcium and osmolality are not affected by naproxen and do not explain the client's symptoms.",
  "type": "mcq",
  "options": [
   "Erythrocyte sedimentation rate",
   "Serum calcium",
   "Serum osmolality",
   "Hemoglobin"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q091",
  "exam": 5,
  "src": 159,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with gestational diabetes is undergoing a non-stress test (NST) at 34 weeks' gestation. The baseline fetal heart rate (FHR) is 144 beats/minute. The client is instructed to press a button on the fetal monitor each time the baby moves. After 20 minutes, the nurse evaluates the fetal monitor strip. Which finding indicates a reactive (normal) result?",
  "rationale": "A reactive NST after 32 weeks' gestation shows at least two accelerations of 15 beats/minute above baseline lasting at least 15 seconds within 20 minutes, indicating an intact fetal autonomic nervous system and adequate oxygenation. A 10 × 10 acceleration meets criteria only before 32 weeks, and a single acceleration is insufficient. Late decelerations suggest uteroplacental insufficiency, and no acceleration with movement is a nonreactive result requiring further testing.",
  "type": "mcq",
  "options": [
   "One FHR acceleration of 10 beats/minute lasting 10 seconds is recorded",
   "Two FHR accelerations of 15 beats/minute lasting 15 seconds are recorded",
   "Two late decelerations are recorded following fetal movement",
   "No change in the FHR is recorded with three fetal movements"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q092",
  "exam": 5,
  "src": 212,
  "topic": "Renal & GU",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A female client with chronic urinary retention explains the double-voiding technique to the nurse by stating that she voids partially, holds the remaining urine in her bladder for three minutes, and then voids again to empty her bladder fully. How should the nurse respond?",
  "rationale": "In double voiding, the client empties the bladder as completely as possible, waits a few minutes (often while leaning forward or changing position) and then voids again to expel residual urine; intentionally holding urine on the first void defeats the purpose. Her description is incorrect, so praise is inappropriate. Waiting 30 minutes is too long, and fluid restriction concentrates urine and increases infection risk.",
  "type": "mcq",
  "options": [
   "Instruct the client to limit fluids to reduce retention.",
   "Advise the client to wait 30 minutes before voiding again.",
   "Advise the client to empty her bladder fully when she first voids.",
   "Commend the client for describing the technique correctly."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q093",
  "exam": 5,
  "src": 796,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client receives a new plan of care to treat osteoporosis that includes an oral bisphosphonate. Which instruction is most important for the nurse to provide?",
  "rationale": "Oral bisphosphonates such as alendronate can cause severe esophageal irritation and ulceration, so the client must remain upright for at least 30 minutes after taking the dose with a full glass of water. The drug is taken first thing in the morning on an empty stomach, not with breakfast or at bedtime, and calcium supplements interfere with its absorption.",
  "type": "mcq",
  "options": [
   "Remain upright after taking the medication.",
   "Take the medication with a calcium supplement.",
   "Take the medication at bedtime.",
   "Take the medication with breakfast."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q094",
  "exam": 5,
  "src": 472,
  "topic": "GI & Nutrition",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Following insertion of a LeVeen (peritoneovenous) shunt in a client with cirrhosis of the liver, which assessment finding indicates to the nurse that the shunt is effective?",
  "rationale": "A peritoneovenous shunt drains ascitic fluid from the peritoneal cavity into the superior vena cava, so a decreasing abdominal girth shows that ascites is being removed. A rise in blood pressure and changes in breath sounds reflect the increased circulating volume and must be monitored for fluid overload, but they do not show the shunt is achieving its purpose, and albumin would rise rather than fall as protein-rich fluid is returned to the circulation.",
  "type": "mcq",
  "options": [
   "Clear breath sounds",
   "Decreased abdominal girth",
   "Increased blood pressure",
   "Decreased serum albumin"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q095",
  "exam": 5,
  "src": 167,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with hyperthyroidism who has not responded to medications is admitted for evaluation. The client's temperature is 103.8° F (39.9° C), the heart rate is 148 beats/minute, and the client is agitated and confused. Which action should the nurse implement?",
  "rationale": "Hyperpyrexia, severe tachycardia and altered mental status in a client with uncontrolled hyperthyroidism indicate thyroid storm, a life-threatening emergency that requires immediate notification of the provider for antithyroid drugs, beta blockers, corticosteroids and cooling. Waiting 4 hours delays treatment, extra blankets increase the temperature, and activity increases metabolic demand and cardiac workload.",
  "type": "mcq",
  "options": [
   "Apply extra blankets to the client to prevent shivering.",
   "Encourage the client to walk in the hallway to reduce agitation.",
   "Notify the healthcare provider.",
   "Provide a high-calorie snack and recheck vital signs in 4 hours."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q096",
  "exam": 5,
  "src": 771,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "When obtaining a rectal temperature with an electronic thermometer, which action is most important for the nurse to perform?",
  "rationale": "The nurse holds the probe in place throughout the measurement to prevent it from advancing and perforating the rectal mucosa or being dislodged. The lubricated probe is inserted only about 1 to 1.5 inches in an adult, and the client is positioned side-lying (Sims' position).",
  "type": "mcq",
  "options": [
   "Insert the probe without any lubricant.",
   "Insert the probe about 3 inches into the rectum.",
   "Hold the thermometer in place.",
   "Position the client supine with knees flexed."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q097",
  "exam": 5,
  "src": 80,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving lactulose for signs of hepatic encephalopathy. To evaluate the client's therapeutic response to this medication, which assessment should the nurse obtain?",
  "rationale": "Colonic bacteria break down lactulose, creating an acidic environment that converts ammonia to ammonium, which is trapped in the bowel and excreted in stool. Lowering serum ammonia improves mental status, so an improved level of consciousness indicates a therapeutic response. Electrolytes are monitored for adverse effects of diarrhea, and abdominal percussion and blood glucose do not measure the intended effect.",
  "type": "mcq",
  "options": [
   "Percussion of the abdomen",
   "Level of consciousness",
   "Blood glucose",
   "Serum electrolytes"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q098",
  "exam": 5,
  "src": 276,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A nurse is caring for a client with diabetes insipidus. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Loss of large volumes of dilute urine in diabetes insipidus concentrates the serum sodium, and severe hypernatremia causes neurologic changes, seizures and coma, so it requires immediate intervention. Excessive thirst, tachycardia and poor skin turgor are expected compensatory signs of fluid loss that are managed with fluid replacement and desmopressin, but they are not as immediately dangerous.",
  "type": "mcq",
  "options": [
   "Poor skin turgor",
   "Elevated heart rate",
   "Hypernatremia",
   "Excessive thirst"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q099",
  "exam": 5,
  "src": 381,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An older client seems confused and reports the onset of nausea, dysuria, and urgency with incontinence. Which action should the nurse implement?",
  "rationale": "Dysuria and urgency, often with new confusion in older adults, suggest a urinary tract infection, so a clean-catch midstream specimen is obtained for urinalysis and culture to confirm the diagnosis and guide antibiotic therapy. Catheterization adds infection risk and is not needed for a client who can void, an antiemetic treats a symptom rather than the cause, and briefs do not address the infection.",
  "type": "mcq",
  "options": [
   "Apply incontinence briefs to protect the skin.",
   "Administer a prescribed antiemetic medication.",
   "Obtain a clean-catch midstream specimen.",
   "Insert a straight catheter to drain the bladder."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q100",
  "exam": 5,
  "src": 247,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A male client with cancer who has lost 10 pounds during the last month tells the nurse that beef, chicken, and eggs, which used to be his favorite foods, now taste “bitter.” He says he simply has no appetite. Which action should the nurse implement?",
  "rationale": "Chemotherapy and cancer commonly cause taste changes, especially a bitter or metallic taste with red meat and other proteins, so substituting other protein sources such as dairy, nuts, beans or fish maintains protein intake. Forcing red meat increases aversion. Cold or room-temperature foods are often better tolerated because heat intensifies odors, and small, frequent meals are preferred for clients with anorexia.",
  "type": "mcq",
  "options": [
   "Offer three large meals each day to increase his calorie intake.",
   "Serve his meats very hot to enhance their flavor and aroma.",
   "Suggest alternative sources of protein, such as dairy products and nuts.",
   "Encourage him to eat red meat at every meal to restore lost weight."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q101",
  "exam": 5,
  "src": 837,
  "topic": "Cardiovascular",
  "clientNeed": "Management of Care",
  "stem": "While visiting a female client who has heart failure (HF) and osteoarthritis, the home health nurse determines that the client is having more difficulty getting in and out of bed than previously. Which action should the nurse implement first?",
  "rationale": "A physical therapist can evaluate the client's strength, mobility and transfer safety and recommend exercises, techniques and equipment to maintain function and prevent falls. Obtaining equipment such as an electric bed and reviewing resources may follow the evaluation, and explaining disease progression does not address the functional decline.",
  "type": "mcq",
  "options": [
   "Inquire about an electric bed for the client's home use.",
   "Request that social services review the client's resources.",
   "Submit a referral for an evaluation by a physical therapist.",
   "Explain the usual progression of osteoarthritis and HF."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q102",
  "exam": 5,
  "src": 303,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A toddler with a history of an acyanotic heart defect is admitted to the pediatric intensive care unit with a respiratory rate of 60 breaths/minute and a heart rate of 150 beats/minute. Which action should the nurse take?",
  "rationale": "Tachypnea and tachycardia in a child with a heart defect suggest worsening heart failure or respiratory compromise, so the nurse first assesses oxygenation with pulse oximetry to guide oxygen therapy and further interventions. Digoxin should not be given before an apical pulse and full assessment, especially since the rate is high for unclear reasons. A supine position increases respiratory effort, and extra fluids may worsen heart failure.",
  "type": "mcq",
  "options": [
   "Encourage oral fluids every hour.",
   "Place the child in a supine position.",
   "Obtain a pulse oximeter reading.",
   "Administer the scheduled digoxin dose."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q103",
  "exam": 5,
  "src": 181,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with rapid respirations and audible rhonchi is admitted to the intensive care unit with a pulmonary embolism (PE). Low-flow oxygen by nasal cannula and a weight-based heparin protocol are initiated. Which intervention is most important for the nurse to include in this client's plan of care?",
  "rationale": "Weight-based heparin dosing is adjusted according to coagulation studies such as the aPTT or anti-factor Xa level, so frequent evaluation of clotting values is essential for therapeutic and safe anticoagulation. Ambulation is restricted during the acute phase of a PE, and massaging the calves can dislodge additional clots. Vitamin K is the antidote for warfarin, not heparin, and would counteract anticoagulation.",
  "type": "mcq",
  "options": [
   "Encourage ambulation in the hallway every 2 hours.",
   "Administer vitamin K daily as a precaution.",
   "Massage the calves to promote venous return.",
   "Evaluate daily blood clotting studies."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q104",
  "exam": 5,
  "src": 603,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "While auscultating a client's heart, the nurse hears a prolonged swishing, blowing sound between S1 and S2. Which description should the nurse use to document this sound?",
  "rationale": "A murmur is a swishing or blowing sound produced by turbulent blood flow across a valve or septal defect, and one heard between S1 and S2 is a systolic murmur. An S3 is a brief, low-pitched sound after S2, a friction rub is a scratchy, grating sound that may vary with position, and a split S2 is two distinct closing sounds rather than a swish.",
  "type": "mcq",
  "options": [
   "Pericardial friction rub",
   "Split S2",
   "S3 gallop",
   "Murmur"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q105",
  "exam": 5,
  "src": 562,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse asks the parent to stay during the examination of a male toddler's genital area. Which intervention should the nurse implement?",
  "rationale": "With toddlers, the least threatening parts of the examination are done first, and invasive or distressing areas such as the genitalia, ears and mouth are examined last so the child's cooperation is maintained. Soothing statements help but do not change the sequence, the genitalia cannot be examined through underwear, and toddlers are best examined quickly rather than slowly.",
  "type": "mcq",
  "options": [
   "Examine the genitalia as the last part of the total exam.",
   "Allow the child to keep his underpants on during the genital exam.",
   "Work slowly and methodically so as not to stress the child.",
   "Use soothing statements to facilitate cooperation."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q106",
  "exam": 5,
  "src": 641,
  "topic": "Mental Health",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is interviewing a client with schizophrenia. Which client behavior requires immediate intervention?",
  "rationale": "Sudden muscle spasms of the neck and back indicate an acute dystonic reaction to antipsychotic medication, which can progress to laryngospasm and airway compromise, and it requires immediate treatment with an anticholinergic. Lip smacking suggests tardive dyskinesia, a shuffling gait indicates pseudoparkinsonism, and rocking may reflect akathisia; these extrapyramidal effects need management but are not immediately life-threatening.",
  "type": "mcq",
  "options": [
   "Shuffling gait and stooped posture",
   "Muscle spasms of the back and neck",
   "Lip smacking and frequent eye blinking",
   "Rocking back and forth in the chair"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q107",
  "exam": 5,
  "src": 115,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client who sustained a head injury in an automobile collision is admitted to the hospital. The nurse includes the client's risk for increased intracranial pressure (ICP) in the plan of care. Which signs indicate to the nurse that ICP has increased?",
  "rationale": "A change in level of consciousness such as confusion is the earliest sign of increased ICP, and papilledema, swelling of the optic disc, reflects elevated pressure transmitted along the optic nerve. An increasing Glasgow Coma Scale score indicates neurologic improvement. Nuchal rigidity and photophobia suggest meningeal irritation, and periorbital ecchymosis (raccoon eyes) suggests a basilar skull fracture rather than increased ICP itself.",
  "type": "mcq",
  "options": [
   "Increased Glasgow Coma Scale score",
   "Periorbital ecchymosis",
   "Confusion and papilledema",
   "Nuchal rigidity and photophobia"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q108",
  "exam": 5,
  "src": 701,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse plans to collect a 24-hour urine specimen for a creatinine clearance test. Which instruction should the nurse provide to the adult male client?",
  "rationale": "A timed 24-hour collection begins with emptying the bladder and discarding that urine, then saving all urine for exactly 24 hours, including a final void at the end time; missing even one void invalidates the test. A midstream clean-catch technique is used for culture, catheterization is unnecessary for a client who can void, and intermittent samples do not provide a complete 24-hour collection.",
  "type": "mcq",
  "options": [
   "Cleanse around the meatus, discard the first portion of urine, and collect the rest in a sterile bottle.",
   "Urinate at a specific time, discard that urine, and collect all urine voided for the next 24 hours.",
   "Urinate into a urinal, and the laboratory will collect a specimen every 6 hours for 24 hours.",
   "Notify the nurse when the bladder is full so catheterized specimens can be collected for 24 hours."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q109",
  "exam": 5,
  "src": 504,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "One day after abdominal surgery, an obese client complains of pain and heaviness in the right calf. Which action should the nurse implement?",
  "rationale": "Obesity and abdominal surgery increase the risk of deep vein thrombosis, and calf pain with heaviness warrants assessment for unilateral swelling, warmth and redness, followed by notification of the provider. Massaging the calf or ambulating could dislodge a clot and cause pulmonary embolism, and Homans' sign is unreliable and may also dislodge a thrombus.",
  "type": "mcq",
  "options": [
   "Ambulate the client in the hallway.",
   "Dorsiflex the foot to elicit Homans' sign.",
   "Massage the calf to relieve the discomfort.",
   "Observe for unilateral swelling."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q110",
  "exam": 5,
  "src": 215,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A female client with severe renal impairment is receiving enoxaparin 30 mg subcutaneously BID. Which laboratory value should the nurse report to the healthcare provider?",
  "rationale": "Enoxaparin is eliminated by the kidneys, and a creatinine clearance below 30 mL/minute causes the drug to accumulate and increases bleeding risk, so the dose usually needs to be reduced to once daily. Calcium and hemoglobin are within normal limits. Enoxaparin has little effect on the PTT, so a normal value is expected and is not used to monitor the drug.",
  "type": "mcq",
  "options": [
   "Partial thromboplastin time (PTT) of 30 seconds",
   "Calcium of 9 mg/dL",
   "Creatinine clearance of 25 mL/minute",
   "Hemoglobin of 12 g/dL"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q111",
  "exam": 5,
  "src": 630,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is conducting the initial assessment of an ill client from another culture, who says, “I am not sure your medicines will help me.” Which response should the nurse provide?",
  "rationale": "Asking about the client's own healing beliefs and practices is part of a culturally competent assessment and allows the nurse to integrate acceptable practices into the plan of care, improving trust and adherence. Insisting on the prescribed treatment dismisses the client's concerns, “why” questions put the client on the defensive, and telling the client that beliefs do not matter disregards cultural values.",
  "type": "mcq",
  "options": [
   "“Why don't you trust modern medicine to help you?”",
   "“What practices do you believe will help you heal?”",
   "“You need to follow the prescribed treatment to get better.”",
   "“Your beliefs will not affect your medical treatment here.”"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q112",
  "exam": 5,
  "src": 682,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is triaging several children who arrive at the emergency department after an accident. Which child requires the most immediate intervention by the nurse?",
  "rationale": "Headache with nausea and projectile vomiting after trauma suggests increasing intracranial pressure, which can lead to herniation and death, so this child needs immediate evaluation. Neck and back discomfort requires spinal precautions and assessment, superficial lacerations and a splinted possible tibia fracture are stable, and these conditions are not immediately life-threatening.",
  "type": "mcq",
  "options": [
   "An 11-year-old with a headache, nausea, and projectile vomiting",
   "A 12-year-old with complaints of neck and lower back discomfort",
   "An 8-year-old in a full-leg air splint for a possible broken tibia",
   "A 6-year-old with multiple superficial lacerations of all extremities"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q113",
  "exam": 5,
  "src": 216,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A female nurse who took drugs from the unit for personal use was temporarily released from duty. After completing mandatory counseling, the nurse asks administration to allow her to return to work. When the nurse administrator approaches the charge nurse with the request, which action is best for the charge nurse to take?",
  "rationale": "Nurses who complete treatment through an alternative-to-discipline program may return to practice with conditions such as monitoring or restricted access to controlled substances, which supports recovery while protecting client safety. Resuming full responsibilities without monitoring ignores the risk of relapse. The therapist relationship is confidential, and polling staff about their feelings violates the nurse's privacy and does not establish safe practice.",
  "type": "mcq",
  "options": [
   "Ask to meet with the impaired nurse's therapist before allowing her back on the unit.",
   "Since treatment is completed, assign the nurse to routine RN responsibilities.",
   "Meet with staff to assess their feelings about the impaired nurse's return to the unit.",
   "Allow the impaired nurse to return to work and monitor medication administration."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q114",
  "exam": 5,
  "src": 724,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "Which pathophysiologic mechanisms are responsible for ascites related to liver failure? (Select all that apply.)",
  "rationale": "Ascites in cirrhosis results from portal hypertension, which increases hydrostatic pressure and pushes fluid into the peritoneal cavity; decreased albumin synthesis, which lowers oncotic pressure; and activation of the renin-angiotensin-aldosterone system, which increases sodium and water retention. The failing liver makes less, not more, albumin, and portal pressure is increased rather than decreased.",
  "type": "sata",
  "options": [
   "Increased hepatic synthesis of albumin draws fluid into the peritoneum.",
   "Decreased portal venous pressure causes fluid to pool in the abdomen.",
   "Fluid shifts from the intravascular to the interstitial space because of decreased serum protein.",
   "Increased circulating aldosterone increases sodium and water retention.",
   "Increased hydrostatic pressure in the portal circulation shifts fluid into the abdomen."
  ],
  "correct": [
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi5q115",
  "exam": 5,
  "src": 693,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse notes that a client has been receiving hydromorphone every six hours for four days. Which assessment is most important for the nurse to complete?",
  "rationale": "Hydromorphone is a potent opioid that slows peristalsis, and constipation is the most common adverse effect of continued opioid therapy, so bowel sounds and bowel pattern are assessed. Opioids do not typically cause edema, hyperglycemia or a pulse deficit.",
  "type": "mcq",
  "options": [
   "Measure the client's capillary glucose level.",
   "Count the apical and radial pulses simultaneously.",
   "Observe for edema around the ankles.",
   "Auscultate the client's bowel sounds."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q116",
  "exam": 5,
  "src": 440,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "During cardiopulmonary resuscitation of an intubated client, the nurse detects a palpable pulse with each compression throughout the two-minute cycle and absent breath sounds over the left lung. Which action should the nurse implement?",
  "rationale": "Palpable pulses with compressions indicate that the compressions are effective, but absent breath sounds on the left in an intubated client most often mean the tube has advanced into the right mainstem bronchus, so it must be pulled back and repositioned. Compressions do not need to change, a pneumothorax is less likely than tube malposition right after intubation, and epinephrine does not correct one-lung ventilation.",
  "type": "mcq",
  "options": [
   "Prepare for insertion of a left-sided chest tube.",
   "Administer a dose of IV epinephrine immediately.",
   "Increase the depth and rate of chest compressions.",
   "Prepare for the endotracheal tube to be repositioned."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q117",
  "exam": 5,
  "src": 806,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "Which location should the nurse choose as the best place to begin a screening program for hypothyroidism?",
  "rationale": "Hypothyroidism is several times more common in women than in men and increases with age, and it is more prevalent in white and Asian populations than in African Americans, so a group of adult women offers the highest-yield screening population. Daycare and after-school centers serve children and adolescents, in whom acquired hypothyroidism is less common.",
  "type": "mcq",
  "options": [
   "An after-school center for Native American teens",
   "An African-American senior citizens center",
   "A business and professional women's group",
   "A daycare center in a Hispanic neighborhood"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q118",
  "exam": 5,
  "src": 306,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A woman who just received the rubella vaccine after the birth of a healthy newborn has two children at home, ages 13 months and 3 years. Which instruction is most important to provide to the client?",
  "rationale": "Rubella vaccine contains live attenuated virus that could theoretically harm a fetus, so the client must avoid pregnancy after vaccination; the CDC recommends at least 4 weeks, and many references teach 1 to 3 months, which is the safest advice. The vaccine virus is not transmitted to household contacts, so she does not need to avoid her children or newborn, and breastfeeding is safe after rubella vaccination.",
  "type": "mcq",
  "options": [
   "Avoid contact with your other children for 2 weeks.",
   "Do not get pregnant for at least 3 months.",
   "Do not breastfeed for 72 hours after the vaccine.",
   "Keep the newborn away from you for 24 hours."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q119",
  "exam": 5,
  "src": 433,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "Based on the principles of asepsis, the nurse should consider which item to be sterile?",
  "rationale": "Sterile items are considered sterile only when they are kept within the nurse's view at or above waist level, so an open kit on a waist-high table remains sterile. The 1-inch border of a sterile field is considered contaminated, moisture wicks microorganisms through a package by capillary action, and reaching over a sterile field contaminates it.",
  "type": "mcq",
  "options": [
   "A wrapped, unopened sterile 4 × 4 gauze placed on a damp tabletop",
   "The 1-inch border around the edge of a sterile field set up in the operating room",
   "A sterile syringe placed on the sterile field as the nurse reaches over the field",
   "An open sterile Foley catheter kit set up on a table at the nurse's waist level"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q120",
  "exam": 5,
  "src": 652,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is preparing a client who had a below-the-knee amputation (BKA) for discharge home. Which recommendations should the nurse provide this client? (Select all that apply.)",
  "rationale": "The residual limb is inspected daily for redness, blisters and abrasions, a shrinker sock reduces edema and shapes the limb for a prosthesis, and the limb is washed daily with mild soap and water, then rinsed and dried thoroughly. Alcohol dries and cracks the skin, and daily range-of-motion exercises are needed to prevent contractures.",
  "type": "sata",
  "options": [
   "Use a residual limb shrinker.",
   "Inspect the skin for redness.",
   "Apply alcohol to the residual limb after bathing.",
   "Wash the residual limb with soap and water.",
   "Avoid range-of-motion exercises."
  ],
  "correct": [
   0,
   1,
   3
  ]
 },
 {
  "id": "hesi5q121",
  "exam": 5,
  "src": 201,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A female client on the mental health unit frequently asks the nurse when she can be discharged. Then, becoming more anxious, she begins to pace the hallway. Which intervention should the nurse implement first?",
  "rationale": "Exploring the client's reasons for wanting discharge helps the nurse assess what is causing her escalating anxiety and allows her to express her concerns. Stating that the team decides the date is dismissive and may increase anxiety. A PRN medication may be needed if anxiety continues to escalate, but less restrictive interventions are tried first, and a group activity may be overstimulating before the cause is assessed.",
  "type": "mcq",
  "options": [
   "Encourage the client to join the group activity in progress.",
   "Explore the client's reasons for wanting to be discharged.",
   "Tell the client the treatment team decides the discharge date.",
   "Administer a prescribed PRN anxiolytic medication."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q122",
  "exam": 5,
  "src": 469,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Following a gunshot wound, an adult client has a hemoglobin of 4 g/dL. The nurse prepares to administer a unit of blood for an emergency transfusion. The client's blood type is AB negative, and the blood bank sends a unit of type A Rh-negative blood, reporting that no type AB negative blood is available. Which intervention should the nurse implement?",
  "rationale": "A client with type AB blood has no anti-A or anti-B antibodies and is the universal recipient for red cells, so type A Rh-negative cells are compatible with this Rh-negative client. A hemoglobin of 4 g/dL is critically low, so delaying transfusion to recheck values or giving only saline would be dangerous, and separate consent is not required for a compatible unit.",
  "type": "mcq",
  "options": [
   "Recheck the client's hemoglobin, blood type, and Rh factor.",
   "Administer normal saline solution until type AB negative is available.",
   "Transfuse the type A negative blood until type AB negative is available.",
   "Obtain additional consent for administration of type A negative blood."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi5q123",
  "exam": 5,
  "src": 584,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is administering a 750 mL cleansing enema to an adult client. After about 150 mL has infused, the client says, “Stop, I can't hold any more.” Which action should the nurse take?",
  "rationale": "Cramping and the urge to defecate during an enema are relieved by temporarily stopping the flow and having the client take slow, deep breaths, after which the solution can be continued slowly, often with the bag lowered. Stopping completely may not achieve adequate cleansing, raising the bag increases pressure and cramping, and bearing down promotes expulsion of the solution.",
  "type": "mcq",
  "options": [
   "Remove the tubing and document that 150 mL was administered.",
   "Clamp the tubing and instruct the client to breathe deeply before continuing.",
   "Encourage the client to bear down while the solution continues.",
   "Raise the enema bag higher so the remaining solution infuses faster."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q124",
  "exam": 5,
  "src": 629,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is conducting health assessments. Which finding increases a 56-year-old woman's risk for developing osteoporosis?",
  "rationale": "Smoking decreases estrogen levels, impairs calcium absorption and reduces bone mass, increasing the risk of osteoporosis. A higher BMI provides weight-bearing stress that is protective of bone, estrogen-containing contraceptives are also protective, and a family history of diabetes is not a risk factor for osteoporosis.",
  "type": "mcq",
  "options": [
   "Body mass index (BMI) of 31",
   "Birth control pill use until age 45",
   "Family history of diabetes mellitus",
   "20 pack-year history of cigarette smoking"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q125",
  "exam": 5,
  "src": 376,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult who is 5 feet 5 inches (165.1 cm) tall and weighs 90 lb (40.8 kg) is admitted with chronic anorexia nervosa. The client receives a regular diet for 2 days, and the medical record indicates that 100% of the diet has been consumed. However, the client's weight on the third morning is 89 lb (40.4 kg). Which action should the nurse implement?",
  "rationale": "Continued weight loss despite documented 100% intake suggests the client may be hiding or discarding food, purging or exercising excessively, so staff should observe the client during and after meals. Searching the room violates trust without solving the problem, asking the client is unlikely to elicit an honest answer, and increasing calories is ineffective if the food is not being eaten.",
  "type": "mcq",
  "options": [
   "Examine the client's room for hidden food.",
   "Assign staff to monitor what the client eats.",
   "Ask the client if the food is being eaten or discarded.",
   "Provide the client with a high-calorie diet."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q126",
  "exam": 5,
  "src": 30,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client admitted to the emergency center has inspiratory and expiratory wheezing, nasal flaring, and thick, tenacious sputum observed during the physical examination. Based on these assessment findings, which classification of pharmacologic agents should the nurse anticipate administering?",
  "rationale": "Wheezing and nasal flaring indicate bronchoconstriction and respiratory distress, so a bronchodilator such as a short-acting beta-2 agonist is anticipated first to open the airways. Beta blockers can cause bronchospasm and are avoided. Corticosteroids reduce airway inflammation but act over hours and are adjuncts rather than the first agent for acute wheezing, and antihistamines dry and thicken secretions, which would worsen tenacious sputum.",
  "type": "mcq",
  "options": [
   "Bronchodilators",
   "Antihistamines",
   "Beta blockers",
   "Corticosteroids"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q127",
  "exam": 5,
  "src": 477,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Four hours after surgery, a client reports nausea and begins to vomit. The nurse notes that a scopolamine transdermal patch has been applied behind the client's ear. Which action should the nurse take?",
  "rationale": "Transdermal scopolamine is applied behind the ear to prevent postoperative nausea and vomiting, so vomiting means the therapy is ineffective and the provider should be notified for an additional antiemetic. The patch is correctly placed behind the ear and should stay in place, and nausea and vomiting are the conditions it prevents rather than its side effects, which include dry mouth, drowsiness and blurred vision.",
  "type": "mcq",
  "options": [
   "Explain that vomiting is a side effect of the medication.",
   "Remove the transdermal patch until the vomiting subsides.",
   "Reposition the transdermal patch to the client's trunk.",
   "Notify the healthcare provider of the vomiting."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi5q128",
  "exam": 5,
  "src": 819,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "While establishing risk-reduction strategies in a community, the nurse notes that regional studies show a high number of persons with irreversible intellectual disability due to hypothyroidism. The nurse should seek funding to implement which screening measure?",
  "rationale": "Congenital hypothyroidism causes irreversible intellectual disability if it is not treated within the first weeks of life, so newborn screening of T4 (with TSH) allows early thyroid hormone replacement that prevents the disability. Screening adolescents, adults or the water supply would not identify affected infants in time to prevent brain damage.",
  "type": "mcq",
  "options": [
   "Iodine levels in the drinking water",
   "T4 levels in newborns",
   "T3 levels in adults older than 50 years",
   "Thyroid antibody levels in adolescents"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi5q129",
  "exam": 5,
  "src": 608,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is caring for a 17-year-old male who fell 20 feet while climbing a cliff 5 months ago and has remained in a persistent vegetative state since the accident. Which intervention should the nurse implement?",
  "rationale": "Hearing may be preserved even when a client cannot respond, so the nurse speaks directly to the adolescent, explains care and treats him with dignity. Food preferences are not relevant for a client receiving tube feedings, communication with the parents should already be established, and neurologic checks every 2 hours are not needed for a long-term, stable vegetative state.",
  "type": "mcq",
  "options": [
   "Talk directly to the adolescent while providing care.",
   "Inquire about food allergies and food likes and dislikes.",
   "Monitor vital signs and neurologic status every 2 hours.",
   "Initiate open communication with the teen's parents."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi5q130",
  "exam": 5,
  "src": 312,
  "topic": "Respiratory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A young adult female college student visits the health clinic in early winter to obtain birth control pills. The clinic nurse asks whether she has received an influenza vaccination. The student states she did not get vaccinated because she has asthma. How should the nurse respond?",
  "rationale": "People with asthma are at high risk for complications of influenza and should receive the inactivated injectable vaccine every year, so the nurse offers it now while influenza is circulating. Waiting until next season leaves her unprotected now. The inactivated vaccine does not increase risk for people with asthma, whereas the live attenuated nasal spray can trigger wheezing and is not recommended for clients with asthma.",
  "type": "mcq",
  "options": [
   "Advise the student that the nasal spray vaccine reduces side effects for people with asthma.",
   "Encourage the student to obtain a vaccination before the next influenza season.",
   "Confirm that a history of asthma can increase the risks associated with the vaccine.",
   "Offer to provide the influenza vaccination to the student while she is at the clinic."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q001",
  "exam": 6,
  "src": 642,
  "topic": "Neuro & Sensory",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is making a home visit to a male client with moderate-stage Alzheimer's disease. His exhausted wife tells the nurse that the family plans to take turns caring for him in their homes, each keeping him for two weeks at a time. How should the nurse respond?",
  "rationale": "Clients with Alzheimer's disease depend on a familiar environment and consistent routines, and frequent relocation increases confusion, agitation and the risk of falls. Adult day care provides respite for the caregiver while keeping the client in his own home. Rotating households, even for longer periods, disrupts routine, and immediate nursing home placement is not necessary for a client in the moderate stage with family support.",
  "type": "mcq",
  "options": [
   "Support the plan because it will give each family member a regular break.",
   "Suggest enrolling the client in adult day care instead of rotating him among family homes.",
   "Recommend placing the client in a nursing home as soon as possible.",
   "Suggest that each family member keep him for one month instead of two weeks."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q002",
  "exam": 6,
  "src": 709,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse reviews the signs of hypoglycemia with the parents of a child with type 1 diabetes mellitus. The parents correctly understand the signs of hypoglycemia if they include which symptom?",
  "rationale": "Hypoglycemia triggers a sympathetic response that causes sweating, shakiness, tachycardia, pallor and irritability, along with neuroglycopenic signs such as confusion. Fruity breath reflects ketones in DKA, and excessive hunger and thirst are classic signs of hyperglycemia.",
  "type": "mcq",
  "options": [
   "Diaphoresis",
   "Fruity breath odor",
   "Polydipsia",
   "Polyphagia"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q003",
  "exam": 6,
  "src": 733,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "To prevent infection by autocontamination during the acute phase of recovery from multiple burns, which intervention is most important for the nurse to implement?",
  "rationale": "Autocontamination is the transfer of microorganisms from one area of the client's own body, such as an infected wound, to another, so each burn wound is cleansed and dressed separately with fresh sterile gloves. Avoiding shared equipment and isolation prevent cross-contamination between clients, and personal protective equipment protects against transfer from staff, but none of these prevents spread between the client's own wounds.",
  "type": "mcq",
  "options": [
   "Implement protective isolation.",
   "Avoid sharing equipment between clients.",
   "Dress each wound separately.",
   "Wear a gown, mask, and gloves for dressing changes."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q004",
  "exam": 6,
  "src": 821,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "While caring for a toddler receiving oxygen by face mask, the nurse observes that the child's lips and nares are dry and cracked. Which intervention should the nurse implement?",
  "rationale": "Oxygen dries the mucous membranes, and a water-soluble lubricant safely moisturizes the lips and nares. Petroleum-based products are flammable in an oxygen-enriched environment and can be aspirated, causing lipoid pneumonia, home remedies may be unsafe with oxygen, and lidocaine is not needed and can be swallowed by a toddler.",
  "type": "mcq",
  "options": [
   "Use a water-soluble lubricant on the affected oral and nasal mucosa.",
   "Use topical viscous lidocaine on the cracked lips.",
   "Apply petroleum jelly to the child's nose and lips.",
   "Ask the mother what she usually uses on the child's lips and nose."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q005",
  "exam": 6,
  "src": 698,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse observes an unlicensed assistive personnel (UAP) using an alcohol-based hand rub before taking a meal tray into a client's room. The UAP rubs both hands thoroughly for 2 minutes while standing at the door. Which action should the nurse take?",
  "rationale": "An alcohol-based hand rub is effective when the product covers all surfaces of the hands and fingers and is rubbed until dry, which takes about 20 to 30 seconds, so 2 minutes is unnecessary and inefficient. Soap and water is required only when hands are visibly soiled or after caring for clients with spore-forming organisms such as C. difficile, and a 5-minute rub is not required.",
  "type": "mcq",
  "options": [
   "Explain that the hand rub can be completed in less than 2 minutes.",
   "Tell the UAP that the hand rub should last at least 5 minutes.",
   "Commend the UAP for performing a very thorough hand rub.",
   "Instruct the UAP to wash with soap and water instead of using the rub."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q006",
  "exam": 6,
  "src": 459,
  "topic": "Maternity & Newborn",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "During the initial newborn assessment, the nurse finds that a newborn's heart rate is irregular. Which intervention should the nurse implement?",
  "rationale": "Sinus arrhythmia, a heart rate that varies with respiration, is a normal finding in newborns, so the nurse documents it and continues routine assessment. Notifying the pediatrician immediately, teaching about heart defects or applying oxygen would treat a normal variation as a pathologic condition, although persistent irregularity with other abnormal findings would require evaluation.",
  "type": "mcq",
  "options": [
   "Teach the parents about congenital heart defects.",
   "Notify the pediatrician immediately.",
   "Document the finding in the infant's record.",
   "Apply oxygen per nasal cannula at 3 L/min."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q007",
  "exam": 6,
  "src": 815,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "While assessing a client's chest tube, the nurse discovers continuous bubbling in the water-seal chamber of the drainage system. The client's vital signs are blood pressure 80/40 mm Hg, heart rate 120 beats/minute, respiratory rate 32 breaths/minute, and oxygen saturation 88%. Which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "Continuous bubbling in the water seal indicates an air leak from the lung, the insertion site or the drainage system, and hypotension, tachycardia, tachypnea and hypoxemia suggest worsening pneumothorax. The nurse provides oxygen, auscultates to identify diminished breath sounds and reinforces the occlusive dressing to seal a leak at the insertion site while notifying the provider. A nebulizer treats bronchospasm, which is not described, and pain medication can depress respirations in a client who is decompensating.",
  "type": "sata",
  "options": [
   "Give a PRN dose of pain medication.",
   "Auscultate bilateral lung fields.",
   "Reinforce the occlusive chest tube dressing.",
   "Administer a nebulizer treatment.",
   "Provide supplemental oxygen."
  ],
  "correct": [
   1,
   2,
   4
  ]
 },
 {
  "id": "hesi6q008",
  "exam": 6,
  "src": 290,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A postoperative female client has a prescription for morphine sulfate 10 mg IV every 3 hours for pain. One dose was given when she was admitted to the postanesthesia care unit (PACU), and 3 hours later she is again complaining of pain. Her current respiratory rate is 8 breaths/minute. Which action should the nurse take?",
  "rationale": "A respiratory rate of 8 breaths/minute indicates opioid-induced respiratory depression, so the nurse withholds morphine, stimulates the client and administers naloxone, an opioid antagonist, titrated to restore adequate breathing. Giving any dose of morphine would worsen respiratory depression. Relaxation breathing does not reverse the opioid's effect on the respiratory center.",
  "type": "mcq",
  "options": [
   "Administer half of the morphine dose.",
   "Coach the client in relaxation breathing.",
   "Administer the prescribed morphine dose.",
   "Administer naloxone IV."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q009",
  "exam": 6,
  "src": 52,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client in the postanesthesia care unit (PACU) has a score of 8 on the Aldrete postanesthesia scoring system. Which intervention should the nurse implement?",
  "rationale": "The Aldrete score rates activity, respiration, circulation, consciousness and oxygen saturation from 0 to 2 each, for a maximum of 10; a score of 8 to 10 generally indicates the client has recovered sufficiently from anesthesia to be transferred (some agencies require 9). A score of 8 is not low and does not require notifying anesthesia. Supplemental oxygen and frequent stimulation are interventions for a client who has not yet met recovery criteria.",
  "type": "mcq",
  "options": [
   "Administer oxygen at 6 L/min by face mask.",
   "Stimulate the client to cough and deep breathe every 5 minutes.",
   "Transfer the client to the surgical floor.",
   "Notify the anesthesia provider of the low score."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q010",
  "exam": 6,
  "src": 435,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "Before leaving the room of a confused client, the nurse notes that a half-bow knot was used to attach the client's wrist restraints to the movable portion of the bed frame. Which action should the nurse take before leaving the room?",
  "rationale": "Restraints are tied to the movable part of the bed frame with a quick-release knot, such as a half-bow, so they can be released immediately in an emergency, and the nurse confirms the knot releases easily. Square or double knots cannot be released quickly, ties attached to side rails can injure the client when the rail is lowered, and restraints should allow two fingers between the restraint and the wrist rather than being snug.",
  "type": "mcq",
  "options": [
   "Move the ties so the restraints are secured to the side rails.",
   "Ensure that the knot can be quickly released.",
   "Ensure that the restraints are snug against the client's wrists.",
   "Tie the knot with a double turn or square knot."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q011",
  "exam": 6,
  "src": 43,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client exposed to tuberculosis is scheduled to begin prophylactic treatment with isoniazid. Which information is most important for the nurse to note before administering the initial dose?",
  "rationale": "Isoniazid is hepatotoxic, and active liver disease such as hepatitis B is a contraindication or requires close evaluation, so the nurse should hold the dose and contact the provider. A PPD conversion is the reason prophylaxis is prescribed, and the length of exposure supports the need for treatment. A history of IV drug use raises adherence and infection concerns but does not contraindicate isoniazid.",
  "type": "mcq",
  "options": [
   "History of intravenous drug use",
   "Length of time of the exposure to tuberculosis",
   "Current diagnosis of hepatitis B",
   "Conversion of the client's PPD test from negative to positive"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q012",
  "exam": 6,
  "src": 141,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with Addison's disease becomes weak, confused, and dehydrated following an acute viral infection. Laboratory values include sodium 129 mEq/L, glucose 54 mg/dL, and potassium 5.3 mEq/L. When reporting these findings to the healthcare provider, the nurse anticipates a prescription for which intravenous medication?",
  "rationale": "The stress of infection has precipitated an Addisonian crisis, with hyponatremia, hypoglycemia and hyperkalemia, and IV hydrocortisone replaces the deficient glucocorticoid and provides mineralocorticoid activity. Insulin would worsen the hypoglycemia, and potassium chloride would worsen the hyperkalemia. An antibiotic is not indicated for a viral infection and does not correct the life-threatening hormone deficiency.",
  "type": "mcq",
  "options": [
   "Broad-spectrum antibiotic",
   "Potassium chloride",
   "Hydrocortisone",
   "Regular insulin"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q013",
  "exam": 6,
  "src": 465,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "Following a motor vehicle collision, a male adult in severe pain is brought to the emergency department by ambulance. His injured left leg is edematous, ecchymotic around the point of impact on the thigh, and shorter than his right leg. Based on these findings, the client is at greatest risk for which complication?",
  "rationale": "A shortened, swollen, bruised thigh indicates a femur fracture, and long-bone fractures carry the greatest risk of fat embolism syndrome, typically within 24 to 72 hours, presenting with hypoxemia, confusion and petechiae. Arterial ischemia, tissue necrosis and nerve damage can occur with fractures, but fat embolism is the most life-threatening complication specifically associated with femur fractures.",
  "type": "mcq",
  "options": [
   "Tissue necrosis",
   "Arterial ischemia",
   "Fat embolism",
   "Nerve damage"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q014",
  "exam": 6,
  "src": 85,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A client on a long-term mental health unit repeatedly takes their own pulse regardless of the circumstances. Which action should the nurse implement?",
  "rationale": "Compulsive rituals reduce anxiety, so interrupting or preventing them increases anxiety and can escalate the behavior; when the ritual is harmless, the nurse should allow it while gradually helping the client develop other coping strategies. Distraction and physically holding the client's hand block the ritual, and asking “why” is nontherapeutic because the client usually cannot explain the compulsion.",
  "type": "mcq",
  "options": [
   "Ask the client why they check their pulse.",
   "Distract the client to interrupt the ritual.",
   "Hold the client's hand to stop the behavior.",
   "Overlook the client's behavior."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q015",
  "exam": 6,
  "src": 512,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Sublingual nitroglycerin is administered to a male client with unstable angina who complains of crushing chest pain. Five minutes later, the client becomes nauseated and his blood pressure drops to 60/40 mm Hg. Which intervention should the nurse implement?",
  "rationale": "Nitroglycerin causes venous dilation and decreased preload, and severe hypotension, especially with right ventricular involvement, is treated with a rapid fluid bolus (with the legs elevated) to restore preload and perfusion. Another nitroglycerin dose or morphine would further lower the blood pressure, and high Fowler's position reduces venous return and worsens hypotension.",
  "type": "mcq",
  "options": [
   "Administer prescribed IV morphine sulfate.",
   "Administer a second sublingual nitroglycerin tablet.",
   "Infuse a rapid IV normal saline bolus.",
   "Place the client in high Fowler's position."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q016",
  "exam": 6,
  "src": 621,
  "topic": "Pediatrics",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is caring for a dying toddler with a severe birth anomaly. The parents are holding the child as death approaches. Which intervention is most important for the nurse?",
  "rationale": "As death approaches, the nurse mobilizes support for the family, such as the chaplain for spiritual care and the supervisor for any required notifications and resources, while allowing the parents uninterrupted time holding their child. Returning the child to the crib or taking frequent vital signs interrupts this time, and explaining postmortem procedures now is premature and insensitive.",
  "type": "mcq",
  "options": [
   "Ask the parents to return the child to the crib for continuous monitoring.",
   "Notify the nursing supervisor and hospital chaplain of the child's impending death.",
   "Explain the procedures that will be performed after the child dies.",
   "Obtain the child's vital signs every 15 minutes until death occurs."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q017",
  "exam": 6,
  "src": 88,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client presents to the labor and delivery unit screaming, “The baby is coming!” Which action should the nurse implement first?",
  "rationale": "The nurse first inspects the perineum to determine whether the presenting part is crowning and birth is imminent, which determines every next step, including preparing for an emergency delivery. Fetal heart rate assessment and notifying the provider are important but follow the rapid visual check. A vaginal exam is unnecessary if the head is visible and could delay preparation for birth.",
  "type": "mcq",
  "options": [
   "Observe the perineum",
   "Perform a sterile vaginal exam",
   "Call the healthcare provider",
   "Obtain the fetal heart rate"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q018",
  "exam": 6,
  "src": 138,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with acute pancreatitis is complaining of pain and nausea. Which interventions should the nurse implement? (Select all that apply.)",
  "rationale": "Severe pancreatitis can cause systemic complications, including shock, ARDS and acute kidney injury, so cardiopulmonary and renal function are monitored. Amylase and lipase levels confirm and track pancreatic inflammation, and the ultrasound identifies causes such as gallstones. A prone position does not stabilize organs; a side-lying, knee-to-chest or upright position eases pain. Oral intake is usually held initially to rest the pancreas and reduce secretion.",
  "type": "sata",
  "options": [
   "Position the client on the abdomen to provide organ stability.",
   "Encourage an increased intake of clear oral fluids.",
   "Review the client's abdominal ultrasound findings.",
   "Notify the healthcare provider of serum amylase and lipase levels.",
   "Monitor heart, lung, and kidney function."
  ],
  "correct": [
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi6q019",
  "exam": 6,
  "src": 169,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with leukemia undergoes a bone marrow biopsy. The client's laboratory values indicate thrombocytopenia. Based on this data, which nursing assessment is most important following the procedure?",
  "rationale": "A low platelet count increases the risk of bleeding at the biopsy site, so the nurse should apply pressure and frequently inspect the aspiration site for bleeding or hematoma. Temperature is monitored for infection, which develops later, and skin elasticity and urinary output relate to hydration rather than the immediate post-procedure risk created by thrombocytopenia.",
  "type": "mcq",
  "options": [
   "Assess the body temperature.",
   "Measure urinary output.",
   "Monitor skin elasticity.",
   "Observe the aspiration site."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q020",
  "exam": 6,
  "src": 449,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "During a women's health fair, which assignment is best for the practical nurse (PN) who is working with a registered nurse (RN)?",
  "rationale": "A bone density screening is a fast, noninvasive test that requires little preparation, which is within the PN's scope. Persuading a fearful client to have a colonoscopy, presenting a teaching class and explaining complex follow-up for prehypertension require the RN's higher-level teaching, assessment and communication skills.",
  "type": "mcq",
  "options": [
   "Present a class on breast self-examination.",
   "Encourage a woman at risk for cancer to obtain a colonoscopy.",
   "Prepare a woman for a bone density screening.",
   "Explain the follow-up needed for a client with prehypertension."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q021",
  "exam": 6,
  "src": 237,
  "topic": "GI & Nutrition",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "A male client tells the nurse he is concerned that he may have a stomach ulcer, because he is experiencing heartburn and a dull, gnawing pain that is relieved when he eats. What is the best response by the nurse?",
  "rationale": "Burning or gnawing epigastric pain relieved by eating is characteristic of a duodenal ulcer, so he should be evaluated, including testing for Helicobacter pylori. Telling him the symptoms are normal provides false reassurance. Aspirin damages the gastric mucosa and worsens ulcers, and milk stimulates rebound acid secretion and is no longer recommended.",
  "type": "mcq",
  "options": [
   "Reassure him that heartburn that is relieved by food is a normal finding in most adults.",
   "Recommend that he take aspirin with meals to relieve the pain more quickly.",
   "Encourage him to get a complete physical exam, since these symptoms are consistent with an ulcer.",
   "Suggest that he drink a glass of milk at bedtime to coat and protect the stomach."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q022",
  "exam": 6,
  "src": 514,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "Ten years after a female client was diagnosed with multiple sclerosis (MS), she is admitted to a community palliative care unit. Which intervention is most important for the nurse to include in the client's plan of care?",
  "rationale": "Palliative care focuses on relief of suffering and quality of life, so managing symptoms such as pain and anxiety is the priority. Intensive rehabilitation, new self-care skills and aggressive nutrition goals are not consistent with the comfort-focused goals of palliative care for advanced disease.",
  "type": "mcq",
  "options": [
   "Medicate as needed for pain and anxiety.",
   "Provide a high-calorie diet to promote weight gain.",
   "Begin an intensive physical therapy program.",
   "Teach the client intermittent self-catheterization."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q023",
  "exam": 6,
  "src": 248,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client with cancer who is receiving antineoplastic drugs is admitted to the hospital with severe thrombocytopenia. Which findings most often manifest this condition?",
  "rationale": "Platelets are needed for clotting, so thrombocytopenia presents with bleeding such as bruising, petechiae, gum bleeding and GI bleeding with hematemesis. Weight loss and alopecia are general effects of chemotherapy, weakness and activity intolerance reflect anemia, and sore throat with fever indicates infection from neutropenia.",
  "type": "mcq",
  "options": [
   "Weight loss and alopecia",
   "Weakness and activity intolerance",
   "Sore throat and fever",
   "Ecchymosis and hematemesis"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q024",
  "exam": 6,
  "src": 393,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An infant admitted for surgical repair of a ventricular septal defect (VSD) is irritable and diaphoretic, with jugular vein distention. Which prescription should the nurse administer first?",
  "rationale": "Irritability, diaphoresis and venous distention indicate heart failure from the left-to-right shunt, and digoxin increases myocardial contractility and slows the heart rate to improve cardiac output. Acetaminophen treats pain or fever, morphine is used for postoperative pain, and ampicillin is given for infection or surgical prophylaxis; none treats the heart failure.",
  "type": "mcq",
  "options": [
   "Ampicillin",
   "Morphine sulfate",
   "Acetaminophen",
   "Digoxin"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q025",
  "exam": 6,
  "src": 129,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with a liver abscess develops septic shock. A sepsis resuscitation bundle protocol is initiated, and the client receives a bolus of IV fluids. Which parameter should the nurse monitor to assess the effectiveness of the fluid bolus?",
  "rationale": "Fluid resuscitation in septic shock aims to restore perfusion, and a mean arterial pressure of 65 mm Hg or higher, along with improving lactate and urine output, shows that the bolus is effective. The white blood cell count and blood cultures track the infection and guide antibiotic therapy rather than the hemodynamic response to fluid. Oxygen saturation reflects gas exchange and may actually worsen if fluid overload occurs.",
  "type": "mcq",
  "options": [
   "Oxygen saturation",
   "White blood cell count",
   "Mean arterial pressure (MAP)",
   "Blood culture results"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q026",
  "exam": 6,
  "src": 67,
  "topic": "Cardiovascular",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client is admitted with an exacerbation of heart failure secondary to COPD. Which observations by the nurse require immediate intervention to reduce the likelihood of harm to this client? (Select all that apply.)",
  "rationale": "Clients with heart failure are often on fluid restriction, so an unrestricted full pitcher of water could worsen fluid overload. The supine position increases venous return and pulmonary congestion and worsens dyspnea; the client should be in semi- to high-Fowler's position. A bedside commode conserves energy, a saline lock provides IV access for diuretics, and a low-sodium diet is appropriate for heart failure.",
  "type": "sata",
  "options": [
   "A bedside commode is positioned near the bed",
   "A low-sodium diet tray was brought to the room",
   "A saline lock is present in the right forearm",
   "A full pitcher of water is on the bedside table",
   "The client is lying in a supine position in bed"
  ],
  "correct": [
   3,
   4
  ]
 },
 {
  "id": "hesi6q027",
  "exam": 6,
  "src": 146,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with atrial fibrillation receives a new prescription for dabigatran. Which instruction should the nurse include in this client's teaching plan?",
  "rationale": "Dabigatran is a direct thrombin inhibitor, and combining it with NSAIDs or aspirin significantly increases the risk of bleeding. Unlike warfarin, dabigatran does not require INR monitoring and is not affected by vitamin K intake. The capsules must be swallowed whole because opening them greatly increases absorption and bleeding risk.",
  "type": "mcq",
  "options": [
   "Open the capsules and sprinkle the contents on food.",
   "Have the INR checked weekly to adjust the dose.",
   "Avoid the use of nonsteroidal anti-inflammatory drugs (NSAIDs).",
   "Keep the daily intake of vitamin K consistent."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q028",
  "exam": 6,
  "src": 476,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "For the past 24 hours, the antidiarrheal agent diphenoxylate has been administered to a bedridden older client with infectious gastroenteritis. Which finding requires the nurse to take further action?",
  "rationale": "Tented skin turgor indicates dehydration, which is especially dangerous in older adults and can worsen with ongoing fluid losses, so the nurse must intervene with fluid replacement and report the finding; antimotility agents are also used cautiously in infectious diarrhea because they may prolong the infection. A soft, formed stool, fewer stools and no cramping show the medication is working.",
  "type": "mcq",
  "options": [
   "Tented skin turgor",
   "Decreased frequency of stools",
   "Absence of abdominal cramping",
   "Soft, formed stool this morning"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q029",
  "exam": 6,
  "src": 825,
  "topic": "Respiratory",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "While making rounds, the charge nurse notices that a young adult with asthma who was admitted yesterday is sitting on the side of the bed and leaning over the bedside table. The client is receiving oxygen at 2 L/minute by nasal cannula, is wheezing, and is using pursed-lip breathing. Which intervention should the nurse implement?",
  "rationale": "Wheezing and the need to lean forward and use pursed-lip breathing indicate bronchospasm, which requires an immediate bronchodilator by nebulizer. Leaning forward over the table is an effective position that promotes lung expansion, so the client should not be made to lie down. A resuscitation bag is not needed for a client who is breathing and compensating, and increasing oxygen does not relieve bronchospasm.",
  "type": "mcq",
  "options": [
   "Call for a manual resuscitation bag.",
   "Assist the client to lie back in bed.",
   "Increase the oxygen to 6 L/minute.",
   "Administer a nebulizer treatment."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q030",
  "exam": 6,
  "src": 317,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A young adult male being seen at the employee health clinic for an annual assessment tells the nurse that his mother was diagnosed with schizophrenia when she was his age and that life with her was very difficult. Which response is best for the nurse to provide?",
  "rationale": "The client's comment about his age suggests an unspoken fear, and asking directly whether he is worried clarifies his concern and invites him to express it. Referring him for genetic counseling or to a psychiatrist before exploring his feelings is premature, and telling him that his development has been affected is an unsupported, judgmental interpretation.",
  "type": "mcq",
  "options": [
   "Encourage the client to seek genetic counseling to determine his risk for mental illness.",
   "Inform the client that his mother's schizophrenia has affected his psychological development.",
   "Ask the client if he is worried about developing schizophrenia at the age his mother was diagnosed.",
   "Tell the client that mental illness runs in families, so he should see a psychiatrist."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q031",
  "exam": 6,
  "src": 176,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client with persistent low back pain has a prescription for a transcutaneous electrical nerve stimulation (TENS) unit. After the nurse applies the electrodes and turns on the power, the client reports a tingling sensation. How should the nurse respond?",
  "rationale": "TENS relieves pain by stimulating large sensory fibers and “closing the gate” to pain transmission, and a tingling sensation is expected once the unit is turned on. The nurse asks whether the sensation is comfortable, because an intensity that is too strong causes discomfort or muscle twitching. Decreasing the signal is indicated only if the client reports discomfort, and removing the electrodes or checking the gel is unnecessary for an expected sensation.",
  "type": "mcq",
  "options": [
   "Decrease the strength of the electrical signals.",
   "Remove the electrodes and observe for skin redness.",
   "Check the amount of gel coating on the electrodes.",
   "Determine if the sensation feels uncomfortable."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q032",
  "exam": 6,
  "src": 784,
  "topic": "Neuro & Sensory",
  "clientNeed": "Physiological Adaptation",
  "stem": "Which assessment finding in a client who is developing central pontine myelinolysis (osmotic demyelination syndrome) should the nurse report to the healthcare provider?",
  "rationale": "Osmotic demyelination from overly rapid correction of hyponatremia damages the pons, causing sudden dysphagia, dysarthria, altered consciousness and quadriparesis; dysphagia threatens the airway and must be reported at once. Visual disturbances, slowly progressive weakness and diarrhea are not characteristic of this condition.",
  "type": "mcq",
  "options": [
   "Sudden dysphagia",
   "Blurred visual fields",
   "Profuse diarrhea",
   "Gradual weakness over months"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q033",
  "exam": 6,
  "src": 798,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Safety & Infection Control",
  "stem": "Which intervention is most important for the nurse to include in the plan of care for an older woman with osteoporosis?",
  "rationale": "Osteoporotic bones fracture easily, and falls are the leading cause of hip fractures in older women, so fall precautions are the priority. Bed rest and avoiding weight-bearing accelerate bone loss, and dairy products are encouraged as a source of calcium and vitamin D.",
  "type": "mcq",
  "options": [
   "Maintain the client on strict bed rest.",
   "Restrict the client's intake of dairy products.",
   "Avoid weight-bearing activity.",
   "Place the client on fall precautions."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q034",
  "exam": 6,
  "src": 387,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An older male client is admitted to the urology unit with acute kidney injury caused by a postrenal obstruction. Which question best assists the nurse in obtaining relevant history?",
  "rationale": "Postrenal kidney injury results from obstruction of urine outflow, and in an older man, benign prostatic hyperplasia is the most common cause, so difficulty initiating the stream is highly relevant. A recent myocardial infarction relates to prerenal injury from poor perfusion, and antibiotics and blood products relate to intrarenal causes such as nephrotoxicity or transfusion reactions.",
  "type": "mcq",
  "options": [
   "“Have you received any blood products in the last year?”",
   "“Have you had a heart attack in the last 6 months?”",
   "“Have you had any difficulty starting your urinary stream?”",
   "“Have you taken any antibiotics recently?”"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q035",
  "exam": 6,
  "src": 564,
  "topic": "Pediatrics",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse assesses a child in 90-90 skeletal traction for a femur fracture. Where should the nurse assess for signs of compartment syndrome?",
  "rationale": "Compartment syndrome reduces circulation and nerve function distal to the swollen compartment, so the nurse assesses the lower leg and foot of the affected limb for pain with passive stretch, pallor, paresthesia, coolness, delayed capillary refill and weak pulses. The pin site is assessed for infection, the hip and buttock are proximal to the injury, and the unaffected leg is used only for comparison.",
  "type": "mcq",
  "options": [
   "The hip and buttock on the affected side",
   "The lower leg and foot of the affected extremity, distal to the injury",
   "The skeletal pin insertion site above the knee",
   "The thigh and foot of the unaffected leg"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q036",
  "exam": 6,
  "src": 218,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A group of nurse managers is asked to complete a needs assessment for a piece of equipment that will be expensed to the organization's budget. Which question is most important to consider when analyzing the cost-benefit of this equipment?",
  "rationale": "Cost-benefit analysis weighs the cost against the benefit gained, and equipment that can be shared by multiple departments delivers the greatest benefit to the organization relative to its cost. Maintenance needs, the purchase price and upgrade options are cost factors, but they do not measure the benefit side of the analysis.",
  "type": "mcq",
  "options": [
   "How many departments can use this equipment?",
   "Can the equipment be updated each year?",
   "Will the equipment require annual repair?",
   "Is the cost of the equipment reasonable?"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q037",
  "exam": 6,
  "src": 725,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A practical nurse (PN) is working with three registered nurses (RNs) caring for neurologically compromised clients. The client with which change in status is best to assign to the PN?",
  "rationale": "A rising temperature in a client with viral meningitis is an expected finding that is managed with antipyretics and cooling measures within the PN's scope. A falling GCS score, new pupil inequality after a craniotomy and declining vital capacity in Guillain-Barré syndrome signal neurologic or respiratory deterioration requiring RN assessment and intervention.",
  "type": "mcq",
  "options": [
   "Craniotomy yesterday with newly unequal pupils",
   "Viral meningitis with a temperature that increased from 101° F to 102° F",
   "Head injury with a Glasgow Coma Scale score that decreased from 14 to 11",
   "Guillain-Barré syndrome with a declining vital capacity"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q038",
  "exam": 6,
  "src": 646,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "The nurse is planning care for a client who admits having suicidal thoughts. Which client behavior indicates the highest risk that the client will act on these thoughts?",
  "rationale": "A sudden improvement in mood or affect in a depressed, suicidal client may mean the client has made a decision and a plan to die and now has the energy to carry it out, so this is a period of heightened risk requiring close observation. Sadness, poor self-care and withdrawal are symptoms of depression that require care, but they do not signal the same imminent risk.",
  "type": "mcq",
  "options": [
   "Neglects personal hygiene and has no appetite",
   "Expresses feelings of sadness and loneliness",
   "Lacks interest in activities with family and friends",
   "Begins to show sudden improvement in affect"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q039",
  "exam": 6,
  "src": 324,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "After a colon resection for colon cancer, a male client is moaning while being transferred to the postanesthesia care unit (PACU). Which intervention should the nurse implement first?",
  "rationale": "On arrival in the PACU, the nurse first assesses airway, breathing and circulation and obtains baseline vital signs, because moaning may reflect pain but also hypoxia or hemorrhage, and opioids should not be given before respiratory status is known. Checking the dressing is part of the assessment that follows, and reassurance does not identify the cause of the client's distress.",
  "type": "mcq",
  "options": [
   "Inspect the abdominal dressing for signs of bleeding.",
   "Administer the prescribed IV morphine for the client's pain.",
   "Reassure the client that the surgery is now completed.",
   "Determine the client's pulse, blood pressure, and respirations."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q040",
  "exam": 6,
  "src": 285,
  "topic": "Maternity & Newborn",
  "clientNeed": "Safety & Infection Control",
  "stem": "A nurse who works in the nursery is attending the vaginal birth of a term infant. Which action should the nurse complete before leaving the delivery room?",
  "rationale": "Matching identification bands must be applied to the mother and infant before they are separated or the infant leaves the delivery room to prevent mix-ups and infant abduction. Vitamin K, measurements and the first bath are routine newborn care that can be completed later, and bathing is delayed until the infant's temperature is stable.",
  "type": "mcq",
  "options": [
   "Administer the vitamin K injection to the infant.",
   "Place the identification bands on the infant and mother.",
   "Give the infant a complete bath under the radiant warmer.",
   "Obtain the infant's weight and length measurements."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q041",
  "exam": 6,
  "src": 738,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "Two clients ring their call bells at the same time requesting pain medication. Which action should the nurse implement first?",
  "rationale": "Assessing both clients with a standardized pain scale, along with the location and character of the pain, allows the nurse to prioritize based on severity and identify any pain that signals a complication. The order of the call bells or the time of the last dose does not reflect clinical need, and pain assessment cannot be delegated to the UAP.",
  "type": "mcq",
  "options": [
   "Ask the UAP to find out which client has more pain.",
   "Evaluate both clients' pain using a standardized pain scale.",
   "Medicate the client whose last dose was given longest ago.",
   "Medicate the client who rang the call bell first."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q042",
  "exam": 6,
  "src": 780,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "When washing soiled hands, the nurse first wets the hands and applies soap. In which sequence should the nurse complete the remaining actions?",
  "rationale": "After lathering, the nurse rubs palm to palm and then interlaces the fingers to clean between them, continuing for at least 20 seconds and rinsing with the fingertips pointed down. The hands are dried with a paper towel, and a dry paper towel is used to turn off the faucet so the clean hands are not recontaminated by the handle.",
  "type": "mcq",
  "options": [
   "Rub the hands palm to palm → Interlace the fingers → Dry the hands with a paper towel → Turn off the faucet with the paper towel",
   "Rub the hands palm to palm → Turn off the faucet → Interlace the fingers → Dry the hands with a paper towel",
   "Interlace the fingers → Turn off the faucet → Rub the hands palm to palm → Dry the hands with a paper towel",
   "Dry the hands with a paper towel → Rub the hands palm to palm → Interlace the fingers → Turn off the faucet"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q043",
  "exam": 6,
  "src": 399,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "An older adult male who had an abdominal cholecystectomy has become increasingly confused and disoriented over the past 24 hours. He is found wandering into another client's room and is returned to his room by the unlicensed assistive personnel (UAP). Which actions should the nurse take? (Select all that apply.)",
  "rationale": "New postoperative confusion may signal a complication such as hypoxia, infection or electrolyte imbalance, so the nurse assesses oxygenation, reviews electrolytes and reports the change to the provider. Raising all four rails increases injury risk if the client climbs over them, and restraints are a last resort. Fall risk assessment is a nursing responsibility that cannot be delegated to the UAP.",
  "type": "sata",
  "options": [
   "Report the mental status change to the healthcare provider.",
   "Apply soft upper-limb restraints and raise all four bed rails.",
   "Assess the client's breath sounds and oxygen saturation.",
   "Review the client's most recent serum electrolyte values.",
   "Assign the UAP to reassess the client's risk for falls."
  ],
  "correct": [
   0,
   2,
   3
  ]
 },
 {
  "id": "hesi6q044",
  "exam": 6,
  "src": 390,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "An infant is placed in a radiant warmer immediately after birth. At one hour of age, the nurse finds the infant tachypneic and hypotonic. What is the first action the nurse should take?",
  "rationale": "Newborns use glucose rapidly during the transition to extrauterine life, and tachypnea, hypotonia, jitteriness and poor feeding are signs of neonatal hypoglycemia, so a heel-stick glucose is checked first so that treatment can begin. The infant is already under a radiant warmer, so changing the temperature or adding blankets does not address the likely cause, and the provider is notified after the assessment data are obtained.",
  "type": "mcq",
  "options": [
   "Wrap the infant in two warmed blankets.",
   "Increase the temperature of the radiant warmer.",
   "Determine the infant's blood glucose level.",
   "Notify the healthcare provider of the findings."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q045",
  "exam": 6,
  "src": 316,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A young adult male was admitted 36 hours ago with a head injury from a motorcycle crash. In the last 4 hours, his urine output has increased to over 200 mL/hour. Before reporting this finding to the healthcare provider, which intervention should the nurse implement?",
  "rationale": "Polyuria after a head injury suggests diabetes insipidus from damage to the posterior pituitary or hypothalamus, and a low urine osmolality with a high serum osmolality (and hypernatremia) supports the diagnosis, so the nurse reviews these values to give the provider complete data. Changing the IV rate or giving desmopressin requires a prescription based on that evaluation, and restricting fluids would worsen dehydration.",
  "type": "mcq",
  "options": [
   "Restrict the client's oral fluids to 1,000 mL per day.",
   "Administer a PRN dose of desmopressin as prescribed.",
   "Evaluate the urine osmolality and serum osmolality values.",
   "Increase the IV infusion rate to match the urine output."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q046",
  "exam": 6,
  "src": 184,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with superficial burns to the face, neck, and hands from a house fire is admitted to the emergency department. Which assessment finding indicates to the nurse that the client should be monitored for carbon monoxide poisoning?",
  "rationale": "Carbon monoxide binds hemoglobin far more tightly than oxygen, forming carboxyhemoglobin, which can produce a cherry-red color of the skin and mucous membranes; carboxyhemoglobin levels confirm the diagnosis. Stridor and carbonaceous sputum indicate inhalation injury to the airway. Pulse oximetry cannot distinguish carboxyhemoglobin from oxyhemoglobin and often reads falsely normal in CO poisoning, so a low reading is not the indicator.",
  "type": "mcq",
  "options": [
   "Expiratory stridor and nasal flaring",
   "Cherry-red mucous membranes",
   "Carbonaceous particles in the sputum",
   "Pulse oximetry reading of 80 percent"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q047",
  "exam": 6,
  "src": 238,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client was transferred yesterday from the emergency department to the telemetry unit because he had ST depression and chest pain that resolved. When his monitor alarms for ventricular tachycardia (VT), which action should the nurse take first?",
  "rationale": "Artifact from movement such as brushing teeth can mimic VT on the monitor, and treatment depends on whether the client has a pulse, so the nurse first assesses responsiveness, breathing and pulse. Pulseless VT requires CPR, calling the code team and defibrillation, but compressions or shocks are never started without first assessing the client.",
  "type": "mcq",
  "options": [
   "Immediately initiate chest compressions.",
   "Determine the client's responsiveness and respirations.",
   "Notify the emergency response team.",
   "Bring the crash cart to the room to defibrillate the client."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q048",
  "exam": 6,
  "src": 807,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "Which medication should the nurse anticipate administering to a client diagnosed with myxedema coma?",
  "rationale": "Myxedema coma is life-threatening severe hypothyroidism with hypothermia, bradycardia, hypoventilation and decreased consciousness, and it is treated with IV thyroid hormone (levothyroxine). Hypnotics and sedatives are contraindicated because the client is extremely sensitive to them. IV hydrocortisone is often given with thyroid hormone to cover possible adrenal insufficiency, but it does not treat the hormone deficiency, and vitamin K reverses warfarin.",
  "type": "mcq",
  "options": [
   "Subcutaneous vitamin K",
   "Oral hypnotic agents",
   "An intravenous bolus of hydrocortisone only",
   "Intravenous thyroid hormone"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q049",
  "exam": 6,
  "src": 687,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse mixes 250 mg of dobutamine in 250 mL of D5W and plans to administer the solution at 15 mcg/kg/minute to a client who weighs 110 pounds. How many mL/hour should the nurse set the infusion pump to deliver? (Enter numeric value only. If rounding is required, round to the nearest whole number.)",
  "rationale": "Convert weight: 110 lb ÷ 2.2 = 50 kg. Dose: 15 mcg/kg/minute × 50 kg = 750 mcg/minute, or 750 × 60 = 45,000 mcg/hour. Concentration: 250 mg = 250,000 mcg ÷ 250 mL = 1,000 mcg/mL. Rate: 45,000 ÷ 1,000 = 45 mL/hour.",
  "type": "fill",
  "answer": 45,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi6q050",
  "exam": 6,
  "src": 222,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "A male client arrives at the clinic with a severe sunburn and explains that he did not use sunscreen because it was an overcast day. Large blisters are noted over his back and chest, and his shirt is soaked with serosanguineous fluid. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Extensive blistering represents partial-thickness burns, and large fluid losses through the damaged skin can cause hypovolemia; hypotension indicates fluid volume deficit progressing toward shock and requires immediate fluid replacement. Fever, chills, dizziness and headache commonly accompany severe sunburn and are treated, but they do not indicate the same threat to circulation.",
  "type": "mcq",
  "options": [
   "Hypotension",
   "Dizziness",
   "Fever and chills",
   "Headache"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q051",
  "exam": 6,
  "src": 537,
  "topic": "Pediatrics",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The healthcare provider prescribes ceftazidime 35 mg IM every 8 hours for an infant. The 500 mg vial is labeled with instructions to add 5.3 mL of diluent to provide a concentration of 100 mg/mL. How many mL should the nurse administer for each dose? (Enter numeric value only. If rounding is required, round to the nearest tenth.)",
  "rationale": "Using D/H × Q: 35 mg ÷ 100 mg × 1 mL = 0.35 mL, which rounds to 0.4 mL to the nearest tenth. (In practice, a dose this small is drawn up in a tuberculin syringe so it can be measured to the hundredth.)",
  "type": "fill",
  "answer": 0.4,
  "unit": "mL",
  "tolerance": 0.01
 },
 {
  "id": "hesi6q052",
  "exam": 6,
  "src": 594,
  "topic": "Maternity & Newborn",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is assessing a primigravida at 39 weeks' gestation during a weekly prenatal visit. Which finding is most important for the nurse to report to the healthcare provider?",
  "rationale": "The normal fetal heart rate is 110 to 160 beats/minute, and a rate of 200 indicates fetal tachycardia, which may signal fetal distress, maternal fever or infection, or a fetal dysrhythmia, so it requires prompt evaluation. A fundal height within a few centimeters of gestational age, a normal blood pressure and Braxton Hicks contractions are expected at term.",
  "type": "mcq",
  "options": [
   "Fetal heart rate of 200 beats/minute",
   "Irregular Braxton Hicks contractions",
   "Fundal height of 37 centimeters",
   "Blood pressure of 118/76 mm Hg"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q053",
  "exam": 6,
  "src": 34,
  "topic": "Mental Health",
  "clientNeed": "Safety & Infection Control",
  "stem": "A client arrives in the emergency center with a blood alcohol level of 500 mg/dL. When transferred to the observation unit, the client becomes demanding and aggressive and shouts at the staff. Which assessment finding is most important for the nurse to identify in the first 24 hours?",
  "rationale": "The aggressive, demanding behavior and escalating agitation represent an immediate safety risk to the client and staff, so threats of harm must be identified and addressed first with de-escalation and safety measures. Decreased appetite and difficulty walking are expected effects of intoxication. Nausea and elevated blood pressure may signal early withdrawal and must be monitored, but the threat of violence is the most immediate concern.",
  "type": "mcq",
  "options": [
   "Nausea and elevated blood pressure",
   "Decreased appetite",
   "Difficulty walking",
   "Agitation and threats to harm staff"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q054",
  "exam": 6,
  "src": 829,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "While removing an IV catheter from the hand of a client who has AIDS, the nurse is stuck with the needle. After washing the puncture site with soap and water, which action should the nurse take?",
  "rationale": "After a needlestick, the nurse washes the site and immediately reports the exposure to employee health so that the source and the nurse can be evaluated and post-exposure prophylaxis, which is most effective when started within hours, can begin. Caustic agents such as bleach damage tissue, squeezing the wound is not recommended, and waiting for symptoms delays prophylaxis.",
  "type": "mcq",
  "options": [
   "Apply bleach to the puncture site.",
   "Notify the employee health nurse.",
   "Squeeze the puncture site to express blood.",
   "Wait to see whether symptoms of infection develop."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q055",
  "exam": 6,
  "src": 704,
  "topic": "Respiratory",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse prepares to insert an oral airway by first measuring for the correct size. Which approach is correct for measuring the airway size?",
  "rationale": "The correct oral airway length equals the distance from the corner of the mouth to the earlobe or angle of the jaw; an airway that is too small can push the tongue back into the pharynx, and one that is too large can obstruct the airway. The nose-to-earlobe-to-xiphoid measurement is used for a nasogastric tube, and the incisor-to-chin and little-finger estimates are not used for airway sizing.",
  "type": "mcq",
  "options": [
   "Measure from the client's upper incisors to the tip of the chin.",
   "Hold the airway against the face from the corner of the mouth to the earlobe or angle of the jaw.",
   "Measure from the tip of the nose to the earlobe to the xiphoid process.",
   "Select an airway equal in length to the client's little finger."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q056",
  "exam": 6,
  "src": 37,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving an infusion labeled Heparin Sodium 25,000 units in 5% Dextrose Injection 500 mL at 14 mL/hour. A prescription is received to change the rate of the infusion to 900 units of heparin per hour. The nurse should set the infusion pump to deliver how many mL/hour? (Enter numeric value only.)",
  "rationale": "Find the concentration: 25,000 units ÷ 500 mL = 50 units/mL. Then divide the prescribed dose by the concentration: 900 units/hour ÷ 50 units/mL = 18 mL/hour. Equivalently, (900 × 500) ÷ 25,000 = 450,000 ÷ 25,000 = 18 mL/hour.",
  "type": "fill",
  "answer": 18,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi6q057",
  "exam": 6,
  "src": 89,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client receives a new prescription for simvastatin 5 mg PO daily at bedtime. Which action should the nurse take?",
  "rationale": "Cholesterol synthesis peaks at night, so simvastatin is appropriately taken in the evening or at bedtime, and 5 mg is a safe starting dose that can be given with water. There is no reason to move the dose to the morning. Grapefruit juice inhibits the metabolism of simvastatin and increases the risk of myopathy, and the medication does not need to be held for a lipid panel.",
  "type": "mcq",
  "options": [
   "Contact the healthcare provider to change the dose to the morning.",
   "Give the medication with grapefruit juice to enhance absorption.",
   "Hold the medication until a baseline lipid panel is drawn.",
   "Administer the medication as prescribed with a glass of water."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q058",
  "exam": 6,
  "src": 119,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client with a cervical spinal cord injury (SCI) has Crutchfield tongs and skeletal traction applied as a method of closed reduction. Which intervention is most important for the nurse to include in the client's plan of care?",
  "rationale": "Skeletal pins penetrate the skull, so meticulous daily pin-site care per agency protocol is essential to prevent osteomyelitis or meningitis. Traction weights must hang freely and must never be removed or rested on the bed or frame, because this releases the traction needed to maintain spinal alignment. Only the provider adjusts the tongs; loosening them could cause loss of reduction.",
  "type": "mcq",
  "options": [
   "Remove the traction weights briefly each time the client is repositioned.",
   "Provide daily care of the tong insertion sites using saline and antibiotic ointment.",
   "Loosen the tongs slightly whenever the client reports a headache.",
   "Rest the traction weights on the bed frame while bathing the client."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q059",
  "exam": 6,
  "src": 758,
  "topic": "Pediatrics",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "While checking a third-grader's height and weight, the school nurse notes that the measurements have not changed in the last year. The child takes daily vitamins, albuterol, and methylphenidate for attention-deficit/hyperactivity disorder (ADHD). Which intervention should the nurse implement?",
  "rationale": "Stimulants such as methylphenidate suppress appetite and can slow growth, and a school-age child normally gains about 2 inches and 4 to 7 pounds a year, so no growth in a year requires evaluation by the provider. The nurse cannot discontinue a prescribed medication, attributing the finding to normal variation delays assessment, and extra vitamins do not address the problem.",
  "type": "mcq",
  "options": [
   "Tell the parents to stop the methylphenidate.",
   "Explain that growth spurts vary in school-age children.",
   "Refer the child to the family healthcare provider.",
   "Recommend increasing the child's daily vitamin dose."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q060",
  "exam": 6,
  "src": 160,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client with gestational diabetes at 39 weeks' gestation is in the second stage of labor. After delivery of the fetal head, the nurse recognizes that shoulder dystocia is occurring. Which intervention should the nurse implement first?",
  "rationale": "The McRoberts maneuver, sharply flexing the thighs against the abdomen, straightens the sacrum and increases the functional pelvic diameter, and it is the first-line maneuver for shoulder dystocia; suprapubic (not fundal) pressure is often added. A hands-and-knees position is an alternative if McRoberts fails, and a cesarean birth after the head has delivered is a last resort. Fundal pressure impacts the shoulder further against the pubic bone and is contraindicated.",
  "type": "mcq",
  "options": [
   "Encourage the client to move to a hands-and-knees position.",
   "Lower the head of the bed and apply fundal pressure.",
   "Assist the client to sharply flex her thighs up against her abdomen.",
   "Prepare the client for an emergency cesarean birth."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q061",
  "exam": 6,
  "src": 599,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse is assigned to care for clients on a medical unit. Based on the shift report, which client situation warrants the nurse's immediate attention?",
  "rationale": "A beeping pump during a chemotherapy infusion may signal occlusion or infiltration, and extravasation of a vesicant can cause severe tissue damage, while children are also at greater risk for fluid imbalance from infusion errors. Diarrhea is expected with Crohn's disease, a slightly late tray can be managed if glucose is monitored, and oral analgesics often take longer than 30 minutes to reach full effect.",
  "type": "mcq",
  "options": [
   "A 10-year-old receiving chemotherapy whose infusion pump is beeping",
   "A young adult with Crohn's disease who reports having diarrheal stools",
   "A teenager who reports continued pain 30 minutes after an oral analgesic",
   "An older adult with type 2 diabetes whose breakfast tray is 20 minutes late"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q062",
  "exam": 6,
  "src": 358,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult client presents to the clinic with large draining ulcers on both lower legs that are characteristic of Kaposi's sarcoma lesions. The client is accompanied by two family members. Which action should the nurse take?",
  "rationale": "The client's privacy must be protected, so the family is asked to wait outside while the nurse obtains a history that may include sensitive information about HIV risk and status. Gloves are worn for contact with body fluids under standard precautions, not for casual touch. HIV testing requires the client's informed consent, and the physical assessment can be completed after the family leaves the room.",
  "type": "mcq",
  "options": [
   "Obtain a blood sample to determine if the client is HIV positive.",
   "Ask the family members to wear gloves when touching the client.",
   "Complete a head-to-toe assessment to identify other signs of HIV.",
   "Send the family to the waiting area while the client's history is taken."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q063",
  "exam": 6,
  "src": 25,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A child is admitted to the pediatric unit with sickle cell crisis. When the nurse walks into the room, the unlicensed assistive personnel (UAP) is encouraging the child to stay in bed in the supine position. Which action should the nurse implement?",
  "rationale": "Elevating the head of the bed promotes lung expansion and oxygenation, which reduces further sickling and the risk of acute chest syndrome; bed rest itself is appropriate to lower oxygen demand. Cold causes vasoconstriction and increases sickling, so warm compresses are used instead. Hydration is a mainstay of treatment because it reduces blood viscosity, and ambulation increases oxygen consumption during a crisis.",
  "type": "mcq",
  "options": [
   "Reposition the child with the head of the bed elevated.",
   "Encourage the child to walk in the hallway.",
   "Limit oral fluids to reduce the workload on the heart.",
   "Apply ice packs to the child's painful joints."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q064",
  "exam": 6,
  "src": 24,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Safety & Infection Control",
  "stem": "A 350-bed acute care hospital declares an internal disaster because the emergency generators malfunctioned during a city-wide power failure. The unlicensed assistive personnel (UAPs) working on a general medical unit ask the charge nurse what they should do first. Which instruction should the charge nurse provide to these UAPs?",
  "rationale": "During an internal disaster the first goal is to keep clients safe and accounted for, so clients should remain in their rooms where staff can locate and assist them until further instructions come from the incident command. Evacuation is ordered by the incident commander, not started independently. Unplugging equipment could disconnect life-sustaining devices, and UAPs should stay on their own unit unless they are reassigned through the disaster plan.",
  "type": "mcq",
  "options": [
   "Unplug all electrical equipment in the clients' rooms.",
   "Begin evacuating ambulatory clients to the parking lot.",
   "Report to the emergency department to assist with triage.",
   "Tell all their assigned clients to stay in their rooms."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q065",
  "exam": 6,
  "src": 666,
  "topic": "Endocrine",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is preparing to discharge an older female client who is at risk for hypocalcemia. Which information should the nurse include in the discharge teaching? (Select all that apply.)",
  "rationale": "Muscle twitching, tetany and seizures are signs of hypocalcemia that must be reported, vitamin D is needed for intestinal calcium absorption, yogurt is a calcium-rich food, and a diet record helps ensure adequate intake. Seafood such as canned fish with bones is actually a source of calcium, and shellfish is restricted only for allergy.",
  "type": "sata",
  "options": [
   "Take vitamin D along with calcium daily.",
   "Keep a diet record to monitor calcium intake.",
   "Low-fat yogurt is a good source of calcium.",
   "Report any muscle twitching or seizures.",
   "Avoid seafood, particularly shellfish."
  ],
  "correct": [
   0,
   1,
   2,
   3
  ]
 },
 {
  "id": "hesi6q066",
  "exam": 6,
  "src": 395,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "An IV antibiotic is prescribed for a client with a postoperative infection. The medication is to be given in 4 divided doses. Which schedule is best for administering this prescription?",
  "rationale": "Four doses spread evenly over 24 hours, every 6 hours, maintain a consistent therapeutic serum level of the antibiotic. The other schedules cluster the doses during waking hours, every 4 hours, which produces peaks during the day and a long gap overnight when levels fall below the therapeutic range.",
  "type": "mcq",
  "options": [
   "1000, 1600, 2200, 0400",
   "0900, 1300, 1700, 2100",
   "0600, 1000, 1400, 1800",
   "0800, 1200, 1600, 2000"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q067",
  "exam": 6,
  "src": 595,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse is assessing an older, bedridden client. Which finding indicates that the turning and positioning schedule is effective in protecting the client's skin?",
  "rationale": "Reactive hyperemia that fades within minutes after pressure is relieved shows that the tissue tolerated the pressure, indicating the turning schedule is adequate. Redness persisting more than 30 minutes suggests tissue injury and the need for more frequent turning, and a bedridden client's comfort or lack of complaints is not a reliable measure of skin protection.",
  "type": "mcq",
  "options": [
   "The client does not complain of pressure or pain after being turned.",
   "The client says that he or she feels better after being turned and positioned.",
   "Reddened skin areas disappear within 15 minutes of being turned and positioned.",
   "Only small areas of redness remain longer than 30 minutes after turning."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q068",
  "exam": 6,
  "src": 193,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A confused older client with Alzheimer's disease becomes incontinent of urine when attempting to find the bathroom. Which action should the nurse implement?",
  "rationale": "A scheduled toileting program with an easily accessible bedside commode accommodates the client's cognitive deficits and reduces functional incontinence. A confused client is unlikely to remember to use a call button. Relying on incontinence briefs promotes dependence and skin breakdown, and an indwelling catheter increases the risk of infection and is not indicated for functional incontinence.",
  "type": "mcq",
  "options": [
   "Instruct the client to use the call button when a bedpan is needed.",
   "Apply adult incontinence briefs after each attempt to void.",
   "Assist the client to a bedside commode every two hours.",
   "Check the residual urine volume using an indwelling urinary catheter."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q069",
  "exam": 6,
  "src": 498,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Physiological Adaptation",
  "stem": "In planning strategies to reduce a client's risk for complications following orthopedic surgery, the nurse recognizes which pathology as the underlying cause of osteomyelitis?",
  "rationale": "Osteomyelitis is an infection of the bone, most often caused by Staphylococcus aureus introduced during surgery or trauma or spread through the bloodstream, so aseptic technique and prophylactic antibiotics reduce its risk. Inflammation occurs as a result of the infection but is not the primary cause, and it is not a malignant or autoimmune process.",
  "type": "mcq",
  "options": [
   "Infectious process",
   "Metastatic process",
   "Autoimmune disorder",
   "Inflammatory disorder"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q070",
  "exam": 6,
  "src": 452,
  "topic": "Cardiovascular",
  "clientNeed": "Basic Care & Comfort",
  "stem": "During discharge teaching, an overweight client with heart failure (HF) is asked to make a grocery list for the nurse to review. Which food choices on the list should the nurse encourage? (Select all that apply.)",
  "rationale": "Plain air-popped popcorn and unsalted almonds are low-sodium snacks that provide fiber and, for almonds, heart-healthy fats, which fit a sodium-restricted, weight-conscious diet. Fruit in heavy syrup is high in sugar and calories, cheddar cheese is high in sodium and saturated fat, and potato chips are high in sodium and fat even when lightly salted.",
  "type": "sata",
  "options": [
   "Canned fruit in heavy syrup",
   "Lightly salted potato chips",
   "Plain, air-popped popcorn",
   "Cheddar cheese cubes",
   "Natural whole almonds"
  ],
  "correct": [
   2,
   4
  ]
 },
 {
  "id": "hesi6q071",
  "exam": 6,
  "src": 561,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The nurse applies a blood pressure cuff around a client's left thigh. To measure the client's blood pressure, where should the nurse place the diaphragm of the stethoscope?",
  "rationale": "For a thigh blood pressure, the cuff is placed on the lower third of the thigh with the client prone or with the knee slightly flexed, and the stethoscope is placed over the popliteal artery behind the knee, which lies distal to the cuff. The femoral artery lies above the cuff, and the pedal and posterior tibial arteries are used to palpate distal pulses rather than to auscultate a thigh pressure.",
  "type": "mcq",
  "options": [
   "Over the popliteal artery in the popliteal fossa behind the knee",
   "Over the posterior tibial artery behind the medial ankle",
   "Over the dorsalis pedis artery on top of the left foot",
   "Over the femoral artery in the left groin crease"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q072",
  "exam": 6,
  "src": 315,
  "topic": "Endocrine",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A young adult male is admitted to the emergency department with diabetic ketoacidosis (DKA). His pH is 7.25, HCO3 is 12 mEq/L, and blood glucose is 310 mg/dL. Which action should the nurse implement?",
  "rationale": "Osmotic diuresis in DKA causes severe dehydration, so the first treatment is isotonic fluid replacement with 0.9% normal saline, followed by an IV regular insulin infusion. Bicarbonate is not given unless the pH is below about 6.9 to 7.0. Dextrose is added only when the glucose falls to about 200 to 250 mg/dL, and insulin in DKA is given IV because subcutaneous absorption is unreliable in a dehydrated client.",
  "type": "mcq",
  "options": [
   "Begin an infusion of 5% dextrose in water.",
   "Infuse 0.9% sodium chloride (normal saline).",
   "Administer sodium bicarbonate by IV push.",
   "Give regular insulin subcutaneously every hour."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q073",
  "exam": 6,
  "src": 685,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The nurse makes a supervisory home visit to observe an unlicensed assistive personnel (UAP) providing personal care for a client with Alzheimer's disease. The nurse observes that whenever the client becomes upset, the UAP changes the subject. Which action should the nurse take in response to this observation?",
  "rationale": "Redirection, changing the subject or activity when a client with dementia becomes agitated, is an effective strategy because the client cannot process reasoning or confrontation, so the nurse should reinforce this behavior. Offering many choices can overwhelm and frustrate the client, assertive or confrontational communication can increase agitation, and the UAP's care does not need to be taken over.",
  "type": "mcq",
  "options": [
   "Meet with the UAP later to role-model more assertive communication techniques.",
   "Tell the UAP to offer more choices during personal care to prevent anxiety.",
   "Assume care of the client to ensure that effective communication is maintained.",
   "Affirm that the UAP is using an effective strategy to reduce the client's anxiety."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q074",
  "exam": 6,
  "src": 230,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A male client returns to the surgical unit following a left nephrectomy and is medicated with morphine. His dressing has a small amount of bloody drainage, and a Jackson-Pratt drain is in place. Which intervention is most important for the nurse to include in this client's plan of care?",
  "rationale": "After nephrectomy, the client depends on the remaining kidney, and hourly urine output (at least 30 mL/hour) is the key indicator of its function and of adequate perfusion, including early detection of hemorrhage. Muscle aches from positioning are expected, and drain output and daily weights are monitored but are less critical than hourly assessment of renal function.",
  "type": "mcq",
  "options": [
   "Monitor urine output hourly.",
   "Assess for back muscle aches.",
   "Record drainage from the drain.",
   "Obtain body weight daily."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q075",
  "exam": 6,
  "src": 202,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A female client presents to the emergency department and tells the nurse that she was raped last night. Which question is most important for the nurse to ask?",
  "rationale": "Collecting forensic evidence is an immediate priority, and bathing, showering, douching or changing clothes can destroy evidence, so the nurse asks whether the client has bathed. The identity of the assailant and whether a police report was filed are matters for law enforcement and the client's choice, and safety at home is assessed during discharge planning; none is as time-sensitive as preserving evidence.",
  "type": "mcq",
  "options": [
   "“Is the place where you live a safe place?”",
   "“Have you taken a bath or shower since the rape occurred?”",
   "“Do you know the person who raped you?”",
   "“Did you report the rape to the police department?”"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q076",
  "exam": 6,
  "src": 55,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is admitted to a medical unit with gastritis and chronic heavy alcohol use. Which medication should the nurse administer to prevent the development of Wernicke's syndrome?",
  "rationale": "Chronic alcohol use depletes thiamine, and thiamine replacement prevents Wernicke encephalopathy, the acute triad of confusion, ataxia and ocular abnormalities such as nystagmus. Lorazepam treats alcohol withdrawal, famotidine reduces gastric acid for gastritis, and atenolol may blunt withdrawal-related tachycardia, but none of these prevents Wernicke's syndrome.",
  "type": "mcq",
  "options": [
   "Famotidine (Pepcid)",
   "Thiamine (vitamin B1)",
   "Lorazepam (Ativan)",
   "Atenolol (Tenormin)"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q077",
  "exam": 6,
  "src": 783,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "In which sequence should the nurse perform the following actions when auscultating anterior breath sounds?",
  "rationale": "Anterior auscultation proceeds from the top down, comparing side to side: bronchial (tracheal) sounds are heard over the trachea, bronchovesicular sounds over the mainstem bronchi at the first and second intercostal spaces, and vesicular sounds over the peripheral lung fields, displacing breast tissue so the stethoscope rests directly on the chest wall. Findings are documented after the assessment is complete.",
  "type": "mcq",
  "options": [
   "Auscultate bronchovesicular sounds side to side at the 1st and 2nd intercostal spaces → Document normal sounds and the location of adventitious sounds → Displace breast tissue and auscultate vesicular sounds directly on the chest wall → Auscultate bronchial sounds over the trachea above the sternal notch",
   "Displace breast tissue and auscultate vesicular sounds directly on the chest wall → Document normal sounds and the location of adventitious sounds → Auscultate bronchial sounds over the trachea above the sternal notch → Auscultate bronchovesicular sounds side to side at the 1st and 2nd intercostal spaces",
   "Document normal sounds and the location of adventitious sounds → Auscultate bronchial sounds over the trachea above the sternal notch → Displace breast tissue and auscultate vesicular sounds directly on the chest wall → Auscultate bronchovesicular sounds side to side at the 1st and 2nd intercostal spaces",
   "Auscultate bronchial sounds over the trachea above the sternal notch → Auscultate bronchovesicular sounds side to side at the 1st and 2nd intercostal spaces → Displace breast tissue and auscultate vesicular sounds directly on the chest wall → Document normal sounds and the location of adventitious sounds"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q078",
  "exam": 6,
  "src": 492,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "When determining the client's position for insertion of an indwelling urinary catheter, it is most important for the nurse to recognize which client condition?",
  "rationale": "Catheter insertion is usually performed with the client supine, which a client with orthopnea cannot tolerate, so the nurse must adapt the position, for example by elevating the head of the bed or using a side-lying position. Urinary pH and fever do not affect positioning, and ascites alone does not prevent the client from lying back.",
  "type": "mcq",
  "options": [
   "High urinary pH",
   "Orthopnea",
   "Abdominal ascites",
   "Fever"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q079",
  "exam": 6,
  "src": 360,
  "topic": "Mental Health",
  "clientNeed": "Psychosocial Integrity",
  "stem": "An adult client with severe depression was admitted to the psychiatric unit yesterday evening. His spouse states that although the client ran regularly until a year ago, he now sits and watches television most of the day. Which intervention is most important for the nurse to include in this client's plan of care for today?",
  "rationale": "Clients with severe depression have low energy and poor concentration, and identifying simple, achievable goals for the day provides structure and involves the client in care. A team sport is too demanding at this stage, and self-esteem groups and affirmations are introduced as the depression begins to lift.",
  "type": "mcq",
  "options": [
   "Encourage the client to play a team sport for one hour.",
   "Assist the client in identifying goals for the day.",
   "Schedule the client for a group that focuses on self-esteem.",
   "Help the client develop a list of daily affirmations."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q080",
  "exam": 6,
  "src": 532,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The healthcare provider explains the risks and benefits of a scheduled surgical procedure through an interpreter to a female client who does not speak English. The client gives verbal consent, and the provider leaves, asking the nurse to witness the signature on the consent form. The client and interpreter then speak together for another 2 minutes until the interpreter concludes, “She says it is OK.” Which action should the nurse take next?",
  "rationale": "A lengthy exchange summarized as “she says it is OK” may mean the client had questions or concerns, and the nurse must ensure that the consent is truly informed and voluntary before witnessing it, so the interpreter is asked to report the full conversation; if the client has unresolved questions, the provider is called back. Proceeding with the signature or documentation without knowing what was discussed could result in an invalid consent.",
  "type": "mcq",
  "options": [
   "Have the client sign the consent form because she has agreed to surgery.",
   "Ask the interpreter to sign the consent form as the witness instead.",
   "Ask the interpreter for a full explanation of the discussion that was witnessed.",
   "Document that the client gave verbal consent through the interpreter."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q081",
  "exam": 6,
  "src": 809,
  "topic": "Maternity & Newborn",
  "clientNeed": "Physiological Adaptation",
  "stem": "Which nursing intervention has the highest priority for a multigravida who gave birth vaginally 1 hour ago?",
  "rationale": "Postpartum hemorrhage, most often from uterine atony, is the greatest risk in the first hours after birth, and multiparity increases this risk, so assessing fundal firmness and lochia is the priority. Ambulation, breastfeeding teaching and Rho(D) immune globulin, which is given within 72 hours if indicated, are important but not as time-critical.",
  "type": "mcq",
  "options": [
   "Assess fundal tone and lochia flow.",
   "Encourage the client to ambulate to the bathroom.",
   "Administer Rho(D) immune globulin as prescribed.",
   "Teach the client correct breastfeeding positions."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q082",
  "exam": 6,
  "src": 489,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "In caring for a client with Cushing syndrome, which serum laboratory value is most important for the nurse to monitor?",
  "rationale": "Excess cortisol increases gluconeogenesis and causes insulin resistance, so hyperglycemia is a common and important complication of Cushing syndrome; hypokalemia and hypernatremia are also monitored. Lactate, hemoglobin and creatinine are not directly affected by excess cortisol.",
  "type": "mcq",
  "options": [
   "Glucose",
   "Lactate",
   "Creatinine",
   "Hemoglobin"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q083",
  "exam": 6,
  "src": 438,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A dopamine protocol is prescribed for a male client who weighs 198 pounds to maintain a mean arterial pressure (MAP) greater than 65 mm Hg. His current MAP is 50 mm Hg, so the nurse increases the infusion to 7 mcg/kg/minute. The infusion is labeled dextrose 5% in water (D5W) 500 mL with dopamine 400 mg. How many mL/hour should the nurse program the infusion pump to deliver? (Enter numeric value only. If rounding is required, round to the nearest whole number.)",
  "rationale": "Convert weight: 198 lb ÷ 2.2 = 90 kg. Dose per minute: 7 mcg/kg/minute × 90 kg = 630 mcg/minute, or 630 × 60 = 37,800 mcg/hour. Concentration: 400 mg = 400,000 mcg ÷ 500 mL = 800 mcg/mL. Rate: 37,800 ÷ 800 = 47.25 mL/hour, which rounds to 47 mL/hour.",
  "type": "fill",
  "answer": 47,
  "unit": "mL/hr",
  "tolerance": 0
 },
 {
  "id": "hesi6q084",
  "exam": 6,
  "src": 113,
  "topic": "Respiratory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client who recently had a tracheostomy is being prepared for discharge home. Which instruction is most important for the nurse to include in the discharge plan?",
  "rationale": "Maintaining a patent airway is the priority, so the client and caregivers must be able to clear secretions by suctioning the tracheostomy safely. Plugging the tube during sleep could obstruct the airway, and the outer cannula is changed by the healthcare team, not weekly at home. Humidified air is encouraged because the tracheostomy bypasses the upper airway's normal warming and humidifying function.",
  "type": "mcq",
  "options": [
   "Teach how to change the outer cannula weekly",
   "Advise avoiding humidified air at home",
   "Explain how to plug the tube during sleep",
   "Teach tracheal suctioning techniques"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q085",
  "exam": 6,
  "src": 548,
  "topic": "Hematology, Oncology & Immunology",
  "clientNeed": "Physiological Adaptation",
  "stem": "The husband of an older woman with pernicious anemia calls the clinic to report that his wife still has memory loss and some confusion two days after her first dose of nasal cyanocobalamin. He is worried she may be developing Alzheimer's disease. Which action should the nurse take?",
  "rationale": "Vitamin B12 deficiency damages the nervous system and commonly causes memory loss, confusion and paresthesias, and neurologic symptoms improve gradually over weeks to months of replacement rather than within two days. Cyanocobalamin does not cause confusion, an Alzheimer's evaluation is premature before the deficiency is corrected, and doses should never be doubled without a prescription.",
  "type": "mcq",
  "options": [
   "Tell him that the confusion is a side effect of the nasal cyanocobalamin.",
   "Explain that memory loss and confusion are common with vitamin B12 deficiency.",
   "Advise him to double the next dose of the nasal medication.",
   "Recommend an immediate evaluation for Alzheimer's disease."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q086",
  "exam": 6,
  "src": 308,
  "topic": "Maternity & Newborn",
  "clientNeed": "Psychosocial Integrity",
  "stem": "A woman with an anxiety disorder calls her obstetrician's office and reports increased anxiety since the normal vaginal birth of her son three weeks ago. Because she is breastfeeding, she stopped her antianxiety medications, but she thinks she may need to restart them. Which response is best for the nurse to provide?",
  "rationale": "Several antianxiety medications, such as certain SSRIs, are compatible with breastfeeding, so she can discuss restarting treatment with her provider rather than choosing between her mental health and breastfeeding. Describing drug transfer into breast milk may increase her anxiety, relaxation techniques alone may be inadequate for a diagnosed anxiety disorder, and calling her worsening symptoms normal dismisses a real clinical problem.",
  "type": "mcq",
  "options": [
   "Inform her that some antianxiety medications are safe to take while breastfeeding.",
   "Encourage her to use stress-relieving alternatives such as deep breathing.",
   "Describe how medications are transmitted to the infant through breast milk.",
   "Explain that anxiety is a normal response for the mother of a 3-week-old."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q087",
  "exam": 6,
  "src": 284,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "A nurse working in the emergency department triage area is presented with four clients at the same time. The client with which symptoms requires the most immediate intervention by the nurse?",
  "rationale": "Chest discomfort must be treated as a possible acute coronary syndrome until proven otherwise, even when it seems related to a meal, and it requires an ECG within 10 minutes of arrival. Fever with malaise, a possible foot fracture and a small chin laceration in a child who is crying (and therefore breathing well) are stable and can wait for evaluation.",
  "type": "mcq",
  "options": [
   "One-inch bleeding laceration on the chin of a crying five-year-old",
   "Chest discomfort one hour after consuming a large, spicy meal",
   "Inability to bear weight on the left foot, with swelling and bruising",
   "Low-grade fever, headache, and malaise for the past 72 hours"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q088",
  "exam": 6,
  "src": 518,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Safety & Infection Control",
  "stem": "The charge nurse observes a new nurse preparing to insert an intravenous (IV) catheter. The new nurse has gathered IV catheters, an IV insertion kit, and a 4 × 4 sterile gauze dressing to cover and secure the insertion site. Which actions should the charge nurse take? (Select all that apply.)",
  "rationale": "The charge nurse supports the new nurse by confirming the supplies and correcting the dressing choice, because a transparent semipermeable dressing is preferred for peripheral IV sites; it secures the catheter and allows continuous visual inspection for infiltration and phlebitis. Waiting until after the insertion to address the dressing allows an avoidable error, and taping gauze over the site prevents ongoing observation.",
  "type": "sata",
  "options": [
   "Instruct the nurse to use a transparent dressing over the site.",
   "Confirm that the nurse has gathered the necessary supplies.",
   "Plan to observe the secured IV site only after the insertion.",
   "Remind the nurse to tape the gauze dressing securely in place."
  ],
  "correct": [
   0,
   1
  ]
 },
 {
  "id": "hesi6q089",
  "exam": 6,
  "src": 263,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A mother brings her 3-year-old son to the emergency department and tells the nurse that he has had an upper respiratory infection for the past two days. Assessment reveals a rectal temperature of 102° F; the child is drooling and becoming increasingly restless. Which action should the nurse take first?",
  "rationale": "High fever, drooling and increasing restlessness suggest epiglottitis, a medical emergency in which the swollen epiglottis can suddenly obstruct the airway; the provider is notified at once and emergency airway equipment is kept at the bedside. Inspecting the throat with a tongue blade or obtaining a throat culture can trigger laryngospasm and complete obstruction, and the child should be allowed to stay upright in a position of comfort rather than lying supine.",
  "type": "mcq",
  "options": [
   "Inspect the child's throat using a tongue blade and penlight.",
   "Obtain a throat culture to identify the causative organism.",
   "Place the child in a supine position for the examination.",
   "Notify the healthcare provider and obtain a tracheostomy tray."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q090",
  "exam": 6,
  "src": 348,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "After the healthcare provider reviews the risks and benefits of a cardiac catheterization, an older adult with unstable angina is scheduled for the procedure. When the nurse presents the consent form for signature, the client asks how the wires will keep his heart beating during the procedure. Which action should the nurse take?",
  "rationale": "Obtaining informed consent, including explaining the procedure, risks, benefits and alternatives, is the healthcare provider's legal responsibility; the nurse witnesses the signature and advocates for the client by reporting the misunderstanding so the provider can clarify it. Re-explaining the procedure is outside the nurse's role, the client is competent so a relative cannot consent, and postponing the procedure is the provider's decision.",
  "type": "mcq",
  "options": [
   "Explain the procedure again in detail and clarify any misconceptions.",
   "Notify the healthcare provider of the client's lack of understanding.",
   "Postpone the procedure until the client understands the risks and benefits.",
   "Call the client's next of kin and have them provide verbal consent."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q091",
  "exam": 6,
  "src": 383,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Basic Care & Comfort",
  "stem": "An older client with degenerative joint disease asks whether she should use the rubber jar openers that are available. The nurse's response should be based on which information about assistive devices?",
  "rationale": "Assistive devices such as jar openers reduce the force and stress placed on painful, degenerated joints, protecting them from further trauma while preserving independence. They do not increase range of motion or build strength, and using them supports rather than undermines independent function.",
  "type": "mcq",
  "options": [
   "They promote dependence and should be avoided.",
   "They decrease the risk for joint trauma.",
   "They strengthen the muscles of the hand.",
   "They increase joint range of motion."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q092",
  "exam": 6,
  "src": 737,
  "topic": "Neuro & Sensory",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "To reduce the risk of symptom exacerbation for a client with multiple sclerosis (MS), which instructions should the nurse include in the client's discharge plan? (Select all that apply.)",
  "rationale": "Emotional stress, fatigue and infection are common triggers of MS exacerbations, so relaxation techniques, pacing activities with rest periods and avoiding sick contacts reduce the risk of relapse. Fluids should not be restricted because dehydration increases the risk of urinary tract infection, and heat from warm baths worsens MS symptoms by slowing conduction in demyelinated nerves.",
  "type": "sata",
  "options": [
   "Take warm baths before starting exercise.",
   "Limit fluids to avoid bladder distention.",
   "Practice relaxation exercises.",
   "Avoid persons with infections.",
   "Space activities to allow for rest periods."
  ],
  "correct": [
   2,
   3,
   4
  ]
 },
 {
  "id": "hesi6q093",
  "exam": 6,
  "src": 196,
  "topic": "Endocrine",
  "clientNeed": "Physiological Adaptation",
  "stem": "A female client has been taking a high dose of prednisone, a corticosteroid, for several months. After stopping the medication abruptly, the client reports feeling “very tired.” Which nursing intervention is most important for the nurse to implement?",
  "rationale": "Long-term corticosteroid therapy suppresses the hypothalamic-pituitary-adrenal axis, and abrupt withdrawal can cause acute adrenal insufficiency, with fatigue, hypotension and shock; vital signs identify hypotension and hemodynamic instability. Breath sounds and abdominal palpation do not assess the primary risk, and bruising is a side effect of long-term steroid use rather than a sign of withdrawal.",
  "type": "mcq",
  "options": [
   "Measure vital signs.",
   "Palpate the abdomen.",
   "Auscultate breath sounds.",
   "Observe the skin for bruising."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q094",
  "exam": 6,
  "src": 327,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "After a third hospitalization 6 months ago, a client is admitted with ascites and malnutrition. The client is drowsy but responds to verbal stimuli and reports recently spitting up blood. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "A capillary refill of 8 seconds indicates severely impaired peripheral perfusion and suggests hypovolemic shock from bleeding, possibly from esophageal varices given the recent hematemesis, which requires immediate intervention. Bruising, a tight abdomen from ascites and dependent edema are expected findings of advanced liver disease with low clotting factors and albumin.",
  "type": "mcq",
  "options": [
   "Bruises on the arms and legs",
   "Capillary refill of 8 seconds",
   "Round and tight abdomen",
   "Pitting edema in the lower legs"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q095",
  "exam": 6,
  "src": 81,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client is receiving mesalamine 800 mg PO TID. Which assessment is most important for the nurse to perform to evaluate the effectiveness of the medication?",
  "rationale": "Mesalamine is an anti-inflammatory aminosalicylate used to induce and maintain remission in ulcerative colitis, so a decrease in the frequency of diarrhea, blood and mucus in the stool shows the drug is working. Serum potassium may be monitored because of diarrhea-related losses, and urine output reflects hydration and renal function, but neither measures therapeutic response. Abdominal girth is used to monitor ascites or distention.",
  "type": "mcq",
  "options": [
   "Serum potassium level",
   "Abdominal girth",
   "Bowel patterns",
   "Urine output"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q096",
  "exam": 6,
  "src": 637,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is evaluating the diet teaching of a client with hypertension. Which dinner selection indicates that the client understands the dietary recommendations for hypertension?",
  "rationale": "The DASH approach to hypertension emphasizes fresh, minimally processed foods that are low in sodium, and a fresh baked pork chop, fruit, a fresh vegetable and low-fat milk fit this pattern. Ham, canned baked beans, canned soup, crackers, pickles, hot dogs, chips and sauerkraut are all high in sodium.",
  "type": "mcq",
  "options": [
   "Baked ham, baked beans, cornbread, sweetened iced tea, and a brownie",
   "Baked pork chop, applesauce, corn on the cob, 2% milk, and key lime pie",
   "Canned chicken noodle soup, saltine crackers, a dill pickle, and cola",
   "Hot dog on a bun, potato chips, sauerkraut, and a chocolate shake"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q097",
  "exam": 6,
  "src": 598,
  "topic": "Respiratory",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is assessing the thorax and lungs of a client who is having respiratory difficulty. Which finding is most indicative of respiratory distress?",
  "rationale": "Use of accessory muscles such as the sternocleidomastoids indicates increased work of breathing and respiratory distress. A respiratory rate of 18, symmetrical chest expansion and a normal 1:2 anteroposterior-to-lateral diameter are normal findings.",
  "type": "mcq",
  "options": [
   "Contraction of the sternocleidomastoid muscles",
   "Symmetrical chest expansion",
   "Respiratory rate of 18 breaths/minute",
   "Anteroposterior-to-lateral chest ratio of 1:2"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q098",
  "exam": 6,
  "src": 551,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "The mother of a 7-month-old brings the infant to the clinic because the skin in the diaper area is red and excoriated, with no blisters or bleeding. She reports no watery stools. Which intervention should the nurse implement?",
  "rationale": "Diaper dermatitis is caused by prolonged contact of the skin with urine and stool, so more frequent diaper changes to keep the skin clean and dry is the primary intervention, along with a barrier ointment such as zinc oxide. Lotions retain moisture, soap irritates inflamed skin (plain water is preferred), and diet changes are unnecessary when the stools are normal.",
  "type": "mcq",
  "options": [
   "Instruct the mother to change the diaper more often.",
   "Encourage the mother to apply lotion with each diaper change.",
   "Ask the mother to decrease the infant's fruit intake for 24 hours.",
   "Tell the mother to cleanse with soap and water at each change."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q099",
  "exam": 6,
  "src": 615,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is caring for a client who is taking a macrolide antibiotic for a bacterial infection. Which finding should the nurse report to the healthcare provider before administering the next dose?",
  "rationale": "Macrolides such as erythromycin and azithromycin can cause hepatotoxicity, including cholestatic hepatitis, and jaundice signals liver injury that may require stopping the drug. Nausea is a common, expected GI side effect, and fever and fatigue are symptoms of the infection being treated.",
  "type": "mcq",
  "options": [
   "Nausea",
   "Jaundice",
   "Fever",
   "Fatigue"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q100",
  "exam": 6,
  "src": 545,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The home health nurse is assessing a male client who started peritoneal dialysis (PD) 5 days ago. Which assessment finding warrants immediate intervention by the nurse?",
  "rationale": "Cloudy effluent with abdominal pain and rebound tenderness are signs of peritonitis, the most serious complication of peritoneal dialysis, which requires prompt cultures and antibiotics. A mildly elevated glucose is expected because the dialysate contains dextrose, a palpable thrill and pulse over an AV graft are normal, and poor protein intake needs dietary teaching but is not an emergency.",
  "type": "mcq",
  "options": [
   "Pulsations felt over a healing arteriovenous (AV) graft site",
   "Anorexia and poor intake of dietary protein",
   "Fingerstick blood glucose of 120 mg/dL after an exchange",
   "Cloudy dialysate output and rebound abdominal pain"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q101",
  "exam": 6,
  "src": 5,
  "topic": "Pediatrics",
  "clientNeed": "Physiological Adaptation",
  "stem": "A 6-year-old child with acute infectious diarrhea is placed on oral rehydration therapy (ORS). Which action should the nurse instruct the parents to take if the child begins to vomit?",
  "rationale": "Vomiting is not a contraindication to oral rehydration; giving small amounts (for example 5 to 10 mL every few minutes) frequently is usually tolerated and continues to correct dehydration. Withholding fluids for 24 hours worsens dehydration. Sports drinks and juices are high in simple sugars and low in electrolytes and can worsen diarrhea through an osmotic effect. Large volumes given quickly distend the stomach and are likely to provoke more vomiting.",
  "type": "mcq",
  "options": [
   "Stop all fluids for 24 hours, then restart the ORS.",
   "Give the ORS quickly in large volumes to replace losses.",
   "Switch to clear sports drinks and diluted apple juice.",
   "Continue giving ORS frequently in small amounts."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q102",
  "exam": 6,
  "src": 588,
  "topic": "GI & Nutrition",
  "clientNeed": "Physiological Adaptation",
  "stem": "The nurse is assessing a client with a small bowel obstruction who was hospitalized 24 hours ago. Which assessment finding should the nurse report immediately to the healthcare provider?",
  "rationale": "Rebound tenderness is a sign of peritoneal irritation and suggests strangulation or perforation of the bowel, a surgical emergency. Hypoactive bowel sounds and tympany from trapped gas are expected findings of an obstruction, and light-colored gastric aspirate is normal drainage.",
  "type": "mcq",
  "options": [
   "Hypoactive bowel sounds in the lower quadrants",
   "Tympany on percussion of the abdomen",
   "Light-colored gastric aspirate via the nasogastric tube",
   "Rebound tenderness in the upper quadrants"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q103",
  "exam": 6,
  "src": 731,
  "topic": "Cardiovascular",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "To evaluate the effectiveness of a male client's new prescription for ezetimibe, which action should the clinic nurse implement?",
  "rationale": "Ezetimibe lowers LDL cholesterol by inhibiting intestinal cholesterol absorption, so its effectiveness is evaluated with follow-up lipid panels. It has no direct effect on blood pressure, blood glucose or body weight.",
  "type": "mcq",
  "options": [
   "Remind the client to keep his appointments to have his cholesterol level checked.",
   "Ask the client to weigh himself daily and record the results.",
   "Instruct the client to check his blood pressure at home every week.",
   "Teach the client to monitor his capillary blood glucose daily."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q104",
  "exam": 6,
  "src": 148,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "A client with bleeding esophageal varices receives vasopressin IV. For which findings should the nurse monitor during the infusion of this medication?",
  "rationale": "Vasopressin constricts the splanchnic arterial bed to reduce portal pressure and variceal bleeding, but it also constricts coronary arteries, which can cause myocardial ischemia, chest pain and dysrhythmias; nitroglycerin is often given with it to offset these effects. Vasopressin is antidiuretic, so it causes water retention rather than polyuria, and it does not cause hypoglycemia or respiratory depression.",
  "type": "mcq",
  "options": [
   "Polyuria and dilute urine",
   "Bradypnea and sedation",
   "Hypoglycemia and diaphoresis",
   "Chest pain and dysrhythmias"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q105",
  "exam": 6,
  "src": 345,
  "topic": "Respiratory",
  "clientNeed": "Safety & Infection Control",
  "stem": "After six days on a mechanical ventilator, a male client is extubated and placed on 40% oxygen via face mask. He is awake and cooperative but complains of a severe sore throat. While sipping water to swallow a medication, he begins coughing as if strangled. Which intervention is most important for the nurse to implement?",
  "rationale": "Prolonged intubation can cause laryngeal injury and dysphagia, and coughing while drinking signals aspiration, so all oral intake is held until a formal swallow evaluation determines safety. Continuing sips or starting thickened liquids before evaluation risks further aspiration, and increasing oxygen does not address the cause.",
  "type": "mcq",
  "options": [
   "Increase the oxygen concentration to 60%.",
   "Offer thickened liquids with the next medication.",
   "Encourage small sips of water with the chin tucked.",
   "Hold oral intake until a swallow evaluation is done."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q106",
  "exam": 6,
  "src": 486,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "In caring for a client receiving the aminoglycoside antibiotic gentamicin, it is most important for the nurse to monitor which diagnostic test?",
  "rationale": "Aminoglycosides are nephrotoxic, so serum creatinine (along with BUN, urine output and peak and trough drug levels) is monitored to detect kidney damage early. Gentamicin is also ototoxic. It does not primarily affect potassium, liver enzymes or blood glucose.",
  "type": "mcq",
  "options": [
   "Blood glucose",
   "Serum creatinine",
   "Liver enzymes",
   "Serum potassium"
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q107",
  "exam": 6,
  "src": 411,
  "topic": "Cardiovascular",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "An older male client with type 2 diabetes mellitus reports leg pain when walking short distances that is relieved by rest. Which client behavior indicates an understanding of teaching to promote more effective arterial circulation?",
  "rationale": "Intermittent claudication indicates peripheral arterial disease, and nicotine causes vasoconstriction and accelerates atherosclerosis, so smoking cessation is the most effective behavior for improving arterial blood flow. Compression stockings and leg elevation help venous return but reduce arterial perfusion in PAD, and inspecting the legs prevents complications but does not improve circulation.",
  "type": "mcq",
  "options": [
   "Consistently applies antiembolism stockings each morning",
   "Inspects his legs frequently for irritation or breakdown",
   "Completely stops cigarette and cigar smoking",
   "Frequently elevates his legs throughout the day"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q108",
  "exam": 6,
  "src": 516,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The charge nurse is making an assignment on a psychiatric unit for a practical nurse (PN) and a newly licensed registered nurse (RN). Which client should be assigned to the RN?",
  "rationale": "Command hallucinations directing the client to harm someone represent a serious risk of violence that requires RN assessment, crisis intervention and safety planning. A depressed client who denies suicidal ideation, a client stable on lithium and a client with grandiose delusions who is not acting dangerously present lower immediate risk and can be cared for by the PN under RN supervision.",
  "type": "mcq",
  "options": [
   "An adult female who has been depressed for several months and denies suicidal ideation",
   "An older male who tells staff and other clients that he is Superman and can fly",
   "A young male with schizophrenia who says voices are telling him to kill his psychiatrist",
   "A middle-aged male in the depressive phase of bipolar disorder who is receiving lithium"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q109",
  "exam": 6,
  "src": 54,
  "topic": "Endocrine",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A client is admitted for type 2 diabetes mellitus (DM) and chronic kidney disease (CKD). After diet teaching, which breakfast selection by the client indicates effective learning?",
  "rationale": "A breakfast that limits concentrated sugar, sodium, potassium and phosphorus fits both diabetes and CKD; oatmeal with an artificial sweetener, low-potassium strawberries and a limited fluid portion is appropriate. Bran, whole milk, bananas and orange juice are high in phosphorus and potassium. Ham and tomato juice are high in sodium and potassium, and syrup, sausage and milk add concentrated sugar, sodium and phosphorus.",
  "type": "mcq",
  "options": [
   "Oatmeal with butter, artificial sweetener, and strawberries, and 6 ounces of coffee",
   "Pancakes with maple syrup, two sausage links, and a glass of whole milk",
   "Bran cereal with whole milk, a sliced banana, and a glass of orange juice",
   "Scrambled eggs with ham, whole-wheat toast, and a glass of tomato juice"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q110",
  "exam": 6,
  "src": 715,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse uses the Parkland formula (4 mL × kg × % total body surface area burned = 24-hour fluid replacement) to calculate the 24-hour IV fluid replacement for a client with 40% burns who weighs 76 kg. How many mL should the client receive over 24 hours? (Enter numeric value only.)",
  "rationale": "Using the Parkland formula: 4 mL × 76 kg × 40 = 12,160 mL of lactated Ringer's over 24 hours. Half (6,080 mL) is given in the first 8 hours from the time of the burn, and the remaining half over the next 16 hours.",
  "type": "fill",
  "answer": 12160,
  "unit": "mL",
  "tolerance": 0
 },
 {
  "id": "hesi6q111",
  "exam": 6,
  "src": 239,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "A male client who had a small bowel resection acquired methicillin-resistant Staphylococcus aureus (MRSA) while hospitalized. He was treated and released but is readmitted today with diarrhea and dehydration. Which intervention is most important for the nurse to implement?",
  "rationale": "MRSA is spread by direct contact with the client or contaminated surfaces, and a client with a history of MRSA is placed on contact precautions until screening cultures are negative; new diarrhea after hospitalization and antibiotics also raises concern for Clostridioides difficile, which requires contact precautions as well. Negative pressure is for airborne pathogens, droplet precautions are for organisms such as influenza, and standard precautions alone are insufficient.",
  "type": "mcq",
  "options": [
   "Maintain standard precautions only.",
   "Maintain contact transmission precautions.",
   "Initiate droplet transmission precautions.",
   "Place the client in a negative-pressure room."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q112",
  "exam": 6,
  "src": 653,
  "topic": "Musculoskeletal & Integumentary",
  "clientNeed": "Health Promotion & Maintenance",
  "stem": "The nurse is preparing a community education program on osteoporosis. Which instruction helps prevent bone loss and promote bone formation?",
  "rationale": "Weight-bearing exercise such as walking stresses the bones, stimulating osteoblast activity and increasing bone density. Swimming is not weight-bearing, adequate calcium is essential for bone health, and high caffeine intake increases urinary calcium loss.",
  "type": "mcq",
  "options": [
   "Increase daily caffeine intake for energy.",
   "Recommend weight-bearing physical activity.",
   "Limit calcium intake to prevent kidney stones.",
   "Recommend swimming as the main form of exercise."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q113",
  "exam": 6,
  "src": 673,
  "topic": "GI & Nutrition",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse is teaching a client about the antiulcer medication ranitidine. Which statement best describes the action of this drug?",
  "rationale": "Ranitidine is an H2 receptor antagonist that blocks histamine's action on the parietal cells, reducing gastric acid secretion. Antacids neutralize acid, which raises rather than lowers the pH, sucralfate coats the mucosa, and no H2 blocker blocks virtually all acid secretion; proton pump inhibitors are the most potent acid suppressants.",
  "type": "mcq",
  "options": [
   "It provides a protective coating over the gastric mucosa.",
   "It blocks the effects of histamine, decreasing the secretion of acid.",
   "It blocks 97% of the gastric acid secreted in the stomach.",
   "It neutralizes gastric acid, which decreases the gastric pH."
  ],
  "correct": [
   1
  ]
 },
 {
  "id": "hesi6q114",
  "exam": 6,
  "src": 280,
  "topic": "Pediatrics",
  "clientNeed": "Basic Care & Comfort",
  "stem": "A nurse is preparing to feed a 2-month-old male infant with heart failure who was born with a congenital heart defect. Which intervention should the nurse implement?",
  "rationale": "Infants with heart failure tire easily, and feeding increases oxygen demand, so the infant should be well rested and fed in a semi-upright position with a soft, large-hole nipple. A firm nipple increases the effort of sucking, a flat position increases respiratory effort and aspiration risk, and feedings are limited to about 20 to 30 minutes to prevent exhaustion.",
  "type": "mcq",
  "options": [
   "Use a firm, standard nipple for feeding.",
   "Continue each feeding for at least 45 minutes.",
   "Allow the infant to rest before feeding.",
   "Keep the infant flat during the feeding."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q115",
  "exam": 6,
  "src": 710,
  "topic": "Pharmacology & Calculations",
  "clientNeed": "Pharmacological & Parenteral Therapies",
  "stem": "The nurse should observe most closely for drug toxicity when a client receives a medication that has which characteristic?",
  "rationale": "A drug with a narrow therapeutic index, such as digoxin, lithium, warfarin or aminoglycosides, has little difference between the therapeutic and toxic doses, so small changes in level can cause toxicity, and serum levels are often monitored. Low bioavailability reduces the amount of drug absorbed, a rapid onset describes how quickly it acts, and a short half-life means it is eliminated quickly.",
  "type": "mcq",
  "options": [
   "Low bioavailability",
   "Rapid onset of action",
   "Narrow therapeutic index",
   "Short half-life"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q116",
  "exam": 6,
  "src": 686,
  "topic": "Maternity & Newborn",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse manager is conducting an in-service education program on fire evacuation of the postpartum and newborn recovery area. Which intervention should the nurse manager share with the staff?",
  "rationale": "Moving the mother with her infant in her arms by wheelchair evacuates both at once, keeps them together for identification and security, and accommodates a postpartum mother's limited mobility. Elevators must not be used during a fire, delaying evacuation until the fire is confirmed endangers the infants, and separating mothers from infants creates identification and safety risks.",
  "type": "mcq",
  "options": [
   "Carry two infants at a time down the elevator.",
   "Evacuate all mothers first, then return for the infants.",
   "Evacuate each infant with the mother by wheelchair.",
   "Leave the infants in the nursery until the fire is confirmed."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q117",
  "exam": 6,
  "src": 79,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client is receiving continuous bladder irrigation via a triple-lumen suprapubic catheter placed during a prostatectomy. Which report by the unlicensed assistive personnel (UAP) requires intervention by the nurse?",
  "rationale": "Leakage around the insertion site suggests that the catheter is obstructed, often by clots, or that the client is having bladder spasms, so the nurse must assess catheter patency and the client's comfort. Light pink drainage is expected after prostatectomy, and total output should exceed the amount of irrigant because it includes urine. A client resting quietly needs no intervention.",
  "type": "mcq",
  "options": [
   "Hourly output that exceeds the irrigant infused",
   "Light pink drainage in the collection tubing",
   "Leakage around the catheter insertion site",
   "The client is resting quietly with eyes closed"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q118",
  "exam": 6,
  "src": 454,
  "topic": "Respiratory",
  "clientNeed": "Safety & Infection Control",
  "stem": "During orientation, a newly hired nurse demonstrates tracheostomy suctioning in a skills class. While preparing the catheter, she lays it on the bedside table and then inserts it into the tracheostomy. The supervising nurse expresses concern that the demonstrated procedure increased the client's risk for which problem?",
  "rationale": "Tracheostomy suctioning is a sterile procedure because the catheter enters the lower airway, and placing the catheter on a nonsterile surface contaminates it and introduces microorganisms into the trachea, increasing the risk of pneumonia. The error described is a break in sterile technique rather than a problem with suction duration, pressure or preoxygenation, which would affect airway clearance, comfort or gas exchange.",
  "type": "mcq",
  "options": [
   "Infection",
   "Ineffective airway clearance",
   "Altered comfort",
   "Impaired gas exchange"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q119",
  "exam": 6,
  "src": 321,
  "topic": "Pediatrics",
  "clientNeed": "Management of Care",
  "stem": "A young boy in a chronic vegetative state who lives at home is readmitted to the hospital with pneumonia and pressure injuries. The mother insists that she is capable of caring for her son. Which action should the nurse implement next?",
  "rationale": "Pneumonia and pressure injuries are complications of immobility, and the nurse needs further assessment of the mother's caregiving skills, knowledge and resources before deciding on the next step. Reporting neglect, arranging home health or consulting the ethics committee may be appropriate later, but acting before assessing the situation is premature.",
  "type": "mcq",
  "options": [
   "Determine the mother's basic skill level in providing care.",
   "Report the incident to the local child protective services.",
   "Find a home health agency that specializes in brain injuries.",
   "Consult the ethics committee to determine how to proceed."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q120",
  "exam": 6,
  "src": 96,
  "topic": "Cardiovascular",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client who had a percutaneous transluminal coronary angioplasty (PTCA) two weeks ago returns to the clinic for a follow-up visit. The client has an ejection fraction of 30%. Today the client's lungs are clear, there is +1 pedal edema, and the client has gained 5 pounds. Which intervention should the nurse implement?",
  "rationale": "A low ejection fraction with weight gain and mild edema suggests fluid retention, which often results from not taking medications such as diuretics as prescribed or from a regimen that needs adjustment; assessing adherence is the first step (normal ejection fraction is about 55% to 70%). Clear lungs and only +1 edema do not warrant hospital admission or IV diuretics, and the weight gain reflects fluid, not calories.",
  "type": "mcq",
  "options": [
   "Insert a saline lock for IV diuretic therapy.",
   "Arrange transport for admission to the hospital.",
   "Assess compliance with routine prescriptions.",
   "Instruct the client to monitor daily caloric intake."
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q121",
  "exam": 6,
  "src": 60,
  "topic": "Neuro & Sensory",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "A client is admitted to the hospital after experiencing a stroke (brain attack). The nurse should request a referral for speech therapy if the client exhibits which finding?",
  "rationale": "Coughing while drinking indicates dysphagia with aspiration risk, and speech-language pathologists perform swallowing evaluations and recommend diet textures and swallowing techniques. Cranial nerves I and II govern smell and vision, which are not managed by speech therapy. Facial droop is an expected stroke finding that does not alone require referral, and emotional lability is addressed through nursing and mental health support.",
  "type": "mcq",
  "options": [
   "Abnormal responses for cranial nerves I and II",
   "Unilateral facial drooping",
   "Inappropriate or exaggerated mood swings",
   "Persistent coughing while drinking"
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q122",
  "exam": 6,
  "src": 759,
  "topic": "GI & Nutrition",
  "clientNeed": "Basic Care & Comfort",
  "stem": "When conducting diet teaching for a client on a postoperative soft diet, which foods should the nurse recommend? (Select all that apply.)",
  "rationale": "A soft diet includes foods that are soft in texture and easy to chew and digest, such as pasta, eggs, ground meat, tofu, mashed potatoes and pudding. High-fiber, gas-forming and seeded foods such as cruciferous vegetables, berries with seeds, bran and whole grains require more chewing and digestion and are omitted.",
  "type": "sata",
  "options": [
   "Pasta, noodles, and rice",
   "Mashed potatoes, pudding, and milk",
   "Eggs, tofu, and ground meat",
   "Brussels sprouts, blackberries, and seeds",
   "Corn bran, whole-wheat bread, and whole grains"
  ],
  "correct": [
   0,
   1,
   2
  ]
 },
 {
  "id": "hesi6q123",
  "exam": 6,
  "src": 386,
  "topic": "Mental Health",
  "clientNeed": "Physiological Adaptation",
  "stem": "An older male client is admitted to the mental health unit with a sudden onset of global disorientation and is continuously conversing with his mother, who died 50 years ago. The nurse reviews the multiple prescriptions he takes and notes that his urine specimen is cloudy, dark yellow, and foul-smelling. These findings suggest that the client is experiencing which condition?",
  "rationale": "Delirium is an acute, fluctuating disturbance of attention and cognition with an underlying physiologic cause, and polypharmacy and a likely urinary tract infection are common triggers in older adults. Dementia develops gradually over months to years, depression causes low mood and withdrawal rather than sudden disorientation, and a primary psychotic disorder would not typically appear suddenly in late life with signs of infection.",
  "type": "mcq",
  "options": [
   "Psychotic episode",
   "Dementia",
   "Delirium",
   "Depression"
  ],
  "correct": [
   2
  ]
 },
 {
  "id": "hesi6q124",
  "exam": 6,
  "src": 721,
  "topic": "Renal & GU",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse observes that a postoperative client receiving continuous bladder irrigation has a large blood clot in the urinary drainage tubing. Which action should the nurse perform first?",
  "rationale": "A clot can obstruct the catheter, so the nurse first determines whether drainage is flowing by comparing the output in the bag with the irrigant infused; if output is less than the inflow, the catheter is obstructed and the nurse proceeds to manual irrigation per prescription and notifies the provider. Increasing the irrigation into an obstructed catheter overdistends the bladder, a surgically placed catheter is not removed by the nurse, and clamping the drainage worsens retention.",
  "type": "mcq",
  "options": [
   "Observe the amount of urine in the client's drainage bag.",
   "Increase the bladder irrigation to the maximum rate.",
   "Remove the catheter and insert a larger one.",
   "Clamp the drainage tubing until the provider arrives."
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q125",
  "exam": 6,
  "src": 631,
  "topic": "Fundamentals & Safety",
  "clientNeed": "Safety & Infection Control",
  "stem": "The nurse is demonstrating correct transfer procedures to the unlicensed assistive personnel (UAP) on a rehabilitation unit. The UAP asks how to safely move a physically disabled client from the wheelchair to the bed. Which action should the nurse recommend?",
  "rationale": "Positioning the locked wheelchair on the client's strong side allows the client to lead with and bear weight on the stronger leg, providing the greatest stability. Holding the client at arm's length or pulling from across the bed uses poor body mechanics and increases the risk of injury, and the gait belt is applied before the client stands, not after.",
  "type": "mcq",
  "options": [
   "Pull the client into position by reaching from the opposite side of the bed.",
   "Hold the client at arm's length while transferring to distribute body weight.",
   "Apply the gait belt around the client's waist after the client is standing.",
   "Place the client's locked wheelchair next to the bed on the client's strong side."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q126",
  "exam": 6,
  "src": 190,
  "topic": "Cardiovascular",
  "clientNeed": "Physiological Adaptation",
  "stem": "A client's telemetry monitor shows ventricular fibrillation (VF). What should the nurse do first?",
  "rationale": "Ventricular fibrillation produces no cardiac output, and the single most important determinant of survival is the time to defibrillation, so an unsynchronized shock is delivered as soon as possible, with CPR until the defibrillator is ready. Epinephrine and amiodarone are given later in the ACLS algorithm for refractory VF. Synchronized cardioversion requires an organized QRS to sync with and cannot be used for VF.",
  "type": "mcq",
  "options": [
   "Give an IV bolus of amiodarone.",
   "Administer epinephrine IV.",
   "Prepare for synchronized cardioversion.",
   "Provide immediate defibrillation."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q127",
  "exam": 6,
  "src": 772,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "When organizing home visits for the day, which older client should the home health nurse plan to visit first?",
  "rationale": "Black, tarry stools in a client taking an NSAID suggest upper gastrointestinal bleeding, which can cause significant blood loss and requires urgent evaluation. A mildly elevated glucose, a 1-pound weekly weight gain and a chronic cough are stable findings that can be addressed later.",
  "type": "mcq",
  "options": [
   "A woman who takes naproxen and reports a recent onset of dark, tarry stools",
   "A man with COPD who has his usual chronic productive cough",
   "A woman with heart failure who reports a 1-pound weight gain this week",
   "A man with diabetes who reports a fasting blood glucose of 180 mg/dL"
  ],
  "correct": [
   0
  ]
 },
 {
  "id": "hesi6q128",
  "exam": 6,
  "src": 730,
  "topic": "Leadership & Prioritization",
  "clientNeed": "Management of Care",
  "stem": "The unit clerk reports to the charge nurse that a healthcare provider has written several prescriptions that are illegible and appear to include unapproved abbreviations. Which actions should the charge nurse take? (Select all that apply.)",
  "rationale": "Illegible prescriptions and unapproved abbreviations must be clarified with the prescriber before they are implemented, and reporting the situation through the chain of command, to the house supervisor, addresses the practice concern. An incident report is filed when an error or near miss has occurred, which has not yet happened, and the review board is not the appropriate first contact.",
  "type": "sata",
  "options": [
   "Contact the provider review board for instructions.",
   "Report the situation to the house supervisor.",
   "Call the healthcare provider who wrote the prescriptions.",
   "Complete and file an incident (variance) report."
  ],
  "correct": [
   1,
   2
  ]
 },
 {
  "id": "hesi6q129",
  "exam": 6,
  "src": 645,
  "topic": "Endocrine",
  "clientNeed": "Reduction of Risk Potential",
  "stem": "The nurse is planning care for a client admitted with a pheochromocytoma. Which intervention has the highest priority for inclusion in this client's plan of care?",
  "rationale": "A pheochromocytoma is a catecholamine-secreting adrenal tumor that can cause sudden, life-threatening hypertensive crises, so frequent blood pressure monitoring is the priority. Abdominal palpation can stimulate catecholamine release and is avoided, caffeine stimulates the sympathetic system, and vigorous activity can trigger a hypertensive episode.",
  "type": "mcq",
  "options": [
   "Encourage drinks that contain caffeine.",
   "Palpate the abdomen to locate the tumor.",
   "Promote frequent, vigorous physical activity.",
   "Monitor blood pressure frequently."
  ],
  "correct": [
   3
  ]
 },
 {
  "id": "hesi6q130",
  "exam": 6,
  "src": 377,
  "topic": "Neuro & Sensory",
  "clientNeed": "Basic Care & Comfort",
  "stem": "An adult woman seen in the clinic with possible neuropathic pain of the right leg rates her pain as 7 on a 10-point scale. Which action should the nurse take?",
  "rationale": "A complete pain assessment includes the quality of the pain, and neuropathic pain is typically described as burning, shooting, tingling or electric, which helps confirm the type of pain and guide treatment with agents such as gabapentinoids or antidepressants rather than opioids. Heat may injure a limb with impaired sensation, and reassurance without assessment is inappropriate.",
  "type": "mcq",
  "options": [
   "Administer a prescribed opioid analgesic.",
   "Encourage the client to describe the pain.",
   "Apply a heating pad to the right leg.",
   "Reassure her that the pain will subside."
  ],
  "correct": [
   1
  ]
 }
]};
