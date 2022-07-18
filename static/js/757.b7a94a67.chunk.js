"use strict";(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[757],{4924:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(5671),r=a(3144),s=a(9340),c=a(4876),i=a(2791),l=a(184),d=function(e){(0,s.Z)(a,e);var t=(0,c.Z)(a);function a(e){var r;return(0,n.Z)(this,a),(r=t.call(this,e)).onAddQuantity=function(e){e.preventDefault();var t=parseInt(r.state.quantity,10);t<99&&r.setState({quantity:t+1},(function(){r.props.onChangeQuantity(r.state.quantity)}))},r.onSubtractQuantity=function(e){e.preventDefault();var t=parseInt(r.state.quantity,10);r.state.quantity>1&&r.setState({quantity:t-1},(function(){r.props.onChangeQuantity(r.state.quantity)}))},r.onFocus=function(e){},r.onChangeQuantity=function(e){var t=e.target.value,a=e.nativeEvent,n=parseInt(t,10);if("e"!==a.data){(""===t||n<1)&&r.setState({quantity:"".concat(1)})}},r.state={quantity:"".concat(e.quantity)},r}return(0,r.Z)(a,[{key:"render",value:function(){return(0,l.jsxs)("div",{className:"quantity-box d-flex","data-inventory":this.props.productStock,"data-id":this.props.productId,children:[(0,l.jsx)("button",{className:"input-group-text bg-transparent border-end-0 rounded-lg rounded-right-0 border-dark flex-grow-0",type:"button","aria-label":"Add Subtract",disabled:1===this.state.prevQuantity,onClick:this.onSubtractQuantity,"data-cy":"cart-subtract-quantity-icon",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"svg",children:(0,l.jsx)("path",{d:"M17.543 11.029H2.1A1.032 1.032 0 011.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"})})}),(0,l.jsx)("input",{type:"number",name:this.props.name,className:"form-control border-start-0 border-end-0 rounded-0 p-0 text-center flex-grow-0 bg-transparent text-body border-dark font-size-dt-lg",value:this.state.quantity,onChange:this.onChangeQuantity,onFocus:this.onFocus,readOnly:!this.props.editable}),(0,l.jsx)("button",{className:"input-group-text bg-transparent border-start-0 rounded-lg rounded-left-0 border-dark flex-grow-0",type:"button","aria-label":"Add Quantity",disabled:!1,onClick:this.onAddQuantity,"data-cy":"cart-add-quantity-icon",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"svg",children:(0,l.jsx)("path",{d:"M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"})})})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{lastStock:!1}}}]),a}(i.Component)},7757:function(e,t,a){a.r(t),a.d(t,{default:function(){return J}});var n,r=a(2791),s=a(885),c=a(184),i=function(e){var t=function(e){e.onload=null;var t=e.closest(".bg-shimmer");t.classList.add("bg-shimmer--loaded"),setTimeout((function(){t.classList.remove("bg-shimmer","bg-shimmer--loaded")}),400)};return(0,r.useEffect)((function(){document.querySelectorAll(".bg-shimmer img").forEach((function(e){e.complete?t(e):e.onload=function(){t(e)}}))}),[]),(0,c.jsx)("div",{className:"carousel-item ".concat(0===e.index?"active":""),children:(0,c.jsxs)("picture",{className:"bg-shimmer ratio ratio-1x1 w-100 d-block",children:[(0,c.jsx)("source",{type:"image/webp",srcSet:"".concat(e.webp,"/828x")}),(0,c.jsx)("source",{type:"image/webp",srcSet:"".concat(e.webp,"/1140x"),media:"(min-width: 992px)"}),(0,c.jsx)("source",{type:"image/jpeg",srcSet:"".concat(e.jpg,"/828x")}),(0,c.jsx)("source",{type:"image/jpeg",srcSet:"".concat(e.jpg,"/1140x"),media:"(min-width: 992px)"}),e.lazy?(0,c.jsx)("img",{src:"".concat(e.jpg,"/828x"),alt:"",className:"w-100 embed-responsive-item fit--cover"}):(0,c.jsx)("img",{src:"".concat(e.jpg,"/828x"),alt:"",className:"w-100 embed-responsive-item fit--cover",loading:"lazy"})]})})},l=a(9762),d=a(578),o=[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/076fb4a7-a3d0-4b7f-4f8c-3f26d0460400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e673f56-7011-41f4-0076-c4fe81e67000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1950f6db-f70a-4680-fe91-de8248953400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c230678d-097c-4c4e-35ee-2df25efcba00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9e7d1cb9-0d18-4755-6037-d860c7a02e00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/979c96b6-c8d1-44eb-b08c-ce31a8d86500"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92fce513-c585-48fe-1a42-b5cc3cbbf700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b4fe917-bc28-48aa-aec2-5e6620e71600"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5d1b97ef-e9e5-439c-23e1-4ef0c885cc00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4326a114-43dc-438e-c394-d92615239b00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8aaabdcd-fde4-4e41-daba-10ef508e5d00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b248874b-dca6-44ba-85c9-cd5a70a6ec00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/79303a66-7bf3-4244-0974-544d8bb53400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b568e2c7-9c2b-41b9-0950-78394c86ab00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1105da83-a237-4ac5-132f-bcd15143c100",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/09e14d12-2fdb-4d92-4aa9-c9005d99a600"}],g={"deep-condition-bundle":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0d370dd9-70e0-4048-f63a-f7669f4a0200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1d19a70f-25dc-45d4-b2e9-ade6275cd000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/77d75a23-c302-4968-8afd-b782a3316700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf5675b1-f3c8-4a5a-e26f-e8a801b6ab00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/34a76b43-50c0-45f0-4c95-69139003d800",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4b80f6e9-31c2-45c4-e92d-5aa26541ad00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f103ea34-056f-4c82-7ed4-0742f84c1700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e1f5adb8-486f-45a0-c689-b12fd388b300"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/372f3617-2106-4869-4bf4-88f2dca2a900",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/372f3617-2106-4869-4bf4-88f2dca2a900"}],"repairing-restoring-hair-mask":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3ed24490-09e3-4e72-2657-924079d27700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/54628144-21c4-4b15-f000-67fdf6c47200"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f4309ac2-4495-47e9-5a1b-a76458a65400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/420fc5e8-24b1-4a99-3943-7902f0114000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b023aa38-648b-495c-f740-4481e8030800",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6db11430-c025-4742-3e96-22cb483a7900"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1e6af0e5-8dd9-44b5-80d2-de2fcd8ef200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/82bcb15d-0b0b-4933-fe69-49730cb49000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/49549f67-421f-4801-3546-1c060763b200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1dfb54e3-f067-488a-96ab-13b8b13da600"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7c0c0a62-e2ea-4be3-c508-010483745100/1140x",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/40782909-fd9f-45b7-4c26-e4bda905f700/1140x"}],"shampoo-conditioner-set":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5242a062-32d4-45a5-2e1b-f7656f33cf00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/93e20bc0-f7a0-4ab0-b0cc-d3a7deaffa00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fe1a2a20-c5f7-4ebe-26ac-6218b5e72500",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b7cddaeb-5c6e-4635-f93b-d0ed6019c100"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/85a52dfa-5e07-4cc9-8c79-81c91f121b00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/93e20bc0-f7a0-4ab0-b0cc-d3a7deaffa00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02ed2697-bed7-4142-059c-eac57a93e200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7265926a-0908-4ea1-b2ba-e5faa809b800"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/08062616-4678-4a29-a92a-d0b7e4c98000",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/676223d9-65cb-4599-2850-9f4ae6c4a700"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/93e84415-f8d3-4f40-3b67-8ec8ff099b00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/35ae21e6-b6b5-4970-6022-bb380de9d100"}],"super-nourishing-coconut-fig-hair-masque":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f04223a6-b140-4620-46d4-8e2f39bd2f00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1ef295e7-79f5-4800-2f0c-39cfe79e7700"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/64a352ae-5435-4859-01d9-5f3140fa3200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bd14eace-2a4e-447f-30ef-242de1163f00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4c18d133-f17b-4a8e-c467-284d56d67100",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/703246b1-2fc6-4ae5-8bec-d63ac6388d00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d4982b82-e9aa-4c15-433c-9e4941d29400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/64817c85-8736-4f7d-49bc-10263071e100"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bc504642-9bd6-42bf-f0c1-56bc983abc00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae44521e-a1c8-4394-669e-898ce437a600"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e72eb435-a27d-4877-01ff-e85476e9e500",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/727f2c40-a535-4264-fcc2-e593f1d48300"}]},m=a(2563),b=a(3790),h=["title","titleId"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){var a=e.title,s=e.titleId,c=u(e,h);return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",ref:t,"aria-labelledby":s},c),a?r.createElement("title",{id:s},a):null,n||(n=r.createElement("path",{d:"M20.7 17.2l-9.4-9.4-9.4 9.4L0 15.3 11.3 4l11.3 11.3-1.9 1.9z"})))}var j,x=r.forwardRef(f),y=(a.p,["title","titleId"]);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)}function w(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function S(e,t){var a=e.title,n=e.titleId,s=w(e,y);return r.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",ref:t,"aria-labelledby":n},s),a?r.createElement("title",{id:n},a):null,j||(j=r.createElement("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})))}var E,N=r.forwardRef(S),A=(a.p,function(e){(0,l.Z)("product-image-carousel__indicator"),(0,r.useEffect)((function(){(0,d.Z)("product-image-carousel")}),[]);var t=o;return e.handle&&(t=g[e.handle]),(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("div",{className:"product-image-carousel__container col-12 col-lg-6 order-lg-2",children:(0,c.jsxs)("figure",{id:"product-image-carousel",className:"product-image-carousel carousel slide mb-1 mb-lg-0 g-0__in-container","data-bs-ride":"carousel","data-bs-interval":"false","data-bs-touch":"false",children:[(0,c.jsx)("div",{className:"carousel-inner",children:t.map((function(e,t){return(0,c.jsx)(i,{jpg:e.jpg,webp:e.webp,index:t,lazy:0===t},e.jpg)}))},"div-carousel-1"),(0,c.jsx)("div",{className:"carousel-indicators d-lg-none",children:t.map((function(e,t){return(0,c.jsx)("button",{type:"button","data-bs-target":"#product-image-carousel","data-bs-slide-to":t,className:"rounded-circle bg-gray-800 border-gray-800 ".concat(0===t?"active":"")},e.jpg)}))},"div-carousel-2"),(0,c.jsx)("button",{className:"carousel-control-prev d-block d-lg-none",type:"button","data-bs-target":"#product-image-carousel","data-bs-slide":"prev",children:(0,c.jsx)(m.r,{className:"text-primary svg"})},"btn1"),(0,c.jsx)("button",{className:"carousel-control-next d-block d-lg-none",type:"button","data-bs-target":"#product-image-carousel","data-bs-slide":"next",children:(0,c.jsx)(b.r,{className:"text-primary svg"})},"btn2")]})},"product-image-carousel__container"),(0,c.jsxs)("div",{id:"product-image-carousel__indicator",className:"product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g  d-none d-lg-block","data-bs-slide-number":"5","data-bs-ride":"carousel","data-bs-interval":"false",children:[(0,c.jsx)("button",{className:"carousel-indicator chevron-up btn-unstyled d-none d-lg-flex mx-auto mb-1 mb-lg-3 text-center align-items-center","data-bs-slide":"prev","data-bs-target":"#product-image-carousel__indicator",disabled:!0,children:(0,c.jsx)(x,{className:"svg text-primary"})},"btn4"),(0,c.jsx)("div",{className:"carousel-inner d-flex flex-nowrap flex-lg-column",children:t.map((function(e,t){return(0,c.jsx)("div",{"data-bs-target":"#product-image-carousel","data-bs-slide-to":t,className:"product-image-carousel__indicator__item carousel-item col-12 px-lg-0 pb-lg-3 mw-100 ".concat(0===t?"active":""),children:(0,c.jsx)("button",{className:"btn-unstyled border d-block w-100 ".concat("border-white"),children:(0,c.jsxs)("picture",{className:"ratio ratio-1x1 w-100 d-block bg-shimmer",children:[(0,c.jsx)("source",{type:"image/webp",srcSet:"".concat(e.webp,"/200x")}),(0,c.jsx)("source",{type:"image/jpeg",srcSet:"".concat(e.jpg,"/200x")}),(0,c.jsx)("img",{src:"".concat(e.jpg,"/200x"),loading:"lazy"})]})})},e.jpg)}))},"carousel-inner"),(0,c.jsx)("button",{className:"carousel-indicator chevron-down btn-unstyled d-none d-lg-flex mx-auto mt-1 mt-lg-3 text-center align-items-center","data-bs-slide":"next","data-bs-target":"#product-image-carousel__indicator",children:(0,c.jsx)(N,{className:"svg text-primary"})},"btn3")]},"product-image-carousel__indicator")]})}),R=a(4924),H=a(4635),V=a(6167),G=a(8212),W=a(2880),K=a(8648),X=a(8736),k=["title","titleId"];function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},_.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function q(e,t){var a=e.title,n=e.titleId,s=O(e,k);return r.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",width:42,height:42,viewBox:"0 0 168.000000 168.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":n},s),a?r.createElement("title",{id:n},a):null,E||(E=r.createElement("g",{transform:"translate(0.000000,168.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.createElement("path",{d:"M816 1665 c-183 -47 -344 -208 -385 -385 -6 -25 -11 -123 -11 -217 0 -95 -4 -173 -8 -173 -5 0 -17 10 -28 21 -63 71 -205 76 -277 11 -57 -51 -77 -164 -42 -232 10 -19 64 -82 120 -140 147 -153 201 -260 228 -455 l12 -90 515 0 515 0 10 33 c9 30 12 32 58 32 26 0 57 5 69 11 24 13 50 71 42 96 -21 64 -47 83 -119 83 l-45 0 0 89 c0 100 -14 130 -51 111 -16 -9 -19 -22 -19 -85 l0 -75 -484 0 -484 0 -16 42 c-31 75 -102 173 -202 278 l-99 103 0 53 c0 60 25 96 83 121 56 23 96 8 173 -64 105 -100 103 -104 109 182 7 275 14 307 98 418 90 117 214 177 366 177 212 0 387 -136 442 -343 10 -38 14 -122 14 -304 0 -239 1 -253 19 -263 15 -8 24 -6 36 7 15 15 16 44 13 277 -4 232 -7 268 -26 326 -70 215 -255 356 -476 366 -60 2 -111 -1 -150 -11z m584 -1515 l0 -80 -459 0 -458 0 -6 48 c-3 26 -9 62 -13 80 l-6 32 471 0 471 0 0 -80z m161 34 c21 -25 -1 -49 -50 -52 -41 -3 -41 -3 -41 32 0 35 1 36 39 36 23 0 44 -6 52 -16z"}),r.createElement("path",{d:"M1404 595 c-9 -23 3 -45 24 -45 29 0 48 26 32 45 -7 8 -21 15 -32 15 -10 0 -21 -7 -24 -15z"}))))}var z=r.forwardRef(q),C=(a.p,a(5322)),Z=a(8626),I=a(6363),P=a(642),Q=function(e){var t=new URL(document.location).searchParams.get("utm_store")||"us",a=(0,r.useContext)(V.Z);a.storeChange(t,e.handle);var n="https://www.cocoandeve.com",i=a.price,l=a.compareAtPrice,d=a.saving,o=a.title1,g=a.title2,m=a.description,b=a.handle,h=a.shades,p=(0,r.useState)(null),u=(0,s.Z)(p,2),f=u[0],j=u[1],x=(0,r.useState)(1),y=(0,s.Z)(x,2),v=y[0],w=y[1],S=(0,r.useState)(""),E=(0,s.Z)(S,2),N=E[0],k=E[1],_=(0,r.useState)(n),O=(0,s.Z)(_,2),q=O[0],Q=O[1];(0,r.useEffect)((function(){L()}),[v,f]),(0,r.useEffect)((function(){L(),h.length>0&&null===f&&(j(h[0].swatch),k(h[0].text))}),[a]);var F=function(e){var t=e.target.getAttribute("data-id");if(h.length>0){var a=h.find((function(e){return e.swatch===t}));k(a.text),j(a.swatch)}},L=function(){var e="".concat(n,"?lp_handle=").concat(b,"&lp_quantity=").concat(v);e=h.length>0&&null!==f?"".concat(e,"&lp_swatch=").concat(f):e,Q(e)},M=function(){"function"===typeof ga&&window.ga("send","event",{eventCategory:"Add to Cart",eventAction:"lp_pdp_cta",eventLabel:b,eventValue:0}),window.location.href=q};return setTimeout((function(){var e=document.querySelector(".product-swatch-mobile"),t=document.querySelector(".product-swatch-mobile__trigger");if(t&&e){new IntersectionObserver((function(t){t.forEach((function(t){window.innerWidth<768&&(t.isIntersecting?e.classList.remove("show"):e.classList.add("show"))}))})).observe(t)}}),500),(0,c.jsx)("div",{className:"product-form container px-g mb-0 mt-lg-4",children:(0,c.jsxs)("div",{className:"row align-items-start",children:[(0,c.jsx)(A,{handle:e.handle}),(0,c.jsxs)("div",{className:"col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column text-center text-lg-start",children:[(0,c.jsx)("p",{className:"font-size-lg mb-1 order-lg-1",children:o}),(0,c.jsx)("h1",{className:"mb-1 mb-lg-2 order-lg-1",children:g}),(0,c.jsxs)("div",{className:"d-flex mb-0 mb-lg-1 justify-content-center justify-content-lg-start order-lg-0",children:[(0,c.jsx)(H.Z,{score:4.8}),(0,c.jsxs)("span",{className:"d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1",children:[(0,c.jsx)("span",{className:"d-none d-lg-inline-block",children:"4.8 stars"})," ",(0,c.jsx)("a",{className:"link-secondary text-underline",href:"https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set#write-a-review",children:"(220)"})]})]}),(0,c.jsx)("p",{className:"font-size-lg d-none d-lg-block order-lg-2",dangerouslySetInnerHTML:{__html:m}}),(0,c.jsxs)("p",{className:"my-1 order-lg-2 d-block",children:[""!==l&&(0,c.jsx)("span",{className:"text-linethrough mr-25 text-muted h2 d-inline-block mb-0 me-1",children:l}),(0,c.jsx)("span",{className:"mr-25 text-nowrap h2 d-inline-block mb-0",children:i}),""!==d&&(0,c.jsxs)("span",{className:"text-primary text-nowrap text-save p-1 h2 fw-normal d-inline-block mb-0 py-0",children:["(",d,")"]})]}),h.length>0&&(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("hr",{className:"mb-2 bg-primary-light-second mt-0 order-lg-2 d-none d-lg-block"}),(0,c.jsxs)("div",{className:"d-grid gap-2 justify-content-center justify-content-lg-start d-md-flex mb-lg-2 align-items-center order-lg-2",children:[(0,c.jsx)("div",{className:"product-swatch d-flex align-items-center justify-content-center",children:h.map((function(e){return(0,c.jsx)("button",{type:"button",onClick:F,"data-variant":!0,className:"variant-swatch ".concat(e.class," ").concat(f===e.swatch?"border-primary":""),"data-id":e.swatch},e.id)}))}),(0,c.jsx)("span",{className:"mb-1 mb-lg-0 mg-lg-0",children:N})]})]}),(0,c.jsxs)("p",{className:"d-none bg-gray-100 p-1 rounded mb-2 order-lg-2",children:["Not sure which shade to get? Check our ",(0,c.jsx)("a",{href:"",children:"Shades Guide"})]}),(0,c.jsx)("div",{className:"product-swatch-mobile__trigger order-lg-3",children:(0,c.jsx)("div",{className:"product-form-submit mb-3 position-relative",children:(0,c.jsxs)("div",{className:"d-flex",children:[(0,c.jsx)("div",{className:"react-quantity-box d-none d-lg-block",children:(0,c.jsx)(R.Z,{quantity:"1",onChangeQuantity:function(e){w(e)}})}),(0,c.jsx)("button",{className:"btn btn-lg btn-primary ms-lg-g w-100 text-white",type:"submit",onClick:M,children:a.atc},"ProductFormButton2")]})})}),(0,c.jsx)("hr",{className:"mb-2 bg-primary-light-second mt-0 order-lg-2"}),(0,c.jsx)("h2",{className:"d-block d-lg-none order-lg-2",children:"All you need for a perfect tan"}),(0,c.jsx)("ul",{className:"list-unstyled row mb-4 text-start order-lg-2",children:"sunny-honey-bali-bronzing-self-tan-set"===b?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(G.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula1]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(W.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula2]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(K.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula3]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(X.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula4]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center",children:[(0,c.jsx)(z,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula5]})]}):(0,c.jsxs)(r.Fragment,{children:[(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(C.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula1]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(Z.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula2]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(I.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula3]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(P.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula4]})]})}),(0,c.jsx)("div",{className:"fixed-bottom d-lg-none mx-g mb-2 product-swatch-mobile",children:(0,c.jsxs)("button",{className:"d-flex btn btn-primary btn-lg px-2 w-100",onClick:M,children:[(0,c.jsx)("span",{className:"text-white w-100 m-0 d-block text-start",children:"Add to cart"}),(0,c.jsxs)("p",{className:"d-block m-0",children:[(0,c.jsx)("span",{className:"text-white text-linethrough mr-25 text-nowrap fw-normal",children:l}),(0,c.jsx)("span",{className:"text-white mr-25 text-nowrap ms-1",children:i})]})]})})]})]})})},F=(a(26),a(4753)),L=a(4504),M=a(3105),B=(a(3033),a(3184)),D=(0,r.lazy)((function(){return a.e(190).then(a.bind(a,190))})),T=(0,r.lazy)((function(){return a.e(862).then(a.bind(a,8862))})),U=(0,r.lazy)((function(){return a.e(932).then(a.bind(a,9932))})),Y=(0,r.lazy)((function(){return a.e(264).then(a.bind(a,6264))})),J=function(e){return(0,c.jsxs)(F.Z,{children:[(0,c.jsx)(Q,{range:e.range,handle:e.handle}),(0,c.jsxs)(r.Suspense,{fallback:(0,c.jsx)("div",{}),children:["repairing-restoring-hair-mask"!==e.handle&&(0,c.jsx)(M.Z,{children:(0,c.jsx)(D,{range:e.range})}),";",(0,c.jsx)(T,{handle:e.handle}),(0,c.jsx)(B.Z,{children:(0,c.jsx)(Y,{range:e.range})}),(0,c.jsx)(L.Z,{children:(0,c.jsx)(U,{range:e.range,handle:e.handle})})]})]})}}}]);
//# sourceMappingURL=757.b7a94a67.chunk.js.map