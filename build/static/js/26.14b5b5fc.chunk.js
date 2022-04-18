(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [26],
  {
    144: function (e, t, a) {
      "use strict";
      var n,
        c = a(94),
        r = a(2),
        o = a(101),
        l = a(211),
        i = a.n(l),
        s = (a(214), a(11));
      t.a = function (e) {
        e.content;
        var t = e.onChange,
          a = Object(r.useRef)(),
          n = Object(r.useCallback)(function (e) {
            a.current = e;
          }, []),
          c = Object(r.useCallback)(function (e) {
            if (e && e.imageInfo) {
              var t = e.imageInfo.split("base64,");
              console.log(t);
            }
          }, []);
        return Object(s.jsx)(d, {
          getSunEditorInstance: n,
          onChange: t,
          onImageUpload: c,
          setOptions: {
            minHeight: "400px",
            buttonList: [
              ["fontSize", "bold", "underline", "italic", "fontColor", "list"],
            ],
          },
        });
      };
      var d = Object(o.a)(i.a)(
        n ||
          (n = Object(c.a)([
            "\n  background-color: white;\n  min-height: 300px;\n  & .ql-container {\n    min-height: 300px;\n  }\n  & .ql-editor {\n    min-height: 300px;\n  }\n",
          ]))
      );
    },
    212: function (e, t, a) {
      var n = {
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
      function c(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return n[e];
      }
      (c.keys = function () {
        return Object.keys(n);
      }),
        (c.resolve = r),
        (e.exports = c),
        (c.id = 212);
    },
    330: function (e, t, a) {
      "use strict";
      var n = a(6),
        c = a(88),
        r = a(2),
        o = a(89),
        l = a(96),
        i = a(87),
        s = a.n(i),
        d = a(122),
        b = a(123),
        u = r.forwardRef(function (e, t) {
          var a,
            n = e.prefixCls,
            i = void 0 === n ? "rc-switch" : n,
            u = e.className,
            j = e.checked,
            O = e.defaultChecked,
            h = e.disabled,
            f = e.loadingIcon,
            p = e.checkedChildren,
            m = e.unCheckedChildren,
            g = e.onClick,
            v = e.onChange,
            x = e.onKeyDown,
            y = Object(l.a)(e, [
              "prefixCls",
              "className",
              "checked",
              "defaultChecked",
              "disabled",
              "loadingIcon",
              "checkedChildren",
              "unCheckedChildren",
              "onClick",
              "onChange",
              "onKeyDown",
            ]),
            C = Object(d.a)(!1, { value: j, defaultValue: O }),
            k = Object(o.a)(C, 2),
            I = k[0],
            w = k[1];
          function B(e, t) {
            var a = I;
            return h || (w((a = e)), null === v || void 0 === v || v(a, t)), a;
          }
          var S = s()(
            i,
            u,
            ((a = {}),
            Object(c.a)(a, "".concat(i, "-checked"), I),
            Object(c.a)(a, "".concat(i, "-disabled"), h),
            a)
          );
          return r.createElement(
            "button",
            Object.assign({}, y, {
              type: "button",
              role: "switch",
              "aria-checked": I,
              disabled: h,
              className: S,
              ref: t,
              onKeyDown: function (e) {
                e.which === b.a.LEFT
                  ? B(!1, e)
                  : e.which === b.a.RIGHT && B(!0, e),
                  null === x || void 0 === x || x(e);
              },
              onClick: function (e) {
                var t = B(!I, e);
                null === g || void 0 === g || g(t, e);
              },
            }),
            f,
            r.createElement(
              "span",
              { className: "".concat(i, "-inner") },
              I ? p : m
            )
          );
        });
      u.displayName = "Switch";
      var j = u,
        O = a(137),
        h = a(208),
        f = a(187),
        p = a(116),
        m = a(99),
        g = function (e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (a[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var c = 0;
            for (n = Object.getOwnPropertySymbols(e); c < n.length; c++)
              t.indexOf(n[c]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[c]) &&
                (a[n[c]] = e[n[c]]);
          }
          return a;
        },
        v = r.forwardRef(function (e, t) {
          var a,
            o = e.prefixCls,
            l = e.size,
            i = e.loading,
            d = e.className,
            b = void 0 === d ? "" : d,
            u = e.disabled,
            v = g(e, ["prefixCls", "size", "loading", "className", "disabled"]);
          Object(m.a)(
            "checked" in v || !("value" in v),
            "Switch",
            "`value` is not a valid prop, do you mean `checked`?"
          );
          var x = r.useContext(f.b),
            y = x.getPrefixCls,
            C = x.direction,
            k = r.useContext(p.b),
            I = y("switch", o),
            w = r.createElement(
              "div",
              { className: "".concat(I, "-handle") },
              i &&
                r.createElement(O.a, {
                  className: "".concat(I, "-loading-icon"),
                })
            ),
            B = s()(
              ((a = {}),
              Object(c.a)(a, "".concat(I, "-small"), "small" === (l || k)),
              Object(c.a)(a, "".concat(I, "-loading"), i),
              Object(c.a)(a, "".concat(I, "-rtl"), "rtl" === C),
              a),
              b
            );
          return r.createElement(
            h.a,
            { insertExtraNode: !0 },
            r.createElement(
              j,
              Object(n.a)({}, v, {
                prefixCls: I,
                className: B,
                disabled: u || i,
                ref: t,
                loadingIcon: w,
              })
            )
          );
        });
      (v.__ANT_SWITCH = !0), (v.displayName = "Switch");
      t.a = v;
    },
    517: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(92),
        c = a(115),
        r = a(89),
        o = a(113),
        l = a.n(o),
        i = a(2),
        s = a(4),
        d = a(184),
        b = a.n(d),
        u = a(138),
        j = a(198),
        O = a(121),
        h = a(104),
        f = a(45),
        p = a(323),
        m = a(255),
        g = a(474),
        v = a(521),
        x = a(330),
        y = a(126),
        C = a(480),
        k = a(541),
        I = a(137),
        w = a(114),
        B = a(171),
        S = a(172),
        N = a(132),
        E = a(144),
        _ = a(11);
      t.default = function () {
        var e,
          t,
          a = Object(s.h)().search,
          o = b.a.parse(a),
          d = Object(s.g)(),
          D = Object(s.i)(),
          R = D.param,
          F = D.subparam,
          A = o.id,
          T = o.category,
          z = Object(i.useState)(),
          U = Object(r.a)(z, 2),
          q = U[0],
          L = U[1],
          P = Object(i.useState)(),
          Y = Object(r.a)(P, 2),
          H = Y[0],
          K = Y[1],
          M = Object(i.useState)([]),
          J = Object(r.a)(M, 2),
          G = J[0],
          V = J[1],
          W = Object(i.useState)(),
          Q = Object(r.a)(W, 2),
          X = Q[0],
          Z = Q[1],
          $ = Object(y.a)(""),
          ee = Object(r.a)($, 3),
          te = ee[0],
          ae = ee[1],
          ne = ee[2],
          ce = Object(y.a)(""),
          re = Object(r.a)(ce, 2),
          oe = re[0],
          le = re[1],
          ie = Object(i.useState)(""),
          se = Object(r.a)(ie, 2),
          de = se[0],
          be = se[1],
          ue = Object(y.a)(""),
          je = Object(r.a)(ue, 3),
          Oe = je[0],
          he = je[1],
          fe = je[2],
          pe = Object(i.useState)(0),
          me = Object(r.a)(pe, 2),
          ge = me[0],
          ve = me[1],
          xe = Object(i.useState)(),
          ye = Object(r.a)(xe, 2),
          Ce = ye[0],
          ke = ye[1],
          Ie = Object(i.useState)(),
          we = Object(r.a)(Ie, 2),
          Be = we[0],
          Se = we[1],
          Ne = Object(i.useState)(),
          Ee = Object(r.a)(Ne, 2),
          _e = Ee[0],
          De = Ee[1],
          Re = Object(i.useState)(),
          Fe = Object(r.a)(Re, 2),
          Ae = Fe[0],
          Te = Fe[1],
          ze = Object(i.useState)(!1),
          Ue = Object(r.a)(ze, 2),
          qe = Ue[0],
          Le = Ue[1],
          Pe = Object(i.useState)(!1),
          Ye = Object(r.a)(Pe, 2),
          He = Ye[0],
          Ke = Ye[1],
          Me = Object(u.a)(O.b, { variables: { id: parseInt(A, 10) } }),
          Je = Me.data,
          Ge = Me.loading,
          Ve = Me.refetch;
        Object(i.useEffect)(
          function () {
            Le(Object(N.d)(F));
          },
          [F]
        );
        var We = Object(j.a)(h.e, {
            onCompleted: function (e) {
              var t = e.deleteBoard,
                a = t.ok,
                n = t.err;
              a
                ? (f.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  d.push({
                    pathname: "/admin/".concat(R, "/").concat(T),
                    state: { refresh: !0 },
                  }))
                : (console.log(n),
                  f.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Qe = Object(r.a)(We, 1)[0],
          Xe = Object(j.a)(h.f, {
            onCompleted: function (e) {
              var t = e.deleteFile,
                a = t.ok,
                n = t.err;
              a &&
                (f.b.success(
                  "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                ),
                Ve ? Ve() : (console.log(n), f.b.error(n)));
            },
          }),
          Ze = Object(r.a)(Xe, 1)[0],
          $e = Object(j.a)(h.b),
          et = Object(r.a)($e, 1)[0],
          tt = Object(j.a)(h.c),
          at = Object(r.a)(tt, 1)[0],
          nt = Object(j.a)(h.i, {
            onCompleted: function (e) {
              var t = e.editBoard,
                a = t.ok,
                n = t.err;
              a
                ? (f.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  d.push({
                    pathname: "/admin/".concat(R, "/").concat(T),
                    state: { refresh: !0 },
                  }))
                : (console.log(n),
                  f.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          ct = Object(r.a)(nt, 1)[0],
          rt = Object(i.useCallback)(
            function () {
              Qe({ variables: { id: parseInt(A, 10) } });
            },
            [A, Qe]
          ),
          ot = Object(i.useCallback)(
            Object(c.a)(
              l.a.mark(function e() {
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          ct({
                            variables: {
                              id: parseInt(A, 10),
                              title: te,
                              content: de,
                              link: Oe,
                              private: _e,
                              showAttach: Ae,
                              inputCreatedAt: oe,
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
            [A, te, de, Oe, ct, _e, Ae, oe]
          ),
          lt = Object(i.useCallback)(
            (function () {
              var e = Object(c.a)(
                l.a.mark(function e(t, a) {
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            w.a
                              .ref("/files/".concat(T, "/").concat(a))
                              .delete(),
                            (e.next = 3),
                            Ze({ variables: { id: t } })
                          );
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            [Ze, T]
          ),
          it = Object(i.useCallback)(
            function (e) {
              ve(ge + 1),
                Se(e.name),
                Ke(!0),
                Object(S.a)(
                  "images",
                  e,
                  T,
                  e.name,
                  ke,
                  ge,
                  ve,
                  at,
                  parseInt(A, 10)
                ),
                Ke(!1),
                ve(0);
            },
            [T, ge, at, A]
          ),
          st = Object(i.useCallback)(
            function (e) {
              Ke(!0),
                ve(ge + 1),
                w.a
                  .ref("/files/".concat(T, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      w.a
                        .ref("/files/".concat(T, "/").concat(e.name))
                        .getDownloadURL()
                        .then(
                          (function () {
                            var t = Object(c.a)(
                              l.a.mark(function t(a) {
                                return l.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          V(function (t) {
                                            return [].concat(Object(n.a)(t), [
                                              { url: a, fileName: e.name },
                                            ]);
                                          }),
                                          (t.next = 3),
                                          et({
                                            variables: {
                                              url: a,
                                              fileName: e.name,
                                              boardId: parseInt(A, 10),
                                            },
                                            onCompleted: function (e) {
                                              var t = e.createFile,
                                                a = t.ok,
                                                n = t.err;
                                              a
                                                ? (f.b.success(
                                                    "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  Ve && Ve())
                                                : (f.b.error(
                                                    "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  console.log(n));
                                            },
                                          })
                                        );
                                      case 3:
                                        Ke(!1), ve(ge - 1);
                                      case 5:
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
            [et, A, T, ge, Ve]
          ),
          dt = Object(i.useCallback)(
            function () {
              Be && Be.trim() && Object(B.a)("images", T, Be, ke);
            },
            [T, Be]
          );
        return (
          Object(i.useEffect)(
            function () {
              Je &&
                Je.getBoardById &&
                Je.getBoardById.data &&
                (De(!!Je.getBoardById.data.private),
                Te(!!Je.getBoardById.data.showAttach),
                L(Je.getBoardById.data),
                ne(Je.getBoardById.data.title || ""),
                be(Je.getBoardById.data.content || ""),
                fe(Je.getBoardById.data.link || "")),
                Je &&
                  Je.getBoardById &&
                  Je.getBoardById.data &&
                  Je.getBoardById.data.files &&
                  K(Je.getBoardById.data.files),
                Je &&
                  Je.getBoardById &&
                  Je.getBoardById.data &&
                  Je.getBoardById.data.images &&
                  Z(Je.getBoardById.data.images);
            },
            [Je, ne, be, fe]
          ),
          Object(i.useEffect)(
            function () {
              ge < 0 && ve(0);
            },
            [ge]
          ),
          Ge || !q
            ? Object(_.jsx)("div", { children: "loading..." })
            : Object(_.jsxs)(p.b, {
                children: [
                  Object(_.jsx)(p.a, {
                    type: "ghost",
                    onClick: function () {
                      return d.goBack();
                    },
                    children: "\ub4a4\ub85c",
                  }),
                  Object(_.jsxs)(m.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      Object(_.jsx)(m.b.Item, {
                        label: "\uc81c\ubaa9",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: Object(_.jsx)(g.a, {
                          placeholder:
                            (null === q || void 0 === q ? void 0 : q.title) ||
                            void 0,
                          value: te,
                          onChange: ae,
                        }),
                      }),
                      Object(_.jsx)(m.b.Item, {
                        label: "\uc0dd\uc131\ub0a0\uc9dc",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: Object(_.jsx)(g.a, {
                          placeholder:
                            (null === q || void 0 === q
                              ? void 0
                              : q.inputCreatedAt) || "YYYY-MM-DD",
                          value: oe,
                          onChange: le,
                          style: { width: 200 },
                        }),
                      }),
                      Object(_.jsxs)(m.b.Item, {
                        label: "\ud30c\uc77c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          H && 0 !== H.length
                            ? Object(_.jsx)(_.Fragment, {
                                children: H.map(function (e, t) {
                                  return Object(_.jsxs)(
                                    "div",
                                    {
                                      className: "attach-group",
                                      children: [
                                        Object(_.jsx)("a", {
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
                                        Object(_.jsx)("button", {
                                          className: "attach-button",
                                          onClick: function () {
                                            return lt(e.id, e.fileName);
                                          },
                                          children: Object(_.jsx)(C.a, {}),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              })
                            : 0 === G.length
                            ? Object(_.jsx)("div", {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              })
                            : Object(_.jsx)(_.Fragment, {}),
                          Object(_.jsx)(v.a, {
                            multiple: !0,
                            maxCount: 4,
                            className: "upload-list-inline",
                            customRequest: function (e) {
                              var t = e.file;
                              return st(t);
                            },
                            onChange: function (e) {
                              var t = e.file;
                              0 !== G.length
                                ? (t.status = "done")
                                : (t.status = "removed");
                            },
                            children: Object(_.jsx)(p.a, {
                              icon: Object(_.jsx)(k.a, {}),
                              children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                        ],
                      }),
                      Object(_.jsx)(m.b.Item, {
                        label: "\ud30c\uc77c\uacf5\uac1c",
                        span: 4,
                        labelStyle: { width: 120 },
                        children: Object(_.jsxs)("div", {
                          children: [
                            Object(_.jsx)("div", {
                              children: Ae
                                ? Object(_.jsx)("span", {
                                    style: { color: "#0081fa" },
                                    children: "\uacf5\uac1c",
                                  })
                                : Object(_.jsx)("span", {
                                    style: { color: "#ff4447" },
                                    children: "\ube44\uacf5\uac1c",
                                  }),
                            }),
                            Object(_.jsx)("div", {
                              children: Object(_.jsx)(x.a, {
                                defaultChecked: !(
                                  null === Je ||
                                  void 0 === Je ||
                                  null === (e = Je.getBoardById.data) ||
                                  void 0 === e ||
                                  !e.showAttach
                                ),
                                onChange: function () {
                                  return Te(!Ae);
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                      "achievement" === R &&
                        Object(_.jsx)(m.b.Item, {
                          label: "\uacf5\uac1c",
                          span: 4,
                          children: Object(_.jsx)(x.a, {
                            defaultChecked:
                              null === Je ||
                              void 0 === Je ||
                              null === (t = Je.getBoardById.data) ||
                              void 0 === t ||
                              !t.private,
                            onChange: function () {
                              return De(!_e);
                            },
                          }),
                        }),
                      qe &&
                        Object(_.jsx)(m.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          children: Object(_.jsx)(g.a, {
                            placeholder:
                              (null === q || void 0 === q ? void 0 : q.link) ||
                              void 0,
                            value: Oe,
                            onChange: he,
                          }),
                        }),
                      "achievement" === R &&
                        Object(_.jsxs)(m.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            X && 0 !== X.length
                              ? Object(_.jsx)("div", {
                                  children: Ce
                                    ? Object(_.jsx)("img", {
                                        src: Ce,
                                        width: 300,
                                        alt: "upimage",
                                      })
                                    : Object(_.jsx)("img", {
                                        src: X[0].url,
                                        alt: "ima",
                                        width: 300,
                                      }),
                                })
                              : Object(_.jsx)("div", {
                                  children: "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                }),
                            Object(_.jsx)(v.a, {
                              multiple: !0,
                              maxCount: 1,
                              listType: "picture",
                              className: "upload-list-inline",
                              progress: { showInfo: !0 },
                              onRemove: function () {
                                return dt();
                              },
                              customRequest: function (e) {
                                var t = e.file;
                                return it(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== G.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(_.jsx)(p.a, {
                                icon: Object(_.jsx)(k.a, {}),
                                children:
                                  "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                      Object(_.jsx)(m.b.Item, {
                        label: "\ub0b4\uc6a9",
                        span: 4,
                        children: Object(_.jsx)(E.a, {
                          onChange: function (e) {
                            be(e);
                          },
                          content: de,
                        }),
                      }),
                    ],
                  }),
                  Object(_.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(_.jsx)(p.a, {
                        type: "primary",
                        onClick: function () {
                          return ot();
                        },
                        disabled: He,
                        children: Ge
                          ? Object(_.jsxs)(_.Fragment, {
                              children: [
                                Object(_.jsx)(I.a, {}),
                                "Uploading...",
                              ],
                            })
                          : "\uc5c5\ub85c\ub4dc",
                      }),
                      Object(_.jsx)(p.a, {
                        type: "primary",
                        danger: !0,
                        onClick: rt,
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
//# sourceMappingURL=26.14b5b5fc.chunk.js.map
