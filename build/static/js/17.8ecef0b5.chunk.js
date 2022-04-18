(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [17],
  {
    104: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return $;
      }),
        n.d(t, "k", function () {
          return k;
        }),
        n.d(t, "e", function () {
          return S;
        }),
        n.d(t, "i", function () {
          return x;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "g", function () {
          return I;
        }),
        n.d(t, "b", function () {
          return C;
        }),
        n.d(t, "c", function () {
          return B;
        }),
        n.d(t, "j", function () {
          return N;
        }),
        n.d(t, "d", function () {
          return A;
        }),
        n.d(t, "h", function () {
          return E;
        });
      var r,
        a,
        i,
        c,
        o,
        l,
        d,
        s,
        u,
        b,
        p,
        j,
        f,
        m,
        g,
        y,
        O,
        v = n(94),
        h = n(528),
        $ = Object(h.a)(
          r ||
            (r = Object(v.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(h.a)(
          a ||
            (a = Object(v.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        S = Object(h.a)(
          i ||
            (i = Object(v.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x = Object(h.a)(
          c ||
            (c = Object(v.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
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
        C = Object(h.a)(
          u ||
            (u = Object(v.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(h.a)(
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
          ),
          Object(h.a)(
            f ||
              (f = Object(v.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(h.a)(
            m ||
              (m = Object(v.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        A = Object(h.a)(
          g ||
            (g = Object(v.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        E =
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
    121: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return j;
      }),
        n.d(t, "d", function () {
          return f;
        }),
        n.d(t, "a", function () {
          return m;
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
        i,
        c,
        o,
        l,
        d,
        s,
        u,
        b = n(94),
        p = n(528),
        j = Object(p.a)(
          r ||
            (r = Object(b.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        showAttach\n        inputCreatedAt\n        replies {\n          id\n          content\n        }\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(p.a)(
          a ||
            (a = Object(b.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(p.a)(
          i ||
            (i = Object(b.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        g = Object(p.a)(
          c ||
            (c = Object(b.a)([
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
              "\n  query getPopupStatus {\n    getPopupStatus {\n      ok\n      err\n      data {\n        url\n        up\n        link\n      }\n    }\n  }\n",
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
    138: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var r = n(0),
        a = n(2),
        i = n(5),
        c = n(56),
        o = n(22),
        l = n(3),
        d = n(110),
        s = n(109);
      function u(e, t) {
        var n,
          u = Object(a.useContext)(Object(c.a)()),
          p = Object(s.a)(null === t || void 0 === t ? void 0 : t.client);
        Object(d.b)(e, d.a.Query);
        var j,
          f = Object(a.useState)(function () {
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
          m = f[0],
          g = f[1],
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
              c = b(e, t);
            if (h.current.client === p && Object(i.a)(h.current.query, e))
              Object(i.a)(h.current.watchQueryOptions, c) ||
                (m.setOptions(c).catch(function () {}),
                (a = m.getCurrentResult()),
                (h.current.watchQueryOptions = c));
            else {
              var o = p.watchQuery(c);
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
          [m, p, e, t]
        ),
          Object(a.useEffect)(
            function () {
              if (!u.renderPromises) {
                var e = m.subscribe(t, function n(r) {
                  var a,
                    c,
                    o = m.last;
                  e.unsubscribe();
                  try {
                    m.resetLastResults(), (e = m.subscribe(t, n));
                  } finally {
                    m.last = o;
                  }
                  if (!r.hasOwnProperty("graphQLErrors")) throw r;
                  var d = h.current.result;
                  ((d && d.loading) || !Object(i.a)(r, d.error)) &&
                    (v(
                      (h.current.result = {
                        data: d.data,
                        error: r,
                        loading: !1,
                        networkStatus: l.a.error,
                      })
                    ),
                    null ===
                      (c =
                        null === (a = h.current.options) || void 0 === a
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
                  n = h.current.result,
                  r = m.getCurrentResult();
                (n &&
                  n.loading === r.loading &&
                  n.networkStatus === r.networkStatus &&
                  Object(i.a)(n.data, r.data)) ||
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
            [m, u.renderPromises, p.disableNetworkFetches]
          ),
          (j = (n = O).partial),
          (O = Object(r.f)(n, ["partial"])),
          !j ||
            !(null === t || void 0 === t ? void 0 : t.partialRefetch) ||
            O.loading ||
            (O.data && 0 !== Object.keys(O.data).length) ||
            "cache-only" === m.options.fetchPolicy ||
            ((O = Object(r.a)(Object(r.a)({}, O), {
              loading: !0,
              networkStatus: l.a.refetch,
            })),
            m.refetch()),
          u.renderPromises &&
            !1 !== (null === t || void 0 === t ? void 0 : t.ssr) &&
            !(null === t || void 0 === t ? void 0 : t.skip) &&
            O.loading &&
            m.setOptions(b(e, t)).catch(function () {}),
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
          i =
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
            ? (i.fetchPolicy = "standby")
            : ((!(null === (n = i.context) || void 0 === n
                ? void 0
                : n.renderPromises) ||
                ("network-only" !== i.fetchPolicy &&
                  "cache-and-network" !== i.fetchPolicy)) &&
                i.fetchPolicy) ||
              (i.fetchPolicy = "cache-first"),
          i.variables || (i.variables = {}),
          Object(r.a)({ query: e }, i)
        );
      }
    },
    144: function (e, t, n) {
      "use strict";
      var r,
        a = n(94),
        i = n(2),
        c = n(101),
        o = n(211),
        l = n.n(o),
        d = (n(214), n(11));
      t.a = function (e) {
        e.content;
        var t = e.onChange,
          n = Object(i.useRef)(),
          r = Object(i.useCallback)(function (e) {
            n.current = e;
          }, []),
          a = Object(i.useCallback)(function (e) {
            if (e && e.imageInfo) {
              var t = e.imageInfo.split("base64,");
              console.log(t);
            }
          }, []);
        return Object(d.jsx)(s, {
          getSunEditorInstance: r,
          onChange: t,
          onImageUpload: a,
          setOptions: {
            minHeight: "400px",
            buttonList: [
              ["fontSize", "bold", "underline", "italic", "fontColor", "list"],
            ],
          },
        });
      };
      var s = Object(c.a)(l.a)(
        r ||
          (r = Object(a.a)([
            "\n  background-color: white;\n  min-height: 300px;\n  & .ql-container {\n    min-height: 300px;\n  }\n  & .ql-editor {\n    min-height: 300px;\n  }\n",
          ]))
      );
    },
    147: function (e, t, n) {
      "use strict";
      var r = n(90),
        a = n(2),
        i = {
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
        c = n(93),
        o = function (e, t) {
          return a.createElement(
            c.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: i })
          );
        };
      o.displayName = "CloseOutlined";
      t.a = a.forwardRef(o);
    },
    175: function (e, t, n) {
      "use strict";
      var r = n(90),
        a = n(2),
        i = {
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
        c = n(93),
        o = function (e, t) {
          return a.createElement(
            c.a,
            Object(r.a)(Object(r.a)({}, e), {}, { ref: t, icon: i })
          );
        };
      o.displayName = "CheckOutlined";
      t.a = a.forwardRef(o);
    },
    212: function (e, t, n) {
      var r = {
        "./ckb.js": 153,
        "./da.js": 154,
        "./de.js": 155,
        "./en.js": 145,
        "./es.js": 156,
        "./fr.js": 157,
        "./he.js": 158,
        "./index.js": 213,
        "./it.js": 159,
        "./ja.js": 160,
        "./ko.js": 161,
        "./lv.js": 162,
        "./nl.js": 163,
        "./pl.js": 164,
        "./pt_br.js": 165,
        "./ro.js": 166,
        "./ru.js": 167,
        "./se.js": 168,
        "./ua.js": 169,
        "./zh_cn.js": 170,
      };
      function a(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 212);
    },
    255: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var r = n(88),
        a = n(89),
        i = n(95),
        c = n(2),
        o = n(87),
        l = n.n(o),
        d = n(112),
        s = n(143),
        u = n(99),
        b = n(187),
        p = n(6);
      function j(e) {
        return void 0 !== e && null !== e;
      }
      var f = function (e) {
        var t,
          n = e.itemPrefixCls,
          a = e.component,
          i = e.span,
          o = e.className,
          d = e.style,
          s = e.labelStyle,
          u = e.contentStyle,
          b = e.bordered,
          p = e.label,
          f = e.content,
          m = e.colon,
          g = a;
        return b
          ? c.createElement(
              g,
              {
                className: l()(
                  ((t = {}),
                  Object(r.a)(t, "".concat(n, "-item-label"), j(p)),
                  Object(r.a)(t, "".concat(n, "-item-content"), j(f)),
                  t),
                  o
                ),
                style: d,
                colSpan: i,
              },
              j(p) && c.createElement("span", { style: s }, p),
              j(f) && c.createElement("span", { style: u }, f)
            )
          : c.createElement(
              g,
              {
                className: l()("".concat(n, "-item"), o),
                style: d,
                colSpan: i,
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
                      style: s,
                    },
                    p
                  ),
                f &&
                  c.createElement(
                    "span",
                    { className: l()("".concat(n, "-item-content")), style: u },
                    f
                  )
              )
            );
      };
      function m(e, t, n) {
        var r = t.colon,
          a = t.prefixCls,
          i = t.bordered,
          o = n.component,
          l = n.type,
          d = n.showLabel,
          s = n.showContent,
          u = n.labelStyle,
          b = n.contentStyle;
        return e.map(function (e, t) {
          var n = e.props,
            j = n.label,
            m = n.children,
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
            ? c.createElement(f, {
                key: "".concat(l, "-").concat(x || t),
                className: O,
                style: v,
                labelStyle: Object(p.a)(Object(p.a)({}, u), h),
                contentStyle: Object(p.a)(Object(p.a)({}, b), $),
                span: S,
                colon: r,
                component: o,
                itemPrefixCls: y,
                bordered: i,
                label: d ? j : null,
                content: s ? m : null,
              })
            : [
                c.createElement(f, {
                  key: "label-".concat(x || t),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, u), v), h),
                  span: 1,
                  colon: r,
                  component: o[0],
                  itemPrefixCls: y,
                  bordered: i,
                  label: j,
                }),
                c.createElement(f, {
                  key: "content-".concat(x || t),
                  className: O,
                  style: Object(p.a)(Object(p.a)(Object(p.a)({}, b), v), $),
                  span: 2 * S - 1,
                  component: o[1],
                  itemPrefixCls: y,
                  bordered: i,
                  content: m,
                }),
              ];
        });
      }
      var g = function (e) {
          var t = c.useContext(v),
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
                    key: "content-".concat(i),
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
                { key: i, className: "".concat(n, "-row") },
                m(
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
        v = c.createContext({}),
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
          f = e.colon,
          m = void 0 === f || f,
          y = e.bordered,
          O = e.layout,
          k = e.children,
          S = e.className,
          x = e.style,
          w = e.size,
          I = e.labelStyle,
          C = e.contentStyle,
          B = c.useContext(b.b),
          N = B.getPrefixCls,
          A = B.direction,
          E = N("descriptions", n),
          P = c.useState({}),
          L = Object(a.a)(P, 2),
          R = L[0],
          q = L[1],
          M = (function (e, t) {
            if ("number" === typeof e) return e;
            if ("object" === Object(i.a)(e))
              for (var n = 0; n < s.b.length; n++) {
                var r = s.b[n];
                if (t[r] && void 0 !== e[r]) return e[r] || h[r];
              }
            return 3;
          })(j, R);
        c.useEffect(function () {
          var e = s.a.subscribe(function (e) {
            "object" === Object(i.a)(j) && q(e);
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
              i = t;
            return (
              n.forEach(function (e, c) {
                var o,
                  l = null === (o = e.props) || void 0 === o ? void 0 : o.span,
                  d = l || 1;
                if (c === n.length - 1)
                  return a.push($(e, l, i)), void r.push(a);
                d < i
                  ? ((i -= d), a.push(e))
                  : (a.push($(e, d, i)), r.push(a), (i = t), (a = []));
              }),
              r
            );
          })(k, M),
          D = c.useMemo(
            function () {
              return { labelStyle: I, contentStyle: C };
            },
            [I, C]
          );
        return c.createElement(
          v.Provider,
          { value: D },
          c.createElement(
            "div",
            {
              className: l()(
                E,
                ((t = {}),
                Object(r.a)(
                  t,
                  "".concat(E, "-").concat(w),
                  w && "default" !== w
                ),
                Object(r.a)(t, "".concat(E, "-bordered"), !!y),
                Object(r.a)(t, "".concat(E, "-rtl"), "rtl" === A),
                t),
                S
              ),
              style: x,
            },
            (o || u) &&
              c.createElement(
                "div",
                { className: "".concat(E, "-header") },
                o &&
                  c.createElement(
                    "div",
                    { className: "".concat(E, "-title") },
                    o
                  ),
                u &&
                  c.createElement(
                    "div",
                    { className: "".concat(E, "-extra") },
                    u
                  )
              ),
            c.createElement(
              "div",
              { className: "".concat(E, "-view") },
              c.createElement(
                "table",
                null,
                c.createElement(
                  "tbody",
                  null,
                  F.map(function (e, t) {
                    return c.createElement(g, {
                      key: t,
                      index: t,
                      colon: m,
                      prefixCls: E,
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
    535: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a,
        i,
        c = n(115),
        o = n(89),
        l = n(113),
        d = n.n(l),
        s = n(2),
        u = n(184),
        b = n.n(u),
        p = n(4),
        j = n(138),
        f = n(198),
        m = n(121),
        g = n(255),
        y = n(527),
        O = n(94),
        v = n(101),
        h = n(216),
        $ =
          (v.a.div(
            r ||
              (r = Object(O.a)([
                "\n  background-image: url(",
                ");\n  width: 100%;\n  height: 300px;\n  background-size: contain;\n",
              ])),
            function (e) {
              return e.url;
            }
          ),
          v.a.div(
            a ||
              (a = Object(O.a)([
                "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n",
              ]))
          )),
        k = Object(v.a)(h.a)(
          i ||
            (i = Object(O.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        ),
        S = n(104),
        x = n(45),
        w = n(46),
        I = n(144),
        C = n(11);
      t.default = function () {
        var e = Object(p.h)().search,
          t = Object(p.i)().param,
          n = Object(p.g)(),
          r = b.a.parse(e),
          a = r.id,
          i = r.category,
          l = Object(s.useState)(),
          u = Object(o.a)(l, 2),
          O = u[0],
          v = u[1],
          h = Object(s.useState)(),
          B = Object(o.a)(h, 2),
          N = B[0],
          A = B[1],
          E = Object(s.useState)(),
          P = Object(o.a)(E, 2),
          L = P[0],
          R = P[1],
          q = Object(s.useState)(!1),
          M = Object(o.a)(q, 2),
          F = M[0],
          D = M[1],
          Q = Object(s.useState)(""),
          _ = Object(o.a)(Q, 2),
          z = _[0],
          T = _[1],
          H = Object(j.a)(m.b, { variables: { id: parseInt(a, 10) } }),
          U = H.data,
          J = H.loading,
          V = H.refetch,
          W = Object(f.a)(S.e, {
            onCompleted: function (e) {
              var r = e.deleteBoard,
                a = r.ok,
                c = r.err;
              a
                ? (x.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."
                  ),
                  n.push({
                    pathname: "/admin/".concat(t, "/").concat(i),
                    state: { refresh: !0 },
                  }))
                : (console.log(c),
                  x.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          G = Object(o.a)(W, 1)[0],
          K = Object(f.a)(S.d, {
            onCompleted: function (e) {
              var t = e.createReply,
                n = t.ok,
                r = t.err;
              n ? (T(""), D(!1), V()) : console.log(r);
            },
          }),
          X = Object(o.a)(K, 2),
          Y = X[0],
          Z = X[1].loading,
          ee = Object(f.a)(S.h, {
            onCompleted: function (e) {
              var t = e.deleteReply,
                n = t.ok,
                r = t.err;
              n
                ? (V(),
                  x.b.info(
                    "\ub2f5\uae00\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."
                  ))
                : console.log(r);
            },
          }),
          te = Object(o.a)(ee, 1)[0],
          ne = Object(s.useCallback)(
            function () {
              G({ variables: { id: parseInt(a, 10) } });
            },
            [a, G]
          );
        Object(s.useEffect)(
          function () {
            U &&
              U.getBoardById &&
              U.getBoardById.data &&
              v(U.getBoardById.data),
              U &&
                U.getBoardById &&
                U.getBoardById.data &&
                U.getBoardById.data.files &&
                A(U.getBoardById.data.files),
              U &&
                U.getBoardById &&
                U.getBoardById.data &&
                U.getBoardById.data.images &&
                R(U.getBoardById.data.images);
          },
          [U]
        );
        var re = Object(s.useCallback)(
            (function () {
              var e = Object(c.a)(
                d.a.mark(function e(t) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3),
                            Y({ variables: { boardId: t, content: z } })
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
            [Y, z]
          ),
          ae = Object(s.useCallback)(
            (function () {
              var e = Object(c.a)(
                d.a.mark(function e(t) {
                  return d.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!t) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (e.next = 3), te({ variables: { replyId: t } })
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
            [te]
          );
        return J
          ? Object(C.jsx)(C.Fragment, { children: "loading" })
          : Object(C.jsxs)($, {
              children: [
                Object(C.jsx)(k, {
                  type: "ghost",
                  onClick: function () {
                    return n.goBack();
                  },
                  children: "\ub4a4\ub85c",
                }),
                Object(C.jsxs)(g.b, {
                  bordered: !0,
                  layout: "horizontal",
                  style: { display: "flex", flexDirection: "column" },
                  children: [
                    Object(C.jsx)(
                      g.b.Item,
                      {
                        label: "\uc81c\ubaa9",
                        span: 3,
                        labelStyle: { width: 100 },
                        children: Object(C.jsx)(y.a.Title, {
                          level: 3,
                          children:
                            null === O || void 0 === O ? void 0 : O.title,
                        }),
                      },
                      "title"
                    ),
                    Object(C.jsx)(
                      g.b.Item,
                      {
                        label: "\uc0c1\ud0dc",
                        span: 3,
                        labelStyle: { width: 100 },
                        children: Object(C.jsx)(y.a.Text, {
                          type:
                            null !== O && void 0 !== O && O.private
                              ? "danger"
                              : "success",
                          children:
                            null !== O && void 0 !== O && O.private
                              ? "\ube44\uacf5\uac1c"
                              : "\uacf5\uac1c",
                        }),
                      },
                      "status"
                    ),
                    Object(C.jsx)(
                      g.b.Item,
                      {
                        label: "\uc791\uc131\uc77c",
                        span: 3,
                        labelStyle: { width: 100 },
                        children:
                          null === O || void 0 === O
                            ? void 0
                            : O.inputCreatedAt,
                      },
                      "date"
                    ),
                    Object(C.jsx)(
                      g.b.Item,
                      {
                        label: "\ud30c\uc77c",
                        span: 3,
                        labelStyle: { width: 100 },
                        children:
                          N && 0 !== N.length
                            ? Object(C.jsx)(C.Fragment, {
                                children: N.map(function (e, t) {
                                  return Object(C.jsxs)(
                                    "span",
                                    {
                                      style: { display: "inline-block" },
                                      children: [
                                        Object(C.jsx)("a", {
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
                                        Object(C.jsx)("span", {
                                          style: {
                                            display: "inline-block",
                                            marginLeft: 15,
                                            color: "".concat(
                                              null !== O &&
                                                void 0 !== O &&
                                                O.showAttach
                                                ? "#0081fa"
                                                : "red"
                                            ),
                                          },
                                          children:
                                            null !== O &&
                                            void 0 !== O &&
                                            O.showAttach
                                              ? "\uacf5\uac1c"
                                              : "\ube44\uacf5\uac1c",
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              })
                            : Object(C.jsx)(C.Fragment, {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              }),
                      },
                      "file"
                    ),
                    ("achievement" === t || "community" === t) &&
                      Object(C.jsx)(
                        g.b.Item,
                        {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children:
                            L && 0 !== L.length
                              ? Object(C.jsx)("img", {
                                  src: L[L.length - 1].url,
                                  alt: "newsimage",
                                  width: 300,
                                })
                              : Object(C.jsx)(C.Fragment, {
                                  children: "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                }),
                        },
                        "image"
                      ),
                    Object(C.jsx)(
                      g.b.Item,
                      {
                        label: "\ub0b4\uc6a9",
                        span: 4,
                        children: Object(C.jsx)("span", {
                          style: { whiteSpace: "pre-wrap" },
                          dangerouslySetInnerHTML: {
                            __html:
                              (null === O || void 0 === O
                                ? void 0
                                : O.content) || "",
                          },
                        }),
                      },
                      "content"
                    ),
                    ("request" ===
                      (null === i || void 0 === i
                        ? void 0
                        : i.toString().split("-")[1]) ||
                      "help" ===
                        (null === i || void 0 === i
                          ? void 0
                          : i.toString().split("-")[1])) &&
                      Object(C.jsxs)(
                        g.b.Item,
                        {
                          label: "\ub2f5\uae00",
                          span: 4,
                          children: [
                            null !== O &&
                            void 0 !== O &&
                            O.replies &&
                            O.replies.length > 0
                              ? O.replies.map(function (e, t) {
                                  return Object(C.jsxs)(
                                    "div",
                                    {
                                      style: { display: "flex" },
                                      children: [
                                        Object(C.jsx)("span", {
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
                                        Object(C.jsx)(k, {
                                          type: "primary",
                                          danger: !0,
                                          style: { marginLeft: 15 },
                                          onClick: function () {
                                            return ae(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.id
                                            );
                                          },
                                          children: "\ub2f5\uae00 \uc0ad\uc81c",
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                })
                              : Object(C.jsx)("div", {
                                  style: { display: "block" },
                                  children: F
                                    ? Object(C.jsx)(I.a, {
                                        onChange: function (e) {
                                          T(e);
                                        },
                                        content: z,
                                      })
                                    : Object(C.jsx)("span", {
                                        style: {
                                          display: "block",
                                          marginBottom: 15,
                                        },
                                        children:
                                          "\ub2f5\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                                      }),
                                }),
                            (null === O || void 0 === O ? void 0 : O.replies) &&
                              0 === O.replies.length &&
                              (F
                                ? Object(C.jsx)(k, {
                                    type: "primary",
                                    onClick: function () {
                                      re(
                                        null === O || void 0 === O
                                          ? void 0
                                          : O.id
                                      );
                                    },
                                    children: "\uac8c\uc2dc",
                                  })
                                : Object(C.jsx)(k, {
                                    type: "default",
                                    disabled: Z,
                                    onClick: function () {
                                      return D(!F);
                                    },
                                    children: Z
                                      ? "\uc5c5\ub85c\ub4dc \uc911"
                                      : "\ub313\uae00\ub2ec\uae30",
                                  })),
                          ],
                        },
                        "content"
                      ),
                  ],
                }),
                Object(C.jsxs)("div", {
                  className: "button-group",
                  children: [
                    Object(C.jsx)(w.b, {
                      to: "/admin/"
                        .concat(t, "/edit-")
                        .concat(t, "?category=")
                        .concat(i, "&id=")
                        .concat(a),
                      children: Object(C.jsx)(k, {
                        type: "primary",
                        children: "\uc218\uc815",
                      }),
                    }),
                    Object(C.jsx)(k, {
                      type: "primary",
                      danger: !0,
                      onClick: ne,
                      children: "\uc0ad\uc81c",
                    }),
                  ],
                }),
              ],
            });
      };
    },
  },
]);
//# sourceMappingURL=17.8ecef0b5.chunk.js.map
