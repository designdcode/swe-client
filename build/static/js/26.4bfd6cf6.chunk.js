(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[26],{110:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var a=e(1),r=e(2),i=e(56);function o(t){var n=Object(r.useContext)(Object(i.a)()),e=t||n.client;return __DEV__?Object(a.b)(!!e,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClientApolloClient instance in via options.'):Object(a.b)(!!e,29),e}},111:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c}));var a,r=e(1);!function(t){t[t.Query=0]="Query",t[t.Mutation=1]="Mutation",t[t.Subscription=2]="Subscription"}(a||(a={}));var i=new Map;function o(t){var n;switch(t){case a.Query:n="Query";break;case a.Mutation:n="Mutation";break;case a.Subscription:n="Subscription"}return n}function c(t,n){var e=function(t){var n,e,o=i.get(t);if(o)return o;__DEV__?Object(r.b)(!!t&&!!t.kind,"Argument of ".concat(t," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):Object(r.b)(!!t&&!!t.kind,30);var c=t.definitions.filter((function(t){return"FragmentDefinition"===t.kind})),d=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"query"===t.operation})),u=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"mutation"===t.operation})),l=t.definitions.filter((function(t){return"OperationDefinition"===t.kind&&"subscription"===t.operation}));__DEV__?Object(r.b)(!c.length||d.length||u.length||l.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):Object(r.b)(!c.length||d.length||u.length||l.length,31),__DEV__?Object(r.b)(d.length+u.length+l.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(t," had ").concat(d.length," queries, ").concat(l.length," ")+"subscriptions and ".concat(u.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):Object(r.b)(d.length+u.length+l.length<=1,32),e=d.length?a.Query:a.Mutation,d.length||u.length||(e=a.Subscription);var s=d.length?d:u.length?u:l;__DEV__?Object(r.b)(1===s.length,"react-apollo only supports one definition per HOC. ".concat(t," had ")+"".concat(s.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):Object(r.b)(1===s.length,33);var b=s[0];n=b.variableDefinitions||[];var p={name:b.name&&"Name"===b.name.kind?b.name.value:"data",type:e,variables:n};return i.set(t,p),p}(t),c=o(n),d=o(e.type);__DEV__?Object(r.b)(e.type===n,"Running a ".concat(c," requires a graphql ")+"".concat(c,", but a ").concat(d," was used instead.")):Object(r.b)(e.type===n,34)}},123:function(t,n,e){"use strict";e.d(n,"b",(function(){return g})),e.d(n,"d",(function(){return j})),e.d(n,"a",(function(){return f})),e.d(n,"g",(function(){return y})),e.d(n,"c",(function(){return h})),e.d(n,"e",(function(){return O})),e.d(n,"f",(function(){return m}));var a,r,i,o,c,d,u,l,s,b=e(94),p=e(535),g=Object(p.a)(a||(a=Object(b.a)(["\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        inputCreatedAt\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),j=Object(p.a)(r||(r=Object(b.a)(["\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n"]))),f=Object(p.a)(i||(i=Object(b.a)(["\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),y=Object(p.a)(o||(o=Object(b.a)(["\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n"]))),h=Object(p.a)(c||(c=Object(b.a)(["\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        inputCreatedAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),O=Object(p.a)(d||(d=Object(b.a)(["\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n        link\n      }\n    }\n  }\n"]))),m=Object(p.a)(u||(u=Object(b.a)(["\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n"])));Object(p.a)(l||(l=Object(b.a)(["\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),Object(p.a)(s||(s=Object(b.a)(["\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"])))},320:function(t,n,e){"use strict";var a=e(352);n.a=a.a},321:function(t,n,e){"use strict";var a=e(309);n.a=a.a},540:function(t,n,e){"use strict";e.r(n);var a,r,i,o,c=e(89),d=e(2),u=e(94),l=e(102),s=e(321),b=e(320),p=l.a.div(a||(a=Object(u.a)([""]))),g=Object(l.a)(s.a)(r||(r=Object(u.a)(["\n  height: 300px;\n"]))),j=l.a.span(i||(i=Object(u.a)(["\n  cursor: pointer;\n  &:hover {\n    transition: 0.2s linear;\n    color: #438ef7;\n  }\n"]))),f=(Object(l.a)(b.a)(o||(o=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),e(528)),y=e(534),h=e(6),O=e(88),m=e(87),v=e.n(m),x=e(197),k=function(t,n){var e={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(t);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(e[a[r]]=t[a[r]])}return e},w=function(t){return d.createElement(x.a,null,(function(n){var e,a=n.getPrefixCls,r=n.direction,i=t.prefixCls,o=t.type,c=void 0===o?"horizontal":o,u=t.orientation,l=void 0===u?"center":u,s=t.className,b=t.children,p=t.dashed,g=t.plain,j=k(t,["prefixCls","type","orientation","className","children","dashed","plain"]),f=a("divider",i),y=l.length>0?"-".concat(l):l,m=!!b,x=v()(f,"".concat(f,"-").concat(c),(e={},Object(O.a)(e,"".concat(f,"-with-text"),m),Object(O.a)(e,"".concat(f,"-with-text").concat(y),m),Object(O.a)(e,"".concat(f,"-dashed"),!!p),Object(O.a)(e,"".concat(f,"-plain"),!!g),Object(O.a)(e,"".concat(f,"-rtl"),"rtl"===r),e),s);return d.createElement("div",Object(h.a)({className:x},j,{role:"separator"}),b&&d.createElement("span",{className:"".concat(f,"-inner-text")},b))}))},A=e(138),_=e(123),S=e(258),B=e.n(S),q=e(4),D=e(46),$=function(t){var n=new Date(1e3*Math.floor(parseInt(t,10)/1e3));return n.getFullYear()+"-"+(n.getMonth()+1>=10?n.getMonth()+1:"0".concat(n.getMonth()+1))+"-"+(n.getDate()>=10?n.getDate():"0".concat(n.getDate()))},C=e(10);n.default=function(){var t=Object(A.a)(_.a),n=t.data,e=t.loading,a=t.refetch,r=t.error,i=Object(A.a)(_.d),o=i.refetch,u=i.error,l=Object(q.h)().state,s=Object(d.useState)(),h=Object(c.a)(s,2),O=h[0],m=h[1],v=Object(d.useState)(),x=Object(c.a)(v,2),k=x[0],S=x[1];return Object(d.useEffect)((function(){null!==n&&void 0!==n&&n.getBoard.data&&(m(n.getBoard.data.filter((function(t){return t.category.includes("community-notice")})).slice(0,5)),S(n.getBoard.data.filter((function(t){return t.category.includes("community-administration")})).slice(0,5)))}),[n]),Object(d.useEffect)((function(){var t=function(){a&&a(),o&&o()};return l&&l.refresh&&t(),function(){return t()}}),[a,l,o]),r&&console.error(r),u&&console.error(u),Object(C.jsxs)(p,{children:[e?Object(C.jsx)(C.Fragment,{children:"loading..."}):Object(C.jsxs)(b.a,{gutter:[30,40],justify:"space-between",children:[Object(C.jsx)(g,{span:11,children:Object(C.jsxs)(f.a,{title:function(){return Object(C.jsx)(y.a.Title,{level:4,children:"\uacf5\uc9c0\uc0ac\ud56d"})},dataSource:O,showHeader:!1,rowKey:"noticeid",pagination:!1,size:"middle",children:[Object(C.jsx)(B.a,{dataIndex:"title",align:"left",ellipsis:!0,render:function(t,n,e){return Object(C.jsx)(j,{children:Object(C.jsx)(D.b,{to:"/admin/community/detail-community?category=".concat(n.category,"&id=").concat(n.id),children:t})},e)}},"noticesubid"),Object(C.jsx)(B.a,{dataIndex:"createdAt",align:"right",render:function(t,n,e){return Object(C.jsx)("span",{children:Object(C.jsx)(D.b,{to:"/admin/community/detail-community?category=".concat(n.category,"&id=").concat(n.id),children:$(t)})},e)}},"noticetime")]})}),Object(C.jsx)(g,{span:11,children:Object(C.jsxs)(f.a,{title:function(){return Object(C.jsx)(y.a.Title,{level:4,children:"\ud559\uc0ac\uacf5\uc9c0"})},dataSource:k,showHeader:!1,rowKey:"admissionkey",pagination:!1,size:"middle",children:[Object(C.jsx)(B.a,{dataIndex:"title",align:"left",ellipsis:!0,render:function(t,n,e){return Object(C.jsx)(j,{children:Object(C.jsx)(D.b,{to:"/admin/community/detail-community?category=".concat(n.category,"&id=").concat(n.id),children:t})},e)}},"subadmissionkey"),Object(C.jsx)(B.a,{dataIndex:"createdAt",align:"right",render:function(t,n,e){return Object(C.jsx)("span",{children:Object(C.jsx)(D.b,{to:"/admin/community/detail-community?category=".concat(n.category,"&id=").concat(n.id),children:$(t)})},e)}},"subadmissionkeydate")]})})]}),Object(C.jsx)(w,{})]})}}}]);
//# sourceMappingURL=26.4bfd6cf6.chunk.js.map