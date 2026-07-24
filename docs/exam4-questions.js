/* ============================================================================
   Paediatrics Practice - Exam 4 Question Bank (Toddler -> Adolescent)
   300 NCLEX/HESI-style questions across six 50-question exams:
     1 Toddler | 2 Preschool | 3 School-Age | 4 Adolescent
     5 Cumulative (all ages, SATA-rich) | 6 Growth & Development (all ages)

   Built from the NUR 404 Toddler, Preschool, School-Age, and Adolescent
   lecture PowerPoints (slides + speaker notes) and the assigned textbook
   readings, via the consolidated Toddler-through-Adolescent study guide.
   Multiple choice (4 options, 1 correct) and SATA (5 options, 2-4 correct);
   every item carries a rationale that also explains the best distractor.

   Question object: { id, exam(1-6), topic, type("mcq"|"sata"), stem,
                      options[], correct[idx], rationale }
   ========================================================================== */
window.EXAM4_DATA = {
  meta: {"title": "Paediatrics Practice - Exam 4 (Toddler through Adolescent)", "total": 300, "exams": 6, "examTitles": {"1": "Toddler (1-3 years)", "2": "Preschool (3-5 years)", "3": "School-Age (6-12 years)", "4": "Adolescent (12-18 years)", "5": "Cumulative - All Ages", "6": "Growth & Development - All Ages"}},
  questions: [
 {
  "id": "x4e1q01",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "A nurse is teaching the parents of a 2-year-old about supporting their child's psychosocial stage of autonomy versus shame and doubt. Which parenting approach should the nurse recommend?",
  "options": [
   "Offer the child simple choices, such as which of two shirts to wear",
   "Complete all self-care tasks for the child to prevent frustration",
   "Encourage cooperative group play with other toddlers",
   "Set no limits so the child can freely explore independence"
  ],
  "correct": [
   0
  ],
  "rationale": "Autonomy develops when caregivers balance independence with consistently sound limits; offering a limited choice such as which shirt to wear lets the toddler exercise control safely (p.826). Doing all self-care for the child fosters shame and doubt by denying independence. Cooperative group play is a preschool skill (toddlers engage in parallel play), and although independence must be encouraged, setting no limits leaves the toddler feeling insecure because a healthy sense of autonomy still requires firm, consistent rules."
 },
 {
  "id": "x4e1q02",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "A parent is exasperated that their 2-year-old answers \"No!\" to every request. Which strategy should the nurse recommend to reduce this negativism?",
  "options": [
   "Firmly tell the child to stop saying \"no\"",
   "Answer the child's own questions by also saying \"No\"",
   "Reduce the number of questions asked and make statements instead",
   "Explain to the child that saying \"no\" is poor communication"
  ],
  "correct": [
   2
  ],
  "rationale": "Negativism is a normal expression of developing autonomy; a toddler's \"no\" is best reduced by limiting the number of questions and making a statement instead, such as \"It is bath time now\" (p.833-834). Telling the child to stop or explaining that it is poor communication both exceed a toddler's cognitive level and simply invite more resistance. In contrast, answering the child with \"No\" models the very behavior the parent wants to reduce."
 },
 {
  "id": "x4e1q03",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "At a 24-month well-child visit, which language finding would the nurse expect of a normally developing toddler?",
  "options": [
   "Speaks in three-word sentences that are about 75% intelligible",
   "Has a vocabulary of about 10 words",
   "Names one color and states full name",
   "Uses two-word phrases such as \"Daddy go\""
  ],
  "correct": [
   3
  ],
  "rationale": "By 2 years a toddler should form two-word sentences that combine a noun or pronoun with a verb (\"Daddy go\"), with a 200-300 word vocabulary and about 50% intelligible speech; a 2-year-old who does not speak in two-word phrases needs careful assessment (p.826). Three-word sentences at 75% intelligibility and naming a color/stating a full name are 30-month-to-3-year milestones, so they exceed this age. A 10-word vocabulary is expected around 15-18 months and would signal a delay at age 2."
 },
 {
  "id": "x4e1q04",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "The nurse observes toddlers in a hospital playroom. Which behavior is characteristic of the play typical for this age group?",
  "options": [
   "Two toddlers building a single block tower together",
   "A toddler playing beside another child with a similar toy but not with them",
   "A group of children acting out a pretend house scenario",
   "Toddlers taking turns following the rules of a simple game"
  ],
  "correct": [
   1
  ],
  "rationale": "Toddlers engage in parallel play, playing beside (not with) another child, often with a similar toy (p.827). Building a shared structure together and dramatic pretend group play are associative/cooperative play seen in preschoolers, and games with rules belong to the school-age child. Expecting a toddler to share or cooperate exceeds their developmental level, so those choices would be inappropriate expectations."
 },
 {
  "id": "x4e1q05",
  "exam": 1,
  "topic": "Toilet Training",
  "type": "sata",
  "stem": "A parent asks how to know whether their 2-year-old is ready for toilet training. Which signs of readiness should the nurse include when teaching? Select all that apply.",
  "options": [
   "The child can walk well independently",
   "The child stays dry for about 2 hours and dislikes wet diapers",
   "The child can retreat and communicate the need to void",
   "The child is at least 22 months old regardless of other signs",
   "The child can descend stairs using alternating feet"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Readiness requires physiologic sphincter control (achieved after the child walks well), the cognitive ability to understand and communicate the urge, and behavioral signs the child is bothered by wet diapers, so walking, staying dry/disliking wet diapers, and communicating the need are all correct (p.832-833). Age alone is not a criterion because readiness is individualized rather than schedule-driven; and descending stairs with alternating feet is a 3-year gross-motor milestone unrelated to toileting readiness."
 },
 {
  "id": "x4e1q06",
  "exam": 1,
  "topic": "Temper Tantrums",
  "type": "mcq",
  "stem": "A hospitalized toddler throws a temper tantrum in the hallway, kicking and screaming on the floor. What is the most appropriate nursing action?",
  "options": [
   "Pick the child up and rock them until calm",
   "Firmly tell the child the behavior is unacceptable",
   "Ensure the child is safe and ignore the tantrum",
   "Offer the child a favorite snack to stop the behavior"
  ],
  "correct": [
   2
  ],
  "rationale": "The best approach to a tantrum is to keep the child safe and simply ignore the behavior; children left alone this way usually stop within 1-2 minutes, after which the nurse proceeds warmly as if it had not occurred (p.835-837). Picking the child up or offering a snack rewards and reinforces tantrums, and firmly reprimanding a mid-tantrum toddler is ineffective because the child cannot process it. The child should be moved or held only if there is danger of injury."
 },
 {
  "id": "x4e1q07",
  "exam": 1,
  "topic": "Toddler Nutrition",
  "type": "mcq",
  "stem": "A parent is worried that their 18-month-old eats much less than during infancy and insists on self-feeding. Which response by the nurse is most appropriate?",
  "options": [
   "\"This decreased appetite is normal; offer small portions and let the child self-feed\"",
   "\"Encourage your child to finish all of the food on the plate\"",
   "\"Return to bottle-feeding to ensure adequate calorie intake\"",
   "\"Restrict fats and sugars now to prevent later obesity\""
  ],
  "correct": [
   0
  ],
  "rationale": "Growth slows after infancy, so a physiologic decrease in appetite is expected; the nurse should reassure the parent, offer small portions (about 1 tablespoon of each food per year of age), and allow self-feeding to support autonomy because an independent toddler may refuse to eat if fed (p.831). Forcing the child to clean the plate creates mealtime power struggles, and returning to the bottle undermines development. Fat should NOT be restricted before age 2, so that advice is inappropriate for an 18-month-old."
 },
 {
  "id": "x4e1q08",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "A hospitalized 2-year-old insists on using the same cup and hearing the same bedtime story each night. How should the nurse interpret this behavior?",
  "options": [
   "An obsessive-compulsive tendency requiring referral",
   "Regression caused by the stress of hospitalization",
   "Normal ritualism that provides the toddler a sense of security",
   "Evidence of inadequate parental limit-setting"
  ],
  "correct": [
   2
  ],
  "rationale": "Ritualism, wanting the same cup, blanket, or routine, is normal toddler behavior that provides security and a sense of control, and maintaining rituals during hospitalization is therapeutic (p.833). It is not pathologic compulsion or poor parenting. Regression is the LOSS of a previously achieved skill, whereas ritualism is a maintained pattern rather than a loss, though a child needing an excessive number of rituals may require more guidance."
 },
 {
  "id": "x4e1q09",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "The parent of a tired 2-year-old who walks well asks whether it is harmful that the child still wants to be rocked and carried. Which is the nurse's best response?",
  "options": [
   "\"Wanting to be carried when tired is a natural state and not regression\"",
   "\"This is regression and signals emotional insecurity\"",
   "\"You should stop carrying the child to promote independence\"",
   "\"This behavior indicates the child is developmentally delayed\""
  ],
  "correct": [
   0
  ],
  "rationale": "When tired, toddlers may want to sit on a lap and be rocked or carried; this does NOT signal regression, as it is a natural state between infancy and preschool age (p.832). Labeling it regression, insecurity, or delay misreads normal behavior, and refusing to comfort the child ignores a genuine need for security while independence is still fostered in other areas."
 },
 {
  "id": "x4e1q10",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "sata",
  "stem": "The nurse is assessing the physical appearance of a healthy 2-year-old. Which findings are expected and normal for this age? Select all that apply.",
  "options": [
   "A protruding \"pot-belly\" abdomen from weak abdominal muscles",
   "A pronounced lumbar curve (lordosis) with a wide-based gait",
   "Chest circumference smaller than head circumference",
   "Chest circumference greater than head circumference",
   "An anterior fontanel that is widely open and bulging"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Normal toddler body contour includes a prominent abdomen from immature abdominal muscles, physiologic lordosis with a wide-based waddling gait, and by age 2 a chest circumference that has grown larger than the head (p.824-825). A chest smaller than the head is normal only in infancy, and the anterior fontanel is normally CLOSED by about 18 months, so a widely open, bulging fontanel is abnormal rather than an expected finding."
 },
 {
  "id": "x4e1q11",
  "exam": 1,
  "topic": "Separation Anxiety",
  "type": "mcq",
  "stem": "A hospitalized toddler cries inconsolably whenever the parent must leave for a few hours. What should the nurse teach the parent about departures?",
  "options": [
   "\"Slip out quietly while your child is distracted to avoid tears\"",
   "\"Say goodbye firmly, tell the child you will return, and then leave\"",
   "\"Stay only if you can remain for the entire hospitalization\"",
   "\"Avoid all visits until your child adjusts to the unit\""
  ],
  "correct": [
   1
  ],
  "rationale": "The toddler's chief fear is separation from parents; parents should say goodbye firmly, repeat that they will return, and then leave, because prolonged goodbyes worsen crying (p.835). Sneaking out prevents crying in the moment but strengthens the child's fear of abandonment and should be discouraged. Avoiding visits deepens separation distress, and demanding an all-or-nothing stay is unrealistic; honest, consistent departures serve the child best."
 },
 {
  "id": "x4e1q12",
  "exam": 1,
  "topic": "Discipline",
  "type": "mcq",
  "stem": "A parent asks how long a 2-year-old should sit in \"time-out\" for misbehavior. What is the nurse's best response?",
  "options": [
   "\"Time-out should last about 10 minutes for any age\"",
   "\"Use time-out only after your child reaches school age\"",
   "\"Have the child sit until they say they are sorry\"",
   "\"The child should sit about 1 minute per year of age, so about 2 minutes\""
  ],
  "correct": [
   3
  ],
  "rationale": "A general guide for time-out is 1 minute per year of age, so a 2-year-old sits for about 2 minutes, and the timed period begins only once the child is quiet (p.834). Ten minutes far exceeds a toddler's tolerance, and time-out is appropriate during the toddler years rather than delayed to school age. Requiring an apology demands a level of reasoning the toddler does not yet possess."
 },
 {
  "id": "x4e1q13",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "A nurse describes an 18- to 24-month-old as a \"little scientist\" who now imitates a parent's action hours after seeing it. This behavior reflects which cognitive achievement?",
  "options": [
   "Conservation of matter",
   "Object permanence being newly established",
   "Deferred imitation and emerging symbolic thought",
   "Abstract, hypothetical reasoning"
  ],
  "correct": [
   2
  ],
  "rationale": "In the late sensorimotor/early preoperational period, toddlers develop deferred imitation (remembering and imitating an action later) and begin symbolic, preoperational thought (p.827). Object permanence is established earlier in infancy and is essentially complete by this age, so it is not the newly emerging skill described. Conservation is a concrete-operational school-age skill, and abstract reasoning is formal-operational (adolescent), both far beyond the toddler."
 },
 {
  "id": "x4e1q14",
  "exam": 1,
  "topic": "Car Seat Safety",
  "type": "mcq",
  "stem": "The parent of a healthy 15-month-old asks when the child may face forward in the car. What is the nurse's best guidance?",
  "options": [
   "\"You can turn the seat forward now that the child is over 1 year old\"",
   "\"Keep the child rear-facing until at least age 2 or the seat's maximum height and weight\"",
   "\"Move directly to a booster seat with the vehicle lap belt\"",
   "\"Forward-facing is fine once the child weighs 20 pounds\""
  ],
  "correct": [
   1
  ],
  "rationale": "Toddlers should ride rear-facing until at least age 2, or until they reach the maximum height and weight for the seat, and always in the back seat (p.829). Turning the seat forward at 1 year or 20 pounds is premature and unsafe. A booster seat is not appropriate until the preschool/school-age years, after the child outgrows a forward-facing five-point harness, so it skips a critical protective step."
 },
 {
  "id": "x4e1q15",
  "exam": 1,
  "topic": "Aspiration/Choking",
  "type": "sata",
  "stem": "The nurse teaches parents about foods and objects that pose a choking or aspiration risk to their toddler. Which items should the nurse instruct them to keep away from the child? Select all that apply.",
  "options": [
   "Whole grapes and hot dog pieces",
   "Popcorn and peanuts",
   "Small button batteries and magnets",
   "Mashed potatoes",
   "Un-inflated or broken latex balloons"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Whole grapes, hot dogs, popcorn, nuts, small batteries/magnets, and un-inflated or broken latex balloons are all high-risk for airway obstruction and must be kept away from toddlers (p.830, Box 30.3). Mashed potatoes are a soft, low-risk food and are safe, making it the one item that does not belong on the list. Toddlers explore by mouth and have limited judgment, so supervision and food modification are essential."
 },
 {
  "id": "x4e1q16",
  "exam": 1,
  "topic": "Drowning",
  "type": "mcq",
  "stem": "Which teaching point about drowning prevention is most important for the nurse to emphasize to the parents of a toddler?",
  "options": [
   "\"Toddlers only drown in swimming pools, so simply fence the pool\"",
   "\"Flotation wings make constant supervision unnecessary\"",
   "\"A toddler who has had swim lessons no longer needs supervision near water\"",
   "\"A toddler can drown in only an inch or two of water, including toilets and buckets\""
  ],
  "correct": [
   3
  ],
  "rationale": "Toddlers can drown in only 1-2 inches of water, in toilets, buckets of cleaning water, bathtubs, and shallow water, so constant supervision is the priority (p.1496-1497; Box 30.3). Focusing only on pools ignores common household hazards. Flotation devices and swim lessons are helpful adjuncts but never replace direct adult supervision, so relying on them alone is unsafe."
 },
 {
  "id": "x4e1q17",
  "exam": 1,
  "topic": "Injury Prevention",
  "type": "sata",
  "stem": "The nurse reviews unintentional-injury prevention with the parents of a newly walking toddler. Which measures should the nurse include? Select all that apply.",
  "options": [
   "Place safety gates at the top and bottom of stairs",
   "Turn pot handles toward the back of the stove",
   "Set the home water heater to 120°F or below",
   "Store medications in the parent's purse for quick access",
   "Cover electrical outlets with safety plugs"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Gating stairs, turning pot handles inward, setting the water heater to 120°F or below, and capping electrical outlets are all recommended toddler safety measures (Box 30.3, p.830). Keeping medication in a purse is unsafe because drugs must be stored in locked cabinets or on high, out-of-reach shelves, never in a purse or pocket where a curious toddler can reach them. Injury prevention must be constant during the toddler years."
 },
 {
  "id": "x4e1q18",
  "exam": 1,
  "topic": "Burns",
  "type": "mcq",
  "stem": "A toddler is seen after a minor scald burn from hot tap water. In addition to first aid, which prevention teaching is the nurse's priority?",
  "options": [
   "\"Use a steam vaporizer in the child's room for congestion\"",
   "\"Set your home water heater to 120°F or lower\"",
   "\"Apply butter to any future burn to soothe it\"",
   "\"Bathe your toddler in the kitchen sink to save water\""
  ],
  "correct": [
   1
  ],
  "rationale": "Setting the water heater to 120°F or below prevents tap-water scald burns, the most common burn in toddlers (Box 30.3, p.830). A steam vaporizer actually increases burn risk, so a cool-mist type is recommended instead. Butter is never applied to a burn; cool water is the correct initial action. Because scalds may signal maltreatment, every scald is also assessed, but lowering the water temperature is the key prevention priority here."
 },
 {
  "id": "x4e1q19",
  "exam": 1,
  "topic": "Poisoning",
  "type": "mcq",
  "stem": "A parent calls the clinic stating their alert 2-year-old just swallowed an unknown amount of liquid drain cleaner. What should the nurse instruct the parent to do first?",
  "options": [
   "\"Call the National Poison Control Center at 1-800-222-1222\"",
   "\"Give syrup of ipecac to induce vomiting\"",
   "\"Give activated charcoal mixed in juice right away\"",
   "\"Offer large amounts of milk to dilute the poison\""
  ],
  "correct": [
   0
  ],
  "rationale": "The first action for any suspected poisoning is to call Poison Control (1-800-222-1222) to guide management (p.1497-1498). Inducing vomiting is contraindicated, especially with a caustic like drain cleaner, because it re-exposes the esophagus to the corrosive agent. Activated charcoal is ineffective for caustics and obscures endoscopic visualization, so it is not given, and dilution is not the priority and should follow expert direction."
 },
 {
  "id": "x4e1q20",
  "exam": 1,
  "topic": "Lead Poisoning",
  "type": "sata",
  "stem": "The nurse counsels the family of a toddler who lives in a home built in 1955. Which statements about lead poisoning and screening are accurate to include? Select all that apply.",
  "options": [
   "\"Your child should have a blood lead level checked at ages 1 and 2 years\"",
   "\"Peeling paint, dust, and older lead water pipes are common sources\"",
   "\"A blood lead level as low as 5 µg/dL can cause learning and behavior problems\"",
   "\"Lead poisoning is quickly and fully reversible with treatment\"",
   "\"Wet-mopping floors and washing the child's hands and toys reduce exposure\""
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Lead screening is recommended at 1 and 2 years, especially in older (pre-1978, highest-risk pre-1950) housing; sources include lead paint and dust and old pipes; levels as low as 5 µg/dL harm IQ, learning, and behavior; and hand/toy washing plus wet-mopping cut exposure (p.1500-1501; p.829). The statement that lead poisoning is fully reversible is false, because its neurologic effects are largely IRREVERSIBLE, which is exactly why prevention and screening are emphasized."
 },
 {
  "id": "x4e1q21",
  "exam": 1,
  "topic": "Acetaminophen Poisoning",
  "type": "mcq",
  "stem": "A toddler is admitted several hours after ingesting a bottle of chewable acetaminophen. The nurse anticipates administering which antidote?",
  "options": [
   "Deferoxamine",
   "Acetylcysteine",
   "Naloxone",
   "Activated charcoal as the definitive treatment"
  ],
  "correct": [
   1
  ],
  "rationale": "The specific antidote for acetaminophen toxicity is acetylcysteine, which binds the toxic breakdown product and protects the liver (p.1498). Deferoxamine is the chelator for iron poisoning, and naloxone reverses opioids, so neither fits acetaminophen. Activated charcoal may be used early but is not the definitive treatment once hours have passed; acetylcysteine is needed to prevent hepatotoxicity, so charcoal alone is insufficient."
 },
 {
  "id": "x4e1q22",
  "exam": 1,
  "topic": "Iron Poisoning",
  "type": "mcq",
  "stem": "A 2-year-old swallowed a large number of the mother's prenatal iron tablets. Which statement about management is correct?",
  "options": [
   "\"Activated charcoal will effectively bind the iron\"",
   "\"Iron overdose in a toddler is rarely dangerous\"",
   "\"Inducing vomiting with ipecac is the treatment of choice\"",
   "\"Deferoxamine chelation may be given, and it turns the urine orange\""
  ],
  "correct": [
   3
  ],
  "rationale": "Iron poisoning is treated with deferoxamine chelation for toxic doses; the drug binds iron and characteristically turns the urine orange (p.1499-1500). Activated charcoal does NOT bind iron and is ineffective, a classic tested exception. Iron overdose can be fatal in small children, and routine induced vomiting is not the treatment of choice; gastric lavage and chelation are used instead."
 },
 {
  "id": "x4e1q23",
  "exam": 1,
  "topic": "Caustic Ingestion",
  "type": "sata",
  "stem": "A toddler has ingested a lye-based drain cleaner and is drooling with white patches in the mouth. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Assess and protect the airway as the top priority",
   "Induce vomiting immediately to remove the lye",
   "Administer activated charcoal to bind the caustic",
   "Keep the child NPO and prepare for IV fluids and analgesia",
   "Anticipate that an NG tube will not be inserted at this time"
  ],
  "correct": [
   0,
   3,
   4
  ],
  "rationale": "Caustic (alkali) ingestion is an emergency in which protecting the airway is the priority, the child is kept NPO with IV fluids and pain control (IV morphine/PPI), and an NG tube is contraindicated because it can perforate injured tissue (p.1499). Inducing vomiting re-burns the esophagus, and activated charcoal is ineffective for caustics and obscures endoscopic visualization, so both are contraindicated."
 },
 {
  "id": "x4e1q24",
  "exam": 1,
  "topic": "Fifth Disease",
  "type": "mcq",
  "stem": "A child with sickle cell disease is exposed to a classmate who has fifth disease (erythema infectiosum). Why is the nurse most concerned about this exposure?",
  "options": [
   "Parvovirus B19 can trigger an aplastic crisis in a child with sickle cell disease",
   "The child will develop a permanent facial rash",
   "Fifth disease commonly causes coronary artery aneurysms",
   "The \"slapped-cheek\" rash means the child is now highly contagious"
  ],
  "correct": [
   0
  ],
  "rationale": "Fifth disease is caused by parvovirus B19, which suppresses red-cell production and can precipitate a dangerous aplastic crisis in a child with sickle cell disease; it also endangers pregnant contacts (p.1222-1223; p.1260-1264). Coronary aneurysms are a feature of Kawasaki disease, not fifth disease, and the rash is cosmetic and not permanent. Importantly, once the slapped-cheek rash appears the child is NO longer contagious, so that statement is the reverse of the truth."
 },
 {
  "id": "x4e1q25",
  "exam": 1,
  "topic": "Pinworm",
  "type": "mcq",
  "stem": "A parent reports their toddler has intense anal itching that worsens at night and disrupts sleep. Which diagnostic method should the nurse teach the parent to perform?",
  "options": [
   "Collect a stool sample after the child's evening bath",
   "Swab the child's throat for culture",
   "Bring a first-morning clean-catch urine sample",
   "Apply clear cellophane tape to the perianal skin early in the morning before toileting"
  ],
  "correct": [
   3
  ],
  "rationale": "Pinworm (enterobiasis) is diagnosed with the cellophane (clear) tape test applied to the perianal skin in the early morning before the child bathes or toilets, capturing eggs the female worm deposits overnight (p.1240). A stool sample after bathing is likely to miss the eggs, which are on the perianal skin rather than in stool, and bathing first removes them. Throat and urine samples are unrelated to pinworm diagnosis."
 },
 {
  "id": "x4e1q26",
  "exam": 1,
  "topic": "Otitis Media",
  "type": "sata",
  "stem": "The nurse teaches the parents of a toddler with recurrent acute otitis media. Which instructions are appropriate? Select all that apply.",
  "options": [
   "\"Give acetaminophen or ibuprofen for ear pain and fever\"",
   "\"Feed your child upright rather than lying down with a bottle\"",
   "\"Avoid exposing your child to tobacco smoke\"",
   "\"Give an over-the-counter decongestant to your 18-month-old\"",
   "\"Report if there is no improvement in 24 to 48 hours or if pain increases\""
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Analgesics/antipyretics for pain, upright feeding, avoiding tobacco smoke, and reporting no improvement within 24-48 hours (risk of tympanic-membrane rupture) are all appropriate (p.1446-1448). Giving an OTC decongestant to a child under 2 is NOT recommended and should be avoided, making it the instruction to exclude. Upright feeding and smoke avoidance reduce the middle-ear inflammation driven by the short, horizontal eustachian tube of young children."
 },
 {
  "id": "x4e1q27",
  "exam": 1,
  "topic": "Hepatitis A",
  "type": "mcq",
  "stem": "A toddler in a daycare center is diagnosed with hepatitis A. Which statement by the nurse about this infection is accurate?",
  "options": [
   "\"Hepatitis A spreads by the fecal-oral route, often via daycare changing tables\"",
   "\"Hepatitis A is transmitted mainly through blood transfusions\"",
   "\"A strict low-fat diet is required for full recovery\"",
   "\"The hepatitis A vaccine is not given until age 6\""
  ],
  "correct": [
   0
  ],
  "rationale": "Hepatitis A is a picornavirus spread by the fecal-oral route through contaminated food/water and daycare changing tables, and it is most communicable in the 2 weeks before symptoms (p.1287-1288). It is not primarily blood-borne, and a low-fat diet is not required, although good caloric intake is encouraged. The HAV vaccine is actually recommended for all children 12-23 months, with doses at 12 and 18 months, so waiting until age 6 is incorrect."
 },
 {
  "id": "x4e1q28",
  "exam": 1,
  "topic": "Croup",
  "type": "mcq",
  "stem": "A 2-year-old is brought to the emergency department with a barking cough, inspiratory stridor, and low-grade fever that worsened during the night. Which nursing action is the priority?",
  "options": [
   "Use a tongue blade to inspect the posterior pharynx",
   "Keep the child calm and provide humidified oxygen",
   "Obtain a throat culture to identify the organism",
   "Encourage the child to cry to help open the airway"
  ],
  "correct": [
   1
  ],
  "rationale": "Croup (laryngotracheobronchitis) is managed by keeping the child calm (crying worsens stridor) and providing humidified oxygen, with dexamethasone and nebulized racemic epinephrine as ordered (p.1115-1116). A tongue blade or throat culture can trigger laryngospasm and are avoided because the gag reflex should NOT be elicited. Encouraging crying increases airway turbulence and distress, worsening the stridor."
 },
 {
  "id": "x4e1q29",
  "exam": 1,
  "topic": "Epiglottitis",
  "type": "sata",
  "stem": "A 3-year-old presents with sudden high fever, drooling, dysphagia, and a hyperextended tripod position with a muffled voice. Which actions should the nurse take? Select all that apply.",
  "options": [
   "Keep the child calm and in an upright position",
   "Examine the throat with a tongue depressor to view the epiglottis",
   "Ensure intubation and tracheostomy equipment are immediately available",
   "Do not leave the child unattended",
   "Prepare to administer IV antibiotics"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "rationale": "Epiglottitis is an airway emergency: keep the child calm and upright, never leave them alone, have intubation/tracheostomy equipment ready, and anticipate IV antibiotics (p.1117). Examining the throat with a tongue blade is contraindicated because it can trigger laryngospasm and complete airway obstruction unless an artificial airway is immediately available. Drooling, dysphagia, and tripod positioning are red-flag findings distinguishing epiglottitis from croup."
 },
 {
  "id": "x4e1q30",
  "exam": 1,
  "topic": "Foreign-Body Aspiration",
  "type": "mcq",
  "stem": "A previously well 2-year-old suddenly began coughing and choking while eating peanuts and now has wheezing. Which finding best distinguishes an aspirated foreign body from an asthma attack?",
  "options": [
   "Diffuse bilateral wheezing throughout both lung fields",
   "Gradual onset of symptoms over several days",
   "A barking, seal-like cough",
   "Localized unilateral wheezing over one lung"
  ],
  "correct": [
   3
  ],
  "rationale": "An aspirated foreign body typically lodges in the right main bronchus and produces sudden choking with localized, unilateral wheezing, unlike the diffuse bilateral wheeze of asthma (p.1117). The onset is abrupt rather than gradual, and a barking cough is characteristic of croup, not aspiration. The sudden onset while eating peanuts strongly supports aspiration."
 },
 {
  "id": "x4e1q31",
  "exam": 1,
  "topic": "Pneumothorax",
  "type": "mcq",
  "stem": "A child is being assessed for a suspected pneumothorax after chest trauma. Which set of findings would the nurse expect on the affected side?",
  "options": [
   "Increased breath sounds and dullness to percussion",
   "Absent breath sounds with the trachea shifting toward the affected side",
   "Decreased or absent breath sounds, hyperresonance, and the trachea shifting away from the affected side",
   "Bilateral crackles with a productive cough"
  ],
  "correct": [
   2
  ],
  "rationale": "In a pneumothorax, air in the pleural space collapses the lung, producing decreased or absent breath sounds and hyperresonance on the affected side, with the trachea and apical pulse shifting AWAY from that side (p.1124). Dullness with increased breath sounds suggests consolidation rather than air, and a shift toward the affected side reverses the expected mediastinal shift. Bilateral crackles describe a different process such as pneumonia."
 },
 {
  "id": "x4e1q32",
  "exam": 1,
  "topic": "Epistaxis",
  "type": "mcq",
  "stem": "A toddler develops a nosebleed while at the clinic. Which action should the nurse take first?",
  "options": [
   "Tilt the child's head backward and pinch the bridge of the nose",
   "Lay the child flat and apply an ice pack to the forehead",
   "Have the child sit up and lean slightly forward while pinching the soft cartilage",
   "Pack both nostrils tightly with tissue"
  ],
  "correct": [
   2
  ],
  "rationale": "For epistaxis, sit the child upright with the head tilted slightly FORWARD and apply pressure to the cartilage on the sides of the nose for about 10 minutes while keeping the child calm (p.1114). Tilting the head back or lying flat lets blood run down the throat and can cause aspiration or vomiting, and packing tissue in the nose is discouraged. Because crying worsens bleeding, keeping the child calm is essential."
 },
 {
  "id": "x4e1q33",
  "exam": 1,
  "topic": "Kawasaki Disease",
  "type": "mcq",
  "stem": "A 2-year-old has had fever for 6 days along with bilateral nonexudative conjunctivitis, a strawberry tongue, cracked lips, a polymorphous rash, and swollen red hands. The nurse recognizes these findings as most consistent with which condition?",
  "options": [
   "Scarlet fever",
   "Kawasaki disease",
   "Fifth disease",
   "Rheumatic fever"
  ],
  "correct": [
   1
  ],
  "rationale": "Fever of at least 5 days plus four of the criteria (bilateral nonexudative conjunctivitis, oral/lip changes with strawberry tongue, polymorphous rash, hand/foot changes, cervical lymphadenopathy) defines Kawasaki disease, which can cause coronary artery aneurysms (p.1168-1169). Scarlet fever also produces a strawberry tongue and rash but shows a sandpaper rash with a positive strep test and lacks the conjunctivitis and extremity changes. Fifth disease causes a slapped-cheek rash, and rheumatic fever follows strep with carditis and migratory arthritis."
 },
 {
  "id": "x4e1q34",
  "exam": 1,
  "topic": "Kawasaki Disease",
  "type": "sata",
  "stem": "A toddler is receiving IV immune globulin (IVIG) and high-dose aspirin for Kawasaki disease. Which nursing actions and teaching points are appropriate? Select all that apply.",
  "options": [
   "Monitor for signs of bleeding while the child is on aspirin",
   "Delay live vaccines such as MMR and varicella after IVIG",
   "Assess cardiac status and monitor for an IVIG infusion reaction",
   "Add scheduled ibuprofen instead of acetaminophen for fever",
   "Report increasing irritability or signs of cardiac involvement"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Kawasaki care includes watching for bleeding and Reye syndrome while on aspirin, delaying live vaccines after IVIG, monitoring cardiac status and for an IVIG reaction, and reporting irritability or cardiac symptoms (p.1168-1169). Substituting scheduled ibuprofen is not the taught plan, because acetaminophen is the adjunct antipyretic used and the child is already on high-dose aspirin (a rare but appropriate pediatric use)."
 },
 {
  "id": "x4e1q35",
  "exam": 1,
  "topic": "Sickle Cell Disease",
  "type": "mcq",
  "stem": "A toddler is admitted in a vaso-occlusive sickle cell crisis. Which three priorities should guide the nurse's plan of care?",
  "options": [
   "Restrict fluids, apply cold packs, and encourage activity",
   "Give iron supplementation, restrict fluids, and enforce bed rest only",
   "Administer IV potassium immediately, apply cooling, and ambulate",
   "Provide pain relief, hydration, and oxygenation"
  ],
  "correct": [
   3
  ],
  "rationale": "The three priorities in a sickle cell crisis are pain relief, hydration, and oxygenation (p.1260-1264). Fluid restriction and cold worsen sickling because cold causes vasoconstriction and dehydration promotes sickling, and iron is NOT given in sickle cell disease. IV potassium must be withheld until the child voids and kidney function is confirmed, so giving it immediately is unsafe."
 },
 {
  "id": "x4e1q36",
  "exam": 1,
  "topic": "Sickle Cell Disease",
  "type": "sata",
  "stem": "The nurse provides discharge teaching to the parents of a toddler with sickle cell disease. Which instructions are appropriate? Select all that apply.",
  "options": [
   "Keep immunizations current and give prophylactic penicillin",
   "Encourage generous fluid intake to prevent dehydration",
   "Give a daily iron supplement to prevent anemia",
   "Avoid high altitudes and unpressurized aircraft",
   "Report fever promptly because of infection risk"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "rationale": "Children with sickle cell disease need current immunizations, prophylactic penicillin, generous hydration, avoidance of high altitude and unpressurized flight, and prompt reporting of fever (p.1260-1264). Iron supplementation is NOT given because the anemia is hemolytic rather than iron-deficiency, so folic acid and hydroxyurea are used instead. Dehydration, hypoxia, and infection are key crisis triggers to prevent."
 },
 {
  "id": "x4e1q37",
  "exam": 1,
  "topic": "Dehydration",
  "type": "sata",
  "stem": "The nurse assesses a toddler with several days of vomiting and diarrhea for dehydration. Which findings support a diagnosis of dehydration? Select all that apply.",
  "options": [
   "Decreased urine output",
   "Dry mucous membranes",
   "Poor skin turgor",
   "Bounding pulses with elevated blood pressure",
   "Brisk capillary refill of less than 1 second"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Dehydration produces decreased urine output, dry mucous membranes, poor skin turgor, weight loss, and (in a young toddler with an open fontanel) a sunken fontanel (p.1277-1283). Bounding pulses with high blood pressure is the opposite pattern, because dehydration causes tachycardia and, with severe loss, hypotension. Capillary refill is prolonged rather than brisk, so those two findings argue against dehydration."
 },
 {
  "id": "x4e1q38",
  "exam": 1,
  "topic": "Gastroenteritis",
  "type": "mcq",
  "stem": "A 2-year-old has acute viral gastroenteritis with mild dehydration. Which intervention should the nurse expect to implement?",
  "options": [
   "Begin the BRAT diet (bananas, rice, applesauce, toast)",
   "Provide oral rehydration solution such as Pedialyte",
   "Administer a routine antibiotic to shorten the illness",
   "Give an antidiarrheal medication around the clock"
  ],
  "correct": [
   1
  ],
  "rationale": "Mild-to-moderate dehydration from viral gastroenteritis is treated with oral rehydration solution such as Pedialyte (p.1283). The BRAT diet is no longer recommended because it is low in energy and protein. Routine antibiotics are not given for acute viral diarrhea, and antidiarrheal or antiemetic drugs are used rarely in young children; contact precautions and hand hygiene are also indicated."
 },
 {
  "id": "x4e1q39",
  "exam": 1,
  "topic": "Fluid & Acid-Base",
  "type": "mcq",
  "stem": "A toddler with several days of profuse diarrhea has an arterial pH of 7.30 and a bicarbonate of 18 mEq/L. The nurse identifies the acid-base imbalance and knows that potassium replacement should be given when?",
  "options": [
   "Metabolic alkalosis; give potassium immediately",
   "Respiratory acidosis; give potassium before the child voids",
   "Metabolic acidosis; potassium is contraindicated in all children",
   "Metabolic acidosis; give potassium only after the child has voided"
  ],
  "correct": [
   3
  ],
  "rationale": "Prolonged diarrhea causes loss of bicarbonate and metabolic acidosis (pH below 7.35, HCO3 below 22), and potassium is given ONLY after the child voids, confirming adequate kidney function, to avoid dangerous hyperkalemia (p.1277-1283). Vomiting, not diarrhea, causes metabolic alkalosis, and this is a metabolic rather than respiratory disturbance. Potassium is not universally contraindicated; it is simply withheld until urine output is established."
 },
 {
  "id": "x4e1q40",
  "exam": 1,
  "topic": "Fluid & Acid-Base",
  "type": "mcq",
  "stem": "A toddler has been vomiting persistently for 2 days. Which acid-base and electrolyte disturbance should the nurse anticipate?",
  "options": [
   "Metabolic acidosis with hyperkalemia",
   "Respiratory alkalosis with hypernatremia",
   "Metabolic alkalosis with hypokalemia",
   "Respiratory acidosis with hypercalcemia"
  ],
  "correct": [
   2
  ],
  "rationale": "Vomiting loses gastric hydrochloric acid, producing metabolic alkalosis (pH above 7.45, HCO3 above 28) with hypokalemia (p.1277-1283). Metabolic acidosis with hyperkalemia results from diarrhea, the opposite mechanism. The disturbance is metabolic rather than respiratory, so the respiratory choices misidentify both the process and the associated electrolyte change."
 },
 {
  "id": "x4e1q41",
  "exam": 1,
  "topic": "Nephrotic Syndrome",
  "type": "mcq",
  "stem": "A 3-year-old with nephrotic syndrome is to receive IV albumin followed by IV furosemide. What is the rationale for giving the albumin before the diuretic?",
  "options": [
   "Albumin prevents the diuretic from lowering the blood glucose",
   "The diuretic chemically inactivates albumin if given first",
   "Albumin is given first to raise the child's potassium level",
   "Albumin pulls fluid into the vascular space so the diuretic can then remove it, preventing fluid overload"
  ],
  "correct": [
   3
  ],
  "rationale": "In nephrotic syndrome, IV albumin draws interstitial edema fluid back into the vascular space; giving the diuretic afterward then removes that mobilized fluid and helps prevent fluid overload and heart failure (p.1325-1328). The sequence has nothing to do with blood glucose or potassium, and the diuretic does not chemically inactivate albumin. The four hallmarks (proteinuria, edema, hypoalbuminemia, hyperlipidemia) drive this therapy."
 },
 {
  "id": "x4e1q42",
  "exam": 1,
  "topic": "Hypospadias",
  "type": "mcq",
  "stem": "A newborn boy is diagnosed with hypospadias, and surgical repair is planned around age 3 to 4. Which instruction is most important for the nurse to give the parents before discharge?",
  "options": [
   "\"Your infant must not be circumcised\"",
   "\"Circumcision will be performed before you leave the hospital\"",
   "\"The condition will resolve on its own without surgery\"",
   "\"Toilet training should be delayed until after age 5\""
  ],
  "correct": [
   0
  ],
  "rationale": "In hypospadias the infant must NOT be circumcised because the foreskin is often needed to reconstruct the urethra during surgical repair (p.1317-1318). Circumcising the infant would remove tissue essential to the repair. The defect does not self-resolve; it requires surgery, typically before school age, and toilet-training timing is unrelated to this priority teaching."
 },
 {
  "id": "x4e1q43",
  "exam": 1,
  "topic": "VCUG/Reflux",
  "type": "mcq",
  "stem": "A toddler with a history of urinary tract infections is scheduled for a voiding cystourethrogram (VCUG). Which nursing consideration is most important?",
  "options": [
   "The VCUG should be performed during an active UTI for the best imaging",
   "Verify the child has no iodine allergy before the contrast dye is instilled",
   "Restrict all fluids for 24 hours after the procedure",
   "Reassure the parents that no bladder catheterization is needed"
  ],
  "correct": [
   1
  ],
  "rationale": "A VCUG uses iodine-based contrast dye, so the nurse must verify the child has no iodine allergy before it is instilled (p.1311). The study should NOT be done during an active UTI because instrumentation can push infected urine upward and cause pyelonephritis. Fluids are ENCOURAGED afterward, not restricted, to dilute urine and ease the first (possibly painful) void, and the procedure does require bladder catheterization."
 },
 {
  "id": "x4e1q44",
  "exam": 1,
  "topic": "Contact Dermatitis",
  "type": "mcq",
  "stem": "A toddler develops an erythematous, intensely pruritic vesicular rash localized to where a nickel snap contacted the skin. Which intervention should the nurse teach the parents first?",
  "options": [
   "Apply a thick layer of petroleum jelly over the rash",
   "Begin oral antibiotics to treat the infection",
   "Identify and remove or avoid the offending allergen",
   "Expose the area to direct sunlight several hours daily"
  ],
  "correct": [
   2
  ],
  "rationale": "Contact dermatitis is a type IV delayed hypersensitivity reaction, so the first and most important step is to identify and remove or avoid the offending allergen (here, nickel), followed by cool wet compresses (water, saline, or Burow's solution) and soothing lotions (p.1204-1205). Antibiotics are not indicated because this is an allergic, not bacterial, process, and neither petroleum jelly nor sun exposure is a recommended treatment or addresses the cause."
 },
 {
  "id": "x4e1q45",
  "exam": 1,
  "topic": "Immunizations",
  "type": "sata",
  "stem": "The nurse reviews the immunization record of a healthy 15-month-old. Which vaccines are recommended during the 12- to 18-month period? Select all that apply.",
  "options": [
   "MMR (measles, mumps, rubella)",
   "Varicella",
   "Hepatitis A",
   "HPV (human papillomavirus)",
   "DTaP (fourth dose)"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "During the 12- to 18-month period, toddlers receive MMR (12-15 mo), varicella (12-15 mo), hepatitis A (12 and 18 mo), and the 4th DTaP (~15 mo), along with Hib, PCV, and IPV (p.828, Table 30.3). HPV is NOT a toddler vaccine; it is first given at the 11-12-year preadolescent visit. MMR and varicella are live vaccines, which must be delayed if the child recently received IVIG."
 },
 {
  "id": "x4e1q46",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "mcq",
  "stem": "Parents ask the nurse about television and screen time for their 18-month-old. Which recommendation is most appropriate?",
  "options": [
   "\"Let the child watch television alone in their room to build independence\"",
   "\"Screen time is fine at any amount as long as the programs are educational\"",
   "\"Limit screen time and allow viewing only when a parent is present to supervise; interaction promotes language better than TV\"",
   "\"Television is the most effective way to build your toddler's vocabulary\""
  ],
  "correct": [
   2
  ],
  "rationale": "The AAP recommends limiting screen time for children under about 18-24 months; toddlers learn language best through parent-child interaction rather than television, and any viewing should be supervised by a present parent (p.826-829). Watching alone and relying on TV to teach vocabulary are discouraged because toddlers learn minimally from television, as they cannot easily discern how the images relate to real actions."
 },
 {
  "id": "x4e1q47",
  "exam": 1,
  "topic": "Poisoning",
  "type": "mcq",
  "stem": "A toddler who ingested several adult analgesic tablets is alert in the emergency department, and the nurse prepares activated charcoal. Which statement about activated charcoal is accurate?",
  "options": [
   "\"It is safe to give even if the child becomes unresponsive\"",
   "\"It effectively neutralizes iron and caustic ingestions\"",
   "\"It should be forced through an NG tube during a seizure\"",
   "\"It is given to conscious patients and will turn the stools black\""
  ],
  "correct": [
   3
  ],
  "rationale": "Activated charcoal is given only to CONSCIOUS patients because of aspiration risk, and it characteristically turns the stools black (p.1497-1498). It must not be given to an unresponsive or actively seizing child without airway protection. It is also ineffective for iron and caustic ingestions, two classic exceptions, so it would not be used for those poisons."
 },
 {
  "id": "x4e1q48",
  "exam": 1,
  "topic": "Temper Tantrums",
  "type": "sata",
  "stem": "A parent reports their 2-year-old has frequent temper tantrums, mostly at bedtime and mealtime. Which teaching points about preventing and managing tantrums should the nurse include? Select all that apply.",
  "options": [
   "Consider an earlier bedtime or an afternoon nap if tantrums cluster when the child is tired",
   "Avoid asking the child to perform tasks beyond their developmental ability",
   "Give the child a desired treat during the tantrum to end it quickly",
   "Limit the number of choices offered if the child is overwhelmed by decisions",
   "Model calm behavior rather than shouting back when the child is upset"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "rationale": "Tantrums often stem from fatigue, unrealistic demands, difficulty making choices, and imitating adult reactions, so scheduling rest, matching tasks to ability, limiting choices, and modeling calm are all effective (p.835-836, Box 30.7). Giving a bribe during a tantrum is rarely effective and actually reinforces tantrums because the behavior is rewarded; determining the cause is the first step to prevention."
 },
 {
  "id": "x4e1q49",
  "exam": 1,
  "topic": "Nephrotic Syndrome",
  "type": "sata",
  "stem": "A nurse is assessing a 3-year-old newly diagnosed with minimal-change nephrotic syndrome. Which findings are consistent with this disorder? Select all that apply.",
  "options": [
   "Periorbital edema that is worse on waking",
   "Frothy, protein-containing urine",
   "Gross tea-colored (bloody) urine as the primary finding",
   "Weight gain from fluid retention",
   "Hypoalbuminemia"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "rationale": "Nephrotic syndrome is defined by massive proteinuria, hypoalbuminemia, edema (insidious periorbital edema worse on waking), and hyperlipidemia, with weight gain from fluid retention (p.1325-1328). Gross tea-colored hematuria as the primary sign points instead to acute glomerulonephritis; nephrotic syndrome shows only minimal hematuria, and protein loss dominates the clinical picture."
 },
 {
  "id": "x4e1q50",
  "exam": 1,
  "topic": "Toddler G&D",
  "type": "sata",
  "stem": "The nurse assesses a 3-year-old at a well-child visit. Which findings are expected developmental milestones for a typical 3-year-old? Select all that apply.",
  "options": [
   "Rides a tricycle",
   "Speaks in three-word sentences that are about 75% intelligible",
   "Knows their own name, gender, and age",
   "Ties their own shoelaces independently",
   "Reads simple printed words"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "A typical 3-year-old rides a tricycle, uses three-word sentences that are about 75% intelligible, and knows their name, gender, and age (p.826; slides). Tying shoelaces is a 5-to-6-year school-readiness skill, and reading simple words is a school-age achievement, so both exceed toddler capabilities and would be inappropriate expectations for this age."
 },
 {
  "id": "x4e2q01",
  "exam": 2,
  "topic": "G&D - Erikson initiative vs guilt",
  "type": "mcq",
  "stem": "A hospitalized 4-year-old insists on putting on the hospital gown and pouring water without help. Which nursing action best supports the psychosocial task of this developmental stage?",
  "options": [
   "Allow the child to attempt these self-care tasks and praise the effort",
   "Quickly dress the child to conserve energy for healing",
   "Explain that nurses must perform these tasks in the hospital",
   "Have the parent complete all self-care so the child can rest"
  ],
  "correct": [
   0
  ],
  "rationale": "Preschoolers are in Erikson initiative vs. guilt; letting the child attempt tasks within ability and praising effort builds initiative and mastery (slides). Doing everything for the ill child (options 2 and 4) is tempting because the child 'needs rest,' but it fosters guilt and doubt and undermines the developmental task; rest needs can be met without stripping the child's independence."
 },
 {
  "id": "x4e2q02",
  "exam": 2,
  "topic": "G&D - magical thinking",
  "type": "mcq",
  "stem": "A 5-year-old scheduled for surgery tells the nurse, I have to get an operation because I was bad. Which response is most therapeutic?",
  "options": [
   "You are right that you need to try to behave better",
   "Your operation is not a punishment; it is to fix a part of your body and is not because of anything you did",
   "The doctors will not hurt you if you are good",
   "Do not be silly, operations are not punishments"
  ],
  "correct": [
   1
  ],
  "rationale": "Preschool magical thinking and the guilt stage make children view illness or procedures as punishment; the nurse should reassure the child they are not to blame (p.844-845; slides). Option 4 is factually true (it is not a punishment) but is dismissive and belittling rather than therapeutic, and option 3 reinforces the punishment linkage."
 },
 {
  "id": "x4e2q03",
  "exam": 2,
  "topic": "G&D - preoperational cognition",
  "type": "sata",
  "stem": "Which characteristics are typical of a preschooler's cognitive and social development? Select all that apply.",
  "options": [
   "May have imaginary playmates",
   "Believes that inanimate objects have lifelike feelings",
   "Understands that a ball of clay flattened into a pancake still contains the same amount",
   "Engages in associative and dramatic pretend play",
   "Uses abstract reasoning to solve hypothetical problems"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Imaginary playmates, animism (objects have lifelike qualities), and associative/dramatic play are hallmark preschool traits (p.844-845; slides 7-8). Conservation of mass (option 3) is a tempting choice but belongs to the concrete-operational school-age child, and abstract/hypothetical reasoning (option 5) is formal-operational adolescent thought."
 },
 {
  "id": "x4e2q04",
  "exam": 2,
  "topic": "G&D - animism",
  "type": "mcq",
  "stem": "A preschooler scolds the IV pole, saying, Bad pole, you hurt me! The nurse recognizes this behavior as an example of which preoperational characteristic?",
  "options": [
   "Egocentrism",
   "Centration",
   "Animism",
   "Conservation"
  ],
  "correct": [
   2
  ],
  "rationale": "Animism is attributing lifelike qualities and intent to inanimate objects (slides 8). Egocentrism (option 1) is the tempting distractor because it is another preoperational trait, but it refers to seeing only one's own viewpoint; the specific belief that the pole can act and feel is animism."
 },
 {
  "id": "x4e2q05",
  "exam": 2,
  "topic": "G&D - centration/conservation",
  "type": "mcq",
  "stem": "A nurse pours a preschooler's juice from a short, wide cup into a tall, thin cup, and the child cries that a sibling got more. How should the nurse interpret this reaction?",
  "options": [
   "The child is being manipulative to get attention",
   "The child understands the reversibility of volume",
   "The child has a visual perception problem needing referral",
   "The child lacks conservation and focuses on only one dimension, the height of the cup"
  ],
  "correct": [
   3
  ],
  "rationale": "The preoperational child lacks conservation and shows centration, focusing on a single dimension (height) rather than realizing the volume is unchanged (p.845). Option 3 is tempting as a possible abnormality, but this is normal cognition, not a perceptual deficit; option 2 is the opposite of the child's actual (immature) reasoning."
 },
 {
  "id": "x4e2q06",
  "exam": 2,
  "topic": "G&D - play",
  "type": "mcq",
  "stem": "Which play behavior is most characteristic of a healthy 4-year-old?",
  "options": [
   "Several children play house together, assigning roles and sharing toys without rigid rules",
   "Two children build separate block towers side by side without interacting",
   "Several children follow the formal rules of a board game to determine a winner",
   "The child plays alone and ignores the other children who are present"
  ],
  "correct": [
   0
  ],
  "rationale": "Associative and dramatic pretend play peaks in the preschool years (slides 2-3). Parallel play with no interaction (option 2) is characteristic of toddlers, and rule-bound cooperative games to win (option 3) are typical of the school-age child."
 },
 {
  "id": "x4e2q07",
  "exam": 2,
  "topic": "G&D - language",
  "type": "sata",
  "stem": "Which language findings would the nurse expect when assessing a healthy 5-year-old? Select all that apply.",
  "options": [
   "Speech is nearly 100 percent intelligible to strangers",
   "Has a vocabulary of about 2,100 words",
   "Frequently asks why",
   "Has a vocabulary of about 21,000 words",
   "Speaks only in two-word phrases"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "By age 5 speech is about 100 percent intelligible, vocabulary is roughly 2,100 words, and the child constantly asks why (slides 3, 5-6). A 21,000-word vocabulary (option 4) is grossly excessive and is a classic distractor, and two-word phrases (option 5) are toddler-level language."
 },
 {
  "id": "x4e2q08",
  "exam": 2,
  "topic": "Procedures - fear of mutilation",
  "type": "mcq",
  "stem": "Immediately after a venipuncture on a 4-year-old, which nursing action best addresses this age group's characteristic fear?",
  "options": [
   "Explain that the venipuncture will not be repeated",
   "Apply an adhesive bandage over the puncture site",
   "Show the child the amount of blood that was collected",
   "Give a detailed explanation of how blood cells work"
  ],
  "correct": [
   1
  ],
  "rationale": "Preschoolers fear body mutilation and worry their insides will leak out, so an adhesive bandage reassures them the opening is sealed (p.852; study guide). Showing the collected blood (option 3) is tempting as honesty but would heighten the mutilation fear, and option 4 is above the child's cognitive level."
 },
 {
  "id": "x4e2q09",
  "exam": 2,
  "topic": "G&D - imaginary friends",
  "type": "mcq",
  "stem": "A parent is worried because their 4-year-old has an imaginary friend named Bella whom the child blames for messes. What is the nurse's best response?",
  "options": [
   "This may be a hallucination that needs evaluation",
   "You should discourage the friend so your child faces reality",
   "Imaginary friends are a normal, healthy part of preschool development",
   "You should punish your child for blaming the imaginary friend"
  ],
  "correct": [
   2
  ],
  "rationale": "Imaginary playmates are a normal, healthy expression of preschool fantasy and magical thinking (slide 2 notes). Option 1 is tempting because blaming a friend seems like lying or a disturbance, but it pathologizes normal behavior; discouraging or punishing (options 2 and 4) is unnecessary and unhelpful."
 },
 {
  "id": "x4e2q10",
  "exam": 2,
  "topic": "G&D - preconventional morality",
  "type": "mcq",
  "stem": "According to Kohlberg, a preschooler most often decides to share toys or behave well for which reason?",
  "options": [
   "They understand fairness as an abstract ethical principle",
   "They wish to uphold society's laws and maintain order",
   "They have internalized universal ethical principles",
   "They want to gain a reward or avoid punishment out of self-interest"
  ],
  "correct": [
   3
  ],
  "rationale": "Preschoolers are at Kohlberg's preconventional level, doing good out of self-interest to gain rewards or avoid punishment (slide 7 notes). Option 1 is tempting because older preschoolers begin to grasp fairness, but that emerging sense is not yet the abstract driver; options 2 and 3 describe the conventional and postconventional levels seen in older children and adults."
 },
 {
  "id": "x4e2q11",
  "exam": 2,
  "topic": "G&D - physical growth",
  "type": "mcq",
  "stem": "Which statement about normal preschool growth should the nurse include when teaching parents?",
  "options": [
   "Your child's legs grow more in length than the trunk, so the potbelly disappears and the body becomes more slender and erect",
   "The rate of physical growth speeds up during these years",
   "Muscle and bone development are fully mature by age 5",
   "Your child will keep the toddler potbelly appearance throughout these years"
  ],
  "correct": [
   0
  ],
  "rationale": "During the preschool years growth slows and steadies while the legs lengthen relative to the trunk, so the body becomes slender, sturdy, and posturally erect and the potbelly resolves (slide 6). Option 4 is the tempting distractor (the potbelly is a real toddler feature) but it does not persist; growth does not accelerate (option 2) and muscle/bone remain immature (option 3)."
 },
 {
  "id": "x4e2q12",
  "exam": 2,
  "topic": "G&D - genu valgum",
  "type": "mcq",
  "stem": "A parent is concerned that their 4-year-old appears knock-kneed when standing. What is the nurse's best response?",
  "options": [
   "This needs orthopedic bracing right away",
   "Knock-knees (genu valgum) are a normal finding at this age related to skeletal growth",
   "This is a sign of rickets from poor nutrition",
   "Your child should limit walking to prevent it from worsening"
  ],
  "correct": [
   1
  ],
  "rationale": "Genu valgum (knock-knees) is a normal preschool finding related to increased skeletal growth (slide 5). Rickets (option 3) is the tempting distractor because it can cause leg deformity, but there is no indication of it here; bracing or restricting walking (options 1 and 4) is unnecessary for this normal developmental variant."
 },
 {
  "id": "x4e2q13",
  "exam": 2,
  "topic": "G&D - sleep",
  "type": "mcq",
  "stem": "Which anticipatory guidance about sleep is appropriate for the parent of a preschooler?",
  "options": [
   "Preschoolers need about 8 hours of sleep with frequent daytime naps",
   "Nightmares mean the child should sleep in the parents' bed permanently",
   "Provide a consistent bedtime routine, a night light, and a favorite toy; about 12 hours of sleep a day is average",
   "Remove all comfort objects to promote independence"
  ],
  "correct": [
   2
  ],
  "rationale": "Preschoolers average about 12 hours of sleep a day with infrequent naps and benefit from a bedtime routine, a night light (fear of the dark), and a favorite toy (slide 9). Option 1 states the wrong amount, and removing comfort objects (option 4) is counterproductive at an age when transitional objects ease the fear of the dark."
 },
 {
  "id": "x4e2q14",
  "exam": 2,
  "topic": "G&D - nutrition",
  "type": "mcq",
  "stem": "A parent reports that their 4-year-old is a picky eater who refuses many foods. Which guidance is most appropriate?",
  "options": [
   "Insist that the child finish all the food on the plate at each meal",
   "Allow candy snacks so that the child eats at least something",
   "Blend the child's vegetables into a bottle of milk",
   "Offer small portions of nutritious foods and let the child choose; appetite normally varies at this age"
  ],
  "correct": [
   3
  ],
  "rationale": "Finicky eating is normal in preschoolers; offering small portions and letting the child make choices supports initiative while meeting nutritional needs (G&D). Forcing the child to clean the plate (option 1) creates power struggles, and candy or bottle-feeding vegetables (options 2 and 3) are nutritionally poor and developmentally inappropriate."
 },
 {
  "id": "x4e2q15",
  "exam": 2,
  "topic": "Pain assessment - FACES",
  "type": "mcq",
  "stem": "Which pain assessment tool is most appropriate for a cooperative 4-year-old to self-report pain?",
  "options": [
   "FACES (faces) pain rating scale",
   "Numeric rating scale of 0 to 10",
   "Visual analog scale",
   "Verbal descriptor scale"
  ],
  "correct": [
   0
  ],
  "rationale": "Preschoolers begin to understand the FACES scale, which uses cartoon faces the child can point to (slides 10-11). The numeric scale (option 2) is the tempting distractor but requires number concepts beyond most preschoolers; the visual analog and verbal descriptor scales likewise demand abstract or reading skills the child does not yet have."
 },
 {
  "id": "x4e2q16",
  "exam": 2,
  "topic": "Procedures - EMLA",
  "type": "sata",
  "stem": "The nurse plans to use EMLA cream before starting an IV on a preschooler. Which actions are correct? Select all that apply.",
  "options": [
   "Apply the cream to intact skin",
   "Apply it about 30 minutes to 1 hour before the procedure",
   "Cover a large area of both arms to be safe",
   "Cleanse the skin before applying the cream",
   "Rub the cream vigorously into any broken skin"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "EMLA is applied to clean, intact skin about 30 minutes to 1 hour before the procedure using the smallest amount over the smallest area needed (slide 12 notes). Covering a large area (option 3) is tempting for better coverage but risks systemic toxicity such as bradycardia and seizures, and applying to broken skin (option 5) increases absorption and toxicity."
 },
 {
  "id": "x4e2q17",
  "exam": 2,
  "topic": "Hospitalization - therapeutic play",
  "type": "mcq",
  "stem": "Which strategy is most effective in reducing a preschooler's anxiety before a nasogastric tube insertion?",
  "options": [
   "Give a detailed scientific explanation the day before the procedure",
   "Let the child insert an NG tube into a doll during a play session first",
   "Tell the child it will only hurt for a minute",
   "Restrain the child and proceed quickly without discussion"
  ],
  "correct": [
   1
  ],
  "rationale": "Therapeutic (dramatic) play with dolls and real equipment lets the preschooler handle the new object and gain a sense of mastery and control, which lowers fear (slide 10 notes; p.1027). Saying it will only hurt for a minute (option 3) is tempting but ineffective because preschoolers have a poor sense of time, and a detailed day-ahead explanation (option 1) only prolongs worry."
 },
 {
  "id": "x4e2q18",
  "exam": 2,
  "topic": "Procedures - preparation",
  "type": "mcq",
  "stem": "When preparing a preschooler for a painful procedure, the nurse should:",
  "options": [
   "Explain the procedure in detail several days in advance",
   "Avoid giving any explanation in order to prevent fear",
   "Give a brief, simple explanation shortly before the procedure",
   "Use precise anatomical and medical terminology"
  ],
  "correct": [
   2
  ],
  "rationale": "Preschoolers should receive short, simple explanations close to the time of the procedure so little time is spent worrying, using familiar terms (slide 10 notes; p.1027). Explaining several days ahead (option 1) is tempting as thorough teaching but prolongs anxiety in a child with a limited time sense; giving no explanation (option 2) erodes trust."
 },
 {
  "id": "x4e2q19",
  "exam": 2,
  "topic": "Immunizations - 4-6 year boosters",
  "type": "sata",
  "stem": "Which immunizations are recommended as boosters for a healthy child at the 4-to-6-year visit before school entry? Select all that apply.",
  "options": [
   "DTaP",
   "IPV (polio)",
   "MMR",
   "Rotavirus",
   "Varicella"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "The Very DIM 4-6 mnemonic covers Varicella #2, DTaP #5, Influenza (annual), MMR #2, and IPV #4 before school entry (Table 31.2, p.852; slide 14). Rotavirus (option 4) is the distractor because it is an infant oral series completed in the first months of life, not a 4-to-6-year booster."
 },
 {
  "id": "x4e2q20",
  "exam": 2,
  "topic": "Immunizations - live vaccine precaution",
  "type": "mcq",
  "stem": "Before giving the 4-to-6-year boosters, which finding requires the nurse to consult the provider before administering the MMR and varicella vaccines?",
  "options": [
   "The child has a mild runny nose today",
   "The child received DTaP last year",
   "The child is afraid of needles",
   "The child is immunocompromised from chemotherapy"
  ],
  "correct": [
   3
  ],
  "rationale": "MMR and varicella are live attenuated vaccines that require caution in immunocompromised children (Table 31.2, p.852). A mild runny nose (option 1) is the tempting distractor but a minor illness is not a contraindication; prior DTaP and needle fear (options 2 and 3) do not affect live-vaccine safety."
 },
 {
  "id": "x4e2q21",
  "exam": 2,
  "topic": "Immunizations - reducing injection pain",
  "type": "sata",
  "stem": "Which strategies would the nurse use to decrease pain and anxiety when vaccinating a preschooler? Select all that apply.",
  "options": [
   "Apply a topical anesthetic such as EMLA",
   "Inject the most painful vaccine last",
   "Hold the child upright rather than lying flat",
   "Give prophylactic acetaminophen before the injections",
   "Administer intramuscular injections rapidly without aspiration"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "EMLA, giving the most painful vaccine last, holding the child upright, and rapid IM injection without aspiration all reduce vaccine pain (slide 15; p.852). Prophylactic acetaminophen or ibuprofen (option 4) is the trap: it does not reduce fever or pain and actually diminishes the immune response to the vaccine, so it should not be given."
 },
 {
  "id": "x4e2q22",
  "exam": 2,
  "topic": "Safety - car seat",
  "type": "mcq",
  "stem": "Which finding indicates that a 4-year-old's forward-facing car seat is being used correctly?",
  "options": [
   "The chest clip is at the level of the armpits with a snug 5-point harness and the top tether attached",
   "The harness straps come from slots below the shoulders",
   "The child wears a thick winter coat under the harness",
   "The seat is installed in the front passenger seat"
  ],
  "correct": [
   0
  ],
  "rationale": "A forward-facing seat is correct when the 5-point harness is snug, the chest clip sits at armpit level, straps emerge at or just above the shoulders, and the top tether is attached in the back seat (slide 13 notes). Straps from below the shoulders (option 2) apply to rear-facing seats; a bulky coat (option 3) leaves the harness dangerously loose; and the front seat (option 4) is unsafe."
 },
 {
  "id": "x4e2q23",
  "exam": 2,
  "topic": "Safety - booster seat",
  "type": "mcq",
  "stem": "A parent asks when the child can switch from the harness car seat to a booster seat and what a booster does. What is the nurse's best response?",
  "options": [
   "A booster seat can be used safely from birth",
   "A booster is used at about 40 pounds and positions the vehicle lap-and-shoulder belt across the chest and upper thighs",
   "A booster seat uses its own internal 5-point harness",
   "A booster lets the child safely ride in the front seat"
  ],
  "correct": [
   1
  ],
  "rationale": "A booster (about 40 pounds) raises the child so the adult lap-and-shoulder belt rests across the chest and upper thighs, preventing seat-belt abdominal injury (slide 13 notes; p.846). Option 3 is the tempting distractor because harness seats do have a 5-point harness, but a booster uses the vehicle's belt, not an internal harness; children still ride in the back seat (option 4)."
 },
 {
  "id": "x4e2q24",
  "exam": 2,
  "topic": "Safety - firearms",
  "type": "mcq",
  "stem": "Which teaching about firearm safety is most important for the family of a preschooler?",
  "options": [
   "Keep a loaded gun accessible in case of a home intruder",
   "Preschoolers are not strong enough to pull a trigger",
   "Store firearms locked and unloaded with ammunition stored separately, and ask about guns in homes your child visits",
   "A gun hidden on a high shelf is adequately secured"
  ],
  "correct": [
   2
  ],
  "rationale": "Firearms should be stored locked and unloaded with ammunition kept separately, and parents should ask about guns in other homes the child visits (slide 18 notes; Box 31.4). Option 2 is the dangerous myth: research shows about a quarter of 3-year-olds have the finger strength to fire a handgun. Hiding a gun (option 4) is not the same as securing it."
 },
 {
  "id": "x4e2q25",
  "exam": 2,
  "topic": "Safety - poisoning",
  "type": "mcq",
  "stem": "A parent calls stating their alert 3-year-old may have swallowed some household cleaner. What should the nurse advise the parent to do first?",
  "options": [
   "Give syrup of ipecac to induce vomiting",
   "Give the child milk to coat the stomach",
   "Wait at home to see whether symptoms develop",
   "Call Poison Control at 1-800-222-1222 immediately"
  ],
  "correct": [
   3
  ],
  "rationale": "The first action for a suspected ingestion is to call Poison Control (1-800-222-1222) for guidance (Box 31.4). Inducing vomiting with ipecac (option 1) is the tempting outdated answer but is no longer recommended and can worsen caustic injury; waiting (option 3) dangerously delays care."
 },
 {
  "id": "x4e2q26",
  "exam": 2,
  "topic": "Safety - home injury prevention",
  "type": "sata",
  "stem": "Which measures should the nurse include when teaching parents about home injury prevention for a preschooler? Select all that apply.",
  "options": [
   "Fence the pool and never leave the child unattended in water",
   "Lower the water-heater temperature and turn pot handles inward",
   "Keep medicines and cleaners in their original containers, locked out of reach",
   "Store firearms loaded for quick access",
   "Allow the child to swim alone once enrolled in swim lessons"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Pool fencing and supervision, lowering the water-heater temperature, turning pot handles inward, and locking poisons in original containers all prevent common preschool injuries (Box 31.4; p.846). Loaded firearms (option 4) are unsafe, and swim lessons (option 5) do not make a preschooler drown-proof, so constant supervision near water is still required."
 },
 {
  "id": "x4e2q27",
  "exam": 2,
  "topic": "Safety - stranger safety/body autonomy",
  "type": "mcq",
  "stem": "Which anticipatory guidance about personal safety is appropriate to teach a preschooler and family?",
  "options": [
   "Teach the child their full name and address, stranger safety, and good touch-bad touch using role-play",
   "Wait until school age to teach good touch-bad touch",
   "Teach the child to keep any secret an adult asks them to keep",
   "Tell the child that all adults are dangerous"
  ],
  "correct": [
   0
  ],
  "rationale": "By preschool age children should learn their full name and address, stranger safety, and good touch-bad touch (body autonomy), reinforced through role-play (p.847). Waiting until school age (option 2) delays protective teaching; instructing a child to keep any adult's secret (option 3) can enable abuse; and option 4 is neither accurate nor therapeutic."
 },
 {
  "id": "x4e2q28",
  "exam": 2,
  "topic": "Respiratory - choking first aid",
  "type": "mcq",
  "stem": "A preschooler eating a hot dog suddenly stops, cannot make any sound, and clutches the throat. What is the nurse's priority action?",
  "options": [
   "Perform a blind finger sweep to remove the object",
   "Deliver subdiaphragmatic (abdominal) thrusts",
   "Encourage the child to cough forcefully",
   "Offer sips of water to wash the food down"
  ],
  "correct": [
   1
  ],
  "rationale": "Silent choking means a complete airway obstruction with no air moving, so the nurse delivers subdiaphragmatic abdominal thrusts (p.1117-1118). Encouraging the cough (option 3) is correct only when the child is coughing or making sound (a protective partial obstruction); a blind finger sweep (option 1) pushes the object deeper."
 },
 {
  "id": "x4e2q29",
  "exam": 2,
  "topic": "Respiratory - choking hazards",
  "type": "sata",
  "stem": "Which foods should the nurse advise parents to withhold or modify to reduce choking risk in a preschooler? Select all that apply.",
  "options": [
   "Popcorn",
   "Whole grapes",
   "Hot dogs sliced into rounds",
   "Mashed potatoes",
   "Hard candy"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Popcorn, whole grapes, round hot-dog slices, nuts, and hard candy are high-risk choking foods that should be withheld or cut to change their shape and texture (slide 16-17 notes; p.1117). Mashed potatoes (option 4) are a safe soft texture. Round hot-dog coins are included because their shape can plug the airway even though hot dogs seem like a normal food."
 },
 {
  "id": "x4e2q30",
  "exam": 2,
  "topic": "Respiratory - asthma rescue vs controller",
  "type": "mcq",
  "stem": "A preschooler with asthma begins acute wheezing and coughing during play. Which prescribed inhaler should the nurse have the child use now?",
  "options": [
   "Fluticasone (inhaled corticosteroid)",
   "Montelukast (leukotriene modifier)",
   "Albuterol (short-acting beta agonist)",
   "Salmeterol (long-acting beta agonist)"
  ],
  "correct": [
   2
  ],
  "rationale": "Albuterol, a short-acting beta agonist, is the rescue inhaler for acute bronchospasm (p.1119). Fluticasone (option 1) is the tempting distractor because it is an asthma medication, but it is the daily controller and does not relieve an acute attack; montelukast and salmeterol are maintenance drugs, not quick-relief agents."
 },
 {
  "id": "x4e2q31",
  "exam": 2,
  "topic": "Respiratory - inhaled corticosteroid teaching",
  "type": "mcq",
  "stem": "Which instruction is most important for a child prescribed a daily inhaled corticosteroid such as fluticasone?",
  "options": [
   "Use this inhaler at the first sign of sudden wheezing",
   "Stop the medication as soon as symptoms improve",
   "Expect the child's heart to race after each dose",
   "Use a spacer and rinse the mouth after each dose"
  ],
  "correct": [
   3
  ],
  "rationale": "A spacer plus rinsing the mouth after inhaled corticosteroids prevents oral thrush and improves drug delivery; it is a daily controller (p.1105, 1119). Option 1 confuses it with a rescue inhaler; stopping when better (option 2) is wrong for a controller; and a racing heart (option 3) is a beta-agonist effect, not a steroid effect."
 },
 {
  "id": "x4e2q32",
  "exam": 2,
  "topic": "Allergy - anaphylaxis priority",
  "type": "mcq",
  "stem": "A child develops wheezing, hives, and hypotension minutes after a bee sting. What is the nurse's first action?",
  "options": [
   "Administer intramuscular epinephrine into the vastus lateralis",
   "Administer IV diphenhydramine",
   "Give a nebulized albuterol treatment",
   "Administer IV methylprednisolone"
  ],
  "correct": [
   0
  ],
  "rationale": "IM epinephrine into the vastus lateralis is the first-line standard of care in anaphylaxis regardless of the trigger (p.1193; slide 28-30). Diphenhydramine (option 2), albuterol (option 3), and corticosteroids (option 4) are adjuncts that treat individual symptoms but cannot substitute for epinephrine and are given after it."
 },
 {
  "id": "x4e2q33",
  "exam": 2,
  "topic": "Allergy - food allergy teaching",
  "type": "mcq",
  "stem": "Which statement by the parent of a preschooler with a severe peanut allergy indicates a need for further teaching?",
  "options": [
   "I created an emergency anaphylaxis action plan with the preschool",
   "I will send our only epinephrine auto-injector to school with my child",
   "I reviewed the signs of anaphylaxis with the preschool staff",
   "I made a food-allergy avoidance plan with the director"
  ],
  "correct": [
   1
  ],
  "rationale": "An epinephrine auto-injector must be available both at home and at school, so sending the only device to school leaves the child unprotected at home and requires further teaching (slide 31). The other statements (options 1, 3, and 4) all reflect appropriate anaphylaxis preparedness."
 },
 {
  "id": "x4e2q34",
  "exam": 2,
  "topic": "Allergy - anaphylaxis symptoms",
  "type": "sata",
  "stem": "Which findings would the nurse recognize as signs of a food-allergy anaphylactic reaction? Select all that apply.",
  "options": [
   "Hives and swelling",
   "Wheezing and throat tightness",
   "Vomiting and diarrhea",
   "Rising blood pressure with a slow pulse",
   "Light-headedness and pallor"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Anaphylaxis produces skin (hives, swelling), respiratory (wheezing, throat tightness), GI (vomiting, diarrhea), and circulatory (pallor, light-headedness) findings (slide 25, 28). Option 4 is the trap: blood pressure falls with a weak, rapid pulse in anaphylaxis rather than rising with bradycardia."
 },
 {
  "id": "x4e2q35",
  "exam": 2,
  "topic": "Allergy - allergic rhinitis labs",
  "type": "mcq",
  "stem": "A child exposed to pollen has sneezing, watery itchy eyes, and pale swollen nasal mucosa. Which laboratory result does the nurse anticipate?",
  "options": [
   "Neutrophils of 80 percent",
   "Eosinophils of 2 percent",
   "Elevated immunoglobulin E (IgE) level",
   "White blood cell count of 3 x 10 to the 9th per liter"
  ],
  "correct": [
   2
  ],
  "rationale": "Allergic rhinitis is an IgE-mediated response, so an elevated IgE level is expected along with increased eosinophils (slide 22-24). Eosinophils of 2 percent (option 2) is the tempting distractor because eosinophils sound allergic, but that value is normal; 80 percent neutrophils suggests bacterial infection, and a low WBC is nonspecific."
 },
 {
  "id": "x4e2q36",
  "exam": 2,
  "topic": "Infectious - rheumatic fever prevention",
  "type": "mcq",
  "stem": "A child is diagnosed with group A beta-hemolytic streptococcal pharyngitis. Which teaching best helps prevent rheumatic fever?",
  "options": [
   "Give an antipyretic and let the illness resolve on its own",
   "Stop the antibiotic once the sore throat is gone",
   "Ask for a repeat throat culture instead of taking antibiotics",
   "Complete the entire prescribed course of antibiotics even after symptoms improve"
  ],
  "correct": [
   3
  ],
  "rationale": "Rheumatic fever is an autoimmune sequela of inadequately treated strep, so completing the full antibiotic course prevents it (p.1169; study guide). Stopping early (option 2) is the common mistake that leaves strep partially treated; treating symptoms only or delaying antibiotics (options 1 and 3) also risks rheumatic fever and glomerulonephritis."
 },
 {
  "id": "x4e2q37",
  "exam": 2,
  "topic": "Infectious - rheumatic fever findings",
  "type": "sata",
  "stem": "Which findings would support a diagnosis of rheumatic fever in a child? Select all that apply.",
  "options": [
   "Elevated antistreptolysin-O (ASO) titer",
   "Carditis with a new systolic murmur",
   "Migratory polyarthritis of the large joints",
   "Decreased erythrocyte sedimentation rate",
   "Negative C-reactive protein"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "An elevated ASO titer (recent strep), carditis with a new murmur, and migratory polyarthritis are Jones-criteria findings supporting rheumatic fever (p.1169; slides 33-34). The inflammatory markers ESR and CRP are elevated, so a decreased ESR (option 4) and a negative CRP (option 5) argue against the diagnosis."
 },
 {
  "id": "x4e2q38",
  "exam": 2,
  "topic": "Infectious - MIS-C",
  "type": "mcq",
  "stem": "Which assessment finding is most consistent with multisystem inflammatory syndrome in children (MIS-C) after a COVID-19 infection?",
  "options": [
   "Persistent fever with conjunctivitis, rash, and elevated inflammatory markers involving multiple organ systems",
   "Absence of fever with an isolated cough",
   "Single-organ involvement without fever",
   "Low C-reactive protein and ferritin levels"
  ],
  "correct": [
   0
  ],
  "rationale": "MIS-C features fever (always present) plus multi-organ inflammation such as conjunctivitis, rash, GI, and cardiac changes with elevated ferritin, CRP, and D-dimer within about 2 months of COVID (p.1229; slide 32). Absence of fever (options 2 and 3) and low inflammatory markers (option 4) are inconsistent with MIS-C."
 },
 {
  "id": "x4e2q39",
  "exam": 2,
  "topic": "Hematologic - iron-deficiency labs",
  "type": "mcq",
  "stem": "Which laboratory value would the nurse expect to be decreased in a preschooler with iron-deficiency anemia?",
  "options": [
   "Total iron-binding capacity",
   "Serum ferritin",
   "Platelet count",
   "White blood cell count"
  ],
  "correct": [
   1
  ],
  "rationale": "Serum ferritin (stored iron) is low in iron-deficiency anemia, along with hemoglobin, hematocrit, and MCV (p.1257; slide 38). Total iron-binding capacity (option 1) is the tempting distractor because it involves iron, but TIBC is typically increased; platelet and WBC counts are unaffected."
 },
 {
  "id": "x4e2q40",
  "exam": 2,
  "topic": "Hematologic - ferrous sulfate teaching",
  "type": "sata",
  "stem": "Which instructions would the nurse give parents about giving their child liquid ferrous sulfate? Select all that apply.",
  "options": [
   "Give it with orange juice to enhance absorption",
   "Give it with a full glass of milk",
   "Give it through a straw and brush the teeth afterward",
   "Expect the stools to turn a dark or black color",
   "Give it on an empty stomach when tolerated"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "rationale": "Vitamin C in orange juice boosts absorption, iron is best given on an empty stomach, a straw plus tooth brushing prevents staining, and black stools are a normal expected effect (p.1258; slide 40). Milk (option 2) is the trap because it decreases iron absorption and should not be taken with the dose."
 },
 {
  "id": "x4e2q41",
  "exam": 2,
  "topic": "Hematologic - hemophilia hemarthrosis",
  "type": "mcq",
  "stem": "A child with hemophilia A develops a warm, swollen, painful knee after active play. Which nursing action is appropriate?",
  "options": [
   "Apply heat and begin active range of motion",
   "Give ibuprofen and encourage weight-bearing",
   "Rest and immobilize the joint, apply ice and compression, elevate it, and give acetaminophen for pain",
   "Massage the joint vigorously to disperse the blood"
  ],
  "correct": [
   2
  ],
  "rationale": "Hemarthrosis is managed with RICE (rest, ice, compression, elevation), immobilization, and acetaminophen for pain (p.1269; slide 42). Ibuprofen (option 2) is the trap because it treats pain but impairs platelets and increases bleeding; heat, early range of motion, weight-bearing, and massage (options 1, 2, and 4) all worsen joint bleeding."
 },
 {
  "id": "x4e2q42",
  "exam": 2,
  "topic": "Hematologic - hemophilia bleeding signs",
  "type": "sata",
  "stem": "Parents of a child newly diagnosed with hemophilia A ask which bleeding signs to watch for. Which should the nurse include? Select all that apply.",
  "options": [
   "Nosebleeds",
   "Blood in the urine",
   "Swollen, painful joints",
   "Frequent fevers",
   "Dark, tarry stools"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Epistaxis, hematuria, hemarthrosis (swollen, painful joints), and tarry stools from GI bleeding are all bleeding manifestations to monitor (p.1269; slide 45). Frequent fevers (option 4) are the distractor because fever is not a feature of hemophilia, which is a coagulation disorder rather than an infectious or marrow problem."
 },
 {
  "id": "x4e2q43",
  "exam": 2,
  "topic": "GI - celiac gluten-free diet",
  "type": "sata",
  "stem": "The nurse teaches parents of a child with celiac disease which foods to eliminate. Which foods named by the parents as needing to be avoided indicate correct understanding? Select all that apply.",
  "options": [
   "Oatmeal",
   "Wheat bread",
   "Rice cakes",
   "Barley soup",
   "Corn on the cob"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Gluten is found in wheat, rye, barley, and oats, which must be eliminated for life (p.1297; slide 46-47). Rice (option 3) and corn (option 5) are gluten-free and safe, so naming them as foods to avoid would be incorrect; oats are included because they are among the grains the source lists as containing gluten."
 },
 {
  "id": "x4e2q44",
  "exam": 2,
  "topic": "GI - functional constipation",
  "type": "sata",
  "stem": "Which suggestions would the nurse give the parent of a preschooler with functional constipation? Select all that apply.",
  "options": [
   "Increase the child's intake of high-fiber foods",
   "Ensure adequate daily fluid intake",
   "Encourage more physical activity",
   "Reduce the child's fluid intake",
   "Punish the child for soiling accidents"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "High-fiber foods, adequate fluids, and increased activity, along with a stool softener and a toilet-sitting routine, manage functional constipation (p.1298; slides 48-49). Reducing fluids (option 4) worsens constipation, and punishing soiling (option 5) is contraindicated; the child should be praised on clean days instead."
 },
 {
  "id": "x4e2q45",
  "exam": 2,
  "topic": "GU - UTI prevention",
  "type": "sata",
  "stem": "Which measures would the nurse teach to help prevent recurrent urinary tract infections in a preschool-age girl? Select all that apply.",
  "options": [
   "Wipe from front to back after toileting",
   "Void every 2 to 3 hours rather than holding urine",
   "Wear cotton underwear",
   "Take frequent bubble baths",
   "Limit fluid intake to reduce voiding"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Front-to-back wiping, regular voiding every 2 to 3 hours, cotton underwear, and increased fluids help prevent UTIs (p.1318; slide 50). Bubble baths (option 4) irritate the urethra and should be avoided, and limiting fluids (option 5) promotes urinary stasis and infection, so fluids should be pushed instead."
 },
 {
  "id": "x4e2q46",
  "exam": 2,
  "topic": "GU - enuresis management",
  "type": "sata",
  "stem": "Which statements by the parent of a 6-year-old with nocturnal enuresis indicate effective teaching? Select all that apply.",
  "options": [
   "I should avoid giving my child fluids after dinner",
   "I should encourage plenty of fluids during the daytime",
   "I will wake and walk my child to the bathroom at a set time each night",
   "I should make my child wear diapers to preschool during the day",
   "I will give diet soda instead of regular soda in the evening"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Limiting evening fluids, encouraging daytime fluids, and fully waking the child to walk to the bathroom on a schedule all help nocturnal enuresis (p.1321; slides 51-52). Daytime diapers (option 4) shame an unnecessary regression since daytime control is expected by this age; diet soda (option 5) is still an evening fluid and its caffeine acts as a diuretic and bladder irritant."
 },
 {
  "id": "x4e2q47",
  "exam": 2,
  "topic": "GU - glomerulonephritis",
  "type": "mcq",
  "stem": "Which finding would the nurse expect in a child with acute poststreptococcal glomerulonephritis?",
  "options": [
   "Massive proteinuria with generalized edema and normal blood pressure",
   "Clear, dilute urine with low blood pressure",
   "Bright-red painless rectal bleeding",
   "Tea-colored (smoky) urine, periorbital edema, and hypertension"
  ],
  "correct": [
   3
  ],
  "rationale": "Poststreptococcal glomerulonephritis causes gross hematuria (tea-colored or smoky urine), RBC casts, periorbital edema, and hypertension about 1 to 2 weeks after strep (p.1323). Option 1 is the key distractor because it describes nephrotic syndrome (massive proteinuria and edema with minimal hematuria); the memory hook is glomerulonephritis equals blood in the urine plus hypertension."
 },
 {
  "id": "x4e2q48",
  "exam": 2,
  "topic": "ENT - otitis media",
  "type": "mcq",
  "stem": "A 4-year-old is diagnosed with acute otitis media. Which instruction is most appropriate for the nurse to give the parents?",
  "options": [
   "Give acetaminophen or ibuprofen for pain and fever, and report if there is no improvement or increasing pain in 24 to 48 hours",
   "Give an over-the-counter decongestant and cough suppressant",
   "Have the child lie flat with a propped bottle for feedings",
   "Antibiotics are always required immediately for every ear infection"
  ],
  "correct": [
   0
  ],
  "rationale": "Pain and fever are managed with acetaminophen or ibuprofen, and parents should report no improvement or worsening pain in 24 to 48 hours because of rupture risk (p.1446-1448). Option 4 is tempting but incorrect: many nonsevere cases resolve without antibiotics; cough and cold preparations (option 2) are not recommended in young children, and propped-bottle reclined feeding (option 3) actually raises otitis risk."
 },
 {
  "id": "x4e2q49",
  "exam": 2,
  "topic": "Respiratory - post-tonsillectomy",
  "type": "mcq",
  "stem": "Which finding in a child during the first hours after a tonsillectomy most requires immediate nursing attention?",
  "options": [
   "Complaints of a sore throat",
   "Frequent swallowing and throat clearing",
   "A request for a cool liquid",
   "Sleepiness after anesthesia"
  ],
  "correct": [
   1
  ],
  "rationale": "Frequent swallowing and throat clearing is the earliest sign of post-tonsillectomy hemorrhage as blood trickles down the throat, so the nurse should inspect and report it immediately (p.1114; study guide). A sore throat (option 1) and post-anesthesia sleepiness (option 4) are expected, and cool liquids are encouraged after the initial period."
 },
 {
  "id": "x4e2q50",
  "exam": 2,
  "topic": "Maltreatment - mandated reporting",
  "type": "mcq",
  "stem": "A nurse notes that a preschooler has a spiral arm fracture and multiple bruises in different stages of healing, and the caregiver's account does not match the injury. What is the nurse's legal responsibility?",
  "options": [
   "Gather definitive proof before taking any action",
   "Confront and accuse the caregiver directly",
   "Report the reasonable suspicion of maltreatment to child protective services and document objectively",
   "Report only if the physician agrees to do so"
  ],
  "correct": [
   2
  ],
  "rationale": "Nurses are mandated reporters in all states and must report reasonable suspicion of maltreatment in good faith while documenting factually and objectively (p.1577; slide 21). Waiting for definitive proof (option 1) or the physician's agreement (option 4) delays protecting the child, and directly accusing the caregiver (option 2) is inappropriate and not the nurse's role."
 },
 {
  "id": "x4e3q01",
  "exam": 3,
  "topic": "Erikson industry",
  "type": "mcq",
  "stem": "A nurse cares for a hospitalized 9-year-old who has become bored and withdrawn. Which intervention best supports the school-age child's developmental task of industry versus inferiority?",
  "options": [
   "Arrange for a parent to remain at the bedside continuously so the child is never alone",
   "Provide the child's schoolwork and model-building kits and praise each completed task",
   "Offer a musical mobile and brightly colored rattles for stimulation",
   "Keep the child on strict bed rest and cluster all care to allow maximum sleep"
  ],
  "correct": [
   1
  ],
  "rationale": "School-age children achieve a sense of industry by accomplishing real tasks, so allowing schoolwork and hobbies and praising genuine accomplishments during hospitalization preserves industry (p.862-871). The tempting distractor, continuous parental presence, addresses separation anxiety, which is the toddler's chief concern rather than the school-ager's need for competence; rattles suit an infant."
 },
 {
  "id": "x4e3q02",
  "exam": 3,
  "topic": "Piaget concrete operational",
  "type": "sata",
  "stem": "A nurse reviews cognitive characteristics expected of a healthy 10-year-old in Piaget's concrete operational stage. Which findings are expected? Select all that apply.",
  "options": [
   "Understands conservation, that mass or volume stays the same despite a change in shape",
   "Reasons abstractly about hypothetical 'what if' situations",
   "Can arrange objects in order by size (seriation)",
   "Uses magical thinking and believes wishes can cause events",
   "Grasps reversibility and simple cause-and-effect relationships"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Concrete operational thought (7-11 yr) includes conservation, seriation, reversibility, and concrete cause-effect logic (p.782-786, 864-877). Abstract or hypothetical reasoning belongs to the adolescent's formal operational stage, and magical thinking is characteristic of the preschooler; both are the tempting wrong choices because they are real Piaget concepts but from other stages."
 },
 {
  "id": "x4e3q03",
  "exam": 3,
  "topic": "Kohlberg conventional",
  "type": "mcq",
  "stem": "An 8-year-old tells the nurse, 'I always take my medicine because I want the nurses to think I'm a good kid.' This reasoning reflects which level of Kohlberg's moral development?",
  "options": [
   "Preconventional, obeys only to avoid punishment",
   "Postconventional, follows self-chosen universal ethical principles",
   "Conventional, behaves well to gain approval ('good boy/nice girl')",
   "Premoral, has no concept of right or wrong"
  ],
  "correct": [
   2
  ],
  "rationale": "Seeking approval ('good boy/nice girl,' stage 3) is the conventional level typical of about 7-10 years (p.782-786). Obeying to avoid punishment (preconventional) is the tempting distractor; it is a real Kohlberg level but describes the younger toddler/preschooler, while postconventional universal principles belong to adolescence."
 },
 {
  "id": "x4e3q04",
  "exam": 3,
  "topic": "Play and peers",
  "type": "mcq",
  "stem": "A nurse selects activities for a 10-year-old on contact precautions. Which choice best matches the play preferences of a school-age child?",
  "options": [
   "A large-piece push-pull toy",
   "Parallel play beside another child with identical toys",
   "Solitary dramatic pretend play with a doctor costume",
   "A board game with rules and a model-building kit to complete"
  ],
  "correct": [
   3
  ],
  "rationale": "School-age children enjoy cooperative games with rules, collections, and building models or crafts (slides; p.862-877). Solitary dramatic pretend play, the tempting distractor, is a preschool preference, and parallel play is a toddler behavior; rules-based, skill-building activities fit the industry stage."
 },
 {
  "id": "x4e3q05",
  "exam": 3,
  "topic": "Chief fear",
  "type": "mcq",
  "stem": "A nurse prepares an 11-year-old for a procedure. Which fear is the priority concern for the school-age child?",
  "options": [
   "Loss of control and helplessness during the procedure",
   "Separation from the primary caregiver",
   "Fear of the dark and of monsters",
   "Fear that the body will be mutilated and 'insides will leak out'"
  ],
  "correct": [
   0
  ],
  "rationale": "Loss of control is the chief fear of the school-age child; involving the child and explaining the 'why' preserves a sense of control (p.862-877; slides). Body-mutilation fear, the tempting distractor, and fear of the dark are hallmark preschool fears, while separation anxiety dominates in the toddler."
 },
 {
  "id": "x4e3q06",
  "exam": 3,
  "topic": "Growth and vitals",
  "type": "mcq",
  "stem": "During a well-child visit for a healthy 8-year-old, which finding should the nurse document as expected?",
  "options": [
   "Resting pulse of 120 beats per minute",
   "Weight gain of about 12 pounds since last year",
   "Resting pulse of about 70 to 80 per minute and blood pressure about 112/60 mm Hg",
   "An anterior fontanel that is still open"
  ],
  "correct": [
   2
  ],
  "rationale": "Expected school-age vitals are a pulse of about 70-80 per minute and BP about 112/60 mm Hg, with growth of roughly 3-5 lb and 1-2 in per year (p.862-871; slides). A pulse of 120, the tempting distractor, is normal for a toddler rather than a school-ager; 12 lb per year far exceeds the expected 3-5 lb, and the fontanel closes in infancy."
 },
 {
  "id": "x4e3q07",
  "exam": 3,
  "topic": "Dental health",
  "type": "mcq",
  "stem": "Which statement about dental development should the nurse include when teaching parents of a 6- to 12-year-old?",
  "options": [
   "The child now has only 20 permanent teeth to care for",
   "The first permanent molars erupt around age 6, and the child should brush and floss daily with regular checkups, fluoride, and sealants",
   "Flossing should be avoided until all permanent teeth have erupted",
   "Fluoride and dental sealants are unnecessary once permanent teeth appear"
  ],
  "correct": [
   1
  ],
  "rationale": "Permanent teeth begin erupting around age 6, and daily brushing and flossing plus checkups, fluoride, and sealants are recommended (slides; p.862-871). Saying there are only 20 permanent teeth, the tempting distractor, is wrong because the school-ager erupts 28 permanent teeth; delaying flossing or skipping sealants also contradicts the teaching."
 },
 {
  "id": "x4e3q08",
  "exam": 3,
  "topic": "Obesity diagnosis",
  "type": "mcq",
  "stem": "A school nurse screens children for obesity. Which finding confirms the diagnosis of obesity in a 9-year-old?",
  "options": [
   "Weight above the 85th percentile for age",
   "A single elevated blood pressure reading",
   "Reported intake of more than 1200 calories per day",
   "BMI-for-age at or above the 95th percentile plotted on the growth chart"
  ],
  "correct": [
   3
  ],
  "rationale": "Childhood obesity is diagnosed by BMI-for-age at or above the 95th percentile on the growth chart (p.886-887; slides). The 85th percentile, the tempting distractor, defines overweight rather than obesity, and a single BP reading or a calorie count does not establish the diagnosis."
 },
 {
  "id": "x4e3q09",
  "exam": 3,
  "topic": "Obesity teaching",
  "type": "sata",
  "stem": "A nurse counsels the family of an obese 10-year-old. Which instructions are appropriate? Select all that apply.",
  "options": [
   "Eliminate sugar-sweetened beverages and offer water or milk instead",
   "Aim for at least 60 minutes of physical activity each day",
   "Put only the child, not the rest of the family, on a strict diet",
   "Serve structured family meals with controlled portions",
   "Encourage more screen time to keep the child calm and resting"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Family-centered lifestyle change, including eliminating sugary drinks, 60 minutes of daily activity, and structured portioned meals, is recommended (p.886-887; slides). Singling out only the child, the tempting distractor, is wrong because obesity management must involve the whole family, and increasing screen time works against activity goals."
 },
 {
  "id": "x4e3q10",
  "exam": 3,
  "topic": "Scoliosis screening",
  "type": "mcq",
  "stem": "A school nurse performs scoliosis screening. Which technique and finding are correct?",
  "options": [
   "Have the child stand erect; a leg-length difference confirms scoliosis",
   "Use the Adams forward-bend test; a one-sided rib hump suggests scoliosis",
   "Palpate the spine while the child lies supine; back pain confirms scoliosis",
   "Screen only boys, who are affected about five times more often than girls"
  ],
  "correct": [
   1
  ],
  "rationale": "The Adams forward-bend test reveals a unilateral rib hump from vertebral rotation and is the standard screen (p.1468-1472). Idiopathic scoliosis is usually painless, so pain is not the confirming finding, and it is about 5 times more common in females, not males, making the 'screen only boys' option a clear distractor."
 },
 {
  "id": "x4e3q11",
  "exam": 3,
  "topic": "Scoliosis brace",
  "type": "sata",
  "stem": "A nurse teaches a 12-year-old and family about a newly prescribed Boston (thoracolumbar) brace. Which instructions are correct? Select all that apply.",
  "options": [
   "Wear the brace about 23 hours a day, removing it only to shower or for structured sports",
   "Wear a snug cotton T-shirt under the brace to protect the skin",
   "Loosen the straps whenever the brace rubs or feels tight",
   "The brace will straighten and permanently correct the existing curve",
   "Report skin rubbing or breakdown to the provider rather than adjusting the brace yourself"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "rationale": "The brace is worn about 23 hours per day over a T-shirt, and rubbing is reported to the provider (p.1468-1472). Loosening the straps, the tempting distractor, is prohibited because it defeats correction, and a brace only halts curve progression rather than permanently straightening an existing curve, so that statement is false."
 },
 {
  "id": "x4e3q12",
  "exam": 3,
  "topic": "Post spinal fusion",
  "type": "mcq",
  "stem": "A nurse cares for an adolescent on the first day after posterior spinal fusion for scoliosis. Which action is the priority?",
  "options": [
   "Reposition the patient by log-rolling to keep the spine straight",
   "Encourage the patient to twist and turn independently to prevent stiffness",
   "Keep the patient flat with no repositioning for 48 hours",
   "Have the patient sit and dangle unassisted within the first hour"
  ],
  "correct": [
   0
  ],
  "rationale": "After spinal fusion the patient is repositioned only by log-roll to protect the fusion and spinal alignment, with neurovascular checks of all extremities for at least 48 hours (p.1468-1472). Independent twisting, the tempting distractor, endangers the fusion; the patient still needs repositioning to prevent skin and respiratory complications, and early unsupported dangling is unsafe."
 },
 {
  "id": "x4e3q13",
  "exam": 3,
  "topic": "Pediatric fractures",
  "type": "mcq",
  "stem": "A nurse reviews pediatric fracture patterns with a student. Which statement is accurate?",
  "options": [
   "Children's bones are more brittle than adults', so complete fractures are the rule",
   "A greenstick fracture always produces obvious deformity and severe pain",
   "Epiphyseal (growth-plate) fractures never affect future bone growth",
   "Porous bone and a thick periosteum make incomplete (greenstick) fractures common, but growth-plate fractures can disturb growth"
  ],
  "correct": [
   3
  ],
  "rationale": "Children's porous bones and thick periosteum favor greenstick (incomplete) fractures, while epiphyseal fractures are serious because they can disturb growth (p.1477-1480). The claim that growth-plate fractures never affect growth, the tempting distractor, is false; greenstick fractures often have minimal signs, and children's bones tend to bend rather than shatter."
 },
 {
  "id": "x4e3q14",
  "exam": 3,
  "topic": "Compartment syndrome",
  "type": "mcq",
  "stem": "A child in a long-arm cast reports increasing pain that is not relieved by elevation or the ordered analgesic. What is the nurse's best interpretation?",
  "options": [
   "This is expected cast discomfort; give another dose and reassess later",
   "This unrelieved pain is the earliest sign of compartment syndrome and must be reported immediately",
   "The pain indicates the cast is drying and will resolve on its own",
   "The child is anxious and simply needs distraction rather than assessment"
  ],
  "correct": [
   1
  ],
  "rationale": "Unrelieved pain is the earliest and most reliable sign of compartment syndrome and requires immediate notification because permanent damage occurs within about 6 hours (p.1477-1480). Simply re-medicating, the tempting distractor, or attributing it to a drying cast delays limb-saving intervention."
 },
 {
  "id": "x4e3q15",
  "exam": 3,
  "topic": "Neurovascular checks",
  "type": "sata",
  "stem": "A nurse monitors a child with a newly casted tibia for compartment syndrome. Which findings should be reported to the provider? Select all that apply.",
  "options": [
   "Pain that is not relieved by analgesics",
   "Paresthesia (numbness and tingling) of the toes",
   "Pallor and coolness of the extremity distal to the cast",
   "Inability to move the toes with a diminished pulse",
   "Pink, warm toes with brisk capillary refill"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The 5 P's, Pain (unrelieved), Paresthesia, Pallor, Pulselessness, and Paralysis, signal compartment syndrome and must be reported (p.1477-1480). Pink, warm toes with brisk capillary refill, the tempting distractor, are a normal neurovascular finding rather than a warning sign."
 },
 {
  "id": "x4e3q16",
  "exam": 3,
  "topic": "Precocious puberty",
  "type": "mcq",
  "stem": "A 6-year-old girl is being evaluated for breast development and pubic hair. Which statement by the nurse is accurate about precocious puberty?",
  "options": [
   "It is defined as sexual development occurring after age 10 in girls",
   "It requires no work-up because it is always a normal variation",
   "A pituitary tumor must be ruled out, and a GnRH analog such as leuprolide (Lupron) may halt maturation",
   "Oral estrogen is given to move the child through puberty more quickly"
  ],
  "correct": [
   2
  ],
  "rationale": "Precocious puberty is Tanner stage II before age 8 in girls (age 9 in boys); a pituitary tumor must be ruled out, and a GnRH analog such as leuprolide halts maturation (slides; p.1340-1341). Oral estrogen, the tempting distractor, would worsen it by advancing skeletal maturation and closing the epiphyses, and it is not a normal variation that needs no work-up."
 },
 {
  "id": "x4e3q17",
  "exam": 3,
  "topic": "GH deficiency",
  "type": "mcq",
  "stem": "A child with growth hormone deficiency is started on somatropin. Which instruction should the nurse give the parents?",
  "options": [
   "Give the subcutaneous injection once daily at bedtime",
   "Administer the drug orally with breakfast each morning",
   "Expect the therapy to continue lifelong, even after the growth plates close",
   "Give the injection only on days the child seems short"
  ],
  "correct": [
   0
  ],
  "rationale": "Somatropin is given subcutaneously once daily at bedtime to mimic the natural nighttime GH peak, and it is stopped once the epiphyses close (slides; p.1363-1364). Oral dosing, the tempting distractor, is incorrect because GH is a protein that must be injected; therapy is not lifelong and is given on a fixed daily schedule, not by how the child appears."
 },
 {
  "id": "x4e3q18",
  "exam": 3,
  "topic": "Tonsillectomy care",
  "type": "mcq",
  "stem": "A nurse plans care for a child recovering from a tonsillectomy. Which intervention is appropriate?",
  "options": [
   "Offer red fruit punch and orange gelatin as the first fluids",
   "Encourage the child to cough and clear the throat frequently",
   "Give aspirin every 4 hours for throat pain",
   "Position the child on the side or abdomen and offer cool, non-irritating liquids"
  ],
  "correct": [
   3
  ],
  "rationale": "Side-lying or prone positioning promotes drainage of secretions, and cool, non-red liquids are offered as the child recovers (p.1113-1114). Red-colored fluids, the tempting distractor, are avoided because they mask or mimic blood; coughing and throat clearing can dislodge the clot, and aspirin increases bleeding risk and carries a Reye syndrome risk."
 },
 {
  "id": "x4e3q19",
  "exam": 3,
  "topic": "Tonsillectomy bleeding",
  "type": "sata",
  "stem": "A nurse assesses a child several hours after a tonsillectomy. Which findings suggest hemorrhage? Select all that apply.",
  "options": [
   "Frequent swallowing",
   "Increasing pulse and respiratory rates",
   "A pain rating of 4 that is relieved by the ice collar",
   "Restlessness and anxiety",
   "Vomiting bright-red blood"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "rationale": "Frequent swallowing (the earliest sign), rising pulse and respirations, restlessness, and vomiting bright-red blood all indicate post-tonsillectomy bleeding (p.1113-1114). Mild pain relieved by an ice collar, the tempting distractor, is expected recovery rather than a sign of hemorrhage."
 },
 {
  "id": "x4e3q20",
  "exam": 3,
  "topic": "Strep pharyngitis",
  "type": "mcq",
  "stem": "A child has a positive rapid antigen test for group A beta-hemolytic streptococcal (GABHS) pharyngitis and is prescribed penicillin. What is the most important teaching point?",
  "options": [
   "Stop the antibiotic once the sore throat improves",
   "Complete the entire antibiotic course to help prevent rheumatic fever and glomerulonephritis",
   "Antibiotics are optional because strep throat is usually viral",
   "Gargling with salt water can replace the antibiotic"
  ],
  "correct": [
   1
  ],
  "rationale": "The full antibiotic course must be completed because untreated GABHS can lead to rheumatic fever and acute glomerulonephritis (p.1113-1114; slides). Stopping early when symptoms improve, the tempting distractor, leaves residual strep and raises the risk of these nonsuppurative complications, and salt-water gargles are only comfort measures."
 },
 {
  "id": "x4e3q21",
  "exam": 3,
  "topic": "Impetigo",
  "type": "mcq",
  "stem": "A school-age child has honey-colored crusted lesions clustered around the mouth and nose. Which condition does the nurse suspect, and what is a key instruction?",
  "options": [
   "Varicella; keep the child home until all lesions have appeared",
   "Contact dermatitis; apply a topical corticosteroid",
   "Impetigo; it is highly contagious, so apply mupirocin and the child may return to activity once lesions crust over",
   "Tinea corporis; treat with an oral antifungal for several months"
  ],
  "correct": [
   2
  ],
  "rationale": "Honey-colored crusts are classic for impetigo, which is highly contagious; treatment is mupirocin (Bactroban) ointment, and the child returns to activity once lesions crust over (slides). Varicella, the tempting distractor, produces crops of vesicles with fever rather than honey-colored crusts, and impetigo is bacterial, so an antifungal is inappropriate."
 },
 {
  "id": "x4e3q22",
  "exam": 3,
  "topic": "Tinea capitis",
  "type": "mcq",
  "stem": "A child is diagnosed with tinea capitis. Which treatment does the nurse anticipate?",
  "options": [
   "Antifungal shampoo and topical antifungal agents",
   "Permethrin shampoo and daily nit removal",
   "Mupirocin ointment applied twice daily",
   "Oral acyclovir for 7 to 10 days"
  ],
  "correct": [
   0
  ],
  "rationale": "Tinea capitis and pedis are fungal infections treated with antifungal shampoos and lotions (slides). Permethrin and nit removal, the tempting distractor, treat pediculosis rather than a fungus; mupirocin treats bacterial impetigo, and acyclovir treats viral infections."
 },
 {
  "id": "x4e3q23",
  "exam": 3,
  "topic": "Mumps",
  "type": "mcq",
  "stem": "A child has swelling in front of and below the ear that obscures the angle of the jaw, with pain on chewing. Which nursing measure is appropriate for suspected mumps?",
  "options": [
   "Encourage citrus juices and sour candies to keep the mouth moist",
   "Place the child in airborne isolation in a negative-pressure room",
   "Apply warm compresses and offer a high-acid diet to stimulate saliva",
   "Use droplet precautions and offer a soft diet, avoiding sour or acidic foods"
  ],
  "correct": [
   3
  ],
  "rationale": "Mumps (parotitis) spreads by droplet and is managed with droplet precautions and a soft, bland diet; sour or acidic foods stimulate the painful parotid gland and are avoided (p.1228). Offering citrus or sour foods, the tempting distractor, worsens the pain, and mumps requires droplet rather than airborne precautions."
 },
 {
  "id": "x4e3q24",
  "exam": 3,
  "topic": "Pediculosis policy",
  "type": "mcq",
  "stem": "A school nurse finds live lice on a student. Which action is correct?",
  "options": [
   "Screen the entire classroom immediately for lice",
   "Treat with permethrin shampoo and teach the family not to share combs, hats, or brushes; the child does not need to be sent home from school",
   "Report the case to public health as a communicable disease outbreak",
   "Keep the child out of school for two weeks until all nits are gone"
  ],
  "correct": [
   1
  ],
  "rationale": "Pediculosis is treated with permethrin shampoo and prevention teaching such as not sharing combs, hats, or helmets; it is not classified as a communicable disease, and the child should not be sent home or excluded (slides). Classroom-wide screening and prolonged exclusion, the tempting distractors, are not recommended because lice require direct contact to spread."
 },
 {
  "id": "x4e3q25",
  "exam": 3,
  "topic": "Pediculosis home care",
  "type": "sata",
  "stem": "A nurse teaches parents home management of pediculosis (head lice). Which instructions are correct? Select all that apply.",
  "options": [
   "Apply permethrin shampoo as directed",
   "Wash bedding, clothing, and washable toys in hot water",
   "Seal items that cannot be washed in plastic bags for about two weeks",
   "Shave the child's head to remove all nits at once",
   "Remove nits from the hair daily"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Permethrin shampoo, hot-water laundering, bagging non-washable items for about two weeks, and daily nit removal are all correct (slides). Shaving the head, the tempting distractor, is unnecessary and traumatizing because combing and manual nit removal are sufficient."
 },
 {
  "id": "x4e3q26",
  "exam": 3,
  "topic": "Increased ICP",
  "type": "mcq",
  "stem": "A school-age child with a head injury is developing signs of increased intracranial pressure. Which nursing action is appropriate?",
  "options": [
   "Position the child flat with the neck flexed toward the chest",
   "Keep the head of the bed elevated (semi-Fowler) with the head midline",
   "Encourage the child to cough and deep-breathe vigorously every hour",
   "Administer rapid intravenous fluid boluses to maintain perfusion"
  ],
  "correct": [
   1
  ],
  "rationale": "Semi-Fowler positioning with the head midline promotes venous drainage and lowers ICP (p.1400-1402). Neck flexion, vigorous coughing and straining, and rapid IV fluids, the tempting distractors, all raise ICP, and jugular compression and overhydration must be avoided."
 },
 {
  "id": "x4e3q27",
  "exam": 3,
  "topic": "ICP late signs",
  "type": "sata",
  "stem": "A nurse monitors a child for late signs of increased intracranial pressure. Which findings indicate a late, ominous change? Select all that apply.",
  "options": [
   "Bradycardia",
   "Mild headache and irritability",
   "Rising blood pressure with a widening pulse pressure",
   "A fixed, dilated pupil",
   "Irregular or decreased respirations"
  ],
  "correct": [
   0,
   2,
   3,
   4
  ],
  "rationale": "Late signs from brainstem compression (Cushing's triad) include bradycardia, hypertension with a widening pulse pressure, irregular or decreased respirations, and a fixed dilated pupil (p.1400-1402). Headache and irritability, the tempting distractor, are early signs rather than late ones."
 },
 {
  "id": "x4e3q28",
  "exam": 3,
  "topic": "Meningitis precautions",
  "type": "mcq",
  "stem": "A child is admitted with suspected bacterial meningitis. Which infection-control action is correct?",
  "options": [
   "No precautions are needed once antibiotics have been ordered",
   "Contact precautions until the rash resolves",
   "Droplet (respiratory) precautions maintained until 24 hours after antibiotics are started",
   "Airborne precautions for the entire hospital stay"
  ],
  "correct": [
   2
  ],
  "rationale": "Bacterial meningitis requires droplet or respiratory precautions maintained for 24 hours after antibiotics begin (p.1407-1409; slides). Dropping precautions when antibiotics are merely ordered, the tempting distractor, is unsafe because the child remains infectious until 24 hours of therapy, and airborne precautions are not required for typical bacterial meningitis."
 },
 {
  "id": "x4e3q29",
  "exam": 3,
  "topic": "Meningitis care",
  "type": "sata",
  "stem": "A nurse plans care for a child with bacterial meningitis. Which interventions are appropriate? Select all that apply.",
  "options": [
   "Minimize environmental stimulation and dim the lights",
   "Monitor for increased ICP such as rising blood pressure and a decreasing pulse",
   "Place the child in high-Fowler position and encourage neck-flexion exercises",
   "Position the child comfortably without a pillow and avoid flexing the neck",
   "Administer dexamethasone as ordered to reduce inflammation"
  ],
  "correct": [
   0,
   1,
   3,
   4
  ],
  "rationale": "Reducing stimulation and light, monitoring for ICP changes, positioning without a pillow while avoiding neck flexion, and giving dexamethasone are all correct (p.1407-1409; slides). Encouraging neck flexion, the tempting distractor, is contraindicated because it worsens pain from meningeal irritation and is used only as an assessment sign (Brudzinski), not as an exercise."
 },
 {
  "id": "x4e3q30",
  "exam": 3,
  "topic": "Status epilepticus",
  "type": "mcq",
  "stem": "A child has been seizing continuously for more than 30 minutes. Which medication does the nurse anticipate administering for this emergency?",
  "options": [
   "Oral ethosuximide",
   "Intravenous lorazepam (Ativan) or diazepam (Valium)",
   "Oral valproic acid",
   "Intramuscular phenobarbital as the first choice"
  ],
  "correct": [
   1
  ],
  "rationale": "Status epilepticus is treated first-line with an IV benzodiazepine, either lorazepam or diazepam (p.1410-1418; slides). Oral maintenance drugs such as ethosuximide or valproic acid, the tempting distractors, cannot be given during an active seizure and are not emergency agents."
 },
 {
  "id": "x4e3q31",
  "exam": 3,
  "topic": "Seizure precautions",
  "type": "sata",
  "stem": "A nurse implements seizure precautions for a hospitalized school-age child. Which actions are appropriate? Select all that apply.",
  "options": [
   "Keep suction and oxygen readily available at the bedside",
   "Turn the child to the side if a seizure occurs",
   "Pad the side rails and keep the bed in the lowest position",
   "Insert a padded tongue blade if the jaw clenches",
   "Do not restrain the child during the seizure"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Suction and oxygen at the bedside, side-lying positioning, padded rails with a low bed, and never restraining are correct seizure precautions (p.1410-1418; slides). Inserting anything into the mouth, including a padded tongue blade, the classic distractor, is contraindicated because it can cause injury or airway obstruction."
 },
 {
  "id": "x4e3q32",
  "exam": 3,
  "topic": "Absence seizure",
  "type": "mcq",
  "stem": "A teacher reports that a 9-year-old girl has brief episodes of staring and rhythmic blinking that last a few seconds, with no memory of them afterward. Which type of seizure does the nurse suspect?",
  "options": [
   "Tonic-clonic seizure with a prolonged postictal phase",
   "Complex febrile seizure",
   "Absence (petit mal) seizure",
   "Status epilepticus"
  ],
  "correct": [
   2
  ],
  "rationale": "Brief staring spells with no aura or postictal state, most common in school-age girls, describe absence (petit mal) seizures (p.1410-1418; slides). Tonic-clonic seizures, the tempting distractor, involve stiffening and jerking, cyanosis, and a postictal sleep phase rather than brief unremembered staring."
 },
 {
  "id": "x4e3q33",
  "exam": 3,
  "topic": "Antiepileptic teaching",
  "type": "mcq",
  "stem": "A parent of a child with epilepsy asks about the antiepileptic medication. Which instruction is most important?",
  "options": [
   "Never stop the medication abruptly; it must be tapered to avoid triggering seizures",
   "Stop the drug as soon as the child has been seizure-free for two weeks",
   "Double the dose if a seizure occurs",
   "Give the medication only on school days"
  ],
  "correct": [
   0
  ],
  "rationale": "Antiepileptics are continued while the child is seizure-free for 2 to 3 years and are never stopped abruptly, because sudden withdrawal can precipitate seizures or status epilepticus (p.1410-1418; slides). Stopping after two seizure-free weeks, the tempting distractor, is dangerous, as are doubling doses or skipping days."
 },
 {
  "id": "x4e3q34",
  "exam": 3,
  "topic": "Hypertension screening",
  "type": "mcq",
  "stem": "A nurse measures blood pressure in a 10-year-old during a sports physical. Which practice ensures an accurate reading and correct diagnosis of hypertension?",
  "options": [
   "Use any available cuff as long as it fits on the arm",
   "Diagnose hypertension from a single elevated reading",
   "Use a small cuff to make the reading easier to hear",
   "Use a cuff whose bladder is about 40% of the upper-arm circumference and confirm elevation on 3 readings at 3 visits"
  ],
  "correct": [
   3
  ],
  "rationale": "Correct cuff size (bladder about 40% of the upper-arm circumference) and confirmation with 3 readings on 3 separate visits are required before diagnosing hypertension (p.1173-1174). A too-small cuff, the tempting distractor, falsely raises the reading, and a single elevated value is insufficient for diagnosis."
 },
 {
  "id": "x4e3q35",
  "exam": 3,
  "topic": "Glomerulonephritis",
  "type": "mcq",
  "stem": "A 7-year-old is admitted with suspected acute poststreptococcal glomerulonephritis. Which finding is the hallmark of this condition?",
  "options": [
   "Massive proteinuria with generalized pitting edema and a normal blood pressure",
   "Tea-colored (cola-colored) urine with gross hematuria and hypertension",
   "Currant-jelly stools and a sausage-shaped abdominal mass",
   "Clear, dilute urine with a low specific gravity"
  ],
  "correct": [
   1
  ],
  "rationale": "Gross hematuria producing tea or cola-colored urine with hypertension from hypervolemia is the hallmark of acute glomerulonephritis, appearing about 7 to 14 days after strep (p.1323-1325; slides). Massive proteinuria with profound edema, the tempting distractor, describes nephrotic syndrome rather than glomerulonephritis, in which proteinuria is comparatively mild."
 },
 {
  "id": "x4e3q36",
  "exam": 3,
  "topic": "Glomerulonephritis care",
  "type": "sata",
  "stem": "A nurse cares for a child with acute poststreptococcal glomerulonephritis. Which interventions are priorities? Select all that apply.",
  "options": [
   "Monitor blood pressure closely",
   "Obtain daily weights",
   "Maintain strict intake and output",
   "Encourage a high-sodium, high-fluid diet",
   "Withhold all antibiotics because the infection is already over"
  ],
  "correct": [
   0,
   1,
   2
  ],
  "rationale": "Close BP monitoring, daily weights, and strict intake and output are priorities because of fluid overload and hypertension (p.1323-1325; slides). A high-sodium, high-fluid diet, the tempting distractor, is wrong because sodium and fluids are restricted, and penicillin is still given to clear residual strep, so withholding antibiotics is incorrect."
 },
 {
  "id": "x4e3q37",
  "exam": 3,
  "topic": "Hemolytic-uremic syndrome",
  "type": "mcq",
  "stem": "A nurse teaches parents about preventing hemolytic-uremic syndrome (HUS). Which statement is accurate?",
  "options": [
   "HUS is caused by a group A streptococcal throat infection",
   "Antidiarrheal (antimotility) medications should be given at the first sign of diarrhea",
   "Most cases follow E. coli infection, so cook ground beef thoroughly and practice hand hygiene",
   "It is prevented by completing a full course of antibiotics for any diarrhea"
  ],
  "correct": [
   2
  ],
  "rationale": "About 90% of HUS cases follow E. coli infection, often from undercooked ground beef, so prevention emphasizes thorough cooking and hand hygiene (p.1330; slides). HUS is not caused by strep throat, antimotility drugs are avoided because they prolong toxin exposure, and antibiotics are controversial because they may worsen toxin release, making those options distractors."
 },
 {
  "id": "x4e3q38",
  "exam": 3,
  "topic": "Appendicitis",
  "type": "mcq",
  "stem": "A school-age child with appendicitis suddenly reports that the severe abdominal pain has disappeared. What is the nurse's priority interpretation?",
  "options": [
   "This sudden relief may indicate the appendix has ruptured; notify the provider immediately",
   "The child is improving and can be prepared for discharge",
   "The pain relief means the appendix has healed on its own",
   "The child should now be offered a full meal"
  ],
  "correct": [
   0
  ],
  "rationale": "Sudden relief of pain in appendicitis may signal rupture, which is followed by worsening peritonitis, and must be reported at once (slides). Interpreting the relief as improvement or healing, the tempting distractors, is dangerous and could delay emergency surgery; the child should remain NPO rather than be fed."
 },
 {
  "id": "x4e3q39",
  "exam": 3,
  "topic": "Pain assessment",
  "type": "mcq",
  "stem": "Which pain-assessment tool is most appropriate for an alert 11-year-old who understands numbers?",
  "options": [
   "FLACC behavioral scale",
   "Poker Chip Tool",
   "A developmental milestone checklist",
   "The numeric (0 to 10) rating scale"
  ],
  "correct": [
   3
  ],
  "rationale": "Older school-age children who grasp numbers are best assessed with a numeric 0-to-10 rating scale (p.1087-1094). The FLACC scale, the tempting distractor, is a behavioral tool for nonverbal or young children, and the Poker Chip Tool is used for younger school-age children; both underuse this child's ability to self-report numerically."
 },
 {
  "id": "x4e3q40",
  "exam": 3,
  "topic": "EMLA and analgesia",
  "type": "mcq",
  "stem": "A nurse plans to apply EMLA cream before a venipuncture and to manage a school-age child's pain. Which action is correct?",
  "options": [
   "Apply EMLA immediately before the needle stick for instant numbing",
   "Apply EMLA at least 1 hour before the procedure and avoid aspirin for pain",
   "Give aspirin for pain because it is safe and effective in children",
   "Use intramuscular injections as the preferred route for analgesia"
  ],
  "correct": [
   1
  ],
  "rationale": "EMLA must be applied at least 1 hour before a procedure (2 to 3 hours before deeper procedures), and aspirin is avoided in children because of Reye syndrome risk (p.1087-1094). Applying EMLA immediately before, the tempting distractor, gives it no time to work, and IM injections are avoided because they are painful and feared."
 },
 {
  "id": "x4e3q41",
  "exam": 3,
  "topic": "Preadolescent immunizations",
  "type": "sata",
  "stem": "A nurse reviews the immunizations recommended at the 11- to 12-year preadolescent visit. Which vaccines are given at this visit? Select all that apply.",
  "options": [
   "First dose of the primary DTaP series",
   "Tdap booster",
   "HPV series",
   "Rotavirus vaccine",
   "MenACWY (meningococcal conjugate)"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "rationale": "The 11- to 12-year visit includes Tdap, the HPV series, and MenACWY, with a MenACWY booster at age 16 (p.958-961; slides). DTaP, the tempting distractor, is given to children under 7 years rather than as a primary series at 11 to 12, and rotavirus is an infant vaccine; both are out of place at this visit."
 },
 {
  "id": "x4e3q42",
  "exam": 3,
  "topic": "HPV vaccine",
  "type": "mcq",
  "stem": "A parent asks why the HPV vaccine is recommended at age 11 to 12 rather than later. What is the nurse's best response?",
  "options": [
   "It is only given this early if the child is already sexually active",
   "It must be given before age 9 or it will not be effective",
   "Giving it at 11 to 12 produces a strong, long-lasting antibody response and protects the child before exposure to the virus",
   "It is a live vaccine that cannot be given once the child is a teenager"
  ],
  "correct": [
   2
  ],
  "rationale": "The preteen immune system mounts the strongest, longest-lasting response, and vaccinating early ensures protection before HPV exposure (slides; p.958-961). It is not reserved for sexually active children, has no age-9 efficacy cutoff, and is not a live vaccine, making those options distractors."
 },
 {
  "id": "x4e3q43",
  "exam": 3,
  "topic": "Booster and seat belt",
  "type": "sata",
  "stem": "A nurse teaches the parents of an 8-year-old about vehicle safety. Which statements are correct? Select all that apply.",
  "options": [
   "Keep the child in a booster seat until the seat belt fits properly",
   "A lap belt fits properly when it lies across the stomach",
   "The shoulder belt should lie snugly across the shoulder and chest, not across the neck or face",
   "The child should still ride in the back seat because it is safer there",
   "A child can move to the seat belt alone as soon as they turn 8, regardless of size"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "rationale": "A booster is used until the belt fits properly, the shoulder belt crosses the shoulder and chest (not the neck or face), and the child rides in the back seat (slides). A properly fitting lap belt lies across the upper thighs, not the stomach, the tempting distractor, and readiness depends on size and fit rather than simply turning 8."
 },
 {
  "id": "x4e3q44",
  "exam": 3,
  "topic": "Injury prevention",
  "type": "mcq",
  "stem": "A nurse provides injury-prevention teaching to the parents of a 9-year-old. Which instruction is correct?",
  "options": [
   "Store firearms locked and unloaded, with ammunition stored separately",
   "Helmets are only necessary for bicycles, not scooters or skateboards",
   "A helmet is optional if the child rides only in the driveway",
   "Firearms may be kept loaded if stored on a high shelf"
  ],
  "correct": [
   0
  ],
  "rationale": "Firearms should be stored locked and unloaded with ammunition kept separately (p.871-872; slides). Helmets are needed for bikes, scooters, skateboards, and skating and prevent about 85% of head injuries, so limiting them to bicycles or calling them optional, the tempting distractors, is unsafe, and a loaded gun on a high shelf remains a hazard."
 },
 {
  "id": "x4e3q45",
  "exam": 3,
  "topic": "Safety guidance",
  "type": "sata",
  "stem": "A nurse gives anticipatory safety guidance for a school-age child. Which recommendations are appropriate? Select all that apply.",
  "options": [
   "Wear a helmet and protective gear for biking and skateboarding",
   "Take swimming lessons and always be supervised around water",
   "Use a mouth guard and face protection during contact sports",
   "Ride in the front seat now that the child is older",
   "If a permanent tooth is knocked out, place it in milk and go to the dentist or ED"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Helmets and protective gear, swimming lessons with supervision, mouth guards for contact sports, and preserving an avulsed permanent tooth in milk are all correct (slides; p.871-872). Moving to the front seat, the tempting distractor, is wrong because school-age children are still safest in the back seat."
 },
 {
  "id": "x4e3q46",
  "exam": 3,
  "topic": "Maltreatment reporting",
  "type": "sata",
  "stem": "A nurse suspects child maltreatment in a school-age patient. Which statements about the nurse's responsibilities are correct? Select all that apply.",
  "options": [
   "Nurses are mandatory reporters of suspected maltreatment",
   "Objective, measurable data are needed to support the report",
   "The nurse must obtain permission from the physician or family before reporting",
   "Neglect is a form of abuse that should be reported",
   "A gut feeling alone, without assessment, is sufficient to file a report"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Nurses are mandatory reporters, must document objective and measurable data, and must report neglect as a form of abuse (slides; p.1575-1582). Permission from a physician or family is not required, the tempting distractor, and reporting should be based on objective assessment rather than a gut feeling or bias alone."
 },
 {
  "id": "x4e3q47",
  "exam": 3,
  "topic": "Enuresis",
  "type": "mcq",
  "stem": "A nurse counsels the parents of a 7-year-old with primary nocturnal enuresis. Which intervention is appropriate?",
  "options": [
   "Have the child perform bladder-stretching exercises during the day",
   "Withhold privileges each time the child has a wet night to encourage control",
   "Limit fluids in the 2 hours before bedtime and consider a bedtime enuresis alarm",
   "Restrict all fluids throughout the entire day"
  ],
  "correct": [
   2
  ],
  "rationale": "Limiting evening fluids and using an enuresis alarm are appropriate multimodal measures, and desmopressin (DDAVP) is the drug of choice (p.1321). Bladder-stretching exercises, the tempting distractor, are actually harmful and not recommended; punishment is counterproductive, and total daytime fluid restriction is unnecessary and unsafe."
 },
 {
  "id": "x4e3q48",
  "exam": 3,
  "topic": "Asthma action plan",
  "type": "sata",
  "stem": "A nurse teaches a school-age child and family about an asthma action plan. Which statements are correct? Select all that apply.",
  "options": [
   "The daily controller inhaler can be used to stop a sudden asthma attack",
   "Albuterol is the rescue inhaler used for acute symptoms",
   "A green-zone peak flow (80 to 100%) means good control",
   "A yellow-zone peak flow (50 to 80%) means asthma is well controlled and needs no action",
   "Rinse the mouth after using an inhaled corticosteroid"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "rationale": "Albuterol is the rescue inhaler, the green zone (80 to 100%) indicates good control, and rinsing the mouth after an inhaled corticosteroid prevents thrush (p.1119, 1105). Using the daily controller to stop an acute attack, the tempting distractor, is wrong because rescue and controller inhalers are never interchanged, and the yellow zone (50 to 80%) signals caution rather than good control."
 },
 {
  "id": "x4e3q49",
  "exam": 3,
  "topic": "Health screenings",
  "type": "mcq",
  "stem": "A school nurse plans required school-age health screenings. Which screening is routinely performed in this age group?",
  "options": [
   "Newborn metabolic screening",
   "Blood lead level at every visit",
   "Denver II developmental screening for milestones",
   "Vision, hearing, scoliosis, and dental screenings"
  ],
  "correct": [
   3
  ],
  "rationale": "Routine school screenings for the school-age child include vision, hearing, scoliosis, and dental exams, along with annual and sports physicals (slides). Newborn metabolic screening, the tempting distractor, is done in the neonatal period, routine lead screening is a toddler measure, and the Denver II targets younger children."
 },
 {
  "id": "x4e3q50",
  "exam": 3,
  "topic": "Bullying",
  "type": "mcq",
  "stem": "A school nurse is concerned about bullying among students. Which statement reflects appropriate understanding for the school-age population?",
  "options": [
   "Bullying has no lasting effect on a school-age child's self-concept, so it can be ignored",
   "The nurse should watch for bullying and school problems, because peer acceptance is very important to the school-age child",
   "Bullying only becomes a concern after high school graduation",
   "Children who are bullied should simply be told to toughen up"
  ],
  "correct": [
   1
  ],
  "rationale": "Peer relationships and acceptance are central to the school-age child, so nurses watch for bullying and school problems that threaten self-concept (slides; p.862-877). Claiming bullying has no effect or telling a child to toughen up, the tempting distractors, dismisses a real threat to self-esteem, and bullying is notably prevalent in middle school rather than only after high school."
 },
 {
  "id": "x4e4q01",
  "exam": 4,
  "topic": "Growth & Development",
  "type": "mcq",
  "stem": "A nurse plans care for a 15-year-old facing a prolonged hospitalization. According to Erikson, which action best supports the adolescent's primary psychosocial task of identity versus role confusion?",
  "options": [
   "Limit visitors to immediate family to promote rest",
   "Discourage discussion of school so the teen can focus on recovery",
   "Encourage the teen to display personal posters, wear their own clothing, and have friends visit",
   "Make all treatment decisions with the parents to reduce the teen's stress"
  ],
  "correct": [
   2
  ],
  "rationale": "Identity vs role confusion is supported by preserving individuality and peer contact, so allowing own clothing, posters, and friend visits is correct (slide 7). Making decisions with the parents is the tempting distractor because it seems to reduce stress, but excluding the teen from decisions undermines the emerging autonomy and identity the task requires."
 },
 {
  "id": "x4e4q02",
  "exam": 4,
  "topic": "Cognitive Development",
  "type": "mcq",
  "stem": "When teaching a newly diagnosed 16-year-old to manage a chronic condition, which approach best reflects the adolescent's formal operational stage of thinking?",
  "options": [
   "Use only simple concrete demonstrations because abstract concepts are beyond them",
   "Frame the information around how the condition affects them today and let them reason through the consequences",
   "Rely on magical thinking and fantasy to explain the illness",
   "Teach the parents and expect them to relay the information"
  ],
  "correct": [
   1
  ],
  "rationale": "Formal operational teens use abstract and deductive reasoning and buy in when teaching addresses the here-and-now (how will this affect me today), so letting them reason through consequences is correct (slides 4,5,7). Concrete-only demonstration is the tempting distractor because it is useful, but it fits the school-age concrete operational child and underestimates adolescent cognition."
 },
 {
  "id": "x4e4q03",
  "exam": 4,
  "topic": "Moral Development",
  "type": "mcq",
  "stem": "An adolescent tells the nurse, 'I follow rules only when they seem fair and match what I believe is right.' This statement best reflects which level of moral development?",
  "options": [
   "Preconventional (obey to avoid punishment)",
   "Conventional (law-and-order, good boy / nice girl)",
   "Premoral (no sense of right or wrong)",
   "Postconventional (social contract and universal ethical principles)"
  ],
  "correct": [
   3
  ],
  "rationale": "Postconventional Level III begins after age 12 and involves social contract and internalized ethical principles, where rules are not absolute (p.786,897). The conventional level is the tempting distractor because it also involves rules, but it is the rigid law-and-order or approval-seeking morality of the school-age child, not this weighing of rules against personal principle."
 },
 {
  "id": "x4e4q04",
  "exam": 4,
  "topic": "Puberty",
  "type": "mcq",
  "stem": "The parents of a 12-year-old girl notice she is taller than her 12-year-old male cousin. Which response by the nurse about adolescent growth patterns is most accurate?",
  "options": [
   "Girls' growth spurt often begins as early as 10 years, before boys, so girls are frequently taller in early adolescence",
   "Boys always begin their growth spurt before girls",
   "Girls and boys grow at exactly the same rate throughout adolescence",
   "Girls continue growing until age 18, longer than boys"
  ],
  "correct": [
   0
  ],
  "rationale": "Girls' growth may begin as early as 10 years, often before boys, who catch up around 14 (slide 2, p.892-895). 'Girls grow until 18' is the tempting distractor because girls do start earlier, but they also finish earlier (around 15, within about 2 years of menarche), while boys grow until 17-18."
 },
 {
  "id": "x4e4q05",
  "exam": 4,
  "topic": "Eating Disorders",
  "type": "sata",
  "stem": "A nurse assesses a 15-year-old female with a suspected eating disorder. Which findings are recognized warning signs? Select all that apply.",
  "options": [
   "Hypertension",
   "Amenorrhea",
   "Bradycardia",
   "Cold intolerance with low body temperature",
   "Dry skin and brittle nails"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "rationale": "Warning signs include profound weight loss, amenorrhea, bradycardia, low temperature, hypotension, dry skin, thin hair, brittle nails, and cold intolerance (slide 3). Hypertension is the tempting distractor because it reads as a cardiovascular red flag, but these teens are hypotensive and bradycardic, not hypertensive."
 },
 {
  "id": "x4e4q06",
  "exam": 4,
  "topic": "Eating Disorders",
  "type": "mcq",
  "stem": "An adolescent being treated for anorexia nervosa tells the nurse she 'would be better off dead.' What is the nurse's priority action?",
  "options": [
   "Document the statement and continue the meal plan",
   "Initiate suicide precautions and ensure a safe environment",
   "Notify the dietitian to increase caloric intake",
   "Reassure the teen that her weight will improve with treatment"
  ],
  "correct": [
   1
  ],
  "rationale": "If a teen is suicidal, suicide precautions must be initiated immediately because safety is the priority (slide 3). Increasing caloric intake through the dietitian is the tempting distractor because refeeding is essential in anorexia, but an expressed death wish is an immediate life threat that takes precedence over nutrition."
 },
 {
  "id": "x4e4q07",
  "exam": 4,
  "topic": "Integumentary",
  "type": "mcq",
  "stem": "A 17-year-old female is prescribed isotretinoin for severe cystic acne. Which teaching point is most critical?",
  "options": [
   "Take the medication with a multivitamin containing vitamin A",
   "Expect improvement to be permanent after one week",
   "Use two reliable forms of contraception because the drug is highly teratogenic",
   "Combine it with oral tetracycline for a better effect"
  ],
  "correct": [
   2
  ],
  "rationale": "Isotretinoin is highly teratogenic and requires two forms of contraception if sexually active (slide 17, p.902). Combining it with tetracycline is the tempting distractor because tetracycline also treats acne, but that combination causes brain edema/pseudotumor cerebri and is contraindicated; supplemental vitamin A must also be avoided."
 },
 {
  "id": "x4e4q08",
  "exam": 4,
  "topic": "Integumentary",
  "type": "sata",
  "stem": "A nurse teaches an adolescent about isotretinoin therapy. Which statements should be included? Select all that apply.",
  "options": [
   "You can drink alcohol freely while on this medication",
   "Report any feelings of depression or thoughts of self-harm",
   "Take extra vitamin A supplements to boost the effect",
   "You may notice dryness of your lips, mouth, and eyes",
   "Apply sunscreen because your skin will be more sensitive to the sun"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "rationale": "Isotretinoin causes mucous-membrane and eye dryness, sun sensitivity, and an increased risk of depression/suicidal ideation that must be reported (slide 17). Taking extra vitamin A is the tempting distractor because isotretinoin is a vitamin A compound, but added vitamin A and beta-carotene increase toxicity; alcohol must also be avoided."
 },
 {
  "id": "x4e4q09",
  "exam": 4,
  "topic": "Integumentary",
  "type": "mcq",
  "stem": "An adolescent is prescribed oral tetracycline for moderate acne. Which instruction is correct?",
  "options": [
   "Take it with milk to reduce stomach upset",
   "Save leftover tablets for the next breakout",
   "Expect the acne to clear within 2 days",
   "Take the medication on an empty stomach, 2 hours before or after food"
  ],
  "correct": [
   3
  ],
  "rationale": "Tetracycline is taken on an empty stomach, 2 hours before or after food, and outdated tetracycline is toxic and must be discarded (p.900-902). Taking it with milk is the tempting distractor because it seems to ease GI upset, but dairy binds the drug and impairs absorption; acne improvement also takes 2-4 weeks, not 2 days."
 },
 {
  "id": "x4e4q10",
  "exam": 4,
  "topic": "Integumentary",
  "type": "mcq",
  "stem": "Which statement by a teenager using topical tretinoin (Retin-A) and benzoyl peroxide indicates a need for further teaching?",
  "options": [
   "I'll stop using them since my skin looks the same after five days",
   "I'll wear sunscreen because these products increase sun sensitivity",
   "Benzoyl peroxide may bleach my pillowcases and towels",
   "I should not squeeze or pick at the pimples"
  ],
  "correct": [
   0
  ],
  "rationale": "Improvement is not seen for 2-4 weeks, so stopping after five days reflects a misunderstanding that requires teaching (slide 16). The other statements are all accurate; the sunscreen statement is a tempting choice for 'error,' but tretinoin genuinely causes sun sensitivity, making the 'stop after five days' statement the one showing a knowledge gap."
 },
 {
  "id": "x4e4q11",
  "exam": 4,
  "topic": "Integumentary",
  "type": "sata",
  "stem": "A nurse provides acne self-care teaching to an adolescent. Which instructions are appropriate? Select all that apply.",
  "options": [
   "Wash your face daily, but avoid excessive scrubbing",
   "Apply greasy hair products and wear a tight sweatband during sports",
   "Do not squeeze or pop the comedones",
   "Expect immediate clearing within a few days",
   "Use a fresh cosmetic pad and non-oil soap"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Correct acne care includes gentle daily washing, not expressing comedones, and using fresh pads and non-oil soap (slide 16, p.900-902). Greasy hair products and tight sweatbands are the tempting distractor if a student forgets that added oils and friction aggravate lesions; results are also not immediate but take weeks."
 },
 {
  "id": "x4e4q12",
  "exam": 4,
  "topic": "Confidentiality",
  "type": "mcq",
  "stem": "A 16-year-old comes to the clinic with a parent. To best support confidentiality during the visit, the nurse should:",
  "options": [
   "Direct all questions to the parent to confirm accuracy",
   "Provide time to interview and teach the teen without the parent present",
   "Require the parent to remain for the entire visit",
   "Refuse to discuss any topic the parent has not approved"
  ],
  "correct": [
   1
  ],
  "rationale": "The adolescent should be interviewed and taught without the parent present so sensitive questions can be asked, with questions then directed to the teen when the parent returns (slide 7). Directing questions to the parent is the tempting distractor because it seems to ensure accuracy, but it discourages honest disclosure and undermines the teen's autonomy."
 },
 {
  "id": "x4e4q13",
  "exam": 4,
  "topic": "Consent",
  "type": "mcq",
  "stem": "A nurse prepares a 14-year-old for a procedure. Which statement about consent and assent is accurate?",
  "options": [
   "The 14-year-old can legally consent independently for all care",
   "Assent from the adolescent is unnecessary if the parent consents",
   "The adolescent can give assent, but parental consent is still legally required",
   "Only the parent's wishes matter until the teen turns 18"
  ],
  "correct": [
   2
  ],
  "rationale": "The age of assent ranges from 7 to 14 years, but parental consent is still required for treatment (slide 7). 'The teen can consent independently for all care' is the tempting distractor given adolescent autonomy, but assent is not the same as legal consent, which still rests with the parent."
 },
 {
  "id": "x4e4q14",
  "exam": 4,
  "topic": "Hospitalization",
  "type": "sata",
  "stem": "Which nursing actions promote identity and coping for a hospitalized adolescent? Select all that apply.",
  "options": [
   "Assign a room with other adolescents when possible",
   "Focus teaching on outcomes 20 years from now",
   "Allow the teen to wear personal clothing and keep posters",
   "Prohibit friends from visiting to prevent overstimulation",
   "Include the adolescent in the decision about a parent rooming-in"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Adolescents benefit from rooming with peers, personalizing their space, and sharing in the rooming-in decision (slide 7). Teaching focused on distant future outcomes is the tempting distractor because future orientation is a formal-operational trait, but buy-in comes from the here-and-now; peer visits should be encouraged, not prohibited."
 },
 {
  "id": "x4e4q15",
  "exam": 4,
  "topic": "Injury Prevention",
  "type": "mcq",
  "stem": "A nurse develops an injury-prevention program for adolescents. Which topic should receive the highest priority as the leading cause of death in this age group?",
  "options": [
   "Sunburn prevention",
   "Ear-piercing infection prevention",
   "Dental caries prevention",
   "Motor-vehicle crash safety"
  ],
  "correct": [
   3
  ],
  "rationale": "Motor-vehicle crashes are the number-one cause of death in adolescents, so crash safety is the priority (slide 12, p.897-898). Ear-piercing infection prevention is a tempting distractor because piercings can cause staph/strep infection, but that is a health-promotion issue, not the leading cause of death."
 },
 {
  "id": "x4e4q16",
  "exam": 4,
  "topic": "Firearm Safety",
  "type": "mcq",
  "stem": "When counseling a family about firearm safety with a teenager in the home, the nurse should emphasize:",
  "options": [
   "Store firearms locked and keep ammunition locked separately",
   "Keep a loaded firearm accessible for emergencies",
   "Teach the teen the gun's location in case of intruders",
   "Store the gun loaded but unlocked in a bedside drawer"
  ],
  "correct": [
   0
  ],
  "rationale": "Firearms should be locked with ammunition stored separately (slide 15, p.898). Keeping a loaded firearm accessible is the tempting distractor because it appeals to home protection, but ready access sharply raises adolescent risk of injury, homicide, and suicide, and 4.6 million children live with an unlocked, loaded firearm."
 },
 {
  "id": "x4e4q17",
  "exam": 4,
  "topic": "Substance Use",
  "type": "sata",
  "stem": "A nurse teaches adolescents about substance use. Which statements are accurate? Select all that apply.",
  "options": [
   "Naloxone has no role in opioid overdose",
   "Vaping is not a safer alternative to cigarettes",
   "Nicotine is not addictive when it is vaped",
   "Some drugs, like crack or heroin, can lead to loss of control after only one use",
   "Never combine substance use with driving"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "rationale": "Vaping is not safer, highly addictive drugs can hook a user after a single use, and substances must never be combined with driving (slide 13). 'Nicotine is not addictive when vaped' is the tempting distractor because vaping is often marketed as harmless, but nicotine is addictive in any form and naloxone is taught for opioid overdose."
 },
 {
  "id": "x4e4q18",
  "exam": 4,
  "topic": "Head Injury",
  "type": "mcq",
  "stem": "An adolescent is brought to the ED after a football tackle with a possible head injury. What is the nurse's priority action?",
  "options": [
   "Elicit the gag reflex to assess cranial nerves",
   "Immobilize the head and neck until a cervical-spine injury is ruled out",
   "Have the teen sit up and walk to assess balance",
   "Apply a warm compress to the neck"
  ],
  "correct": [
   1
  ],
  "rationale": "Always assume a cervical-spine injury and immobilize the head and neck until it is ruled out (slides 10,11). Having the teen sit up and walk is the tempting distractor because it seems to assess neurologic status, but moving the teen before the C-spine is cleared could worsen an unstable spinal injury."
 },
 {
  "id": "x4e4q19",
  "exam": 4,
  "topic": "Head Injury",
  "type": "mcq",
  "stem": "After a head injury, an adolescent has clear drainage from the nose that tests positive for glucose. The nurse recognizes this most likely indicates:",
  "options": [
   "Normal nasal mucus from a cold",
   "Allergic rhinitis",
   "Cerebrospinal fluid leak",
   "Ruptured eardrum drainage"
  ],
  "correct": [
   2
  ],
  "rationale": "Clear rhinorrhea or otorrhea that is glucose-positive indicates a CSF leak, which opens the CNS to infection and must be reported immediately (slide 11). Nasal mucus from a cold is the tempting distractor because the drainage is clear, but mucus from rhinitis or eardrum-rupture drainage tests glucose-negative, whereas CSF is glucose-positive."
 },
 {
  "id": "x4e4q20",
  "exam": 4,
  "topic": "Head Injury",
  "type": "sata",
  "stem": "Which interventions are appropriate in caring for an adolescent after a head injury? Select all that apply.",
  "options": [
   "Encourage vigorous activity to prevent stiffness",
   "Perform frequent neurologic checks of pupils and level of consciousness",
   "Keep the environment bright and stimulating",
   "Keep the head of the bed elevated and midline",
   "Report clear fluid draining from the nose or ears immediately"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "rationale": "Care includes frequent neuro checks, keeping the head of the bed elevated and midline to reduce ICP, and reporting clear nasal or ear drainage immediately (slide 11). A bright, stimulating environment is the tempting distractor because it seems to promote orientation, but a safe, calm environment and rest are needed for an irritable, injured brain."
 },
 {
  "id": "x4e4q21",
  "exam": 4,
  "topic": "Scoliosis",
  "type": "mcq",
  "stem": "During a sports physical, the nurse asks a 13-year-old to bend forward at the waist with arms hanging down. This assessment screens for:",
  "options": [
   "Hip dysplasia",
   "Muscular dystrophy",
   "Kyphosis only",
   "Scoliosis"
  ],
  "correct": [
   3
  ],
  "rationale": "The forward-bend (dive) test screens for the lateral spinal curvature of scoliosis (slide 23). 'Kyphosis only' is the tempting distractor because bending does reveal posture, but the dive test specifically detects the lateral S-curve of scoliosis, not an isolated kyphosis."
 },
 {
  "id": "x4e4q22",
  "exam": 4,
  "topic": "Scoliosis",
  "type": "mcq",
  "stem": "A nurse teaches the parents of an adolescent newly fitted with a scoliosis brace. Which statement is most accurate?",
  "options": [
   "Adherence can be difficult because the brace may make the teen feel different from peers",
   "The brace will straighten the spine permanently within one week",
   "Bracing is used only for curves greater than 40 degrees",
   "Puberty growth will decrease the spinal curvature"
  ],
  "correct": [
   0
  ],
  "rationale": "Brace adherence is challenging because it can make the teen feel different from peers, a key body-image concern (slide 23). 'Puberty growth will decrease the curvature' is the tempting distractor because growth is central to scoliosis, but puberty growth actually increases the curve, and curves over 40 degrees usually require surgical fusion rather than bracing."
 },
 {
  "id": "x4e4q23",
  "exam": 4,
  "topic": "Scoliosis",
  "type": "sata",
  "stem": "Which interventions are included in postoperative care after spinal fusion for scoliosis? Select all that apply.",
  "options": [
   "Log-roll the adolescent when repositioning",
   "Keep the teen flat and still, avoiding any dangling at the bedside",
   "Encourage incentive spirometry and deep breathing",
   "Begin a full regular diet immediately after surgery",
   "Perform neurovascular checks of the extremities"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Post-fusion care includes log-rolling, incentive spirometry, and neurovascular checks of the extremities (slide 24). 'Keep the teen flat, no dangling' is the tempting distractor because it seems protective of the fusion, but the RN supports the teen to dangle at the edge of the bed to maintain alignment and manage orthostasis, and the teen stays NPO until bowel sounds return."
 },
 {
  "id": "x4e4q24",
  "exam": 4,
  "topic": "Mental Health",
  "type": "mcq",
  "stem": "An adolescent appears withdrawn and states, 'Nothing ever goes right for me.' Which is the most therapeutic nursing response?",
  "options": [
   "Everyone feels that way sometimes; you'll be fine",
   "It sounds like you're having a difficult time",
   "Why do you feel that way? You have so much going for you",
   "Let's talk about something more positive"
  ],
  "correct": [
   1
  ],
  "rationale": "Open-ended reflection ('it sounds like you're having a difficult time') invites the teen to share and screens for depression (slides 5,9). 'Everyone feels that way; you'll be fine' is the tempting distractor because it sounds reassuring, but it minimizes the teen's feelings and blocks further disclosure."
 },
 {
  "id": "x4e4q25",
  "exam": 4,
  "topic": "Mental Health",
  "type": "mcq",
  "stem": "Which finding in an adolescent should most alert the nurse to possible self-harm (cutting)?",
  "options": [
   "Increased time spent with friends after school",
   "A new interest in a school sports team",
   "Wearing long sleeves and pants in warm weather with unexplained injuries",
   "Occasional acne on the face and back"
  ],
  "correct": [
   2
  ],
  "rationale": "Cutting warning signs include unusual injuries with a mismatched history, long sleeves or pants in warm weather, bloodstains, and social isolation (slide 9). Increased time with friends is a tempting distractor if a student equates any behavior change with concern, but peer involvement and new activities are healthy signs, whereas concealment in warm weather flags self-harm."
 },
 {
  "id": "x4e4q26",
  "exam": 4,
  "topic": "Mental Health",
  "type": "sata",
  "stem": "A nurse screens adolescents for depression and suicide risk. Which factors increase risk? Select all that apply.",
  "options": [
   "Low self-esteem",
   "Consistent participation in a supportive peer group",
   "Social isolation and loss of interest in activities",
   "Regular family meals and open communication",
   "Access to an unlocked, loaded firearm"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Low self-esteem is the largest contributor to depression, and social isolation, anhedonia, and firearm access raise suicide risk (slides 5,9,15). A supportive peer group is the tempting distractor because peer influence is powerful in adolescence, but supportive relationships and family meals are protective, not risk factors."
 },
 {
  "id": "x4e4q27",
  "exam": 4,
  "topic": "Obesity",
  "type": "mcq",
  "stem": "A nurse counsels an obese 15-year-old female. Beyond cardiovascular risk, the nurse recognizes this teen is at increased risk for:",
  "options": [
   "Precocious puberty",
   "Delayed epiphyseal closure",
   "Scoliosis",
   "Suicide"
  ],
  "correct": [
   3
  ],
  "rationale": "The suicide rate is higher in obese female adolescents, reflecting the impact on self-esteem (slide 3, p.903-904). Scoliosis is a tempting distractor because it is an adolescent musculoskeletal concern, but it is unrelated to obesity here; the key added risk is the mental-health link to suicide."
 },
 {
  "id": "x4e4q28",
  "exam": 4,
  "topic": "Hypertension",
  "type": "mcq",
  "stem": "An adolescent's blood pressure is above the 95th percentile at today's visit. What is the appropriate nursing understanding regarding diagnosis of hypertension?",
  "options": [
   "Hypertension is confirmed with elevated readings on two consecutive visits",
   "One elevated reading confirms the diagnosis",
   "Diagnosis requires three readings at three separate times, as in younger children",
   "Blood pressure is not routinely measured in adolescents"
  ],
  "correct": [
   0
  ],
  "rationale": "In adolescents, hypertension is diagnosed with a BP above the 95th percentile on two consecutive readings at different visits (slides 21,22). 'Three readings at three separate times' is the tempting distractor because it is a real criterion, but it applies to younger children; the adolescent standard is two consecutive readings."
 },
 {
  "id": "x4e4q29",
  "exam": 4,
  "topic": "Hypertension",
  "type": "sata",
  "stem": "A nurse teaches an adolescent with primary hypertension about lifestyle modifications. Which should be included? Select all that apply.",
  "options": [
   "Begin antihypertensive medication before trying lifestyle change",
   "Increase regular physical exercise",
   "Add extra salt to meals to maintain energy",
   "Abstain from alcohol and tobacco",
   "Get adequate sleep and eat a healthy diet"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "rationale": "Primary hypertension is first treated with lifestyle change: exercise, weight reduction, adequate sleep, healthy diet, and abstaining from alcohol and tobacco (slide 22). Starting medication first is the tempting distractor because medications lower BP, but drugs are added only if lifestyle changes fail; adding salt is also counterproductive."
 },
 {
  "id": "x4e4q30",
  "exam": 4,
  "topic": "Immunizations",
  "type": "mcq",
  "stem": "A 16-year-old presents for a well visit. Which immunization is specifically recommended at this age?",
  "options": [
   "First DTaP dose",
   "MenACWY booster dose",
   "Rotavirus vaccine",
   "MMR given at birth"
  ],
  "correct": [
   1
  ],
  "rationale": "The MenACWY booster is given at age 16 (the series started at 11-12), with MenB recommended at 16-18 (slide 6, p.901). 'First DTaP dose' is the tempting distractor because DTaP/Tdap relate to the adolescent visit, but DTaP is given before age 7; adolescents receive the Tdap booster, not a first DTaP."
 },
 {
  "id": "x4e4q31",
  "exam": 4,
  "topic": "Immunizations",
  "type": "mcq",
  "stem": "A 15-year-old never received the HPV vaccine. What is the nurse's best action?",
  "options": [
   "Tell the teen it is too late to benefit",
   "Wait until age 18 to give the series",
   "Encourage catch-up HPV vaccination now",
   "State the vaccine is only for females"
  ],
  "correct": [
   2
  ],
  "rationale": "HPV catch-up is encouraged if the vaccine was not received (routinely recommended at ages 9-12) (slide 6). 'Wait until age 18' is the tempting distractor because it sounds cautious, but delaying leaves the teen unprotected; catch-up should begin now for all adolescents."
 },
 {
  "id": "x4e4q32",
  "exam": 4,
  "topic": "Immunizations",
  "type": "sata",
  "stem": "Which immunizations are part of routine adolescent (12-18 y) health promotion? Select all that apply.",
  "options": [
   "Rotavirus series",
   "Annual influenza vaccine",
   "MenACWY booster at 16 years",
   "HPV series if not already received",
   "MenB vaccine at 16-18 years"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "rationale": "Adolescents should receive annual influenza, HPV catch-up, the MenACWY booster at 16, and MenB at 16-18 (slide 6, p.901). Rotavirus is the tempting distractor because it is a real vaccine, but it is an infant series completed long before adolescence."
 },
 {
  "id": "x4e4q33",
  "exam": 4,
  "topic": "Precocious Puberty",
  "type": "mcq",
  "stem": "A child is receiving leuprolide acetate (Lupron) for precocious puberty. The nurse explains the primary purpose of this medication is to:",
  "options": [
   "Permanently stop the child's future fertility",
   "Accelerate growth so the child reaches adult height sooner",
   "Replace deficient growth hormone",
   "Halt sexual maturation to prevent early epiphyseal closure and preserve adult height"
  ],
  "correct": [
   3
  ],
  "rationale": "Leuprolide, a GnRH analog, desensitizes GnRH receptors and halts maturation to prevent early epiphyseal closure and preserve adult height; maturation resumes normally when it is stopped (p.1340-1341). 'Permanently stop future fertility' is the tempting distractor because the drug suppresses sexual maturation, but the child remains fully fertile."
 },
 {
  "id": "x4e4q34",
  "exam": 4,
  "topic": "Precocious Puberty",
  "type": "mcq",
  "stem": "The nurse teaches the family of a child on leuprolide acetate about administration. Which statement is accurate?",
  "options": [
   "The medication is given by intramuscular injection every 3 months",
   "The medication is taken orally every morning",
   "Oral contraceptives should be added to speed maturation",
   "The drug is safe to use during pregnancy"
  ],
  "correct": [
   0
  ],
  "rationale": "Leuprolide is given by IM injection every 3 months, and families are encouraged to keep a calendar (p.1340-1341). Adding oral contraceptives is the tempting distractor because estrogen affects puberty, but estrogen closes epiphyses and reduces height, directly opposing the treatment goal; the drug is also Pregnancy Category X."
 },
 {
  "id": "x4e4q35",
  "exam": 4,
  "topic": "Cognitive Development",
  "type": "sata",
  "stem": "Which characteristics reflect the adolescent's formal operational stage of cognitive development? Select all that apply.",
  "options": [
   "Cannot yet plan for the future",
   "Uses abstract and hypothetical reasoning",
   "Relies on magical thinking to explain events",
   "Thinks about the perspectives of others and shows compassion",
   "Understands that rules are not absolute"
  ],
  "correct": [
   1,
   3,
   4
  ],
  "rationale": "Formal operational thought includes abstract and hypothetical reasoning, perspective-taking with compassion, and understanding that rules are not absolute (slides 4,5). 'Cannot plan for the future' is the tempting distractor if future orientation is overlooked, but adolescents can plan for the future; magical thinking is a preoperational trait."
 },
 {
  "id": "x4e4q36",
  "exam": 4,
  "topic": "Body Image",
  "type": "mcq",
  "stem": "A nurse cares for an adolescent scheduled for surgery that will leave a visible scar. Which concern is the adolescent most likely to express?",
  "options": [
   "Fear of separation from parents",
   "Fear of an altered body image and being different from peers",
   "Fear of the dark",
   "Fear of insides leaking out"
  ],
  "correct": [
   1
  ],
  "rationale": "The adolescent's predominant fear is an altered body image and being different from peers (Part 1 table; p.896). Fear of separation from parents is the tempting distractor because hospitalization is stressful, but separation fear predominates in toddlers, while body image dominates in adolescence."
 },
 {
  "id": "x4e4q37",
  "exam": 4,
  "topic": "Sexual Health",
  "type": "mcq",
  "stem": "When obtaining a sexual history from an adolescent, the nurse should:",
  "options": [
   "Assume the teen is not sexually active because of their age",
   "Ask questions only in front of the parent",
   "Use open-ended questions without assumptions about gender or sexual orientation",
   "Skip the sexual history unless the teen brings it up"
  ],
  "correct": [
   2
  ],
  "rationale": "A complete sexual history uses open-ended questions with no assumptions about gender or orientation (p.897,903-904). 'Assume the teen is not active because of age' is the tempting distractor because many teens are inexperienced, but 38% of high-school students are sexually active, so assuming inactivity misses risk behaviors."
 },
 {
  "id": "x4e4q38",
  "exam": 4,
  "topic": "Sexual Health",
  "type": "sata",
  "stem": "A nurse counsels a sexually active adolescent about safer sexual health. Which points are appropriate? Select all that apply.",
  "options": [
   "Abstinence is the only method that is 100% effective",
   "Condoms are unnecessary if you use another form of birth control",
   "Sexual activity should be based on mutual consent without coercion",
   "You should not be screened for sexually transmitted infections",
   "Don't leave your drink unattended to reduce the risk of a date-rape drug"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Teaching includes that no method except abstinence is 100% effective, that activity must be mutually consensual, and date-rape awareness such as not leaving drinks unattended (p.897,903-904; slide 14). 'Condoms are unnecessary with another birth control method' is the tempting distractor because another method does prevent pregnancy, but condoms remain essential for STI prevention, and active teens are screened for STIs every visit."
 },
 {
  "id": "x4e4q39",
  "exam": 4,
  "topic": "Sexual Maltreatment",
  "type": "mcq",
  "stem": "An adolescent reports a sexual assault that occurred earlier today. Before the examination, what should the nurse ask first?",
  "options": [
   "Whether the teen wants to press charges",
   "Whether the teen has told her parents",
   "Whether the teen has eaten today",
   "Whether the teen has bathed or showered since the assault"
  ],
  "correct": [
   3
  ],
  "rationale": "Ask first whether the victim bathed or showered, because washing can destroy DNA evidence (p.1588-1589). Whether the teen wants to press charges is the tempting distractor because it seems central, but that decision belongs to the victim and comes later; preserving evidence is the immediate concern."
 },
 {
  "id": "x4e4q40",
  "exam": 4,
  "topic": "Sexual Maltreatment",
  "type": "mcq",
  "stem": "An adolescent discloses ongoing sexual abuse by a relative. Which nursing action is required?",
  "options": [
   "Report the abuse; sexual maltreatment is a mandatory report and a criminal act",
   "Keep the information confidential at the teen's request",
   "Confront the relative before notifying authorities",
   "Wait until physical evidence is confirmed before reporting"
  ],
  "correct": [
   0
  ],
  "rationale": "Sexual maltreatment is a criminal act and a mandatory report (p.1585-1586). Keeping it confidential is the tempting distractor because adolescent care emphasizes confidentiality, but confidentiality does not apply to abuse disclosures; safety and the legal duty to report override the teen's request."
 },
 {
  "id": "x4e4q41",
  "exam": 4,
  "topic": "Mononucleosis",
  "type": "sata",
  "stem": "A nurse teaches an adolescent diagnosed with infectious mononucleosis. Which instructions are appropriate? Select all that apply.",
  "options": [
   "Avoid contact sports and roller coasters for 4-6 weeks",
   "You will need antibiotics to cure the infection",
   "Rest and stay hydrated with fluids by mouth",
   "You can return to full football practice tomorrow",
   "Do not share drinks, utensils, or lip products"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Mono care is supportive: rest, oral hydration, avoiding contact sports and roller coasters for 4-6 weeks because of splenic rupture risk, and not sharing saliva-contaminated items (slide 25). 'You will need antibiotics' is the tempting distractor because of the sore throat and pharyngitis, but EBV is viral and antibiotics are not indicated."
 },
 {
  "id": "x4e4q42",
  "exam": 4,
  "topic": "Mononucleosis",
  "type": "mcq",
  "stem": "Which finding in an adolescent with mononucleosis is of greatest concern to the nurse?",
  "options": [
   "Fatigue and need for extra rest",
   "Left upper quadrant pain with splenomegaly",
   "Mild cervical lymphadenopathy",
   "Sore throat with tonsillar exudate"
  ],
  "correct": [
   1
  ],
  "rationale": "Hepatosplenomegaly carries a risk of splenic rupture, so left upper quadrant pain with an enlarged spleen is the emergency concern (slide 25). Sore throat with exudate is the tempting distractor because it is a classic mono sign, but tonsillar pharyngitis is expected, whereas splenic enlargement poses the rupture danger."
 },
 {
  "id": "x4e4q43",
  "exam": 4,
  "topic": "Meningitis",
  "type": "mcq",
  "stem": "An adolescent is admitted with suspected bacterial meningitis. Which infection-control measure is a priority?",
  "options": [
   "Place the teen in strict contact precautions indefinitely",
   "No isolation is required for meningitis",
   "Institute droplet precautions until 24 hours of antibiotics have been given",
   "Airborne precautions with a negative-pressure room for the entire stay"
  ],
  "correct": [
   2
  ],
  "rationale": "Droplet (respiratory) precautions are used until 24 hours of antibiotics have been administered (slide 18). Airborne precautions with a negative-pressure room is the tempting distractor because meningitis sounds highly contagious, but Neisseria meningitidis spreads by droplet, not airborne routes, so droplet precautions for 24 hours are correct."
 },
 {
  "id": "x4e4q44",
  "exam": 4,
  "topic": "Meningitis",
  "type": "sata",
  "stem": "A nurse assesses an adolescent with bacterial meningitis for early signs of increased intracranial pressure. Which findings are early signs? Select all that apply.",
  "options": [
   "Headache",
   "Bradycardia with widened pulse pressure",
   "Photophobia (light sensitivity)",
   "Decerebrate posturing",
   "Nuchal rigidity"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Early signs of increased ICP include headache, photophobia, irritability, and nuchal rigidity (slide 18). Bradycardia with a widened pulse pressure (part of Cushing's triad) is the tempting distractor because it is a true ICP sign, but it is a late sign of brainstem compression, along with posturing, not an early finding."
 },
 {
  "id": "x4e4q45",
  "exam": 4,
  "topic": "Puberty",
  "type": "mcq",
  "stem": "A 12-year-old girl asks the nurse how much taller she will grow now that she has started her period. The nurse's response is based on the understanding that girls typically:",
  "options": [
   "Continue growing rapidly until age 18",
   "Stop growing entirely at menarche",
   "Grow fastest 5 years after menarche",
   "Complete most of their growth within about 2 years after menarche"
  ],
  "correct": [
   3
  ],
  "rationale": "Girls complete most of their growth within about 2 years after menarche, finishing around age 15 (slide 2, p.892-895). 'Stop growing entirely at menarche' is the tempting distractor because menarche is a maturational milestone, but girls still gain height for roughly 2 more years after their period begins."
 },
 {
  "id": "x4e4q46",
  "exam": 4,
  "topic": "Pain Management",
  "type": "mcq",
  "stem": "An adolescent has a patient-controlled analgesia (PCA) pump after surgery. Which statement by the parent requires nurse intervention?",
  "options": [
   "I'll press the button for him while he's sleeping so he stays comfortable",
   "Only my son should press the PCA button",
   "The pump limits how much medicine he can get",
   "He can use guided imagery along with the PCA"
  ],
  "correct": [
   0
  ],
  "rationale": "Only the patient should activate the PCA, and a sleeping child is not in pain and should not be dosed by a parent or nurse (slide 8). The other statements are correct; 'the pump limits how much medicine he can get' is a tempting choice for the error, but the built-in dose limit is accurate, whereas the parent pressing the button during sleep is the unsafe practice."
 },
 {
  "id": "x4e4q47",
  "exam": 4,
  "topic": "Motor Vehicle Safety",
  "type": "mcq",
  "stem": "The nurse evaluates whether an adolescent fits properly in a vehicle seat belt. Which finding indicates a correct fit?",
  "options": [
   "The lap belt rests across the abdomen above the hip bones",
   "The shoulder belt lies across the shoulder and chest, not the face or neck",
   "The shoulder belt crosses the neck for a snug fit",
   "The knees extend straight out beyond the seat edge"
  ],
  "correct": [
   1
  ],
  "rationale": "A proper fit places the shoulder belt across the shoulder and chest, the lap belt snug across the hips or upper thighs, and the knees bending at the seat edge (slide 12). 'Lap belt across the abdomen' is the tempting distractor because it seems snug, but a belt over the soft abdomen can cause internal injury in a crash and is incorrect."
 },
 {
  "id": "x4e4q48",
  "exam": 4,
  "topic": "Growth & Development",
  "type": "sata",
  "stem": "A nurse counsels parents about typical adolescent psychosocial development. Which statements should the nurse include? Select all that apply.",
  "options": [
   "Peer group and team loyalty become very important to your teen",
   "Power struggles and family conflict never occur in healthy families",
   "Emancipation means the relationship is changing, not ending",
   "Your teen has no interest in forming their own values",
   "Your teen may feel invincible, which can lead to risk-taking"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Adolescents develop intense peer and team loyalty, work toward emancipation (a changed, not severed, relationship), and may feel invincible, leading to risk-taking (slides 2,5; p.896). 'Power struggles never occur in healthy families' is the tempting distractor because it sounds reassuring, but family conflict is a normal part of emancipation, and teens actively form their own value system."
 },
 {
  "id": "x4e4q49",
  "exam": 4,
  "topic": "Delayed Puberty",
  "type": "mcq",
  "stem": "The parents of a 14-year-old girl are concerned she has no breast development or menses. The nurse understands that:",
  "options": [
   "Absence of menses at 14 always indicates a pituitary tumor",
   "Girls should have completed puberty by age 12",
   "Secondary sex characteristics are normally present by age 14 in girls, and the most common cause of delay is constitutional (familial)",
   "No evaluation is needed until age 18"
  ],
  "correct": [
   2
  ],
  "rationale": "Secondary sex characteristics are normally present by age 14 in girls, and constitutional (familial) delay is the most common cause, with pathology ruled out first (p.1365). 'Always indicates a pituitary tumor' is the tempting distractor because a tumor is one cause to rule out, but it is not the usual cause, and evaluation should not be delayed to 18."
 },
 {
  "id": "x4e4q50",
  "exam": 4,
  "topic": "Nutrition",
  "type": "mcq",
  "stem": "A nurse plans nutritional teaching for an adolescent during a growth spurt. Which nutrient is most commonly deficient and especially important for a menstruating female?",
  "options": [
   "Vitamin K",
   "Sodium",
   "Vitamin C",
   "Iron"
  ],
  "correct": [
   3
  ],
  "rationale": "Iron, calcium, vitamin D, and zinc are commonly deficient in adolescents, and iron is especially important for menstruating females because of blood loss and expanding blood volume (p.892-895). Vitamin C is the tempting distractor because it is a well-known nutrient, but it is not the highlighted adolescent deficiency; iron is the key concern with menses."
 },
 {
  "id": "x4e5q01",
  "exam": 5,
  "topic": "Toddler — Respiratory prioritization (croup vs epiglottitis)",
  "type": "mcq",
  "stem": "The nurse is assigned four toddlers on a pediatric unit. Which child should the nurse assess FIRST?",
  "options": [
   "A 3-year-old with a barking cough and mild inspiratory stridor that worsens at night",
   "A 2-year-old sitting upright and drooling, with a muffled voice, high fever, and refusal to swallow",
   "An 18-month-old with a nosebleed who is sitting with the head tilted slightly forward",
   "A 2-year-old with the slapped-cheek facial rash of fifth disease"
  ],
  "correct": [
   1
  ],
  "rationale": "The upright, drooling child with a muffled voice, high fever, and dysphagia shows classic epiglottitis (p.1117) — an airway emergency because swelling can cause complete obstruction. The most tempting distractor is the child with the barking cough and stridor: that is viral croup (p.1115-1116), which is expected to worsen at night and is managed with humidified oxygen and dexamethasone; it is concerning but does not carry the same imminent total-occlusion risk as epiglottitis."
 },
 {
  "id": "x4e5q02",
  "exam": 5,
  "topic": "Toddler — Epiglottitis emergency care",
  "type": "sata",
  "stem": "A toddler is admitted with suspected epiglottitis. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Keep the child calm and in an upright position",
   "Depress the tongue with a blade to directly visualize the epiglottis",
   "Have intubation and tracheostomy equipment ready at the bedside",
   "Administer the prescribed intravenous antibiotics",
   "Obtain a throat culture immediately to identify the organism"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "rationale": "Keeping the child calm and upright, readying airway equipment, and giving IV antibiotics are correct (p.1117). The tempting distractor is obtaining a throat culture, which seems routine for a sore throat; however, in epiglottitis the throat must NEVER be visualized with a tongue blade or cultured unless intubation/tracheostomy equipment is immediately available, because it can trigger laryngospasm and complete airway obstruction."
 },
 {
  "id": "x4e5q03",
  "exam": 5,
  "topic": "Toddler — Epistaxis first action",
  "type": "mcq",
  "stem": "A 2-year-old develops a nosebleed. What is the priority nursing action?",
  "options": [
   "Lay the child flat with the head tilted back",
   "Sit the child upright, tilt the head slightly forward, and apply pressure to the sides of the nose for about 10 minutes",
   "Pack the nostril tightly with tissue and have the child blow the nose",
   "Have the child lie down and place a warm cloth on the forehead"
  ],
  "correct": [
   1
  ],
  "rationale": "Sitting upright with a slight forward tilt and pinching the cartilage for ~10 minutes controls bleeding while preventing the child from swallowing or aspirating blood (p.1114). The tempting distractor is tilting the head back — a common lay practice — but this lets blood run down the throat, causing swallowing, gagging, and possible aspiration."
 },
 {
  "id": "x4e5q04",
  "exam": 5,
  "topic": "Toddler — Foreign-body aspiration",
  "type": "mcq",
  "stem": "A toddler suddenly choked while eating and now has abnormal lung sounds. Which finding best distinguishes foreign-body aspiration from an asthma exacerbation?",
  "options": [
   "Diffuse bilateral expiratory wheezing",
   "Sudden choking followed by localized, unilateral wheezing",
   "A barking cough with inspiratory stridor",
   "Gradual onset of symptoms over several days with fever"
  ],
  "correct": [
   1
  ],
  "rationale": "An aspirated object typically lodges in the right main bronchus, producing sudden choking and localized/unilateral wheezing (p.1117). The most tempting distractor is diffuse bilateral wheezing, which is characteristic of asthma's widespread airway inflammation rather than a single lodged object; a barking cough with stridor points to croup, not aspiration."
 },
 {
  "id": "x4e5q05",
  "exam": 5,
  "topic": "Toddler — Choking-hazard food teaching",
  "type": "sata",
  "stem": "The nurse teaches parents of a toddler about preventing aspiration. Which foods should be avoided? Select all that apply.",
  "options": [
   "Whole grapes",
   "Hot dog pieces",
   "Popcorn",
   "Nuts",
   "Mashed banana"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Whole grapes, hot dogs, popcorn, and nuts are round, firm, high-risk choking foods to keep away from toddlers (p.1117). The tempting distractor is mashed banana, which some parents assume is risky; it is a soft, easily swallowed food and is appropriate for toddlers."
 },
 {
  "id": "x4e5q06",
  "exam": 5,
  "topic": "Toddler — Kawasaki disease after IVIG",
  "type": "mcq",
  "stem": "A toddler treated for Kawasaki disease received IVIG. Which instruction is most important for the nurse to include in discharge teaching?",
  "options": [
   "Administer the MMR and varicella vaccines at the visit scheduled next week",
   "Discontinue the aspirin immediately now that the fever has resolved",
   "Delay live vaccines such as MMR and varicella",
   "Cancel the follow-up echocardiograms since the fever has broken"
  ],
  "correct": [
   2
  ],
  "rationale": "Live vaccines (MMR, varicella) must be delayed after IVIG because the immune globulin can blunt the vaccine response (p.1168-1169). The most tempting distractor is discontinuing aspirin now that the fever has resolved; in Kawasaki disease, high-dose aspirin is switched to LOW-dose aspirin and continued 6-8 weeks (a rare pediatric aspirin indication) to protect against coronary thrombosis, so it is not simply stopped."
 },
 {
  "id": "x4e5q07",
  "exam": 5,
  "topic": "Toddler — Sickle cell vaso-occlusive crisis",
  "type": "sata",
  "stem": "A toddler is admitted in a vaso-occlusive sickle cell crisis. Which interventions does the nurse anticipate? Select all that apply.",
  "options": [
   "Add potassium to the IV fluids before the child has voided",
   "Give iron supplements to correct the anemia",
   "Administer IV fluids for hydration",
   "Provide supplemental oxygen",
   "Administer the prescribed opioid analgesic (morphine)"
  ],
  "correct": [
   2,
   3,
   4
  ],
  "rationale": "The three crisis priorities are pain relief, hydration, and oxygenation (p.1260-1264). The most tempting distractor is giving iron, which seems logical for anemia; however, iron supplements are NOT given in sickle cell disease. Potassium is also withheld until the child voids and kidney function is confirmed."
 },
 {
  "id": "x4e5q08",
  "exam": 5,
  "topic": "Toddler — Fifth disease complication risk",
  "type": "mcq",
  "stem": "The nurse is aware that exposure to parvovirus B19 (fifth disease) poses the GREATEST risk of a serious complication for which child?",
  "options": [
   "A child with sickle cell disease",
   "A child with asthma",
   "A child with contact dermatitis",
   "A well child who has already developed the slapped-cheek rash"
  ],
  "correct": [
   0
  ],
  "rationale": "Parvovirus B19 can trigger an aplastic crisis in children with sickle cell disease and hydrops fetalis in pregnant contacts (p.1222-1223). The tempting distractor is the child who already has the slapped-cheek rash; by the time that rash appears the child is no longer contagious and is not the one at greatest risk."
 },
 {
  "id": "x4e5q09",
  "exam": 5,
  "topic": "Toddler — Acute gastroenteritis management",
  "type": "sata",
  "stem": "A toddler is admitted with acute viral gastroenteritis and dehydration. Which orders and teaching does the nurse anticipate? Select all that apply.",
  "options": [
   "Provide oral rehydration solution (Pedialyte)",
   "Begin the BRAT diet (bananas, rice, applesauce, toast)",
   "Institute contact precautions",
   "Give potassium only after the child has voided",
   "Take a rectal temperature every 4 hours"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "rationale": "Oral rehydration solution, contact precautions, and withholding potassium until the child voids are correct (p.1283). The most tempting distractor is the BRAT diet, long a traditional recommendation; it is no longer preferred because it is nutritionally inadequate — ORS is the standard. Rectal temperatures are avoided with diarrhea."
 },
 {
  "id": "x4e5q10",
  "exam": 5,
  "topic": "Toddler — Dehydration assessment",
  "type": "mcq",
  "stem": "Which set of findings indicates dehydration in a toddler?",
  "options": [
   "Bulging anterior fontanel with bounding pulses",
   "Sunken fontanel, dry mucous membranes, and decreased urine output",
   "Weight gain with moist mucous membranes",
   "Brisk capillary refill and increased urine output"
  ],
  "correct": [
   1
  ],
  "rationale": "A sunken fontanel, dry mucous membranes, and decreased urine output are hallmark dehydration findings (p.1277-1283). The tempting distractor is a bulging fontanel with bounding pulses, which suggests the OPPOSITE problem — fluid overload or increased intracranial pressure — not dehydration."
 },
 {
  "id": "x4e5q11",
  "exam": 5,
  "topic": "Toddler — Nephrotic syndrome medication timing",
  "type": "mcq",
  "stem": "A toddler with nephrotic syndrome is prescribed IV albumin and furosemide. To infuse them safely, the nurse should:",
  "options": [
   "Administer the furosemide before the albumin infusion",
   "Stop the prednisone abruptly once the edema resolves",
   "Administer the furosemide after the albumin infusion",
   "Severely restrict the child's dietary protein"
  ],
  "correct": [
   2
  ],
  "rationale": "The diuretic is given AFTER albumin so the albumin can first pull fluid into the vascular space for the furosemide to remove, preventing fluid overload/heart failure (p.1325-1328). The most tempting distractor is stopping prednisone once the edema resolves; corticosteroids must be tapered (alternate-day dosing), never stopped abruptly, to avoid adrenal insufficiency."
 },
 {
  "id": "x4e5q12",
  "exam": 5,
  "topic": "Toddler — Poisoning first action",
  "type": "mcq",
  "stem": "A parent calls to report that their alert toddler swallowed several adult acetaminophen tablets about 20 minutes ago. What should the nurse advise the parent to do FIRST?",
  "options": [
   "Induce vomiting with syrup of ipecac",
   "Give the child milk to coat the stomach",
   "Wait to see whether any symptoms develop",
   "Call Poison Control at 1-800-222-1222"
  ],
  "correct": [
   3
  ],
  "rationale": "Calling Poison Control (1-800-222-1222) is the first action so the appropriate treatment — including the antidote acetylcysteine — can be directed (p.1497-1498). The most tempting distractor is inducing vomiting, which is an outdated, potentially harmful practice that is no longer recommended for poisonings."
 },
 {
  "id": "x4e5q13",
  "exam": 5,
  "topic": "Toddler — Physical maltreatment red flags",
  "type": "sata",
  "stem": "Which assessment findings should raise concern for physical maltreatment in a toddler? Select all that apply.",
  "options": [
   "A spiral fracture of the femur",
   "Multiple fractures in different stages of healing",
   "Bruising over the shins of an active toddler",
   "A circular, cigarette-shaped burn on the dorsal surface of the hand",
   "An injury description that is consistent with the child's developmental level"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "Spiral fractures, fractures at different healing stages, and patterned burns are classic maltreatment red flags (p.1575-1582). The most tempting distractor is shin bruising in an active toddler; over bony prominences in an ambulatory child this is an expected, normal finding (the 'bruises on babies are bad' concern applies to NON-mobile infants). An injury story that matches development is reassuring, not concerning."
 },
 {
  "id": "x4e5q14",
  "exam": 5,
  "topic": "Preschool — Anaphylaxis first action",
  "type": "mcq",
  "stem": "A preschooler with a known peanut allergy develops hives, wheezing, and throat tightness minutes after eating. What is the nurse's FIRST action?",
  "options": [
   "Administer intramuscular epinephrine into the outer thigh",
   "Give oral diphenhydramine",
   "Administer albuterol by nebulizer",
   "Call the rapid response team and then reassess"
  ],
  "correct": [
   0
  ],
  "rationale": "IM epinephrine into the vastus lateralis is the standard of care and the first action in anaphylaxis, given before any other measure (p.1193). The tempting distractor is diphenhydramine (or the albuterol) — antihistamines and asthma inhalers can be adjuncts but can NEVER substitute for or precede epinephrine, which is the only drug that reverses the airway swelling and hypotension."
 },
 {
  "id": "x4e5q15",
  "exam": 5,
  "topic": "Preschool — Asthma rescue vs controller",
  "type": "mcq",
  "stem": "A parent of a preschooler with asthma is being taught about the child's inhalers. Which statement indicates correct understanding?",
  "options": [
   "\"I give the albuterol every day to prevent attacks.\"",
   "\"I use the albuterol for sudden wheezing and give the fluticasone every day.\"",
   "\"I give the fluticasone only during an attack.\"",
   "\"I do not need to rinse his mouth after the inhaled steroid.\""
  ],
  "correct": [
   1
  ],
  "rationale": "Albuterol (a SABA) is the quick-relief rescue inhaler and fluticasone (an inhaled corticosteroid) is the daily controller (p.1119). The most tempting distractor is giving albuterol daily to prevent attacks — this confuses the rescue and controller roles; the rescue inhaler is used PRN for symptoms, not as daily prevention. The mouth should be rinsed after inhaled steroids to prevent thrush."
 },
 {
  "id": "x4e5q16",
  "exam": 5,
  "topic": "Preschool — Asthma peak-flow zones",
  "type": "mcq",
  "stem": "A preschooler with asthma has a peak expiratory flow measuring 45% of the personal best. Which zone does this represent and what action is indicated?",
  "options": [
   "Green zone — continue the current routine",
   "Yellow zone — use caution and continue to monitor",
   "Red zone — a medical alert requiring the rescue inhaler and prompt care",
   "No action is needed; recheck the peak flow next week"
  ],
  "correct": [
   2
  ],
  "rationale": "A peak flow below 50% is the red zone, a medical alert requiring rescue medication and prompt care (p.1119). The most tempting distractor is the yellow zone; yellow is 50-80%, and because 45% falls BELOW 50% the reading is red, not yellow."
 },
 {
  "id": "x4e5q17",
  "exam": 5,
  "topic": "Preschool — Food allergy/epinephrine teaching",
  "type": "sata",
  "stem": "The nurse teaches the family of a preschooler with a peanut allergy. Which statements are correct? Select all that apply.",
  "options": [
   "Keep an epinephrine auto-injector at home and at school",
   "The auto-injector can be given through clothing into the outer thigh",
   "A prior mild reaction means the next reaction will also be mild",
   "After using the auto-injector, seek emergency care and watch for a biphasic reaction",
   "Antihistamines can be used in place of epinephrine if given quickly"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "The auto-injector must be available in both settings, can be given through clothing into the thigh, and use requires follow-up emergency care for a possible biphasic reaction (p.1203, p.1193). The most tempting distractor is that a prior mild reaction predicts a mild future reaction — this is false reassurance; a previous mild reaction does NOT predict future severity. Antihistamines never substitute for epinephrine."
 },
 {
  "id": "x4e5q18",
  "exam": 5,
  "topic": "Preschool — Oral iron administration",
  "type": "sata",
  "stem": "The nurse teaches a parent about giving ferrous sulfate to a preschooler with iron-deficiency anemia. Which instructions are correct? Select all that apply.",
  "options": [
   "Give the iron on an empty stomach with orange juice",
   "Give the iron with milk to reduce stomach upset",
   "Give liquid iron through a straw and brush the teeth afterward",
   "Report black stools immediately as a sign of GI bleeding",
   "Vitamin C improves the absorption of iron"
  ],
  "correct": [
   0,
   2,
   4
  ],
  "rationale": "Iron is best absorbed on an empty stomach with vitamin C (orange juice); liquid iron is given by straw with tooth brushing to prevent staining (p.1257). The most tempting distractor is reporting black stools as bleeding; black stools are an EXPECTED, harmless effect of oral iron, not a danger sign. Milk should be avoided because it decreases iron absorption."
 },
 {
  "id": "x4e5q19",
  "exam": 5,
  "topic": "Preschool — Blood transfusion reaction",
  "type": "mcq",
  "stem": "During a packed red blood cell transfusion, a preschooler develops fever, chills, and back pain. What is the nurse's priority action?",
  "options": [
   "Slow the transfusion rate and continue to monitor",
   "Administer acetaminophen and continue the transfusion",
   "Flush the line with dextrose 5% in water",
   "Stop the transfusion and keep the line open with normal saline"
  ],
  "correct": [
   3
  ],
  "rationale": "At the first sign of a reaction, stop the transfusion and maintain the line with normal saline (the only compatible fluid) (p.1250). The most tempting distractor is slowing the rate and continuing; a reaction requires STOPPING the blood, not merely slowing it, because continued exposure can cause a life-threatening hemolytic reaction. Dextrose is never used with blood — it causes hemolysis."
 },
 {
  "id": "x4e5q20",
  "exam": 5,
  "topic": "Preschool — Hemophilia hemarthrosis",
  "type": "mcq",
  "stem": "A preschooler with hemophilia A has a warm, swollen, painful knee after active play. Which action should the nurse take?",
  "options": [
   "Apply rest, ice, compression, and elevation and immobilize the joint",
   "Perform passive range of motion to the knee immediately",
   "Administer ibuprofen for the pain",
   "Apply heat to the swollen joint"
  ],
  "correct": [
   0
  ],
  "rationale": "Hemarthrosis is treated with RICE and immobilization; passive range of motion is delayed until after about 48 hours (p.1269). The most tempting distractor is giving ibuprofen for pain; NSAIDs (and aspirin) impair platelet function and increase bleeding, so acetaminophen is used instead. Heat would increase bleeding into the joint."
 },
 {
  "id": "x4e5q21",
  "exam": 5,
  "topic": "Preschool — Celiac disease diet",
  "type": "sata",
  "stem": "The nurse teaches the parents of a child with celiac disease about a gluten-free diet. Which foods and grains must be ELIMINATED? Select all that apply.",
  "options": [
   "Wheat",
   "Rye",
   "Barley",
   "Rice",
   "Oats"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Wheat, rye, barley, and oats contain or are cross-contaminated with gluten and must be eliminated for life (p.1297). The tempting distractor is rice, which is a grain and is often assumed to be off-limits; however, rice and corn are gluten-free and safe."
 },
 {
  "id": "x4e5q22",
  "exam": 5,
  "topic": "Preschool — UTI prevention teaching",
  "type": "mcq",
  "stem": "The mother of a 4-year-old girl with recurrent urinary tract infections makes several statements. Which statement indicates a need for further teaching?",
  "options": [
   "\"I wipe her from front to back.\"",
   "\"I encourage her to void every 2 to 3 hours.\"",
   "\"I let her soak in bubble baths to help her relax.\"",
   "\"I dress her in cotton underwear.\""
  ],
  "correct": [
   2
  ],
  "rationale": "Bubble baths (and hot tubs, harsh soaps, and sprays) irritate the urethra and promote UTIs, so this statement needs correction (p.1318). The other statements — front-to-back wiping, regular voiding, and cotton underwear — are all correct prevention measures; the tempting distractor is that they may look like the item needing teaching, but they are appropriate."
 },
 {
  "id": "x4e5q23",
  "exam": 5,
  "topic": "Preschool — Poststreptococcal glomerulonephritis",
  "type": "mcq",
  "stem": "A 5-year-old presents with tea-colored urine, periorbital edema, and an elevated blood pressure two weeks after strep throat. Which nursing action is the priority?",
  "options": [
   "Monitor blood pressure and obtain daily weights",
   "Restrict all protein from the diet",
   "Prepare to start long-term prophylactic penicillin",
   "Encourage vigorous physical activity"
  ],
  "correct": [
   0
  ],
  "rationale": "In acute poststreptococcal glomerulonephritis, the priorities are close BP monitoring, daily weights, and strict I&O because hypertension results from hypervolemia (p.1323). The most tempting distractor is starting long-term prophylactic penicillin; unlike rheumatic fever, poststrep glomerulonephritis does NOT recur with future strep infections, so prophylaxis is not needed. Protein is not routinely restricted."
 },
 {
  "id": "x4e5q24",
  "exam": 5,
  "topic": "Preschool — 4-6 year booster immunizations",
  "type": "sata",
  "stem": "Which immunizations are due at the 4-to-6-year (before-kindergarten) visit? Select all that apply.",
  "options": [
   "DTaP (5th dose)",
   "IPV (4th dose)",
   "MMR (2nd dose)",
   "Varicella (2nd dose)",
   "Rotavirus"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "The pre-kindergarten boosters are DTaP #5, IPV #4, MMR #2, and varicella #2 (plus annual influenza) — the 'Very DIM' mnemonic (Table 31.2, p.852). The tempting distractor is rotavirus, which is part of the INFANT series and is never given as a 4-6 year booster."
 },
 {
  "id": "x4e5q25",
  "exam": 5,
  "topic": "Preschool — Therapeutic play/communication",
  "type": "mcq",
  "stem": "A preschooler is scheduled for a blood draw. Which approach by the nurse is most developmentally appropriate?",
  "options": [
   "Explain all of the procedure details to the child the day before",
   "Give a brief, concrete explanation just before the draw, use a doll for medical play, and apply a bandage afterward",
   "Tell the child that the illness happened because of misbehaving",
   "Avoid explaining anything to keep the child from becoming afraid"
  ],
  "correct": [
   1
  ],
  "rationale": "Preschoolers need brief, honest explanations close to the event, benefit from therapeutic play, and fear body mutilation — so a bandage reassures them their 'insides won't leak out' (Part 1; p.140 study guide). The most tempting distractor is a detailed explanation the day before; because preschoolers use magical thinking and have little concept of time, early, lengthy explanations increase anxiety rather than reduce it."
 },
 {
  "id": "x4e5q26",
  "exam": 5,
  "topic": "School-Age — Increased ICP recognition",
  "type": "mcq",
  "stem": "A school-age child is being monitored after a head injury. Which finding indicates increased intracranial pressure and requires immediate action?",
  "options": [
   "Tachycardia with hypotension",
   "A mild headache that improves with rest",
   "Symmetric, briskly reactive pupils",
   "Bradycardia, rising blood pressure with a widening pulse pressure, and irregular respirations"
  ],
  "correct": [
   3
  ],
  "rationale": "Bradycardia, hypertension with a widening pulse pressure, and irregular respirations make up Cushing's triad — a LATE, ominous sign of brainstem compression requiring immediate action (p.1400-1402). The most tempting distractor is the mild headache; headache and irritability are EARLY, subtle signs of increased ICP but are not the emergent finding that demands immediate intervention."
 },
 {
  "id": "x4e5q27",
  "exam": 5,
  "topic": "School-Age — Bacterial meningitis precautions",
  "type": "mcq",
  "stem": "A school-age child is admitted with suspected bacterial meningitis. Which intervention is the priority?",
  "options": [
   "Place the child in a brightly lit room for close observation",
   "Flex the neck forward on two pillows for comfort",
   "Institute droplet precautions and maintain them until 24 hours after antibiotics are started",
   "Infuse large volumes of IV fluid rapidly"
  ],
  "correct": [
   2
  ],
  "rationale": "Droplet/respiratory precautions are instituted and maintained until 24 hours after antibiotics begin (p.1407-1409). The most tempting distractor is rapid IV fluids; fluids are given at a CAREFUL rate to avoid overhydration and the SIADH that can accompany meningitis. The room should be dim and quiet, and the neck should not be flexed."
 },
 {
  "id": "x4e5q28",
  "exam": 5,
  "topic": "School-Age — Meningitis assessment findings",
  "type": "sata",
  "stem": "Which findings support a diagnosis of bacterial meningitis in a school-age child? Select all that apply.",
  "options": [
   "A positive Kernig sign",
   "A positive Brudzinski sign",
   "Nuchal rigidity",
   "Photophobia",
   "Decreased protein in the cerebrospinal fluid"
  ],
  "correct": [
   0,
   1,
   2,
   3
  ],
  "rationale": "Positive Kernig and Brudzinski signs, nuchal rigidity, and photophobia all reflect meningeal irritation (p.1407-1409). The tempting distractor is decreased CSF protein; in bacterial meningitis the CSF shows INCREASED protein and white cells with DECREASED glucose (<60% of blood glucose), so decreased protein is the opposite of the expected finding."
 },
 {
  "id": "x4e5q29",
  "exam": 5,
  "topic": "School-Age — Seizure safety",
  "type": "sata",
  "stem": "A school-age child begins a tonic-clonic seizure. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Insert a padded tongue blade between the teeth",
   "Turn the child onto the side",
   "Protect the head from injury",
   "Restrain the extremities to stop the movements",
   "Time the duration of the seizure"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "rationale": "Turning the child to the side, protecting the head, and timing the seizure are correct precautions (p.1410-1418). The most tempting distractor is inserting a padded tongue blade — an outdated practice; NOTHING is ever placed in the mouth, as it can cause airway or dental injury. The child is never restrained during a seizure."
 },
 {
  "id": "x4e5q30",
  "exam": 5,
  "topic": "School-Age — Status epilepticus medication",
  "type": "mcq",
  "stem": "A school-age child is in status epilepticus with a continuous seizure lasting more than 30 minutes. Which medication does the nurse anticipate administering?",
  "options": [
   "Oral ethosuximide",
   "Prophylactic acetaminophen",
   "Oral carbamazepine",
   "Intravenous lorazepam (Ativan)"
  ],
  "correct": [
   3
  ],
  "rationale": "Status epilepticus is a medical emergency treated with IV lorazepam (Ativan) or IV diazepam (Valium) (p.1410-1418). The most tempting distractor is carbamazepine (or ethosuximide); these are ongoing maintenance anticonvulsants taken orally and are not the emergency drug used to stop an active, continuous seizure."
 },
 {
  "id": "x4e5q31",
  "exam": 5,
  "topic": "School-Age — Post-tonsillectomy hemorrhage",
  "type": "mcq",
  "stem": "The nurse is monitoring a child in the immediate period after a tonsillectomy. Which finding is the EARLIEST sign of hemorrhage?",
  "options": [
   "A low-grade fever",
   "Complaint of a sore throat",
   "Frequent swallowing",
   "A request for cool fluids"
  ],
  "correct": [
   2
  ],
  "rationale": "Frequent swallowing or throat clearing is the earliest sign of post-tonsillectomy bleeding, as blood trickles down the throat (p.1113-1114). The most tempting distractor is the sore throat; throat pain and a low-grade fever are EXPECTED after surgery and do not signal hemorrhage, whereas frequent swallowing warrants immediate throat inspection."
 },
 {
  "id": "x4e5q32",
  "exam": 5,
  "topic": "School-Age — Post-tonsillectomy care",
  "type": "sata",
  "stem": "Which interventions are appropriate for a child recovering from a tonsillectomy? Select all that apply.",
  "options": [
   "Position the child on the side to promote drainage",
   "Offer red-colored gelatin and fruit punch",
   "Discourage coughing and throat clearing",
   "Provide an ice collar and cool liquids",
   "Encourage the child to drink through a straw"
  ],
  "correct": [
   0,
   2,
   3
  ],
  "rationale": "Side-lying positioning, discouraging coughing/throat clearing, and an ice collar with cool liquids are correct (p.1113-1114). The most tempting distractor is red gelatin and fruit punch; red/brown fluids are avoided because they can mask or mimic blood, making bleeding hard to detect. Straws are avoided because they can disrupt the surgical site."
 },
 {
  "id": "x4e5q33",
  "exam": 5,
  "topic": "School-Age — Hemolytic-uremic syndrome",
  "type": "mcq",
  "stem": "A school-age child develops oliguria, pallor, and petechiae several days after an episode of bloody diarrhea traced to undercooked hamburger. Which triad of findings supports hemolytic-uremic syndrome?",
  "options": [
   "Leukocytosis, hypertension, and proteinuria",
   "Hyperglycemia, ketosis, and dehydration",
   "Hematuria, edema, and an elevated ASO titer",
   "Hemolytic anemia, thrombocytopenia, and acute renal failure"
  ],
  "correct": [
   3
  ],
  "rationale": "The classic HUS triad is hemolytic anemia, thrombocytopenia, and acute renal failure, and it typically follows E. coli infection (p.1330). The most tempting distractor is hematuria, edema, and an elevated ASO titer — that picture describes acute poststreptococcal glomerulonephritis, which follows a strep infection rather than an E. coli gastrointestinal illness."
 },
 {
  "id": "x4e5q34",
  "exam": 5,
  "topic": "School-Age — Scoliosis brace teaching",
  "type": "sata",
  "stem": "The nurse teaches a school-age child and family about wearing a Boston brace for scoliosis. Which statements are correct? Select all that apply.",
  "options": [
   "Wear the brace 23 hours a day, removing it only for showering and structured sports",
   "Wear a snug T-shirt under the brace to protect the skin",
   "Loosen the straps if the brace begins to rub the skin",
   "The brace is worn until spinal growth stops",
   "Stop wearing the brace once the curve appears straight"
  ],
  "correct": [
   0,
   1,
   3
  ],
  "rationale": "The brace is worn 23 hours daily over a T-shirt and continues until skeletal growth is complete (p.1468-1472). The most tempting distractor is loosening the straps when the brace rubs; the family should NOT loosen or adjust the straps but should notify the provider, since loosening reduces effectiveness. The brace continues even if the spine looks straight."
 },
 {
  "id": "x4e5q35",
  "exam": 5,
  "topic": "School-Age — Compartment syndrome",
  "type": "mcq",
  "stem": "A school-age child in a long-arm cast reports severe pain that is not relieved by analgesia, along with tingling and pallor of the fingers. What is the nurse's priority action?",
  "options": [
   "Notify the provider immediately",
   "Administer additional analgesic and reassess in 1 hour",
   "Elevate the arm and apply a warm compress",
   "Document the findings as expected post-casting discomfort"
  ],
  "correct": [
   0
  ],
  "rationale": "Unrelieved pain is the earliest and most reliable of the 5 P's of compartment syndrome; permanent damage occurs after about 6 hours, so the provider must be notified immediately (p.1477-1480). The most tempting distractor is re-medicating and reassessing in an hour; treating pain that signals neurovascular compromise as ordinary discomfort delays urgent intervention and risks a Volkmann contracture."
 },
 {
  "id": "x4e5q36",
  "exam": 5,
  "topic": "School-Age — Post spinal fusion positioning",
  "type": "mcq",
  "stem": "After posterior spinal fusion for scoliosis, how should the nurse reposition the child in bed?",
  "options": [
   "Assist the child to sit upright and twist to one side",
   "Have the child pull up using the side rails",
   "Turn by moving the shoulders and hips in opposite directions",
   "Log-roll the child, keeping the spine straight"
  ],
  "correct": [
   3
  ],
  "rationale": "After spinal fusion the child is repositioned by log-rolling to keep the spine in straight alignment, with neurovascular checks of the extremities for at least 48 hours (p.1468-1472). The other options all involve twisting or bending the fused spine; the tempting distractor of turning the shoulders and hips in opposite directions rotates the spine and is contraindicated."
 },
 {
  "id": "x4e5q37",
  "exam": 5,
  "topic": "School-Age — Pain scale selection",
  "type": "mcq",
  "stem": "Which pain-assessment tool is most appropriate for a 10-year-old who understands numbers?",
  "options": [
   "The FLACC behavioral scale",
   "The numeric 0-to-10 rating scale",
   "The Poker Chip Tool",
   "Observation of behavioral cues only"
  ],
  "correct": [
   1
  ],
  "rationale": "Older school-age children who grasp numbers can use the numeric 0-10 rating scale (p.1087-1094). The most tempting distractor is the FLACC scale, which is a BEHAVIORAL tool intended for nonverbal or very young children who cannot self-report; a verbal 10-year-old can and should self-report using numbers."
 },
 {
  "id": "x4e5q38",
  "exam": 5,
  "topic": "School-Age — Obesity management",
  "type": "sata",
  "stem": "The nurse counsels the family of a school-age child whose BMI is above the 95th percentile for age. Which teaching points are appropriate? Select all that apply.",
  "options": [
   "Eliminate sugar-sweetened beverages",
   "Aim for at least 60 minutes of physical activity daily",
   "Involve the whole family in structured meals",
   "Place the child on a strict solo diet separate from the rest of the family",
   "Screen for comorbidities such as hypertension and type 2 diabetes"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Eliminating sugary drinks, 60 minutes of daily activity, family-centered structured meals, and screening for comorbidities are all recommended (p.886-887). The most tempting distractor is putting the child on a strict solo diet; management is framed as a FAMILY lifestyle change, and isolating the child can harm self-esteem and is less effective."
 },
 {
  "id": "x4e5q39",
  "exam": 5,
  "topic": "Adolescent — Isotretinoin teaching",
  "type": "sata",
  "stem": "The nurse teaches an adolescent who is starting isotretinoin (Accutane) for severe cystic acne. Which points should be included? Select all that apply.",
  "options": [
   "Use two forms of contraception if sexually active",
   "Report any signs of depression or suicidal thoughts",
   "Take a vitamin A supplement to boost the medication's effect",
   "Combining the drug with tetracycline is safe",
   "Use SPF sunscreen because of increased photosensitivity"
  ],
  "correct": [
   0,
   1,
   4
  ],
  "rationale": "Isotretinoin is extremely teratogenic (two forms of contraception), carries a depression/suicidal-ideation risk, and causes photosensitivity (p.902). The most tempting distractor is taking a vitamin A supplement; isotretinoin is a vitamin A compound, so added vitamin A causes additive toxicity and must be AVOIDED. Tetracycline is also avoided because the combination can cause pseudotumor cerebri (brain edema)."
 },
 {
  "id": "x4e5q40",
  "exam": 5,
  "topic": "Adolescent — Isotretinoin priority screening",
  "type": "mcq",
  "stem": "Before a sexually active female adolescent begins isotretinoin, which is the MOST important thing for the nurse to verify?",
  "options": [
   "A recent tetanus booster",
   "Baseline visual acuity",
   "A negative pregnancy test and reliable contraception",
   "The patient's blood type"
  ],
  "correct": [
   2
  ],
  "rationale": "Because isotretinoin is extremely teratogenic, confirming a negative pregnancy test and reliable contraception is the priority (p.902). The most tempting distractor is baseline visual acuity; decreased night vision is a real adverse effect worth monitoring, but preventing a pregnancy that could result in severe fetal malformation takes clear priority."
 },
 {
  "id": "x4e5q41",
  "exam": 5,
  "topic": "Adolescent — Confidentiality/communication",
  "type": "mcq",
  "stem": "A 15-year-old arrives at the clinic with a parent. To obtain an accurate sexual and substance-use history, the nurse should:",
  "options": [
   "Interview the teen alone, without the parent present",
   "Ask the parent to answer the questions on the teen's behalf",
   "Skip the sensitive questions to respect the family's privacy",
   "Require the parent to remain present the entire time"
  ],
  "correct": [
   0
  ],
  "rationale": "Adolescents should be interviewed without parents present so they can answer sensitive questions honestly, with questions directed to the teen (p.897, slide 7). The most tempting distractor is keeping the parent present for the whole visit; although parental consent is still required for care, the confidential interview must be conducted privately for the teen to disclose accurately."
 },
 {
  "id": "x4e5q42",
  "exam": 5,
  "topic": "Adolescent — Depression/suicide screening",
  "type": "sata",
  "stem": "The nurse is screening an adolescent for depression and self-harm. Which findings and actions are appropriate? Select all that apply.",
  "options": [
   "Reassure the teen that talking about suicide will make it worse, so avoid the topic",
   "Long sleeves in warm weather with unexplained injuries may indicate cutting",
   "Use open-ended statements such as \"It sounds like you are having a difficult time\"",
   "Initiate suicide precautions if the teen expresses intent to harm self",
   "Screen mood only when the parent reports a concern"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Recognizing cutting cues, using open-ended therapeutic communication, and initiating suicide precautions when intent is expressed are all appropriate (p.898). The most tempting distractor is avoiding the topic of suicide; this is a myth — asking about suicide does not increase risk, and mood should be screened at EVERY visit, not only when a parent raises a concern."
 },
 {
  "id": "x4e5q43",
  "exam": 5,
  "topic": "Adolescent — Disordered eating",
  "type": "mcq",
  "stem": "Which cluster of findings is most consistent with anorexia nervosa in an adolescent?",
  "options": [
   "Weight gain, hypertension, and heat intolerance",
   "Polyuria, polydipsia, and weight loss with an increased appetite",
   "Fever, sore throat, and cervical lymphadenopathy",
   "Weight loss, amenorrhea, bradycardia, low body temperature, and cold intolerance"
  ],
  "correct": [
   3
  ],
  "rationale": "Profound weight loss, amenorrhea, bradycardia, low temperature, and cold intolerance are the warning signs of an eating disorder (p.896, 898). The most tempting distractor is polyuria, polydipsia, and weight loss with increased appetite; that pattern points to a different metabolic process and lacks the amenorrhea and bradycardia that characterize anorexia."
 },
 {
  "id": "x4e5q44",
  "exam": 5,
  "topic": "Adolescent — Precocious puberty (leuprolide)",
  "type": "mcq",
  "stem": "A child is receiving leuprolide (Lupron) for precocious puberty. Which statement by the parents indicates correct understanding?",
  "options": [
   "\"This injection halts the early maturation and helps preserve her adult height.\"",
   "\"This medication will make her permanently infertile.\"",
   "\"We should also start oral contraceptives to help.\"",
   "\"We should treat her as though she is as mature as she looks.\""
  ],
  "correct": [
   0
  ],
  "rationale": "Leuprolide is a GnRH analog that desensitizes GnRH receptors to halt maturation and prevent early epiphyseal closure, preserving adult height (p.1340-1341). The most tempting distractor is permanent infertility; the child is actually fully fertile, and normal maturation resumes once the drug is stopped. Oral contraceptives are contraindicated (estrogen closes epiphyses), and the child should be treated at her chronologic age."
 },
 {
  "id": "x4e5q45",
  "exam": 5,
  "topic": "Adolescent — Infectious mononucleosis",
  "type": "sata",
  "stem": "An adolescent is diagnosed with infectious mononucleosis (Epstein-Barr virus). Which teaching should the nurse include? Select all that apply.",
  "options": [
   "Expect a course of antibiotics to cure the infection",
   "Avoid contact sports for 4 to 6 weeks because of the risk of spleen rupture",
   "Rest and drink plenty of fluids",
   "Take acetaminophen for fever and throat pain",
   "Sharing drinks with friends is fine once the fever resolves"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Care is supportive — rest, fluids, and acetaminophen — with avoidance of contact sports for 4-6 weeks because of splenomegaly and rupture risk (slide 25). The most tempting distractor is expecting antibiotics; mononucleosis is VIRAL, so antibiotics are not indicated. The virus spreads by saliva, so sharing drinks is discouraged."
 },
 {
  "id": "x4e5q46",
  "exam": 5,
  "topic": "Adolescent — Immunization booster at 16",
  "type": "mcq",
  "stem": "Which immunization is recommended as a booster at age 16 for an adolescent?",
  "options": [
   "A second dose of MMR",
   "A rotavirus dose",
   "A MenACWY booster",
   "A fourth dose of IPV"
  ],
  "correct": [
   2
  ],
  "rationale": "The MenACWY series begins at 11-12 years with a booster at age 16 (MenB is given at 16-18) (p.901, slide 6). The most tempting distractor is a second dose of MMR; the MMR #2 (like IPV #4) is a 4-6 year pre-kindergarten booster, not a 16-year adolescent immunization."
 },
 {
  "id": "x4e5q47",
  "exam": 5,
  "topic": "Adolescent — PCA safety",
  "type": "mcq",
  "stem": "An adolescent is using patient-controlled analgesia (PCA) after surgery. Which statement by the nurse is correct?",
  "options": [
   "\"Only you should press the PCA button.\"",
   "\"I will have your mother press the button while you sleep.\"",
   "\"I will press it for you at set intervals.\"",
   "\"Press it before you feel any pain, even while you are sleeping.\""
  ],
  "correct": [
   0
  ],
  "rationale": "A core PCA safety rule is that only the patient operates the button (slide 8). The most tempting distractor is having a parent press it during sleep; PCA-by-proxy is unsafe because a sleeping patient is not in pain and dosing them can cause oversedation. The nurse and family must never activate the pump for the patient."
 },
 {
  "id": "x4e5q48",
  "exam": 5,
  "topic": "Adolescent — Head injury/CSF leak",
  "type": "mcq",
  "stem": "An adolescent with a head injury has clear drainage coming from the nose. Which action should the nurse take?",
  "options": [
   "Pack the nares with gauze to stop the drainage",
   "Have the teen blow the nose to clear the drainage",
   "Reassure the family that clear nasal drainage is expected",
   "Test the drainage for glucose and report a positive result as a possible CSF leak"
  ],
  "correct": [
   3
  ],
  "rationale": "Clear nasal or ear drainage after head trauma may be cerebrospinal fluid; glucose-positive drainage indicates a CSF leak, which opens the CNS to infection and must be reported (slides 10-11). The most tempting distractor is reassuring the family that clear drainage is normal; this overlooks a serious CSF leak. The nose is never packed or blown, as this could worsen the leak or introduce infection."
 },
 {
  "id": "x4e5q49",
  "exam": 5,
  "topic": "Adolescent — Sexual assault evidence/care",
  "type": "sata",
  "stem": "An adolescent presents to the emergency department after a sexual assault. Which nursing actions are appropriate? Select all that apply.",
  "options": [
   "Ask whether the patient has bathed or showered",
   "Obtain consent before performing any examination",
   "Quote the patient's exact words in the documentation",
   "Have the patient shower before the examination for comfort",
   "Contact a Sexual Assault Nurse Examiner (SANE) or Child Advocacy Center"
  ],
  "correct": [
   0,
   1,
   2,
   4
  ],
  "rationale": "Asking about bathing (which can destroy DNA evidence), obtaining consent, quoting the patient exactly, and involving a SANE/Child Advocacy Center are all correct (p.1588-1589). The most tempting distractor is letting the patient shower for comfort; although compassionate, showering washes away critical forensic evidence and must be avoided until after the exam."
 },
 {
  "id": "x4e5q50",
  "exam": 5,
  "topic": "Adolescent — Injury prevention priority",
  "type": "mcq",
  "stem": "Given the leading cause of death in adolescents, which statement is the priority safety teaching?",
  "options": [
   "\"Vaping is a safe alternative to smoking.\"",
   "\"Always wear a seat belt and never text or drink while driving.\"",
   "\"It is fine to ride with a friend who has been drinking as long as you wear a seat belt.\"",
   "\"You only need a helmet for motorcycles, not for bicycles.\""
  ],
  "correct": [
   1
  ],
  "rationale": "Motor-vehicle crashes are the number-one cause of death in adolescents, so seat belts and avoiding texting/impaired driving are the priority teaching (p.897-898). The most tempting distractor is riding with a drinking friend while wearing a seat belt; a seat belt does not make riding with an impaired driver safe — the teen should never ride with an impaired driver. Vaping is also NOT a safe alternative."
 },
 {
  "id": "x4e6q01",
  "exam": 6,
  "topic": "Erikson",
  "type": "mcq",
  "stem": "A 2-year-old in the clinic repeatedly says \"No!\" and insists on taking off his own shoes even though he struggles. According to Erikson, which psychosocial stage does this behavior reflect?",
  "options": [
   "Trust vs mistrust",
   "Autonomy vs shame and doubt",
   "Initiative vs guilt",
   "Industry vs inferiority"
  ],
  "correct": [
   1
  ],
  "rationale": "The toddler (1-3 y) is in autonomy vs shame/doubt; negativism (\"no\") and insisting on doing things himself reflect the drive for autonomy. Initiative vs guilt is the neighboring preschool (3-6 y) stage, in which the child plans and undertakes new tasks rather than asserting will through refusal; it is the tempting distractor but belongs to the older child."
 },
 {
  "id": "x4e6q02",
  "exam": 6,
  "topic": "Piaget",
  "type": "mcq",
  "stem": "An 18-month-old searches for a toy after the nurse hides it under a blanket. This behavior demonstrates which cognitive achievement described by Piaget?",
  "options": [
   "Object permanence",
   "Conservation of mass",
   "Reversibility of thought",
   "Deductive reasoning"
  ],
  "correct": [
   0
  ],
  "rationale": "Object permanence, knowing an object still exists when out of sight, is established by the end of the sensorimotor period (~18 mo) as the toddler transitions to preoperational thought. Conservation and reversibility are concrete-operational (school-age) skills and deductive reasoning is formal-operational (adolescent). Conservation is the tempting distractor but does not appear until about age 7."
 },
 {
  "id": "x4e6q03",
  "exam": 6,
  "topic": "Play",
  "type": "mcq",
  "stem": "Two 2-year-olds sit near each other in the playroom, each pushing a toy car separately without interacting. Which type of play is this?",
  "options": [
   "Associative play",
   "Parallel play",
   "Cooperative play",
   "Onlooker play"
  ],
  "correct": [
   1
  ],
  "rationale": "Toddlers engage in parallel play, playing alongside but not with other children. Associative play (interacting and sharing without organized goals) is the neighboring preschool pattern and the tempting distractor; cooperative play with rules belongs to the school-age child."
 },
 {
  "id": "x4e6q04",
  "exam": 6,
  "topic": "Toddler G&D",
  "type": "sata",
  "stem": "Which findings are expected developmental milestones for a healthy 24-month-old (2-year-old)? Select all that apply.",
  "options": [
   "Ties own shoelaces",
   "Speaks 2-word phrases",
   "Builds a tower of 6-7 blocks",
   "Rides a tricycle",
   "Runs and kicks a ball"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "rationale": "At 2 years the toddler uses two-word phrases (200-300 words), stacks 6-7 blocks, and runs/kicks a ball. Tying shoelaces is a 5-year skill and riding a tricycle is a 3-year skill; these older milestones are the tempting distractors and would not yet be expected."
 },
 {
  "id": "x4e6q05",
  "exam": 6,
  "topic": "Fears",
  "type": "mcq",
  "stem": "A hospitalized 20-month-old cries inconsolably and clings whenever the parent leaves the room. This behavior most reflects the predominant fear of toddlerhood, which is:",
  "options": [
   "Fear of body mutilation",
   "Fear of separation from parents",
   "Fear of loss of control",
   "Fear of altered body image"
  ],
  "correct": [
   1
  ],
  "rationale": "Separation from parents is the toddler's predominant fear, and separation anxiety peaks in this age group. Fear of body mutilation is the neighboring preschooler's chief fear and the tempting distractor; loss of control (school-age) and altered body image (adolescent) belong to older groups."
 },
 {
  "id": "x4e6q06",
  "exam": 6,
  "topic": "Vitals",
  "type": "mcq",
  "stem": "Which set of vital signs is within the expected range for a healthy, resting 2-year-old toddler?",
  "options": [
   "HR 70, RR 18, BP 120/70",
   "HR 150, RR 40, BP 72/48",
   "HR 80, RR 20, BP 112/60",
   "HR 100, RR 28, BP 90/56"
  ],
  "correct": [
   3
  ],
  "rationale": "Expected toddler ranges are approximately HR 90-110, RR 24-30, BP ~90/56. HR 80/RR 20/BP 112/60 describes the school-age child (the tempting distractor), HR 70/RR 18/BP 120/70 describes the adolescent, and the very high rates fit an infant."
 },
 {
  "id": "x4e6q07",
  "exam": 6,
  "topic": "Discipline",
  "type": "mcq",
  "stem": "A mother asks how to handle her 2-year-old's frequent temper tantrums in the grocery store. What is the nurse's best guidance?",
  "options": [
   "Pick the child up immediately and offer a snack to stop the crying",
   "Give a lengthy explanation of why the behavior is wrong",
   "Use a time-out of one minute per year plus loss of privileges for a week",
   "Ignore the tantrum while ensuring the child is safe"
  ],
  "correct": [
   3
  ],
  "rationale": "Tantrums are managed by ignoring the behavior while keeping the child safe; do not pick the child up unless in danger. Picking up and rewarding reinforces the tantrum. A lengthy reasoned explanation exceeds toddler (egocentric, preoperational) cognition, and elaborate week-long privilege loss suits older children."
 },
 {
  "id": "x4e6q08",
  "exam": 6,
  "topic": "Hospitalization",
  "type": "sata",
  "stem": "A toddler is admitted to the pediatric unit. Which nursing approaches support the toddler's development during hospitalization? Select all that apply.",
  "options": [
   "Provide detailed diagrams explaining the illness",
   "Maintain home routines and rituals as much as possible",
   "Offer simple choices such as which color cup to use",
   "Encourage the parents to room-in",
   "Discourage the security blanket to promote independence"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Maintaining routines/rituals, offering simple choices, and rooming-in support the toddler's autonomy and ease separation anxiety. Detailed diagrams require reasoning beyond the toddler, and a security (transitional) object should be encouraged, not removed."
 },
 {
  "id": "x4e6q09",
  "exam": 6,
  "topic": "Car seat",
  "type": "mcq",
  "stem": "The parents of a healthy 15-month-old ask about car safety. What does the nurse recommend?",
  "options": [
   "Move the child to a forward-facing seat now that he can walk",
   "Keep the child in a rear-facing car seat, in the back seat",
   "Use a belt-positioning booster seat",
   "Secure the child with the vehicle lap-and-shoulder belt alone"
  ],
  "correct": [
   1
  ],
  "rationale": "Toddlers should remain rear-facing as long as possible, at least until age 2 or the seat's height/weight maximum, in the back seat. A forward-facing 5-point harness is the next (preschool) step, a booster is for the school-age child, and the vehicle belt alone is unsafe until it fits properly."
 },
 {
  "id": "x4e6q10",
  "exam": 6,
  "topic": "Immunizations",
  "type": "mcq",
  "stem": "A 15-month-old is due for routine immunizations. Which vaccine is part of the recommended 12-18 month schedule?",
  "options": [
   "MMR (measles, mumps, rubella) first dose",
   "Tdap booster",
   "HPV series",
   "Meningococcal B"
  ],
  "correct": [
   0
  ],
  "rationale": "The first MMR dose is given at 12-15 months (with varicella, Hib, PCV, IPV, and Hep A). Tdap, HPV, and MenACWY are the 11-12 year preadolescent vaccines and MenB is given at 16-18 years; these are the tempting distractors from older schedules."
 },
 {
  "id": "x4e6q11",
  "exam": 6,
  "topic": "Nutrition",
  "type": "sata",
  "stem": "Parents of a 2-year-old worry that their child eats much less than as an infant and is a \"picky eater.\" Which statements should the nurse include when teaching about toddler nutrition? Select all that apply.",
  "options": [
   "The toddler should be forced to clean the plate at each meal",
   "A decreased appetite (\"physiologic anorexia\") is normal as growth slows",
   "Offering small portions and allowing food \"jags\" or rituals is appropriate",
   "Limit whole cow's milk to about 24 oz per day to prevent iron deficiency",
   "Provide only pureed foods to prevent choking"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Toddler growth slows, so physiologic anorexia and finicky/ritualistic eating are expected; small portions and limiting milk (excess milk displaces iron-rich foods) are correct. Forcing a child to clean the plate creates power struggles that undermine autonomy, and toddlers should eat chopped table foods (not purees), while still avoiding small round choking hazards."
 },
 {
  "id": "x4e6q12",
  "exam": 6,
  "topic": "Developmental delay",
  "type": "sata",
  "stem": "Which findings in an 18-month-old would the nurse consider possible developmental red flags requiring further evaluation? Select all that apply.",
  "options": [
   "Does not yet ride a tricycle",
   "Does not say any single words",
   "Does not walk independently",
   "Does not yet speak in full sentences",
   "Does not point to show interest or objects"
  ],
  "correct": [
   1,
   2,
   4
  ],
  "rationale": "By 18 months a toddler should say several single words, walk independently, and use gestures such as pointing; their absence is a red flag. Riding a tricycle (3 y) and speaking full sentences (preschool) are later milestones, so their absence at 18 months is normal, not a delay."
 },
 {
  "id": "x4e6q13",
  "exam": 6,
  "topic": "Kohlberg",
  "type": "mcq",
  "stem": "A toddler refrains from touching the hot stove only because \"Mommy will be mad.\" According to Kohlberg, this reasoning reflects which level of moral development?",
  "options": [
   "Preconventional (punishment-obedience orientation)",
   "Conventional (\"good boy/nice girl\")",
   "Postconventional (social contract)",
   "Postconventional (universal ethical principles)"
  ],
  "correct": [
   0
  ],
  "rationale": "The toddler is at the preconventional level, obeying to avoid punishment. Conventional morality (seeking approval, then law-and-order) develops in the school-age child, the tempting distractor, and postconventional reasoning emerges in adolescence."
 },
 {
  "id": "x4e6q14",
  "exam": 6,
  "topic": "Erikson",
  "type": "mcq",
  "stem": "A 4-year-old eagerly announces, \"I'm going to build a big tower all by myself!\" and starts stacking blocks. This drive to plan and undertake tasks reflects which Erikson stage?",
  "options": [
   "Autonomy vs shame and doubt",
   "Initiative vs guilt",
   "Industry vs inferiority",
   "Trust vs mistrust"
  ],
  "correct": [
   1
  ],
  "rationale": "The preschooler (about 3-6 y) is in initiative vs guilt, planning and initiating activities and feeling guilt when they fail or misbehave. Autonomy vs shame/doubt is the neighboring toddler stage (asserting will, \"no\") and the tempting distractor; industry vs inferiority is school-age."
 },
 {
  "id": "x4e6q15",
  "exam": 6,
  "topic": "Piaget",
  "type": "mcq",
  "stem": "A hospitalized 4-year-old tells the nurse, \"I'm sick because I was bad and hit my sister.\" Which characteristic of preschool thinking best explains this statement?",
  "options": [
   "Concrete operational logic",
   "Conservation",
   "Magical thinking and a sense of guilt",
   "Abstract reasoning"
  ],
  "correct": [
   2
  ],
  "rationale": "Preschoolers use magical thinking and, in the initiative-vs-guilt stage, may interpret illness as punishment for wrongdoing; the nurse reassures the child that the illness is not their fault. Concrete logic and conservation (school-age) and abstract reasoning (adolescent) are later cognitive abilities."
 },
 {
  "id": "x4e6q16",
  "exam": 6,
  "topic": "Play",
  "type": "mcq",
  "stem": "Several 4-year-olds play \"hospital\" together, borrowing each other's toy stethoscopes and taking turns being the \"doctor,\" though there are no formal rules. Which type of play is this?",
  "options": [
   "Parallel play",
   "Cooperative play with rules",
   "Solitary play",
   "Associative (dramatic pretend) play"
  ],
  "correct": [
   3
  ],
  "rationale": "Preschoolers engage in associative and dramatic pretend play, interacting and sharing without organized rules or goals. Parallel play is the neighboring toddler pattern (the tempting distractor), and cooperative play organized around rules is characteristic of school-age children."
 },
 {
  "id": "x4e6q17",
  "exam": 6,
  "topic": "Play/Teaching",
  "type": "sata",
  "stem": "A nurse is preparing a 5-year-old for a scheduled procedure. Which approaches are developmentally appropriate for this preschooler? Select all that apply.",
  "options": [
   "Explain the detailed physiology of the illness a week in advance",
   "Allow the child to handle equipment and perform medical play on a doll",
   "Give brief, simple explanations shortly before the procedure",
   "Apply an adhesive bandage over the puncture site afterward",
   "Use anatomical diagrams and abstract cause-and-effect reasoning"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Therapeutic/medical play with dolls, brief honest explanations close to the event, and a bandage (to address the mutilation fear that \"insides will leak out\") fit preschool cognition. Detailed physiology given far in advance increases worry, and abstract cause-and-effect reasoning exceeds preoperational thinking; those suit school-age/adolescent learners."
 },
 {
  "id": "x4e6q18",
  "exam": 6,
  "topic": "Fears",
  "type": "mcq",
  "stem": "After drawing blood from a 4-year-old, which nursing action best addresses the preschooler's predominant developmental fear?",
  "options": [
   "Explain that the small amount of blood taken will not harm the body, and apply an adhesive bandage",
   "Reassure the child that peers will not find out",
   "Encourage the child to verbalize concerns about appearance",
   "Provide privacy and confidentiality"
  ],
  "correct": [
   0
  ],
  "rationale": "Preschoolers fear body mutilation and \"insides leaking out,\" so applying a bandage and reassuring them the body is intact addresses this fear. Concern about peers/appearance and confidentiality address school-age and adolescent fears; they are tempting distractors from the wrong age."
 },
 {
  "id": "x4e6q19",
  "exam": 6,
  "topic": "Language",
  "type": "mcq",
  "stem": "Which language finding is expected for a healthy 5-year-old?",
  "options": [
   "Speech is about 50% intelligible to strangers",
   "Uses only two-word phrases",
   "Speech is nearly 100% intelligible with a vocabulary of about 2,100 words",
   "Uses abstract verbal reasoning and slang with peers"
  ],
  "correct": [
   2
  ],
  "rationale": "By age 5 speech is nearly 100% intelligible with roughly a 2,100-word vocabulary and 4-5 word sentences. About 50% intelligibility and two-word phrases are toddler milestones (the tempting distractors), and abstract verbal reasoning is an adolescent skill."
 },
 {
  "id": "x4e6q20",
  "exam": 6,
  "topic": "Car seat",
  "type": "mcq",
  "stem": "The nurse teaches the parents of a 4-year-old (35 lb) about car safety. Which restraint is most appropriate?",
  "options": [
   "Rear-facing car seat",
   "Forward-facing car seat with a 5-point harness, in the back seat",
   "Belt-positioning booster with the vehicle lap-and-shoulder belt",
   "Vehicle lap belt only"
  ],
  "correct": [
   1
  ],
  "rationale": "The preschooler uses a forward-facing car seat with a 5-point harness (transitioning to a booster at about 40 lb) in the back seat. Rear-facing is for toddlers/infants, a booster suits the older/heavier child, and the vehicle belt alone is unsafe until it fits properly."
 },
 {
  "id": "x4e6q21",
  "exam": 6,
  "topic": "Immunizations",
  "type": "sata",
  "stem": "A 5-year-old is at the clinic for pre-kindergarten booster immunizations. Which vaccines are part of the recommended 4-6 year schedule? Select all that apply.",
  "options": [
   "Tdap booster",
   "DTaP (5th dose)",
   "IPV (4th dose)",
   "MMR (2nd dose)",
   "Varicella (2nd dose)"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "rationale": "The 4-6 year \"Very DIM\" boosters are Varicella #2, DTaP #5, IPV #4, MMR #2, plus annual influenza. Tdap (not DTaP) is the booster given at the 11-12 year visit for older children and is the tempting distractor from the school-age schedule."
 },
 {
  "id": "x4e6q22",
  "exam": 6,
  "topic": "Kohlberg",
  "type": "mcq",
  "stem": "A 5-year-old shares toys mainly because \"then I get a sticker.\" According to Kohlberg, this reasoning is characteristic of which level?",
  "options": [
   "Preconventional (acts out of self-interest, to gain reward or avoid punishment)",
   "Conventional (\"good boy/nice girl\")",
   "Postconventional (social contract)",
   "Postconventional (universal principles)"
  ],
  "correct": [
   0
  ],
  "rationale": "Preschoolers remain at the preconventional level, doing \"good\" out of self-interest (reward/punishment). Conventional morality, behaving to gain others' approval, emerges in the school-age child and is the tempting distractor."
 },
 {
  "id": "x4e6q23",
  "exam": 6,
  "topic": "Vitals",
  "type": "mcq",
  "stem": "Which vital-sign set is within the expected range for a healthy 4-year-old?",
  "options": [
   "HR 150, RR 40, BP 70/50",
   "HR 85, RR 22, BP 100/60",
   "HR 70, RR 18, BP 120/70",
   "HR 110, RR 30, BP 90/56"
  ],
  "correct": [
   1
  ],
  "rationale": "Preschool ranges are approximately HR 85, RR 22, BP ~100/60. HR 110/RR 30/BP 90/56 is the toddler set (the neighboring, tempting distractor), HR 70/RR 18/BP 120/70 is the adolescent set, and the first option fits an infant."
 },
 {
  "id": "x4e6q24",
  "exam": 6,
  "topic": "Preschool G&D",
  "type": "sata",
  "stem": "Which gross- and fine-motor skills are expected in a typically developing 4- to 5-year-old? Select all that apply.",
  "options": [
   "Stacks only 3-4 blocks",
   "Skips and hops on one foot",
   "Catches a ball",
   "Dresses self and uses a fork",
   "Walks up stairs only with a hand held"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "By 4-5 years the preschooler skips/hops, catches a ball, and dresses independently using utensils. Stacking only 3-4 blocks and needing a hand held on stairs are toddler-level (about 18-month) skills, the tempting distractors, and would be regressive for a preschooler."
 },
 {
  "id": "x4e6q25",
  "exam": 6,
  "topic": "Teaching",
  "type": "mcq",
  "stem": "When is the best time to explain an upcoming injection to a 4-year-old?",
  "options": [
   "Several days ahead so the child has time to prepare",
   "During the injection to distract the child",
   "Only after the injection to avoid fear",
   "A brief, simple explanation shortly before the injection"
  ],
  "correct": [
   3
  ],
  "rationale": "Preschoolers should receive brief, simple explanations close to the time of the procedure so little time is spent worrying. Explaining days ahead fuels magical-thinking anxiety, and explaining only during or after the event denies the child appropriate preparation."
 },
 {
  "id": "x4e6q26",
  "exam": 6,
  "topic": "Erikson",
  "type": "mcq",
  "stem": "A hospitalized 9-year-old becomes upset about missing schoolwork and a science project. Understanding Erikson's stage of industry vs inferiority, which nursing action is most appropriate?",
  "options": [
   "Discourage schoolwork so the child can rest completely",
   "Arrange for the child to continue schoolwork and complete achievable tasks",
   "Focus all teaching only on the parents",
   "Provide a security object and maintain rituals"
  ],
  "correct": [
   1
  ],
  "rationale": "School-age children build a sense of industry through accomplishment; allowing schoolwork and achievable tasks preserves it and prevents feelings of inferiority. Providing a security object and rituals addresses toddler needs (the tempting distractor), and discouraging all productive activity fosters inferiority."
 },
 {
  "id": "x4e6q27",
  "exam": 6,
  "topic": "Piaget",
  "type": "mcq",
  "stem": "A 7-year-old watches the nurse pour juice from a short wide cup into a tall thin glass and correctly states the amount of juice is the same. This demonstrates which Piagetian ability?",
  "options": [
   "Object permanence",
   "Conservation",
   "Magical thinking",
   "Abstract, hypothetical reasoning"
  ],
  "correct": [
   1
  ],
  "rationale": "Conservation, recognizing that quantity stays the same despite a change in shape, is a hallmark of concrete operational thought (about 7-11 y). Object permanence and magical thinking belong to younger children; abstract/hypothetical reasoning is formal operational (adolescent) and the tempting distractor."
 },
 {
  "id": "x4e6q28",
  "exam": 6,
  "topic": "Play",
  "type": "mcq",
  "stem": "Which activity best reflects the play of a typical 10-year-old?",
  "options": [
   "Playing a board game with rules and adding to a card collection",
   "Parallel play with push toys",
   "Solitary dramatic play with imaginary friends",
   "Associative dress-up play without rules"
  ],
  "correct": [
   0
  ],
  "rationale": "School-age children enjoy cooperative games with rules, teams, clubs, hobbies, and collections. Parallel play is toddler-level, and associative or imaginary dramatic play without rules is preschool-level (the tempting distractor for this in-between age)."
 },
 {
  "id": "x4e6q29",
  "exam": 6,
  "topic": "Kohlberg",
  "type": "sata",
  "stem": "A nurse plans care for a school-age child at Kohlberg's conventional level of moral reasoning. Which approaches align with this stage? Select all that apply.",
  "options": [
   "Rely on abstract discussion of universal ethical principles",
   "Use the rules of games and emphasize fairness when teaching",
   "Explain the rationale (\"hows and whys\") behind hospital rules",
   "Praise the child for following the therapeutic regimen \"the right way\"",
   "Prevent behavior solely by threatening punishment, since only fear motivates this age"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Conventional-level children want approval and respect rules, so using game rules and fairness, explaining rationale, and praising \"doing it right\" work well. Reasoning about abstract universal principles is postconventional (adolescent/adult), and pure punishment-avoidance is preconventional (younger child); both are mismatched."
 },
 {
  "id": "x4e6q30",
  "exam": 6,
  "topic": "Fears",
  "type": "mcq",
  "stem": "A 9-year-old scheduled for surgery is most likely to fear which of the following, consistent with the predominant fear of the school-age child?",
  "options": [
   "Separation from parents",
   "That objects in the room are alive",
   "Emancipation from the family",
   "Loss of control and not keeping up with peers"
  ],
  "correct": [
   3
  ],
  "rationale": "School-age children fear loss of control, injury/death, and falling behind peers. Separation is the toddler's fear and animism (objects being alive) is preschool magical thinking; these are tempting distractors from younger stages."
 },
 {
  "id": "x4e6q31",
  "exam": 6,
  "topic": "Vitals",
  "type": "mcq",
  "stem": "Which vital-sign set is expected for a healthy, resting 8-year-old?",
  "options": [
   "HR 110, RR 28, BP 90/56",
   "HR 75, RR 20, BP 112/60",
   "HR 70, RR 16, BP 120/70",
   "HR 150, RR 40, BP 72/48"
  ],
  "correct": [
   1
  ],
  "rationale": "School-age ranges are approximately HR 70-80, RR ~20, BP ~112/60. HR 110/RR 28/BP 90/56 is the toddler set and HR 70/RR 16/BP 120/70 is the adolescent set; these are the neighboring, tempting distractors."
 },
 {
  "id": "x4e6q32",
  "exam": 6,
  "topic": "Hospitalization",
  "type": "sata",
  "stem": "Which nursing approaches are developmentally appropriate for a hospitalized 8-year-old? Select all that apply.",
  "options": [
   "Rely on magical, fantasy-based explanations of procedures",
   "Give concrete explanations and let the child handle equipment beforehand",
   "Allow the child to keep up with schoolwork and hobbies",
   "Encourage contact with peers and friends",
   "Interview the child alone and stress confidentiality about sexual activity"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Concrete explanations with hands-on equipment, continuing schoolwork/hobbies, and peer contact fit concrete-operational, industry-focused school-agers. Confidential interviewing about sexuality suits adolescents, and magical/fantasy explanations suit preschoolers; both are the wrong age."
 },
 {
  "id": "x4e6q33",
  "exam": 6,
  "topic": "Immunizations",
  "type": "mcq",
  "stem": "An 11-year-old presents for a well-child visit. Which immunizations are recommended at this preadolescent (11-12 year) visit?",
  "options": [
   "First MMR and first varicella",
   "Tdap, HPV series, and MenACWY",
   "DTaP #5, IPV #4, and MMR #2",
   "MenB and a MenACWY booster"
  ],
  "correct": [
   1
  ],
  "rationale": "The 11-12 year visit covers Tdap, the HPV series, and MenACWY. The 4-6 year \"Very DIM\" boosters (DTaP #5, IPV #4, MMR #2) are the tempting distractor from the younger schedule, first MMR/varicella are toddler doses, and MenB with a MenACWY booster are given at 16-18 years."
 },
 {
  "id": "x4e6q34",
  "exam": 6,
  "topic": "Nutrition/Obesity",
  "type": "mcq",
  "stem": "A school-age child has a BMI at the 96th percentile for age. Which teaching is most appropriate?",
  "options": [
   "Place the child on a strict adult 1,200-calorie diet without family involvement",
   "Reassure the parents that \"baby fat\" always resolves at puberty",
   "Recommend meal skipping to reduce calories",
   "Promote family-centered lifestyle change with at least 60 minutes of activity daily and eliminating sugar-sweetened drinks"
  ],
  "correct": [
   3
  ],
  "rationale": "BMI-for-age above the 95th percentile is obese; management is family-centered lifestyle change, structured meals, no sugar-sweetened beverages, and at least 60 minutes of daily activity. Strict solo adult diets, meal skipping, and dismissing the finding as \"baby fat\" are inappropriate and unsafe."
 },
 {
  "id": "x4e6q35",
  "exam": 6,
  "topic": "School-Age G&D",
  "type": "sata",
  "stem": "Which findings are expected in a healthy school-age child (6-12 years)? Select all that apply.",
  "options": [
   "Thinks abstractly about hypothetical future careers",
   "Gains about 3-5 lb per year and grows about 1-2 in per year",
   "Permanent teeth are erupting",
   "Enjoys clubs, teams, and collections",
   "Engages primarily in parallel play"
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "School-agers gain about 3-5 lb and grow about 1-2 in per year, erupt permanent teeth, and enjoy clubs/teams/collections (industry). Abstract reasoning about hypothetical futures is formal-operational (adolescent) and parallel play is toddler-level; these are the tempting distractors from adjacent stages."
 },
 {
  "id": "x4e6q36",
  "exam": 6,
  "topic": "Car seat",
  "type": "mcq",
  "stem": "The nurse teaches the parent of a 7-year-old (48 lb, 49 in) about car safety. What is recommended?",
  "options": [
   "A rear-facing car seat",
   "A forward-facing 5-point harness only",
   "A belt-positioning booster in the back until the vehicle seat belt fits properly",
   "The vehicle lap belt alone across the abdomen"
  ],
  "correct": [
   2
  ],
  "rationale": "School-age children use a belt-positioning booster in the back seat until the lap-and-shoulder belt fits correctly (lap belt low across the hips/thighs, shoulder belt across the chest). Rear-facing and harness-only options are for younger children, and a lap belt across the abdomen risks internal injury."
 },
 {
  "id": "x4e6q37",
  "exam": 6,
  "topic": "Piaget/Teaching",
  "type": "mcq",
  "stem": "A 10-year-old scheduled for a cast application asks many questions about \"how\" and \"why\" it works. Based on concrete operational thinking, the nurse should:",
  "options": [
   "Avoid explanations because they will confuse the child",
   "Give concrete, factual explanations and let the child handle the casting materials",
   "Use abstract analogies about distant future consequences",
   "Tell the child the cast is a \"magic shield\" so it seems less scary"
  ],
  "correct": [
   1
  ],
  "rationale": "Concrete operational children reason about real, tangible things and cooperate better once they understand the \"hows and whys\"; letting them handle equipment fits this stage. Abstract analogies exceed concrete thinking, and magical framing suits preschoolers (the tempting distractor from a younger stage)."
 },
 {
  "id": "x4e6q38",
  "exam": 6,
  "topic": "Erikson",
  "type": "sata",
  "stem": "A nurse observes several school-age children on the unit. Which behaviors indicate a healthy sense of industry rather than inferiority? Select all that apply.",
  "options": [
   "Refusing all activities and saying \"I can't do anything right\"",
   "Proudly completing a model kit and showing it to staff",
   "Keeping a scorebook for the unit's board-game \"club\"",
   "Persisting to finish a difficult puzzle",
   "Withdrawing from peers because \"everyone is better than me\""
  ],
  "correct": [
   1,
   2,
   3
  ],
  "rationale": "Completing projects, organizing clubs, and persisting at challenging tasks build industry and competence. Statements of helplessness and peer withdrawal reflect a sense of inferiority, the outcome to be prevented, so they are not signs of healthy industry."
 },
 {
  "id": "x4e6q39",
  "exam": 6,
  "topic": "Erikson",
  "type": "mcq",
  "stem": "A 15-year-old frequently changes clothing styles, music preferences, and friend groups while asking \"who am I really?\" This behavior reflects which Erikson stage?",
  "options": [
   "Industry vs inferiority",
   "Identity vs role confusion",
   "Initiative vs guilt",
   "Intimacy vs isolation"
  ],
  "correct": [
   1
  ],
  "rationale": "Early/mid adolescence is identity vs role confusion, experimenting with roles to form a sense of self. Industry vs inferiority is the neighboring school-age stage (the tempting distractor); intimacy vs isolation is the task of late adolescence and young adulthood."
 },
 {
  "id": "x4e6q40",
  "exam": 6,
  "topic": "Piaget",
  "type": "mcq",
  "stem": "A 16-year-old can debate the ethical pros and cons of a hypothetical policy and reason about \"what could be.\" This ability reflects which Piagetian stage?",
  "options": [
   "Concrete operational",
   "Formal operational",
   "Preoperational",
   "Sensorimotor"
  ],
  "correct": [
   1
  ],
  "rationale": "Formal operational thought, abstract, hypothetical, and deductive reasoning, emerges in adolescence. Concrete operational thinking (school-age) is limited to real, tangible situations and is the tempting distractor; it cannot fully handle abstract hypotheticals."
 },
 {
  "id": "x4e6q41",
  "exam": 6,
  "topic": "Kohlberg",
  "type": "mcq",
  "stem": "A 17-year-old joins a protest, stating that some laws are \"unjust and should be changed to protect people's rights.\" According to Kohlberg, this reasoning reflects which level?",
  "options": [
   "Preconventional",
   "Conventional (law-and-order)",
   "Postconventional (social contract / universal principles)",
   "Premoral"
  ],
  "correct": [
   2
  ],
  "rationale": "Postconventional reasoning, social contract and self-chosen universal ethical principles, becomes possible in adolescence, when rules are seen as changeable to serve human rights. Conventional law-and-order reasoning (rules are fixed) is the neighboring school-age level and the tempting distractor."
 },
 {
  "id": "x4e6q42",
  "exam": 6,
  "topic": "Hospitalization",
  "type": "sata",
  "stem": "Which nursing approaches are developmentally appropriate when caring for a hospitalized adolescent? Select all that apply.",
  "options": [
   "Prohibit personal clothing and posters to enforce unit rules",
   "Interview the teen without parents present for part of the visit",
   "Maintain confidentiality and screen risk behaviors privately",
   "Encourage peer visits and contact with school",
   "Focus teaching on the \"here and now\" and immediate effects"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "rationale": "Interviewing without parents, confidentiality, peer/school contact, and present-focused (\"here and now\") teaching support adolescent identity and autonomy. Allowing personal clothing, posters, and friend visits actually supports identity during prolonged hospitalization, so prohibiting them is inappropriate."
 },
 {
  "id": "x4e6q43",
  "exam": 6,
  "topic": "Fears",
  "type": "mcq",
  "stem": "A 14-year-old who needs a leg cast is most distressed that \"everyone will stare and I'll look different.\" This reflects the predominant fear of adolescence, which is:",
  "options": [
   "Separation from parents",
   "Body mutilation",
   "Altered body image and being different from peers",
   "Loss of control during the procedure"
  ],
  "correct": [
   2
  ],
  "rationale": "Adolescents fear altered body image and being different from peers. Separation (toddler), mutilation (preschool), and loss of control (school-age) are the fears of younger groups; loss of control is the tempting neighboring distractor."
 },
 {
  "id": "x4e6q44",
  "exam": 6,
  "topic": "Vitals",
  "type": "mcq",
  "stem": "Which vital-sign set is expected for a healthy 16-year-old at rest?",
  "options": [
   "HR 70, RR 18, BP 120/70",
   "HR 100, RR 26, BP 90/56",
   "HR 80, RR 22, BP 100/60",
   "HR 120, RR 30, BP 85/55"
  ],
  "correct": [
   0
  ],
  "rationale": "By late adolescence values approach adult norms: HR ~70, RR ~18-20, BP ~120/70. HR 80/RR 22/BP 100/60 fits a preschooler and the higher rates fit toddlers/infants; these are the tempting distractors from younger groups."
 },
 {
  "id": "x4e6q45",
  "exam": 6,
  "topic": "Immunizations",
  "type": "mcq",
  "stem": "A 16-year-old is at the clinic. Which immunization is specifically recommended at this age?",
  "options": [
   "First HPV dose only",
   "DTaP #5",
   "First MMR",
   "MenACWY booster"
  ],
  "correct": [
   3
  ],
  "rationale": "A MenACWY booster is recommended at age 16 (with MenB at 16-18 and annual influenza; HPV catch-up if not already completed). DTaP #5 is a 4-6 year booster and first MMR is a toddler dose; these are tempting distractors from younger schedules."
 },
 {
  "id": "x4e6q46",
  "exam": 6,
  "topic": "Nutrition",
  "type": "sata",
  "stem": "Which statements about adolescent nutrition should the nurse include in teaching? Select all that apply.",
  "options": [
   "A declining appetite (\"physiologic anorexia\") is expected and needs no follow-up",
   "Iron needs increase for menstruation and expanding blood volume",
   "Calcium and vitamin D are important for rapid bone growth",
   "Caloric needs rise to support the growth spurt",
   "Warning signs such as amenorrhea, bradycardia, and profound weight loss may indicate disordered eating"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "rationale": "Adolescents have increased iron, calcium/vitamin D, and calorie needs during the growth spurt, and disordered-eating red flags (amenorrhea, bradycardia, weight loss) warrant referral. Physiologic anorexia is a normal toddler finding, not adolescent, and unexplained weight loss in a teen should never be ignored."
 },
 {
  "id": "x4e6q47",
  "exam": 6,
  "topic": "Play/Social",
  "type": "mcq",
  "stem": "Which activity best supports the psychosocial development of a 15-year-old?",
  "options": [
   "Solitary parallel activities away from others",
   "Participation in peer-group and team activities",
   "Dramatic pretend play with dolls",
   "Adult-supervised board games as the primary social outlet"
  ],
  "correct": [
   1
  ],
  "rationale": "Adolescents form identity largely through peer-group and team activities and peer acceptance. Parallel play (toddler), dramatic pretend play (preschool), and adult-supervised board games as the main social outlet (school-age) belong to younger stages."
 },
 {
  "id": "x4e6q48",
  "exam": 6,
  "topic": "Injury prevention",
  "type": "sata",
  "stem": "The nurse provides anticipatory guidance to the parents of a 16-year-old. Which points are priorities for adolescent injury prevention? Select all that apply.",
  "options": [
   "A rear-facing car seat should be used until the growth spurt is complete",
   "Motor-vehicle crashes are the leading cause of adolescent death; always wear a seat belt and never text or drive impaired",
   "Store firearms locked and unloaded with ammunition stored separately",
   "Screen for depression and suicide risk",
   "Discuss substance-use and impaired-driving risks"
  ],
  "correct": [
   1,
   2,
   3,
   4
  ],
  "rationale": "Motor-vehicle crashes are the number-one cause of adolescent death, and firearms, suicide/depression, and substance use are major risks, all appropriate priorities. Rear-facing car seats are for toddlers; an adolescent uses a properly fitted seat belt, making that option clearly wrong."
 },
 {
  "id": "x4e6q49",
  "exam": 6,
  "topic": "Car safety",
  "type": "mcq",
  "stem": "When teaching a 16-year-old about correct seat-belt use, which instruction is correct?",
  "options": [
   "Place the shoulder belt behind the back so it does not touch the neck",
   "The lap belt should lie low across the hips/upper thighs and the shoulder belt across the chest",
   "A booster seat is still required at this age",
   "The lap belt should rest across the abdomen for comfort"
  ],
  "correct": [
   1
  ],
  "rationale": "A properly fitted belt has the lap portion low across the hips/upper thighs and the shoulder portion across the chest and shoulder (not the face, neck, or abdomen). Placing the shoulder belt behind the back or the lap belt across the abdomen risks injury, and a booster is no longer needed once the belt fits."
 },
 {
  "id": "x4e6q50",
  "exam": 6,
  "topic": "Teaching",
  "type": "mcq",
  "stem": "To improve a 15-year-old's adherence to a new diabetes regimen, which teaching strategy best fits adolescent cognition and psychosocial needs?",
  "options": [
   "Emphasize how good control affects the teen \"here and now,\" such as appearance and daily activities, and involve the teen in decisions",
   "Direct all teaching to the parents and exclude the teen",
   "Focus only on complications that may occur in 30 years",
   "Use dolls and dramatic play to explain insulin"
  ],
  "correct": [
   0
  ],
  "rationale": "Adolescents respond to present-focused (\"here and now\") teaching tied to immediate, personal concerns and to being included in decisions (formal-operational reasoning, identity needs). Excluding the teen, focusing only on distant consequences, or using preschool play techniques do not fit this age."
 }
]
};
