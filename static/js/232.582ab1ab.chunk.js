"use strict";(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[232,430],{2938:function(e,s,a){var t=a(885),i=a(7313),c=a(2843),d=a(6592),l=a(4298),n=a(3324),r=a(6417);s.Z=function(e){var s=(0,n.iP)(),a=(0,t.Z)(s,1)[0],o=0;return a>768&&e.items.length>4&&(o=3),(0,c.Z)(e.id),(0,i.useEffect)((function(){(0,d.Z)(e.id)}),[]),(0,r.jsx)("div",{id:e.id,className:e.className,"data-bs-interval":"100000000","data-bs-ride":"carousel",children:e.centered?(0,r.jsxs)(l.Z,{condition:e.items.length>4||e.forceCentered,wrapper:function(e){return(0,r.jsx)("div",{className:"carousel--centered",children:e})},children:[(0,r.jsx)("div",{className:"carousel-inner d-flex flex-nowrap ".concat(e.additionalClasses," ").concat(e.items.length>4||e.forceCentered?"":"justify-content-center"),children:e.items.map((function(e,s){return(0,r.jsx)("div",{className:"".concat(e.carouselItemClass," ").concat(s===o?"active":""),children:e.content},"carouselItemContent1".concat(s))}))}),e.children]}):(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("div",{className:"carousel-inner d-flex flex-nowrap",children:e.items.map((function(e,s){return(0,r.jsx)("div",{className:e.carouselItemClass,children:e.content},"carouselItemContent2".concat(s))}))}),e.children]})})}},1430:function(e,s,a){a.r(s),a.d(s,{default:function(){return j}});var t,i=a(7313),c=a(2244),d=["title","titleId"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},l.apply(this,arguments)}function n(e,s){if(null==e)return{};var a,t,i=function(e,s){if(null==e)return{};var a,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)a=c[t],s.indexOf(a)>=0||(i[a]=e[a]);return i}(e,s);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)a=c[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function r(e,s){var a=e.title,c=e.titleId,r=n(e,d);return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:18,height:18,ref:s,"aria-labelledby":c},r),a?i.createElement("title",{id:c},a):null,t||(t=i.createElement("path",{fill:"#48b25f",d:"M6.506.28a1.49 1.49 0 011.806.051l.107.096.808.793c.137.134.307.226.492.267l.141.021 1.118.081a1.49 1.49 0 011.353 1.214l.019.134.109 1.125c.018.2.095.39.22.545l.08.09.808.792c.474.475.57 1.202.249 1.779l-.075.121-.627.936a1.022 1.022 0 00-.177.532l.004.143.109 1.13a1.492 1.492 0 01-.949 1.54l-.136.045-1.088.3a1.018 1.018 0 00-.494.312l-.073.094-.633.932a1.49 1.49 0 01-1.715.57l-.133-.053-1.029-.468a1.019 1.019 0 00-.554-.082l-.14.028-1.094.317c-.65.18-1.332-.1-1.674-.667l-.068-.126-.486-1.027a1.019 1.019 0 00-.394-.433l-.106-.055-1.029-.468a1.494 1.494 0 01-.858-1.588l.029-.14.283-1.1A1.01 1.01 0 00.693 7.5l-.052-.133-.493-1.019A1.493 1.493 0 01.51 4.576l.113-.089.918-.65c.165-.117.291-.28.363-.467l.037-.115.287-1.097a1.49 1.49 0 011.418-1.121l.144.004 1.124.084c.19.015.38-.025.548-.112l.122-.075.922-.658zm3.756 5.105c.686-.682-.401-1.526-.947-.98l-.334.344-2.872 3.05-.57-.612-.327-.34-.359-.367-.123-.124a.687.687 0 10-.947.985l.45.46 1.078 1.133.798.851 3.29-3.502.796-.83.067-.068z"})))}var o=i.forwardRef(r),m=(a.p,a(3324),a(6417)),h=function(e){return(0,m.jsxs)("div",{className:" bg-gray-100 p-1 rounded-3 me-g mx-lg-g",children:[(0,m.jsxs)("div",{className:"d-flex mb-1",children:[(0,m.jsx)(c.Z,{score:5,useSharpStar:!0}),e.disabledLink?(0,m.jsx)("span",{className:"d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1 text-primary",children:"5.0"}):(0,m.jsx)("a",{href:"https://www.cocoandeve.com/products/".concat(e.handle,"#write-a-review"),className:"d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1",children:"5.0"})]}),(0,m.jsxs)("p",{children:[e.name,(0,m.jsx)(o,{className:"ms-1"})]}),(0,m.jsx)("p",{className:"fw-bold",children:e.caption}),(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:e.text}}),e.children]})},g=a(2938),x=a(6133),j=function(e){var s=new URL(document.location).searchParams.get("utm_store")||"us",a=(0,i.useContext)(x.Z);a.storeChange(s,e.range);var t=[{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[0].name,caption:a.reviews[0].shade,text:a.reviews[0].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsxs)("div",{className:"row no-gutters",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0aacc2f1-02f9-4ee1-5994-ad647e26c300/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/acb5e8a9-bd03-4f05-d2d3-7817b1d27500/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/acb5e8a9-bd03-4f05-d2d3-7817b1d27500/200x",className:"img-fluid",alt:"",loading:"lazy"})]})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d3a1a011-65bd-49e1-79ff-d9f8c33b5500/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/95e53a10-1deb-40da-52df-1891f96efe00/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/95e53a10-1deb-40da-52df-1891f96efe00/200x",className:"w-100",alt:"",loading:"lazy"})]})})]})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[1].name,caption:a.reviews[1].shade,text:a.reviews[1].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/cd37ece0-4c30-447a-a52b-05d5937a2b00/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7ba095e8-e3d3-4c0d-d08a-4edbb7778000/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7ba095e8-e3d3-4c0d-d08a-4edbb7778000/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[2].name,caption:a.reviews[2].shade,text:a.reviews[2].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/68fa6642-1e94-439c-c0a4-fe31ff027f00/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15b532db-5a1d-4a38-2bb8-5fcf59c1b700/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/15b532db-5a1d-4a38-2bb8-5fcf59c1b700/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[3].name,caption:a.reviews[3].shade,text:a.reviews[3].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/04e43ba7-46fd-47e3-c347-8430287a7d00/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/aa96a2fc-e91d-473a-e328-0a966e9e9b00/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/aa96a2fc-e91d-473a-e328-0a966e9e9b00/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[4].name,caption:a.reviews[4].shade,text:a.reviews[4].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsxs)("div",{className:"row no-gutters",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d0ffe6fb-96c4-4059-95ed-a9c07006d300/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/03bb1c12-7e90-48de-21ce-c1e5d394b700/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/03bb1c12-7e90-48de-21ce-c1e5d394b700/200x",className:"img-fluid",alt:"",loading:"lazy"})]})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/347c899b-8292-4ac2-6a35-f09291fb0e00/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/de3a2ed7-4629-4425-0a79-2ff78a07c800/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/de3a2ed7-4629-4425-0a79-2ff78a07c800/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})]})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[5].name,caption:a.reviews[5].shade,text:a.reviews[5].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsxs)("div",{className:"row no-gutters",children:[(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b2733858-1a83-4973-54c1-44f036a3f900/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41b0f5a1-1fb9-4251-2403-8f7741208100/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41b0f5a1-1fb9-4251-2403-8f7741208100/200x",className:"w-100",alt:"",loading:"lazy"})]})}),(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7a22db86-2796-4197-dae4-1148e2070500/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6682e320-30c7-4f56-2f82-355733b09800/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6682e320-30c7-4f56-2f82-355733b09800/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})]})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[6].name,caption:a.reviews[6].shade,text:a.reviews[6].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9aca4722-affa-4677-1a0e-263b6cb31c00/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/48a2621a-547c-43d3-538e-b90ba49a9200/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/48a2621a-547c-43d3-538e-b90ba49a9200/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})}],c=[{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[0].name,caption:a.reviews[0].shade,text:a.reviews[0].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a02ab0a2-270a-4b44-160e-5fb1b14e2400/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/23a4499f-89dc-47ab-33f7-0aec0b9afd00/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/23a4499f-89dc-47ab-33f7-0aec0b9afd00/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[1].name,caption:a.reviews[1].shade,text:a.reviews[1].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/57b4d825-e5a7-47e3-f4d8-c9ca3936f700/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a2e3aedf-026b-491a-8953-e7a71686d900/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a2e3aedf-026b-491a-8953-e7a71686d900/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[2].name,caption:a.reviews[2].shade,text:a.reviews[2].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e3b6abad-3888-440f-f23f-37bbe3358d00/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9c104813-c18a-4dbf-aa62-cd93685d6900/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9c104813-c18a-4dbf-aa62-cd93685d6900/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[3].name,caption:a.reviews[3].shade,text:a.reviews[3].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/db054539-903c-471d-0cea-7945b0b3e300/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7b46dbef-6eb4-40f1-e4d0-f8ae36971c00/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7b46dbef-6eb4-40f1-e4d0-f8ae36971c00/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[4].name,caption:a.reviews[4].shade,text:a.reviews[4].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a707fa8b-43a3-4995-a87c-0b31a5295200/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4d25cbcf-0fac-4b24-22e0-6c7abacc0600/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4d25cbcf-0fac-4b24-22e0-6c7abacc0600/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[5].name,caption:a.reviews[5].shade,text:a.reviews[5].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/da8d1785-b568-4e68-7a71-f0eab5cd3700/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e7f315c-1e56-41e9-a678-392764264c00/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e7f315c-1e56-41e9-a678-392764264c00/200x",className:"w-100",alt:"",loading:"lazy"})]})})})})},{carouselItemClass:"carousel-item col-9 col-md-4 rounded px-0",content:(0,m.jsx)(h,{name:a.reviews[6].name,caption:a.reviews[6].shade,text:a.reviews[6].text,handle:e.handle,disabledLink:e.disabledLink,children:(0,m.jsx)("div",{className:"row no-gutters",children:(0,m.jsx)("div",{className:"col-6",children:(0,m.jsxs)("picture",{children:[(0,m.jsx)("source",{type:"image/webp",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/25d84f47-9b33-4063-faf6-375d9e750400/200x"}),(0,m.jsx)("source",{type:"image/jpeg",srcSet:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c536fe17-1c4b-400b-e7c8-6bf029154300/200x"}),(0,m.jsx)("img",{src:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c536fe17-1c4b-400b-e7c8-6bf029154300/200x",className:"img-fluid",alt:"",loading:"lazy"})]})})})})}],d=t;return"hair"===e.range&&(d=c),(0,m.jsxs)("section",{className:"customer-reviews pb-2 pt-2 pt-lg-4",children:[(0,m.jsx)("h2",{className:"h1 mb-4 text-center",children:a.heading}),(0,m.jsx)("div",{className:"container px-g pe-0 pe-lg-g",children:(0,m.jsxs)(g.Z,{id:"customerReviews",className:"carousel slide carousel--loop carousel--mobile-half-next carousel--swipe",items:d,slideNumber:"4",centered:!0,children:[(0,m.jsxs)("button",{className:"carousel-control carousel-control-prev  floating-out-start justify-content-start text-primary d-none d-lg-flex","data-bs-target":"#customerReviews",role:"button","data-bs-slide":"prev",children:[(0,m.jsx)("span",{className:"carousel-control-prev-icon d-flex justify-content-center align-items-center","aria-hidden":"true",children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.627 22.627",className:"svg",children:(0,m.jsx)("path",{d:"M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"})})}),(0,m.jsx)("span",{className:"visually-hidden-focusable",children:"Prev"})]}),(0,m.jsxs)("button",{className:"carousel-control carousel-control-next  floating-out-end justify-content-end text-primary d-none d-lg-flex","data-bs-target":"#customerReviews",role:"button","data-bs-slide":"next",children:[(0,m.jsx)("span",{className:"carousel-control-next-icon d-flex justify-content-center align-items-center","aria-hidden":"true",children:(0,m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.627 22.627",className:"svg",children:(0,m.jsx)("path",{d:"M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"})})}),(0,m.jsx)("span",{className:"visually-hidden-focusable",children:"Next"})]})]})})]})}},4298:function(e,s){s.Z=function(e){var s=e.condition,a=e.wrapper,t=e.wrapperFalse,i=e.children;return s?a(i):"function"===typeof t?t(i):i}}}]);