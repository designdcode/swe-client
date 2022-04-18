(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [30],
  {
    104: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return h;
      }),
        e.d(t, "k", function () {
          return S;
        }),
        e.d(t, "e", function () {
          return I;
        }),
        e.d(t, "i", function () {
          return v;
        }),
        e.d(t, "f", function () {
          return A;
        }),
        e.d(t, "g", function () {
          return B;
        }),
        e.d(t, "b", function () {
          return w;
        }),
        e.d(t, "c", function () {
          return x;
        }),
        e.d(t, "j", function () {
          return C;
        }),
        e.d(t, "d", function () {
          return N;
        }),
        e.d(t, "h", function () {
          return L;
        });
      var a,
        r,
        i,
        o,
        c,
        d,
        l,
        u,
        s,
        p,
        b,
        g,
        j,
        $,
        O,
        f,
        y,
        m = e(94),
        k = e(528),
        h = Object(k.a)(
          a ||
            (a = Object(m.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(k.a)(
          r ||
            (r = Object(m.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        I = Object(k.a)(
          i ||
            (i = Object(m.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object(k.a)(
          o ||
            (o = Object(m.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A =
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
        B = Object(k.a)(
          u ||
            (u = Object(m.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(k.a)(
          s ||
            (s = Object(m.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(k.a)(
          p ||
            (p = Object(m.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C =
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
          ),
          Object(k.a)(
            j ||
              (j = Object(m.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(k.a)(
            $ ||
              ($ = Object(m.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        N = Object(k.a)(
          O ||
            (O = Object(m.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        L =
          (Object(k.a)(
            f ||
              (f = Object(m.a)([
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
    114: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return r;
      });
      var a = e(133);
      e(189);
      a.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var r = a.a.storage();
    },
    121: function (n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return g;
      }),
        e.d(t, "d", function () {
          return j;
        }),
        e.d(t, "a", function () {
          return $;
        }),
        e.d(t, "g", function () {
          return O;
        }),
        e.d(t, "c", function () {
          return f;
        }),
        e.d(t, "e", function () {
          return y;
        }),
        e.d(t, "f", function () {
          return m;
        });
      var a,
        r,
        i,
        o,
        c,
        d,
        l,
        u,
        s,
        p = e(94),
        b = e(528),
        g = Object(b.a)(
          a ||
            (a = Object(p.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        inputCreatedAt\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(b.a)(
          r ||
            (r = Object(p.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        $ = Object(b.a)(
          i ||
            (i = Object(p.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        O = Object(b.a)(
          o ||
            (o = Object(p.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(b.a)(
          c ||
            (c = Object(p.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        y = Object(b.a)(
          d ||
            (d = Object(p.a)([
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n        link\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(b.a)(
          l ||
            (l = Object(p.a)([
              "\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n",
            ]))
        );
      Object(b.a)(
        u ||
          (u = Object(p.a)([
            "\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
          ]))
      ),
        Object(b.a)(
          s ||
            (s = Object(p.a)([
              "\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    519: function (n, t, e) {
      "use strict";
      e.r(t);
      var a,
        r,
        i,
        o = e(94),
        c = e(115),
        d = e(89),
        l = e(113),
        u = e.n(l),
        s = e(2),
        p = e(101),
        b = e(138),
        g = e(198),
        j = e(121),
        $ = e(255),
        O = e(330),
        f = e(474),
        y = e(521),
        m = e(216),
        k = e(104),
        h = e(114),
        S = e(45),
        I = e(541),
        v = e(126),
        A = e(11);
      t.default = function () {
        var n,
          t,
          e = Object(s.useState)(""),
          a = Object(d.a)(e, 2),
          r = a[0],
          i = a[1],
          o = Object(v.a)(""),
          l = Object(d.a)(o, 3),
          p = l[0],
          C = l[1],
          N = l[2],
          L = Object(s.useState)(),
          q = Object(d.a)(L, 2),
          P = q[0],
          R = q[1],
          F = Object(s.useState)(!1),
          M = Object(d.a)(F, 2),
          J = M[0],
          U = M[1],
          Y = Object(b.a)(j.e),
          z = Y.data,
          D = Y.loading,
          E = Y.refetch,
          K = Object(g.a)(k.j, {
            onCompleted: function (n) {
              var t = n.editPopup,
                e = t.ok,
                a = t.err;
              e
                ? (S.b.success(
                    "\ud31d\uc5c5\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc124\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  N(""),
                  U(!1),
                  E())
                : (S.b.error(a), console.log(a));
            },
          }),
          T = Object(d.a)(K, 1)[0],
          V = Object(s.useState)(!1),
          G = Object(d.a)(V, 2),
          H = G[0],
          W = G[1];
        Object(s.useEffect)(
          function () {
            var n;
            null !== z &&
            void 0 !== z &&
            null !== (n = z.getPopupStatus.data) &&
            void 0 !== n &&
            n.up
              ? i("on")
              : i("off");
          },
          [z]
        );
        var Z = Object(s.useCallback)(function (n) {
            W(!0),
              h.a
                .ref("/popup/".concat(n.filename))
                .put(n)
                .on(
                  "state_changed",
                  function (n) {},
                  function (n) {
                    return console.log(n);
                  },
                  function () {
                    h.a
                      .ref("/popup/".concat(n.filename))
                      .getDownloadURL()
                      .then(
                        (function () {
                          var n = Object(c.a)(
                            u.a.mark(function n(t) {
                              return u.a.wrap(function (n) {
                                for (;;)
                                  switch ((n.prev = n.next)) {
                                    case 0:
                                      R(t),
                                        S.b.success(
                                          "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4, \uc124\uc815 \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694"
                                        ),
                                        W(!1);
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
          _ = Object(s.useCallback)(
            Object(c.a)(
              u.a.mark(function n() {
                return u.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          T({
                            variables: {
                              up: r,
                              url: P,
                              link: p.includes("http")
                                ? p
                                : "http://".concat(p),
                            },
                          })
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [r, P, T, p]
          );
        return D
          ? Object(A.jsx)("div", { children: "loading..." })
          : Object(A.jsxs)(B, {
              children: [
                Object(A.jsxs)($.b, {
                  bordered: !0,
                  layout: "horizontal",
                  children: [
                    Object(A.jsx)(
                      $.b.Item,
                      {
                        label: "\uac8c\uc2dc\uc5ec\ubd80",
                        span: 4,
                        labelStyle: { width: 120 },
                        children: Object(A.jsx)(O.a, {
                          checked: "on" === r,
                          onChange: function () {
                            return i("on" === r ? "off" : "on");
                          },
                        }),
                      },
                      "\uac8c\uc2dc"
                    ),
                    Object(A.jsxs)(
                      $.b.Item,
                      {
                        label: "\ud31d\uc5c5\ub9c1\ud06c",
                        span: 4,
                        labelStyle: { width: 120 },
                        children: [
                          Object(A.jsxs)(x, {
                            children: [
                              Object(A.jsx)("span", {
                                className: "edit-link",
                                children: "\ub9c1\ud06c \uc218\uc815",
                              }),
                              Object(A.jsx)(O.a, {
                                checked: J,
                                onChange: function () {
                                  return U(!J);
                                },
                              }),
                            ],
                          }),
                          J
                            ? Object(A.jsx)(f.a, {
                                style: { width: 500 },
                                placeholder: "".concat(
                                  null === z ||
                                    void 0 === z ||
                                    null === (n = z.getPopupStatus.data) ||
                                    void 0 === n
                                    ? void 0
                                    : n.link
                                ),
                                value: p,
                                onChange: C,
                              })
                            : Object(A.jsxs)("span", {
                                children: [
                                  "\ud604\uc7ac \uc124\uc815\ub41c \ub9c1\ud06c: ",
                                  null === z ||
                                  void 0 === z ||
                                  null === (t = z.getPopupStatus.data) ||
                                  void 0 === t
                                    ? void 0
                                    : t.link,
                                ],
                              }),
                        ],
                      },
                      "\ub9c1\ud06c"
                    ),
                    Object(A.jsxs)(
                      $.b.Item,
                      {
                        label: "\uac8c\uc2dc\ubb3c",
                        labelStyle: { width: 120 },
                        children: [
                          Object(A.jsx)("span", {
                            style: { marginBottom: 20, display: "block" },
                            children:
                              "\u203b\ud31d\uc5c5 \uc774\ubbf8\uc9c0\ub294 \uac00\ub85c 500 \uc138\ub85c 700\uc758 \uc774\ubbf8\uc9c0\ub97c \uc0ac\uc6a9 \ud574 \uc8fc\uc138\uc694.",
                          }),
                          z &&
                          z.getPopupStatus.data &&
                          "" !== z.getPopupStatus.data.url
                            ? Object(A.jsx)("img", {
                                src: z.getPopupStatus.data.url || "",
                                alt: "popupimg",
                                width: 300,
                                style: { display: "block", marginBottom: 15 },
                              })
                            : Object(A.jsx)("span", {
                                style: { display: "block", marginBottom: 15 },
                                children:
                                  "\uac8c\uc2dc\ubb3c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
                          Object(A.jsx)(y.a, {
                            style: { marginBottom: 20, display: "block" },
                            listType: "picture",
                            customRequest: function (n) {
                              var t = n.file;
                              W(!0), Z(t);
                            },
                            progress: { showInfo: !0 },
                            maxCount: 0,
                            onChange: function (n) {
                              var t = n.file;
                              t.status = "" !== P ? "done" : "removed";
                            },
                            onRemove: function () {
                              h.a
                                .ref("/popup")
                                .delete()
                                .then(function () {
                                  R("");
                                })
                                .catch(function (n) {
                                  return S.b.error(n);
                                });
                            },
                            children: Object(A.jsx)(m.a, {
                              icon: Object(A.jsx)(I.a, {}),
                              children: "Upload",
                            }),
                          }),
                        ],
                      },
                      "\uac8c\uc2dc"
                    ),
                  ],
                }),
                H
                  ? Object(A.jsx)(w, {
                      type: "default",
                      disabled: !0,
                      children:
                        "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\uc911...",
                    })
                  : Object(A.jsx)(w, {
                      type: "primary",
                      onClick: _,
                      disabled: H,
                      children: "\uc124\uc815",
                    }),
              ],
            });
      };
      var B = p.a.div(a || (a = Object(o.a)([""]))),
        w = Object(p.a)(m.a)(r || (r = Object(o.a)(["\n  margin: 30px;\n"]))),
        x = p.a.div(
          i ||
            (i = Object(o.a)([
              "\n  margin: 10px 0;\n  & .edit-link {\n    margin-right: 10px;\n  }\n",
            ]))
        );
    },
  },
]);
//# sourceMappingURL=30.151441e1.chunk.js.map
