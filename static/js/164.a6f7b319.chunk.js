(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[164],{2561:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(885),s=n(7313),a=n(3040),i=n(6666),r=n.n(i),c=function(e){var t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds())-288e5},l=function(){r()(document).ready((function(){console.log("ready");var e=c("2022-10-29T17:02:00.000Z"),t=c("2022-12-03T17:00:00.000Z"),n=function(){var e=new Date;return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())-288e5}();n>e&&n<t?(r()(".announcement-bar__timer").removeClass("d-none").addClass("d-block"),function(e){var t,n=new Date(c(e)),o=6e4,s=36e5,a=24*s;t=setInterval((function(){var e=new Date,i=n-e;if(i<0)return clearInterval(t),void r()(".announcement-bar__timer").addClass("d-none");var c=Math.floor(i/a),l=Math.floor(i%a/s),d=Math.floor(i%s/o),u=Math.floor(i%o/1e3);c>0?r()("#timerDays").html("".concat(c," <span>").concat(c>1?"Days":"Day","</span>")):r()("#timerDays").addClass("d-none"),r()("#timerHrs").html("".concat(String(l).padStart(2,"0")," <span>").concat(l>1?"Hours":"Hour","</span>")),r()("#timerMin").html("".concat(String(d).padStart(2,"0")," <span>Minutes</span>")),r()("#timerSec").html("".concat(String(u).padStart(2,"0")," <span>Seconds</span>")),r()(".announcement-bar__timer").find("ul").removeClass("d-none").addClass("d-inline")}),1e3)}("2022-12-03T17:00:00.000Z")):(console.log("expired"),r()(".announcement-bar__timer").addClass("d-none"))}))},d=n(3324),u=n(6417),p={us:{id:"137103",code:"1",letter:"US"},ca:{id:"137104",code:"1",letter:"CA"},au:{id:"137109",code:"61",letter:"AU"},uk:{id:"137106",code:"44",letter:"UK"},my:{id:"137115",code:"60",letter:"MY"},int:{id:"137108",code:"65",letter:"INT"},eu:{id:"137107",code:"49",letter:"FR"},de:{id:"137112",code:"33",letter:"DE"},fr:{id:"137114",code:"49",letter:"FR"}},h=function(){var e=new URL(document.location).searchParams.get("utm_store")||"us",t=-1!==["us","ca","au","uk","int","my","eu","de","fr"].indexOf(e)?e:"us",n=a.Z[t];console.log("store active:",t);var i=(0,s.useState)(""),c=(0,o.Z)(i,2),h=c[0],m=c[1],g=(0,s.useState)(null),v=(0,o.Z)(g,2),f=v[0],y=v[1],w=(0,s.useState)(p[t].letter),x=(0,o.Z)(w,2),b=x[0],j=x[1],_=(0,s.useState)(p[t].code),S=(0,o.Z)(_,2),k=S[0],C=S[1],P=(0,s.useState)(p[t].id),T=(0,o.Z)(P,2),E=T[0],M=(T[1],(0,s.useState)(!1)),U=(0,o.Z)(M,2),z=U[0],H=U[1],D=(0,s.useState)(!1),I=(0,o.Z)(D,2),N=I[0],Z=I[1],A=(0,s.useState)(""),L=(0,o.Z)(A,2),B=L[0],F=L[1],q=(0,s.useState)(!1),R=(0,o.Z)(q,2),O=R[0],G=R[1],K=(0,s.useState)(!1),Q=(0,o.Z)(K,2),V=Q[0],Y=Q[1],W=function(e){C(e.target.dataset.code),j(e.target.value)};return l(),r().get("https://api.cocoandeve.com/geo",(function(e){F(e.country_name)})),(0,u.jsxs)("div",{className:"sweepstakes",children:[(0,u.jsx)("div",{class:"announcement-bar announcement-bar__timer w-100 py-1",children:(0,u.jsx)("a",{href:"https://www.cocoandeve.com/collections/all",class:"text-decoration-none",children:(0,u.jsxs)("div",{class:"container text-center text-white d-flex align-items-center justify-content-between justify-content-lg-center",children:[(0,u.jsx)("span",{class:"announcement-bar__timer__title d-block d-lg-inline me-lg-4 h2 mb-0 font-weight-normal",children:"PRE REGISTRATION ENDS IN:"}),(0,u.jsxs)("ul",{class:"list-inline mb-0 font-weight-bold d-none",children:[(0,u.jsx)("li",{id:"timerDays",class:"list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"}),(0,u.jsx)("li",{id:"timerHrs",class:"list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"}),(0,u.jsx)("li",{id:"timerMin",class:"list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"}),(0,u.jsx)("li",{id:"timerSec",class:"list-inline-item position-relative me-0 h2 mb-0 font-weight-normal"})]})]})})}),(0,u.jsx)("div",{className:"sweepstakes__wrapper d-flex align-items-center",children:(0,u.jsx)("div",{id:"waitlist-page",class:"container px-0","data-page-type":"Sweepstakes","data-form-id":"#sweepstakes__form","data-email-form":"#sweepstakes__email",children:(0,u.jsx)("div",{class:"row m-0 align-items-center justify-content-end",children:(0,u.jsxs)("div",{class:"px-g col-lg-5 order-lg-1 my-lg-4 mt-n5",children:[V||O?(0,u.jsxs)("div",{class:"sweepstakes__thank-you px-4 py-3 bg-white text-center rounded",children:[(0,u.jsx)("h2",{class:"h1 text-secondary",children:n.sweepstakes.ty_heading}),(0,u.jsx)("p",{children:n.sweepstakes.ty_subHeading}),(0,u.jsx)("a",{href:"/",class:"btn btn-lg btn-primary btn-block",children:"Shop Coco & Eve"})]}):(0,u.jsxs)("form",{id:"sweepstakes__form",class:"sweepstakes__form px-4 py-3 bg-white text-center rounded",onSubmit:function(e){e.preventDefault();(z||N)&&(z&&(0,d.jm)(h,f,B,"blackfriday").done((function(e){console.log("email/phone submitted",e),Y(!0)})),N&&(0,d._y)(f,E,b).done((function(e){console.log("phone submitted",e),G(!0)})))},children:[(0,u.jsx)("h1",{class:"text-secondary",children:n.sweepstakes.heading}),(0,u.jsx)("p",{children:n.sweepstakes.subHeading}),(0,u.jsx)("input",{type:"email",className:"form-control bg-light-gray border-0",placeholder:n.sweepstakes.emailPh,onChange:function(e){H((0,d.oH)(e.target.value)),m(e.target.value)}}),(0,u.jsx)("div",{class:"mt-1 input-group form-group font-size-sm justify-content-center mb-1",children:"- or -"}),(0,u.jsxs)("div",{class:"input-group form-group mb-2",children:["us"===t&&(0,u.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,u.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",k," ",(0,u.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,u.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,u.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:W,children:[(0,u.jsx)("option",{value:"",disabled:"",children:"Select Country"}),(0,u.jsx)("option",{value:"US","data-code":"1",selected:"us"===b,children:"United States"})]})]}),"ca"===t&&(0,u.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,u.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",k," ",(0,u.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,u.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,u.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:W,children:[(0,u.jsx)("option",{value:"",disabled:"",children:"Select Country"}),(0,u.jsx)("option",{value:"CA","data-code":"1",children:"Canada"})]})]}),("de"===t||"fr"===t||"eu"===t)&&(0,u.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,u.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",k," ",(0,u.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,u.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,u.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:W,children:[(0,u.jsx)("option",{value:"AT","data-code":"43",children:"Austria"}),(0,u.jsx)("option",{value:"BE","data-code":"32",children:"Belgium"}),(0,u.jsx)("option",{value:"BG","data-code":"359",children:"Bulgaria"}),(0,u.jsx)("option",{value:"HR","data-code":"385",children:"Croatia"}),(0,u.jsx)("option",{value:"CZ","data-code":"420",children:"Czechia"}),(0,u.jsx)("option",{value:"DK","data-code":"45",children:"Denmark"}),(0,u.jsx)("option",{value:"EE","data-code":"372",children:"Estonia"}),(0,u.jsx)("option",{value:"FI","data-code":"358",children:"Finland"}),(0,u.jsx)("option",{value:"FR","data-code":"33",selected:"fr"===t||"eu"===t,children:"France"}),(0,u.jsx)("option",{value:"DE","data-code":"49",selected:"de"===t,children:"Germany"}),(0,u.jsx)("option",{value:"GR","data-code":"30",children:"Greece"}),(0,u.jsx)("option",{value:"HU","data-code":"36",children:"Hungary"}),(0,u.jsx)("option",{value:"IE","data-code":"353",children:"Ireland"}),(0,u.jsx)("option",{value:"IT","data-code":"39",children:"Italy"}),(0,u.jsx)("option",{value:"LV","data-code":"371",children:"Latvia"}),(0,u.jsx)("option",{value:"LU","data-code":"352",children:"Luxembourg"}),(0,u.jsx)("option",{value:"MT","data-code":"356",children:"Malta"}),(0,u.jsx)("option",{value:"MC","data-code":"377",children:"Monaco"}),(0,u.jsx)("option",{value:"NL","data-code":"31",children:"Netherlands"}),(0,u.jsx)("option",{value:"PL","data-code":"48",children:"Poland"}),(0,u.jsx)("option",{value:"PT","data-code":"351",children:"Portugal"}),(0,u.jsx)("option",{value:"SK","data-code":"421",children:"Slovakia"}),(0,u.jsx)("option",{value:"SI","data-code":"386",children:"Slovenia"}),(0,u.jsx)("option",{value:"ES","data-code":"34",children:"Spain"}),(0,u.jsx)("option",{value:"SE","data-code":"46",children:"Sweden"})]})]}),"au"===t&&(0,u.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,u.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",k," ",(0,u.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,u.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,u.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:W,children:[(0,u.jsx)("option",{value:"AU","data-code":"61",selected:!0,children:"Australia"}),(0,u.jsx)("option",{value:"NZ","data-code":"64",children:"New Zealand"})]})]}),"uk"===t&&(0,u.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,u.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",k," ",(0,u.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,u.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,u.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:W,children:[(0,u.jsx)("option",{value:"NO","data-code":"47",children:"Norway"}),(0,u.jsx)("option",{value:"CH","data-code":"41",children:"Switzerland"}),(0,u.jsx)("option",{value:"AE","data-code":"971",children:"United Arab Emirates\xa0\xa0"}),(0,u.jsx)("option",{value:"GB","data-code":"44",selected:!0,children:"United Kingdom"})]})]}),("int"===t||"my"===t)&&(0,u.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,u.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",k," ",(0,u.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,u.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,u.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:W,children:[(0,u.jsx)("option",{value:"HK","data-code":"852",children:"Hong Kong SAR\xa0\xa0"}),(0,u.jsx)("option",{value:"MO","data-code":"853",children:"Macao SAR"}),(0,u.jsx)("option",{value:"MY","data-code":"60",selected:"my"===t,children:"Malaysia"}),(0,u.jsx)("option",{value:"PH","data-code":"63",children:"Philippines"}),(0,u.jsx)("option",{value:"SG","data-code":"65",selected:"int"===t,children:"Singapore"})]})]}),(0,u.jsx)("input",{id:"sweepstakes__phone",class:"sweepstakes__phone form-control bg-light-gray border-0",type:"phone",placeholder:n.sweepstakes.phonePh,onChange:function(e){y(e.target.value),Z(!0),console.log("phonecode",e.target.value)}}),(0,u.jsx)("div",{class:"d-none input-error phone-error font-size-xs text-primary mb-2",children:"Please enter a valid phone number"})]}),(0,u.jsx)("div",{class:"d-none input-error toc-error font-size-xs text-primary mb-2",children:"You have not agreed to the Privacy Policy & ToS"}),(0,u.jsx)("p",{class:"font-size-xs",dangerouslySetInnerHTML:{__html:n.sweepstakes.toc}}),(0,u.jsx)("div",{class:"form-group",children:(0,u.jsx)("button",{id:"sweepstakes__submit",type:"submit",class:"btn btn-lg btn-primary btn-block",children:n.sweepstakes.submit})})]}),(0,u.jsx)("p",{class:"font-size-xs text-gray-600 my-2 mb-lg-0 text-white",dangerouslySetInnerHTML:{__html:n.sweepstakes.ty_note}})]})})})})]})}},3324:function(e,t,n){"use strict";n.d(t,{_y:function(){return f},d8:function(){return h},ej:function(){return m},iP:function(){return g},jm:function(){return v},oH:function(){return p}});var o=n(885),s=n(7313),a=n(2984),i=n.n(a),r=n(6666),c=n.n(r),l="2ab3fc92f6f75b39f96d2964d5ba92da",d="I8zyA4lVhMCaJ5Kg",u=function(e){var t={},n=i().AES.encrypt(e,i().enc.Utf8.parse(l),{iv:i().enc.Utf8.parse(d),mode:i().mode.CBC,padding:i().pad.Pkcs7});return t.data=n.ciphertext.toString(i().enc.Base64),t.data},p=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",s=arguments.length>4?arguments[4]:void 0,a="";if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),a="; expires=".concat(i.toUTCString())}document.cookie="".concat(e,"=").concat(t||"").concat(a,"; path=").concat(o).concat(s?";domain=".concat(s):"")},m=function(e){for(var t="".concat(e,"="),n=document.cookie.split(";"),o=0;o<n.length;o+=1){for(var s=n[o];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(t))return s.substring(t.length,s.length)}return null},g=function(){var e=(0,s.useState)([0,0]),t=(0,o.Z)(e,2),n=t[0],a=t[1];return(0,s.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"registration",s=new Date,a=s.getTime(),i="{email:'".concat(e,"',time:").concat(a,"}"),r=u(i),l={email:e,country:n,brand:"cocoandeve",domain:window.location.hostname,phone:t||"",reg_source:o,signature:r};return c().post("https://api.cocoandeve.com/bluecore/registrations.json",l)},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=n,s=JSON.stringify({country:o,phone:e,email:"",form_id:t});return c().ajax({url:"https://api.smsbump.com/v2/formsPublic/subscribe",method:"POST",cache:!1,data:s,contentType:"application/json; charset=utf-8",headers:{"X-SMSBump-Platform":"shopify"},success:function(e){e.message?console.log(e.message):console.log("smsbumperror")}})}},3040:function(e,t){"use strict";t.Z={en:{heading:"Find your perfect tan \nin 90 seconds!",subheading:"Take the Tan matching quiz to find your perfect shade of gorgeous glow. It only takes 90 seconds to find your true colour match.",caption:"Your perfect shade is just a few clicks away",btn:{start:"Take the Quiz",next:"Next",prev:"Previous Question",result:"See results!",skip:"Skip this step",view:"View my results"},loading:"Analysing your answers",formEmail:{title:"We found your perfect match!",caption:"Enter your email to view your results!<br/>Plus, get a promo code for <strong>10% OFF</strong> your first purchase.",email:"Email",button:"Submit",term:'I agree to <a target="_blank" href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a> & <a target="_blank" href="https://www.cocoandeve.com/pages/terms-and-conditions">ToS</a>',condition:"By signing up, you agree to receive exclusive offers via email.\nSign up not required for purchase. Opt out any time."},result:{title:"Thanks! Here is your promo code:",code:"QUIZ10",note:"Promo code applies only for first purchases."}},fr:{heading:"Trouvez votre teinte d'autobronzant parfaite \nen 90 secondes !",subheading:"Faites le quiz de compatibilit\xe9 d'autobronzant pour trouver la teinte qui vous correspond le mieux. 90 secondes suffisent pour trouver la nuance parfaite.",caption:"Votre teinte parfaite n'est plus qu'\xe0 quelques clics.",btn:{start:"Faire le quiz",next:"Suivant",prev:"Question pr\xe9c\xe9dente",result:"Voir les r\xe9sultats !",skip:"Skip this step",view:"View my results"},loading:"Analyse de vos r\xe9ponses",formEmail:{title:"We found your perfect match!",caption:"Enter your email to view your results!<br/>Plus, get a promo code for <strong>10% OFF</strong> your first purchase.",email:"Email",button:"Submit",term:'I agree to <a target="_blank" href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a> & <a target="_blank" href="https://www.cocoandeve.com/pages/terms-and-conditions">ToS</a>',condition:"By signing up, you agree to receive exclusive offers via email.\nSign up not required for purchase. Opt out any time."},result:{title:"Thanks!\nHere is your promo code:",code:"QUIZ10",note:"Promo code applies only for first purchases."},sweepstakes:{heading:"Acc\xe8de en avant-premi\xe8re aux plus grosses promotions de l\u2019ann\xe9e !",subHeading:"Pr\xe9inscris-toi maintenant, et obtiens en plus une chance de gagner 1000$ de service de soins capillaires et ta wishlist Coco & Eve",emailPh:"Email",phonePh:"Phone number",toc:"En t'inscrivant, tu acceptes de recevoir des offres exclusives par e-mail/SMS. Pour plus d'informations, consulte notre <a href='/pages/privacy-policy-new'>Politique de confidentialit\xe9</a>.",ty_heading:"Tu es inscrit !",ty_subHeading:"Reste \xe0 l'\xe9coute pour recevoir ton code en avant-premi\xe8re le 14 novembre, et pour savoir si tu as gagn\xe9 par e-mail ou sms",ty_note:" *Les clients qui s'inscrivent \xe0 notre pr\xe9vente par SMS ou par e-mail auront la possibilit\xe9 de gagner des produits d'une valeur de 500 USD ainsi que des services de salon d'une valeur de 1000 USD. Les gagnants du concours seront inform\xe9s par SMS ou par e-mail. L'inscription \xe0 la pr\xe9vente et le concours se d\xe9rouleront jusqu'au 13 novembre 2022 \xe0 21h00 EST. Les prix ne peuvent \xeatre utilis\xe9s conjointement avec un autre code, une autre offre ou une autre promotion. Coco & Eve se r\xe9serve le droit d'annuler ou de modifier toute promotion sans pr\xe9avis. En cas de litige, la d\xe9cision de Coco & Eve est d\xe9finitive. Aucun achat n'est n\xe9cessaire pour participer ou gagner. Chaque participant n'a droit qu'\xe0 une seule participation.",submit:"Inscris-toi maintenant !"}},de:{heading:"Finde deine perfekte Br\xe4une \nin 90 Sekunden!",subheading:"Nimm am Selbstbr\xe4uner-Quiz teil, um deine perfekte Br\xe4unungs-Nuance f\xfcr einen wundersch\xf6nen Glow zu finden. Es dauert nur 90 Sekunden, um deine wahre Farb\xfcbereinstimmung zu finden.",caption:"Deine perfekte Nuance ist nur ein paar Klicks entfernt",btn:{start:"Nimm an unserem Quiz teil",next:"Weiter",prev:"Vorherige Frage",result:"Siehe Ergebnisse!",skip:"Skip this step",view:"View my results"},loading:"Analyse deiner Antworten",formEmail:{title:"We found your perfect match!",caption:"Enter your email to view your results!<br/>Plus, get a promo code for <strong>10% OFF</strong> your first purchase.",email:"Email",button:"Submit",term:'I agree to <a target="_blank" href="https://www.cocoandeve.com/pages/privacy-policy">Privacy Policy</a> & <a target="_blank" href="https://www.cocoandeve.com/pages/terms-and-conditions">ToS</a>',condition:"By signing up, you agree to receive exclusive offers via email.\nSign up not required for purchase. Opt out any time."},result:{title:"Thanks! Here is your promo code:",code:"QUIZ10",note:"Promo code applies only for first purchases."}},ca:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Register to be part of our pre-sale and get early access to our Black Friday deals! ",emailPh:"Email",phonePh:"Phone number",toc:'By signing up you agree to receive exclusive offers via email/SMS, for more information see our <a href="/pages/privacy-policy-new">Privacy Policy</a>',ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14!",ty_note:"*Pre sale registration will run until November 13, 2022 21:00 EST. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win."}},us:{sweepstakes:{heading:"Get early access to the biggest sale of the year!",subHeading:"Pre-register now, plus stand a chance to win $1000 of salon services and your Coco & Eve wishlist!",emailPh:"Email",phonePh:"Phone number",toc:"By signing up you agree to receive exclusive offers via email or recurring automated marketing messages. For more info see our Privacy Policy. Message frequency varies. Msg & data rates may apply. Sign up not required for purchase.",ty_heading:"You\u2019re registered!",ty_subHeading:"Stay tuned to receive your early access code on November 14, and find out if you\u2019re a winner via email or SMS!",ty_note:"*Customers who sign up to our presale through SMS or email address will be given a chance to win up to $500 USD worth of products as well as $1000 salon services. Contest winners will be notified via SMS or email. Pre sale registration and contest will run until November 13, 2022 21:00 EST. Prizes cannot be used in conjunction with any other code, offer or promotion. Coco & Eve reserves the right to cancel or alter any promotion without prior notice. In the event of any dispute, the decision of Coco & Eve is final. No purchase necessary to enter or win. Each participant is only allowed one entry.",submit:"Register now!"}}}},2480:function(){}}]);