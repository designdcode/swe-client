(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[19],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(128);n(177);a.a.initializeApp({apiKey:"AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",authDomain:"sunmoon-swe.firebaseapp.com",projectId:"sunmoon-swe",storageBucket:"sunmoon-swe.appspot.com",messagingSenderId:"1064857281018",appId:"1:1064857281018:web:b2881ce151e1a16b068443",measurementId:"G-JYK8JT1WEN"});var c=a.a.storage()},124:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var a=function(e){switch(null===e||void 0===e?void 0:e.toString().split("-")[0]){case"storage":case"link":return!0;default:return!1}},c=function(e){switch(null===e||void 0===e?void 0:e.toString().split("-")[0]){case"storage":case"achievement":return!0;default:return!1}},r=function(e){switch(null===e||void 0===e?void 0:e.toString().split("-")[1]){case"aidnews":case"valuenews":case"coopnews":return!0;default:return!1}},o=function(e){switch(null===e||void 0===e?void 0:e.toString().split("-")[0]){case"storage":case"achievement":return!0;default:return!1}},u=function(e){return"introduce"!==(null===e||void 0===e?void 0:e.toString().split("-")[0])}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(44),c=n(110),r=function(e,t,n,r){c.a.ref("/".concat(e,"/").concat(t,"/").concat(n)).delete().then((function(){r("")})).catch((function(e){return a.b.error(e)}))}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(111),c=n(107),r=n.n(c),o=n(44),u=n(110),i=function(e,t,n,c,i,l,s,d,f){u.a.ref("/".concat(e,"/").concat(n,"/").concat(c)).put(t).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){s(1),u.a.ref("/".concat(e,"/").concat(n,"/").concat(c)).getDownloadURL().then(function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(t),!d||!f){e.next=4;break}return e.next=4,d({variables:{url:t,fileName:c,boardId:f}});case 4:o.b.success("\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),s(0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}},140:function(e,t,n){"use strict";var a=n(6),c=n(87),r=n(94),o=n(88),u=n(95),i=n(97),l=n(98),s=n(99),d=n(2),f=n.n(d),b=n(86),p=n.n(b),v=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e){var a;Object(u.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,c=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),c&&c({target:Object(o.a)(Object(o.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var c="checked"in e?e.checked:e.defaultChecked;return a.state={checked:c},a}return Object(i.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,u=t.style,i=t.name,l=t.id,s=t.type,d=t.disabled,b=t.readOnly,v=t.tabIndex,O=t.onClick,j=t.onFocus,h=t.onBlur,m=t.onKeyDown,g=t.onKeyPress,y=t.onKeyUp,x=t.autoFocus,k=t.value,C=t.required,w=Object(r.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),S=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),E=this.state.checked,N=p()(n,o,(e={},Object(c.a)(e,"".concat(n,"-checked"),E),Object(c.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:N,style:u},f.a.createElement("input",Object(a.a)({name:i,id:l,type:s,required:C,readOnly:b,disabled:d,tabIndex:v,className:"".concat(n,"-input"),checked:!!E,onClick:O,onFocus:j,onBlur:h,onKeyUp:y,onKeyDown:m,onKeyPress:g,onChange:this.handleChange,autoFocus:x,ref:this.saveInput,value:k},S)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(o.a)(Object(o.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=v},176:function(e,t,n){"use strict";var a=n(87),c=n(6),r=n(2),o=n(86),u=n.n(o),i=n(140),l=n(92),s=n(89),d=n(101),f=n(153),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},p=r.createContext(null),v=function(e,t){var n=e.defaultValue,o=e.children,i=e.options,v=void 0===i?[]:i,O=e.prefixCls,j=e.className,h=e.style,m=e.onChange,g=b(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),y=r.useContext(f.b),k=y.getPrefixCls,C=y.direction,w=r.useState(g.value||n||[]),S=Object(s.a)(w,2),E=S[0],N=S[1],I=r.useState([]),P=Object(s.a)(I,2),K=P[0],D=P[1];r.useEffect((function(){"value"in g&&N(g.value||[])}),[g.value]);var F=function(){return v.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},U=k("checkbox",O),B="".concat(U,"-group"),R=Object(d.a)(g,["value","disabled"]);v&&v.length>0&&(o=F().map((function(e){return r.createElement(x,{prefixCls:U,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:-1!==E.indexOf(e.value),onChange:e.onChange,className:"".concat(B,"-item"),style:e.style},e.label)})));var M={toggleOption:function(e){var t=E.indexOf(e.value),n=Object(l.a)(E);-1===t?n.push(e.value):n.splice(t,1),"value"in g||N(n);var a=F();null===m||void 0===m||m(n.filter((function(e){return-1!==K.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:E,disabled:g.disabled,name:g.name,registerValue:function(e){D((function(t){return[].concat(Object(l.a)(t),[e])}))},cancelValue:function(e){D((function(t){return t.filter((function(t){return t!==e}))}))}},V=u()(B,Object(a.a)({},"".concat(B,"-rtl"),"rtl"===C),j);return r.createElement("div",Object(c.a)({className:V,style:h},R,{ref:t}),r.createElement(p.Provider,{value:M},o))},O=r.forwardRef(v),j=r.memo(O),h=n(100),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},g=function(e,t){var n,o=e.prefixCls,l=e.className,s=e.children,d=e.indeterminate,b=void 0!==d&&d,v=e.style,O=e.onMouseEnter,j=e.onMouseLeave,g=e.skipGroup,y=void 0!==g&&g,x=m(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),k=r.useContext(f.b),C=k.getPrefixCls,w=k.direction,S=r.useContext(p),E=r.useRef(x.value);r.useEffect((function(){null===S||void 0===S||S.registerValue(x.value),Object(h.a)("checked"in x||!!S||!("value"in x),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),r.useEffect((function(){if(!y)return x.value!==E.current&&(null===S||void 0===S||S.cancelValue(E.current),null===S||void 0===S||S.registerValue(x.value)),function(){return null===S||void 0===S?void 0:S.cancelValue(x.value)}}),[x.value]);var N=C("checkbox",o),I=Object(c.a)({},x);S&&!y&&(I.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),S.toggleOption&&S.toggleOption({label:s,value:x.value})},I.name=S.name,I.checked=-1!==S.value.indexOf(x.value),I.disabled=x.disabled||S.disabled);var P=u()((n={},Object(a.a)(n,"".concat(N,"-wrapper"),!0),Object(a.a)(n,"".concat(N,"-rtl"),"rtl"===w),Object(a.a)(n,"".concat(N,"-wrapper-checked"),I.checked),Object(a.a)(n,"".concat(N,"-wrapper-disabled"),I.disabled),n),l),K=u()(Object(a.a)({},"".concat(N,"-indeterminate"),b));return r.createElement("label",{className:P,style:v,onMouseEnter:O,onMouseLeave:j},r.createElement(i.a,Object(c.a)({},I,{prefixCls:N,className:K,ref:t})),void 0!==s&&r.createElement("span",null,s))},y=r.forwardRef(g);y.displayName="Checkbox";var x=y,k=x;k.Group=j,k.__ANT_CHECKBOX=!0;t.a=k},411:function(e,t,n){"use strict";n.r(t);var a,c=n(96),r=n(88),o=n(92),u=n(111),i=n(89),l=n(107),s=n.n(l),d=n(2),f=n(142),b=n.n(f),p=n(4),v=n(124),O=n(405),j=n(108),h=n(126),m=n(44),g=n(416),y=n(176),x=n(397),k=n(413),C=n(174),w=n(429),S=n(130),E=n(135),N=n(110),I=n(134),P=n(103),K=n(11),D={wrapperCol:{span:16}};t.default=function(){var e=Object(p.g)(),t=Object(p.h)().search,n=b.a.parse(t),a=n.category,c=n.param,l=n.subparam,f=Object(h.a)(""),P=Object(i.a)(f,3),U=P[0],B=P[1],R=P[2],M=Object(d.useState)(!1),V=Object(i.a)(M,2),q=V[0],L=V[1],J=Object(d.useState)([]),_=Object(i.a)(J,2),G=_[0],T=_[1],Y=Object(d.useState)(),A=Object(i.a)(Y,2),z=A[0],H=A[1],W=Object(d.useState)(),X=Object(i.a)(W,2),Z=X[0],Q=X[1],$=Object(d.useState)(!1),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ae=Object(d.useState)(!1),ce=Object(i.a)(ae,2),re=ce[0],oe=ce[1],ue=Object(d.useState)(0),ie=Object(i.a)(ue,2),le=ie[0],se=ie[1],de=Object(d.useState)(!1),fe=Object(i.a)(de,2),be=(fe[0],fe[1]),pe=Object(d.useState)(!1),ve=Object(i.a)(pe,2),Oe=ve[0],je=ve[1];Object(d.useEffect)((function(){ne(Object(v.d)(l)),oe(Object(v.b)(l))}),[l]);var he=Object(O.a)(j.a,{onCompleted:function(t){var n=t.createBoard,a=n.ok,r=n.err;a?(R(""),m.b.success("\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"),e.push({pathname:"/admin/".concat(c,"/").concat(l),state:{refresh:!0}})):(console.log(r),m.b.error("\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"))}}),me=Object(i.a)(he,1)[0],ge=Object(d.useCallback)((function(){L(!q),q||R("")}),[q,R,L]),ye=Object(d.useCallback)(Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me({variables:{link:U.trim()?U.includes("http")?U:"http://".concat(U):null,category:a,files:0!==G.length?G:null,images:null!==z&&void 0!==z&&z.trim()?[{url:z,fileName:Z}]:null}});case 2:be(!1);case 3:case"end":return e.stop()}}),e)}))),[me,a,G,Z,z,U]),xe=Object(d.useCallback)((function(e){var t=e.name;Q(e.name),be(!0),je(!0),Object(E.a)("images",e,a,t,H,le,se),je(!1),se(0)}),[a,le]),ke=Object(d.useCallback)((function(e){se(le+1),be(!0),N.a.ref("/files/".concat(a,"/").concat(e.name)).put(e).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){N.a.ref("/files/".concat(a,"/").concat(e.name)).getDownloadURL().then((function(t){T((function(n){return[].concat(Object(o.a)(n),[{url:t,fileName:e.name}])})),m.b.success("\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),se(0)}))}))}),[a,le]),Ce=Object(d.useCallback)((function(){Z&&Z.trim()&&(Object(I.a)("images",a,Z,H),se(0))}),[a,Z]),we=Object(d.useCallback)((function(e){N.a.ref("/files/".concat(a,"/").concat(e.name)).delete().then((function(){m.b.success("\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),T(G.filter((function(t){return t.fileName!==e.name})))})).catch((function(e){return m.b.error(e)}))}),[a,G]);return Object(K.jsx)(F,{children:Object(K.jsxs)(g.a,Object(r.a)(Object(r.a)({},D),{},{name:"upload-board",onFinish:ye,children:[te&&Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{className:"link-checkbox",children:Object(K.jsx)(y.a,{onChange:ge,children:q?"\ub9c1\ud06c\uc81c\uac70":"\ub9c1\ud06c\ucd94\uac00"})}),q&&Object(K.jsx)(g.a.Item,{name:["link"],label:"\ub9c1\ud06c",children:Object(K.jsx)(x.a,{type:"text",onChange:B,value:U})})]}),re&&Object(K.jsx)(g.a.Item,{name:["file"],label:"\ud30c\uc77c",children:Object(K.jsx)(k.a,{style:{marginBottom:20},multiple:!0,customRequest:function(e){var t=e.file;return ke(t)},maxCount:4,onChange:function(e){var t=e.file;0!==G.length?t.status="done":t.status="removed"},onRemove:function(e){return we(e)},children:Object(K.jsx)(C.a,{icon:Object(K.jsx)(w.a,{}),children:"Upload"})})}),Object(K.jsx)(g.a.Item,{name:["image"],label:"\uc774\ubbf8\uc9c0",children:Object(K.jsx)(k.a,{style:{marginBottom:20},listType:"picture",customRequest:function(e){var t=e.file;return xe(t)},progress:{showInfo:!0},onChange:function(e){var t=e.file;0!==G.length?t.status="done":t.status="removed"},maxCount:1,onRemove:function(){return Ce()},children:Object(K.jsx)(C.a,{icon:Object(K.jsx)(w.a,{}),children:"Upload"})})}),Object(K.jsx)(g.a.Item,{wrapperCol:Object(r.a)(Object(r.a)({},D.wrapperCol),{},{offset:8}),children:Object(K.jsx)(C.a,{type:"primary",htmlType:"submit",disabled:Oe,children:Oe?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(S.a,{})," \u2002 Uploading..."]}):"\uc5c5\ub85c\ub4dc"})})]}))})};var F=P.a.div(a||(a=Object(c.a)(["\n  .link-checkbox {\n    margin: 20px 0;\n  }\n"])))}}]);
//# sourceMappingURL=19.e4e0c0dc.chunk.js.map