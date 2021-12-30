/*! For license information please see 15.14a8604b.chunk.js.LICENSE.txt */
(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [15],
  {
    107: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n(1),
        o = n(2),
        a = n(56);
      function i(e) {
        var t = Object(o.useContext)(Object(a.a)()),
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
          return u;
        });
      var r,
        o = n(1);
      !(function (e) {
        (e[(e.Query = 0)] = "Query"),
          (e[(e.Mutation = 1)] = "Mutation"),
          (e[(e.Subscription = 2)] = "Subscription");
      })(r || (r = {}));
      var a = new Map();
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
      function u(e, t) {
        var n = (function (e) {
            var t,
              n,
              i = a.get(e);
            if (i) return i;
            __DEV__
              ? Object(o.b)(
                  !!e && !!e.kind,
                  "Argument of ".concat(
                    e,
                    " passed to parser was not a valid GraphQL "
                  ) +
                    "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document"
                )
              : Object(o.b)(!!e && !!e.kind, 30);
            var u = e.definitions.filter(function (e) {
                return "FragmentDefinition" === e.kind;
              }),
              c = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind && "query" === e.operation
                );
              }),
              s = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind && "mutation" === e.operation
                );
              }),
              l = e.definitions.filter(function (e) {
                return (
                  "OperationDefinition" === e.kind &&
                  "subscription" === e.operation
                );
              });
            __DEV__
              ? Object(o.b)(
                  !u.length || c.length || s.length || l.length,
                  "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well"
                )
              : Object(o.b)(!u.length || c.length || s.length || l.length, 31),
              __DEV__
                ? Object(o.b)(
                    c.length + s.length + l.length <= 1,
                    "react-apollo only supports a query, subscription, or a mutation per HOC. " +
                      ""
                        .concat(e, " had ")
                        .concat(c.length, " queries, ")
                        .concat(l.length, " ") +
                      "subscriptions and ".concat(s.length, " mutations. ") +
                      "You can use 'compose' to join multiple operation types to a component"
                  )
                : Object(o.b)(c.length + s.length + l.length <= 1, 32),
              (n = c.length ? r.Query : r.Mutation),
              c.length || s.length || (n = r.Subscription);
            var d = c.length ? c : s.length ? s : l;
            __DEV__
              ? Object(o.b)(
                  1 === d.length,
                  "react-apollo only supports one definition per HOC. ".concat(
                    e,
                    " had "
                  ) +
                    "".concat(d.length, " definitions. ") +
                    "You can use 'compose' to join multiple operation types to a component"
                )
              : Object(o.b)(1 === d.length, 33);
            var f = d[0];
            t = f.variableDefinitions || [];
            var p = {
              name: f.name && "Name" === f.name.kind ? f.name.value : "data",
              type: n,
              variables: t,
            };
            return a.set(e, p), p;
          })(e),
          u = i(t),
          c = i(n.type);
        __DEV__
          ? Object(o.b)(
              n.type === t,
              "Running a ".concat(u, " requires a graphql ") +
                "".concat(u, ", but a ").concat(c, " was used instead.")
            )
          : Object(o.b)(n.type === t, 34);
      }
    },
    140: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n(0),
        o = n(2),
        a = n(5),
        i = n(56),
        u = n(22),
        c = n(3),
        s = n(108),
        l = n(107);
      function d(e, t) {
        var n,
          d = Object(o.useContext)(Object(i.a)()),
          p = Object(l.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(s.b)(e, s.a.Query);
        var y,
          b = Object(o.useState)(function () {
            var n = f(e, t),
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
                      return f(e, t);
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
          v = b[0],
          g = b[1],
          h = Object(o.useState)(function () {
            var e,
              n,
              r = v.getCurrentResult();
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
          m = h[0],
          P = h[1],
          O = Object(o.useRef)({
            client: p,
            query: e,
            options: t,
            result: m,
            previousData: void 0,
            watchQueryOptions: f(e, t),
          });
        Object(o.useEffect)(
          function () {
            var n,
              r,
              o,
              i = f(e, t);
            if (O.current.client === p && Object(a.a)(O.current.query, e))
              Object(a.a)(O.current.watchQueryOptions, i) ||
                (v.setOptions(i).catch(function () {}),
                (o = v.getCurrentResult()),
                (O.current.watchQueryOptions = i));
            else {
              var u = p.watchQuery(i);
              g(u), (o = u.getCurrentResult());
            }
            if (o) {
              var c = O.current.result;
              c.data && (O.current.previousData = c.data),
                P((O.current.result = o)),
                !o.loading &&
                  t &&
                  (m.loading ||
                    (m.error
                      ? null === (n = t.onError) ||
                        void 0 === n ||
                        n.call(t, m.error)
                      : m.data &&
                        (null === (r = t.onCompleted) ||
                          void 0 === r ||
                          r.call(t, m.data))));
            }
            Object.assign(O.current, { client: p, query: e });
          },
          [v, p, e, t]
        ),
          Object(o.useEffect)(
            function () {
              if (!d.renderPromises) {
                var e = v.subscribe(t, function n(r) {
                  var o,
                    i,
                    u = v.last;
                  e.unsubscribe();
                  try {
                    v.resetLastResults(), (e = v.subscribe(t, n));
                  } finally {
                    v.last = u;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var s = O.current.result;
                  ((s && s.loading) || !Object(a.a)(r, s.error)) &&
                    (P(
                      (O.current.result = {
                        data: s.data,
                        error: r,
                        loading: !1,
                        networkStatus: c.a.error,
                      })
                    ),
                    null ===
                      (i =
                        null === (o = O.current.options) || void 0 === o
                          ? void 0
                          : o.onError) ||
                      void 0 === i ||
                      i.call(o, r));
                });
                return function () {
                  return e.unsubscribe();
                };
              }
              function t() {
                var e,
                  t,
                  n = O.current.result,
                  r = v.getCurrentResult();
                (n &&
                  n.loading === r.loading &&
                  n.networkStatus === r.networkStatus &&
                  Object(a.a)(n.data, r.data)) ||
                  (n.data && (O.current.previousData = n.data),
                  P((O.current.result = r)),
                  r.loading ||
                    null ===
                      (t =
                        null === (e = O.current.options) || void 0 === e
                          ? void 0
                          : e.onCompleted) ||
                    void 0 === t ||
                    t.call(e, r.data));
              }
            },
            [v, d.renderPromises, p.disableNetworkFetches]
          ),
          (y = (n = m).partial),
          (m = Object(r.f)(n, ["partial"])),
          !y ||
            !(null === t || void 0 === t ? void 0 : t.partialRefetch) ||
            m.loading ||
            (m.data && 0 !== Object.keys(m.data).length) ||
            "cache-only" === v.options.fetchPolicy ||
            ((m = Object(r.a)(Object(r.a)({}, m), {
              loading: !0,
              networkStatus: c.a.refetch,
            })),
            v.refetch()),
          d.renderPromises &&
            !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
            !(null === t || void 0 === t ? void 0 : t.skip) &&
            m.loading &&
            v.setOptions(f(e, t)).catch(function () {}),
          Object.assign(O.current, { options: t }),
          (d.renderPromises || p.disableNetworkFetches) &&
          !1 === (null === t || void 0 === t ? void 0 : t.ssr)
            ? (m = O.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: c.a.loading,
                })
            : ((null === t || void 0 === t ? void 0 : t.skip) ||
                "standby" ===
                  (null === t || void 0 === t ? void 0 : t.fetchPolicy)) &&
              (m = {
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: c.a.ready,
              }),
          m.errors &&
            m.errors.length &&
            (m = Object(r.a)(Object(r.a)({}, m), {
              error: m.error || new u.a({ graphQLErrors: m.errors }),
            }));
        var w = Object(o.useMemo)(
          function () {
            return {
              refetch: v.refetch.bind(v),
              fetchMore: v.fetchMore.bind(v),
              updateQuery: v.updateQuery.bind(v),
              startPolling: v.startPolling.bind(v),
              stopPolling: v.stopPolling.bind(v),
              subscribeToMore: v.subscribeToMore.bind(v),
            };
          },
          [v]
        );
        return Object(r.a)(
          Object(r.a)(Object(r.a)({}, w), {
            variables: f(e, t).variables,
            client: p,
            called: !0,
            previousData: O.current.previousData,
          }),
          m
        );
      }
      function f(e, t) {
        var n;
        void 0 === t && (t = {});
        var o = t.skip,
          a =
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
          o
            ? (a.fetchPolicy = "standby")
            : ((!(null === (n = a.context) || void 0 === n
                ? void 0
                : n.renderPromises) ||
                ("network-only" !== a.fetchPolicy &&
                  "cache-and-network" !== a.fetchPolicy)) &&
                a.fetchPolicy) ||
              (a.fetchPolicy = "cache-first"),
          a.variables || (a.variables = {}),
          Object(r.a)({ query: e }, a)
        );
      }
    },
    165: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n(0),
        o = n(2),
        a = n(75),
        i = n(5),
        u = n(108),
        c = n(22),
        s = n(107);
      function l(e, t) {
        var n = Object(s.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(u.b)(e, u.a.Mutation);
        var l = Object(o.useState)({ called: !1, loading: !1, client: n }),
          d = l[0],
          f = l[1],
          p = Object(o.useRef)({
            result: d,
            mutationId: 0,
            isMounted: !0,
            client: n,
            mutation: e,
            options: t,
          });
        Object.assign(p.current, { client: n, options: t, mutation: e });
        var y = Object(o.useCallback)(function (e) {
            void 0 === e && (e = {});
            var t = p.current,
              n = t.client,
              o = t.options,
              u = t.mutation,
              s = Object(r.a)(Object(r.a)({}, o), { mutation: u });
            p.current.result.loading ||
              s.ignoreResults ||
              f(
                (p.current.result = {
                  loading: !0,
                  error: void 0,
                  data: void 0,
                  called: !0,
                  client: n,
                })
              );
            var l = ++p.current.mutationId,
              d = Object(a.b)(s, e);
            return n
              .mutate(d)
              .then(function (t) {
                var r,
                  o,
                  a = t.data,
                  u = t.errors,
                  y =
                    u && u.length > 0 ? new c.a({ graphQLErrors: u }) : void 0;
                if (l === p.current.mutationId && !d.ignoreResults) {
                  var b = {
                    called: !0,
                    loading: !1,
                    data: a,
                    error: y,
                    client: n,
                  };
                  p.current.isMounted &&
                    !Object(i.a)(p.current.result, b) &&
                    f((p.current.result = b));
                }
                return (
                  null === (r = s.onCompleted) ||
                    void 0 === r ||
                    r.call(s, t.data),
                  null === (o = e.onCompleted) ||
                    void 0 === o ||
                    o.call(e, t.data),
                  t
                );
              })
              .catch(function (t) {
                var r, o;
                if (l === p.current.mutationId && p.current.isMounted) {
                  var a = {
                    loading: !1,
                    error: t,
                    data: void 0,
                    called: !0,
                    client: n,
                  };
                  Object(i.a)(p.current.result, a) || f((p.current.result = a));
                }
                if (s.onError || d.onError)
                  return (
                    null === (r = s.onError) || void 0 === r || r.call(s, t),
                    null === (o = e.onError) || void 0 === o || o.call(e, t),
                    { data: void 0, errors: t }
                  );
                throw t;
              });
          }, []),
          b = Object(o.useCallback)(function () {
            f({ called: !1, loading: !1, client: n });
          }, []);
        return (
          Object(o.useEffect)(function () {
            return function () {
              p.current.isMounted = !1;
            };
          }, []),
          [y, Object(r.a)({ reset: b }, d)]
        );
      }
    },
    478: function (e, t, n) {
      "use strict";
      var r = n(26),
        o = n.n(r),
        a = n(2),
        i = n.n(a),
        u = n(479),
        c = n.n(u),
        s = n(480),
        l = n.n(s);
      function d(e) {
        return (
          (d =
            "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          d(e)
        );
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function p(e, t) {
        return (
          (p =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          p(e, t)
        );
      }
      function y(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = g(e);
          if (t) {
            var o = g(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return b(this, n);
        };
      }
      function b(e, t) {
        return !t || ("object" !== d(t) && "function" !== typeof t) ? v(e) : t;
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (
          (g = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          g(e)
        );
      }
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                P(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function P(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function O(e) {
        return m(
          m({}, e),
          {},
          { playerVars: m({ autoplay: 0, start: 0, end: 0 }, e.playerVars) }
        );
      }
      var w = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(a, e);
        var t,
          n,
          r,
          o = y(a);
        function a(e) {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, a),
            P(v((t = o.call(this, e))), "onPlayerReady", function (e) {
              return t.props.onReady(e);
            }),
            P(v(t), "onPlayerError", function (e) {
              return t.props.onError(e);
            }),
            P(v(t), "onPlayerStateChange", function (e) {
              switch ((t.props.onStateChange(e), e.data)) {
                case a.PlayerState.ENDED:
                  t.props.onEnd(e);
                  break;
                case a.PlayerState.PLAYING:
                  t.props.onPlay(e);
                  break;
                case a.PlayerState.PAUSED:
                  t.props.onPause(e);
              }
            }),
            P(v(t), "onPlayerPlaybackRateChange", function (e) {
              return t.props.onPlaybackRateChange(e);
            }),
            P(v(t), "onPlayerPlaybackQualityChange", function (e) {
              return t.props.onPlaybackQualityChange(e);
            }),
            P(v(t), "createPlayer", function () {
              if ("undefined" !== typeof document) {
                var e = m(
                  m({}, t.props.opts),
                  {},
                  { videoId: t.props.videoId }
                );
                (t.internalPlayer = l()(t.container, e)),
                  t.internalPlayer.on("ready", t.onPlayerReady),
                  t.internalPlayer.on("error", t.onPlayerError),
                  t.internalPlayer.on("stateChange", t.onPlayerStateChange),
                  t.internalPlayer.on(
                    "playbackRateChange",
                    t.onPlayerPlaybackRateChange
                  ),
                  t.internalPlayer.on(
                    "playbackQualityChange",
                    t.onPlayerPlaybackQualityChange
                  );
              }
            }),
            P(v(t), "resetPlayer", function () {
              return t.internalPlayer.destroy().then(t.createPlayer);
            }),
            P(v(t), "updatePlayer", function () {
              t.internalPlayer.getIframe().then(function (e) {
                t.props.id
                  ? e.setAttribute("id", t.props.id)
                  : e.removeAttribute("id"),
                  t.props.className
                    ? e.setAttribute("class", t.props.className)
                    : e.removeAttribute("class");
              });
            }),
            P(v(t), "getInternalPlayer", function () {
              return t.internalPlayer;
            }),
            P(v(t), "updateVideo", function () {
              if (
                "undefined" !== typeof t.props.videoId &&
                null !== t.props.videoId
              ) {
                var e = !1,
                  n = { videoId: t.props.videoId };
                "playerVars" in t.props.opts &&
                  ((e = 1 === t.props.opts.playerVars.autoplay),
                  "start" in t.props.opts.playerVars &&
                    (n.startSeconds = t.props.opts.playerVars.start),
                  "end" in t.props.opts.playerVars &&
                    (n.endSeconds = t.props.opts.playerVars.end)),
                  e
                    ? t.internalPlayer.loadVideoById(n)
                    : t.internalPlayer.cueVideoById(n);
              } else t.internalPlayer.stopVideo();
            }),
            P(v(t), "refContainer", function (e) {
              t.container = e;
            }),
            (t.container = null),
            (t.internalPlayer = null),
            t
          );
        }
        return (
          (t = a),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.createPlayer();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                (function (e, t) {
                  return e.id !== t.id || e.className !== t.className;
                })(e, this.props) && this.updatePlayer(),
                  (function (e, t) {
                    return !c()(O(e.opts), O(t.opts));
                  })(e, this.props) && this.resetPlayer(),
                  (function (e, t) {
                    if (e.videoId !== t.videoId) return !0;
                    var n = e.opts.playerVars || {},
                      r = t.opts.playerVars || {};
                    return n.start !== r.start || n.end !== r.end;
                  })(e, this.props) && this.updateVideo();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.internalPlayer.destroy();
              },
            },
            {
              key: "render",
              value: function () {
                return i.a.createElement(
                  "div",
                  { className: this.props.containerClassName },
                  i.a.createElement("div", {
                    id: this.props.id,
                    className: this.props.className,
                    ref: this.refContainer,
                  })
                );
              },
            },
          ]) && f(t.prototype, n),
          r && f(t, r),
          a
        );
      })(i.a.Component);
      P(w, "PlayerState", {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        CUED: 5,
      }),
        (w.propTypes = {
          videoId: o.a.string,
          id: o.a.string,
          className: o.a.string,
          containerClassName: o.a.string,
          opts: o.a.objectOf(o.a.any),
          onReady: o.a.func,
          onError: o.a.func,
          onPlay: o.a.func,
          onPause: o.a.func,
          onEnd: o.a.func,
          onStateChange: o.a.func,
          onPlaybackRateChange: o.a.func,
          onPlaybackQualityChange: o.a.func,
        }),
        (w.defaultProps = {
          videoId: null,
          id: null,
          className: null,
          opts: {},
          containerClassName: "",
          onReady: function () {},
          onError: function () {},
          onPlay: function () {},
          onPause: function () {},
          onEnd: function () {},
          onStateChange: function () {},
          onPlaybackRateChange: function () {},
          onPlaybackQualityChange: function () {},
        }),
        (t.a = w);
    },
    479: function (e, t, n) {
      "use strict";
      e.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
          if (t.constructor !== n.constructor) return !1;
          var r, o, a;
          if (Array.isArray(t)) {
            if ((r = t.length) != n.length) return !1;
            for (o = r; 0 !== o--; ) if (!e(t[o], n[o])) return !1;
            return !0;
          }
          if (t.constructor === RegExp)
            return t.source === n.source && t.flags === n.flags;
          if (t.valueOf !== Object.prototype.valueOf)
            return t.valueOf() === n.valueOf();
          if (t.toString !== Object.prototype.toString)
            return t.toString() === n.toString();
          if ((r = (a = Object.keys(t)).length) !== Object.keys(n).length)
            return !1;
          for (o = r; 0 !== o--; )
            if (!Object.prototype.hasOwnProperty.call(n, a[o])) return !1;
          for (o = r; 0 !== o--; ) {
            var i = a[o];
            if (!e(t[i], n[i])) return !1;
          }
          return !0;
        }
        return t !== t && n !== n;
      };
    },
    480: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = u(n(481)),
        a = u(n(482)),
        i = u(n(484));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = void 0;
      (t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          u = (0, o.default)();
        if ((c || (c = (0, a.default)(u)), t.events))
          throw new Error("Event handlers cannot be overwritten.");
        if ("string" === typeof e && !document.getElementById(e))
          throw new Error('Element "' + e + '" does not exist.');
        t.events = i.default.proxyEvents(u);
        var s = new Promise(function (n) {
            "object" === ("undefined" === typeof e ? "undefined" : r(e)) &&
            e.playVideo instanceof Function
              ? n(e)
              : c.then(function (r) {
                  var o = new r.Player(e, t);
                  return (
                    u.on("ready", function () {
                      n(o);
                    }),
                    null
                  );
                });
          }),
          l = i.default.promisifyPlayer(s, n);
        return (l.on = u.on), (l.off = u.off), l;
      }),
        (e.exports = t.default);
    },
    481: function (e, t, n) {
      "use strict";
      var r;
      (r = function () {
        var e = {},
          t = {};
        return (
          (e.on = function (e, n) {
            var r = { name: e, handler: n };
            return (t[e] = t[e] || []), t[e].unshift(r), r;
          }),
          (e.off = function (e) {
            var n = t[e.name].indexOf(e);
            -1 !== n && t[e.name].splice(n, 1);
          }),
          (e.trigger = function (e, n) {
            var r,
              o = t[e];
            if (o) for (r = o.length; r--; ) o[r].handler(n);
          }),
          e
        );
      }),
        (e.exports = r);
    },
    482: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n(483),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = function (e) {
        return new Promise(function (t) {
          if (
            window.YT &&
            window.YT.Player &&
            window.YT.Player instanceof Function
          )
            t(window.YT);
          else {
            var n = "http:" === window.location.protocol ? "http:" : "https:";
            (0, a.default)(n + "//www.youtube.com/iframe_api", function (t) {
              t && e.trigger("error", t);
            });
            var r = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = function () {
              r && r(), t(window.YT);
            };
          }
        });
      }),
        (e.exports = t.default);
    },
    483: function (e, t) {
      function n(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(new Error("Failed to load " + this.src), e);
          });
      }
      function r(e, t) {
        e.onreadystatechange = function () {
          ("complete" != this.readyState && "loaded" != this.readyState) ||
            ((this.onreadystatechange = null), t(null, e));
        };
      }
      e.exports = function (e, t, o) {
        var a = document.head || document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        "function" === typeof t && ((o = t), (t = {})),
          (t = t || {}),
          (o = o || function () {}),
          (i.type = t.type || "text/javascript"),
          (i.charset = t.charset || "utf8"),
          (i.async = !("async" in t) || !!t.async),
          (i.src = e),
          t.attrs &&
            (function (e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            })(i, t.attrs),
          t.text && (i.text = "" + t.text),
          ("onload" in i ? n : r)(i, o),
          i.onload || n(i, o),
          a.appendChild(i);
      };
    },
    484: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = u(n(485)),
        o = u(n(488)),
        a = u(n(489)),
        i = u(n(490));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var c = (0, r.default)("youtube-player"),
        s = {
          proxyEvents: function (e) {
            var t = {},
              n = function (n) {
                var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
                t[r] = function (t) {
                  c('event "%s"', r, t), e.trigger(n, t);
                };
              },
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, s = a.default[Symbol.iterator]();
                !(r = (u = s.next()).done);
                r = !0
              ) {
                n(u.value);
              }
            } catch (l) {
              (o = !0), (i = l);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return t;
          },
          promisifyPlayer: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = {},
              r = function (r) {
                t && i.default[r]
                  ? (n[r] = function () {
                      for (
                        var t = arguments.length, n = Array(t), o = 0;
                        o < t;
                        o++
                      )
                        n[o] = arguments[o];
                      return e.then(function (e) {
                        var t = i.default[r],
                          o = e.getPlayerState(),
                          a = e[r].apply(e, n);
                        return t.stateChangeRequired ||
                          (Array.isArray(t.acceptableStates) &&
                            -1 === t.acceptableStates.indexOf(o))
                          ? new Promise(function (n) {
                              e.addEventListener("onStateChange", function r() {
                                var o = e.getPlayerState(),
                                  a = void 0;
                                "number" === typeof t.timeout &&
                                  (a = setTimeout(function () {
                                    e.removeEventListener("onStateChange", r),
                                      n();
                                  }, t.timeout)),
                                  Array.isArray(t.acceptableStates) &&
                                    -1 !== t.acceptableStates.indexOf(o) &&
                                    (e.removeEventListener("onStateChange", r),
                                    clearTimeout(a),
                                    n());
                              });
                            }).then(function () {
                              return a;
                            })
                          : a;
                      });
                    })
                  : (n[r] = function () {
                      for (
                        var t = arguments.length, n = Array(t), o = 0;
                        o < t;
                        o++
                      )
                        n[o] = arguments[o];
                      return e.then(function (e) {
                        return e[r].apply(e, n);
                      });
                    });
              },
              a = !0,
              u = !1,
              c = void 0;
            try {
              for (
                var s, l = o.default[Symbol.iterator]();
                !(a = (s = l.next()).done);
                a = !0
              ) {
                var d = s.value;
                r(d);
              }
            } catch (f) {
              (u = !0), (c = f);
            } finally {
              try {
                !a && l.return && l.return();
              } finally {
                if (u) throw c;
              }
            }
            return n;
          },
        };
      (t.default = s), (e.exports = t.default);
    },
    485: function (e, t, n) {
      (function (r) {
        function o() {
          var e;
          try {
            e = t.storage.debug;
          } catch (n) {}
          return (
            !e &&
              "undefined" !== typeof r &&
              "env" in r &&
              (e = Object({
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
              }).DEBUG),
            e
          );
        }
        ((t = e.exports = n(486)).log = function () {
          return (
            "object" === typeof console &&
            console.log &&
            Function.prototype.apply.call(console.log, console, arguments)
          );
        }),
          (t.formatArgs = function (e) {
            var n = this.useColors;
            if (
              ((e[0] =
                (n ? "%c" : "") +
                this.namespace +
                (n ? " %c" : " ") +
                e[0] +
                (n ? "%c " : " ") +
                "+" +
                t.humanize(this.diff)),
              !n)
            )
              return;
            var r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            var o = 0,
              a = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (e) {
              "%%" !== e && (o++, "%c" === e && (a = o));
            }),
              e.splice(a, 0, r);
          }),
          (t.save = function (e) {
            try {
              null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
            } catch (n) {}
          }),
          (t.load = o),
          (t.useColors = function () {
            if (
              "undefined" !== typeof window &&
              window.process &&
              "renderer" === window.process.type
            )
              return !0;
            return (
              ("undefined" !== typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" !== typeof window &&
                window.console &&
                (window.console.firebug ||
                  (window.console.exception && window.console.table))) ||
              ("undefined" !== typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ("undefined" !== typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (t.storage =
            "undefined" != typeof chrome && "undefined" != typeof chrome.storage
              ? chrome.storage.local
              : (function () {
                  try {
                    return window.localStorage;
                  } catch (e) {}
                })()),
          (t.colors = [
            "lightseagreen",
            "forestgreen",
            "goldenrod",
            "dodgerblue",
            "darkorchid",
            "crimson",
          ]),
          (t.formatters.j = function (e) {
            try {
              return JSON.stringify(e);
            } catch (t) {
              return "[UnexpectedJSONParseError]: " + t.message;
            }
          }),
          t.enable(o());
      }.call(this, n(59)));
    },
    486: function (e, t, n) {
      var r;
      function o(e) {
        function n() {
          if (n.enabled) {
            var e = n,
              o = +new Date(),
              a = o - (r || o);
            (e.diff = a), (e.prev = r), (e.curr = o), (r = o);
            for (var i = new Array(arguments.length), u = 0; u < i.length; u++)
              i[u] = arguments[u];
            (i[0] = t.coerce(i[0])),
              "string" !== typeof i[0] && i.unshift("%O");
            var c = 0;
            (i[0] = i[0].replace(/%([a-zA-Z%])/g, function (n, r) {
              if ("%%" === n) return n;
              c++;
              var o = t.formatters[r];
              if ("function" === typeof o) {
                var a = i[c];
                (n = o.call(e, a)), i.splice(c, 1), c--;
              }
              return n;
            })),
              t.formatArgs.call(e, i);
            var s = n.log || t.log || console.log.bind(console);
            s.apply(e, i);
          }
        }
        return (
          (n.namespace = e),
          (n.enabled = t.enabled(e)),
          (n.useColors = t.useColors()),
          (n.color = (function (e) {
            var n,
              r = 0;
            for (n in e) (r = (r << 5) - r + e.charCodeAt(n)), (r |= 0);
            return t.colors[Math.abs(r) % t.colors.length];
          })(e)),
          "function" === typeof t.init && t.init(n),
          n
        );
      }
      ((t = e.exports = o.debug = o.default = o).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var n = ("string" === typeof e ? e : "").split(/[\s,]+/),
              r = n.length,
              o = 0;
            o < r;
            o++
          )
            n[o] &&
              ("-" === (e = n[o].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : t.names.push(new RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          var n, r;
          for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n(487)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    487: function (e, t) {
      var n = 1e3,
        r = 60 * n,
        o = 60 * r,
        a = 24 * o,
        i = 365.25 * a;
      function u(e, t, n) {
        if (!(e < t))
          return e < 1.5 * t
            ? Math.floor(e / t) + " " + n
            : Math.ceil(e / t) + " " + n + "s";
      }
      e.exports = function (e, t) {
        t = t || {};
        var c,
          s = typeof e;
        if ("string" === s && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return;
            var t =
              /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                e
              );
            if (!t) return;
            var u = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return u * i;
              case "days":
              case "day":
              case "d":
                return u * a;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return u * o;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return u * r;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return u * n;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return u;
              default:
                return;
            }
          })(e);
        if ("number" === s && !1 === isNaN(e))
          return t.long
            ? u((c = e), a, "day") ||
                u(c, o, "hour") ||
                u(c, r, "minute") ||
                u(c, n, "second") ||
                c + " ms"
            : (function (e) {
                if (e >= a) return Math.round(e / a) + "d";
                if (e >= o) return Math.round(e / o) + "h";
                if (e >= r) return Math.round(e / r) + "m";
                if (e >= n) return Math.round(e / n) + "s";
                return e + "ms";
              })(e);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e)
        );
      };
    },
    488: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = [
          "cueVideoById",
          "loadVideoById",
          "cueVideoByUrl",
          "loadVideoByUrl",
          "playVideo",
          "pauseVideo",
          "stopVideo",
          "getVideoLoadedFraction",
          "cuePlaylist",
          "loadPlaylist",
          "nextVideo",
          "previousVideo",
          "playVideoAt",
          "setShuffle",
          "setLoop",
          "getPlaylist",
          "getPlaylistIndex",
          "setOption",
          "mute",
          "unMute",
          "isMuted",
          "setVolume",
          "getVolume",
          "seekTo",
          "getPlayerState",
          "getPlaybackRate",
          "setPlaybackRate",
          "getAvailablePlaybackRates",
          "getPlaybackQuality",
          "setPlaybackQuality",
          "getAvailableQualityLevels",
          "getCurrentTime",
          "getDuration",
          "removeEventListener",
          "getVideoUrl",
          "getVideoEmbedCode",
          "getOptions",
          "getOption",
          "addEventListener",
          "destroy",
          "setSize",
          "getIframe",
        ]),
        (e.exports = t.default);
    },
    489: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = [
          "ready",
          "stateChange",
          "playbackQualityChange",
          "playbackRateChange",
          "error",
          "apiChange",
          "volumeChange",
        ]),
        (e.exports = t.default);
    },
    490: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = n(491),
        a = (r = o) && r.__esModule ? r : { default: r };
      (t.default = {
        pauseVideo: {
          acceptableStates: [a.default.ENDED, a.default.PAUSED],
          stateChangeRequired: !1,
        },
        playVideo: {
          acceptableStates: [a.default.ENDED, a.default.PLAYING],
          stateChangeRequired: !1,
        },
        seekTo: {
          acceptableStates: [
            a.default.ENDED,
            a.default.PLAYING,
            a.default.PAUSED,
          ],
          stateChangeRequired: !0,
          timeout: 3e3,
        },
      }),
        (e.exports = t.default);
    },
    491: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          BUFFERING: 3,
          ENDED: 0,
          PAUSED: 2,
          PLAYING: 1,
          UNSTARTED: -1,
          VIDEO_CUED: 5,
        }),
        (e.exports = t.default);
    },
  },
]);
//# sourceMappingURL=15.14a8604b.chunk.js.map
