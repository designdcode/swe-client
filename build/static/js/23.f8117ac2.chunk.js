(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [23],
  {
    104: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return $;
      }),
        n.d(e, "k", function () {
          return k;
        }),
        n.d(e, "e", function () {
          return x;
        }),
        n.d(e, "i", function () {
          return S;
        }),
        n.d(e, "f", function () {
          return I;
        }),
        n.d(e, "g", function () {
          return w;
        }),
        n.d(e, "b", function () {
          return _;
        }),
        n.d(e, "c", function () {
          return C;
        }),
        n.d(e, "j", function () {
          return A;
        }),
        n.d(e, "d", function () {
          return N;
        }),
        n.d(e, "h", function () {
          return B;
        });
      var r,
        i,
        a,
        o,
        c,
        l,
        u,
        d,
        s,
        b,
        p,
        f,
        j,
        g,
        m,
        O,
        h,
        v = n(94),
        y = n(528),
        $ = Object(y.a)(
          r ||
            (r = Object(v.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(y.a)(
          i ||
            (i = Object(v.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        x = Object(y.a)(
          a ||
            (a = Object(v.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(y.a)(
          o ||
            (o = Object(v.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I =
          (Object(y.a)(
            c ||
              (c = Object(v.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            l ||
              (l = Object(v.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            u ||
              (u = Object(v.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        w = Object(y.a)(
          d ||
            (d = Object(v.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        _ = Object(y.a)(
          s ||
            (s = Object(v.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C = Object(y.a)(
          b ||
            (b = Object(v.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A =
          (Object(y.a)(
            p ||
              (p = Object(v.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            f ||
              (f = Object(v.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            j ||
              (j = Object(v.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            g ||
              (g = Object(v.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        N = Object(y.a)(
          m ||
            (m = Object(v.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B =
          (Object(y.a)(
            O ||
              (O = Object(v.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(y.a)(
            h ||
              (h = Object(v.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    109: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return o;
      });
      var r = n(1),
        i = n(2),
        a = n(56);
      function o(t) {
        var e = Object(i.useContext)(Object(a.a)()),
          n = t || e.client;
        return (
          __DEV__
            ? Object(r.b)(
                !!n,
                'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClientApolloClient instance in via options.'
              )
            : Object(r.b)(!!n, 29),
          n
        );
      }
    },
    110: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      }),
        n.d(e, "b", function () {
          return c;
        });
      var r,
        i = n(1);
      !(function (t) {
        (t[(t.Query = 0)] = "Query"),
          (t[(t.Mutation = 1)] = "Mutation"),
          (t[(t.Subscription = 2)] = "Subscription");
      })(r || (r = {}));
      var a = new Map();
      function o(t) {
        var e;
        switch (t) {
          case r.Query:
            e = "Query";
            break;
          case r.Mutation:
            e = "Mutation";
            break;
          case r.Subscription:
            e = "Subscription";
        }
        return e;
      }
      function c(t, e) {
        var n = (function (t) {
            var e,
              n,
              o = a.get(t);
            if (o) return o;
            __DEV__
              ? Object(i.b)(
                  !!t && !!t.kind,
                  "Argument of ".concat(
                    t,
                    " passed to parser was not a valid GraphQL "
                  ) +
                    "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                )
              : Object(i.b)(!!t && !!t.kind, 30);
            var c = t.definitions.filter(function (t) {
                return "FragmentDefinition" === t.kind;
              }),
              l = t.definitions.filter(function (t) {
                return (
                  "OperationDefinition" === t.kind && "query" === t.operation
                );
              }),
              u = t.definitions.filter(function (t) {
                return (
                  "OperationDefinition" === t.kind && "mutation" === t.operation
                );
              }),
              d = t.definitions.filter(function (t) {
                return (
                  "OperationDefinition" === t.kind &&
                  "subscription" === t.operation
                );
              });
            __DEV__
              ? Object(i.b)(
                  !c.length || l.length || u.length || d.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : Object(i.b)(!c.length || l.length || u.length || d.length, 31),
              __DEV__
                ? Object(i.b)(
                    l.length + u.length + d.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(t, " had ")
                        .concat(l.length, " queries, ")
                        .concat(d.length, " ") +
                      "subscriptions and ".concat(u.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : Object(i.b)(l.length + u.length + d.length <= 1, 32),
              (n = l.length ? r.Query : r.Mutation),
              l.length || u.length || (n = r.Subscription);
            var s = l.length ? l : u.length ? u : d;
            __DEV__
              ? Object(i.b)(
                  1 === s.length,
                  "react-apollo only supports one definition per HOC. ".concat(
                    t,
                    " had "
                  ) +
                    "".concat(s.length, " definitions. ") +
                    "You can use 'compose' to join multiple operation types to a component"
                )
              : Object(i.b)(1 === s.length, 33);
            var b = s[0];
            e = b.variableDefinitions || [];
            var p = {
              name: b.name && "Name" === b.name.kind ? b.name.value : "data",
              type: n,
              variables: e,
            };
            return a.set(t, p), p;
          })(t),
          c = o(e),
          l = o(n.type);
        __DEV__
          ? Object(i.b)(
              n.type === e,
              "Running a ".concat(c, " requires a graphql ") +
                "".concat(c, ", but a ").concat(l, " was used instead.")
            )
          : Object(i.b)(n.type === e, 34);
      }
    },
    182: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return r;
      });
      var r = function (t) {
        var e = new Date(1e3 * Math.floor(parseInt(t, 10) / 1e3));
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
    198: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return d;
      });
      var r = n(0),
        i = n(2),
        a = n(75),
        o = n(5),
        c = n(110),
        l = n(22),
        u = n(109);
      function d(t, e) {
        var n = Object(u.a)(null === e || void 0 === e ? void 0 : e.client);
        Object(c.b)(t, c.a.Mutation);
        var d = Object(i.useState)({ called: !1, loading: !1, client: n }),
          s = d[0],
          b = d[1],
          p = Object(i.useRef)({
            result: s,
            mutationId: 0,
            isMounted: !0,
            client: n,
            mutation: t,
            options: e,
          });
        Object.assign(p.current, { client: n, options: e, mutation: t });
        var f = Object(i.useCallback)(function (t) {
            void 0 === t && (t = {});
            var e = p.current,
              n = e.client,
              i = e.options,
              c = e.mutation,
              u = Object(r.a)(Object(r.a)({}, i), { mutation: c });
            p.current.result.loading ||
              u.ignoreResults ||
              b(
                (p.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: n,
                })
              );
            var d = ++p.current.mutationId,
              s = Object(a.b)(u, t);
            return n
              .mutate(s)
              .then(function (e) {
                var r,
                  i,
                  a = e.data,
                  c = e.errors,
                  f =
                    c && c.length > 0 ? new l.a({ graphQLErrors: c }) : void 0;
                if (d === p.current.mutationId && !s.ignoreResults) {
                  var j = {
                    called: !0,
                    loading: !1,
                    data: a,
                    error: f,
                    client: n,
                  };
                  p.current.isMounted &&
                    !Object(o.a)(p.current.result, j) &&
                    b((p.current.result = j));
                }
                return (
                  null === (r = u.onCompleted) ||
                    void 0 === r ||
                    r.call(u, e.data),
                  null === (i = t.onCompleted) ||
                    void 0 === i ||
                    i.call(t, e.data),
                  e
                );
              })
              .catch(function (e) {
                var r, i;
                if (d === p.current.mutationId && p.current.isMounted) {
                  var a = {
                    loading: !1,
                    error: e,
                    data: void 0,
                    called: !0,
                    client: n,
                  };
                  Object(o.a)(p.current.result, a) || b((p.current.result = a));
                }
                if (u.onError || s.onError)
                  return (
                    null === (r = u.onError) || void 0 === r || r.call(u, e),
                    null === (i = t.onError) || void 0 === i || i.call(t, e),
                    { data: void 0, errors: e }
                  );
                throw e;
              });
          }, []),
          j = Object(i.useCallback)(function () {
            b({ called: !1, loading: !1, client: n });
          }, []);
        return (
          Object(i.useEffect)(function () {
            return function () {
              p.current.isMounted = !1;
            };
          }, []),
          [f, Object(r.a)({ reset: j }, s)]
        );
      }
    },
    479: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return f;
      });
      var r = n(6),
        i = n(88),
        a = n(89),
        o = n(2),
        c = n(87),
        l = n.n(c),
        u = n(112),
        d = n(187);
      function s(t) {
        var e = t.className,
          n = t.direction,
          a = t.index,
          c = t.marginDirection,
          l = t.children,
          u = t.split,
          d = t.wrap,
          s = o.useContext(f),
          b = s.horizontalSize,
          p = s.verticalSize,
          j = s.latestIndex,
          g = {};
        return (
          s.supportFlexGap ||
            ("vertical" === n
              ? a < j && (g = { marginBottom: b / (u ? 2 : 1) })
              : (g = Object(r.a)(
                  Object(r.a)({}, a < j && Object(i.a)({}, c, b / (u ? 2 : 1))),
                  d && { paddingBottom: p }
                ))),
          null === l || void 0 === l
            ? null
            : o.createElement(
                o.Fragment,
                null,
                o.createElement("div", { className: e, style: g }, l),
                a < j &&
                  u &&
                  o.createElement(
                    "span",
                    { className: "".concat(e, "-split"), style: g },
                    u
                  )
              )
        );
      }
      var b = n(228),
        p = function (t, e) {
          var n = {};
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) &&
              e.indexOf(r) < 0 &&
              (n[r] = t[r]);
          if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
              e.indexOf(r[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
                (n[r[i]] = t[r[i]]);
          }
          return n;
        },
        f = o.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        j = { small: 8, middle: 16, large: 24 };
      e.b = function (t) {
        var e,
          n = o.useContext(d.b),
          c = n.getPrefixCls,
          g = n.space,
          m = n.direction,
          O = t.size,
          h =
            void 0 === O
              ? (null === g || void 0 === g ? void 0 : g.size) || "small"
              : O,
          v = t.align,
          y = t.className,
          $ = t.children,
          k = t.direction,
          x = void 0 === k ? "horizontal" : k,
          S = t.prefixCls,
          I = t.split,
          w = t.style,
          _ = t.wrap,
          C = void 0 !== _ && _,
          A = p(t, [
            "size",
            "align",
            "className",
            "children",
            "direction",
            "prefixCls",
            "split",
            "style",
            "wrap",
          ]),
          N = Object(b.a)(),
          B = o.useMemo(
            function () {
              return (Array.isArray(h) ? h : [h, h]).map(function (t) {
                return (function (t) {
                  return "string" === typeof t ? j[t] : t || 0;
                })(t);
              });
            },
            [h]
          ),
          E = Object(a.a)(B, 2),
          M = E[0],
          D = E[1],
          z = Object(u.a)($, { keepEmpty: !0 }),
          F = void 0 === v && "horizontal" === x ? "center" : v,
          P = c("space", S),
          R = l()(
            P,
            "".concat(P, "-").concat(x),
            ((e = {}),
            Object(i.a)(e, "".concat(P, "-rtl"), "rtl" === m),
            Object(i.a)(e, "".concat(P, "-align-").concat(F), F),
            e),
            y
          ),
          q = "".concat(P, "-item"),
          L = "rtl" === m ? "marginLeft" : "marginRight",
          Q = 0,
          G = z.map(function (t, e) {
            return (
              null !== t && void 0 !== t && (Q = e),
              o.createElement(
                s,
                {
                  className: q,
                  key: "".concat(q, "-").concat(e),
                  direction: x,
                  index: e,
                  marginDirection: L,
                  split: I,
                  wrap: C,
                },
                t
              )
            );
          }),
          V = o.useMemo(
            function () {
              return {
                horizontalSize: M,
                verticalSize: D,
                latestIndex: Q,
                supportFlexGap: N,
              };
            },
            [M, D, Q, N]
          );
        if (0 === z.length) return null;
        var W = {};
        return (
          C && ((W.flexWrap = "wrap"), N || (W.marginBottom = -D)),
          N && ((W.columnGap = M), (W.rowGap = D)),
          o.createElement(
            "div",
            Object(r.a)(
              { className: R, style: Object(r.a)(Object(r.a)({}, W), w) },
              A
            ),
            o.createElement(f.Provider, { value: V }, G)
          )
        );
      };
    },
    536: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "Container", function () {
          return I;
        });
      var r = n(94),
        i = n(89),
        a = n(0),
        o = n(2),
        c = n(138),
        l = [
          "refetch",
          "fetchMore",
          "updateQuery",
          "startPolling",
          "subscribeToMore",
        ];
      var u,
        d,
        s = n(198),
        b = n(216),
        p = n(520),
        f = n(479),
        j = n(246),
        g = n.n(j),
        m = n(4),
        O = n(46),
        h = n(45),
        v = n(104),
        y = n(182),
        $ = n(101),
        k = n(11),
        x = [
          {
            title: [
              { k_title: "\uc804\uccb4\ubcf4\uae30", title: "all" },
              { k_title: "\uc218\uc694\uc911\uc2ec", title: "edu" },
              { k_title: "\uc120\ub3c4\uc790\uc591\uc131", title: "training" },
              { k_title: "\uac00\uce58\uacf5\uc720", title: "share" },
            ],
          },
          {
            title: [
              { k_title: "\uc804\uccb4\ubcf4\uae30", title: "all" },
              { k_title: "\ub124\ud2b8\uc6cc\ud06c", title: "network" },
              { k_title: "\ud504\ub85c\uc81d\ud2b8", title: "project" },
              { k_title: "\uc778\ud134\uc27d", title: "internship" },
            ],
          },
          {
            title: [
              { k_title: "\uc804\uccb4\ubcf4\uae30", title: "all" },
              { k_title: "SW\uae30\ucd08\uad50\uc721", title: "basic" },
              { k_title: "SW\uc804\uacf5\uad50\uc721", title: "major" },
              { k_title: "SW\uc735\ud569\uad50\uc721", title: "convergence" },
            ],
          },
        ],
        S =
          ((e.default = function () {
            var t = Object(m.i)(),
              e = t.param,
              n = t.subparam,
              r = Object(m.h)().state,
              u = Object(o.useState)(),
              d = Object(i.a)(u, 2),
              j = d[0],
              $ = d[1],
              w = Object(o.useState)(),
              _ = Object(i.a)(w, 2),
              C = _[0],
              A = _[1],
              N = Object(o.useState)(!1),
              B = Object(i.a)(N, 2),
              E = B[0],
              M = B[1],
              D = (function (t, e) {
                var n = Object(o.useState)({ called: !1, resolves: [] }),
                  r = n[0],
                  i = n[1],
                  u = Object(o.useCallback)(function (t) {
                    var e,
                      n = new Promise(function (t) {
                        return (e = t);
                      });
                    return (
                      i(function (n) {
                        return (
                          n.called &&
                            d &&
                            d.refetch(
                              null === t || void 0 === t ? void 0 : t.variables
                            ),
                          {
                            called: !0,
                            resolves: Object(a.g)(
                              Object(a.g)([], n.resolves, !0),
                              [e],
                              !1
                            ),
                            options: t,
                          }
                        );
                      }),
                      n
                    );
                  }, []),
                  d = Object(c.a)(
                    t,
                    Object(a.a)(Object(a.a)(Object(a.a)({}, e), r.options), {
                      fetchPolicy: r.called
                        ? null === e || void 0 === e
                          ? void 0
                          : e.fetchPolicy
                        : "standby",
                      skip: void 0,
                    })
                  );
                if (
                  (Object(o.useEffect)(
                    function () {
                      var t = r.resolves;
                      !d.loading &&
                        t.length &&
                        (i(function (t) {
                          return Object(a.a)(Object(a.a)({}, t), {
                            resolves: [],
                          });
                        }),
                        t.forEach(function (t) {
                          return t(d);
                        }));
                    },
                    [d, r]
                  ),
                  !r.called)
                ) {
                  d = Object(a.a)(Object(a.a)({}, d), {
                    loading: !1,
                    data: void 0,
                    error: void 0,
                    called: !1,
                  });
                  for (
                    var s = function (t) {
                        var e = d[t];
                        d[t] = function () {
                          for (var t = [], n = 0; n < arguments.length; n++)
                            t[n] = arguments[n];
                          return (
                            i(function (t) {
                              return Object(a.a)(Object(a.a)({}, t), {
                                called: !0,
                              });
                            }),
                            e.apply(void 0, t)
                          );
                        };
                      },
                      b = 0,
                      p = l;
                    b < p.length;
                    b++
                  )
                    s(p[b]);
                }
                return [u, d];
              })(v.k),
              z = Object(i.a)(D, 2),
              F = z[0],
              P = z[1],
              R = P.loading,
              q = P.data,
              L = P.refetch,
              Q = Object(o.useCallback)(function (t) {
                switch (t.split("-")[1]) {
                  case "aidnews":
                  case "valuenews":
                  case "coopnews":
                    return !0;
                  default:
                    return !1;
                }
              }, []);
            Object(o.useEffect)(
              function () {
                "achievement" === e && Q(n) ? M(!0) : M(!1);
              },
              [e, n, Q]
            );
            var G = Object(s.a)(v.e, {
                onCompleted: function (t) {
                  var e = t.deleteBoard,
                    n = e.ok,
                    r = e.err;
                  n
                    ? (h.b.success(
                        "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                      ),
                      L && L())
                    : h.b.error(r);
                },
              }),
              V = Object(i.a)(G, 1)[0],
              W = Object(o.useCallback)(
                function (t) {
                  if (j && C && "all" !== t) {
                    var e = C.filter(function (e) {
                      return e.type === t;
                    });
                    $(e);
                  }
                  "all" === t && $(C);
                },
                [j, C]
              );
            return (
              Object(o.useEffect)(
                function () {
                  F({ variables: { category: n } });
                },
                [F, n]
              ),
              Object(o.useEffect)(
                function () {
                  var t = function () {
                    L && L();
                  };
                  return (
                    r && r.refresh && t(),
                    function () {
                      return t();
                    }
                  );
                },
                [L, r]
              ),
              Object(o.useEffect)(
                function () {
                  if (q && q.getBoardByCategory && q.getBoardByCategory.data) {
                    var t = q.getBoardByCategory.data,
                      e = [];
                    t.map(function (n, r) {
                      var i = {
                        id: n.id,
                        index: t.length - r,
                        title: n.title,
                        createdAt: Object(y.a)(n.createdAt || ""),
                        category: n.category,
                        private: n.private || !1,
                        type: n.type || "",
                      };
                      return e.push(i);
                    }),
                      $(e),
                      A(e);
                  }
                },
                [q]
              ),
              R
                ? Object(k.jsx)(k.Fragment, { children: "loading" })
                : Object(k.jsxs)(I, {
                    children: [
                      E
                        ? Object(k.jsxs)("div", {
                            className: "sort",
                            children: [
                              Object(k.jsx)(O.b, {
                                to: "/admin/"
                                  .concat(e, "/create-")
                                  .concat(e, "?category=")
                                  .concat(n, "&param=")
                                  .concat(e, "&subparam=")
                                  .concat(n),
                                children: Object(k.jsx)(b.a, {
                                  type: "primary",
                                  style: { marginTop: 15, marginBottom: 20 },
                                  children: "\uae00\uc4f0\uae30",
                                }),
                              }),
                              Object(k.jsx)("div", {
                                className: "sort-menu",
                                children:
                                  "valuenews" === n.split("-")[1]
                                    ? x[0].title.map(function (t, e) {
                                        return Object(k.jsx)(
                                          b.a,
                                          {
                                            type: "default",
                                            className: "sort-menu-button",
                                            onClick: function () {
                                              return W(t.title);
                                            },
                                            children: t.k_title,
                                          },
                                          e
                                        );
                                      })
                                    : "coopnews" === n.split("-")[1]
                                    ? x[1].title.map(function (t, e) {
                                        return Object(k.jsx)(
                                          b.a,
                                          {
                                            type: "default",
                                            className: "sort-menu-button",
                                            onClick: function () {
                                              return W(t.title);
                                            },
                                            children: t.k_title,
                                          },
                                          e
                                        );
                                      })
                                    : x[2].title.map(function (t, e) {
                                        return Object(k.jsx)(
                                          b.a,
                                          {
                                            type: "default",
                                            className: "sort-menu-button",
                                            onClick: function () {
                                              return W(t.title);
                                            },
                                            children: t.k_title,
                                          },
                                          e
                                        );
                                      }),
                              }),
                            ],
                          })
                        : Object(k.jsx)(O.b, {
                            to: "/admin/"
                              .concat(e, "/create-")
                              .concat(e, "?category=")
                              .concat(n, "&param=")
                              .concat(e, "&subparam=")
                              .concat(n),
                            children: Object(k.jsx)(b.a, {
                              type: "primary",
                              style: { marginTop: 15, marginBottom: 20 },
                              children: "\uae00\uc4f0\uae30",
                            }),
                          }),
                      Object(k.jsxs)(p.a, {
                        dataSource: j,
                        rowKey: "id",
                        children: [
                          Object(k.jsx)(
                            g.a,
                            {
                              title: "\ubc88\ud638",
                              dataIndex: "index",
                              width: 80,
                            },
                            "index"
                          ),
                          Object(k.jsx)(
                            g.a,
                            {
                              title: "\uc81c\ubaa9",
                              dataIndex: "title",
                              ellipsis: !0,
                              render: function (t, r) {
                                return Object(k.jsx)(f.b, {
                                  children: Object(k.jsx)(O.b, {
                                    to: "/admin/"
                                      .concat(e, "/detail-")
                                      .concat(e, "?category=")
                                      .concat(n, "&id=")
                                      .concat(r.id),
                                    children: t,
                                  }),
                                });
                              },
                            },
                            "title"
                          ),
                          Object(k.jsx)(
                            g.a,
                            {
                              title: "\uc791\uc131\uc77c",
                              dataIndex: "createdAt",
                              width: 120,
                            },
                            "createdAt"
                          ),
                          Object(k.jsx)(
                            g.a,
                            {
                              title: "\uacf5\uac1c\uc5ec\ubd80",
                              width: 100,
                              render: function (t, e) {
                                return Object(k.jsx)(S, {
                                  size: "middle",
                                  private: e.private,
                                  children: Object(k.jsx)("span", {
                                    children: e.private
                                      ? "\ube44\uacf5\uac1c"
                                      : "\uacf5\uac1c",
                                  }),
                                });
                              },
                            },
                            "public"
                          ),
                          Object(k.jsx)(
                            g.a,
                            {
                              title: "\uc635\uc158",
                              width: 100,
                              render: function (t, e) {
                                return Object(k.jsx)(f.b, {
                                  size: "middle",
                                  children: Object(k.jsx)(b.a, {
                                    type: "primary",
                                    danger: !0,
                                    onClick: function () {
                                      return V({ variables: { id: e.id } });
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
          }),
          Object($.a)(f.b)(
            u || (u = Object(r.a)(["\n  & span {\n    color: ", ";\n  }\n"])),
            function (t) {
              return t.private ? "#ff4448" : "#27ae60";
            }
          )),
        I = $.a.div(
          d ||
            (d = Object(r.a)([
              "\n  & .sort {\n    display: flex;\n    justify-content: space-between;\n    padding-right: 30px;\n    align-items: center;\n    & .sort-menu {\n      display: flex;\n      & .sort-menu-button {\n        &:not(:last-child) {\n          margin-right: 15px;\n        }\n      }\n    }\n  }\n",
            ]))
        );
    },
  },
]);
//# sourceMappingURL=23.f8117ac2.chunk.js.map
