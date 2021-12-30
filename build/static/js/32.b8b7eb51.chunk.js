(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [32],
  {
    327: function (e, t, a) {
      "use strict";
      var n = a(6),
        c = a(88),
        r = a(2),
        l = a(89),
        o = a(96),
        i = a(87),
        s = a.n(i),
        d = a(123),
        b = a(124),
        u = r.forwardRef(function (e, t) {
          var a,
            n = e.prefixCls,
            i = void 0 === n ? "rc-switch" : n,
            u = e.className,
            j = e.checked,
            O = e.defaultChecked,
            h = e.disabled,
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
            C = Object(d.a)(!1, { value: j, defaultValue: O }),
            k = Object(l.a)(C, 2),
            B = k[0],
            I = k[1];
          function w(e, t) {
            var a = B;
            return h || (I((a = e)), null === v || void 0 === v || v(a, t)), a;
          }
          var N = s()(
            i,
            u,
            ((a = {}),
            Object(c.a)(a, "".concat(i, "-checked"), B),
            Object(c.a)(a, "".concat(i, "-disabled"), h),
            a)
          );
          return r.createElement(
            "button",
            Object.assign({}, y, {
              type: "button",
              role: "switch",
              "aria-checked": B,
              disabled: h,
              className: N,
              ref: t,
              onKeyDown: function (e) {
                e.which === b.a.LEFT
                  ? w(!1, e)
                  : e.which === b.a.RIGHT && w(!0, e),
                  null === x || void 0 === x || x(e);
              },
              onClick: function (e) {
                var t = w(!B, e);
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
        O = a(139),
        h = a(193),
        f = a(170),
        m = a(116),
        p = a(99),
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
            I = r.createElement(
              "div",
              { className: "".concat(B, "-handle") },
              i &&
                r.createElement(O.a, {
                  className: "".concat(B, "-loading-icon"),
                })
            ),
            w = s()(
              ((a = {}),
              Object(c.a)(a, "".concat(B, "-small"), "small" === (o || k)),
              Object(c.a)(a, "".concat(B, "-loading"), i),
              Object(c.a)(a, "".concat(B, "-rtl"), "rtl" === C),
              a),
              b
            );
          return r.createElement(
            h.a,
            { insertExtraNode: !0 },
            r.createElement(
              j,
              Object(n.a)({}, v, {
                prefixCls: B,
                className: w,
                disabled: u || i,
                ref: t,
                loadingIcon: I,
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
      var n,
        c = a(94),
        r = a(92),
        l = a(114),
        o = a(89),
        i = a(112),
        s = a.n(i),
        d = a(2),
        b = a(4),
        u = a(167),
        j = a.n(u),
        O = a(140),
        h = a(165),
        f = a(122),
        m = a(104),
        p = a(45),
        g = a(320),
        v = a(245),
        x = a(494),
        y = a(541),
        C = a(327),
        k = a(131),
        B = a(500),
        I = a(561),
        w = a(139),
        N = a(115),
        S = a(157),
        E = a(158),
        R = a(133),
        F = a(196),
        T = a.n(F),
        _ = (a(198), a(103)),
        D = a(11),
        P = {
          toolbar: [
            [{ header: [1, 2, !1] }],
            ["bold", "italic"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["clean"],
          ],
        },
        q = ["header", "bold", "italic", "underline", "list"];
      t.default = function () {
        var e,
          t = Object(b.h)().search,
          a = j.a.parse(t),
          n = Object(b.g)(),
          c = Object(b.i)(),
          i = c.param,
          u = c.subparam,
          F = a.id,
          T = a.category,
          _ = Object(d.useState)(),
          K = Object(o.a)(_, 2),
          H = K[0],
          J = K[1],
          L = Object(d.useState)(),
          U = Object(o.a)(L, 2),
          A = U[0],
          G = U[1],
          V = Object(d.useState)([]),
          W = Object(o.a)(V, 2),
          M = W[0],
          Q = W[1],
          X = Object(d.useState)(),
          Y = Object(o.a)(X, 2),
          Z = Y[0],
          $ = Y[1],
          ee = Object(k.a)(""),
          te = Object(o.a)(ee, 3),
          ae = te[0],
          ne = te[1],
          ce = te[2],
          re = Object(d.useState)(""),
          le = Object(o.a)(re, 2),
          oe = le[0],
          ie = le[1],
          se = Object(k.a)(""),
          de = Object(o.a)(se, 3),
          be = de[0],
          ue = de[1],
          je = de[2],
          Oe = Object(d.useState)(0),
          he = Object(o.a)(Oe, 2),
          fe = he[0],
          me = he[1],
          pe = Object(d.useState)(),
          ge = Object(o.a)(pe, 2),
          ve = ge[0],
          xe = ge[1],
          ye = Object(d.useState)(),
          Ce = Object(o.a)(ye, 2),
          ke = Ce[0],
          Be = Ce[1],
          Ie = Object(d.useState)(),
          we = Object(o.a)(Ie, 2),
          Ne = we[0],
          Se = we[1],
          Ee = Object(d.useState)(!1),
          Re = Object(o.a)(Ee, 2),
          Fe = Re[0],
          Te = Re[1],
          _e = Object(d.useState)(!1),
          De = Object(o.a)(_e, 2),
          Pe = De[0],
          qe = De[1],
          ze = Object(O.a)(f.b, { variables: { id: parseInt(F, 10) } }),
          Ke = ze.data,
          He = ze.loading,
          Je = ze.refetch;
        Object(d.useEffect)(
          function () {
            Te(Object(R.d)(u));
          },
          [u]
        );
        var Le = Object(h.a)(m.e, {
            onCompleted: function (e) {
              var t = e.deleteBoard,
                a = t.ok,
                c = t.err;
              a
                ? (p.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  n.push({
                    pathname: "/admin/".concat(i, "/").concat(T),
                    state: { refresh: !0 },
                  }))
                : (console.log(c),
                  p.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Ue = Object(o.a)(Le, 1)[0],
          Ae = Object(h.a)(m.f, {
            onCompleted: function (e) {
              var t = e.deleteFile,
                a = t.ok,
                n = t.err;
              a &&
                (p.b.success(
                  "\ud30c\uc77c\uc774 \uc0ad\uc81c \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                ),
                Je ? Je() : (console.log(n), p.b.error(n)));
            },
          }),
          Ge = Object(o.a)(Ae, 1)[0],
          Ve = Object(h.a)(m.b),
          We = Object(o.a)(Ve, 1)[0],
          Me = Object(h.a)(m.c),
          Qe = Object(o.a)(Me, 1)[0],
          Xe = Object(h.a)(m.j, {
            onCompleted: function (e) {
              var t = e.editBoard,
                a = t.ok,
                c = t.err;
              a
                ? (p.b.success(
                    "\uac8c\uc2dc\ubb3c\uc774 \uc218\uc815 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                  ),
                  n.push({
                    pathname: "/admin/".concat(i, "/").concat(T),
                    state: { refresh: !0 },
                  }))
                : (console.log(c),
                  p.b.error(
                    "\uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                  ));
            },
          }),
          Ye = Object(o.a)(Xe, 1)[0],
          Ze = Object(d.useCallback)(
            function () {
              Ue({ variables: { id: parseInt(F, 10) } });
            },
            [F, Ue]
          ),
          $e = Object(d.useCallback)(
            Object(l.a)(
              s.a.mark(function e() {
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          Ye({
                            variables: {
                              id: parseInt(F, 10),
                              title: ae,
                              content: oe,
                              link: be,
                              private: Ne,
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
            [F, ae, oe, be, Ye, Ne]
          ),
          et = Object(d.useCallback)(
            (function () {
              var e = Object(l.a)(
                s.a.mark(function e(t, a) {
                  return s.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            N.a
                              .ref("/files/".concat(T, "/").concat(a))
                              .delete(),
                            (e.next = 3),
                            Ge({ variables: { id: t } })
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
            [Ge, T]
          ),
          tt = Object(d.useCallback)(
            function (e) {
              me(fe + 1),
                Be(e.name),
                qe(!0),
                Object(E.a)(
                  "images",
                  e,
                  T,
                  e.name,
                  xe,
                  fe,
                  me,
                  Qe,
                  parseInt(F, 10)
                ),
                qe(!1),
                me(0);
            },
            [T, fe, Qe, F]
          ),
          at = Object(d.useCallback)(
            function (e) {
              qe(!0),
                me(fe + 1),
                N.a
                  .ref("/files/".concat(T, "/").concat(e.name))
                  .put(e)
                  .on(
                    "state_changed",
                    function (e) {},
                    function (e) {
                      return console.log(e);
                    },
                    function () {
                      N.a
                        .ref("/files/".concat(T, "/").concat(e.name))
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
                                          Q(function (t) {
                                            return [].concat(Object(r.a)(t), [
                                              { url: a, fileName: e.name },
                                            ]);
                                          }),
                                          (t.next = 3),
                                          We({
                                            variables: {
                                              url: a,
                                              fileName: e.name,
                                              boardId: parseInt(F, 10),
                                            },
                                            onCompleted: function (e) {
                                              var t = e.createFile,
                                                a = t.ok,
                                                n = t.err;
                                              a
                                                ? (p.b.success(
                                                    "\ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  Je && Je())
                                                : (p.b.error(
                                                    "\ud30c\uc77c \uc5c5\ub85c\ub4dc\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4"
                                                  ),
                                                  console.log(n));
                                            },
                                          })
                                        );
                                      case 3:
                                        qe(!1), me(fe - 1);
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
            [We, F, T, fe, Je]
          ),
          nt = Object(d.useCallback)(
            function () {
              ke && ke.trim() && Object(S.a)("images", T, ke, xe);
            },
            [T, ke]
          );
        return (
          Object(d.useEffect)(
            function () {
              Ke &&
                Ke.getBoardById &&
                Ke.getBoardById.data &&
                (Se(!!Ke.getBoardById.data.private),
                J(Ke.getBoardById.data),
                ce(Ke.getBoardById.data.title || ""),
                ie(Ke.getBoardById.data.content || ""),
                je(Ke.getBoardById.data.link || "")),
                Ke &&
                  Ke.getBoardById &&
                  Ke.getBoardById.data &&
                  Ke.getBoardById.data.files &&
                  G(Ke.getBoardById.data.files),
                Ke &&
                  Ke.getBoardById &&
                  Ke.getBoardById.data &&
                  Ke.getBoardById.data.images &&
                  $(Ke.getBoardById.data.images);
            },
            [Ke, ce, ie, je]
          ),
          Object(d.useEffect)(
            function () {
              fe < 0 && me(0);
            },
            [fe]
          ),
          He || !H
            ? Object(D.jsx)("div", { children: "loading..." })
            : Object(D.jsxs)(g.b, {
                children: [
                  Object(D.jsx)(g.a, {
                    type: "ghost",
                    onClick: function () {
                      return n.goBack();
                    },
                    children: "\ub4a4\ub85c",
                  }),
                  Object(D.jsxs)(v.b, {
                    bordered: !0,
                    column: { xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 },
                    layout: "horizontal",
                    children: [
                      Object(D.jsx)(v.b.Item, {
                        label: "\uc81c\ubaa9",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: Object(D.jsx)(x.a, {
                          placeholder:
                            (null === H || void 0 === H ? void 0 : H.title) ||
                            void 0,
                          value: ae,
                          onChange: ne,
                        }),
                      }),
                      Object(D.jsxs)(v.b.Item, {
                        label: "\ud30c\uc77c",
                        span: 4,
                        labelStyle: { width: 100 },
                        children: [
                          A && 0 !== A.length
                            ? Object(D.jsx)(D.Fragment, {
                                children: A.map(function (e, t) {
                                  return Object(D.jsxs)(
                                    "div",
                                    {
                                      className: "attach-group",
                                      children: [
                                        Object(D.jsx)("a", {
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
                                        Object(D.jsx)("button", {
                                          className: "attach-button",
                                          onClick: function () {
                                            return et(e.id, e.fileName);
                                          },
                                          children: Object(D.jsx)(B.a, {}),
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }),
                              })
                            : 0 === M.length
                            ? Object(D.jsx)("div", {
                                children:
                                  "\ucca8\ubd80\ud30c\uc77c \uc5c6\uc74c",
                              })
                            : Object(D.jsx)(D.Fragment, {}),
                          Object(D.jsx)(y.a, {
                            multiple: !0,
                            maxCount: 4,
                            className: "upload-list-inline",
                            customRequest: function (e) {
                              var t = e.file;
                              return at(t);
                            },
                            onChange: function (e) {
                              var t = e.file;
                              0 !== M.length
                                ? (t.status = "done")
                                : (t.status = "removed");
                            },
                            children: Object(D.jsx)(g.a, {
                              icon: Object(D.jsx)(I.a, {}),
                              children: "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
                            }),
                          }),
                        ],
                      }),
                      "achievement" === i &&
                        Object(D.jsx)(v.b.Item, {
                          label: "\uacf5\uac1c",
                          span: 4,
                          children: Object(D.jsx)(C.a, {
                            defaultChecked:
                              null === Ke ||
                              void 0 === Ke ||
                              null === (e = Ke.getBoardById.data) ||
                              void 0 === e ||
                              !e.private,
                            onChange: function () {
                              return Se(!Ne);
                            },
                          }),
                        }),
                      Fe &&
                        Object(D.jsx)(v.b.Item, {
                          label: "\ub9c1\ud06c",
                          span: 4,
                          children: Object(D.jsx)(x.a, {
                            placeholder:
                              (null === H || void 0 === H ? void 0 : H.link) ||
                              void 0,
                            value: be,
                            onChange: ue,
                          }),
                        }),
                      "achievement" === i &&
                        Object(D.jsxs)(v.b.Item, {
                          label: "\uc774\ubbf8\uc9c0",
                          span: 4,
                          labelStyle: { width: 100 },
                          children: [
                            Z && 0 !== Z.length
                              ? Object(D.jsx)("div", {
                                  children: ve
                                    ? Object(D.jsx)("img", {
                                        src: ve,
                                        width: 300,
                                        alt: "upimage",
                                      })
                                    : Object(D.jsx)("img", {
                                        src: Z[0].url,
                                        alt: "ima",
                                        width: 300,
                                      }),
                                })
                              : Object(D.jsx)("div", {
                                  children: "\uc774\ubbf8\uc9c0 \uc5c6\uc74c",
                                }),
                            Object(D.jsx)(y.a, {
                              multiple: !0,
                              maxCount: 1,
                              listType: "picture",
                              className: "upload-list-inline",
                              progress: { showInfo: !0 },
                              onRemove: function () {
                                return nt();
                              },
                              customRequest: function (e) {
                                var t = e.file;
                                return tt(t);
                              },
                              onChange: function (e) {
                                var t = e.file;
                                0 !== M.length
                                  ? (t.status = "done")
                                  : (t.status = "removed");
                              },
                              children: Object(D.jsx)(g.a, {
                                icon: Object(D.jsx)(I.a, {}),
                                children:
                                  "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc",
                              }),
                            }),
                          ],
                        }),
                      Object(D.jsx)(v.b.Item, {
                        label: "\ub0b4\uc6a9",
                        span: 4,
                        children: Object(D.jsx)(z, {
                          modules: P,
                          formats: q,
                          value: oe || "",
                          onChange: function (e) {
                            ie(e);
                          },
                          theme: "snow",
                        }),
                      }),
                    ],
                  }),
                  Object(D.jsxs)("div", {
                    className: "button-group",
                    children: [
                      Object(D.jsx)(g.a, {
                        type: "primary",
                        onClick: function () {
                          return $e();
                        },
                        disabled: Pe,
                        children: He
                          ? Object(D.jsxs)(D.Fragment, {
                              children: [
                                Object(D.jsx)(w.a, {}),
                                "Uploading...",
                              ],
                            })
                          : "\uc5c5\ub85c\ub4dc",
                      }),
                      Object(D.jsx)(g.a, {
                        type: "primary",
                        danger: !0,
                        onClick: Ze,
                        children: "\uc0ad\uc81c\ud558\uae30",
                      }),
                    ],
                  }),
                ],
              })
        );
      };
      var z = Object(_.a)(T.a)(
        n ||
          (n = Object(c.a)([
            "\n  background-color: white;\n  min-height: 300px;\n  .ql-container {\n    min-height: 300px;\n  }\n",
          ]))
      );
    },
  },
]);
//# sourceMappingURL=32.b8b7eb51.chunk.js.map
