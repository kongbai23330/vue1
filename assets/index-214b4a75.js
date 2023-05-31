import{B as h}from"./BasicTable-dcc346aa.js";import{T as _}from"./componentMap-3b23f8a1.js";import"./TableImg.vue_vue_type_style_index_0_lang-8eb0476b.js";import{u as g}from"./useTable-93a62681.js";import{a as C}from"./system-e33545a8.js";import{b as T}from"./index-4032fa3d.js";import{D as B,c as k,s as D}from"./DeptModal-c82e66e3.js";import{d as E,a7 as t,_ as u,$ as M,f as i,a9 as s,E as S,a8 as y,ab as R}from"./vue-854c8149.js";import{_ as $}from"./index-a0566264.js";import"./useFormItem-55533111.js";import"./antd-cc917134.js";import"./RadioButtonGroup-b3ca988d.js";import"./index-151c565a.js";import"./index-aede926d.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./BasicForm-5c70f39e.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./uniqBy-2617372f.js";import"./useForm-c6741082.js";import"./index-c0bc48c3.js";import"./useContentViewHeight-dd2980e0.js";import"./useWindowSizeFn-52bece23.js";import"./sortable.esm-797f0398.js";const w=E({name:"DeptManagement",components:{BasicTable:h,DeptModal:B,TableAction:_},setup(){const[e,{openModal:n}]=T(),[l,{reload:m}]=g({title:"部门列表",api:C,columns:k,formConfig:{labelWidth:120,schemas:D},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function c(){n(!0,{isUpdate:!1})}function p(o){n(!0,{record:o,isUpdate:!0})}function a(o){}function r(){m()}return{registerTable:l,registerModal:e,handleCreate:c,handleEdit:p,handleDelete:a,handleSuccess:r}}});function A(e,n,l,m,c,p){const a=t("a-button"),r=t("TableAction"),o=t("BasicTable"),f=t("DeptModal");return u(),M("div",null,[i(o,{onRegister:e.registerTable},{toolbar:s(()=>[i(a,{type:"primary",onClick:e.handleCreate},{default:s(()=>[S(" 新增部门 ")]),_:1},8,["onClick"])]),bodyCell:s(({column:b,record:d})=>[b.key==="action"?(u(),y(r,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,d)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,d)}}]},null,8,["actions"])):R("",!0)]),_:1},8,["onRegister"]),i(f,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const se=$(w,[["render",A]]);export{se as default};
