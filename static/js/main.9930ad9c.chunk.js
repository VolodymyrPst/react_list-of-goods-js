(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var c=e(5),s=e.n(c),o=e(4),i=e(1),a=e(2),r=e.n(a),l=(e(10),e(11),e(0)),u="alphabetically",b="length",j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(){var t=Object(i.useState)(""),n=Object(o.a)(t,2),e=n[0],c=n[1],s=Object(i.useState)(),a=Object(o.a)(s,2),h=a[0],d=a[1],g=function(){return""===e||h?null:Object(l.jsx)("button",{type:"button",className:r()("button is-danger",{"is-light":""!==e}),onClick:function(){c(""),d(!1)},children:"Reset"})};return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:r()("button is-info",{"is-light":e!==u}),onClick:function(){c(u)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:r()("button is-success",{"is-light":e!==b}),onClick:function(){c(b)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:r()("button is-warning",{"is-light":!h}),onClick:function(){d(!h)},children:"Reverse"}),Object(l.jsx)(g,{})]}),Object(l.jsx)("ul",{children:function(){var t=[].concat(j);return e===u&&(t=[].concat(j).sort((function(t,n){return t.localeCompare(n)}))),e===b&&(t=[].concat(j).sort((function(t,n){return t.length-n.length}))),""===e?j:(h&&(t=t.reverse()),t)}().map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9930ad9c.chunk.js.map