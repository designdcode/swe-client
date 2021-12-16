(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[18],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"k",(function(){return j})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return O})),n.d(t,"f",(function(){return k})),n.d(t,"g",(function(){return $})),n.d(t,"b",(function(){return x})),n.d(t,"c",(function(){return C})),n.d(t,"d",(function(){return S})),n.d(t,"h",(function(){return B})),n.d(t,"j",(function(){return w}));var r,a,o,i,c,l,u,s,d,b,f,m,g,p=n(95),y=n(417),v=Object(y.a)(r||(r=Object(p.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n"]))),j=Object(y.a)(a||(a=Object(p.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),h=Object(y.a)(o||(o=Object(p.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),O=Object(y.a)(i||(i=Object(p.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n"]))),k=(Object(y.a)(c||(c=Object(p.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)(l||(l=Object(p.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(y.a)(u||(u=Object(p.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),$=Object(y.a)(s||(s=Object(p.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),x=Object(y.a)(d||(d=Object(p.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),C=Object(y.a)(b||(b=Object(p.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),S=Object(y.a)(f||(f=Object(p.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),B=Object(y.a)(m||(m=Object(p.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),w=Object(y.a)(g||(g=Object(p.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"])))},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1),a=n(2),o=n(55);function i(e){var t=Object(a.useContext)(Object(o.a)()),n=e||t.client;return __DEV__?Object(r.b)(!!n,'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClientApolloClient instance in via options.'):Object(r.b)(!!n,29),n}},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,a=n(1);!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(r||(r={}));var o=new Map;function i(e){var t;switch(e){case r.Query:t="Query";break;case r.Mutation:t="Mutation";break;case r.Subscription:t="Subscription"}return t}function c(e,t){var n=function(e){var t,n,i=o.get(e);if(i)return i;__DEV__?Object(a.b)(!!e&&!!e.kind,"Argument of ".concat(e," passed to parser was not a valid GraphQL ")+"DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"):Object(a.b)(!!e&&!!e.kind,30);var c=e.definitions.filter((function(e){return"FragmentDefinition"===e.kind})),l=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})),u=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})),s=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"subscription"===e.operation}));__DEV__?Object(a.b)(!c.length||l.length||u.length||s.length,"Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"):Object(a.b)(!c.length||l.length||u.length||s.length,31),__DEV__?Object(a.b)(l.length+u.length+s.length<=1,"react-apollo only supports a query, subscription, or a mutation per HOC. "+"".concat(e," had ").concat(l.length," queries, ").concat(s.length," ")+"subscriptions and ".concat(u.length," mutations. ")+"You can use 'compose' to join multiple operation types to a component"):Object(a.b)(l.length+u.length+s.length<=1,32),n=l.length?r.Query:r.Mutation,l.length||u.length||(n=r.Subscription);var d=l.length?l:u.length?u:s;__DEV__?Object(a.b)(1===d.length,"react-apollo only supports one definition per HOC. ".concat(e," had ")+"".concat(d.length," definitions. ")+"You can use 'compose' to join multiple operation types to a component"):Object(a.b)(1===d.length,33);var b=d[0];t=b.variableDefinitions||[];var f={name:b.name&&"Name"===b.name.kind?b.name.value:"data",type:n,variables:t};return o.set(e,f),f}(e),c=i(t),l=i(n.type);__DEV__?Object(a.b)(n.type===t,"Running a ".concat(c," requires a graphql ")+"".concat(c,", but a ").concat(l," was used instead.")):Object(a.b)(n.type===t,34)}},127:function(e,t,n){"use strict";var r=n(87),a=n(2),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},i=n(91),c=function(e,t){return a.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};c.displayName="CloseOutlined";t.a=a.forwardRef(c)},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n(2),o=n(5),i=n(55),c=n(21),l=n(3),u=n(108),s=n(107);function d(e,t){var n,d=Object(a.useContext)(Object(i.a)()),f=Object(s.a)(null===t||void 0===t?void 0:t.client);Object(u.b)(e,u.a.Query);var m,g=Object(a.useState)((function(){var n=b(e,t),r=null;return d.renderPromises&&(r=d.renderPromises.getSSRObservable(n)),r||(r=f.watchQuery(n),d.renderPromises&&d.renderPromises.registerSSRObservable(r,n)),d.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&r.getCurrentResult().loading&&d.renderPromises.addQueryPromise({getOptions:function(){return b(e,t)},fetchData:function(){return new Promise((function(e){var t=r.subscribe({next:function(n){n.loading||(e(),t.unsubscribe())},error:function(){e(),t.unsubscribe()},complete:function(){e()}})}))}},(function(){return null})),r})),p=g[0],y=g[1],v=Object(a.useState)((function(){var e,n,r=p.getCurrentResult();return!r.loading&&t&&(r.error?null===(e=t.onError)||void 0===e||e.call(t,r.error):r.data&&(null===(n=t.onCompleted)||void 0===n||n.call(t,r.data))),r})),j=v[0],h=v[1],O=Object(a.useRef)({client:f,query:e,options:t,result:j,previousData:void 0,watchQueryOptions:b(e,t)});Object(a.useEffect)((function(){var n,r,a,i=b(e,t);if(O.current.client===f&&Object(o.a)(O.current.query,e))Object(o.a)(O.current.watchQueryOptions,i)||(p.setOptions(i).catch((function(){})),a=p.getCurrentResult(),O.current.watchQueryOptions=i);else{var c=f.watchQuery(i);y(c),a=c.getCurrentResult()}if(a){var l=O.current.result;l.data&&(O.current.previousData=l.data),h(O.current.result=a),!a.loading&&t&&(j.loading||(j.error?null===(n=t.onError)||void 0===n||n.call(t,j.error):j.data&&(null===(r=t.onCompleted)||void 0===r||r.call(t,j.data))))}Object.assign(O.current,{client:f,query:e})}),[p,f,e,t]),Object(a.useEffect)((function(){if(!d.renderPromises){var e=p.subscribe(t,(function n(r){var a,i,c=p.last;e.unsubscribe();try{p.resetLastResults(),e=p.subscribe(t,n)}finally{p.last=c}if(!r.hasOwnProperty("graphQLErrors"))throw r;var u=O.current.result;(u&&u.loading||!Object(o.a)(r,u.error))&&(h(O.current.result={data:u.data,error:r,loading:!1,networkStatus:l.a.error}),null===(i=null===(a=O.current.options)||void 0===a?void 0:a.onError)||void 0===i||i.call(a,r))}));return function(){return e.unsubscribe()}}function t(){var e,t,n=O.current.result,r=p.getCurrentResult();n&&n.loading===r.loading&&n.networkStatus===r.networkStatus&&Object(o.a)(n.data,r.data)||(n.data&&(O.current.previousData=n.data),h(O.current.result=r),r.loading||null===(t=null===(e=O.current.options)||void 0===e?void 0:e.onCompleted)||void 0===t||t.call(e,r.data))}}),[p,d.renderPromises,f.disableNetworkFetches]),m=(n=j).partial,j=Object(r.f)(n,["partial"]),!m||!(null===t||void 0===t?void 0:t.partialRefetch)||j.loading||j.data&&0!==Object.keys(j.data).length||"cache-only"===p.options.fetchPolicy||(j=Object(r.a)(Object(r.a)({},j),{loading:!0,networkStatus:l.a.refetch}),p.refetch()),d.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&j.loading&&p.setOptions(b(e,t)).catch((function(){})),Object.assign(O.current,{options:t}),(d.renderPromises||f.disableNetworkFetches)&&!1===(null===t||void 0===t?void 0:t.ssr)?j=O.current.result={loading:!0,data:void 0,error:void 0,networkStatus:l.a.loading}:((null===t||void 0===t?void 0:t.skip)||"standby"===(null===t||void 0===t?void 0:t.fetchPolicy))&&(j={loading:!1,data:void 0,error:void 0,networkStatus:l.a.ready}),j.errors&&j.errors.length&&(j=Object(r.a)(Object(r.a)({},j),{error:j.error||new c.a({graphQLErrors:j.errors})}));var k=Object(a.useMemo)((function(){return{refetch:p.refetch.bind(p),fetchMore:p.fetchMore.bind(p),updateQuery:p.updateQuery.bind(p),startPolling:p.startPolling.bind(p),stopPolling:p.stopPolling.bind(p),subscribeToMore:p.subscribeToMore.bind(p)}}),[p]);return Object(r.a)(Object(r.a)(Object(r.a)({},k),{variables:b(e,t).variables,client:f,called:!0,previousData:O.current.previousData}),j)}function b(e,t){var n;void 0===t&&(t={});var a=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.displayName,Object(r.f)(t,["skip","ssr","onCompleted","onError","displayName"]));return a?o.fetchPolicy="standby":(!(null===(n=o.context)||void 0===n?void 0:n.renderPromises)||"network-only"!==o.fetchPolicy&&"cache-and-network"!==o.fetchPolicy)&&o.fetchPolicy||(o.fetchPolicy="cache-first"),o.variables||(o.variables={}),Object(r.a)({query:e},o)}},147:function(e,t,n){"use strict";var r=n(87),a=n(2),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},i=n(91),c=function(e,t){return a.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};c.displayName="CheckOutlined";t.a=a.forwardRef(c)},208:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(88),a=n(89),o=n(93),i=n(2),c=n(86),l=n.n(c),u=n(109),s=n(135),d=n(100),b=n(156),f=n(6);function m(e){return void 0!==e&&null!==e}var g=function(e){var t,n=e.itemPrefixCls,a=e.component,o=e.span,c=e.className,u=e.style,s=e.labelStyle,d=e.contentStyle,b=e.bordered,f=e.label,g=e.content,p=e.colon,y=a;return b?i.createElement(y,{className:l()((t={},Object(r.a)(t,"".concat(n,"-item-label"),m(f)),Object(r.a)(t,"".concat(n,"-item-content"),m(g)),t),c),style:u,colSpan:o},m(f)&&i.createElement("span",{style:s},f),m(g)&&i.createElement("span",{style:d},g)):i.createElement(y,{className:l()("".concat(n,"-item"),c),style:u,colSpan:o},i.createElement("div",{className:"".concat(n,"-item-container")},f&&i.createElement("span",{className:l()("".concat(n,"-item-label"),Object(r.a)({},"".concat(n,"-item-no-colon"),!p)),style:s},f),g&&i.createElement("span",{className:l()("".concat(n,"-item-content")),style:d},g)))};function p(e,t,n){var r=t.colon,a=t.prefixCls,o=t.bordered,c=n.component,l=n.type,u=n.showLabel,s=n.showContent,d=n.labelStyle,b=n.contentStyle;return e.map((function(e,t){var n=e.props,m=n.label,p=n.children,y=n.prefixCls,v=void 0===y?a:y,j=n.className,h=n.style,O=n.labelStyle,k=n.contentStyle,$=n.span,x=void 0===$?1:$,C=e.key;return"string"===typeof c?i.createElement(g,{key:"".concat(l,"-").concat(C||t),className:j,style:h,labelStyle:Object(f.a)(Object(f.a)({},d),O),contentStyle:Object(f.a)(Object(f.a)({},b),k),span:x,colon:r,component:c,itemPrefixCls:v,bordered:o,label:u?m:null,content:s?p:null}):[i.createElement(g,{key:"label-".concat(C||t),className:j,style:Object(f.a)(Object(f.a)(Object(f.a)({},d),h),O),span:1,colon:r,component:c[0],itemPrefixCls:v,bordered:o,label:m}),i.createElement(g,{key:"content-".concat(C||t),className:j,style:Object(f.a)(Object(f.a)(Object(f.a)({},b),h),k),span:2*x-1,component:c[1],itemPrefixCls:v,bordered:o,content:p})]}))}var y=function(e){var t=i.useContext(h),n=e.prefixCls,r=e.vertical,a=e.row,o=e.index,c=e.bordered;return r?i.createElement(i.Fragment,null,i.createElement("tr",{key:"label-".concat(o),className:"".concat(n,"-row")},p(a,e,Object(f.a)({component:"th",type:"label",showLabel:!0},t))),i.createElement("tr",{key:"content-".concat(o),className:"".concat(n,"-row")},p(a,e,Object(f.a)({component:"td",type:"content",showContent:!0},t)))):i.createElement("tr",{key:o,className:"".concat(n,"-row")},p(a,e,Object(f.a)({component:c?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},v=function(e){return e.children},j=n(106),h=i.createContext({}),O={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function k(e,t,n){var r=e;return(void 0===t||t>n)&&(r=Object(j.a)(e,{span:n}),Object(d.a)(void 0===t,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),r}function $(e){var t,n=e.prefixCls,c=e.title,d=e.extra,f=e.column,m=void 0===f?O:f,g=e.colon,p=void 0===g||g,v=e.bordered,j=e.layout,$=e.children,x=e.className,C=e.style,S=e.size,B=e.labelStyle,w=e.contentStyle,N=i.useContext(b.b),E=N.getPrefixCls,P=N.direction,I=E("descriptions",n),_=i.useState({}),D=Object(a.a)(_,2),L=D[0],Q=D[1],M=function(e,t){if("number"===typeof e)return e;if("object"===Object(o.a)(e))for(var n=0;n<s.b.length;n++){var r=s.b[n];if(t[r]&&void 0!==e[r])return e[r]||O[r]}return 3}(m,L);i.useEffect((function(){var e=s.a.subscribe((function(e){"object"===Object(o.a)(m)&&Q(e)}));return function(){s.a.unsubscribe(e)}}),[]);var q=function(e,t){var n=Object(u.a)(e).filter((function(e){return e})),r=[],a=[],o=t;return n.forEach((function(e,i){var c,l=null===(c=e.props)||void 0===c?void 0:c.span,u=l||1;if(i===n.length-1)return a.push(k(e,l,o)),void r.push(a);u<o?(o-=u,a.push(e)):(a.push(k(e,u,o)),r.push(a),o=t,a=[])})),r}($,M),R=i.useMemo((function(){return{labelStyle:B,contentStyle:w}}),[B,w]);return i.createElement(h.Provider,{value:R},i.createElement("div",{className:l()(I,(t={},Object(r.a)(t,"".concat(I,"-").concat(S),S&&"default"!==S),Object(r.a)(t,"".concat(I,"-bordered"),!!v),Object(r.a)(t,"".concat(I,"-rtl"),"rtl"===P),t),x),style:C},(c||d)&&i.createElement("div",{className:"".concat(I,"-header")},c&&i.createElement("div",{className:"".concat(I,"-title")},c),d&&i.createElement("div",{className:"".concat(I,"-extra")},d)),i.createElement("div",{className:"".concat(I,"-view")},i.createElement("table",null,i.createElement("tbody",null,q.map((function(e,t){return i.createElement(y,{key:t,index:t,colon:p,prefixCls:I,vertical:"vertical"===j,bordered:v,row:e})})))))))}$.Item=v;t.b=$},426:function(e,t,n){"use strict";n.r(t);var r,a,o=n(89),i=n(208),c=n(416),l=n(2),u=n(4),s=n(95),d=n(104),b=n(175),f=d.a.div(r||(r=Object(s.a)(["\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &.attach-group {\n    display: flex;\n    flex-direction: column;\n  }\n\n  img {\n    object-fit: contain;\n    width: 400px;\n    height: 400px;\n  }\n"]))),m=Object(d.a)(b.a)(a||(a=Object(s.a)(["\n  margin: 15px 0;\n"]))),g=n(130),p=n(103),y=n(11);t.default=function(){var e,t,n=Object(u.g)(),r=Object(u.i)(),a=r.param,s=r.subparam,d=s,b=Object(u.h)().state,v=Object(l.useState)(),j=Object(o.a)(v,2),h=j[0],O=j[1],k=Object(l.useState)(),$=Object(o.a)(k,2),x=$[0],C=$[1],S=Object(g.a)(p.k,{variables:{category:d}}),B=S.data,w=S.loading,N=S.refetch;return Object(l.useEffect)((function(){var e=function(){var e;null!==B&&void 0!==B&&B.getBoardByCategory.ok&&0!==(null===(e=B.getBoardByCategory.data)||void 0===e?void 0:e.length)?B.getBoardByCategory.data&&0!==B.getBoardByCategory.data.length&&(B.getBoardByCategory.data[0].files&&O(B.getBoardByCategory.data[0].files),B.getBoardByCategory.data[0].images&&C(B.getBoardByCategory.data[0].images)):(O([]),C([]))};return e(),function(){return e()}}),[B]),Object(l.useEffect)((function(){var e=function(){N&&N()};return b&&b.refresh&&e(),function(){return e()}}),[N,b]),w?Object(y.jsx)(y.Fragment,{children:"loading"}):Object(y.jsxs)(f,{children:[Object(y.jsxs)("div",{className:"button-group",children:[Object(y.jsx)(m,{type:"ghost",onClick:function(){return n.goBack()},children:"\ub4a4\ub85c"}),0!==(null===B||void 0===B||null===(e=B.getBoardByCategory.data)||void 0===e?void 0:e.length)&&null!==B&&void 0!==B&&B.getBoardByCategory.ok?Object(y.jsx)(m,{type:"primary",onClick:function(){return n.push("/admin/".concat(a,"/edit-image-").concat(a,"?category=").concat(s,"&id=").concat(B.getBoardByCategory.data&&B.getBoardByCategory.data[0].id))},children:"\uc218\uc815\ud558\uae30"}):Object(y.jsx)(m,{type:"primary",onClick:function(){return n.push("/admin/".concat(a,"/create-image-").concat(a,"?category=").concat(s,"&param=").concat(a,"&subparam=").concat(s))},children:"\uae00\uc4f0\uae30"})]}),Object(y.jsxs)(i.b,{bordered:!0,column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1},layout:"horizontal",children:[Object(y.jsx)(i.b.Item,{label:"\ub9c1\ud06c",span:4,labelStyle:{width:100},children:0!==(null===B||void 0===B||null===(t=B.getBoardByCategory.data)||void 0===t?void 0:t.length)&&null!==B&&void 0!==B&&B.getBoardByCategory.ok?Object(y.jsx)("a",{href:"".concat(B.getBoardByCategory.data&&B.getBoardByCategory.data[0].link),target:"_blank",rel:"noreferrer",children:B.getBoardByCategory.data&&B.getBoardByCategory.data[0].link}):Object(y.jsx)(c.a.Text,{children:"\ub9c1\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"})}),Object(y.jsx)(i.b.Item,{label:"\ud30c\uc77c",span:4,labelStyle:{width:100},children:h&&h.length?h.map((function(e,t){return Object(y.jsx)("span",{className:"attach-group",children:Object(y.jsx)("a",{href:"".concat(null===e||void 0===e?void 0:e.url),download:!0,target:"_blank",rel:"noreferrer",children:null===e||void 0===e?void 0:e.fileName})},null===e||void 0===e?void 0:e.fileName)})):Object(y.jsx)(c.a.Text,{children:"\ucca8\ubd80\ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})}),Object(y.jsx)(i.b.Item,{label:"\uc774\ubbf8\uc9c0",span:4,labelStyle:{width:100},children:x&&x[0]?Object(y.jsx)("img",{src:x[0].url,alt:x[0].fileName}):Object(y.jsx)(c.a.Text,{children:"\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"})})]})]})}}}]);
//# sourceMappingURL=18.398f7ad0.chunk.js.map