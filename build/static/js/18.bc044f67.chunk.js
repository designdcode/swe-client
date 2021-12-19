(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[18],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"j",(function(){return g})),n.d(t,"d",(function(){return x})),n.d(t,"h",(function(){return y})),n.d(t,"e",(function(){return k})),n.d(t,"f",(function(){return C})),n.d(t,"b",(function(){return $})),n.d(t,"c",(function(){return S})),n.d(t,"g",(function(){return w})),n.d(t,"i",(function(){return I}));var a,c,r,i,l,o,u,s,d,b,f,j,m,O,p=n(93),v=n(475),h=Object(v.a)(a||(a=Object(p.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n"]))),g=Object(v.a)(c||(c=Object(p.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),x=Object(v.a)(r||(r=Object(p.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),y=Object(v.a)(i||(i=Object(p.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n"]))),k=(Object(v.a)(l||(l=Object(p.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(v.a)(o||(o=Object(p.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(v.a)(u||(u=Object(p.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),C=Object(v.a)(s||(s=Object(p.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),$=Object(v.a)(d||(d=Object(p.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),S=Object(v.a)(b||(b=Object(p.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),w=(Object(v.a)(f||(f=Object(p.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(v.a)(j||(j=Object(p.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),I=(Object(v.a)(m||(m=Object(p.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(v.a)(O||(O=Object(p.a)(["\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n"]))))},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(126);n(164);a.a.initializeApp({apiKey:"AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",authDomain:"sunmoon-swe.firebaseapp.com",projectId:"sunmoon-swe",storageBucket:"sunmoon-swe.appspot.com",messagingSenderId:"1064857281018",appId:"1:1064857281018:web:b2881ce151e1a16b068443",measurementId:"G-JYK8JT1WEN"});var c=a.a.storage()},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(87),c=n(2);function r(){var e=c.useReducer((function(e){return e+1}),0);return Object(a.a)(e,2)[1]}},136:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var a=function(e){return"storage"===(null===e||void 0===e?void 0:e.toString().split("-")[0])},c=function(e){var t=null===e||void 0===e?void 0:e.toString().split("-")[0],n=null===e||void 0===e?void 0:e.toString().split("-")[1];switch(t){case"community":return"notice"===n||"administration"===n;case"storage":case"achievement":return!0;default:return!1}},r=function(e){switch(null===e||void 0===e?void 0:e.toString().split("-")[1]){case"aidnews":case"valuenews":case"coopnews":return!0;default:return!1}},i=function(e){var t=null===e||void 0===e?void 0:e.toString().split("-")[0],n=null===e||void 0===e?void 0:e.toString().split("-")[1];switch(t){case"community":return"notice"===n||"administration"===n;case"storage":case"achievement":return!0;default:return!1}},l=function(e){return"introduce"!==(null===e||void 0===e?void 0:e.toString().split("-")[0])}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(44),c=n(111),r=function(e,t,n,r){c.a.ref("/".concat(e,"/").concat(t,"/").concat(n)).delete().then((function(){r("")})).catch((function(e){return a.b.error(e)}))}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(113),c=n(110),r=n.n(c),i=n(44),l=n(111),o=function(e,t,n,c,o,u,s,d,b){l.a.ref("/".concat(e,"/").concat(n,"/").concat(c)).put(t).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){s(1),l.a.ref("/".concat(e,"/").concat(n,"/").concat(c)).getDownloadURL().then(function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(t),!d||!b){e.next=4;break}return e.next=4,d({variables:{url:t,fileName:c,boardId:b}});case 4:i.b.success("\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),s(0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}},187:function(e,t,n){"use strict";var a=n(88),c=n(6),r=n(2),i=n(86),l=n.n(i),o=n(141),u=n(92),s=n(87),d=n(103),b=n(162),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},j=r.createContext(null),m=function(e,t){var n=e.defaultValue,i=e.children,o=e.options,m=void 0===o?[]:o,O=e.prefixCls,p=e.className,v=e.style,h=e.onChange,g=f(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),x=r.useContext(b.b),k=x.getPrefixCls,C=x.direction,$=r.useState(g.value||n||[]),S=Object(s.a)($,2),w=S[0],I=S[1],N=r.useState([]),E=Object(s.a)(N,2),B=E[0],P=E[1];r.useEffect((function(){"value"in g&&I(g.value||[])}),[g.value]);var L=function(){return m.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},M=k("checkbox",O),R="".concat(M,"-group"),F=Object(d.a)(g,["value","disabled"]);m&&m.length>0&&(i=L().map((function(e){return r.createElement(y,{prefixCls:M,key:e.value.toString(),disabled:"disabled"in e?e.disabled:g.disabled,value:e.value,checked:-1!==w.indexOf(e.value),onChange:e.onChange,className:"".concat(R,"-item"),style:e.style},e.label)})));var V={toggleOption:function(e){var t=w.indexOf(e.value),n=Object(u.a)(w);-1===t?n.push(e.value):n.splice(t,1),"value"in g||I(n);var a=L();null===h||void 0===h||h(n.filter((function(e){return-1!==B.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:w,disabled:g.disabled,name:g.name,registerValue:function(e){P((function(t){return[].concat(Object(u.a)(t),[e])}))},cancelValue:function(e){P((function(t){return t.filter((function(t){return t!==e}))}))}},A=l()(R,Object(a.a)({},"".concat(R,"-rtl"),"rtl"===C),p);return r.createElement("div",Object(c.a)({className:A,style:v},F,{ref:t}),r.createElement(j.Provider,{value:V},i))},O=r.forwardRef(m),p=r.memo(O),v=n(99),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},g=function(e,t){var n,i=e.prefixCls,u=e.className,s=e.children,d=e.indeterminate,f=void 0!==d&&d,m=e.style,O=e.onMouseEnter,p=e.onMouseLeave,g=e.skipGroup,x=void 0!==g&&g,y=h(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),k=r.useContext(b.b),C=k.getPrefixCls,$=k.direction,S=r.useContext(j),w=r.useRef(y.value);r.useEffect((function(){null===S||void 0===S||S.registerValue(y.value),Object(v.a)("checked"in y||!!S||!("value"in y),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),r.useEffect((function(){if(!x)return y.value!==w.current&&(null===S||void 0===S||S.cancelValue(w.current),null===S||void 0===S||S.registerValue(y.value)),function(){return null===S||void 0===S?void 0:S.cancelValue(y.value)}}),[y.value]);var I=C("checkbox",i),N=Object(c.a)({},y);S&&!x&&(N.onChange=function(){y.onChange&&y.onChange.apply(y,arguments),S.toggleOption&&S.toggleOption({label:s,value:y.value})},N.name=S.name,N.checked=-1!==S.value.indexOf(y.value),N.disabled=y.disabled||S.disabled);var E=l()((n={},Object(a.a)(n,"".concat(I,"-wrapper"),!0),Object(a.a)(n,"".concat(I,"-rtl"),"rtl"===$),Object(a.a)(n,"".concat(I,"-wrapper-checked"),N.checked),Object(a.a)(n,"".concat(I,"-wrapper-disabled"),N.disabled),n),u),B=l()(Object(a.a)({},"".concat(I,"-indeterminate"),f));return r.createElement("label",{className:E,style:m,onMouseEnter:O,onMouseLeave:p},r.createElement(o.a,Object(c.a)({},N,{prefixCls:I,className:B,ref:t})),void 0!==s&&r.createElement("span",null,s))},x=r.forwardRef(g);x.displayName="Checkbox";var y=x,k=y;k.Group=p,k.__ANT_CHECKBOX=!0;t.a=k},216:function(e,t,n){"use strict";var a=n(233);t.a=a.a},299:function(e,t,n){"use strict";var a=n(6),c=n(88),r=n(2),i=n(87),l=n(94),o=n(86),u=n.n(o),s=n(121),d=n(117),b=r.forwardRef((function(e,t){var n,a=e.prefixCls,o=void 0===a?"rc-switch":a,b=e.className,f=e.checked,j=e.defaultChecked,m=e.disabled,O=e.loadingIcon,p=e.checkedChildren,v=e.unCheckedChildren,h=e.onClick,g=e.onChange,x=e.onKeyDown,y=Object(l.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=Object(s.a)(!1,{value:f,defaultValue:j}),C=Object(i.a)(k,2),$=C[0],S=C[1];function w(e,t){var n=$;return m||(S(n=e),null===g||void 0===g||g(n,t)),n}var I=u()(o,b,(n={},Object(c.a)(n,"".concat(o,"-checked"),$),Object(c.a)(n,"".concat(o,"-disabled"),m),n));return r.createElement("button",Object.assign({},y,{type:"button",role:"switch","aria-checked":$,disabled:m,className:I,ref:t,onKeyDown:function(e){e.which===d.a.LEFT?w(!1,e):e.which===d.a.RIGHT&&w(!0,e),null===x||void 0===x||x(e)},onClick:function(e){var t=w(!$,e);null===h||void 0===h||h(t,e)}}),O,r.createElement("span",{className:"".concat(o,"-inner")},$?p:v))}));b.displayName="Switch";var f=b,j=n(132),m=n(180),O=n(162),p=n(114),v=n(99),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},g=r.forwardRef((function(e,t){var n,i=e.prefixCls,l=e.size,o=e.loading,s=e.className,d=void 0===s?"":s,b=e.disabled,g=h(e,["prefixCls","size","loading","className","disabled"]);Object(v.a)("checked"in g||!("value"in g),"Switch","`value` is not a valid prop, do you mean `checked`?");var x=r.useContext(O.b),y=x.getPrefixCls,k=x.direction,C=r.useContext(p.b),$=y("switch",i),S=r.createElement("div",{className:"".concat($,"-handle")},o&&r.createElement(j.a,{className:"".concat($,"-loading-icon")})),w=u()((n={},Object(c.a)(n,"".concat($,"-small"),"small"===(l||C)),Object(c.a)(n,"".concat($,"-loading"),o),Object(c.a)(n,"".concat($,"-rtl"),"rtl"===k),n),d);return r.createElement(m.a,{insertExtraNode:!0},r.createElement(f,Object(a.a)({},g,{prefixCls:$,className:w,disabled:b||o,ref:t,loadingIcon:S})))}));g.__ANT_SWITCH=!0,g.displayName="Switch";t.a=g},483:function(e,t,n){"use strict";n.r(t);var a,c,r=n(93),i=n(89),l=n(92),o=n(113),u=n(87),s=n(110),d=n.n(s),b=n(2),f=n(159),j=n.n(f),m=n(130),O=n(101),p=O.a.div(a||(a=Object(r.a)(["\n  & .link-checkbox {\n    margin: 20px;\n    margin-left: 40px;\n  }\n\n  & .upload-list-inline {\n    width: 200px;\n    margin-right: 8px;\n  }\n\n  & .ant-upload-list-picture-container {\n    width: 300px;\n  }\n  & .ant-upload-list-item-info {\n    width: 300px;\n  }\n"]))),v=n(224),h=n(473),g=n(454),x=n(299),y=n(216),k=n(185),C=n(187),$=n(470),S=n(157),w=n(102),I=n(44),N=n(4),E=n(136),B=n(487),P=n(132),L=n(151),M=n(150),R=n(111),F=n(280),V=n.n(F),A=(n(290),n(11)),T={wrapperCol:{span:16}},W={toolbar:[[{header:[1,2,!1]}],["bold","italic"],[{list:"ordered"},{list:"bullet"}],["clean"]]},_=["header","bold","italic","underline","list"],D=(t.default=function(){var e=Object(N.g)(),t=Object(N.h)().search,n=j.a.parse(t),a=n.category,c=n.param,r=n.subparam,s=Object(m.a)(""),f=Object(u.a)(s,3),O=f[0],F=f[1],V=f[2],q=Object(b.useState)(""),K=Object(u.a)(q,2),U=K[0],G=K[1],J=Object(m.a)(""),z=Object(u.a)(J,3),H=z[0],Y=z[1],X=z[2],Z=Object(b.useState)(!1),Q=Object(u.a)(Z,2),ee=Q[0],te=Q[1],ne=Object(b.useState)(),ae=Object(u.a)(ne,2),ce=ae[0],re=ae[1],ie=Object(b.useState)(),le=Object(u.a)(ie,2),oe=le[0],ue=le[1],se=Object(b.useState)([]),de=Object(u.a)(se,2),be=de[0],fe=de[1],je=Object(b.useState)(!1),me=Object(u.a)(je,2),Oe=me[0],pe=me[1],ve=Object(b.useState)(!1),he=Object(u.a)(ve,2),ge=he[0],xe=he[1],ye=Object(b.useState)(!1),ke=Object(u.a)(ye,2),Ce=ke[0],$e=ke[1],Se=Object(b.useState)(!0),we=Object(u.a)(Se,2),Ie=we[0],Ne=we[1],Ee=Object(b.useState)(!1),Be=Object(u.a)(Ee,2),Pe=Be[0],Le=Be[1],Me=Object(b.useState)(!0),Re=Object(u.a)(Me,2),Fe=Re[0],Ve=Re[1],Ae=Object(b.useState)(0),Te=Object(u.a)(Ae,2),We=Te[0],_e=Te[1],De=Object(b.useState)(),qe=Object(u.a)(De,2),Ke=qe[0],Ue=qe[1];Object(b.useEffect)((function(){$e(Object(E.c)(r)),pe(Object(E.d)(r)),xe(Object(E.b)(r)),Ne(Object(E.a)(r)),Le(Object(E.e)(r))}),[r]);var Ge=Object(S.a)(w.a,{onCompleted:function(t){var n=t.createBoard,a=n.ok,i=n.err;a?(V(""),G(""),X(""),re(""),I.b.success("\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"),e.push({pathname:"/admin/".concat(c,"/").concat(r),state:{refresh:!0}})):(console.log(i),I.b.error("\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"))}}),Je=Object(u.a)(Ge,2),ze=Je[0],He=Je[1].loading,Ye=Object(b.useCallback)((function(){te(!ee),ee||X("")}),[ee,X,te]),Xe=Object(b.useCallback)(Object(o.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===be.length){e.next=5;break}return e.next=3,ze({variables:{title:O.trim()?O:null,content:U.trim()?U:null,link:H.trim()?H:null,category:a,files:0!==be.length?be:null,images:null!==ce&&void 0!==ce&&ce.trim()?[{url:ce,fileName:oe}]:null,private:!Fe,type:null===Ke||void 0===Ke?void 0:Ke.type}});case 3:case 8:e.next=12;break;case 5:if(!ce){e.next=10;break}return e.next=8,ze({variables:{title:O.trim()?O:null,content:U.trim()?U:null,link:H.trim()?H:null,category:a,files:null,images:null!==ce&&void 0!==ce&&ce.trim()?[{url:ce,fileName:oe}]:null,private:!Fe,type:null===Ke||void 0===Ke?void 0:Ke.type}});case 10:return e.next=12,ze({variables:{title:O.trim()?O:null,content:U.trim()?U:null,link:H.trim()?H:null,private:!Fe,category:a,type:null===Ke||void 0===Ke?void 0:Ke.type}});case 12:case"end":return e.stop()}}),e)}))),[O,U,H,ze,a,be,oe,ce,Fe,Ke]),Ze=Object(b.useCallback)((function(e){_e(We+1);var t=e.name;ue(e.name),Object(L.a)("images",e,a,t,re,We,_e)}),[a,We]),Qe=Object(b.useCallback)((function(e){_e(We+1),R.a.ref("/files/".concat(a,"/").concat(e.name)).put(e).on("state_changed",(function(e){}),(function(e){return console.log(e)}),(function(){R.a.ref("/files/".concat(a,"/").concat(e.name)).getDownloadURL().then((function(t){fe((function(n){return[].concat(Object(l.a)(n),[{url:t,fileName:e.name}])})),I.b.success("\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),_e(We-1)}))}))}),[a,We]),et=Object(b.useCallback)((function(){oe&&oe.trim()&&Object(M.a)("images",a,oe,re)}),[a,oe]),tt=Object(b.useCallback)((function(e){R.a.ref("/files/".concat(a,"/").concat(e.name)).delete().then((function(){I.b.success("\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),fe(be.filter((function(t){return t.fileName!==e.name})))})).catch((function(e){return I.b.error(e)}))}),[a,be]),nt=Object(b.useMemo)((function(){return Object(A.jsxs)(v.a,{style:{width:150},children:[Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"basic",title:"SW\uae30\ucd08\uad50\uc721"})},children:"SW\uae30\ucd08\uad50\uc721"})},"0"),Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"major",title:"SW\uc804\uacf5\uad50\uc721"})},children:"SW\uc804\uacf5\uad50\uc721"})},"1"),Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"convergence",title:"SW\uc735\ud569\uad50\uc721"})},children:"SW\uc735\ud569\uad50\uc721"})},"2")]})}),[]),at=Object(b.useMemo)((function(){return Object(A.jsxs)(v.a,{style:{width:150},children:[Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"edu",title:"\uc218\uc694\uc911\uc2ec"})},children:"\uc218\uc694\uc911\uc2ec"})},"0"),Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"training",title:"\uc120\ub3c4\uc790\uc591\uc131"})},children:"\uc120\ub3c4\uc790\uc591\uc131"})},"1"),Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"share",title:"\uac00\uce58\uacf5\uc720"})},children:"\uac00\uce58\uacf5\uc720"})},"2")]})}),[]),ct=Object(b.useMemo)((function(){return Object(A.jsxs)(v.a,{style:{width:150},children:[Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"network",title:"\uae30\uad00 \ub124\ud2b8\uc6cc\ud06c"})},children:"\uae30\uad00 \ub124\ud2b8\uc6cc\ud06c"})},"0"),Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"project",title:"\uae30\uad00 \ud504\ub85c\uc81d\ud2b8"})},children:"\uae30\uad00 \ud504\ub85c\uc81d\ud2b8"})},"1"),Object(A.jsx)(v.a.Item,{children:Object(A.jsx)("div",{onClick:function(){return Ue({type:"internship",title:"\uae30\uad00 \uc778\ud134\uc27d"})},children:"\uae30\uad00 \uc778\ud134\uc27d"})},"2")]})}),[]),rt=Object(b.useCallback)((function(e){switch(e){case"coopnews":return ct;case"valuenews":return at;default:return nt}}),[ct,at,nt]);return Object(b.useEffect)((function(){We<0&&_e(0)}),[We]),Object(A.jsx)(p,{children:Object(A.jsxs)(h.a,Object(i.a)(Object(i.a)({},T),{},{name:"upload-board",onFinish:Xe,children:[Object(A.jsx)(h.a.Item,{name:["title"],label:"\uc81c\ubaa9",children:Object(A.jsx)(g.a,{type:"text",onChange:F,value:O})}),Object(A.jsxs)(h.a.Item,{name:["checked"],label:"\uacf5\uac1c / \ube44\uacf5\uac1c",children:[Object(A.jsx)(x.a,{defaultChecked:!0,onChange:function(){return Ve(!Fe)}}),Object(A.jsx)("span",{style:{marginLeft:15},children:Fe?"\uacf5\uac1c":"\ube44\uacf5\uac1c"})]}),Pe&&Object(A.jsx)(h.a.Item,{name:["type"],label:"\ub300\ubd84\ub958",children:Object(A.jsx)(y.a,{overlay:function(){return rt(null===r||void 0===r?void 0:r.toString().split("-")[1])},trigger:["click"],children:Object(A.jsxs)(k.a,{children:[Ke?Ke.title:"\uc120\ud0dd\ud558\uae30","\u2002\u2002\u2228"]})})}),Oe&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"link-checkbox",children:Object(A.jsx)(C.a,{onChange:Ye,children:ee?"\ub9c1\ud06c\uc81c\uac70":"\ub9c1\ud06c\ucd94\uac00"})}),ee&&Object(A.jsx)(h.a.Item,{name:["link"],label:"\ub9c1\ud06c",children:Object(A.jsx)(g.a,{type:"text",onChange:Y,value:H})})]}),Ce&&Object(A.jsx)(h.a.Item,{name:["image"],label:"\uc774\ubbf8\uc9c0",children:Object(A.jsx)($.a,{style:{marginBottom:20},listType:"picture",customRequest:function(e){var t=e.file;return Ze(t)},progress:{showInfo:!0},accept:"image/*",onChange:function(e){var t=e.file;t.status=""!==ce?"done":"removed"},className:"upload-list-inline",maxCount:1,onRemove:function(){return et()},children:We<=0&&Object(A.jsx)(k.a,{icon:Object(A.jsx)(B.a,{}),children:"Upload"})})}),ge&&Object(A.jsx)(h.a.Item,{name:["file"],label:"\ud30c\uc77c",children:Object(A.jsx)($.a,{multiple:!0,customRequest:function(e){var t=e.file;return Qe(t)},maxCount:4,onChange:function(e){var t=e.file;0!==be.length?t.status="done":t.status="removed"},onRemove:function(e){return tt(e)},children:We<=0&&Object(A.jsx)(k.a,{style:{marginBottom:20},icon:Object(A.jsx)(B.a,{}),children:"Upload"})})}),Ie&&Object(A.jsx)(h.a.Item,{name:"content",label:"\ub0b4\uc6a9",style:{marginTop:20},initialValue:"",rules:[{required:!0}],children:Object(A.jsx)(D,{modules:W,formats:_,value:U||"",onChange:function(e){G(e)},theme:"snow"})}),Object(A.jsx)(h.a.Item,{wrapperCol:Object(i.a)(Object(i.a)({},T.wrapperCol),{},{offset:8}),children:Object(A.jsx)(k.a,{type:"primary",htmlType:"submit",disabled:0!==We,children:He?"Uploading...":We<=0?"\uc62c\ub9ac\uae30":Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(P.a,{})," \uc774\ubbf8\uc9c0 / \ud30c\uc77c \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4..."]})})})]}))})},Object(O.a)(V.a)(c||(c=Object(r.a)(["\n  background-color: white;\n  .ql-container {\n    min-height: 300px;\n  }\n"]))))}}]);
//# sourceMappingURL=18.bc044f67.chunk.js.map