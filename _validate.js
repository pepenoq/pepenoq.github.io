global.window = {};
require("./questions.js");
const d = global.window.EXAM_DATA;
console.log("meta:", JSON.stringify(d.meta));
const byExam = {}, ids = new Set(); let dup = 0;
for (const q of d.questions) { byExam[q.exam]=(byExam[q.exam]||0)+1; if(ids.has(q.id))dup++; ids.add(q.id); }
console.log("total:", d.questions.length, "byExam:", JSON.stringify(byExam), "dupIds:", dup);
const e7 = d.questions.filter(q=>q.exam===7);
let bad=[];
for(const q of e7){
  if(q.type!=="fill") bad.push(q.id+":type");
  if(typeof q.answer!=="number") bad.push(q.id+":answer");
  if(typeof q.tolerance!=="number") bad.push(q.id+":tol");
  if(!q.unit) bad.push(q.id+":unit");
  if(!q.stem||!q.rationale||!q.topic) bad.push(q.id+":text");
  if("options" in q || "correct" in q) bad.push(q.id+":choicefields");
}
console.log("e7 count:", e7.length, "| structural issues:", bad.length?bad.join(","):"none");
const topics={}; e7.forEach(q=>topics[q.topic]=(topics[q.topic]||0)+1);
console.log("e7 topics:", JSON.stringify(topics));
const expect={
 e7q01:15.5/2.2, e7q02:44/2.2, e7q03:(12+3/16)/2.2*20/3, e7q04:40*20/2,
 e7q05:15*22/160*5, e7q06:0.1*18/2, e7q07:(9+6/16)/2.2*100/4, e7q08:12*30,
 e7q09:4*10, e7q10:100*10, e7q11:1000/24, e7q12:4*8, e7q13:40+20+6, e7q14:66*24,
 e7q15:1000+250, e7q16:1250/24, e7q17:1000+500+80, e7q18:250/120*60, e7q19:500/240*15, e7q20:8*6/2/50 };
let mism=[];
for(const q of e7){ const raw=expect[q.id];
  if(raw==null){mism.push(q.id+":noexpect");continue;}
  if(Math.abs(raw-q.answer) > q.tolerance+1e-9) mism.push(q.id+" stored="+q.answer+" recomputed="+raw.toFixed(4)+" tol="+q.tolerance); }
console.log("answer recomputation:", mism.length?("MISMATCH\n  "+mism.join("\n  ")):"all 20 match within tolerance");
// simulate the app's grader on the exact rounded answer a student would type
function grade(q, typed){ const v=parseFloat(String(typed).replace(/,/g,"").trim()); return Math.abs(v-q.answer)<=q.tolerance+1e-9; }
const typedRounded = { e7q01:"7.0",e7q02:"20",e7q03:"36.9",e7q04:"400",e7q05:"10.3",e7q06:"0.9",e7q07:"106.5",e7q08:"360",e7q09:"40",e7q10:"1000",e7q11:"41.7",e7q12:"32",e7q13:"66",e7q14:"1584",e7q15:"1250",e7q16:"52.1",e7q17:"1580",e7q18:"125",e7q19:"31",e7q20:"0.48" };
let gfail=[]; for(const q of e7){ if(!grade(q, typedRounded[q.id])) gfail.push(q.id); }
console.log("grader accepts the correct rounded answer for all 20:", gfail.length?("FAILS: "+gfail.join(",")):"yes");
