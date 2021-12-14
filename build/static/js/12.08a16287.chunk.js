(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [12],
  {
    110: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return j;
      }),
        n.d(t, "k", function () {
          return m;
        }),
        n.d(t, "e", function () {
          return y;
        }),
        n.d(t, "i", function () {
          return g;
        }),
        n.d(t, "f", function () {
          return x;
        }),
        n.d(t, "g", function () {
          return k;
        }),
        n.d(t, "b", function () {
          return S;
        }),
        n.d(t, "c", function () {
          return $;
        }),
        n.d(t, "d", function () {
          return I;
        }),
        n.d(t, "h", function () {
          return w;
        }),
        n.d(t, "j", function () {
          return N;
        });
      var r,
        a,
        i,
        c,
        o,
        s,
        l,
        u,
        d,
        b,
        p,
        f,
        O,
        h = n(99),
        v = n(402),
        j = Object(v.a)(
          r ||
            (r = Object(h.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        m = Object(v.a)(
          a ||
            (a = Object(h.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        y = Object(v.a)(
          i ||
            (i = Object(h.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        g = Object(v.a)(
          c ||
            (c = Object(h.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object(v.a)(
            o ||
              (o = Object(h.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            s ||
              (s = Object(h.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            l ||
              (l = Object(h.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(v.a)(
          u ||
            (u = Object(h.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(v.a)(
          d ||
            (d = Object(h.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(v.a)(
          b ||
            (b = Object(h.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(v.a)(
          p ||
            (p = Object(h.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(v.a)(
          f ||
            (f = Object(h.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(v.a)(
          O ||
            (O = Object(h.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    117: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(133);
      n(181);
      r.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var a = r.a.storage();
    },
    122: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "e", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return f;
        });
      var r,
        a,
        i,
        c,
        o,
        s = n(99),
        l = n(402),
        u = Object(l.a)(
          r ||
            (r = Object(s.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        d = Object(l.a)(
          a ||
            (a = Object(s.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(l.a)(
          i ||
            (i = Object(s.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        p = Object(l.a)(
          c ||
            (c = Object(s.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(l.a)(
          o ||
            (o = Object(s.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    129: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var r = n(0),
        a = (n(1), n(2)),
        i = n(7),
        c = n(27),
        o = n(4),
        s = n(116),
        l = (function (e) {
          function t(t) {
            var n = t.options,
              r = t.context,
              a = t.onNewData,
              i = e.call(this, n, r) || this;
            return (
              (i.runLazy = !1),
              (i.previous = Object.create(null)),
              (i.runLazyQuery = function (e) {
                i.cleanup(),
                  (i.runLazy = !0),
                  (i.lazyOptions = e),
                  i.onNewData();
              }),
              (i.obsRefetch = function (e) {
                var t;
                return null === (t = i.currentObservable) || void 0 === t
                  ? void 0
                  : t.refetch(e);
              }),
              (i.obsFetchMore = function (e) {
                var t;
                return null === (t = i.currentObservable) || void 0 === t
                  ? void 0
                  : t.fetchMore(e);
              }),
              (i.obsUpdateQuery = function (e) {
                var t;
                return null === (t = i.currentObservable) || void 0 === t
                  ? void 0
                  : t.updateQuery(e);
              }),
              (i.obsStartPolling = function (e) {
                var t;
                null === (t = i.currentObservable) ||
                  void 0 === t ||
                  t.startPolling(e);
              }),
              (i.obsStopPolling = function () {
                var e;
                null === (e = i.currentObservable) ||
                  void 0 === e ||
                  e.stopPolling();
              }),
              (i.obsSubscribeToMore = function (e) {
                var t;
                return null === (t = i.currentObservable) || void 0 === t
                  ? void 0
                  : t.subscribeToMore(e);
              }),
              (i.onNewData = a),
              i
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.execute = function () {
              this.refreshClient();
              var e = this.getOptions(),
                t = e.skip,
                n = e.query;
              return (
                (t || n !== this.previous.query) &&
                  (this.removeQuerySubscription(),
                  this.removeObservable(!t),
                  (this.previous.query = n)),
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
                      networkStatus: o.a.ready,
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
                n = void 0 !== t && t;
              this.isMounted = !0;
              var r = this.getOptions();
              return (
                this.currentObservable &&
                  !this.ssrInitiated() &&
                  this.startQuerySubscription(),
                (n && !this.runLazy) || this.handleErrorOrCompleted(),
                (this.previousOptions = r),
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
                  ((t.variables = Object(r.a)(
                    Object(r.a)({}, t.variables),
                    this.lazyOptions.variables
                  )),
                  (t.context = Object(r.a)(
                    Object(r.a)({}, t.context),
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
                n = e.skip,
                a = !1 === t,
                i = this.refreshClient().client.disableNetworkFetches,
                c = Object(r.a)(
                  {
                    loading: !0,
                    networkStatus: o.a.loading,
                    called: !0,
                    data: void 0,
                    stale: !1,
                    client: this.client,
                  },
                  this.observableQueryFields()
                );
              if (a && (this.ssrInitiated() || i))
                return (this.previous.result = c), c;
              if (this.ssrInitiated()) {
                var s = this.getExecuteResult() || c;
                return (
                  s.loading &&
                    !n &&
                    this.context.renderPromises.addQueryPromise(
                      this,
                      function () {
                        return null;
                      }
                    ),
                  s
                );
              }
            }),
            (t.prototype.prepareObservableQueryOptions = function () {
              var e = this.getOptions();
              this.verifyDocumentType(e.query, s.a.Query);
              var t = e.displayName || "Query";
              return (
                !this.ssrInitiated() ||
                  ("network-only" !== e.fetchPolicy &&
                    "cache-and-network" !== e.fetchPolicy) ||
                  (e.fetchPolicy = "cache-first"),
                Object(r.a)(Object(r.a)({}, e), {
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
                (this.previous.observableQueryOptions = Object(r.a)(
                  Object(r.a)({}, e),
                  { children: void 0 }
                )),
                  (this.currentObservable =
                    this.refreshClient().client.watchQuery(Object(r.a)({}, e))),
                  this.ssrInitiated() &&
                    this.context.renderPromises.registerSSRObservable(
                      this.currentObservable,
                      e
                    );
              }
            }),
            (t.prototype.updateObservableQuery = function () {
              if (this.currentObservable) {
                var e = Object(r.a)(
                  Object(r.a)({}, this.prepareObservableQueryOptions()),
                  { children: void 0 }
                );
                this.getOptions().skip
                  ? (this.previous.observableQueryOptions = e)
                  : Object(i.a)(e, this.previous.observableQueryOptions) ||
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
                    next: function (n) {
                      var r = n.loading,
                        a = n.networkStatus,
                        c = n.data,
                        o = t.previous.result;
                      (o &&
                        o.loading === r &&
                        o.networkStatus === a &&
                        Object(i.a)(o.data, c)) ||
                        e();
                    },
                    error: function (n) {
                      if (
                        (t.resubscribeToQuery(),
                        !n.hasOwnProperty("graphQLErrors"))
                      )
                        throw n;
                      var r = t.previous.result;
                      ((r && r.loading) || !Object(i.a)(n, t.previous.error)) &&
                        ((t.previous.error = n), e());
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
                e = Object(r.a)(Object(r.a)({}, e), {
                  data: void 0,
                  error: void 0,
                  loading: !1,
                  networkStatus: o.a.ready,
                  called: !0,
                });
              else if (this.currentObservable) {
                var n = this.currentObservable.getCurrentResult(),
                  a = n.data,
                  i = n.loading,
                  s = n.partial,
                  l = n.networkStatus,
                  u = n.errors,
                  d = n.error;
                if (
                  (u && u.length > 0 && (d = new c.a({ graphQLErrors: u })),
                  (e = Object(r.a)(Object(r.a)({}, e), {
                    data: a,
                    loading: i,
                    networkStatus: l,
                    error: d,
                    called: !0,
                  })),
                  i)
                );
                else if (d)
                  Object.assign(e, {
                    data: (this.currentObservable.getLastResult() || {}).data,
                  });
                else {
                  var b = this.currentObservable.options.fetchPolicy;
                  if (
                    t.partialRefetch &&
                    s &&
                    (!a || 0 === Object.keys(a).length) &&
                    "cache-only" !== b
                  )
                    return (
                      Object.assign(e, {
                        loading: !0,
                        networkStatus: o.a.loading,
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
                  n = e.loading,
                  r = e.error;
                if (!n) {
                  var a = this.getOptions(),
                    c = a.query,
                    o = a.variables,
                    s = a.onCompleted,
                    l = a.onError,
                    u = a.skip;
                  if (
                    this.previousOptions &&
                    !this.previous.loading &&
                    Object(i.a)(this.previousOptions.query, c) &&
                    Object(i.a)(this.previousOptions.variables, o)
                  )
                    return;
                  !s || r || u ? l && r && l(r) : s(t);
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
        })(n(123).a);
      var u = n(63);
      function d(e, t, n) {
        void 0 === n && (n = !1);
        var c = Object(a.useContext)(Object(u.a)()),
          o = Object(a.useReducer)(function (e) {
            return e + 1;
          }, 0),
          s = o[0],
          d = o[1],
          b = t ? Object(r.a)(Object(r.a)({}, t), { query: e }) : { query: e },
          p = Object(a.useRef)(),
          f =
            p.current ||
            (p.current = new l({
              options: b,
              context: c,
              onNewData: function () {
                f.ssrInitiated()
                  ? d()
                  : Promise.resolve().then(function () {
                      return p.current && p.current.isMounted && d();
                    });
              },
            }));
        f.setOptions(b), (f.context = c);
        var O = (function (e, t) {
            var n = Object(a.useRef)();
            return (
              (n.current && Object(i.a)(t, n.current.key)) ||
                (n.current = { key: t, value: e() }),
              n.current.value
            );
          })(
            function () {
              return n ? f.executeLazy() : f.execute();
            },
            {
              options: Object(r.a)(Object(r.a)({}, b), {
                onError: void 0,
                onCompleted: void 0,
              }),
              context: c,
              tick: s,
            }
          ),
          h = n ? O[1] : O;
        return (
          __DEV__ &&
            (function (e) {
              if (__DEV__) {
                var t = Object(a.useRef)(!1);
                Object(a.useEffect)(function () {
                  return function () {
                    t.current = !0;
                  };
                }, []),
                  Object(a.useEffect)(function () {
                    !0 === t.current && ((t.current = !1), e());
                  }, []);
              }
            })(d),
          Object(a.useEffect)(function () {
            return function () {
              f.cleanup(), (p.current = void 0);
            };
          }, []),
          Object(a.useEffect)(
            function () {
              return f.afterExecute({ lazy: n });
            },
            [h.loading, h.networkStatus, h.error, h.data, f.currentObservable]
          ),
          O
        );
      }
    },
    141: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n(52),
        a = n(117),
        i = function (e, t, n, i) {
          a.a
            .ref("/".concat(e, "/").concat(t, "/").concat(n))
            .delete()
            .then(function () {
              i("");
            })
            .catch(function (e) {
              return r.b.error(e);
            });
        };
    },
    142: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var r = n(119),
        a = n.n(r),
        i = n(120),
        c = n(52),
        o = n(117),
        s = function (e, t, n, r, s, l, u, d, b) {
          o.a
            .ref("/".concat(e, "/").concat(n, "/").concat(r))
            .put(t)
            .on(
              "state_changed",
              function (e) {},
              function (e) {
                return console.log(e);
              },
              function () {
                u(1),
                  o.a
                    .ref("/".concat(e, "/").concat(n, "/").concat(r))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var e = Object(i.a)(
                          a.a.mark(function e(t) {
                            return a.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((s(t), !d || !b)) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      (e.next = 4),
                                      d({
                                        variables: {
                                          url: t,
                                          fileName: r,
                                          boardId: b,
                                        },
                                      })
                                    );
                                  case 4:
                                    c.b.success(
                                      "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                    ),
                                      u(0);
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
              }
            );
        };
    },
    188: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n(129);
      function a(e, t) {
        return Object(r.a)(e, t, !1);
      }
    },
    202: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var r,
        a,
        i = n(99),
        c = n(111),
        o = n(177),
        s = c.a.div(
          r ||
            (r = Object(i.a)([
              "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n",
            ]))
        ),
        l = Object(c.a)(o.a)(
          a ||
            (a = Object(i.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        );
    },
    208: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      });
      var r = n(93),
        a = n(94),
        i = n(100),
        c = n(2),
        o = n(92),
        s = n.n(o),
        l = n(115),
        u = n(139),
        d = n(107),
        b = n(160),
        p = n(8);
      function f(e) {
        return void 0 !== e && null !== e;
      }
      var O = function (e) {
        var t,
          n = e.itemPrefixCls,
          a = e.component,
          i = e.span,
          o = e.className,
          l = e.style,
          u = e.labelStyle,
          d = e.contentStyle,
          b = e.bordered,
          p = e.label,
          O = e.content,
          h = e.colon,
          v = a;
        return b
          ? c.createElement(
              v,
              {
                className: s()(
                  ((t = {}),
                  Object(r.a)(t, "".concat(n, "-item-label"), f(p)),
                  Object(r.a)(t, "".concat(n, "-item-content"), f(O)),
                  t),
                  o
                ),
                style: l,
                colSpan: i,
              },
              f(p) && c.createElement("span", { style: u }, p),
              f(O) && c.createElement("span", { style: d }, O)
            )
          : c.createElement(
              v,
              {
                className: s()("".concat(n, "-item"), o),
                style: l,
                colSpan: i,
              },
              c.createElement(
                "div",
                { className: "".concat(n, "-item-container") },
                p &&
                  c.createElement(
                    "span",
                    {
                      className: s()(
                        "".concat(n, "-item-label"),
                        Object(r.a)({}, "".concat(n, "-item-no-colon"), !h)
                      ),
                      style: u,
                    },
                    p
                  ),
                O &&
                  c.createElement(
                    "span",
                    { className: s()("".concat(n, "-item-content")), style: d },
                    O
                  )
              )
            );
      };
      function h(e, t, n) {
        var r = t.colon,
          a = t.prefixCls,
          i = t.bordered,
          o = n.component,
          s = n.type,
          l = n.showLabel,
          u = n.showContent,
          d = n.labelStyle,
          b = n.contentStyle;
        return e.map(function (e, t) {
          var n = e.props,
            f = n.label,
            h = n.children,
            v = n.prefixCls,
            j = void 0 === v ? a : v,
            m = n.className,
            y = n.style,
            g = n.labelStyle,
            x = n.contentStyle,
            k = n.span,
            S = void 0 === k ? 1 : k,
            $ = e.key;
          return "string" === typeof o
            ? c.createElement(O, {
                key: "".concat(s, "-").concat($ || t),
                className: m,
                style: y,
                labelStyle: Object(p.a)(Object(p.a)({}, d), g),
                contentStyle: Object(p.a)(Object(p.a)({}, b), x),
                span: S,
                colon: r,
                component: o,
                itemPrefixCls: j,
                bordered: i,
                label: l ? f : null,
                content: u ? h : null,
              })
            : [
                c.createElement(O, {
                  key: "label-".concat($ || t),
                  className: m,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, d), y), g),
                  span: 1,
                  colon: r,
                  component: o[0],
                  itemPrefixCls: j,
                  bordered: i,
                  label: f,
                }),
                c.createElement(O, {
                  key: "content-".concat($ || t),
                  className: m,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, b), y), x),
                  span: 2 * S - 1,
                  component: o[1],
                  itemPrefixCls: j,
                  bordered: i,
                  content: h,
                }),
              ];
        });
      }
      var v = function (e) {
          var t = c.useContext(y),
            n = e.prefixCls,
            r = e.vertical,
            a = e.row,
            i = e.index,
            o = e.bordered;
          return r
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(
                  "tr",
                  { key: "label-".concat(i), className: "".concat(n, "-row") },
                  h(
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
                    key: "content-".concat(i),
                    className: "".concat(n, "-row"),
                  },
                  h(
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
                { key: i, className: "".concat(n, "-row") },
                h(
                  a,
                  e,
                  Object(p.a)(
                    {
                      component: o ? ["th", "td"] : "td",
                      type: "item",
                      showLabel: !0,
                      showContent: !0,
                    },
                    t
                  )
                )
              );
        },
        j = function (e) {
          return e.children;
        },
        m = n(112),
        y = c.createContext({}),
        g = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function x(e, t, n) {
        var r = e;
        return (
          (void 0 === t || t > n) &&
            ((r = Object(m.a)(e, { span: n })),
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
          o = e.title,
          d = e.extra,
          p = e.column,
          f = void 0 === p ? g : p,
          O = e.colon,
          h = void 0 === O || O,
          j = e.bordered,
          m = e.layout,
          k = e.children,
          S = e.className,
          $ = e.style,
          I = e.size,
          w = e.labelStyle,
          N = e.contentStyle,
          B = c.useContext(b.b),
          C = B.getPrefixCls,
          E = B.direction,
          Q = C("descriptions", n),
          L = c.useState({}),
          P = Object(a.a)(L, 2),
          z = P[0],
          R = P[1],
          A = (function (e, t) {
            if ("number" === typeof e) return e;
            if ("object" === Object(i.a)(e))
              for (var n = 0; n < u.b.length; n++) {
                var r = u.b[n];
                if (t[r] && void 0 !== e[r]) return e[r] || g[r];
              }
            return 3;
          })(f, z);
        c.useEffect(function () {
          var e = u.a.subscribe(function (e) {
            "object" === Object(i.a)(f) && R(e);
          });
          return function () {
            u.a.unsubscribe(e);
          };
        }, []);
        var D = (function (e, t) {
          var n = Object(l.a)(e).filter(function (e) {
              return e;
            }),
            r = [],
            a = [],
            i = t;
          return (
            n.forEach(function (e, c) {
              var o,
                s = null === (o = e.props) || void 0 === o ? void 0 : o.span,
                l = s || 1;
              if (c === n.length - 1) return a.push(x(e, s, i)), void r.push(a);
              l < i
                ? ((i -= l), a.push(e))
                : (a.push(x(e, l, i)), r.push(a), (i = t), (a = []));
            }),
            r
          );
        })(k, A);
        return c.createElement(
          y.Provider,
          { value: { labelStyle: w, contentStyle: N } },
          c.createElement(
            "div",
            {
              className: s()(
                Q,
                ((t = {}),
                Object(r.a)(
                  t,
                  "".concat(Q, "-").concat(I),
                  I && "default" !== I
                ),
                Object(r.a)(t, "".concat(Q, "-bordered"), !!j),
                Object(r.a)(t, "".concat(Q, "-rtl"), "rtl" === E),
                t),
                S
              ),
              style: $,
            },
            (o || d) &&
              c.createElement(
                "div",
                { className: "".concat(Q, "-header") },
                o &&
                  c.createElement(
                    "div",
                    { className: "".concat(Q, "-title") },
                    o
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
                  D.map(function (e, t) {
                    return c.createElement(v, {
                      key: t,
                      index: t,
                      colon: h,
                      prefixCls: Q,
                      vertical: "vertical" === m,
                      bordered: j,
                      row: e,
                    });
                  })
                )
              )
            )
          )
        );
      }
      k.Item = j;
      t.b = k;
    },
    396: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(179),
        a = n(119),
        i = n.n(a),
        c = n(120),
        o = n(114),
        s = n(2),
        l = n(5),
        u = n(157),
        d = n.n(u),
        b = n(188),
        p = n(266),
        f = n(122),
        O = n(110),
        h = n(52),
        v = n(202),
        j = n(208),
        m = n(403),
        y = n(398),
        g = n(132),
        x = n(274),
        k = n(419),
        S = n(163),
        $ = n(117),
        I = n(141),
        w = n(142),
        N = n(13);
      t.default = function () {
        var e = Object(l.h)().search,
          t = d.a.parse(e),
          n = Object(l.g)(),
          a = Object(l.i)().param,
          u = t.id,
          B = t.category,
          C = Object(s.useState)(),
          E = Object(o.a)(C, 2),
          Q = E[0],
          L = E[1],
          P = Object(s.useState)(),
          z = Object(o.a)(P, 2),
          R = z[0],
          A = z[1],
          D = Object(s.useState)([]),
          F = Object(o.a)(D, 2),
          q = F[0],
          M = F[1],
          _ = Object(s.useState)(),
          T = Object(o.a)(_, 2),
          U = T[0],
          J = T[1],
          Y = Object(g.a)(""),
          K = Object(o.a)(Y, 3),
          V = K[0],
          G = K[1],
          H = K[2],
          W = Object(g.a)(""),
          Z = Object(o.a)(W, 3),
          X = Z[0],
          ee = Z[1],
          te = Z[2],
          ne = Object(g.a)(""),
          re = Object(o.a)(ne, 3),
          ae = re[0],
          ie = re[1],
          ce = re[2],
          oe = Object(s.useState)(0),
          se = Object(o.a)(oe, 2),
          le = se[0],
          ue = se[1],
          de = Object(s.useState)(),
          be = Object(o.a)(de, 2),
          pe = be[0],
          fe = be[1],
          Oe = Object(s.useState)(),
          he = Object(o.a)(Oe, 2),
          ve = he[0],
          je = he[1],
          me = Object(s.useState)(!1),
          ye = Object(o.a)(me, 2),
          ge = ye[0],
          xe = ye[1],
          ke = Object(b.a)(f.b, { variables: { id: parseInt(u, 10) } }),
          Se = ke.data,
          $e = ke.loading,
          Ie = ke.refetch,
          we = Object(p.a)(O.e, {
            onCompleted: function (e) {
              var t = e.deleteBoard,
                r = t.ok,
                i = t.err;
              r
                ? (h.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  n.push({
                    pathname: "/admin/".concat(a, "/").concat(B),
                    state: { refresh: !0 },
                  }))
                : (console.log(i),
                  h.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Ne = Object(o.a)(we, 1)[0],
          Be = Object(p.a)(O.f, {
            onCompleted: function (e) {
              var t = e.deleteFile,
                n = t.ok,
                r = t.err;
              n &&
                (h.b.success(
                  "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                ),
                Ie ? Ie() : (console.log(r), h.b.error(r)));
            },
          }),
          Ce = Object(o.a)(Be, 1)[0],
          Ee = Object(p.a)(O.b),
          Qe = Object(o.a)(Ee, 1)[0],
          Le = Object(p.a)(O.c),
          Pe = Object(o.a)(Le, 1)[0],
          ze = Object(p.a)(O.i, {
            onCompleted: function (e) {
              var t = e.editBoard,
                r = t.ok,
                i = t.err;
              r
                ? (h.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  n.push({
                    pathname: "/admin/".concat(a, "/").concat(B),
                    state: { refresh: !0 },
                  }))
                : (console.log(i),
                  h.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Re = Object(o.a)(ze, 1)[0],
          Ae = Object(s.useCallback)(
            function () {
              Ne({ variables: { id: parseInt(u, 10) } });
            },
            [u, Ne]
          ),
          De = Object(s.useCallback)(
            Object(c.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Re({
                            variables: {
                              id: parseInt(u, 10),
                              title: V,
                              content: X,
                              link: ae,
                            },
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [u, V, X, ae, Re]
          ),
          Fe = Object(s.useCallback)(
            (function () {
              var e = Object(c.a)(
                i.a.mark(function e(t, n) {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            $.a
                              .ref("/files/".concat(B, "/").concat(n))
                              .delete(),
                            (e.next = 3),
                            Ce({ variables: { id: t } })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })(),
            [Ce, B]
          ),
          qe = Object(s.useCallback)(
            function (e) {
              ue(le + 1),
                je(e.name),
                xe(!0),
                Object(w.a)(
                  "images",
                  e,
                  B,
                  e.name,
                  fe,
                  le,
                  ue,
                  Pe,
                  parseInt(u, 10)
                ),
                xe(!1),
                ue(0);
            },
            [B, le, Pe, u]
          ),
          Me = Object(s.useCallback)(
            function (e) {
              ue(le + 1),
                $.a
                  .ref("/files/".concat(B, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      $.a
                        .ref("/files/".concat(B, "/").concat(e.name))
                        .getDownloadURL()
                        .then(
                          (function () {
                            var t = Object(c.a)(
                              i.a.mark(function t(n) {
                                return i.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          M(function (t) {
                                            return [].concat(Object(r.a)(t), [
                                              { url: n, fileName: e.name },
                                            ]);
                                          }),
                                          (t.next = 3),
                                          Qe({
                                            variables: {
                                              url: n,
                                              fileName: e.name,
                                              boardId: parseInt(u, 10),
                                            },
                                            onCompleted: function (e) {
                                              var t = e.createFile,
                                                n = t.ok,
                                                r = t.err;
                                              n
                                                ? (h.b.success(
                                                    "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  Ie && Ie())
                                                : (h.b.error(
                                                    "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  console.log(r));
                                            },
                                          })
                                        );
                                      case 3:
                                        ue(le - 1);
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        );
                    }
                  );
            },
            [Qe, u, B, le, Ie]
          ),
          _e = Object(s.useCallback)(
            function () {
              ve && ve.trim() && Object(I.a)("images", B, ve, fe);
            },
            [B, ve]
          );
        return (
          Object(s.useEffect)(
            function () {
              Se &&
                Se.getBoardById &&
                Se.getBoardById.data &&
                (L(Se.getBoardById.data),
                H(Se.getBoardById.data.title || ""),
                te(Se.getBoardById.data.content || ""),
                ce(Se.getBoardById.data.link || "")),
                Se &&
                  Se.getBoardById &&
                  Se.getBoardById.data &&
                  Se.getBoardById.data.files &&
                  A(Se.getBoardById.data.files),
                Se &&
                  Se.getBoardById &&
                  Se.getBoardById.data &&
                  Se.getBoardById.data.images &&
                  J(Se.getBoardById.data.images);
            },
            [Se, H, te, ce]
          ),
          Object(s.useEffect)(
            function () {
              le < 0 && ue(0);
            },
            [le]
          ),
          $e
            ? Object(N.jsx)("div", { children: "loading..." })
            : Object(N.jsxs)(v.b, {
                children: [
                  Object(N.jsx)(v.a, {
                    type: "ghost",
                    onClick: function () {
                      return n.goBack();
                    },
                    children: "\ub4a4\ub85c",
                  }),
                  Object(N.jsxs)(j.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      Object(N.jsx)(j.b.Item, {
                        label: "\uc81c\ubaa9",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: Object(N.jsx)(m.a, {
                          placeholder:
                            (null === Q || void 0 === Q ? void 0 : Q.title) ||
                            void 0,
                          value: V,
                          onChange: G,
                        }),
                      }),
                      Object(N.jsxs)(j.b.Item, {
                        label: "\ud30c\uc77c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          R && 0 !== R.length
                            ? Object(N.jsx)(N.Fragment, {
                                children: R.map(function (e, t) {
                                  return Object(N.jsxs)(
                                    "div",
                                    {
                                      className: "attach-group",
                                      children: [
                                        Object(N.jsx)("a", {
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
                                        Object(N.jsx)("button", {
                                          className: "attach-button",
                                          onClick: function () {
                                            return Fe(e.id, e.fileName);
                                          },
                                          children: Object(N.jsx)(x.a, {}),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              })
                            : 0 === q.length
                            ? Object(N.jsx)("div", {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              })
                            : Object(N.jsx)(N.Fragment, {}),
                          Object(N.jsx)(y.a, {
                            multiple: !0,
                            maxCount: 4,
                            className: "upload-list-inline",
                            customRequest: function (e) {
                              var t = e.file;
                              return Me(t);
                            },
                            onChange: function (e) {
                              var t = e.file;
                              0 !== q.length
                                ? (t.status = "done")
                                : (t.status = "removed");
                            },
                            children: Object(N.jsx)(v.a, {
                              icon: Object(N.jsx)(k.a, {}),
                              children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                        ],
                      }),
                      Object(N.jsx)(j.b.Item, {
                        label: "\ub9c1\ud06c",
                        span: 4,
                        children: Object(N.jsx)(m.a, {
                          placeholder:
                            (null === Q || void 0 === Q ? void 0 : Q.link) ||
                            void 0,
                          value: ae,
                          onChange: ie,
                        }),
                      }),
                      "achievement" === a &&
                        Object(N.jsxs)(j.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            U && 0 !== U.length
                              ? Object(N.jsx)("div", {
                                  children: pe
                                    ? Object(N.jsx)("img", {
                                        src: pe,
                                        width: 300,
                                        alt: "upimage",
                                      })
                                    : Object(N.jsx)("img", {
                                        src: U[0].url,
                                        alt: "ima",
                                        width: 300,
                                      }),
                                })
                              : Object(N.jsx)("div", {
                                  children: "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                }),
                            Object(N.jsx)(y.a, {
                              multiple: !0,
                              maxCount: 1,
                              listType: "picture",
                              className: "upload-list-inline",
                              progress: { showInfo: !0 },
                              onRemove: function () {
                                return _e();
                              },
                              customRequest: function (e) {
                                var t = e.file;
                                return qe(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== q.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(N.jsx)(v.a, {
                                icon: Object(N.jsx)(k.a, {}),
                                children:
                                  "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                      Object(N.jsx)(j.b.Item, {
                        label: "\ub0b4\uc6a9",
                        span: 4,
                        children: Object(N.jsx)(m.a.TextArea, {
                          placeholder:
                            (null === Q || void 0 === Q ? void 0 : Q.content) ||
                            void 0,
                          rows: 10,
                          value: X,
                          onChange: ee,
                        }),
                      }),
                    ],
                  }),
                  Object(N.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(N.jsx)(v.a, {
                        type: "primary",
                        onClick: function () {
                          return De();
                        },
                        disabled: ge,
                        children: $e
                          ? "Uploading..."
                          : le <= 0
                          ? "\uc62c\ub9ac\uae30"
                          : Object(N.jsxs)(N.Fragment, {
                              children: [
                                Object(N.jsx)(S.a, {}),
                                " \uc774\ubbf8\uc9c0 / \ud30c\uc77c \uc5c5\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4...",
                              ],
                            }),
                      }),
                      Object(N.jsx)(v.a, {
                        type: "primary",
                        danger: !0,
                        onClick: Ae,
                        children: "\uc0ad\uc81c\ud558\uae30",
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
//# sourceMappingURL=12.08a16287.chunk.js.map
