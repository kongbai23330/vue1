import{B as l}from"./BasicTable-dcc346aa.js";import"./componentMap-3b23f8a1.js";import"./TableImg.vue_vue_type_style_index_0_lang-8eb0476b.js";import{u}from"./useTable-93a62681.js";import{getBasicColumns as d}from"./tableData-a9da91ac.js";import{P as f}from"./index-c0bc48c3.js";import{d as _}from"./table-331fab6c.js";import{d as g,a7 as r,_ as C,a8 as B,a9 as t,f as a,E as m}from"./vue-854c8149.js";import{_ as b}from"./index-a0566264.js";import"./useFormItem-55533111.js";import"./antd-cc917134.js";import"./RadioButtonGroup-b3ca988d.js";import"./index-4032fa3d.js";import"./index-151c565a.js";import"./index-aede926d.js";import"./useWindowSizeFn-52bece23.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./BasicForm-5c70f39e.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./uniqBy-2617372f.js";import"./useForm-c6741082.js";import"./sortable.esm-797f0398.js";import"./select-0ef32d9c.js";import"./useContentViewHeight-dd2980e0.js";const h=g({components:{BasicTable:l,PageWrapper:f},setup(){const[o,{reload:e}]=u({title:"远程加载示例",api:_,columns:d(),pagination:{pageSize:10}});function i(){e()}function p(){e({page:1})}return{registerTable:o,handleReloadCurrent:i,handleReload:p}}});function T(o,e,i,p,k,R){const n=r("a-button"),s=r("BasicTable"),c=r("PageWrapper");return C(),B(c,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[a(s,{onRegister:o.registerTable},{toolbar:t(()=>[a(n,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[m(" 刷新当前页 ")]),_:1},8,["onClick"]),a(n,{type:"primary",onClick:o.handleReload},{default:t(()=>[m(" 刷新并返回第一页 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}const oo=b(h,[["render",T]]);export{oo as default};
