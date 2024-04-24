import{_ as M}from"./Loading.vue_vue_type_style_index_0_lang-t9IYFqea.js";import{d as E,f as R,I as f,r as w,j as y,o as a,c as u,E as C,P as z,q as t,F as v,m as L,t as n,u as e,k as A,O as Z,K as P,z as I,l as D,s as Q,b as W,Q as G}from"./index-26mLxrEz.js";import{a as S,u as N}from"./useWishList-DoAeoX6o.js";const U="data:image/gif;base64,R0lGODlhKAAkAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERDRTZEMEVBRDMwMTFFQUE5QzZFRUEzMkZCMEQwRUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERDRTZEMEZBRDMwMTFFQUE5QzZFRUEzMkZCMEQwRUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RENFNkQwQ0FEMzAxMUVBQTlDNkVFQTMyRkIwRDBFQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RENFNkQwREFEMzAxMUVBQTlDNkVFQTMyRkIwRDBFQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAAoACQAAAIlhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jedNAQA7",B={class:"productPage_actionBlock"},T=["value"],F=E({__name:"ActionBtn",props:{id:String,unit:String},setup(h){const c=h,{wishList:o,addToWishList:g,removeWishList:r}=S(),i=R(()=>o.value.includes(c.id)),d=R(()=>i.value?["fas","heart"]:["far","heart"]),{addToCart:m,useCartLoading:k}=f(),s=w(1);return(_,p)=>{const b=y("font-awesome-icon");return a(),u("div",B,[C(t("select",{"onUpdate:modelValue":p[0]||(p[0]=l=>s.value=l)},[(a(),u(v,null,L(10,l=>t("option",{key:l,value:l},n(_.$t("productPage.select",{value:l})+c.unit),9,T)),64))],512),[[z,s.value]]),t("div",null,[t("button",{type:"button",class:"btn btn-danger btn-outline",onClick:p[1]||(p[1]=l=>i.value?e(r)(`${c.id}`):e(g)(`${c.id}`))},[A(b,{icon:d.value},null,8,["icon"]),Z(" "+n(_.$t("productPage.addToWishList")),1)]),t("button",{type:"button",class:"btn btn-success btn-outline",onClick:p[2]||(p[2]=l=>e(m)({qty:s.value,product_id:`${c.id}`,mode:"add"}))},[e(k)?(a(),P(b,{key:0,icon:["fas","spinner"],"spin-pulse":""})):(a(),P(b,{key:1,icon:["fas","basket-shopping"]})),Z(" "+n(_.$t("productPage.addToCart")),1)])])])}}}),V={class:"container productPage"},j={class:"productPage_info"},O=["src"],$={class:"productPage_info_main"},H={class:"productPage_info_title"},J={class:"productPage_info_content"},Y={class:"productPage_price"},X={class:"price-origin"},x={class:"price-special"},q={class:"productPage_title"},K=["innerHTML"],tt={key:0,class:"productPage_title"},et={class:"productPage_similarList"},ot=t("img",{src:U},null,-1),it=E({__name:"Index",setup(h){const{productList:c,productPageData:o,getProduct:g}=N(),r=R(()=>c.value.filter(i=>{var d;return i.category===((d=o.value)==null?void 0:d.category)&&i.id!==o.value.id}));return(i,d)=>{const m=y("font-awesome-icon"),k=y("router-link");return a(),u("div",V,[t("div",j,[t("img",{src:e(o).imageUrl},null,8,O),t("div",$,[t("div",H,n(e(o).title),1),t("div",J,[t("div",null,n(e(o).description),1),t("div",null,n(e(o).content),1)]),t("div",Y,[t("div",X,n(i.$t("common.originalPrice",{price:e(o).origin_price})),1),t("div",x,n(i.$t("common.specialPrice",{price:e(o).price})),1)]),A(F,{id:e(o).id,unit:e(o).unit},null,8,["id","unit"])])]),t("div",q,[t("span",null,n(i.$t("productPage.qa")),1)]),(a(),u(v,null,L(3,s=>t("div",{key:s,class:"productPage_qa"},[A(m,{icon:["far","question-circle"]}),t("div",{innerHTML:i.$t(`productPage.qa-${s}`)},null,8,K)])),64)),r.value.length?(a(),u("div",tt,[t("span",null,n(i.$t("productPage.similar")),1)])):I("",!0),t("div",et,[(a(!0),u(v,null,L(r.value,s=>(a(),P(k,{key:s.id,to:{name:"productPage",params:{id:s.id}},onClick:_=>e(g)(s.id)},{default:D(()=>[t("div",{style:Q(`background-image: url(${s.imageUrl})`),class:"productPage_similarList_img"},[ot,t("div",null,n(s.title),1)],4)]),_:2},1032,["to","onClick"]))),128))])])}}}),ct=E({__name:"ProductPage",setup(h){const c=G(),{productPageLoading:o,getProduct:g,getProductList:r,productPageData:i}=N();return W(async()=>{await g(`${c.params.id}`),await r()}),(d,m)=>(a(),u(v,null,[A(M,{loading:e(o),"full-page":""},null,8,["loading"]),Object.keys(e(i)).length?(a(),P(it,{key:0})):I("",!0)],64))}});export{ct as default};