(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"images":[{"alt":"alt","dir":"claire1.jpg"},{"alt":"alt","dir":"claire2.jpg"},{"alt":"alt","dir":"george1.jpg"},{"alt":"alt","dir":"jason4.jpg"},{"alt":"alt","dir":"spring1.jpg"},{"alt":"alt","dir":"christine1.jpg"},{"alt":"alt","dir":"neowise.jpg"},{"alt":"alt","dir":"flower1.jpg"},{"alt":"alt","dir":"jason3.jpg"},{"alt":"alt","dir":"jason2.jpg"},{"alt":"alt","dir":"ev2.jpg"},{"alt":"alt","dir":"ev1.jpg"},{"alt":"alt","dir":"archi1.jpg"},{"alt":"alt","dir":"rohan3.jpg"},{"alt":"alt","dir":"rohan2.jpg"},{"alt":"alt","dir":"rohan1.jpg"},{"alt":"alt","dir":"an2.jpg"},{"alt":"alt","dir":"an1.jpg"},{"alt":"alt","dir":"chicken1.jpg"}]}')},29:function(e,t,i){},30:function(e,t,i){},41:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),c=i(18),s=i.n(c),r=(i(29),i(5)),o=(i(30),i(24)),l=i(3),d=i(9),j=i(12),h=j.a.timeline();function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)i=c[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)i=c[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var x=a.createElement("g",{id:"Group_1","data-name":"Group 1",transform:"translate(-152 -439)"},a.createElement("line",{id:"Line_1","data-name":"Line 1",y1:14.91,transform:"translate(184 463.788)",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5}),a.createElement("path",{id:"Path_1","data-name":"Path 1",d:"M6,9.155,10.949,5",transform:"translate(173.051 458.302)",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5}),a.createElement("path",{id:"Path_2","data-name":"Path 2",d:"M10.949,5,15.9,9.155",transform:"translate(173.051 458.302)",fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5}),a.createElement("g",{id:"Ellipse_1","data-name":"Ellipse 1",transform:"translate(152 439)",fill:"none",stroke:"rgba(0,0,0,0.2)",strokeWidth:2.5},a.createElement("circle",{cx:32,cy:32,r:32,stroke:"none"}),a.createElement("circle",{id:"circle",cx:32,cy:32,r:30.75,fill:"none"})));function p(e,t){var i=e.title,n=e.titleId,c=m(e,["title","titleId"]);return a.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,viewBox:"0 0 64 64",ref:t,"aria-labelledby":n},c),i?a.createElement("title",{id:n},i):null,x)}var u=a.forwardRef(p),O=(i.p,i(23)),y=i(0),f=Object(d.h)((function(e){var t=e.history,i=e.dimensions,n=Object(a.useState)({menuOpened:!1}),c=Object(r.a)(n,2),s=c[0],d=c[1],j=Object(a.useState)(!0),b=Object(r.a)(j,2),m=b[0],x=b[1],p=Object(a.useState)({transition:"all 200ms ease-in"}),f=Object(r.a)(p,2),g=f[0],v=f[1],w=function(){var e=document.body.scrollTop<=5;x(e);var t={visibility:e?"visible":"hidden",transition:"all 300ms ".concat(e?"ease-in":"ease-out"),transform:e?"none":"translate(0, -100%)"};JSON.stringify(t)!==JSON.stringify(g)&&v(t)};Object(a.useEffect)((function(){var e;return t.listen((function(){d({menuOpened:!1})})),!0===s.menuOpened?(e=i.width,h.to("nav",0,{css:{display:"block"}}).to("body",.01,{css:{overflow:"hidden"}}).to(".App",1,{y:e<=654?"70vh":window.innerHeight/2+100,ease:"expo.inOut"}).to(".nav-menu span",.6,{delay:-1,scaleX:0,transformOrigin:"50% 0%",ease:"expo.inOut"}).to("#Path_1",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:5}}).to("#Path_2",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:20}}).to("#Line_1",.4,{delay:-.6,css:{strokeDashoffset:40,strokeDasharray:18}}).to("#circle",.6,{delay:-.8,css:{strokeDashoffset:0},ease:"expo.inOut"}).to(".nav-menu-close",.6,{delay:-.8,css:{display:"block"}})):!1===s.menuOpened&&h.to(".App",1,{y:0,ease:"expo.inOut"}).to("#circle",.6,{delay:-.6,css:{strokeDashoffset:-193,strokeDasharray:227}}).to("#Path_1",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:10}}).to("#Path_2",.4,{delay:-.6,css:{strokeDashoffset:10,strokeDasharray:10}}).to("#Line_1",.4,{delay:-.6,css:{strokeDashoffset:40,strokeDasharray:40}}).to(".nav-menu span",.6,{delay:-.6,scaleX:1,transformOrigin:"50% 0%",ease:"expo.inOut"}).to(".nav-menu-close",0,{delay:-.1,css:{display:"none"}}).to("body",0,{css:{overflow:"auto"}}).to("nav",0,{css:{display:"none"}}),document.addEventListener("scroll",w,!0),function(){return document.removeEventListener("scroll",w)}}),[s.menuOpened]);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"header",style:Object(o.a)({},g),children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row v-center space-between",children:[Object(y.jsx)("div",{className:"logo",children:Object(y.jsx)(l.c,{to:"/",exact:!0,children:"JASON ZHANG"})}),Object(y.jsxs)("div",{className:"nav-toggle",children:[Object(y.jsxs)("div",{onClick:function(){return d({menuOpened:!0})},className:"nav-menu",children:[Object(y.jsx)("span",{}),Object(y.jsx)("span",{})]}),Object(y.jsx)("div",{onClick:function(){return d({menuOpened:!1})},className:"nav-menu-close",children:Object(y.jsx)(u,{})})]})]})})}),Object(y.jsx)(O.a,{className:"scrollTop",onClick:function(){document.querySelector("body").scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:m?"none":"flex"}})]})})),g=i(2);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)i=c[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)i=c[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var N=a.createElement("line",{x1:5,y1:12,x2:19,y2:12}),k=a.createElement("polyline",{points:"12 5 19 12 12 19"});function S(e,t){var i=e.title,n=e.titleId,c=w(e,["title","titleId"]);return a.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-arrow-right",ref:t,"aria-labelledby":n},c),i?a.createElement("title",{id:n},i):null,N,k)}var E=a.forwardRef(S),P=(i.p,function(){return Object(y.jsx)("div",{className:"intro-overlay"})}),L=j.a.timeline();var C=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1],c=function(){n(!0)};return Object(a.useEffect)((function(){null===window.sessionStorage.getItem("first")&&function(e){L.from(".line span",1.8,{y:100,ease:"power4.out",delay:1,skewY:7,stagger:{amount:.3}}).to(".intro-overlay",1.6,{height:0,ease:"expo.inOut"}).to(".intro-overlay",0,{css:{display:"none"},onComplete:e})}(c),window.sessionStorage.setItem("first",1)}),[]),Object(y.jsxs)("div",{children:[!1===i&&null===window.sessionStorage.getItem("first")?Object(y.jsx)(P,{}):"",Object(y.jsxs)(g.b.section,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.1,opacity:0},transition:{duration:.7,ease:[.43,.13,.23,.96]},className:"main",children:[Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("h2",{children:[Object(y.jsx)("div",{className:"line",children:Object(y.jsx)("span",{children:"Welcome to my portfolio!"})}),Object(y.jsx)("div",{className:"line",children:Object(y.jsx)("span",{children:"I'm Jason Zhang"})})]}),Object(y.jsx)("div",{className:"btn-row",children:Object(y.jsxs)(l.c,{to:"/about",children:["About me ",Object(y.jsx)(E,{})," "]})})]})}),Object(y.jsx)("video",{className:"background-video",loop:!0,autoPlay:!0,muted:!0,children:Object(y.jsx)("source",{src:"/videos/landing.mp4",type:"video/mp4"})})]})]})};var I=function(e){var t=e.links.map((function(e){return Object(y.jsx)("a",{href:e.link,children:e.name})}));return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"pic",children:Object(y.jsx)("img",{src:e.imgSrc,alt:"card"})}),Object(y.jsxs)("div",{className:"desc",children:[Object(y.jsx)("h2",{children:e.title}),Object(y.jsx)("p",{children:e.description}),t]})]})};var M=function(){return Object(y.jsx)("div",{className:"page",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)(g.b.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.1,opacity:0},transition:{duration:.7,ease:[.43,.13,.23,.96]},className:"projects",children:[Object(y.jsx)(I,{title:"Covid Pro-Tips",description:"Responsive, interactive, and professional website fetching and displaying live Covid-19 data along interactive maps and datatables.",imgSrc:"/images/projects/covid-pro-tips.jpg",links:[{name:"Repo",link:"https://github.com/Zjjc123/Covid-Pro-Tips"},{name:"Website",link:"https://www.webcovid-19.live"}]}),Object(y.jsx)(I,{title:"Unite NEAT",description:"Neural Evolution of Augmenting Topologies Implementation. Using Unity easy Graphical Implementations",imgSrc:"/images/projects/unite-neat.jpg",links:[{name:"Repo",link:"https://github.com/Zjjc123/UniteNEAT"}]}),Object(y.jsx)(I,{title:"Vitality",description:"Mobile Fitness App built on Android Studio that provides a variety of health-related functionalities.",imgSrc:"/images/projects/vitality.jpg",links:[{name:"Repo",link:"https://github.com/Zjjc123/Vitality"}]})]})})})};function A(e){return Object(y.jsx)("a",{href:e.url,children:Object(y.jsx)("img",{src:e.src,alt:e.src})})}var W=function(){return Object(y.jsx)("div",{className:"white-page",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"hero",children:[Object(y.jsx)(g.b.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:1,ease:[.43,.13,.23,.96]},className:"hero-images",children:Object(y.jsx)("img",{src:"images/face.jpg",alt:"face1"})}),Object(y.jsxs)(g.b.div,{className:"hero-content",children:[Object(y.jsx)(g.b.h1,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:-100,opacity:0},transition:{duration:1.3,ease:[.43,.13,.23,.96]},children:Object(y.jsx)("div",{className:"hero-content-line-inner",children:"Jason Zhang"})}),Object(y.jsx)(g.b.p,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:-100,opacity:0},transition:{delay:.3,duration:1.3,ease:[.43,.13,.23,.96]},children:"Jason Zhang is a current high school senior attending Eastlake High School. He is a software developer and an aspiring filmmaker and photographer."}),Object(y.jsx)(g.b.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.6,duration:1.3,ease:[.43,.13,.23,.96]},className:"logos",children:[{src:"images/logos/linkedin.svg",url:"https://www.linkedin.com/in/zjjc123/"},{src:"images/logos/instagram.svg",url:"https://www.instagram.com/jasonzhang02"},{src:"images/logos/youtube.svg",url:"https://www.youtube.com/channel/UC4oYKaYEiIQ_5h2i5RW8yeQ"},{src:"images/logos/twitch.svg",url:"https://www.twitch.tv/zjjc1234"}].map((function(e){return Object(y.jsx)(A,{src:e.src,url:e.url})}))})]})]})})})},D=i(21),T=i.n(D),B=i(22);var F=function(){return Object(y.jsx)("div",{className:"img-grid",children:B.images.map((function(e){return Object(y.jsx)(g.b.div,{className:"img-wrap",children:Object(y.jsx)(T.a,{children:Object(y.jsx)(g.b.img,{src:"/images/portfolio/"+e.dir,alt:e.alt,transition:{duration:1},initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0}})})},e.dir)}))})};function _(e){return Object(y.jsxs)("div",{className:"mx-20 lg:mx-64 lg:pb-24 pb-8",children:[Object(y.jsx)("h1",{className:"md:text-3xl mb-4 text-center  font-sans font-ultralight",children:e.title}),Object(y.jsx)("div",{className:"aspect-w-16 aspect-h-9",children:Object(y.jsx)("iframe",{className:"shadow-2xl rounded-lg",width:"640",height:"360",title:e.title,src:"https://youtube.com/embed/"+e.src,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}var H=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),i=t[0],n=t[1],c=Object(a.useState)(20),s=Object(r.a)(c,2),o=s[0],l=s[1],d=Object(a.useState)([0,10,20]),j=Object(r.a)(d,2),h=j[0],b=j[1],m=Object(a.useState)("#05B602"),x=Object(r.a)(m,2),p=x[0],u=x[1],O=Object(a.useState)(),f=Object(r.a)(O,2),v=f[0],w=f[1],N=Object(a.useState)(1e4),k=Object(r.a)(N,2),S=k[0],E=k[1],P=Object(a.useState)(0),L=Object(r.a)(P,2),C=L[0],I=L[1];Object(a.useEffect)((function(){var e=setInterval((function(){var e=0;e=Math.random()<.1?-1*Math.random()*50:Math.random()<.3?9*Math.random():50*Math.random(),l(i?Math.max(10,o-Math.abs(e)):Math.max(10,o+e));var t=h.concat(o);t.length>100&&(t=t.slice(1,101)),b(t),M(t)}),100);return function(){return clearInterval(e)}}),[h,o,i]);var M=function(e){for(var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e),a=window.innerHeight,n=window.innerWidth,c="",s=0;s<e.length;s++)c+=t-i<5?"".concat(Math.floor(s/e.length*n),", ").concat(a," "):"".concat(Math.floor(s/e.length*n),", ").concat(a-Math.floor((e[s]-i)/(t-i)*a)," ");w(c)};return Object(y.jsx)("div",{className:"w-full h-full bg-black",children:Object(y.jsxs)(g.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[Object(y.jsx)("svg",{height:window.innerHeight,width:window.innerWidth,children:Object(y.jsx)("polyline",{fill:"none",strokeWidth:"5",points:v,style:{stroke:p},point:!0})}),Object(y.jsx)("button",{className:"absolute mx-16 mb-64 right-0 bottom-0 h-16 w-64 h-32 bg-blue-500 hover:bg-blue-400 active:bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded focus:outline-none text-5xl",onClick:function(){S>o&&(n(!0),u("#FF073A"),E(S-o),I(C+1))},children:"BUY \ud83d\udc8e"}),Object(y.jsx)("button",{className:"absolute mx-16 mb-16 right-0 bottom-0 h-16 w-64 h-32 bg-red-500 hover:bg-red-400 active:bg-red-500 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded focus:outline-none text-4xl",onClick:function(){C>0&&(n(!1),u("#05B602"),E(S+C*o),I(0))},children:"SELL ALL \ud83e\uddfb"}),Object(y.jsx)("h1",{className:"absolute font-ticker mx-16 my-16 left-0 top-0 text-3xl text-white",children:"Stonk Price: $"+o.toFixed(2)}),Object(y.jsx)("h1",{className:"absolute font-ticker mx-16 my-24 left-0 top-0 text-3xl text-white",children:"Portfolio: $"+(S+C*o).toFixed(2)+" ($:"+(S+C*o-1e4).toFixed(2)+")"}),Object(y.jsx)("h1",{className:"absolute font-ticker mx-16 my-36 left-0 top-0 text-3xl text-white",children:"Number of Stonks: "+C})]})})};function R(e){return Object(y.jsx)("div",{className:"max-w-2xl mx-auto px-8",children:Object(y.jsxs)("div",{className:"overflow-hidden shadow-md",children:[Object(y.jsx)("div",{className:"px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase",children:e.title}),Object(y.jsx)("div",{className:"p-6 bg-white border-b border-gray-200 leading-10",children:e.text.split("\n").map((function(e,t){return Object(y.jsxs)("span",{children:[e,Object(y.jsx)("br",{})]},t)}))})]})})}var z=[{path:"/projects",name:"Projects",Component:M,exact:!0},{path:"/about",name:"About",Component:W,exact:!0},{path:"/gallery",name:"Gallery",Component:function(){return Object(y.jsx)("div",{className:"page",children:Object(y.jsx)(F,{})})},exact:!0},{path:"/portfolio",name:"Portfolio",Component:function(){return Object(y.jsx)("div",{className:"page",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(g.b.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:0,duration:1,ease:[.43,.13,.23,.96]},children:Object(y.jsx)(_,{title:"Ude Dil Levitating - UW Kahaani",src:"kxFhZwQ3eu0"})}),Object(y.jsx)(g.b.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.4,duration:1,ease:[.43,.13,.23,.96]},children:Object(y.jsx)(_,{title:"VEX Worlds Reveal - 917M",src:"lWE1iFQBnmM"})}),Object(y.jsx)(g.b.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.8,duration:1,ease:[.43,.13,.23,.96]},children:Object(y.jsx)(_,{title:"PSA 2020 ILC Winner - HOSA",src:"iL9gJoI2TR4"})})]})})},exact:!0},{path:"/pricing",name:"Pricing",Component:function(){return Object(y.jsx)("div",{className:"page",children:Object(y.jsxs)(g.b.div,{initial:{scale:1.1,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.1,opacity:0},transition:{duration:.7,ease:[.43,.13,.23,.96]},className:"container",children:[Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("h1",{children:"Payment Information"}),Object(y.jsx)("h3",{children:"Venmo: @jasonzhang02"}),Object(y.jsx)("h3",{children:"Paypal: zjjc123@hotmail.com"})]}),Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("h1",{children:"COVID-19 Precautions"}),Object(y.jsx)("h3",{children:"Social distance at ALL times (6ft+)"}),Object(y.jsx)("h3",{children:"Masks on at ALL times (except when picture is being taken)"}),Object(y.jsx)("h3",{children:"Do NOT ask to look at pictures on my camera"})]}),Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("h1",{children:"Pricing"}),Object(y.jsx)("h2",{children:"Base Package ($50)"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"30 minutes of shooting"}),Object(y.jsx)("li",{children:"1 location"}),Object(y.jsx)("li",{children:"7 edited pictures"})]}),Object(y.jsx)("h2",{children:"Standard Package ($100)"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"60 minutes of shooting"}),Object(y.jsx)("li",{children:"1 location"}),Object(y.jsx)("li",{children:"15 edited pictures"})]}),Object(y.jsx)("h2",{children:"Premium Package ($200)"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"120 minutes of shooting"}),Object(y.jsx)("li",{children:"2 location"}),Object(y.jsx)("li",{children:"30 edited pictures"})]}),Object(y.jsx)("h2",{children:"Flat Rate ($100/hr)"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:"Any events"}),Object(y.jsx)("li",{children:"Number of pictures vary"})]})]})]})})},exact:!0},{path:"/code-bytes",name:"Code Bytes",Component:function(){var e=Object(d.g)();return Object(y.jsx)("div",{children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{path:"".concat(e.url,"/investing-trauma"),component:H}),Object(y.jsx)(d.a,{path:e.url,children:Object(y.jsx)("div",{className:"page",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsx)(g.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(y.jsx)("h1",{className:"text-5xl self-center align-middle text-center",children:"Under Construction"})})})})})]})})},exact:!1},{path:"/poems",name:"Poems",Component:function(){return Object(y.jsx)("div",{className:"page",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsx)(g.b.div,{initial:{x:"-100%",opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:1,ease:[.43,.13,.23,.96]},className:"space-y-10",children:Object(y.jsx)(R,{title:"Motivation",text:"Countless desires.\nDown goes the sun and up comes the night,\n  smothering the fires\nwithin me. Ambition fades, another day, another fight."})})})})},exact:!0},{path:"/",name:"Landing",Component:C,exact:!0},{path:"/",name:"404",Component:function(){return Object(y.jsx)("div",{className:"page",children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:0,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4 ",children:["You are lost, with no exit in sight",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.03,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4 ",children:["Maybe I'm lost too.",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.06,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4 ",children:["But there is hope. There always is.",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.01,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4 ",children:["For it will carry us through.",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.015,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4 ",children:[Object(y.jsx)("br",{}),"To borrow lines from the poet W. H. Auden",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.2,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4 ",children:[Object(y.jsx)("br",{}),'"May I, composed like them ',Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.4,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4",children:["Of Eros and of dust, ",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.6,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4",children:["Beleaguered by the same ",Object(y.jsx)("br",{})]}),Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:.8,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4",children:["Negation and despair, ",Object(y.jsx)("br",{})]}),Object(y.jsx)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:1,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-xl text-center mb-4",children:'Show an affirming flame."'}),Object(y.jsx)(l.b,{to:"/",children:Object(y.jsxs)(g.b.h1,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:-50,opacity:0},transition:{delay:2,duration:1.3,ease:[.43,.13,.23,.96]},className:"text-3xl text-center mb-4",children:[Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),"Continue Forward..."]})})]})})},exact:!1}],J=function(){var e=Object(d.f)();return Object(y.jsx)(g.a,{exitBeforeEnter:!0,children:Object(y.jsx)(d.c,{location:e,children:z.map((function(e){var t=e.path,i=e.Component,a=e.exact;return Object(y.jsx)(d.a,{path:t,component:i,exact:a},t)}))},e.pathname)})},U=function(){return Object(y.jsx)("nav",{children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"nav-columns",children:[Object(y.jsx)("div",{className:"nav-column",children:Object(y.jsxs)("ul",{className:"nav-links",children:[Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/",exact:!0,children:"Home"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/projects",exact:!0,children:"Projects"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/portfolio",exact:!0,children:"Portfolio"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/about",exact:!0,children:"About"})})]})}),Object(y.jsx)("div",{className:"nav-column",children:Object(y.jsxs)("div",{className:"nav-infos",children:[Object(y.jsxs)("ul",{className:"nav-info",children:[Object(y.jsx)("li",{className:"nav-info-label",children:"Contact"}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"mailto:me@jasonzhang.dev",children:"Get in touch"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/Pricing",exact:!0,children:"Pricing"})})]}),Object(y.jsxs)("ul",{className:"nav-info",children:[Object(y.jsx)("li",{className:"nav-info-label",children:"Links"}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"https://www.youtube.com/channel/UC4oYKaYEiIQ_5h2i5RW8yeQ",children:"YouTube"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"https://www.instagram.com/jasonzhang02/",children:"Instagram"})}),Object(y.jsx)("li",{children:Object(y.jsx)("a",{href:"https://www.linkedin.com/in/zjjc123/",children:"LinkedIn"})})]}),Object(y.jsxs)("ul",{className:"nav-info",children:[Object(y.jsx)("li",{className:"nav-info-label",children:"Others"}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/gallery",exact:!0,children:"Gallery"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/code-bytes",exact:!0,children:"Code Bytes"})}),Object(y.jsx)("li",{children:Object(y.jsx)(l.c,{to:"/poems",exact:!0,children:"Poems"})})]}),Object(y.jsxs)("ul",{className:"nav-info",children:[Object(y.jsx)("li",{className:"nav-info-label",children:"Location"}),Object(y.jsx)("li",{children:"Sammamish, Washington"})]})]})})]})})})};var Y=function(){var e=Object(a.useState)({height:window.innerHeight,width:window.innerWidth}),t=Object(r.a)(e,2),i=t[0],n=t[1];return Object(a.useEffect)((function(){var e=.01*i.height;document.documentElement.style.setProperty("--vh","".concat(e,"px"));var t=function(e,t){var i,a=arguments,n=this;return function(){clearTimeout(i),i=setTimeout((function(){i=null,e.apply(n,a)}))}}((function(){n({height:window.innerHeight,width:window.innerWidth})}),1e3);return window.addEventListener("resize",t),j.a.to("body",0,{css:{visibility:"visible"}}),function(){window.removeEventListener("resize",t)}})),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f,{dimensions:i}),Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(J,{})}),Object(y.jsx)(U,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(l.a,{basename:"",children:Object(y.jsx)(Y,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ae21ed1d.chunk.js.map