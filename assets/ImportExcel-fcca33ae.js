import{I as B}from"./index-8c8f250d.js";import{B as E}from"./BasicTable-dcc346aa.js";import"./componentMap-3b23f8a1.js";import"./TableImg.vue_vue_type_style_index_0_lang-8eb0476b.js";import{P as S}from"./index-c0bc48c3.js";import{d as h,k as F,a7 as a,_ as c,a8 as f,a9 as m,f as d,E as I,$ as b,F as k,aa as C}from"./vue-854c8149.js";import{_ as D}from"./index-a0566264.js";import"./index-4032fa3d.js";import"./antd-cc917134.js";import"./index-151c565a.js";import"./index-aede926d.js";import"./useWindowSizeFn-52bece23.js";import"./BasicForm-5c70f39e.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./uniqBy-2617372f.js";import"./useForm-c6741082.js";import"./RadioButtonGroup-b3ca988d.js";import"./useFormItem-55533111.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./sortable.esm-797f0398.js";import"./useContentViewHeight-dd2980e0.js";const $=h({components:{BasicTable:E,ImpExcel:B,PageWrapper:S},setup(){const t=F([]);function p(n){t.value=[];for(const i of n){const{header:u,results:l,meta:{sheetName:r}}=i,e=[];for(const o of u)e.push({title:o,dataIndex:o});t.value.push({title:r,dataSource:l,columns:e})}}return{loadDataSuccess:p,tableListRef:t}}});function g(t,p,n,i,u,l){const r=a("a-button"),e=a("ImpExcel"),o=a("BasicTable"),_=a("PageWrapper");return c(),f(_,{title:"excel数据导入示例"},{default:m(()=>[d(e,{onSuccess:t.loadDataSuccess,dateFormat:"YYYY-MM-DD"},{default:m(()=>[d(r,{class:"m-3"},{default:m(()=>[I(" 导入Excel ")]),_:1})]),_:1},8,["onSuccess"]),(c(!0),b(k,null,C(t.tableListRef,(s,x)=>(c(),f(o,{key:x,title:s.title,columns:s.columns,dataSource:s.dataSource},null,8,["title","columns","dataSource"]))),128))]),_:1})}const ot=D($,[["render",g]]);export{ot as default};
