(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [27],
  {
    131: function (e, t, n) {
      "use strict";
      var a = n(89),
        i = n(2);
      t.a = function (e) {
        var t = Object(i.useState)(e),
          n = Object(a.a)(t, 2),
          c = n[0],
          r = n[1];
        return [
          c,
          Object(i.useCallback)(function (e) {
            r(e.target.value);
          }, []),
          r,
        ];
      };
    },
    175: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "d", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return j;
        });
      var a,
        i = n(94),
        c = n(548),
        r = n(45),
        o = n(47),
        l = n(176),
        s = Object(c.a)(
          a ||
            (a = Object(i.a)([
              "\n  query adminLogin {\n    adminLogin @client\n  }\n",
            ]))
        ),
        u = function () {
          o.b.cache.writeQuery({ query: s, data: { adminLogin: !0 } }),
            localStorage.setItem("admin", "".concat(Date.now() + 72e5)),
            Object(o.a)(!0);
        },
        b = function () {
          o.b.cache.writeQuery({ query: s, data: { adminLogin: !1 } }),
            localStorage.removeItem("admin"),
            Object(o.a)(!1);
        },
        m = function (e) {
          localStorage.setItem("stno", "".concat(e));
        },
        j = function () {
          localStorage.removeItem("stno"),
            r.b.success(
              "\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
            ),
            l.a.push("/main");
        };
    },
    176: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n(10),
        i = Object(a.a)({ forceRefresh: !0 });
    },
    545: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(94),
        i = n(89),
        c = n(2),
        r = n(244),
        o = n(296),
        l = n(247),
        s = o.e;
      (s.Header = o.c), (s.Footer = o.b), (s.Content = o.a), (s.Sider = l.b);
      var u = s,
        b = n(6),
        m = n(88),
        j = n(92),
        d = n(87),
        p = n.n(d),
        O = n(113),
        h = n(253),
        f = n(252),
        k = n(170),
        y = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
              t.indexOf(a[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
                (n[a[i]] = e[a[i]]);
          }
          return n;
        },
        v = function (e) {
          var t,
            n,
            a = e.prefixCls,
            i = e.separator,
            r = void 0 === i ? "/" : i,
            o = e.children,
            l = e.overlay,
            s = e.dropdownProps,
            u = y(e, [
              "prefixCls",
              "separator",
              "children",
              "overlay",
              "dropdownProps",
            ]),
            m = (0, c.useContext(k.b).getPrefixCls)("breadcrumb", a);
          return (
            (t =
              "href" in u
                ? c.createElement(
                    "a",
                    Object(b.a)({ className: "".concat(m, "-link") }, u),
                    o
                  )
                : c.createElement(
                    "span",
                    Object(b.a)({ className: "".concat(m, "-link") }, u),
                    o
                  )),
            (n = t),
            (t = l
              ? c.createElement(
                  f.a,
                  Object(b.a)({ overlay: l, placement: "bottomCenter" }, s),
                  c.createElement(
                    "span",
                    { className: "".concat(m, "-overlay-link") },
                    n,
                    c.createElement(h.a, null)
                  )
                )
              : n),
            o
              ? c.createElement(
                  "span",
                  null,
                  t,
                  r &&
                    c.createElement(
                      "span",
                      { className: "".concat(m, "-separator") },
                      r
                    )
                )
              : null
          );
        };
      v.__ANT_BREADCRUMB_ITEM = !0;
      var x = v,
        g = function (e) {
          var t = e.children,
            n = (0, c.useContext(k.b).getPrefixCls)("breadcrumb");
          return c.createElement(
            "span",
            { className: "".concat(n, "-separator") },
            t || "/"
          );
        };
      g.__ANT_BREADCRUMB_SEPARATOR = !0;
      var _ = g,
        w = n(99),
        S = n(111),
        C = function (e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) &&
              t.indexOf(a) < 0 &&
              (n[a] = e[a]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var i = 0;
            for (a = Object.getOwnPropertySymbols(e); i < a.length; i++)
              t.indexOf(a[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[i]) &&
                (n[a[i]] = e[a[i]]);
          }
          return n;
        };
      function E(e, t, n, a) {
        var i = n.indexOf(e) === n.length - 1,
          r = (function (e, t) {
            if (!e.breadcrumbName) return null;
            var n = Object.keys(t).join("|");
            return e.breadcrumbName.replace(
              new RegExp(":(".concat(n, ")"), "g"),
              function (e, n) {
                return t[n] || e;
              }
            );
          })(e, t);
        return i
          ? c.createElement("span", null, r)
          : c.createElement("a", { href: "#/".concat(a.join("/")) }, r);
      }
      var I = function (e, t) {
          return (
            (e = (e || "").replace(/^\//, "")),
            Object.keys(t).forEach(function (n) {
              e = e.replace(":".concat(n), t[n]);
            }),
            e
          );
        },
        N = function (e) {
          var t,
            n = e.prefixCls,
            a = e.separator,
            i = void 0 === a ? "/" : a,
            o = e.style,
            l = e.className,
            s = e.routes,
            u = e.children,
            d = e.itemRender,
            h = void 0 === d ? E : d,
            f = e.params,
            y = void 0 === f ? {} : f,
            v = C(e, [
              "prefixCls",
              "separator",
              "style",
              "className",
              "routes",
              "children",
              "itemRender",
              "params",
            ]),
            g = c.useContext(k.b),
            _ = g.getPrefixCls,
            N = g.direction,
            P = _("breadcrumb", n);
          if (s && s.length > 0) {
            var M = [];
            t = s.map(function (e) {
              var t,
                n = I(e.path, y);
              return (
                n && M.push(n),
                e.children &&
                  e.children.length &&
                  (t = c.createElement(
                    r.a,
                    null,
                    e.children.map(function (e) {
                      return c.createElement(
                        r.a.Item,
                        { key: e.path || e.breadcrumbName },
                        h(
                          e,
                          y,
                          s,
                          (function (e, t, n) {
                            var a = Object(j.a)(e),
                              i = I(t || "", n);
                            return i && a.push(i), a;
                          })(M, e.path, y)
                        )
                      );
                    })
                  )),
                c.createElement(
                  x,
                  { overlay: t, separator: i, key: n || e.breadcrumbName },
                  h(e, y, s, M)
                )
              );
            });
          } else
            u &&
              (t = Object(O.a)(u).map(function (e, t) {
                return e
                  ? (Object(w.a)(
                      e.type &&
                        (!0 === e.type.__ANT_BREADCRUMB_ITEM ||
                          !0 === e.type.__ANT_BREADCRUMB_SEPARATOR),
                      "Breadcrumb",
                      "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"
                    ),
                    Object(S.a)(e, { separator: i, key: t }))
                  : e;
              }));
          var W = p()(P, Object(m.a)({}, "".concat(P, "-rtl"), "rtl" === N), l);
          return c.createElement(
            "div",
            Object(b.a)({ className: W, style: o }, v),
            t
          );
        };
      (N.Item = x), (N.Separator = _);
      var P = N,
        M = n(546),
        W = n(494),
        A = n(200),
        R = [
          {
            title: "intro",
            ko_title: "\uc0ac\uc5c5\ub2e8 \uc18c\uac1c",
            description: "Introduction",
            subMenu: [
              {
                key: "intro-introduce",
                title: "intro-introduce",
                ko_title: "\uc778\uc0ac\ub9d0",
              },
              {
                key: "intro-overview",
                title: "intro-overview",
                ko_title: "\uc0ac\uc5c5\uac1c\uc694",
              },
              {
                key: "intro-history",
                title: "intro-history",
                ko_title: "\uc5f0\ud601",
              },
              {
                key: "intro-task",
                title: "intro-task",
                ko_title: "\uc870\uc9c1\ub3c4 \ubc0f \uc5c5\ubb34",
              },
              {
                key: "intro-route",
                title: "intro-route",
                ko_title: "\uc624\uc2dc\ub294\uae38",
              },
            ],
          },
          {
            title: "basic",
            ko_title: "SW\uae30\ucd08\uad50\uc721",
            description: "SW Basic Education",
            subMenu: [
              {
                key: "basic-overview",
                title: "basic-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "basic-pre",
                title: "basic-pre-education",
                ko_title: "\uc785\ud559\uc804 SW\uad50\uc721",
              },
              {
                key: "basic-basicedu",
                title: "basic-education",
                ko_title: "SW\uae30\ucd08\uad50\uc721",
              },
              {
                key: "basic-creativity",
                title: "basic-creativity",
                ko_title: "SW\ucc3d\uc758\uc5ed\ub7c9\uc778\uc99d",
              },
              {
                key: "basic-AI",
                title: "basic-AI",
                ko_title: "AI SW\uc11c\ud3ec\ud130\uc988\uba58\ud1a0\ub9c1",
              },
              {
                key: "basic-online",
                title: "basic-online",
                ko_title:
                  "\uac1c\ubc29\ud615\uc628\ub77c\uc778\ud50c\ub7ab\ud3fc",
              },
            ],
          },
          {
            title: "major",
            ko_title: "SW\uc804\uacf5\uad50\uc721",
            description: "SW Major Education",
            subMenu: [
              {
                key: "major-overview",
                title: "major-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "major-project",
                title: "major-project",
                ko_title:
                  "\ud504\ub85c\uc81d\ud2b8 \uae30\ubc18 \uad50\uc721\uacfc\uc815",
              },
              {
                key: "major-sw",
                title: "major-sw",
                ko_title: "\ubab0\uc785\ud615 SW\uad50\uc721\uacfc\uc815",
              },
              {
                key: "major-opensource",
                title: "major-opensource",
                ko_title: "\uc624\ud508\uc18c\uc2a4 SW \uad50\uc721",
              },
              {
                key: "major-verify",
                title: "major-verify",
                ko_title:
                  "\uc18c\ud504\ud2b8\uc6e8\uc5b4\uc804\ubb38\uc5ed\ub7c9\uc778\uc99d\uc81c",
              },
              {
                key: "major-training",
                title: "major-training",
                ko_title: "\ud574\uc678\ud604\uc7a5\uc2e4\uc2b5",
              },
              {
                key: "major-platform",
                title: "major-platform",
                ko_title: "SW\uc5ed\ub7c9\uac15\ud654\ud50c\ub7ab\ud3fc",
              },
            ],
          },
          {
            title: "integration",
            ko_title: "SW\uc735\ud569\uad50\uc721",
            description: "SW Convergence Education",
            subMenu: [
              {
                key: "integration-overview",
                title: "integration-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "integration-swmajor",
                title: "integration-swmajor",
                ko_title: "SW\uc5f0\uacc4/\ubcf5\uc218\uc804\uacf5",
              },
            ],
          },
          {
            title: "value",
            ko_title: "SW\uac00\uce58\ud655\uc0b0",
            description: "SW Value Diffusion",
            subMenu: [
              {
                key: "value-overview",
                title: "value-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "value-edu",
                title: "value-edu",
                ko_title: "\uc218\uc694\uc911\uc2ec AI \xb7 SW \uad50\uc721",
              },
              {
                key: "value-training",
                title: "value-training",
                ko_title: "AI \xb7 SW \uc120\ub3c4\uc790 \uc591\uc131",
              },
              {
                key: "value-share",
                title: "value-share",
                ko_title: "AI \xb7 SW \uac00\uce58\uacf5\uc720",
              },
            ],
          },
          {
            title: "cooperation",
            ko_title: "SW\uc0b0\ud559\ud611\ub825",
            description: "SW Industry University Cooperation",
            subMenu: [
              {
                key: "cooperation-overview",
                title: "cooperation-overview",
                ko_title: "\uac1c\uc694",
              },
              {
                key: "cooperation-network",
                title: "cooperation-network",
                ko_title:
                  "\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ub124\ud2b8\uc6cc\ud06c",
              },
              {
                key: "cooperation-project",
                title: "cooperation-project",
                ko_title:
                  "\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc758\ud504\ub85c\uc81d\ud2b8",
              },
              {
                key: "cooperation-internship",
                title: "cooperation-internship",
                ko_title:
                  "\uad6d\ub0b4\xb7\uc678 \uae30\uad00\uacfc\uc5f0\uacc4\uc778\ud134\uc27d",
              },
            ],
          },
          {
            title: "achievement",
            ko_title: "\uc0ac\uc5c5\uc131\uacfc",
            description: "Business Performance",
            subMenu: [
              {
                key: "achievement-news",
                title: "achievement-news",
                ko_title: "\uc0ac\uc5c5\ub2e8 \uc18c\uc2dd",
              },
              {
                key: "achievement-aidnews",
                title: "achievement-aidnews",
                ko_title: "SW\uad50\uc721\uc9c0\uc6d0\uc13c\ud130 \uc18c\uc2dd",
              },
              {
                key: "achievement-valuenews",
                title: "achievement-valuenews",
                ko_title: "SW\uac00\uce58\ud655\uc0b0\uc13c\ud130 \uc18c\uc2dd",
              },
              {
                key: "achievement-coopnews",
                title: "achievement-coopnews",
                ko_title: "SW\uc0b0\ud559\ud611\ub825\uc18c\uc2dd",
              },
              {
                key: "achievement-startup",
                title: "achievement-startup",
                ko_title: "\ucc3d\uc5c5\uc9c0\uc6d0 \uc18c\uc2dd",
              },
            ],
          },
          {
            title: "community",
            ko_title: "\uc54c\ub9bc\ub9c8\ub2f9",
            description: "Community",
            subMenu: [
              {
                key: "community-notice",
                title: "community-notice",
                ko_title: "\uacf5\uc9c0\uc0ac\ud56d",
              },
              {
                key: "community-administration",
                title: "community-administration",
                ko_title: "\ud559\uc0ac\uacf5\uc9c0",
              },
              {
                key: "community-storage",
                title: "community-storage",
                ko_title: "\uc11c\uc2dd\uc790\ub8cc\uc2e4",
              },
              {
                key: "community-request",
                title: "community-request",
                ko_title: "\uac74\uc758\uc0ac\ud56d",
              },
              {
                key: "community-help",
                title: "community-help",
                ko_title: "\ud5ec\ud504\ub370\uc2a4\ud06c",
              },
              {
                key: "community-sitemap",
                title: "community-sitemap",
                ko_title: "\uc0ac\uc774\ud2b8\ub9f5",
              },
            ],
          },
          {
            title: "sitelink",
            ko_title: "\uc0ac\uc774\ud2b8\ub9c1\ud06c",
            description: "Site-Link",
            subMenu: [
              {
                key: "site-cs",
                title: "site-cs",
                ko_title: "\ucef4\ud4e8\ud130\uacf5\ud559\ubd80",
              },
              {
                key: "site-ai",
                title: "site-ai",
                ko_title: "AI\uc18c\ud504\ud2b8\uc6e8\uc5b4\ud559\uacfc",
              },
              {
                key: "site-convergence",
                title: "site-convergence",
                ko_title: "SW\uc735\ud569\ud559\ubd80",
              },
              {
                key: "site-it",
                title: "site-it",
                ko_title: "IT\uad50\uc721\ud559\ubd80",
              },
              {
                key: "site-smartcar",
                title: "site-smartcar",
                ko_title:
                  "\uc2a4\ub9c8\ud2b8\uc790\ub3d9\ucc28\uacf5\ud559\ubd80",
              },
              {
                key: "site-sw",
                title: "site-sw",
                ko_title: "SW\uc735\ud569\uad50\uc721\uc6d0",
              },
            ],
          },
        ],
        B = n(4),
        z = n(40),
        L = n(11),
        T = Object(z.a)(function () {
          return Promise.all([n.e(1), n.e(2), n.e(4), n.e(19)]).then(
            n.bind(null, 555)
          );
        }),
        H = Object(z.a)(function () {
          return Promise.all([n.e(3), n.e(5), n.e(22)]).then(n.bind(null, 556));
        }),
        U = Object(z.a)(function () {
          return Promise.all([n.e(3), n.e(4), n.e(5), n.e(17)]).then(
            n.bind(null, 553)
          );
        }),
        q = Object(z.a)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(8), n.e(32)]).then(
            n.bind(null, 537)
          );
        }),
        D = Object(z.a)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(2), n.e(16)]).then(
            n.bind(null, 557)
          );
        }),
        V = Object(z.a)(function () {
          return Promise.all([n.e(4), n.e(18)]).then(n.bind(null, 558));
        }),
        F = Object(z.a)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(20)]).then(n.bind(null, 538));
        }),
        J = Object(z.a)(function () {
          return Promise.all([n.e(0), n.e(1), n.e(4), n.e(8), n.e(35)]).then(
            n.bind(null, 559)
          );
        }),
        K = Object(z.a)(function () {
          return Promise.all([n.e(15), n.e(33)]).then(n.bind(null, 560));
        }),
        Q = Object(z.a)(function () {
          return Promise.all([n.e(0), n.e(25), n.e(29)]).then(
            n.bind(null, 539)
          );
        }),
        G = function () {
          var e = Object(B.i)(),
            t = e.param,
            n = e.subparam;
          return Object(L.jsx)(L.Fragment, {
            children: (function (e, t) {
              switch (e) {
                case "dashboard":
                  return Object(L.jsx)(U, {});
                case "intro":
                case "basic":
                case "major":
                case "integration":
                case "value":
                case "cooperation":
                  return t === "create-image-".concat(e)
                    ? Object(L.jsx)(F, {})
                    : t === "edit-image-".concat(e)
                    ? Object(L.jsx)(J, {})
                    : t === "create-".concat(e)
                    ? Object(L.jsx)(D, {})
                    : t === "detail-".concat(e)
                    ? Object(L.jsx)(T, {})
                    : t === "edit-".concat(e)
                    ? Object(L.jsx)(q, {})
                    : t.includes("storage")
                    ? Object(L.jsx)(H, {})
                    : Object(L.jsx)(V, {});
                case "achievement":
                  return t === "create-image-".concat(e)
                    ? Object(L.jsx)(F, {})
                    : t === "edit-image-".concat(e)
                    ? Object(L.jsx)(J, {})
                    : t === "create-".concat(e)
                    ? Object(L.jsx)(D, {})
                    : t === "detail-".concat(e)
                    ? Object(L.jsx)(T, {})
                    : t === "edit-".concat(e)
                    ? Object(L.jsx)(q, {})
                    : (t.includes("storage"), Object(L.jsx)(H, {}));
                case "community":
                  return t === "create-image-".concat(e)
                    ? Object(L.jsx)(F, {})
                    : t === "edit-image-".concat(e)
                    ? Object(L.jsx)(J, {})
                    : t === "create-".concat(e)
                    ? Object(L.jsx)(D, {})
                    : t === "detail-".concat(e)
                    ? Object(L.jsx)(T, {})
                    : t === "edit-".concat(e)
                    ? Object(L.jsx)(q, {})
                    : t.includes("storage")
                    ? Object(L.jsx)(H, {})
                    : t.includes("sitemap")
                    ? Object(L.jsx)(V, {})
                    : Object(L.jsx)(H, {});
                case "sitelink":
                  return t === "create-image-".concat(e)
                    ? Object(L.jsx)(F, {})
                    : t === "edit-image-".concat(e)
                    ? Object(L.jsx)(J, {})
                    : Object(L.jsx)(V, {});
                case "link":
                  return Object(L.jsx)(K, {});
                case "popup":
                  return Object(L.jsx)(Q, {});
                default:
                  return;
              }
            })(t, n),
          });
        },
        X = n(46);
      var Y = n(47),
        Z = n(131),
        $ = n(175),
        ee = n(45),
        te = n(90),
        ne = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z",
                },
              },
            ],
          },
          name: "logout",
          theme: "outlined",
        },
        ae = n(93),
        ie = function (e, t) {
          return c.createElement(
            ae.a,
            Object(te.a)(Object(te.a)({}, e), {}, { ref: t, icon: ne })
          );
        };
      ie.displayName = "LogoutOutlined";
      var ce = c.forwardRef(ie),
        re = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z",
                },
              },
            ],
          },
          name: "user",
          theme: "outlined",
        },
        oe = function (e, t) {
          return c.createElement(
            ae.a,
            Object(te.a)(Object(te.a)({}, e), {}, { ref: t, icon: re })
          );
        };
      oe.displayName = "UserOutlined";
      var le = c.forwardRef(oe),
        se = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z",
                },
              },
            ],
          },
          name: "lock",
          theme: "outlined",
        },
        ue = function (e, t) {
          return c.createElement(
            ae.a,
            Object(te.a)(Object(te.a)({}, e), {}, { ref: t, icon: se })
          );
        };
      ue.displayName = "LockOutlined";
      var be,
        me,
        je,
        de = c.forwardRef(ue),
        pe = n(103),
        Oe =
          (pe.a.div(be || (be = Object(a.a)([""]))),
          pe.a.div(
            me ||
              (me = Object(a.a)([
                "\n  width: 100vw;\n  height: 100vh;\n  & .login-form {\n    height: 700px;\n    width: 800px;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & .login-input {\n    width: 300px;\n  }\n",
              ]))
          )),
        he =
          ((t.default = function () {
            var e = (function (e) {
                var t = e(),
                  n = Object(c.useState)(t)[1];
                return (
                  Object(c.useEffect)(
                    function () {
                      var a = e();
                      if (t === a) return e.onNextChange(n);
                      n(a);
                    },
                    [t]
                  ),
                  t
                );
              })(Y.a),
              t = Object(B.g)(),
              n = Object(B.i)(),
              a = n.param,
              o = n.subparam,
              l = Object(Z.a)(""),
              s = Object(i.a)(l, 3),
              b = s[0],
              m = s[1],
              j = s[2],
              d = Object(Z.a)(""),
              p = Object(i.a)(d, 3),
              O = p[0],
              h = p[1],
              f = p[2],
              k = Object(c.useState)("\ub300\uc2dc\ubcf4\ub4dc"),
              y = Object(i.a)(k, 2),
              v = y[0],
              x = y[1],
              g = Object(c.useState)("\ub300\uc2dc\ubcf4\ub4dc"),
              _ = Object(i.a)(g, 2),
              w = _[0],
              S = _[1],
              C = Object(c.useState)({
                param: "dashboard",
                subparam: "dashboard",
              }),
              E = Object(i.a)(C, 2),
              I = (E[0], E[1]),
              N = Object(c.useState)(!1),
              z = Object(i.a)(N, 2),
              T = z[0],
              H = z[1],
              U = r.a.SubMenu,
              q = u.Header,
              D = u.Content,
              V = u.Sider,
              F = Object(c.useCallback)(
                function () {
                  "adminswe" === b && "adminswe" === O
                    ? (j(""),
                      f(""),
                      Object($.b)(),
                      ee.b.success(
                        "\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4"
                      ))
                    : ee.b.error(
                        "\uc544\uc774\ub514 & \uc554\ud638\uac00 \ud2c0\ub9bd\ub2c8\ub2e4"
                      );
                },
                [b, O, j, f]
              ),
              J = Object(c.useCallback)(function (e, t, n, a) {
                H(!0), S(t), x(e), I({ param: n, subparam: a });
              }, []),
              K = Object(c.useCallback)(function () {
                H(!1),
                  S("\ub300\uc2dc\ubcf4\ub4dc"),
                  x("\ub300\uc2dc\ubcf4\ub4dc"),
                  I({ param: "dashboard", subparam: "dashboard" });
              }, []);
            return (
              Object(c.useEffect)(
                function () {
                  "dashboard" !== a &&
                    (H(!0),
                    S(
                      (function (e) {
                        var t = R.find(function (t) {
                          return t.title === e;
                        });
                        return t ? t.ko_title : "";
                      })(a)
                    ),
                    x(
                      (function (e, t) {
                        for (var n = "", a = 0; a < R.length; a++)
                          if (R[a].title === e) {
                            for (var i = 0; i < R[a].subMenu.length; i++)
                              if (R[a].subMenu[i].title === t) {
                                n = R[a].subMenu[i].ko_title;
                                break;
                              }
                            break;
                          }
                        return n;
                      })(a, o)
                    ),
                    I({ param: a, subparam: o }));
                },
                [a, o, t]
              ),
              Object(c.useEffect)(function () {
                var e = localStorage.getItem("admin");
                e && parseInt(e, 10) / 1e3 < Date.now() / 1e3 && Object($.a)();
              }, []),
              Object(L.jsx)(u, {
                style: { minHeight: "100vh" },
                children: e
                  ? Object(L.jsxs)(L.Fragment, {
                      children: [
                        Object(L.jsxs)(q, {
                          className: "header",
                          children: [
                            Object(L.jsx)("div", {
                              className: "logo",
                              children: Object(L.jsx)("img", {
                                src: "/img/admin_logo.png",
                                alt: "logoimg",
                                width: 200,
                              }),
                            }),
                            Object(L.jsxs)(r.a, {
                              theme: "dark",
                              mode: "horizontal",
                              style: {
                                display: "flex",
                                justifyContent: "flex-end",
                              },
                              children: [
                                Object(L.jsx)(
                                  r.a.Item,
                                  {
                                    onClick: function () {
                                      Object($.a)(), t.push("/main");
                                    },
                                    children:
                                      "\uba54\uc778\uc73c\ub85c \uac00\uae30",
                                  },
                                  1
                                ),
                                Object(L.jsxs)(
                                  r.a.Item,
                                  {
                                    onClick: function () {
                                      return Object($.a)();
                                    },
                                    children: [
                                      Object(L.jsx)(ce, {}),
                                      " Logout",
                                    ],
                                  },
                                  2
                                ),
                              ],
                            }),
                          ],
                        }),
                        Object(L.jsxs)(u, {
                          children: [
                            Object(L.jsx)(V, {
                              width: 200,
                              className: "site-layout-background",
                              children: Object(L.jsxs)(r.a, {
                                mode: "inline",
                                defaultSelectedKeys: ["dashboard"],
                                defaultOpenKeys: ["dashboard"],
                                style: { height: "100%", borderRight: 0 },
                                children: [
                                  Object(L.jsx)(
                                    r.a.Item,
                                    {
                                      title: "\ub300\uc2dc\ubcf4\ub4dc",
                                      children: Object(L.jsx)(X.b, {
                                        to: {
                                          pathname:
                                            "/admin/dashboard/dashboard",
                                          state: { refresh: !0 },
                                        },
                                        onClick: K,
                                        children: Object(L.jsx)("span", {
                                          children: "\ub300\uc2dc\ubcf4\ub4dc",
                                        }),
                                      }),
                                    },
                                    "dashboard"
                                  ),
                                  R.map(function (e) {
                                    return Object(L.jsx)(
                                      U,
                                      {
                                        title: e.ko_title,
                                        children: e.subMenu.map(function (
                                          t,
                                          n
                                        ) {
                                          return Object(L.jsx)(
                                            r.a.Item,
                                            {
                                              children: Object(L.jsx)(X.b, {
                                                to: "/admin/"
                                                  .concat(e.title, "/")
                                                  .concat(t.key),
                                                onClick: function () {
                                                  return J(
                                                    t.ko_title,
                                                    e.ko_title,
                                                    e.title,
                                                    t.key
                                                  );
                                                },
                                                children: Object(L.jsx)(
                                                  "span",
                                                  { children: t.ko_title }
                                                ),
                                              }),
                                            },
                                            t.title
                                          );
                                        }),
                                      },
                                      e.ko_title
                                    );
                                  }),
                                  Object(L.jsx)(U, {
                                    title: "\ud64d\ubcf4\uc601\uc0c1",
                                    children: Object(L.jsx)(r.a.Item, {
                                      onClick: function () {
                                        S("\ud64d\ubcf4\uc601\uc0c1"),
                                          x(
                                            "\ud64d\ubcf4\uc601\uc0c1\ub9c1\ud06c"
                                          );
                                      },
                                      children: Object(L.jsx)(X.b, {
                                        to: "/admin/link/link",
                                        children: Object(L.jsx)("span", {
                                          children:
                                            "\ud64d\ubcf4\uc601\uc0c1\ub9c1\ud06c",
                                        }),
                                      }),
                                    }),
                                  }),
                                  Object(L.jsx)(U, {
                                    title: "\ud31d\uc5c5",
                                    children: Object(L.jsx)(r.a.Item, {
                                      onClick: function () {
                                        S("\ud31d\uc5c5"),
                                          x("\ud31d\uc5c5\uad00\ub9ac");
                                      },
                                      children: Object(L.jsx)(X.b, {
                                        to: "/admin/popup/popup",
                                        children: Object(L.jsx)("span", {
                                          children: "\ud31d\uc5c5\uad00\ub9ac",
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(L.jsxs)(u, {
                              style: { padding: "0 24px 24px" },
                              children: [
                                T &&
                                  Object(L.jsxs)(he, {
                                    style: { margin: "16px 0" },
                                    children: [
                                      Object(L.jsx)(P.Item, {
                                        className: "bread-item",
                                        children: w,
                                      }),
                                      Object(L.jsx)(P.Item, {
                                        className: "bread-item",
                                        children: v,
                                      }),
                                    ],
                                  }),
                                Object(L.jsx)(D, {
                                  className: "site-layout-background",
                                  style: {
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                  },
                                  children: Object(L.jsx)(G, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : Object(L.jsx)(Oe, {
                      children: Object(L.jsxs)(M.a, {
                        name: "normal_login",
                        className: "login-form",
                        initialValues: { remember: !0 },
                        onFinish: F,
                        children: [
                          Object(L.jsx)(M.a.Item, {
                            name: "username",
                            rules: [
                              {
                                required: !0,
                                message: "Please input your Username!",
                              },
                            ],
                            children: Object(L.jsx)(W.a, {
                              prefix: Object(L.jsx)(le, {
                                className: "site-form-item-icon",
                              }),
                              placeholder: "Username",
                              value: b,
                              onChange: m,
                              className: "login-input",
                            }),
                          }),
                          Object(L.jsx)(M.a.Item, {
                            name: "password",
                            rules: [
                              {
                                required: !0,
                                message: "Please input your Password!",
                              },
                            ],
                            children: Object(L.jsx)(W.a, {
                              prefix: Object(L.jsx)(de, {
                                className: "site-form-item-icon",
                              }),
                              type: "password",
                              value: O,
                              onChange: h,
                              className: "login-input",
                              placeholder: "Password",
                            }),
                          }),
                          Object(L.jsx)(M.a.Item, {
                            children: Object(L.jsx)(A.a, {
                              type: "primary",
                              htmlType: "submit",
                              className: "login-form-button",
                              children: "Log in",
                            }),
                          }),
                        ],
                      }),
                    }),
              })
            );
          }),
          Object(pe.a)(P)(
            je ||
              (je = Object(a.a)([
                "\n  & .bread-item {\n    font-size: 16px;\n    font-weight: 600;\n  }\n",
              ]))
          ));
    },
  },
]);
//# sourceMappingURL=27.6fa3b2f4.chunk.js.map
