(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [29],
  {
    104: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return S;
      }),
        e.d(t, "l", function () {
          return I;
        }),
        e.d(t, "e", function () {
          return h;
        }),
        e.d(t, "j", function () {
          return B;
        }),
        e.d(t, "f", function () {
          return v;
        }),
        e.d(t, "g", function () {
          return w;
        }),
        e.d(t, "b", function () {
          return A;
        }),
        e.d(t, "c", function () {
          return x;
        }),
        e.d(t, "h", function () {
          return N;
        }),
        e.d(t, "k", function () {
          return L;
        }),
        e.d(t, "d", function () {
          return C;
        }),
        e.d(t, "i", function () {
          return q;
        });
      var r,
        a,
        i,
        o,
        c,
        d,
        l,
        u,
        p,
        s,
        b,
        g,
        $,
        j,
        f,
        O,
        y,
        m = e(94),
        k = e(548),
        S = Object(k.a)(
          r ||
            (r = Object(m.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(k.a)(
          a ||
            (a = Object(m.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        h = Object(k.a)(
          i ||
            (i = Object(m.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(k.a)(
          o ||
            (o = Object(m.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v =
          (Object(k.a)(
            c ||
              (c = Object(m.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            d ||
              (d = Object(m.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            l ||
              (l = Object(m.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        w = Object(k.a)(
          u ||
            (u = Object(m.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A = Object(k.a)(
          p ||
            (p = Object(m.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(k.a)(
          s ||
            (s = Object(m.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N =
          (Object(k.a)(
            b ||
              (b = Object(m.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            g ||
              (g = Object(m.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        L =
          (Object(k.a)(
            $ ||
              ($ = Object(m.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            j ||
              (j = Object(m.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        C = Object(k.a)(
          f ||
            (f = Object(m.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        q =
          (Object(k.a)(
            O ||
              (O = Object(m.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            y ||
              (y = Object(m.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    115: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return a;
      });
      var r = e(134);
      e(172);
      r.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var a = r.a.storage();
    },
    122: function (n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return g;
      }),
        e.d(t, "d", function () {
          return $;
        }),
        e.d(t, "a", function () {
          return j;
        }),
        e.d(t, "g", function () {
          return f;
        }),
        e.d(t, "c", function () {
          return O;
        }),
        e.d(t, "e", function () {
          return y;
        }),
        e.d(t, "f", function () {
          return m;
        });
      var r,
        a,
        i,
        o,
        c,
        d,
        l,
        u,
        p,
        s = e(94),
        b = e(548),
        g = Object(b.a)(
          r ||
            (r = Object(s.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        $ = Object(b.a)(
          a ||
            (a = Object(s.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(b.a)(
          i ||
            (i = Object(s.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(b.a)(
          o ||
            (o = Object(s.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        O = Object(b.a)(
          c ||
            (c = Object(s.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        y = Object(b.a)(
          d ||
            (d = Object(s.a)([
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(b.a)(
          l ||
            (l = Object(s.a)([
              "\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n",
            ]))
        );
      Object(b.a)(
        u ||
          (u = Object(s.a)([
            "\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
          ]))
      ),
        Object(b.a)(
          p ||
            (p = Object(s.a)([
              "\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    539: function (n, t, e) {
      "use strict";
      e.r(t);
      var r,
        a,
        i = e(94),
        o = e(114),
        c = e(89),
        d = e(112),
        l = e.n(d),
        u = e(2),
        p = e(103),
        s = e(140),
        b = e(165),
        g = e(122),
        $ = e(245),
        j = e(327),
        f = e(541),
        O = e(200),
        y = e(104),
        m = e(115),
        k = e(45),
        S = e(561),
        I = e(11);
      t.default = function () {
        var n = Object(u.useState)(""),
          t = Object(c.a)(n, 2),
          e = t[0],
          r = t[1],
          a = Object(u.useState)(),
          i = Object(c.a)(a, 2),
          d = i[0],
          p = i[1],
          v = Object(s.a)(g.e),
          w = v.data,
          A = v.loading,
          x = v.refetch,
          N = Object(b.a)(y.k, {
            onCompleted: function (n) {
              var t = n.editPopup,
                e = t.ok,
                r = t.err;
              e
                ? (k.b.success(
                    "\ud31d\uc5c5\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc124\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  x())
                : (k.b.error(r), console.log(r));
            },
          }),
          L = Object(c.a)(N, 1)[0],
          C = Object(u.useState)(!1),
          q = Object(c.a)(C, 2),
          P = q[0],
          R = q[1];
        Object(u.useEffect)(
          function () {
            var n;
            null !== w &&
            void 0 !== w &&
            null !== (n = w.getPopupStatus.data) &&
            void 0 !== n &&
            n.up
              ? r("on")
              : r("off");
          },
          [w]
        );
        var F = Object(u.useCallback)(function (n) {
            R(!0),
              m.a
                .ref("/popup/".concat(n.filename))
                .put(n)
                .on(
                  "state_changed",
                  function (n) {},
                  function (n) {
                    return console.log(n);
                  },
                  function () {
                    m.a
                      .ref("/popup/".concat(n.filename))
                      .getDownloadURL()
                      .then(
                        (function () {
                          var n = Object(o.a)(
                            l.a.mark(function n(t) {
                              return l.a.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      p(t),
                                        k.b.success(
                                          "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4, \uc124\uc815 \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694"
                                        ),
                                        R(!1);
                                    case 3:
                                    case "end":
                                      return n.stop();
                                  }
                              }, n);
                            })
                          );
                          return function (t) {
                            return n.apply(this, arguments);
                          };
                        })()
                      );
                  }
                );
          }, []),
          M = Object(u.useCallback)(
            Object(o.a)(
              l.a.mark(function n() {
                return l.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2), L({ variables: { up: e, url: d } })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [e, d, L]
          );
        return A
          ? Object(I.jsx)("div", { children: "loading..." })
          : Object(I.jsxs)(h, {
              children: [
                Object(I.jsxs)($.b, {
                  bordered: !0,
                  layout: "horizontal",
                  children: [
                    Object(I.jsx)(
                      $.b.Item,
                      {
                        label: "\uac8c\uc2dc\uc5ec\ubd80",
                        span: 4,
                        labelStyle: { width: 120 },
                        children: Object(I.jsx)(j.a, {
                          checked: "on" === e,
                          onChange: function () {
                            return r("on" === e ? "off" : "on");
                          },
                        }),
                      },
                      "\uac8c\uc2dc"
                    ),
                    Object(I.jsxs)(
                      $.b.Item,
                      {
                        label: "\uac8c\uc2dc\ubb3c",
                        labelStyle: { width: 120 },
                        children: [
                          Object(I.jsx)("span", {
                            style: { marginBottom: 20, display: "block" },
                            children:
                              "\u203b\ud31d\uc5c5 \uc774\ubbf8\uc9c0\ub294 \uac00\ub85c 500 \uc138\ub85c 700\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9 \ud574 \uc8fc\uc138\uc694.",
                          }),
                          w &&
                          w.getPopupStatus.data &&
                          "" !== w.getPopupStatus.data.url
                            ? Object(I.jsx)("img", {
                                src: w.getPopupStatus.data.url || "",
                                alt: "popupimg",
                                width: 300,
                                style: { display: "block", marginBottom: 15 },
                              })
                            : Object(I.jsx)("span", {
                                style: { display: "block", marginBottom: 15 },
                                children:
                                  "\uac8c\uc2dc\ubb3c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
                          Object(I.jsx)(f.a, {
                            style: { marginBottom: 20, display: "block" },
                            listType: "picture",
                            customRequest: function (n) {
                              var t = n.file;
                              R(!0), F(t);
                            },
                            progress: { showInfo: !0 },
                            maxCount: 0,
                            onChange: function (n) {
                              var t = n.file;
                              t.status = "" !== d ? "done" : "removed";
                            },
                            onRemove: function () {
                              m.a
                                .ref("/popup")
                                .delete()
                                .then(function () {
                                  p("");
                                })
                                .catch(function (n) {
                                  return k.b.error(n);
                                });
                            },
                            children: Object(I.jsx)(O.a, {
                              icon: Object(I.jsx)(S.a, {}),
                              children: "Upload",
                            }),
                          }),
                        ],
                      },
                      "\uac8c\uc2dc"
                    ),
                  ],
                }),
                P
                  ? Object(I.jsx)(B, {
                      type: "default",
                      disabled: !0,
                      children:
                        "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc911...",
                    })
                  : Object(I.jsx)(B, {
                      type: "primary",
                      onClick: M,
                      disabled: P,
                      children: "\uc124\uc815",
                    }),
              ],
            });
      };
      var h = p.a.div(r || (r = Object(i.a)([""]))),
        B = Object(p.a)(O.a)(a || (a = Object(i.a)(["\n  margin: 30px;\n"])));
    },
  },
]);
//# sourceMappingURL=29.dccd891f.chunk.js.map
