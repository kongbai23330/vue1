var d=(o,r,e)=>new Promise((m,i)=>{var l=t=>{try{s(e.next(t))}catch(u){i(u)}},a=t=>{try{s(e.throw(t))}catch(u){i(u)}},s=t=>t.done?m(t.value):Promise.resolve(t.value).then(l,a);s((e=e.apply(o,r)).next())});import{B as v}from"./BasicForm-5c70f39e.js";import"./componentMap-3b23f8a1.js";import{u as h}from"./useForm-c6741082.js";import"./RadioButtonGroup-b3ca988d.js";import{C as g}from"./index-151c565a.js";import{a as B}from"./index-172a9941.js";import{k as A,b as F,_ as I}from"./index-a0566264.js";import{h as S}from"./header-55b09394.js";import{a as b}from"./account-8faf1b49.js";import{b as w}from"./data-15304551.js";import{u as k}from"./upload-1abf3355.js";import{d as y,o as E,e as R,a7 as n,_ as U,a8 as V,a9 as c,f as p,a0 as _,E as $,a3 as x,a4 as M}from"./vue-854c8149.js";import{W as N,a6 as T,a7 as W}from"./antd-cc917134.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./uniqBy-2617372f.js";import"./index-4032fa3d.js";import"./useWindowSizeFn-52bece23.js";import"./useFormItem-55533111.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";import"./index-aede926d.js";const G=y({components:{BasicForm:v,CollapseContainer:g,Button:N,ARow:T,ACol:W,CropperAvatar:B},setup(){const{createMessage:o}=F(),r=A(),[e,{setFieldsValue:m}]=h({labelWidth:120,schemas:w,showActionButtonGroup:!1});E(()=>d(this,null,function*(){const a=yield b();m(a)}));const i=R(()=>{const{avatar:a}=r.getUserInfo;return a||S});function l({src:a,data:s}){const t=r.getUserInfo;t.avatar=a,r.setUserInfo(t)}return{avatar:i,register:e,uploadApi:k,updateAvatar:l,handleSubmit:()=>{o.success("更新成功！")}}}});const P=o=>(x("data-v-85758967"),o=o(),M(),o),j={class:"change-avatar"},q=P(()=>_("div",{class:"mb-2"},"头像",-1));function z(o,r,e,m,i,l){const a=n("BasicForm"),s=n("a-col"),t=n("CropperAvatar"),u=n("a-row"),f=n("Button"),C=n("CollapseContainer");return U(),V(C,{title:"基本设置",canExpan:!1},{default:c(()=>[p(u,{gutter:24},{default:c(()=>[p(s,{span:14},{default:c(()=>[p(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(s,{span:10},{default:c(()=>[_("div",j,[q,p(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),p(f,{type:"primary",onClick:o.handleSubmit},{default:c(()=>[$(" 更新基本信息 ")]),_:1},8,["onClick"])]),_:1})}const ho=I(G,[["render",z],["__scopeId","data-v-85758967"]]);export{ho as default};
