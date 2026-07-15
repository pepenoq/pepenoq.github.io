/* Psychopharmacology Word Scramble — vocabulary data
   window.PSYCHOPHARM_WORDS — consumed by scramble.js via SCRAMBLE_CONFIG.

   Terms, clues, and definitions are drawn from the two assigned NUR422
   Psychopharmacology materials: the 'Psychopharmacology Review' lecture
   slides (exam blueprint) and FA Davis / Townsend & Morgan Chapter 4,
   'Psychopharmacology.' Clues are written to make the player reason
   (mechanism -> effect -> nursing action), not just recall a label.
   Educational study aid only.

   92 terms across 7 categories. */

window.PSYCHOPHARM_WORDS = [
  {
    "word": "DOPAMINE",
    "category": "Foundations & Neurotransmitters",
    "clue": "Excess activity of this neurotransmitter is linked to hallucinations and delusions — so the drug class that BLOCKS it is the one expected for psychosis. Name the neurotransmitter.",
    "hint": "Its 'hypothesis' explains psychosis; antipsychotics block its D2 receptor.",
    "def": "The neurotransmitter whose excess is tied to psychosis; antipsychotics work by blocking its (D2) receptors, which also produces EPS and hyperprolactinemia.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "SEROTONIN",
    "category": "Foundations & Neurotransmitters",
    "clue": "SSRIs raise it, MAOIs preserve it, and too much of it at once causes a potentially fatal 'syndrome.' Which mood neurotransmitter?",
    "hint": "5-HT; low levels are tied to depressed mood.",
    "def": "A monoamine neurotransmitter central to mood; low synaptic levels contribute to depression, and overstimulation causes serotonin syndrome.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "NOREPINEPHRINE",
    "category": "Foundations & Neurotransmitters",
    "clue": "MAOIs let tyramine trigger a massive release of THIS transmitter from nerve terminals, causing vasoconstriction and hypertensive crisis. Name it.",
    "hint": "A monoamine raised by SNRIs, TCAs, and stimulants.",
    "def": "A monoamine neurotransmitter involved in mood and arousal; its sudden release drives the MAOI + tyramine hypertensive crisis.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "GABA",
    "category": "Foundations & Neurotransmitters",
    "clue": "The brain's main inhibitory (calming) neurotransmitter — benzodiazepines enhance it at the GABA-A receptor, which is WHY they work fast but also why tolerance and withdrawal develop.",
    "hint": "Four letters; increasing chloride influx calms the neuron.",
    "def": "Gamma-aminobutyric acid, the primary inhibitory neurotransmitter; benzodiazepines enhance its effect (increased chloride influx), calming the neuron quickly.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "AGONIST",
    "category": "Foundations & Neurotransmitters",
    "clue": "A drug that ACTIVATES a receptor (the opposite of blocking it). Buspirone is one at 5-HT1A; ramelteon is one at melatonin receptors. What is this kind of drug called?",
    "hint": "It mimics the neurotransmitter and turns the receptor on.",
    "def": "A drug that activates a receptor, mimicking the natural neurotransmitter.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "ANTAGONIST",
    "category": "Foundations & Neurotransmitters",
    "clue": "A drug that BLOCKS a receptor and dampens its biological reaction — the mechanism behind every antipsychotic's D2 action. What is this kind of drug called?",
    "hint": "It occupies the receptor and turns the response off.",
    "def": "A drug that blocks a receptor and dampens the biological reaction; antipsychotics are dopamine antagonists.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "REUPTAKE",
    "category": "Foundations & Neurotransmitters",
    "clue": "SSRIs, SNRIs, and TCAs all 'block' THIS process at the presynaptic neuron, leaving more neurotransmitter in the synapse. Name the process.",
    "hint": "Reabsorption of a transmitter back into the neuron that released it.",
    "def": "The reabsorption of a neurotransmitter into the presynaptic neuron; blocking it raises synaptic transmitter levels — the core antidepressant mechanism.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "RECEPTORS",
    "category": "Foundations & Neurotransmitters",
    "clue": "These membrane binding sites are what drugs activate or block; antidepressants need WEEKS because THESE must adapt, not just the transmitter level rise. Name them.",
    "hint": "Molecules on the cell membrane that bind neurotransmitters.",
    "def": "Membrane binding sites for neurotransmitters; their slow adaptation explains the weeks-long onset of antidepressants.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "SYNAPSE",
    "category": "Foundations & Neurotransmitters",
    "clue": "The tiny junction between neurons where most psychotropic drugs act, changing transmitter release and receptor binding. Name this gap.",
    "hint": "The cleft a neurotransmitter crosses to signal the next neuron.",
    "def": "The junction between neurons across which neurotransmitters carry signals; the site most psychotropic medications act upon.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "MONOAMINE",
    "category": "Foundations & Neurotransmitters",
    "clue": "The 'hypothesis of depression' is named for this family of transmitters (serotonin, norepinephrine, dopamine). What word names the family?",
    "hint": "The '____ hypothesis' of depression; also the target of MAO.",
    "def": "A class of neurotransmitters (serotonin, norepinephrine, dopamine) whose low synaptic levels are hypothesized to cause depression.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "SSRI",
    "category": "Antidepressants",
    "clue": "First-line, best-tolerated antidepressant class; blocks serotonin reuptake and needs 4-6 weeks for full effect. Give the acronym.",
    "hint": "Selective ______ Reuptake Inhibitor.",
    "def": "Selective Serotonin Reuptake Inhibitor — first-line antidepressant class (fluoxetine, sertraline, escitalopram); 4-6 weeks to full effect.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "FLUOXETINE",
    "category": "Antidepressants",
    "clue": "A prototype SSRI: if a client says after 2 weeks 'I don't feel better,' the RIGHT teaching is that THIS drug can take up to 4 weeks. Name the generic.",
    "hint": "Its onset lag is the classic 'keep taking it' teaching point.",
    "def": "A prototype SSRI; onset is gradual over 4-6 weeks, so early non-response calls for teaching, not a medication change.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "SERTRALINE",
    "category": "Antidepressants",
    "clue": "A commonly prescribed SSRI on the cheat sheet — blocks serotonin reuptake with fewer anticholinergic/cardiac effects than TCAs. Name the generic.",
    "hint": "Brand Zoloft; an SSRI listed on the high-yield sheet.",
    "def": "A first-line SSRI antidepressant that blocks serotonin reuptake; better tolerated than TCAs or MAOIs.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "SNRI",
    "category": "Antidepressants",
    "clue": "This class blocks BOTH serotonin and norepinephrine reuptake and is also used for chronic pain/neuropathy. Give the acronym.",
    "hint": "Serotonin-______ Reuptake Inhibitor (venlafaxine, duloxetine).",
    "def": "Serotonin-Norepinephrine Reuptake Inhibitor (venlafaxine, duloxetine); also used for chronic pain and neuropathy.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "VENLAFAXINE",
    "category": "Antidepressants",
    "clue": "An SNRI that blocks serotonin AND norepinephrine reuptake; in one study, adding aripiprazole helped older adults who did not respond to it. Name the generic.",
    "hint": "Brand Effexor; a first-choice SNRI.",
    "def": "An SNRI antidepressant blocking serotonin and norepinephrine reuptake; used for depression and anxiety.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "DULOXETINE",
    "category": "Antidepressants",
    "clue": "An SNRI especially useful when depression coexists with neuropathic pain. Name the generic.",
    "hint": "Brand Cymbalta; SNRI also used for neuropathy.",
    "def": "An SNRI antidepressant that also relieves neuropathic pain by blocking serotonin and norepinephrine reuptake.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "TCA",
    "category": "Antidepressants",
    "clue": "The older antidepressant class with a narrow safety margin: photosensitivity, anticholinergic effects, and LETHAL in overdose. Give the acronym.",
    "hint": "Tri______ Antidepressant.",
    "def": "Tricyclic Antidepressant — older class (imipramine, amitriptyline); causes photosensitivity and anticholinergic effects and is lethal in overdose.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "AMITRIPTYLINE",
    "category": "Antidepressants",
    "clue": "A TCA whose broad receptor action (histamine, ACh, alpha) explains its many side effects; teach sunscreen and limit the supply after a suicide attempt. Name the generic.",
    "hint": "A classic tricyclic; signature effect is photosensitivity.",
    "def": "A tricyclic antidepressant; blocks serotonin/NE reuptake but also histamine, ACh, and alpha receptors, causing numerous side effects and lethal overdose risk.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "IMIPRAMINE",
    "category": "Antidepressants",
    "clue": "A prototype TCA — remember the class is highly LETHAL in overdose, so a suicidal client gets only a 1-week supply. Name the generic.",
    "hint": "An older tricyclic listed on the cheat sheet.",
    "def": "A tricyclic antidepressant; cardiac-conduction effects make TCAs highly lethal in overdose.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "PHOTOSENSITIVITY",
    "category": "Antidepressants",
    "clue": "The signature TCA (and antipsychotic) side effect that means 'teach sunscreen and sun avoidance.' Name it.",
    "hint": "Increased vulnerability to severe sunburn.",
    "def": "Increased sensitivity to UV light causing severe sunburn risk; a signature TCA and antipsychotic side effect requiring sunscreen teaching.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "MAOI",
    "category": "Antidepressants",
    "clue": "Last-line antidepressant class due to interactions; blocking this enzyme lets tyramine build up and trigger hypertensive crisis. Give the acronym.",
    "hint": "Monoamine ______ Inhibitor.",
    "def": "Monoamine Oxidase Inhibitor — antidepressant class (phenelzine, tranylcypromine, selegiline); tyramine foods cause hypertensive crisis.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "PHENELZINE",
    "category": "Antidepressants",
    "clue": "A prototype MAOI: teach a strict low-tyramine diet for the FULL duration of therapy to avoid hypertensive crisis. Name the generic.",
    "hint": "A classic MAOI antidepressant.",
    "def": "An MAOI antidepressant; requires a low-tyramine diet because MAO inhibition lets dietary tyramine trigger hypertensive crisis.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "SELEGILINE",
    "category": "Antidepressants",
    "clue": "An MAOI also available as a transdermal PATCH, which at its lowest dose carries lower dietary-restriction risk. Name the generic.",
    "hint": "An MAOI with a skin-patch formulation.",
    "def": "An MAOI available as a transdermal patch; the patch at low dose reduces (but does not eliminate) dietary tyramine risk.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "TYRAMINE",
    "category": "Antidepressants",
    "clue": "Normally broken down by MAO; when an MAOI blocks that enzyme, THIS dietary amine accumulates and triggers a hypertensive crisis. Name it.",
    "hint": "Found in aged cheese, red wine, and cured meats.",
    "def": "A dietary amine (aged cheese, red wine, cured meats) normally degraded by MAO; with MAOIs it triggers norepinephrine release and hypertensive crisis.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "HYPERTENSIVE CRISIS",
    "category": "Antidepressants",
    "clue": "The MAOI + tyramine emergency: a severe BP spike to 180/120 or higher. Name this two-word event.",
    "hint": "Severe, sudden rise in blood pressure (>=180/120).",
    "def": "A dangerous, severe rise in blood pressure (>=180/120); the classic MAOI-plus-tyramine reaction.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "SEROTONIN SYNDROME",
    "category": "Antidepressants",
    "clue": "Combining serotonergic drugs (e.g., SSRI + MAOI) can cause THIS potentially fatal overstimulation: agitation, hyperreflexia, hyperthermia, rigidity. Name it.",
    "hint": "A 'too much serotonin' toxidrome; stop the drug and support.",
    "def": "A potentially fatal syndrome of serotonin overstimulation (agitation, hyperreflexia, vital-sign swings, hyperthermia, rigidity); treat by stopping the offending drug and supportive care.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "BUPROPION",
    "category": "Antidepressants",
    "clue": "An atypical antidepressant that also aids smoking cessation and ADHD — but AVOID it in seizure disorders because it lowers the seizure threshold. Name the generic.",
    "hint": "Brand Wellbutrin/Zyban; never double the dose (seizure risk).",
    "def": "An atypical antidepressant that decreases dopamine/NE reuptake; aids smoking cessation and ADHD but lowers the seizure threshold — contraindicated in seizure disorders.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "MIRTAZAPINE",
    "category": "Antidepressants",
    "clue": "An atypical antidepressant that is SEDATING, so it is often used to help sleep. Name the generic.",
    "hint": "Brand Remeron; a sedating atypical.",
    "def": "An atypical antidepressant that potentiates norepinephrine and serotonin; sedating, so it is often used for sleep.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "TRAZODONE",
    "category": "Antidepressants",
    "clue": "A sedating atypical antidepressant used for sleep; watch for the rare adverse effect priapism. Name the generic.",
    "hint": "Brand Desyrel; sedating, risk of priapism.",
    "def": "A sedating atypical antidepressant used for insomnia; alters serotonin effect and carries a risk of priapism.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "ESKETAMINE",
    "category": "Antidepressants",
    "clue": "A nasal-spray NMDA-receptor antagonist for treatment-resistant depression; given WITH an oral antidepressant under observation (REMS). Name the generic.",
    "hint": "Brand Spravato; a Schedule III nasal spray.",
    "def": "A nasal-spray NMDA (glutamate) receptor antagonist for treatment-resistant depression; used with an oral antidepressant under a restricted REMS program.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "DISCONTINUATION",
    "category": "Antidepressants",
    "clue": "Stopping an antidepressant abruptly can cause this 'syndrome' (dizziness, lethargy, headache, nausea) — paroxetine has the highest risk. Name the syndrome word.",
    "hint": "Why antidepressants are tapered, not stopped suddenly.",
    "def": "Discontinuation syndrome — withdrawal-like symptoms after stopping an antidepressant abruptly; antidepressants should be tapered.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "ANTIPSYCHOTIC",
    "category": "Antipsychotics & EPS",
    "clue": "The drug class expected for hallucinations, delusions, mania, and psychosis — because it blocks dopamine. Name the class (also called a neuroleptic).",
    "hint": "Also called a 'neuroleptic' or historically 'major tranquilizer.'",
    "def": "The drug class that treats psychosis by blocking dopamine (D2) receptors; also called neuroleptics.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "HALOPERIDOL",
    "category": "Antipsychotics & EPS",
    "clue": "A first-generation (typical) antipsychotic with HIGH EPS risk; a client on it staring upward with muscle spasms needs emergency benztropine. Name the generic.",
    "hint": "Brand Haldol; a non-phenothiazine typical antipsychotic.",
    "def": "A first-generation (typical) antipsychotic; strong D2 blockade means high EPS risk, including acute dystonia.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "CHLORPROMAZINE",
    "category": "Antipsychotics & EPS",
    "clue": "A PHENOTHIAZINE (1st-gen) antipsychotic; the word 'phenothiazine' should trigger 'typical, high EPS risk.' It can also mask early lithium toxicity. Name the generic.",
    "hint": "Brand Thorazine; the original phenothiazine.",
    "def": "A first-generation phenothiazine antipsychotic; high EPS risk, and it can mask early signs of lithium toxicity.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "PHENOTHIAZINE",
    "category": "Antipsychotics & EPS",
    "clue": "On the exam this vocabulary word is a shortcut: it always means 1st-generation, typical, HIGH EPS risk. Name this antipsychotic subgroup.",
    "hint": "Includes chlorpromazine, fluphenazine, perphenazine, thioridazine.",
    "def": "A subgroup of first-generation antipsychotics (chlorpromazine, fluphenazine, etc.); the term signals typical, high-EPS-risk agents.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "CLOZAPINE",
    "category": "Antipsychotics & EPS",
    "clue": "A 2nd-gen antipsychotic with a UNIQUE fatal risk — agranulocytosis — requiring routine WBC/ANC monitoring. Which drug?",
    "hint": "Sore throat + fever + malaise on this drug = urgent WBC check.",
    "def": "A second-generation antipsychotic uniquely associated with agranulocytosis; requires REMS-based WBC/ANC monitoring.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "RISPERIDONE",
    "category": "Antipsychotics & EPS",
    "clue": "A 2nd-gen (atypical) antipsychotic — blocks dopamine AND serotonin, with lower EPS but higher metabolic risk than typicals. Name the generic.",
    "hint": "Brand Risperdal; a commonly used atypical.",
    "def": "A second-generation antipsychotic blocking dopamine and serotonin; lower EPS but higher metabolic (weight/glucose/lipid) risk.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "OLANZAPINE",
    "category": "Antipsychotics & EPS",
    "clue": "A 2nd-gen antipsychotic notable for METABOLIC side effects (weight gain, hyperglycemia) and a rare reaction called DRESS. Name the generic.",
    "hint": "Brand Zyprexa; strong metabolic side-effect profile.",
    "def": "A second-generation antipsychotic; high metabolic risk (weight gain, hyperglycemia, dyslipidemia) and a rare risk of DRESS.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "QUETIAPINE",
    "category": "Antipsychotics & EPS",
    "clue": "A 2nd-gen antipsychotic also used in bipolar and as a depression adjunct; carries far LOWER agranulocytosis risk than clozapine. Name the generic.",
    "hint": "Brand Seroquel; an atypical antipsychotic.",
    "def": "A second-generation antipsychotic used in schizophrenia, bipolar mania, and as a depression adjunct; low agranulocytosis risk.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "ARIPIPRAZOLE",
    "category": "Antipsychotics & EPS",
    "clue": "An atypical (sometimes called 'third-generation') antipsychotic with a UNIQUE dopamine profile and minimal EPS; watch for new impulse-control urges (gambling, shopping). Name the generic.",
    "hint": "Brand Abilify; minimal EPS, impulse-control warning.",
    "def": "An atypical antipsychotic with a unique dopamine mechanism and minimal EPS risk; can cause new impulse-control problems (gambling, shopping, sex).",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "EPS",
    "category": "Antipsychotics & EPS",
    "clue": "Movement disorders from nigrostriatal dopamine blockade — the classic triad is dystonia, akathisia, and pseudoparkinsonism. Give the abbreviation.",
    "hint": "Extra______ Symptoms.",
    "def": "Extrapyramidal Symptoms — movement disturbances from dopamine (nigrostriatal) blockade: dystonia, akathisia, pseudoparkinsonism.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "DYSTONIA",
    "category": "Antipsychotics & EPS",
    "clue": "The EPS emergency: involuntary muscle spasms of face, neck, and limbs that can progress to fatal laryngospasm — give IM/IV benztropine. Name it.",
    "hint": "Acute muscle spasms; more common in men under 25.",
    "def": "Involuntary muscle spasms (face, neck, limbs); an acute EPS emergency because laryngospasm can follow. Treated with benztropine.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "AKATHISIA",
    "category": "Antipsychotics & EPS",
    "clue": "The EPS of continuous restlessness and fidgeting; propranolol is specifically used for it. Name it.",
    "hint": "An inner restlessness — can't sit still.",
    "def": "An extrapyramidal symptom of continuous restlessness and fidgeting; propranolol is used specifically for it.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "PSEUDOPARKINSONISM",
    "category": "Antipsychotics & EPS",
    "clue": "The EPS that mimics Parkinson's: tremor, shuffling gait, drooling, rigidity, cogwheeling — appears 1-5 days after starting. Name it.",
    "hint": "Looks like Parkinson's but is drug-induced.",
    "def": "A drug-induced extrapyramidal syndrome resembling Parkinson's disease (tremor, shuffling gait, drooling, rigidity); onset 1-5 days.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "AKINESIA",
    "category": "Antipsychotics & EPS",
    "clue": "The EPS term for absence or impairment of voluntary movement. Name it.",
    "hint": "'A-' (without) + movement.",
    "def": "Absence or impairment of voluntary movement; an extrapyramidal symptom.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "OCULOGYRIC CRISIS",
    "category": "Antipsychotics & EPS",
    "clue": "Uncontrolled upward rolling of the eyes — a form of acute dystonia that can be mistaken for a seizure; treat as an emergency. Name this two-word sign.",
    "hint": "The eyes roll back and fix upward.",
    "def": "Uncontrolled upward rolling of the eyes; a form of acute dystonia treated as a medical emergency.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "TARDIVE DYSKINESIA",
    "category": "Antipsychotics & EPS",
    "clue": "A LATE, often irreversible antipsychotic effect: involuntary tongue protrusion, lip smacking, facial grimacing — assess EARLY with AIMS. Name it.",
    "hint": "'Tardive' = late; assess with the AIMS scale.",
    "def": "A late-onset, often irreversible movement disorder (tongue protrusion, lip smacking, facial grimacing) from long-term antipsychotic use; assessed with AIMS.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "VALBENAZINE",
    "category": "Antipsychotics & EPS",
    "clue": "The first FDA-approved drug (2017) specifically to treat tardive dyskinesia. Name the generic.",
    "hint": "Brand Ingrezza; a VMAT2 inhibitor for TD.",
    "def": "The first FDA-approved medication (2017) for tardive dyskinesia; believed to inhibit monoamine (VMAT2) transport.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "NMS",
    "category": "Antipsychotics & EPS",
    "clue": "The antipsychotic EMERGENCY that is systemic, not just movement: high fever, muscle rigidity, altered mental status, autonomic instability. Give the abbreviation.",
    "hint": "Neuroleptic ______ Syndrome.",
    "def": "Neuroleptic Malignant Syndrome — a rare, life-threatening reaction: high fever, rigidity, altered mental status, autonomic instability. Hold the drug and notify the prescriber.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "BENZTROPINE",
    "category": "Antipsychotics & EPS",
    "clue": "The anticholinergic given (IM/IV in emergencies) to treat EPS such as acute dystonia. Name the generic.",
    "hint": "Brand Cogentin; an antiparkinsonian agent for EPS.",
    "def": "An anticholinergic antiparkinsonian agent used to treat antipsychotic-induced EPS, given IM/IV for acute dystonia.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "TRIHEXYPHENIDYL",
    "category": "Antipsychotics & EPS",
    "clue": "An anticholinergic alternative to benztropine for treating EPS. Name the generic.",
    "hint": "Another anticholinergic EPS treatment.",
    "def": "An anticholinergic antiparkinsonian agent used as an alternative to benztropine for antipsychotic-induced EPS.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "NIGROSTRIATAL",
    "category": "Antipsychotics & EPS",
    "clue": "Blocking dopamine in THIS pathway is exactly what causes EPS and tardive dyskinesia. Name the pathway.",
    "hint": "The dopamine pathway for coordinated voluntary movement.",
    "def": "The dopamine pathway governing coordinated voluntary movement; blocking it causes EPS and tardive dyskinesia.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "HYPERPROLACTINEMIA",
    "category": "Antipsychotics & EPS",
    "clue": "Blocking dopamine in the tuberoinfundibular pathway removes prolactin's brake, causing galactorrhea and menstrual changes. Name this lab/hormone state.",
    "hint": "Too much prolactin from dopamine blockade.",
    "def": "Elevated prolactin from antipsychotic dopamine blockade in the tuberoinfundibular pathway; causes galactorrhea, menstrual changes, and sexual dysfunction.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "GALACTORRHEA",
    "category": "Antipsychotics & EPS",
    "clue": "Milky breast discharge in a non-breastfeeding client (or a man) caused by antipsychotic-raised prolactin. Name it.",
    "hint": "Milky discharge unrelated to breastfeeding.",
    "def": "Milky breast discharge in non-breastfeeding women or men; caused by antipsychotic-induced hyperprolactinemia.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "GYNECOMASTIA",
    "category": "Antipsychotics & EPS",
    "clue": "Breast enlargement in men, a hormonal antipsychotic side effect that can even feed delusions. Name it.",
    "hint": "Breast development in a male patient.",
    "def": "Breast enlargement in men; a hormonal side effect of antipsychotic-induced hyperprolactinemia.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "LITHIUM",
    "category": "Mood Stabilizers",
    "clue": "The exam's go-to mood stabilizer with a narrow therapeutic index (0.6-1.2 mEq/L); the kidney handles it like sodium, so dehydration raises its level. Name it.",
    "hint": "A salt; the best mood stabilizer for bipolar disorder.",
    "def": "The classic mood stabilizer for bipolar disorder; a salt handled by the kidney like sodium, with a narrow therapeutic index (0.6-1.2 mEq/L) requiring serum monitoring.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "TOXICITY",
    "category": "Mood Stabilizers",
    "clue": "In a lithium client, 'flu-like' symptoms + tremor + tinnitus + blurred vision mean suspect THIS, not a viral illness — hold the dose and notify the prescriber. Name it.",
    "hint": "The state you suspect above ~1.5 mEq/L lithium.",
    "def": "Lithium toxicity — suspected with tremor, GI upset, confusion, ataxia, tinnitus, and blurred vision; hold the dose and notify the prescriber.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "TREMOR",
    "category": "Mood Stabilizers",
    "clue": "A FINE version of this is an early lithium-toxicity sign; a COARSE version appears at higher levels (>1.5 mEq/L). Name the symptom.",
    "hint": "Involuntary shaking — fine early, coarse later.",
    "def": "Involuntary shaking; a fine tremor is an early lithium-toxicity sign, a coarse tremor appears at higher serum levels.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "SODIUM",
    "category": "Mood Stabilizers",
    "clue": "Because lithium is handled like THIS electrolyte, a low level of it (or dehydration) makes the kidney reabsorb more lithium and raises toxicity risk — keep intake STABLE. Name it.",
    "hint": "The electrolyte lithium mimics; keep intake steady.",
    "def": "The electrolyte lithium substitutes for; low sodium or dehydration increases lithium reabsorption and toxicity, so intake must stay stable.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "CARBAMAZEPINE",
    "category": "Mood Stabilizers",
    "clue": "An anticonvulsant mood-stabilizer alternative to lithium whose key risk is bone-marrow suppression (agranulocytosis, aplastic anemia) — requires CBC monitoring. Name the generic.",
    "hint": "Brand Tegretol; monitor the CBC.",
    "def": "An anticonvulsant used as a mood stabilizer; key risk is bone-marrow suppression (agranulocytosis, aplastic anemia), and it strongly induces liver enzymes.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "VALPROIC ACID",
    "category": "Mood Stabilizers",
    "clue": "An anticonvulsant mood stabilizer whose key risks are hepatotoxicity and pancreatitis; contraindicated in pregnancy (neural tube defects). Name it (two words).",
    "hint": "Valproate / brand Depakote; monitor liver function.",
    "def": "An anticonvulsant mood stabilizer that enhances GABA; risks include hepatotoxicity, pancreatitis, and neural tube defects in pregnancy.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "LAMOTRIGINE",
    "category": "Mood Stabilizers",
    "clue": "An anticonvulsant often used for the DEPRESSIVE phase of bipolar; its key risk is a serious rash (Stevens-Johnson), so titrate SLOWLY and report any new rash. Name the generic.",
    "hint": "Brand Lamictal; watch for a dangerous rash.",
    "def": "An anticonvulsant mood stabilizer often used for bipolar depression; key risk is Stevens-Johnson syndrome, so the dose is titrated slowly.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "STEVENS-JOHNSON",
    "category": "Mood Stabilizers",
    "clue": "The life-threatening skin reaction most associated with lamotrigine and carbamazepine; teach clients to report any new rash immediately. Name this syndrome.",
    "hint": "A severe rash / toxic skin necrolysis.",
    "def": "Stevens-Johnson syndrome — a life-threatening skin reaction linked to lamotrigine and carbamazepine; report any new rash immediately.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "AGRANULOCYTOSIS",
    "category": "Mood Stabilizers",
    "clue": "A dangerously low neutrophil count that cripples infection defense — the fatal risk of clozapine AND carbamazepine; early signs are sore throat, fever, malaise. Name it.",
    "hint": "ANC drops to critically low levels (<=500).",
    "def": "A potentially fatal drop in neutrophils (ANC <=500/uL) that impairs infection defense; the signature risk of clozapine and carbamazepine. Report sore throat, fever, malaise.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "BENZODIAZEPINE",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "This anxiolytic class enhances GABA for a FAST calming effect; that speed is why it also causes tolerance and dangerous withdrawal (taper, never stop abruptly). Name the class.",
    "hint": "Diazepam, lorazepam, alprazolam belong here.",
    "def": "An anxiolytic/sedative class that enhances GABA at the GABA-A receptor; fast-acting but causes tolerance and dangerous withdrawal, so it must be tapered.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "LORAZEPAM",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "A benzodiazepine anxiolytic: avoid alcohol (additive CNS depression) and never stop abruptly (rebound anxiety/seizures). Name the generic.",
    "hint": "Brand Ativan; a common benzodiazepine.",
    "def": "A benzodiazepine anxiolytic that enhances GABA; avoid alcohol and taper to prevent rebound anxiety and seizures.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "DIAZEPAM",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "A benzodiazepine also used for alcohol withdrawal — because it acts on GABA receptors much like alcohol does. Name the generic.",
    "hint": "Brand Valium; used in alcohol withdrawal.",
    "def": "A benzodiazepine that enhances GABA; used for anxiety, seizures, muscle spasm, and alcohol withdrawal.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "ALPRAZOLAM",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "The benzodiazepine that remains an appropriate PRN choice for ACUTE anxiety because of its fast GABA-mediated onset. Name the generic.",
    "hint": "Brand Xanax; fast onset for PRN acute anxiety.",
    "def": "A fast-onset benzodiazepine appropriate for PRN acute anxiety; enhances GABA at the GABA-A receptor.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "BUSPIRONE",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "A NON-benzodiazepine anxiolytic acting on serotonin (not GABA): non-habit-forming, but a 1-2 week delayed onset makes it USELESS for PRN/acute anxiety. Name the generic.",
    "hint": "Brand BuSpar; serotonin-based, delayed onset.",
    "def": "A non-benzodiazepine anxiolytic acting on serotonin (5-HT1A) receptors; non-habit-forming with delayed onset, so not used for PRN/acute anxiety.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "TOLERANCE",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "With continued benzodiazepine use the brain downregulates its own GABA activity to compensate — the reason higher doses are needed over time. Name this phenomenon.",
    "hint": "Needing more drug for the same effect.",
    "def": "The need for higher doses to achieve the same effect as the brain downregulates its own GABA activity; develops with continued benzodiazepine use.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "WITHDRAWAL",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "Stop a benzodiazepine abruptly and the under-inhibited brain rebounds into anxiety, insomnia, and even seizures — which is why you must TAPER. Name this state.",
    "hint": "Why benzodiazepines are tapered, not stopped suddenly.",
    "def": "The rebound state (anxiety, insomnia, seizures) after abruptly stopping a benzodiazepine; prevented by tapering.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "RAMELTEON",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "A NON-habit-forming sleep agent that is a melatonin-receptor agonist (not a controlled substance) — a good choice when dependence must be avoided. Name the generic.",
    "hint": "Brand Rozerem; melatonin receptor agonist.",
    "def": "A melatonin-receptor agonist sleep aid; non-habit-forming and not a controlled substance, useful when avoiding dependence.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "ZOLPIDEM",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "A GABA-acting 'Z-drug' for sleep that carries a boxed warning for complex sleep behaviors (sleep-driving, sleep-eating with amnesia). Name the generic.",
    "hint": "Brand Ambien; a 'Z-drug' hypnotic.",
    "def": "A benzodiazepine-like 'Z-drug' hypnotic acting on GABA; carries a boxed warning for complex sleep behaviors.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "SUVOREXANT",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "A non-habit-forming sleep agent that blocks wake-promoting OREXIN — a good option when dependence is a concern. Name the generic.",
    "hint": "An orexin receptor antagonist for insomnia.",
    "def": "An orexin-receptor antagonist hypnotic; non-habit-forming, so useful when avoiding dependence.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "BARBITURATE",
    "category": "Anxiolytics & Sleep Agents",
    "clue": "An older sedative-hypnotic class (phenobarbital, secobarbital) with high toxicity and dependence potential, largely replaced by safer agents. Name the class.",
    "hint": "Phenobarbital and secobarbital belong here.",
    "def": "An older sedative-hypnotic and anticonvulsant class (phenobarbital, secobarbital) with high toxicity and dependence potential.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "METHYLPHENIDATE",
    "category": "ADHD & Stimulants",
    "clue": "A CNS stimulant for ADHD that raises dopamine and norepinephrine in the prefrontal cortex; give AFTER meals to limit appetite suppression. Name the generic.",
    "hint": "Brand Ritalin/Concerta; give after meals.",
    "def": "A CNS stimulant for ADHD that increases prefrontal dopamine and norepinephrine; given after meals to reduce appetite suppression and weight loss.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "LISDEXAMFETAMINE",
    "category": "ADHD & Stimulants",
    "clue": "A CNS stimulant (Schedule II) for ADHD; monitor weight and don't skip doses just because appetite is poor. Name the generic.",
    "hint": "Brand Vyvanse; a C-II amphetamine prodrug.",
    "def": "A CNS stimulant amphetamine for ADHD; increases dopamine/NE availability. Monitor weight because of appetite suppression.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "DEXTROAMPHETAMINE",
    "category": "ADHD & Stimulants",
    "clue": "A CNS stimulant amphetamine for ADHD and narcolepsy; a Schedule II controlled substance because of high misuse potential. Name the generic.",
    "hint": "A C-II amphetamine used in ADHD.",
    "def": "A CNS stimulant amphetamine (Schedule II) used for ADHD and narcolepsy; increases dopamine and norepinephrine.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "ATOMOXETINE",
    "category": "ADHD & Stimulants",
    "clue": "A NON-stimulant ADHD drug — a selective norepinephrine reuptake inhibitor; watch for severe liver damage (dark urine, jaundice, RUQ pain). Name the generic.",
    "hint": "Brand Strattera; a non-stimulant SNRI-type agent.",
    "def": "A non-stimulant ADHD medication that selectively inhibits norepinephrine reuptake; monitor for severe liver injury and youth suicidality (boxed warning).",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "GUANFACINE",
    "category": "ADHD & Stimulants",
    "clue": "A non-stimulant ADHD option (alpha-2 agonist) also used for hypertension — do NOT stop abruptly because of rebound hypertension. Name the generic.",
    "hint": "An alpha-2 agonist; taper to avoid rebound HTN.",
    "def": "A non-stimulant alpha-2 adrenergic agonist for ADHD (and hypertension); must not be stopped abruptly due to rebound hypertension.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "CLONIDINE",
    "category": "ADHD & Stimulants",
    "clue": "An alpha-2 agonist used for ADHD and hypertension; like guanfacine, abrupt discontinuation causes rebound hypertension. Name the generic.",
    "hint": "An alpha-2 agonist; do not stop abruptly.",
    "def": "A non-stimulant alpha-2 adrenergic agonist for ADHD and hypertension; abrupt withdrawal causes rebound hypertension.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "PREFRONTAL CORTEX",
    "category": "ADHD & Stimulants",
    "clue": "Stimulants improve attention and impulse control by boosting dopamine/norepinephrine specifically in THIS brain region. Name it (two words).",
    "hint": "The brain region where ADHD stimulants act.",
    "def": "The brain region where ADHD stimulants increase dopamine and norepinephrine to improve attention and impulse control.",
    "source": "NUR422 Psychopharmacology Review (lecture)"
  },
  {
    "word": "ANTICHOLINERGIC",
    "category": "Nursing Process & Safety",
    "clue": "This side-effect cluster (dry mouth, constipation, blurred vision, urinary retention) comes from blocking ACh receptors — prominent with TCAs and typical antipsychotics. Name the term.",
    "hint": "'Dry as a bone, blind as a bat' effects.",
    "def": "Side effects from blocking acetylcholine (muscarinic) receptors: dry mouth, constipation, blurred vision, urinary retention; prominent with TCAs and typical antipsychotics.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "ORTHOSTATIC",
    "category": "Nursing Process & Safety",
    "clue": "This kind of hypotension comes from alpha-1 blockade; teach the client to rise SLOWLY and monitor lying and standing BP. Name the type (also called postural).",
    "hint": "The 'stand up slowly' hypotension.",
    "def": "Orthostatic (postural) hypotension from alpha-1 blockade; teach the client to rise slowly and monitor lying and standing blood pressure.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "BOXED WARNING",
    "category": "Nursing Process & Safety",
    "clue": "The FDA's STRONGEST warning, named for the black border on the package insert — e.g., antidepressant suicidality in youth up to age 25. Name it (two words).",
    "hint": "Also called a 'black box' warning.",
    "def": "The FDA's strongest warning, named for the black border on a drug's insert, alerting to serious or life-threatening risks.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "SUICIDALITY",
    "category": "Nursing Process & Safety",
    "clue": "ALL antidepressants carry a boxed warning for increased THIS in children, adolescents, and young adults up to age 25; risk can rise as energy returns before mood lifts. Name it.",
    "hint": "The boxed-warning risk for antidepressants in youth.",
    "def": "Increased suicidal thinking/behavior; all antidepressants carry a boxed warning for it in patients up to age 25, and risk may rise early as energy returns.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "ASSESSMENT",
    "category": "Nursing Process & Safety",
    "clue": "The nursing-process step requiring baseline vitals, weight, labs, and a symptom baseline BEFORE starting — you can't evaluate improvement without a starting point. Name the step.",
    "hint": "The first step; establish the baseline.",
    "def": "The nursing-process step of gathering baseline vitals, weight, labs, mental status, and medication history before therapy begins.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "EVALUATION",
    "category": "Nursing Process & Safety",
    "clue": "The nursing-process step that continuously weighs THERAPEUTIC effect against ADVERSE effect — the core judgment tested throughout the exam. Name the step.",
    "hint": "Weigh benefit against harm, continuously.",
    "def": "The nursing-process step of continuously weighing therapeutic effect against adverse effect and monitoring target symptoms and side effects.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "REMS",
    "category": "Nursing Process & Safety",
    "clue": "The FDA risk-management program required for clozapine (ANC monitoring) and esketamine (in-office observation). Give the abbreviation.",
    "hint": "Risk Evaluation and ______ Strategy.",
    "def": "Risk Evaluation and Mitigation Strategy — an FDA program mandating monitoring/controls for higher-risk drugs like clozapine and esketamine.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "AIMS",
    "category": "Nursing Process & Safety",
    "clue": "The standardized scale used to detect and track tardive dyskinesia EARLY, before it becomes obvious. Give the abbreviation.",
    "hint": "Abnormal Involuntary Movement Scale.",
    "def": "The Abnormal Involuntary Movement Scale — a tool for early detection and ongoing surveillance of tardive dyskinesia.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  },
  {
    "word": "TAPER",
    "category": "Nursing Process & Safety",
    "clue": "The safe way to stop benzodiazepines, antidepressants, and clonidine/guanfacine — gradually, to avoid withdrawal, rebound, or seizures. Name this action.",
    "hint": "Gradually reduce the dose, don't stop cold.",
    "def": "To gradually reduce a medication dose rather than stopping abruptly, preventing withdrawal, rebound, and seizures.",
    "source": "NUR422 lecture + FA Davis Ch. 4"
  },
  {
    "word": "PARADOXICAL",
    "category": "Nursing Process & Safety",
    "clue": "The 'opposite-of-expected' reaction — agitation and increased anxiety instead of calm — that older adults are especially prone to with benzodiazepines. Name this kind of effect.",
    "hint": "The reverse of the intended effect.",
    "def": "An effect opposite to the one intended (e.g., agitation/anxiety from a benzodiazepine); older adults are at higher risk.",
    "source": "FA Davis Ch. 4, Psychopharmacology"
  }
];
