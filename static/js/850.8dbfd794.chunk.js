"use strict";(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[850],{5850:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var s,n,o=a(885),l=a(7313),i=a(3040),r=a(6666),c=a.n(r),d=function(e){var t=new Date(e);return Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds())-288e5},h=function(e){c()(document).ready((function(){console.log("ready");var e=d("2022-10-29T17:02:00.000Z"),t=d("2022-12-03T17:00:00.000Z"),a=function(){var e=new Date;return Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())-288e5}();a>e&&a<t?(c()(".announcement-bar__timer").removeClass("d-none").addClass("d-block"),function(e,t){var a,s=new Date(d(e)),n=6e4,o=36e5,l=24*o;a=setInterval((function(){var e=new Date,t=s-e;if(t<0)return clearInterval(a),void c()(".announcement-bar__timer").addClass("d-none");var i=Math.floor(t/l),r=Math.floor(t%l/o),d=Math.floor(t%o/n),h=Math.floor(t%n/1e3),p=new URL(document.location).searchParams.get("utm_store")||"us";"fr"===p?(i>0?c()("#timerDays").html("".concat(i," <span>").concat("jours","</span>")):c()("#timerDays").addClass("d-none"),c()("#timerHrs").html("".concat(String(r).padStart(2,"0")," <span>").concat("heures","</span>")),c()("#timerMin").html("".concat(String(d).padStart(2,"0")," <span>minutes</span>")),c()("#timerSec").html("".concat(String(h).padStart(2,"0")," <span>secondes</span>"))):"de"===p?(i>0?c()("#timerDays").html("".concat(i," <span>").concat("Tagen","</span>")):c()("#timerDays").addClass("d-none"),c()("#timerHrs").html("".concat(String(r).padStart(2,"0")," <span>").concat("Stunden","</span>")),c()("#timerMin").html("".concat(String(d).padStart(2,"0")," <span>Minuten</span>")),c()("#timerSec").html("".concat(String(h).padStart(2,"0")," <span>Sekunden</span>"))):(i>0?c()("#timerDays").html("".concat(i," <span>").concat(i>1?"Days":"Day","</span>")):c()("#timerDays").addClass("d-none"),c()("#timerHrs").html("".concat(String(r).padStart(2,"0")," <span>").concat(r>1?"Hours":"Hour","</span>")),c()("#timerMin").html("".concat(String(d).padStart(2,"0")," <span>Minutes</span>")),c()("#timerSec").html("".concat(String(h).padStart(2,"0")," <span>Seconds</span>"))),c()(".announcement-bar__timer").find("ul").removeClass("d-none").addClass("d-inline")}),1e3)}("2022-12-03T17:00:00.000Z")):(console.log("expired"),c()(".announcement-bar__timer").addClass("d-none"))}))},p=a(3324),C=["title","titleId"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},A.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function m(e,t){var a=e.title,o=e.titleId,i=u(e,C);return l.createElement("svg",A({width:121,height:51,viewBox:"0 0 121 51",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":o},i),a?l.createElement("title",{id:o},a):null,s||(s=l.createElement("rect",{width:121,height:51,fill:"url(#pattern0)"})),n||(n=l.createElement("defs",null,l.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},l.createElement("use",{xlinkHref:"#image0_2255_236",transform:"translate(-0.00366955) scale(0.00162737 0.003861)"})),l.createElement("image",{id:"image0_2255_236",width:619,height:259,xlinkHref:"data:image/png;base64,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"}))))}var g=l.forwardRef(m),w=(a.p,a(6417)),x={us:{id:"137103",code:"1",letter:"US"},ca:{id:"137104",code:"1",letter:"CA"},au:{id:"137109",code:"61",letter:"AU"},uk:{id:"137106",code:"44",letter:"UK"},my:{id:"137115",code:"60",letter:"MY"},int:{id:"137108",code:"65",letter:"INT"},eu:{id:"137107",code:"49",letter:"FR"},de:{id:"137112",code:"33",letter:"DE"},fr:{id:"137114",code:"49",letter:"FR"}},j=function(){var e=new URL(document.location).searchParams.get("utm_store")||"us",t=-1!==["us","ca","au","uk","int","my","eu","de","fr"].indexOf(e)?e:"us",a=i.Z[t];console.log("store active:",t);var s=(0,l.useState)(""),n=(0,o.Z)(s,2),r=n[0],d=n[1],C=(0,l.useState)(null),A=(0,o.Z)(C,2),u=A[0],m=A[1],j=(0,l.useState)(x[t].letter),v=(0,o.Z)(j,2),f=v[0],b=v[1],D=(0,l.useState)(x[t].code),y=(0,o.Z)(D,2),M=y[0],k=y[1],E=(0,l.useState)(x[t].id),N=(0,o.Z)(E,2),H=N[0],I=(N[1],(0,l.useState)(!1)),L=(0,o.Z)(I,2),S=L[0],Y=L[1],B=(0,l.useState)(!1),W=(0,o.Z)(B,2),Z=W[0],Q=W[1],U=(0,l.useState)(""),G=(0,o.Z)(U,2),_=G[0],T=G[1],O=(0,l.useState)(!1),P=(0,o.Z)(O,2),z=P[0],V=P[1],F=(0,l.useState)(!1),J=(0,o.Z)(F,2),X=J[0],R=J[1],q=function(e){var t=c()(e.target).find("option[value='".concat(e.target.value,"']")).data("code");k(t),b(e.target.value)};return h(t),c().get("https://api.cocoandeve.com/geo",(function(e){T(e.country_name)})),(0,w.jsxs)("div",{className:"sweepstakes",children:[(0,w.jsx)("div",{class:"announcement-bar announcement-bar__timer w-100 py-1",children:(0,w.jsx)("a",{href:"https://www.cocoandeve.com/collections/all",class:"text-decoration-none",children:(0,w.jsxs)("div",{class:"container text-center text-white d-flex align-items-center justify-content-between justify-content-lg-center",children:[(0,w.jsx)("span",{class:"announcement-bar__timer__title d-block d-lg-inline me-lg-4 h2 mb-0 font-weight-normal",children:a.sweepstakes.timerLabel}),(0,w.jsxs)("ul",{class:"list-inline mb-0 font-weight-bold d-none",children:[(0,w.jsx)("li",{id:"timerDays",class:"list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"}),(0,w.jsx)("li",{id:"timerHrs",class:"list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"}),(0,w.jsx)("li",{id:"timerMin",class:"list-inline-item position-relative me-2 h2 mb-0 font-weight-normal"}),(0,w.jsx)("li",{id:"timerSec",class:"list-inline-item position-relative me-0 h2 mb-0 font-weight-normal"})]})]})})}),(0,w.jsx)("header",{className:"container text-center sweepstakes__logo",children:(0,w.jsx)("nav",{className:"navbar navbar-expand-lg p-1",children:(0,w.jsxs)("a",{className:"navbar-brand mx-auto text-secondary p-0",href:"https://www.cocoandeve.com",children:[(0,w.jsx)("span",{className:"visually-hidden-focusable",children:"Coco & Eve"}),(0,w.jsx)(g,{})]})})}),(0,w.jsx)("div",{className:"sweepstakes__wrapper d-flex align-items-center",children:(0,w.jsx)("div",{id:"waitlist-page",class:"container px-0","data-page-type":"Sweepstakes","data-form-id":"#sweepstakes__form","data-email-form":"#sweepstakes__email",children:(0,w.jsx)("div",{class:"row m-0 align-items-center justify-content-end",children:(0,w.jsxs)("div",{class:"px-g col-lg-5 order-lg-1 my-lg-4 mt-n5",children:[X||z?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{class:"sweepstakes__thank-you px-2 px-lg-4 py-3 bg-white text-center rounded",children:[(0,w.jsx)("h2",{class:"h1 ",children:a.sweepstakes.ty_heading}),(0,w.jsx)("p",{children:a.sweepstakes.ty_subHeading})]}),(0,w.jsx)("p",{class:"font-size-xs text-gray-600 my-2 mb-lg-0 text-white",dangerouslySetInnerHTML:{__html:a.sweepstakes.ty_note}})]}):(0,w.jsxs)("form",{id:"sweepstakes__form",class:"sweepstakes__form px-2 px-lg-4 py-3 bg-white text-center rounded",onSubmit:function(e){e.preventDefault();(S||Z)&&(S&&(0,p.jm)(r,u,_,"blackfriday").done((function(e){console.log("email/phone submitted",e),R(!0)})),Z&&(0,p._y)(u,H,f).done((function(e){console.log("phone submitted",e),V(!0)})))},children:[(0,w.jsx)("h1",{class:"",children:a.sweepstakes.heading}),(0,w.jsx)("p",{children:a.sweepstakes.subHeading}),(0,w.jsx)("input",{type:"email",className:"form-control bg-light-gray border-0",placeholder:a.sweepstakes.emailPh,onChange:function(e){Y((0,p.oH)(e.target.value)),d(e.target.value)}}),(0,w.jsx)("div",{class:"mt-1 input-group form-group font-size-sm justify-content-center mb-1",children:"- or -"}),(0,w.jsxs)("div",{class:"input-group form-group mb-2",children:["us"===t&&(0,w.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,w.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",M," ",(0,w.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,w.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,w.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:q,children:[(0,w.jsx)("option",{value:"",disabled:"",children:"Select Country"}),(0,w.jsx)("option",{value:"US","data-code":"1",selected:"us"===f,children:"United States"})]})]}),"ca"===t&&(0,w.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,w.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",M," ",(0,w.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,w.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,w.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:q,children:[(0,w.jsx)("option",{value:"",disabled:"",children:"Select Country"}),(0,w.jsx)("option",{value:"CA","data-code":"1",children:"Canada"})]})]}),("de"===t||"fr"===t||"eu"===t)&&(0,w.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,w.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",M," ",(0,w.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,w.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,w.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:q,children:[(0,w.jsx)("option",{value:"AT","data-code":"43",children:"Austria"}),(0,w.jsx)("option",{value:"BE","data-code":"32",children:"Belgium"}),(0,w.jsx)("option",{value:"BG","data-code":"359",children:"Bulgaria"}),(0,w.jsx)("option",{value:"HR","data-code":"385",children:"Croatia"}),(0,w.jsx)("option",{value:"CZ","data-code":"420",children:"Czechia"}),(0,w.jsx)("option",{value:"DK","data-code":"45",children:"Denmark"}),(0,w.jsx)("option",{value:"EE","data-code":"372",children:"Estonia"}),(0,w.jsx)("option",{value:"FI","data-code":"358",children:"Finland"}),(0,w.jsx)("option",{value:"FR","data-code":"33",selected:"fr"===t||"eu"===t,children:"France"}),(0,w.jsx)("option",{value:"DE","data-code":"49",selected:"de"===t,children:"Germany"}),(0,w.jsx)("option",{value:"GR","data-code":"30",children:"Greece"}),(0,w.jsx)("option",{value:"HU","data-code":"36",children:"Hungary"}),(0,w.jsx)("option",{value:"IE","data-code":"353",children:"Ireland"}),(0,w.jsx)("option",{value:"IT","data-code":"39",children:"Italy"}),(0,w.jsx)("option",{value:"LV","data-code":"371",children:"Latvia"}),(0,w.jsx)("option",{value:"LU","data-code":"352",children:"Luxembourg"}),(0,w.jsx)("option",{value:"MT","data-code":"356",children:"Malta"}),(0,w.jsx)("option",{value:"MC","data-code":"377",children:"Monaco"}),(0,w.jsx)("option",{value:"NL","data-code":"31",children:"Netherlands"}),(0,w.jsx)("option",{value:"PL","data-code":"48",children:"Poland"}),(0,w.jsx)("option",{value:"PT","data-code":"351",children:"Portugal"}),(0,w.jsx)("option",{value:"SK","data-code":"421",children:"Slovakia"}),(0,w.jsx)("option",{value:"SI","data-code":"386",children:"Slovenia"}),(0,w.jsx)("option",{value:"ES","data-code":"34",children:"Spain"}),(0,w.jsx)("option",{value:"SE","data-code":"46",children:"Sweden"})]})]}),"au"===t&&(0,w.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,w.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",M," ",(0,w.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,w.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,w.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:q,children:[(0,w.jsx)("option",{value:"AU","data-code":"61",selected:!0,children:"Australia"}),(0,w.jsx)("option",{value:"NZ","data-code":"64",children:"New Zealand"})]})]}),"uk"===t&&(0,w.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,w.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",M," ",(0,w.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,w.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,w.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:q,children:[(0,w.jsx)("option",{value:"NO","data-code":"47",children:"Norway"}),(0,w.jsx)("option",{value:"CH","data-code":"41",children:"Switzerland"}),(0,w.jsx)("option",{value:"AE","data-code":"971",children:"United Arab Emirates\xa0\xa0"}),(0,w.jsx)("option",{value:"GB","data-code":"44",selected:!0,children:"United Kingdom"})]})]}),("int"===t||"my"===t)&&(0,w.jsxs)("label",{for:"sweepstakes__country",class:"input-group-addon form-control",children:[(0,w.jsxs)("span",{class:"position-absolute sweepstakes__country-label align-items-center",children:["+",M," ",(0,w.jsx)("svg",{role:"presentation",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",class:"svg",children:(0,w.jsx)("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})})]}),(0,w.jsxs)("select",{id:"sweepstakes__country",class:"custom-select",onChange:q,children:[(0,w.jsx)("option",{value:"HK","data-code":"852",children:"Hong Kong SAR\xa0\xa0"}),(0,w.jsx)("option",{value:"MO","data-code":"853",children:"Macao SAR"}),(0,w.jsx)("option",{value:"MY","data-code":"60",selected:"my"===t,children:"Malaysia"}),(0,w.jsx)("option",{value:"PH","data-code":"63",children:"Philippines"}),(0,w.jsx)("option",{value:"SG","data-code":"65",selected:"int"===t,children:"Singapore"})]})]}),(0,w.jsx)("input",{id:"sweepstakes__phone",class:"sweepstakes__phone form-control bg-light-gray border-0",type:"phone",placeholder:a.sweepstakes.phonePh,onChange:function(e){m(e.target.value),Q((0,p.a$)(e.target.value)),console.log("phonecode",e.target.value,(0,p.a$)(e.target.value))}}),(0,w.jsx)("div",{class:"d-none input-error phone-error font-size-xs text-primary mb-2",children:"Please enter a valid phone number"})]}),(0,w.jsx)("div",{class:"d-none input-error toc-error font-size-xs text-primary mb-2",children:"You have not agreed to the Privacy Policy & ToS"}),(0,w.jsx)("p",{class:"font-size-xs",dangerouslySetInnerHTML:{__html:a.sweepstakes.toc}}),(0,w.jsx)("div",{class:"form-group",children:(0,w.jsx)("button",{disabled:!S&&!Z,id:"sweepstakes__submit",type:"submit",class:"fr"===t||"de"===t?"btn btn-lg btn-primary btn-block text-white px-2":"btn btn-lg btn-primary btn-block text-white",children:a.sweepstakes.submit})})]}),(0,w.jsxs)("div",{className:"social-icon d-flex justify-content-center mt-4",children:[(0,w.jsx)("a",{class:"mx-1",href:"https://www.facebook.com/cocoandeve",target:"_blank",children:(0,w.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,w.jsx)("path",{d:"M17.3047 0H2.69532C1.20645 0 0 1.20645 0 2.69532V17.3047C0 18.7936 1.20645 20 2.69532 20H9.90023L9.91251 12.8526H8.05602C7.81504 12.8526 7.61857 12.6577 7.6178 12.4167L7.60936 10.1128C7.60783 9.8703 7.80429 9.67307 8.04681 9.67307H9.90023V7.44667C9.90023 4.86417 11.4781 3.45741 13.7828 3.45741H15.6738C15.9156 3.45741 16.1113 3.65311 16.1113 3.89563V5.83807C16.1113 6.07982 15.9156 6.27552 15.6738 6.27629H14.5134C13.2602 6.27629 13.0176 6.87184 13.0176 7.74598V9.67307H15.7713C16.0338 9.67307 16.2372 9.90254 16.2064 10.1627L15.9332 12.4666C15.9071 12.6869 15.7199 12.8526 15.4981 12.8526H13.0299L13.0176 20H17.3047C18.7928 20 20 18.7936 20 17.3047V2.69532C20 1.20645 18.7928 0 17.3047 0",fill:"white"})})}),(0,w.jsx)("a",{class:"mx-1",href:"https://www.instagram.com/cocoandeve/",target:"_blank",children:(0,w.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,w.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.877 19.9395C4.9104 19.8954 4.1616 19.7523 3.4497 19.4751C2.7513 19.2042 2.205 18.8478 1.6785 18.3213C1.152 17.7957 0.7965 17.2494 0.5247 16.5501C0.2475 15.8364 0.1044 15.0876 0.0603 14.1228C0.0117 13.0518 0 12.6972 0 9.9999C0 7.3026 0.0117 6.948 0.0603 5.877C0.1044 4.914 0.2475 4.1652 0.5247 3.4497C0.7956 2.7513 1.152 2.205 1.6785 1.6785C2.205 1.152 2.7513 0.7956 3.4497 0.5247C4.1652 0.2475 4.914 0.1044 5.877 0.0603C6.948 0.0117 7.3026 0 9.9999 0C12.6972 0 13.0518 0.0117 14.1228 0.0603C15.0876 0.1044 15.8364 0.2475 16.5501 0.5247C17.2494 0.7965 17.7957 1.152 18.3213 1.6785C18.8478 2.205 19.2042 2.7513 19.4751 3.4497C19.7523 4.1616 19.8954 4.9104 19.9395 5.877C19.9881 6.948 19.9998 7.3026 19.9998 9.9999C19.9998 12.6972 19.9881 13.0518 19.9395 14.1228C19.8954 15.0903 19.7523 15.8391 19.4751 16.5501C19.2033 17.2494 18.8478 17.7957 18.3213 18.3213C17.7957 18.8478 17.2494 19.2033 16.5501 19.4751C15.8391 19.7523 15.0903 19.8954 14.1228 19.9395C13.0518 19.9881 12.6972 19.9998 9.9999 19.9998C7.3026 19.9998 6.948 19.9881 5.877 19.9395ZM5.9589 1.8603C4.9851 1.9044 4.455 2.0673 4.1022 2.2041C3.6351 2.3859 3.3021 2.6028 2.952 2.9529C2.6028 3.3021 2.3859 3.6351 2.2041 4.1022C2.0673 4.455 1.9044 4.9851 1.8603 5.9589C1.8117 7.0065 1.8018 7.3215 1.8018 9.9999C1.8018 12.6783 1.8117 12.9933 1.8603 14.0409C1.9044 15.0165 2.0673 15.5457 2.2041 15.8976C2.3859 16.3638 2.6019 16.6968 2.952 17.0478C3.3012 17.397 3.6342 17.6139 4.1022 17.7957C4.455 17.9325 4.9851 18.0954 5.9589 18.1395C7.0065 18.1881 7.3215 18.198 9.9999 18.198C12.6783 18.198 12.9933 18.1881 14.0409 18.1395C15.0165 18.0954 15.5457 17.9325 15.8976 17.7957C16.3656 17.6139 16.6986 17.397 17.0478 17.0478C17.3979 16.6968 17.6139 16.3638 17.7957 15.8976C17.9325 15.5457 18.0954 15.0165 18.1395 14.0409C18.1881 12.9933 18.198 12.6783 18.198 9.9999C18.198 7.3215 18.1881 7.0065 18.1395 5.9589C18.0954 4.9851 17.9325 4.455 17.7957 4.1022C17.6139 3.636 17.3979 3.303 17.0478 2.952C16.6968 2.6019 16.3638 2.3859 15.8976 2.2041C15.5457 2.0673 15.0165 1.9044 14.0409 1.8603C12.9933 1.8117 12.6783 1.8018 9.9999 1.8018C7.3215 1.8018 7.0065 1.8117 5.9589 1.8603ZM4.8645 9.9999C4.8645 7.1685 7.1685 4.8645 9.9999 4.8645C12.8313 4.8645 15.1344 7.1685 15.1344 9.9999C15.1344 12.8313 12.8313 15.1344 9.9999 15.1344C7.1685 15.1344 4.8645 12.8313 4.8645 9.9999ZM6.6663 9.9999C6.6663 11.8377 8.1621 13.3326 9.9999 13.3326C11.8377 13.3326 13.3326 11.8377 13.3326 9.9999C13.3326 8.1621 11.8377 6.6663 9.9999 6.6663C8.1621 6.6663 6.6663 8.1621 6.6663 9.9999ZM14.1381 4.662C14.1381 3.9996 14.6754 3.4623 15.3378 3.4623C16.0011 3.4623 16.5384 3.9996 16.5384 4.662C16.5384 5.3244 16.0011 5.8617 15.3378 5.8617C14.6754 5.8617 14.1381 5.3244 14.1381 4.662Z",fill:"white"})})}),(0,w.jsx)("a",{className:"mx-1",href:"https://www.tiktok.com/@coco_and_eve",target:"_blank",children:(0,w.jsxs)("svg",{width:"71",height:"20",viewBox:"0 0 71 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,w.jsx)("path",{d:"M17.4382 5.54052V8.21257C17.4382 8.21257 16.2249 8.16297 15.3263 7.92457C14.0722 7.59113 13.2661 7.08015 13.2661 7.08015C13.2661 7.08015 12.7093 6.71504 12.6643 6.68961V13.7338C12.6643 14.126 12.5613 15.1055 12.2475 15.9224C11.8378 16.9914 11.2055 17.6929 11.0892 17.8359C11.0892 17.8359 10.3202 18.7845 8.96357 19.423C7.74112 19.999 6.66747 19.9844 6.34612 19.999C6.34612 19.999 4.49056 20.0757 2.82006 18.9429L2.81173 18.937C2.63546 18.7588 2.46945 18.5706 2.3145 18.3735C1.78142 17.695 1.45466 16.8935 1.37255 16.6647C1.3723 16.6637 1.3723 16.6627 1.37255 16.6618C1.24001 16.2637 0.962425 15.3093 1.00035 14.3844C1.06746 12.7523 1.61762 11.7511 1.76308 11.4998C2.14849 10.8157 2.64969 10.2037 3.24436 9.69093C3.76882 9.24805 4.36356 8.89588 5.00405 8.64895C5.40343 8.48299 5.81958 8.36071 6.24526 8.28426C6.55661 8.2286 6.87182 8.19724 7.18804 8.19048V10.8942C7.18804 10.8942 5.81513 10.4382 4.71605 11.2443C3.9479 11.8395 3.54028 12.4201 3.42024 13.4566C3.41524 14.2202 3.60238 15.2997 4.62894 16.0203C4.74842 16.0995 4.86595 16.1698 4.98154 16.2312C5.16102 16.4736 5.37913 16.6848 5.62716 16.8564C6.62996 17.5187 7.47021 17.565 8.54469 17.1348C9.26199 16.851 9.79924 16.2029 10.0539 15.4843C10.211 15.0359 10.2089 14.5841 10.2089 14.1177V0.839111H12.7097C12.8131 1.45221 13.099 2.32497 13.855 3.1894C14.1583 3.51579 14.4999 3.80435 14.8724 4.04882C14.9825 4.16761 15.5451 4.75445 16.2674 5.11539C16.64 5.30164 17.0329 5.44429 17.4382 5.54052Z",fill:"white"}),(0,w.jsx)("path",{d:"M0.377319 15.834V15.8365L0.439004 16.012C0.432336 15.9915 0.408995 15.9294 0.377319 15.834Z",fill:"#69C9D0"}),(0,w.jsx)("path",{d:"M5.00409 8.64878C4.3636 8.89571 3.76885 9.24788 3.24439 9.69076C2.64968 10.2047 2.14875 10.818 1.76395 11.5034C1.61849 11.7535 1.06832 12.7558 1.00122 14.388C0.963293 15.3129 1.24088 16.2673 1.37342 16.6654C1.37317 16.6663 1.37317 16.6673 1.37342 16.6683C1.45677 16.895 1.78229 17.6965 2.31536 18.3771C2.47032 18.5742 2.63633 18.7623 2.8126 18.9406C2.24751 18.5498 1.74354 18.0773 1.31715 17.5385C0.788657 16.8662 0.462726 16.0727 0.377701 15.8384L0.375616 15.8334V15.8301C0.243077 15.4333 -0.0353396 14.478 0.003422 13.5519C0.0705254 11.9198 0.62069 10.9186 0.766151 10.6673C1.15084 9.98186 1.65178 9.36851 2.24659 8.85468C2.77094 8.41164 3.36572 8.05946 4.00629 7.8127C4.40566 7.64674 4.82182 7.52446 5.24749 7.44801C5.8889 7.33582 6.54404 7.32611 7.18849 7.41925V8.19031C6.87235 8.19611 6.55714 8.22649 6.24571 8.28117C5.81978 8.35854 5.40348 8.48179 5.00409 8.64878Z",fill:"#69C9D0"}),(0,w.jsx)("path",{d:"M12.7093 0.839001H10.2086V14.1184C10.2086 14.5848 10.2106 15.0353 10.0535 15.4851C9.80094 16.2028 9.26369 16.8509 8.54765 17.1385C7.47274 17.5703 6.63249 17.5223 5.63011 16.8601C5.38209 16.6885 5.16397 16.4772 4.9845 16.2349C5.8385 16.6904 6.6029 16.6825 7.54985 16.3024C8.26173 16.0127 8.80356 15.3646 9.05363 14.6465C9.21118 14.198 9.2091 13.7462 9.2091 13.2802V0H12.6622C12.6622 0 12.623 0.330515 12.7093 0.839001ZM17.4382 4.80186V5.54041C17.0328 5.44421 16.6398 5.30156 16.267 5.11528C15.5447 4.75434 14.9821 4.1675 14.872 4.04871C14.9996 4.13256 15.1321 4.20869 15.2688 4.2767C16.147 4.71516 17.0098 4.84645 17.4382 4.80186Z",fill:"#69C9D0"}),(0,w.jsx)("path",{d:"M54.3888 11.7268C54.3888 11.9167 54.4168 12.1057 54.4722 12.2874C54.4753 12.3002 54.4792 12.3129 54.4839 12.3253C54.6173 12.7551 54.8847 13.131 55.2471 13.3979C55.6095 13.6648 56.0477 13.8088 56.4978 13.8087V15.9426C55.4596 15.9426 54.7156 15.9789 53.584 15.3095C52.292 14.546 51.5659 13.1497 51.5659 11.6997C51.5659 10.2051 52.3778 8.70671 53.7545 7.98525C54.7523 7.46176 55.5117 7.45801 56.4978 7.45801V9.59073C55.9385 9.59084 55.4022 9.81307 55.0067 10.2086C54.6112 10.604 54.389 11.1404 54.3888 11.6997V11.7268Z",fill:"#69C9D0"}),(0,w.jsx)("path",{d:"M58.623 11.7268C58.6233 11.9168 58.5952 12.1057 58.5396 12.2874C58.5367 12.3003 58.5328 12.313 58.528 12.3253C58.3947 12.7552 58.1273 13.1312 57.7649 13.3981C57.4025 13.665 56.9641 13.8089 56.514 13.8087V15.9426C57.5527 15.9426 58.2962 15.9789 59.4278 15.3095C60.7199 14.546 61.4464 13.1497 61.4464 11.6997C61.4464 10.2051 60.634 8.70671 59.2578 7.98525C58.26 7.46176 57.5002 7.45801 56.514 7.45801V9.59073C57.0734 9.59073 57.6099 9.81291 58.0055 10.2084C58.401 10.6039 58.6233 11.1403 58.6234 11.6997L58.623 11.7268Z",fill:"#EE1D52"}),(0,w.jsx)("path",{d:"M23.8523 5.52295H31.6634L30.9415 7.67234H28.8992V15.8973H26.3831V7.67234H23.8523V5.52295ZM44.5543 5.52295V7.67234H47.0851V15.8973H49.5996V7.67234H51.6419L52.3654 5.52295H44.5543ZM33.3626 7.97243C33.6033 7.97243 33.8385 7.90108 34.0386 7.7674C34.2386 7.63371 34.3946 7.4437 34.4866 7.2214C34.5787 6.99909 34.6028 6.75447 34.5559 6.51847C34.5089 6.28247 34.3931 6.06569 34.2229 5.89554C34.0528 5.7254 33.836 5.60952 33.6 5.56258C33.364 5.51564 33.1194 5.53973 32.8971 5.63181C32.6748 5.7239 32.4847 5.87983 32.3511 6.0799C32.2174 6.27998 32.146 6.51519 32.146 6.75582C32.146 7.07848 32.2742 7.38794 32.5024 7.6161C32.7305 7.84425 33.04 7.97243 33.3626 7.97243ZM32.1439 15.8973H34.6101V8.83227H32.1439V15.8973ZM43.4807 7.91158H40.5973L38.112 10.3994V5.53087H35.6625L35.6542 15.8973H38.1282V13.1961L38.8989 12.4988L41.2996 15.8973H43.9441L40.4664 10.9271L43.4807 7.91158ZM67.1353 10.9271L70.1507 7.91158H67.2674L64.782 10.3994V5.53087H62.3321L62.3242 15.8973H64.7983V13.1961L65.5706 12.4988L67.9718 15.8973H70.6138L67.1353 10.9271ZM60.7959 11.6998C60.7959 14.0426 58.8711 15.9419 56.4967 15.9419C54.1222 15.9419 52.1979 14.0426 52.1979 11.6998C52.1979 9.35701 54.1226 7.4577 56.4967 7.4577C58.8707 7.4577 60.7967 9.35743 60.7967 11.6998H60.7959ZM58.6056 11.6998C58.6056 11.2827 58.4819 10.8749 58.2502 10.5281C58.0185 10.1813 57.6891 9.91099 57.3037 9.75137C56.9184 9.59175 56.4943 9.54998 56.0852 9.63136C55.6761 9.71273 55.3003 9.91359 55.0054 10.2085C54.7104 10.5035 54.5096 10.8793 54.4282 11.2884C54.3468 11.6975 54.3886 12.1215 54.5482 12.5069C54.7078 12.8922 54.9782 13.2216 55.325 13.4533C55.6718 13.6851 56.0795 13.8088 56.4967 13.8088C56.7737 13.8089 57.048 13.7545 57.304 13.6486C57.56 13.5427 57.7926 13.3873 57.9886 13.1915C58.1845 12.9956 58.3399 12.7631 58.4459 12.5071C58.552 12.2512 58.6065 11.9768 58.6064 11.6998H58.6056Z",fill:"white"})]})})]})]})})})})]})}}}]);