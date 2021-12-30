(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [8],
  {
    104: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return h;
      }),
        t.d(n, "l", function () {
          return k;
        }),
        t.d(n, "e", function () {
          return S;
        }),
        t.d(n, "j", function () {
          return w;
        }),
        t.d(n, "f", function () {
          return I;
        }),
        t.d(n, "g", function () {
          return N;
        }),
        t.d(n, "b", function () {
          return E;
        }),
        t.d(n, "c", function () {
          return P;
        }),
        t.d(n, "h", function () {
          return x;
        }),
        t.d(n, "k", function () {
          return C;
        }),
        t.d(n, "d", function () {
          return B;
        }),
        t.d(n, "i", function () {
          return A;
        });
      var r,
        a,
        o,
        i,
        c,
        l,
        u,
        d,
        s,
        b,
        p,
        f,
        m,
        g,
        v,
        y,
        O,
        j = t(94),
        $ = t(548),
        h = Object($.a)(
          r ||
            (r = Object(j.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object($.a)(
          a ||
            (a = Object(j.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        S = Object($.a)(
          o ||
            (o = Object(j.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object($.a)(
          i ||
            (i = Object(j.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I =
          (Object($.a)(
            c ||
              (c = Object(j.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            l ||
              (l = Object(j.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            u ||
              (u = Object(j.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        N = Object($.a)(
          d ||
            (d = Object(j.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        E = Object($.a)(
          s ||
            (s = Object(j.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        P = Object($.a)(
          b ||
            (b = Object(j.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object($.a)(
            p ||
              (p = Object(j.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            f ||
              (f = Object(j.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        C =
          (Object($.a)(
            m ||
              (m = Object(j.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            g ||
              (g = Object(j.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        B = Object($.a)(
          v ||
            (v = Object(j.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A =
          (Object($.a)(
            y ||
              (y = Object(j.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object($.a)(
            O ||
              (O = Object(j.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    115: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return a;
      });
      var r = t(134);
      t(172);
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
    122: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return f;
      }),
        t.d(n, "d", function () {
          return m;
        }),
        t.d(n, "a", function () {
          return g;
        }),
        t.d(n, "g", function () {
          return v;
        }),
        t.d(n, "c", function () {
          return y;
        }),
        t.d(n, "e", function () {
          return O;
        }),
        t.d(n, "f", function () {
          return j;
        });
      var r,
        a,
        o,
        i,
        c,
        l,
        u,
        d,
        s,
        b = t(94),
        p = t(548),
        f = Object(p.a)(
          r ||
            (r = Object(b.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(p.a)(
          a ||
            (a = Object(b.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        g = Object(p.a)(
          o ||
            (o = Object(b.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        v = Object(p.a)(
          i ||
            (i = Object(b.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        y = Object(p.a)(
          c ||
            (c = Object(b.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        O = Object(p.a)(
          l ||
            (l = Object(b.a)([
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n      }\n    }\n  }\n",
            ]))
        ),
        j = Object(p.a)(
          u ||
            (u = Object(b.a)([
              "\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n",
            ]))
        );
      Object(p.a)(
        d ||
          (d = Object(b.a)([
            "\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
          ]))
      ),
        Object(p.a)(
          s ||
            (s = Object(b.a)([
              "\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    133: function (e, n, t) {
      "use strict";
      t.d(n, "d", function () {
        return r;
      }),
        t.d(n, "c", function () {
          return a;
        }),
        t.d(n, "f", function () {
          return o;
        }),
        t.d(n, "b", function () {
          return i;
        }),
        t.d(n, "a", function () {
          return c;
        }),
        t.d(n, "e", function () {
          return l;
        });
      var r = function (e) {
          return (
            "storage" ===
            (null === e || void 0 === e ? void 0 : e.toString().split("-")[0])
          );
        },
        a = function (e) {
          var n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (n) {
            case "community":
              return (
                "notice" === t || "administration" === t || "storage" === t
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
          var n =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[0],
            t =
              null === e || void 0 === e ? void 0 : e.toString().split("-")[1];
          switch (n) {
            case "community":
              return (
                "notice" === t || "administration" === t || "storage" === t
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
    140: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return s;
      });
      var r = t(0),
        a = t(2),
        o = t(5),
        i = t(56),
        c = t(22),
        l = t(3),
        u = t(108),
        d = t(107);
      function s(e, n) {
        var t,
          s = Object(a.useContext)(Object(i.a)()),
          p = Object(d.a)(null === n || void 0 === n ? void 0 : n.client);
        Object(u.b)(e, u.a.Query);
        var f,
          m = Object(a.useState)(function () {
            var t = b(e, n),
              r = null;
            return (
              s.renderPromises && (r = s.renderPromises.getSSRObservable(t)),
              r ||
                ((r = p.watchQuery(t)),
                s.renderPromises &&
                  s.renderPromises.registerSSRObservable(r, t)),
              s.renderPromises &&
                !1 !== (null === n || void 0 === n ? void 0 : n.ssr) &&
                !(null === n || void 0 === n ? void 0 : n.skip) &&
                r.getCurrentResult().loading &&
                s.renderPromises.addQueryPromise(
                  {
                    getOptions: function () {
                      return b(e, n);
                    },
                    fetchData: function () {
                      return new Promise(function (e) {
                        var n = r.subscribe({
                          next: function (t) {
                            t.loading || (e(), n.unsubscribe());
                          },
                          error: function () {
                            e(), n.unsubscribe();
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
          g = m[0],
          v = m[1],
          y = Object(a.useState)(function () {
            var e,
              t,
              r = g.getCurrentResult();
            return (
              !r.loading &&
                n &&
                (r.error
                  ? null === (e = n.onError) ||
                    void 0 === e ||
                    e.call(n, r.error)
                  : r.data &&
                    (null === (t = n.onCompleted) ||
                      void 0 === t ||
                      t.call(n, r.data))),
              r
            );
          }),
          O = y[0],
          j = y[1],
          $ = Object(a.useRef)({
            client: p,
            query: e,
            options: n,
            result: O,
            previousData: void 0,
            watchQueryOptions: b(e, n),
          });
        Object(a.useEffect)(
          function () {
            var t,
              r,
              a,
              i = b(e, n);
            if ($.current.client === p && Object(o.a)($.current.query, e))
              Object(o.a)($.current.watchQueryOptions, i) ||
                (g.setOptions(i).catch(function () {}),
                (a = g.getCurrentResult()),
                ($.current.watchQueryOptions = i));
            else {
              var c = p.watchQuery(i);
              v(c), (a = c.getCurrentResult());
            }
            if (a) {
              var l = $.current.result;
              l.data && ($.current.previousData = l.data),
                j(($.current.result = a)),
                !a.loading &&
                  n &&
                  (O.loading ||
                    (O.error
                      ? null === (t = n.onError) ||
                        void 0 === t ||
                        t.call(n, O.error)
                      : O.data &&
                        (null === (r = n.onCompleted) ||
                          void 0 === r ||
                          r.call(n, O.data))));
            }
            Object.assign($.current, { client: p, query: e });
          },
          [g, p, e, n]
        ),
          Object(a.useEffect)(
            function () {
              if (!s.renderPromises) {
                var e = g.subscribe(n, function t(r) {
                  var a,
                    i,
                    c = g.last;
                  e.unsubscribe();
                  try {
                    g.resetLastResults(), (e = g.subscribe(n, t));
                  } finally {
                    g.last = c;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var u = $.current.result;
                  ((u && u.loading) || !Object(o.a)(r, u.error)) &&
                    (j(
                      ($.current.result = {
                        data: u.data,
                        error: r,
                        loading: !1,
                        networkStatus: l.a.error,
                      })
                    ),
                    null ===
                      (i =
                        null === (a = $.current.options) || void 0 === a
                          ? void 0
                          : a.onError) ||
                      void 0 === i ||
                      i.call(a, r));
                });
                return function () {
                  return e.unsubscribe();
                };
              }
              function n() {
                var e,
                  n,
                  t = $.current.result,
                  r = g.getCurrentResult();
                (t &&
                  t.loading === r.loading &&
                  t.networkStatus === r.networkStatus &&
                  Object(o.a)(t.data, r.data)) ||
                  (t.data && ($.current.previousData = t.data),
                  j(($.current.result = r)),
                  r.loading ||
                    null ===
                      (n =
                        null === (e = $.current.options) || void 0 === e
                          ? void 0
                          : e.onCompleted) ||
                    void 0 === n ||
                    n.call(e, r.data));
              }
            },
            [g, s.renderPromises, p.disableNetworkFetches]
          ),
          (f = (t = O).partial),
          (O = Object(r.f)(t, ["partial"])),
          !f ||
            !(null === n || void 0 === n ? void 0 : n.partialRefetch) ||
            O.loading ||
            (O.data && 0 !== Object.keys(O.data).length) ||
            "cache-only" === g.options.fetchPolicy ||
            ((O = Object(r.a)(Object(r.a)({}, O), {
              loading: !0,
              networkStatus: l.a.refetch,
            })),
            g.refetch()),
          s.renderPromises &&
            !1 !== (null === n || void 0 === n ? void 0 : n.ssr) &&
            !(null === n || void 0 === n ? void 0 : n.skip) &&
            O.loading &&
            g.setOptions(b(e, n)).catch(function () {}),
          Object.assign($.current, { options: n }),
          (s.renderPromises || p.disableNetworkFetches) &&
          !1 === (null === n || void 0 === n ? void 0 : n.ssr)
            ? (O = $.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: l.a.loading,
                })
            : ((null === n || void 0 === n ? void 0 : n.skip) ||
                "standby" ===
                  (null === n || void 0 === n ? void 0 : n.fetchPolicy)) &&
              (O = {
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: l.a.ready,
              }),
          O.errors &&
            O.errors.length &&
            (O = Object(r.a)(Object(r.a)({}, O), {
              error: O.error || new c.a({ graphQLErrors: O.errors }),
            }));
        var h = Object(a.useMemo)(
          function () {
            return {
              refetch: g.refetch.bind(g),
              fetchMore: g.fetchMore.bind(g),
              updateQuery: g.updateQuery.bind(g),
              startPolling: g.startPolling.bind(g),
              stopPolling: g.stopPolling.bind(g),
              subscribeToMore: g.subscribeToMore.bind(g),
            };
          },
          [g]
        );
        return Object(r.a)(
          Object(r.a)(Object(r.a)({}, h), {
            variables: b(e, n).variables,
            client: p,
            called: !0,
            previousData: $.current.previousData,
          }),
          O
        );
      }
      function b(e, n) {
        var t;
        void 0 === n && (n = {});
        var a = n.skip,
          o =
            (n.ssr,
            n.onCompleted,
            n.onError,
            n.displayName,
            Object(r.f)(n, [
              "skip",
              "ssr",
              "onCompleted",
              "onError",
              "displayName",
            ]));
        return (
          a
            ? (o.fetchPolicy = "standby")
            : ((!(null === (t = o.context) || void 0 === t
                ? void 0
                : t.renderPromises) ||
                ("network-only" !== o.fetchPolicy &&
                  "cache-and-network" !== o.fetchPolicy)) &&
                o.fetchPolicy) ||
              (o.fetchPolicy = "cache-first"),
          o.variables || (o.variables = {}),
          Object(r.a)({ query: e }, o)
        );
      }
    },
    157: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return o;
      });
      var r = t(45),
        a = t(115),
        o = function (e, n, t, o) {
          a.a
            .ref("/".concat(e, "/").concat(n, "/").concat(t))
            .delete()
            .then(function () {
              o("");
            })
            .catch(function (e) {
              return r.b.error(e);
            });
        };
    },
    158: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return l;
      });
      var r = t(114),
        a = t(112),
        o = t.n(a),
        i = t(45),
        c = t(115),
        l = function (e, n, t, a, l, u, d, s, b) {
          c.a
            .ref("/".concat(e, "/").concat(t, "/").concat(a))
            .put(n)
            .on(
              "state_changed",
              function (e) {},
              function (e) {
                return console.log(e);
              },
              function () {
                d(1),
                  c.a
                    .ref("/".concat(e, "/").concat(t, "/").concat(a))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var e = Object(r.a)(
                          o.a.mark(function e(n) {
                            return o.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((l(n), !s || !b)) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      (e.next = 4),
                                      s({
                                        variables: {
                                          url: n,
                                          fileName: a,
                                          boardId: b,
                                        },
                                      })
                                    );
                                  case 4:
                                    i.b.success(
                                      "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                    ),
                                      d(0);
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (n) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
              }
            );
        };
    },
    245: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return j;
      });
      var r = t(88),
        a = t(89),
        o = t(95),
        i = t(2),
        c = t(87),
        l = t.n(c),
        u = t(113),
        d = t(145),
        s = t(99),
        b = t(170),
        p = t(6);
      function f(e) {
        return void 0 !== e && null !== e;
      }
      var m = function (e) {
        var n,
          t = e.itemPrefixCls,
          a = e.component,
          o = e.span,
          c = e.className,
          u = e.style,
          d = e.labelStyle,
          s = e.contentStyle,
          b = e.bordered,
          p = e.label,
          m = e.content,
          g = e.colon,
          v = a;
        return b
          ? i.createElement(
              v,
              {
                className: l()(
                  ((n = {}),
                  Object(r.a)(n, "".concat(t, "-item-label"), f(p)),
                  Object(r.a)(n, "".concat(t, "-item-content"), f(m)),
                  n),
                  c
                ),
                style: u,
                colSpan: o,
              },
              f(p) && i.createElement("span", { style: d }, p),
              f(m) && i.createElement("span", { style: s }, m)
            )
          : i.createElement(
              v,
              {
                className: l()("".concat(t, "-item"), c),
                style: u,
                colSpan: o,
              },
              i.createElement(
                "div",
                { className: "".concat(t, "-item-container") },
                p &&
                  i.createElement(
                    "span",
                    {
                      className: l()(
                        "".concat(t, "-item-label"),
                        Object(r.a)({}, "".concat(t, "-item-no-colon"), !g)
                      ),
                      style: d,
                    },
                    p
                  ),
                m &&
                  i.createElement(
                    "span",
                    { className: l()("".concat(t, "-item-content")), style: s },
                    m
                  )
              )
            );
      };
      function g(e, n, t) {
        var r = n.colon,
          a = n.prefixCls,
          o = n.bordered,
          c = t.component,
          l = t.type,
          u = t.showLabel,
          d = t.showContent,
          s = t.labelStyle,
          b = t.contentStyle;
        return e.map(function (e, n) {
          var t = e.props,
            f = t.label,
            g = t.children,
            v = t.prefixCls,
            y = void 0 === v ? a : v,
            O = t.className,
            j = t.style,
            $ = t.labelStyle,
            h = t.contentStyle,
            k = t.span,
            S = void 0 === k ? 1 : k,
            w = e.key;
          return "string" === typeof c
            ? i.createElement(m, {
                key: "".concat(l, "-").concat(w || n),
                className: O,
                style: j,
                labelStyle: Object(p.a)(Object(p.a)({}, s), $),
                contentStyle: Object(p.a)(Object(p.a)({}, b), h),
                span: S,
                colon: r,
                component: c,
                itemPrefixCls: y,
                bordered: o,
                label: u ? f : null,
                content: d ? g : null,
              })
            : [
                i.createElement(m, {
                  key: "label-".concat(w || n),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, s), j), $),
                  span: 1,
                  colon: r,
                  component: c[0],
                  itemPrefixCls: y,
                  bordered: o,
                  label: f,
                }),
                i.createElement(m, {
                  key: "content-".concat(w || n),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, b), j), h),
                  span: 2 * S - 1,
                  component: c[1],
                  itemPrefixCls: y,
                  bordered: o,
                  content: g,
                }),
              ];
        });
      }
      var v = function (e) {
          var n = i.useContext(j),
            t = e.prefixCls,
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
                  { key: "label-".concat(o), className: "".concat(t, "-row") },
                  g(
                    a,
                    e,
                    Object(p.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      n
                    )
                  )
                ),
                i.createElement(
                  "tr",
                  {
                    key: "content-".concat(o),
                    className: "".concat(t, "-row"),
                  },
                  g(
                    a,
                    e,
                    Object(p.a)(
                      { component: "td", type: "content", showContent: !0 },
                      n
                    )
                  )
                )
              )
            : i.createElement(
                "tr",
                { key: o, className: "".concat(t, "-row") },
                g(
                  a,
                  e,
                  Object(p.a)(
                    {
                      component: c ? ["th", "td"] : "td",
                      type: "item",
                      showLabel: !0,
                      showContent: !0,
                    },
                    n
                  )
                )
              );
        },
        y = function (e) {
          return e.children;
        },
        O = t(111),
        j = i.createContext({}),
        $ = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function h(e, n, t) {
        var r = e;
        return (
          (void 0 === n || n > t) &&
            ((r = Object(O.a)(e, { span: t })),
            Object(s.a)(
              void 0 === n,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          r
        );
      }
      function k(e) {
        var n,
          t = e.prefixCls,
          c = e.title,
          s = e.extra,
          p = e.column,
          f = void 0 === p ? $ : p,
          m = e.colon,
          g = void 0 === m || m,
          y = e.bordered,
          O = e.layout,
          k = e.children,
          S = e.className,
          w = e.style,
          I = e.size,
          N = e.labelStyle,
          E = e.contentStyle,
          P = i.useContext(b.b),
          x = P.getPrefixCls,
          C = P.direction,
          B = x("descriptions", t),
          A = i.useState({}),
          L = Object(a.a)(A, 2),
          R = L[0],
          q = L[1],
          M = (function (e, n) {
            if ("number" === typeof e) return e;
            if ("object" === Object(o.a)(e))
              for (var t = 0; t < d.b.length; t++) {
                var r = d.b[t];
                if (n[r] && void 0 !== e[r]) return e[r] || $[r];
              }
            return 3;
          })(f, R);
        i.useEffect(function () {
          var e = d.a.subscribe(function (e) {
            "object" === Object(o.a)(f) && q(e);
          });
          return function () {
            d.a.unsubscribe(e);
          };
        }, []);
        var D = (function (e, n) {
            var t = Object(u.a)(e).filter(function (e) {
                return e;
              }),
              r = [],
              a = [],
              o = n;
            return (
              t.forEach(function (e, i) {
                var c,
                  l = null === (c = e.props) || void 0 === c ? void 0 : c.span,
                  u = l || 1;
                if (i === t.length - 1)
                  return a.push(h(e, l, o)), void r.push(a);
                u < o
                  ? ((o -= u), a.push(e))
                  : (a.push(h(e, u, o)), r.push(a), (o = n), (a = []));
              }),
              r
            );
          })(k, M),
          Q = i.useMemo(
            function () {
              return { labelStyle: N, contentStyle: E };
            },
            [N, E]
          );
        return i.createElement(
          j.Provider,
          { value: Q },
          i.createElement(
            "div",
            {
              className: l()(
                B,
                ((n = {}),
                Object(r.a)(
                  n,
                  "".concat(B, "-").concat(I),
                  I && "default" !== I
                ),
                Object(r.a)(n, "".concat(B, "-bordered"), !!y),
                Object(r.a)(n, "".concat(B, "-rtl"), "rtl" === C),
                n),
                S
              ),
              style: w,
            },
            (c || s) &&
              i.createElement(
                "div",
                { className: "".concat(B, "-header") },
                c &&
                  i.createElement(
                    "div",
                    { className: "".concat(B, "-title") },
                    c
                  ),
                s &&
                  i.createElement(
                    "div",
                    { className: "".concat(B, "-extra") },
                    s
                  )
              ),
            i.createElement(
              "div",
              { className: "".concat(B, "-view") },
              i.createElement(
                "table",
                null,
                i.createElement(
                  "tbody",
                  null,
                  D.map(function (e, n) {
                    return i.createElement(v, {
                      key: n,
                      index: n,
                      colon: g,
                      prefixCls: B,
                      vertical: "vertical" === O,
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
      n.b = k;
    },
    320: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return l;
      }),
        t.d(n, "a", function () {
          return u;
        });
      var r,
        a,
        o = t(94),
        i = t(103),
        c = t(200),
        l = i.a.div(
          r ||
            (r = Object(o.a)([
              "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n",
            ]))
        ),
        u = Object(i.a)(c.a)(
          a ||
            (a = Object(o.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        );
    },
  },
]);
//# sourceMappingURL=8.dd131ed1.chunk.js.map
