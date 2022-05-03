(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[27],{106:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"k",(function(){return k})),n.d(e,"e",(function(){return S})),n.d(e,"i",(function(){return x})),n.d(e,"f",(function(){return I})),n.d(e,"g",(function(){return w})),n.d(e,"b",(function(){return C})),n.d(e,"c",(function(){return _})),n.d(e,"j",(function(){return A})),n.d(e,"d",(function(){return N})),n.d(e,"h",(function(){return B}));var r,i,a,o,c,l,u,d,s,p,b,m,f,j,g,O,h,y=n(94),$=n(536),v=Object($.a)(r||(r=Object(y.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n"]))),k=Object($.a)(i||(i=Object(y.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),S=Object($.a)(a||(a=Object(y.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),x=Object($.a)(o||(o=Object(y.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n"]))),I=(Object($.a)(c||(c=Object(y.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object($.a)(l||(l=Object(y.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object($.a)(u||(u=Object(y.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),w=Object($.a)(d||(d=Object(y.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),C=Object($.a)(s||(s=Object(y.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),_=Object($.a)(p||(p=Object(y.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),A=(Object($.a)(b||(b=Object(y.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object($.a)(m||(m=Object(y.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),Object($.a)(f||(f=Object(y.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object($.a)(j||(j=Object(y.a)(["\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n"])))),N=Object($.a)(g||(g=Object(y.a)(["\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n"]))),B=(Object($.a)(O||(O=Object(y.a)(["\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n"]))),Object($.a)(h||(h=Object(y.a)(["\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n"]))))},110:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1),i=n(2),a=n(56);function o(t){var e=Object(i.useContext)(Object(a.a)()),n=t||e.client;return __DEV__?Object(r.b)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClientApolloClient instance in via options.'):Object(r.b)(!!n,29),n}},111:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var r,i=n(1);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(r||(r={}));var a=new Map;function o(t){var e;switch(t){case r.Query:e="Query";break;case r.Mutation:e="Mutation";break;case r.Subscription:e="Subscription"}return e}function c(t,e){var n=function(t){var e,n,o=a.get(t);if(o)return o;__DEV__?Object(i.b)(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):Object(i.b)(!!t&&!!t.kind,30);var c=t.definitions.filter((function(t){return"FragmentDefinition"===t.kind})),l=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"query"===t.operation})),u=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation})),d=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation}));__DEV__?Object(i.b)(!c.length||l.length||u.length||d.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):Object(i.b)(!c.length||l.length||u.length||d.length,31),__DEV__?Object(i.b)(l.length+u.length+d.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(l.length," queries, ").concat(d.length," ")+"subscriptions and ".concat(u.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):Object(i.b)(l.length+u.length+d.length<=1,32),n=l.length?r.Query:r.Mutation,l.length||u.length||(n=r.Subscription);var s=l.length?l:u.length?u:d;__DEV__?Object(i.b)(1===s.length,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(s.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):Object(i.b)(1===s.length,33);var p=s[0];e=p.variableDefinitions||[];var b={name:p.name&&"Name"===p.name.kind?p.name.value:"data",type:n,variables:e};return a.set(t,b),b}(t),c=o(e),l=o(n.type);__DEV__?Object(i.b)(n.type===e,"Running a ".concat(c," requires a graphql ")+"".concat(c,", but a ").concat(l," was used instead.")):Object(i.b)(n.type===e,34)}},209:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(0),i=n(2),a=n(75),o=n(5),c=n(111),l=n(22),u=n(110);function d(t,e){var n=Object(u.a)(null===e||void 0===e?void 0:e.client);Object(c.b)(t,c.a.Mutation);var d=Object(i.useState)({called:!1,loading:!1,client:n}),s=d[0],p=d[1],b=Object(i.useRef)({result:s,mutationId:0,isMounted:!0,client:n,mutation:t,options:e});Object.assign(b.current,{client:n,options:e,mutation:t});var m=Object(i.useCallback)((function(t){void 0===t&&(t={});var e=b.current,n=e.client,i=e.options,c=e.mutation,u=Object(r.a)(Object(r.a)({},i),{mutation:c});b.current.result.loading||u.ignoreResults||p(b.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:n});var d=++b.current.mutationId,s=Object(a.b)(u,t);return n.mutate(s).then((function(e){var r,i,a=e.data,c=e.errors,m=c&&c.length>0?new l.a({graphQLErrors:c}):void 0;if(d===b.current.mutationId&&!s.ignoreResults){var f={called:!0,loading:!1,data:a,error:m,client:n};b.current.isMounted&&!Object(o.a)(b.current.result,f)&&p(b.current.result=f)}return null===(r=u.onCompleted)||void 0===r||r.call(u,e.data),null===(i=t.onCompleted)||void 0===i||i.call(t,e.data),e})).catch((function(e){var r,i;if(d===b.current.mutationId&&b.current.isMounted){var a={loading:!1,error:e,data:void 0,called:!0,client:n};Object(o.a)(b.current.result,a)||p(b.current.result=a)}if(u.onError||s.onError)return null===(r=u.onError)||void 0===r||r.call(u,e),null===(i=t.onError)||void 0===i||i.call(t,e),{data:void 0,errors:e};throw e}))}),[]),f=Object(i.useCallback)((function(){p({called:!1,loading:!1,client:n})}),[]);return Object(i.useEffect)((function(){return function(){b.current.isMounted=!1}}),[]),[m,Object(r.a)({reset:f},s)]}},484:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var r=n(6),i=n(88),a=n(89),o=n(2),c=n(87),l=n.n(c),u=n(112),d=n(198);function s(t){var e=t.className,n=t.direction,a=t.index,c=t.marginDirection,l=t.children,u=t.split,d=t.wrap,s=o.useContext(m),p=s.horizontalSize,b=s.verticalSize,f=s.latestIndex,j={};return s.supportFlexGap||("vertical"===n?a<f&&(j={marginBottom:p/(u?2:1)}):j=Object(r.a)(Object(r.a)({},a<f&&Object(i.a)({},c,p/(u?2:1))),d&&{paddingBottom:b})),null===l||void 0===l?null:o.createElement(o.Fragment,null,o.createElement("div",{className:e,style:j},l),a<f&&u&&o.createElement("span",{className:"".concat(e,"-split"),style:j},u))}var p=n(241),b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},m=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),f={small:8,middle:16,large:24};e.b=function(t){var e,n=o.useContext(d.b),c=n.getPrefixCls,j=n.space,g=n.direction,O=t.size,h=void 0===O?(null===j||void 0===j?void 0:j.size)||"small":O,y=t.align,$=t.className,v=t.children,k=t.direction,S=void 0===k?"horizontal":k,x=t.prefixCls,I=t.split,w=t.style,C=t.wrap,_=void 0!==C&&C,A=b(t,["size","align","className","children","direction","prefixCls","split","style","wrap"]),N=Object(p.a)(),B=o.useMemo((function(){return(Array.isArray(h)?h:[h,h]).map((function(t){return function(t){return"string"===typeof t?f[t]:t||0}(t)}))}),[h]),E=Object(a.a)(B,2),D=E[0],M=E[1],z=Object(u.a)(v,{keepEmpty:!0}),F=void 0===y&&"horizontal"===S?"center":y,Y=c("space",x),R=l()(Y,"".concat(Y,"-").concat(S),(e={},Object(i.a)(e,"".concat(Y,"-rtl"),"rtl"===g),Object(i.a)(e,"".concat(Y,"-align-").concat(F),F),e),$),q="".concat(Y,"-item"),L="rtl"===g?"marginLeft":"marginRight",P=0,Q=z.map((function(t,e){return null!==t&&void 0!==t&&(P=e),o.createElement(s,{className:q,key:"".concat(q,"-").concat(e),direction:S,index:e,marginDirection:L,split:I,wrap:_},t)})),G=o.useMemo((function(){return{horizontalSize:D,verticalSize:M,latestIndex:P,supportFlexGap:N}}),[D,M,P,N]);if(0===z.length)return null;var V={};return _&&(V.flexWrap="wrap",N||(V.marginBottom=-M)),N&&(V.columnGap=D,V.rowGap=M),o.createElement("div",Object(r.a)({className:R,style:Object(r.a)(Object(r.a)({},V),w)},A),o.createElement(m.Provider,{value:G},Q))}},525:function(t,e,n){"use strict";n.r(e),n.d(e,"Container",(function(){return x}));var r,i,a=n(94),o=n(89),c=n(145),l=n(209),u=n(156),d=n(529),s=n(484),p=n(259),b=n.n(p),m=n(2),f=n(4),j=n(46),g=n(45),O=n(106),h=n(138),y=n.n(h),$=n(102),v=n(10),k=[{title:[{k_title:"\uc804\uccb4\ubcf4\uae30",title:"all"},{k_title:"\uc218\uc694\uc911\uc2ec",title:"edu"},{k_title:"\uc120\ub3c4\uc790\uc591\uc131",title:"training"},{k_title:"\uac00\uce58\uacf5\uc720",title:"share"}]},{title:[{k_title:"\uc804\uccb4\ubcf4\uae30",title:"all"},{k_title:"\ub124\ud2b8\uc6cc\ud06c",title:"network"},{k_title:"\ud504\ub85c\uc81d\ud2b8",title:"project"},{k_title:"\uc778\ud134\uc27d",title:"internship"}]},{title:[{k_title:"\uc804\uccb4\ubcf4\uae30",title:"all"},{k_title:"SW\uae30\ucd08\uad50\uc721",title:"basic"},{k_title:"SW\uc804\uacf5\uad50\uc721",title:"major"},{k_title:"SW\uc735\ud569\uad50\uc721",title:"convergence"}]}];e.default=function(){var t=Object(f.i)(),e=t.param,n=t.subparam,r=Object(f.h)().state,i=Object(m.useState)(),a=Object(o.a)(i,2),p=a[0],h=a[1],$=Object(m.useState)(),I=Object(o.a)($,2),w=I[0],C=I[1],_=Object(m.useState)(!1),A=Object(o.a)(_,2),N=A[0],B=A[1],E=Object(c.a)(O.k,{variables:{category:n}}),D=E.loading,M=E.data,z=E.refetch,F=Object(m.useCallback)((function(t){switch(t.split("-")[1]){case"aidnews":case"valuenews":case"coopnews":return!0;default:return!1}}),[]);Object(m.useEffect)((function(){"achievement"===e&&F(n)?B(!0):B(!1)}),[e,n,F]);var Y=Object(l.a)(O.e,{onCompleted:function(t){var e=t.deleteBoard,n=e.ok,r=e.err;n?(g.b.success("\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),z&&z()):g.b.error(r)}}),R=Object(o.a)(Y,1)[0],q=Object(m.useCallback)((function(t){if(p&&w&&"all"!==t){var e=w.filter((function(e){return e.type===t}));h(e)}"all"===t&&h(w)}),[p,w]);return Object(m.useEffect)((function(){var t=function(){z&&z()};return r&&r.refresh&&t(),function(){return t()}}),[z,r]),Object(m.useEffect)((function(){if(M&&M.getBoardByCategory&&M.getBoardByCategory.data){var t=M.getBoardByCategory.data,e=[];t.map((function(n,r){var i={id:n.id,index:t.length-r,title:n.title,createdAt:y()(new Date(n.inputCreatedAt||""),!0).format("YYYY/MM/DD").toString(),inputCreatedAt:y()(new Date(n.inputCreatedAt||""),!0).format("YYYY/MM/DD").toString(),category:n.category,private:n.private||!1,type:n.type||""};return e.push(i)})),h(e),C(e)}}),[M]),D?Object(v.jsx)(v.Fragment,{children:"loading"}):Object(v.jsxs)(x,{children:[N?Object(v.jsxs)("div",{className:"sort",children:[Object(v.jsx)(j.b,{to:"/admin/".concat(e,"/create-").concat(e,"?category=").concat(n,"&param=").concat(e,"&subparam=").concat(n),children:Object(v.jsx)(u.a,{type:"primary",style:{marginTop:15,marginBottom:20},children:"\uae00\uc4f0\uae30"})}),Object(v.jsx)("div",{className:"sort-menu",children:"valuenews"===n.split("-")[1]?k[0].title.map((function(t,e){return Object(v.jsx)(u.a,{type:"default",className:"sort-menu-button",onClick:function(){return q(t.title)},children:t.k_title},e)})):"coopnews"===n.split("-")[1]?k[1].title.map((function(t,e){return Object(v.jsx)(u.a,{type:"default",className:"sort-menu-button",onClick:function(){return q(t.title)},children:t.k_title},e)})):k[2].title.map((function(t,e){return Object(v.jsx)(u.a,{type:"default",className:"sort-menu-button",onClick:function(){return q(t.title)},children:t.k_title},e)}))})]}):Object(v.jsx)(j.b,{to:"/admin/".concat(e,"/create-").concat(e,"?category=").concat(n,"&param=").concat(e,"&subparam=").concat(n),children:Object(v.jsx)(u.a,{type:"primary",style:{marginTop:15,marginBottom:20},children:"\uae00\uc4f0\uae30"})}),Object(v.jsxs)(d.a,{dataSource:p,rowKey:"id",children:[Object(v.jsx)(b.a,{title:"\ubc88\ud638",dataIndex:"index",width:80},"index"),Object(v.jsx)(b.a,{title:"\uc81c\ubaa9",dataIndex:"title",ellipsis:!0,render:function(t,r){return Object(v.jsx)(s.b,{children:Object(v.jsx)(j.b,{to:"/admin/".concat(e,"/detail-").concat(e,"?category=").concat(n,"&id=").concat(r.id),children:t})})}},"title"),Object(v.jsx)(b.a,{title:"\uc791\uc131\uc77c",dataIndex:"inputCreatedAt",width:120},"inputCreatedAt"),Object(v.jsx)(b.a,{title:"\uacf5\uac1c\uc5ec\ubd80",width:100,render:function(t,e){return Object(v.jsx)(S,{size:"middle",private:e.private,children:Object(v.jsx)("span",{children:e.private?"\ube44\uacf5\uac1c":"\uacf5\uac1c"})})}},"public"),Object(v.jsx)(b.a,{title:"\uc635\uc158",width:100,render:function(t,e){return Object(v.jsx)(s.b,{size:"middle",children:Object(v.jsx)(u.a,{type:"primary",danger:!0,onClick:function(){return R({variables:{id:e.id}})},children:"\uc0ad\uc81c"})})}},"action")]})]})};var S=Object($.a)(s.b)(r||(r=Object(a.a)(["\n  & span {\n    color: ",";\n  }\n"])),(function(t){return t.private?"#ff4448":"#27ae60"})),x=$.a.div(i||(i=Object(a.a)(["\n  & .sort {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 30px;\n    align-items: center;\n    & .sort-menu {\n      display: flex;\n      & .sort-menu-button {\n        &:not(:last-child) {\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n"])))}}]);
//# sourceMappingURL=27.b15cf14b.chunk.js.map