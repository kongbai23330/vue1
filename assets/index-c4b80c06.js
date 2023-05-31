import{B as b}from"./BasicTable-dcc346aa.js";import{T as C}from"./componentMap-3b23f8a1.js";import"./TableImg.vue_vue_type_style_index_0_lang-8eb0476b.js";import{u as T}from"./useTable-93a62681.js";import{d as g}from"./system-e33545a8.js";import{u as _}from"./index-f77b5f0e.js";import{M as w,c as S,s as D}from"./MenuDrawer-6b6c4da9.js";import{d as k,q as B,a7 as o,_ as h,$ as F,f as c,a9 as l,E as M,a8 as y,ab as E}from"./vue-854c8149.js";import{_ as A}from"./index-a0566264.js";import"./useFormItem-55533111.js";import"./antd-cc917134.js";import"./RadioButtonGroup-b3ca988d.js";import"./index-4032fa3d.js";import"./index-151c565a.js";import"./index-aede926d.js";import"./useWindowSizeFn-52bece23.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./BasicForm-5c70f39e.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./uniqBy-2617372f.js";import"./useForm-c6741082.js";import"./index-c0bc48c3.js";import"./useContentViewHeight-dd2980e0.js";import"./sortable.esm-797f0398.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:C},setup(){const[e,{openDrawer:n}]=_(),[m,{reload:u,expandAll:p}]=T({title:"菜单列表",api:g,columns:S,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function d(){n(!0,{isUpdate:!1})}function r(t){n(!0,{record:t,isUpdate:!0})}function a(t){}function i(){u()}function s(){B(p)}return{registerTable:m,registerDrawer:e,handleCreate:d,handleEdit:r,handleDelete:a,handleSuccess:i,onFetchSuccess:s}}});function $(e,n,m,u,p,d){const r=o("a-button"),a=o("TableAction"),i=o("BasicTable"),s=o("MenuDrawer");return h(),F("div",null,[c(i,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(r,{type:"primary",onClick:e.handleCreate},{default:l(()=>[M(" 新增菜单 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:t,record:f})=>[t.key==="action"?(h(),y(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const le=A(R,[["render",$]]);export{le as default};
