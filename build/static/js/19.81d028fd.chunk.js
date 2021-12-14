(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [19],
  {
    110: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "k", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return h;
        }),
        n.d(t, "i", function () {
          return $;
        }),
        n.d(t, "f", function () {
          return v;
        }),
        n.d(t, "g", function () {
          return k;
        }),
        n.d(t, "b", function () {
          return x;
        }),
        n.d(t, "c", function () {
          return S;
        }),
        n.d(t, "d", function () {
          return I;
        }),
        n.d(t, "h", function () {
          return B;
        }),
        n.d(t, "j", function () {
          return N;
        });
      var a,
        r,
        c,
        i,
        l,
        o,
        d,
        s,
        u,
        b,
        m,
        j,
        g,
        f = n(99),
        O = n(402),
        y = Object(O.a)(
          a ||
            (a = Object(f.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        p = Object(O.a)(
          r ||
            (r = Object(f.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        h = Object(O.a)(
          c ||
            (c = Object(f.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(O.a)(
          i ||
            (i = Object(f.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v =
          (Object(O.a)(
            l ||
              (l = Object(f.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(O.a)(
            o ||
              (o = Object(f.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(O.a)(
            d ||
              (d = Object(f.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(O.a)(
          s ||
            (s = Object(f.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(O.a)(
          u ||
            (u = Object(f.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(O.a)(
          b ||
            (b = Object(f.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(O.a)(
          m ||
            (m = Object(f.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(O.a)(
          j ||
            (j = Object(f.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(O.a)(
          g ||
            (g = Object(f.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    122: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "e", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return j;
        });
      var a,
        r,
        c,
        i,
        l,
        o = n(99),
        d = n(402),
        s = Object(d.a)(
          a ||
            (a = Object(o.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        u = Object(d.a)(
          r ||
            (r = Object(o.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(d.a)(
          c ||
            (c = Object(o.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(d.a)(
          i ||
            (i = Object(o.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(d.a)(
          l ||
            (l = Object(o.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    138: function (e, t, n) {
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
    208: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var a = n(93),
        r = n(94),
        c = n(100),
        i = n(2),
        l = n(92),
        o = n.n(l),
        d = n(115),
        s = n(139),
        u = n(107),
        b = n(160),
        m = n(8);
      function j(e) {
        return void 0 !== e && null !== e;
      }
      var g = function (e) {
        var t,
          n = e.itemPrefixCls,
          r = e.component,
          c = e.span,
          l = e.className,
          d = e.style,
          s = e.labelStyle,
          u = e.contentStyle,
          b = e.bordered,
          m = e.label,
          g = e.content,
          f = e.colon,
          O = r;
        return b
          ? i.createElement(
              O,
              {
                className: o()(
                  ((t = {}),
                  Object(a.a)(t, "".concat(n, "-item-label"), j(m)),
                  Object(a.a)(t, "".concat(n, "-item-content"), j(g)),
                  t),
                  l
                ),
                style: d,
                colSpan: c,
              },
              j(m) && i.createElement("span", { style: s }, m),
              j(g) && i.createElement("span", { style: u }, g)
            )
          : i.createElement(
              O,
              {
                className: o()("".concat(n, "-item"), l),
                style: d,
                colSpan: c,
              },
              i.createElement(
                "div",
                { className: "".concat(n, "-item-container") },
                m &&
                  i.createElement(
                    "span",
                    {
                      className: o()(
                        "".concat(n, "-item-label"),
                        Object(a.a)({}, "".concat(n, "-item-no-colon"), !f)
                      ),
                      style: s,
                    },
                    m
                  ),
                g &&
                  i.createElement(
                    "span",
                    { className: o()("".concat(n, "-item-content")), style: u },
                    g
                  )
              )
            );
      };
      function f(e, t, n) {
        var a = t.colon,
          r = t.prefixCls,
          c = t.bordered,
          l = n.component,
          o = n.type,
          d = n.showLabel,
          s = n.showContent,
          u = n.labelStyle,
          b = n.contentStyle;
        return e.map(function (e, t) {
          var n = e.props,
            j = n.label,
            f = n.children,
            O = n.prefixCls,
            y = void 0 === O ? r : O,
            p = n.className,
            h = n.style,
            $ = n.labelStyle,
            v = n.contentStyle,
            k = n.span,
            x = void 0 === k ? 1 : k,
            S = e.key;
          return "string" === typeof l
            ? i.createElement(g, {
                key: "".concat(o, "-").concat(S || t),
                className: p,
                style: h,
                labelStyle: Object(m.a)(Object(m.a)({}, u), $),
                contentStyle: Object(m.a)(Object(m.a)({}, b), v),
                span: x,
                colon: a,
                component: l,
                itemPrefixCls: y,
                bordered: c,
                label: d ? j : null,
                content: s ? f : null,
              })
            : [
                i.createElement(g, {
                  key: "label-".concat(S || t),
                  className: p,
                  style: Object(m.a)(Object(m.a)(Object(m.a)({}, u), h), $),
                  span: 1,
                  colon: a,
                  component: l[0],
                  itemPrefixCls: y,
                  bordered: c,
                  label: j,
                }),
                i.createElement(g, {
                  key: "content-".concat(S || t),
                  className: p,
                  style: Object(m.a)(Object(m.a)(Object(m.a)({}, b), h), v),
                  span: 2 * x - 1,
                  component: l[1],
                  itemPrefixCls: y,
                  bordered: c,
                  content: f,
                }),
              ];
        });
      }
      var O = function (e) {
          var t = i.useContext(h),
            n = e.prefixCls,
            a = e.vertical,
            r = e.row,
            c = e.index,
            l = e.bordered;
          return a
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "tr",
                  { key: "label-".concat(c), className: "".concat(n, "-row") },
                  f(
                    r,
                    e,
                    Object(m.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      t
                    )
                  )
                ),
                i.createElement(
                  "tr",
                  {
                    key: "content-".concat(c),
                    className: "".concat(n, "-row"),
                  },
                  f(
                    r,
                    e,
                    Object(m.a)(
                      { component: "td", type: "content", showContent: !0 },
                      t
                    )
                  )
                )
              )
            : i.createElement(
                "tr",
                { key: c, className: "".concat(n, "-row") },
                f(
                  r,
                  e,
                  Object(m.a)(
                    {
                      component: l ? ["th", "td"] : "td",
                      type: "item",
                      showLabel: !0,
                      showContent: !0,
                    },
                    t
                  )
                )
              );
        },
        y = function (e) {
          return e.children;
        },
        p = n(112),
        h = i.createContext({}),
        $ = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function v(e, t, n) {
        var a = e;
        return (
          (void 0 === t || t > n) &&
            ((a = Object(p.a)(e, { span: n })),
            Object(u.a)(
              void 0 === t,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          a
        );
      }
      function k(e) {
        var t,
          n = e.prefixCls,
          l = e.title,
          u = e.extra,
          m = e.column,
          j = void 0 === m ? $ : m,
          g = e.colon,
          f = void 0 === g || g,
          y = e.bordered,
          p = e.layout,
          k = e.children,
          x = e.className,
          S = e.style,
          I = e.size,
          B = e.labelStyle,
          N = e.contentStyle,
          w = i.useContext(b.b),
          E = w.getPrefixCls,
          C = w.direction,
          A = E("descriptions", n),
          L = i.useState({}),
          F = Object(r.a)(L, 2),
          M = F[0],
          D = F[1],
          P = (function (e, t) {
            if ("number" === typeof e) return e;
            if ("object" === Object(c.a)(e))
              for (var n = 0; n < s.b.length; n++) {
                var a = s.b[n];
                if (t[a] && void 0 !== e[a]) return e[a] || $[a];
              }
            return 3;
          })(j, M);
        i.useEffect(function () {
          var e = s.a.subscribe(function (e) {
            "object" === Object(c.a)(j) && D(e);
          });
          return function () {
            s.a.unsubscribe(e);
          };
        }, []);
        var q = (function (e, t) {
          var n = Object(d.a)(e).filter(function (e) {
              return e;
            }),
            a = [],
            r = [],
            c = t;
          return (
            n.forEach(function (e, i) {
              var l,
                o = null === (l = e.props) || void 0 === l ? void 0 : l.span,
                d = o || 1;
              if (i === n.length - 1) return r.push(v(e, o, c)), void a.push(r);
              d < c
                ? ((c -= d), r.push(e))
                : (r.push(v(e, d, c)), a.push(r), (c = t), (r = []));
            }),
            a
          );
        })(k, P);
        return i.createElement(
          h.Provider,
          { value: { labelStyle: B, contentStyle: N } },
          i.createElement(
            "div",
            {
              className: o()(
                A,
                ((t = {}),
                Object(a.a)(
                  t,
                  "".concat(A, "-").concat(I),
                  I && "default" !== I
                ),
                Object(a.a)(t, "".concat(A, "-bordered"), !!y),
                Object(a.a)(t, "".concat(A, "-rtl"), "rtl" === C),
                t),
                x
              ),
              style: S,
            },
            (l || u) &&
              i.createElement(
                "div",
                { className: "".concat(A, "-header") },
                l &&
                  i.createElement(
                    "div",
                    { className: "".concat(A, "-title") },
                    l
                  ),
                u &&
                  i.createElement(
                    "div",
                    { className: "".concat(A, "-extra") },
                    u
                  )
              ),
            i.createElement(
              "div",
              { className: "".concat(A, "-view") },
              i.createElement(
                "table",
                null,
                i.createElement(
                  "tbody",
                  null,
                  q.map(function (e, t) {
                    return i.createElement(O, {
                      key: t,
                      index: t,
                      colon: f,
                      prefixCls: A,
                      vertical: "vertical" === p,
                      bordered: y,
                      row: e,
                    });
                  })
                )
              )
            )
          )
        );
      }
      k.Item = y;
      t.b = k;
    },
    410: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r,
        c,
        i = n(114),
        l = n(2),
        o = n(157),
        d = n.n(o),
        s = n(5),
        u = n(188),
        b = n(266),
        m = n(122),
        j = n(208),
        g = n(401),
        f = n(99),
        O = n(111),
        y = n(177),
        p =
          (O.a.div(
            a ||
              (a = Object(f.a)([
                "\n  background-image: url(",
                ");\n  width: 100%;\n  height: 300px;\n  background-size: contain;\n",
              ])),
            function (e) {
              return e.url;
            }
          ),
          O.a.div(
            r ||
              (r = Object(f.a)([
                "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n",
              ]))
          )),
        h = Object(O.a)(y.a)(
          c ||
            (c = Object(f.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        ),
        $ = n(110),
        v = n(52),
        k = n(53),
        x = n(138),
        S = n(13);
      t.default = function () {
        var e = Object(s.h)().search,
          t = Object(s.i)().param,
          n = Object(s.g)(),
          a = d.a.parse(e),
          r = a.id,
          c = a.category,
          o = Object(l.useState)(),
          f = Object(i.a)(o, 2),
          O = f[0],
          y = f[1],
          I = Object(l.useState)(),
          B = Object(i.a)(I, 2),
          N = B[0],
          w = B[1],
          E = Object(l.useState)(),
          C = Object(i.a)(E, 2),
          A = C[0],
          L = C[1],
          F = Object(u.a)(m.b, { variables: { id: parseInt(r, 10) } }),
          M = F.data,
          D = F.loading,
          P = Object(b.a)($.e, {
            onCompleted: function (e) {
              var a = e.deleteBoard,
                r = a.ok,
                i = a.err;
              r
                ? (v.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."
                  ),
                  n.push({
                    pathname: "/admin/".concat(t, "/").concat(c),
                    state: { refresh: !0 },
                  }))
                : (console.log(i),
                  v.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          q = Object(i.a)(P, 1)[0],
          z = Object(l.useCallback)(
            function () {
              q({ variables: { id: parseInt(r, 10) } });
            },
            [r, q]
          );
        return (
          Object(l.useEffect)(
            function () {
              M &&
                M.getBoardById &&
                M.getBoardById.data &&
                y(M.getBoardById.data),
                M &&
                  M.getBoardById &&
                  M.getBoardById.data &&
                  M.getBoardById.data.files &&
                  w(M.getBoardById.data.files),
                M &&
                  M.getBoardById &&
                  M.getBoardById.data &&
                  M.getBoardById.data.images &&
                  L(M.getBoardById.data.images);
            },
            [M]
          ),
          D
            ? Object(S.jsx)(S.Fragment, { children: "loading" })
            : Object(S.jsxs)(p, {
                children: [
                  Object(S.jsx)(h, {
                    type: "ghost",
                    onClick: function () {
                      return n.goBack();
                    },
                    children: "\ub4a4\ub85c",
                  }),
                  Object(S.jsxs)(j.b, {
                    bordered: !0,
                    layout: "horizontal",
                    style: { display: "flex", flexDirection: "column" },
                    children: [
                      Object(S.jsx)(j.b.Item, {
                        label: "\uc81c\ubaa9",
                        span: 3,
                        labelStyle: { width: 100 },
                        children: Object(S.jsx)(g.a.Title, {
                          level: 3,
                          children:
                            null === O || void 0 === O ? void 0 : O.title,
                        }),
                      }),
                      Object(S.jsx)(j.b.Item, {
                        label: "\uc791\uc131\uc77c",
                        span: 3,
                        labelStyle: { width: 100 },
                        children: Object(x.a)(
                          (null === O || void 0 === O ? void 0 : O.createdAt) ||
                            ""
                        ),
                      }),
                      Object(S.jsx)(j.b.Item, {
                        label: "\ud30c\uc77c",
                        span: 3,
                        labelStyle: { width: 100 },
                        children:
                          N && 0 !== N.length
                            ? Object(S.jsx)(S.Fragment, {
                                children: N.map(function (e, t) {
                                  return Object(S.jsx)(
                                    "span",
                                    {
                                      style: { display: "inline-block" },
                                      children: Object(S.jsx)("a", {
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
                            : Object(S.jsx)(S.Fragment, {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              }),
                      }),
                      "achievement" === t &&
                        Object(S.jsx)(j.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            A && 0 !== A.length
                              ? Object(S.jsx)("img", {
                                  src: A[A.length - 1].url,
                                  alt: "newsimage",
                                  width: 300,
                                })
                              : Object(S.jsx)(S.Fragment, {
                                  children: "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                }),
                        }),
                      Object(S.jsx)(j.b.Item, {
                        label: "\ub0b4\uc6a9",
                        span: 4,
                        children: Object(S.jsx)("span", {
                          style: { whiteSpace: "pre-wrap" },
                          children:
                            null === O || void 0 === O ? void 0 : O.content,
                        }),
                      }),
                    ],
                  }),
                  Object(S.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(S.jsx)(k.b, {
                        to: "/admin/"
                          .concat(t, "/edit-")
                          .concat(t, "?category=")
                          .concat(c, "&id=")
                          .concat(r),
                        children: Object(S.jsx)(h, {
                          type: "primary",
                          children: "\uc218\uc815",
                        }),
                      }),
                      Object(S.jsx)(h, {
                        type: "primary",
                        danger: !0,
                        onClick: z,
                        children: "\uc0ad\uc81c",
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
//# sourceMappingURL=19.81d028fd.chunk.js.map
