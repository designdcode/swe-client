(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[21],{121:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return a}));var i="phoneMedium",o="lpc",c={lpc:1279,pc:1279,tablet:767,phoneMedium:375,phoneSmall:349},a=function(e){return"lpc"===e?"@media only screen and (min-width: 376px)":"@media only screen and (max-width: ".concat(c[e],"px)")}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return h})),n.d(t,"a",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"c",(function(){return x})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return k}));var i,o,c,a,r,l,s,d,b,p=n(94),u=n(548),j=Object(u.a)(i||(i=Object(p.a)(["\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),h=Object(u.a)(o||(o=Object(p.a)(["\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n"]))),m=Object(u.a)(c||(c=Object(p.a)(["\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),g=Object(u.a)(a||(a=Object(p.a)(["\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n"]))),x=Object(u.a)(r||(r=Object(p.a)(["\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),O=Object(u.a)(l||(l=Object(p.a)(["\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n      }\n    }\n  }\n"]))),k=Object(u.a)(s||(s=Object(p.a)(["\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n"])));Object(u.a)(d||(d=Object(p.a)(["\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"]))),Object(u.a)(b||(b=Object(p.a)(["\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n"])))},131:function(e,t,n){"use strict";var i=n(89),o=n(2);t.a=function(e){var t=Object(o.useState)(e),n=Object(i.a)(t,2),c=n[0],a=n[1];return[c,Object(o.useCallback)((function(e){a(e.target.value)}),[]),a]}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=[{key:0,title:"intro",ko_title:"\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",description:"Introduction",subMenu:[{key:"intro-introduce",title:"intro-introduce",ko_title:"\uc778\uc0ac\ub9d0"},{key:"intro-overview",title:"intro-overview",ko_title:"\uc0ac\uc5c5\uac1c\uc694"},{key:"intro-history",title:"intro-history",ko_title:"\uc5f0\ud601"},{key:"intro-task",title:"intro-task",ko_title:"\uc870\uc9c1\ub3c4 \ubc0f \uc5c5\ubb34"},{key:"intro-route",title:"intro-route",ko_title:"\uc624\uc2dc\ub294\uae38"}]},{key:1,title:"basic",ko_title:"SW\uae30\ucd08\uad50\uc721",description:"SW Basic Education",subMenu:[{key:"basic-overview",title:"basic-overview",ko_title:"\uac1c\uc694"},{key:"basic-pre",title:"basic-pre-education",ko_title:"\uc785\ud559\uc804 SW\uad50\uc721"},{key:"basic-basicedu",title:"basic-education",ko_title:"SW\uae30\ucd08\uad50\uc721"},{key:"basic-creativity",title:"basic-creativity",ko_title:"SW\ucc3d\uc758\uc5ed\ub7c9\uc778\uc99d"},{key:"basic-AI",title:"basic-AI",ko_title:"AI SW\uc11c\ud3ec\ud130\uc988\uba58\ud1a0\ub9c1"},{key:"basic-online",title:"basic-online",ko_title:"\uac1c\ubc29\ud615\uc628\ub77c\uc778\ud50c\ub7ab\ud3fc"}]},{key:2,title:"major",ko_title:"SW\uc804\uacf5\uad50\uc721",description:"SW Major Education",subMenu:[{key:"major-overview",title:"major-overview",ko_title:"\uac1c\uc694"},{key:"major-project",title:"major-project",ko_title:"\ud504\ub85c\uc81d\ud2b8 \uae30\ubc18 \uad50\uc721\uacfc\uc815"},{key:"major-sw",title:"major-sw",ko_title:"\ubab0\uc785\ud615 SW\uad50\uc721\uacfc\uc815"},{key:"major-opensource",title:"major-opensource",ko_title:"\uc624\ud508\uc18c\uc2a4 SW \uad50\uc721"},{key:"major-verify",title:"major-verify",ko_title:"\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc804\ubb38\uc5ed\ub7c9\uc778\uc99d\uc81c"},{key:"major-training",title:"major-training",ko_title:"\ud574\uc678\ud604\uc7a5\uc2e4\uc2b5"},{key:"major-platform",title:"major-platform",ko_title:"SW\uc5ed\ub7c9\uac15\ud654\ud50c\ub7ab\ud3fc"}]},{key:3,title:"integration",ko_title:"SW\uc735\ud569\uad50\uc721",description:"SW Convergence Education",subMenu:[{key:"integration-overview",title:"integration-overview",ko_title:"\uac1c\uc694"},{key:"integration-swmajor",title:"integration-swmajor",ko_title:"SW\uc5f0\uacc4/\ubcf5\uc218\uc804\uacf5"}]},{key:4,title:"value",ko_title:"SW\uac00\uce58\ud655\uc0b0",description:"SW Value Diffusion",subMenu:[{key:"value-overview",title:"value-overview",ko_title:"\uac1c\uc694"},{key:"value-edu",title:"value-edu",ko_title:"\uc218\uc694\uc911\uc2ec AI \xb7 SW \uad50\uc721"},{key:"value-training",title:"value-training",ko_title:"AI \xb7 SW \uc120\ub3c4\uc790 \uc591\uc131"},{key:"value-share",title:"value-share",ko_title:"AI \xb7 SW \uac00\uce58\uacf5\uc720"}]},{key:5,title:"cooperation",ko_title:"SW\uc0b0\ud559\ud611\ub825",description:"SW Industry University Cooperation",subMenu:[{key:"cooperation-overview",title:"cooperation-overview",ko_title:"\uac1c\uc694"},{key:"cooperation-network",title:"cooperation-network",ko_title:"\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ub124\ud2b8\uc6cc\ud06c"},{key:"cooperation-project",title:"cooperation-project",ko_title:"\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ud504\ub85c\uc81d\ud2b8"},{key:"cooperation-internship",title:"cooperation-internship",ko_title:"\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc5f0\uacc4\uc778\ud134\uc27d"}]},{key:6,title:"achievement",ko_title:"\uc0ac\uc5c5\uc131\uacfc",description:"Business Performance",subMenu:[{key:"achievement-news",title:"achievement-news",ko_title:"\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd"},{key:"achievement-aidnews",title:"achievement-aidnews",ko_title:"SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd"},{key:"achievement-valuenews",title:"achievement-valuenews",ko_title:"SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd"},{key:"achievement-coopnews",title:"achievement-coopnews",ko_title:"SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd"},{key:"achievement-startup",title:"achievement-startup",ko_title:"\ucc3d\uc5c5\uc9c0\uc6d0 \uc18c\uc2dd"}]},{key:7,title:"community",ko_title:"\uc54c\ub9bc\ub9c8\ub2f9",description:"Community",subMenu:[{key:"community-notice",title:"community-notice",ko_title:"\uacf5\uc9c0\uc0ac\ud56d"},{key:"community-administration",title:"community-administration",ko_title:"\ud559\uc0ac\uacf5\uc9c0"},{key:"community-storage",title:"community-storage",ko_title:"\uc11c\uc2dd\uc790\ub8cc\uc2e4"},{key:"community-request",title:"community-request",ko_title:"\uac74\uc758\uc0ac\ud56d"},{key:"community-help",title:"community-help",ko_title:"\ud5ec\ud504\ub370\uc2a4\ud06c"},{key:"community-sitemap",title:"community-sitemap",ko_title:"\uc0ac\uc774\ud2b8\ub9f5"}]},{key:8,title:"sitelink",ko_title:"\uc0ac\uc774\ud2b8\ub9c1\ud06c",description:"Site-Link",subMenu:[{key:"site-cs",title:"sitelink",ko_title:"\ucef4\ud4e8\ud130\uacf5\ud559\ubd80"},{key:"site-ai",title:"sitelink",ko_title:"AI\uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc"},{key:"site-convergence",title:"sitelink",ko_title:"SW\uc735\ud569\ud559\ubd80"},{key:"site-it",title:"sitelink",ko_title:"IT\uad50\uc721\ud559\ubd80"},{key:"site-smartcar",title:"sitelink",ko_title:"\uc2a4\ub9c8\ud2b8\uc790\ub3d9\ucc28\uacf5\ud559\ubd80"},{key:"site-sw",title:"sitelink",ko_title:"SW\uc735\ud569\uad50\uc721\uc6d0"}]}]},175:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return u}));var i,o=n(94),c=n(548),a=n(45),r=n(47),l=n(176),s=Object(c.a)(i||(i=Object(o.a)(["\n  query adminLogin {\n    adminLogin @client\n  }\n"]))),d=function(){r.b.cache.writeQuery({query:s,data:{adminLogin:!0}}),localStorage.setItem("admin","".concat(Date.now()+72e5)),Object(r.a)(!0)},b=function(){r.b.cache.writeQuery({query:s,data:{adminLogin:!1}}),localStorage.removeItem("admin"),Object(r.a)(!1)},p=function(e){localStorage.setItem("stno","".concat(e))},u=function(){localStorage.removeItem("stno"),a.b.success("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"),l.a.push("/main")}},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(10),o=Object(i.a)({forceRefresh:!0})},550:function(e,t,n){"use strict";n.r(t);var i,o=n(40),c=n(2),a=n(4),r=n(94),l=n(103),s=n(121),d=n(11),b=function(){return Object(d.jsxs)(p,{children:[Object(d.jsx)("img",{src:"/img/footerLogo.jpg",alt:"logoimg",className:"mobile"}),Object(d.jsxs)("span",{children:["TEL . 041-530-8311 FAX. 041-530-8315 ",Object(d.jsx)("br",{}),"\uc6b0) 31460 \ucda9\ub0a8 \uc544\uc0b0\uc2dc \ud0d5\uc815\uba74 \uc120\ubb38\ub85c 221\ubc88\uae38 70 \uc120\ubb38\ub300\ud559\uad50 SW\uc735\ud569\uad00(\uc6d0\ud654\uad00) 506\ud638 70,",Object(d.jsx)("br",{}),"Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si, Chungcheongnam-do, korea , 31460"]}),Object(d.jsx)("img",{src:"/img/footerLogo.jpg",alt:"logoimg",className:"web"})]})},p=l.a.div(i||(i=Object(r.a)(["\n  width: 100%;\n  "," {\n    height: 150px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 20px;\n    background-color: #ededed;\n    font-size: 8px;\n    span {\n      display: block;\n      max-width: ","px;\n      color: #747474;\n      line-height: 1.7;\n    }\n\n    & .mobile {\n      width: 150px;\n      object-fit: contain;\n      margin-bottom: 20px;\n    }\n\n    & .web {\n      display: none;\n    }\n  }\n  "," {\n    height: 230px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #ededed;\n    min-width: 1280px;\n    -webkit-box-shadow: inset 0px 12px 30px 0px rgba(0, 0, 0, 0.28);\n    box-shadow: inset 0px 10px 15px -10px rgba(0, 0, 0, 0.28);\n    span {\n      font-size: 14px;\n      display: block;\n      color: #aaaaaa;\n      text-align: center;\n      line-height: 1.7;\n    }\n    & .mobile {\n      display: none;\n    }\n    & .web {\n      width: 250px;\n      object-fit: contain;\n      margin-top: 20px;\n    }\n  }\n"])),Object(s.d)(s.b),s.c.phoneMedium,Object(s.d)(s.a)),u=n(89),j=n(46),h=n(163),m=n(259);var g,x,O,k,y,f,v,w,_,S,C=Object(m.a)("div",{target:"e1p7p4c88"})("width:100%;",Object(s.d)(s.b),"{height:48px;}",Object(s.d)(s.a),"{height:150px;min-width:1280px;}"),W=Object(m.a)("div",{target:"e1p7p4c87"})(Object(s.d)(s.b),"{display:none;}height:30px;background-color:#0c1b58;color:white;& .top-content{height:100%;width:",s.c.pc,"px;display:flex;align-items:center;justify-content:space-between;margin:0 auto;font-size:12px;letter-spacing:0.13px;}& .options{display:flex;width:100px;flex-direction:row;justify-content:space-between;}"),I=Object(m.a)("div",{target:"e1p7p4c86"})(""),A=Object(m.a)("div",{target:"e1p7p4c85"})({name:"19r1ob1",styles:"transform:scaleY(0);visibility:hidden;height:0;border-top:1px solid #0c1b58;background-color:black;& .link{color:white;&:hover{color:#0c1b58;}}& li{width:100%;height:100%;min-height:25px;margin:5px 0;width:141px;&:hover{background-color:white;color:#0c1b58;}}&:hover{background-color:#0c1b58;transition:0.2s linear;}"}),L=Object(m.a)("div",{target:"e1p7p4c84"})(Object(s.d)(s.b),"{display:none;}",Object(s.d)(s.a),"{& .main-content-desktop{width:",s.c.pc,"px;align-items:center;display:flex;justify-content:space-between;margin:0 auto;height:80px;}& .main-menu{height:55px;width:100%;color:white;display:flex;justify-content:center;background-color:#0c1b58;&:hover ",A,"{visibility:visible;transform:scaleY(1);height:320px;opacity:0.8;transition:height 0.1s ease-in;position:absolute;z-index:1000;}&:hover li{height:30px;transition:height 0.1s ease-in;}.header-title{width:141px;height:50%;margin:10px 0;display:flex;align-items:center;justify-content:center;color:white;& span{display:flex;flex-direction:inherit;justify-content:center;align-items:center;height:70%;font-weight:600;cursor:pointer;}&:hover{color:#f03fa8;transition:0.2s linear;}}& ul{padding:0;width:141px;list-style:none;cursor:pointer;position:relative;}& li{width:141px;font-size:11.5px;line-height:25px;text-align:center;color:white;height:0;cursor:pointer;padding:2px 4px;&:hover{color:#0c1b58;transition:0.2s linear;}}}}"),N=Object(m.a)("div",{target:"e1p7p4c83"})("width:100%;height:4px;margin-bottom:3px;background-color:",(function(e){return e.hoverProps?"#f03fa8":"none"}),";transition:0.2s;right:calc(100% - 150px);&:hover{right:0;}"),M=Object(m.a)("div",{target:"e1p7p4c82"})(Object(s.d)(s.a),"{display:none;}& .wrapper{width:100%;display:flex;justify-content:space-between;align-items:center;height:50px;background-color:#0c1b58;color:white;padding:0 15px;& .menu{font-size:24px;transform:rotate(90deg);}}"),B=(Object(m.a)("div",{target:"e1p7p4c81"})("width:100%;margin:5px 0;height:75px;font-size:17px;& button{color:white;width:100%;height:100%;background-color:",(function(e){return e.menuOpen?"#384270":"#0c1b58"}),";border:none;}"),Object(m.a)("div",{target:"e1p7p4c80"})({name:"1g48ylb",styles:"width:100%;margin:5px 0;font-size:14px;height:50px;& button{color:white;width:100%;height:100%;background-color:#384270;border:none;text-align:left;}"}),n(341)),z=n(270),$=n(175),q=n(562),P=n(563),T=n(544),E=n(551),U=n(542),F=function(){var e=Object(a.g)(),t=Object(c.useState)(null),n=Object(u.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(!1),l=Object(u.a)(r,2),s=l[0],b=l[1],p=Object(c.useState)(!1),m=Object(u.a)(p,2),g=m[0],x=m[1],O=Object(c.useState)(!1),k=Object(u.a)(O,2),y=k[0],f=k[1],v=Object(c.useState)(-1),w=Object(u.a)(v,2),_=w[0],S=w[1],F=Object(c.useState)(""),V=Object(u.a)(F,2),R=V[0],X=V[1];Object(c.useEffect)((function(){localStorage.getItem("stno")?f(!0):f(!1)}),[]);var Y=Object(c.useCallback)((function(e){S(e),x(!g)}),[g]);return Object(d.jsxs)(C,{children:[Object(d.jsx)(W,{children:Object(d.jsxs)("div",{className:"top-content",children:[Object(d.jsx)("span",{children:"SUNMOON UNIVERSITY"}),Object(d.jsxs)("div",{className:"options",children:[Object(d.jsx)("div",{children:Object(d.jsx)(j.b,{to:"/main",style:{textDecoration:"none",color:"white"},children:"HOME"})}),Object(d.jsx)("div",{children:"|"}),Object(d.jsx)("div",{children:y?Object(d.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return Object($.c)()},children:"LOGOUT"}):Object(d.jsx)(j.b,{to:"/main/login",style:{textDecoration:"none",color:"white"},children:"LOGIN\u2002"})})]})]})}),Object(d.jsxs)(I,{children:[Object(d.jsxs)(L,{children:[Object(d.jsxs)("div",{className:"main-content-desktop",children:[Object(d.jsx)("div",{}),Object(d.jsx)(j.b,{to:"/main",children:Object(d.jsx)("img",{src:"/img/logo.png",alt:"logo"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{to:"/main",children:Object(d.jsx)("img",{src:"/img/homeIcon.jpeg",alt:"home",width:40,height:40})}),y?Object(d.jsx)("div",{style:{display:"inline-block",marginLeft:15,cursor:"pointer"},children:Object(d.jsx)("img",{src:"/img/logout.jpeg",alt:"logout",width:35,height:35})}):Object(d.jsx)(j.b,{to:"/main/login",style:{marginLeft:15},children:Object(d.jsx)("img",{src:"/img/homeLogin.jpeg",alt:"login",width:40,height:40})})]})]}),Object(d.jsx)("div",{className:"main-menu",children:h.a.map((function(e,t){var n;return n="achievement"===e.title.split("-")[0]||"community"===e.title.split("-")[0]?"/main/board/".concat(e.title,"/").concat(e.subMenu[0].key):"/main/detail/".concat(e.title,"/").concat(e.subMenu[0].key),Object(d.jsxs)("ul",{style:{margin:0},onMouseOver:function(){return o(e.key)},onMouseLeave:function(){return o(null)},children:[Object(d.jsx)(N,{hoverProps:i===t}),Object(d.jsx)(j.b,{to:n,className:"header-title",children:Object(d.jsx)("span",{children:e.ko_title})}),Object(d.jsx)(A,{children:e.subMenu.map((function(t,n){var i;return i="achievement"===t.title.split("-")[0]||"community"===t.title.split("-")[0]?"sitemap"===t.key.split("-")[1]?"/main/detail/".concat(e.title,"/").concat(t.key):"/main/board/".concat(e.title,"/").concat(t.key):"/main/detail/".concat(e.title,"/").concat(t.key),Object(d.jsx)(j.b,{to:i,className:"link",children:Object(d.jsx)("li",{children:t.ko_title},n)},n)}))})]},t)}))})]}),Object(d.jsx)(M,{children:Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("div",{className:"menu",onClick:function(){return b(!s)},children:"|||"}),Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)(j.b,{to:"/main",children:Object(d.jsx)("img",{src:"/img/mobileLogo.png",alt:"mobile logo",typeof:"png"})})}),Object(d.jsx)("div",{className:"login",children:y?Object(d.jsx)("div",{onClick:function(){return Object($.c)()},children:Object(d.jsx)(z.c,{size:25})}):Object(d.jsx)(j.b,{to:"/main/login",style:{textDecoration:"none",color:"white"},children:Object(d.jsx)(B.a,{size:25})})}),Object(d.jsxs)(U.a,{anchor:"left",open:s,onClose:function(){return b(!s)},children:[Object(d.jsxs)("div",{style:D,children:[Object(d.jsx)("div",{children:"\u2002"}),Object(d.jsx)("div",{style:{cursor:"pointer",fontWeight:600},onClick:function(){return b(!s)},children:"X"})]}),Object(d.jsx)(q.a,{sx:{width:250,backgroundColor:"#0c1b58",color:"white",height:"100%"},role:"presentation",children:Object(d.jsx)(P.a,{children:h.a.map((function(e,t){return Object(d.jsx)(T.a,{onClick:function(){Y(t),X(e.ko_title)},children:Object(d.jsx)(E.a,{sx:{fontSize:"18px"},disableTypography:!0,children:e.ko_title})},t)}))})})]}),Object(d.jsx)(U.a,{anchor:"left",open:_>-1,onClose:function(){return S(-1)},children:_>-1&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:G,children:[Object(d.jsx)("div",{onClick:function(){return S(-1)},children:"\u2039"}),Object(d.jsx)("div",{style:{fontSize:"18px"},children:R}),Object(d.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return S(-1)},children:"X"})]}),Object(d.jsx)(q.a,{sx:{width:250,backgroundColor:"#384270",color:"white",height:"100%"},role:"presentation",onClick:function(){return S(-1)},children:Object(d.jsx)(P.a,{children:h.a[_].subMenu.map((function(t,n){var i;return i="achievement"===t.title.split("-")[0]||"community"===t.title.split("-")[0]?"/main/board/".concat(t.title,"/").concat(t.key):"/main/detail/".concat(t.title,"/").concat(t.key),Object(d.jsx)(T.a,{onClick:function(){e.push(i),b(!1),x(!1),S(-1)},children:Object(d.jsx)(E.a,{sx:{fontSize:"18px"},disableTypography:!0,children:t.ko_title})},n)}))})})]})})]})})]})]})},D={height:"50px",width:"100%",backgroundColor:"#0c1b58",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:"20px"},G={height:"50px",width:"100%",backgroundColor:"#384270",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",paddingRight:"20px",paddingLeft:"20px"},V=n(114),R=n(112),X=n.n(R),Y=n(546),J=n(494),Q=n(200),H=n(131),K=n(165),Z=n(122),ee=n(45),te=n(176),ne=function(){var e=Object(H.a)(""),t=Object(u.a)(e,3),n=t[0],i=t[1],o=t[2],a=Object(H.a)(""),r=Object(u.a)(a,3),l=r[0],s=r[1],b=r[2],p=Object(K.a)(Z.g,{onCompleted:function(e){var t=e.UserLogin,n=t.success,i=t.error,o=t.data;n&&o?(Object($.d)(o.stno),ee.b.success("\ub85c\uadf8\uc778 \uc131\uacf5"),setTimeout((function(){te.a.push("/main")}),1e3)):(console.log(i),ee.b.error("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778 \ud574 \uc8fc\uc138\uc694"))}}),j=Object(u.a)(p,2),h=j[0],m=j[1].loading,g=Object(c.useCallback)(Object(V.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({variables:{id:n,pwd:l}});case 2:o(""),b("");case 4:case"end":return e.stop()}}),e)}))),[n,l,o,b,h]);return Object(d.jsx)(ie,{children:Object(d.jsxs)(Y.a,{className:"login-form",name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:g,onFinishFailed:function(e){console.log("Failed:",e)},autoComplete:"off",children:[Object(d.jsx)(oe,{children:Object(d.jsx)("img",{src:"/img/logo.png",alt:"main-logo"})}),Object(d.jsxs)(ce,{children:[Object(d.jsxs)(ae,{children:[Object(d.jsx)(re,{children:"\ub85c\uadf8\uc778"}),Object(d.jsx)(le,{children:"\ubcf8\uad50 \ud3ec\ud138 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778 \ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."})]}),Object(d.jsxs)(se,{children:[Object(d.jsx)(Y.a.Item,{className:"form-item",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(d.jsx)(J.a,{placeholder:"\ud3ec\ud138 \uc544\uc774\ub514",value:n,onChange:i,className:"form-input"})}),Object(d.jsx)(Y.a.Item,{className:"form-item",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(d.jsx)(J.a.Password,{placeholder:"\ube44\ubc00\ubc88\ud638",value:l,onChange:s,className:"form-input"})})]}),Object(d.jsx)(Y.a.Item,{children:Object(d.jsx)(de,{type:"primary",htmlType:"submit",disabled:m,children:"\ub85c\uadf8\uc778"})}),Object(d.jsx)(be,{children:Object(d.jsx)("img",{src:"/img/logo.png",alt:"main-logo"})})]})]})})},ie=l.a.div(g||(g=Object(r.a)(["\n  width: 100%;\n  "," {\n    height: 80%;\n    width: 375px;\n    margin: 0 auto;\n    & .login-form {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      margin: 20px 0;\n    }\n  }\n  ",' {\n    height: 100%;\n\n    background-image: url("/img/loginBG.jpeg");\n    max-width: 1920px;\n    min-width: 1280px;\n    margin-top: 15px;\n    display: flex;\n    justify-content: center;\n    & .login-form {\n      height: 720px;\n      width: 650px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      background-color: white;\n      margin: 65px 0;\n    }\n  }\n'])),Object(s.d)(s.b),Object(s.d)(s.a)),oe=l.a.div(x||(x=Object(r.a)(["\n  "," {\n    display: none;\n  }\n  "," {\n    margin: 20px 0;\n    height: 50px;\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),ce=l.a.div(O||(O=Object(r.a)(["\n  ",' {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    padding-top: 170px;\n    flex-direction: column;\n    background-image: url("/img/mobileLoginBG.jpeg");\n    & .form-item {\n    }\n\n    & .form-input {\n      width: 300px;\n      height: 40px;\n    }\n  }\n  ',' {\n    width: 100%;\n    height: 550px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    background-image: url("/img/webLoginBG.jpeg");\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    & .form-item {\n    }\n\n    & .form-input {\n      width: 300px;\n      height: 40px;\n    }\n  }\n'])),Object(s.d)(s.b),Object(s.d)(s.a)),ae=l.a.div(k||(k=Object(r.a)(["\n  "," {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin-bottom: 30px;\n  }\n  "," {\n    margin-top: 15px;\n    margin-bottom: 30px;\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),re=l.a.div(y||(y=Object(r.a)(["\n  color: #04083e;\n  "," {\n    text-align: center;\n    font-weight: 600;\n    font-size: 32px;\n  }\n  "," {\n    font-size: 27px;\n    letter-spacing: 0.27px;\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),le=l.a.div(f||(f=Object(r.a)(["\n  color: #444444;\n  font-weight: 600;\n  "," {\n    font-size: 14px;\n    margin-top: 15px;\n  }\n  "," {\n    font-size: 14px;\n    letter-spacing: 0.14px;\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),se=l.a.div(v||(v=Object(r.a)(["\n  "," {\n  }\n  "," {\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),de=Object(l.a)(Q.a)(w||(w=Object(r.a)(["\n  width: 300px;\n  height: 45px;\n  "," {\n    background-color: #0c1b58;\n  }\n  "," {\n    font-size: 16px;\n    letter-spacing: 0.23px;\n    background-color: #0c1b58;\n    &:hover {\n      background-color: #0c1b58;\n    }\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),be=l.a.div(_||(_=Object(r.a)(["\n  "," {\n    width: 100%;\n    padding: 0 30px;\n    display: flex;\n    justify-content: flex-end;\n    & img {\n      width: 180px;\n      object-fit: contain;\n    }\n  }\n  "," {\n    display: none;\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),pe=l.a.div(S||(S=Object(r.a)(["\n  "," {\n    min-height: 90vh;\n  }\n  "," {\n    min-height: 100vh;\n    margin: 0 auto;\n  }\n"])),Object(s.d)(s.b),Object(s.d)(s.a)),ue=Object(o.a)((function(){return Promise.all([n.e(3),n.e(6),n.e(14),n.e(28)]).then(n.bind(null,549))})),je=Object(o.a)((function(){return Promise.all([n.e(30),n.e(31)]).then(n.bind(null,533))})),he=Object(o.a)((function(){return Promise.all([n.e(3),n.e(5),n.e(6),n.e(9),n.e(23)]).then(n.bind(null,534))})),me=Object(o.a)((function(){return Promise.all([n.e(34),n.e(26)]).then(n.bind(null,535))})),ge=Object(o.a)((function(){return Promise.all([n.e(0),n.e(2),n.e(24)]).then(n.bind(null,536))}));t.default=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(F,{}),Object(d.jsx)(pe,{children:Object(d.jsxs)(a.d,{children:[Object(d.jsx)(a.b,{path:"/main/board/:param/:subparam",component:he}),Object(d.jsx)(a.b,{path:"/main/detail/:param/:subparam/:id",component:me}),Object(d.jsx)(a.b,{path:"/main/write/:param/:subparam",component:ge}),Object(d.jsx)(a.b,{path:"/main/detail/:param/:subparam",component:je}),Object(d.jsx)(a.b,{path:"/main/login",component:ne}),Object(d.jsx)(a.b,{path:"/main",component:ue})]})}),Object(d.jsx)(b,{})]})}}}]);
//# sourceMappingURL=21.c0fb9edd.chunk.js.map