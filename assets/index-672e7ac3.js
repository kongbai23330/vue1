var E=Object.defineProperty;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var F=(e,o,a)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,L=(e,o)=>{for(var a in o||(o={}))B.call(o,a)&&F(e,a,o[a]);if(f)for(var a of f(o))h.call(o,a)&&F(e,a,o[a]);return e};import{az as T,aA as D,_ as W}from"./index-a0566264.js";import{u as A,d as R,k as C,r as w,H as P,a7 as l,v as $,t as N,_ as V,a8 as z,a9 as u,a0 as H,f as t,E as r}from"./vue-854c8149.js";import{P as S}from"./index-c0bc48c3.js";import{ad as _}from"./antd-cc917134.js";import"./useContentViewHeight-dd2980e0.js";import"./useWindowSizeFn-52bece23.js";function k(e){let o,a=document.body;if(Reflect.has(e,"target")||Reflect.has(e,"props")){const n=e;o=n.props||{},a=n.target||document.body}else o=e;const s=T(o,void 0,!0);return[()=>{const n=A(a);n&&s.open(n)},()=>{s.close()},n=>{s.setTip(n)}]}const j=R({components:{Loading:D,PageWrapper:S,[_.name]:_},setup(){const e=C(null),o=C(!1),a=w({absolute:!1,loading:!1,theme:"dark",background:"rgba(111,111,111,.7)",tip:"加载中..."}),[s,p]=k({tip:"加载中..."}),[c,i]=k({target:e,props:{tip:"加载中...",absolute:!0}});function n(v){a.absolute=v,a.loading=!0,setTimeout(()=>{a.loading=!1},2e3)}function d(){n(!1)}function g(){n(!0)}function m(){s(),setTimeout(()=>{p()},2e3)}function b(){c(),setTimeout(()=>{i()},2e3)}function y(){o.value=!0,setTimeout(()=>{o.value=!1},2e3)}return L({openCompFullLoading:d,openFnFullLoading:m,openFnWrapLoading:b,openCompAbsolute:g,wrapEl:e,loadingRef:o,openDirectiveLoading:y},P(a))}}),q={ref:"wrapEl"};function G(e,o,a,s,p,c){const i=l("a-alert"),n=l("a-button"),d=l("Loading"),g=l("PageWrapper"),m=$("loading");return N((V(),z(g,{"loading-tip":"加载中...",title:"Loading组件示例"},{default:u(()=>[H("div",q,[t(i,{message:"组件方式"}),t(n,{class:"my-4 mr-4",type:"primary",onClick:e.openCompFullLoading},{default:u(()=>[r(" 全屏 Loading ")]),_:1},8,["onClick"]),t(n,{class:"my-4",type:"primary",onClick:e.openCompAbsolute},{default:u(()=>[r(" 容器内 Loading ")]),_:1},8,["onClick"]),t(d,{loading:e.loading,absolute:e.absolute,theme:e.theme,background:e.background,tip:e.tip},null,8,["loading","absolute","theme","background","tip"]),t(i,{message:"函数方式"}),t(n,{class:"my-4 mr-4",type:"primary",onClick:e.openFnFullLoading},{default:u(()=>[r(" 全屏 Loading ")]),_:1},8,["onClick"]),t(n,{class:"my-4",type:"primary",onClick:e.openFnWrapLoading},{default:u(()=>[r(" 容器内 Loading ")]),_:1},8,["onClick"]),t(i,{message:"指令方式"}),t(n,{class:"my-4 mr-4",type:"primary",onClick:e.openDirectiveLoading},{default:u(()=>[r(" 打开指令Loading ")]),_:1},8,["onClick"])],512)]),_:1})),[[m,e.loadingRef]])}const X=W(j,[["render",G]]);export{X as default};
