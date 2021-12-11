(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [7],
  {
    117: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return x;
      }),
        n.d(t, "k", function () {
          return O;
        }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "i", function () {
          return k;
        }),
        n.d(t, "f", function () {
          return y;
        }),
        n.d(t, "g", function () {
          return v;
        }),
        n.d(t, "b", function () {
          return w;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "d", function () {
          return $;
        }),
        n.d(t, "h", function () {
          return _;
        }),
        n.d(t, "j", function () {
          return I;
        });
      var i,
        a,
        o,
        c,
        r,
        l,
        s,
        d,
        b,
        j,
        u,
        p,
        h,
        g = n(106),
        m = n(398),
        x = Object(m.a)(
          i ||
            (i = Object(g.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        O = Object(m.a)(
          a ||
            (a = Object(g.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(m.a)(
          o ||
            (o = Object(g.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(m.a)(
          c ||
            (c = Object(g.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y =
          (Object(m.a)(
            r ||
              (r = Object(g.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(m.a)(
            l ||
              (l = Object(g.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(m.a)(
            s ||
              (s = Object(g.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        v = Object(m.a)(
          d ||
            (d = Object(g.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(m.a)(
          b ||
            (b = Object(g.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(m.a)(
          j ||
            (j = Object(g.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(m.a)(
          u ||
            (u = Object(g.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        _ = Object(m.a)(
          p ||
            (p = Object(g.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(m.a)(
          h ||
            (h = Object(g.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    126: function (e, t, n) {
      "use strict";
      var i = n(112),
        a = n(2);
      t.a = function (e) {
        var t = Object(a.useState)(e),
          n = Object(i.a)(t, 2),
          o = n[0],
          c = n[1];
        return [
          o,
          Object(a.useCallback)(function (e) {
            c(e.target.value);
          }, []),
          c,
        ];
      };
    },
    129: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return j;
        });
      var i,
        a,
        o,
        c,
        r = n(106),
        l = n(398),
        s = Object(l.a)(
          i ||
            (i = Object(r.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        d = Object(l.a)(
          a ||
            (a = Object(r.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(l.a)(
          o ||
            (o = Object(r.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(l.a)(
          c ||
            (c = Object(r.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        );
    },
    137: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e) {
        var t = new Date(1e3 * Math.floor(parseInt(e, 10) / 1e3));
        return (
          t.getFullYear() +
          "-" +
          (t.getMonth() + 1 >= 10
            ? t.getMonth() + 1
            : "0".concat(t.getMonth() + 1)) +
          "-" +
          (t.getDate() >= 10 ? t.getDate() : "0".concat(t.getDate()))
        );
      };
    },
    146: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var i,
        a = n(106),
        o = n(398),
        c = n(52),
        r = n(54),
        l = n(147),
        s = Object(o.a)(
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
        b = function () {
          r.b.cache.writeQuery({ query: s, data: { adminLogin: !1 } }),
            localStorage.removeItem("admin"),
            Object(r.a)(!1);
        },
        j = function (e) {
          localStorage.setItem("stno", "".concat(e));
        },
        u = function () {
          localStorage.removeItem("stno"),
            c.b.success(
              "\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
            ),
            l.a.push("/main");
        };
    },
    147: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(12),
        a = Object(i.a)({ forceRefresh: !0 });
    },
    395: function (e, t, n) {
      "use strict";
      n.r(t);
      var i,
        a = n(2),
        o = n(5),
        c = n(106),
        r = n(110),
        l = "phoneMedium",
        s = "lpc",
        d = {
          lpc: 1279,
          pc: 1279,
          tablet: 767,
          phoneMedium: 375,
          phoneSmall: 349,
        },
        b = function (e) {
          switch (e) {
            case "lpc":
              return "@media only screen and (min-width: 376px)";
            default:
              return "@media only screen and (max-width: ".concat(d[e], "px)");
          }
        },
        j = r.a.div(
          i ||
            (i = Object(c.a)([
              "\n  width: 100%;\n  height: 270px;\n  ",
              " {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #f7f7f7;\n    font-size: 8px;\n    span {\n      display: block;\n      max-width: ",
              "px;\n      color: #747474;\n      text-align: center;\n      line-height: 10px;\n    }\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f7f7f7;\n  span {\n    display: block;\n    max-width: ",
              "px;\n    color: #747474;\n    text-align: center;\n    line-height: 20px;\n  }\n",
            ])),
          b(l),
          d.phoneMedium,
          d.tablet
        ),
        u = n(13),
        p = function () {
          return Object(u.jsx)(j, {
            children: Object(u.jsxs)("span", {
              children: [
                "TEL . 041-530-8311 FAX. 041-530-8315 ",
                Object(u.jsx)("br", {}),
                "\uc6b0) 31460 \ucda9\ub0a8 \uc544\uc0b0\uc2dc \ud0d5\uc815\uba74 \uc120\ubb38\ub85c 221\ubc88\uae38 70 \uc120\ubb38\ub300\ud559\uad50 SW\uc735\ud569\uad00(\uc6d0\ud654\uad00) 506\ud638 70,",
                Object(u.jsx)("br", {}),
                "Sunmoon-ro 221 beon-gil, Tangjeong-myeon, Asan-si, Chungcheongnam-do, korea , 31460",
              ],
            }),
          });
        },
        h = n(112),
        g = n(53),
        m = [
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
                  "\uac1c\ubc29\ud615 \uc628\ub77c\uc778 \ud50c\ub7ab\ud3fc(K-MOOC)",
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
                key: "major-certification",
                title: "major-certification",
                ko_title:
                  "\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc804\ubb38\uc5ed\ub7c9 \uc778\uc99d\uc81c",
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
                key: "major-contest",
                title: "major-contest",
                ko_title: "SW\uacbd\uc9c4\ub300\ud68c",
              },
              {
                key: "major-training",
                title: "major-training",
                ko_title: "\ud604\uc7a5\uc2e4\uc2b5 \ud574\uc678\uad50\uc721",
              },
              {
                key: "major-certification",
                title: "major-certification",
                ko_title:
                  "SW\uc804\ubb38 \uc5ed\ub7c9\uc778\uc99d \uc81c\ub3c4",
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
                  "\uad6d\ub0b4 \xb7 \uc678 \uae30\uad00\uacfc\uc758 \ub124\ud2b8\uc6cc\ud06c",
              },
              {
                key: "cooperation-project",
                title: "cooperation-project",
                ko_title:
                  "\uad6d\ub0b4 \xb7 \uc678 \uae30\uad00\uacfc\uc758 \ud504\ub85c\uc81d\ud2b8",
              },
              {
                key: "cooperation-internship",
                title: "cooperation-internship",
                ko_title:
                  "\uad6d\ub0b4 \xb7 \uc678 \uae30\uad00\uacfc\uc758 \uc5f0\uacc4 \uc778\ud134\uc27d",
              },
            ],
          },
          {
            key: 6,
            title: "achievement",
            ko_title: "\uc0ac\uc5c5\uc131\uacfc",
            subMenu: [
              {
                key: "acheivement-news",
                title: "acheivement-news",
                ko_title: "\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd",
              },
              {
                key: "acheivement-aidnew",
                title: "acheivement-aidnew",
                ko_title: "SW\uad50\uc721\uc9c0\uc6d0 \uc18c\uc2dd",
              },
              {
                key: "acheivement-valuenews",
                title: "acheivement-valuenews",
                ko_title: "SW\uac00\uce58\ud655\uc0b0 \uc18c\uc2dd",
              },
              {
                key: "acheivement-coopnews",
                title: "acheivement-coopnews",
                ko_title: "SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd",
              },
              {
                key: "acheivement-startup",
                title: "acheivement-startup",
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
        x = n(249);
      var O,
        f,
        k,
        y,
        v,
        w,
        S,
        $,
        _,
        I,
        N,
        C,
        W,
        z,
        B,
        L,
        M,
        A,
        F,
        T,
        q,
        D,
        E,
        U,
        P,
        H,
        R,
        Y,
        G,
        J,
        K,
        Q,
        V,
        X,
        Z = Object(x.a)("div", { target: "e1p7p4c88" })(
          "width:100%;",
          b(l),
          "{height:48px;}",
          b(s),
          "{height:150px;min-width:1280px;}"
        ),
        ee = Object(x.a)("div", { target: "e1p7p4c87" })(
          b(l),
          "{display:none;}height:30px;background-color:#0c1b58;color:white;& .top-content{height:100%;width:",
          d.pc,
          "px;display:flex;align-items:center;justify-content:space-between;margin:0 auto;font-size:12px;letter-spacing:0.13px;}& .options{display:flex;width:100px;flex-direction:row;justify-content:space-between;}"
        ),
        te = Object(x.a)("div", { target: "e1p7p4c86" })(""),
        ne = Object(x.a)("div", { target: "e1p7p4c85" })({
          name: "19dhc17",
          styles:
            "transform:scaleY(0);visibility:hidden;opacity:0.9;height:0;border-top:1px solid #0c1b58;background-color:#1d2b64;border-right:1px solid #303952;&:hover{opacity:0.9;background-color:#0c1b58;transition:0.2s linear;}",
        }),
        ie = Object(x.a)("div", { target: "e1p7p4c84" })(
          b(l),
          "{display:none;}",
          b(s),
          "{& .main-content-desktop{width:",
          d.pc,
          "px;align-items:center;display:flex;justify-content:space-between;margin:0 auto;height:80px;}& .main-menu{height:55px;width:100%;color:white;display:flex;justify-content:center;background-color:#0c1b58;&:hover ",
          ne,
          "{visibility:visible;transform:scaleY(1);height:320px;opacity:0.9;transition:height 0.1s ease-in;position:absolute;z-index:1000;}&:hover li{height:25px;transition:height 0.1s ease-in;}.header-title{width:142px;height:50%;margin:10px 0;display:flex;align-items:center;justify-content:center;& span{display:flex;flex-direction:inherit;justify-content:center;align-items:center;height:70%;font-weight:600;cursor:pointer;}&:hover{color:#f03fa8;transition:0.2s linear;}}ul{padding:0;width:142px;list-style:none;cursor:pointer;position:relative;}li{width:142px;font-size:10px;line-height:25px;text-align:center;color:white;height:0;cursor:pointer;&:hover{color:#f03fa8;transition:0.2s linear;}}}}"
        ),
        ae = Object(x.a)("div", { target: "e1p7p4c83" })(
          "width:100%;height:3px;margin-bottom:3px;background-color:",
          function (e) {
            return e.hoverProps ? "#f03fa8" : "none";
          },
          ";transition:0.2s linear;"
        ),
        oe = Object(x.a)("div", { target: "e1p7p4c82" })(
          b(s),
          "{display:none;}& .wrapper{width:100%;display:flex;justify-content:space-between;align-items:center;height:50px;background-color:#0c1b58;color:white;padding:0 15px;& .menu{font-size:24px;transform:rotate(90deg);}}"
        ),
        ce = Object(x.a)("div", { target: "e1p7p4c81" })(
          "width:100%;margin:5px 0;height:75px;font-size:17px;& button{color:white;width:100%;height:100%;background-color:",
          function (e) {
            return e.menuOpen ? "#384270" : "#0c1b58";
          },
          ";border:none;}"
        ),
        re = Object(x.a)("div", { target: "e1p7p4c80" })({
          name: "1g48ylb",
          styles:
            "width:100%;margin:5px 0;font-size:14px;height:50px;& button{color:white;width:100%;height:100%;background-color:#384270;border:none;text-align:left;}",
        }),
        le = n(265),
        se = n(201),
        de = n(400),
        be = n(146),
        je = function () {
          var e,
            t = Object(a.useState)(null),
            n = Object(h.a)(t, 2),
            i = n[0],
            o = n[1],
            c = Object(a.useState)(!1),
            r = Object(h.a)(c, 2),
            l = r[0],
            s = r[1],
            d = Object(a.useState)(!1),
            b = Object(h.a)(d, 2),
            j = b[0],
            p = b[1],
            x = Object(a.useState)(!1),
            O = Object(h.a)(x, 2),
            f = O[0],
            k = O[1],
            y = Object(a.useState)(-1),
            v = Object(h.a)(y, 2),
            w = v[0],
            S = v[1];
          Object(a.useEffect)(function () {
            localStorage.getItem("stno") ? k(!0) : k(!1);
          }, []);
          var $ = Object(a.useCallback)(
              function (e) {
                S(e), p(!j);
              },
              [j]
            ),
            _ = Object(a.useCallback)(function () {
              s(!1);
            }, []),
            I = Object(a.useCallback)(function () {
              p(!1), S(-1);
            }, []);
          return Object(u.jsxs)(Z, {
            children: [
              Object(u.jsx)(ee, {
                children: Object(u.jsxs)("div", {
                  className: "top-content",
                  children: [
                    Object(u.jsx)("span", { children: "SUNMOON UNIVERSITY" }),
                    Object(u.jsxs)("div", {
                      className: "options",
                      children: [
                        Object(u.jsx)("div", {
                          children: Object(u.jsx)(g.b, {
                            to: "/main",
                            style: { textDecoration: "none", color: "white" },
                            children: "HOME",
                          }),
                        }),
                        Object(u.jsx)("div", { children: "|" }),
                        Object(u.jsx)("div", {
                          children: f
                            ? Object(u.jsx)("div", {
                                onClick: function () {
                                  return Object(be.c)();
                                },
                                children: "LOG OUT",
                              })
                            : Object(u.jsx)(g.b, {
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
              Object(u.jsxs)(te, {
                children: [
                  Object(u.jsxs)(ie, {
                    children: [
                      Object(u.jsxs)("div", {
                        className: "main-content-desktop",
                        children: [
                          Object(u.jsx)("div", { children: "logo" }),
                          Object(u.jsx)("div", { children: "options" }),
                        ],
                      }),
                      Object(u.jsx)("div", {
                        className: "main-menu",
                        children: m.map(function (e, t) {
                          return Object(u.jsxs)(
                            "ul",
                            {
                              style: { margin: 0 },
                              onMouseOver: function () {
                                return o(e.key);
                              },
                              onMouseLeave: function () {
                                return o(null);
                              },
                              children: [
                                Object(u.jsx)(ae, { hoverProps: i === t }),
                                Object(u.jsx)("div", {
                                  className: "header-title",
                                  children: Object(u.jsx)("span", {
                                    children: e.ko_title,
                                  }),
                                }),
                                Object(u.jsx)(ne, {
                                  children: e.subMenu.map(function (t, n) {
                                    return Object(u.jsx)(
                                      "li",
                                      {
                                        children: Object(u.jsx)(g.b, {
                                          to: "/main/detail/"
                                            .concat(e.title, "/")
                                            .concat(t.key),
                                          children: t.ko_title,
                                        }),
                                      },
                                      n
                                    );
                                  }),
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  Object(u.jsx)(oe, {
                    children: Object(u.jsxs)("div", {
                      className: "wrapper",
                      children: [
                        Object(u.jsx)("div", {
                          className: "menu",
                          onClick: function () {
                            return s(!l);
                          },
                          children: "|||",
                        }),
                        Object(u.jsx)("div", {
                          className: "logo",
                          children: Object(u.jsx)(g.b, {
                            to: "/main",
                            children: Object(u.jsx)("img", {
                              src: "/img/mobileLogo.png",
                              alt: "mobile logo",
                              typeof: "png",
                            }),
                          }),
                        }),
                        Object(u.jsx)("div", {
                          className: "login",
                          children: f
                            ? Object(u.jsx)("div", {
                                onClick: function () {
                                  return Object(be.c)();
                                },
                                children: Object(u.jsx)(se.c, { size: 25 }),
                              })
                            : Object(u.jsx)(g.b, {
                                to: "/main/login",
                                style: {
                                  textDecoration: "none",
                                  color: "white",
                                },
                                children: Object(u.jsx)(le.a, { size: 25 }),
                              }),
                        }),
                        Object(u.jsxs)(de.a, {
                          width: 180,
                          closable: !1,
                          onClose: _,
                          visible: l,
                          placement: "left",
                          bodyStyle: ue,
                          children: [
                            m.map(function (e, t) {
                              return Object(u.jsx)(
                                ce,
                                {
                                  menuOpen: w === t,
                                  children: Object(u.jsx)("button", {
                                    onClick: function () {
                                      return $(t);
                                    },
                                    children: e.ko_title,
                                  }),
                                },
                                t
                              );
                            }),
                            Object(u.jsx)(de.a, {
                              width: 180,
                              closable: !1,
                              onClose: I,
                              visible: j,
                              placement: "left",
                              bodyStyle: pe,
                              children:
                                null === (e = m[w]) || void 0 === e
                                  ? void 0
                                  : e.subMenu.map(function (e, t) {
                                      return Object(u.jsx)(re, {
                                        children: Object(u.jsx)("button", {
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
        ue = {
          backgroundColor: " #0c1b58",
          paddingTop: "50px",
          paddingRight: 0,
          paddingLeft: 0,
        },
        pe = {
          backgroundColor: "#384270",
          paddingTop: "60px",
          paddingRight: 0,
          paddingLeft: "20px",
        },
        he = function () {
          var e = Object(o.i)(),
            t = e.param;
          e.subparam;
          return Object(u.jsx)(ge, {
            children: Object(u.jsxs)(me, {
              children: [
                Object(u.jsx)(xe, {}),
                Object(u.jsx)(fe, {
                  children: m.map(function (e) {
                    if (e.title === t)
                      return Object(u.jsxs)(
                        ke,
                        {
                          children: [
                            Object(u.jsxs)(ye, { children: [" ", e.ko_title] }),
                            Object(u.jsx)(ve, { children: "description" }),
                          ],
                        },
                        e.key
                      );
                  }),
                }),
                Object(u.jsx)(Oe, { children: "bottom" }),
              ],
            }),
          });
        },
        ge = r.a.div(
          O || (O = Object(c.a)(["\n  ", " {\n    width: 100vw;\n  }\n"])),
          b(s)
        ),
        me = r.a.div(
          f ||
            (f = Object(c.a)([
              "\n  ",
              " {\n    width: 1920px;\n    min-height: 100vh;\n    margin: 0 auto;\n    left: 0;\n    right: 0;\n    margin-top: 15px;\n  }\n",
            ])),
          b(s)
        ),
        xe = r.a.div(
          k ||
            (k = Object(c.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              ' {\n    max-width: 1920px;\n    height: 360px;\n    z-index: 1;\n    position: absolute;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    background-image: url("/img/homebnews.jpeg");\n  }\n',
            ])),
          b(l),
          b(s)
        ),
        Oe = r.a.div(
          y ||
            (y = Object(c.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    position: absolute;\n    z-index: 1;\n    width: 3000px;\n    max-width: 1920px;\n    margin-left: auto;\n    margin-right: auto;\n    top: 526px;\n    left: 0;\n    right: 0;\n    height: 83%;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        fe = r.a.div(
          v ||
            (v = Object(c.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    width: 1280px;\n    height: 100%;\n    display: flex;\n    position: absolute;\n    z-index: 2;\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        ke = r.a.div(
          w ||
            (w = Object(c.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    padding-top: 95px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        ye = r.a.div(
          S ||
            (S = Object(c.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    letter-spacing: 0.43px;\n    font-size: 43px;\n    color: #ffffff;\n    text-shadow: 3px 3px 3px #000000e3;\n    opacity: 1;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        ve = r.a.div(
          $ ||
            ($ = Object(c.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    letter-spacing: 0.19px;\n    font-size: 19px;\n    color: #ffffff;\n    text-shadow: 3px 3px 3px #000000e3;\n    opacity: 1;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        we = r.a.div(
          _ ||
            (_ = Object(c.a)([
              "\n  ",
              " {\n    width: 100%;\n    min-height: 100vh;\n  }\n  ",
              " {\n    max-width: 1920px;\n    margin-top: 15px;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Se = n(193),
        $e = (n(268), n(269)),
        _e = function () {
          var e = "object" === typeof window,
            t = Object(a.useCallback)(
              function () {
                return {
                  width: e ? window.innerWidth : 0,
                  height: e ? window.innerWidth : 0,
                };
              },
              [e]
            ),
            n = Object(a.useState)(t),
            i = Object(h.a)(n, 2),
            o = i[0],
            c = i[1];
          return (
            Object(a.useEffect)(
              function () {
                if (e) {
                  var n = function () {
                    c(t());
                  };
                  return (
                    window.addEventListener("resize", n),
                    function () {
                      return window.removeEventListener("resize", n);
                    }
                  );
                }
              },
              [t, e]
            ),
            o
          );
        },
        Ie = function () {
          var e = _e();
          return Object(u.jsx)(Ne, {
            children: Object(u.jsxs)($e.Carousel, {
              autoPlay: !0,
              infiniteLoop: !0,
              showArrows: !1,
              showThumbs: !1,
              showStatus: !1,
              renderIndicator:
                e.width > 375
                  ? function (e, t, n, i) {
                      var a = {
                          marginLeft: 20,
                          color: "white",
                          cursor: "pointer",
                        },
                        o = t
                          ? Object(Se.a)(
                              Object(Se.a)({}, a),
                              {},
                              { color: "red" }
                            )
                          : Object(Se.a)({}, a);
                      return Object(u.jsxs)(
                        "span",
                        {
                          style: o,
                          onClick: e,
                          onKeyDown: e,
                          role: "button",
                          tabIndex: 0,
                          "aria-label": "".concat(i, " ").concat(n + 1),
                          children: [
                            0 === n &&
                              Object(u.jsx)(se.a, { size: 45, color: "white" }),
                            1 === n &&
                              Object(u.jsx)(se.b, { size: 45, color: "white" }),
                          ],
                        },
                        n
                      );
                    }
                  : void 0,
              children: [
                Object(u.jsx)(Ce, {
                  children: Object(u.jsx)(We, {
                    src:
                      e.width > 375
                        ? "img/banner1.jpeg"
                        : "img/mobileBanner.jpeg",
                    alt: "banner",
                  }),
                }),
                Object(u.jsxs)(Ce, {
                  children: [
                    Object(u.jsxs)(Le, {
                      children: [
                        Object(u.jsx)(Be, {
                          className: "first-content",
                          children: "Sunmoon Univ.",
                        }),
                        Object(u.jsx)(Be, {
                          className: "second-content",
                          children:
                            "SW \uc911\uc2ec\ub300\ud559\uc0ac\uc5c5\ub2e8",
                        }),
                        Object(u.jsx)(Be, {
                          className: "third-content",
                          children:
                            "\uae00\ub85c\ubc8c SW\uc5ed\ub7c9 \uac15\ud654 \uae00\ub85c\ubc8c IT \ud55c\ub958\ubb38\ud654 \uc870\uc131",
                        }),
                      ],
                    }),
                    Object(u.jsx)(ze, {}),
                    Object(u.jsx)(We, {
                      src:
                        e.width > 375
                          ? "img/banner2.jpeg"
                          : "img/mobileBanner2.jpeg",
                      alt: "banner2",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Ne = r.a.div(
          I ||
            (I = Object(c.a)([
              "\n  ",
              " {\n    height: 400px;\n  }\n  ",
              " {\n    height: 650px;\n    width: 100%;\n    max-width: 1920px;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Ce = r.a.div(
          N ||
            (N = Object(c.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 100%;\n  }\n",
            ])),
          b(s)
        ),
        We = r.a.img(
          C ||
            (C = Object(c.a)(["\n  height: 100%;\n  object-fit: contain;\n"]))
        ),
        ze = r.a.div(
          W ||
            (W = Object(c.a)([
              "\n  ",
              " {\n    width: 100%;\n    max-width: 1920px;\n    height: 250px;\n    background-color: darkgray;\n    opacity: 0.5;\n    position: absolute;\n    top: 30%;\n    display: flex;\n    z-index: 2;\n  }\n",
            ])),
          b(s)
        ),
        Be = r.a.span(
          z ||
            (z = Object(c.a)([
              "\n  display: none;\n  ",
              " {\n    display: block;\n    color: white;\n    width: 450px;\n  }\n",
            ])),
          b(s)
        ),
        Le = r.a.div(
          B ||
            (B = Object(c.a)([
              "\n  ",
              " {\n    max-width: 1280px;\n    /* margin:0 auto; */\n    text-align: start;\n    position: absolute;\n    top: 30%;\n    z-index: 5;\n    right: 20%;\n\n    & .first-content {\n    }\n    & .second-content {\n      font-size: 50px;\n      letter-spacing: -1.43px;\n    }\n    & .third-content {\n      letter-spacing: 0.22px;\n    }\n  }\n",
            ])),
          b(s)
        ),
        Me = n(384),
        Ae = n(117),
        Fe = function () {
          var e = Object(a.useState)(""),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1],
            o = Object(Me.a)(Ae.k, {
              variables: { category: "acheivement-news" },
              onCompleted: function (e) {
                var t = e.getBoardByCategory,
                  n = t.ok,
                  a = t.data,
                  o = t.err;
                n && a
                  ? a[0].images && a[0].images[0] && i(a[0].images[0].url)
                  : console.log(o);
              },
            }),
            c = o.data,
            r = o.loading;
          return (
            console.log(c),
            r
              ? Object(u.jsx)("div", { children: "loading..." })
              : Object(u.jsx)(Te, {
                  children: Object(u.jsxs)(qe, {
                    children: [
                      Object(u.jsxs)(De, {
                        children: [
                          Object(u.jsx)("div", { className: "line" }),
                          Object(u.jsx)("span", {
                            className: "title",
                            children: "\uc0ac\uc5c5\ub2e8\uc18c\uc2dd",
                          }),
                        ],
                      }),
                      Object(u.jsx)(Ee, { src: n, alt: "image" }),
                    ],
                  }),
                })
          );
        },
        Te = r.a.div(
          L ||
            (L = Object(c.a)([
              "\n  ",
              ' {\n    min-height: 400px;\n    max-width: 1980px;\n    background-image: url("img/homebnews.jpeg");\n  }\n  ',
              ' {\n    min-height: 400px;\n    background-image: url("img/homebnews.jpeg");\n    background-size: contain;\n  }\n',
            ])),
          b(s),
          b(l)
        ),
        qe = r.a.div(
          M ||
            (M = Object(c.a)([
              "\n  ",
              " {\n    width: 900px;\n    min-height: 400px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n  ",
              " {\n    min-height: 400px;\n    padding: 35px;\n  }\n",
            ])),
          b(s),
          b(l)
        ),
        De = r.a.div(
          A ||
            (A = Object(c.a)([
              "\n  ",
              " {\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n      color: white;\n    }\n  }\n\n  ",
              " {\n    display: none;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Ee = r.a.img(
          F ||
            (F = Object(c.a)([
              "\n  ",
              " {\n    margin-top: 25px;\n    width: 285px;\n    height: 260px;\n    object-fit: cover;\n  }\n",
            ])),
          b(l)
        ),
        Ue = n(403),
        Pe = n(137),
        He = function (e) {
          var t = e.data,
            n = new Date().getMonth() + 1,
            i =
              null === t || void 0 === t
                ? void 0
                : t
                    .filter(function (e) {
                      return (
                        parseInt(
                          Object(Pe.a)(e.createdAt || "").split("-")[1]
                        ) === n
                      );
                    })
                    .splice(0, 6),
            o = Object(a.useCallback)(function (e) {
              var t = Object(Pe.a)(e.createdAt);
              return Object(u.jsxs)(Ue.b.Item, {
                style: { display: "flex" },
                children: [
                  Object(u.jsx)(Ze, { children: "\uacf5\uc9c0" }),
                  Object(u.jsxs)(et, {
                    children: ["[\uc548\ub0b4] ", e.title],
                  }),
                  Object(u.jsx)(tt, { children: t }),
                ],
              });
            }, []);
          return Object(u.jsxs)(Ve, {
            children: [
              Object(u.jsxs)("div", {
                className: "board-title",
                children: [
                  Object(u.jsxs)("div", {
                    className: "board-top-title",
                    children: [
                      Object(u.jsxs)(Xe, {
                        children: [
                          Object(u.jsx)("div", { className: "line" }),
                          Object(u.jsx)("span", {
                            className: "title",
                            children: "\uacf5\uc9c0\uc0ac\ud56d",
                          }),
                        ],
                      }),
                      Object(u.jsx)("div", {
                        children: "\ub354\ubcf4\uae30 +",
                      }),
                    ],
                  }),
                  Object(u.jsxs)("div", {
                    className: "board-bottom-title",
                    children: [
                      Object(u.jsxs)("div", {
                        className: "date",
                        children: [
                          Object(u.jsx)("span", {
                            className: "date-title",
                            children: n,
                          }),
                          Object(u.jsx)("span", {
                            className: "date-subtitle",
                            children: "small",
                          }),
                        ],
                      }),
                      Object(u.jsxs)("div", {
                        className: "title",
                        children: [
                          "SW \uc911\uc2ec\ub300\ud559 ",
                          n,
                          "\uc6d4 \uacf5\uc9c0\uc0ac\ud56d",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(u.jsx)("div", {
                children: Object(u.jsx)(Ue.b, {
                  style: { width: "100%" },
                  dataSource: i,
                  renderItem: function (e) {
                    return o(e);
                  },
                }),
              }),
            ],
          });
        },
        Re = function () {
          return Object(u.jsx)(Qe, { children: "videio" });
        },
        Ye = function () {
          var e = _e(),
            t = Object(Me.a)(Ae.k, {
              variables: { category: "community-notice" },
            }),
            n = t.loading,
            i = t.data;
          return n
            ? Object(u.jsx)("div", { children: "loading..." })
            : Object(u.jsx)(Ge, {
                children: Object(u.jsx)(Je, {
                  children:
                    e.width > 375
                      ? Object(u.jsxs)(u.Fragment, {
                          children: [
                            Object(u.jsx)(Ke, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByCategory.data)
                                  ? Object(u.jsx)(u.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(u.jsx)(He, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByCategory.data,
                                    }),
                            }),
                            Object(u.jsx)(Ke, {
                              children: Object(u.jsx)(Re, {}),
                            }),
                          ],
                        })
                      : Object(u.jsxs)(u.Fragment, {
                          children: [
                            Object(u.jsx)(Ke, {
                              children: Object(u.jsx)(Re, {}),
                            }),
                            Object(u.jsx)(Ke, {
                              children:
                                null ===
                                (null === i || void 0 === i
                                  ? void 0
                                  : i.getBoardByCategory.data)
                                  ? Object(u.jsx)(u.Fragment, {
                                      children: "no data",
                                    })
                                  : Object(u.jsx)(He, {
                                      data:
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.getBoardByCategory.data,
                                    }),
                            }),
                          ],
                        }),
                }),
              });
        },
        Ge = r.a.div(
          T ||
            (T = Object(c.a)([
              "\n  ",
              " {\n    min-height: 400px;\n  }\n  ",
              " {\n    height: 400px;\n    max-width: 1980px;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Je = r.a.div(
          q ||
            (q = Object(c.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n  ",
              " {\n    width: 900px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Ke = r.a.div(
          D ||
            (D = Object(c.a)([
              "\n  ",
              " {\n    min-height: 300px;\n  }\n  ",
              " {\n    height: 90%;\n    width: 445px;\n    border: 1px solid black;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Qe = r.a.div(
          E ||
            (E = Object(c.a)([
              "\n  ",
              " {\n    display: flex;\n    width: 100%;\n    height: 400px;\n    box-shadow: 5px 5px 14px #0000005a;\n    padding: 0 35px;\n  }\n",
            ])),
          b(l)
        ),
        Ve = r.a.div(
          U ||
            (U = Object(c.a)([
              "\n  ",
              " {\n    display: flex;\n    flex-direction: column;\n    height: 500px;\n    width: 100%;\n    padding: 0 35px;\n    padding-top: 30px;\n    & .board-title {\n      display: flex;\n      flex-direction: column;\n      margin-bottom: 15px;\n      & .board-top-title {\n        display: flex;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        font-size: 11px;\n        font-weight: 600;\n        margin-bottom: 35px;\n      }\n      & .board-bottom-title {\n        display: flex;\n        align-items: center;\n        & .date {\n          height: 50px;\n          width: 50px;\n          background-color: #f0f2fa;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          margin-right: 20px;\n          & .date-title {\n            display: block;\n            font-size: 28px;\n            color: #003875;\n            font-weight: 600;\n            line-height: 1;\n          }\n\n          & .date-subtitle {\n            display: block;\n            font-size: 8px;\n          }\n        }\n\n        & .title {\n          font-size: 18px;\n          font-weight: 600;\n          letter-spacing: -0.9px;\n        }\n      }\n    }\n  }\n",
            ])),
          b(l)
        ),
        Xe = r.a.div(
          P ||
            (P = Object(c.a)([
              "\n  ",
              " {\n    & .line {\n      width: 25px;\n      border-bottom: 3px solid #c53082;\n    }\n\n    & .title {\n      font-size: 17px;\n      font-weight: 600;\n    }\n  }\n  ",
              " {\n    display: none;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        Ze = r.a.div(
          H ||
            (H = Object(c.a)([
              "\n  ",
              " {\n    width: 35px;\n    height: 20px;\n    color: #334ebc;\n    border: 1px solid #334ebc;\n    font-size: 7px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  ",
              " {\n    display: none;\n  }\n",
            ])),
          b(l),
          b(s)
        ),
        et = r.a.div(
          R ||
            (R = Object(c.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    width: 55%;\n    color: #0c1b58;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n",
            ])),
          b(l)
        ),
        tt = r.a.div(
          Y ||
            (Y = Object(c.a)([
              "\n  ",
              " {\n    font-size: 11px;\n    font-weight: 600;\n    float: rigth;\n  }\n",
            ])),
          b(l)
        ),
        nt = function () {
          return Object(u.jsx)(it, {
            children: Object(u.jsxs)(at, {
              children: [
                Object(u.jsxs)(ot, {
                  children: [
                    Object(u.jsx)(ct, { children: "HomeSWNews1" }),
                    Object(u.jsx)(ct, { children: "HomeSWNews2" }),
                  ],
                }),
                Object(u.jsxs)(ot, {
                  children: [
                    Object(u.jsx)(ct, { children: "HomeSWNews3" }),
                    Object(u.jsx)(ct, { children: "HomeSWNews4" }),
                  ],
                }),
              ],
            }),
          });
        },
        it = r.a.div(
          G ||
            (G = Object(c.a)([
              "\n  ",
              ' {\n    height: 500px;\n    max-width: 1980px;\n    background-image: url("img/homeswnews.jpeg");\n  }\n',
            ])),
          b(s)
        ),
        at = r.a.div(
          J ||
            (J = Object(c.a)([
              "\n  ",
              " {\n    width: 900px;\n    height: 100%;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n  }\n",
            ])),
          b(s)
        ),
        ot = r.a.div(
          K || (K = Object(c.a)(["\n  ", " {\n    margin: 75px 0;\n  }\n"])),
          b(s)
        ),
        ct = r.a.div(
          Q ||
            (Q = Object(c.a)([
              "\n  ",
              " {\n    height: 150px;\n    width: 445px;\n    border: 1px solid black;\n    margin-bottom: 50px;\n  }\n",
            ])),
          b(s)
        ),
        rt = function () {
          return Object(u.jsxs)(we, {
            children: [
              Object(u.jsx)(Ie, {}),
              Object(u.jsx)(Ye, {}),
              Object(u.jsx)(Fe, {}),
              Object(u.jsx)(nt, {}),
            ],
          });
        },
        lt = n(124),
        st = n.n(lt),
        dt = n(125),
        bt = n(396),
        jt = n(399),
        ut = n(162),
        pt = n(126),
        ht = n(404),
        gt = n(129),
        mt = n(52),
        xt = n(147),
        Ot = function () {
          var e = Object(pt.a)(""),
            t = Object(h.a)(e, 3),
            n = t[0],
            i = t[1],
            o = t[2],
            c = Object(pt.a)(""),
            r = Object(h.a)(c, 3),
            l = r[0],
            s = r[1],
            d = r[2],
            b = Object(ht.a)(gt.d, {
              onCompleted: function (e) {
                var t = e.UserLogin,
                  n = t.success,
                  i = t.error,
                  a = t.data;
                n && a
                  ? (Object(be.d)(a.stno),
                    mt.b.success("\ub85c\uadf8\uc778 \uc131\uacf5"),
                    setTimeout(function () {
                      xt.a.push("/main");
                    }, 1e3))
                  : (console.log(i),
                    mt.b.error(
                      "\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778 \ud574 \uc8fc\uc138\uc694"
                    ));
              },
            }),
            j = Object(h.a)(b, 2),
            p = j[0],
            g = j[1],
            m = (g.data, g.loading),
            x = Object(a.useCallback)(
              Object(dt.a)(
                st.a.mark(function e() {
                  return st.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), p({ variables: { id: n, pwd: l } })
                          );
                        case 2:
                          o(""), d("");
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [n, l, o, d, p]
            );
          return Object(u.jsx)(ft, {
            children: Object(u.jsxs)(bt.a, {
              name: "basic",
              labelCol: { span: 8 },
              wrapperCol: { span: 16 },
              initialValues: { remember: !0 },
              onFinish: x,
              onFinishFailed: function (e) {
                console.log("Failed:", e);
              },
              autoComplete: "off",
              children: [
                Object(u.jsx)(bt.a.Item, {
                  label: "Username",
                  name: "username",
                  rules: [
                    { required: !0, message: "Please input your username!" },
                  ],
                  children: Object(u.jsx)(jt.a, { value: n, onChange: i }),
                }),
                Object(u.jsx)(bt.a.Item, {
                  label: "Password",
                  name: "password",
                  rules: [
                    { required: !0, message: "Please input your password!" },
                  ],
                  children: Object(u.jsx)(jt.a.Password, {
                    value: l,
                    onChange: s,
                  }),
                }),
                Object(u.jsx)(bt.a.Item, {
                  wrapperCol: { offset: 8, span: 16 },
                  children: Object(u.jsx)(ut.a, {
                    type: "primary",
                    htmlType: "submit",
                    disabled: m,
                    children: "Submit",
                  }),
                }),
              ],
            }),
          });
        },
        ft = r.a.div(
          V ||
            (V = Object(c.a)([
              "\n  ",
              " {\n    margin-top: 50px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  ",
              " {\n    width: ",
              "px;\n    margin-top: 30px;\n  }\n",
            ])),
          b(l),
          b(s),
          d.pc
        ),
        kt = r.a.div(
          X ||
            (X = Object(c.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n  }\n  min-height: 80vh;\n",
            ])),
          b(l),
          b(s)
        );
      t.default = function () {
        return Object(u.jsxs)("div", {
          className: "wrapper",
          children: [
            Object(u.jsx)(je, {}),
            Object(u.jsx)(kt, {
              children: Object(u.jsxs)(o.d, {
                children: [
                  Object(u.jsx)(o.b, {
                    path: "/main/detail/:param/:subparam",
                    component: he,
                  }),
                  Object(u.jsx)(o.b, { path: "/main/login", component: Ot }),
                  Object(u.jsx)(o.b, { path: "/main", component: rt }),
                ],
              }),
            }),
            Object(u.jsx)(p, {}),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=7.63daebb4.chunk.js.map
