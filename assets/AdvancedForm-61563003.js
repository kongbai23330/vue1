import{B as u}from"./BasicForm-5c70f39e.js";import"./componentMap-3b23f8a1.js";import{u as i}from"./useForm-c6741082.js";import"./RadioButtonGroup-b3ca988d.js";import{C as d}from"./index-151c565a.js";import{P as f}from"./index-c0bc48c3.js";import{d as b,a7 as p,_ as C,a8 as P,a9 as l,f as t}from"./vue-854c8149.js";import{_ as h}from"./index-a0566264.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./antd-cc917134.js";import"./uniqBy-2617372f.js";import"./index-4032fa3d.js";import"./useWindowSizeFn-52bece23.js";import"./useFormItem-55533111.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./index-aede926d.js";import"./useContentViewHeight-dd2980e0.js";const c=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function _(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const F=b({components:{BasicForm:u,CollapseContainer:d,PageWrapper:f},setup(){const[e]=i({labelWidth:120,schemas:c(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),n=[];for(let o=14;o<30;o++)n.push({field:"field"+o,component:"Input",label:"字段"+o,colProps:{span:8}});const[r]=i({labelWidth:120,schemas:[...c(),..._(),{field:"",component:"Divider",label:"更多字段"},...n],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:e,register1:r}}});function g(e,n,r,o,B,v){const a=p("BasicForm"),s=p("CollapseContainer"),m=p("PageWrapper");return C(),P(m,{title:"可折叠表单示例"},{default:l(()=>[t(s,{title:"基础收缩示例"},{default:l(()=>[t(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),t(s,{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:l(()=>[t(a,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}const M=h(F,[["render",g]]);export{M as default};
