var d=(o,a,e)=>new Promise((n,t)=>{var p=r=>{try{s(e.next(r))}catch(u){t(u)}},i=r=>{try{s(e.throw(r))}catch(u){t(u)}},s=r=>r.done?n(r.value):Promise.resolve(r.value).then(p,i);s((e=e.apply(o,a)).next())});import{P as F}from"./index-c0bc48c3.js";import{B as w}from"./BasicForm-5c70f39e.js";import"./componentMap-3b23f8a1.js";import{u as h}from"./useForm-c6741082.js";import"./RadioButtonGroup-b3ca988d.js";import{d as P,a7 as m,_ as g,a8 as B,a9 as c,a0 as f,f as l,E as _}from"./vue-854c8149.js";import{_ as C}from"./index-a0566264.js";import"./useContentViewHeight-dd2980e0.js";import"./useWindowSizeFn-52bece23.js";import"./antd-cc917134.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./index-151c565a.js";import"./index-aede926d.js";import"./uniqBy-2617372f.js";import"./index-4032fa3d.js";import"./useFormItem-55533111.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-476c8809.js";const b=[{field:"passwordOld",label:"当前密码",component:"InputPassword",required:!0},{field:"passwordNew",label:"新密码",component:"StrengthMeter",componentProps:{placeholder:"新密码"},rules:[{required:!0,message:"请输入新密码"}]},{field:"confirmPassword",label:"确认密码",component:"InputPassword",dynamicRules:({values:o})=>[{required:!0,validator:(a,e)=>e?e!==o.passwordNew?Promise.reject("两次输入的密码不一致!"):Promise.resolve():Promise.reject("密码不能为空")}]}],E=P({name:"ChangePassword",components:{BasicForm:w,PageWrapper:F},setup(){const[o,{validate:a,resetFields:e}]=h({size:"large",baseColProps:{span:24},labelWidth:100,showActionButtonGroup:!1,schemas:b});function n(){return d(this,null,function*(){try{const t=yield a(),{passwordOld:p,passwordNew:i}=t}catch(t){}})}return{register:o,resetFields:e,handleSubmit:n}}}),y={class:"py-8 bg-white flex flex-col justify-center items-center"},k={class:"flex justify-center"};function v(o,a,e,n,t,p){const i=m("BasicForm"),s=m("a-button"),r=m("PageWrapper");return g(),B(r,{title:"修改当前用户密码",content:"修改成功后会自动退出当前登录！"},{default:c(()=>[f("div",y,[l(i,{onRegister:o.register},null,8,["onRegister"]),f("div",k,[l(s,{onClick:o.resetFields},{default:c(()=>[_(" 重置 ")]),_:1},8,["onClick"]),l(s,{class:"!ml-4",type:"primary",onClick:o.handleSubmit},{default:c(()=>[_(" 确认 ")]),_:1},8,["onClick"])])])]),_:1})}const Y=C(E,[["render",v]]);export{Y as default};
