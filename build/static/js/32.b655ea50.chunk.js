(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [32],
  {
    327: function (e, t, a) {
      "use strict";
      var c = a(6),
        n = a(88),
        r = a(2),
        l = a(89),
        o = a(96),
        i = a(87),
        s = a.n(i),
        d = a(123),
        b = a(124),
        u = r.forwardRef(function (e, t) {
          var a,
            c = e.prefixCls,
            i = void 0 === c ? "rc-switch" : c,
            u = e.className,
            j = e.checked,
            h = e.defaultChecked,
            O = e.disabled,
            f = e.loadingIcon,
            m = e.checkedChildren,
            p = e.unCheckedChildren,
            g = e.onClick,
            v = e.onChange,
            x = e.onKeyDown,
            y = Object(o.a)(e, [
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
            C = Object(d.a)(!1, { value: j, defaultValue: h }),
            k = Object(l.a)(C, 2),
            B = k[0],
            w = k[1];
          function I(e, t) {
            var a = B;
            return O || (w((a = e)), null === v || void 0 === v || v(a, t)), a;
          }
          var N = s()(
            i,
            u,
            ((a = {}),
            Object(n.a)(a, "".concat(i, "-checked"), B),
            Object(n.a)(a, "".concat(i, "-disabled"), O),
            a)
          );
          return r.createElement(
            "button",
            Object.assign({}, y, {
              type: "button",
              role: "switch",
              "aria-checked": B,
              disabled: O,
              className: N,
              ref: t,
              onKeyDown: function (e) {
                e.which === b.a.LEFT
                  ? I(!1, e)
                  : e.which === b.a.RIGHT && I(!0, e),
                  null === x || void 0 === x || x(e);
              },
              onClick: function (e) {
                var t = I(!B, e);
                null === g || void 0 === g || g(t, e);
              },
            }),
            f,
            r.createElement(
              "span",
              { className: "".concat(i, "-inner") },
              B ? m : p
            )
          );
        });
      u.displayName = "Switch";
      var j = u,
        h = a(138),
        O = a(193),
        f = a(170),
        m = a(116),
        p = a(99),
        g = function (e, t) {
          var a = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              t.indexOf(c) < 0 &&
              (a[c] = e[c]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (c = Object.getOwnPropertySymbols(e); n < c.length; n++)
              t.indexOf(c[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, c[n]) &&
                (a[c[n]] = e[c[n]]);
          }
          return a;
        },
        v = r.forwardRef(function (e, t) {
          var a,
            l = e.prefixCls,
            o = e.size,
            i = e.loading,
            d = e.className,
            b = void 0 === d ? "" : d,
            u = e.disabled,
            v = g(e, ["prefixCls", "size", "loading", "className", "disabled"]);
          Object(p.a)(
            "checked" in v || !("value" in v),
            "Switch",
            "`value` is not a valid prop, do you mean `checked`?"
          );
          var x = r.useContext(f.b),
            y = x.getPrefixCls,
            C = x.direction,
            k = r.useContext(m.b),
            B = y("switch", l),
            w = r.createElement(
              "div",
              { className: "".concat(B, "-handle") },
              i &&
                r.createElement(h.a, {
                  className: "".concat(B, "-loading-icon"),
                })
            ),
            I = s()(
              ((a = {}),
              Object(n.a)(a, "".concat(B, "-small"), "small" === (o || k)),
              Object(n.a)(a, "".concat(B, "-loading"), i),
              Object(n.a)(a, "".concat(B, "-rtl"), "rtl" === C),
              a),
              b
            );
          return r.createElement(
            O.a,
            { insertExtraNode: !0 },
            r.createElement(
              j,
              Object(c.a)({}, v, {
                prefixCls: B,
                className: I,
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
    537: function (e, t, a) {
      "use strict";
      a.r(t);
      var c,
        n = a(94),
        r = a(92),
        l = a(114),
        o = a(89),
        i = a(112),
        s = a.n(i),
        d = a(2),
        b = a(4),
        u = a(167),
        j = a.n(u),
        h = a(139),
        O = a(164),
        f = a(122),
        m = a(104),
        p = a(45),
        g = a(320),
        v = a(245),
        x = a(494),
        y = a(541),
        C = a(327),
        k = a(130),
        B = a(500),
        w = a(561),
        I = a(138),
        N = a(115),
        S = a(156),
        E = a(157),
        R = a(132),
        F = a(196),
        T = a.n(F),
        _ = (a(198), a(103)),
        A = a(11),
        D = {
          toolbar: [
            [{ header: [1, 2, !1] }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
        P = ["header", "bold", "italic", "underline", "list"];
      t.default = function () {
        var e,
          t,
          a = Object(b.h)().search,
          c = j.a.parse(a),
          n = Object(b.g)(),
          i = Object(b.i)(),
          u = i.param,
          F = i.subparam,
          T = c.id,
          _ = c.category,
          z = Object(d.useState)(),
          K = Object(o.a)(z, 2),
          H = K[0],
          J = K[1],
          L = Object(d.useState)(),
          U = Object(o.a)(L, 2),
          G = U[0],
          V = U[1],
          W = Object(d.useState)([]),
          M = Object(o.a)(W, 2),
          Q = M[0],
          X = M[1],
          Y = Object(d.useState)(),
          Z = Object(o.a)(Y, 2),
          $ = Z[0],
          ee = Z[1],
          te = Object(k.a)(""),
          ae = Object(o.a)(te, 3),
          ce = ae[0],
          ne = ae[1],
          re = ae[2],
          le = Object(d.useState)(""),
          oe = Object(o.a)(le, 2),
          ie = oe[0],
          se = oe[1],
          de = Object(k.a)(""),
          be = Object(o.a)(de, 3),
          ue = be[0],
          je = be[1],
          he = be[2],
          Oe = Object(d.useState)(0),
          fe = Object(o.a)(Oe, 2),
          me = fe[0],
          pe = fe[1],
          ge = Object(d.useState)(),
          ve = Object(o.a)(ge, 2),
          xe = ve[0],
          ye = ve[1],
          Ce = Object(d.useState)(),
          ke = Object(o.a)(Ce, 2),
          Be = ke[0],
          we = ke[1],
          Ie = Object(d.useState)(),
          Ne = Object(o.a)(Ie, 2),
          Se = Ne[0],
          Ee = Ne[1],
          Re = Object(d.useState)(),
          Fe = Object(o.a)(Re, 2),
          Te = Fe[0],
          _e = Fe[1],
          Ae = Object(d.useState)(!1),
          De = Object(o.a)(Ae, 2),
          Pe = De[0],
          qe = De[1],
          ze = Object(d.useState)(!1),
          Ke = Object(o.a)(ze, 2),
          He = Ke[0],
          Je = Ke[1],
          Le = Object(h.a)(f.b, { variables: { id: parseInt(T, 10) } }),
          Ue = Le.data,
          Ge = Le.loading,
          Ve = Le.refetch;
        Object(d.useEffect)(
          function () {
            qe(Object(R.d)(F));
          },
          [F]
        );
        var We = Object(O.a)(m.e, {
            onCompleted: function (e) {
              var t = e.deleteBoard,
                a = t.ok,
                c = t.err;
              a
                ? (p.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  n.push({
                    pathname: "/admin/".concat(u, "/").concat(_),
                    state: { refresh: !0 },
                  }))
                : (console.log(c),
                  p.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Me = Object(o.a)(We, 1)[0],
          Qe = Object(O.a)(m.f, {
            onCompleted: function (e) {
              var t = e.deleteFile,
                a = t.ok,
                c = t.err;
              a &&
                (p.b.success(
                  "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                ),
                Ve ? Ve() : (console.log(c), p.b.error(c)));
            },
          }),
          Xe = Object(o.a)(Qe, 1)[0],
          Ye = Object(O.a)(m.b),
          Ze = Object(o.a)(Ye, 1)[0],
          $e = Object(O.a)(m.c),
          et = Object(o.a)($e, 1)[0],
          tt = Object(O.a)(m.j, {
            onCompleted: function (e) {
              var t = e.editBoard,
                a = t.ok,
                c = t.err;
              a
                ? (p.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  n.push({
                    pathname: "/admin/".concat(u, "/").concat(_),
                    state: { refresh: !0 },
                  }))
                : (console.log(c),
                  p.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          at = Object(o.a)(tt, 1)[0],
          ct = Object(d.useCallback)(
            function () {
              Me({ variables: { id: parseInt(T, 10) } });
            },
            [T, Me]
          ),
          nt = Object(d.useCallback)(
            Object(l.a)(
              s.a.mark(function e() {
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          at({
                            variables: {
                              id: parseInt(T, 10),
                              title: ce,
                              content: ie,
                              link: ue,
                              private: Se,
                              showAttach: Te,
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
            [T, ce, ie, ue, at, Se, Te]
          ),
          rt = Object(d.useCallback)(
            (function () {
              var e = Object(l.a)(
                s.a.mark(function e(t, a) {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            N.a
                              .ref("/files/".concat(_, "/").concat(a))
                              .delete(),
                            (e.next = 3),
                            Xe({ variables: { id: t } })
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
            [Xe, _]
          ),
          lt = Object(d.useCallback)(
            function (e) {
              pe(me + 1),
                we(e.name),
                Je(!0),
                Object(E.a)(
                  "images",
                  e,
                  _,
                  e.name,
                  ye,
                  me,
                  pe,
                  et,
                  parseInt(T, 10)
                ),
                Je(!1),
                pe(0);
            },
            [_, me, et, T]
          ),
          ot = Object(d.useCallback)(
            function (e) {
              Je(!0),
                pe(me + 1),
                N.a
                  .ref("/files/".concat(_, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      N.a
                        .ref("/files/".concat(_, "/").concat(e.name))
                        .getDownloadURL()
                        .then(
                          (function () {
                            var t = Object(l.a)(
                              s.a.mark(function t(a) {
                                return s.a.wrap(function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          X(function (t) {
                                            return [].concat(Object(r.a)(t), [
                                              { url: a, fileName: e.name },
                                            ]);
                                          }),
                                          (t.next = 3),
                                          Ze({
                                            variables: {
                                              url: a,
                                              fileName: e.name,
                                              boardId: parseInt(T, 10),
                                            },
                                            onCompleted: function (e) {
                                              var t = e.createFile,
                                                a = t.ok,
                                                c = t.err;
                                              a
                                                ? (p.b.success(
                                                    "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  Ve && Ve())
                                                : (p.b.error(
                                                    "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  console.log(c));
                                            },
                                          })
                                        );
                                      case 3:
                                        Je(!1), pe(me - 1);
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
            [Ze, T, _, me, Ve]
          ),
          it = Object(d.useCallback)(
            function () {
              Be && Be.trim() && Object(S.a)("images", _, Be, ye);
            },
            [_, Be]
          );
        return (
          Object(d.useEffect)(
            function () {
              Ue &&
                Ue.getBoardById &&
                Ue.getBoardById.data &&
                (Ee(!!Ue.getBoardById.data.private),
                _e(!!Ue.getBoardById.data.showAttach),
                J(Ue.getBoardById.data),
                re(Ue.getBoardById.data.title || ""),
                se(Ue.getBoardById.data.content || ""),
                he(Ue.getBoardById.data.link || "")),
                Ue &&
                  Ue.getBoardById &&
                  Ue.getBoardById.data &&
                  Ue.getBoardById.data.files &&
                  V(Ue.getBoardById.data.files),
                Ue &&
                  Ue.getBoardById &&
                  Ue.getBoardById.data &&
                  Ue.getBoardById.data.images &&
                  ee(Ue.getBoardById.data.images);
            },
            [Ue, re, se, he]
          ),
          Object(d.useEffect)(
            function () {
              me < 0 && pe(0);
            },
            [me]
          ),
          Ge || !H
            ? Object(A.jsx)("div", { children: "loading..." })
            : Object(A.jsxs)(g.b, {
                children: [
                  Object(A.jsx)(g.a, {
                    type: "ghost",
                    onClick: function () {
                      return n.goBack();
                    },
                    children: "\ub4a4\ub85c",
                  }),
                  Object(A.jsxs)(v.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      Object(A.jsx)(v.b.Item, {
                        label: "\uc81c\ubaa9",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: Object(A.jsx)(x.a, {
                          placeholder:
                            (null === H || void 0 === H ? void 0 : H.title) ||
                            void 0,
                          value: ce,
                          onChange: ne,
                        }),
                      }),
                      Object(A.jsxs)(v.b.Item, {
                        label: "\ud30c\uc77c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          G && 0 !== G.length
                            ? Object(A.jsx)(A.Fragment, {
                                children: G.map(function (e, t) {
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
                                            return rt(e.id, e.fileName);
                                          },
                                          children: Object(A.jsx)(B.a, {}),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              })
                            : 0 === Q.length
                            ? Object(A.jsx)("div", {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              })
                            : Object(A.jsx)(A.Fragment, {}),
                          Object(A.jsx)(y.a, {
                            multiple: !0,
                            maxCount: 4,
                            className: "upload-list-inline",
                            customRequest: function (e) {
                              var t = e.file;
                              return ot(t);
                            },
                            onChange: function (e) {
                              var t = e.file;
                              0 !== Q.length
                                ? (t.status = "done")
                                : (t.status = "removed");
                            },
                            children: Object(A.jsx)(g.a, {
                              icon: Object(A.jsx)(w.a, {}),
                              children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                        ],
                      }),
                      Object(A.jsx)(v.b.Item, {
                        label: "\ud30c\uc77c\uacf5\uac1c",
                        span: 4,
                        labelStyle: { width: 120 },
                        children: Object(A.jsxs)("div", {
                          children: [
                            Object(A.jsx)("div", {
                              children: Te
                                ? Object(A.jsx)("span", {
                                    style: { color: "#0081fa" },
                                    children: "\uacf5\uac1c",
                                  })
                                : Object(A.jsx)("span", {
                                    style: { color: "#ff4447" },
                                    children: "\ube44\uacf5\uac1c",
                                  }),
                            }),
                            Object(A.jsx)("div", {
                              children: Object(A.jsx)(C.a, {
                                defaultChecked: !(
                                  null === Ue ||
                                  void 0 === Ue ||
                                  null === (e = Ue.getBoardById.data) ||
                                  void 0 === e ||
                                  !e.showAttach
                                ),
                                onChange: function () {
                                  return _e(!Te);
                                },
                              }),
                            }),
                          ],
                        }),
                      }),
                      "achievement" === u &&
                        Object(A.jsx)(v.b.Item, {
                          label: "\uacf5\uac1c",
                          span: 4,
                          children: Object(A.jsx)(C.a, {
                            defaultChecked:
                              null === Ue ||
                              void 0 === Ue ||
                              null === (t = Ue.getBoardById.data) ||
                              void 0 === t ||
                              !t.private,
                            onChange: function () {
                              return Ee(!Se);
                            },
                          }),
                        }),
                      Pe &&
                        Object(A.jsx)(v.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          children: Object(A.jsx)(x.a, {
                            placeholder:
                              (null === H || void 0 === H ? void 0 : H.link) ||
                              void 0,
                            value: ue,
                            onChange: je,
                          }),
                        }),
                      "achievement" === u &&
                        Object(A.jsxs)(v.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            $ && 0 !== $.length
                              ? Object(A.jsx)("div", {
                                  children: xe
                                    ? Object(A.jsx)("img", {
                                        src: xe,
                                        width: 300,
                                        alt: "upimage",
                                      })
                                    : Object(A.jsx)("img", {
                                        src: $[0].url,
                                        alt: "ima",
                                        width: 300,
                                      }),
                                })
                              : Object(A.jsx)("div", {
                                  children: "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                }),
                            Object(A.jsx)(y.a, {
                              multiple: !0,
                              maxCount: 1,
                              listType: "picture",
                              className: "upload-list-inline",
                              progress: { showInfo: !0 },
                              onRemove: function () {
                                return it();
                              },
                              customRequest: function (e) {
                                var t = e.file;
                                return lt(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== Q.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(A.jsx)(g.a, {
                                icon: Object(A.jsx)(w.a, {}),
                                children:
                                  "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                      Object(A.jsx)(v.b.Item, {
                        label: "\ub0b4\uc6a9",
                        span: 4,
                        children: Object(A.jsx)(q, {
                          modules: D,
                          formats: P,
                          value: ie || "",
                          onChange: function (e) {
                            se(e);
                          },
                          theme: "snow",
                        }),
                      }),
                    ],
                  }),
                  Object(A.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(A.jsx)(g.a, {
                        type: "primary",
                        onClick: function () {
                          return nt();
                        },
                        disabled: He,
                        children: Ge
                          ? Object(A.jsxs)(A.Fragment, {
                              children: [
                                Object(A.jsx)(I.a, {}),
                                "Uploading...",
                              ],
                            })
                          : "\uc5c5\ub85c\ub4dc",
                      }),
                      Object(A.jsx)(g.a, {
                        type: "primary",
                        danger: !0,
                        onClick: ct,
                        children: "\uc0ad\uc81c\ud558\uae30",
                      }),
                    ],
                  }),
                ],
              })
        );
      };
      var q = Object(_.a)(T.a)(
        c ||
          (c = Object(n.a)([
            "\n  background-color: white;\n  min-height: 300px;\n  .ql-container {\n    min-height: 300px;\n  }\n",
          ]))
      );
    },
  },
]);
//# sourceMappingURL=32.b655ea50.chunk.js.map
