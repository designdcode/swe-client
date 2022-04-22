(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [8],
  {
    104: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return h;
      }),
        t.d(e, "k", function () {
          return k;
        }),
        t.d(e, "e", function () {
          return S;
        }),
        t.d(e, "i", function () {
          return w;
        }),
        t.d(e, "f", function () {
          return I;
        }),
        t.d(e, "g", function () {
          return N;
        }),
        t.d(e, "b", function () {
          return C;
        }),
        t.d(e, "c", function () {
          return A;
        }),
        t.d(e, "j", function () {
          return E;
        }),
        t.d(e, "d", function () {
          return P;
        }),
        t.d(e, "h", function () {
          return x;
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
        $ = t(94),
        j = t(528),
        h = Object(j.a)(
          r ||
            (r = Object($.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(j.a)(
          a ||
            (a = Object($.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        S = Object(j.a)(
          o ||
            (o = Object($.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w = Object(j.a)(
          i ||
            (i = Object($.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I =
          (Object(j.a)(
            c ||
              (c = Object($.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(j.a)(
            l ||
              (l = Object($.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(j.a)(
            u ||
              (u = Object($.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        N = Object(j.a)(
          d ||
            (d = Object($.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C = Object(j.a)(
          s ||
            (s = Object($.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A = Object(j.a)(
          b ||
            (b = Object($.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        E =
          (Object(j.a)(
            p ||
              (p = Object($.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(j.a)(
            f ||
              (f = Object($.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(j.a)(
            m ||
              (m = Object($.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(j.a)(
            g ||
              (g = Object($.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        P = Object(j.a)(
          v ||
            (v = Object($.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object(j.a)(
            y ||
              (y = Object($.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(j.a)(
            O ||
              (O = Object($.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    114: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return a;
      });
      var r = t(133);
      t(189);
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
    121: function (n, e, t) {
      "use strict";
      t.d(e, "b", function () {
        return f;
      }),
        t.d(e, "d", function () {
          return m;
        }),
        t.d(e, "a", function () {
          return g;
        }),
        t.d(e, "g", function () {
          return v;
        }),
        t.d(e, "c", function () {
          return y;
        }),
        t.d(e, "e", function () {
          return O;
        }),
        t.d(e, "f", function () {
          return $;
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
        p = t(528),
        f = Object(p.a)(
          r ||
            (r = Object(b.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        inputCreatedAt\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
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
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n        link\n      }\n    }\n  }\n",
            ]))
        ),
        $ = Object(p.a)(
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
    132: function (n, e, t) {
      "use strict";
      t.d(e, "d", function () {
        return r;
      }),
        t.d(e, "c", function () {
          return a;
        }),
        t.d(e, "f", function () {
          return o;
        }),
        t.d(e, "b", function () {
          return i;
        }),
        t.d(e, "a", function () {
          return c;
        }),
        t.d(e, "e", function () {
          return l;
        });
      var r = function (n) {
          return (
            "storage" ===
            (null === n || void 0 === n ? void 0 : n.toString().split("-")[0])
          );
        },
        a = function (n) {
          var e =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[0],
            t =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[1];
          switch (e) {
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
        o = function (n) {
          switch (
            null === n || void 0 === n ? void 0 : n.toString().split("-")[1]
          ) {
            case "aidnews":
            case "valuenews":
            case "coopnews":
              return !0;
            default:
              return !1;
          }
        },
        i = function (n) {
          var e =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[0],
            t =
              null === n || void 0 === n ? void 0 : n.toString().split("-")[1];
          switch (e) {
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
        c = function (n) {
          return (
            "introduce" !==
            (null === n || void 0 === n ? void 0 : n.toString().split("-")[0])
          );
        },
        l = function (n) {
          switch (
            null === n || void 0 === n ? void 0 : n.toString().split("-")[1]
          ) {
            case "help":
            case "request":
              return !0;
            default:
              return !1;
          }
        };
    },
    138: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return s;
      });
      var r = t(0),
        a = t(2),
        o = t(5),
        i = t(56),
        c = t(22),
        l = t(3),
        u = t(110),
        d = t(109);
      function s(n, e) {
        var t,
          s = Object(a.useContext)(Object(i.a)()),
          p = Object(d.a)(null === e || void 0 === e ? void 0 : e.client);
        Object(u.b)(n, u.a.Query);
        var f,
          m = Object(a.useState)(function () {
            var t = b(n, e),
              r = null;
            return (
              s.renderPromises && (r = s.renderPromises.getSSRObservable(t)),
              r ||
                ((r = p.watchQuery(t)),
                s.renderPromises &&
                  s.renderPromises.registerSSRObservable(r, t)),
              s.renderPromises &&
                !1 !== (null === e || void 0 === e ? void 0 : e.ssr) &&
                !(null === e || void 0 === e ? void 0 : e.skip) &&
                r.getCurrentResult().loading &&
                s.renderPromises.addQueryPromise(
                  {
                    getOptions: function () {
                      return b(n, e);
                    },
                    fetchData: function () {
                      return new Promise(function (n) {
                        var e = r.subscribe({
                          next: function (t) {
                            t.loading || (n(), e.unsubscribe());
                          },
                          error: function () {
                            n(), e.unsubscribe();
                          },
                          complete: function () {
                            n();
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
            var n,
              t,
              r = g.getCurrentResult();
            return (
              !r.loading &&
                e &&
                (r.error
                  ? null === (n = e.onError) ||
                    void 0 === n ||
                    n.call(e, r.error)
                  : r.data &&
                    (null === (t = e.onCompleted) ||
                      void 0 === t ||
                      t.call(e, r.data))),
              r
            );
          }),
          O = y[0],
          $ = y[1],
          j = Object(a.useRef)({
            client: p,
            query: n,
            options: e,
            result: O,
            previousData: void 0,
            watchQueryOptions: b(n, e),
          });
        Object(a.useEffect)(
          function () {
            var t,
              r,
              a,
              i = b(n, e);
            if (j.current.client === p && Object(o.a)(j.current.query, n))
              Object(o.a)(j.current.watchQueryOptions, i) ||
                (g.setOptions(i).catch(function () {}),
                (a = g.getCurrentResult()),
                (j.current.watchQueryOptions = i));
            else {
              var c = p.watchQuery(i);
              v(c), (a = c.getCurrentResult());
            }
            if (a) {
              var l = j.current.result;
              l.data && (j.current.previousData = l.data),
                $((j.current.result = a)),
                !a.loading &&
                  e &&
                  (O.loading ||
                    (O.error
                      ? null === (t = e.onError) ||
                        void 0 === t ||
                        t.call(e, O.error)
                      : O.data &&
                        (null === (r = e.onCompleted) ||
                          void 0 === r ||
                          r.call(e, O.data))));
            }
            Object.assign(j.current, { client: p, query: n });
          },
          [g, p, n, e]
        ),
          Object(a.useEffect)(
            function () {
              if (!s.renderPromises) {
                var n = g.subscribe(e, function t(r) {
                  var a,
                    i,
                    c = g.last;
                  n.unsubscribe();
                  try {
                    g.resetLastResults(), (n = g.subscribe(e, t));
                  } finally {
                    g.last = c;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var u = j.current.result;
                  ((u && u.loading) || !Object(o.a)(r, u.error)) &&
                    ($(
                      (j.current.result = {
                        data: u.data,
                        error: r,
                        loading: !1,
                        networkStatus: l.a.error,
                      })
                    ),
                    null ===
                      (i =
                        null === (a = j.current.options) || void 0 === a
                          ? void 0
                          : a.onError) ||
                      void 0 === i ||
                      i.call(a, r));
                });
                return function () {
                  return n.unsubscribe();
                };
              }
              function e() {
                var n,
                  e,
                  t = j.current.result,
                  r = g.getCurrentResult();
                (t &&
                  t.loading === r.loading &&
                  t.networkStatus === r.networkStatus &&
                  Object(o.a)(t.data, r.data)) ||
                  (t.data && (j.current.previousData = t.data),
                  $((j.current.result = r)),
                  r.loading ||
                    null ===
                      (e =
                        null === (n = j.current.options) || void 0 === n
                          ? void 0
                          : n.onCompleted) ||
                    void 0 === e ||
                    e.call(n, r.data));
              }
            },
            [g, s.renderPromises, p.disableNetworkFetches]
          ),
          (f = (t = O).partial),
          (O = Object(r.f)(t, ["partial"])),
          !f ||
            !(null === e || void 0 === e ? void 0 : e.partialRefetch) ||
            O.loading ||
            (O.data && 0 !== Object.keys(O.data).length) ||
            "cache-only" === g.options.fetchPolicy ||
            ((O = Object(r.a)(Object(r.a)({}, O), {
              loading: !0,
              networkStatus: l.a.refetch,
            })),
            g.refetch()),
          s.renderPromises &&
            !1 !== (null === e || void 0 === e ? void 0 : e.ssr) &&
            !(null === e || void 0 === e ? void 0 : e.skip) &&
            O.loading &&
            g.setOptions(b(n, e)).catch(function () {}),
          Object.assign(j.current, { options: e }),
          (s.renderPromises || p.disableNetworkFetches) &&
          !1 === (null === e || void 0 === e ? void 0 : e.ssr)
            ? (O = j.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: l.a.loading,
                })
            : ((null === e || void 0 === e ? void 0 : e.skip) ||
                "standby" ===
                  (null === e || void 0 === e ? void 0 : e.fetchPolicy)) &&
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
            variables: b(n, e).variables,
            client: p,
            called: !0,
            previousData: j.current.previousData,
          }),
          O
        );
      }
      function b(n, e) {
        var t;
        void 0 === e && (e = {});
        var a = e.skip,
          o =
            (e.ssr,
            e.onCompleted,
            e.onError,
            e.displayName,
            Object(r.f)(e, [
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
          Object(r.a)({ query: n }, o)
        );
      }
    },
    171: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return o;
      });
      var r = t(45),
        a = t(114),
        o = function (n, e, t, o) {
          a.a
            .ref("/".concat(n, "/").concat(e, "/").concat(t))
            .delete()
            .then(function () {
              o("");
            })
            .catch(function (n) {
              return r.b.error(n);
            });
        };
    },
    172: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return l;
      });
      var r = t(115),
        a = t(113),
        o = t.n(a),
        i = t(45),
        c = t(114),
        l = function (n, e, t, a, l, u, d, s, b) {
          c.a
            .ref("/".concat(n, "/").concat(t, "/").concat(a))
            .put(e)
            .on(
              "state_changed",
              function (n) {},
              function (n) {
                return console.log(n);
              },
              function () {
                d(1),
                  c.a
                    .ref("/".concat(n, "/").concat(t, "/").concat(a))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var n = Object(r.a)(
                          o.a.mark(function n(e) {
                            return o.a.wrap(function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if ((l(e), !s || !b)) {
                                      n.next = 4;
                                      break;
                                    }
                                    return (
                                      (n.next = 4),
                                      s({
                                        variables: {
                                          url: e,
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
                                    return n.stop();
                                }
                            }, n);
                          })
                        );
                        return function (e) {
                          return n.apply(this, arguments);
                        };
                      })()
                    );
              }
            );
        };
    },
    255: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return $;
      });
      var r = t(88),
        a = t(89),
        o = t(95),
        i = t(2),
        c = t(87),
        l = t.n(c),
        u = t(112),
        d = t(143),
        s = t(99),
        b = t(187),
        p = t(6);
      function f(n) {
        return void 0 !== n && null !== n;
      }
      var m = function (n) {
        var e,
          t = n.itemPrefixCls,
          a = n.component,
          o = n.span,
          c = n.className,
          u = n.style,
          d = n.labelStyle,
          s = n.contentStyle,
          b = n.bordered,
          p = n.label,
          m = n.content,
          g = n.colon,
          v = a;
        return b
          ? i.createElement(
              v,
              {
                className: l()(
                  ((e = {}),
                  Object(r.a)(e, "".concat(t, "-item-label"), f(p)),
                  Object(r.a)(e, "".concat(t, "-item-content"), f(m)),
                  e),
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
      function g(n, e, t) {
        var r = e.colon,
          a = e.prefixCls,
          o = e.bordered,
          c = t.component,
          l = t.type,
          u = t.showLabel,
          d = t.showContent,
          s = t.labelStyle,
          b = t.contentStyle;
        return n.map(function (n, e) {
          var t = n.props,
            f = t.label,
            g = t.children,
            v = t.prefixCls,
            y = void 0 === v ? a : v,
            O = t.className,
            $ = t.style,
            j = t.labelStyle,
            h = t.contentStyle,
            k = t.span,
            S = void 0 === k ? 1 : k,
            w = n.key;
          return "string" === typeof c
            ? i.createElement(m, {
                key: "".concat(l, "-").concat(w || e),
                className: O,
                style: $,
                labelStyle: Object(p.a)(Object(p.a)({}, s), j),
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
                  key: "label-".concat(w || e),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, s), $), j),
                  span: 1,
                  colon: r,
                  component: c[0],
                  itemPrefixCls: y,
                  bordered: o,
                  label: f,
                }),
                i.createElement(m, {
                  key: "content-".concat(w || e),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, b), $), h),
                  span: 2 * S - 1,
                  component: c[1],
                  itemPrefixCls: y,
                  bordered: o,
                  content: g,
                }),
              ];
        });
      }
      var v = function (n) {
          var e = i.useContext($),
            t = n.prefixCls,
            r = n.vertical,
            a = n.row,
            o = n.index,
            c = n.bordered;
          return r
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "tr",
                  { key: "label-".concat(o), className: "".concat(t, "-row") },
                  g(
                    a,
                    n,
                    Object(p.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      e
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
                    n,
                    Object(p.a)(
                      { component: "td", type: "content", showContent: !0 },
                      e
                    )
                  )
                )
              )
            : i.createElement(
                "tr",
                { key: o, className: "".concat(t, "-row") },
                g(
                  a,
                  n,
                  Object(p.a)(
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
        y = function (n) {
          return n.children;
        },
        O = t(111),
        $ = i.createContext({}),
        j = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function h(n, e, t) {
        var r = n;
        return (
          (void 0 === e || e > t) &&
            ((r = Object(O.a)(n, { span: t })),
            Object(s.a)(
              void 0 === e,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          r
        );
      }
      function k(n) {
        var e,
          t = n.prefixCls,
          c = n.title,
          s = n.extra,
          p = n.column,
          f = void 0 === p ? j : p,
          m = n.colon,
          g = void 0 === m || m,
          y = n.bordered,
          O = n.layout,
          k = n.children,
          S = n.className,
          w = n.style,
          I = n.size,
          N = n.labelStyle,
          C = n.contentStyle,
          A = i.useContext(b.b),
          E = A.getPrefixCls,
          P = A.direction,
          x = E("descriptions", t),
          B = i.useState({}),
          L = Object(a.a)(B, 2),
          R = L[0],
          q = L[1],
          M = (function (n, e) {
            if ("number" === typeof n) return n;
            if ("object" === Object(o.a)(n))
              for (var t = 0; t < d.b.length; t++) {
                var r = d.b[t];
                if (e[r] && void 0 !== n[r]) return n[r] || j[r];
              }
            return 3;
          })(f, R);
        i.useEffect(function () {
          var n = d.a.subscribe(function (n) {
            "object" === Object(o.a)(f) && q(n);
          });
          return function () {
            d.a.unsubscribe(n);
          };
        }, []);
        var D = (function (n, e) {
            var t = Object(u.a)(n).filter(function (n) {
                return n;
              }),
              r = [],
              a = [],
              o = e;
            return (
              t.forEach(function (n, i) {
                var c,
                  l = null === (c = n.props) || void 0 === c ? void 0 : c.span,
                  u = l || 1;
                if (i === t.length - 1)
                  return a.push(h(n, l, o)), void r.push(a);
                u < o
                  ? ((o -= u), a.push(n))
                  : (a.push(h(n, u, o)), r.push(a), (o = e), (a = []));
              }),
              r
            );
          })(k, M),
          Q = i.useMemo(
            function () {
              return { labelStyle: N, contentStyle: C };
            },
            [N, C]
          );
        return i.createElement(
          $.Provider,
          { value: Q },
          i.createElement(
            "div",
            {
              className: l()(
                x,
                ((e = {}),
                Object(r.a)(
                  e,
                  "".concat(x, "-").concat(I),
                  I && "default" !== I
                ),
                Object(r.a)(e, "".concat(x, "-bordered"), !!y),
                Object(r.a)(e, "".concat(x, "-rtl"), "rtl" === P),
                e),
                S
              ),
              style: w,
            },
            (c || s) &&
              i.createElement(
                "div",
                { className: "".concat(x, "-header") },
                c &&
                  i.createElement(
                    "div",
                    { className: "".concat(x, "-title") },
                    c
                  ),
                s &&
                  i.createElement(
                    "div",
                    { className: "".concat(x, "-extra") },
                    s
                  )
              ),
            i.createElement(
              "div",
              { className: "".concat(x, "-view") },
              i.createElement(
                "table",
                null,
                i.createElement(
                  "tbody",
                  null,
                  D.map(function (n, e) {
                    return i.createElement(v, {
                      key: e,
                      index: e,
                      colon: g,
                      prefixCls: x,
                      vertical: "vertical" === O,
                      bordered: y,
                      row: n,
                    });
                  })
                )
              )
            )
          )
        );
      }
      k.Item = y;
      e.b = k;
    },
    323: function (n, e, t) {
      "use strict";
      t.d(e, "b", function () {
        return l;
      }),
        t.d(e, "a", function () {
          return u;
        });
      var r,
        a,
        o = t(94),
        i = t(101),
        c = t(216),
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
//# sourceMappingURL=8.98230311.chunk.js.map