import{i as w,u as T,j as b,h as p,k as S,l as L,m as W}from"./index-D5G8d3-0.js";import{r as s,c as m}from"./@vee-validate-CHlFrRps.js";const H=w(()=>{const a=s(!0),o=s([]),d=async()=>{var t;a.value=!0;const e=await p("get","products/all");e.success&&((t=e.products)!=null&&t.length)&&(o.value=e.products),a.value=!1},{t:i}=T(),u=s(0),g=m(()=>{const e=[{text:i("productList.all"),active:!1}];return o.value.length&&(o.value.forEach(t=>{e.findIndex(c=>c.text===t.category)===-1&&e.push({text:t.category,active:!1})}),e[u.value].active=!0),e}),y=e=>{u.value=e,f(!0)},r=s("inactive"),f=e=>{if(e){r.value="inactive";return}r.value=r.value==="inactive"||r.value==="highToLow"?"lowToHigh":"highToLow"},l=s(""),h=s(""),x=b(()=>{h.value=l.value},500),P=m(()=>{let e=u.value?o.value.filter(t=>t.category===g.value[u.value].text):o.value;return h.value!==""&&(e=e.filter(t=>t.title.includes(l.value))),r.value==="lowToHigh"?e=L(e,(t,c)=>Number(t.price)-Number(c.price)).value:r.value==="highToLow"&&(e=L(e,(t,c)=>Number(c.price)-Number(t.price)).value),e}),n=s(!0),v=s({});return{loading:a,productList:o,getProductList:d,category:g,clickCategory:y,keyword:l,setFinalKeyword:x,sortPrice:r,changeSortPrice:f,filterProductList:P,productPageLoading:n,getProduct:async e=>{n.value=!0;const{success:t,product:c}=await p("get",`/product/${e}`);t&&(v.value=c,S(`${v.value.title}`)),n.value=!1},productPageData:v}}),I=w(()=>{const a=W("wishList",[],localStorage,{mergeDefaults:!0});return{wishList:a,addToWishList:i=>{a.value.push(i)},removeWishList:i=>{const u=a.value.indexOf(i);u>=0&&a.value.splice(u,1)}}});export{I as a,H as u};