import{B as p}from"./BasicTable-dcc346aa.js";import{T as s}from"./componentMap-3b23f8a1.js";import"./TableImg.vue_vue_type_style_index_0_lang-8eb0476b.js";import{u as c}from"./useTable-93a62681.js";import{d as u}from"./table-331fab6c.js";import{d as f,a7 as a,_ as r,$ as b,f as _,a9 as h,a8 as T,ab as w}from"./vue-854c8149.js";import{_ as x}from"./index-a0566264.js";import"./useFormItem-55533111.js";import"./antd-cc917134.js";import"./RadioButtonGroup-b3ca988d.js";import"./index-4032fa3d.js";import"./index-151c565a.js";import"./index-aede926d.js";import"./useWindowSizeFn-52bece23.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./BasicForm-5c70f39e.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./uniqBy-2617372f.js";import"./useForm-c6741082.js";import"./index-c0bc48c3.js";import"./useContentViewHeight-dd2980e0.js";import"./sortable.esm-797f0398.js";const C=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}],A=f({components:{BasicTable:p,TableAction:s},setup(){const[t]=c({title:"TableAction组件及固定列示例",api:u,columns:C,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function e(i){}function o(i){}return{registerTable:t,handleDelete:e,handleOpen:o}}}),I={class:"p-4"};function B(t,e,o,i,F,k){const l=a("TableAction"),d=a("BasicTable");return r(),b("div",I,[_(d,{onRegister:t.registerTable},{bodyCell:h(({column:m,record:n})=>[m.key==="action"?(r(),T(l,{key:0,actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,n)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:t.handleOpen.bind(null,n)}}]},null,8,["actions","dropDownActions"])):w("",!0)]),_:1},8,["onRegister"])])}const et=x(A,[["render",B]]);export{et as default};
