/* ============================================================================
   NUR 504 Exam 1 - Cardiovascular / Critical Care Question Bank
   200 NCLEX-style critical-thinking questions across four 50-question exams:
     1 Week 1 - Hemodynamics, vasoactive therapy & ECG fundamentals
     2 Week 2 - Dysrhythmias, conduction & devices
     3 Week 2 - Acute coronary syndrome, PCI & cardiac surgery
     4 Week 3 - Valves, carditis, cardiomyopathy, tamponade & aortic disease

   Built from the MCPHS NUR 504 Exam 1 source material: the Week 1, Week 2 and
   Week 3 lecture decks (slides + speaker notes), the pre-class materials, and
   the in-class activities and case studies.

   Multiple choice (4 options, 1 correct) and SATA (5 options, 2-5 correct).
   Distractors are written to be genuinely plausible - each is a real drug,
   rhythm, value or intervention that belongs to an adjacent concept - and
   every rationale explains why the best distractor is wrong.

   Question object: { id, exam(1-4), topic, type("mcq"|"sata"), stem,
                      options[], correct[idx], rationale }
   ========================================================================== */
window.NUR504_DATA = {
  meta: {"title": "NUR 504 Exam 1 - Cardiovascular / Critical Care", "total": 200, "exams": 4, "examTitles": {"1": "Week 1 - Hemodynamics & Vasoactive Therapy", "2": "Week 2 - Dysrhythmias, Conduction & Devices", "3": "Week 2 - Acute Coronary Syndrome, PCI & Cardiac Surgery", "4": "Week 3 - Valves, Carditis, Cardiomyopathy & Aortic Disease"}},
  questions: [
 {
  "id": "n504e1q01",
  "exam": 1,
  "topic": "Preload",
  "type": "mcq",
  "stem": "A patient in acute decompensated heart failure has a CVP of 15 mm Hg, jugular venous distention, bibasilar crackles, and 3+ pitting edema to the knees. Which prescribed intervention will most directly reduce this patient's preload?",
  "options": [
   "Oral metoprolol 25 mg",
   "IV 0.9% sodium chloride bolus 500 mL",
   "IV phenylephrine infusion titrated to a MAP of 70",
   "IV furosemide 40 mg push"
  ],
  "correct": [
   3
  ],
  "rationale": "Preload is the volume stretching the ventricle at end-diastole, and it is governed by venous return and circulating volume. A loop diuretic removes circulating volume, so venous return and LVEDP fall — this is the most direct preload reduction. A 500 mL bolus does the opposite and would worsen the pulmonary congestion. Phenylephrine is the tempting distractor because it is a potent vasoactive drug, but it is a pure alpha-1 agonist: it raises afterload (and through venoconstriction can actually raise preload), which is exactly wrong for a congested, failing left ventricle. Metoprolol lowers heart rate and contractility rather than volume, so it does not directly unload the ventricle."
 },
 {
  "id": "n504e1q02",
  "exam": 1,
  "topic": "Afterload",
  "type": "sata",
  "stem": "Which findings or interventions would the nurse expect to INCREASE a patient's left ventricular afterload? Select all that apply.",
  "options": [
   "Uncontrolled hypertension with a blood pressure of 188/104",
   "Severe aortic stenosis",
   "A norepinephrine infusion titrated upward for septic shock",
   "Initiation of an ACE inhibitor",
   "Acute hemorrhage with a 1,500 mL blood loss"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Afterload is the resistance the left ventricle must overcome to open the aortic valve and eject, and it is chiefly determined by systemic vascular resistance and by any obstruction at the outflow tract. Uncontrolled hypertension raises SVR; aortic stenosis is a fixed mechanical obstruction the ventricle must push through; and norepinephrine is an alpha-1 vasoconstrictor that raises SVR by design. An ACE inhibitor is an arterial vasodilator and lowers afterload. Hemorrhage is the trap: massive blood loss lowers preload dramatically, and although compensatory vasoconstriction follows, the direct hemodynamic effect being asked about is a fall in volume, not a rise in resistance."
 },
 {
  "id": "n504e1q03",
  "exam": 1,
  "topic": "Frank-Starling",
  "type": "mcq",
  "stem": "A patient with a CVP of 3 mm Hg receives a 500 mL fluid bolus; the stroke volume rises from 42 mL to 61 mL. A second 500 mL bolus is given, the CVP rises to 16 mm Hg, but the stroke volume falls to 38 mL. Which explanation best accounts for this response?",
  "options": [
   "The second bolus increased systemic vascular resistance and therefore reduced ejection",
   "The ventricle has been stretched past the optimal point of the Frank-Starling curve",
   "Myocardial contractility improved, which lowered the measured stroke volume",
   "The first bolus was not actually absorbed into the intravascular space"
  ],
  "correct": [
   1
  ],
  "rationale": "The Frank-Starling mechanism says increased myocardial fiber stretch produces a stronger contraction — but only up to a point. The first bolus moved the patient up the ascending limb, so stroke volume rose. The second pushed the fibers past optimal stretch onto the descending limb, where further filling overdistends the ventricle and stroke volume falls. A fluid bolus does not directly raise SVR, and improved contractility would raise, not lower, stroke volume. The idea that the fluid was not absorbed is attractive because CVP did rise — but that rise is itself the proof the volume reached the intravascular space."
 },
 {
  "id": "n504e1q04",
  "exam": 1,
  "topic": "Cardiac output",
  "type": "mcq",
  "stem": "A patient has a heart rate of 128 beats/min and a stroke volume of 32 mL/beat. Which interpretation of this patient's cardiac output is most accurate?",
  "options": [
   "The cardiac output cannot be determined without the patient's body surface area",
   "The cardiac output is 4.1 L/min, which is within normal limits, so perfusion is adequate",
   "The cardiac output is 4.1 L/min, but it is being sustained only by tachycardia and a critically low stroke volume",
   "The cardiac output is 1.6 L/min and the patient requires immediate fluid resuscitation"
  ],
  "correct": [
   2
  ],
  "rationale": "CO = HR x SV, so 128 x 32 mL = 4,096 mL/min, or about 4.1 L/min — technically at the low end of the normal 4 to 8 L/min range. The trap is stopping there. A normal stroke volume is 50 to 100 mL/beat; this patient's 32 mL is severely reduced, and the only reason the cardiac output still looks acceptable is a heart rate of 128. Tachycardia shortens diastole, which reduces both ventricular filling and coronary perfusion, so this compensation is fragile and will fail as the rate climbs. Body surface area is needed for the cardiac index, not for the cardiac output itself."
 },
 {
  "id": "n504e1q05",
  "exam": 1,
  "topic": "Cardiac index",
  "type": "mcq",
  "stem": "A critically ill patient has a cardiac output of 4.2 L/min and a body surface area of 2.3 m2. Which conclusion should the nurse draw?",
  "options": [
   "The cardiac index is 1.8 L/min/m2, which is within the expected range for a large adult",
   "The cardiac index is 9.7 L/min/m2, indicating a hyperdynamic circulation",
   "The cardiac output is normal, so the cardiac index does not need to be calculated",
   "The cardiac index is 1.8 L/min/m2, indicating inadequate perfusion despite a cardiac output in the normal range"
  ],
  "correct": [
   3
  ],
  "rationale": "Cardiac index = CO divided by body surface area, so 4.2 / 2.3 = 1.8 L/min/m2, well below the normal 2.5 to 4 L/min/m2. This is precisely why the cardiac index exists: a cardiac output of 4.2 L/min may perfuse a small adult adequately but is markedly insufficient for a body this large. Multiplying instead of dividing gives 9.7 and is the arithmetic trap. Assuming the index is fine because the output is normal is the conceptual trap, and it is the one that would let a nurse miss a patient in low-output failure."
 },
 {
  "id": "n504e1q06",
  "exam": 1,
  "topic": "MAP calculation",
  "type": "mcq",
  "stem": "A patient in the emergency department has a blood pressure of 88/52 mm Hg. What is this patient's mean arterial pressure, and what does it indicate?",
  "options": [
   "MAP 70 mm Hg; adequate for organ perfusion",
   "MAP 64 mm Hg; below the generally accepted perfusion threshold",
   "MAP 47 mm Hg; profound shock requiring immediate compressions",
   "MAP 64 mm Hg; acceptable because the systolic pressure is above 80"
  ],
  "correct": [
   1
  ],
  "rationale": "MAP = (SBP + 2 x DBP) / 3 = (88 + 104) / 3 = 192 / 3 = 64 mm Hg. A MAP of at least 65 mm Hg is the general goal for end-organ perfusion, and at least 60 to 65 mm Hg is needed for cerebral perfusion, so 64 falls just short and requires intervention. Answering 70 comes from averaging the two pressures rather than weighting diastole twice — diastole is weighted double because the heart spends roughly two-thirds of the cardiac cycle in diastole. Judging adequacy from the systolic number alone is the clinical trap, because MAP, not systolic pressure, is the determinant of perfusion. A MAP of 47 would come from dividing incorrectly."
 },
 {
  "id": "n504e1q07",
  "exam": 1,
  "topic": "MAP calculation",
  "type": "mcq",
  "stem": "A patient with septic shock on a norepinephrine infusion has a blood pressure of 104/56 mm Hg. The prescription reads: \"Titrate norepinephrine to maintain MAP greater than 65 mm Hg.\" Which action should the nurse take?",
  "options": [
   "Decrease the norepinephrine, because the MAP is 88 mm Hg",
   "Increase the norepinephrine, because the MAP is 62 mm Hg",
   "Stop the norepinephrine, because the systolic pressure now exceeds 100 mm Hg",
   "Maintain the current rate, because the MAP is 72 mm Hg"
  ],
  "correct": [
   3
  ],
  "rationale": "MAP = (104 + 2 x 56) / 3 = (104 + 112) / 3 = 216 / 3 = 72 mm Hg, which meets the prescribed goal, so the nurse holds the current rate and continues to monitor. Titrating up would expose the patient to unnecessary vasoconstriction, peripheral ischemia, and increased myocardial oxygen demand. The strongest distractor is stopping the drug because the systolic pressure crossed 100: vasopressors are titrated to the ordered MAP parameter, and abruptly stopping norepinephrine, which has a half-life of only minutes, can precipitate sudden profound hypotension."
 },
 {
  "id": "n504e1q08",
  "exam": 1,
  "topic": "MAP and perfusion",
  "type": "mcq",
  "stem": "A patient with a traumatic brain injury has a neurosurgeon's order to maintain the MAP above 70 mm Hg. The nurse notes the blood pressure has drifted to 96/54 mm Hg and the patient is becoming more difficult to arouse. Which understanding should guide the nurse's response?",
  "options": [
   "The MAP is 68 mm Hg, which is acceptable because a MAP above 60 always perfuses the brain",
   "The MAP is 75 mm Hg, which meets the goal, so the change in arousal is unrelated to perfusion",
   "The MAP is 68 mm Hg, which is below the ordered goal and may be reducing cerebral perfusion",
   "The systolic pressure is the value that determines cerebral perfusion, and it remains adequate"
  ],
  "correct": [
   2
  ],
  "rationale": "MAP = (96 + 108) / 3 = 204 / 3 = 68 mm Hg, which is below the ordered 70 and correlates with the new decline in level of consciousness — mental status is one of the most sensitive bedside indicators of cerebral perfusion. Although a MAP of 60 to 65 is the general minimum for cerebral perfusion, a brain-injured patient has a higher requirement because rising intracranial pressure reduces cerebral perfusion pressure, which is why the surgeon set a specific higher target. Reading the systolic pressure alone misses the point, since MAP is the perfusion determinant."
 },
 {
  "id": "n504e1q09",
  "exam": 1,
  "topic": "Pulse pressure",
  "type": "mcq",
  "stem": "A patient recovering from a gastrointestinal bleed has a blood pressure of 88/72 mm Hg, a heart rate of 118 beats/min, and cool, mottled knees. Which interpretation of the pulse pressure is correct?",
  "options": [
   "The pulse pressure is normal, because the mean arterial pressure remains above 65 mm Hg",
   "The pulse pressure is 80 mm Hg, which is wide and reflects a hyperdynamic circulation",
   "The pulse pressure is 16 mm Hg, which is narrow and indicates stiffened, noncompliant arteries",
   "The pulse pressure is 16 mm Hg, which is narrow and suggests the heart is not ejecting an adequate stroke volume"
  ],
  "correct": [
   3
  ],
  "rationale": "Pulse pressure = SBP - DBP = 88 - 72 = 16 mm Hg. Normal is 40 to 60; anything under 40 is narrow and means the heart is not ejecting as much blood as it should — a low stroke volume, here from hypovolemia, with compensatory vasoconstriction raising the diastolic pressure toward the systolic. Stiff arteries produce the opposite pattern, a WIDE pulse pressure over 60. Confusing the two is the most common error on this concept. The MAP here is 77, which looks reassuring and is exactly why pulse pressure, tachycardia, and skin findings must be read together rather than trusting a single number."
 },
 {
  "id": "n504e1q10",
  "exam": 1,
  "topic": "Contractility",
  "type": "mcq",
  "stem": "A patient in cardiogenic shock has a cardiac index of 1.7 L/min/m2, a pulmonary artery occlusion pressure of 24 mm Hg, and a systemic vascular resistance that is elevated. Which class of drug best addresses the primary problem?",
  "options": [
   "A crystalloid bolus to increase preload",
   "A vasopressor such as phenylephrine to raise the systemic vascular resistance",
   "An anticholinergic such as atropine to increase the heart rate",
   "A positive inotrope such as dobutamine to improve contractility"
  ],
  "correct": [
   3
  ],
  "rationale": "Read the three numbers together: the filling pressure is high (PAOP 24 means the ventricle is full), the resistance is already high, and yet the cardiac index is 1.7. A full ventricle that cannot generate output has a contractility problem, so a positive inotrope such as dobutamine is the correct class. Phenylephrine would raise afterload further and make a failing ventricle eject even less. A fluid bolus is the dangerous distractor — the PAOP of 24 shows the ventricle is already overfilled, and more volume will produce pulmonary edema. Atropine treats symptomatic bradycardia, which is not the problem described."
 },
 {
  "id": "n504e1q11",
  "exam": 1,
  "topic": "CVP monitoring",
  "type": "mcq",
  "stem": "A patient's central venous pressure has fallen from 6 mm Hg to 1 mm Hg over two hours. The heart rate is 124 beats/min and the urine output for the last hour was 15 mL. Which conclusion is best supported?",
  "options": [
   "The patient is developing right ventricular failure",
   "The transducer has been leveled too low relative to the phlebostatic axis",
   "The patient is experiencing an increase in systemic vascular resistance",
   "The patient is hypovolemic and has reduced venous return"
  ],
  "correct": [
   3
  ],
  "rationale": "Normal CVP is 2 to 6 mm Hg (3 to 8 cm H2O), and it reflects right ventricular function and venous return, making it a useful indicator of fluid volume status. A falling CVP with tachycardia and oliguria is the classic hypovolemia pattern: less volume returning means less filling pressure, so the heart speeds up and the kidneys, sensing poor perfusion, cut output. Right ventricular failure would RAISE the CVP as blood backs up. The transducer distractor is worth knowing but is backwards — a transducer placed too LOW reads falsely HIGH, so leveling error would not explain a falling number alongside genuine clinical signs of low volume."
 },
 {
  "id": "n504e1q12",
  "exam": 1,
  "topic": "CVP monitoring",
  "type": "sata",
  "stem": "A patient's central venous pressure has risen to 17 mm Hg. Which findings or conditions could plausibly account for this elevation? Select all that apply.",
  "options": [
   "Right ventricular failure",
   "Fluid volume overload",
   "Cardiac tamponade",
   "Acute hemorrhage",
   "Aggressive diuresis with furosemide"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "CVP is the pressure in the vena cava and right atrium, so it rises whenever blood cannot move forward out of the right heart or whenever there is simply too much volume. Right ventricular failure backs blood up into the systemic veins; fluid overload raises it directly; and cardiac tamponade compresses the heart from the outside so the chambers cannot fill, driving filling pressures up while cardiac output falls. Hemorrhage and aggressive diuresis both reduce circulating volume and therefore LOWER the CVP. Tamponade is the item most often missed, because students associate it with hypotension and forget that its filling pressures are high."
 },
 {
  "id": "n504e1q13",
  "exam": 1,
  "topic": "Arterial line",
  "type": "mcq",
  "stem": "The nurse notices that a patient's arterial line waveform has become flattened and the displayed blood pressure has dropped to 78/44 mm Hg. The patient is alert, conversant, warm, and dry, with a strong radial pulse. Which action should the nurse take FIRST?",
  "options": [
   "Administer a 500 mL fluid bolus for the hypotension",
   "Assess the patient and the monitoring system, including a manual cuff pressure",
   "Increase the oxygen and place the patient in the Trendelenburg position",
   "Document the reading and continue to monitor the trend"
  ],
  "correct": [
   1
  ],
  "rationale": "The governing rule of hemodynamic monitoring is to assess the patient first, then the numbers, and to question any value that does not match the clinical picture. A flattened, damped waveform with a patient who looks entirely well points to an equipment problem — a clot or air in the tubing, a kinked catheter, a loose connection, or a transducer that needs releveling and zeroing — and a manual cuff pressure settles it in seconds. Treating an artifact with a fluid bolus or positioning is acting on a number instead of a patient. Simply documenting is unsafe in the opposite direction, because a damped system must be corrected before it hides a real change later."
 },
 {
  "id": "n504e1q14",
  "exam": 1,
  "topic": "Arterial line",
  "type": "sata",
  "stem": "Which nursing actions are appropriate in the care of a patient with a radial arterial line? Select all that apply.",
  "options": [
   "Level and zero the transducer to the phlebostatic axis per facility policy",
   "Assess circulation, sensation, and movement in the hand distal to the insertion site",
   "Keep all connections tightened and the site visible rather than covered by linens",
   "Use the arterial line to administer IV potassium when peripheral access is poor",
   "Assess the insertion site for bleeding, hematoma, and signs of infection"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Leveling and zeroing to the phlebostatic axis keeps the readings accurate; distal circulation checks detect the thrombosis and embolism that can threaten the hand; keeping connections tight and the site uncovered is a safety essential, because an arterial line that disconnects can exsanguinate a patient in minutes and the only way to catch it early is to be able to see it; and site assessment detects bleeding, hematoma, and infection. Administering medication through an arterial line is the answer that must never be selected — arterial lines are for monitoring and blood sampling only, and injecting a drug into an artery can cause distal ischemia and limb loss."
 },
 {
  "id": "n504e1q15",
  "exam": 1,
  "topic": "Transducer accuracy",
  "type": "mcq",
  "stem": "A nurse repositions a patient from supine to high Fowler's but does not relevel the arterial line transducer, which now sits well below the patient's phlebostatic axis. How will this affect the displayed pressures?",
  "options": [
   "The waveform will be damped but the numeric values will remain accurate",
   "The displayed pressures will be falsely high",
   "The displayed pressures will be falsely low",
   "The displayed pressures will be unaffected because the system was zeroed at insertion"
  ],
  "correct": [
   1
  ],
  "rationale": "A transducer reads the height of the fluid column between itself and the patient's phlebostatic axis. When the transducer sits BELOW the axis, that extra column of fluid adds hydrostatic pressure and the monitor reads falsely HIGH; a transducer placed above the axis reads falsely low. This matters clinically because a falsely high reading can mask real hypotension and lead a nurse to withhold a needed intervention. Zeroing at insertion does not protect against later position changes — the system must be releveled every time the patient or the bed is repositioned, which is why leveling is checked each shift and after every move."
 },
 {
  "id": "n504e1q16",
  "exam": 1,
  "topic": "Central lines",
  "type": "sata",
  "stem": "Which complications should the nurse monitor for in a patient who has just had a subclavian central venous catheter placed? Select all that apply.",
  "options": [
   "Pneumothorax",
   "Catheter-related bloodstream infection",
   "Air embolism",
   "Compartment syndrome of the forearm",
   "Carpal tunnel syndrome caused by pressure from the catheter"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Central lines go into large vessels — internal jugular, subclavian, or femoral — and the subclavian approach in particular risks puncturing the pleura, so pneumothorax and hemothorax are immediate concerns and a confirmatory chest x-ray is standard before the line is used. CLABSI is the major delayed complication and the reason for strict aseptic technique and line bundles. Air embolism can occur during insertion, during tubing changes, or if the hub is left open to air. The two false options are both nerve and compartment problems of the forearm, which belong to forearm trauma or to infiltration of a peripheral IV — neither has any anatomic relationship to a catheter placed under the clavicle."
 },
 {
  "id": "n504e1q17",
  "exam": 1,
  "topic": "Central lines",
  "type": "mcq",
  "stem": "A patient with poor peripheral access needs a continuous norepinephrine infusion, total parenteral nutrition, and frequent blood sampling. Which statement best explains why a central line is indicated rather than a peripheral IV?",
  "options": [
   "Central lines are less likely than peripheral IVs to become infected",
   "Central lines eliminate the need for an infusion pump when titrating vasoactive drugs",
   "Central catheters deliver vesicants and hyperosmolar solutions into a high-flow vessel, reducing tissue injury from extravasation",
   "A central line allows the blood pressure to be measured directly and continuously"
  ],
  "correct": [
   2
  ],
  "rationale": "Vesicants such as norepinephrine and hyperosmolar solutions such as TPN damage small peripheral vessels; delivering them into a large central vein where blood flow rapidly dilutes them is the core rationale, and it is also why norepinephrine extravasation from a peripheral site is such a feared event. Central lines carry MORE infection risk, not less, which is the whole reason CLABSI bundles exist. Every vasoactive infusion still requires a pump and continuous cardiac and hemodynamic monitoring regardless of access. Direct continuous blood pressure measurement is the function of an ARTERIAL line, not a central venous line — confusing the two is the most common error here."
 },
 {
  "id": "n504e1q18",
  "exam": 1,
  "topic": "PA catheter",
  "type": "mcq",
  "stem": "A patient with a pulmonary artery catheter has a pulmonary artery occlusion pressure (PAOP) of 22 mm Hg. Which statement best describes what this value tells the nurse?",
  "options": [
   "It estimates left-sided filling pressure and suggests left ventricular volume overload or failure",
   "It measures the balance between oxygen delivery and oxygen consumption",
   "It reflects systemic vascular resistance and indicates excessive afterload",
   "It measures right atrial pressure and indicates the patient needs additional fluid"
  ],
  "correct": [
   0
  ],
  "rationale": "The PAOP, also called the pulmonary capillary wedge pressure, is obtained with the balloon inflated so the catheter senses pressure transmitted back from the left atrium; it is the best available bedside estimate of LEFT ventricular filling pressure. Normal is roughly 8 to 12 mm Hg, so 22 indicates a left heart that is overfilled or failing — and it warns that a fluid bolus would push this patient into pulmonary edema. Right atrial pressure is the CVP, measured by a different port. SVR is a calculated value describing afterload, and the oxygen delivery-to-consumption balance is SvO2. Each distractor is a real PA catheter parameter, which is what makes this item discriminating."
 },
 {
  "id": "n504e1q19",
  "exam": 1,
  "topic": "PA catheter",
  "type": "mcq",
  "stem": "A patient returns from cardiac surgery with these values: PAP 38/23 mm Hg, CVP 16 mm Hg, PCWP 18 mm Hg, cardiac index 1.88 L/min/m2. Which interpretation is most accurate?",
  "options": [
   "The patient is hypovolemic and requires aggressive fluid resuscitation",
   "The patient has poor left ventricular function rather than simple fluid overload",
   "All values are within normal limits for the early postoperative period",
   "The patient has isolated right ventricular failure with normal left-sided pressures"
  ],
  "correct": [
   1
  ],
  "rationale": "Every filling pressure here is elevated — CVP 16, PCWP 18, PAP 38/23 — while the cardiac index is 1.88, well below the normal 2.5 to 4 L/min/m2. That combination is the signature of poor left ventricular function: the ventricle is full but cannot pump the volume forward. Pure fluid overload in a heart with adequate function would raise the filling pressures AND the cardiac index, so the depressed index is what distinguishes the two. Hypovolemia would show low filling pressures. Isolated right ventricular failure would raise the CVP while leaving the left-sided PCWP normal, and here the PCWP is clearly elevated too."
 },
 {
  "id": "n504e1q20",
  "exam": 1,
  "topic": "PA catheter",
  "type": "mcq",
  "stem": "A patient's mixed venous oxygen saturation (SvO2) has fallen from 68% to 51%. Which explanation should the nurse consider first?",
  "options": [
   "The reading reflects arterial oxygenation and indicates a need for a higher FiO2",
   "The tissues are extracting more oxygen because delivery has fallen or demand has risen",
   "The patient is receiving too much supplemental oxygen",
   "Oxygen delivery has improved and the tissues no longer need to extract as much"
  ],
  "correct": [
   1
  ],
  "rationale": "SvO2 is the oxygen saturation of blood RETURNING to the heart, so it represents what is left over after the tissues have taken what they need — the balance between oxygen delivery and oxygen consumption. Normal is roughly 60% to 80%. A falling SvO2 means the tissues are extracting a larger fraction, which happens when delivery drops (falling cardiac output, anemia, hypoxemia) or when demand climbs (fever, shivering, agitation, pain, work of breathing). Improved delivery would RAISE the value. Confusing SvO2 with the arterial saturation measured by pulse oximetry is the central trap: SvO2 is a venous, whole-body perfusion measure, not a lung oxygenation measure."
 },
 {
  "id": "n504e1q21",
  "exam": 1,
  "topic": "Hemodynamic priorities",
  "type": "sata",
  "stem": "Which nursing priorities apply to the care of a patient receiving invasive hemodynamic monitoring? Select all that apply.",
  "options": [
   "Assess the patient before interpreting the numbers",
   "Trend values over time rather than acting on a single isolated reading",
   "Verify transducer leveling and zeroing according to facility policy",
   "Treat any abnormal value immediately, before assessing the patient or the equipment",
   "Monitor the waveform for damping, artifact, and changes in morphology"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Invasive monitoring is only as good as the system producing it, so the discipline is the same every time: assess the patient first, trend rather than react to one number, keep the transducer leveled and zeroed, and watch the waveform, because a change in the waveform often reveals a problem before the numbers do. The option to treat any abnormal value immediately before assessing is the one to reject — acting on an unverified number is how patients receive fluid boluses for damped waveforms and vasopressor changes for transducer drift. Recognizing genuine change and escalating promptly is still expected; the point is that verification comes first."
 },
 {
  "id": "n504e1q22",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "A patient in septic shock remains hypotensive with a MAP of 58 mm Hg after adequate fluid resuscitation. The cardiac output is high and the systemic vascular resistance is low. Which drug is the most appropriate first-line choice?",
  "options": [
   "Dobutamine, to increase myocardial contractility",
   "Norepinephrine, to increase systemic vascular resistance",
   "Furosemide, to reduce preload",
   "Dopamine at 2 mcg/kg/min, to improve renal perfusion"
  ],
  "correct": [
   1
  ],
  "rationale": "This is distributive shock: the pump is working — indeed the cardiac output is high — but the vessels are pathologically dilated, so the resistance is too low to maintain a perfusing pressure. The correct fix is a vasoconstrictor, and norepinephrine, a predominantly alpha-1 agonist, is the first-line vasopressor in septic shock. Dobutamine is the strong distractor because it is a potent inotrope, but it also causes beta-2 mediated vasodilation and would drop this already-low SVR further. Furosemide would worsen hypotension. Low-dose dopamine for renal protection is a disproven practice — the evidence shows there is no such thing as a renal-protective dose."
 },
 {
  "id": "n504e1q23",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "During a peripheral norepinephrine infusion the nurse finds the IV site blanched, cool, and swollen, with the patient reporting burning pain. Which action should the nurse take FIRST?",
  "options": [
   "Flush the catheter with 10 mL of normal saline to confirm patency",
   "Stop the infusion and leave the catheter in place",
   "Remove the catheter immediately and apply a warm compress",
   "Slow the infusion rate and continue to monitor the site"
  ],
  "correct": [
   1
  ],
  "rationale": "Norepinephrine is a potent vasoconstricting vesicant, and extravasation causes intense local ischemia that can progress to tissue necrosis and sloughing. The first action is to stop the infusion, but the catheter is left in place so that residual drug can be aspirated and an antidote such as phentolamine can be infiltrated through it. Removing the catheter immediately is the most tempting wrong answer, because it feels protective, yet it discards the access route needed to treat the injury. Flushing pushes more vesicant into the tissue. Slowing the rate continues the injury. Treating extravasation quickly is what limits the damage."
 },
 {
  "id": "n504e1q24",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "A patient with decompensated heart failure is started on a dobutamine infusion. Which finding indicates the drug is producing its intended effect?",
  "options": [
   "The cardiac index has risen from 1.9 to 2.8 L/min/m2 and the urine output has improved",
   "The systemic vascular resistance has risen and the extremities are cooler",
   "The pulmonary artery occlusion pressure has risen from 12 to 24 mm Hg",
   "The heart rate has fallen from 98 to 62 beats/min"
  ],
  "correct": [
   0
  ],
  "rationale": "Dobutamine is a synthetic catecholamine acting chiefly on beta-1 receptors to increase contractility, which raises stroke volume and cardiac output; improved organ perfusion then shows up as rising urine output, warmer extremities, clearer mentation, and a falling PCWP. A rising cardiac index with better urine output is therefore the therapeutic response. Rising SVR with cool extremities describes a vasoconstrictor, not an inodilator. A falling heart rate is not expected — dobutamine more often causes tachycardia and ectopy, which are among its main adverse effects. A rising PCWP would signal worsening left heart failure, the opposite of the goal."
 },
 {
  "id": "n504e1q25",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "A patient with low cardiac output after cardiac surgery is receiving a milrinone infusion. Which assessment finding most requires the nurse's attention?",
  "options": [
   "The extremities have become warmer",
   "The heart rate has increased from 76 to 84 beats/min",
   "Urine output has increased to 70 mL/hr",
   "Blood pressure has fallen from 112/64 to 82/44 mm Hg"
  ],
  "correct": [
   3
  ],
  "rationale": "Milrinone is a phosphodiesterase-3 inhibitor and an inodilator: it increases contractility while lowering both systemic and pulmonary vascular resistance. That vasodilation makes hypotension its signature adverse effect, often severe enough that a vasopressor such as norepinephrine must be added alongside it. A blood pressure dropping into the 80s over 40s therefore demands immediate attention. Rising urine output and warming extremities are exactly the improved-perfusion findings the drug is given to produce, and a modest heart rate rise to 84 is unremarkable — milrinone causes comparatively little increase in heart rate, which is one of its advantages over dobutamine."
 },
 {
  "id": "n504e1q26",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "A patient in vasodilatory shock is already receiving high-dose norepinephrine when vasopressin 0.03 units/min is added. Which statement best explains the rationale for adding this second agent?",
  "options": [
   "Vasopressin is a positive inotrope that will improve contractility",
   "Vasopressin acts on V1 receptors and produces vasoconstriction through a non-catecholamine pathway",
   "Vasopressin will increase the heart rate and therefore the cardiac output",
   "Vasopressin reverses the peripheral ischemia caused by norepinephrine"
  ],
  "correct": [
   1
  ],
  "rationale": "Vasopressin is an endogenous peptide that constricts vessels through V1 receptors, a mechanism entirely separate from the adrenergic receptors norepinephrine uses. That is precisely why it is added in catecholamine-resistant shock: it raises the MAP by a different pathway and allows the catecholamine dose to be reduced. It has no inotropic action, and it does not raise the heart rate — it is a pure vasoconstrictor. The last option inverts reality: vasopressin causes its OWN vasoconstrictive complications, including splanchnic and peripheral ischemia, so both drugs together increase rather than relieve that risk."
 },
 {
  "id": "n504e1q27",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "A patient receiving a dopamine infusion at 14 mcg/kg/min develops cool, mottled feet, diminished pedal pulses, and frequent premature ventricular contractions. Which explanation best accounts for these findings?",
  "options": [
   "The findings indicate an allergic reaction to dopamine and the infusion should be stopped for anaphylaxis",
   "At this dose dopamine is acting on dopaminergic receptors and dilating the renal vasculature",
   "At this dose dopamine is producing predominantly alpha-adrenergic vasoconstriction and increased ectopy",
   "These findings are expected beta-2 effects and require no intervention"
  ],
  "correct": [
   2
  ],
  "rationale": "Dopamine is dose-dependent, which is what makes it difficult to use and largely why it has fallen out of favor. At roughly 1 to 5 mcg/kg/min dopaminergic effects predominate; at 5 to 10 mcg/kg/min beta-1 effects predominate; and above about 10 mcg/kg/min alpha effects take over, producing intense vasoconstriction. At 14 mcg/kg/min the cool mottled extremities and diminished pulses are alpha-mediated peripheral ischemia, and dopamine is also well documented to cause more tachydysrhythmias than norepinephrine. Dopaminergic renal vasodilation belongs to the low-dose range. These are predictable pharmacologic effects rather than an allergy, and calling them beta-2 effects is backwards, since beta-2 stimulation dilates."
 },
 {
  "id": "n504e1q28",
  "exam": 1,
  "topic": "Adrenergic receptors",
  "type": "sata",
  "stem": "A nurse is reviewing adrenergic receptor physiology before titrating vasoactive infusions. Which statements are accurate? Select all that apply.",
  "options": [
   "Alpha-1 stimulation causes vasoconstriction of most vascular smooth muscle",
   "Beta-1 stimulation increases heart rate and force of contraction",
   "Beta-2 stimulation causes relaxation of bronchial and vascular smooth muscle",
   "Alpha-1 stimulation causes bronchodilation and is the basis for treating asthma",
   "Alpha-2 stimulation in the heart is the primary driver of increased contractility"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The mnemonic is one heart and two lungs: alpha-1 and beta-1 dominate cardiovascular effects while alpha-2 and beta-2 are prominent in the lungs, with alpha-1 and beta-2 also found in blood vessels. Alpha-1 constricts vessels, beta-1 raises rate (chronotropy) and force (inotropy), and beta-2 relaxes bronchial and vascular smooth muscle, which is why beta-2 agonists are rescue inhalers. Both false statements misassign a receptor: bronchodilation is a BETA-2 effect rather than an alpha-1 effect, and increased contractility is driven by beta-1, not alpha-2 — alpha-2 receptors sit on vascular adrenergic nerve terminals and inhibit sympathetic outflow."
 },
 {
  "id": "n504e1q29",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "sata",
  "stem": "Which nursing responsibilities apply when administering a continuous vasoactive infusion such as norepinephrine or dobutamine? Select all that apply.",
  "options": [
   "Administer through an infusion pump",
   "Maintain continuous cardiac and hemodynamic monitoring",
   "Monitor the infusion site closely for infiltration",
   "Monitor urine output as an indicator of organ perfusion",
   "Titrate the infusion to the heart rate rather than to the prescribed blood pressure parameters"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Vasoactive infusions are high-alert medications: they require a pump because small rate changes produce large hemodynamic effects, continuous cardiac and hemodynamic monitoring because they alter rate, rhythm, and pressure, close site surveillance because infiltration of a vasopressor can cause tissue necrosis and sloughing, and urine output monitoring because it is a practical bedside marker of whether the improved pressure is actually translating into organ perfusion. Titrating to heart rate is the item to reject — these drugs are titrated to the specific parameter the prescriber ordered, almost always a MAP or blood pressure goal, and heart rate is monitored as a safety and side-effect measure instead."
 },
 {
  "id": "n504e1q30",
  "exam": 1,
  "topic": "Vasoactive drugs",
  "type": "mcq",
  "stem": "A patient with acute pulmonary edema from left ventricular failure has a blood pressure of 168/96 mm Hg and a PCWP of 26 mm Hg. Which pharmacologic strategy best fits this patient's physiology?",
  "options": [
   "Aggressive fluid loading, to optimize the Frank-Starling relationship",
   "Vasodilation, to reduce afterload and preload and improve forward flow",
   "Vasoconstriction, to raise the perfusion pressure to the coronary arteries",
   "Beta-2 agonist therapy, to reduce systemic vascular resistance and bronchospasm"
  ],
  "correct": [
   1
  ],
  "rationale": "Whether to vasodilate or vasoconstrict depends entirely on the underlying cardiac pathology. Here the left ventricle is failing against a high pressure, and the high PCWP shows it is already overfilled. Vasodilation lowers the resistance the ventricle must eject against, increases forward flow to the organs, and drops the filling pressure so fluid stops being forced into the alveoli — this is why vasodilators and nitrates are mainstays of left-sided failure. Vasoconstriction would raise afterload and worsen the pulmonary edema. Fluid loading is directly harmful with a PCWP of 26. A beta-2 agonist is not a systemic afterload-reduction strategy."
 },
 {
  "id": "n504e1q31",
  "exam": 1,
  "topic": "Shock recognition",
  "type": "sata",
  "stem": "Which assessment findings suggest that a patient's tissue perfusion is inadequate despite a blood pressure that still appears acceptable? Select all that apply.",
  "options": [
   "New confusion and restlessness",
   "Urine output of 12 mL/hr for two consecutive hours",
   "Cool, mottled knees with delayed capillary refill",
   "A serum lactate that has fallen steadily over the past 4 hours",
   "Bounding peripheral pulses with warm, pink extremities"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Blood pressure is a late and unreliable marker because compensatory vasoconstriction protects it while perfusion is already failing, so the nurse watches the organs instead. Confusion and restlessness reflect cerebral hypoperfusion and are often the earliest change, urine under about 30 mL/hr reflects renal hypoperfusion, and cool mottled skin with delayed refill reflects peripheral shunting. A steadily FALLING lactate is the trap: a rising lactate signals anaerobic metabolism, while a falling one is evidence that perfusion is improving. Bounding pulses with warm pink extremities likewise describe a well-perfused or hyperdynamic state rather than failing perfusion."
 },
 {
  "id": "n504e1q32",
  "exam": 1,
  "topic": "ECG components",
  "type": "mcq",
  "stem": "A nurse is reviewing a telemetry strip. Which statement correctly describes what the waveforms represent?",
  "options": [
   "The P wave represents atrial depolarization and the QRS complex represents ventricular depolarization",
   "The P wave represents atrial contraction and the T wave represents atrial repolarization",
   "The QRS complex represents ventricular repolarization and the T wave represents ventricular depolarization",
   "The PR interval represents the time the ventricles take to depolarize and contract"
  ],
  "correct": [
   0
  ],
  "rationale": "The P wave is atrial depolarization, which leads to atrial contraction; the QRS complex is ventricular depolarization, leading to ventricular contraction; and the T wave is ventricular REpolarization, the electrical resetting of the ventricles. The second option is the classic trap, because it correctly identifies the P wave but then assigns atrial repolarization to the T wave — atrial repolarization is buried inside the QRS and is not normally visible. The third option reverses QRS and T entirely. The PR interval spans the beginning of atrial depolarization to the beginning of ventricular depolarization, so it measures conduction delay through the AV node, not ventricular depolarization itself."
 },
 {
  "id": "n504e1q33",
  "exam": 1,
  "topic": "ECG intervals",
  "type": "mcq",
  "stem": "A nurse measures a PR interval that spans seven small boxes. Which interpretation and action are correct?",
  "options": [
   "The PR interval is 0.28 second, which is prolonged and should be reported",
   "The PR interval is 0.28 second, which is within the normal range of 0.12 to 0.20 second",
   "The PR interval is 0.14 second, which is normal and requires no action",
   "The PR interval is 1.4 seconds, which is incompatible with life"
  ],
  "correct": [
   0
  ],
  "rationale": "Each small box equals 0.04 second, so seven small boxes is 7 x 0.04 = 0.28 second. The normal PR interval is 0.12 to 0.20 second, so 0.28 is prolonged, which represents delayed conduction through the AV node and is the defining feature of first-degree AV block. It should be reported and the patient assessed for causes such as AV nodal blocking drugs, ischemia, or electrolyte disturbance. The 0.14 answer comes from using 0.02 per box, and the 1.4 answer from using 0.2 per small box — 0.2 second is the value of a LARGE box, and mixing the two up is the most common measurement error on strip analysis."
 },
 {
  "id": "n504e1q34",
  "exam": 1,
  "topic": "ECG intervals",
  "type": "mcq",
  "stem": "A telemetry strip shows a QRS complex that measures 0.16 second. What does this finding indicate?",
  "options": [
   "The impulse is being conducted normally through the His-Purkinje system",
   "Conduction through the ventricles is abnormally slow, suggesting a ventricular origin or a bundle branch block",
   "The atria are depolarizing more slowly than normal",
   "The finding is normal for an adult and requires no further assessment"
  ],
  "correct": [
   1
  ],
  "rationale": "A normal QRS is 0.06 to 0.12 second, reflecting the speed with which the His-Purkinje system spreads the impulse through the ventricles. A QRS wider than 0.12 second means that rapid pathway is not being used normally — either the impulse originated in the ventricle itself, as in a PVC or ventricular tachycardia, or it originated above but is being conducted aberrantly, as in a bundle branch block. This is a key discriminator: a narrow QRS tells the nurse the rhythm arose at or above the AV junction, while a wide QRS shifts suspicion to the ventricles. Atrial depolarization is represented by the P wave, not the QRS."
 },
 {
  "id": "n504e1q35",
  "exam": 1,
  "topic": "Rate calculation",
  "type": "mcq",
  "stem": "On a 6-second rhythm strip the nurse counts 9 QRS complexes and 9 P waves, with a constant R-to-R interval, a PR interval of 0.16 second, and a QRS of 0.08 second. Which interpretation is correct?",
  "options": [
   "Sinus bradycardia at 54 beats/min",
   "Normal sinus rhythm at 90 beats/min",
   "Sinus tachycardia at 108 beats/min",
   "Atrial fibrillation at 90 beats/min"
  ],
  "correct": [
   1
  ],
  "rationale": "On a 6-second strip the rate is the number of QRS complexes multiplied by 10, so 9 x 10 = 90 beats/min. Every criterion for normal sinus rhythm is met: a rate of 60 to 100, a regular R-to-R interval, one upright P wave for every QRS, a PR interval within 0.12 to 0.20 second, and a QRS within 0.06 to 0.12 second. Because the P and QRS counts are identical, the atrial and ventricular rates match, which rules out a block. Atrial fibrillation is excluded by the presence of discernible P waves and a regular rhythm — in atrial fibrillation the P waves are absent and the ventricular response is irregularly irregular."
 },
 {
  "id": "n504e1q36",
  "exam": 1,
  "topic": "ECG paper",
  "type": "mcq",
  "stem": "A nursing student asks how the time values on ECG paper are derived. Which response by the nurse is correct?",
  "options": [
   "Each small box is 0.04 second, each large box is 0.20 second, and five large boxes equal one second",
   "Each small box is 0.20 second and each large box is 1.0 second",
   "Each small box is 0.04 second and each large box is 0.04 second measured vertically",
   "Each large box is 0.04 second, so a 6-second strip contains 30 large boxes"
  ],
  "correct": [
   0
  ],
  "rationale": "Standardized ECG paper runs at 25 mm/second: each small box is 0.04 second, each large box contains five small boxes and therefore equals 0.20 second, and five large boxes equal one full second. That last relationship is what makes a 6-second strip 30 large boxes long and what lets the nurse count complexes and multiply by 10 to get the rate. The second option inflates every value fivefold. The third confuses the horizontal axis, which measures time, with the vertical axis, which measures amplitude in millivolts. The fourth assigns the small-box value to the large box."
 },
 {
  "id": "n504e1q37",
  "exam": 1,
  "topic": "Telemetry monitoring",
  "type": "mcq",
  "stem": "A nurse observes a chaotic, spiky baseline on a patient's telemetry monitor with no discernible QRS complexes. Which action should the nurse take FIRST?",
  "options": [
   "Call a code blue and begin chest compressions",
   "Go to the room and assess the patient",
   "Defibrillate at 200 joules",
   "Obtain a 12-lead ECG and notify the provider"
  ],
  "correct": [
   1
  ],
  "rationale": "Monitors display electrical signals, not patients, and a chaotic baseline is far more often artifact from a loose lead, patient movement, shivering, or brushing teeth than it is a lethal rhythm. The first and fastest action is always to look at the patient: an alert, talking patient has artifact, while an unresponsive pulseless patient has ventricular fibrillation and needs a code called and compressions started immediately. Assessing takes seconds and determines which of the other three actions is correct. Defibrillating on the basis of a monitor tracing alone, without confirming unresponsiveness and pulselessness, would shock a conscious patient."
 },
 {
  "id": "n504e1q38",
  "exam": 1,
  "topic": "Lead placement",
  "type": "sata",
  "stem": "Which nursing responsibilities apply to the care of a patient on continuous telemetry monitoring? Select all that apply.",
  "options": [
   "Verify that a medical order exists for telemetry monitoring",
   "Obtain an order before removing telemetry so the patient can shower",
   "Change the lead pads approximately every 7 days",
   "Document a rhythm strip only when the monitor alarms",
   "Reposition the electrodes over bony prominences to improve signal quality"
  ],
  "correct": [
   0,
   1
  ],
  "rationale": "Telemetry is an ordered intervention: an order is required to monitor, to remove the patient from monitoring for bathing or showering, and to take the patient off the unit. The three false options each misstate a real standard. Lead pads are changed approximately every 24 hours, not every 7 days, because the conductive gel dries out and produces artifact and skin irritation. A rhythm strip is measured and documented on a set schedule — commonly every 4 to 8 hours on a telemetry floor and hourly or more often in the ICU or ED — rather than only when an alarm sounds. And electrodes belong on flat, fleshy areas over soft tissue, because placement over bone or muscle mass increases artifact rather than reducing it."
 },
 {
  "id": "n504e1q39",
  "exam": 1,
  "topic": "Lead placement",
  "type": "mcq",
  "stem": "A nurse is applying a five-lead telemetry system. Which placement is correct?",
  "options": [
   "All five electrodes are placed across the anterior chest in a horizontal line",
   "White to the right arm, black to the left arm, green to the right leg, red to the left leg, brown at V1",
   "White to the right leg, black to the left leg, green to the right arm, red to the left arm, brown at V6",
   "White to the left arm, black to the right arm, red to the right leg, green to the left leg, brown at V1"
  ],
  "correct": [
   1
  ],
  "rationale": "The standard five-lead arrangement is white to the right arm, black to the left arm, green to the right leg, red to the left leg, and brown at the V1 position. The memory aids are white on right, smoke over fire (black above red on the left side), and grass below sky on the right (green below white). Reversing limb leads is not a harmless error — it inverts waveforms and can mimic a pathologic finding, which is exactly why lead misplacement is a recognized cause of false ECG diagnoses. The placements must be anatomically correct, since each lead provides a different view or angle of the heart's electrical activity."
 },
 {
  "id": "n504e1q40",
  "exam": 1,
  "topic": "Sinus bradycardia",
  "type": "mcq",
  "stem": "A nurse is caring for a 25-year-old competitive cyclist on the night shift after facial surgery. The monitor alarms for a heart rate of 42 beats/min. The patient is asleep, breathing comfortably, and warm and dry. Which action should the nurse take FIRST?",
  "options": [
   "Compare the current rate with the patient's previously documented heart rates",
   "Notify the provider immediately",
   "Apply transcutaneous pacing pads and prepare to pace",
   "Administer atropine 1 mg IV"
  ],
  "correct": [
   0
  ],
  "rationale": "Bradycardia is only meaningful in context. Sinus bradycardia is a normal finding in a sleeping patient, a young patient, and a physically conditioned athlete — and this patient is all three. Before treating a number, the nurse establishes whether it represents a change by comparing it with the patient's baseline and by assessing for symptoms of poor perfusion such as hypotension, syncope, chest pain, dizziness, or altered mentation. Atropine and pacing are reserved for SYMPTOMATIC bradycardia, and giving atropine to an asymptomatic conditioned athlete produces unnecessary tachycardia and increased myocardial oxygen demand. Notifying the provider is reasonable later but is premature before the nurse has gathered the comparison data."
 },
 {
  "id": "n504e1q41",
  "exam": 1,
  "topic": "Sinus tachycardia",
  "type": "mcq",
  "stem": "A patient on telemetry develops sinus tachycardia at 124 beats/min and reports palpitations and anxiety. Which intervention should the nurse implement FIRST?",
  "options": [
   "Instruct the patient to perform a Valsalva maneuver",
   "Prepare the patient for synchronized cardioversion",
   "Prepare to administer a beta-blocker",
   "Assess for underlying causes such as pain, fever, hypovolemia, or hypoxemia"
  ],
  "correct": [
   3
  ],
  "rationale": "Sinus tachycardia is almost always a symptom rather than a disease — the SA node is firing fast because something is demanding it, whether pain, fever, anxiety, anemia, hypovolemia, hemorrhage, hypoxemia, infection, hyperthyroidism, dehydration, or a drug effect. The treatment is to find and correct that cause, because slowing the rate while leaving the cause untreated removes the patient's compensation and can be dangerous, which is the trap in the beta-blocker option. Vagal maneuvers are used for SVT, not sinus tachycardia, and would be ineffective here. Cardioversion is reserved for unstable tachydysrhythmias, and a rate of 124 from a normally responding sinus node is not one."
 },
 {
  "id": "n504e1q42",
  "exam": 1,
  "topic": "Strip analysis",
  "type": "mcq",
  "stem": "A nurse analyzes a rhythm strip and finds: P waves upright and present before every QRS, PR interval 0.12 second, QRS 0.04 second, irregular R-to-R intervals that vary with respiration, and a rate in the 50s. Which interpretation is correct?",
  "options": [
   "Atrial fibrillation with a slow ventricular response",
   "Sinus arrhythmia with bradycardia",
   "Second-degree AV block",
   "Normal sinus rhythm with premature atrial contractions"
  ],
  "correct": [
   1
  ],
  "rationale": "Every impulse is arising from the SA node — an upright P wave precedes each QRS and the PR interval is normal — so this is a sinus rhythm; the rate under 60 makes it bradycardic; and the R-to-R variation that follows the respiratory cycle defines sinus arrhythmia, a normal variant especially in the young. Atrial fibrillation is excluded because P waves are clearly present and the irregularity here has a pattern rather than being irregularly irregular. A second-degree block would show dropped QRS complexes or a progressively lengthening PR interval. Premature atrial contractions would appear as early beats with abnormal P waves interrupting an otherwise regular rhythm."
 },
 {
  "id": "n504e1q43",
  "exam": 1,
  "topic": "Conduction system",
  "type": "mcq",
  "stem": "A patient's SA node fails and a junctional escape rhythm takes over. Which rate should the nurse anticipate, and why?",
  "options": [
   "60 to 100 beats/min, because all pacemaker sites share the same intrinsic rate",
   "100 to 120 beats/min, because escape pacemakers fire faster to compensate",
   "20 to 40 beats/min, because the AV node is the slowest pacemaker in the heart",
   "40 to 60 beats/min, because pacemaker sites lower in the conduction system have slower intrinsic rates"
  ],
  "correct": [
   3
  ],
  "rationale": "The conduction system has a built-in hierarchy of backup pacemakers, and the rule is that the farther down the pathway a site sits, the slower it fires: the SA node paces at 60 to 100, the AV junction at roughly 40 to 60, and the bundle of His, bundle branches, and Purkinje fibers at roughly 20 to 40. This is clinically important because every escape rhythm is slow and therefore likely to be symptomatic, producing a fall in cardiac output and perfusion. The 20 to 40 range belongs to the ventricular escape pacemakers rather than the AV junction, and no escape site speeds up to compensate for a failed SA node."
 },
 {
  "id": "n504e1q44",
  "exam": 1,
  "topic": "Strip analysis",
  "type": "sata",
  "stem": "Which criteria must all be met for a rhythm to be classified as normal sinus rhythm? Select all that apply.",
  "options": [
   "Rate between 60 and 100 beats/min",
   "Regular R-to-R intervals",
   "One upright P wave preceding every QRS complex",
   "PR interval between 0.12 and 0.20 second",
   "QRS duration greater than 0.12 second"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Normal sinus rhythm means the SA node is in charge and conducting normally to the ventricles, which requires all four of the first criteria: a rate of 60 to 100, a regular rhythm with constant R-to-R intervals, a single upright P wave before each QRS confirming the SA node origin, and a PR interval of 0.12 to 0.20 second showing normal AV nodal conduction. The QRS criterion is stated backwards: a normal QRS is 0.06 to 0.12 second, and a QRS GREATER than 0.12 second is abnormal, indicating a ventricular origin or a bundle branch block. Recognizing an absent or inverted P wave is what lets the nurse rule out sinus rhythm immediately."
 },
 {
  "id": "n504e1q45",
  "exam": 1,
  "topic": "Hemodynamic monitoring",
  "type": "mcq",
  "stem": "The nurse is explaining to a new graduate why hemodynamic monitoring is used in critically ill patients. Which statement is most accurate?",
  "options": [
   "It provides quantitative information about blood volume, vascular tone, pump effectiveness, and tissue perfusion",
   "It replaces the physical assessment in patients who are intubated and sedated",
   "It is used primarily to determine when a patient is ready for discharge to a medical-surgical unit",
   "Its main purpose is to detect dysrhythmias earlier than telemetry can"
  ],
  "correct": [
   0
  ],
  "rationale": "Hemodynamic monitoring provides quantitative data about vascular capacity, blood volume, pump effectiveness or contractility, tissue perfusion, and oxygenation, and it is used to maintain organ perfusion, to identify life-threatening complications early, to guide fluids and drug therapy, and to evaluate whether interventions are actually working. It supplements the physical assessment and never replaces it — the whole discipline rests on assessing the patient first and then the numbers. Discharge readiness is not its purpose, and dysrhythmia detection is the function of continuous ECG monitoring, not of pressure monitoring."
 },
 {
  "id": "n504e1q46",
  "exam": 1,
  "topic": "Vital signs and perfusion",
  "type": "mcq",
  "stem": "A patient's oxygen saturation reads 97% on room air, yet the patient is confused with a lactate of 4.2 mmol/L, a MAP of 58 mm Hg, and cool extremities. Which explanation best reconciles these findings?",
  "options": [
   "Oxygen is loading onto hemoglobin adequately, but perfusion pressure is too low to deliver it to the tissues",
   "A MAP of 58 mm Hg is adequate, so an alternate cause of the confusion should be sought",
   "The pulse oximeter is malfunctioning and the true saturation must be low",
   "The elevated lactate is unrelated to perfusion and reflects only the patient's respiratory rate"
  ],
  "correct": [
   0
  ],
  "rationale": "Oxygen saturation and perfusion answer different questions. Saturation measures the physiology of gas exchange — whether oxygen is getting from the lungs onto the hemoglobin — and 97% says that step is working. Blood pressure measures perfusion, whether those loaded red cells are actually reaching tissue and unloading there. A MAP of 58 is below the 65 threshold, and the confusion, cool extremities, and lactate of 4.2 are the tissues reporting that they have shifted to anaerobic metabolism. Nothing here suggests oximeter failure. Dismissing a MAP of 58 as adequate is the dangerous distractor, since it would send the nurse hunting for a neurologic cause while the patient is in shock."
 },
 {
  "id": "n504e1q47",
  "exam": 1,
  "topic": "Preload and afterload",
  "type": "mcq",
  "stem": "A new graduate nurse asks how to keep preload and afterload straight. Which explanation by the preceptor is most accurate?",
  "options": [
   "Preload is the volume filling the ventricle at the end of diastole; afterload is the resistance it must overcome during systole",
   "Preload is the resistance the ventricle pumps against; afterload is the stretch of the ventricle before contraction",
   "Both preload and afterload are determined primarily by the heart rate",
   "Preload occurs during systole and afterload occurs during diastole"
  ],
  "correct": [
   0
  ],
  "rationale": "Preload is a volume concept and asks how full the ventricle is at end-diastole, just before contraction; it is driven by venous return and circulating volume, and it rises with fluid overload, heart failure, and renal failure while falling with hemorrhage, dehydration, diuretics, and nitrates. Afterload is a pressure concept and asks how hard the ventricle must push to open the aortic valve and eject; it is driven chiefly by systemic vascular resistance and rises with hypertension, vasoconstriction, and aortic stenosis while falling with vasodilators, ACE inhibitors, and ARBs. The second option reverses the two definitions, and the fourth reverses the phases of the cardiac cycle."
 },
 {
  "id": "n504e1q48",
  "exam": 1,
  "topic": "Arterial line",
  "type": "mcq",
  "stem": "A nurse enters the room and finds an arterial line disconnected at the transducer tubing with blood pooling on the bed linens. Which action should the nurse take FIRST?",
  "options": [
   "Apply direct pressure to the insertion site and occlude the open catheter",
   "Call the rapid response team",
   "Obtain a new sterile transducer set and reconnect the system",
   "Hang a 500 mL normal saline bolus and obtain a type and screen"
  ],
  "correct": [
   0
  ],
  "rationale": "An arterial catheter sits in a high-pressure vessel, so a disconnection produces rapid, arterial-force blood loss that can become life-threatening within minutes. The immediate priority is to stop the bleeding by occluding the open catheter and applying direct pressure to the site — this is one of the few situations where the very first action is a physical intervention rather than assessment, because the hemorrhage is both obvious and actively ongoing. Calling for help, replacing the tubing under sterile conditions, and volume resuscitation all follow, but each of them takes time during which the patient would continue to bleed. This is also why arterial line connections are kept tight and the site is never buried under bed linens."
 },
 {
  "id": "n504e1q49",
  "exam": 1,
  "topic": "FloTrac and CO monitoring",
  "type": "mcq",
  "stem": "A patient has a FloTrac sensor attached to an existing arterial line. Which statement correctly describes what this device provides?",
  "options": [
   "Continuous cardiac output and cardiac index derived from the arterial waveform",
   "Continuous mixed venous oxygen saturation from the pulmonary artery",
   "Direct measurement of pulmonary capillary wedge pressure",
   "Transcutaneous pacing capability if the patient becomes bradycardic"
  ],
  "correct": [
   0
  ],
  "rationale": "A FloTrac or Vigileo system attaches to an existing arterial line and analyzes the arterial pressure waveform to derive continuous cardiac output and cardiac index without threading a catheter into the pulmonary artery. That is its appeal: it gives flow data with far less risk than a pulmonary artery catheter, which carries significant infection and thrombosis risks and is used much less than it once was. Pulmonary capillary wedge pressure and mixed venous oxygen saturation require a catheter physically positioned in the pulmonary artery, so neither can come from a peripheral arterial line, and pacing is an entirely unrelated function."
 },
 {
  "id": "n504e1q50",
  "exam": 1,
  "topic": "Hemodynamic integration",
  "type": "sata",
  "stem": "A patient in the ICU has these values: heart rate 132 beats/min, blood pressure 86/58 mm Hg, CVP 2 mm Hg, cardiac index 1.9 L/min/m2, and urine output 10 mL/hr. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Calculate the MAP and compare it with the ordered perfusion goal",
   "Anticipate a prescription for a fluid challenge",
   "Assess the patient's mental status, skin temperature, and capillary refill",
   "Anticipate a prescription for IV furosemide to improve the urine output",
   "Anticipate a prescription for IV metoprolol to bring the heart rate below 100"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The pattern is hypovolemia: a CVP of 2 is below the normal 2 to 6, the heart rate of 132 and MAP of 67 reflect compensation, and the cardiac index of 1.9 with 10 mL/hr of urine shows that compensation is failing. Calculating the MAP against the ordered goal, anticipating a fluid challenge, and performing a perfusion-focused assessment are all appropriate. Both false options treat a compensatory sign as the disease. Furosemide would strip away the little volume this patient has, because the oliguria reflects poor renal perfusion rather than fluid overload. Metoprolol would remove the tachycardia that is the only thing currently sustaining cardiac output."
 },
 {
  "id": "n504e2q01",
  "exam": 2,
  "topic": "Atrial fibrillation",
  "type": "mcq",
  "stem": "A nurse analyzes a rhythm strip showing no discernible P waves, an erratic wavy baseline, irregularly irregular R-to-R intervals, a QRS of 0.08 second, and a ventricular rate of 132 beats/min. Which interpretation is correct?",
  "options": [
   "Atrial flutter with variable conduction",
   "Sinus tachycardia with premature atrial contractions",
   "Multifocal ventricular tachycardia",
   "Atrial fibrillation with a rapid ventricular response"
  ],
  "correct": [
   3
  ],
  "rationale": "Atrial fibrillation arises from multiple disorganized atrial foci firing at more than 300 to 350 per minute, so the atria quiver rather than contract; the ECG shows absent P waves, an erratic baseline, no measurable PR interval, and an irregularly irregular ventricular response, with a normal QRS because conduction below the AV node is intact. A ventricular rate above 100 makes this rapid atrial fibrillation, or RVR. Atrial flutter is the strongest distractor, but flutter has organized sawtooth flutter waves rather than a chaotic baseline. Ventricular tachycardia would have a wide QRS, and premature atrial contractions would interrupt an otherwise regular sinus rhythm with visible P waves."
 },
 {
  "id": "n504e2q02",
  "exam": 2,
  "topic": "Atrial fibrillation",
  "type": "sata",
  "stem": "A patient is newly diagnosed with atrial fibrillation. Which complications should the nurse recognize this patient is at increased risk for? Select all that apply.",
  "options": [
   "Ischemic stroke",
   "Heart failure",
   "Cognitive impairment and vascular dementia",
   "Hypertrophic obstructive cardiomyopathy",
   "Aortic valve stenosis"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "In atrial fibrillation the atria quiver instead of contracting, so blood pools and clots form — this is why embolic stroke is the signature complication and why long-term anticoagulation is a treatment goal. Loss of the atrial kick together with a persistently rapid ventricular rate reduces ventricular filling and cardiac output, leading to heart failure, and atrial fibrillation is also associated with higher rates of cognitive impairment, Alzheimer disease, and vascular dementia. The two false options invert the direction of causation: hypertrophic cardiomyopathy is a genetic myocardial disease and aortic stenosis is a valve lesion, and both can CAUSE atrial fibrillation rather than result from it."
 },
 {
  "id": "n504e2q03",
  "exam": 2,
  "topic": "Atrial fibrillation",
  "type": "mcq",
  "stem": "A patient in atrial fibrillation with a ventricular rate of 178 beats/min becomes diaphoretic and confused, with a blood pressure of 76/40 mm Hg. Which intervention should the nurse anticipate?",
  "options": [
   "Unsynchronized defibrillation at 200 joules",
   "Oral diltiazem and outpatient follow-up",
   "Immediate synchronized cardioversion",
   "Valsalva maneuver followed by reassessment"
  ],
  "correct": [
   2
  ],
  "rationale": "The distinguishing feature here is instability — hypotension, altered mentation, and diaphoresis mean the rapid rate has already compromised cardiac output, so there is no time for rate control to work. Synchronized cardioversion is the treatment for an unstable tachydysrhythmia that still has a pulse and an organized rhythm; the shock is timed to the R wave so it does not land on the vulnerable T wave. Oral medication is far too slow. Unsynchronized defibrillation is reserved for pulseless ventricular tachycardia and ventricular fibrillation, and delivering an untimed shock to a perfusing rhythm risks provoking ventricular fibrillation. Vagal maneuvers are used for SVT and would not control this rate."
 },
 {
  "id": "n504e2q04",
  "exam": 2,
  "topic": "Atrial flutter",
  "type": "mcq",
  "stem": "A nurse is interpreting a rhythm strip and notes that the R-to-R interval is constant throughout, the ventricular rate is 78 beats/min, the baseline shows a sawtooth pattern, and the QRS measures 0.10 second. Which rhythm is this?",
  "options": [
   "Atrial flutter",
   "Ventricular fibrillation",
   "Atrial fibrillation",
   "Normal sinus rhythm"
  ],
  "correct": [
   0
  ],
  "rationale": "The sawtooth baseline is the defining feature of atrial flutter, in which a single organized ectopic atrial focus fires at roughly 250 to 350 per minute and the AV node conducts only a fraction of those impulses to the ventricles. Here the ventricular rate is controlled at 78 with a narrow QRS and a regular rhythm. Atrial fibrillation is the closest distractor, but its foci are disorganized, so it produces a chaotic baseline and an irregularly irregular ventricular response rather than an organized sawtooth. Normal sinus rhythm requires one upright P wave before each QRS, which is absent here. Ventricular fibrillation has no organized complexes at all and no pulse."
 },
 {
  "id": "n504e2q05",
  "exam": 2,
  "topic": "Cardioversion",
  "type": "mcq",
  "stem": "A hemodynamically stable patient has been in atrial fibrillation for four days and is scheduled for elective cardioversion. Which action should the nurse anticipate before the procedure?",
  "options": [
   "A transesophageal echocardiogram to rule out atrial thrombus",
   "Withholding all anticoagulation for 24 hours before the procedure",
   "Administering atropine to increase the heart rate before the shock",
   "Holding the procedure until the patient has been in the rhythm for at least two weeks"
  ],
  "correct": [
   0
  ],
  "rationale": "Once atrial fibrillation has persisted beyond about 48 hours, clot may already have formed in the quivering atria. Restoring organized atrial contraction can then launch that clot into the systemic circulation and cause a stroke, so the standard approach is either several weeks of therapeutic anticoagulation first or a transesophageal echocardiogram to visualize the left atrium and exclude thrombus before cardioverting. Withholding anticoagulation before cardioversion is exactly backwards and is the dangerous distractor. Atropine has no role in preparing for cardioversion, and deliberately waiting two weeks while doing nothing does not address the clot risk."
 },
 {
  "id": "n504e2q06",
  "exam": 2,
  "topic": "SVT",
  "type": "mcq",
  "stem": "A stable patient reports a sudden onset of palpitations. The monitor shows a regular narrow-complex tachycardia at 196 beats/min with P waves buried in the T waves. Which intervention should the nurse implement FIRST?",
  "options": [
   "Administer adenosine 6 mg rapid IV push",
   "Instruct the patient to bear down as if having a bowel movement",
   "Prepare for immediate synchronized cardioversion",
   "Administer metoprolol 5 mg IV push"
  ],
  "correct": [
   1
  ],
  "rationale": "This is supraventricular tachycardia: the atria or AV junction have taken over from the SA node, the rate is typically 150 to 250, the rhythm is regular, the QRS is narrow, and the P wave is merged into the T wave because the rate is so fast. In a STABLE patient the first intervention is the least invasive one that can work — a vagal maneuver such as bearing down, which increases parasympathetic tone and can break the reentry circuit through the AV node. Ice to the back of the neck is another option. Adenosine and beta-blockers are the next step if vagal maneuvers fail, and cardioversion is reserved for the unstable patient."
 },
 {
  "id": "n504e2q07",
  "exam": 2,
  "topic": "Adenosine",
  "type": "mcq",
  "stem": "A nurse is preparing to administer adenosine 6 mg IV for supraventricular tachycardia. Which administration technique is correct?",
  "options": [
   "Dilute in 100 mL of normal saline and infuse over 30 minutes",
   "Infuse over 15 minutes through a peripheral line with continuous monitoring",
   "Push rapidly over 1 to 2 seconds and follow immediately with a rapid saline flush",
   "Administer as a slow IV push over 5 minutes to reduce flushing"
  ],
  "correct": [
   2
  ],
  "rationale": "Adenosine has an extremely short half-life — only a few seconds — so it must reach the AV node in a concentrated bolus to work. It is pushed rapidly over 1 to 2 seconds through a site as close to the heart as possible and followed immediately by a rapid saline flush, most easily managed with a three-way stopcock so the flush follows without delay. Any slower administration allows the drug to be metabolized before it arrives, and the dose is simply wasted. This is the single most commonly missed point about adenosine, and every distractor here describes an infusion rate that guarantees the drug will fail."
 },
 {
  "id": "n504e2q08",
  "exam": 2,
  "topic": "Adenosine",
  "type": "sata",
  "stem": "Which nursing actions are appropriate when administering adenosine for supraventricular tachycardia? Select all that apply.",
  "options": [
   "Have emergency resuscitation equipment immediately available",
   "Maintain continuous cardiac monitoring throughout administration",
   "Assess whether the patient has a history of asthma or COPD",
   "Dilute the dose in 50 mL of normal saline and infuse over 20 minutes",
   "Withhold further doses if the patient has a brief pause in the rhythm after the first dose"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Adenosine transiently blocks conduction through the AV node, so resuscitation equipment must be at hand and continuous monitoring maintained, and the patient's asthma or COPD history must be assessed because the drug can cause bronchoconstriction. The two false options would each defeat the therapy. Adenosine has a half-life of only seconds, so it must be pushed rapidly over 1 to 2 seconds and followed immediately by a rapid saline flush; diluting it and infusing over 20 minutes guarantees it is metabolized before reaching the AV node. And a brief pause or period of asystole after the push is an EXPECTED part of how the drug works, not a reason to withhold further doses."
 },
 {
  "id": "n504e2q09",
  "exam": 2,
  "topic": "Premature contractions",
  "type": "mcq",
  "stem": "A patient newly diagnosed with premature atrial contractions tells the nurse, \"My heart keeps skipping — am I going to have a cardiac arrest?\" Which response by the nurse is most appropriate?",
  "options": [
   "\"We will start you on amiodarone today to prevent cardiac arrest.\"",
   "\"There is nothing to discuss — premature beats are completely normal and need no follow-up.\"",
   "\"These extra beats come from the atria and are usually benign; we will look at what may be triggering them, such as caffeine, nicotine, stress, or electrolytes.\"",
   "\"You are right to be worried; these beats often progress to ventricular fibrillation.\""
  ],
  "correct": [
   2
  ],
  "rationale": "Premature atrial contractions arise from an irritable atrial focus firing early. They are usually benign, and the nursing role is to provide accurate reassurance while identifying and modifying triggers — caffeine, energy drinks, nicotine, alcohol, stress, hypoxia, and electrolyte disturbance — along with cardiac monitoring and notifying the provider. Telling the patient they are likely to progress to ventricular fibrillation is both false and cruel; PACs are atrial in origin, and it is PVCs, not PACs, that raise concern about ventricular tachycardia. Dismissing the concern entirely shuts down a patient who is frightened, and starting amiodarone is a disproportionate response to a benign finding."
 },
 {
  "id": "n504e2q10",
  "exam": 2,
  "topic": "PVCs",
  "type": "mcq",
  "stem": "A postoperative patient develops frequent multifocal premature ventricular contractions. Which laboratory value should the nurse review FIRST?",
  "options": [
   "Serum potassium and magnesium",
   "Serum albumin",
   "White blood cell count",
   "Serum amylase"
  ],
  "correct": [
   0
  ],
  "rationale": "Electrolyte imbalance is among the most common and most correctable causes of ventricular ectopy, and potassium and magnesium are the two that matter most to myocardial cell membrane stability. Hypokalemia produces ST depression, T wave flattening, a prolonged QT interval, and increased ectopy; hypomagnesemia prolongs the PR and QT intervals, produces atrial and ventricular ectopy, and specifically predisposes to ventricular tachycardia and torsades de pointes. Correcting these is a first-line nursing intervention for PVCs. Albumin, white count, and amylase have no direct bearing on ventricular irritability, which is why replacing electrolytes is the intervention listed for PVCs alongside notifying the provider and monitoring."
 },
 {
  "id": "n504e2q11",
  "exam": 2,
  "topic": "PVCs",
  "type": "sata",
  "stem": "Which findings associated with premature ventricular contractions should prompt the nurse to notify the provider urgently? Select all that apply.",
  "options": [
   "PVCs increasing in frequency to more than 6 per minute",
   "Runs of three or more consecutive PVCs",
   "A PVC falling on the T wave of the preceding beat",
   "A single isolated PVC in an asymptomatic young adult",
   "New hypotension and lightheadedness accompanying the PVCs"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "PVCs matter when they signal that the ventricle is becoming unstable enough to degenerate into ventricular tachycardia. Increasing frequency, runs of three or more consecutive PVCs which by definition constitute a run of ventricular tachycardia, and the R-on-T phenomenon in which a PVC lands on the vulnerable repolarization period and can trigger ventricular tachycardia or fibrillation are all warning patterns. New hypotension and lightheadedness show the ectopy is already costing cardiac output. A single isolated PVC in an asymptomatic young adult is common and benign, and reporting it urgently would be an overreaction — the clinical skill being tested is telling benign ectopy from a warning pattern."
 },
 {
  "id": "n504e2q12",
  "exam": 2,
  "topic": "Ventricular tachycardia",
  "type": "mcq",
  "stem": "A monitor alarms showing a wide-complex tachycardia at 186 beats/min. The nurse enters the room and finds the patient awake, talking, with a blood pressure of 108/66 mm Hg. Which action should the nurse take FIRST?",
  "options": [
   "Begin chest compressions and call a code blue",
   "Defibrillate immediately at 200 joules",
   "Confirm the presence of a pulse and notify the provider or rapid response",
   "Administer adenosine 6 mg rapid IV push"
  ],
  "correct": [
   2
  ],
  "rationale": "With ventricular tachycardia the first branch point is always the same question: is there a pulse? Here the patient is awake, talking, and has a measurable blood pressure, so this is VT WITH a pulse, and the nursing actions are to confirm the pulse, escalate through the provider or rapid response, obtain a 12-lead ECG, anticipate amiodarone, and draw electrolytes. Compressions and defibrillation belong to PULSELESS ventricular tachycardia, and performing either on a conscious patient with a perfusing rhythm would cause harm. Adenosine is for supraventricular tachycardia with a narrow QRS and is not the treatment for a wide-complex ventricular rhythm."
 },
 {
  "id": "n504e2q13",
  "exam": 2,
  "topic": "Ventricular tachycardia",
  "type": "mcq",
  "stem": "A nurse finds a patient unresponsive with no pulse; the monitor shows a wide-complex tachycardia at 210 beats/min. A second nurse has begun compressions and a defibrillator is at the bedside. Which action should be taken NEXT?",
  "options": [
   "Administer amiodarone 300 mg IV push",
   "Defibrillate as soon as the device is charged",
   "Obtain a 12-lead ECG to confirm the rhythm",
   "Insert an advanced airway before any other intervention"
  ],
  "correct": [
   1
  ],
  "rationale": "Pulseless ventricular tachycardia is a shockable rhythm, and the single intervention that most improves survival is early defibrillation; every minute of delay reduces the chance of return of spontaneous circulation. Compressions are started and continued until the defibrillator is charged, then the shock is delivered and compressions resume immediately. Amiodarone and epinephrine are given during the resuscitation, but they follow defibrillation rather than replacing it. Taking time for a 12-lead ECG in a pulseless patient delays the one treatment that works, and advanced airway placement is a lower priority than early defibrillation and high-quality compressions."
 },
 {
  "id": "n504e2q14",
  "exam": 2,
  "topic": "Torsades de pointes",
  "type": "mcq",
  "stem": "A patient receiving multiple QT-prolonging medications develops a polymorphic ventricular tachycardia in which the QRS complexes appear to twist around the baseline. Which intervention should the nurse anticipate?",
  "options": [
   "IV calcium gluconate",
   "IV atropine",
   "IV magnesium sulfate",
   "IV adenosine"
  ],
  "correct": [
   2
  ],
  "rationale": "The twisting-around-the-baseline morphology identifies torsades de pointes, a polymorphic form of ventricular tachycardia associated with QT prolongation from drugs, hypomagnesemia, hypokalemia, and hypocalcemia. IV magnesium sulfate is the specific treatment and should be obtained immediately, alongside removing the offending drugs and correcting other electrolytes; if the patient is pulseless, defibrillation is required. Calcium gluconate treats hypocalcemia and is used in hyperkalemia to stabilize the myocardium, but it is not the torsades antidote. Atropine treats symptomatic bradycardia, and adenosine treats SVT — giving either here would waste the critical minutes in which magnesium should be running."
 },
 {
  "id": "n504e2q15",
  "exam": 2,
  "topic": "Ventricular fibrillation",
  "type": "mcq",
  "stem": "A nurse responds to a colleague calling for help and finds compressions in progress on an unresponsive, pulseless patient. The monitor shows chaotic, irregular waveforms of varying amplitude with no identifiable QRS complexes. Which action should the nurse anticipate NEXT?",
  "options": [
   "Obtain a 12-lead ECG",
   "Administer epinephrine 1 mg IV push",
   "Defibrillate the patient",
   "Insert an advanced airway"
  ],
  "correct": [
   2
  ],
  "rationale": "Chaotic waveforms with no identifiable QRS in a pulseless patient are ventricular fibrillation: the ventricles are quivering, the atria are electrically silent, there is no cardiac output, and the only intervention that restores an organized rhythm is defibrillation. The memory hook taught in this course is simply V-fib equals defib. Epinephrine, amiodarone, and lidocaine are all used during the resuscitation, but they are adjuncts given around the shocks rather than substitutes for them. A 12-lead ECG and advanced airway placement both delay defibrillation, and delay is what costs survival in this rhythm."
 },
 {
  "id": "n504e2q16",
  "exam": 2,
  "topic": "Asystole",
  "type": "mcq",
  "stem": "A patient is unresponsive and pulseless, and the monitor shows a flat line confirmed in two leads. A nursing student asks why the team is not defibrillating. Which response by the nurse is correct?",
  "options": [
   "\"We will defibrillate as soon as the epinephrine has had time to circulate.\"",
   "\"Defibrillation is withheld because the patient has a do-not-resuscitate order.\"",
   "\"We will defibrillate at a lower energy setting to avoid damaging the myocardium.\"",
   "\"Defibrillation only works when there is disorganized electrical activity to reorganize; asystole has none.\""
  ],
  "correct": [
   3
  ],
  "rationale": "Defibrillation works by depolarizing the myocardium all at once so that the sinus node can resume control of a heart whose electrical activity is disorganized. In asystole there is no electrical activity at all, so there is nothing to reorganize and a shock accomplishes nothing — which is why the course puts it plainly that no matter what Hollywood shows, you cannot shock asystole. The treatment is high-quality compressions, epinephrine, and an aggressive search for a reversible cause among the Hs and Ts. Nothing about the rhythm implies a code status, and the energy-setting answer wrongly suggests that shocking asystole would work if only the dose were right."
 },
 {
  "id": "n504e2q17",
  "exam": 2,
  "topic": "PEA",
  "type": "mcq",
  "stem": "A patient's monitor shows what appears to be an organized sinus rhythm at 82 beats/min, but the patient is unresponsive with no palpable carotid pulse. Which action should the nurse take FIRST?",
  "options": [
   "Defibrillate at 200 joules",
   "Recheck the pulse in one minute before intervening",
   "Administer atropine 1 mg IV",
   "Begin chest compressions and call a code"
  ],
  "correct": [
   3
  ],
  "rationale": "Organized electrical activity on the monitor with no pulse is pulseless electrical activity — the electrical system is producing complexes but the myocardium is not generating effective mechanical contraction, so the tracing is essentially fake activity. Treatment is immediate high-quality compressions with a code called, epinephrine, and a search for the underlying cause, with pulmonary embolism among the common culprits along with the rest of the Hs and Ts. PEA is NOT a shockable rhythm, so defibrillating wastes time and delays compressions. Atropine is not indicated, and rechecking in a minute delays the only intervention that maintains perfusion in a pulseless patient."
 },
 {
  "id": "n504e2q18",
  "exam": 2,
  "topic": "Hs and Ts",
  "type": "sata",
  "stem": "During a resuscitation for pulseless electrical activity, the team searches for reversible causes. Which of the following are recognized reversible causes the nurse should help assess for? Select all that apply.",
  "options": [
   "Hypovolemia",
   "Hypoxia",
   "Hyperlipidemia",
   "Hypercalcemia of malignancy",
   "Hypoalbuminemia"
  ],
  "correct": [
   0,
   1
  ],
  "rationale": "The Hs and Ts are the framework for finding a treatable cause during cardiac arrest, particularly in non-shockable rhythms where the rhythm itself offers no target. The Hs are hypovolemia, hypoxia, hydrogen ion excess or acidosis, hypo- and hyperkalemia, and hypothermia; the Ts are tension pneumothorax, tamponade, toxins, and thrombosis both coronary and pulmonary, with pulmonary embolism specifically noted as a usual cause of PEA. The three false options are all genuine metabolic abnormalities, which is what makes them plausible, but none is a standard reversible cause of arrest — among electrolytes it is the POTASSIUM derangements, not calcium, that belong on this list."
 },
 {
  "id": "n504e2q19",
  "exam": 2,
  "topic": "Code response",
  "type": "mcq",
  "stem": "A nurse enters a room and finds a patient unconscious and pulseless. After calling for help, which action should the nurse take FIRST?",
  "options": [
   "Notify the provider",
   "Run to get the AED from the hallway",
   "Begin chest compressions",
   "Administer epinephrine"
  ],
  "correct": [
   2
  ],
  "rationale": "Once help has been called, compressions begin immediately. Chest compressions are what maintain coronary and cerebral perfusion until a defibrillator arrives, and every second without them reduces the chance of survival and of neurologically intact recovery. Leaving the patient to fetch the AED yourself is the tempting wrong answer — the whole purpose of calling for help first is that someone else brings the defibrillator and the code cart while the responder at the bedside starts compressions. Notifying the provider and administering drugs both happen within the code, but neither substitutes for the immediate circulatory support that compressions provide."
 },
 {
  "id": "n504e2q20",
  "exam": 2,
  "topic": "Cardioversion vs defibrillation",
  "type": "mcq",
  "stem": "A nursing student asks the nurse to explain the difference between synchronized cardioversion and defibrillation. Which explanation is correct?",
  "options": [
   "Cardioversion delivers a shock timed to the R wave and is used for organized rhythms with a pulse; defibrillation delivers an untimed shock for pulseless ventricular tachycardia and ventricular fibrillation",
   "Cardioversion uses more energy than defibrillation because the rhythm is more organized",
   "Defibrillation is a planned elective procedure and cardioversion is an emergency procedure",
   "Both deliver a shock timed to the R wave, but cardioversion is performed only in the operating room"
  ],
  "correct": [
   0
  ],
  "rationale": "The critical difference is synchronization. Cardioversion times the shock to the R wave so the energy does not land on the T wave, the vulnerable repolarization period where a shock can provoke ventricular fibrillation; it is used for organized tachydysrhythmias that still have a pulse, such as unstable atrial fibrillation, atrial flutter, SVT, or VT with a pulse. Defibrillation is unsynchronized and is used for pulseless VT and ventricular fibrillation, where there is no organized R wave to synchronize to. The practical framing taught in this course is that cardioversion is planned and defibrillation is an emergency, which reverses the third option. Cardioversion also uses less energy, not more."
 },
 {
  "id": "n504e2q21",
  "exam": 2,
  "topic": "Cardioversion",
  "type": "sata",
  "stem": "Which nursing actions are appropriate when preparing a patient for elective synchronized cardioversion? Select all that apply.",
  "options": [
   "Verify that the synchronize function is activated on the defibrillator",
   "Ensure informed consent has been obtained",
   "Administer prescribed sedation before the shock is delivered",
   "Confirm that everyone is clear of the bed before the shock is delivered",
   "Remove the patient from supplemental oxygen and turn it off during the shock"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "All five are appropriate. The sync function must be verified, because a shock delivered unsynchronized to a perfusing rhythm can land on the T wave and provoke ventricular fibrillation. Elective cardioversion is a planned procedure, so consent is obtained and sedation is given — the shock is painful and the patient must not be awake for it. Calling clear and visually confirming that no one is touching the bed protects the team from injury. Free-flowing oxygen is moved away from the field and turned off during the shock because oxygen supports combustion and defibrillation can produce a spark, making fire a genuine hazard."
 },
 {
  "id": "n504e2q22",
  "exam": 2,
  "topic": "Hyperkalemia",
  "type": "mcq",
  "stem": "A patient with acute kidney injury has a potassium of 7.1 mEq/L. Which ECG change should the nurse expect?",
  "options": [
   "Tall, tented T waves with progressive QRS widening",
   "ST depression with flattened T waves and prominent U waves",
   "A shortened QT interval with a normal QRS",
   "Absent P waves with a sawtooth baseline"
  ],
  "correct": [
   0
  ],
  "rationale": "Hyperkalemia produces tall, tented T waves as the earliest classic change, followed by P waves that widen and lose amplitude as conduction slows, QRS widening, fusion of the QRS with the T wave, and loss of the ST segment; above roughly 7.5 mmol/L atrial and ventricular fibrillation can occur, which is why this is a true emergency. The second option describes HYPOkalemia, and mixing these two up is the single most common electrolyte-ECG error — the way to keep them apart is that high potassium peaks the T wave while low potassium flattens it and brings out a U wave. A shortened QT suggests hypercalcemia, and a sawtooth baseline is atrial flutter."
 },
 {
  "id": "n504e2q23",
  "exam": 2,
  "topic": "Hypokalemia",
  "type": "sata",
  "stem": "A patient on long-term furosemide has a potassium of 2.7 mEq/L. Which ECG findings should the nurse anticipate? Select all that apply.",
  "options": [
   "ST segment depression",
   "Flattening of the T wave",
   "Prolonged QT interval",
   "Prominent U waves",
   "Tall, tented T waves"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Hypokalemia destabilizes repolarization, producing ST depression, T wave flattening, QT prolongation, and the appearance of a prominent U wave — the small deflection following the T wave that becomes visible in hypokalemia and is one of the reasons the U wave matters clinically. The prolonged QT is the dangerous part, because it sets the stage for torsades de pointes, and the risk is compounded when a loop diuretic has also depleted magnesium. Tall tented T waves are the finding of HYPERkalemia and are the distractor here. The pairing to remember is that low potassium flattens the T wave and reveals a U wave, while high potassium peaks the T wave."
 },
 {
  "id": "n504e2q24",
  "exam": 2,
  "topic": "Electrolytes and ECG",
  "type": "mcq",
  "stem": "A patient with chronic alcohol use is admitted with a magnesium of 1.1 mg/dL. Which rhythm disturbance is this patient at greatest risk for?",
  "options": [
   "First-degree AV block only",
   "Torsades de pointes",
   "Atrial flutter with 2:1 conduction",
   "Sinus bradycardia"
  ],
  "correct": [
   1
  ],
  "rationale": "Hypomagnesemia prolongs the PR and QT intervals and produces both atrial and ventricular ectopy, and its most dangerous consequence is a predisposition to ventricular tachycardia and specifically to torsades de pointes — the polymorphic VT that arises from a prolonged QT. This is why magnesium is the treatment for torsades and why it is checked and replaced aggressively in patients with ectopy. First-degree AV block can occur from the PR prolongation but is comparatively benign and is not the greatest risk. Atrial flutter and sinus bradycardia are not characteristic consequences of magnesium depletion."
 },
 {
  "id": "n504e2q25",
  "exam": 2,
  "topic": "Amiodarone",
  "type": "mcq",
  "stem": "A patient has been taking oral amiodarone for one year and now reports a dry nonproductive cough, progressive dyspnea, and a 10-pound weight loss. Which action should the nurse take?",
  "options": [
   "Reassure the patient that these are expected effects that resolve with time",
   "Report the findings promptly, as they may indicate amiodarone pulmonary toxicity",
   "Advise the patient to double the dose until the next cardiology appointment",
   "Instruct the patient to take the dose with food to reduce the cough"
  ],
  "correct": [
   1
  ],
  "rationale": "Amiodarone is an effective class III antiarrhythmic but carries serious long-term toxicities, and pulmonary toxicity is the most feared: pneumonitis and pulmonary fibrosis present exactly as described, with a nonproductive cough, dyspnea, pleuritic pain, weight loss, fever, and malaise. These findings must be reported promptly because the damage can be irreversible, which is also why baseline pulmonary function tests are advocated before starting the drug in non-urgent situations. Amiodarone also causes hypotension, QT prolongation, photosensitivity, and both hypo- and hyperthyroidism, requiring ongoing monitoring of labs, pulmonary status, and ECG."
 },
 {
  "id": "n504e2q26",
  "exam": 2,
  "topic": "Amiodarone",
  "type": "sata",
  "stem": "Which teaching points should the nurse include for a patient starting long-term oral amiodarone? Select all that apply.",
  "options": [
   "Use sunscreen and protective clothing, because the drug increases photosensitivity",
   "Report any new cough, shortness of breath, or unexplained weight loss",
   "Keep appointments for thyroid function tests, liver studies, and periodic ECGs",
   "Expect frequent monitoring of pulmonary status",
   "Stop the drug immediately and independently if the heart rate falls below 70"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Amiodarone affects sodium, potassium, and calcium channels and has alpha- and beta-blocking properties, prolonging the action potential and refractory period while slowing AV conduction and sinus node function. Its toxicity profile drives the teaching: photosensitivity means sun protection, pulmonary toxicity means reporting cough, dyspnea, and weight loss and undergoing pulmonary monitoring, and thyroid and hepatic effects plus QT prolongation mean ongoing labs and ECGs. The option to reject is the patient independently stopping an antiarrhythmic — abruptly discontinuing it can allow the original dysrhythmia to return, and dose changes belong to the prescriber. A heart rate of 70 is normal in any case."
 },
 {
  "id": "n504e2q27",
  "exam": 2,
  "topic": "Atropine",
  "type": "mcq",
  "stem": "A patient has a heart rate of 38 beats/min with a blood pressure of 78/44 mm Hg, cool clammy skin, and new confusion. Which medication should the nurse anticipate administering?",
  "options": [
   "Metoprolol IV",
   "Diltiazem infusion",
   "Atropine IV",
   "Adenosine rapid IV push"
  ],
  "correct": [
   2
  ],
  "rationale": "This is symptomatic bradycardia: the rate is under 60 and the hypotension, cool clammy skin, and confusion show that the low rate is no longer perfusing the patient. Atropine blocks acetylcholine at parasympathetic sites, removing vagal braking on the SA node so the rate rises, with the desired outcome being a heart rate above 60; fluids, oxygen, and pacing are the other interventions for unstable bradycardia. Metoprolol and diltiazem both SLOW conduction and would deepen the bradycardia into arrest, and adenosine transiently blocks the AV node entirely, which in an already bradycardic patient could be catastrophic. Each distractor is a real cardiac drug used for the opposite problem."
 },
 {
  "id": "n504e2q28",
  "exam": 2,
  "topic": "Atropine",
  "type": "mcq",
  "stem": "A nursing student states, \"Atropine is given to slow down a fast rhythm.\" Which correction by the nurse is accurate?",
  "options": [
   "\"That is right, atropine slows AV nodal conduction.\"",
   "\"Atropine blocks parasympathetic activity and INCREASES the heart rate; it is used for bradycardia.\"",
   "\"Atropine has no effect on heart rate; it is given only to dry secretions.\"",
   "\"Atropine slows the rate but only in patients with atrial fibrillation.\""
  ],
  "correct": [
   1
  ],
  "rationale": "Atropine is an anticholinergic: it blocks acetylcholine at parasympathetic sites, and since the parasympathetic nervous system slows the heart through the vagus nerve, blocking it removes the brake and the rate rises. It is therefore a treatment for bradycardia, not tachycardia, with the therapeutic goal being a rate above 60. Atropine does dry secretions, which is a genuine effect and makes the third option superficially plausible, but that is an additional action rather than its only one. Its adverse effects include tachycardia, dysrhythmias, chest pain, QT prolongation, dry mouth, and at toxic levels fever, muscle fasciculations, and delirium."
 },
 {
  "id": "n504e2q29",
  "exam": 2,
  "topic": "Diltiazem",
  "type": "mcq",
  "stem": "A patient in atrial fibrillation with a ventricular rate of 148 beats/min is started on a diltiazem infusion. Which assessment finding would most concern the nurse?",
  "options": [
   "The ventricular rate has slowed to 92 beats/min",
   "The rhythm remains irregularly irregular",
   "The patient reports the palpitations have resolved",
   "The blood pressure has fallen from 128/76 to 84/48 mm Hg"
  ],
  "correct": [
   3
  ],
  "rationale": "Diltiazem is a calcium channel blocker that inhibits calcium entry through slow channels in vascular smooth muscle and myocardium, slowing AV conduction to control the ventricular rate while also relaxing vascular smooth muscle. That vasodilation makes hypotension the adverse effect to watch, and a drop to 84/48 means the rate control is being purchased at the cost of perfusion. IV infusions require a pump with continuous cardiac and hemodynamic monitoring for exactly this reason. Slowing to 92 meets the rate-control goal of under 100. Resolved palpitations is a therapeutic response, and the rhythm remaining irregularly irregular is expected, since rate control does not convert atrial fibrillation to sinus rhythm."
 },
 {
  "id": "n504e2q30",
  "exam": 2,
  "topic": "Calcium channel blockers",
  "type": "mcq",
  "stem": "A patient is discharged on oral verapamil for rate control. Which patient statement indicates the teaching has been effective?",
  "options": [
   "\"I will start drinking a large glass of grapefruit juice every morning with this pill.\"",
   "\"I can stop this medication whenever my pulse feels regular to me.\"",
   "\"I should take an extra dose any time I feel my heart racing.\"",
   "\"I will limit grapefruit juice and be careful with alcohol while taking this medicine.\""
  ],
  "correct": [
   3
  ],
  "rationale": "Grapefruit juice inhibits the enzyme that metabolizes calcium channel blockers, so it raises drug levels and increases the risk of bradycardia, heart block, and hypotension; patients are taught to limit it with verapamil, diltiazem, nifedipine, and nicardipine alike. Extra care with alcohol is also taught, since both cause vasodilation and the combination can produce hypotension. Verapamil's adverse effects include heart failure, hepatotoxicity, and bradyarrhythmias. Self-discontinuing an antiarrhythmic based on how the pulse feels, or self-administering extra doses for palpitations, are both unsafe and would be reported as failed teaching."
 },
 {
  "id": "n504e2q31",
  "exam": 2,
  "topic": "Epinephrine",
  "type": "mcq",
  "stem": "During a cardiac arrest a patient receives epinephrine 1 mg IV push. Which statement best describes the intended effect of this drug in this setting?",
  "options": [
   "It slows AV nodal conduction to allow the sinus node to resume control",
   "It prolongs the refractory period of the myocardium to terminate reentry",
   "It blocks parasympathetic input to increase the heart rate",
   "It stimulates alpha and beta receptors to increase perfusion pressure and support return of spontaneous circulation"
  ],
  "correct": [
   3
  ],
  "rationale": "Epinephrine stimulates alpha-1, beta-1, and beta-2 receptors: the alpha-mediated vasoconstriction raises aortic diastolic pressure and therefore coronary and cerebral perfusion pressure during compressions, while beta-1 stimulation increases contractility and rate. Its indications include cardiac arrest, anaphylaxis, hypotension, bradycardia, shock, sepsis, and heart failure, and the desired outcomes are increased cardiac output, return of spontaneous circulation, and bronchodilation. Slowing AV conduction describes adenosine, blocking parasympathetic input describes atropine, and prolonging the refractory period describes amiodarone — every distractor is a drug that appears in the same code algorithm, which is what makes them plausible."
 },
 {
  "id": "n504e2q32",
  "exam": 2,
  "topic": "Lidocaine",
  "type": "mcq",
  "stem": "A patient receiving a lidocaine infusion becomes drowsy and reports circumoral numbness and tinnitus. Which action should the nurse take?",
  "options": [
   "Report the findings promptly, as they suggest central nervous system toxicity",
   "Administer an additional bolus and continue the infusion",
   "Increase the infusion rate, as these indicate a subtherapeutic level",
   "Reassure the patient that these effects are expected and will resolve"
  ],
  "correct": [
   0
  ],
  "rationale": "Lidocaine is a class Ib antiarrhythmic that suppresses ventricular automaticity by blocking sodium channels, and because those channels are also present in neural tissue, CNS effects are the hallmark of toxicity: drowsiness, circumoral numbness, tinnitus, confusion, and at higher levels seizures. The nursing standard is to assess frequently for adverse reactions and signs of CNS toxicity during a continuous infusion with cardiac and hemodynamic monitoring, and to keep the patient supine to limit hypotension. Increasing the rate or bolusing would worsen a toxic state, and dismissing the findings as expected misses a progression that can end in seizure activity."
 },
 {
  "id": "n504e2q33",
  "exam": 2,
  "topic": "Pacemakers",
  "type": "sata",
  "stem": "Which conditions are recognized indications for cardiac pacing? Select all that apply.",
  "options": [
   "Symptomatic bradycardia",
   "Mobitz type II second-degree AV block",
   "Complete heart block",
   "Asymptomatic first-degree AV block with a PR interval of 0.22 second",
   "Asymptomatic sinus bradycardia of 54 beats/min in a conditioned athlete"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Pacing is indicated when the conduction system cannot reliably deliver an impulse fast enough to perfuse the patient: symptomatic bradycardia and symptomatic heart block, Mobitz type II second-degree block and complete heart block because both can progress abruptly to asystole, bifascicular and trifascicular bundle branch blocks, certain tachyarrhythmias, and prophylactically after acute MI, cardiac surgery, or diagnostic testing. Both false options describe asymptomatic findings that need no device. First-degree block is a conduction DELAY in which every impulse still conducts, and sinus bradycardia in a trained athlete is a normal physiologic adaptation."
 },
 {
  "id": "n504e2q34",
  "exam": 2,
  "topic": "Pacemaker malfunction",
  "type": "mcq",
  "stem": "A nurse observes pacemaker spikes on the monitor that are not followed by any QRS complex. Which malfunction does this represent?",
  "options": [
   "Oversensing with appropriate inhibition",
   "Failure to sense",
   "Failure to capture",
   "Failure to pace"
  ],
  "correct": [
   2
  ],
  "rationale": "Failure to capture means the pacemaker is firing — the spike is right there on the tracing — but the myocardium is not responding to that stimulus with depolarization, so no QRS follows. Common causes include an output setting that is too low, lead displacement, fibrosis at the lead tip, electrolyte disturbance, or myocardial ischemia. Failure to SENSE is the opposite problem: the device does not detect the patient's own intrinsic beats and therefore fires when it should not, sometimes landing a spike dangerously on a T wave. Failure to PACE means no spikes appear at all because the device is not sending signals. Distinguishing these three depends entirely on whether the spike is present and whether a QRS follows it."
 },
 {
  "id": "n504e2q35",
  "exam": 2,
  "topic": "Pacemaker malfunction",
  "type": "mcq",
  "stem": "A nurse notes pacemaker spikes occurring at random intervals, including one that falls on the downslope of a T wave. Which malfunction is occurring, and why is it dangerous?",
  "options": [
   "Normal device function during a period of intrinsic bradycardia",
   "Failure to pace, which results in complete loss of cardiac output",
   "Failure to sense, which can deliver a stimulus during repolarization and trigger ventricular tachycardia",
   "Failure to capture, which causes the heart rate to fall below the set rate"
  ],
  "correct": [
   2
  ],
  "rationale": "Failure to sense means the pacemaker is not detecting the patient's own cardiac activity, so it continues to send signals when they are not needed and the spikes appear at inappropriate times. The danger is the R-on-T phenomenon: a stimulus delivered during the vulnerable repolarization period represented by the T wave can provoke ventricular tachycardia or ventricular fibrillation. Failure to capture would show a spike with no resulting QRS, and failure to pace would show no spikes at all. Calling this normal function is the trap — a properly sensing pacemaker inhibits itself when the patient's own beat arrives, so randomly timed spikes are never normal."
 },
 {
  "id": "n504e2q36",
  "exam": 2,
  "topic": "Transcutaneous pacing",
  "type": "sata",
  "stem": "A patient with symptomatic bradycardia unresponsive to atropine requires transcutaneous pacing. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Administer prescribed analgesia and sedation",
   "Verify electrical capture by confirming a QRS after each pacer spike",
   "Verify mechanical capture by palpating a pulse that corresponds to the paced rate",
   "Assess the skin under the pads for burns during prolonged pacing",
   "Assume capture has been achieved as soon as pacer spikes appear on the monitor"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Transcutaneous pacing drives current through the chest wall and skeletal muscle, so it is painful and conscious patients require analgesia and sedation. Capture must be verified in two ways, and this is the point the last option gets wrong: spikes alone prove only that the device is firing. Electrical capture means a QRS follows each spike, and mechanical capture means a palpable pulse matches the paced rate — a patient can have electrical capture on the screen with no effective perfusion. Prolonged pacing can burn the skin under the pads, so the site is assessed. Transcutaneous pacing is a bridge to transvenous or permanent pacing, not a destination."
 },
 {
  "id": "n504e2q37",
  "exam": 2,
  "topic": "Permanent pacemaker",
  "type": "sata",
  "stem": "Which discharge instructions should the nurse give a patient who has just received a permanent implanted pacemaker? Select all that apply.",
  "options": [
   "Inform all health care providers, including dentists, that you have a pacemaker",
   "Do not undergo an MRI unless the device has been confirmed as MRI-conditional",
   "Avoid raising the arm on the operative side above the shoulder until the provider approves",
   "Report dizziness, syncope, prolonged hiccups, or a pulse rate below the set rate",
   "Keep cell phones in the shirt pocket directly over the device for convenience"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Patients carry device identification and tell every provider, because procedures and imaging must be adjusted around the device. MRI is a specific prohibition unless the device is confirmed MRI-conditional, since the magnetic field can damage the generator or displace the leads. Arm movement on the operative side is restricted initially so the newly placed leads are not dislodged. Dizziness, syncope, prolonged hiccups which can indicate diaphragmatic stimulation from lead migration, and a pulse below the programmed rate all suggest malfunction and must be reported. Carrying a cell phone directly over the generator is the item to reject; phones are held to the opposite ear and kept at least six inches from the device."
 },
 {
  "id": "n504e2q38",
  "exam": 2,
  "topic": "AICD",
  "type": "mcq",
  "stem": "A patient with an implanted cardioverter-defibrillator tells the nurse the device fired once while he was walking, after which he felt fine and had no loss of consciousness. Which response is most appropriate?",
  "options": [
   "\"As long as you feel fine afterward, there is no need to report a single shock.\"",
   "\"That was almost certainly a malfunction; the device will need to be replaced.\"",
   "\"A single appropriate shock with full recovery still needs to be reported so the device can be interrogated.\"",
   "\"You should go to the emergency department by ambulance immediately for any shock.\""
  ],
  "correct": [
   2
  ],
  "rationale": "An AICD delivers a shock when it detects a life-threatening rhythm, usually a ventricular dysrhythmia, so a firing means the patient had an event the device treated. Even a single shock followed by full recovery must be reported so the device can be interrogated — the stored data show what rhythm triggered it and whether the therapy was appropriate, and may prompt changes to medications or device settings. Treating it as unimportant misses that information. Emergency transport is reserved for multiple shocks, shocks with symptoms, or a shock followed by ongoing symptoms. Assuming malfunction is premature; an appropriate shock means the device worked as designed."
 },
 {
  "id": "n504e2q39",
  "exam": 2,
  "topic": "AV block",
  "type": "mcq",
  "stem": "A rhythm strip shows a regular atrial rate of 88 beats/min and a regular ventricular rate of 34 beats/min, with P waves marching out independently of the QRS complexes and no consistent PR interval. Which rhythm is this, and what is the priority?",
  "options": [
   "First-degree AV block; monitor and reassess next shift",
   "Mobitz type I (Wenckebach); hold AV nodal blocking drugs and observe",
   "Third-degree (complete) heart block; prepare for pacing",
   "Sinus bradycardia with a prolonged PR interval; administer atropine and reassess"
  ],
  "correct": [
   2
  ],
  "rationale": "When the P waves and the QRS complexes each march out at their own regular rate with no relationship between them, the atria and ventricles are being driven by separate pacemakers — this is complete, or third-degree, heart block. The slow ventricular rate of 34 reflects an escape pacemaker low in the conduction system, and because escape rhythms are unreliable as well as slow, pacing is the priority. First-degree block has a prolonged but CONSTANT PR interval with every P conducted. Mobitz I shows a progressively lengthening PR until a beat drops. Sinus bradycardia maintains a fixed P-to-QRS relationship, which is precisely what is absent here."
 },
 {
  "id": "n504e2q40",
  "exam": 2,
  "topic": "AV block",
  "type": "mcq",
  "stem": "A patient's rhythm strip shows a constant PR interval of 0.26 second with a P wave before every QRS, a regular rate of 66 beats/min, and a QRS of 0.08 second. The patient is asymptomatic. Which action is most appropriate?",
  "options": [
   "Prepare for immediate transcutaneous pacing",
   "Document the first-degree AV block, review AV nodal blocking medications, and notify the provider",
   "Administer atropine 1 mg IV push",
   "Call a rapid response and prepare for cardioversion"
  ],
  "correct": [
   1
  ],
  "rationale": "A PR interval consistently longer than 0.20 second with every P wave conducted defines first-degree AV block. It is a conduction delay rather than a conduction failure, it is usually asymptomatic, and the appropriate response is to document it, look for a cause such as beta-blockers, calcium channel blockers, digoxin, ischemia, or electrolyte disturbance, and notify the provider. Pacing and atropine are reserved for symptomatic bradycardia or the higher-grade blocks that can deteriorate abruptly, and neither is warranted in an asymptomatic patient with a rate of 66. Cardioversion treats tachydysrhythmias and has no role in a conduction block."
 },
 {
  "id": "n504e2q41",
  "exam": 2,
  "topic": "Dysrhythmia risk factors",
  "type": "sata",
  "stem": "Which findings in a patient's history increase the risk of developing a dysrhythmia? Select all that apply.",
  "options": [
   "Drinking four energy drinks daily",
   "Previous myocardial infarction with scar tissue",
   "Untreated hyperthyroidism",
   "A serum potassium of 4.2 mEq/L and a magnesium of 2.0 mg/dL",
   "A resting heart rate of 58 beats/min in a marathon runner"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Dysrhythmias arise from anything that irritates or damages the conduction pathway. Excessive caffeine from energy drinks is an explicitly listed risk factor, alongside nicotine, alcohol, and drug use. Scar tissue from a previous MI creates reentry circuits, as does structural change from cardiomyopathy, congenital disease, CAD, hypertension, and prior cardiac surgery. Both overactive and underactive thyroid states are listed risks. The two false options are normal findings dressed up as abnormalities: a potassium of 4.2 and a magnesium of 2.0 are both within normal limits, and a resting rate of 58 in a conditioned athlete is a physiologic adaptation rather than pathology."
 },
 {
  "id": "n504e2q42",
  "exam": 2,
  "topic": "Sinus bradycardia",
  "type": "sata",
  "stem": "Which interventions are appropriate for a patient with symptomatic sinus bradycardia? Select all that apply.",
  "options": [
   "Administer IV atropine",
   "Administer supplemental oxygen",
   "Prepare for transcutaneous pacing",
   "Coach the patient through a Valsalva maneuver to raise the heart rate",
   "Administer IV metoprolol to stabilize the rhythm"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "When bradycardia becomes symptomatic — syncope, dizziness, weakness, confusion, hypotension, diaphoresis, dyspnea, or chest pain — treatment raises the rate and supports perfusion while the underlying cause is identified: IV atropine, oxygen, a fluid bolus, and pacing. Both false options would make the patient worse. A Valsalva maneuver increases vagal tone and SLOWS the heart, which is why it is used to break SVT and is explicitly listed as a cause of bradycardia. Metoprolol is a beta-blocker, itself a listed cause of sinus bradycardia, so giving one to an already bradycardic patient could deepen the problem toward arrest."
 },
 {
  "id": "n504e2q43",
  "exam": 2,
  "topic": "Holter monitoring",
  "type": "mcq",
  "stem": "A patient reports episodes of palpitations and near-syncope that start and stop abruptly and have never been captured on an in-office ECG. Which diagnostic test should the nurse anticipate?",
  "options": [
   "A single 12-lead ECG repeated weekly",
   "A Holter monitor worn for an extended period",
   "An echocardiogram",
   "A cardiac stress test"
  ],
  "correct": [
   1
  ],
  "rationale": "A 12-lead ECG captures only the seconds during which it is recorded, so a paroxysmal dysrhythmia that starts and stops abruptly will almost always be missed. A Holter monitor is worn continuously for days or weeks specifically to capture intermittent rhythm disturbances and correlate them with symptoms, which is exactly the problem described. Repeating an in-office ECG weekly has the same fundamental limitation as the first one. An echocardiogram evaluates structure and function, not rhythm over time, and a stress test evaluates exercise-induced ischemia rather than spontaneous paroxysmal arrhythmia."
 },
 {
  "id": "n504e2q44",
  "exam": 2,
  "topic": "Ablation",
  "type": "mcq",
  "stem": "A patient with recurrent symptomatic atrial fibrillation despite medication is scheduled for catheter ablation. Which explanation by the nurse best describes the procedure?",
  "options": [
   "A stent is placed in the coronary artery supplying the atria",
   "The valves are repaired to restore normal atrial contraction",
   "A permanent pacemaker is implanted to override the abnormal rhythm",
   "A catheter is used to destroy the small area of tissue generating the abnormal impulses"
  ],
  "correct": [
   3
  ],
  "rationale": "Catheter ablation threads a catheter to the area of myocardium generating or sustaining the abnormal impulses and destroys that tissue, interrupting the circuit so the dysrhythmia can no longer be maintained. It is offered for atrial fibrillation and atrial flutter when rate and rhythm control with medication has not adequately controlled symptoms. A pacemaker treats rhythms that are too slow rather than eliminating an ectopic focus, valve repair addresses structural valve disease, and coronary stenting treats ischemia — each is a real cardiac procedure, which is why they are plausible, but none removes the arrhythmogenic tissue."
 },
 {
  "id": "n504e2q45",
  "exam": 2,
  "topic": "Defibrillation safety",
  "type": "sata",
  "stem": "Which actions are essential for safety during defibrillation? Select all that apply.",
  "options": [
   "Announce \"clear\" and visually confirm no one is in contact with the patient or bed",
   "Ensure the defibrillator is in unsynchronized mode for ventricular fibrillation",
   "Move free-flowing oxygen away from the patient's chest before delivering the shock",
   "Apply the pads over damp skin to improve electrical conduction",
   "Apply the pads directly over an implanted pacemaker generator to improve conduction"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Calling clear and confirming visually protects the team from receiving the shock. Ventricular fibrillation requires UNsynchronized mode, because there is no organized R wave to synchronize to and leaving the sync function on can prevent the device from discharging at all. Free-flowing oxygen is moved away because a spark in an oxygen-enriched environment is a fire risk. Both false options increase harm: the chest must be DRY, since moisture lets current arc across the skin surface rather than passing through the myocardium and can burn the patient, and pads are placed at least about 2.5 cm away from an implanted device, because shocking over the generator can damage it and divert current away from the heart."
 },
 {
  "id": "n504e2q46",
  "exam": 2,
  "topic": "Rhythm priorities",
  "type": "mcq",
  "stem": "A nurse identifies atrial flutter at a controlled ventricular rate of 76 beats/min in a patient who is alert with a blood pressure of 124/72 mm Hg. After notifying the provider, which action should the nurse take NEXT?",
  "options": [
   "Prepare the patient for emergency defibrillation",
   "Begin chest compressions",
   "Administer metoprolol IV push immediately",
   "Obtain a 12-lead ECG"
  ],
  "correct": [
   3
  ],
  "rationale": "This patient is rate-controlled and hemodynamically stable, so the appropriate next step after notifying the provider is to obtain a 12-lead ECG, which confirms the rhythm across all leads and provides the baseline the provider needs to decide on anticoagulation, rate or rhythm control, or eventual ablation. Compressions and defibrillation are for pulseless patients and would be grossly inappropriate in an alert patient with a normal blood pressure. Giving IV metoprolol immediately without a provider order in an already rate-controlled patient risks unnecessary bradycardia and hypotension — the rate of 76 is already at goal."
 },
 {
  "id": "n504e2q47",
  "exam": 2,
  "topic": "Ventricular rhythms",
  "type": "mcq",
  "stem": "Which feature most reliably distinguishes a ventricular dysrhythmia from a supraventricular one on a rhythm strip?",
  "options": [
   "The regularity of the R-to-R interval",
   "A QRS duration greater than 0.12 second",
   "The presence of an elevated ST segment",
   "A heart rate greater than 150 beats/min"
  ],
  "correct": [
   1
  ],
  "rationale": "Impulses originating at or above the AV junction travel down the fast His-Purkinje system and produce a narrow QRS of 0.06 to 0.12 second. An impulse originating in the ventricle must spread muscle-to-muscle, which is slow, so the QRS widens beyond 0.12 second — this is the single most reliable structural clue to where a rhythm came from. Regularity does not settle it, since both ventricular tachycardia and SVT are regular while atrial fibrillation is not. ST elevation reflects injury or ischemia rather than the site of origin, and rate alone does not distinguish them, since SVT commonly runs at 150 to 250 just as VT can."
 },
 {
  "id": "n504e2q48",
  "exam": 2,
  "topic": "Code interpretation",
  "type": "mcq",
  "stem": "During a code the monitor shows ventricular fibrillation. After the first shock the rhythm converts to an organized narrow-complex rhythm at 74 beats/min. Which action should the nurse take FIRST?",
  "options": [
   "Check for a pulse",
   "Immediately deliver a second shock",
   "Administer amiodarone 300 mg IV push",
   "Stop all resuscitation efforts"
  ],
  "correct": [
   0
  ],
  "rationale": "An organized rhythm on the monitor does not prove the heart is producing a pulse — that is precisely the situation that defines pulseless electrical activity. After defibrillation converts a rhythm, the immediate assessment is whether there is a pulse: if one is present the team moves to post-arrest care, and if not, compressions resume and the code continues as PEA. Delivering a second shock to an organized rhythm without checking would shock a potentially perfusing patient. Amiodarone may follow depending on the algorithm and the pulse check, and stopping resuscitation before confirming a pulse could abandon a patient still in arrest."
 },
 {
  "id": "n504e2q49",
  "exam": 2,
  "topic": "Calcium gluconate",
  "type": "mcq",
  "stem": "A patient with a serum calcium of 6.4 mg/dL and a prolonged QT interval is prescribed IV calcium gluconate. Which nursing action is essential during administration?",
  "options": [
   "Withhold the drug if the patient reports a chalky taste in the mouth",
   "Infuse through the same line as any ordered sodium bicarbonate",
   "Administer as a rapid IV push to correct the level quickly",
   "Monitor the ECG and vital signs and observe the infusion site closely for extravasation"
  ],
  "correct": [
   3
  ],
  "rationale": "Calcium gluconate moderates nerve and muscle performance by regulating the action potential threshold, and giving it too quickly or allowing it to extravasate causes real harm: adverse effects include dysrhythmias, bradycardia, hypotension, syncope, and cardiac arrest. The nursing standard is ECG, vital sign, and CNS monitoring with close observation of the infusion site to avoid extravasation, and serum calcium checks every 1 to 4 hours during a continuous infusion. A chalky taste in the mouth is a recognized, harmless effect and is not a reason to withhold. Calcium and sodium bicarbonate precipitate when mixed and must never share a line."
 },
 {
  "id": "n504e2q50",
  "exam": 2,
  "topic": "Rhythm interpretation",
  "type": "mcq",
  "stem": "A patient on telemetry has a rhythm with absent P waves and an irregularly irregular ventricular response at 68 beats/min. The patient reports feeling well. Which is the priority nursing concern?",
  "options": [
   "The immediate need for defibrillation",
   "The risk of thromboembolic stroke from atrial blood stasis",
   "The risk of the rhythm converting to asystole within minutes",
   "The need for emergency transcutaneous pacing"
  ],
  "correct": [
   1
  ],
  "rationale": "This is rate-controlled atrial fibrillation: the ventricular rate of 68 means cardiac output is reasonably preserved and the patient feels well, so the acute hemodynamic threat is low. The enduring danger is that the atria are quivering rather than contracting, blood pools, and clots form — which is why embolic stroke is the signature complication and why long-term anticoagulation is a treatment goal even in patients who feel fine. Defibrillation is for pulseless rhythms. Atrial fibrillation does not characteristically deteriorate to asystole within minutes, and pacing addresses rhythms that are too slow, not a controlled rate of 68."
 },
 {
  "id": "n504e3q01",
  "exam": 3,
  "topic": "STEMI vs NSTEMI",
  "type": "mcq",
  "stem": "Two patients arrive with chest pain. Patient A has ST-segment elevation in leads V1 through V4 with a rising troponin. Patient B has ST-segment depression and T wave inversion with a rising troponin. Which statement best distinguishes these presentations?",
  "options": [
   "Patient A has a full-thickness injury pattern from complete coronary occlusion; Patient B has a partial occlusion or complete occlusion of a smaller vessel",
   "Patient A is having unstable angina and Patient B is having a STEMI",
   "Only Patient A has actually infarcted, because Patient B's troponin elevation is not diagnostic",
   "Patient B is having the more severe event because ST depression indicates greater myocardial loss"
  ],
  "correct": [
   0
  ],
  "rationale": "ST elevation signals the transmural injury pattern produced when a major coronary artery is completely occluded, which is why a STEMI is treated as an emergency requiring immediate revascularization. An NSTEMI reflects reduced rather than absent flow — a partial occlusion of a larger vessel or a complete occlusion of a minor one — and shows ST depression, T wave inversion, and positive cardiac markers. Both patients have infarcted, because a rising troponin is released only with myocardial necrosis; the distinction is the urgency and route of reperfusion, not whether damage occurred. Unstable angina is distinguished from both by NEGATIVE cardiac markers."
 },
 {
  "id": "n504e3q02",
  "exam": 3,
  "topic": "Cardiac biomarkers",
  "type": "mcq",
  "stem": "A patient arrives 2 hours after the onset of crushing chest pain. The initial troponin is negative. Which action is most appropriate?",
  "options": [
   "Conclude that a myocardial infarction has been ruled out and prepare for discharge",
   "Repeat the troponin in 24 hours, since that is when the level peaks",
   "Cancel the ECG, because a negative troponin makes ischemia unlikely",
   "Obtain serial troponin levels, because troponin does not begin to rise until 3 to 12 hours after symptom onset"
  ],
  "correct": [
   3
  ],
  "rationale": "Troponin I and T are contractile proteins released only when myocardial necrosis occurs, but they take time to appear: levels begin to rise 3 to 12 hours after the onset of chest pain, peak at 24 to 48 hours, and return to baseline over 5 to 14 days. A single negative troponin drawn two hours into symptoms tells the nurse almost nothing, which is why serial troponins are drawn 3 to 6 hours after symptom onset and then approximately every 6 hours for three sets or until no further elevation is seen. Waiting a full 24 hours would delay treatment dangerously in a window where time is muscle, and the ECG must never be cancelled on the strength of an early negative marker."
 },
 {
  "id": "n504e3q03",
  "exam": 3,
  "topic": "Door-to-balloon",
  "type": "mcq",
  "stem": "A patient with a confirmed STEMI arrives in the emergency department at 0800. Which timeframe reflects the recommended goal for primary percutaneous coronary intervention?",
  "options": [
   "Balloon inflation by 1100, a door-to-balloon time of 3 hours or less",
   "Fibrinolytics by 0830 and PCI within 24 hours",
   "Cardiac catheterization scheduled electively within 48 hours",
   "Balloon inflation by 0930, a door-to-balloon time of 90 minutes or less"
  ],
  "correct": [
   3
  ],
  "rationale": "The quality standard for a STEMI undergoing primary PCI is a door-to-balloon time of 90 minutes or less, and PCI should occur no more than 12 hours after symptom onset. The reasoning is captured in the phrase time is muscle: coronary occlusion begins causing cell death within about 30 minutes, myocytes do not regenerate, and faster reperfusion means less permanent loss. Where PCI is not available in time, the alternative standard is a door-to-needle time of 30 minutes or less for fibrinolytic therapy. A three-hour window, a 24-hour window, or elective scheduling would all allow extensive irreversible infarction."
 },
 {
  "id": "n504e3q04",
  "exam": 3,
  "topic": "Fibrinolytics",
  "type": "mcq",
  "stem": "A rural hospital without a catheterization laboratory receives a patient with a STEMI. Which time goal applies to fibrinolytic therapy?",
  "options": [
   "Administration only after transfer to a PCI-capable facility",
   "A door-to-needle time of 90 minutes or less",
   "Administration within 24 hours of symptom onset",
   "A door-to-needle time of 30 minutes or less"
  ],
  "correct": [
   3
  ],
  "rationale": "When primary PCI cannot be delivered within the recommended window, fibrinolytic therapy is given, and the quality metric is a door-to-needle time of 30 minutes or less. Agents include alteplase (tPA), which is the most commonly used, along with tenecteplase and reteplase. The 90-minute figure is the door-to-BALLOON standard for PCI, and confusing the two is the most common error on this content. Waiting 24 hours or delaying until after transfer defeats the entire purpose: the benefit of fibrinolysis falls sharply with time, and in a facility without a cath lab the clot-dissolving drug is what preserves myocardium while transfer is arranged."
 },
 {
  "id": "n504e3q05",
  "exam": 3,
  "topic": "Nitroglycerin",
  "type": "mcq",
  "stem": "A 58-year-old man with chest pain is about to receive sublingual nitroglycerin. Which question is most essential for the nurse to ask FIRST?",
  "options": [
   "\"Have you taken any medication for erectile dysfunction, such as sildenafil or tadalafil, in the last 48 hours?\"",
   "\"When did you last have a bowel movement?\"",
   "\"Have you eaten anything in the last 8 hours?\"",
   "\"Do you have any allergies to shellfish or iodine?\""
  ],
  "correct": [
   0
  ],
  "rationale": "Phosphodiesterase-5 inhibitors such as sildenafil and tadalafil are vasodilators, and combining them with nitrates produces catastrophic, sometimes fatal hypotension. This is an absolute contraindication and is the single most important question before giving nitroglycerin to any patient who could be taking one. Shellfish and iodine allergy is a genuinely relevant question, but it applies to contrast media before catheterization rather than to nitroglycerin, which makes it the strongest distractor. NPO status matters for the procedure rather than the drug, and bowel habits relate to the stool softeners given later to prevent Valsalva straining."
 },
 {
  "id": "n504e3q06",
  "exam": 3,
  "topic": "Nitroglycerin",
  "type": "mcq",
  "stem": "A patient with an inferior wall STEMI and suspected right ventricular infarction becomes profoundly hypotensive after a dose of sublingual nitroglycerin. Which explanation is correct?",
  "options": [
   "The right ventricle is preload-dependent, and the venodilation from nitroglycerin reduced its filling",
   "Nitroglycerin directly suppressed myocardial contractility",
   "The patient is having an allergic reaction to nitroglycerin",
   "Nitroglycerin caused a reflex tachycardia that reduced coronary perfusion"
  ],
  "correct": [
   0
  ],
  "rationale": "An inferior wall infarct usually reflects right coronary artery occlusion, and the RCA also supplies the right ventricle. An infarcted right ventricle cannot generate pressure on its own, so it depends entirely on adequate filling volume to push blood through to the left side. Nitroglycerin is a venodilator that drops preload, which removes the one thing keeping that ventricle working and causes abrupt severe hypotension. This is why the management of RV infarction is fluids, never nitrates, and why a right-sided lead such as V4R is obtained. Nitroglycerin does not directly depress contractility, and the reaction described is hemodynamic rather than allergic."
 },
 {
  "id": "n504e3q07",
  "exam": 3,
  "topic": "Aspirin in ACS",
  "type": "mcq",
  "stem": "A patient with suspected acute coronary syndrome is given aspirin in the emergency department. Which administration is correct?",
  "options": [
   "Rectal aspirin suppository 300 mg",
   "Enteric-coated aspirin 81 mg swallowed whole with water",
   "Enteric-coated aspirin 325 mg swallowed with a full meal",
   "Non-enteric-coated aspirin 324 mg chewed"
  ],
  "correct": [
   3
  ],
  "rationale": "In acute coronary syndrome the goal is the fastest possible platelet inhibition, so a non-enteric-coated loading dose of about 324 mg is CHEWED. Chewing breaks the tablet into fine particles that begin absorbing through the buccal mucosa and the stomach almost immediately, while an enteric coating is specifically designed to delay dissolution until the small intestine — exactly the wrong property during an evolving infarct. Swallowing a coated tablet whole, especially with food, delays the effect by a substantial and potentially costly margin. The distractors are all real aspirin formulations, which is what makes this item discriminating: the formulation and the route are the point."
 },
 {
  "id": "n504e3q08",
  "exam": 3,
  "topic": "ACS medications",
  "type": "sata",
  "stem": "Which medications should the nurse anticipate for a patient presenting with an acute ST-elevation myocardial infarction? Select all that apply.",
  "options": [
   "Chewable non-enteric-coated aspirin",
   "A P2Y12 receptor inhibitor such as clopidogrel or ticagrelor",
   "Sublingual or IV nitroglycerin",
   "IV potassium chloride to stabilize the myocardium",
   "An oral calcium supplement to strengthen myocardial contraction"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "STEMI management pairs immediate revascularization with a standard medication set: chewed non-enteric aspirin for rapid platelet inhibition, a P2Y12 receptor inhibitor such as clopidogrel or ticagrelor with a loading dose, a statin, supplemental oxygen when indicated, nitroglycerin sublingually or as an infusion, IV morphine for pain, anticoagulation, and fibrinolytic therapy where PCI is not available in time. Neither false option belongs. Potassium is replaced only when a patient is actually hypokalemic, and giving it routinely to a normokalemic patient risks dangerous hyperkalemia. An oral calcium supplement does not improve contractility and has no role in acute coronary syndrome."
 },
 {
  "id": "n504e3q09",
  "exam": 3,
  "topic": "Atypical presentation",
  "type": "mcq",
  "stem": "A 68-year-old woman with type 2 diabetes reports 3 days of unusual fatigue, nausea, and a burning sensation between her shoulder blades. She denies chest pain. Which conclusion should guide the nurse's assessment?",
  "options": [
   "The absence of chest pain makes acute coronary syndrome unlikely",
   "Fatigue lasting 3 days is too prolonged to represent a cardiac event",
   "These symptoms are most consistent with gastroesophageal reflux and can be managed with antacids",
   "Women, diabetic patients, and older adults frequently present atypically, and an ACS workup is warranted"
  ],
  "correct": [
   3
  ],
  "rationale": "Classic crushing substernal pain radiating to the jaw, shoulder, or left arm is the textbook presentation, but women, people with diabetes, and older adults often present atypically with jaw or back pain, epigastric burning, nausea, fatigue, dyspnea, or even a silent infarct. Diabetic neuropathy can blunt the pain signal entirely, which is why diabetes is treated as a coronary risk equivalent that can mask angina. Dismissing the presentation because chest pain is absent is the error this question exists to catch, and attributing burning epigastric symptoms to reflux is the specific trap that delays care in exactly this population."
 },
 {
  "id": "n504e3q10",
  "exam": 3,
  "topic": "MI symptoms",
  "type": "sata",
  "stem": "Which findings would the nurse expect in a patient experiencing an acute myocardial infarction? Select all that apply.",
  "options": [
   "Intense crushing retrosternal pain radiating to the neck, jaw, or left arm",
   "Profuse diaphoresis",
   "Nausea with or without vomiting",
   "Pain that resolves completely within 3 minutes of rest",
   "Pain that is fully reproducible on palpation of the chest wall"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The classic MI presentation includes intense crushing retrosternal pain radiating to the neck, shoulder, jaw, and down the left arm, along with diaphoresis, nausea and vomiting, anxiety, a feeling of impending doom, dyspnea, tachypnea, lightheadedness, cough, and an irregular rapid heart rate. Both false options describe the patterns used to rule an infarct OUT. Pain fully relieved within a few minutes of rest is stable angina, whereas infarct pain is unrelieved and lasts beyond 20 minutes, and pain fully reproducible on chest wall palpation points to a musculoskeletal cause — though neither finding excludes a cardiac event outright in a high-risk patient."
 },
 {
  "id": "n504e3q11",
  "exam": 3,
  "topic": "Lead localization",
  "type": "mcq",
  "stem": "A patient's 12-lead ECG shows ST elevation in leads II, III, and aVF. Which coronary artery is most likely occluded, and which complication should the nurse anticipate?",
  "options": [
   "Left main coronary artery; immediate biventricular failure",
   "Left anterior descending artery; extensive anterior wall loss and cardiogenic shock",
   "Right coronary artery; bradycardia and AV block",
   "Circumflex artery; isolated lateral wall involvement without conduction effects"
  ],
  "correct": [
   2
  ],
  "rationale": "Leads II, III, and aVF look at the inferior wall, which is supplied by the right coronary artery in most people. The RCA also feeds the SA and AV nodes, so an inferior infarct characteristically produces bradycardia and AV conduction blocks, and the nurse should also anticipate right ventricular involvement, which makes the patient preload-dependent and means fluids rather than nitrates. The LAD supplies the anterior wall seen in V1 through V4 and is the widow maker in terms of tissue lost. The circumflex supplies the lateral wall seen in I, aVL, V5, and V6. Left main occlusion threatens the entire left ventricle and causes cardiogenic shock."
 },
 {
  "id": "n504e3q12",
  "exam": 3,
  "topic": "Lead localization",
  "type": "mcq",
  "stem": "A cardiac catheterization report describes a 95% occlusion of the proximal left anterior descending artery. Which ECG leads would most likely have shown ST elevation, and why is this occlusion so significant?",
  "options": [
   "Leads II, III, and aVF; the LAD supplies the inferior wall and the AV node",
   "Leads I and aVL only; the LAD supplies a small lateral segment",
   "Leads V1 through V4; the LAD supplies the anterior wall and the largest mass of left ventricular muscle",
   "No leads would show changes, because the LAD supplies only the right atrium"
  ],
  "correct": [
   2
  ],
  "rationale": "The left anterior descending artery supplies the anterior wall of the left ventricle, which is viewed by the precordial leads V1 through V4. Its significance is the sheer volume of myocardium at risk — a proximal LAD occlusion threatens the largest mass of left ventricular tissue, which is why it and the left main bifurcation are called the widow maker and why such infarcts so often produce severe left ventricular dysfunction, a low ejection fraction, and cardiogenic shock. Leads II, III, and aVF view the inferior wall supplied by the RCA, and I and aVL view the lateral wall supplied by the circumflex."
 },
 {
  "id": "n504e3q13",
  "exam": 3,
  "topic": "Angina vs infarction",
  "type": "mcq",
  "stem": "A patient reports substernal chest pressure that began during yard work, resolved within 6 minutes of resting, and has occurred predictably with exertion for the past year. Which classification best fits this description?",
  "options": [
   "NSTEMI",
   "STEMI",
   "Stable angina",
   "Unstable angina"
  ],
  "correct": [
   2
  ],
  "rationale": "Stable angina is predictable: it is provoked by a consistent level of exertion, it is relieved by rest or nitroglycerin, and it typically lasts under 15 minutes. That predictable pattern over a year is the defining feature. Unstable angina is a change in the pattern — occurring at rest, lasting longer, or occurring with less exertion than before — and represents an acute coronary syndrome with ischemia or coronary artery rupture but NEGATIVE cardiac markers. NSTEMI and STEMI both involve actual necrosis with positive markers, distinguished from each other by whether ST elevation is present. Pain unrelieved after 20 minutes with diaphoresis and nausea points to infarction."
 },
 {
  "id": "n504e3q14",
  "exam": 3,
  "topic": "NSTEMI management",
  "type": "mcq",
  "stem": "A patient is admitted with an NSTEMI and is hemodynamically stable with controlled pain. Which management approach should the nurse anticipate?",
  "options": [
   "Immediate fibrinolytic therapy",
   "Discharge home with outpatient stress testing in 2 weeks",
   "Initial medical management with heparin, beta-blockers, and nitrates, with catheterization when feasible",
   "Immediate transfer to the catheterization laboratory for emergency PCI within 90 minutes"
  ],
  "correct": [
   2
  ],
  "rationale": "Except in high-risk patients, studies have not shown that immediate catheterization or PCI improves outcomes over initial medical management with subsequent catheterization in NSTEMI. The expected approach is therefore a heparin drip, beta-blockers, and nitrates, with cardiac catheterization when feasible. The 90-minute door-to-balloon standard belongs to STEMI, which is the trap here, because it is the number students memorize and then over-apply. Fibrinolytics are likewise a STEMI therapy and are not indicated in NSTEMI. Discharging a patient with a completed infarction and positive biomarkers ignores the substantial risk of worsening MI, heart failure, cardiogenic shock, dysrhythmias, and death."
 },
 {
  "id": "n504e3q15",
  "exam": 3,
  "topic": "ACS complications",
  "type": "sata",
  "stem": "Which complications should the nurse monitor for in a patient admitted with an NSTEMI? Select all that apply.",
  "options": [
   "Extension or worsening of the infarction",
   "Heart failure",
   "Cardiogenic shock",
   "Dysrhythmias",
   "Rheumatic fever"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The recognized complications of NSTEMI are a worsening or extending infarct, heart failure as damaged myocardium loses pumping capacity, cardiogenic shock when that loss becomes severe, dysrhythmias arising from ischemic and scarred tissue, and death. Each follows logically from the same mechanism: myocardial cells have died, they do not regenerate, and what remains must do more work with a less stable electrical substrate. Rheumatic fever is the exception — it is an immune sequela of untreated group A streptococcal infection that damages heart valves, and while it is an important cause of valvular disease, it has no causal relationship to coronary occlusion."
 },
 {
  "id": "n504e3q16",
  "exam": 3,
  "topic": "MI nursing care",
  "type": "mcq",
  "stem": "A patient recovering from a myocardial infarction is prescribed a stool softener. Which rationale should the nurse give when the patient asks why?",
  "options": [
   "\"It prevents the constipation that opioids cause, which is uncomfortable but not dangerous.\"",
   "\"Straining to have a bowel movement is a Valsalva maneuver that stresses the healing heart and can trigger dysrhythmias.\"",
   "\"It helps the heart medications absorb more completely from the intestine.\"",
   "\"It reduces the risk of a gastrointestinal bleed from the aspirin.\""
  ],
  "correct": [
   1
  ],
  "rationale": "Straining against a closed glottis is a Valsalva maneuver: it raises intrathoracic pressure, transiently reduces venous return, and then produces an abrupt vagally mediated swing in heart rate and blood pressure. In a heart that has just infarcted, that stress can provoke bradycardia and dangerous dysrhythmias, so preventing straining is a genuine cardiac protective measure rather than a comfort measure. Opioid-induced constipation is real and contributes, which makes the first option tempting, but it understates the risk by calling it merely uncomfortable. Stool softeners do not improve drug absorption and do not prevent aspirin-related GI bleeding."
 },
 {
  "id": "n504e3q17",
  "exam": 3,
  "topic": "MI nursing care",
  "type": "sata",
  "stem": "Which nursing interventions support myocardial healing and reduce cardiac workload after an acute myocardial infarction? Select all that apply.",
  "options": [
   "Reducing environmental noise and controlling room temperature",
   "Structuring routines with planned rest periods for energy conservation",
   "Maintaining strict intake and output records",
   "Treating pain and anxiety promptly",
   "Encouraging vigorous independent ambulation on the first day to prevent deconditioning"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Every intervention after an MI aims at the same goal: reduce myocardial oxygen demand while the muscle heals. A quiet, temperature-controlled environment, structured routines with rest periods, and diversional activities all limit sympathetic stimulation. Strict intake and output is essential because it detects the fluid retention that signals developing heart failure and reflects renal perfusion. Prompt treatment of pain and anxiety matters physiologically, not just humanely, because both drive catecholamine release, tachycardia, and increased oxygen demand. Vigorous independent ambulation on day one is the item to reject — progressive activity is guided and graded, and cardiac rehabilitation advances it safely over time."
 },
 {
  "id": "n504e3q18",
  "exam": 3,
  "topic": "Anticoagulation monitoring",
  "type": "sata",
  "stem": "A patient with an acute coronary syndrome is receiving a heparin infusion. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Draw serial aPTT levels as prescribed",
   "Assess for new headache or change in level of consciousness",
   "Administer prescribed analgesics by the intramuscular route",
   "Encourage vigorous toothbrushing and flossing to prevent dental infection",
   "Apply pressure to venipuncture sites for no more than 5 seconds"
  ],
  "correct": [
   0,
   1
  ],
  "rationale": "Anticoagulation in acute coronary syndrome is deliberately therapeutic, so serial aPTT levels guide the dose and surveillance targets bleeding — including the most feared complication, intracranial hemorrhage, which announces itself as a new headache or a change in level of consciousness. All three false options would cause bleeding. Intramuscular injections are avoided in anticoagulated patients because they produce deep hematomas in muscle, vigorous brushing and flossing provoke gum bleeding that is difficult to stop so a soft toothbrush is used instead, and puncture sites require prolonged rather than brief pressure to achieve hemostasis."
 },
 {
  "id": "n504e3q19",
  "exam": 3,
  "topic": "PCI procedure",
  "type": "mcq",
  "stem": "A patient asks what will happen during the percutaneous coronary intervention scheduled for tomorrow. Which explanation by the nurse is accurate?",
  "options": [
   "\"A pacemaker is implanted to improve blood flow to the heart muscle.\"",
   "\"The blocked artery is removed and replaced with a synthetic graft through an incision in your chest.\"",
   "\"A clot-dissolving medication is infused directly into a vein over several hours.\"",
   "\"A balloon-tipped catheter is threaded to the narrowed area and inflated to compress the plaque against the vessel wall, and a mesh stent may be left in place.\""
  ],
  "correct": [
   3
  ],
  "rationale": "Percutaneous coronary intervention is performed under fluoroscopy through a radial, femoral, or occasionally jugular access site. A thin balloon-tipped catheter is threaded to the site of stenosis or occlusion and inflated, forcing plaque against the vessel wall to restore flow, with a goal of reducing the stenosis to less than 50% of the vessel diameter; a mesh stent is then commonly deployed to maintain patency. Replacing the vessel with a graft describes coronary artery bypass grafting, infusing a clot-dissolving drug describes fibrinolytic therapy, and a pacemaker addresses conduction rather than perfusion."
 },
 {
  "id": "n504e3q20",
  "exam": 3,
  "topic": "Post-PCI care",
  "type": "sata",
  "stem": "Which assessments are priorities in the first 2 hours after a femoral-approach percutaneous coronary intervention? Select all that apply.",
  "options": [
   "Vital signs and cardiac rhythm every 30 minutes",
   "Inspection of the insertion site for hematoma or active bleeding",
   "Circulation, sensation, movement, and temperature of the affected extremity",
   "Assessment for chest pain using a structured PQRST approach",
   "Encouraging the patient to ambulate to the bathroom independently as soon as they feel able"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "After a percutaneous coronary intervention the nurse monitors vital signs and cardiac rhythm every 30 minutes for the first 2 hours, inspects the insertion site frequently for hematoma and bleeding with manual pressure applied if bleeding occurs, checks circulation, sensation, movement, and temperature distal to the site, and assesses chest pain systematically. Early independent ambulation is the item to reject: the patient must lie flat with the affected leg straight for the period facility policy specifies, commonly 4 to 6 hours after a femoral approach, because premature movement can dislodge the clot at the arterial puncture and cause serious hemorrhage."
 },
 {
  "id": "n504e3q21",
  "exam": 3,
  "topic": "Post-PCI complications",
  "type": "mcq",
  "stem": "Four hours after a femoral PCI, a patient reports increasing back pain, and the nurse notes a blood pressure that has fallen from 132/78 to 94/56 mm Hg with a heart rate of 112 beats/min. The groin dressing appears dry and intact. Which complication should the nurse suspect?",
  "options": [
   "Contrast-induced nephropathy",
   "An expected vasovagal response to prolonged bed rest",
   "Retroperitoneal bleeding from the arterial puncture site",
   "An allergic reaction to the contrast medium"
  ],
  "correct": [
   2
  ],
  "rationale": "A dry dressing does not exclude bleeding. Blood from a femoral arterial puncture can track backward into the retroperitoneal space, where it is invisible externally and announces itself as back or flank pain with falling blood pressure and rising heart rate — the picture described here. This is a recognized and potentially life-threatening complication requiring immediate escalation. A vasovagal response produces bradycardia rather than tachycardia. Contrast nephropathy develops over 24 to 72 hours and presents as a rising creatinine and falling urine output rather than acute hypotension, and an allergic reaction would typically involve rash, urticaria, wheezing, or angioedema."
 },
 {
  "id": "n504e3q22",
  "exam": 3,
  "topic": "Post-PCI findings to report",
  "type": "sata",
  "stem": "Which findings after a percutaneous coronary intervention should the nurse report to the health care provider? Select all that apply.",
  "options": [
   "New chest pain",
   "A new dysrhythmia on the monitor",
   "Absent pedal pulses in the affected extremity",
   "The patient reporting numbness and tingling in the affected leg",
   "A cool, pale foot on the affected side"
  ],
  "correct": [
   0,
   1,
   2,
   3,
   4
  ],
  "rationale": "All five require notification. New chest pain after PCI can mean acute stent thrombosis, restenosis, coronary dissection, or a new infarct. A new dysrhythmia may reflect ischemia or reperfusion. Absent peripheral pulses, numbness and tingling, and a cool pale extremity all point to compromised arterial flow distal to the insertion site, whether from thrombus, embolism, vessel injury, or excessive compression. These specific findings are the ones the course lists as triggering provider notification, and the reason they are grouped together is that each represents a threat to either the myocardium or the limb, both of which are time-sensitive."
 },
 {
  "id": "n504e3q23",
  "exam": 3,
  "topic": "Contrast considerations",
  "type": "mcq",
  "stem": "A patient scheduled for cardiac catheterization takes metformin for type 2 diabetes. Which action should the nurse anticipate?",
  "options": [
   "No change, because metformin does not interact with contrast media",
   "Substituting insulin glargine for the metformin permanently",
   "Doubling the metformin dose to prevent hyperglycemia from the contrast",
   "Holding the metformin around the time of the procedure per facility protocol"
  ],
  "correct": [
   3
  ],
  "rationale": "Iodinated contrast can impair renal function, and metformin is cleared by the kidneys; if renal clearance falls while metformin is still on board, the drug accumulates and can precipitate lactic acidosis. Metformin is therefore held around the time of any contrast procedure, including PCI, TAVR, and endovascular repair, and restarted once renal function has been confirmed stable. Increasing the dose would raise the risk. Permanently substituting insulin is an overreaction to a temporary periprocedural issue, and denying the interaction is simply incorrect — this is a standard, specifically taught contraindication."
 },
 {
  "id": "n504e3q24",
  "exam": 3,
  "topic": "CABG indications",
  "type": "mcq",
  "stem": "A cardiac catheterization report shows 80% occlusion of the left main coronary artery and 75% proximal narrowing of two additional vessels. Which intervention should the nurse anticipate?",
  "options": [
   "Fibrinolytic therapy followed by discharge",
   "Medical management with statins and aspirin alone",
   "Coronary artery bypass grafting",
   "A single drug-eluting stent to the left main artery"
  ],
  "correct": [
   2
  ],
  "rationale": "Coronary artery bypass grafting is indicated for angina with greater than 50% occlusion of the left main coronary artery, for unstable angina with severe two-vessel or moderate three-vessel disease, for small-vessel disease that cannot be stented, and generally for vessels with proximal narrowing exceeding 70% of the diameter. This patient meets several of those criteria at once. Medical management alone leaves a critical left main lesion untreated, and a left main lesion of this severity with multivessel involvement is exactly the pattern that favors surgery over a single stent. Fibrinolytics treat acute thrombotic occlusion, not chronic multivessel atherosclerotic disease."
 },
 {
  "id": "n504e3q25",
  "exam": 3,
  "topic": "CABG procedures",
  "type": "mcq",
  "stem": "A patient with poor ventricular function and severe aortic atherosclerosis is scheduled for off-pump coronary artery bypass (OPCAB). Which statement correctly describes this approach?",
  "options": [
   "The heart continues beating during grafting, avoiding cardiopulmonary bypass; it is preferred for selected high-risk patients",
   "The heart is arrested and cardiopulmonary bypass provides circulation, oxygenation, and hypothermia",
   "Only a single anterior vessel can be grafted, and no vessel harvesting is required",
   "The procedure is performed entirely through a catheter without any incision"
  ],
  "correct": [
   0
  ],
  "rationale": "Off-pump coronary artery bypass is beating-heart surgery: medications slow the heart and reduce its metabolic demands, and the grafts are placed without stopping the heart or using the cardiopulmonary bypass machine. It requires a skilled surgeon and is the preferred method for selected high-risk patients, such as those with poor ventricular function or severe aortic atherosclerosis in whom cannulating and clamping the aorta is hazardous. The second option describes conventional on-pump CABG, which remains the most common approach. The third describes MIDCAB, used for single-vessel anterior disease through a small incision between the ribs, and the fourth describes a percutaneous procedure rather than surgery."
 },
 {
  "id": "n504e3q26",
  "exam": 3,
  "topic": "CABG procedures",
  "type": "mcq",
  "stem": "A patient asks why a leg incision is needed for his coronary bypass surgery. Which response by the nurse is correct?",
  "options": [
   "\"The leg incision allows the surgeon to thread the stent up to your heart.\"",
   "\"The leg incision is where the heart-lung machine is connected.\"",
   "\"A drain is placed in the leg to remove fluid from around the heart.\"",
   "\"A vein is harvested from your leg to create the bypass around the blocked coronary artery.\""
  ],
  "correct": [
   3
  ],
  "rationale": "In coronary artery bypass grafting the occluded coronary arteries are bypassed using the patient's own vessels or synthetic grafts. The saphenous vein in the leg is a common source, as is the internal mammary artery in the chest, and the cephalic or basilic veins in the arm may also be used — which is why a patient may return from surgery with both a sternal incision and a leg incision requiring separate assessment and care. Cardiopulmonary bypass is cannulated through the ascending aortic arch or the femoral artery within the operative field rather than through a harvest site. Mediastinal and pleural chest tubes drain the chest, not the leg, and stent placement is a catheter procedure, not part of CABG."
 },
 {
  "id": "n504e3q27",
  "exam": 3,
  "topic": "Post-CABG care",
  "type": "mcq",
  "stem": "Two hours after coronary artery bypass grafting, the nurse measures 190 mL of mediastinal chest tube drainage in the past hour. Which action is most appropriate?",
  "options": [
   "Strip and milk the chest tube vigorously to maintain patency",
   "Clamp the chest tube to slow the drainage",
   "Notify the surgeon immediately",
   "Document the finding as expected postoperative drainage"
  ],
  "correct": [
   2
  ],
  "rationale": "Mediastinal and pleural chest tube drainage is measured and recorded hourly after cardiac surgery, and drainage exceeding 150 mL per hour must be reported. Bleeding at that rate suggests surgical bleeding or a coagulopathy and can progress to hypovolemia or, if the blood cannot escape and accumulates in the pericardial space, to cardiac tamponade — a listed CABG complication. Documenting it as expected misses an emergency. Clamping a chest tube after cardiac surgery is dangerous precisely because it traps blood around the heart. Vigorous stripping and milking generates high negative pressure that can damage tissue and is not the routine practice it once was."
 },
 {
  "id": "n504e3q28",
  "exam": 3,
  "topic": "Post-CABG dysrhythmias",
  "type": "mcq",
  "stem": "On the second postoperative day after CABG, a patient's monitor shows an irregularly irregular rhythm with absent P waves at a rate of 118 beats/min. The patient is alert with a blood pressure of 118/70 mm Hg. Which is the most appropriate nursing response?",
  "options": [
   "Begin chest compressions and call a code blue",
   "Immediately defibrillate at 200 joules",
   "Document the rhythm as expected and take no further action",
   "Recognize new-onset atrial fibrillation as a common post-CABG complication, assess the patient, and notify the provider"
  ],
  "correct": [
   3
  ],
  "rationale": "New-onset atrial fibrillation is common after CABG — surgical manipulation, pericardial inflammation, and electrolyte shifts all irritate the atria — so recognizing it, assessing the patient's hemodynamic response, and notifying the provider is the correct response. The patient here is stable, so there is time for rate control, electrolyte correction, and consideration of anticoagulation. Compressions and defibrillation are for pulseless patients and would be grossly inappropriate in an alert patient with a normal blood pressure. Taking no action at all is the opposite error: post-CABG atrial fibrillation still carries stroke risk and needs management even when expected."
 },
 {
  "id": "n504e3q29",
  "exam": 3,
  "topic": "Post-CABG care",
  "type": "sata",
  "stem": "Which nursing interventions are appropriate in the postoperative care of a patient following coronary artery bypass grafting? Select all that apply.",
  "options": [
   "Measure and record mediastinal and pleural chest tube drainage hourly",
   "Assess neuropsychological status and orientation regularly",
   "Teach the patient to splint the sternal incision with a pillow when coughing",
   "Encourage early ambulation and pulmonary toileting with incentive spirometry",
   "Restrict all coughing and deep breathing to protect the sternal incision"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Post-CABG care includes hourly chest tube measurement, focused cardiovascular assessment, hemodynamic monitoring, strict intake and output, pain management, early ambulation with PT and OT, pulmonary toileting, GI assessment, sterile dressing technique, and monitoring of neuropsychological status, since postoperative delirium and cognitive change sometimes called pump brain are recognized after bypass. Splinting with a pillow makes coughing tolerable and protects the sternum. The false option reverses the goal: coughing and deep breathing are actively encouraged to prevent atelectasis and pneumonia, and splinting exists to make that possible rather than to avoid it."
 },
 {
  "id": "n504e3q30",
  "exam": 3,
  "topic": "Ejection fraction",
  "type": "mcq",
  "stem": "A catheterization report documents an ejection fraction of 37%. Which interpretation should the nurse share with the interprofessional team?",
  "options": [
   "This is within the normal range of 30% to 50%",
   "This indicates reduced left ventricular function with a significant drop in cardiac output",
   "This value reflects the percentage of blood remaining in the ventricle after systole",
   "This indicates the patient has a preserved ejection fraction and is not at risk for heart failure"
  ],
  "correct": [
   1
  ],
  "rationale": "Ejection fraction is the percentage of the filled left ventricle's volume that is ejected with each beat, calculated as stroke volume divided by end-diastolic volume. Normal is roughly 50% to 70%, borderline is 41% to 49%, and 40% or below is reduced, with symptoms often noticeable even at rest. An ejection fraction of 37% means the left ventricle has lost a large share of its pumping ability, and because the left ventricle is the working chamber that supplies the entire body, this represents left ventricular failure. The third option inverts the definition — ejection fraction measures what leaves the ventricle, not what remains."
 },
 {
  "id": "n504e3q31",
  "exam": 3,
  "topic": "Post-CABG hemodynamics",
  "type": "mcq",
  "stem": "A post-CABG patient in the surgical ICU is receiving infusions of norepinephrine and dobutamine. Which combination of findings would indicate the therapy is achieving its goal?",
  "options": [
   "MAP 72 mm Hg, cardiac index 2.7 L/min/m2, urine output 55 mL/hr, warm extremities",
   "MAP 52 mm Hg, cardiac index 1.6 L/min/m2, urine output 12 mL/hr, cool extremities",
   "MAP 94 mm Hg, cardiac index 1.5 L/min/m2, urine output 15 mL/hr, mottled knees",
   "MAP 68 mm Hg, heart rate 152 beats/min with frequent PVCs, urine output 20 mL/hr"
  ],
  "correct": [
   0
  ],
  "rationale": "Norepinephrine raises central blood pressure and therefore coronary perfusion, while dobutamine stimulates myocardial adrenergic receptors to increase cardiac output without a large rise in heart rate. Success is judged not by pressure alone but by whether that pressure is producing perfusion, so a MAP above 65, a cardiac index back in the normal 2.5 to 4 range, urine output above 30 mL/hr, and warm extremities together indicate the goal is met. The third option is the instructive trap: a MAP of 94 looks reassuring but sits alongside a cardiac index of 1.5 and oliguria, meaning the pressure is being generated by vasoconstriction while flow remains inadequate. The fourth shows dobutamine's known adverse effects of tachycardia and ectopy."
 },
 {
  "id": "n504e3q32",
  "exam": 3,
  "topic": "Post-CABG complications",
  "type": "sata",
  "stem": "Which complications should the nurse monitor for after coronary artery bypass grafting? Select all that apply.",
  "options": [
   "Cardiac tamponade",
   "Dysrhythmias",
   "Cerebrovascular accident",
   "Pulmonary embolism",
   "Rheumatic fever"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The recognized complications after CABG are orthostatic hypotension, infection, cardiac tamponade from blood accumulating in the pericardial space, bleeding, cerebrovascular accident, pulmonary embolism, and dysrhythmias, with atrial fibrillation being particularly common. Each traces to the surgery itself: the sternotomy and cannulation create bleeding and embolic risk, the manipulated pericardium can fill with blood, immobility raises venous thromboembolism risk, and the irritated myocardium becomes arrhythmogenic. Rheumatic fever is unrelated — it is an immune sequela of untreated streptococcal pharyngitis affecting the heart valves, not a surgical complication."
 },
 {
  "id": "n504e3q33",
  "exam": 3,
  "topic": "Arterial blood gases",
  "type": "mcq",
  "stem": "A post-CABG patient is intubated on FiO2 0.70 with PEEP 5 cm H2O. The arterial blood gas shows pH 7.37, PaCO2 46 mm Hg, PaO2 61 mm Hg, SaO2 85%, and the hemoglobin is 8.8 g/dL. Which interpretation is most accurate?",
  "options": [
   "Acid-base balance is normal, but oxygenation is inadequate for the level of support, and the low hemoglobin further limits oxygen-carrying capacity",
   "The patient has an uncompensated respiratory acidosis requiring immediate bicarbonate",
   "Oxygenation is adequate because the pH is within normal limits",
   "The results are normal for a postoperative patient on mechanical ventilation"
  ],
  "correct": [
   0
  ],
  "rationale": "The pH of 7.37 with a PaCO2 of 46 indicates acid-base balance is essentially intact. The problem is oxygenation: on 70% oxygen with PEEP, a PaO2 of 61 and an SaO2 of 85% are far lower than they should be. Compounding this, oxygen delivery depends on hemoglobin as well as saturation, and at 8.8 g/dL there are fewer red cells to carry whatever oxygen is loaded — which is why a transfusion is often paired with diuresis in this setting. Judging oxygenation from the pH is the conceptual error the third option captures, and calling these values normal would miss a patient who is not oxygenating adequately despite substantial support."
 },
 {
  "id": "n504e3q34",
  "exam": 3,
  "topic": "Preoperative teaching",
  "type": "sata",
  "stem": "Which topics should the nurse include when preparing a patient for a first cardiac catheterization? Select all that apply.",
  "options": [
   "The purpose of the procedure and how the patient will be prepared",
   "Sensations the patient may feel, such as a warm flush or palpitations",
   "That pressure will be applied to the groin afterward to prevent bleeding",
   "That the patient will be able to get up and walk immediately after the procedure",
   "That the patient will be fully unconscious under general anesthesia throughout"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Effective preprocedure teaching covers the purpose of the catheterization and how the patient will be prepared, what the cath lab will look like, the sensations that commonly occur such as a feeling of heat or a hot flash and palpitations, the pressure applied to the groin afterward to prevent bleeding, the routine monitoring to expect, who will be present, and the possible complications. Both false options misdescribe the recovery and the anesthesia. The patient must stay in bed with the procedural leg flat for several hours, commonly 4 to 6, because early movement can dislodge the clot at the arterial puncture; and the procedure is done under local anesthesia with conscious sedation, so the patient is awake and able to follow instructions."
 },
 {
  "id": "n504e3q35",
  "exam": 3,
  "topic": "Discharge teaching",
  "type": "sata",
  "stem": "Which discharge instructions should the nurse include for a patient recovering from coronary artery bypass grafting? Select all that apply.",
  "options": [
   "Report fever, increasing incisional redness, or new drainage",
   "Enroll in a cardiac rehabilitation program",
   "Observe lifting and driving restrictions until cleared by the surgeon",
   "Expect possible mood swings and short-term memory changes during recovery",
   "Resume smoking only in moderation, since complete cessation is unrealistic after surgery"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Discharge teaching after CABG covers what to watch for and when to call the provider, including signs of infection, heart failure, bleeding problems, and difficulty breathing; medication purposes and side effects; dietary guidance, often with a dietitian referral; activity guidance including lifting and driving restrictions and enrollment in cardiac rehabilitation; and a warning that mood swings and short-term memory changes are common after bypass so the patient and family are not alarmed. The smoking option is the one to reject outright: smoking causes vasoconstriction and raises circulating carbon monoxide, and complete cessation with referral to a cessation program is the teaching, not moderation."
 },
 {
  "id": "n504e3q36",
  "exam": 3,
  "topic": "Warfarin teaching",
  "type": "mcq",
  "stem": "A patient discharged on warfarin after cardiac surgery asks about diet. Which instruction is correct?",
  "options": [
   "\"Avoid all green vegetables permanently while taking this medication.\"",
   "\"Diet has no effect on warfarin, so eat whatever you like.\"",
   "\"Increase your intake of leafy greens to help the medication work better.\"",
   "\"Keep your intake of vitamin K-containing foods consistent from week to week.\""
  ],
  "correct": [
   3
  ],
  "rationale": "Warfarin works by interfering with vitamin K-dependent clotting factors, so swings in dietary vitamin K intake make the INR unstable and unpredictable. The teaching is consistency, not avoidance: the dose is titrated to the patient's usual diet, so a patient who suddenly eliminates or dramatically increases leafy greens will drift out of therapeutic range in one direction or the other. Telling the patient to avoid green vegetables permanently is a common misconception that leads to unnecessary dietary restriction, and deliberately increasing vitamin K would antagonize the drug rather than help it. Saying diet is irrelevant ignores a genuine and clinically significant interaction."
 },
 {
  "id": "n504e3q37",
  "exam": 3,
  "topic": "Zones of injury",
  "type": "mcq",
  "stem": "A nurse is reviewing the three zones that develop during a myocardial infarction. Which statement is correct?",
  "options": [
   "All three zones represent irreversibly dead myocardium",
   "The zones describe the layers of the pericardium rather than the myocardium",
   "The zone of necrosis is irreversibly dead tissue, while the zones of injury and ischemia surrounding it may be salvageable with prompt reperfusion",
   "The zone of ischemia is the innermost area and is always the first to die"
  ],
  "correct": [
   2
  ],
  "rationale": "An infarcting myocardium develops three concentric zones: a central zone of necrosis where cells have already died irreversibly, a surrounding zone of injury, and an outer zone of ischemia. The clinical importance is that the injured and ischemic tissue is still alive and can recover if blood flow is restored quickly — this is the physiologic basis for the phrase time is muscle and for the aggressive door-to-balloon and door-to-needle standards. Occlusion produces cell death by roughly 30 minutes and myocytes do not regenerate, which is why the salvageable zones matter so much. The zones describe myocardial tissue, not pericardial layers."
 },
 {
  "id": "n504e3q38",
  "exam": 3,
  "topic": "Cardiac markers",
  "type": "mcq",
  "stem": "A patient had chest pain 10 days ago but did not seek care. Which laboratory test is most likely to still show evidence of a myocardial infarction?",
  "options": [
   "Serum myoglobin",
   "Troponin",
   "CK-MB",
   "White blood cell count"
  ],
  "correct": [
   1
  ],
  "rationale": "Troponin has by far the longest diagnostic window of the cardiac markers: it begins to rise 3 to 12 hours after the onset of chest pain, peaks at 24 to 48 hours, and returns to baseline only over 5 to 14 days, so at day 10 it may still be detectably elevated. Creatine kinase and its cardiac isoenzyme CK-MB rise and fall much more quickly and would have normalized well before day 10, which makes CK-MB the strongest distractor. Myoglobin rises earliest of all but also clears fastest, making it useless this late. A white blood cell count is nonspecific and cannot identify myocardial necrosis."
 },
 {
  "id": "n504e3q39",
  "exam": 3,
  "topic": "Oxygen and morphine",
  "type": "mcq",
  "stem": "A patient with an acute myocardial infarction receives IV morphine. Beyond analgesia, which additional benefit does morphine provide in this setting?",
  "options": [
   "It increases myocardial contractility, improving cardiac output",
   "It reverses the ST elevation on the ECG",
   "It dissolves the coronary thrombus",
   "It reduces anxiety and sympathetic drive, lowering myocardial oxygen demand"
  ],
  "correct": [
   3
  ],
  "rationale": "Morphine relieves pain, and in an infarcting heart that matters physiologically as well as humanely: pain and anxiety drive catecholamine release, which raises heart rate, blood pressure, and contractility, and therefore raises myocardial oxygen demand in tissue that is already starved. Relieving pain and anxiety lowers that demand, and morphine's venodilating effect also modestly reduces preload. It is not an inotrope and does not increase contractility. Only fibrinolytics or mechanical revascularization dissolve or remove the thrombus, and no analgesic reverses ST elevation — that resolves when perfusion is restored."
 },
 {
  "id": "n504e3q40",
  "exam": 3,
  "topic": "PCI complications",
  "type": "sata",
  "stem": "Which complications are associated with percutaneous coronary intervention with stent placement? Select all that apply.",
  "options": [
   "Bleeding at the catheter insertion site",
   "Coronary artery rupture or dissection",
   "Renal impairment from contrast media",
   "Paralysis from disrupted blood flow to the spinal cord",
   "Sternal wound infection"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The complications of stent placement include bleeding at the insertion site, thrombus formation, damage to the vessel from the catheter, infection, dysrhythmia, myocardial infarction, coronary artery rupture, stroke, allergic reaction to the contrast, renal impairment from the contrast load, restenosis, plaque shift, and death. Both false options belong to other procedures, and that is the discriminator: PCI is a percutaneous catheter procedure through a radial or femoral puncture, so there is no sternal incision to become infected, and spinal cord ischemia causing paralysis is a complication of open aortic surgery, where the aorta is cross-clamped and cord perfusion is interrupted."
 },
 {
  "id": "n504e3q41",
  "exam": 3,
  "topic": "Antiplatelet adherence",
  "type": "mcq",
  "stem": "A patient with a newly placed drug-eluting coronary stent says, \"I feel completely fine now, so I plan to stop the clopidogrel and just take my aspirin.\" Which response by the nurse is most important?",
  "options": [
   "\"That is reasonable, since aspirin alone prevents clotting just as well.\"",
   "\"Stopping the clopidogrel early significantly increases the risk of a clot forming inside the stent, which can cause another heart attack.\"",
   "\"You can stop it as long as you have no chest pain for two weeks.\"",
   "\"Clopidogrel only prevents leg clots, so stopping it will not affect your heart.\""
  ],
  "correct": [
   1
  ],
  "rationale": "A newly placed stent is a foreign surface inside a coronary artery, and until it becomes covered by the vessel's own endothelium it is highly thrombogenic. Dual antiplatelet therapy with aspirin plus a P2Y12 inhibitor such as clopidogrel or ticagrelor is what prevents stent thrombosis during that period, and stopping the second agent early is one of the strongest predictors of acute stent thrombosis, which typically presents as a sudden, often fatal myocardial infarction. Feeling well is not evidence that the stent is endothelialized. Aspirin alone is insufficient during this window, and clopidogrel is not limited to preventing leg clots."
 },
 {
  "id": "n504e3q42",
  "exam": 3,
  "topic": "Post-CABG tamponade",
  "type": "mcq",
  "stem": "Six hours after CABG, a patient's chest tube output abruptly drops from 120 mL/hr to 10 mL/hr. The nurse notes jugular venous distention, a blood pressure of 84/68 mm Hg, and muffled heart sounds. Which complication should the nurse suspect?",
  "options": [
   "Hypovolemic shock from ongoing hemorrhage",
   "Pulmonary embolism",
   "Cardiac tamponade",
   "Resolution of postoperative bleeding"
  ],
  "correct": [
   2
  ],
  "rationale": "A sudden fall in chest tube output is not necessarily good news — if the tube has clotted while bleeding continues, the blood accumulates in the pericardial space instead of draining out, compressing the heart. The findings here are Beck's triad: hypotension, jugular venous distention, and muffled heart sounds, with the narrowing pulse pressure of 84/68 as an additional clue. Cardiac tamponade is a listed CABG complication and a surgical emergency. Interpreting the drop as resolved bleeding is the trap this question is built around. Pulmonary embolism would not produce muffled heart sounds, and simple hypovolemia from external hemorrhage would show a falling, not rising, venous pressure."
 },
 {
  "id": "n504e3q43",
  "exam": 3,
  "topic": "Intake and output",
  "type": "mcq",
  "stem": "A nurse maintains strict intake and output for a patient after a myocardial infarction. Which rationale best supports this intervention?",
  "options": [
   "It determines when the patient can resume a regular diet",
   "It is required for billing and documentation purposes",
   "Urine output reflects renal perfusion and cardiac output, and fluid retention signals developing heart failure",
   "It is used to calculate the correct dose of aspirin"
  ],
  "correct": [
   2
  ],
  "rationale": "Strict intake and output is a hemodynamic assessment tool, not a clerical exercise. Urine output is one of the most practical bedside indicators of whether the kidneys, and by extension the other organs, are being perfused — output falling below roughly 30 mL/hr suggests cardiac output is inadequate. On the intake side, a positive fluid balance and weight gain signal the fluid retention of developing heart failure, a major complication after infarction. The other options describe tasks unrelated to fluid balance: diet advancement is guided by clinical status and aspirin is not dosed by urine output."
 },
 {
  "id": "n504e3q44",
  "exam": 3,
  "topic": "Unstable angina",
  "type": "mcq",
  "stem": "A patient reports chest pain that now occurs at rest, lasts longer than it used to, and is no longer fully relieved by nitroglycerin. Troponin levels drawn serially are negative and the ECG shows no ST elevation. Which classification fits this presentation?",
  "options": [
   "Unstable angina",
   "Stable angina",
   "NSTEMI",
   "Acute pericarditis"
  ],
  "correct": [
   0
  ],
  "rationale": "Unstable angina is defined by a change in the anginal pattern — pain at rest, lasting longer, or provoked by less exertion than before — occurring because the myocardium is experiencing hypoxia or a coronary plaque has ruptured. What separates it from an NSTEMI is that cardiac markers remain NEGATIVE: ischemia is occurring but not enough cell death to release troponin. Stable angina is excluded because the pattern has changed and nitroglycerin no longer reliably relieves it. Pericarditis would produce pain that worsens lying flat and improves with sitting forward, usually with a friction rub and diffuse ST elevation rather than a negative ECG."
 },
 {
  "id": "n504e3q45",
  "exam": 3,
  "topic": "Cardiac rehabilitation",
  "type": "mcq",
  "stem": "A patient recovering from a myocardial infarction asks about cardiac rehabilitation. Which description by the nurse is most accurate?",
  "options": [
   "\"It is a series of repeat catheterizations performed over several months.\"",
   "\"It is a supervised program of graded exercise, risk-factor education, and support that improves recovery and quality of life.\"",
   "\"It is only for patients who have had bypass surgery, not for patients treated with stents.\"",
   "\"It is a period of strict bed rest lasting about 6 weeks.\""
  ],
  "correct": [
   1
  ],
  "rationale": "Cardiac rehabilitation is a structured, medically supervised program combining graded exercise with education on risk-factor modification — diet, smoking cessation, blood pressure, lipids, diabetes, and medication adherence — plus psychosocial support. It is recommended after myocardial infarction, PCI, CABG, and valve surgery alike, so limiting it to bypass patients is incorrect. It involves no repeat catheterizations. The bed rest answer is the historical misconception the program was designed to replace: prolonged inactivity after a cardiac event worsens deconditioning, mood, and outcomes, and graded activity is what improves them."
 },
 {
  "id": "n504e3q46",
  "exam": 3,
  "topic": "Risk factors",
  "type": "sata",
  "stem": "Which findings in a patient's history are modifiable risk factors for coronary artery disease? Select all that apply.",
  "options": [
   "A 50-pack-year smoking history",
   "Untreated hypertension",
   "Abdominal obesity with a sedentary lifestyle",
   "Age 68 years",
   "A family history of premature coronary heart disease"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The risk factors for ST-elevation myocardial infarction include a sedentary lifestyle, an elevated lipid profile, smoking, poor dietary intake, age, sex, family history of premature coronary heart disease, diabetes, hypertension, abdominal obesity, psychosocial stress, poor oral hygiene, and peripheral vascular disease. Of those, smoking, hypertension, lipids, diet, weight, activity level, stress, and diabetes control can be changed, and they are where nursing teaching is directed. Age and family history are the two non-modifiable factors here, alongside sex — they still matter for risk stratification and for how aggressively the modifiable factors are treated, but neither can itself be altered."
 },
 {
  "id": "n504e3q47",
  "exam": 3,
  "topic": "Transfusion rationale",
  "type": "mcq",
  "stem": "A patient with a hemoglobin of 8.8 g/dL awaiting CABG is prescribed 2 units of packed red blood cells and IV furosemide between units. Which rationale best explains the furosemide?",
  "options": [
   "It prevents an allergic transfusion reaction",
   "It increases the hemoglobin level more rapidly",
   "It prevents a febrile reaction to the transfused cells",
   "It reduces the risk of fluid overload and exacerbating heart failure from the added transfusion volume"
  ],
  "correct": [
   3
  ],
  "rationale": "The transfusion is given because red cells are needed to carry oxygen and remove carbon dioxide, and this patient with coronary disease and a low hemoglobin cannot afford poor oxygen-carrying capacity. But each unit adds circulating volume to a patient who already has heart failure, so furosemide is given to eliminate excess fluid, decrease preload, and reduce the risk of transfusion-associated circulatory overload — which in turn helps protect cardiac output. Allergic and febrile transfusion reactions are prevented or treated with antihistamines and antipyretics, not diuretics, and a diuretic does not accelerate the rise in hemoglobin."
 },
 {
  "id": "n504e3q48",
  "exam": 3,
  "topic": "Fibrinolytic safety",
  "type": "sata",
  "stem": "Which findings in a patient's history would be contraindications to fibrinolytic therapy for a STEMI? Select all that apply.",
  "options": [
   "Active internal bleeding",
   "A history of intracranial hemorrhage",
   "Ischemic stroke within the past 3 months",
   "A history of well-controlled hypertension currently 128/76 mm Hg",
   "An appendectomy performed 15 years ago"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Fibrinolytics dissolve clot indiscriminately, so anything that creates a site where a clot is currently the only thing preventing catastrophic bleeding is a contraindication: active internal bleeding, any history of intracranial hemorrhage, recent ischemic stroke, recent major surgery, and significant head or facial trauma. Severe UNCONTROLLED hypertension is also a contraindication because of the intracranial bleeding risk, but well-controlled pressure at 128/76 is not — the risk attaches to uncontrolled pressure at the time of treatment rather than to carrying the diagnosis. Surgery becomes a contraindication only when it is RECENT; an appendectomy 15 years ago is long healed and poses no bleeding risk."
 },
 {
  "id": "n504e3q49",
  "exam": 3,
  "topic": "Post-CABG neurologic care",
  "type": "mcq",
  "stem": "On the first postoperative day after CABG, a patient who was previously oriented is now confused about the date and place but has intact motor function, equal pupils, and stable vital signs. Which action should the nurse take?",
  "options": [
   "Restrict all visitors to reduce stimulation until the confusion resolves",
   "Assume the patient has had a stroke and prepare for immediate thrombolysis",
   "Document the finding as postoperative delirium and continue to monitor and reorient, notifying the provider of the change",
   "Administer a sedative to calm the patient and prevent further confusion"
  ],
  "correct": [
   2
  ],
  "rationale": "Neuropsychological change is common after cardiopulmonary bypass — postoperative delirium and short-term memory disturbance are recognized enough that patients and families are warned about them at discharge — and the nursing response is ongoing neurologic assessment, reorientation, attention to reversible contributors such as hypoxia, electrolytes, pain, and medications, and reporting the change. Stroke is also a real post-CABG complication, which is why the change must be reported and evaluated rather than assumed benign, but assuming stroke and preparing for thrombolysis without assessment skips that evaluation. Sedating a delirious patient often worsens delirium, and family presence typically helps reorientation rather than hindering it."
 },
 {
  "id": "n504e3q50",
  "exam": 3,
  "topic": "Activity progression",
  "type": "mcq",
  "stem": "A patient is 5 days post-CABG and asks when normal activity can resume. Which response reflects appropriate teaching?",
  "options": [
   "\"Avoid lifting, pushing, or pulling anything heavier than about 5 pounds until your surgeon approves, and expect driving to be restricted for several weeks.\"",
   "\"You can drive as soon as you are no longer taking pain medication, usually in 2 to 3 days.\"",
   "\"You should remain on bed rest at home for the first 3 months.\"",
   "\"You may resume all normal activity, including heavy lifting, as soon as you are discharged.\""
  ],
  "correct": [
   0
  ],
  "rationale": "After a sternotomy the bone must knit, so upper-body loading is limited: patients avoid lifting, pushing, or pulling more than about 5 pounds until the surgeon clears them, avoid strenuous upper-extremity activity for several months, and do not drive for several weeks — both because of the sternal healing and because a sudden steering or braking motion, or an airbag deployment, could disrupt the incision. Unrestricted activity at discharge risks sternal dehiscence. Three months of bed rest is the opposite error, since early ambulation and graded activity through cardiac rehabilitation are central to recovery. Being off pain medication does not indicate sternal healing."
 },
 {
  "id": "n504e4q01",
  "exam": 4,
  "topic": "Heart sounds",
  "type": "mcq",
  "stem": "A nurse is auscultating a patient's heart. Which statement correctly describes the normal heart sounds?",
  "options": [
   "S1 is the closure of the mitral and tricuspid valves at the beginning of ventricular systole; S2 is the closure of the aortic and pulmonic valves",
   "S1 is the closure of the aortic and pulmonic valves; S2 is the closure of the mitral and tricuspid valves",
   "S1 and S2 both represent the opening of the atrioventricular valves",
   "S1 occurs during diastole and S2 occurs during systole"
  ],
  "correct": [
   0
  ],
  "rationale": "S1, the lub, is the closure of the atrioventricular valves — mitral and tricuspid — marking the beginning of ventricular systole, and it occurs right after the QRS complex; it is naturally softer and longer and is heard best at the apex or lower left sternal border, and palpating the carotid helps identify it. S2, the dub, is the closure of the semilunar valves — aortic and pulmonic — at the end of ventricular systole; it is shorter, higher pitched, and heard best at the base. The second option reverses the two, which is the most common error. Heart sounds are produced by valve CLOSURE, not opening."
 },
 {
  "id": "n504e4q02",
  "exam": 4,
  "topic": "Auscultation",
  "type": "mcq",
  "stem": "A patient is suspected of having aortic stenosis. Where should the nurse place the stethoscope to best hear the aortic valve?",
  "options": [
   "Fifth intercostal space at the midclavicular line",
   "Second intercostal space at the right sternal border",
   "Second intercostal space at the left sternal border",
   "Fourth intercostal space at the left lower sternal border"
  ],
  "correct": [
   1
  ],
  "rationale": "Aortic sounds are best heard at the right second intercostal space, which is the specific landmark taught for assessing aortic stenosis. The other options are the other standard auscultatory areas and are exactly the ones a student is likely to confuse: the fifth intercostal space at the midclavicular line is the apex, the mitral area; the second intercostal space at the LEFT sternal border is the pulmonic area; and the lower left sternal border is the tricuspid area. The front-to-back memory order for the valves is tricuspid, pulmonic, mitral, aortic, and tri before you bi keeps the tricuspid on the right and the bicuspid or mitral on the left."
 },
 {
  "id": "n504e4q03",
  "exam": 4,
  "topic": "Murmurs",
  "type": "mcq",
  "stem": "A nurse documents that a patient's murmur is accompanied by a palpable thrill. Which understanding does this reflect?",
  "options": [
   "A thrill means the murmur originates in the pericardium rather than a valve",
   "The murmur is faint and audible only with concentrated listening",
   "A thrill indicates the murmur is benign and requires no follow-up",
   "The murmur is loud enough that turbulent flow can be felt through the chest wall, indicating a higher grade"
  ],
  "correct": [
   3
  ],
  "rationale": "Murmurs reflect turbulent blood flow through normal or abnormal valves, and they are graded by the provider on intensity. The lowest grades are very faint or faint but recognizable, then loud but moderate; a palpable thrill marks the higher grades, where the turbulence is vigorous enough to be felt as a vibration through the chest wall, and the highest grades are audible with the stethoscope partially or entirely off the chest. A thrill therefore indicates a more significant lesion warranting evaluation, not a benign one. Pericardial friction rubs are a different sound entirely, scratchy and high-pitched, heard at the lower left sternal border."
 },
 {
  "id": "n504e4q04",
  "exam": 4,
  "topic": "Aortic stenosis",
  "type": "mcq",
  "stem": "An older adult reports exertional syncope, chest pain with activity, and increasing shortness of breath. The blood pressure is 104/86 mm Hg and a systolic murmur is audible at the right second intercostal space. Which condition should the nurse suspect?",
  "options": [
   "Aortic stenosis",
   "Aortic regurgitation",
   "Mitral regurgitation",
   "Acute pericarditis"
  ],
  "correct": [
   0
  ],
  "rationale": "Syncope, angina, and dyspnea on exertion form the classic symptom triad of aortic stenosis, and exertional syncope in an older adult is a specific red flag for it. The narrowed valve obstructs left ventricular outflow, so the ventricle cannot increase output to meet demand. The blood pressure of 104/86 is the confirming clue: a pulse pressure of only 18 mm Hg is narrow, which is characteristic of aortic stenosis. Aortic regurgitation produces the opposite, a WIDENED pulse pressure with a diastolic murmur. Mitral regurgitation produces a systolic murmur at the apex rather than the aortic area, and pericarditis produces positional pain and a friction rub."
 },
 {
  "id": "n504e4q05",
  "exam": 4,
  "topic": "Aortic stenosis",
  "type": "sata",
  "stem": "Which complications should the nurse anticipate in a patient with severe aortic stenosis? Select all that apply.",
  "options": [
   "Left ventricular hypertrophy from chronically increased afterload",
   "Increased myocardial oxygen consumption with decreased supply",
   "Pulmonary hypertension",
   "Cerebrovascular accident",
   "Widened pulse pressure with bounding peripheral pulses"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "In aortic stenosis the obstruction raises left ventricular systolic pressure and afterload, which increases left ventricular mass over time and leads to dysfunction and failure. That thickened, hard-working ventricle consumes more oxygen while the elevated end-diastolic pressure and reduced aortic pressure impair coronary supply — a demand-supply mismatch that explains the angina. Pressure backing up through the left atrium produces pulmonary hypertension, and stroke and sudden death are recognized complications, along with acquired von Willebrand syndrome causing GI bleeding. A widened pulse pressure with bounding pulses is the exception: aortic stenosis produces a NARROW pulse pressure, and the widened one belongs to aortic regurgitation."
 },
 {
  "id": "n504e4q06",
  "exam": 4,
  "topic": "TAVR",
  "type": "sata",
  "stem": "Which findings would be contraindications or cautions for a patient scheduled for transcatheter aortic valve replacement (TAVR)? Select all that apply.",
  "options": [
   "The patient took metformin this morning",
   "The patient has not been NPO and ate breakfast 1 hour ago",
   "The patient is hemodynamically unstable",
   "The patient has a documented penicillin allergy",
   "The patient has a documented allergy to latex"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "TAVR is the preferred surgical approach for aortic stenosis in suitable candidates, but the listed contraindications are metformin use, because iodinated contrast can impair renal clearance and precipitate lactic acidosis just as it does before PCI; not being NPO, because of aspiration risk during sedation; hemodynamic instability; and a poor ejection fraction, which raises procedural risk substantially. The two false options are drug and material allergies. Both are important and change what is used during the case — a different prophylactic antibiotic, latex-free equipment — but an allergy is a precaution to plan around rather than a reason the procedure cannot proceed."
 },
 {
  "id": "n504e4q07",
  "exam": 4,
  "topic": "Aortic regurgitation",
  "type": "mcq",
  "stem": "A patient with chronic aortic regurgitation has a blood pressure of 158/48 mm Hg and an early diastolic murmur at the left sternal border. Which explanation accounts for these findings?",
  "options": [
   "Blood leaks back into the left ventricle during diastole, dropping the diastolic pressure and widening the pulse pressure",
   "The narrowed aortic valve prevents adequate ejection, raising the systolic pressure",
   "Backward flow into the left atrium during systole produces the widened pulse pressure",
   "The murmur reflects turbulent flow across a stenotic mitral valve"
  ],
  "correct": [
   0
  ],
  "rationale": "In aortic regurgitation the valve fails to close tightly, so during diastole blood refluxes from the aorta back into the left ventricle. That diastolic reflux drains the aorta, dropping the diastolic pressure while the enlarged stroke volume of the next beat raises the systolic — producing the widened pulse pressure of 110 mm Hg seen here and the early diastolic murmur at the left sternal border. The second option describes stenosis rather than regurgitation. Backward flow into the left ATRIUM during systole is mitral regurgitation, and a stenotic mitral valve produces a diastolic murmur at the apex, not the left sternal border."
 },
 {
  "id": "n504e4q08",
  "exam": 4,
  "topic": "Acute aortic regurgitation",
  "type": "mcq",
  "stem": "A patient develops acute aortic regurgitation following infective endocarditis. Which statement explains why the acute form is more immediately dangerous than the chronic form?",
  "options": [
   "Acute regurgitation always involves a larger regurgitant volume than chronic regurgitation",
   "Chronic regurgitation never causes heart failure",
   "Acute regurgitation cannot be treated surgically",
   "The left ventricle has not had time to dilate and compensate, so filling pressures rise abruptly and cardiogenic shock can result"
  ],
  "correct": [
   3
  ],
  "rationale": "In chronic aortic regurgitation the left ventricle dilates gradually over years, accommodating the extra regurgitant volume while keeping filling pressures relatively low — which is why patients can remain compensated for a long time. In the acute form there has been no time for that remodeling, so the sudden volume load hits a normally sized, non-compliant ventricle; filling pressures spike, pulmonary edema develops rapidly, and acute aortic regurgitation can result in cardiogenic shock. The danger is the speed of onset relative to the ventricle's ability to adapt, not the absolute regurgitant volume. Both forms are surgically treatable, and chronic regurgitation certainly can progress to heart failure."
 },
 {
  "id": "n504e4q09",
  "exam": 4,
  "topic": "Mitral stenosis",
  "type": "mcq",
  "stem": "A 34-year-old man presents with dyspnea, dizziness, and palpitations. He had rheumatic fever as a child. His heart rate is 160 beats/min and irregularly irregular, and a low-pitched diastolic murmur is heard at the apex. Which condition best explains this presentation?",
  "options": [
   "Aortic stenosis with exertional syncope",
   "Mitral valve stenosis with atrial fibrillation",
   "Acute pericarditis with effusion",
   "Hypertrophic cardiomyopathy with outflow obstruction"
  ],
  "correct": [
   1
  ],
  "rationale": "Rheumatic fever is the most common cause of mitral stenosis; it scars the valve leaflets and chordae tendineae, producing contractures and adhesions that thicken and shorten the structures and obstruct flow from the left atrium into the left ventricle. Pressure and volume then rise in the left atrium, which stretches and becomes arrhythmogenic — which is why atrial fibrillation is so characteristic, and why this young patient is in an irregularly irregular rhythm at 160. The murmur fits precisely: mitral stenosis produces a loud S1 with a low-pitched DIASTOLIC murmur best heard at the APEX. Aortic stenosis produces a systolic murmur at the right second intercostal space."
 },
 {
  "id": "n504e4q10",
  "exam": 4,
  "topic": "Mitral stenosis",
  "type": "mcq",
  "stem": "A patient with severe mitral stenosis and new atrial fibrillation at 160 beats/min is admitted. Which combination of medications should the nurse anticipate?",
  "options": [
   "A one-time oral dose of diltiazem and subcutaneous heparin",
   "IV push metoprolol and subcutaneous enoxaparin",
   "An amiodarone infusion and a heparin infusion",
   "A lidocaine bolus followed by an infusion and subcutaneous heparin"
  ],
  "correct": [
   2
  ],
  "rationale": "Two problems must be addressed simultaneously. The amiodarone slows the ventricular rate and may convert the rhythm to sinus, restoring the atrial contribution to filling that a stenotic valve badly needs. The heparin addresses the clot risk: atrial fibrillation causes blood to pool in the atria, and an IV heparin infusion achieves therapeutic anticoagulation faster than subcutaneous heparin or enoxaparin, which matters when the stroke risk is immediate. That speed is what makes the IV route the correct choice over the subcutaneous options. Lidocaine is a ventricular antiarrhythmic and has no role in atrial fibrillation, making that option incorrect on both counts."
 },
 {
  "id": "n504e4q11",
  "exam": 4,
  "topic": "Mitral regurgitation",
  "type": "mcq",
  "stem": "A patient with acute mitral regurgitation from papillary muscle rupture presents with severe dyspnea at rest that worsens when supine, a cough producing pink frothy sputum, crackles throughout both lung fields, and a systolic murmur. Which pathophysiologic explanation is correct?",
  "options": [
   "The mitral valve is narrowed, obstructing flow from the left atrium into the left ventricle",
   "Blood regurgitates from the aorta into the left ventricle during diastole",
   "Fluid has accumulated in the pericardial sac, compressing the heart",
   "Blood regurgitates from the left ventricle into the left atrium during systole, raising pulmonary venous pressure and causing pulmonary edema"
  ],
  "correct": [
   3
  ],
  "rationale": "Mitral regurgitation is backflow from the left ventricle into the left atrium through an incompetent mitral valve during systole, producing a systolic murmur. When it is acute — from papillary muscle rupture, a common mechanism after myocardial infarction — the left atrium has not dilated to accommodate the volume, so pressure transmits straight back into the pulmonary veins and flash pulmonary edema follows, presenting as orthopnea, crackles, and pink frothy sputum. Backflow from the aorta into the ventricle in diastole is aortic regurgitation. A narrowed mitral valve is stenosis, and pericardial fluid compressing the heart is tamponade."
 },
 {
  "id": "n504e4q12",
  "exam": 4,
  "topic": "Tricuspid regurgitation",
  "type": "mcq",
  "stem": "A patient with long-standing pulmonary hypertension develops tricuspid regurgitation. Which assessment findings should the nurse expect?",
  "options": [
   "Jugular venous distention, hepatomegaly, ascites, and peripheral edema",
   "A narrow pulse pressure with exertional syncope",
   "Pink frothy sputum and bilateral crackles with a normal jugular venous pressure",
   "A pericardial friction rub relieved by leaning forward"
  ],
  "correct": [
   0
  ],
  "rationale": "The tricuspid valve sits between the right atrium and right ventricle, so when it becomes incompetent the regurgitant volume backs up into the systemic venous circulation. The findings are therefore right-sided congestion: jugular venous distention, hepatomegaly, ascites, and peripheral edema, with cardiac cirrhosis a recognized complication. Secondary tricuspid regurgitation arises when right ventricular pressure rises and the leaflets no longer close fully, which is exactly what pulmonary hypertension, cor pulmonale, pulmonary embolism, and left-sided heart failure produce. Pink frothy sputum with crackles is LEFT-sided congestion, narrow pulse pressure with syncope suggests aortic stenosis, and a friction rub indicates pericarditis."
 },
 {
  "id": "n504e4q13",
  "exam": 4,
  "topic": "Prosthetic valves",
  "type": "mcq",
  "stem": "A 34-year-old man requires mitral valve replacement. The surgeon recommends a mechanical valve rather than a tissue valve. Which rationale best supports this choice?",
  "options": [
   "Mechanical valves do not require long-term anticoagulation",
   "Mechanical valves last 20 to 25 years, whereas tissue valves last only 5 to 10, which matters for a young patient",
   "Tissue valves carry a higher risk of thromboembolism",
   "Mechanical valves eliminate the risk of infective endocarditis"
  ],
  "correct": [
   1
  ],
  "rationale": "The trade-off between valve types is durability versus anticoagulation. Mechanical valves, made of metal alloys, Dacron, or pyrolytic carbon, last roughly 20 to 25 years but are thrombogenic and require lifelong anticoagulation. Tissue or biologic valves, made from bovine, porcine, or human tissue, do not require long-term anticoagulation but last only 5 to 10 years. For a relatively young and otherwise healthy 34-year-old, choosing the tissue valve would commit him to repeat surgery within a decade, so durability wins. The first and third options reverse the properties, and no prosthetic valve eliminates endocarditis risk — prosthetic valves actually increase it."
 },
 {
  "id": "n504e4q14",
  "exam": 4,
  "topic": "Anticoagulation after valve surgery",
  "type": "mcq",
  "stem": "Which laboratory result reflects an appropriate goal for a patient taking warfarin after mechanical heart valve replacement?",
  "options": [
   "PT 12.5 seconds",
   "Bleeding time 9 minutes",
   "INR 3.2",
   "aPTT 40 seconds"
  ],
  "correct": [
   2
  ],
  "rationale": "An INR goal of 2.5 to 3.5 is appropriate for patients with mechanical valves — a higher target than the 2.0 to 3.0 used for many other indications, because the artificial valve surface is strongly thrombogenic and valve thrombosis is catastrophic. An INR of 3.2 sits within that window. A prothrombin time of 12.5 seconds is essentially normal, which would mean the patient is not anticoagulated at all. The aPTT monitors heparin rather than warfarin, and bleeding time assesses platelet function and is not used to guide warfarin. Each distractor is a real coagulation test, which is why the question tests whether the right one is being matched to the right drug."
 },
 {
  "id": "n504e4q15",
  "exam": 4,
  "topic": "Valve surgery teaching",
  "type": "sata",
  "stem": "Which discharge instructions should the nurse provide to a patient with a new mechanical heart valve on warfarin? Select all that apply.",
  "options": [
   "Use a soft toothbrush and expect easier bruising",
   "Keep all appointments for INR monitoring",
   "Report blood in the urine, coughing up blood, or bleeding that will not stop",
   "Inform every health care provider and dentist about the valve, as antibiotics are needed before invasive procedures",
   "Stop the warfarin for a week before any dental cleaning without contacting the provider"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Anticoagulation teaching covers taking the dose at the same time daily, never stopping it without speaking to the provider, keeping lab appointments, expecting easier bruising and using a soft toothbrush since gum bleeding is common, and reporting hematuria, hemoptysis, severe nosebleeds, or any bleeding that cannot be stopped. Separately, patients with repaired or replaced valves are at risk for infective endocarditis and must inform all providers, because antibiotic prophylaxis is required before invasive procedures and dental work. The last option combines two errors: stopping warfarin independently, and doing so without contacting the prescriber."
 },
 {
  "id": "n504e4q16",
  "exam": 4,
  "topic": "Valve surgery teaching",
  "type": "mcq",
  "stem": "A patient with a new mechanical valve asks, \"How do I let people know I have an artificial valve? Do I have to carry paperwork everywhere?\" Which response is most appropriate?",
  "options": [
   "\"Only your cardiologist needs to know; other providers do not need this information.\"",
   "\"There is no need to tell anyone once your incision has healed.\"",
   "\"You will need to carry your complete surgical record with you at all times.\"",
   "\"Wear a medical alert bracelet or necklace, or carry a wallet card indicating your valve and anticoagulant.\""
  ],
  "correct": [
   3
  ],
  "rationale": "A medical alert bracelet or necklace, or a wallet-sized card, communicates the valve replacement and the anticoagulant quickly in an emergency when the patient may not be able to speak for themselves — this is exactly what the patient is asking for and it removes the burden of carrying paperwork. The information remains essential permanently, not just until the incision heals, because of both the bleeding risk from anticoagulation and the need for endocarditis prophylaxis. Carrying a full surgical record is impractical, and restricting the information to the cardiologist would leave emergency clinicians and dentists without facts that change their care."
 },
 {
  "id": "n504e4q17",
  "exam": 4,
  "topic": "Infective endocarditis",
  "type": "mcq",
  "stem": "Which organisms are the most common causes of infective endocarditis?",
  "options": [
   "Streptococcus viridans and Staphylococcus aureus",
   "Mycobacterium tuberculosis and Legionella pneumophila",
   "Candida albicans and Aspergillus fumigatus",
   "Escherichia coli and Klebsiella pneumoniae"
  ],
  "correct": [
   0
  ],
  "rationale": "Streptococcus viridans and Staphylococcus aureus are the organisms most commonly responsible for infective endocarditis. Streptococcus viridans is normal oral flora, which is why dental procedures and poor oral hygiene are such prominent risk factors and why prophylaxis is given before dental work in at-risk patients; Staphylococcus aureus is strongly associated with intravenous drug use and health care-associated infection. The organisms enter the bloodstream, become trapped in low-pressure areas, and build vegetation on the valves. Gram-negative enteric organisms and fungi can cause endocarditis, particularly in immunocompromised patients, but they are far less common, and mycobacteria and Legionella are not typical causes."
 },
 {
  "id": "n504e4q18",
  "exam": 4,
  "topic": "Infective endocarditis",
  "type": "sata",
  "stem": "Which factors increase a patient's risk of developing infective endocarditis? Select all that apply.",
  "options": [
   "Intravenous drug use",
   "A prosthetic heart valve",
   "Recent invasive dental work",
   "A history of childhood asthma",
   "Well-controlled type 2 diabetes with an A1C of 6.2%"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Endocarditis develops when organisms circulating in the blood settle on endocardial surfaces and build vegetation, so anything that introduces bacteremia or creates a surface for adherence raises risk: intravenous drug use with shared needles, prosthetic and replaced valves, invasive dental procedures, structural cardiac defects, systemic immune compromise, and health care-associated exposures such as central lines. Neither false option qualifies. Childhood asthma is an airway disease with no endocardial involvement, and although poorly controlled diabetes impairs immunity and would raise risk, an A1C of 6.2% represents good control."
 },
 {
  "id": "n504e4q19",
  "exam": 4,
  "topic": "Infective endocarditis",
  "type": "sata",
  "stem": "Which peripheral findings support a diagnosis of infective endocarditis? Select all that apply.",
  "options": [
   "Splinter hemorrhages in the distal third of the nail bed",
   "Janeway lesions on the palms and soles",
   "Osler nodes on the pads of the fingers and toes",
   "Clubbing of the fingers developing over 24 hours",
   "A symmetric bullseye-shaped rash across the trunk"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The peripheral stigmata of infective endocarditis arise from microemboli and immune complex deposition as fragments of vegetation break loose: splinter hemorrhages appear as black longitudinal lines or small red streaks in the distal third of the nail bed, Janeway lesions are flat reddened macules on the hands and feet, and Osler nodes are tender lesions on the pads of the fingers and toes. Petechiae on the conjunctivae, palate, and skin above the clavicle also occur. Clubbing can develop in chronic endocarditis but over months, not 24 hours — the timeframe is what makes it false — and a bullseye rash is the erythema migrans of Lyme disease."
 },
 {
  "id": "n504e4q20",
  "exam": 4,
  "topic": "Infective endocarditis",
  "type": "mcq",
  "stem": "A patient with left-sided infective endocarditis develops sudden flank pain radiating to the groin with hematuria. Which explanation is most likely?",
  "options": [
   "A vegetation fragment has embolized to the renal circulation",
   "The patient has developed right-sided heart failure with hepatic congestion",
   "A vegetation fragment has embolized to the pulmonary circulation",
   "The patient is experiencing an adverse reaction to IV antibiotics"
  ],
  "correct": [
   0
  ],
  "rationale": "Vegetation fragments break loose and travel with the flow of blood, so the side of the heart involved predicts where the emboli land. LEFT-sided vegetations enter the systemic circulation and reach the spleen causing rebound tenderness, the kidneys causing flank pain radiating to the groin with hematuria and pyuria, the GI tract causing mesenteric emboli with diffuse abdominal pain after eating, the brain causing TIA or stroke with confusion and aphasia, and the extremities. RIGHT-sided vegetations travel to the pulmonary circulation, producing pleuritic chest pain, dyspnea, and cough — which is why that option is wrong for a left-sided lesion."
 },
 {
  "id": "n504e4q21",
  "exam": 4,
  "topic": "Endocarditis management",
  "type": "sata",
  "stem": "Which nursing interventions and teaching points apply to a patient being treated for infective endocarditis? Select all that apply.",
  "options": [
   "Administer IV antibiotics on time, anticipating a 4- to 6-week course",
   "Teach aseptic technique for central catheter care at home",
   "Monitor for signs of heart failure such as rapid pulse, fatigue, cough, and dyspnea",
   "Assess mental status frequently for evidence of embolic neurologic events",
   "Discontinue antibiotics once the patient has been afebrile for 48 hours"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Endocarditis is treated with a prolonged course of IV antibiotics, typically 4 to 6 weeks or longer, because the organisms are embedded within vegetation where antibiotic penetration is poor. Most patients complete therapy at home through a central catheter, so aseptic catheter care teaching is essential. Heart failure is the most common serious complication and is monitored through pulse, fatigue, cough, and dyspnea, and frequent mental status assessment detects the embolic neurologic events that left-sided vegetations cause. Stopping antibiotics early because the fever resolved is the dangerous option — defervescence does not mean the vegetation is sterilized, and relapse follows incomplete courses."
 },
 {
  "id": "n504e4q22",
  "exam": 4,
  "topic": "Myocarditis",
  "type": "mcq",
  "stem": "A previously healthy 34-year-old presents with dyspnea, palpitations, and chest pain two weeks after a viral illness. Troponin and BNP are elevated, and the echocardiogram shows a reduced ejection fraction with no coronary occlusion on angiography. Which condition is most likely?",
  "options": [
   "Acute pericarditis",
   "ST-elevation myocardial infarction",
   "Myocarditis",
   "Aortic stenosis"
  ],
  "correct": [
   2
  ],
  "rationale": "Myocarditis is inflammation of the myocardium, most commonly viral — enteroviruses, Coxsackie B, adenovirus, HIV, and hepatitis C are named causes, with roughly half of cases idiopathic. It typically follows a viral illness and can mimic a myocardial infarction, which is precisely why the clean coronary angiogram is the decisive finding here. The expected diagnostics match: nonspecific ST changes on ECG, an elevated troponin because the inflamed muscle is being damaged, an elevated BNP, and a decreased ejection fraction on echocardiogram. Pericarditis produces positional pleuritic pain with a friction rub and diffuse ST elevation rather than a depressed ejection fraction, and aortic stenosis is a valve lesion with a characteristic murmur."
 },
 {
  "id": "n504e4q23",
  "exam": 4,
  "topic": "Myocarditis",
  "type": "mcq",
  "stem": "A nurse is teaching about the potential consequences of myocarditis. Which complication should be emphasized?",
  "options": [
   "Development of aortic stenosis within weeks",
   "Progression to cardiomyopathy with heart failure and cardiogenic shock",
   "Immediate resolution without any residual effects in every case",
   "Permanent complete heart block in all patients"
  ],
  "correct": [
   1
  ],
  "rationale": "Myocarditis damages the heart muscle itself, and because the heart is a muscle, sustained damage leads to the dilation and dysfunction of cardiomyopathy. The listed complications are cardiogenic shock, heart failure, cardiomyopathy, and death, which is why treatment includes diuretics, ACE inhibitors, beta-blockers, inotropes such as milrinone and dobutamine, and in severe cases an intra-aortic balloon pump, a left ventricular assist device, or transplant. Aortic stenosis is a valve disorder, not a myocardial one. Complete heart block can occur but not universally, and saying every case resolves without residual effect is contradicted by the frequency with which myocarditis leaves lasting ventricular dysfunction."
 },
 {
  "id": "n504e4q24",
  "exam": 4,
  "topic": "Pericarditis",
  "type": "mcq",
  "stem": "A patient reports sharp substernal chest pain radiating to the left shoulder that worsens with deep inspiration and when lying flat, and improves when sitting up and leaning forward. Which condition does this most strongly suggest?",
  "options": [
   "Stable angina",
   "Aortic dissection",
   "Acute pericarditis",
   "Acute myocardial infarction"
  ],
  "correct": [
   2
  ],
  "rationale": "The positional and respiratory pattern is the signature of pericarditis: substernal precordial pain radiating to the left neck, shoulder, or back, aggravated by breathing, coughing, and swallowing, worse supine, and relieved by sitting up and leaning forward into a tripod position. Myocardial infarction pain is not positional and is not relieved by leaning forward; it is typically unrelieved, lasts over 20 minutes, and comes with diaphoresis and nausea. Aortic dissection produces sudden tearing pain radiating to the back with unequal arm blood pressures. Stable angina is provoked by exertion, relieved by rest or nitroglycerin, and lasts under 15 minutes."
 },
 {
  "id": "n504e4q25",
  "exam": 4,
  "topic": "Pericarditis",
  "type": "sata",
  "stem": "A patient is being evaluated for acute pericarditis. Which findings support this diagnosis? Select all that apply.",
  "options": [
   "A pericardial friction rub at the lower left sternal border",
   "New ST elevation in all ECG leads",
   "A new or worsening pericardial effusion on echocardiogram",
   "Pericardial chest pain",
   "ST elevation confined to leads V1 through V4 only"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The diagnostic criteria require two of the following four: pericardial chest pain, a pericardial friction rub, new ST elevation in all ECG leads or PR-segment depression, and a new or worsening pericardial effusion. The rub is a scratchy, high-pitched sound created as inflamed pericardial layers rub together, heard best at the lower left sternal border, louder on inspiration and with the patient leaning forward, and it is highly specific for acute pericarditis. The last option is the critical discriminator: ST elevation confined to a contiguous group of leads such as V1 through V4 reflects a regional infarct in a single coronary territory, whereas pericarditis inflames the whole sac and elevates ST segments DIFFUSELY."
 },
 {
  "id": "n504e4q26",
  "exam": 4,
  "topic": "Pericarditis",
  "type": "mcq",
  "stem": "A patient with acute pericarditis is receiving ibuprofen for pain. Which additional medication should the nurse anticipate to prevent recurrence?",
  "options": [
   "Amiodarone 200 mg orally daily",
   "Aspirin 325 mg with enoxaparin",
   "Warfarin titrated to an INR of 2 to 3",
   "Colchicine 0.5 mg orally twice daily for three months"
  ],
  "correct": [
   3
  ],
  "rationale": "Colchicine 0.5 mg orally twice a day for three months has been shown to prevent pericarditis recurrence, and it is added to the NSAID therapy used for pain, with corticosteroids reserved for pain unresolved by NSAIDs. Colchicine is more familiar as a gout drug, which is exactly why it is easy to overlook in this context. The anticoagulant options are not merely unhelpful but contraindicated: aspirin and anticoagulants are specifically avoided in pericarditis because the inflamed pericardium can bleed into the sac, converting an effusion into hemorrhagic tamponade. Amiodarone treats dysrhythmias and does not address pericardial inflammation."
 },
 {
  "id": "n504e4q27",
  "exam": 4,
  "topic": "Pericarditis",
  "type": "mcq",
  "stem": "A patient with acute pericarditis has a blood pressure that falls from 118/74 to 92/78 mm Hg, with increasing jugular venous distention and heart sounds that are becoming difficult to hear. Which action should the nurse take?",
  "options": [
   "Notify the provider immediately, as these findings suggest developing cardiac tamponade",
   "Reposition the patient supine and reassess in 30 minutes",
   "Encourage the patient to take slow deep breaths to improve venous return",
   "Administer the scheduled dose of ibuprofen and reassess"
  ],
  "correct": [
   0
  ],
  "rationale": "Pericarditis can progress to pericardial effusion, and if fluid accumulates rapidly it produces cardiac tamponade. The findings here are the classic triad: falling blood pressure, jugular venous distention, and muffled heart sounds, with the narrowing pulse pressure from 44 to 14 mm Hg as a further warning. Monitoring for tamponade is a specific nursing responsibility in pericarditis, and the provider must be notified immediately because the treatment is pericardiocentesis. Lying the patient supine worsens both the pain and the hemodynamics. An NSAID does nothing for mechanical compression, and breathing exercises cannot overcome a heart that cannot fill."
 },
 {
  "id": "n504e4q28",
  "exam": 4,
  "topic": "Cardiac tamponade",
  "type": "mcq",
  "stem": "A trauma patient with rib fractures and a chest contusion suddenly becomes hypotensive with distended neck veins and muffled heart sounds. Which term describes this combination of findings, and what does it indicate?",
  "options": [
   "Cushing's triad, indicating increased intracranial pressure",
   "Beck's triad, indicating cardiac tamponade",
   "Virchow's triad, indicating venous thromboembolism",
   "Charcot's triad, indicating acute cholangitis"
  ],
  "correct": [
   1
  ],
  "rationale": "Beck's triad is hypotension, jugular venous distention, and muffled or decreased heart sounds on auscultation, and together they indicate cardiac tamponade. The mechanism explains each component: blood or fluid filling the pericardial sac compresses the heart so the ventricles cannot fill, cardiac output and blood pressure fall, blood backs up into the jugular veins, and the surrounding fluid dampens the transmitted heart sounds. Chest trauma is a leading cause, alongside penetrating injury, malignancy, idiopathic pericarditis, infection, anticoagulation, connective tissue disease, and post-pericardiotomy syndrome. The other triads are real clinical eponyms for entirely different conditions, which is what makes them plausible distractors."
 },
 {
  "id": "n504e4q29",
  "exam": 4,
  "topic": "Cardiac tamponade",
  "type": "mcq",
  "stem": "A nurse assesses a patient for pulsus paradoxus. Which finding confirms its presence?",
  "options": [
   "A fall in systolic blood pressure of more than 10 mm Hg during inspiration",
   "A pulse that is palpable at the radial site but absent at the pedal site",
   "A systolic blood pressure that rises more than 10 mm Hg when the patient stands",
   "A difference of more than 10 mm Hg in systolic blood pressure between the two arms"
  ],
  "correct": [
   0
  ],
  "rationale": "Pulsus paradoxus is a drop in systolic blood pressure of more than 10 mm Hg during inspiration. In tamponade the pericardial fluid fixes the total volume the heart has to work with, so when inspiration increases right-sided filling, the septum shifts and the left ventricle is squeezed further, and left-sided output falls measurably with each breath. It is a specific and important sign in tamponade and pericarditis. A difference between the two arms suggests aortic dissection, a rise on standing is not pulsus paradoxus, and a difference between radial and pedal pulses reflects peripheral arterial disease or an arterial occlusion."
 },
 {
  "id": "n504e4q30",
  "exam": 4,
  "topic": "Cardiac tamponade",
  "type": "mcq",
  "stem": "A trauma surgeon recognizes Beck's triad in a patient and inserts a needle below the xiphoid process, aspirating 75 mL of unclotted blood. Which explanation should the nurse give the patient's family about this procedure?",
  "options": [
   "\"A needle was used to remove blood that had built up around the heart and was preventing it from filling and pumping.\"",
   "\"A needle was used to remove air that had collapsed the lung.\"",
   "\"A needle was used to inject medication directly into the heart muscle.\"",
   "\"A needle was used to take a biopsy of the heart muscle for testing.\""
  ],
  "correct": [
   0
  ],
  "rationale": "Pericardiocentesis removes the fluid or blood compressing the heart from within the pericardial sac. Even a relatively small volume, if it accumulates quickly, can prevent ventricular filling, and removing it allows the chambers to fill again, so cardiac output and blood pressure improve, often dramatically. A follow-up echocardiogram is completed within 24 hours to check for reaccumulation, and pericardial window or pericardiectomy may be needed for recurrence. Removing air from the pleural space is needle decompression for pneumothorax, and endomyocardial biopsy is a separate diagnostic procedure used chiefly in restrictive cardiomyopathy."
 },
 {
  "id": "n504e4q31",
  "exam": 4,
  "topic": "Cardiac tamponade",
  "type": "sata",
  "stem": "Which nursing interventions are appropriate for a patient with cardiac tamponade? Select all that apply.",
  "options": [
   "Monitor blood pressure closely and maintain hemodynamic monitoring",
   "Anticipate volume expansion with isotonic fluids or blood products",
   "Administer IV furosemide to remove the fluid accumulating around the heart",
   "Administer aspirin and therapeutic anticoagulation to prevent clot formation",
   "Position the patient in reverse Trendelenburg with the legs dependent"
  ],
  "correct": [
   0,
   1
  ],
  "rationale": "Tamponade is a filling problem, so care maximizes whatever venous return the compressed heart can still receive until the fluid is drained: close blood pressure and hemodynamic monitoring, strict intake and output, bedrest with the LEGS ELEVATED to augment venous return, and volume expansion with isotonic saline, blood, plasma, or dextran, with dopamine or dobutamine to support output. All three false options reduce filling or cause bleeding. Furosemide is the most tempting, but the fluid is in the pericardial sac where no diuretic can reach it, and removing intravascular volume would drop preload further. Aspirin and anticoagulation risk converting the effusion into a hemorrhagic tamponade, and leg-dependent positioning reduces venous return."
 },
 {
  "id": "n504e4q32",
  "exam": 4,
  "topic": "Dilated cardiomyopathy",
  "type": "mcq",
  "stem": "A patient with a long history of alcohol use presents with an enlarged left ventricle, an ejection fraction of 24%, an S3 gallop, orthopnea, and peripheral edema. Which type of cardiomyopathy is most consistent with these findings?",
  "options": [
   "Arrhythmogenic right ventricular cardiomyopathy",
   "Hypertrophic cardiomyopathy",
   "Dilated cardiomyopathy",
   "Restrictive cardiomyopathy"
  ],
  "correct": [
   2
  ],
  "rationale": "Dilated cardiomyopathy is the most common form. Cardiac muscle fibers are damaged, the ventricular chamber enlarges while muscle mass stays normal or decreases, and contractility falls — an impairment of SYSTOLIC function that produces the low stroke volume, low cardiac output, and very low ejection fraction seen here. Alcohol abuse is a listed cause, along with chemotherapy, infection, inflammation, and poor nutrition, and the late findings match: left-sided heart failure, orthopnea, peripheral edema, hepatomegaly, JVD, weight gain, and an S3 or S4 gallop. Hypertrophic cardiomyopathy thickens the muscle and impairs DIASTOLIC filling, and restrictive cardiomyopathy stiffens the ventricle and reduces chamber size."
 },
 {
  "id": "n504e4q33",
  "exam": 4,
  "topic": "Hypertrophic cardiomyopathy",
  "type": "mcq",
  "stem": "A 19-year-old collegiate athlete collapses during practice. Evaluation reveals asymmetric septal hypertrophy with disarray of the myocardial fibers, and a family history of sudden death in a young relative. Which statement about this condition is accurate?",
  "options": [
   "It is caused almost entirely by long-standing alcohol use",
   "It primarily impairs diastolic filling and carries a significant risk of sudden cardiac death",
   "It primarily impairs systolic function with a markedly reduced ejection fraction",
   "It is an acquired condition with no genetic component"
  ],
  "correct": [
   1
  ],
  "rationale": "Hypertrophic cardiomyopathy is characterized by asymmetric ventricular hypertrophy and disarray of the myocardial fibers, and approximately half of patients carry a single-gene autosomal-dominant trait — which is why the family history matters and why it is called a hidden disease. The thickened, stiff ventricle fails to relax, so it primarily affects DIASTOLIC function and filling, and the thickened interventricular septum obstructs flow toward the aortic valve. Sudden cardiac death is explicitly listed as common, along with syncope, angina, dyspnea, and ventricular dysrhythmias. Alcohol-related disease and a markedly reduced ejection fraction from systolic failure describe DILATED cardiomyopathy instead."
 },
 {
  "id": "n504e4q34",
  "exam": 4,
  "topic": "Restrictive cardiomyopathy",
  "type": "mcq",
  "stem": "A patient with restrictive cardiomyopathy secondary to amyloidosis is admitted with heart failure. Which medication class should the nurse question if prescribed?",
  "options": [
   "Antiarrhythmics for rhythm control",
   "ACE inhibitors",
   "Loop diuretics",
   "Nitrates and vasodilators"
  ],
  "correct": [
   3
  ],
  "rationale": "Restrictive cardiomyopathy is treated much like dilated cardiomyopathy, with one explicit exception: no nitrates or vasodilators. The stiff, fibrotic ventricle has a reduced chamber size and fills poorly during a slow diastole, so it depends on adequate filling pressure to generate any output at all; a nitrate or vasodilator drops preload and can cause a precipitous fall in cardiac output. Loop diuretics, ACE inhibitors, and antiarrhythmics for rhythm control are all part of the regimen, alongside sodium and fluid restriction, cardiac rehabilitation, pacing, ICD, LVAD, and transplant. Secondary infiltrative causes include amyloidosis, sarcoidosis, hemochromatosis, scleroderma, and iron overload."
 },
 {
  "id": "n504e4q35",
  "exam": 4,
  "topic": "Cardiomyopathy diagnostics",
  "type": "mcq",
  "stem": "Which diagnostic test is most specifically associated with confirming restrictive cardiomyopathy?",
  "options": [
   "Exercise stress test",
   "Holter monitor",
   "Endomyocardial biopsy",
   "Chest x-ray"
  ],
  "correct": [
   2
  ],
  "rationale": "The diagnostic workup for cardiomyopathy includes medical history, echocardiogram, MRI, radionuclide imaging, and cardiac catheterization with angiocardiography, with endomyocardial biopsy specifically associated with restrictive disease. The reason is that restrictive cardiomyopathy is frequently caused by an infiltrative process — amyloidosis, sarcoidosis, hemochromatosis, or iron overload — and a tissue sample identifies the infiltrating substance, which directs treatment toward the underlying cause. A chest x-ray can show cardiomegaly but cannot identify the type or cause, a stress test evaluates ischemia, and a Holter monitor captures rhythm over time rather than myocardial tissue characteristics."
 },
 {
  "id": "n504e4q36",
  "exam": 4,
  "topic": "Cardiomyopathy treatment",
  "type": "sata",
  "stem": "Which treatments may be used for a patient with advanced dilated cardiomyopathy? Select all that apply.",
  "options": [
   "Implantable cardioverter-defibrillator",
   "Left ventricular assist device",
   "Heart transplantation",
   "Sodium and fluid restriction with cardiac rehabilitation",
   "Ventricular myomectomy to remove part of the hypertrophied septum"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Dilated cardiomyopathy is managed with an ICD for the ventricular dysrhythmia risk, an LVAD for mechanical support, transplant as the definitive option, a permanent atrioventricular sequential pacer, implantable monitoring, and medications including vasodilators, antiarrhythmics, ACE inhibitors, loop diuretics, and inotropes, plus lifestyle modification with sodium and fluid restriction and cardiac rehabilitation. Ventricular myomectomy is the exception: removing a portion of the hypertrophied ventricular septum treats HYPERTROPHIC cardiomyopathy, where the thickened septum obstructs outflow. In a dilated ventricle there is no hypertrophied septum to resect, and removing muscle from an already weakened chamber would be harmful."
 },
 {
  "id": "n504e4q37",
  "exam": 4,
  "topic": "Hypertrophic cardiomyopathy",
  "type": "mcq",
  "stem": "A patient with hypertrophic cardiomyopathy is scheduled for percutaneous alcohol septal ablation. Which explanation of this procedure is correct?",
  "options": [
   "The procedure destroys the AV node so a pacemaker can take over",
   "Alcohol dissolves the plaque obstructing the coronary artery",
   "Alcohol is injected to create a small, controlled septal infarct that reduces the thickened septum",
   "Alcohol is used to sterilize the coronary arteries before stent placement"
  ],
  "correct": [
   2
  ],
  "rationale": "Percutaneous alcohol septal ablation deliberately causes a small septal infarct by injecting alcohol into a septal branch artery. Reducing the blood supply to the hypertrophied septum causes that tissue to shrink and inhibits further septal growth, which relieves the outflow obstruction created by the thickened interventricular septum. It is a catheter-based alternative to surgical ventricular myomectomy, and the other treatment options include cardioversion of atrial fibrillation, an AICD, and medications such as carvedilol, verapamil, diuretics, and ACE inhibitors. Destroying the AV node describes AV nodal ablation for refractory atrial fibrillation, and alcohol does not dissolve atherosclerotic plaque."
 },
 {
  "id": "n504e4q38",
  "exam": 4,
  "topic": "Heart failure and EF",
  "type": "mcq",
  "stem": "A patient's echocardiogram reports an ejection fraction of 45%. How should the nurse interpret this value?",
  "options": [
   "Normal; no follow-up is needed",
   "Hyperdynamic; the heart is pumping more forcefully than normal",
   "Reduced; symptoms are expected even at rest",
   "Borderline; symptoms may become noticeable during activity"
  ],
  "correct": [
   3
  ],
  "rationale": "Ejection fraction compares the amount of blood in the ventricle with the amount pumped out, expressing how well the heart is pumping. A normal ejection fraction is roughly 50% to 70%, with patients usually comfortable during activity; borderline is roughly 41% to 49%, where symptoms may become noticeable with activity; and reduced is 40% or below, where symptoms may appear even at rest. At 45% this patient is borderline. It is also worth remembering that heart failure can exist with a preserved ejection fraction of 50% or greater, so a normal-looking number never rules out heart failure on its own."
 },
 {
  "id": "n504e4q39",
  "exam": 4,
  "topic": "Aortic aneurysm",
  "type": "mcq",
  "stem": "A nurse is teaching about how an abdominal aortic aneurysm forms. Which explanation is accurate?",
  "options": [
   "The innermost layer (intima) thickens, narrowing the vessel until it occludes",
   "The vessel develops a clot that blocks flow and causes the artery to collapse inward",
   "The middle layer (media) weakens, stretching the intima and adventitia; as the artery widens, wall tension rises and further widening occurs",
   "The adventitia constricts, squeezing the vessel to less than half its normal diameter"
  ],
  "correct": [
   2
  ],
  "rationale": "An aneurysm is a permanent localized dilation of an artery to at least twice its normal diameter. It forms when the media, the smooth muscle layer that gives arteries their strength and regulates pressure, is weakened — most often by atherosclerosis, chronic hypertension, or smoking — which stretches the intima and adventitia. The process is self-perpetuating: as the artery widens, wall tension increases, and the increased tension drives further widening, so larger aneurysms carry greater rupture risk. Thrombi also form within the wall from pooling blood. The distractors describe narrowing and occlusion, which is the opposite of the dilation that defines an aneurysm."
 },
 {
  "id": "n504e4q40",
  "exam": 4,
  "topic": "Aneurysm risk factors",
  "type": "sata",
  "stem": "Which are modifiable risk factors for the development and enlargement of an aortic aneurysm? Select all that apply.",
  "options": [
   "Hypertension",
   "Smoking",
   "Hyperlipidemia",
   "Male sex",
   "Marfan syndrome"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "The modifiable risk factors are hypertension, which specifically increases the rate of enlargement and the risk of early rupture, atherosclerosis, hyperlipidemia, and nicotine use. Each is a target for teaching and pharmacologic management, which is why beta-blockers are first-line for blood pressure control, statins are used for lipids, and smoking cessation with nicotine replacement is emphasized. The non-modifiable factors are age in the 50s and 60s, male sex, family history, and connective tissue disorders such as Marfan syndrome. Sex and Marfan syndrome are the two false options here: both raise risk and both mean surveillance starts earlier and runs more aggressively, but neither can be changed."
 },
 {
  "id": "n504e4q41",
  "exam": 4,
  "topic": "Aneurysm management",
  "type": "mcq",
  "stem": "A 68-year-old man is found to have an asymptomatic 4.2 cm abdominal aortic aneurysm on imaging done for another reason. Which management approach should the nurse anticipate?",
  "options": [
   "No follow-up, since the aneurysm is asymptomatic",
   "Immediate endovascular repair regardless of size",
   "Surveillance imaging at intervals with blood pressure control, statins, and smoking cessation",
   "Emergency surgical repair within 24 hours"
  ],
  "correct": [
   2
  ],
  "rationale": "Size and symptoms determine management. An asymptomatic aneurysm under 5 cm is managed non-surgically with surveillance by ultrasound or CT at set intervals, good blood pressure control with beta-blockers or angiotensin II receptor blockers, statins for lipid control, and smoking cessation with nicotine replacement, progressing to elective surgery if it enlarges or becomes symptomatic. Surgical criteria are greater than 5 cm in women and greater than 5.5 cm in men, or symptoms at any size. Emergency repair is for rupture. Doing nothing is the dangerous option, because most aneurysms remain asymptomatic until they rupture, and surveillance is precisely what prevents that."
 },
 {
  "id": "n504e4q42",
  "exam": 4,
  "topic": "Aneurysm rupture",
  "type": "mcq",
  "stem": "A patient with a known abdominal aortic aneurysm suddenly develops excruciating tearing lower back and abdominal pain, a blood pressure of 78/40 mm Hg, diaphoresis, and decreasing level of consciousness. Which action is the priority?",
  "options": [
   "Obtain a scheduled surveillance ultrasound",
   "Establish two large-bore IVs and prepare the patient for emergent surgery",
   "Place the patient in a high Fowler's position and reassess in 15 minutes",
   "Administer oral antihypertensives to reduce wall stress"
  ],
  "correct": [
   1
  ],
  "rationale": "Sudden excruciating tearing abdominal or back pain with hypotension and a falling level of consciousness in a patient with a known aneurysm is rupture until proven otherwise, and it produces hypovolemic shock. The emergent interventions are two large-bore IVs for rapid fluid replacement and blood transfusion, a Foley with a urometer for close output monitoring, morphine for pain, beta-blockers and fluids to maintain a MAP above 60 while controlling heart rate, vasoconstrictors as needed, and immediate preparation for surgery. Only about 40% of patients with rupture survive to receive intervention, so delay for elective imaging, oral medication, or repositioning is fatal."
 },
 {
  "id": "n504e4q43",
  "exam": 4,
  "topic": "Aortic dissection",
  "type": "mcq",
  "stem": "A 64-year-old man reports sudden severe chest pain radiating to his back that he describes as ripping. The nurse notes a blood pressure of 188/96 mm Hg in the right arm and 142/74 mm Hg in the left. Which condition should the nurse suspect?",
  "options": [
   "Acute pericarditis",
   "Pulmonary embolism",
   "Acute aortic dissection",
   "Stable angina"
  ],
  "correct": [
   2
  ],
  "rationale": "Aortic dissection occurs when the intima tears and blood accumulates between the layers of the aortic wall, and it is a medical emergency. The presentation is distinctive: sudden severe ripping or tearing chest or upper back pain radiating to the neck or down the back, often with a feeling of impending doom, loss of consciousness, and shortness of breath. The blood pressure difference between arms is the clue to look for, because the dissection reduces flow distal to the tear so the pressures no longer match. Pericarditis produces positional pain relieved by leaning forward, stable angina is exertional and brief, and pulmonary embolism produces pleuritic pain and dyspnea without unequal arm pressures."
 },
 {
  "id": "n504e4q44",
  "exam": 4,
  "topic": "Open aneurysm repair",
  "type": "sata",
  "stem": "Which complications should the nurse monitor for after open surgical repair of an abdominal aortic aneurysm with a graft? Select all that apply.",
  "options": [
   "Bleeding",
   "Paralysis from disrupted blood flow to the spinal cord",
   "Renal impairment",
   "Dysrhythmias and stroke",
   "Immediate discharge readiness within 24 hours"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Open repair is major surgery with a high mortality rate and a long recovery. The recognized complications are bleeding, paralysis from disrupted spinal cord perfusion during aortic cross-clamping, loss of limb, dysrhythmias, infection, renal impairment because the renal arteries branch near the repair, pneumonia, and stroke. The last option is not a complication but is factually wrong in a way that matters clinically: open repair requires a hospital stay of roughly 8 to 10 days with a 2 to 3 month recovery, and postoperative care resembles that after CABG, with early ambulation, incentive spirometry, a cough pillow, and hemodynamic monitoring."
 },
 {
  "id": "n504e4q45",
  "exam": 4,
  "topic": "EVAR",
  "type": "mcq",
  "stem": "A patient has undergone endovascular aneurysm repair (EVAR) through a femoral approach. Which postoperative care most accurately reflects this procedure?",
  "options": [
   "Care similar to that after PCI or angiogram, with femoral site monitoring, the limb kept straight, and bed rest",
   "A hospital stay of 8 to 10 days with a 2 to 3 month recovery",
   "Sternal precautions with splinting during coughing",
   "No monitoring of the insertion site, since the repair is internal"
  ],
  "correct": [
   0
  ],
  "rationale": "EVAR is the minimally invasive alternative to open repair: catheters and wires are advanced through the femoral artery, contrast is injected to visualize the aneurysm, and the stent graft is positioned under CT or x-ray guidance. Because the access is a femoral arterial puncture, postoperative care mirrors that after PCI or angiography — monitor the femoral site for bleeding, keep the limb straight, and maintain bed rest. The hospital stay is only 1 to 2 days with about 4 weeks of recovery, which is why the second option describes open repair instead. Sternal precautions belong to cardiac surgery, and the femoral site must always be assessed after any percutaneous procedure."
 },
 {
  "id": "n504e4q46",
  "exam": 4,
  "topic": "Aneurysm post-op assessment",
  "type": "sata",
  "stem": "Which assessments are priorities after aortic aneurysm repair? Select all that apply.",
  "options": [
   "Blood pressure, including comparison between extremities",
   "Pulses in all extremities",
   "Urine output and renal function",
   "Neurologic status, including movement and sensation in the lower extremities",
   "Daily weights as the primary indicator of graft patency"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Postoperative assessment targets the specific complications of aortic surgery. Blood pressure matters in both directions: hypotension with tachycardia may indicate hypovolemia from blood loss, while hypertension and tachycardia raise wall stress and can enlarge, dissect, or rupture a repair, and a difference between extremities suggests dissection. Pulses in all limbs detect distal embolism or graft occlusion. Urine output tracks renal perfusion, since the renal arteries lie near the repair. Neurologic assessment of the lower extremities detects spinal cord ischemia causing paralysis. Daily weights are useful for fluid status but do not indicate graft patency, which is what makes that option incorrect."
 },
 {
  "id": "n504e4q47",
  "exam": 4,
  "topic": "Aneurysm discharge teaching",
  "type": "sata",
  "stem": "Which discharge instructions should the nurse include for a patient recovering from aortic aneurysm repair? Select all that apply.",
  "options": [
   "Adhere to prescribed antihypertensive medications",
   "Attend lifelong follow-up imaging with ultrasound or CT",
   "Observe restrictions on driving, lifting, and stair use during recovery",
   "Stop smoking and adopt moderate physical activity and a healthy diet",
   "Discontinue the beta-blocker once the incision has healed"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Discharge planning after aneurysm repair includes case management, skilled care or visiting nurse support, cardiac rehabilitation, activity limits on driving, lifting, and stair use with practical adaptations such as moving the bed to the first floor, wound care, anticoagulants, blood pressure management, and lifestyle change including smoking cessation, moderate activity, and a healthy diet, plus follow-up care and lifelong monitoring by ultrasound or CT. The beta-blocker option is the one to reject: blood pressure control is a permanent requirement, because hypertension increases the rate of enlargement and the risk of rupture at any remaining or future aneurysmal segment."
 },
 {
  "id": "n504e4q48",
  "exam": 4,
  "topic": "Aneurysm assessment",
  "type": "mcq",
  "stem": "During an abdominal assessment the nurse palpates a pulsating mass near the umbilicus and auscultates a systolic bruit over the upper abdomen. Which action should the nurse take?",
  "options": [
   "Palpate the mass deeply and repeatedly to determine its exact size",
   "Stop palpating, report the finding to the provider, and anticipate imaging",
   "Apply firm pressure over the mass to reduce the pulsation",
   "Reassure the patient that a pulsating abdominal mass is a normal finding in older adults"
  ],
  "correct": [
   1
  ],
  "rationale": "A pulsating abdominal mass with a systolic bruit or thrill over the aorta is the classic physical finding of an abdominal aortic aneurysm. The correct response is to stop palpating, report the finding, and anticipate imaging — deep or repeated palpation of a known or suspected aneurysm risks precipitating rupture and is specifically avoided, which makes the first option not merely unhelpful but dangerous. Applying firm pressure carries the same risk. Reassuring the patient that this is normal is false: most aneurysms are found incidentally and remain asymptomatic, and any new back, abdominal, or flank pain in such a patient warrants imaging as soon as possible."
 },
 {
  "id": "n504e4q49",
  "exam": 4,
  "topic": "Valve disorders overview",
  "type": "mcq",
  "stem": "A patient asks the nurse to explain the difference between valve stenosis and valve regurgitation. Which response is accurate?",
  "options": [
   "\"Stenosis means the valve has narrowed and obstructs forward flow; regurgitation means the valve does not close fully and blood leaks backward.\"",
   "\"Stenosis means the valve leaks backward; regurgitation means the valve has narrowed.\"",
   "\"Both terms describe the same problem, just at different valves.\"",
   "\"Stenosis affects only the aortic valve and regurgitation affects only the mitral valve.\""
  ],
  "correct": [
   0
  ],
  "rationale": "Stenosis is narrowing: the valve stiffens and its opening shrinks, obstructing forward flow and forcing the chamber behind it to generate higher pressure. Regurgitation is incompetent closure: the valve does not seal, so blood leaks backward into the chamber it just left, which volume-overloads that chamber. The second option reverses the definitions, which is the most common confusion. The two are distinct problems that can affect any valve, and either can occur at the aortic, mitral, tricuspid, or pulmonic valve — so restricting each term to a single valve is incorrect, even though aortic and mitral lesions are the most common."
 },
 {
  "id": "n504e4q50",
  "exam": 4,
  "topic": "Post-valve surgery",
  "type": "sata",
  "stem": "Which instructions apply to a patient recovering at home after open heart valve surgery? Select all that apply.",
  "options": [
   "Use an incentive spirometer every hour while awake",
   "Splint the sternal incision with a small pillow when coughing or laughing",
   "Scrub the incision vigorously with hydrogen peroxide twice daily",
   "Resume lifting objects up to 25 pounds as soon as you are discharged",
   "Avoid all coughing and deep breathing to protect the sternal incision"
  ],
  "correct": [
   0,
   1
  ],
  "rationale": "After valve surgery the respiratory teaching is central to preventing atelectasis and pneumonia: use the incentive spirometer every hour while awake, turn, cough, and deep breathe every 2 hours, and splint the incision with a small pillow when coughing or laughing so that doing so is tolerable. All three false options cause harm. The incision is washed gently with soap and water, not scrubbed with hydrogen peroxide, which damages healing tissue. Lifting, pushing, or pulling is limited to about 5 pounds until the surgeon approves, because the sternum must knit. And avoiding coughing and deep breathing entirely would produce the very pulmonary complications the splinting exists to prevent."
 }
 ]
};
