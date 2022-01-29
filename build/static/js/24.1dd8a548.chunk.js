(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [24],
  {
    107: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var r = n(1),
        a = n(2),
        o = n(56);
      function c(e) {
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
          return i;
        });
      var r,
        a = n(1);
      !(function (e) {
        (e[(e.Query = 0)] = "Query"),
          (e[(e.Mutation = 1)] = "Mutation"),
          (e[(e.Subscription = 2)] = "Subscription");
      })(r || (r = {}));
      var o = new Map();
      function c(e) {
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
      function i(e, t) {
        var n = (function (e) {
            var t,
              n,
              c = o.get(e);
            if (c) return c;
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
            var i = e.definitions.filter(function (e) {
                return "FragmentDefinition" === e.kind;
              }),
              l = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind && "query" === e.operation
                );
              }),
              s = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind && "mutation" === e.operation
                );
              }),
              u = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind &&
                  "subscription" === e.operation
                );
              });
            __DEV__
              ? Object(a.b)(
                  !i.length || l.length || s.length || u.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : Object(a.b)(!i.length || l.length || s.length || u.length, 31),
              __DEV__
                ? Object(a.b)(
                    l.length + s.length + u.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(e, " had ")
                        .concat(l.length, " queries, ")
                        .concat(u.length, " ") +
                      "subscriptions and ".concat(s.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : Object(a.b)(l.length + s.length + u.length <= 1, 32),
              (n = l.length ? r.Query : r.Mutation),
              l.length || s.length || (n = r.Subscription);
            var d = l.length ? l : s.length ? s : u;
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
            var p = {
              name: b.name && "Name" === b.name.kind ? b.name.value : "data",
              type: n,
              variables: t,
            };
            return o.set(e, p), p;
          })(e),
          i = c(t),
          l = c(n.type);
        __DEV__
          ? Object(a.b)(
              n.type === t,
              "Running a ".concat(i, " requires a graphql ") +
                "".concat(i, ", but a ").concat(l, " was used instead.")
            )
          : Object(a.b)(n.type === t, 34);
      }
    },
    139: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n(0),
        a = n(2),
        o = n(5),
        c = n(56),
        i = n(22),
        l = n(3),
        s = n(108),
        u = n(107);
      function d(e, t) {
        var n,
          d = Object(a.useContext)(Object(c.a)()),
          p = Object(u.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(s.b)(e, s.a.Query);
        var f,
          v = Object(a.useState)(function () {
            var n = b(e, t),
              r = null;
            return (
              d.renderPromises && (r = d.renderPromises.getSSRObservable(n)),
              r ||
                ((r = p.watchQuery(n)),
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
          m = v[0],
          h = v[1],
          O = Object(a.useState)(function () {
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
          y = O[0],
          g = O[1],
          j = Object(a.useRef)({
            client: p,
            query: e,
            options: t,
            result: y,
            previousData: void 0,
            watchQueryOptions: b(e, t),
          });
        Object(a.useEffect)(
          function () {
            var n,
              r,
              a,
              c = b(e, t);
            if (j.current.client === p && Object(o.a)(j.current.query, e))
              Object(o.a)(j.current.watchQueryOptions, c) ||
                (m.setOptions(c).catch(function () {}),
                (a = m.getCurrentResult()),
                (j.current.watchQueryOptions = c));
            else {
              var i = p.watchQuery(c);
              h(i), (a = i.getCurrentResult());
            }
            if (a) {
              var l = j.current.result;
              l.data && (j.current.previousData = l.data),
                g((j.current.result = a)),
                !a.loading &&
                  t &&
                  (y.loading ||
                    (y.error
                      ? null === (n = t.onError) ||
                        void 0 === n ||
                        n.call(t, y.error)
                      : y.data &&
                        (null === (r = t.onCompleted) ||
                          void 0 === r ||
                          r.call(t, y.data))));
            }
            Object.assign(j.current, { client: p, query: e });
          },
          [m, p, e, t]
        ),
          Object(a.useEffect)(
            function () {
              if (!d.renderPromises) {
                var e = m.subscribe(t, function n(r) {
                  var a,
                    c,
                    i = m.last;
                  e.unsubscribe();
                  try {
                    m.resetLastResults(), (e = m.subscribe(t, n));
                  } finally {
                    m.last = i;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var s = j.current.result;
                  ((s && s.loading) || !Object(o.a)(r, s.error)) &&
                    (g(
                      (j.current.result = {
                        data: s.data,
                        error: r,
                        loading: !1,
                        networkStatus: l.a.error,
                      })
                    ),
                    null ===
                      (c =
                        null === (a = j.current.options) || void 0 === a
                          ? void 0
                          : a.onError) ||
                      void 0 === c ||
                      c.call(a, r));
                });
                return function () {
                  return e.unsubscribe();
                };
              }
              function t() {
                var e,
                  t,
                  n = j.current.result,
                  r = m.getCurrentResult();
                (n &&
                  n.loading === r.loading &&
                  n.networkStatus === r.networkStatus &&
                  Object(o.a)(n.data, r.data)) ||
                  (n.data && (j.current.previousData = n.data),
                  g((j.current.result = r)),
                  r.loading ||
                    null ===
                      (t =
                        null === (e = j.current.options) || void 0 === e
                          ? void 0
                          : e.onCompleted) ||
                    void 0 === t ||
                    t.call(e, r.data));
              }
            },
            [m, d.renderPromises, p.disableNetworkFetches]
          ),
          (f = (n = y).partial),
          (y = Object(r.f)(n, ["partial"])),
          !f ||
            !(null === t || void 0 === t ? void 0 : t.partialRefetch) ||
            y.loading ||
            (y.data && 0 !== Object.keys(y.data).length) ||
            "cache-only" === m.options.fetchPolicy ||
            ((y = Object(r.a)(Object(r.a)({}, y), {
              loading: !0,
              networkStatus: l.a.refetch,
            })),
            m.refetch()),
          d.renderPromises &&
            !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
            !(null === t || void 0 === t ? void 0 : t.skip) &&
            y.loading &&
            m.setOptions(b(e, t)).catch(function () {}),
          Object.assign(j.current, { options: t }),
          (d.renderPromises || p.disableNetworkFetches) &&
          !1 === (null === t || void 0 === t ? void 0 : t.ssr)
            ? (y = j.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: l.a.loading,
                })
            : ((null === t || void 0 === t ? void 0 : t.skip) ||
                "standby" ===
                  (null === t || void 0 === t ? void 0 : t.fetchPolicy)) &&
              (y = {
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: l.a.ready,
              }),
          y.errors &&
            y.errors.length &&
            (y = Object(r.a)(Object(r.a)({}, y), {
              error: y.error || new i.a({ graphQLErrors: y.errors }),
            }));
        var C = Object(a.useMemo)(
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
          Object(r.a)(Object(r.a)({}, C), {
            variables: b(e, t).variables,
            client: p,
            called: !0,
            previousData: j.current.previousData,
          }),
          y
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
    164: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n(0),
        a = n(2),
        o = n(75),
        c = n(5),
        i = n(108),
        l = n(22),
        s = n(107);
      function u(e, t) {
        var n = Object(s.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(i.b)(e, i.a.Mutation);
        var u = Object(a.useState)({ called: !1, loading: !1, client: n }),
          d = u[0],
          b = u[1],
          p = Object(a.useRef)({
            result: d,
            mutationId: 0,
            isMounted: !0,
            client: n,
            mutation: e,
            options: t,
          });
        Object.assign(p.current, { client: n, options: t, mutation: e });
        var f = Object(a.useCallback)(function (e) {
            void 0 === e && (e = {});
            var t = p.current,
              n = t.client,
              a = t.options,
              i = t.mutation,
              s = Object(r.a)(Object(r.a)({}, a), { mutation: i });
            p.current.result.loading ||
              s.ignoreResults ||
              b(
                (p.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: n,
                })
              );
            var u = ++p.current.mutationId,
              d = Object(o.b)(s, e);
            return n
              .mutate(d)
              .then(function (t) {
                var r,
                  a,
                  o = t.data,
                  i = t.errors,
                  f =
                    i && i.length > 0 ? new l.a({ graphQLErrors: i }) : void 0;
                if (u === p.current.mutationId && !d.ignoreResults) {
                  var v = {
                    called: !0,
                    loading: !1,
                    data: o,
                    error: f,
                    client: n,
                  };
                  p.current.isMounted &&
                    !Object(c.a)(p.current.result, v) &&
                    b((p.current.result = v));
                }
                return (
                  null === (r = s.onCompleted) ||
                    void 0 === r ||
                    r.call(s, t.data),
                  null === (a = e.onCompleted) ||
                    void 0 === a ||
                    a.call(e, t.data),
                  t
                );
              })
              .catch(function (t) {
                var r, a;
                if (u === p.current.mutationId && p.current.isMounted) {
                  var o = {
                    loading: !1,
                    error: t,
                    data: void 0,
                    called: !0,
                    client: n,
                  };
                  Object(c.a)(p.current.result, o) || b((p.current.result = o));
                }
                if (s.onError || d.onError)
                  return (
                    null === (r = s.onError) || void 0 === r || r.call(s, t),
                    null === (a = e.onError) || void 0 === a || a.call(e, t),
                    { data: void 0, errors: t }
                  );
                throw t;
              });
          }, []),
          v = Object(a.useCallback)(function () {
            b({ called: !1, loading: !1, client: n });
          }, []);
        return (
          Object(a.useEffect)(function () {
            return function () {
              p.current.isMounted = !1;
            };
          }, []),
          [f, Object(r.a)({ reset: v }, d)]
        );
      }
    },
    245: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var r = n(88),
        a = n(89),
        o = n(95),
        c = n(2),
        i = n(87),
        l = n.n(i),
        s = n(113),
        u = n(144),
        d = n(99),
        b = n(170),
        p = n(6);
      function f(e) {
        return void 0 !== e && null !== e;
      }
      var v = function (e) {
        var t,
          n = e.itemPrefixCls,
          a = e.component,
          o = e.span,
          i = e.className,
          s = e.style,
          u = e.labelStyle,
          d = e.contentStyle,
          b = e.bordered,
          p = e.label,
          v = e.content,
          m = e.colon,
          h = a;
        return b
          ? c.createElement(
              h,
              {
                className: l()(
                  ((t = {}),
                  Object(r.a)(t, "".concat(n, "-item-label"), f(p)),
                  Object(r.a)(t, "".concat(n, "-item-content"), f(v)),
                  t),
                  i
                ),
                style: s,
                colSpan: o,
              },
              f(p) && c.createElement("span", { style: u }, p),
              f(v) && c.createElement("span", { style: d }, v)
            )
          : c.createElement(
              h,
              {
                className: l()("".concat(n, "-item"), i),
                style: s,
                colSpan: o,
              },
              c.createElement(
                "div",
                { className: "".concat(n, "-item-container") },
                p &&
                  c.createElement(
                    "span",
                    {
                      className: l()(
                        "".concat(n, "-item-label"),
                        Object(r.a)({}, "".concat(n, "-item-no-colon"), !m)
                      ),
                      style: u,
                    },
                    p
                  ),
                v &&
                  c.createElement(
                    "span",
                    { className: l()("".concat(n, "-item-content")), style: d },
                    v
                  )
              )
            );
      };
      function m(e, t, n) {
        var r = t.colon,
          a = t.prefixCls,
          o = t.bordered,
          i = n.component,
          l = n.type,
          s = n.showLabel,
          u = n.showContent,
          d = n.labelStyle,
          b = n.contentStyle;
        return e.map(function (e, t) {
          var n = e.props,
            f = n.label,
            m = n.children,
            h = n.prefixCls,
            O = void 0 === h ? a : h,
            y = n.className,
            g = n.style,
            j = n.labelStyle,
            C = n.contentStyle,
            w = n.span,
            E = void 0 === w ? 1 : w,
            k = e.key;
          return "string" === typeof i
            ? c.createElement(v, {
                key: "".concat(l, "-").concat(k || t),
                className: y,
                style: g,
                labelStyle: Object(p.a)(Object(p.a)({}, d), j),
                contentStyle: Object(p.a)(Object(p.a)({}, b), C),
                span: E,
                colon: r,
                component: i,
                itemPrefixCls: O,
                bordered: o,
                label: s ? f : null,
                content: u ? m : null,
              })
            : [
                c.createElement(v, {
                  key: "label-".concat(k || t),
                  className: y,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, d), g), j),
                  span: 1,
                  colon: r,
                  component: i[0],
                  itemPrefixCls: O,
                  bordered: o,
                  label: f,
                }),
                c.createElement(v, {
                  key: "content-".concat(k || t),
                  className: y,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, b), g), C),
                  span: 2 * E - 1,
                  component: i[1],
                  itemPrefixCls: O,
                  bordered: o,
                  content: m,
                }),
              ];
        });
      }
      var h = function (e) {
          var t = c.useContext(g),
            n = e.prefixCls,
            r = e.vertical,
            a = e.row,
            o = e.index,
            i = e.bordered;
          return r
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(
                  "tr",
                  { key: "label-".concat(o), className: "".concat(n, "-row") },
                  m(
                    a,
                    e,
                    Object(p.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      t
                    )
                  )
                ),
                c.createElement(
                  "tr",
                  {
                    key: "content-".concat(o),
                    className: "".concat(n, "-row"),
                  },
                  m(
                    a,
                    e,
                    Object(p.a)(
                      { component: "td", type: "content", showContent: !0 },
                      t
                    )
                  )
                )
              )
            : c.createElement(
                "tr",
                { key: o, className: "".concat(n, "-row") },
                m(
                  a,
                  e,
                  Object(p.a)(
                    {
                      component: i ? ["th", "td"] : "td",
                      type: "item",
                      showLabel: !0,
                      showContent: !0,
                    },
                    t
                  )
                )
              );
        },
        O = function (e) {
          return e.children;
        },
        y = n(111),
        g = c.createContext({}),
        j = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function C(e, t, n) {
        var r = e;
        return (
          (void 0 === t || t > n) &&
            ((r = Object(y.a)(e, { span: n })),
            Object(d.a)(
              void 0 === t,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          r
        );
      }
      function w(e) {
        var t,
          n = e.prefixCls,
          i = e.title,
          d = e.extra,
          p = e.column,
          f = void 0 === p ? j : p,
          v = e.colon,
          m = void 0 === v || v,
          O = e.bordered,
          y = e.layout,
          w = e.children,
          E = e.className,
          k = e.style,
          S = e.size,
          N = e.labelStyle,
          x = e.contentStyle,
          P = c.useContext(b.b),
          _ = P.getPrefixCls,
          D = P.direction,
          Q = _("descriptions", n),
          M = c.useState({}),
          R = Object(a.a)(M, 2),
          q = R[0],
          I = R[1],
          L = (function (e, t) {
            if ("number" === typeof e) return e;
            if ("object" === Object(o.a)(e))
              for (var n = 0; n < u.b.length; n++) {
                var r = u.b[n];
                if (t[r] && void 0 !== e[r]) return e[r] || j[r];
              }
            return 3;
          })(f, q);
        c.useEffect(function () {
          var e = u.a.subscribe(function (e) {
            "object" === Object(o.a)(f) && I(e);
          });
          return function () {
            u.a.unsubscribe(e);
          };
        }, []);
        var V = (function (e, t) {
            var n = Object(s.a)(e).filter(function (e) {
                return e;
              }),
              r = [],
              a = [],
              o = t;
            return (
              n.forEach(function (e, c) {
                var i,
                  l = null === (i = e.props) || void 0 === i ? void 0 : i.span,
                  s = l || 1;
                if (c === n.length - 1)
                  return a.push(C(e, l, o)), void r.push(a);
                s < o
                  ? ((o -= s), a.push(e))
                  : (a.push(C(e, s, o)), r.push(a), (o = t), (a = []));
              }),
              r
            );
          })(w, L),
          T = c.useMemo(
            function () {
              return { labelStyle: N, contentStyle: x };
            },
            [N, x]
          );
        return c.createElement(
          g.Provider,
          { value: T },
          c.createElement(
            "div",
            {
              className: l()(
                Q,
                ((t = {}),
                Object(r.a)(
                  t,
                  "".concat(Q, "-").concat(S),
                  S && "default" !== S
                ),
                Object(r.a)(t, "".concat(Q, "-bordered"), !!O),
                Object(r.a)(t, "".concat(Q, "-rtl"), "rtl" === D),
                t),
                E
              ),
              style: k,
            },
            (i || d) &&
              c.createElement(
                "div",
                { className: "".concat(Q, "-header") },
                i &&
                  c.createElement(
                    "div",
                    { className: "".concat(Q, "-title") },
                    i
                  ),
                d &&
                  c.createElement(
                    "div",
                    { className: "".concat(Q, "-extra") },
                    d
                  )
              ),
            c.createElement(
              "div",
              { className: "".concat(Q, "-view") },
              c.createElement(
                "table",
                null,
                c.createElement(
                  "tbody",
                  null,
                  V.map(function (e, t) {
                    return c.createElement(h, {
                      key: t,
                      index: t,
                      colon: m,
                      prefixCls: Q,
                      vertical: "vertical" === y,
                      bordered: O,
                      row: e,
                    });
                  })
                )
              )
            )
          )
        );
      }
      w.Item = O;
      t.b = w;
    },
    327: function (e, t, n) {
      "use strict";
      var r = n(6),
        a = n(88),
        o = n(2),
        c = n(89),
        i = n(96),
        l = n(87),
        s = n.n(l),
        u = n(123),
        d = n(124),
        b = o.forwardRef(function (e, t) {
          var n,
            r = e.prefixCls,
            l = void 0 === r ? "rc-switch" : r,
            b = e.className,
            p = e.checked,
            f = e.defaultChecked,
            v = e.disabled,
            m = e.loadingIcon,
            h = e.checkedChildren,
            O = e.unCheckedChildren,
            y = e.onClick,
            g = e.onChange,
            j = e.onKeyDown,
            C = Object(i.a)(e, [
              "prefixCls",
              "className",
              "checked",
              "defaultChecked",
              "disabled",
              "loadingIcon",
              "checkedChildren",
              "unCheckedChildren",
              "onClick",
              "onChange",
              "onKeyDown",
            ]),
            w = Object(u.a)(!1, { value: p, defaultValue: f }),
            E = Object(c.a)(w, 2),
            k = E[0],
            S = E[1];
          function N(e, t) {
            var n = k;
            return v || (S((n = e)), null === g || void 0 === g || g(n, t)), n;
          }
          var x = s()(
            l,
            b,
            ((n = {}),
            Object(a.a)(n, "".concat(l, "-checked"), k),
            Object(a.a)(n, "".concat(l, "-disabled"), v),
            n)
          );
          return o.createElement(
            "button",
            Object.assign({}, C, {
              type: "button",
              role: "switch",
              "aria-checked": k,
              disabled: v,
              className: x,
              ref: t,
              onKeyDown: function (e) {
                e.which === d.a.LEFT
                  ? N(!1, e)
                  : e.which === d.a.RIGHT && N(!0, e),
                  null === j || void 0 === j || j(e);
              },
              onClick: function (e) {
                var t = N(!k, e);
                null === y || void 0 === y || y(t, e);
              },
            }),
            m,
            o.createElement(
              "span",
              { className: "".concat(l, "-inner") },
              k ? h : O
            )
          );
        });
      b.displayName = "Switch";
      var p = b,
        f = n(138),
        v = n(193),
        m = n(170),
        h = n(116),
        O = n(99),
        y = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        g = o.forwardRef(function (e, t) {
          var n,
            c = e.prefixCls,
            i = e.size,
            l = e.loading,
            u = e.className,
            d = void 0 === u ? "" : u,
            b = e.disabled,
            g = y(e, ["prefixCls", "size", "loading", "className", "disabled"]);
          Object(O.a)(
            "checked" in g || !("value" in g),
            "Switch",
            "`value` is not a valid prop, do you mean `checked`?"
          );
          var j = o.useContext(m.b),
            C = j.getPrefixCls,
            w = j.direction,
            E = o.useContext(h.b),
            k = C("switch", c),
            S = o.createElement(
              "div",
              { className: "".concat(k, "-handle") },
              l &&
                o.createElement(f.a, {
                  className: "".concat(k, "-loading-icon"),
                })
            ),
            N = s()(
              ((n = {}),
              Object(a.a)(n, "".concat(k, "-small"), "small" === (i || E)),
              Object(a.a)(n, "".concat(k, "-loading"), l),
              Object(a.a)(n, "".concat(k, "-rtl"), "rtl" === w),
              n),
              d
            );
          return o.createElement(
            v.a,
            { insertExtraNode: !0 },
            o.createElement(
              p,
              Object(r.a)({}, g, {
                prefixCls: k,
                className: N,
                disabled: b || l,
                ref: t,
                loadingIcon: S,
              })
            )
          );
        });
      (g.__ANT_SWITCH = !0), (g.displayName = "Switch");
      t.a = g;
    },
  },
]);
//# sourceMappingURL=24.1dd8a548.chunk.js.map
