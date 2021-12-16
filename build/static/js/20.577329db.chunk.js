(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[20],{108:function(n,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"k",(function(){return h})),t.d(e,"e",(function(){return x})),t.d(e,"i",(function(){return v})),t.d(e,"f",(function(){return $})),t.d(e,"g",(function(){return y})),t.d(e,"b",(function(){return w})),t.d(e,"c",(function(){return k})),t.d(e,"d",(function(){return S})),t.d(e,"h",(function(){return I})),t.d(e,"j",(function(){return z}));var i,r,a,c,o,l,d,s,u,b,j,f,p,m=t(101),O=t(440),g=Object(O.a)(i||(i=Object(m.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n"]))),h=Object(O.a)(r||(r=Object(m.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),x=Object(O.a)(a||(a=Object(m.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),v=Object(O.a)(c||(c=Object(m.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n"]))),$=(Object(O.a)(o||(o=Object(m.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(O.a)(l||(l=Object(m.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(O.a)(d||(d=Object(m.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),y=Object(O.a)(s||(s=Object(m.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),w=Object(O.a)(u||(u=Object(m.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),k=Object(O.a)(b||(b=Object(m.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),S=Object(O.a)(j||(j=Object(m.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),I=Object(O.a)(f||(f=Object(m.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),z=Object(O.a)(p||(p=Object(m.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"])))},127:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function(n){var e=new Date(1e3*Math.floor(parseInt(n,10)/1e3));return e.getFullYear()+"-"+(e.getMonth()+1>=10?e.getMonth()+1:"0".concat(e.getMonth()+1))+"-"+(e.getDate()>=10?e.getDate():"0".concat(e.getDate()))}},132:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t(109),r=t(2),a=function(){var n="object"===typeof window,e=Object(r.useCallback)((function(){return{width:n?window.innerWidth:0,height:n?window.innerWidth:0}}),[n]),t=Object(r.useState)(e),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){if(n){var t=function(){o(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[e,n]),c}},145:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var i=t(116);function r(n,e){return Object(i.a)(n,e,!1)}},217:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var i=function(n){switch(n){case"achievement-news":return"\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd";case"achievement-aidnews":return"SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd";case"achievement-valuenews":return"SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd";case"achievement-coopnews":return"SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd";case"achievement-startup":return"\ucc3d\uc5c5\uc9c0\uc6d0\uc18c\uc2dd";case"community-notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"community-administration":return"\ud559\uc0ac\uacf5\uc9c0";case"community-storaoge":return"\uc11c\uc2dd\uc790\ub8cc\uc2e4";case"community-request":return"\uac74\uc758\uc0ac\ud56d";case"community-help":return"\ud5ec\ud504\ub370\uc2a4\ud06c";case"community-sitemap":return"\uc0ac\uc774\ud2b8\ub9f5";default:return"NULL"}}},428:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var i=t(8),r=t(94),a=t(95),c=t(2),o=t(92),l=t.n(o),d=t(130),s=t(169);function u(n){var e=n.className,t=n.direction,a=n.index,o=n.marginDirection,l=n.children,d=n.split,s=n.wrap,u=c.useContext(f),b=u.horizontalSize,j=u.verticalSize,p=u.latestIndex,m={};return u.supportFlexGap||("vertical"===t?a<p&&(m={marginBottom:b/(d?2:1)}):m=Object(i.a)(Object(i.a)({},a<p&&Object(r.a)({},o,b/(d?2:1))),s&&{paddingBottom:j})),null===l||void 0===l?null:c.createElement(c.Fragment,null,c.createElement("div",{className:e,style:m},l),a<p&&d&&c.createElement("span",{className:"".concat(e,"-split"),style:m},d))}var b=t(205),j=function(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]])}return t},f=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),p={small:8,middle:16,large:24};e.b=function(n){var e,t=c.useContext(s.b),o=t.getPrefixCls,m=t.space,O=t.direction,g=n.size,h=void 0===g?(null===m||void 0===m?void 0:m.size)||"small":g,x=n.align,v=n.className,$=n.children,y=n.direction,w=void 0===y?"horizontal":y,k=n.prefixCls,S=n.split,I=n.style,z=n.wrap,N=void 0!==z&&z,B=j(n,["size","align","className","children","direction","prefixCls","split","style","wrap"]),E=Object(b.a)(),A=c.useMemo((function(){return(Array.isArray(h)?h:[h,h]).map((function(n){return function(n){return"string"===typeof n?p[n]:n||0}(n)}))}),[h]),C=Object(a.a)(A,2),F=C[0],L=C[1],M=Object(d.a)($,{keepEmpty:!0}),D=void 0===x&&"horizontal"===w?"center":x,G=o("space",k),W=l()(G,"".concat(G,"-").concat(w),(e={},Object(r.a)(e,"".concat(G,"-rtl"),"rtl"===O),Object(r.a)(e,"".concat(G,"-align-").concat(D),D),e),v),P="".concat(G,"-item"),q="rtl"===O?"marginLeft":"marginRight",J=0,K=M.map((function(n,e){return null!==n&&void 0!==n&&(J=e),c.createElement(u,{className:P,key:"".concat(P,"-").concat(e),direction:w,index:e,marginDirection:q,split:S,wrap:N},n)})),R=c.useMemo((function(){return{horizontalSize:F,verticalSize:L,latestIndex:J,supportFlexGap:E}}),[F,L,J,E]);if(0===M.length)return null;var U={};return N&&(U.flexWrap="wrap",E||(U.marginBottom=-L)),E&&(U.columnGap=F,U.rowGap=L),c.createElement("div",Object(i.a)({className:W,style:Object(i.a)(Object(i.a)({},U),I)},B),c.createElement(f.Provider,{value:R},K))}},431:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,l,d,s=t(101),u=t(109),b=t(2),j=t(110),f=t(119),p=t(145),m=t(108),O=t(5),g=t(127),h=t(428),x=t(434),v=t(218),$=t.n(v),y=t(53),w=t(217),k=t(173),S=t(132),I=t(13);e.default=function(){var n=Object(S.a)(),e=Object(O.i)(),t=e.param,i=e.subparam,r=Object(b.useState)(),a=Object(u.a)(r,2),c=a[0],o=a[1],l=Object(b.useState)(),d=Object(u.a)(l,2),s=d[0],j=d[1],f=Object(b.useState)(!1),x=Object(u.a)(f,2),v=x[0],L=x[1],M=Object(p.a)(m.k,{variables:{category:i},onCompleted:function(n){var e=n.getBoardByCategory,t=e.ok,i=e.err,r=e.data;if(t&&r){var a=[];r.map((function(n,e){var t={id:n.id,index:r.length-e,title:n.title,createdAt:Object(g.a)(n.createdAt||""),category:n.category};return a.push(t)})),o(a)}else console.log(i)}}).loading;return Object(b.useEffect)((function(){j(Object(w.a)(i)),"request"===i.split("-")[1]&&L(!0)}),[i]),M&&!c?Object(I.jsx)("div",{children:"loading..."}):Object(I.jsxs)(z,{children:[Object(I.jsxs)(N,{children:[Object(I.jsx)(B,{children:k.a.map((function(n,e){return n.title===t.split("-")[0]?Object(I.jsxs)("div",{children:[Object(I.jsx)("span",{className:"cover-main-title",children:n.ko_title}),Object(I.jsx)("span",{className:"cover-description",children:n.description})]},n.key):null}))}),Object(I.jsx)("img",{src:"/img/detailBG.jpeg",alt:"cover"})]}),Object(I.jsxs)(E,{children:[s,v&&Object(I.jsx)(y.b,{to:"/",children:"\uae00\uc4f0\uae30"})]}),Object(I.jsxs)(A,{dataSource:c,rowKey:"id",children:[Object(I.jsx)($.a,{title:function(){return Object(I.jsx)(h.b,{children:Object(I.jsx)(C,{children:n.width>375?"\ubc88\ud638":"#"})})},dataIndex:"index",render:function(n){return Object(I.jsx)(F,{children:n})},width:n.width>375?80:30},"index"),Object(I.jsx)($.a,{title:function(){return Object(I.jsx)(h.b,{children:Object(I.jsx)(C,{children:"\uc81c\ubaa9"})})},dataIndex:"title",ellipsis:!0,render:function(n,e){return Object(I.jsx)(h.b,{children:Object(I.jsx)(y.b,{to:"/main/detail/".concat(t,"/").concat(i,"/").concat(e.id),children:Object(I.jsx)(F,{children:n})})})}},"title"),Object(I.jsx)($.a,{title:function(){return Object(I.jsx)(h.b,{children:Object(I.jsx)(C,{children:"\uad00\ub9ac\uc790"})})},dataIndex:"\uad00\ub9ac\uc790",render:function(){return Object(I.jsx)(h.b,{children:Object(I.jsx)(F,{children:"\uad00\ub9ac\uc790"})})},width:n.width>375?150:65},"\uad00\ub9ac\uc790"),Object(I.jsx)($.a,{title:function(){return Object(I.jsx)(h.b,{children:Object(I.jsx)(C,{children:"\uc791\uc131\uc77c"})})},dataIndex:"createdAt",render:function(n){return Object(I.jsx)(F,{children:n})},width:n.width>375?150:90},"createdAt")]})]})};var z=j.a.div(i||(i=Object(s.a)(["\n  "," {\n  }\n  "," {\n    margin-top: 30px;\n    max-width: 1280px;\n    min-width: 800px;\n    min-height: 80vh;\n    padding: 0 30px;\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a)),N=j.a.div(r||(r=Object(s.a)(["\n  "," {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  "," {\n    display: none;\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a)),B=j.a.div(a||(a=Object(s.a)(["\n  "," {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  "," {\n    display: none;\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a)),E=j.a.div(c||(c=Object(s.a)(["\n  "," {\n    width: 100%;\n    height: 80px;\n    font-size: 20px;\n    color: #0c1b58;\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n  }\n\n  "," {\n    min-width: 350px;\n    margin: 0 auto;\n    font-size: 50px;\n    color: #0c1b58;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 30px;\n    & a {\n      background-color: #0c1b58;\n      font-size: 18px;\n      padding: 8px 12px;\n      height: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      &:hover {\n        color: #f03fa8;\n        transition: 0.2s linear;\n      }\n    }\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a)),A=Object(j.a)(x.a)(o||(o=Object(s.a)(["\n  "," {\n    border-top: 4px solid #04083e;\n    margin: 0 20px;\n  }\n  "," {\n    border-top: 4px solid #04083e;\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a)),C=j.a.div(l||(l=Object(s.a)(["\n  color: #04083e;\n  "," {\n    font-size: 8px;\n  }\n  "," {\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a)),F=j.a.div(d||(d=Object(s.a)(["\n  color: #04083e;\n  "," {\n    font-size: 8px;\n  }\n  "," {\n    font-size: 16px;\n    font-weight: 500;\n  }\n"])),Object(f.d)(f.b),Object(f.d)(f.a))}}]);
//# sourceMappingURL=20.577329db.chunk.js.map