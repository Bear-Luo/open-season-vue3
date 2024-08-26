import{e as L,d as S,u as V,a as H,f as R,b as U,g as j,h as z}from"./index-D5G8d3-0.js";import{d as $,c as w,b as r,e as d,F as v,f as C,P as Q,h as t,O as n,Q as x,K as I,R as k,N as P,B as f,a4 as q,a5 as A,a as o,a6 as J,a7 as K,a8 as G,r as B,J as M,L as T,a2 as W,n as X,a3 as Y,A as F,a9 as Z,aa as tt,k as et}from"./@vee-validate-CHlFrRps.js";import{_ as N}from"./Loading.vue_vue_type_style_index_0_lang-C59pOsMH.js";const st={class:"container cartPage_steps"},at=$({__name:"Steps",setup(b){const{orderData:u}=L(),c=S(),_=w(()=>{let l=1;return c.name==="order"&&(l=u.value.is_paid?3:2),l}),{t:i}=V(),{width:m}=H(),p=w(()=>{let l=[];if(m.value<481)l.push({step:_.value,text:i("cart.steps",_.value-1)});else for(let s=0;s<3;s++)l.push({step:s+1,text:i("cart.steps",s)});return l});return(l,s)=>(r(),d("ul",st,[(r(!0),d(v,null,C(p.value,e=>(r(),d("li",{key:e.step,class:Q({active:e.step<=_.value})},[t("div",null,[t("i",null,n(e.step),1),t("span",null,n(e.text),1)])],2))),128))]))}}),ot={key:0,class:"text-danger"},nt=$({__name:"Form",setup(b){const{t:u}=V(),c=[{text:u("form.email"),rule:"required|email",alias:"email",as:"input"},{text:u("form.name"),rule:"required",alias:"name",as:"input"},{text:u("form.tel"),rule:"required|numeric",alias:"tel",as:"input"},{text:u("form.address"),rule:"required",alias:"address",as:"input"},{text:u("form.message"),alias:"message",as:"textarea"}],{recipientInfo:_,setCheckInfoSubmitDisable:i}=L();return(m,p)=>(r(),x(o(G),{class:"checkInfo_form"},{default:I(({meta:l})=>[(r(),d(v,null,C(c,s=>t("div",{key:s.alias,class:"form_group"},[t("label",null,[s.rule&&s.rule.includes("required")?(r(),d("span",ot,"*")):k("",!0),P(" "+n(s.text),1)]),f(o(J),{name:s.alias,placeholder:m.$t("form.pleaseFillIn")+s.text,rules:s.rule,label:s.text,modelValue:o(_)[s.alias],"onUpdate:modelValue":e=>o(_)[s.alias]=e,onChange:e=>o(i)(l.valid)},{default:I(({errors:e,field:a})=>[(r(),x(q(s.as),A(a,{class:{"form-danger":e.length}}),null,16,["class"]))]),_:2},1032,["name","placeholder","rules","label","modelValue","onUpdate:modelValue","onChange"]),f(o(K),{name:s.alias,as:"div",class:"form_errorMsg"},null,8,["name"])])),64))]),_:1}))}}),rt={class:"coupon_block"},lt={class:"coupon_code"},ct={class:"form_group form_group--inline"},O="20percent",ut=$({__name:"Coupon",setup(b){const{copy:u}=R(),c=B(""),{getCart:_,setUseCartLoading:i}=U(),m=async l=>{const s={data:{code:l}},{success:e}=await z("post","/coupon",{data:s});e?(i(!0),await _(),i(!1)):c.value=""},{setMessage:p}=j();return(l,s)=>{const e=M("font-awesome-icon");return r(),d("div",rt,[t("div",lt,[P(n(l.$t("cart.copyCoupon"))+" ",1),t("button",{type:"button",class:"btn btn-sm btn-info",onClick:s[0]||(s[0]=a=>{o(u)(O),o(p)({text:l.$t("cart.copiedCoupon")})})},[P(n(O)+" "),f(e,{icon:["far","copy"]})])]),t("div",ct,[T(t("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>c.value=a),type:"text"},null,512),[[W,c.value]]),t("button",{type:"button",class:"btn btn-quaternary btn-outline",onClick:s[2]||(s[2]=a=>m(c.value))},n(l.$t("cart.useCoupon")),1)])])}}}),D=b=>{const u=new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g");return`${b}`.replace(u,",")},it={class:"cartInfo"},dt={class:"card_list"},_t={class:"card_list_link"},pt=["onUpdate:modelValue","onChange"],mt=["value"],ht={class:"price"},ft=["onClick"],gt={class:"cartInfo_total"},vt={class:"price"},bt=$({__name:"CartInfo",setup(b){const{cart:u,addToCart:c,removeCart:_,cartEachQty:i}=U(),m=w(()=>{const l=[];return Object.keys(u.value).length&&u.value.carts.length&&u.value.carts.forEach(s=>{let e={...s};e.final_total=D(Number(e.final_total)),l.push(e)}),l}),p=w(()=>D(u.value.total));return(l,s)=>{const e=M("router-link");return r(),d("div",it,[t("ul",dt,[(r(!0),d(v,null,C(m.value,a=>(r(),d("li",{key:a.id},[f(e,{to:{name:"productPage",params:{id:a.product_id}},style:X(`background-image: url(${a.product.imageUrl})`),class:"card_list_img"},null,8,["to","style"]),t("div",_t,[f(e,{to:{name:"productPage",params:{id:a.product_id}}},{default:I(()=>[P(n(a.product.title),1)]),_:2},1032,["to"])]),T(t("select",{"onUpdate:modelValue":g=>o(i)[a.id]=g,onChange:g=>o(c)({qty:o(i)[a.id],product_id:a.product_id,mode:"change"})},[(r(),d(v,null,C(10,g=>t("option",{key:g,value:g},n(g),9,mt)),64))],40,pt),[[Y,o(i)[a.id]]]),t("div",ht,n(a.final_total),1),t("button",{type:"button",class:"card_btnCrosses",onClick:g=>o(_)({id:a.id,mode:"remove"})},null,8,ft)]))),128)),t("li",gt,[t("div",null,n(l.$t("cart.total")),1),t("div",vt,n(p.value),1)])]),f(ut)])}}}),$t={key:0,class:"checkInfo"},yt={class:"card shadow"},kt={class:"card_actionBlock--out"},Ct=["disabled"],It={key:1,class:"container text-center nothing"},wt=["innerHTML"],xt=$({__name:"Index",setup(b){const{t:u}=V(),c={text:u("cart.continueShopping"),bind:{to:{name:"productList"},class:["btn","btn-quaternary","btn-outline"]}},{useCartLoading:_,cartCount:i,cart:m}=U(),{checkInfoSubmitDisable:p,submitOrder:l}=L(),s=B(!0);return(e,a)=>{const g=M("router-link");return r(),d(v,null,[f(N,{loading:o(_),"onUpdate:loading":a[0]||(a[0]=y=>F(_)?_.value=y:null),"full-page":s.value,"onUpdate:fullPage":a[1]||(a[1]=y=>s.value=y)},null,8,["loading","full-page"]),o(i)?(r(),d("div",$t,[t("div",yt,[f(nt),f(bt)]),t("div",kt,[f(g,Z(tt(c.bind)),{default:I(()=>[P(n(c.text),1)]),_:1},16),t("button",{disabled:!o(p),type:"button",class:"btn btn-success",onClick:a[2]||(a[2]=y=>o(l)())},n(e.$t("cart.submitForm")),9,Ct)])])):o(i)===0&&Object.keys(o(m)).length?(r(),d("div",It,[t("div",null,n(e.$t("cart.nothingInCart")),1),f(g,{to:{name:"productList"},class:"btn btn-success btn-outline"},{default:I(()=>[t("span",{innerHTML:e.$t("cart.goShopping")},null,8,wt)]),_:1})])):k("",!0)],64)}}}),Pt={class:"orderPage"},Mt={key:0,class:"card_top"},Lt={class:"card_topMsg shadow"},Ut=["innerHTML"],Dt={class:"card_topIcon"},St={class:"animated-rubberBand"},Vt={class:"card shadow"},Bt={class:"card_title"},Ot={class:"card_table"},qt={class:"text-right"},Tt={class:"text-nowrap"},Ft={class:"text-right text-nowrap"},Nt={colspan:"2",class:"text-right text-strong"},Et={class:"card_title"},Ht={class:"card_table"},Rt={key:0},jt={class:"text-success"},zt={key:1,class:"card_actionBlock--out"},Qt=["disabled"],At=$({__name:"Order",setup(b){const u=S(),{orderData:c,payOrder:_,loading:i,payOrderBtnDisabled:m}=L(),p=w(()=>Object.keys(c.value.products).map(a=>c.value.products[a])),l=["email","name","tel","address"],s=B(!0);return(e,a)=>{const g=M("router-link"),y=M("font-awesome-icon");return r(),d("div",Pt,[o(c).is_paid?(r(),d("div",Mt,[t("div",Lt,[t("span",null,n(e.$t("cart.isPaidMsg",1)),1),f(g,{to:{name:"productList"},class:"card_topMsg_link"},{default:I(()=>[t("span",{innerHTML:e.$t("cart.isPaidMsg",2)},null,8,Ut)]),_:1})]),t("div",Dt,[t("div",St,[f(y,{icon:["fas","check"]})])])])):k("",!0),t("div",Vt,[o(i)?(r(),x(N,{key:0,loading:o(i),"onUpdate:loading":a[0]||(a[0]=h=>F(i)?i.value=h:null),light:s.value,"onUpdate:light":a[1]||(a[1]=h=>s.value=h)},null,8,["loading","light"])):(r(),d(v,{key:1},[t("div",Bt,n(e.$t("cart.orderDetail")),1),t("table",Ot,[t("thead",null,[t("tr",null,[t("th",null,n(e.$t("cart.commodityName")),1),t("th",null,n(e.$t("cart.amount")),1),t("th",qt,n(e.$t("cart.uniPrice")),1)])]),t("tbody",null,[(r(!0),d(v,null,C(p.value,h=>(r(),d("tr",{key:h.id},[t("td",null,n(h.product.title),1),t("td",Tt,n(h.qty+"/"+h.product.unit),1),t("td",Ft,n(h.product.price),1)]))),128)),t("tr",null,[t("th",null,n(e.$t("cart.total")),1),t("td",Nt,n(o(D)(o(c).total)),1)])])]),t("div",Et,n(e.$t("cart.recipientInfo")),1),t("table",Ht,[t("tbody",null,[(r(),d(v,null,C(l,(h,E)=>t("tr",{key:E},[t("th",null,n(e.$t(`form.${h}`)),1),t("td",null,n(o(c).user[h]),1)])),64)),o(c).is_paid?(r(),d("tr",Rt,[t("th",null,n(e.$t("cart.paymentStatus")),1),t("td",jt,n(e.$t("cart.isPaid")),1)])):k("",!0)])])],64))]),o(c).is_paid?k("",!0):(r(),d("div",zt,[t("button",{disabled:o(m),type:"button",class:"btn btn-success",onClick:a[2]||(a[2]=h=>o(_)(o(u).params.orderId))},n(e.$t("cart.goToPay")),9,Qt)]))])}}}),Wt=$({__name:"Cart",setup(b){const{getCart:u,cartCount:c,setCartEachQty:_,setUseCartLoading:i}=U(),{getOrder:m}=L(),p=S();return et(async()=>{p.name==="cart"?(i(!0),await u(),_(),i(!1)):p.name==="order"&&await m(p.params.orderId)}),(l,s)=>(r(),d(v,null,[o(c)||o(p).name==="order"?(r(),x(at,{key:0})):k("",!0),(r(),x(q(l.$route.name==="order"?At:xt)))],64))}});export{Wt as default};
