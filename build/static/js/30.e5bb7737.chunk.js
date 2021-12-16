(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[30],{108:function(t,e,n){"use strict";n.d(e,"a",(function(){return $})),n.d(e,"k",(function(){return O})),n.d(e,"e",(function(){return B})),n.d(e,"i",(function(){return h})),n.d(e,"f",(function(){return k})),n.d(e,"g",(function(){return p})),n.d(e,"b",(function(){return x})),n.d(e,"c",(function(){return v})),n.d(e,"d",(function(){return I})),n.d(e,"h",(function(){return S})),n.d(e,"j",(function(){return C}));var a,r,i,o,d,c,l,u,g,b,j,s,m,y=n(101),f=n(440),$=Object(f.a)(a||(a=Object(y.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n"]))),O=Object(f.a)(r||(r=Object(y.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),B=Object(f.a)(i||(i=Object(y.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),h=Object(f.a)(o||(o=Object(y.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n"]))),k=(Object(f.a)(d||(d=Object(y.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(f.a)(c||(c=Object(y.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(f.a)(l||(l=Object(y.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),p=Object(f.a)(u||(u=Object(y.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),x=Object(f.a)(g||(g=Object(y.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),v=Object(f.a)(b||(b=Object(y.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),I=Object(f.a)(j||(j=Object(y.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),S=Object(f.a)(s||(s=Object(y.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),C=Object(f.a)(m||(m=Object(y.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"])))},449:function(t,e,n){"use strict";n.r(e);var a,r,i=n(109),o=n(291),d=n(436),c=n(2),l=n(5),u=n(101),g=n(110),b=n(189),j=g.a.div(a||(a=Object(u.a)(["\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &.attach-group {\n    display: flex;\n    flex-direction: column;\n  }\n\n  img {\n    object-fit: contain;\n    width: 400px;\n    height: 400px;\n  }\n"]))),s=Object(g.a)(b.a)(r||(r=Object(u.a)(["\n  margin: 15px 0;\n"]))),m=n(145),y=n(108),f=n(13);e.default=function(){var t,e,n=Object(l.g)(),a=Object(l.i)(),r=a.param,u=a.subparam,g=u,b=Object(l.h)().state,$=Object(c.useState)(),O=Object(i.a)($,2),B=O[0],h=O[1],k=Object(c.useState)(),p=Object(i.a)(k,2),x=p[0],v=p[1],I=Object(m.a)(y.k,{variables:{category:g}}),S=I.data,C=I.loading,N=I.refetch;return Object(c.useEffect)((function(){var t=function(){var t;(null===S||void 0===S?void 0:S.getBoardByCategory.ok)&&0!==(null===(t=S.getBoardByCategory.data)||void 0===t?void 0:t.length)?S.getBoardByCategory.data&&0!==S.getBoardByCategory.data.length&&(S.getBoardByCategory.data[0].files&&h(S.getBoardByCategory.data[0].files),S.getBoardByCategory.data[0].images&&v(S.getBoardByCategory.data[0].images)):(h([]),v([]))};return t(),function(){return t()}}),[S]),Object(c.useEffect)((function(){var t=function(){N&&N()};return b&&b.refresh&&t(),function(){return t()}}),[N,b]),C?Object(f.jsx)(f.Fragment,{children:"loading"}):Object(f.jsxs)(j,{children:[Object(f.jsxs)("div",{className:"button-group",children:[Object(f.jsx)(s,{type:"ghost",onClick:function(){return n.goBack()},children:"\ub4a4\ub85c"}),0!==(null===S||void 0===S||null===(t=S.getBoardByCategory.data)||void 0===t?void 0:t.length)&&(null===S||void 0===S?void 0:S.getBoardByCategory.ok)?Object(f.jsx)(s,{type:"primary",onClick:function(){return n.push("/admin/".concat(r,"/edit-image-").concat(r,"?category=").concat(u,"&id=").concat(S.getBoardByCategory.data&&S.getBoardByCategory.data[0].id))},children:"\uc218\uc815\ud558\uae30"}):Object(f.jsx)(s,{type:"primary",onClick:function(){return n.push("/admin/".concat(r,"/create-image-").concat(r,"?category=").concat(u,"&param=").concat(r,"&subparam=").concat(u))},children:"\uae00\uc4f0\uae30"})]}),Object(f.jsxs)(o.b,{bordered:!0,column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1},layout:"horizontal",children:[Object(f.jsx)(o.b.Item,{label:"\ub9c1\ud06c",span:4,labelStyle:{width:100},children:0!==(null===S||void 0===S||null===(e=S.getBoardByCategory.data)||void 0===e?void 0:e.length)&&(null===S||void 0===S?void 0:S.getBoardByCategory.ok)?Object(f.jsx)("a",{href:"".concat(S.getBoardByCategory.data&&S.getBoardByCategory.data[0].link),target:"_blank",rel:"noreferrer",children:S.getBoardByCategory.data&&S.getBoardByCategory.data[0].link}):Object(f.jsx)(d.a.Text,{children:"\ub9c1\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"})}),Object(f.jsx)(o.b.Item,{label:"\ud30c\uc77c",span:4,labelStyle:{width:100},children:B&&B.length?B.map((function(t,e){return Object(f.jsx)("span",{className:"attach-group",children:Object(f.jsx)("a",{href:"".concat(null===t||void 0===t?void 0:t.url),download:!0,target:"_blank",rel:"noreferrer",children:null===t||void 0===t?void 0:t.fileName})},null===t||void 0===t?void 0:t.fileName)})):Object(f.jsx)(d.a.Text,{children:"\ucca8\ubd80\ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})}),Object(f.jsx)(o.b.Item,{label:"\uc774\ubbf8\uc9c0",span:4,labelStyle:{width:100},children:x&&x[0]?Object(f.jsx)("img",{src:x[0].url,alt:x[0].fileName}):Object(f.jsx)(d.a.Text,{children:"\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"})})]})]})}}}]);
//# sourceMappingURL=30.e5bb7737.chunk.js.map