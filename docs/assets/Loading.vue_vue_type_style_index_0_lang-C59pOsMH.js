import{d as s,$ as a,b as i,e as d,B as u,P as f,R as c,J as g}from"./@vee-validate-CHlFrRps.js";const _=s({__name:"Loading",props:{loading:{required:!0,type:Boolean,default:!1},loadingModifiers:{},light:{type:Boolean,default:!1},lightModifiers:{},fullPage:{type:Boolean,default:!1},fullPageModifiers:{}},emits:["update:loading","update:light","update:fullPage"],setup(e){const l=a(e,"loading"),o=a(e,"light"),t=a(e,"fullPage");return(r,m)=>{const n=g("font-awesome-icon");return l.value?(i(),d("div",{key:0,class:f(["loading_mask",{light:o.value,fullPage:t.value}])},[u(n,{icon:["fas","spinner"],"spin-pulse":""})],2)):c("",!0)}}});export{_};
