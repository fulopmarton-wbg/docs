import{d as T,af as B,A as V,i,G as x,w as f,g as z,n as a,e as N,c as o,R as r,ac as k,t as b,f as l,F as S,J as U,H as $,S as j,U as F,ad as y,as as D,bw as E,ae as G}from"./BbhGKzMf.js";const H={slots:{root:"relative isolate rounded-[calc(var(--ui-radius)*3)] overflow-hidden",container:"flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",wrapper:"",title:"text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-(--ui-text-highlighted)",description:"text-base sm:text-lg text-(--ui-text-muted)",links:"mt-8 flex flex-wrap gap-x-6 gap-y-3"},variants:{orientation:{horizontal:{container:"lg:grid-cols-2 lg:items-center",description:"text-pretty"},vertical:{container:"",title:"text-center",description:"text-center text-balance",links:"justify-center"}},reverse:{true:{wrapper:"lg:order-last"}},variant:{solid:{root:"bg-(--ui-bg-inverted) text-(--ui-bg)",title:"text-(--ui-bg)",description:"text-(--ui-text-dimmed)"},outline:{root:"bg-(--ui-bg) ring ring-(--ui-border)",description:"text-(--ui-text-muted)"},soft:{root:"bg-(--ui-bg-elevated)/50",description:"text-(--ui-text-toned)"},subtle:{root:"bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)",description:"text-(--ui-text-toned)"},naked:{description:"text-(--ui-text-muted)"}},title:{true:{description:"mt-6"}}},defaultVariants:{variant:"outline"}},J={key:1,class:"hidden lg:block"},L=G;var h;const O=y({extend:y(H),...((h=L.uiPro)==null?void 0:h.pageCTA)||{}}),R=T({__name:"PageCTA",props:{as:{},class:{},title:{},description:{},orientation:{default:"vertical"},reverse:{type:Boolean,default:!1},variant:{},links:{},ui:{}},setup(C){const e=C,n=B(),s=V(()=>O({variant:e.variant,orientation:e.orientation,reverse:e.reverse,title:!!e.title||!!n.title}));return(t,q)=>{var c;const _=D,w=E;return i(),x(j(F),{as:t.as,"data-orientation":t.orientation,class:a(s.value.root({class:[e.class,(c=e.ui)==null?void 0:c.root]}))},{default:f(()=>{var d;return[z(w,{class:a(s.value.container({class:(d=e.ui)==null?void 0:d.container}))},{default:f(()=>{var u,p,g,m,v;return[N("div",{class:a(s.value.wrapper({class:(u=e.ui)==null?void 0:u.wrapper}))},[t.title||n.title?(i(),o("h2",{key:0,class:a(s.value.title({class:(p=e.ui)==null?void 0:p.title}))},[r(t.$slots,"title",{},()=>[k(b(t.title),1)])],2)):l("",!0),t.description||n.description?(i(),o("div",{key:1,class:a(s.value.description({class:(g=e.ui)==null?void 0:g.description}))},[r(t.$slots,"description",{},()=>[k(b(t.description),1)])],2)):l("",!0),(m=t.links)!=null&&m.length||n.links?(i(),o("div",{key:2,class:a(s.value.links({class:(v=e.ui)==null?void 0:v.links}))},[r(t.$slots,"links",{},()=>[(i(!0),o(S,null,U(t.links,(A,P)=>(i(),x(_,$({key:P,size:"lg",ref_for:!0},A),null,16))),128))])],2)):l("",!0)],2),n.default?r(t.$slots,"default",{key:0}):t.orientation==="horizontal"?(i(),o("div",J)):l("",!0)]}),_:3},8,["class"])]}),_:3},8,["as","data-orientation","class"])}}}),K=Object.assign(R,{__name:"UPageCTA"});export{K as default};
