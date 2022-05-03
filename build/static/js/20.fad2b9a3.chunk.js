(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[20],{106:function(e,n,t){"use strict";t.d(n,"a",(function(){return y})),t.d(n,"k",(function(){return w})),t.d(n,"e",(function(){return C})),t.d(n,"i",(function(){return N})),t.d(n,"f",(function(){return $})),t.d(n,"g",(function(){return k})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return E})),t.d(n,"j",(function(){return I})),t.d(n,"d",(function(){return P})),t.d(n,"h",(function(){return z}));var r,a,i,c,o,l,s,d,u,p,b,f,m,j,h,O,g,v=t(94),x=t(535),y=Object(x.a)(r||(r=Object(v.a)(["\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n"]))),w=Object(x.a)(a||(a=Object(v.a)(["\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),C=Object(x.a)(i||(i=Object(v.a)(["\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),N=Object(x.a)(c||(c=Object(v.a)(["\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n"]))),$=(Object(x.a)(o||(o=Object(v.a)(["\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(x.a)(l||(l=Object(v.a)(["\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n"]))),Object(x.a)(s||(s=Object(v.a)(["\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n"])))),k=Object(x.a)(d||(d=Object(v.a)(["\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),S=Object(x.a)(u||(u=Object(v.a)(["\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),E=Object(x.a)(p||(p=Object(v.a)(["\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n"]))),I=(Object(x.a)(b||(b=Object(v.a)(["\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(x.a)(f||(f=Object(v.a)(["\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n"]))),Object(x.a)(m||(m=Object(v.a)(["\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n"]))),Object(x.a)(j||(j=Object(v.a)(["\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n"])))),P=Object(x.a)(h||(h=Object(v.a)(["\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n"]))),z=(Object(x.a)(O||(O=Object(v.a)(["\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n"]))),Object(x.a)(g||(g=Object(v.a)(["\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n"]))))},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(89),a=t(2),i=function(){var e="object"===typeof window,n=Object(a.useCallback)((function(){return{width:e?window.innerWidth:0,height:e?window.innerWidth:0}}),[e]),t=Object(a.useState)(n),i=Object(r.a)(t,2),c=i[0],o=i[1];return Object(a.useEffect)((function(){if(e){var t=function(){o(n())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}}),[n,e]),c}},181:function(e,n,t){"use strict";t.d(n,"a",(function(){return y}));var r=t(88),a=t(6),i=t(89),c=t(2),o=t(87),l=t.n(o),s=t(105),d=t(90),u={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},p=t(92),b=function(e,n){return c.createElement(p.a,Object(d.a)(Object(d.a)({},e),{},{ref:n,icon:u}))};b.displayName="BarsOutlined";var f=c.forwardRef(b),m=t(200),j=t(272),h=t(219),O=t(198),g=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},x={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},y=c.createContext({}),w=function(){var e=0;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(n).concat(e)}}(),C=c.forwardRef((function(e,n){var t=e.prefixCls,o=e.className,d=e.trigger,u=e.children,p=e.defaultCollapsed,b=void 0!==p&&p,C=e.theme,N=void 0===C?"dark":C,$=e.style,k=void 0===$?{}:$,S=e.collapsible,E=void 0!==S&&S,I=e.reverseArrow,P=void 0!==I&&I,z=e.width,A=void 0===z?200:z,L=e.collapsedWidth,M=void 0===L?80:L,B=e.zeroWidthTriggerStyle,R=e.breakpoint,D=e.onCollapse,F=e.onBreakpoint,T=v(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),W=Object(c.useContext)(h.d).siderHook,G=Object(c.useState)("collapsed"in T?T.collapsed:b),H=Object(i.a)(G,2),_=H[0],q=H[1],V=Object(c.useState)(!1),Y=Object(i.a)(V,2),J=Y[0],U=Y[1];Object(c.useEffect)((function(){"collapsed"in T&&q(T.collapsed)}),[T.collapsed]);var K=function(e,n){"collapsed"in T||q(e),null===D||void 0===D||D(e,n)},Q=Object(c.useRef)();Q.current=function(e){U(e.matches),null===F||void 0===F||F(e.matches),_!==e.matches&&K(e.matches,"responsive")},Object(c.useEffect)((function(){function e(e){return Q.current(e)}var n;if("undefined"!==typeof window){var t=window.matchMedia;if(t&&R&&R in x){n=t("(max-width: ".concat(x[R],")"));try{n.addEventListener("change",e)}catch(r){n.addListener(e)}e(n)}}return function(){try{null===n||void 0===n||n.removeEventListener("change",e)}catch(r){null===n||void 0===n||n.removeListener(e)}}}),[]),Object(c.useEffect)((function(){var e=w("ant-sider-");return W.addSider(e),function(){return W.removeSider(e)}}),[]);var X=function(){K(!_,"clickTrigger")},Z=Object(c.useContext)(O.b).getPrefixCls,ee=c.useMemo((function(){return{siderCollapsed:_}}),[_]);return c.createElement(y.Provider,{value:ee},function(){var e,i=Z("layout-sider",t),p=Object(s.a)(T,["collapsed"]),b=_?M:A,h=g(b)?"".concat(b,"px"):String(b),O=0===parseFloat(String(M||0))?c.createElement("span",{onClick:X,className:l()("".concat(i,"-zero-width-trigger"),"".concat(i,"-zero-width-trigger-").concat(P?"right":"left")),style:B},d||c.createElement(f,null)):null,v={expanded:P?c.createElement(m.a,null):c.createElement(j.a,null),collapsed:P?c.createElement(j.a,null):c.createElement(m.a,null)}[_?"collapsed":"expanded"],x=null!==d?O||c.createElement("div",{className:"".concat(i,"-trigger"),onClick:X,style:{width:h}},d||v):null,y=Object(a.a)(Object(a.a)({},k),{flex:"0 0 ".concat(h),maxWidth:h,minWidth:h,width:h}),w=l()(i,"".concat(i,"-").concat(N),(e={},Object(r.a)(e,"".concat(i,"-collapsed"),!!_),Object(r.a)(e,"".concat(i,"-has-trigger"),E&&null!==d&&!O),Object(r.a)(e,"".concat(i,"-below"),!!J),Object(r.a)(e,"".concat(i,"-zero-width"),0===parseFloat(h)),e),o);return c.createElement("aside",Object(a.a)({className:w},p,{style:y,ref:n}),c.createElement("div",{className:"".concat(i,"-children")},u),E||J&&O?x:null)}())}));C.displayName="Sider";n.b=C},218:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function a(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t++)if(a=e[t],i=n[t],!(a===i||r(a)&&r(i)))return!1;var a,i;return!0}function i(e,n){void 0===n&&(n=a);var t=null;function r(){for(var r=[],a=0;a<arguments.length;a++)r[a]=arguments[a];if(t&&t.lastThis===this&&n(r,t.lastArgs))return t.lastResult;var i=e.apply(this,r);return t={lastResult:i,lastArgs:r,lastThis:this},i}return r.clear=function(){t=null},r}},219:function(e,n,t){"use strict";t.d(n,"d",(function(){return p})),t.d(n,"c",(function(){return j})),t.d(n,"b",(function(){return h})),t.d(n,"a",(function(){return O}));var r=t(93),a=t(88),i=t(89),c=t(6),o=t(2),l=t(87),s=t.n(l),d=t(198),u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},p=o.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function b(e){var n=e.suffixCls,t=e.tagName,r=e.displayName;return function(e){var a=function(r){var a=o.useContext(d.b).getPrefixCls,i=r.prefixCls,l=a(n,i);return o.createElement(e,Object(c.a)({prefixCls:l,tagName:t},r))};return a.displayName=r,a}}var f=function(e){var n=e.prefixCls,t=e.className,r=e.children,a=e.tagName,i=u(e,["prefixCls","className","children","tagName"]),l=s()(n,t);return o.createElement(a,Object(c.a)({className:l},i),r)},m=b({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var n,t=o.useContext(d.b).direction,l=o.useState([]),b=Object(i.a)(l,2),f=b[0],m=b[1],j=e.prefixCls,h=e.className,O=e.children,g=e.hasSider,v=e.tagName,x=u(e,["prefixCls","className","children","hasSider","tagName"]),y=s()(j,(n={},Object(a.a)(n,"".concat(j,"-has-sider"),"boolean"===typeof g?g:f.length>0),Object(a.a)(n,"".concat(j,"-rtl"),"rtl"===t),n),h),w=o.useMemo((function(){return{siderHook:{addSider:function(e){m((function(n){return[].concat(Object(r.a)(n),[e])}))},removeSider:function(e){m((function(n){return n.filter((function(n){return n!==e}))}))}}}}),[]);return o.createElement(p.Provider,{value:w},o.createElement(v,Object(c.a)({className:y},x),O))})),j=b({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(f),h=b({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(f),O=b({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(f);n.e=m},226:function(e,n,t){"use strict";var r=t(6),a=t(96),i=t(98),c=t(99),o=t(100),l=t(2),s=t(140),d=t(87),u=t.n(d),p=t(105),b=t(199),f=t(218),m=Object(l.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),j=t(107);var h=function(e){var n,t,a=e.popupClassName,i=e.icon,c=e.title,o=l.useContext(m),d=o.prefixCls,b=o.inlineCollapsed,f=o.antdMenuTheme,h=Object(s.g)();if(i){var O=Object(j.b)(c)&&"span"===c.type;t=l.createElement(l.Fragment,null,Object(j.a)(i,{className:u()(Object(j.b)(i)?null===(n=i.props)||void 0===n?void 0:n.className:"","".concat(d,"-item-icon"))}),O?c:l.createElement("span",{className:"".concat(d,"-title-content")},c))}else t=b&&!h.length&&c&&"string"===typeof c?l.createElement("div",{className:"".concat(d,"-inline-collapsed-noicon")},c.charAt(0)):l.createElement("span",{className:"".concat(d,"-title-content")},c);var g=l.useMemo((function(){return Object(r.a)(Object(r.a)({},o),{firstLevel:!1})}),[o]);return l.createElement(m.Provider,{value:g},l.createElement(s.e,Object(r.a)({},Object(p.a)(e,["icon"]),{title:t,popupClassName:u()(d,"".concat(d,"-").concat(f),a)})))},O=t(88),g=t(112),v=t(182),x=t(181),y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},w=function(e){Object(c.a)(t,e);var n=Object(o.a)(t);function t(){var e;return Object(a.a)(this,t),(e=n.apply(this,arguments)).renderItem=function(n){var t,a,i=n.siderCollapsed,c=e.context,o=c.prefixCls,d=c.firstLevel,p=c.inlineCollapsed,b=c.direction,f=e.props,m=f.className,h=f.children,x=e.props,w=x.title,C=x.icon,N=x.danger,$=y(x,["title","icon","danger"]),k=w;"undefined"===typeof w?k=d?h:"":!1===w&&(k="");var S={title:k};i||p||(S.title=null,S.visible=!1);var E=Object(g.a)(h).length;return l.createElement(v.a,Object(r.a)({},S,{placement:"rtl"===b?"left":"right",overlayClassName:"".concat(o,"-inline-collapsed-tooltip")}),l.createElement(s.b,Object(r.a)({},$,{className:u()((t={},Object(O.a)(t,"".concat(o,"-item-danger"),N),Object(O.a)(t,"".concat(o,"-item-only-child"),1===(C?E+1:E)),t),m),title:"string"===typeof w?w:void 0}),Object(j.a)(C,{className:u()(Object(j.b)(C)?null===(a=C.props)||void 0===a?void 0:a.className:"","".concat(o,"-item-icon"))}),e.renderItemChildren(p)))},e}return Object(i.a)(t,[{key:"renderItemChildren",value:function(e){var n=this.context,t=n.prefixCls,r=n.firstLevel,a=this.props,i=a.icon,c=a.children,o=l.createElement("span",{className:"".concat(t,"-title-content")},c);return(!i||Object(j.b)(c)&&"span"===c.type)&&c&&e&&r&&"string"===typeof c?l.createElement("div",{className:"".concat(t,"-inline-collapsed-noicon")},c.charAt(0)):o}},{key:"render",value:function(){return l.createElement(x.a.Consumer,null,this.renderItem)}}]),t}(l.Component);w.contextType=m;var C=t(198),N=t(101),$=t(150),k=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},S=function(e){var n=e.prefixCls,t=e.className,a=e.dashed,i=k(e,["prefixCls","className","dashed"]),c=(0,l.useContext(C.b).getPrefixCls)("menu",n),o=u()(Object(O.a)({},"".concat(c,"-item-divider-dashed"),!!a),t);return l.createElement(s.a,Object(r.a)({className:o},i))},E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},I=function(e){Object(c.a)(t,e);var n=Object(o.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=n.call(this,e)).renderMenu=function(e){var n=e.getPopupContainer,t=e.getPrefixCls,a=e.direction,c=t(),o=i.props,d=o.prefixCls,h=o.className,O=o.theme,g=o.expandIcon,v=E(o,["prefixCls","className","theme","expandIcon"]),x=Object(p.a)(v,["siderCollapsed","collapsedWidth"]),y=i.getInlineCollapsed(),w={horizontal:{motionName:"".concat(c,"-slide-up")},inline:$.a,other:{motionName:"".concat(c,"-zoom-big")}},C=t("menu",d),N=u()("".concat(C,"-").concat(O),h),k=Object(f.a)((function(e,n,t,r){return{prefixCls:e,inlineCollapsed:n||!1,antdMenuTheme:t,direction:r,firstLevel:!0}}))(C,y,O,a);return l.createElement(m.Provider,{value:k},l.createElement(s.f,Object(r.a)({getPopupContainer:n,overflowedIndicator:l.createElement(b.a,null),overflowedIndicatorPopupClassName:"".concat(C,"-").concat(O)},x,{inlineCollapsed:y,className:N,prefixCls:C,direction:a,defaultMotions:w,expandIcon:Object(j.a)(g,{className:"".concat(C,"-submenu-expand-icon")})})))},Object(N.a)(!("inlineCollapsed"in e&&"inline"!==e.mode),"Menu","`inlineCollapsed` should only be used when `mode` is inline."),Object(N.a)(!(void 0!==e.siderCollapsed&&"inlineCollapsed"in e),"Menu","`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."),i}return Object(i.a)(t,[{key:"getInlineCollapsed",value:function(){var e=this.props,n=e.inlineCollapsed,t=e.siderCollapsed;return void 0!==t?t:n}},{key:"render",value:function(){return l.createElement(C.a,null,this.renderMenu)}}]),t}(l.Component);I.defaultProps={theme:"light"};var P=function(e){Object(c.a)(t,e);var n=Object(o.a)(t);function t(){return Object(a.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.createElement(x.a.Consumer,null,(function(n){return l.createElement(I,Object(r.a)({},e.props,n))}))}}]),t}(l.Component);P.Divider=S,P.Item=w,P.SubMenu=h,P.ItemGroup=s.c;n.a=P},231:function(e,n,t){"use strict";var r=t(6),a=t(88),i=t(2),c=t(269),o=t(87),l=t.n(o),s=t(200),d=t(89),u=t(199),p=t(156),b=t(198),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},m=p.a.Group,j=function(e){var n=i.useContext(b.b),t=n.getPopupContainer,a=n.getPrefixCls,c=n.direction,o=e.prefixCls,s=e.type,j=void 0===s?"default":s,h=e.disabled,O=e.onClick,g=e.htmlType,v=e.children,x=e.className,w=e.overlay,C=e.trigger,N=e.align,$=e.visible,k=e.onVisibleChange,S=e.placement,E=e.getPopupContainer,I=e.href,P=e.icon,z=void 0===P?i.createElement(u.a,null):P,A=e.title,L=e.buttonsRender,M=void 0===L?function(e){return e}:L,B=e.mouseEnterDelay,R=e.mouseLeaveDelay,D=e.overlayClassName,F=e.overlayStyle,T=f(e,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle"]),W=a("dropdown-button",o),G={align:N,overlay:w,disabled:h,trigger:h?[]:C,onVisibleChange:k,getPopupContainer:E||t,mouseEnterDelay:B,mouseLeaveDelay:R,overlayClassName:D,overlayStyle:F};"visible"in e&&(G.visible=$),G.placement="placement"in e?S:"rtl"===c?"bottomLeft":"bottomRight";var H=M([i.createElement(p.a,{type:j,disabled:h,onClick:O,htmlType:g,href:I,title:A},v),i.createElement(p.a,{type:j,icon:z})]),_=Object(d.a)(H,2),q=_[0],V=_[1];return i.createElement(m,Object(r.a)({},T,{className:l()(W,x)}),q,i.createElement(y,G,V))};j.__ANT_BUTTON=!0;var h=j,O=t(101),g=t(133),v=t(107),x=(Object(g.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight"),function(e){var n,t=i.useContext(b.b),o=t.getPopupContainer,d=t.getPrefixCls,u=t.direction,p=e.arrow,f=e.prefixCls,m=e.children,j=e.trigger,h=e.disabled,g=e.getPopupContainer,x=e.overlayClassName,y=d("dropdown",f),w=i.Children.only(m),C=Object(v.a)(w,{className:l()("".concat(y,"-trigger"),Object(a.a)({},"".concat(y,"-rtl"),"rtl"===u),w.props.className),disabled:h}),N=l()(x,Object(a.a)({},"".concat(y,"-rtl"),"rtl"===u)),$=h?[]:j;return $&&-1!==$.indexOf("contextMenu")&&(n=!0),i.createElement(c.a,Object(r.a)({arrow:p,alignPoint:n},e,{overlayClassName:N,prefixCls:y,getPopupContainer:g||o,transitionName:function(){var n=d(),t=e.placement,r=void 0===t?"":t,a=e.transitionName;return void 0!==a?a:r.indexOf("top")>=0?"".concat(n,"-slide-down"):"".concat(n,"-slide-up")}(),trigger:$,overlay:function(){return function(n){var t,r=e.overlay;t="function"===typeof r?r():r;var a=(t=i.Children.only("string"===typeof t?i.createElement("span",null,t):t)).props;Object(O.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var c=a.selectable,o=void 0!==c&&c,l=a.expandIcon,d="undefined"!==typeof l&&i.isValidElement(l)?l:i.createElement("span",{className:"".concat(n,"-menu-submenu-arrow")},i.createElement(s.a,{className:"".concat(n,"-menu-submenu-arrow-icon")}));return"string"===typeof t.type?t:Object(v.a)(t,{mode:"vertical",selectable:o,expandIcon:d})}(y)},placement:function(){var n=e.placement;return void 0!==n?n:"rtl"===u?"bottomRight":"bottomLeft"}()}),C)});x.Button=h,x.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var y=n.a=x},257:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){switch(e){case"achievement-news":return"\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd";case"achievement-aidnews":return"SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd";case"achievement-valuenews":return"SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd";case"achievement-coopnews":return"SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd";case"achievement-startup":return"\ucc3d\uc5c5\uc9c0\uc6d0\uc18c\uc2dd";case"community-notice":return"\uacf5\uc9c0\uc0ac\ud56d";case"community-administration":return"\ud559\uc0ac\uacf5\uc9c0";case"community-storage":return"\uc11c\uc2dd\uc790\ub8cc\uc2e4";case"community-request":return"\uac74\uc758\uc0ac\ud56d";case"community-help":return"\ud5ec\ud504\ub370\uc2a4\ud06c";case"community-sitemap":return"\uc0ac\uc774\ud2b8\ub9f5";default:return"NULL"}}},484:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(6),a=t(88),i=t(89),c=t(2),o=t(87),l=t.n(o),s=t(112),d=t(198);function u(e){var n=e.className,t=e.direction,i=e.index,o=e.marginDirection,l=e.children,s=e.split,d=e.wrap,u=c.useContext(f),p=u.horizontalSize,b=u.verticalSize,m=u.latestIndex,j={};return u.supportFlexGap||("vertical"===t?i<m&&(j={marginBottom:p/(s?2:1)}):j=Object(r.a)(Object(r.a)({},i<m&&Object(a.a)({},o,p/(s?2:1))),d&&{paddingBottom:b})),null===l||void 0===l?null:c.createElement(c.Fragment,null,c.createElement("div",{className:n,style:j},l),i<m&&s&&c.createElement("span",{className:"".concat(n,"-split"),style:j},s))}var p=t(241),b=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},f=c.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),m={small:8,middle:16,large:24};n.b=function(e){var n,t=c.useContext(d.b),o=t.getPrefixCls,j=t.space,h=t.direction,O=e.size,g=void 0===O?(null===j||void 0===j?void 0:j.size)||"small":O,v=e.align,x=e.className,y=e.children,w=e.direction,C=void 0===w?"horizontal":w,N=e.prefixCls,$=e.split,k=e.style,S=e.wrap,E=void 0!==S&&S,I=b(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),P=Object(p.a)(),z=c.useMemo((function(){return(Array.isArray(g)?g:[g,g]).map((function(e){return function(e){return"string"===typeof e?m[e]:e||0}(e)}))}),[g]),A=Object(i.a)(z,2),L=A[0],M=A[1],B=Object(s.a)(y,{keepEmpty:!0}),R=void 0===v&&"horizontal"===C?"center":v,D=o("space",N),F=l()(D,"".concat(D,"-").concat(C),(n={},Object(a.a)(n,"".concat(D,"-rtl"),"rtl"===h),Object(a.a)(n,"".concat(D,"-align-").concat(R),R),n),x),T="".concat(D,"-item"),W="rtl"===h?"marginLeft":"marginRight",G=0,H=B.map((function(e,n){return null!==e&&void 0!==e&&(G=n),c.createElement(u,{className:T,key:"".concat(T,"-").concat(n),direction:C,index:n,marginDirection:W,split:$,wrap:E},e)})),_=c.useMemo((function(){return{horizontalSize:L,verticalSize:M,latestIndex:G,supportFlexGap:P}}),[L,M,G,P]);if(0===B.length)return null;var q={};return E&&(q.flexWrap="wrap",P||(q.marginBottom=-M)),P&&(q.columnGap=L,q.rowGap=M),c.createElement("div",Object(r.a)({className:F,style:Object(r.a)(Object(r.a)({},q),k)},I),c.createElement(f.Provider,{value:_},H))}},522:function(e,n,t){"use strict";t.r(n);var r,a,i,c,o,l,s,d,u,p,b,f,m=t(94),j=t(89),h=t(2),O=t(102),g=t(122),v=t(138),x=t(106),y=t(4),w=t(226),C=t(258),N=t(156),$=t(484),k=t(528),S=t(259),E=t.n(S),I=t(46),P=t(257),z=t(188),A=t(125),L=t(127),M=t(139),B=t.n(M),R=t(10);n.default=function(){var e=Object(A.a)(),n=Object(y.h)(),t=Object(y.i)(),r=t.param,a=t.subparam,i=Object(h.useState)(),c=Object(j.a)(i,2),o=c[0],l=c[1],s=Object(h.useState)(),d=Object(j.a)(s,2),u=d[0],p=d[1],b=Object(h.useState)(),f=Object(j.a)(b,2),m=f[0],O=f[1],k=Object(h.useState)(!1),S=Object(j.a)(k,2),M=S[0],K=S[1],Q=Object(h.useState)("\uc804\uccb4\ubcf4\uae30"),X=Object(j.a)(Q,2),Z=X[0],ee=X[1],ne=Object(L.a)(""),te=Object(j.a)(ne,3),re=te[0],ae=te[1],ie=te[2],ce=Object(v.a)(x.k,{fetchPolicy:"network-only",variables:{category:a},onCompleted:function(e){var n=e.getBoardByCategory,t=n.ok,r=n.err,a=n.data;if(t&&a){var i=[];a.map((function(e,n){var t={id:e.id,index:a.length-n,title:e.title,createdAt:B()(new Date(e.inputCreatedAt||""),!0).format("YYYY/MM/DD").toString(),category:e.category,private:e.private||!1,writer:e.writer||"",content:e.content||""};return!1===e.private?i.push(t):null})),l(i),p(i)}else console.log(r)}}),oe=ce.loading,le=ce.refetch;Object(h.useEffect)((function(){n&&n.state&&n.state.refetch&&le()}),[le,n]),Object(h.useEffect)((function(){O(Object(P.a)(a)),"request"===a.split("-")[1]||"help"===a.split("-")[1]?K(!0):K(!1)}),[a]);var se=Object(h.useCallback)((function(){switch(ie(""),Z){case"\uc804\uccb4\ubcf4\uae30":l(u);break;case"\uc81c\ubaa9":l(null===u||void 0===u?void 0:u.filter((function(e){var n;return null===(n=e.title)||void 0===n?void 0:n.includes(re)})));break;case"\ub0b4\uc6a9":l(null===u||void 0===u?void 0:u.filter((function(e){var n;return null===(n=e.content)||void 0===n?void 0:n.includes(re)})))}}),[ie,u,re,Z]),de=Object(R.jsxs)(w.a,{children:[Object(R.jsx)(w.a.Item,{children:Object(R.jsx)("div",{onClick:function(){return ee("\uc804\uccb4\ubcf4\uae30")},children:"\uc804\uccb4\ubcf4\uae30"})},"all"),Object(R.jsx)(w.a.Item,{children:Object(R.jsx)("div",{onClick:function(){return ee("\uc81c\ubaa9")},children:"\uc81c\ubaa9"})},"title"),Object(R.jsx)(w.a.Item,{children:Object(R.jsx)("div",{onClick:function(){return ee("\ub0b4\uc6a9")},children:"\ub0b4\uc6a9"})},"content")]});return oe&&!o?Object(R.jsx)("div",{children:"loading..."}):Object(R.jsxs)(D,{children:[Object(R.jsxs)(F,{children:[Object(R.jsx)(T,{margin:e.width>1500?"25%":"15%",children:z.a.map((function(e,n){return e.title===r.split("-")[0]?Object(R.jsxs)("div",{children:[Object(R.jsx)("span",{className:"cover-main-title",children:e.ko_title}),Object(R.jsx)("span",{className:"cover-description",children:e.description})]},e.key):null}))}),Object(R.jsx)(W,{isBigger:"major"===r,margin:"5%",children:Object(R.jsx)("div",{className:"submenu-content",children:z.a.map((function(e,n){return e.title===r?e.subMenu.map((function(e,n){var t=e.key===a?0:1;return Object(R.jsxs)(H,{className:"submenu-col",first:t,children:[Object(R.jsx)(_,{first:t}),Object(R.jsx)(G,{to:"sitemap"===e.key.split("-")[1]?"/main/detail/".concat(r.split("-")[0],"/").concat(e.key):"/main/board/".concat(r.split("-")[0],"/").concat(e.key),first:t,children:Object(R.jsx)("span",{style:{fontWeight:400},children:e.ko_title})})]},"".concat(n,"key"))})):null}))})}),Object(R.jsx)("img",{src:"/img/detailBG.jpeg",alt:"cover"})]}),Object(R.jsxs)(q,{children:[Object(R.jsxs)(V,{children:[Object(R.jsx)("div",{className:"board-page",children:Object(R.jsx)("span",{className:"board-page-title",children:m})}),Object(R.jsxs)("div",{className:"board-search",children:[Object(R.jsx)(C.a,{overlay:de,className:"dropdown",children:Object(R.jsxs)(N.a,{children:[Z,"\u2002\u2002\u2228"]})}),Object(R.jsx)("input",{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",value:re,onChange:ae}),Object(R.jsx)("button",{className:"board-search-button",onClick:se,children:"\uac80\uc0c9"}),M&&Object(R.jsx)(I.b,{className:"board-button",to:"/main/write/".concat(r,"/").concat(a),children:"\uae00\uc4f0\uae30"})]})]}),Object(R.jsxs)(Y,{dataSource:o,rowKey:"id",children:[Object(R.jsx)(E.a,{align:"center",title:function(){return Object(R.jsx)($.b,{children:Object(R.jsx)(J,{children:e.width>g.c.phoneMedium?"\ubc88\ud638":"#"})})},dataIndex:"index",render:function(e){return Object(R.jsx)(U,{children:e})},width:e.width>g.c.phoneMedium?80:30},"index"),Object(R.jsx)(E.a,{title:function(){return Object(R.jsx)($.b,{children:Object(R.jsx)(J,{children:"\uc81c\ubaa9"})})},dataIndex:"title",ellipsis:!0,render:function(e,n){return Object(R.jsx)($.b,{children:Object(R.jsx)(I.b,{to:"/main/detail/".concat(r,"/").concat(a,"/").concat(n.id),children:Object(R.jsx)(U,{children:e})})})}},"title"),Object(R.jsx)(E.a,{align:"center",title:function(){return Object(R.jsx)($.b,{children:Object(R.jsx)(J,{children:"\uc791\uc131\uc790"})})},dataIndex:"\uad00\ub9ac\uc790",render:function(e,n){return Object(R.jsx)($.b,{children:Object(R.jsx)(U,{children:"request"===a.split("-")[1]||"help"===a.split("-")[1]?n.writer:"\uad00\ub9ac\uc790"})})},width:e.width>g.c.phoneMedium?150:65},"\uad00\ub9ac\uc790"),Object(R.jsx)(E.a,{align:"center",title:function(){return Object(R.jsx)($.b,{children:Object(R.jsx)(J,{children:"\uc791\uc131\uc77c"})})},dataIndex:"createdAt",render:function(e){return Object(R.jsx)(U,{children:e})},width:e.width>g.c.phoneMedium?150:90},"createdAt")]})]})]})};var D=O.a.div(r||(r=Object(m.a)(["\n  "," {\n  }\n  "," {\n    margin-top: 15px;\n    min-width: 800px;\n    max-width: 1920px;\n    min-height: 80vh;\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),F=O.a.div(a||(a=Object(m.a)(["\n  "," {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  "," {\n    width: 100%;\n    min-width: 1280px;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),T=O.a.div(i||(i=Object(m.a)(["\n  "," {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  "," {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 500;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a),(function(e){return e.margin})),W=O.a.div(c||(c=Object(m.a)(["\n  "," {\n    display: none;\n  }\n  "," {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      max-width: 1280px;\n      min-width: 1000px;\n      min-height: 50px;\n      height: 50px;\n      margin: 0 auto;\n      display: flex;\n      flex-wrap: wrap;\n      padding-left: 5%;\n      align-items: center;\n    }\n    & .submenu-col {\n      width: 16%;\n      height: 50px;\n      display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),G=Object(O.a)(I.b)(o||(o=Object(m.a)(["\n  "," {\n  }\n\n  "," {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n    font-size: 16px;\n    color: ",";\n    &:hover {\n      color: white;\n    }\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a),(function(e){return 0===e.first?"white":"black"})),H=O.a.div(l||(l=Object(m.a)(["\n  "," {\n  }\n\n  "," {\n    background-color: ",";\n    color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a),(function(e){return 0===e.first?"#0c1b58":""}),(function(e){return 0===e.first?"white":"black"})),_=O.a.div(s||(s=Object(m.a)(["\n  "," {\n  }\n\n  "," {\n    width: 50%;\n    height: 2px;\n    border-top: ",";\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a),(function(e){return 0===e.first?"2px solid white":""})),q=O.a.div(d||(d=Object(m.a)(["\n  "," {\n    width: 100%;\n  }\n\n  "," {\n    min-width: 800px;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 30px;\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),V=O.a.div(u||(u=Object(m.a)(["\n  "," {\n    width: 100%;\n    height: 80px;\n    font-size: 20px;\n    color: #0c1b58;\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    & .board-search {\n      display: none;\n    }\n  }\n\n  "," {\n    margin-bottom: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 250px;\n    & .board-page {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      & .board-page-title {\n        text-align: center;\n        min-width: 350px;\n        margin: 0 auto;\n        font-size: 40px;\n        color: #0c1b58;\n        display: block;\n      }\n    }\n\n    & .board-search {\n      width: 100%;\n      display: flex;\n      justify-content: flex-end;\n\n      & .board-button {\n        cursor: pointer;\n        width: 80px;\n        height: 50px;\n        padding: 8px;\n        border: none;\n        background-color: #04083e;\n        color: white;\n        font-size: 14px;\n        margin-left: 15px;\n      }\n\n      & .board-search-button {\n        cursor: pointer;\n        width: 80px;\n        height: 50px;\n        padding: 8px;\n        border: none;\n        background-color: #e5e2e2b8;\n        color: black;\n        font-size: 14px;\n        margin-left: 15px;\n      }\n\n      & input {\n        width: 300px;\n        height: 50px;\n        background-color: #f8f8f8;\n        border: none;\n        margin-left: 15px;\n      }\n\n      & .dropdown {\n        background-color: #f8f8f8;\n        border: none;\n        color: black;\n        width: 150px;\n        height: 50px;\n      }\n    }\n\n    & a {\n      background-color: #0c1b58;\n      font-size: 18px;\n      padding: 8px 12px;\n      height: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      &:hover {\n        color: #f03fa8;\n        transition: 0.2s linear;\n      }\n    }\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),Y=Object(O.a)(k.a)(p||(p=Object(m.a)(["\n  "," {\n    border-top: 4px solid #04083e;\n    margin: 0 20px;\n  }\n  "," {\n    border-top: 4px solid #04083e;\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),J=O.a.div(b||(b=Object(m.a)(["\n  color: #04083e;\n  "," {\n    font-size: 8px;\n  }\n  "," {\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a)),U=O.a.div(f||(f=Object(m.a)(["\n  color: #04083e;\n  "," {\n    font-size: 8px;\n  }\n  "," {\n    font-size: 16px;\n    font-weight: 500;\n  }\n"])),Object(g.d)(g.b),Object(g.d)(g.a))}}]);
//# sourceMappingURL=20.fad2b9a3.chunk.js.map