"use strict";(self.webpackChunkcocoandeve_react=self.webpackChunkcocoandeve_react||[]).push([[476],{9897:function(t,n,e){e.d(n,{Z:function(){return c}});var a=e(5671),r=e(3144),s=e(9340),o=e(4876),i=e(7313),u=e(6417),c=function(t){(0,s.Z)(e,t);var n=(0,o.Z)(e);function e(t){var r;return(0,a.Z)(this,e),(r=n.call(this,t)).onAddQuantity=function(t){t.preventDefault();var n=parseInt(r.state.quantity,10);n<99&&r.setState({quantity:n+1},(function(){r.props.onChangeQuantity(r.state.quantity)}))},r.onSubtractQuantity=function(t){t.preventDefault();var n=parseInt(r.state.quantity,10);r.state.quantity>1&&r.setState({quantity:n-1},(function(){r.props.onChangeQuantity(r.state.quantity)}))},r.onFocus=function(t){},r.onChangeQuantity=function(t){var n=t.target.value,e=t.nativeEvent,a=parseInt(n,10);if("e"!==e.data){(""===n||a<1)&&r.setState({quantity:"".concat(1)})}},r.state={quantity:"".concat(t.quantity)},r}return(0,r.Z)(e,[{key:"render",value:function(){return(0,u.jsxs)("div",{className:"quantity-box d-flex","data-inventory":this.props.productStock,"data-id":this.props.productId,children:[(0,u.jsx)("button",{className:"input-group-text bg-transparent border-end-0 rounded-lg rounded-right-0 border-dark flex-grow-0",type:"button","aria-label":"Add Subtract",disabled:1===this.state.prevQuantity,onClick:this.onSubtractQuantity,"data-cy":"cart-subtract-quantity-icon",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"svg",children:(0,u.jsx)("path",{d:"M17.543 11.029H2.1A1.032 1.032 0 011.071 10c0-.566.463-1.029 1.029-1.029h15.443c.566 0 1.029.463 1.029 1.029 0 .566-.463 1.029-1.029 1.029z"})})}),(0,u.jsx)("input",{type:"number",name:this.props.name,className:"form-control border-start-0 border-end-0 rounded-0 p-0 text-center flex-grow-0 bg-transparent text-body border-dark font-size-dt-lg",value:this.state.quantity,onChange:this.onChangeQuantity,onFocus:this.onFocus,readOnly:!this.props.editable}),(0,u.jsx)("button",{className:"input-group-text bg-transparent border-start-0 rounded-lg rounded-left-0 border-dark flex-grow-0",type:"button","aria-label":"Add Quantity",disabled:!1,onClick:this.onAddQuantity,"data-cy":"cart-add-quantity-icon",children:(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:"svg",children:(0,u.jsx)("path",{d:"M17.409 8.929h-6.695V2.258c0-.566-.506-1.029-1.071-1.029s-1.071.463-1.071 1.029v6.671H1.967C1.401 8.929.938 9.435.938 10s.463 1.071 1.029 1.071h6.605V17.7c0 .566.506 1.029 1.071 1.029s1.071-.463 1.071-1.029v-6.629h6.695c.566 0 1.029-.506 1.029-1.071s-.463-1.071-1.029-1.071z"})})})]})}}],[{key:"getDerivedStateFromProps",value:function(t,n){return{lastStock:!1}}}]),e}(i.Component)},1476:function(t,n,e){e.r(n);var a=e(9897),r=e(6417);n.default=function(){var t="/range-tan/"===window.location.pathname;return(0,r.jsx)("footer",{className:"pt-md-6 pb-md-6 pt-2 pt-lg-4 pb-1 bg-secondary text-white",children:(0,r.jsxs)("div",{className:"container px-g",children:[(0,r.jsx)("hr",{}),(0,r.jsx)("p",{className:"d-flex justify-content-center align-items-baseline",children:"\xa9 2022 Coco&Eve "}),t&&(0,r.jsx)("div",{className:"d-none",children:(0,r.jsx)(a.Z,{})})]})})}}}]);