import{h as _,j as d,k as p,al as u,c as m,am as h,m as n,an as t,ao as s,A as o,F as f,ap as v,aq as g,ar as x,s as r,as as y,at as b,q as k,au as N,av as P,_ as w}from"./nav-3ea37be0.js";import{N as S}from"./NoteDisplay-eedbd4b6.js";import{u as V}from"./index-01d02b38.js";import"./_commonjsHelpers-725317a4.js";const j={class:"m-4"},C={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},T={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},q=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(F){d(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const i=h(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:g(o(P))},[t("div",j,[t("div",C,[t("h1",D,s(o(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(r(!0),n(f,null,v(o(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",T,[t("div",B,[t("div",H,s(e==null?void 0:e.no)+"/"+s(o(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),q])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<o(i).length-1?(r(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),W=w(A,[["__file","C:/Users/kuros/Documents/slidev/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
