const langs={
 el:{title:'Ημερολόγιο',year:'Έτος',go:'Προβολή',print:'Εκτύπωση',prev:'Προηγούμενο έτος',next:'Επόμενο έτος',days:'ΚΥ ΔΕ ΤΡ ΤΕ ΠΕ ΠΑ ΣΑ',months:'Ιανουάριος Φεβρουάριος Μάρτιος Απρίλιος Μάιος Ιούνιος Ιούλιος Αύγουστος Σεπτέμβριος Οκτώβριος Νοέμβριος Δεκέμβριος'},
 en:{title:'Calendar',year:'Year',go:'View',print:'Print',prev:'Previous year',next:'Next year',days:'SU MO TU WE TH FR SA',months:'January February March April May June July August September October November December'},
 zh:{title:'日历',year:'年份',go:'查看',print:'打印',prev:'上一年',next:'下一年',days:'日 一 二 三 四 五 六',months:'一月 二月 三月 四月 五月 六月 七月 八月 九月 十月 十一月 十二月'}};
const el=id=>document.getElementById(id);
const today=new Date();let year=today.getFullYear(),language=(navigator.language||'el').slice(0,2);
try{language=localStorage.getItem('ck.calendar.language')||language}catch{}
if(!langs[language])language='en';
function utcDate(y,m,d){const date=new Date(0);date.setUTCFullYear(y,m,d);return date}
function draw(){
 const t=langs[language];document.documentElement.lang=language==='zh'?'zh-Hans':language;document.title=t.title;
 for(const id of ['title','go','print'])el(id).textContent=t[id];el('label').textContent=t.year;
 el('year').value=year;el('bigyear').textContent=year;el('lang').value=language;
 for(const id of ['prev','next'])el(id).setAttribute('aria-label',t[id]);
 el('prev').disabled=year===1;el('next').disabled=year===9999;
 const days=t.days.split(' ');el('months').innerHTML=t.months.split(' ').map((month,m)=>{
  const first=utcDate(year,m,1).getUTCDay(),last=utcDate(year,m+1,0).getUTCDate();
  let body='';for(let i=0;i<Math.ceil((first+last)/7)*7;i++){
   const d=i-first+1,valid=d>=1&&d<=last,current=valid&&year===today.getFullYear()&&m===today.getMonth()&&d===today.getDate();
   if(i%7===0)body+='<tr>';body+='<td'+(current?' aria-current="date"':'')+'>'+(valid?'<span>'+d+'</span>':'')+'</td>';if(i%7===6)body+='</tr>';
  }
  return '<article><table><caption>'+month+'</caption><thead><tr>'+days.map(d=>'<th scope="col">'+d+'</th>').join('')+'</tr></thead><tbody>'+body+'</tbody></table></article>';
 }).join('');
}
el('choose').onsubmit=e=>{e.preventDefault();const y=Number(el('year').value);if(Number.isInteger(y)&&y>=1&&y<=9999){year=y;draw()}};
el('prev').onclick=()=>{if(year>1){year--;draw()}};el('next').onclick=()=>{if(year<9999){year++;draw()}};
el('lang').onchange=e=>{language=e.target.value;try{localStorage.setItem('ck.calendar.language',language)}catch{}draw()};
el('print').onclick=()=>window.print();draw();
