import{j as e,L as h,r as n,b as m,c as u,g as f}from"./index-480ad9d5.js";import{D as g}from"./DateParse-6a16ad06.js";import{I as y}from"./Icon-825af368.js";const d=s=>{const{children:c,active:i,target:r}=s;return e.jsx(h,{to:r,className:`btn btn-${i?"":"outline-"}secondary`,children:c})},k=()=>{const[s,c]=n.useState(),[i,r]=n.useState(!0),{setTitle:x}=m(),{category:t}=u();return n.useEffect(()=>{x("Riwayat")},[]),n.useEffect(()=>{(async()=>{r(!0),f(t==="in"?"income":"expense").then(a=>{a&&c(a)}).finally(()=>r(!1))})()},[t]),e.jsxs("div",{className:"text-start",children:[e.jsxs("div",{className:"d-flex gap-2 mb-3",children:[e.jsx(d,{target:"/history/in",active:t==="in",children:"Transaksi Masuk"}),e.jsx(d,{target:"/history/out",active:t==="out",children:"Transaksi Keluar"})]}),e.jsx("section",{children:i?e.jsx("h6",{className:"text-center fw-normal mt-4",children:"Loading..."}):e.jsxs("table",{className:"table fs-11",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{role:"col",children:"No"}),e.jsx("th",{role:"col",children:"Jumlah"}),e.jsx("th",{role:"col",children:"Tanggal"}),e.jsx("th",{role:"col",className:"text-center",children:"Aksi"})]})}),s&&e.jsx("tbody",{children:s.map(({total:o,created_at:a,id:j},l)=>e.jsxs("tr",{children:[e.jsx("td",{children:++l}),e.jsx("td",{children:o}),e.jsx("td",{children:g(a)}),e.jsx("td",{className:"fs-5 text-center",children:e.jsx(h,{to:`/history/${t}/${j}`,children:e.jsx(y,{className:"shadow btn btn-warning rounded",name:"eye"})})})]},l))})]})})]})};export{k as default};
