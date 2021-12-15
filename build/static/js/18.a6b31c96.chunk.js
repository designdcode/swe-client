(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [18],
  {
    110: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return m;
      }),
        t.d(n, "k", function () {
          return O;
        }),
        t.d(n, "e", function () {
          return f;
        }),
        t.d(n, "i", function () {
          return v;
        }),
        t.d(n, "f", function () {
          return w;
        }),
        t.d(n, "g", function () {
          return k;
        }),
        t.d(n, "b", function () {
          return y;
        }),
        t.d(n, "c", function () {
          return S;
        }),
        t.d(n, "d", function () {
          return N;
        }),
        t.d(n, "h", function () {
          return $;
        }),
        t.d(n, "j", function () {
          return _;
        });
      var i,
        a,
        c,
        o,
        r,
        l,
        s,
        d,
        h,
        b,
        j,
        p,
        g,
        u = t(99),
        x = t(402),
        m = Object(x.a)(
          i ||
            (i = Object(u.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        O = Object(x.a)(
          a ||
            (a = Object(u.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(x.a)(
          c ||
            (c = Object(u.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object(x.a)(
          o ||
            (o = Object(u.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w =
          (Object(x.a)(
            r ||
              (r = Object(u.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(x.a)(
            l ||
              (l = Object(u.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(x.a)(
            s ||
              (s = Object(u.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(x.a)(
          d ||
            (d = Object(u.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y = Object(x.a)(
          h ||
            (h = Object(u.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(x.a)(
          b ||
            (b = Object(u.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(x.a)(
          j ||
            (j = Object(u.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(x.a)(
          p ||
            (p = Object(u.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        _ = Object(x.a)(
          g ||
            (g = Object(u.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    122: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return d;
      }),
        t.d(n, "d", function () {
          return h;
        }),
        t.d(n, "a", function () {
          return b;
        }),
        t.d(n, "e", function () {
          return j;
        }),
        t.d(n, "c", function () {
          return p;
        });
      var i,
        a,
        c,
        o,
        r,
        l = t(99),
        s = t(402),
        d = Object(s.a)(
          i ||
            (i = Object(l.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        h = Object(s.a)(
          a ||
            (a = Object(l.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(s.a)(
          c ||
            (c = Object(l.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(s.a)(
          o ||
            (o = Object(l.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        p = Object(s.a)(
          r ||
            (r = Object(l.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    132: function (e, n, t) {
      "use strict";
      var i = t(114),
        a = t(2);
      n.a = function (e) {
        var n = Object(a.useState)(e),
          t = Object(i.a)(n, 2),
          c = t[0],
          o = t[1];
        return [
          c,
          Object(a.useCallback)(function (e) {
            o(e.target.value);
          }, []),
          o,
        ];
      };
    },
    138: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return i;
      });
      var i = function (e) {
        var n = new Date(1e3 * Math.floor(parseInt(e, 10) / 1e3));
        return (
          n.getFullYear() +
          "-" +
          (n.getMonth() + 1 >= 10
            ? n.getMonth() + 1
            : "0".concat(n.getMonth() + 1)) +
          "-" +
          (n.getDate() >= 10 ? n.getDate() : "0".concat(n.getDate()))
        );
      };
    },
    164: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return d;
      }),
        t.d(n, "a", function () {
          return h;
        }),
        t.d(n, "d", function () {
          return b;
        }),
        t.d(n, "c", function () {
          return j;
        });
      var i,
        a = t(99),
        c = t(402),
        o = t(52),
        r = t(54),
        l = t(165),
        s = Object(c.a)(
          i ||
            (i = Object(a.a)([
              "\n  query adminLogin {\n    adminLogin @client\n  }\n",
            ]))
        ),
        d = function () {
          r.b.cache.writeQuery({ query: s, data: { adminLogin: !0 } }),
            localStorage.setItem("admin", "".concat(Date.now() + 72e5)),
            Object(r.a)(!0);
        },
        h = function () {
          r.b.cache.writeQuery({ query: s, data: { adminLogin: !1 } }),
            localStorage.removeItem("admin"),
            Object(r.a)(!1);
        },
        b = function (e) {
          localStorage.setItem("stno", "".concat(e));
        },
        j = function () {
          localStorage.removeItem("stno"),
            o.b.success(
              "\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
            ),
            l.a.push("/main");
        };
    },
    165: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return a;
      });
      var i = t(12),
        a = Object(i.a)({ forceRefresh: !0 });
    },
    399: function (e, n, t) {
      "use strict";
      t.r(n);
      var i,
        a = t(2),
        c = t(5),
        o = t(99),
        r = t(111),
        l = "phoneMedium",
        s = "lpc",
        d = {
          lpc: 1279,
          pc: 1279,
          tablet: 767,
          phoneMedium: 375,
          phoneSmall: 349,
        },
        h = function (e) {
          switch (e) {
            case "lpc":
              return "@media only screen and (min-width: 376px)";
            default:
              return "@media only screen and (max-width: ".concat(d[e], "px)");
          }
        },
        b = r.a.div(
          i ||
            (i = Object(o.a)([
              "\n  width: 100%;\n  height: 270px;\n  ",
              " {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f7f7f7;\n    font-size: 8px;\n    span {\n      display: block;\n      max-width: ",
              "px;\n      color: #747474;\n      text-align: center;\n      line-height: 10px;\n    }\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f7f7f7;\n  span {\n    display: block;\n    max-width: ",
              "px;\n    color: #747474;\n    text-align: center;\n    line-height: 20px;\n  }\n",
            ])),
          h(l),
          d.phoneMedium,
          d.tablet
        ),
        j = t(13),
        p = function () {
          return Object(j.jsx)(b, {
            children: Object(j.jsxs)("span", {
              children: [
                "TEL . 041-530-8311 FAX. 041-530-8315 ",
                Object(j.jsx)("br", {}),
                "\uc6b0) 31460 \ucda9\ub0a8 \uc544\uc0b0\uc2dc \ud0d5\uc815\uba74 \uc120\ubb38\ub85c 221\ubc88\uae38 70 \uc120\ubb38\ub300\ud559\uad50 SW\uc735\ud569\uad00(\uc6d0\ud654\uad00) 506\ud638 70,",
                Object(j.jsx)("br", {}),
                "Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si, Chungcheongnam-do, korea , 31460",
              ],
            }),
          });
        },
        g = t(114),
        u = t(53),
        x = [
          {
            key: 0,
            title: "intro",
            ko_title: "\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",
            subMenu: [
              {
                key: "intro-introduce",
                title: "introduce",
                ko_title: "\uc778\uc0ac\ub9d0",
              },
              {
                key: "intro-overview",
                title: "overview",
                ko_title: "\uc0ac\uc5c5\uac1c\uc694",
              },
              {
                key: "intro-history",
                title: "history",
                ko_title: "\uc5f0\ud601",
              },
              {
                key: "intro-task",
                title: "task",
                ko_title: "\uc870\uc9c1\ub3c4 \ubc0f \uc5c5\ubb34",
              },
              {
                key: "intro-route",
                title: "route",
                ko_title: "\uc624\uc2dc\ub294\uae38",
              },
            ],
          },
          {
            key: 1,
            title: "basic",
            ko_title: "SW\uae30\ucd08\uad50\uc721",
            subMenu: [
              {
                key: "basic-overview",
                title: "basic-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "basic-pre",
                title: "basic-pre-education",
                ko_title: "\uc785\ud559\uc804 SW\uad50\uc721",
              },
              {
                key: "basic-basicedu",
                title: "basic-education",
                ko_title: "SW\uae30\ucd08\uad50\uc721",
              },
              {
                key: "basic-creativity",
                title: "basic-creativity",
                ko_title: "SW\ucc3d\uc758\uc5ed\ub7c9\uc778\uc99d",
              },
              {
                key: "basic-lecture",
                title: "basic-lecture",
                ko_title: "ST@R EDX \uacf5\uac1c\uac15\uc88c",
              },
              {
                key: "basic-clinic",
                title: "basic-clinic",
                ko_title: "SW\ud074\ub9ac\ub2c9",
              },
              {
                key: "basic-tutoring",
                title: "basic-tutoring",
                ko_title: "SW\ud29c\ud130\ub9c1",
              },
              {
                key: "basic-AI",
                title: "basic-AI",
                ko_title: "AI SW \uc11c\ud3ec\ud130\uc988 \ub9e8\ud1a0\ub9c1",
              },
              {
                key: "basic-online",
                title: "basic-online",
                ko_title:
                  "\uac1c\ubc29\ud615\uc628\ub77c\uc778\ud50c\ub7ab\ud3fc",
              },
            ],
          },
          {
            key: 2,
            title: "major",
            ko_title: "SW\uc804\uacf5\uad50\uc721",
            subMenu: [
              {
                key: "major-overview",
                title: "major-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "major-project",
                title: "major-project",
                ko_title:
                  "\ud504\ub85c\uc81d\ud2b8 \uae30\ubc18 \uad50\uc721\uacfc\uc815",
              },
              {
                key: "major-sw",
                title: "major-sw",
                ko_title: "\ubab0\uc785\ud615 SW\uad50\uc721\uacfc\uc815",
              },
              {
                key: "major-opensource",
                title: "major-opensource",
                ko_title: "\uc624\ud508\uc18c\uc2a4 SW \uad50\uc721",
              },
              {
                key: "major-verify",
                title: "major-verify",
                ko_title:
                  "\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\ubb38\uc5ed\ub7c9\uc778\uc99d\uc81c",
              },
              {
                key: "major-contest",
                title: "major-contest",
                ko_title: "SW \uacbd\uc9c4\ub300\ud68c",
              },
              {
                key: "major-training",
                title: "major-training",
                ko_title: "\ud574\uc678\ud604\uc7a5\uc2e4\uc2b5",
              },
              {
                key: "major-taprogram",
                title: "major-taprogram",
                ko_title:
                  "\ud504\ub85c\uadf8\ub798\ubc0d\uad50\uacfc\ubaa9 \uba58\ud1a0(TA) \ud504\ub85c\uadf8\ub7a8",
              },
            ],
          },
          {
            key: 3,
            title: "integration",
            ko_title: "SW\uc735\ud569\uad50\uc721",
            subMenu: [
              {
                key: "integration-overview",
                title: "integration-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "integration-software",
                title: "integration-software",
                ko_title:
                  "\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc735\ud569\uacbd\uc601\uc804\uacf5",
              },
              {
                key: "integration-product",
                title: "integration-product",
                ko_title:
                  "\uc2a4\ub9c8\ud2b8\uc81c\uc870 IOT\uc735\ud569\uc804\uacf5",
              },
              {
                key: "integration-content",
                title: "integration-content",
                ko_title:
                  "\uc2a4\ub9c8\ud2b8\ucf58\ud150\uce20 \uc735\ud569\uc804\uacf5",
              },
              {
                key: "integration-automobile",
                title: "integration-automobile",
                ko_title:
                  "\ubbf8\ub798\uc790\ub3d9\ucc28 \uc735\ud569\uc804\uacf5",
              },
              {
                key: "integration-inteligence",
                title: "integration-inteligence",
                ko_title:
                  "\uc9c0\ub2a5\ud615 \uc804\uc7a5 \uc81c\uc5b4 \uc804\uacf5",
              },
            ],
          },
          {
            key: 4,
            title: "value",
            ko_title: "SW\uac00\uce58\ud655\uc0b0",
            subMenu: [
              {
                key: "value-overview",
                title: "value-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "value-edu",
                title: "value-edu",
                ko_title: "\uc218\uc694\uc911\uc2ec AI \xb7 SW \uad50\uc721",
              },
              {
                key: "value-training",
                title: "value-training",
                ko_title: "AI \xb7 SW \uc120\ub3c4\uc790 \uc591\uc131",
              },
              {
                key: "value-share",
                title: "value-share",
                ko_title: "AI \xb7 SW \uac00\uce58\uacf5\uc720",
              },
              {
                key: "value-platform",
                title: "value-platform",
                ko_title: "SW \uac00\uce58\ud655\uc0b0 \ud50c\ub7ab\ud3fc",
              },
            ],
          },
          {
            key: 5,
            title: "cooperation",
            ko_title: "SW\uc0b0\ud559\ud611\ub825",
            subMenu: [
              {
                key: "cooperation-overview",
                title: "cooperation-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "cooperation-network",
                title: "cooperation-network",
                ko_title:
                  "\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ub124\ud2b8\uc6cc\ud06c",
              },
              {
                key: "cooperation-project",
                title: "cooperation-project",
                ko_title:
                  "\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ud504\ub85c\uc81d\ud2b8",
              },
              {
                key: "cooperation-internship",
                title: "cooperation-internship",
                ko_title:
                  "\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc5f0\uacc4\uc778\ud134\uc27d",
              },
            ],
          },
          {
            key: 6,
            title: "achievement",
            ko_title: "\uc0ac\uc5c5\uc131\uacfc",
            subMenu: [
              {
                key: "achievement-news",
                title: "achievement-news",
                ko_title: "\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd",
              },
              {
                key: "achievement-aidnews",
                title: "achievement-aidnews",
                ko_title: "SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd",
              },
              {
                key: "achievement-valuenews",
                title: "achievement-valuenews",
                ko_title: "SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd",
              },
              {
                key: "achievement-coopnews",
                title: "achievement-coopnews",
                ko_title: "SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd",
              },
              {
                key: "achievement-startup",
                title: "achievement-startup",
                ko_title: "\ucc3d\uc5c5\uc9c0\uc6d0 \uc18c\uc2dd",
              },
            ],
          },
          {
            key: 7,
            title: "community",
            ko_title: "\uc54c\ub9bc\ub9c8\ub2f9",
            subMenu: [
              {
                key: "community-notice",
                title: "community-notice",
                ko_title: "\uacf5\uc9c0\uc0ac\ud56d",
              },
              {
                key: "community-administration",
                title: "community-administration",
                ko_title: "\ud559\uc0ac\uacf5\uc9c0",
              },
              {
                key: "community-storaoge",
                title: "community-storage",
                ko_title: "\uc11c\uc2dd\uc790\ub8cc\uc2e4",
              },
              {
                key: "community-request",
                title: "community-request",
                ko_title: "\uac74\uc758\uc0ac\ud56d",
              },
              {
                key: "community-help",
                title: "community-help",
                ko_title: "\ud5ec\ud504\ub370\uc2a4\ud06c",
              },
              {
                key: "community-sitemap",
                title: "community-sitemap",
                ko_title: "\uc0ac\uc774\ud2b8\ub9f5",
              },
            ],
          },
          {
            key: 8,
            title: "site-link",
            ko_title: "\uc0ac\uc774\ud2b8\ub9c1\ud06c",
            subMenu: [
              {
                key: "site-link",
                title: "link",
                ko_title: "\ub9c1\ud06c\uad00\ub9ac",
              },
            ],
          },
        ],
        m = t(263);
      var O,
        f,
        v,
        w,
        k,
        y,
        S,
        N,
        $,
        _,
        I,
        z,
        B,
        C,
        M,
        F,
        A,
        W,
        L,
        D,
        T,
        q,
        E,
        P,
        U,
        R,
        Y,
        G,
        J,
        Q,
        V,
        X,
        H,
        K,
        Z,
        ee,
        ne,
        te,
        ie,
        ae,
        ce,
        oe,
        re,
        le,
        se = Object(m.a)("div", { target: "e1p7p4c88" })(
          "width:100%;",
          h(l),
          "{height:48px;}",
          h(s),
          "{height:150px;min-width:1280px;}"
        ),
        de = Object(m.a)("div", { target: "e1p7p4c87" })(
          h(l),
          "{display:none;}height:30px;background-color:#0c1b58;color:white;& .top-content{height:100%;width:",
          d.pc,
          "px;display:flex;align-items:center;justify-content:space-between;margin:0 auto;font-size:12px;letter-spacing:0.13px;}& .options{display:flex;width:100px;flex-direction:row;justify-content:space-between;}"
        ),
        he = Object(m.a)("div", { target: "e1p7p4c86" })(""),
        be = Object(m.a)("div", { target: "e1p7p4c85" })({
          name: "16d6plu",
          styles:
            "transform:scaleY(0);visibility:hidden;height:0;border-top:1px solid #0c1b58;background-color:black;border-right:1px solid #303952;& li{min-height:25px;margin:5px 0;}& li>.link{color:white;&:hover{color:#808080;}}&:hover{background-color:#0c1b58;transition:0.2s linear;}",
        }),
        je = Object(m.a)("div", { target: "e1p7p4c84" })(
          h(l),
          "{display:none;}",
          h(s),
          "{& .main-content-desktop{width:",
          d.pc,
          "px;align-items:center;display:flex;justify-content:space-between;margin:0 auto;height:80px;}& .main-menu{height:55px;width:100%;color:white;display:flex;justify-content:center;background-color:#0c1b58;&:hover ",
          be,
          "{visibility:visible;transform:scaleY(1);height:320px;opacity:0.8;padding-top:7px;transition:height 0.1s ease-in;position:absolute;z-index:1000;}&:hover li{height:25px;transition:height 0.1s ease-in;}.header-title{width:141px;height:50%;margin:10px 0;display:flex;align-items:center;justify-content:center;& span{display:flex;flex-direction:inherit;justify-content:center;align-items:center;height:70%;font-weight:600;cursor:pointer;}&:hover{color:#f03fa8;transition:0.2s linear;}}ul{padding:0;width:141px;list-style:none;cursor:pointer;position:relative;}li{width:141px;font-size:11.5px;line-height:25px;text-align:center;color:white;height:0;cursor:pointer;padding:2px 4px;&:hover{color:#f03fa8;transition:0.2s linear;}}}}"
        ),
        pe = Object(m.a)("div", { target: "e1p7p4c83" })(
          "width:100%;height:4px;margin-bottom:3px;background-color:",
          function (e) {
            return e.hoverProps ? "#f03fa8" : "none";
          },
          ";transition-property:opacity,left;transition-duration:3s,5s,2s,1s;"
        ),
        ge = Object(m.a)("div", { target: "e1p7p4c82" })(
          h(s),
          "{display:none;}& .wrapper{width:100%;display:flex;justify-content:space-between;align-items:center;height:50px;background-color:#0c1b58;color:white;padding:0 15px;& .menu{font-size:24px;transform:rotate(90deg);}}"
        ),
        ue = Object(m.a)("div", { target: "e1p7p4c81" })(
          "width:100%;margin:5px 0;height:75px;font-size:17px;& button{color:white;width:100%;height:100%;background-color:",
          function (e) {
            return e.menuOpen ? "#384270" : "#0c1b58";
          },
          ";border:none;}"
        ),
        xe = Object(m.a)("div", { target: "e1p7p4c80" })({
          name: "1g48ylb",
          styles:
            "width:100%;margin:5px 0;font-size:14px;height:50px;& button{color:white;width:100%;height:100%;background-color:#384270;border:none;text-align:left;}",
        }),
        me = t(277),
        Oe = t(217),
        fe = t(404),
        ve = t(164),
        we = function () {
          var e,
            n = Object(a.useState)(null),
            t = Object(g.a)(n, 2),
            i = t[0],
            c = t[1],
            o = Object(a.useState)(!1),
            r = Object(g.a)(o, 2),
            l = r[0],
            s = r[1],
            d = Object(a.useState)(!1),
            h = Object(g.a)(d, 2),
            b = h[0],
            p = h[1],
            m = Object(a.useState)(!1),
            O = Object(g.a)(m, 2),
            f = O[0],
            v = O[1],
            w = Object(a.useState)(-1),
            k = Object(g.a)(w, 2),
            y = k[0],
            S = k[1];
          Object(a.useEffect)(function () {
            localStorage.getItem("stno") ? v(!0) : v(!1);
          }, []);
          var N = Object(a.useCallback)(
              function (e) {
                S(e), p(!b);
              },
              [b]
            ),
            $ = Object(a.useCallback)(function () {
              s(!1);
            }, []),
            _ = Object(a.useCallback)(function () {
              p(!1), S(-1);
            }, []);
          return Object(j.jsxs)(se, {
            children: [
              Object(j.jsx)(de, {
                children: Object(j.jsxs)("div", {
                  className: "top-content",
                  children: [
                    Object(j.jsx)("span", { children: "SUNMOON UNIVERSITY" }),
                    Object(j.jsxs)("div", {
                      className: "options",
                      children: [
                        Object(j.jsx)("div", {
                          children: Object(j.jsx)(u.b, {
                            to: "/main",
                            style: { textDecoration: "none", color: "white" },
                            children: "HOME",
                          }),
                        }),
                        Object(j.jsx)("div", { children: "|" }),
                        Object(j.jsx)("div", {
                          children: f
                            ? Object(j.jsx)("div", {
                                onClick: function () {
                                  return Object(ve.c)();
                                },
                                children: "LOG OUT",
                              })
                            : Object(j.jsx)(u.b, {
                                to: "/main/login",
                                style: {
                                  textDecoration: "none",
                                  color: "white",
                                },
                                children: "LOGIN",
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(j.jsxs)(he, {
                children: [
                  Object(j.jsxs)(je, {
                    children: [
                      Object(j.jsxs)("div", {
                        className: "main-content-desktop",
                        children: [
                          Object(j.jsx)("div", {}),
                          Object(j.jsx)(u.b, {
                            to: "/main",
                            children: Object(j.jsx)("img", {
                              src: "/img/logo.png",
                              alt: "logo",
                            }),
                          }),
                          Object(j.jsx)("div", { children: "options" }),
                        ],
                      }),
                      Object(j.jsx)("div", {
                        className: "main-menu",
                        children: x.map(function (e, n) {
                          return Object(j.jsxs)(
                            "ul",
                            {
                              style: { margin: 0 },
                              onMouseOver: function () {
                                return c(e.key);
                              },
                              onMouseLeave: function () {
                                return c(null);
                              },
                              children: [
                                Object(j.jsx)(pe, { hoverProps: i === n }),
                                Object(j.jsx)("div", {
                                  className: "header-title",
                                  children: Object(j.jsx)("span", {
                                    children: e.ko_title,
                                  }),
                                }),
                                Object(j.jsx)(be, {
                                  children: e.subMenu.map(function (n, t) {
                                    return Object(j.jsx)(
                                      "li",
                                      {
                                        children: Object(j.jsx)(u.b, {
                                          to: "/main/detail/"
                                            .concat(e.title, "/")
                                            .concat(n.key),
                                          className: "link",
                                          children: n.ko_title,
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                }),
                              ],
                            },
                            n
                          );
                        }),
                      }),
                    ],
                  }),
                  Object(j.jsx)(ge, {
                    children: Object(j.jsxs)("div", {
                      className: "wrapper",
                      children: [
                        Object(j.jsx)("div", {
                          className: "menu",
                          onClick: function () {
                            return s(!l);
                          },
                          children: "|||",
                        }),
                        Object(j.jsx)("div", {
                          className: "logo",
                          children: Object(j.jsx)(u.b, {
                            to: "/main",
                            children: Object(j.jsx)("img", {
                              src: "/img/mobileLogo.png",
                              alt: "mobile logo",
                              typeof: "png",
                            }),
                          }),
                        }),
                        Object(j.jsx)("div", {
                          className: "login",
                          children: f
                            ? Object(j.jsx)("div", {
                                onClick: function () {
                                  return Object(ve.c)();
                                },
                                children: Object(j.jsx)(Oe.c, { size: 25 }),
                              })
                            : Object(j.jsx)(u.b, {
                                to: "/main/login",
                                style: {
                                  textDecoration: "none",
                                  color: "white",
                                },
                                children: Object(j.jsx)(me.a, { size: 25 }),
                              }),
                        }),
                        Object(j.jsxs)(fe.a, {
                          width: 180,
                          closable: !1,
                          onClose: $,
                          visible: l,
                          placement: "left",
                          bodyStyle: ke,
                          children: [
                            x.map(function (e, n) {
                              return Object(j.jsx)(
                                ue,
                                {
                                  menuOpen: y === n,
                                  children: Object(j.jsx)("button", {
                                    onClick: function () {
                                      return N(n);
                                    },
                                    children: e.ko_title,
                                  }),
                                },
                                n
                              );
                            }),
                            Object(j.jsx)(fe.a, {
                              width: 180,
                              closable: !1,
                              onClose: _,
                              visible: b,
                              placement: "left",
                              bodyStyle: ye,
                              children:
                                null === (e = x[y]) || void 0 === e
                                  ? void 0
                                  : e.subMenu.map(function (e, n) {
                                      return Object(j.jsx)(xe, {
                                        children: Object(j.jsx)("button", {
                                          children: e.ko_title,
                                        }),
                                      });
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ke = {
          backgroundColor: " #0c1b58",
          paddingTop: "50px",
          paddingRight: 0,
          paddingLeft: 0,
        },
        ye = {
          backgroundColor: "#384270",
          paddingTop: "60px",
          paddingRight: 0,
          paddingLeft: "20px",
        },
        Se = function () {
          var e = "object" === typeof window,
            n = Object(a.useCallback)(
              function () {
                return {
                  width: e ? window.innerWidth : 0,
                  height: e ? window.innerWidth : 0,
                };
              },
              [e]
            ),
            t = Object(a.useState)(n),
            i = Object(g.a)(t, 2),
            c = i[0],
            o = i[1];
          return (
            Object(a.useEffect)(
              function () {
                if (e) {
                  var t = function () {
                    o(n());
                  };
                  return (
                    window.addEventListener("resize", t),
                    function () {
                      return window.removeEventListener("resize", t);
                    }
                  );
                }
              },
              [n, e]
            ),
            c
          );
        },
        Ne = t(188),
        $e = t(110),
        _e = function () {
          var e,
            n = Se(),
            t = Object(c.i)(),
            i = t.param,
            a = t.subparam;
          console.log(i);
          var o = Object(Ne.a)($e.k, { variables: { category: a } }),
            r = o.loading,
            l = o.data;
          return r
            ? Object(j.jsx)("div", { children: "loading..." })
            : Object(j.jsxs)(Ie, {
                children: [
                  Object(j.jsxs)(ze, {
                    children: [
                      Object(j.jsx)(Be, {
                        margin: n.width > 1500 ? "25%" : "15%",
                        children: x.map(function (e, n) {
                          return e.title === i
                            ? Object(j.jsxs)(
                                "div",
                                {
                                  children: [
                                    Object(j.jsx)("span", {
                                      className: "cover-main-title",
                                      children: e.ko_title,
                                    }),
                                    Object(j.jsx)("span", {
                                      className: "cover-description",
                                      children: "description",
                                    }),
                                  ],
                                },
                                n
                              )
                            : null;
                        }),
                      }),
                      Object(j.jsx)(Ce, {
                        isBigger: "major" === i || "basic" === i,
                        children: Object(j.jsx)("div", {
                          className: "submenu-content",
                          children: x.map(function (e, n) {
                            return e.title === i
                              ? e.subMenu.map(function (e, n) {
                                  var t = e.key === a ? 0 : 1;
                                  return Object(j.jsxs)(Fe, {
                                    className: "submenu-col",
                                    first: t,
                                    children: [
                                      Object(j.jsx)(Ae, { first: t }),
                                      Object(j.jsx)(Me, {
                                        to: "/main/detail/"
                                          .concat(i, "/")
                                          .concat(e.key),
                                        first: t,
                                        children: e.ko_title,
                                      }),
                                    ],
                                  });
                                })
                              : null;
                          }),
                        }),
                      }),
                      Object(j.jsx)("img", {
                        src: "/img/detailBG.jpeg",
                        alt: "cover",
                      }),
                    ],
                  }),
                  Object(j.jsx)(We, {
                    children: Object(j.jsx)(Le, {
                      children:
                        null === l ||
                        void 0 === l ||
                        null === (e = l.getBoardByCategory.data) ||
                        void 0 === e
                          ? void 0
                          : e.map(function (e) {
                              var n;
                              return null === e ||
                                void 0 === e ||
                                null === (n = e.images) ||
                                void 0 === n
                                ? void 0
                                : n.map(function (e) {
                                    return Object(j.jsx)("img", {
                                      src:
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.url,
                                      alt: "file",
                                    });
                                  });
                            }),
                    }),
                  }),
                ],
              });
        },
        Ie = r.a.div(
          O ||
            (O = Object(o.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n    margin-top: 15px;\n    width: 100%;\n    min-width: 1280px;\n    max-width: 1920px;\n    min-height: 100%;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        ze = r.a.div(
          f ||
            (f = Object(o.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n    width: 100%;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Be = r.a.div(
          v ||
            (v = Object(o.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",
              ";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 600;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n",
            ])),
          h(l),
          h(s),
          function (e) {
            return e.margin;
          }
        ),
        Ce = r.a.div(
          w ||
            (w = Object(o.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      width: 1280px;\n      min-height: 50px;\n      height: ",
              ";\n      margin: 0 auto;\n      display: flex;\n      align-items: center;\n      flex-wrap: wrap;\n      padding-left: 160px;\n    }\n    & .submenu-col {\n      width: 170px;\n      height: 50px;\n      display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n",
            ])),
          h(l),
          h(s),
          function (e) {
            return e.isBigger ? "100px" : "50px";
          }
        ),
        Me = Object(r.a)(u.b)(
          k ||
            (k = Object(o.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n\n    color: ",
              ";\n    &:hover {\n      color: white;\n    }\n  }\n",
            ])),
          h(l),
          h(s),
          function (e) {
            return 0 === e.first ? "white" : "black";
          }
        ),
        Fe = r.a.div(
          y ||
            (y = Object(o.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    background-color: ",
              ";\n    color: ",
              ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n",
            ])),
          h(l),
          h(s),
          function (e) {
            return 0 === e.first ? "#0c1b58" : "";
          },
          function (e) {
            return 0 === e.first ? "white" : "black";
          }
        ),
        Ae = r.a.div(
          S ||
            (S = Object(o.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 50%;\n    height: 2px;\n    border-top: ",
              ";\n  }\n",
            ])),
          h(l),
          h(s),
          function (e) {
            return 0 === e.first ? "2px solid white" : "";
          }
        ),
        We = r.a.div(
          N ||
            (N = Object(o.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 1280px;\n    min-height: 100vh;\n    margin: 0 auto;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Le = r.a.div(
          $ ||
            ($ = Object(o.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    padding: 60px 0;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    & img {\n      width: 80%;\n      margin: 0 auto;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        De = r.a.div(
          _ ||
            (_ = Object(o.a)([
              "\n  ",
              " {\n    width: 100%;\n    /* max-width:375px; */\n    min-height: 100vh;\n  }\n  ",
              " {\n    max-width: 1920px;\n    margin-top: 15px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Te = t(161),
        qe = (t(280), t(227)),
        Ee = function () {
          var e = Se();
          return Object(j.jsx)(Pe, {
            children: Object(j.jsxs)(qe.Carousel, {
              autoPlay: !0,
              infiniteLoop: !0,
              showArrows: !1,
              showThumbs: !1,
              showStatus: !1,
              renderIndicator:
                e.width > 375
                  ? function (e, n, t, i) {
                      var a = {
                          marginLeft: 20,
                          color: "white",
                          cursor: "pointer",
                        },
                        c = n
                          ? Object(Te.a)(
                              Object(Te.a)({}, a),
                              {},
                              { color: "red" }
                            )
                          : Object(Te.a)({}, a);
                      return Object(j.jsxs)(
                        "span",
                        {
                          style: c,
                          onClick: e,
                          onKeyDown: e,
                          role: "button",
                          tabIndex: 0,
                          "aria-label": "".concat(i, " ").concat(t + 1),
                          children: [
                            0 === t &&
                              Object(j.jsx)(Oe.a, { size: 45, color: "white" }),
                            1 === t &&
                              Object(j.jsx)(Oe.b, { size: 45, color: "white" }),
                          ],
                        },
                        t
                      );
                    }
                  : void 0,
              children: [
                Object(j.jsxs)(Ue, {
                  children: [
                    Object(j.jsx)(Re, {
                      src:
                        e.width > 375
                          ? "img/banner1.jpeg"
                          : "img/mobileBanner.jpeg",
                      alt: "banner",
                    }),
                    e.width > 375 &&
                      Object(j.jsx)(Ye, {
                        src: "img/banner2_cover.jpeg",
                        alt: "banner cover",
                      }),
                  ],
                }),
                Object(j.jsxs)(Ue, {
                  children: [
                    Object(j.jsx)(Re, {
                      src:
                        e.width > 375
                          ? "img/banner2.jpeg"
                          : "img/mobileBanner2.jpeg",
                      alt: "banner2",
                    }),
                    e.width > 375 &&
                      Object(j.jsx)(Ye, {
                        src: "img/banner1_cover.jpeg",
                        alt: "banner2 cover",
                      }),
                  ],
                }),
              ],
            }),
          });
        },
        Pe = r.a.div(
          I ||
            (I = Object(o.a)([
              "\n  ",
              " {\n    height: 400px;\n    width: 100%;\n  }\n  ",
              " {\n    width: 100%;\n    max-width: 1920px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Ue = r.a.div(
          z ||
            (z = Object(o.a)([
              "\n  width: 100%;\n  height: 100%;\n  ",
              " {\n    margin: 0;\n  }\n  ",
              " {\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Re = r.a.img(
          B ||
            (B = Object(o.a)([
              "\n  object-fit: contain;\n  ",
              " {\n    height: 400px;\n  }\n  ",
              " {\n    height: 640px;\n    width: 1280px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Ye = r.a.img(
          C ||
            (C = Object(o.a)([
              "\n  height: 400px;\n  object-fit: cover;\n  position: absolute;\n  ",
              " {\n    height: 640px;\n  }\n",
            ])),
          h(s)
        ),
        Ge =
          (r.a.span(
            M ||
              (M = Object(o.a)([
                "\n  display: none;\n  ",
                " {\n    display: block;\n    color: white;\n    width: 450px;\n  }\n",
              ])),
            h(s)
          ),
          r.a.div(
            F ||
              (F = Object(o.a)([
                "\n  ",
                " {\n    max-width: 1280px;\n    text-align: start;\n    position: absolute;\n    top: 30%;\n    z-index: 5;\n    right: 20%;\n\n    & .first-content {\n    }\n    & .second-content {\n      font-size: 50px;\n      letter-spacing: -1.43px;\n    }\n    & .third-content {\n      letter-spacing: 0.22px;\n    }\n  }\n",
              ])),
            h(s)
          ),
          function () {
            var e = Se(),
              n = Object(a.useState)(),
              t = Object(g.a)(n, 2),
              i = t[0],
              c = t[1],
              o = Object(a.useState)(0),
              r = Object(g.a)(o, 2),
              l = r[0],
              s = r[1];
            return Object(Ne.a)($e.k, {
              variables: { category: "achievement-news" },
              onCompleted: function (e) {
                var n = e.getBoardByCategory,
                  t = n.ok,
                  i = n.data,
                  a = n.err;
                t && i ? c(i) : console.log(a);
              },
            }).loading
              ? Object(j.jsx)("div", { children: "loading..." })
              : Object(j.jsx)(Je, {
                  children: Object(j.jsxs)(Qe, {
                    children: [
                      Object(j.jsxs)(Ve, {
                        children: [
                          Object(j.jsxs)("div", {
                            className: "main-sub-title",
                            children: [
                              Object(j.jsx)("div", { className: "line" }),
                              Object(j.jsx)("span", {
                                className: "title",
                                children: "\uc0ac\uc5c5\ub2e8\uc18c\uc2dd",
                              }),
                            ],
                          }),
                          i &&
                            null !== i &&
                            Object(j.jsx)("div", {
                              className: "dots",
                              children: i.map(function (e, n) {
                                return n < 5
                                  ? Object(j.jsx)(
                                      Ke,
                                      {
                                        current: l === n,
                                        onClick: function () {
                                          return s(n);
                                        },
                                      },
                                      n
                                    )
                                  : null;
                              }),
                            }),
                        ],
                      }),
                      Object(j.jsx)(He, {
                        children: i
                          ? Object(j.jsx)(j.Fragment, {
                              children:
                                e.width < 376
                                  ? Object(j.jsx)(qe.Carousel, {
                                      showIndicators: !1,
                                      showStatus: !1,
                                      showThumbs: !1,
                                      showArrows: !1,
                                      selectedItem: l,
                                      infiniteLoop: !0,
                                      width: 285,
                                      children: i.map(function (e, n) {
                                        var t,
                                          i = "";
                                        e.images &&
                                          e.images.length > 0 &&
                                          (i =
                                            null ===
                                              (t =
                                                e.images[
                                                  e.images.length - 1
                                                ]) || void 0 === t
                                              ? void 0
                                              : t.url);
                                        return Object(j.jsxs)(
                                          Ze,
                                          {
                                            children: [
                                              Object(j.jsx)(Xe, {
                                                src: i,
                                                alt: "news image",
                                              }),
                                              Object(j.jsx)("div", {
                                                className: "carousel-text",
                                                children: e.title,
                                              }),
                                            ],
                                          },
                                          n
                                        );
                                      }),
                                    })
                                  : Object(j.jsx)("div", {
                                      className: "card-container",
                                      children: i.map(function (e, n) {
                                        var t;
                                        e.images &&
                                          e.images.length > 0 &&
                                          (null ===
                                            (t =
                                              e.images[e.images.length - 1]) ||
                                            void 0 === t ||
                                            t.url);
                                        return Object(j.jsx)(
                                          en,
                                          { children: "card" },
                                          n
                                        );
                                      }),
                                    }),
                            })
                          : Object(j.jsx)(j.Fragment, {
                              children:
                                "\uc5c5\ub85c\ub4dc \ub41c \uc18c\uc2dd\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                            }),
                      }),
                    ],
                  }),
                });
          }),
        Je = r.a.div(
          A ||
            (A = Object(o.a)([
              '\n  background-image: url("img/homebnews.jpeg");\n  ',
              " {\n    min-height: 400px;\n    background-position: center;\n    background-size: cover;\n  }\n  ",
              " {\n    min-height: 450px;\n    max-width: 1980px;\n    background-position: center;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Qe = r.a.div(
          W ||
            (W = Object(o.a)([
              "\n  display: flex;\n  ",
              " {\n    min-height: 400px;\n    padding: 25px;\n  }\n  ",
              " {\n    width: 900px;\n    min-height: 450px;\n    margin: 0 auto;\n    border: 1px solid white;\n    flex-direction: column;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Ve = r.a.div(
          L ||
            (L = Object(o.a)([
              "\n  display: flex;\n  ",
              " {\n    justify-content: space-between;\n    margin-bottom: 25px;\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n      color: white;\n    }\n\n    & .dots {\n      display: flex;\n    }\n  }\n  ",
              " {\n    & .main-sub-title {\n      width: 100%;\n      display: flex;\n      position: relative;\n      height: 60px;\n    }\n\n    & .line {\n      width: 1px;\n      height: 60px;\n      border-left: 10px solid #c53082;\n      margin-right: 10px;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n      color: white;\n      display: block;\n      text-align: end;\n      padding-top: 30px;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Xe = r.a.img(
          D ||
            (D = Object(o.a)([
              "\n  ",
              " {\n    margin-top: 25px;\n    width: 285px;\n    height: 260px;\n    object-fit: cover;\n  }\n  ",
              " {\n    width: 100%;\n    height: 250px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        He = r.a.div(
          T ||
            (T = Object(o.a)([
              "\n  ",
              " {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  ",
              " {\n    width: 100%;\n    margin-top: 15px;\n    height: 360px;\n    border: 1px solid tomato;\n    padding-bottom: 20px;\n    & .card-container {\n      display: flex;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Ke = r.a.div(
          q ||
            (q = Object(o.a)([
              "\n  ",
              " {\n    width: 8px;\n    height: 8px;\n    background-color: ",
              ";\n    border-radius: 10px;\n    margin: 2px;\n  }\n",
            ])),
          h(l),
          function (e) {
            return e.current ? "white" : "gray";
          }
        ),
        Ze = r.a.div(
          E ||
            (E = Object(o.a)([
              "\n  width: 100%;\n  ",
              " {\n    max-width: 375px;\n    margin: 0 auto;\n    & .carousel-text {\n      margin-top: 25px;\n      max-width: 270px;\n      color: white;\n      max-height: 40px;\n      text-align: left;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n  }\n",
            ])),
          h(l)
        ),
        en = r.a.div(
          P ||
            (P = Object(o.a)([
              "\n  ",
              " {\n    width: 200px;\n    height: 100%;\n    border: 1px solid cyan;\n  }\n  ",
              " {\n    width: 280px;\n    height: 100%;\n    border: 1px solid cyan;\n    &:not(:last-child) {\n      margin-right: 40px;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        nn = t(409),
        tn = t(138),
        an = t(122),
        cn = function (e) {
          var n = e.data,
            t = new Date().getMonth() + 1,
            i = ""
              .concat(new Date().getFullYear(), ".")
              .concat(new Date().getMonth() + 1),
            c =
              null === n || void 0 === n
                ? void 0
                : n
                    .filter(function (e) {
                      return (
                        parseInt(
                          Object(tn.a)(e.createdAt || "").split("-")[1]
                        ) === t
                      );
                    })
                    .splice(0, 6),
            o = Object(a.useCallback)(function (e) {
              var n = Object(tn.a)(e.createdAt);
              return Object(j.jsxs)(pn, {
                children: [
                  Object(j.jsx)(gn, { children: "\uacf5\uc9c0" }),
                  Object(j.jsxs)(un, {
                    children: ["[\uc548\ub0b4] ", e.title],
                  }),
                  Object(j.jsx)(xn, { children: n }),
                ],
              });
            }, []);
          return Object(j.jsxs)(bn, {
            children: [
              Object(j.jsxs)("div", {
                className: "board-title",
                children: [
                  Object(j.jsxs)("div", {
                    className: "board-top-title",
                    children: [
                      Object(j.jsxs)(jn, {
                        children: [
                          Object(j.jsx)("div", { className: "line" }),
                          Object(j.jsx)("span", {
                            className: "title",
                            children: "\uacf5\uc9c0\uc0ac\ud56d",
                          }),
                        ],
                      }),
                      Object(j.jsx)("div", {
                        children: "\ub354\ubcf4\uae30 +",
                      }),
                    ],
                  }),
                  Object(j.jsxs)("div", {
                    className: "board-bottom-title",
                    children: [
                      Object(j.jsxs)("div", {
                        className: "date",
                        children: [
                          Object(j.jsx)("span", {
                            className: "date-title",
                            children: t,
                          }),
                          Object(j.jsx)("span", {
                            className: "date-subtitle",
                            children: i,
                          }),
                        ],
                      }),
                      Object(j.jsxs)("div", {
                        className: "title",
                        children: [
                          "SW \uc911\uc2ec\ub300\ud559 ",
                          t,
                          "\uc6d4 \uacf5\uc9c0\uc0ac\ud56d",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(j.jsx)("div", {
                children: Object(j.jsx)(nn.b, {
                  style: { width: "100%" },
                  dataSource: c,
                  renderItem: function (e) {
                    return o(e);
                  },
                }),
              }),
            ],
          });
        },
        on = function () {
          return Object(j.jsx)(hn, { children: "videio" });
        },
        rn = function () {
          var e = Se(),
            n = Object(Ne.a)(an.c, {
              variables: { category: "community-notice" },
            }),
            t = n.loading,
            i = n.data;
          return t
            ? Object(j.jsx)("div", { children: "loading..." })
            : Object(j.jsx)(ln, {
                children: Object(j.jsx)(sn, {
                  children:
                    e.width > 375
                      ? Object(j.jsxs)(j.Fragment, {
                          children: [
                            Object(j.jsx)(dn, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByMonth.data)
                                  ? Object(j.jsx)(j.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(j.jsx)(cn, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByMonth.data,
                                    }),
                            }),
                            Object(j.jsx)(dn, {
                              children: Object(j.jsx)(on, {}),
                            }),
                          ],
                        })
                      : Object(j.jsxs)(j.Fragment, {
                          children: [
                            Object(j.jsx)(dn, {
                              children: Object(j.jsx)(on, {}),
                            }),
                            Object(j.jsx)(dn, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByMonth.data)
                                  ? Object(j.jsx)(j.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(j.jsx)(cn, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByMonth.data,
                                    }),
                            }),
                          ],
                        }),
                }),
              });
        },
        ln = r.a.div(
          U ||
            (U = Object(o.a)([
              "\n  ",
              " {\n    min-height: 400px;\n    width: 100%;\n  }\n  ",
              " {\n    height: 400px;\n    max-width: 1980px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        sn = r.a.div(
          R ||
            (R = Object(o.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 1280px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        dn = r.a.div(
          Y ||
            (Y = Object(o.a)([
              "\n  ",
              " {\n    min-height: 300px;\n  }\n  ",
              " {\n    height: 90%;\n    width: 600px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        hn = r.a.div(
          G ||
            (G = Object(o.a)([
              "\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 400px;\n    box-shadow: 5px 5px 14px #0000005a;\n    padding: 0 35px;\n  }\n",
            ])),
          h(l)
        ),
        bn = r.a.div(
          J ||
            (J = Object(o.a)([
              "\n  display: flex;\n  flex-direction: column;\n  height: 500px;\n  width: 100%;\n  padding: 0 35px;\n  ",
              " {\n    padding-top: 30px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 35px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 28px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 18px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n  ",
              " {\n    padding-top: 15px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 15px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 26px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 18px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        jn = r.a.div(
          Q ||
            (Q = Object(o.a)([
              "\n  ",
              " {\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n    }\n  }\n  ",
              " {\n    & .title {\n      font-size: 20px;\n      font-weight: 600;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        pn = Object(r.a)(nn.b.Item)(
          V ||
            (V = Object(o.a)([
              "\n  display: flex;\n  ",
              " {\n  }\n  ",
              " {\n    padding: 5px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        gn = r.a.div(
          X ||
            (X = Object(o.a)([
              "\n  ",
              " {\n    width: 35px;\n    height: 20px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  ",
              " {\n    width: 45px;\n    height: 25px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        un = r.a.div(
          H ||
            (H = Object(o.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    width: 55%;\n    max-width: 200px;\n    color: #0c1b58;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  ",
              " {\n    font-size: 17px;\n    font-weight: 600;\n    width: 55%;\n    color: #0c1b58;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        xn = r.a.div(
          K ||
            (K = Object(o.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    float: rigth;\n  }\n  ",
              " {\n    font-size: 16px;\n    font-weight: 600;\n    float: rigth;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        mn = function () {
          var e = Object(a.useState)(),
            n = Object(g.a)(e, 2),
            t = n[0],
            i = n[1],
            c = Object(a.useState)(),
            o = Object(g.a)(c, 2),
            r = o[0],
            l = o[1],
            s = Object(a.useState)(),
            d = Object(g.a)(s, 2),
            h = d[0],
            b = d[1],
            p = Object(a.useState)(),
            x = Object(g.a)(p, 2),
            m = x[0],
            O = x[1],
            f = Object(a.useState)(),
            v = Object(g.a)(f, 2),
            w = v[0],
            k = v[1],
            y = Object(a.useState)(),
            S = Object(g.a)(y, 2),
            N = S[0],
            $ = S[1],
            _ = Object(a.useState)(),
            I = Object(g.a)(_, 2),
            z = I[0],
            B = I[1],
            C = Object(a.useState)(),
            M = Object(g.a)(C, 2),
            F = M[0],
            A = M[1],
            W = Object(Ne.a)($e.k, {
              variables: { category: "achievement-aidnew" },
              onCompleted: function (e) {
                var n = e.getBoardByCategory,
                  t = n.ok,
                  a = n.err,
                  c = n.data;
                t && c && c.length > 0
                  ? (i(c[c.length - 1].images), k(c))
                  : console.log(a);
              },
            }).loading,
            L = Object(Ne.a)($e.k, {
              variables: { category: "achievement-valuenews" },
              onCompleted: function (e) {
                var n = e.getBoardByCategory,
                  t = n.ok,
                  i = n.err,
                  a = n.data;
                t && a && a.length > 0
                  ? (l(a[a.length - 1].images), B(a))
                  : console.log(i);
              },
            }).loading,
            D = Object(Ne.a)($e.k, {
              variables: { category: "achievement-coopnews" },
              onCompleted: function (e) {
                var n = e.getBoardByCategory,
                  t = n.ok,
                  i = n.err,
                  a = n.data;
                t && a && a.length > 0
                  ? (b(a[a.length - 1].images), $(a))
                  : console.log(i);
              },
            }).loading,
            T = Object(Ne.a)($e.k, {
              variables: { category: "achievement-startup" },
              onCompleted: function (e) {
                var n = e.getBoardByCategory,
                  t = n.ok,
                  i = n.err,
                  a = n.data;
                t && a && a.length > 0
                  ? (O(a[a.length - 1].images), A(a))
                  : console.log(i);
              },
            }).loading,
            q = Object(a.useCallback)(function (e) {
              return Object(j.jsx)("img", {
                src: e ? e.url : "",
                alt: "newsImage",
                style: { width: "100%", height: "100%", objectFit: "cover" },
              });
            }, []);
          return Object(j.jsx)(On, {
            children: Object(j.jsxs)(fn, {
              children: [
                Object(j.jsxs)(vn, {
                  children: [
                    Object(j.jsx)(wn, {
                      children: W
                        ? Object(j.jsx)(j.Fragment, { children: "loading" })
                        : Object(j.jsxs)(j.Fragment, {
                            children: [
                              Object(j.jsxs)(kn, {
                                children: [
                                  Object(j.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-more",
                                    children: Object(j.jsx)(u.b, {
                                      to: "/main/detail/achievement/achievement-aidnews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(yn, {
                                to: "/main/detail/achievement/achievement-aidnews/".concat(
                                  w && w[w.length - 1].id
                                ),
                                children: [
                                  Object(j.jsx)(Sn, {
                                    children: t
                                      ? q(t[t.length - 1])
                                      : Object(j.jsx)(j.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(j.jsxs)(Nn, {
                                    children: [
                                      Object(j.jsx)("div", {
                                        className: "section-title",
                                        children: w && w[w.length - 1].title,
                                      }),
                                      Object(j.jsx)("div", {
                                        className: "section-desc",
                                        children: w && w[w.length - 1].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    Object(j.jsx)(wn, {
                      children: D
                        ? Object(j.jsx)(j.Fragment, { children: "loading" })
                        : Object(j.jsxs)(j.Fragment, {
                            children: [
                              Object(j.jsxs)(kn, {
                                children: [
                                  Object(j.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uc0b0\ud559\ud611\ub825 \uc18c\uc2dd",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-more",
                                    children: Object(j.jsx)(u.b, {
                                      to: "/main/detail/achievement/achievement-coopnews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(yn, {
                                to: "/main/detail/achievement/achievement-coopnews/".concat(
                                  N && N[N.length - 1].id
                                ),
                                children: [
                                  Object(j.jsx)(Sn, {
                                    children: h
                                      ? q(h[h.length - 1])
                                      : Object(j.jsx)(j.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(j.jsxs)(Nn, {
                                    children: [
                                      Object(j.jsx)("div", {
                                        className: "section-title",
                                        children: N && N[N.length - 1].title,
                                      }),
                                      Object(j.jsx)("div", {
                                        className: "section-desc",
                                        children: N && N[N.length - 1].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                Object(j.jsxs)(vn, {
                  children: [
                    Object(j.jsx)(wn, {
                      children: L
                        ? Object(j.jsx)(j.Fragment, { children: "loading" })
                        : Object(j.jsxs)(j.Fragment, {
                            children: [
                              Object(j.jsxs)(kn, {
                                children: [
                                  Object(j.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "SW \uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-more",
                                    children: Object(j.jsx)(u.b, {
                                      to: "/main/detail/achievement/achievement-valuenews",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(yn, {
                                to: "/main/detail/achievement/achievement-valuenews/".concat(
                                  z && z[z.length - 1].id
                                ),
                                children: [
                                  Object(j.jsx)(Sn, {
                                    children: r
                                      ? q(r[r.length - 1])
                                      : Object(j.jsx)(j.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(j.jsxs)(Nn, {
                                    children: [
                                      Object(j.jsx)("div", {
                                        className: "section-title",
                                        children: z && z[z.length - 1].title,
                                      }),
                                      Object(j.jsx)("div", {
                                        className: "section-desc",
                                        children: z && z[z.length - 1].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                    Object(j.jsx)(wn, {
                      children: T
                        ? Object(j.jsx)(j.Fragment, { children: "loading" })
                        : Object(j.jsxs)(j.Fragment, {
                            children: [
                              Object(j.jsxs)(kn, {
                                children: [
                                  Object(j.jsx)("div", {
                                    className: "title-burger",
                                    children: "|||",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-title",
                                    children:
                                      "\ucc3d\uc5c5\uc13c\ud130 \uc18c\uc2dd",
                                  }),
                                  Object(j.jsx)("div", {
                                    className: "title-more",
                                    children: Object(j.jsx)(u.b, {
                                      to: "/main/detail/achievement/achievement-startup",
                                      className: "title-link",
                                      children: "\ub354\ubcf4\uae30+",
                                    }),
                                  }),
                                ],
                              }),
                              Object(j.jsxs)(yn, {
                                to: "/main/detail/achievement/achievement-startup/".concat(
                                  F && F[F.length - 1].id
                                ),
                                children: [
                                  Object(j.jsx)(Sn, {
                                    children: m
                                      ? q(m[m.length - 1])
                                      : Object(j.jsx)(j.Fragment, {
                                          children: "none",
                                        }),
                                  }),
                                  Object(j.jsxs)(Nn, {
                                    children: [
                                      Object(j.jsx)("div", {
                                        className: "section-title",
                                        children: F && F[F.length - 1].title,
                                      }),
                                      Object(j.jsx)("div", {
                                        className: "section-desc",
                                        children: F && F[F.length - 1].content,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        On = r.a.div(
          Z ||
            (Z = Object(o.a)([
              "\n  ",
              " {\n    margin-top: 10px;\n    padding: 25px;\n  }\n  ",
              ' {\n    background-image: url("img/homeswnews.jpeg");\n    min-height: 500px;\n    max-width: 1980px;\n    background-position: center;\n  }\n',
            ])),
          h(l),
          h(s)
        ),
        fn = r.a.div(
          ee ||
            (ee = Object(o.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 900px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        vn = r.a.div(
          ne ||
            (ne = Object(o.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  ",
              " {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 100%;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        wn = r.a.div(
          te ||
            (te = Object(o.a)([
              "\n  color: black;\n  ",
              " {\n    height: 250px;\n    border-bottom: 3px dashed #eee;\n    padding-top: 30px;\n  }\n  ",
              " {\n    height: 200px;\n    width: 400px;\n    margin-bottom: 50px;\n    margin: 50px 0;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        kn = r.a.div(
          ie ||
            (ie = Object(o.a)([
              "\n  ",
              " {\n    height: 25px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 600;\n    color: #0c1b58;\n    margin-bottom: 15px;\n    & .title-burger {\n      transform: rotate(90deg);\n      color: black;\n    }\n    & .title-title {\n      width: 75%;\n    }\n\n    & .title-more {\n      font-size: 10px;\n      color: black;\n      & .title-link {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n  ",
              " {\n    height: 25px;\n    width: 90%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 20px;\n    font-weight: 600;\n    color: #0c1b58;\n    margin-bottom: 15px;\n    & .title-burger {\n      transform: rotate(90deg);\n      color: black;\n    }\n    & .title-title {\n      width: 75%;\n    }\n\n    & .title-more {\n      font-size: 10px;\n      color: black;\n      & .title-link {\n        text-decoration: none;\n        color: black;\n      }\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        yn = Object(r.a)(u.b)(
          ae ||
            (ae = Object(o.a)([
              "\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 75%;\n  }\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 95%;\n    padding: 5px;\n    cursor: pointer;\n    &:hover {\n      transition: 0.2s linear;\n      background-color: #eee;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Sn = r.a.div(
          ce ||
            (ce = Object(o.a)([
              "\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    margin-right: 10px;\n  }\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    margin-right: 10px;\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        Nn = r.a.div(
          oe ||
            (oe = Object(o.a)([
              "\n  color: black;\n\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    & .section-title {\n      height: 30%;\n      width: 80%;\n      word-break: break-all;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      font-weight: 600;\n    }\n\n    & .section-desc {\n      height: 60%;\n      width: 80%;\n      word-break: break-all;\n      text-overflow: ellipsis;\n      line-height: 1.2;\n      font-size: 9px;\n    }\n  }\n  ",
              " {\n    width: 50%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    & .section-title {\n      height: 40%;\n      width: 80%;\n      word-break: break-all;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-size: 14px;\n      font-weight: 600;\n    }\n\n    & .section-desc {\n      height: 60%;\n      width: 80%;\n      word-break: break-all;\n      text-overflow: ellipsis;\n      line-height: 1.2;\n      font-size: 9px;\n    }\n  }\n",
            ])),
          h(l),
          h(s)
        ),
        $n = function () {
          return Object(j.jsxs)(De, {
            children: [
              Object(j.jsx)(Ee, {}),
              Object(j.jsx)(rn, {}),
              Object(j.jsx)(Ge, {}),
              Object(j.jsx)(mn, {}),
            ],
          });
        },
        _n = t(119),
        In = t.n(_n),
        zn = t(120),
        Bn = t(400),
        Cn = t(403),
        Mn = t(177),
        Fn = t(132),
        An = t(266),
        Wn = t(52),
        Ln = t(165),
        Dn = function () {
          var e = Object(Fn.a)(""),
            n = Object(g.a)(e, 3),
            t = n[0],
            i = n[1],
            c = n[2],
            o = Object(Fn.a)(""),
            r = Object(g.a)(o, 3),
            l = r[0],
            s = r[1],
            d = r[2],
            h = Object(An.a)(an.e, {
              onCompleted: function (e) {
                var n = e.UserLogin,
                  t = n.success,
                  i = n.error,
                  a = n.data;
                t && a
                  ? (Object(ve.d)(a.stno),
                    Wn.b.success("\ub85c\uadf8\uc778 \uc131\uacf5"),
                    setTimeout(function () {
                      Ln.a.push("/main");
                    }, 1e3))
                  : (console.log(i),
                    Wn.b.error(
                      "\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778 \ud574 \uc8fc\uc138\uc694"
                    ));
              },
            }),
            b = Object(g.a)(h, 2),
            p = b[0],
            u = b[1],
            x = (u.data, u.loading),
            m = Object(a.useCallback)(
              Object(zn.a)(
                In.a.mark(function e() {
                  return In.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), p({ variables: { id: t, pwd: l } })
                          );
                        case 2:
                          c(""), d("");
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [t, l, c, d, p]
            );
          return Object(j.jsx)(Tn, {
            children: Object(j.jsxs)(Bn.a, {
              name: "basic",
              labelCol: { span: 8 },
              wrapperCol: { span: 16 },
              initialValues: { remember: !0 },
              onFinish: m,
              onFinishFailed: function (e) {
                console.log("Failed:", e);
              },
              autoComplete: "off",
              children: [
                Object(j.jsx)(Bn.a.Item, {
                  label: "Username",
                  name: "username",
                  rules: [
                    { required: !0, message: "Please input your username!" },
                  ],
                  children: Object(j.jsx)(Cn.a, { value: t, onChange: i }),
                }),
                Object(j.jsx)(Bn.a.Item, {
                  label: "Password",
                  name: "password",
                  rules: [
                    { required: !0, message: "Please input your password!" },
                  ],
                  children: Object(j.jsx)(Cn.a.Password, {
                    value: l,
                    onChange: s,
                  }),
                }),
                Object(j.jsx)(Bn.a.Item, {
                  wrapperCol: { offset: 8, span: 16 },
                  children: Object(j.jsx)(Mn.a, {
                    type: "primary",
                    htmlType: "submit",
                    disabled: x,
                    children: "Submit",
                  }),
                }),
              ],
            }),
          });
        },
        Tn = r.a.div(
          re ||
            (re = Object(o.a)([
              "\n  ",
              " {\n    margin-top: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  ",
              " {\n    width: ",
              "px;\n    margin-top: 30px;\n  }\n",
            ])),
          h(l),
          h(s),
          d.pc
        ),
        qn = r.a.div(
          le ||
            (le = Object(o.a)([
              "\n  min-height: 100vh;\n  ",
              " {\n  }\n  ",
              " {\n  }\n",
            ])),
          h(l),
          h(s)
        );
      n.default = function () {
        return Object(j.jsxs)("div", {
          className: "wrapper",
          children: [
            Object(j.jsx)(we, {}),
            Object(j.jsx)(qn, {
              children: Object(j.jsxs)(c.d, {
                children: [
                  Object(j.jsx)(c.b, {
                    path: "/main/detail/:param/:subparam/:id",
                  }),
                  Object(j.jsx)(c.b, {
                    path: "/main/detail/:param/:subparam",
                    component: _e,
                  }),
                  Object(j.jsx)(c.b, { path: "/main/login", component: Dn }),
                  Object(j.jsx)(c.b, { path: "/main", component: $n }),
                ],
              }),
            }),
            Object(j.jsx)(p, {}),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=18.a6b31c96.chunk.js.map
