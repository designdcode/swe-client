(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [15],
  {
    110: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return y;
      }),
        t.d(e, "k", function () {
          return h;
        }),
        t.d(e, "e", function () {
          return $;
        }),
        t.d(e, "i", function () {
          return p;
        }),
        t.d(e, "f", function () {
          return x;
        }),
        t.d(e, "g", function () {
          return k;
        }),
        t.d(e, "b", function () {
          return v;
        }),
        t.d(e, "c", function () {
          return I;
        }),
        t.d(e, "d", function () {
          return S;
        }),
        t.d(e, "h", function () {
          return B;
        }),
        t.d(e, "j", function () {
          return w;
        });
      var r,
        i,
        a,
        c,
        o,
        d,
        l,
        u,
        s,
        j,
        b,
        f,
        g,
        O = t(99),
        m = t(402),
        y = Object(m.a)(
          r ||
            (r = Object(O.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        h = Object(m.a)(
          i ||
            (i = Object(O.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        $ = Object(m.a)(
          a ||
            (a = Object(O.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        p = Object(m.a)(
          c ||
            (c = Object(O.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object(m.a)(
            o ||
              (o = Object(O.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(m.a)(
            d ||
              (d = Object(O.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(m.a)(
            l ||
              (l = Object(O.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(m.a)(
          u ||
            (u = Object(O.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object(m.a)(
          s ||
            (s = Object(O.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(m.a)(
          j ||
            (j = Object(O.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(m.a)(
          b ||
            (b = Object(O.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(m.a)(
          f ||
            (f = Object(O.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(m.a)(
          g ||
            (g = Object(O.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    119: function (n, e, t) {
      n.exports = t(126);
    },
    120: function (n, e, t) {
      "use strict";
      function r(n, e, t, r, i, a, c) {
        try {
          var o = n[a](c),
            d = o.value;
        } catch (l) {
          return void t(l);
        }
        o.done ? e(d) : Promise.resolve(d).then(r, i);
      }
      function i(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (i, a) {
            var c = n.apply(e, t);
            function o(n) {
              r(c, i, a, o, d, "next", n);
            }
            function d(n) {
              r(c, i, a, o, d, "throw", n);
            }
            o(void 0);
          });
        };
      }
      t.d(e, "a", function () {
        return i;
      });
    },
    122: function (n, e, t) {
      "use strict";
      t.d(e, "b", function () {
        return u;
      }),
        t.d(e, "d", function () {
          return s;
        }),
        t.d(e, "a", function () {
          return j;
        }),
        t.d(e, "e", function () {
          return b;
        }),
        t.d(e, "c", function () {
          return f;
        });
      var r,
        i,
        a,
        c,
        o,
        d = t(99),
        l = t(402),
        u = Object(l.a)(
          r ||
            (r = Object(d.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        s = Object(l.a)(
          i ||
            (i = Object(d.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(l.a)(
          a ||
            (a = Object(d.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(l.a)(
          c ||
            (c = Object(d.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(l.a)(
          o ||
            (o = Object(d.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    138: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return r;
      });
      var r = function (n) {
        var e = new Date(1e3 * Math.floor(parseInt(n, 10) / 1e3));
        return (
          e.getFullYear() +
          "-" +
          (e.getMonth() + 1 >= 10
            ? e.getMonth() + 1
            : "0".concat(e.getMonth() + 1)) +
          "-" +
          (e.getDate() >= 10 ? e.getDate() : "0".concat(e.getDate()))
        );
      };
    },
    158: function (n, e, t) {
      n.exports = t(126);
    },
    384: function (n, e, t) {
      "use strict";
      var r = t(8),
        i = t(93),
        a = t(2),
        c = t(92),
        o = t.n(c),
        d = t(160),
        l = function (n, e) {
          var t = {};
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) &&
              e.indexOf(r) < 0 &&
              (t[r] = n[r]);
          if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(n); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, r[i]) &&
                (t[r[i]] = n[r[i]]);
          }
          return t;
        };
      e.a = function (n) {
        return a.createElement(d.a, null, function (e) {
          var t,
            c = e.getPrefixCls,
            d = e.direction,
            u = n.prefixCls,
            s = n.type,
            j = void 0 === s ? "horizontal" : s,
            b = n.orientation,
            f = void 0 === b ? "center" : b,
            g = n.className,
            O = n.children,
            m = n.dashed,
            y = n.plain,
            h = l(n, [
              "prefixCls",
              "type",
              "orientation",
              "className",
              "children",
              "dashed",
              "plain",
            ]),
            $ = c("divider", u),
            p = f.length > 0 ? "-".concat(f) : f,
            x = !!O,
            k = o()(
              $,
              "".concat($, "-").concat(j),
              ((t = {}),
              Object(i.a)(t, "".concat($, "-with-text"), x),
              Object(i.a)(t, "".concat($, "-with-text").concat(p), x),
              Object(i.a)(t, "".concat($, "-dashed"), !!m),
              Object(i.a)(t, "".concat($, "-plain"), !!y),
              Object(i.a)(t, "".concat($, "-rtl"), "rtl" === d),
              t),
              g
            );
          return a.createElement(
            "div",
            Object(r.a)({ className: k }, h, { role: "separator" }),
            O &&
              a.createElement(
                "span",
                { className: "".concat($, "-inner-text") },
                O
              )
          );
        });
      };
    },
    408: function (n, e, t) {
      "use strict";
      t.r(e);
      var r,
        i,
        a,
        c,
        o = t(119),
        d = t.n(o),
        l = t(120),
        u = t(114),
        s = t(2),
        j = t(99),
        b = t(111),
        f = t(251).a,
        g = t(356).a,
        O = b.a.div(r || (r = Object(j.a)([""]))),
        m = Object(b.a)(f)(i || (i = Object(j.a)(["\n  height: 300px;\n"]))),
        y = b.a.span(
          a ||
            (a = Object(j.a)([
              "\n  cursor: pointer;\n  &:hover {\n    transition: 0.2s linear;\n    color: #438ef7;\n  }\n",
            ]))
        ),
        h = Object(b.a)(g)(
          c ||
            (c = Object(j.a)([
              "\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        $ = t(397),
        p = t(401),
        x = t(384),
        k = t(177),
        v = t(188),
        I = t(266),
        S = t(122),
        B = t(260),
        w = t.n(B),
        N = t(5),
        A = t(53),
        L = t(110),
        F = t(52),
        M = t(138),
        C = t(13);
      e.default = function () {
        var n = Object(v.a)(S.a),
          e = n.data,
          t = n.loading,
          r = n.refetch,
          i = n.error,
          a = Object(v.a)(S.d),
          c = a.data,
          o = a.loading,
          j = a.refetch,
          b = a.error,
          f = Object(N.h)().state,
          B = Object(s.useState)(),
          E = Object(u.a)(B, 2),
          K = E[0],
          P = E[1],
          q = Object(s.useState)(),
          D = Object(u.a)(q, 2),
          z = D[0],
          H = D[1],
          T = Object(s.useState)(),
          J = Object(u.a)(T, 2),
          U = J[0],
          Y = J[1],
          G = Object(I.a)(L.h),
          Q = Object(u.a)(G, 1)[0];
        Object(s.useEffect)(
          function () {
            (null === e || void 0 === e ? void 0 : e.getBoard.data) &&
              (P(
                e.getBoard.data
                  .filter(function (n) {
                    return n.category.includes("community-notice");
                  })
                  .slice(0, 5)
              ),
              H(
                e.getBoard.data
                  .filter(function (n) {
                    return n.category.includes("community-administration");
                  })
                  .slice(0, 5)
              ));
          },
          [e]
        ),
          Object(s.useEffect)(
            function () {
              (null === c || void 0 === c ? void 0 : c.getLinks.data) &&
                Y(c.getLinks.data);
            },
            [c]
          ),
          Object(s.useEffect)(
            function () {
              var n = function () {
                r && r(), j && j();
              };
              return (
                f && f.refresh && n(),
                function () {
                  return n();
                }
              );
            },
            [r, f, j]
          );
        var R = Object(s.useCallback)(
          (function () {
            var n = Object(l.a)(
              d.a.mark(function n(e) {
                return d.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          Q({ variables: { id: e } }).then(function (n) {
                            var e = n.data;
                            (null === e || void 0 === e
                              ? void 0
                              : e.deleteLink.ok) &&
                              F.b.success(
                                "\ub9c1\ud06c\uac00 \uc0ad\uc81c \ub418\uc5c7\uc2b5\ub2c8\ub2e4"
                              );
                          })
                        );
                      case 2:
                        r(), j();
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e) {
              return n.apply(this, arguments);
            };
          })(),
          [r, Q, j]
        );
        return (
          i && console.error(i),
          b && console.error(b),
          Object(C.jsxs)(O, {
            children: [
              t
                ? Object(C.jsx)(C.Fragment, { children: "loading..." })
                : Object(C.jsxs)(g, {
                    gutter: [30, 40],
                    justify: "space-between",
                    children: [
                      Object(C.jsx)(m, {
                        span: 11,
                        children: Object(C.jsxs)($.a, {
                          title: function () {
                            return Object(C.jsx)(p.a.Title, {
                              level: 4,
                              children: "\uacf5\uc9c0\uc0ac\ud56d",
                            });
                          },
                          dataSource: K,
                          showHeader: !1,
                          rowKey: "noticeid",
                          pagination: !1,
                          size: "middle",
                          children: [
                            Object(C.jsx)(
                              w.a,
                              {
                                dataIndex: "title",
                                align: "left",
                                ellipsis: !0,
                                render: function (n, e, t) {
                                  return Object(C.jsx)(
                                    y,
                                    {
                                      children: Object(C.jsx)(A.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(e.category, "&id=")
                                          .concat(e.id),
                                        children: n,
                                      }),
                                    },
                                    t
                                  );
                                },
                              },
                              "noticesubid"
                            ),
                            Object(C.jsx)(
                              w.a,
                              {
                                dataIndex: "createdAt",
                                align: "right",
                                render: function (n, e, t) {
                                  return Object(C.jsx)(
                                    "span",
                                    {
                                      children: Object(C.jsx)(A.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(e.category, "&id=")
                                          .concat(e.id),
                                        children: Object(M.a)(n),
                                      }),
                                    },
                                    t
                                  );
                                },
                              },
                              "noticetime"
                            ),
                          ],
                        }),
                      }),
                      Object(C.jsx)(m, {
                        span: 11,
                        children: Object(C.jsxs)($.a, {
                          title: function () {
                            return Object(C.jsx)(p.a.Title, {
                              level: 4,
                              children: "\ud559\uc0ac\uacf5\uc9c0",
                            });
                          },
                          dataSource: z,
                          showHeader: !1,
                          rowKey: "admissionkey",
                          pagination: !1,
                          size: "middle",
                          children: [
                            Object(C.jsx)(
                              w.a,
                              {
                                dataIndex: "title",
                                align: "left",
                                ellipsis: !0,
                                render: function (n, e, t) {
                                  return Object(C.jsx)(
                                    y,
                                    {
                                      children: Object(C.jsx)(A.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(e.category, "&id=")
                                          .concat(e.id),
                                        children: n,
                                      }),
                                    },
                                    t
                                  );
                                },
                              },
                              "subadmissionkey"
                            ),
                            Object(C.jsx)(
                              w.a,
                              {
                                dataIndex: "createdAt",
                                align: "right",
                                render: function (n, e, t) {
                                  return Object(C.jsx)(
                                    "span",
                                    {
                                      children: Object(C.jsx)(A.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(e.category, "&id=")
                                          .concat(e.id),
                                        children: Object(M.a)(n),
                                      }),
                                    },
                                    t
                                  );
                                },
                              },
                              "subadmissionkeydate"
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
              Object(C.jsx)(x.a, {}),
              Object(C.jsxs)(h, {
                children: [
                  Object(C.jsx)(p.a.Title, {
                    level: 4,
                    children: "\uc0ac\uc774\ud2b8 \ub9c1\ud06c",
                  }),
                  o
                    ? Object(C.jsx)(C.Fragment, { children: "loading..." })
                    : Object(C.jsxs)($.a, {
                        showHeader: !1,
                        dataSource: U,
                        pagination: !1,
                        rowKey: "linkKey",
                        children: [
                          Object(C.jsx)(
                            w.a,
                            {
                              dataIndex: "title",
                              align: "left",
                              render: function (n) {
                                return Object(C.jsx)(
                                  "span",
                                  { children: n },
                                  "first"
                                );
                              },
                            },
                            "linkKey0"
                          ),
                          Object(C.jsx)(
                            w.a,
                            {
                              dataIndex: "url",
                              align: "center",
                              render: function (n) {
                                return Object(C.jsx)(
                                  "span",
                                  { children: n },
                                  "second"
                                );
                              },
                            },
                            "linkKey1"
                          ),
                          Object(C.jsx)(
                            w.a,
                            {
                              dataIndex: "url",
                              align: "right",
                              render: function (n, e) {
                                return Object(C.jsxs)(
                                  "div",
                                  {
                                    children: [
                                      Object(C.jsx)("a", {
                                        href: "".concat(n),
                                        children: Object(C.jsx)(k.a, {
                                          children: "\ubc14\ub85c\uac00\uae30",
                                        }),
                                      }),
                                      Object(C.jsx)(k.a, {
                                        danger: !0,
                                        onClick: function () {
                                          return R(e.id);
                                        },
                                        style: { marginLeft: 15 },
                                        children: "\ub9c1\ud06c\uc0ad\uc81c",
                                      }),
                                    ],
                                  },
                                  "third"
                                );
                              },
                            },
                            "linkKey2"
                          ),
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=15.98691024.chunk.js.map
