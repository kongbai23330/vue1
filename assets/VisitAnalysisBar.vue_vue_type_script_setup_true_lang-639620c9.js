var p=Object.defineProperty;var s=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var i=(a,e,t)=>e in a?p(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,n=(a,e)=>{for(var t in e||(e={}))l.call(e,t)&&i(a,t,e[t]);if(s)for(var t of s(e))m.call(e,t)&&i(a,t,e[t]);return a};import{du as c}from"./useECharts-40dc7a8d.js";import{b as h}from"./props-8b0ad601.js";import{d,k as f,o as u,_ as y,$ as _,af as b}from"./vue-854c8149.js";const A=d({__name:"VisitAnalysisBar",props:n({},h),setup(a){const e=f(null),{setOptions:t}=c(e);return u(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:[...new Array(12)].map((r,o)=>`${o+1}月`)},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(r,o)=>(y(),_("div",{ref_key:"chartRef",ref:e,style:b({height:r.height,width:r.width})},null,4))}});export{A as _};
