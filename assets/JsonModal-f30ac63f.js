var f=Object.defineProperty,u=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(s,o,e)=>o in s?f(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,c=(s,o)=>{for(var e in o||(o={}))_.call(o,e)&&i(s,e,o[e]);if(l)for(var e of l(o))C.call(o,e)&&i(s,e,o[e]);return s},d=(s,o)=>u(s,v(o));import J from"./PreviewCode-d392f382.js";import{r as h,a as w}from"./index-ced00421.js";import{d as b,r as M,e as N,H as $,a7 as p,_ as x,a8 as y,a9 as O,f as P}from"./vue-854c8149.js";import{K as j}from"./antd-cc917134.js";import{_ as k}from"./index-a0566264.js";import"./index-9d862da0.js";import"./useWindowSizeFn-52bece23.js";import"./useCopyToClipboard-d237d4f9.js";const B=b({name:"JsonModal",components:{PreviewCode:J,Modal:j},emits:["cancel"],setup(s,{emit:o}){const e=M({visible:!1,jsonData:{}}),a=t=>{w(t.schemas),e.jsonData=t,e.visible=!0},n=N(()=>JSON.stringify(h(e.jsonData),null,"	")),r=()=>{e.visible=!1,o("cancel")};return d(c({},$(e)),{editorJson:n,handleCancel:r,showModal:a})}});function D(s,o,e,a,n,r){const t=p("PreviewCode"),m=p("Modal");return x(),y(m,{title:"JSON数据",footer:null,visible:s.visible,onCancel:s.handleCancel,destroyOnClose:!0,wrapClassName:"v-code-modal",style:{top:"20px"},width:"850px"},{default:O(()=>[P(t,{editorJson:s.editorJson},null,8,["editorJson"])]),_:1},8,["visible","onCancel"])}const z=k(B,[["render",D]]);export{z as default};
