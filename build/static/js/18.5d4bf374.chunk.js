(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [18],
  {
    104: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return $;
      }),
        n.d(t, "l", function () {
          return k;
        }),
        n.d(t, "e", function () {
          return S;
        }),
        n.d(t, "j", function () {
          return w;
        }),
        n.d(t, "f", function () {
          return x;
        }),
        n.d(t, "g", function () {
          return C;
        }),
        n.d(t, "b", function () {
          return B;
        }),
        n.d(t, "c", function () {
          return N;
        }),
        n.d(t, "h", function () {
          return E;
        }),
        n.d(t, "k", function () {
          return I;
        }),
        n.d(t, "d", function () {
          return P;
        }),
        n.d(t, "i", function () {
          return _;
        });
      var r,
        a,
        o,
        i,
        c,
        l,
        u,
        s,
        d,
        b,
        f,
        p,
        g,
        m,
        v,
        y,
        j,
        O = n(94),
        h = n(548),
        $ = Object(h.a)(
          r ||
            (r = Object(O.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(h.a)(
          a ||
            (a = Object(O.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        S = Object(h.a)(
          o ||
            (o = Object(O.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(h.a)(
          i ||
            (i = Object(O.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object(h.a)(
            c ||
              (c = Object(O.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            l ||
              (l = Object(O.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            u ||
              (u = Object(O.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        C = Object(h.a)(
          s ||
            (s = Object(O.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(h.a)(
          d ||
            (d = Object(O.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(h.a)(
          b ||
            (b = Object(O.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        E =
          (Object(h.a)(
            f ||
              (f = Object(O.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            p ||
              (p = Object(O.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        I =
          (Object(h.a)(
            g ||
              (g = Object(O.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            m ||
              (m = Object(O.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        P = Object(h.a)(
          v ||
            (v = Object(O.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        _ =
          (Object(h.a)(
            y ||
              (y = Object(O.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            j ||
              (j = Object(O.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    107: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n(1),
        a = n(2),
        o = n(56);
      function i(e) {
        var t = Object(a.useContext)(Object(o.a)()),
          n = e || t.client;
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
    108: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var r,
        a = n(1);
      !(function (e) {
        (e[(e.Query = 0)] = "Query"),
          (e[(e.Mutation = 1)] = "Mutation"),
          (e[(e.Subscription = 2)] = "Subscription");
      })(r || (r = {}));
      var o = new Map();
      function i(e) {
        var t;
        switch (e) {
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
      function c(e, t) {
        var n = (function (e) {
            var t,
              n,
              i = o.get(e);
            if (i) return i;
            __DEV__
              ? Object(a.b)(
                  !!e && !!e.kind,
                  "Argument of ".concat(
                    e,
                    " passed to parser was not a valid GraphQL "
                  ) +
                    "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                )
              : Object(a.b)(!!e && !!e.kind, 30);
            var c = e.definitions.filter(function (e) {
                return "FragmentDefinition" === e.kind;
              }),
              l = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind && "query" === e.operation
                );
              }),
              u = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind && "mutation" === e.operation
                );
              }),
              s = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind &&
                  "subscription" === e.operation
                );
              });
            __DEV__
              ? Object(a.b)(
                  !c.length || l.length || u.length || s.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : Object(a.b)(!c.length || l.length || u.length || s.length, 31),
              __DEV__
                ? Object(a.b)(
                    l.length + u.length + s.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(e, " had ")
                        .concat(l.length, " queries, ")
                        .concat(s.length, " ") +
                      "subscriptions and ".concat(u.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : Object(a.b)(l.length + u.length + s.length <= 1, 32),
              (n = l.length ? r.Query : r.Mutation),
              l.length || u.length || (n = r.Subscription);
            var d = l.length ? l : u.length ? u : s;
            __DEV__
              ? Object(a.b)(
                  1 === d.length,
                  "react-apollo only supports one definition per HOC. ".concat(
                    e,
                    " had "
                  ) +
                    "".concat(d.length, " definitions. ") +
                    "You can use 'compose' to join multiple operation types to a component"
                )
              : Object(a.b)(1 === d.length, 33);
            var b = d[0];
            t = b.variableDefinitions || [];
            var f = {
              name: b.name && "Name" === b.name.kind ? b.name.value : "data",
              type: n,
              variables: t,
            };
            return o.set(e, f), f;
          })(e),
          c = i(t),
          l = i(n.type);
        __DEV__
          ? Object(a.b)(
              n.type === t,
              "Running a ".concat(c, " requires a graphql ") +
                "".concat(c, ", but a ").concat(l, " was used instead.")
            )
          : Object(a.b)(n.type === t, 34);
      }
    },
    133: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "f", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return l;
        });
      var r = function (e) {
          return (
            "storage" ===
            (null === e || void 0 === e ? void 0 : e.toString().split("-")[0])
          );
        },
        a = function (e) {
          var t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (t) {
            case "community":
              return (
                "notice" === n || "administration" === n || "storage" === n
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        o = function (e) {
          switch (
            null === e || void 0 === e ? void 0 : e.toString().split("-")[1]
          ) {
            case "aidnews":
            case "valuenews":
            case "coopnews":
              return !0;
            default:
              return !1;
          }
        },
        i = function (e) {
          var t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (t) {
            case "community":
              return (
                "notice" === n || "administration" === n || "storage" === n
              );
            case "storage":
            case "achievement":
              return !0;
            default:
              return !1;
          }
        },
        c = function (e) {
          return (
            "introduce" !==
            (null === e || void 0 === e ? void 0 : e.toString().split("-")[0])
          );
        },
        l = function (e) {
          switch (
            null === e || void 0 === e ? void 0 : e.toString().split("-")[1]
          ) {
            case "help":
            case "request":
              return !0;
            default:
              return !1;
          }
        };
    },
    140: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n(0),
        a = n(2),
        o = n(5),
        i = n(56),
        c = n(22),
        l = n(3),
        u = n(108),
        s = n(107);
      function d(e, t) {
        var n,
          d = Object(a.useContext)(Object(i.a)()),
          f = Object(s.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(u.b)(e, u.a.Query);
        var p,
          g = Object(a.useState)(function () {
            var n = b(e, t),
              r = null;
            return (
              d.renderPromises && (r = d.renderPromises.getSSRObservable(n)),
              r ||
                ((r = f.watchQuery(n)),
                d.renderPromises &&
                  d.renderPromises.registerSSRObservable(r, n)),
              d.renderPromises &&
                !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
                !(null === t || void 0 === t ? void 0 : t.skip) &&
                r.getCurrentResult().loading &&
                d.renderPromises.addQueryPromise(
                  {
                    getOptions: function () {
                      return b(e, t);
                    },
                    fetchData: function () {
                      return new Promise(function (e) {
                        var t = r.subscribe({
                          next: function (n) {
                            n.loading || (e(), t.unsubscribe());
                          },
                          error: function () {
                            e(), t.unsubscribe();
                          },
                          complete: function () {
                            e();
                          },
                        });
                      });
                    },
                  },
                  function () {
                    return null;
                  }
                ),
              r
            );
          }),
          m = g[0],
          v = g[1],
          y = Object(a.useState)(function () {
            var e,
              n,
              r = m.getCurrentResult();
            return (
              !r.loading &&
                t &&
                (r.error
                  ? null === (e = t.onError) ||
                    void 0 === e ||
                    e.call(t, r.error)
                  : r.data &&
                    (null === (n = t.onCompleted) ||
                      void 0 === n ||
                      n.call(t, r.data))),
              r
            );
          }),
          j = y[0],
          O = y[1],
          h = Object(a.useRef)({
            client: f,
            query: e,
            options: t,
            result: j,
            previousData: void 0,
            watchQueryOptions: b(e, t),
          });
        Object(a.useEffect)(
          function () {
            var n,
              r,
              a,
              i = b(e, t);
            if (h.current.client === f && Object(o.a)(h.current.query, e))
              Object(o.a)(h.current.watchQueryOptions, i) ||
                (m.setOptions(i).catch(function () {}),
                (a = m.getCurrentResult()),
                (h.current.watchQueryOptions = i));
            else {
              var c = f.watchQuery(i);
              v(c), (a = c.getCurrentResult());
            }
            if (a) {
              var l = h.current.result;
              l.data && (h.current.previousData = l.data),
                O((h.current.result = a)),
                !a.loading &&
                  t &&
                  (j.loading ||
                    (j.error
                      ? null === (n = t.onError) ||
                        void 0 === n ||
                        n.call(t, j.error)
                      : j.data &&
                        (null === (r = t.onCompleted) ||
                          void 0 === r ||
                          r.call(t, j.data))));
            }
            Object.assign(h.current, { client: f, query: e });
          },
          [m, f, e, t]
        ),
          Object(a.useEffect)(
            function () {
              if (!d.renderPromises) {
                var e = m.subscribe(t, function n(r) {
                  var a,
                    i,
                    c = m.last;
                  e.unsubscribe();
                  try {
                    m.resetLastResults(), (e = m.subscribe(t, n));
                  } finally {
                    m.last = c;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var u = h.current.result;
                  ((u && u.loading) || !Object(o.a)(r, u.error)) &&
                    (O(
                      (h.current.result = {
                        data: u.data,
                        error: r,
                        loading: !1,
                        networkStatus: l.a.error,
                      })
                    ),
                    null ===
                      (i =
                        null === (a = h.current.options) || void 0 === a
                          ? void 0
                          : a.onError) ||
                      void 0 === i ||
                      i.call(a, r));
                });
                return function () {
                  return e.unsubscribe();
                };
              }
              function t() {
                var e,
                  t,
                  n = h.current.result,
                  r = m.getCurrentResult();
                (n &&
                  n.loading === r.loading &&
                  n.networkStatus === r.networkStatus &&
                  Object(o.a)(n.data, r.data)) ||
                  (n.data && (h.current.previousData = n.data),
                  O((h.current.result = r)),
                  r.loading ||
                    null ===
                      (t =
                        null === (e = h.current.options) || void 0 === e
                          ? void 0
                          : e.onCompleted) ||
                    void 0 === t ||
                    t.call(e, r.data));
              }
            },
            [m, d.renderPromises, f.disableNetworkFetches]
          ),
          (p = (n = j).partial),
          (j = Object(r.f)(n, ["partial"])),
          !p ||
            !(null === t || void 0 === t ? void 0 : t.partialRefetch) ||
            j.loading ||
            (j.data && 0 !== Object.keys(j.data).length) ||
            "cache-only" === m.options.fetchPolicy ||
            ((j = Object(r.a)(Object(r.a)({}, j), {
              loading: !0,
              networkStatus: l.a.refetch,
            })),
            m.refetch()),
          d.renderPromises &&
            !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
            !(null === t || void 0 === t ? void 0 : t.skip) &&
            j.loading &&
            m.setOptions(b(e, t)).catch(function () {}),
          Object.assign(h.current, { options: t }),
          (d.renderPromises || f.disableNetworkFetches) &&
          !1 === (null === t || void 0 === t ? void 0 : t.ssr)
            ? (j = h.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: l.a.loading,
                })
            : ((null === t || void 0 === t ? void 0 : t.skip) ||
                "standby" ===
                  (null === t || void 0 === t ? void 0 : t.fetchPolicy)) &&
              (j = {
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: l.a.ready,
              }),
          j.errors &&
            j.errors.length &&
            (j = Object(r.a)(Object(r.a)({}, j), {
              error: j.error || new c.a({ graphQLErrors: j.errors }),
            }));
        var $ = Object(a.useMemo)(
          function () {
            return {
              refetch: m.refetch.bind(m),
              fetchMore: m.fetchMore.bind(m),
              updateQuery: m.updateQuery.bind(m),
              startPolling: m.startPolling.bind(m),
              stopPolling: m.stopPolling.bind(m),
              subscribeToMore: m.subscribeToMore.bind(m),
            };
          },
          [m]
        );
        return Object(r.a)(
          Object(r.a)(Object(r.a)({}, $), {
            variables: b(e, t).variables,
            client: f,
            called: !0,
            previousData: h.current.previousData,
          }),
          j
        );
      }
      function b(e, t) {
        var n;
        void 0 === t && (t = {});
        var a = t.skip,
          o =
            (t.ssr,
            t.onCompleted,
            t.onError,
            t.displayName,
            Object(r.f)(t, [
              "skip",
              "ssr",
              "onCompleted",
              "onError",
              "displayName",
            ]));
        return (
          a
            ? (o.fetchPolicy = "standby")
            : ((!(null === (n = o.context) || void 0 === n
                ? void 0
                : n.renderPromises) ||
                ("network-only" !== o.fetchPolicy &&
                  "cache-and-network" !== o.fetchPolicy)) &&
                o.fetchPolicy) ||
              (o.fetchPolicy = "cache-first"),
          o.variables || (o.variables = {}),
          Object(r.a)({ query: e }, o)
        );
      }
    },
    148: function (e, t, n) {
      "use strict";
      var r = n(90),
        a = n(2),
        o = {
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
        i = n(93),
        c = function (e, t) {
          return a.createElement(
            i.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: o })
          );
        };
      c.displayName = "CloseOutlined";
      t.a = a.forwardRef(c);
    },
    161: function (e, t, n) {
      "use strict";
      var r = n(90),
        a = n(2),
        o = {
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
        i = n(93),
        c = function (e, t) {
          return a.createElement(
            i.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: o })
          );
        };
      c.displayName = "CheckOutlined";
      t.a = a.forwardRef(c);
    },
    245: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return O;
      });
      var r = n(88),
        a = n(89),
        o = n(95),
        i = n(2),
        c = n(87),
        l = n.n(c),
        u = n(113),
        s = n(145),
        d = n(99),
        b = n(170),
        f = n(6);
      function p(e) {
        return void 0 !== e && null !== e;
      }
      var g = function (e) {
        var t,
          n = e.itemPrefixCls,
          a = e.component,
          o = e.span,
          c = e.className,
          u = e.style,
          s = e.labelStyle,
          d = e.contentStyle,
          b = e.bordered,
          f = e.label,
          g = e.content,
          m = e.colon,
          v = a;
        return b
          ? i.createElement(
              v,
              {
                className: l()(
                  ((t = {}),
                  Object(r.a)(t, "".concat(n, "-item-label"), p(f)),
                  Object(r.a)(t, "".concat(n, "-item-content"), p(g)),
                  t),
                  c
                ),
                style: u,
                colSpan: o,
              },
              p(f) && i.createElement("span", { style: s }, f),
              p(g) && i.createElement("span", { style: d }, g)
            )
          : i.createElement(
              v,
              {
                className: l()("".concat(n, "-item"), c),
                style: u,
                colSpan: o,
              },
              i.createElement(
                "div",
                { className: "".concat(n, "-item-container") },
                f &&
                  i.createElement(
                    "span",
                    {
                      className: l()(
                        "".concat(n, "-item-label"),
                        Object(r.a)({}, "".concat(n, "-item-no-colon"), !m)
                      ),
                      style: s,
                    },
                    f
                  ),
                g &&
                  i.createElement(
                    "span",
                    { className: l()("".concat(n, "-item-content")), style: d },
                    g
                  )
              )
            );
      };
      function m(e, t, n) {
        var r = t.colon,
          a = t.prefixCls,
          o = t.bordered,
          c = n.component,
          l = n.type,
          u = n.showLabel,
          s = n.showContent,
          d = n.labelStyle,
          b = n.contentStyle;
        return e.map(function (e, t) {
          var n = e.props,
            p = n.label,
            m = n.children,
            v = n.prefixCls,
            y = void 0 === v ? a : v,
            j = n.className,
            O = n.style,
            h = n.labelStyle,
            $ = n.contentStyle,
            k = n.span,
            S = void 0 === k ? 1 : k,
            w = e.key;
          return "string" === typeof c
            ? i.createElement(g, {
                key: "".concat(l, "-").concat(w || t),
                className: j,
                style: O,
                labelStyle: Object(f.a)(Object(f.a)({}, d), h),
                contentStyle: Object(f.a)(Object(f.a)({}, b), $),
                span: S,
                colon: r,
                component: c,
                itemPrefixCls: y,
                bordered: o,
                label: u ? p : null,
                content: s ? m : null,
              })
            : [
                i.createElement(g, {
                  key: "label-".concat(w || t),
                  className: j,
                  style: Object(f.a)(Object(f.a)(Object(f.a)({}, d), O), h),
                  span: 1,
                  colon: r,
                  component: c[0],
                  itemPrefixCls: y,
                  bordered: o,
                  label: p,
                }),
                i.createElement(g, {
                  key: "content-".concat(w || t),
                  className: j,
                  style: Object(f.a)(Object(f.a)(Object(f.a)({}, b), O), $),
                  span: 2 * S - 1,
                  component: c[1],
                  itemPrefixCls: y,
                  bordered: o,
                  content: m,
                }),
              ];
        });
      }
      var v = function (e) {
          var t = i.useContext(O),
            n = e.prefixCls,
            r = e.vertical,
            a = e.row,
            o = e.index,
            c = e.bordered;
          return r
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "tr",
                  { key: "label-".concat(o), className: "".concat(n, "-row") },
                  m(
                    a,
                    e,
                    Object(f.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      t
                    )
                  )
                ),
                i.createElement(
                  "tr",
                  {
                    key: "content-".concat(o),
                    className: "".concat(n, "-row"),
                  },
                  m(
                    a,
                    e,
                    Object(f.a)(
                      { component: "td", type: "content", showContent: !0 },
                      t
                    )
                  )
                )
              )
            : i.createElement(
                "tr",
                { key: o, className: "".concat(n, "-row") },
                m(
                  a,
                  e,
                  Object(f.a)(
                    {
                      component: c ? ["th", "td"] : "td",
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
        j = n(111),
        O = i.createContext({}),
        h = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function $(e, t, n) {
        var r = e;
        return (
          (void 0 === t || t > n) &&
            ((r = Object(j.a)(e, { span: n })),
            Object(d.a)(
              void 0 === t,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          r
        );
      }
      function k(e) {
        var t,
          n = e.prefixCls,
          c = e.title,
          d = e.extra,
          f = e.column,
          p = void 0 === f ? h : f,
          g = e.colon,
          m = void 0 === g || g,
          y = e.bordered,
          j = e.layout,
          k = e.children,
          S = e.className,
          w = e.style,
          x = e.size,
          C = e.labelStyle,
          B = e.contentStyle,
          N = i.useContext(b.b),
          E = N.getPrefixCls,
          I = N.direction,
          P = E("descriptions", n),
          _ = i.useState({}),
          D = Object(a.a)(_, 2),
          L = D[0],
          R = D[1],
          Q = (function (e, t) {
            if ("number" === typeof e) return e;
            if ("object" === Object(o.a)(e))
              for (var n = 0; n < s.b.length; n++) {
                var r = s.b[n];
                if (t[r] && void 0 !== e[r]) return e[r] || h[r];
              }
            return 3;
          })(p, L);
        i.useEffect(function () {
          var e = s.a.subscribe(function (e) {
            "object" === Object(o.a)(p) && R(e);
          });
          return function () {
            s.a.unsubscribe(e);
          };
        }, []);
        var M = (function (e, t) {
            var n = Object(u.a)(e).filter(function (e) {
                return e;
              }),
              r = [],
              a = [],
              o = t;
            return (
              n.forEach(function (e, i) {
                var c,
                  l = null === (c = e.props) || void 0 === c ? void 0 : c.span,
                  u = l || 1;
                if (i === n.length - 1)
                  return a.push($(e, l, o)), void r.push(a);
                u < o
                  ? ((o -= u), a.push(e))
                  : (a.push($(e, u, o)), r.push(a), (o = t), (a = []));
              }),
              r
            );
          })(k, Q),
          q = i.useMemo(
            function () {
              return { labelStyle: C, contentStyle: B };
            },
            [C, B]
          );
        return i.createElement(
          O.Provider,
          { value: q },
          i.createElement(
            "div",
            {
              className: l()(
                P,
                ((t = {}),
                Object(r.a)(
                  t,
                  "".concat(P, "-").concat(x),
                  x && "default" !== x
                ),
                Object(r.a)(t, "".concat(P, "-bordered"), !!y),
                Object(r.a)(t, "".concat(P, "-rtl"), "rtl" === I),
                t),
                S
              ),
              style: w,
            },
            (c || d) &&
              i.createElement(
                "div",
                { className: "".concat(P, "-header") },
                c &&
                  i.createElement(
                    "div",
                    { className: "".concat(P, "-title") },
                    c
                  ),
                d &&
                  i.createElement(
                    "div",
                    { className: "".concat(P, "-extra") },
                    d
                  )
              ),
            i.createElement(
              "div",
              { className: "".concat(P, "-view") },
              i.createElement(
                "table",
                null,
                i.createElement(
                  "tbody",
                  null,
                  M.map(function (e, t) {
                    return i.createElement(v, {
                      key: t,
                      index: t,
                      colon: m,
                      prefixCls: P,
                      vertical: "vertical" === j,
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
    558: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a,
        o = n(89),
        i = n(245),
        c = n(547),
        l = n(2),
        u = n(4),
        s = n(94),
        d = n(103),
        b = n(200),
        f = d.a.div(
          r ||
            (r = Object(s.a)([
              "\n  & .button-group {\n    display: flex;\n  }\n\n  &.attach-group {\n    display: flex;\n    flex-direction: column;\n  }\n\n  img {\n    object-fit: contain;\n    width: 400px;\n    height: 400px;\n  }\n",
            ]))
        ),
        p = Object(d.a)(b.a)(a || (a = Object(s.a)(["\n  margin: 15px 0;\n"]))),
        g = n(140),
        m = n(104),
        v = n(133),
        y = n(11);
      t.default = function () {
        var e,
          t,
          n = Object(u.g)(),
          r = Object(u.i)(),
          a = r.param,
          s = r.subparam,
          d = s,
          b = Object(u.h)().state,
          j = Object(l.useState)(),
          O = Object(o.a)(j, 2),
          h = O[0],
          $ = O[1],
          k = Object(l.useState)(),
          S = Object(o.a)(k, 2),
          w = S[0],
          x = S[1],
          C = Object(l.useState)(!1),
          B = Object(o.a)(C, 2),
          N = B[0],
          E = B[1],
          I = Object(l.useState)(!1),
          P = Object(o.a)(I, 2),
          _ = P[0],
          D = P[1];
        Object(l.useEffect)(
          function () {
            E(Object(v.b)(s)), D(Object(v.d)(s));
          },
          [s]
        );
        var L = Object(g.a)(m.l, { variables: { category: d } }),
          R = L.data,
          Q = L.loading,
          M = L.refetch;
        return (
          Object(l.useEffect)(
            function () {
              var e = function () {
                var e;
                null !== R &&
                void 0 !== R &&
                R.getBoardByCategory.ok &&
                0 !==
                  (null === (e = R.getBoardByCategory.data) || void 0 === e
                    ? void 0
                    : e.length)
                  ? R.getBoardByCategory.data &&
                    0 !== R.getBoardByCategory.data.length &&
                    (R.getBoardByCategory.data[0].files &&
                      $(R.getBoardByCategory.data[0].files),
                    R.getBoardByCategory.data[0].images &&
                      x(R.getBoardByCategory.data[0].images))
                  : ($([]), x([]));
              };
              return (
                e(),
                function () {
                  return e();
                }
              );
            },
            [R]
          ),
          Object(l.useEffect)(
            function () {
              var e = function () {
                M && M();
              };
              return (
                b && b.refresh && e(),
                function () {
                  return e();
                }
              );
            },
            [M, b]
          ),
          Q
            ? Object(y.jsx)(y.Fragment, { children: "loading" })
            : Object(y.jsxs)(f, {
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
                        (null === R ||
                        void 0 === R ||
                        null === (e = R.getBoardByCategory.data) ||
                        void 0 === e
                          ? void 0
                          : e.length) &&
                      null !== R &&
                      void 0 !== R &&
                      R.getBoardByCategory.ok
                        ? Object(y.jsx)(p, {
                            type: "primary",
                            style: { marginLeft: 25 },
                            onClick: function () {
                              return n.push(
                                "/admin/"
                                  .concat(a, "/edit-image-")
                                  .concat(a, "?category=")
                                  .concat(s, "&id=")
                                  .concat(
                                    R.getBoardByCategory.data &&
                                      R.getBoardByCategory.data[0].id
                                  )
                              );
                            },
                            children: "\uc218\uc815\ud558\uae30",
                          })
                        : Object(y.jsx)(p, {
                            type: "primary",
                            style: { marginLeft: 25 },
                            onClick: function () {
                              return n.push(
                                "/admin/"
                                  .concat(a, "/create-image-")
                                  .concat(a, "?category=")
                                  .concat(s, "&param=")
                                  .concat(a, "&subparam=")
                                  .concat(s)
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
                      _ &&
                        Object(y.jsx)(i.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            0 !==
                              (null === R ||
                              void 0 === R ||
                              null === (t = R.getBoardByCategory.data) ||
                              void 0 === t
                                ? void 0
                                : t.length) &&
                            null !== R &&
                            void 0 !== R &&
                            R.getBoardByCategory.ok
                              ? Object(y.jsx)("a", {
                                  href: "".concat(
                                    R.getBoardByCategory.data &&
                                      R.getBoardByCategory.data[0].link
                                  ),
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children:
                                    R.getBoardByCategory.data &&
                                    R.getBoardByCategory.data[0].link,
                                })
                              : Object(y.jsx)(c.a.Text, {
                                  children:
                                    "\ub9c1\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                                }),
                        }),
                      N &&
                        Object(y.jsx)(i.b.Item, {
                          label: "\ud30c\uc77c",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            h && h.length
                              ? h.map(function (e, t) {
                                  return Object(y.jsx)(
                                    "span",
                                    {
                                      className: "attach-group",
                                      children: Object(y.jsx)("a", {
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
                          w && w[0]
                            ? Object(y.jsx)("img", {
                                src: w[0].url,
                                alt: w[0].fileName,
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
//# sourceMappingURL=18.5d4bf374.chunk.js.map
