import{p as K,f as Z,m as ee,_ as T,au as te}from"./index-a0566264.js";import{d as b,e as w,a7 as _,_ as C,$ as R,f as o,a9 as S,R as ne,F as oe,aa as se,a8 as B,ad as ae,ac as O,ae as re,a2 as ie,r as le,k as W,s as ce,u as g,E as X,m as ue}from"./vue-854c8149.js";import{aB as F,aQ as me,aT as de,aU as ge}from"./antd-cc917134.js";import{P as fe}from"./index-c0bc48c3.js";import"./useContentViewHeight-dd2980e0.js";import"./useWindowSizeFn-52bece23.js";const pe=b({name:"ImagePreview",components:{Image:F,PreviewGroup:F.PreviewGroup},props:{functional:K.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=Z("image-preview"),c=w(()=>{const{imageList:i}=n;return i?i.map(t=>ee(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:c}}});function ve(n,u,c,i,t,h){const d=_("Image"),p=_("PreviewGroup");return C(),R("div",{class:ie(n.prefixCls)},[o(p,null,{default:S(()=>[!n.imageList||n.$slots.default?ne(n.$slots,"default",{key:0}):(C(!0),R(oe,{key:1},se(n.getImageList,l=>(C(),B(d,ae(O({key:l.src},l)),re({_:2},[l.placeholder?{name:"placeholder",fn:S(()=>[o(d,O(l,{src:l.placeholder,preview:!1}),null,16,["src"])]),key:"0"}:void 0]),1040))),128))]),_:3})],2)}const _e=T(pe,[["render",ve]]),he="/assets/resume-8f27866b.svg",Ie="/assets/p-rotate-cb8bbfc3.svg",Le="/assets/scale-44abde22.svg",we="/assets/unscale-c552f416.svg",Ce="/assets/unrotate-ef6a2daf.svg";var f=function(n){return n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL",n}(f||{});const Se={show:{type:Boolean,default:!1},imageList:{type:Array,default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},a="img-preview",$e=b({name:"ImagePreview",props:Se,emits:["img-load","img-error"],setup(n,{expose:u,emit:c}){const i=new Map,t=le({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:f.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=W(null),d=W(null);function p(){Y();const{index:e,imageList:s}=n;if(!s||!s.length)throw new Error("imageList is undefined");t.currentIndex=e,P(s[e])}function l(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function Y(){const e=g(h);e&&(e.onmousewheel=$,document.body.addEventListener("DOMMouseScroll",$),document.ondragstart=function(){return!1})}const I=w(()=>{var s;const e=(s=n==null?void 0:n.scaleStep)!=null?s:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function $(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&L(I.value),e.delta<0&&L(-I.value)}function L(e){t.imgScale<=.2&&e<0||(t.imgScale+=e*.1,t.imgScale<0&&(t.imgScale=.02))}function k(e){t.imgRotate+=e}function U(){const e=g(d);e&&(e.onmousemove=null)}function P(e){t.status=f.LOADING;const s=new Image;s.src=e,s.onload=r=>{if(t.currentUrl!==e){const m=r.composedPath();if(n.rememberState){i.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=i.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(l(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&c("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=f.DONE},s.onerror=r=>{const m=r.composedPath();m&&c("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=f.FAIL}}function A(e){e&&e.stopPropagation(),E()}function E(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",$),document.ondragstart=null}function D(){l()}u({resume:D,close:E,prev:x.bind(null,"left"),next:x.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function x(e){const{currentIndex:s}=t,{imageList:r}=n;e==="left"&&(t.currentIndex--,s<=0&&(t.currentIndex=r.length-1)),e==="right"&&(t.currentIndex++,s>=r.length-1&&(t.currentIndex=0)),P(r[t.currentIndex])}function z(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const s=g(d);s&&(s.onmousemove=V)}function V(e){e=e||window.event,e.preventDefault();const s=e.clientX-t.moveX,r=e.clientY-t.moveY;t.imgLeft+=s,t.imgTop+=r,t.moveX=e.clientX,t.moveY=e.clientY}const j=w(()=>{const{imgScale:e,imgRotate:s,imgTop:r,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${s}deg)`,marginTop:`${r}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),M=w(()=>{const{imageList:e}=n;return e.length>1});ce(()=>{n.show&&p(),n.imageList&&l()});const Q=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${a}-content`)&&A(e)},q=()=>o("div",{class:`${a}__close`,onClick:A},[o(me,{class:`${a}__close-icon`},null)]),H=()=>{if(!g(M))return null;const{currentIndex:e}=t,{imageList:s}=n;return o("div",{class:`${a}__index`},[e+1,X(" / "),s.length])},J=()=>o("div",{class:`${a}__controller`},[o("div",{class:`${a}__controller-item`,onClick:()=>L(-I.value)},[o("img",{src:we},null)]),o("div",{class:`${a}__controller-item`,onClick:()=>L(I.value)},[o("img",{src:Le},null)]),o("div",{class:`${a}__controller-item`,onClick:D},[o("img",{src:he},null)]),o("div",{class:`${a}__controller-item`,onClick:()=>k(-90)},[o("img",{src:Ce},null)]),o("div",{class:`${a}__controller-item`,onClick:()=>k(90)},[o("img",{src:Ie},null)])]),N=e=>g(M)?o("div",{class:[`${a}__arrow`,e],onClick:()=>x(e)},[e==="left"?o(de,null,null):o(ge,null,null)]):null;return()=>t.show&&o("div",{class:a,ref:h,onMouseup:U,onClick:Q},[o("div",{class:`${a}-content`},[o("img",{style:g(j),class:[`${a}-image`,t.status===f.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:z},null),q(),H(),J(),N("left"),N("right")])])}});let y=null;function xe(n){var i;if(!te)return;const u={},c=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),y=o($e,u),ue(y,c),document.body.appendChild(c),(i=y.component)==null?void 0:i.exposed}const G=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],ye=b({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){xe({imageList:G,defaultWidth:700,rememberState:!0,onImgLoad:({index:c,url:i,dom:t})=>{}})}return{imgList:G,openImg:n}}});function be(n,u,c,i,t,h){const d=_("ImagePreview"),p=_("a-button"),l=_("PageWrapper");return C(),B(l,{title:"图片预览示例"},{default:S(()=>[o(d,{imageList:n.imgList},null,8,["imageList"]),o(p,{onClick:n.openImg,type:"primary"},{default:S(()=>[X("无预览图")]),_:1},8,["onClick"])]),_:1})}const Ne=T(ye,[["render",be]]);export{Ne as default};
