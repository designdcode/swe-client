(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [25],
  {
    104: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return $;
      }),
        t.d(e, "k", function () {
          return y;
        }),
        t.d(e, "e", function () {
          return w;
        }),
        t.d(e, "i", function () {
          return k;
        }),
        t.d(e, "f", function () {
          return S;
        }),
        t.d(e, "g", function () {
          return I;
        }),
        t.d(e, "b", function () {
          return z;
        }),
        t.d(e, "c", function () {
          return N;
        }),
        t.d(e, "j", function () {
          return C;
        }),
        t.d(e, "d", function () {
          return A;
        }),
        t.d(e, "h", function () {
          return B;
        });
      var i,
        r,
        c,
        a,
        o,
        l,
        d,
        s,
        u,
        b,
        p,
        j,
        h,
        f,
        m,
        O,
        x,
        g = t(94),
        v = t(528),
        $ = Object(v.a)(
          i ||
            (i = Object(g.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n    $type: String\n    $private: Boolean\n    $writer: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n      type: $type\n      private: $private\n      writer: $writer\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y = Object(v.a)(
          r ||
            (r = Object(g.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        private\n        type\n        writer\n        inputCreatedAt\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        w = Object(v.a)(
          c ||
            (c = Object(g.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        k = Object(v.a)(
          a ||
            (a = Object(g.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n    $private: Boolean\n    $type: String\n    $showAttach: Boolean\n    $inputCreatedAt: String\n  ) {\n    editBoard(\n      id: $id\n      title: $title\n      content: $content\n      link: $link\n      private: $private\n      type: $type\n      showAttach: $showAttach\n      inputCreatedAt: $inputCreatedAt\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S =
          (Object(v.a)(
            o ||
              (o = Object(g.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            l ||
              (l = Object(g.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            d ||
              (d = Object(g.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        I = Object(v.a)(
          s ||
            (s = Object(g.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        z = Object(v.a)(
          u ||
            (u = Object(g.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(v.a)(
          b ||
            (b = Object(g.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        C =
          (Object(v.a)(
            p ||
              (p = Object(g.a)([
                "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            j ||
              (j = Object(g.a)([
                "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            h ||
              (h = Object(g.a)([
                "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            f ||
              (f = Object(g.a)([
                "\n  mutation editPopup($up: String!, $url: String, $link: String) {\n    editPopup(up: $up, url: $url, link: $link) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        A = Object(v.a)(
          m ||
            (m = Object(g.a)([
              "\n  mutation createReply($boardId: Int!, $content: String!) {\n    createReply(boardId: $boardId, content: $content) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B =
          (Object(v.a)(
            O ||
              (O = Object(g.a)([
                "\n  mutation editReply($replyId: Int!, $content: String) {\n    editReply(replyId: $replyId, content: $content) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(v.a)(
            x ||
              (x = Object(g.a)([
                "\n  mutation deleteReply($replyId: Int!) {\n    deleteReply(replyId: $replyId) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ));
    },
    125: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return c;
      });
      var i = t(89),
        r = t(2),
        c = function () {
          var n = "object" === typeof window,
            e = Object(r.useCallback)(
              function () {
                return {
                  width: n ? window.innerWidth : 0,
                  height: n ? window.innerWidth : 0,
                };
              },
              [n]
            ),
            t = Object(r.useState)(e),
            c = Object(i.a)(t, 2),
            a = c[0],
            o = c[1];
          return (
            Object(r.useEffect)(
              function () {
                if (n) {
                  var t = function () {
                    o(e());
                  };
                  return (
                    window.addEventListener("resize", t),
                    function () {
                      return window.removeEventListener("resize", t);
                    }
                  );
                }
              },
              [e, n]
            ),
            a
          );
        };
    },
    244: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return i;
      });
      var i = function (n) {
        switch (n) {
          case "achievement-news":
            return "\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd";
          case "achievement-aidnews":
            return "SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd";
          case "achievement-valuenews":
            return "SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd";
          case "achievement-coopnews":
            return "SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd";
          case "achievement-startup":
            return "\ucc3d\uc5c5\uc9c0\uc6d0\uc18c\uc2dd";
          case "community-notice":
            return "\uacf5\uc9c0\uc0ac\ud56d";
          case "community-administration":
            return "\ud559\uc0ac\uacf5\uc9c0";
          case "community-storage":
            return "\uc11c\uc2dd\uc790\ub8cc\uc2e4";
          case "community-request":
            return "\uac74\uc758\uc0ac\ud56d";
          case "community-help":
            return "\ud5ec\ud504\ub370\uc2a4\ud06c";
          case "community-sitemap":
            return "\uc0ac\uc774\ud2b8\ub9f5";
          default:
            return "NULL";
        }
      };
    },
    479: function (n, e, t) {
      "use strict";
      t.d(e, "a", function () {
        return j;
      });
      var i = t(6),
        r = t(88),
        c = t(89),
        a = t(2),
        o = t(87),
        l = t.n(o),
        d = t(112),
        s = t(187);
      function u(n) {
        var e = n.className,
          t = n.direction,
          c = n.index,
          o = n.marginDirection,
          l = n.children,
          d = n.split,
          s = n.wrap,
          u = a.useContext(j),
          b = u.horizontalSize,
          p = u.verticalSize,
          h = u.latestIndex,
          f = {};
        return (
          u.supportFlexGap ||
            ("vertical" === t
              ? c < h && (f = { marginBottom: b / (d ? 2 : 1) })
              : (f = Object(i.a)(
                  Object(i.a)({}, c < h && Object(r.a)({}, o, b / (d ? 2 : 1))),
                  s && { paddingBottom: p }
                ))),
          null === l || void 0 === l
            ? null
            : a.createElement(
                a.Fragment,
                null,
                a.createElement("div", { className: e, style: f }, l),
                c < h &&
                  d &&
                  a.createElement(
                    "span",
                    { className: "".concat(e, "-split"), style: f },
                    d
                  )
              )
        );
      }
      var b = t(228),
        p = function (n, e) {
          var t = {};
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) &&
              e.indexOf(i) < 0 &&
              (t[i] = n[i]);
          if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(n); r < i.length; r++)
              e.indexOf(i[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(n, i[r]) &&
                (t[i[r]] = n[i[r]]);
          }
          return t;
        },
        j = a.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        h = { small: 8, middle: 16, large: 24 };
      e.b = function (n) {
        var e,
          t = a.useContext(s.b),
          o = t.getPrefixCls,
          f = t.space,
          m = t.direction,
          O = n.size,
          x =
            void 0 === O
              ? (null === f || void 0 === f ? void 0 : f.size) || "small"
              : O,
          g = n.align,
          v = n.className,
          $ = n.children,
          y = n.direction,
          w = void 0 === y ? "horizontal" : y,
          k = n.prefixCls,
          S = n.split,
          I = n.style,
          z = n.wrap,
          N = void 0 !== z && z,
          C = p(n, [
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
          A = Object(b.a)(),
          B = a.useMemo(
            function () {
              return (Array.isArray(x) ? x : [x, x]).map(function (n) {
                return (function (n) {
                  return "string" === typeof n ? h[n] : n || 0;
                })(n);
              });
            },
            [x]
          ),
          E = Object(c.a)(B, 2),
          L = E[0],
          F = E[1],
          M = Object(d.a)($, { keepEmpty: !0 }),
          P = void 0 === g && "horizontal" === w ? "center" : g,
          R = o("space", k),
          W = l()(
            R,
            "".concat(R, "-").concat(w),
            ((e = {}),
            Object(r.a)(e, "".concat(R, "-rtl"), "rtl" === m),
            Object(r.a)(e, "".concat(R, "-align-").concat(P), P),
            e),
            v
          ),
          G = "".concat(R, "-item"),
          q = "rtl" === m ? "marginLeft" : "marginRight",
          D = 0,
          J = M.map(function (n, e) {
            return (
              null !== n && void 0 !== n && (D = e),
              a.createElement(
                u,
                {
                  className: G,
                  key: "".concat(G, "-").concat(e),
                  direction: w,
                  index: e,
                  marginDirection: q,
                  split: S,
                  wrap: N,
                },
                n
              )
            );
          }),
          _ = a.useMemo(
            function () {
              return {
                horizontalSize: L,
                verticalSize: F,
                latestIndex: D,
                supportFlexGap: A,
              };
            },
            [L, F, D, A]
          );
        if (0 === M.length) return null;
        var K = {};
        return (
          N && ((K.flexWrap = "wrap"), A || (K.marginBottom = -F)),
          A && ((K.columnGap = L), (K.rowGap = F)),
          a.createElement(
            "div",
            Object(i.a)(
              { className: W, style: Object(i.a)(Object(i.a)({}, K), I) },
              C
            ),
            a.createElement(j.Provider, { value: _ }, J)
          )
        );
      };
    },
    514: function (n, e, t) {
      "use strict";
      t.r(e);
      var i,
        r,
        c,
        a,
        o,
        l,
        d,
        s,
        u,
        b,
        p,
        j,
        h = t(94),
        f = t(89),
        m = t(2),
        O = t(101),
        x = t(119),
        g = t(138),
        v = t(104),
        $ = t(4),
        y = t(254),
        w = t(245),
        k = t(216),
        S = t(479),
        I = t(520),
        z = t(246),
        N = t.n(z),
        C = t(46),
        A = t(244),
        B = t(177),
        E = t(125),
        L = t(126),
        F = t(11);
      e.default = function () {
        var n = Object(E.a)(),
          e = Object($.h)(),
          t = Object($.i)(),
          i = t.param,
          r = t.subparam,
          c = Object(m.useState)(),
          a = Object(f.a)(c, 2),
          o = a[0],
          l = a[1],
          d = Object(m.useState)(),
          s = Object(f.a)(d, 2),
          u = s[0],
          b = s[1],
          p = Object(m.useState)(),
          j = Object(f.a)(p, 2),
          h = j[0],
          O = j[1],
          I = Object(m.useState)(!1),
          z = Object(f.a)(I, 2),
          Q = z[0],
          T = z[1],
          V = Object(m.useState)("\uc804\uccb4\ubcf4\uae30"),
          X = Object(f.a)(V, 2),
          Y = X[0],
          Z = X[1],
          nn = Object(L.a)(""),
          en = Object(f.a)(nn, 3),
          tn = en[0],
          rn = en[1],
          cn = en[2],
          an = Object(g.a)(v.k, {
            fetchPolicy: "network-only",
            variables: { category: r },
            onCompleted: function (n) {
              var e = n.getBoardByCategory,
                t = e.ok,
                i = e.err,
                r = e.data;
              if (t && r) {
                var c = [];
                r.map(function (n, e) {
                  var t = {
                    id: n.id,
                    index: r.length - e,
                    title: n.title,
                    createdAt: n.inputCreatedAt,
                    category: n.category,
                    private: n.private || !1,
                    writer: n.writer || "",
                    content: n.content || "",
                  };
                  return !1 === n.private ? c.push(t) : null;
                }),
                  l(c),
                  b(c);
              } else console.log(i);
            },
          }),
          on = an.loading,
          ln = an.refetch;
        Object(m.useEffect)(
          function () {
            e && e.state && e.state.refetch && ln();
          },
          [ln, e]
        ),
          Object(m.useEffect)(
            function () {
              O(Object(A.a)(r)),
                "request" === r.split("-")[1] || "help" === r.split("-")[1]
                  ? T(!0)
                  : T(!1);
            },
            [r]
          );
        var dn = Object(m.useCallback)(
            function () {
              switch ((cn(""), Y)) {
                case "\uc804\uccb4\ubcf4\uae30":
                  l(u);
                  break;
                case "\uc81c\ubaa9":
                  l(
                    null === u || void 0 === u
                      ? void 0
                      : u.filter(function (n) {
                          var e;
                          return null === (e = n.title) || void 0 === e
                            ? void 0
                            : e.includes(tn);
                        })
                  );
                  break;
                case "\ub0b4\uc6a9":
                  l(
                    null === u || void 0 === u
                      ? void 0
                      : u.filter(function (n) {
                          var e;
                          return null === (e = n.content) || void 0 === e
                            ? void 0
                            : e.includes(tn);
                        })
                  );
              }
            },
            [cn, u, tn, Y]
          ),
          sn = Object(F.jsxs)(y.a, {
            children: [
              Object(F.jsx)(
                y.a.Item,
                {
                  children: Object(F.jsx)("div", {
                    onClick: function () {
                      return Z("\uc804\uccb4\ubcf4\uae30");
                    },
                    children: "\uc804\uccb4\ubcf4\uae30",
                  }),
                },
                "all"
              ),
              Object(F.jsx)(
                y.a.Item,
                {
                  children: Object(F.jsx)("div", {
                    onClick: function () {
                      return Z("\uc81c\ubaa9");
                    },
                    children: "\uc81c\ubaa9",
                  }),
                },
                "title"
              ),
              Object(F.jsx)(
                y.a.Item,
                {
                  children: Object(F.jsx)("div", {
                    onClick: function () {
                      return Z("\ub0b4\uc6a9");
                    },
                    children: "\ub0b4\uc6a9",
                  }),
                },
                "content"
              ),
            ],
          });
        return on && !o
          ? Object(F.jsx)("div", { children: "loading..." })
          : Object(F.jsxs)(M, {
              children: [
                Object(F.jsxs)(P, {
                  children: [
                    Object(F.jsx)(R, {
                      margin: n.width > 1500 ? "25%" : "15%",
                      children: B.a.map(function (n, e) {
                        return n.title === i.split("-")[0]
                          ? Object(F.jsxs)(
                              "div",
                              {
                                children: [
                                  Object(F.jsx)("span", {
                                    className: "cover-main-title",
                                    children: n.ko_title,
                                  }),
                                  Object(F.jsx)("span", {
                                    className: "cover-description",
                                    children: n.description,
                                  }),
                                ],
                              },
                              n.key
                            )
                          : null;
                      }),
                    }),
                    Object(F.jsx)(W, {
                      isBigger: "major" === i,
                      margin: "5%",
                      children: Object(F.jsx)("div", {
                        className: "submenu-content",
                        children: B.a.map(function (n, e) {
                          return n.title === i
                            ? n.subMenu.map(function (n, e) {
                                var t = n.key === r ? 0 : 1;
                                return Object(F.jsxs)(
                                  q,
                                  {
                                    className: "submenu-col",
                                    first: t,
                                    children: [
                                      Object(F.jsx)(D, { first: t }),
                                      Object(F.jsx)(G, {
                                        to:
                                          "sitemap" === n.key.split("-")[1]
                                            ? "/main/detail/"
                                                .concat(i.split("-")[0], "/")
                                                .concat(n.key)
                                            : "/main/board/"
                                                .concat(i.split("-")[0], "/")
                                                .concat(n.key),
                                        first: t,
                                        children: Object(F.jsx)("span", {
                                          style: { fontWeight: 400 },
                                          children: n.ko_title,
                                        }),
                                      }),
                                    ],
                                  },
                                  "".concat(e, "key")
                                );
                              })
                            : null;
                        }),
                      }),
                    }),
                    Object(F.jsx)("img", {
                      src: "/img/detailBG.jpeg",
                      alt: "cover",
                    }),
                  ],
                }),
                Object(F.jsxs)(J, {
                  children: [
                    Object(F.jsxs)(_, {
                      children: [
                        Object(F.jsx)("div", {
                          className: "board-page",
                          children: Object(F.jsx)("span", {
                            className: "board-page-title",
                            children: h,
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "board-search",
                          children: [
                            Object(F.jsx)(w.a, {
                              overlay: sn,
                              className: "dropdown",
                              children: Object(F.jsxs)(k.a, {
                                children: [Y, "\u2002\u2002\u2228"],
                              }),
                            }),
                            Object(F.jsx)("input", {
                              placeholder:
                                "\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",
                              value: tn,
                              onChange: rn,
                            }),
                            Object(F.jsx)("button", {
                              className: "board-search-button",
                              onClick: dn,
                              children: "\uac80\uc0c9",
                            }),
                            Q &&
                              Object(F.jsx)(C.b, {
                                className: "board-button",
                                to: "/main/write/".concat(i, "/").concat(r),
                                children: "\uae00\uc4f0\uae30",
                              }),
                          ],
                        }),
                      ],
                    }),
                    Object(F.jsxs)(K, {
                      dataSource: o,
                      rowKey: "id",
                      children: [
                        Object(F.jsx)(
                          N.a,
                          {
                            align: "center",
                            title: function () {
                              return Object(F.jsx)(S.b, {
                                children: Object(F.jsx)(U, {
                                  children:
                                    n.width > x.c.phoneMedium
                                      ? "\ubc88\ud638"
                                      : "#",
                                }),
                              });
                            },
                            dataIndex: "index",
                            render: function (n) {
                              return Object(F.jsx)(H, { children: n });
                            },
                            width: n.width > x.c.phoneMedium ? 80 : 30,
                          },
                          "index"
                        ),
                        Object(F.jsx)(
                          N.a,
                          {
                            title: function () {
                              return Object(F.jsx)(S.b, {
                                children: Object(F.jsx)(U, {
                                  children: "\uc81c\ubaa9",
                                }),
                              });
                            },
                            dataIndex: "title",
                            ellipsis: !0,
                            render: function (n, e) {
                              return Object(F.jsx)(S.b, {
                                children: Object(F.jsx)(C.b, {
                                  to: "/main/detail/"
                                    .concat(i, "/")
                                    .concat(r, "/")
                                    .concat(e.id),
                                  children: Object(F.jsx)(H, { children: n }),
                                }),
                              });
                            },
                          },
                          "title"
                        ),
                        Object(F.jsx)(
                          N.a,
                          {
                            align: "center",
                            title: function () {
                              return Object(F.jsx)(S.b, {
                                children: Object(F.jsx)(U, {
                                  children: "\uc791\uc131\uc790",
                                }),
                              });
                            },
                            dataIndex: "\uad00\ub9ac\uc790",
                            render: function (n, e) {
                              return Object(F.jsx)(S.b, {
                                children: Object(F.jsx)(H, {
                                  children:
                                    "request" === r.split("-")[1] ||
                                    "help" === r.split("-")[1]
                                      ? e.writer
                                      : "\uad00\ub9ac\uc790",
                                }),
                              });
                            },
                            width: n.width > x.c.phoneMedium ? 150 : 65,
                          },
                          "\uad00\ub9ac\uc790"
                        ),
                        Object(F.jsx)(
                          N.a,
                          {
                            align: "center",
                            title: function () {
                              return Object(F.jsx)(S.b, {
                                children: Object(F.jsx)(U, {
                                  children: "\uc791\uc131\uc77c",
                                }),
                              });
                            },
                            dataIndex: "createdAt",
                            render: function (n) {
                              return Object(F.jsx)(H, { children: n });
                            },
                            width: n.width > x.c.phoneMedium ? 150 : 90,
                          },
                          "createdAt"
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            });
      };
      var M = O.a.div(
          i ||
            (i = Object(h.a)([
              "\n  ",
              " {\n  }\n  ",
              " {\n    margin-top: 15px;\n    min-width: 800px;\n    max-width: 1920px;\n    min-height: 80vh;\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        P = O.a.div(
          r ||
            (r = Object(h.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 120px;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n  ",
              " {\n    width: 100%;\n    min-width: 1280px;\n    height: 350px;\n    margin: 0 auto;\n    position: relative;\n    & img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n      object-position: center;\n    }\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        R = O.a.div(
          c ||
            (c = Object(h.a)([
              "\n  ",
              " {\n    position: absolute;\n    top: 10%;\n    left: 5%;\n    & .cover-main-title {\n      font-size: 20px;\n      font-weight: 500px;\n      color: white;\n      display: block;\n    }\n    & .cover-description {\n      display: block;\n      font-size: 10px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n    }\n  }\n  ",
              " {\n    position: absolute;\n    font-size: 20px;\n    margin-left: ",
              ";\n    margin-top: 50px;\n    & .cover-main-title {\n      font-size: 40px;\n      font-weight: 500;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n      display: block;\n    }\n\n    & .cover-description {\n      display: block;\n      font-size: 20px;\n      letter-spacing: 0.43px;\n      color: #ffffff;\n      text-shadow: 3px 3px 3px #000000e3;\n    }\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a),
          function (n) {
            return n.margin;
          }
        ),
        W = O.a.div(
          a ||
            (a = Object(h.a)([
              "\n  ",
              " {\n    display: none;\n  }\n  ",
              " {\n    width: 100%;\n    background-color: #e5e2e2b8;\n    position: absolute;\n    bottom: 0;\n    font-size: 15px;\n    & .submenu-content {\n      max-width: 1280px;\n      min-width: 1000px;\n      min-height: 50px;\n      height: 50px;\n      margin: 0 auto;\n      display: flex;\n      flex-wrap: wrap;\n      padding-left: 5%;\n      align-items: center;\n    }\n    & .submenu-col {\n      width: 16%;\n      height: 50px;\n      display: flex;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        G = Object(O.a)(C.b)(
          o ||
            (o = Object(h.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 2px 5px;\n    font-size: 16px;\n    color: ",
              ";\n    &:hover {\n      color: white;\n    }\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a),
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        q = O.a.div(
          l ||
            (l = Object(h.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    background-color: ",
              ";\n    color: ",
              ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    &:hover {\n      background-color: #0c1b58;\n      transition: 0.2s linear;\n      color: white;\n    }\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a),
          function (n) {
            return 0 === n.first ? "#0c1b58" : "";
          },
          function (n) {
            return 0 === n.first ? "white" : "black";
          }
        ),
        D = O.a.div(
          d ||
            (d = Object(h.a)([
              "\n  ",
              " {\n  }\n\n  ",
              " {\n    width: 50%;\n    height: 2px;\n    border-top: ",
              ";\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a),
          function (n) {
            return 0 === n.first ? "2px solid white" : "";
          }
        ),
        J = O.a.div(
          s ||
            (s = Object(h.a)([
              "\n  ",
              " {\n    width: 100%;\n  }\n\n  ",
              " {\n    min-width: 800px;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 30px;\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        _ = O.a.div(
          u ||
            (u = Object(h.a)([
              "\n  ",
              " {\n    width: 100%;\n    height: 80px;\n    font-size: 20px;\n    color: #0c1b58;\n    display: flex;\n    align-items: center;\n    padding: 0 20px;\n    & .board-search {\n      display: none;\n    }\n  }\n\n  ",
              " {\n    margin-bottom: 30px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 250px;\n    & .board-page {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 80%;\n      & .board-page-title {\n        text-align: center;\n        min-width: 350px;\n        margin: 0 auto;\n        font-size: 40px;\n        color: #0c1b58;\n        display: block;\n      }\n    }\n\n    & .board-search {\n      width: 100%;\n      display: flex;\n      justify-content: flex-end;\n\n      & .board-button {\n        cursor: pointer;\n        width: 80px;\n        height: 50px;\n        padding: 8px;\n        border: none;\n        background-color: #04083e;\n        color: white;\n        font-size: 14px;\n        margin-left: 15px;\n      }\n\n      & .board-search-button {\n        cursor: pointer;\n        width: 80px;\n        height: 50px;\n        padding: 8px;\n        border: none;\n        background-color: #e5e2e2b8;\n        color: black;\n        font-size: 14px;\n        margin-left: 15px;\n      }\n\n      & input {\n        width: 300px;\n        height: 50px;\n        background-color: #f8f8f8;\n        border: none;\n        margin-left: 15px;\n      }\n\n      & .dropdown {\n        background-color: #f8f8f8;\n        border: none;\n        color: black;\n        width: 150px;\n        height: 50px;\n      }\n    }\n\n    & a {\n      background-color: #0c1b58;\n      font-size: 18px;\n      padding: 8px 12px;\n      height: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      &:hover {\n        color: #f03fa8;\n        transition: 0.2s linear;\n      }\n    }\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        K = Object(O.a)(I.a)(
          b ||
            (b = Object(h.a)([
              "\n  ",
              " {\n    border-top: 4px solid #04083e;\n    margin: 0 20px;\n  }\n  ",
              " {\n    border-top: 4px solid #04083e;\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        U = O.a.div(
          p ||
            (p = Object(h.a)([
              "\n  color: #04083e;\n  ",
              " {\n    font-size: 8px;\n  }\n  ",
              " {\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center;\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        ),
        H = O.a.div(
          j ||
            (j = Object(h.a)([
              "\n  color: #04083e;\n  ",
              " {\n    font-size: 8px;\n  }\n  ",
              " {\n    font-size: 16px;\n    font-weight: 500;\n  }\n",
            ])),
          Object(x.d)(x.b),
          Object(x.d)(x.a)
        );
    },
  },
]);
//# sourceMappingURL=25.1000e346.chunk.js.map
