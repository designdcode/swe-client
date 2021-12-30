(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [17],
  {
    104: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return v;
      }),
        e.d(t, "l", function () {
          return k;
        }),
        e.d(t, "e", function () {
          return S;
        }),
        e.d(t, "j", function () {
          return I;
        }),
        e.d(t, "f", function () {
          return x;
        }),
        e.d(t, "g", function () {
          return w;
        }),
        e.d(t, "b", function () {
          return B;
        }),
        e.d(t, "c", function () {
          return A;
        }),
        e.d(t, "h", function () {
          return _;
        }),
        e.d(t, "k", function () {
          return N;
        }),
        e.d(t, "d", function () {
          return E;
        }),
        e.d(t, "i", function () {
          return M;
        });
      var r,
        a,
        i,
        o,
        c,
        d,
        l,
        u,
        s,
        b,
        g,
        p,
        j,
        f,
        O,
        m,
        y,
        $ = e(94),
        h = e(548),
        v = Object(h.a)(
          r ||
            (r = Object($.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(h.a)(
          a ||
            (a = Object($.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        S = Object(h.a)(
          i ||
            (i = Object($.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(h.a)(
          o ||
            (o = Object($.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object(h.a)(
            c ||
              (c = Object($.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            d ||
              (d = Object($.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            l ||
              (l = Object($.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        w = Object(h.a)(
          u ||
            (u = Object($.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(h.a)(
          s ||
            (s = Object($.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A = Object(h.a)(
          b ||
            (b = Object($.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        _ =
          (Object(h.a)(
            g ||
              (g = Object($.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            p ||
              (p = Object($.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        N =
          (Object(h.a)(
            j ||
              (j = Object($.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            f ||
              (f = Object($.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        E = Object(h.a)(
          O ||
            (O = Object($.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        M =
          (Object(h.a)(
            m ||
              (m = Object($.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            y ||
              (y = Object($.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    107: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return o;
      });
      var r = e(1),
        a = e(2),
        i = e(56);
      function o(n) {
        var t = Object(a.useContext)(Object(i.a)()),
          e = n || t.client;
        return (
          __DEV__
            ? Object(r.b)(
                !!e,
                'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClientApolloClient instance in via options.'
              )
            : Object(r.b)(!!e, 29),
          e
        );
      }
    },
    108: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return r;
      }),
        e.d(t, "b", function () {
          return c;
        });
      var r,
        a = e(1);
      !(function (n) {
        (n[(n.Query = 0)] = "Query"),
          (n[(n.Mutation = 1)] = "Mutation"),
          (n[(n.Subscription = 2)] = "Subscription");
      })(r || (r = {}));
      var i = new Map();
      function o(n) {
        var t;
        switch (n) {
          case r.Query:
            t = "Query";
            break;
          case r.Mutation:
            t = "Mutation";
            break;
          case r.Subscription:
            t = "Subscription";
        }
        return t;
      }
      function c(n, t) {
        var e = (function (n) {
            var t,
              e,
              o = i.get(n);
            if (o) return o;
            __DEV__
              ? Object(a.b)(
                  !!n && !!n.kind,
                  "Argument of ".concat(
                    n,
                    " passed to parser was not a valid GraphQL "
                  ) +
                    "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                )
              : Object(a.b)(!!n && !!n.kind, 30);
            var c = n.definitions.filter(function (n) {
                return "FragmentDefinition" === n.kind;
              }),
              d = n.definitions.filter(function (n) {
                return (
                  "OperationDefinition" === n.kind && "query" === n.operation
                );
              }),
              l = n.definitions.filter(function (n) {
                return (
                  "OperationDefinition" === n.kind && "mutation" === n.operation
                );
              }),
              u = n.definitions.filter(function (n) {
                return (
                  "OperationDefinition" === n.kind &&
                  "subscription" === n.operation
                );
              });
            __DEV__
              ? Object(a.b)(
                  !c.length || d.length || l.length || u.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : Object(a.b)(!c.length || d.length || l.length || u.length, 31),
              __DEV__
                ? Object(a.b)(
                    d.length + l.length + u.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(n, " had ")
                        .concat(d.length, " queries, ")
                        .concat(u.length, " ") +
                      "subscriptions and ".concat(l.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : Object(a.b)(d.length + l.length + u.length <= 1, 32),
              (e = d.length ? r.Query : r.Mutation),
              d.length || l.length || (e = r.Subscription);
            var s = d.length ? d : l.length ? l : u;
            __DEV__
              ? Object(a.b)(
                  1 === s.length,
                  "react-apollo only supports one definition per HOC. ".concat(
                    n,
                    " had "
                  ) +
                    "".concat(s.length, " definitions. ") +
                    "You can use 'compose' to join multiple operation types to a component"
                )
              : Object(a.b)(1 === s.length, 33);
            var b = s[0];
            t = b.variableDefinitions || [];
            var g = {
              name: b.name && "Name" === b.name.kind ? b.name.value : "data",
              type: e,
              variables: t,
            };
            return i.set(n, g), g;
          })(n),
          c = o(t),
          d = o(e.type);
        __DEV__
          ? Object(a.b)(
              e.type === t,
              "Running a ".concat(c, " requires a graphql ") +
                "".concat(c, ", but a ").concat(d, " was used instead.")
            )
          : Object(a.b)(e.type === t, 34);
      }
    },
    122: function (n, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return p;
      }),
        e.d(t, "d", function () {
          return j;
        }),
        e.d(t, "a", function () {
          return f;
        }),
        e.d(t, "g", function () {
          return O;
        }),
        e.d(t, "c", function () {
          return m;
        }),
        e.d(t, "e", function () {
          return y;
        }),
        e.d(t, "f", function () {
          return $;
        });
      var r,
        a,
        i,
        o,
        c,
        d,
        l,
        u,
        s,
        b = e(94),
        g = e(548),
        p = Object(g.a)(
          r ||
            (r = Object(b.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(g.a)(
          a ||
            (a = Object(b.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(g.a)(
          i ||
            (i = Object(b.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        O = Object(g.a)(
          o ||
            (o = Object(b.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(g.a)(
          c ||
            (c = Object(b.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        y = Object(g.a)(
          d ||
            (d = Object(b.a)([
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n      }\n    }\n  }\n",
            ]))
        ),
        $ = Object(g.a)(
          l ||
            (l = Object(b.a)([
              "\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n",
            ]))
        );
      Object(g.a)(
        u ||
          (u = Object(b.a)([
            "\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
          ]))
      ),
        Object(g.a)(
          s ||
            (s = Object(b.a)([
              "\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    126: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return r;
      });
      var r = function (n) {
        var t = new Date(1e3 * Math.floor(parseInt(n, 10) / 1e3));
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
    165: function (n, t, e) {
      "use strict";
      e.d(t, "a", function () {
        return u;
      });
      var r = e(0),
        a = e(2),
        i = e(75),
        o = e(5),
        c = e(108),
        d = e(22),
        l = e(107);
      function u(n, t) {
        var e = Object(l.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(c.b)(n, c.a.Mutation);
        var u = Object(a.useState)({ called: !1, loading: !1, client: e }),
          s = u[0],
          b = u[1],
          g = Object(a.useRef)({
            result: s,
            mutationId: 0,
            isMounted: !0,
            client: e,
            mutation: n,
            options: t,
          });
        Object.assign(g.current, { client: e, options: t, mutation: n });
        var p = Object(a.useCallback)(function (n) {
            void 0 === n && (n = {});
            var t = g.current,
              e = t.client,
              a = t.options,
              c = t.mutation,
              l = Object(r.a)(Object(r.a)({}, a), { mutation: c });
            g.current.result.loading ||
              l.ignoreResults ||
              b(
                (g.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: e,
                })
              );
            var u = ++g.current.mutationId,
              s = Object(i.b)(l, n);
            return e
              .mutate(s)
              .then(function (t) {
                var r,
                  a,
                  i = t.data,
                  c = t.errors,
                  p =
                    c && c.length > 0 ? new d.a({ graphQLErrors: c }) : void 0;
                if (u === g.current.mutationId && !s.ignoreResults) {
                  var j = {
                    called: !0,
                    loading: !1,
                    data: i,
                    error: p,
                    client: e,
                  };
                  g.current.isMounted &&
                    !Object(o.a)(g.current.result, j) &&
                    b((g.current.result = j));
                }
                return (
                  null === (r = l.onCompleted) ||
                    void 0 === r ||
                    r.call(l, t.data),
                  null === (a = n.onCompleted) ||
                    void 0 === a ||
                    a.call(n, t.data),
                  t
                );
              })
              .catch(function (t) {
                var r, a;
                if (u === g.current.mutationId && g.current.isMounted) {
                  var i = {
                    loading: !1,
                    error: t,
                    data: void 0,
                    called: !0,
                    client: e,
                  };
                  Object(o.a)(g.current.result, i) || b((g.current.result = i));
                }
                if (l.onError || s.onError)
                  return (
                    null === (r = l.onError) || void 0 === r || r.call(l, t),
                    null === (a = n.onError) || void 0 === a || a.call(n, t),
                    { data: void 0, errors: t }
                  );
                throw t;
              });
          }, []),
          j = Object(a.useCallback)(function () {
            b({ called: !1, loading: !1, client: e });
          }, []);
        return (
          Object(a.useEffect)(function () {
            return function () {
              g.current.isMounted = !1;
            };
          }, []),
          [p, Object(r.a)({ reset: j }, s)]
        );
      }
    },
    303: function (n, t, e) {
      "use strict";
      var r = e(346);
      t.a = r.a;
    },
    304: function (n, t, e) {
      "use strict";
      var r = e(290);
      t.a = r.a;
    },
    553: function (n, t, e) {
      "use strict";
      e.r(t);
      var r,
        a,
        i,
        o,
        c = e(114),
        d = e(89),
        l = e(112),
        u = e.n(l),
        s = e(2),
        b = e(94),
        g = e(103),
        p = e(304),
        j = e(303),
        f = g.a.div(r || (r = Object(b.a)([""]))),
        O = Object(g.a)(p.a)(a || (a = Object(b.a)(["\n  height: 300px;\n"]))),
        m = g.a.span(
          i ||
            (i = Object(b.a)([
              "\n  cursor: pointer;\n  &:hover {\n    transition: 0.2s linear;\n    color: #438ef7;\n  }\n",
            ]))
        ),
        y =
          (Object(g.a)(j.a)(
            o ||
              (o = Object(b.a)([
                "\n  display: flex;\n  flex-direction: column;\n",
              ]))
          ),
          e(540)),
        $ = e(547),
        h = e(6),
        v = e(88),
        k = e(87),
        S = e.n(k),
        I = e(170),
        x = function (n, t) {
          var e = {};
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) &&
              t.indexOf(r) < 0 &&
              (e[r] = n[r]);
          if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(n); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, r[a]) &&
                (e[r[a]] = n[r[a]]);
          }
          return e;
        },
        w = function (n) {
          return s.createElement(I.a, null, function (t) {
            var e,
              r = t.getPrefixCls,
              a = t.direction,
              i = n.prefixCls,
              o = n.type,
              c = void 0 === o ? "horizontal" : o,
              d = n.orientation,
              l = void 0 === d ? "center" : d,
              u = n.className,
              b = n.children,
              g = n.dashed,
              p = n.plain,
              j = x(n, [
                "prefixCls",
                "type",
                "orientation",
                "className",
                "children",
                "dashed",
                "plain",
              ]),
              f = r("divider", i),
              O = l.length > 0 ? "-".concat(l) : l,
              m = !!b,
              y = S()(
                f,
                "".concat(f, "-").concat(c),
                ((e = {}),
                Object(v.a)(e, "".concat(f, "-with-text"), m),
                Object(v.a)(e, "".concat(f, "-with-text").concat(O), m),
                Object(v.a)(e, "".concat(f, "-dashed"), !!g),
                Object(v.a)(e, "".concat(f, "-plain"), !!p),
                Object(v.a)(e, "".concat(f, "-rtl"), "rtl" === a),
                e),
                u
              );
            return s.createElement(
              "div",
              Object(h.a)({ className: y }, j, { role: "separator" }),
              b &&
                s.createElement(
                  "span",
                  { className: "".concat(f, "-inner-text") },
                  b
                )
            );
          });
        },
        B = e(140),
        A = e(165),
        _ = e(122),
        N = e(236),
        E = e.n(N),
        M = e(4),
        C = e(46),
        q = e(104),
        L = e(45),
        D = e(126),
        P = e(11);
      t.default = function () {
        var n = Object(B.a)(_.a),
          t = n.data,
          e = n.loading,
          r = n.refetch,
          a = n.error,
          i = Object(B.a)(_.d),
          o = i.data,
          l = (i.loading, i.refetch),
          b = i.error,
          g = Object(M.h)().state,
          p = Object(s.useState)(),
          h = Object(d.a)(p, 2),
          v = h[0],
          k = h[1],
          S = Object(s.useState)(),
          I = Object(d.a)(S, 2),
          x = I[0],
          N = I[1],
          R = Object(s.useState)(),
          F = Object(d.a)(R, 2),
          V = (F[0], F[1]),
          Q = Object(A.a)(q.h),
          Y = Object(d.a)(Q, 1)[0];
        Object(s.useEffect)(
          function () {
            null !== t &&
              void 0 !== t &&
              t.getBoard.data &&
              (k(
                t.getBoard.data
                  .filter(function (n) {
                    return n.category.includes("community-notice");
                  })
                  .slice(0, 5)
              ),
              N(
                t.getBoard.data
                  .filter(function (n) {
                    return n.category.includes("community-administration");
                  })
                  .slice(0, 5)
              ));
          },
          [t]
        ),
          Object(s.useEffect)(
            function () {
              null !== o &&
                void 0 !== o &&
                o.getLinks.data &&
                V(o.getLinks.data);
            },
            [o]
          ),
          Object(s.useEffect)(
            function () {
              var n = function () {
                r && r(), l && l();
              };
              return (
                g && g.refresh && n(),
                function () {
                  return n();
                }
              );
            },
            [r, g, l]
          );
        Object(s.useCallback)(
          (function () {
            var n = Object(c.a)(
              u.a.mark(function n(t) {
                return u.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          Y({ variables: { id: t } }).then(function (n) {
                            var t = n.data;
                            null !== t &&
                              void 0 !== t &&
                              t.deleteLink.ok &&
                              L.b.success(
                                "\ub9c1\ud06c\uac00 \uc0ad\uc81c \ub418\uc5c7\uc2b5\ub2c8\ub2e4"
                              );
                          })
                        );
                      case 2:
                        r(), l();
                      case 4:
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
          [r, Y, l]
        );
        return (
          a && console.error(a),
          b && console.error(b),
          Object(P.jsxs)(f, {
            children: [
              e
                ? Object(P.jsx)(P.Fragment, { children: "loading..." })
                : Object(P.jsxs)(j.a, {
                    gutter: [30, 40],
                    justify: "space-between",
                    children: [
                      Object(P.jsx)(O, {
                        span: 11,
                        children: Object(P.jsxs)(y.a, {
                          title: function () {
                            return Object(P.jsx)($.a.Title, {
                              level: 4,
                              children: "\uacf5\uc9c0\uc0ac\ud56d",
                            });
                          },
                          dataSource: v,
                          showHeader: !1,
                          rowKey: "noticeid",
                          pagination: !1,
                          size: "middle",
                          children: [
                            Object(P.jsx)(
                              E.a,
                              {
                                dataIndex: "title",
                                align: "left",
                                ellipsis: !0,
                                render: function (n, t, e) {
                                  return Object(P.jsx)(
                                    m,
                                    {
                                      children: Object(P.jsx)(C.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(t.category, "&id=")
                                          .concat(t.id),
                                        children: n,
                                      }),
                                    },
                                    e
                                  );
                                },
                              },
                              "noticesubid"
                            ),
                            Object(P.jsx)(
                              E.a,
                              {
                                dataIndex: "createdAt",
                                align: "right",
                                render: function (n, t, e) {
                                  return Object(P.jsx)(
                                    "span",
                                    {
                                      children: Object(P.jsx)(C.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(t.category, "&id=")
                                          .concat(t.id),
                                        children: Object(D.a)(n),
                                      }),
                                    },
                                    e
                                  );
                                },
                              },
                              "noticetime"
                            ),
                          ],
                        }),
                      }),
                      Object(P.jsx)(O, {
                        span: 11,
                        children: Object(P.jsxs)(y.a, {
                          title: function () {
                            return Object(P.jsx)($.a.Title, {
                              level: 4,
                              children: "\ud559\uc0ac\uacf5\uc9c0",
                            });
                          },
                          dataSource: x,
                          showHeader: !1,
                          rowKey: "admissionkey",
                          pagination: !1,
                          size: "middle",
                          children: [
                            Object(P.jsx)(
                              E.a,
                              {
                                dataIndex: "title",
                                align: "left",
                                ellipsis: !0,
                                render: function (n, t, e) {
                                  return Object(P.jsx)(
                                    m,
                                    {
                                      children: Object(P.jsx)(C.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(t.category, "&id=")
                                          .concat(t.id),
                                        children: n,
                                      }),
                                    },
                                    e
                                  );
                                },
                              },
                              "subadmissionkey"
                            ),
                            Object(P.jsx)(
                              E.a,
                              {
                                dataIndex: "createdAt",
                                align: "right",
                                render: function (n, t, e) {
                                  return Object(P.jsx)(
                                    "span",
                                    {
                                      children: Object(P.jsx)(C.b, {
                                        to: "/admin/community/detail-community?category="
                                          .concat(t.category, "&id=")
                                          .concat(t.id),
                                        children: Object(D.a)(n),
                                      }),
                                    },
                                    e
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
              Object(P.jsx)(w, {}),
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=17.493e88af.chunk.js.map
