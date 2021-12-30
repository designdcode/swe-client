(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[33],{104:function(n,e,t){"use strict";t.d(e,"a",(function(){return x})),t.d(e,"l",(function(){return h})),t.d(e,"e",(function(){return I})),t.d(e,"j",(function(){return v})),t.d(e,"f",(function(){return S})),t.d(e,"g",(function(){return w})),t.d(e,"b",(function(){return N})),t.d(e,"c",(function(){return B})),t.d(e,"h",(function(){return C})),t.d(e,"k",(function(){return R})),t.d(e,"d",(function(){return F})),t.d(e,"i",(function(){return L}));var i,r,a,o,c,l,d,u,p,b,s,$,g,j,m,O,f,k=t(94),y=t(548),x=Object(y.a)(i||(i=Object(k.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n"]))),h=Object(y.a)(r||(r=Object(k.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),I=Object(y.a)(a||(a=Object(k.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),v=Object(y.a)(o||(o=Object(k.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n"]))),S=(Object(y.a)(c||(c=Object(k.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)(l||(l=Object(k.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)(d||(d=Object(k.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),w=Object(y.a)(u||(u=Object(k.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),N=Object(y.a)(p||(p=Object(k.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),B=Object(y.a)(b||(b=Object(k.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),C=(Object(y.a)(s||(s=Object(k.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)($||($=Object(k.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),R=(Object(y.a)(g||(g=Object(k.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)(j||(j=Object(k.a)(["\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n"])))),F=Object(y.a)(m||(m=Object(k.a)(["\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n"]))),L=(Object(y.a)(O||(O=Object(k.a)(["\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)(f||(f=Object(k.a)(["\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n"]))))},560:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,l=t(94),d=t(114),u=t(89),p=t(112),b=t.n(p),s=t(2),$=t(103),g=$.a.div(i||(i=Object(l.a)([""]))),j=($.a.div(r||(r=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & .list-description {\n    margin: 8px 0;\n    width: 800px;\n  }\n\n  & .list-title {\n    display: inline-block;\n    min-width: 100px;\n  }\n\n  & .list-href {\n    margin-left: 30px;\n  }\n\n  & .button-group {\n    display: inline-block;\n    margin-left: 15px;\n  }\n\n  & .button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      color: red;\n      transition: 0.2s linear;\n    }\n  }\n\n  & .edit-input {\n    display: block;\n    width: 400px;\n    margin: 8px 0;\n  }\n\n  & .delete-button {\n    margin-left: 5px;\n  }\n"]))),$.a.div(a||(a=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & .input-row {\n    margin: 5px 0;\n    max-width: 800px;\n  }\n"]))),t(140)),m=t(165),O=t(104),f=t(478),k=t(131),y=t(494),x=t(45),h=t(11),I=(e.default=function(){var n=Object(s.useState)(""),e=Object(u.a)(n,2),t=e[0],i=e[1],r=Object(k.a)(""),a=Object(u.a)(r,3),o=a[0],c=a[1],l=a[2],p=Object(s.useState)(!1),$=Object(u.a)(p,2),y=$[0],S=$[1],w=Object(j.a)(O.l,{variables:{category:"link"},onCompleted:function(n){var e=n.getBoardByCategory,t=e.ok,r=e.err,a=e.data;t&&a&&a.length>0?a[0].link&&i(a[0].link.split("v=")[1]):console.log(r)}}),N=w.loading,B=w.refetch,C=Object(m.a)(O.a,{onCompleted:function(n){var e=n.createBoard,t=e.ok,i=e.err;t?(x.b.success("\uc131\uacf5\uc801\uc73c\ub85c \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),l(""),window.location.reload()):console.log(i)}}),R=Object(u.a)(C,1)[0],F=Object(s.useCallback)(Object(d.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R({variables:{title:"video link",content:"video-content",link:o,category:"link"}}).then((function(n){B()}));case 2:l("");case 3:case"end":return n.stop()}}),n)}))),[o,R,B,l]);return N?Object(h.jsx)("div",{children:"loading..."}):Object(h.jsx)(g,{children:Object(h.jsxs)(I,{children:[Object(h.jsxs)("div",{className:"head",children:[Object(h.jsx)("span",{className:"title",children:"\ud604\uc7ac \uc5c5\ub85c\ub4dc\ub41c \uc601\uc0c1"}),Object(h.jsx)("div",{className:"head-button",onClick:function(){return S(!y)},children:"\ub9c1\ud06c \uc62c\ub9ac\uae30"})]}),y&&Object(h.jsxs)("div",{className:"input-content",children:[Object(h.jsx)(v,{value:o,onChange:c}),Object(h.jsx)("button",{onClick:F,children:"\uc62c\ub9ac\uae30"})]}),""!==t?Object(h.jsx)(f.a,{opts:{height:"350",width:"500",playerVars:{autoplay:1}},videoId:t,onReady:function(n){n.target.pauseVideo()}}):Object(h.jsx)("div",{className:"notice",children:"\ud604\uc7ac \uc5c5\ub85c\ub4dc \ub41c \ube44\ub514\uc624\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"})]})})},$.a.div(o||(o=Object(l.a)(["\n  & .head {\n    display: flex;\n    align-items: center;\n\n    & .title {\n      font-size: 16px;\n      display: block;\n    }\n\n    & .head-button {\n      padding: 6px 8px;\n      background-color: skyblue;\n      color: white;\n      margin-left: 150px;\n      cursor: pointer;\n    }\n    margin-bottom: 30px;\n  }\n\n  & .input-content {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 10px 5px;\n\n    & button {\n      border: none;\n      background-color: skyblue;\n      color: white;\n      cursor: pointer;\n      padding: 4px 6px;\n      margin-left: 20px;\n    }\n  }\n\n  & .notice {\n    padding: 15px;\n  }\n"])))),v=Object($.a)(y.a)(c||(c=Object(l.a)(["\n  width: 400px;\n"])))}}]);
//# sourceMappingURL=33.93961959.chunk.js.map