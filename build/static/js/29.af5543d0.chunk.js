(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[29],{127:function(e,t,i){"use strict";var n=i(89),a=i(2);t.a=function(e){var t=Object(a.useState)(e),i=Object(n.a)(t,2),c=i[0],o=i[1];return[c,Object(a.useCallback)((function(e){o(e.target.value)}),[]),o]}},204:function(e,t,i){"use strict";i.d(t,"b",(function(){return u})),i.d(t,"a",(function(){return j})),i.d(t,"d",(function(){return b})),i.d(t,"c",(function(){return m}));var n,a=i(94),c=i(532),o=i(45),r=i(47),s=i(205),l=Object(c.a)(n||(n=Object(a.a)(["\n  query adminLogin {\n    adminLogin @client\n  }\n"]))),u=function(){r.b.cache.writeQuery({query:l,data:{adminLogin:!0}}),localStorage.setItem("admin","".concat(Date.now()+72e5)),Object(r.a)(!0)},j=function(){r.b.cache.writeQuery({query:l,data:{adminLogin:!1}}),localStorage.removeItem("admin"),Object(r.a)(!1)},b=function(e){localStorage.setItem("stno","".concat(e))},m=function(){localStorage.removeItem("stno"),o.b.success("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),s.a.push("/main")}},205:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i(11),a=Object(n.a)({forceRefresh:!0})},535:function(e,t,i){"use strict";i.r(t);var n,a,c,o=i(94),r=i(89),s=i(2),l=i(228),u=i(515),j=i(536),b=i(530),m=i(477),d=i(156),k=[{title:"intro",ko_title:"\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",description:"Introduction",subMenu:[{key:"intro-introduce",title:"intro-introduce",ko_title:"\uc778\uc0ac\ub9d0"},{key:"intro-overview",title:"intro-overview",ko_title:"\uc0ac\uc5c5\uac1c\uc694"},{key:"intro-history",title:"intro-history",ko_title:"\uc5f0\ud601"},{key:"intro-task",title:"intro-task",ko_title:"\uc870\uc9c1\ub3c4 \ubc0f \uc5c5\ubb34"},{key:"intro-route",title:"intro-route",ko_title:"\uc624\uc2dc\ub294\uae38"}]},{title:"basic",ko_title:"SW\uae30\ucd08\uad50\uc721",description:"SW Basic Education",subMenu:[{key:"basic-overview",title:"basic-overview",ko_title:"\uac1c\uc694"},{key:"basic-pre",title:"basic-pre-education",ko_title:"\uc785\ud559\uc804 SW\uad50\uc721"},{key:"basic-basicedu",title:"basic-education",ko_title:"SW\uae30\ucd08\uad50\uc721"},{key:"basic-creativity",title:"basic-creativity",ko_title:"SW\ucc3d\uc758\uc5ed\ub7c9\uc778\uc99d"},{key:"basic-AI",title:"basic-AI",ko_title:"AI SW\uc11c\ud3ec\ud130\uc988\uba58\ud1a0\ub9c1"},{key:"basic-online",title:"basic-online",ko_title:"\uac1c\ubc29\ud615\uc628\ub77c\uc778\ud50c\ub7ab\ud3fc"}]},{title:"major",ko_title:"SW\uc804\uacf5\uad50\uc721",description:"SW Major Education",subMenu:[{key:"major-overview",title:"major-overview",ko_title:"\uac1c\uc694"},{key:"major-project",title:"major-project",ko_title:"\ud504\ub85c\uc81d\ud2b8 \uae30\ubc18 \uad50\uc721\uacfc\uc815"},{key:"major-sw",title:"major-sw",ko_title:"\ubab0\uc785\ud615 SW\uad50\uc721\uacfc\uc815"},{key:"major-opensource",title:"major-opensource",ko_title:"\uc624\ud508\uc18c\uc2a4 SW \uad50\uc721"},{key:"major-verify",title:"major-verify",ko_title:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc804\ubb38\uc5ed\ub7c9\uc778\uc99d\uc81c"},{key:"major-training",title:"major-training",ko_title:"\ud574\uc678\ud604\uc7a5\uc2e4\uc2b5"},{key:"major-platform",title:"major-platform",ko_title:"SW\uc5ed\ub7c9\uac15\ud654\ud50c\ub7ab\ud3fc"}]},{title:"integration",ko_title:"SW\uc735\ud569\uad50\uc721",description:"SW Convergence Education",subMenu:[{key:"integration-overview",title:"integration-overview",ko_title:"\uac1c\uc694"},{key:"integration-swmajor",title:"integration-swmajor",ko_title:"SW\uc5f0\uacc4/\ubcf5\uc218\uc804\uacf5"}]},{title:"value",ko_title:"SW\uac00\uce58\ud655\uc0b0",description:"SW Value Diffusion",subMenu:[{key:"value-overview",title:"value-overview",ko_title:"\uac1c\uc694"},{key:"value-edu",title:"value-edu",ko_title:"\uc218\uc694\uc911\uc2ec AI \xb7 SW \uad50\uc721"},{key:"value-training",title:"value-training",ko_title:"AI \xb7 SW \uc120\ub3c4\uc790 \uc591\uc131"},{key:"value-share",title:"value-share",ko_title:"AI \xb7 SW \uac00\uce58\uacf5\uc720"}]},{title:"cooperation",ko_title:"SW\uc0b0\ud559\ud611\ub825",description:"SW Industry University Cooperation",subMenu:[{key:"cooperation-overview",title:"cooperation-overview",ko_title:"\uac1c\uc694"},{key:"cooperation-network",title:"cooperation-network",ko_title:"\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ub124\ud2b8\uc6cc\ud06c"},{key:"cooperation-project",title:"cooperation-project",ko_title:"\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ud504\ub85c\uc81d\ud2b8"},{key:"cooperation-internship",title:"cooperation-internship",ko_title:"\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc5f0\uacc4\uc778\ud134\uc27d"}]},{title:"achievement",ko_title:"\uc0ac\uc5c5\uc131\uacfc",description:"Business Performance",subMenu:[{key:"achievement-news",title:"achievement-news",ko_title:"\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd"},{key:"achievement-aidnews",title:"achievement-aidnews",ko_title:"SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd"},{key:"achievement-valuenews",title:"achievement-valuenews",ko_title:"SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd"},{key:"achievement-coopnews",title:"achievement-coopnews",ko_title:"SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd"},{key:"achievement-startup",title:"achievement-startup",ko_title:"\ucc3d\uc5c5\uc9c0\uc6d0 \uc18c\uc2dd"}]},{title:"community",ko_title:"\uc54c\ub9bc\ub9c8\ub2f9",description:"Community",subMenu:[{key:"community-notice",title:"community-notice",ko_title:"\uacf5\uc9c0\uc0ac\ud56d"},{key:"community-administration",title:"community-administration",ko_title:"\ud559\uc0ac\uacf5\uc9c0"},{key:"community-storage",title:"community-storage",ko_title:"\uc11c\uc2dd\uc790\ub8cc\uc2e4"},{key:"community-request",title:"community-request",ko_title:"\uac74\uc758\uc0ac\ud56d"},{key:"community-help",title:"community-help",ko_title:"\ud5ec\ud504\ub370\uc2a4\ud06c"},{key:"community-sitemap",title:"community-sitemap",ko_title:"\uc0ac\uc774\ud2b8\ub9f5"}]},{title:"sitelink",ko_title:"\uc0ac\uc774\ud2b8\ub9c1\ud06c",description:"Site-Link",subMenu:[{key:"site-cs",title:"site-cs",ko_title:"\ucef4\ud4e8\ud130\uacf5\ud559\ubd80"},{key:"site-ai",title:"site-ai",ko_title:"AI\uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc"},{key:"site-convergence",title:"site-convergence",ko_title:"SW\uc735\ud569\ud559\ubd80"},{key:"site-it",title:"site-it",ko_title:"IT\uad50\uc721\ud559\ubd80"},{key:"site-smartcar",title:"site-smartcar",ko_title:"\uc2a4\ub9c8\ud2b8\uc790\ub3d9\ucc28\uacf5\ud559\ubd80"},{key:"site-sw",title:"site-sw",ko_title:"SW\uc735\ud569\uad50\uc721\uc6d0"}]}],O=i(4),h=i(35),p=i(10),y=Object(h.a)((function(){return Promise.all([i.e(0),i.e(2),i.e(3),i.e(5),i.e(19)]).then(i.bind(null,542))})),x=Object(h.a)((function(){return Promise.all([i.e(0),i.e(4),i.e(6),i.e(27)]).then(i.bind(null,521))})),f=Object(h.a)((function(){return Promise.all([i.e(0),i.e(4),i.e(5),i.e(6),i.e(26)]).then(i.bind(null,537))})),v=Object(h.a)((function(){return Promise.all([i.e(0),i.e(1),i.e(2),i.e(3),i.e(16)]).then(i.bind(null,522))})),g=Object(h.a)((function(){return Promise.all([i.e(0),i.e(1),i.e(2),i.e(3),i.e(17)]).then(i.bind(null,543))})),_=Object(h.a)((function(){return Promise.all([i.e(5),i.e(22)]).then(i.bind(null,544))})),w=Object(h.a)((function(){return Promise.all([i.e(1),i.e(2),i.e(24)]).then(i.bind(null,523))})),S=Object(h.a)((function(){return Promise.all([i.e(1),i.e(2),i.e(5),i.e(21)]).then(i.bind(null,545))})),I=Object(h.a)((function(){return Promise.all([i.e(15),i.e(34)]).then(i.bind(null,546))})),W=Object(h.a)((function(){return Promise.all([i.e(1),i.e(28),i.e(32)]).then(i.bind(null,524))})),C=function(){var e=Object(O.i)(),t=e.param,i=e.subparam;return Object(p.jsx)(p.Fragment,{children:function(e,t){switch(e){case"dashboard":return Object(p.jsx)(f,{});case"intro":case"basic":case"major":case"integration":case"value":case"cooperation":return t==="create-image-".concat(e)?Object(p.jsx)(w,{}):t==="edit-image-".concat(e)?Object(p.jsx)(S,{}):t==="create-".concat(e)?Object(p.jsx)(g,{}):t==="detail-".concat(e)?Object(p.jsx)(y,{}):t==="edit-".concat(e)?Object(p.jsx)(v,{}):t.includes("storage")?Object(p.jsx)(x,{}):Object(p.jsx)(_,{});case"achievement":return t==="create-image-".concat(e)?Object(p.jsx)(w,{}):t==="edit-image-".concat(e)?Object(p.jsx)(S,{}):t==="create-".concat(e)?Object(p.jsx)(g,{}):t==="detail-".concat(e)?Object(p.jsx)(y,{}):t==="edit-".concat(e)?Object(p.jsx)(v,{}):(t.includes("storage"),Object(p.jsx)(x,{}));case"community":return t==="create-image-".concat(e)?Object(p.jsx)(w,{}):t==="edit-image-".concat(e)?Object(p.jsx)(S,{}):t==="create-".concat(e)?Object(p.jsx)(g,{}):t==="detail-".concat(e)?Object(p.jsx)(y,{}):t==="edit-".concat(e)?Object(p.jsx)(v,{}):t.includes("storage")?Object(p.jsx)(x,{}):t.includes("sitemap")?Object(p.jsx)(_,{}):Object(p.jsx)(x,{});case"sitelink":return t==="create-image-".concat(e)?Object(p.jsx)(w,{}):t==="edit-image-".concat(e)?Object(p.jsx)(S,{}):Object(p.jsx)(_,{});case"link":return Object(p.jsx)(I,{});case"popup":return Object(p.jsx)(W,{});default:return}}(t,i)})},M=i(46),P=i(514),N=i(47),q=i(127),A=i(204),L=i(45),E=i(547),D=i(548),F=i(549),H=i(102),U=(H.a.div(n||(n=Object(o.a)([""]))),H.a.div(a||(a=Object(o.a)(["\n  width: 100vw;\n  height: 100vh;\n  & .login-form {\n    height: 700px;\n    width: 800px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & .login-input {\n    width: 300px;\n  }\n"])))),z=(t.default=function(){var e=Object(P.a)(N.a),t=Object(O.g)(),i=Object(O.i)(),n=i.param,a=i.subparam,c=Object(q.a)(""),o=Object(r.a)(c,3),h=o[0],y=o[1],x=o[2],f=Object(q.a)(""),v=Object(r.a)(f,3),g=v[0],_=v[1],w=v[2],S=Object(s.useState)("\ub300\uc2dc\ubcf4\ub4dc"),I=Object(r.a)(S,2),W=I[0],H=I[1],B=Object(s.useState)("\ub300\uc2dc\ubcf4\ub4dc"),J=Object(r.a)(B,2),K=J[0],Q=J[1],R=Object(s.useState)(!1),T=Object(r.a)(R,2),V=T[0],G=T[1],X=l.a.SubMenu,Y=u.a.Header,Z=u.a.Content,$=u.a.Sider,ee=Object(s.useCallback)((function(){"adminswe"===h&&"adminswe"===g?(x(""),w(""),Object(A.b)(),L.b.success("\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4")):L.b.error("\uc544\uc774\ub514 & \uc554\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4")}),[h,g,x,w]),te=Object(s.useCallback)((function(e,t,i,n){G(!0),Q(t),H(e)}),[]),ie=Object(s.useCallback)((function(){G(!1),Q("\ub300\uc2dc\ubcf4\ub4dc"),H("\ub300\uc2dc\ubcf4\ub4dc")}),[]);return Object(s.useEffect)((function(){"dashboard"!==n&&(G(!0),Q(function(e){var t=k.find((function(t){return t.title===e}));return t?t.ko_title:""}(n)),H(function(e,t){for(var i="",n=0;n<k.length;n++)if(k[n].title===e){for(var a=0;a<k[n].subMenu.length;a++)if(k[n].subMenu[a].title===t){i=k[n].subMenu[a].ko_title;break}break}return i}(n,a)))}),[n,a,t]),Object(s.useEffect)((function(){var e=localStorage.getItem("admin");e&&parseInt(e,10)/1e3<Date.now()/1e3&&Object(A.a)()}),[]),Object(p.jsx)(u.a,{style:{minHeight:"100vh"},children:e?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(Y,{className:"header",children:[Object(p.jsx)("div",{className:"logo",children:Object(p.jsx)("img",{src:"/img/admin_logo.png",alt:"logoimg",width:200})}),Object(p.jsxs)(l.a,{theme:"dark",mode:"horizontal",style:{display:"flex",justifyContent:"flex-end"},children:[Object(p.jsx)(l.a.Item,{onClick:function(){Object(A.a)(),t.push("/main")},children:"\uba54\uc778\uc73c\ub85c \uac00\uae30"},1),Object(p.jsxs)(l.a.Item,{onClick:function(){return Object(A.a)()},children:[Object(p.jsx)(E.a,{})," Logout"]},2)]})]}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)($,{width:200,className:"site-layout-background",children:Object(p.jsxs)(l.a,{mode:"inline",defaultSelectedKeys:["dashboard"],defaultOpenKeys:["dashboard"],style:{height:"100%",borderRight:0},children:[Object(p.jsx)(l.a.Item,{title:"\ub300\uc2dc\ubcf4\ub4dc",children:Object(p.jsx)(M.b,{to:{pathname:"/admin/dashboard/dashboard",state:{refresh:!0}},onClick:ie,children:Object(p.jsx)("span",{children:"\ub300\uc2dc\ubcf4\ub4dc"})})},"dashboard"),k.map((function(e){return Object(p.jsx)(X,{title:e.ko_title,children:e.subMenu.map((function(t,i){return Object(p.jsx)(l.a.Item,{children:Object(p.jsx)(M.b,{to:"/admin/".concat(e.title,"/").concat(t.key),onClick:function(){return te(t.ko_title,e.ko_title,e.title,t.key)},children:Object(p.jsx)("span",{children:t.ko_title})})},t.title)}))},e.ko_title)})),Object(p.jsx)(X,{title:"\ud64d\ubcf4\uc601\uc0c1",children:Object(p.jsx)(l.a.Item,{onClick:function(){Q("\ud64d\ubcf4\uc601\uc0c1"),H("\ud64d\ubcf4\uc601\uc0c1\ub9c1\ud06c")},children:Object(p.jsx)(M.b,{to:"/admin/link/link",children:Object(p.jsx)("span",{children:"\ud64d\ubcf4\uc601\uc0c1\ub9c1\ud06c"})})})}),Object(p.jsx)(X,{title:"\ud31d\uc5c5",children:Object(p.jsx)(l.a.Item,{onClick:function(){Q("\ud31d\uc5c5"),H("\ud31d\uc5c5\uad00\ub9ac")},children:Object(p.jsx)(M.b,{to:"/admin/popup/popup",children:Object(p.jsx)("span",{children:"\ud31d\uc5c5\uad00\ub9ac"})})})})]})}),Object(p.jsxs)(u.a,{style:{padding:"0 24px 24px"},children:[V&&Object(p.jsxs)(z,{style:{margin:"16px 0"},children:[Object(p.jsx)(j.a.Item,{className:"bread-item",children:K}),Object(p.jsx)(j.a.Item,{className:"bread-item",children:W})]}),Object(p.jsx)(Z,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:Object(p.jsx)(C,{})})]})]})]}):Object(p.jsx)(U,{children:Object(p.jsxs)(b.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:ee,children:[Object(p.jsx)(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(p.jsx)(m.a,{prefix:Object(p.jsx)(D.a,{className:"site-form-item-icon"}),placeholder:"Username",value:h,onChange:y,className:"login-input"})}),Object(p.jsx)(b.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(p.jsx)(m.a,{prefix:Object(p.jsx)(F.a,{className:"site-form-item-icon"}),type:"password",value:g,onChange:_,className:"login-input",placeholder:"Password"})}),Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(d.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Log in"})})]})})})},Object(H.a)(j.a)(c||(c=Object(o.a)(["\n  & .bread-item {\n    font-size: 16px;\n    font-weight: 600;\n  }\n"]))))}}]);
//# sourceMappingURL=29.af5543d0.chunk.js.map