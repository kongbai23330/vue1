import{f as i,_ as r}from"./index-a0566264.js";import{d as l,a7 as c,_ as s,$ as a,F as d,aa as _,a8 as u,a9 as f,a0 as n,a2 as o,a3 as m,a4 as y}from"./vue-854c8149.js";import{T as C}from"./antd-cc917134.js";const k=l({name:"MenuTypePicker",components:{Tooltip:C},props:{menuTypeList:{type:Array,default:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=i("setting-menu-type-picker");return{prefixCls:e}}});const v=e=>(m("data-v-26e7aeb7"),e=e(),y(),e),$=["onClick"],h=v(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[h];function b(e,g,x,B,I,S){const p=c("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(d,null,_(e.menuTypeList||[],t=>(s(),u(p,{key:t.title,title:t.title,placement:"bottom"},{default:f(()=>[n("div",{onClick:F=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,$)]),_:2},1032,["title"]))),128))],2)}const z=r(k,[["render",b],["__scopeId","data-v-26e7aeb7"]]);export{z as default};
