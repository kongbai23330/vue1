import{d as P,ao as $,k as y,a7 as s,_ as p,a8 as A,a9 as a,f as r,E as f,a0 as u,$ as b,F as _,aa as k,a1 as g,ab as v}from"./vue-854c8149.js";import{P as C}from"./index-c0bc48c3.js";import{_ as D,aD as I,aE as N}from"./index-a0566264.js";import{ab as B}from"./antd-cc917134.js";import"./useContentViewHeight-dd2980e0.js";import"./useWindowSizeFn-52bece23.js";const V=P({name:"AccountDetail",components:{PageWrapper:C,ATabs:B,ATabPane:B.TabPane},setup(){var t;const e=$(),n=I(),c=y((t=e.params)==null?void 0:t.id),i=y("detail"),{setTitle:d}=N();d("详情：用户"+c.value);function m(){n("/system/account")}return{userId:c,currentKey:i,goBack:m}}}),E={class:"pt-4 m-4 desc-wrap"};function W(e,n,c,i,d,m){const t=s("a-button"),l=s("a-tab-pane"),T=s("a-tabs"),K=s("PageWrapper");return p(),A(K,{title:"用户"+e.userId+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:e.goBack},{extra:a(()=>[r(t,{type:"primary",danger:""},{default:a(()=>[f(" 禁用账号 ")]),_:1}),r(t,{type:"primary"},{default:a(()=>[f(" 修改密码 ")]),_:1})]),footer:a(()=>[r(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":n[0]||(n[0]=o=>e.currentKey=o)},{default:a(()=>[r(l,{key:"detail",tab:"用户资料"}),r(l,{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:a(()=>[u("div",E,[e.currentKey=="detail"?(p(),b(_,{key:0},k(10,o=>u("div",{key:o},"这是用户"+g(e.userId)+"资料Tab",1)),64)):v("",!0),e.currentKey=="logs"?(p(),b(_,{key:1},k(10,o=>u("div",{key:o},"这是用户"+g(e.userId)+"操作日志Tab",1)),64)):v("",!0)])]),_:1},8,["title","onBack"])}const S=D(V,[["render",W]]);export{S as default};
