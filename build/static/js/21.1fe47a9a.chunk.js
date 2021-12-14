(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [21],
  {
    110: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return y;
      }),
        r.d(t, "k", function () {
          return g;
        }),
        r.d(t, "e", function () {
          return j;
        }),
        r.d(t, "i", function () {
          return m;
        }),
        r.d(t, "f", function () {
          return S;
        }),
        r.d(t, "g", function () {
          return x;
        }),
        r.d(t, "b", function () {
          return $;
        }),
        r.d(t, "c", function () {
          return k;
        }),
        r.d(t, "d", function () {
          return w;
        }),
        r.d(t, "h", function () {
          return Q;
        }),
        r.d(t, "j", function () {
          return I;
        });
      var n,
        i,
        a,
        o,
        s,
        c,
        u,
        l,
        b,
        d,
        p,
        h,
        v,
        O = r(99),
        f = r(402),
        y = Object(f.a)(
          n ||
            (n = Object(O.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        g = Object(f.a)(
          i ||
            (i = Object(O.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(f.a)(
          a ||
            (a = Object(O.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        m = Object(f.a)(
          o ||
            (o = Object(O.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S =
          (Object(f.a)(
            s ||
              (s = Object(O.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(f.a)(
            c ||
              (c = Object(O.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(f.a)(
            u ||
              (u = Object(O.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        x = Object(f.a)(
          l ||
            (l = Object(O.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(f.a)(
          b ||
            (b = Object(O.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(f.a)(
          d ||
            (d = Object(O.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(f.a)(
          p ||
            (p = Object(O.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        Q = Object(f.a)(
          h ||
            (h = Object(O.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(f.a)(
          v ||
            (v = Object(O.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    129: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return b;
      });
      var n = r(0),
        i = (r(1), r(2)),
        a = r(7),
        o = r(27),
        s = r(4),
        c = r(116),
        u = (function (e) {
          function t(t) {
            var r = t.options,
              n = t.context,
              i = t.onNewData,
              a = e.call(this, r, n) || this;
            return (
              (a.runLazy = !1),
              (a.previous = Object.create(null)),
              (a.runLazyQuery = function (e) {
                a.cleanup(),
                  (a.runLazy = !0),
                  (a.lazyOptions = e),
                  a.onNewData();
              }),
              (a.obsRefetch = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.refetch(e);
              }),
              (a.obsFetchMore = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.fetchMore(e);
              }),
              (a.obsUpdateQuery = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.updateQuery(e);
              }),
              (a.obsStartPolling = function (e) {
                var t;
                null === (t = a.currentObservable) ||
                  void 0 === t ||
                  t.startPolling(e);
              }),
              (a.obsStopPolling = function () {
                var e;
                null === (e = a.currentObservable) ||
                  void 0 === e ||
                  e.stopPolling();
              }),
              (a.obsSubscribeToMore = function (e) {
                var t;
                return null === (t = a.currentObservable) || void 0 === t
                  ? void 0
                  : t.subscribeToMore(e);
              }),
              (a.onNewData = i),
              a
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.execute = function () {
              this.refreshClient();
              var e = this.getOptions(),
                t = e.skip,
                r = e.query;
              return (
                (t || r !== this.previous.query) &&
                  (this.removeQuerySubscription(),
                  this.removeObservable(!t),
                  (this.previous.query = r)),
                this.updateObservableQuery(),
                this.getExecuteSsrResult() || this.getExecuteResult()
              );
            }),
            (t.prototype.executeLazy = function () {
              return this.runLazy
                ? [this.runLazyQuery, this.execute()]
                : [
                    this.runLazyQuery,
                    {
                      loading: !1,
                      networkStatus: s.a.ready,
                      called: !1,
                      data: void 0,
                    },
                  ];
            }),
            (t.prototype.fetchData = function () {
              var e = this,
                t = this.getOptions();
              return (
                !t.skip &&
                !1 !== t.ssr &&
                new Promise(function (t) {
                  return e.startQuerySubscription(t);
                })
              );
            }),
            (t.prototype.afterExecute = function (e) {
              var t = (void 0 === e ? {} : e).lazy,
                r = void 0 !== t && t;
              this.isMounted = !0;
              var n = this.getOptions();
              return (
                this.currentObservable &&
                  !this.ssrInitiated() &&
                  this.startQuerySubscription(),
                (r && !this.runLazy) || this.handleErrorOrCompleted(),
                (this.previousOptions = n),
                this.unmount.bind(this)
              );
            }),
            (t.prototype.cleanup = function () {
              this.removeQuerySubscription(),
                this.removeObservable(!0),
                delete this.previous.result;
            }),
            (t.prototype.getOptions = function () {
              var t = e.prototype.getOptions.call(this);
              return (
                this.lazyOptions &&
                  ((t.variables = Object(n.a)(
                    Object(n.a)({}, t.variables),
                    this.lazyOptions.variables
                  )),
                  (t.context = Object(n.a)(
                    Object(n.a)({}, t.context),
                    this.lazyOptions.context
                  ))),
                this.runLazy && delete t.skip,
                t
              );
            }),
            (t.prototype.ssrInitiated = function () {
              return this.context && this.context.renderPromises;
            }),
            (t.prototype.getExecuteSsrResult = function () {
              var e = this.getOptions(),
                t = e.ssr,
                r = e.skip,
                i = !1 === t,
                a = this.refreshClient().client.disableNetworkFetches,
                o = Object(n.a)(
                  {
                    loading: !0,
                    networkStatus: s.a.loading,
                    called: !0,
                    data: void 0,
                    stale: !1,
                    client: this.client,
                  },
                  this.observableQueryFields()
                );
              if (i && (this.ssrInitiated() || a))
                return (this.previous.result = o), o;
              if (this.ssrInitiated()) {
                var c = this.getExecuteResult() || o;
                return (
                  c.loading &&
                    !r &&
                    this.context.renderPromises.addQueryPromise(
                      this,
                      function () {
                        return null;
                      }
                    ),
                  c
                );
              }
            }),
            (t.prototype.prepareObservableQueryOptions = function () {
              var e = this.getOptions();
              this.verifyDocumentType(e.query, c.a.Query);
              var t = e.displayName || "Query";
              return (
                !this.ssrInitiated() ||
                  ("network-only" !== e.fetchPolicy &&
                    "cache-and-network" !== e.fetchPolicy) ||
                  (e.fetchPolicy = "cache-first"),
                Object(n.a)(Object(n.a)({}, e), {
                  displayName: t,
                  context: e.context,
                })
              );
            }),
            (t.prototype.initializeObservableQuery = function () {
              if (
                (this.ssrInitiated() &&
                  (this.currentObservable =
                    this.context.renderPromises.getSSRObservable(
                      this.getOptions()
                    )),
                !this.currentObservable)
              ) {
                var e = this.prepareObservableQueryOptions();
                (this.previous.observableQueryOptions = Object(n.a)(
                  Object(n.a)({}, e),
                  { children: void 0 }
                )),
                  (this.currentObservable =
                    this.refreshClient().client.watchQuery(Object(n.a)({}, e))),
                  this.ssrInitiated() &&
                    this.context.renderPromises.registerSSRObservable(
                      this.currentObservable,
                      e
                    );
              }
            }),
            (t.prototype.updateObservableQuery = function () {
              if (this.currentObservable) {
                var e = Object(n.a)(
                  Object(n.a)({}, this.prepareObservableQueryOptions()),
                  { children: void 0 }
                );
                this.getOptions().skip
                  ? (this.previous.observableQueryOptions = e)
                  : Object(a.a)(e, this.previous.observableQueryOptions) ||
                    ((this.previous.observableQueryOptions = e),
                    this.currentObservable.setOptions(e).catch(function () {}));
              } else this.initializeObservableQuery();
            }),
            (t.prototype.startQuerySubscription = function (e) {
              var t = this;
              void 0 === e && (e = this.onNewData),
                this.currentSubscription ||
                  this.getOptions().skip ||
                  (this.currentSubscription = this.currentObservable.subscribe({
                    next: function (r) {
                      var n = r.loading,
                        i = r.networkStatus,
                        o = r.data,
                        s = t.previous.result;
                      (s &&
                        s.loading === n &&
                        s.networkStatus === i &&
                        Object(a.a)(s.data, o)) ||
                        e();
                    },
                    error: function (r) {
                      if (
                        (t.resubscribeToQuery(),
                        !r.hasOwnProperty("graphQLErrors"))
                      )
                        throw r;
                      var n = t.previous.result;
                      ((n && n.loading) || !Object(a.a)(r, t.previous.error)) &&
                        ((t.previous.error = r), e());
                    },
                  }));
            }),
            (t.prototype.resubscribeToQuery = function () {
              this.removeQuerySubscription();
              var e = this.currentObservable;
              if (e) {
                var t = e.last;
                try {
                  e.resetLastResults(), this.startQuerySubscription();
                } finally {
                  e.last = t;
                }
              }
            }),
            (t.prototype.getExecuteResult = function () {
              var e = this.observableQueryFields(),
                t = this.getOptions();
              if (t.skip)
                e = Object(n.a)(Object(n.a)({}, e), {
                  data: void 0,
                  error: void 0,
                  loading: !1,
                  networkStatus: s.a.ready,
                  called: !0,
                });
              else if (this.currentObservable) {
                var r = this.currentObservable.getCurrentResult(),
                  i = r.data,
                  a = r.loading,
                  c = r.partial,
                  u = r.networkStatus,
                  l = r.errors,
                  b = r.error;
                if (
                  (l && l.length > 0 && (b = new o.a({ graphQLErrors: l })),
                  (e = Object(n.a)(Object(n.a)({}, e), {
                    data: i,
                    loading: a,
                    networkStatus: u,
                    error: b,
                    called: !0,
                  })),
                  a)
                );
                else if (b)
                  Object.assign(e, {
                    data: (this.currentObservable.getLastResult() || {}).data,
                  });
                else {
                  var d = this.currentObservable.options.fetchPolicy;
                  if (
                    t.partialRefetch &&
                    c &&
                    (!i || 0 === Object.keys(i).length) &&
                    "cache-only" !== d
                  )
                    return (
                      Object.assign(e, {
                        loading: !0,
                        networkStatus: s.a.loading,
                      }),
                      e.refetch(),
                      e
                    );
                }
              }
              (e.client = this.client), this.setOptions(t, !0);
              var p = this.previous.result;
              return (
                (this.previous.loading = (p && p.loading) || !1),
                (e.previousData = p && (p.data || p.previousData)),
                (this.previous.result = e),
                this.currentObservable &&
                  this.currentObservable.resetQueryStoreErrors(),
                e
              );
            }),
            (t.prototype.handleErrorOrCompleted = function () {
              if (this.currentObservable && this.previous.result) {
                var e = this.previous.result,
                  t = e.data,
                  r = e.loading,
                  n = e.error;
                if (!r) {
                  var i = this.getOptions(),
                    o = i.query,
                    s = i.variables,
                    c = i.onCompleted,
                    u = i.onError,
                    l = i.skip;
                  if (
                    this.previousOptions &&
                    !this.previous.loading &&
                    Object(a.a)(this.previousOptions.query, o) &&
                    Object(a.a)(this.previousOptions.variables, s)
                  )
                    return;
                  !c || n || l ? u && n && u(n) : c(t);
                }
              }
            }),
            (t.prototype.removeQuerySubscription = function () {
              this.currentSubscription &&
                (this.currentSubscription.unsubscribe(),
                delete this.currentSubscription);
            }),
            (t.prototype.removeObservable = function (e) {
              this.currentObservable &&
                (this.currentObservable.tearDownQuery(),
                e && delete this.currentObservable);
            }),
            (t.prototype.observableQueryFields = function () {
              var e;
              return {
                variables:
                  null === (e = this.currentObservable) || void 0 === e
                    ? void 0
                    : e.variables,
                refetch: this.obsRefetch,
                fetchMore: this.obsFetchMore,
                updateQuery: this.obsUpdateQuery,
                startPolling: this.obsStartPolling,
                stopPolling: this.obsStopPolling,
                subscribeToMore: this.obsSubscribeToMore,
              };
            }),
            t
          );
        })(r(123).a);
      var l = r(63);
      function b(e, t, r) {
        void 0 === r && (r = !1);
        var o = Object(i.useContext)(Object(l.a)()),
          s = Object(i.useReducer)(function (e) {
            return e + 1;
          }, 0),
          c = s[0],
          b = s[1],
          d = t ? Object(n.a)(Object(n.a)({}, t), { query: e }) : { query: e },
          p = Object(i.useRef)(),
          h =
            p.current ||
            (p.current = new u({
              options: d,
              context: o,
              onNewData: function () {
                h.ssrInitiated()
                  ? b()
                  : Promise.resolve().then(function () {
                      return p.current && p.current.isMounted && b();
                    });
              },
            }));
        h.setOptions(d), (h.context = o);
        var v = (function (e, t) {
            var r = Object(i.useRef)();
            return (
              (r.current && Object(a.a)(t, r.current.key)) ||
                (r.current = { key: t, value: e() }),
              r.current.value
            );
          })(
            function () {
              return r ? h.executeLazy() : h.execute();
            },
            {
              options: Object(n.a)(Object(n.a)({}, d), {
                onError: void 0,
                onCompleted: void 0,
              }),
              context: o,
              tick: c,
            }
          ),
          O = r ? v[1] : v;
        return (
          __DEV__ &&
            (function (e) {
              if (__DEV__) {
                var t = Object(i.useRef)(!1);
                Object(i.useEffect)(function () {
                  return function () {
                    t.current = !0;
                  };
                }, []),
                  Object(i.useEffect)(function () {
                    !0 === t.current && ((t.current = !1), e());
                  }, []);
              }
            })(b),
          Object(i.useEffect)(function () {
            return function () {
              h.cleanup(), (p.current = void 0);
            };
          }, []),
          Object(i.useEffect)(
            function () {
              return h.afterExecute({ lazy: r });
            },
            [O.loading, O.networkStatus, O.error, O.data, h.currentObservable]
          ),
          v
        );
      }
    },
    138: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
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
    405: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(114),
        i = r(129);
      var a = r(266),
        o = r(177),
        s = r(397),
        c = r(8),
        u = r(93),
        l = r(94),
        b = r(2),
        d = r(92),
        p = r.n(d),
        h = r(115),
        v = r(160);
      function O(e) {
        var t = e.className,
          r = e.direction,
          n = e.index,
          i = e.marginDirection,
          a = e.children,
          o = e.split,
          s = e.wrap,
          l = b.useContext(g),
          d = l.horizontalSize,
          p = l.verticalSize,
          h = l.latestIndex,
          v = {};
        return (
          l.supportFlexGap ||
            ("vertical" === r
              ? n < h && (v = { marginBottom: d / (o ? 2 : 1) })
              : (v = Object(c.a)(
                  Object(c.a)({}, n < h && Object(u.a)({}, i, d / (o ? 2 : 1))),
                  s && { paddingBottom: p }
                ))),
          null === a || void 0 === a
            ? null
            : b.createElement(
                b.Fragment,
                null,
                b.createElement("div", { className: t, style: v }, a),
                n < h &&
                  o &&
                  b.createElement(
                    "span",
                    { className: "".concat(t, "-split"), style: v },
                    o
                  )
              )
        );
      }
      var f = r(247),
        y = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
              t.indexOf(n[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                (r[n[i]] = e[n[i]]);
          }
          return r;
        },
        g = b.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        j = { small: 8, middle: 16, large: 24 };
      var m,
        S = function (e) {
          var t,
            r = b.useContext(v.b),
            n = r.getPrefixCls,
            i = r.space,
            a = r.direction,
            o = e.size,
            s =
              void 0 === o
                ? (null === i || void 0 === i ? void 0 : i.size) || "small"
                : o,
            d = e.align,
            m = e.className,
            S = e.children,
            x = e.direction,
            $ = void 0 === x ? "horizontal" : x,
            k = e.prefixCls,
            w = e.split,
            Q = e.style,
            I = e.wrap,
            z = void 0 !== I && I,
            E = y(e, [
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
            N = Object(f.a)(),
            P = b.useMemo(
              function () {
                return (Array.isArray(s) ? s : [s, s]).map(function (e) {
                  return (function (e) {
                    return "string" === typeof e ? j[e] : e || 0;
                  })(e);
                });
              },
              [s]
            ),
            C = Object(l.a)(P, 2),
            B = C[0],
            L = C[1],
            D = Object(h.a)(S, { keepEmpty: !0 }),
            F = void 0 === d && "horizontal" === $ ? "center" : d,
            M = n("space", k),
            R = p()(
              M,
              "".concat(M, "-").concat($),
              ((t = {}),
              Object(u.a)(t, "".concat(M, "-rtl"), "rtl" === a),
              Object(u.a)(t, "".concat(M, "-align-").concat(F), F),
              t),
              m
            ),
            A = "".concat(M, "-item"),
            q = "rtl" === a ? "marginLeft" : "marginRight",
            T = 0,
            _ = D.map(function (e, t) {
              return (
                null !== e && void 0 !== e && (T = t),
                b.createElement(
                  O,
                  {
                    className: A,
                    key: "".concat(A, "-").concat(t),
                    direction: $,
                    index: t,
                    marginDirection: q,
                    split: w,
                    wrap: z,
                  },
                  e
                )
              );
            }),
            G = b.useMemo(
              function () {
                return {
                  horizontalSize: B,
                  verticalSize: L,
                  latestIndex: T,
                  supportFlexGap: N,
                };
              },
              [B, L, T, N]
            );
          if (0 === D.length) return null;
          var J = {};
          return (
            z && ((J.flexWrap = "wrap"), N || (J.marginBottom = -L)),
            N && ((J.columnGap = B), (J.rowGap = L)),
            b.createElement(
              "div",
              Object(c.a)(
                { className: R, style: Object(c.a)(Object(c.a)({}, J), Q) },
                E
              ),
              b.createElement(g.Provider, { value: G }, _)
            )
          );
        },
        x = r(260),
        $ = r.n(x),
        k = r(5),
        w = r(53),
        Q = r(52),
        I = r(110),
        z = r(138),
        E = r(99),
        N = r(111).a.div(m || (m = Object(E.a)([""]))),
        P = r(13);
      t.default = function () {
        var e,
          t,
          r = Object(k.i)(),
          c = r.param,
          u = r.subparam,
          l = Object(k.h)().state,
          d = Object(b.useState)(),
          p = Object(n.a)(d, 2),
          h = p[0],
          v = p[1],
          O = ((e = I.k), Object(i.a)(e, t, !0)),
          f = Object(n.a)(O, 2),
          y = f[0],
          g = f[1],
          j = g.loading,
          m = g.data,
          x = g.refetch,
          E = Object(a.a)(I.e, {
            onCompleted: function (e) {
              var t = e.deleteBoard,
                r = t.ok,
                n = t.err;
              r
                ? (Q.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  x && x())
                : Q.b.error(n);
            },
          }),
          C = Object(n.a)(E, 1)[0];
        return (
          Object(b.useEffect)(
            function () {
              y({ variables: { category: u } });
            },
            [y, u]
          ),
          Object(b.useEffect)(
            function () {
              var e = function () {
                x && x();
              };
              return (
                l && l.refresh && e(),
                function () {
                  return e();
                }
              );
            },
            [x, l]
          ),
          Object(b.useEffect)(
            function () {
              if (m && m.getBoardByCategory && m.getBoardByCategory.data) {
                var e = m.getBoardByCategory.data,
                  t = [];
                e.map(function (r, n) {
                  var i = {
                    id: r.id,
                    index: e.length - n,
                    title: r.title,
                    createdAt: Object(z.a)(r.createdAt || ""),
                    category: r.category,
                  };
                  return t.push(i);
                }),
                  v(t);
              }
            },
            [m]
          ),
          j
            ? Object(P.jsx)(P.Fragment, { children: "loading" })
            : Object(P.jsxs)(N, {
                children: [
                  Object(P.jsx)(w.b, {
                    to: "/admin/"
                      .concat(c, "/create-")
                      .concat(c, "?category=")
                      .concat(u, "&param=")
                      .concat(c, "&subparam=")
                      .concat(u),
                    children: Object(P.jsx)(o.a, {
                      type: "primary",
                      style: { marginTop: 15, marginBottom: 20 },
                      children: "\uae00\uc4f0\uae30",
                    }),
                  }),
                  Object(P.jsxs)(s.a, {
                    dataSource: h,
                    rowKey: "id",
                    children: [
                      Object(P.jsx)(
                        $.a,
                        {
                          title: "\ubc88\ud638",
                          dataIndex: "index",
                          width: 80,
                        },
                        "index"
                      ),
                      Object(P.jsx)(
                        $.a,
                        {
                          title: "\uc81c\ubaa9",
                          dataIndex: "title",
                          ellipsis: !0,
                          render: function (e, t) {
                            return Object(P.jsx)(S, {
                              children: Object(P.jsx)(w.b, {
                                to: "/admin/"
                                  .concat(c, "/detail-")
                                  .concat(c, "?category=")
                                  .concat(u, "&id=")
                                  .concat(t.id),
                                children: e,
                              }),
                            });
                          },
                        },
                        "title"
                      ),
                      Object(P.jsx)(
                        $.a,
                        {
                          title: "\uc791\uc131\uc77c",
                          dataIndex: "createdAt",
                          width: 150,
                        },
                        "createdAt"
                      ),
                      Object(P.jsx)(
                        $.a,
                        {
                          title: "Action",
                          width: 150,
                          render: function (e, t) {
                            return Object(P.jsx)(S, {
                              size: "middle",
                              children: Object(P.jsx)(o.a, {
                                type: "primary",
                                danger: !0,
                                onClick: function () {
                                  return C({ variables: { id: t.id } });
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
      };
    },
  },
]);
//# sourceMappingURL=21.1fe47a9a.chunk.js.map
