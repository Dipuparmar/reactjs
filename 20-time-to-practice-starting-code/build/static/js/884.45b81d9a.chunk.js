"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[884],{884:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(152),s=n(791),u=n(880),o="Card_card__9h8Dh",a=n(184),c=function(e){return(0,a.jsx)("div",{className:o,children:e.children})},i=n(556),l="QuoteForm_form__ogBoi",d="QuoteForm_loading__gyIuQ",h="QuoteForm_control__8SqBM",f="QuoteForm_actions__I8AC6",x=function(e){var t=(0,s.useState)(!1),n=(0,r.Z)(t,2),o=n[0],x=n[1],m=(0,s.useRef)(),_=(0,s.useRef)();return(0,a.jsxs)(s.Fragment,{children:[(0,a.jsx)(u.NL,{when:o,message:function(){return"are you sure you want to leave ????"}}),(0,a.jsx)(c,{children:(0,a.jsxs)("form",{onFocus:function(){x(!0)},className:l,onSubmit:function(t){t.preventDefault();var n=m.current.value,r=_.current.value;e.onAddQuote({author:n,text:r})},children:[e.isLoading&&(0,a.jsx)("div",{className:d,children:(0,a.jsx)(i.Z,{})}),(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("label",{htmlFor:"author",children:"Author"}),(0,a.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,a.jsxs)("div",{className:h,children:[(0,a.jsx)("label",{htmlFor:"text",children:"Text"}),(0,a.jsx)("textarea",{id:"text",rows:"5",ref:_})]}),(0,a.jsx)("div",{className:f,children:(0,a.jsx)("button",{onClick:function(){x(!1)},className:"btn",children:"Add Quote"})})]})})]})},m=n(995),_=n(853),j=function(){var e=(0,m.Z)(_.KP),t=e.sendRequest,n=e.status,r=(0,u.k6)();(0,s.useEffect)((function(){"completed"===n&&r.push("/quotes")}),[n,r]);return(0,a.jsx)(x,{isLoading:"pending"===n,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=884.45b81d9a.chunk.js.map