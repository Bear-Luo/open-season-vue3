import{_ as W,u as R}from"./index-CC5q_NNq.js";import{S as E,C as I}from"./vue3-carousel-Clp6MlJU.js";import{d as f,J as D,b as m,e as v,B as l,K as g,F as L,f as S,a as x,h as e,n as O,O as b,_ as M,Q as P,r as p,c as h,k as Q,L as j,M as $}from"./@vee-validate-CkcyWT5K.js";import{_ as A}from"./Dialog.vue_vue_type_style_index_0_lang-B8Y1yJsR.js";import{W as H}from"./vue-waterfall-plugin-next-DnxI4ThN.js";const J={class:"carousel_container"},V={class:"homeInfo_over_carousel"},z=e("img",{src:W},null,-1),X=["innerHTML"],F=f({__name:"Carousel",setup(u){const s=["https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1912&q=80","https://images.unsplash.com/photo-1497581175344-8a5f1a0142a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80","https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2050&q=80"];return(n,c)=>{const _=D("router-link");return m(),v("div",J,[l(x(I),{autoplay:4e3,"wrap-around":!0},{default:g(()=>[(m(),v(L,null,S(s,(i,o)=>l(x(E),{key:o},{default:g(()=>[e("div",{style:O(`background-image: url(${i})`),class:"carousel_item"},null,4)]),_:2},1024)),64))]),_:1}),e("div",V,[z,l(_,{to:"/product-list"},{default:g(()=>[e("div",{innerHTML:n.$t("home.goShopping")},null,8,X)]),_:1})])])}}}),G={id:"about",class:"container about_block"},K=e("div",{class:"about_img"},null,-1),Z={class:"about_info"},Y={class:"about_title"},ee=["innerHTML"],te=f({__name:"About",setup(u){const{t:s}=R(),n=[{name:"address",icon:["fas","location-dot"],text:s("home.aboutAddress")},{name:"tel",icon:["fas","phone"],text:s("home.aboutTel")},{name:"time",icon:["fas","clock"],text:s("home.aboutTime")}];return(c,_)=>{const i=D("font-awesome-icon");return m(),v("div",G,[K,e("div",Z,[e("div",Y,b(c.$t("home.about")),1),e("div",{innerHTML:c.$t("home.aboutText")},null,8,ee),e("ul",null,[(m(),v(L,null,S(n,(o,d)=>e("li",{key:d},[l(i,{icon:o.icon},null,8,["icon"]),e("span",null,b(o.text),1)])),64))])])])}}}),se=""+new URL("01-Dn36S6ET.jpg",import.meta.url).href,ne=""+new URL("02-CUPZEbXG.jpg",import.meta.url).href,ie=""+new URL("03-C7cer-vM.jpg",import.meta.url).href,oe=""+new URL("04-aQapPyW5.jpg",import.meta.url).href,ae=""+new URL("05-Czuq-XsB.jpg",import.meta.url).href,le=""+new URL("06-f4cd32WK.jpg",import.meta.url).href,re=""+new URL("07-BGnzULS-.jpg",import.meta.url).href,ce=""+new URL("08-Bagw_eLI.jpg",import.meta.url).href,ue=""+new URL("09-Cf5mc9X5.jpg",import.meta.url).href,_e=""+new URL("10-D2fmRpPp.jpg",import.meta.url).href,me={class:"badge-primary"},de={class:"dialog_content"},pe=["src"],ge=f({__name:"NewsDialog",props:{news:{required:!0,type:Object,default:{number:"",id:"",date:"",title:"",content:""}},newsModifiers:{},visible:{required:!0,type:Boolean,default:!1},visibleModifiers:{},img:{required:!0,type:String,default:""},imgModifiers:{}},emits:["update:news","update:visible","update:img"],setup(u){const s=M(u,"news"),n=M(u,"visible"),c=M(u,"img");return(_,i)=>(m(),P(A,{visible:n.value,"onUpdate:visible":i[0]||(i[0]=o=>n.value=o),title:s.value.title,"onUpdate:title":i[1]||(i[1]=o=>s.value.title=o)},{default:g(()=>[e("div",me,b(s.value.date),1),e("div",de,b(s.value.content),1),e("img",{src:c.value},null,8,pe)]),_:1},8,["visible","title"]))}}),U=[{number:"9",id:"010",date:"2020/06/17",title:"公告：我們放假囉！",content:"你上一次好好休息是什麼時候呢？角獵明天開始要好好放個四天連假！6/18-6/21四天我們好好休息去囉～6/22（一）我們會帶著充飽電的自己！回來繼續為大家服務！",src:"/src/assets/images/10.jpg"},{number:"8",id:"009",date:"2020/06/03",title:"角獵最美的角落：）",content:"這幾天來角獵的朋友們有沒有發現我們偷偷換了孩子們的創作呢？孩子們用指印跟蠟筆率真的創作，一定會是角獵最美的角落：）歡迎大家來吃飯～跟孩子們童真率真的筆觸相見歡喔：）",src:"/src/assets/images/09.jpg"},{number:"7",id:"008",date:"2020/04/13",title:"歡迎來參加角獵首場分享會——與你想像中有所不同的菲律賓",content:"角獵要舉辦今年首場分享會囉！近期因為疫情的關係，大夥應該都不太敢出門吧？出國旅遊在現在根本就是奢望了啊！！角獵聽到大家的心聲（其實也是我們內心的渴望😊）經過時間的籌備，邀請到台東大學教育系莊教授帶著研究生Amber，來到角獵分享她們與菲律賓的緣分！",src:"/src/assets/images/08.jpg"},{number:"6",id:"007",date:"2020/03/16",title:"新產品桑葚冰沙開賣囉！",content:"最近天氣開始漸漸熱了呢！想不想來一杯酸酸甜甜的桑葚冰沙呢？桑椹被譽為21世紀最佳保健水果營養非常豐富，尤其富含花青素、維生素A、β蘿蔔素、菸鹼酸等植化素，抗氧化力很強，具有提升人體免疫力、防癌、抗衰老、抗發炎、防止記憶力退化、增加血管彈性、美容養顏、預防泌尿道感染、護眼等功效。這麼棒的冰沙趕快來一杯吧！",src:"/src/assets/images/07.jpg"},{number:"5",id:"006",date:"2020/02/27",title:"分享店休時的角獵",content:"今天店裡休息，小編為自己泡了一杯可愛的咖啡，因為太可愛了所以貼上來給大家看看～接下來的228連假大家想去哪呢？歡迎來找我們玩喔！",src:"/src/assets/images/06.jpg"},{number:"4",id:"005",date:"2020/02/03",title:"麵包有新產品了！大家快來收集各種口味！",content:"今天店裡充滿香香的麵包味～新鮮出爐麵包產品來囉！常客一看到就包了12個回家吃，大家如果喜歡我們的麵包也可以私訊粉專或來電預約哦～",src:"/src/assets/images/05.jpg"},{number:"3",id:"004",date:"2020/01/15",title:"香噴噴的吐司加碼出爐了！",content:"這幾天吐司系列的餐點總是賣到缺貨，為了避免大家撲空，這周末會多烤一些歡迎大家來吃喔！",src:"/src/assets/images/04.jpg"},{number:"2",id:"003",date:"2020/01/07",title:"早餐新選擇！活力水果優格開賣囉！",content:"平常總是吃著油油膩膩的早餐嗎？偶爾可以換換口味也清清腸胃喔：）來角獵咖啡吃吃優格吧～",src:"/src/assets/images/03.jpg"},{number:"1",id:"002",date:"2019/12/20",title:"最近天氣好好喔！沙坑重新開放囉！",content:"童年就是要一起玩玩沙！爸爸媽媽快點帶小朋友們來角獵吃點心玩耍吧！",src:"/src/assets/images/02.jpg"},{number:"0",id:"001",date:"2019/12/01",title:"今年冬天，讓我們與角獵咖啡寫下新的篇章",content:"今天打開粉絲專頁，突然感性了起來，看著一步一腳印累積的按讚人數來到1999，真心感謝大家的支持！為了回饋大家，近期將開發新菜單，未來提供大家最美味新鮮的餐點！",src:"/src/assets/images/01.jpg"}],ve={id:"news",class:"news_block"},be={class:"container"},fe=["onClick"],we={class:"news_title"},he={class:"img_wrap"},je=["src"],$e=["onClick"],xe={class:"news_title"},Le={class:"img_wrap"},ke=["src"],ye={class:"news_pagination"},Me=["innerHTML"],Ue=["innerHTML"],Ce=7,Te=f({__name:"News",setup(u){const{t:s}=R(),n=p(1),c=h(()=>[U.slice(0,7),U.slice(7,10)]),_=h(()=>Math.ceil(U.length/Ce)),i=h(()=>({prev:{text:s("home.prev"),visible:_.value!==1&&n.value>1},next:{text:s("home.next"),visible:_.value!==1&&n.value!==_.value}})),o=p(["01","02","03","04","05","06","07","08","09","10"]),d=h(()=>o.value.map(r=>new URL(Object.assign({"/src/assets/images/news/01.jpg":se,"/src/assets/images/news/02.jpg":ne,"/src/assets/images/news/03.jpg":ie,"/src/assets/images/news/04.jpg":oe,"/src/assets/images/news/05.jpg":ae,"/src/assets/images/news/06.jpg":le,"/src/assets/images/news/07.jpg":re,"/src/assets/images/news/08.jpg":ce,"/src/assets/images/news/09.jpg":ue,"/src/assets/images/news/10.jpg":_e})[`/src/assets/images/news/${r}.jpg`],import.meta.url).href)),C=r=>{n.value=n.value+r},k=p(!1),y=p({}),w=p(""),q=r=>{k.value=r},T=r=>{y.value=r,q(!0),w.value=d.value[Number(r.number)]},B=p();return Q(()=>{setTimeout(()=>{B.value.renderer()},500)}),(r,a)=>(m(),v(L,null,[e("div",ve,[e("div",be,[j(l(x(H),{list:c.value[0],gutter:20,ref_key:"waterfall",ref:B},{item:g(({item:t})=>[e("div",{class:"waterfall_card",onClick:N=>{T(t),w.value=d.value[t.number]}},[e("div",we,b(t.title),1),e("div",he,[e("img",{src:d.value[t.number]},null,8,je)])],8,fe)]),_:1},8,["list"]),[[$,n.value===1]]),j(l(x(H),{list:c.value[1],gutter:20},{item:g(({item:t})=>[e("div",{class:"waterfall_card",onClick:N=>{T(t)}},[e("div",xe,b(t.title),1),e("div",Le,[e("img",{src:d.value[t.number]},null,8,ke)])],8,$e)]),_:1},8,["list"]),[[$,n.value===2]]),e("div",ye,[j(e("button",{innerHTML:i.value.prev.text,type:"button",onClick:a[0]||(a[0]=t=>C(-1))},null,8,Me),[[$,i.value.prev.visible]]),j(e("button",{innerHTML:i.value.next.text,type:"button",onClick:a[1]||(a[1]=t=>C(1))},null,8,Ue),[[$,i.value.next.visible]])])])]),l(ge,{visible:k.value,"onUpdate:visible":a[2]||(a[2]=t=>k.value=t),news:y.value,"onUpdate:news":a[3]||(a[3]=t=>y.value=t),img:w.value,"onUpdate:img":a[4]||(a[4]=t=>w.value=t)},null,8,["visible","news","img"])],64))}}),qe=f({__name:"Home",setup(u){return(s,n)=>(m(),v(L,null,[l(F),l(te),l(Te)],64))}});export{qe as default};
