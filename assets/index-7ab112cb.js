import{a as d,bh as k,f as B,b8 as f,_ as L}from"./index-a0566264.js";import{u as y}from"./useRootSetting-5fe16c1d.js";import{c as S,u as D}from"./index-bb1ca2c6.js";import P from"./SessionTimeoutLogin-f3ea9d93.js";import{bG as w}from"./antd-cc917134.js";import{d as C,e as T,u as o,a7 as n,_ as r,$ as E,f as F,a8 as m,ab as p,a2 as I,F as h}from"./vue-854c8149.js";import"./index-aede926d.js";import"./index-151c565a.js";import"./index-3d8f144f.js";import"./useContentViewHeight-dd2980e0.js";import"./useWindowSizeFn-52bece23.js";import"./uniqBy-2617372f.js";import"./lock-1e1011df.js";import"./Login.vue_vue_type_style_index_0_lang-04f006fc.js";import"./LoginForm.vue_vue_type_script_setup_true_lang-7b653e56.js";import"./LoginFormTitle.vue_vue_type_script_setup_true_lang-6bc0e683.js";import"./ForgetPasswordForm.vue_vue_type_script_setup_true_lang-ed0c2d85.js";import"./index-476c8809.js";import"./useFormItem-55533111.js";import"./RegisterForm.vue_vue_type_script_setup_true_lang-328be55e.js";import"./index-87d26e88.js";import"./MobileForm.vue_vue_type_script_setup_true_lang-6f6770b2.js";import"./QrCodeForm.vue_vue_type_script_setup_true_lang-be400ef0.js";import"./index-08ed859e.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";const v=C({name:"LayoutFeatures",components:{BackTop:w,LayoutLockPage:S(()=>d(()=>import("./index-fc4d082b.js"),["assets/index-fc4d082b.js","assets/vue-854c8149.js","assets/LockPage-a0b863b1.js","assets/index-a0566264.js","assets/antd-cc917134.js","assets/index-c2c9eebb.css","assets/lock-1e1011df.js","assets/header-55b09394.js","assets/LockPage-b0b08e00.css"])),SettingDrawer:S(()=>d(()=>import("./index-1236fffe.js").then(t=>t.i),["assets/index-1236fffe.js","assets/index-f77b5f0e.js","assets/index-a0566264.js","assets/vue-854c8149.js","assets/antd-cc917134.js","assets/index-c2c9eebb.css","assets/index-151c565a.js","assets/index-aede926d.js","assets/index-2c133100.css","assets/index-6c94692d.css","assets/index-bb1ca2c6.js","assets/useRootSetting-5fe16c1d.js","assets/index-3d8f144f.js","assets/useContentViewHeight-dd2980e0.js","assets/useWindowSizeFn-52bece23.js","assets/index-054645fa.css","assets/uniqBy-2617372f.js","assets/lock-1e1011df.js","assets/index-f8b22ee1.css"])),SessionTimeoutLogin:P},setup(){const{getUseOpenBackTop:t,getShowSettingButton:u,getSettingButtonPosition:c,getFullContent:g}=y(),_=k(),{prefixCls:l}=B("setting-drawer-feature"),{getShowHeader:s}=D(),i=T(()=>_.getSessionTimeout),a=T(()=>{if(!o(u))return!1;const e=o(c);return e===f.AUTO?!o(s)||o(g):e===f.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:a,prefixCls:l,getIsSessionTimeout:i}}});function O(t,u,c,g,_,l){const s=n("LayoutLockPage"),i=n("BackTop"),a=n("SettingDrawer"),e=n("SessionTimeoutLogin");return r(),E(h,null,[F(s),t.getUseOpenBackTop?(r(),m(i,{key:0,target:t.getTarget},null,8,["target"])):p("",!0),t.getIsFixedSettingDrawer?(r(),m(a,{key:1,class:I(t.prefixCls)},null,8,["class"])):p("",!0),t.getIsSessionTimeout?(r(),m(e,{key:2})):p("",!0)],64)}const st=L(v,[["render",O]]);export{st as default};
