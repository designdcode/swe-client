(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [16],
  {
    110: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "k", function () {
          return j;
        }),
        n.d(e, "e", function () {
          return O;
        }),
        n.d(e, "i", function () {
          return v;
        }),
        n.d(e, "f", function () {
          return $;
        }),
        n.d(e, "g", function () {
          return k;
        }),
        n.d(e, "b", function () {
          return x;
        }),
        n.d(e, "c", function () {
          return B;
        }),
        n.d(e, "d", function () {
          return C;
        }),
        n.d(e, "h", function () {
          return S;
        }),
        n.d(e, "j", function () {
          return N;
        });
      var a,
        o,
        r,
        i,
        c,
        l,
        s,
        u,
        d,
        b,
        m,
        p,
        f,
        g = n(99),
        y = n(402),
        h = Object(y.a)(
          a ||
            (a = Object(g.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        j = Object(y.a)(
          o ||
            (o = Object(g.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        O = Object(y.a)(
          r ||
            (r = Object(g.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object(y.a)(
          i ||
            (i = Object(g.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ =
          (Object(y.a)(
            c ||
              (c = Object(g.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            l ||
              (l = Object(g.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            s ||
              (s = Object(g.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(y.a)(
          u ||
            (u = Object(g.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(y.a)(
          d ||
            (d = Object(g.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(y.a)(
          b ||
            (b = Object(g.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C = Object(y.a)(
          m ||
            (m = Object(g.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(y.a)(
          p ||
            (p = Object(g.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(y.a)(
          f ||
            (f = Object(g.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    116: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return a;
      }),
        n.d(e, "b", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return c;
        });
      var a,
        o = n(1);
      !(function (t) {
        (t[(t.Query = 0)] = "Query"),
          (t[(t.Mutation = 1)] = "Mutation"),
          (t[(t.Subscription = 2)] = "Subscription");
      })(a || (a = {}));
      var r = new Map();
      function i(t) {
        var e;
        switch (t) {
          case a.Query:
            e = "Query";
            break;
          case a.Mutation:
            e = "Mutation";
            break;
          case a.Subscription:
            e = "Subscription";
        }
        return e;
      }
      function c(t) {
        var e,
          n,
          i = r.get(t);
        if (i) return i;
        __DEV__
          ? Object(o.b)(
              !!t && !!t.kind,
              "Argument of " +
                t +
                " passed to parser was not a valid GraphQL DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
            )
          : Object(o.b)(!!t && !!t.kind, 34);
        var c = t.definitions.filter(function (t) {
            return "FragmentDefinition" === t.kind;
          }),
          l = t.definitions.filter(function (t) {
            return "OperationDefinition" === t.kind && "query" === t.operation;
          }),
          s = t.definitions.filter(function (t) {
            return (
              "OperationDefinition" === t.kind && "mutation" === t.operation
            );
          }),
          u = t.definitions.filter(function (t) {
            return (
              "OperationDefinition" === t.kind && "subscription" === t.operation
            );
          });
        __DEV__
          ? Object(o.b)(
              !c.length || l.length || s.length || u.length,
              "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
            )
          : Object(o.b)(!c.length || l.length || s.length || u.length, 35),
          __DEV__
            ? Object(o.b)(
                l.length + s.length + u.length <= 1,
                "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                  t +
                  " had " +
                  l.length +
                  " queries, " +
                  u.length +
                  " subscriptions and " +
                  s.length +
                  " mutations. You can use 'compose' to join multiple operation types to a component"
              )
            : Object(o.b)(l.length + s.length + u.length <= 1, 36),
          (n = l.length ? a.Query : a.Mutation),
          l.length || s.length || (n = a.Subscription);
        var d = l.length ? l : s.length ? s : u;
        __DEV__
          ? Object(o.b)(
              1 === d.length,
              "react-apollo only supports one definition per HOC. " +
                t +
                " had " +
                d.length +
                " definitions. You can use 'compose' to join multiple operation types to a component"
            )
          : Object(o.b)(1 === d.length, 37);
        var b = d[0];
        e = b.variableDefinitions || [];
        var m = {
          name: b.name && "Name" === b.name.kind ? b.name.value : "data",
          type: n,
          variables: e,
        };
        return r.set(t, m), m;
      }
    },
    123: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var a = n(1),
        o = n(7),
        r = n(116),
        i = (function () {
          function t(t, e) {
            (this.isMounted = !1),
              (this.previousOptions = {}),
              (this.context = {}),
              (this.options = {}),
              (this.options = t || {}),
              (this.context = e || {});
          }
          return (
            (t.prototype.getOptions = function () {
              return this.options;
            }),
            (t.prototype.setOptions = function (t, e) {
              void 0 === e && (e = !1),
                e &&
                  !Object(o.a)(this.options, t) &&
                  (this.previousOptions = this.options),
                (this.options = t);
            }),
            (t.prototype.unmount = function () {
              this.isMounted = !1;
            }),
            (t.prototype.refreshClient = function () {
              var t =
                (this.options && this.options.client) ||
                (this.context && this.context.client);
              __DEV__
                ? Object(a.b)(
                    !!t,
                    'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.'
                  )
                : Object(a.b)(!!t, 29);
              var e = !1;
              return (
                t !== this.client &&
                  ((e = !0), (this.client = t), this.cleanup()),
                { client: this.client, isNew: e }
              );
            }),
            (t.prototype.verifyDocumentType = function (t, e) {
              var n = Object(r.c)(t),
                o = Object(r.b)(e),
                i = Object(r.b)(n.type);
              __DEV__
                ? Object(a.b)(
                    n.type === e,
                    "Running a " +
                      o +
                      " requires a graphql " +
                      o +
                      ", but a " +
                      i +
                      " was used instead."
                  )
                : Object(a.b)(n.type === e, 30);
            }),
            t
          );
        })();
    },
    148: function (t, e, n) {
      "use strict";
      var a = n(96),
        o = n(2),
        r = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
                },
              },
            ],
          },
          name: "close",
          theme: "outlined",
        },
        i = n(97),
        c = function (t, e) {
          return o.createElement(
            i.a,
            Object(a.a)(Object(a.a)({}, t), {}, { ref: e, icon: r })
          );
        };
      c.displayName = "CloseOutlined";
      e.a = o.forwardRef(c);
    },
    150: function (t, e, n) {
      "use strict";
      var a = n(96),
        o = n(2),
        r = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z",
                },
              },
            ],
          },
          name: "check",
          theme: "outlined",
        },
        i = n(97),
        c = function (t, e) {
          return o.createElement(
            i.a,
            Object(a.a)(Object(a.a)({}, t), {}, { ref: e, icon: r })
          );
        };
      c.displayName = "CheckOutlined";
      e.a = o.forwardRef(c);
    },
    158: function (t, e, n) {
      t.exports = n(126);
    },
    208: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return O;
      });
      var a = n(93),
        o = n(94),
        r = n(100),
        i = n(2),
        c = n(92),
        l = n.n(c),
        s = n(115),
        u = n(139),
        d = n(107),
        b = n(160),
        m = n(8);
      function p(t) {
        return void 0 !== t && null !== t;
      }
      var f = function (t) {
        var e,
          n = t.itemPrefixCls,
          o = t.component,
          r = t.span,
          c = t.className,
          s = t.style,
          u = t.labelStyle,
          d = t.contentStyle,
          b = t.bordered,
          m = t.label,
          f = t.content,
          g = t.colon,
          y = o;
        return b
          ? i.createElement(
              y,
              {
                className: l()(
                  ((e = {}),
                  Object(a.a)(e, "".concat(n, "-item-label"), p(m)),
                  Object(a.a)(e, "".concat(n, "-item-content"), p(f)),
                  e),
                  c
                ),
                style: s,
                colSpan: r,
              },
              p(m) && i.createElement("span", { style: u }, m),
              p(f) && i.createElement("span", { style: d }, f)
            )
          : i.createElement(
              y,
              {
                className: l()("".concat(n, "-item"), c),
                style: s,
                colSpan: r,
              },
              i.createElement(
                "div",
                { className: "".concat(n, "-item-container") },
                m &&
                  i.createElement(
                    "span",
                    {
                      className: l()(
                        "".concat(n, "-item-label"),
                        Object(a.a)({}, "".concat(n, "-item-no-colon"), !g)
                      ),
                      style: u,
                    },
                    m
                  ),
                f &&
                  i.createElement(
                    "span",
                    { className: l()("".concat(n, "-item-content")), style: d },
                    f
                  )
              )
            );
      };
      function g(t, e, n) {
        var a = e.colon,
          o = e.prefixCls,
          r = e.bordered,
          c = n.component,
          l = n.type,
          s = n.showLabel,
          u = n.showContent,
          d = n.labelStyle,
          b = n.contentStyle;
        return t.map(function (t, e) {
          var n = t.props,
            p = n.label,
            g = n.children,
            y = n.prefixCls,
            h = void 0 === y ? o : y,
            j = n.className,
            O = n.style,
            v = n.labelStyle,
            $ = n.contentStyle,
            k = n.span,
            x = void 0 === k ? 1 : k,
            B = t.key;
          return "string" === typeof c
            ? i.createElement(f, {
                key: "".concat(l, "-").concat(B || e),
                className: j,
                style: O,
                labelStyle: Object(m.a)(Object(m.a)({}, d), v),
                contentStyle: Object(m.a)(Object(m.a)({}, b), $),
                span: x,
                colon: a,
                component: c,
                itemPrefixCls: h,
                bordered: r,
                label: s ? p : null,
                content: u ? g : null,
              })
            : [
                i.createElement(f, {
                  key: "label-".concat(B || e),
                  className: j,
                  style: Object(m.a)(Object(m.a)(Object(m.a)({}, d), O), v),
                  span: 1,
                  colon: a,
                  component: c[0],
                  itemPrefixCls: h,
                  bordered: r,
                  label: p,
                }),
                i.createElement(f, {
                  key: "content-".concat(B || e),
                  className: j,
                  style: Object(m.a)(Object(m.a)(Object(m.a)({}, b), O), $),
                  span: 2 * x - 1,
                  component: c[1],
                  itemPrefixCls: h,
                  bordered: r,
                  content: g,
                }),
              ];
        });
      }
      var y = function (t) {
          var e = i.useContext(O),
            n = t.prefixCls,
            a = t.vertical,
            o = t.row,
            r = t.index,
            c = t.bordered;
          return a
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "tr",
                  { key: "label-".concat(r), className: "".concat(n, "-row") },
                  g(
                    o,
                    t,
                    Object(m.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      e
                    )
                  )
                ),
                i.createElement(
                  "tr",
                  {
                    key: "content-".concat(r),
                    className: "".concat(n, "-row"),
                  },
                  g(
                    o,
                    t,
                    Object(m.a)(
                      { component: "td", type: "content", showContent: !0 },
                      e
                    )
                  )
                )
              )
            : i.createElement(
                "tr",
                { key: r, className: "".concat(n, "-row") },
                g(
                  o,
                  t,
                  Object(m.a)(
                    {
                      component: c ? ["th", "td"] : "td",
                      type: "item",
                      showLabel: !0,
                      showContent: !0,
                    },
                    e
                  )
                )
              );
        },
        h = function (t) {
          return t.children;
        },
        j = n(112),
        O = i.createContext({}),
        v = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function $(t, e, n) {
        var a = t;
        return (
          (void 0 === e || e > n) &&
            ((a = Object(j.a)(t, { span: n })),
            Object(d.a)(
              void 0 === e,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          a
        );
      }
      function k(t) {
        var e,
          n = t.prefixCls,
          c = t.title,
          d = t.extra,
          m = t.column,
          p = void 0 === m ? v : m,
          f = t.colon,
          g = void 0 === f || f,
          h = t.bordered,
          j = t.layout,
          k = t.children,
          x = t.className,
          B = t.style,
          C = t.size,
          S = t.labelStyle,
          N = t.contentStyle,
          E = i.useContext(b.b),
          w = E.getPrefixCls,
          I = E.direction,
          _ = w("descriptions", n),
          D = i.useState({}),
          L = Object(o.a)(D, 2),
          M = L[0],
          q = L[1],
          A = (function (t, e) {
            if ("number" === typeof t) return t;
            if ("object" === Object(r.a)(t))
              for (var n = 0; n < u.b.length; n++) {
                var a = u.b[n];
                if (e[a] && void 0 !== t[a]) return t[a] || v[a];
              }
            return 3;
          })(p, M);
        i.useEffect(function () {
          var t = u.a.subscribe(function (t) {
            "object" === Object(r.a)(p) && q(t);
          });
          return function () {
            u.a.unsubscribe(t);
          };
        }, []);
        var F = (function (t, e) {
          var n = Object(s.a)(t).filter(function (t) {
              return t;
            }),
            a = [],
            o = [],
            r = e;
          return (
            n.forEach(function (t, i) {
              var c,
                l = null === (c = t.props) || void 0 === c ? void 0 : c.span,
                s = l || 1;
              if (i === n.length - 1) return o.push($(t, l, r)), void a.push(o);
              s < r
                ? ((r -= s), o.push(t))
                : (o.push($(t, s, r)), a.push(o), (r = e), (o = []));
            }),
            a
          );
        })(k, A);
        return i.createElement(
          O.Provider,
          { value: { labelStyle: S, contentStyle: N } },
          i.createElement(
            "div",
            {
              className: l()(
                _,
                ((e = {}),
                Object(a.a)(
                  e,
                  "".concat(_, "-").concat(C),
                  C && "default" !== C
                ),
                Object(a.a)(e, "".concat(_, "-bordered"), !!h),
                Object(a.a)(e, "".concat(_, "-rtl"), "rtl" === I),
                e),
                x
              ),
              style: B,
            },
            (c || d) &&
              i.createElement(
                "div",
                { className: "".concat(_, "-header") },
                c &&
                  i.createElement(
                    "div",
                    { className: "".concat(_, "-title") },
                    c
                  ),
                d &&
                  i.createElement(
                    "div",
                    { className: "".concat(_, "-extra") },
                    d
                  )
              ),
            i.createElement(
              "div",
              { className: "".concat(_, "-view") },
              i.createElement(
                "table",
                null,
                i.createElement(
                  "tbody",
                  null,
                  F.map(function (t, e) {
                    return i.createElement(y, {
                      key: e,
                      index: e,
                      colon: g,
                      prefixCls: _,
                      vertical: "vertical" === j,
                      bordered: h,
                      row: t,
                    });
                  })
                )
              )
            )
          )
        );
      }
      k.Item = h;
      e.b = k;
    },
    412: function (t, e, n) {
      "use strict";
      n.r(e);
      var a,
        o,
        r = n(114),
        i = n(208),
        c = n(401),
        l = n(2),
        s = n(5),
        u = n(99),
        d = n(111),
        b = n(177),
        m = d.a.div(
          a ||
            (a = Object(u.a)([
              "\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  &.attach-group {\n    display: flex;\n    flex-direction: column;\n  }\n\n  img {\n    object-fit: contain;\n    width: 400px;\n    height: 400px;\n  }\n",
            ]))
        ),
        p = Object(d.a)(b.a)(o || (o = Object(u.a)(["\n  margin: 15px 0;\n"]))),
        f = n(188),
        g = n(110),
        y = n(13);
      e.default = function () {
        var t,
          e,
          n = Object(s.g)(),
          a = Object(s.i)(),
          o = a.param,
          u = a.subparam,
          d = u,
          b = Object(s.h)().state,
          h = Object(l.useState)(),
          j = Object(r.a)(h, 2),
          O = j[0],
          v = j[1],
          $ = Object(l.useState)(),
          k = Object(r.a)($, 2),
          x = k[0],
          B = k[1],
          C = Object(f.a)(g.k, { variables: { category: d } }),
          S = C.data,
          N = C.loading,
          E = C.refetch;
        return (
          Object(l.useEffect)(
            function () {
              var t = function () {
                var t;
                (null === S || void 0 === S
                  ? void 0
                  : S.getBoardByCategory.ok) &&
                0 !==
                  (null === (t = S.getBoardByCategory.data) || void 0 === t
                    ? void 0
                    : t.length)
                  ? S.getBoardByCategory.data &&
                    0 !== S.getBoardByCategory.data.length &&
                    (S.getBoardByCategory.data[0].files &&
                      v(S.getBoardByCategory.data[0].files),
                    S.getBoardByCategory.data[0].images &&
                      B(S.getBoardByCategory.data[0].images))
                  : (v([]), B([]));
              };
              return (
                t(),
                function () {
                  return t();
                }
              );
            },
            [S]
          ),
          Object(l.useEffect)(
            function () {
              var t = function () {
                E && E();
              };
              return (
                b && b.refresh && t(),
                function () {
                  return t();
                }
              );
            },
            [E, b]
          ),
          N
            ? Object(y.jsx)(y.Fragment, { children: "loading" })
            : Object(y.jsxs)(m, {
                children: [
                  Object(y.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(y.jsx)(p, {
                        type: "ghost",
                        onClick: function () {
                          return n.goBack();
                        },
                        children: "\ub4a4\ub85c",
                      }),
                      0 !==
                        (null === S ||
                        void 0 === S ||
                        null === (t = S.getBoardByCategory.data) ||
                        void 0 === t
                          ? void 0
                          : t.length) &&
                      (null === S || void 0 === S
                        ? void 0
                        : S.getBoardByCategory.ok)
                        ? Object(y.jsx)(p, {
                            type: "primary",
                            onClick: function () {
                              return n.push(
                                "/admin/"
                                  .concat(o, "/edit-image-")
                                  .concat(o, "?category=")
                                  .concat(u, "&id=")
                                  .concat(
                                    S.getBoardByCategory.data &&
                                      S.getBoardByCategory.data[0].id
                                  )
                              );
                            },
                            children: "\uc218\uc815\ud558\uae30",
                          })
                        : Object(y.jsx)(p, {
                            type: "primary",
                            onClick: function () {
                              return n.push(
                                "/admin/"
                                  .concat(o, "/create-image-")
                                  .concat(o, "?category=")
                                  .concat(u, "&param=")
                                  .concat(o, "&subparam=")
                                  .concat(u)
                              );
                            },
                            children: "\uae00\uc4f0\uae30",
                          }),
                    ],
                  }),
                  Object(y.jsxs)(i.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      Object(y.jsx)(i.b.Item, {
                        label: "\ub9c1\ud06c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children:
                          0 !==
                            (null === S ||
                            void 0 === S ||
                            null === (e = S.getBoardByCategory.data) ||
                            void 0 === e
                              ? void 0
                              : e.length) &&
                          (null === S || void 0 === S
                            ? void 0
                            : S.getBoardByCategory.ok)
                            ? Object(y.jsx)("a", {
                                href: "".concat(
                                  S.getBoardByCategory.data &&
                                    S.getBoardByCategory.data[0].link
                                ),
                                target: "_blank",
                                rel: "noreferrer",
                                children:
                                  S.getBoardByCategory.data &&
                                  S.getBoardByCategory.data[0].link,
                              })
                            : Object(y.jsx)(c.a.Text, {
                                children:
                                  "\ub9c1\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
                      }),
                      Object(y.jsx)(i.b.Item, {
                        label: "\ud30c\uc77c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children:
                          O && O.length
                            ? O.map(function (t, e) {
                                return Object(y.jsx)(
                                  "span",
                                  {
                                    className: "attach-group",
                                    children: Object(y.jsx)("a", {
                                      href: "".concat(
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.url
                                      ),
                                      download: !0,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      children:
                                        null === t || void 0 === t
                                          ? void 0
                                          : t.fileName,
                                    }),
                                  },
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.fileName
                                );
                              })
                            : Object(y.jsx)(c.a.Text, {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
                      }),
                      Object(y.jsx)(i.b.Item, {
                        label: "\uc774\ubbf8\uc9c0",
                        span: 4,
                        labelStyle: { width: 100 },
                        children:
                          x && x[0]
                            ? Object(y.jsx)("img", {
                                src: x[0].url,
                                alt: x[0].fileName,
                              })
                            : Object(y.jsx)(c.a.Text, {
                                children:
                                  "\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
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
//# sourceMappingURL=16.0d753a03.chunk.js.map
