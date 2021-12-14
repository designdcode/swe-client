(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [22],
  {
    110: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return $;
      }),
        e.d(t, "k", function () {
          return p;
        }),
        e.d(t, "e", function () {
          return k;
        }),
        e.d(t, "i", function () {
          return h;
        }),
        e.d(t, "f", function () {
          return v;
        }),
        e.d(t, "g", function () {
          return x;
        }),
        e.d(t, "b", function () {
          return y;
        }),
        e.d(t, "c", function () {
          return N;
        }),
        e.d(t, "d", function () {
          return S;
        }),
        e.d(t, "h", function () {
          return I;
        }),
        e.d(t, "j", function () {
          return B;
        });
      var i,
        r,
        a,
        c,
        d,
        l,
        o,
        u,
        s,
        b,
        j,
        g,
        O,
        f = e(99),
        m = e(402),
        $ = Object(m.a)(
          i ||
            (i = Object(f.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        p = Object(m.a)(
          r ||
            (r = Object(f.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        k = Object(m.a)(
          a ||
            (a = Object(f.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        h = Object(m.a)(
          c ||
            (c = Object(f.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v =
          (Object(m.a)(
            d ||
              (d = Object(f.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(m.a)(
            l ||
              (l = Object(f.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(m.a)(
            o ||
              (o = Object(f.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        x = Object(m.a)(
          u ||
            (u = Object(f.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y = Object(m.a)(
          s ||
            (s = Object(f.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(m.a)(
          b ||
            (b = Object(f.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(m.a)(
          j ||
            (j = Object(f.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(m.a)(
          g ||
            (g = Object(f.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(m.a)(
          O ||
            (O = Object(f.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    122: function (n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return u;
      }),
        e.d(t, "d", function () {
          return s;
        }),
        e.d(t, "a", function () {
          return b;
        }),
        e.d(t, "e", function () {
          return j;
        }),
        e.d(t, "c", function () {
          return g;
        });
      var i,
        r,
        a,
        c,
        d,
        l = e(99),
        o = e(402),
        u = Object(o.a)(
          i ||
            (i = Object(l.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        s = Object(o.a)(
          r ||
            (r = Object(l.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(o.a)(
          a ||
            (a = Object(l.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(o.a)(
          c ||
            (c = Object(l.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        g = Object(o.a)(
          d ||
            (d = Object(l.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    415: function (n, t, e) {
      "use strict";
      e.r(t);
      var i,
        r,
        a,
        c = e(119),
        d = e.n(c),
        l = e(120),
        o = e(114),
        u = e(99),
        s = e(111),
        b = s.a.div(i || (i = Object(u.a)([""]))),
        j = s.a.div(
          r ||
            (r = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  & .list-description {\n    margin: 8px 0;\n    width: 800px;\n  }\n\n  & .list-title {\n    display: inline-block;\n    min-width: 100px;\n  }\n\n  & .list-href {\n    margin-left: 30px;\n  }\n\n  & .button-group {\n    display: inline-block;\n    margin-left: 15px;\n  }\n\n  & .button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n\n    &:hover {\n      color: red;\n      transition: 0.2s linear;\n    }\n  }\n\n  & .edit-input {\n    display: block;\n    width: 400px;\n    margin: 8px 0;\n  }\n\n  & .delete-button {\n    margin-left: 5px;\n  }\n",
            ]))
        ),
        g = s.a.div(
          a ||
            (a = Object(u.a)([
              "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  & .input-row {\n    margin: 5px 0;\n    max-width: 800px;\n  }\n",
            ]))
        ),
        O = e(384),
        f = e(403),
        m = e(177),
        $ = e(132),
        p = e(188),
        k = e(266),
        h = e(122),
        v = e(110),
        x = e(273),
        y = e(150),
        N = e(274),
        S = e(420),
        I = e(2),
        B = e(52),
        w = e(13);
      t.default = function () {
        var n,
          t = Object($.a)(""),
          e = Object(o.a)(t, 3),
          i = e[0],
          r = e[1],
          a = e[2],
          c = Object($.a)(""),
          u = Object(o.a)(c, 3),
          s = u[0],
          L = u[1],
          A = u[2],
          C = Object(I.useState)(!1),
          F = Object(o.a)(C, 2),
          q = F[0],
          M = F[1],
          U = Object(I.useState)(0),
          J = Object(o.a)(U, 2),
          R = J[0],
          T = J[1],
          z = Object(p.a)(h.d),
          _ = z.data,
          D = z.loading,
          E = z.refetch,
          G = Object(k.a)(v.d),
          H = Object(o.a)(G, 1)[0],
          K = Object(k.a)(v.j),
          P = Object(o.a)(K, 1)[0],
          Q = Object(k.a)(v.h),
          V = Object(o.a)(Q, 1)[0],
          W = Object(I.useCallback)(
            Object(l.a)(
              d.a.mark(function n() {
                return d.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          i.trim() && i
                            ? (s.trim() && s) ||
                              B.b.error(
                                "\uc0ac\uc774\ud2b8 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694"
                              )
                            : B.b.error(
                                "\ub9c1\ud06c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694"
                              ),
                          (n.next = 3),
                          H({
                            variables: {
                              url: i.includes("http") ? i : "http://".concat(i),
                              title: s,
                            },
                          }).then(function (n) {
                            var t = n.data;
                            (null === t || void 0 === t
                              ? void 0
                              : t.createLink.ok) &&
                              (a(""),
                              A(""),
                              B.b.success(
                                "\ub9c1\ud06c\uac00 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                              ));
                          })
                        );
                      case 3:
                        E(), M(!1);
                      case 5:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [i, s, H, E, a, A]
          ),
          X = Object(I.useCallback)(
            (function () {
              var n = Object(l.a)(
                d.a.mark(function n(t) {
                  return d.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            V({ variables: { id: t } }).then(function (n) {
                              var t = n.data;
                              (null === t || void 0 === t
                                ? void 0
                                : t.deleteLink.ok) &&
                                B.b.success(
                                  "\ub9c1\ud06c\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                );
                            })
                          );
                        case 2:
                          E();
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
            })(),
            [E, V]
          ),
          Y = Object(I.useCallback)(
            (function () {
              var n = Object(l.a)(
                d.a.mark(function n(t) {
                  return d.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            P({
                              variables: {
                                id: t,
                                title: s,
                                url: i.includes("http")
                                  ? i
                                  : "http://".concat(i),
                              },
                            }).then(function (n) {
                              var t = n.data;
                              (null === t || void 0 === t
                                ? void 0
                                : t.editLink.ok) &&
                                B.b.success(
                                  "\ub9c1\ud06c\uac00 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                );
                            })
                          );
                        case 2:
                          T(0), A(""), a(""), E();
                        case 6:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (t) {
                return n.apply(this, arguments);
              };
            })(),
            [s, i, P, E, T, A, a]
          );
        return D
          ? Object(w.jsx)(w.Fragment, { children: "loading..." })
          : Object(w.jsxs)(b, {
              children: [
                Object(w.jsx)(j, {
                  style: { backgroundColor: "white" },
                  children:
                    null === _ ||
                    void 0 === _ ||
                    null === (n = _.getLinks.data) ||
                    void 0 === n
                      ? void 0
                      : n.map(function (n, t) {
                          return Object(w.jsxs)(
                            "div",
                            {
                              children: [
                                Object(w.jsx)(O.a, { style: { marginTop: 5 } }),
                                Object(w.jsxs)("div", {
                                  className: "list-description",
                                  children: [
                                    R ===
                                    (null === n || void 0 === n ? void 0 : n.id)
                                      ? Object(w.jsx)(f.a, {
                                          placeholder:
                                            "\uc0ac\uc774\ud2b8 \uba85",
                                          className: "edit-input",
                                          value: s,
                                          onChange: L,
                                        })
                                      : Object(w.jsx)("span", {
                                          className: "list-title",
                                          children:
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.title,
                                        }),
                                    R ===
                                    (null === n || void 0 === n ? void 0 : n.id)
                                      ? Object(w.jsx)(f.a, {
                                          placeholder: "\ub9c1\ud06c URL",
                                          className: "edit-input",
                                          value: i,
                                          onChange: r,
                                        })
                                      : Object(w.jsx)("a", {
                                          href:
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.url,
                                          target: "_blank",
                                          rel: "noreferrer",
                                          className: "list-href",
                                          children:
                                            null === n || void 0 === n
                                              ? void 0
                                              : n.url,
                                        }),
                                    Object(w.jsxs)("div", {
                                      className: "button-group",
                                      children: [
                                        Object(w.jsx)("button", {
                                          className: "button edit-button",
                                          onClick: function () {
                                            0 === R
                                              ? (a(n.url), A(n.title), T(n.id))
                                              : Y(n.id);
                                          },
                                          children:
                                            0 === R
                                              ? Object(w.jsx)(x.a, {})
                                              : Object(w.jsx)(y.a, {}),
                                        }),
                                        Object(w.jsx)("button", {
                                          className: "button delete-button",
                                          onClick: function () {
                                            return X(n.id);
                                          },
                                          children: Object(w.jsx)(N.a, {}),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(w.jsx)(O.a, {
                                  style: { marginBottom: 5 },
                                }),
                              ],
                            },
                            t
                          );
                        }),
                }),
                q &&
                  Object(w.jsxs)(g, {
                    children: [
                      Object(w.jsx)(f.a, {
                        placeholder: "\uc0ac\uc774\ud2b8 \uba85",
                        className: "input-row",
                        value: s,
                        onChange: L,
                      }),
                      Object(w.jsx)(f.a, {
                        placeholder: "\ub9c1\ud06c URL",
                        className: "input-row",
                        value: i,
                        onChange: r,
                      }),
                    ],
                  }),
                Object(w.jsx)(g, {
                  style: { marginTop: 20 },
                  children: q
                    ? Object(w.jsx)(m.a, {
                        type: "primary",
                        onClick: function () {
                          return i.trim() || s.trim() ? W() : M(!1);
                        },
                        children: "\uc0dd\uc131",
                      })
                    : Object(w.jsxs)(m.a, {
                        type: "dashed",
                        onClick: function () {
                          return M(!q);
                        },
                        children: [
                          Object(w.jsx)(S.a, { style: { fontSize: 14 } }),
                          " Add Link",
                        ],
                      }),
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=22.c9b8d8b2.chunk.js.map
