import{R as a}from"./control.e7f5239e.js";const c=(n,e)=>{const t=n[e];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((o,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})};function i(n,e){return new a(n,e)}new TextEncoder;const s=async({params:n})=>{let e;try{e=await c(Object.assign({}),`../../../blogs/${n.slug}.md`)}catch{throw i(307,"/blog")}const{title:t,date:o}=e.metadata;return{content:e.default,title:t,date:o}},u=Object.freeze(Object.defineProperty({__proto__:null,load:s},Symbol.toStringTag,{value:"Module"}));export{u as _,s as l};
