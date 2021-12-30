(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [19],
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
          return x;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "g", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return B;
        }),
        n.d(t, "c", function () {
          return C;
        }),
        n.d(t, "h", function () {
          return N;
        }),
        n.d(t, "k", function () {
          return E;
        }),
        n.d(t, "d", function () {
          return P;
        }),
        n.d(t, "i", function () {
          return A;
        });
      var r,
        a,
        c,
        i,
        o,
        l,
        d,
        s,
        u,
        b,
        p,
        j,
        m,
        f,
        g,
        y,
        O,
        v = n(94),
        h = n(548),
        $ = Object(h.a)(
          r ||
            (r = Object(v.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(h.a)(
          a ||
            (a = Object(v.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        S = Object(h.a)(
          c ||
            (c = Object(v.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(h.a)(
          i ||
            (i = Object(v.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        w =
          (Object(h.a)(
            o ||
              (o = Object(v.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            l ||
              (l = Object(v.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            d ||
              (d = Object(v.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        I = Object(h.a)(
          s ||
            (s = Object(v.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(h.a)(
          u ||
            (u = Object(v.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C = Object(h.a)(
          b ||
            (b = Object(v.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N =
          (Object(h.a)(
            p ||
              (p = Object(v.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            j ||
              (j = Object(v.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        E =
          (Object(h.a)(
            m ||
              (m = Object(v.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            f ||
              (f = Object(v.a)([
                "\n  mutation editPopup($up: String!, $url: String) {\n    editPopup(up: $up, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        P = Object(h.a)(
          g ||
            (g = Object(v.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        A =
          (Object(h.a)(
            y ||
              (y = Object(v.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            O ||
              (O = Object(v.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    122: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return j;
      }),
        n.d(t, "d", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return f;
        }),
        n.d(t, "g", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return y;
        }),
        n.d(t, "e", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return v;
        });
      var r,
        a,
        c,
        i,
        o,
        l,
        d,
        s,
        u,
        b = n(94),
        p = n(548),
        j = Object(p.a)(
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
        f = Object(p.a)(
          c ||
            (c = Object(b.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        g = Object(p.a)(
          i ||
            (i = Object(b.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        y = Object(p.a)(
          o ||
            (o = Object(b.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        O = Object(p.a)(
          l ||
            (l = Object(b.a)([
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n      }\n    }\n  }\n",
            ]))
        ),
        v = Object(p.a)(
          d ||
            (d = Object(b.a)([
              "\n  query getVideoLink {\n    getVideoLink {\n      ok\n      err\n      link\n    }\n  }\n",
            ]))
        );
      Object(p.a)(
        s ||
          (s = Object(b.a)([
            "\n  query searchBoard($category: String!, $title: String!) {\n    searchBoard(category: $category, title: $title) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
          ]))
      ),
        Object(p.a)(
          u ||
            (u = Object(b.a)([
              "\n  query searchBoardByContent($category: String!, $content: String!) {\n    searchBoardByContent(category: $category, content: $content) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    126: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var r = function (e) {
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
    140: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n(0),
        a = n(2),
        c = n(5),
        i = n(56),
        o = n(22),
        l = n(3),
        d = n(108),
        s = n(107);
      function u(e, t) {
        var n,
          u = Object(a.useContext)(Object(i.a)()),
          p = Object(s.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(d.b)(e, d.a.Query);
        var j,
          m = Object(a.useState)(function () {
            var n = b(e, t),
              r = null;
            return (
              u.renderPromises && (r = u.renderPromises.getSSRObservable(n)),
              r ||
                ((r = p.watchQuery(n)),
                u.renderPromises &&
                  u.renderPromises.registerSSRObservable(r, n)),
              u.renderPromises &&
                !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
                !(null === t || void 0 === t ? void 0 : t.skip) &&
                r.getCurrentResult().loading &&
                u.renderPromises.addQueryPromise(
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
          f = m[0],
          g = m[1],
          y = Object(a.useState)(function () {
            var e,
              n,
              r = f.getCurrentResult();
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
          O = y[0],
          v = y[1],
          h = Object(a.useRef)({
            client: p,
            query: e,
            options: t,
            result: O,
            previousData: void 0,
            watchQueryOptions: b(e, t),
          });
        Object(a.useEffect)(
          function () {
            var n,
              r,
              a,
              i = b(e, t);
            if (h.current.client === p && Object(c.a)(h.current.query, e))
              Object(c.a)(h.current.watchQueryOptions, i) ||
                (f.setOptions(i).catch(function () {}),
                (a = f.getCurrentResult()),
                (h.current.watchQueryOptions = i));
            else {
              var o = p.watchQuery(i);
              g(o), (a = o.getCurrentResult());
            }
            if (a) {
              var l = h.current.result;
              l.data && (h.current.previousData = l.data),
                v((h.current.result = a)),
                !a.loading &&
                  t &&
                  (O.loading ||
                    (O.error
                      ? null === (n = t.onError) ||
                        void 0 === n ||
                        n.call(t, O.error)
                      : O.data &&
                        (null === (r = t.onCompleted) ||
                          void 0 === r ||
                          r.call(t, O.data))));
            }
            Object.assign(h.current, { client: p, query: e });
          },
          [f, p, e, t]
        ),
          Object(a.useEffect)(
            function () {
              if (!u.renderPromises) {
                var e = f.subscribe(t, function n(r) {
                  var a,
                    i,
                    o = f.last;
                  e.unsubscribe();
                  try {
                    f.resetLastResults(), (e = f.subscribe(t, n));
                  } finally {
                    f.last = o;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var d = h.current.result;
                  ((d && d.loading) || !Object(c.a)(r, d.error)) &&
                    (v(
                      (h.current.result = {
                        data: d.data,
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
                  r = f.getCurrentResult();
                (n &&
                  n.loading === r.loading &&
                  n.networkStatus === r.networkStatus &&
                  Object(c.a)(n.data, r.data)) ||
                  (n.data && (h.current.previousData = n.data),
                  v((h.current.result = r)),
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
            [f, u.renderPromises, p.disableNetworkFetches]
          ),
          (j = (n = O).partial),
          (O = Object(r.f)(n, ["partial"])),
          !j ||
            !(null === t || void 0 === t ? void 0 : t.partialRefetch) ||
            O.loading ||
            (O.data && 0 !== Object.keys(O.data).length) ||
            "cache-only" === f.options.fetchPolicy ||
            ((O = Object(r.a)(Object(r.a)({}, O), {
              loading: !0,
              networkStatus: l.a.refetch,
            })),
            f.refetch()),
          u.renderPromises &&
            !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
            !(null === t || void 0 === t ? void 0 : t.skip) &&
            O.loading &&
            f.setOptions(b(e, t)).catch(function () {}),
          Object.assign(h.current, { options: t }),
          (u.renderPromises || p.disableNetworkFetches) &&
          !1 === (null === t || void 0 === t ? void 0 : t.ssr)
            ? (O = h.current.result =
                {
                  loading: !0,
                  data: void 0,
                  error: void 0,
                  networkStatus: l.a.loading,
                })
            : ((null === t || void 0 === t ? void 0 : t.skip) ||
                "standby" ===
                  (null === t || void 0 === t ? void 0 : t.fetchPolicy)) &&
              (O = {
                loading: !1,
                data: void 0,
                error: void 0,
                networkStatus: l.a.ready,
              }),
          O.errors &&
            O.errors.length &&
            (O = Object(r.a)(Object(r.a)({}, O), {
              error: O.error || new o.a({ graphQLErrors: O.errors }),
            }));
        var $ = Object(a.useMemo)(
          function () {
            return {
              refetch: f.refetch.bind(f),
              fetchMore: f.fetchMore.bind(f),
              updateQuery: f.updateQuery.bind(f),
              startPolling: f.startPolling.bind(f),
              stopPolling: f.stopPolling.bind(f),
              subscribeToMore: f.subscribeToMore.bind(f),
            };
          },
          [f]
        );
        return Object(r.a)(
          Object(r.a)(Object(r.a)({}, $), {
            variables: b(e, t).variables,
            client: p,
            called: !0,
            previousData: h.current.previousData,
          }),
          O
        );
      }
      function b(e, t) {
        var n;
        void 0 === t && (t = {});
        var a = t.skip,
          c =
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
            ? (c.fetchPolicy = "standby")
            : ((!(null === (n = c.context) || void 0 === n
                ? void 0
                : n.renderPromises) ||
                ("network-only" !== c.fetchPolicy &&
                  "cache-and-network" !== c.fetchPolicy)) &&
                c.fetchPolicy) ||
              (c.fetchPolicy = "cache-first"),
          c.variables || (c.variables = {}),
          Object(r.a)({ query: e }, c)
        );
      }
    },
    148: function (e, t, n) {
      "use strict";
      var r = n(90),
        a = n(2),
        c = {
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
        o = function (e, t) {
          return a.createElement(
            i.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: c })
          );
        };
      o.displayName = "CloseOutlined";
      t.a = a.forwardRef(o);
    },
    161: function (e, t, n) {
      "use strict";
      var r = n(90),
        a = n(2),
        c = {
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
        o = function (e, t) {
          return a.createElement(
            i.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: c })
          );
        };
      o.displayName = "CheckOutlined";
      t.a = a.forwardRef(o);
    },
    245: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var r = n(88),
        a = n(89),
        c = n(95),
        i = n(2),
        o = n(87),
        l = n.n(o),
        d = n(113),
        s = n(145),
        u = n(99),
        b = n(170),
        p = n(6);
      function j(e) {
        return void 0 !== e && null !== e;
      }
      var m = function (e) {
        var t,
          n = e.itemPrefixCls,
          a = e.component,
          c = e.span,
          o = e.className,
          d = e.style,
          s = e.labelStyle,
          u = e.contentStyle,
          b = e.bordered,
          p = e.label,
          m = e.content,
          f = e.colon,
          g = a;
        return b
          ? i.createElement(
              g,
              {
                className: l()(
                  ((t = {}),
                  Object(r.a)(t, "".concat(n, "-item-label"), j(p)),
                  Object(r.a)(t, "".concat(n, "-item-content"), j(m)),
                  t),
                  o
                ),
                style: d,
                colSpan: c,
              },
              j(p) && i.createElement("span", { style: s }, p),
              j(m) && i.createElement("span", { style: u }, m)
            )
          : i.createElement(
              g,
              {
                className: l()("".concat(n, "-item"), o),
                style: d,
                colSpan: c,
              },
              i.createElement(
                "div",
                { className: "".concat(n, "-item-container") },
                p &&
                  i.createElement(
                    "span",
                    {
                      className: l()(
                        "".concat(n, "-item-label"),
                        Object(r.a)({}, "".concat(n, "-item-no-colon"), !f)
                      ),
                      style: s,
                    },
                    p
                  ),
                m &&
                  i.createElement(
                    "span",
                    { className: l()("".concat(n, "-item-content")), style: u },
                    m
                  )
              )
            );
      };
      function f(e, t, n) {
        var r = t.colon,
          a = t.prefixCls,
          c = t.bordered,
          o = n.component,
          l = n.type,
          d = n.showLabel,
          s = n.showContent,
          u = n.labelStyle,
          b = n.contentStyle;
        return e.map(function (e, t) {
          var n = e.props,
            j = n.label,
            f = n.children,
            g = n.prefixCls,
            y = void 0 === g ? a : g,
            O = n.className,
            v = n.style,
            h = n.labelStyle,
            $ = n.contentStyle,
            k = n.span,
            S = void 0 === k ? 1 : k,
            x = e.key;
          return "string" === typeof o
            ? i.createElement(m, {
                key: "".concat(l, "-").concat(x || t),
                className: O,
                style: v,
                labelStyle: Object(p.a)(Object(p.a)({}, u), h),
                contentStyle: Object(p.a)(Object(p.a)({}, b), $),
                span: S,
                colon: r,
                component: o,
                itemPrefixCls: y,
                bordered: c,
                label: d ? j : null,
                content: s ? f : null,
              })
            : [
                i.createElement(m, {
                  key: "label-".concat(x || t),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, u), v), h),
                  span: 1,
                  colon: r,
                  component: o[0],
                  itemPrefixCls: y,
                  bordered: c,
                  label: j,
                }),
                i.createElement(m, {
                  key: "content-".concat(x || t),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, b), v), $),
                  span: 2 * S - 1,
                  component: o[1],
                  itemPrefixCls: y,
                  bordered: c,
                  content: f,
                }),
              ];
        });
      }
      var g = function (e) {
          var t = i.useContext(v),
            n = e.prefixCls,
            r = e.vertical,
            a = e.row,
            c = e.index,
            o = e.bordered;
          return r
            ? i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "tr",
                  { key: "label-".concat(c), className: "".concat(n, "-row") },
                  f(
                    a,
                    e,
                    Object(p.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      t
                    )
                  )
                ),
                i.createElement(
                  "tr",
                  {
                    key: "content-".concat(c),
                    className: "".concat(n, "-row"),
                  },
                  f(
                    a,
                    e,
                    Object(p.a)(
                      { component: "td", type: "content", showContent: !0 },
                      t
                    )
                  )
                )
              )
            : i.createElement(
                "tr",
                { key: c, className: "".concat(n, "-row") },
                f(
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
        y = function (e) {
          return e.children;
        },
        O = n(111),
        v = i.createContext({}),
        h = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function $(e, t, n) {
        var r = e;
        return (
          (void 0 === t || t > n) &&
            ((r = Object(O.a)(e, { span: n })),
            Object(u.a)(
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
          u = e.extra,
          p = e.column,
          j = void 0 === p ? h : p,
          m = e.colon,
          f = void 0 === m || m,
          y = e.bordered,
          O = e.layout,
          k = e.children,
          S = e.className,
          x = e.style,
          w = e.size,
          I = e.labelStyle,
          B = e.contentStyle,
          C = i.useContext(b.b),
          N = C.getPrefixCls,
          E = C.direction,
          P = N("descriptions", n),
          A = i.useState({}),
          L = Object(a.a)(A, 2),
          R = L[0],
          M = L[1],
          q = (function (e, t) {
            if ("number" === typeof e) return e;
            if ("object" === Object(c.a)(e))
              for (var n = 0; n < s.b.length; n++) {
                var r = s.b[n];
                if (t[r] && void 0 !== e[r]) return e[r] || h[r];
              }
            return 3;
          })(j, R);
        i.useEffect(function () {
          var e = s.a.subscribe(function (e) {
            "object" === Object(c.a)(j) && M(e);
          });
          return function () {
            s.a.unsubscribe(e);
          };
        }, []);
        var F = (function (e, t) {
            var n = Object(d.a)(e).filter(function (e) {
                return e;
              }),
              r = [],
              a = [],
              c = t;
            return (
              n.forEach(function (e, i) {
                var o,
                  l = null === (o = e.props) || void 0 === o ? void 0 : o.span,
                  d = l || 1;
                if (i === n.length - 1)
                  return a.push($(e, l, c)), void r.push(a);
                d < c
                  ? ((c -= d), a.push(e))
                  : (a.push($(e, d, c)), r.push(a), (c = t), (a = []));
              }),
              r
            );
          })(k, q),
          D = i.useMemo(
            function () {
              return { labelStyle: I, contentStyle: B };
            },
            [I, B]
          );
        return i.createElement(
          v.Provider,
          { value: D },
          i.createElement(
            "div",
            {
              className: l()(
                P,
                ((t = {}),
                Object(r.a)(
                  t,
                  "".concat(P, "-").concat(w),
                  w && "default" !== w
                ),
                Object(r.a)(t, "".concat(P, "-bordered"), !!y),
                Object(r.a)(t, "".concat(P, "-rtl"), "rtl" === E),
                t),
                S
              ),
              style: x,
            },
            (o || u) &&
              i.createElement(
                "div",
                { className: "".concat(P, "-header") },
                o &&
                  i.createElement(
                    "div",
                    { className: "".concat(P, "-title") },
                    o
                  ),
                u &&
                  i.createElement(
                    "div",
                    { className: "".concat(P, "-extra") },
                    u
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
                  F.map(function (e, t) {
                    return i.createElement(g, {
                      key: t,
                      index: t,
                      colon: f,
                      prefixCls: P,
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
      t.b = k;
    },
    555: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a,
        c,
        i,
        o = n(94),
        l = n(114),
        d = n(89),
        s = n(112),
        u = n.n(s),
        b = n(2),
        p = n(167),
        j = n.n(p),
        m = n(4),
        f = n(140),
        g = n(165),
        y = n(122),
        O = n(245),
        v = n(547),
        h = n(103),
        $ = n(200),
        k =
          (h.a.div(
            r ||
              (r = Object(o.a)([
                "\n  background-image: url(",
                ");\n  width: 100%;\n  height: 300px;\n  background-size: contain;\n",
              ])),
            function (e) {
              return e.url;
            }
          ),
          h.a.div(
            a ||
              (a = Object(o.a)([
                "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n",
              ]))
          )),
        S = Object(h.a)($.a)(
          c ||
            (c = Object(o.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        ),
        x = n(104),
        w = n(45),
        I = n(46),
        B = n(126),
        C = n(196),
        N = n.n(C),
        E = (n(198), n(11)),
        P = {
          toolbar: [
            [{ header: [1, 2, !1] }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
        A = ["header", "bold", "italic", "underline", "list"],
        L =
          ((t.default = function () {
            var e = Object(m.h)().search,
              t = Object(m.i)().param,
              n = Object(m.g)(),
              r = j.a.parse(e),
              a = r.id,
              c = r.category,
              i = Object(b.useState)(),
              o = Object(d.a)(i, 2),
              s = o[0],
              p = o[1],
              h = Object(b.useState)(),
              $ = Object(d.a)(h, 2),
              C = $[0],
              N = $[1],
              R = Object(b.useState)(),
              M = Object(d.a)(R, 2),
              q = M[0],
              F = M[1],
              D = Object(b.useState)(!1),
              Q = Object(d.a)(D, 2),
              T = Q[0],
              z = Q[1],
              H = Object(b.useState)(""),
              _ = Object(d.a)(H, 2),
              J = _[0],
              U = _[1],
              V = Object(f.a)(y.b, { variables: { id: parseInt(a, 10) } }),
              W = V.data,
              Y = V.loading,
              G = V.refetch,
              K = Object(g.a)(x.e, {
                onCompleted: function (e) {
                  var r = e.deleteBoard,
                    a = r.ok,
                    i = r.err;
                  a
                    ? (w.b.success(
                        "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."
                      ),
                      n.push({
                        pathname: "/admin/".concat(t, "/").concat(c),
                        state: { refresh: !0 },
                      }))
                    : (console.log(i),
                      w.b.error(
                        "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                      ));
                },
              }),
              X = Object(d.a)(K, 1)[0],
              Z = Object(g.a)(x.d, {
                onCompleted: function (e) {
                  var t = e.createReply,
                    n = t.ok,
                    r = t.err;
                  n ? (U(""), z(!1), G()) : console.log(r);
                },
              }),
              ee = Object(d.a)(Z, 2),
              te = ee[0],
              ne = ee[1].loading,
              re = Object(g.a)(x.i, {
                onCompleted: function (e) {
                  var t = e.deleteReply,
                    n = t.ok,
                    r = t.err;
                  n
                    ? (G(),
                      w.b.info(
                        "\ub2f5\uae00\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."
                      ))
                    : console.log(r);
                },
              }),
              ae = Object(d.a)(re, 1)[0],
              ce = Object(b.useCallback)(
                function () {
                  X({ variables: { id: parseInt(a, 10) } });
                },
                [a, X]
              );
            Object(b.useEffect)(
              function () {
                W &&
                  W.getBoardById &&
                  W.getBoardById.data &&
                  p(W.getBoardById.data),
                  W &&
                    W.getBoardById &&
                    W.getBoardById.data &&
                    W.getBoardById.data.files &&
                    N(W.getBoardById.data.files),
                  W &&
                    W.getBoardById &&
                    W.getBoardById.data &&
                    W.getBoardById.data.images &&
                    F(W.getBoardById.data.images);
              },
              [W]
            );
            var ie = Object(b.useCallback)(
                (function () {
                  var e = Object(l.a)(
                    u.a.mark(function e(t) {
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (e.next = 3),
                                te({ variables: { boardId: t, content: J } })
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                [te, J]
              ),
              oe = Object(b.useCallback)(
                (function () {
                  var e = Object(l.a)(
                    u.a.mark(function e(t) {
                      return u.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!t) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (e.next = 3), ae({ variables: { replyId: t } })
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
                [ae]
              );
            return Y
              ? Object(E.jsx)(E.Fragment, { children: "loading" })
              : Object(E.jsxs)(k, {
                  children: [
                    Object(E.jsx)(S, {
                      type: "ghost",
                      onClick: function () {
                        return n.goBack();
                      },
                      children: "\ub4a4\ub85c",
                    }),
                    Object(E.jsxs)(O.b, {
                      bordered: !0,
                      layout: "horizontal",
                      style: { display: "flex", flexDirection: "column" },
                      children: [
                        Object(E.jsx)(
                          O.b.Item,
                          {
                            label: "\uc81c\ubaa9",
                            span: 3,
                            labelStyle: { width: 100 },
                            children: Object(E.jsx)(v.a.Title, {
                              level: 3,
                              children:
                                null === s || void 0 === s ? void 0 : s.title,
                            }),
                          },
                          "title"
                        ),
                        Object(E.jsx)(
                          O.b.Item,
                          {
                            label: "\uc0c1\ud0dc",
                            span: 3,
                            labelStyle: { width: 100 },
                            children: Object(E.jsx)(v.a.Text, {
                              type:
                                null !== s && void 0 !== s && s.private
                                  ? "danger"
                                  : "success",
                              children:
                                null !== s && void 0 !== s && s.private
                                  ? "\ube44\uacf5\uac1c"
                                  : "\uacf5\uac1c",
                            }),
                          },
                          "status"
                        ),
                        Object(E.jsx)(
                          O.b.Item,
                          {
                            label: "\uc791\uc131\uc77c",
                            span: 3,
                            labelStyle: { width: 100 },
                            children: Object(B.a)(
                              (null === s || void 0 === s
                                ? void 0
                                : s.createdAt) || ""
                            ),
                          },
                          "date"
                        ),
                        Object(E.jsx)(
                          O.b.Item,
                          {
                            label: "\ud30c\uc77c",
                            span: 3,
                            labelStyle: { width: 100 },
                            children:
                              C && 0 !== C.length
                                ? Object(E.jsx)(E.Fragment, {
                                    children: C.map(function (e, t) {
                                      return Object(E.jsxs)(
                                        "span",
                                        {
                                          style: { display: "inline-block" },
                                          children: [
                                            Object(E.jsx)("a", {
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
                                            Object(E.jsx)("span", {
                                              style: {
                                                display: "inline-block",
                                                marginLeft: 15,
                                                color: "".concat(
                                                  null !== s &&
                                                    void 0 !== s &&
                                                    s.showAttach
                                                    ? "#0081fa"
                                                    : "red"
                                                ),
                                              },
                                              children:
                                                null !== s &&
                                                void 0 !== s &&
                                                s.showAttach
                                                  ? "\uacf5\uac1c"
                                                  : "\ube44\uacf5\uac1c",
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                  })
                                : Object(E.jsx)(E.Fragment, {
                                    children:
                                      "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                                  }),
                          },
                          "file"
                        ),
                        ("achievement" === t || "community" === t) &&
                          Object(E.jsx)(
                            O.b.Item,
                            {
                              label: "\uc774\ubbf8\uc9c0",
                              span: 4,
                              labelStyle: { width: 100 },
                              children:
                                q && 0 !== q.length
                                  ? Object(E.jsx)("img", {
                                      src: q[q.length - 1].url,
                                      alt: "newsimage",
                                      width: 300,
                                    })
                                  : Object(E.jsx)(E.Fragment, {
                                      children:
                                        "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                    }),
                            },
                            "image"
                          ),
                        Object(E.jsx)(
                          O.b.Item,
                          {
                            label: "\ub0b4\uc6a9",
                            span: 4,
                            children: Object(E.jsx)("span", {
                              style: { whiteSpace: "pre-wrap" },
                              dangerouslySetInnerHTML: {
                                __html:
                                  (null === s || void 0 === s
                                    ? void 0
                                    : s.content) || "",
                              },
                            }),
                          },
                          "content"
                        ),
                        ("request" ===
                          (null === c || void 0 === c
                            ? void 0
                            : c.toString().split("-")[1]) ||
                          "help" ===
                            (null === c || void 0 === c
                              ? void 0
                              : c.toString().split("-")[1])) &&
                          Object(E.jsxs)(
                            O.b.Item,
                            {
                              label: "\ub2f5\uae00",
                              span: 4,
                              children: [
                                null !== s &&
                                void 0 !== s &&
                                s.replies &&
                                s.replies.length > 0
                                  ? s.replies.map(function (e, t) {
                                      return Object(E.jsxs)(
                                        "div",
                                        {
                                          style: { display: "flex" },
                                          children: [
                                            Object(E.jsx)("span", {
                                              style: {
                                                display: "block",
                                                minWidth: 200,
                                                minHeight: 100,
                                              },
                                              dangerouslySetInnerHTML: {
                                                __html:
                                                  (null === e || void 0 === e
                                                    ? void 0
                                                    : e.content) || "",
                                              },
                                            }),
                                            Object(E.jsx)(S, {
                                              type: "primary",
                                              danger: !0,
                                              style: { marginLeft: 15 },
                                              onClick: function () {
                                                return oe(
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.id
                                                );
                                              },
                                              children:
                                                "\ub2f5\uae00 \uc0ad\uc81c",
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    })
                                  : Object(E.jsx)("div", {
                                      style: { display: "block" },
                                      children: T
                                        ? Object(E.jsx)(L, {
                                            modules: P,
                                            formats: A,
                                            value: J || "",
                                            onChange: function (e) {
                                              U(e);
                                            },
                                            theme: "snow",
                                          })
                                        : Object(E.jsx)("span", {
                                            style: {
                                              display: "block",
                                              marginBottom: 15,
                                            },
                                            children:
                                              "\ub2f5\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                                          }),
                                    }),
                                (null === s || void 0 === s
                                  ? void 0
                                  : s.replies) &&
                                  0 === s.replies.length &&
                                  (T
                                    ? Object(E.jsx)(S, {
                                        type: "primary",
                                        onClick: function () {
                                          ie(
                                            null === s || void 0 === s
                                              ? void 0
                                              : s.id
                                          );
                                        },
                                        children: "\uac8c\uc2dc",
                                      })
                                    : Object(E.jsx)(S, {
                                        type: "default",
                                        disabled: ne,
                                        onClick: function () {
                                          return z(!T);
                                        },
                                        children: ne
                                          ? "\uc5c5\ub85c\ub4dc \uc911"
                                          : "\ub313\uae00\ub2ec\uae30",
                                      })),
                              ],
                            },
                            "content"
                          ),
                      ],
                    }),
                    Object(E.jsxs)("div", {
                      className: "button-group",
                      children: [
                        Object(E.jsx)(I.b, {
                          to: "/admin/"
                            .concat(t, "/edit-")
                            .concat(t, "?category=")
                            .concat(c, "&id=")
                            .concat(a),
                          children: Object(E.jsx)(S, {
                            type: "primary",
                            children: "\uc218\uc815",
                          }),
                        }),
                        Object(E.jsx)(S, {
                          type: "primary",
                          danger: !0,
                          onClick: ce,
                          children: "\uc0ad\uc81c",
                        }),
                      ],
                    }),
                  ],
                });
          }),
          Object(h.a)(N.a)(
            i ||
              (i = Object(o.a)([
                "\n  background-color: white;\n  min-height: 150px;\n  .ql-container {\n    min-height: 150px;\n  }\n",
              ]))
          ));
    },
  },
]);
//# sourceMappingURL=19.2e494639.chunk.js.map
