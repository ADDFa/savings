const n=r=>{const t=new Date(r),e=s=>s<10?`0${s}`:`${s}`;return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())} ${e(t.getHours())}:${e(t.getMinutes())}`};export{n as D};
