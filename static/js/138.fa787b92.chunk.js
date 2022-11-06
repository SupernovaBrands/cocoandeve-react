"use strict";(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[138],{9897:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(5671),r=a(3144),s=a(136),c=a(9388),l=a(7313),i=a(6417),d=function(e){(0,s.Z)(a,e);var t=(0,c.Z)(a);function a(e){var r;return(0,n.Z)(this,a),(r=t.call(this,e)).onAddQuantity=function(e){e.preventDefault();var t=parseInt(r.state.quantity,10);t<99&&r.setState({quantity:t+1},(function(){r.props.onChangeQuantity(r.state.quantity)}))},r.onSubtractQuantity=function(e){e.preventDefault();var t=parseInt(r.state.quantity,10);r.state.quantity>1&&r.setState({quantity:t-1},(function(){r.props.onChangeQuantity(r.state.quantity)}))},r.onFocus=function(e){},r.onChangeQuantity=function(e){var t=e.target.value,a=e.nativeEvent,n=parseInt(t,10);if("e"!==a.data){(""===t||n<1)&&r.setState({quantity:"".concat(1)})}},r.state={quantity:"".concat(e.quantity)},r}return(0,r.Z)(a,[{key:"render",value:function(){return(0,i.jsxs)("div",{className:"quantity-box d-flex","data-inventory":this.props.productStock,"data-id":this.props.productId,children:[(0,i.jsx)("button",{className:"input-group-text bg-transparent border-end-0 rounded-lg rounded-right-0 border-dark flex-grow-0",type:"button","aria-label":"Add Subtract",disabled:1===this.state.prevQuantity,onClick:this.onSubtractQuantity,"data-cy":"cart-subtract-quantity-icon",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"svg",children:(0,i.jsx)("path",{d:"M17.543 11.029H2.1A1.032 1.032 0 011.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"})})}),(0,i.jsx)("input",{type:"number",name:this.props.name,className:"form-control border-start-0 border-end-0 rounded-0 p-0 text-center flex-grow-0 bg-transparent text-body border-dark font-size-dt-lg",value:this.state.quantity,onChange:this.onChangeQuantity,onFocus:this.onFocus,readOnly:!this.props.editable}),(0,i.jsx)("button",{className:"input-group-text bg-transparent border-start-0 rounded-lg rounded-left-0 border-dark flex-grow-0",type:"button","aria-label":"Add Quantity",disabled:!1,onClick:this.onAddQuantity,"data-cy":"cart-add-quantity-icon",children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"svg",children:(0,i.jsx)("path",{d:"M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"})})})]})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{lastStock:!1}}}]),a}(l.Component)},2138:function(e,t,a){a.r(t),a.d(t,{default:function(){return se}});var n,r=a(7313),s=a(885),c=a(6417),l=function(e){var t=function(e){e.onload=null;var t=e.closest(".bg-shimmer");t.classList.add("bg-shimmer--loaded"),setTimeout((function(){t.classList.remove("bg-shimmer","bg-shimmer--loaded")}),400)};return(0,r.useEffect)((function(){document.querySelectorAll(".bg-shimmer img").forEach((function(e){e.complete?t(e):e.onload=function(){t(e)}}))}),[]),(0,c.jsx)("div",{className:"carousel-item ".concat(0===e.index?"active":""),children:(0,c.jsxs)("picture",{className:"bg-shimmer ratio ratio-1x1 w-100 d-block",children:[(0,c.jsx)("source",{type:"image/webp",srcSet:"".concat(e.webp,"/828x")}),(0,c.jsx)("source",{type:"image/webp",srcSet:"".concat(e.webp,"/1140x"),media:"(min-width: 992px)"}),(0,c.jsx)("source",{type:"image/jpeg",srcSet:"".concat(e.jpg,"/828x")}),(0,c.jsx)("source",{type:"image/jpeg",srcSet:"".concat(e.jpg,"/1140x"),media:"(min-width: 992px)"}),e.lazy?(0,c.jsx)("img",{src:"".concat(e.jpg,"/828x"),alt:"",className:"w-100 embed-responsive-item fit--cover"}):(0,c.jsx)("img",{src:"".concat(e.jpg,"/828x"),alt:"",className:"w-100 embed-responsive-item fit--cover",loading:"lazy"})]})})},i=a(2843),d=a(6592),o={"sunny-honey-bali-bronzing-self-tan-set":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/076fb4a7-a3d0-4b7f-4f8c-3f26d0460400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e673f56-7011-41f4-0076-c4fe81e67000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1950f6db-f70a-4680-fe91-de8248953400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c230678d-097c-4c4e-35ee-2df25efcba00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/9e7d1cb9-0d18-4755-6037-d860c7a02e00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/979c96b6-c8d1-44eb-b08c-ce31a8d86500"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92fce513-c585-48fe-1a42-b5cc3cbbf700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5b4fe917-bc28-48aa-aec2-5e6620e71600"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5d1b97ef-e9e5-439c-23e1-4ef0c885cc00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4326a114-43dc-438e-c394-d92615239b00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8aaabdcd-fde4-4e41-daba-10ef508e5d00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b248874b-dca6-44ba-85c9-cd5a70a6ec00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/79303a66-7bf3-4244-0974-544d8bb53400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b568e2c7-9c2b-41b9-0950-78394c86ab00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1105da83-a237-4ac5-132f-bcd15143c100",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/09e14d12-2fdb-4d92-4aa9-c9005d99a600"}],"deep-condition-bundle":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/18a41d7d-60e3-4fab-05e0-e86402a9a500",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2904a7b6-0289-47be-78fc-981eec823d00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0d370dd9-70e0-4048-f63a-f7669f4a0200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1d19a70f-25dc-45d4-b2e9-ade6275cd000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/77d75a23-c302-4968-8afd-b782a3316700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bf5675b1-f3c8-4a5a-e26f-e8a801b6ab00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/34a76b43-50c0-45f0-4c95-69139003d800",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4b80f6e9-31c2-45c4-e92d-5aa26541ad00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f103ea34-056f-4c82-7ed4-0742f84c1700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e1f5adb8-486f-45a0-c689-b12fd388b300"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/372f3617-2106-4869-4bf4-88f2dca2a900",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/372f3617-2106-4869-4bf4-88f2dca2a900"}],"repairing-restoring-hair-mask":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3ed24490-09e3-4e72-2657-924079d27700",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/54628144-21c4-4b15-f000-67fdf6c47200"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f4309ac2-4495-47e9-5a1b-a76458a65400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/420fc5e8-24b1-4a99-3943-7902f0114000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b023aa38-648b-495c-f740-4481e8030800",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6db11430-c025-4742-3e96-22cb483a7900"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1e6af0e5-8dd9-44b5-80d2-de2fcd8ef200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/82bcb15d-0b0b-4933-fe69-49730cb49000"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/49549f67-421f-4801-3546-1c060763b200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1dfb54e3-f067-488a-96ab-13b8b13da600"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7c0c0a62-e2ea-4be3-c508-010483745100",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/40782909-fd9f-45b7-4c26-e4bda905f700"}],"shampoo-conditioner-set":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83693b27-bd85-4f7d-6593-f016800dbf00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fe1a2a20-c5f7-4ebe-26ac-6218b5e72500",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b7cddaeb-5c6e-4635-f93b-d0ed6019c100"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/85a52dfa-5e07-4cc9-8c79-81c91f121b00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/93e20bc0-f7a0-4ab0-b0cc-d3a7deaffa00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/02ed2697-bed7-4142-059c-eac57a93e200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/7265926a-0908-4ea1-b2ba-e5faa809b800"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/08062616-4678-4a29-a92a-d0b7e4c98000",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/676223d9-65cb-4599-2850-9f4ae6c4a700"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/93e84415-f8d3-4f40-3b67-8ec8ff099b00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/35ae21e6-b6b5-4970-6022-bb380de9d100"}],"super-nourishing-coconut-fig-hair-masque":[{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f04223a6-b140-4620-46d4-8e2f39bd2f00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1ef295e7-79f5-4800-2f0c-39cfe79e7700"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/64a352ae-5435-4859-01d9-5f3140fa3200",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bd14eace-2a4e-447f-30ef-242de1163f00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4c18d133-f17b-4a8e-c467-284d56d67100",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/703246b1-2fc6-4ae5-8bec-d63ac6388d00"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d4982b82-e9aa-4c15-433c-9e4941d29400",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/64817c85-8736-4f7d-49bc-10263071e100"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bc504642-9bd6-42bf-f0c1-56bc983abc00",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae44521e-a1c8-4394-669e-898ce437a600"},{jpg:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e72eb435-a27d-4877-01ff-e85476e9e500",webp:"https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/727f2c40-a535-4264-fcc2-e593f1d48300"}]},g=a(3946),m=a(5201),h=["title","titleId"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},b.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){var a=e.title,s=e.titleId,c=p(e,h);return r.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",ref:t,"aria-labelledby":s},c),a?r.createElement("title",{id:s},a):null,n||(n=r.createElement("path",{d:"M20.7 17.2l-9.4-9.4-9.4 9.4L0 15.3 11.3 4l11.3 11.3-1.9 1.9z"})))}var u,j=r.forwardRef(f),x=(a.p,["title","titleId"]);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function w(e,t){var a=e.title,n=e.titleId,s=v(e,x);return r.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.6 22.6",ref:t,"aria-labelledby":n},s),a?r.createElement("title",{id:n},a):null,u||(u=r.createElement("path",{d:"M1.9 5.4l9.4 9.4 9.4-9.4 1.9 1.9-11.3 11.3L0 7.3l1.9-1.9z"})))}var S,E=r.forwardRef(w),N=(a.p,function(e){(0,i.Z)("product-image-carousel__indicator"),(0,r.useEffect)((function(){(0,d.Z)("product-image-carousel")}),[]);var t=o[e.handle];return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("div",{className:"product-image-carousel__container col-12 col-lg-6 order-lg-2",children:(0,c.jsxs)("figure",{id:"product-image-carousel",className:"product-image-carousel carousel slide mb-1 mb-lg-0 g-0__in-container","data-bs-ride":"carousel","data-bs-interval":"false","data-bs-touch":"false",children:[(0,c.jsx)("div",{className:"carousel-inner",children:t.map((function(e,t){return(0,c.jsx)(l,{jpg:e.jpg,webp:e.webp,index:t,lazy:0===t},e.jpg)}))},"div-carousel-1"),(0,c.jsx)("div",{className:"carousel-indicators d-lg-none",children:t.map((function(e,t){return(0,c.jsx)("button",{type:"button","data-bs-target":"#product-image-carousel","data-bs-slide-to":t,className:"rounded-circle bg-gray-800 border-gray-800 ".concat(0===t?"active":"")},e.jpg)}))},"div-carousel-2"),(0,c.jsx)("button",{className:"carousel-control-prev d-block d-lg-none",type:"button","data-bs-target":"#product-image-carousel","data-bs-slide":"prev",children:(0,c.jsx)(g.r,{className:"text-primary svg"})},"btn1"),(0,c.jsx)("button",{className:"carousel-control-next d-block d-lg-none",type:"button","data-bs-target":"#product-image-carousel","data-bs-slide":"next",children:(0,c.jsx)(m.r,{className:"text-primary svg"})},"btn2")]})},"product-image-carousel__container"),(0,c.jsxs)("div",{id:"product-image-carousel__indicator",className:"product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g  d-none d-lg-block","data-bs-slide-number":"5","data-bs-ride":"carousel","data-bs-interval":"false",children:[(0,c.jsx)("button",{className:"carousel-indicator chevron-up btn-unstyled d-none d-lg-flex mx-auto mb-1 mb-lg-3 text-center align-items-center","data-bs-slide":"prev","data-bs-target":"#product-image-carousel__indicator",disabled:!0,children:(0,c.jsx)(j,{className:"svg text-primary"})},"btn4"),(0,c.jsx)("div",{className:"carousel-inner d-flex flex-nowrap flex-lg-column",children:t.map((function(e,t){return(0,c.jsx)("div",{"data-bs-target":"#product-image-carousel","data-bs-slide-to":t,className:"product-image-carousel__indicator__item carousel-item col-12 px-lg-0 pb-lg-3 mw-100 ".concat(0===t?"active":""),children:(0,c.jsx)("button",{className:"btn-unstyled border d-block w-100 ".concat("border-white"),children:(0,c.jsxs)("picture",{className:"ratio ratio-1x1 w-100 d-block bg-shimmer",children:[(0,c.jsx)("source",{type:"image/webp",srcSet:"".concat(e.webp,"/200x")}),(0,c.jsx)("source",{type:"image/jpeg",srcSet:"".concat(e.jpg,"/200x")}),(0,c.jsx)("img",{src:"".concat(e.jpg,"/200x"),loading:"lazy"})]})})},e.jpg)}))},"carousel-inner"),(0,c.jsx)("button",{className:"carousel-indicator chevron-down btn-unstyled d-none d-lg-flex mx-auto mt-1 mt-lg-3 text-center align-items-center","data-bs-slide":"next","data-bs-target":"#product-image-carousel__indicator",children:(0,c.jsx)(E,{className:"svg text-primary"})},"btn3")]},"product-image-carousel__indicator")]})}),A=a(9897),H=a(2244),R=a(9056),V=a(4118),W=a(2498),G=a(36),k=a(7304),K=["title","titleId"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function _(e,t){var a=e.title,n=e.titleId,s=O(e,K);return r.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:42,height:42,viewBox:"0 0 168.000000 168.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":n},s),a?r.createElement("title",{id:n},a):null,S||(S=r.createElement("g",{transform:"translate(0.000000,168.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.createElement("path",{d:"M816 1665 c-183 -47 -344 -208 -385 -385 -6 -25 -11 -123 -11 -217 0 -95 -4 -173 -8 -173 -5 0 -17 10 -28 21 -63 71 -205 76 -277 11 -57 -51 -77 -164 -42 -232 10 -19 64 -82 120 -140 147 -153 201 -260 228 -455 l12 -90 515 0 515 0 10 33 c9 30 12 32 58 32 26 0 57 5 69 11 24 13 50 71 42 96 -21 64 -47 83 -119 83 l-45 0 0 89 c0 100 -14 130 -51 111 -16 -9 -19 -22 -19 -85 l0 -75 -484 0 -484 0 -16 42 c-31 75 -102 173 -202 278 l-99 103 0 53 c0 60 25 96 83 121 56 23 96 8 173 -64 105 -100 103 -104 109 182 7 275 14 307 98 418 90 117 214 177 366 177 212 0 387 -136 442 -343 10 -38 14 -122 14 -304 0 -239 1 -253 19 -263 15 -8 24 -6 36 7 15 15 16 44 13 277 -4 232 -7 268 -26 326 -70 215 -255 356 -476 366 -60 2 -111 -1 -150 -11z m584 -1515 l0 -80 -459 0 -458 0 -6 48 c-3 26 -9 62 -13 80 l-6 32 471 0 471 0 0 -80z m161 34 c21 -25 -1 -49 -50 -52 -41 -3 -41 -3 -41 32 0 35 1 36 39 36 23 0 44 -6 52 -16z"}),r.createElement("path",{d:"M1404 595 c-9 -23 3 -45 24 -45 29 0 48 26 32 45 -7 8 -21 15 -32 15 -10 0 -21 -7 -24 -15z"}))))}var Z,z,q,C=r.forwardRef(_),I=(a.p,a(5924)),M=a(7258),P=a(1304),Q=a(3310),L=["title","titleId"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},F.apply(this,arguments)}function B(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function T(e,t){var a=e.title,n=e.titleId,s=B(e,L);return r.createElement("svg",F({fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 34",ref:t,"aria-labelledby":n},s),a?r.createElement("title",{id:n},a):null,Z||(Z=r.createElement("mask",{id:"a",maskUnits:"userSpaceOnUse",x:0,y:-.8,width:44,height:35,fill:"#000"},r.createElement("path",{fill:"#fff",d:"M0-.8h44v35H0z"}),r.createElement("path",{d:"M22 33.8c-3.15 0-4.27-2.63-4.27-4.91.03-1.38.29-2.75.75-4.05.49-1.32.75-2.72.77-4.12a1.72 1.72 0 0 0-.53-1.26 1.8 1.8 0 0 0-1.29-.52H1.47a.47.47 0 0 1-.34-.13.45.45 0 0 1-.13-.33.45.45 0 0 1 .14-.32.47.47 0 0 1 .33-.14h15.96a2.75 2.75 0 0 1 1.97.77 2.62 2.62 0 0 1 .8 1.93c-.03 1.5-.3 2.98-.82 4.4a11.8 11.8 0 0 0-.7 3.77c0 .93.23 3.94 3.33 3.94 3.09 0 3.32-3.06 3.32-3.94a11.8 11.8 0 0 0-.71-3.77c-.51-1.42-.79-2.9-.81-4.4a2.57 2.57 0 0 1 .79-1.93 2.7 2.7 0 0 1 1.97-.77h15.96a.48.48 0 0 1 .33.14.46.46 0 0 1 0 .65.46.46 0 0 1-.33.13H26.57a1.84 1.84 0 0 0-1.3.52 1.76 1.76 0 0 0-.52 1.26c.02 1.4.28 2.8.77 4.12.48 1.3.74 2.67.78 4.05 0 2.26-1.15 4.91-4.3 4.91ZM17.43 13a.48.48 0 0 1-.33-.13.45.45 0 0 1-.14-.32c0-3.64-1.88-5.5-5.6-5.5a.48.48 0 0 1-.34-.13.45.45 0 0 1 0-.65c.1-.08.21-.13.34-.13 3.72 0 5.6-1.84 5.6-5.48 0-.12.05-.24.14-.33a.48.48 0 0 1 .67 0c.09.1.13.2.13.33 0 3.64 1.9 5.48 5.63 5.48.12 0 .24.05.33.13a.45.45 0 0 1 0 .65.48.48 0 0 1-.33.14c-3.73 0-5.63 1.85-5.63 5.49 0 .12-.04.24-.13.32a.48.48 0 0 1-.34.14Zm-3.16-6.4a5.2 5.2 0 0 1 3.16 3.1 5.05 5.05 0 0 1 3.18-3.1 5.16 5.16 0 0 1-3.18-3.09 4.99 4.99 0 0 1-3.16 3.09ZM28.08 15.98a.48.48 0 0 1-.33-.14.45.45 0 0 1-.14-.32 3.46 3.46 0 0 0-1.03-2.94 3.63 3.63 0 0 0-3-1 .48.48 0 0 1-.33-.14.45.45 0 0 1-.14-.32.44.44 0 0 1 .13-.33.46.46 0 0 1 .34-.13 3.71 3.71 0 0 0 3.02-1.04 3.53 3.53 0 0 0 1.01-2.97c0-.12.05-.24.14-.33a.48.48 0 0 1 .67 0c.08.1.13.2.13.33a3.47 3.47 0 0 0 1.01 2.97 3.64 3.64 0 0 0 3.03 1.04.47.47 0 0 1 .34.13.45.45 0 0 1 .13.33c0 .12-.05.23-.14.32a.48.48 0 0 1-.33.14 3.7 3.7 0 0 0-3 1 3.52 3.52 0 0 0-1.04 2.94c0 .12-.05.23-.13.32a.48.48 0 0 1-.34.14Zm-2.05-4.92c.92.38 1.66 1.1 2.05 2 .4-.9 1.13-1.61 2.05-2a3.87 3.87 0 0 1-2.05-2c-.4.9-1.13 1.62-2.05 2Z"}))),z||(z=r.createElement("path",{d:"M22 33.8c-3.15 0-4.27-2.63-4.27-4.91.03-1.38.29-2.75.75-4.05.49-1.32.75-2.72.77-4.12a1.72 1.72 0 0 0-.53-1.26 1.8 1.8 0 0 0-1.29-.52H1.47a.47.47 0 0 1-.34-.13.45.45 0 0 1-.13-.33.45.45 0 0 1 .14-.32.47.47 0 0 1 .33-.14h15.96a2.75 2.75 0 0 1 1.97.77 2.62 2.62 0 0 1 .8 1.93c-.03 1.5-.3 2.98-.82 4.4a11.8 11.8 0 0 0-.7 3.77c0 .93.23 3.94 3.33 3.94 3.09 0 3.32-3.06 3.32-3.94a11.8 11.8 0 0 0-.71-3.77c-.51-1.42-.79-2.9-.81-4.4a2.57 2.57 0 0 1 .79-1.93 2.7 2.7 0 0 1 1.97-.77h15.96a.48.48 0 0 1 .33.14.46.46 0 0 1 0 .65.46.46 0 0 1-.33.13H26.57a1.84 1.84 0 0 0-1.3.52 1.76 1.76 0 0 0-.52 1.26c.02 1.4.28 2.8.77 4.12.48 1.3.74 2.67.78 4.05 0 2.26-1.15 4.91-4.3 4.91ZM17.43 13a.48.48 0 0 1-.33-.13.45.45 0 0 1-.14-.32c0-3.64-1.88-5.5-5.6-5.5a.48.48 0 0 1-.34-.13.45.45 0 0 1 0-.65c.1-.08.21-.13.34-.13 3.72 0 5.6-1.84 5.6-5.48 0-.12.05-.24.14-.33a.48.48 0 0 1 .67 0c.09.1.13.2.13.33 0 3.64 1.9 5.48 5.63 5.48.12 0 .24.05.33.13a.45.45 0 0 1 0 .65.48.48 0 0 1-.33.14c-3.73 0-5.63 1.85-5.63 5.49 0 .12-.04.24-.13.32a.48.48 0 0 1-.34.14Zm-3.16-6.4a5.2 5.2 0 0 1 3.16 3.1 5.05 5.05 0 0 1 3.18-3.1 5.16 5.16 0 0 1-3.18-3.09 4.99 4.99 0 0 1-3.16 3.09ZM28.08 15.98a.48.48 0 0 1-.33-.14.45.45 0 0 1-.14-.32 3.46 3.46 0 0 0-1.03-2.94 3.63 3.63 0 0 0-3-1 .48.48 0 0 1-.33-.14.45.45 0 0 1-.14-.32.44.44 0 0 1 .13-.33.46.46 0 0 1 .34-.13 3.71 3.71 0 0 0 3.02-1.04 3.53 3.53 0 0 0 1.01-2.97c0-.12.05-.24.14-.33a.48.48 0 0 1 .67 0c.08.1.13.2.13.33a3.47 3.47 0 0 0 1.01 2.97 3.64 3.64 0 0 0 3.03 1.04.47.47 0 0 1 .34.13.45.45 0 0 1 .13.33c0 .12-.05.23-.14.32a.48.48 0 0 1-.33.14 3.7 3.7 0 0 0-3 1 3.52 3.52 0 0 0-1.04 2.94c0 .12-.05.23-.13.32a.48.48 0 0 1-.34.14Zm-2.05-4.92c.92.38 1.66 1.1 2.05 2 .4-.9 1.13-1.61 2.05-2a3.87 3.87 0 0 1-2.05-2c-.4.9-1.13 1.62-2.05 2Z",fill:"#000"})),q||(q=r.createElement("path",{d:"M22 33.8c-3.15 0-4.27-2.63-4.27-4.91.03-1.38.29-2.75.75-4.05.49-1.32.75-2.72.77-4.12a1.72 1.72 0 0 0-.53-1.26 1.8 1.8 0 0 0-1.29-.52H1.47a.47.47 0 0 1-.34-.13.45.45 0 0 1-.13-.33.45.45 0 0 1 .14-.32.47.47 0 0 1 .33-.14h15.96a2.75 2.75 0 0 1 1.97.77 2.62 2.62 0 0 1 .8 1.93c-.03 1.5-.3 2.98-.82 4.4a11.8 11.8 0 0 0-.7 3.77c0 .93.23 3.94 3.33 3.94 3.09 0 3.32-3.06 3.32-3.94a11.8 11.8 0 0 0-.71-3.77c-.51-1.42-.79-2.9-.81-4.4a2.57 2.57 0 0 1 .79-1.93 2.7 2.7 0 0 1 1.97-.77h15.96a.48.48 0 0 1 .33.14.46.46 0 0 1 0 .65.46.46 0 0 1-.33.13H26.57a1.84 1.84 0 0 0-1.3.52 1.76 1.76 0 0 0-.52 1.26c.02 1.4.28 2.8.77 4.12.48 1.3.74 2.67.78 4.05 0 2.26-1.15 4.91-4.3 4.91ZM17.43 13a.48.48 0 0 1-.33-.13.45.45 0 0 1-.14-.32c0-3.64-1.88-5.5-5.6-5.5a.48.48 0 0 1-.34-.13.45.45 0 0 1 0-.65c.1-.08.21-.13.34-.13 3.72 0 5.6-1.84 5.6-5.48 0-.12.05-.24.14-.33a.48.48 0 0 1 .67 0c.09.1.13.2.13.33 0 3.64 1.9 5.48 5.63 5.48.12 0 .24.05.33.13a.45.45 0 0 1 0 .65.48.48 0 0 1-.33.14c-3.73 0-5.63 1.85-5.63 5.49 0 .12-.04.24-.13.32a.48.48 0 0 1-.34.14Zm-3.16-6.4a5.2 5.2 0 0 1 3.16 3.1 5.05 5.05 0 0 1 3.18-3.1 5.16 5.16 0 0 1-3.18-3.09 4.99 4.99 0 0 1-3.16 3.09ZM28.08 15.98a.48.48 0 0 1-.33-.14.45.45 0 0 1-.14-.32 3.46 3.46 0 0 0-1.03-2.94 3.63 3.63 0 0 0-3-1 .48.48 0 0 1-.33-.14.45.45 0 0 1-.14-.32.44.44 0 0 1 .13-.33.46.46 0 0 1 .34-.13 3.71 3.71 0 0 0 3.02-1.04 3.53 3.53 0 0 0 1.01-2.97c0-.12.05-.24.14-.33a.48.48 0 0 1 .67 0c.08.1.13.2.13.33a3.47 3.47 0 0 0 1.01 2.97 3.64 3.64 0 0 0 3.03 1.04.47.47 0 0 1 .34.13.45.45 0 0 1 .13.33c0 .12-.05.23-.14.32a.48.48 0 0 1-.33.14 3.7 3.7 0 0 0-3 1 3.52 3.52 0 0 0-1.04 2.94c0 .12-.05.23-.13.32a.48.48 0 0 1-.34.14Zm-2.05-4.92c.92.38 1.66 1.1 2.05 2 .4-.9 1.13-1.61 2.05-2a3.87 3.87 0 0 1-2.05-2c-.4.9-1.13 1.62-2.05 2Z",stroke:"#000",strokeWidth:.4,mask:"url(#a)"})))}var D=r.forwardRef(T),U=(a.p,function(e){var t=new URL(document.location).searchParams.get("utm_store")||"us",a=(0,r.useContext)(R.Z);a.storeChange(t,e.handle);var n="https://www.cocoandeve.com",l=a.price,i=a.compareAtPrice,d=a.saving,o=a.title1,g=a.title2,m=a.description,h=a.handle,b=a.shades,p=(0,r.useState)(null),f=(0,s.Z)(p,2),u=f[0],j=f[1],x=(0,r.useState)(1),y=(0,s.Z)(x,2),v=y[0],w=y[1],S=(0,r.useState)(""),E=(0,s.Z)(S,2),K=E[0],X=E[1],O=(0,r.useState)(n),_=(0,s.Z)(O,2),Z=_[0],z=_[1];(0,r.useEffect)((function(){L()}),[v,u]),(0,r.useEffect)((function(){L(),b.length>0&&null===u&&(j(b[0].swatch),X(b[0].text))}),[a]);var q=function(e){var t=e.target.getAttribute("data-id");if(b.length>0){var a=b.find((function(e){return e.swatch===t}));X(a.text),j(a.swatch)}},L=function(){var e="".concat(n,"?lp_handle=").concat(h,"&lp_quantity=").concat(v);e=b.length>0&&null!==u?"".concat(e,"&lp_swatch=").concat(u):e,z(e)},F=function(){"function"===typeof ga&&window.ga("send","event",{eventCategory:"Add to Cart",eventAction:"lp_pdp_cta",eventLabel:h,eventValue:0}),window.location.href=Z};return setTimeout((function(){var e=document.querySelector(".product-swatch-mobile"),t=document.querySelector(".product-swatch-mobile__trigger");if(t&&e){new IntersectionObserver((function(t){console.log("entries",t),t.forEach((function(t){window.onscroll=function(a){window.innerWidth<768&&(t.isIntersecting||window.innerHeight+window.pageYOffset>=document.body.offsetHeight?e.classList.remove("show"):e.classList.add("show"))}}))})).observe(t)}}),500),(0,c.jsx)("div",{className:"product-form container px-g mb-0 mt-lg-4",children:(0,c.jsxs)("div",{className:"row align-items-start",children:[(0,c.jsx)(N,{handle:e.handle}),(0,c.jsxs)("div",{className:"col-12 col-lg-5 order-lg-3 mt-2 mt-lg-0 d-flex flex-column text-center text-lg-start",children:[(0,c.jsx)("p",{className:"font-size-lg mb-1 order-lg-1",children:o}),(0,c.jsx)("h1",{className:"mb-1 mb-lg-2 order-lg-1",children:g}),(0,c.jsxs)("div",{className:"d-flex mb-0 mb-lg-1 justify-content-center justify-content-lg-start order-lg-0",children:[(0,c.jsx)(H.Z,{score:4.8}),(0,c.jsxs)("span",{className:"d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1",children:[(0,c.jsx)("span",{className:"d-none d-lg-inline-block",children:"4.8 stars"})," ",(0,c.jsx)("a",{className:"link-secondary text-underline",href:"".concat(n,"/products/").concat(e.handle,"#write-a-review"),children:"(220)"})]})]}),"hair"===e.range?(0,c.jsx)("p",{className:"font-size-lg d-lg-block order-lg-2 mt-1 text-start",dangerouslySetInnerHTML:{__html:m}}):(0,c.jsx)("p",{className:"font-size-lg d-none d-lg-block order-lg-2",dangerouslySetInnerHTML:{__html:m}}),(0,c.jsxs)("p",{className:"my-1 order-lg-2 d-block",children:[""!==i&&(0,c.jsx)("span",{className:"text-linethrough mr-25 h2 d-inline-block mb-0 me-1",children:i}),(0,c.jsx)("span",{className:"mr-25 text-nowrap h2 d-inline-block mb-0",children:l}),""!==d&&(0,c.jsxs)("span",{className:"text-primary text-nowrap text-save p-1 h2 fw-normal d-inline-block mb-0 py-0",children:["(",d,")"]})]}),b.length>0&&(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("hr",{className:"mb-2 bg-primary-light-second mt-0 order-lg-2 d-none d-lg-block"}),(0,c.jsxs)("div",{className:"d-grid gap-2 justify-content-center justify-content-lg-start d-md-flex mb-lg-2 align-items-center order-lg-2",children:[(0,c.jsx)("div",{className:"product-swatch d-flex align-items-center justify-content-center",children:b.map((function(e){return(0,c.jsx)("button",{type:"button",onClick:q,"data-variant":!0,className:"variant-swatch ".concat(e.class," ").concat(u===e.swatch?"border-primary":""),"data-id":e.swatch},e.id)}))}),(0,c.jsx)("span",{className:"mb-1 mb-lg-0 mg-lg-0",children:K})]})]}),(0,c.jsxs)("p",{className:"d-none bg-gray-100 p-1 rounded mb-2 order-lg-2",children:["Not sure which shade to get? Check our ",(0,c.jsx)("a",{href:"",children:"Shades Guide"})]}),(0,c.jsx)("div",{className:"product-swatch-mobile__trigger order-lg-3",children:(0,c.jsx)("div",{className:"product-form-submit mb-3 position-relative",children:(0,c.jsxs)("div",{className:"d-flex",children:[(0,c.jsx)("div",{className:"react-quantity-box d-none d-lg-block",children:(0,c.jsx)(A.Z,{quantity:"1",onChangeQuantity:function(e){w(e)}})}),(0,c.jsx)("button",{className:"btn btn-lg btn-primary ms-lg-g w-100 text-white",type:"submit",onClick:F,children:a.atc},"ProductFormButton2")]})})}),(0,c.jsx)("hr",{className:"mb-2 bg-primary-light-second mt-0 order-lg-2"}),"fr"===t&&(0,c.jsx)("h2",{className:"d-block d-lg-none order-lg-2",children:"tan"===e.range?"All you need for a perfect tan":"Tout ce dont tu as besoin pour des cheveux de r\xeave"}),"de"===t&&(0,c.jsx)("h2",{className:"d-block d-lg-none order-lg-2",children:"tan"===e.range?"All you need for a perfect tan":"Alles, was du f\xfcr perfektes Haar brauchst"}),"de"!==t&&"fr"!==t&&(0,c.jsx)("h2",{className:"d-block d-lg-none order-lg-2",children:"tan"===e.range?"All you need for a perfect tan":"All you need for perfect hair"}),(0,c.jsx)("ul",{className:"list-unstyled row mb-4 text-start order-lg-2",children:"sunny-honey-bali-bronzing-self-tan-set"===h?(0,c.jsxs)(r.Fragment,{children:[(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(V.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula1]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(W.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula2]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(G.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula3]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(k.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula4]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center",children:[(0,c.jsx)(C,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula5]})]}):(0,c.jsxs)(r.Fragment,{children:[(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(I.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula1]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(M.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula2]}),(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(P.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula3]}),"repairing-restoring-hair-mask"===h?(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(D,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula4]}):(0,c.jsxs)("li",{className:"col-12 d-flex align-items-center mb-2",children:[(0,c.jsx)(Q.r,{className:"me-g d-flex flex-shrink-0 justify-content-center"}),a.benefits.formula4]})]})}),(0,c.jsx)("div",{className:"fixed-bottom d-lg-none mx-g mb-2 product-swatch-mobile",children:(0,c.jsxs)("button",{className:"d-flex btn btn-primary btn-lg px-2 w-100",onClick:F,children:[(0,c.jsx)("span",{className:"text-white w-100 m-0 d-block text-start",children:"Add to cart"}),(0,c.jsxs)("p",{className:"d-block m-0",children:[(0,c.jsx)("span",{className:"text-white text-linethrough mr-25 text-nowrap fw-normal",children:i}),(0,c.jsx)("span",{className:"text-white mr-25 text-nowrap ms-1",children:l})]})]})})]})]})})}),Y=(a(8980),a(8115)),J=a(764),$=a(1897),ee=(a(3324),a(170)),te=(0,r.lazy)((function(){return a.e(430).then(a.bind(a,1430))})),ae=(0,r.lazy)((function(){return a.e(669).then(a.bind(a,5669))})),ne=(0,r.lazy)((function(){return a.e(315).then(a.bind(a,315))})),re=(0,r.lazy)((function(){return a.e(289).then(a.bind(a,8289))})),se=function(e){return(0,c.jsxs)(Y.Z,{children:[(0,c.jsx)(U,{range:e.range,handle:e.handle}),(0,c.jsxs)(r.Suspense,{fallback:(0,c.jsx)("div",{}),children:["repairing-restoring-hair-mask"!==e.handle&&(0,c.jsx)($.Z,{children:(0,c.jsx)(te,{range:e.range,handle:e.handle})}),(0,c.jsx)($.Z,{children:(0,c.jsx)(ae,{handle:e.handle,range:e.range})}),(0,c.jsx)(ee.Z,{children:(0,c.jsx)(re,{range:e.range,handle:e.handle})}),(0,c.jsx)(J.Z,{children:(0,c.jsx)(ne,{range:e.range,handle:e.handle})})]})]})}}}]);