(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [9],
  {
    254: function (e, t, n) {
      "use strict";
      var a = n(6),
        r = n(97),
        o = n(98),
        l = n(102),
        c = n(103),
        i = n(2),
        s = n(185),
        u = n(87),
        d = n.n(u),
        p = n(106),
        m = n(260),
        f = n(306),
        b = Object(i.createContext)({
          prefixCls: "",
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        v = n(111);
      var y = function (e) {
          var t,
            n,
            r = e.popupClassName,
            o = e.icon,
            l = e.title,
            c = i.useContext(b),
            u = c.prefixCls,
            m = c.inlineCollapsed,
            f = c.antdMenuTheme,
            y = Object(s.g)();
          if (o) {
            var O = Object(v.b)(l) && "span" === l.type;
            n = i.createElement(
              i.Fragment,
              null,
              Object(v.a)(o, {
                className: d()(
                  Object(v.b)(o)
                    ? null === (t = o.props) || void 0 === t
                      ? void 0
                      : t.className
                    : "",
                  "".concat(u, "-item-icon")
                ),
              }),
              O
                ? l
                : i.createElement(
                    "span",
                    { className: "".concat(u, "-title-content") },
                    l
                  )
            );
          } else
            n =
              m && !y.length && l && "string" === typeof l
                ? i.createElement(
                    "div",
                    { className: "".concat(u, "-inline-collapsed-noicon") },
                    l.charAt(0)
                  )
                : i.createElement(
                    "span",
                    { className: "".concat(u, "-title-content") },
                    l
                  );
          var h = i.useMemo(
            function () {
              return Object(a.a)(Object(a.a)({}, c), { firstLevel: !1 });
            },
            [c]
          );
          return i.createElement(
            b.Provider,
            { value: h },
            i.createElement(
              s.e,
              Object(a.a)({}, Object(p.a)(e, ["icon"]), {
                title: n,
                popupClassName: d()(u, "".concat(u, "-").concat(f), r),
              })
            )
          );
        },
        O = n(88),
        h = n(112),
        g = n(186),
        C = n(257),
        j = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        x = (function (e) {
          Object(l.a)(n, e);
          var t = Object(c.a)(n);
          function n() {
            var e;
            return (
              Object(r.a)(this, n),
              ((e = t.apply(this, arguments)).renderItem = function (t) {
                var n,
                  r,
                  o = t.siderCollapsed,
                  l = e.context,
                  c = l.prefixCls,
                  u = l.firstLevel,
                  p = l.inlineCollapsed,
                  m = l.direction,
                  f = e.props,
                  b = f.className,
                  y = f.children,
                  C = e.props,
                  x = C.title,
                  N = C.icon,
                  E = C.danger,
                  w = j(C, ["title", "icon", "danger"]),
                  P = x;
                "undefined" === typeof x
                  ? (P = u ? y : "")
                  : !1 === x && (P = "");
                var S = { title: P };
                o || p || ((S.title = null), (S.visible = !1));
                var k = Object(h.a)(y).length;
                return i.createElement(
                  g.a,
                  Object(a.a)({}, S, {
                    placement: "rtl" === m ? "left" : "right",
                    overlayClassName: "".concat(c, "-inline-collapsed-tooltip"),
                  }),
                  i.createElement(
                    s.b,
                    Object(a.a)({}, w, {
                      className: d()(
                        ((n = {}),
                        Object(O.a)(n, "".concat(c, "-item-danger"), E),
                        Object(O.a)(
                          n,
                          "".concat(c, "-item-only-child"),
                          1 === (N ? k + 1 : k)
                        ),
                        n),
                        b
                      ),
                      title: "string" === typeof x ? x : void 0,
                    }),
                    Object(v.a)(N, {
                      className: d()(
                        Object(v.b)(N)
                          ? null === (r = N.props) || void 0 === r
                            ? void 0
                            : r.className
                          : "",
                        "".concat(c, "-item-icon")
                      ),
                    }),
                    e.renderItemChildren(p)
                  )
                );
              }),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "renderItemChildren",
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    a = t.firstLevel,
                    r = this.props,
                    o = r.icon,
                    l = r.children,
                    c = i.createElement(
                      "span",
                      { className: "".concat(n, "-title-content") },
                      l
                    );
                  return (!o || (Object(v.b)(l) && "span" === l.type)) &&
                    l &&
                    e &&
                    a &&
                    "string" === typeof l
                    ? i.createElement(
                        "div",
                        { className: "".concat(n, "-inline-collapsed-noicon") },
                        l.charAt(0)
                      )
                    : c;
                },
              },
              {
                key: "render",
                value: function () {
                  return i.createElement(C.a.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(i.Component);
      x.contextType = b;
      var N = n(187),
        E = n(99),
        w = n(151),
        P = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        S = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.dashed,
            o = P(e, ["prefixCls", "className", "dashed"]),
            l = (0, i.useContext(N.b).getPrefixCls)("menu", t),
            c = d()(
              Object(O.a)({}, "".concat(l, "-item-divider-dashed"), !!r),
              n
            );
          return i.createElement(s.a, Object(a.a)({ className: c }, o));
        },
        k = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        I = (function (e) {
          Object(l.a)(n, e);
          var t = Object(c.a)(n);
          function n(e) {
            var o;
            return (
              Object(r.a)(this, n),
              ((o = t.call(this, e)).renderMenu = function (e) {
                var t = e.getPopupContainer,
                  n = e.getPrefixCls,
                  r = e.direction,
                  l = n(),
                  c = o.props,
                  u = c.prefixCls,
                  y = c.className,
                  O = c.theme,
                  h = c.expandIcon,
                  g = k(c, ["prefixCls", "className", "theme", "expandIcon"]),
                  C = Object(p.a)(g, ["siderCollapsed", "collapsedWidth"]),
                  j = o.getInlineCollapsed(),
                  x = {
                    horizontal: { motionName: "".concat(l, "-slide-up") },
                    inline: w.a,
                    other: { motionName: "".concat(l, "-zoom-big") },
                  },
                  N = n("menu", u),
                  E = d()("".concat(N, "-").concat(O), y),
                  P = Object(f.a)(function (e, t, n, a) {
                    return {
                      prefixCls: e,
                      inlineCollapsed: t || !1,
                      antdMenuTheme: n,
                      direction: a,
                      firstLevel: !0,
                    };
                  })(N, j, O, r);
                return i.createElement(
                  b.Provider,
                  { value: P },
                  i.createElement(
                    s.f,
                    Object(a.a)(
                      {
                        getPopupContainer: t,
                        overflowedIndicator: i.createElement(m.a, null),
                        overflowedIndicatorPopupClassName: ""
                          .concat(N, "-")
                          .concat(O),
                      },
                      C,
                      {
                        inlineCollapsed: j,
                        className: E,
                        prefixCls: N,
                        direction: r,
                        defaultMotions: x,
                        expandIcon: Object(v.a)(h, {
                          className: "".concat(N, "-submenu-expand-icon"),
                        }),
                      }
                    )
                  )
                );
              }),
              Object(E.a)(
                !("inlineCollapsed" in e && "inline" !== e.mode),
                "Menu",
                "`inlineCollapsed` should only be used when `mode` is inline."
              ),
              Object(E.a)(
                !(void 0 !== e.siderCollapsed && "inlineCollapsed" in e),
                "Menu",
                "`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead."
              ),
              o
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "getInlineCollapsed",
                value: function () {
                  var e = this.props,
                    t = e.inlineCollapsed,
                    n = e.siderCollapsed;
                  return void 0 !== n ? n : t;
                },
              },
              {
                key: "render",
                value: function () {
                  return i.createElement(N.a, null, this.renderMenu);
                },
              },
            ]),
            n
          );
        })(i.Component);
      I.defaultProps = { theme: "light" };
      var L = (function (e) {
        Object(l.a)(n, e);
        var t = Object(c.a)(n);
        function n() {
          return Object(r.a)(this, n), t.apply(this, arguments);
        }
        return (
          Object(o.a)(n, [
            {
              key: "render",
              value: function () {
                var e = this;
                return i.createElement(C.a.Consumer, null, function (t) {
                  return i.createElement(I, Object(a.a)({}, e.props, t));
                });
              },
            },
          ]),
          n
        );
      })(i.Component);
      (L.Divider = S), (L.Item = x), (L.SubMenu = y), (L.ItemGroup = s.c);
      t.a = L;
    },
    257: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return j;
      });
      var a = n(88),
        r = n(6),
        o = n(89),
        l = n(2),
        c = n(87),
        i = n.n(c),
        s = n(106),
        u = n(90),
        d = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "0 0 1024 1024", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z",
                },
              },
            ],
          },
          name: "bars",
          theme: "outlined",
        },
        p = n(93),
        m = function (e, t) {
          return l.createElement(
            p.a,
            Object(u.a)(Object(u.a)({}, e), {}, { ref: t, icon: d })
          );
        };
      m.displayName = "BarsOutlined";
      var f = l.forwardRef(m),
        b = n(261),
        v = n(334),
        y = n(307),
        O = n(187),
        h = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        g = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        C = {
          xs: "479.98px",
          sm: "575.98px",
          md: "767.98px",
          lg: "991.98px",
          xl: "1199.98px",
          xxl: "1599.98px",
        },
        j = l.createContext({}),
        x = (function () {
          var e = 0;
          return function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (e += 1), "".concat(t).concat(e);
          };
        })(),
        N = l.forwardRef(function (e, t) {
          var n = e.prefixCls,
            c = e.className,
            u = e.trigger,
            d = e.children,
            p = e.defaultCollapsed,
            m = void 0 !== p && p,
            N = e.theme,
            E = void 0 === N ? "dark" : N,
            w = e.style,
            P = void 0 === w ? {} : w,
            S = e.collapsible,
            k = void 0 !== S && S,
            I = e.reverseArrow,
            L = void 0 !== I && I,
            M = e.width,
            T = void 0 === M ? 200 : M,
            z = e.collapsedWidth,
            D = void 0 === z ? 80 : z,
            R = e.zeroWidthTriggerStyle,
            A = e.breakpoint,
            H = e.onCollapse,
            W = e.onBreakpoint,
            B = g(e, [
              "prefixCls",
              "className",
              "trigger",
              "children",
              "defaultCollapsed",
              "theme",
              "style",
              "collapsible",
              "reverseArrow",
              "width",
              "collapsedWidth",
              "zeroWidthTriggerStyle",
              "breakpoint",
              "onCollapse",
              "onBreakpoint",
            ]),
            F = Object(l.useContext)(y.d).siderHook,
            V = Object(l.useState)("collapsed" in B ? B.collapsed : m),
            _ = Object(o.a)(V, 2),
            G = _[0],
            J = _[1],
            U = Object(l.useState)(!1),
            q = Object(o.a)(U, 2),
            K = q[0],
            Q = q[1];
          Object(l.useEffect)(
            function () {
              "collapsed" in B && J(B.collapsed);
            },
            [B.collapsed]
          );
          var X = function (e, t) {
              "collapsed" in B || J(e), null === H || void 0 === H || H(e, t);
            },
            Y = Object(l.useRef)();
          (Y.current = function (e) {
            Q(e.matches),
              null === W || void 0 === W || W(e.matches),
              G !== e.matches && X(e.matches, "responsive");
          }),
            Object(l.useEffect)(function () {
              function e(e) {
                return Y.current(e);
              }
              var t;
              if ("undefined" !== typeof window) {
                var n = window.matchMedia;
                if (n && A && A in C) {
                  t = n("(max-width: ".concat(C[A], ")"));
                  try {
                    t.addEventListener("change", e);
                  } catch (a) {
                    t.addListener(e);
                  }
                  e(t);
                }
              }
              return function () {
                try {
                  null === t ||
                    void 0 === t ||
                    t.removeEventListener("change", e);
                } catch (a) {
                  null === t || void 0 === t || t.removeListener(e);
                }
              };
            }, []),
            Object(l.useEffect)(function () {
              var e = x("ant-sider-");
              return (
                F.addSider(e),
                function () {
                  return F.removeSider(e);
                }
              );
            }, []);
          var Z = function () {
              X(!G, "clickTrigger");
            },
            $ = Object(l.useContext)(O.b).getPrefixCls,
            ee = l.useMemo(
              function () {
                return { siderCollapsed: G };
              },
              [G]
            );
          return l.createElement(
            j.Provider,
            { value: ee },
            (function () {
              var e,
                o = $("layout-sider", n),
                p = Object(s.a)(B, ["collapsed"]),
                m = G ? D : T,
                y = h(m) ? "".concat(m, "px") : String(m),
                O =
                  0 === parseFloat(String(D || 0))
                    ? l.createElement(
                        "span",
                        {
                          onClick: Z,
                          className: i()(
                            "".concat(o, "-zero-width-trigger"),
                            ""
                              .concat(o, "-zero-width-trigger-")
                              .concat(L ? "right" : "left")
                          ),
                          style: R,
                        },
                        u || l.createElement(f, null)
                      )
                    : null,
                g = {
                  expanded: L
                    ? l.createElement(b.a, null)
                    : l.createElement(v.a, null),
                  collapsed: L
                    ? l.createElement(v.a, null)
                    : l.createElement(b.a, null),
                }[G ? "collapsed" : "expanded"],
                C =
                  null !== u
                    ? O ||
                      l.createElement(
                        "div",
                        {
                          className: "".concat(o, "-trigger"),
                          onClick: Z,
                          style: { width: y },
                        },
                        u || g
                      )
                    : null,
                j = Object(r.a)(Object(r.a)({}, P), {
                  flex: "0 0 ".concat(y),
                  maxWidth: y,
                  minWidth: y,
                  width: y,
                }),
                x = i()(
                  o,
                  "".concat(o, "-").concat(E),
                  ((e = {}),
                  Object(a.a)(e, "".concat(o, "-collapsed"), !!G),
                  Object(a.a)(
                    e,
                    "".concat(o, "-has-trigger"),
                    k && null !== u && !O
                  ),
                  Object(a.a)(e, "".concat(o, "-below"), !!K),
                  Object(a.a)(
                    e,
                    "".concat(o, "-zero-width"),
                    0 === parseFloat(y)
                  ),
                  e),
                  c
                );
              return l.createElement(
                "aside",
                Object(r.a)({ className: x }, p, { style: j, ref: t }),
                l.createElement(
                  "div",
                  { className: "".concat(o, "-children") },
                  d
                ),
                k || (K && O) ? C : null
              );
            })()
          );
        });
      N.displayName = "Sider";
      t.b = N;
    },
    262: function (e, t, n) {
      "use strict";
      var a = n(6),
        r = n(88),
        o = n(2),
        l = n(329),
        c = n(87),
        i = n.n(c),
        s = n(261),
        u = n(89),
        d = n(260),
        p = n(216),
        m = n(187),
        f = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        b = p.a.Group,
        v = function (e) {
          var t = o.useContext(m.b),
            n = t.getPopupContainer,
            r = t.getPrefixCls,
            l = t.direction,
            c = e.prefixCls,
            s = e.type,
            v = void 0 === s ? "default" : s,
            y = e.disabled,
            O = e.onClick,
            h = e.htmlType,
            g = e.children,
            C = e.className,
            x = e.overlay,
            N = e.trigger,
            E = e.align,
            w = e.visible,
            P = e.onVisibleChange,
            S = e.placement,
            k = e.getPopupContainer,
            I = e.href,
            L = e.icon,
            M = void 0 === L ? o.createElement(d.a, null) : L,
            T = e.title,
            z = e.buttonsRender,
            D =
              void 0 === z
                ? function (e) {
                    return e;
                  }
                : z,
            R = e.mouseEnterDelay,
            A = e.mouseLeaveDelay,
            H = e.overlayClassName,
            W = e.overlayStyle,
            B = f(e, [
              "prefixCls",
              "type",
              "disabled",
              "onClick",
              "htmlType",
              "children",
              "className",
              "overlay",
              "trigger",
              "align",
              "visible",
              "onVisibleChange",
              "placement",
              "getPopupContainer",
              "href",
              "icon",
              "title",
              "buttonsRender",
              "mouseEnterDelay",
              "mouseLeaveDelay",
              "overlayClassName",
              "overlayStyle",
            ]),
            F = r("dropdown-button", c),
            V = {
              align: E,
              overlay: x,
              disabled: y,
              trigger: y ? [] : N,
              onVisibleChange: P,
              getPopupContainer: k || n,
              mouseEnterDelay: R,
              mouseLeaveDelay: A,
              overlayClassName: H,
              overlayStyle: W,
            };
          "visible" in e && (V.visible = w),
            (V.placement =
              "placement" in e
                ? S
                : "rtl" === l
                ? "bottomLeft"
                : "bottomRight");
          var _ = D([
              o.createElement(
                p.a,
                {
                  type: v,
                  disabled: y,
                  onClick: O,
                  htmlType: h,
                  href: I,
                  title: T,
                },
                g
              ),
              o.createElement(p.a, { type: v, icon: M }),
            ]),
            G = Object(u.a)(_, 2),
            J = G[0],
            U = G[1];
          return o.createElement(
            b,
            Object(a.a)({}, B, { className: i()(F, C) }),
            J,
            o.createElement(j, V, U)
          );
        };
      v.__ANT_BUTTON = !0;
      var y = v,
        O = n(99),
        h = n(136),
        g = n(111),
        C =
          (Object(h.a)(
            "topLeft",
            "topCenter",
            "topRight",
            "bottomLeft",
            "bottomCenter",
            "bottomRight"
          ),
          function (e) {
            var t,
              n = o.useContext(m.b),
              c = n.getPopupContainer,
              u = n.getPrefixCls,
              d = n.direction,
              p = e.arrow,
              f = e.prefixCls,
              b = e.children,
              v = e.trigger,
              y = e.disabled,
              h = e.getPopupContainer,
              C = e.overlayClassName,
              j = u("dropdown", f),
              x = o.Children.only(b),
              N = Object(g.a)(x, {
                className: i()(
                  "".concat(j, "-trigger"),
                  Object(r.a)({}, "".concat(j, "-rtl"), "rtl" === d),
                  x.props.className
                ),
                disabled: y,
              }),
              E = i()(C, Object(r.a)({}, "".concat(j, "-rtl"), "rtl" === d)),
              w = y ? [] : v;
            return (
              w && -1 !== w.indexOf("contextMenu") && (t = !0),
              o.createElement(
                l.a,
                Object(a.a)({ arrow: p, alignPoint: t }, e, {
                  overlayClassName: E,
                  prefixCls: j,
                  getPopupContainer: h || c,
                  transitionName: (function () {
                    var t = u(),
                      n = e.placement,
                      a = void 0 === n ? "" : n,
                      r = e.transitionName;
                    return void 0 !== r
                      ? r
                      : a.indexOf("top") >= 0
                      ? "".concat(t, "-slide-down")
                      : "".concat(t, "-slide-up");
                  })(),
                  trigger: w,
                  overlay: function () {
                    return (function (t) {
                      var n,
                        a = e.overlay;
                      n = "function" === typeof a ? a() : a;
                      var r = (n = o.Children.only(
                        "string" === typeof n
                          ? o.createElement("span", null, n)
                          : n
                      )).props;
                      Object(O.a)(
                        !r.mode || "vertical" === r.mode,
                        "Dropdown",
                        'mode="'.concat(
                          r.mode,
                          "\" is not supported for Dropdown's Menu."
                        )
                      );
                      var l = r.selectable,
                        c = void 0 !== l && l,
                        i = r.expandIcon,
                        u =
                          "undefined" !== typeof i && o.isValidElement(i)
                            ? i
                            : o.createElement(
                                "span",
                                {
                                  className: "".concat(
                                    t,
                                    "-menu-submenu-arrow"
                                  ),
                                },
                                o.createElement(s.a, {
                                  className: "".concat(
                                    t,
                                    "-menu-submenu-arrow-icon"
                                  ),
                                })
                              );
                      return "string" === typeof n.type
                        ? n
                        : Object(g.a)(n, {
                            mode: "vertical",
                            selectable: c,
                            expandIcon: u,
                          });
                    })(j);
                  },
                  placement: (function () {
                    var t = e.placement;
                    return void 0 !== t
                      ? t
                      : "rtl" === d
                      ? "bottomRight"
                      : "bottomLeft";
                  })(),
                }),
                N
              )
            );
          });
      (C.Button = y),
        (C.defaultProps = { mouseEnterDelay: 0.15, mouseLeaveDelay: 0.1 });
      var j = (t.a = C);
    },
    306: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a =
        Number.isNaN ||
        function (e) {
          return "number" === typeof e && e !== e;
        };
      function r(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
          if (((r = e[n]), (o = t[n]), !(r === o || (a(r) && a(o))))) return !1;
        var r, o;
        return !0;
      }
      function o(e, t) {
        void 0 === t && (t = r);
        var n = null;
        function a() {
          for (var a = [], r = 0; r < arguments.length; r++)
            a[r] = arguments[r];
          if (n && n.lastThis === this && t(a, n.lastArgs)) return n.lastResult;
          var o = e.apply(this, a);
          return (n = { lastResult: o, lastArgs: a, lastThis: this }), o;
        }
        return (
          (a.clear = function () {
            n = null;
          }),
          a
        );
      }
    },
    307: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return p;
      }),
        n.d(t, "c", function () {
          return v;
        }),
        n.d(t, "b", function () {
          return y;
        }),
        n.d(t, "a", function () {
          return O;
        });
      var a = n(92),
        r = n(88),
        o = n(89),
        l = n(6),
        c = n(2),
        i = n(87),
        s = n.n(i),
        u = n(187),
        d = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        p = c.createContext({
          siderHook: {
            addSider: function () {
              return null;
            },
            removeSider: function () {
              return null;
            },
          },
        });
      function m(e) {
        var t = e.suffixCls,
          n = e.tagName,
          a = e.displayName;
        return function (e) {
          var r = function (a) {
            var r = c.useContext(u.b).getPrefixCls,
              o = a.prefixCls,
              i = r(t, o);
            return c.createElement(
              e,
              Object(l.a)({ prefixCls: i, tagName: n }, a)
            );
          };
          return (r.displayName = a), r;
        };
      }
      var f = function (e) {
          var t = e.prefixCls,
            n = e.className,
            a = e.children,
            r = e.tagName,
            o = d(e, ["prefixCls", "className", "children", "tagName"]),
            i = s()(t, n);
          return c.createElement(r, Object(l.a)({ className: i }, o), a);
        },
        b = m({
          suffixCls: "layout",
          tagName: "section",
          displayName: "Layout",
        })(function (e) {
          var t,
            n = c.useContext(u.b).direction,
            i = c.useState([]),
            m = Object(o.a)(i, 2),
            f = m[0],
            b = m[1],
            v = e.prefixCls,
            y = e.className,
            O = e.children,
            h = e.hasSider,
            g = e.tagName,
            C = d(e, [
              "prefixCls",
              "className",
              "children",
              "hasSider",
              "tagName",
            ]),
            j = s()(
              v,
              ((t = {}),
              Object(r.a)(
                t,
                "".concat(v, "-has-sider"),
                "boolean" === typeof h ? h : f.length > 0
              ),
              Object(r.a)(t, "".concat(v, "-rtl"), "rtl" === n),
              t),
              y
            ),
            x = c.useMemo(function () {
              return {
                siderHook: {
                  addSider: function (e) {
                    b(function (t) {
                      return [].concat(Object(a.a)(t), [e]);
                    });
                  },
                  removeSider: function (e) {
                    b(function (t) {
                      return t.filter(function (t) {
                        return t !== e;
                      });
                    });
                  },
                },
              };
            }, []);
          return c.createElement(
            p.Provider,
            { value: x },
            c.createElement(g, Object(l.a)({ className: j }, C), O)
          );
        }),
        v = m({
          suffixCls: "layout-header",
          tagName: "header",
          displayName: "Header",
        })(f),
        y = m({
          suffixCls: "layout-footer",
          tagName: "footer",
          displayName: "Footer",
        })(f),
        O = m({
          suffixCls: "layout-content",
          tagName: "main",
          displayName: "Content",
        })(f);
      t.e = b;
    },
  },
]);
//# sourceMappingURL=9.8a385f12.chunk.js.map
