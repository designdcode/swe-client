(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [6],
  {
    117: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      }),
        n.d(t, "k", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return x;
        }),
        n.d(t, "i", function () {
          return v;
        }),
        n.d(t, "f", function () {
          return y;
        }),
        n.d(t, "g", function () {
          return k;
        }),
        n.d(t, "b", function () {
          return w;
        }),
        n.d(t, "c", function () {
          return B;
        }),
        n.d(t, "d", function () {
          return C;
        }),
        n.d(t, "h", function () {
          return I;
        }),
        n.d(t, "j", function () {
          return S;
        });
      var a,
        c,
        i,
        r,
        o,
        l,
        s,
        d,
        u,
        b,
        j,
        O,
        m,
        f = n(106),
        h = n(398),
        g = Object(h.a)(
          a ||
            (a = Object(f.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        p = Object(h.a)(
          c ||
            (c = Object(f.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        x = Object(h.a)(
          i ||
            (i = Object(f.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object(h.a)(
          r ||
            (r = Object(f.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y =
          (Object(h.a)(
            o ||
              (o = Object(f.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            l ||
              (l = Object(f.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            s ||
              (s = Object(f.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(h.a)(
          d ||
            (d = Object(f.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(h.a)(
          u ||
            (u = Object(f.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(h.a)(
          b ||
            (b = Object(f.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C = Object(h.a)(
          j ||
            (j = Object(f.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(h.a)(
          O ||
            (O = Object(f.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(h.a)(
          m ||
            (m = Object(f.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    126: function (e, t, n) {
      "use strict";
      var a = n(112),
        c = n(2);
      t.a = function (e) {
        var t = Object(c.useState)(e),
          n = Object(a.a)(t, 2),
          i = n[0],
          r = n[1];
        return [
          i,
          Object(c.useCallback)(function (e) {
            r(e.target.value);
          }, []),
          r,
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
          return u;
        }),
        n.d(t, "d", function () {
          return b;
        });
      var a,
        c,
        i,
        r,
        o = n(106),
        l = n(398),
        s = Object(l.a)(
          a ||
            (a = Object(o.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        d = Object(l.a)(
          c ||
            (c = Object(o.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        u = Object(l.a)(
          i ||
            (i = Object(o.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(l.a)(
          r ||
            (r = Object(o.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        );
    },
    137: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e) {
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
          return u;
        }),
        n.d(t, "d", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return j;
        });
      var a,
        c = n(106),
        i = n(398),
        r = n(52),
        o = n(54),
        l = n(147),
        s = Object(i.a)(
          a ||
            (a = Object(c.a)([
              "\n  query adminLogin {\n    adminLogin @client\n  }\n",
            ]))
        ),
        d = function () {
          o.b.cache.writeQuery({ query: s, data: { adminLogin: !0 } }),
            localStorage.setItem("admin", "".concat(Date.now() + 72e5)),
            Object(o.a)(!0);
        },
        u = function () {
          o.b.cache.writeQuery({ query: s, data: { adminLogin: !1 } }),
            localStorage.removeItem("admin"),
            Object(o.a)(!1);
        },
        b = function (e) {
          localStorage.setItem("stno", "".concat(e));
        },
        j = function () {
          localStorage.removeItem("stno"),
            r.b.success(
              "\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
            ),
            l.a.push("/main");
        };
    },
    147: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n(12),
        c = Object(a.a)({ forceRefresh: !0 });
    },
    394: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        c,
        i,
        r,
        o,
        l,
        s,
        d,
        u,
        b = n(112),
        j = n(2),
        O = n(190),
        m = n(390),
        f = n(402),
        h = n(396),
        g = n(399),
        p = n(162),
        x = [
          {
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
                key: "major-taprogram",
                title: "major-taprogram",
                ko_title:
                  "\ud504\ub85c\uadf8\ub798\ubc0d\uad50\uacfc\ubaa9 \uba58\ud1a0(TA) \ud504\ub85c\uadf8\ub7a8",
              },
            ],
          },
          {
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
            title: "sitelink",
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
        v = n(5),
        y = n(141),
        k = n.n(y),
        w = n(385),
        B = n(404),
        C = n(129),
        I = n(401),
        S = n(397),
        _ = n(106),
        N = n(110),
        $ = N.a.div(
          a ||
            (a = Object(_.a)([
              "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n",
            ]))
        ),
        F = Object(N.a)(p.a)(
          c ||
            (c = Object(_.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        ),
        L = n(117),
        A = n(52),
        T = n(53),
        E = n(137),
        W = n(13),
        R = function () {
          var e = Object(v.h)().search,
            t = Object(v.i)().param,
            n = Object(v.g)(),
            a = k.a.parse(e),
            c = a.id,
            i = a.category,
            r = Object(j.useState)(),
            o = Object(b.a)(r, 2),
            l = o[0],
            s = o[1],
            d = Object(j.useState)(),
            u = Object(b.a)(d, 2),
            O = u[0],
            m = u[1],
            f = Object(w.a)(C.b),
            h = Object(b.a)(f, 2),
            g = h[0],
            p = h[1],
            x = p.loading,
            y = p.data,
            _ = Object(B.a)(L.e, {
              onCompleted: function (e) {
                var a = e.deleteBoard,
                  c = a.ok,
                  r = a.err;
                c
                  ? (A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."
                    ),
                    n.push({
                      pathname: "/admin/".concat(t, "/").concat(i),
                      state: { refresh: !0 },
                    }))
                  : (console.log(r),
                    A.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
              },
            }),
            N = Object(b.a)(_, 1)[0],
            R = Object(j.useCallback)(
              function () {
                N({ variables: { id: parseInt(c, 10) } });
              },
              [c, N]
            );
          return (
            Object(j.useEffect)(
              function () {
                c && g({ variables: { id: parseInt(c, 10) } });
              },
              [c, g]
            ),
            Object(j.useEffect)(
              function () {
                y &&
                  y.getBoardById &&
                  y.getBoardById.data &&
                  s(y.getBoardById.data),
                  y &&
                    y.getBoardById &&
                    y.getBoardById.data &&
                    y.getBoardById.data.files &&
                    m(y.getBoardById.data.files);
              },
              [y]
            ),
            x
              ? Object(W.jsx)(W.Fragment, { children: "loading" })
              : Object(W.jsxs)($, {
                  children: [
                    Object(W.jsx)(F, {
                      type: "ghost",
                      onClick: function () {
                        return n.goBack();
                      },
                      children: "\ub4a4\ub85c",
                    }),
                    Object(W.jsxs)(I.b, {
                      bordered: !0,
                      layout: "horizontal",
                      style: { display: "flex", flexDirection: "column" },
                      children: [
                        Object(W.jsx)(I.b.Item, {
                          label: "\uc81c\ubaa9",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: Object(W.jsx)(S.a.Title, {
                            level: 3,
                            children:
                              null === l || void 0 === l ? void 0 : l.title,
                          }),
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\uc791\uc131\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: Object(E.a)(
                            (null === l || void 0 === l
                              ? void 0
                              : l.createdAt) || ""
                          ),
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\ucca8\ubd80\ud30c\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            O && 0 !== O.length
                              ? Object(W.jsx)(W.Fragment, {
                                  children: O.map(function (e, t) {
                                    return Object(W.jsx)(
                                      "span",
                                      {
                                        style: { display: "inline-block" },
                                        children: Object(W.jsx)("a", {
                                          href:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.url,
                                          download: !0,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          children:
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.fileName,
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                })
                              : Object(W.jsx)(W.Fragment, {
                                  children:
                                    "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                                }),
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\ub0b4\uc6a9",
                          span: 4,
                          children: Object(W.jsx)("span", {
                            style: { whiteSpace: "pre-wrap" },
                            children:
                              null === l || void 0 === l ? void 0 : l.content,
                          }),
                        }),
                      ],
                    }),
                    Object(W.jsxs)("div", {
                      className: "button-group",
                      children: [
                        Object(W.jsx)(T.b, {
                          to: "/admin/"
                            .concat(t, "/edit-")
                            .concat(t, "?category=")
                            .concat(i, "&id=")
                            .concat(c),
                          children: Object(W.jsx)(F, {
                            type: "primary",
                            children: "\uc218\uc815",
                          }),
                        }),
                        Object(W.jsx)(F, {
                          type: "primary",
                          danger: !0,
                          onClick: R,
                          children: "\uc0ad\uc81c",
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        M = n(392),
        q = n(405),
        U = n(245),
        D = n.n(U),
        z = N.a.div(i || (i = Object(_.a)([""]))),
        K = function () {
          var e = Object(v.i)(),
            t = e.param,
            n = e.subparam,
            a = Object(v.h)().state,
            c = Object(j.useState)(),
            i = Object(b.a)(c, 2),
            r = i[0],
            o = i[1],
            l = Object(w.a)(L.k),
            s = Object(b.a)(l, 2),
            d = s[0],
            u = s[1],
            O = u.loading,
            m = u.data,
            f = u.refetch,
            h = Object(B.a)(L.e, {
              onCompleted: function (e) {
                var t = e.deleteBoard,
                  n = t.ok,
                  a = t.err;
                n
                  ? (A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                    f && f())
                  : A.b.error(a);
              },
            }),
            g = Object(b.a)(h, 1)[0];
          return (
            Object(j.useEffect)(
              function () {
                d({ variables: { category: n } });
              },
              [d, n]
            ),
            Object(j.useEffect)(
              function () {
                var e = function () {
                  f && f();
                };
                return (
                  a && a.refresh && e(),
                  function () {
                    return e();
                  }
                );
              },
              [f, a]
            ),
            Object(j.useEffect)(
              function () {
                if (m && m.getBoardByCategory && m.getBoardByCategory.data) {
                  var e = m.getBoardByCategory.data,
                    t = [];
                  e.map(function (n, a) {
                    var c = {
                      id: n.id,
                      index: e.length - a,
                      title: n.title,
                      createdAt: Object(E.a)(n.createdAt || ""),
                      category: n.category,
                    };
                    return t.push(c);
                  }),
                    o(t);
                }
              },
              [m]
            ),
            O
              ? Object(W.jsx)(W.Fragment, { children: "loading" })
              : Object(W.jsxs)(z, {
                  children: [
                    Object(W.jsx)(T.b, {
                      to: "/admin/"
                        .concat(t, "/create-")
                        .concat(t, "?category=")
                        .concat(n, "&param=")
                        .concat(t, "&subparam=")
                        .concat(n),
                      children: Object(W.jsx)(p.a, {
                        type: "primary",
                        style: { marginTop: 15, marginBottom: 20 },
                        children: "\uae00\uc4f0\uae30",
                      }),
                    }),
                    Object(W.jsxs)(M.a, {
                      dataSource: r,
                      rowKey: "id",
                      children: [
                        Object(W.jsx)(
                          D.a,
                          {
                            title: "\ubc88\ud638",
                            dataIndex: "index",
                            width: 80,
                          },
                          "index"
                        ),
                        Object(W.jsx)(
                          D.a,
                          {
                            title: "\uc81c\ubaa9",
                            dataIndex: "title",
                            render: function (e, a) {
                              return Object(W.jsx)(q.b, {
                                children: Object(W.jsx)(T.b, {
                                  to: "/admin/"
                                    .concat(t, "/detail-")
                                    .concat(t, "?category=")
                                    .concat(n, "&id=")
                                    .concat(a.id),
                                  children: e,
                                }),
                              });
                            },
                          },
                          "title"
                        ),
                        Object(W.jsx)(
                          D.a,
                          {
                            title: "\uc791\uc131\uc77c",
                            dataIndex: "createdAt",
                            width: 150,
                          },
                          "createdAt"
                        ),
                        Object(W.jsx)(
                          D.a,
                          {
                            title: "Action",
                            width: 150,
                            render: function (e, t) {
                              return Object(W.jsx)(q.b, {
                                size: "middle",
                                children: Object(W.jsx)(p.a, {
                                  type: "primary",
                                  danger: !0,
                                  onClick: function () {
                                    return g({ variables: { id: t.id } });
                                  },
                                  children: "\uc0ad\uc81c",
                                }),
                              });
                            },
                          },
                          "action"
                        ),
                      ],
                    }),
                  ],
                })
          );
        },
        H = n(124),
        J = n.n(H),
        Y = n(125),
        P = n(386),
        Q = n(387),
        G = N.a.div(r || (r = Object(_.a)([""]))),
        V = Object(N.a)(P.a)(o || (o = Object(_.a)(["\n  height: 300px;\n"]))),
        X = N.a.span(
          l ||
            (l = Object(_.a)([
              "\n  cursor: pointer;\n  &:hover {\n    transition: 0.2s linear;\n    color: #438ef7;\n  }\n",
            ]))
        ),
        Z = Object(N.a)(Q.a)(
          s ||
            (s = Object(_.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        ee = n(388),
        te = n(384),
        ne = function () {
          var e = Object(te.a)(C.a),
            t = e.data,
            n = e.loading,
            a = e.refetch,
            c = e.error,
            i = Object(te.a)(C.c),
            r = i.data,
            o = i.loading,
            l = i.refetch,
            s = i.error,
            d = Object(v.h)().state,
            u = Object(j.useState)(),
            O = Object(b.a)(u, 2),
            m = O[0],
            f = O[1],
            h = Object(j.useState)(),
            g = Object(b.a)(h, 2),
            x = g[0],
            y = g[1],
            k = Object(j.useState)(),
            w = Object(b.a)(k, 2),
            I = w[0],
            _ = w[1],
            N = Object(B.a)(L.h),
            $ = Object(b.a)(N, 1)[0];
          Object(j.useEffect)(
            function () {
              (null === t || void 0 === t ? void 0 : t.getBoard.data) &&
                (f(
                  t.getBoard.data
                    .filter(function (e) {
                      return e.category.includes("community-notice");
                    })
                    .slice(0, 5)
                ),
                y(
                  t.getBoard.data
                    .filter(function (e) {
                      return e.category.includes("community-administration");
                    })
                    .slice(0, 5)
                ));
            },
            [t]
          ),
            Object(j.useEffect)(
              function () {
                (null === r || void 0 === r ? void 0 : r.getLinks.data) &&
                  _(r.getLinks.data);
              },
              [r]
            ),
            Object(j.useEffect)(
              function () {
                var e = function () {
                  a && a(), l && l();
                };
                return (
                  d && d.refresh && e(),
                  function () {
                    return e();
                  }
                );
              },
              [a, d, l]
            );
          var F = Object(j.useCallback)(
            (function () {
              var e = Object(Y.a)(
                J.a.mark(function e(t) {
                  return J.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            $({ variables: { id: t } }).then(function (e) {
                              var t = e.data;
                              (null === t || void 0 === t
                                ? void 0
                                : t.deleteLink.ok) &&
                                A.b.success(
                                  "\ub9c1\ud06c\uac00 \uc0ad\uc81c \ub418\uc5c7\uc2b5\ub2c8\ub2e4"
                                );
                            })
                          );
                        case 2:
                          a(), l();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [a, $, l]
          );
          return (
            c && console.error(c),
            s && console.error(s),
            Object(W.jsxs)(G, {
              children: [
                n
                  ? Object(W.jsx)(W.Fragment, { children: "loading..." })
                  : Object(W.jsxs)(Q.a, {
                      gutter: [30, 40],
                      justify: "space-between",
                      children: [
                        Object(W.jsx)(V, {
                          span: 11,
                          children: Object(W.jsxs)(M.a, {
                            title: function () {
                              return Object(W.jsx)(S.a.Title, {
                                level: 4,
                                children: "\uacf5\uc9c0\uc0ac\ud56d",
                              });
                            },
                            dataSource: m,
                            showHeader: !1,
                            rowKey: "id",
                            pagination: !1,
                            size: "middle",
                            children: [
                              Object(W.jsx)(D.a, {
                                dataIndex: "title",
                                align: "left",
                                ellipsis: !0,
                                render: function (e, t) {
                                  return Object(W.jsx)(X, {
                                    children: Object(W.jsx)(T.b, {
                                      to: "/admin/community/detail-community?category="
                                        .concat(t.category, "&id=")
                                        .concat(t.id),
                                      children: e,
                                    }),
                                  });
                                },
                              }),
                              Object(W.jsx)(D.a, {
                                dataIndex: "createdAt",
                                align: "right",
                                render: function (e, t) {
                                  return Object(W.jsx)("span", {
                                    children: Object(W.jsx)(T.b, {
                                      to: "/admin/community/detail-community?category="
                                        .concat(t.category, "&id=")
                                        .concat(t.id),
                                      children: Object(E.a)(e),
                                    }),
                                  });
                                },
                              }),
                            ],
                          }),
                        }),
                        Object(W.jsx)(V, {
                          span: 11,
                          children: Object(W.jsxs)(M.a, {
                            title: function () {
                              return Object(W.jsx)(S.a.Title, {
                                level: 4,
                                children: "\ud559\uc0ac\uacf5\uc9c0",
                              });
                            },
                            dataSource: x,
                            showHeader: !1,
                            rowKey: "id",
                            pagination: !1,
                            size: "middle",
                            children: [
                              Object(W.jsx)(D.a, {
                                dataIndex: "title",
                                align: "left",
                                ellipsis: !0,
                                render: function (e, t) {
                                  return Object(W.jsx)(X, {
                                    children: Object(W.jsx)(T.b, {
                                      to: "/admin/community/detail-community?category="
                                        .concat(t.category, "&id=")
                                        .concat(t.id),
                                      children: e,
                                    }),
                                  });
                                },
                              }),
                              Object(W.jsx)(D.a, {
                                dataIndex: "createdAt",
                                align: "right",
                                render: function (e, t) {
                                  return Object(W.jsx)("span", {
                                    children: Object(W.jsx)(T.b, {
                                      to: "/admin/community/detail-community?category="
                                        .concat(t.category, "&id=")
                                        .concat(t.id),
                                      children: Object(E.a)(e),
                                    }),
                                  });
                                },
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                Object(W.jsx)(ee.a, {}),
                Object(W.jsxs)(Z, {
                  children: [
                    Object(W.jsx)(S.a.Title, {
                      level: 4,
                      children: "\uc0ac\uc774\ud2b8 \ub9c1\ud06c",
                    }),
                    o
                      ? Object(W.jsx)(W.Fragment, { children: "loading..." })
                      : Object(W.jsxs)(M.a, {
                          showHeader: !1,
                          dataSource: I,
                          pagination: !1,
                          children: [
                            Object(W.jsx)(D.a, {
                              dataIndex: "title",
                              align: "left",
                              render: function (e) {
                                return Object(W.jsx)("span", { children: e });
                              },
                            }),
                            Object(W.jsx)(D.a, {
                              dataIndex: "url",
                              align: "center",
                              render: function (e) {
                                return Object(W.jsx)("span", { children: e });
                              },
                            }),
                            Object(W.jsx)(D.a, {
                              dataIndex: "url",
                              align: "right",
                              render: function (e, t) {
                                return Object(W.jsxs)("div", {
                                  children: [
                                    Object(W.jsx)("a", {
                                      href: "".concat(e),
                                      children: Object(W.jsx)(p.a, {
                                        children: "\ubc14\ub85c\uac00\uae30",
                                      }),
                                    }),
                                    Object(W.jsx)(p.a, {
                                      danger: !0,
                                      onClick: function () {
                                        return F(t.id);
                                      },
                                      style: { marginLeft: 15 },
                                      children: "\ub9c1\ud06c\uc0ad\uc81c",
                                    }),
                                  ],
                                });
                              },
                            }),
                          ],
                        }),
                  ],
                }),
              ],
            })
          );
        },
        ae = n(164),
        ce = N.a.div(
          d ||
            (d = Object(_.a)([
              "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n",
            ]))
        ),
        ie = Object(N.a)(p.a)(
          u ||
            (u = Object(_.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        ),
        re = n(393),
        oe = n(126),
        le = n(380),
        se = n(406),
        de = n(145),
        ue = n(246);
      n(381);
      ue.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var be,
        je,
        Oe,
        me,
        fe,
        he,
        ge,
        pe,
        xe,
        ve,
        ye = ue.a.storage(),
        ke = function () {
          var e = Object(v.h)().search,
            t = k.a.parse(e),
            n = Object(v.g)(),
            a = Object(v.i)().param,
            c = t.id,
            i = t.category,
            r = Object(j.useState)(),
            o = Object(b.a)(r, 2),
            l = o[0],
            s = o[1],
            d = Object(j.useState)(),
            u = Object(b.a)(d, 2),
            O = u[0],
            m = u[1],
            f = Object(j.useState)([]),
            h = Object(b.a)(f, 2),
            p = h[0],
            x = h[1],
            y = Object(oe.a)(""),
            S = Object(b.a)(y, 3),
            _ = S[0],
            N = S[1],
            $ = S[2],
            F = Object(oe.a)(""),
            T = Object(b.a)(F, 3),
            E = T[0],
            R = T[1],
            M = T[2],
            q = Object(oe.a)(""),
            U = Object(b.a)(q, 3),
            D = U[0],
            z = U[1],
            K = U[2],
            H = Object(j.useState)(0),
            P = Object(b.a)(H, 2),
            Q = P[0],
            G = P[1],
            V = Object(w.a)(C.a),
            X = Object(b.a)(V, 2),
            Z = X[0],
            ee = X[1],
            te = ee.loading,
            ne = ee.data,
            ue = ee.refetch,
            be = Object(B.a)(L.e, {
              onCompleted: function (e) {
                var t = e.deleteBoard,
                  c = t.ok,
                  r = t.err;
                c
                  ? (A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                    n.push({
                      pathname: "/admin/".concat(a, "/").concat(i),
                      state: { refresh: !0 },
                    }))
                  : (console.log(r),
                    A.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
              },
            }),
            je = Object(b.a)(be, 1)[0],
            Oe = Object(B.a)(L.f, {
              onCompleted: function (e) {
                var t = e.deleteFile,
                  n = t.ok,
                  a = t.err;
                n &&
                  (A.b.success(
                    "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  ue ? ue() : (console.log(a), A.b.error(a)));
              },
            }),
            me = Object(b.a)(Oe, 1)[0],
            fe = Object(B.a)(L.b),
            he = Object(b.a)(fe, 1)[0],
            ge = Object(B.a)(L.i, {
              onCompleted: function (e) {
                var t = e.editBoard,
                  c = t.ok,
                  r = t.err;
                c
                  ? (A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                    n.push({
                      pathname: "/admin/".concat(a, "/").concat(i),
                      state: { refresh: !0 },
                    }))
                  : (console.log(r),
                    A.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
              },
            }),
            pe = Object(b.a)(ge, 1)[0],
            xe = Object(j.useCallback)(
              function () {
                je({ variables: { id: parseInt(c, 10) } });
              },
              [c, je]
            ),
            ve = Object(j.useCallback)(
              function () {
                pe({
                  variables: {
                    id: parseInt(c, 10),
                    title: _,
                    content: E,
                    link: D,
                  },
                });
              },
              [c, _, E, D, pe]
            ),
            ke = Object(j.useCallback)(
              (function () {
                var e = Object(Y.a)(
                  J.a.mark(function e(t, n) {
                    return J.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ye
                                .ref("/files/".concat(i, "/").concat(n))
                                .delete(),
                              (e.next = 3),
                              me({ variables: { id: t } })
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [me, i]
            ),
            we = Object(j.useCallback)(
              function (e) {
                G(Q + 1),
                  ye
                    .ref("/files/".concat(i, "/").concat(e.name))
                    .put(e)
                    .on(
                      "state_changed",
                      function (e) {},
                      function (e) {
                        return console.log(e);
                      },
                      function () {
                        ye.ref("/files/".concat(i, "/").concat(e.name))
                          .getDownloadURL()
                          .then(
                            (function () {
                              var t = Object(Y.a)(
                                J.a.mark(function t(n) {
                                  return J.a.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            x(function (t) {
                                              return [].concat(
                                                Object(ae.a)(t),
                                                [{ url: n, fileName: e.name }]
                                              );
                                            }),
                                            (t.next = 3),
                                            he({
                                              variables: {
                                                url: n,
                                                fileName: e.name,
                                                boardId: parseInt(c, 10),
                                              },
                                              onCompleted: function (e) {
                                                var t = e.createFile,
                                                  n = t.ok,
                                                  a = t.err;
                                                n
                                                  ? (A.b.success(
                                                      "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                    ),
                                                    ue && ue())
                                                  : (A.b.error(
                                                      "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                    ),
                                                    console.log(a));
                                              },
                                            })
                                          );
                                        case 3:
                                          G(Q - 1);
                                        case 4:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                      }
                    );
              },
              [he, c, i, Q, ue]
            );
          return (
            Object(j.useEffect)(
              function () {
                c && Z({ variables: { id: parseInt(c, 10) } });
              },
              [c, Z]
            ),
            Object(j.useEffect)(
              function () {
                ne &&
                  ne.getBoardById &&
                  ne.getBoardById.data &&
                  (s(ne.getBoardById.data),
                  $(ne.getBoardById.data.title || ""),
                  M(ne.getBoardById.data.content || ""),
                  K(ne.getBoardById.data.link || "")),
                  ne &&
                    ne.getBoardById &&
                    ne.getBoardById.data &&
                    ne.getBoardById.data.files &&
                    m(ne.getBoardById.data.files);
              },
              [ne, $, M, K]
            ),
            Object(j.useEffect)(
              function () {
                Q < 0 && G(0);
              },
              [Q]
            ),
            te
              ? Object(W.jsx)("div", { children: "loading..." })
              : Object(W.jsxs)(ce, {
                  children: [
                    Object(W.jsx)(ie, {
                      type: "ghost",
                      onClick: function () {
                        return n.goBack();
                      },
                      children: "\ub4a4\ub85c",
                    }),
                    Object(W.jsxs)(I.b, {
                      bordered: !0,
                      column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                      layout: "horizontal",
                      children: [
                        Object(W.jsx)(I.b.Item, {
                          label: "\uc81c\ubaa9",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: Object(W.jsx)(g.a, {
                            placeholder:
                              (null === l || void 0 === l ? void 0 : l.title) ||
                              void 0,
                            value: _,
                            onChange: N,
                          }),
                        }),
                        Object(W.jsxs)(I.b.Item, {
                          label: "\ucca8\ubd80\ud30c\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            O && 0 !== O.length
                              ? Object(W.jsx)(W.Fragment, {
                                  children: O.map(function (e, t) {
                                    return Object(W.jsxs)(
                                      "div",
                                      {
                                        className: "attach-group",
                                        children: [
                                          Object(W.jsx)("a", {
                                            href:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.url,
                                            download: !0,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.fileName,
                                          }),
                                          Object(W.jsx)("button", {
                                            className: "attach-button",
                                            onClick: function () {
                                              return ke(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.id,
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.fileName
                                              );
                                            },
                                            children: Object(W.jsx)(le.a, {}),
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                })
                              : 0 === p.length
                              ? Object(W.jsx)("div", {
                                  children:
                                    "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                                })
                              : Object(W.jsx)(W.Fragment, {}),
                            Object(W.jsx)(re.a, {
                              multiple: !0,
                              maxCount: 4,
                              className: "upload-list-inline",
                              customRequest: function (e) {
                                var t = e.file;
                                return we(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== p.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(W.jsx)(ie, {
                                icon: Object(W.jsx)(se.a, {}),
                                children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          children: Object(W.jsx)(g.a, {
                            placeholder:
                              (null === l || void 0 === l ? void 0 : l.link) ||
                              void 0,
                            value: D,
                            onChange: z,
                          }),
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\ub0b4\uc6a9",
                          span: 4,
                          children: Object(W.jsx)(g.a.TextArea, {
                            placeholder:
                              (null === l || void 0 === l
                                ? void 0
                                : l.content) || void 0,
                            rows: 10,
                            value: E,
                            onChange: R,
                          }),
                        }),
                      ],
                    }),
                    Object(W.jsxs)("div", {
                      className: "button-group",
                      children: [
                        Object(W.jsx)(ie, {
                          type: "primary",
                          onClick: function () {
                            return ve();
                          },
                          disabled: 0 !== Q,
                          children: te
                            ? "Uploading..."
                            : Q <= 0
                            ? "\uc62c\ub9ac\uae30"
                            : Object(W.jsxs)(W.Fragment, {
                                children: [
                                  Object(W.jsx)(de.a, {}),
                                  " \uc774\ubbf8\uc9c0 / \ud30c\uc77c \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4...",
                                ],
                              }),
                        }),
                        Object(W.jsx)(ie, {
                          type: "primary",
                          danger: !0,
                          onClick: xe,
                          children: "\uc0ad\uc81c\ud558\uae30",
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        we = n(193),
        Be = N.a.div(
          be ||
            (be = Object(_.a)([
              "\n  & .link-checkbox {\n    margin: 20px;\n    margin-left: 40px;\n  }\n\n  & .upload-list-inline {\n    width: 200px;\n    margin-right: 8px;\n  }\n\n  & .ant-upload-list-picture-container {\n    width: 300px;\n  }\n  & .ant-upload-list-item-info {\n    width: 300px;\n  }\n",
            ]))
        ),
        Ce = n(253),
        Ie = function (e) {
          switch (e) {
            case null === e || void 0 === e ? void 0 : e.includes("storage"):
              return !1;
            default:
              return !0;
          }
        },
        Se = function (e, t, n, a, c, i, r, o, l) {
          ye.ref("/".concat(e, "/").concat(n, "/").concat(a))
            .put(t)
            .on(
              "state_changed",
              function (e) {},
              function (e) {
                return console.log(e);
              },
              function () {
                r(1),
                  ye
                    .ref("/".concat(e, "/").concat(n, "/").concat(a))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var e = Object(Y.a)(
                          J.a.mark(function e(t) {
                            return J.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((c(t), !o || !l)) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      (e.next = 4),
                                      o({
                                        variables: {
                                          url: t,
                                          fileName: a,
                                          boardId: l,
                                        },
                                      })
                                    );
                                  case 4:
                                    A.b.success(
                                      "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                    ),
                                      r(0);
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
              }
            );
        },
        _e = function (e, t, n, a) {
          ye.ref("/".concat(e, "/").concat(t, "/").concat(n))
            .delete()
            .then(function () {
              a("");
            })
            .catch(function (e) {
              return A.b.error(e);
            });
        },
        Ne = { wrapperCol: { span: 16 } },
        $e = function () {
          var e = Object(v.g)(),
            t = Object(v.h)().search,
            n = k.a.parse(t),
            a = n.category,
            c = n.param,
            i = n.subparam,
            r = Object(oe.a)(""),
            o = Object(b.a)(r, 3),
            l = o[0],
            s = o[1],
            d = o[2],
            u = Object(oe.a)(""),
            O = Object(b.a)(u, 3),
            m = O[0],
            f = O[1],
            x = O[2],
            y = Object(oe.a)(""),
            w = Object(b.a)(y, 3),
            C = w[0],
            I = w[1],
            S = w[2],
            _ = Object(j.useState)(!1),
            N = Object(b.a)(_, 2),
            $ = N[0],
            F = N[1],
            T = Object(j.useState)(),
            E = Object(b.a)(T, 2),
            R = E[0],
            M = E[1],
            q = Object(j.useState)(),
            U = Object(b.a)(q, 2),
            D = U[0],
            z = U[1],
            K = Object(j.useState)([]),
            H = Object(b.a)(K, 2),
            P = H[0],
            Q = H[1],
            G = Object(j.useState)(!1),
            V = Object(b.a)(G, 2),
            X = V[0],
            Z = V[1],
            ee = Object(j.useState)(!1),
            te = Object(b.a)(ee, 2),
            ne = te[0],
            ce = te[1],
            ie = Object(j.useState)(!1),
            le = Object(b.a)(ie, 2),
            ue = le[0],
            be = le[1],
            je = Object(j.useState)(!0),
            Oe = Object(b.a)(je, 2),
            me = Oe[0],
            fe = Oe[1],
            he = Object(j.useState)(0),
            ge = Object(b.a)(he, 2),
            pe = ge[0],
            xe = ge[1];
          Object(j.useEffect)(
            function () {
              Z(Ie(i)),
                be(
                  (function (e) {
                    switch (e) {
                      case null === e || void 0 === e
                        ? void 0
                        : e.includes("storage"):
                        return !0;
                      default:
                        return !1;
                    }
                  })(i)
                ),
                ce(
                  (function (e) {
                    return !!(null === e || void 0 === e
                      ? void 0
                      : e.includes("storage"));
                  })(i)
                ),
                fe(
                  (function (e) {
                    return !(null === e || void 0 === e
                      ? void 0
                      : e.includes("introduce"));
                  })(i)
                );
            },
            [i]
          );
          var ve = Object(B.a)(L.a, {
              onCompleted: function (t) {
                var n = t.createBoard,
                  a = n.ok,
                  r = n.err;
                a
                  ? (d(""),
                    x(""),
                    S(""),
                    M(""),
                    A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                    ),
                    e.push({
                      pathname: "/admin/".concat(c, "/").concat(i),
                      state: { refresh: !0 },
                    }))
                  : (console.log(r),
                    A.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
              },
            }),
            ke = Object(b.a)(ve, 2),
            $e = ke[0],
            Fe = ke[1].loading,
            Le = Object(j.useCallback)(
              function () {
                F(!$), $ || S("");
              },
              [$, S, F]
            ),
            Ae = Object(j.useCallback)(
              Object(Y.a)(
                J.a.mark(function e() {
                  return J.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (0 === P.length) {
                            e.next = 5;
                            break;
                          }
                          return (
                            (e.next = 3),
                            $e({
                              variables: {
                                title: l.trim() ? l : null,
                                content: m.trim() ? m : null,
                                link: C.trim() ? C : null,
                                category: a,
                                files: 0 !== P.length ? P : null,
                                images: (
                                  null === R || void 0 === R ? void 0 : R.trim()
                                )
                                  ? [{ url: R, fileName: D }]
                                  : null,
                              },
                            })
                          );
                        case 3:
                          e.next = 7;
                          break;
                        case 5:
                          return (
                            (e.next = 7),
                            $e({
                              variables: {
                                title: l.trim() ? l : null,
                                content: m.trim() ? m : null,
                                link: C.trim() ? C : null,
                                category: a,
                              },
                            })
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [l, m, C, $e, a, P, D, R]
            ),
            Te = Object(j.useCallback)(
              function (e) {
                xe(pe + 1);
                var t = e.name;
                z(e.name), Se("images", e, a, t, M, 0, xe);
              },
              [a, pe]
            ),
            Ee = Object(j.useCallback)(
              function (e) {
                xe(pe + 1),
                  ye
                    .ref("/files/".concat(a, "/").concat(e.name))
                    .put(e)
                    .on(
                      "state_changed",
                      function (e) {},
                      function (e) {
                        return console.log(e);
                      },
                      function () {
                        ye.ref("/files/".concat(a, "/").concat(e.name))
                          .getDownloadURL()
                          .then(function (t) {
                            Q(function (n) {
                              return [].concat(Object(ae.a)(n), [
                                { url: t, fileName: e.name },
                              ]);
                            }),
                              A.b.success(
                                "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                              ),
                              xe(pe - 1);
                          });
                      }
                    );
              },
              [a, pe]
            ),
            We = Object(j.useCallback)(
              function () {
                D && D.trim() && _e("images", a, D, M);
              },
              [a, D]
            ),
            Re = Object(j.useCallback)(
              function (e) {
                ye.ref("/files/".concat(a, "/").concat(e.name))
                  .delete()
                  .then(function () {
                    A.b.success(
                      "\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                      Q(
                        P.filter(function (t) {
                          return t.fileName !== e.name;
                        })
                      );
                  })
                  .catch(function (e) {
                    return A.b.error(e);
                  });
              },
              [a, P]
            );
          return (
            Object(j.useEffect)(
              function () {
                pe < 0 && xe(0);
              },
              [pe]
            ),
            Object(W.jsx)(Be, {
              children: Object(W.jsxs)(
                h.a,
                Object(we.a)(
                  Object(we.a)({}, Ne),
                  {},
                  {
                    name: "upload-board",
                    onFinish: Ae,
                    children: [
                      Object(W.jsx)(h.a.Item, {
                        name: ["title"],
                        label: "\uc81c\ubaa9",
                        children: Object(W.jsx)(g.a, {
                          type: "text",
                          onChange: s,
                          value: l,
                        }),
                      }),
                      X &&
                        Object(W.jsxs)(W.Fragment, {
                          children: [
                            Object(W.jsx)("div", {
                              className: "link-checkbox",
                              children: Object(W.jsx)(Ce.a, {
                                onChange: Le,
                                children: $
                                  ? "\ub9c1\ud06c\uc81c\uac70"
                                  : "\ub9c1\ud06c\ucd94\uac00",
                              }),
                            }),
                            $ &&
                              Object(W.jsx)(h.a.Item, {
                                name: ["link"],
                                label: "\ub9c1\ud06c",
                                children: Object(W.jsx)(g.a, {
                                  type: "text",
                                  onChange: I,
                                  value: C,
                                }),
                              }),
                          ],
                        }),
                      ue &&
                        Object(W.jsx)(re.a, {
                          style: { marginBottom: 20 },
                          listType: "picture",
                          customRequest: function (e) {
                            var t = e.file;
                            return Te(t);
                          },
                          progress: { showInfo: !0 },
                          onChange: function (e) {
                            var t = e.file;
                            t.status = "" !== R ? "done" : "removed";
                          },
                          className: "upload-list-inline",
                          maxCount: 1,
                          onRemove: function () {
                            return We();
                          },
                          children: Object(W.jsx)(p.a, {
                            icon: Object(W.jsx)(se.a, {}),
                            children: "Upload",
                          }),
                        }),
                      ne &&
                        Object(W.jsx)(re.a, {
                          multiple: !0,
                          customRequest: function (e) {
                            var t = e.file;
                            return Ee(t);
                          },
                          maxCount: 4,
                          onChange: function (e) {
                            var t = e.file;
                            0 !== P.length
                              ? (t.status = "done")
                              : (t.status = "removed");
                          },
                          onRemove: function (e) {
                            return Re(e);
                          },
                          children: Object(W.jsx)(p.a, {
                            style: { marginBottom: 20 },
                            icon: Object(W.jsx)(se.a, {}),
                            children: "Upload",
                          }),
                        }),
                      me &&
                        Object(W.jsx)(h.a.Item, {
                          name: ["content"],
                          label: "\ub0b4\uc6a9",
                          style: { marginTop: 20 },
                          children: Object(W.jsx)(g.a.TextArea, {
                            onChange: f,
                            rows: 10,
                            value: m,
                          }),
                        }),
                      Object(W.jsx)(h.a.Item, {
                        wrapperCol: Object(we.a)(
                          Object(we.a)({}, Ne.wrapperCol),
                          {},
                          { offset: 8 }
                        ),
                        children: Object(W.jsx)(p.a, {
                          type: "primary",
                          htmlType: "submit",
                          disabled: 0 !== pe,
                          children: Fe
                            ? "Uploading..."
                            : pe <= 0
                            ? "\uc62c\ub9ac\uae30"
                            : Object(W.jsxs)(W.Fragment, {
                                children: [
                                  Object(W.jsx)(de.a, {}),
                                  " \uc774\ubbf8\uc9c0 / \ud30c\uc77c \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4...",
                                ],
                              }),
                        }),
                      }),
                    ],
                  }
                )
              ),
            })
          );
        },
        Fe = N.a.div(
          je ||
            (je = Object(_.a)([
              "\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &.attach-group {\n    display: flex;\n    flex-direction: column;\n  }\n\n  img {\n    object-fit: contain;\n    width: 400px;\n    height: 400px;\n  }\n",
            ]))
        ),
        Le = Object(N.a)(p.a)(
          Oe || (Oe = Object(_.a)(["\n  margin: 15px 0;\n"]))
        ),
        Ae = function () {
          var e,
            t,
            n = Object(v.g)(),
            a = Object(v.i)(),
            c = a.param,
            i = a.subparam,
            r = i,
            o = Object(v.h)().state,
            l = Object(j.useState)(),
            s = Object(b.a)(l, 2),
            d = s[0],
            u = s[1],
            O = Object(j.useState)(),
            m = Object(b.a)(O, 2),
            f = m[0],
            h = m[1],
            g = Object(te.a)(L.k, { variables: { category: r } }),
            p = g.data,
            x = g.loading,
            y = g.refetch;
          return (
            Object(j.useEffect)(
              function () {
                var e = function () {
                  var e;
                  (null === p || void 0 === p
                    ? void 0
                    : p.getBoardByCategory.ok) &&
                  0 !==
                    (null === (e = p.getBoardByCategory.data) || void 0 === e
                      ? void 0
                      : e.length)
                    ? p.getBoardByCategory.data &&
                      0 !== p.getBoardByCategory.data.length &&
                      (p.getBoardByCategory.data[0].files &&
                        u(p.getBoardByCategory.data[0].files),
                      p.getBoardByCategory.data[0].images &&
                        h(p.getBoardByCategory.data[0].images))
                    : (u([]), h([]));
                };
                return (
                  e(),
                  function () {
                    return e();
                  }
                );
              },
              [p]
            ),
            Object(j.useEffect)(
              function () {
                var e = function () {
                  y && y();
                };
                return (
                  o && o.refresh && e(),
                  function () {
                    return e();
                  }
                );
              },
              [y, o]
            ),
            x
              ? Object(W.jsx)(W.Fragment, { children: "loading" })
              : Object(W.jsxs)(Fe, {
                  children: [
                    Object(W.jsxs)("div", {
                      className: "button-group",
                      children: [
                        Object(W.jsx)(Le, {
                          type: "ghost",
                          onClick: function () {
                            return n.goBack();
                          },
                          children: "\ub4a4\ub85c",
                        }),
                        0 !==
                          (null === p ||
                          void 0 === p ||
                          null === (e = p.getBoardByCategory.data) ||
                          void 0 === e
                            ? void 0
                            : e.length) &&
                        (null === p || void 0 === p
                          ? void 0
                          : p.getBoardByCategory.ok)
                          ? Object(W.jsx)(Le, {
                              type: "primary",
                              onClick: function () {
                                return n.push(
                                  "/admin/"
                                    .concat(c, "/edit-image-")
                                    .concat(c, "?category=")
                                    .concat(i, "&id=")
                                    .concat(
                                      p.getBoardByCategory.data &&
                                        p.getBoardByCategory.data[0].id
                                    )
                                );
                              },
                              children: "\uc218\uc815\ud558\uae30",
                            })
                          : Object(W.jsx)(Le, {
                              type: "primary",
                              onClick: function () {
                                return n.push(
                                  "/admin/"
                                    .concat(c, "/create-image-")
                                    .concat(c, "?category=")
                                    .concat(i, "&param=")
                                    .concat(c, "&subparam=")
                                    .concat(i)
                                );
                              },
                              children: "\uae00\uc4f0\uae30",
                            }),
                      ],
                    }),
                    Object(W.jsxs)(I.b, {
                      bordered: !0,
                      column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                      layout: "horizontal",
                      children: [
                        Object(W.jsx)(I.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            0 !==
                              (null === p ||
                              void 0 === p ||
                              null === (t = p.getBoardByCategory.data) ||
                              void 0 === t
                                ? void 0
                                : t.length) &&
                            (null === p || void 0 === p
                              ? void 0
                              : p.getBoardByCategory.ok)
                              ? Object(W.jsx)("a", {
                                  href: "".concat(
                                    p.getBoardByCategory.data &&
                                      p.getBoardByCategory.data[0].link
                                  ),
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children:
                                    p.getBoardByCategory.data &&
                                    p.getBoardByCategory.data[0].link,
                                })
                              : Object(W.jsx)(S.a.Text, {
                                  children:
                                    "\ub9c1\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                                }),
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\ucca8\ubd80\ud30c\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            d && d.length
                              ? d.map(function (e, t) {
                                  return Object(W.jsx)(
                                    "span",
                                    {
                                      className: "attach-group",
                                      children: Object(W.jsx)("a", {
                                        href: "".concat(
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.url
                                        ),
                                        download: !0,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children:
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.fileName,
                                      }),
                                    },
                                    null === e || void 0 === e
                                      ? void 0
                                      : e.fileName
                                  );
                                })
                              : Object(W.jsx)(S.a.Text, {
                                  children:
                                    "\ucca8\ubd80\ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                                }),
                        }),
                        Object(W.jsx)(I.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            f && f[0]
                              ? Object(W.jsx)("img", {
                                  src: f[0].url,
                                  alt: f[0].fileName,
                                })
                              : Object(W.jsx)(S.a.Text, {
                                  children:
                                    "\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                                }),
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        Te = N.a.div(me || (me = Object(_.a)([""]))),
        Ee = { wrapperCol: { span: 16 } },
        We = function () {
          var e = Object(v.g)(),
            t = Object(v.h)().search,
            n = k.a.parse(t),
            a = n.category,
            c = n.param,
            i = n.subparam,
            r = Object(oe.a)(""),
            o = Object(b.a)(r, 3),
            l = o[0],
            s = o[1],
            d = o[2],
            u = Object(j.useState)(!1),
            O = Object(b.a)(u, 2),
            m = O[0],
            f = O[1],
            x = Object(j.useState)([]),
            y = Object(b.a)(x, 2),
            w = y[0],
            C = y[1],
            I = Object(j.useState)(),
            S = Object(b.a)(I, 2),
            _ = S[0],
            N = S[1],
            $ = Object(j.useState)(),
            F = Object(b.a)($, 2),
            T = F[0],
            E = F[1],
            R = Object(j.useState)(!1),
            M = Object(b.a)(R, 2),
            q = M[0],
            U = M[1],
            D = Object(j.useState)(0),
            z = Object(b.a)(D, 2),
            K = z[0],
            H = z[1];
          Object(j.useEffect)(
            function () {
              U(Ie(i));
            },
            [i]
          );
          var P = Object(B.a)(L.a, {
              onCompleted: function (t) {
                var n = t.createBoard,
                  a = n.ok,
                  r = n.err;
                a
                  ? (d(""),
                    A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                    ),
                    e.push({
                      pathname: "/admin/".concat(c, "/").concat(i),
                      state: { refresh: !0 },
                    }))
                  : (console.log(r),
                    A.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0dd\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
              },
            }),
            Q = Object(b.a)(P, 2),
            G = Q[0],
            V = Q[1].loading,
            X = Object(j.useCallback)(
              function () {
                f(!m), m || d("");
              },
              [m, d, f]
            ),
            Z = Object(j.useCallback)(
              Object(Y.a)(
                J.a.mark(function e() {
                  return J.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            G({
                              variables: {
                                link: l.trim()
                                  ? l.includes("http")
                                    ? l
                                    : "http://".concat(l)
                                  : null,
                                category: a,
                                files: 0 !== w.length ? w : null,
                                images: (
                                  null === _ || void 0 === _ ? void 0 : _.trim()
                                )
                                  ? [{ url: _, fileName: T }]
                                  : null,
                              },
                            })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [G, a, w, T, _, l]
            ),
            ee = Object(j.useCallback)(
              function (e) {
                var t = e.name;
                E(e.name), Se("images", e, a, t, N, 0, H), H(0);
              },
              [a, K]
            ),
            te = Object(j.useCallback)(
              function (e) {
                H(K + 1),
                  ye
                    .ref("/files/".concat(a, "/").concat(e.name))
                    .put(e)
                    .on(
                      "state_changed",
                      function (e) {},
                      function (e) {
                        return console.log(e);
                      },
                      function () {
                        ye.ref("/files/".concat(a, "/").concat(e.name))
                          .getDownloadURL()
                          .then(function (t) {
                            C(function (n) {
                              return [].concat(Object(ae.a)(n), [
                                { url: t, fileName: e.name },
                              ]);
                            }),
                              A.b.success(
                                "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                              ),
                              H(0);
                          });
                      }
                    );
              },
              [a, K]
            ),
            ne = Object(j.useCallback)(
              function () {
                T && T.trim() && (_e("images", a, T, N), H(0));
              },
              [a, T]
            ),
            ce = Object(j.useCallback)(
              function (e) {
                ye.ref("/files/".concat(a, "/").concat(e.name))
                  .delete()
                  .then(function () {
                    A.b.success(
                      "\uc5c5\ub85c\ub4dc \ub41c \ud30c\uc77c/\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                      C(
                        w.filter(function (t) {
                          return t.fileName !== e.name;
                        })
                      );
                  })
                  .catch(function (e) {
                    return A.b.error(e);
                  });
              },
              [a, w]
            );
          return Object(W.jsx)(Te, {
            children: Object(W.jsxs)(
              h.a,
              Object(we.a)(
                Object(we.a)({}, Ee),
                {},
                {
                  name: "upload-board",
                  onFinish: Z,
                  children: [
                    q &&
                      Object(W.jsxs)(W.Fragment, {
                        children: [
                          Object(W.jsx)("div", {
                            className: "link-checkbox",
                            children: Object(W.jsx)(Ce.a, {
                              onChange: X,
                              children: m
                                ? "\ub9c1\ud06c\uc81c\uac70"
                                : "\ub9c1\ud06c\ucd94\uac00",
                            }),
                          }),
                          m &&
                            Object(W.jsx)(h.a.Item, {
                              name: ["link"],
                              label: "\ub9c1\ud06c",
                              children: Object(W.jsx)(g.a, {
                                type: "text",
                                onChange: s,
                                value: l,
                              }),
                            }),
                        ],
                      }),
                    Object(W.jsx)(h.a.Item, {
                      name: ["file"],
                      label: "\ud30c\uc77c",
                      children: Object(W.jsx)(re.a, {
                        style: { marginBottom: 20 },
                        multiple: !0,
                        customRequest: function (e) {
                          var t = e.file;
                          return te(t);
                        },
                        maxCount: 4,
                        onChange: function (e) {
                          var t = e.file;
                          0 !== w.length
                            ? (t.status = "done")
                            : (t.status = "removed");
                        },
                        onRemove: function (e) {
                          return ce(e);
                        },
                        children: Object(W.jsx)(p.a, {
                          icon: Object(W.jsx)(se.a, {}),
                          children: "Upload",
                        }),
                      }),
                    }),
                    Object(W.jsx)(h.a.Item, {
                      name: ["image"],
                      label: "\uc774\ubbf8\uc9c0",
                      children: Object(W.jsx)(re.a, {
                        style: { marginBottom: 20 },
                        listType: "picture",
                        customRequest: function (e) {
                          var t = e.file;
                          return ee(t);
                        },
                        progress: { showInfo: !0 },
                        onChange: function (e) {
                          var t = e.file;
                          0 !== w.length
                            ? (t.status = "done")
                            : (t.status = "removed");
                        },
                        maxCount: 1,
                        onRemove: function () {
                          return ne();
                        },
                        children: Object(W.jsx)(p.a, {
                          icon: Object(W.jsx)(se.a, {}),
                          children: "Upload",
                        }),
                      }),
                    }),
                    Object(W.jsx)(h.a.Item, {
                      wrapperCol: Object(we.a)(
                        Object(we.a)({}, Ee.wrapperCol),
                        {},
                        { offset: 8 }
                      ),
                      children: Object(W.jsx)(p.a, {
                        type: "primary",
                        htmlType: "submit",
                        disabled: 0 !== K,
                        children: V
                          ? "Uploading..."
                          : K <= 0
                          ? "\uc62c\ub9ac\uae30"
                          : Object(W.jsxs)(W.Fragment, {
                              children: [
                                Object(W.jsx)(de.a, {}),
                                " \uc774\ubbf8\uc9c0 / \ud30c\uc77c \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4...",
                              ],
                            }),
                      }),
                    }),
                  ],
                }
              )
            ),
          });
        },
        Re = N.a.div(
          fe ||
            (fe = Object(_.a)([
              "\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    object-fit: contain;\n    width: 300px;\n    height: 400px;\n  }\n",
            ]))
        ),
        Me = function () {
          var e = Object(v.g)(),
            t = Object(v.i)().param,
            n = Object(v.h)().search,
            a = k.a.parse(n),
            c = a.category,
            i = a.id,
            r = Object(j.useState)(),
            o = Object(b.a)(r, 2),
            l = o[0],
            s = o[1],
            d = Object(j.useState)(),
            u = Object(b.a)(d, 2),
            O = u[0],
            m = u[1],
            f = Object(j.useState)([]),
            h = Object(b.a)(f, 2),
            p = h[0],
            x = h[1],
            y = Object(j.useState)(),
            _ = Object(b.a)(y, 2),
            N = _[0],
            $ = _[1],
            F = Object(j.useState)(),
            T = Object(b.a)(F, 2),
            E = T[0],
            R = T[1],
            M = Object(j.useState)(),
            q = Object(b.a)(M, 2),
            U = q[0],
            D = q[1],
            z = Object(oe.a)(""),
            K = Object(b.a)(z, 3),
            H = K[0],
            P = K[1],
            Q = K[2],
            G = Object(j.useState)(0),
            V = Object(b.a)(G, 2),
            X = V[0],
            Z = V[1],
            ee = Object(w.a)(C.a),
            te = Object(b.a)(ee, 2),
            ne = te[0],
            ce = te[1],
            ue = ce.loading,
            be = ce.data,
            je = ce.refetch,
            Oe = Object(B.a)(L.c, {
              onCompleted: function (e) {
                e.createImage.ok && (Z(0), je && je());
              },
            }),
            me = Object(b.a)(Oe, 1)[0],
            fe = Object(B.a)(L.g, {
              onCompleted: function (e) {
                var t = e.deleteImage,
                  n = t.ok,
                  a = t.err;
                n
                  ? (je && je(),
                    A.b.error(
                      "\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ))
                  : (console.log(a), A.b.error(a));
              },
            }),
            he = Object(b.a)(fe, 1)[0],
            ge = Object(B.a)(L.b, {
              onCompleted: function (e) {
                e.createFile.ok && (Z(0), je && je());
              },
            }),
            pe = Object(b.a)(ge, 1)[0],
            xe = Object(B.a)(L.f, {
              onCompleted: function (e) {
                var t = e.deleteFile,
                  n = t.ok,
                  a = t.err;
                n
                  ? (A.b.success(
                      "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                    je && je())
                  : (console.log(a), A.b.error(a));
              },
            }),
            ve = Object(b.a)(xe, 1)[0],
            ke = Object(B.a)(L.i, {
              onCompleted: function (n) {
                var a = n.editBoard,
                  i = a.ok,
                  r = a.err;
                i
                  ? (A.b.success(
                      "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                    ),
                    e.push({
                      pathname: "/admin/".concat(t, "/").concat(c),
                      state: { refresh: !0 },
                    }))
                  : (console.log(r),
                    A.b.error(
                      "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                    ));
              },
            }),
            we = Object(b.a)(ke, 1)[0],
            Be = Object(j.useCallback)(
              function () {
                E && E.trim() && _e("images", c, E, $);
              },
              [c, E]
            ),
            Ce = Object(j.useCallback)(
              (function () {
                var e = Object(Y.a)(
                  J.a.mark(function e(t) {
                    var n;
                    return J.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            Be(),
                              Z(X + 1),
                              (n = t.name),
                              R(t.name),
                              Se(
                                "images",
                                t,
                                c,
                                n,
                                $,
                                0,
                                Z,
                                me,
                                parseInt(i, 10)
                              );
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [c, X, Be, me, i]
            ),
            Ie = Object(j.useCallback)(
              function (e) {
                Z(1),
                  ye
                    .ref("/files/".concat(c, "/").concat(e.name))
                    .put(e)
                    .on(
                      "state_changed",
                      function (e) {},
                      function (e) {
                        return console.log(e);
                      },
                      function () {
                        ye.ref("/files/".concat(c, "/").concat(e.name))
                          .getDownloadURL()
                          .then(
                            (function () {
                              var t = Object(Y.a)(
                                J.a.mark(function t(n) {
                                  return J.a.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (
                                            x(function (t) {
                                              return [].concat(
                                                Object(ae.a)(t),
                                                [{ url: n, fileName: e.name }]
                                              );
                                            }),
                                            (t.next = 3),
                                            pe({
                                              variables: {
                                                url: n,
                                                fileName: e.name,
                                                boardId: parseInt(i, 10),
                                              },
                                              onCompleted: function (e) {
                                                var t = e.createFile,
                                                  n = t.ok,
                                                  a = t.err;
                                                n
                                                  ? (A.b.success(
                                                      "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                    ),
                                                    je && je())
                                                  : (A.b.error(
                                                      "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                    ),
                                                    console.log(a));
                                              },
                                            })
                                          );
                                        case 3:
                                          Z(X - 1);
                                        case 4:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                      }
                    );
              },
              [pe, i, c, X, je]
            ),
            Ne = Object(j.useCallback)(
              (function () {
                var e = Object(Y.a)(
                  J.a.mark(function e(t, n) {
                    return J.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              ye
                                .ref("/files/".concat(c, "/").concat(n))
                                .delete(),
                              (e.next = 3),
                              ve({ variables: { id: t } })
                            );
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              [ve, c]
            );
          return (
            Object(j.useEffect)(
              function () {
                i && ne({ variables: { id: parseInt(i, 10) } });
              },
              [i, ne]
            ),
            Object(j.useEffect)(
              function () {
                var e, t, n;
                (be &&
                  be.getBoardById &&
                  be.getBoardById.data &&
                  (s(be.getBoardById.data), Q(be.getBoardById.data.link || "")),
                (null === be ||
                void 0 === be ||
                null === (e = be.getBoardById.data) ||
                void 0 === e
                  ? void 0
                  : e.files) && m(be.getBoardById.data.files),
                null === be ||
                void 0 === be ||
                null === (t = be.getBoardById.data) ||
                void 0 === t
                  ? void 0
                  : t.images) &&
                  (D(be.getBoardById.data.images[0]),
                  R(
                    null === (n = be.getBoardById.data.images[0]) ||
                      void 0 === n
                      ? void 0
                      : n.fileName
                  ));
              },
              [be, s, Q]
            ),
            ue
              ? Object(W.jsx)("div", { children: "loading..." })
              : Object(W.jsxs)(Re, {
                  children: [
                    Object(W.jsxs)("div", {
                      className: "button-group",
                      children: [
                        Object(W.jsx)(ie, {
                          type: "ghost",
                          onClick: function () {
                            return e.goBack();
                          },
                          children: "\ub4a4\ub85c",
                        }),
                        Object(W.jsx)(ie, {
                          type: "primary",
                          disabled: 0 !== X,
                          onClick: function () {
                            return we({
                              variables: {
                                id: parseInt(i, 10),
                                link: H.includes("http")
                                  ? H
                                  : "http://".concat(H),
                              },
                            });
                          },
                          children:
                            0 === X
                              ? "\uc644\ub8cc"
                              : Object(W.jsxs)(W.Fragment, {
                                  children: [
                                    Object(W.jsx)(de.a, {}),
                                    " \ud30c\uc77c / \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub529 \uc911",
                                  ],
                                }),
                        }),
                      ],
                    }),
                    Object(W.jsxs)(I.b, {
                      bordered: !0,
                      column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                      layout: "horizontal",
                      children: [
                        Object(W.jsx)(I.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: Object(W.jsx)(g.a, {
                            placeholder:
                              (null === l || void 0 === l ? void 0 : l.link) ||
                              void 0,
                            value: H,
                            onChange: P,
                          }),
                        }),
                        Object(W.jsxs)(I.b.Item, {
                          label: "\ucca8\ubd80\ud30c\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            O && 0 !== O.length
                              ? Object(W.jsx)(W.Fragment, {
                                  children: O.map(function (e, t) {
                                    return Object(W.jsxs)(
                                      "div",
                                      {
                                        className: "attach-group",
                                        children: [
                                          Object(W.jsx)("a", {
                                            href:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.url,
                                            download: !0,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.fileName,
                                          }),
                                          Object(W.jsx)("button", {
                                            className: "attach-button",
                                            onClick: function () {
                                              return Ne(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.id,
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.fileName
                                              );
                                            },
                                            children: Object(W.jsx)(le.a, {}),
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                })
                              : 0 === p.length
                              ? Object(W.jsx)("div", {
                                  children:
                                    "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                                })
                              : Object(W.jsx)(W.Fragment, {}),
                            Object(W.jsx)(re.a, {
                              multiple: !0,
                              maxCount: 4,
                              className: "upload-list-inline",
                              customRequest: function (e) {
                                var t = e.file;
                                return Ie(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== p.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(W.jsx)(ie, {
                                icon: Object(W.jsx)(se.a, {}),
                                children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                        Object(W.jsxs)(I.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            U &&
                              Object(W.jsx)(ie, {
                                danger: !0,
                                icon: Object(W.jsx)(le.a, {}),
                                onClick: function () {
                                  _e("images", c, U.fileName, $),
                                    he({ variables: { id: U.id } });
                                },
                                children: "\uc774\ubbf8\uc9c0 \uc0ad\uc81c",
                              }),
                            Object(W.jsx)(re.a, {
                              listType: "picture",
                              customRequest: function (e) {
                                var t = e.file;
                                U && he({ variables: { id: U && U.id } }),
                                  Ce(t);
                              },
                              progress: { showInfo: !0 },
                              onChange: function (e) {
                                var t = e.file;
                                t.status = N ? "done" : "removed";
                              },
                              maxCount: 1,
                              children: Object(W.jsx)(ie, {
                                icon: Object(W.jsx)(se.a, {}),
                                children:
                                  "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                            U
                              ? Object(W.jsx)("img", {
                                  src: U.url,
                                  alt: U.fileName,
                                })
                              : Object(W.jsx)(S.a.Text, {
                                  children:
                                    "\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                                }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
          );
        },
        qe = N.a.div(he || (he = Object(_.a)([""]))),
        Ue = N.a.div(
          ge ||
            (ge = Object(_.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & .list-description {\n    margin: 8px 0;\n    width: 800px;\n  }\n\n  & .list-title {\n    display: inline-block;\n    min-width: 100px;\n  }\n\n  & .list-href {\n    margin-left: 30px;\n  }\n\n  & .button-group {\n    display: inline-block;\n    margin-left: 15px;\n  }\n\n  & .button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      color: red;\n      transition: 0.2s linear;\n    }\n  }\n\n  & .edit-input {\n    display: block;\n    width: 400px;\n    margin: 8px 0;\n  }\n\n  & .delete-button {\n    margin-left: 5px;\n  }\n",
            ]))
        ),
        De = N.a.div(
          pe ||
            (pe = Object(_.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & .input-row {\n    margin: 5px 0;\n    max-width: 800px;\n  }\n",
            ]))
        ),
        ze = n(379),
        Ke = n(196),
        He = n(407),
        Je = function () {
          var e,
            t = Object(oe.a)(""),
            n = Object(b.a)(t, 3),
            a = n[0],
            c = n[1],
            i = n[2],
            r = Object(oe.a)(""),
            o = Object(b.a)(r, 3),
            l = o[0],
            s = o[1],
            d = o[2],
            u = Object(j.useState)(!1),
            O = Object(b.a)(u, 2),
            m = O[0],
            f = O[1],
            h = Object(j.useState)(0),
            x = Object(b.a)(h, 2),
            v = x[0],
            y = x[1],
            k = Object(te.a)(C.c),
            w = k.data,
            I = k.loading,
            S = k.refetch,
            _ = Object(B.a)(L.d),
            N = Object(b.a)(_, 1)[0],
            $ = Object(B.a)(L.j),
            F = Object(b.a)($, 1)[0],
            T = Object(B.a)(L.h),
            E = Object(b.a)(T, 1)[0],
            R = Object(j.useCallback)(
              Object(Y.a)(
                J.a.mark(function e() {
                  return J.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            a.trim() && a
                              ? (l.trim() && l) ||
                                A.b.error(
                                  "\uc0ac\uc774\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"
                                )
                              : A.b.error(
                                  "\ub9c1\ud06c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"
                                ),
                            (e.next = 3),
                            N({
                              variables: {
                                url: a.includes("http")
                                  ? a
                                  : "http://".concat(a),
                                title: l,
                              },
                            }).then(function (e) {
                              var t = e.data;
                              (null === t || void 0 === t
                                ? void 0
                                : t.createLink.ok) &&
                                (i(""),
                                d(""),
                                A.b.success(
                                  "\ub9c1\ud06c\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                ));
                            })
                          );
                        case 3:
                          S(), f(!1);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [a, l, N, S, i, d]
            ),
            M = Object(j.useCallback)(
              (function () {
                var e = Object(Y.a)(
                  J.a.mark(function e(t) {
                    return J.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              E({ variables: { id: t } }).then(function (e) {
                                var t = e.data;
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.deleteLink.ok) &&
                                  A.b.success(
                                    "\ub9c1\ud06c\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                  );
                              })
                            );
                          case 2:
                            S();
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [S, E]
            ),
            q = Object(j.useCallback)(
              (function () {
                var e = Object(Y.a)(
                  J.a.mark(function e(t) {
                    return J.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              F({
                                variables: {
                                  id: t,
                                  title: l,
                                  url: a.includes("http")
                                    ? a
                                    : "http://".concat(a),
                                },
                              }).then(function (e) {
                                var t = e.data;
                                (null === t || void 0 === t
                                  ? void 0
                                  : t.editLink.ok) &&
                                  A.b.success(
                                    "\ub9c1\ud06c\uac00 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                  );
                              })
                            );
                          case 2:
                            y(0), d(""), i(""), S();
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              [l, a, F, S, y, d, i]
            );
          return I
            ? Object(W.jsx)(W.Fragment, { children: "loading..." })
            : Object(W.jsxs)(qe, {
                children: [
                  Object(W.jsx)(Ue, {
                    style: { backgroundColor: "white" },
                    children:
                      null === w ||
                      void 0 === w ||
                      null === (e = w.getLinks.data) ||
                      void 0 === e
                        ? void 0
                        : e.map(function (e, t) {
                            return Object(W.jsxs)(
                              "div",
                              {
                                children: [
                                  Object(W.jsx)(ee.a, {
                                    style: { marginTop: 5 },
                                  }),
                                  Object(W.jsxs)("div", {
                                    className: "list-description",
                                    children: [
                                      v ===
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.id)
                                        ? Object(W.jsx)(g.a, {
                                            placeholder:
                                              "\uc0ac\uc774\ud2b8 \uba85",
                                            className: "edit-input",
                                            value: l,
                                            onChange: s,
                                          })
                                        : Object(W.jsx)("span", {
                                            className: "list-title",
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.title,
                                          }),
                                      v ===
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.id)
                                        ? Object(W.jsx)(g.a, {
                                            placeholder: "\ub9c1\ud06c URL",
                                            className: "edit-input",
                                            value: a,
                                            onChange: c,
                                          })
                                        : Object(W.jsx)("a", {
                                            href:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.url,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "list-href",
                                            children:
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.url,
                                          }),
                                      Object(W.jsxs)("div", {
                                        className: "button-group",
                                        children: [
                                          Object(W.jsx)("button", {
                                            className: "button edit-button",
                                            onClick: function () {
                                              0 === v
                                                ? (i(e.url),
                                                  d(e.title),
                                                  y(e.id))
                                                : q(e.id);
                                            },
                                            children:
                                              0 === v
                                                ? Object(W.jsx)(ze.a, {})
                                                : Object(W.jsx)(Ke.a, {}),
                                          }),
                                          Object(W.jsx)("button", {
                                            className: "button delete-button",
                                            onClick: function () {
                                              return M(e.id);
                                            },
                                            children: Object(W.jsx)(le.a, {}),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Object(W.jsx)(ee.a, {
                                    style: { marginBottom: 5 },
                                  }),
                                ],
                              },
                              t
                            );
                          }),
                  }),
                  m &&
                    Object(W.jsxs)(De, {
                      children: [
                        Object(W.jsx)(g.a, {
                          placeholder: "\uc0ac\uc774\ud2b8 \uba85",
                          className: "input-row",
                          value: l,
                          onChange: s,
                        }),
                        Object(W.jsx)(g.a, {
                          placeholder: "\ub9c1\ud06c URL",
                          className: "input-row",
                          value: a,
                          onChange: c,
                        }),
                      ],
                    }),
                  Object(W.jsx)(De, {
                    style: { marginTop: 20 },
                    children: m
                      ? Object(W.jsx)(p.a, {
                          type: "primary",
                          onClick: function () {
                            return a.trim() || l.trim() ? R() : f(!1);
                          },
                          children: "\uc0dd\uc131",
                        })
                      : Object(W.jsxs)(p.a, {
                          type: "dashed",
                          onClick: function () {
                            return f(!m);
                          },
                          children: [
                            Object(W.jsx)(He.a, { style: { fontSize: 14 } }),
                            " Add Link",
                          ],
                        }),
                  }),
                ],
              });
        },
        Ye = function () {
          var e = Object(v.i)(),
            t = e.param,
            n = e.subparam;
          return Object(W.jsx)(W.Fragment, {
            children: (function (e, t) {
              switch (e) {
                case "dashboard":
                  return Object(W.jsx)(ne, {});
                case "intro":
                case "basic":
                case "major":
                case "integration":
                case "value":
                case "cooperation":
                case "achievement":
                  return t === "create-image-".concat(e)
                    ? Object(W.jsx)(We, {})
                    : t === "edit-image-".concat(e)
                    ? Object(W.jsx)(Me, {})
                    : t === "create-".concat(e)
                    ? Object(W.jsx)($e, {})
                    : t === "detail-".concat(e)
                    ? Object(W.jsx)(R, {})
                    : t === "edit-".concat(e)
                    ? Object(W.jsx)(ke, {})
                    : t.includes("storage")
                    ? Object(W.jsx)(K, {})
                    : Object(W.jsx)(Ae, {});
                case "community":
                  return t === "create-image-".concat(e)
                    ? Object(W.jsx)(We, {})
                    : t === "edit-image-".concat(e)
                    ? Object(W.jsx)(Me, {})
                    : t === "create-".concat(e)
                    ? Object(W.jsx)($e, {})
                    : t === "detail-".concat(e)
                    ? Object(W.jsx)(R, {})
                    : t === "edit-".concat(e)
                    ? Object(W.jsx)(ke, {})
                    : (t.includes("storage"), Object(W.jsx)(K, {}));
                case "sitelink":
                  return Object(W.jsx)(Je, {});
                default:
                  return;
              }
            })(t, n),
          });
        },
        Pe = n(389),
        Qe = n(54),
        Ge = n(146),
        Ve = n(408),
        Xe = n(409),
        Ze = n(410),
        et =
          (N.a.div(xe || (xe = Object(_.a)([""]))),
          N.a.div(
            ve ||
              (ve = Object(_.a)([
                "\n  width: 100vw;\n  height: 100vh;\n  & .login-form {\n    height: 700px;\n    width: 800px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & .login-input {\n    width: 300px;\n  }\n",
              ]))
          ));
      t.default = function () {
        var e = Object(Pe.a)(Qe.a),
          t = Object(v.g)(),
          n = Object(oe.a)(""),
          a = Object(b.a)(n, 3),
          c = a[0],
          i = a[1],
          r = a[2],
          o = Object(oe.a)(""),
          l = Object(b.a)(o, 3),
          s = l[0],
          d = l[1],
          u = l[2],
          y = Object(j.useState)("\ub300\uc2dc\ubcf4\ub4dc"),
          k = Object(b.a)(y, 2),
          w = k[0],
          B = k[1],
          C = Object(j.useState)("\ub300\uc2dc\ubcf4\ub4dc"),
          I = Object(b.a)(C, 2),
          S = I[0],
          _ = I[1],
          N = Object(j.useState)({ param: "dashboard", subparam: "dashboard" }),
          $ = Object(b.a)(N, 2),
          F = ($[0], $[1]),
          L = Object(j.useState)(!1),
          E = Object(b.a)(L, 2),
          R = E[0],
          M = E[1],
          q = O.a.SubMenu,
          U = m.a.Header,
          D = m.a.Content,
          z = m.a.Sider,
          K = Object(j.useCallback)(
            function () {
              "adminswe" === c && "adminswe" === s
                ? (r(""),
                  u(""),
                  Object(Ge.b)(),
                  A.b.success(
                    "\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ))
                : A.b.error(
                    "\uc544\uc774\ub514 & \uc554\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4"
                  );
            },
            [c, s, r, u]
          ),
          H = Object(j.useCallback)(function (e, t, n, a) {
            M(!0), _(t), B(e), F({ param: n, subparam: a });
          }, []),
          J = Object(j.useCallback)(function () {
            M(!1),
              _("\ub300\uc2dc\ubcf4\ub4dc"),
              B("\ub300\uc2dc\ubcf4\ub4dc"),
              F({ param: "dashboard", subparam: "dashboard" });
          }, []);
        return (
          Object(j.useEffect)(function () {
            var e = localStorage.getItem("admin");
            e && parseInt(e, 10) / 1e3 < Date.now() / 1e3 && Object(Ge.a)();
          }, []),
          Object(W.jsx)(m.a, {
            style: { minHeight: "100vh" },
            children: e
              ? Object(W.jsxs)(W.Fragment, {
                  children: [
                    Object(W.jsxs)(U, {
                      className: "header",
                      children: [
                        Object(W.jsx)("div", { className: "logo" }),
                        Object(W.jsxs)(O.a, {
                          theme: "dark",
                          mode: "horizontal",
                          style: {
                            display: "flex",
                            justifyContent: "flex-end",
                          },
                          children: [
                            Object(W.jsx)(
                              O.a.Item,
                              {
                                onClick: function () {
                                  Object(Ge.a)(), t.push("/main");
                                },
                                children:
                                  "\uba54\uc778\uc73c\ub85c \uac00\uae30",
                              },
                              1
                            ),
                            Object(W.jsxs)(
                              O.a.Item,
                              {
                                onClick: function () {
                                  return Object(Ge.a)();
                                },
                                children: [Object(W.jsx)(Ve.a, {}), " Logout"],
                              },
                              2
                            ),
                          ],
                        }),
                      ],
                    }),
                    Object(W.jsxs)(m.a, {
                      children: [
                        Object(W.jsx)(z, {
                          width: 200,
                          className: "site-layout-background",
                          children: Object(W.jsxs)(O.a, {
                            mode: "inline",
                            defaultSelectedKeys: ["dashboard"],
                            defaultOpenKeys: ["dashboard"],
                            style: { height: "100%", borderRight: 0 },
                            children: [
                              Object(W.jsx)(
                                O.a.Item,
                                {
                                  title: "\ub300\uc2dc\ubcf4\ub4dc",
                                  children: Object(W.jsx)(T.b, {
                                    to: {
                                      pathname: "/admin/dashboard/dashboard",
                                      state: { refresh: !0 },
                                    },
                                    onClick: J,
                                    children: Object(W.jsx)("span", {
                                      children: "\ub300\uc2dc\ubcf4\ub4dc",
                                    }),
                                  }),
                                },
                                "dashboard"
                              ),
                              x.map(function (e) {
                                return Object(W.jsx)(
                                  q,
                                  {
                                    title: e.ko_title,
                                    children: e.subMenu.map(function (t) {
                                      return Object(W.jsx)(
                                        O.a.Item,
                                        {
                                          children: Object(W.jsx)(T.b, {
                                            to: "/admin/"
                                              .concat(e.title, "/")
                                              .concat(t.key),
                                            onClick: function () {
                                              return H(
                                                t.ko_title,
                                                e.ko_title,
                                                e.title,
                                                t.key
                                              );
                                            },
                                            children: Object(W.jsx)("span", {
                                              children: t.ko_title,
                                            }),
                                          }),
                                        },
                                        t.key
                                      );
                                    }),
                                  },
                                  e.ko_title
                                );
                              }),
                            ],
                          }),
                        }),
                        Object(W.jsxs)(m.a, {
                          style: { padding: "0 24px 24px" },
                          children: [
                            R &&
                              Object(W.jsxs)(f.a, {
                                style: { margin: "16px 0" },
                                children: [
                                  Object(W.jsx)(f.a.Item, { children: S }),
                                  Object(W.jsx)(f.a.Item, { children: w }),
                                ],
                              }),
                            Object(W.jsx)(D, {
                              className: "site-layout-background",
                              style: { padding: 24, margin: 0, minHeight: 280 },
                              children: Object(W.jsx)(Ye, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : Object(W.jsx)(et, {
                  children: Object(W.jsxs)(h.a, {
                    name: "normal_login",
                    className: "login-form",
                    initialValues: { remember: !0 },
                    onFinish: K,
                    children: [
                      Object(W.jsx)(h.a.Item, {
                        name: "username",
                        rules: [
                          {
                            required: !0,
                            message: "Please input your Username!",
                          },
                        ],
                        children: Object(W.jsx)(g.a, {
                          prefix: Object(W.jsx)(Xe.a, {
                            className: "site-form-item-icon",
                          }),
                          placeholder: "Username",
                          value: c,
                          onChange: i,
                          className: "login-input",
                        }),
                      }),
                      Object(W.jsx)(h.a.Item, {
                        name: "password",
                        rules: [
                          {
                            required: !0,
                            message: "Please input your Password!",
                          },
                        ],
                        children: Object(W.jsx)(g.a, {
                          prefix: Object(W.jsx)(Ze.a, {
                            className: "site-form-item-icon",
                          }),
                          type: "password",
                          value: s,
                          onChange: d,
                          className: "login-input",
                          placeholder: "Password",
                        }),
                      }),
                      Object(W.jsx)(h.a.Item, {
                        children: Object(W.jsx)(p.a, {
                          type: "primary",
                          htmlType: "submit",
                          className: "login-form-button",
                          children: "Log in",
                        }),
                      }),
                    ],
                  }),
                }),
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=6.1c80c27d.chunk.js.map
