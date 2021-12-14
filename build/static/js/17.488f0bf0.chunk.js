(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [17],
  {
    110: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return O;
      }),
        t.d(n, "k", function () {
          return y;
        }),
        t.d(n, "e", function () {
          return h;
        }),
        t.d(n, "i", function () {
          return v;
        }),
        t.d(n, "f", function () {
          return x;
        }),
        t.d(n, "g", function () {
          return k;
        }),
        t.d(n, "b", function () {
          return $;
        }),
        t.d(n, "c", function () {
          return I;
        }),
        t.d(n, "d", function () {
          return S;
        }),
        t.d(n, "h", function () {
          return B;
        }),
        t.d(n, "j", function () {
          return N;
        });
      var a,
        r,
        c,
        o,
        i,
        l,
        d,
        s,
        u,
        b,
        m,
        f,
        j,
        p = t(99),
        g = t(402),
        O = Object(g.a)(
          a ||
            (a = Object(p.a)([
              "\n  mutation createBoard(\n    $title: String\n    $content: String\n    $category: String!\n    $files: [AttachModel]\n    $images: [AttachModel]\n    $link: String\n  ) {\n    createBoard(\n      title: $title\n      content: $content\n      category: $category\n      files: $files\n      images: $images\n      link: $link\n    ) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        y = Object(g.a)(
          r ||
            (r = Object(p.a)([
              "\n  query getBoardByCategory($category: String!) {\n    getBoardByCategory(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        h = Object(g.a)(
          c ||
            (c = Object(p.a)([
              "\n  mutation deleteBoard($id: Int!) {\n    deleteBoard(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        v = Object(g.a)(
          o ||
            (o = Object(p.a)([
              "\n  mutation editBoard(\n    $id: Int!\n    $title: String\n    $content: String\n    $link: String\n  ) {\n    editBoard(id: $id, title: $title, content: $content, link: $link) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        x =
          (Object(g.a)(
            i ||
              (i = Object(p.a)([
                "\n  mutation editFile($id: Int!, $url: String!, $fileName: String!) {\n    editFile(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(g.a)(
            l ||
              (l = Object(p.a)([
                "\n  mutation editImage($id: Int!, $url: String!, $fileName: String!) {\n    editImage(id: $id, url: $url, fileName: $fileName) {\n      ok\n      err\n    }\n  }\n",
              ]))
          ),
          Object(g.a)(
            d ||
              (d = Object(p.a)([
                "\n  mutation deleteFile($id: Int!) {\n    deleteFile(id: $id) {\n      ok\n      err\n    }\n  }\n",
              ]))
          )),
        k = Object(g.a)(
          s ||
            (s = Object(p.a)([
              "\n  mutation deleteImage($id: Int!) {\n    deleteImage(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        $ = Object(g.a)(
          u ||
            (u = Object(p.a)([
              "\n  mutation createFile($url: String!, $fileName: String!, $boardId: Int!) {\n    createFile(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        I = Object(g.a)(
          b ||
            (b = Object(p.a)([
              "\n  mutation createImage($url: String!, $fileName: String!, $boardId: Int!) {\n    createImage(url: $url, fileName: $fileName, boardId: $boardId) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        S = Object(g.a)(
          m ||
            (m = Object(p.a)([
              "\n  mutation createLink($title: String!, $url: String!) {\n    createLink(title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        B = Object(g.a)(
          f ||
            (f = Object(p.a)([
              "\n  mutation deleteLink($id: Int!) {\n    deleteLink(id: $id) {\n      ok\n      err\n    }\n  }\n",
            ]))
        ),
        N = Object(g.a)(
          j ||
            (j = Object(p.a)([
              "\n  mutation editLink($id: Int!, $title: String, $url: String) {\n    editLink(id: $id, title: $title, url: $url) {\n      ok\n      err\n    }\n  }\n",
            ]))
        );
    },
    117: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return r;
      });
      var a = t(133);
      t(181);
      a.a.initializeApp({
        apiKey: "AIzaSyDM5Cqu1m1YJ7E44OfM9Yo3LH0ZUN8Y6x4",
        authDomain: "sunmoon-swe.firebaseapp.com",
        projectId: "sunmoon-swe",
        storageBucket: "sunmoon-swe.appspot.com",
        messagingSenderId: "1064857281018",
        appId: "1:1064857281018:web:b2881ce151e1a16b068443",
        measurementId: "G-JYK8JT1WEN",
      });
      var r = a.a.storage();
    },
    122: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return s;
      }),
        t.d(n, "d", function () {
          return u;
        }),
        t.d(n, "a", function () {
          return b;
        }),
        t.d(n, "e", function () {
          return m;
        }),
        t.d(n, "c", function () {
          return f;
        });
      var a,
        r,
        c,
        o,
        i,
        l = t(99),
        d = t(402),
        s = Object(d.a)(
          a ||
            (a = Object(l.a)([
              "\n  query getBoardById($id: Int!) {\n    getBoardById(id: $id) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        files {\n          id\n          url\n          fileName\n        }\n        images {\n          id\n          url\n          fileName\n        }\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        u = Object(d.a)(
          r ||
            (r = Object(l.a)([
              "\n  query getLinks {\n    getLinks {\n      ok\n      err\n      data {\n        id\n        url\n        title\n        createdAt\n      }\n    }\n  }\n",
            ]))
        ),
        b = Object(d.a)(
          c ||
            (c = Object(l.a)([
              "\n  query getBoard {\n    getBoard {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        ),
        m = Object(d.a)(
          o ||
            (o = Object(l.a)([
              "\n  mutation UserLogin($id: String!, $pwd: String!) {\n    UserLogin(id: $id, pwd: $pwd) {\n      success\n      error\n      data {\n        id\n        stno\n      }\n    }\n  }\n",
            ]))
        ),
        f = Object(d.a)(
          i ||
            (i = Object(l.a)([
              "\n  query getBoardByMonth($category: String!) {\n    getBoardByMonth(category: $category) {\n      ok\n      err\n      data {\n        id\n        title\n        content\n        category\n        link\n        createdAt\n        updatedAt\n        deleteAt\n      }\n    }\n  }\n",
            ]))
        );
    },
    141: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return c;
      });
      var a = t(52),
        r = t(117),
        c = function (e, n, t, c) {
          r.a
            .ref("/".concat(e, "/").concat(n, "/").concat(t))
            .delete()
            .then(function () {
              c("");
            })
            .catch(function (e) {
              return a.b.error(e);
            });
        };
    },
    142: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return l;
      });
      var a = t(119),
        r = t.n(a),
        c = t(120),
        o = t(52),
        i = t(117),
        l = function (e, n, t, a, l, d, s, u, b) {
          i.a
            .ref("/".concat(e, "/").concat(t, "/").concat(a))
            .put(n)
            .on(
              "state_changed",
              function (e) {},
              function (e) {
                return console.log(e);
              },
              function () {
                s(1),
                  i.a
                    .ref("/".concat(e, "/").concat(t, "/").concat(a))
                    .getDownloadURL()
                    .then(
                      (function () {
                        var e = Object(c.a)(
                          r.a.mark(function e(n) {
                            return r.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if ((l(n), !u || !b)) {
                                      e.next = 4;
                                      break;
                                    }
                                    return (
                                      (e.next = 4),
                                      u({
                                        variables: {
                                          url: n,
                                          fileName: a,
                                          boardId: b,
                                        },
                                      })
                                    );
                                  case 4:
                                    o.b.success(
                                      "\ud30c\uc77c / \uc774\ubbf8\uc9c0\uac00 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                    ),
                                      s(0);
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
    202: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return l;
      }),
        t.d(n, "a", function () {
          return d;
        });
      var a,
        r,
        c = t(99),
        o = t(111),
        i = t(177),
        l = o.a.div(
          a ||
            (a = Object(c.a)([
              "\n  & .button-group {\n    display: flex;\n    align-items: center;\n  }\n\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n",
            ]))
        ),
        d = Object(o.a)(i.a)(
          r ||
            (r = Object(c.a)(["\n  margin: 15px 0;\n  margin-right: 15px;\n"]))
        );
    },
    208: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return h;
      });
      var a = t(93),
        r = t(94),
        c = t(100),
        o = t(2),
        i = t(92),
        l = t.n(i),
        d = t(115),
        s = t(139),
        u = t(107),
        b = t(160),
        m = t(8);
      function f(e) {
        return void 0 !== e && null !== e;
      }
      var j = function (e) {
        var n,
          t = e.itemPrefixCls,
          r = e.component,
          c = e.span,
          i = e.className,
          d = e.style,
          s = e.labelStyle,
          u = e.contentStyle,
          b = e.bordered,
          m = e.label,
          j = e.content,
          p = e.colon,
          g = r;
        return b
          ? o.createElement(
              g,
              {
                className: l()(
                  ((n = {}),
                  Object(a.a)(n, "".concat(t, "-item-label"), f(m)),
                  Object(a.a)(n, "".concat(t, "-item-content"), f(j)),
                  n),
                  i
                ),
                style: d,
                colSpan: c,
              },
              f(m) && o.createElement("span", { style: s }, m),
              f(j) && o.createElement("span", { style: u }, j)
            )
          : o.createElement(
              g,
              {
                className: l()("".concat(t, "-item"), i),
                style: d,
                colSpan: c,
              },
              o.createElement(
                "div",
                { className: "".concat(t, "-item-container") },
                m &&
                  o.createElement(
                    "span",
                    {
                      className: l()(
                        "".concat(t, "-item-label"),
                        Object(a.a)({}, "".concat(t, "-item-no-colon"), !p)
                      ),
                      style: s,
                    },
                    m
                  ),
                j &&
                  o.createElement(
                    "span",
                    { className: l()("".concat(t, "-item-content")), style: u },
                    j
                  )
              )
            );
      };
      function p(e, n, t) {
        var a = n.colon,
          r = n.prefixCls,
          c = n.bordered,
          i = t.component,
          l = t.type,
          d = t.showLabel,
          s = t.showContent,
          u = t.labelStyle,
          b = t.contentStyle;
        return e.map(function (e, n) {
          var t = e.props,
            f = t.label,
            p = t.children,
            g = t.prefixCls,
            O = void 0 === g ? r : g,
            y = t.className,
            h = t.style,
            v = t.labelStyle,
            x = t.contentStyle,
            k = t.span,
            $ = void 0 === k ? 1 : k,
            I = e.key;
          return "string" === typeof i
            ? o.createElement(j, {
                key: "".concat(l, "-").concat(I || n),
                className: y,
                style: h,
                labelStyle: Object(m.a)(Object(m.a)({}, u), v),
                contentStyle: Object(m.a)(Object(m.a)({}, b), x),
                span: $,
                colon: a,
                component: i,
                itemPrefixCls: O,
                bordered: c,
                label: d ? f : null,
                content: s ? p : null,
              })
            : [
                o.createElement(j, {
                  key: "label-".concat(I || n),
                  className: y,
                  style: Object(m.a)(Object(m.a)(Object(m.a)({}, u), h), v),
                  span: 1,
                  colon: a,
                  component: i[0],
                  itemPrefixCls: O,
                  bordered: c,
                  label: f,
                }),
                o.createElement(j, {
                  key: "content-".concat(I || n),
                  className: y,
                  style: Object(m.a)(Object(m.a)(Object(m.a)({}, b), h), x),
                  span: 2 * $ - 1,
                  component: i[1],
                  itemPrefixCls: O,
                  bordered: c,
                  content: p,
                }),
              ];
        });
      }
      var g = function (e) {
          var n = o.useContext(h),
            t = e.prefixCls,
            a = e.vertical,
            r = e.row,
            c = e.index,
            i = e.bordered;
          return a
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  "tr",
                  { key: "label-".concat(c), className: "".concat(t, "-row") },
                  p(
                    r,
                    e,
                    Object(m.a)(
                      { component: "th", type: "label", showLabel: !0 },
                      n
                    )
                  )
                ),
                o.createElement(
                  "tr",
                  {
                    key: "content-".concat(c),
                    className: "".concat(t, "-row"),
                  },
                  p(
                    r,
                    e,
                    Object(m.a)(
                      { component: "td", type: "content", showContent: !0 },
                      n
                    )
                  )
                )
              )
            : o.createElement(
                "tr",
                { key: c, className: "".concat(t, "-row") },
                p(
                  r,
                  e,
                  Object(m.a)(
                    {
                      component: i ? ["th", "td"] : "td",
                      type: "item",
                      showLabel: !0,
                      showContent: !0,
                    },
                    n
                  )
                )
              );
        },
        O = function (e) {
          return e.children;
        },
        y = t(112),
        h = o.createContext({}),
        v = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      function x(e, n, t) {
        var a = e;
        return (
          (void 0 === n || n > t) &&
            ((a = Object(y.a)(e, { span: t })),
            Object(u.a)(
              void 0 === n,
              "Descriptions",
              "Sum of column `span` in a line not match `column` of Descriptions."
            )),
          a
        );
      }
      function k(e) {
        var n,
          t = e.prefixCls,
          i = e.title,
          u = e.extra,
          m = e.column,
          f = void 0 === m ? v : m,
          j = e.colon,
          p = void 0 === j || j,
          O = e.bordered,
          y = e.layout,
          k = e.children,
          $ = e.className,
          I = e.style,
          S = e.size,
          B = e.labelStyle,
          N = e.contentStyle,
          w = o.useContext(b.b),
          C = w.getPrefixCls,
          E = w.direction,
          A = C("descriptions", t),
          L = o.useState({}),
          F = Object(r.a)(L, 2),
          q = F[0],
          D = F[1],
          M = (function (e, n) {
            if ("number" === typeof e) return e;
            if ("object" === Object(c.a)(e))
              for (var t = 0; t < s.b.length; t++) {
                var a = s.b[t];
                if (n[a] && void 0 !== e[a]) return e[a] || v[a];
              }
            return 3;
          })(f, q);
        o.useEffect(function () {
          var e = s.a.subscribe(function (e) {
            "object" === Object(c.a)(f) && D(e);
          });
          return function () {
            s.a.unsubscribe(e);
          };
        }, []);
        var P = (function (e, n) {
          var t = Object(d.a)(e).filter(function (e) {
              return e;
            }),
            a = [],
            r = [],
            c = n;
          return (
            t.forEach(function (e, o) {
              var i,
                l = null === (i = e.props) || void 0 === i ? void 0 : i.span,
                d = l || 1;
              if (o === t.length - 1) return r.push(x(e, l, c)), void a.push(r);
              d < c
                ? ((c -= d), r.push(e))
                : (r.push(x(e, d, c)), a.push(r), (c = n), (r = []));
            }),
            a
          );
        })(k, M);
        return o.createElement(
          h.Provider,
          { value: { labelStyle: B, contentStyle: N } },
          o.createElement(
            "div",
            {
              className: l()(
                A,
                ((n = {}),
                Object(a.a)(
                  n,
                  "".concat(A, "-").concat(S),
                  S && "default" !== S
                ),
                Object(a.a)(n, "".concat(A, "-bordered"), !!O),
                Object(a.a)(n, "".concat(A, "-rtl"), "rtl" === E),
                n),
                $
              ),
              style: I,
            },
            (i || u) &&
              o.createElement(
                "div",
                { className: "".concat(A, "-header") },
                i &&
                  o.createElement(
                    "div",
                    { className: "".concat(A, "-title") },
                    i
                  ),
                u &&
                  o.createElement(
                    "div",
                    { className: "".concat(A, "-extra") },
                    u
                  )
              ),
            o.createElement(
              "div",
              { className: "".concat(A, "-view") },
              o.createElement(
                "table",
                null,
                o.createElement(
                  "tbody",
                  null,
                  P.map(function (e, n) {
                    return o.createElement(g, {
                      key: n,
                      index: n,
                      colon: p,
                      prefixCls: A,
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
      k.Item = O;
      n.b = k;
    },
    414: function (e, n, t) {
      "use strict";
      t.r(n);
      var a,
        r = t(179),
        c = t(119),
        o = t.n(c),
        i = t(120),
        l = t(114),
        d = t(208),
        s = t(403),
        u = t(398),
        b = t(401),
        m = t(2),
        f = t(157),
        j = t.n(f),
        p = t(5),
        g = t(99),
        O = t(111).a.div(
          a ||
            (a = Object(g.a)([
              "\n  & .attach-group {\n    display: flex;\n    margin: 5px 0;\n  }\n\n  & .attach-button {\n    margin-left: 15px;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    &:hover {\n      color: #e74c3c;\n      transition: linear 0.2s;\n    }\n  }\n  & .button-group {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  img {\n    object-fit: contain;\n    width: 300px;\n    height: 400px;\n  }\n",
            ]))
        ),
        y = t(188),
        h = t(266),
        v = t(122),
        x = t(132),
        k = t(202),
        $ = t(163),
        I = t(274),
        S = t(419),
        B = t(117),
        N = t(110),
        w = t(52),
        C = t(142),
        E = t(141),
        A = t(13);
      n.default = function () {
        var e = Object(p.g)(),
          n = Object(p.i)().param,
          t = Object(p.h)().search,
          a = j.a.parse(t),
          c = a.category,
          f = a.id,
          g = Object(m.useState)(),
          L = Object(l.a)(g, 2),
          F = L[0],
          q = L[1],
          D = Object(m.useState)(),
          M = Object(l.a)(D, 2),
          P = M[0],
          J = M[1],
          U = Object(m.useState)([]),
          z = Object(l.a)(U, 2),
          R = z[0],
          Y = z[1],
          T = Object(m.useState)(),
          _ = Object(l.a)(T, 2),
          K = _[0],
          G = _[1],
          H = Object(m.useState)(),
          W = Object(l.a)(H, 2),
          Z = W[0],
          Q = W[1],
          V = Object(m.useState)(),
          X = Object(l.a)(V, 2),
          ee = X[0],
          ne = X[1],
          te = Object(x.a)(""),
          ae = Object(l.a)(te, 3),
          re = ae[0],
          ce = ae[1],
          oe = ae[2],
          ie = Object(m.useState)(0),
          le = Object(l.a)(ie, 2),
          de = le[0],
          se = le[1],
          ue = Object(y.a)(v.b, { variables: { id: parseInt(f, 10) } }),
          be = ue.loading,
          me = ue.data,
          fe = ue.refetch,
          je = Object(h.a)(N.c, {
            onCompleted: function (e) {
              e.createImage.ok && (se(0), fe && fe());
            },
          }),
          pe = Object(l.a)(je, 1)[0],
          ge = Object(h.a)(N.g, {
            onCompleted: function (e) {
              var n = e.deleteImage,
                t = n.ok,
                a = n.err;
              t
                ? (fe && fe(),
                  w.b.error(
                    "\uc774\ubbf8\uc9c0\uac00 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ))
                : (console.log(a), w.b.error(a));
            },
          }),
          Oe = Object(l.a)(ge, 1)[0],
          ye = Object(h.a)(N.b, {
            onCompleted: function (e) {
              e.createFile.ok && (se(0), fe && fe());
            },
          }),
          he = Object(l.a)(ye, 1)[0],
          ve = Object(h.a)(N.f, {
            onCompleted: function (e) {
              var n = e.deleteFile,
                t = n.ok,
                a = n.err;
              t
                ? (w.b.success(
                    "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  fe && fe())
                : (console.log(a), w.b.error(a));
            },
          }),
          xe = Object(l.a)(ve, 1)[0],
          ke = Object(h.a)(N.i, {
            onCompleted: function (t) {
              var a = t.editBoard,
                r = a.ok,
                o = a.err;
              r
                ? (w.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  e.push({
                    pathname: "/admin/".concat(n, "/").concat(c),
                    state: { refresh: !0 },
                  }))
                : (console.log(o),
                  w.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          $e = Object(l.a)(ke, 1)[0],
          Ie = Object(m.useCallback)(
            function () {
              Z && Z.trim() && Object(E.a)("images", c, Z, G);
            },
            [c, Z]
          ),
          Se = Object(m.useCallback)(
            (function () {
              var e = Object(i.a)(
                o.a.mark(function e(n) {
                  var t;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Ie(),
                            se(de + 1),
                            (t = n.name),
                            Q(n.name),
                            Object(C.a)(
                              "images",
                              n,
                              c,
                              t,
                              G,
                              de,
                              se,
                              pe,
                              parseInt(f, 10)
                            );
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })(),
            [c, de, Ie, pe, f]
          ),
          Be = Object(m.useCallback)(
            function (e) {
              se(1),
                B.a
                  .ref("/files/".concat(c, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      B.a
                        .ref("/files/".concat(c, "/").concat(e.name))
                        .getDownloadURL()
                        .then(
                          (function () {
                            var n = Object(i.a)(
                              o.a.mark(function n(t) {
                                return o.a.wrap(function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        return (
                                          Y(function (n) {
                                            return [].concat(Object(r.a)(n), [
                                              { url: t, fileName: e.name },
                                            ]);
                                          }),
                                          (n.next = 3),
                                          he({
                                            variables: {
                                              url: t,
                                              fileName: e.name,
                                              boardId: parseInt(f, 10),
                                            },
                                            onCompleted: function (e) {
                                              var n = e.createFile,
                                                t = n.ok,
                                                a = n.err;
                                              t
                                                ? (w.b.success(
                                                    "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  fe && fe())
                                                : (w.b.error(
                                                    "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  console.log(a));
                                            },
                                          })
                                        );
                                      case 3:
                                        se(de - 1);
                                      case 4:
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
            },
            [he, f, c, de, fe]
          ),
          Ne = Object(m.useCallback)(
            (function () {
              var e = Object(i.a)(
                o.a.mark(function e(n, t) {
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            B.a
                              .ref("/files/".concat(c, "/").concat(t))
                              .delete(),
                            (e.next = 3),
                            xe({ variables: { id: n } })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (n, t) {
                return e.apply(this, arguments);
              };
            })(),
            [xe, c]
          );
        return (
          Object(m.useEffect)(
            function () {
              var e;
              (me &&
                me.getBoardById &&
                me.getBoardById.data &&
                (q(me.getBoardById.data), oe(me.getBoardById.data.link || "")),
              me &&
                me.getBoardById &&
                me.getBoardById.data &&
                me.getBoardById.data.files &&
                J(me.getBoardById.data.files),
              me &&
                me.getBoardById &&
                me.getBoardById.data &&
                me.getBoardById.data.images) &&
                (ne(me.getBoardById.data.images[0]),
                Q(
                  null === (e = me.getBoardById.data.images[0]) || void 0 === e
                    ? void 0
                    : e.fileName
                ));
            },
            [me, q, oe]
          ),
          be
            ? Object(A.jsx)("div", { children: "loading..." })
            : Object(A.jsxs)(O, {
                children: [
                  Object(A.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(A.jsx)(k.a, {
                        type: "ghost",
                        onClick: function () {
                          return e.goBack();
                        },
                        children: "\ub4a4\ub85c",
                      }),
                      Object(A.jsx)(k.a, {
                        type: "primary",
                        disabled: 0 !== de,
                        onClick: function () {
                          return $e({
                            variables: {
                              id: parseInt(f, 10),
                              link: re.includes("http")
                                ? re
                                : "http://".concat(re),
                            },
                          });
                        },
                        children:
                          0 === de
                            ? "\uc644\ub8cc"
                            : Object(A.jsxs)(A.Fragment, {
                                children: [
                                  Object(A.jsx)($.a, {}),
                                  " \ud30c\uc77c / \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub529 \uc911",
                                ],
                              }),
                      }),
                    ],
                  }),
                  Object(A.jsxs)(d.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      Object(A.jsx)(d.b.Item, {
                        label: "\ub9c1\ud06c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: Object(A.jsx)(s.a, {
                          placeholder:
                            (null === F || void 0 === F ? void 0 : F.link) ||
                            void 0,
                          value: re,
                          onChange: ce,
                        }),
                      }),
                      Object(A.jsxs)(d.b.Item, {
                        label: "\ucca8\ubd80\ud30c\uc77c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          P && 0 !== P.length
                            ? Object(A.jsx)(A.Fragment, {
                                children: P.map(function (e, n) {
                                  return Object(A.jsxs)(
                                    "div",
                                    {
                                      className: "attach-group",
                                      children: [
                                        Object(A.jsx)("a", {
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
                                        Object(A.jsx)("button", {
                                          className: "attach-button",
                                          onClick: function () {
                                            return Ne(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.id,
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.fileName
                                            );
                                          },
                                          children: Object(A.jsx)(I.a, {}),
                                        }),
                                      ],
                                    },
                                    n
                                  );
                                }),
                              })
                            : 0 === R.length
                            ? Object(A.jsx)("div", {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              })
                            : Object(A.jsx)(A.Fragment, {}),
                          Object(A.jsx)(u.a, {
                            multiple: !0,
                            maxCount: 4,
                            className: "upload-list-inline",
                            customRequest: function (e) {
                              var n = e.file;
                              return Be(n);
                            },
                            onChange: function (e) {
                              var n = e.file;
                              0 !== R.length
                                ? (n.status = "done")
                                : (n.status = "removed");
                            },
                            children: Object(A.jsx)(k.a, {
                              icon: Object(A.jsx)(S.a, {}),
                              children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                        ],
                      }),
                      Object(A.jsxs)(d.b.Item, {
                        label: "\uc774\ubbf8\uc9c0",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          ee &&
                            Object(A.jsx)(k.a, {
                              danger: !0,
                              icon: Object(A.jsx)(I.a, {}),
                              onClick: function () {
                                Object(E.a)("images", c, ee.fileName, G),
                                  Oe({ variables: { id: ee.id } });
                              },
                              children: "\uc774\ubbf8\uc9c0 \uc0ad\uc81c",
                            }),
                          Object(A.jsx)(u.a, {
                            listType: "picture",
                            customRequest: function (e) {
                              var n = e.file;
                              ee && Oe({ variables: { id: ee && ee.id } }),
                                Se(n);
                            },
                            progress: { showInfo: !0 },
                            onChange: function (e) {
                              var n = e.file;
                              n.status = K ? "done" : "removed";
                            },
                            maxCount: 1,
                            children: Object(A.jsx)(k.a, {
                              icon: Object(A.jsx)(S.a, {}),
                              children: "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                          ee
                            ? Object(A.jsx)("img", {
                                src: ee.url,
                                alt: ee.fileName,
                              })
                            : Object(A.jsx)(b.a.Text, {
                                children:
                                  "\uc5c5\ub85c\ub4dc \ub41c \uc774\ubbf8\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
                              }),
                        ],
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
//# sourceMappingURL=17.488f0bf0.chunk.js.map
