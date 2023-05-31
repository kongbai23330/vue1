import k from"./CollapseItem-e2ad1e32.js";import G from"./FormComponentPanel-bc01a975.js";import V from"./JsonModal-f30ac63f.js";import j from"./index-f6b53843.js";import{_ as N}from"./useForm.vue_vue_type_script_setup_true_lang-ec52dc8d.js";import Y from"./Toolbar-aed312bc.js";import q from"./PropsPanel-7b1cb16d.js";import Q from"./ImportJsonModal-0053e2e5.js";import U from"./CodeModal-5006d947.js";import"./index-9d862da0.js";import{g as P,f as X}from"./index-ced00421.js";import{b as Z,c as ee,l as oe}from"./formItemConfig-b9b20ed2.js";import{f as te,aP as re,_ as ne}from"./index-a0566264.js";import{g as se}from"./formItemPropsConfig-d2a533d3.js";import{C as b}from"./index-151c565a.js";import{bu as D,bv as ae,Y as le,D as c}from"./antd-cc917134.js";import{d as ie,k as l,p as f,_ as me,$ as pe,f as n,a9 as i,u as s,a2 as J,ae as ue,aa as de,R as ce,ad as fe,ag as ve,F as he}from"./vue-854c8149.js";import"./vuedraggable.umd-5f0035b8.js";import"./LayoutItem-5e0e74e2.js";import"./FormNode-f014959e.js";import"./FormNodeOperate-a604d76f.js";import"./useFormDesignState-c29500c0.js";import"./index-64c20b7d.js";import"./PreviewCode-d392f382.js";import"./useCopyToClipboard-d237d4f9.js";import"./index-96f2ddbd.js";import"./FormRender-cba68d81.js";import"./BasicForm-5c70f39e.js";import"./FormItem.vue_vue_type_script_lang-9bedb9c7.js";import"./componentMap-3b23f8a1.js";import"./useFormItem-55533111.js";import"./RadioButtonGroup-b3ca988d.js";import"./index-4032fa3d.js";import"./useWindowSizeFn-52bece23.js";import"./uuid-31b8b5a4.js";import"./download-2156f38a.js";import"./base64Conver-39fc0d26.js";import"./index-87d26e88.js";import"./IconPicker.vue_vue_type_style_index_0_lang-c6e063ee.js";import"./index-476c8809.js";import"./uniqBy-2617372f.js";import"./useForm-c6741082.js";import"./FormProps-a384b885.js";import"./FormItemProps-d8381b55.js";import"./RuleProps-f2d3a05d.js";import"./ComponentProps-aca32538.js";import"./FormOptions-5f3b4fb5.js";import"./FormItemColumnProps-2fe2064d.js";import"./index-aede926d.js";const ye=ie({__name:"index",props:{title:{type:String,default:"v-form-antd表单设计器"}},setup(Pe){const{prefixCls:F}=te("form-design"),z=l(null),I=l(null),M=l(null),w=l(null),L=l(null),S=l(null),$=l({}),t=l({schemas:[],layout:"horizontal",labelLayout:"flex",labelWidth:100,labelCol:{},wrapperCol:{},currentItem:{component:"",componentProps:{}},activeKey:1}),R=o=>{o.schemas=o.schemas||[],o.schemas.forEach(e=>{e.colProps=e.colProps||{span:24},e.componentProps=e.componentProps||{},e.itemProps=e.itemProps||{}}),t.value=o},T=re(t,{deep:!0,capacity:20,parse:o=>{const e=c(o),{currentItem:r,schemas:a}=e,d=a&&a.find(m=>m.key===(r==null?void 0:r.key));return d&&(e.currentItem=d),e}}),p=o=>{t.value.currentItem=o,E(o.key?t.value.activeKey===1?2:t.value.activeKey:1)},H=o=>{o.colProps=o.colProps||{},o.colProps.span=se.span},v=(o,e)=>{},g=o=>{const e=c(o);return H(e),P(e),e},h=o=>{var r;const e=c(o);if(H(e),P(e),!((r=t.value.currentItem)!=null&&r.key)){p(e),t.value.schemas&&t.value.schemas.push(e);return}x(e,!1)},W=o=>{const e=c(o);return e.component==="Grid"&&X([o],r=>{P(r)}),e},x=(o=t.value.currentItem,e=!0)=>{var d;const r=(d=t.value.currentItem)==null?void 0:d.key,a=m=>{m.some((y,C)=>{var K;if(y.key===r){e?m.splice(C,0,W(y)):m.splice(C+1,0,o);const _={newIndex:C+1};return A(_,m,e),!0}["Grid","Tabs"].includes(y.component)&&((K=y.columns)==null||K.forEach(_=>{a(_.children)}))})};t.value.schemas&&a(t.value.schemas)},A=({newIndex:o},e,r=!1)=>{const a=e[o];r&&P(a),p(a)},u=o=>{const e=c(t.value);o==null||o.showModal(e)},E=o=>{t.value.activeKey=o},O=()=>{t.value.schemas=[],p({component:""})},B=(o,e)=>$.value[o]=e;return f("formModel",$),f("setFormModelMethod",B),f("formConfig",t),f("historyReturn",T),f("formDesignMethods",{handleBeforeColAdd:A,handleCopy:x,handleListPush:h,handleSetSelectItem:p,handleAddAttrs:v,setFormConfig:R}),(o,e)=>(me(),pe(he,null,[n(s(le),null,{default:i(()=>[n(s(D),{class:J(`left ${s(F)}-sider`),collapsible:"",collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"md"},{default:i(()=>[n(s(b),{title:"基础控件"},{default:i(()=>[n(k,{list:s(Z),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"自定义控件"},{default:i(()=>[n(k,{list:s(ee),onAddAttrs:v,handleListPush:g,onHandleListPush:h},null,8,["list"])]),_:1}),n(s(b),{title:"布局控件"},{default:i(()=>[n(k,{list:s(oe),handleListPush:g,onAddAttrs:v,onHandleListPush:h},null,8,["list"])]),_:1})]),_:1},8,["class"]),n(s(ae),null,{default:i(()=>[n(Y,{onHandleOpenJsonModal:e[0]||(e[0]=r=>u(I.value)),onHandleOpenImportJsonModal:e[1]||(e[1]=r=>u(M.value)),onHandlePreview:e[2]||(e[2]=r=>u(w.value)),onHandlePreview2:e[3]||(e[3]=r=>u(L.value)),onHandleOpenCodeModal:e[4]||(e[4]=r=>u(S.value)),onHandleClearFormItems:O}),n(G,{"current-item":t.value.currentItem,data:t.value,onHandleSetSelectItem:p},null,8,["current-item","data"])]),_:1}),n(s(D),{class:J(`right ${s(F)}-sider`),collapsible:"",reverseArrow:!0,collapsedWidth:"0",width:"270",zeroWidthTriggerStyle:{"margin-top":"-70px","background-color":"gray"},breakpoint:"lg"},{default:i(()=>[n(q,{ref_key:"propsPanel",ref:z,activeKey:t.value.activeKey},ue({_:2},[de(t.value.schemas,r=>({name:`${r.component}Props`,fn:i(a=>[ce(o.$slots,`${r.component}Props`,fe(ve({formItem:a,props:a.componentProps})),void 0,!0)])}))]),1032,["activeKey"])]),_:3},8,["class"])]),_:3}),n(V,{ref_key:"jsonModal",ref:I},null,512),n(U,{ref_key:"codeModal",ref:S},null,512),n(Q,{ref_key:"importJsonModal",ref:M},null,512),n(j,{ref_key:"eFormPreview",ref:w,formConfig:t.value},null,8,["formConfig"]),n(N,{ref_key:"eFormPreview2",ref:L,formConfig:t.value},null,8,["formConfig"])],64))}});const vo=ne(ye,[["__scopeId","data-v-6ca7af74"]]);export{vo as default};
