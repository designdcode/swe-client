(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[29],{102:function(n,t,e){"use strict";e.d(t,"a",(function(){return O})),e.d(t,"j",(function(){return v})),e.d(t,"d",(function(){return x})),e.d(t,"h",(function(){return y})),e.d(t,"e",(function(){return k})),e.d(t,"f",(function(){return $})),e.d(t,"b",(function(){return w})),e.d(t,"c",(function(){return S})),e.d(t,"g",(function(){return N})),e.d(t,"i",(function(){return P}));var r,i,a,o,c,l,s,d,u,b,g,f,p,j,m=e(93),h=e(475),O=Object(h.a)(r||(r=Object(m.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n"]))),v=Object(h.a)(i||(i=Object(m.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),x=Object(h.a)(a||(a=Object(m.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),y=Object(h.a)(o||(o=Object(m.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n"]))),k=(Object(h.a)(c||(c=Object(m.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(h.a)(l||(l=Object(m.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(h.a)(s||(s=Object(m.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),$=Object(h.a)(d||(d=Object(m.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),w=Object(h.a)(u||(u=Object(m.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),S=Object(h.a)(b||(b=Object(m.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),N=(Object(h.a)(g||(g=Object(m.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(h.a)(f||(f=Object(m.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),P=(Object(h.a)(p||(p=Object(m.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(h.a)(j||(j=Object(m.a)(["\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n"]))))},122:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e(87),i=e(2),a=function(){var n="object"===typeof window,t=Object(i.useCallback)((function(){return{width:n?window.innerWidth:0,height:n?window.innerWidth:0}}),[n]),e=Object(i.useState)(t),a=Object(r.a)(e,2),o=a[0],c=a[1];return Object(i.useEffect)((function(){if(n){var e=function(){c(t())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}}),[t,n]),o}},134:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(0),i=e(2),a=e(5),o=e(55),c=e(21),l=e(3),s=e(107),d=e(106);function u(n,t){var e,u=Object(i.useContext)(Object(o.a)()),g=Object(d.a)(null===t||void 0===t?void 0:t.client);Object(s.b)(n,s.a.Query);var f,p=Object(i.useState)((function(){var e=b(n,t),r=null;return u.renderPromises&&(r=u.renderPromises.getSSRObservable(e)),r||(r=g.watchQuery(e),u.renderPromises&&u.renderPromises.registerSSRObservable(r,e)),u.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&r.getCurrentResult().loading&&u.renderPromises.addQueryPromise({getOptions:function(){return b(n,t)},fetchData:function(){return new Promise((function(n){var t=r.subscribe({next:function(e){e.loading||(n(),t.unsubscribe())},error:function(){n(),t.unsubscribe()},complete:function(){n()}})}))}},(function(){return null})),r})),j=p[0],m=p[1],h=Object(i.useState)((function(){var n,e,r=j.getCurrentResult();return!r.loading&&t&&(r.error?null===(n=t.onError)||void 0===n||n.call(t,r.error):r.data&&(null===(e=t.onCompleted)||void 0===e||e.call(t,r.data))),r})),O=h[0],v=h[1],x=Object(i.useRef)({client:g,query:n,options:t,result:O,previousData:void 0,watchQueryOptions:b(n,t)});Object(i.useEffect)((function(){var e,r,i,o=b(n,t);if(x.current.client===g&&Object(a.a)(x.current.query,n))Object(a.a)(x.current.watchQueryOptions,o)||(j.setOptions(o).catch((function(){})),i=j.getCurrentResult(),x.current.watchQueryOptions=o);else{var c=g.watchQuery(o);m(c),i=c.getCurrentResult()}if(i){var l=x.current.result;l.data&&(x.current.previousData=l.data),v(x.current.result=i),!i.loading&&t&&(O.loading||(O.error?null===(e=t.onError)||void 0===e||e.call(t,O.error):O.data&&(null===(r=t.onCompleted)||void 0===r||r.call(t,O.data))))}Object.assign(x.current,{client:g,query:n})}),[j,g,n,t]),Object(i.useEffect)((function(){if(!u.renderPromises){var n=j.subscribe(t,(function e(r){var i,o,c=j.last;n.unsubscribe();try{j.resetLastResults(),n=j.subscribe(t,e)}finally{j.last=c}if(!r.hasOwnProperty("graphQLErrors"))throw r;var s=x.current.result;(s&&s.loading||!Object(a.a)(r,s.error))&&(v(x.current.result={data:s.data,error:r,loading:!1,networkStatus:l.a.error}),null===(o=null===(i=x.current.options)||void 0===i?void 0:i.onError)||void 0===o||o.call(i,r))}));return function(){return n.unsubscribe()}}function t(){var n,t,e=x.current.result,r=j.getCurrentResult();e&&e.loading===r.loading&&e.networkStatus===r.networkStatus&&Object(a.a)(e.data,r.data)||(e.data&&(x.current.previousData=e.data),v(x.current.result=r),r.loading||null===(t=null===(n=x.current.options)||void 0===n?void 0:n.onCompleted)||void 0===t||t.call(n,r.data))}}),[j,u.renderPromises,g.disableNetworkFetches]),f=(e=O).partial,O=Object(r.f)(e,["partial"]),!f||!(null===t||void 0===t?void 0:t.partialRefetch)||O.loading||O.data&&0!==Object.keys(O.data).length||"cache-only"===j.options.fetchPolicy||(O=Object(r.a)(Object(r.a)({},O),{loading:!0,networkStatus:l.a.refetch}),j.refetch()),u.renderPromises&&!1!==(null===t||void 0===t?void 0:t.ssr)&&!(null===t||void 0===t?void 0:t.skip)&&O.loading&&j.setOptions(b(n,t)).catch((function(){})),Object.assign(x.current,{options:t}),(u.renderPromises||g.disableNetworkFetches)&&!1===(null===t||void 0===t?void 0:t.ssr)?O=x.current.result={loading:!0,data:void 0,error:void 0,networkStatus:l.a.loading}:((null===t||void 0===t?void 0:t.skip)||"standby"===(null===t||void 0===t?void 0:t.fetchPolicy))&&(O={loading:!1,data:void 0,error:void 0,networkStatus:l.a.ready}),O.errors&&O.errors.length&&(O=Object(r.a)(Object(r.a)({},O),{error:O.error||new c.a({graphQLErrors:O.errors})}));var y=Object(i.useMemo)((function(){return{refetch:j.refetch.bind(j),fetchMore:j.fetchMore.bind(j),updateQuery:j.updateQuery.bind(j),startPolling:j.startPolling.bind(j),stopPolling:j.stopPolling.bind(j),subscribeToMore:j.subscribeToMore.bind(j)}}),[j]);return Object(r.a)(Object(r.a)(Object(r.a)({},y),{variables:b(n,t).variables,client:g,called:!0,previousData:x.current.previousData}),O)}function b(n,t){var e;void 0===t&&(t={});var i=t.skip,a=(t.ssr,t.onCompleted,t.onError,t.displayName,Object(r.f)(t,["skip","ssr","onCompleted","onError","displayName"]));return i?a.fetchPolicy="standby":(!(null===(e=a.context)||void 0===e?void 0:e.renderPromises)||"network-only"!==a.fetchPolicy&&"cache-and-network"!==a.fetchPolicy)&&a.fetchPolicy||(a.fetchPolicy="cache-first"),a.variables||(a.variables={}),Object(r.a)({query:n},a)}},462:function(n,t,e){"use strict";e.r(t);var r,i,a,o,c,l,s,d,u,b=e(93),g=e(2),f=e(101),p=e(4),j=e(156),m=e(119),h=e(122),O=e(45),v=e(134),x=e(102),y=e(11);t.default=function(){var n,t=Object(h.a)(),e=Object(p.i)(),r=e.param,i=e.subparam,a=Object(v.a)(x.j,{variables:{category:i}}),o=a.loading,c=a.data,l=Object(g.useCallback)((function(){switch(i.split("-")[1]){case"cs":return Object(y.jsx)("a",{className:"link-button",href:"https://cs.sunmoon.ac.kr/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"/img/cs_button.jpeg",alt:"buttonimg"})});case"ai":return Object(y.jsx)("a",{className:"link-button",href:"https://ais.sunmoon.ac.kr/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"/img/ai_button.jpg",alt:"buttonimg"})});case"convergence":return Object(y.jsx)("a",{className:"link-button",href:"https://swc.sunmoon.ac.kr/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"/img/swc_button.jpeg",alt:"buttonimg"})});case"it":return Object(y.jsx)("a",{className:"link-button",href:"https://itedu.sunmoon.ac.kr/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"/img/itedu_button.jpg",alt:"buttonimg"})});case"smartcar":return Object(y.jsx)("a",{className:"link-button",href:"https://smartcar.sunmoon.ac.kr/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"/img/smartcar_button.jpeg",alt:"buttonimg"})});case"sw":return Object(y.jsx)("a",{className:"link-button",href:"https://sw.sunmoon.ac.kr/",target:"_blank",rel:"noreferrer",children:Object(y.jsx)("img",{src:"/img/sw_button.jpeg",alt:"buttonimg"})});default:return null}}),[i]);return o?Object(y.jsx)("div",{children:"loading..."}):Object(y.jsxs)(k,{children:[Object(y.jsxs)($,{children:[Object(y.jsx)(w,{margin:t.width>1500?"25%":"15%",children:j.a.map((function(n,t){return n.title===r.split("-")[0]?Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{className:"cover-main-title",children:n.ko_title}),Object(y.jsx)("span",{className:"cover-description",children:n.description})]},n.key):null}))}),Object(y.jsx)(S,{isBigger:"major"===r||"basic"===r,children:Object(y.jsx)("div",{className:"submenu-content",children:j.a.map((function(n,t){return n.title===r?n.subMenu.map((function(n,t){var e=n.key===i?0:1;return Object(y.jsxs)(P,{className:"submenu-col",first:e,children:[Object(y.jsx)(B,{first:e}),Object(y.jsx)(N,{to:"/main/detail/".concat(r,"/").concat(n.key),first:e,children:Object(y.jsx)("span",{style:{fontWeight:600},children:n.ko_title})})]},"".concat(t,"key"))})):null}))})}),Object(y.jsx)("img",{src:"/img/detailBG.jpeg",alt:"cover"})]}),Object(y.jsxs)(I,{children:["sitelink"===r.toString()&&l(),Object(y.jsx)(C,{children:(null===c||void 0===c?void 0:c.getBoardByCategory.data)&&c.getBoardByCategory.data[0]&&c.getBoardByCategory.data[0].images&&Object(y.jsx)("img",{src:null===(n=c.getBoardByCategory.data[0].images[0])||void 0===n?void 0:n.url,alt:"uploadedImage"})})]})]})};var k=f.a.div(r||(r=Object(b.a)(["\n  "," {\n    min-height: 50vh;\n  }\n  "," {\n    margin-top: 15px;\n    width: 100%;\n    min-width: 1280px;\n    max-width: 1920px;\n    min-height: 100%;\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a)),$=f.a.div(i||(i=Object(b.a)(["\n  "," {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  "," {\n    width: 100%;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a)),w=f.a.div(a||(a=Object(b.a)(["\n  "," {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  "," {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 500;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a),(function(n){return n.margin})),S=f.a.div(o||(o=Object(b.a)(["\n  "," {\n    display: none;\n  }\n  "," {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      width: 1280px;\n      min-height: 50px;\n      height: ",";\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      padding-left: 160px;\n    }\n    & .submenu-col {\n      width: 170px;\n      height: 50px;\n      display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a),(function(n){return n.isBigger?"100px":"50px"})),N=Object(f.a)(O.b)(c||(c=Object(b.a)(["\n  "," {\n  }\n\n  "," {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n    font-size: 13px;\n    color: ",";\n    &:hover {\n      color: white;\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a),(function(n){return 0===n.first?"white":"black"})),P=f.a.div(l||(l=Object(b.a)(["\n  "," {\n  }\n\n  "," {\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a),(function(n){return 0===n.first?"#0c1b58":""}),(function(n){return 0===n.first?"white":"black"})),B=f.a.div(s||(s=Object(b.a)(["\n  "," {\n  }\n\n  "," {\n    width: 50%;\n    height: 2px;\n    border-top: ",";\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a),(function(n){return 0===n.first?"2px solid white":""})),I=f.a.div(d||(d=Object(b.a)(["\n  "," {\n    height: 100%;\n  }\n  "," {\n    width: 1280px;\n    min-height: 100vh;\n    margin: 0 auto;\n    & .link-button {\n      display: flex;\n      justify-content: center;\n      width: 100%;\n      min-height: 50px;\n      margin: 20px auto;\n      margin-top: 150px;\n      & img {\n        width: 300px;\n      }\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a)),C=f.a.div(u||(u=Object(b.a)(["\n  "," {\n    width: 100%;\n    & img {\n      width: 100%;\n      object-fit: contain;\n    }\n  }\n  "," {\n    padding: 60px 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    & img {\n      width: 80%;\n      margin: 0 auto;\n    }\n  }\n"])),Object(m.d)(m.b),Object(m.d)(m.a))}}]);
//# sourceMappingURL=29.90aaca1c.chunk.js.map