(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [34],
  {
    140: function (r, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return d;
      });
      var n = t(0),
        o = t(2),
        a = t(5),
        i = t(56),
        s = t(22),
        u = t(3),
        c = t(108),
        l = t(107);
      function d(r, e) {
        var t,
          d = Object(o.useContext)(Object(i.a)()),
          v = Object(l.a)(null === e || void 0 === e ? void 0 : e.client);
        Object(c.b)(r, c.a.Query);
        var f,
          p = Object(o.useState)(function () {
            var t = b(r, e),
              n = null;
            return (
              d.renderPromises && (n = d.renderPromises.getSSRObservable(t)),
              n ||
                ((n = v.watchQuery(t)),
                d.renderPromises &&
                  d.renderPromises.registerSSRObservable(n, t)),
              d.renderPromises &&
                !1 !== (null === e || void 0 === e ? void 0 : e.ssr) &&
                !(null === e || void 0 === e ? void 0 : e.skip) &&
                n.getCurrentResult().loading &&
                d.renderPromises.addQueryPromise(
                  {
                    getOptions: function () {
                      return b(r, e);
                    },
                    fetchData: function () {
                      return new Promise(function (r) {
                        var e = n.subscribe({
                          next: function (t) {
                            t.loading || (r(), e.unsubscribe());
                          },
                          error: function () {
                            r(), e.unsubscribe();
                          },
                          complete: function () {
                            r();
                          },
                        });
                      });
                    },
                  },
                  function () {
                    return null;
                  }
                ),
              n
            );
          }),
          h = p[0],
          g = p[1],
          O = Object(o.useState)(function () {
            var r,
              t,
              n = h.getCurrentResult();
            return (
              !n.loading &&
                e &&
                (n.error
                  ? null === (r = e.onError) ||
                    void 0 === r ||
                    r.call(e, n.error)
                  : n.data &&
                    (null === (t = e.onCompleted) ||
                      void 0 === t ||
                      t.call(e, n.data))),
              n
            );
          }),
          y = O[0],
          j = O[1],
          P = Object(o.useRef)({
            client: v,
            query: r,
            options: e,
            result: y,
            previousData: void 0,
            watchQueryOptions: b(r, e),
          });
        Object(o.useEffect)(
          function () {
            var t,
              n,
              o,
              i = b(r, e);
            if (P.current.client === v && Object(a.a)(P.current.query, r))
              Object(a.a)(P.current.watchQueryOptions, i) ||
                (h.setOptions(i).catch(function () {}),
                (o = h.getCurrentResult()),
                (P.current.watchQueryOptions = i));
            else {
              var s = v.watchQuery(i);
              g(s), (o = s.getCurrentResult());
            }
            if (o) {
              var u = P.current.result;
              u.data && (P.current.previousData = u.data),
                j((P.current.result = o)),
                !o.loading &&
                  e &&
                  (y.loading ||
                    (y.error
                      ? null === (t = e.onError) ||
                        void 0 === t ||
                        t.call(e, y.error)
                      : y.data &&
                        (null === (n = e.onCompleted) ||
                          void 0 === n ||
                          n.call(e, y.data))));
            }
            Object.assign(P.current, { client: v, query: r });
          },
          [h, v, r, e]
        ),
          Object(o.useEffect)(
            function () {
              if (!d.renderPromises) {
                var r = h.subscribe(e, function t(n) {
                  var o,
                    i,
                    s = h.last;
                  r.unsubscribe();
                  try {
                    h.resetLastResults(), (r = h.subscribe(e, t));
                  } finally {
                    h.last = s;
                  }
                  if (!n.hasOwnProperty("graphQLErrors")) throw n;
                  var c = P.current.result;
                  ((c && c.loading) || !Object(a.a)(n, c.error)) &&
                    (j(
                      (P.current.result = {
                        data: c.data,
                        error: n,
                        loading: !1,
                        networkStatus: u.a.error,
                      })
                    ),
                    null ===
                      (i =
                        null === (o = P.current.options) || void 0 === o
                          ? void 0
                          : o.onError) ||
                      void 0 === i ||
                      i.call(o, n));
                });
                return function () {
                  return r.unsubscribe();
                };
              }
              function e() {
                var r,
                  e,
                  t = P.current.result,
                  n = h.getCurrentResult();
                (t &&
                  t.loading === n.loading &&
                  t.networkStatus === n.networkStatus &&
                  Object(a.a)(t.data, n.data)) ||
                  (t.data && (P.current.previousData = t.data),
                  j((P.current.result = n)),
                  n.loading ||
                    null ===
                      (e =
                        null === (r = P.current.options) || void 0 === r
                          ? void 0
                          : r.onCompleted) ||
                    void 0 === e ||
                    e.call(r, n.data));
              }
            },
            [h, d.renderPromises, v.disableNetworkFetches]
          ),
          (f = (t = y).partial),
          (y = Object(n.f)(t, ["partial"])),
          !f ||
            !(null === e || void 0 === e ? void 0 : e.partialRefetch) ||
            y.loading ||
            (y.data && 0 !== Object.keys(y.data).length) ||
            "cache-only" === h.options.fetchPolicy ||
            ((y = Object(n.a)(Object(n.a)({}, y), {
              loading: !0,
              networkStatus: u.a.refetch,
            })),
            h.refetch()),
          d.renderPromises &&
            !1 !== (null === e || void 0 === e ? void 0 : e.ssr) &&
            !(null === e || void 0 === e ? void 0 : e.skip) &&
            y.loading &&
            h.setOptions(b(r, e)).catch(function () {}),
          Object.assign(P.current, { options: e }),
          (d.renderPromises || v.disableNetworkFetches) &&
          !1 === (null === e || void 0 === e ? void 0 : e.ssr)
            ? (y = P.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: u.a.loading,
                })
            : ((null === e || void 0 === e ? void 0 : e.skip) ||
                "standby" ===
                  (null === e || void 0 === e ? void 0 : e.fetchPolicy)) &&
              (y = {
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: u.a.ready,
              }),
          y.errors &&
            y.errors.length &&
            (y = Object(n.a)(Object(n.a)({}, y), {
              error: y.error || new s.a({ graphQLErrors: y.errors }),
            }));
        var m = Object(o.useMemo)(
          function () {
            return {
              refetch: h.refetch.bind(h),
              fetchMore: h.fetchMore.bind(h),
              updateQuery: h.updateQuery.bind(h),
              startPolling: h.startPolling.bind(h),
              stopPolling: h.stopPolling.bind(h),
              subscribeToMore: h.subscribeToMore.bind(h),
            };
          },
          [h]
        );
        return Object(n.a)(
          Object(n.a)(Object(n.a)({}, m), {
            variables: b(r, e).variables,
            client: v,
            called: !0,
            previousData: P.current.previousData,
          }),
          y
        );
      }
      function b(r, e) {
        var t;
        void 0 === e && (e = {});
        var o = e.skip,
          a =
            (e.ssr,
            e.onCompleted,
            e.onError,
            e.displayName,
            Object(n.f)(e, [
              "skip",
              "ssr",
              "onCompleted",
              "onError",
              "displayName",
            ]));
        return (
          o
            ? (a.fetchPolicy = "standby")
            : ((!(null === (t = a.context) || void 0 === t
                ? void 0
                : t.renderPromises) ||
                ("network-only" !== a.fetchPolicy &&
                  "cache-and-network" !== a.fetchPolicy)) &&
                a.fetchPolicy) ||
              (a.fetchPolicy = "cache-first"),
          a.variables || (a.variables = {}),
          Object(n.a)({ query: r }, a)
        );
      }
    },
    421: function (r, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return o;
      });
      var n = t(246);
      function o(r) {
        return Object(n.a)({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "path",
              attr: {
                fill: "none",
                stroke: "#000",
                strokeWidth: "2",
                d: "M22,12 C22,12 19.0000009,15.0000004 13.0000004,21.0000004 C6.99999996,27.0000004 -2.00000007,18.0000004 3.99999994,12.0000004 C9.99999996,6.00000037 9,7.00000011 13,3.00000008 C17,-0.999999955 23,4.99999994 19,9.00000005 C15,13.0000002 12.0000004,16.0000007 9.99999995,18.0000004 C7.99999952,20 5,17 6.99999995,15.0000004 C8.99999991,13.0000007 16,6 16,6",
              },
            },
          ],
        })(r);
      }
    },
  },
]);
//# sourceMappingURL=34.b4d3d981.chunk.js.map
