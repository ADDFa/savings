import{j as e,L as l,u as i,r as d,T as x,O as m}from"./index-36bc0cf6.js";import{I as r}from"./Icon-06127706.js";const o=s=>{const{iconName:t,title:a,target:n}=s;return e.jsx("ul",{className:"list-unstyled d-flex",children:e.jsx("li",{className:"shadow border rounded-3",children:e.jsxs(l,{to:n,className:`text-dark width-50 d-flex justify-content-center \r
                    align-items-center flex-column fs-5 text-decoration-none`,children:[e.jsx(r,{name:t}),e.jsx("span",{className:"fs-10",children:a})]})})})},u=()=>e.jsxs("section",{className:"py-3 d-flex gap-2",children:[e.jsx(o,{iconName:"house",title:"Beranda",target:"/dashboard"}),e.jsx(o,{iconName:"arrow-clockwise",title:"Riwayat",target:"/history/in"})]}),h=s=>{const{title:t}=s;return e.jsx(e.Fragment,{children:t&&e.jsx("h5",{className:"mb-5",children:t})})},g=()=>{const s=i(),[t,a]=d.useState("Beranda"),n=()=>{localStorage.clear(),s("/")},c={title:t,setTitle:a};return e.jsxs("div",{className:"vh-100",children:[e.jsx("header",{className:"shadow p-3",children:e.jsxs("button",{className:"btn btn-secondary d-flex justify-content-center align-items-center gap-2 ms-auto rounded-5 px-4",onClick:n,children:[e.jsx(r,{name:"box-arrow-right"}),"Logout"]})}),e.jsx(x,{}),e.jsx("div",{className:"col-md-5 mx-auto",children:e.jsxs("div",{className:"m-3 rounded-5 shadow py-4 px-3",children:[e.jsx(u,{}),e.jsxs("div",{className:"text-center mb-3",children:[e.jsx(h,{title:t}),e.jsx(m,{context:c})]})]})})]})};export{g as default};
